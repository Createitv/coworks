import type { Compatibility, LibraryResource, ResourceType, SourceClass } from "./types";

export type LibraryQuery = {
  search?: string;
  compatibility?: Compatibility | "";
  type?: ResourceType | "";
  sourceClass?: SourceClass | "";
  category?: string;
};

export function filterLibraryResources(resources: LibraryResource[], query: LibraryQuery): LibraryResource[] {
  const words = (query.search ?? "").trim().toLowerCase().split(/\s+/).filter(Boolean);
  return resources.filter((resource) => {
    const searchable = [resource.name, resource.summary, ...resource.keywords, ...resource.categories].join(" ").toLowerCase();
    return words.every((word) => searchable.includes(word))
      && (!query.compatibility || resource.compatibility.includes(query.compatibility))
      && (!query.type || resource.type === query.type)
      && (!query.sourceClass || resource.sourceClass === query.sourceClass)
      && (!query.category || resource.categories.includes(query.category));
  });
}
