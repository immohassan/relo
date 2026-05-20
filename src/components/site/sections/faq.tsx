"use client";

import * as React from "react";
import * as Accordion from "@radix-ui/react-accordion";
import { Plus, MessageCircleQuestion } from "lucide-react";
import { Section } from "@/components/ui/section";
import { DotGrid, ChatDots, BoxStack } from "@/components/site/decor";
import { SplitWords } from "@/components/site/animated-text";

const faqs = [
  {
    q: "Is this actually AI, or 'AI with a sparkle icon'?",
    a: "Real AI doing specific, defensible work. ML models for velocity forecasting (stockout-corrected), lead-time learning from your PO-to-receipt history, and markdown-depth projection trained on your response curves. The conversational layer uses an LLM grounded only on your inventory metadata — no customer PII anywhere near the prompt. We can show all of this on your store during the demo.",
  },
  {
    q: "Will the agent ever send a PO or apply a markdown without me approving?",
    a: "Never. Every action requires your explicit 'yes' in chat, including a final confirmation that shows the exact dollar amount and recipient before execution. This is a product principle, not a setting you can accidentally turn off.",
  },
  {
    q: "WhatsApp or Slack — which should I pick?",
    a: "Both work. WhatsApp is better for solo founders and international brands. Slack is better for teams with ops/finance involvement. You can switch any time. The agent works the same way in both.",
  },
  {
    q: "How is this different from Stocky / Inventory Planner / other inventory apps?",
    a: "Stocky is a Shopify POS feature — useful for POS-first retailers but no AI forecasting, no markdown intelligence, no agent. Inventory Planner is excellent for $10M+ multi-channel brands but overbuilt and overpriced for our size — and is still a dashboard tool, not an agentic system. Replenish is built specifically for $500K–$10M Shopify-first brands who want the function run, not another tool to manage.",
  },
  {
    q: "What about new products with no sales history?",
    a: "We handle cold-start with attribute-based lookalike forecasting from similar products in your catalog. New SKUs are tagged 'Learning' for 14 days so the agent's recommendations come with explicit lower-confidence labels until your real signal stabilizes.",
  },
  {
    q: "How much does Replenish cost after the free trial?",
    a: "Plans start at $97/month for stores under 500 SKUs and scale with catalog size. We'll walk you through the right plan during the demo. Founding Customer Pricing (locked-in lifetime rates) is available for the first 500 subscribers.",
  },
];

export function FAQ() {
  return (
    <Section id="faq" className="relative overflow-hidden">
      <div aria-hidden className="absolute inset-0 bg-grid-soft opacity-30 mask-fade-b" />
      <ChatDots className="hidden md:block absolute top-12 right-6 w-32 text-[var(--color-accent)] opacity-40 -z-10" />
      <BoxStack className="hidden lg:block absolute bottom-10 left-4 w-32 text-[var(--color-accent)] opacity-40 -z-10" />
      <DotGrid className="absolute bottom-10 left-2 w-20 text-[var(--color-accent)] opacity-50 lg:hidden -z-10" />
      <div className="container-tight relative">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16">
          <div className="lg:col-span-4">
            <span className="inline-flex items-center gap-2 rounded-full bg-white hairline px-3 py-1.5 text-xs font-medium text-[var(--color-accent)]">
              <MessageCircleQuestion className="size-3.5" />
              FAQ
            </span>
            <h2 className="mt-5 font-display text-3xl sm:text-4xl md:text-5xl leading-[1.05] font-semibold tracking-[-0.025em] text-balance">
              <SplitWords text="Frequently asked questions." />
            </h2>
            <p className="mt-5 text-[var(--color-muted)] text-pretty">
              Still curious? We answer all of these live during the demo — with your real store data on screen.
            </p>
          </div>

          <div className="lg:col-span-8">
            <Accordion.Root type="single" collapsible className="rounded-3xl bg-white hairline overflow-hidden">
              {faqs.map((f, i) => (
                <Accordion.Item
                  key={i}
                  value={`faq-${i}`}
                  className="border-b border-[var(--color-border)] last:border-b-0"
                >
                  <Accordion.Header>
                    <Accordion.Trigger className="group flex w-full items-center justify-between gap-4 px-5 md:px-7 py-5 md:py-6 text-left focus-visible:outline-none focus-visible:bg-[var(--color-accent-soft)]/40">
                      <span className="font-display text-[15px] md:text-base font-semibold tracking-tight text-foreground">
                        {f.q}
                      </span>
                      <span className="grid place-items-center size-9 rounded-full bg-[var(--color-accent-soft)] text-[var(--color-accent)] shrink-0 transition-transform duration-300 group-data-[state=open]:rotate-45">
                        <Plus className="size-4" />
                      </span>
                    </Accordion.Trigger>
                  </Accordion.Header>
                  <Accordion.Content className="overflow-hidden data-[state=open]:animate-rise">
                    <div className="px-5 md:px-7 pb-6 text-[14.5px] text-[var(--color-muted)] leading-relaxed max-w-3xl">
                      {f.a}
                    </div>
                  </Accordion.Content>
                </Accordion.Item>
              ))}
            </Accordion.Root>
          </div>
        </div>
      </div>
    </Section>
  );
}
