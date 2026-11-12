---
title: "Claude Cowork Plugin Directory: Official Sources and Starter Tasks"
description: "Find official Claude Cowork knowledge-work plugins by role, inspect their source, and try a small task before granting app access."
slug: "plugin-directory"
order: 21
answer: "Start from Anthropic’s plugin marketplace or source repository. Choose the plugin for a task you can verify, inspect its instructions and tool connections, and test it with synthetic data before connecting a real workspace."
---

## Choose a plugin by the result you need

This is a curated selection from Anthropic’s [knowledge-work plugin repository](https://github.com/anthropics/knowledge-work-plugins), checked November 12, 2026. Source availability does not establish what your organization permits you to install or connect.

| Plugin source | First task | What to check |
| --- | --- | --- |
| [Productivity](https://github.com/anthropics/knowledge-work-plugins/tree/main/productivity) | Turn a sample meeting note into an action list | Separate decisions from tasks; leave unknown owners blank |
| [Enterprise search](https://github.com/anthropics/knowledge-work-plugins/tree/main/enterprise-search) | Locate one known policy note in an approved test space | Open the exact citation and verify the workspace |
| [Sales](https://github.com/anthropics/knowledge-work-plugins/tree/main/sales) | Prepare a fictional account brief | Check company names and dates; leave outreach as a draft |
| [Marketing](https://github.com/anthropics/knowledge-work-plugins/tree/main/marketing) | Turn a brief into two headline options | Check audience, approved claims, and brand terms |
| [Customer support](https://github.com/anthropics/knowledge-work-plugins/tree/main/customer-support) | Triage three mock tickets | Check routing and escalation against an answer key |
| [Product management](https://github.com/anthropics/knowledge-work-plugins/tree/main/product-management) | Summarize three mock interview notes | Keep direct evidence separate from inferred priorities |
| [Data](https://github.com/anthropics/knowledge-work-plugins/tree/main/data) | Summarize a synthetic dataset | Recompute totals, confirm units, and review missing fields |
| [Finance](https://github.com/anthropics/knowledge-work-plugins/tree/main/finance) | Reconcile two toy tables | Confirm differences and currency using source rows |
| [Legal](https://github.com/anthropics/knowledge-work-plugins/tree/main/legal) | Locate clauses in a fictional agreement | Check exact clauses against the source and route for review |

## Review access before you install

1. Open the [official marketplace](https://claude.com/plugins) and check what your workspace allows.
2. Inspect the instructions, commands, and connector settings. A plugin bundles capabilities; the account used to connect an app still determines access.
3. Run one task in a test workspace and compare its output against an expected result. Expand the scope only after that passes.

Follow [Anthropic’s plugin setup guidance](https://support.claude.com/en/articles/13837440-use-plugins-in-claude) or the [Coworks connector checklist](/docs/connector-checklist) for read-only validation.
