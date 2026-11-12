import type { MetadataRoute } from "next";
import { getDocSlugs } from "@/lib/markdown";
import { siteURL } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["/", "/about", "/connect-me", "/privacy", "/terms", "/docs", "/docs/templates"];
  const docRoutes = getDocSlugs().map((slug) => `/docs/${slug}`);

  return [...routes, ...docRoutes].map((path) => ({ url: `${siteURL}${path}` }));
}
