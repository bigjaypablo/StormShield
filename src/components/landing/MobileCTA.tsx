import { useEffect, useState } from "react";
import { MessageCircle, Phone } from "lucide-react";
import { telHref, whatsappHref } from "@/lib/site";
import { cn } from "@/lib/utils";
import { scrollToInspect } from "./Cta";

export function MobileCTA() {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const target = document.getElementById("inspect");
    if (!target || typeof IntersectionObserver === "undefined") return;
    const observer = new IntersectionObserver(
      ([entry]) => setHidden(Boolean(entry?.isIntersecting)),
      { threshold: 0.25 },
    );
    observer.observe(target);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      className={cn(
        "fixed inset-x-0 bottom-0 z-40 border-t border-line bg-surface/95 px-3 pt-2 backdrop-blur-md md:hidden",
        "transition-transform duration-200 ease-out",
        hidden ? "translate-y-full" : "translate-y-0",
      )}
      style={{ paddingBottom: "max(0.65rem, env(safe-area-inset-bottom))" }}
    >
      <div className="mx-auto grid max-w-lg grid-cols-[2.75rem_1fr_2.75rem] items-center gap-2">
        <a
          href={telHref}
          className="grid size-11 place-items-center rounded-full bg-surface-2 text-ink"
          aria-label="Call StormShield Roofing"
        >
          <Phone className="size-4" />
        </a>
        <button
          type="button"
          onClick={scrollToInspect}
          className="h-11 rounded-full bg-primary px-3 text-sm font-medium tracking-tight text-primary-fg"
        >
          Get free inspection
        </button>
        <a
          href={whatsappHref}
          target="_blank"
          rel="noreferrer"
          className="grid size-11 place-items-center rounded-full bg-surface-2 text-ink"
          aria-label="WhatsApp StormShield Roofing"
        >
          <MessageCircle className="size-4" />
        </a>
      </div>
    </div>
  );
}
