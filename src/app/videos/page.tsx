import type { Metadata } from "next";
import Link from "next/link";
import { Play } from "lucide-react";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";
import { siteURL } from "@/lib/site";
import { videoGuides, videoPath, videoSections, videoThumbnail } from "@/lib/videos";

const title = "Claude Cowork Videos: Official Tutorials and Demos";
const description = "Watch official Claude Cowork videos on setup, task delegation, and scheduled workflows. Each video includes a practical exercise and written guides.";
const url = `${siteURL}/videos`;

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: { canonical: url },
  openGraph: { title, description, url, type: "website", images: [videoThumbnail(videoGuides[0])] },
  twitter: { card: "summary_large_image", title, description, images: [videoThumbnail(videoGuides[0])] },
};

export default function VideosPage() {
  const itemList = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: title,
    itemListElement: videoGuides.map((video, index) => ({
      "@type": "ListItem", position: index + 1, url: `${siteURL}${videoPath(video)}`, name: video.title,
    })),
  };
  return (
    <main className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
      <BreadcrumbJsonLd items={[{ name: "Home", url: siteURL }, { name: "Videos", url }]} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemList).replace(/</g, "\\u003c") }} />
      <div className="grid gap-6 border-b border-black/15 pb-8 dark:border-white/15 md:grid-cols-[1fr_auto] md:items-end">
        <div>
          <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">Claude Cowork video library</h1>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed opacity-75">Watch official demos, then try the same ideas with a short exercise you can check yourself.</p>
        </div>
        <nav aria-label="Video topics" className="flex flex-wrap gap-2">
          {videoSections.map((section) => <a key={section.id} href={`#${section.id}`} className="rounded-full border border-current/20 px-3 py-2 text-sm font-medium hover:bg-[#f7d793]/20">{section.label}</a>)}
        </nav>
      </div>
      {videoSections.map((section) => (
        <section key={section.id} id={section.id} className="mt-10 scroll-mt-5">
          <h2 className="text-2xl font-semibold">{section.label}</h2>
          <p className="mt-1 opacity-75">{section.description}</p>
          <div className="mt-5 grid gap-5 sm:grid-cols-2">
            {videoGuides.filter((video) => video.section === section.id).map((video) => (
              <Link href={videoPath(video)} key={video.slug} className="group overflow-hidden rounded-2xl border border-black/15 bg-white focus-visible:outline-2 focus-visible:outline-offset-4 dark:border-white/15 dark:bg-[#15120f]">
                <div className="relative grid aspect-video place-items-center overflow-hidden bg-black">
                  {/* The publisher supplies a stable thumbnail for each video. */}
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={videoThumbnail(video)} width={480} height={360} alt="" loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
                  <span aria-hidden="true" className="relative grid size-12 place-items-center rounded-full bg-[#f7d793] text-black group-hover:bg-white"><Play className="size-5 fill-current" /></span>
                </div>
                <div className="p-5">
                  <p className="mb-2 text-sm font-medium opacity-70">{video.publisher} · Official video</p>
                  <h3 className="text-xl font-semibold group-hover:underline group-hover:underline-offset-4">{video.title}</h3>
                  <p className="mt-2 leading-relaxed opacity-75">{video.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>
      ))}
      <p className="mt-10 border-t border-current/15 pt-5 text-sm opacity-80">Prefer written instructions? <Link href="/docs" className="underline underline-offset-4">Browse the Cowork documentation</Link>.</p>
    </main>
  );
}
