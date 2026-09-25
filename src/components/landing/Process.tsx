import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { processSteps } from "@/data/content";
import { cn } from "@/lib/utils";
import { InspectionCta } from "./Cta";
import { Reveal } from "./Reveal";

export function Process() {
  const [active, setActive] = useState(0);
  const reduce = useReducedMotion();
  const step = processSteps[active] ?? processSteps[0];

  return (
    <section id="process" className="scroll-mt-24 bg-paper px-5 py-16 sm:px-8 sm:py-24 lg:px-12">
      <div className="mx-auto max-w-6xl">
        <Reveal className="max-w-2xl">
          <p className="mb-4 inline-flex rounded-full border border-line px-3 py-1 text-xs font-medium tracking-[0.14em] text-muted uppercase">
            Our process
          </p>
          <h2 className="text-3xl font-medium tracking-tight sm:text-4xl lg:text-5xl">
            Three steps. No mystery.{" "}
            <em className="font-serif italic font-normal">A clear next move.</em>
          </h2>
        </Reveal>

        <div className="mt-12 grid items-start gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
          <div className="flex flex-col">
            {processSteps.map((item, i) => {
              const selected = i === active;
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setActive(i)}
                  className={cn(
                    "flex items-start gap-4 rounded-panel px-4 py-5 text-left transition-colors duration-200",
                    selected ? "bg-surface-2" : "hover:bg-surface",
                  )}
                  aria-current={selected ? "step" : undefined}
                >
                  <span
                    className={cn(
                      "mt-0.5 font-serif text-xl",
                      selected ? "text-ink" : "text-subtle",
                    )}
                  >
                    {item.number}
                  </span>
                  <span className="flex-1">
                    <span className="block text-lg font-medium tracking-tight">
                      {item.title}
                    </span>
                    <span className="mt-1 block text-sm leading-relaxed text-muted">
                      {item.copy}
                    </span>
                  </span>
                  <span
                    className={cn(
                      "mt-1 grid size-9 shrink-0 place-items-center rounded-full transition-colors",
                      selected ? "bg-primary text-primary-fg" : "bg-surface-2 text-ink",
                    )}
                    aria-hidden="true"
                  >
                    <ArrowUpRight className="size-4" />
                  </span>
                </button>
              );
            })}
            <div className="mt-6 px-1">
              <InspectionCta label="Request my free inspection" />
            </div>
          </div>

          <div className="relative aspect-photo overflow-hidden rounded-card bg-surface-2 shadow-[var(--shadow-lift)]">
            <AnimatePresence mode="wait">
              <motion.img
                key={step.id}
                src={step.image}
                alt={step.alt}
                width={1400}
                height={933}
                initial={reduce ? false : { opacity: 0, scale: 1.03 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={reduce ? undefined : { opacity: 0 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="absolute inset-0 size-full object-cover img-frame"
              />
            </AnimatePresence>
            <div className="absolute inset-x-0 bottom-0 bg-linear-to-t from-dark/70 to-transparent p-5 text-dark-fg">
              <p className="text-xs font-medium tracking-[0.14em] text-dark-muted uppercase">
                Step {step.number}
              </p>
              <p className="mt-1 text-lg font-medium tracking-tight">{step.title}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
