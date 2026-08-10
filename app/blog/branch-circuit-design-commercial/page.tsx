import { Metadata } from "next";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import { BlogPostingJsonLd, BreadcrumbJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Commercial Branch Circuit Design: NEC Requirements and Best Practices",
  description: "Complete guide to commercial branch circuit design per NEC Article 210. Learn circuit types, load calculations, voltage drop, panelboard layout strategies, and spare capacity planning for commercial electrical systems.",
  keywords: [
    "commercial branch circuit design",
    "NEC Article 210",
    "branch circuit types",
    "commercial electrical design",
    "receptacle load calculations",
    "lighting branch circuits",
    "panelboard layout",
    "multi-wire branch circuits",
    "voltage drop calculations",
    "circuit identification NEC",
    "spare capacity planning",
    "commercial occupancy electrical",
    "branch circuit sizing",
    "HVAC equipment circuits",
    "circuit labeling requirements"
  ],
  openGraph: {
    title: "Commercial Branch Circuit Design: NEC Requirements and Best Practices",
    description: "Complete guide to commercial branch circuit design per NEC Article 210 with load calculations, panelboard strategies, and best practices.",
    type: "article",
    publishedTime: "2026-03-02",
  },
};

function HeroIllustration() {
  return (
    <svg viewBox="0 0 400 180" className="w-full h-44 md:h-52" aria-label="Commercial electrical panelboard and branch circuit illustration">
      <defs>
        <linearGradient id="panelGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#374151"/>
          <stop offset="100%" stopColor="#1f2937"/>
        </linearGradient>
        <linearGradient id="circuitGlow" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.8"/>
          <stop offset="100%" stopColor="#f59e0b" stopOpacity="0.1"/>
        </linearGradient>
      </defs>

      {/* Panel enclosure */}
      <rect x="30" y="10" width="120" height="160" rx="4" fill="url(#panelGrad)" stroke="#6b7280" strokeWidth="2"/>
      <rect x="38" y="18" width="104" height="144" rx="2" fill="#111827" stroke="#374151" strokeWidth="1"/>

      {/* Main breaker */}
      <rect x="58" y="24" width="64" height="16" rx="2" fill="#4b5563" stroke="#6b7280" strokeWidth="1"/>
      <text x="90" y="36" textAnchor="middle" fill="#f59e0b" fontSize="8" fontWeight="bold">200A</text>

      {/* Breaker rows - left column */}
      {[0, 1, 2, 3, 4, 5].map((i) => (
        <g key={`l${i}`}>
          <rect x="44" y={48 + i * 18} width="28" height="14" rx="2" fill={i < 5 ? "#374151" : "#1f2937"} stroke={i < 5 ? "#6b7280" : "#374151"} strokeWidth="1"/>
          {i < 5 && <rect x={46} y={50 + i * 18} width={8} height={10} rx="1" fill={i === 0 ? "#ef4444" : i === 1 ? "#f59e0b" : i === 2 ? "#22c55e" : i === 3 ? "#3b82f6" : "#8b5cf6"}/>}
        </g>
      ))}

      {/* Breaker rows - right column */}
      {[0, 1, 2, 3, 4, 5].map((i) => (
        <g key={`r${i}`}>
          <rect x="108" y={48 + i * 18} width="28" height="14" rx="2" fill={i < 4 ? "#374151" : "#1f2937"} stroke={i < 4 ? "#6b7280" : "#374151"} strokeWidth="1"/>
          {i < 4 && <rect x={130} y={50 + i * 18} width={8} height={10} rx="1" fill={i === 0 ? "#ef4444" : i === 1 ? "#f59e0b" : i === 2 ? "#06b6d4" : "#22c55e"}/>}
        </g>
      ))}

      {/* Bus bars */}
      <line x1="80" y1="42" x2="80" y2="155" stroke="#d97706" strokeWidth="2"/>
      <line x1="100" y1="42" x2="100" y2="155" stroke="#d97706" strokeWidth="2"/>

      {/* Branch circuit lines going right */}
      <line x1="150" y1="55" x2="210" y2="55" stroke="#ef4444" strokeWidth="2"/>
      <line x1="150" y1="73" x2="210" y2="73" stroke="#f59e0b" strokeWidth="2"/>
      <line x1="150" y1="91" x2="210" y2="91" stroke="#22c55e" strokeWidth="2"/>
      <line x1="150" y1="109" x2="210" y2="109" stroke="#3b82f6" strokeWidth="2"/>

      {/* Circuit labels */}
      <rect x="210" y="44" width="80" height="18" rx="3" fill="#ef4444" fillOpacity="0.15" stroke="#ef4444" strokeOpacity="0.4" strokeWidth="1"/>
      <text x="250" y="57" textAnchor="middle" fill="#fca5a5" fontSize="8">20A Lighting</text>

      <rect x="210" y="62" width="80" height="18" rx="3" fill="#f59e0b" fillOpacity="0.15" stroke="#f59e0b" strokeOpacity="0.4" strokeWidth="1"/>
      <text x="250" y="75" textAnchor="middle" fill="#fcd34d" fontSize="8">20A Receptacles</text>

      <rect x="210" y="80" width="80" height="18" rx="3" fill="#22c55e" fillOpacity="0.15" stroke="#22c55e" strokeOpacity="0.4" strokeWidth="1"/>
      <text x="250" y="93" textAnchor="middle" fill="#86efac" fontSize="8">30A HVAC</text>

      <rect x="210" y="98" width="80" height="18" rx="3" fill="#3b82f6" fillOpacity="0.15" stroke="#3b82f6" strokeOpacity="0.4" strokeWidth="1"/>
      <text x="250" y="111" textAnchor="middle" fill="#93c5fd" fontSize="8">50A Equipment</text>

      {/* Load summary box */}
      <rect x="220" y="130" width="160" height="40" rx="4" fill="#f59e0b" fillOpacity="0.12" stroke="#f59e0b" strokeOpacity="0.4" strokeWidth="1"/>
      <text x="300" y="148" textAnchor="middle" fill="#fcd34d" fontSize="10" fontWeight="bold">Panel Load: 38,400 VA</text>
      <text x="300" y="162" textAnchor="middle" fill="#fcd34d" fontSize="9">42 Spaces | 208Y/120V</text>

      {/* Building outline (top right) */}
      <g transform="translate(310, 10)">
        <rect x="0" y="20" width="70" height="55" fill="#1f2937" stroke="#4b5563" strokeWidth="1.5" rx="2"/>
        <rect x="5" y="0" width="60" height="20" fill="#1f2937" stroke="#4b5563" strokeWidth="1"/>
        <text x="35" y="14" textAnchor="middle" fill="#9ca3af" fontSize="7">COMMERCIAL</text>
        {/* Windows */}
        {[0, 1, 2].map((col) => (
          <g key={col}>
            <rect x={10 + col * 20} y={28} width={12} height={12} fill="#1e3a5f" stroke="#3b82f6" strokeWidth="0.5" rx="1"/>
            <rect x={10 + col * 20} y={48} width={12} height={12} fill="#1e3a5f" stroke="#3b82f6" strokeWidth="0.5" rx="1"/>
          </g>
        ))}
      </g>
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
            { name: "Commercial Branch Circuit Design", url: "https://amporalabs.com/blog/branch-circuit-design-commercial" },
          ]}
        />
        <BlogPostingJsonLd
          headline="Commercial Branch Circuit Design: NEC Requirements and Best Practices"
          description="Complete guide to commercial branch circuit design per NEC Article 210 with load calculations, panelboard layout strategies, and best practices."
          datePublished="2026-03-02"
          url="https://amporalabs.com/blog/branch-circuit-design-commercial"
        />

        <article className="max-w-4xl mx-auto px-6 py-12">
          <nav className="text-sm text-white/60 mb-8">
            <Link href="/" className="hover:text-white">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/blog" className="hover:text-white">Blog</Link>
            <span className="mx-2">/</span>
            <span className="text-white">Commercial Branch Circuit Design</span>
          </nav>

          <header className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <span className="px-3 py-1 bg-amber-600/30 text-amber-300 text-sm font-medium rounded-full">
                Calculations
              </span>
              <span className="text-white/40 text-sm">March 2, 2026</span>
              <span className="text-white/40 text-sm">• 22 min read</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">
              Commercial Branch Circuit Design: NEC Requirements and Best Practices
            </h1>
            <p className="text-xl text-white/70">
              A properly designed branch circuit system is the backbone of every commercial electrical installation. Learn how to size, calculate, and lay out branch circuits that meet NEC requirements and serve your building reliably for decades.
            </p>
          </header>

          <div className="mb-12 bg-gradient-to-br from-amber-900/20 to-orange-900/20 rounded-2xl p-6 border border-white/10">
            <HeroIllustration />
          </div>

          <div className="prose prose-invert prose-lg max-w-none">

            <h2>Understanding Branch Circuits in Commercial Buildings</h2>
            <p>
              A branch circuit is defined by the NEC (Article 100) as the circuit conductors between the final overcurrent device protecting the circuit and the outlet(s). In commercial buildings, branch circuits serve everything from general-purpose receptacles and lighting to dedicated HVAC equipment and specialized machinery. Getting the design right from the start prevents costly rework, tripped breakers, and code violations during inspection.
            </p>
            <p>
              NEC Article 210 is the primary code section governing branch circuits, but commercial designers must also reference Article 220 (Branch-Circuit, Feeder, and Service Load Calculations), Article 408 (Switchboards, Switchgear, and Panelboards), and occupancy-specific articles like Article 517 (Healthcare), Article 518 (Assembly Occupancies), and Article 520 (Theaters and Performance Venues).
            </p>

            <h2>Branch Circuit Types by Ampere Rating (NEC 210.3)</h2>
            <p>
              The NEC recognizes five standard branch circuit ratings for commercial installations. Each rating dictates the conductor size, overcurrent protection, and permissible outlet types. Understanding these ratings is the foundation of circuit design.
            </p>

            <div className="overflow-x-auto my-8">
              <table className="w-full text-left text-sm">
                <thead>
                  <tr className="border-b border-white/20">
                    <th className="py-3 pr-4 text-amber-300 font-semibold">Circuit Rating</th>
                    <th className="py-3 pr-4 text-amber-300 font-semibold">Min. Wire Size (Cu)</th>
                    <th className="py-3 pr-4 text-amber-300 font-semibold">Overcurrent Device</th>
                    <th className="py-3 text-amber-300 font-semibold">Typical Commercial Use</th>
                  </tr>
                </thead>
                <tbody className="text-white/70">
                  <tr className="border-b border-white/5">
                    <td className="py-3 pr-4 font-semibold text-white">15 Ampere</td>
                    <td className="py-3 pr-4">#14 AWG</td>
                    <td className="py-3 pr-4">15A breaker or fuse</td>
                    <td className="py-3">General lighting, office receptacles (limited)</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-3 pr-4 font-semibold text-white">20 Ampere</td>
                    <td className="py-3 pr-4">#12 AWG</td>
                    <td className="py-3 pr-4">20A breaker or fuse</td>
                    <td className="py-3">General receptacles, office circuits, lighting</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-3 pr-4 font-semibold text-white">30 Ampere</td>
                    <td className="py-3 pr-4">#10 AWG</td>
                    <td className="py-3 pr-4">30A breaker or fuse</td>
                    <td className="py-3">Small HVAC units, water heaters, dryers</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-3 pr-4 font-semibold text-white">40 Ampere</td>
                    <td className="py-3 pr-4">#8 AWG</td>
                    <td className="py-3 pr-4">40A breaker or fuse</td>
                    <td className="py-3">Commercial cooking equipment, large HVAC</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-3 pr-4 font-semibold text-white">50 Ampere</td>
                    <td className="py-3 pr-4">#6 AWG</td>
                    <td className="py-3 pr-4">50A breaker or fuse</td>
                    <td className="py-3">Ranges, large equipment, welding receptacles</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="bg-amber-900/20 border border-amber-500/30 rounded-xl p-6 my-6">
              <p className="text-amber-300 font-semibold mb-2">Pro Tip: 20A Is the Commercial Standard</p>
              <p className="text-white/70">
                In commercial construction, 20-ampere branch circuits are the workhorse. NEC 210.11(B) requires that for occupancies other than dwelling units, receptacle outlets must be supplied by 20-ampere branch circuits. While 15A circuits are permitted for lighting only, most commercial specs default to 20A circuits throughout to provide flexibility and accommodate future load changes.
              </p>
            </div>

            <h3>15-Ampere Branch Circuits</h3>
            <p>
              In commercial buildings, 15A circuits are typically reserved for dedicated lighting circuits in areas with low fixture counts. They use #14 AWG conductors and can supply receptacle outlets only when the circuit serves multiple outlets (not a single outlet). However, since NEC 210.11(B) requires 20A circuits for commercial receptacle loads, 15A circuits in commercial spaces are generally limited to lighting-only applications.
            </p>

            <h3>20-Ampere Branch Circuits</h3>
            <p>
              The 20A circuit is the default for commercial general-purpose circuits. Per NEC 210.11(B), all receptacle outlets in non-dwelling occupancies must be on 20A branch circuits. These circuits use #12 AWG minimum conductors and can supply both 15A and 20A receptacle outlets. A 20A circuit provides 2,400 VA at 120V or 4,800 VA at 208V single-phase, making it suitable for the majority of office and retail loads.
            </p>

            <h3>30-Ampere Branch Circuits</h3>
            <p>
              The 30A branch circuit requires #10 AWG conductors and serves fixed appliances, including small rooftop HVAC units, commercial water heaters, and some kitchen equipment. Per NEC 210.23(B), a 30A circuit supplying two or more outlets may only serve fixed appliances. No single cord-and-plug-connected appliance on the circuit can exceed 24A (80% of the circuit rating for continuous loads).
            </p>

            <h3>40-Ampere and 50-Ampere Branch Circuits</h3>
            <p>
              These larger circuits serve heavy commercial equipment. A 40A circuit (#8 AWG) handles commercial cooking equipment like griddles and fryers, while 50A circuits (#6 AWG) serve electric ranges, large welders, and high-capacity equipment. Per NEC 210.23(C) and (D), circuits rated 40A and 50A that serve two or more outlets may supply only fixed appliances, infrared heating units, or heavy-duty lampholders (50A only includes cooking appliances).
            </p>

            <h2>Multi-Wire Branch Circuits (MWBC)</h2>
            <p>
              A multi-wire branch circuit consists of two or more ungrounded conductors with a voltage between them, and a common neutral (grounded conductor) carrying only the unbalanced current. In 208Y/120V commercial systems, MWBCs are an efficient way to reduce conduit fill and copper costs.
            </p>

            <h3>NEC Requirements for MWBCs</h3>
            <ul>
              <li><strong>NEC 210.4(A):</strong> Multi-wire branch circuits must supply only line-to-neutral loads in commercial buildings (unless the circuit supplies only one piece of equipment).</li>
              <li><strong>NEC 210.4(B):</strong> All ungrounded conductors of a multi-wire branch circuit must be disconnected simultaneously at the point where the branch circuit originates. This means using a common-trip multi-pole breaker or identified handle ties.</li>
              <li><strong>NEC 300.13(B):</strong> The neutral conductor must not be interrupted (no splice in the neutral without also splicing the hot conductors through the same device box). This prevents an open neutral from creating dangerous voltage imbalances.</li>
            </ul>

            <div className="bg-red-900/20 border border-red-500/30 rounded-xl p-6 my-6">
              <p className="text-red-300 font-semibold mb-2">Critical Warning: Phase Selection on MWBCs</p>
              <p className="text-white/70">
                On a 208Y/120V three-phase system, the ungrounded conductors of a multi-wire branch circuit must be connected to different phases (A-B, B-C, or A-C). Connecting both conductors to the same phase creates a parallel path through the neutral, overloading it. Always verify phase connections at the panel and label MWBCs clearly.
              </p>
            </div>

            <h3>MWBC Advantages in Commercial Design</h3>
            <div className="bg-white/5 rounded-xl p-6 my-6">
              <h4 className="text-white font-semibold mb-4">Cost Comparison: Two Separate Circuits vs. One MWBC</h4>
              <table className="w-full text-left text-sm">
                <thead>
                  <tr className="border-b border-white/20">
                    <th className="py-2 pr-4 text-amber-300">Parameter</th>
                    <th className="py-2 pr-4 text-amber-300">Two Separate 20A Circuits</th>
                    <th className="py-2 text-amber-300">One MWBC (2-circuit)</th>
                  </tr>
                </thead>
                <tbody className="text-white/70">
                  <tr className="border-b border-white/5">
                    <td className="py-2 pr-4">Hot conductors</td>
                    <td className="py-2 pr-4">2 x #12 AWG (4 total)</td>
                    <td className="py-2">2 x #12 AWG</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-2 pr-4">Neutral conductors</td>
                    <td className="py-2 pr-4">2 x #12 AWG</td>
                    <td className="py-2">1 x #12 AWG (shared)</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-2 pr-4">Ground conductors</td>
                    <td className="py-2 pr-4">2 x #12 AWG</td>
                    <td className="py-2">1 x #12 AWG (shared)</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-2 pr-4">Total conductors in conduit</td>
                    <td className="py-2 pr-4">6 (two separate conduits likely)</td>
                    <td className="py-2">4 (one conduit)</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-2 pr-4">Breaker spaces used</td>
                    <td className="py-2 pr-4">2 single-pole</td>
                    <td className="py-2">1 two-pole (2 spaces)</td>
                  </tr>
                  <tr className="border-t border-white/10">
                    <td className="py-2 pr-4 text-amber-300 font-semibold">Copper savings</td>
                    <td className="py-2 pr-4">Baseline</td>
                    <td className="py-2 text-amber-300 font-semibold">~33% reduction</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2>Receptacle Load Calculations for Commercial Spaces</h2>
            <p>
              Accurate receptacle load calculations are essential for sizing branch circuits and feeders in commercial buildings. The NEC provides specific methods depending on the occupancy type and the number of receptacles.
            </p>

            <h3>General Receptacle Load (NEC 220.44)</h3>
            <p>
              For commercial occupancies, each general-use receptacle outlet is calculated at 180 VA per strap (single, duplex, or triplex receptacles count as one outlet per yoke). This value represents the maximum expected load per outlet position.
            </p>

            <div className="bg-white/5 rounded-xl p-6 my-6">
              <h4 className="text-white font-semibold mb-4">Example: Office Floor Receptacle Calculation</h4>
              <div className="space-y-3 text-white/80">
                <p><strong>Given:</strong> Office floor with 120 duplex receptacle outlets on 120V, 20A circuits</p>
                <p><strong>Step 1:</strong> Calculate total receptacle VA</p>
                <p className="font-mono ml-4">120 outlets x 180 VA = 21,600 VA</p>
                <p><strong>Step 2:</strong> Apply demand factor per NEC Table 220.44</p>
                <p className="font-mono ml-4">First 10 kVA at 100% = 10,000 VA</p>
                <p className="font-mono ml-4">Remainder at 50% = (21,600 - 10,000) x 0.50 = 5,800 VA</p>
                <p><strong>Step 3:</strong> Total demand load</p>
                <p className="font-mono ml-4 text-amber-300">Total = 10,000 + 5,800 = <strong>15,800 VA</strong></p>
                <p><strong>Step 4:</strong> Determine number of 20A circuits needed</p>
                <p className="font-mono ml-4">Circuit capacity at 80% continuous = 20A x 120V x 0.80 = 1,920 VA</p>
                <p className="font-mono ml-4">Without demand factor: 21,600 / 1,920 = 11.25 = <strong>12 circuits minimum</strong></p>
              </div>
            </div>

            <div className="bg-amber-900/20 border border-amber-500/30 rounded-xl p-6 my-6">
              <p className="text-amber-300 font-semibold mb-2">Pro Tip: Demand Factors Apply to Feeders, Not Branch Circuits</p>
              <p className="text-white/70">
                The NEC Table 220.44 demand factors for receptacle loads apply when calculating feeder and service loads. Individual branch circuits must still be sized for the actual connected load. Do not use feeder demand factors to justify undersizing a branch circuit.
              </p>
            </div>

            <h3>Maximum Outlets Per Circuit</h3>
            <p>
              While the NEC does not explicitly limit the number of receptacle outlets on a 20A circuit in commercial occupancies (unlike some local codes), a practical approach based on the 180 VA per outlet calculation provides guidance:
            </p>
            <div className="bg-gradient-to-r from-amber-900/30 to-orange-900/30 rounded-xl p-6 my-6">
              <p className="text-white font-mono text-lg mb-2">Max outlets (continuous) = (20A x 120V x 0.80) / 180 VA = 10.67</p>
              <p className="text-white/70">Practical limit: <strong>10 receptacle outlets per 20A, 120V circuit</strong></p>
              <p className="text-white/60 text-sm mt-2">For non-continuous loads: (20A x 120V) / 180 VA = 13 outlets maximum</p>
            </div>

            <h2>Lighting Branch Circuit Design</h2>
            <p>
              Lighting represents a significant portion of commercial electrical load and requires careful branch circuit planning. NEC Article 210.11(A) requires a minimum number of branch circuits based on the total computed load, and lighting circuits must be designed to handle continuous operation (most commercial lighting operates more than 3 hours, making it a continuous load per NEC definition).
            </p>

            <h3>Lighting Load by Occupancy (NEC Table 220.12)</h3>
            <div className="overflow-x-auto my-8">
              <table className="w-full text-left text-sm">
                <thead>
                  <tr className="border-b border-white/20">
                    <th className="py-3 pr-4 text-amber-300 font-semibold">Occupancy Type</th>
                    <th className="py-3 pr-4 text-amber-300 font-semibold">VA per Square Foot</th>
                    <th className="py-3 text-amber-300 font-semibold">Example (10,000 sq ft)</th>
                  </tr>
                </thead>
                <tbody className="text-white/70">
                  <tr className="border-b border-white/5">
                    <td className="py-3 pr-4">Office buildings</td>
                    <td className="py-3 pr-4">3.5 VA/sq ft</td>
                    <td className="py-3">35,000 VA</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-3 pr-4">Retail stores</td>
                    <td className="py-3 pr-4">1.5 VA/sq ft</td>
                    <td className="py-3">15,000 VA</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-3 pr-4">Restaurants</td>
                    <td className="py-3 pr-4">1.5 VA/sq ft</td>
                    <td className="py-3">15,000 VA</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-3 pr-4">Warehouses / storage</td>
                    <td className="py-3 pr-4">0.25 VA/sq ft</td>
                    <td className="py-3">2,500 VA</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-3 pr-4">Hotels / motels</td>
                    <td className="py-3 pr-4">1.0 VA/sq ft</td>
                    <td className="py-3">10,000 VA</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-3 pr-4">Healthcare facilities</td>
                    <td className="py-3 pr-4">1.0 VA/sq ft</td>
                    <td className="py-3">10,000 VA</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-3 pr-4">Schools</td>
                    <td className="py-3 pr-4">1.5 VA/sq ft</td>
                    <td className="py-3">15,000 VA</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3>Sizing Lighting Circuits</h3>
            <p>
              Since commercial lighting is almost always a continuous load, the branch circuit must be sized so that the total load does not exceed 80% of the circuit rating per NEC 210.20(A). This is one of the most commonly violated rules in commercial installations.
            </p>

            <div className="bg-white/5 rounded-xl p-6 my-6">
              <h4 className="text-white font-semibold mb-4">Example: Office Lighting Circuit Calculation</h4>
              <div className="space-y-3 text-white/80">
                <p><strong>Given:</strong> Office area with LED fixtures totaling 1,680 watts on a 277V lighting circuit</p>
                <p><strong>Step 1:</strong> Calculate circuit current</p>
                <p className="font-mono ml-4">I = P / V = 1,680W / 277V = 6.06A</p>
                <p><strong>Step 2:</strong> Apply 80% continuous load rule</p>
                <p className="font-mono ml-4">6.06A / 0.80 = 7.58A (required breaker capacity)</p>
                <p><strong>Step 3:</strong> Maximum load on 20A circuit (continuous)</p>
                <p className="font-mono ml-4">20A x 0.80 = 16A maximum continuous load</p>
                <p className="font-mono ml-4">16A x 277V = <strong>4,432 VA available per circuit</strong></p>
                <p className="text-amber-300 mt-4">Result: One 20A/277V circuit can handle 1,680W of LED lighting with ample headroom.</p>
              </div>
            </div>

            <div className="bg-amber-900/20 border border-amber-500/30 rounded-xl p-6 my-6">
              <p className="text-amber-300 font-semibold mb-2">Pro Tip: Use 277V for Commercial Lighting</p>
              <p className="text-white/70">
                In 480Y/277V commercial systems, always run lighting circuits at 277V rather than 120V. At 277V, a 20A circuit can deliver 4,432 VA of continuous load (80% rule) compared to just 1,920 VA at 120V. This means fewer circuits, smaller conduit, and less copper. Most commercial LED drivers and fluorescent ballasts are rated for 277V operation.
              </p>
            </div>

            <h2>HVAC and Equipment Branch Circuits</h2>
            <p>
              HVAC equipment represents some of the largest branch circuit loads in commercial buildings. Each piece of equipment typically requires a dedicated branch circuit, and the NEC has specific sizing requirements that differ from general-purpose circuits.
            </p>

            <h3>Single Motor-Driven Equipment (NEC Article 440)</h3>
            <p>
              For HVAC equipment with hermetic refrigerant motor-compressors (air conditioning and heat pump units), NEC Article 440 governs branch circuit sizing. The equipment nameplate provides two critical values:
            </p>
            <ul>
              <li><strong>Rated Load Amps (RLA):</strong> The operating current under rated conditions</li>
              <li><strong>Maximum Circuit Ampacity (MCA):</strong> Used to size conductors (usually 125% of the largest motor + sum of other loads)</li>
              <li><strong>Maximum Overcurrent Protection (MOP or MOCP):</strong> The maximum breaker or fuse size</li>
            </ul>

            <div className="bg-white/5 rounded-xl p-6 my-6">
              <h4 className="text-white font-semibold mb-4">Example: Sizing an RTU Branch Circuit</h4>
              <div className="space-y-3 text-white/80">
                <p><strong>Given:</strong> 5-ton rooftop unit on 208V, 3-phase</p>
                <p className="ml-4">Nameplate: MCA = 32.4A, MOCP = 45A</p>
                <p><strong>Step 1:</strong> Size conductors for MCA</p>
                <p className="font-mono ml-4">Minimum conductor ampacity = 32.4A</p>
                <p className="font-mono ml-4">Use #8 AWG THHN copper (50A at 75 deg C) per NEC Table 310.16</p>
                <p><strong>Step 2:</strong> Select overcurrent protection</p>
                <p className="font-mono ml-4">Maximum breaker size = 45A (per nameplate MOCP)</p>
                <p className="font-mono ml-4">Use 45A, 3-pole breaker</p>
                <p><strong>Step 3:</strong> Select disconnect</p>
                <p className="font-mono ml-4">Disconnect rating must be at least 115% of RLA or per nameplate</p>
                <p className="text-amber-300 mt-4">Result: #8 AWG THHN, 3-pole 45A breaker, rated disconnect at RTU location.</p>
              </div>
            </div>

            <h3>Multiple Equipment on One Circuit</h3>
            <p>
              Generally, each HVAC unit requires its own dedicated branch circuit. However, NEC 210.23 permits multiple outlets on a branch circuit under certain conditions. For HVAC, the safest and most common practice is one circuit per unit. This simplifies troubleshooting, allows individual equipment isolation, and avoids complex load calculations that often create code issues during inspection.
            </p>

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

            <h2>Voltage Drop Considerations</h2>
            <p>
              While the NEC does not mandate a specific voltage drop limit for branch circuits, NEC 210.19(A) Informational Note No. 4 recommends that the voltage drop on a branch circuit not exceed 3%, and the combined voltage drop of the feeder and branch circuit not exceed 5%. In commercial buildings with long circuit runs, voltage drop is a real design concern that affects equipment performance, LED flicker, and energy efficiency.
            </p>

            <h3>Voltage Drop Formula</h3>
            <div className="bg-gradient-to-r from-amber-900/30 to-orange-900/30 rounded-xl p-6 my-6">
              <p className="text-white font-semibold mb-2">Single-Phase:</p>
              <p className="text-white font-mono text-lg mb-4">VD = (2 x K x I x D) / CM</p>
              <p className="text-white font-semibold mb-2">Three-Phase:</p>
              <p className="text-white font-mono text-lg mb-4">VD = (1.732 x K x I x D) / CM</p>
              <p className="text-white/60 text-sm">Where: K = resistivity (12.9 for copper, 21.2 for aluminum), I = current in amps, D = distance in feet, CM = circular mil area of conductor</p>
            </div>

            <div className="bg-white/5 rounded-xl p-6 my-6">
              <h4 className="text-white font-semibold mb-4">Example: Office Branch Circuit Voltage Drop</h4>
              <div className="space-y-3 text-white/80">
                <p><strong>Given:</strong> 20A circuit, 120V, 150 ft run, #12 AWG copper (6,530 CM), 16A load</p>
                <p><strong>Calculate:</strong></p>
                <p className="font-mono ml-4">VD = (2 x 12.9 x 16 x 150) / 6,530</p>
                <p className="font-mono ml-4">VD = 61,920 / 6,530 = <strong>9.48V</strong></p>
                <p className="font-mono ml-4">% VD = 9.48 / 120 x 100 = <strong>7.9%</strong></p>
                <p className="text-red-400 mt-4">Result: 7.9% exceeds the 3% recommendation. Upsize to #10 AWG.</p>
                <p className="font-mono ml-4 mt-2">#10 AWG (10,380 CM): VD = 61,920 / 10,380 = 5.96V = <strong>5.0%</strong></p>
                <p className="text-amber-300">Still marginal. Consider #8 AWG or relocating the panel closer to the load.</p>
              </div>
            </div>

            <h3>Maximum Circuit Lengths for 3% Voltage Drop</h3>
            <div className="overflow-x-auto my-8">
              <table className="w-full text-left text-sm">
                <thead>
                  <tr className="border-b border-white/20">
                    <th className="py-3 pr-4 text-amber-300 font-semibold">Wire Size</th>
                    <th className="py-3 pr-4 text-amber-300 font-semibold">15A @ 120V</th>
                    <th className="py-3 pr-4 text-amber-300 font-semibold">20A @ 120V</th>
                    <th className="py-3 pr-4 text-amber-300 font-semibold">20A @ 277V</th>
                    <th className="py-3 text-amber-300 font-semibold">20A @ 208V (3ph)</th>
                  </tr>
                </thead>
                <tbody className="text-white/70">
                  <tr className="border-b border-white/5">
                    <td className="py-3 pr-4 font-semibold text-white">#14 AWG</td>
                    <td className="py-3 pr-4">50 ft</td>
                    <td className="py-3 pr-4">N/A</td>
                    <td className="py-3 pr-4">N/A</td>
                    <td className="py-3">N/A</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-3 pr-4 font-semibold text-white">#12 AWG</td>
                    <td className="py-3 pr-4">76 ft</td>
                    <td className="py-3 pr-4">57 ft</td>
                    <td className="py-3 pr-4">132 ft</td>
                    <td className="py-3">88 ft</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-3 pr-4 font-semibold text-white">#10 AWG</td>
                    <td className="py-3 pr-4">121 ft</td>
                    <td className="py-3 pr-4">91 ft</td>
                    <td className="py-3 pr-4">210 ft</td>
                    <td className="py-3">140 ft</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-3 pr-4 font-semibold text-white">#8 AWG</td>
                    <td className="py-3 pr-4">192 ft</td>
                    <td className="py-3 pr-4">144 ft</td>
                    <td className="py-3 pr-4">333 ft</td>
                    <td className="py-3">222 ft</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-white/60 text-sm italic">
              Note: Approximate values for copper conductors at 75 deg C. Actual values vary with conductor temperature, conduit type, and power factor. Always calculate for your specific installation.
            </p>

            <h2>Circuit Identification and Labeling (NEC 408.4)</h2>
            <p>
              Proper circuit identification is not optional — it is an NEC requirement. NEC 408.4 requires that every circuit and circuit modification be legibly identified as to its clear, evident, and specific purpose or use. This identification must be posted at each panelboard and must be of sufficient durability to withstand the environment.
            </p>

            <h3>Labeling Requirements</h3>
            <ul>
              <li><strong>NEC 408.4(A):</strong> Circuit directories must be located on the face or inside the door of the panelboard enclosure.</li>
              <li><strong>NEC 408.4(A) Exception:</strong> Industrial installations with qualified personnel may use qualified persons with other identification methods.</li>
              <li><strong>Legibility:</strong> Handwritten labels are technically permitted but are unprofessional. Use typed, printed, or machine-engraved labels in commercial installations.</li>
              <li><strong>Specificity:</strong> Labels like &quot;misc&quot; or &quot;spare&quot; are not acceptable for active circuits. Each circuit must identify the specific area or equipment served (e.g., &quot;Office 201 Receptacles&quot; or &quot;RTU-3 Compressor&quot;).</li>
            </ul>

            <div className="bg-amber-900/20 border border-amber-500/30 rounded-xl p-6 my-6">
              <p className="text-amber-300 font-semibold mb-2">Pro Tip: Circuit Labeling Best Practices</p>
              <p className="text-white/70">
                Use a consistent naming convention across all panels in the building. A good format is: <span className="font-mono text-amber-200">[Area/Room] - [Load Type]</span>. Examples: &quot;Lobby - Lighting&quot;, &quot;Suite 200 - Receptacles North Wall&quot;, &quot;Kitchen - Dishwasher&quot;. This makes troubleshooting and future modifications significantly easier.
              </p>
            </div>

            <h3>Color Coding for Phase Identification</h3>
            <p>
              While the NEC only mandates specific colors for grounded (white/gray) and grounding (green) conductors, commercial practice establishes standard phase colors for clarity and safety:
            </p>
            <div className="overflow-x-auto my-8">
              <table className="w-full text-left text-sm">
                <thead>
                  <tr className="border-b border-white/20">
                    <th className="py-3 pr-4 text-amber-300 font-semibold">Conductor</th>
                    <th className="py-3 pr-4 text-amber-300 font-semibold">208Y/120V System</th>
                    <th className="py-3 text-amber-300 font-semibold">480Y/277V System</th>
                  </tr>
                </thead>
                <tbody className="text-white/70">
                  <tr className="border-b border-white/5">
                    <td className="py-3 pr-4">Phase A</td>
                    <td className="py-3 pr-4">Black</td>
                    <td className="py-3">Brown</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-3 pr-4">Phase B</td>
                    <td className="py-3 pr-4">Red</td>
                    <td className="py-3">Orange</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-3 pr-4">Phase C</td>
                    <td className="py-3 pr-4">Blue</td>
                    <td className="py-3">Yellow</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-3 pr-4">Neutral</td>
                    <td className="py-3 pr-4">White</td>
                    <td className="py-3">Gray</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-3 pr-4">Ground</td>
                    <td className="py-3 pr-4">Green</td>
                    <td className="py-3">Green</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2>Panelboard Layout Strategies</h2>
            <p>
              A well-organized panelboard layout is the hallmark of professional commercial electrical design. The panel schedule should reflect logical circuit groupings, balanced phase loading, and room for future expansion.
            </p>

            <h3>Phase Balancing</h3>
            <p>
              In three-phase panelboards, loads should be distributed as evenly as possible across all three phases. Unbalanced phases cause excessive neutral current, increased losses, and potential voltage imbalance at equipment terminals. The general rule of thumb is to keep phase loading within 10-15% of each other.
            </p>

            <div className="bg-white/5 rounded-xl p-6 my-6">
              <h4 className="text-white font-semibold mb-4">Example: Balanced Panel Schedule (42-Space, 208Y/120V)</h4>
              <table className="w-full text-left text-sm">
                <thead>
                  <tr className="border-b border-white/20">
                    <th className="py-2 pr-2 text-amber-300 font-semibold">Ckt #</th>
                    <th className="py-2 pr-4 text-amber-300 font-semibold">Description</th>
                    <th className="py-2 pr-2 text-amber-300 font-semibold">Trip</th>
                    <th className="py-2 pr-2 text-amber-300 font-semibold">Phase</th>
                    <th className="py-2 text-amber-300 font-semibold">VA</th>
                  </tr>
                </thead>
                <tbody className="text-white/70 font-mono text-xs">
                  <tr className="border-b border-white/5">
                    <td className="py-2 pr-2">1</td>
                    <td className="py-2 pr-4 font-sans">Lobby Lighting</td>
                    <td className="py-2 pr-2">20A</td>
                    <td className="py-2 pr-2">A</td>
                    <td className="py-2">1,800</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-2 pr-2">3</td>
                    <td className="py-2 pr-4 font-sans">Corridor Lighting</td>
                    <td className="py-2 pr-2">20A</td>
                    <td className="py-2 pr-2">B</td>
                    <td className="py-2">1,600</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-2 pr-2">5</td>
                    <td className="py-2 pr-4 font-sans">Office 101 Lighting</td>
                    <td className="py-2 pr-2">20A</td>
                    <td className="py-2 pr-2">C</td>
                    <td className="py-2">1,920</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-2 pr-2">7</td>
                    <td className="py-2 pr-4 font-sans">Office 101 Receptacles</td>
                    <td className="py-2 pr-2">20A</td>
                    <td className="py-2 pr-2">A</td>
                    <td className="py-2">1,440</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-2 pr-2">9</td>
                    <td className="py-2 pr-4 font-sans">Office 102 Receptacles</td>
                    <td className="py-2 pr-2">20A</td>
                    <td className="py-2 pr-2">B</td>
                    <td className="py-2">1,440</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-2 pr-2">11</td>
                    <td className="py-2 pr-4 font-sans">Break Room Receptacles</td>
                    <td className="py-2 pr-2">20A</td>
                    <td className="py-2 pr-2">C</td>
                    <td className="py-2">1,800</td>
                  </tr>
                  <tr className="border-b border-white/10">
                    <td className="py-2 pr-2" colSpan={3}></td>
                    <td className="py-2 pr-2 text-amber-300 font-semibold font-sans">Totals:</td>
                    <td className="py-2"></td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-2 pr-2" colSpan={3}></td>
                    <td className="py-2 pr-2 font-sans">Phase A</td>
                    <td className="py-2 text-amber-300">3,240 VA</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-2 pr-2" colSpan={3}></td>
                    <td className="py-2 pr-2 font-sans">Phase B</td>
                    <td className="py-2 text-amber-300">3,040 VA</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-2 pr-2" colSpan={3}></td>
                    <td className="py-2 pr-2 font-sans">Phase C</td>
                    <td className="py-2 text-amber-300">3,720 VA</td>
                  </tr>
                </tbody>
              </table>
              <p className="text-white/60 text-sm mt-4">Phase balance within 18% — acceptable. Move break room to Phase A or add Phase C loads to improve balance further.</p>
            </div>

            <h3>Panel Organization Principles</h3>
            <ol>
              <li><strong>Group by function:</strong> Keep lighting circuits together and receptacle circuits together. This simplifies after-hours lighting shutoff and emergency circuit identification.</li>
              <li><strong>Group by area:</strong> Within functional groups, organize circuits by the area they serve. All circuits for Suite 200 should be in a contiguous block.</li>
              <li><strong>Separate lighting and receptacle panels:</strong> In larger commercial buildings, use dedicated lighting panels (LP) and power panels (PP). This allows separate metering, simplifies lighting controls, and keeps harmonic-producing loads isolated.</li>
              <li><strong>Place critical loads near the top:</strong> Emergency and life-safety circuits should be in the top positions of the panel for easy identification.</li>
              <li><strong>Leave spares in logical positions:</strong> Do not group all spares at the bottom. Distribute spare spaces to allow future circuits near related existing loads.</li>
            </ol>

            <h2>Spare Capacity Planning</h2>
            <p>
              One of the biggest mistakes in commercial branch circuit design is failing to plan for future loads. A panel that is 100% full on day one will require expensive modifications when the tenant adds a copier room or the building owner installs EV chargers.
            </p>

            <h3>Industry Standards for Spare Capacity</h3>
            <div className="bg-white/5 rounded-xl p-6 my-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="text-center p-4 bg-white/5 rounded-lg">
                  <p className="text-3xl font-bold text-amber-300">20%</p>
                  <p className="text-white/60 text-sm mt-2">Minimum spare circuit breaker spaces per NEC 408.4</p>
                </div>
                <div className="text-center p-4 bg-white/5 rounded-lg">
                  <p className="text-3xl font-bold text-amber-300">25-30%</p>
                  <p className="text-white/60 text-sm mt-2">Recommended spare capacity for offices and retail</p>
                </div>
                <div className="text-center p-4 bg-white/5 rounded-lg">
                  <p className="text-3xl font-bold text-amber-300">40%+</p>
                  <p className="text-white/60 text-sm mt-2">Recommended for tech/data-heavy occupancies</p>
                </div>
              </div>
            </div>

            <p>
              NEC 408.4 requires that panelboard circuit directories identify spare positions. But smart commercial design goes beyond the minimum. Consider the following spare capacity strategies:
            </p>
            <ul>
              <li><strong>Physical spare spaces:</strong> Leave empty breaker positions in every panel. A 42-space panel should have at least 6-8 spare positions on initial installation.</li>
              <li><strong>Ampacity headroom:</strong> Size the panel main breaker and feeder for 80% of ultimate capacity on day one. This allows 20% growth without upsizing the feeder.</li>
              <li><strong>Conduit spare capacity:</strong> Install larger conduit than initially required. Adding a single trade size costs very little during construction but saves thousands during future expansion.</li>
              <li><strong>Future panel provisions:</strong> In electrical rooms, provide wall space, conduit sleeves, and feeder provisions for future panels.</li>
            </ul>

            <h2>Common Design Mistakes to Avoid</h2>
            <p>
              Even experienced designers make errors in branch circuit design. Here are the most common mistakes encountered during commercial electrical inspections and how to avoid them:
            </p>

            <h3>1. Ignoring the 80% Continuous Load Rule</h3>
            <p>
              This is by far the most common violation. Commercial lighting, electronic loads, and many receptacle circuits are continuous loads. A 20A circuit can only carry 16A of continuous load unless the breaker is rated for 100% continuous operation (these breakers exist but are significantly more expensive and must be used with listed panelboards).
            </p>

            <h3>2. Mixing Receptacle and Lighting on the Same Circuit</h3>
            <p>
              While the NEC permits mixing lighting and receptacle outlets on a branch circuit in commercial occupancies, it creates problems. When someone trips a breaker by plugging in a high-draw appliance, the lights go out too. Separate circuits by load type for reliability and occupant satisfaction.
            </p>

            <h3>3. Failing to Account for Harmonics</h3>
            <p>
              Modern commercial buildings are full of nonlinear loads: LED drivers, switch-mode power supplies, VFDs, and computers. These loads generate triplen harmonics (3rd, 9th, 15th) that add in the neutral conductor rather than canceling. On multi-wire branch circuits feeding nonlinear loads, the neutral current can exceed the phase current. In these cases, the neutral conductor must be sized at 200% (doubled) or the circuit must be derated.
            </p>

            <h3>4. No Dedicated Circuits for Required Equipment</h3>
            <p>
              The NEC and equipment manufacturers often require dedicated circuits. Common examples include:
            </p>
            <ul>
              <li>Elevator machine rooms (NEC 620)</li>
              <li>Fire alarm control panels (NEC 760)</li>
              <li>Electric signs (NEC 600.5)</li>
              <li>Heating equipment (NEC 424)</li>
              <li>HVAC units (manufacturer requirement)</li>
              <li>Commercial kitchen equipment on individual branch circuits per NEC 210.23</li>
            </ul>

            <h3>5. Undersizing for Voltage Drop on Long Runs</h3>
            <p>
              In large commercial buildings, branch circuit runs of 150-200+ feet are common. Designers who size wire purely by ampacity (NEC Table 310.16) without checking voltage drop end up with circuits that cause LED flicker, motor overheating, and premature equipment failure. Always calculate voltage drop for any run exceeding 100 feet.
            </p>

            <h3>6. Insufficient Spare Capacity</h3>
            <p>
              As discussed earlier, filling a panel to 100% on day one is a recipe for expensive change orders. Always design with at least 20% spare capacity in panel spaces and feeder ampacity.
            </p>

            <h2>Commercial Occupancy Considerations</h2>
            <p>
              Different commercial occupancy types have unique branch circuit requirements that go beyond basic NEC Article 210 rules. Understanding these occupancy-specific requirements is critical for passing inspections and delivering functional electrical systems.
            </p>

            <h3>Office Buildings</h3>
            <ul>
              <li><strong>Receptacle density:</strong> Plan for one duplex receptacle per 50-75 sq ft of open office space, and 4-6 receptacles per private office.</li>
              <li><strong>Furniture feed:</strong> Open-office workstations often use modular furniture with prewired connections. These require dedicated 20A circuits per furniture cluster (typically 6-8 workstations per circuit).</li>
              <li><strong>Conference rooms:</strong> Each conference room needs at least two dedicated 20A receptacle circuits (AV equipment plus general use) and a dedicated lighting circuit.</li>
              <li><strong>Server/IT closets:</strong> Provide dedicated 20A circuits at 120V (for small UPS units and switches) and 30A or 50A circuits at 208V for larger IT loads. Plan for 2-4 circuits per closet minimum.</li>
            </ul>

            <h3>Retail Spaces</h3>
            <ul>
              <li><strong>Show window lighting:</strong> NEC 220.43(A) requires a minimum of 200 VA per linear foot of show window for lighting load calculations.</li>
              <li><strong>Track lighting:</strong> Calculate track lighting at the maximum ampere rating of the track or 150 VA per 2-foot section, whichever is larger (NEC 220.43(B)).</li>
              <li><strong>Sign circuits:</strong> NEC 600.5 requires at least one 20A branch circuit for each commercial occupancy for sign or outline lighting. This circuit must be accessible and labeled.</li>
              <li><strong>POS systems:</strong> Each point-of-sale location typically needs a dedicated 20A circuit for the register, scanner, printer, and payment terminal.</li>
            </ul>

            <h3>Restaurants and Commercial Kitchens</h3>
            <ul>
              <li><strong>Kitchen equipment:</strong> Most commercial kitchen appliances (ovens, fryers, warmers, refrigerators) require individual branch circuits per NEC 210.23 and the manufacturer.</li>
              <li><strong>Exhaust hoods:</strong> The kitchen exhaust hood motor requires a dedicated circuit, often 20A or 30A at 208V or 480V.</li>
              <li><strong>Walk-in coolers/freezers:</strong> Each requires a dedicated circuit sized per the equipment nameplate MCA and MOCP.</li>
              <li><strong>GFCI requirements:</strong> NEC 210.8(B) requires GFCI protection for receptacles in commercial kitchens, and this has been expanded in recent code cycles. All 125V through 250V, 50A or less receptacles within 6 feet of a sink require GFCI protection.</li>
            </ul>

            <h3>Healthcare Facilities</h3>
            <ul>
              <li><strong>Patient care areas:</strong> NEC 517 requires a minimum number of receptacles and specific branch circuit configurations for general care and critical care areas.</li>
              <li><strong>Normal and emergency branches:</strong> Branch circuits must be divided into normal power, life safety, critical, and equipment branches per NEC 517.30-517.35.</li>
              <li><strong>Isolated ground receptacles:</strong> Often required for sensitive patient monitoring equipment to reduce electrical noise.</li>
              <li><strong>Redundancy:</strong> Critical areas require circuits from at least two different transfer switches to ensure continuous power during any single failure.</li>
            </ul>

            <h3>Educational Facilities</h3>
            <ul>
              <li><strong>Classroom circuits:</strong> Modern classrooms need a minimum of two 20A receptacle circuits and one or two dedicated lighting circuits per room.</li>
              <li><strong>Technology integration:</strong> Each classroom may need additional dedicated circuits for interactive displays, projectors, and charging stations.</li>
              <li><strong>Science labs:</strong> Require dedicated circuits for lab benches, fume hoods, and specialized equipment — often with emergency shutoff provisions.</li>
              <li><strong>Gymnasiums and auditoriums:</strong> These large spaces require multiple lighting circuits (often at 277V) and dedicated power circuits for scoreboards, sound systems, and stage equipment.</li>
            </ul>

            <h2>Design Workflow: Putting It All Together</h2>
            <p>
              Here is a step-by-step workflow for designing branch circuits in a commercial building:
            </p>
            <ol>
              <li><strong>Determine the occupancy type</strong> and review applicable NEC articles and local code amendments.</li>
              <li><strong>Calculate the total connected load</strong> using NEC Article 220, including general lighting (Table 220.12), receptacle loads (180 VA each), and all dedicated equipment loads.</li>
              <li><strong>Identify all dedicated circuits</strong> required by code or equipment manufacturers (HVAC, fire alarm, elevators, signs, etc.).</li>
              <li><strong>Design lighting circuits</strong> by area, keeping loads at or below 80% of circuit rating. Use 277V where available.</li>
              <li><strong>Design receptacle circuits</strong> by area, with no more than 10 duplex outlets per 20A, 120V circuit.</li>
              <li><strong>Calculate voltage drop</strong> for any circuit run exceeding 100 feet. Upsize conductors as needed.</li>
              <li><strong>Create panel schedules</strong> with balanced phase loading and at least 20% spare spaces.</li>
              <li><strong>Label all circuits</strong> with specific, descriptive names per NEC 408.4.</li>
              <li><strong>Review the complete design</strong> against all applicable NEC articles, local amendments, and the project specifications.</li>
            </ol>

            <div className="bg-white/5 rounded-xl p-6 my-6">
              <h4 className="text-white font-semibold mb-4">Quick Reference: Branch Circuit Design Checklist</h4>
              <div className="space-y-2 text-white/80">
                <p className="flex items-start gap-2"><span className="text-amber-300 mt-0.5">&#9744;</span> All receptacle circuits rated 20A minimum (NEC 210.11(B))</p>
                <p className="flex items-start gap-2"><span className="text-amber-300 mt-0.5">&#9744;</span> Continuous loads at 80% or less of circuit rating (NEC 210.20(A))</p>
                <p className="flex items-start gap-2"><span className="text-amber-300 mt-0.5">&#9744;</span> GFCI protection where required (NEC 210.8(B))</p>
                <p className="flex items-start gap-2"><span className="text-amber-300 mt-0.5">&#9744;</span> AFCI protection where required by local code</p>
                <p className="flex items-start gap-2"><span className="text-amber-300 mt-0.5">&#9744;</span> Dedicated circuits for all required equipment</p>
                <p className="flex items-start gap-2"><span className="text-amber-300 mt-0.5">&#9744;</span> Voltage drop within 3% recommendation for branch circuits</p>
                <p className="flex items-start gap-2"><span className="text-amber-300 mt-0.5">&#9744;</span> Panel phases balanced within 10-15%</p>
                <p className="flex items-start gap-2"><span className="text-amber-300 mt-0.5">&#9744;</span> Minimum 20% spare panel spaces</p>
                <p className="flex items-start gap-2"><span className="text-amber-300 mt-0.5">&#9744;</span> All circuits labeled per NEC 408.4</p>
                <p className="flex items-start gap-2"><span className="text-amber-300 mt-0.5">&#9744;</span> MWBCs on common-trip breakers (NEC 210.4(B))</p>
                <p className="flex items-start gap-2"><span className="text-amber-300 mt-0.5">&#9744;</span> Sign circuit provided per NEC 600.5</p>
                <p className="flex items-start gap-2"><span className="text-amber-300 mt-0.5">&#9744;</span> Show window lighting calculated per NEC 220.43</p>
              </div>
            </div>

            <h2>Using Ampora for Branch Circuit Design</h2>
            <p>
              Branch circuit design involves dozens of NEC references, load calculations, and voltage drop computations. The Ampora app gives you instant access to NEC article lookups, built-in calculators for voltage drop and conductor sizing, and AI-powered assistance for complex design questions. Whether you are drafting panel schedules at your desk or verifying circuit loads in the field, Ampora streamlines the entire process.
            </p>
            <p>
              Download Ampora free on iOS and get instant answers to your branch circuit design questions, from conductor sizing to demand factor calculations. Your next commercial project just got easier.
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

          {/* Related Posts */}
          <div className="mt-12 pt-8 border-t border-white/10">
            <h3 className="text-xl font-display font-bold mb-6">Related Articles</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <Link href="/blog/nec-article-210-branch-circuits-guide" className="group bg-white/5 hover:bg-white/10 rounded-xl p-6 transition-all">
                <h4 className="font-semibold group-hover:text-purple-400 transition-colors">NEC Article 210 Branch Circuits Guide</h4>
                <p className="text-white/60 text-sm mt-2">Deep dive into NEC Article 210 requirements for branch circuits.</p>
              </Link>
              <Link href="/blog/how-to-calculate-voltage-drop" className="group bg-white/5 hover:bg-white/10 rounded-xl p-6 transition-all">
                <h4 className="font-semibold group-hover:text-purple-400 transition-colors">How to Calculate Voltage Drop</h4>
                <p className="text-white/60 text-sm mt-2">Step-by-step voltage drop calculations for any installation.</p>
              </Link>
              <Link href="/blog/residential-load-calculations" className="group bg-white/5 hover:bg-white/10 rounded-xl p-6 transition-all">
                <h4 className="font-semibold group-hover:text-purple-400 transition-colors">Residential Load Calculations</h4>
                <p className="text-white/60 text-sm mt-2">Complete NEC Article 220 guide for dwelling unit calculations.</p>
              </Link>
              <Link href="/blog/electrical-load-balancing-guide" className="group bg-white/5 hover:bg-white/10 rounded-xl p-6 transition-all">
                <h4 className="font-semibold group-hover:text-purple-400 transition-colors">Electrical Load Balancing Guide</h4>
                <p className="text-white/60 text-sm mt-2">How to balance loads across phases for optimal panel performance.</p>
              </Link>
            </div>
          </div>
        </article>
      </div>
    </main>
  );
}
