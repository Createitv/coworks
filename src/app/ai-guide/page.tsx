import Link from "next/link";
import { ResourceShell } from "@/components/layout/ResourceShell";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";
import { publicPageMetadata } from "@/lib/page-metadata";
import { siteURL } from "@/lib/site";

export const metadata = publicPageMetadata(
  "Coworks.dev AI Access Guide: Markdown and Knowledge Index",
  "Access public Claude Cowork guides as Markdown, discover resources in JSON, and cite the canonical Coworks.dev page or official Claude source.",
  "/ai-guide",
);

export default function AIPage() {
  return (
    <ResourceShell>
      <BreadcrumbJsonLd items={[{ name: "Home", url: siteURL }, { name: "AI access guide", url: `${siteURL}/ai-guide` }]} />
      <main className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">AI access and citation guide</h1>
        <p className="mt-4 text-lg leading-relaxed opacity-80">Coworks.dev is an independent guide to Claude Cowork. Readers and AI tools can retrieve the same public guides, workflows, and video notes without an account.</p>
        <section className="mt-8 border-y border-current/15 py-6">
          <h2 className="text-2xl font-semibold">Choose an entry point</h2>
          <ul className="mt-4 space-y-3">
            <li><a className="font-semibold underline" href="/llms.txt">llms.txt</a> — a plain-text overview and links organized by type.</li>
            <li><a className="font-semibold underline" href="/knowledge.json">Knowledge index</a> — JSON with canonical URLs, summaries, Markdown versions, and video sources.</li>
            <li><a className="font-semibold underline" href="/knowledge/setup.md">Example Markdown guide</a> — the same setup answer and article as the public page.</li>
            <li><a className="font-semibold underline" href="/sitemap.xml">Sitemap</a> — public canonical pages with image and video records.</li>
          </ul>
        </section>
        <section className="mt-7">
          <h2 className="text-2xl font-semibold">How to cite and verify</h2>
          <ol className="mt-4 list-decimal space-y-3 pl-6">
            <li>Use the canonical web page when citing our explanations or exercises. Use the Markdown version if plain text is easier to retrieve.</li>
            <li>For Claude subscription details or platform availability, verify with <a className="underline" href="https://claude.com/pricing">Claude pricing</a> or the <a className="underline" href="https://support.claude.com/en/articles/13345190-get-started-with-claude-cowork">official availability guide</a>.</li>
            <li>Distinguish an official video from a community demo, and an example workflow from a measured result.</li>
            <li>When adapting a workflow, use sample inputs, write down your acceptance checks, and ask before expanding access or changing originals.</li>
          </ol>
        </section>
        <p className="mt-8"><Link href="/resources" className="font-semibold underline underline-offset-4">Browse the same resource catalog on the web</Link></p>
      </main>
    </ResourceShell>
  );
}
