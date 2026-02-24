import type { Metadata } from "next";
import { Suspense } from "react";
import FormClient from "./FormClient";

// ✅ Prevent build-time prerender for this page (fixes /form prerender errors)
export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Start Your Website | SitePulse",
  description:
    "Request a website build, free audit, or quote from SitePulse. Tell us about your business and we’ll follow up with next steps.",
  alternates: { canonical: "https://www.sitepulse.llc/form" },

  // ✅ Keep this page out of Google results
  robots: {
    index: false,
    follow: true,
    googleBot: {
      index: false,
      follow: true,
    },
  },

  openGraph: {
    title: "Start Your Website | SitePulse",
    description:
      "Request a website build, free audit, or quote from SitePulse. Tell us about your business and we’ll follow up with next steps.",
    url: "https://www.sitepulse.llc/form",
    siteName: "SitePulse",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "SitePulse" }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Start Your Website | SitePulse",
    description:
      "Request a website build, free audit, or quote from SitePulse. Tell us about your business and we’ll follow up with next steps.",
    images: ["/og-image.png"],
  },
};

export default function Page() {
  return (
    <Suspense fallback={<div className="mx-auto max-w-3xl px-4 py-16 text-white/70">Loading…</div>}>
      <FormClient />
    </Suspense>
  );
}