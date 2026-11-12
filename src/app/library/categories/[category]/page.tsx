import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ResourceShell } from "@/components/layout/ResourceShell";
import { ResourceRow } from "@/components/library/ResourceRow";
import { getLibraryCategories, getLibraryCategory, getLibraryScenarios, getPublishedResources } from "@/lib/library/catalog";
import { publicPageMetadata } from "@/lib/page-metadata";

export function generateStaticParams() { return getLibraryCategories().map(({ slug }) => ({ category: slug })); }

export async function generateMetadata({ params }: { params: Promise<{ category: string }> }): Promise<Metadata> {
  const category = getLibraryCategory((await params).category);
  return category ? publicPageMetadata(`${category.name}: Claude Cowork Resources | Coworks.dev`, category.summary, `/library/categories/${category.slug}`) : {};
}

export default async function LibraryCategoryPage({ params }: { params: Promise<{ category: string }> }) {
  const category = getLibraryCategory((await params).category);
  if (!category) notFound();
  const resources = getPublishedResources().filter((resource) => resource.categories.includes(category.slug));
  const scenarios = getLibraryScenarios().filter((scenario) => scenario.resourceSlugs.some((slug) => resources.some((resource) => resource.slug === slug)));
  return <ResourceShell><main className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8"><nav className="text-sm opacity-65"><a href="/library" className="underline">Library</a> / Category</nav><h1 className="mt-8 text-4xl font-semibold sm:text-6xl">{category.name}</h1><p className="mt-4 max-w-3xl text-lg leading-8 opacity-75">{category.summary}</p>{category.subcategories.length > 0 && <nav aria-label="Subcategories" className="mt-6 flex flex-wrap gap-2">{category.subcategories.map((sub) => <a key={sub.slug} href={`/library/categories/${category.slug}/${sub.slug}`} className="rounded-full border border-current/25 px-3 py-1.5 text-sm">{sub.name}</a>)}</nav>}<section className="mt-12"><h2 className="text-2xl font-semibold">Reviewed resources</h2><ul className="mt-3">{resources.map((resource) => <ResourceRow key={resource.slug} resource={resource} />)}</ul></section>{scenarios.length > 0 && <section className="mt-10 border-t border-current/15 pt-8"><h2 className="text-2xl font-semibold">Related workflows</h2><ul className="mt-3 space-y-2">{scenarios.map((scenario) => <li key={scenario.slug}><a className="underline" href={`/library/scenarios/${scenario.slug}`}>{scenario.name}</a></li>)}</ul></section>}</main></ResourceShell>;
}
