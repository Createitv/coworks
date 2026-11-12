"use client";

import { siteBrand } from "@/lib/site";
import { useState } from "react";
import Link from "next/link";
import clsx from "clsx";
import { Menu, Moon, Sun, X } from "lucide-react";
import Image from "next/image";
import { GuideLinks } from "./GuideLinks";

interface NavigationProps {
  isDarkMode: boolean;
  onToggleTheme: () => void;
}
export function Navigation({ isDarkMode, onToggleTheme }: NavigationProps) {
  const [isOpen, setIsOpen] = useState(false);

  const navClass = clsx(
    "sticky top-0 z-30 border-b backdrop-blur transition-colors duration-300",
    isDarkMode ? "border-white/10 bg-black/60" : "border-black/10 bg-white/80"
  );

  return (
    <nav aria-label="Main navigation" className={navClass}>
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src={siteBrand.path}
            alt=""
            width={44}
            height={44}
            className="h-11 w-11 rounded-lg border border-black/10 object-cover dark:border-white/20"
            priority
          />
          <div>
            <p className="text-base font-semibold text-[#0b0b0b] dark:text-white">
              Claude Cowork
            </p>
            <p className="text-xs uppercase tracking-[0.3em] text-black/60 dark:text-white/60">
              Independent guide
            </p>
          </div>
        </Link>

        <div className="hidden items-center gap-1 lg:flex">
          <GuideLinks />
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <button
            onClick={onToggleTheme}
            className="flex items-center gap-2 rounded-full border border-black/10 px-3 py-2 text-sm font-semibold text-black transition hover:border-black dark:border-white/20 dark:text-white dark:hover:border-white"
            aria-label="Toggle theme"
          >
            {isDarkMode ? (
              <>
                <Sun className="h-4 w-4" /> Light
              </>
            ) : (
              <>
                <Moon className="h-4 w-4" /> Dark
              </>
            )}
          </button>
          <Link href="/resources" className="rounded-full bg-[#f7d793] px-4 py-2 text-sm font-semibold text-black hover:bg-[#edc575]">
            Find resources
          </Link>
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="rounded-full border border-black/10 p-2 text-black dark:border-white/20 dark:text-white lg:hidden"
          aria-label="Toggle navigation"
          aria-expanded={isOpen}
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {isOpen && (
        <div className="max-h-[calc(100dvh-4rem)] overflow-y-auto border-t border-black/10 px-4 py-4 dark:border-white/10 lg:hidden">
          <GuideLinks mobile onNavigate={() => setIsOpen(false)} />
          <div className="mt-4 flex flex-col gap-3">
            <button
              onClick={() => {
                onToggleTheme();
                setIsOpen(false);
              }}
              className="flex items-center justify-center gap-2 rounded-full border border-black/10 px-4 py-3 text-sm font-semibold text-black dark:border-white/20 dark:text-white"
            >
              {isDarkMode ? (
                <>
                  <Sun className="h-4 w-4" /> Switch to light mode
                </>
              ) : (
                <>
                  <Moon className="h-4 w-4" /> Switch to dark mode
                </>
              )}
            </button>
            <Link href="/resources" onClick={() => setIsOpen(false)} className="rounded-full bg-[#f7d793] px-4 py-3 text-center text-sm font-semibold text-black">
              Find resources
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
