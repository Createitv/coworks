import type { Metadata } from "next";
import { SimplePage } from "@/components/layout/SimplePage";

export const metadata: Metadata = {
  title: "Terms | Claude Cowork",
  description: "Review the usage terms for the Claude Cowork research preview.",
};

const sections = [
  {
    heading: "Preview availability",
    body: [
      "Cowork is offered as a limited research preview for Claude Max subscribers on macOS. Features may change, pause, or end with short notice as we iterate.",
      "By participating, you agree to share feedback when possible so we can improve reliability, safety, and usability.",
    ],
  },
  {
    heading: "Appropriate use",
    body: [
      "Only run Cowork on folders you own or have permission to manage. Do not direct Cowork to handle sensitive data such as production credentials or regulated personal information.",
      "You remain responsible for reviewing Cowork's output and ensuring it meets your organization's compliance requirements.",
    ],
  },
  {
    heading: "Liability",
    body: [
      "Anthropic provides Cowork \"as is\" during the preview without warranties of performance. Back up important files prior to granting access and monitor Cowork's actions to prevent accidental loss.",
      "Any disputes or questions fall under Anthropic's standard Terms of Service in addition to these preview specifics.",
    ],
  },
];

export default function TermsPage() {
  return (
    <SimplePage
      title="Terms of the Cowork research preview"
      description="Please review these guidelines before authorizing Cowork on your device."
      sections={sections}
    />
  );
}
