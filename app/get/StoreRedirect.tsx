"use client";

import { useEffect } from "react";

const APP_STORE_URL = "https://apps.apple.com/us/app/ampora/id6753693522";

// Query params we forward to Apple (App Store Connect campaign links use these).
// Everything else (fbclid, utm_*) is dropped so the store URL stays clean.
const FORWARD = ["pt", "ct", "mt"];

function buildTarget(search: string): string {
  const incoming = new URLSearchParams(search);
  const out = new URLSearchParams();
  for (const key of FORWARD) {
    const v = incoming.get(key);
    if (v) out.set(key, v);
  }
  const qs = out.toString();
  return qs ? `${APP_STORE_URL}?${qs}` : APP_STORE_URL;
}

/**
 * Ad-traffic landing page whose only job is to hand the visitor to the App
 * Store. Meta's Traffic objective rejects a raw apps.apple.com destination, so
 * ads point here instead: a real page on our domain (pixel fires, attribution
 * preserved) that immediately redirects. No content to bounce off of.
 */
export default function StoreRedirect() {
  useEffect(() => {
    const search = window.location.search;
    const dest = buildTarget(search);

    const content = new URLSearchParams(search).get("utm_content") || undefined;
    window.fbq?.("trackCustom", "ClickToDownload", {
      store: "app_store",
      path: "/get",
      ...(content ? { ad: content } : {}),
    });

    // Small delay so the pixel beacon fires before we navigate away.
    const t = setTimeout(() => {
      window.location.replace(dest);
    }, 450);
    return () => clearTimeout(t);
  }, []);

  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 28,
        background: "#08070F",
        color: "#fff",
        fontFamily:
          '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
        padding: 24,
        textAlign: "center",
      }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/ampora-logo.png"
        alt="Ampora"
        width={88}
        height={88}
        style={{
          borderRadius: 20,
          boxShadow: "0 0 60px rgba(139,92,246,0.5)",
        }}
      />
      <div style={{ fontSize: 20, fontWeight: 700 }}>
        Opening the App Store&hellip;
      </div>
      <a
        href={APP_STORE_URL}
        style={{
          marginTop: 4,
          display: "inline-flex",
          alignItems: "center",
          gap: 10,
          padding: "14px 28px",
          borderRadius: 14,
          background: "linear-gradient(135deg,#8b5cf6,#6d28d9)",
          color: "#fff",
          fontWeight: 700,
          fontSize: 17,
          textDecoration: "none",
        }}
      >
        Tap here if it doesn&rsquo;t open
      </a>
    </main>
  );
}
