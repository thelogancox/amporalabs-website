import { Metadata } from "next";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import { BreadcrumbJsonLd, BlogPostingJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Electrical Symbols & Blueprint Reading: Complete Guide for Electricians",
  description: "Learn to read electrical blueprints and drawings. Complete guide to electrical symbols, single-line diagrams, three-line diagrams, and plan reading for residential and commercial installations.",
  keywords: [
    "electrical symbols",
    "electrical blueprint reading",
    "electrical drawing symbols",
    "single line diagram",
    "three line diagram",
    "electrical plan reading",
    "wiring diagram symbols",
    "electrical schematic symbols",
    "receptacle symbol",
    "switch symbol electrical",
    "lighting symbol electrical",
    "panel schedule reading",
    "electrical floor plan",
    "commercial electrical drawings",
    "residential electrical plans"
  ],
  alternates: {
    canonical: "https://amporalabs.com/blog/electrical-symbols-blueprint-reading",
  },
  openGraph: {
    title: "Electrical Symbols & Blueprint Reading Guide - Ampora",
    description: "Complete guide to electrical symbols and blueprint reading for electricians.",
    url: "https://amporalabs.com/blog/electrical-symbols-blueprint-reading",
    type: "article",
  },
};

function HeroIllustration() {
  return (
    <svg viewBox="0 0 400 180" className="w-full h-44 md:h-52" aria-label="Electrical blueprint illustration">
      {/* Blueprint background */}
      <rect x="20" y="10" width="360" height="160" rx="4" fill="#1e3a5f" stroke="#3b82f6" strokeWidth="1"/>

      {/* Grid lines */}
      <g stroke="#2563eb" strokeWidth="0.5" opacity="0.3">
        <line x1="20" y1="50" x2="380" y2="50"/>
        <line x1="20" y1="90" x2="380" y2="90"/>
        <line x1="20" y1="130" x2="380" y2="130"/>
        <line x1="100" y1="10" x2="100" y2="170"/>
        <line x1="180" y1="10" x2="180" y2="170"/>
        <line x1="260" y1="10" x2="260" y2="170"/>
        <line x1="340" y1="10" x2="340" y2="170"/>
      </g>

      {/* Room outline */}
      <rect x="40" y="30" width="200" height="120" fill="none" stroke="#60a5fa" strokeWidth="2"/>

      {/* Door */}
      <path d="M 120 150 L 120 130 A 20 20 0 0 1 140 150" fill="none" stroke="#60a5fa" strokeWidth="1.5"/>

      {/* Window */}
      <line x1="40" y1="70" x2="40" y2="100" stroke="#60a5fa" strokeWidth="4"/>

      {/* Receptacle symbols */}
      <g transform="translate(60, 140)">
        <circle cx="0" cy="0" r="6" fill="none" stroke="#22c55e" strokeWidth="1.5"/>
        <line x1="0" y1="0" x2="0" y2="-15" stroke="#22c55e" strokeWidth="1.5"/>
        <text x="0" y="15" textAnchor="middle" fill="#86efac" fontSize="6">Duplex</text>
      </g>

      <g transform="translate(200, 140)">
        <circle cx="0" cy="0" r="6" fill="none" stroke="#22c55e" strokeWidth="1.5"/>
        <line x1="0" y1="0" x2="0" y2="-15" stroke="#22c55e" strokeWidth="1.5"/>
        <text x="-3" y="3" fill="#22c55e" fontSize="6">G</text>
        <text x="0" y="15" textAnchor="middle" fill="#86efac" fontSize="6">GFCI</text>
      </g>

      {/* Switch symbols */}
      <g transform="translate(155, 145)">
        <text x="0" y="0" fill="#f59e0b" fontSize="8">S</text>
        <text x="0" y="12" textAnchor="middle" fill="#fcd34d" fontSize="6">Switch</text>
      </g>

      <g transform="translate(170, 145)">
        <text x="0" y="0" fill="#f59e0b" fontSize="8">S3</text>
        <text x="3" y="12" textAnchor="middle" fill="#fcd34d" fontSize="6">3-way</text>
      </g>

      {/* Light fixture symbols */}
      <g transform="translate(120, 80)">
        <circle cx="0" cy="0" r="10" fill="none" stroke="#fbbf24" strokeWidth="1.5"/>
        <line x1="-7" y1="-7" x2="7" y2="7" stroke="#fbbf24" strokeWidth="1.5"/>
        <line x1="-7" y1="7" x2="7" y2="-7" stroke="#fbbf24" strokeWidth="1.5"/>
        <text x="0" y="22" textAnchor="middle" fill="#fcd34d" fontSize="6">Ceiling Light</text>
      </g>

      {/* Wiring lines */}
      <line x1="155" y1="140" x2="120" y2="80" stroke="#9ca3af" strokeWidth="1" strokeDasharray="4"/>
      <line x1="170" y1="140" x2="120" y2="80" stroke="#9ca3af" strokeWidth="1" strokeDasharray="4"/>

      {/* Panel symbol */}
      <g transform="translate(270, 50)">
        <rect x="0" y="0" width="90" height="60" rx="2" fill="#1f2937" stroke="#a855f7" strokeWidth="2"/>
        <text x="45" y="20" textAnchor="middle" fill="#a855f7" fontSize="9" fontWeight="bold">PANEL 'A'</text>
        <line x1="10" y1="28" x2="80" y2="28" stroke="#6b7280" strokeWidth="0.5"/>
        <text x="15" y="40" fill="#9ca3af" fontSize="6">1 - KITCHEN</text>
        <text x="15" y="48" fill="#9ca3af" fontSize="6">2 - LIVING</text>
        <text x="15" y="56" fill="#9ca3af" fontSize="6">3 - BEDROOM</text>
        <text x="45" y="80" textAnchor="middle" fill="#c4b5fd" fontSize="7">Panel Schedule</text>
      </g>

      {/* Title block */}
      <g transform="translate(270, 130)">
        <rect x="0" y="0" width="90" height="35" fill="#0f172a" stroke="#3b82f6" strokeWidth="1"/>
        <text x="45" y="12" textAnchor="middle" fill="#60a5fa" fontSize="6">ELECTRICAL FLOOR PLAN</text>
        <text x="45" y="22" textAnchor="middle" fill="#9ca3af" fontSize="5">SCALE: 1/4" = 1'-0"</text>
        <text x="45" y="30" textAnchor="middle" fill="#9ca3af" fontSize="5">SHEET E-1</text>
      </g>
    </svg>
  );
}

function SymbolsReferenceDiagram() {
  return (
    <svg viewBox="0 0 380 280" className="w-full h-72" aria-label="Common electrical symbols reference">
      {/* Title */}
      <text x="190" y="18" textAnchor="middle" fill="#fff" fontSize="12" fontWeight="bold">Common Electrical Symbols</text>

      {/* Row 1: Receptacles */}
      <text x="20" y="45" fill="#22c55e" fontSize="10" fontWeight="bold">Receptacles</text>

      {/* Duplex Receptacle */}
      <g transform="translate(30, 55)">
        <circle cx="12" cy="12" r="8" fill="none" stroke="#22c55e" strokeWidth="1.5"/>
        <line x1="12" y1="12" x2="12" y2="-5" stroke="#22c55e" strokeWidth="1.5"/>
        <text x="35" y="16" fill="#9ca3af" fontSize="8">Duplex Receptacle</text>
      </g>

      {/* GFCI Receptacle */}
      <g transform="translate(140, 55)">
        <circle cx="12" cy="12" r="8" fill="none" stroke="#22c55e" strokeWidth="1.5"/>
        <line x1="12" y1="12" x2="12" y2="-5" stroke="#22c55e" strokeWidth="1.5"/>
        <text x="7" y="15" fill="#22c55e" fontSize="6">G</text>
        <text x="35" y="16" fill="#9ca3af" fontSize="8">GFCI Receptacle</text>
      </g>

      {/* 240V Receptacle */}
      <g transform="translate(260, 55)">
        <circle cx="12" cy="12" r="8" fill="none" stroke="#22c55e" strokeWidth="1.5"/>
        <line x1="12" y1="12" x2="12" y2="-5" stroke="#22c55e" strokeWidth="1.5"/>
        <text x="5" y="15" fill="#22c55e" fontSize="5">240</text>
        <text x="35" y="16" fill="#9ca3af" fontSize="8">240V Receptacle</text>
      </g>

      {/* Row 2: Switches */}
      <text x="20" y="100" fill="#f59e0b" fontSize="10" fontWeight="bold">Switches</text>

      {/* Single-pole switch */}
      <g transform="translate(30, 110)">
        <text x="12" y="12" textAnchor="middle" fill="#f59e0b" fontSize="12">S</text>
        <text x="35" y="16" fill="#9ca3af" fontSize="8">Single-pole Switch</text>
      </g>

      {/* 3-way switch */}
      <g transform="translate(140, 110)">
        <text x="12" y="12" textAnchor="middle" fill="#f59e0b" fontSize="12">S</text>
        <text x="20" y="16" fill="#f59e0b" fontSize="8">3</text>
        <text x="40" y="16" fill="#9ca3af" fontSize="8">3-Way Switch</text>
      </g>

      {/* Dimmer switch */}
      <g transform="translate(260, 110)">
        <text x="12" y="12" textAnchor="middle" fill="#f59e0b" fontSize="12">S</text>
        <text x="20" y="16" fill="#f59e0b" fontSize="8">D</text>
        <text x="40" y="16" fill="#9ca3af" fontSize="8">Dimmer Switch</text>
      </g>

      {/* Row 3: Lighting */}
      <text x="20" y="155" fill="#fbbf24" fontSize="10" fontWeight="bold">Lighting</text>

      {/* Ceiling light */}
      <g transform="translate(30, 165)">
        <circle cx="12" cy="12" r="8" fill="none" stroke="#fbbf24" strokeWidth="1.5"/>
        <line x1="6" y1="6" x2="18" y2="18" stroke="#fbbf24" strokeWidth="1.5"/>
        <line x1="6" y1="18" x2="18" y2="6" stroke="#fbbf24" strokeWidth="1.5"/>
        <text x="35" y="16" fill="#9ca3af" fontSize="8">Ceiling Light</text>
      </g>

      {/* Recessed light */}
      <g transform="translate(140, 165)">
        <circle cx="12" cy="12" r="8" fill="none" stroke="#fbbf24" strokeWidth="1.5"/>
        <circle cx="12" cy="12" r="4" fill="#fbbf24" fillOpacity="0.3"/>
        <text x="35" y="16" fill="#9ca3af" fontSize="8">Recessed Light</text>
      </g>

      {/* Fluorescent fixture */}
      <g transform="translate(260, 165)">
        <rect x="2" y="8" width="20" height="8" fill="none" stroke="#fbbf24" strokeWidth="1.5"/>
        <line x1="7" y1="12" x2="17" y2="12" stroke="#fbbf24" strokeWidth="1"/>
        <text x="35" y="16" fill="#9ca3af" fontSize="8">Fluorescent</text>
      </g>

      {/* Row 4: Other */}
      <text x="20" y="210" fill="#a855f7" fontSize="10" fontWeight="bold">Other</text>

      {/* Panel */}
      <g transform="translate(30, 220)">
        <rect x="2" y="2" width="20" height="16" rx="1" fill="none" stroke="#a855f7" strokeWidth="1.5"/>
        <line x1="2" y1="8" x2="22" y2="8" stroke="#a855f7" strokeWidth="0.5"/>
        <text x="35" y="14" fill="#9ca3af" fontSize="8">Panel/Load Center</text>
      </g>

      {/* Junction box */}
      <g transform="translate(140, 220)">
        <rect x="4" y="4" width="16" height="12" fill="none" stroke="#a855f7" strokeWidth="1.5"/>
        <text x="12" y="13" textAnchor="middle" fill="#a855f7" fontSize="6">J</text>
        <text x="35" y="14" fill="#9ca3af" fontSize="8">Junction Box</text>
      </g>

      {/* Motor */}
      <g transform="translate(260, 220)">
        <circle cx="12" cy="10" r="8" fill="none" stroke="#a855f7" strokeWidth="1.5"/>
        <text x="12" y="13" textAnchor="middle" fill="#a855f7" fontSize="8">M</text>
        <text x="35" y="14" fill="#9ca3af" fontSize="8">Motor</text>
      </g>

      {/* Row 5: Lines */}
      <text x="20" y="260" fill="#6b7280" fontSize="10" fontWeight="bold">Wiring</text>

      {/* Home run */}
      <g transform="translate(30, 265)">
        <line x1="0" y1="5" x2="20" y2="5" stroke="#9ca3af" strokeWidth="1.5"/>
        <line x1="15" y1="0" x2="20" y2="5" stroke="#9ca3af" strokeWidth="1.5"/>
        <line x1="15" y1="10" x2="20" y2="5" stroke="#9ca3af" strokeWidth="1.5"/>
        <text x="35" y="9" fill="#9ca3af" fontSize="8">Home Run (to panel)</text>
      </g>

      {/* Wiring concealed */}
      <g transform="translate(170, 265)">
        <line x1="0" y1="5" x2="25" y2="5" stroke="#9ca3af" strokeWidth="1.5" strokeDasharray="4"/>
        <text x="35" y="9" fill="#9ca3af" fontSize="8">Wiring Concealed</text>
      </g>
    </svg>
  );
}

function SingleLineDiagram() {
  return (
    <svg viewBox="0 0 380 200" className="w-full h-48" aria-label="Single-line diagram example">
      {/* Title */}
      <text x="190" y="18" textAnchor="middle" fill="#fff" fontSize="11" fontWeight="bold">Single-Line Diagram Example</text>

      {/* Utility */}
      <g transform="translate(30, 50)">
        <circle cx="20" cy="20" r="15" fill="none" stroke="#ef4444" strokeWidth="2"/>
        <text x="20" y="24" textAnchor="middle" fill="#ef4444" fontSize="10">U</text>
        <text x="20" y="50" textAnchor="middle" fill="#fca5a5" fontSize="7">Utility</text>
      </g>

      {/* Main line */}
      <line x1="65" y1="70" x2="95" y2="70" stroke="#9ca3af" strokeWidth="2"/>

      {/* Meter */}
      <g transform="translate(95, 55)">
        <rect x="0" y="0" width="30" height="30" rx="2" fill="none" stroke="#f59e0b" strokeWidth="1.5"/>
        <text x="15" y="20" textAnchor="middle" fill="#f59e0b" fontSize="10">kWh</text>
        <text x="15" y="45" textAnchor="middle" fill="#fcd34d" fontSize="7">Meter</text>
      </g>

      {/* Line to main breaker */}
      <line x1="125" y1="70" x2="155" y2="70" stroke="#9ca3af" strokeWidth="2"/>

      {/* Main breaker */}
      <g transform="translate(155, 55)">
        <rect x="0" y="0" width="25" height="30" rx="2" fill="none" stroke="#22c55e" strokeWidth="1.5"/>
        <line x1="5" y1="15" x2="20" y2="15" stroke="#22c55e" strokeWidth="2"/>
        <circle cx="12" cy="15" r="3" fill="#22c55e"/>
        <text x="12" y="45" textAnchor="middle" fill="#86efac" fontSize="7">200A</text>
        <text x="12" y="55" textAnchor="middle" fill="#86efac" fontSize="6">Main</text>
      </g>

      {/* Bus bar */}
      <line x1="180" y1="70" x2="350" y2="70" stroke="#9ca3af" strokeWidth="3"/>

      {/* Branch breakers */}
      <g transform="translate(200, 85)">
        <rect x="0" y="0" width="20" height="20" rx="2" fill="none" stroke="#3b82f6" strokeWidth="1.5"/>
        <line x1="5" y1="10" x2="15" y2="10" stroke="#3b82f6" strokeWidth="1.5"/>
        <circle cx="10" cy="10" r="2" fill="#3b82f6"/>
        <line x1="10" y1="0" x2="10" y2="-15" stroke="#9ca3af" strokeWidth="1.5"/>
        <text x="10" y="32" textAnchor="middle" fill="#93c5fd" fontSize="6">20A</text>
        <text x="10" y="42" textAnchor="middle" fill="#93c5fd" fontSize="5">Kitchen</text>
      </g>

      <g transform="translate(240, 85)">
        <rect x="0" y="0" width="20" height="20" rx="2" fill="none" stroke="#3b82f6" strokeWidth="1.5"/>
        <line x1="5" y1="10" x2="15" y2="10" stroke="#3b82f6" strokeWidth="1.5"/>
        <circle cx="10" cy="10" r="2" fill="#3b82f6"/>
        <line x1="10" y1="0" x2="10" y2="-15" stroke="#9ca3af" strokeWidth="1.5"/>
        <text x="10" y="32" textAnchor="middle" fill="#93c5fd" fontSize="6">15A</text>
        <text x="10" y="42" textAnchor="middle" fill="#93c5fd" fontSize="5">Lights</text>
      </g>

      <g transform="translate(280, 85)">
        <rect x="0" y="0" width="20" height="20" rx="2" fill="none" stroke="#3b82f6" strokeWidth="1.5"/>
        <line x1="5" y1="10" x2="15" y2="10" stroke="#3b82f6" strokeWidth="1.5"/>
        <circle cx="10" cy="10" r="2" fill="#3b82f6"/>
        <line x1="10" y1="0" x2="10" y2="-15" stroke="#9ca3af" strokeWidth="1.5"/>
        <text x="10" y="32" textAnchor="middle" fill="#93c5fd" fontSize="6">30A</text>
        <text x="10" y="42" textAnchor="middle" fill="#93c5fd" fontSize="5">Dryer</text>
      </g>

      <g transform="translate(320, 85)">
        <rect x="0" y="0" width="20" height="20" rx="2" fill="none" stroke="#3b82f6" strokeWidth="1.5"/>
        <line x1="5" y1="10" x2="15" y2="10" stroke="#3b82f6" strokeWidth="1.5"/>
        <circle cx="10" cy="10" r="2" fill="#3b82f6"/>
        <line x1="10" y1="0" x2="10" y2="-15" stroke="#9ca3af" strokeWidth="1.5"/>
        <text x="10" y="32" textAnchor="middle" fill="#93c5fd" fontSize="6">50A</text>
        <text x="10" y="42" textAnchor="middle" fill="#93c5fd" fontSize="5">Range</text>
      </g>

      {/* Legend */}
      <g transform="translate(30, 150)">
        <rect x="0" y="0" width="320" height="40" fill="#1f2937" stroke="#374151" strokeWidth="1" rx="4"/>
        <text x="10" y="15" fill="#9ca3af" fontSize="7">Single-line shows one line representing all phase conductors</text>
        <text x="10" y="28" fill="#9ca3af" fontSize="7">Breaker symbols show rating - circle indicates switching device</text>
      </g>
    </svg>
  );
}

function ThreeLineDiagram() {
  return (
    <svg viewBox="0 0 380 180" className="w-full h-44" aria-label="Three-line diagram example">
      {/* Title */}
      <text x="190" y="18" textAnchor="middle" fill="#fff" fontSize="11" fontWeight="bold">Three-Line (Three-Phase) Diagram</text>

      {/* Source */}
      <g transform="translate(30, 45)">
        <rect x="0" y="0" width="40" height="90" rx="2" fill="none" stroke="#a855f7" strokeWidth="2"/>
        <text x="20" y="25" textAnchor="middle" fill="#a855f7" fontSize="8">3-Phase</text>
        <text x="20" y="37" textAnchor="middle" fill="#a855f7" fontSize="8">Source</text>
        <circle cx="12" cy="55" r="4" fill="#ef4444"/>
        <text x="12" y="58" textAnchor="middle" fill="#fff" fontSize="5">A</text>
        <circle cx="20" cy="65" r="4" fill="#f59e0b"/>
        <text x="20" y="68" textAnchor="middle" fill="#fff" fontSize="5">B</text>
        <circle cx="28" cy="75" r="4" fill="#3b82f6"/>
        <text x="28" y="78" textAnchor="middle" fill="#fff" fontSize="5">C</text>
      </g>

      {/* Three phase lines */}
      <line x1="70" y1="60" x2="200" y2="60" stroke="#ef4444" strokeWidth="2"/>
      <line x1="70" y1="90" x2="200" y2="90" stroke="#f59e0b" strokeWidth="2"/>
      <line x1="70" y1="120" x2="200" y2="120" stroke="#3b82f6" strokeWidth="2"/>

      {/* Phase labels */}
      <text x="135" y="55" textAnchor="middle" fill="#ef4444" fontSize="8">Phase A</text>
      <text x="135" y="85" textAnchor="middle" fill="#f59e0b" fontSize="8">Phase B</text>
      <text x="135" y="115" textAnchor="middle" fill="#3b82f6" fontSize="8">Phase C</text>

      {/* Three-pole breaker */}
      <g transform="translate(200, 50)">
        <rect x="0" y="0" width="30" height="80" rx="2" fill="none" stroke="#22c55e" strokeWidth="1.5"/>
        {/* Phase A breaker */}
        <line x1="0" y1="10" x2="10" y2="10" stroke="#ef4444" strokeWidth="1.5"/>
        <circle cx="15" cy="10" r="3" fill="#22c55e"/>
        <line x1="20" y1="10" x2="30" y2="10" stroke="#ef4444" strokeWidth="1.5"/>
        {/* Phase B breaker */}
        <line x1="0" y1="40" x2="10" y2="40" stroke="#f59e0b" strokeWidth="1.5"/>
        <circle cx="15" cy="40" r="3" fill="#22c55e"/>
        <line x1="20" y1="40" x2="30" y2="40" stroke="#f59e0b" strokeWidth="1.5"/>
        {/* Phase C breaker */}
        <line x1="0" y1="70" x2="10" y2="70" stroke="#3b82f6" strokeWidth="1.5"/>
        <circle cx="15" cy="70" r="3" fill="#22c55e"/>
        <line x1="20" y1="70" x2="30" y2="70" stroke="#3b82f6" strokeWidth="1.5"/>
        {/* Mechanical tie */}
        <line x1="15" y1="10" x2="15" y2="70" stroke="#22c55e" strokeWidth="1" strokeDasharray="2"/>
        <text x="15" y="95" textAnchor="middle" fill="#86efac" fontSize="7">100A</text>
        <text x="15" y="105" textAnchor="middle" fill="#86efac" fontSize="6">3-Pole</text>
      </g>

      {/* Lines to motor */}
      <line x1="230" y1="60" x2="280" y2="60" stroke="#ef4444" strokeWidth="2"/>
      <line x1="230" y1="90" x2="280" y2="90" stroke="#f59e0b" strokeWidth="2"/>
      <line x1="230" y1="120" x2="280" y2="120" stroke="#3b82f6" strokeWidth="2"/>

      {/* Motor */}
      <g transform="translate(280, 55)">
        <circle cx="35" cy="35" r="30" fill="none" stroke="#a855f7" strokeWidth="2"/>
        <text x="35" y="40" textAnchor="middle" fill="#a855f7" fontSize="14">M</text>
        <text x="35" y="80" textAnchor="middle" fill="#c4b5fd" fontSize="7">3-Phase Motor</text>
        {/* Connection points */}
        <circle cx="5" cy="5" r="3" fill="#ef4444"/>
        <circle cx="5" cy="35" r="3" fill="#f59e0b"/>
        <circle cx="5" cy="65" r="3" fill="#3b82f6"/>
      </g>

      {/* Legend */}
      <text x="190" y="165" textAnchor="middle" fill="#9ca3af" fontSize="7">Three-line shows all conductors - used for detailed equipment connections</text>
    </svg>
  );
}

export default function ElectricalSymbolsPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navigation />
      <div className="pt-20">
        <BreadcrumbJsonLd
          items={[
            { name: "Home", url: "https://amporalabs.com" },
            { name: "Blog", url: "https://amporalabs.com/blog" },
            { name: "Electrical Symbols & Blueprint Reading", url: "https://amporalabs.com/blog/electrical-symbols-blueprint-reading" },
          ]}
        />
        <BlogPostingJsonLd
          headline="Electrical Symbols & Blueprint Reading: Complete Guide for Electricians"
          description="Learn to read electrical blueprints and drawings. Complete guide to electrical symbols, single-line diagrams, and three-line diagrams."
          datePublished="2025-02-05"
          dateModified="2025-02-05"
          url="https://amporalabs.com/blog/electrical-symbols-blueprint-reading"
          wordCount={2300}
          keywords={["electrical symbols", "blueprint reading", "single line diagram", "electrical drawings"]}
        />

        <article className="max-w-4xl mx-auto px-6 py-12">
          {/* Breadcrumb */}
          <nav className="text-sm text-white/60 mb-8">
            <Link href="/" className="hover:text-white">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/blog" className="hover:text-white">Blog</Link>
            <span className="mx-2">/</span>
            <span className="text-white">Electrical Symbols & Blueprint Reading</span>
          </nav>

          {/* Article Header */}
          <header className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <span className="px-3 py-1 bg-cyan-600/30 text-cyan-300 text-sm font-medium rounded-full">
                Technology
              </span>
              <span className="text-white/40 text-sm">10 min read</span>
              <span className="text-white/40 text-sm">February 5, 2025</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6 leading-tight">
              Electrical Symbols & Blueprint Reading: Complete Guide
            </h1>
            <p className="text-xl text-white/70">
              Master the language of electrical drawings. Learn to read floor plans, single-line diagrams, and identify every symbol you'll encounter on the job.
            </p>
          </header>

          <div className="mb-12 bg-gradient-to-br from-blue-900/20 to-purple-900/20 rounded-2xl p-6 border border-white/10">
            <HeroIllustration />
          </div>

          {/* Quick Reference CTA */}
          <div className="bg-cyan-900/30 border border-cyan-500/30 rounded-2xl p-6 mb-12">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div>
                <h3 className="font-display font-bold text-lg mb-1">Quick Symbol Reference</h3>
                <p className="text-white/70 text-sm">Access electrical symbols and NEC code on the job site with Ampora.</p>
              </div>
              <a
                href="https://apps.apple.com/us/app/ampora/id6753693522"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-cyan-600 text-white font-semibold rounded-full hover:bg-cyan-500 transition-colors whitespace-nowrap"
              >
                Download Free
              </a>
            </div>
          </div>

          {/* Table of Contents */}
          <div className="bg-white/5 rounded-2xl p-6 mb-12">
            <h2 className="font-display font-bold mb-4">In This Guide</h2>
            <ul className="space-y-2 text-white/70">
              <li><a href="#common-symbols" className="hover:text-cyan-400">→ Common Electrical Symbols</a></li>
              <li><a href="#floor-plans" className="hover:text-cyan-400">→ Reading Electrical Floor Plans</a></li>
              <li><a href="#single-line" className="hover:text-cyan-400">→ Single-Line Diagrams</a></li>
              <li><a href="#three-line" className="hover:text-cyan-400">→ Three-Line Diagrams</a></li>
              <li><a href="#panel-schedules" className="hover:text-cyan-400">→ Panel Schedules</a></li>
              <li><a href="#notation" className="hover:text-cyan-400">→ Common Notation & Abbreviations</a></li>
              <li><a href="#tips" className="hover:text-cyan-400">→ Blueprint Reading Tips</a></li>
            </ul>
          </div>

          {/* Article Content */}
          <div className="prose prose-invert prose-lg max-w-none">

            <section id="common-symbols" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Common Electrical Symbols</h2>
              <p className="text-white/80 mb-4">
                Electrical symbols are standardized graphics used on drawings to represent electrical devices, equipment, and wiring. While there are variations between firms, most symbols follow conventions established by ANSI, IEEE, and NEMA standards.
              </p>

              <div className="my-8">
                <SymbolsReferenceDiagram />
              </div>

              <h3 className="text-xl font-semibold mt-6 mb-3">Receptacle Symbols</h3>
              <div className="overflow-x-auto my-6">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-white/20">
                      <th className="text-left py-3 px-4 text-white/60">Symbol</th>
                      <th className="text-left py-3 px-4 text-white/60">Description</th>
                      <th className="text-left py-3 px-4 text-white/60">Notes</th>
                    </tr>
                  </thead>
                  <tbody className="text-white/80">
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-mono text-green-400">-O</td>
                      <td className="py-3 px-4">Duplex Receptacle</td>
                      <td className="py-3 px-4 text-white/60">Standard 120V outlet</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-mono text-green-400">-O (G)</td>
                      <td className="py-3 px-4">GFCI Receptacle</td>
                      <td className="py-3 px-4 text-white/60">"G" or "GFI" inside circle</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-mono text-green-400">-O (WP)</td>
                      <td className="py-3 px-4">Weatherproof Receptacle</td>
                      <td className="py-3 px-4 text-white/60">Outdoor use</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-mono text-green-400">-O (240)</td>
                      <td className="py-3 px-4">240V Receptacle</td>
                      <td className="py-3 px-4 text-white/60">May specify 30A, 50A, etc.</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-mono text-green-400">=O</td>
                      <td className="py-3 px-4">Quadplex Receptacle</td>
                      <td className="py-3 px-4 text-white/60">Four outlets</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-mono text-green-400">-O (IG)</td>
                      <td className="py-3 px-4">Isolated Ground Receptacle</td>
                      <td className="py-3 px-4 text-white/60">Orange face typically</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h3 className="text-xl font-semibold mt-6 mb-3">Switch Symbols</h3>
              <div className="overflow-x-auto my-6">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-white/20">
                      <th className="text-left py-3 px-4 text-white/60">Symbol</th>
                      <th className="text-left py-3 px-4 text-white/60">Description</th>
                      <th className="text-left py-3 px-4 text-white/60">Notes</th>
                    </tr>
                  </thead>
                  <tbody className="text-white/80">
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-mono text-amber-400">S</td>
                      <td className="py-3 px-4">Single-Pole Switch</td>
                      <td className="py-3 px-4 text-white/60">On/off from one location</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-mono text-amber-400">S3</td>
                      <td className="py-3 px-4">Three-Way Switch</td>
                      <td className="py-3 px-4 text-white/60">Control from two locations</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-mono text-amber-400">S4</td>
                      <td className="py-3 px-4">Four-Way Switch</td>
                      <td className="py-3 px-4 text-white/60">Three+ location control</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-mono text-amber-400">SD</td>
                      <td className="py-3 px-4">Dimmer Switch</td>
                      <td className="py-3 px-4 text-white/60">Variable light level</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-mono text-amber-400">SP</td>
                      <td className="py-3 px-4">Switch with Pilot Light</td>
                      <td className="py-3 px-4 text-white/60">Indicates when load is on</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-mono text-amber-400">SWP</td>
                      <td className="py-3 px-4">Weatherproof Switch</td>
                      <td className="py-3 px-4 text-white/60">Exterior use</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h3 className="text-xl font-semibold mt-6 mb-3">Lighting Symbols</h3>
              <div className="grid md:grid-cols-2 gap-4 my-6">
                <div className="bg-white/5 rounded-xl p-4">
                  <h4 className="font-semibold text-yellow-400 mb-3">Ceiling Fixtures</h4>
                  <ul className="text-white/70 space-y-2 text-sm">
                    <li><span className="text-yellow-400">(X)</span> - Surface-mounted ceiling light</li>
                    <li><span className="text-yellow-400">(R)</span> - Recessed can light</li>
                    <li><span className="text-yellow-400">[====]</span> - Fluorescent fixture</li>
                    <li><span className="text-yellow-400">(X) + blade</span> - Ceiling fan with light</li>
                  </ul>
                </div>
                <div className="bg-white/5 rounded-xl p-4">
                  <h4 className="font-semibold text-yellow-400 mb-3">Wall Fixtures</h4>
                  <ul className="text-white/70 space-y-2 text-sm">
                    <li><span className="text-yellow-400">-O-</span> - Wall sconce</li>
                    <li><span className="text-yellow-400">-[===]-</span> - Wall-mounted strip</li>
                    <li><span className="text-yellow-400">(E)</span> - Emergency light</li>
                    <li><span className="text-yellow-400">(EXIT)</span> - Exit sign</li>
                  </ul>
                </div>
              </div>
            </section>

            <section id="floor-plans" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Reading Electrical Floor Plans</h2>
              <p className="text-white/80 mb-4">
                Electrical floor plans show the location of all electrical devices within a building. They're typically drawn to scale and include walls, doors, and windows for reference.
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-3">Key Elements of Floor Plans</h3>
              <div className="bg-white/5 rounded-xl p-6 my-6">
                <ul className="text-white/80 space-y-3">
                  <li><strong>Device locations:</strong> Symbols show receptacles, switches, and fixtures</li>
                  <li><strong>Wiring paths:</strong> Lines connect switches to their controlled fixtures</li>
                  <li><strong>Home runs:</strong> Arrow lines indicate circuits running to panel</li>
                  <li><strong>Circuit numbers:</strong> Numbers near home runs identify panel circuits</li>
                  <li><strong>Notes and callouts:</strong> Special instructions or specifications</li>
                  <li><strong>Legend:</strong> Symbol key specific to that drawing set</li>
                </ul>
              </div>

              <h3 className="text-xl font-semibold mt-6 mb-3">Switch-to-Fixture Lines</h3>
              <p className="text-white/80 mb-4">
                Curved dashed lines on floor plans connect switches to the fixtures they control. This helps electricians understand the switching relationships without detailed wiring diagrams.
              </p>
              <ul className="list-disc list-inside text-white/70 space-y-2 mb-4">
                <li><strong>Single line:</strong> Single-pole switch control</li>
                <li><strong>Lines to same fixture from 2 switches:</strong> Three-way switch setup</li>
                <li><strong>Tick marks on lines:</strong> May indicate number of conductors</li>
              </ul>

              <div className="bg-purple-900/30 border border-purple-500/30 rounded-xl p-6 my-6">
                <h4 className="font-semibold text-purple-400 mb-2">Home Run Symbol</h4>
                <p className="text-white/70">
                  The home run symbol (line with arrowhead) indicates where a circuit originates from the panel. It typically includes a circuit number (like "1,3" for circuits 1 and 3) and sometimes wire size or special notes.
                </p>
              </div>
            </section>

            <section id="single-line" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Single-Line Diagrams</h2>
              <p className="text-white/80 mb-4">
                Single-line diagrams (also called one-line diagrams) show the flow of power through an electrical system using one line to represent all conductors of a circuit. They're used to show the overall power distribution system.
              </p>

              <div className="my-8">
                <SingleLineDiagram />
              </div>

              <h3 className="text-xl font-semibold mt-6 mb-3">Single-Line Diagram Elements</h3>
              <div className="grid md:grid-cols-2 gap-4 my-6">
                <div className="bg-white/5 rounded-xl p-4">
                  <h4 className="font-semibold text-purple-400 mb-2">Power Sources</h4>
                  <ul className="text-white/70 text-sm space-y-1">
                    <li>• Utility connection</li>
                    <li>• Generators</li>
                    <li>• Transformers</li>
                    <li>• UPS systems</li>
                  </ul>
                </div>
                <div className="bg-white/5 rounded-xl p-4">
                  <h4 className="font-semibold text-green-400 mb-2">Protective Devices</h4>
                  <ul className="text-white/70 text-sm space-y-1">
                    <li>• Circuit breakers</li>
                    <li>• Fuses</li>
                    <li>• Disconnect switches</li>
                    <li>• Transfer switches</li>
                  </ul>
                </div>
                <div className="bg-white/5 rounded-xl p-4">
                  <h4 className="font-semibold text-blue-400 mb-2">Distribution</h4>
                  <ul className="text-white/70 text-sm space-y-1">
                    <li>• Switchboards</li>
                    <li>• Panelboards</li>
                    <li>• Motor control centers</li>
                    <li>• Bus ducts</li>
                  </ul>
                </div>
                <div className="bg-white/5 rounded-xl p-4">
                  <h4 className="font-semibold text-amber-400 mb-2">Loads</h4>
                  <ul className="text-white/70 text-sm space-y-1">
                    <li>• Motors</li>
                    <li>• Panels</li>
                    <li>• HVAC equipment</li>
                    <li>• Special equipment</li>
                  </ul>
                </div>
              </div>

              <div className="bg-cyan-900/30 border border-cyan-500/30 rounded-xl p-6 my-6">
                <h4 className="font-semibold text-cyan-400 mb-2">Why Use Single-Line Diagrams?</h4>
                <p className="text-white/70">
                  Single-line diagrams provide a clear overview of the electrical system without the complexity of showing every wire. They're essential for understanding power flow, performing arc flash studies, and coordinating protective devices.
                </p>
              </div>
            </section>

            <section id="three-line" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Three-Line Diagrams</h2>
              <p className="text-white/80 mb-4">
                Three-line diagrams show all conductors in a three-phase system, including the connections between phases. They're used when detailed phase-to-phase connections must be shown, such as motor connections or transformer windings.
              </p>

              <div className="my-8">
                <ThreeLineDiagram />
              </div>

              <h3 className="text-xl font-semibold mt-6 mb-3">When to Use Three-Line Diagrams</h3>
              <ul className="list-disc list-inside text-white/70 space-y-2 mb-4">
                <li><strong>Motor connections:</strong> Showing delta vs. wye configurations</li>
                <li><strong>Transformer windings:</strong> Primary and secondary connections</li>
                <li><strong>Metering installations:</strong> CT and PT connections</li>
                <li><strong>Phase sequence:</strong> When phase rotation matters</li>
                <li><strong>Control circuits:</strong> Detailed relay and contactor wiring</li>
              </ul>

              <div className="bg-white/5 rounded-xl p-6 my-6">
                <h4 className="font-semibold mb-3">Phase Color Coding</h4>
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="w-8 h-8 rounded-full bg-red-500 mx-auto mb-2"></div>
                    <p className="text-white/70 text-sm">Phase A</p>
                    <p className="text-red-400 text-xs">(Black in US)</p>
                  </div>
                  <div>
                    <div className="w-8 h-8 rounded-full bg-orange-500 mx-auto mb-2"></div>
                    <p className="text-white/70 text-sm">Phase B</p>
                    <p className="text-orange-400 text-xs">(Red in US)</p>
                  </div>
                  <div>
                    <div className="w-8 h-8 rounded-full bg-blue-500 mx-auto mb-2"></div>
                    <p className="text-white/70 text-sm">Phase C</p>
                    <p className="text-blue-400 text-xs">(Blue in US)</p>
                  </div>
                </div>
              </div>
            </section>

            <section id="panel-schedules" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Panel Schedules</h2>
              <p className="text-white/80 mb-4">
                Panel schedules are tables that document what each circuit breaker in a panelboard supplies. They're essential for understanding the electrical system and for maintenance.
              </p>

              <div className="overflow-x-auto my-6">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-white/20">
                      <th className="text-left py-3 px-4 text-white/60">CKT</th>
                      <th className="text-left py-3 px-4 text-white/60">Description</th>
                      <th className="text-left py-3 px-4 text-white/60">VA</th>
                      <th className="text-left py-3 px-4 text-white/60">A</th>
                      <th className="text-left py-3 px-4 text-white/60">B</th>
                      <th className="text-left py-3 px-4 text-white/60">BKR</th>
                    </tr>
                  </thead>
                  <tbody className="text-white/80">
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">1</td>
                      <td className="py-3 px-4">Kitchen Receptacles</td>
                      <td className="py-3 px-4">1800</td>
                      <td className="py-3 px-4 text-center">X</td>
                      <td className="py-3 px-4"></td>
                      <td className="py-3 px-4">20A</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">2</td>
                      <td className="py-3 px-4">Living Room</td>
                      <td className="py-3 px-4">1500</td>
                      <td className="py-3 px-4"></td>
                      <td className="py-3 px-4 text-center">X</td>
                      <td className="py-3 px-4">15A</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">3,5</td>
                      <td className="py-3 px-4">Dryer (240V)</td>
                      <td className="py-3 px-4">5400</td>
                      <td className="py-3 px-4 text-center">X</td>
                      <td className="py-3 px-4 text-center">X</td>
                      <td className="py-3 px-4">30A/2P</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4">4</td>
                      <td className="py-3 px-4">Bathroom GFCI</td>
                      <td className="py-3 px-4">1800</td>
                      <td className="py-3 px-4"></td>
                      <td className="py-3 px-4 text-center">X</td>
                      <td className="py-3 px-4">20A</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h3 className="text-xl font-semibold mt-6 mb-3">Panel Schedule Information</h3>
              <ul className="list-disc list-inside text-white/70 space-y-2 mb-4">
                <li><strong>Circuit number:</strong> Matches breaker position in panel</li>
                <li><strong>Description:</strong> What the circuit supplies</li>
                <li><strong>VA or Watts:</strong> Connected or calculated load</li>
                <li><strong>Phase:</strong> Which phase(s) the circuit uses</li>
                <li><strong>Breaker size:</strong> Amperage rating, poles (1P, 2P, 3P)</li>
              </ul>
            </section>

            <section id="notation" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Common Notation & Abbreviations</h2>
              <p className="text-white/80 mb-4">
                Understanding common abbreviations speeds up blueprint reading and prevents confusion.
              </p>

              <div className="grid md:grid-cols-2 gap-6 my-6">
                <div className="bg-white/5 rounded-xl p-6">
                  <h4 className="font-semibold text-green-400 mb-3">Equipment & Devices</h4>
                  <ul className="text-white/70 space-y-1 text-sm">
                    <li><strong>CB</strong> - Circuit Breaker</li>
                    <li><strong>GFI/GFCI</strong> - Ground Fault Circuit Interrupter</li>
                    <li><strong>AFCI</strong> - Arc Fault Circuit Interrupter</li>
                    <li><strong>WP</strong> - Weatherproof</li>
                    <li><strong>IG</strong> - Isolated Ground</li>
                    <li><strong>ATS</strong> - Automatic Transfer Switch</li>
                    <li><strong>MCC</strong> - Motor Control Center</li>
                    <li><strong>VFD</strong> - Variable Frequency Drive</li>
                  </ul>
                </div>
                <div className="bg-white/5 rounded-xl p-6">
                  <h4 className="font-semibold text-blue-400 mb-3">Wiring & Conduit</h4>
                  <ul className="text-white/70 space-y-1 text-sm">
                    <li><strong>EMT</strong> - Electrical Metallic Tubing</li>
                    <li><strong>RMC</strong> - Rigid Metal Conduit</li>
                    <li><strong>PVC</strong> - Polyvinyl Chloride</li>
                    <li><strong>MC</strong> - Metal Clad Cable</li>
                    <li><strong>NM</strong> - Non-Metallic Cable</li>
                    <li><strong>THHN</strong> - Thermoplastic High Heat Nylon</li>
                    <li><strong>EGC</strong> - Equipment Grounding Conductor</li>
                    <li><strong>GEC</strong> - Grounding Electrode Conductor</li>
                  </ul>
                </div>
                <div className="bg-white/5 rounded-xl p-6">
                  <h4 className="font-semibold text-amber-400 mb-3">Location & Mounting</h4>
                  <ul className="text-white/70 space-y-1 text-sm">
                    <li><strong>AFF</strong> - Above Finished Floor</li>
                    <li><strong>ATC</strong> - Above Tile Ceiling</li>
                    <li><strong>CLG</strong> - Ceiling</li>
                    <li><strong>NIC</strong> - Not In Contract</li>
                    <li><strong>TYP</strong> - Typical</li>
                    <li><strong>SIM</strong> - Similar</li>
                    <li><strong>E.O.</strong> - Each Occurrence</li>
                    <li><strong>N.T.S.</strong> - Not To Scale</li>
                  </ul>
                </div>
                <div className="bg-white/5 rounded-xl p-6">
                  <h4 className="font-semibold text-purple-400 mb-3">Electrical Terms</h4>
                  <ul className="text-white/70 space-y-1 text-sm">
                    <li><strong>HP</strong> - Horsepower</li>
                    <li><strong>KVA</strong> - Kilovolt-Amperes</li>
                    <li><strong>KW</strong> - Kilowatts</li>
                    <li><strong>PF</strong> - Power Factor</li>
                    <li><strong>FLA</strong> - Full Load Amps</li>
                    <li><strong>LRA</strong> - Locked Rotor Amps</li>
                    <li><strong>MCA</strong> - Minimum Circuit Ampacity</li>
                    <li><strong>MOP</strong> - Maximum Overcurrent Protection</li>
                  </ul>
                </div>
              </div>
            </section>

            <section id="tips" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Blueprint Reading Tips</h2>

              <div className="space-y-4 my-6">
                <div className="bg-green-900/30 border border-green-500/30 rounded-xl p-6">
                  <h4 className="font-semibold text-green-400 mb-2">1. Start with the Legend</h4>
                  <p className="text-white/70">
                    Every drawing set should have a legend or symbol list. Review it first, as symbols can vary between firms and projects.
                  </p>
                </div>
                <div className="bg-green-900/30 border border-green-500/30 rounded-xl p-6">
                  <h4 className="font-semibold text-green-400 mb-2">2. Read the Notes</h4>
                  <p className="text-white/70">
                    General notes and specifications often contain critical information not shown in the drawings themselves, like mounting heights or special requirements.
                  </p>
                </div>
                <div className="bg-green-900/30 border border-green-500/30 rounded-xl p-6">
                  <h4 className="font-semibold text-green-400 mb-2">3. Cross-Reference Sheets</h4>
                  <p className="text-white/70">
                    Electrical drawings work together—floor plans, panel schedules, single-lines, and details all tell part of the story. Look at multiple sheets for complete understanding.
                  </p>
                </div>
                <div className="bg-green-900/30 border border-green-500/30 rounded-xl p-6">
                  <h4 className="font-semibold text-green-400 mb-2">4. Check Revisions</h4>
                  <p className="text-white/70">
                    Look for revision clouds and check the revision block. Always work from the most current drawing set, as changes are common during construction.
                  </p>
                </div>
                <div className="bg-green-900/30 border border-green-500/30 rounded-xl p-6">
                  <h4 className="font-semibold text-green-400 mb-2">5. Ask Questions Early</h4>
                  <p className="text-white/70">
                    If something is unclear, ask the engineer or architect before installation. RFIs (Requests for Information) prevent costly mistakes.
                  </p>
                </div>
              </div>
            </section>

            {/* CTA Section */}
            <section className="bg-gradient-to-r from-cyan-900/30 to-purple-900/30 rounded-2xl p-8 my-12">
              <h2 className="text-2xl font-display font-bold mb-4 text-center">
                NEC Code Reference On the Go
              </h2>
              <p className="text-white/70 mb-6 text-center">
                When you need to verify code requirements while reading blueprints, Ampora puts NEC references at your fingertips. Plus calculators for box fill, conduit fill, and more.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <a
                  href="https://apps.apple.com/us/app/ampora/id6753693522"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-white text-black font-semibold rounded-full hover:bg-white/90 transition-colors text-center"
                >
                  Download Free on App Store
                </a>
              </div>
            </section>

            {/* Related Articles */}
            <section className="mt-12">
              <h2 className="text-2xl font-display font-bold mb-6">Related Articles</h2>
              <div className="grid md:grid-cols-2 gap-4">
                <Link href="/blog/box-fill-calculations-nec-314" className="bg-white/5 hover:bg-white/10 rounded-xl p-6 transition-colors">
                  <span className="text-amber-400 text-sm">Calculations</span>
                  <h3 className="font-semibold mt-2">Box Fill Calculations: NEC 314 Guide</h3>
                </Link>
                <Link href="/blog/conduit-fill-calculation-guide" className="bg-white/5 hover:bg-white/10 rounded-xl p-6 transition-colors">
                  <span className="text-amber-400 text-sm">Calculations</span>
                  <h3 className="font-semibold mt-2">Conduit Fill Calculation Guide</h3>
                </Link>
                <Link href="/blog/3-phase-power-calculations" className="bg-white/5 hover:bg-white/10 rounded-xl p-6 transition-colors">
                  <span className="text-amber-400 text-sm">Calculations</span>
                  <h3 className="font-semibold mt-2">3-Phase Power Calculations</h3>
                </Link>
                <Link href="/blog/nec-article-210-branch-circuits-guide" className="bg-white/5 hover:bg-white/10 rounded-xl p-6 transition-colors">
                  <span className="text-purple-400 text-sm">NEC Code</span>
                  <h3 className="font-semibold mt-2">NEC Article 210: Branch Circuits</h3>
                </Link>
              </div>
            </section>

          </div>
        </article>
      </div>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-white/10">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <Link href="/" className="text-xl font-display font-bold">Ampora</Link>
          <nav className="flex flex-wrap justify-center gap-6 text-sm text-white/60">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <Link href="/calculators" className="hover:text-white transition-colors">Calculators</Link>
            <Link href="/features/nec-code-reference" className="hover:text-white transition-colors">NEC Code</Link>
            <Link href="/blog" className="hover:text-white transition-colors">Blog</Link>
          </nav>
          <p className="text-sm text-white/40">© 2025 Ampora Labs</p>
        </div>
      </footer>
    </main>
  );
}
