---
title: "Connect Google Workspace to Claude Cowork"
description: "Connect Gmail, Google Calendar, and Google Drive to Claude Cowork, then verify access with low-risk read tests and controlled draft or file actions."
keywords:
  - "Claude Cowork Google Workspace connector"
  - "Claude Cowork Google Drive connector"
  - "Claude Cowork Gmail connector"
slug: "google-workspace-connector"
order: 27
answer: "Open Claude's connector settings, connect only the Google Workspace services you need, and authenticate the intended account. Verify each service with a known read-only query before allowing drafts, file changes, email sends, or calendar writes. Team and Enterprise workspaces may require an owner to enable the connector first."
---

## What the connector covers

Anthropic documents Google Workspace connections for Gmail, Google Calendar, and Google Drive. Available actions and approval behavior can change, so review the current [official Google Workspace connector guide](https://support.claude.com/en/articles/10166901-use-google-workspace-connectors) before enabling write actions.

## Connect the intended account

1. In Claude, open **Customize** and then **Connectors**.
2. Choose the Google service you need and select **Connect**.
3. Confirm the Google account and review the requested permissions.
4. In a managed Team or Enterprise workspace, ask an owner to confirm that the connector is enabled for the organization.
5. Return to the task and run a read-only verification.

Interface labels can change during product rollouts. Use the official guide if the current screen differs.

## Verify with known records

| Service | Low-risk test | What to verify |
| --- | --- | --- |
| Gmail | Find one message by sender, subject, and approximate date | Correct account, thread, and date |
| Calendar | List one known event in a narrow date range | Correct calendar, time zone, and attendees |
| Drive | Find a document by exact title and owner | Correct file, version, and sharing boundary |

If a known record is missing, stop before broadening the request. Check the active account, source permissions, organization policy, and whether the item is actually shared with that user.

## Add write actions carefully

Drafting or changing a Google item is a separate permission decision from reading it. Start with a reversible action, such as preparing a draft without sending it or creating a test document in a dedicated folder. Review the action preview, target account, recipients, and destination before approval.

## Troubleshooting

- **An administrator must approve access.** Ask the Google Workspace administrator to review Claude as a trusted application and ask the Claude workspace owner to check connector policy.
- **Claude finds the wrong document.** Add exact title, owner, date, and folder constraints.
- **A shared file is missing.** Confirm the connected user can open it directly in Google Workspace.
- **A write action is unavailable.** Check connector settings, workspace restrictions, and the current official limitations.

Try the connector with [meeting preparation](/docs/meeting-prep), an [email draft](/docs/email-drafts), or a [report-to-slides workflow](/docs/report-to-slides).
