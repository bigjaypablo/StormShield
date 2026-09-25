import { reasons } from "@/data/content";
import { InspectionCta } from "./Cta";
import { Reveal } from "./Reveal";

export function WhyUs() {
  return (
    <section id="why" className="scroll-mt-24 bg-paper px-5 py-16 sm:px-8 sm:py-24 lg:px-12">
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-start">
        <Reveal>
          <p className="mb-4 inline-flex rounded-full border border-line px-3 py-1 text-xs font-medium tracking-[0.14em] text-muted uppercase">
            Why StormShield
          </p>
          <h2 className="text-3xl font-medium tracking-tight sm:text-4xl lg:text-5xl">
            The standard is simple:{" "}
            <em className="font-serif italic font-normal">tell you the truth about the roof.</em>
          </h2>
          <p className="mt-5 max-w-md text-base leading-relaxed text-muted">
            No invented awards. No manufactured review counts. You should trust
            the process you can see — inspection, recommendation, estimate —
            and the way we treat your home.
          </p>
          <div className="mt-8">
            <InspectionCta />
          </div>
        </Reveal>

        <div className="divide-y divide-line rounded-card bg-surface shadow-[var(--shadow-border)]">
          {reasons.map((reason, i) => (
            <Reveal key={reason.title} delay={i * 0.04}>
              <article className="grid gap-3 px-6 py-6 sm:grid-cols-[4.5rem_1fr] sm:gap-6">
                <p className="font-serif text-2xl text-subtle">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <div>
                  <h3 className="text-lg font-medium tracking-tight">{reason.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted">{reason.copy}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
