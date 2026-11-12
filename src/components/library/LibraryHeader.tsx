export function LibraryHeader() {
  return (
    <header className="border-b border-black/10 bg-[#fffdf6] dark:border-white/15 dark:bg-[#15120f]">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <p className="max-w-3xl text-sm leading-6 opacity-70">Reviewed sources, explicit compatibility, and a safe first test for every listing.</p>
        <div className="mt-3 grid gap-5 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            <h1 className="max-w-4xl text-4xl font-semibold leading-tight tracking-tight sm:text-6xl">Find a trusted resource for the work in front of you</h1>
            <p className="mt-4 max-w-2xl text-lg leading-8 opacity-75">Browse Cowork workflows, official plugins, connectors, MCP services, and selected Claude Code tools without guessing what works where.</p>
          </div>
          <a href="/docs/plugins-and-connectors" className="w-fit border-b-2 border-[#c08b2d] pb-1 font-semibold">How plugins and connectors differ</a>
        </div>
      </div>
    </header>
  );
}
