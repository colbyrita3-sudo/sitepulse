import type { Metadata } from "next";
import Link from "next/link";
import Card from "@/components/Card";

export const metadata: Metadata = {
  title: "Apopka Web Design | SitePulse by Colby",
  description:
    "Web design + SEO for small businesses in Apopka, FL. Premium websites built to convert visitors into calls and leads. Serving Apopka and surrounding areas.",
  alternates: { canonical: "/apopka-web-design" },
  openGraph: {
    title: "Apopka Web Design | SitePulse by Colby",
    description: "Premium web design + local SEO for Apopka small businesses. Built to rank and convert.",
    url: "/apopka-web-design",
    siteName: "SitePulse",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Apopka Web Design" }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Apopka Web Design | SitePulse by Colby",
    description: "Premium web design + local SEO for Apopka small businesses.",
    images: ["/og-image.png"],
  },
};

function Section({ children }: { children: React.ReactNode }) {
  return <section className="relative mx-auto max-w-6xl px-4 py-12">{children}</section>;
}

export default function ApopkaWebDesignPage() {
  const faqs = [
    {
      q: "Can you build a website for my Apopka business quickly?",
      a: "Yes. Most projects take 7–10 days depending on how fast you send your info, photos, and requests.",
    },
    {
      q: "Do you help with local SEO in Apopka?",
      a: "Yes. I set up on-page SEO fundamentals (titles, headings, structure, speed) and can guide your Google Business Profile setup for local visibility.",
    },
    {
      q: "What types of businesses do you work with?",
      a: "Mostly local service businesses like detailing, pressure washing, junk removal, contractors, and home services.",
    },
    {
      q: "Do I need a domain first?",
      a: "No. We can build first, then connect your domain when you’re ready.",
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
            Apopka <span className="text-[color:var(--accent)] glow">Web Design</span> Built to Convert
            <br />
            Visitors into Leads
          </h1>

          <p className="mx-auto mt-5 max-w-3xl text-sm md:text-base text-white/60">
            If your customers search on Google, your website needs to look premium and make it easy to contact you.
            I build fast, modern sites for Apopka businesses that want more calls and inquiries.
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
              href="sms:4072528476?&body=Hey%20Colby%2C%20I%27m%20in%20Apopka%20and%20I%20need%20a%20website.%20Can%20you%20help%3F"
              className="w-full sm:w-auto rounded-full border border-white/15 bg-white/[0.03] px-8 py-3 font-semibold text-white/85 hover:bg-white/[0.06] transition"
            >
              Text Now
            </a>
          </div>

          <div className="mx-auto mt-10 max-w-3xl rounded-3xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur">
            <p className="text-white/70">
              Serving: Apopka • Wekiwa Springs • Altamonte Springs • Longwood • Maitland • Winter Park • Orlando
            </p>
          </div>
        </div>
      </Section>

      <Section>
        <div className="grid gap-5 md:grid-cols-3">
          <Card className="p-6">
            <h2 className="text-lg font-semibold">Premium Look</h2>
            <p className="mt-2 text-sm text-white/60">
              A clean, modern design that makes your business look trustworthy and high-end.
            </p>
          </Card>
          <Card className="p-6">
            <h2 className="text-lg font-semibold">Built for Leads</h2>
            <p className="mt-2 text-sm text-white/60">
              Clear calls-to-action and simple structure so visitors contact you fast.
            </p>
          </Card>
          <Card className="p-6">
            <h2 className="text-lg font-semibold">SEO Foundation</h2>
            <p className="mt-2 text-sm text-white/60">
              Proper page titles, headings, speed, and structure so Google understands your services and area.
            </p>
          </Card>
        </div>
      </Section>

      <Section>
        <div className="grid gap-6 md:grid-cols-2">
          <Card className="p-6">
            <h2 className="text-xl font-semibold">Great for local service businesses</h2>
            <p className="mt-3 text-sm text-white/60">
              Mobile detailing, pressure washing, junk removal, roofers, landscapers, cleaners, plumbers,
              electricians, party rentals, and more.
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
            <h2 className="text-xl font-semibold">Want Google visibility?</h2>
            <p className="mt-3 text-sm text-white/60">
              The biggest wins come from: a strong website + a tuned Google Business Profile + consistent reviews.
              I’ll help you set up the foundation so you can compete locally.
            </p>
            <div className="mt-6">
              <Link
                href="/seo-orlando"
                className="inline-flex rounded-full border border-white/15 bg-white/[0.03] px-6 py-3 text-sm font-semibold text-white/85 hover:bg-white/[0.06] transition"
              >
                Learn about SEO →
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
          <p className="mt-3 text-sm text-white/50">
            Back to{" "}
            <Link href="/#home" className="text-white/75 hover:text-white underline underline-offset-4">
              homepage
            </Link>
            .
          </p>
        </div>
      </Section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
    </main>
  );
}