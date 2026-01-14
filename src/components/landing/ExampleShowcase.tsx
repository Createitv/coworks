import { Briefcase, Mail, Presentation, TrendingUp } from "lucide-react";

const examples = [
  {
    title: "Executive Brief Skill",
    description:
      "Turns raw meeting transcripts into a gold-standard recap with bullets, highlights, and next steps.",
    icon: Briefcase,
    tags: ["Meetings", "Leadership", "Templates"]
  },
  {
    title: "Enterprise Email Polisher",
    description:
      "Reads CRM notes, applies tone guidelines, and drafts the perfect follow-up email you can send immediately.",
    icon: Mail,
    tags: ["Sales", "Brand voice"]
  },
  {
    title: "Board Deck Generator",
    description:
      "Collects metrics, storyboard slides, and exports speaker notes that match your presentation structure.",
    icon: Presentation,
    tags: ["Strategy", "Slides", "Automation"]
  },
  {
    title: "Insights Analyst",
    description:
      "Ingests spreadsheets or SQL snippets, surfaces anomalies, and suggests recommended actions straight away.",
    icon: TrendingUp,
    tags: ["Analytics", "Data", "Ops"]
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
          Launch-ready skills you can remix today
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
