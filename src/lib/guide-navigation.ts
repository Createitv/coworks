type Entry = { label: string; href: string; hint: string };
type NavItem = { label: string; href: string } | { label: string; links: Entry[] };

export const guideNavigation: NavItem[] = [
  { label: "Learn", links: [
    { label: "What is Cowork?", href: "/docs/introduction", hint: "Understand what Cowork can do." },
    { label: "Setup", href: "/docs/setup", hint: "Open Cowork and run a first task." },
    { label: "Features", href: "/docs/how-it-works", hint: "See what Cowork can do and what to verify." },
    { label: "All documentation", href: "/docs", hint: "Browse the complete written guide." },
  ] },
  { label: "Resources", links: [
    { label: "Templates", href: "/docs/templates", hint: "Search and copy task prompts." },
    { label: "Plugins and connectors", href: "/docs/plugins-and-connectors", hint: "Connect Cowork to your tools." },
    { label: "Tips and tricks", href: "/docs/productivity", hint: "Improve prompts and measure review time." },
    { label: "Integrations", href: "/docs/connector-checklist", hint: "Check access in email, files, and calendar tools." },
    { label: "Field notes", href: "/docs/field-notes", hint: "Read repeatable experiments and checklists." },
    { label: "AI access guide", href: "/ai-guide", hint: "Find public Markdown and structured data." },
    { label: "Workflows", href: "/docs/use-cases", hint: "Try a task with a clear result." },
  ] },
  { label: "Videos", href: "/videos" },
  { label: "Support", links: [
    { label: "Help and FAQ", href: "/docs/faq", hint: "Get direct answers on access, files, and plans." },
    { label: "Troubleshooting", href: "/docs/troubleshooting", hint: "Fix access, file, and connector issues." },
    { label: "Plans and pricing", href: "/docs/plans-and-pricing", hint: "Check which plans support Cowork." },
  ] },
];
