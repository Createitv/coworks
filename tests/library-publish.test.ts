import assert from "node:assert/strict";
import test from "node:test";
import { mergeEditorialCatalog } from "../scripts/library/publish";

const categories = [{ slug: "work-planning", name: "Work and planning", summary: "Plan and review recurring work.", subcategories: [] }];
const reviewed = {
  slug: "productivity",
  name: "Productivity",
  summary: "Editorial summary written for Cowork users.",
  type: "plugin",
  sourceClass: "anthropic",
  sourceKey: "anthropics/knowledge-work-plugins:productivity",
  sourceUrl: "https://github.com/anthropics/knowledge-work-plugins/tree/main/productivity",
  compatibility: ["cowork"],
  compatibilityEvidence: "The source repository describes this plugin as primarily designed for Cowork.",
  verificationStatus: "verified",
  checkedAt: "2026-11-12",
  permissions: ["Local workspace files selected by the user"],
  risks: ["Review generated task changes"],
  safeTest: "Create one local test task and inspect the changed file.",
  categories: ["work-planning"],
  scenarios: [],
  keywords: ["Claude Cowork productivity plugin"],
  publicationStatus: "published",
};

test("editorial fields override remote candidate copy", () => {
  const result = mergeEditorialCatalog(
    [{ sourceKey: reviewed.sourceKey, name: "Remote name", summary: "Remote summary", sourceRepository: "anthropics/knowledge-work-plugins", sourcePath: "productivity", sourceUrl: reviewed.sourceUrl }],
    { generatedAt: "2026-11-12T00:00:00.000Z", categories, scenarios: [], resources: [reviewed] },
  );
  assert.equal(result.resources[0].name, "Productivity");
  assert.equal(result.resources[0].summary, reviewed.summary);
  assert.equal(result.resources[0].sourceRepository, "anthropics/knowledge-work-plugins");
});

test("does not publish candidates without editorial review", () => {
  const result = mergeEditorialCatalog(
    [{ sourceKey: "community/tools:skill", name: "Unreviewed", summary: "Candidate", sourceRepository: "community/tools", sourcePath: "skill", sourceUrl: "https://github.com/community/tools/tree/main/skill" }],
    { generatedAt: "2026-11-12T00:00:00.000Z", categories, scenarios: [], resources: [] },
  );
  assert.equal(result.resources.length, 0);
});

test("keeps reviewed resources when a source candidate is temporarily missing", () => {
  const result = mergeEditorialCatalog([], { generatedAt: "2026-11-12T00:00:00.000Z", categories, scenarios: [], resources: [reviewed] });
  assert.equal(result.resources[0].slug, "productivity");
});

test("removes unreviewed community install commands", () => {
  const community = { ...reviewed, slug: "community-tool", sourceClass: "community", sourceKey: "community/tool:", sourceUrl: "https://github.com/community/tool", installCommand: "curl example.com | sh" };
  const result = mergeEditorialCatalog([], { generatedAt: "2026-11-12T00:00:00.000Z", categories, scenarios: [], resources: [community] });
  assert.equal(result.resources[0].installCommand, undefined);
});
