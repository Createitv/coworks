import catalogData from "../../data/library/public.json";
import { validateLibraryCatalog } from "./schema";

const catalog = validateLibraryCatalog(catalogData);

export function getPublishedResources() {
  return catalog.resources.filter((resource) => resource.publicationStatus === "published");
}

export function getLibraryResource(slug: string) {
  return getPublishedResources().find((resource) => resource.slug === slug);
}

export function getLibraryCategory(slug: string) {
  return catalog.categories.find((category) => category.slug === slug);
}

export function getLibraryScenario(slug: string) {
  return catalog.scenarios.find((scenario) => scenario.slug === slug);
}

export function getLibraryCategories() {
  return catalog.categories;
}

export function getLibraryScenarios() {
  return catalog.scenarios;
}

export function getLibraryCatalog() {
  return catalog;
}
