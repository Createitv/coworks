"use client";

import { useState } from "react";
import Link from "next/link";
import clsx from "clsx";
import { Menu, Moon, Sun, X } from "lucide-react";
import Image from "next/image";

interface NavigationProps {
  isDarkMode: boolean;
  onToggleTheme: () => void;
  onLoginClick: () => void;
  user?: {
    name?: string | null;
    image?: string | null;
    email?: string | null;
  } | null;
  isAuthenticated?: boolean;
}

export function Navigation({
  isDarkMode,
  onToggleTheme,
  onLoginClick,
  user,
  isAuthenticated,
}: NavigationProps) {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: "Overview", href: "#overview" },
    { label: "Use Cases", href: "#use-cases" },
    { label: "Workflow", href: "#workflow" },
    { label: "Examples", href: "#examples" },
    { label: "FAQ", href: "#faq" }
  ];

  const navClass = clsx(
    "sticky top-0 z-30 border-b backdrop-blur transition-colors duration-300",
    isDarkMode ? "border-white/10 bg-black/60" : "border-black/10 bg-white/80"
  );

  const linkClass =
    "rounded-full px-4 py-2 text-sm font-semibold text-black/70 transition hover:text-black dark:text-white/70 dark:hover:text-white";

  return (
    <nav className={navClass}>
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-[#f7d793] to-[#c08b2d] text-sm font-semibold text-black">
            CS
          </div>
          <div>
            <p className="text-base font-semibold text-[#0b0b0b] dark:text-white">
              SkillsMap
            </p>
            <p className="text-xs uppercase tracking-[0.3em] text-black/60 dark:text-white/60">
              Claude Skills Playbook
            </p>
          </div>
        </Link>

        <div className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className={linkClass}>
              {item.label}
            </Link>
          ))}
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
          {isAuthenticated ? (
            <div className="flex items-center gap-3 rounded-full border border-black/10 bg-white/70 px-3 py-1.5 text-sm font-semibold text-black dark:border-white/10 dark:bg-white/10 dark:text-white">
              <div className="flex h-8 w-8 items-center justify-center overflow-hidden rounded-full bg-black/10 dark:bg-white/20">
                {user?.image ? (
                  <Image
                    src={user.image}
                    alt={user.name ?? "user avatar"}
                    width={32}
                    height={32}
                    className="h-8 w-8 object-cover"
                  />
                ) : (
                  <span>{user?.name?.[0] ?? user?.email?.[0] ?? "U"}</span>
                )}
              </div>
              <div className="text-left">
                <p className="text-xs uppercase tracking-[0.3em] text-black/60 dark:text-white/60">Signed in</p>
                <p className="text-sm font-semibold text-black dark:text-white">
                  {user?.name || user?.email || "Anonymous builder"}
                </p>
              </div>
            </div>
          ) : (
            <button
              onClick={onLoginClick}
              className="rounded-full bg-gradient-to-r from-[#f7d793] to-[#c08b2d] px-5 py-2 text-sm font-semibold text-black shadow-lg shadow-[#f4c572]/40 transition hover:-translate-y-0.5"
            >
              Sign in
            </button>
          )}
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="rounded-full border border-black/10 p-2 text-black dark:border-white/20 dark:text-white lg:hidden"
          aria-label="Toggle navigation"
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {isOpen && (
        <div className="border-t border-black/10 px-4 py-4 dark:border-white/10 lg:hidden">
          <div className="flex flex-col gap-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-2xl border border-black/10 px-4 py-3 text-base font-semibold text-black/80 dark:border-white/10 dark:text-white"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
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
            {isAuthenticated ? (
              <div className="flex items-center gap-3 rounded-2xl border border-black/10 bg-white/70 px-4 py-3 text-left text-sm font-semibold text-black dark:border-white/10 dark:bg-black/40 dark:text-white">
                <div className="flex h-10 w-10 items-center justify-center overflow-hidden rounded-full bg-black/10 dark:bg-white/20">
                  {user?.image ? (
                    <Image
                      src={user.image}
                      alt={user.name ?? "user avatar"}
                      width={40}
                      height={40}
                      className="h-10 w-10 object-cover"
                    />
                  ) : (
                    <span>{user?.name?.[0] ?? user?.email?.[0] ?? "U"}</span>
                  )}
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-black/60 dark:text-white/60">Signed in</p>
                  <p>{user?.name || user?.email || "Anonymous builder"}</p>
                </div>
              </div>
            ) : (
              <button
                onClick={() => {
                  onLoginClick();
                  setIsOpen(false);
                }}
                className="rounded-full bg-gradient-to-r from-[#f7d793] to-[#c08b2d] px-4 py-3 text-center text-sm font-semibold text-black shadow-lg shadow-[#f4c572]/40"
              >
                Sign In
              </button>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}
