---
title: "How to Open Claude Cowork and Fix a Missing Tab"
description: "Start a Claude Cowork task, check plan and platform access, and troubleshoot missing tabs and local file permissions."
slug: "setup"
order: 3
---

<h2 id="start">Open Cowork and start a task</h2>

1. Open [Claude](https://claude.ai/) and sign in to the account you intend to use. If your task needs files on your computer, install or open [Claude Desktop](https://claude.com/download).
2. Select **Cowork** if your message box offers a mode selector. In the unified Claude experience, start a conversation and describe the task directly.
3. Specify the inputs, the deliverable, and where it should go. Review any requested permissions before the task proceeds.

<h2 id="missing-cowork">Why is the Cowork tab missing?</h2>

| What you see | What to check |
| --- | --- |
| The chat box has no Chat or Cowork selector | You may have the unified interface. Start a normal conversation and ask Claude to create a small sample file. |
| Cowork appears under one account but not another | Check the active account, workspace, and subscription. |
| Cowork is unavailable in a work account | Ask your workspace admin whether Cowork is enabled for your account. |
| The desktop interface differs from the web guide | Update Claude Desktop and check which experience is available on your account. |

See the [official explanation of the unified experience](https://support.claude.com/en/articles/16761823-claude-cowork-and-chat-are-one-claude) for rollout details.

<h2 id="plans-and-platforms">Check plans and platforms</h2>

Cowork is available on paid Claude plans. Availability across desktop, web, and mobile depends on the plan, platform, and workspace settings. Check Anthropic's [current availability table](https://support.claude.com/en/articles/15520349-use-claude-cowork-on-web-desktop-and-mobile) for your combination. Choose a supported Claude Desktop setup when the task requires local files. See the [plans and pricing guide](/docs/plans-and-pricing) for a checklist.

<h2 id="local-files">Connect and troubleshoot local files</h2>

Create a dedicated folder with copies of the files needed for the task. Connect that folder from a Claude Desktop session and review the requested access.

If Claude cannot find a file, confirm it is inside the connected folder and available on disk. Make sure Claude Desktop is open and connected. If you started on another device, try starting the local file task from Claude Desktop itself. For work accounts, check whether the organization allows the relevant capability.

Use a small sample before processing a full folder. The [receipt audit exercise](/docs/receipt-audit) has three synthetic inputs, a prompt, and an expected CSV you can use to check the result.

For a symptom-by-symptom checklist, see [Cowork troubleshooting](/docs/troubleshooting).
