import Link from "next/link";
import { ArrowLeft, Mail, ShieldCheck } from "lucide-react";

export const metadata = {
  title: "Privacy Policy",
  description:
    "How Replenish collects, uses, and protects your data — written in plain English.",
};

const sections = [
  {
    h: "1. What we collect",
    body: (
      <>
        <p className="font-medium text-foreground">From your Shopify store (via the Shopify App Bridge):</p>
        <ul>
          <li>Sales history (order-level data, no customer PII)</li>
          <li>Inventory levels by variant and location</li>
          <li>Supplier records and Purchase Order history</li>
          <li>Product catalog metadata (titles, variants, prices, tags)</li>
          <li>Store settings relevant to inventory (locations, fulfillment, lead times)</li>
        </ul>
        <p className="font-medium text-foreground mt-5">We do NOT access:</p>
        <p>
          Customer names, email addresses, shipping addresses, payment information, or any other personally identifiable customer data. We don&apos;t need it for the agent to work, so we don&apos;t ask for it.
        </p>
        <p className="font-medium text-foreground mt-5">From you directly:</p>
        <ul>
          <li>Name and work email (when booking a demo or signing up)</li>
          <li>Shopify store URL</li>
          <li>Approximate annual GMV (for demo qualification)</li>
          <li>Phone number (only if you choose WhatsApp as your channel)</li>
          <li>Slack workspace ID (only if you choose Slack as your channel)</li>
        </ul>
        <p className="font-medium text-foreground mt-5">Automatically collected:</p>
        <ul>
          <li>Browser type, operating system, IP address</li>
          <li>Pages visited and time spent on Site</li>
          <li>Standard cookie data for session management and analytics</li>
        </ul>
      </>
    ),
  },
  {
    h: "2. How we use your information",
    body: (
      <>
        <p>We use your data for these specific purposes — and only these:</p>
        <ul>
          <li>
            <strong>To run the agent.</strong> ML models forecast stockouts, detect overstock, and learn supplier lead times. The conversational LLM is grounded only on inventory metadata — never customer PII.
          </li>
          <li>
            <strong>To deliver messages to you.</strong> Via WhatsApp Business API or Slack, depending on your chosen channel.
          </li>
          <li>
            <strong>To improve the product.</strong> Aggregate, de-identified usage data helps us prioritize what to build next.
          </li>
          <li>
            <strong>To send transactional emails.</strong> Booking confirmations, trial-status updates, billing receipts, agent activity summaries.
          </li>
          <li>
            <strong>To send marketing emails</strong> (only if you opt in). One-click unsubscribe in every email.
          </li>
        </ul>
        <p className="font-medium text-foreground">We do not sell, trade, or rent your data to third parties. Period.</p>
      </>
    ),
  },
  {
    h: "3. Where your data is stored",
    body: (
      <p>
        Your data is stored on secure cloud infrastructure (AWS, region: US-East / EU) with encryption at rest and in transit (TLS 1.3). SOC 2 Type II certification is in progress.
      </p>
    ),
  },
  {
    h: "4. Third parties we share with",
    body: (
      <>
        <p>To deliver the service, certain data is processed by:</p>
        <ul>
          <li><strong>Shopify</strong> — read/write access via the App Bridge with the minimum scopes required.</li>
          <li><strong>WhatsApp Business API (Meta)</strong> — to deliver agent messages, if you choose WhatsApp.</li>
          <li><strong>Slack (Salesforce)</strong> — to deliver agent messages, if you choose Slack.</li>
          <li><strong>AI model providers</strong> — for the conversational layer, grounded only on inventory metadata. No customer PII is ever in any LLM prompt.</li>
          <li><strong>Payment processor</strong> — Stripe, for any paid subscriptions.</li>
        </ul>
        <p>
          Each of these has its own privacy policy and data handling commitments. We choose them carefully. We do not share your data with advertisers, data brokers, or marketing aggregators.
        </p>
      </>
    ),
  },
  {
    h: "5. Cookies",
    body: (
      <p>
        Our Site uses cookies for session management, privacy-respecting analytics (no cross-site tracking pixels), and remembering your preferences. You can disable cookies in your browser; some parts of the Site may not function fully if you do.
      </p>
    ),
  },
  {
    h: "6. How we protect your information",
    body: (
      <p>
        We implement industry-standard security measures including encryption, access controls, regular security audits, and employee training. No system is 100% secure, but we treat your data the way we&apos;d want ours treated. Security incidents are disclosed within 72 hours per GDPR standards.
      </p>
    ),
  },
  {
    h: "7. Your rights (GDPR / CCPA)",
    body: (
      <>
        <p>You have the right to:</p>
        <ul>
          <li>Access the data we have on you</li>
          <li>Correct inaccurate data</li>
          <li>Delete your data (subject to legal retention requirements)</li>
          <li>Port your data to another service</li>
          <li>Withdraw consent at any time</li>
          <li>Opt out of marketing communications</li>
          <li>File a complaint with your data protection authority</li>
        </ul>
        <p>
          To exercise any of these rights, email <a className="underline" href="mailto:privacy@replenish.app">privacy@replenish.app</a>. We respond within 7 business days.
        </p>
      </>
    ),
  },
  {
    h: "8. Children's privacy",
    body: (
      <p>
        Replenish is a B2B service for Shopify store owners. It is not directed at children under 13. We do not knowingly collect data from anyone under 13.
      </p>
    ),
  },
  {
    h: "9. Changes to this policy",
    body: (
      <p>
        We may update this policy as the product evolves or as regulations change. We update the &quot;Last updated&quot; date at the top and — for material changes — email registered users. Your continued use of the Service after changes means acceptance.
      </p>
    ),
  },
  {
    h: "10. Contact us",
    body: (
      <>
        <p>
          Questions about privacy? Email <a className="underline" href="mailto:privacy@replenish.app">privacy@replenish.app</a>.
        </p>
        <p>
          General support: <a className="underline" href="mailto:support@replenish.app">support@replenish.app</a>.
        </p>
      </>
    ),
  },
  {
    h: "11. Your acceptance",
    body: (
      <p>
        By using our Site and Service, you signify acceptance of this Privacy Policy. If you do not agree, please do not use the Service.
      </p>
    ),
  },
];

export default function PrivacyPage() {
  return (
    <div className="relative overflow-hidden">
      <div aria-hidden className="absolute inset-x-0 top-0 h-[420px] glow-accent-soft -z-10" />
      <div className="container-tight pt-12 md:pt-20 pb-20 md:pb-28">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-[var(--color-muted)] hover:text-foreground transition"
        >
          <ArrowLeft className="size-4" />
          Back to home
        </Link>

        <div className="mt-8 grid lg:grid-cols-12 gap-10 lg:gap-16">
          <aside className="lg:col-span-4 lg:sticky lg:top-28 lg:self-start space-y-6">
            <span className="inline-flex items-center gap-2 rounded-full bg-white hairline px-3 py-1.5 text-xs font-medium text-[var(--color-accent)]">
              <ShieldCheck className="size-3.5" />
              Plain English
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold tracking-[-0.025em] leading-[1.04] text-balance">
              Privacy Policy
            </h1>
            <p className="text-[var(--color-muted)] leading-relaxed">
              How Replenish collects, uses, and protects your data — written in plain English.
            </p>
            <div className="text-xs text-[var(--color-muted)] inline-flex items-center gap-2">
              <span className="size-1.5 rounded-full bg-[var(--color-accent-bright)]" />
              Last updated: January 14, 2026
            </div>

            <div className="rounded-2xl bg-white hairline p-5 text-sm">
              <div className="font-display text-base font-semibold tracking-tight">
                Have a privacy question?
              </div>
              <p className="mt-1.5 text-[var(--color-muted)] leading-relaxed">
                Email us directly. We answer within 7 business days.
              </p>
              <a
                href="mailto:privacy@replenish.app"
                className="mt-3 inline-flex items-center gap-2 text-[var(--color-accent)] font-medium"
              >
                <Mail className="size-4" />
                privacy@replenish.app
              </a>
            </div>
          </aside>

          <article className="lg:col-span-8">
            <div className="rounded-3xl bg-white hairline p-6 md:p-10 prose prose-sm md:prose-base max-w-none">
              <p className="text-[var(--color-muted)] leading-relaxed">
                This Privacy Policy describes how Replenish (&quot;we,&quot; &quot;us,&quot; &quot;our&quot;) collects, uses, maintains, and discloses information collected from users of our website (replenish.app) and our Shopify app. This policy applies to the Site, the Replenish Shopify app, and all integrations we offer including WhatsApp Business API and Slack.
              </p>

              <div className="mt-10 space-y-12">
                {sections.map((s) => (
                  <section key={s.h}>
                    <h2 className="font-display text-xl md:text-2xl font-semibold tracking-tight text-foreground">
                      {s.h}
                    </h2>
                    <div className="mt-4 space-y-4 text-[15px] text-[var(--color-muted)] leading-relaxed [&_ul]:space-y-1.5 [&_ul]:list-disc [&_ul]:pl-5 [&_strong]:text-foreground">
                      {s.body}
                    </div>
                  </section>
                ))}
              </div>

              <div id="terms" className="mt-16 pt-10 border-t border-[var(--color-border)]">
                <h2 className="font-display text-xl md:text-2xl font-semibold tracking-tight text-foreground">
                  Terms of Service
                </h2>
                <p className="mt-4 text-[15px] text-[var(--color-muted)] leading-relaxed">
                  Full Terms of Service are available on request during onboarding and prior to subscription. The agent never executes irreversible actions (POs, markdowns, transfers) without your explicit chat confirmation. Subscriptions are month-to-month with two-tap cancellation inside the app.
                </p>
              </div>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
}
