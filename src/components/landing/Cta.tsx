import { ArrowUpRight, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { telHref } from "@/lib/site";

export function scrollToInspect() {
  const el = document.getElementById("inspect");
  el?.scrollIntoView({ behavior: "smooth", block: "start" });
}

export function InspectionCta({
  className,
  size = "lg",
  label = "Get my free roof inspection",
  variant = "primary",
}: {
  className?: string;
  size?: "sm" | "md" | "lg";
  label?: string;
  variant?: "primary" | "inverse" | "dark" | "glass";
}) {
  return (
    <Button
      type="button"
      size={size}
      variant={variant}
      onClick={scrollToInspect}
      className={cn("pl-5 pr-2", className)}
    >
      <span>{label}</span>
      <span
        className={cn(
          "grid size-8 place-items-center rounded-full",
          variant === "primary" || variant === "dark"
            ? "bg-paper/12"
            : "bg-ink/8",
        )}
        aria-hidden="true"
      >
        <ArrowUpRight className="size-4" />
      </span>
    </Button>
  );
}

export function CallCta({
  className,
  size = "lg",
  variant = "glass",
}: {
  className?: string;
  size?: "sm" | "md" | "lg";
  variant?: "glass" | "secondary" | "outline" | "ghost" | "inverse";
}) {
  return (
    <Button asChild size={size} variant={variant} className={className}>
      <a href={telHref}>
        <Phone className="size-4" />
        Call now
      </a>
    </Button>
  );
}
