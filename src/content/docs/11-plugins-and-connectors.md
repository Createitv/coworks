---
title: "Claude Cowork Plugins, Skills, and Connectors"
description: "Understand the difference between Claude Cowork plugins, skills, and connectors. Install a plugin and verify access with a read-only test."
slug: "plugins-and-connectors"
order: 11
answer: "A connector gives Cowork access to a service, a skill supplies reusable instructions, and a plugin can bundle skills, commands, and connections. Inspect the components and permissions before installation."
---

A **connector** gives Claude access to a service such as a document store. A **skill** gives Claude reusable instructions for a task. A **plugin** can package skills and connectors around a workflow. Choose the piece you need based on whether your problem is access, instructions, or a repeatable combination of both.

| Goal | Start with | Verify |
| --- | --- | --- |
| Read one document from an external service | Connector | Claude can identify the expected document and open the source |
| Produce a report in the same format every week | Skill | The output uses your required headings and source references |
| Set up several related capabilities for a team | Plugin | The bundle contains the expected skills and requests appropriate access |

## Install a Cowork plugin

1. In Claude, open **Customize**, then **Plugins** and **Discover**. If your interface has a separate Cowork mode, open it first.
2. Select a trusted plugin and review what it contains. Choose **Add** when it matches your workflow.
3. If a connector asks you to sign in, confirm which account and workspace you are connecting.
4. Try a small task with a known test document. Ask Claude to return its title, link, and one fact before allowing it to take actions in the service.

## Troubleshoot access

If the plugin is missing, check that you are in the expected account and that your organization allows the plugin. If it is present but cannot find a file, confirm the connected account can open the file directly. For a custom plugin with a local component, check Anthropic's instructions and your organization's settings before installing it.

Use the [connector check prompt](/docs/templates) for a first run. See [Anthropic's plugin instructions](https://support.claude.com/en/articles/13837440-use-plugins-in-claude) and the [official Cowork documentation](https://claude.com/docs/cowork/overview) for current availability.

For document, chat, and calendar examples, see the [connector checklist](/docs/connector-checklist).

## Pick a plugin by task rather than by category name

| Work area | A small first task | What to verify |
| --- | --- | --- |
| Sales and research | Build a company brief from an approved source list | Dates, company identity, and evidence for each claim |
| Marketing and communications | Turn a brief into draft assets for review | Audience, approved wording, and citations before publishing |
| Finance and data | Extract figures into a sample workbook | Units, formulas, missing values, and who can see the input |
| Support and operations | Classify a few synthetic requests | Correct routing, unknown cases, and no unintended sends |
| Product and engineering | Summarize a test issue or decision log | Repository scope, source links, and no unintended changes |

Look in the [Claude connector directory](https://claude.com/connectors) and your workspace's plugin catalog for currently enabled options. A plugin can bundle instructions and tool calls; it does not automatically grant access to an app or bypass workspace policy. Watch [how a plugin is installed](/videos/claude-cowork-install-and-use-plugins) or follow the [first read-only connector check](/docs/connector-checklist).
