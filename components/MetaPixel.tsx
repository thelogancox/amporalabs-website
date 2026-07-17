"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
  }
}

/**
 * Client-side Meta Pixel helpers.
 * The base pixel (init + first PageView) is injected in app/layout.tsx.
 * This component adds:
 *  1. PageView on Next.js client-side route changes (the base snippet
 *     only fires on full page loads).
 *  2. A ClickToDownload custom event whenever any App Store / Google
 *     Play link is clicked, tagged with which store and which page.
 */
export default function MetaPixel() {
  const pathname = usePathname();
  const firstRender = useRef(true);

  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }
    window.fbq?.("track", "PageView");
  }, [pathname]);

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const target = e.target as Element | null;
      const link = target?.closest?.(
        'a[href*="apps.apple.com"], a[href*="play.google.com"]'
      ) as HTMLAnchorElement | null;
      if (!link) return;
      const store = link.href.includes("apps.apple.com")
        ? "app_store"
        : "google_play";
      window.fbq?.("trackCustom", "ClickToDownload", {
        store,
        path: window.location.pathname,
      });
    };
    document.addEventListener("click", onClick, true);
    return () => document.removeEventListener("click", onClick, true);
  }, []);

  return null;
}
