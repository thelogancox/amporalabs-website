import { Metadata } from "next";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import { BlogPostingJsonLd, BreadcrumbJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Lighting Load Calculations: Methods & NEC Requirements",
  description: "Master lighting load calculations per NEC Article 220. Learn general lighting loads by occupancy type, demand factors from Table 220.42, track lighting calculations, and LED vs fluorescent load differences with step-by-step examples.",
  keywords: [
    "lighting load calculation",
    "NEC Table 220.12",
    "general lighting load",
    "lighting demand factors",
    "Table 220.42",
    "VA per square foot",
    "track lighting calculation",
    "continuous lighting load",
    "commercial lighting load",
    "dwelling unit lighting"
  ],
  openGraph: {
    title: "Lighting Load Calculations: Methods & NEC Requirements",
    description: "Complete guide to lighting load calculations per NEC Article 220 with step-by-step examples and demand factor tables.",
    type: "article",
    publishedTime: "2025-03-28",
  },
};

function HeroIllustration() {
  return (
    <svg viewBox="0 0 400 180" className="w-full h-44 md:h-52" aria-label="Lighting fixtures with calculation symbols and formulas">
      {/* Ceiling line */}
      <line x1="10" y1="20" x2="390" y2="20" stroke="#374151" strokeWidth="2"/>

      {/* Fixture 1 - Recessed downlight */}
      <g transform="translate(50, 20)">
        <rect x="-12" y="0" width="24" height="6" rx="1" fill="#4b5563"/>
        <polygon points="-8,6 -14,30 14,30 8,6" fill="#fbbf24" opacity="0.3"/>
        <rect x="-6" y="1" width="12" height="4" rx="1" fill="#fbbf24"/>
        <text x="0" y="45" textAnchor="middle" fill="#fbbf24" fontSize="7">150W</text>
      </g>

      {/* Fixture 2 - 4ft fluorescent troffer */}
      <g transform="translate(150, 20)">
        <rect x="-30" y="0" width="60" height="8" rx="2" fill="#4b5563" stroke="#6b7280" strokeWidth="1"/>
        <rect x="-26" y="2" width="52" height="4" rx="1" fill="#22d3ee" opacity="0.6"/>
        <polygon points="-26,8 -32,35 32,35 26,8" fill="#22d3ee" opacity="0.15"/>
        <text x="0" y="48" textAnchor="middle" fill="#22d3ee" fontSize="7">2x32W</text>
      </g>

      {/* Fixture 3 - LED panel */}
      <g transform="translate(270, 20)">
        <rect x="-25" y="0" width="50" height="6" rx="2" fill="#4b5563" stroke="#6b7280" strokeWidth="1"/>
        <rect x="-22" y="1" width="44" height="4" rx="1" fill="#a78bfa" opacity="0.7"/>
        <polygon points="-22,6 -28,32 28,32 22,6" fill="#a78bfa" opacity="0.15"/>
        <text x="0" y="45" textAnchor="middle" fill="#a78bfa" fontSize="7">40W LED</text>
      </g>

      {/* Track lighting */}
      <g transform="translate(360, 20)">
        <rect x="-15" y="0" width="30" height="4" rx="1" fill="#6b7280"/>
        <circle cx="-8" cy="10" r="4" fill="#f59e0b" opacity="0.8"/>
        <circle cx="8" cy="10" r="4" fill="#f59e0b" opacity="0.8"/>
        <line x1="-8" y1="4" x2="-8" y2="6" stroke="#9ca3af" strokeWidth="1"/>
        <line x1="8" y1="4" x2="8" y2="6" stroke="#9ca3af" strokeWidth="1"/>
        <text x="0" y="25" textAnchor="middle" fill="#f59e0b" fontSize="6">TRACK</text>
      </g>

      {/* Calculation formula box */}
      <rect x="20" y="75" width="170" height="55" rx="6" fill="#8b5cf6" fillOpacity="0.15" stroke="#8b5cf6" strokeWidth="1.5"/>
      <text x="105" y="92" textAnchor="middle" fill="#c4b5fd" fontSize="9" fontWeight="bold">NEC Table 220.12</text>
      <text x="105" y="106" textAnchor="middle" fill="#a78bfa" fontSize="10" fontFamily="monospace">Area (ft2) x VA/ft2</text>
      <text x="105" y="122" textAnchor="middle" fill="#a78bfa" fontSize="9">= General Lighting VA</text>

      {/* Demand factor box */}
      <rect x="210" y="75" width="170" height="55" rx="6" fill="#f59e0b" fillOpacity="0.15" stroke="#f59e0b" strokeWidth="1.5"/>
      <text x="295" y="92" textAnchor="middle" fill="#fcd34d" fontSize="9" fontWeight="bold">Table 220.42 Demand</text>
      <text x="295" y="106" textAnchor="middle" fill="#fbbf24" fontSize="9">First 3,000 VA @ 100%</text>
      <text x="295" y="122" textAnchor="middle" fill="#fbbf24" fontSize="9">Remainder @ 35%</text>

      {/* Bottom result bar */}
      <rect x="60" y="145" width="280" height="28" rx="6" fill="#22c55e" fillOpacity="0.15" stroke="#22c55e" strokeWidth="1.5"/>
      <text x="200" y="164" textAnchor="middle" fill="#4ade80" fontSize="11" fontWeight="bold">Total Lighting Load = Calculated VA x Demand Factor</text>

      {/* Connecting arrows */}
      <line x1="105" y1="130" x2="150" y2="145" stroke="#8b5cf6" strokeWidth="1" strokeDasharray="3,2"/>
      <line x1="295" y1="130" x2="250" y2="145" stroke="#f59e0b" strokeWidth="1" strokeDasharray="3,2"/>
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
            { name: "Lighting Load Calculations", url: "https://amporalabs.com/blog/lighting-load-calculations-guide" },
          ]}
        />
        <BlogPostingJsonLd
          headline="Lighting Load Calculations: Methods & NEC Requirements"
          description="Master lighting load calculations per NEC Article 220 with step-by-step examples, demand factor tables, and occupancy-based VA values."
          datePublished="2025-03-28"
          url="https://amporalabs.com/blog/lighting-load-calculations-guide"
        />

        <article className="max-w-4xl mx-auto px-6 py-12">
          <nav className="text-sm text-white/60 mb-8">
            <Link href="/" className="hover:text-white">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/blog" className="hover:text-white">Blog</Link>
            <span className="mx-2">/</span>
            <span className="text-white">Lighting Load Calculations</span>
          </nav>

          <header className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <span className="px-3 py-1 bg-amber-600/30 text-amber-300 text-sm font-medium rounded-full">
                Calculations
              </span>
              <span className="text-white/40 text-sm">March 28, 2025</span>
              <span className="text-white/40 text-sm">• 12 min read</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">
              Lighting Load Calculations: Methods & NEC Requirements
            </h1>
            <p className="text-xl text-white/70">
              Accurate lighting load calculations are the foundation of properly sized branch circuits, panels, and services. Learn the NEC methods for every occupancy type.
            </p>
          </header>

          <div className="mb-12 bg-gradient-to-br from-amber-900/20 to-cyan-900/20 rounded-2xl p-6 border border-white/10">
            <HeroIllustration />
          </div>

          <div className="prose prose-invert prose-lg max-w-none">
            <h2>Why Lighting Load Calculations Matter</h2>
            <p>
              Lighting typically represents one of the largest loads in any building. The NEC requires electricians to calculate lighting loads using standardized volt-ampere (VA) values based on occupancy type rather than actual fixture wattages. This ensures that circuits, feeders, and services are sized to handle both current and future lighting installations without overloading the system.
            </p>
            <p>
              The two primary NEC references for lighting load calculations are <strong>Table 220.12</strong> (general lighting loads by occupancy) and <strong>Table 220.42</strong> (demand factors for lighting). Understanding how these tables work together is essential for every electrician performing load calculations.
            </p>

            <h2>General Lighting Loads by Occupancy (NEC Table 220.12)</h2>
            <p>
              NEC Table 220.12 specifies the minimum unit lighting load in volt-amperes per square foot for various occupancy types. These values are applied to the total square footage of the building or space to determine the general lighting load. The calculation uses the outside dimensions of the building or the gross floor area, not the net usable area.
            </p>

            <div className="bg-white/5 rounded-xl p-6 my-6">
              <h4 className="text-white font-semibold mb-4">NEC Table 220.12 -- Unit Lighting Loads</h4>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-white/20">
                      <th className="text-left py-3 px-4 text-white/60">Occupancy Type</th>
                      <th className="text-right py-3 px-4 text-white/60">VA per ft&sup2;</th>
                    </tr>
                  </thead>
                  <tbody className="text-white/70">
                    <tr className="border-b border-white/10">
                      <td className="py-2 px-4">Armories and auditoriums</td>
                      <td className="py-2 px-4 text-right font-mono">1</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-2 px-4">Banks</td>
                      <td className="py-2 px-4 text-right font-mono">3.5</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-2 px-4">Barber shops and beauty parlors</td>
                      <td className="py-2 px-4 text-right font-mono">3</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-2 px-4">Churches</td>
                      <td className="py-2 px-4 text-right font-mono">1</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-2 px-4">Clubs</td>
                      <td className="py-2 px-4 text-right font-mono">2</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-2 px-4">Court rooms</td>
                      <td className="py-2 px-4 text-right font-mono">2</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-2 px-4 font-semibold text-amber-300">Dwelling units</td>
                      <td className="py-2 px-4 text-right font-mono font-semibold text-amber-300">3</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-2 px-4">Garages -- commercial</td>
                      <td className="py-2 px-4 text-right font-mono">1</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-2 px-4">Hospitals</td>
                      <td className="py-2 px-4 text-right font-mono">2</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-2 px-4">Hotels and motels (guest rooms)</td>
                      <td className="py-2 px-4 text-right font-mono">2</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-2 px-4">Industrial/commercial loft buildings</td>
                      <td className="py-2 px-4 text-right font-mono">2</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-2 px-4">Lodge rooms</td>
                      <td className="py-2 px-4 text-right font-mono">1.5</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-2 px-4 font-semibold text-amber-300">Office buildings</td>
                      <td className="py-2 px-4 text-right font-mono font-semibold text-amber-300">3.5</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-2 px-4">Restaurants</td>
                      <td className="py-2 px-4 text-right font-mono">2</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-2 px-4">Schools</td>
                      <td className="py-2 px-4 text-right font-mono">3</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-2 px-4 font-semibold text-amber-300">Stores</td>
                      <td className="py-2 px-4 text-right font-mono font-semibold text-amber-300">2</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-2 px-4">Warehouses (storage)</td>
                      <td className="py-2 px-4 text-right font-mono">0.25</td>
                    </tr>
                    <tr>
                      <td className="py-2 px-4">All others</td>
                      <td className="py-2 px-4 text-right font-mono">0.5</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <p>
              The general lighting load formula is straightforward:
            </p>

            <div className="bg-gradient-to-r from-amber-900/30 to-cyan-900/30 rounded-xl p-6 my-6">
              <p className="text-white font-mono text-lg mb-2 text-center">General Lighting Load (VA) = Total Area (ft&sup2;) &times; VA/ft&sup2; from Table 220.12</p>
              <p className="text-white/60 text-sm text-center mt-2">Use outside dimensions of building, not interior net area</p>
            </div>

            <h3>Key Points About Table 220.12</h3>
            <ul>
              <li><strong>Minimum values:</strong> These are floor values. If the actual connected lighting load exceeds the table value, use the actual load instead.</li>
              <li><strong>Includes receptacles for dwelling units:</strong> The 3 VA/ft&sup2; value for dwelling units includes general-use receptacle outlets. You do not add receptacle loads separately for residential calculations.</li>
              <li><strong>Does not include receptacles for commercial:</strong> For non-dwelling occupancies, general-use receptacle outlets must be calculated separately at 180 VA each per NEC 220.14(I).</li>
              <li><strong>Outside dimensions:</strong> Always use the outside dimensions of the building or apartment, not the interior floor space.</li>
            </ul>

            <h2>Track Lighting and Show Window Calculations</h2>
            <p>
              Track lighting and show window lighting have specific NEC requirements that differ from general lighting calculations.
            </p>

            <h3>Track Lighting -- NEC 220.43(B)</h3>
            <p>
              For track lighting in non-dwelling occupancies, the NEC requires an additional load of <strong>150 VA for every 2 feet of track</strong> (or fraction thereof). This applies in addition to the general lighting load from Table 220.12. The actual fixtures installed on the track do not determine the calculated load; the length of the track does.
            </p>

            <div className="bg-white/5 rounded-xl p-6 my-6">
              <h4 className="text-white font-semibold mb-3">Track Lighting Calculation Example</h4>
              <p className="text-white/70 mb-2">A retail store installs 40 feet of track lighting:</p>
              <div className="bg-black/30 rounded-lg p-4 font-mono text-sm">
                <p className="text-amber-300">Track length: 40 ft</p>
                <p className="text-white/70">Number of 2-ft segments: 40 &divide; 2 = 20</p>
                <p className="text-white/70">Track load: 20 &times; 150 VA = <span className="text-amber-300 font-semibold">3,000 VA</span></p>
                <p className="text-white/50 mt-2">This is added to the general lighting load from Table 220.12</p>
              </div>
            </div>

            <h3>Show Window Lighting -- NEC 220.43(A)</h3>
            <p>
              Show windows in retail and commercial settings require a minimum lighting load of <strong>200 VA per linear foot</strong> of show window, measured horizontally along the base. This load is in addition to the general lighting load.
            </p>

            <div className="bg-white/5 rounded-xl p-6 my-6">
              <h4 className="text-white font-semibold mb-3">Show Window Calculation Example</h4>
              <p className="text-white/70 mb-2">A department store has 24 linear feet of show window:</p>
              <div className="bg-black/30 rounded-lg p-4 font-mono text-sm">
                <p className="text-amber-300">Show window length: 24 ft</p>
                <p className="text-white/70">Show window load: 24 &times; 200 VA/ft = <span className="text-amber-300 font-semibold">4,800 VA</span></p>
              </div>
            </div>

            <h2>Continuous vs. Non-Continuous Lighting Loads</h2>
            <p>
              This distinction is critical for proper overcurrent protection sizing. Per NEC Article 100, a <strong>continuous load</strong> is one where the maximum current is expected to continue for <strong>3 hours or more</strong>. Most lighting in commercial and industrial settings qualifies as a continuous load.
            </p>

            <div className="bg-amber-900/30 rounded-xl p-6 my-6">
              <h4 className="text-white font-semibold mb-3">The 125% Rule -- NEC 210.20(A)</h4>
              <p className="text-white/70 mb-3">
                Branch circuit conductors and overcurrent devices must be sized at <strong>125% of the continuous load</strong> plus 100% of the non-continuous load.
              </p>
              <div className="bg-black/30 rounded-lg p-4 font-mono text-sm">
                <p className="text-white">Minimum OCPD Rating = (Continuous Load &times; 1.25) + Non-Continuous Load</p>
                <p className="text-white/50 mt-2">Exception: OCPDs listed for 100% continuous use do not require the 125% multiplier</p>
              </div>
            </div>

            <p>
              For example, if a commercial office has a calculated lighting load of 4,800 VA on a 120V circuit, and the lighting operates more than 3 hours per day (continuous):
            </p>

            <div className="bg-white/5 rounded-xl p-6 my-6">
              <div className="bg-black/30 rounded-lg p-4 font-mono text-sm">
                <p className="text-white/70">Lighting load: 4,800 VA</p>
                <p className="text-white/70">Load current: 4,800 VA &divide; 120V = 40A</p>
                <p className="text-white/70">With 125% factor: 40A &times; 1.25 = <span className="text-amber-300 font-semibold">50A minimum OCPD</span></p>
                <p className="text-white/50 mt-2">Conductors must also be sized for 50A minimum</p>
              </div>
            </div>

            <h3>What Counts as Continuous?</h3>
            <ul>
              <li><strong>Continuous:</strong> Office lighting, retail store lighting, warehouse lighting, parking garage lighting, sign lighting, outdoor lighting</li>
              <li><strong>Non-continuous:</strong> Closet lights, attic lights, infrequently used storage room lights, residential lighting (typically)</li>
            </ul>

            <h2>Demand Factors for Lighting (NEC Table 220.42)</h2>
            <p>
              Once the total general lighting load is calculated from Table 220.12, demand factors from Table 220.42 can be applied to reduce the feeder or service load. Demand factors account for the statistical unlikelihood that all lighting will operate simultaneously. These factors apply only to the portion of the general lighting load from Table 220.12 -- they do not apply to other loads.
            </p>

            <div className="bg-white/5 rounded-xl p-6 my-6">
              <h4 className="text-white font-semibold mb-4">NEC Table 220.42 -- Lighting Load Demand Factors</h4>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-white/20">
                      <th className="text-left py-3 px-4 text-white/60">Type of Occupancy</th>
                      <th className="text-left py-3 px-4 text-white/60">Portion of Lighting Load</th>
                      <th className="text-right py-3 px-4 text-white/60">Demand Factor %</th>
                    </tr>
                  </thead>
                  <tbody className="text-white/70">
                    <tr className="border-b border-white/10">
                      <td className="py-2 px-4 font-semibold text-amber-300" rowSpan={2}>Dwelling units</td>
                      <td className="py-2 px-4">First 3,000 VA</td>
                      <td className="py-2 px-4 text-right font-mono">100%</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-2 px-4">3,001 VA to 120,000 VA</td>
                      <td className="py-2 px-4 text-right font-mono">35%</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-2 px-4 font-semibold text-amber-300" rowSpan={2}>Hospitals*</td>
                      <td className="py-2 px-4">First 50,000 VA</td>
                      <td className="py-2 px-4 text-right font-mono">40%</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-2 px-4">Remainder over 50,000 VA</td>
                      <td className="py-2 px-4 text-right font-mono">20%</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-2 px-4 font-semibold text-amber-300" rowSpan={2}>Hotels and motels, including apartment houses without cooking*</td>
                      <td className="py-2 px-4">First 20,000 VA</td>
                      <td className="py-2 px-4 text-right font-mono">50%</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-2 px-4">Remainder over 20,000 VA</td>
                      <td className="py-2 px-4 text-right font-mono">40%</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-2 px-4 font-semibold text-amber-300" rowSpan={2}>Warehouses (storage)</td>
                      <td className="py-2 px-4">First 12,500 VA</td>
                      <td className="py-2 px-4 text-right font-mono">100%</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-2 px-4">Remainder over 12,500 VA</td>
                      <td className="py-2 px-4 text-right font-mono">50%</td>
                    </tr>
                    <tr>
                      <td className="py-2 px-4 font-semibold text-amber-300">All others</td>
                      <td className="py-2 px-4">Total VA</td>
                      <td className="py-2 px-4 text-right font-mono">100%</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-white/50 text-xs mt-3">* Demand factors for hospitals and hotels apply to the general lighting load only, not patient care areas or task lighting.</p>
            </div>

            <div className="bg-amber-900/30 rounded-xl p-6 my-6">
              <h4 className="text-white font-semibold mb-2">Important: When Demand Factors Apply</h4>
              <p className="text-white/70">
                Demand factors from Table 220.42 apply only to <strong>feeder and service</strong> calculations, not to branch circuit sizing. Individual branch circuits must be sized for the full connected load. Also note that for most commercial occupancies (offices, retail, schools, restaurants), the demand factor is <strong>100%</strong> -- no reduction is permitted.
              </p>
            </div>

            <h2>LED vs. Fluorescent vs. Incandescent Load Differences</h2>
            <p>
              While the NEC general lighting load from Table 220.12 is based on occupancy type and square footage (not fixture type), understanding actual fixture power consumption is important for verifying that calculated loads are adequate and for sizing branch circuits with actual connected loads.
            </p>

            <div className="bg-white/5 rounded-xl p-6 my-6">
              <h4 className="text-white font-semibold mb-4">Typical Fixture Power Consumption Comparison</h4>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-white/20">
                      <th className="text-left py-3 px-4 text-white/60">Application</th>
                      <th className="text-right py-3 px-4 text-white/60">Incandescent</th>
                      <th className="text-right py-3 px-4 text-white/60">Fluorescent</th>
                      <th className="text-right py-3 px-4 text-white/60">LED</th>
                    </tr>
                  </thead>
                  <tbody className="text-white/70">
                    <tr className="border-b border-white/10">
                      <td className="py-2 px-4">2x4 troffer (equivalent output)</td>
                      <td className="py-2 px-4 text-right font-mono">N/A</td>
                      <td className="py-2 px-4 text-right font-mono">64W</td>
                      <td className="py-2 px-4 text-right font-mono text-green-400">32-40W</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-2 px-4">Recessed downlight (800 lumens)</td>
                      <td className="py-2 px-4 text-right font-mono">65W</td>
                      <td className="py-2 px-4 text-right font-mono">18W</td>
                      <td className="py-2 px-4 text-right font-mono text-green-400">9-12W</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-2 px-4">High-bay (20,000 lumens)</td>
                      <td className="py-2 px-4 text-right font-mono">N/A</td>
                      <td className="py-2 px-4 text-right font-mono">250W</td>
                      <td className="py-2 px-4 text-right font-mono text-green-400">150W</td>
                    </tr>
                    <tr>
                      <td className="py-2 px-4">A19 equivalent (800 lumens)</td>
                      <td className="py-2 px-4 text-right font-mono">60W</td>
                      <td className="py-2 px-4 text-right font-mono">13W (CFL)</td>
                      <td className="py-2 px-4 text-right font-mono text-green-400">8-10W</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <h3>Ballast and Driver VA Considerations</h3>
            <p>
              When calculating actual connected loads for branch circuit sizing, remember that the VA drawn from the circuit is not always equal to the lamp wattage:
            </p>
            <ul>
              <li><strong>Fluorescent fixtures:</strong> Magnetic ballasts add 10-20% to the lamp wattage. Electronic ballasts are more efficient but still add some overhead. A 2-lamp 32W T8 fixture with electronic ballast draws approximately 59-64 VA.</li>
              <li><strong>LED drivers:</strong> Power factor varies significantly. High-quality commercial LED drivers have a power factor above 0.9, meaning VA is close to watts. Low-cost drivers may have power factors of 0.5-0.7, drawing significantly more VA than watts.</li>
              <li><strong>Incandescent/halogen:</strong> These are purely resistive loads with a power factor of 1.0. VA equals watts.</li>
            </ul>

            <div className="bg-cyan-900/30 rounded-xl p-6 my-6">
              <h4 className="text-white font-semibold mb-2">LED Retrofit Considerations</h4>
              <p className="text-white/70">
                When retrofitting fluorescent fixtures with LED tubes or drivers, the actual connected load often decreases substantially. However, for NEC load calculations using Table 220.12, the general lighting load remains the same because it is based on square footage, not fixture type. The reduced actual load only matters when comparing connected load to the Table 220.12 minimum -- you always use whichever is larger.
              </p>
            </div>

            <h2>Commercial Lighting Load Calculations</h2>
            <p>
              Commercial lighting calculations combine the general lighting load from Table 220.12 with additional loads for track lighting, show windows, sign outlets, and specific-use receptacles. The process for a feeder or service calculation follows these steps:
            </p>

            <h3>Step-by-Step Commercial Example</h3>
            <div className="bg-white/5 rounded-xl p-6 my-6">
              <h4 className="text-white font-semibold mb-4">Retail Store: 8,000 ft&sup2; with 30 ft of track lighting and 16 ft of show window</h4>
              <table className="w-full text-left text-sm">
                <tbody className="text-white/70">
                  <tr className="border-b border-white/5">
                    <td className="py-2">General lighting (8,000 ft&sup2; &times; 2 VA/ft&sup2;)</td>
                    <td className="py-2 text-right font-mono">16,000 VA</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-2">Track lighting (30 ft &divide; 2 = 15 segments &times; 150 VA)</td>
                    <td className="py-2 text-right font-mono">2,250 VA</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-2">Show window lighting (16 ft &times; 200 VA/ft)</td>
                    <td className="py-2 text-right font-mono">3,200 VA</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-2">Sign outlet (NEC 220.14(F)) minimum</td>
                    <td className="py-2 text-right font-mono">1,200 VA</td>
                  </tr>
                  <tr className="border-b border-white/10">
                    <td className="py-2"><strong>Subtotal lighting load</strong></td>
                    <td className="py-2 text-right font-mono"><strong>22,650 VA</strong></td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-2">Demand factor (stores = 100% per Table 220.42)</td>
                    <td className="py-2 text-right font-mono">100%</td>
                  </tr>
                  <tr className="border-t border-white/10">
                    <td className="py-2 text-amber-300"><strong>Total lighting load for feeder</strong></td>
                    <td className="py-2 text-right text-amber-300 font-mono"><strong>22,650 VA</strong></td>
                  </tr>
                </tbody>
              </table>
              <p className="text-white/50 text-sm mt-4">Note: Receptacle loads (180 VA each) and other loads must be added separately for the total feeder/service calculation. Apply 125% multiplier for continuous lighting loads when sizing overcurrent devices.</p>
            </div>

            <h3>Office Building Example</h3>
            <div className="bg-white/5 rounded-xl p-6 my-6">
              <h4 className="text-white font-semibold mb-4">Office Building: 12,000 ft&sup2; on three floors</h4>
              <table className="w-full text-left text-sm">
                <tbody className="text-white/70">
                  <tr className="border-b border-white/5">
                    <td className="py-2">General lighting (12,000 ft&sup2; &times; 3.5 VA/ft&sup2;)</td>
                    <td className="py-2 text-right font-mono">42,000 VA</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-2">Demand factor (offices = 100% per Table 220.42)</td>
                    <td className="py-2 text-right font-mono">100%</td>
                  </tr>
                  <tr className="border-t border-white/10">
                    <td className="py-2 text-amber-300"><strong>Lighting load for service</strong></td>
                    <td className="py-2 text-right text-amber-300 font-mono"><strong>42,000 VA</strong></td>
                  </tr>
                </tbody>
              </table>
              <div className="mt-4 bg-black/30 rounded-lg p-4 font-mono text-sm">
                <p className="text-white/70">With 125% continuous factor:</p>
                <p className="text-white/70">42,000 VA &times; 1.25 = <span className="text-amber-300 font-semibold">52,500 VA</span></p>
                <p className="text-white/70">At 208V, 3-phase: 52,500 &divide; (208 &times; 1.732) = <span className="text-amber-300 font-semibold">145.7A</span></p>
              </div>
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
                  <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/></svg>
                  Download Free
                </a>
              </div>
            </div>

            <h2>Dwelling Unit Lighting VA Calculations</h2>
            <p>
              Residential lighting load calculations follow a specific process that includes demand factors, making them different from most commercial calculations.
            </p>

            <h3>Step-by-Step Dwelling Unit Example</h3>
            <div className="bg-white/5 rounded-xl p-6 my-6">
              <h4 className="text-white font-semibold mb-4">Single-Family Home: 2,800 ft&sup2;</h4>
              <table className="w-full text-left text-sm">
                <tbody className="text-white/70">
                  <tr className="border-b border-white/5">
                    <td className="py-2">General lighting (2,800 ft&sup2; &times; 3 VA/ft&sup2;)</td>
                    <td className="py-2 text-right font-mono">8,400 VA</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-2">Small appliance circuits (2 &times; 1,500 VA per 220.52(A))</td>
                    <td className="py-2 text-right font-mono">3,000 VA</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-2">Laundry circuit (1 &times; 1,500 VA per 220.52(B))</td>
                    <td className="py-2 text-right font-mono">1,500 VA</td>
                  </tr>
                  <tr className="border-b border-white/10">
                    <td className="py-2"><strong>Subtotal (subject to demand factors)</strong></td>
                    <td className="py-2 text-right font-mono"><strong>12,900 VA</strong></td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-2">First 3,000 VA @ 100% (Table 220.42)</td>
                    <td className="py-2 text-right font-mono">3,000 VA</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-2">Remaining 9,900 VA @ 35% (Table 220.42)</td>
                    <td className="py-2 text-right font-mono">3,465 VA</td>
                  </tr>
                  <tr className="border-t border-white/10">
                    <td className="py-2 text-amber-300"><strong>Demand lighting + small appliance + laundry load</strong></td>
                    <td className="py-2 text-right text-amber-300 font-mono"><strong>6,465 VA</strong></td>
                  </tr>
                </tbody>
              </table>
              <p className="text-white/50 text-sm mt-4">The small appliance and laundry circuit loads are combined with the general lighting load before applying Table 220.42 demand factors. This combined total is the lighting and general load for the service calculation.</p>
            </div>

            <h3>Multi-Family Dwelling Calculations</h3>
            <p>
              For multi-family dwellings (apartments, condominiums), the demand factors from Table 220.42 apply to each individual dwelling unit separately. For the building service, additional demand factors from Table 220.84 or the optional calculation in 220.84 may apply, depending on the number of units and the calculation method used.
            </p>

            <div className="bg-white/5 rounded-xl p-6 my-6">
              <h4 className="text-white font-semibold mb-3">12-Unit Apartment Building -- Per Unit Lighting Load</h4>
              <p className="text-white/70 mb-2">Each unit: 900 ft&sup2;</p>
              <div className="bg-black/30 rounded-lg p-4 font-mono text-sm">
                <p className="text-white/70">Per unit general lighting: 900 &times; 3 = 2,700 VA</p>
                <p className="text-white/70">Per unit small appliance: 3,000 VA</p>
                <p className="text-white/70">Per unit laundry: 1,500 VA</p>
                <p className="text-white/70">Per unit subtotal: 7,200 VA</p>
                <p className="text-white/70 mt-2">Apply Table 220.42:</p>
                <p className="text-white/70">First 3,000 @ 100% = 3,000 VA</p>
                <p className="text-white/70">Remaining 4,200 @ 35% = 1,470 VA</p>
                <p className="text-amber-300 mt-2">Per unit demand load: 4,470 VA</p>
                <p className="text-amber-300">12 units: 12 &times; 4,470 = <span className="font-semibold">53,640 VA</span></p>
              </div>
            </div>

            <h2>Warehouse Lighting Demand Factors</h2>
            <p>
              Warehouses receive special treatment in Table 220.42 with a unique two-tier demand factor structure:
            </p>

            <div className="bg-white/5 rounded-xl p-6 my-6">
              <h4 className="text-white font-semibold mb-4">Warehouse: 80,000 ft&sup2;</h4>
              <table className="w-full text-left text-sm">
                <tbody className="text-white/70">
                  <tr className="border-b border-white/5">
                    <td className="py-2">General lighting (80,000 ft&sup2; &times; 0.25 VA/ft&sup2;)</td>
                    <td className="py-2 text-right font-mono">20,000 VA</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-2">First 12,500 VA @ 100%</td>
                    <td className="py-2 text-right font-mono">12,500 VA</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-2">Remaining 7,500 VA @ 50%</td>
                    <td className="py-2 text-right font-mono">3,750 VA</td>
                  </tr>
                  <tr className="border-t border-white/10">
                    <td className="py-2 text-amber-300"><strong>Demand lighting load</strong></td>
                    <td className="py-2 text-right text-amber-300 font-mono"><strong>16,250 VA</strong></td>
                  </tr>
                </tbody>
              </table>
              <p className="text-white/50 text-sm mt-4">Savings from demand factor: 20,000 - 16,250 = 3,750 VA (18.75% reduction)</p>
            </div>

            <h2>Hospital and Hotel Lighting Calculations</h2>
            <p>
              Hospitals and hotels/motels have their own demand factor tiers in Table 220.42, reflecting their unique usage patterns where not all areas are illuminated simultaneously.
            </p>

            <div className="grid md:grid-cols-2 gap-4 my-6">
              <div className="bg-white/5 rounded-xl p-4">
                <h4 className="font-semibold text-cyan-400 mb-3">Hospital: 120,000 ft&sup2;</h4>
                <div className="text-white/70 text-sm space-y-1">
                  <p>Lighting: 120,000 &times; 2 = 240,000 VA</p>
                  <p>First 50,000 @ 40% = 20,000 VA</p>
                  <p>Remaining 190,000 @ 20% = 38,000 VA</p>
                  <p className="text-cyan-400 font-semibold mt-2">Demand: 58,000 VA</p>
                  <p className="text-white/50">(75.8% reduction)</p>
                </div>
              </div>
              <div className="bg-white/5 rounded-xl p-4">
                <h4 className="font-semibold text-purple-400 mb-3">Hotel: 60 rooms, 400 ft&sup2; each</h4>
                <div className="text-white/70 text-sm space-y-1">
                  <p>Lighting: 24,000 &times; 2 = 48,000 VA</p>
                  <p>First 20,000 @ 50% = 10,000 VA</p>
                  <p>Remaining 28,000 @ 40% = 11,200 VA</p>
                  <p className="text-purple-400 font-semibold mt-2">Demand: 21,200 VA</p>
                  <p className="text-white/50">(55.8% reduction)</p>
                </div>
              </div>
            </div>

            <h2>Branch Circuit Sizing for Lighting</h2>
            <p>
              While demand factors apply to feeders and services, branch circuits must be sized for the actual connected load. Key NEC rules for lighting branch circuits:
            </p>

            <div className="bg-white/5 rounded-xl p-6 my-6">
              <h4 className="text-white font-semibold mb-3">Maximum Lighting Load per Branch Circuit</h4>
              <div className="space-y-4">
                <div className="bg-black/30 rounded-lg p-4">
                  <p className="text-amber-300 font-semibold mb-1">15A Circuit @ 120V</p>
                  <p className="text-white/70 font-mono">15A &times; 120V = 1,800 VA total</p>
                  <p className="text-white/70 font-mono">Continuous: 1,800 &times; 0.80 = <span className="text-green-400">1,440 VA max</span></p>
                </div>
                <div className="bg-black/30 rounded-lg p-4">
                  <p className="text-amber-300 font-semibold mb-1">20A Circuit @ 120V</p>
                  <p className="text-white/70 font-mono">20A &times; 120V = 2,400 VA total</p>
                  <p className="text-white/70 font-mono">Continuous: 2,400 &times; 0.80 = <span className="text-green-400">1,920 VA max</span></p>
                </div>
                <div className="bg-black/30 rounded-lg p-4">
                  <p className="text-amber-300 font-semibold mb-1">20A Circuit @ 277V</p>
                  <p className="text-white/70 font-mono">20A &times; 277V = 5,540 VA total</p>
                  <p className="text-white/70 font-mono">Continuous: 5,540 &times; 0.80 = <span className="text-green-400">4,432 VA max</span></p>
                </div>
              </div>
              <p className="text-white/50 text-sm mt-4">The 80% factor applies because lighting is typically a continuous load. For OCPDs rated for 100% continuous duty, the full circuit rating may be used.</p>
            </div>

            <h2>Sign and Outline Lighting Loads</h2>
            <p>
              NEC 220.14(F) requires a minimum load of <strong>1,200 VA</strong> for each commercial occupancy accessible to pedestrians, for sign or outline lighting. This applies regardless of whether a sign is actually installed at the time of the calculation. The load must be supplied by a 20A branch circuit.
            </p>

            <div className="bg-amber-900/30 rounded-xl p-6 my-6">
              <h4 className="text-white font-semibold mb-2">Strip Mall Example</h4>
              <p className="text-white/70">
                A strip mall with 6 commercial tenant spaces must include <strong>6 &times; 1,200 VA = 7,200 VA</strong> for sign outlet loads in the service calculation, even if no signs are currently installed. Each sign outlet requires its own 20A branch circuit.
              </p>
            </div>

            <h2>Common Mistakes in Lighting Load Calculations</h2>
            <p>
              Avoid these frequently encountered errors when performing lighting load calculations:
            </p>

            <div className="space-y-4 my-6">
              <div className="bg-red-900/20 border border-red-500/20 rounded-xl p-4">
                <p className="text-red-300 font-semibold mb-2">Using interior dimensions instead of outside dimensions</p>
                <p className="text-white/60 text-sm">NEC 220.12 requires outside dimensions of the building, dwelling unit, or other area involved. Using interior dimensions underestimates the load.</p>
              </div>
              <div className="bg-red-900/20 border border-red-500/20 rounded-xl p-4">
                <p className="text-red-300 font-semibold mb-2">Applying demand factors to branch circuits</p>
                <p className="text-white/60 text-sm">Table 220.42 demand factors are only for feeder and service calculations. Branch circuits must carry the full connected load without demand reduction.</p>
              </div>
              <div className="bg-red-900/20 border border-red-500/20 rounded-xl p-4">
                <p className="text-red-300 font-semibold mb-2">Double-counting receptacle loads in dwelling units</p>
                <p className="text-white/60 text-sm">The 3 VA/ft&sup2; value for dwelling units already includes general-use receptacle outlets. Adding 180 VA per receptacle on top of the Table 220.12 value results in an inflated calculation.</p>
              </div>
              <div className="bg-red-900/20 border border-red-500/20 rounded-xl p-4">
                <p className="text-red-300 font-semibold mb-2">Using actual fixture wattage instead of Table 220.12 values</p>
                <p className="text-white/60 text-sm">With LED retrofits, actual connected loads are often well below Table 220.12 minimums. The NEC requires using the table values unless the actual connected load exceeds them. You must use whichever is greater.</p>
              </div>
              <div className="bg-red-900/20 border border-red-500/20 rounded-xl p-4">
                <p className="text-red-300 font-semibold mb-2">Forgetting the 125% continuous load multiplier</p>
                <p className="text-white/60 text-sm">Most commercial and industrial lighting qualifies as a continuous load. Failing to apply the 125% factor to conductor and OCPD sizing leads to undersized installations.</p>
              </div>
              <div className="bg-red-900/20 border border-red-500/20 rounded-xl p-4">
                <p className="text-red-300 font-semibold mb-2">Omitting track lighting or show window loads</p>
                <p className="text-white/60 text-sm">Track lighting (150 VA per 2 ft) and show window lighting (200 VA per linear foot) must be added to the general lighting load. They are not included in the Table 220.12 values.</p>
              </div>
              <div className="bg-red-900/20 border border-red-500/20 rounded-xl p-4">
                <p className="text-red-300 font-semibold mb-2">Neglecting sign outlet loads for commercial occupancies</p>
                <p className="text-white/60 text-sm">Each commercial occupancy accessible to pedestrians requires a minimum 1,200 VA sign outlet load per NEC 220.14(F), regardless of whether a sign is currently installed.</p>
              </div>
            </div>

            <h2>Quick Reference: Calculation Summary</h2>
            <div className="bg-gradient-to-r from-amber-900/30 to-cyan-900/30 rounded-xl p-6 my-6">
              <h4 className="text-white font-semibold mb-4">Lighting Load Calculation Checklist</h4>
              <ol className="space-y-3 text-white/70">
                <li><strong>1. Determine occupancy type</strong> and corresponding VA/ft&sup2; from NEC Table 220.12</li>
                <li><strong>2. Calculate total area</strong> using outside dimensions of the building</li>
                <li><strong>3. Compute general lighting load:</strong> Area &times; VA/ft&sup2;</li>
                <li><strong>4. Add track lighting load</strong> if applicable (150 VA per 2 ft)</li>
                <li><strong>5. Add show window load</strong> if applicable (200 VA per linear foot)</li>
                <li><strong>6. Add sign outlet loads</strong> for commercial occupancies (1,200 VA each)</li>
                <li><strong>7. For dwellings:</strong> Add small appliance (3,000 VA) and laundry (1,500 VA) before applying demand factors</li>
                <li><strong>8. Apply demand factors</strong> from Table 220.42 for feeder/service calculations only</li>
                <li><strong>9. Apply 125% multiplier</strong> for continuous loads when sizing conductors and OCPDs</li>
                <li><strong>10. Compare to actual connected load</strong> -- use whichever is greater</li>
              </ol>
            </div>

          </div>

          {/* Footer CTA */}
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
              <Link href="/blog/residential-load-calculations" className="bg-white/5 hover:bg-white/10 rounded-xl p-6 transition-colors">
                <span className="text-green-400 text-sm">Calculations</span>
                <h3 className="font-semibold mt-2">Residential Load Calculations: NEC Article 220</h3>
              </Link>
              <Link href="/blog/commercial-lighting-controls-nec" className="bg-white/5 hover:bg-white/10 rounded-xl p-6 transition-colors">
                <span className="text-cyan-400 text-sm">Installation</span>
                <h3 className="font-semibold mt-2">Commercial Lighting Controls: NEC Requirements</h3>
              </Link>
            </div>
          </section>
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
