import type {
  Compatibility,
  LibraryCatalog,
  LibraryResource,
  PublicationStatus,
  ResourceType,
  SourceClass,
  VerificationStatus,
} from "./types";

const types: ResourceType[] = ["plugin", "skill", "connector", "mcp", "subagent", "command"];
const compatibilities: Compatibility[] = ["cowork", "claude-web", "claude-code"];
const sourceClasses: SourceClass[] = ["anthropic", "vendor", "community"];
const verificationStatuses: VerificationStatus[] = ["verified", "source-reviewed", "unverified"];
const publicationStatuses: PublicationStatus[] = ["draft", "published", "archived"];

function object(value: unknown, path: string): Record<string, unknown> {
  if (!value || typeof value !== "object" || Array.isArray(value)) throw new Error(`${path} must be an object`);
  return value as Record<string, unknown>;
}

function string(value: unknown, path: string, allowEmpty = false): string {
  if (typeof value !== "string" || (!allowEmpty && !value.trim())) throw new Error(`${path} must be a non-empty string`);
  return value.trim();
}

function strings(value: unknown, path: string): string[] {
  if (!Array.isArray(value)) throw new Error(`${path} must be an array`);
  return value.map((entry, index) => string(entry, `${path}[${index}]`));
}

function choice<T extends string>(value: unknown, choices: readonly T[], path: string): T {
  if (typeof value !== "string" || !choices.includes(value as T)) throw new Error(`${path} must be one of ${choices.join(", ")}`);
  return value as T;
}

function optionalString(value: unknown, path: string): string | undefined {
  return value === undefined ? undefined : string(value, path);
}

function validateResource(value: unknown): LibraryResource {
  const item = object(value, "resource");
  const slug = string(item.slug, "resource.slug");
  const path = `resource ${slug}`;
  const sourceUrl = string(item.sourceUrl, `${path}.sourceUrl`);
  if (!sourceUrl.startsWith("https://")) throw new Error(`${path}.sourceUrl must use HTTPS`);
  const compatibility = strings(item.compatibility, `${path}.compatibility`).map((entry) => choice(entry, compatibilities, `${path}.compatibility`));
  const publicationStatus = choice(item.publicationStatus, publicationStatuses, `${path}.publicationStatus`);
  const compatibilityEvidence = string(item.compatibilityEvidence, `${path}.compatibilityEvidence`, publicationStatus !== "published");
  const checkedAt = string(item.checkedAt, `${path}.checkedAt`, publicationStatus !== "published");
  return {
    slug,
    name: string(item.name, `${path}.name`),
    summary: string(item.summary, `${path}.summary`),
    type: choice(item.type, types, `${path}.type`),
    sourceClass: choice(item.sourceClass, sourceClasses, `${path}.sourceClass`),
    sourceRepository: optionalString(item.sourceRepository, `${path}.sourceRepository`),
    sourcePath: optionalString(item.sourcePath, `${path}.sourcePath`),
    sourceUrl,
    sourceCommit: optionalString(item.sourceCommit, `${path}.sourceCommit`),
    homepage: optionalString(item.homepage, `${path}.homepage`),
    compatibility,
    compatibilityEvidence,
    verificationStatus: choice(item.verificationStatus, verificationStatuses, `${path}.verificationStatus`),
    checkedAt,
    installCommand: optionalString(item.installCommand, `${path}.installCommand`),
    permissions: strings(item.permissions, `${path}.permissions`),
    risks: strings(item.risks, `${path}.risks`),
    safeTest: string(item.safeTest, `${path}.safeTest`),
    categories: strings(item.categories, `${path}.categories`),
    scenarios: strings(item.scenarios, `${path}.scenarios`),
    keywords: strings(item.keywords, `${path}.keywords`),
    publicationStatus,
  };
}

export function validateLibraryCatalog(input: unknown): LibraryCatalog {
  const root = object(input, "catalog");
  const resources = (Array.isArray(root.resources) ? root.resources : []).map(validateResource);
  const resourceBySlug = new Map<string, LibraryResource>();
  for (const resource of resources) {
    if (resourceBySlug.has(resource.slug)) throw new Error(`duplicate resource slug: ${resource.slug}`);
    resourceBySlug.set(resource.slug, resource);
  }
  const categories = (Array.isArray(root.categories) ? root.categories : []).map((value) => {
    const item = object(value, "category");
    const slug = string(item.slug, "category.slug");
    return {
      slug,
      name: string(item.name, `category ${slug}.name`),
      summary: string(item.summary, `category ${slug}.summary`),
      subcategories: (Array.isArray(item.subcategories) ? item.subcategories : []).map((sub) => {
        const entry = object(sub, `category ${slug}.subcategory`);
        const subcategorySlug = string(entry.slug, `category ${slug}.subcategory.slug`);
        const resourceSlugs = strings(entry.resourceSlugs, `subcategory ${subcategorySlug}.resourceSlugs`);
        for (const resourceSlug of resourceSlugs) {
          if (resourceBySlug.get(resourceSlug)?.publicationStatus !== "published") throw new Error(`subcategory ${subcategorySlug} resource ${resourceSlug} must be published`);
        }
        return { slug: subcategorySlug, name: string(entry.name, `category ${slug}.subcategory.name`), summary: string(entry.summary, `category ${slug}.subcategory.summary`), resourceSlugs };
      }),
    };
  });
  const scenarios = (Array.isArray(root.scenarios) ? root.scenarios : []).map((value) => {
    const item = object(value, "scenario");
    const slug = string(item.slug, "scenario.slug");
    const resourceSlugs = strings(item.resourceSlugs, `scenario ${slug}.resourceSlugs`);
    for (const resourceSlug of resourceSlugs) {
      if (resourceBySlug.get(resourceSlug)?.publicationStatus !== "published") throw new Error(`scenario ${slug} resource ${resourceSlug} must be published`);
    }
    return {
      slug,
      name: string(item.name, `scenario ${slug}.name`),
      summary: string(item.summary, `scenario ${slug}.summary`),
      resourceSlugs,
      guide: string(item.guide, `scenario ${slug}.guide`),
      inputs: item.inputs === undefined ? undefined : strings(item.inputs, `scenario ${slug}.inputs`),
      output: optionalString(item.output, `scenario ${slug}.output`),
      review: item.review === undefined ? undefined : strings(item.review, `scenario ${slug}.review`),
    };
  });
  return { generatedAt: string(root.generatedAt, "catalog.generatedAt"), categories, scenarios, resources };
}
