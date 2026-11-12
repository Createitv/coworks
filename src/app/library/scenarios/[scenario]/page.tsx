import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ResourceShell } from "@/components/layout/ResourceShell";
import { ResourceRow } from "@/components/library/ResourceRow";
import { getLibraryResource, getLibraryScenario, getLibraryScenarios } from "@/lib/library/catalog";
import { publicPageMetadata } from "@/lib/page-metadata";

export function generateStaticParams() { return getLibraryScenarios().map(({ slug }) => ({ scenario: slug })); }

export async function generateMetadata({ params }: { params: Promise<{ scenario: string }> }): Promise<Metadata> {
  const scenario = getLibraryScenario((await params).scenario);
  return scenario ? publicPageMetadata(`${scenario.name} with Claude Cowork | Coworks.dev`, scenario.summary, `/library/scenarios/${scenario.slug}`) : {};
}

export default async function LibraryScenarioPage({ params }: { params: Promise<{ scenario: string }> }) {
  const scenario = getLibraryScenario((await params).scenario);
  if (!scenario) notFound();
  const resources = scenario.resourceSlugs.flatMap((slug) => { const resource = getLibraryResource(slug); return resource ? [resource] : []; });
  return <ResourceShell><main className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8"><nav className="text-sm opacity-65"><a href="/library" className="underline">Library</a> / Workflow</nav><h1 className="mt-8 text-4xl font-semibold sm:text-6xl">{scenario.name}</h1><p className="mt-4 max-w-3xl text-lg leading-8 opacity-75">{scenario.summary}</p><div className="mt-10 grid gap-8 md:grid-cols-2"><section><h2 className="text-2xl font-semibold">Inputs</h2><ul className="mt-3 list-disc space-y-2 pl-5">{scenario.inputs?.map((item) => <li key={item}>{item}</li>)}</ul></section><section><h2 className="text-2xl font-semibold">Expected output</h2><p className="mt-3 leading-7">{scenario.output}</p></section></div><section className="mt-10"><h2 className="text-2xl font-semibold">Recommended resources</h2><ul className="mt-3">{resources.map((resource) => <ResourceRow key={resource.slug} resource={resource} />)}</ul></section><section className="mt-10 border-y border-current/15 py-8"><h2 className="text-2xl font-semibold">Review before using the result</h2><ul className="mt-3 list-disc space-y-2 pl-5">{scenario.review?.map((item) => <li key={item}>{item}</li>)}</ul><a href={scenario.guide} className="mt-5 inline-block font-semibold underline">Open the complete workflow guide</a></section></main></ResourceShell>;
}
