import { Link } from "@tanstack/react-router";
import { cn } from "@/lib/utils";

type LogoProps = {
  className?: string;
  inverted?: boolean;
  compact?: boolean;
};

export function Logo({ className, inverted, compact }: LogoProps) {
  return (
    <Link
      to="/"
      className={cn(
        "group flex items-center gap-2.5 no-underline",
        inverted ? "text-dark-fg" : "text-ink",
        className,
      )}
      aria-label="StormShield Roofing home"
    >
      <span
        className={cn(
          "grid size-9 place-items-center rounded-lg",
          inverted ? "bg-dark-fg/10 text-dark-fg" : "bg-ink text-paper",
        )}
        aria-hidden="true"
      >
        <svg viewBox="0 0 24 24" className="size-5" fill="none">
          <path
            d="M4 11.2 12 4.5l8 6.7V19a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 4 19v-7.8Z"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinejoin="round"
          />
          <path
            d="M9 20.5v-6.2h6v6.2"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinejoin="round"
          />
        </svg>
      </span>
      <span className="flex flex-col leading-none">
        <span className="text-[15px] font-semibold tracking-tight">
          StormShield
        </span>
        {!compact ? (
          <span
            className={cn(
              "mt-0.5 text-[11px] font-medium tracking-[0.14em] uppercase",
              inverted ? "text-dark-muted" : "text-muted",
            )}
          >
            Roofing
          </span>
        ) : null}
      </span>
    </Link>
  );
}
