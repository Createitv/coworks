---
title: "Prepare for a Meeting with Claude Cowork"
description: "Use Claude Cowork to turn an agenda, recent messages, and source documents into a cited meeting brief with decisions, risks, and questions to verify."
keywords:
  - "Claude Cowork meeting preparation"
  - "AI meeting brief workflow"
  - "prepare for meetings with Claude"
slug: "meeting-prep"
order: 23
answer: "Give Claude Cowork the agenda, attendee list, recent decisions, and a bounded set of source documents. Ask for a one-page brief that separates verified facts, open questions, and proposed talking points, then check every important claim against its cited source before the meeting."
---

## When this workflow is useful

Use this workflow when preparation requires information from several approved files or connected services. The deliverable is a **meeting brief**, not meeting notes or a transcript. If you need a recurring post-meeting summary, use the [weekly report workflow](/docs/weekly-report) as a starting point.

## Inputs to collect

Create a small, deliberate source set:

- the current agenda and meeting goal
- attendee names and roles
- the previous meeting's decisions and action items
- only the email threads, project notes, or reports relevant to this meeting
- the date after which information counts as current

Do not give broad access when a dedicated folder or a few selected documents are enough. For connected sources, start with read-only retrieval and confirm that the returned items are the ones you expected.

## Prompt to copy

> Prepare a one-page brief for the meeting described in `agenda.md`. Use only the attached or connected sources I selected. Include the meeting goal, confirmed context, decisions already made, unresolved questions, risks, and five questions worth asking. Cite the source and date beside every material fact. Put assumptions in a separate section. Do not send messages or change any source.

## Expected output

| Section | What good looks like |
| --- | --- |
| Goal | One sentence describing the decision or outcome needed |
| Confirmed context | Short facts with a source and date |
| Decisions | Prior decisions, owner, and decision date |
| Open questions | Missing information that could change the meeting outcome |
| Risks | Specific risk, evidence, and likely impact |
| Questions to ask | Prioritized questions tied to the meeting goal |

## Review before using the brief

Open every cited source for high-impact facts. Check that old decisions are not presented as current plans, attendee roles are current, and assumptions are visibly separated from evidence. Remove information that the audience should not receive. If the brief includes suggested actions, treat them as proposals until a human owner approves them.

## Common failure modes

- **The brief is generic.** Narrow the source set and state the decision the meeting must reach.
- **Old information looks current.** Require a source date and specify a freshness cutoff.
- **The brief invents consensus.** Ask for direct evidence of decisions and label everything else as an open question.
- **Too much sensitive context appears.** Use a dedicated source folder and review the final audience before sharing.

Next, see [Google Workspace connector setup](/docs/google-workspace-connector) or [Microsoft 365 connector setup](/docs/microsoft-365-connector) if your approved sources live there.
