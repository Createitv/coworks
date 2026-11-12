# Coworks video library sources and maintenance

The reference [video library](https://claudecowork.im/videos) had five categories and 15 cards when checked on 2026-11-12. Fourteen cards pointed to YouTube search results. The direct link, Y Combinator’s 2024 computer-use discussion, is listed here as historical context.

Coworks groups its collection into official videos, setup, practical workflows, plugins and connectors, comparisons, and advanced techniques. Each listing points to a single watch page with one source video, original reading notes, a practical exercise, and links to the written guides. The list uses exact original channel, upload time, and duration from YouTube, separately from the editorial page titles. Chapter starts are taken from creator-supplied chapters; labels are written for the Coworks library.

To add an entry, verify the source video and that embedding is allowed, the video thumbnail returns an image, and the URL, publisher, upload date, and duration match the source. Add original notes and concrete ways to verify a task. The catalog in `src/lib/videos.ts` feeds the video library, static watch routes, and video sitemap entries. For documented source chapters, add verified timestamps in `src/lib/video-chapters.ts`. Keep existing watch URLs stable.

References: [Anthropic’s Claude YouTube channel](https://www.youtube.com/@claude), [Claude Academy](https://academy.claude.com/tutorials), [Google video SEO](https://developers.google.com/search/docs/appearance/video), [Google video sitemap requirements](https://developers.google.com/search/docs/crawling-indexing/sitemaps/video-sitemaps).
