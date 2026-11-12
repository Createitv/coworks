import { ResourceShell } from "@/components/layout/ResourceShell";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";
import { publicPageMetadata } from "@/lib/page-metadata";
import { getResources } from "@/lib/resource-catalog";
import { siteURL } from "@/lib/site";
import { ResourceList } from "./resource-list";

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
        <ResourceList entries={getResources()} />
      </main>
    </ResourceShell>
  );
}
