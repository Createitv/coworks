# Coworks Resource Library Design

## Intent

Build a trustworthy, searchable library of Claude Cowork workflows, compatible plugins, connectors, MCP services, and selected Claude Code resources. The library should help a visitor answer two different questions:

1. “What can help me complete this job?”
2. “Can I safely use this named resource with Cowork?”

The feature borrows the useful information architecture of `claudecowork.im/resources` while using original copy, Coworks.dev visual language, explicit compatibility labels, source provenance, and stronger canonical and security rules.

## Goals

- Add a public `/library` directory with task-oriented discovery, search, and filters.
- Add category, scenario, and resource-detail pages with one primary search intent per page.
- Synchronize records from approved public sources into a committed local snapshot.
- Publish only resources that pass schema validation and editorial review.
- Distinguish Anthropic, vendor, and community sources.
- Distinguish verified Cowork compatibility from Claude Code-only resources.
- Generate static HTML, canonical metadata, JSON-LD, AI-readable Markdown, and sitemap entries.
- Deploy through the existing GitHub-to-Vercel workflow with no runtime database requirement.

## Non-goals

- Mirror every community skill or the competitor's thousands of generated URLs.
- Copy competitor descriptions, taxonomy text, or page layout.
- Claim that a GitHub resource works in Cowork merely because it mentions Claude.
- Install or execute third-party plugins during ingestion.
- Automatically publish records fetched from community repositories.
- Turn the directory into a transactional marketplace or accept payments.

## Product principles

### Task first

Visitors start from a job such as preparing a meeting, reviewing marketing performance, or organizing files. Product names remain available through search, but the primary navigation describes outcomes.

### Evidence beside every recommendation

Each resource shows its source repository, source class, compatibility evidence, last source check, permissions, and verification status. “Listed” means present in the directory. “Verified” means the stated compatibility evidence has been reviewed.

### Static by default

The public site reads committed JSON snapshots during build. Source outages, API limits, deleted repositories, and changed manifests cannot break a visitor's request.

### Discovery and publication are separate

The sync process may discover candidates. A candidate becomes public only after an editorial record sets `publicationStatus` to `published`.

## Information architecture

```text
/library
├── /library/categories/[category]
│   └── /library/categories/[category]/[subcategory]
├── /library/scenarios/[scenario]
└── /library/resources/[slug]

/knowledge/library-[slug].md
/library.json
```

The existing `/resources` page remains the global guide, video, and template search. It links to `/library` as the dedicated tools directory. This prevents the current cross-content search intent from competing with the new skill and connector intent.

## Initial taxonomy

The MVP uses six categories chosen for the current Coworks audience rather than duplicating the competitor's developer-heavy taxonomy.

| Category | Subcategories |
| --- | --- |
| Work and planning | Meetings, reports, project planning, task management |
| Documents and files | Documents, spreadsheets, presentations, PDFs, file organization |
| Communication | Email, calendar, Slack and Teams, customer communication |
| Research and marketing | Web research, competitor research, content, SEO and analytics |
| Business operations | CRM, sales, finance, legal and people operations |
| Build and automate | MCP, browser tools, developer tools and Claude Code |

The first four scenarios are meeting preparation, weekly reporting, email drafting, and report-to-slides. They link the workflow guides already added to the site with relevant library entries.

## Source architecture

### Tier 1: Anthropic sources

- `anthropics/knowledge-work-plugins`
- `anthropics/claude-plugins-official/.claude-plugin/marketplace.json`
- Claude Marketplace public pages when the repository manifest omits display information
- Claude Help Center pages for product compatibility and connector behavior

Tier 1 candidates can be auto-imported as drafts. They still require editorial classification and compatibility wording before publication.

### Tier 2: Vendor-owned sources

- Official MCP or plugin repositories owned by the service provider
- Official setup documentation from providers such as GitHub, Slack, HubSpot, Firecrawl, Google, and Microsoft

Tier 2 candidates can be auto-imported as drafts when the owner and official documentation agree.

### Tier 3: Community discovery

- Skills.sh API for discovery, source IDs, install URLs, duplicate flags, and optional audit records
- Direct GitHub repositories submitted or selected by an editor

Tier 3 candidates never auto-publish. The sync job stores only metadata and source links. It does not execute the repository or trust README compatibility claims without review.

### Fetching service decision

The MVP uses native `fetch` against public GitHub raw files and documented JSON endpoints. It does not need a paid crawler. GitHub API authentication is optional for higher rate limits. Skills.sh requires Vercel OIDC for its authenticated API, so that source is an optional deployment-time discovery adapter, not a build dependency.

If rendered-page extraction is later required, use Firecrawl for selected vendor documentation pages. Do not use Firecrawl to bulk-copy descriptions or copyrighted README content.

## Ingestion pipeline

```text
Approved source adapters
        │
        ▼
Fetch metadata and manifests
        │
        ▼
Normalize into candidate records
        │
        ├── reject malformed URLs and unsupported types
        ├── deduplicate by source repository + source path
        └── preserve source timestamps and hashes
        │
        ▼
Write candidate snapshot
        │
        ▼
Merge editorial overrides
        │
        ├── compatibility decision
        ├── original summary and task classification
        ├── permission and risk notes
        └── publication status
        │
        ▼
Validate public catalog
        │
        ▼
Commit generated public snapshot
        │
        ▼
Next.js static generation and Vercel deploy
```

Synchronization runs locally or in a scheduled GitHub Action and opens a reviewable pull request. Vercel builds only from the committed public snapshot. A failed sync does not remove the last known-good catalog.

## Data contract

```ts
type ResourceType =
  | "plugin"
  | "skill"
  | "connector"
  | "mcp"
  | "subagent"
  | "command";

type Compatibility = "cowork" | "claude-web" | "claude-code";
type SourceClass = "anthropic" | "vendor" | "community";
type VerificationStatus = "verified" | "source-reviewed" | "unverified";
type PublicationStatus = "draft" | "published" | "archived";

interface LibraryResource {
  slug: string;
  name: string;
  summary: string;
  type: ResourceType;
  sourceClass: SourceClass;
  sourceRepository?: string;
  sourcePath?: string;
  sourceUrl: string;
  sourceCommit?: string;
  homepage?: string;
  compatibility: Compatibility[];
  compatibilityEvidence: string;
  verificationStatus: VerificationStatus;
  checkedAt: string;
  installCommand?: string;
  permissions: string[];
  risks: string[];
  categories: string[];
  scenarios: string[];
  keywords: string[];
  publicationStatus: PublicationStatus;
}
```

Validation rejects duplicate slugs, non-HTTPS source URLs, empty compatibility evidence, invalid enums, unpublished records referenced by scenarios, and published records without a checked date.

## Public page contracts

### Directory

`/library` targets “Claude Cowork plugins,” “Claude Cowork skills,” and task-based discovery. It contains a search field, compatibility and source filters, category navigation, four scenario links, and a compact list of reviewed resources.

### Category

Each category page targets one broad task family. It contains an original introduction, subcategory links, compatible resources, relevant scenarios, and links to guides. It is not a copy of the directory with a filter query parameter.

### Scenario

Each scenario page targets one concrete job. It includes inputs, expected output, recommended resources, permissions, safe first test, review checklist, and a link to the full workflow guide.

### Resource detail

Each detail page answers the named-resource query. It includes:

- what it does and what it does not do
- compatibility badges with evidence
- official, vendor, or community provenance
- repository and source path
- install or connection instructions when supported
- permissions and risk review
- a low-risk verification task
- current limitations
- related scenarios and alternatives
- checked date and original source links

## Visual direction

The design keeps Coworks.dev's friendly illustrated-document identity while making provenance the memorable interaction. It should feel like a librarian's working index, not an app store and not a grid of interchangeable SaaS cards.

### Color tokens

| Token | Value | Use |
| --- | --- | --- |
| Paper | `#F7F7F0` | page background |
| Ink | `#151515` | primary text |
| Ledger | `#FFFDF6` | header and detail surfaces |
| Ochre | `#C08B2D` | selected navigation and links |
| Verification green | `#2F6B4F` | verified provenance |
| Community blue | `#315C78` | community-source indicators |

The existing terracotta cloud icon remains the brand mark. Ochre stays an interaction color rather than becoming a decorative gradient.

### Type

Use the site's existing font stack. Directory titles use a compact, editorial scale with left alignment. Metadata uses the same face at smaller sizes rather than introducing a generic monospace label style.

### Layout

Desktop uses a narrow task index on the left and a wide evidence-led result area. Mobile turns the index into a horizontal category strip and a filter drawer.

```text
┌──────────────────────────────────────────────────────────────┐
│ Coworks.dev      Guides  Library  Videos       Search       │
├──────────────────────────────────────────────────────────────┤
│ Find a trusted resource for the work in front of you         │
│ [ Search by task or name                              ]       │
│ [Cowork] [Claude Code] [Official] [Connector]                │
├───────────────────┬──────────────────────────────────────────┤
│ Work & planning   │ Scenario notebook                        │
│ Documents & files │ Meeting brief · Weekly report · Email   │
│ Communication     ├──────────────────────────────────────────┤
│ Research          │ Resource rows                            │
│ Operations        │ Name       Compatibility    Provenance   │
│ Build & automate  │ Summary    Safe first test  Checked date │
└───────────────────┴──────────────────────────────────────────┘
```

Resource results use rows with uneven information density. Compatibility and provenance occupy fixed columns so users can scan trust information without opening every record. Rounded containers are reserved for search controls and the scenario notebook, not applied to every element.

### Interaction principles

- Search works client-side over the committed catalog.
- Filters update the result count and URL query parameters.
- Keyboard focus is always visible.
- Empty results explain which filter to remove.
- Motion is limited to filter drawer and disclosure state changes.
- Reduced-motion preferences disable nonessential transitions.

## SEO and AI access

- Every public page has a self-referencing canonical.
- Only `published` records enter static params and sitemap.
- Resource titles use `[Name]: compatibility, setup and safety | Coworks.dev`.
- Category and scenario pages contain original explanatory text.
- Detail pages use `SoftwareApplication` only when the record is truly software. Otherwise use `TechArticle` with `citation` links.
- `/library.json` exposes the public catalog and canonical URLs.
- `/knowledge/library-[slug].md` exposes the reviewed description, provenance, and citations.
- `llms.txt` and the knowledge index link to the library catalog.
- Removed records return a maintained archived page when useful, otherwise 404 and leave the sitemap.

## Security and legal controls

- Never execute fetched hooks, scripts, commands, or installers during sync.
- Treat repository text as untrusted input.
- Sanitize all remote strings and never render remote HTML.
- Allow only HTTPS source links.
- Keep install commands as reviewed editorial fields, not automatically generated shell strings for community entries.
- Store source hashes or commits so changes can be detected.
- Display a community-resource warning before install instructions.
- Link to source text instead of copying full READMEs.
- Do not use “official” unless the source owner or Anthropic evidence supports it.

## Deployment

1. Run the sync command locally or in GitHub Actions.
2. Validate candidate and public snapshots.
3. Review the generated diff, compatibility statements, and new source domains.
4. Commit the approved public snapshot with application changes.
5. Push to `main` to create the normal Vercel preview.
6. Run tests, build, sitemap checks, and visual QA on the preview.
7. Promote the verified Vercel deployment to production.

No runtime secret is required for the initial static catalog. Optional GitHub API and Skills.sh credentials stay in GitHub Actions or Vercel environment settings and never enter the catalog.

## MVP acceptance criteria

- `/library` supports search and filters on desktop and mobile.
- Six category pages, four scenario pages, and at least twenty reviewed resource pages build statically.
- Every published record has provenance, compatibility evidence, checked date, permissions, risks, and a safe first test.
- All public pages self-canonicalize and appear exactly once in the sitemap.
- Draft candidates do not appear in routes, search, JSON, Markdown, or sitemap.
- Sync failure preserves the last public snapshot.
- Tests cover normalization, validation, filtering, route generation, and unsafe remote strings.
- Production build and link checks pass before deployment.

## Future phases

- Source change notifications and stale-review queue
- GitHub Action pull requests for source updates
- Security audit badges from documented providers
- User submissions with moderation
- Saved collections without requiring an account
- Search Console-driven category and detail expansion

