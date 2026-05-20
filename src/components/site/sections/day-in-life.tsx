"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Section } from "@/components/ui/section";
import { BarChart, DotGrid, ChatDots, WaveLine } from "@/components/site/decor";
import { SplitWords } from "@/components/site/animated-text";

export function DayInLife() {
  return (
    <Section id="sales" className="relative overflow-hidden">
      <div aria-hidden className="absolute inset-0 bg-grid-soft mask-fade-b opacity-50" />
      <BarChart className="absolute -top-2 right-2 sm:right-10 w-32 sm:w-48 text-[var(--color-accent)] opacity-50 -z-10" />
      <ChatDots className="absolute top-1/3 right-2 w-24 text-[var(--color-accent)] opacity-45 lg:hidden -z-10" />
      <DotGrid className="absolute bottom-40 left-2 w-20 text-[var(--color-accent)] opacity-45 lg:hidden -z-10" />
      <div className="container-tight relative">
        <div className="max-w-3xl">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full bg-white hairline px-3 py-1.5 text-xs font-medium text-[var(--color-accent)]"
          >
            <span className="size-1.5 rounded-full bg-[var(--color-accent-bright)]" />
            For Shopify operators doing $500K–$10M
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.05 }}
            className="mt-5 font-display text-[28px] leading-[1.1] sm:text-4xl md:text-5xl lg:text-[56px] lg:leading-[1.05] font-semibold tracking-[-0.025em] text-balance"
          >
            Stop being your own buyer, your own merchandiser, and your own markdown manager.
            <span className="block mt-2 relative">
              <span className="text-[var(--color-accent)]">We built an AI Category Manager that does all three — in WhatsApp.</span>
              <WaveLine className="absolute -bottom-1 left-0 w-40 sm:w-56 h-3 text-[var(--color-accent-bright)]" />
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="mt-6 max-w-2xl text-base md:text-lg text-[var(--color-muted)] text-pretty"
          >
            Plug-and-play in 2 minutes. Watches your inventory 24/7. Pings you with stockout risks and dead-stock opportunities — dollar impact upfront. Drafts the PO. Applies the markdown. You approve in 2 taps. Then you go run your brand.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mt-10 md:mt-14"
        >
          <div className="relative aspect-video w-full rounded-3xl bg-[var(--color-accent-deep)] overflow-hidden hairline shadow-[var(--shadow-lifted)]">
            <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-accent-deep)] via-[var(--color-accent)] to-[var(--color-accent-bright)]/40 opacity-90" />
            <div className="absolute inset-0 bg-noise opacity-20" />
            <div className="absolute inset-0 grid place-items-center px-4">
              <button className="group inline-flex flex-col items-center gap-2 sm:gap-3 text-white text-center">
                <span className="grid place-items-center size-12 sm:size-16 md:size-20 rounded-full bg-white text-[var(--color-accent)] shadow-[0_0_0_6px_rgba(255,255,255,0.12)] sm:shadow-[0_0_0_8px_rgba(255,255,255,0.15)] group-hover:scale-105 transition-transform">
                  <Play className="size-5 sm:size-7 md:size-8 fill-current ml-0.5" />
                </span>
                <span className="font-display text-[11px] sm:text-base md:text-lg font-medium tracking-tight max-w-[200px] sm:max-w-none leading-snug">
                  <span className="sm:hidden">90s walkthrough · sound on</span>
                  <span className="hidden sm:inline">Watch the 90-second walkthrough · sound on</span>
                </span>
              </button>
            </div>
            <div className="absolute bottom-3 left-3 right-3 sm:bottom-6 sm:left-6 sm:right-6 flex items-center justify-between gap-2 text-white/85 text-[10px] sm:text-sm">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-black/35 backdrop-blur px-2 sm:px-3 py-1 sm:py-1.5 truncate max-w-[70%] sm:max-w-none">
                <span className="sm:hidden">💬 Stockout → PO in 4 msgs</span>
                <span className="hidden sm:inline">💬 Real WhatsApp — stockout → PO sent in 4 messages</span>
              </span>
              <span className="rounded-full bg-black/35 backdrop-blur px-2 sm:px-3 py-1 sm:py-1.5 shrink-0">1:32</span>
            </div>
          </div>

          <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            <Button asChild variant="accent" size="lg" className="h-14 px-7">
              <Link href="#book">
                Yes — show me my AI Category Manager
                <ArrowRight />
              </Link>
            </Button>
            <span className="text-sm text-[var(--color-muted)]">
              Free 20-min demo. No credit card. No slide deck.
            </span>
          </div>
        </motion.div>

        <div className="mt-16 md:mt-24 grid lg:grid-cols-12 gap-8 lg:gap-12">
          <div className="lg:col-span-5">
            <h3 className="font-display text-2xl sm:text-3xl md:text-4xl font-semibold tracking-[-0.02em] leading-tight">
              <SplitWords text="You're one AI Category Manager away from getting your Sunday nights back." />
            </h3>
            <p className="mt-4 text-[var(--color-muted)] leading-relaxed">
              The $50M+ brands you watch on TikTok have someone whose only job is to make sure they never stock out and never overbuy. That person costs $80K–$120K a year. You can&apos;t afford one yet — so you&apos;re doing the job yourself at 9pm on a Sunday, and you&apos;re losing money to it every week.
            </p>
          </div>

          <div className="lg:col-span-7 space-y-3">
            {[
              "Imagine opening Shopify on Monday morning and the PO for your hero SKU is already drafted — you just hit 'send.'",
              "Imagine getting a WhatsApp at 9:14am that says '$11,400 in GMV at risk — want me to fix it?' and replying 'yes' while in line for coffee.",
              "Imagine knowing — with an actual dollar figure, not a guess — exactly how deep to mark down that stuck category, and applying it in two taps.",
            ].map((line, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.08 }}
                className="flex gap-4 rounded-2xl bg-white hairline p-5"
              >
                <span className="shrink-0 grid place-items-center size-9 rounded-full bg-[var(--color-accent-soft)] text-[var(--color-accent)] font-display text-sm font-semibold">
                  0{i + 1}
                </span>
                <p className="text-[15px] text-foreground/90 leading-relaxed">{line}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
