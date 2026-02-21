import type { MetadataRoute } from "next";

// ✅ IMPORTANT: Update this to your real domain when you have it.
// If you don't have a domain yet, use your Vercel URL (https://xxxx.vercel.app)
const SITE_URL = "https://sitepulsebycolby.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  // Add every public page here
  const routes = [
  "",
  "/form",
  "/orlando-web-design",
  "/apopka-web-design",
  "/florida-web-design",
  "/seo-orlando",
];

  return routes.map((route) => ({
    url: `${SITE_URL}${route}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: route === "" ? 1 : 0.7,
  }));
}