import { Link } from "@tanstack/react-router";
import { services } from "@/data/content";
import { phoneDisplay, site, telHref, whatsappHref } from "@/lib/site";
import { Logo } from "./Logo";
import { scrollToInspect } from "./Cta";

export function Footer() {
  return (
    <footer className="bg-paper px-5 pb-28 pt-6 sm:px-8 sm:pb-12 lg:px-12">
      <div className="mx-auto max-w-6xl border-t border-line pt-10">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <Logo />
            <p className="mt-4 text-sm text-muted">{site.location}</p>
            <p className="mt-1 text-sm">
              <a href={telHref} className="hover:underline">
                {phoneDisplay}
              </a>
            </p>
            <p className="mt-1 text-sm">
              <a href={`mailto:${site.email}`} className="hover:underline">
                {site.email}
              </a>
            </p>
            <p className="mt-1 text-sm">
              <a
                href={whatsappHref}
                target="_blank"
                rel="noreferrer"
                className="hover:underline"
              >
                WhatsApp
              </a>
            </p>
          </div>

          <div>
            <p className="text-xs font-medium tracking-[0.14em] text-muted uppercase">
              Services
            </p>
            <ul className="mt-3 space-y-2">
              {services.map((service) => (
                <li key={service.id}>
                  <a href="/#services" className="text-sm text-ink hover:underline">
                    {service.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-medium tracking-[0.14em] text-muted uppercase">
              Visit
            </p>
            <ul className="mt-3 space-y-2 text-sm">
              <li>
                <button type="button" onClick={scrollToInspect} className="hover:underline">
                  Free inspection
                </button>
              </li>
              <li>
                <a href="/#process" className="hover:underline">
                  Process
                </a>
              </li>
              <li>
                <a href="/#faq" className="hover:underline">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-xs font-medium tracking-[0.14em] text-muted uppercase">
              Legal
            </p>
            <ul className="mt-3 space-y-2 text-sm">
              <li>
                <Link to="/privacy" className="hover:underline">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="hover:underline">
                  Terms
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-2 border-t border-line pt-6 text-xs text-subtle sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} StormShield Roofing. Dallas, Texas.</p>
          <p>Built by {site.builder}</p>
        </div>
      </div>
    </footer>
  );
}
