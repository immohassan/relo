import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://replenish.app"),
  title: {
    default: "Replenish — Your AI Category Manager for Shopify",
    template: "%s · Replenish",
  },
  description:
    "An AI Category Manager that lives in WhatsApp or Slack. Watches inventory 24/7, drafts POs, models markdowns. You approve in 2 taps.",
  keywords: [
    "AI category manager",
    "Shopify inventory AI",
    "AI markdown optimization",
    "AI PO automation",
    "WhatsApp inventory agent",
    "Slack inventory agent",
    "stockout prevention",
  ],
  openGraph: {
    type: "website",
    title: "Replenish — Your AI Category Manager for Shopify",
    description:
      "Plug-and-play in 2 minutes. Drafts POs. Models markdowns. Lives in WhatsApp or Slack.",
    siteName: "Replenish",
  },
  twitter: {
    card: "summary_large_image",
    title: "Replenish — Your AI Category Manager for Shopify",
    description:
      "Stop running buying and markdowns on Sunday nights. An AI agent that runs the function for you.",
  },
};

export const viewport: Viewport = {
  themeColor: "#f6f4ee",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${jakarta.variable}`}
    >
      <body className="antialiased min-h-screen bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
