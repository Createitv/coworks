type Entry = { label: string; href: string; hint: string };
type NavItem = { label: string; href: string } | { label: string; links: Entry[] };

export const guideNavigation: NavItem[] = [
  { label: "Learn", links: [
    { label: "What is Cowork?", href: "/docs/introduction", hint: "Understand what Cowork can do." },
    { label: "Setup", href: "/docs/setup", hint: "Open Cowork and run a first task." },
    { label: "All documentation", href: "/docs", hint: "Browse the complete written guide." },
  ] },
  { label: "Resources", links: [
    { label: "Templates", href: "/docs/templates", hint: "Search and copy task prompts." },
    { label: "Plugins and connectors", href: "/docs/plugins-and-connectors", hint: "Connect Cowork to your tools." },
    { label: "Workflows", href: "/docs/use-cases", hint: "Try a task with a clear result." },
  ] },
  { label: "Videos", href: "/videos" },
  { label: "Support", links: [
    { label: "Troubleshooting", href: "/docs/troubleshooting", hint: "Fix access, file, and connector issues." },
    { label: "Plans and pricing", href: "/docs/plans-and-pricing", hint: "Check which plans support Cowork." },
  ] },
];
