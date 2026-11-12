# Coworks Resource Library Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build and deploy a static, provenance-first Claude Cowork resource library with categories, scenarios, resource details, search, source synchronization, SEO, and AI-readable outputs.

**Architecture:** Approved adapters fetch metadata into a candidate snapshot, editorial overrides determine compatibility and publication, and validation produces a committed public JSON catalog. Next.js statically generates the library, category, scenario, resource, JSON, Markdown, sitemap, and navigation outputs from that catalog.

**Tech Stack:** Next.js 16 App Router, React 19, TypeScript, Node native `fetch`, Tailwind CSS, Node test runner through `tsx`, GitHub Actions, Vercel.

**Spec:** `docs/superpowers/specs/2026-11-12-resource-marketplace-design.md`

## Global Constraints

- Preserve the current Coworks.dev visual language, navigation, favicon, documentation, videos, and existing `/resources` behavior.
- Do not copy competitor text, taxonomy descriptions, or UI implementation.
- Do not execute third-party repository content during synchronization.
- Only records with `publicationStatus: "published"` may enter public routes or exports.
- Every published resource must include compatibility evidence, source provenance, checked date, permissions, risks, and a safe first test.
- Use self-referencing canonical URLs for every indexable page.
- Preserve all unrelated dirty-worktree changes.

## Review Focus

- A remote description containing HTML or prompt instructions must render as escaped text and never affect sync behavior.
- A source outage or malformed response must fail the candidate refresh without deleting the committed public catalog.
- Duplicate repositories and paths must resolve deterministically without producing duplicate public slugs.
- Draft or archived records must stay out of routes, search, JSON, Markdown, related links, and sitemap.
- Mobile filters, zero-result states, and keyboard focus must remain usable at 320 CSS pixels.

---

### Task 1: Catalog schema and validation

**Files:**
- Create: `src/lib/library/types.ts`
- Create: `src/lib/library/schema.ts`
- Create: `src/data/library/public.json`
- Test: `tests/library-schema.test.ts`

**Interfaces:**
- Produces: `LibraryResource`, `LibraryCategory`, `LibraryScenario`, `validateLibraryCatalog(input: unknown): LibraryCatalog`.

- [ ] **Step 1: Write the failing schema tests**

Test a valid published record, duplicate slug, HTTP source URL, empty compatibility evidence, missing checked date, invalid enum, and a scenario referencing a draft resource.

- [ ] **Step 2: Run the test and verify RED**

Run: `pnpm exec tsx --test tests/library-schema.test.ts`
Expected: FAIL because the library schema does not exist.

- [ ] **Step 3: Implement types, validation, and a minimal empty catalog**

Create `validateLibraryCatalog(input: unknown): LibraryCatalog` without adding a validation dependency. Return normalized data and throw errors that identify the failing record and field.

- [ ] **Step 4: Run the test and verify GREEN**

Run: `pnpm exec tsx --test tests/library-schema.test.ts`
Expected: all schema tests pass.

- [ ] **Step 5: Commit**

Commit: `feat: add resource library catalog schema`

### Task 2: Source adapters and safe synchronization

**Files:**
- Create: `scripts/library/sync.ts`
- Create: `scripts/library/adapters/anthropic-marketplace.ts`
- Create: `scripts/library/adapters/knowledge-work.ts`
- Create: `scripts/library/normalize.ts`
- Create: `src/data/library/candidates.json`
- Modify: `package.json`
- Test: `tests/library-sync.test.ts`

**Interfaces:**
- Consumes: `LibraryResource` draft fields from Task 1.
- Produces: `normalizeCandidate(input: RemoteCandidate): LibraryCandidate` and `pnpm library:sync`.

- [ ] **Step 1: Write failing adapter and normalization tests**

Use local fixtures for successful responses, remote HTML in descriptions, duplicate repository paths, malformed JSON, and a simulated source timeout. Assert that candidates are escaped plain strings and a failed sync does not overwrite the public catalog.

- [ ] **Step 2: Run the test and verify RED**

Run: `pnpm exec tsx --test tests/library-sync.test.ts`
Expected: FAIL because adapters and normalization are missing.

- [ ] **Step 3: Implement approved-source adapters**

Fetch Anthropic marketplace JSON and knowledge-work repository metadata with timeouts. Normalize only metadata needed by the schema. Write candidates to a temporary file, validate, then atomically replace `candidates.json`.

- [ ] **Step 4: Add the package script**

Add `"library:sync": "tsx scripts/library/sync.ts"`.

- [ ] **Step 5: Run the test and verify GREEN**

Run: `pnpm exec tsx --test tests/library-sync.test.ts`
Expected: all sync tests pass and no remote network is used by tests.

- [ ] **Step 6: Commit**

Commit: `feat: add safe resource source synchronization`

### Task 3: Editorial seed catalog

**Files:**
- Create: `src/data/library/editorial.json`
- Modify: `src/data/library/public.json`
- Create: `scripts/library/publish.ts`
- Modify: `package.json`
- Test: `tests/library-publish.test.ts`

**Interfaces:**
- Consumes: candidate records and `validateLibraryCatalog`.
- Produces: `mergeEditorialCatalog(candidates, editorial): LibraryCatalog` and `pnpm library:publish`.

- [ ] **Step 1: Write failing publication tests**

Assert that editorial fields override remote copy, unreviewed candidates remain draft, missing candidates do not erase reviewed records, and unsafe install commands cannot enter a community record without explicit editorial approval.

- [ ] **Step 2: Run the test and verify RED**

Run: `pnpm exec tsx --test tests/library-publish.test.ts`
Expected: FAIL because publication merging is missing.

- [ ] **Step 3: Implement publication merging and seed reviewed data**

Create six categories, four scenarios, and at least twenty resources drawn first from Anthropic knowledge-work plugins, official Marketplace entries, and vendor-owned MCP sources. Write original summaries, compatibility evidence, permissions, risks, and safe tests.

- [ ] **Step 4: Run the test and verify GREEN**

Run: `pnpm exec tsx --test tests/library-publish.test.ts`
Expected: all publication tests pass and `public.json` validates.

- [ ] **Step 5: Commit**

Commit: `content: seed reviewed Cowork resource catalog`

### Task 4: Catalog query API and filters

**Files:**
- Create: `src/lib/library/catalog.ts`
- Create: `src/lib/library/query.ts`
- Test: `tests/library-query.test.ts`

**Interfaces:**
- Produces: `getPublishedResources()`, `getLibraryResource(slug)`, `getLibraryCategory(slug)`, `getLibraryScenario(slug)`, and `filterLibraryResources(resources, query)`.

- [ ] **Step 1: Write failing query tests**

Cover case-insensitive multi-word search, compatibility, type, source class, category, combined filters, an empty query, and zero results. Assert draft records are impossible to retrieve.

- [ ] **Step 2: Run the test and verify RED**

Run: `pnpm exec tsx --test tests/library-query.test.ts`
Expected: FAIL because query functions are missing.

- [ ] **Step 3: Implement catalog access and pure filtering**

Load and validate `public.json` once per server build. Keep filter functions pure so the client component can use the same behavior.

- [ ] **Step 4: Run the test and verify GREEN**

Run: `pnpm exec tsx --test tests/library-query.test.ts`
Expected: all catalog query tests pass.

- [ ] **Step 5: Commit**

Commit: `feat: add resource library search model`

### Task 5: Directory interface

**Files:**
- Create: `src/app/library/page.tsx`
- Create: `src/app/library/library-browser.tsx`
- Create: `src/components/library/LibraryHeader.tsx`
- Create: `src/components/library/ResourceRow.tsx`
- Create: `src/components/library/LibraryFilters.tsx`
- Modify: `src/app/globals.css`
- Test: `tests/library-pages.test.ts`

**Interfaces:**
- Consumes: catalog and query interfaces from Task 4.
- Produces: public `/library` page and reusable resource row/filter components.

- [ ] **Step 1: Write the failing directory page test**

Render the page and assert one H1, search label, compatibility filters, category navigation, scenario links, provenance text, result count, and a directed zero-result message.

- [ ] **Step 2: Run the test and verify RED**

Run: `pnpm exec tsx --test tests/library-pages.test.ts`
Expected: FAIL because `/library` is missing.

- [ ] **Step 3: Implement the evidence-led directory UI**

Use the spec's paper, ledger, ink, ochre, green, and blue tokens. Keep desktop category navigation narrow, results wide, and metadata aligned. On mobile use a category strip and accessible filter disclosure.

- [ ] **Step 4: Add URL-synchronized filters**

Read initial filters from search parameters and update the URL with `history.replaceState` when filters change. Search and filters must work without a server request.

- [ ] **Step 5: Run the page test and verify GREEN**

Run: `pnpm exec tsx --test tests/library-pages.test.ts`
Expected: directory assertions pass.

- [ ] **Step 6: Commit**

Commit: `feat: add resource library directory`

### Task 6: Category, scenario, and detail routes

**Files:**
- Create: `src/app/library/categories/[category]/page.tsx`
- Create: `src/app/library/categories/[category]/[subcategory]/page.tsx`
- Create: `src/app/library/scenarios/[scenario]/page.tsx`
- Create: `src/app/library/resources/[slug]/page.tsx`
- Create: `src/components/library/ProvenancePanel.tsx`
- Create: `src/components/library/CompatibilityEvidence.tsx`
- Modify: `tests/library-pages.test.ts`

**Interfaces:**
- Consumes: catalog getters and reusable resource rows.
- Produces: static params and public detail page families.

- [ ] **Step 1: Add failing route tests**

Assert static params include only published records, each page has one H1, resource pages show provenance, compatibility evidence, permissions, risks, safe test, checked date, citations, and community warnings when applicable.

- [ ] **Step 2: Run the test and verify RED**

Run: `pnpm exec tsx --test tests/library-pages.test.ts`
Expected: FAIL because route families are missing.

- [ ] **Step 3: Implement category and subcategory pages**

Generate pages from reviewed taxonomy with original introductions, resources, scenarios, and related guides.

- [ ] **Step 4: Implement scenario pages**

Show inputs, output, recommended resources, permissions, first test, checklist, and the corresponding existing workflow guide.

- [ ] **Step 5: Implement resource details**

Render remote strings as plain text. Link to sources without copying README bodies. Use provenance and compatibility components for consistent evidence presentation.

- [ ] **Step 6: Run the page test and verify GREEN**

Run: `pnpm exec tsx --test tests/library-pages.test.ts`
Expected: all route tests pass.

- [ ] **Step 7: Commit**

Commit: `feat: add resource library detail routes`

### Task 7: SEO, Markdown, JSON, and navigation

**Files:**
- Create: `src/app/library.json/route.ts`
- Create: `src/app/knowledge/library-[slug]/route.ts`
- Modify: `src/app/sitemap.ts`
- Modify: `src/app/llms.txt/route.ts`
- Modify: `src/lib/resource-catalog.ts`
- Modify: `src/components/navigation/GuideLinks.tsx`
- Modify: `src/components/navigation/Footer.tsx`
- Modify: `src/app/resources/page.tsx`
- Test: `tests/library-seo.test.ts`

**Interfaces:**
- Consumes: published catalog and route helpers.
- Produces: canonical metadata, TechArticle JSON-LD, public catalog exports, sitemap entries, and navigation links.

- [ ] **Step 1: Write failing SEO and export tests**

Assert unique self-canonicals, published-only sitemap URLs, escaped JSON-LD, valid public JSON, Markdown citations, and no draft records in any output.

- [ ] **Step 2: Run the test and verify RED**

Run: `pnpm exec tsx --test tests/library-seo.test.ts`
Expected: FAIL because exports and sitemap integration are missing.

- [ ] **Step 3: Implement metadata and structured data**

Use `TechArticle` for directory records unless the resource is verified software. Include source citations and checked date.

- [ ] **Step 4: Implement public machine-readable routes**

Add `/library.json` and one Markdown route per published resource. Link them from `llms.txt` and the knowledge catalog.

- [ ] **Step 5: Integrate navigation and sitemap**

Add Library to shared navigation and footer. Add a distinct callout from `/resources` rather than replacing its guide/video/template search.

- [ ] **Step 6: Run the test and verify GREEN**

Run: `pnpm exec tsx --test tests/library-seo.test.ts`
Expected: all SEO and export tests pass.

- [ ] **Step 7: Commit**

Commit: `feat: publish resource library SEO outputs`

### Task 8: Sync automation and operational documentation

**Files:**
- Create: `.github/workflows/library-sync.yml`
- Create: `docs/library-operations.md`
- Modify: `README.md`
- Test: `tests/library-workflow.test.ts`

**Interfaces:**
- Consumes: sync and publish commands.
- Produces: scheduled review pull request and operator runbook.

- [ ] **Step 1: Write the failing workflow contract test**

Parse the workflow and assert least-privilege permissions, scheduled and manual triggers, test-before-PR ordering, no deployment secrets, and no direct push to `main`.

- [ ] **Step 2: Run the test and verify RED**

Run: `pnpm exec tsx --test tests/library-workflow.test.ts`
Expected: FAIL because the workflow is missing.

- [ ] **Step 3: Implement the scheduled sync workflow**

Run weekly and by manual dispatch. Generate candidates, validate the public catalog, run tests, and open a review pull request only when tracked snapshots change.

- [ ] **Step 4: Write the operator runbook**

Document source tiers, editorial review, compatibility wording, archiving, rollback, local commands, optional credentials, and deployment checks.

- [ ] **Step 5: Run the test and verify GREEN**

Run: `pnpm exec tsx --test tests/library-workflow.test.ts`
Expected: workflow contract tests pass.

- [ ] **Step 6: Commit**

Commit: `chore: automate reviewed library source updates`

### Task 9: Full verification and Vercel release

**Files:**
- Modify only files required by verification findings.

**Interfaces:**
- Consumes: complete library feature.
- Produces: verified preview and production deployment.

- [ ] **Step 1: Run the complete automated suite**

Run: `pnpm test`
Expected: zero failing tests.

- [ ] **Step 2: Run the production build**

Run: `pnpm build`
Expected: exit code 0 with all library routes generated.

- [ ] **Step 3: Run local route verification**

Start the production server and verify the directory, all category and scenario pages, a sample from each resource type, JSON, Markdown, sitemap, canonical, and structured data outputs.

- [ ] **Step 4: Run visual and accessibility QA**

Check desktop, 768-pixel tablet, and 320-pixel mobile layouts. Test keyboard-only search and filters, visible focus, contrast, empty results, filter drawer, and reduced motion.

- [ ] **Step 5: Push and inspect the Vercel preview**

Confirm the preview commit, build status, static route count, noindex state, links, assets, and source fetch independence.

- [ ] **Step 6: Promote the verified deployment**

Promote the exact verified preview to production and confirm `/library`, representative detail pages, `/library.json`, Markdown, and sitemap over public HTTPS.

- [ ] **Step 7: Commit any verification-only corrections**

Commit: `fix: address resource library release findings`

