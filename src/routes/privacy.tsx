import { createFileRoute, Link } from "@tanstack/react-router";
import { Footer } from "@/components/landing/Footer";
import { Logo } from "@/components/landing/Logo";
import { PageFrame } from "@/components/landing/PageFrame";
import { site } from "@/lib/site";

export const Route = createFileRoute("/privacy")({
  component: PrivacyPage,
  head: () => ({
    meta: [{ title: "Privacy Policy — StormShield Roofing" }],
  }),
});

function PrivacyPage() {
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
        <h1 className="mt-3 text-4xl font-medium tracking-tight">Privacy Policy</h1>
        <p className="mt-4 text-sm text-muted">
          StormShield Roofing · {site.location}
        </p>
        <div className="mt-10 space-y-6 text-sm leading-relaxed text-ink">
          <p>
            This page describes how we handle information you submit through
            the inspection request form on this website.
          </p>
          <h2 className="text-lg font-medium">What we collect</h2>
          <p>
            When you request a free roof inspection we collect your name, email
            address, phone number, property address, the type of roofing help
            you selected, and any optional message you include.
          </p>
          <h2 className="text-lg font-medium">How we use it</h2>
          <p>
            That information is used only to contact you about your roofing
            request, schedule an inspection, and send a confirmation of your
            submission. We do not sell it.
          </p>
          <h2 className="text-lg font-medium">Who receives it</h2>
          <p>
            Submissions are delivered to StormShield Roofing. Email delivery
            may be processed by a third-party email provider acting on our
            behalf.
          </p>
          <h2 className="text-lg font-medium">Contact</h2>
          <p>
            Questions about this policy can be sent to {site.email}.
          </p>
        </div>
      </main>
      <Footer />
    </PageFrame>
  );
}
