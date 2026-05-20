import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-[var(--color-accent-deep)] text-white/90">
      <div className="container-tight py-14 md:py-20">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-5 space-y-5">
            <Link href="/" className="inline-flex items-center gap-2.5">
              <span className="grid place-items-center size-9 rounded-[10px] bg-white text-[var(--color-accent-deep)]">
                <svg
                  viewBox="0 0 24 24"
                  className="size-4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M3 12a9 9 0 1 0 3-6.7" />
                  <path d="M3 4v5h5" />
                </svg>
              </span>
              <span className="font-display text-xl font-semibold tracking-tight text-white">
                Replenish
              </span>
            </Link>
            <p className="text-sm leading-relaxed text-white/70 max-w-sm">
              AI Category Manager for Shopify stores doing $500K–$10M. Lives in WhatsApp or Slack.
              Approves with you, never without you.
            </p>
            <div className="flex flex-wrap gap-2 text-[11px] uppercase tracking-wider text-white/60">
              <span className="rounded-full border border-white/15 px-2.5 py-1">SOC 2 in progress</span>
              <span className="rounded-full border border-white/15 px-2.5 py-1">GDPR</span>
              <span className="rounded-full border border-white/15 px-2.5 py-1">Shopify Plus</span>
            </div>
          </div>

          <div className="md:col-span-3 space-y-3">
            <div className="text-[11px] uppercase tracking-wider text-white/50">Product</div>
            <ul className="space-y-2 text-sm">
              <li><Link href="#how" className="hover:text-white">How it works</Link></li>
              <li><Link href="#timeline" className="hover:text-white">5-day timeline</Link></li>
              <li><Link href="#testimonials" className="hover:text-white">Testimonials</Link></li>
              <li><Link href="#faq" className="hover:text-white">FAQ</Link></li>
            </ul>
          </div>

          <div className="md:col-span-2 space-y-3">
            <div className="text-[11px] uppercase tracking-wider text-white/50">Company</div>
            <ul className="space-y-2 text-sm">
              <li><Link href="#about" className="hover:text-white">About</Link></li>
              <li><Link href="#book" className="hover:text-white">Book demo</Link></li>
              <li><a href="mailto:hello@replenish.app" className="hover:text-white">Contact</a></li>
            </ul>
          </div>

          <div className="md:col-span-2 space-y-3">
            <div className="text-[11px] uppercase tracking-wider text-white/50">Legal</div>
            <ul className="space-y-2 text-sm">
              <li><Link href="/privacy" className="hover:text-white">Privacy Policy</Link></li>
              <li><Link href="/privacy#terms" className="hover:text-white">Terms</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 text-xs text-white/55">
          <span>© {new Date().getFullYear()} Replenish, Inc.</span>
          <span className="inline-flex items-center gap-2">
            <span className="size-1.5 rounded-full bg-[var(--color-accent-bright)] animate-pulse-soft" />
            Live for 247+ Shopify stores
          </span>
        </div>
      </div>
    </footer>
  );
}
