import { readFile, rename, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { validateLibraryCatalog } from "../../src/lib/library/schema";
import type { LibraryCatalog, LibraryResource } from "../../src/lib/library/types";
import type { LibraryCandidate } from "./normalize";

type EditorialResource = LibraryResource & { sourceKey?: string; installReviewed?: boolean };
type EditorialCatalog = Omit<LibraryCatalog, "resources"> & { resources: EditorialResource[] };

export function mergeEditorialCatalog(candidates: Partial<LibraryCandidate>[], editorial: EditorialCatalog): LibraryCatalog {
  const bySource = new Map(candidates.map((candidate) => [candidate.sourceKey, candidate]));
  const resources = editorial.resources.map((entry) => {
    const candidate = entry.sourceKey ? bySource.get(entry.sourceKey) : undefined;
    const { sourceKey: _sourceKey, installReviewed, ...reviewed } = entry;
    const merged = {
      ...reviewed,
      sourceRepository: reviewed.sourceRepository ?? candidate?.sourceRepository,
      sourcePath: reviewed.sourcePath ?? candidate?.sourcePath,
      sourceUrl: reviewed.sourceUrl ?? candidate?.sourceUrl,
      installCommand: reviewed.sourceClass === "community" && !installReviewed ? undefined : reviewed.installCommand,
    };
    return merged;
  });
  return validateLibraryCatalog({ ...editorial, resources });
}

async function main() {
  const dataDir = path.join(process.cwd(), "src/data/library");
  const candidatesFile = JSON.parse(await readFile(path.join(dataDir, "candidates.json"), "utf8")) as { candidates?: LibraryCandidate[] };
  const editorial = JSON.parse(await readFile(path.join(dataDir, "editorial.json"), "utf8")) as EditorialCatalog;
  const catalog = mergeEditorialCatalog(candidatesFile.candidates ?? [], editorial);
  const target = path.join(dataDir, "public.json");
  const temporary = `${target}.tmp-${process.pid}`;
  await writeFile(temporary, `${JSON.stringify(catalog, null, 2)}\n`);
  await rename(temporary, target);
  process.stdout.write(`Published ${catalog.resources.length} reviewed library resources.\n`);
}

if (process.argv[1] && fileURLToPath(import.meta.url) === path.resolve(process.argv[1])) main().catch((error) => { console.error(error); process.exitCode = 1; });
