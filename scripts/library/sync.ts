import { mkdir, rename, unlink, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { fetchAnthropicMarketplace } from "./adapters/anthropic-marketplace";
import { fetchKnowledgeWorkPlugins } from "./adapters/knowledge-work";
import { normalizeCandidate, type LibraryCandidate, type RemoteCandidate } from "./normalize";

type Adapter = () => Promise<RemoteCandidate[]>;

export async function syncCandidates({ adapters, target }: { adapters: Adapter[]; target: string }): Promise<LibraryCandidate[]> {
  const batches = await Promise.all(adapters.map((adapter) => adapter()));
  const bySource = new Map<string, LibraryCandidate>();
  for (const remote of batches.flat()) {
    const candidate = normalizeCandidate(remote);
    if (!bySource.has(candidate.sourceKey)) bySource.set(candidate.sourceKey, candidate);
  }
  const candidates = [...bySource.values()].sort((a, b) => a.name.localeCompare(b.name));
  await mkdir(path.dirname(target), { recursive: true });
  const temporary = `${target}.tmp-${process.pid}`;
  try {
    await writeFile(temporary, `${JSON.stringify({ generatedAt: new Date().toISOString(), candidates }, null, 2)}\n`);
    await rename(temporary, target);
  } catch (error) {
    await unlink(temporary).catch(() => undefined);
    throw error;
  }
  return candidates;
}

async function main() {
  const target = path.join(process.cwd(), "src/data/library/candidates.json");
  const candidates = await syncCandidates({ adapters: [fetchAnthropicMarketplace, fetchKnowledgeWorkPlugins], target });
  process.stdout.write(`Synced ${candidates.length} library candidates.\n`);
}

if (process.argv[1] && fileURLToPath(import.meta.url) === path.resolve(process.argv[1])) main().catch((error) => { console.error(error); process.exitCode = 1; });
