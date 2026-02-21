import type { Metadata } from "next";
import Link from "next/link";
import Card from "@/components/Card";

export const metadata: Metadata = {
  title: "Florida Web Design | SitePulse by Colby",
  description:
    "Web design + SEO for small businesses across Florida. Premium websites built to convert visitors into calls and leads. Orlando + Central Florida focused.",
  alternates: { canonical: "/florida-web-design" },
  openGraph: {
    title: "Florida Web Design | SitePulse by Colby",
    description: "Premium web design + SEO for Florida small businesses. Built to rank and convert.",
    url: "/florida-web-design",
    siteName: "SitePulse",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Florida Web Design" }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Florida Web Design | SitePulse by Colby",
    description: "Premium web design + SEO for Florida small businesses.",
    images: ["/og-image.png"],
  },
};

function Section({ children }: { children: React.ReactNode }) {
  return <section className="relative mx-auto max-w-6xl px-4 py-12">{children}</section>;
}

export default function FloridaWebDesignPage() {
  const faqs = [
    {
      q: "Do you build websites for businesses anywhere in Florida?",
      a: "Yes. I’m based around Central Florida, but I can build websites for businesses anywhere in the state.",
    },
    {
      q: "What industries do you specialize in?",
      a: "Mostly local service businesses—home services, contractors, cleaning, detailing, pressure washing, party rentals, and more.",
    },
    {
      q: "Can you help me rank on Google?",
      a: "I build SEO-ready sites with strong on-page fundamentals. For best results, we also tune your Google Business Profile and build local credibility over time.",
    },
    {
      q: "Do you offer ongoing maintenance?",
      a: "Yes. Monthly plans cover hosting, updates, and (on Growth/Pro) ongoing SEO adjustments.",
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
            Florida <span className="text-[color:var(--accent)] glow">Web Design</span> for Small Businesses
            <br />
            Built to Rank & Convert
          </h1>

          <p className="mx-auto mt-5 max-w-3xl text-sm md:text-base text-white/60">
            A premium website helps you win trust fast and turn visitors into leads. If you’re a Florida business that
            wants more calls, more inquiries, and better Google visibility, you’re in the right place.
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
              href="sms:4072528476?&body=Hey%20Colby%2C%20I%27m%20in%20Florida%20and%20I%20need%20a%20website.%20Can%20you%20help%3F"
              className="w-full sm:w-auto rounded-full border border-white/15 bg-white/[0.03] px-8 py-3 font-semibold text-white/85 hover:bg-white/[0.06] transition"
            >
              Text Now
            </a>
          </div>

          <div className="mx-auto mt-10 max-w-3xl rounded-3xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur">
            <p className="text-white/70">
              Focus areas: Orlando • Apopka • Longwood • Winter Park • Maitland • Lake Mary • Sanford • Oviedo •
              Winter Springs • Altamonte Springs • Central Florida
            </p>
          </div>
        </div>
      </Section>

      <Section>
        <div className="grid gap-5 md:grid-cols-3">
          <Card className="p-6">
            <h2 className="text-lg font-semibold">Designed to Stand Out</h2>
            <p className="mt-2 text-sm text-white/60">
              Modern, premium look so your business feels trustworthy from the first click.
            </p>
          </Card>
          <Card className="p-6">
            <h2 className="text-lg font-semibold">Built for Conversions</h2>
            <p className="mt-2 text-sm text-white/60">
              Strong calls-to-action + clean layout that pushes visitors toward contacting you.
            </p>
          </Card>
          <Card className="p-6">
            <h2 className="text-lg font-semibold">SEO-Ready Structure</h2>
            <p className="mt-2 text-sm text-white/60">
              Titles, headings, internal linking, and speed foundations so Google can understand and rank you.
            </p>
          </Card>
        </div>
      </Section>

      <Section>
        <div className="grid gap-6 md:grid-cols-2">
          <Card className="p-6">
            <h2 className="text-xl font-semibold">Ideal for these niches</h2>
            <p className="mt-3 text-sm text-white/60">
              Home services, contractors, mobile detailing, pressure washing, junk removal, cleaners, locksmiths,
              party rentals, movers, and more.
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

          <Card className="p-6">
            <h2 className="text-xl font-semibold">Want the fastest path to Google leads?</h2>
            <p className="mt-3 text-sm text-white/60">
              The best formula is: a strong website + a tuned Google Business Profile + steady reviews/citations.
              I help you build the foundation and tell you what to do next.
            </p>
            <div className="mt-6">
              <Link
                href="/seo-orlando"
                className="inline-flex rounded-full border border-white/15 bg-white/[0.03] px-6 py-3 text-sm font-semibold text-white/85 hover:bg-white/[0.06] transition"
              >
                See the SEO plan →
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
            Get a Quote →
          </Link>
        </div>
      </Section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
    </main>
  );
}