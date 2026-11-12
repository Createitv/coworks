import assert from "node:assert/strict";
import test from "node:test";
import { renderToStaticMarkup } from "react-dom/server";
import { LibraryBrowser } from "../src/app/library/library-browser";
import { LibraryHeader } from "../src/components/library/LibraryHeader";
import { getLibraryCategories, getLibraryScenarios, getPublishedResources } from "../src/lib/library/catalog";

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
