---
title: "Claude Cowork Field Notes: Workflow Experiments and Checks"
description: "Try reproducible Cowork exercises for local files, reports, connected apps, and recurring tasks, with practical checks for every output."
slug: "field-notes"
order: 19
answer: "Each field note gives you a small workflow, a way to measure the result, and a condition to stop. Use sample inputs before applying any of the workflows to a live workspace."
---

## Keep a task record

For each exercise, record the date, tools, account type, input sample, expected output, and observed result. Use the notes as repeatable experiments, and report only measurements you actually collected.

## Field note: Find the errors in an expense sheet

Use the [synthetic receipt sample and answer key](/docs/receipt-audit). Extract one row per receipt ID, group totals by currency, and list ambiguous and duplicate entries. Check three fields against the source files, then compare totals. Stop before using the output for accounting if any row has no source or the currency totals disagree.

## Field note: Try a small folder migration before moving the archive

Take copies of six files that represent the archive. Include a name collision and one file that belongs in more than one category. Ask for old and new paths and a review list. Pass the exercise only if every input appears once and the proposed destinations are unique. See the [file organization walkthrough](/docs/file-organization).

## Field note: Verify a meeting brief one source at a time

Start with a test event and two approved notes. Ask for the meeting goal, open questions, and one source per claim. Add calendar or email access only after the test works with files. Verify the timezone and open each link. See the [meeting brief video](/videos/claude-cowork-daily-meeting-brief) and [connector checks](/docs/connector-checklist).

## Field note: Decide whether a report should run every week

Run the same prompt manually on a fixed date range twice. Compare the source list, column definitions, and missing-data behavior. If both runs pass your checks, schedule one draft-only run, note its reporting window, and inspect the first delivery before relying on it. See [scheduled task checks](/docs/scheduled-tasks).

## Field note: Make a presentation easier to audit

Ask for the intermediate table as well as the slides. Use a fixed reporting period and write the units beside each chart. Spot-check the title, total, and one percentage change against the spreadsheet. The [Excel-to-PowerPoint demo](/videos/claude-cowork-excel-to-powerpoint) shows where to inspect the generated deck.

Have a reproducible correction or workflow idea? [Send the page and the steps you used](/connect-me).

Try the [research brief exercise](/docs/research-brief) to check how a report handles different populations and missing evidence.
