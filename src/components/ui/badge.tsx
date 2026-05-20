import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-medium",
  {
    variants: {
      variant: {
        default:
          "bg-[var(--color-accent-soft)] text-[var(--color-accent)] ring-1 ring-inset ring-[color-mix(in_oklab,var(--color-accent)_25%,transparent)]",
        neutral:
          "bg-black/[0.04] text-foreground ring-1 ring-inset ring-black/[0.06]",
        success:
          "bg-emerald-50 text-emerald-700 ring-1 ring-inset ring-emerald-200",
        warning:
          "bg-amber-50 text-amber-800 ring-1 ring-inset ring-amber-200",
        danger:
          "bg-red-50 text-red-700 ring-1 ring-inset ring-red-200",
        outline:
          "bg-transparent text-foreground ring-1 ring-inset ring-[var(--color-border-strong)]",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return <div className={cn(badgeVariants({ variant }), className)} {...props} />;
}

export { Badge, badgeVariants };
