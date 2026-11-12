---
title: "How Claude Cowork Works"
description: "Understand the architecture behind Claude Cowork including its planning layer, execution engine, and sub-agent coordination system. Learn how it integrates with Claude Desktop."
keywords: ["Claude Cowork architecture", "AI agent system", "task execution", "sub-agent coordination", "Claude Desktop integration"]
slug: "how-it-works"
order: 2
---

# How Claude Cowork Works

## Architecture Overview

Claude Cowork is built on the same powerful agentic architecture as Claude Code. It operates as an autonomous agent that can reason, plan, and execute complex workflows while maintaining transparency and user control.

### Core Components

#### Planning Layer
The planning layer analyzes your requests and breaks them into actionable steps. It understands context, identifies dependencies, and creates an execution roadmap.

#### Execution Engine
Tasks run in an isolated sandbox environment, ensuring your system remains safe while Cowork performs operations. This engine handles file operations, code execution, and tool usage.

#### Coordination System
For complex tasks, the coordination system manages multiple sub-agents working in parallel. Each sub-agent handles a specific portion of the work while the main agent orchestrates the overall workflow.

## Integration with Claude Desktop

Claude Desktop connects Cowork to files on your computer. Choose which folders to connect and keep the app open while a task needs those files. Review requested permissions and check any outputs before relying on them. See the [setup guide](/docs/setup) for platform and account requirements.

## Claude Chat vs Claude Code vs Cowork

| Feature | Chat | Code | Cowork |
|---------|------|------|--------|
| Conversational AI | ✓ | ✓ | ✓ |
| File System Access | ✗ | ✓ | ✓ |
| Code Execution | ✗ | ✓ | ✓ |
| Multi-step Tasks | ✗ | ✓ | ✓ |
| Sub-agent Coordination | ✗ | ✗ | ✓ |
| Document Generation | Limited | ✓ | ✓ |
| Target Users | General | Developers | Knowledge Workers |

## How Multi-Step Tasks Are Processed

### Step 1: Request Analysis
Cowork interprets your natural language request and identifies the core objective. It understands implicit requirements and asks clarifying questions if needed.

### Step 2: Task Decomposition
Complex requests are broken into smaller, manageable sub-tasks. Each sub-task has clear inputs, outputs, and success criteria.

### Step 3: Resource Planning
Cowork identifies required files, tools, and permissions needed for execution. It verifies access before starting work.

### Step 4: Parallel Execution
Independent sub-tasks run simultaneously via coordinated sub-agents. This dramatically speeds up complex workflows.

### Step 5: Result Synthesis
Outputs are combined, formatted, and delivered to your file system. Cowork verifies completion and provides a summary of what was accomplished.

## Transparency and Control

Throughout the entire process, you maintain visibility and control:

- **Progress Indicators**: See what Cowork is doing at each step
- **Reasoning Transparency**: Understand why Cowork makes certain decisions
- **Intervention Points**: Pause, modify, or stop tasks at any time
- **Activity Logs**: Review everything Cowork did after completion
