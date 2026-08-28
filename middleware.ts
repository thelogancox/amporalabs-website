import { auth } from "@/lib/auth";
import { NextResponse } from "next/server";
import { APP_STORE_URL, PLAY_STORE_URL } from "@/lib/store";

/**
 * /get: hand ad traffic to the right app store with a SERVER-side redirect.
 *
 * The page's client-side redirect never ran for real ad clicks: Facebook's
 * in-app browser suppresses programmatic (non-tap) navigation to app stores,
 * so ~825 paid visitors in Aug 2026 loaded /get and ~zero reached the App
 * Store. An HTTP 302 happens before any browser policy or React hydration can
 * interfere — it is how every link shortener and MMP does this.
 *
 * Attribution moves store-side: utm_content is forwarded to Apple as `ct`
 * (plus pt/mt if present) and to Play as an install `referrer`, so installs
 * per ad show up in App Store Connect / Play Console instead of the pixel.
 * Desktop and unknown agents fall through to the page with both badges.
 */
function storeRedirect(req: {
  headers: Headers;
  nextUrl: { searchParams: URLSearchParams };
}) {
  const ua = req.headers.get("user-agent") || "";
  const params = req.nextUrl.searchParams;
  const content = params.get("utm_content") || "";

  if (/android/i.test(ua)) {
    const referrer = new URLSearchParams({
      utm_source: params.get("utm_source") || "facebook",
      utm_medium: params.get("utm_medium") || "paid",
      ...(content ? { utm_content: content } : {}),
    }).toString();
    return NextResponse.redirect(`${PLAY_STORE_URL}&referrer=${encodeURIComponent(referrer)}`, 302);
  }

  if (/iphone|ipad|ipod/i.test(ua)) {
    const out = new URLSearchParams();
    for (const key of ["pt", "ct", "mt"]) {
      const v = params.get(key);
      if (v) out.set(key, v);
    }
    if (content && !out.has("ct")) out.set("ct", content);
    const qs = out.toString();
    return NextResponse.redirect(qs ? `${APP_STORE_URL}?${qs}` : APP_STORE_URL, 302);
  }

  // Desktop / unknown (incl. iPadOS masquerading as macOS): render the page.
  return NextResponse.next();
}

export default auth((req) => {
  const { pathname } = req.nextUrl;

  if (pathname === "/get") {
    return storeRedirect(req);
  }

  // Only protect /dashboard routes (except login page)
  if (pathname.startsWith("/dashboard") && pathname !== "/dashboard/login") {
    if (!req.auth) {
      return NextResponse.redirect(new URL("/dashboard/login", req.url));
    }
  }

  return NextResponse.next();
});

export const config = {
  matcher: ["/dashboard/:path*", "/get"],
};
