import assert from "node:assert/strict";
import test from "node:test";
import { validateLibraryCatalog } from "../src/lib/library/schema";

const resource = {
  slug: "google-drive",
  name: "Google Drive",
  summary: "Find approved files in Google Drive from a Cowork task.",
  type: "connector",
  sourceClass: "vendor",
  sourceUrl: "https://support.claude.com/example",
  compatibility: ["cowork"],
  compatibilityEvidence: "Anthropic documents this connector for Cowork.",
  verificationStatus: "verified",
  checkedAt: "2026-11-12",
  permissions: ["Read selected Drive files"],
  risks: ["Confirm the connected Google account"],
  safeTest: "Find one known file by exact title without changing it.",
  categories: ["communication"],
  scenarios: ["meeting-prep"],
  keywords: ["Claude Cowork Google Drive"],
  publicationStatus: "published",
} as const;

const catalog = {
  generatedAt: "2026-11-12T00:00:00.000Z",
  categories: [{ slug: "communication", name: "Communication", summary: "Email, calendar, files, and team messages.", subcategories: [] }],
  scenarios: [{ slug: "meeting-prep", name: "Prepare for a meeting", summary: "Build a cited brief.", resourceSlugs: ["google-drive"], guide: "/docs/meeting-prep" }],
  resources: [resource],
};

test("accepts and normalizes a valid published catalog", () => {
  const result = validateLibraryCatalog(catalog);
  assert.equal(result.resources[0].slug, "google-drive");
  assert.deepEqual(result.resources[0].compatibility, ["cowork"]);
});

test("rejects duplicate resource slugs", () => {
  assert.throws(() => validateLibraryCatalog({ ...catalog, resources: [resource, resource] }), /duplicate resource slug.*google-drive/i);
});

test("rejects non-HTTPS source URLs", () => {
  assert.throws(() => validateLibraryCatalog({ ...catalog, resources: [{ ...resource, sourceUrl: "http://example.com" }] }), /google-drive\.sourceUrl.*HTTPS/i);
});

test("requires compatibility evidence on published resources", () => {
  assert.throws(() => validateLibraryCatalog({ ...catalog, resources: [{ ...resource, compatibilityEvidence: "" }] }), /google-drive\.compatibilityEvidence/i);
});

test("requires a checked date on published resources", () => {
  assert.throws(() => validateLibraryCatalog({ ...catalog, resources: [{ ...resource, checkedAt: "" }] }), /google-drive\.checkedAt/i);
});

test("rejects invalid enum values", () => {
  assert.throws(() => validateLibraryCatalog({ ...catalog, resources: [{ ...resource, sourceClass: "mystery" }] }), /google-drive\.sourceClass/i);
});

test("prevents scenarios from referencing draft resources", () => {
  assert.throws(() => validateLibraryCatalog({ ...catalog, resources: [{ ...resource, publicationStatus: "draft" }] }), /meeting-prep.*google-drive.*published/i);
});

test("prevents subcategories from referencing missing or draft resources", () => {
  const input = structuredClone(catalog) as Record<string, any>;
  input.categories[0].subcategories = [{ slug: "email", name: "Email", summary: "Draft reviewed email.", resourceSlugs: ["missing-resource"] }];
  assert.throws(() => validateLibraryCatalog(input), /subcategory.*must be published/);
});
