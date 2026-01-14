import { BadgeCheck, Blocks, GitBranch, RefreshCcw } from "lucide-react";

export function FeatureHighlights() {
  const features = [
    {
      title: "Modular skill kits",
      description:
        "Break knowledge into reusable, auditable modules so your org voice stays precise across every conversation.",
      icon: Blocks,
      meta: "Blueprint Library"
    },
    {
      title: "Automated execution",
      description:
        "Chain prompts, calculations, and follow-ups. Claude completes a workflow before handing the result back to your user.",
      icon: RefreshCcw,
      meta: "Workflow Engine"
    },
    {
      title: "Context-aware routing",
      description:
        "Skills can check task metadata, channel, or language to decide what instruction set Claude should run.",
      icon: GitBranch,
      meta: "Smart Matching"
    },
    {
      title: "Enterprise guardrails",
      description:
        "Enforce tone, formatting, and compliance. Every skill is versioned with reviewers and release notes.",
      icon: BadgeCheck,
      meta: "Governance"
    }
  ];

  return (
    <section className="space-y-8">
      <div className="flex flex-col gap-3">
        <p className="text-sm uppercase tracking-[0.3em] text-black/60 dark:text-white/60">
          Capabilities
        </p>
        <h2 className="text-3xl font-semibold text-[#0b0b0b] dark:text-white">
          Everything Claude needs to deliver the same excellent answer every time
        </h2>
        <p className="max-w-3xl text-base text-black/70 dark:text-white/70">
          Claude Skills turn institutional expertise into living documentation.
          Plug them into Claude.ai, Claude Code, or the API and keep intent,
          format, and guardrails synchronized everywhere.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {features.map((feature) => (
          <div
            key={feature.title}
            className="group h-full rounded-3xl border border-black/10 bg-white/70 p-6 transition hover:-translate-y-1 hover:bg-white dark:border-white/10 dark:bg-white/5 dark:hover:bg-white/10"
          >
            <div className="flex items-center gap-3 text-sm uppercase tracking-[0.3em] text-[#c28d39]">
              <feature.icon className="h-5 w-5" />
              {feature.meta}
            </div>
            <h3 className="mt-4 text-2xl font-semibold text-[#0b0b0b] dark:text-white">
              {feature.title}
            </h3>
            <p className="mt-3 text-base text-black/70 dark:text-white/70">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
