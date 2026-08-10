import { Metadata } from "next";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import { BreadcrumbJsonLd, BlogPostingJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Electrical Bonding Requirements: Water Pipes, Gas Lines & More",
  description: "Complete guide to electrical bonding requirements per NEC 250.104. Learn water pipe bonding, gas line bonding, CSST requirements, structural steel bonding, swimming pool bonding, and how to size bonding jumpers correctly.",
  keywords: [
    "electrical bonding requirements",
    "water pipe bonding",
    "gas line bonding NEC",
    "CSST bonding requirements",
    "NEC 250.104",
    "bonding jumper sizing",
    "structural steel bonding",
    "swimming pool bonding",
    "bonding around water meter",
    "separately derived system bonding",
  ],
  alternates: {
    canonical: "https://amporalabs.com/blog/electrical-bonding-requirements-guide",
  },
  openGraph: {
    title: "Electrical Bonding Requirements: Water Pipes, Gas Lines & More - Ampora",
    description: "Master NEC bonding requirements for water pipes, gas lines, CSST, structural steel, and swimming pools. Essential knowledge for electricians.",
    url: "https://amporalabs.com/blog/electrical-bonding-requirements-guide",
    type: "article",
    publishedTime: "2025-06-12",
  },
};

function HeroIllustration() {
  return (
    <svg viewBox="0 0 400 180" className="w-full h-40 md:h-48" aria-label="Bonding connections to water pipe, gas pipe, and structural steel">
      {/* Title */}
      <text x="200" y="14" textAnchor="middle" fill="#f87171" fontSize="10" fontWeight="bold">BONDING SYSTEM OVERVIEW</text>

      {/* Main Panel */}
      <g transform="translate(165, 22)">
        <rect x="0" y="0" width="70" height="55" rx="4" fill="#1f2937" stroke="#6b7280" strokeWidth="2"/>
        <rect x="8" y="8" width="54" height="14" rx="2" fill="#374151" stroke="#4b5563"/>
        <text x="35" y="19" textAnchor="middle" fill="#9ca3af" fontSize="7">PANEL</text>
        {/* Breakers */}
        <rect x="10" y="28" width="22" height="6" rx="1" fill="#22c55e"/>
        <rect x="38" y="28" width="22" height="6" rx="1" fill="#22c55e"/>
        {/* Ground bar */}
        <rect x="10" y="40" width="50" height="8" rx="1" fill="#22c55e" opacity="0.6"/>
        <text x="35" y="47" textAnchor="middle" fill="#1f2937" fontSize="5" fontWeight="bold">GND BAR</text>
      </g>

      {/* Main bonding conductor running down from panel */}
      <line x1="200" y1="77" x2="200" y2="100" stroke="#f87171" strokeWidth="3"/>
      <text x="215" y="92" fill="#f87171" fontSize="7" fontWeight="bold">BONDING</text>

      {/* Horizontal bus */}
      <line x1="40" y1="100" x2="360" y2="100" stroke="#f87171" strokeWidth="3"/>

      {/* Water Pipe - Left */}
      <g transform="translate(30, 108)">
        {/* Pipe */}
        <rect x="0" y="8" width="80" height="12" rx="6" fill="#60a5fa" stroke="#3b82f6" strokeWidth="1.5"/>
        <text x="40" y="17" textAnchor="middle" fill="#1e3a5f" fontSize="6" fontWeight="bold">WATER PIPE</text>
        {/* Clamp */}
        <rect x="30" y="2" width="16" height="6" rx="1" fill="#f87171"/>
        {/* Bonding wire up */}
        <line x1="38" y1="5" x2="38" y2="-8" stroke="#f87171" strokeWidth="2"/>
        {/* Water meter break */}
        <rect x="55" y="6" width="12" height="16" rx="2" fill="#1f2937" stroke="#60a5fa" strokeWidth="1"/>
        <text x="61" y="17" textAnchor="middle" fill="#60a5fa" fontSize="4">MTR</text>
        {/* Jumper around meter */}
        <path d="M53 14 Q49 -2, 69 14" fill="none" stroke="#fbbf24" strokeWidth="1.5" strokeDasharray="3,1"/>
        <text x="40" y="38" textAnchor="middle" fill="#9ca3af" fontSize="6">Jumper around meter</text>
      </g>

      {/* Gas Pipe - Center */}
      <g transform="translate(150, 108)">
        {/* Pipe */}
        <rect x="0" y="8" width="80" height="12" rx="6" fill="#fbbf24" stroke="#f59e0b" strokeWidth="1.5"/>
        <text x="40" y="17" textAnchor="middle" fill="#78350f" fontSize="6" fontWeight="bold">GAS PIPE</text>
        {/* Clamp */}
        <rect x="30" y="2" width="16" height="6" rx="1" fill="#f87171"/>
        {/* Bonding wire up */}
        <line x1="38" y1="5" x2="190" y2="-8" stroke="#f87171" strokeWidth="0" />
        <line x1="188" y1="-8" x2="188" y2="-8" stroke="#f87171" strokeWidth="2"/>
        {/* CSST corrugated section */}
        <path d="M65 14 Q67 8, 69 14 Q71 20, 73 14 Q75 8, 77 14" fill="none" stroke="#fbbf24" strokeWidth="2"/>
        <text x="71" y="30" textAnchor="middle" fill="#fbbf24" fontSize="5">CSST</text>
        <text x="40" y="38" textAnchor="middle" fill="#9ca3af" fontSize="6">250.104(B)</text>
      </g>

      {/* Structural Steel - Right */}
      <g transform="translate(290, 108)">
        {/* I-beam shape */}
        <rect x="10" y="0" width="50" height="5" rx="1" fill="#94a3b8" stroke="#64748b" strokeWidth="1"/>
        <rect x="30" y="5" width="10" height="30" rx="0" fill="#94a3b8" stroke="#64748b" strokeWidth="1"/>
        <rect x="10" y="35" width="50" height="5" rx="1" fill="#94a3b8" stroke="#64748b" strokeWidth="1"/>
        <text x="35" y="24" textAnchor="middle" fill="#334155" fontSize="5" fontWeight="bold">STEEL</text>
        {/* Clamp */}
        <rect x="20" y="-4" width="12" height="6" rx="1" fill="#f87171"/>
        {/* Bonding wire up */}
        <line x1="26" y1="-1" x2="26" y2="-8" stroke="#f87171" strokeWidth="2"/>
        <text x="35" y="50" textAnchor="middle" fill="#9ca3af" fontSize="6">250.104(C)</text>
      </g>

      {/* Connection dots on horizontal bus */}
      <circle cx="68" cy="100" r="3" fill="#f87171"/>
      <circle cx="188" cy="100" r="3" fill="#f87171"/>
      <circle cx="316" cy="100" r="3" fill="#f87171"/>

      {/* Pool bonding note at bottom */}
      <text x="200" y="172" textAnchor="middle" fill="#22d3ee" fontSize="7">Pool bonding per NEC 680.26 | Bonding jumpers per 250.102</text>
    </svg>
  );
}

export default function ElectricalBondingRequirementsPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navigation />
      <div className="pt-20">
        <BreadcrumbJsonLd
          items={[
            { name: "Home", url: "https://amporalabs.com" },
            { name: "Blog", url: "https://amporalabs.com/blog" },
            { name: "Electrical Bonding Requirements", url: "https://amporalabs.com/blog/electrical-bonding-requirements-guide" },
          ]}
        />
        <BlogPostingJsonLd
          headline="Electrical Bonding Requirements: Water Pipes, Gas Lines & More"
          description="Complete guide to electrical bonding requirements per NEC 250.104 for water pipes, gas lines, CSST, structural steel, and swimming pools."
          datePublished="2025-06-12"
          dateModified="2025-06-12"
          url="https://amporalabs.com/blog/electrical-bonding-requirements-guide"
          wordCount={3800}
          keywords={["electrical bonding", "NEC 250.104", "water pipe bonding", "gas line bonding", "CSST bonding"]}
        />

        <article className="max-w-4xl mx-auto px-6 py-12">
          {/* Breadcrumb */}
          <nav className="text-sm text-white/60 mb-8">
            <Link href="/" className="hover:text-white">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/blog" className="hover:text-white">Blog</Link>
            <span className="mx-2">/</span>
            <span className="text-white">Electrical Bonding Requirements</span>
          </nav>

          {/* Article Header */}
          <header className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <span className="px-3 py-1 bg-red-600/30 text-red-300 text-sm font-medium rounded-full">
                Safety
              </span>
              <span className="text-white/40 text-sm">13 min read</span>
              <span className="text-white/40 text-sm">June 12, 2025</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6 leading-tight">
              Electrical Bonding Requirements: Water Pipes, Gas Lines & More
            </h1>
            <p className="text-xl text-white/70">
              Bonding is one of the most misunderstood aspects of electrical work. From metal water piping to CSST gas lines and structural steel, this guide covers every bonding requirement you need to know for code-compliant installations and passing inspections.
            </p>
          </header>

          <div className="mb-12 bg-gradient-to-br from-red-900/20 to-cyan-900/20 rounded-2xl p-6 border border-white/10">
            <HeroIllustration />
          </div>

          {/* Key Concept Box */}
          <div className="bg-red-900/30 border border-red-500/30 rounded-2xl p-6 mb-12">
            <div className="flex items-start gap-4">
              <div className="text-red-400 text-2xl">&#9888;</div>
              <div>
                <h3 className="font-display font-bold text-lg mb-2 text-red-400">Why Bonding Matters</h3>
                <p className="text-white/70">
                  Bonding connects all metal systems together to create equal electrical potential and provide a low-impedance fault current path. Without proper bonding, metal water pipes, gas lines, and structural components can become energized during a fault, creating lethal shock hazards and potential fire or explosion risks with gas piping.
                </p>
              </div>
            </div>
          </div>

          {/* Table of Contents */}
          <div className="bg-white/5 rounded-2xl p-6 mb-12">
            <h2 className="font-display font-bold mb-4">In This Guide</h2>
            <ul className="space-y-2 text-white/70">
              <li><a href="#bonding-vs-grounding" className="hover:text-red-400">&#8594; Bonding vs Grounding Explained</a></li>
              <li><a href="#nec-250-104" className="hover:text-red-400">&#8594; NEC 250.104: Bonding of Piping Systems</a></li>
              <li><a href="#water-pipe-bonding" className="hover:text-red-400">&#8594; Water Pipe Bonding Requirements</a></li>
              <li><a href="#gas-pipe-bonding" className="hover:text-red-400">&#8594; Gas Pipe Bonding (250.104(B))</a></li>
              <li><a href="#csst-bonding" className="hover:text-red-400">&#8594; CSST Gas Line Bonding Requirements</a></li>
              <li><a href="#structural-steel" className="hover:text-red-400">&#8594; Structural Steel Bonding</a></li>
              <li><a href="#pool-bonding" className="hover:text-red-400">&#8594; Swimming Pool Bonding (680.26)</a></li>
              <li><a href="#jumper-sizing" className="hover:text-red-400">&#8594; Bonding Jumper Sizing</a></li>
              <li><a href="#water-meter" className="hover:text-red-400">&#8594; Bonding Around Water Meters</a></li>
              <li><a href="#separately-derived" className="hover:text-red-400">&#8594; Bonding for Separately Derived Systems</a></li>
              <li><a href="#common-violations" className="hover:text-red-400">&#8594; Common Bonding Violations</a></li>
              <li><a href="#inspection-tips" className="hover:text-red-400">&#8594; Inspection Tips</a></li>
            </ul>
          </div>

          {/* Article Content */}
          <div className="prose prose-invert prose-lg max-w-none">

            <section id="bonding-vs-grounding" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Bonding vs Grounding Explained</h2>
              <p className="text-white/80 mb-4">
                Before diving into specific bonding requirements, it is essential to understand the difference between bonding and grounding. These terms are often used interchangeably, but they serve different purposes in the NEC.
              </p>

              <div className="grid md:grid-cols-2 gap-6 my-6">
                <div className="bg-red-900/20 rounded-xl p-6 border border-red-500/30">
                  <h3 className="font-semibold text-red-400 mb-3">Bonding</h3>
                  <p className="text-white/70 text-sm mb-3">
                    Connecting conductive materials together to establish electrical continuity and conductivity. The purpose is to:
                  </p>
                  <ul className="space-y-2 text-white/70 text-sm">
                    <li>&#8226; Equalize voltage potential between metal parts</li>
                    <li>&#8226; Provide a low-impedance fault current path</li>
                    <li>&#8226; Enable overcurrent devices to trip during faults</li>
                    <li>&#8226; Prevent shock from voltage differences on metal surfaces</li>
                  </ul>
                </div>
                <div className="bg-green-900/20 rounded-xl p-6 border border-green-500/30">
                  <h3 className="font-semibold text-green-400 mb-3">Grounding</h3>
                  <p className="text-white/70 text-sm mb-3">
                    Connecting the electrical system or equipment to earth through grounding electrodes. The purpose is to:
                  </p>
                  <ul className="space-y-2 text-white/70 text-sm">
                    <li>&#8226; Stabilize voltage during normal operation</li>
                    <li>&#8226; Limit voltage from lightning and line surges</li>
                    <li>&#8226; Establish earth as a reference point</li>
                    <li>&#8226; Dissipate static charges safely</li>
                  </ul>
                </div>
              </div>

              <div className="bg-orange-900/30 rounded-xl p-6 my-6">
                <h3 className="font-semibold text-orange-400 mb-2">Key Distinction</h3>
                <p className="text-white/70">
                  <strong>Bonding</strong> is what actually protects people from shock and clears faults. The earth has far too much impedance to serve as an effective fault current path. When a fault energizes a metal water pipe, the bonding connection back to the electrical source is what allows enough current to flow to trip the breaker. Without bonding, the pipe stays energized and dangerous.
                </p>
              </div>
            </section>

            <section id="nec-250-104" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">NEC 250.104: Bonding of Piping Systems and Exposed Structural Metal</h2>
              <p className="text-white/80 mb-4">
                <strong>NEC Section 250.104</strong> is the primary code reference for bonding metal piping systems and structural steel. It is divided into four subsections that address different types of metal systems:
              </p>

              <div className="overflow-x-auto my-6">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-white/20">
                      <th className="text-left py-3 px-4 text-white/60">Subsection</th>
                      <th className="text-left py-3 px-4 text-white/60">Covers</th>
                      <th className="text-left py-3 px-4 text-white/60">Key Requirement</th>
                    </tr>
                  </thead>
                  <tbody className="text-white/80">
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-mono text-red-400">250.104(A)</td>
                      <td className="py-3 px-4">Metal water piping</td>
                      <td className="py-3 px-4 text-white/60">Must be bonded to service equipment, GEC, grounding electrode, or grounded conductor at service</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-mono text-red-400">250.104(B)</td>
                      <td className="py-3 px-4">Other metal piping (gas, etc.)</td>
                      <td className="py-3 px-4 text-white/60">Must be bonded if likely to become energized; bonded to EGC of circuit likely to energize</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-mono text-red-400">250.104(C)</td>
                      <td className="py-3 px-4">Exposed structural steel</td>
                      <td className="py-3 px-4 text-white/60">Must be bonded if not serving as grounding electrode and likely to become energized</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-mono text-red-400">250.104(D)</td>
                      <td className="py-3 px-4">Separately derived systems</td>
                      <td className="py-3 px-4 text-white/60">Metal piping and structural steel in area served must be bonded to the separately derived system</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="text-white/80">
                Each subsection has specific sizing and connection requirements. Understanding which subsection applies to your situation is the first step toward a compliant installation.
              </p>
            </section>

            <section id="water-pipe-bonding" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Water Pipe Bonding Requirements</h2>
              <p className="text-white/80 mb-4">
                Per <strong>NEC 250.104(A)</strong>, the interior metal water piping system must be bonded. This is one of the most common bonding requirements electricians encounter, and it applies to every building with metal water piping.
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-3">Where to Bond</h3>
              <p className="text-white/80 mb-4">
                The metal water piping system must be bonded to one of the following:
              </p>
              <ul className="list-disc list-inside text-white/70 space-y-2 mb-6">
                <li><strong>Service equipment enclosure</strong> - Most common and preferred method</li>
                <li><strong>Grounding electrode conductor (GEC)</strong> - Where it is accessible</li>
                <li><strong>Grounding electrode</strong> - Any electrode in the grounding electrode system</li>
                <li><strong>Grounded conductor (neutral)</strong> - Only at the service equipment</li>
              </ul>

              <h3 className="text-xl font-semibold mt-6 mb-3">Sizing the Water Pipe Bonding Jumper</h3>
              <p className="text-white/80 mb-4">
                The bonding jumper for metal water piping is sized per <strong>NEC Table 250.66</strong>, based on the size of the service entrance conductors:
              </p>

              <div className="overflow-x-auto my-6">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-white/20">
                      <th className="text-left py-3 px-4 text-white/60">Service Conductor (Copper)</th>
                      <th className="text-left py-3 px-4 text-white/60">Bonding Jumper (Copper)</th>
                      <th className="text-left py-3 px-4 text-white/60">Bonding Jumper (Aluminum)</th>
                    </tr>
                  </thead>
                  <tbody className="text-white/80">
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">2 AWG or smaller</td>
                      <td className="py-3 px-4 font-mono">8 AWG</td>
                      <td className="py-3 px-4 font-mono">6 AWG</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">1 AWG or 1/0 AWG</td>
                      <td className="py-3 px-4 font-mono">6 AWG</td>
                      <td className="py-3 px-4 font-mono">4 AWG</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">2/0 or 3/0 AWG</td>
                      <td className="py-3 px-4 font-mono">4 AWG</td>
                      <td className="py-3 px-4 font-mono">2 AWG</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">Over 3/0 through 350 kcmil</td>
                      <td className="py-3 px-4 font-mono">2 AWG</td>
                      <td className="py-3 px-4 font-mono">1/0 AWG</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">Over 350 through 600 kcmil</td>
                      <td className="py-3 px-4 font-mono">1/0 AWG</td>
                      <td className="py-3 px-4 font-mono">3/0 AWG</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4">Over 600 through 1100 kcmil</td>
                      <td className="py-3 px-4 font-mono">2/0 AWG</td>
                      <td className="py-3 px-4 font-mono">4/0 AWG</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="bg-cyan-900/30 rounded-xl p-6 my-6">
                <h3 className="font-semibold text-cyan-400 mb-2">Points of Attachment</h3>
                <p className="text-white/70">
                  The bonding connection must be made at an accessible point on the water piping system. The connection point should be as close to the point of entrance of the water pipe into the building as practical. Use listed clamps designed for the pipe material and bonding conductor size.
                </p>
              </div>

              <div className="bg-purple-900/30 rounded-xl p-6 my-6">
                <h3 className="font-semibold text-purple-400 mb-2">Multiple Occupancy Buildings</h3>
                <p className="text-white/70">
                  In a building with multiple occupancies (apartments, condos, commercial suites), each occupancy with an individual service or feeder does not need a separate water pipe bond if the metal water piping is metallically continuous throughout the building and is bonded at the building service. However, if any portion of the piping uses nonmetallic materials that break continuity, additional bonding may be required at each occupancy.
                </p>
              </div>
            </section>

            <section id="gas-pipe-bonding" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Gas Pipe Bonding (NEC 250.104(B))</h2>
              <p className="text-white/80 mb-4">
                <strong>NEC 250.104(B)</strong> covers bonding of &quot;other metal piping&quot; -- which includes gas piping systems. The requirement states that metal piping that is likely to become energized must be bonded. Gas piping in contact with or in proximity to electrical equipment or wiring qualifies.
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-3">Key Differences from Water Pipe Bonding</h3>
              <div className="space-y-4 my-6">
                <div className="bg-white/5 rounded-xl p-6">
                  <h4 className="font-semibold text-yellow-400 mb-2">Sizing Method</h4>
                  <p className="text-white/70 text-sm">
                    Unlike water pipe bonding (sized per Table 250.66), gas pipe bonding jumpers are sized per <strong>NEC Table 250.122</strong> based on the rating of the overcurrent device for the circuit most likely to energize the piping. For example, if a gas furnace on a 20A circuit is the most likely source of energization, the bonding jumper is sized for a 20A overcurrent device: 12 AWG copper minimum.
                  </p>
                </div>
                <div className="bg-white/5 rounded-xl p-6">
                  <h4 className="font-semibold text-yellow-400 mb-2">Connection Point</h4>
                  <p className="text-white/70 text-sm">
                    The gas pipe bonding jumper connects to the <strong>equipment grounding conductor (EGC)</strong> of the circuit that is likely to energize the piping, the service equipment enclosure, the grounding electrode conductor, or the grounding electrode. It does NOT need to go back to the service like the water pipe bond.
                  </p>
                </div>
              </div>

              <div className="bg-red-900/20 border border-red-500/30 rounded-xl p-6 my-6">
                <h3 className="font-semibold text-red-400 mb-2">Gas Pipe Bonding vs. Gas Pipe as Grounding Electrode</h3>
                <p className="text-white/70">
                  <strong>NEC 250.52(B) explicitly prohibits</strong> using a metal underground gas piping system as a grounding electrode. However, 250.104(B) requires that the gas piping be bonded. These are two separate concepts. You must bond the gas pipe for safety, but you cannot use it to ground your electrical system.
                </p>
              </div>

              <div className="bg-orange-900/30 rounded-xl p-6 my-6">
                <h3 className="font-semibold text-orange-400 mb-2">Practical Gas Pipe Bonding</h3>
                <p className="text-white/70">
                  In most residential installations, the gas pipe is effectively bonded through the equipment grounding conductor of the appliance circuit. When a gas furnace, water heater, or dryer is connected with a proper EGC and the gas connector attaches to the metal appliance housing, the gas piping becomes bonded through that path. However, some inspectors require a dedicated bonding jumper, and CSST always requires its own dedicated bond.
                </p>
              </div>
            </section>

            {/* Mid-Article CTA */}
            <div className="not-prose my-12 bg-gradient-to-r from-purple-900/40 to-cyan-900/40 rounded-xl p-6 border border-purple-500/20">
              <div className="flex flex-col sm:flex-row items-center gap-4">
                <div className="flex-1 text-center sm:text-left">
                  <p className="font-display font-bold text-lg text-white mb-1">Ampora — The Electrician&apos;s AI Companion</p>
                  <p className="text-white/60 text-sm">Instant NEC code answers, electrical calculators, and AI troubleshooting. Free on iOS.</p>
                </div>
                <a
                  href="/get"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-white text-black font-semibold rounded-full hover:bg-white/90 transition-colors text-sm whitespace-nowrap"
                >
                  <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/></svg><svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor" aria-hidden="true"><path d="M3 20.5V3.5c0-.59.34-1.11.84-1.35L13.69 12 3.84 21.85c-.5-.25-.84-.76-.84-1.35zm13.81-5.38L6.05 21.34l8.49-8.49 2.27 2.27zm3.35-4.31c.34.27.59.69.59 1.19 0 .5-.22.9-.57 1.18l-2.29 1.32L15.39 12l2.5-2.5 2.27 1.31zM6.05 2.66L16.81 8.88l-2.27 2.27L6.05 2.66z"/></svg>
                  Download Free
                </a>
              </div>
            </div>

            <section id="csst-bonding" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">CSST Gas Line Bonding Requirements</h2>
              <p className="text-white/80 mb-4">
                <strong>Corrugated Stainless Steel Tubing (CSST)</strong> is a flexible gas piping product that has become extremely common in residential and commercial construction. CSST has specific bonding requirements that go beyond standard gas pipe bonding because it is vulnerable to damage from lightning-induced electrical surges.
              </p>

              <div className="bg-red-900/20 border border-red-500/30 rounded-xl p-6 my-6">
                <div className="flex items-start gap-4">
                  <div className="text-red-400 text-2xl">&#9888;</div>
                  <div>
                    <h3 className="font-semibold text-red-400 mb-2">Lightning and CSST: A Serious Hazard</h3>
                    <p className="text-white/70">
                      Lightning strikes can induce current in CSST, causing arcing that can perforate the thin stainless steel tubing. A perforated gas line leaking inside a wall cavity is an extreme fire and explosion hazard. Proper bonding reduces the voltage difference that causes arcing, making it a life-safety issue.
                    </p>
                  </div>
                </div>
              </div>

              <h3 className="text-xl font-semibold mt-6 mb-3">CSST Manufacturer Bonding Requirements</h3>
              <p className="text-white/80 mb-4">
                Most CSST manufacturers require bonding that exceeds the basic NEC 250.104(B) requirements. The typical manufacturer requirement includes:
              </p>
              <ul className="list-disc list-inside text-white/70 space-y-2 mb-6">
                <li><strong>Minimum 6 AWG copper</strong> bonding conductor (larger than the NEC minimum for most circuits)</li>
                <li>Direct connection from the CSST system to the <strong>grounding electrode system</strong></li>
                <li>Bonding clamp at the <strong>manifold or first fitting</strong> where CSST connects to rigid pipe</li>
                <li>Connection to the grounding electrode system, not just the EGC of a branch circuit</li>
                <li>Bonding must be installed <strong>before the gas is turned on</strong></li>
              </ul>

              <div className="bg-purple-900/30 rounded-xl p-6 my-6">
                <h3 className="font-semibold text-purple-400 mb-3">CSST Bonding vs NEC Minimum</h3>
                <p className="text-white/70 mb-3">
                  There is an important distinction here. The NEC may only require a bonding jumper sized per Table 250.122 (as small as 14 AWG for a 15A circuit), but the CSST manufacturer&apos;s installation instructions typically require 6 AWG minimum connected to the grounding electrode system. Per NEC 110.3(B), you must follow the manufacturer&apos;s listed instructions. Many jurisdictions have also adopted local amendments requiring 6 AWG CSST bonding.
                </p>
                <p className="text-white/70">
                  <strong>Always check:</strong> (1) the CSST manufacturer&apos;s installation manual, (2) local code amendments, and (3) the AHJ requirements for your jurisdiction.
                </p>
              </div>

              <h3 className="text-xl font-semibold mt-6 mb-3">Where to Make the CSST Bond</h3>
              <div className="space-y-3 my-6">
                <div className="bg-white/5 rounded-lg p-4">
                  <p className="font-semibold text-white">Preferred: At the gas manifold or meter</p>
                  <p className="text-white/60 text-sm">Bond at the point where CSST connects to the rigid piping, typically near the gas meter or manifold inside the building.</p>
                </div>
                <div className="bg-white/5 rounded-lg p-4">
                  <p className="font-semibold text-white">Acceptable: On the rigid pipe section</p>
                  <p className="text-white/60 text-sm">If bonding at the CSST fitting is not practical, bond the rigid black iron pipe section upstream of the CSST connections.</p>
                </div>
                <div className="bg-white/5 rounded-lg p-4">
                  <p className="font-semibold text-white">Not Acceptable: On the CSST jacket itself</p>
                  <p className="text-white/60 text-sm">Never attach a bonding clamp directly to the corrugated tubing or its yellow jacket. Use only the manufacturer-approved attachment points.</p>
                </div>
              </div>
            </section>

            <section id="structural-steel" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Structural Steel Bonding</h2>
              <p className="text-white/80 mb-4">
                Per <strong>NEC 250.104(C)</strong>, exposed structural steel that is interconnected to form a steel building frame and is not intentionally grounded and is likely to become energized must be bonded to one of the following:
              </p>
              <ul className="list-disc list-inside text-white/70 space-y-2 mb-6">
                <li>Service equipment enclosure</li>
                <li>Grounding electrode conductor (where accessible)</li>
                <li>One of the grounding electrodes in the grounding electrode system</li>
                <li>Equipment grounding conductor of the circuit most likely to energize the steel</li>
              </ul>

              <h3 className="text-xl font-semibold mt-6 mb-3">Sizing the Structural Steel Bond</h3>
              <p className="text-white/80 mb-4">
                Like gas piping, the bonding jumper for structural steel is sized per <strong>NEC Table 250.122</strong> based on the rating of the overcurrent device for the circuit most likely to energize the steel. In commercial and industrial settings with large feeders near structural steel, this can require significantly larger conductors.
              </p>

              <div className="bg-white/5 rounded-xl p-6 my-6">
                <h3 className="font-semibold mb-3">When Structural Steel Bonding Is Required</h3>
                <p className="text-white/70 mb-3">
                  The key phrase in 250.104(C) is &quot;likely to become energized.&quot; Structural steel is considered likely to become energized when:
                </p>
                <ul className="space-y-2 text-white/70 text-sm">
                  <li>&#8226; Electrical equipment is mounted directly to the steel</li>
                  <li>&#8226; Conduits or raceways are attached to the steel</li>
                  <li>&#8226; Electrical cables pass through or along steel members</li>
                  <li>&#8226; Luminaires are supported by the structural steel</li>
                  <li>&#8226; Motors or other equipment is in contact with the steel</li>
                </ul>
              </div>

              <div className="bg-orange-900/30 rounded-xl p-6 my-6">
                <h3 className="font-semibold text-orange-400 mb-2">Structural Steel as Grounding Electrode</h3>
                <p className="text-white/70">
                  Note that structural steel that qualifies as a grounding electrode per NEC 250.52(A)(2) is already part of the grounding electrode system and does not need separate bonding under 250.104(C). The steel qualifies as an electrode when it has at least 10 feet in direct contact with the earth or is bonded to a concrete-encased electrode.
                </p>
              </div>
            </section>

            <section id="pool-bonding" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Swimming Pool Bonding (NEC 680.26)</h2>
              <p className="text-white/80 mb-4">
                Swimming pool bonding is one of the most critical and detailed bonding requirements in the NEC. <strong>NEC 680.26</strong> requires equipotential bonding around pools to eliminate voltage gradients that could shock swimmers.
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-3">What Must Be Bonded</h3>
              <div className="bg-cyan-900/30 rounded-xl p-6 my-6">
                <ul className="space-y-2 text-white/70">
                  <li><strong>1. Pool structure:</strong> Conductive pool shell, reinforcing steel, or copper conductor grid</li>
                  <li><strong>2. Perimeter surfaces:</strong> Unpainted metal parts within 3 feet horizontally of the pool edge</li>
                  <li><strong>3. Metal fittings:</strong> All metal fittings within or attached to the pool structure (drain covers, skimmers, rails)</li>
                  <li><strong>4. Electrical equipment:</strong> Metal parts of all electrical equipment within 5 feet of the pool edge</li>
                  <li><strong>5. Metal wiring methods:</strong> Metal raceways, cables, and piping carrying circuits for pool equipment</li>
                  <li><strong>6. Fixed metal parts:</strong> Ladders, handrails, diving board supports, and similar components</li>
                  <li><strong>7. Underwater luminaires:</strong> All metal forming shells and no-niche luminaire bodies</li>
                  <li><strong>8. Water heater and filter enclosures:</strong> All metal parts of pool-associated equipment</li>
                </ul>
              </div>

              <h3 className="text-xl font-semibold mt-6 mb-3">Pool Bonding Conductor Requirements</h3>
              <ul className="list-disc list-inside text-white/70 space-y-2 mb-6">
                <li>Minimum <strong>8 AWG solid copper</strong> conductor</li>
                <li>May be insulated, covered, or bare</li>
                <li>Connections must use <strong>listed pressure connectors</strong> (no solder)</li>
                <li>Must form a continuous path connecting all bonded items</li>
              </ul>

              <h3 className="text-xl font-semibold mt-6 mb-3">Equipotential Bonding Grid Options</h3>
              <div className="grid md:grid-cols-2 gap-4 my-6">
                <div className="bg-white/5 rounded-xl p-6">
                  <h4 className="font-semibold text-cyan-400 mb-2">Structural Reinforcing Steel</h4>
                  <p className="text-white/70 text-sm">
                    If the pool deck has unencapsulated structural reinforcing steel, it can serve as the equipotential bonding grid by tying the steel together within the 3-foot perimeter zone.
                  </p>
                </div>
                <div className="bg-white/5 rounded-xl p-6">
                  <h4 className="font-semibold text-cyan-400 mb-2">Copper Conductor Grid</h4>
                  <p className="text-white/70 text-sm">
                    A minimum 8 AWG bare solid copper grid at 12-inch by 12-inch maximum spacing, installed within the 3-foot perimeter zone around the pool and 4-6 inches below the deck surface.
                  </p>
                </div>
              </div>

              <div className="bg-red-900/20 border border-red-500/30 rounded-xl p-6 my-6">
                <h3 className="font-semibold text-red-400 mb-2">Pool Bonding Is NOT Grounding</h3>
                <p className="text-white/70">
                  The equipotential bonding grid does not need to be connected to earth or to the equipment grounding conductor system. Its purpose is solely to equalize voltage potential around the pool. However, all pool electrical equipment must also be grounded per standard NEC requirements. The bonding conductor is in addition to the equipment grounding conductor.
                </p>
              </div>
            </section>

            <section id="jumper-sizing" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Bonding Jumper Sizing</h2>
              <p className="text-white/80 mb-4">
                The NEC uses different sizing methods depending on the type of bonding jumper and where it is installed. Understanding which table to use is critical for code compliance.
              </p>

              <div className="overflow-x-auto my-6">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-white/20">
                      <th className="text-left py-3 px-4 text-white/60">Bonding Jumper Type</th>
                      <th className="text-left py-3 px-4 text-white/60">Sizing Method</th>
                      <th className="text-left py-3 px-4 text-white/60">NEC Reference</th>
                    </tr>
                  </thead>
                  <tbody className="text-white/80">
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">Main bonding jumper (MBJ)</td>
                      <td className="py-3 px-4 text-white/60">Table 250.66 or 12.5% of largest service conductor</td>
                      <td className="py-3 px-4 font-mono">250.28(D)</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">Supply-side bonding jumper (in raceway)</td>
                      <td className="py-3 px-4 text-white/60">Table 250.66</td>
                      <td className="py-3 px-4 font-mono">250.102(C)(1)</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">Supply-side bonding jumper (outside raceway)</td>
                      <td className="py-3 px-4 text-white/60">Table 250.66 or 12.5% of largest service conductor</td>
                      <td className="py-3 px-4 font-mono">250.102(C)(1)</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">Equipment bonding jumper (load side)</td>
                      <td className="py-3 px-4 text-white/60">Table 250.122 based on OCPD</td>
                      <td className="py-3 px-4 font-mono">250.102(D)</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">Water pipe bonding jumper</td>
                      <td className="py-3 px-4 text-white/60">Table 250.66 based on service conductor size</td>
                      <td className="py-3 px-4 font-mono">250.104(A)</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">Gas pipe bonding jumper</td>
                      <td className="py-3 px-4 text-white/60">Table 250.122 based on OCPD of circuit likely to energize</td>
                      <td className="py-3 px-4 font-mono">250.104(B)</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4">Pool bonding conductor</td>
                      <td className="py-3 px-4 text-white/60">Minimum 8 AWG solid copper</td>
                      <td className="py-3 px-4 font-mono">680.26(B)</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="bg-purple-900/30 rounded-xl p-6 my-6">
                <h3 className="font-semibold text-purple-400 mb-2">Quick Reference: Table 250.66 vs 250.122</h3>
                <p className="text-white/70">
                  <strong>Table 250.66</strong> sizes conductors based on the service entrance conductor size. It applies to the GEC, water pipe bonds, supply-side bonding jumpers, and the MBJ. <strong>Table 250.122</strong> sizes conductors based on the overcurrent device rating. It applies to EGCs, load-side equipment bonding jumpers, gas pipe bonds, and structural steel bonds.
                </p>
              </div>
            </section>

            <section id="water-meter" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Bonding Around Water Meters</h2>
              <p className="text-white/80 mb-4">
                One of the most commonly missed bonding details involves the water meter. Water meters are frequently removed for repair or replacement, and many have nonconductive internal components that interrupt the bonding path.
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-3">Why a Jumper Is Needed</h3>
              <p className="text-white/80 mb-4">
                Even when a metal water pipe is used as a grounding electrode per NEC 250.52(A)(1) and is bonded per 250.104(A), the water meter creates a potential break in the electrical path. If the meter is removed, the entire downstream piping system loses its bonding connection. A bonding jumper around the meter maintains continuity regardless of meter status.
              </p>

              <div className="bg-white/5 rounded-xl p-6 my-6">
                <h3 className="font-semibold mb-3">NEC 250.68(B) - Bonding Around Meters</h3>
                <p className="text-white/70 mb-3">
                  NEC 250.68(B) requires that where a metal water pipe is used as a grounding electrode, bonding must be provided around any equipment that is likely to be disconnected (such as water meters, filtering equipment, or similar equipment). The bonding jumper must be:
                </p>
                <ul className="space-y-2 text-white/70 text-sm">
                  <li>&#8226; Long enough to allow removal of the meter without disturbing the jumper</li>
                  <li>&#8226; Attached to the piping on both sides of the meter using listed clamps</li>
                  <li>&#8226; Sized the same as the GEC per Table 250.66</li>
                  <li>&#8226; Accessible for inspection and maintenance</li>
                </ul>
              </div>

              <div className="bg-orange-900/30 rounded-xl p-6 my-6">
                <h3 className="font-semibold text-orange-400 mb-2">Dielectric Unions and Water Heaters</h3>
                <p className="text-white/70">
                  Dielectric unions (used to prevent galvanic corrosion between copper and steel piping) also break the bonding path. When a dielectric union is installed at a water heater, a bonding jumper must be installed around the union to maintain continuity. This is one of the most common bonding deficiencies found during inspections.
                </p>
              </div>
            </section>

            <section id="separately-derived" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Bonding for Separately Derived Systems</h2>
              <p className="text-white/80 mb-4">
                <strong>NEC 250.104(D)</strong> addresses bonding requirements for separately derived systems (such as transformers and generators that have no direct electrical connection to the service conductors). Metal water piping and structural steel in the area served by a separately derived system must be bonded to that system.
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-3">Key Requirements</h3>
              <ul className="list-disc list-inside text-white/70 space-y-2 mb-6">
                <li><strong>System bonding jumper:</strong> Required to bond the grounded conductor to the equipment grounding conductor and to the enclosure at the separately derived system (NEC 250.30(A)(1))</li>
                <li><strong>Grounding electrode conductor:</strong> Required from the separately derived system to a grounding electrode (NEC 250.30(A)(4))</li>
                <li><strong>Metal water piping:</strong> In the area served must be bonded to the grounded conductor at the separately derived system</li>
                <li><strong>Structural steel:</strong> In the area served must be bonded if it qualifies under 250.104(C)</li>
              </ul>

              <div className="bg-white/5 rounded-xl p-6 my-6">
                <h3 className="font-semibold mb-3">Sizing for Separately Derived Systems</h3>
                <p className="text-white/70">
                  The bonding jumper for water piping and structural steel at a separately derived system is sized per Table 250.66 based on the size of the derived phase conductors. For example, if the transformer secondary conductors are 1/0 AWG copper, the bonding jumper to the water piping must be at least 6 AWG copper.
                </p>
              </div>

              <div className="bg-cyan-900/30 rounded-xl p-6 my-6">
                <h3 className="font-semibold text-cyan-400 mb-2">Common Application</h3>
                <p className="text-white/70">
                  A common scenario is a 480V to 208/120V step-down transformer in a commercial building. The metal water piping within the area served by this transformer must be bonded to the transformer&apos;s grounded conductor (secondary neutral). If you only bond the water piping at the main service, a fault in the area served by the transformer may not have an adequate return path through the water piping bonding system.
                </p>
              </div>
            </section>

            <section id="common-violations" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Common Bonding Violations</h2>
              <p className="text-white/80 mb-4">
                These are the bonding deficiencies most frequently cited during electrical inspections:
              </p>

              <div className="space-y-4 my-6">
                <div className="bg-red-900/20 border border-red-500/30 rounded-xl p-6">
                  <h3 className="font-semibold text-red-400 mb-2">1. Missing Water Pipe Bond</h3>
                  <p className="text-white/70 text-sm">
                    The most common violation. Metal water piping enters the building but no bonding jumper is installed to the service equipment or grounding electrode system. This leaves the entire piping system as a potential shock hazard during a fault.
                  </p>
                </div>

                <div className="bg-red-900/20 border border-red-500/30 rounded-xl p-6">
                  <h3 className="font-semibold text-red-400 mb-2">2. No Bonding Jumper Around Water Meter</h3>
                  <p className="text-white/70 text-sm">
                    The water pipe bond exists, but no jumper is installed around the water meter. When the utility removes the meter, the entire downstream piping system and any grounding electrode connection through the water pipe is interrupted.
                  </p>
                </div>

                <div className="bg-red-900/20 border border-red-500/30 rounded-xl p-6">
                  <h3 className="font-semibold text-red-400 mb-2">3. CSST Without Dedicated Bonding</h3>
                  <p className="text-white/70 text-sm">
                    CSST gas piping installed without the manufacturer-required bonding conductor (typically 6 AWG to the grounding electrode system). Relying on the appliance EGC alone does not meet manufacturer installation requirements for CSST.
                  </p>
                </div>

                <div className="bg-red-900/20 border border-red-500/30 rounded-xl p-6">
                  <h3 className="font-semibold text-red-400 mb-2">4. Undersized Bonding Jumpers</h3>
                  <p className="text-white/70 text-sm">
                    Using the wrong sizing table. Water pipe bonds use Table 250.66 (based on service conductor size), while gas pipe bonds use Table 250.122 (based on OCPD rating). Mixing these up results in undersized or oversized conductors.
                  </p>
                </div>

                <div className="bg-red-900/20 border border-red-500/30 rounded-xl p-6">
                  <h3 className="font-semibold text-red-400 mb-2">5. Bonding Lost at Dielectric Unions</h3>
                  <p className="text-white/70 text-sm">
                    Dielectric unions at water heaters, expansion tanks, or where dissimilar metals meet interrupt the bonding path. No bonding jumper is installed around the union to maintain electrical continuity.
                  </p>
                </div>

                <div className="bg-red-900/20 border border-red-500/30 rounded-xl p-6">
                  <h3 className="font-semibold text-red-400 mb-2">6. Improper Clamps or Connections</h3>
                  <p className="text-white/70 text-sm">
                    Using non-listed clamps, hose clamps, or sheet metal screws for bonding connections. All bonding connections must use listed connectors suitable for the conductor size and pipe material. Pool bonding connections must never use solder.
                  </p>
                </div>

                <div className="bg-red-900/20 border border-red-500/30 rounded-xl p-6">
                  <h3 className="font-semibold text-red-400 mb-2">7. Missing Pool Equipotential Bonding</h3>
                  <p className="text-white/70 text-sm">
                    Pool installed without proper equipotential bonding grid, or bonding omitted on metal ladders, handrails, reinforcing steel, or equipment within 5 feet. This is a life-safety violation that can result in electrocution.
                  </p>
                </div>

                <div className="bg-red-900/20 border border-red-500/30 rounded-xl p-6">
                  <h3 className="font-semibold text-red-400 mb-2">8. Bonding to Gas Piping as Grounding Electrode</h3>
                  <p className="text-white/70 text-sm">
                    Using the gas piping system as a grounding electrode, which is explicitly prohibited by NEC 250.52(B). The gas pipe must be bonded for safety, but it cannot serve as part of the grounding electrode system.
                  </p>
                </div>
              </div>
            </section>

            <section id="inspection-tips" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Inspection Tips</h2>
              <p className="text-white/80 mb-4">
                Use these tips to verify your bonding installations before calling for inspection, or to check bonding on existing systems:
              </p>

              <div className="bg-white/5 rounded-xl p-6 my-6">
                <h3 className="font-semibold text-green-400 mb-4">Bonding Inspection Checklist</h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <span className="text-green-400 mt-1">&#9744;</span>
                    <span className="text-white/70">Metal water piping bonded to service equipment, GEC, or grounding electrode</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-green-400 mt-1">&#9744;</span>
                    <span className="text-white/70">Water pipe bonding jumper sized per Table 250.66</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-green-400 mt-1">&#9744;</span>
                    <span className="text-white/70">Bonding jumper installed around water meter with listed clamps on both sides</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-green-400 mt-1">&#9744;</span>
                    <span className="text-white/70">Bonding jumper around dielectric unions at water heater and other equipment</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-green-400 mt-1">&#9744;</span>
                    <span className="text-white/70">Gas piping bonded per 250.104(B) or by EGC of appliance circuit</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-green-400 mt-1">&#9744;</span>
                    <span className="text-white/70">CSST bonded with minimum 6 AWG copper to grounding electrode system per manufacturer</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-green-400 mt-1">&#9744;</span>
                    <span className="text-white/70">Structural steel bonded where likely to become energized</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-green-400 mt-1">&#9744;</span>
                    <span className="text-white/70">All bonding connections use listed clamps and connectors</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-green-400 mt-1">&#9744;</span>
                    <span className="text-white/70">Bonding conductors continuous with no splices in concealed locations</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-green-400 mt-1">&#9744;</span>
                    <span className="text-white/70">Pool equipotential bonding grid installed (8 AWG solid copper minimum)</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-green-400 mt-1">&#9744;</span>
                    <span className="text-white/70">All pool metal components bonded (ladders, rails, lights, equipment, structure)</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-green-400 mt-1">&#9744;</span>
                    <span className="text-white/70">Separately derived systems have bonding to metal piping and structural steel in area served</span>
                  </div>
                </div>
              </div>

              <h3 className="text-xl font-semibold mt-6 mb-3">Testing Bonding Connections</h3>
              <p className="text-white/80 mb-4">
                Visual inspection is the primary method, but you can also verify bonding integrity with these techniques:
              </p>
              <ul className="list-disc list-inside text-white/70 space-y-2 mb-6">
                <li><strong>Continuity test:</strong> Use a low-resistance ohmmeter to verify continuity between bonded metal systems and the service equipment ground bus. Resistance should be very low (typically under 1 ohm).</li>
                <li><strong>Voltage test:</strong> Measure voltage between the bonded metal system and a known ground reference. Any measurable voltage indicates a potential bonding problem.</li>
                <li><strong>Visual inspection:</strong> Verify clamps are tight, conductors are properly sized, and no connections have corroded or loosened over time.</li>
                <li><strong>Impedance test:</strong> For critical bonding paths (like pool bonding), a ground impedance tester can verify the low-impedance path from equipment to the source.</li>
              </ul>

              <div className="bg-purple-900/30 rounded-xl p-6 my-6">
                <h3 className="font-semibold text-purple-400 mb-2">Pro Tip: Document Everything</h3>
                <p className="text-white/70">
                  Take photos of all bonding connections before they are covered by drywall, concrete, or insulation. This documentation is invaluable for inspections, future maintenance, and troubleshooting. Many inspectors appreciate seeing photos of concealed bonding connections as evidence of proper installation.
                </p>
              </div>
            </section>

            {/* CTA Section */}
            <section className="bg-gradient-to-r from-purple-900/30 to-cyan-900/30 rounded-2xl p-8 md:p-12 my-12 border border-purple-500/20">
              <div className="text-center">
                <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-1.5 rounded-full mb-4">
                  <span className="text-sm text-white/80">&#9733; Free on iOS &amp; Android</span>
                </div>
                <h2 className="text-2xl md:text-3xl font-display font-bold mb-4">
                  Your Electrical Reference, Powered by AI
                </h2>
                <p className="text-white/70 mb-8 max-w-2xl mx-auto">
                  Join thousands of electricians using Ampora for instant NEC code answers, electrical calculations, and AI-powered troubleshooting — right from your phone.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <a
                    href="/get"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-black font-semibold rounded-full hover:bg-white/90 transition-colors"
                  >
                    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/></svg><svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor" aria-hidden="true"><path d="M3 20.5V3.5c0-.59.34-1.11.84-1.35L13.69 12 3.84 21.85c-.5-.25-.84-.76-.84-1.35zm13.81-5.38L6.05 21.34l8.49-8.49 2.27 2.27zm3.35-4.31c.34.27.59.69.59 1.19 0 .5-.22.9-.57 1.18l-2.29 1.32L15.39 12l2.5-2.5 2.27 1.31zM6.05 2.66L16.81 8.88l-2.27 2.27L6.05 2.66z"/></svg>
                    Download Ampora Free
                  </a>
                  <Link
                    href="/features/nec-code-reference"
                    className="px-8 py-4 bg-white/10 text-white font-semibold rounded-full hover:bg-white/20 transition-colors text-center"
                  >
                    Explore Features
                  </Link>
                </div>
              </div>
            </section>

            {/* Related Articles */}
            <section className="mt-12">
              <h2 className="text-2xl font-display font-bold mb-6">Related Articles</h2>
              <div className="grid md:grid-cols-2 gap-4">
                <Link href="/blog/electrical-grounding-vs-bonding" className="bg-white/5 hover:bg-white/10 rounded-xl p-6 transition-colors">
                  <span className="text-purple-400 text-sm">NEC Code</span>
                  <h3 className="font-semibold mt-2">Grounding vs Bonding: Understanding the Critical Difference</h3>
                </Link>
                <Link href="/blog/nec-article-250-grounding-guide" className="bg-white/5 hover:bg-white/10 rounded-xl p-6 transition-colors">
                  <span className="text-purple-400 text-sm">NEC Code</span>
                  <h3 className="font-semibold mt-2">NEC Article 250: Complete Grounding & Bonding Guide</h3>
                </Link>
                <Link href="/blog/swimming-pool-electrical-nec-680" className="bg-white/5 hover:bg-white/10 rounded-xl p-6 transition-colors">
                  <span className="text-purple-400 text-sm">NEC Code</span>
                  <h3 className="font-semibold mt-2">NEC Article 680: Swimming Pool Electrical Requirements</h3>
                </Link>
                <Link href="/blog/electrical-inspection-checklist" className="bg-white/5 hover:bg-white/10 rounded-xl p-6 transition-colors">
                  <span className="text-green-400 text-sm">Inspections</span>
                  <h3 className="font-semibold mt-2">Electrical Inspection Checklist</h3>
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
          <p className="text-sm text-white/40">&copy; 2025 Ampora Labs</p>
        </div>
      </footer>
    </main>
  );
}
