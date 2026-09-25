import { motion, useReducedMotion } from "framer-motion";
import { MapPin } from "lucide-react";
import { hero } from "@/data/content";
import { CallCta, InspectionCta } from "./Cta";

export function Hero() {
  const reduce = useReducedMotion();

  return (
    <section className="relative isolate min-h-[92svh] overflow-hidden rounded-b-shell bg-dark text-dark-fg">
      <img
        src="/images/hero-home.jpg"
        alt="Contemporary Dallas home with a standing-seam metal roof and still pool"
        width={1600}
        height={900}
        fetchPriority="high"
        decoding="async"
        className="absolute inset-0 size-full object-cover img-frame-light"
      />
      <div
        className="absolute inset-0 bg-linear-to-t from-dark/80 via-dark/35 to-dark/25"
        aria-hidden="true"
      />

      <div className="relative z-10 flex min-h-[92svh] flex-col justify-end px-5 pb-8 pt-28 sm:px-8 sm:pb-12 lg:px-12 lg:pb-14">
        <div className="mx-auto grid w-full max-w-6xl gap-8 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)] lg:items-end">
          <div className="max-w-2xl">
            <motion.p
              initial={reduce ? false : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="mb-4 inline-flex items-center gap-1.5 rounded-full bg-dark-fg/12 px-3 py-1 text-xs font-medium tracking-wide text-dark-fg backdrop-blur-md"
            >
              <MapPin className="size-3.5" aria-hidden="true" />
              {hero.eyebrow}
            </motion.p>
            <motion.h1
              initial={reduce ? false : { opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.06, ease: [0.22, 1, 0.36, 1] }}
              className="text-[2.35rem] leading-[1.05] font-medium tracking-tight sm:text-5xl lg:text-6xl"
            >
              {hero.headlineLead}{" "}
              <em className="font-serif font-normal not-italic text-dark-fg">
                <span className="italic">{hero.headlineEmph}</span>
              </em>
            </motion.h1>
            <motion.p
              initial={reduce ? false : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.14, ease: [0.22, 1, 0.36, 1] }}
              className="mt-5 max-w-xl text-base leading-relaxed text-dark-fg/82 sm:text-lg"
            >
              {hero.body}
            </motion.p>
            <motion.div
              initial={reduce ? false : { opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.22, ease: [0.22, 1, 0.36, 1] }}
              className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center"
            >
              <InspectionCta variant="inverse" className="w-full sm:w-auto" />
              <CallCta
                variant="ghost"
                className="w-full text-dark-fg hover:bg-dark-fg/10 sm:w-auto"
              />
            </motion.div>
          </div>

          <motion.div
            initial={reduce ? false : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.28, ease: [0.22, 1, 0.36, 1] }}
            className="hidden justify-end gap-3 lg:flex"
          >
            <GlassCard
              image="/images/inspect.jpg"
              kicker="01"
              title="Free inspection"
              body="A roofing professional assesses condition — then you get options, not a pitch."
            />
            <GlassCard
              image="/images/metal.jpg"
              kicker="02"
              title="Dallas & North Texas"
              body="Repair, replacement, and storm work for homes across the Metroplex."
            />
          </motion.div>
        </div>

        <motion.ul
          initial={reduce ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.36 }}
          className="mx-auto mt-8 flex w-full max-w-6xl flex-wrap gap-2"
        >
          {hero.chips.map((chip) => (
            <li
              key={chip}
              className="rounded-full bg-dark/35 px-3.5 py-1.5 text-xs font-medium tracking-wide text-dark-fg backdrop-blur-md sm:text-sm"
            >
              {chip}
            </li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}

function GlassCard({
  image,
  kicker,
  title,
  body,
}: {
  image: string;
  kicker: string;
  title: string;
  body: string;
}) {
  return (
    <article className="w-52 overflow-hidden rounded-panel bg-dark/40 shadow-[var(--shadow-lift)] backdrop-blur-md">
      <img
        src={image}
        alt=""
        width={280}
        height={160}
        className="h-28 w-full object-cover img-frame-light"
      />
      <div className="space-y-1.5 p-3.5">
        <p className="text-[11px] font-medium tracking-[0.14em] text-dark-muted uppercase">
          {kicker}
        </p>
        <h2 className="text-sm font-medium tracking-tight">{title}</h2>
        <p className="text-xs leading-relaxed text-dark-fg/75">{body}</p>
      </div>
    </article>
  );
}
