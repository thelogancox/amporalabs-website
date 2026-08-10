import { Metadata } from "next";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import { BlogPostingJsonLd, BreadcrumbJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Medium Voltage Systems: Basics for Electricians (5kV-35kV)",
  description: "Comprehensive guide to medium voltage electrical systems for electricians. Covers MV cable types, switchgear, vacuum and SF6 breakers, transformers, protective relaying, grounding systems, safety approach distances, and PPE requirements for 5kV-35kV work.",
  keywords: [
    "medium voltage systems",
    "medium voltage electrician",
    "5kV 15kV 35kV",
    "MV switchgear",
    "vacuum circuit breaker",
    "SF6 breaker",
    "MV cable XLPE EPR",
    "medium voltage safety",
    "protective relaying",
    "medium voltage grounding"
  ],
  openGraph: {
    title: "Medium Voltage Systems: Basics for Electricians (5kV-35kV)",
    description: "Comprehensive guide to medium voltage electrical systems covering cables, switchgear, breakers, relaying, grounding, and safety for electricians.",
    type: "article",
    publishedTime: "2025-06-15",
  },
};

// SVG Illustrations
function HeroIllustration() {
  return (
    <svg viewBox="0 0 400 220" className="w-full h-48 md:h-64" aria-label="Medium voltage switchgear and transformer illustration">
      <defs>
        <linearGradient id="mvSwitchgear" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#374151"/>
          <stop offset="100%" stopColor="#1f2937"/>
        </linearGradient>
        <linearGradient id="mvTransformer" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#06b6d4"/>
          <stop offset="100%" stopColor="#0891b2"/>
        </linearGradient>
        <linearGradient id="mvCable" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#f59e0b"/>
          <stop offset="100%" stopColor="#d97706"/>
        </linearGradient>
      </defs>

      {/* Background grid */}
      {[60, 110, 160].map((y) => (
        <line key={y} x1="10" y1={y} x2="390" y2={y} stroke="#374151" strokeWidth="0.3" strokeDasharray="4"/>
      ))}

      {/* Switchgear cabinet */}
      <rect x="20" y="30" width="120" height="150" rx="4" fill="url(#mvSwitchgear)" stroke="#6b7280" strokeWidth="2"/>
      <rect x="30" y="40" width="100" height="45" rx="2" fill="#111827" stroke="#4b5563" strokeWidth="1"/>
      <rect x="30" y="95" width="100" height="45" rx="2" fill="#111827" stroke="#4b5563" strokeWidth="1"/>

      {/* Breaker indicators */}
      <circle cx="50" cy="62" r="6" fill="#22c55e" fillOpacity="0.8"/>
      <text x="65" y="66" fill="#9ca3af" fontSize="8">VCB 1</text>
      <rect x="100" y="52" width="20" height="16" rx="2" fill="#1f2937" stroke="#22c55e" strokeWidth="1"/>
      <text x="110" y="63" textAnchor="middle" fill="#22c55e" fontSize="7">ON</text>

      <circle cx="50" cy="117" r="6" fill="#ef4444" fillOpacity="0.8"/>
      <text x="65" y="121" fill="#9ca3af" fontSize="8">VCB 2</text>
      <rect x="100" y="107" width="20" height="16" rx="2" fill="#1f2937" stroke="#ef4444" strokeWidth="1"/>
      <text x="110" y="118" textAnchor="middle" fill="#ef4444" fontSize="7">OFF</text>

      {/* Switchgear label */}
      <text x="80" y="160" textAnchor="middle" fill="#06b6d4" fontSize="9" fontWeight="bold">15kV SWITCHGEAR</text>
      <text x="80" y="172" textAnchor="middle" fill="#9ca3af" fontSize="7">Metal-Clad</text>

      {/* MV Cable connecting switchgear to transformer */}
      <path d="M 140 80 C 180 80, 180 75, 220 75" fill="none" stroke="url(#mvCable)" strokeWidth="4" strokeLinecap="round"/>
      <path d="M 140 115 C 180 115, 180 110, 220 110" fill="none" stroke="url(#mvCable)" strokeWidth="4" strokeLinecap="round"/>

      {/* Cable label */}
      <text x="180" y="65" textAnchor="middle" fill="#f59e0b" fontSize="7" fontWeight="bold">15kV XLPE</text>
      <text x="180" y="130" textAnchor="middle" fill="#9ca3af" fontSize="7">Shielded Cable</text>

      {/* Transformer */}
      <rect x="220" y="40" width="80" height="120" rx="6" fill="url(#mvSwitchgear)" stroke="#06b6d4" strokeWidth="2"/>

      {/* Transformer core symbol */}
      <rect x="235" y="55" width="50" height="90" rx="3" fill="#111827" stroke="#4b5563" strokeWidth="1"/>

      {/* Primary winding */}
      {[0, 1, 2, 3, 4].map((i) => (
        <ellipse key={`pri-${i}`} cx="248" cy={70 + i * 14} rx="10" ry="5" fill="none" stroke="#ef4444" strokeWidth="2"/>
      ))}

      {/* Secondary winding */}
      {[0, 1, 2, 3, 4].map((i) => (
        <ellipse key={`sec-${i}`} cx="272" cy={70 + i * 14} rx="10" ry="5" fill="none" stroke="#22c55e" strokeWidth="2"/>
      ))}

      {/* Transformer labels */}
      <text x="260" y="160" textAnchor="middle" fill="#06b6d4" fontSize="9" fontWeight="bold">MV TRANSFORMER</text>
      <text x="260" y="172" textAnchor="middle" fill="#9ca3af" fontSize="7">13.8kV / 480V</text>

      {/* Secondary output */}
      <line x1="300" y1="80" x2="340" y2="80" stroke="#22c55e" strokeWidth="3"/>
      <line x1="300" y1="100" x2="340" y2="100" stroke="#22c55e" strokeWidth="3"/>
      <line x1="300" y1="120" x2="340" y2="120" stroke="#22c55e" strokeWidth="3"/>

      {/* LV Panel */}
      <rect x="340" y="60" width="50" height="90" rx="3" fill="url(#mvSwitchgear)" stroke="#22c55e" strokeWidth="2"/>
      <text x="365" y="100" textAnchor="middle" fill="#22c55e" fontSize="8" fontWeight="bold">480V</text>
      <text x="365" y="112" textAnchor="middle" fill="#9ca3af" fontSize="7">LV SWGR</text>

      {/* Voltage labels at top */}
      <text x="80" y="20" textAnchor="middle" fill="#f59e0b" fontSize="10" fontWeight="bold">MEDIUM VOLTAGE</text>
      <text x="365" y="50" textAnchor="middle" fill="#22c55e" fontSize="9" fontWeight="bold">LOW VOLTAGE</text>

      {/* Voltage boundary line */}
      <line x1="310" y1="30" x2="310" y2="190" stroke="#8b5cf6" strokeWidth="1" strokeDasharray="6,3"/>
      <text x="310" y="200" textAnchor="middle" fill="#8b5cf6" fontSize="7">VOLTAGE BOUNDARY</text>

      {/* High voltage warning symbol */}
      <polygon points="180,140 190,155 170,155" fill="none" stroke="#f59e0b" strokeWidth="1.5"/>
      <text x="180" y="153" textAnchor="middle" fill="#f59e0b" fontSize="8" fontWeight="bold">!</text>
    </svg>
  );
}

export default function BlogPost() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navigation />
      <div className="pt-20">
        <BreadcrumbJsonLd
          items={[
            { name: "Home", url: "https://amporalabs.com" },
            { name: "Blog", url: "https://amporalabs.com/blog" },
            { name: "Medium Voltage Basics", url: "https://amporalabs.com/blog/medium-voltage-basics-electricians" },
          ]}
        />
        <BlogPostingJsonLd
          headline="Medium Voltage Systems: Basics for Electricians (5kV-35kV)"
          description="Comprehensive guide to medium voltage electrical systems covering cables, switchgear, breakers, relaying, grounding, and safety for electricians."
          datePublished="2025-06-15"
          url="https://amporalabs.com/blog/medium-voltage-basics-electricians"
        />

        <article className="max-w-4xl mx-auto px-6 py-12">
          {/* Breadcrumb */}
          <nav className="text-sm text-white/60 mb-8">
            <Link href="/" className="hover:text-white">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/blog" className="hover:text-white">Blog</Link>
            <span className="mx-2">/</span>
            <span className="text-white">Medium Voltage Basics</span>
          </nav>

          {/* Hero */}
          <header className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <span className="px-3 py-1 bg-cyan-600/30 text-cyan-300 text-sm font-medium rounded-full">
                Technology
              </span>
              <span className="text-white/40 text-sm">June 15, 2025</span>
              <span className="text-white/40 text-sm">• 15 min read</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">
              Medium Voltage Systems: Basics for Electricians (5kV-35kV)
            </h1>
            <p className="text-xl text-white/70">
              Step into the world of medium voltage. Understand MV equipment, cable construction, switchgear, protective relaying, grounding methods, and the safety requirements that keep electricians alive.
            </p>
          </header>

          {/* Hero Illustration */}
          <div className="mb-12 bg-gradient-to-br from-cyan-900/20 to-purple-900/20 rounded-2xl p-6 border border-white/10">
            <HeroIllustration />
          </div>

          {/* Content */}
          <div className="prose prose-invert prose-lg max-w-none">
            <h2>What is Medium Voltage?</h2>
            <p>
              Medium voltage (MV) refers to the voltage range between low voltage and high voltage systems. While
              exact definitions vary slightly between standards organizations, the most widely accepted classification
              comes from IEEE and ANSI standards. For electricians, understanding where MV begins and ends is
              fundamental to knowing what equipment, procedures, and qualifications are required.
            </p>

            <h3>Voltage Classifications</h3>
            <div className="bg-white/5 rounded-xl p-6 my-6">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="py-2 text-white">Classification</th>
                    <th className="py-2 text-white">Voltage Range</th>
                    <th className="py-2 text-white">Typical Applications</th>
                  </tr>
                </thead>
                <tbody className="text-white/70">
                  <tr className="border-b border-white/5">
                    <td className="py-2 font-semibold text-green-400">Low Voltage (LV)</td>
                    <td className="py-2">Up to 1,000V</td>
                    <td className="py-2">Residential, commercial branch circuits, 480V industrial</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-2 font-semibold text-amber-400">Medium Voltage (MV)</td>
                    <td className="py-2">1,001V to 69,000V</td>
                    <td className="py-2">Utility distribution, industrial facilities, large commercial</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-2 font-semibold text-red-400">High Voltage (HV)</td>
                    <td className="py-2">69,001V to 230,000V</td>
                    <td className="py-2">Transmission substations, bulk power transfer</td>
                  </tr>
                  <tr>
                    <td className="py-2 font-semibold text-purple-400">Extra High Voltage (EHV)</td>
                    <td className="py-2">Above 230,000V</td>
                    <td className="py-2">Long-distance transmission lines</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p>
              The NEC applies primarily to systems up to 1,000V, with some provisions extending to MV. For medium
              voltage systems, IEEE standards (C2 NESC, C37 series for switchgear, 386 for separable connectors)
              and NFPA 70E for safety become essential references. Electricians working on MV systems must be
              familiar with both NEC and these supplementary standards.
            </p>

            <h2>Common Medium Voltage Levels</h2>
            <p>
              Not all medium voltages are created equal. The specific voltage level you encounter depends on the
              utility, the facility size, and the application. Here are the most common MV voltages an electrician
              will see in the field:
            </p>
            <div className="bg-white/5 rounded-xl p-6 my-6">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="py-2 text-white">Voltage</th>
                    <th className="py-2 text-white">Class</th>
                    <th className="py-2 text-white">Where You Will See It</th>
                  </tr>
                </thead>
                <tbody className="text-white/70">
                  <tr className="border-b border-white/5">
                    <td className="py-2 font-semibold text-cyan-400">4.16 kV</td>
                    <td className="py-2">5 kV class</td>
                    <td className="py-2">Older industrial plants, smaller distribution systems</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-2 font-semibold text-cyan-400">12.47 kV</td>
                    <td className="py-2">15 kV class</td>
                    <td className="py-2">Most common utility distribution voltage in the US</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-2 font-semibold text-cyan-400">13.2 kV</td>
                    <td className="py-2">15 kV class</td>
                    <td className="py-2">Utility distribution, large commercial campus systems</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-2 font-semibold text-cyan-400">13.8 kV</td>
                    <td className="py-2">15 kV class</td>
                    <td className="py-2">Industrial plants, hospital campuses, universities</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-2 font-semibold text-cyan-400">23 kV</td>
                    <td className="py-2">25 kV class</td>
                    <td className="py-2">Utility sub-transmission, larger distribution</td>
                  </tr>
                  <tr>
                    <td className="py-2 font-semibold text-cyan-400">34.5 kV</td>
                    <td className="py-2">35 kV class</td>
                    <td className="py-2">Sub-transmission, large industrial complexes, wind farms</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p>
              The 15 kV class (encompassing 12.47 kV, 13.2 kV, and 13.8 kV) is by far the most common medium
              voltage level you will encounter. Equipment rated for 15 kV class has a basic impulse level (BIL) of
              95 kV and can handle any of the voltages in that class. Understanding voltage classes is critical
              because it determines the insulation rating of all cables, terminations, and equipment.
            </p>

            <h2>MV Cable Types and Construction</h2>
            <p>
              Medium voltage cables are far more complex than the THHN or Romex you work with on low-voltage jobs.
              MV cables have multiple layers, each serving a specific electrical or mechanical purpose. Getting the
              cable construction wrong in an MV system can lead to catastrophic failures, fires, or fatal
              electrocution.
            </p>

            <h3>Cable Construction Layers</h3>
            <p>
              A typical medium voltage cable, from the center outward, consists of these layers:
            </p>
            <div className="bg-gradient-to-r from-cyan-900/30 to-purple-900/30 rounded-xl p-6 my-6">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-amber-600 flex-shrink-0 mt-1 flex items-center justify-center text-xs font-bold text-black">1</span>
                  <div>
                    <p className="text-white font-semibold">Conductor</p>
                    <p className="text-white/70 text-sm">Copper or aluminum, stranded (Class B or C). Compact stranding reduces diameter and improves flexibility.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-gray-600 flex-shrink-0 mt-1 flex items-center justify-center text-xs font-bold text-white">2</span>
                  <div>
                    <p className="text-white font-semibold">Conductor Shield (Strand Shield)</p>
                    <p className="text-white/70 text-sm">Semiconducting layer that smooths the electric field around the stranded conductor. Eliminates air gaps between the conductor and insulation.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-cyan-600 flex-shrink-0 mt-1 flex items-center justify-center text-xs font-bold text-black">3</span>
                  <div>
                    <p className="text-white font-semibold">Insulation</p>
                    <p className="text-white/70 text-sm">The primary dielectric barrier. Rated by voltage class (5 kV, 15 kV, 25 kV, 35 kV). Common types are EPR and XLPE (see below).</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-gray-600 flex-shrink-0 mt-1 flex items-center justify-center text-xs font-bold text-white">4</span>
                  <div>
                    <p className="text-white font-semibold">Insulation Shield</p>
                    <p className="text-white/70 text-sm">Another semiconducting layer over the insulation. Confines the electric field within the insulation and prevents surface discharges.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-gray-400 flex-shrink-0 mt-1 flex items-center justify-center text-xs font-bold text-black">5</span>
                  <div>
                    <p className="text-white font-semibold">Metallic Shield (Concentric Neutral)</p>
                    <p className="text-white/70 text-sm">Copper tape or concentric wire shield. Provides a ground path, contains the electric field, and protects against external damage. Must be grounded at both ends (or one end with special considerations).</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-gray-800 flex-shrink-0 mt-1 flex items-center justify-center text-xs font-bold text-white">6</span>
                  <div>
                    <p className="text-white font-semibold">Jacket (Overall)</p>
                    <p className="text-white/70 text-sm">PVC or PE outer jacket for mechanical protection and moisture resistance. Some cables use a lead sheath for additional moisture protection in underground or wet environments.</p>
                  </div>
                </div>
              </div>
            </div>

            <h3>EPR vs XLPE Insulation</h3>
            <p>
              The two dominant insulation types for medium voltage cables are EPR (Ethylene Propylene Rubber) and
              XLPE (Cross-Linked Polyethylene). Choosing the right one depends on the application:
            </p>
            <div className="bg-white/5 rounded-xl p-6 my-6">
              <table className="w-full text-left text-sm">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="py-2 text-white">Property</th>
                    <th className="py-2 text-white">EPR</th>
                    <th className="py-2 text-white">XLPE</th>
                  </tr>
                </thead>
                <tbody className="text-white/70">
                  <tr className="border-b border-white/5">
                    <td className="py-2">Flexibility</td>
                    <td className="py-2 text-green-400">More flexible, easier to pull</td>
                    <td className="py-2">Stiffer, larger bend radius</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-2">Moisture Resistance</td>
                    <td className="py-2 text-green-400">Superior moisture resistance</td>
                    <td className="py-2">Susceptible to water treeing</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-2">Dielectric Losses</td>
                    <td className="py-2">Higher losses</td>
                    <td className="py-2 text-green-400">Lower losses at higher voltages</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-2">Temperature Rating</td>
                    <td className="py-2">90C continuous, 130C emergency</td>
                    <td className="py-2">90C continuous, 130C emergency</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-2">Cost</td>
                    <td className="py-2">Higher cost</td>
                    <td className="py-2 text-green-400">Lower cost</td>
                  </tr>
                  <tr>
                    <td className="py-2">Best Use</td>
                    <td className="py-2">Wet locations, tight spaces, frequent handling</td>
                    <td className="py-2">Long runs, direct burial, cost-sensitive projects</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p>
              Both types meet IEEE 1580 and ICEA standards. For industrial plants where cables may be pulled through
              multiple bends and tight conduit runs, EPR is often preferred for its flexibility. For long underground
              utility runs, XLPE dominates due to lower cost and excellent dielectric performance.
            </p>

            <h3>Shielding: Why It Matters</h3>
            <p>
              Cables above 2,000V require shielding per NEC 310.10(E). The shield serves three critical functions:
            </p>
            <ul>
              <li><strong>Electric field confinement:</strong> The shield keeps the electric field symmetrically contained within the insulation, preventing surface discharges and premature insulation breakdown</li>
              <li><strong>Personnel safety:</strong> The grounded metallic shield ensures the cable exterior is at ground potential, protecting anyone who touches the cable jacket</li>
              <li><strong>Fault current path:</strong> The concentric neutral or tape shield provides a return path for ground fault current, enabling protective relays to detect and clear faults quickly</li>
            </ul>

            <h2>MV Switchgear Types</h2>
            <p>
              Medium voltage switchgear is the heart of an MV distribution system. It houses circuit breakers,
              disconnect switches, protective relays, metering, and bus connections. Switchgear comes in several
              construction types, each offering different levels of protection and serviceability:
            </p>

            <h3>Metal-Clad Switchgear</h3>
            <p>
              Metal-clad switchgear is the highest grade of MV switchgear, built to IEEE C37.20.2 standards.
              Key features include:
            </p>
            <ul>
              <li><strong>Drawout breakers:</strong> Circuit breakers can be withdrawn from the cubicle for testing or maintenance without de-energizing the bus</li>
              <li><strong>Compartmentalization:</strong> Each major component (breaker, bus, cable termination) is in a separate grounded metal compartment with automatic shutters</li>
              <li><strong>Automatic shutters:</strong> When the breaker is withdrawn, metal shutters close over the bus stabs to prevent accidental contact</li>
              <li><strong>Voltage range:</strong> Typically 5 kV through 38 kV class</li>
              <li><strong>Application:</strong> Utility substations, large industrial main switchgear, critical facilities</li>
            </ul>

            <h3>Metal-Enclosed Switchgear</h3>
            <p>
              Metal-enclosed switchgear (IEEE C37.20.3) provides a lower-cost alternative. It does not require
              compartmentalization between all components and may use fixed-mount breakers. Common in industrial
              applications where the highest level of compartmentalization is not required.
            </p>

            <h3>Pad-Mounted Switchgear</h3>
            <p>
              Pad-mounted switchgear is designed for outdoor installation on a concrete pad, commonly used in
              underground distribution systems. It features:
            </p>
            <ul>
              <li>Tamper-resistant, locked enclosures suitable for public areas</li>
              <li>Load-break switches and fused disconnects</li>
              <li>Loop-feed capability for distribution system flexibility</li>
              <li>SF6 or vacuum interrupting devices</li>
            </ul>

            <h2>Vacuum vs SF6 Circuit Breakers</h2>
            <p>
              The two dominant medium voltage circuit breaker technologies are vacuum interrupters and SF6
              (sulfur hexafluoride) gas breakers. As an electrician working on MV systems, you need to understand
              the differences:
            </p>
            <div className="bg-white/5 rounded-xl p-6 my-6">
              <table className="w-full text-left text-sm">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="py-2 text-white">Feature</th>
                    <th className="py-2 text-white">Vacuum Circuit Breaker (VCB)</th>
                    <th className="py-2 text-white">SF6 Circuit Breaker</th>
                  </tr>
                </thead>
                <tbody className="text-white/70">
                  <tr className="border-b border-white/5">
                    <td className="py-2">Arc Quenching</td>
                    <td className="py-2">Arc extinguished in vacuum (10^-6 torr)</td>
                    <td className="py-2">Arc quenched in pressurized SF6 gas</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-2">Voltage Range</td>
                    <td className="py-2">Up to 38 kV (most common up to 15 kV)</td>
                    <td className="py-2">Up to 800 kV (used across all MV/HV)</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-2">Maintenance</td>
                    <td className="py-2 text-green-400">Very low maintenance, sealed bottles</td>
                    <td className="py-2">Requires gas monitoring and leak detection</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-2">Environmental</td>
                    <td className="py-2 text-green-400">No greenhouse gas concerns</td>
                    <td className="py-2">SF6 is a potent greenhouse gas (23,500x CO2)</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-2">Size</td>
                    <td className="py-2 text-green-400">Compact</td>
                    <td className="py-2">Larger for equivalent ratings</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-2">Interrupting Capacity</td>
                    <td className="py-2">Up to 40 kA typical</td>
                    <td className="py-2">Up to 63 kA and above</td>
                  </tr>
                  <tr>
                    <td className="py-2">Industry Trend</td>
                    <td className="py-2 text-green-400">Growing rapidly, preferred for new MV installations</td>
                    <td className="py-2">Being phased out at MV level due to environmental concerns</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p>
              For most 5 kV and 15 kV class applications, vacuum circuit breakers have become the standard. They
              offer excellent performance with minimal maintenance. SF6 breakers remain common in older installations
              and at higher voltage levels (25 kV and 35 kV class), though manufacturers are developing
              SF6-free alternatives using vacuum technology or environmentally friendly gases.
            </p>

            <h2>MV Transformers</h2>
            <p>
              Medium voltage transformers step voltage down from utility distribution levels to usable facility
              voltages. Understanding transformer types and their characteristics is essential for any electrician
              working in the MV space.
            </p>

            <h3>Liquid-Filled Transformers</h3>
            <ul>
              <li><strong>Mineral oil:</strong> The traditional dielectric fluid. Excellent cooling and insulating properties. Requires containment due to environmental concerns. Subject to fire codes limiting indoor use.</li>
              <li><strong>FR3 (natural ester):</strong> Biodegradable, high flash point (360C vs 145C for mineral oil). Increasingly popular for indoor and environmentally sensitive locations.</li>
              <li><strong>Silicone fluid:</strong> Non-flammable, suitable for indoor installations where mineral oil is prohibited.</li>
            </ul>

            <h3>Dry-Type Transformers</h3>
            <ul>
              <li><strong>Cast coil:</strong> Windings encapsulated in epoxy resin. Excellent moisture and contamination resistance. Ideal for harsh environments.</li>
              <li><strong>VPI (Vacuum Pressure Impregnated):</strong> Windings impregnated with varnish under vacuum. Common for indoor medium voltage applications up to 35 kV class.</li>
            </ul>

            <div className="bg-gradient-to-r from-amber-900/30 to-cyan-900/30 rounded-xl p-6 my-6">
              <h4 className="text-white font-semibold mb-3">Common MV Transformer Configurations</h4>
              <div className="space-y-3 text-white/80">
                <p><strong>13.8 kV to 480Y/277V:</strong> Large industrial and commercial facilities</p>
                <p><strong>12.47 kV to 208Y/120V:</strong> Utility pad-mounted serving commercial buildings</p>
                <p><strong>4.16 kV to 480Y/277V:</strong> Older industrial plants and process facilities</p>
                <p><strong>34.5 kV to 13.8 kV:</strong> Substation step-down for campus distribution</p>
              </div>
            </div>

            <h3>Transformer Cooling Classes</h3>
            <p>
              Transformer nameplate ratings include a cooling class designation that tells you how the transformer
              dissipates heat:
            </p>
            <div className="bg-white/5 rounded-xl p-6 my-6">
              <table className="w-full text-left text-sm">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="py-2 text-white">Code</th>
                    <th className="py-2 text-white">Type</th>
                    <th className="py-2 text-white">Description</th>
                  </tr>
                </thead>
                <tbody className="text-white/70">
                  <tr className="border-b border-white/5">
                    <td className="py-2 font-mono">ONAN</td>
                    <td className="py-2">Liquid</td>
                    <td className="py-2">Oil Natural, Air Natural (self-cooled)</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-2 font-mono">ONAF</td>
                    <td className="py-2">Liquid</td>
                    <td className="py-2">Oil Natural, Air Forced (fans added)</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-2 font-mono">AA</td>
                    <td className="py-2">Dry</td>
                    <td className="py-2">Air natural (self-cooled)</td>
                  </tr>
                  <tr>
                    <td className="py-2 font-mono">FA</td>
                    <td className="py-2">Dry</td>
                    <td className="py-2">Forced air (fan-cooled, higher rating)</td>
                  </tr>
                </tbody>
              </table>
            </div>


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

            <h2>Protective Relaying Basics</h2>
            <p>
              Protective relaying is the brain of the MV system. Relays monitor electrical quantities (current,
              voltage, frequency, impedance) and trip circuit breakers when abnormal conditions are detected.
              Understanding relay fundamentals is essential for any electrician working on MV equipment.
            </p>

            <h3>Common Relay Functions (ANSI Device Numbers)</h3>
            <div className="bg-white/5 rounded-xl p-6 my-6">
              <table className="w-full text-left text-sm">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="py-2 text-white">ANSI #</th>
                    <th className="py-2 text-white">Function</th>
                    <th className="py-2 text-white">What It Protects Against</th>
                  </tr>
                </thead>
                <tbody className="text-white/70">
                  <tr className="border-b border-white/5">
                    <td className="py-2 font-mono text-cyan-400">50</td>
                    <td className="py-2">Instantaneous Overcurrent</td>
                    <td className="py-2">Short circuits (trips immediately above setpoint)</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-2 font-mono text-cyan-400">51</td>
                    <td className="py-2">Time Overcurrent</td>
                    <td className="py-2">Overloads and through-faults (inverse time curve)</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-2 font-mono text-cyan-400">50N/51N</td>
                    <td className="py-2">Ground Fault (Neutral)</td>
                    <td className="py-2">Ground faults detected via neutral CT</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-2 font-mono text-cyan-400">50G/51G</td>
                    <td className="py-2">Ground Fault (Residual/Zero-Sequence)</td>
                    <td className="py-2">Ground faults detected via zero-sequence CT</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-2 font-mono text-cyan-400">27</td>
                    <td className="py-2">Undervoltage</td>
                    <td className="py-2">Loss of voltage or voltage sag</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-2 font-mono text-cyan-400">59</td>
                    <td className="py-2">Overvoltage</td>
                    <td className="py-2">Voltage exceeding normal limits</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-2 font-mono text-cyan-400">87</td>
                    <td className="py-2">Differential</td>
                    <td className="py-2">Internal faults in transformers, buses, generators</td>
                  </tr>
                  <tr>
                    <td className="py-2 font-mono text-cyan-400">25</td>
                    <td className="py-2">Synch Check</td>
                    <td className="py-2">Prevents closing breaker when sources are out of sync</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3>Relay Coordination</h3>
            <p>
              Relay coordination (also called selectivity) ensures that only the breaker closest to the fault trips,
              minimizing the portion of the system that is de-energized. This is achieved through time-current
              coordination studies, where each upstream relay is set to trip at a slightly higher time delay than
              the downstream relay for the same fault current magnitude.
            </p>
            <div className="bg-white/5 rounded-xl p-6 my-6">
              <h4 className="text-white font-semibold mb-3">Key Coordination Principles</h4>
              <ul className="space-y-2 text-white/70">
                <li><strong>Upstream relays slower than downstream:</strong> For any given fault current, the relay nearest the fault should trip first</li>
                <li><strong>Minimum coordination time interval (CTI):</strong> Typically 0.3 to 0.4 seconds between relay curves to account for breaker operating time, relay overtravel, and safety margin</li>
                <li><strong>Instantaneous pickup set above downstream maximum fault:</strong> The upstream 50 element should be set above the maximum fault current that can flow through the downstream breaker</li>
              </ul>
            </div>

            <h3>Current Transformers (CTs) and Potential Transformers (PTs)</h3>
            <p>
              Relays cannot be connected directly to MV bus bars. Current transformers (CTs) and potential
              transformers (PTs or VTs) step the high currents and voltages down to standardized levels that
              relays and meters can safely handle:
            </p>
            <ul>
              <li><strong>CTs:</strong> Standard secondary current is 5A (or 1A). Ratio examples: 400:5, 800:5, 2000:5. Never open-circuit a live CT secondary as dangerous voltages will develop.</li>
              <li><strong>PTs/VTs:</strong> Standard secondary voltage is 120V (line-to-line) or 69.3V (line-to-neutral). Ratio example: 13,800V / 120V = 115:1.</li>
            </ul>

            <h2>Grounding Systems for MV</h2>
            <p>
              Grounding is one of the most critical design decisions in a medium voltage system. The grounding
              method chosen directly affects fault current magnitude, equipment stress, relay coordination,
              personnel safety, and system reliability. There are three primary grounding methods used in MV
              systems:
            </p>

            <h3>Solidly Grounded</h3>
            <div className="bg-white/5 rounded-xl p-6 my-6">
              <p className="text-white font-semibold mb-2">Transformer neutral connected directly to ground</p>
              <div className="space-y-2 text-white/70">
                <p><strong>Ground fault current:</strong> High (can equal or exceed three-phase fault current)</p>
                <p><strong>Advantages:</strong> Easy ground fault detection, lower transient overvoltages, simple relay coordination</p>
                <p><strong>Disadvantages:</strong> High equipment stress during ground faults, arc flash energy is maximized, requires immediate fault clearing</p>
                <p><strong>Where used:</strong> Utility distribution systems, some industrial systems per NEC 250.36</p>
              </div>
            </div>

            <h3>Resistance Grounded</h3>
            <div className="bg-white/5 rounded-xl p-6 my-6">
              <p className="text-white font-semibold mb-2">Neutral connected to ground through a resistor</p>
              <div className="space-y-2 text-white/70">
                <p><strong>Low-resistance grounding (LRG):</strong> Limits ground fault current to 100-1000A (typically 200-400A). Most common for MV industrial systems. Provides enough fault current for reliable relay operation while limiting equipment damage.</p>
                <p><strong>High-resistance grounding (HRG):</strong> Limits ground fault current to less than 10A (typically 1-10A). Allows continued operation during a ground fault. Requires ground fault detection and alarm system. Popular for continuous process industries.</p>
                <p><strong>Advantages:</strong> Reduced equipment damage, lower arc flash energy, better for process continuity (HRG)</p>
                <p><strong>Disadvantages:</strong> Requires specialized relaying. HRG requires a second ground fault to be cleared quickly or damage can escalate.</p>
              </div>
            </div>

            <h3>Ungrounded</h3>
            <div className="bg-white/5 rounded-xl p-6 my-6">
              <p className="text-white font-semibold mb-2">Neutral has no intentional connection to ground</p>
              <div className="space-y-2 text-white/70">
                <p><strong>Ground fault current:</strong> Very low (only capacitive charging current, typically less than 1A)</p>
                <p><strong>Advantages:</strong> Can continue operating with a single ground fault, very low fault current</p>
                <p><strong>Disadvantages:</strong> Difficult to detect ground faults, dangerous transient overvoltages (up to 6x line-to-neutral), a second ground fault becomes a phase-to-phase fault</p>
                <p><strong>Industry trend:</strong> Ungrounded systems are discouraged by IEEE and NEC. Many existing ungrounded systems are being retrofitted with HRG.</p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-green-900/30 to-blue-900/30 rounded-xl p-6 my-6">
              <h4 className="text-white font-semibold mb-3">Recommended Grounding by Application</h4>
              <div className="space-y-2 text-white/70">
                <p><strong>Industrial process (continuous):</strong> High-resistance grounding (HRG) -- allows operation during first ground fault</p>
                <p><strong>Industrial general purpose:</strong> Low-resistance grounding (LRG, 200-400A) -- best balance of protection and damage limitation</p>
                <p><strong>Utility distribution:</strong> Solidly grounded or low-resistance grounded</p>
                <p><strong>Critical facilities (hospitals, data centers):</strong> LRG with fast relay tripping</p>
              </div>
            </div>

            <h2>Safety and Approach Distances</h2>
            <p>
              Working on or near medium voltage equipment is inherently dangerous. The energy available in MV systems
              can produce devastating arc flash events and electrocution is almost always fatal. NFPA 70E and OSHA
              define strict approach boundaries that every electrician must know and respect.
            </p>

            <h3>Approach Boundaries (NFPA 70E Table 130.4(E)(a))</h3>
            <div className="bg-white/5 rounded-xl p-6 my-6">
              <table className="w-full text-left text-sm">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="py-2 text-white">Voltage</th>
                    <th className="py-2 text-white">Limited Approach (Fixed)</th>
                    <th className="py-2 text-white">Restricted Approach</th>
                    <th className="py-2 text-white">Prohibited Approach</th>
                  </tr>
                </thead>
                <tbody className="text-white/70">
                  <tr className="border-b border-white/5">
                    <td className="py-2">750V - 15kV</td>
                    <td className="py-2">10 ft (3.05 m)</td>
                    <td className="py-2">2 ft 2 in (0.66 m)</td>
                    <td className="py-2">7 in (0.18 m)</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-2">15.1kV - 36kV</td>
                    <td className="py-2">10 ft (3.05 m)</td>
                    <td className="py-2">2 ft 7 in (0.79 m)</td>
                    <td className="py-2">10 in (0.25 m)</td>
                  </tr>
                  <tr>
                    <td className="py-2">36.1kV - 46kV</td>
                    <td className="py-2">10 ft (3.05 m)</td>
                    <td className="py-2">2 ft 9 in (0.84 m)</td>
                    <td className="py-2">1 ft 5 in (0.43 m)</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3>Understanding Boundary Definitions</h3>
            <ul>
              <li><strong>Limited Approach Boundary:</strong> The distance within which only qualified persons may enter. No unqualified person should cross this line without escort and training.</li>
              <li><strong>Restricted Approach Boundary:</strong> The distance within which there is an increased risk of electric shock. Requires an energized electrical work permit, proper PPE, and specific training. Only qualified persons with a documented plan may enter.</li>
              <li><strong>Prohibited Approach Boundary:</strong> Equivalent to making contact with the energized conductor. Work within this boundary is treated the same as direct contact and requires the highest level of PPE and justification.</li>
              <li><strong>Arc Flash Boundary:</strong> The distance at which incident energy equals 1.2 cal/cm2 (the threshold for a second-degree burn). This distance is calculated through an arc flash study specific to the equipment.</li>
            </ul>

            <h2>PPE Requirements for MV Work</h2>
            <p>
              Personal protective equipment for medium voltage work goes far beyond the safety glasses and hard hat
              of low-voltage work. NFPA 70E mandates specific PPE based on the hazard/risk category determined by
              an arc flash analysis:
            </p>

            <h3>Arc-Rated PPE Categories</h3>
            <div className="bg-gradient-to-r from-red-900/30 to-amber-900/30 rounded-xl p-6 my-6">
              <div className="space-y-4">
                <div>
                  <p className="text-white font-semibold">Category 1 (4 cal/cm2):</p>
                  <p className="text-white/70 text-sm">Arc-rated long-sleeve shirt and pants, safety glasses, hard hat, hearing protection, leather gloves</p>
                </div>
                <div>
                  <p className="text-white font-semibold">Category 2 (8 cal/cm2):</p>
                  <p className="text-white/70 text-sm">Arc-rated shirt, pants, and face shield with balaclava, hard hat, hearing protection, leather gloves</p>
                </div>
                <div>
                  <p className="text-white font-semibold">Category 3 (25 cal/cm2):</p>
                  <p className="text-white/70 text-sm">Arc flash suit hood, arc-rated coverall, arc-rated jacket, hard hat, hearing protection, rubber insulating gloves with leather protectors</p>
                </div>
                <div>
                  <p className="text-white font-semibold">Category 4 (40 cal/cm2):</p>
                  <p className="text-white/70 text-sm">Arc flash suit hood and full suit (40 cal/cm2 minimum), arc-rated coverall, hard hat, hearing protection, rubber insulating gloves with leather protectors</p>
                </div>
              </div>
            </div>

            <h3>Rubber Insulating Gloves</h3>
            <p>
              Rubber insulating gloves are the primary protection against electrocution in MV work. They are
              classified by voltage rating:
            </p>
            <div className="bg-white/5 rounded-xl p-6 my-6">
              <table className="w-full text-left text-sm">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="py-2 text-white">Glove Class</th>
                    <th className="py-2 text-white">Max Use Voltage (AC)</th>
                    <th className="py-2 text-white">Proof Test Voltage</th>
                    <th className="py-2 text-white">Color Code</th>
                  </tr>
                </thead>
                <tbody className="text-white/70">
                  <tr className="border-b border-white/5">
                    <td className="py-2">Class 0</td>
                    <td className="py-2">1,000V</td>
                    <td className="py-2">5,000V</td>
                    <td className="py-2 text-red-400">Red</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-2">Class 1</td>
                    <td className="py-2">7,500V</td>
                    <td className="py-2">10,000V</td>
                    <td className="py-2 text-white">White</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-2">Class 2</td>
                    <td className="py-2">17,000V</td>
                    <td className="py-2">20,000V</td>
                    <td className="py-2 text-yellow-400">Yellow</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-2">Class 3</td>
                    <td className="py-2">26,500V</td>
                    <td className="py-2">30,000V</td>
                    <td className="py-2 text-green-400">Green</td>
                  </tr>
                  <tr>
                    <td className="py-2">Class 4</td>
                    <td className="py-2">36,000V</td>
                    <td className="py-2">40,000V</td>
                    <td className="py-2 text-orange-400">Orange</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p>
              Rubber insulating gloves must be visually inspected before each use and electrically tested every six
              months per ASTM D120 and OSHA 1910.137. Always wear leather protectors over rubber gloves to prevent
              punctures. An air test (inflate and check for leaks) should be performed before each use in the field.
            </p>

            <h2>Testing and Commissioning</h2>
            <p>
              Before a medium voltage system is energized for the first time (or after major maintenance), a
              comprehensive testing and commissioning program must be completed. This ensures all equipment is
              properly installed, connected, and functioning. Electricians involved in MV commissioning perform
              or assist with the following tests:
            </p>

            <h3>Cable Testing</h3>
            <div className="bg-white/5 rounded-xl p-6 my-6">
              <div className="space-y-3 text-white/70">
                <div>
                  <p className="text-white font-semibold">Insulation Resistance (Megger) Test</p>
                  <p className="text-sm">Applied at recommended DC voltage for the cable class. Minimum acceptable reading varies by cable type and length but typically should be in the hundreds of megohms to gigaohms range. Tests are phase-to-ground and phase-to-phase.</p>
                </div>
                <div>
                  <p className="text-white font-semibold">DC Hi-Pot Test</p>
                  <p className="text-sm">A high DC voltage applied for a specified duration (typically 15 minutes) to stress-test the insulation. Test voltage is typically 80% of factory test voltage for new cable or 60% for aged cable. Being phased out in favor of VLF testing for XLPE cables.</p>
                </div>
                <div>
                  <p className="text-white font-semibold">VLF (Very Low Frequency) Test</p>
                  <p className="text-sm">An AC test at 0.1 Hz or 0.01 Hz applied to the cable. Preferred over DC hi-pot for XLPE insulation because it does not damage the insulation the way DC can. Becoming the industry standard for commissioning and maintenance testing of MV cables.</p>
                </div>
                <div>
                  <p className="text-white font-semibold">Partial Discharge (PD) Test</p>
                  <p className="text-sm">Detects small electrical discharges within the insulation that indicate defects. Can identify problems before they lead to failure. Used on both cables and terminations.</p>
                </div>
              </div>
            </div>

            <h3>Switchgear and Breaker Testing</h3>
            <div className="bg-white/5 rounded-xl p-6 my-6">
              <div className="space-y-3 text-white/70">
                <div>
                  <p className="text-white font-semibold">Contact Resistance Test</p>
                  <p className="text-sm">Micro-ohm measurements across breaker contacts and bus connections. High resistance indicates poor contact pressure, contamination, or wear.</p>
                </div>
                <div>
                  <p className="text-white font-semibold">Insulation Resistance Test</p>
                  <p className="text-sm">Megger testing of bus bars, breaker poles, and PT/CT circuits. Verifies insulation integrity of all components.</p>
                </div>
                <div>
                  <p className="text-white font-semibold">Breaker Timing Test</p>
                  <p className="text-sm">Measures the open and close times of the circuit breaker. Compares against manufacturer specifications to verify mechanical operation. Typical vacuum breaker close time: 50-80 ms, open time: 30-50 ms.</p>
                </div>
                <div>
                  <p className="text-white font-semibold">Relay Testing</p>
                  <p className="text-sm">Secondary injection testing of all protective relays. Verifies pickup settings, time delays, and trip outputs match the coordination study. Includes communication testing for networked relays.</p>
                </div>
              </div>
            </div>

            <h3>Transformer Testing</h3>
            <ul>
              <li><strong>Turns ratio test:</strong> Verifies the voltage ratio matches the nameplate. Deviations greater than 0.5% from calculated ratio indicate winding problems.</li>
              <li><strong>Winding resistance test:</strong> Measures DC resistance of each winding. Used to detect shorted turns, loose connections, and poor contacts in tap changers.</li>
              <li><strong>Insulation resistance:</strong> Megger testing between windings and between each winding and ground.</li>
              <li><strong>Power factor / dissipation factor test:</strong> Measures dielectric losses in insulation. High values indicate moisture, contamination, or insulation deterioration.</li>
              <li><strong>Oil analysis (liquid-filled):</strong> Dissolved gas analysis (DGA) reveals internal arcing, overheating, or insulation breakdown. Dielectric breakdown voltage confirms oil quality.</li>
            </ul>

            <h2>Lockout/Tagout for MV Systems</h2>
            <p>
              Lockout/tagout (LOTO) procedures for MV systems are more complex and more critical than for LV work.
              The consequences of an error are almost always fatal. A proper MV LOTO procedure includes:
            </p>
            <div className="bg-gradient-to-r from-red-900/30 to-purple-900/30 rounded-xl p-6 my-6">
              <ol className="space-y-3 text-white/80">
                <li><strong>1. Identify all energy sources:</strong> MV systems may have multiple feeds, backfeeds through transformers, capacitive stored energy, and generator connections</li>
                <li><strong>2. Notify all affected personnel:</strong> Communication is essential before switching operations begin</li>
                <li><strong>3. Open all disconnect devices:</strong> Open breakers, disconnect switches, and remove fuses in the correct switching sequence</li>
                <li><strong>4. Apply locks and tags:</strong> Each qualified worker applies their own lock and tag to every isolation point</li>
                <li><strong>5. Verify absence of voltage:</strong> Use a properly rated MV voltage detector (hot stick). Test on a known live source, verify the equipment is de-energized, then re-test on a known live source (Live-Dead-Live method)</li>
                <li><strong>6. Apply safety grounds:</strong> Apply visible grounding cables to all three phases after verifying the system is de-energized. Grounds must be sized to carry maximum available fault current.</li>
                <li><strong>7. Document everything:</strong> Record all switching operations, who performed them, and the current status of all devices</li>
              </ol>
            </div>

            <h2>Career Opportunities in MV Work</h2>
            <p>
              Moving from low-voltage residential or commercial work into medium voltage opens significant career
              opportunities and earning potential. MV-qualified electricians are in high demand across multiple
              industries:
            </p>

            <h3>Industries Hiring MV Electricians</h3>
            <div className="grid md:grid-cols-2 gap-4 my-6">
              <div className="bg-white/5 rounded-xl p-4">
                <h4 className="text-cyan-400 font-semibold mb-2">Utilities</h4>
                <p className="text-white/60 text-sm">Line workers and substation electricians maintain and build the distribution grid. MV knowledge is essential for substation work.</p>
              </div>
              <div className="bg-white/5 rounded-xl p-4">
                <h4 className="text-cyan-400 font-semibold mb-2">Industrial Plants</h4>
                <p className="text-white/60 text-sm">Oil refineries, chemical plants, paper mills, steel mills, and manufacturing facilities all have extensive MV systems requiring skilled maintenance.</p>
              </div>
              <div className="bg-white/5 rounded-xl p-4">
                <h4 className="text-cyan-400 font-semibold mb-2">Data Centers</h4>
                <p className="text-white/60 text-sm">Hyperscale data centers receive power at MV levels (typically 12.47 kV or 13.8 kV) and are expanding rapidly with AI workloads.</p>
              </div>
              <div className="bg-white/5 rounded-xl p-4">
                <h4 className="text-cyan-400 font-semibold mb-2">Renewable Energy</h4>
                <p className="text-white/60 text-sm">Solar farms and wind farms collect power at MV (typically 34.5 kV) before stepping up for transmission. Rapidly growing sector.</p>
              </div>
              <div className="bg-white/5 rounded-xl p-4">
                <h4 className="text-cyan-400 font-semibold mb-2">Healthcare Facilities</h4>
                <p className="text-white/60 text-sm">Large hospitals receive MV service and maintain on-site MV switchgear and distribution. Critical power reliability requirements.</p>
              </div>
              <div className="bg-white/5 rounded-xl p-4">
                <h4 className="text-cyan-400 font-semibold mb-2">Testing & Commissioning</h4>
                <p className="text-white/60 text-sm">Firms like Megger, RESA Power, and independent NETA-accredited companies hire technicians for MV testing and commissioning work. Often involves travel.</p>
              </div>
            </div>

            <h3>Getting Into MV Work</h3>
            <p>
              Transitioning from low-voltage to medium-voltage work requires additional training and certifications:
            </p>
            <ul>
              <li><strong>Journeyman license:</strong> A journeyman electrical license is the typical minimum starting point</li>
              <li><strong>NFPA 70E training:</strong> Arc flash safety and qualified person training is mandatory for MV work</li>
              <li><strong>Employer-specific training:</strong> Most MV positions require specific training on the equipment you will work on</li>
              <li><strong>NETA certification:</strong> The International Electrical Testing Association offers Level I through IV certifications for testing technicians. Highly valued in the industry.</li>
              <li><strong>Manufacturer training:</strong> Companies like Eaton, Schneider Electric, ABB, and Siemens offer training programs on their MV equipment</li>
              <li><strong>OSHA 10/30:</strong> Standard safety certifications, often required for job sites</li>
            </ul>

            <h3>Earning Potential</h3>
            <p>
              MV-qualified electricians and testing technicians typically earn 20-40% more than their LV
              counterparts. Specialized roles in commissioning, relay testing, and critical facility maintenance
              command premium wages. Travel-based testing and commissioning work often includes per diem on top of
              higher base pay. Electricians who combine MV experience with specific certifications (NETA, relay
              programming) can reach six-figure incomes relatively quickly in their careers.
            </p>

            <h2>Key Takeaways</h2>
            <div className="bg-gradient-to-r from-cyan-900/30 to-purple-900/30 rounded-xl p-6 my-6">
              <ul className="space-y-3 text-white/80">
                <li><strong>Medium voltage (1kV-69kV)</strong> is a distinct discipline from low-voltage work, requiring specialized knowledge, equipment, and safety procedures</li>
                <li><strong>MV cables are multi-layered</strong> with conductor shields, rated insulation (EPR or XLPE), insulation shields, metallic shields, and jackets -- each layer is essential</li>
                <li><strong>Vacuum circuit breakers</strong> have become the standard for 5 kV and 15 kV class applications due to low maintenance and no environmental concerns</li>
                <li><strong>Grounding method selection</strong> (solidly grounded, resistance grounded, or ungrounded) profoundly affects fault current, relay coordination, arc flash energy, and system reliability</li>
                <li><strong>Safety approach distances</strong> and PPE requirements per NFPA 70E are non-negotiable -- MV systems can kill instantly</li>
                <li><strong>Testing and commissioning</strong> are essential before energizing MV equipment, including megger, hi-pot, contact resistance, and relay verification testing</li>
                <li><strong>Career opportunities</strong> in MV work are growing rapidly, with higher earning potential and demand across utilities, industrial, data center, and renewable energy sectors</li>
              </ul>
            </div>

            <h2>Use Ampora for Electrical Reference</h2>
            <p>
              Whether you are studying for your journeyman exam, looking up NEC code references, or calculating
              fault currents for a relay coordination study, Ampora gives you instant answers. The AI-powered
              assistant understands electrical concepts and can help you work through complex problems in the field
              or at your desk.
            </p>
          </div>

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

          {/* Related Posts */}
          <div className="mt-12 pt-8 border-t border-white/10">
            <h3 className="text-xl font-display font-bold mb-6">Related Articles</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <Link href="/blog/transformer-sizing-guide" className="group bg-white/5 hover:bg-white/10 rounded-xl p-6 transition-all">
                <h4 className="font-semibold group-hover:text-purple-400 transition-colors">Transformer Sizing Guide</h4>
                <p className="text-white/60 text-sm mt-2">kVA calculations and NEC Article 450 requirements for transformer installations.</p>
              </Link>
              <Link href="/blog/electrical-safety-nfpa-70e" className="group bg-white/5 hover:bg-white/10 rounded-xl p-6 transition-all">
                <h4 className="font-semibold group-hover:text-purple-400 transition-colors">Electrical Safety: NFPA 70E</h4>
                <p className="text-white/60 text-sm mt-2">Arc flash safety, PPE requirements, and safe work practices for electricians.</p>
              </Link>
            </div>
          </div>
        </article>
      </div>
    </main>
  );
}
