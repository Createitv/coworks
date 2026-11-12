export const docSections = [
  { id: "start", label: "Start here", slugs: ["introduction", "setup", "how-it-works", "plans-and-pricing"] },
  { id: "workflows", label: "Workflows", slugs: ["use-cases", "receipt-audit", "file-organization", "workspace-instructions", "productivity", "appendix"] },
  { id: "integrations", label: "Plugins and automation", slugs: ["plugins-and-connectors", "connector-checklist", "scheduled-tasks"] },
  { id: "help", label: "Troubleshooting and comparisons", slugs: ["troubleshooting", "limitations", "comparison", "future"] },
] as const;

export const guideNavigation = [
  { label: "What is Cowork?", href: "/docs/introduction" },
  { label: "Setup", href: "/docs/setup" },
  { label: "Docs", href: "/docs" },
  { label: "Templates", href: "/docs/templates" },
  { label: "Plugins", href: "/docs/plugins-and-connectors" },
  { label: "Pricing", href: "/docs/plans-and-pricing" },
  { label: "Help", href: "/docs/troubleshooting" },
];
