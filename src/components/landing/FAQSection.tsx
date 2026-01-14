const faqs = [
  {
    question: "Do I need to pay extra to try Cowork?",
    answer:
      "Cowork is currently part of the Claude Max subscription and only available through Claude Desktop on macOS."
  },
  {
    question: "How much control do I have over my files?",
    answer:
      "You pick the folder Cowork can touch. It cannot browse anywhere else, and you can revoke access whenever you feel unsure."
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
