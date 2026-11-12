import Link from "next/link";
import Image from "next/image";
import { siteBrand } from "@/lib/site";
import { Footer } from "@/components/navigation/Footer";
import { GuideLinks } from "@/components/navigation/GuideLinks";
import { DocsThemeToggle } from "@/app/docs/docs-theme-toggle";

export function ResourceShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-[#f7f7f0] text-[#0f0f0f] dark:bg-[#050505] dark:text-white">
      <header className="relative z-20 border-b border-black/10 bg-[#fffdf6] dark:border-white/15 dark:bg-[#15120f]">
        <nav aria-label="Main navigation" className="mx-auto flex min-h-16 max-w-6xl flex-wrap items-center justify-between gap-x-4 px-4 sm:px-6 lg:px-8">
          <Link href="/" className="flex items-center gap-2 py-2 font-semibold">
            <Image src={siteBrand.path} alt="" width={34} height={34} className="rounded-lg" /> Coworks.dev
          </Link>
          <div className="hidden sm:block"><GuideLinks /></div>
          <details className="order-last w-full pb-2 sm:hidden">
            <summary className="cursor-pointer rounded-lg px-2 py-2 text-sm font-semibold focus-visible:outline-2">Browse Coworks</summary>
            <GuideLinks mobile />
          </details>
          <DocsThemeToggle />
        </nav>
      </header>
      {children}
      <Footer />
    </div>
  );
}
