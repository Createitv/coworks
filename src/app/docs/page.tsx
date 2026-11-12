import { siteURL } from "@/lib/site";
import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  BookOpen,
  Rocket,
  Workflow,
  Zap,
  TrendingUp,
  Shield,
  GitCompare,
  Lightbulb,
  Terminal,
  ExternalLink,
} from "lucide-react";
import { docSections } from "@/lib/doc-navigation";
import { getAllDocs } from "@/lib/markdown";
import { DocsThemeToggle } from "./docs-theme-toggle";


export const metadata: Metadata = {
  title: { absolute: "Claude Cowork Documentation: Setup, Permissions & Examples" },
  description:
    "Complete guide to Claude Cowork, the agentic AI assistant. Learn setup, use cases, productivity tips, security best practices, and how it compares to other AI tools.",
  keywords:
    "Claude Cowork documentation, AI assistant guide, Cowork tutorial, agentic AI help, task automation guide",
  alternates: {
    canonical: `${siteURL}/docs`,
  },
  openGraph: {
    title: "Claude Cowork Documentation",
    description:
      "Complete guide to Claude Cowork, the agentic AI assistant. Learn setup, use cases, productivity tips, and more.",
    type: "website",
    siteName: "Claude Cowork",
    url: `${siteURL}/docs`,
    images: [
      {
        url: `${siteURL}/logo.png`,
        width: 1024,
        height: 1024,
        alt: "Claude Cowork Documentation",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Claude Cowork Documentation",
    description:
      "Complete guide to Claude Cowork, the agentic AI assistant. Learn setup, use cases, productivity tips, and more.",
    images: [`${siteURL}/logo.png`],
  },
};

const iconMap: Record<string, React.ReactNode> = {
  "receipt-audit": <BookOpen className="h-5 w-5" />,
  introduction: <BookOpen className="h-5 w-5" />,
  "how-it-works": <Workflow className="h-5 w-5" />,
  setup: <Rocket className="h-5 w-5" />,
  "use-cases": <Zap className="h-5 w-5" />,
  productivity: <TrendingUp className="h-5 w-5" />,
  limitations: <Shield className="h-5 w-5" />,
  comparison: <GitCompare className="h-5 w-5" />,
  future: <Lightbulb className="h-5 w-5" />,
  appendix: <Terminal className="h-5 w-5" />,
};

export default function DocsIndexPage() {
  const allDocs = getAllDocs();

  return (
    <div className="min-h-screen bg-[#f7f7f0] text-[#0f0f0f] dark:bg-[#050505] dark:text-white">
      {/* Header */}
      <header className="sticky top-0 z-30 border-b border-black/10 bg-white/80 backdrop-blur dark:border-white/10 dark:bg-black/60">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
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

          <div className="flex items-center gap-3">
            <Link
              href="/"
              className="hidden items-center gap-1 text-sm text-black/70 hover:text-black dark:text-white/70 dark:hover:text-white sm:flex"
            >
              Back to Home <ExternalLink className="h-3 w-3" />
            </Link>
            <Link href="/videos" className="text-sm font-semibold underline underline-offset-4">Videos</Link>
            <DocsThemeToggle />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="mb-12 text-center">
          <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-r from-[#f7d793] to-[#c08b2d]">
            <BookOpen className="h-8 w-8 text-black" />
          </div>
          <h1 className="mb-4 text-4xl font-bold">Claude Cowork Documentation and Guides</h1>
          <p className="mx-auto max-w-2xl text-lg text-black/70 dark:text-white/70">
            Find the steps to open Cowork, fix a missing tab, connect a local folder, or try a workflow with sample data.
          </p>
        </div>

        {/* Quick Start */}
        <div className="mb-12 rounded-2xl border border-[#c08b2d]/30 bg-gradient-to-br from-[#f7d793]/10 to-[#c08b2d]/10 p-6">
          <h2 className="mb-4 text-xl font-semibold">What are you trying to do?</h2>
          <ul className="grid gap-3 sm:grid-cols-2">
            {[
              { href: "/docs/setup#start", label: "Open Cowork and start a task" },
              { href: "/docs/setup#missing-cowork", label: "Find a missing Cowork tab" },
              { href: "/docs/setup#plans-and-platforms", label: "Check plans and platforms" },
              { href: "/docs/setup#local-files", label: "Connect or troubleshoot local files" },
              { href: "/docs/receipt-audit", label: "Try a receipt audit with sample files" },
              { href: "/docs/comparison", label: "Compare Cowork with other tools" },
              { href: "/docs/templates", label: "Search and copy workflow prompts" },
              { href: "/docs/plugins-and-connectors", label: "Set up plugins, skills, and connectors" },
              { href: "/docs/scheduled-tasks", label: "Schedule a recurring task" },
              { href: "/docs/plans-and-pricing", label: "Check Cowork plans and pricing" },
              { href: "/docs/file-organization", label: "Organize files with a dry run" },
              { href: "/docs/workspace-instructions", label: "Set up reusable workspace instructions" },
            ].map(({ href, label }) => (
              <li key={href}>
                <Link href={href} className="block rounded-xl bg-white/50 p-3 text-sm font-medium underline-offset-4 hover:underline dark:bg-white/5">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <nav aria-label="Guide topics" className="mb-8 flex flex-wrap gap-4">
          {docSections.map((section) => (
            <a key={section.id} href={`#${section.id}`} className="text-sm underline underline-offset-4">{section.label}</a>
          ))}
        </nav>
        {docSections.map((section) => (
          <section key={section.id} id={section.id} className="mb-10 scroll-mt-24">
            <h2 className="mb-4 text-2xl font-semibold">{section.label}</h2>
            <div className="grid gap-3 sm:grid-cols-2">
              {section.slugs.map((slug) => {
                const doc = allDocs.find((entry) => entry.slug === slug);
                return doc && (
                  <Link key={slug} href={`/docs/${slug}`}
                    className="flex items-start gap-3 rounded-2xl border border-black/10 bg-white/50 p-4 hover:border-[#c08b2d] dark:border-white/10 dark:bg-white/5">
                    <span className="mt-1 text-[#c08b2d]">{iconMap[slug] || <BookOpen className="h-5 w-5" />}</span>
                    <div>
                      <h3 className="font-semibold">{doc.title}</h3>
                      <p className="mt-1 text-sm text-black/70 dark:text-white/70">{doc.description}</p>
                    </div>
                  </Link>
                );
              })}
            </div>
          </section>
        ))}
      </main>
    </div>
  );
}
