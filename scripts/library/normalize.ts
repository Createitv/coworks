export type RemoteCandidate = {
  name: string;
  description: string;
  type: "plugin" | "skill" | "connector" | "mcp" | "subagent" | "command";
  repository: string;
  sourcePath?: string;
  sourceClass: "anthropic" | "vendor" | "community";
  homepage?: string;
};

export type LibraryCandidate = {
  sourceKey: string;
  name: string;
  summary: string;
  type: RemoteCandidate["type"];
  sourceClass: RemoteCandidate["sourceClass"];
  sourceRepository: string;
  sourcePath?: string;
  sourceUrl: string;
  homepage?: string;
};

function plainText(value: string): string {
  return value.replace(/<[^>]*>/g, "").replace(/\s+/g, " ").trim();
}

export function normalizeCandidate(input: RemoteCandidate): LibraryCandidate {
  if (!input || typeof input !== "object") throw new Error("candidate must be an object");
  if (!input.repository || typeof input.repository !== "string") throw new Error("candidate.repository is required");
  const match = input.repository.match(/^https:\/\/github\.com\/([^/]+\/[^/#?]+?)(?:\.git)?$/i);
  if (!match) throw new Error(`candidate.repository must be an HTTPS GitHub repository: ${input.repository}`);
  if (!input.name || !input.description || !input.type || !input.sourceClass) throw new Error("candidate name, description, type, and sourceClass are required");
  const sourceRepository = match[1].replace(/\.git$/i, "");
  const sourcePath = input.sourcePath?.replace(/^\/+|\/+$/g, "");
  return {
    sourceKey: `${sourceRepository}:${sourcePath ?? ""}`,
    name: plainText(input.name),
    summary: plainText(input.description),
    type: input.type,
    sourceClass: input.sourceClass,
    sourceRepository,
    sourcePath,
    sourceUrl: `https://github.com/${sourceRepository}${sourcePath ? `/tree/main/${sourcePath}` : ""}`,
    homepage: input.homepage,
  };
}
