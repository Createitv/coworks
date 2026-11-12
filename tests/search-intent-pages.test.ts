import assert from "node:assert/strict";
import test from "node:test";
import sitemap from "../src/app/sitemap";
import { getAllDocs } from "../src/lib/markdown";

const expectedIntentPages = [
  "meeting-prep",
  "weekly-report",
  "email-drafts",
  "report-to-slides",
  "google-workspace-connector",
  "microsoft-365-connector",
] as const;

test("publishes each priority search intent as a discoverable guide", () => {
  const docs = getAllDocs();
  const bySlug = new Map(docs.map((doc) => [doc.slug, doc]));

  for (const slug of expectedIntentPages) {
    const doc = bySlug.get(slug);
    assert.ok(doc, `missing guide: ${slug}`);
    assert.ok(doc.answer.length >= 80, `${slug} needs a useful quick answer`);
    assert.ok(doc.description.length >= 100, `${slug} needs a search description`);
    assert.ok(doc.keywords.length >= 2, `${slug} needs a primary keyword and close variant`);
  }
});

test("gives every priority search intent a unique title and primary keyword", () => {
  const docs = getAllDocs().filter((doc) => expectedIntentPages.includes(doc.slug as (typeof expectedIntentPages)[number]));
  assert.equal(new Set(docs.map((doc) => doc.title.toLowerCase())).size, expectedIntentPages.length);
  assert.equal(new Set(docs.map((doc) => doc.keywords[0]?.toLowerCase())).size, expectedIntentPages.length);
});

test("includes every priority search intent in the XML sitemap", () => {
  const urls = new Set(sitemap().map((entry) => entry.url));
  for (const slug of expectedIntentPages) {
    assert.ok(urls.has(`https://www.coworks.dev/docs/${slug}`), `sitemap missing ${slug}`);
  }
});
