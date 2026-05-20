"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Plug, TrendingDown, Truck, MapPin, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Section } from "@/components/ui/section";
import { BoxStack, ForecastCurve, DotGrid, SupplyChainLines } from "@/components/site/decor";
import { SplitWords } from "@/components/site/animated-text";

const days = [
  {
    n: "01",
    icon: Plug,
    title: "Connect & Calibrate",
    body: "Install takes under 2 minutes. The agent pulls sales history, current inventory, suppliers, and PO records automatically. Within 10 minutes you get your first message — usually a stockout risk on a hero SKU with the GMV-at-stake figure attached. Approve. The PO is drafted and sent.",
    chip: "Real money saved before lunch",
  },
  {
    n: "02",
    icon: TrendingDown,
    title: "First Markdown Opportunity",
    body: "The agent finishes its first deep-scan of stuck inventory and pings you with the highest cash-trapped opportunity in your catalog. You see three markdown depths side-by-side with net-gain math. Ask 'what about 30%?' — the agent recalculates in 2 seconds. You apply. Compare-at and sale price update across locations.",
    chip: "Two-tap markdown",
  },
  {
    n: "03",
    icon: Truck,
    title: "Learning Your Suppliers",
    body: "By day 3 the agent has analyzed every PO you've ever placed and learned which suppliers run on time and which slip — per SKU. From now on, every reorder uses real lead times, not whatever you typed into a field 8 months ago. Reorder timing quietly sharpens without you doing anything.",
    chip: "Per-SKU lead time learning",
  },
  {
    n: "04",
    icon: MapPin,
    title: "Multi-Location Awareness",
    body: "If you've got more than one location (3PL + retail, multiple warehouses), the agent has built a separate forecast per variant per location. You'll start getting recommendations like 'transfer 40 units from A to B — saves a stockout AND saves a reorder.' Allocation problems you didn't know you had get surfaced.",
    chip: "Forecast per variant per location",
  },
  {
    n: "05",
    icon: Sparkles,
    title: "Quiet Confidence",
    body: "By day 5, the rhythm is set. You're getting 2–4 messages a week from the agent — only when there's a decision worth money. Each takes 30 seconds to handle. The Sunday spreadsheet ritual is gone. You're running the brand instead of running the inventory math.",
    chip: "Sunday nights, back",
  },
];

export function Shift() {
  return (
    <Section id="timeline" className="relative overflow-hidden">
      <div aria-hidden className="absolute inset-0 bg-diagonal opacity-70" />
      <BoxStack className="absolute -top-6 -left-6 w-40 sm:w-52 text-[var(--color-accent)] opacity-50 animate-drift-slow -z-10" />
      <ForecastCurve className="hidden md:block absolute top-10 -right-10 w-[420px] h-40 text-[var(--color-accent)] opacity-40 -z-10" />
      <SupplyChainLines className="absolute bottom-10 left-0 right-0 h-32 text-[var(--color-accent)] opacity-40 -z-10" />
      <DotGrid className="absolute top-1/3 right-2 w-20 text-[var(--color-accent)] opacity-50 lg:hidden -z-10" />
      <div className="container-tight relative">
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-2 rounded-full bg-white hairline px-3 py-1.5 text-xs font-medium text-[var(--color-accent)]">
            <span className="size-1.5 rounded-full bg-[var(--color-accent-bright)]" />
            What your agent does in the first 5 days
          </span>
          <h2 className="mt-5 font-display text-[26px] leading-[1.1] xs:text-3xl sm:text-4xl md:text-5xl lg:text-[52px] lg:leading-[1.05] font-semibold tracking-[-0.02em] text-balance">
            <SplitWords text="Here's exactly what your AI Category Manager does in the first 5 days after install." />
          </h2>
          <p className="mt-5 text-base md:text-lg text-[var(--color-muted)] text-pretty">
            Most operators see their first 5-figure opportunity inside the first 24 hours. Here&apos;s the full week.
          </p>
        </div>

        <div className="mt-10 md:mt-16 relative">
          <div
            aria-hidden
            className="absolute left-5 xs:left-[22px] sm:left-6 lg:left-[calc(2.5rem-1px)] top-2 bottom-2 w-px bg-gradient-to-b from-transparent via-[var(--color-border-strong)] to-transparent lg:via-[var(--color-border-strong)]"
          />
          <div className="space-y-5 lg:space-y-4">
            {days.map((d, i) => (
              <motion.div
                key={d.n}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                className="relative grid lg:grid-cols-12 gap-3 lg:gap-6 items-start pl-12 xs:pl-14 sm:pl-16 lg:pl-0"
              >
                <span className="absolute left-0 lg:hidden grid place-items-center size-10 xs:size-11 sm:size-12 rounded-2xl bg-[var(--color-accent)] text-white font-display font-semibold ring-4 ring-[var(--color-background)]">
                  <span className="text-sm xs:text-base">{d.n}</span>
                </span>

                <div className="hidden lg:flex lg:col-span-3 lg:flex-col items-start gap-4 lg:sticky lg:top-24">
                  <span className="relative grid place-items-center size-20 rounded-3xl bg-[var(--color-accent)] text-white font-display font-semibold shrink-0 ring-4 ring-[var(--color-background)]">
                    <span className="text-[10px] uppercase tracking-wider opacity-70 absolute top-3">Day</span>
                    <span className="text-3xl mt-3">{d.n}</span>
                  </span>
                  <div className="lg:mt-3">
                    <div className="inline-flex items-center gap-2 text-[11px] uppercase tracking-wider text-[var(--color-muted)]">
                      <d.icon className="size-3.5" />
                      {d.chip}
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-9 rounded-3xl bg-white hairline p-5 md:p-8 shadow-[var(--shadow-soft)]">
                  <div className="flex items-center justify-between gap-3 lg:hidden">
                    <span className="text-[10px] uppercase tracking-wider text-[var(--color-muted)] font-mono">
                      Day {d.n}
                    </span>
                    <div className="inline-flex items-center gap-1.5 text-[10px] uppercase tracking-wider text-[var(--color-accent)]">
                      <d.icon className="size-3" />
                      {d.chip}
                    </div>
                  </div>
                  <h3 className="mt-3 lg:mt-0 font-display text-lg md:text-2xl font-semibold tracking-tight text-foreground">
                    {d.title}
                  </h3>
                  <p className="mt-3 text-[14px] md:text-[15px] text-[var(--color-muted)] leading-relaxed">
                    {d.body}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="mt-14 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
          <Button asChild variant="accent" size="lg" className="h-14 px-7">
            <Link href="#book">
              Book my demo + claim the bonuses
              <ArrowRight />
            </Link>
          </Button>
          <span className="text-sm text-[var(--color-muted)]">
            20-min demo. Live agent activation. Free.
          </span>
        </div>

        <div className="mt-3 text-xs text-[var(--color-muted)] inline-flex items-center gap-2">
          🤝 Already running inventory for 247+ Shopify stores doing $500K–$10M GMV.
        </div>
      </div>
    </Section>
  );
}
