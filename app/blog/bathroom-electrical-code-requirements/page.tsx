import { Metadata } from "next";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import { BreadcrumbJsonLd, BlogPostingJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Bathroom Electrical Code Requirements: NEC GFCI, Circuit & Receptacle Rules",
  description: "Complete guide to NEC bathroom electrical requirements including GFCI protection, dedicated circuits, exhaust fan requirements, receptacle placement rules, and lighting circuit sizing for residential and commercial bathrooms.",
  keywords: [
    "bathroom electrical code",
    "bathroom GFCI requirements",
    "NEC bathroom circuits",
    "bathroom receptacle placement",
    "bathroom exhaust fan circuit",
    "bathroom lighting requirements",
    "NEC 210.11",
    "bathroom electrical code 2023",
    "GFCI bathroom requirements",
    "bathroom outlet requirements",
    "bathroom electrical inspection",
    "bathroom circuit sizing",
    "bathroom 20 amp circuit",
    "basin receptacle requirements",
    "wet location bathroom"
  ],
  alternates: {
    canonical: "https://amporalabs.com/blog/bathroom-electrical-code-requirements",
  },
  openGraph: {
    title: "Bathroom Electrical Code Requirements: NEC Guide - Ampora",
    description: "Complete NEC bathroom electrical requirements including GFCI, circuits, receptacle placement, and exhaust fan rules.",
    url: "https://amporalabs.com/blog/bathroom-electrical-code-requirements",
    type: "article",
  },
};

function HeroIllustration() {
  return (
    <svg viewBox="0 0 400 180" className="w-full h-44 md:h-52" aria-label="Bathroom electrical layout illustration">
      {/* Bathroom outline */}
      <rect x="30" y="20" width="340" height="140" rx="4" fill="none" stroke="#374151" strokeWidth="2"/>

      {/* Vanity/sink area */}
      <rect x="50" y="30" width="100" height="50" rx="4" fill="#1f2937" stroke="#6b7280" strokeWidth="1.5"/>
      <ellipse cx="100" cy="55" rx="25" ry="15" fill="#374151" stroke="#9ca3af" strokeWidth="1"/>
      <text x="100" y="90" textAnchor="middle" fill="#9ca3af" fontSize="8">Vanity</text>

      {/* GFCI Receptacle near sink */}
      <g transform="translate(170, 35)">
        <rect x="0" y="0" width="30" height="40" rx="3" fill="#f5f5f4" stroke="#22c55e" strokeWidth="2"/>
        <rect x="8" y="8" width="14" height="8" rx="1" fill="#1f2937"/>
        <rect x="6" y="20" width="8" height="6" rx="1" fill="#ef4444"/>
        <rect x="16" y="20" width="8" height="6" rx="1" fill="#1f2937"/>
        <text x="15" y="35" textAnchor="middle" fill="#22c55e" fontSize="5" fontWeight="bold">GFCI</text>
      </g>
      <text x="185" y="90" textAnchor="middle" fill="#22c55e" fontSize="7">Required GFCI</text>

      {/* Exhaust fan */}
      <g transform="translate(260, 30)">
        <rect x="0" y="0" width="50" height="50" rx="4" fill="#1f2937" stroke="#3b82f6" strokeWidth="1.5"/>
        <circle cx="25" cy="25" r="18" fill="none" stroke="#3b82f6" strokeWidth="1.5"/>
        <path d="M25 15 L25 35 M15 25 L35 25" stroke="#3b82f6" strokeWidth="1.5"/>
        <circle cx="25" cy="25" r="5" fill="#3b82f6" fillOpacity="0.3"/>
      </g>
      <text x="285" y="90" textAnchor="middle" fill="#3b82f6" fontSize="7">Exhaust Fan</text>

      {/* Shower/tub area */}
      <rect x="50" y="100" width="80" height="50" rx="4" fill="#0ea5e9" fillOpacity="0.1" stroke="#0ea5e9" strokeWidth="1.5"/>
      <text x="90" y="130" textAnchor="middle" fill="#0ea5e9" fontSize="8">Shower/Tub</text>
      <text x="90" y="142" textAnchor="middle" fill="#ef4444" fontSize="6">No receptacles</text>

      {/* Light fixture */}
      <g transform="translate(155, 110)">
        <rect x="0" y="0" width="60" height="30" rx="15" fill="#fbbf24" fillOpacity="0.2" stroke="#fbbf24" strokeWidth="1.5"/>
        <circle cx="15" cy="15" r="8" fill="#fbbf24" fillOpacity="0.4"/>
        <circle cx="30" cy="15" r="8" fill="#fbbf24" fillOpacity="0.4"/>
        <circle cx="45" cy="15" r="8" fill="#fbbf24" fillOpacity="0.4"/>
      </g>
      <text x="185" y="155" textAnchor="middle" fill="#fbbf24" fontSize="7">Vanity Light</text>

      {/* Panel connection indicator */}
      <g transform="translate(280, 110)">
        <rect x="0" y="0" width="70" height="40" rx="4" fill="#1f2937" stroke="#a855f7" strokeWidth="1.5"/>
        <text x="35" y="18" textAnchor="middle" fill="#a855f7" fontSize="7" fontWeight="bold">20A Circuit</text>
        <text x="35" y="32" textAnchor="middle" fill="#c4b5fd" fontSize="6">Dedicated</text>
      </g>

      {/* Distance marker */}
      <line x1="150" y1="55" x2="168" y2="55" stroke="#22c55e" strokeWidth="1" strokeDasharray="2"/>
      <text x="159" y="52" textAnchor="middle" fill="#22c55e" fontSize="5">3ft max</text>
    </svg>
  );
}

function CircuitDiagram() {
  return (
    <svg viewBox="0 0 380 140" className="w-full h-36" aria-label="Bathroom circuit layout diagram">
      {/* Panel */}
      <rect x="20" y="30" width="60" height="80" rx="4" fill="#1f2937" stroke="#a855f7" strokeWidth="2"/>
      <text x="50" y="55" textAnchor="middle" fill="#a855f7" fontSize="9" fontWeight="bold">Panel</text>
      <rect x="30" y="65" width="15" height="10" rx="1" fill="#22c55e"/>
      <text x="37" y="73" textAnchor="middle" fill="#fff" fontSize="5">20A</text>
      <rect x="55" y="65" width="15" height="10" rx="1" fill="#3b82f6"/>
      <text x="62" y="73" textAnchor="middle" fill="#fff" fontSize="5">15A</text>
      <rect x="30" y="80" width="15" height="10" rx="1" fill="#f59e0b"/>
      <text x="37" y="88" textAnchor="middle" fill="#fff" fontSize="5">20A</text>

      {/* Circuit lines */}
      <line x1="80" y1="70" x2="120" y2="70" stroke="#22c55e" strokeWidth="3"/>
      <line x1="80" y1="75" x2="100" y2="75" stroke="#3b82f6" strokeWidth="2"/>
      <line x1="100" y1="75" x2="100" y2="50" stroke="#3b82f6" strokeWidth="2"/>
      <line x1="100" y1="50" x2="180" y2="50" stroke="#3b82f6" strokeWidth="2"/>
      <line x1="80" y1="85" x2="110" y2="85" stroke="#f59e0b" strokeWidth="2"/>
      <line x1="110" y1="85" x2="110" y2="110" stroke="#f59e0b" strokeWidth="2"/>
      <line x1="110" y1="110" x2="180" y2="110" stroke="#f59e0b" strokeWidth="2"/>

      {/* GFCI Receptacle */}
      <g transform="translate(120, 55)">
        <rect x="0" y="0" width="40" height="30" rx="3" fill="#f5f5f4" stroke="#22c55e" strokeWidth="2"/>
        <text x="20" y="20" textAnchor="middle" fill="#22c55e" fontSize="7" fontWeight="bold">GFCI</text>
      </g>
      <text x="140" y="100" textAnchor="middle" fill="#22c55e" fontSize="7">Receptacle Circuit</text>

      {/* Downstream receptacles */}
      <line x1="160" y1="70" x2="200" y2="70" stroke="#22c55e" strokeWidth="2"/>
      <rect x="200" y="60" width="25" height="20" rx="2" fill="#f5f5f4" stroke="#9ca3af" strokeWidth="1"/>
      <text x="212" y="73" textAnchor="middle" fill="#6b7280" fontSize="6">Load</text>

      {/* Exhaust fan */}
      <g transform="translate(180, 35)">
        <rect x="0" y="0" width="40" height="30" rx="3" fill="#1f2937" stroke="#3b82f6" strokeWidth="2"/>
        <circle cx="20" cy="15" r="8" fill="none" stroke="#3b82f6" strokeWidth="1"/>
        <text x="20" y="18" textAnchor="middle" fill="#3b82f6" fontSize="6">Fan</text>
      </g>
      <text x="200" y="78" textAnchor="middle" fill="#3b82f6" fontSize="6">Exhaust</text>

      {/* Light fixture */}
      <g transform="translate(180, 95)">
        <rect x="0" y="0" width="40" height="30" rx="3" fill="#fbbf24" fillOpacity="0.2" stroke="#fbbf24" strokeWidth="2"/>
        <circle cx="20" cy="15" r="8" fill="#fbbf24" fillOpacity="0.5"/>
      </g>
      <text x="200" y="138" textAnchor="middle" fill="#fbbf24" fontSize="6">Lighting</text>

      {/* Labels */}
      <rect x="260" y="30" width="110" height="90" rx="4" fill="#1f2937" stroke="#374151" strokeWidth="1"/>
      <text x="315" y="50" textAnchor="middle" fill="#22c55e" fontSize="8">20A - Receptacles</text>
      <text x="315" y="65" textAnchor="middle" fill="#9ca3af" fontSize="6">(Dedicated or shared)</text>
      <text x="315" y="82" textAnchor="middle" fill="#3b82f6" fontSize="8">15/20A - Fan</text>
      <text x="315" y="97" textAnchor="middle" fill="#fbbf24" fontSize="8">15/20A - Lighting</text>
      <text x="315" y="112" textAnchor="middle" fill="#9ca3af" fontSize="6">(Can share with fan)</text>
    </svg>
  );
}

function GFCIZoneDiagram() {
  return (
    <svg viewBox="0 0 380 160" className="w-full h-40" aria-label="GFCI protection zones in bathroom">
      {/* Bathroom floor plan */}
      <rect x="40" y="20" width="300" height="120" rx="4" fill="none" stroke="#374151" strokeWidth="2"/>

      {/* Tub/Shower zone - no receptacles */}
      <rect x="50" y="30" width="80" height="100" rx="4" fill="#ef4444" fillOpacity="0.15" stroke="#ef4444" strokeWidth="1.5" strokeDasharray="4"/>
      <text x="90" y="75" textAnchor="middle" fill="#ef4444" fontSize="8" fontWeight="bold">Zone 0</text>
      <text x="90" y="88" textAnchor="middle" fill="#fca5a5" fontSize="6">No receptacles</text>
      <text x="90" y="100" textAnchor="middle" fill="#fca5a5" fontSize="6">in tub/shower</text>

      {/* 3-foot zone from sink */}
      <ellipse cx="200" cy="50" rx="60" ry="40" fill="#22c55e" fillOpacity="0.1" stroke="#22c55e" strokeWidth="1.5" strokeDasharray="4"/>

      {/* Sink */}
      <ellipse cx="200" cy="50" rx="25" ry="15" fill="#374151" stroke="#9ca3af" strokeWidth="1.5"/>
      <text x="200" y="54" textAnchor="middle" fill="#9ca3af" fontSize="7">Sink</text>

      {/* GFCI receptacle within 3ft */}
      <g transform="translate(240, 55)">
        <rect x="0" y="0" width="20" height="25" rx="2" fill="#f5f5f4" stroke="#22c55e" strokeWidth="2"/>
        <circle cx="10" cy="8" r="3" fill="#22c55e"/>
        <rect x="6" y="14" width="8" height="6" rx="1" fill="#ef4444"/>
      </g>

      {/* Distance markers */}
      <line x1="225" y1="50" x2="238" y2="60" stroke="#22c55e" strokeWidth="1"/>
      <text x="270" y="95" textAnchor="middle" fill="#22c55e" fontSize="7">Within 3ft of basin</text>
      <text x="270" y="107" textAnchor="middle" fill="#86efac" fontSize="6">GFCI required</text>

      {/* Additional zone */}
      <rect x="280" y="80" width="50" height="50" rx="4" fill="#3b82f6" fillOpacity="0.1" stroke="#3b82f6" strokeWidth="1" strokeDasharray="4"/>
      <text x="305" y="100" textAnchor="middle" fill="#3b82f6" fontSize="6">All other</text>
      <text x="305" y="112" textAnchor="middle" fill="#3b82f6" fontSize="6">receptacles</text>
      <text x="305" y="124" textAnchor="middle" fill="#93c5fd" fontSize="5">GFCI protected</text>

      {/* Legend */}
      <g transform="translate(50, 135)">
        <rect x="0" y="0" width="10" height="10" fill="#ef4444" fillOpacity="0.3"/>
        <text x="15" y="8" fill="#9ca3af" fontSize="6">Prohibited zone</text>
        <rect x="90" y="0" width="10" height="10" fill="#22c55e" fillOpacity="0.3"/>
        <text x="105" y="8" fill="#9ca3af" fontSize="6">Required GFCI</text>
        <rect x="180" y="0" width="10" height="10" fill="#3b82f6" fillOpacity="0.3"/>
        <text x="195" y="8" fill="#9ca3af" fontSize="6">All bathroom outlets</text>
      </g>
    </svg>
  );
}

export default function BathroomElectricalCodePage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navigation />
      <div className="pt-20">
        <BreadcrumbJsonLd
          items={[
            { name: "Home", url: "https://amporalabs.com" },
            { name: "Blog", url: "https://amporalabs.com/blog" },
            { name: "Bathroom Electrical Code", url: "https://amporalabs.com/blog/bathroom-electrical-code-requirements" },
          ]}
        />
        <BlogPostingJsonLd
          headline="Bathroom Electrical Code Requirements: NEC GFCI, Circuit & Receptacle Rules"
          description="Complete guide to NEC bathroom electrical requirements including GFCI protection, dedicated circuits, exhaust fan requirements, and receptacle placement rules."
          datePublished="2025-02-05"
          dateModified="2025-02-05"
          url="https://amporalabs.com/blog/bathroom-electrical-code-requirements"
          wordCount={2400}
          keywords={["bathroom electrical code", "bathroom GFCI", "NEC bathroom requirements", "bathroom circuit"]}
        />

        <article className="max-w-4xl mx-auto px-6 py-12">
          {/* Breadcrumb */}
          <nav className="text-sm text-white/60 mb-8">
            <Link href="/" className="hover:text-white">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/blog" className="hover:text-white">Blog</Link>
            <span className="mx-2">/</span>
            <span className="text-white">Bathroom Electrical Code</span>
          </nav>

          {/* Article Header */}
          <header className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <span className="px-3 py-1 bg-purple-600/30 text-purple-300 text-sm font-medium rounded-full">
                NEC Code
              </span>
              <span className="text-white/40 text-sm">11 min read</span>
              <span className="text-white/40 text-sm">February 5, 2025</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6 leading-tight">
              Bathroom Electrical Code Requirements: Complete NEC Guide
            </h1>
            <p className="text-xl text-white/70">
              Master every NEC requirement for bathroom electrical installations. From GFCI protection to dedicated circuits, receptacle placement to exhaust fan wiring—get it right the first time.
            </p>
          </header>

          <div className="mb-12 bg-gradient-to-br from-purple-900/20 to-cyan-900/20 rounded-2xl p-6 border border-white/10">
            <HeroIllustration />
          </div>

          {/* Quick Reference CTA */}
          <div className="bg-purple-900/30 border border-purple-500/30 rounded-2xl p-6 mb-12">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div>
                <h3 className="font-display font-bold text-lg mb-1">Quick Code Reference</h3>
                <p className="text-white/70 text-sm">Access NEC bathroom requirements instantly with Ampora's code lookup.</p>
              </div>
              <a
                href="https://apps.apple.com/us/app/ampora/id6753693522"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-purple-600 text-white font-semibold rounded-full hover:bg-purple-500 transition-colors whitespace-nowrap"
              >
                Download Free
              </a>
            </div>
          </div>

          {/* Table of Contents */}
          <div className="bg-white/5 rounded-2xl p-6 mb-12">
            <h2 className="font-display font-bold mb-4">In This Guide</h2>
            <ul className="space-y-2 text-white/70">
              <li><a href="#gfci-requirements" className="hover:text-purple-400">→ GFCI Protection Requirements</a></li>
              <li><a href="#circuit-requirements" className="hover:text-purple-400">→ Bathroom Circuit Requirements</a></li>
              <li><a href="#receptacle-placement" className="hover:text-purple-400">→ Receptacle Placement Rules</a></li>
              <li><a href="#exhaust-fans" className="hover:text-purple-400">→ Exhaust Fan & Ventilation Circuits</a></li>
              <li><a href="#lighting" className="hover:text-purple-400">→ Lighting Circuit Requirements</a></li>
              <li><a href="#wet-locations" className="hover:text-purple-400">→ Wet Location Considerations</a></li>
              <li><a href="#common-violations" className="hover:text-purple-400">→ Common Code Violations</a></li>
            </ul>
          </div>

          {/* Article Content */}
          <div className="prose prose-invert prose-lg max-w-none">

            <section id="gfci-requirements" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">GFCI Protection Requirements</h2>
              <p className="text-white/80 mb-4">
                Bathrooms are considered wet locations with high shock risk. Per <strong>NEC 210.8(A)(1)</strong>, GFCI protection is mandatory for all 125-volt through 250-volt receptacles in bathrooms. This includes both 15-amp and 20-amp circuits.
              </p>

              <div className="bg-green-900/30 border border-green-500/30 rounded-xl p-6 my-6">
                <h3 className="font-semibold text-green-400 mb-3">NEC 210.8(A)(1) - Bathroom GFCI Requirements</h3>
                <ul className="text-white/80 space-y-2">
                  <li><strong>All 125V-250V receptacles</strong> must have GFCI protection</li>
                  <li>Applies to <strong>15A and 20A circuits</strong></li>
                  <li>Protection required regardless of receptacle location within bathroom</li>
                  <li>Includes receptacles in adjacent spaces accessed only through bathroom</li>
                </ul>
              </div>

              <div className="my-8">
                <GFCIZoneDiagram />
              </div>

              <h3 className="text-xl font-semibold mt-6 mb-3">GFCI Implementation Options</h3>
              <p className="text-white/80 mb-4">
                You can provide GFCI protection using any of these methods:
              </p>
              <ul className="list-disc list-inside text-white/70 space-y-2 mb-4">
                <li><strong>GFCI receptacle</strong> - Most common for visible test/reset buttons</li>
                <li><strong>GFCI circuit breaker</strong> - Protects entire circuit from panel</li>
                <li><strong>GFCI dead-front device</strong> - When receptacle not needed at that location</li>
                <li><strong>Upstream GFCI</strong> - Downstream receptacles protected on load terminals</li>
              </ul>

              <div className="bg-orange-900/30 border border-orange-500/30 rounded-xl p-6 my-6">
                <h4 className="font-semibold text-orange-400 mb-2">Important: 250V Receptacles</h4>
                <p className="text-white/70">
                  The 2020 NEC expanded GFCI requirements to include 250V receptacles (up from 125V in previous editions). This means dedicated 240V circuits for items like bathroom heaters now require GFCI protection.
                </p>
              </div>
            </section>

            <section id="circuit-requirements" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Bathroom Circuit Requirements</h2>
              <p className="text-white/80 mb-4">
                NEC 210.11(C)(3) requires at least one 20-ampere branch circuit to supply bathroom receptacle outlets. Understanding circuit requirements prevents overloading and ensures code compliance.
              </p>

              <div className="my-8">
                <CircuitDiagram />
              </div>

              <div className="overflow-x-auto my-6">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-white/20">
                      <th className="text-left py-3 px-4 text-white/60">Circuit Type</th>
                      <th className="text-left py-3 px-4 text-white/60">Amperage</th>
                      <th className="text-left py-3 px-4 text-white/60">Wire Size</th>
                      <th className="text-left py-3 px-4 text-white/60">NEC Reference</th>
                    </tr>
                  </thead>
                  <tbody className="text-white/80">
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">Bathroom Receptacles</td>
                      <td className="py-3 px-4 font-mono text-green-400">20A</td>
                      <td className="py-3 px-4">#12 AWG minimum</td>
                      <td className="py-3 px-4">210.11(C)(3)</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">Lighting</td>
                      <td className="py-3 px-4 font-mono">15A or 20A</td>
                      <td className="py-3 px-4">#14 or #12 AWG</td>
                      <td className="py-3 px-4">210.11(A)</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">Exhaust Fan</td>
                      <td className="py-3 px-4 font-mono">15A or 20A</td>
                      <td className="py-3 px-4">#14 or #12 AWG</td>
                      <td className="py-3 px-4">210.23</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">Whirlpool/Spa Tub</td>
                      <td className="py-3 px-4 font-mono">20A (typically)</td>
                      <td className="py-3 px-4">Per manufacturer</td>
                      <td className="py-3 px-4">680.71</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4">Electric Heater</td>
                      <td className="py-3 px-4 font-mono">Varies</td>
                      <td className="py-3 px-4">Per load calculation</td>
                      <td className="py-3 px-4">424.3</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h3 className="text-xl font-semibold mt-6 mb-3">Dedicated vs. Shared Circuits</h3>
              <div className="grid md:grid-cols-2 gap-4 my-6">
                <div className="bg-purple-900/30 rounded-xl p-6">
                  <h4 className="font-semibold text-purple-400 mb-2">Option 1: Dedicated Circuit</h4>
                  <p className="text-white/70 text-sm mb-3">
                    A single 20A circuit serves ONLY the bathroom receptacle outlets in ONE bathroom.
                  </p>
                  <ul className="text-white/60 text-sm space-y-1">
                    <li>+ Can supply other outlets in same bathroom</li>
                    <li>+ Cannot supply outlets outside bathroom</li>
                    <li>+ Cannot supply lighting or fans</li>
                  </ul>
                </div>
                <div className="bg-cyan-900/30 rounded-xl p-6">
                  <h4 className="font-semibold text-cyan-400 mb-2">Option 2: Shared Circuit</h4>
                  <p className="text-white/70 text-sm mb-3">
                    A single 20A circuit can supply receptacles in MULTIPLE bathrooms.
                  </p>
                  <ul className="text-white/60 text-sm space-y-1">
                    <li>+ Can serve multiple bathroom receptacles</li>
                    <li>+ Cannot supply any other outlets</li>
                    <li>+ Cannot supply lighting or fans</li>
                  </ul>
                </div>
              </div>

              <div className="bg-white/5 rounded-xl p-6 my-6">
                <h4 className="font-semibold mb-3">Practical Example: Single Bathroom</h4>
                <p className="text-white/70 mb-3">
                  For a typical residential bathroom, you might install:
                </p>
                <ul className="text-white/60 space-y-1 text-sm">
                  <li><strong>Circuit 1:</strong> 20A dedicated circuit for bathroom receptacle(s) - GFCI protected</li>
                  <li><strong>Circuit 2:</strong> 15A or 20A circuit for lighting (can share with exhaust fan)</li>
                  <li><strong>Circuit 3:</strong> Dedicated circuit for whirlpool tub (if applicable)</li>
                </ul>
              </div>
            </section>

            <section id="receptacle-placement" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Receptacle Placement Rules</h2>
              <p className="text-white/80 mb-4">
                NEC 210.52(D) specifies that at least one receptacle outlet must be installed within 3 feet of the outside edge of each bathroom basin (sink). This ensures convenience while maintaining safety distances.
              </p>

              <div className="grid md:grid-cols-2 gap-6 my-6">
                <div className="bg-green-900/30 rounded-xl p-6">
                  <h4 className="font-semibold text-green-400 mb-3">Required Receptacle Location</h4>
                  <ul className="text-white/70 space-y-2 text-sm">
                    <li>• Within <strong>3 feet</strong> of basin outer edge</li>
                    <li>• At least one per basin</li>
                    <li>• Wall-mounted receptacles typical</li>
                    <li>• Can be on adjacent wall if within 3 feet</li>
                  </ul>
                </div>
                <div className="bg-red-900/30 rounded-xl p-6">
                  <h4 className="font-semibold text-red-400 mb-3">Prohibited Locations</h4>
                  <ul className="text-white/70 space-y-2 text-sm">
                    <li>• Inside shower or bathtub space</li>
                    <li>• Face-up on countertops</li>
                    <li>• In cabinets without proper access</li>
                    <li>• Within shower/tub zones per 406.9</li>
                  </ul>
                </div>
              </div>

              <h3 className="text-xl font-semibold mt-6 mb-3">Receptacle Height Requirements</h3>
              <p className="text-white/80 mb-4">
                While the NEC doesn't specify a minimum height for bathroom receptacles, practical installation typically places them:
              </p>
              <ul className="list-disc list-inside text-white/70 space-y-2 mb-4">
                <li><strong>Counter-height:</strong> 4-6 inches above countertop surface</li>
                <li><strong>Standard height:</strong> 15-18 inches above finished floor (when no counter)</li>
                <li><strong>ADA compliance:</strong> 15-48 inches above floor for accessible bathrooms</li>
              </ul>

              <div className="bg-orange-900/30 border border-orange-500/30 rounded-xl p-6 my-6">
                <h4 className="font-semibold text-orange-400 mb-2">Multiple Basin Bathrooms</h4>
                <p className="text-white/70">
                  For bathrooms with multiple sinks (such as double vanities), each basin requires its own receptacle within 3 feet. A single receptacle between two basins may serve both if it's within 3 feet of each basin's outer edge.
                </p>
              </div>
            </section>

            <section id="exhaust-fans" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Exhaust Fan & Ventilation Circuits</h2>
              <p className="text-white/80 mb-4">
                Bathroom exhaust fans remove moisture and odors, protecting the home from mold and moisture damage. While the NEC focuses on electrical requirements, the International Residential Code (IRC) mandates ventilation in bathrooms.
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-3">Exhaust Fan Electrical Requirements</h3>
              <div className="bg-white/5 rounded-xl p-6 my-6">
                <ul className="text-white/80 space-y-3">
                  <li><strong>Circuit:</strong> Can be on 15A or 20A circuit</li>
                  <li><strong>Sharing:</strong> Can share circuit with bathroom lighting</li>
                  <li><strong>Cannot share with:</strong> Bathroom receptacle circuit</li>
                  <li><strong>Switch location:</strong> Must be accessible from within bathroom</li>
                  <li><strong>Timer controls:</strong> Commonly used for delayed shutoff</li>
                </ul>
              </div>

              <h3 className="text-xl font-semibold mt-6 mb-3">Fan/Light Combination Units</h3>
              <p className="text-white/80 mb-4">
                Combination exhaust fan/light fixtures are popular and code-compliant. When installing:
              </p>
              <ul className="list-disc list-inside text-white/70 space-y-2 mb-4">
                <li>Single switch can control both fan and light together</li>
                <li>Separate switches allow independent control (preferred)</li>
                <li>Timer switch on fan encourages proper ventilation</li>
                <li>Humidity-sensing switches automatically control fan operation</li>
              </ul>

              <div className="bg-blue-900/30 border border-blue-500/30 rounded-xl p-6 my-6">
                <h4 className="font-semibold text-blue-400 mb-2">Exhaust Fan Sizing</h4>
                <p className="text-white/70 mb-3">
                  While not an electrical code requirement, properly sized exhaust fans are essential:
                </p>
                <ul className="text-white/60 text-sm space-y-1">
                  <li>• Minimum: 50 CFM for bathrooms up to 100 sq ft</li>
                  <li>• Larger baths: 1 CFM per square foot</li>
                  <li>• Consider higher CFM for shower steam</li>
                </ul>
              </div>
            </section>

            <section id="lighting" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Lighting Circuit Requirements</h2>
              <p className="text-white/80 mb-4">
                Bathroom lighting must be properly installed for both safety and functionality. The NEC addresses fixture ratings, switch locations, and circuit requirements.
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-3">Lighting in Wet/Damp Locations</h3>
              <div className="overflow-x-auto my-6">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-white/20">
                      <th className="text-left py-3 px-4 text-white/60">Zone</th>
                      <th className="text-left py-3 px-4 text-white/60">Location</th>
                      <th className="text-left py-3 px-4 text-white/60">Fixture Rating Required</th>
                    </tr>
                  </thead>
                  <tbody className="text-white/80">
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">Zone 0</td>
                      <td className="py-3 px-4">Inside tub/shower</td>
                      <td className="py-3 px-4 text-cyan-400">Suitable for wet locations</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">Zone 1</td>
                      <td className="py-3 px-4">Above tub/shower (below 8 ft)</td>
                      <td className="py-3 px-4 text-cyan-400">Suitable for damp/wet locations</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4">Zone 2+</td>
                      <td className="py-3 px-4">General bathroom area</td>
                      <td className="py-3 px-4 text-green-400">Suitable for damp locations (recommended)</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h3 className="text-xl font-semibold mt-6 mb-3">Switch Requirements</h3>
              <ul className="list-disc list-inside text-white/70 space-y-2 mb-4">
                <li><strong>Location:</strong> Switches typically at entry, 48" to center above floor</li>
                <li><strong>Wet locations:</strong> Cannot be installed in shower/tub zones</li>
                <li><strong>Dimmer compatibility:</strong> Verify LED compatibility for dimmer switches</li>
                <li><strong>Night lights:</strong> Permitted on same circuit as general lighting</li>
              </ul>
            </section>

            <section id="wet-locations" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Wet Location Considerations</h2>
              <p className="text-white/80 mb-4">
                Bathrooms contain both <strong>wet locations</strong> (tub/shower areas) and <strong>damp locations</strong> (general bathroom area). Equipment and wiring methods must be appropriate for each zone.
              </p>

              <div className="grid md:grid-cols-2 gap-6 my-6">
                <div className="bg-cyan-900/30 rounded-xl p-6">
                  <h4 className="font-semibold text-cyan-400 mb-3">Wet Locations</h4>
                  <p className="text-white/70 text-sm mb-3">Subject to saturation with water:</p>
                  <ul className="text-white/60 text-sm space-y-1">
                    <li>• Shower stalls</li>
                    <li>• Tub/shower combinations</li>
                    <li>• Areas subject to spray</li>
                  </ul>
                  <p className="text-cyan-400 text-sm mt-3">Requires wet-rated equipment</p>
                </div>
                <div className="bg-yellow-900/30 rounded-xl p-6">
                  <h4 className="font-semibold text-yellow-400 mb-3">Damp Locations</h4>
                  <p className="text-white/70 text-sm mb-3">Subject to moisture but not saturation:</p>
                  <ul className="text-white/60 text-sm space-y-1">
                    <li>• General bathroom area</li>
                    <li>• Vanity areas</li>
                    <li>• Toilet area</li>
                  </ul>
                  <p className="text-yellow-400 text-sm mt-3">Requires damp-rated equipment</p>
                </div>
              </div>

              <h3 className="text-xl font-semibold mt-6 mb-3">Boxes in Wet Locations</h3>
              <p className="text-white/80 mb-4">
                Per NEC 314.15, boxes installed in wet locations must be listed for use in wet locations. The installation must prevent water from entering or accumulating within the box.
              </p>
            </section>

            <section id="common-violations" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Common Code Violations</h2>
              <p className="text-white/80 mb-4">
                Understanding common violations helps ensure your installations pass inspection the first time.
              </p>

              <div className="bg-red-900/20 border border-red-500/30 rounded-xl p-6 my-6">
                <h4 className="font-semibold text-red-400 mb-3">Frequently Cited Violations</h4>
                <ul className="text-white/70 space-y-3">
                  <li>
                    <strong>Missing GFCI protection:</strong> All bathroom receptacles must be GFCI protected, including 240V outlets for heaters (NEC 2020+).
                  </li>
                  <li>
                    <strong>Improper circuit sharing:</strong> The 20A bathroom receptacle circuit cannot supply lighting, fans, or receptacles outside the bathroom.
                  </li>
                  <li>
                    <strong>Receptacle too far from basin:</strong> Must be within 3 feet of each basin's outer edge.
                  </li>
                  <li>
                    <strong>Non-rated fixtures in wet zones:</strong> Light fixtures above showers must be rated for wet/damp locations.
                  </li>
                  <li>
                    <strong>Receptacle in tub/shower zone:</strong> No receptacles permitted within the bathtub or shower space.
                  </li>
                  <li>
                    <strong>Incorrect wire gauge:</strong> Bathroom receptacle circuits require #12 AWG minimum for 20A circuit.
                  </li>
                </ul>
              </div>

              <h3 className="text-xl font-semibold mt-6 mb-3">Pre-Inspection Checklist</h3>
              <div className="bg-white/5 rounded-xl p-6 my-6">
                <ul className="text-white/80 space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-green-400">✓</span>
                    All receptacles GFCI protected (or on GFCI circuit)
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400">✓</span>
                    20A circuit for receptacles with #12 AWG wire
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400">✓</span>
                    Receptacle within 3 feet of each basin
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400">✓</span>
                    No receptacles in shower/tub space
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400">✓</span>
                    Wet/damp rated fixtures where required
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400">✓</span>
                    Exhaust fan properly wired (separate from receptacle circuit)
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400">✓</span>
                    Proper grounding and bonding
                  </li>
                </ul>
              </div>
            </section>

            {/* CTA Section */}
            <section className="bg-gradient-to-r from-purple-900/30 to-cyan-900/30 rounded-2xl p-8 my-12">
              <h2 className="text-2xl font-display font-bold mb-4 text-center">
                NEC Code Reference in Your Pocket
              </h2>
              <p className="text-white/70 mb-6 text-center">
                Access bathroom electrical requirements instantly with Ampora. Search NEC articles, get AI-powered code answers, and use professional calculators—all on your phone.
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
                <Link href="/blog/gfci-vs-afci-requirements" className="bg-white/5 hover:bg-white/10 rounded-xl p-6 transition-colors">
                  <span className="text-green-400 text-sm">Safety</span>
                  <h3 className="font-semibold mt-2">GFCI vs AFCI: Requirements & Differences</h3>
                </Link>
                <Link href="/blog/nec-article-210-branch-circuits-guide" className="bg-white/5 hover:bg-white/10 rounded-xl p-6 transition-colors">
                  <span className="text-purple-400 text-sm">NEC Code</span>
                  <h3 className="font-semibold mt-2">NEC Article 210: Branch Circuits Guide</h3>
                </Link>
                <Link href="/blog/electrical-inspection-checklist" className="bg-white/5 hover:bg-white/10 rounded-xl p-6 transition-colors">
                  <span className="text-green-400 text-sm">Inspections</span>
                  <h3 className="font-semibold mt-2">Electrical Inspection Checklist</h3>
                </Link>
                <Link href="/blog/wire-sizing-guide-nec-ampacity-tables" className="bg-white/5 hover:bg-white/10 rounded-xl p-6 transition-colors">
                  <span className="text-amber-400 text-sm">Calculations</span>
                  <h3 className="font-semibold mt-2">Wire Sizing Guide: NEC Ampacity Tables</h3>
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
