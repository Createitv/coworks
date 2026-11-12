import { publicPageMetadata } from "@/lib/page-metadata";
import Link from "next/link";
import { DocIllustration } from "../doc-illustration";
import { getDocIllustration } from "@/lib/doc-illustrations";
import { TemplateLibrary } from "./template-library";

const illustration = getDocIllustration("templates");

const base = publicPageMetadata(
  "Claude Cowork Prompt Templates and Workflows",
  "Copy Claude Cowork prompts for files, receipts, presentations, meeting notes, research, and connected workflows. Each prompt includes an output check.",
  "/docs/templates",
);
export const metadata = {
  ...base,
  openGraph: { ...base.openGraph, images: illustration ? [illustration] : undefined },
  twitter: { ...base.twitter, card: "summary_large_image" as const, images: illustration ? [illustration] : undefined },
};


export default function TemplatesPage() {
  return (
    <main className="mx-auto max-w-5xl px-5 py-12 sm:px-8">
      <Link href="/docs" className="underline underline-offset-4">All Cowork guides</Link>
      <h1 className="mt-6 text-4xl font-semibold">Claude Cowork prompt templates</h1>
      <p className="mt-3 max-w-2xl text-base opacity-80">
        Choose a workflow, copy its prompt, and replace the bracketed fields with your own inputs.
        Each template includes a check you can use before relying on the result.
      </p>
      <TemplateLibrary />
      <div className="max-w-3xl"><DocIllustration slug="templates" /></div>
      <p className="text-sm">Want to see a multi-step task in action? <Link href="/videos/delegate-tasks-in-claude-cowork" className="underline underline-offset-4">Watch the task delegation demo</Link>.</p>
    </main>
  );
}
