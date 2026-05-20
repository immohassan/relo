import * as React from "react";
import { cn } from "@/lib/utils";

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  bleed?: boolean;
}

export function Section({ className, bleed, ...props }: SectionProps) {
  return (
    <section
      className={cn(
        "relative",
        bleed ? "py-20 md:py-28" : "py-16 md:py-24",
        className,
      )}
      {...props}
    />
  );
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "center",
  className,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" ? "mx-auto text-center" : "text-left",
        className,
      )}
    >
      {eyebrow && (
        <div
          className={cn(
            "mb-4 inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 text-xs font-medium text-[var(--color-accent)] hairline",
          )}
        >
          <span className="size-1.5 rounded-full bg-[var(--color-accent)]" />
          {eyebrow}
        </div>
      )}
      <h2 className="font-display text-3xl md:text-5xl font-semibold tracking-[-0.02em] text-foreground text-balance">
        {title}
      </h2>
      {description && (
        <p className="mt-5 text-base md:text-lg text-[var(--color-muted)] text-pretty">
          {description}
        </p>
      )}
    </div>
  );
}
