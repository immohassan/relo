"use client";

import * as React from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  Lock,
  Sparkles,
  MessageCircle,
  TrendingUp,
  Bell,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  BoxStack,
  BarChart,
  SupplyChainLines,
  ForecastCurve,
  DotGrid,
  SparkLine,
  WaveLine,
} from "@/components/site/decor";
import { SplitWords, ShimmerText, TypewriterRotate } from "@/components/site/animated-text";

export function Hero() {
  const [email, setEmail] = React.useState("");
  const [name, setName] = React.useState("");
  const [submitted, setSubmitted] = React.useState(false);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.includes("@")) return;
    setSubmitted(true);
  };

  return (
    <section className="relative overflow-hidden">
      <BoxStack className="absolute -top-6 -left-10 sm:-top-10 sm:-left-16 w-44 sm:w-56 text-[var(--color-accent)] opacity-70 animate-drift-slow -z-10" />
      <ForecastCurve className="hidden md:block absolute top-32 right-[-40px] w-[420px] h-40 text-[var(--color-accent)] opacity-40 -z-10" />
      <SupplyChainLines className="absolute -bottom-4 left-0 right-0 h-32 text-[var(--color-accent)] opacity-50 -z-10" />
      <DotGrid className="absolute top-[58%] -left-6 w-28 text-[var(--color-accent)] opacity-50 -z-10" />
      <DotGrid className="absolute bottom-24 right-4 w-20 text-[var(--color-accent)] opacity-55 -z-10 lg:hidden" />
      <BarChart className="absolute top-2 right-2 w-24 text-[var(--color-accent)] opacity-50 lg:hidden -z-10" />
      <div className="absolute inset-0 -z-10 bg-noise opacity-40" />

      <div className="container-tight pt-8 sm:pt-12 lg:pt-20 pb-16 md:pb-24">
        <div className="grid items-center gap-8 sm:gap-10 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-7 order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="inline-flex items-center gap-2 rounded-full bg-white hairline px-3 py-1.5 text-[11px] sm:text-xs font-medium text-[var(--color-accent)]"
            >
              <Sparkles className="size-3.5" />
              <span className="text-[var(--color-muted)]">For Shopify operators losing money on</span>
              <TypewriterRotate
                words={["stockouts", "markdowns", "overbuying", "Sunday spreadsheets"]}
                className="text-[var(--color-accent)] min-w-[110px]"
              />
            </motion.div>

            <h1 className="mt-5 font-display text-[34px] leading-[1.05] sm:text-5xl md:text-6xl lg:text-[64px] lg:leading-[1.04] font-semibold tracking-[-0.03em] text-foreground text-balance">
              <SplitWords text="The 5-day email series showing where your Shopify store is" />{" "}
              <span className="relative inline-block">
                <ShimmerText className="relative z-10">leaking money</ShimmerText>
                <WaveLine className="absolute -bottom-2 left-0 right-0 h-3 text-[var(--color-accent-bright)]" />
              </span>
              {" "}
              <SplitWords
                text="— and how an AI Category Manager fixes it on autopilot."
                delay={0.4}
              />
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.12 }}
              className="mt-5 max-w-xl text-[15px] sm:text-base md:text-lg text-[var(--color-muted)] text-pretty"
            >
              For Shopify operators doing $500K–$10M tired of running buying and markdowns on Sunday nights. Five short emails. One per day. Free forever.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.18 }}
              className="mt-7 max-w-md"
            >
              {submitted ? (
                <SuccessState />
              ) : (
                <form onSubmit={onSubmit} className="space-y-3">
                  <input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="First name"
                    className="w-full h-12 rounded-full bg-white hairline px-5 text-[15px] outline-none focus:ring-2 focus:ring-[var(--color-accent)]/30 placeholder:text-[var(--color-muted-foreground)]"
                  />
                  <div className="relative">
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="you@store.com"
                      className="w-full h-14 rounded-full bg-white hairline pl-5 pr-2 text-[15px] outline-none focus:ring-2 focus:ring-[var(--color-accent)]/30 placeholder:text-[var(--color-muted-foreground)]"
                    />
                    <Button
                      type="submit"
                      variant="accent"
                      className="absolute right-1.5 top-1.5 bottom-1.5 h-auto px-4 sm:px-5"
                    >
                      <span className="hidden sm:inline">Send me Day 1</span>
                      <span className="sm:hidden">Day 1</span>
                      <ArrowRight />
                    </Button>
                  </div>
                  <div className="flex items-center gap-2 text-[11px] sm:text-xs text-[var(--color-muted)]">
                    <Lock className="size-3.5" />
                    We hate spam. Unsubscribe in one click.
                  </div>
                </form>
              )}
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="mt-7 flex flex-wrap items-center gap-x-5 gap-y-2.5 text-[11px] sm:text-xs text-[var(--color-muted)]"
            >
              <span className="inline-flex items-center gap-2">
                <CheckCircle2 className="size-4 text-[var(--color-accent)]" />
                Day 1 hits inbox in 60s
              </span>
              <span className="inline-flex items-center gap-2">
                <CheckCircle2 className="size-4 text-[var(--color-accent)]" />
                247+ Shopify stores
              </span>
            </motion.div>
          </div>

          <div className="lg:col-span-5 order-1 lg:order-2">
            <HeroVisual />
          </div>
        </div>
      </div>
    </section>
  );
}

function SuccessState() {
  return (
    <div className="rounded-3xl bg-white hairline p-5 animate-rise">
      <div className="flex items-start gap-3">
        <div className="grid place-items-center size-9 rounded-full bg-[var(--color-accent-soft)] text-[var(--color-accent)]">
          <CheckCircle2 className="size-5" />
        </div>
        <div>
          <div className="font-display text-lg font-semibold tracking-tight">
            You&apos;re in. Check your inbox.
          </div>
          <p className="mt-1 text-sm text-[var(--color-muted)]">
            Day 1 of the Inventory Mastery series is on its way. Add hello@replenish.app to your contacts so the next four don&apos;t hit spam.
          </p>
        </div>
      </div>
    </div>
  );
}

function HeroVisual() {
  return (
    <div className="relative mx-auto w-full max-w-[360px] sm:max-w-md lg:max-w-none">
      <div className="absolute -inset-8 bg-gradient-to-br from-[var(--color-accent-soft)] via-transparent to-[var(--color-accent-bright)]/30 rounded-[40px] blur-3xl opacity-80" />

      <div className="absolute -top-3 -left-4 sm:-left-6 z-20 rotate-[-6deg] rounded-2xl bg-white hairline px-3 py-2 shadow-[var(--shadow-elevated)] animate-float">
        <div className="flex items-center gap-2">
          <span className="grid place-items-center size-7 rounded-lg bg-[var(--color-accent-soft)] text-[var(--color-accent)]">
            <Bell className="size-3.5" />
          </span>
          <div className="leading-tight">
            <div className="text-[9px] uppercase tracking-wider text-[var(--color-muted)]">
              Stockout risk
            </div>
            <div className="font-display text-[12px] font-semibold">17 days out</div>
          </div>
        </div>
      </div>

      <div className="absolute -bottom-2 -left-3 sm:-bottom-3 sm:-left-5 z-20 rotate-[-3deg] rounded-2xl bg-white hairline p-3 shadow-[var(--shadow-elevated)] animate-float [animation-delay:1.5s]">
        <div className="flex items-center gap-2">
          <span className="grid place-items-center size-7 rounded-lg bg-emerald-100 text-emerald-700">
            <TrendingUp className="size-3.5" />
          </span>
          <div className="leading-tight">
            <div className="text-[9px] uppercase tracking-wider text-[var(--color-muted)]">
              Cash freed
            </div>
            <div className="font-display text-[12px] font-semibold text-emerald-700">+$38,400</div>
          </div>
        </div>
        <SparkLine className="mt-1.5 h-8 w-28 text-emerald-600" />
      </div>

      <div className="absolute -top-2 -right-2 sm:-top-4 sm:-right-4 z-20 rotate-3 rounded-2xl bg-[var(--color-accent-deep)] text-white px-3 py-2 shadow-[var(--shadow-elevated)] animate-float [animation-delay:0.8s]">
        <div className="text-[9px] uppercase tracking-wider text-white/65">PO drafted</div>
        <div className="font-display text-[13px] font-semibold">$11,400 saved</div>
      </div>

      <div className="relative rounded-[28px] bg-white hairline shadow-[var(--shadow-lifted)] overflow-hidden">
        <div className="px-4 py-3 border-b border-[var(--color-border)] flex items-center justify-between bg-[var(--color-surface-2)]">
          <div className="flex items-center gap-2">
            <span className="grid place-items-center size-7 rounded-full bg-[var(--color-accent)] text-white">
              <MessageCircle className="size-3.5" />
            </span>
            <div className="leading-tight">
              <div className="text-[13px] font-medium">Replenish Agent</div>
              <div className="flex items-center gap-1.5 text-[10px] text-[var(--color-muted)]">
                <span className="size-1.5 rounded-full bg-emerald-500 animate-pulse-soft" />
                online · WhatsApp
              </div>
            </div>
          </div>
          <span className="text-[10px] text-[var(--color-muted)]">9:14 AM</span>
        </div>

        <div className="p-4 space-y-3 bg-[color-mix(in_oklab,var(--color-accent-soft)_30%,white)]">
          <ChatBubble side="agent">
            ⚠️ Stockout risk on <b>Camp Hoodie / Sage / M</b>. 17 days out. $11,400 GMV at risk.
          </ChatBubble>
          <ChatBubble side="agent">
            Draft PO ready: 240 units · Supplier Mira · lands Aug 28. Approve?
          </ChatBubble>
          <ChatBubble side="user">yes — send it</ChatBubble>
          <ChatBubble side="agent">
            ✅ PO #4427 sent to Mira. I&apos;ll confirm receipt scan when it lands.
          </ChatBubble>
        </div>

        <div className="px-4 py-3 border-t border-[var(--color-border)] flex items-center gap-2 bg-white">
          <input
            disabled
            placeholder="Type a message…"
            className="flex-1 h-9 rounded-full bg-[var(--color-surface-2)] px-4 text-xs text-[var(--color-muted)]"
          />
          <span className="grid place-items-center size-9 rounded-full bg-[var(--color-accent)] text-white">
            <ArrowRight className="size-4" />
          </span>
        </div>
      </div>
    </div>
  );
}

function ChatBubble({ children, side }: { children: React.ReactNode; side: "agent" | "user" }) {
  return (
    <div className={side === "agent" ? "flex justify-start" : "flex justify-end"}>
      <div
        className={
          side === "agent"
            ? "max-w-[85%] rounded-2xl rounded-tl-md bg-white px-3.5 py-2.5 text-[12.5px] sm:text-[13px] leading-snug text-foreground shadow-sm hairline"
            : "max-w-[85%] rounded-2xl rounded-tr-md bg-[var(--color-accent)] px-3.5 py-2.5 text-[12.5px] sm:text-[13px] leading-snug text-white shadow-sm"
        }
      >
        {children}
      </div>
    </div>
  );
}
