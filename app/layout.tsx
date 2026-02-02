import type { Metadata, Viewport } from "next";
import { Syne, Outfit } from "next/font/google";
import "./globals.css";
import {
  OrganizationJsonLd,
  SoftwareApplicationJsonLd,
  WebsiteJsonLd,
  FAQJsonLd,
} from "@/components/JsonLd";

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
  title: {
    default: "Ampora | #1 AI Electrical Calculator App - Voltage Drop, Wire Sizing, NEC Code",
    template: "%s | Ampora - Electrical Calculator & AI Assistant"
  },
  description: "Free electrical calculator app with AI assistant for electricians. Voltage drop calculator, wire sizing calculator, conduit fill calculator, arc flash calculator, load calculation, motor sizing, and NEC code reference. The best electrician app for field work.",
  keywords: [
    // Primary electrical terms
    "electrical calculator",
    "electrician app",
    "electrical app",
    "electrician calculator",
    "electrical AI",
    "AI electrician",
    // Voltage drop
    "voltage drop calculator",
    "voltage drop calculation",
    "voltage drop formula",
    "calculate voltage drop",
    "electrical voltage drop",
    // Wire sizing
    "wire sizing calculator",
    "wire size calculator",
    "electrical wire sizing",
    "conductor sizing",
    "wire gauge calculator",
    "AWG calculator",
    "wire ampacity calculator",
    // Conduit fill
    "conduit fill calculator",
    "conduit sizing calculator",
    "conduit fill calculation",
    "NEC conduit fill",
    "electrical conduit calculator",
    // Arc flash
    "arc flash calculator",
    "arc flash analysis",
    "arc flash calculation",
    "incident energy calculator",
    "PPE calculator",
    "arc flash boundary",
    // Load calculation
    "load calculation",
    "load calc",
    "electrical load calculator",
    "service load calculation",
    "demand factor calculator",
    "panel load calculation",
    // Motor sizing
    "motor sizing calculator",
    "motor FLC calculator",
    "motor full load current",
    "motor protection sizing",
    "motor HP calculator",
    // NEC code
    "NEC code",
    "NEC code lookup",
    "NEC reference",
    "NEC 2023",
    "National Electrical Code",
    "electrical code reference",
    // General electrician terms
    "electrician tools",
    "electrician reference",
    "electrical engineering calculator",
    "electrical formulas",
    "ohms law calculator",
    "ampacity calculator",
    "electrical troubleshooting",
    "panel photo analysis",
    // App store terms
    "best electrician app",
    "electrical app iOS",
    "electrician iPhone app"
  ],
  authors: [{ name: "Ampora Labs" }],
  creator: "Ampora Labs",
  publisher: "Ampora Labs",
  category: "Technology",
  classification: "Electrical Engineering Tools",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://amporalabs.com",
    siteName: "Ampora",
    title: "Ampora | #1 AI Electrical Calculator - Voltage Drop, Wire Sizing, NEC Code",
    description: "Free electrical calculator with AI. Voltage drop, wire sizing, conduit fill, arc flash, load calc & NEC code reference. Best app for electricians.",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Ampora - AI Electrical Calculator App",
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ampora | AI Electrical Calculator & NEC Code Reference",
    description: "Free electrical calculator with AI. Voltage drop, wire sizing, conduit fill, arc flash & NEC code lookup. Best app for electricians.",
    images: ["/opengraph-image"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://amporalabs.com",
  },
  verification: {
    google: "ZyKjyOrD-R9DNsuhW92GCS5wc1OvzeeDmdz5XFp3fRg",
  },
  other: {
    "apple-itunes-app": "app-id=6753693522",
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
        {/* JSON-LD Structured Data for SEO */}
        <OrganizationJsonLd />
        <SoftwareApplicationJsonLd />
        <WebsiteJsonLd />
        <FAQJsonLd />
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
