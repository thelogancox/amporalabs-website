/**
 * Single source of truth for app store links.
 *
 * Ampora ships on both stores. Prefer linking to GET_PATH ("/get") rather than
 * a store URL directly: that page detects the visitor's platform and forwards
 * them to the right store, so an Android user never lands on the App Store.
 * Link straight to APP_STORE_URL / PLAY_STORE_URL only where you are rendering
 * an explicit, platform-labelled badge.
 */
export const APP_STORE_URL =
  "https://apps.apple.com/us/app/ampora/id6753693522";

export const PLAY_STORE_URL =
  "https://play.google.com/store/apps/details?id=com.korvatech.ampora";

/** Platform-aware download route. */
export const GET_PATH = "/get";

export type StorePlatform = "ios" | "android" | "other";

/** Best-effort platform sniff. Used only to pick a download destination. */
export function detectPlatform(ua: string): StorePlatform {
  if (/android/i.test(ua)) return "android";
  // iPadOS 13+ reports as Macintosh, so also check for touch support at the call site.
  if (/iphone|ipad|ipod/i.test(ua)) return "ios";
  return "other";
}

export function storeUrlFor(platform: StorePlatform): string | null {
  if (platform === "ios") return APP_STORE_URL;
  if (platform === "android") return PLAY_STORE_URL;
  return null;
}
