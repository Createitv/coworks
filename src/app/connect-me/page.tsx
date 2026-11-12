import type { Metadata } from "next";
import { SimplePage } from "@/components/layout/SimplePage";

const title = "Contact Coworks.dev";
const description = "Contact the independent site maintainer for corrections, feedback, and privacy requests.";

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: { canonical: "/connect-me" },
  openGraph: { title, description, url: "/connect-me", siteName: "Coworks.dev" },
};

const sections = [
  {
    heading: "Website feedback",
    body: [
      <>Email <a href="mailto:xfy150150@gmail.com">xfy150150@gmail.com</a> for guide corrections, accessibility issues, or privacy requests. Include the page URL and the section you want us to review.</>,
    ],
  },
  {
    heading: "Claude product support",
    body: [
      <>For Claude accounts, subscriptions, or product issues, visit the <a href="https://support.claude.com/">Claude Help Center</a>.</>,
    ],
  },
];

export default function Page() {
  return <SimplePage title={title} description={description} sections={sections} />;
}
