import { ResourceShell } from "@/components/layout/ResourceShell";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";
import { publicPageMetadata } from "@/lib/page-metadata";
import { getResources } from "@/lib/resource-catalog";
import { siteURL } from "@/lib/site";
import { ResourceList } from "./resource-list";
import Link from "next/link";

export const metadata = publicPageMetadata(
  "Claude Cowork Resource Directory: Guides, Templates and Videos",
  "Find public Claude Cowork setup guides, connector checks, workflow templates, and video walkthroughs by task or topic.",
  "/resources",
);

export default function ResourcesPage() {
  return (
    <ResourceShell>
      <BreadcrumbJsonLd items={[{ name: "Home", url: siteURL }, { name: "Resources", url: `${siteURL}/resources` }]} />
      <main className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">Find Claude Cowork resources</h1>
        <p className="mt-4 max-w-2xl text-lg opacity-80">Search by what you want to do. Open a written guide, copy a prompt, or watch a walkthrough. Everything here is public.</p>
        <aside className="mt-7 border-l-4 border-[#c08b2d] bg-[#fffdf6] p-5 dark:bg-[#15120f]">
          <h2 className="text-xl font-semibold">Looking for a plugin, connector, skill, or MCP service?</h2>
          <p className="mt-2 max-w-2xl opacity-75">The reviewed library separates Cowork-compatible tools from Claude Code resources and shows source evidence, permissions, risks, and a safe first test.</p>
          <Link href="/library" className="mt-3 inline-block font-semibold underline underline-offset-4">Browse the plugin and connector library</Link>
        </aside>
        <ResourceList entries={getResources()} />
      </main>
    </ResourceShell>
  );
}
