---
title: "Claude Cowork Connector Setup and Read-Only Checks"
description: "Verify access to a document, team message, or calendar item before using a Claude Cowork connector in a workflow."
slug: "connector-checklist"
order: 17
answer: "Confirm one known document, message, or event can be read through the intended service account. Verify the source link and requested permissions before allowing broader reads or write actions."
---

Before asking Cowork to automate a workflow, confirm it can read one known item through the connector. Check the active Claude workspace, connected service account, and the original item's sharing settings.

| Source | Test item | Expected response |
| --- | --- | --- |
| Document storage | A synthetic document with a unique title | Title, link, and one fact from the document |
| Team chat | A test message in an approved channel | Channel, date, and message link |
| Calendar | A dummy event in an approved calendar | Title, start time, and time zone |

Use the read-only test in the [prompt library](/docs/templates#connector-check). If the test fails, open the item directly with the connected account. A working link confirms the account can reach the item in its service. Then check that Claude is connected to the same account and that your organization allows the connector.

Review the requested permissions before allowing write actions. For current options, see the [Claude connector directory](https://claude.com/connectors) and the [plugins and skills guide](/docs/plugins-and-connectors).


## Which integration should I use?

| Workflow | Starting point | First safe check |
| --- | --- | --- |
| Google Drive or shared documents | Browse the official connector directory for your plan | Find one approved test file and cite the exact sharing link |
| Gmail or Outlook | Check whether the intended email connector and account are enabled | Search for a dummy message and report the original subject |
| Calendar or team chat | Use only the workspace and channel needed for the task | Find one test event or message and confirm timezone or channel |
| GitHub or issue tracking | Check the approved integration and repository scope | Read one test issue without creating or modifying anything |
| Excel, PowerPoint, or Word | Decide whether to work with a local file, a cloud copy, or a supported app integration | Open the output in its native application and verify one formula, slide, or section |
| Custom MCP | Ask the workspace owner which server and scopes are approved | Verify one read action on synthetic data and test denied access |

A tool in a marketplace is not necessarily enabled in every workspace. If a connector requests more access than the task needs, reduce the scope or use a small exported sample. See the [connection walkthrough](/videos/claude-cowork-connectors-guide) for a video example.
