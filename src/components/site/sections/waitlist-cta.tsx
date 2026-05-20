"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  ShieldCheck,
  Calendar,
  Mail,
  Phone,
  Store,
  Sparkles,
  X,
  Video,
} from "lucide-react";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { BlobA, OrbitRings, DotGrid } from "@/components/site/decor";

type View = "form" | "thanks";

const slots = [
  { day: "Tue", date: "11", time: "10:30 AM" },
  { day: "Tue", date: "11", time: "2:00 PM" },
  { day: "Wed", date: "12", time: "9:00 AM" },
  { day: "Wed", date: "12", time: "1:30 PM" },
  { day: "Thu", date: "13", time: "11:00 AM" },
  { day: "Thu", date: "13", time: "3:30 PM" },
  { day: "Fri", date: "14", time: "10:00 AM" },
  { day: "Fri", date: "14", time: "2:30 PM" },
];

const gmvBands = [
  "Under $250K",
  "$250K–$1M",
  "$1M–$5M",
  "$5M–$25M",
  "$25M+",
];

const channels = [
  { value: "whatsapp", label: "WhatsApp" },
  { value: "slack", label: "Slack" },
  { value: "either", label: "Decide on the call" },
];

export function WaitlistCTA() {
  const [view, setView] = React.useState<View>("form");
  const [slot, setSlot] = React.useState<number | null>(2);
  const [form, setForm] = React.useState({
    firstName: "",
    email: "",
    store: "",
    country: "United States",
    gmv: "$1M–$5M",
    channel: "whatsapp",
  });

  const onChange = (k: keyof typeof form, v: string) =>
    setForm((f) => ({ ...f, [k]: v }));

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.email.includes("@") || slot === null) return;
    setView("thanks");
    if (typeof window !== "undefined") {
      window.scrollTo({ top: document.getElementById("book")?.offsetTop ?? 0, behavior: "smooth" });
    }
  };

  return (
    <Section id="book" className="relative overflow-hidden pb-24 md:pb-32">
      <div aria-hidden className="absolute inset-0 -z-10 bg-noise opacity-40" />
      <div aria-hidden className="absolute -top-32 -right-20 -z-10 size-[460px] rounded-full bg-[var(--color-accent-soft)] blur-3xl opacity-60" />
      <BlobA className="-bottom-40 -left-32 w-[480px] opacity-60 -z-10" />
      <OrbitRings className="hidden md:block absolute top-10 -left-32 w-[420px] text-[var(--color-accent)]/40 -z-10" />
      <DotGrid className="absolute top-20 right-3 w-20 text-[var(--color-accent)] opacity-60 lg:hidden" />

      <div className="container-tight">
        <AnimatePresence mode="wait">
          {view === "form" ? (
            <motion.div
              key="form"
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.45 }}
              className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start"
            >
              <div className="lg:col-span-5">
                <span className="inline-flex items-center gap-2 rounded-full bg-white hairline px-3 py-1.5 text-xs font-medium text-[var(--color-accent)]">
                  <Sparkles className="size-3.5" />
                  247+ stores booked this month
                </span>
                <h2 className="mt-5 font-display text-3xl sm:text-4xl md:text-5xl leading-[1.05] font-semibold tracking-[-0.025em] text-balance">
                  You&apos;re one step away from meeting your AI Category Manager.
                </h2>
                <p className="mt-5 text-base md:text-lg text-[var(--color-muted)] text-pretty">
                  Pick a 20-minute slot. We&apos;ll install Replenish live, connect your channel, and the agent will message you with your first real opportunity — before we hang up.
                </p>

                <ul className="mt-8 space-y-3">
                  {[
                    "20-minute personalized demo & live install",
                    "Free Inventory Leak Audit on your store",
                    "14-day full-access trial of Replenish",
                    "Founding Customer Pricing (if you subscribe by trial end)",
                  ].map((line) => (
                    <li key={line} className="flex items-start gap-3 text-sm text-foreground/90">
                      <CheckCircle2 className="size-4.5 text-[var(--color-accent)] mt-0.5 shrink-0" />
                      {line}
                    </li>
                  ))}
                </ul>

                <div className="mt-8 rounded-2xl bg-[var(--color-accent-soft)]/60 hairline p-5 text-sm text-foreground/85">
                  <div className="font-display text-base font-semibold tracking-tight">
                    Total: $0 · Free
                  </div>
                  <div className="mt-1 text-[var(--color-muted)] leading-relaxed">
                    Cancellation: one click from the calendar invite. No charge ever.
                  </div>
                </div>
              </div>

              <div className="lg:col-span-7">
                <form
                  onSubmit={onSubmit}
                  className="relative rounded-3xl bg-white hairline shadow-[var(--shadow-lifted)] p-6 md:p-8"
                >
                  <div className="flex items-center justify-between">
                    <div className="text-xs uppercase tracking-wider text-[var(--color-muted)]">
                      Reserve your slot
                    </div>
                    <div className="inline-flex items-center gap-1.5 text-xs text-[var(--color-muted)]">
                      <ShieldCheck className="size-3.5" />
                      Secure · we don&apos;t sell your data
                    </div>
                  </div>

                  <div className="mt-6 grid sm:grid-cols-2 gap-3">
                    <Field
                      label="First name"
                      icon={<Mail className="size-4" />}
                      value={form.firstName}
                      onChange={(v) => onChange("firstName", v)}
                      placeholder="Alex"
                    />
                    <Field
                      label="Work email"
                      type="email"
                      required
                      icon={<Mail className="size-4" />}
                      value={form.email}
                      onChange={(v) => onChange("email", v)}
                      placeholder="you@store.com"
                    />
                    <Field
                      label="Shopify store URL"
                      icon={<Store className="size-4" />}
                      value={form.store}
                      onChange={(v) => onChange("store", v)}
                      placeholder="yourbrand.myshopify.com"
                    />
                    <Field
                      label="Country"
                      icon={<Phone className="size-4" />}
                      value={form.country}
                      onChange={(v) => onChange("country", v)}
                      placeholder="United States"
                    />
                  </div>

                  <div className="mt-5">
                    <label className="text-xs font-medium text-[var(--color-muted)]">
                      Approximate annual GMV
                    </label>
                    <div className="mt-2 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2">
                      {gmvBands.map((b) => (
                        <button
                          key={b}
                          type="button"
                          onClick={() => onChange("gmv", b)}
                          className={
                            form.gmv === b
                              ? "h-11 rounded-full px-3 text-[12.5px] font-medium bg-[var(--color-accent)] text-white tap-feedback"
                              : "h-11 rounded-full px-3 text-[12.5px] font-medium bg-[var(--color-surface-2)] text-foreground/80 active:bg-[var(--color-accent-soft)] tap-feedback"
                          }
                        >
                          {b}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="mt-5">
                    <label className="text-xs font-medium text-[var(--color-muted)]">
                      Preferred agent channel
                    </label>
                    <div className="mt-2 grid grid-cols-3 gap-2">
                      {channels.map((c) => (
                        <button
                          key={c.value}
                          type="button"
                          onClick={() => onChange("channel", c.value)}
                          className={
                            form.channel === c.value
                              ? "h-12 rounded-2xl px-3 text-[13px] font-medium bg-[var(--color-accent)] text-white tap-feedback"
                              : "h-12 rounded-2xl px-3 text-[13px] font-medium bg-[var(--color-surface-2)] text-foreground/80 active:bg-[var(--color-accent-soft)] tap-feedback"
                          }
                        >
                          {c.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="mt-6">
                    <div className="flex items-center justify-between">
                      <label className="text-xs font-medium text-[var(--color-muted)]">
                        Pick a slot (next 14 days)
                      </label>
                      <span className="inline-flex items-center gap-1.5 text-[11px] text-[var(--color-muted)]">
                        <Calendar className="size-3" />
                        Your timezone
                      </span>
                    </div>

                    <div className="mt-2 -mx-6 md:mx-0 sm:hidden">
                      <div className="scroll-snap-x flex gap-2 overflow-x-auto px-6 pb-2">
                        {slots.map((s, i) => (
                          <button
                            key={i}
                            type="button"
                            onClick={() => setSlot(i)}
                            className={
                              slot === i
                                ? "snap-card shrink-0 w-[42%] rounded-2xl border-2 border-[var(--color-accent)] bg-[var(--color-accent-soft)] px-3 py-3 text-left tap-feedback"
                                : "snap-card shrink-0 w-[42%] rounded-2xl border border-[var(--color-border-strong)] bg-white px-3 py-3 text-left tap-feedback"
                            }
                          >
                            <div className="text-[11px] uppercase tracking-wider text-[var(--color-muted)]">
                              {s.day} · {s.date}
                            </div>
                            <div className="font-display text-sm font-semibold tracking-tight">
                              {s.time}
                            </div>
                          </button>
                        ))}
                        <div className="snap-card shrink-0 w-2" aria-hidden />
                      </div>
                    </div>

                    <div className="mt-2 hidden sm:grid sm:grid-cols-4 gap-2">
                      {slots.map((s, i) => (
                        <button
                          key={i}
                          type="button"
                          onClick={() => setSlot(i)}
                          className={
                            slot === i
                              ? "rounded-2xl border-2 border-[var(--color-accent)] bg-[var(--color-accent-soft)] px-3 py-3 text-left"
                              : "rounded-2xl border border-[var(--color-border-strong)] bg-white px-3 py-3 text-left hover:border-[var(--color-accent)] transition"
                          }
                        >
                          <div className="text-[11px] uppercase tracking-wider text-[var(--color-muted)]">
                            {s.day} · {s.date}
                          </div>
                          <div className="font-display text-sm font-semibold tracking-tight">
                            {s.time}
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>

                  <Button
                    type="submit"
                    variant="accent"
                    size="lg"
                    className="mt-7 w-full h-14"
                  >
                    Confirm my demo slot
                    <ArrowRight />
                  </Button>

                  <p className="mt-3 text-[11px] text-[var(--color-muted)] leading-relaxed">
                    By clicking confirm, you agree to our <a href="/privacy" className="underline">Terms</a> and <a href="/privacy" className="underline">Privacy Policy</a>. We use your info to prepare your demo. We don&apos;t sell, share, or rent your data. Ever.
                  </p>
                </form>
              </div>
            </motion.div>
          ) : (
            <ThankYou key="thanks" form={form} slot={slot !== null ? slots[slot] : null} onBack={() => setView("form")} />
          )}
        </AnimatePresence>
      </div>
    </Section>
  );
}

function Field({
  label,
  icon,
  value,
  onChange,
  placeholder,
  type = "text",
  required,
}: {
  label: string;
  icon?: React.ReactNode;
  value: string;
  onChange: (v: string) => void;
  placeholder: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <label className="block">
      <span className="text-xs font-medium text-[var(--color-muted)]">{label}</span>
      <div className="mt-1.5 relative">
        {icon && (
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-[var(--color-muted)]">
            {icon}
          </span>
        )}
        <input
          type={type}
          required={required}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className={
            icon
              ? "w-full h-11 rounded-2xl bg-[var(--color-surface-2)] hairline pl-9 pr-3 text-[14px] outline-none focus:ring-2 focus:ring-[var(--color-accent)]/30 placeholder:text-[var(--color-muted-foreground)]"
              : "w-full h-11 rounded-2xl bg-[var(--color-surface-2)] hairline px-3 text-[14px] outline-none focus:ring-2 focus:ring-[var(--color-accent)]/30 placeholder:text-[var(--color-muted-foreground)]"
          }
        />
      </div>
    </label>
  );
}

function ThankYou({
  form,
  slot,
  onBack,
}: {
  form: { firstName: string; email: string; store: string; channel: string };
  slot: { day: string; date: string; time: string } | null;
  onBack: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.5 }}
      className="relative rounded-3xl bg-[var(--color-accent-deep)] text-white overflow-hidden"
    >
      <div className="absolute inset-0 bg-noise opacity-15" />
      <div className="absolute -top-32 -right-32 size-[420px] rounded-full bg-[var(--color-accent-bright)]/25 blur-3xl" />

      <button
        type="button"
        onClick={onBack}
        className="absolute top-4 right-4 grid place-items-center size-9 rounded-full bg-white/10 text-white/80 hover:bg-white/20 transition"
        aria-label="Edit booking"
      >
        <X className="size-4" />
      </button>

      <div className="relative p-6 md:p-10 lg:p-14 grid lg:grid-cols-12 gap-10">
        <div className="lg:col-span-7">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-3 py-1.5 text-xs font-medium text-white/85">
            <span className="size-1.5 rounded-full bg-[var(--color-accent-bright)] animate-pulse-soft" />
            Booking confirmed
          </span>

          <h2 className="mt-5 font-display text-3xl sm:text-4xl md:text-5xl leading-[1.05] font-semibold tracking-[-0.025em] text-white text-balance">
            🎉 You&apos;re in{form.firstName ? `, ${form.firstName}` : ""}. Your AI Category Manager is standing by.
          </h2>

          {slot && (
            <div className="mt-7 inline-flex items-center gap-3 rounded-2xl bg-white/8 border border-white/15 px-4 py-3">
              <Calendar className="size-5 text-[var(--color-accent-bright)]" />
              <div className="leading-tight">
                <div className="text-[11px] uppercase tracking-wider text-white/55">Your demo</div>
                <div className="font-display text-base font-medium">
                  {slot.day}, the {slot.date} · {slot.time}
                </div>
              </div>
            </div>
          )}

          <p className="mt-7 text-white/75 leading-relaxed max-w-xl">
            A calendar invite is on its way to <span className="text-white">{form.email || "your inbox"}</span>. The Zoom link is inside. We&apos;ll see you then.
          </p>

          <div className="mt-10 grid sm:grid-cols-3 gap-4">
            <Step n="01" title="Check your inbox" body="Look for an email from Marcus within 5 minutes. If it's not in primary, check Promotions or spam." />
            <Step n="02" title="Have these ready" body={`Shopify admin login (we install live) + ${form.channel === "slack" ? "Slack" : form.channel === "whatsapp" ? "WhatsApp" : "WhatsApp or Slack"} open on phone or desktop.`} />
            <Step n="03" title="Watch 90s video" body="A real WhatsApp conversation with the agent — stockout alert to PO sent, in 4 messages." />
          </div>
        </div>

        <div className="lg:col-span-5">
          <div className="rounded-3xl bg-white text-foreground p-6 md:p-7">
            <div className="aspect-video rounded-2xl bg-gradient-to-br from-[var(--color-accent)] to-[var(--color-accent-deep)] grid place-items-center text-white">
              <button className="inline-flex flex-col items-center gap-2">
                <span className="grid place-items-center size-14 rounded-full bg-white text-[var(--color-accent)]">
                  <Video className="size-6" />
                </span>
                <span className="text-sm font-medium">Watch before the call</span>
              </button>
            </div>
            <div className="mt-4 font-display text-base font-semibold tracking-tight">
              Two minutes that make your demo 4× more valuable.
            </div>
            <p className="mt-1 text-sm text-[var(--color-muted)]">
              See the agent flag a $11,400 stockout risk and send a PO via WhatsApp — in real time.
            </p>
          </div>

          <div className="mt-4 rounded-2xl bg-white/5 border border-white/10 p-4 text-xs text-white/65">
            Need to reschedule? One click from the calendar invite. No email back-and-forth.
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function Step({ n, title, body }: { n: string; title: string; body: string }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
      <div className="font-mono text-[11px] text-[var(--color-accent-bright)]">STEP {n}</div>
      <div className="mt-2 font-display text-[15px] font-semibold tracking-tight text-white">
        {title}
      </div>
      <p className="mt-1.5 text-[13px] text-white/70 leading-relaxed">{body}</p>
    </div>
  );
}
