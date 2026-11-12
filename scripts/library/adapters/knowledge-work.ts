import type { RemoteCandidate } from "../normalize";

const repo = "https://github.com/anthropics/knowledge-work-plugins";
const api = "https://api.github.com/repos/anthropics/knowledge-work-plugins/contents";

export async function fetchKnowledgeWorkPlugins(fetchImpl: typeof fetch = fetch): Promise<RemoteCandidate[]> {
  const response = await fetchImpl(api, { headers: { Accept: "application/vnd.github+json" }, signal: AbortSignal.timeout(15_000) });
  if (!response.ok) throw new Error(`Knowledge-work repository returned ${response.status}`);
  const body = await response.json() as unknown;
  if (!Array.isArray(body)) throw new Error("Knowledge-work repository response is malformed");
  return body.flatMap((value): RemoteCandidate[] => {
    if (!value || typeof value !== "object") return [];
    const item = value as Record<string, unknown>;
    if (item.type !== "dir" || typeof item.name !== "string" || String(item.name).startsWith(".")) return [];
    const name = item.name.replace(/-/g, " ").replace(/\b\w/g, (letter) => letter.toUpperCase());
    return [{ name, description: `${name} workflows from Anthropic's knowledge-work plugin collection.`, type: "plugin", repository: repo, sourcePath: item.name, sourceClass: "anthropic" }];
  });
}
