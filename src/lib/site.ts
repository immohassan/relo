export const site = {
  name: "Replenish",
  description:
    "Your AI Category Manager for Shopify. Lives in WhatsApp or Slack. Watches your inventory 24/7. Drafts POs, models markdowns, never spends without your approval.",
  url: "https://replenish.app",
  cta: { label: "Book free demo", href: "#book" },
  nav: [
    { label: "How it works", href: "#how" },
    { label: "5-day timeline", href: "#timeline" },
    { label: "About", href: "#about" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "FAQ", href: "#faq" },
  ],
  founder: "Marcus Hale",
  stats: {
    stores: "247+",
    cap: 500,
    gmvRange: "$500K–$10M",
  },
};

export type SiteConfig = typeof site;
