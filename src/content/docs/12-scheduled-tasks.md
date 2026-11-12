---
title: "Claude Cowork Scheduled Tasks and Recurring Workflows"
description: "Set up a recurring Cowork task, test it with known inputs, and troubleshoot missed runs, source access, and time zones."
slug: "scheduled-tasks"
order: 12
answer: "Run a workflow once and verify its output before scheduling it. Record the date window, time zone, failure behavior, and approval steps; then check the first scheduled run."
---

Start with a task that produces a draft you can verify, such as a weekly summary of one approved source. Write down the cadence, time zone, date range, and output format before scheduling it.

## Create a recurring task

- In the unified Claude interface, describe the work and schedule in a conversation. Review the task Claude proposes before selecting **Schedule**.
- In the separate Cowork interface, open **Scheduled** from the sidebar and create a task. Review the saved instructions and cadence.
- Run the prompt once against a date range you can check. Compare the draft with the source before relying on the schedule.

Try the weekly brief in the [prompt library](/docs/templates#weekly-brief). If you expect a Monday morning run, specify the time zone explicitly and ask the output to state its coverage dates.

## Diagnose a missing or incomplete report

| Symptom | What to check |
| --- | --- |
| The task did not run when expected | Open **Scheduled** and check the cadence, time zone, and run history |
| The report is empty | Check the date window and whether the approved source contains matching items |
| One source is missing | Confirm the relevant connector can read a known item from that source |
| Local files are unavailable | Check the task's execution environment and whether Claude Desktop can reach the folder |

Current scheduled tasks can run remotely. Cloud access to local files has additional requirements, and some older local schedules behave differently. Check the [official scheduled tasks guide](https://support.claude.com/en/articles/13854387-schedule-recurring-tasks-in-claude-cowork) and [platform guide](https://support.claude.com/en/articles/15520349-use-claude-cowork-on-web-desktop-and-mobile) for your setup.
