"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Gift, CheckCircle2, Lock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Section } from "@/components/ui/section";
import { BoxStack, ForecastCurve, DotGrid, BarChart } from "@/components/site/decor";
import { SplitWords, ShimmerText, CountUp } from "@/components/site/animated-text";

const bonuses = [
  {
    n: "01",
    title: "The Inventory Leak Audit — done live",
    body: "During your demo we run a complete leak audit on your store. You walk away with a written summary of every stockout risk and dead-stock opportunity we found — even if you don't subscribe.",
    value: "$497 value",
  },
  {
    n: "02",
    title: "14-day full-access trial",
    body: "After the demo you get 14 days of full Replenish access — agent active, both channels enabled, every feature unlocked. No credit card. Two-tap cancel inside the app.",
    value: "$297 value",
  },
  {
    n: "03",
    title: "Founding Customer Pricing — locked for life",
    body: "If you subscribe by end of trial, your pricing is locked at our founding-customer rate forever — even as we raise prices for new customers. Most subscribers save $1,200+ in year one alone.",
    value: "$1,200+/yr",
  },
];

const stack = [
  { label: "Inventory Leak Audit on your store, done live", value: "$497" },
  { label: "Live install of Replenish + WhatsApp/Slack agent setup", value: "$297" },
  { label: "First AI-drafted PO or markdown — done during demo", value: "$197" },
  { label: "14-day full-access trial — agent active, every feature unlocked", value: "$297" },
  { label: "Custom alert thresholds tuned to your GMV size", value: "$147" },
  { label: "Multi-location forecasting calibrated to warehouses & 3PL", value: "$247" },
  { label: "Founding Customer Pricing locked for life (if you subscribe)", value: "$1,200+/yr" },
  { label: "Direct Slack DM access to founding team during trial", value: "$497" },
  { label: "Quarterly Category Strategy review for first 12 months", value: "$1,188" },
];

export function Bonuses() {
  return (
    <Section id="bonuses" className="relative overflow-hidden">
      <div aria-hidden className="absolute inset-0 bg-grid-soft mask-fade-b opacity-40" />
      <BoxStack className="absolute -top-8 -right-6 w-44 sm:w-56 text-[var(--color-accent)] opacity-50 animate-drift-slow -z-10" />
      <BarChart className="hidden md:block absolute top-20 left-2 w-32 lg:w-40 text-[var(--color-accent)] opacity-35 -z-10" />
      <DotGrid className="absolute bottom-20 left-2 w-20 text-[var(--color-accent)] opacity-50 lg:hidden -z-10" />
      <ForecastCurve className="hidden lg:block absolute bottom-10 -right-10 w-[420px] h-40 text-[var(--color-accent-bright)] opacity-45 -z-10" />
      <div className="container-tight relative">
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-2 rounded-full bg-[var(--color-accent-soft)] px-3 py-1.5 text-xs font-medium text-[var(--color-accent)]">
            <Gift className="size-3.5" />
            Bonuses for booking this week
          </span>
          <h2 className="mt-5 font-display text-[26px] leading-[1.1] xs:text-3xl sm:text-4xl md:text-5xl md:leading-[1.06] font-semibold tracking-[-0.02em] text-balance">
            <SplitWords text="Plus — when you book your demo this week, you get these bonuses free." />
          </h2>
          <p className="mt-5 text-base md:text-lg text-[var(--color-muted)] text-pretty">
            Three things we normally only give to paid customers. Yours for booking the demo this week.
          </p>
        </div>

        <div className="mt-12 grid md:grid-cols-3 gap-4">
          {bonuses.map((b, i) => (
            <motion.div
              key={b.n}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="relative rounded-3xl bg-white hairline p-6 md:p-7 flex flex-col"
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-[11px] text-[var(--color-muted)]">BONUS {b.n}</span>
                <span className="rounded-full bg-[var(--color-accent-soft)] px-2.5 py-1 text-[11px] font-medium text-[var(--color-accent)]">
                  {b.value}
                </span>
              </div>
              <h3 className="mt-5 font-display text-lg md:text-xl font-semibold tracking-tight">
                {b.title}
              </h3>
              <p className="mt-2 text-sm text-[var(--color-muted)] leading-relaxed">{b.body}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 md:mt-20 rounded-3xl bg-[var(--color-accent-deep)] text-white p-6 sm:p-8 md:p-10 lg:p-14 overflow-hidden relative">
          <div className="absolute inset-0 bg-noise opacity-15" />
          <div className="absolute -top-32 -right-32 size-[420px] rounded-full bg-[var(--color-accent-bright)]/20 blur-3xl" />

          <div className="relative grid md:grid-cols-12 gap-8 md:gap-6 lg:gap-12">
            <div className="md:col-span-7">
              <span className="inline-flex flex-wrap items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-[11px] sm:text-xs font-medium text-white/85">
                <Lock className="size-3.5" />
                Founding Customer Pricing
                <span className="text-white/55">·</span>
                <span>
                  <CountUp value={247} className="text-white" />/500 spots taken
                </span>
              </span>
              <h3 className="mt-5 font-display text-[22px] xs:text-2xl sm:text-3xl md:text-[28px] lg:text-4xl leading-[1.1] font-semibold tracking-tight text-white text-balance">
                <SplitWords text="Let's recap everything you get when you book your demo this week." />
              </h3>
              <p className="mt-4 text-sm md:text-[15px] text-white/75 leading-relaxed">
                Plus what each piece would cost if you tried to build this stack yourself.
              </p>

              <ul className="mt-7 space-y-3 md:space-y-2.5">
                {stack.map((row) => (
                  <li
                    key={row.label}
                    className="flex flex-col xs:flex-row xs:items-start xs:justify-between gap-1 xs:gap-4 text-sm leading-relaxed"
                  >
                    <span className="flex gap-2.5 text-white/85">
                      <CheckCircle2 className="size-4 text-[var(--color-accent-bright)] mt-0.5 shrink-0" />
                      <span>{row.label}</span>
                    </span>
                    <span className="font-mono text-[11px] md:text-xs text-white/55 shrink-0 ml-6 xs:ml-0">
                      {row.value}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="md:col-span-5">
              <div className="rounded-3xl bg-white text-foreground p-6 md:p-6 lg:p-8 md:sticky md:top-24">
                <div className="text-xs uppercase tracking-wider text-[var(--color-muted)]">Total value</div>
                <div className="font-display text-3xl md:text-3xl lg:text-4xl font-semibold tracking-tight mt-1">
                  <ShimmerText>$4,567+</ShimmerText>
                </div>
                <div className="mt-1 text-sm text-[var(--color-muted)] leading-snug">
                  Equivalent hire: a $80K–$120K/year Category Manager.
                </div>

                <div className="mt-5 lg:mt-6 p-4 lg:p-5 rounded-2xl bg-[var(--color-accent-soft)] border border-[color-mix(in_oklab,var(--color-accent)_22%,transparent)]">
                  <div className="text-xs uppercase tracking-wider text-[var(--color-accent)]">Today&apos;s price</div>
                  <div className="font-display text-3xl font-semibold tracking-tight text-[var(--color-accent-deep)] mt-1">
                    $0
                  </div>
                  <div className="mt-1 text-sm text-[var(--color-muted)]">
                    Free 20-minute demo + 14-day trial.
                  </div>
                </div>

                <Button asChild variant="accent" size="lg" className="mt-5 lg:mt-6 w-full h-13 lg:h-14 text-[14px] md:text-[13px] lg:text-[15px] whitespace-normal px-4 leading-tight">
                  <Link href="#book">
                    Book my demo — lock founding pricing
                    <ArrowRight />
                  </Link>
                </Button>
                <p className="mt-3 text-[11px] md:text-xs text-[var(--color-muted)] text-center leading-snug">
                  Founding Customer Pricing closes at 500 stores. Past 247.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
