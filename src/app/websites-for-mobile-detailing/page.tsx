import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Websites for Mobile Detailing | SitePulse",
  description:
    "Mobile detailing websites that convert: premium look, fast load, service-area SEO, and a simple quote flow that gets more bookings.",
  alternates: { canonical: "https://www.sitepulse.llc/websites-for-mobile-detailing" },
  openGraph: {
    title: "Websites for Mobile Detailing | SitePulse",
    description:
      "Mobile detailing websites that convert: premium look, fast load, service-area SEO, and a simple quote flow that gets more bookings.",
    url: "https://www.sitepulse.llc/websites-for-mobile-detailing",
    siteName: "SitePulse",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Websites for Mobile Detailing" }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Websites for Mobile Detailing | SitePulse",
    description:
      "Mobile detailing websites that convert: premium look, fast load, service-area SEO, and a simple quote flow that gets more bookings.",
    images: ["/og-image.png"],
  },
};

const Tile = ({ title, desc }: { title: string; desc: string }) => (
  <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-6">
    <h3 className="text-lg font-semibold text-white">{title}</h3>
    <p className="mt-2 text-white/75 leading-relaxed">{desc}</p>
  </div>
);

export default function Page() {
  return (
    <main className="relative">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-28 left-1/2 h-[460px] w-[760px] -translate-x-1/2 rounded-full bg-teal-400/10 blur-3xl" />
        <div className="absolute top-44 left-[-140px] h-[380px] w-[380px] rounded-full bg-emerald-400/10 blur-3xl" />
      </div>

      <section className="relative mx-auto max-w-6xl px-4 pt-16 pb-10">
        <p className="text-sm text-emerald-200/80">Niche Websites</p>
        <h1 className="mt-2 text-3xl md:text-5xl font-bold text-white">
          Websites for <span className="text-emerald-300">Mobile Detailing</span>
        </h1>
        <p className="mt-4 max-w-2xl text-white/75">
          Mobile detailing is visual and trust-based — your website should feel premium, show your work, and make it
          easy to request a quote.
        </p>

        <div className="mt-7 flex flex-col sm:flex-row gap-3">
          <a
            href="/form?plan=Pro"
            className="inline-flex items-center justify-center rounded-xl bg-emerald-400/20 px-5 py-3 text-white border border-emerald-300/30 hover:bg-emerald-400/25 transition"
          >
            Get Started (Pro)
          </a>
          <a
            href="/form?plan=Growth"
            className="inline-flex items-center justify-center rounded-xl bg-white/5 px-5 py-3 text-white/90 border border-white/10 hover:bg-white/10 transition"
          >
            Start Your Website
          </a>
          <a
            href="/form?plan=Free%20Audit"
            className="inline-flex items-center justify-center rounded-xl px-5 py-3 text-emerald-200 hover:text-emerald-100 underline underline-offset-4"
          >
            Get a free audit
          </a>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          <Tile title="Premium gallery layout" desc="Before/after grid + clean spacing so your work sells for you." />
          <Tile title="Quote flow that’s fast" desc="Short form, mobile-first, designed to reduce drop-off." />
          <Tile title="Service-area pages" desc="Target your nearby cities the same way your Orlando/Apopka pages work." />
        </div>

        {/* Related pages (internal linking boost for indexing) */}
        <div className="mt-8 rounded-2xl border border-white/10 bg-white/[0.03] p-6">
          <div className="text-sm font-semibold text-white/80">Related pages</div>
          <p className="mt-2 text-sm text-white/60">Explore other service areas and niche examples.</p>
          <div className="mt-4 flex flex-wrap gap-2">
            <Link
              href="/websites-for-pressure-washing"
              className="rounded-full border border-white/12 bg-white/[0.03] px-4 py-2 text-xs font-semibold text-white/80 hover:bg-white/[0.06] hover:text-white transition"
            >
              Pressure Washing →
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
          <h2 className="text-2xl md:text-3xl font-semibold text-white">What converts for detailing</h2>

          <div className="mt-5 grid gap-3 md:grid-cols-2">
            <div className="rounded-xl border border-white/10 bg-white/[0.03] p-4 text-white/75">
              <span className="text-white font-medium">Packages + price ranges</span> — reduce time-wasters.
            </div>
            <div className="rounded-xl border border-white/10 bg-white/[0.03] p-4 text-white/75">
              <span className="text-white font-medium">Trust builders</span> — reviews, FAQs, “what to expect.”
            </div>
            <div className="rounded-xl border border-white/10 bg-white/[0.03] p-4 text-white/75">
              <span className="text-white font-medium">High-intent CTAs</span> — “Get a Quote” beats “Contact us.”
            </div>
            <div className="rounded-xl border border-white/10 bg-white/[0.03] p-4 text-white/75">
              <span className="text-white font-medium">GBP synergy</span> — match services + posts + site content.
            </div>
          </div>

          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a
              href="/form?plan=Growth"
              className="inline-flex items-center justify-center rounded-xl bg-emerald-400/20 px-5 py-3 text-white border border-emerald-300/30 hover:bg-emerald-400/25 transition"
            >
              Get a Quote (Growth)
            </a>
            <Link
              href="/websites-for-contractors"
              className="inline-flex items-center justify-center rounded-xl bg-white/5 px-5 py-3 text-white/90 border border-white/10 hover:bg-white/10 transition"
            >
              See Contractor Websites
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}