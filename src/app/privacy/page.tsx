import type { Metadata } from "next";
import { SimplePage } from "@/components/layout/SimplePage";

const siteURL = "https://cowork.skillsmaps.com";

export const metadata: Metadata = {
  title: "Privacy | Claude Cowork",
  description:
    "Understand how Claude Cowork handles the folders, files, and activity logs you share during the research preview.",
  alternates: {
    canonical: `${siteURL}/privacy`,
  },
  openGraph: {
    title: "Privacy | Claude Cowork",
    description:
      "Understand how Claude Cowork handles the folders, files, and activity logs you share during the research preview.",
    url: `${siteURL}/privacy`,
    siteName: "Claude Cowork",
    type: "website",
    images: [
      {
        url: `${siteURL}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "Privacy | Claude Cowork",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy | Claude Cowork",
    description:
      "Understand how Claude Cowork handles the folders, files, and activity logs you share during the research preview.",
    images: [`${siteURL}/og-image.jpg`],
  },
};

const sections = [
  {
    heading: "Folder access",
    body: [
      "Cowork can only read, edit, or create files inside the folder you authorize inside Claude Desktop. You can revoke access or switch folders at any time.",
      "We encourage you to use a dedicated workspace folder with copies of important documents instead of originals.",
    ],
  },
  {
    heading: "Activity logging",
    body: [
      "Every action Cowork takes is recorded locally inside Claude Desktop. You can export those logs for your own audit trail or share them with the team for debugging.",
      "During the research preview, aggregated, anonymized usage data helps us understand reliability and inform improvements.",
    ],
  },
  {
    heading: "Data retention",
    body: [
      "Files stay on your device. Anthropic does not automatically upload or store the contents of your Cowork workspace unless you explicitly attach them when contacting support.",
      "Logs submitted to support are handled under Anthropic's standard privacy policy and deleted when troubleshooting concludes unless you request otherwise.",
    ],
  },
];

export default function PrivacyPage() {
  return (
    <SimplePage
      title="Privacy in the Cowork preview"
      description="Your trust matters. Cowork adheres to strict scoping so you remain in control of every file it touches."
      sections={sections}
    />
  );
}
