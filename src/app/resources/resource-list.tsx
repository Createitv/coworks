"use client";

import Link from "next/link";
import { useState } from "react";
import type { ResourceEntry } from "@/lib/resource-catalog";

const filters = ["All", "Guide", "Video", "Resource"] as const;

export function ResourceList({ entries }: { entries: ResourceEntry[] }) {
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState<(typeof filters)[number]>("All");
  const words = query.trim().toLowerCase().split(/\s+/);
  const results = entries.filter((entry) => {
    const text = [entry.title, entry.summary, entry.topic, ...(entry.keywords ?? [])].join(" ").toLowerCase();
    return (filter === "All" || entry.kind === filter) && words.every((word) => text.includes(word));
  });
  return (
    <>
      <label className="mt-7 block max-w-lg">
        <span className="font-semibold">Search resources</span>
        <input type="search" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Try receipts, plugins, or pricing" className="mt-2 block w-full rounded-xl border border-current/25 bg-transparent px-4 py-3" />
      </label>
      <div className="mt-4 flex flex-wrap gap-2" role="group" aria-label="Resource type">
        {filters.map((type) => <button key={type} type="button" aria-pressed={type === filter} onClick={() => setFilter(type)} className="rounded-full border border-current/25 px-4 py-2 text-sm aria-pressed:bg-[#f7d793] aria-pressed:text-black">{type === "All" ? "All" : `${type}s`}</button>)}
      </div>
      <p className="mt-5 text-sm opacity-75" role="status">{results.length ? `${results.length} ${results.length === 1 ? "result" : "results"}` : "No results. Try a shorter phrase or choose All."}</p>
      <ul className="mt-3 grid gap-4 md:grid-cols-2">
        {results.map((entry) => (
          <li key={entry.href} className="rounded-2xl border border-current/15 p-5">
            <p className="text-sm opacity-75">{entry.kind} · {entry.topic}</p>
            <h2 className="mt-1 text-xl font-semibold"><Link href={entry.href} className="underline-offset-4 hover:underline">{entry.title}</Link></h2>
            <p className="mt-2 leading-relaxed opacity-80">{entry.summary}</p>
            {entry.markdown && <a href={entry.markdown} className="mt-3 inline-block text-sm underline underline-offset-4">Markdown</a>}
          </li>
        ))}
      </ul>
    </>
  );
}
