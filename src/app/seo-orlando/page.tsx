import type { Metadata } from "next";
import Link from "next/link";
import Card from "@/components/Card";

export const metadata: Metadata = {
  title: "SEO Orlando | Local SEO + Web Design | SitePulse by Colby",
  description:
    "Local SEO in Orlando for small businesses. Learn the fastest way to get found on Google: website foundations + Google Business Profile + reviews + local signals.",
  alternates: { canonical: "/seo-orlando" },
  openGraph: {
    title: "SEO Orlando | SitePulse by Colby",
    description: "Local SEO + web design fundamentals to help Orlando businesses get found on Google.",
    url: "/seo-orlando",
    siteName: "SitePulse",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "SEO Orlando" }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SEO Orlando | SitePulse by Colby",
    description: "Local SEO + web design fundamentals to help Orlando businesses get found on Google.",
    images: ["/og-image.png"],
  },
};

function Section({ children }: { children: React.ReactNode }) {
  return <section className="relative mx-auto max-w-6xl px-4 py-12">{children}</section>;
}

export default function SEOOrlandoPage() {
  const faqs = [
    {
      q: "How long does SEO take to work?",
      a: "For local SEO, you can see improvements in weeks, but strong results usually take a few months depending on competition and consistency.",
    },
    {
      q: "What matters most for Orlando local SEO?",
      a: "Google Business Profile (GBP), reviews, accurate business info across the web, and a fast website with strong service/location content.",
    },
    {
      q: "Do I need a website if I have a Facebook page?",
      a: "A website helps you rank for more searches, builds trust, and gives you full control over leads and messaging.",
    },
    {
      q: "Can you optimize my Google Business Profile?",
      a: "Yes. On the Pro plan I include Google Business Profile optimization (categories/services/keyword help and cleanup guidance).",
    },
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
            Orlando <span className="text-[color:var(--accent)] glow">Local SEO</span> That Actually Brings Leads
          </h1>

          <p className="mx-auto mt-5 max-w-3xl text-sm md:text-base text-white/60">
            If you want to show up when people search “near me”, the fastest path is:
            <span className="text-white/80"> a strong website</span> +{" "}
            <span className="text-white/80">Google Business Profile</span> +{" "}
            <span className="text-white/80">reviews</span> + consistent local signals.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href="/form"
              className="w-full sm:w-auto rounded-full bg-[color:var(--accent)] px-8 py-3 font-semibold text-black hover:brightness-110 transition"
            >
              Get Help With SEO
            </Link>

            <Link
              href="/orlando-web-design"
              className="w-full sm:w-auto rounded-full border border-white/15 bg-white/[0.03] px-8 py-3 font-semibold text-white/85 hover:bg-white/[0.06] transition"
            >
              Orlando Web Design →
            </Link>

            <a
              href="sms:4072528476?&body=Hey%20Colby%2C%20I%20want%20help%20with%20Orlando%20SEO%20and%20getting%20more%20Google%20leads."
              className="w-full sm:w-auto rounded-full border border-white/15 bg-white/[0.03] px-8 py-3 font-semibold text-white/85 hover:bg-white/[0.06] transition"
            >
              Text Now
            </a>
          </div>
        </div>
      </Section>

      <Section>
        <div className="grid gap-5 md:grid-cols-3">
          <Card className="p-6">
            <h2 className="text-lg font-semibold">1) Website Foundation</h2>
            <p className="mt-2 text-sm text-white/60">
              Fast load speed, clear headings, service/location targeting, and strong calls-to-action.
            </p>
          </Card>
          <Card className="p-6">
            <h2 className="text-lg font-semibold">2) Google Business Profile</h2>
            <p className="mt-2 text-sm text-white/60">
              Correct categories + services + description + photos + posts. This is huge for “near me” searches.
            </p>
          </Card>
          <Card className="p-6">
            <h2 className="text-lg font-semibold">3) Reviews + Citations</h2>
            <p className="mt-2 text-sm text-white/60">
              Reviews build trust and rankings. Citations (Yelp/Apple Maps/Bing/etc.) reinforce your business info.
            </p>
          </Card>
        </div>
      </Section>

      <Section>
        <div className="grid gap-6 md:grid-cols-2">
          <Card className="p-6">
            <h2 className="text-xl font-semibold">What I handle</h2>
            <ul className="mt-4 grid gap-2 text-sm text-white/70">
              <li className="flex gap-2"><span className="text-[color:var(--accent)]">✓</span> SEO-ready site structure</li>
              <li className="flex gap-2"><span className="text-[color:var(--accent)]">✓</span> Page titles + meta descriptions</li>
              <li className="flex gap-2"><span className="text-[color:var(--accent)]">✓</span> Speed + mobile setup</li>
              <li className="flex gap-2"><span className="text-[color:var(--accent)]">✓</span> Local service area content</li>
              <li className="flex gap-2"><span className="text-[color:var(--accent)]">✓</span> Clear conversion flow</li>
            </ul>
          </Card>

          <Card className="p-6">
            <h2 className="text-xl font-semibold">What you do (simple checklist)</h2>
            <ul className="mt-4 grid gap-2 text-sm text-white/70">
              <li className="flex gap-2"><span className="text-[color:var(--accent)]">✓</span> Add 10–30 real reviews over time</li>
              <li className="flex gap-2"><span className="text-[color:var(--accent)]">✓</span> Post updates/photos weekly</li>
              <li className="flex gap-2"><span className="text-[color:var(--accent)]">✓</span> Keep business info consistent everywhere</li>
              <li className="flex gap-2"><span className="text-[color:var(--accent)]">✓</span> Ask customers to mention the service + city</li>
            </ul>
          </Card>
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
          <Link
            href="/form"
            className="inline-flex rounded-full bg-[color:var(--accent)] px-8 py-3 font-semibold text-black hover:brightness-110 transition"
          >
            Get Started →
          </Link>
        </div>
      </Section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
    </main>
  );
}