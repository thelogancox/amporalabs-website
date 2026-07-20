import type { Metadata } from "next";
import StoreRedirect from "./StoreRedirect";

export const metadata: Metadata = {
  title: "Get Ampora",
  // Utility redirect for ad traffic — keep it out of search results.
  robots: { index: false, follow: false },
  alternates: {},
};

export default function GetPage() {
  return <StoreRedirect />;
}
