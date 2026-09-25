import { CallCta, InspectionCta } from "./Cta";

export function FinalCTA() {
  return (
    <section className="px-5 pb-16 sm:px-8 sm:pb-20 lg:px-12">
      <div className="relative mx-auto max-w-6xl overflow-hidden rounded-card bg-dark text-dark-fg">
        <img
          src="/images/dusk.jpg"
          alt=""
          width={1600}
          height={900}
          loading="lazy"
          decoding="async"
          className="absolute inset-0 size-full object-cover img-frame-light"
        />
        <div className="absolute inset-0 bg-dark/65" aria-hidden="true" />
        <div className="relative z-10 max-w-2xl px-6 py-16 sm:px-12 sm:py-20">
          <h2 className="text-3xl font-medium tracking-tight sm:text-4xl lg:text-5xl">
            Not sure what your roof needs?{" "}
            <em className="font-serif italic font-normal">Start with an inspection.</em>
          </h2>
          <p className="mt-5 max-w-md text-base leading-relaxed text-dark-fg/80">
            Tell us what's happening with your roof and we'll help you
            understand your options.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <InspectionCta variant="inverse" />
            <CallCta
              variant="ghost"
              className="text-dark-fg hover:bg-dark-fg/10"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
