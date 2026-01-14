'use client';

import Image from "next/image";
import Link from "next/link";

const links = [
  { label: "About", href: "/about" },
  { label: "Connect", href: "/connect-me" },
  { label: "Privacy", href: "/privacy" },
  { label: "Terms", href: "/terms" },
];

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-black/10 bg-[#fdfbf4] text-[#0b0b0b] dark:border-white/10 dark:bg-[#040404] dark:text-white">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-[1.2fr_0.8fr]">
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-4">
              <Image
                src="/logo.png"
                alt="Claude Cowork logo"
                width={64}
                height={64}
                className="h-16 w-16 rounded-full border border-black/10 object-cover dark:border-white/20"
              />
              <div>
                <p className="text-xl font-semibold">Claude Cowork</p>
                <p className="text-xs uppercase tracking-[0.3em] text-black/60 dark:text-white/60">
                  Digital coworker preview
                </p>
              </div>
            </Link>
            <p className="text-base text-black/70 dark:text-white/70">
              A macOS desktop agent that plans, executes, and reports back on multi-step file work so you can focus on the
              interesting problems.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-3">
              <p className="text-sm uppercase tracking-[0.3em] text-black/60 dark:text-white/60">Navigate</p>
              <div className="flex flex-col gap-2 text-base text-black/80 dark:text-white/80">
                {links.map((link) => (
                  <Link key={link.href} href={link.href} className="hover:text-black dark:hover:text-white">
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
            <div className="space-y-3">
              <p className="text-sm uppercase tracking-[0.3em] text-black/60 dark:text-white/60">Contact</p>
              <div className="space-y-2 text-base text-black/80 dark:text-white/80">
                <Link href="mailto: xfy150150@gmail.com" className="underline decoration-dotted decoration-[#c28d39]">
                  xfy150150@gmail.com
                </Link>
                <p>Preview hours: Mon-Fri, 10am-6pm PT</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-black/10 pt-6 text-sm text-black/60 dark:border-white/10 dark:text-white/60 sm:flex-row sm:items-center sm:justify-between">
          <p>Copyright {year} Claude Cowork. All rights reserved.</p>
          <p>Built with Anthropic AI agents.</p>
        </div>
      </div>
    </footer>
  );
}
