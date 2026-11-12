import type { RemoteCandidate } from "../normalize";

const url = "https://raw.githubusercontent.com/anthropics/claude-plugins-official/main/.claude-plugin/marketplace.json";

export async function fetchAnthropicMarketplace(fetchImpl: typeof fetch = fetch): Promise<RemoteCandidate[]> {
  const response = await fetchImpl(url, { signal: AbortSignal.timeout(15_000) });
  if (!response.ok) throw new Error(`Anthropic marketplace returned ${response.status}`);
  const body = await response.json() as { plugins?: unknown[] };
  if (!Array.isArray(body.plugins)) throw new Error("Anthropic marketplace response is malformed");
  return body.plugins.flatMap((value): RemoteCandidate[] => {
    if (!value || typeof value !== "object") return [];
    const item = value as Record<string, unknown>;
    const source = item.source as string | Record<string, unknown> | undefined;
    const repository = typeof source === "string"
      ? source.startsWith("http") ? source : `https://github.com/anthropics/claude-plugins-official`
      : typeof source?.url === "string" ? source.url : "https://github.com/anthropics/claude-plugins-official";
    const sourcePath = typeof source === "object" && typeof source.path === "string"
      ? source.path
      : typeof source === "string" && source.startsWith("./") ? source.slice(2) : undefined;
    if (typeof item.name !== "string" || typeof item.description !== "string") return [];
    return [{ name: item.name, description: item.description, type: "plugin", repository, sourcePath, sourceClass: "anthropic", homepage: typeof item.homepage === "string" ? item.homepage : undefined }];
  });
}
