import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Plus } from "lucide-react";
import { faqs } from "@/data/content";
import { cn } from "@/lib/utils";
import { Reveal } from "./Reveal";

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="scroll-mt-24 bg-paper px-5 py-16 sm:px-8 sm:py-24 lg:px-12">
      <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)]">
        <Reveal>
          <p className="mb-4 inline-flex rounded-full border border-line px-3 py-1 text-xs font-medium tracking-[0.14em] text-muted uppercase">
            FAQ
          </p>
          <h2 className="text-3xl font-medium tracking-tight sm:text-4xl">
            Straight answers{" "}
            <em className="font-serif italic font-normal">before you request a visit.</em>
          </h2>
        </Reveal>
        <div className="divide-y divide-line border-y border-line">
          {faqs.map((item, i) => (
            <FaqItem
              key={item.q}
              item={item}
              open={open === i}
              onToggle={() => setOpen(open === i ? null : i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function FaqItem({
  item,
  open,
  onToggle,
}: {
  item: { q: string; a: string };
  open: boolean;
  onToggle: () => void;
}) {
  const reduce = useReducedMotion();
  return (
    <div>
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={open}
        className="flex w-full items-center justify-between gap-4 py-5 text-left"
      >
        <span className="text-base font-medium tracking-tight sm:text-lg">{item.q}</span>
        <span
          className={cn(
            "grid size-8 shrink-0 place-items-center rounded-full bg-surface-2 transition-transform duration-200",
            open && "rotate-45",
          )}
          aria-hidden="true"
        >
          <Plus className="size-4" />
        </span>
      </button>
      <AnimatePresence initial={false}>
        {open ? (
          <motion.div
            initial={reduce ? false : { height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <p className="pb-5 max-w-2xl text-sm leading-relaxed text-muted sm:text-base">
              {item.a}
            </p>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}
