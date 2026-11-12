import { siteURL } from "@/lib/site";
import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next"
import { GoogleAnalytics } from "@/components/analytics/GoogleAnalytics";
import { OrganizationJsonLd, WebsiteJsonLd } from "@/components/seo/JsonLd";

const siteTitle = "How to Open Claude Cowork | Setup and Examples";
const siteDescription =
  "Open Claude Cowork, find it when the tab is missing, and connect local files in Claude Desktop. Try a receipt-to-spreadsheet exercise with sample data.";

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
        url: `${siteURL}/logo.png`,
        width: 1024,
        height: 1024,
        alt: "How to Open Claude Cowork | Setup and Examples",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
    images: [`${siteURL}/logo.png`],
  },
  alternates: {
    canonical: "/",
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
    icon: { url: "/coworks-icon.svg", type: "image/svg+xml", sizes: "any" },
    apple: { url: "/coworks-apple-touch-icon.png", sizes: "180x180", type: "image/png" },
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
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3775964724446697"
          crossOrigin="anonymous"
        />
        <OrganizationJsonLd
          name="Coworks.dev"
          url={siteURL}
          logo={`${siteURL}/logo.png`}
          description={siteDescription}
        />
        <WebsiteJsonLd
          name="Coworks.dev"
          url={siteURL}
          description={siteDescription}
        />
      </head>
      <body className="antialiased">
        {children}
        <GoogleAnalytics gaId={gaId} />
        <Analytics />
      </body>
    </html>
  );
}
