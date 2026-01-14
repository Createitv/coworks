import { ChartNoAxesGantt, FilePieChart, PenSquare, Users } from "lucide-react";

const useCases = [
  {
    title: "Declutter Downloads and desktops",
    description:
      "Cowork sweeps the folder you authorize, groups files by month, type, or project, and renames everything to match your structure.",
    icon: FilePieChart,
    result: "Keep everyday folders clean without touching a mouse"
  },
  {
    title: "Turn screenshots into expense sheets",
    description:
      "Drop in receipts or screenshots and Cowork extracts the amount, date, and category, then fills the spreadsheet for you.",
    icon: PenSquare,
    result: "Expense tracking with zero manual typing"
  },
  {
    title: "Compile research into reports",
    description:
      "Give Cowork a messy folder of notes, PDFs, or CSVs. It highlights the key findings and drafts formatted summaries.",
    icon: ChartNoAxesGantt,
    result: "Presentation-ready docs on the first pass"
  },
  {
    title: "Batch create or rename files",
    description:
      "Ask Cowork to duplicate templates, rename dozens of assets, or add labels while keeping a running log of every change.",
    icon: Users,
    result: "Delegate repetitive file work to AI"
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
          From tidying files to generating reports, Cowork handles the chores that bog you down
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
