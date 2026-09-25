import { problems } from "@/data/content";
import { InspectionCta } from "./Cta";
import { Reveal } from "./Reveal";

export function ProblemSection() {
  return (
    <section className="bg-paper px-5 py-16 sm:px-8 sm:py-24 lg:px-12">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="mb-4 inline-flex rounded-full border border-line px-3 py-1 text-xs font-medium tracking-[0.14em] text-muted uppercase">
            What we hear
          </p>
          <h2 className="max-w-2xl text-3xl font-medium tracking-tight sm:text-4xl lg:text-5xl">
            Roofs rarely fail all at once.{" "}
            <em className="font-serif italic font-normal">They warn you first.</em>
          </h2>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-muted">
            A leak, a missing shingle, a storm that felt too close — if something
            about the roof is on your mind, you are not overreacting. You just
            need a clear answer.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {problems.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.05}>
              <article className="h-full rounded-card bg-surface p-6 shadow-[var(--shadow-border)]">
                <p className="mb-4 font-serif text-2xl text-subtle">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <h3 className="text-lg font-medium tracking-tight">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{item.copy}</p>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-10">
          <p className="mb-5 max-w-xl text-muted">
            If any of this sounds familiar, start with an inspection — not a
            sales pitch.
          </p>
          <InspectionCta />
        </Reveal>
      </div>
    </section>
  );
}
