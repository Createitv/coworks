# Resource library operations

The Coworks resource library publishes reviewed static data. A source refresh never makes a candidate public by itself.

## Source tiers

1. Anthropic sources include the official plugin marketplace and `anthropics/knowledge-work-plugins`.
2. Vendor sources are repositories or documentation owned by the service provider.
3. Community sources are discovery candidates and never auto-publish.

The current sync adapters read public metadata only. They do not install plugins or execute repository scripts, hooks, commands, or instructions.

## Local commands

```bash
pnpm library:sync
pnpm library:publish
pnpm test
pnpm build
```

`library:sync` writes `src/data/library/candidates.json` atomically. If a source times out or returns malformed data, the previous file remains intact.

`library:publish` merges candidates with `src/data/library/editorial.json`, validates the result, and writes `src/data/library/public.json`. Only editorial records marked `published` enter the public snapshot.

## Editorial review

Before publishing a new resource:

- open the original source and confirm ownership
- identify whether the source supports Cowork, Claude web, Claude Code, or a combination
- write compatibility evidence without expanding the source claim
- document permissions, material risks, and one reversible first test
- write an original summary rather than copying a README
- set the checked date
- use `anthropic` only for Anthropic-owned sources and `vendor` only for provider-owned sources
- keep community install commands out unless separately inspected and explicitly approved

Do not use “verified” for a listing that has only been discovered. `source-reviewed` means the cited source was inspected. `verified` requires direct, authoritative compatibility evidence.

## Archiving and source changes

When a source disappears or changes materially, set the editorial record to `archived`, remove it from scenarios, regenerate the public snapshot, and run the full suite. Keep a resource published during a temporary source outage only when the last reviewed source and checked date remain truthful.

Source commits or hashes should be added when a resource needs reproducible installation instructions. A changed hook, script, permission request, or install command requires a fresh review before the checked date advances.

## Automation

The weekly GitHub Action refreshes candidates, rebuilds the reviewed snapshot, runs tests and the production build, and opens a pull request only when files change. It does not deploy and does not push directly to `main`.

Optional GitHub API or Skills.sh credentials belong in repository action settings. They must not be written into JSON snapshots, workflow output, commits, or preview URLs.

## Deployment and rollback

1. Review the automated pull-request diff.
2. Confirm new domains, compatibility wording, permissions, and risks.
3. Run `pnpm test` and `pnpm build`.
4. Merge only the reviewed snapshot and application changes.
5. Inspect the Vercel preview for `/library`, representative detail pages, `/library.json`, Markdown, canonical metadata, and sitemap.
6. Promote the exact verified preview.

To roll back, revert the catalog or application commit and redeploy the resulting known-good revision. The site has no runtime dependency on GitHub, Skills.sh, or a crawler.
