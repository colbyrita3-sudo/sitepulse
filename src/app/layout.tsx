import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

// 👉 CHANGE THIS when you have your real domain.
// For now you can leave it as-is. When you buy your domain, update it.
const SITE_URL = "https://sitepulsebycolby.com";

const BRAND = "SitePulse by Colby";
const SITE_NAME = "SitePulse";
const OWNER = "Colby";
const PHONE = "(407) 274-6660";
const EMAIL = "colbyrita300@gmail.com";

// Location targeting (edit as you want)
const CITY_PRIMARY = "Orlando";
const STATE = "FL";
const SERVICE_AREAS = [
  "Orlando, FL",
  "Apopka, FL",
  "Longwood, FL",
  "Altamonte Springs, FL",
  "Winter Park, FL",
  "Maitland, FL",
  "Lake Mary, FL",
  "Sanford, FL",
  "Oviedo, FL",
  "Casselberry, FL",
  "Winter Springs, FL",
  "Ocoee, FL",
  "Clermont, FL",
  "Kissimmee, FL",
  "Winter Garden, FL",
  "College Park, FL",
  "Downtown Orlando, FL",
  "Dr. Phillips, FL",
];

// SEO copy targets (these are NOT visible on-page; they guide metadata)
const PRIMARY_KEYWORDS = [
  "web design Orlando",
  "website designer Orlando",
  "small business website Orlando",
  "business website Florida",
  "affordable web design Orlando",
  "web designer near me",
  "SEO Orlando",
  "local SEO Orlando",
  "website for small business",
  "lead generation website",
  "website design for contractors",
  "website design for home services",
  "web design Florida",
  "website builder Orlando",
  "custom website Orlando",
];

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${BRAND} | Web Design + SEO in ${CITY_PRIMARY}, ${STATE}`,
    template: `%s | ${BRAND}`,
  },
  description:
    `High-converting websites for small businesses in ${CITY_PRIMARY} and across Florida. ` +
    `Fast turnaround, modern design, and SEO that helps you get found on Google. Book a call today.`,
  applicationName: SITE_NAME,
  authors: [{ name: OWNER }],
  creator: OWNER,
  publisher: BRAND,

  // ✅ These help Google know what your site is about.
  keywords: PRIMARY_KEYWORDS,

  alternates: {
    canonical: "/",
  },

  openGraph: {
    type: "website",
    url: SITE_URL,
    title: `${BRAND} | Web Design + SEO in ${CITY_PRIMARY}, ${STATE}`,
    description:
      `Web design + local SEO for small businesses. Built to convert visitors into calls & leads. Serving ${CITY_PRIMARY} + Florida.`,
    siteName: SITE_NAME,
    images: [
      {
        // Optional: add /og-image.png later (I’ll help you make it).
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: `${BRAND} preview image`,
      },
    ],
    locale: "en_US",
  },

  twitter: {
    card: "summary_large_image",
    title: `${BRAND} | Web Design + SEO in ${CITY_PRIMARY}, ${STATE}`,
    description:
      `Modern websites + SEO for small businesses. Serving ${CITY_PRIMARY} and Florida.`,
    images: ["/og-image.png"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  category: "Web Design",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // ✅ JSON-LD schema tells Google EXACTLY who you are and what you offer.
  // This improves “understanding” and can help rich results over time.
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: BRAND,
    url: SITE_URL,
    telephone: PHONE,
    email: EMAIL,
    image: `${SITE_URL}/og-image.png`,
    priceRange: "$$",
    areaServed: SERVICE_AREAS.map((a) => ({
      "@type": "City",
      name: a,
    })),
    address: {
      "@type": "PostalAddress",
      addressLocality: CITY_PRIMARY,
      addressRegion: STATE,
      addressCountry: "US",
    },
    sameAs: [
      // Add social links later if you want.
      // "https://www.instagram.com/...",
      // "https://www.facebook.com/...",
    ],
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Web Design + Local SEO",
    provider: {
      "@type": "LocalBusiness",
      name: BRAND,
      url: SITE_URL,
      telephone: PHONE,
    },
    serviceType: [
      "Web Design",
      "Website Development",
      "Local SEO",
      "Google Business Profile Optimization",
      "Landing Page Design",
      "Conversion Rate Optimization",
    ],
    areaServed: SERVICE_AREAS,
  };

  return (
    <html lang="en">
      <body>
        {/* ✅ Structured Data (Schema) */}
        <Script
          id="local-business-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        <Script
          id="service-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
        />

        {children}
      </body>
    </html>
  );
}