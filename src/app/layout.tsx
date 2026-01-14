import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next"
import { GoogleAnalytics } from "@/components/analytics/GoogleAnalytics";

const siteURL = "https://skillsmaps.com";
const siteTitle = "SkillsMap | Claude Skills Playbook";
const siteDescription =
  "Discover, standardize, and launch Claude Skills with a luxurious black-and-gold interface. Modular playbooks, governance-ready workflows, and enterprise guardrails in one SkillsMap.";

export const metadata: Metadata = {
  metadataBase: new URL(siteURL),
  title: {
    default: siteTitle,
    template: "%s | SkillsMap",
  },
  description: siteDescription,
  keywords: [
    "Claude Skills",
    "AI workflows",
    "Better Auth",
    "OAuth login",
    "Enterprise automation",
    "Skills marketplace",
  ],
  authors: [{ name: "SkillsMap" }],
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    url: siteURL,
    siteName: "SkillsMap",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: `${siteURL}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "SkillsMap — Claude Skills Playbook",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
    site: "@SkillsMapHQ",
    creator: "@SkillsMapHQ",
    images: [`${siteURL}/og-image.jpg`],
  },
  alternates: {
    canonical: siteURL,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f7f7f0" },
    { media: "(prefers-color-scheme: dark)", color: "#050505" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const gaId = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID;
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
        <GoogleAnalytics gaId={gaId} />
      </body>
    </html>
  );
}
