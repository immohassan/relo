import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[var(--color-accent)] focus-visible:ring-offset-[var(--color-background)] disabled:pointer-events-none disabled:opacity-50 [&_svg]:size-4 [&_svg]:shrink-0 cursor-pointer",
  {
    variants: {
      variant: {
        primary:
          "bg-foreground text-white hover:bg-foreground/90 shadow-[0_1px_0_0_rgba(255,255,255,0.12)_inset,0_8px_20px_-8px_rgba(28,20,17,0.5)]",
        accent:
          "bg-[var(--color-accent)] text-white hover:bg-[color-mix(in_oklab,var(--color-accent)_92%,black)] shadow-[0_1px_0_0_rgba(255,255,255,0.22)_inset,0_10px_24px_-10px_rgba(234,88,12,0.55)]",
        secondary:
          "bg-white text-foreground hairline hover:bg-[var(--color-accent-soft)] hover:text-[var(--color-accent)]",
        ghost:
          "text-foreground hover:bg-black/[0.04]",
        outline:
          "border border-[var(--color-border-strong)] bg-transparent text-foreground hover:bg-white",
        link: "text-[var(--color-accent)] underline-offset-4 hover:underline px-0 h-auto",
      },
      size: {
        sm: "h-9 px-4",
        md: "h-10 px-5",
        lg: "h-12 px-7 text-[15px]",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        ref={ref}
        className={cn(buttonVariants({ variant, size, className }))}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
