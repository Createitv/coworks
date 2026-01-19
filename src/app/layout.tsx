import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next"
import { GoogleAnalytics } from "@/components/analytics/GoogleAnalytics";

const siteURL = "https://cowork.skillsmaps.com";
const siteTitle = "Claude Cowork — Your AI-Powered Digital Coworker";
const siteDescription =
  "Claude Cowork is an agentic AI assistant that autonomously plans, executes, and completes multi-step tasks. Automate file organization, document processing, and workflows on macOS.";

export const metadata: Metadata = {
  metadataBase: new URL(siteURL),
  title: {
    default: siteTitle,
    template: "%s | Claude Cowork",
  },
  description: siteDescription,
  keywords: [
    "Claude Cowork",
    "Claude Coworker",
    "Claude Work Assistant",
    "Claude Productivity Assistant",
    "Claude Agent for Work",
    "Claude Autonomous AI Agent",
    "Claude Workflow Automation",
    "Claude Cowork Platform",
    "Claude Cowork Software",
    "Claude Cowork Tool",
    "Claude Cowork Workspace",
    "Claude Multi-step AI Agent",
    "Claude Coworker for Startups",
    "Claude Coworker for Teams",
    "Claude Coworker for Remote Work",
    "Claude Coworker that Organizes Files",
    "Claude Coworker for Document Automation",
    "Claude Agent for Productivity",
    "Claude Cowork Alternative",
    "Enterprise AI Coworker",
    "AI cowork",
    "AI coworker",
    "AI work assistant",
    "AI digital coworker",
    "AI productivity assistant",
    "AI agent for work",
    "Autonomous AI agent",
    "AI workflow automation",
    "AI cowork platform",
    "AI cowork software",
    "AI cowork tool",
    "AI cowork workspace",
    "Multi-step AI agent",
    "AI coworker for startups",
    "AI coworker for teams",
    "AI coworker for remote work",
    "AI coworker that organizes files",
    "AI coworker for document automation",
    "AI agent for productivity",
    "Claude cowork alternative",
    "Enterprise AI coworker",
  ],
  authors: [{ name: "Claude Cowork" }],
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    url: siteURL,
    siteName: "Claude Cowork",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: `${siteURL}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "Claude Cowork — Your AI-Powered Digital Coworker",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
    site: "@AnthropicAI",
    creator: "@AnthropicAI",
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

  // Inline script to set theme before page renders (prevents flash)
  const themeScript = `
    (function() {
      const stored = localStorage.getItem('theme');
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      // Default to dark mode
      const shouldBeDark = stored === 'dark' || (!stored && true);
      if (shouldBeDark) {
        document.documentElement.classList.add('dark');
      }
    })();
  `;

  return (
    <html lang="en" className="dark">
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="antialiased">
        {children}
        <GoogleAnalytics gaId={gaId} />
      </body>
    </html>
  );
}
