"use client";

import { useEffect, useState } from "react";
import {
  APP_STORE_URL,
  PLAY_STORE_URL,
  detectPlatform,
  storeUrlFor,
  type StorePlatform,
} from "@/lib/store";

// Query params we forward to Apple (App Store Connect campaign links use these).
// Everything else (fbclid, utm_*) is dropped so the store URL stays clean.
const APPLE_FORWARD = ["pt", "ct", "mt"];

function appleTarget(search: string): string {
  const incoming = new URLSearchParams(search);
  const out = new URLSearchParams();
  for (const key of APPLE_FORWARD) {
    const v = incoming.get(key);
    if (v) out.set(key, v);
  }
  const qs = out.toString();
  return qs ? `${APP_STORE_URL}?${qs}` : APP_STORE_URL;
}

/**
 * Ad-traffic landing page whose only job is to hand the visitor to the right
 * store. Meta's Traffic objective rejects a raw store URL as a destination, so
 * ads point here instead: a real page on our domain (pixel fires, attribution
 * preserved) that immediately forwards. Android goes to Play, iOS to the App
 * Store, and anything else (desktop) gets both badges to choose from.
 */
export default function StoreRedirect() {
  const [platform, setPlatform] = useState<StorePlatform | null>(null);

  useEffect(() => {
    const search = window.location.search;
    let detected = detectPlatform(navigator.userAgent);

    // iPadOS 13+ masquerades as desktop Safari; touch points give it away.
    if (
      detected === "other" &&
      /Macintosh/.test(navigator.userAgent) &&
      navigator.maxTouchPoints > 1
    ) {
      detected = "ios";
    }
    setPlatform(detected);

    const content = new URLSearchParams(search).get("utm_content") || undefined;
    window.fbq?.("trackCustom", "ClickToDownload", {
      store: detected === "android" ? "google_play" : detected === "ios" ? "app_store" : "unknown",
      path: "/get",
      ...(content ? { ad: content } : {}),
    });

    const dest =
      detected === "ios"
        ? appleTarget(search)
        : detected === "android"
          ? PLAY_STORE_URL
          : null;
    if (!dest) return; // desktop: show both badges instead of redirecting

    // Small delay so the pixel beacon fires before we navigate away.
    const t = setTimeout(() => window.location.replace(dest), 450);
    return () => clearTimeout(t);
  }, []);

  const isDesktop = platform === "other";

  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 26,
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
        style={{ borderRadius: 20, boxShadow: "0 0 60px rgba(139,92,246,0.5)" }}
      />
      <div style={{ fontSize: 20, fontWeight: 700 }}>
        {isDesktop ? "Get Ampora" : "Opening the store…"}
      </div>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: 14,
          justifyContent: "center",
        }}
      >
        <a href={APP_STORE_URL} style={badgeStyle}>
          Download on the App Store
        </a>
        <a href={PLAY_STORE_URL} style={badgeStyle}>
          Get it on Google Play
        </a>
      </div>

      {!isDesktop && (
        <div style={{ fontSize: 14, color: "rgba(255,255,255,0.55)" }}>
          Not redirecting? Pick your store above.
        </div>
      )}
    </main>
  );
}

const badgeStyle: React.CSSProperties = {
  display: "inline-flex",
  alignItems: "center",
  gap: 10,
  padding: "14px 26px",
  borderRadius: 14,
  background: "linear-gradient(135deg,#8b5cf6,#6d28d9)",
  color: "#fff",
  fontWeight: 700,
  fontSize: 16,
  textDecoration: "none",
};
