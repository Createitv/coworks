import type { Metadata } from "next";
import Link from "next/link";
import { SimplePage } from "@/components/layout/SimplePage";

const siteURL = "https://cowork.skillsmaps.com";

export const metadata: Metadata = {
  title: "Connect with Claude Cowork",
  description:
    "Find the right channel to reach the Cowork team for feedback, partnerships, or support.",
  alternates: {
    canonical: `${siteURL}/connect-me`,
  },
  openGraph: {
    title: "Connect with Claude Cowork",
    description:
      "Find the right channel to reach the Cowork team for feedback, partnerships, or support.",
    url: `${siteURL}/connect-me`,
    siteName: "Claude Cowork",
    type: "website",
    images: [
      {
        url: `${siteURL}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "Connect with Claude Cowork",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Connect with Claude Cowork",
    description:
      "Find the right channel to reach the Cowork team for feedback, partnerships, or support.",
    images: [`${siteURL}/og-image.jpg`],
  },
};

const sections = [
  {
    heading: "Feedback & ideas",
    body: [
      "Have a workflow you would love Cowork to handle? Send detailed steps, sample files, or even screenshots. Every real-world scenario helps us refine the product roadmap.",
      <>
        Share your thoughts via{" "}
        <Link href="mailto:cowork-feedback@anthropic.com" target="_blank" rel="noopener noreferrer">
          cowork-feedback@anthropic.com
        </Link>{" "}
        and we will follow up.
      </>,
    ],
  },
  {
    heading: "Support",
    body: [
      "If Cowork encounters a folder it cannot access, or you see unexpected behavior, export the activity log from Claude Desktop and include it with your note so we can diagnose quickly.",
      <>
        For support inquiries, write to{" "}
        <Link href="mailto:xfy150150@gmail.com" target="_blank" rel="noopener noreferrer">
          xfy150150@gmail.com
        </Link>
        .
      </>,
    ],
  },
  {
    heading: "Partnerships",
    body: [
      "We are partnering with teams who want to pilot Cowork across repeatable back-office, finance, or research operations.",
      <>
        Contact{" "}
        <Link href="mailto:cowork-partners@anthropic.com" target="_blank" rel="noopener noreferrer">
          cowork-partners@anthropic.com
        </Link>{" "}
        with a short description of your use case.
      </>,
    ],
  },
];

const cta = (
  <div className="space-y-3 text-center sm:text-left">
    <p className="text-base text-black/70 dark:text-white/70">
      Prefer a quick chat? Mention @Cowork inside Claude Desktop feedback and we will respond during preview hours.
    </p>
    <p className="text-sm uppercase tracking-[0.3em] text-black/60 dark:text-white/60">
      Response window: Monday-Friday, 10am-6pm PT
    </p>
  </div>
);

export default function ConnectPage() {
  return (
    <SimplePage
      title="Connect with the Cowork team"
      description="We are a small, hands-on group and read every message. Choose the path that fits your request best."
      sections={sections}
      cta={cta}
    />
  );
}
