import type { Metadata } from "next";
import HomeClient from "./HomeClient";

export const metadata: Metadata = {
  title: "Web Design + SEO in Orlando, FL | SitePulse",
  description:
    "High-converting websites + local SEO for small businesses in Orlando and across Florida. Fast turnaround, modern design, and built to generate calls and leads. Book a call today.",
  alternates: { canonical: "https://www.sitepulse.llc/" },
  openGraph: {
    title: "Web Design + SEO in Orlando, FL | SitePulse",
    description:
      "Web design + local SEO for small businesses. Built to convert visitors into calls & leads. Serving Orlando + Florida.",
    url: "https://www.sitepulse.llc/",
    siteName: "SitePulse",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "SitePulse" }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Web Design + SEO in Orlando, FL | SitePulse",
    description: "Modern websites + SEO for small businesses in Orlando and across Florida.",
    images: ["/og-image.png"],
  },
};

export default function Page() {
  return <HomeClient />;
}