import type { Metadata } from "next";
import { SimplePage } from "@/components/layout/SimplePage";

const siteURL = "https://cowork.skillsmaps.com";

export const metadata: Metadata = {
  title: "About Claude Cowork",
  description:
    "Learn how Claude Cowork brings Anthropic's agent architecture to everyday workflows so anyone can delegate file and document tasks safely.",
  alternates: {
    canonical: `${siteURL}/about`,
  },
  openGraph: {
    title: "About Claude Cowork",
    description:
      "Learn how Claude Cowork brings Anthropic's agent architecture to everyday workflows so anyone can delegate file and document tasks safely.",
    url: `${siteURL}/about`,
    siteName: "Claude Cowork",
    type: "website",
    images: [
      {
        url: `${siteURL}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "About Claude Cowork",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Claude Cowork",
    description:
      "Learn how Claude Cowork brings Anthropic's agent architecture to everyday workflows so anyone can delegate file and document tasks safely.",
    images: [`${siteURL}/og-image.jpg`],
  },
};

const sections = [
  {
    heading: "Our purpose",
    body: [
      "Cowork was born from the realization that most people do not want to prompt a chat bot - they want a trusted teammate who can take a folder of messy inputs and return a polished result.",
      "By channeling the Claude Code agent architecture into a guided desktop experience, we help busy people reclaim time from mundane file organization, reporting, and documentation chores.",
    ],
  },
  {
    heading: "How it works today",
    body: [
      "Cowork is currently available as a research preview inside Claude Desktop on macOS for Claude Max subscribers. You grant it access to a dedicated folder, describe the outcome in plain English, and Cowork plans and executes the steps locally.",
      "Everything happens within the boundary you approve, keeping your personal or team workspace safe while Cowork sorts, renames, summarizes, and packages deliverables.",
    ],
  },
  {
    heading: "Where we are heading",
    body: [
      "We are continuing to expand supported tasks, from smarter classification rules to richer report generation. Multi-task orchestration, deeper progress tracking, and shared workspaces are on the roadmap as we learn from early adopters.",
      "Security and transparency remain non-negotiable - we will always favor scoped permissions, explicit confirmations, and detailed activity logs over opaque automation.",
    ],
  },
];

export default function AboutPage() {
  return (
    <SimplePage
      title="About the Claude Cowork preview"
      description="The Cowork team is focused on turning Claude into a dependable, desk-side coworker that handles the repetitive computer work you do not have time for."
      sections={sections}
    />
  );
}
