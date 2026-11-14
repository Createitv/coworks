"use client";

import { useEffect, useRef } from "react";

/**
 * Single, delayed ad slot mounted once in RootLayout.
 *
 * The third-party script is injected only after the visitor scrolls or has
 * stayed on the page for 3.5s. That keeps the script off the critical path
 * (LCP), keeps the first screen 100% free of ads, and avoids hitting a
 * brand-new visitor with an ad before they have seen any content.
 *
 * RootLayout stays mounted across client-side navigations, so the script is
 * loaded at most once per page view. The container reserves height up front
 * to prevent layout shift (CLS); if the format turns out to be a floating /
 * overlay unit that does not fill the container, the reserved space collapses.
 *
 * No user-agent sniffing: the delay applies equally to every visitor, so this
 * is plain lazy-loading rather than cloaking.
 */
const AD_SCRIPT_SRC = "https://bicea.org/21/ccf1d816221458fcebeeff57a7becd42";
const AD_CONTAINER_ID = "container-ccf1d816221458fcebeeff57a7becd42";
const AD_DELAY_MS = 3500;
const EMPTY_SLOT_CHECK_MS = 2000;

export function DelayedAdSlot() {
  const slotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let loaded = false;
    let delayTimer: ReturnType<typeof setTimeout> | undefined;
    let emptyTimer: ReturnType<typeof setTimeout> | undefined;

    const load = () => {
      if (loaded) return;
      loaded = true;
      window.removeEventListener("scroll", load);
      if (delayTimer) clearTimeout(delayTimer);

      const script = document.createElement("script");
      script.src = AD_SCRIPT_SRC;
      script.async = true;
      script.setAttribute("data-cfasync", "false");
      document.body.appendChild(script);

      // Overlay / social-bar formats append themselves to <body> and never
      // fill this container. Collapse the placeholder so the footer is not
      // followed by a large empty box (and so CLS is not made worse).
      emptyTimer = setTimeout(() => {
        const slot = slotRef.current;
        if (slot && slot.childElementCount === 0) {
          slot.style.minHeight = "0px";
          slot.style.borderColor = "transparent";
          slot.style.backgroundColor = "transparent";
        }
      }, EMPTY_SLOT_CHECK_MS);
    };

    window.addEventListener("scroll", load, { once: true, passive: true });
    delayTimer = setTimeout(load, AD_DELAY_MS);

    return () => {
      window.removeEventListener("scroll", load);
      if (delayTimer) clearTimeout(delayTimer);
      if (emptyTimer) clearTimeout(emptyTimer);
    };
  }, []);

  return (
    <aside
      aria-label="Advertisement"
      className="mx-auto w-full max-w-6xl px-4 pb-8 sm:px-6 lg:px-8"
    >
      <div
        id={AD_CONTAINER_ID}
        ref={slotRef}
        className="flex min-h-[250px] w-full items-center justify-center rounded-2xl border border-black/5 bg-black/[0.02] dark:border-white/5 dark:bg-white/[0.02]"
      />
    </aside>
  );
}
