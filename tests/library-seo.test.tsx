import assert from "node:assert/strict";
import test from "node:test";
import { renderToStaticMarkup } from "react-dom/server";
import sitemap from "../src/app/sitemap";
import { GET as getLibraryJson } from "../src/app/library.json/route";
import { GET as getKnowledge } from "../src/app/knowledge/[slug]/route";
import { generateMetadata } from "../src/app/library/resources/[slug]/page";
import { LibraryResourceJsonLd } from "../src/components/seo/JsonLd";
import { getKnowledgeIndex } from "../src/lib/resource-catalog";
import { getLibraryCategories, getLibraryScenarios, getPublishedResources } from "../src/lib/library/catalog";
import { guideNavigation } from "../src/lib/guide-navigation";

test("adds each published library route exactly once to the sitemap", () => {
  const urls = sitemap().map((entry) => entry.url);
  const expected = [
    "https://www.coworks.dev/library",
    ...getLibraryCategories().map((item) => `https://www.coworks.dev/library/categories/${item.slug}`),
    ...getLibraryCategories().flatMap((category) => category.subcategories.map((sub) => `https://www.coworks.dev/library/categories/${category.slug}/${sub.slug}`)),
    ...getLibraryScenarios().map((item) => `https://www.coworks.dev/library/scenarios/${item.slug}`),
    ...getPublishedResources().map((item) => `https://www.coworks.dev/library/resources/${item.slug}`),
  ];
  for (const url of expected) assert.equal(urls.filter((entry) => entry === url).length, 1, url);
});

test("exports only reviewed published resources as JSON", async () => {
  const response = getLibraryJson();
  const body = await response.json();
  assert.equal(body.resources.length, getPublishedResources().length);
  assert.ok(body.resources.every((item: { publicationStatus: string }) => item.publicationStatus === "published"));
});

test("exports resource Markdown with citations and canonical headers", async () => {
  const response = await getKnowledge(new Request("https://www.coworks.dev/knowledge/library-google-workspace.md"), { params: Promise.resolve({ slug: "library-google-workspace.md" }) });
  const text = await response.text();
  assert.equal(response.status, 200);
  assert.match(text, /## Source and provenance/);
  assert.match(text, /https:\/\/support\.claude\.com/);
  assert.match(response.headers.get("Link") ?? "", /library\/resources\/google-workspace/);
});

test("uses a unique self canonical on resource details", async () => {
  const metadata = await generateMetadata({ params: Promise.resolve({ slug: "google-workspace" }) });
  assert.equal(metadata.alternates?.canonical, "https://www.coworks.dev/library/resources/google-workspace");
});

test("escapes untrusted strings inside library JSON-LD", () => {
  const resource = { ...getPublishedResources()[0], name: "</script><script>alert(1)</script>" };
  const html = renderToStaticMarkup(<LibraryResourceJsonLd resource={resource} />);
  assert.doesNotMatch(html, /<script>alert/);
  assert.match(html, /\\u003c\/script/);
});

test("links the library from public navigation and the knowledge catalog", () => {
  assert.ok(guideNavigation.some((item) => "href" in item ? item.href === "/library" : item.links.some((link) => link.href === "/library")));
  assert.ok(getKnowledgeIndex().resources.some((item) => item.url === "https://www.coworks.dev/library"));
});
