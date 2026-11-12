import { siteBrand, siteURL } from "@/lib/site";
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
  authors: [{ name: "Coworks.dev", url: `${siteURL}/about` }],
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    url: siteURL,
    siteName: "Claude Cowork",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: `${siteURL}${siteBrand.path}`,
        width: siteBrand.width,
        height: siteBrand.height,
        alt: siteBrand.alt,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
    images: [`${siteURL}${siteBrand.path}`],
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
    icon: { url: siteBrand.path, type: "image/webp", sizes: "512x512" },
    apple: { url: "/coworks-apple-touch-icon.png?v=cloud", sizes: "180x180", type: "image/png" },
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
          logo={`${siteURL}${siteBrand.path}`}
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
