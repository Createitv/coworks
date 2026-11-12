import type { Metadata } from "next";
import { LibraryHeader } from "@/components/library/LibraryHeader";
import { ResourceShell } from "@/components/layout/ResourceShell";
import { getLibraryCategories, getLibraryScenarios, getPublishedResources } from "@/lib/library/catalog";
import type { Compatibility, ResourceType, SourceClass } from "@/lib/library/types";
import { publicPageMetadata } from "@/lib/page-metadata";
import { LibraryBrowser } from "./library-browser";

export const metadata: Metadata = publicPageMetadata("Claude Cowork Plugin, Skill and Connector Library", "Find reviewed Claude Cowork plugins, skills, connectors, MCP services, and Claude Code tools with compatibility and source evidence.", "/library");

type SearchParams = Promise<{ q?: string; compatibility?: string; type?: string; source?: string; category?: string }>;

export default async function LibraryPage({ searchParams = Promise.resolve({}) }: { searchParams?: SearchParams }) {
  const params = await searchParams;
  return (
    <ResourceShell>
      <LibraryHeader />
      <LibraryBrowser
        resources={getPublishedResources()}
        categories={getLibraryCategories()}
        scenarios={getLibraryScenarios()}
        initialQuery={{ search: params.q ?? "", compatibility: params.compatibility as Compatibility | undefined, type: params.type as ResourceType | undefined, sourceClass: params.source as SourceClass | undefined, category: params.category ?? "" }}
      />
    </ResourceShell>
  );
}
