import type { Metadata } from "next";
import { SimplePage } from "@/components/layout/SimplePage";

const title = "Terms of use";
const description = "Terms for using the Coworks.dev website and its guides.";

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: { canonical: "/terms" },
  openGraph: { title, description, url: "/terms", siteName: "Coworks.dev" },
};

const sections = [
  {
    heading: "About this website",
    body: [
      "Coworks.dev publishes independent educational guides about Claude Cowork. Anthropic operates Claude Cowork and sets the terms for using that product.",
      <>See the <a href="https://www.anthropic.com/legal/consumer-terms">Anthropic Consumer Terms</a> for Claude use and our <a href="/privacy">privacy policy</a> for how this website handles visitor data.</>,
    ],
  },
  {
    heading: "Using our examples",
    body: [
      "Platform support, plans, and product behavior can change. Verify requirements with the product provider and check outputs before using them in your work.",
      "Use sample files or files you have permission to use. Keep copies of original files before trying examples that rename, move, or edit them.",
    ],
  },
  {
    heading: "Contact",
    body: [<>Send questions about these terms to <a href="mailto:xfy150150@gmail.com">xfy150150@gmail.com</a>.</>],
  },
];

export default function Page() {
  return <SimplePage title={title} description={description} sections={sections} />;
}
