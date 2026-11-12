---
title: "Create a Weekly Status Report with Claude Cowork"
description: "Build a repeatable Claude Cowork weekly report from dated updates, with completed work, blockers, metrics, owners, citations, and a review checklist."
keywords:
  - "Claude Cowork weekly report"
  - "AI status report workflow"
  - "Claude weekly update template"
slug: "weekly-report"
order: 24
answer: "For a reliable weekly report, define the reporting window, approved sources, audience, and fixed output sections. Require Claude Cowork to cite each completed item and metric, distinguish facts from proposed next steps, and flag missing updates instead of filling gaps."
---

## Define the reporting contract

A weekly report should answer one recurring search intent: how to turn a known set of updates into a reviewable status summary. Fix these fields before automating it:

| Field | Example |
| --- | --- |
| Reporting window | Monday 09:00 through Friday 17:00, local time |
| Audience | Product and operations leads |
| Sources | Approved project notes, issue tracker export, and metrics CSV |
| Sections | Outcomes, metrics, blockers, decisions needed, next week |
| Owner | Person who reviews and publishes the report |

## Prompt to copy

> Create this week's status report using only the selected sources dated inside the reporting window. For every completed item, metric, blocker, and decision, include its source and owner when available. Separate confirmed next steps from your suggestions. If a team or source has no update, write “No verified update found.” Do not publish or message anyone.

## Validate the first run

1. Choose one known completed item and confirm its source and date.
2. Choose one metric and recompute it from the underlying data.
3. Confirm blockers include an owner or explicitly say the owner is unknown.
4. Check that future work is not described as completed work.
5. Compare the report with the source list to find omitted teams or duplicated updates.

## Make it repeatable

Save the approved structure in [workspace instructions](/docs/workspace-instructions). Keep the source locations and reporting window explicit. Run several supervised reports before considering a [scheduled task](/docs/scheduled-tasks). A schedule does not remove the need for source access, approvals, or a named reviewer.

## Common failure modes

- **Work outside the week appears.** Pass exact start and end timestamps.
- **A metric has no denominator.** Require the definition, time range, and source next to the value.
- **Suggestions look like commitments.** Put suggestions in their own labeled section.
- **The report is repetitive.** Ask for one entry per outcome and merge only when the owner and evidence match.

Use the [field notes template](/docs/field-notes) to record how long review takes and which corrections repeat.
