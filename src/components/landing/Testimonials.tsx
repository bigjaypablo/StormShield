import { testimonialSlots, testimonialsNote } from "@/data/content";
import { Reveal } from "./Reveal";

export function Testimonials() {
  return (
    <section id="proof" className="scroll-mt-24 bg-paper px-5 py-16 sm:px-8 sm:py-24 lg:px-12">
      <div className="mx-auto max-w-6xl">
        <Reveal className="max-w-2xl">
          <p className="mb-4 inline-flex rounded-full border border-line px-3 py-1 text-xs font-medium tracking-[0.14em] text-muted uppercase">
            Customer proof
          </p>
          <h2 className="text-3xl font-medium tracking-tight sm:text-4xl">
            Space for real stories.{" "}
            <em className="font-serif italic font-normal">Not invented ones.</em>
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-muted">{testimonialsNote}</p>
        </Reveal>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {testimonialSlots.map((slot, i) => (
            <Reveal key={slot.image} delay={i * 0.05}>
              <article className="flex h-full flex-col overflow-hidden rounded-card bg-surface shadow-[var(--shadow-border)]">
                <img
                  src={slot.image}
                  alt=""
                  width={1400}
                  height={933}
                  loading="lazy"
                  decoding="async"
                  className="aspect-story w-full object-cover img-frame"
                />
                <div className="flex flex-1 flex-col p-5">
                  <p className="inline-flex self-start rounded-full bg-surface-2 px-2.5 py-1 text-[11px] font-medium tracking-wide text-muted uppercase">
                    Placeholder
                  </p>
                  <h3 className="mt-3 text-base font-medium tracking-tight">
                    {slot.heading}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{slot.prompt}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
