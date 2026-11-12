import { BadgeCheck, Blocks, GitBranch, RefreshCcw } from "lucide-react";

export function FeatureHighlights() {
  const features = [
    {
      title: "Multi-step tasks",
      description:
        "Cowork breaks \"tidy my Downloads\" or \"produce a report\" into discrete steps, and produces an output you can review.",
      icon: RefreshCcw,
      meta: "Multi-step Agent"
    },
    {
      title: "Scoped file-system access",
      description:
        "Use Claude Desktop when the task needs local files. Connect the folder you want Claude to work with.",
      icon: Blocks,
      meta: "Scoped Access"
    },
    {
      title: "Live feedback loop",
      description:
        "Cowork reports what it's doing in real time. Add clarifications mid-task without re-entering every detail.",
      icon: GitBranch,
      meta: "Live Status"
    },
    {
      title: "Review before applying changes",
      description:
        "Ask for a dry run and check proposed changes on a copy of your files.",
      icon: BadgeCheck,
      meta: "Safe defaults"
    }
  ];

  return (
    <section className="space-y-8">
      <div className="flex flex-col gap-3">
        <p className="text-sm uppercase tracking-[0.3em] text-black/60 dark:text-white/60">
          Capabilities
        </p>
        <h2 className="text-3xl font-semibold text-[#0b0b0b] dark:text-white">
          What can Claude Cowork do?
        </h2>
        <p className="max-w-3xl text-base text-black/70 dark:text-white/70">
          Give Claude a task, approved inputs, and an output to produce. You can use connected services or, where supported, a folder on your computer.
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
