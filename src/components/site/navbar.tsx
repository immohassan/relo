"use client";

import * as React from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight } from "lucide-react";
import { Logo } from "@/components/brand/logo";
import { Button } from "@/components/ui/button";
import { site } from "@/lib/site";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = React.useState(false);
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  React.useEffect(() => {
    if (open) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <div className="sticky top-0 z-50">
      <div className="bg-[var(--color-accent-deep)] text-white text-[11px] sm:text-xs">
        <div className="container-tight py-2 flex items-center justify-center gap-2 text-center">
          <span className="inline-block size-1.5 rounded-full bg-[var(--color-accent-bright)] animate-pulse-soft" />
          <span className="font-medium tracking-tight">
            FREE 5-Day Inventory Mastery email series — starts the minute you sign up.
          </span>
        </div>
      </div>

      <div
        className={cn(
          "transition-all duration-300",
          scrolled
            ? "backdrop-blur-md bg-[color-mix(in_oklab,var(--color-background)_88%,transparent)] border-b border-[var(--color-border)]"
            : "bg-transparent",
        )}
      >
        <div className="container-tight flex h-16 items-center justify-between">
          <Logo />

          <nav className="hidden lg:flex items-center gap-1">
            {site.nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="px-3 py-2 text-sm rounded-full transition-colors text-[var(--color-muted)] hover:text-foreground"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-2">
            <Button asChild variant="accent" size="sm">
              <Link href={site.cta.href}>
                {site.cta.label}
                <ArrowRight />
              </Link>
            </Button>
          </div>

          <button
            type="button"
            className="lg:hidden inline-flex items-center justify-center size-10 rounded-full bg-white hairline"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            {open ? <X className="size-4" /> : <Menu className="size-4" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
            className="lg:hidden overflow-hidden bg-surface border-b border-[var(--color-border)]"
          >
            <div className="container-tight py-4 flex flex-col gap-1">
              {site.nav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="px-3 py-3 text-[15px] text-foreground rounded-xl hover:bg-black/[0.04]"
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href="/privacy"
                onClick={() => setOpen(false)}
                className="px-3 py-3 text-[15px] text-[var(--color-muted)] rounded-xl hover:bg-black/[0.04]"
              >
                Privacy
              </Link>
              <Button asChild variant="accent" className="mt-3 h-12">
                <Link href={site.cta.href} onClick={() => setOpen(false)}>
                  {site.cta.label}
                  <ArrowRight />
                </Link>
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
