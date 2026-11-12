import { getEditorialReview } from "./editorial-sources";
import { getDocSource } from "./markdown";
import { siteURL } from "./site";
import { videoChapters } from "./video-chapters";
import { videoGuides, videoPath, videoRuntime, videoSource } from "./videos";

export function getGuideMarkdown(slug: string) {
  const doc = getDocSource(slug);
  if (!doc) return null;
  const canonical = `${siteURL}/docs/${doc.slug}`;
  const review = getEditorialReview(slug);
  const body = doc.content.trim().replace(/\]\(\/(?!\/)/g, `](${siteURL}/`);
  const sources = review ? [
    "", `Official sources checked: ${review.checkedOn}`, "",
    ...review.sources.map(({ label, url }) => `- [${label}](${url})`),
  ] : [];
  return { canonical, text: [
    `# ${doc.title}`, "", `Canonical: ${canonical}`, "", "## Quick answer", "", doc.answer,
    ...sources, "", body, "",
  ].join("\n") };
}

export function getVideoMarkdown(slug: string) {
  const video = videoGuides.find((entry) => entry.slug === slug);
  if (!video) return null;
  const canonical = `${siteURL}${videoPath(video)}`;
  const source = videoSource(video);
  const chapters = videoChapters[video.id] ?? [];
  return { canonical, text: [
    `# ${video.title}`, "", `Canonical: ${canonical}`, "",
    video.description, "",
    `- Original video: [${video.originalTitle}](${source})`,
    `- Publisher: ${video.publisher} (${video.kind === "official" ? "official" : "community"})`,
    `- Published: ${video.published.slice(0, 10)}`,
    `- Duration: ${videoRuntime(video.duration)}`,
    ...(video.language === "pt" ? ["- Audio: Portuguese"] : []),
    "", "## What to look for", "", ...video.takeaways.map((item) => `- ${item}`),
    ...(chapters.length ? [
      "", "## Video chapters", "", ...chapters.map(({ seconds, label }) =>
        `- [${videoRuntime(seconds)} ${label}](${source}&t=${seconds}s)`),
    ] : []),
    "", "## Try it after watching", "", video.exercise,
    "", "## Follow the written guides", "",
    ...video.docs.map(({ label, href }) => `- [${label}](${siteURL}${href})`), "",
  ].join("\n") };
}
