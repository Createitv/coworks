import type { MetadataRoute } from "next";
import { getDocIllustration } from "@/lib/doc-illustrations";
import { getDocSlugs } from "@/lib/markdown";
import { videoGuides, videoPath, videoPlayer, videoThumbnail } from "@/lib/videos";
import { standalonePages } from "@/lib/resource-catalog";
import { siteURL } from "@/lib/site";

// Next's sitemap serializer inserts video text verbatim.
const xmlText = (value: string) => value.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

export default function sitemap(): MetadataRoute.Sitemap {
  const docRoutes = getDocSlugs().map((slug) => `/docs/${slug}`);

  const pages = [...standalonePages, ...docRoutes].map((path) => {
    const illustration = path.startsWith("/docs/") ? getDocIllustration(path.slice(6)) : undefined;
    return {
      url: `${siteURL}${path}`,
      ...(illustration ? { images: [`${siteURL}${illustration.url}`] } : {}),
    };
  });
  return [...pages, ...videoGuides.map((video) => ({
    url: `${siteURL}${videoPath(video)}`,
    videos: [{
      title: xmlText(video.originalTitle),
      description: xmlText(video.description),
      thumbnail_loc: videoThumbnail(video),
      player_loc: videoPlayer(video),
      publication_date: video.published,
      duration: video.duration,
    }],
  }))];
}
