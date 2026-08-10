import { Metadata } from "next";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import { BreadcrumbJsonLd, BlogPostingJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Fire Alarm Wiring Guide: NEC Article 760 Requirements",
  description: "Complete guide to fire alarm wiring per NEC Article 760. Learn about power-limited vs non-power-limited circuits, cable types (FPL, FPLR, FPLP), separation requirements, and NAC circuit wiring.",
  keywords: [
    "fire alarm wiring",
    "NEC Article 760",
    "fire alarm cable types",
    "power limited fire alarm",
    "non-power limited fire alarm",
    "FPL cable",
    "FPLR cable",
    "FPLP cable",
    "fire alarm circuit wiring",
    "NAC circuit wiring",
    "fire alarm separation requirements",
    "NFPA 72 wiring",
    "fire alarm conduit",
    "fire alarm system installation",
    "fire alarm cable ratings",
    "notification appliance circuit"
  ],
  alternates: {
    canonical: "https://amporalabs.com/blog/fire-alarm-wiring-nec-760",
  },
  openGraph: {
    title: "Fire Alarm Wiring Guide: NEC Article 760 Requirements - Ampora",
    description: "Complete guide to fire alarm wiring requirements per NEC Article 760 including cable types and separation rules.",
    url: "https://amporalabs.com/blog/fire-alarm-wiring-nec-760",
    type: "article",
  },
};

function HeroIllustration() {
  return (
    <svg viewBox="0 0 400 160" className="w-full h-40 md:h-48" aria-label="Fire alarm wiring system illustration">
      {/* Fire alarm control panel */}
      <g transform="translate(130, 10)">
        <rect x="0" y="0" width="140" height="100" rx="6" fill="#1f2937" stroke="#ef4444" strokeWidth="2"/>
        <rect x="10" y="10" width="120" height="40" rx="3" fill="#111827"/>
        <text x="70" y="25" textAnchor="middle" fill="#ef4444" fontSize="7" fontWeight="bold">FIRE ALARM</text>
        <text x="70" y="38" textAnchor="middle" fill="#22c55e" fontSize="7">SYSTEM NORMAL</text>

        {/* LED indicators */}
        <circle cx="30" cy="65" r="5" fill="#22c55e"/>
        <circle cx="50" cy="65" r="5" fill="#f59e0b" fillOpacity="0.3"/>
        <circle cx="70" cy="65" r="5" fill="#ef4444" fillOpacity="0.3"/>
        <circle cx="90" cy="65" r="5" fill="#22c55e"/>

        <text x="30" y="82" textAnchor="middle" fill="#9ca3af" fontSize="5">AC</text>
        <text x="50" y="82" textAnchor="middle" fill="#9ca3af" fontSize="5">TBL</text>
        <text x="70" y="82" textAnchor="middle" fill="#9ca3af" fontSize="5">ALM</text>
        <text x="90" y="82" textAnchor="middle" fill="#9ca3af" fontSize="5">SUP</text>
      </g>

      {/* Cable types */}
      <g transform="translate(20, 25)">
        <rect x="0" y="0" width="85" height="80" rx="4" fill="#a855f7" fillOpacity="0.1" stroke="#a855f7" strokeDasharray="4"/>
        <text x="42" y="15" textAnchor="middle" fill="#a855f7" fontSize="7" fontWeight="bold">Cable Types</text>
        <text x="8" y="32" fill="#9ca3af" fontSize="6">FPL - General</text>
        <text x="8" y="45" fill="#9ca3af" fontSize="6">FPLR - Riser</text>
        <text x="8" y="58" fill="#9ca3af" fontSize="6">FPLP - Plenum</text>
        <text x="8" y="71" fill="#9ca3af" fontSize="6">CI - Circuit Integ.</text>
      </g>

      {/* Devices */}
      <g transform="translate(300, 15)">
        {/* Smoke detector */}
        <circle cx="40" cy="20" r="16" fill="#374151" stroke="#ef4444" strokeWidth="1.5"/>
        <text x="40" y="23" textAnchor="middle" fill="#ef4444" fontSize="6">SMOKE</text>

        {/* Pull station */}
        <rect x="22" y="50" width="36" height="28" rx="3" fill="#ef4444"/>
        <text x="40" y="62" textAnchor="middle" fill="#fff" fontSize="5" fontWeight="bold">PULL</text>
        <text x="40" y="72" textAnchor="middle" fill="#fff" fontSize="5">STATION</text>

        {/* Horn/strobe */}
        <rect x="22" y="90" width="36" height="28" rx="3" fill="#374151" stroke="#f59e0b" strokeWidth="1.5"/>
        <text x="40" y="103" textAnchor="middle" fill="#f59e0b" fontSize="5" fontWeight="bold">HORN/</text>
        <text x="40" y="113" textAnchor="middle" fill="#f59e0b" fontSize="5">STROBE</text>
      </g>

      {/* Wiring lines */}
      <line x1="270" y1="50" x2="300" y2="35" stroke="#ef4444" strokeWidth="1.5" strokeDasharray="4"/>
      <line x1="270" y1="60" x2="300" y2="65" stroke="#ef4444" strokeWidth="1.5" strokeDasharray="4"/>
      <line x1="270" y1="70" x2="300" y2="105" stroke="#f59e0b" strokeWidth="1.5" strokeDasharray="4"/>

      {/* Labels */}
      <text x="200" y="130" textAnchor="middle" fill="#9ca3af" fontSize="7">SLC (IDC)</text>
      <text x="200" y="145" textAnchor="middle" fill="#f59e0b" fontSize="7">NAC Circuits</text>
    </svg>
  );
}

export default function FireAlarmWiringNec760Page() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navigation />
      <div className="pt-20">
        <BreadcrumbJsonLd
          items={[
            { name: "Home", url: "https://amporalabs.com" },
            { name: "Blog", url: "https://amporalabs.com/blog" },
            { name: "Fire Alarm Wiring NEC 760", url: "https://amporalabs.com/blog/fire-alarm-wiring-nec-760" },
          ]}
        />
        <BlogPostingJsonLd
          headline="Fire Alarm Wiring Guide: NEC Article 760 Requirements"
          description="Complete guide to fire alarm wiring per NEC Article 760 covering cable types, circuit classifications, and installation requirements."
          datePublished="2025-02-08"
          dateModified="2025-02-08"
          url="https://amporalabs.com/blog/fire-alarm-wiring-nec-760"
          wordCount={3000}
          keywords={["fire alarm wiring", "NEC 760", "fire alarm cable", "power limited circuits", "NAC circuits"]}
        />

        <article className="max-w-4xl mx-auto px-6 py-12">
          {/* Breadcrumb */}
          <nav className="text-sm text-white/60 mb-8">
            <Link href="/" className="hover:text-white">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/blog" className="hover:text-white">Blog</Link>
            <span className="mx-2">/</span>
            <span className="text-white">Fire Alarm Wiring NEC 760</span>
          </nav>

          {/* Article Header */}
          <header className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <span className="px-3 py-1 bg-purple-600/30 text-purple-300 text-sm font-medium rounded-full">
                NEC Code
              </span>
              <span className="text-white/40 text-sm">13 min read</span>
              <span className="text-white/40 text-sm">February 8, 2025</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6 leading-tight">
              Fire Alarm Wiring Guide: NEC Article 760 Requirements
            </h1>
            <p className="text-xl text-white/70">
              A comprehensive guide to fire alarm system wiring requirements under NEC Article 760, covering circuit classifications, cable types, separation rules, and notification appliance circuits.
            </p>
          </header>

          <div className="mb-12 bg-gradient-to-br from-purple-900/20 to-rose-900/20 rounded-2xl p-6 border border-white/10">
            <HeroIllustration />
          </div>

          {/* Table of Contents */}
          <div className="bg-white/5 rounded-2xl p-6 mb-12">
            <h2 className="font-display font-bold mb-4">In This Guide</h2>
            <ul className="space-y-2 text-white/70">
              <li><a href="#article-760-overview" className="hover:text-purple-400">&#8594; NEC Article 760 Overview</a></li>
              <li><a href="#plfa-vs-nplfa" className="hover:text-purple-400">&#8594; Power-Limited vs Non-Power-Limited Circuits</a></li>
              <li><a href="#cable-types" className="hover:text-purple-400">&#8594; Fire Alarm Cable Types (FPL, FPLR, FPLP)</a></li>
              <li><a href="#separation-requirements" className="hover:text-purple-400">&#8594; Separation from Power Conductors</a></li>
              <li><a href="#nac-circuits" className="hover:text-purple-400">&#8594; NAC Circuit Wiring Requirements</a></li>
              <li><a href="#circuit-integrity" className="hover:text-purple-400">&#8594; Circuit Integrity (CI) Cable</a></li>
              <li><a href="#installation-practices" className="hover:text-purple-400">&#8594; Installation Best Practices</a></li>
              <li><a href="#common-violations" className="hover:text-purple-400">&#8594; Common Code Violations</a></li>
            </ul>
          </div>

          {/* Article Content */}
          <div className="prose prose-invert prose-lg max-w-none">

            <section id="article-760-overview" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">NEC Article 760 Overview</h2>
              <p className="text-white/80 mb-4">
                NEC Article 760 covers the installation of wiring and equipment for fire alarm systems, including all circuits controlled and powered by the fire alarm system. This article works in conjunction with NFPA 72 (the National Fire Alarm and Signaling Code), which covers system design, device placement, and testing requirements.
              </p>
              <p className="text-white/80 mb-4">
                Article 760 divides fire alarm circuits into two main categories based on their power levels and the resulting wiring methods required. Understanding this distinction is <strong>fundamental to proper fire alarm installation</strong>.
              </p>

              <div className="bg-purple-900/30 rounded-xl p-6 my-6">
                <h3 className="font-semibold text-purple-400 mb-3">Key NEC 760 Sections</h3>
                <ul className="space-y-2 text-white/70 text-sm">
                  <li>&#x2022; <strong>760.1</strong> &mdash; Scope: Covers fire alarm system wiring and equipment</li>
                  <li>&#x2022; <strong>760.3</strong> &mdash; Other articles that apply (300, 725, etc.)</li>
                  <li>&#x2022; <strong>760.21-760.41</strong> &mdash; Non-power-limited fire alarm (NPLFA) circuits</li>
                  <li>&#x2022; <strong>760.121-760.179</strong> &mdash; Power-limited fire alarm (PLFA) circuits</li>
                  <li>&#x2022; <strong>760.176</strong> &mdash; Listing and marking of PLFA cables</li>
                  <li>&#x2022; <strong>760.154</strong> &mdash; Applications of listed PLFA cables</li>
                </ul>
              </div>
            </section>

            <section id="plfa-vs-nplfa" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Power-Limited vs Non-Power-Limited Circuits</h2>
              <p className="text-white/80 mb-4">
                The most critical distinction in fire alarm wiring is between power-limited fire alarm (PLFA) and non-power-limited fire alarm (NPLFA) circuits. This classification determines everything from cable types to installation methods.
              </p>

              <div className="overflow-x-auto my-6">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-white/20">
                      <th className="text-left py-3 px-4 text-white/60">Characteristic</th>
                      <th className="text-left py-3 px-4 text-white/60">NPLFA (Non-Power-Limited)</th>
                      <th className="text-left py-3 px-4 text-white/60">PLFA (Power-Limited)</th>
                    </tr>
                  </thead>
                  <tbody className="text-white/70">
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-semibold">NEC Sections</td>
                      <td className="py-3 px-4">760.21 through 760.41</td>
                      <td className="py-3 px-4">760.121 through 760.179</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-semibold">Power Source</td>
                      <td className="py-3 px-4">Exceeds Chapter 9 Table 12(A) limits</td>
                      <td className="py-3 px-4">Limited per Chapter 9 Table 12(A)</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-semibold">Typical Voltage</td>
                      <td className="py-3 px-4">120V or 24V (higher current)</td>
                      <td className="py-3 px-4">24V DC (current limited)</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-semibold">Wiring Methods</td>
                      <td className="py-3 px-4">Same as power circuits (Chapter 3)</td>
                      <td className="py-3 px-4">Listed PLFA cables or Chapter 3 methods</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-semibold">Wire Type</td>
                      <td className="py-3 px-4">Standard building wire (THHN, etc.)</td>
                      <td className="py-3 px-4">Listed FPL, FPLR, FPLP cable</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-semibold">Common Use</td>
                      <td className="py-3 px-4">120V power to FACP, remote power supplies</td>
                      <td className="py-3 px-4">SLC, IDC, and some NAC circuits</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-semibold">Separation Required?</td>
                      <td className="py-3 px-4">Can share with power if same system</td>
                      <td className="py-3 px-4">Must be separated from power conductors</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="bg-cyan-900/30 rounded-xl p-6 my-6">
                <h3 className="font-semibold text-cyan-400 mb-3">Understanding Power-Limited Sources</h3>
                <p className="text-white/70 text-sm mb-3">
                  A power-limited source must comply with NEC Chapter 9, Table 12(A). For typical 24V DC fire alarm circuits, the power source must be listed and marked as providing power-limited output. Most modern fire alarm control panels (FACPs) have built-in power-limited outputs for:
                </p>
                <ul className="space-y-1 text-white/70 text-sm">
                  <li>&#x2022; Signaling Line Circuits (SLC) &mdash; communication with addressable devices</li>
                  <li>&#x2022; Initiating Device Circuits (IDC) &mdash; connections to conventional zone devices</li>
                  <li>&#x2022; Notification Appliance Circuits (NAC) &mdash; connections to horns, strobes, speakers</li>
                </ul>
              </div>
            </section>

            <section id="cable-types" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Fire Alarm Cable Types (FPL, FPLR, FPLP)</h2>
              <p className="text-white/80 mb-4">
                Fire alarm cables are listed specifically for fire alarm use and are identified by letter designations that indicate their permitted application. Choosing the correct cable type for each location is essential for code compliance.
              </p>

              <div className="overflow-x-auto my-6">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-white/20">
                      <th className="text-left py-3 px-4 text-white/60">Cable Type</th>
                      <th className="text-left py-3 px-4 text-white/60">Name</th>
                      <th className="text-left py-3 px-4 text-white/60">Permitted Use</th>
                      <th className="text-left py-3 px-4 text-white/60">Substitution</th>
                    </tr>
                  </thead>
                  <tbody className="text-white/70">
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-semibold text-purple-400">FPLP</td>
                      <td className="py-3 px-4">Fire Power-Limited Plenum</td>
                      <td className="py-3 px-4">Ducts, plenums, environmental air spaces</td>
                      <td className="py-3 px-4">None (highest rating)</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-semibold text-purple-400">FPLR</td>
                      <td className="py-3 px-4">Fire Power-Limited Riser</td>
                      <td className="py-3 px-4">Vertical runs between floors (risers)</td>
                      <td className="py-3 px-4">FPLP can substitute</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-semibold text-purple-400">FPL</td>
                      <td className="py-3 px-4">Fire Power-Limited General</td>
                      <td className="py-3 px-4">General purpose, same floor</td>
                      <td className="py-3 px-4">FPLP or FPLR can substitute</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="bg-orange-900/30 rounded-xl p-6 my-6">
                <h3 className="font-semibold text-orange-400 mb-3">Cable Substitution Hierarchy</h3>
                <p className="text-white/70 text-sm mb-3">
                  NEC 760.154(A) establishes a substitution hierarchy. Higher-rated cables can always replace lower-rated cables, but not the reverse:
                </p>
                <ul className="space-y-2 text-white/70 text-sm">
                  <li>&#x2022; <strong>FPLP</strong> can be used anywhere FPL or FPLR is required</li>
                  <li>&#x2022; <strong>FPLR</strong> can be used anywhere FPL is required</li>
                  <li>&#x2022; <strong>FPL</strong> can only be used in general-purpose locations (not plenums or risers)</li>
                  <li>&#x2022; CMP (communications plenum) cable can substitute for FPLP</li>
                  <li>&#x2022; CMR (communications riser) cable can substitute for FPLR</li>
                </ul>
              </div>

              <div className="bg-green-900/30 rounded-xl p-6 my-6">
                <h3 className="font-semibold text-green-400 mb-3">Practical Cable Selection Tips</h3>
                <ul className="space-y-2 text-white/70 text-sm">
                  <li>&#x2022; <strong>When in doubt, use FPLP</strong> &mdash; it&apos;s acceptable everywhere and eliminates substitution mistakes</li>
                  <li>&#x2022; Most fire alarm cable is 18 AWG or 16 AWG, shielded twisted pair</li>
                  <li>&#x2022; Use shielded cable for SLC circuits to prevent electromagnetic interference</li>
                  <li>&#x2022; Color coding: red jacket is standard for fire alarm, but not required by NEC</li>
                  <li>&#x2022; Always verify cable listings &mdash; look for the UL marking on the cable jacket</li>
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
                  href="/get"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-white text-black font-semibold rounded-full hover:bg-white/90 transition-colors text-sm whitespace-nowrap"
                >
                  <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/></svg>
                  Download Free
                </a>
              </div>
            </div>

            <section id="separation-requirements" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Separation from Power Conductors</h2>
              <p className="text-white/80 mb-4">
                One of the most common violations in fire alarm installations is improper separation between fire alarm circuits and power conductors. NEC 760.136 establishes strict separation requirements for PLFA circuits.
              </p>

              <div className="space-y-4 my-6">
                <div className="bg-white/5 rounded-xl p-6">
                  <h3 className="font-semibold text-white mb-2">General Rule: PLFA Separation [760.136]</h3>
                  <p className="text-white/70 text-sm">
                    Power-limited fire alarm cables must not be placed in any raceway, cable tray, box, enclosure, or cable routing assembly with conductors of electric light, power, Class 1, or NPLFA circuits, unless specific exceptions apply.
                  </p>
                </div>
                <div className="bg-white/5 rounded-xl p-6">
                  <h3 className="font-semibold text-white mb-2">Exception 1: Barrier Separation</h3>
                  <p className="text-white/70 text-sm">
                    PLFA and power conductors may share an enclosure if separated by a permanent barrier. Many junction boxes have removable dividers specifically designed for this purpose.
                  </p>
                </div>
                <div className="bg-white/5 rounded-xl p-6">
                  <h3 className="font-semibold text-white mb-2">Exception 2: Power to Same Equipment</h3>
                  <p className="text-white/70 text-sm">
                    PLFA conductors may enter an enclosure with power conductors if the power conductors are functionally associated with the fire alarm equipment (e.g., 120V power supply to a fire alarm panel and the SLC circuits in the same panel).
                  </p>
                </div>
                <div className="bg-white/5 rounded-xl p-6">
                  <h3 className="font-semibold text-white mb-2">Cable Tray Separation [760.136(G)]</h3>
                  <p className="text-white/70 text-sm">
                    In cable trays, PLFA cables must be separated from power cables by a solid, fixed barrier or maintained at least 2 inches from power cables. Alternatively, listed PLFA cables can be in the same cable tray if the power cables do not exceed 150 volts and the PLFA cables have a jacket rated for the voltage.
                  </p>
                </div>
              </div>

              <div className="bg-purple-900/30 rounded-xl p-6 my-6">
                <h3 className="font-semibold text-purple-400 mb-3">Separation Summary</h3>
                <ul className="space-y-2 text-white/70 text-sm">
                  <li>&#x2022; <strong>Raceways</strong> &mdash; Separate raceways required (no sharing with power)</li>
                  <li>&#x2022; <strong>Boxes/Enclosures</strong> &mdash; Barrier required unless functionally associated</li>
                  <li>&#x2022; <strong>Cable Trays</strong> &mdash; 2-inch separation or solid barrier</li>
                  <li>&#x2022; <strong>Same Stud Cavity</strong> &mdash; Permitted for residential, maintain separation</li>
                  <li>&#x2022; <strong>Bundling</strong> &mdash; Never bundle PLFA cables with power cables</li>
                </ul>
              </div>
            </section>

            <section id="nac-circuits" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">NAC Circuit Wiring Requirements</h2>
              <p className="text-white/80 mb-4">
                Notification Appliance Circuits (NACs) connect the fire alarm control panel to horns, strobes, speakers, and other notification devices. NAC wiring has specific requirements due to the critical role these circuits play during a fire event.
              </p>

              <div className="bg-cyan-900/30 rounded-xl p-6 my-6">
                <h3 className="font-semibold text-cyan-400 mb-3">NAC Circuit Basics</h3>
                <p className="text-white/70 text-sm mb-3">
                  NAC circuits operate at 24V DC in most systems and carry significant current when all notification appliances activate simultaneously. Key considerations include:
                </p>
                <ul className="space-y-2 text-white/70 text-sm">
                  <li>&#x2022; <strong>Voltage drop</strong> &mdash; Must not exceed manufacturer&apos;s specifications (typically 10% max, measured at end of line)</li>
                  <li>&#x2022; <strong>Wire sizing</strong> &mdash; 14 AWG or 12 AWG often required for long runs due to voltage drop</li>
                  <li>&#x2022; <strong>End-of-line resistor</strong> &mdash; Supervised circuits require EOL resistor at the last device</li>
                  <li>&#x2022; <strong>Class A vs Class B</strong> &mdash; Class A provides return path; Class B is more common</li>
                  <li>&#x2022; <strong>Circuit loading</strong> &mdash; Total connected load must not exceed NAC panel output rating</li>
                </ul>
              </div>

              <div className="grid md:grid-cols-2 gap-6 my-6">
                <div className="bg-white/5 rounded-xl p-6">
                  <h3 className="font-semibold text-green-400 mb-3">Class B Wiring</h3>
                  <p className="text-white/70 text-sm mb-3">
                    The most common NAC wiring configuration. Class B uses a single pair of wires in a &quot;T-tap&quot; or daisy-chain configuration:
                  </p>
                  <ul className="space-y-1 text-white/70 text-sm">
                    <li>&#x2022; Two conductors from FACP to devices</li>
                    <li>&#x2022; EOL resistor at last device</li>
                    <li>&#x2022; A single open or ground fault disables the entire circuit</li>
                    <li>&#x2022; Lower installation cost</li>
                    <li>&#x2022; Most commonly used in standard occupancies</li>
                  </ul>
                </div>
                <div className="bg-white/5 rounded-xl p-6">
                  <h3 className="font-semibold text-orange-400 mb-3">Class A Wiring</h3>
                  <p className="text-white/70 text-sm mb-3">
                    Provides a redundant return path for higher reliability. Required in certain high-rise and healthcare applications:
                  </p>
                  <ul className="space-y-1 text-white/70 text-sm">
                    <li>&#x2022; Four conductors (two out, two return)</li>
                    <li>&#x2022; No EOL resistor &mdash; circuit loops back to panel</li>
                    <li>&#x2022; A single open fault does NOT disable the circuit</li>
                    <li>&#x2022; Higher installation cost and more wire</li>
                    <li>&#x2022; Required by some AHJs for critical occupancies</li>
                  </ul>
                </div>
              </div>
            </section>

            <section id="circuit-integrity" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Circuit Integrity (CI) Cable</h2>
              <p className="text-white/80 mb-4">
                Circuit integrity cable is designed to continue functioning during a fire for a specified time period. NEC 760.176(F) and NFPA 72 require CI-rated cable in specific applications where system operation must be maintained during a fire event.
              </p>

              <div className="bg-green-900/30 rounded-xl p-6 my-6">
                <h3 className="font-semibold text-green-400 mb-3">When CI Cable Is Required</h3>
                <ul className="space-y-2 text-white/70 text-sm">
                  <li>&#x2022; <strong>Survivability requirements</strong> &mdash; NFPA 72 Section 24.3.6 pathways for occupant notification</li>
                  <li>&#x2022; <strong>High-rise buildings</strong> &mdash; Circuits serving notification appliances and emergency communication</li>
                  <li>&#x2022; <strong>Healthcare facilities</strong> &mdash; Circuits where continued operation during fire is critical</li>
                  <li>&#x2022; <strong>Mass notification systems</strong> &mdash; Emergency voice/alarm communication circuits</li>
                </ul>
                <p className="text-white/70 text-sm mt-3">
                  CI cable must be tested to UL 2196 and maintain circuit integrity for a minimum of 2 hours when exposed to fire. Installation must follow the manufacturer&apos;s specific instructions, including support methods and fittings.
                </p>
              </div>
            </section>

            <section id="installation-practices" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Installation Best Practices</h2>
              <p className="text-white/80 mb-4">
                Beyond code compliance, following industry best practices ensures reliable fire alarm system operation and simplifies future maintenance and troubleshooting.
              </p>

              <div className="space-y-4 my-6">
                <div className="bg-white/5 rounded-xl p-6">
                  <h3 className="font-semibold text-purple-400 mb-2">Cable Routing</h3>
                  <ul className="text-white/70 text-sm space-y-1">
                    <li>&#x2022; Route fire alarm cables in dedicated pathways whenever possible</li>
                    <li>&#x2022; Use red-jacketed cable or red conduit to identify fire alarm circuits</li>
                    <li>&#x2022; Maintain minimum bend radius per manufacturer specifications</li>
                    <li>&#x2022; Support cables at intervals per NEC 300.11</li>
                    <li>&#x2022; Firestop all penetrations through fire-rated assemblies</li>
                  </ul>
                </div>
                <div className="bg-white/5 rounded-xl p-6">
                  <h3 className="font-semibold text-cyan-400 mb-2">Connections &amp; Terminations</h3>
                  <ul className="text-white/70 text-sm space-y-1">
                    <li>&#x2022; Use listed connectors rated for fire alarm use</li>
                    <li>&#x2022; Do not use wire nuts on fire alarm circuits (use B-connectors or terminal strips)</li>
                    <li>&#x2022; Maintain proper polarity on all connections</li>
                    <li>&#x2022; Leave adequate service loops at all devices and panels</li>
                    <li>&#x2022; Label all conductors at termination points</li>
                  </ul>
                </div>
                <div className="bg-white/5 rounded-xl p-6">
                  <h3 className="font-semibold text-green-400 mb-2">Testing &amp; Documentation</h3>
                  <ul className="text-white/70 text-sm space-y-1">
                    <li>&#x2022; Perform point-to-point wiring verification before powering up</li>
                    <li>&#x2022; Measure circuit resistance and compare to calculated values</li>
                    <li>&#x2022; Perform ground fault testing on all circuits</li>
                    <li>&#x2022; Document as-built wiring with accurate floor plans</li>
                    <li>&#x2022; Complete all NFPA 72 required testing and record forms</li>
                  </ul>
                </div>
              </div>
            </section>

            <section id="common-violations" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Common Code Violations</h2>
              <p className="text-white/80 mb-4">
                Fire alarm inspections frequently catch the same mistakes. Being aware of these common violations helps you avoid failed inspections and costly rework.
              </p>

              <div className="space-y-3 my-6">
                <div className="bg-white/5 rounded-xl p-4 flex items-start gap-4">
                  <span className="text-red-400 font-bold text-lg">1.</span>
                  <div>
                    <h3 className="font-semibold">PLFA cables in same raceway as power</h3>
                    <p className="text-white/60 text-sm mt-1">The most common violation. Fire alarm cables must have their own dedicated raceway or maintain required separation from power conductors.</p>
                  </div>
                </div>
                <div className="bg-white/5 rounded-xl p-4 flex items-start gap-4">
                  <span className="text-red-400 font-bold text-lg">2.</span>
                  <div>
                    <h3 className="font-semibold">Wrong cable type for location</h3>
                    <p className="text-white/60 text-sm mt-1">Using FPL cable in a plenum space or FPLR cable in an air-handling ceiling. Always verify the space classification before selecting cable.</p>
                  </div>
                </div>
                <div className="bg-white/5 rounded-xl p-4 flex items-start gap-4">
                  <span className="text-red-400 font-bold text-lg">3.</span>
                  <div>
                    <h3 className="font-semibold">Missing firestopping at rated assemblies</h3>
                    <p className="text-white/60 text-sm mt-1">Every penetration through a fire-rated wall or floor must be properly firestopped using a listed firestop system.</p>
                  </div>
                </div>
                <div className="bg-white/5 rounded-xl p-4 flex items-start gap-4">
                  <span className="text-red-400 font-bold text-lg">4.</span>
                  <div>
                    <h3 className="font-semibold">Excessive voltage drop on NAC circuits</h3>
                    <p className="text-white/60 text-sm mt-1">Long wire runs with undersized conductors cause notification appliances to malfunction. Calculate voltage drop before installation.</p>
                  </div>
                </div>
                <div className="bg-white/5 rounded-xl p-4 flex items-start gap-4">
                  <span className="text-red-400 font-bold text-lg">5.</span>
                  <div>
                    <h3 className="font-semibold">Unsupported cables above accessible ceilings</h3>
                    <p className="text-white/60 text-sm mt-1">Fire alarm cables cannot be laid on ceiling tiles. They must be properly supported per NEC 300.11 using J-hooks, bridle rings, or cable tray.</p>
                  </div>
                </div>
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
                    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/></svg>
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
                <Link href="/blog/smoke-detector-wiring-requirements" className="bg-white/5 hover:bg-white/10 rounded-xl p-6 transition-colors">
                  <span className="text-purple-400 text-sm">NEC Code</span>
                  <h3 className="font-semibold mt-2">Smoke Detector Wiring Requirements</h3>
                </Link>
                <Link href="/blog/low-voltage-wiring-basics" className="bg-white/5 hover:bg-white/10 rounded-xl p-6 transition-colors">
                  <span className="text-cyan-400 text-sm">Technology</span>
                  <h3 className="font-semibold mt-2">Low Voltage Wiring Basics</h3>
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
