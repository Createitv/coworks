import type { LibraryResource } from "@/lib/library/types";

const sourceLabel = { anthropic: "Anthropic source", vendor: "Vendor source", community: "Community source" } as const;

export function ResourceRow({ resource }: { resource: LibraryResource }) {
  return (
    <li className="grid gap-4 border-t border-black/15 py-6 first:border-t-0 dark:border-white/15 md:grid-cols-[minmax(0,1fr)_12rem_10rem]">
      <div className="min-w-0">
        <p className="text-sm opacity-60">{resource.type}</p>
        <h2 className="mt-1 text-xl font-semibold"><a href={`/library/resources/${resource.slug}`} className="underline-offset-4 hover:underline">{resource.name}</a></h2>
        <p className="mt-2 max-w-2xl leading-7 opacity-75">{resource.summary}</p>
        <p className="mt-3 text-sm"><span className="font-semibold">Safe first test:</span> {resource.safeTest}</p>
      </div>
      <div>
        <p className="text-sm font-semibold">Compatibility</p>
        <div className="mt-2 flex flex-wrap gap-1.5">{resource.compatibility.map((item) => <span key={item} className="rounded-full border border-black/20 px-2 py-1 text-xs dark:border-white/25">{item === "cowork" ? "Cowork" : item === "claude-web" ? "Claude web" : "Claude Code"}</span>)}</div>
      </div>
      <div>
        <p className={`text-sm font-semibold ${resource.sourceClass === "anthropic" ? "text-[#2f6b4f] dark:text-[#86d2aa]" : resource.sourceClass === "community" ? "text-[#315c78] dark:text-[#8fc3e4]" : ""}`}>{sourceLabel[resource.sourceClass]}</p>
        <p className="mt-2 text-xs opacity-65">{resource.verificationStatus.replace("-", " ")}</p>
        <p className="mt-1 text-xs opacity-65">Checked {resource.checkedAt}</p>
      </div>
    </li>
  );
}
