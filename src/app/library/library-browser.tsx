"use client";

import { useEffect, useMemo, useState } from "react";
import { LibraryFilters } from "@/components/library/LibraryFilters";
import { ResourceRow } from "@/components/library/ResourceRow";
import { filterLibraryResources, queryFromSearchParams, type LibraryQuery } from "@/lib/library/query";
import type { LibraryCategory, LibraryResource, LibraryScenario } from "@/lib/library/types";

export function LibraryBrowser({ resources, categories, scenarios, initialQuery }: { resources: LibraryResource[]; categories: LibraryCategory[]; scenarios: LibraryScenario[]; initialQuery: LibraryQuery }) {
  const [query, setQuery] = useState(initialQuery);
  const [urlReady, setUrlReady] = useState(false);
  const matches = useMemo(() => filterLibraryResources(resources, query), [resources, query]);
  useEffect(() => {
    setQuery(queryFromSearchParams(new URLSearchParams(window.location.search)));
    setUrlReady(true);
  }, []);
  useEffect(() => {
    if (!urlReady) return;
    const params = new URLSearchParams();
    if (query.search) params.set("q", query.search);
    if (query.compatibility) params.set("compatibility", query.compatibility);
    if (query.type) params.set("type", query.type);
    if (query.sourceClass) params.set("source", query.sourceClass);
    if (query.category) params.set("category", query.category);
    window.history.replaceState(null, "", `${window.location.pathname}${params.size ? `?${params}` : ""}`);
  }, [query, urlReady]);
  return (
    <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 sm:px-6 lg:grid-cols-[15rem_minmax(0,1fr)] lg:px-8">
      <aside aria-label="Resource categories" className="min-w-0 lg:border-r lg:border-black/15 lg:pr-6 dark:lg:border-white/15">
        <p className="font-semibold">Browse by task</p>
        <div className="mt-3 flex gap-2 overflow-x-auto pb-2 lg:grid">
          <button type="button" onClick={() => setQuery({ ...query, category: "" })} aria-pressed={!query.category} className="whitespace-nowrap rounded-lg px-3 py-2 text-left text-sm aria-pressed:bg-[#c08b2d] aria-pressed:text-white">All resources</button>
          {categories.map((category) => <button key={category.slug} type="button" onClick={() => setQuery({ ...query, category: category.slug })} aria-pressed={query.category === category.slug} className="whitespace-nowrap rounded-lg px-3 py-2 text-left text-sm aria-pressed:bg-[#c08b2d] aria-pressed:text-white">{category.name}</button>)}
        </div>
      </aside>
      <main className="min-w-0">
        <section aria-labelledby="scenario-heading" className="border-b border-black/15 pb-8 dark:border-white/15">
          <h2 id="scenario-heading" className="text-2xl font-semibold">Start with a complete workflow</h2>
          <div className="mt-4 grid gap-x-8 gap-y-3 sm:grid-cols-2">{scenarios.map((scenario) => <a key={scenario.slug} href={`/library/scenarios/${scenario.slug}`} className="border-l-2 border-[#c08b2d] pl-3"><span className="font-semibold">{scenario.name}</span><span className="mt-1 block text-sm opacity-65">{scenario.summary}</span></a>)}</div>
        </section>
        <section className="py-8" aria-labelledby="directory-heading">
          <h2 id="directory-heading" className="text-2xl font-semibold">Reviewed resource directory</h2>
          <label className="mt-5 grid max-w-2xl gap-2 font-semibold">Search by task or resource name
            <input type="search" value={query.search ?? ""} onChange={(event) => setQuery({ ...query, search: event.target.value })} placeholder="Try meeting brief, Google Drive, or SEO" className="rounded-xl border border-current/30 bg-[#fffdf6] px-4 py-3 font-normal dark:bg-[#15120f]" />
          </label>
          <details className="mt-4 rounded-xl border border-current/20 p-4" open><summary className="cursor-pointer font-semibold">Filter reviewed resources</summary><div className="mt-4"><LibraryFilters query={query} onChange={setQuery} /></div></details>
          <p className="mt-6 text-sm opacity-70" role="status">{matches.length} {matches.length === 1 ? "resource" : "resources"}</p>
          {matches.length ? <ul><>{matches.map((resource) => <ResourceRow key={resource.slug} resource={resource} />)}</></ul> : <div className="mt-4 border-l-4 border-[#c08b2d] py-2 pl-4"><p className="font-semibold">No reviewed resources match these filters.</p><p className="mt-1 opacity-70">Clear a filter or try a shorter phrase.</p></div>}
        </section>
      </main>
    </div>
  );
}
