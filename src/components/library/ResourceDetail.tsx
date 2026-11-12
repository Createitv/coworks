import type { LibraryResource } from "@/lib/library/types";
import { CompatibilityEvidence } from "./CompatibilityEvidence";
import { ProvenancePanel } from "./ProvenancePanel";

export function ResourceDetail({ resource }: { resource: LibraryResource }) {
  return (
    <main className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8">
      <nav aria-label="Breadcrumb" className="text-sm opacity-65"><a href="/library" className="underline">Library</a> / {resource.type}</nav>
      <p className="mt-8 text-sm font-semibold text-[#c08b2d]">{resource.type}</p>
      <h1 className="mt-2 text-4xl font-semibold tracking-tight sm:text-6xl">{resource.name}</h1>
      <p className="mt-5 max-w-3xl text-lg leading-8 opacity-75">{resource.summary}</p>
      <div className="mt-10 grid gap-10">
        <CompatibilityEvidence resource={resource} />
        <ProvenancePanel resource={resource} />
        <div className="grid gap-8 md:grid-cols-2">
          <section><h2 className="text-2xl font-semibold">Permissions to review</h2><ul className="mt-3 list-disc space-y-2 pl-5">{resource.permissions.map((item) => <li key={item}>{item}</li>)}</ul></section>
          <section><h2 className="text-2xl font-semibold">Risks and limits</h2><ul className="mt-3 list-disc space-y-2 pl-5">{resource.risks.map((item) => <li key={item}>{item}</li>)}</ul></section>
        </div>
        <section className="border-y border-black/15 py-6 dark:border-white/15"><h2 className="text-2xl font-semibold">Safe first test</h2><p className="mt-3 max-w-3xl leading-7">{resource.safeTest}</p></section>
        {resource.installCommand && <section><h2 className="text-2xl font-semibold">Reviewed install command</h2><pre className="mt-3 overflow-x-auto rounded-xl bg-black p-4 text-sm text-white"><code>{resource.installCommand}</code></pre></section>}
      </div>
    </main>
  );
}
