---
title: "How Claude Cowork Works"
description: "Understand the architecture behind Claude Cowork including its planning layer, execution engine, and sub-agent coordination system. Learn how it integrates with Claude Desktop."
keywords: ["Claude Cowork architecture", "AI agent system", "task execution", "sub-agent coordination", "Claude Desktop integration"]
slug: "how-it-works"
order: 2
answer: "Cowork plans and carries out tasks using tools you approve. Cloud execution, direct folder access, connectors, and on-screen computer use are different routes to the same deliverable; the best one depends on where the inputs live."
---

## What Cowork can do

| Capability | Example | Verify before relying on it |
| --- | --- | --- |
| Plan a multi-step task | Turn three meeting notes into a decision brief | Check that decisions and open questions are separated |
| Work with approved local files | Sort copies of documents and extract receipt rows | Review folder scope, missing fields, and duplicate names |
| Use connected sources | Build a brief from a calendar event and approved notes | Open citations using the intended account |
| Produce reviewable documents | Draft a spreadsheet, report, or slide deck | Check formulas, totals, and the source of each material claim |
| Use desktop controls where enabled | Inspect a screen or interact with a desktop app | Specify what needs approval; review the visible result |
| Run recurring work | Prepare a draft digest every week | Confirm timezone, date window, and run history |

Use formats you can verify: Markdown or text for briefs, CSV for a row-by-row audit, and a workbook or slides when formatting or formulas matter. Check inputs with unusual encodings, scanned text, macros, or other embedded features on a sample first.

## Where the task runs

Anthropic describes a cloud session that can use local capabilities through Claude Desktop where supported. Keep the desktop connection available for steps that depend on local files, the browser, or computer use. For current platform requirements, see the [official Cowork availability guide](https://support.claude.com/en/articles/13345190-get-started-with-claude-cowork).

## Integration with Claude Desktop

Claude Desktop connects Cowork to files on your computer. Choose which folders to connect and keep the app open while a task needs those files. Review requested permissions and check any outputs before relying on them. See the [setup guide](/docs/setup) for platform and account requirements.

## Which Claude experience fits the task?

Use Claude's conversation interface for questions, drafts, and follow-up edits. If your interface combines chat and Cowork, start a task in the same conversation. Use Claude Code for software work that needs a repository and development tools. Choose an approved connector or connected folder based on where your inputs live.

See the [unified Claude interface guide](https://support.claude.com/en/articles/16761823-claude-cowork-and-chat-are-one-claude) and [Cowork overview](/docs/introduction) for context.

## What happens after you submit a task?

1. Give Cowork the goal, source boundaries, expected output, and a check it can perform.
2. Review the proposed approach and any permission prompts. Broaden access only if a necessary source is missing.
3. While it works, intervene if the task changes scope or if a step requires review. Larger tasks may be split into subtasks.
4. Open the finished result and compare it with the source. Use the [workspace instructions guide](/docs/workspace-instructions) to keep useful rules for the next run.
