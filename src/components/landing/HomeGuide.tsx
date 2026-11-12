import { ArrowRight, BookOpen, CircleHelp, FolderOpen, Play, Search, SlidersHorizontal } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const routes = [
  { title: "Find the missing Cowork tab", description: "Check the interface, plan and workspace settings.", href: "/docs/setup#missing-cowork", icon: CircleHelp },
  { title: "Connect a local folder", description: "Start with a sample folder and check access.", href: "/docs/setup#local-files", icon: FolderOpen },
  { title: "Compare plans and devices", description: "See what your task needs before you subscribe.", href: "/docs/plans-and-pricing", icon: SlidersHorizontal },
];

const exercises = [
  {
    title: "Turn receipts into a checked spreadsheet",
    description: "Extract receipt rows, flag duplicates and check totals by currency against an answer key.",
    href: "/docs/receipt-audit", image: "/docs/illustrations/receipt-audit-480.webp",
  },
  {
    title: "Write a research brief with sources",
    description: "Compare three sample documents, flag missing evidence and explain whether a pilot should expand.",
    href: "/docs/research-brief", image: "/docs/illustrations/research-brief-480.webp",
  },
];

const library = [
  { title: "Written guides", description: "Setup, files, plugins, and troubleshooting", href: "/docs", icon: BookOpen },
  { title: "Video library", description: "Official and community walkthroughs", href: "/videos", icon: Play },
  { title: "Find a resource", description: "Search guides, templates, and videos", href: "/resources", icon: Search },
];

export function HomeGuide() {
  return (
    <>
      <section id="use-cases" aria-labelledby="next-step" className="scroll-mt-24">
        <h2 id="next-step" className="text-2xl font-semibold tracking-tight sm:text-3xl">Find your next step</h2>
        <ul className="mt-4 divide-y divide-current/15 border-y border-current/15 lg:grid lg:grid-cols-3 lg:divide-x lg:divide-y-0">
          {routes.map(({ title, description, href, icon: Icon }) => (
            <li key={href}>
              <Link href={href} className="group flex min-h-20 items-start gap-3 px-2 py-4 focus-visible:outline-2 focus-visible:-outline-offset-2 sm:px-4">
                <Icon className="mt-0.5 size-5 shrink-0 text-[#905737] dark:text-[#f7d793]" aria-hidden="true" />
                <span><span className="block font-semibold underline-offset-4 group-hover:underline">{title}</span><span className="mt-1 block text-sm opacity-75">{description}</span></span>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section id="examples" aria-labelledby="exercise-title" className="scroll-mt-24">
        <div className="flex flex-wrap items-end justify-between gap-3">
          <div>
            <h2 id="exercise-title" className="text-2xl font-semibold tracking-tight sm:text-3xl">Practice with files you can check</h2>
            <p className="mt-2 max-w-2xl opacity-75">Each exercise includes sample inputs and expected results, so you can check the work yourself.</p>
          </div>
          <Link href="/docs/templates" className="font-semibold underline underline-offset-4">Browse prompt templates</Link>
        </div>
        <div id="workflow" className="mt-5 grid scroll-mt-24 gap-4 lg:grid-cols-2">
          {exercises.map((item) => (
            <article key={item.href} className="grid overflow-hidden rounded-2xl border border-current/15 bg-white sm:grid-cols-[9rem_1fr] dark:bg-[#15120f]">
              <Image src={item.image} alt="" width={480} height={320} sizes="(min-width: 640px) 144px, 90vw" className="h-full max-h-44 w-full object-cover sm:max-h-none" />
              <div className="p-5">
                <h3 className="text-lg font-semibold leading-tight"><Link className="underline-offset-4 hover:underline" href={item.href}>{item.title}</Link></h3>
                <p className="mt-2 text-sm leading-relaxed opacity-75">{item.description}</p>
                <Link aria-label={`Open exercise: ${item.title}`} href={item.href} className="mt-4 inline-flex min-h-9 items-center gap-2 text-sm font-semibold underline underline-offset-4">Open exercise <ArrowRight className="size-4" aria-hidden="true" /></Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="cta" aria-labelledby="library-title" className="scroll-mt-24 rounded-2xl border border-[#c08b2d]/25 bg-[#f7d793]/20 px-5 py-6 sm:p-7 dark:bg-[#f7d793]/8">
        <h2 id="library-title" className="text-2xl font-semibold tracking-tight">Explore the library</h2>
        <ul className="mt-4 grid gap-3 sm:grid-cols-3">
          {library.map(({ title, description, href, icon: Icon }) => (
            <li key={href}>
              <Link href={href} className="group block rounded-xl py-2 focus-visible:outline-2 focus-visible:outline-offset-4">
                <Icon className="mb-2 size-5 text-[#905737] dark:text-[#f7d793]" aria-hidden="true" />
                <span className="block font-semibold group-hover:underline">{title}</span>
                <span className="mt-1 block text-sm opacity-75">{description}</span>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section id="faq" aria-labelledby="faq-title" className="scroll-mt-24">
        <h2 id="faq-title" className="text-2xl font-semibold tracking-tight sm:text-3xl">Common Cowork questions</h2>
        <dl className="mt-4 grid gap-5 sm:grid-cols-2">
          <div className="border-t border-current/15 pt-3">
            <dt className="font-semibold">Do I need an account to read these guides?</dt>
            <dd className="mt-2 max-w-[55ch] text-sm leading-relaxed opacity-75">No. Coworks.dev is an independent, public guide. Claude itself is operated separately by Anthropic.</dd>
          </div>
          <div className="border-t border-current/15 pt-3">
            <dt className="font-semibold">Can I use Cowork without Claude Desktop?</dt>
            <dd className="mt-2 max-w-[55ch] text-sm leading-relaxed opacity-75">Some cloud tasks work without Desktop where enabled. Use Desktop for local file access and check the <Link href="/docs/setup#plans-and-platforms" className="underline underline-offset-4">current platform guidance</Link>.</dd>
          </div>
        </dl>
        <Link href="/docs/faq" className="mt-5 inline-block font-semibold underline underline-offset-4">Read all frequently asked questions</Link>
      </section>
    </>
  );
}
