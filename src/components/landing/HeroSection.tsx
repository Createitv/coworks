import { ArrowRight, ShieldCheck, Sparkles, Target } from "lucide-react";
import clsx from "clsx";
import Image from "next/image";

interface HeroSectionProps {
  isDarkMode: boolean;
}

const stats = [
  { label: "Platform", value: "macOS" },
  { label: "Subscription", value: "Claude Max" },
  { label: "Release stage", value: "Research Preview" }
];

const highlights = [
  "Multi-step planning & execution",
  "Scoped folder read/write access",
  "Live progress updates"
];

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
          <div className="flex flex-wrap items-center gap-4">
            <Image
              src="/logo.png"
              alt="Claude Cowork logo"
              width={96}
              height={96}
              className="h-16 w-16 rounded-full border border-black/10 object-cover shadow-lg shadow-black/10 dark:border-white/20"
            />
            <div className="inline-flex items-center gap-2 rounded-full border border-black/10 px-5 py-2 text-sm font-medium uppercase tracking-[0.3em] text-black/70 dark:border-white/20 dark:text-white/70">
              Claude Cowork - Research Preview
            </div>
          </div>
          <div className="space-y-6">
            <h1 className="text-4xl font-semibold leading-tight text-[#0b0b0b] dark:text-white sm:text-5xl">
              Your AI coworker for smarter work automation
            </h1>
            <p className="max-w-2xl text-lg text-black/70 dark:text-white/70">
              Claude Cowork is an autonomous AI agent for work - give it a scoped folder, spell out the workflow in plain
              English, and this digital coworker will organize files, generate reports, and ship deliverables while keeping
              you informed at every step.
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
            <a
              href="#cta"
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#f7d793] to-[#c08b2d] px-6 py-3 text-base font-semibold text-black shadow-lg shadow-[#f4c572]/50 transition hover:-translate-y-0.5"
            >
              Request Cowork access
              <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
            </a>
            <a
              href="#workflow"
              className="inline-flex items-center gap-2 rounded-full border border-black/20 px-6 py-3 text-base font-semibold text-[#101010] transition hover:border-black hover:text-black dark:border-white/30 dark:text-white dark:hover:border-white"
            >
              See how it works
            </a>
          </div>
          <div className="flex flex-wrap gap-3 text-sm">
            {highlights.map((text) => (
              <span
                key={text}
                className="inline-flex items-center gap-2 rounded-full border border-black/10 px-4 py-2 text-black/70 dark:border-white/20 dark:text-white/70"
              >
                <Sparkles className="h-4 w-4 text-[#c99b3b]" />
                {text}
              </span>
            ))}
          </div>
        </div>

        <div className="space-y-6 rounded-3xl border border-black/10 bg-white/70 p-6 backdrop-blur dark:border-white/10 dark:bg-black/40">
          <div className="rounded-2xl border border-black/5 bg-black text-white shadow-xl dark:border-white/5 dark:bg-gradient-to-br dark:from-black dark:to-[#131313]">
            <div className="border-b border-white/10 px-6 py-4 text-sm uppercase tracking-[0.3em] text-white/70">
              Cowork operating model
            </div>
            <div className="space-y-4 px-6 py-5">
              <div className="flex items-start gap-3">
                <ShieldCheck className="mt-0.5 h-5 w-5 text-[#f6d190]" />
                <div>
                  <p className="text-base font-semibold">Scoped, protected access</p>
                  <p className="text-sm text-white/70">
                    Cowork only reads, writes, and reorganizes inside the folder you authorize. Set aside a dedicated space
                    and keep backups to avoid surprises.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Target className="mt-0.5 h-5 w-5 text-[#f6d190]" />
                <div>
                  <p className="text-base font-semibold">Natural-language control</p>
                  <p className="text-sm text-white/70">
                    Describe the result you need - "sort receipts by month," "package this research into a PDF" - and Cowork
                    breaks everything into actions until the deliverable matches your instructions.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl border border-black/10 bg-white/80 px-4 py-3 text-left dark:border-white/10 dark:bg-white/5"
              >
                <div className="text-2xl font-semibold text-[#0b0b0b] dark:text-white">
                  {stat.value}
                </div>
                <div className="text-xs uppercase tracking-[0.3em] text-black/60 dark:text-white/60">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
