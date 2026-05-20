"use client";

import * as React from "react";
import { motion, useInView, type Variants } from "framer-motion";
import { cn } from "@/lib/utils";

interface SplitWordsProps {
  text: string;
  className?: string;
  delay?: number;
  stagger?: number;
}

export function SplitWords({ text, className, delay = 0, stagger = 0.045 }: SplitWordsProps) {
  const ref = React.useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const words = text.split(" ");

  const container: Variants = {
    hidden: {},
    show: {
      transition: { staggerChildren: stagger, delayChildren: delay },
    },
  };
  const word: Variants = {
    hidden: { y: "0.55em", opacity: 0, filter: "blur(6px)" },
    show: {
      y: 0,
      opacity: 1,
      filter: "blur(0px)",
      transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <motion.span
      ref={ref}
      variants={container}
      initial="hidden"
      animate={inView ? "show" : "hidden"}
      className={cn("inline-block", className)}
      aria-label={text}
    >
      {words.map((w, i) => (
        <span key={i} className="inline-block overflow-hidden align-bottom">
          <motion.span variants={word} className="inline-block will-change-transform">
            {w}
            {i < words.length - 1 ? " " : ""}
          </motion.span>
        </span>
      ))}
    </motion.span>
  );
}

interface ShimmerTextProps {
  children: React.ReactNode;
  className?: string;
}

export function ShimmerText({ children, className }: ShimmerTextProps) {
  return (
    <span
      className={cn(
        "bg-clip-text text-transparent bg-[length:200%_100%] bg-shimmer-sweep animate-shimmer-sweep",
        className,
      )}
    >
      {children}
    </span>
  );
}

interface TypewriterRotateProps {
  words: string[];
  className?: string;
  intervalMs?: number;
}

export function TypewriterRotate({ words, className, intervalMs = 2400 }: TypewriterRotateProps) {
  const [i, setI] = React.useState(0);
  React.useEffect(() => {
    const t = setInterval(() => setI((v) => (v + 1) % words.length), intervalMs);
    return () => clearInterval(t);
  }, [words.length, intervalMs]);

  return (
    <span className={cn("relative inline-block align-baseline", className)}>
      <span className="invisible" aria-hidden>
        {words.reduce((a, b) => (a.length > b.length ? a : b), "")}
      </span>
      {words.map((w, idx) => (
        <span
          key={idx}
          aria-hidden={idx !== i}
          className={cn(
            "absolute inset-0 transition-all duration-500",
            idx === i ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2",
          )}
        >
          {w}
        </span>
      ))}
    </span>
  );
}

interface CountUpProps {
  value: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
  className?: string;
}

export function CountUp({ value, prefix = "", suffix = "", duration = 1.4, className }: CountUpProps) {
  const ref = React.useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const [n, setN] = React.useState(0);

  React.useEffect(() => {
    if (!inView) return;
    const start = performance.now();
    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / (duration * 1000));
      const eased = 1 - Math.pow(1 - t, 3);
      setN(Math.round(eased * value));
      if (t < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [inView, value, duration]);

  return (
    <span ref={ref} className={className}>
      {prefix}
      {n.toLocaleString()}
      {suffix}
    </span>
  );
}
