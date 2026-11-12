import type { Metadata } from "next";
import { SimplePage } from "@/components/layout/SimplePage";

const title = "Privacy policy";
const description = "How Coworks.dev uses account information, analytics, and advertising technologies.";

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: { canonical: "/privacy" },
  openGraph: { title, description, url: "/privacy", siteName: "Coworks.dev" },
};

const sections = [
  {
    heading: "Scope and contact",
    body: [
      <>This policy covers Coworks.dev, an independent website about Claude Cowork. For questions about this site or requests concerning your account data, email <a href="mailto:xfy150150@gmail.com">xfy150150@gmail.com</a>.</>,
      <>Anthropic operates Claude and handles data you provide to its services under the <a href="https://www.anthropic.com/legal/privacy">Anthropic Privacy Policy</a>.</>,
    ],
  },
  {
    heading: "Accounts, hosting, and analytics",
    body: [
      "If you sign in with Google or GitHub, we use the profile and account information returned by that provider to create or recognize your site account. Session cookies keep you signed in. You can browse the guides without an account.",
      "We use Vercel to host the website and Vercel Web Analytics to measure visits. Where Google Analytics is enabled, Google receives site usage events and may use cookies or similar identifiers to measure visits.",
      "If you email us, we use your email address and message to respond to your request.",
    ],
  },
  {
    heading: "Google AdSense and advertising",
    body: [
      "Coworks.dev uses Google AdSense. When ads are served, Google and other advertising partners may place or read cookies, use web beacons, and receive IP addresses or other identifiers to deliver ads, measure their performance, and detect abuse. Depending on your choices and applicable rules, these partners may use information from this and other sites to personalize ads.",
      <>Read <a href="https://policies.google.com/technologies/partner-sites">how Google uses data from partner sites</a>. You can manage ad personalization in <a href="https://myadcenter.google.com/">My Ad Center</a>, manage cookies in your browser, and revisit consent through the site's privacy options where available.</>,
    ],
  },
];

export default function Page() {
  return <SimplePage title={title} description={description} sections={sections} />;
}
