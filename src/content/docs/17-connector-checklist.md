---
title: "Claude Cowork Connector Setup and Read-Only Checks"
description: "Verify access to a document, team message, or calendar item before using a Claude Cowork connector in a workflow."
slug: "connector-checklist"
order: 17
---

Before asking Cowork to automate a workflow, confirm it can read one known item through the connector. Check the active Claude workspace, connected service account, and the original item's sharing settings.

| Source | Test item | Expected response |
| --- | --- | --- |
| Document storage | A synthetic document with a unique title | Title, link, and one fact from the document |
| Team chat | A test message in an approved channel | Channel, date, and message link |
| Calendar | A dummy event in an approved calendar | Title, start time, and time zone |

Use the read-only test in the [prompt library](/docs/templates#connector-check). If the test fails, open the item directly with the connected account. A working link confirms the account can reach the item in its service. Then check that Claude is connected to the same account and that your organization allows the connector.

Review the requested permissions before allowing write actions. For current options, see the [Claude connector directory](https://claude.com/connectors) and the [plugins and skills guide](/docs/plugins-and-connectors).
