function readEnv(key: string, fallback: string) {
  const value = (import.meta.env as Record<string, string | undefined>)[key];
  return value?.trim() || fallback;
}

function digits(value: string) {
  return value.replace(/\D/g, "");
}

const DEFAULT_PHONE = "+12145550187";
const DEFAULT_WHATSAPP = "12145550187";

export const site = {
  name: "StormShield Roofing",
  shortName: "StormShield",
  location: "Dallas, Texas",
  serviceArea: "Dallas–Fort Worth and surrounding North Texas communities",
  email: "hello@stormshieldroofing.com",
  builder: "Big Jay",
  phoneRaw: readEnv("VITE_ROOFING_PHONE", DEFAULT_PHONE),
  whatsappRaw: readEnv("VITE_WHATSAPP_NUMBER", DEFAULT_WHATSAPP),
  whatsappMessage:
    "Hi StormShield Roofing, I'd like to request a free roof inspection.",
} as const;

export const phoneE164 = site.phoneRaw.startsWith("+")
  ? site.phoneRaw
  : `+${digits(site.phoneRaw)}`;

export const phoneDisplay = formatUsPhone(phoneE164);

export const telHref = `tel:${phoneE164}`;

export const whatsappDigits = digits(site.whatsappRaw);

export const whatsappHref = `https://wa.me/${whatsappDigits}?text=${encodeURIComponent(site.whatsappMessage)}`;

function formatUsPhone(e164: string) {
  const d = digits(e164);
  if (d.length === 11 && d.startsWith("1")) {
    return `(${d.slice(1, 4)}) ${d.slice(4, 7)}-${d.slice(7)}`;
  }
  if (d.length === 10) {
    return `(${d.slice(0, 3)}) ${d.slice(3, 6)}-${d.slice(6)}`;
  }
  return e164;
}
