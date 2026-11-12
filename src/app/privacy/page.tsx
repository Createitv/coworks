import { publicPageMetadata } from "@/lib/page-metadata";
import { SimplePage } from "@/components/layout/SimplePage";

const title = "Privacy policy";
const description = "How Coworks.dev uses hosting, analytics, advertising, and embedded video.";

export const metadata = publicPageMetadata(title, description, "/privacy");

const sections = [
  {
    heading: "Scope and contact",
    body: [
      <>This policy covers Coworks.dev, an independent website about Claude Cowork. For questions about this site or privacy requests, email <a href="mailto:xfy150150@gmail.com">xfy150150@gmail.com</a>.</>,
      <>Anthropic operates Claude and handles data you provide to its services under the <a href="https://www.anthropic.com/legal/privacy">Anthropic Privacy Policy</a>.</>,
    ],
  },
  {
    heading: "Hosting, analytics, and video",
    body: [
      "The guides, templates, and videos are open to visitors without a Coworks.dev account.",
      "Our video watch pages load a YouTube player. YouTube receives information needed to serve the player and applies its own privacy policy.",
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
