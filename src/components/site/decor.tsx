import * as React from "react";
import { cn } from "@/lib/utils";

export function BoxStack({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 200 200"
      className={cn("pointer-events-none", className)}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinejoin="round"
    >
      <g opacity="0.85">
        <path d="M30 140 L100 110 L170 140 L100 170 Z" fill="currentColor" fillOpacity="0.08" />
        <path d="M30 140 L30 100 L100 70 L100 110 Z" fill="currentColor" fillOpacity="0.14" />
        <path d="M170 140 L170 100 L100 70 L100 110 Z" fill="currentColor" fillOpacity="0.18" />
        <path d="M55 88 L100 70 M65 96 L100 80" strokeOpacity="0.5" />
      </g>
      <g opacity="0.55">
        <path d="M60 80 L100 60 L140 80 L100 100 Z" fill="currentColor" fillOpacity="0.1" />
        <path d="M60 80 L60 50 L100 30 L100 60 Z" fill="currentColor" fillOpacity="0.18" />
        <path d="M140 80 L140 50 L100 30 L100 60 Z" fill="currentColor" fillOpacity="0.22" />
      </g>
    </svg>
  );
}

export function BarChart({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 200 140"
      className={cn("pointer-events-none", className)}
      fill="currentColor"
    >
      <rect x="10" y="80" width="22" height="50" rx="4" opacity="0.25" />
      <rect x="40" y="60" width="22" height="70" rx="4" opacity="0.4" />
      <rect x="70" y="40" width="22" height="90" rx="4" opacity="0.6" />
      <rect x="100" y="20" width="22" height="110" rx="4" opacity="0.85" />
      <rect x="130" y="50" width="22" height="80" rx="4" opacity="0.5" />
      <rect x="160" y="70" width="22" height="60" rx="4" opacity="0.3" />
      <line x1="6" y1="132" x2="190" y2="132" stroke="currentColor" strokeWidth="1.5" opacity="0.4" />
    </svg>
  );
}

export function SkuTag({
  className,
  label = "SKU-2241",
  value = "+$11.4K",
}: {
  className?: string;
  label?: string;
  value?: string;
}) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 220 80"
      className={cn("pointer-events-none", className)}
    >
      <defs>
        <linearGradient id="tagGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="currentColor" stopOpacity="0.95" />
          <stop offset="1" stopColor="currentColor" stopOpacity="0.7" />
        </linearGradient>
      </defs>
      <path
        d="M20 12 L180 12 Q210 12 210 40 Q210 68 180 68 L20 68 Q4 68 4 40 Q4 12 20 12 Z"
        fill="url(#tagGrad)"
      />
      <circle cx="22" cy="40" r="5" fill="white" />
      <text x="42" y="34" fontFamily="ui-sans-serif" fontSize="11" fill="white" opacity="0.7" letterSpacing="2">
        {label}
      </text>
      <text x="42" y="54" fontFamily="ui-sans-serif" fontWeight="700" fontSize="15" fill="white">
        {value}
      </text>
    </svg>
  );
}

export function SupplyChainLines({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 400 200"
      preserveAspectRatio="none"
      className={cn("pointer-events-none", className)}
      fill="none"
      stroke="currentColor"
    >
      <path d="M0 100 C60 40 120 160 200 100 C280 40 340 160 400 100" strokeWidth="1.5" opacity="0.45" />
      <path d="M0 130 C80 80 160 180 240 120 C320 60 360 150 400 110" strokeWidth="1" opacity="0.25" />
      <path d="M0 70 C80 130 160 30 240 90 C320 150 360 60 400 100" strokeWidth="1" opacity="0.2" />
      <circle cx="40" cy="78" r="3" fill="currentColor" opacity="0.7" />
      <circle cx="200" cy="100" r="4" fill="currentColor" />
      <circle cx="360" cy="120" r="3" fill="currentColor" opacity="0.7" />
      <circle cx="120" cy="118" r="2" fill="currentColor" opacity="0.5" />
      <circle cx="280" cy="78" r="2" fill="currentColor" opacity="0.5" />
    </svg>
  );
}

export function InventoryNodes({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 240 240"
      className={cn("pointer-events-none", className)}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.25"
    >
      <line x1="40" y1="50" x2="200" y2="190" opacity="0.25" />
      <line x1="200" y1="50" x2="40" y2="190" opacity="0.25" />
      <line x1="40" y1="50" x2="200" y2="50" opacity="0.2" />
      <line x1="40" y1="190" x2="200" y2="190" opacity="0.2" />
      <line x1="40" y1="50" x2="40" y2="190" opacity="0.2" />
      <line x1="200" y1="50" x2="200" y2="190" opacity="0.2" />
      <line x1="120" y1="120" x2="40" y2="50" opacity="0.3" />
      <line x1="120" y1="120" x2="200" y2="50" opacity="0.3" />
      <line x1="120" y1="120" x2="40" y2="190" opacity="0.3" />
      <line x1="120" y1="120" x2="200" y2="190" opacity="0.3" />
      <rect x="32" y="42" width="16" height="16" rx="3" fill="currentColor" fillOpacity="0.85" />
      <rect x="192" y="42" width="16" height="16" rx="3" fill="currentColor" fillOpacity="0.6" />
      <rect x="32" y="182" width="16" height="16" rx="3" fill="currentColor" fillOpacity="0.5" />
      <rect x="192" y="182" width="16" height="16" rx="3" fill="currentColor" fillOpacity="0.7" />
      <circle cx="120" cy="120" r="14" fill="currentColor" />
      <circle cx="120" cy="120" r="22" stroke="currentColor" strokeOpacity="0.3" />
      <circle cx="120" cy="120" r="32" stroke="currentColor" strokeOpacity="0.15" />
    </svg>
  );
}

export function ChatDots({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 200 140"
      className={cn("pointer-events-none", className)}
      fill="currentColor"
    >
      <rect x="10" y="20" width="100" height="32" rx="14" opacity="0.6" />
      <rect x="90" y="60" width="100" height="32" rx="14" opacity="0.4" />
      <rect x="20" y="100" width="80" height="28" rx="12" opacity="0.25" />
      <circle cx="30" cy="36" r="3" fill="white" />
      <circle cx="42" cy="36" r="3" fill="white" />
      <circle cx="54" cy="36" r="3" fill="white" />
    </svg>
  );
}

export function ForecastCurve({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 300 120"
      preserveAspectRatio="none"
      className={cn("pointer-events-none", className)}
      fill="none"
    >
      <defs>
        <linearGradient id="forecastFill" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="currentColor" stopOpacity="0.35" />
          <stop offset="1" stopColor="currentColor" stopOpacity="0" />
        </linearGradient>
      </defs>
      <path
        d="M0 90 L30 80 L60 84 L90 60 L120 65 L150 40 L180 48 L210 28 L240 32 L270 18 L300 22 L300 120 L0 120 Z"
        fill="url(#forecastFill)"
      />
      <path
        d="M0 90 L30 80 L60 84 L90 60 L120 65 L150 40 L180 48 L210 28 L240 32 L270 18 L300 22"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M150 40 L180 50 L210 36 L240 44 L270 30 L300 38"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeDasharray="4 4"
        opacity="0.55"
      />
      <circle cx="150" cy="40" r="4" fill="currentColor" />
      <circle cx="300" cy="22" r="4" fill="currentColor" />
    </svg>
  );
}

export function WaveLine({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 600 80"
      preserveAspectRatio="none"
      className={cn("pointer-events-none", className)}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    >
      <path d="M0 40 Q75 0 150 40 T 300 40 T 450 40 T 600 40" opacity="0.5" />
      <path d="M0 56 Q75 16 150 56 T 300 56 T 450 56 T 600 56" opacity="0.25" />
    </svg>
  );
}

export function DotGrid({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 200 200"
      className={cn("pointer-events-none", className)}
      fill="currentColor"
    >
      {Array.from({ length: 10 }).map((_, y) =>
        Array.from({ length: 10 }).map((_, x) => (
          <circle
            key={`${x}-${y}`}
            cx={10 + x * 20}
            cy={10 + y * 20}
            r="1.5"
            opacity={0.4 + Math.sin((x + y) * 0.4) * 0.3}
          />
        )),
      )}
    </svg>
  );
}

export function SparkLine({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 240 80"
      className={cn("pointer-events-none", className)}
      fill="none"
    >
      <path
        d="M0 60 L30 50 L60 55 L90 30 L120 35 L150 18 L180 22 L210 10 L240 14"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M0 60 L30 50 L60 55 L90 30 L120 35 L150 18 L180 22 L210 10 L240 14 L240 80 L0 80 Z"
        fill="currentColor"
        fillOpacity="0.12"
      />
    </svg>
  );
}
