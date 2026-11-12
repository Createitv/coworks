"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useRef } from "react";
import { ChevronDown } from "lucide-react";
import { guideNavigation } from "@/lib/guide-navigation";

export function GuideLinks({ mobile = false, onNavigate }: { mobile?: boolean; onNavigate?: () => void }) {
  const group = useId();
  const container = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  useEffect(() => {
    function outside(event: PointerEvent) {
      if (event.target instanceof Node && !container.current?.contains(event.target)) {
        container.current?.querySelectorAll("details[open]").forEach((details) => details.removeAttribute("open"));
      }
    }
    document.addEventListener("pointerdown", outside);
    return () => document.removeEventListener("pointerdown", outside);
  }, []);

  const control = "flex items-center gap-1.5 rounded-lg px-3 py-2 text-sm font-semibold hover:bg-black/5 focus-visible:outline-2 focus-visible:outline-offset-2 dark:hover:bg-white/10";
  return (
    <div ref={container} className={mobile ? "grid gap-1" : "flex items-center gap-1"} onKeyDown={(event) => {
      if (event.key !== "Escape") return;
      const open = container.current?.querySelector<HTMLDetailsElement>("details[open]");
      if (open) {
        open.open = false;
        open.querySelector("summary")?.focus();
      }
    }}>
      {guideNavigation.map((item) => "href" in item ? (
        <Link key={item.label} href={item.href} onClick={onNavigate}
          aria-current={pathname === item.href ? "page" : undefined}
          className={`${control} ${pathname.startsWith("/videos") ? "bg-[#f7d793]/30 dark:bg-[#f7d793]/15" : ""}`}>
          {item.label}
        </Link>
      ) : (
        <details key={item.label} name={group} className="group relative">
          <summary className={`${control} cursor-pointer list-none [&::-webkit-details-marker]:hidden`}>
            {item.label}
            <ChevronDown aria-hidden="true" className="size-4 opacity-65 group-open:rotate-180" />
          </summary>
          <div className={mobile
            ? "ml-3 border-l border-black/15 pl-2 dark:border-white/20"
            : "absolute left-0 top-full z-40 mt-2 w-64 rounded-2xl border border-black/10 bg-[#fffdf6] p-2 shadow-lg dark:border-white/15 dark:bg-[#191613]"}>
            {item.links.map((link) => (
              <Link key={link.href} href={link.href} aria-current={pathname === link.href ? "page" : undefined}
                className="block rounded-lg px-3 py-2 hover:bg-black/5 focus-visible:outline-2 dark:hover:bg-white/10"
                onClick={(event) => {
                  event.currentTarget.closest("details")?.removeAttribute("open");
                  onNavigate?.();
                }}>
                <span className="block text-sm font-semibold">{link.label}</span>
                <span className="block text-xs opacity-70">{link.hint}</span>
              </Link>
            ))}
          </div>
        </details>
      ))}
    </div>
  );
}
