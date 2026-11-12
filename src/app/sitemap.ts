import type { MetadataRoute } from "next";
import { getDocIllustration } from "@/lib/doc-illustrations";
import { getDocSlugs } from "@/lib/markdown";
import { siteURL } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["/", "/about", "/connect-me", "/privacy", "/terms", "/docs", "/docs/templates"];
  const docRoutes = getDocSlugs().map((slug) => `/docs/${slug}`);

  return [...routes, ...docRoutes].map((path) => {
    const illustration = path.startsWith("/docs/") ? getDocIllustration(path.slice(6)) : undefined;
    return {
      url: `${siteURL}${path}`,
      ...(illustration ? { images: [`${siteURL}${illustration.url}`] } : {}),
    };
  });
}
