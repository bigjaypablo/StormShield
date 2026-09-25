import { whatsappHref } from "@/lib/site";
import { CallCta } from "./Cta";
import { LeadForm } from "./LeadForm";
import { Reveal } from "./Reveal";

export function Offer() {
  return (
    <section
      id="inspect"
      className="scroll-mt-24 bg-dark px-5 py-16 text-dark-fg sm:px-8 sm:py-24 lg:px-12"
    >
      <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:items-start">
        <Reveal>
          <p className="mb-4 inline-flex rounded-full border border-dark-fg/12 px-3 py-1 text-xs font-medium tracking-[0.14em] text-dark-muted uppercase">
            Free inspection
          </p>
          <h2 className="text-3xl font-medium tracking-tight sm:text-4xl lg:text-5xl">
            Your roof inspection{" "}
            <em className="font-serif italic font-normal">starts here.</em>
          </h2>
          <p className="mt-5 max-w-md text-base leading-relaxed text-dark-muted">
            Concerned about a leak, storm damage, or an aging roof? Tell us
            what's happening and we'll help you understand your options.
          </p>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-dark-muted">
            No manufactured urgency. If the roof can wait, we'll say so. If it
            can't, you'll know why.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <CallCta
              variant="ghost"
              className="text-dark-fg hover:bg-dark-fg/10"
            />
            <a
              href={whatsappHref}
              target="_blank"
              rel="noreferrer"
              className="text-sm text-dark-muted underline-offset-4 hover:text-dark-fg hover:underline"
            >
              WhatsApp us
            </a>
          </div>
        </Reveal>
        <Reveal delay={0.08} className="text-ink">
          <LeadForm />
        </Reveal>
      </div>
    </section>
  );
}
