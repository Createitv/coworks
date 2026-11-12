"use client";

import { useState } from "react";
import Link from "next/link";

const templates = [
  {
    id: "folder-cleanup",
    title: "Organize a folder with a dry run",
    category: "Files",
    prompt: "Inspect [folder] and propose a file organization plan. Write a table of current and proposed paths, flagging name collisions and files you cannot classify. Ask me to approve the plan before moving or renaming any files.",
    check: "Every original appears once, and proposed paths are unique.",
    guide: "/docs/file-organization",
    guideLabel: "File organization guide",
  },
  {
    id: "receipt-audit",
    title: "Turn receipts into a checked CSV",
    category: "Files",
    prompt: "Read the receipts in [folder]. Create receipts.csv with receipt ID, date, merchant, currency, amount, and source filename. Keep one row per receipt ID. Leave unreadable amounts blank and list missing fields and duplicates in review.md. Sum known amounts by currency and preserve the source files.",
    check: "Unknown amounts stay blank. Duplicate receipts contribute only once to each subtotal.",
    guide: "/docs/receipt-audit",
    guideLabel: "Receipt exercise and sample files",
  },
  {
    id: "document-brief",
    title: "Create a brief with source references",
    category: "Documents",
    prompt: "Read [approved documents]. Create brief.md with a one-paragraph summary, decisions, open questions, and a source reference for each material claim. Use file names and page or section numbers where available. Flag contradictions and unreadable sections for review.",
    check: "Trace two claims back to their source and confirm contradictions are listed.",
    guide: "/docs/workspace-instructions",
    guideLabel: "Workspace instructions guide",
  },
  {
    id: "meeting-actions",
    title: "Extract action items from meeting notes",
    category: "Documents",
    prompt: "Read [meeting notes] and produce a Markdown table with action, owner, due date, and source excerpt. Mark an unassigned owner or due date as unknown. Keep decisions and unresolved questions in separate lists. Prepare the draft for my review.",
    check: "Owners and due dates match the notes. Open questions are separate from actions.",
    guide: "/docs/use-cases",
    guideLabel: "Cowork use cases",
  },
  {
    id: "weekly-brief",
    title: "Draft a recurring weekly brief",
    category: "Automation",
    prompt: "Every [weekday] at [time and time zone], read [approved source] for the previous seven days. Draft a weekly brief with changes, blockers, and source links. Record inaccessible sources and leave the draft for my review.",
    check: "Verify the date window and time zone on the first run. Open each source link.",
    guide: "/docs/scheduled-tasks",
    guideLabel: "Scheduled tasks guide",
  },
  {
    id: "connector-check",
    title: "Check access to a connected source",
    category: "Automation",
    prompt: "Using [connector], find [one approved test document]. Report the document title, link, and one short fact from it. Stop after this read-only check. If access fails, describe the account, workspace, or permission issue you encountered.",
    check: "The link opens the intended test file in the right account.",
    guide: "/docs/plugins-and-connectors",
    guideLabel: "Plugins and connectors guide",
  },
] as const;

const categories = ["All", "Files", "Documents", "Automation"] as const;

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
          <article key={template.id} className="space-y-4 rounded-2xl border border-current/20 p-5">
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
