"use client";

import * as React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function MobileStickyCTA() {
  const [show, setShow] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      const bookEl = document.getElementById("book");
      const bookTop = bookEl ? bookEl.getBoundingClientRect().top + window.scrollY : Infinity;
      const inBook = y + window.innerHeight > bookTop + 100;
      setShow(y > 520 && !inBook);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={
        "lg:hidden fixed left-3 right-3 bottom-3 z-40 transition-all duration-300 " +
        (show ? "translate-y-0 opacity-100" : "translate-y-24 opacity-0 pointer-events-none")
      }
      aria-hidden={!show}
    >
      <Link
        href="#book"
        className="flex items-center justify-between gap-3 rounded-full bg-[var(--color-accent)] text-white pl-5 pr-2 py-2 shadow-[0_18px_40px_-12px_rgba(13,79,74,0.45)] active:scale-[0.98] transition"
      >
        <span className="flex flex-col leading-tight">
          <span className="text-[10px] uppercase tracking-wider text-white/70">
            Free demo · 20 min
          </span>
          <span className="font-display text-[15px] font-semibold tracking-tight">
            Book my AI Category Manager
          </span>
        </span>
        <span className="grid place-items-center size-11 rounded-full bg-white text-[var(--color-accent)]">
          <ArrowRight className="size-4" />
        </span>
      </Link>
    </div>
  );
}
