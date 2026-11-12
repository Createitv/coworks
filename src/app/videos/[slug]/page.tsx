import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";
import { siteURL } from "@/lib/site";
import { videoGuides, videoPath, videoPlayer, videoSource, videoThumbnail } from "@/lib/videos";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;
export function generateStaticParams() {
  return videoGuides.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const video = videoGuides.find((entry) => entry.slug === slug);
  if (!video) return {};
  const url = `${siteURL}${videoPath(video)}`;
  const image = { url: videoThumbnail(video), width: 480, height: 360, alt: video.originalTitle };
  const { title, description } = video;
  return {
    title: { absolute: `${title} | Coworks.dev` },
    description,
    alternates: { canonical: url },
    openGraph: { title, description, url, type: "website", images: [image], videos: [{ url: videoPlayer(video) }] },
    twitter: { card: "summary_large_image", title, description, images: [image] },
  };
}

export default async function VideoPage({ params }: Props) {
  const { slug } = await params;
  const video = videoGuides.find((entry) => entry.slug === slug);
  if (!video) notFound();
  const url = `${siteURL}${videoPath(video)}`;
  const schema = {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    "@id": `${url}#video`,
    name: video.originalTitle,
    description: video.description,
    thumbnailUrl: [videoThumbnail(video)],
    uploadDate: video.published,
    embedUrl: videoPlayer(video),
    url,
    publisher: { "@type": "Organization", name: video.publisher },
  };
  const published = new Intl.DateTimeFormat("en", { dateStyle: "medium", timeZone: "UTC" }).format(new Date(video.published));
  return (
    <main className="mx-auto max-w-5xl px-4 py-7 sm:px-6 sm:py-10 lg:px-8">
      <BreadcrumbJsonLd items={[{ name: "Home", url: siteURL }, { name: "Videos", url: `${siteURL}/videos` }, { name: video.title, url }]} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }} />
      <Link href="/videos" className="text-sm font-semibold underline underline-offset-4">All videos</Link>
      <h1 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">{video.title}</h1>
      <div className="relative mt-4 aspect-video overflow-hidden rounded-2xl bg-black">
        <iframe
          className="absolute inset-0 block h-full w-full"
          width={960}
          height={540}
          src={videoPlayer(video)}
          title={video.originalTitle}
          allow="encrypted-media; picture-in-picture; fullscreen"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />
      </div>
      <div className="mt-3 flex flex-wrap justify-between gap-x-4 gap-y-1 text-sm">
        <p className="opacity-75">Published by {video.publisher} on <time dateTime={video.published}>{published}</time></p>
        <a href={videoSource(video)} className="font-semibold underline underline-offset-4">Watch on YouTube</a>
      </div>
      <p className="mt-5 max-w-3xl text-lg leading-relaxed opacity-80">{video.description}</p>
      <div className="mt-8 grid gap-8 border-t border-current/15 pt-7 md:grid-cols-[minmax(0,1fr)_minmax(13rem,0.42fr)]">
        <div className="space-y-7">
          <section>
            <h2 className="text-xl font-semibold">What to look for</h2>
            <ul className="mt-3 list-disc space-y-2 pl-5 leading-relaxed">{video.takeaways.map((point) => <li key={point}>{point}</li>)}</ul>
          </section>
          <section className="rounded-2xl border border-[#c08b2d]/45 bg-[#f7d793]/15 p-5">
            <h2 className="text-xl font-semibold">Try it after watching</h2>
            <p className="mt-2 leading-relaxed">{video.exercise}</p>
          </section>
        </div>
        <aside className="space-y-6">
          <section>
            <h2 className="font-semibold">Written guides</h2>
            <ul className="mt-2 space-y-2">{video.docs.map((doc) => <li key={doc.href}><Link href={doc.href} className="underline underline-offset-4">{doc.label}</Link></li>)}</ul>
          </section>
          <section>
            <h2 className="font-semibold">More videos</h2>
            <ul className="mt-2 space-y-2">{videoGuides.filter((entry) => entry.slug !== slug).map((entry) => <li key={entry.slug}><Link href={videoPath(entry)} className="underline underline-offset-4">{entry.title}</Link></li>)}</ul>
          </section>
        </aside>
      </div>
    </main>
  );
}
