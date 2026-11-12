import type { LibraryResource } from "@/lib/library/types";

export function CompatibilityEvidence({ resource }: { resource: LibraryResource }) {
  return (
    <section aria-labelledby="compatibility-heading">
      <h2 id="compatibility-heading" className="text-2xl font-semibold">Compatibility evidence</h2>
      <div className="mt-3 flex flex-wrap gap-2">{resource.compatibility.map((entry) => <span key={entry} className="rounded-full border border-current/25 px-3 py-1 text-sm">{entry === "cowork" ? "Cowork" : entry === "claude-web" ? "Claude web" : "Claude Code"}</span>)}</div>
      <p className="mt-4 max-w-3xl leading-7 opacity-80">{resource.compatibilityEvidence}</p>
    </section>
  );
}
