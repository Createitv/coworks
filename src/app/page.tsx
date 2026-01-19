'use client';

import { useEffect, useState } from "react";
import clsx from "clsx";
import { Navigation } from "@/components/navigation/Navigation";
import { HeroSection } from "@/components/landing/HeroSection";
import { FeatureHighlights } from "@/components/landing/FeatureHighlights";
import { UseCaseGrid } from "@/components/landing/UseCaseGrid";
import { WorkflowSection } from "@/components/landing/WorkflowSection";
import { ExampleShowcase } from "@/components/landing/ExampleShowcase";
import { TechDetails } from "@/components/landing/TechDetails";
import { FAQSection } from "@/components/landing/FAQSection";
import { CallToAction } from "@/components/landing/CallToAction";
import { LoginModal } from "@/components/auth/LoginModal";
import { Footer } from "@/components/navigation/Footer";
import { authClient } from "@/lib/auth-client";

type ThemeMode = "light" | "dark";

export default function Home() {
  const [theme, setTheme] = useState<ThemeMode>("dark");
  const [isLoginModalOpen, setLoginModalOpen] = useState(false);
  const { data: session } = authClient.useSession();

  useEffect(() => {
    if (typeof window === "undefined") return;
    const stored = window.localStorage.getItem("theme");
    // Only switch to light if explicitly set, otherwise stay dark
    if (stored === "light") {
      setTheme("light");
    }
  }, []);

  useEffect(() => {
    if (typeof document === "undefined") return;
    document.documentElement.classList.toggle("dark", theme === "dark");
    if (typeof window !== "undefined") {
      window.localStorage.setItem("theme", theme);
    }
  }, [theme]);

  useEffect(() => {
    if (session && isLoginModalOpen) {
      setLoginModalOpen(false);
    }
  }, [session, isLoginModalOpen]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  const isDarkMode = theme === "dark";
  const user = session?.user;

  return (
    <div
      className={clsx(
        "min-h-screen transition-colors duration-500",
        isDarkMode ? "bg-[#050505] text-white" : "bg-[#f7f7f0] text-[#0f0f0f]"
      )}
    >
      <Navigation
        isDarkMode={isDarkMode}
        onToggleTheme={toggleTheme}
        onLoginClick={() => setLoginModalOpen(true)}
        user={user}
        isAuthenticated={Boolean(session)}
      />

      <main className="mx-auto max-w-6xl px-4 pb-16 pt-10 sm:px-6 lg:px-8 lg:pt-16">
        <div className="space-y-16">
          {user && (
            <div className="rounded-3xl border border-white/10 bg-white/10 px-6 py-4 text-sm text-white shadow-[0_30px_80px_rgba(0,0,0,0.35)] dark:border-white/20">
              <p className="text-xs uppercase tracking-[0.4em] text-white/60">You are signed in</p>
              <p className="text-lg font-semibold text-white">
                {user.name || user.email}
              </p>
            </div>
          )}
          <HeroSection isDarkMode={isDarkMode} />
          <FeatureHighlights />
          <UseCaseGrid />
          <WorkflowSection />
          <ExampleShowcase />
          <TechDetails />
          <FAQSection />
          <CallToAction />
        </div>
      </main>
      <Footer />

      <LoginModal open={isLoginModalOpen} onClose={() => setLoginModalOpen(false)} />
    </div>
  );
}
