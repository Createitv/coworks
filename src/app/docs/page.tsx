"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  BookOpen,
  ChevronRight,
  Rocket,
  Settings,
  FileText,
  Zap,
  Shield,
  HelpCircle,
  Moon,
  Sun,
  Menu,
  X,
  ExternalLink,
  AlertTriangle,
  Monitor,
  Workflow,
  Clock,
  Gauge,
  FolderOpen,
  Sparkles,
  BarChart3,
  TrendingUp,
  GitCompare,
  Lightbulb,
  Terminal,
  Users,
  CheckCircle,
  XCircle,
  ArrowRight,
  Brain,
  Layers,
  Lock,
  Cpu,
  Globe,
} from "lucide-react";

interface DocSection {
  id: string;
  title: string;
  subtitle: string;
  icon: React.ReactNode;
  content: React.ReactNode;
}

const docSections: DocSection[] = [
  {
    id: "introduction",
    title: "Introduction to Claude Cowork",
    subtitle: "Article 1",
    icon: <BookOpen className="h-4 w-4" />,
    content: (
      <div className="space-y-8">
        {/* What is Claude Cowork */}
        <section>
          <h3 className="mb-4 text-xl font-semibold">What is Claude Cowork?</h3>
          <p className="mb-4 text-black/70 dark:text-white/70">
            Claude Cowork is an <strong>agentic AI assistant</strong> that goes beyond simple conversations.
            Unlike traditional chatbots that respond to one message at a time, Cowork can autonomously
            plan, execute, and complete multi-step tasks on your behalf.
          </p>
          <div className="rounded-2xl border border-black/10 bg-white/50 p-5 dark:border-white/10 dark:bg-white/5">
            <p className="text-sm text-black/70 dark:text-white/70">
              Think of it as a digital coworker who can take a vague instruction like
              <em className="mx-1 text-[#c08b2d]">&quot;organize my downloads folder and create a summary report&quot;</em>
              and independently figure out how to accomplish it—sorting files, categorizing content,
              generating documents, and delivering polished results.
            </p>
          </div>
        </section>

        {/* Difference from Chat AI */}
        <section>
          <h3 className="mb-4 text-xl font-semibold">How is Cowork Different from Regular Chat AI?</h3>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-black/10 bg-white/50 p-5 dark:border-white/10 dark:bg-white/5">
              <div className="mb-3 flex items-center gap-2">
                <MessageIcon className="h-5 w-5 text-black/40 dark:text-white/40" />
                <h4 className="font-semibold text-black/60 dark:text-white/60">Traditional Chat AI</h4>
              </div>
              <ul className="space-y-2 text-sm text-black/70 dark:text-white/70">
                <li className="flex items-start gap-2">
                  <XCircle className="mt-0.5 h-4 w-4 shrink-0 text-red-500" />
                  Single turn: responds, then waits
                </li>
                <li className="flex items-start gap-2">
                  <XCircle className="mt-0.5 h-4 w-4 shrink-0 text-red-500" />
                  No file system access
                </li>
                <li className="flex items-start gap-2">
                  <XCircle className="mt-0.5 h-4 w-4 shrink-0 text-red-500" />
                  Cannot execute code or scripts
                </li>
                <li className="flex items-start gap-2">
                  <XCircle className="mt-0.5 h-4 w-4 shrink-0 text-red-500" />
                  Requires manual step-by-step guidance
                </li>
              </ul>
            </div>
            <div className="rounded-2xl border border-[#c08b2d]/30 bg-gradient-to-br from-[#f7d793]/10 to-[#c08b2d]/10 p-5">
              <div className="mb-3 flex items-center gap-2">
                <Sparkles className="h-5 w-5 text-[#c08b2d]" />
                <h4 className="font-semibold text-[#8a6420] dark:text-[#f7d793]">Claude Cowork</h4>
              </div>
              <ul className="space-y-2 text-sm text-black/70 dark:text-white/70">
                <li className="flex items-start gap-2">
                  <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-green-500" />
                  Autonomous: plans and executes multi-step tasks
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-green-500" />
                  Direct local file access
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-green-500" />
                  Runs code in sandboxed environment
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-green-500" />
                  Coordinates sub-agents for complex work
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Why it matters */}
        <section>
          <h3 className="mb-4 text-xl font-semibold">Why Does This Matter?</h3>
          <div className="grid gap-4 sm:grid-cols-3">
            {[
              {
                icon: <Clock className="h-6 w-6" />,
                title: "Time Savings",
                desc: "Automate hours of repetitive work into minutes of AI execution",
              },
              {
                icon: <Brain className="h-6 w-6" />,
                title: "Reduced Cognitive Load",
                desc: "Delegate complex workflows instead of managing every step",
              },
              {
                icon: <TrendingUp className="h-6 w-6" />,
                title: "Scalable Productivity",
                desc: "Handle more work without proportionally increasing effort",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-black/10 bg-white/50 p-4 text-center dark:border-white/10 dark:bg-white/5"
              >
                <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-r from-[#f7d793] to-[#c08b2d] text-black">
                  {item.icon}
                </div>
                <h4 className="mb-1 font-semibold">{item.title}</h4>
                <p className="text-sm text-black/70 dark:text-white/70">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Series Preview */}
        <section>
          <h3 className="mb-4 text-xl font-semibold">What This Guide Covers</h3>
          <div className="rounded-2xl border border-black/10 bg-white/50 p-5 dark:border-white/10 dark:bg-white/5">
            <p className="mb-4 text-sm text-black/70 dark:text-white/70">
              This comprehensive guide will walk you through everything you need to know about Claude Cowork:
            </p>
            <div className="grid gap-2 sm:grid-cols-2">
              {[
                "How Cowork&apos;s architecture works",
                "Step-by-step setup instructions",
                "Real-world use cases & examples",
                "Productivity gains analysis",
                "Limitations & security considerations",
                "Comparison with competitors",
                "Future of AI agents in the workspace",
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-2 text-sm text-black/70 dark:text-white/70">
                  <ArrowRight className="h-3 w-3 text-[#c08b2d]" />
                  <span dangerouslySetInnerHTML={{ __html: item }} />
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    ),
  },
  {
    id: "how-it-works",
    title: "How Claude Cowork Works",
    subtitle: "Article 2",
    icon: <Workflow className="h-4 w-4" />,
    content: (
      <div className="space-y-8">
        {/* Architecture Overview */}
        <section>
          <h3 className="mb-4 text-xl font-semibold">Architecture Overview</h3>
          <p className="mb-4 text-black/70 dark:text-white/70">
            Claude Cowork is built on the same powerful agentic architecture as Claude Code.
            It operates as an autonomous agent that can reason, plan, and execute complex workflows
            while maintaining transparency and user control.
          </p>
          <div className="rounded-2xl border border-black/10 bg-white/50 p-5 dark:border-white/10 dark:bg-white/5">
            <div className="grid gap-4 sm:grid-cols-3">
              {[
                {
                  icon: <Brain className="h-6 w-6" />,
                  title: "Planning Layer",
                  desc: "Analyzes requests and breaks them into actionable steps",
                },
                {
                  icon: <Cpu className="h-6 w-6" />,
                  title: "Execution Engine",
                  desc: "Runs tasks in isolated sandbox environment",
                },
                {
                  icon: <Layers className="h-6 w-6" />,
                  title: "Coordination System",
                  desc: "Manages sub-agents for parallel workflows",
                },
              ].map((item) => (
                <div key={item.title} className="text-center">
                  <div className="mx-auto mb-2 flex h-10 w-10 items-center justify-center rounded-lg bg-[#c08b2d]/20 text-[#c08b2d]">
                    {item.icon}
                  </div>
                  <h4 className="mb-1 text-sm font-semibold">{item.title}</h4>
                  <p className="text-xs text-black/60 dark:text-white/60">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Integration with Claude Desktop */}
        <section>
          <h3 className="mb-4 text-xl font-semibold">Integration with Claude Desktop</h3>
          <p className="mb-4 text-black/70 dark:text-white/70">
            Cowork runs directly within the Claude Desktop application on macOS. This native integration provides:
          </p>
          <div className="space-y-3">
            {[
              {
                title: "Local File System Access",
                desc: "Read, write, and organize files in your designated workspace folders",
                icon: <FolderOpen className="h-5 w-5" />,
              },
              {
                title: "Sandboxed Code Execution",
                desc: "Run scripts and tools safely in an isolated virtual environment",
                icon: <Terminal className="h-5 w-5" />,
              },
              {
                title: "Native App Performance",
                desc: "Smooth operation without browser limitations or latency issues",
                icon: <Monitor className="h-5 w-5" />,
              },
              {
                title: "Persistent Sessions",
                desc: "Continue long-running tasks while the app remains open",
                icon: <Clock className="h-5 w-5" />,
              },
            ].map((item) => (
              <div
                key={item.title}
                className="flex gap-4 rounded-xl border border-black/10 bg-white/50 p-4 dark:border-white/10 dark:bg-white/5"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#c08b2d]/20 text-[#c08b2d]">
                  {item.icon}
                </div>
                <div>
                  <h4 className="font-semibold">{item.title}</h4>
                  <p className="text-sm text-black/70 dark:text-white/70">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Comparison Table */}
        <section>
          <h3 className="mb-4 text-xl font-semibold">Claude Chat vs Claude Code vs Cowork</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-black/10 dark:border-white/10">
                  <th className="py-3 pr-4 text-left font-semibold">Feature</th>
                  <th className="px-4 py-3 text-center font-semibold">Chat</th>
                  <th className="px-4 py-3 text-center font-semibold">Code</th>
                  <th className="px-4 py-3 text-center font-semibold text-[#c08b2d]">Cowork</th>
                </tr>
              </thead>
              <tbody className="text-black/70 dark:text-white/70">
                {[
                  ["Conversational AI", "✓", "✓", "✓"],
                  ["File System Access", "✗", "✓", "✓"],
                  ["Code Execution", "✗", "✓", "✓"],
                  ["Multi-step Tasks", "✗", "✓", "✓"],
                  ["Sub-agent Coordination", "✗", "✗", "✓"],
                  ["Document Generation", "Limited", "✓", "✓"],
                  ["Target Users", "General", "Developers", "Knowledge Workers"],
                ].map((row, idx) => (
                  <tr key={idx} className="border-b border-black/5 dark:border-white/5">
                    <td className="py-3 pr-4 font-medium">{row[0]}</td>
                    <td className="px-4 py-3 text-center">{row[1]}</td>
                    <td className="px-4 py-3 text-center">{row[2]}</td>
                    <td className="px-4 py-3 text-center font-medium text-[#c08b2d]">{row[3]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Multi-step Task Processing */}
        <section>
          <h3 className="mb-4 text-xl font-semibold">How Multi-Step Tasks Are Processed</h3>
          <div className="space-y-3">
            {[
              {
                step: 1,
                title: "Request Analysis",
                desc: "Cowork interprets your natural language request and identifies the core objective",
              },
              {
                step: 2,
                title: "Task Decomposition",
                desc: "Complex requests are broken into smaller, manageable sub-tasks",
              },
              {
                step: 3,
                title: "Resource Planning",
                desc: "Identifies required files, tools, and permissions needed for execution",
              },
              {
                step: 4,
                title: "Parallel Execution",
                desc: "Independent sub-tasks run simultaneously via coordinated sub-agents",
              },
              {
                step: 5,
                title: "Result Synthesis",
                desc: "Outputs are combined, formatted, and delivered to your file system",
              },
            ].map((item) => (
              <div
                key={item.step}
                className="flex items-start gap-4 rounded-xl border border-black/10 bg-white/50 p-4 dark:border-white/10 dark:bg-white/5"
              >
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gradient-to-r from-[#f7d793] to-[#c08b2d] text-sm font-bold text-black">
                  {item.step}
                </span>
                <div>
                  <h4 className="font-semibold">{item.title}</h4>
                  <p className="text-sm text-black/70 dark:text-white/70">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    ),
  },
  {
    id: "setup",
    title: "Setting Up Claude Cowork",
    subtitle: "Article 3",
    icon: <Rocket className="h-4 w-4" />,
    content: (
      <div className="space-y-8">
        {/* Requirements */}
        <section>
          <h3 className="mb-4 text-xl font-semibold">Requirements</h3>
          <div className="grid gap-4 sm:grid-cols-3">
            {[
              {
                icon: <Monitor className="h-6 w-6" />,
                title: "macOS",
                desc: "Currently available only on macOS via Claude Desktop",
              },
              {
                icon: <Sparkles className="h-6 w-6" />,
                title: "Max Subscription",
                desc: "Requires an active Claude Max plan subscription",
              },
              {
                icon: <Globe className="h-6 w-6" />,
                title: "Internet Connection",
                desc: "Stable connection for API communication",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-black/10 bg-white/50 p-4 text-center dark:border-white/10 dark:bg-white/5"
              >
                <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-[#c08b2d]/20 text-[#c08b2d]">
                  {item.icon}
                </div>
                <h4 className="mb-1 font-semibold">{item.title}</h4>
                <p className="text-sm text-black/70 dark:text-white/70">{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-4 rounded-2xl border border-amber-500/30 bg-amber-500/10 p-4 dark:border-amber-400/30 dark:bg-amber-400/10">
            <div className="flex items-start gap-3">
              <AlertTriangle className="mt-0.5 h-5 w-5 shrink-0 text-amber-600 dark:text-amber-400" />
              <p className="text-sm text-amber-700/80 dark:text-amber-300/80">
                <strong>Note:</strong> Cowork is currently in research preview. Windows and Linux support
                may be added in future releases. Non-Max users can join the waitlist.
              </p>
            </div>
          </div>
        </section>

        {/* Granting Folder Access */}
        <section>
          <h3 className="mb-4 text-xl font-semibold">Granting Folder Access</h3>
          <p className="mb-4 text-black/70 dark:text-white/70">
            Cowork requires explicit permission to access folders on your system. This permission model
            ensures your files remain secure while enabling powerful automation.
          </p>
          <div className="space-y-3">
            {[
              {
                step: "1",
                title: "Create a Dedicated Workspace",
                desc: "Create a specific folder (e.g., ~/CoworkSpace) for Cowork to access. Keep sensitive files outside this folder.",
              },
              {
                step: "2",
                title: "Grant Access When Prompted",
                desc: "When you first use Cowork, you&apos;ll see a macOS security dialog. Click \"Allow\" to grant folder access.",
              },
              {
                step: "3",
                title: "Manage Permissions in Settings",
                desc: "You can revoke or modify folder access anytime via Claude Desktop → Settings → Cowork → Folder Access.",
              },
            ].map((item) => (
              <div
                key={item.step}
                className="flex gap-4 rounded-xl border border-black/10 bg-white/50 p-4 dark:border-white/10 dark:bg-white/5"
              >
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border-2 border-[#c08b2d] text-sm font-bold text-[#c08b2d]">
                  {item.step}
                </span>
                <div>
                  <h4 className="font-semibold">{item.title}</h4>
                  <p className="text-sm text-black/70 dark:text-white/70">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Switching to Cowork Mode */}
        <section>
          <h3 className="mb-4 text-xl font-semibold">Switching to Cowork Mode</h3>
          <div className="rounded-2xl border border-black/10 bg-white/50 p-5 dark:border-white/10 dark:bg-white/5">
            <ol className="space-y-4">
              {[
                "Open the Claude Desktop application",
                "Look for the mode selector at the top of the interface",
                "You&apos;ll see two tabs: \"Chat\" and \"Cowork\"",
                "Click the \"Cowork\" tab to switch to Tasks mode",
                "Enter your task description in the input field",
                "Review the proposed approach and click \"Run\" to execute",
              ].map((step, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gradient-to-r from-[#f7d793] to-[#c08b2d] text-xs font-bold text-black">
                    {idx + 1}
                  </span>
                  <span className="text-black/70 dark:text-white/70" dangerouslySetInnerHTML={{ __html: step }} />
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Workspace Tips */}
        <section>
          <h3 className="mb-4 text-xl font-semibold">Tips for Managing Workspace Folders</h3>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              {
                icon: <FolderOpen className="h-5 w-5" />,
                title: "Use Dedicated Folders",
                desc: "Create separate folders for different project types to keep things organized",
              },
              {
                icon: <Lock className="h-5 w-5" />,
                title: "Isolate Sensitive Data",
                desc: "Keep confidential files in folders NOT accessible to Cowork",
              },
              {
                icon: <FileText className="h-5 w-5" />,
                title: "Organize Input Files",
                desc: "Place files you want Cowork to process in clearly labeled subfolders",
              },
              {
                icon: <CheckCircle className="h-5 w-5" />,
                title: "Review Output Location",
                desc: "Know where Cowork will save generated files before running tasks",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="flex gap-3 rounded-xl border border-black/10 bg-white/50 p-4 dark:border-white/10 dark:bg-white/5"
              >
                <span className="text-[#c08b2d]">{item.icon}</span>
                <div>
                  <h4 className="font-semibold">{item.title}</h4>
                  <p className="text-sm text-black/70 dark:text-white/70">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    ),
  },
  {
    id: "use-cases",
    title: "Practical Use Cases",
    subtitle: "Article 4",
    icon: <Zap className="h-4 w-4" />,
    content: (
      <div className="space-y-8">
        <p className="text-black/70 dark:text-white/70">
          Cowork excels at automating complex, multi-step tasks that would normally require significant
          manual effort. Here are real-world examples of what you can accomplish:
        </p>

        {/* Example 1: File Organization */}
        <section>
          <div className="mb-4 flex items-center gap-3">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-500/20 text-blue-500">
              <FolderOpen className="h-5 w-5" />
            </span>
            <h3 className="text-xl font-semibold">Example 1: Auto-Organizing Files</h3>
          </div>
          <div className="rounded-2xl border border-black/10 bg-white/50 p-5 dark:border-white/10 dark:bg-white/5">
            <div className="mb-4">
              <p className="mb-2 text-sm font-medium text-black/60 dark:text-white/60">Sample Prompt:</p>
              <div className="rounded-xl bg-black/5 p-3 font-mono text-sm italic dark:bg-white/5">
                &quot;Organize all files in my Downloads folder. Sort images into Photos, documents into Documents,
                archives into Archives, and delete anything older than 6 months.&quot;
              </div>
            </div>
            <div>
              <p className="mb-2 text-sm font-medium text-black/60 dark:text-white/60">What Cowork Does:</p>
              <ul className="space-y-1 text-sm text-black/70 dark:text-white/70">
                <li className="flex items-center gap-2"><ChevronRight className="h-3 w-3 text-[#c08b2d]" /> Scans all files and identifies types</li>
                <li className="flex items-center gap-2"><ChevronRight className="h-3 w-3 text-[#c08b2d]" /> Creates target folder structure</li>
                <li className="flex items-center gap-2"><ChevronRight className="h-3 w-3 text-[#c08b2d]" /> Moves files to appropriate locations</li>
                <li className="flex items-center gap-2"><ChevronRight className="h-3 w-3 text-[#c08b2d]" /> Identifies and removes old files</li>
                <li className="flex items-center gap-2"><ChevronRight className="h-3 w-3 text-[#c08b2d]" /> Generates a summary report</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Example 2: Data Extraction */}
        <section>
          <div className="mb-4 flex items-center gap-3">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-green-500/20 text-green-500">
              <BarChart3 className="h-5 w-5" />
            </span>
            <h3 className="text-xl font-semibold">Example 2: Bulk Data Extraction & Spreadsheet Generation</h3>
          </div>
          <div className="rounded-2xl border border-black/10 bg-white/50 p-5 dark:border-white/10 dark:bg-white/5">
            <div className="mb-4">
              <p className="mb-2 text-sm font-medium text-black/60 dark:text-white/60">Sample Prompt:</p>
              <div className="rounded-xl bg-black/5 p-3 font-mono text-sm italic dark:bg-white/5">
                &quot;Extract all sales data from the PDF invoices in my Invoices folder and create an Excel
                spreadsheet with monthly totals, charts, and trend analysis.&quot;
              </div>
            </div>
            <div>
              <p className="mb-2 text-sm font-medium text-black/60 dark:text-white/60">What Cowork Does:</p>
              <ul className="space-y-1 text-sm text-black/70 dark:text-white/70">
                <li className="flex items-center gap-2"><ChevronRight className="h-3 w-3 text-[#c08b2d]" /> Reads and parses all PDF invoices</li>
                <li className="flex items-center gap-2"><ChevronRight className="h-3 w-3 text-[#c08b2d]" /> Extracts relevant financial data</li>
                <li className="flex items-center gap-2"><ChevronRight className="h-3 w-3 text-[#c08b2d]" /> Creates Excel file with formulas</li>
                <li className="flex items-center gap-2"><ChevronRight className="h-3 w-3 text-[#c08b2d]" /> Generates charts and visualizations</li>
                <li className="flex items-center gap-2"><ChevronRight className="h-3 w-3 text-[#c08b2d]" /> Adds trend analysis calculations</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Example 3: Draft Generation */}
        <section>
          <div className="mb-4 flex items-center gap-3">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-purple-500/20 text-purple-500">
              <FileText className="h-5 w-5" />
            </span>
            <h3 className="text-xl font-semibold">Example 3: Draft Generation from Raw Notes</h3>
          </div>
          <div className="rounded-2xl border border-black/10 bg-white/50 p-5 dark:border-white/10 dark:bg-white/5">
            <div className="mb-4">
              <p className="mb-2 text-sm font-medium text-black/60 dark:text-white/60">Sample Prompt:</p>
              <div className="rounded-xl bg-black/5 p-3 font-mono text-sm italic dark:bg-white/5">
                &quot;Take my meeting notes from notes.txt and create a professional summary document with
                action items, key decisions, and attendee responsibilities in Word format.&quot;
              </div>
            </div>
            <div>
              <p className="mb-2 text-sm font-medium text-black/60 dark:text-white/60">What Cowork Does:</p>
              <ul className="space-y-1 text-sm text-black/70 dark:text-white/70">
                <li className="flex items-center gap-2"><ChevronRight className="h-3 w-3 text-[#c08b2d]" /> Reads and analyzes raw meeting notes</li>
                <li className="flex items-center gap-2"><ChevronRight className="h-3 w-3 text-[#c08b2d]" /> Identifies key discussion points</li>
                <li className="flex items-center gap-2"><ChevronRight className="h-3 w-3 text-[#c08b2d]" /> Extracts action items and owners</li>
                <li className="flex items-center gap-2"><ChevronRight className="h-3 w-3 text-[#c08b2d]" /> Formats into professional document</li>
                <li className="flex items-center gap-2"><ChevronRight className="h-3 w-3 text-[#c08b2d]" /> Exports as .docx file</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Progress Updates */}
        <section>
          <h3 className="mb-4 text-xl font-semibold">How Cowork Notifies & Updates Progress</h3>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              {
                icon: <Gauge className="h-5 w-5" />,
                title: "Real-time Progress",
                desc: "Visual indicators show current step and overall completion",
              },
              {
                icon: <BookOpen className="h-5 w-5" />,
                title: "Transparent Reasoning",
                desc: "See exactly what Cowork is thinking and doing",
              },
              {
                icon: <AlertTriangle className="h-5 w-5" />,
                title: "Error Notifications",
                desc: "Clear alerts if something unexpected occurs",
              },
              {
                icon: <CheckCircle className="h-5 w-5" />,
                title: "Completion Summary",
                desc: "Detailed report of what was accomplished",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="flex gap-3 rounded-xl border border-black/10 bg-white/50 p-4 dark:border-white/10 dark:bg-white/5"
              >
                <span className="text-[#c08b2d]">{item.icon}</span>
                <div>
                  <h4 className="font-semibold">{item.title}</h4>
                  <p className="text-sm text-black/70 dark:text-white/70">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    ),
  },
  {
    id: "productivity",
    title: "Deep Dive: Productivity Gains",
    subtitle: "Article 5",
    icon: <TrendingUp className="h-4 w-4" />,
    content: (
      <div className="space-y-8">
        {/* Reducing Manual Work */}
        <section>
          <h3 className="mb-4 text-xl font-semibold">Reducing Repetitive Manual Work</h3>
          <p className="mb-4 text-black/70 dark:text-white/70">
            The biggest productivity gain from Cowork comes from automating tasks that previously
            required tedious, repetitive effort. Instead of manually processing files one-by-one,
            you describe the outcome and let Cowork handle the execution.
          </p>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-red-500/20 bg-red-500/5 p-4">
              <h4 className="mb-3 font-semibold text-red-600 dark:text-red-400">Without Cowork</h4>
              <ul className="space-y-2 text-sm text-black/70 dark:text-white/70">
                <li>• Open each file manually</li>
                <li>• Copy data to spreadsheet</li>
                <li>• Format and organize cells</li>
                <li>• Create charts one by one</li>
                <li>• Write formulas manually</li>
                <li className="font-medium text-red-600 dark:text-red-400">⏱ ~2-3 hours</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-green-500/20 bg-green-500/5 p-4">
              <h4 className="mb-3 font-semibold text-green-600 dark:text-green-400">With Cowork</h4>
              <ul className="space-y-2 text-sm text-black/70 dark:text-white/70">
                <li>• Describe desired outcome</li>
                <li>• Review proposed approach</li>
                <li>• Click &quot;Run&quot;</li>
                <li>• Receive finished spreadsheet</li>
                <li>• Review and make minor tweaks</li>
                <li className="font-medium text-green-600 dark:text-green-400">⏱ ~10-15 minutes</li>
              </ul>
            </div>
          </div>
        </section>

        {/* MCP Connectors */}
        <section>
          <h3 className="mb-4 text-xl font-semibold">Collaboration with Other Tools (MCP Connectors)</h3>
          <p className="mb-4 text-black/70 dark:text-white/70">
            Cowork can integrate with external services through MCP (Model Context Protocol) connectors,
            extending its capabilities beyond local file operations.
          </p>
          <div className="rounded-2xl border border-black/10 bg-white/50 p-5 dark:border-white/10 dark:bg-white/5">
            <div className="grid gap-4 sm:grid-cols-3">
              {[
                { name: "Database Access", desc: "Query and update databases" },
                { name: "API Integration", desc: "Connect to web services" },
                { name: "Cloud Storage", desc: "Access Dropbox, Google Drive, etc." },
              ].map((item) => (
                <div key={item.name} className="text-center">
                  <div className="mx-auto mb-2 h-10 w-10 rounded-lg bg-[#c08b2d]/20" />
                  <h4 className="text-sm font-semibold">{item.name}</h4>
                  <p className="text-xs text-black/60 dark:text-white/60">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Time Saved Scorecard */}
        <section>
          <h3 className="mb-4 text-xl font-semibold">Time Saved: Scorecard</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-black/10 dark:border-white/10">
                  <th className="py-3 pr-4 text-left font-semibold">Task Type</th>
                  <th className="px-4 py-3 text-center font-semibold">Manual Time</th>
                  <th className="px-4 py-3 text-center font-semibold">With Cowork</th>
                  <th className="px-4 py-3 text-center font-semibold text-green-500">Savings</th>
                </tr>
              </thead>
              <tbody className="text-black/70 dark:text-white/70">
                {[
                  ["File Organization (100 files)", "45 min", "5 min", "89%"],
                  ["Data Extraction (20 PDFs)", "2 hours", "12 min", "90%"],
                  ["Report Generation", "1.5 hours", "8 min", "91%"],
                  ["Meeting Notes Summary", "30 min", "3 min", "90%"],
                  ["Spreadsheet Creation", "1 hour", "10 min", "83%"],
                ].map((row, idx) => (
                  <tr key={idx} className="border-b border-black/5 dark:border-white/5">
                    <td className="py-3 pr-4">{row[0]}</td>
                    <td className="px-4 py-3 text-center">{row[1]}</td>
                    <td className="px-4 py-3 text-center">{row[2]}</td>
                    <td className="px-4 py-3 text-center font-bold text-green-500">{row[3]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* User Experiences */}
        <section>
          <h3 className="mb-4 text-xl font-semibold">What Users Are Saying</h3>
          <div className="space-y-4">
            {[
              {
                quote: "I used to spend my Sunday evenings organizing files from the week. Now Cowork handles it in 10 minutes while I make coffee.",
                author: "Product Manager",
              },
              {
                quote: "Generating monthly reports used to be a dreaded task. Cowork turned it into a simple prompt and I get better results.",
                author: "Operations Lead",
              },
              {
                quote: "The ability to batch process documents and extract data into spreadsheets has been game-changing for our team.",
                author: "Data Analyst",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="rounded-2xl border border-black/10 bg-white/50 p-5 dark:border-white/10 dark:bg-white/5"
              >
                <p className="mb-3 italic text-black/70 dark:text-white/70">&quot;{item.quote}&quot;</p>
                <p className="text-sm font-medium text-[#c08b2d]">— {item.author}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    ),
  },
  {
    id: "limitations",
    title: "Limitations & Risks",
    subtitle: "Article 6",
    icon: <Shield className="h-4 w-4" />,
    content: (
      <div className="space-y-8">
        {/* Security Concerns */}
        <section>
          <h3 className="mb-4 text-xl font-semibold">Risks of Granting File Access</h3>
          <div className="rounded-2xl border border-red-500/30 bg-red-500/10 p-5 dark:border-red-400/30 dark:bg-red-400/10">
            <div className="flex items-start gap-3">
              <AlertTriangle className="mt-0.5 h-6 w-6 shrink-0 text-red-600 dark:text-red-400" />
              <div>
                <h4 className="mb-2 font-semibold text-red-700 dark:text-red-300">Important Security Considerations</h4>
                <p className="mb-3 text-sm text-red-700/80 dark:text-red-300/80">
                  Granting Cowork access to your file system gives it significant power. While operations
                  run in a sandbox, you should understand the implications:
                </p>
                <ul className="space-y-2 text-sm text-red-700/80 dark:text-red-300/80">
                  <li className="flex items-start gap-2">
                    <XCircle className="mt-0.5 h-4 w-4 shrink-0" />
                    Cowork can read, modify, and delete files in accessible folders
                  </li>
                  <li className="flex items-start gap-2">
                    <XCircle className="mt-0.5 h-4 w-4 shrink-0" />
                    Mistakes in task descriptions could lead to unintended file changes
                  </li>
                  <li className="flex items-start gap-2">
                    <XCircle className="mt-0.5 h-4 w-4 shrink-0" />
                    Internet access means potential exposure to external resources
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Preview Limitations */}
        <section>
          <h3 className="mb-4 text-xl font-semibold">Preview Status & Limitations</h3>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              {
                icon: <Monitor className="h-5 w-5" />,
                title: "macOS Only",
                desc: "Currently unavailable on Windows or Linux",
              },
              {
                icon: <Sparkles className="h-5 w-5" />,
                title: "Max Plan Required",
                desc: "Not available on free or lower-tier plans",
              },
              {
                icon: <Gauge className="h-5 w-5" />,
                title: "Usage Quotas",
                desc: "Tasks consume more quota than standard chat",
              },
              {
                icon: <Clock className="h-5 w-5" />,
                title: "Session Dependency",
                desc: "Closing the app stops running tasks",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="flex gap-3 rounded-xl border border-black/10 bg-white/50 p-4 dark:border-white/10 dark:bg-white/5"
              >
                <span className="text-black/40 dark:text-white/40">{item.icon}</span>
                <div>
                  <h4 className="font-semibold">{item.title}</h4>
                  <p className="text-sm text-black/70 dark:text-white/70">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* When Not to Use */}
        <section>
          <h3 className="mb-4 text-xl font-semibold">When NOT to Use Cowork</h3>
          <div className="rounded-2xl border border-amber-500/30 bg-amber-500/10 p-5 dark:border-amber-400/30 dark:bg-amber-400/10">
            <ul className="space-y-3 text-sm text-amber-700/80 dark:text-amber-300/80">
              {[
                "Processing files with highly sensitive personal information",
                "Tasks where mistakes could have irreversible consequences",
                "Operations on production systems without proper backups",
                "When you need real-time human judgment throughout the process",
                "For simple queries better suited to standard Chat mode",
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <XCircle className="mt-0.5 h-4 w-4 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Best Practices */}
        <section>
          <h3 className="mb-4 text-xl font-semibold">Best Practices to Mitigate Risks</h3>
          <div className="space-y-3">
            {[
              {
                icon: <FolderOpen className="h-5 w-5" />,
                title: "Use Dedicated Workspace Folders",
                desc: "Never grant access to your entire home directory. Create isolated folders for Cowork.",
              },
              {
                icon: <CheckCircle className="h-5 w-5" />,
                title: "Review Before Executing",
                desc: "Always review Cowork&apos;s proposed plan before clicking Run. Understand what it will do.",
              },
              {
                icon: <FileText className="h-5 w-5" />,
                title: "Backup Important Files",
                desc: "Maintain backups of critical files before running tasks that modify them.",
              },
              {
                icon: <Lock className="h-5 w-5" />,
                title: "Start with Low-Risk Tasks",
                desc: "Begin with simple, reversible tasks to understand Cowork&apos;s behavior before complex operations.",
              },
              {
                icon: <Monitor className="h-5 w-5" />,
                title: "Monitor Long-Running Tasks",
                desc: "Periodically check on tasks that take extended time. You can intervene if needed.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="flex gap-4 rounded-xl border border-black/10 bg-white/50 p-4 dark:border-white/10 dark:bg-white/5"
              >
                <span className="text-[#c08b2d]">{item.icon}</span>
                <div>
                  <h4 className="font-semibold">{item.title}</h4>
                  <p className="text-sm text-black/70 dark:text-white/70" dangerouslySetInnerHTML={{ __html: item.desc }} />
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    ),
  },
  {
    id: "comparison",
    title: "Claude Cowork vs. Competitors",
    subtitle: "Article 7",
    icon: <GitCompare className="h-4 w-4" />,
    content: (
      <div className="space-y-8">
        {/* Comparison Overview */}
        <section>
          <h3 className="mb-4 text-xl font-semibold">Cowork vs. Other AI Agents</h3>
          <p className="mb-4 text-black/70 dark:text-white/70">
            The AI agent landscape is rapidly evolving. Here&apos;s how Claude Cowork compares to other
            productivity-focused AI assistants:
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-black/10 dark:border-white/10">
                  <th className="py-3 pr-4 text-left font-semibold">Feature</th>
                  <th className="px-4 py-3 text-center font-semibold text-[#c08b2d]">Cowork</th>
                  <th className="px-4 py-3 text-center font-semibold">Copilot</th>
                  <th className="px-4 py-3 text-center font-semibold">Others</th>
                </tr>
              </thead>
              <tbody className="text-black/70 dark:text-white/70">
                {[
                  ["Autonomous Task Execution", "✓", "Limited", "Varies"],
                  ["Local File Access", "✓", "✗", "Rare"],
                  ["Sub-agent Coordination", "✓", "✗", "✗"],
                  ["Office Document Generation", "✓", "✓", "Limited"],
                  ["Transparent Reasoning", "✓", "Partial", "Varies"],
                  ["Sandboxed Execution", "✓", "N/A", "Varies"],
                  ["Multi-step Workflows", "✓", "Limited", "Limited"],
                ].map((row, idx) => (
                  <tr key={idx} className="border-b border-black/5 dark:border-white/5">
                    <td className="py-3 pr-4 font-medium">{row[0]}</td>
                    <td className="px-4 py-3 text-center font-medium text-[#c08b2d]">{row[1]}</td>
                    <td className="px-4 py-3 text-center">{row[2]}</td>
                    <td className="px-4 py-3 text-center">{row[3]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Unique Selling Points */}
        <section>
          <h3 className="mb-4 text-xl font-semibold">Cowork&apos;s Unique Selling Points</h3>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              {
                icon: <Brain className="h-6 w-6" />,
                title: "True Agentic Architecture",
                desc: "Built on the same proven architecture as Claude Code, designed for autonomous operation",
              },
              {
                icon: <Layers className="h-6 w-6" />,
                title: "Sub-Agent Coordination",
                desc: "Can spawn and manage multiple parallel workers for complex tasks—unique in the market",
              },
              {
                icon: <Lock className="h-6 w-6" />,
                title: "Transparent & Controllable",
                desc: "Full visibility into reasoning and the ability to intervene at any point",
              },
              {
                icon: <Monitor className="h-6 w-6" />,
                title: "Native Desktop Integration",
                desc: "Runs locally with direct file system access, not limited by browser sandboxing",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-[#c08b2d]/30 bg-gradient-to-br from-[#f7d793]/10 to-[#c08b2d]/10 p-5"
              >
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-[#c08b2d]/20 text-[#c08b2d]">
                  {item.icon}
                </div>
                <h4 className="mb-1 font-semibold">{item.title}</h4>
                <p className="text-sm text-black/70 dark:text-white/70">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Limitations in Context */}
        <section>
          <h3 className="mb-4 text-xl font-semibold">Limitations in Market Context</h3>
          <div className="rounded-2xl border border-black/10 bg-white/50 p-5 dark:border-white/10 dark:bg-white/5">
            <ul className="space-y-3 text-sm text-black/70 dark:text-white/70">
              <li className="flex items-start gap-3">
                <span className="mt-0.5 h-2 w-2 shrink-0 rounded-full bg-amber-500" />
                <span><strong>Platform limitation:</strong> macOS-only limits potential user base compared to cross-platform competitors</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-0.5 h-2 w-2 shrink-0 rounded-full bg-amber-500" />
                <span><strong>Pricing:</strong> Requires Max subscription, higher barrier than free-tier alternatives</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-0.5 h-2 w-2 shrink-0 rounded-full bg-amber-500" />
                <span><strong>Preview status:</strong> Still in research preview, lacking some enterprise features</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-0.5 h-2 w-2 shrink-0 rounded-full bg-amber-500" />
                <span><strong>Ecosystem:</strong> Newer than established productivity suites with existing integrations</span>
              </li>
            </ul>
          </div>
        </section>

        {/* Future Outlook */}
        <section>
          <h3 className="mb-4 text-xl font-semibold">Future Outlook</h3>
          <div className="rounded-2xl border border-green-500/20 bg-green-500/5 p-5">
            <p className="mb-3 text-black/70 dark:text-white/70">
              Cowork is positioned to become a leading AI agent for knowledge workers as Anthropic continues development:
            </p>
            <div className="grid gap-3 sm:grid-cols-2">
              {[
                "Windows & Linux support expected",
                "Expanded MCP connector ecosystem",
                "Team collaboration features",
                "Enterprise security certifications",
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-2 text-sm text-green-700 dark:text-green-400">
                  <ArrowRight className="h-3 w-3" />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    ),
  },
  {
    id: "future",
    title: "Future of AI Agents in Workspace",
    subtitle: "Article 8",
    icon: <Lightbulb className="h-4 w-4" />,
    content: (
      <div className="space-y-8">
        {/* What Cowork Signals */}
        <section>
          <h3 className="mb-4 text-xl font-semibold">What Cowork Signals About Agentic AI</h3>
          <p className="mb-4 text-black/70 dark:text-white/70">
            Claude Cowork represents a significant shift in how we interact with AI. It&apos;s not just
            an incremental improvement—it signals the arrival of truly autonomous AI agents that can
            understand intent and execute complex workflows independently.
          </p>
          <div className="rounded-2xl border border-[#c08b2d]/30 bg-gradient-to-br from-[#f7d793]/10 to-[#c08b2d]/10 p-5">
            <div className="grid gap-4 sm:grid-cols-3">
              {[
                {
                  icon: <Brain className="h-6 w-6" />,
                  title: "Intent Understanding",
                  desc: "AI that grasps what you want, not just what you say",
                },
                {
                  icon: <Workflow className="h-6 w-6" />,
                  title: "Autonomous Execution",
                  desc: "Tasks completed without step-by-step guidance",
                },
                {
                  icon: <Users className="h-6 w-6" />,
                  title: "Human-AI Collaboration",
                  desc: "Oversight and control when you need it",
                },
              ].map((item) => (
                <div key={item.title} className="text-center">
                  <div className="mx-auto mb-2 flex h-12 w-12 items-center justify-center rounded-xl bg-[#c08b2d]/20 text-[#c08b2d]">
                    {item.icon}
                  </div>
                  <h4 className="mb-1 text-sm font-semibold">{item.title}</h4>
                  <p className="text-xs text-black/60 dark:text-white/60">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Broader Trends */}
        <section>
          <h3 className="mb-4 text-xl font-semibold">Broader Trends in Autonomous AI Assistants</h3>
          <div className="space-y-3">
            {[
              {
                title: "From Chatbots to Agents",
                desc: "AI is evolving from reactive Q&A to proactive task completion. The era of \"chat with AI\" is giving way to \"delegate to AI.\"",
              },
              {
                title: "Multi-Modal Understanding",
                desc: "Future agents will seamlessly work with text, images, audio, and video, understanding context across all formats.",
              },
              {
                title: "Tool Use & Integration",
                desc: "AI agents are becoming universal connectors, able to use any software tool or API as naturally as humans do.",
              },
              {
                title: "Personalization & Memory",
                desc: "Agents will learn your preferences, workflows, and organizational knowledge to become more effective over time.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-xl border border-black/10 bg-white/50 p-4 dark:border-white/10 dark:bg-white/5"
              >
                <h4 className="mb-1 font-semibold">{item.title}</h4>
                <p className="text-sm text-black/70 dark:text-white/70">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Predictions */}
        <section>
          <h3 className="mb-4 text-xl font-semibold">Predictions for Next-Gen Productivity Tools</h3>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              {
                year: "Near Term",
                items: [
                  "Cross-platform AI agents (all OS)",
                  "Real-time collaboration with agents",
                  "Voice-controlled task delegation",
                  "Integration with all major software",
                ],
              },
              {
                year: "Medium Term",
                items: [
                  "AI agents with persistent memory",
                  "Multi-agent team workflows",
                  "Proactive task suggestions",
                  "Enterprise-grade security & compliance",
                ],
              },
            ].map((period) => (
              <div
                key={period.year}
                className="rounded-2xl border border-black/10 bg-white/50 p-5 dark:border-white/10 dark:bg-white/5"
              >
                <h4 className="mb-3 font-semibold text-[#c08b2d]">{period.year}</h4>
                <ul className="space-y-2 text-sm text-black/70 dark:text-white/70">
                  {period.items.map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <ArrowRight className="h-3 w-3 text-[#c08b2d]" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* How to Prepare */}
        <section>
          <h3 className="mb-4 text-xl font-semibold">How Users Can Prepare</h3>
          <div className="rounded-2xl border border-green-500/20 bg-green-500/5 p-5">
            <div className="space-y-3">
              {[
                {
                  title: "Start Using AI Agents Now",
                  desc: "Early experience with tools like Cowork builds intuition for effective human-AI collaboration",
                },
                {
                  title: "Organize Your Digital Workspace",
                  desc: "Clean, well-organized files and folders make AI automation more effective",
                },
                {
                  title: "Learn to Write Clear Task Descriptions",
                  desc: "The skill of describing outcomes clearly will become increasingly valuable",
                },
                {
                  title: "Understand AI Capabilities & Limits",
                  desc: "Knowing what AI can and can&apos;t do helps you delegate appropriately",
                },
                {
                  title: "Stay Informed on AI Developments",
                  desc: "The field moves fast—keep up with new tools and best practices",
                },
              ].map((item) => (
                <div key={item.title} className="flex items-start gap-3">
                  <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-green-500" />
                  <div>
                    <h4 className="font-semibold text-green-700 dark:text-green-400">{item.title}</h4>
                    <p className="text-sm text-black/70 dark:text-white/70" dangerouslySetInnerHTML={{ __html: item.desc }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    ),
  },
  {
    id: "appendix",
    title: "Quick Command Templates",
    subtitle: "Appendix",
    icon: <Terminal className="h-4 w-4" />,
    content: (
      <div className="space-y-8">
        <p className="text-black/70 dark:text-white/70">
          Copy and customize these prompt templates for common Cowork tasks:
        </p>

        {/* File Organization */}
        <section>
          <h3 className="mb-4 text-xl font-semibold">File Organization</h3>
          <div className="space-y-3">
            {[
              {
                title: "Sort by File Type",
                prompt: "Organize all files in [FOLDER] by file type. Create subfolders for images, documents, videos, and archives. Move each file to its appropriate folder.",
              },
              {
                title: "Sort by Date",
                prompt: "Organize files in [FOLDER] by creation date. Create year/month subfolders (e.g., 2024/January) and move files accordingly.",
              },
              {
                title: "Cleanup Old Files",
                prompt: "Find all files in [FOLDER] older than [X] months. List them for review, then move to a \"To Delete\" folder.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-xl border border-black/10 bg-white/50 p-4 dark:border-white/10 dark:bg-white/5"
              >
                <h4 className="mb-2 font-semibold">{item.title}</h4>
                <code className="block rounded-lg bg-black/5 p-3 text-sm dark:bg-white/5">{item.prompt}</code>
              </div>
            ))}
          </div>
        </section>

        {/* Document Processing */}
        <section>
          <h3 className="mb-4 text-xl font-semibold">Document Processing</h3>
          <div className="space-y-3">
            {[
              {
                title: "PDF to Spreadsheet",
                prompt: "Extract all tabular data from the PDF files in [FOLDER] and create a consolidated Excel spreadsheet with one sheet per PDF.",
              },
              {
                title: "Meeting Notes Summary",
                prompt: "Read [FILE] and create a professional meeting summary with: attendees, key discussion points, decisions made, and action items with owners.",
              },
              {
                title: "Document Merge",
                prompt: "Combine all Word documents in [FOLDER] into a single document, maintaining formatting and adding a table of contents.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-xl border border-black/10 bg-white/50 p-4 dark:border-white/10 dark:bg-white/5"
              >
                <h4 className="mb-2 font-semibold">{item.title}</h4>
                <code className="block rounded-lg bg-black/5 p-3 text-sm dark:bg-white/5">{item.prompt}</code>
              </div>
            ))}
          </div>
        </section>

        {/* Data Analysis */}
        <section>
          <h3 className="mb-4 text-xl font-semibold">Data Analysis</h3>
          <div className="space-y-3">
            {[
              {
                title: "Sales Report",
                prompt: "Analyze the CSV files in [FOLDER] and create an Excel report showing: monthly totals, top products, trends, and visualizations.",
              },
              {
                title: "Comparison Analysis",
                prompt: "Compare data in [FILE1] and [FILE2]. Identify differences, similarities, and create a summary report highlighting key findings.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-xl border border-black/10 bg-white/50 p-4 dark:border-white/10 dark:bg-white/5"
              >
                <h4 className="mb-2 font-semibold">{item.title}</h4>
                <code className="block rounded-lg bg-black/5 p-3 text-sm dark:bg-white/5">{item.prompt}</code>
              </div>
            ))}
          </div>
        </section>

        {/* Content Creation */}
        <section>
          <h3 className="mb-4 text-xl font-semibold">Content Creation</h3>
          <div className="space-y-3">
            {[
              {
                title: "Presentation from Document",
                prompt: "Create a PowerPoint presentation based on [FILE]. Include: title slide, key points as bullet slides, and a summary slide with professional formatting.",
              },
              {
                title: "Report from Multiple Sources",
                prompt: "Read all files in [FOLDER] and synthesize into a comprehensive report. Include an executive summary, detailed findings, and recommendations.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-xl border border-black/10 bg-white/50 p-4 dark:border-white/10 dark:bg-white/5"
              >
                <h4 className="mb-2 font-semibold">{item.title}</h4>
                <code className="block rounded-lg bg-black/5 p-3 text-sm dark:bg-white/5">{item.prompt}</code>
              </div>
            ))}
          </div>
        </section>
      </div>
    ),
  },
];

// Custom message icon component
function MessageIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    </svg>
  );
}

export default function DocsPage() {
  const [activeSection, setActiveSection] = useState("introduction");
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("theme");
    const shouldBeDark = stored === "dark" || !stored;
    setIsDarkMode(shouldBeDark);
    document.documentElement.classList.toggle("dark", shouldBeDark);
  }, []);

  const toggleTheme = () => {
    const next = !isDarkMode;
    setIsDarkMode(next);
    localStorage.setItem("theme", next ? "dark" : "light");
    document.documentElement.classList.toggle("dark", next);
  };

  const currentSection = docSections.find((s) => s.id === activeSection) || docSections[0];

  return (
    <div className="min-h-screen bg-[#f7f7f0] text-[#0f0f0f] dark:bg-[#050505] dark:text-white">
      {/* Header */}
      <header className="sticky top-0 z-30 border-b border-black/10 bg-white/80 backdrop-blur dark:border-white/10 dark:bg-black/60">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4">
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="rounded-lg border border-black/10 p-2 dark:border-white/10 lg:hidden"
            >
              {sidebarOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
            <Link href="/" className="flex items-center gap-3">
              <Image
                src="/logo.png"
                alt="Claude Cowork"
                width={36}
                height={36}
                className="h-9 w-9 rounded-full border border-black/10 object-cover dark:border-white/20"
              />
              <div className="hidden sm:block">
                <p className="text-base font-semibold">Claude Cowork</p>
                <p className="text-xs uppercase tracking-[0.2em] text-black/60 dark:text-white/60">
                  Documentation
                </p>
              </div>
            </Link>
          </div>

          <div className="flex items-center gap-3">
            <Link
              href="/"
              className="hidden items-center gap-1 text-sm text-black/70 hover:text-black dark:text-white/70 dark:hover:text-white sm:flex"
            >
              Back to Home <ExternalLink className="h-3 w-3" />
            </Link>
            <button
              onClick={toggleTheme}
              className="flex items-center gap-2 rounded-full border border-black/10 px-3 py-2 text-sm font-semibold transition hover:border-black dark:border-white/20 dark:hover:border-white"
            >
              {isDarkMode ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
              <span className="hidden sm:inline">{isDarkMode ? "Light" : "Dark"}</span>
            </button>
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-7xl lg:flex">
        {/* Sidebar */}
        <aside
          className={`fixed inset-y-0 left-0 z-20 mt-16 w-72 transform overflow-y-auto border-r border-black/10 bg-white/90 backdrop-blur transition-transform dark:border-white/10 dark:bg-[#0a0a0a]/90 lg:static lg:mt-0 lg:translate-x-0 ${
            sidebarOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <nav className="sticky top-0 space-y-1 p-4">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-black/50 dark:text-white/50">
              Claude Cowork Guide
            </p>
            {docSections.map((section) => (
              <button
                key={section.id}
                onClick={() => {
                  setActiveSection(section.id);
                  setSidebarOpen(false);
                }}
                className={`flex w-full flex-col items-start rounded-xl px-3 py-2.5 text-left transition ${
                  activeSection === section.id
                    ? "bg-gradient-to-r from-[#f7d793]/30 to-[#c08b2d]/20 text-[#8a6420] dark:from-[#f7d793]/20 dark:to-[#c08b2d]/10 dark:text-[#f7d793]"
                    : "text-black/70 hover:bg-black/5 dark:text-white/70 dark:hover:bg-white/5"
                }`}
              >
                <div className="flex items-center gap-3">
                  {section.icon}
                  <span className="text-sm font-medium">{section.title}</span>
                </div>
                <span className="ml-7 text-xs opacity-60">{section.subtitle}</span>
              </button>
            ))}
          </nav>
        </aside>

        {/* Overlay */}
        {sidebarOpen && (
          <div
            className="fixed inset-0 z-10 bg-black/20 backdrop-blur-sm lg:hidden"
            onClick={() => setSidebarOpen(false)}
          />
        )}

        {/* Main Content */}
        <main className="flex-1 px-4 py-8 sm:px-6 lg:px-12 lg:py-12">
          <div className="mx-auto max-w-3xl">
            <div className="mb-8">
              <p className="mb-2 text-sm font-medium text-[#c08b2d]">{currentSection.subtitle}</p>
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-r from-[#f7d793] to-[#c08b2d] text-black">
                  {currentSection.icon}
                </div>
                <h1 className="text-3xl font-semibold">{currentSection.title}</h1>
              </div>
            </div>

            <div className="prose prose-lg max-w-none dark:prose-invert">
              {currentSection.content}
            </div>

            {/* Navigation */}
            <div className="mt-12 flex items-center justify-between border-t border-black/10 pt-6 dark:border-white/10">
              {docSections.findIndex((s) => s.id === activeSection) > 0 && (
                <button
                  onClick={() => {
                    const idx = docSections.findIndex((s) => s.id === activeSection);
                    setActiveSection(docSections[idx - 1].id);
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                  className="flex items-center gap-2 text-sm text-black/70 hover:text-black dark:text-white/70 dark:hover:text-white"
                >
                  <ChevronRight className="h-4 w-4 rotate-180" />
                  <span className="max-w-[150px] truncate">{docSections[docSections.findIndex((s) => s.id === activeSection) - 1].title}</span>
                </button>
              )}
              <div className="flex-1" />
              {docSections.findIndex((s) => s.id === activeSection) < docSections.length - 1 && (
                <button
                  onClick={() => {
                    const idx = docSections.findIndex((s) => s.id === activeSection);
                    setActiveSection(docSections[idx + 1].id);
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                  className="flex items-center gap-2 text-sm text-black/70 hover:text-black dark:text-white/70 dark:hover:text-white"
                >
                  <span className="max-w-[150px] truncate">{docSections[docSections.findIndex((s) => s.id === activeSection) + 1].title}</span>
                  <ChevronRight className="h-4 w-4" />
                </button>
              )}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
