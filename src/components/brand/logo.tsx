import Link from "next/link";
import { cn } from "@/lib/utils";

export function LogoMark({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        "relative grid place-items-center size-8 rounded-[10px] bg-[var(--color-accent)] text-white",
        className,
      )}
      aria-hidden
    >
      <svg
        viewBox="0 0 24 24"
        className="size-4"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M3 12a9 9 0 1 0 3-6.7" />
        <path d="M3 4v5h5" />
      </svg>
      <span className="absolute -bottom-0.5 -right-0.5 size-2 rounded-full bg-[var(--color-accent-bright)] ring-2 ring-background" />
    </span>
  );
}

export function Logo({
  href = "/",
  className,
  showWord = true,
}: {
  href?: string;
  className?: string;
  showWord?: boolean;
}) {
  return (
    <Link
      href={href}
      className={cn(
        "inline-flex items-center gap-2.5 text-foreground hover:opacity-90 transition-opacity",
        className,
      )}
    >
      <LogoMark />
      {showWord && (
        <span className="font-display text-[18px] font-semibold tracking-tight">
          Replenish
        </span>
      )}
    </Link>
  );
}
