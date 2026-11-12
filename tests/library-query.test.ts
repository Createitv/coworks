import assert from "node:assert/strict";
import test from "node:test";
import { getLibraryCategory, getLibraryResource, getLibraryScenario, getPublishedResources } from "../src/lib/library/catalog";
import { filterLibraryResources } from "../src/lib/library/query";

const resources = getPublishedResources();

test("searches names, summaries, and keywords case-insensitively with every word", () => {
  assert.deepEqual(filterLibraryResources(resources, { search: "GOOGLE workspace" }).map((item) => item.slug), ["google-workspace"]);
});

test("filters by compatibility, type, source, and category", () => {
  assert.ok(filterLibraryResources(resources, { compatibility: "cowork" }).every((item) => item.compatibility.includes("cowork")));
  assert.ok(filterLibraryResources(resources, { type: "mcp" }).every((item) => item.type === "mcp"));
  assert.ok(filterLibraryResources(resources, { sourceClass: "anthropic" }).every((item) => item.sourceClass === "anthropic"));
  assert.ok(filterLibraryResources(resources, { category: "communication" }).every((item) => item.categories.includes("communication")));
});

test("combines filters and returns an empty array when nothing matches", () => {
  const matches = filterLibraryResources(resources, { compatibility: "claude-code", type: "skill", sourceClass: "anthropic" });
  assert.deepEqual(matches.map((item) => item.slug), ["frontend-design-skill"]);
  assert.deepEqual(filterLibraryResources(resources, { search: "does-not-exist" }), []);
});

test("returns every resource for an empty query", () => {
  assert.equal(filterLibraryResources(resources, {} as never).length, resources.length);
});

test("catalog getters expose reviewed public records and navigation entities", () => {
  assert.equal(getLibraryResource("google-workspace")?.publicationStatus, "published");
  assert.equal(getLibraryResource("unknown"), undefined);
  assert.equal(getLibraryCategory("communication")?.name, "Communication");
  assert.equal(getLibraryScenario("meeting-prep")?.guide, "/docs/meeting-prep");
  assert.ok(resources.length >= 20);
});
