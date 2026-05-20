"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Gift, CheckCircle2, Lock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Section } from "@/components/ui/section";
import { BlobB, OrbitRings, DotGrid, LeafCluster } from "@/components/site/decor";

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
      <BlobB className="-top-32 -right-32 w-[460px] opacity-50 -z-10" />
      <LeafCluster className="hidden md:block absolute top-20 left-6 w-28 text-[var(--color-accent)] opacity-25" />
      <DotGrid className="absolute bottom-20 left-2 w-20 text-[var(--color-accent)] opacity-50 lg:hidden" />
      <OrbitRings className="hidden lg:block absolute bottom-20 -right-32 w-[440px] text-[var(--color-accent-bright)]/40" />
      <div className="container-tight relative">
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-2 rounded-full bg-[var(--color-accent-soft)] px-3 py-1.5 text-xs font-medium text-[var(--color-accent)]">
            <Gift className="size-3.5" />
            Bonuses for booking this week
          </span>
          <h2 className="mt-5 font-display text-3xl sm:text-4xl md:text-5xl leading-[1.06] font-semibold tracking-[-0.025em] text-balance">
            Plus — when you book your demo this week, you get these bonuses free.
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

        <div className="mt-16 md:mt-20 rounded-3xl bg-[var(--color-accent-deep)] text-white p-6 md:p-10 lg:p-14 overflow-hidden relative">
          <div className="absolute inset-0 bg-noise opacity-15" />
          <div className="absolute -top-32 -right-32 size-[420px] rounded-full bg-[var(--color-accent-bright)]/20 blur-3xl" />

          <div className="relative grid lg:grid-cols-12 gap-8 lg:gap-12">
            <div className="lg:col-span-7">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-xs font-medium text-white/85">
                <Lock className="size-3.5" />
                Founding Customer Pricing — 247/500 spots taken
              </span>
              <h3 className="mt-5 font-display text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight text-white text-balance">
                Let&apos;s recap everything you get when you book your demo this week.
              </h3>
              <p className="mt-4 text-white/75 leading-relaxed">
                Plus what each piece would cost if you tried to build this stack yourself.
              </p>

              <ul className="mt-7 space-y-2.5">
                {stack.map((row) => (
                  <li key={row.label} className="flex items-start justify-between gap-4 text-sm leading-relaxed">
                    <span className="flex gap-2.5 text-white/85">
                      <CheckCircle2 className="size-4 text-[var(--color-accent-bright)] mt-0.5 shrink-0" />
                      {row.label}
                    </span>
                    <span className="font-mono text-xs text-white/55 shrink-0">{row.value}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-3xl bg-white text-foreground p-6 md:p-8">
                <div className="text-xs uppercase tracking-wider text-[var(--color-muted)]">Total value</div>
                <div className="font-display text-4xl font-semibold tracking-tight mt-1">$4,567+</div>
                <div className="mt-1 text-sm text-[var(--color-muted)]">
                  Equivalent hire: a $80K–$120K/year Category Manager.
                </div>

                <div className="mt-6 p-5 rounded-2xl bg-[var(--color-accent-soft)] border border-[color-mix(in_oklab,var(--color-accent)_22%,transparent)]">
                  <div className="text-xs uppercase tracking-wider text-[var(--color-accent)]">Today&apos;s price</div>
                  <div className="font-display text-3xl font-semibold tracking-tight text-[var(--color-accent-deep)] mt-1">
                    $0
                  </div>
                  <div className="mt-1 text-sm text-[var(--color-muted)]">
                    Free 20-minute demo + 14-day trial.
                  </div>
                </div>

                <Button asChild variant="accent" size="lg" className="mt-6 w-full h-14">
                  <Link href="#book">
                    Book my demo — lock in founding pricing
                    <ArrowRight />
                  </Link>
                </Button>
                <p className="mt-3 text-xs text-[var(--color-muted)] text-center">
                  Founding Customer Pricing closes at 500 stores. We&apos;re past 247.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
