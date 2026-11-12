import { ArrowRight } from "lucide-react";

export function CallToAction() {
  return (
    <section
      id="cta"
      className="rounded-[36px] border border-black/10 bg-black px-8 py-10 text-white shadow-[0_25px_80px_rgba(0,0,0,0.35)] dark:border-white/10"
    >
      <div className="grid gap-8 lg:grid-cols-[2fr_1fr] lg:items-center">
        <div className="space-y-4">
          <p className="text-sm uppercase tracking-[0.3em] text-white/60">
            Ready to work
          </p>
          <h2 className="text-4xl font-semibold">
            Start your first Cowork task
          </h2>
          <p className="text-base text-white/70">
            Open Claude to start a Cowork session. If your task needs local files, follow the setup guide to connect
            a working folder in Claude Desktop.
          </p>
        </div>
        <div className="flex flex-col gap-4">
          <a
            href="https://claude.ai/"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#f7d793] to-[#c08b2d] px-6 py-3 text-base font-semibold text-black shadow-lg shadow-[#f4c572]/50 transition hover:-translate-y-0.5"
          >
            Open Claude
            <ArrowRight className="h-4 w-4" />
          </a>
          <a
            href="/docs/setup"
            className="inline-flex items-center justify-center rounded-full border border-white/30 px-6 py-3 text-base font-semibold text-white hover:bg-white/10"
          >
            Read the setup guide
          </a>
        </div>
      </div>
    </section>
  );
}
