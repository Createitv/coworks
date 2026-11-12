import { getEditorialReview, type EditorialReview } from "./editorial-sources";
import { getAllDocs } from "./markdown";
import { docSections } from "./doc-navigation";
import { templates } from "./templates";
import { siteURL } from "./site";
import { videoGuides, videoPath, videoPlayer, videoSource, videoThumbnail, videoSections } from "./videos";

export const standalonePages = [
  "/", "/about", "/connect-me", "/privacy", "/terms", "/docs", "/docs/templates", "/videos", "/resources", "/ai-guide",
] as const;

export type ResourceEntry = {
  href: string;
  title: string;
  summary: string;
  topic: string;
  kind: "Guide" | "Video" | "Resource";
  keywords?: string[];
  markdown?: string;
  duration?: number;
  source?: string;
  publisher?: string;
  published?: string;
  thumbnail?: string;
  embed?: string;
  review?: EditorialReview;
  answerUrl?: string;
};

export function getResources(): ResourceEntry[] {
  return [
    { href: "/library", title: "Claude Cowork plugin, skill, and connector library", kind: "Resource", topic: "Tools", summary: "Browse reviewed resources with explicit compatibility, provenance, permissions, and safe first tests." },
    { href: "/docs/templates", title: "Claude Cowork prompt templates", kind: "Resource", topic: "Workflows", summary: "Copy prompts with concrete inputs, outputs, and review checks." },
    { href: "/ai-guide", title: "AI access and citation guide", kind: "Resource", topic: "Site guide", summary: "Find public Markdown, a machine-readable catalog, and canonical URLs." },
    ...getAllDocs().map((doc): ResourceEntry => ({
      href: `/docs/${doc.slug}`, title: doc.title, kind: "Guide", summary: doc.answer,
      topic: docSections.find((section) => section.slugs.some((slug) => slug === doc.slug))?.label ?? "Guide",
      keywords: doc.keywords,
      markdown: `/knowledge/${doc.slug}.md`,
      answerUrl: `${siteURL}/docs/${doc.slug}#quick-answer`,
      review: getEditorialReview(doc.slug),
    })),
    ...videoGuides.map((video): ResourceEntry => ({
      href: videoPath(video), title: video.title, kind: "Video", summary: video.description,
      topic: videoSections.find((section) => section.id === video.section)?.label ?? "Video",
      source: videoSource(video), publisher: video.publisher, duration: video.duration, published: video.published,
      thumbnail: videoThumbnail(video), embed: videoPlayer(video),
      markdown: `/knowledge/video-${video.slug}.md`,
    })),
  ];
}

export function getKnowledgeIndex() {
  return {
    site: siteURL,
    publisher: "Coworks.dev",
    affiliation: "Independent guide; Claude Cowork is operated by Anthropic.",
    sitemap: `${siteURL}/sitemap.xml`,
    templates: templates.map(({ id, title, category, prompt, check, guide }) => ({
      title, category, prompt, check, url: `${siteURL}/docs/templates#${id}`, guide: `${siteURL}${guide}`,
    })),
    resources: getResources().map(({ href, markdown, ...entry }) => ({
      ...entry, url: `${siteURL}${href}`, ...(markdown ? { markdown: `${siteURL}${markdown}` } : {}),
    })),
  };
}
