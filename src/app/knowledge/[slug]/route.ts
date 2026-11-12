import { getDocSlugs } from "@/lib/markdown";
import { getGuideMarkdown, getVideoMarkdown } from "@/lib/knowledge-markdown";
import { videoGuides } from "@/lib/videos";
import { getLibraryResource, getPublishedResources } from "@/lib/library/catalog";
import { siteURL } from "@/lib/site";

export const dynamic = "force-static";
export const dynamicParams = false;

export function generateStaticParams() {
  return [
    ...getDocSlugs().map((slug) => ({ slug: `${slug}.md` })),
    ...videoGuides.map(({ slug }) => ({ slug: `video-${slug}.md` })),
    ...getPublishedResources().map(({ slug }) => ({ slug: `library-${slug}.md` })),
  ];
}

export async function GET(_request: Request, { params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const name = slug.endsWith(".md") ? slug.slice(0, -3) : "";
  const libraryResource = name.startsWith("library-") ? getLibraryResource(name.slice(8)) : undefined;
  const resource = libraryResource ? {
    canonical: `${siteURL}/library/resources/${libraryResource.slug}`,
    text: [
      `# ${libraryResource.name}`,
      "",
      libraryResource.summary,
      "",
      "## Compatibility evidence",
      "",
      libraryResource.compatibilityEvidence,
      "",
      `Compatible with: ${libraryResource.compatibility.join(", ")}`,
      "",
      "## Source and provenance",
      "",
      `- Source class: ${libraryResource.sourceClass}`,
      `- Review status: ${libraryResource.verificationStatus}`,
      `- Checked: ${libraryResource.checkedAt}`,
      `- Original source: ${libraryResource.sourceUrl}`,
      "",
      "## Permissions to review",
      "",
      ...libraryResource.permissions.map((item) => `- ${item}`),
      "",
      "## Risks and limits",
      "",
      ...libraryResource.risks.map((item) => `- ${item}`),
      "",
      "## Safe first test",
      "",
      libraryResource.safeTest,
      "",
    ].join("\n"),
  } : name.startsWith("video-") ? getVideoMarkdown(name.slice(6)) : getGuideMarkdown(name);
  if (!resource) return new Response("Not found", { status: 404 });
  return new Response(resource.text, {
    headers: {
      "Content-Type": "text/markdown; charset=utf-8",
      "Link": `<${resource.canonical}>; rel="canonical"`,
      "X-Robots-Tag": "noindex",
    },
  });
}
