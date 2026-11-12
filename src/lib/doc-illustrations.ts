const altText: Record<string, string> = {
  dispatch: "A task moves from a phone to a desktop workspace and returns as a checked brief.",
  "plugin-directory": "Work plugin cards appear next to a permission lock and checklist.",
  "research-brief": "Three source documents feed into an evidence table and a checked decision memo.",
  introduction: "A task brief and source files become a report ready for review.",
  "how-it-works": "A brief and authorized files enter the workspace, and the draft goes to human review.",
  setup: "A desktop computer and browser point toward a folder of sample files.",
  "use-cases": "Three Cowork workflows: organizing files, auditing receipts, and preparing a briefing.",
  productivity: "Two timers represent time spent preparing a task and reviewing its result.",
  limitations: "A locked folder and a review checkpoint illustrate file permissions and human approval.",
  comparison: "Four assistants receive the same sample files and return work to check against the same criteria.",
  future: "Manual work and delegated tasks stay connected to human oversight.",
  appendix: "Reusable instruction cards sit next to a checklist and a folder.",
  "receipt-audit": "Paper receipts are matched to spreadsheet rows and possible errors are flagged.",
  "plugins-and-connectors": "A connector brings in a document source while a skill card represents reusable instructions.",
  "scheduled-tasks": "A calendar and clock lead to a recurring briefing with links and run history.",
  "plans-and-pricing": "Plan cards sit beside device and workload icons to illustrate factors in choosing a plan.",
  "file-organization": "Unsorted files become a proposed folder tree with a warning to review duplicates.",
  "workspace-instructions": "Four instruction cards represent inputs, output format, constraints, and approval.",
  troubleshooting: "A diagnostic path checks app access, folder permissions, and connector connectivity.",
  "connector-checklist": "Documents, team chat, and a calendar pass through a permission check to create a summary.",
  templates: "Search and filter controls narrow the prompt cards, and one card is copied to a clipboard.",
};

export function getDocIllustration(slug: string) {
  const alt = altText[slug];
  if (!alt) return undefined;
  const base = `/docs/illustrations/${slug}`;
  return {
    alt,
    url: `${base}.webp`,
    small: `${base}-480.webp`,
    width: 1200,
    height: 800,
  };
}
