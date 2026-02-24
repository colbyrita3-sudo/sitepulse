import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.sitepulse.llc";
  const lastModified = new Date();

  // Add all your important routes here
  const routes = [
    "/",
    "/form",

    // City / service pages
    "/orlando-web-design",
    "/apopka-web-design",
    "/florida-web-design",
    "/seo-orlando",
    "/longwood-web-design",
    "/winter-park-web-design",
    "/lake-mary-web-design",
    "/sanford-web-design",

    // Niche pages
    "/websites-for-contractors",
    "/websites-for-pressure-washing",
    "/websites-for-mobile-detailing",
  ];

  return routes.map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified,
    changeFrequency: "weekly",
    priority: path === "/" ? 1 : 0.7,
  }));
}