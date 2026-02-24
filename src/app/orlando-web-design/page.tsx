import type { Metadata } from "next";
import Link from "next/link";
import Card from "@/components/Card";

export const metadata: Metadata = {
  title: "Orlando Web Design | SitePulse",
  description:
    "Web design + SEO for small businesses in Orlando, FL. Premium-looking websites built to convert visitors into calls and leads. Serving Orlando and surrounding areas.",
  // ✅ Absolute canonical
  alternates: { canonical: "https://www.sitepulse.llc/orlando-web-design" },
  openGraph: {
    title: "Orlando Web Design | SitePulse",
    description:
      "Premium web design + local SEO for Orlando small businesses. Built to rank and convert.",
    // ✅ Absolute URL
    url: "https://www.sitepulse.llc/orlando-web-design",
    siteName: "SitePulse",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Orlando Web Design" }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Orlando Web Design | SitePulse",
    description: "Premium web design + local SEO for Orlando small businesses.",
    images: ["/og-image.png"],
  },
};

function Section({ children }: { children: React.ReactNode }) {
  return <section className="relative mx-auto max-w-6xl px-4 py-12">{children}</section>;
}

export default function OrlandoWebDesignPage() {
  const faqs = [
    {
      q: "How much does a website cost in Orlando?",
      a: "It depends on how many pages and what features you need. I offer simple packages so you can get launched quickly, then scale up when you’re ready.",
    },
    {
      q: "How long does it take to build my website?",
      a: "Most sites are done in 7–10 days depending on how fast you send your business info, photos, and requests.",
    },
    {
      q: "Can you help me show up on Google in Orlando?",
      a: "Yes. I set up on-page SEO fundamentals (titles, headings, structure, speed) and can guide your Google Business Profile for local visibility.",
    },
    {
      q: "Do you work with specific business types?",
      a: "Mostly local service businesses—detailing, pressure washing, junk removal, contractors, home services, and more.",
    },
  ];

  // Optional FAQ schema (helps Google understand Q&A)
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.a,
      },
    })),
  };

  return (
    <main className="min-h-screen">
      <Section>
        <div className="text-center">
          <h1 className="mx-auto max-w-4xl text-4xl md:text-6xl font-semibold tracking-tight leading-[1.05]">
            Orlando <span className="text-[color:var(--accent)] glow">Web Design</span> That Looks Premium
            <br />
            and Gets You More Leads
          </h1>

          <p className="mx-auto mt-5 max-w-3xl text-sm md:text-base text-white/60">
            If you’re a local business in Orlando, your website should do two things:
            <span className="text-white/80"> make you look legit</span> and
            <span className="text-white/80"> make it easy for customers to contact you</span>.
            SitePulse is built for that.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href="/form"
              className="w-full sm:w-auto rounded-full bg-[color:var(--accent)] px-8 py-3 font-semibold text-black hover:brightness-110 transition"
            >
              Get a Quote
            </Link>

            <Link
              href="/#pricing"
              className="w-full sm:w-auto rounded-full border border-white/15 bg-white/[0.03] px-8 py-3 font-semibold text-white/85 hover:bg-white/[0.06] transition"
            >
              See Pricing
            </Link>

            <a
              href="sms:4072528476?&body=Hey%20Colby%2C%20I%27m%20in%20Orlando%20and%20I%20need%20a%20website.%20Can%20you%20help%3F"
              className="w-full sm:w-auto rounded-full border border-white/15 bg-white/[0.03] px-8 py-3 font-semibold text-white/85 hover:bg-white/[0.06] transition"
            >
              Text Now
            </a>
          </div>

          <div className="mx-auto mt-10 max-w-3xl rounded-3xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur">
            <p className="text-white/70">
              Serving: Orlando • Winter Park • Maitland • College Park • Downtown Orlando • Dr. Phillips • Apopka • Longwood • Lake Mary • Sanford • Oviedo
            </p>
          </div>

          {/* ✅ Internal linking block (helps indexing + crawl signals) */}
          <div className="mx-auto mt-6 max-w-3xl rounded-3xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur">
            <div className="text-sm font-semibold text-white/80">Related pages</div>
            <p className="mt-2 text-sm text-white/60">
              Explore nearby service areas and niche examples to see what we build.
            </p>

            <div className="mt-4 flex flex-wrap justify-center gap-2">
              <Link
                href="/apopka-web-design"
                className="rounded-full border border-white/12 bg-white/[0.03] px-4 py-2 text-xs font-semibold text-white/80 hover:bg-white/[0.06] hover:text-white transition"
              >
                Apopka Web Design →
              </Link>
              <Link
                href="/florida-web-design"
                className="rounded-full border border-white/12 bg-white/[0.03] px-4 py-2 text-xs font-semibold text-white/80 hover:bg-white/[0.06] hover:text-white transition"
              >
                Florida Web Design →
              </Link>
              <Link
                href="/seo-orlando"
                className="rounded-full border border-white/12 bg-white/[0.03] px-4 py-2 text-xs font-semibold text-white/80 hover:bg-white/[0.06] hover:text-white transition"
              >
                SEO Orlando →
              </Link>
              <Link
                href="/websites-for-contractors"
                className="rounded-full border border-white/12 bg-white/[0.03] px-4 py-2 text-xs font-semibold text-white/80 hover:bg-white/[0.06] hover:text-white transition"
              >
                Contractor Websites →
              </Link>
              <Link
                href="/websites-for-pressure-washing"
                className="rounded-full border border-white/12 bg-white/[0.03] px-4 py-2 text-xs font-semibold text-white/80 hover:bg-white/[0.06] hover:text-white transition"
              >
                Pressure Washing →
              </Link>
              <Link
                href="/websites-for-mobile-detailing"
                className="rounded-full border border-white/12 bg-white/[0.03] px-4 py-2 text-xs font-semibold text-white/80 hover:bg-white/[0.06] hover:text-white transition"
              >
                Mobile Detailing →
              </Link>
            </div>
          </div>
        </div>
      </Section>

      <Section>
        <div className="grid gap-5 md:grid-cols-3">
          <Card className="p-6">
            <h2 className="text-lg font-semibold">Built to Convert</h2>
            <p className="mt-2 text-sm text-white/60">
              Clear calls-to-action, simple structure, and a layout that turns visitors into leads.
            </p>
          </Card>
          <Card className="p-6">
            <h2 className="text-lg font-semibold">Local SEO Foundations</h2>
            <p className="mt-2 text-sm text-white/60">
              Proper titles, headings, speed, and structure so Google understands what you do and where you serve.
            </p>
          </Card>
          <Card className="p-6">
            <h2 className="text-lg font-semibold">Premium Look</h2>
            <p className="mt-2 text-sm text-white/60">
              Dark glass + modern design that makes your business look trustworthy and high-end.
            </p>
          </Card>
        </div>
      </Section>

      <Section>
        <div className="grid gap-6 md:grid-cols-2">
          <Card className="p-6">
            <h2 className="text-xl font-semibold">What you get</h2>
            <ul className="mt-4 grid gap-2 text-sm text-white/70">
              <li className="flex gap-2"><span className="text-[color:var(--accent)]">✓</span> Mobile-friendly design</li>
              <li className="flex gap-2"><span className="text-[color:var(--accent)]">✓</span> Fast load times</li>
              <li className="flex gap-2"><span className="text-[color:var(--accent)]">✓</span> Contact form + CTA buttons</li>
              <li className="flex gap-2"><span className="text-[color:var(--accent)]">✓</span> SEO-ready structure</li>
              <li className="flex gap-2"><span className="text-[color:var(--accent)]">✓</span> A site you’re proud to send people to</li>
            </ul>
          </Card>

          <Card className="p-6">
            <h2 className="text-xl font-semibold">Perfect for</h2>
            <p className="mt-3 text-sm text-white/60">
              Mobile detailing, pressure washing, junk removal, roofing, landscaping, plumbers, electricians,
              cleaners, party rentals, and more.
            </p>

            <div className="mt-6">
              <Link
                href="/form"
                className="inline-flex rounded-full bg-[color:var(--accent)] px-6 py-3 text-sm font-semibold text-black hover:brightness-110 transition"
              >
                Start Now →
              </Link>
            </div>
          </Card>
        </div>
      </Section>

      <Section>
        <Card className="p-6">
          <h2 className="text-2xl font-semibold">FAQs</h2>
          <div className="mt-5 grid gap-4">
            {faqs.map((f) => (
              <details
                key={f.q}
                className="group rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition hover:border-white/20"
              >
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
            Get a Quote →
          </Link>
          <p className="mt-3 text-sm text-white/50">
            Or go back to the{" "}
            <Link href="/#home" className="text-white/75 hover:text-white underline underline-offset-4">
              homepage
            </Link>
            .
          </p>
        </div>
      </Section>

      {/* FAQ Schema for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </main>
  );
}