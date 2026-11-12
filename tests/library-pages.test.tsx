import assert from "node:assert/strict";
import test from "node:test";
import { renderToStaticMarkup } from "react-dom/server";
import { LibraryBrowser } from "../src/app/library/library-browser";
import { LibraryHeader } from "../src/components/library/LibraryHeader";
import { getLibraryCategories, getLibraryScenarios, getPublishedResources } from "../src/lib/library/catalog";
import { generateStaticParams as resourceParams } from "../src/app/library/resources/[slug]/page";
import { generateStaticParams as categoryParams } from "../src/app/library/categories/[category]/page";
import { generateStaticParams as scenarioParams } from "../src/app/library/scenarios/[scenario]/page";
import { ResourceDetail } from "../src/components/library/ResourceDetail";

function render(initialQuery = {}) {
  return renderToStaticMarkup(<><LibraryHeader /><LibraryBrowser resources={getPublishedResources()} categories={getLibraryCategories()} scenarios={getLibraryScenarios()} initialQuery={initialQuery} /></>);
}

test("renders the resource directory with task navigation and trust filters", () => {
  const html = render();
  assert.equal((html.match(/<h1/g) ?? []).length, 1);
  assert.match(html, /Find a trusted resource for the work in front of you/);
  assert.match(html, /Search by task or resource name/);
  assert.match(html, /Cowork compatible/);
  assert.match(html, /Source and provenance/);
  assert.match(html, /Work and planning/);
  assert.match(html, /Prepare for a meeting/);
  assert.match(html, /21 resources/);
});

test("renders a directed empty state for filters with no matches", () => {
  const html = render({ search: "does-not-exist" });
  assert.match(html, /No reviewed resources match these filters/);
  assert.match(html, /Clear a filter or try a shorter phrase/);
});

test("generates reviewed category, scenario, and resource routes", () => {
  assert.equal(resourceParams().length, getPublishedResources().length);
  assert.equal(categoryParams().length, getLibraryCategories().length);
  assert.equal(scenarioParams().length, getLibraryScenarios().length);
  assert.ok(resourceParams().every(({ slug }) => getPublishedResources().some((resource) => resource.slug === slug)));
});

test("renders the complete trust contract on a resource detail", () => {
  const resource = getPublishedResources().find((item) => item.slug === "google-workspace");
  assert.ok(resource);
  const html = renderToStaticMarkup(<ResourceDetail resource={resource} />);
  assert.equal((html.match(/<h1/g) ?? []).length, 1);
  assert.match(html, /Compatibility evidence/);
  assert.match(html, /Source and provenance/);
  assert.match(html, /Permissions to review/);
  assert.match(html, /Risks and limits/);
  assert.match(html, /Safe first test/);
  assert.match(html, /Checked 2026-11-12/);
  assert.match(html, /Open original source/);
});

test("warns before using a community resource", () => {
  const base = getPublishedResources()[0];
  const html = renderToStaticMarkup(<ResourceDetail resource={{ ...base, sourceClass: "community" }} />);
  assert.match(html, /Community resource/);
  assert.match(html, /inspect the source/i);
});
