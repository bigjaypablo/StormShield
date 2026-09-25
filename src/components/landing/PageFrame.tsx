import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function PageFrame({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className="min-h-svh bg-canvas px-0 sm:px-3 sm:py-3">
      <div
        className={cn(
          "relative mx-auto min-h-[calc(100svh-0px)] overflow-hidden bg-paper sm:min-h-[calc(100svh-1.5rem)] sm:rounded-shell sm:shadow-[var(--shadow-lift)]",
          className,
        )}
      >
        {children}
      </div>
    </div>
  );
}
