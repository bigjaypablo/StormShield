import { createFileRoute, Link } from "@tanstack/react-router";
import { Footer } from "@/components/landing/Footer";
import { Logo } from "@/components/landing/Logo";
import { PageFrame } from "@/components/landing/PageFrame";
import { site } from "@/lib/site";

export const Route = createFileRoute("/terms")({
  component: TermsPage,
  head: () => ({
    meta: [{ title: "Terms — StormShield Roofing" }],
  }),
});

function TermsPage() {
  return (
    <PageFrame>
      <header className="flex items-center justify-between px-5 py-5 sm:px-8">
        <Logo />
        <Link to="/" className="text-sm text-muted hover:text-ink">
          Back to home
        </Link>
      </header>
      <main className="mx-auto max-w-2xl px-5 py-12 sm:px-8">
        <p className="text-xs font-medium tracking-[0.14em] text-muted uppercase">
          Legal
        </p>
        <h1 className="mt-3 text-4xl font-medium tracking-tight">Terms</h1>
        <p className="mt-4 text-sm text-muted">
          StormShield Roofing · {site.location}
        </p>
        <div className="mt-10 space-y-6 text-sm leading-relaxed text-ink">
          <p>
            This website is an informational and lead-generation page for
            StormShield Roofing in Dallas, Texas. Submitting the inspection
            form is a request to be contacted — it is not a contract for work.
          </p>
          <h2 className="text-lg font-medium">Estimates</h2>
          <p>
            Any estimate follows an inspection of the property. Scope and
            pricing are confirmed in writing before work begins.
          </p>
          <h2 className="text-lg font-medium">Accuracy</h2>
          <p>
            We aim to keep this page accurate. Service availability can depend
            on location, weather, and scheduling.
          </p>
          <h2 className="text-lg font-medium">Contact</h2>
          <p>Questions: {site.email}.</p>
        </div>
      </main>
      <Footer />
    </PageFrame>
  );
}
