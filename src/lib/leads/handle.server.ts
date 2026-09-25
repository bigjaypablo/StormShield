import { getRequestIP } from "@tanstack/react-start/server";
import { env } from "@/lib/env.server";
import { sendEmail } from "@/lib/email/send";
import { qualifyLead } from "@/lib/ai/qualify";
import { serviceLabels, type LeadInput } from "./schema";

const WINDOW_MS = 10 * 60 * 1000;
const MAX_PER_WINDOW = 6;
const hits = new Map<string, number[]>();

function allowRequest(ip: string) {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < WINDOW_MS);
  if (recent.length >= MAX_PER_WINDOW) {
    hits.set(ip, recent);
    return false;
  }
  recent.push(now);
  hits.set(ip, recent);
  return true;
}

export async function handleLead(data: LeadInput) {
  const ip = getRequestIP({ xForwardedFor: true }) ?? "unknown";
  if (!allowRequest(ip)) {
    return {
      ok: false as const,
      error: "Too many requests. Please call us or try again shortly.",
    };
  }

  const qualification = await qualifyLead(data);
  const ownerEmail = env("OWNER_EMAIL");
  const timestamp = new Date().toISOString();

  const ownerText = formatOwnerEmail(data, timestamp, qualification);
  const ownerHtml = formatOwnerEmailHtml(data, timestamp, qualification);

  if (ownerEmail) {
    await sendEmail({
      to: ownerEmail,
      subject: `New Roofing Lead — ${data.name} (${serviceLabels[data.service]})`,
      text: ownerText,
      html: ownerHtml,
      replyTo: data.email,
    });
  } else {
    console.info("[lead] OWNER_EMAIL not set — lead captured:\n", ownerText);
  }

  await sendEmail({
    to: data.email,
    subject: "We received your StormShield Roofing inspection request",
    text: formatCustomerEmail(data),
    html: formatCustomerEmailHtml(data),
  });

  return { ok: true as const };
}

function formatOwnerEmail(
  lead: LeadInput,
  timestamp: string,
  q: Awaited<ReturnType<typeof qualifyLead>>,
) {
  const lines = [
    "New Roofing Lead",
    "",
    `Name: ${lead.name}`,
    `Email: ${lead.email}`,
    `Phone: ${lead.phone}`,
    `Address: ${lead.address}`,
    `Service Needed: ${serviceLabels[lead.service]}`,
    `Message: ${lead.message?.trim() || "(none)"}`,
    `Timestamp: ${timestamp}`,
  ];
  if (q) {
    lines.push(
      "",
      "Lead summary",
      `Category: ${q.category}`,
      `Urgency: ${q.urgency}`,
      q.summary,
    );
    if (q.talkingPoints.length) {
      lines.push("", "Talking points:");
      for (const point of q.talkingPoints) lines.push(`- ${point}`);
    }
  }
  return lines.join("\n");
}

function formatOwnerEmailHtml(
  lead: LeadInput,
  timestamp: string,
  q: Awaited<ReturnType<typeof qualifyLead>>,
) {
  const row = (label: string, value: string) =>
    `<tr><td style="padding:6px 12px 6px 0;color:#6b6860;vertical-align:top">${escapeHtml(label)}</td><td style="padding:6px 0;color:#161614">${escapeHtml(value)}</td></tr>`;

  const summary = q
    ? `<h3 style="margin:24px 0 8px;font-size:14px">Lead summary</h3>
       <p style="margin:0 0 8px">${escapeHtml(q.summary)}</p>
       <p style="margin:0;color:#6b6860;font-size:13px">Category: ${escapeHtml(q.category)} · Urgency: ${escapeHtml(q.urgency)}</p>
       ${
         q.talkingPoints.length
           ? `<ul>${q.talkingPoints.map((p) => `<li>${escapeHtml(p)}</li>`).join("")}</ul>`
           : ""
       }`
    : "";

  return `<div style="font-family:Georgia,serif;color:#161614;line-height:1.5">
    <h2 style="margin:0 0 16px">New Roofing Lead</h2>
    <table>${row("Name", lead.name)}${row("Email", lead.email)}${row("Phone", lead.phone)}${row("Address", lead.address)}${row("Service Needed", serviceLabels[lead.service])}${row("Message", lead.message?.trim() || "(none)")}${row("Timestamp", timestamp)}</table>
    ${summary}
  </div>`;
}

function formatCustomerEmail(lead: LeadInput) {
  return [
    `Hi ${lead.name.split(" ")[0] || lead.name},`,
    "",
    "Thanks — your request has been sent to the StormShield Roofing team. We'll contact you shortly to discuss your roof and schedule the free inspection.",
    "",
    `Service requested: ${serviceLabels[lead.service]}`,
    `Property: ${lead.address}`,
    "",
    "If anything is urgent, call us and mention this request.",
    "",
    "StormShield Roofing",
    "Dallas, Texas",
  ].join("\n");
}

function formatCustomerEmailHtml(lead: LeadInput) {
  return `<div style="font-family:Georgia,serif;color:#161614;line-height:1.6">
    <p>Hi ${escapeHtml(lead.name.split(" ")[0] || lead.name)},</p>
    <p>Thanks — your request has been sent to the StormShield Roofing team. We'll contact you shortly to discuss your roof and schedule the free inspection.</p>
    <p style="color:#6b6860">Service requested: ${escapeHtml(serviceLabels[lead.service])}<br/>Property: ${escapeHtml(lead.address)}</p>
    <p>If anything is urgent, call us and mention this request.</p>
    <p>StormShield Roofing<br/>Dallas, Texas</p>
  </div>`;
}

function escapeHtml(value: string) {
  const amp = String.fromCharCode(38);
  return value
    .replaceAll(amp, `${amp}amp;`)
    .replaceAll("<", `${amp}lt;`)
    .replaceAll(">", `${amp}gt;`)
    .replaceAll('"', `${amp}quot;`);
}
