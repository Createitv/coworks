---
title: "Connect Microsoft 365 to Claude Cowork"
description: "Set up the Microsoft 365 connector for Claude Cowork and verify Outlook, OneDrive, SharePoint, Calendar, or Teams access with safe tests."
keywords:
  - "Claude Cowork Microsoft 365 connector"
  - "Claude Cowork Outlook connector"
  - "Claude Cowork OneDrive connector"
slug: "microsoft-365-connector"
order: 28
answer: "Connect Microsoft 365 from Claude's connector settings, choose the correct personal or work account, and complete any required organization and Microsoft Entra approval. Test one known read result in Outlook, OneDrive, SharePoint, Calendar, or Teams before enabling write actions."
---

## Choose the correct account path

Anthropic documents separate setup paths for personal Microsoft accounts and work or school accounts. A work or school account belongs to a Microsoft Entra tenant and may require both a Claude organization owner and a Microsoft Entra administrator. Check the current [end-user connection guide](https://support.claude.com/en/articles/15183774-connect-to-microsoft-365) and [administrator setup guide](https://support.claude.com/en/articles/12542951-set-up-the-microsoft-365-connector).

## Connect Microsoft 365

1. In Claude, open **Customize** and then **Connectors**.
2. Select **Microsoft 365** and choose personal or work/school account when prompted.
3. Authenticate the intended Microsoft account and review the requested permissions.
4. For a managed tenant, confirm that the Microsoft Entra administrator has granted the required consent.
5. For Team or Enterprise, confirm that the Claude organization owner has enabled the connector.
6. Run a narrow read-only test before requesting any change.

## Verify each source separately

| Source | Low-risk test | What to verify |
| --- | --- | --- |
| Outlook | Find one known message by sender and date | Mailbox, thread, and timestamp |
| Calendar | List one event inside a narrow date range | Time zone, organizer, and attendees |
| OneDrive or SharePoint | Find one file by exact title and owner | Tenant, site, file version, and access |
| Teams | Find a message in a named team or channel | Team, channel, author, and date |

The connector acts with the connected user's permissions. If that user cannot open a private channel or file directly, Claude should not be expected to retrieve it.

## Control write actions

Sending email, changing calendar events, updating files, or posting to Teams can affect other people. Keep the first tests reversible and visible. Ask for an Outlook draft without sending, create a test file in a dedicated folder, or prepare a proposed Teams message as text. Confirm current admin restrictions and approval behavior before using scheduled or automatically approved tasks.

## Troubleshooting

- **Admin consent is required.** Confirm both the Microsoft Entra tenant consent and the Claude organization connector setting.
- **The wrong tenant appears.** Sign out of unintended Microsoft accounts and reconnect the correct identity.
- **A file or channel is missing.** Verify direct access as the connected user and specify the site, team, channel, owner, and date.
- **Write tools are unavailable.** Ask the organization owner whether those tools are enabled and what approval rule applies.

Use this connector with [meeting preparation](/docs/meeting-prep), [weekly reports](/docs/weekly-report), or [email draft review](/docs/email-drafts).
