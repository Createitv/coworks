import { getLibraryCatalog } from "@/lib/library/catalog";
import { siteURL } from "@/lib/site";

export const dynamic = "force-static";

export function GET() {
  const catalog = getLibraryCatalog();
  return Response.json({
    ...catalog,
    resources: catalog.resources.filter((resource) => resource.publicationStatus === "published").map((resource) => ({ ...resource, url: `${siteURL}/library/resources/${resource.slug}`, markdown: `${siteURL}/knowledge/library-${resource.slug}.md` })),
  }, { headers: { "X-Robots-Tag": "noindex" } });
}
