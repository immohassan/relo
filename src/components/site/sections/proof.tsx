"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Section } from "@/components/ui/section";
import { BoxStack, DotGrid, InventoryNodes, SupplyChainLines, ChatDots } from "@/components/site/decor";
import { SplitWords, ShimmerText } from "@/components/site/animated-text";

const testimonials = [
  {
    quote:
      "The agent caught a stockout 17 days out on our best hoodie. $14K in GMV at stake. I approved the PO from my phone while making coffee. That used to be 4 hours on a Sunday.",
    name: "[Name]",
    role: "Founder, [Brand]",
    detail: "Apparel · $1.8M GMV",
  },
  {
    quote:
      "I'd been avoiding marking down a category for 5 months. The agent showed me three depths with the gain math. I asked it to model 30%. Cleared $38K in trapped cash in 6 weeks.",
    name: "[Name]",
    role: "COO, [Brand]",
    detail: "Home Goods · $4.2M GMV",
  },
  {
    quote:
      "Tried other inventory apps. Both felt like a job I now had to do. Replenish actually does the job — and just messages me when it needs something.",
    name: "[Name]",
    role: "Founder, [Brand]",
    detail: "Beauty · $900K GMV",
  },
  {
    quote:
      "What sold me was the conversational refinement. I asked it 'what about Beta as a supplier?' and it had the comparison in 4 seconds. That moment, I knew this wasn't another dashboard tool.",
    name: "[Name]",
    role: "Founder, [Brand]",
    detail: "Outdoor Gear · $3.1M GMV",
  },
  {
    quote:
      "My finance person was skeptical. Then I showed her the audit trail. Every conversation, every approval, every PO logged. She's now the one who asks 'did the agent flag anything today?'",
    name: "[Name]",
    role: "COO, [Brand]",
    detail: "Pet Products · $5.6M GMV",
  },
  {
    quote:
      "I used to think of inventory as a Sunday problem. Now I don't think about it at all. That's the actual product.",
    name: "[Name]",
    role: "Founder, [Brand]",
    detail: "Supplements · $2.4M GMV",
  },
];

export function Proof() {
  return (
    <>
      <Section id="about" className="relative overflow-hidden">
        <div aria-hidden className="absolute inset-0 bg-dotted-soft opacity-40 mask-fade-b" />
        <BoxStack className="absolute -top-4 -right-6 w-40 sm:w-52 text-[var(--color-accent)] opacity-45 animate-drift-slow -z-10" />
        <ChatDots className="hidden sm:block absolute top-10 left-4 w-32 text-[var(--color-accent)] opacity-40 -z-10" />
        <DotGrid className="absolute bottom-20 right-2 w-24 text-[var(--color-accent)] opacity-50 lg:hidden -z-10" />
        <div className="container-tight relative">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
            <div className="lg:col-span-5">
              <span className="inline-flex items-center gap-2 rounded-full bg-white hairline px-3 py-1.5 text-xs font-medium text-[var(--color-accent)]">
                <span className="size-1.5 rounded-full bg-[var(--color-accent-bright)]" />
                About me
              </span>
              <h2 className="mt-5 font-display text-3xl sm:text-4xl md:text-5xl leading-[1.05] font-semibold tracking-[-0.025em] text-balance">
                Hello — I&apos;m <ShimmerText>Marcus Hale</ShimmerText>.
              </h2>

              <div className="mt-8 relative max-w-md">
                <div className="absolute -inset-4 rounded-[28px] bg-[var(--color-accent-soft)] blur-2xl opacity-60" />
                <div className="relative aspect-[4/5] rounded-[28px] bg-gradient-to-br from-[var(--color-accent)] to-[var(--color-accent-deep)] overflow-hidden hairline shadow-[var(--shadow-lifted)]">
                  <div className="absolute inset-0 bg-noise opacity-20" />
                  <div className="absolute inset-0 grid place-items-center text-white/70 font-display text-sm">
                    [Founder photo placeholder]
                  </div>
                  <div className="absolute bottom-4 left-4 right-4 rounded-2xl bg-black/30 backdrop-blur px-4 py-3 text-white">
                    <div className="text-xs uppercase tracking-wider text-white/60">Marcus Hale</div>
                    <div className="font-display text-base font-medium">Founder & CEO, Replenish</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-5 text-[15px] md:text-base text-[var(--color-muted)] leading-relaxed text-pretty">
              <p className="text-foreground font-display text-xl md:text-2xl font-medium tracking-tight leading-snug">
                I built Replenish because I lost six figures in one quarter to two decisions I was making badly in a spreadsheet.
              </p>
              <p>
                A few years ago I was running a Shopify brand at $2M GMV. I stocked out of our number-one product for 11 days before Black Friday — cost us about $42,000 in lost revenue. A month later, doing post-mortem, I realized I had $60,000 in cash trapped in a slow-moving category I should&apos;ve marked down four months earlier.
              </p>
              <p>
                I tried better spreadsheets. I tried other inventory apps. None of them solved it because none of them solved the actual problem — which wasn&apos;t software. It was that there was no one <em>running this function</em> of the business.
              </p>
              <p>
                So we built Replenish. Not &quot;AI-powered analytics.&quot; An actual AI Category Manager — the role enterprise brands pay $100K+/year for — as an agent that lives in your WhatsApp.
              </p>
              <p>
                It&apos;s the tool I wish I&apos;d had at $2M. Now it runs inventory for 247+ Shopify brands. I&apos;d love to show you what it&apos;d do for yours.
              </p>

              <div className="pt-3">
                <Button asChild variant="accent" size="lg" className="h-13">
                  <Link href="#book">
                    Meet my AI Category Manager
                    <ArrowRight />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section id="testimonials" className="relative overflow-hidden bg-[var(--color-surface-2)]">
        <InventoryNodes className="hidden md:block absolute -top-10 -right-20 w-[360px] text-[var(--color-accent)] opacity-50" />
        <SupplyChainLines className="absolute bottom-10 left-0 right-0 h-32 text-[var(--color-accent)] opacity-40 -z-10" />
        <BoxStack className="absolute -bottom-6 -left-6 w-44 text-[var(--color-accent)] opacity-45 -z-10" />
        <div className="container-tight relative">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full bg-white hairline px-3 py-1.5 text-xs font-medium text-[var(--color-accent)]">
              <Star className="size-3.5 fill-current" />
              Testimonials
            </span>
            <h2 className="mt-5 font-display text-3xl sm:text-4xl md:text-5xl leading-[1.05] font-semibold tracking-[-0.025em] text-balance">
              <SplitWords text="What operators say after the first 14 days." />
            </h2>
            <p className="mt-5 text-base md:text-lg text-[var(--color-muted)] text-pretty">
              Real merchants. Real numbers. Names redacted until each operator publishes their own case study.
            </p>
          </div>

          <div className="mt-10 md:mt-12 -mx-5 md:mx-0 md:hidden">
            <div className="scroll-snap-x flex gap-3 overflow-x-auto px-5 pb-6">
              {testimonials.map((t, i) => (
                <figure
                  key={i}
                  className="snap-card shrink-0 w-[82%] xs:w-[78%] sm:w-[60%] rounded-3xl bg-white hairline p-5 flex flex-col"
                >
                  <div className="flex items-center gap-0.5 text-[var(--color-accent)]">
                    {[...Array(5)].map((_, k) => (
                      <Star key={k} className="size-4 fill-current" />
                    ))}
                  </div>
                  <blockquote className="mt-3 text-[14.5px] leading-relaxed text-foreground/90 flex-1">
                    “{t.quote}”
                  </blockquote>
                  <figcaption className="mt-4 pt-4 border-t border-[var(--color-border)]">
                    <div className="text-[13px] font-medium text-foreground">{t.name}</div>
                    <div className="text-[12px] text-[var(--color-muted)]">{t.role}</div>
                    <div className="text-[11px] text-[var(--color-muted-foreground)] mt-0.5">
                      {t.detail}
                    </div>
                  </figcaption>
                </figure>
              ))}
              <div className="snap-card shrink-0 w-4" aria-hidden />
            </div>
            <div className="px-5 mt-1 flex items-center gap-1.5 text-[11px] text-[var(--color-muted)]">
              <span className="size-1.5 rounded-full bg-[var(--color-accent)]" />
              Swipe to read more →
            </div>
          </div>

          <div className="mt-12 hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {testimonials.map((t, i) => (
              <motion.figure
                key={i}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: (i % 3) * 0.06 }}
                className="rounded-3xl bg-white hairline p-6 md:p-7 flex flex-col"
              >
                <div className="flex items-center gap-0.5 text-[var(--color-accent)]">
                  {[...Array(5)].map((_, k) => (
                    <Star key={k} className="size-4 fill-current" />
                  ))}
                </div>
                <blockquote className="mt-4 text-[15px] leading-relaxed text-foreground/90 flex-1">
                  “{t.quote}”
                </blockquote>
                <figcaption className="mt-5 pt-4 border-t border-[var(--color-border)]">
                  <div className="text-[13px] font-medium text-foreground">{t.name}</div>
                  <div className="text-[12px] text-[var(--color-muted)]">{t.role}</div>
                  <div className="text-[11px] text-[var(--color-muted-foreground)] mt-0.5">
                    {t.detail}
                  </div>
                </figcaption>
              </motion.figure>
            ))}
          </div>
        </div>
      </Section>
    </>
  );
}
