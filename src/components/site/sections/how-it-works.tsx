"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  Zap,
  MessageSquare,
  Target,
  ShieldCheck,
  Brain,
  ClipboardCheck,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Section } from "@/components/ui/section";
import { InventoryNodes, SupplyChainLines, DotGrid, ForecastCurve } from "@/components/site/decor";
import { SplitWords, CountUp } from "@/components/site/animated-text";

const capabilities = [
  {
    icon: Brain,
    title: "Stockout forecasting",
    body: "Forecasts stockouts on every variant using AI models trained on your actual sale velocity — corrected for past stockout days that would otherwise lie to you.",
  },
  {
    icon: Target,
    title: "Markdown intelligence",
    body: "Detects overstock using cash-trapped × time-stuck — not arbitrary 'aged inventory' rules — and projects net gain at multiple markdown depths.",
  },
  {
    icon: MessageSquare,
    title: "Lives in WhatsApp or Slack",
    body: "Messages you. You converse. You approve. The agent executes. That's the entire workflow. Not another tab to open.",
  },
];

const benefits = [
  { icon: Zap, label: "Setup in 2 minutes. Genuinely." },
  { icon: MessageSquare, label: "Lives in WhatsApp or Slack. Not another tab." },
  { icon: Target, label: "Dollar impact on every alert. Decide in seconds." },
  { icon: ShieldCheck, label: "Approval-gated. Never spends without your 'yes.'" },
  { icon: Brain, label: "Learns your suppliers, seasonality, and patterns." },
  { icon: ClipboardCheck, label: "Full audit trail. Finance will love it." },
];

function Stat({ value, suffix, label }: { value: number; suffix?: string; label: string }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur p-3">
      <div className="font-display text-2xl md:text-3xl font-semibold tracking-tight text-white">
        <CountUp value={value} suffix={suffix} />
      </div>
      <div className="mt-0.5 text-[11px] uppercase tracking-wider text-white/60">{label}</div>
    </div>
  );
}

export function HowItWorks() {
  return (
    <Section id="how" className="relative overflow-hidden bg-[var(--color-accent-deep)] text-white">
      <div className="absolute inset-0 bg-noise opacity-15" />
      <div className="absolute -top-32 left-0 right-0 h-[480px] glow-orb-left opacity-40" />
      <div className="absolute -bottom-32 left-0 right-0 h-[480px] glow-orb-right opacity-40" />
      <InventoryNodes className="absolute -top-10 -left-16 w-[360px] sm:w-[420px] text-white opacity-40" />
      <ForecastCurve className="hidden md:block absolute -bottom-4 -right-8 w-[460px] h-44 text-[var(--color-accent-bright)] opacity-50" />
      <SupplyChainLines className="absolute top-1/2 left-0 right-0 h-32 text-white opacity-20" />
      <DotGrid className="absolute top-1/3 right-3 w-24 text-white opacity-30 lg:hidden" />
      <DotGrid className="absolute bottom-40 left-2 w-20 text-white opacity-25 lg:hidden" />

      <div className="container-tight relative">
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-xs font-medium text-white/80">
            <span className="size-1.5 rounded-full bg-[var(--color-accent-bright)]" />
            By end of week one
          </span>
          <h2 className="mt-5 font-display text-[26px] leading-[1.1] xs:text-3xl sm:text-4xl md:text-5xl lg:text-[52px] lg:leading-[1.06] font-semibold tracking-[-0.02em] text-balance text-white">
            <SplitWords text="Every replenishment and markdown decision in your store — handled without you opening a spreadsheet once." />
          </h2>

          <div className="mt-8 grid grid-cols-3 gap-3 max-w-md">
            <Stat value={247} suffix="+" label="Stores" />
            <Stat value={2} suffix=" min" label="Setup" />
            <Stat value={24} suffix="/7" label="Watching" />
          </div>
          <p className="mt-6 max-w-2xl text-base md:text-lg text-white/75 text-pretty">
            This isn&apos;t another inventory dashboard. It&apos;s an agentic system that does the watching, runs the math, drafts the action, and only interrupts you when there&apos;s real money on the table. Most operators stop checking the app entirely after week two. The agent just runs.
          </p>
        </div>

        <div className="mt-10 md:mt-16 -mx-5 md:mx-0 md:hidden">
          <div className="scroll-snap-x flex gap-3 overflow-x-auto px-5 pb-4">
            {capabilities.map((c) => (
              <div
                key={c.title}
                className="snap-card shrink-0 w-[80%] xs:w-[72%] sm:w-[60%] rounded-3xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur"
              >
                <div className="grid place-items-center size-11 rounded-2xl bg-[var(--color-accent-bright)]/20 text-[var(--color-accent-bright)]">
                  <c.icon className="size-5" />
                </div>
                <h3 className="mt-5 font-display text-lg font-semibold tracking-tight text-white">
                  {c.title}
                </h3>
                <p className="mt-2 text-[13.5px] text-white/70 leading-relaxed">{c.body}</p>
              </div>
            ))}
            <div className="snap-card shrink-0 w-4" aria-hidden />
          </div>
          <div className="px-5 mt-1 flex items-center gap-1.5 text-[11px] text-white/55">
            <span className="size-1.5 rounded-full bg-[var(--color-accent-bright)]" />
            Swipe →
          </div>
        </div>

        <div className="mt-12 md:mt-16 hidden md:grid md:grid-cols-3 gap-4">
          {capabilities.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="relative rounded-3xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur"
            >
              <div className="grid place-items-center size-11 rounded-2xl bg-[var(--color-accent-bright)]/20 text-[var(--color-accent-bright)]">
                <c.icon className="size-5" />
              </div>
              <h3 className="mt-5 font-display text-lg font-semibold tracking-tight text-white">
                {c.title}
              </h3>
              <p className="mt-2 text-sm text-white/70 leading-relaxed">{c.body}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-14 md:mt-20 rounded-3xl border border-white/10 bg-white/[0.04] p-6 md:p-10 backdrop-blur">
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7">
              <h3 className="font-display text-2xl md:text-3xl font-semibold tracking-tight text-white">
                That dream isn&apos;t far away. It&apos;s two minutes of setup away.
              </h3>
              <p className="mt-4 text-white/75 leading-relaxed">
                During our 20-minute demo, we install Replenish on your store live, connect your WhatsApp or Slack, and the agent sends you its first real opportunity message — about money you didn&apos;t know was on the table — before we hang up.
              </p>
            </div>
            <div className="lg:col-span-5 flex flex-col sm:flex-row lg:flex-col gap-3">
              <Button asChild variant="accent" size="lg" className="h-14 bg-[var(--color-accent-bright)] hover:bg-[color-mix(in_oklab,var(--color-accent-bright)_92%,black)] text-[var(--color-accent-deep)]">
                <Link href="#book">
                  Meet my AI Category Manager
                  <ArrowRight />
                </Link>
              </Button>
              <div className="text-sm text-white/65 leading-relaxed">
                20-minute demo. The agent messages you live. Free.
                <div className="mt-2 inline-flex items-center gap-2 text-xs">
                  🤝 247+ Shopify stores doing $500K–$10M GMV.
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-14 md:mt-20">
          <h3 className="font-display text-xl md:text-2xl font-semibold tracking-tight text-white max-w-2xl">
            Six reasons operators switch — and never go back to spreadsheets.
          </h3>
          <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {benefits.map((b, i) => (
              <motion.div
                key={b.label}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: (i % 3) * 0.05 }}
                className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/[0.03] p-4"
              >
                <span className="grid place-items-center size-9 rounded-xl bg-[var(--color-accent-bright)]/15 text-[var(--color-accent-bright)] shrink-0">
                  <b.icon className="size-4" />
                </span>
                <p className="text-sm text-white/85 leading-snug pt-1.5">{b.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
