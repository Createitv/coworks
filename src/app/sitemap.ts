import type { MetadataRoute } from "next";
import { getDocIllustration } from "@/lib/doc-illustrations";
import { getDocSlugs } from "@/lib/markdown";
import { videoGuides, videoPath, videoPlayer, videoThumbnail } from "@/lib/videos";
import { siteURL } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["/", "/about", "/connect-me", "/privacy", "/terms", "/docs", "/docs/templates", "/videos"];
  const docRoutes = getDocSlugs().map((slug) => `/docs/${slug}`);

  const pages = [...routes, ...docRoutes].map((path) => {
    const illustration = path.startsWith("/docs/") ? getDocIllustration(path.slice(6)) : undefined;
    return {
      url: `${siteURL}${path}`,
      ...(illustration ? { images: [`${siteURL}${illustration.url}`] } : {}),
    };
  });
  return [...pages, ...videoGuides.map((video) => ({
    url: `${siteURL}${videoPath(video)}`,
    videos: [{
      title: video.originalTitle,
      description: video.description,
      thumbnail_loc: videoThumbnail(video),
      player_loc: videoPlayer(video),
      publication_date: video.published,
    }],
  }))];
}
