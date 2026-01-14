const faqs = [
  {
    question: "Is there an extra fee to enable Claude Skills?",
    answer:
      "Skills come with Claude Team and Enterprise plans. Usage counts toward your existing Claude requests—no surprise SKUs."
  },
  {
    question: "Can we customize every skill?",
    answer:
      "Yes. You can clone templates, edit instructions, attach scripts, and push a new version when you are ready."
  },
  {
    question: "Will skills work through the API?",
    answer:
      "Absolutely. Pass the skill IDs via API calls or let Claude auto-select them from the workspace catalog."
  },
  {
    question: "Can we share skills across teams?",
    answer:
      "Use collections to distribute skills to specific teams, customers, or partners with full access controls."
  }
];

export function FAQSection() {
  return (
    <section id="faq" className="space-y-8">
      <div className="flex flex-col gap-3">
        <p className="text-sm uppercase tracking-[0.3em] text-black/60 dark:text-white/60">
          FAQ
        </p>
        <h2 className="text-3xl font-semibold text-[#0b0b0b] dark:text-white">
          Answers for builders and operators
        </h2>
      </div>

      <div className="space-y-4">
        {faqs.map((faq) => (
          <div
            key={faq.question}
            className="rounded-3xl border border-black/10 bg-white/80 p-5 dark:border-white/10 dark:bg-black/30"
          >
            <h3 className="text-xl font-semibold text-[#0b0b0b] dark:text-white">
              {faq.question}
            </h3>
            <p className="mt-2 text-base text-black/70 dark:text-white/70">
              {faq.answer}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
