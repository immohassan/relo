import Link from "next/link";
import { ArrowLeft, ArrowRight, Search } from "lucide-react";
import { Logo } from "@/components/brand/logo";
import { Button } from "@/components/ui/button";

export const metadata = { title: "Page not found" };

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="border-b border-[var(--color-border)] bg-surface">
        <div className="container-tight h-16 flex items-center justify-between">
          <Logo />
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-sm text-[var(--color-muted)] hover:text-foreground"
          >
            <ArrowLeft className="size-3.5" /> Home
          </Link>
        </div>
      </header>
      <main className="flex-1 grid place-items-center px-6 py-16">
        <div className="max-w-xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-white hairline px-3 py-1 text-xs">
            <span className="size-1.5 rounded-full bg-amber-500" />
            <span className="text-[var(--color-muted)]">404 · Page not found</span>
          </div>
          <h1 className="mt-6 font-display text-5xl md:text-7xl font-semibold tracking-[-0.025em]">
            That SKU isn't on the shelf.
          </h1>
          <p className="mt-5 text-base text-[var(--color-muted)] max-w-md mx-auto">
            The page you're looking for has moved, been retired, or — like a lot
            of dead stock — was never really there.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
            <Button asChild variant="primary">
              <Link href="/">
                Back to home
                <ArrowRight />
              </Link>
            </Button>
            <Button asChild variant="secondary">
              <Link href="/#waitlist">
                <Search className="size-4" />
                Get early access
              </Link>
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
}
