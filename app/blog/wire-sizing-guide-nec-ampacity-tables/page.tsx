import { Metadata } from "next";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import { BreadcrumbJsonLd, BlogPostingJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Wire Sizing Guide: How to Use NEC Ampacity Tables",
  description: "Complete guide to sizing electrical conductors using NEC ampacity tables. Learn temperature correction, conduit fill derating, ambient temperature factors, and how to select the right wire gauge for any application.",
  keywords: [
    "wire sizing",
    "wire sizing guide",
    "NEC ampacity tables",
    "conductor sizing",
    "wire gauge chart",
    "electrical wire sizing",
    "NEC Table 310.16",
    "ampacity table",
    "wire ampacity",
    "temperature correction factor",
    "conduit fill derating",
    "wire size calculator",
    "AWG wire chart",
    "copper wire ampacity",
    "aluminum wire ampacity",
    "how to size wire"
  ],
  alternates: {
    canonical: "https://amporalabs.com/blog/wire-sizing-guide-nec-ampacity-tables",
  },
  openGraph: {
    title: "Wire Sizing Guide: NEC Ampacity Tables - Ampora",
    description: "Complete guide to sizing electrical conductors using NEC ampacity tables with derating factors.",
    url: "https://amporalabs.com/blog/wire-sizing-guide-nec-ampacity-tables",
    type: "article",
  },
};

function HeroIllustration() {
  return (
    <svg viewBox="0 0 400 160" className="w-full h-40 md:h-48" aria-label="Wire sizing comparison showing different AWG gauges">
      {/* Wire cross-sections */}
      {[
        { awg: "14", dia: 8, amps: "15A", color: "#22c55e" },
        { awg: "12", dia: 12, amps: "20A", color: "#3b82f6" },
        { awg: "10", dia: 16, amps: "30A", color: "#8b5cf6" },
        { awg: "8", dia: 22, amps: "40A", color: "#f59e0b" },
        { awg: "6", dia: 28, amps: "55A", color: "#ef4444" },
      ].map((wire, i) => (
        <g key={i} transform={`translate(${60 + i * 70}, 60)`}>
          {/* Outer insulation */}
          <circle cx="0" cy="0" r={wire.dia + 6} fill="#374151" stroke="#6b7280" strokeWidth="1"/>
          {/* Copper conductor */}
          <circle cx="0" cy="0" r={wire.dia} fill="#b87333" stroke="#8b5a2b" strokeWidth="1"/>
          {/* Labels */}
          <text x="0" y={wire.dia + 25} textAnchor="middle" fill="#fff" fontSize="10" fontWeight="bold">#{wire.awg}</text>
          <text x="0" y={wire.dia + 38} textAnchor="middle" fill={wire.color} fontSize="9">{wire.amps}</text>
        </g>
      ))}

      {/* Title */}
      <text x="200" y="20" textAnchor="middle" fill="#9ca3af" fontSize="10">Wire Gauge vs Ampacity (75°C Copper)</text>

      {/* Scale indicator */}
      <text x="200" y="150" textAnchor="middle" fill="#6b7280" fontSize="8">Larger wire = Higher ampacity</text>
      <path d="M 80 140 L 320 140" stroke="#6b7280" strokeWidth="1" markerEnd="url(#arrow)"/>
      <defs>
        <marker id="arrow" markerWidth="6" markerHeight="6" refX="6" refY="3" orient="auto">
          <path d="M0,0 L0,6 L6,3 z" fill="#6b7280"/>
        </marker>
      </defs>
    </svg>
  );
}

export default function WireSizingGuidePage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navigation />
      <div className="pt-20">
        <BreadcrumbJsonLd
          items={[
            { name: "Home", url: "https://amporalabs.com" },
            { name: "Blog", url: "https://amporalabs.com/blog" },
            { name: "Wire Sizing Guide", url: "https://amporalabs.com/blog/wire-sizing-guide-nec-ampacity-tables" },
          ]}
        />
        <BlogPostingJsonLd
          headline="Wire Sizing Guide: How to Use NEC Ampacity Tables"
          description="Complete guide to sizing electrical conductors using NEC ampacity tables with temperature correction and derating factors."
          datePublished="2024-12-28"
          dateModified="2024-12-28"
          url="https://amporalabs.com/blog/wire-sizing-guide-nec-ampacity-tables"
          wordCount={2400}
          keywords={["wire sizing", "NEC ampacity tables", "conductor sizing", "temperature correction", "derating factors"]}
        />

        <article className="max-w-4xl mx-auto px-6 py-12">
          {/* Breadcrumb */}
          <nav className="text-sm text-white/60 mb-8">
            <Link href="/" className="hover:text-white">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/blog" className="hover:text-white">Blog</Link>
            <span className="mx-2">/</span>
            <span className="text-white">Wire Sizing Guide</span>
          </nav>

          {/* Article Header */}
          <header className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <span className="px-3 py-1 bg-cyan-600/30 text-cyan-300 text-sm font-medium rounded-full">
                Calculations
              </span>
              <span className="text-white/40 text-sm">11 min read</span>
              <span className="text-white/40 text-sm">December 28, 2024</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6 leading-tight">
              Wire Sizing Guide: How to Use NEC Ampacity Tables
            </h1>
            <p className="text-xl text-white/70">
              Master conductor sizing using NEC ampacity tables. Learn when to apply temperature correction, conduit fill derating, and how to select the right wire gauge for any electrical installation.
            </p>
          </header>

          <div className="mb-12 bg-gradient-to-br from-cyan-900/20 to-purple-900/20 rounded-2xl p-6 border border-white/10">
            <HeroIllustration />
          </div>

          {/* Quick Calculator CTA */}
          <div className="bg-cyan-900/30 border border-cyan-500/30 rounded-2xl p-6 mb-12">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div>
                <h3 className="font-display font-bold text-lg mb-1">Skip the manual lookup</h3>
                <p className="text-white/70 text-sm">Our wire sizing calculator applies all NEC tables and derating factors automatically.</p>
              </div>
              <Link
                href="/calculators/wire-sizing"
                className="px-6 py-3 bg-cyan-600 text-white font-semibold rounded-full hover:bg-cyan-500 transition-colors whitespace-nowrap"
              >
                Open Calculator
              </Link>
            </div>
          </div>

          {/* Table of Contents */}
          <div className="bg-white/5 rounded-2xl p-6 mb-12">
            <h2 className="font-display font-bold mb-4">In This Guide</h2>
            <ul className="space-y-2 text-white/70">
              <li><a href="#ampacity-basics" className="hover:text-purple-400">→ Understanding Ampacity</a></li>
              <li><a href="#nec-table-310-16" className="hover:text-purple-400">→ NEC Table 310.16 Explained</a></li>
              <li><a href="#temperature-rating" className="hover:text-purple-400">→ Conductor Temperature Ratings</a></li>
              <li><a href="#temperature-correction" className="hover:text-purple-400">→ Temperature Correction Factors</a></li>
              <li><a href="#conduit-derating" className="hover:text-purple-400">→ Conduit Fill Derating</a></li>
              <li><a href="#sizing-steps" className="hover:text-purple-400">→ Step-by-Step Wire Sizing Process</a></li>
              <li><a href="#common-mistakes" className="hover:text-purple-400">→ Common Wire Sizing Mistakes</a></li>
            </ul>
          </div>

          {/* Article Content */}
          <div className="prose prose-invert prose-lg max-w-none">

            <section id="ampacity-basics" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Understanding Ampacity</h2>
              <p className="text-white/80 mb-4">
                <strong>Ampacity</strong> is the maximum current, in amperes, that a conductor can carry continuously under the conditions of use without exceeding its temperature rating. The NEC defines ampacity in Article 100 and provides ampacity tables in Article 310.
              </p>
              <p className="text-white/80 mb-4">
                Key factors affecting ampacity include:
              </p>
              <ul className="list-disc list-inside text-white/70 space-y-2 mb-4">
                <li><strong>Conductor material</strong> - Copper has higher ampacity than aluminum</li>
                <li><strong>Conductor size</strong> - Larger wire = higher ampacity</li>
                <li><strong>Insulation temperature rating</strong> - Higher rated insulation allows more current</li>
                <li><strong>Ambient temperature</strong> - Higher temps reduce ampacity</li>
                <li><strong>Number of conductors</strong> - More conductors in a raceway reduces ampacity</li>
                <li><strong>Installation method</strong> - Free air vs conduit affects heat dissipation</li>
              </ul>
            </section>

            <section id="nec-table-310-16" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">NEC Table 310.16 Explained</h2>
              <p className="text-white/80 mb-4">
                NEC Table 310.16 is the most commonly used ampacity table. It covers conductors rated 0-2000V in raceways, cables, or direct burial, based on an ambient temperature of 30°C (86°F).
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-3">Copper Conductor Ampacity (Table 310.16)</h3>
              <div className="overflow-x-auto my-6">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-white/20">
                      <th className="text-left py-3 px-4 text-white/60">AWG/kcmil</th>
                      <th className="text-left py-3 px-4 text-white/60">60°C (TW, UF)</th>
                      <th className="text-left py-3 px-4 text-white/60">75°C (THW, THWN)</th>
                      <th className="text-left py-3 px-4 text-white/60">90°C (THHN, XHHW)</th>
                    </tr>
                  </thead>
                  <tbody className="text-white/80">
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">14</td>
                      <td className="py-3 px-4">15</td>
                      <td className="py-3 px-4">20</td>
                      <td className="py-3 px-4">25</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">12</td>
                      <td className="py-3 px-4">20</td>
                      <td className="py-3 px-4">25</td>
                      <td className="py-3 px-4">30</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">10</td>
                      <td className="py-3 px-4">30</td>
                      <td className="py-3 px-4">35</td>
                      <td className="py-3 px-4">40</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">8</td>
                      <td className="py-3 px-4">40</td>
                      <td className="py-3 px-4">50</td>
                      <td className="py-3 px-4">55</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">6</td>
                      <td className="py-3 px-4">55</td>
                      <td className="py-3 px-4">65</td>
                      <td className="py-3 px-4">75</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">4</td>
                      <td className="py-3 px-4">70</td>
                      <td className="py-3 px-4">85</td>
                      <td className="py-3 px-4">95</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">3</td>
                      <td className="py-3 px-4">85</td>
                      <td className="py-3 px-4">100</td>
                      <td className="py-3 px-4">115</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">2</td>
                      <td className="py-3 px-4">95</td>
                      <td className="py-3 px-4">115</td>
                      <td className="py-3 px-4">130</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">1</td>
                      <td className="py-3 px-4">110</td>
                      <td className="py-3 px-4">130</td>
                      <td className="py-3 px-4">145</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">1/0</td>
                      <td className="py-3 px-4">125</td>
                      <td className="py-3 px-4">150</td>
                      <td className="py-3 px-4">170</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">2/0</td>
                      <td className="py-3 px-4">145</td>
                      <td className="py-3 px-4">175</td>
                      <td className="py-3 px-4">195</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">3/0</td>
                      <td className="py-3 px-4">165</td>
                      <td className="py-3 px-4">200</td>
                      <td className="py-3 px-4">225</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4">4/0</td>
                      <td className="py-3 px-4">195</td>
                      <td className="py-3 px-4">230</td>
                      <td className="py-3 px-4">260</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-white/60 text-sm">
                Values from NEC Table 310.16 based on 30°C ambient temperature, not more than 3 current-carrying conductors in raceway.
              </p>
            </section>

            <section id="temperature-rating" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Conductor Temperature Ratings</h2>
              <p className="text-white/80 mb-4">
                Conductor insulation is rated for maximum operating temperature. Common insulation types include:
              </p>
              <div className="grid md:grid-cols-3 gap-4 my-6">
                <div className="bg-white/5 rounded-xl p-6">
                  <h3 className="font-semibold text-blue-400 mb-2">60°C (140°F)</h3>
                  <p className="text-white/60 text-sm">TW, UF</p>
                  <p className="text-white/70 text-sm mt-2">Lowest ampacity, limited use in modern installations</p>
                </div>
                <div className="bg-white/5 rounded-xl p-6">
                  <h3 className="font-semibold text-green-400 mb-2">75°C (167°F)</h3>
                  <p className="text-white/60 text-sm">THW, THWN, XHHW (wet), USE</p>
                  <p className="text-white/70 text-sm mt-2">Standard for most terminations. Use this column when terminations are 75°C rated.</p>
                </div>
                <div className="bg-white/5 rounded-xl p-6">
                  <h3 className="font-semibold text-orange-400 mb-2">90°C (194°F)</h3>
                  <p className="text-white/60 text-sm">THHN, THWN-2, XHHW-2</p>
                  <p className="text-white/70 text-sm mt-2">Highest ampacity. Used for derating calculations, but terminations often limit to 75°C.</p>
                </div>
              </div>

              <div className="bg-orange-900/30 rounded-xl p-6 my-6">
                <h3 className="font-semibold text-orange-400 mb-2">Important: The Termination Rule</h3>
                <p className="text-white/70">
                  Per NEC 110.14(C), conductor ampacity must be selected based on the <strong>termination temperature rating</strong>. Most equipment is rated 60°C or 75°C. Even with 90°C wire, you typically use the 75°C column for final sizing. The 90°C rating is used for calculating derating factors.
                </p>
              </div>
            </section>

            <section id="temperature-correction" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Temperature Correction Factors</h2>
              <p className="text-white/80 mb-4">
                When ambient temperature exceeds 30°C (86°F), ampacity must be reduced using correction factors from NEC Table 310.15(B)(1):
              </p>
              <div className="overflow-x-auto my-6">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-white/20">
                      <th className="text-left py-3 px-4 text-white/60">Ambient Temp (°C)</th>
                      <th className="text-left py-3 px-4 text-white/60">60°C Conductor</th>
                      <th className="text-left py-3 px-4 text-white/60">75°C Conductor</th>
                      <th className="text-left py-3 px-4 text-white/60">90°C Conductor</th>
                    </tr>
                  </thead>
                  <tbody className="text-white/80">
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">31-35</td>
                      <td className="py-3 px-4">0.91</td>
                      <td className="py-3 px-4">0.94</td>
                      <td className="py-3 px-4">0.96</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">36-40</td>
                      <td className="py-3 px-4">0.82</td>
                      <td className="py-3 px-4">0.88</td>
                      <td className="py-3 px-4">0.91</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">41-45</td>
                      <td className="py-3 px-4">0.71</td>
                      <td className="py-3 px-4">0.82</td>
                      <td className="py-3 px-4">0.87</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">46-50</td>
                      <td className="py-3 px-4">0.58</td>
                      <td className="py-3 px-4">0.75</td>
                      <td className="py-3 px-4">0.82</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4">51-55</td>
                      <td className="py-3 px-4">0.41</td>
                      <td className="py-3 px-4">0.67</td>
                      <td className="py-3 px-4">0.76</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-white/70">
                <strong>Example:</strong> 6 AWG THHN copper in 40°C ambient: 75A × 0.91 = 68.25A adjusted ampacity
              </p>
            </section>

            <section id="conduit-derating" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Conduit Fill Derating</h2>
              <p className="text-white/80 mb-4">
                When more than 3 current-carrying conductors are in a raceway, ampacity must be reduced per NEC Table 310.15(C)(1):
              </p>
              <div className="overflow-x-auto my-6">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-white/20">
                      <th className="text-left py-3 px-4 text-white/60">Number of Current-Carrying Conductors</th>
                      <th className="text-left py-3 px-4 text-white/60">Adjustment Factor</th>
                    </tr>
                  </thead>
                  <tbody className="text-white/80">
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">4-6</td>
                      <td className="py-3 px-4 font-mono">0.80 (80%)</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">7-9</td>
                      <td className="py-3 px-4 font-mono">0.70 (70%)</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">10-20</td>
                      <td className="py-3 px-4 font-mono">0.50 (50%)</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">21-30</td>
                      <td className="py-3 px-4 font-mono">0.45 (45%)</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4">31-40</td>
                      <td className="py-3 px-4 font-mono">0.40 (40%)</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="bg-purple-900/30 rounded-xl p-6 my-6">
                <h3 className="font-semibold text-purple-400 mb-2">What Counts as Current-Carrying?</h3>
                <ul className="text-white/70 text-sm space-y-1">
                  <li>• Equipment grounding conductors do NOT count</li>
                  <li>• Neutral conductors carrying only unbalanced load do NOT count</li>
                  <li>• Neutrals in 4-wire, 3-phase wye systems with nonlinear loads DO count</li>
                  <li>• Control circuit conductors may or may not count depending on load</li>
                </ul>
              </div>
            </section>

            <section id="sizing-steps" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Step-by-Step Wire Sizing Process</h2>
              <p className="text-white/80 mb-4">
                Follow these steps to properly size conductors:
              </p>
              <div className="space-y-4 my-6">
                <div className="bg-white/5 rounded-xl p-4">
                  <p className="text-purple-400 font-semibold">Step 1: Determine the load current</p>
                  <p className="text-white/60 text-sm mt-1">Calculate or measure the circuit load in amperes.</p>
                </div>
                <div className="bg-white/5 rounded-xl p-4">
                  <p className="text-purple-400 font-semibold">Step 2: Identify installation conditions</p>
                  <p className="text-white/60 text-sm mt-1">Ambient temperature, number of conductors in raceway, insulation type, termination ratings.</p>
                </div>
                <div className="bg-white/5 rounded-xl p-4">
                  <p className="text-purple-400 font-semibold">Step 3: Apply derating factors (if needed)</p>
                  <p className="text-white/60 text-sm mt-1">Multiply base ampacity by temperature correction × conduit fill factor.</p>
                </div>
                <div className="bg-white/5 rounded-xl p-4">
                  <p className="text-purple-400 font-semibold">Step 4: Select conductor size</p>
                  <p className="text-white/60 text-sm mt-1">Choose wire with adjusted ampacity ≥ load current.</p>
                </div>
                <div className="bg-white/5 rounded-xl p-4">
                  <p className="text-purple-400 font-semibold">Step 5: Verify voltage drop</p>
                  <p className="text-white/60 text-sm mt-1">Check that voltage drop is within acceptable limits (3% branch, 5% total).</p>
                </div>
                <div className="bg-white/5 rounded-xl p-4">
                  <p className="text-purple-400 font-semibold">Step 6: Verify overcurrent protection</p>
                  <p className="text-white/60 text-sm mt-1">Ensure conductor is protected by appropriately sized breaker/fuse.</p>
                </div>
              </div>
            </section>

            <section id="common-mistakes" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Common Wire Sizing Mistakes</h2>
              <div className="space-y-4 my-6">
                <div className="bg-red-900/20 border border-red-500/30 rounded-xl p-6">
                  <h3 className="font-semibold text-red-400 mb-2">Using 90°C column without considering terminations</h3>
                  <p className="text-white/60 text-sm">Most equipment is rated 75°C. Using 90°C ampacity when terminations are 75°C rated violates NEC 110.14(C).</p>
                </div>
                <div className="bg-red-900/20 border border-red-500/30 rounded-xl p-6">
                  <h3 className="font-semibold text-red-400 mb-2">Forgetting temperature correction in hot environments</h3>
                  <p className="text-white/60 text-sm">Attics, rooftops, and industrial spaces often exceed 30°C. Always apply correction factors.</p>
                </div>
                <div className="bg-red-900/20 border border-red-500/30 rounded-xl p-6">
                  <h3 className="font-semibold text-red-400 mb-2">Ignoring conduit fill derating</h3>
                  <p className="text-white/60 text-sm">Multiple circuits in one conduit must be derated. This is often overlooked.</p>
                </div>
                <div className="bg-red-900/20 border border-red-500/30 rounded-xl p-6">
                  <h3 className="font-semibold text-red-400 mb-2">Not checking voltage drop on long runs</h3>
                  <p className="text-white/60 text-sm">Wire may have adequate ampacity but excessive voltage drop. Always verify both.</p>
                </div>
              </div>
            </section>

            {/* CTA Section */}
            <section className="bg-gradient-to-r from-purple-900/30 to-cyan-900/30 rounded-2xl p-8 my-12">
              <h2 className="text-2xl font-display font-bold mb-4 text-center">
                Size Conductors Instantly
              </h2>
              <p className="text-white/70 mb-6 text-center">
                Ampora's wire sizing calculator handles all NEC tables, temperature correction, and derating factors automatically. Get the right wire size in seconds.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link
                  href="/calculators/wire-sizing"
                  className="px-6 py-3 bg-cyan-600 text-white font-semibold rounded-full hover:bg-cyan-500 transition-colors text-center"
                >
                  Use Web Calculator
                </Link>
                <a
                  href="https://apps.apple.com/us/app/ampora/id6753693522"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-white text-black font-semibold rounded-full hover:bg-white/90 transition-colors text-center"
                >
                  Download App Free
                </a>
              </div>
            </section>

            {/* Related Articles */}
            <section className="mt-12">
              <h2 className="text-2xl font-display font-bold mb-6">Related Articles</h2>
              <div className="grid md:grid-cols-2 gap-4">
                <Link href="/blog/how-to-calculate-voltage-drop" className="bg-white/5 hover:bg-white/10 rounded-xl p-6 transition-colors">
                  <span className="text-cyan-400 text-sm">Calculations</span>
                  <h3 className="font-semibold mt-2">How to Calculate Voltage Drop</h3>
                </Link>
                <Link href="/blog/nec-article-210-branch-circuits-guide" className="bg-white/5 hover:bg-white/10 rounded-xl p-6 transition-colors">
                  <span className="text-purple-400 text-sm">NEC Code</span>
                  <h3 className="font-semibold mt-2">NEC Article 210: Branch Circuits Guide</h3>
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
