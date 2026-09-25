import type { ComponentProps } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { Slot } from "@radix-ui/react-slot";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 font-medium tracking-tight transition-[transform,background-color,box-shadow,color] duration-150 ease-out active:not-disabled:scale-[0.96] disabled:pointer-events-none disabled:opacity-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink",
  {
    variants: {
      variant: {
        primary: "bg-primary text-primary-fg hover:bg-ink",
        secondary:
          "bg-surface text-ink shadow-[var(--shadow-border)] hover:shadow-[var(--shadow-border-hover)]",
        ghost: "bg-transparent text-ink hover:bg-surface-2",
        glass:
          "bg-surface/80 text-ink backdrop-blur-md shadow-[var(--shadow-border)] hover:bg-surface",
        outline: "border border-line bg-transparent text-ink hover:bg-surface",
        dark: "bg-dark text-dark-fg hover:bg-ink",
        inverse:
          "bg-paper text-ink hover:bg-surface shadow-[var(--shadow-border)]",
      },
      size: {
        sm: "h-10 px-4 text-sm rounded-full",
        md: "h-12 px-5 text-sm rounded-full",
        lg: "h-14 px-6 text-base rounded-full",
        icon: "size-12 rounded-full",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  },
);

type ButtonProps = ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  };

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: ButtonProps) {
  const Comp = asChild ? Slot : "button";
  return (
    <Comp
      className={cn(buttonVariants({ variant, size }), className)}
      {...props}
    />
  );
}

export { Button, buttonVariants };
