import type { Metadata } from "next";
import Link from "next/link";
import { TemplateLibrary } from "./template-library";

export const metadata: Metadata = {
  title: { absolute: "Claude Cowork Prompt Templates and Workflows" },
  description: "Find and copy Claude Cowork prompts for local files, receipt audits, document reviews, weekly reports, meeting notes, and connector checks.",
  alternates: { canonical: "/docs/templates" },
  openGraph: {
    title: "Claude Cowork Prompt Templates and Workflows",
    description: "Copy a task prompt and see how to check the result.",
    url: "/docs/templates",
  },
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
    </main>
  );
}
