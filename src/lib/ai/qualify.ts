import type { LeadInput } from "@/lib/leads/schema";
import { serviceLabels } from "@/lib/leads/schema";

export type LeadQualification = {
  category: string;
  urgency: "low" | "medium" | "high";
  summary: string;
  talkingPoints: string[];
};

const FALLBACK: LeadQualification = {
  category: "unclassified",
  urgency: "medium",
  summary: "AI qualification was unavailable. Review the raw lead details.",
  talkingPoints: [],
};

export async function qualifyLead(
  lead: LeadInput,
): Promise<LeadQualification | null> {
  const apiKey = process.env.XAI_API_KEY?.trim();
  if (!apiKey) return null;

  const prompt = [
    "You qualify residential roofing leads for StormShield Roofing in Dallas, Texas.",
    "Return ONLY compact JSON with keys: category (short slug), urgency (low|medium|high), summary (2-3 sentences for the owner), talkingPoints (array of 3 short bullets).",
    "Do not invent facts. Base everything on the customer's words.",
    "",
    `Name: ${lead.name}`,
    `Service selected: ${serviceLabels[lead.service]}`,
    `Address: ${lead.address}`,
    `Message: ${lead.message || "(none)"}`,
  ].join("\n");

  try {
    const res = await fetch("https://api.x.ai/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: "grok-4.5",
        temperature: 0.2,
        max_tokens: 280,
        messages: [{ role: "user", content: prompt }],
      }),
    });
    if (!res.ok) {
      console.error("[qualify] xAI error", res.status);
      return FALLBACK;
    }
    const body = (await res.json()) as {
      choices?: { message?: { content?: string } }[];
    };
    const text = body.choices?.[0]?.message?.content ?? "";
    const parsed = parseQualification(text);
    return parsed ?? FALLBACK;
  } catch (err) {
    console.error("[qualify] failed", err);
    return FALLBACK;
  }
}

function parseQualification(text: string): LeadQualification | null {
  const match = text.match(/\{[\s\S]*\}/);
  if (!match) return null;
  try {
    const raw = JSON.parse(match[0]) as Partial<LeadQualification>;
    const urgency =
      raw.urgency === "low" || raw.urgency === "high" || raw.urgency === "medium"
        ? raw.urgency
        : "medium";
    const talkingPoints = Array.isArray(raw.talkingPoints)
      ? raw.talkingPoints.filter((p): p is string => typeof p === "string").slice(0, 5)
      : [];
    if (typeof raw.summary !== "string" || !raw.summary.trim()) return null;
    return {
      category:
        typeof raw.category === "string" && raw.category.trim()
          ? raw.category.trim()
          : "general",
      urgency,
      summary: raw.summary.trim(),
      talkingPoints,
    };
  } catch {
    return null;
  }
}
