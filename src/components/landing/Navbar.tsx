import { useEffect, useState } from "react";
import { Menu, Phone, X } from "lucide-react";
import { navLinks } from "@/data/content";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { telHref } from "@/lib/site";
import { InspectionCta } from "./Cta";
import { Logo } from "./Logo";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
        className={cn(
          "absolute inset-x-0 top-0 z-40 px-4 pt-4 sm:px-6",
          scrolled && "pointer-events-none opacity-0",
        )}
      >
        <div
          className={cn(
            "mx-auto flex max-w-6xl items-center justify-between gap-3 rounded-full px-3 py-2 transition-[background-color,box-shadow,backdrop-filter] duration-200",
            "bg-surface/80 text-ink backdrop-blur-md shadow-[var(--shadow-border)]",
          )}
        >
          <Logo compact={false} />
          <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-full px-3 py-2 text-sm text-muted transition-colors hover:bg-surface-2 hover:text-ink"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="hidden items-center gap-2 sm:flex">
            <Button asChild size="sm" variant="ghost">
              <a href={telHref}>
                <Phone className="size-4" />
                Call
              </a>
            </Button>
            <InspectionCta size="sm" label="Get inspection" />
          </div>
          <Button
            type="button"
            size="icon"
            variant="ghost"
            className="sm:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen(true)}
          >
            <Menu className="size-5" />
            <span className="sr-only">Open menu</span>
          </Button>
        </div>
      </header>

      {scrolled ? (
        <div className="pointer-events-none fixed inset-x-0 top-0 z-40 px-4 pt-3 sm:px-6">
          <div className="pointer-events-auto mx-auto flex max-w-6xl items-center justify-between gap-3 rounded-full bg-surface/90 px-3 py-2 shadow-[var(--shadow-lift)] backdrop-blur-md">
            <Logo compact />
            <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="rounded-full px-3 py-2 text-sm text-muted transition-colors hover:bg-surface-2 hover:text-ink"
                >
                  {link.label}
                </a>
              ))}
            </nav>
            <div className="flex items-center gap-2">
              <Button asChild size="sm" variant="ghost" className="hidden sm:inline-flex">
                <a href={telHref}>
                  <Phone className="size-4" />
                  Call
                </a>
              </Button>
              <InspectionCta size="sm" label="Get inspection" />
            </div>
          </div>
        </div>
      ) : null}

      {open ? (
        <div
          id="mobile-nav"
          className="fixed inset-0 z-50 bg-dark text-dark-fg lg:hidden"
          role="dialog"
          aria-modal="true"
          aria-label="Menu"
        >
          <div className="flex items-center justify-between px-5 pt-5">
            <Logo inverted />
            <Button
              type="button"
              size="icon"
              variant="ghost"
              className="text-dark-fg hover:bg-dark-fg/10"
              onClick={() => setOpen(false)}
            >
              <X className="size-5" />
              <span className="sr-only">Close menu</span>
            </Button>
          </div>
          <nav className="flex flex-col gap-1 px-5 pt-10">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-2xl px-3 py-4 text-2xl font-medium tracking-tight"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="absolute inset-x-0 bottom-0 flex flex-col gap-3 px-5 pb-8">
            <InspectionCta
              variant="inverse"
              className="w-full"
              label="Get my free roof inspection"
            />
            <Button asChild variant="ghost" size="lg" className="text-dark-fg hover:bg-dark-fg/10">
              <a href={telHref}>
                <Phone className="size-4" />
                Call now
              </a>
            </Button>
          </div>
        </div>
      ) : null}
    </>
  );
}
