import type { Metadata } from "next";
import HomeClient from "./HomeClient";

export const metadata: Metadata = {
  title: "SitePulse by Colby | Web Design + SEO in Orlando, FL",
  description:
    "High-converting websites + local SEO for small businesses in Orlando and across Florida. Fast turnaround, modern design, and built to generate calls and leads. Book a call today.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "SitePulse by Colby | Web Design + SEO in Orlando, FL",
    description:
      "Web design + local SEO for small businesses. Built to convert visitors into calls & leads. Serving Orlando + Florida.",
    url: "/",
    siteName: "SitePulse",
    images: [
      { url: "/og-image.png", width: 1200, height: 630, alt: "SitePulse by Colby" },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SitePulse by Colby | Web Design + SEO in Orlando, FL",
    description:
      "Modern websites + SEO for small businesses in Orlando and across Florida.",
    images: ["/og-image.png"],
  },
};

export default function Page() {
  return <HomeClient />;
}