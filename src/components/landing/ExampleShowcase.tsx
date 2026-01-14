import { Briefcase, Mail, Presentation, TrendingUp } from "lucide-react";

const examples = [
  {
    title: "Downloads Cleanup Run",
    description:
      "Cowork inspects the folder, creates month folders, moves screenshots into place, and renames everything consistently.",
    icon: Briefcase,
    tags: ["File ops", "Automation", "Tidying"]
  },
  {
    title: "Expense Sheet Builder",
    description:
      "Reads receipts or screenshots, captures totals and categories, and exports a ready-to-review spreadsheet.",
    icon: Mail,
    tags: ["Finance", "OCR", "Spreadsheets"]
  },
  {
    title: "Project Archive Packager",
    description:
      "Organizes mixed docs, drafts status notes, and zips the entire project folder so you can hand it off instantly.",
    icon: Presentation,
    tags: ["Knowledge ops", "Packaging", "Handoff"]
  },
  {
    title: "Insights Summary Maker",
    description:
      "Combines CSVs, transcripts, or text notes, highlights anomalies, and produces action-ready summaries.",
    icon: TrendingUp,
    tags: ["Analytics", "Research", "Reporting"]
  }
];

export function ExampleShowcase() {
  return (
    <section id="examples" className="space-y-8">
      <div className="flex flex-col gap-3">
        <p className="text-sm uppercase tracking-[0.3em] text-black/60 dark:text-white/60">
          Live examples
        </p>
        <h2 className="text-3xl font-semibold text-[#0b0b0b] dark:text-white">
          Sample Cowork tasks you can run right away
        </h2>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {examples.map((example) => (
          <div
            key={example.title}
            className="rounded-3xl border border-black/10 bg-white/80 p-6 shadow-[0_20px_60px_rgba(0,0,0,0.08)] dark:border-white/10 dark:bg-black/40"
          >
            <div className="flex items-center gap-3 text-sm uppercase tracking-[0.3em] text-[#c28d39]">
              <example.icon className="h-5 w-5" />
              Featured Skill
            </div>
            <h3 className="mt-4 text-2xl font-semibold text-[#0b0b0b] dark:text-white">
              {example.title}
            </h3>
            <p className="mt-3 text-base text-black/70 dark:text-white/70">
              {example.description}
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              {example.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-[#c28d39]/40 px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-[#c28d39]"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
