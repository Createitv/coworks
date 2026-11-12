export type ResourceType = "plugin" | "skill" | "connector" | "mcp" | "subagent" | "command";
export type Compatibility = "cowork" | "claude-web" | "claude-code";
export type SourceClass = "anthropic" | "vendor" | "community";
export type VerificationStatus = "verified" | "source-reviewed" | "unverified";
export type PublicationStatus = "draft" | "published" | "archived";

export interface LibraryResource {
  slug: string;
  name: string;
  summary: string;
  type: ResourceType;
  sourceClass: SourceClass;
  sourceRepository?: string;
  sourcePath?: string;
  sourceUrl: string;
  sourceCommit?: string;
  homepage?: string;
  compatibility: Compatibility[];
  compatibilityEvidence: string;
  verificationStatus: VerificationStatus;
  checkedAt: string;
  installCommand?: string;
  permissions: string[];
  risks: string[];
  safeTest: string;
  categories: string[];
  scenarios: string[];
  keywords: string[];
  publicationStatus: PublicationStatus;
}

export interface LibraryCategory {
  slug: string;
  name: string;
  summary: string;
  subcategories: { slug: string; name: string; summary: string }[];
}

export interface LibraryScenario {
  slug: string;
  name: string;
  summary: string;
  resourceSlugs: string[];
  guide: string;
  inputs?: string[];
  output?: string;
  review?: string[];
}

export interface LibraryCatalog {
  generatedAt: string;
  categories: LibraryCategory[];
  scenarios: LibraryScenario[];
  resources: LibraryResource[];
}
