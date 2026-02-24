import type { Metadata } from "next";
import Link from "next/link";
import Card from "@/components/Card";

export const metadata: Metadata = {
  title: "Sanford Web Design | SitePulse by Colby",
  description:
    "Web design + local SEO for Sanford, FL. Modern websites for local businesses built to generate calls and leads.",
  alternates: { canonical: "/sanford-web-design" },
  openGraph: {
    title: "Sanford Web Design | SitePulse by Colby",
    description: "Web design + local SEO for Sanford businesses.",
    url: "/sanford-web-design",
    siteName: "SitePulse",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Sanford Web Design" }],
    locale: "en_US",
    type: "website",
  },
};

function Section({ children }: { children: React.ReactNode }) {
  return <section className="relative mx-auto max-w-6xl px-4 py-12">{children}</section>;
}

export default function SanfordWebDesignPage() {
  const faqs = [
    { q: "What makes a site convert better?", a: "Clear offer + simple layout + strong CTAs + trust signals + fast contact options." },
    { q: "Do you help with Google visibility?", a: "Yes—site structure + local pages + GBP guidance on the Pro plan." },
    { q: "Do you work with my industry?", a: "If customers search for it on Google, the site can be built for it." },
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <main className="min-h-screen">
      <Section>
        <div className="text-center">
          <h1 className="mx-auto max-w-4xl text-4xl md:text-6xl font-semibold tracking-tight leading-[1.05]">
            Sanford <span className="text-[color:var(--accent)] glow">Web Design</span> for Local Service Businesses
          </h1>

          <p className="mx-auto mt-5 max-w-3xl text-sm md:text-base text-white/60">
            Your website should do one job: turn visitors into calls, texts, and quote requests.
            SitePulse builds clean, modern sites for Sanford businesses.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link href="/form" className="w-full sm:w-auto rounded-full bg-[color:var(--accent)] px-8 py-3 font-semibold text-black hover:brightness-110 transition">
              Get a Quote
            </Link>
            <a
              href="sms:4072528476?&body=Hey%20Colby%2C%20I%27m%20in%20Sanford%20and%20I%20need%20a%20website.%20Can%20you%20help%3F"
              className="w-full sm:w-auto rounded-full border border-white/15 bg-white/[0.03] px-8 py-3 font-semibold text-white/85 hover:bg-white/[0.06] transition"
            >
              Text Now
            </a>
          </div>

          <div className="mx-auto mt-10 max-w-3xl rounded-3xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur">
            <p className="text-white/70">Serving: Sanford • Lake Mary • Longwood • Oviedo • Winter Springs • Orlando</p>
          </div>
        </div>
      </Section>

      <Section>
        <div className="grid gap-5 md:grid-cols-3">
          <Card className="p-6"><h2 className="text-lg font-semibold">Simple & Clear</h2><p className="mt-2 text-sm text-white/60">No clutter—just what customers need to choose you.</p></Card>
          <Card className="p-6"><h2 className="text-lg font-semibold">Built for Calls</h2><p className="mt-2 text-sm text-white/60">CTAs placed where users naturally decide.</p></Card>
          <Card className="p-6"><h2 className="text-lg font-semibold">Local SEO</h2><p className="mt-2 text-sm text-white/60">Location + service context baked in.</p></Card>
        </div>
      </Section>

      <Section>
        <Card className="p-6">
          <h2 className="text-2xl font-semibold">FAQs</h2>
          <div className="mt-5 grid gap-4">
            {faqs.map((f) => (
              <details key={f.q} className="group rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition hover:border-white/20">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4">
                  <span className="font-semibold text-white/85">{f.q}</span>
                  <span className="text-[color:var(--accent)] transition group-open:rotate-45">+</span>
                </summary>
                <p className="mt-3 text-sm text-white/60">{f.a}</p>
              </details>
            ))}
          </div>
        </Card>

        <div className="mt-10 text-center">
          <Link href="/form" className="inline-flex rounded-full bg-[color:var(--accent)] px-8 py-3 font-semibold text-black hover:brightness-110 transition">
            Start Now →
          </Link>
        </div>
      </Section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
    </main>
  );
}