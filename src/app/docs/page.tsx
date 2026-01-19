import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  BookOpen,
  ChevronRight,
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
import { getAllDocs } from "@/lib/markdown";
import { DocsThemeToggle } from "./docs-theme-toggle";

const siteURL = "https://cowork.skillsmaps.com";

export const metadata: Metadata = {
  title: "Documentation | Claude Cowork — Your AI-Powered Digital Coworker",
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
        url: `${siteURL}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "Claude Cowork Documentation",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Claude Cowork Documentation",
    description:
      "Complete guide to Claude Cowork, the agentic AI assistant. Learn setup, use cases, productivity tips, and more.",
    images: [`${siteURL}/og-image.jpg`],
  },
};

const iconMap: Record<string, React.ReactNode> = {
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
          <h1 className="mb-4 text-4xl font-bold">Claude Cowork Documentation</h1>
          <p className="mx-auto max-w-2xl text-lg text-black/70 dark:text-white/70">
            Everything you need to know about Claude Cowork, from getting started to advanced use
            cases. Learn how to maximize your productivity with AI-powered task automation.
          </p>
        </div>

        {/* Quick Start */}
        <div className="mb-12 rounded-2xl border border-[#c08b2d]/30 bg-gradient-to-br from-[#f7d793]/10 to-[#c08b2d]/10 p-6">
          <h2 className="mb-4 text-xl font-semibold">Quick Start</h2>
          <p className="mb-4 text-black/70 dark:text-white/70">
            New to Cowork? Start with these essential articles:
          </p>
          <div className="grid gap-3 sm:grid-cols-3">
            {allDocs.slice(0, 3).map((doc) => (
              <Link
                key={doc.slug}
                href={`/docs/${doc.slug}`}
                className="flex items-center gap-3 rounded-xl bg-white/50 p-3 transition hover:bg-white dark:bg-white/5 dark:hover:bg-white/10"
              >
                <span className="text-[#c08b2d]">{iconMap[doc.slug]}</span>
                <span className="text-sm font-medium">{doc.title}</span>
              </Link>
            ))}
          </div>
        </div>

        {/* All Articles */}
        <div>
          <h2 className="mb-6 text-2xl font-semibold">All Articles</h2>
          <div className="space-y-4">
            {allDocs.map((doc) => (
              <Link
                key={doc.slug}
                href={`/docs/${doc.slug}`}
                className="group flex items-start gap-4 rounded-2xl border border-black/10 bg-white/50 p-5 transition hover:border-[#c08b2d]/50 hover:shadow-lg dark:border-white/10 dark:bg-white/5 dark:hover:border-[#c08b2d]/50"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-r from-[#f7d793]/50 to-[#c08b2d]/50 text-[#8a6420] transition group-hover:from-[#f7d793] group-hover:to-[#c08b2d] group-hover:text-black dark:text-[#f7d793]">
                  {iconMap[doc.slug] || <BookOpen className="h-5 w-5" />}
                </div>
                <div className="flex-1">
                  <div className="mb-1 flex items-center gap-2">
                    <span className="text-xs font-medium text-[#c08b2d]">Article {doc.order}</span>
                  </div>
                  <h3 className="mb-1 text-lg font-semibold group-hover:text-[#c08b2d]">
                    {doc.title}
                  </h3>
                  <p className="text-sm text-black/60 dark:text-white/60">{doc.description}</p>
                </div>
                <ChevronRight className="mt-4 h-5 w-5 shrink-0 text-black/30 transition group-hover:translate-x-1 group-hover:text-[#c08b2d] dark:text-white/30" />
              </Link>
            ))}
          </div>
        </div>

        {/* Footer CTA */}
        <div className="mt-12 text-center">
          <p className="mb-4 text-black/60 dark:text-white/60">
            Ready to get started with Claude Cowork?
          </p>
          <Link
            href={`/docs/${allDocs[0]?.slug || "introduction"}`}
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#f7d793] to-[#c08b2d] px-6 py-3 font-semibold text-black transition hover:opacity-90"
          >
            Start Reading
            <ChevronRight className="h-4 w-4" />
          </Link>
        </div>
      </main>
    </div>
  );
}
