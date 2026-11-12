import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ResourceShell } from "@/components/layout/ResourceShell";
import { ResourceDetail } from "@/components/library/ResourceDetail";
import { getLibraryResource, getPublishedResources } from "@/lib/library/catalog";
import { publicPageMetadata } from "@/lib/page-metadata";

export function generateStaticParams() { return getPublishedResources().map(({ slug }) => ({ slug })); }

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const resource = getLibraryResource((await params).slug);
  return resource ? publicPageMetadata(`${resource.name}: Compatibility, Setup and Safety | Coworks.dev`, resource.summary, `/library/resources/${resource.slug}`) : {};
}

export default async function LibraryResourcePage({ params }: { params: Promise<{ slug: string }> }) {
  const resource = getLibraryResource((await params).slug);
  if (!resource) notFound();
  return <ResourceShell><ResourceDetail resource={resource} /></ResourceShell>;
}
