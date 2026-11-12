import { Navigation } from "@/components/navigation/Navigation";
import { Footer } from "@/components/navigation/Footer";
import { HeroSection } from "@/components/landing/HeroSection";
import { HomeGuide } from "@/components/landing/HomeGuide";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#f7f7f0] text-[#0f0f0f] dark:bg-[#050505] dark:text-white">
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-2 focus:z-50 focus:rounded-lg focus:bg-[#f7d793] focus:px-3 focus:py-2 focus:text-black">Skip to content</a>
      <Navigation />
      <main id="main-content" className="mx-auto max-w-6xl space-y-10 px-4 pb-14 pt-5 sm:space-y-14 sm:px-6 sm:pt-8 lg:px-8 lg:pt-10">
        <HeroSection />
        <HomeGuide />
      </main>
      <Footer />
    </div>
  );
}
