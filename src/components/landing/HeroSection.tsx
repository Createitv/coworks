import { ArrowRight } from "lucide-react";
import clsx from "clsx";
import Link from "next/link";

interface HeroSectionProps {
  isDarkMode: boolean;
}

export function HeroSection({ isDarkMode }: HeroSectionProps) {
  return (
    <section
      id="overview"
      className="relative isolate overflow-hidden rounded-[36px] border border-black/10 bg-white/80 px-8 py-12 shadow-[0px_25px_80px_rgba(0,0,0,0.08)] dark:border-white/10 dark:bg-white/5"
    >
      <div
        className={clsx(
          "absolute inset-0 -z-10 opacity-80 blur-3xl transition-colors",
          isDarkMode
            ? "bg-gradient-to-br from-[#1a1205] via-[#0b0702] to-transparent"
            : "bg-gradient-to-br from-[#fbeaca] via-transparent to-transparent"
        )}
      />

      <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-start">
        <div className="space-y-8">
          <div className="space-y-4">
            <p className="text-sm text-black/70 dark:text-white/70">Independent guide from Coworks.dev</p>
            <h1 className="text-4xl font-semibold leading-tight text-[#0b0b0b] dark:text-white sm:text-5xl">
              How to open and use Claude Cowork
            </h1>
            <p className="max-w-2xl text-lg text-black/70 dark:text-white/70">
              Sign in to Claude with an eligible paid plan. Select Cowork if you see a mode selector.
              If your interface combines chat and Cowork, describe the task in the message box.
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
            <a
              href="https://claude.ai/"
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#f7d793] to-[#c08b2d] px-6 py-3 text-base font-semibold text-black shadow-lg shadow-[#f4c572]/50 transition hover:-translate-y-0.5"
            >
              Open Claude Cowork
              <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
            </a>
            <Link
              href="/docs/setup"
              className="inline-flex items-center gap-2 rounded-full border border-black/20 px-6 py-3 text-base font-semibold text-[#101010] transition hover:border-black hover:text-black dark:border-white/30 dark:text-white dark:hover:border-white"
            >
              Setup and troubleshooting
            </Link>
          </div>
        </div>

        <div className="space-y-4 rounded-3xl border border-black/10 bg-white/70 p-6 dark:border-white/10 dark:bg-black/40">
          <h2 className="text-xl font-semibold">Find your next step</h2>
          <ul className="space-y-3 text-sm">
            <li><Link className="underline underline-offset-4" href="/docs/setup#missing-cowork">Find Cowork when the tab is missing</Link></li>
            <li><Link className="underline underline-offset-4" href="/docs/setup#plans-and-platforms">Check plans and supported platforms</Link></li>
            <li><Link className="underline underline-offset-4" href="/docs/setup#local-files">Connect a folder in Claude Desktop</Link></li>
            <li><Link className="underline underline-offset-4" href="/docs/receipt-audit">Try a receipt-to-spreadsheet workflow</Link></li>
            <li><Link className="underline underline-offset-4" href="/docs/templates">Find and copy a Cowork prompt</Link></li>
          </ul>
        </div>
      </div>
    </section>
  );
}
