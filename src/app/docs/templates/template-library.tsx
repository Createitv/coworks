"use client";

import { useState } from "react";
import Link from "next/link";
import { templates } from "@/lib/templates";

const categories = ["All", "Files", "Documents", "Data", "Presentations", "Communication", "Research", "Automation"] as const;

export function TemplateLibrary() {
  const [category, setCategory] = useState<(typeof categories)[number]>("All");
  const [query, setQuery] = useState("");
  const [copyStatus, setCopyStatus] = useState<{ id: string; copied: boolean }>();
  const words = query.trim().toLowerCase().split(/\s+/);
  const visible = templates.filter((template) => {
    const text = `${template.title} ${template.category} ${template.prompt} ${template.check}`.toLowerCase();
    return (category === "All" || category === template.category) && words.every((word) => text.includes(word));
  });

  async function copyPrompt(id: string, prompt: string) {
    try {
      await navigator.clipboard.writeText(prompt);
      setCopyStatus({ id, copied: true });
    } catch {
      setCopyStatus({ id, copied: false });
    }
  }

  return (
    <section className="mt-8 space-y-5">
      <label className="block max-w-md">
        <span className="text-sm font-medium">Search templates</span>
        <input
          type="search"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Try receipts or weekly brief"
          className="mt-2 block w-full rounded-xl border border-current/25 bg-transparent px-4 py-3"
        />
      </label>
      <div className="flex flex-wrap gap-2" role="group" aria-label="Template category">
        {categories.map((item) => (
          <button key={item} type="button" aria-pressed={category === item}
            className="rounded-full border border-current/25 px-4 py-2 text-sm aria-pressed:bg-[#f7d793] aria-pressed:text-black"
            onClick={() => setCategory(item)}>
            {item}
          </button>
        ))}
      </div>
      <p role="status" className="text-sm opacity-80">
        {visible.length === 0 ? "No templates match. Try another search or category." : `${visible.length} ${visible.length === 1 ? "template" : "templates"}`}
      </p>
      <div className="grid gap-4 md:grid-cols-2">
        {visible.map((template) => (
          <article key={template.id} id={template.id} className="scroll-mt-6 space-y-4 rounded-2xl border border-current/20 p-5">
            <h2 className="text-xl font-semibold">{template.title}</h2>
            <p className="select-text rounded-xl bg-black/5 p-4 text-sm leading-relaxed dark:bg-white/10">{template.prompt}</p>
            <p className="text-sm"><strong>Check the result.</strong> {template.check}</p>
            <div className="flex flex-wrap items-center gap-3">
              <button type="button" aria-label={`Copy prompt for ${template.title}`}
                className="rounded-full bg-[#f7d793] px-4 py-2 text-sm font-semibold text-black"
                onClick={() => copyPrompt(template.id, template.prompt)}>
                Copy prompt
              </button>
              <Link href={template.guide} className="text-sm underline underline-offset-4">{template.guideLabel}</Link>
            </div>
            {copyStatus?.id === template.id && (
              <p role="status" className="text-sm">{copyStatus.copied ? "Prompt copied." : "Select the prompt text and copy it manually."}</p>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}
