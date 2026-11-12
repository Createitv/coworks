const faqs = [
  {
    question: "Which Claude plans include Cowork?",
    answer:
      "Cowork is available on paid Claude plans, including Pro, Max, Ultra, Team, and Enterprise. Available platforms and organization settings vary by plan."
  },
  {
    question: "How much control do I have over my files?",
    answer:
      "When a task needs local files, connect only the folders it needs in Claude Desktop. Review the requested access before starting and remove access when you finish."
  },
  {
    question: "What kinds of jobs does Cowork handle best?",
    answer:
      "Anything repetitive or multi-step: organizing downloads, compiling receipts, renaming assets, generating summaries, even juggling multiple tasks in parallel."
  },
  {
    question: "Can I adjust instructions mid-task?",
    answer:
      "Yes. Cowork keeps you updated in real time, so you can clarify or add requirements without restarting the entire process."
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
          Everything you need to know before handing work to Cowork
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
