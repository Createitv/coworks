const steps = [
  {
    title: "Activate skills",
    description:
      "Enable Claude Skills inside Claude.ai, Claude Code, or through API headers to make them auto-discoverable.",
    detail: "Takes 60 seconds"
  },
  {
    title: "Define instructions",
    description:
      "Describe trigger phrases, tone, and required assets inside SKILL.md. Attach scripts or references if needed.",
    detail: "Version controlled"
  },
  {
    title: "Publish & govern",
    description:
      "Assign reviewers, set expiry reminders, and ship the skill to your workspace or shared collection.",
    detail: "Audit log included"
  },
  {
    title: "Call inside any task",
    description:
      "Ask Claude to 'use' a skill or let it auto-pick based on context. Outputs follow the skill blueprint every time.",
    detail: "Hands-off delivery"
  }
];

export function WorkflowSection() {
  return (
    <section id="workflow" className="space-y-8">
      <div className="flex flex-col gap-3">
        <p className="text-sm uppercase tracking-[0.3em] text-black/60 dark:text-white/60">
          Workflow
        </p>
        <h2 className="text-3xl font-semibold text-[#0b0b0b] dark:text-white">
          Four deliberate steps to ship a high-performing Claude Skill
        </h2>
      </div>

      <div className="rounded-[32px] border border-black/10 bg-white/70 p-6 dark:border-white/10 dark:bg-white/5">
        <div className="grid gap-6 lg:grid-cols-4">
          {steps.map((step, index) => (
            <div
              key={step.title}
              className="relative flex flex-col gap-3 rounded-2xl border border-black/5 bg-white/90 p-5 dark:border-white/10 dark:bg-black/40"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs uppercase tracking-[0.4em] text-black/50 dark:text-white/50">
                  Step {index + 1}
                </span>
                <span className="text-xs font-semibold text-[#c28d39]">
                  {step.detail}
                </span>
              </div>
              <h3 className="text-xl font-semibold text-[#0b0b0b] dark:text-white">
                {step.title}
              </h3>
              <p className="text-sm text-black/70 dark:text-white/70">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
