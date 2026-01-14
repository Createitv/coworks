const details = [
  {
    title: "Skill blueprint",
    description:
      "Each SKILL.md outlines triggers, zero-regret instructions, guardrails, assets, and cleanup steps.",
    bullets: [
      "Link scripts or REST calls for data pulls",
      "Reference brand or legal guidelines",
      "Document owner, reviewer, and version"
    ]
  },
  {
    title: "Runtime orchestration",
    description:
      "Claude fetches a skill only when context matches. Content never loads unless a skill is required.",
    bullets: [
      "Deterministic fallback order",
      "Configurable latency budgets",
      "Telemetry per invocation"
    ]
  },
  {
    title: "Security & sharing",
    description:
      "Publish to workspaces, teams, or private sandboxes. Every edit is logged so you can trust the output.",
    bullets: [
      "Role-based controls",
      "Diff view + approvals",
      "Expiry reminders"
    ]
  }
];

export function TechDetails() {
  return (
    <section className="space-y-8">
      <div className="flex flex-col gap-3">
        <p className="text-sm uppercase tracking-[0.3em] text-black/60 dark:text-white/60">
          Under the hood
        </p>
        <h2 className="text-3xl font-semibold text-[#0b0b0b] dark:text-white">
          Built for teams that expect reliability and visibility
        </h2>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {details.map((detail) => (
          <div
            key={detail.title}
            className="rounded-3xl border border-black/10 bg-white/80 p-6 dark:border-white/10 dark:bg-white/5"
          >
            <h3 className="text-2xl font-semibold text-[#0b0b0b] dark:text-white">
              {detail.title}
            </h3>
            <p className="mt-3 text-base text-black/70 dark:text-white/70">
              {detail.description}
            </p>
            <ul className="mt-4 space-y-2 text-sm text-black/70 dark:text-white/70">
              {detail.bullets.map((bullet) => (
                <li key={bullet} className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-[#c28d39]" />
                  {bullet}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
