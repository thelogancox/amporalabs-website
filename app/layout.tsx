import type { Metadata, Viewport } from "next";
import { Syne, Outfit } from "next/font/google";
import "./globals.css";

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://amporalabs.com"),
  title: "Ampora | AI-Powered Electrical Intelligence",
  description: "Your AI-powered field companion for electrical work. Get NEC code-backed answers, professional calculators, photo analysis, and expert troubleshooting - all in one app.",
  keywords: ["electrical", "electrician", "NEC code", "AI", "calculator", "voltage drop", "wire sizing", "arc flash", "conduit fill"],
  authors: [{ name: "Ampora Labs" }],
  creator: "Ampora Labs",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://amporalabs.com",
    siteName: "Ampora",
    title: "Ampora | AI-Powered Electrical Intelligence",
    description: "Your AI-powered field companion for electrical work. NEC code answers, pro calculators, photo analysis & more.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ampora | AI-Powered Electrical Intelligence",
    description: "Your AI-powered field companion for electrical work.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#000000",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        {/* Icons are auto-generated from app/icon.svg and app/apple-icon.tsx */}
      </head>
      <body
        className={`${syne.variable} ${outfit.variable} font-body antialiased bg-black text-white`}
      >
        <div className="noise-overlay" aria-hidden="true" />
        {children}
      </body>
    </html>
  );
}
