import { ArrowUpRight } from "lucide-react";
import { services } from "@/data/content";
import { scrollToInspect } from "./Cta";
import { Reveal } from "./Reveal";

export function Services() {
  return (
    <section id="services" className="scroll-mt-24 bg-dark px-5 py-16 text-dark-fg sm:px-8 sm:py-24 lg:px-12">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="mb-4 inline-flex rounded-full border border-dark-fg/12 px-3 py-1 text-xs font-medium tracking-[0.14em] text-dark-muted uppercase">
            Services
          </p>
          <h2 className="max-w-3xl text-3xl font-medium tracking-tight sm:text-4xl lg:text-5xl">
            Roofing work that keeps the house{" "}
            <em className="font-serif italic font-normal">quiet, dry, and whole.</em>
          </h2>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-dark-muted">
            Inspection through replacement. Every service is here so you can
            solve the problem in front of you — not shop a catalog.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service, i) => (
            <Reveal key={service.id} delay={i * 0.04}>
              <article className="group flex h-full flex-col overflow-hidden rounded-card bg-ink">
                <div className="relative aspect-photo overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.alt}
                    width={1400}
                    height={933}
                    loading="lazy"
                    decoding="async"
                    className="size-full object-cover transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.04] img-frame-light"
                  />
                  <span className="absolute top-3 left-3 rounded-full bg-dark/55 px-2.5 py-1 text-[11px] font-medium tracking-wide text-dark-fg backdrop-blur-md">
                    {service.title}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <p className="text-sm leading-relaxed text-dark-muted">{service.copy}</p>
                  <button
                    type="button"
                    onClick={scrollToInspect}
                    className="mt-5 inline-flex items-center gap-2 self-start text-sm font-medium text-dark-fg transition-opacity hover:opacity-70"
                  >
                    Request inspection
                    <ArrowUpRight className="size-4" />
                  </button>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
