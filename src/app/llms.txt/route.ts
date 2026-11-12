import { getKnowledgeIndex } from "@/lib/resource-catalog";
import { siteURL } from "@/lib/site";

export const dynamic = "force-static";

export function GET() {
  const { resources } = getKnowledgeIndex();
  const lines = [
    "# Coworks.dev",
    "",
    "> Independent guides, reproducible exercises, templates, and videos about Anthropic's Claude Cowork. All resources are public.",
    "",
    `- [AI access guide](${siteURL}/ai-guide): How to read and cite this site.`,
    `- [JSON knowledge index](${siteURL}/knowledge.json): Canonical URLs, summaries, and video sources.`,
    `- [XML sitemap](${siteURL}/sitemap.xml): All canonical pages and video records.`,
  ];
  for (const [kind, heading] of [["Resource", "Resource indexes"], ["Guide", "Written guides"], ["Video", "Video walkthroughs"]]) {
    lines.push("", `## ${heading}`, "", ...resources.filter((item) => item.kind === kind).map((entry) => `- [${entry.title}](${entry.url}): ${entry.summary}`));
  }
  return new Response(lines.join("\n") + "\n", { headers: { "Content-Type": "text/plain; charset=utf-8" } });
}
