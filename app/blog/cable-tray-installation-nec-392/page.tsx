import { Metadata } from "next";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import { BreadcrumbJsonLd, BlogPostingJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Cable Tray Systems: NEC Article 392 Installation Guide",
  description: "Complete guide to cable tray systems per NEC Article 392. Learn about ladder, solid bottom, ventilated trough, wire mesh, and channel trays, fill calculations, permitted cables, support requirements, and grounding for industrial and commercial installations.",
  keywords: [
    "cable tray installation",
    "NEC Article 392",
    "cable tray fill calculation",
    "ladder cable tray",
    "ventilated trough cable tray",
    "cable tray grounding",
    "cable tray support spacing",
    "cable tray types",
    "industrial cable tray",
    "cable tray NEC requirements",
  ],
  alternates: {
    canonical: "https://amporalabs.com/blog/cable-tray-installation-nec-392",
  },
  openGraph: {
    title: "Cable Tray Systems: NEC Article 392 Installation Guide - Ampora",
    description: "Master cable tray installation with NEC Article 392 requirements for types, fill calculations, support, and grounding.",
    url: "https://amporalabs.com/blog/cable-tray-installation-nec-392",
    type: "article",
    publishedTime: "2025-05-18",
  },
};

function HeroIllustration() {
  return (
    <svg viewBox="0 0 400 180" className="w-full h-40 md:h-48" aria-label="Cable tray system with cables illustration">
      {/* Ladder tray side rails */}
      <rect x="30" y="50" width="340" height="4" rx="1" fill="#6b7280" stroke="#9ca3af" strokeWidth="0.5"/>
      <rect x="30" y="100" width="340" height="4" rx="1" fill="#6b7280" stroke="#9ca3af" strokeWidth="0.5"/>

      {/* Ladder rungs */}
      {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((i) => (
        <rect key={i} x={45 + i * 30} y="54" width="3" height="46" rx="0.5" fill="#4b5563" stroke="#6b7280" strokeWidth="0.5"/>
      ))}

      {/* Cables in tray - power cables (large) */}
      <g>
        <circle cx="80" cy="72" r="8" fill="#1f2937" stroke="#ef4444" strokeWidth="1.5"/>
        <circle cx="80" cy="72" r="4" fill="#b87333"/>
        <circle cx="100" cy="72" r="8" fill="#1f2937" stroke="#ef4444" strokeWidth="1.5"/>
        <circle cx="100" cy="72" r="4" fill="#b87333"/>
        <circle cx="120" cy="72" r="8" fill="#1f2937" stroke="#ef4444" strokeWidth="1.5"/>
        <circle cx="120" cy="72" r="4" fill="#b87333"/>
      </g>

      {/* Control cables (medium) */}
      <g>
        <circle cx="155" cy="75" r="5" fill="#1f2937" stroke="#3b82f6" strokeWidth="1.5"/>
        <circle cx="155" cy="75" r="2.5" fill="#b87333"/>
        <circle cx="168" cy="75" r="5" fill="#1f2937" stroke="#3b82f6" strokeWidth="1.5"/>
        <circle cx="168" cy="75" r="2.5" fill="#b87333"/>
        <circle cx="181" cy="75" r="5" fill="#1f2937" stroke="#3b82f6" strokeWidth="1.5"/>
        <circle cx="181" cy="75" r="2.5" fill="#b87333"/>
        <circle cx="194" cy="75" r="5" fill="#1f2937" stroke="#3b82f6" strokeWidth="1.5"/>
        <circle cx="194" cy="75" r="2.5" fill="#b87333"/>
      </g>

      {/* Signal cables (small) */}
      <g>
        <circle cx="225" cy="78" r="3" fill="#1f2937" stroke="#22c55e" strokeWidth="1"/>
        <circle cx="234" cy="78" r="3" fill="#1f2937" stroke="#22c55e" strokeWidth="1"/>
        <circle cx="243" cy="78" r="3" fill="#1f2937" stroke="#22c55e" strokeWidth="1"/>
        <circle cx="252" cy="78" r="3" fill="#1f2937" stroke="#22c55e" strokeWidth="1"/>
        <circle cx="261" cy="78" r="3" fill="#1f2937" stroke="#22c55e" strokeWidth="1"/>
        <circle cx="270" cy="78" r="3" fill="#1f2937" stroke="#22c55e" strokeWidth="1"/>
      </g>

      {/* Second layer of cables */}
      <circle cx="90" cy="88" r="6" fill="#1f2937" stroke="#f97316" strokeWidth="1.5"/>
      <circle cx="90" cy="88" r="3" fill="#b87333"/>
      <circle cx="106" cy="88" r="6" fill="#1f2937" stroke="#f97316" strokeWidth="1.5"/>
      <circle cx="106" cy="88" r="3" fill="#b87333"/>

      {/* Support bracket (left) */}
      <rect x="25" y="40" width="8" height="70" rx="1" fill="#374151" stroke="#6b7280" strokeWidth="1"/>
      <rect x="15" y="35" width="28" height="8" rx="1" fill="#374151" stroke="#6b7280" strokeWidth="1"/>

      {/* Support bracket (right) */}
      <rect x="365" y="40" width="8" height="70" rx="1" fill="#374151" stroke="#6b7280" strokeWidth="1"/>
      <rect x="355" y="35" width="28" height="8" rx="1" fill="#374151" stroke="#6b7280" strokeWidth="1"/>

      {/* Labels */}
      <text x="100" y="30" textAnchor="middle" fill="#ef4444" fontSize="8" fontWeight="bold">POWER</text>
      <text x="175" y="30" textAnchor="middle" fill="#3b82f6" fontSize="8" fontWeight="bold">CONTROL</text>
      <text x="248" y="30" textAnchor="middle" fill="#22c55e" fontSize="8" fontWeight="bold">SIGNAL</text>

      {/* Arrows from labels to cables */}
      <line x1="100" y1="33" x2="100" y2="60" stroke="#ef4444" strokeWidth="0.5" strokeDasharray="2,2"/>
      <line x1="175" y1="33" x2="175" y2="66" stroke="#3b82f6" strokeWidth="0.5" strokeDasharray="2,2"/>
      <line x1="248" y1="33" x2="248" y2="72" stroke="#22c55e" strokeWidth="0.5" strokeDasharray="2,2"/>

      {/* NEC 392 badge */}
      <rect x="290" y="120" width="90" height="28" rx="6" fill="#7c3aed" fillOpacity="0.3" stroke="#a78bfa" strokeWidth="1"/>
      <text x="335" y="138" textAnchor="middle" fill="#a78bfa" fontSize="9" fontWeight="bold">NEC 392</text>

      {/* Tray type label */}
      <rect x="100" y="130" width="120" height="22" rx="4" fill="#1f2937" stroke="#6b7280" strokeWidth="1"/>
      <text x="160" y="145" textAnchor="middle" fill="#9ca3af" fontSize="8" fontWeight="bold">LADDER CABLE TRAY</text>

      {/* Ground wire along tray */}
      <line x1="30" y1="108" x2="370" y2="108" stroke="#22c55e" strokeWidth="1.5" strokeDasharray="4,3"/>
      <text x="340" y="118" textAnchor="middle" fill="#22c55e" fontSize="6">EGC</text>
    </svg>
  );
}

export default function CableTrayInstallationNEC392Page() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navigation />
      <div className="pt-20">
        <BreadcrumbJsonLd
          items={[
            { name: "Home", url: "https://amporalabs.com" },
            { name: "Blog", url: "https://amporalabs.com/blog" },
            { name: "Cable Tray Installation NEC 392", url: "https://amporalabs.com/blog/cable-tray-installation-nec-392" },
          ]}
        />
        <BlogPostingJsonLd
          headline="Cable Tray Systems: NEC Article 392 Installation Guide"
          description="Complete guide to cable tray systems per NEC Article 392 covering types, fill calculations, permitted cables, support, and grounding requirements."
          datePublished="2025-05-18"
          dateModified="2025-05-18"
          url="https://amporalabs.com/blog/cable-tray-installation-nec-392"
          wordCount={3800}
          keywords={["cable tray", "NEC 392", "ladder tray", "cable tray fill", "cable tray grounding"]}
        />

        <article className="max-w-4xl mx-auto px-6 py-12">
          {/* Breadcrumb */}
          <nav className="text-sm text-white/60 mb-8">
            <Link href="/" className="hover:text-white">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/blog" className="hover:text-white">Blog</Link>
            <span className="mx-2">/</span>
            <span className="text-white">Cable Tray Installation NEC 392</span>
          </nav>

          {/* Article Header */}
          <header className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <span className="px-3 py-1 bg-purple-600/30 text-purple-300 text-sm font-medium rounded-full">
                NEC Code
              </span>
              <span className="text-white/40 text-sm">13 min read</span>
              <span className="text-white/40 text-sm">May 18, 2025</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6 leading-tight">
              Cable Tray Systems: NEC Article 392 Installation Guide
            </h1>
            <p className="text-xl text-white/70">
              Cable tray is one of the most efficient wiring methods for industrial and commercial facilities. This guide covers every cable tray type recognized by the NEC, fill calculations, permitted cables, support spacing, grounding, and the common installation mistakes that lead to failed inspections.
            </p>
          </header>

          <div className="mb-12 bg-gradient-to-br from-purple-900/20 to-cyan-900/20 rounded-2xl p-6 border border-white/10">
            <HeroIllustration />
          </div>

          {/* Table of Contents */}
          <div className="bg-white/5 rounded-2xl p-6 mb-12">
            <h2 className="font-display font-bold mb-4">In This Guide</h2>
            <ul className="space-y-2 text-white/70">
              <li><a href="#what-is-cable-tray" className="hover:text-purple-400">What Is Cable Tray?</a></li>
              <li><a href="#cable-tray-types" className="hover:text-purple-400">Cable Tray Types</a></li>
              <li><a href="#nec-392-overview" className="hover:text-purple-400">NEC Article 392 Overview</a></li>
              <li><a href="#permitted-cables" className="hover:text-purple-400">Permitted Cable Types</a></li>
              <li><a href="#fill-calculations" className="hover:text-purple-400">Fill Calculations</a></li>
              <li><a href="#fill-area-tables" className="hover:text-purple-400">Fill Area Tables</a></li>
              <li><a href="#support-and-spacing" className="hover:text-purple-400">Support and Spacing Requirements</a></li>
              <li><a href="#grounding-and-bonding" className="hover:text-purple-400">Grounding and Bonding</a></li>
              <li><a href="#industrial-vs-commercial" className="hover:text-purple-400">Industrial vs Commercial Applications</a></li>
              <li><a href="#common-mistakes" className="hover:text-purple-400">Common Installation Mistakes</a></li>
            </ul>
          </div>

          {/* Article Content */}
          <div className="prose prose-invert prose-lg max-w-none">

            <section id="what-is-cable-tray" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">What Is Cable Tray?</h2>
              <p className="text-white/80 mb-4">
                <strong>Cable tray</strong> is a structural support system consisting of a rigid framework used to securely fasten and support cables and raceways. Unlike conduit systems where cables are enclosed inside a pipe, cable tray provides an open or semi-open support structure that allows cables to be laid in or on the tray for routing throughout a facility.
              </p>
              <p className="text-white/80 mb-4">
                NEC Article 392 defines cable tray as &quot;a unit or assembly of units or sections and associated fittings forming a structural system used to securely fasten or support cables and raceways.&quot; Cable tray itself is not classified as a raceway under the NEC, except when used as specified in specific articles.
              </p>
              <p className="text-white/80 mb-4">
                Cable tray systems offer several advantages over traditional conduit installations:
              </p>
              <ul className="list-disc list-inside text-white/70 space-y-2 mb-4">
                <li><strong>Faster installation</strong> - Cable tray installs significantly faster than running individual conduit circuits</li>
                <li><strong>Easy cable additions</strong> - New cables can be added without pulling through conduit</li>
                <li><strong>Better heat dissipation</strong> - Open designs allow superior ventilation around cables</li>
                <li><strong>Lower material cost</strong> - One tray supports many cables that would require separate conduits</li>
                <li><strong>Flexibility</strong> - Cables can be rerouted or replaced without dismantling the support system</li>
                <li><strong>Visual inspection</strong> - Cable condition is easily checked without opening enclosures</li>
              </ul>
            </section>

            <section id="cable-tray-types" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Cable Tray Types</h2>
              <p className="text-white/80 mb-4">
                NEC Article 392 recognizes five distinct types of cable tray, each designed for specific applications and cable types. Selecting the correct tray type is critical for code compliance and long-term performance.
              </p>

              <div className="space-y-6 my-6">
                <div className="bg-purple-900/20 rounded-xl p-6 border border-purple-500/30">
                  <h3 className="font-semibold text-purple-400 mb-3">Ladder Cable Tray</h3>
                  <p className="text-white/70 mb-3">
                    Consists of two longitudinal side rails connected by individual transverse rungs, resembling a ladder laid on its side. This is the most common type used in industrial facilities.
                  </p>
                  <ul className="list-disc list-inside text-white/60 text-sm space-y-1">
                    <li>Best for long straight runs with large power cables</li>
                    <li>Excellent ventilation due to open rung design</li>
                    <li>Available in widths from 6 to 36 inches</li>
                    <li>Rung spacing typically 6, 9, 12, or 18 inches</li>
                    <li>Highest load capacity of all tray types</li>
                    <li>Standard lengths of 12, 20, or 24 feet</li>
                  </ul>
                </div>

                <div className="bg-cyan-900/20 rounded-xl p-6 border border-cyan-500/30">
                  <h3 className="font-semibold text-cyan-400 mb-3">Solid Bottom Cable Tray</h3>
                  <p className="text-white/70 mb-3">
                    Features a continuous solid bottom with side rails and no openings in the bottom surface. Provides complete cable protection but reduces ventilation.
                  </p>
                  <ul className="list-disc list-inside text-white/60 text-sm space-y-1">
                    <li>Best where cables need physical protection from falling debris</li>
                    <li>Required in some clean-room and food processing environments</li>
                    <li>Reduced heat dissipation - apply derating factors per NEC 392.80</li>
                    <li>Available with and without covers</li>
                    <li>Good for data and communication cables</li>
                    <li>May require knockouts for cable drops</li>
                  </ul>
                </div>

                <div className="bg-green-900/20 rounded-xl p-6 border border-green-500/30">
                  <h3 className="font-semibold text-green-400 mb-3">Ventilated Trough Cable Tray</h3>
                  <p className="text-white/70 mb-3">
                    Has a ventilated bottom within side rails. The bottom surface contains openings (typically elongated slots or perforations) that provide airflow while still offering more cable support than ladder tray.
                  </p>
                  <ul className="list-disc list-inside text-white/60 text-sm space-y-1">
                    <li>Good balance between ventilation and cable support</li>
                    <li>Supports smaller cables that could sag between ladder rungs</li>
                    <li>Commonly used for control and instrumentation cables</li>
                    <li>Available in widths from 6 to 36 inches</li>
                    <li>Bottom openings must be large enough for ventilation but small enough to support cables</li>
                  </ul>
                </div>

                <div className="bg-yellow-900/20 rounded-xl p-6 border border-yellow-500/30">
                  <h3 className="font-semibold text-yellow-400 mb-3">Wire Mesh Cable Tray</h3>
                  <p className="text-white/70 mb-3">
                    Constructed from welded wire mesh forming a basket-like tray. Lightweight and flexible, with excellent ventilation properties.
                  </p>
                  <ul className="list-disc list-inside text-white/60 text-sm space-y-1">
                    <li>Ideal for data centers and telecommunications rooms</li>
                    <li>Excellent airflow around cables from all directions</li>
                    <li>Easy to cut and modify in the field</li>
                    <li>Lower load capacity than ladder or trough types</li>
                    <li>Cables can be attached at any point using cable ties</li>
                    <li>Commonly used for Category cables, fiber optic, and low-voltage wiring</li>
                  </ul>
                </div>

                <div className="bg-red-900/20 rounded-xl p-6 border border-red-500/30">
                  <h3 className="font-semibold text-red-400 mb-3">Channel Cable Tray</h3>
                  <p className="text-white/70 mb-3">
                    A small, one-piece channel designed for a limited number of cables. Typically has a ventilated or solid bottom and is available in widths of 3 to 6 inches.
                  </p>
                  <ul className="list-disc list-inside text-white/60 text-sm space-y-1">
                    <li>Best for small cable bundles or single circuit runs</li>
                    <li>Often used as drops from larger tray systems</li>
                    <li>Can be mounted on walls, under raised floors, or above ceilings</li>
                    <li>Maximum width of 6 inches per NEC definition</li>
                    <li>Lower cost per foot but limited cable capacity</li>
                  </ul>
                </div>
              </div>
            </section>

            <section id="nec-392-overview" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">NEC Article 392 Overview</h2>
              <p className="text-white/80 mb-4">
                NEC Article 392 covers the installation, construction, and use of cable tray systems. The article is organized into the following key parts:
              </p>

              <div className="space-y-4 my-6">
                <div className="bg-white/5 rounded-xl p-4">
                  <p className="text-purple-400 font-semibold">392.1 - Scope</p>
                  <p className="text-white/60 text-sm mt-1">Cable tray systems including associated fittings. Applies to all cable tray types used as a support system for cables and raceways.</p>
                </div>
                <div className="bg-white/5 rounded-xl p-4">
                  <p className="text-purple-400 font-semibold">392.10 - Uses Permitted</p>
                  <p className="text-white/60 text-sm mt-1">Cable tray permitted as a support system for service-entrance conductors, feeders, branch circuits, communications, control, and signaling cables in specific installation conditions.</p>
                </div>
                <div className="bg-white/5 rounded-xl p-4">
                  <p className="text-purple-400 font-semibold">392.12 - Uses Not Permitted</p>
                  <p className="text-white/60 text-sm mt-1">Cable tray not permitted in hoistways or where subject to severe physical damage. Environmental and location restrictions apply.</p>
                </div>
                <div className="bg-white/5 rounded-xl p-4">
                  <p className="text-purple-400 font-semibold">392.22 - Number of Conductors or Cables</p>
                  <p className="text-white/60 text-sm mt-1">Fill calculation requirements based on cable type, tray type, and voltage. The core of cable tray sizing.</p>
                </div>
                <div className="bg-white/5 rounded-xl p-4">
                  <p className="text-purple-400 font-semibold">392.30 - Support and Installation</p>
                  <p className="text-white/60 text-sm mt-1">Mechanical support requirements, span distances, and installation methods for different tray types and loading conditions.</p>
                </div>
                <div className="bg-white/5 rounded-xl p-4">
                  <p className="text-purple-400 font-semibold">392.60 - Grounding and Bonding</p>
                  <p className="text-white/60 text-sm mt-1">Requirements for using cable tray as an equipment grounding conductor and bonding metallic sections together.</p>
                </div>
                <div className="bg-white/5 rounded-xl p-4">
                  <p className="text-purple-400 font-semibold">392.80 - Ampacity</p>
                  <p className="text-white/60 text-sm mt-1">Ampacity adjustment requirements for cables in cable tray, referencing NEC 310.15 and applicable derating factors.</p>
                </div>
              </div>

              <div className="bg-purple-900/30 rounded-xl p-6 my-6">
                <h3 className="font-semibold text-purple-400 mb-3">Key Requirement: Accessible Locations Only</h3>
                <p className="text-white/70">
                  Per NEC 392.10(A), cable tray installations must be in locations that are accessible (not above suspended ceilings unless specifically accessible by design). Cable tray must not be used in environmental air-handling spaces (plenums) unless the cables within it are listed for use in such spaces per NEC 300.22.
                </p>
              </div>
            </section>

            <section id="permitted-cables" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Permitted Cable Types</h2>
              <p className="text-white/80 mb-4">
                Not all cable types are permitted in cable tray. The NEC specifies which cables can be used based on voltage level and the type of installation. The following table summarizes permitted cable types per NEC 392.10.
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-3">Cables Permitted in Cable Tray (Over 600V)</h3>
              <ul className="list-disc list-inside text-white/70 space-y-2 mb-6">
                <li>Type MV (Medium Voltage) cable</li>
                <li>Type MC (Metal Clad) cable</li>
                <li>Single conductor cables 1/0 AWG and larger in ladder or ventilated trough tray only</li>
              </ul>

              <h3 className="text-xl font-semibold mt-6 mb-3">Cables Permitted in Cable Tray (600V or Less)</h3>
              <div className="overflow-x-auto my-6">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-white/20">
                      <th className="text-left py-3 px-4 text-white/60">Cable Type</th>
                      <th className="text-left py-3 px-4 text-white/60">Description</th>
                      <th className="text-left py-3 px-4 text-white/60">Tray Types</th>
                    </tr>
                  </thead>
                  <tbody className="text-white/80">
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-mono">MC</td>
                      <td className="py-3 px-4 text-white/60">Metal-Clad Cable</td>
                      <td className="py-3 px-4 text-white/60">All types</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-mono">MI</td>
                      <td className="py-3 px-4 text-white/60">Mineral-Insulated Cable</td>
                      <td className="py-3 px-4 text-white/60">All types</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-mono">TC</td>
                      <td className="py-3 px-4 text-white/60">Tray Cable (power and control)</td>
                      <td className="py-3 px-4 text-white/60">All types</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-mono">AC</td>
                      <td className="py-3 px-4 text-white/60">Armored Cable</td>
                      <td className="py-3 px-4 text-white/60">All types</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-mono">PLTC</td>
                      <td className="py-3 px-4 text-white/60">Power-Limited Tray Cable</td>
                      <td className="py-3 px-4 text-white/60">All types</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-mono">ITC</td>
                      <td className="py-3 px-4 text-white/60">Instrumentation Tray Cable</td>
                      <td className="py-3 px-4 text-white/60">All types</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-mono">NM, NMC</td>
                      <td className="py-3 px-4 text-white/60">Nonmetallic-Sheathed Cable</td>
                      <td className="py-3 px-4 text-white/60">Industrial only, with specific conditions per 392.10(B)(1)(c)</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-mono">SE, USE</td>
                      <td className="py-3 px-4 text-white/60">Service-Entrance Cable</td>
                      <td className="py-3 px-4 text-white/60">All types</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-mono">Single conductors</td>
                      <td className="py-3 px-4 text-white/60">1/0 AWG and larger (marked for tray use)</td>
                      <td className="py-3 px-4 text-white/60">Ladder, ventilated trough only</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="bg-orange-900/30 rounded-xl p-6 my-6">
                <p className="text-white/90">
                  <strong>Important:</strong> Single conductors smaller than 1/0 AWG are only permitted in cable tray when they are part of a multiconductor cable assembly or are installed in a raceway (such as conduit) within the cable tray. Individual THHN or THWN wires smaller than 1/0 cannot be laid directly in cable tray.
                </p>
              </div>
            </section>

            <section id="fill-calculations" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Cable Tray Fill Calculations</h2>
              <p className="text-white/80 mb-4">
                Fill calculations for cable tray differ significantly from conduit fill calculations. NEC 392.22 provides the rules, and the approach varies based on whether you are installing multiconductor cables, single conductors, or a mix of both.
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-3">Multiconductor Cables (4/0 and Smaller)</h3>
              <div className="bg-white/5 rounded-xl p-6 my-6">
                <p className="text-white/70 mb-3">
                  Per NEC 392.22(A)(1), the sum of the cross-sectional areas of all multiconductor cables shall not exceed the maximum fill area for the tray type and width. The maximum fill is based on the usable cross-sectional area of the tray:
                </p>
                <ul className="space-y-2 text-white/70 text-sm">
                  <li>&#8226; <strong>Ladder or ventilated trough</strong> - Maximum fill = column D from the applicable table based on tray width</li>
                  <li>&#8226; <strong>Solid bottom</strong> - Maximum fill = column D from Table 392.22(A) based on tray width</li>
                  <li>&#8226; <strong>Where all cables are 4/0 or smaller</strong> - The total cable area must not exceed the applicable tray fill area</li>
                </ul>
              </div>

              <h3 className="text-xl font-semibold mt-6 mb-3">Multiconductor Cables (Larger Than 4/0)</h3>
              <div className="bg-white/5 rounded-xl p-6 my-6">
                <p className="text-white/70 mb-3">
                  Per NEC 392.22(A)(2), multiconductor cables larger than 4/0 AWG must be installed in a single layer. The sum of the cable diameters must not exceed the tray width. This single-layer requirement ensures adequate heat dissipation for these high-ampacity cables.
                </p>
              </div>

              <h3 className="text-xl font-semibold mt-6 mb-3">Single Conductors (600V or Less)</h3>
              <div className="bg-white/5 rounded-xl p-6 my-6">
                <p className="text-white/70 mb-3">
                  Per NEC 392.22(B), single conductors 1/0 AWG and larger must be installed in a single layer in ladder or ventilated trough cable tray. The sum of the conductor diameters shall not exceed the cable tray width, and conductors must be arranged in groups of three (or multiples of three) per circuit.
                </p>
                <p className="text-white/70 text-sm">
                  Conductors must be evenly spaced across the tray width. Maintaining separation between circuits reduces mutual heating and allows proper ampacity.
                </p>
              </div>

              <h3 className="text-xl font-semibold mt-6 mb-3">Mixed Cable Sizes</h3>
              <div className="bg-white/5 rounded-xl p-6 my-6">
                <p className="text-white/70 mb-3">
                  When a tray contains both multiconductor cables 4/0 and smaller along with cables larger than 4/0, per NEC 392.22(A)(3):
                </p>
                <ul className="space-y-2 text-white/70 text-sm">
                  <li>&#8226; Install cables larger than 4/0 in a single layer at the bottom of the tray</li>
                  <li>&#8226; Remaining fill area above these cables can be used for smaller multiconductor cables</li>
                  <li>&#8226; The available fill area equals the total tray area minus (1.2 x the sum of the diameters of the larger cables x the tray inside depth)</li>
                </ul>
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
                  href="https://apps.apple.com/us/app/ampora/id6753693522"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-white text-black font-semibold rounded-full hover:bg-white/90 transition-colors text-sm whitespace-nowrap"
                >
                  <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/></svg>
                  Download Free
                </a>
              </div>
            </div>

            <section id="fill-area-tables" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Cable Tray Fill Area Tables</h2>
              <p className="text-white/80 mb-4">
                The following tables provide maximum fill areas for multiconductor cables rated 2000V or less in ladder, ventilated trough, and solid bottom cable trays. These values are based on NEC Table 392.22(A).
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-3">Ladder and Ventilated Trough Tray - Maximum Fill Area</h3>
              <div className="overflow-x-auto my-6">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-white/20">
                      <th className="text-left py-3 px-4 text-white/60">Tray Width (in)</th>
                      <th className="text-left py-3 px-4 text-white/60">Inside Depth (in)</th>
                      <th className="text-left py-3 px-4 text-white/60">Max Fill Area (sq in)</th>
                      <th className="text-left py-3 px-4 text-white/60">Max Fill Area (mm&sup2;)</th>
                    </tr>
                  </thead>
                  <tbody className="text-white/80">
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">6</td>
                      <td className="py-3 px-4 font-mono">3-4</td>
                      <td className="py-3 px-4 font-mono">7.0</td>
                      <td className="py-3 px-4 font-mono">4,500</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">12</td>
                      <td className="py-3 px-4 font-mono">3-4</td>
                      <td className="py-3 px-4 font-mono">14.0</td>
                      <td className="py-3 px-4 font-mono">9,000</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">18</td>
                      <td className="py-3 px-4 font-mono">3-4</td>
                      <td className="py-3 px-4 font-mono">21.0</td>
                      <td className="py-3 px-4 font-mono">13,500</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">24</td>
                      <td className="py-3 px-4 font-mono">3-4</td>
                      <td className="py-3 px-4 font-mono">28.0</td>
                      <td className="py-3 px-4 font-mono">18,000</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">30</td>
                      <td className="py-3 px-4 font-mono">3-4</td>
                      <td className="py-3 px-4 font-mono">35.0</td>
                      <td className="py-3 px-4 font-mono">22,500</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4">36</td>
                      <td className="py-3 px-4 font-mono">3-4</td>
                      <td className="py-3 px-4 font-mono">42.0</td>
                      <td className="py-3 px-4 font-mono">27,000</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h3 className="text-xl font-semibold mt-6 mb-3">Solid Bottom Tray - Maximum Fill Area</h3>
              <div className="overflow-x-auto my-6">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-white/20">
                      <th className="text-left py-3 px-4 text-white/60">Tray Width (in)</th>
                      <th className="text-left py-3 px-4 text-white/60">Inside Depth (in)</th>
                      <th className="text-left py-3 px-4 text-white/60">Max Fill Area (sq in)</th>
                      <th className="text-left py-3 px-4 text-white/60">Max Fill Area (mm&sup2;)</th>
                    </tr>
                  </thead>
                  <tbody className="text-white/80">
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">6</td>
                      <td className="py-3 px-4 font-mono">3-4</td>
                      <td className="py-3 px-4 font-mono">6.0</td>
                      <td className="py-3 px-4 font-mono">3,900</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">12</td>
                      <td className="py-3 px-4 font-mono">3-4</td>
                      <td className="py-3 px-4 font-mono">12.0</td>
                      <td className="py-3 px-4 font-mono">7,700</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">18</td>
                      <td className="py-3 px-4 font-mono">3-4</td>
                      <td className="py-3 px-4 font-mono">18.0</td>
                      <td className="py-3 px-4 font-mono">11,600</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">24</td>
                      <td className="py-3 px-4 font-mono">3-4</td>
                      <td className="py-3 px-4 font-mono">24.0</td>
                      <td className="py-3 px-4 font-mono">15,500</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">30</td>
                      <td className="py-3 px-4 font-mono">3-4</td>
                      <td className="py-3 px-4 font-mono">30.0</td>
                      <td className="py-3 px-4 font-mono">19,400</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4">36</td>
                      <td className="py-3 px-4 font-mono">3-4</td>
                      <td className="py-3 px-4 font-mono">36.0</td>
                      <td className="py-3 px-4 font-mono">23,200</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h3 className="text-xl font-semibold mt-6 mb-3">Channel Cable Tray - Maximum Fill Area</h3>
              <div className="overflow-x-auto my-6">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-white/20">
                      <th className="text-left py-3 px-4 text-white/60">Channel Width (in)</th>
                      <th className="text-left py-3 px-4 text-white/60">Inside Depth (in)</th>
                      <th className="text-left py-3 px-4 text-white/60">Max Fill Area (sq in)</th>
                    </tr>
                  </thead>
                  <tbody className="text-white/80">
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">3</td>
                      <td className="py-3 px-4 font-mono">1.5-2</td>
                      <td className="py-3 px-4 font-mono">2.5</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">4</td>
                      <td className="py-3 px-4 font-mono">1.5-2</td>
                      <td className="py-3 px-4 font-mono">4.5</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4">6</td>
                      <td className="py-3 px-4 font-mono">1.5-2</td>
                      <td className="py-3 px-4 font-mono">7.0</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="bg-white/5 rounded-xl p-6 my-6">
                <h3 className="font-semibold text-cyan-400 mb-3">Worked Example: Multiconductor Cable Fill</h3>
                <p className="text-white/70 mb-3">
                  <strong>Problem:</strong> You need to install 12 multiconductor Type TC cables in a ladder tray. Each cable has an outside diameter of 1.25 inches. What tray width is required?
                </p>
                <div className="space-y-2 text-white/60 text-sm">
                  <p><strong>Step 1:</strong> Calculate cable cross-sectional area: A = pi x (d/2)&sup2; = 3.14159 x (0.625)&sup2; = 1.227 sq in per cable</p>
                  <p><strong>Step 2:</strong> Total cable area: 12 x 1.227 = 14.72 sq in</p>
                  <p><strong>Step 3:</strong> Find tray width from table where fill area exceeds 14.72 sq in</p>
                  <p><strong>Step 4:</strong> 18-inch ladder tray allows 21.0 sq in - <strong>18-inch tray is sufficient</strong></p>
                </div>
              </div>
            </section>

            <section id="support-and-spacing" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Support and Spacing Requirements</h2>
              <p className="text-white/80 mb-4">
                NEC 392.30 covers the mechanical support requirements for cable tray systems. Proper support is essential for structural integrity, cable protection, and inspector approval.
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-3">Support Spacing</h3>
              <p className="text-white/80 mb-4">
                Cable tray must be supported at intervals sufficient to prevent excessive sag. While the NEC does not prescribe exact distances, it requires that the tray be designed and installed to carry the expected load safely. Manufacturer specifications and engineering calculations determine support spacing, but common guidelines include:
              </p>
              <div className="overflow-x-auto my-6">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-white/20">
                      <th className="text-left py-3 px-4 text-white/60">Tray Type</th>
                      <th className="text-left py-3 px-4 text-white/60">Typical Span (ft)</th>
                      <th className="text-left py-3 px-4 text-white/60">Maximum Span (ft)</th>
                    </tr>
                  </thead>
                  <tbody className="text-white/80">
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">Ladder Tray (Steel)</td>
                      <td className="py-3 px-4 font-mono">12</td>
                      <td className="py-3 px-4 font-mono">20</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">Ladder Tray (Aluminum)</td>
                      <td className="py-3 px-4 font-mono">12</td>
                      <td className="py-3 px-4 font-mono">16</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">Ventilated Trough</td>
                      <td className="py-3 px-4 font-mono">8-10</td>
                      <td className="py-3 px-4 font-mono">12</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">Solid Bottom</td>
                      <td className="py-3 px-4 font-mono">8-10</td>
                      <td className="py-3 px-4 font-mono">12</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">Wire Mesh</td>
                      <td className="py-3 px-4 font-mono">4-6</td>
                      <td className="py-3 px-4 font-mono">8</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4">Channel Tray</td>
                      <td className="py-3 px-4 font-mono">8-10</td>
                      <td className="py-3 px-4 font-mono">10</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-white/70 text-sm mb-4">
                Note: Actual spans depend on cable loading, tray material, depth, and width. Always follow manufacturer load tables and engineering calculations for your specific installation.
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-3">Installation Requirements</h3>
              <ul className="list-disc list-inside text-white/70 space-y-2 mb-4">
                <li><strong>Minimum clearance</strong> - Sufficient clearance must be maintained above the tray for cable installation and maintenance. A typical minimum is 12 inches above the highest cable.</li>
                <li><strong>Cover requirements</strong> - Covers are required where cable tray passes through walls, floors, or is installed in areas accessible to unqualified persons per 392.18(H)</li>
                <li><strong>Barrier strips</strong> - When cables of different voltage levels are in the same tray, a solid fixed barrier may be required to separate them per 392.20(A)</li>
                <li><strong>Cable securing</strong> - Cables must be secured to the tray at transitions, risers, and where they leave the tray to prevent strain on terminations</li>
                <li><strong>Splices</strong> - Splices are permitted in cable tray per NEC 392.56, provided they are accessible and made with listed devices</li>
              </ul>

              <div className="bg-white/5 rounded-xl p-6 my-6">
                <h3 className="font-semibold mb-3">Vertical Tray Runs</h3>
                <p className="text-white/70 text-sm">
                  When cable tray is installed vertically, cables must be secured to the tray at intervals not exceeding the cable manufacturer&apos;s recommendations. This prevents cables from sliding and placing excessive strain on the bottom cables. Cable clamps or tie wraps rated for the cable weight are required at regular intervals along vertical runs.
                </p>
              </div>
            </section>

            <section id="grounding-and-bonding" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Grounding and Bonding</h2>
              <p className="text-white/80 mb-4">
                NEC 392.60 covers grounding and bonding requirements for cable tray systems. Metallic cable tray can serve as an equipment grounding conductor (EGC) when specific conditions are met.
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-3">Cable Tray as Equipment Grounding Conductor</h3>
              <p className="text-white/80 mb-4">
                Per NEC 392.60(A), metallic cable trays are permitted as equipment grounding conductors when all of the following conditions are satisfied:
              </p>
              <ul className="list-disc list-inside text-white/70 space-y-2 mb-4">
                <li>Cable tray sections are bonded together using bolted mechanical connectors or bonding jumpers per 250.96</li>
                <li>The cable tray cross-sectional area meets the minimum requirements in NEC Table 392.60(A)</li>
                <li>All exposed non-current-carrying metal parts are bonded to the cable tray</li>
              </ul>

              <h3 className="text-xl font-semibold mt-6 mb-3">Minimum Cross-Sectional Area for EGC</h3>
              <div className="overflow-x-auto my-6">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-white/20">
                      <th className="text-left py-3 px-4 text-white/60">Maximum Fuse / Breaker Rating (A)</th>
                      <th className="text-left py-3 px-4 text-white/60">Steel Tray Min Area (sq in)</th>
                      <th className="text-left py-3 px-4 text-white/60">Aluminum Tray Min Area (sq in)</th>
                    </tr>
                  </thead>
                  <tbody className="text-white/80">
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">60</td>
                      <td className="py-3 px-4 font-mono">0.20</td>
                      <td className="py-3 px-4 font-mono">0.20</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">100</td>
                      <td className="py-3 px-4 font-mono">0.40</td>
                      <td className="py-3 px-4 font-mono">0.40</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">200</td>
                      <td className="py-3 px-4 font-mono">0.70</td>
                      <td className="py-3 px-4 font-mono">0.70</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">400</td>
                      <td className="py-3 px-4 font-mono">1.00</td>
                      <td className="py-3 px-4 font-mono">1.00</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">600</td>
                      <td className="py-3 px-4 font-mono">1.50</td>
                      <td className="py-3 px-4 font-mono">1.50</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4">Over 600</td>
                      <td className="py-3 px-4 font-mono" colSpan={2}>Sized per NEC 250.122</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h3 className="text-xl font-semibold mt-6 mb-3">Bonding Requirements</h3>
              <ul className="list-disc list-inside text-white/70 space-y-2 mb-4">
                <li><strong>Section-to-section bonding</strong> - All tray sections must be electrically continuous. Use manufacturer-provided splice plates with contact surfaces free of paint or coatings, or install bonding jumpers.</li>
                <li><strong>Bonding jumper sizing</strong> - Jumpers must be sized per NEC 250.102 based on the overcurrent device rating.</li>
                <li><strong>Expansion joints</strong> - Where expansion fittings interrupt electrical continuity, bonding jumpers must bridge the gap.</li>
                <li><strong>Connection to grounding system</strong> - Cable tray must be connected to the facility grounding electrode system at the service equipment or source of a separately derived system.</li>
              </ul>

              <div className="bg-green-900/20 border border-green-500/30 rounded-xl p-6 my-6">
                <h3 className="font-semibold text-green-400 mb-2">Best Practice: Bonding Verification</h3>
                <p className="text-white/70 text-sm">
                  After installation, verify electrical continuity of the entire cable tray system using a low-resistance ohmmeter. The resistance from any point on the tray to the grounding electrode should be less than 1 ohm. Document these readings as part of your commissioning records.
                </p>
              </div>
            </section>

            <section id="industrial-vs-commercial" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Industrial vs Commercial Applications</h2>
              <p className="text-white/80 mb-4">
                Cable tray applications differ significantly between industrial and commercial settings. Understanding these differences ensures proper tray selection, code compliance, and cost-effective installation.
              </p>

              <div className="grid md:grid-cols-2 gap-6 my-6">
                <div className="bg-purple-900/20 rounded-xl p-6 border border-purple-500/30">
                  <h3 className="font-semibold text-purple-400 mb-3">Industrial Applications</h3>
                  <ul className="space-y-2 text-white/70 text-sm">
                    <li>&#8226; Heavy-duty ladder tray is the predominant type</li>
                    <li>&#8226; Aluminum or hot-dip galvanized steel construction</li>
                    <li>&#8226; Large power cables (500 kcmil and above common)</li>
                    <li>&#8226; Outdoor installations with corrosion resistance</li>
                    <li>&#8226; Long straight runs spanning hundreds of feet</li>
                    <li>&#8226; Separation of power, control, and instrumentation</li>
                    <li>&#8226; Single conductors in ladder tray for large feeders</li>
                    <li>&#8226; Cable tray commonly used as EGC per 392.60</li>
                    <li>&#8226; Stainless steel tray in corrosive environments</li>
                    <li>&#8226; Fiber-reinforced plastic (FRP) tray in chemical plants</li>
                  </ul>
                </div>

                <div className="bg-cyan-900/20 rounded-xl p-6 border border-cyan-500/30">
                  <h3 className="font-semibold text-cyan-400 mb-3">Commercial Applications</h3>
                  <ul className="space-y-2 text-white/70 text-sm">
                    <li>&#8226; Wire mesh tray is most popular for data/telecom</li>
                    <li>&#8226; Ventilated trough and solid bottom common for power</li>
                    <li>&#8226; Data centers use wire mesh for cable management</li>
                    <li>&#8226; Typically installed above drop ceilings or in risers</li>
                    <li>&#8226; Aesthetic considerations may dictate tray finish</li>
                    <li>&#8226; MC cable and Type TC cable most common</li>
                    <li>&#8226; Smaller cable sizes compared to industrial</li>
                    <li>&#8226; Fire-rated barriers at floor penetrations</li>
                    <li>&#8226; Plenum-rated cables required in air-handling spaces</li>
                    <li>&#8226; Channel tray for small runs and cable drops</li>
                  </ul>
                </div>
              </div>

              <div className="bg-white/5 rounded-xl p-6 my-6">
                <h3 className="font-semibold mb-3">Material Selection Guide</h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-white/20">
                        <th className="text-left py-3 px-4 text-white/60">Material</th>
                        <th className="text-left py-3 px-4 text-white/60">Best For</th>
                        <th className="text-left py-3 px-4 text-white/60">Considerations</th>
                      </tr>
                    </thead>
                    <tbody className="text-white/80">
                      <tr className="border-b border-white/10">
                        <td className="py-3 px-4">Steel (galvanized)</td>
                        <td className="py-3 px-4 text-white/60">Indoor industrial, commercial</td>
                        <td className="py-3 px-4 text-white/60">Highest strength, magnetic</td>
                      </tr>
                      <tr className="border-b border-white/10">
                        <td className="py-3 px-4">Aluminum</td>
                        <td className="py-3 px-4 text-white/60">Outdoor, coastal, lightweight</td>
                        <td className="py-3 px-4 text-white/60">Corrosion resistant, non-magnetic</td>
                      </tr>
                      <tr className="border-b border-white/10">
                        <td className="py-3 px-4">Stainless Steel</td>
                        <td className="py-3 px-4 text-white/60">Chemical plants, food processing</td>
                        <td className="py-3 px-4 text-white/60">Best corrosion resistance, highest cost</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4">FRP (Fiberglass)</td>
                        <td className="py-3 px-4 text-white/60">Severely corrosive environments</td>
                        <td className="py-3 px-4 text-white/60">Non-conductive (cannot serve as EGC)</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </section>

            <section id="common-mistakes" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Common Installation Mistakes</h2>
              <p className="text-white/80 mb-4">
                Cable tray installations frequently fail inspection due to preventable errors. Understanding these common mistakes will save time, money, and frustration on your projects.
              </p>

              <div className="space-y-4 my-6">
                <div className="bg-red-900/20 border border-red-500/30 rounded-xl p-6">
                  <h3 className="font-semibold text-red-400 mb-2">1. Using Unapproved Cable Types</h3>
                  <p className="text-white/70 text-sm">
                    Installing individual THHN or THWN conductors smaller than 1/0 AWG directly in cable tray is one of the most common violations. Only multiconductor cables (MC, TC, AC, etc.) or single conductors 1/0 and larger are permitted. Small individual conductors must be in a raceway within the tray.
                  </p>
                </div>

                <div className="bg-red-900/20 border border-red-500/30 rounded-xl p-6">
                  <h3 className="font-semibold text-red-400 mb-2">2. Exceeding Fill Capacity</h3>
                  <p className="text-white/70 text-sm">
                    Overloading cable tray beyond the NEC fill requirements creates heat dissipation problems and makes future cable additions impossible. Always calculate fill area before installing cables and reserve 20-25% spare capacity for future needs.
                  </p>
                </div>

                <div className="bg-red-900/20 border border-red-500/30 rounded-xl p-6">
                  <h3 className="font-semibold text-red-400 mb-2">3. Inadequate Bonding at Splice Plates</h3>
                  <p className="text-white/70 text-sm">
                    Failing to ensure electrical continuity between tray sections by not removing paint, coating, or corrosion at connection points. When cable tray is used as an EGC, every joint must provide a reliable low-impedance path. Use listed bonding hardware or install bonding jumpers.
                  </p>
                </div>

                <div className="bg-red-900/20 border border-red-500/30 rounded-xl p-6">
                  <h3 className="font-semibold text-red-400 mb-2">4. Missing Covers in Accessible Areas</h3>
                  <p className="text-white/70 text-sm">
                    NEC 392.18(H) requires covers or other protection where cable tray is accessible to unqualified persons or where cables transition through walls and floors. Inspectors commonly cite open tray in areas where building occupants could contact energized cables.
                  </p>
                </div>

                <div className="bg-red-900/20 border border-red-500/30 rounded-xl p-6">
                  <h3 className="font-semibold text-red-400 mb-2">5. No Cable Securing at Transitions</h3>
                  <p className="text-white/70 text-sm">
                    Cables leaving the tray, transitioning from horizontal to vertical runs, or passing through barriers must be properly secured. Unsecured cables can move, chafe against tray edges, and create strain on terminations. Use cable clamps, straps, or listed tray accessories.
                  </p>
                </div>

                <div className="bg-red-900/20 border border-red-500/30 rounded-xl p-6">
                  <h3 className="font-semibold text-red-400 mb-2">6. Mixing Voltage Levels Without Barriers</h3>
                  <p className="text-white/70 text-sm">
                    Running power cables and low-voltage or communications cables in the same tray without proper separation violates NEC 392.20(A). Either install a solid fixed barrier between voltage levels, use separate trays, or ensure all cables are rated for the highest voltage present.
                  </p>
                </div>

                <div className="bg-red-900/20 border border-red-500/30 rounded-xl p-6">
                  <h3 className="font-semibold text-red-400 mb-2">7. Insufficient Support Spacing</h3>
                  <p className="text-white/70 text-sm">
                    Excessive spans between supports cause tray sag, cable damage, and potential structural failure. This is especially critical with wire mesh tray, which has lower load ratings. Always follow manufacturer load tables for the actual cable weight per linear foot and verify support spacing accordingly.
                  </p>
                </div>

                <div className="bg-red-900/20 border border-red-500/30 rounded-xl p-6">
                  <h3 className="font-semibold text-red-400 mb-2">8. Ignoring Ampacity Derating</h3>
                  <p className="text-white/70 text-sm">
                    Cables in cable tray, particularly in solid bottom trays, may require ampacity derating per NEC 392.80 and 310.15. Failing to account for the number of current-carrying conductors and the reduced heat dissipation of grouped cables can lead to overheating and insulation failure.
                  </p>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Summary: Cable Tray Quick Reference</h2>
              <div className="grid md:grid-cols-2 gap-4 my-6">
                <div className="bg-purple-900/30 rounded-xl p-6">
                  <h3 className="font-semibold text-purple-400 mb-3">Key NEC Sections</h3>
                  <ul className="space-y-2 text-white/70 text-sm">
                    <li>&#8226; <strong>392.10</strong> - Uses permitted and not permitted</li>
                    <li>&#8226; <strong>392.18</strong> - Installation requirements</li>
                    <li>&#8226; <strong>392.20</strong> - Cable separation</li>
                    <li>&#8226; <strong>392.22</strong> - Fill calculations</li>
                    <li>&#8226; <strong>392.30</strong> - Support requirements</li>
                    <li>&#8226; <strong>392.46</strong> - Bushed fittings</li>
                    <li>&#8226; <strong>392.56</strong> - Splices in cable tray</li>
                    <li>&#8226; <strong>392.60</strong> - Grounding and bonding</li>
                    <li>&#8226; <strong>392.80</strong> - Ampacity</li>
                  </ul>
                </div>
                <div className="bg-cyan-900/30 rounded-xl p-6">
                  <h3 className="font-semibold text-cyan-400 mb-3">Design Checklist</h3>
                  <ul className="space-y-2 text-white/70 text-sm">
                    <li>&#8226; Select tray type based on cable types and environment</li>
                    <li>&#8226; Calculate total cable fill area</li>
                    <li>&#8226; Size tray width with 20-25% spare capacity</li>
                    <li>&#8226; Verify permitted cable types for your tray</li>
                    <li>&#8226; Determine support spacing from load tables</li>
                    <li>&#8226; Plan grounding/bonding method</li>
                    <li>&#8226; Check ampacity derating requirements</li>
                    <li>&#8226; Identify locations requiring covers or barriers</li>
                    <li>&#8226; Plan cable entry/exit points and transitions</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* CTA Section */}
            <section className="bg-gradient-to-r from-purple-900/30 to-cyan-900/30 rounded-2xl p-8 md:p-12 my-12 border border-purple-500/20">
              <div className="text-center">
                <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-1.5 rounded-full mb-4">
                  <span className="text-sm text-white/80">&#9733; Free on the App Store</span>
                </div>
                <h2 className="text-2xl md:text-3xl font-display font-bold mb-4">
                  Your Electrical Reference, Powered by AI
                </h2>
                <p className="text-white/70 mb-8 max-w-2xl mx-auto">
                  Join thousands of electricians using Ampora for instant NEC code answers, electrical calculations, and AI-powered troubleshooting — right from your phone.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <a
                    href="https://apps.apple.com/us/app/ampora/id6753693522"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-black font-semibold rounded-full hover:bg-white/90 transition-colors"
                  >
                    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/></svg>
                    Download on App Store
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
                <Link href="/blog/conduit-fill-calculation-guide" className="bg-white/5 hover:bg-white/10 rounded-xl p-6 transition-colors">
                  <span className="text-cyan-400 text-sm">Calculations</span>
                  <h3 className="font-semibold mt-2">Conduit Fill Calculation: NEC Chapter 9 Tables</h3>
                </Link>
                <Link href="/blog/electrical-conduit-types-guide" className="bg-white/5 hover:bg-white/10 rounded-xl p-6 transition-colors">
                  <span className="text-purple-400 text-sm">NEC Code</span>
                  <h3 className="font-semibold mt-2">Electrical Conduit Types Guide</h3>
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
