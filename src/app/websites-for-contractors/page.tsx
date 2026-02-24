import type { Metadata } from "next";
import Link from "next/link";
import Card from "@/components/Card";

export const metadata: Metadata = {
  title: "Websites for Contractors | SitePulse (Orlando, FL)",
  description:
    "High-converting contractor websites built to generate calls and quote requests. Fast, mobile-friendly, and SEO-ready for Orlando & Central Florida.",
  alternates: { canonical: "https://www.sitepulse.llc/websites-for-contractors" },
  openGraph: {
    title: "Websites for Contractors | SitePulse",
    description:
      "Contractor websites built to generate calls and quote requests. Orlando & Central Florida.",
    url: "https://www.sitepulse.llc/websites-for-contractors",
    siteName: "SitePulse",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Websites for Contractors" }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Websites for Contractors | SitePulse",
    description: "Contractor websites built to generate calls and quote requests. Orlando & Central Florida.",
    images: ["/og-image.png"],
  },
};

function Section({ children }: { children: React.ReactNode }) {
  return <section className="relative mx-auto max-w-6xl px-4 py-12">{children}</section>;
}

export default function ContractorWebsitesPage() {
  const faqs = [
    {
      q: "What makes a contractor website convert?",
      a: "Clear services, a strong quote/call flow, trust signals (photos, reviews, licensing), and fast mobile performance.",
    },
    {
      q: "Can you help me show up on Google?",
      a: "Yes—your site is built with SEO-ready structure (titles, headings, service areas, internal links, and fast load speed).",
    },
    {
      q: "What do you need from me?",
      a: "Your business name, services, service areas, contact info, and any photos (phone pics are fine).",
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
            Websites for <span className="text-[color:var(--accent)] glow">Contractors</span> That Get Calls
          </h1>

          <p className="mx-auto mt-5 max-w-3xl text-sm md:text-base text-white/60">
            If you’re a contractor, your website should do one job: turn visitors into quote requests.
            SitePulse builds clean, fast websites with clear CTAs, trust sections, and SEO structure—so you win more jobs.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href={`/form?plan=${encodeURIComponent("Free Audit")}`}
              className="w-full sm:w-auto rounded-full bg-[color:var(--accent)] px-8 py-3 font-semibold text-black hover:brightness-110 transition"
            >
              Get a Free Website Audit →
            </Link>

            <a
              href="sms:4072528476?&body=Hey%20Colby%2C%20I%27m%20a%20contractor%20and%20I%20need%20a%20website%20that%20gets%20more%20quote%20requests.%20Can%20you%20help%3F"
              className="w-full sm:w-auto rounded-full border border-white/15 bg-white/[0.03] px-8 py-3 font-semibold text-white/85 hover:bg-white/[0.06] transition"
            >
              Text Now
            </a>
          </div>

          <div className="mx-auto mt-10 max-w-3xl rounded-3xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur">
            <p className="text-white/70">
              Built for: roofing • HVAC • plumbing • electricians • landscaping • flooring • painting • pressure washing • junk removal
            </p>
          </div>

          {/* Related pages (internal linking boost for indexing) */}
          <div className="mx-auto mt-6 max-w-3xl rounded-3xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur">
            <div className="text-sm font-semibold text-white/80">Related pages</div>
            <p className="mt-2 text-sm text-white/60">Explore service areas and niche examples.</p>

            <div className="mt-4 flex flex-wrap justify-center gap-2">
              <Link href="/orlando-web-design" className="rounded-full border border-white/12 bg-white/[0.03] px-4 py-2 text-xs font-semibold text-white/80 hover:bg-white/[0.06] hover:text-white transition">
                Orlando Web Design →
              </Link>
              <Link href="/apopka-web-design" className="rounded-full border border-white/12 bg-white/[0.03] px-4 py-2 text-xs font-semibold text-white/80 hover:bg-white/[0.06] hover:text-white transition">
                Apopka Web Design →
              </Link>
              <Link href="/florida-web-design" className="rounded-full border border-white/12 bg-white/[0.03] px-4 py-2 text-xs font-semibold text-white/80 hover:bg-white/[0.06] hover:text-white transition">
                Florida Web Design →
              </Link>
              <Link href="/seo-orlando" className="rounded-full border border-white/12 bg-white/[0.03] px-4 py-2 text-xs font-semibold text-white/80 hover:bg-white/[0.06] hover:text-white transition">
                SEO Orlando →
              </Link>
              <Link href="/websites-for-pressure-washing" className="rounded-full border border-white/12 bg-white/[0.03] px-4 py-2 text-xs font-semibold text-white/80 hover:bg-white/[0.06] hover:text-white transition">
                Pressure Washing →
              </Link>
              <Link href="/websites-for-mobile-detailing" className="rounded-full border border-white/12 bg-white/[0.03] px-4 py-2 text-xs font-semibold text-white/80 hover:bg-white/[0.06] hover:text-white transition">
                Mobile Detailing →
              </Link>
            </div>
          </div>
        </div>
      </Section>

      <Section>
        <div className="grid gap-5 md:grid-cols-3">
          <Card className="p-6">
            <h2 className="text-lg font-semibold">Quote-first layout</h2>
            <p className="mt-2 text-sm text-white/60">
              Clear “Get a Quote” buttons + simple contact flow built for mobile.
            </p>
          </Card>

          <Card className="p-6">
            <h2 className="text-lg font-semibold">Trust signals</h2>
            <p className="mt-2 text-sm text-white/60">
              Sections for photos, service areas, reviews, and credibility to help customers choose you.
            </p>
          </Card>

          <Card className="p-6">
            <h2 className="text-lg font-semibold">Local SEO structure</h2>
            <p className="mt-2 text-sm text-white/60">
              Clean page structure that helps you rank for services + city searches.
            </p>
          </Card>
        </div>
      </Section>

      <Section>
        <Card className="p-6">
          <h2 className="text-2xl font-semibold">What you get</h2>
          <ul className="mt-4 grid gap-2 text-sm text-white/70">
            <li className="flex gap-2"><span className="text-[color:var(--accent)]">✓</span> Mobile-friendly design that looks professional</li>
            <li className="flex gap-2"><span className="text-[color:var(--accent)]">✓</span> Clear services + service area targeting</li>
            <li className="flex gap-2"><span className="text-[color:var(--accent)]">✓</span> Fast load speed + SEO foundations</li>
            <li className="flex gap-2"><span className="text-[color:var(--accent)]">✓</span> Contact buttons + form flow for quote requests</li>
          </ul>

          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <Link
              href={`/form?plan=${encodeURIComponent("Free Audit")}`}
              className="inline-flex items-center justify-center rounded-full bg-[color:var(--accent)] px-8 py-3 font-semibold text-black hover:brightness-110 transition"
            >
              Start with a Free Audit →
            </Link>
            <a
              href="/#pricing"
              className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/[0.03] px-8 py-3 font-semibold text-white/85 hover:bg-white/[0.06] transition"
            >
              View Pricing
            </a>
          </div>
        </Card>
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
      </Section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
    </main>
  );
}