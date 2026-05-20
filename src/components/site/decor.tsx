import * as React from "react";
import { cn } from "@/lib/utils";

export function BlobA({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 400 400"
      className={cn("absolute pointer-events-none", className)}
      fill="none"
    >
      <path
        d="M324 92c40 36 56 100 36 152s-72 92-126 102-118-2-160-46-66-118-40-170 102-78 162-74 88 0 128 36z"
        fill="url(#blobA)"
      />
      <defs>
        <linearGradient id="blobA" x1="60" y1="40" x2="340" y2="360" gradientUnits="userSpaceOnUse">
          <stop stopColor="#14b8a6" stopOpacity="0.45" />
          <stop offset="1" stopColor="#0d4f4a" stopOpacity="0.15" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export function BlobB({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 500 500"
      className={cn("absolute pointer-events-none", className)}
      fill="none"
    >
      <path
        d="M420 130c40 80 30 196-40 246s-200 36-280-14-90-150-50-228 162-88 236-66 94 38 134 62z"
        fill="url(#blobB)"
        opacity="0.7"
      />
      <defs>
        <radialGradient id="blobB" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(250 250) rotate(90) scale(250)">
          <stop stopColor="#0d4f4a" stopOpacity="0.5" />
          <stop offset="1" stopColor="#d8e8e3" stopOpacity="0" />
        </radialGradient>
      </defs>
    </svg>
  );
}

export function LeafCluster({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 120 120"
      className={cn("pointer-events-none", className)}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M60 110c0-30 14-58 40-70-4 30-18 56-40 70z" fill="currentColor" fillOpacity="0.12" />
      <path d="M60 110c0-30-14-58-40-70 4 30 18 56 40 70z" fill="currentColor" fillOpacity="0.08" />
      <path d="M60 110V60" />
      <path d="M60 78c8-4 14-12 18-22" />
      <path d="M60 78c-8-4-14-12-18-22" />
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
          <circle key={`${x}-${y}`} cx={10 + x * 20} cy={10 + y * 20} r="1.5" opacity={0.4 + Math.sin((x + y) * 0.4) * 0.3} />
        )),
      )}
    </svg>
  );
}

export function OrbitRings({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 400 400"
      className={cn("pointer-events-none", className)}
      fill="none"
      stroke="currentColor"
    >
      <circle cx="200" cy="200" r="60" strokeOpacity="0.3" />
      <circle cx="200" cy="200" r="110" strokeOpacity="0.18" />
      <circle cx="200" cy="200" r="160" strokeOpacity="0.1" />
      <circle cx="200" cy="200" r="210" strokeOpacity="0.05" />
      <circle cx="200" cy="60" r="4" fill="currentColor" />
      <circle cx="310" cy="200" r="3" fill="currentColor" opacity="0.7" />
      <circle cx="60" cy="240" r="2.5" fill="currentColor" opacity="0.5" />
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
