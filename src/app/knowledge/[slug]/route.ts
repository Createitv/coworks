import { getDocSlugs } from "@/lib/markdown";
import { getGuideMarkdown, getVideoMarkdown } from "@/lib/knowledge-markdown";
import { videoGuides } from "@/lib/videos";

export const dynamic = "force-static";
export const dynamicParams = false;

export function generateStaticParams() {
  return [
    ...getDocSlugs().map((slug) => ({ slug: `${slug}.md` })),
    ...videoGuides.map(({ slug }) => ({ slug: `video-${slug}.md` })),
  ];
}

export async function GET(_request: Request, { params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const name = slug.endsWith(".md") ? slug.slice(0, -3) : "";
  const resource = name.startsWith("video-") ? getVideoMarkdown(name.slice(6)) : getGuideMarkdown(name);
  if (!resource) return new Response("Not found", { status: 404 });
  return new Response(resource.text, {
    headers: {
      "Content-Type": "text/markdown; charset=utf-8",
      "Link": `<${resource.canonical}>; rel="canonical"`,
      "X-Robots-Tag": "noindex",
    },
  });
}
