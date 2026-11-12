import { getDocSlugs, getDocSource } from "@/lib/markdown";
import { siteURL } from "@/lib/site";

export const dynamic = "force-static";
export const dynamicParams = false;

export function generateStaticParams() {
  return getDocSlugs().map((slug) => ({ slug: `${slug}.md` }));
}

export async function GET(_request: Request, { params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const doc = slug.endsWith(".md") ? getDocSource(slug.slice(0, -3)) : null;
  if (!doc) return new Response("Not found", { status: 404 });
  const canonical = `${siteURL}/docs/${doc.slug}`;
  const markdown = doc.content.trim().replace(/\]\(\/(?!\/)/g, `](${siteURL}/`);
  return new Response(`# ${doc.title}\n\nCanonical: ${canonical}\n\n## Quick answer\n\n${doc.answer}\n\n${markdown}\n`, {
    headers: {
      "Content-Type": "text/markdown; charset=utf-8",
      "Link": `<${canonical}>; rel="canonical"`,
      "X-Robots-Tag": "noindex",
    },
  });
}
