import { Metadata } from "next";
import { notFound } from "next/navigation";
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
import { getDocBySlug, getAllDocs, getDocSlugs } from "@/lib/markdown";
import { ThemeToggle } from "./theme-toggle";
import { MobileSidebar } from "./mobile-sidebar";

interface PageProps {
  params: Promise<{ slug: string }>;
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

export async function generateStaticParams() {
  const slugs = getDocSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const doc = await getDocBySlug(slug);

  if (!doc) {
    return {
      title: "Not Found | Claude Cowork Documentation",
    };
  }

  return {
    title: `${doc.title} | Claude Cowork Documentation`,
    description: doc.description,
    keywords: doc.keywords.join(", "),
    openGraph: {
      title: doc.title,
      description: doc.description,
      type: "article",
      siteName: "Claude Cowork",
    },
    twitter: {
      card: "summary_large_image",
      title: doc.title,
      description: doc.description,
    },
  };
}

export default async function DocPage({ params }: PageProps) {
  const { slug } = await params;
  const doc = await getDocBySlug(slug);

  if (!doc) {
    notFound();
  }

  const allDocs = getAllDocs();
  const currentIndex = allDocs.findIndex((d) => d.slug === slug);
  const prevDoc = currentIndex > 0 ? allDocs[currentIndex - 1] : null;
  const nextDoc = currentIndex < allDocs.length - 1 ? allDocs[currentIndex + 1] : null;

  return (
    <div className="min-h-screen bg-[#f7f7f0] text-[#0f0f0f] dark:bg-[#050505] dark:text-white">
      {/* Header */}
      <header className="sticky top-0 z-30 border-b border-black/10 bg-white/80 backdrop-blur dark:border-white/10 dark:bg-black/60">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4">
            <MobileSidebar docs={allDocs} currentSlug={slug} />
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
              href="/docs"
              className="hidden items-center gap-1 text-sm text-black/70 hover:text-black dark:text-white/70 dark:hover:text-white sm:flex"
            >
              All Docs <ExternalLink className="h-3 w-3" />
            </Link>
            <ThemeToggle />
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-7xl lg:flex">
        {/* Sidebar */}
        <aside className="hidden w-72 shrink-0 border-r border-black/10 bg-white/90 dark:border-white/10 dark:bg-[#0a0a0a]/90 lg:block">
          <nav className="sticky top-16 space-y-1 p-4">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-black/50 dark:text-white/50">
              Claude Cowork Guide
            </p>
            {allDocs.map((docItem) => (
              <Link
                key={docItem.slug}
                href={`/docs/${docItem.slug}`}
                className={`flex w-full flex-col items-start rounded-xl px-3 py-2.5 text-left transition ${
                  slug === docItem.slug
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

        {/* Main Content */}
        <main className="flex-1 px-4 py-8 sm:px-6 lg:px-12 lg:py-12">
          <div className="mx-auto max-w-3xl">
            <div className="mb-8">
              <p className="mb-2 text-sm font-medium text-[#c08b2d]">Article {doc.order}</p>
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-r from-[#f7d793] to-[#c08b2d] text-black">
                  {iconMap[slug] || <BookOpen className="h-4 w-4" />}
                </div>
                <h1 className="text-3xl font-semibold">{doc.title}</h1>
              </div>
            </div>

            {/* Markdown Content */}
            <article
              className="prose prose-lg max-w-none dark:prose-invert prose-headings:font-semibold prose-h2:mt-8 prose-h2:border-b prose-h2:border-black/10 prose-h2:pb-2 prose-h3:mt-6 prose-a:text-[#c08b2d] prose-code:rounded prose-code:bg-black/5 prose-code:px-1.5 prose-code:py-0.5 prose-code:text-sm prose-code:before:content-none prose-code:after:content-none prose-pre:bg-black/5 prose-table:border-collapse prose-th:border prose-th:border-black/10 prose-th:bg-black/5 prose-th:p-2 prose-td:border prose-td:border-black/10 prose-td:p-2 dark:prose-h2:border-white/10 dark:prose-code:bg-white/10 dark:prose-pre:bg-white/5 dark:prose-th:border-white/10 dark:prose-th:bg-white/5 dark:prose-td:border-white/10"
              dangerouslySetInnerHTML={{ __html: doc.htmlContent }}
            />

            {/* Navigation */}
            <div className="mt-12 flex items-center justify-between border-t border-black/10 pt-6 dark:border-white/10">
              {prevDoc && (
                <Link
                  href={`/docs/${prevDoc.slug}`}
                  className="flex items-center gap-2 text-sm text-black/70 hover:text-black dark:text-white/70 dark:hover:text-white"
                >
                  <ChevronRight className="h-4 w-4 rotate-180" />
                  <span className="max-w-[150px] truncate">{prevDoc.title}</span>
                </Link>
              )}
              <div className="flex-1" />
              {nextDoc && (
                <Link
                  href={`/docs/${nextDoc.slug}`}
                  className="flex items-center gap-2 text-sm text-black/70 hover:text-black dark:text-white/70 dark:hover:text-white"
                >
                  <span className="max-w-[150px] truncate">{nextDoc.title}</span>
                  <ChevronRight className="h-4 w-4" />
                </Link>
              )}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
