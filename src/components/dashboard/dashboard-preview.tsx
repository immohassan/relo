"use client";

import * as React from "react";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  ArrowDownRight,
  TrendingUp,
  Boxes,
  PackageCheck,
  AlertTriangle,
  Sparkles,
  ChevronRight,
  Truck,
  Store,
  Search,
  Filter,
} from "lucide-react";
import { cn } from "@/lib/utils";

function Sparkline({
  data,
  color = "#F97316",
  fill = true,
  className,
}: {
  data: number[];
  color?: string;
  fill?: boolean;
  className?: string;
}) {
  const w = 240;
  const h = 56;
  const max = Math.max(...data);
  const min = Math.min(...data);
  const range = max - min || 1;
  const step = w / (data.length - 1);
  const pts = data.map((v, i) => [i * step, h - ((v - min) / range) * (h - 6) - 3] as const);
  const d = pts.map((p, i) => `${i === 0 ? "M" : "L"}${p[0].toFixed(1)},${p[1].toFixed(1)}`).join(" ");
  const area = `${d} L${w},${h} L0,${h} Z`;
  const id = React.useId();
  return (
    <svg viewBox={`0 0 ${w} ${h}`} preserveAspectRatio="none" className={cn("w-full h-14", className)}>
      <defs>
        <linearGradient id={id} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={color} stopOpacity="0.22" />
          <stop offset="100%" stopColor={color} stopOpacity="0" />
        </linearGradient>
      </defs>
      {fill && <path d={area} fill={`url(#${id})`} />}
      <path d={d} fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function BarChart({ values, labels }: { values: number[]; labels: string[] }) {
  const max = Math.max(...values);
  return (
    <div className="flex items-end gap-2 h-32">
      {values.map((v, i) => {
        const h = (v / max) * 100;
        return (
          <div key={i} className="flex-1 flex flex-col items-center gap-1.5">
            <div className="w-full bg-gradient-to-t from-[var(--color-accent)] to-[color-mix(in_oklab,var(--color-accent)_65%,white)] rounded-md" style={{ height: `${h}%` }} />
            <span className="text-[10px] text-[var(--color-muted)]">{labels[i]}</span>
          </div>
        );
      })}
    </div>
  );
}

const skuRows = [
  { sku: "WMNS-DEN-32", name: "Slim Denim · 32", stock: 142, reorder: 480, days: 6, status: "critical" },
  { sku: "ACC-CAP-BLK", name: "Wool Cap · Black", stock: 1240, reorder: 0, days: 38, status: "ok" },
  { sku: "MENS-TEE-M", name: "Heavyweight Tee · M", stock: 320, reorder: 200, days: 11, status: "warn" },
  { sku: "HOME-MUG-12", name: "Ceramic Mug 12oz", stock: 84, reorder: 600, days: 4, status: "critical" },
  { sku: "FW-RUN-09", name: "Trail Runner · 9", stock: 612, reorder: 150, days: 18, status: "ok" },
];

const recs = [
  { agent: "Replenishment", text: "Place PO #4421 for WMNS-DEN-32 — 480 units. Avoids stockout in 6 days.", impact: "+$18.4k revenue saved" },
  { agent: "Allocation", text: "Move 220 units of FW-RUN-09 from NJ-01 to LA-03. Demand 2.3× higher this week.", impact: "−4 days cover gap" },
  { agent: "Forecast", text: "Lift baseline for HOME-MUG-12 by 22% — gift-set bundles trending in last 7d.", impact: "MAPE −3.1%" },
];

export function DashboardPreview({ compact = false }: { compact?: boolean }) {
  return (
    <div className="relative">
      <div className="absolute -inset-x-10 -top-10 h-64 glow-accent pointer-events-none" aria-hidden />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative rounded-3xl bg-surface hairline shadow-[var(--shadow-lifted)] overflow-hidden"
      >
        {/* Window chrome */}
        <div className="flex items-center justify-between px-4 h-10 border-b border-[var(--color-border)] bg-[var(--color-background)]/60">
          <div className="flex items-center gap-1.5">
            <span className="size-2.5 rounded-full bg-[#f87171]/70" />
            <span className="size-2.5 rounded-full bg-[#fbbf24]/70" />
            <span className="size-2.5 rounded-full bg-[#34d399]/70" />
          </div>
          <div className="flex items-center gap-1.5 text-[11px] text-[var(--color-muted)]">
            <span className="size-1.5 rounded-full bg-emerald-500" />
            app.relo.ai/operations
          </div>
          <div className="w-12" />
        </div>

        <div className="grid grid-cols-12 min-h-[520px]">
          {/* Sidebar */}
          <aside className="hidden md:flex col-span-2 border-r border-[var(--color-border)] bg-[var(--color-background)]/40 flex-col p-3 gap-1">
            <div className="px-2 py-2 text-[11px] uppercase font-semibold tracking-wider text-[var(--color-muted)]">Workspace</div>
            {[
              { icon: TrendingUp, label: "Operations", active: true },
              { icon: Boxes, label: "Inventory" },
              { icon: PackageCheck, label: "Orders" },
              { icon: Truck, label: "Suppliers" },
              { icon: Store, label: "Channels" },
              { icon: Sparkles, label: "AI Agents" },
            ].map((it, i) => (
              <button
                key={i}
                className={cn(
                  "flex items-center gap-2.5 px-2.5 py-2 rounded-lg text-[13px]",
                  it.active
                    ? "bg-white text-foreground hairline"
                    : "text-[var(--color-muted)] hover:text-foreground hover:bg-white/60",
                )}
              >
                <it.icon className="size-3.5" />
                {it.label}
              </button>
            ))}

            <div className="mt-auto rounded-xl bg-white hairline p-3">
              <div className="flex items-center gap-2 text-[11px] text-[var(--color-muted)]">
                <span className="size-1.5 rounded-full bg-[var(--color-accent)]" />
                Live sync
              </div>
              <div className="mt-1 text-[12px] font-medium text-foreground">7 sources</div>
              <div className="text-[10px] text-[var(--color-muted)]">Updated 12s ago</div>
            </div>
          </aside>

          {/* Main */}
          <div className="col-span-12 md:col-span-10 p-5 md:p-6">
            {/* Toolbar */}
            <div className="flex items-center justify-between mb-5">
              <div>
                <div className="flex items-center gap-2 text-[11px] text-[var(--color-muted)]">
                  <span>Operations</span>
                  <ChevronRight className="size-3" />
                  <span className="text-foreground">Today</span>
                </div>
                <h3 className="mt-1 font-display text-xl md:text-[22px] font-semibold tracking-tight">
                  Operations · global view
                </h3>
              </div>
              <div className="hidden sm:flex items-center gap-2">
                <div className="flex items-center gap-2 h-9 px-3 rounded-full bg-white hairline text-[12px] text-[var(--color-muted)]">
                  <Search className="size-3.5" />
                  Search SKU, supplier…
                </div>
                <button className="size-9 grid place-items-center rounded-full bg-white hairline text-[var(--color-muted)]">
                  <Filter className="size-3.5" />
                </button>
              </div>
            </div>

            {/* KPI row */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-5">
              {[
                { label: "Forecast revenue · 30d", value: "$4.82M", delta: "+8.4%", up: true, data: [12, 18, 14, 22, 19, 24, 28, 32, 30, 36, 41] },
                { label: "Sell-through", value: "62.3%", delta: "+2.1pp", up: true, data: [40, 42, 41, 44, 46, 48, 50, 52, 55, 58, 62] },
                { label: "Stockout risk SKUs", value: "27", delta: "−6", up: false, data: [40, 38, 35, 33, 36, 34, 31, 30, 29, 28, 27] },
                { label: "Avg lead time", value: "11.4d", delta: "−1.2d", up: false, data: [16, 15, 15, 14, 14, 13, 13, 12, 12, 12, 11] },
              ].map((k, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  className="rounded-xl bg-white hairline p-3.5"
                >
                  <div className="text-[11px] text-[var(--color-muted)]">{k.label}</div>
                  <div className="mt-1 flex items-baseline justify-between">
                    <div className="font-display text-[20px] font-semibold tracking-tight text-foreground">{k.value}</div>
                    <span className={cn("inline-flex items-center gap-0.5 text-[11px] font-medium", k.up ? "text-emerald-600" : "text-emerald-600")}>
                      {k.up ? <ArrowUpRight className="size-3" /> : <ArrowDownRight className="size-3" />}
                      {k.delta}
                    </span>
                  </div>
                  <Sparkline data={k.data} />
                </motion.div>
              ))}
            </div>

            {!compact && (
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-3">
                {/* Reorder alerts */}
                <div className="lg:col-span-2 rounded-xl bg-white hairline p-4">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <AlertTriangle className="size-4 text-amber-500" />
                      <div className="text-sm font-semibold text-foreground">Reorder watchlist</div>
                    </div>
                    <span className="text-[11px] text-[var(--color-muted)]">5 of 27 SKUs</span>
                  </div>
                  <div className="grid grid-cols-12 gap-2 text-[10px] uppercase tracking-wider text-[var(--color-muted)] px-2">
                    <div className="col-span-5">SKU</div>
                    <div className="col-span-2 text-right">On hand</div>
                    <div className="col-span-2 text-right">Reorder</div>
                    <div className="col-span-2 text-right">Cover</div>
                    <div className="col-span-1 text-right">Status</div>
                  </div>
                  <div className="mt-1 divide-y divide-[var(--color-border)]">
                    {skuRows.map((r) => (
                      <div key={r.sku} className="grid grid-cols-12 gap-2 px-2 py-2.5 text-[12px] items-center hover:bg-black/[0.02] rounded-md">
                        <div className="col-span-5 min-w-0">
                          <div className="truncate font-medium text-foreground">{r.name}</div>
                          <div className="truncate text-[10.5px] text-[var(--color-muted)] font-mono">{r.sku}</div>
                        </div>
                        <div className="col-span-2 text-right tabular-nums text-foreground">{r.stock.toLocaleString()}</div>
                        <div className="col-span-2 text-right tabular-nums text-foreground">{r.reorder.toLocaleString()}</div>
                        <div className="col-span-2 text-right tabular-nums text-foreground">{r.days}d</div>
                        <div className="col-span-1 flex justify-end">
                          <span
                            className={cn(
                              "size-2 rounded-full",
                              r.status === "critical" && "bg-red-500",
                              r.status === "warn" && "bg-amber-500",
                              r.status === "ok" && "bg-emerald-500",
                            )}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Warehouse bars */}
                <div className="rounded-xl bg-white hairline p-4">
                  <div className="flex items-center justify-between mb-3">
                    <div className="text-sm font-semibold text-foreground">Warehouse load</div>
                    <span className="text-[11px] text-[var(--color-muted)]">This week</span>
                  </div>
                  <BarChart values={[42, 58, 71, 64, 88, 76, 92]} labels={["M", "T", "W", "T", "F", "S", "S"]} />
                  <div className="mt-3 grid grid-cols-3 gap-2">
                    {[
                      { l: "NJ-01", v: "92%" },
                      { l: "LA-03", v: "76%" },
                      { l: "TX-02", v: "58%" },
                    ].map((x) => (
                      <div key={x.l} className="rounded-lg bg-[var(--color-background)]/70 hairline p-2">
                        <div className="text-[10px] text-[var(--color-muted)]">{x.l}</div>
                        <div className="text-[13px] font-semibold text-foreground tabular-nums">{x.v}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {!compact && (
              <div className="mt-3 rounded-xl bg-white hairline overflow-hidden">
                <div className="flex items-center justify-between px-4 py-3 border-b border-[var(--color-border)]">
                  <div className="flex items-center gap-2">
                    <Sparkles className="size-4 text-[var(--color-accent)]" />
                    <div className="text-sm font-semibold text-foreground">AI recommendations</div>
                  </div>
                  <span className="text-[11px] text-[var(--color-muted)]">Awaiting approval · 3</span>
                </div>
                <div className="divide-y divide-[var(--color-border)]">
                  {recs.map((r, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -8 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.1 + i * 0.07 }}
                      className="flex items-start gap-3 px-4 py-3"
                    >
                      <div className="mt-0.5 inline-flex items-center gap-1.5 rounded-full bg-[var(--color-accent-soft)] px-2 py-0.5 text-[10.5px] font-medium text-[var(--color-accent)]">
                        {r.agent}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="text-[13px] text-foreground">{r.text}</div>
                        <div className="text-[11px] text-[var(--color-muted)] mt-0.5">{r.impact}</div>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <button className="text-[11.5px] px-2.5 py-1 rounded-md text-[var(--color-muted)] hover:text-foreground">Dismiss</button>
                        <button className="text-[11.5px] px-2.5 py-1 rounded-md bg-foreground text-white hover:opacity-90">Approve</button>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </motion.div>

      {/* Floating peripheral cards */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="hidden lg:flex absolute -left-8 top-24 rounded-2xl bg-white hairline shadow-[var(--shadow-elevated)] p-3 w-56 items-center gap-3 animate-float"
      >
        <div className="size-8 grid place-items-center rounded-lg bg-emerald-50 text-emerald-600">
          <PackageCheck className="size-4" />
        </div>
        <div>
          <div className="text-[12px] font-semibold text-foreground">PO #4421 approved</div>
          <div className="text-[11px] text-[var(--color-muted)]">480 units · Supplier Hua-Tex</div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="hidden lg:flex absolute -right-6 bottom-20 rounded-2xl bg-white hairline shadow-[var(--shadow-elevated)] p-3 w-60 flex-col gap-1 animate-float"
        style={{ animationDelay: "1.2s" }}
      >
        <div className="flex items-center justify-between">
          <div className="text-[11px] text-[var(--color-muted)]">Demand · WMNS-DEN-32</div>
          <span className="text-[10.5px] text-emerald-600 font-medium">+24%</span>
        </div>
        <Sparkline data={[8, 10, 9, 12, 14, 13, 17, 19, 22, 24, 28, 31]} color="#10b981" />
      </motion.div>
    </div>
  );
}
