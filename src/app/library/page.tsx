import type { Metadata } from "next";
import { LibraryHeader } from "@/components/library/LibraryHeader";
import { ResourceShell } from "@/components/layout/ResourceShell";
import { getLibraryCategories, getLibraryScenarios, getPublishedResources } from "@/lib/library/catalog";
import { publicPageMetadata } from "@/lib/page-metadata";
import { LibraryBrowser } from "./library-browser";

export const metadata: Metadata = publicPageMetadata("Claude Cowork Plugin, Skill and Connector Library", "Find reviewed Claude Cowork plugins, skills, connectors, MCP services, and Claude Code tools with compatibility and source evidence.", "/library");
export const dynamic = "force-static";

export default function LibraryPage() {
  return (
    <ResourceShell>
      <LibraryHeader />
      <LibraryBrowser
        resources={getPublishedResources()}
        categories={getLibraryCategories()}
        scenarios={getLibraryScenarios()}
        initialQuery={{}}
      />
    </ResourceShell>
  );
}
