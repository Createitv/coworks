import { publicPageMetadata } from "@/lib/page-metadata";
import { SimplePage } from "@/components/layout/SimplePage";

const title = "About Coworks.dev";
const description = "An independent guide to Claude Cowork, with setup instructions and sample workflows.";

export const metadata = publicPageMetadata(title, description, "/about");

const sections = [
  {
    heading: "Who publishes this site",
    body: [
      "Coworks.dev is independently maintained and has no affiliation with Anthropic. Claude and Claude Cowork are Anthropic products.",
      <>For corrections or questions about this site, <a href="/connect-me">contact the site maintainer</a>.</>,
    ],
  },
  {
    heading: "What you can find here",
    body: [
      <>Read the <a href="/docs/setup">setup guide</a> for account, platform, and folder requirements, or try the <a href="/docs/receipt-audit">receipt workflow</a> with synthetic data and a reference output.</>,
      <>For current product availability, see the <a href="https://support.claude.com/en/articles/13345190-get-started-with-claude-cowork">Claude Help Center</a>.</>,
    ],
  },
];

export default function Page() {
  return <SimplePage title={title} description={description} sections={sections} />;
}
