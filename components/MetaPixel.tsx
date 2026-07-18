"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
  }
}

/**
 * PageView on Next.js client-side route changes; the base snippet in
 * app/layout.tsx only fires on full page loads.
 *
 * ClickToDownload lives in that same head snippet rather than here, so
 * store-link clicks are still tracked if React never hydrates.
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

  return null;
}
