const availability = { label: "Claude Help: Cowork availability and setup", url: "https://support.claude.com/en/articles/13345190-get-started-with-claude-cowork" };
const platforms = { label: "Claude Help: Cowork on web, desktop, and mobile", url: "https://support.claude.com/en/articles/15520349-use-claude-cowork-on-web-desktop-and-mobile" };
const pricing = { label: "Anthropic: Claude plans and pricing", url: "https://claude.com/pricing" };
const plugins = { label: "Claude Help: Use plugins in Claude", url: "https://support.claude.com/en/articles/13837440-use-plugins-in-claude" };
const googleWorkspace = { label: "Claude Help: Use Google Workspace connectors", url: "https://support.claude.com/en/articles/10166901-use-google-workspace-connectors" };
const microsoft365 = { label: "Claude Help: Connect to Microsoft 365", url: "https://support.claude.com/en/articles/15183774-connect-to-microsoft-365" };

export type EditorialReview = {
  checkedOn: string;
  sources: readonly { label: string; url: string }[];
};

const sources: Record<string, EditorialReview["sources"]> = {
  introduction: [availability],
  "how-it-works": [availability, platforms],
  setup: [availability, platforms],
  "plans-and-pricing": [availability, pricing],
  faq: [availability, pricing],
  dispatch: [{ label: "Claude Help: Assign tasks from anywhere with Dispatch", url: "https://support.claude.com/en/articles/13947068-assign-tasks-from-anywhere-in-claude-cowork" }, platforms],
  "plugin-directory": [plugins, { label: "Anthropic: Knowledge-work plugins source repository", url: "https://github.com/anthropics/knowledge-work-plugins" }],
  "plugins-and-connectors": [plugins],
  "google-workspace-connector": [googleWorkspace, plugins],
  "microsoft-365-connector": [microsoft365, plugins],
};

export function getEditorialReview(slug: string): EditorialReview | undefined {
  return Object.hasOwn(sources, slug) ? { checkedOn: "2026-11-12", sources: sources[slug] } : undefined;
}
