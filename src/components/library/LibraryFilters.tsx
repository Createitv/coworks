import type { LibraryQuery } from "@/lib/library/query";

export function LibraryFilters({ query, onChange }: { query: LibraryQuery; onChange: (next: LibraryQuery) => void }) {
  return (
    <div className="grid gap-3 sm:grid-cols-3">
      <label className="grid gap-1 text-sm font-semibold">Compatibility
        <select value={query.compatibility ?? ""} onChange={(event) => onChange({ ...query, compatibility: event.target.value as LibraryQuery["compatibility"] })} className="rounded-lg border border-current/25 bg-transparent px-3 py-2 font-normal">
          <option value="">All compatibility</option><option value="cowork">Cowork compatible</option><option value="claude-web">Claude web</option><option value="claude-code">Claude Code</option>
        </select>
      </label>
      <label className="grid gap-1 text-sm font-semibold">Resource type
        <select value={query.type ?? ""} onChange={(event) => onChange({ ...query, type: event.target.value as LibraryQuery["type"] })} className="rounded-lg border border-current/25 bg-transparent px-3 py-2 font-normal">
          <option value="">All types</option><option value="plugin">Plugin</option><option value="skill">Skill</option><option value="connector">Connector</option><option value="mcp">MCP</option><option value="subagent">Subagent</option><option value="command">Command</option>
        </select>
      </label>
      <label className="grid gap-1 text-sm font-semibold">Source and provenance
        <select value={query.sourceClass ?? ""} onChange={(event) => onChange({ ...query, sourceClass: event.target.value as LibraryQuery["sourceClass"] })} className="rounded-lg border border-current/25 bg-transparent px-3 py-2 font-normal">
          <option value="">All sources</option><option value="anthropic">Anthropic</option><option value="vendor">Vendor</option><option value="community">Community</option>
        </select>
      </label>
    </div>
  );
}
