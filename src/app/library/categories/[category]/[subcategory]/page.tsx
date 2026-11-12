import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ResourceShell } from "@/components/layout/ResourceShell";
import { ResourceRow } from "@/components/library/ResourceRow";
import { getLibraryCategories, getLibraryCategory, getLibraryResource } from "@/lib/library/catalog";
import { publicPageMetadata } from "@/lib/page-metadata";

export function generateStaticParams() { return getLibraryCategories().flatMap((category) => category.subcategories.map((sub) => ({ category: category.slug, subcategory: sub.slug }))); }

export async function generateMetadata({ params }: { params: Promise<{ category: string; subcategory: string }> }): Promise<Metadata> {
  const value = await params; const category = getLibraryCategory(value.category); const sub = category?.subcategories.find((item) => item.slug === value.subcategory);
  return category && sub ? publicPageMetadata(`${sub.name}: Claude Cowork Resources | Coworks.dev`, sub.summary, `/library/categories/${category.slug}/${sub.slug}`) : {};
}

export default async function LibrarySubcategoryPage({ params }: { params: Promise<{ category: string; subcategory: string }> }) {
  const value = await params; const category = getLibraryCategory(value.category); const sub = category?.subcategories.find((item) => item.slug === value.subcategory);
  if (!category || !sub) notFound();
  const resources = sub.resourceSlugs.map(getLibraryResource).filter((resource) => resource !== undefined);
  return <ResourceShell><main className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8"><nav className="text-sm opacity-65"><a href="/library" className="underline">Library</a> / <a href={`/library/categories/${category.slug}`} className="underline">{category.name}</a></nav><h1 className="mt-8 text-4xl font-semibold sm:text-6xl">{sub.name}</h1><p className="mt-4 max-w-3xl text-lg leading-8 opacity-75">{sub.summary}</p><p className="mt-3 text-sm opacity-65">A focused selection of {resources.length} reviewed resources for this job.</p><ul className="mt-10">{resources.map((resource) => <ResourceRow key={resource.slug} resource={resource} />)}</ul></main></ResourceShell>;
}
