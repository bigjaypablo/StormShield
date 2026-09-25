import { createFileRoute } from "@tanstack/react-router";
import { FAQ } from "@/components/landing/FAQ";
import { FinalCTA } from "@/components/landing/FinalCTA";
import { Footer } from "@/components/landing/Footer";
import { Hero } from "@/components/landing/Hero";
import { MobileCTA } from "@/components/landing/MobileCTA";
import { Navbar } from "@/components/landing/Navbar";
import { Offer } from "@/components/landing/Offer";
import { PageFrame } from "@/components/landing/PageFrame";
import { ProblemSection } from "@/components/landing/ProblemSection";
import { Process } from "@/components/landing/Process";
import { Services } from "@/components/landing/Services";
import { Testimonials } from "@/components/landing/Testimonials";
import { WhyUs } from "@/components/landing/WhyUs";

export const Route = createFileRoute("/")({
  head: () => ({
    links: [{ rel: "preload", as: "image", href: "/images/hero-home.jpg" }],
  }),
  component: Home,
});

function Home() {
  return (
    <PageFrame>
      <a
        href="#inspect"
        className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:m-3 focus:rounded-full focus:bg-surface focus:px-4 focus:py-2"
      >
        Skip to inspection form
      </a>
      <Navbar />
      <main>
        <Hero />
        <ProblemSection />
        <Services />
        <WhyUs />
        <Process />
        <Offer />
        <Testimonials />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
      <MobileCTA />
    </PageFrame>
  );
}
