import { ChartNoAxesGantt, FilePieChart, PenSquare, Users } from "lucide-react";

const useCases = [
  {
    title: "Automate reporting",
    description:
      "Trigger Claude to summarize CRM notes, create executive summaries, or publish meeting recaps that follow your brand voice.",
    icon: FilePieChart,
    result: "Save 4h per team each week"
  },
  {
    title: "Standardize client deliverables",
    description:
      "Lock tone, formatting, and disclaimers into a skill so every proposal, email, or onboarding note stays on-brand.",
    icon: PenSquare,
    result: "90% fewer review edits"
  },
  {
    title: "Tackle technical playbooks",
    description:
      "Give Claude data-extraction instructions, SQL templates, or notebook scaffolds for complex analysis tasks.",
    icon: ChartNoAxesGantt,
    result: "Analytics tasks 2× faster"
  },
  {
    title: "Align global teams",
    description:
      "Share one skill catalog so sales, support, and ops teams re-use the same best practices without re-training Claude.",
    icon: Users,
    result: "Shared playbook across 12 regions"
  }
];

export function UseCaseGrid() {
  return (
    <section id="use-cases" className="space-y-8">
      <div className="flex flex-col gap-3">
        <p className="text-sm uppercase tracking-[0.3em] text-black/60 dark:text-white/60">
          Use cases
        </p>
        <h2 className="text-3xl font-semibold text-[#0b0b0b] dark:text-white">
          Claude Skills solve the repetitive, high-stakes workflows your teams juggle daily
        </h2>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {useCases.map((useCase) => (
          <div
            key={useCase.title}
            className="rounded-3xl border border-black/10 bg-gradient-to-b from-white to-white/70 p-6 dark:border-white/10 dark:from-white/10 dark:to-white/5"
          >
            <div className="flex items-center gap-3 text-sm uppercase tracking-[0.3em] text-[#c28d39]">
              <useCase.icon className="h-5 w-5" />
              Proven impact
            </div>
            <h3 className="mt-4 text-2xl font-semibold text-[#0b0b0b] dark:text-white">
              {useCase.title}
            </h3>
            <p className="mt-3 text-base text-black/70 dark:text-white/70">
              {useCase.description}
            </p>
            <div className="mt-6 rounded-2xl border border-dashed border-[#c28d39]/40 px-4 py-3 text-sm font-semibold text-[#c28d39]">
              {useCase.result}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
