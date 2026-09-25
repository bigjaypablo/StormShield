import { env } from "@/lib/env.server";

export type EmailMessage = {
  to: string;
  subject: string;
  text: string;
  html?: string;
  replyTo?: string;
};

export type EmailResult = {
  sent: boolean;
  provider: "resend" | "none";
  error?: string;
};

/**
 * Pluggable outbound email. Swap `sendWithResend` for another provider
 * without touching the lead handler.
 */
export async function sendEmail(message: EmailMessage): Promise<EmailResult> {
  const apiKey = env("EMAIL_API_KEY") ?? env("RESEND_API_KEY");
  if (!apiKey) {
    console.info("[email] No EMAIL_API_KEY / RESEND_API_KEY — skipping send", {
      to: message.to,
      subject: message.subject,
    });
    return { sent: false, provider: "none" };
  }
  return sendWithResend(apiKey, message);
}

async function sendWithResend(
  apiKey: string,
  message: EmailMessage,
): Promise<EmailResult> {
  const from =
    env("EMAIL_FROM") ?? "StormShield Roofing <leads@stormshieldroofing.com>";

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from,
      to: [message.to],
      subject: message.subject,
      text: message.text,
      html: message.html ?? undefined,
      reply_to: message.replyTo,
    }),
  });

  if (!res.ok) {
    const body = await res.text().catch(() => "");
    console.error("[email] Resend error", res.status, body);
    return {
      sent: false,
      provider: "resend",
      error: `Email provider error ${res.status}`,
    };
  }

  return { sent: true, provider: "resend" };
}
