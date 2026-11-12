const details = [
  {
    title: "Folder authorization",
    description:
      "For local tasks, connect a dedicated folder containing the files Cowork needs. Review separately any access requested by connectors or browser tools.",
    bullets: [
      "Pick a dedicated workspace before any run",
      "Revoke or swap the folder whenever you like",
      "Activity log lives in Claude Desktop"
    ]
  },
  {
    title: "Agent workflow",
    description:
      "Natural-language instructions become a multi-step plan. Cowork executes sequentially and only asks for help when needed.",
    bullets: [
      "Autonomous step planning and ordering",
      "Task execution from a plain-language prompt",
      "Status pings after each milestone"
    ]
  },
  {
    title: "Safety practices",
    description:
      "Review the task plan and keep a copy of important files before allowing Cowork to make changes.",
    bullets: [
      "Back up the working folder frequently",
      "Confirm any destructive action before proceeding",
      "Keep sensitive data outside the sandbox"
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
