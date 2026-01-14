const steps = [
  {
    title: "Install Claude Desktop and open Cowork",
    description:
      "Update Claude Desktop on macOS and launch the Cowork tab inside the research preview build.",
    detail: "macOS only"
  },
  {
    title: "Authorize a working folder",
    description:
      "Pick a dedicated folder for Cowork. It operates strictly inside that boundary and you can revoke access anytime.",
    detail: "Scoped access"
  },
  {
    title: "Describe the outcome in plain language",
    description:
      "Say things like \"sort these files by type\" or \"turn the receipts into a spreadsheet.\" No scripting required.",
    detail: "Zero learning curve"
  },
  {
    title: "Let Cowork plan and execute",
    description:
      "Cowork breaks the task into actions, runs them sequentially, and reports each milestone so you can fine-tune mid-flight.",
    detail: "Live updates"
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
          Four simple steps to hand real work over to Cowork
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
