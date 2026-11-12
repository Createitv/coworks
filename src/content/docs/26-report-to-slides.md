---
title: "Turn a Report into Slides with Claude Cowork"
description: "Convert a source report into a concise slide outline or presentation with Claude Cowork while preserving evidence, numbers, caveats, and audience fit."
keywords:
  - "Claude Cowork report to slides"
  - "create presentation with Claude Cowork"
  - "AI report to presentation workflow"
slug: "report-to-slides"
order: 26
answer: "Start with the audience and decision the deck must support, then ask Claude Cowork for a slide-by-slide outline grounded only in the source report. Keep citations and caveats beside each claim, verify every number and chart, and approve the outline before generating or editing presentation files."
---

## Define the deck before generating it

Specify the audience, presentation length, decision to support, source report, and visual constraints. A ten-minute leadership update needs a different structure from a training deck, even when both use the same report.

## Prompt to copy

> Turn `report.pdf` into an eight-slide outline for [audience]. The presentation should help them decide [decision]. Use only the report. For each slide provide one takeaway title, up to three supporting points, the exact source page for each number, a suggested visual, and any caveat the audience must see. End with decisions needed and next steps. Do not create invented metrics, customer quotes, or sources.

## Recommended slide structure

1. Decision or purpose
2. Executive summary
3. Current state and baseline
4. Evidence or trend
5. Main problem
6. Options and tradeoffs
7. Recommendation with assumptions
8. Decisions needed and next steps

Change the structure when the report supports a different story. Do not keep a slide merely to reach a target count.

## Verify the outline

- trace every number to a page, table, or approved dataset
- preserve units, date ranges, sample sizes, and exclusions
- make chart suggestions match the available data
- distinguish the report author's conclusion from Claude's proposed framing
- check that the deck does not omit a caveat that would change the decision

After approving the outline, ask for one or two sample slides before generating the full presentation. Review accessibility, contrast, labels, and whether visuals communicate the same conclusion as the source.

## Common failure modes

- **Too much text.** Require one takeaway per slide and move detail into speaker notes.
- **A chart implies unsupported precision.** Use the original data and show the source, units, and time period.
- **The deck changes the report's conclusion.** Compare each slide title with the cited evidence.
- **Design work begins too early.** Approve the narrative and fact table before layout.

For source files in Drive, see [Google Workspace connector setup](/docs/google-workspace-connector). For OneDrive or SharePoint, see [Microsoft 365 connector setup](/docs/microsoft-365-connector).
