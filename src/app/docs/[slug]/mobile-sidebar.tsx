"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, BookOpen, Workflow, Rocket, Zap, TrendingUp, Shield, GitCompare, Lightbulb, Terminal } from "lucide-react";
import type { DocMetadata } from "@/lib/markdown";

interface MobileSidebarProps {
  docs: DocMetadata[];
  currentSlug: string;
}

const iconMap: Record<string, React.ReactNode> = {
  introduction: <BookOpen className="h-4 w-4" />,
  "how-it-works": <Workflow className="h-4 w-4" />,
  setup: <Rocket className="h-4 w-4" />,
  "use-cases": <Zap className="h-4 w-4" />,
  productivity: <TrendingUp className="h-4 w-4" />,
  limitations: <Shield className="h-4 w-4" />,
  comparison: <GitCompare className="h-4 w-4" />,
  future: <Lightbulb className="h-4 w-4" />,
  appendix: <Terminal className="h-4 w-4" />,
};

export function MobileSidebar({ docs, currentSlug }: MobileSidebarProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setSidebarOpen(!sidebarOpen)}
        className="rounded-lg border border-black/10 p-2 dark:border-white/10 lg:hidden"
      >
        {sidebarOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
      </button>

      {/* Mobile Sidebar */}
      <aside
        className={`fixed inset-y-0 left-0 z-20 mt-16 w-72 transform overflow-y-auto border-r border-black/10 bg-white/90 backdrop-blur transition-transform dark:border-white/10 dark:bg-[#0a0a0a]/90 lg:hidden ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <nav className="space-y-1 p-4">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-black/50 dark:text-white/50">
            Claude Cowork Guide
          </p>
          {docs.map((docItem) => (
            <Link
              key={docItem.slug}
              href={`/docs/${docItem.slug}`}
              onClick={() => setSidebarOpen(false)}
              className={`flex w-full flex-col items-start rounded-xl px-3 py-2.5 text-left transition ${
                currentSlug === docItem.slug
                  ? "bg-gradient-to-r from-[#f7d793]/30 to-[#c08b2d]/20 text-[#8a6420] dark:from-[#f7d793]/20 dark:to-[#c08b2d]/10 dark:text-[#f7d793]"
                  : "text-black/70 hover:bg-black/5 dark:text-white/70 dark:hover:bg-white/5"
              }`}
            >
              <div className="flex items-center gap-3">
                {iconMap[docItem.slug] || <BookOpen className="h-4 w-4" />}
                <span className="text-sm font-medium">{docItem.title}</span>
              </div>
              <span className="ml-7 text-xs opacity-60">Article {docItem.order}</span>
            </Link>
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
    </>
  );
}
