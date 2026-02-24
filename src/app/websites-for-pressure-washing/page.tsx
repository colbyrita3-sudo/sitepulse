import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Websites for Pressure Washing Companies | SitePulse",
  description:
    "High-converting pressure washing websites built fast. Quote-focused CTAs, service-area SEO, and a clean premium design that turns clicks into bookings.",
  alternates: { canonical: "https://www.sitepulse.llc/websites-for-pressure-washing" },
  openGraph: {
    title: "Websites for Pressure Washing Companies | SitePulse",
    description:
      "High-converting pressure washing websites built fast. Quote-focused CTAs, service-area SEO, and a clean premium design that turns clicks into bookings.",
    url: "https://www.sitepulse.llc/websites-for-pressure-washing",
    siteName: "SitePulse",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Websites for Pressure Washing" }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Websites for Pressure Washing Companies | SitePulse",
    description:
      "High-converting pressure washing websites built fast. Quote-focused CTAs, service-area SEO, and a clean premium design that turns clicks into bookings.",
    images: ["/og-image.png"],
  },
};

const GlassCard = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 shadow-[0_0_0_1px_rgba(255,255,255,0.04)]">
    <h3 className="text-lg font-semibold text-white">{title}</h3>
    <div className="mt-2 text-white/75 leading-relaxed">{children}</div>
  </div>
);

export default function Page() {
  return (
    <main className="relative">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-24 left-1/2 h-[420px] w-[720px] -translate-x-1/2 rounded-full bg-emerald-400/10 blur-3xl" />
        <div className="absolute top-40 right-[-120px] h-[360px] w-[360px] rounded-full bg-teal-400/10 blur-3xl" />
      </div>

      <section className="relative mx-auto max-w-6xl px-4 pt-16 pb-10">
        <p className="text-sm text-emerald-200/80">Niche Websites</p>
        <h1 className="mt-2 text-3xl md:text-5xl font-bold text-white">
          Websites for <span className="text-emerald-300">Pressure Washing</span> Companies
        </h1>
        <p className="mt-4 max-w-2xl text-white/75">
          You need a site that gets quote requests — not a “pretty brochure.” We build pressure washing websites with
          clear CTAs, fast load speed, and service-area SEO so you show up where customers actually search.
        </p>

        <div className="mt-7 flex flex-col sm:flex-row gap-3">
          <a
            href="/form?plan=Growth"
            className="inline-flex items-center justify-center rounded-xl bg-emerald-400/20 px-5 py-3 text-white border border-emerald-300/30 hover:bg-emerald-400/25 transition"
          >
            Start Your Website
          </a>
          <a
            href="/form?plan=Starter"
            className="inline-flex items-center justify-center rounded-xl bg-white/5 px-5 py-3 text-white/90 border border-white/10 hover:bg-white/10 transition"
          >
            Get a Quote
          </a>
          <a
            href="/form?plan=Free%20Audit"
            className="inline-flex items-center justify-center rounded-xl px-5 py-3 text-emerald-200 hover:text-emerald-100 underline underline-offset-4"
          >
            Prefer a free audit?
          </a>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          <GlassCard title="Built for bookings">Quote button + contact flow designed to convert on mobile.</GlassCard>
          <GlassCard title="Service-area SEO">Built to target your cities and “near me” intent with clean structure.</GlassCard>
          <GlassCard title="Fast + modern">Premium glass UI + performance-first layout that doesn’t feel templated.</GlassCard>
        </div>

        {/* Related pages (internal linking boost for indexing) */}
        <div className="mt-8 rounded-2xl border border-white/10 bg-white/[0.03] p-6">
          <div className="text-sm font-semibold text-white/80">Related pages</div>
          <p className="mt-2 text-sm text-white/60">Explore other service areas and niche examples.</p>
          <div className="mt-4 flex flex-wrap gap-2">
            <Link
              href="/websites-for-mobile-detailing"
              className="rounded-full border border-white/12 bg-white/[0.03] px-4 py-2 text-xs font-semibold text-white/80 hover:bg-white/[0.06] hover:text-white transition"
            >
              Mobile Detailing →
            </Link>
            <Link
              href="/websites-for-contractors"
              className="rounded-full border border-white/12 bg-white/[0.03] px-4 py-2 text-xs font-semibold text-white/80 hover:bg-white/[0.06] hover:text-white transition"
            >
              Contractor Websites →
            </Link>
            <Link
              href="/orlando-web-design"
              className="rounded-full border border-white/12 bg-white/[0.03] px-4 py-2 text-xs font-semibold text-white/80 hover:bg-white/[0.06] hover:text-white transition"
            >
              Orlando Web Design →
            </Link>
            <Link
              href="/seo-orlando"
              className="rounded-full border border-white/12 bg-white/[0.03] px-4 py-2 text-xs font-semibold text-white/80 hover:bg-white/[0.06] hover:text-white transition"
            >
              SEO Orlando →
            </Link>
          </div>
        </div>
      </section>

      <section className="relative mx-auto max-w-6xl px-4 pb-16">
        <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 md:p-8">
          <h2 className="text-2xl md:text-3xl font-semibold text-white">What your site should include</h2>

          <ul className="mt-4 grid gap-3 md:grid-cols-2 text-white/75">
            <li className="rounded-xl border border-white/10 bg-white/[0.03] p-4">
              <span className="text-white font-medium">Instant quote path</span> — short, mobile-first form.
            </li>
            <li className="rounded-xl border border-white/10 bg-white/[0.03] p-4">
              <span className="text-white font-medium">Before/after portfolio</span> — trust builders that sell.
            </li>
            <li className="rounded-xl border border-white/10 bg-white/[0.03] p-4">
              <span className="text-white font-medium">Services pages</span> — driveway, house wash, roof soft wash, etc.
            </li>
            <li className="rounded-xl border border-white/10 bg-white/[0.03] p-4">
              <span className="text-white font-medium">Service areas</span> — Orlando/Apopka style pages.
            </li>
          </ul>

          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a
              href="/form?plan=Growth"
              className="inline-flex items-center justify-center rounded-xl bg-emerald-400/20 px-5 py-3 text-white border border-emerald-300/30 hover:bg-emerald-400/25 transition"
            >
              Start Now (Growth)
            </a>
            <Link
              href="/seo-orlando"
              className="inline-flex items-center justify-center rounded-xl bg-white/5 px-5 py-3 text-white/90 border border-white/10 hover:bg-white/10 transition"
            >
              See Local SEO Approach
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}