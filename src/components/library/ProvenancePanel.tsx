import type { LibraryResource } from "@/lib/library/types";

export function ProvenancePanel({ resource }: { resource: LibraryResource }) {
  const label = resource.sourceClass === "anthropic" ? "Anthropic source" : resource.sourceClass === "vendor" ? "Vendor source" : "Community resource";
  return (
    <section aria-labelledby="provenance-heading" className="border-l-4 border-[#2f6b4f] bg-[#fffdf6] p-5 dark:bg-[#15120f]">
      <h2 id="provenance-heading" className="text-lg font-semibold">Source and provenance</h2>
      <dl className="mt-3 grid gap-2 text-sm sm:grid-cols-2">
        <div><dt className="font-semibold">Source class</dt><dd>{label}</dd></div>
        <div><dt className="font-semibold">Review status</dt><dd>{resource.verificationStatus.replace("-", " ")}</dd></div>
        {resource.sourceRepository && <div><dt className="font-semibold">Repository</dt><dd>{resource.sourceRepository}</dd></div>}
        <div><dt className="font-semibold">Last review</dt><dd>Checked {resource.checkedAt}</dd></div>
      </dl>
      {resource.sourceClass === "community" && <p className="mt-4 border-t border-black/10 pt-4 text-sm dark:border-white/15"><strong>Community resource.</strong> Read and inspect the source before installing it. Coworks.dev does not treat a public listing as a security guarantee.</p>}
      <a href={resource.sourceUrl} rel="noopener noreferrer" className="mt-4 inline-block font-semibold underline underline-offset-4">Open original source</a>
    </section>
  );
}
