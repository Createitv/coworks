---
title: "Draft Emails with Claude Cowork Without Sending Them"
description: "Use Claude Cowork to research context and prepare reviewable email drafts while keeping sending, recipients, claims, and attachments under human control."
keywords:
  - "Claude Cowork email draft"
  - "draft Gmail with Claude Cowork"
  - "AI email drafting workflow"
slug: "email-drafts"
order: 25
answer: "Ask Claude Cowork to create a draft only, using a named thread and approved sources. Specify the recipient, purpose, tone, required facts, and prohibited claims. Review recipients, links, promises, confidential details, and attachments yourself before any message is sent."
---

## Use a draft-only boundary

Email drafting and email sending are different tasks. This guide covers creating text or a saved draft for human review. Keep sending behind an explicit approval, especially when a connector can act on your mailbox.

## Inputs to provide

- intended recipient and relationship
- the outcome you want from the email
- the exact thread or documents Claude may use
- required facts and links
- tone and maximum length
- claims, prices, dates, or commitments that need human confirmation

## Prompt to copy

> Prepare a reply draft for the selected thread. The goal is [goal]. Use only the selected thread and attached references. Keep it under 180 words. Quote no private material from unrelated messages. Mark any unverified date, price, promise, or legal statement with `[VERIFY]`. Create a draft only. Do not send, forward, add recipients, or change labels.

## Review checklist

| Check | Question |
| --- | --- |
| Recipient | Are To, CC, and BCC correct and necessary? |
| Context | Does the draft answer the latest message rather than an older one? |
| Claims | Can every material statement be traced to an approved source? |
| Commitments | Did the draft promise a date, price, refund, or action without approval? |
| Privacy | Does it reveal another customer's or employee's information? |
| Links and files | Are links correct, and will attachments be added and checked manually? |

## Test a connector safely

Connect the relevant mailbox, then ask Claude to find one known message by sender, subject, and approximate date. Confirm the result before requesting a draft. If your organization controls connectors, the workspace owner may need to enable the service and set write-tool restrictions.

For Gmail, follow [Google Workspace connector setup](/docs/google-workspace-connector). For Outlook, follow [Microsoft 365 connector setup](/docs/microsoft-365-connector).

## Common failure modes

- **Wrong thread.** Identify the sender, subject, and date, then verify the source before drafting.
- **Unsupported attachment behavior.** Prepare the message body separately and attach files manually after review.
- **Tone is polished but inaccurate.** Ask for a fact table before asking for prose.
- **A draft is treated as approval.** Keep the final send action with the accountable person.
