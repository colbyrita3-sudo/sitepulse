import type { MetadataRoute } from "next";

// ✅ IMPORTANT: Update this to your real domain when you have it.
// If you don't have a domain yet, use your Vercel URL (https://xxxx.vercel.app)
const SITE_URL = "https://sitepulsebycolby.com";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}