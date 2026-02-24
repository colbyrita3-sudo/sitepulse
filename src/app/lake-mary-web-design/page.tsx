import type { Metadata } from "next";
import Link from "next/link";
import Card from "@/components/Card";

export const metadata: Metadata = {
  title: "Lake Mary Web Design | SitePulse",
  description:
    "Web design + local SEO for Lake Mary, FL. Fast, modern websites designed to generate calls and leads.",
  alternates: { canonical: "https://www.sitepulse.llc/lake-mary-web-design" },
  openGraph: {
    title: "Lake Mary Web Design | SitePulse",
    description: "Web design + local SEO for Lake Mary businesses.",
    url: "https://www.sitepulse.llc/lake-mary-web-design",
    siteName: "SitePulse",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Lake Mary Web Design" }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lake Mary Web Design | SitePulse",
    description: "Web design + local SEO for Lake Mary businesses.",
    images: ["/og-image.png"],
  },
};

function Section({ children }: { children: React.ReactNode }) {
  return <section className="relative mx-auto max-w-6xl px-4 py-12">{children}</section>;
}

export default function LakeMaryWebDesignPage() {
  const faqs = [
    { q: "Do you offer maintenance?", a: "Yes—monthly plans cover hosting and updates. Growth/Pro include ongoing SEO adjustments." },
    { q: "Can my site be expanded later?", a: "Yes—start simple, then add pages/features as your business grows." },
    { q: "Do you build for service pros?", a: "Yes—home services, contractors, and local service businesses." },
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
            Lake Mary <span className="text-[color:var(--accent)] glow">Web Design</span> Built to Get You Picked
          </h1>

          <p className="mx-auto mt-5 max-w-3xl text-sm md:text-base text-white/60">
            People compare options fast. A clean website with clear services and simple contact paths helps you win.
            SitePulse builds modern sites for Lake Mary businesses that want more leads.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href="/form"
              className="w-full sm:w-auto rounded-full bg-[color:var(--accent)] px-8 py-3 font-semibold text-black hover:brightness-110 transition"
            >
              Get a Quote
            </Link>
            <a
              href="sms:4072528476?&body=Hey%20Colby%2C%20I%27m%20in%20Lake%20Mary%20and%20I%20need%20a%20website.%20Can%20you%20help%3F"
              className="w-full sm:w-auto rounded-full border border-white/15 bg-white/[0.03] px-8 py-3 font-semibold text-white/85 hover:bg-white/[0.06] transition"
            >
              Text Now
            </a>
          </div>

          <div className="mx-auto mt-10 max-w-3xl rounded-3xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur">
            <p className="text-white/70">Serving: Lake Mary • Heathrow • Sanford • Longwood • Altamonte Springs • Orlando</p>
          </div>

          {/* Related pages (internal linking boost for indexing) */}
          <div className="mx-auto mt-6 max-w-3xl rounded-3xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur">
            <div className="text-sm font-semibold text-white/80">Related pages</div>
            <p className="mt-2 text-sm text-white/60">Explore nearby service areas and niche examples.</p>
            <div className="mt-4 flex flex-wrap justify-center gap-2">
              <Link href="/orlando-web-design" className="rounded-full border border-white/12 bg-white/[0.03] px-4 py-2 text-xs font-semibold text-white/80 hover:bg-white/[0.06] hover:text-white transition">
                Orlando Web Design →
              </Link>
              <Link href="/apopka-web-design" className="rounded-full border border-white/12 bg-white/[0.03] px-4 py-2 text-xs font-semibold text-white/80 hover:bg-white/[0.06] hover:text-white transition">
                Apopka Web Design →
              </Link>
              <Link href="/longwood-web-design" className="rounded-full border border-white/12 bg-white/[0.03] px-4 py-2 text-xs font-semibold text-white/80 hover:bg-white/[0.06] hover:text-white transition">
                Longwood Web Design →
              </Link>
              <Link href="/sanford-web-design" className="rounded-full border border-white/12 bg-white/[0.03] px-4 py-2 text-xs font-semibold text-white/80 hover:bg-white/[0.06] hover:text-white transition">
                Sanford Web Design →
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
          <Card className="p-6"><h2 className="text-lg font-semibold">Fast & Clean</h2><p className="mt-2 text-sm text-white/60">Speed-focused structure and modern layout.</p></Card>
          <Card className="p-6"><h2 className="text-lg font-semibold">Lead-Focused</h2><p className="mt-2 text-sm text-white/60">Buttons + forms that capture inquiries without friction.</p></Card>
          <Card className="p-6"><h2 className="text-lg font-semibold">Local Context</h2><p className="mt-2 text-sm text-white/60">Service-area targeting so Google knows where you serve.</p></Card>
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
            Start Now →
          </Link>
        </div>
      </Section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
    </main>
  );
}