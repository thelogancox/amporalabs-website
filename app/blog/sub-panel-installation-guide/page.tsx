import { Metadata } from "next";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import { BreadcrumbJsonLd, BlogPostingJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Sub-Panel Installation Guide: Sizing, Wiring & NEC Rules",
  description: "Complete guide to installing electrical sub-panels. Learn proper sizing, feeder conductor requirements, grounding vs bonding rules, 4-wire connections, and NEC code compliance for residential and detached building sub-panels.",
  keywords: [
    "sub-panel installation",
    "electrical sub-panel",
    "sub-panel sizing",
    "feeder conductor sizing",
    "sub-panel grounding",
    "sub-panel bonding",
    "4-wire feeder",
    "NEC sub-panel requirements",
    "detached garage sub-panel",
    "main lug panel",
  ],
  alternates: {
    canonical: "https://amporalabs.com/blog/sub-panel-installation-guide",
  },
  openGraph: {
    title: "Sub-Panel Installation Guide: Sizing, Wiring & NEC Rules - Ampora",
    description: "Complete guide to installing electrical sub-panels with proper sizing, feeder conductors, grounding, and NEC compliance.",
    url: "https://amporalabs.com/blog/sub-panel-installation-guide",
    type: "article",
    publishedTime: "2025-04-08",
  },
};

function HeroIllustration() {
  return (
    <svg viewBox="0 0 400 180" className="w-full h-44 md:h-52" aria-label="Main panel feeding a sub-panel with feeder conductors">
      {/* Main Panel */}
      <g transform="translate(30, 15)">
        <rect x="0" y="0" width="90" height="120" rx="4" fill="#1f2937" stroke="#22c55e" strokeWidth="2"/>
        <rect x="8" y="10" width="74" height="20" rx="2" fill="#374151" stroke="#4b5563"/>
        <text x="45" y="24" textAnchor="middle" fill="#22c55e" fontSize="8" fontWeight="bold">200A MAIN</text>
        {/* Breakers */}
        <rect x="12" y="38" width="28" height="7" rx="1" fill="#22c55e"/>
        <rect x="50" y="38" width="28" height="7" rx="1" fill="#22c55e"/>
        <rect x="12" y="49" width="28" height="7" rx="1" fill="#22c55e"/>
        <rect x="50" y="49" width="28" height="7" rx="1" fill="#22c55e"/>
        <rect x="12" y="60" width="28" height="7" rx="1" fill="#8b5cf6"/>
        <rect x="50" y="60" width="28" height="7" rx="1" fill="#8b5cf6"/>
        <text x="45" y="75" textAnchor="middle" fill="#a78bfa" fontSize="6">60A 2-POLE</text>
        <rect x="12" y="80" width="28" height="7" rx="1" fill="#374151"/>
        <rect x="50" y="80" width="28" height="7" rx="1" fill="#374151"/>
        <rect x="12" y="91" width="28" height="7" rx="1" fill="#374151"/>
        <rect x="50" y="91" width="28" height="7" rx="1" fill="#374151"/>
        <text x="45" y="115" textAnchor="middle" fill="#9ca3af" fontSize="7">MAIN PANEL</text>
      </g>

      {/* Feeder Conductors - 4 wires */}
      <g transform="translate(120, 55)">
        <line x1="0" y1="8" x2="120" y2="8" stroke="#ef4444" strokeWidth="3" strokeDasharray="6,3"/>
        <line x1="0" y1="16" x2="120" y2="16" stroke="#ef4444" strokeWidth="3" strokeDasharray="6,3"/>
        <line x1="0" y1="24" x2="120" y2="24" stroke="#ffffff" strokeWidth="3" strokeDasharray="6,3"/>
        <line x1="0" y1="32" x2="120" y2="32" stroke="#22c55e" strokeWidth="3" strokeDasharray="6,3"/>
        {/* Labels */}
        <text x="60" y="0" textAnchor="middle" fill="#a78bfa" fontSize="7" fontWeight="bold">4-WIRE FEEDER</text>
        <text x="145" y="10" fill="#ef4444" fontSize="6">L1 (Hot)</text>
        <text x="145" y="18" fill="#ef4444" fontSize="6">L2 (Hot)</text>
        <text x="145" y="26" fill="#ffffff" fontSize="6">Neutral</text>
        <text x="145" y="34" fill="#22c55e" fontSize="6">Ground</text>
      </g>

      {/* Sub-Panel */}
      <g transform="translate(280, 15)">
        <rect x="0" y="0" width="90" height="120" rx="4" fill="#1f2937" stroke="#a78bfa" strokeWidth="2"/>
        <rect x="8" y="10" width="74" height="20" rx="2" fill="#374151" stroke="#4b5563"/>
        <text x="45" y="24" textAnchor="middle" fill="#a78bfa" fontSize="8" fontWeight="bold">60A MLO</text>
        {/* Separate buses */}
        <rect x="12" y="38" width="28" height="7" rx="1" fill="#a78bfa"/>
        <rect x="50" y="38" width="28" height="7" rx="1" fill="#a78bfa"/>
        <rect x="12" y="49" width="28" height="7" rx="1" fill="#a78bfa"/>
        <rect x="50" y="49" width="28" height="7" rx="1" fill="#a78bfa"/>
        <rect x="12" y="60" width="28" height="7" rx="1" fill="#374151"/>
        <rect x="50" y="60" width="28" height="7" rx="1" fill="#374151"/>
        {/* Neutral and Ground bars separated */}
        <rect x="10" y="78" width="30" height="10" rx="1" fill="none" stroke="#ffffff" strokeWidth="1.5"/>
        <text x="25" y="86" textAnchor="middle" fill="#ffffff" fontSize="5">NEUTRAL</text>
        <rect x="50" y="78" width="30" height="10" rx="1" fill="none" stroke="#22c55e" strokeWidth="1.5"/>
        <text x="65" y="86" textAnchor="middle" fill="#22c55e" fontSize="5">GROUND</text>
        {/* No bond indicator */}
        <text x="45" y="100" textAnchor="middle" fill="#ef4444" fontSize="6" fontWeight="bold">N-G SEPARATED</text>
        <text x="45" y="115" textAnchor="middle" fill="#9ca3af" fontSize="7">SUB-PANEL</text>
      </g>

      {/* Ground symbol at sub-panel */}
      <g transform="translate(330, 140)">
        <line x1="0" y1="0" x2="0" y2="12" stroke="#22c55e" strokeWidth="2"/>
        <line x1="-10" y1="12" x2="10" y2="12" stroke="#22c55e" strokeWidth="2"/>
        <line x1="-7" y1="16" x2="7" y2="16" stroke="#22c55e" strokeWidth="1.5"/>
        <line x1="-4" y1="20" x2="4" y2="20" stroke="#22c55e" strokeWidth="1"/>
      </g>

      {/* Ground rod at main */}
      <g transform="translate(60, 140)">
        <line x1="0" y1="0" x2="0" y2="12" stroke="#22c55e" strokeWidth="2"/>
        <line x1="-10" y1="12" x2="10" y2="12" stroke="#22c55e" strokeWidth="2"/>
        <line x1="-7" y1="16" x2="7" y2="16" stroke="#22c55e" strokeWidth="1.5"/>
        <line x1="-4" y1="20" x2="4" y2="20" stroke="#22c55e" strokeWidth="1"/>
        <text x="0" y="-5" textAnchor="middle" fill="#9ca3af" fontSize="6">GES</text>
      </g>
    </svg>
  );
}

export default function SubPanelInstallationGuidePage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navigation />
      <div className="pt-20">
        <BreadcrumbJsonLd
          items={[
            { name: "Home", url: "https://amporalabs.com" },
            { name: "Blog", url: "https://amporalabs.com/blog" },
            { name: "Sub-Panel Installation Guide", url: "https://amporalabs.com/blog/sub-panel-installation-guide" },
          ]}
        />
        <BlogPostingJsonLd
          headline="Sub-Panel Installation Guide: Sizing, Wiring & NEC Rules"
          description="Complete guide to installing electrical sub-panels with proper sizing, feeder conductors, grounding, and NEC compliance."
          datePublished="2025-04-08"
          dateModified="2025-04-08"
          url="https://amporalabs.com/blog/sub-panel-installation-guide"
          wordCount={3500}
          keywords={["sub-panel installation", "feeder conductor sizing", "sub-panel grounding", "NEC sub-panel requirements", "4-wire feeder"]}
        />

        <article className="max-w-4xl mx-auto px-6 py-12">
          {/* Breadcrumb */}
          <nav className="text-sm text-white/60 mb-8">
            <Link href="/" className="hover:text-white">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/blog" className="hover:text-white">Blog</Link>
            <span className="mx-2">/</span>
            <span className="text-white">Sub-Panel Installation Guide</span>
          </nav>

          {/* Article Header */}
          <header className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <span className="px-3 py-1 bg-green-600/30 text-green-300 text-sm font-medium rounded-full">
                Installation
              </span>
              <span className="text-white/40 text-sm">13 min read</span>
              <span className="text-white/40 text-sm">April 8, 2025</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6 leading-tight">
              Sub-Panel Installation Guide: Sizing, Wiring & NEC Rules
            </h1>
            <p className="text-xl text-white/70">
              A complete technical guide to installing electrical sub-panels. From calculating the right amperage and sizing feeder conductors to understanding the critical grounding and bonding rules that keep installations safe and code-compliant.
            </p>
          </header>

          <div className="mb-12 bg-gradient-to-br from-green-900/20 to-cyan-900/20 rounded-2xl p-6 border border-white/10">
            <HeroIllustration />
          </div>

          {/* When to Install Box */}
          <div className="bg-purple-900/30 border border-purple-500/30 rounded-2xl p-6 mb-12">
            <h3 className="font-display font-bold text-lg mb-3">When to Install a Sub-Panel</h3>
            <ul className="space-y-2 text-white/70 text-sm">
              <li>&#8226; Main panel is full or nearly full and you need additional circuit spaces</li>
              <li>&#8226; Feeding a detached garage, workshop, or accessory building</li>
              <li>&#8226; Adding circuits in a remote area of the home (basement, addition, barn)</li>
              <li>&#8226; Installing dedicated circuits for EV charger, hot tub, or shop equipment</li>
              <li>&#8226; Separating loads for monitoring, solar integration, or load management</li>
              <li>&#8226; Reducing long home runs by placing a panel closer to loads</li>
            </ul>
          </div>

          {/* Table of Contents */}
          <div className="bg-white/5 rounded-2xl p-6 mb-12">
            <h2 className="font-display font-bold mb-4">In This Guide</h2>
            <ul className="space-y-2 text-white/70">
              <li><a href="#sub-panel-sizing" className="hover:text-purple-400">Sub-Panel Sizing</a></li>
              <li><a href="#feeder-conductor-sizing" className="hover:text-purple-400">Feeder Conductor Sizing (NEC 215 &amp; 220)</a></li>
              <li><a href="#main-breaker-vs-mlo" className="hover:text-purple-400">Main Breaker vs Main Lug Sub-Panels</a></li>
              <li><a href="#grounding-vs-bonding" className="hover:text-purple-400">Grounding vs Bonding at Sub-Panels</a></li>
              <li><a href="#four-wire-requirement" className="hover:text-purple-400">4-Wire Feeder Requirement</a></li>
              <li><a href="#grounding-electrode" className="hover:text-purple-400">Grounding Electrode Requirements</a></li>
              <li><a href="#working-space" className="hover:text-purple-400">Working Space Clearances (110.26)</a></li>
              <li><a href="#installation-steps" className="hover:text-purple-400">Step-by-Step Installation</a></li>
              <li><a href="#detached-building" className="hover:text-purple-400">Detached Building / Garage Sub-Panels</a></li>
              <li><a href="#common-mistakes" className="hover:text-purple-400">Common Mistakes</a></li>
              <li><a href="#inspection-checklist" className="hover:text-purple-400">Inspection Checklist</a></li>
            </ul>
          </div>

          {/* Article Content */}
          <div className="prose prose-invert prose-lg max-w-none">

            <section id="sub-panel-sizing" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Sub-Panel Sizing: Determining Amperage Needs</h2>
              <p className="text-white/80 mb-4">
                Choosing the right sub-panel amperage requires calculating the total expected load on the panel, plus a reasonable allowance for future expansion. A sub-panel that is too small forces additional work later, while an oversized panel increases feeder cost unnecessarily.
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-3">Load Calculation Approach</h3>
              <p className="text-white/80 mb-4">
                Add up the anticipated connected load on the sub-panel. For residential sub-panels, use the NEC Article 220 standard calculation method or the optional calculation per 220.82 to determine demand. Key considerations:
              </p>
              <ul className="list-disc list-inside text-white/70 space-y-2 mb-4">
                <li><strong>General lighting and receptacles</strong> - 3 VA per square foot of the area served by the sub-panel</li>
                <li><strong>Dedicated circuits</strong> - Add full nameplate ratings for large appliances (EV charger, range, dryer, water heater)</li>
                <li><strong>Continuous loads</strong> - Must be rated at 125% for breaker sizing (NEC 210.20(A))</li>
                <li><strong>Motor loads</strong> - 125% of the largest motor plus sum of all other motors (NEC 430.24)</li>
                <li><strong>Future expansion</strong> - Allow 20-25% spare capacity for future circuits</li>
              </ul>

              <h3 className="text-xl font-semibold mt-6 mb-3">Common Sub-Panel Sizes</h3>
              <div className="overflow-x-auto my-6">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-white/20">
                      <th className="text-left py-3 px-4 text-white/60">Sub-Panel Size</th>
                      <th className="text-left py-3 px-4 text-white/60">Typical Use</th>
                      <th className="text-left py-3 px-4 text-white/60">Circuit Spaces</th>
                    </tr>
                  </thead>
                  <tbody className="text-white/80">
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-mono">30A</td>
                      <td className="py-3 px-4">Small shed, limited lighting and receptacles</td>
                      <td className="py-3 px-4">4-6</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-mono">60A</td>
                      <td className="py-3 px-4">Detached garage, workshop, small addition</td>
                      <td className="py-3 px-4">8-12</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-mono">100A</td>
                      <td className="py-3 px-4">Large garage, in-law suite, basement finish</td>
                      <td className="py-3 px-4">12-24</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-mono">125A</td>
                      <td className="py-3 px-4">Large addition, workshop with heavy equipment</td>
                      <td className="py-3 px-4">20-30</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-mono">200A</td>
                      <td className="py-3 px-4">Second dwelling unit, large commercial sub-feed</td>
                      <td className="py-3 px-4">30-42</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="bg-green-900/30 rounded-xl p-6 my-6">
                <p className="text-white/90">
                  <strong>Pro Tip:</strong> The sub-panel amperage rating can never exceed the feeder breaker rating in the main panel. A 60A sub-panel fed by a 60A breaker is correct. But a 100A-rated sub-panel fed by a 60A breaker is also acceptable, as the feeder breaker limits the available current. Oversizing the panel bus gives room for future breaker expansion without replacing the panel.
                </p>
              </div>
            </section>

            <section id="feeder-conductor-sizing" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Feeder Conductor Sizing (NEC 215 &amp; 220)</h2>
              <p className="text-white/80 mb-4">
                Feeder conductors must be sized to carry the calculated load and must have an ampacity not less than the rating of the overcurrent device protecting them (NEC 215.2). When sizing feeders, also account for voltage drop, especially on longer runs.
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-3">Minimum Feeder Conductor Sizes</h3>
              <p className="text-white/80 mb-4">
                The following table shows minimum conductor sizes based on the feeder breaker rating, using 75&#176;C termination ratings per NEC 110.14(C). Always verify conductor ampacity from NEC Table 310.16.
              </p>

              <div className="overflow-x-auto my-6">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-white/20">
                      <th className="text-left py-3 px-4 text-white/60">Feeder Breaker</th>
                      <th className="text-left py-3 px-4 text-white/60">Copper (THHN/THWN)</th>
                      <th className="text-left py-3 px-4 text-white/60">Aluminum (THHN/THWN)</th>
                      <th className="text-left py-3 px-4 text-white/60">Min. Ground (Cu)</th>
                    </tr>
                  </thead>
                  <tbody className="text-white/80">
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-mono">30A</td>
                      <td className="py-3 px-4 font-mono">10 AWG</td>
                      <td className="py-3 px-4 font-mono">8 AWG</td>
                      <td className="py-3 px-4 font-mono">10 AWG</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-mono">40A</td>
                      <td className="py-3 px-4 font-mono">8 AWG</td>
                      <td className="py-3 px-4 font-mono">6 AWG</td>
                      <td className="py-3 px-4 font-mono">10 AWG</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-mono">50A</td>
                      <td className="py-3 px-4 font-mono">6 AWG</td>
                      <td className="py-3 px-4 font-mono">4 AWG</td>
                      <td className="py-3 px-4 font-mono">10 AWG</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-mono">60A</td>
                      <td className="py-3 px-4 font-mono">6 AWG</td>
                      <td className="py-3 px-4 font-mono">4 AWG</td>
                      <td className="py-3 px-4 font-mono">10 AWG</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-mono">100A</td>
                      <td className="py-3 px-4 font-mono">3 AWG</td>
                      <td className="py-3 px-4 font-mono">1 AWG</td>
                      <td className="py-3 px-4 font-mono">8 AWG</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-mono">125A</td>
                      <td className="py-3 px-4 font-mono">1 AWG</td>
                      <td className="py-3 px-4 font-mono">2/0 AWG</td>
                      <td className="py-3 px-4 font-mono">6 AWG</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-mono">200A</td>
                      <td className="py-3 px-4 font-mono">2/0 AWG</td>
                      <td className="py-3 px-4 font-mono">4/0 AWG</td>
                      <td className="py-3 px-4 font-mono">6 AWG</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="bg-orange-900/30 rounded-xl p-6 my-6">
                <p className="text-white/90">
                  <strong>Voltage Drop:</strong> NEC 215.2(A)(4) Informational Note recommends feeder voltage drop not exceed 3%, and total branch circuit plus feeder drop not exceed 5%. For long runs (over 50 feet), you may need to upsize conductors. Use the formula: VD = (2 x K x I x L) / CM, where K = 12.9 for copper or 21.2 for aluminum, I = current in amps, L = one-way length in feet, and CM = circular mils of the conductor.
                </p>
              </div>

              <h3 className="text-xl font-semibold mt-6 mb-3">Conduit Sizing for Feeders</h3>
              <p className="text-white/80 mb-4">
                When running feeder conductors in conduit, size the conduit per NEC Chapter 9 Table 1 fill requirements. For four conductors (two hots, neutral, ground), the maximum fill is 40% of the conduit cross-sectional area.
              </p>
              <div className="overflow-x-auto my-6">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-white/20">
                      <th className="text-left py-3 px-4 text-white/60">Feeder Size</th>
                      <th className="text-left py-3 px-4 text-white/60">4 THHN Cu in EMT</th>
                      <th className="text-left py-3 px-4 text-white/60">4 THHN Cu in PVC Sch 40</th>
                    </tr>
                  </thead>
                  <tbody className="text-white/80">
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">6 AWG (60A)</td>
                      <td className="py-3 px-4">3/4&quot; EMT</td>
                      <td className="py-3 px-4">3/4&quot; PVC</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">3 AWG (100A)</td>
                      <td className="py-3 px-4">1-1/4&quot; EMT</td>
                      <td className="py-3 px-4">1-1/4&quot; PVC</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4">2/0 AWG (200A)</td>
                      <td className="py-3 px-4">2&quot; EMT</td>
                      <td className="py-3 px-4">2&quot; PVC</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section id="main-breaker-vs-mlo" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Main Breaker vs Main Lug Sub-Panels</h2>
              <p className="text-white/80 mb-4">
                Sub-panels come in two configurations: main breaker and main lug only (MLO). Understanding when to use each is important for code compliance and safety.
              </p>

              <div className="grid md:grid-cols-2 gap-4 my-6">
                <div className="bg-green-900/30 rounded-xl p-6">
                  <h3 className="font-semibold text-green-400 mb-2">Main Lug Only (MLO)</h3>
                  <p className="text-white/70 text-sm mb-3">
                    Feeder conductors land directly on the bus lugs. No main breaker in the sub-panel.
                  </p>
                  <ul className="space-y-1 text-white/60 text-sm">
                    <li>&#8226; Most common for sub-panels in the same building</li>
                    <li>&#8226; Protected by the feeder breaker in the main panel</li>
                    <li>&#8226; Less expensive</li>
                    <li>&#8226; No local disconnect at the sub-panel</li>
                    <li>&#8226; Requires feeder breaker in main panel for overcurrent protection</li>
                  </ul>
                </div>
                <div className="bg-cyan-900/30 rounded-xl p-6">
                  <h3 className="font-semibold text-cyan-400 mb-2">Main Breaker Sub-Panel</h3>
                  <p className="text-white/70 text-sm mb-3">
                    Has a main breaker that can disconnect all circuits in the sub-panel.
                  </p>
                  <ul className="space-y-1 text-white/60 text-sm">
                    <li>&#8226; Required for detached buildings (serves as disconnect per NEC 225.31)</li>
                    <li>&#8226; Provides local disconnect for maintenance</li>
                    <li>&#8226; Main breaker rating must match or exceed feeder breaker</li>
                    <li>&#8226; Slightly more expensive</li>
                    <li>&#8226; Can be used anywhere an MLO panel is used</li>
                  </ul>
                </div>
              </div>

              <div className="bg-purple-900/30 rounded-xl p-6 my-6">
                <h3 className="font-semibold text-purple-400 mb-3">NEC 225.31 - Disconnect Requirement</h3>
                <p className="text-white/70">
                  Each building or structure supplied by a feeder must have a disconnecting means installed at a readily accessible location nearest the point of entrance of the conductors. For detached buildings, this typically means a main breaker sub-panel or a separate disconnect switch ahead of an MLO panel. The disconnect must simultaneously disconnect all ungrounded conductors.
                </p>
              </div>
            </section>

            <section id="grounding-vs-bonding" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Grounding vs Bonding at Sub-Panels</h2>
              <p className="text-white/80 mb-4">
                This is the single most critical concept for sub-panel installations and the most common source of code violations. The rule is straightforward but often misunderstood:
              </p>

              <div className="bg-red-900/20 border border-red-500/30 rounded-xl p-6 my-6">
                <h3 className="font-semibold text-red-400 mb-2 text-lg">The #1 Rule: Separate Neutral and Ground in Sub-Panels</h3>
                <p className="text-white/80 mb-3">
                  In a sub-panel, the neutral (grounded conductor) and the equipment grounding conductor must be kept completely separate. The neutral bus and ground bus must NOT be bonded together. This is required by NEC 250.24(A)(5) and 250.142(B).
                </p>
                <p className="text-white/70 text-sm">
                  At the main service panel, neutral and ground are bonded together via the main bonding jumper. This is the ONLY point where they should be connected. If you bond neutral and ground at a sub-panel, you create parallel return paths for neutral current, which puts current on equipment grounding conductors, metallic raceways, and equipment enclosures. This is a shock hazard and will cause GFCI devices to nuisance trip.
                </p>
              </div>

              <h3 className="text-xl font-semibold mt-6 mb-3">What This Means in Practice</h3>
              <ul className="list-disc list-inside text-white/70 space-y-2 mb-4">
                <li><strong>Remove the bonding strap/screw</strong> - Most panels ship with a green bonding screw or bonding strap connecting the neutral bus to the enclosure. When used as a sub-panel, this MUST be removed.</li>
                <li><strong>Separate bus bars</strong> - The neutral bus must be isolated (floating) from the panel enclosure. The ground bus is bonded to the enclosure.</li>
                <li><strong>Neutral conductors on the neutral bus only</strong> - White/gray wires go to the isolated neutral bus.</li>
                <li><strong>Grounding conductors on the ground bus only</strong> - Bare or green wires go to the grounding bus that is bonded to the enclosure.</li>
              </ul>

              <div className="grid md:grid-cols-2 gap-4 my-6">
                <div className="bg-green-900/30 rounded-xl p-6">
                  <h4 className="font-semibold text-green-400 mb-2">Main Panel (Service)</h4>
                  <ul className="space-y-1 text-white/60 text-sm">
                    <li>&#8226; Neutral and ground ARE bonded</li>
                    <li>&#8226; Main bonding jumper installed</li>
                    <li>&#8226; Grounding electrode conductor connected here</li>
                    <li>&#8226; Neutral current returns through neutral bus</li>
                  </ul>
                </div>
                <div className="bg-red-900/20 rounded-xl p-6">
                  <h4 className="font-semibold text-red-400 mb-2">Sub-Panel (Downstream)</h4>
                  <ul className="space-y-1 text-white/60 text-sm">
                    <li>&#8226; Neutral and ground are NOT bonded</li>
                    <li>&#8226; Bonding screw/strap REMOVED</li>
                    <li>&#8226; Neutral bus floats (isolated from enclosure)</li>
                    <li>&#8226; Ground bus bonded to enclosure</li>
                  </ul>
                </div>
              </div>
            </section>

            <section id="four-wire-requirement" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">4-Wire Feeder Requirement</h2>
              <p className="text-white/80 mb-4">
                Because neutral and ground must be separated at the sub-panel, you need four conductors in the feeder:
              </p>

              <div className="bg-white/5 rounded-xl p-6 my-6">
                <ol className="space-y-3 text-white/70">
                  <li><strong className="text-red-400">1. Line 1 (Hot)</strong> - Ungrounded conductor, typically black or red</li>
                  <li><strong className="text-red-400">2. Line 2 (Hot)</strong> - Second ungrounded conductor for 240V, typically black or red</li>
                  <li><strong className="text-white">3. Neutral</strong> - Grounded conductor, white or gray insulation</li>
                  <li><strong className="text-green-400">4. Equipment Ground</strong> - Bare copper, green, or green with yellow stripe</li>
                </ol>
              </div>

              <p className="text-white/80 mb-4">
                The old practice of using a 3-wire feeder (two hots and a neutral, with neutral bonded to ground at the sub-panel) has not been permitted for new installations since the 2008 NEC. Even for existing 3-wire sub-panel feeds, any modification or upgrade requires conversion to a 4-wire system.
              </p>

              <div className="bg-orange-900/30 rounded-xl p-6 my-6">
                <p className="text-white/90">
                  <strong>Exception - NEC 250.32(B) Exception:</strong> An existing 3-wire feeder to a separate building is permitted to remain if: (1) there is an existing installation with no continuous metallic paths between buildings (no metal water pipe, no metal conduit, etc.), (2) ground-fault protection is not installed on the supply side, and (3) the grounded conductor is used for grounding the equipment. However, best practice for any new or upgraded installation is always a 4-wire feeder.
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
                  <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/></svg>
                  Download Free
                </a>
              </div>
            </div>

            <section id="grounding-electrode" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Grounding Electrode Requirements</h2>
              <p className="text-white/80 mb-4">
                Whether a sub-panel requires its own grounding electrode system depends on its location:
              </p>

              <div className="grid md:grid-cols-2 gap-4 my-6">
                <div className="bg-white/5 rounded-xl p-6">
                  <h3 className="font-semibold text-cyan-400 mb-2">Same Building as Main Panel</h3>
                  <p className="text-white/70 text-sm">
                    A sub-panel in the same building as the main panel does NOT require its own grounding electrode system. The equipment grounding conductor in the feeder provides the ground fault return path back to the main panel&apos;s grounding electrode system.
                  </p>
                </div>
                <div className="bg-white/5 rounded-xl p-6">
                  <h3 className="font-semibold text-orange-400 mb-2">Separate/Detached Building</h3>
                  <p className="text-white/70 text-sm">
                    Per NEC 250.32(A), a sub-panel in a separate or detached building MUST have its own grounding electrode system. This includes ground rods, concrete-encased electrodes, or other electrodes per 250.52. The grounding electrode conductor connects the sub-panel&apos;s ground bus to the local grounding electrode(s).
                  </p>
                </div>
              </div>

              <div className="bg-purple-900/30 rounded-xl p-6 my-6">
                <h3 className="font-semibold text-purple-400 mb-3">Grounding Electrode Conductor Sizing at Sub-Panel</h3>
                <p className="text-white/70 mb-2">
                  For a detached building sub-panel, size the GEC per NEC Table 250.66, based on the largest ungrounded feeder conductor:
                </p>
                <ul className="space-y-1 text-white/60 text-sm">
                  <li>&#8226; 6 AWG copper feeder (60A): <strong>8 AWG copper GEC</strong></li>
                  <li>&#8226; 3 AWG copper feeder (100A): <strong>6 AWG copper GEC</strong> (but 6 AWG max to ground rods)</li>
                  <li>&#8226; 2/0 AWG copper feeder (200A): <strong>4 AWG copper GEC</strong></li>
                </ul>
                <p className="text-white/60 text-sm mt-2">
                  Remember: GEC to ground rods never needs to be larger than 6 AWG copper per NEC 250.66(A).
                </p>
              </div>
            </section>

            <section id="working-space" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Working Space Clearances (NEC 110.26)</h2>
              <p className="text-white/80 mb-4">
                Sub-panels must meet the same working space requirements as any other electrical equipment. NEC 110.26 specifies minimum clear working space:
              </p>

              <div className="overflow-x-auto my-6">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-white/20">
                      <th className="text-left py-3 px-4 text-white/60">Dimension</th>
                      <th className="text-left py-3 px-4 text-white/60">0-150V to Ground</th>
                      <th className="text-left py-3 px-4 text-white/60">151-600V to Ground</th>
                    </tr>
                  </thead>
                  <tbody className="text-white/80">
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">Depth (Condition 1)</td>
                      <td className="py-3 px-4">36 inches</td>
                      <td className="py-3 px-4">36 inches</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">Width</td>
                      <td className="py-3 px-4">30 inches or width of equipment, whichever is greater</td>
                      <td className="py-3 px-4">30 inches or width of equipment, whichever is greater</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4">Height</td>
                      <td className="py-3 px-4">78 inches (6.5 feet)</td>
                      <td className="py-3 px-4">78 inches (6.5 feet)</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <ul className="list-disc list-inside text-white/70 space-y-2 mb-4">
                <li><strong>Dedicated space</strong> - NEC 110.26(E) requires dedicated space above and below the panel extending from floor to ceiling (or 6 feet above, whichever is lower). No piping, ducts, or other equipment unrelated to the electrical installation is permitted in this space.</li>
                <li><strong>Illumination</strong> - NEC 110.26(D) requires illumination for all working spaces around service equipment, switchboards, and panelboards in non-dwelling locations. Good practice for all installations.</li>
                <li><strong>Panel height</strong> - The center of the grip of the highest breaker handle must not be more than 6 feet 7 inches above the floor (NEC 240.24(A)).</li>
              </ul>
            </section>

            <section id="installation-steps" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Step-by-Step Sub-Panel Installation</h2>

              <div className="space-y-4 my-6">
                <div className="bg-white/5 rounded-xl p-6">
                  <h3 className="font-semibold mb-2">Step 1: Plan the Installation</h3>
                  <p className="text-white/70 text-sm">
                    Calculate the load, select the sub-panel size and feeder breaker rating. Determine the routing for feeder conductors. Verify working space clearances at both the main panel (for the new feeder breaker) and the sub-panel location. Pull the permit.
                  </p>
                </div>

                <div className="bg-white/5 rounded-xl p-6">
                  <h3 className="font-semibold mb-2">Step 2: Mount the Sub-Panel</h3>
                  <p className="text-white/70 text-sm">
                    Secure the sub-panel to the wall at the proper height. Use appropriate fasteners for the wall type (wood screws for studs, toggle bolts or masonry anchors for concrete). Ensure the panel is level and plumb. For outdoor installations, use a NEMA 3R rated enclosure.
                  </p>
                </div>

                <div className="bg-white/5 rounded-xl p-6">
                  <h3 className="font-semibold mb-2">Step 3: Run the Feeder Conduit or Cable</h3>
                  <p className="text-white/70 text-sm">
                    Install conduit or route cable from the main panel to the sub-panel. Support conduit per NEC Table 344.30(B)(2) for rigid metal conduit or appropriate table for the conduit type used. If using NM cable (where permitted), it must be protected from physical damage and properly supported. SER cable is commonly used for interior sub-panel feeds.
                  </p>
                </div>

                <div className="bg-white/5 rounded-xl p-6">
                  <h3 className="font-semibold mb-2">Step 4: Pull Feeder Conductors</h3>
                  <p className="text-white/70 text-sm">
                    Pull all four conductors (L1, L2, neutral, ground) through the conduit. Leave adequate length at both ends for termination (12-18 inches). Use pulling lubricant for long runs to avoid conductor damage. If using cable, secure with proper connectors at each panel.
                  </p>
                </div>

                <div className="bg-white/5 rounded-xl p-6">
                  <h3 className="font-semibold mb-2">Step 5: Prepare the Sub-Panel</h3>
                  <p className="text-white/70 text-sm">
                    <strong>Critical step:</strong> Remove the bonding screw or bonding strap that connects the neutral bus to the panel enclosure. Verify the neutral bus is isolated (floating). Ensure the ground bus is bonded to the enclosure. Install additional ground bars if needed.
                  </p>
                </div>

                <div className="bg-white/5 rounded-xl p-6">
                  <h3 className="font-semibold mb-2">Step 6: Terminate Feeder Conductors at Sub-Panel</h3>
                  <p className="text-white/70 text-sm">
                    Connect the two hot conductors to the main lugs (or main breaker terminals). Connect the neutral to the isolated neutral bus. Connect the equipment ground to the grounding bus. Torque all connections to manufacturer specifications using a calibrated torque wrench or torque screwdriver.
                  </p>
                </div>

                <div className="bg-white/5 rounded-xl p-6">
                  <h3 className="font-semibold mb-2">Step 7: Install and Connect the Feeder Breaker</h3>
                  <p className="text-white/70 text-sm">
                    Turn off the main breaker at the main panel. Install the 2-pole feeder breaker in the main panel. Connect the feeder hot conductors to the breaker. Connect the feeder neutral to the neutral bus in the main panel. Connect the feeder ground to the ground bus in the main panel. Torque all connections.
                  </p>
                </div>

                <div className="bg-white/5 rounded-xl p-6">
                  <h3 className="font-semibold mb-2">Step 8: Install Branch Circuit Breakers</h3>
                  <p className="text-white/70 text-sm">
                    Install branch circuit breakers in the sub-panel. Connect branch circuit conductors. Maintain proper separation: neutrals on the isolated neutral bus, grounds on the grounding bus. Apply AFCI and GFCI protection as required by the current NEC edition.
                  </p>
                </div>

                <div className="bg-white/5 rounded-xl p-6">
                  <h3 className="font-semibold mb-2">Step 9: Label and Energize</h3>
                  <p className="text-white/70 text-sm">
                    Complete the panel schedule with circuit descriptions. Label the sub-panel with its feeder source (e.g., &quot;Fed from Panel A, Breaker 7/9&quot;). Verify all connections are tight. Turn on the feeder breaker and test voltage at the sub-panel: 240V between hots, 120V from each hot to neutral.
                  </p>
                </div>
              </div>
            </section>

            <section id="detached-building" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Detached Building / Garage Sub-Panels</h2>
              <p className="text-white/80 mb-4">
                Sub-panels in detached buildings (garages, workshops, barns, accessory dwelling units) have additional requirements beyond a simple in-building sub-panel:
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-3">Additional Requirements for Detached Structures</h3>
              <ul className="list-disc list-inside text-white/70 space-y-2 mb-4">
                <li><strong>Disconnecting means (NEC 225.31)</strong> - A disconnect is required at the detached building, nearest the point of entrance. A main breaker sub-panel satisfies this. Alternatively, install a separate disconnect switch ahead of an MLO panel.</li>
                <li><strong>Grounding electrode system (NEC 250.32)</strong> - The detached building must have its own grounding electrode system. Install ground rods, use a Ufer ground in the slab, or connect to other available electrodes.</li>
                <li><strong>4-wire feeder</strong> - Always required for new installations to detached buildings. Two hots, neutral, and separate equipment ground.</li>
                <li><strong>Underground feeder routing</strong> - If running underground, use UF cable at proper burial depth (24 inches for direct burial, 18 inches in rigid conduit, 12 inches under concrete) per NEC Table 300.5, or individual conductors in PVC conduit.</li>
                <li><strong>GFCI protection</strong> - All 125V, 15A and 20A receptacles in garages require GFCI protection per NEC 210.8(A)(2).</li>
                <li><strong>Lighting</strong> - At least one switched lighting outlet is required in garages per NEC 210.70(A)(2)(a).</li>
              </ul>

              <h3 className="text-xl font-semibold mt-6 mb-3">Underground Feeder Installation</h3>
              <div className="overflow-x-auto my-6">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-white/20">
                      <th className="text-left py-3 px-4 text-white/60">Wiring Method</th>
                      <th className="text-left py-3 px-4 text-white/60">Minimum Cover (Inches)</th>
                      <th className="text-left py-3 px-4 text-white/60">Notes</th>
                    </tr>
                  </thead>
                  <tbody className="text-white/80">
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">Direct-buried UF cable</td>
                      <td className="py-3 px-4">24&quot;</td>
                      <td className="py-3 px-4">Most common for residential</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">Rigid metal conduit (RMC)</td>
                      <td className="py-3 px-4">6&quot;</td>
                      <td className="py-3 px-4">Best protection, minimum cover</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">IMC (Intermediate metal conduit)</td>
                      <td className="py-3 px-4">6&quot;</td>
                      <td className="py-3 px-4">Lighter than RMC, same cover</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">PVC conduit (Schedule 40/80)</td>
                      <td className="py-3 px-4">18&quot;</td>
                      <td className="py-3 px-4">Most common method for feeders</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4">PVC under concrete slab</td>
                      <td className="py-3 px-4">0&quot; (under 4&quot; slab)</td>
                      <td className="py-3 px-4">Concrete counts as protection</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="bg-orange-900/30 rounded-xl p-6 my-6">
                <p className="text-white/90">
                  <strong>Important:</strong> When trenching between buildings, install a warning ribbon (underground electrical line) 12 inches above the buried conductors or conduit. Transition from underground to above-ground must be protected by conduit to a height of at least 8 feet above finished grade per NEC 300.5(D).
                </p>
              </div>
            </section>

            <section id="common-mistakes" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Common Sub-Panel Mistakes</h2>
              <div className="space-y-4 my-6">
                <div className="bg-red-900/20 border border-red-500/30 rounded-xl p-6">
                  <h3 className="font-semibold text-red-400 mb-2">1. Bonding Neutral and Ground in the Sub-Panel</h3>
                  <p className="text-white/70 text-sm">
                    The most common and dangerous mistake. Leaving the bonding screw or strap installed creates parallel return paths for neutral current on the equipment ground conductor and metallic raceways. This puts current on parts that should be at zero potential, creating shock hazards and causing GFCI nuisance tripping. Always remove the bonding screw/strap in sub-panels.
                  </p>
                </div>

                <div className="bg-red-900/20 border border-red-500/30 rounded-xl p-6">
                  <h3 className="font-semibold text-red-400 mb-2">2. Using a 3-Wire Feeder Instead of 4-Wire</h3>
                  <p className="text-white/70 text-sm">
                    Running only two hots and a neutral without a separate equipment ground is a code violation for new installations. The neutral cannot serve double duty as both the grounded conductor and the equipment ground in a sub-panel. Always run a separate equipment grounding conductor as the fourth wire.
                  </p>
                </div>

                <div className="bg-red-900/20 border border-red-500/30 rounded-xl p-6">
                  <h3 className="font-semibold text-red-400 mb-2">3. Undersized Feeder Conductors</h3>
                  <p className="text-white/70 text-sm">
                    Feeder conductors must have ampacity not less than the feeder overcurrent device rating. Do not forget to account for voltage drop on long runs. A 60A sub-panel 150 feet from the main panel may need conductors sized for 100A to keep voltage drop under 3%.
                  </p>
                </div>

                <div className="bg-red-900/20 border border-red-500/30 rounded-xl p-6">
                  <h3 className="font-semibold text-red-400 mb-2">4. No Disconnect at Detached Building</h3>
                  <p className="text-white/70 text-sm">
                    NEC 225.31 requires a disconnecting means at each detached building supplied by a feeder. An MLO sub-panel alone does not satisfy this requirement. Install a main breaker panel or a separate disconnect switch.
                  </p>
                </div>

                <div className="bg-red-900/20 border border-red-500/30 rounded-xl p-6">
                  <h3 className="font-semibold text-red-400 mb-2">5. No Grounding Electrode at Detached Building</h3>
                  <p className="text-white/70 text-sm">
                    A sub-panel in a detached building must have its own grounding electrode system per NEC 250.32(A). Even with a 4-wire feeder and proper grounding conductor, the detached building needs local grounding electrodes (ground rods, Ufer, etc.).
                  </p>
                </div>

                <div className="bg-red-900/20 border border-red-500/30 rounded-xl p-6">
                  <h3 className="font-semibold text-red-400 mb-2">6. Inadequate Working Space</h3>
                  <p className="text-white/70 text-sm">
                    Sub-panels installed in tight closets, behind water heaters, or in areas without 36 inches of clear depth, 30 inches of width, and 78 inches of headroom violate NEC 110.26. Plan the location before mounting.
                  </p>
                </div>

                <div className="bg-red-900/20 border border-red-500/30 rounded-xl p-6">
                  <h3 className="font-semibold text-red-400 mb-2">7. Mixing Neutral and Ground on the Same Bus</h3>
                  <p className="text-white/70 text-sm">
                    Even when the bonding strap is removed, some electricians land neutral and ground wires on the same bus bar. Neutrals must go on the isolated neutral bus, and grounds must go on the enclosure-bonded ground bus. Mixing them on the same bar defeats the purpose of separation.
                  </p>
                </div>

                <div className="bg-red-900/20 border border-red-500/30 rounded-xl p-6">
                  <h3 className="font-semibold text-red-400 mb-2">8. Not Torquing Connections</h3>
                  <p className="text-white/70 text-sm">
                    NEC 110.14(D) requires electrical connections to be torqued to manufacturer specifications. Loose connections cause arcing, overheating, and fires. Use a calibrated torque wrench on all lugs and terminal screws.
                  </p>
                </div>
              </div>
            </section>

            <section id="inspection-checklist" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Sub-Panel Inspection Checklist</h2>
              <p className="text-white/80 mb-4">
                Use this checklist to verify your sub-panel installation before calling for inspection:
              </p>

              <div className="space-y-4 my-6">
                <div className="bg-white/5 rounded-xl p-6">
                  <h3 className="font-semibold text-green-400 mb-3">Feeder &amp; Overcurrent Protection</h3>
                  <ul className="space-y-2 text-white/70 text-sm">
                    <li>&#9744; Feeder breaker rating matches or protects the sub-panel amperage</li>
                    <li>&#9744; Feeder conductors properly sized per NEC Table 310.16 and 75&#176;C column</li>
                    <li>&#9744; Equipment grounding conductor sized per NEC Table 250.122</li>
                    <li>&#9744; Voltage drop is within 3% for feeder length</li>
                    <li>&#9744; Feeder is a 4-wire system (two hots, neutral, ground)</li>
                    <li>&#9744; Conduit properly sized for number and size of conductors</li>
                  </ul>
                </div>

                <div className="bg-white/5 rounded-xl p-6">
                  <h3 className="font-semibold text-green-400 mb-3">Grounding &amp; Bonding</h3>
                  <ul className="space-y-2 text-white/70 text-sm">
                    <li>&#9744; Bonding screw/strap REMOVED from sub-panel (neutral floats)</li>
                    <li>&#9744; Neutral bus is isolated from the panel enclosure</li>
                    <li>&#9744; Ground bus is bonded to the panel enclosure</li>
                    <li>&#9744; All neutral wires on the isolated neutral bus only</li>
                    <li>&#9744; All ground wires on the ground bus only</li>
                    <li>&#9744; No neutral and ground wires sharing the same bus</li>
                    <li>&#9744; Grounding electrode system installed (detached buildings)</li>
                    <li>&#9744; GEC properly sized and connected (detached buildings)</li>
                  </ul>
                </div>

                <div className="bg-white/5 rounded-xl p-6">
                  <h3 className="font-semibold text-green-400 mb-3">Installation Quality</h3>
                  <ul className="space-y-2 text-white/70 text-sm">
                    <li>&#9744; All connections torqued to manufacturer specifications</li>
                    <li>&#9744; Panel securely mounted, level, and plumb</li>
                    <li>&#9744; Working space clearances met (36&quot; deep x 30&quot; wide x 78&quot; high)</li>
                    <li>&#9744; No storage or obstructions in the working space</li>
                    <li>&#9744; Panel schedule completed with circuit descriptions</li>
                    <li>&#9744; Sub-panel labeled with feeder source identification</li>
                    <li>&#9744; Proper cable/conduit connectors used at all entries</li>
                    <li>&#9744; Conductors properly supported and secured</li>
                  </ul>
                </div>

                <div className="bg-white/5 rounded-xl p-6">
                  <h3 className="font-semibold text-green-400 mb-3">Detached Building Requirements</h3>
                  <ul className="space-y-2 text-white/70 text-sm">
                    <li>&#9744; Disconnecting means at the building (main breaker or separate disconnect)</li>
                    <li>&#9744; Grounding electrode system installed</li>
                    <li>&#9744; Underground wiring at proper burial depth per NEC Table 300.5</li>
                    <li>&#9744; Warning ribbon installed 12 inches above buried conductors</li>
                    <li>&#9744; Conduit protection to 8 feet above grade at transitions</li>
                    <li>&#9744; GFCI protection on all garage/outbuilding receptacles</li>
                  </ul>
                </div>

                <div className="bg-white/5 rounded-xl p-6">
                  <h3 className="font-semibold text-green-400 mb-3">Testing &amp; Verification</h3>
                  <ul className="space-y-2 text-white/70 text-sm">
                    <li>&#9744; 240V measured between L1 and L2</li>
                    <li>&#9744; 120V measured from each hot to neutral</li>
                    <li>&#9744; 120V measured from each hot to ground</li>
                    <li>&#9744; Less than 1V measured between neutral bus and ground bus</li>
                    <li>&#9744; GFCI and AFCI breakers tested and functional</li>
                    <li>&#9744; No neutral current on equipment grounding conductor</li>
                  </ul>
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
                <Link href="/blog/electrical-grounding-vs-bonding" className="bg-white/5 hover:bg-white/10 rounded-xl p-6 transition-colors">
                  <span className="text-purple-400 text-sm">NEC Code</span>
                  <h3 className="font-semibold mt-2">Grounding vs Bonding: Understanding the Difference</h3>
                </Link>
                <Link href="/blog/wire-sizing-guide-nec-ampacity-tables" className="bg-white/5 hover:bg-white/10 rounded-xl p-6 transition-colors">
                  <span className="text-cyan-400 text-sm">Calculations</span>
                  <h3 className="font-semibold mt-2">Wire Sizing Guide &amp; NEC Ampacity Tables</h3>
                </Link>
                <Link href="/blog/electrical-service-upgrade-200-amp" className="bg-white/5 hover:bg-white/10 rounded-xl p-6 transition-colors">
                  <span className="text-green-400 text-sm">Installation</span>
                  <h3 className="font-semibold mt-2">200 Amp Service Upgrade: Complete Guide</h3>
                </Link>
                <Link href="/blog/how-to-calculate-voltage-drop" className="bg-white/5 hover:bg-white/10 rounded-xl p-6 transition-colors">
                  <span className="text-cyan-400 text-sm">Calculations</span>
                  <h3 className="font-semibold mt-2">How to Calculate Voltage Drop</h3>
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
