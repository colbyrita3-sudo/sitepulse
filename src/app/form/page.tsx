import type { Metadata } from "next";
import FormClient from "./FormClient";

export const metadata: Metadata = {
  title: "Book a Call | SitePulse by Colby",
  description:
    "Book a quick call with Colby to get a high-converting website + SEO plan for your business in Orlando or anywhere in Florida.",
  alternates: { canonical: "/form" },
  openGraph: {
    title: "Book a Call | SitePulse by Colby",
    description:
      "Book a quick call to get a website + SEO plan built to generate leads.",
    url: "/form",
    siteName: "SitePulse",
    images: [
      { url: "/og-image.png", width: 1200, height: 630, alt: "Book a call" },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Book a Call | SitePulse by Colby",
    description: "Book a quick call to get a website + SEO plan built to generate leads.",
    images: ["/og-image.png"],
  },
};

export default function FormPage() {
  return <FormClient />;
}