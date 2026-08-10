import { Metadata } from "next";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import { BlogPostingJsonLd, BreadcrumbJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Feeder Sizing Calculations: NEC Conductor & Overcurrent Requirements",
  description: "Complete guide to feeder sizing calculations per NEC Article 215. Learn feeder conductor sizing, demand factor application, overcurrent protection, voltage drop considerations for feeders, neutral conductor sizing, feeder tap rules (10-foot and 25-foot), grounding conductor sizing, and step-by-step sizing examples with common code violations.",
  keywords: [
    "feeder sizing calculations",
    "feeder conductor sizing",
    "nec feeder requirements",
    "feeder overcurrent protection",
    "feeder demand factors",
    "feeder voltage drop",
    "feeder neutral sizing",
    "feeder tap rules",
    "sub feeder sizing",
    "feeder ampacity"
  ],
  alternates: {
    canonical: "https://amporalabs.com/blog/feeder-sizing-calculations-nec",
  },
  openGraph: {
    title: "Feeder Sizing Calculations: NEC Conductor & Overcurrent Requirements - Ampora",
    description: "Master feeder sizing calculations with this comprehensive NEC guide covering conductor sizing, demand factors, overcurrent protection, voltage drop, neutral sizing, and tap rules.",
    url: "https://amporalabs.com/blog/feeder-sizing-calculations-nec",
    type: "article",
    publishedTime: "2026-03-04",
  },
};

function HeroIllustration() {
  return (
    <svg viewBox="0 0 400 180" className="w-full h-40 md:h-48" aria-label="Feeder circuit diagram from main panel to sub-panel with conductors and overcurrent protection">
      {/* Background */}
      <rect x="10" y="10" width="380" height="160" rx="4" fill="#1f2937" stroke="#374151" strokeWidth="1"/>

      {/* Main Panel */}
      <rect x="25" y="30" width="80" height="120" rx="3" fill="#1e3a5f" stroke="#3b82f6" strokeWidth="1.5"/>
      <text x="65" y="22" textAnchor="middle" fill="#60a5fa" fontSize="7" fontWeight="bold">MAIN PANEL</text>
      <text x="65" y="50" textAnchor="middle" fill="#93c5fd" fontSize="6">200A</text>
      <text x="65" y="60" textAnchor="middle" fill="#93c5fd" fontSize="5">Service</text>

      {/* Main Breaker Symbol */}
      <rect x="50" y="68" width="30" height="14" rx="2" fill="#1e40af" stroke="#60a5fa" strokeWidth="1"/>
      <text x="65" y="78" textAnchor="middle" fill="#fbbf24" fontSize="6" fontWeight="bold">200A</text>

      {/* Bus Bars in Main Panel */}
      <line x1="55" y1="82" x2="55" y2="105" stroke="#ef4444" strokeWidth="2"/>
      <line x1="65" y1="82" x2="65" y2="105" stroke="#111827" strokeWidth="2"/>
      <line x1="75" y1="82" x2="75" y2="105" stroke="#3b82f6" strokeWidth="2"/>
      <text x="43" y="95" fill="#ef4444" fontSize="5">A</text>
      <text x="65" y="95" textAnchor="middle" fill="#9ca3af" fontSize="5">B</text>
      <text x="82" y="95" fill="#3b82f6" fontSize="5">C</text>

      {/* Feeder Breaker */}
      <rect x="50" y="108" width="30" height="14" rx="2" fill="#7c2d12" stroke="#f97316" strokeWidth="1"/>
      <text x="65" y="118" textAnchor="middle" fill="#fbbf24" fontSize="6" fontWeight="bold">100A</text>

      {/* Feeder Label */}
      <text x="65" y="136" textAnchor="middle" fill="#f97316" fontSize="5" fontWeight="bold">FEEDER</text>
      <text x="65" y="144" textAnchor="middle" fill="#f97316" fontSize="5" fontWeight="bold">OCPD</text>

      {/* Feeder Conductors */}
      <line x1="105" y1="72" x2="250" y2="72" stroke="#ef4444" strokeWidth="2" strokeDasharray="6,3"/>
      <line x1="105" y1="82" x2="250" y2="82" stroke="#111827" strokeWidth="2" strokeDasharray="6,3"/>
      <line x1="105" y1="92" x2="250" y2="92" stroke="#3b82f6" strokeWidth="2" strokeDasharray="6,3"/>
      <line x1="105" y1="102" x2="250" y2="102" stroke="#22c55e" strokeWidth="1.5" strokeDasharray="4,4"/>

      {/* Conductor Labels */}
      <text x="178" y="66" textAnchor="middle" fill="#ef4444" fontSize="5">Phase A - #3 AWG THHN</text>
      <text x="178" y="110" textAnchor="middle" fill="#22c55e" fontSize="5">EGC - #8 AWG Cu</text>

      {/* Feeder Length */}
      <line x1="120" y1="125" x2="235" y2="125" stroke="#9ca3af" strokeWidth="0.5"/>
      <line x1="120" y1="122" x2="120" y2="128" stroke="#9ca3af" strokeWidth="0.5"/>
      <line x1="235" y1="122" x2="235" y2="128" stroke="#9ca3af" strokeWidth="0.5"/>
      <text x="178" y="135" textAnchor="middle" fill="#9ca3af" fontSize="5">75 ft feeder run</text>

      {/* Voltage Drop Label */}
      <rect x="148" y="140" width="60" height="16" rx="2" fill="#fbbf24" fillOpacity="0.15" stroke="#fbbf24" strokeWidth="0.5"/>
      <text x="178" y="151" textAnchor="middle" fill="#fbbf24" fontSize="5" fontWeight="bold">VD &le; 3%</text>

      {/* Sub-Panel */}
      <rect x="255" y="30" width="80" height="120" rx="3" fill="#1e3a5f" stroke="#3b82f6" strokeWidth="1.5"/>
      <text x="295" y="22" textAnchor="middle" fill="#60a5fa" fontSize="7" fontWeight="bold">SUB-PANEL</text>
      <text x="295" y="50" textAnchor="middle" fill="#93c5fd" fontSize="6">100A</text>
      <text x="295" y="60" textAnchor="middle" fill="#93c5fd" fontSize="5">MLO</text>

      {/* Sub-Panel Bus Bars */}
      <rect x="265" y="68" width="60" height="14" rx="2" fill="#1e3a5f" stroke="#60a5fa" strokeWidth="1"/>
      <text x="295" y="78" textAnchor="middle" fill="#93c5fd" fontSize="5">MAIN LUGS</text>

      {/* Sub-Panel Branch Circuits */}
      <line x1="275" y1="82" x2="275" y2="140" stroke="#ef4444" strokeWidth="1"/>
      <line x1="285" y1="82" x2="285" y2="140" stroke="#111827" strokeWidth="1"/>
      <line x1="295" y1="82" x2="295" y2="140" stroke="#3b82f6" strokeWidth="1"/>

      {/* Branch Breakers */}
      <rect x="270" y="95" width="20" height="10" rx="1" fill="#374151" stroke="#6b7280" strokeWidth="0.5"/>
      <text x="280" y="103" textAnchor="middle" fill="#d1d5db" fontSize="4">20A</text>
      <rect x="270" y="110" width="20" height="10" rx="1" fill="#374151" stroke="#6b7280" strokeWidth="0.5"/>
      <text x="280" y="118" textAnchor="middle" fill="#d1d5db" fontSize="4">20A</text>
      <rect x="270" y="125" width="20" height="10" rx="1" fill="#374151" stroke="#6b7280" strokeWidth="0.5"/>
      <text x="280" y="133" textAnchor="middle" fill="#d1d5db" fontSize="4">30A</text>

      <rect x="300" y="95" width="20" height="10" rx="1" fill="#374151" stroke="#6b7280" strokeWidth="0.5"/>
      <text x="310" y="103" textAnchor="middle" fill="#d1d5db" fontSize="4">20A</text>
      <rect x="300" y="110" width="20" height="10" rx="1" fill="#374151" stroke="#6b7280" strokeWidth="0.5"/>
      <text x="310" y="118" textAnchor="middle" fill="#d1d5db" fontSize="4">15A</text>
      <rect x="300" y="125" width="20" height="10" rx="1" fill="#374151" stroke="#6b7280" strokeWidth="0.5"/>
      <text x="310" y="133" textAnchor="middle" fill="#d1d5db" fontSize="4">50A</text>

      {/* Grounding Bar */}
      <rect x="258" y="142" width="74" height="5" rx="1" fill="#22c55e" fillOpacity="0.3" stroke="#22c55e" strokeWidth="0.5"/>
      <text x="295" y="155" textAnchor="middle" fill="#22c55e" fontSize="4">Ground/Neutral Bars</text>

      {/* Info Box */}
      <rect x="345" y="30" width="40" height="120" rx="3" fill="#f97316" fillOpacity="0.1" stroke="#f97316" strokeWidth="0.5"/>
      <text x="365" y="45" textAnchor="middle" fill="#f97316" fontSize="5" fontWeight="bold">NEC</text>
      <text x="365" y="55" textAnchor="middle" fill="#f97316" fontSize="5" fontWeight="bold">215</text>
      <text x="365" y="70" textAnchor="middle" fill="#9ca3af" fontSize="4">Feeder</text>
      <text x="365" y="78" textAnchor="middle" fill="#9ca3af" fontSize="4">Sizing</text>
      <text x="365" y="92" textAnchor="middle" fill="#9ca3af" fontSize="4">Demand</text>
      <text x="365" y="100" textAnchor="middle" fill="#9ca3af" fontSize="4">Factors</text>
      <text x="365" y="114" textAnchor="middle" fill="#9ca3af" fontSize="4">Voltage</text>
      <text x="365" y="122" textAnchor="middle" fill="#9ca3af" fontSize="4">Drop</text>
      <text x="365" y="136" textAnchor="middle" fill="#9ca3af" fontSize="4">Tap</text>
      <text x="365" y="144" textAnchor="middle" fill="#9ca3af" fontSize="4">Rules</text>
    </svg>
  );
}

export default function FeederSizingCalculationsNecPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navigation />
      <div className="pt-20">
        <BreadcrumbJsonLd
          items={[
            { name: "Home", url: "https://amporalabs.com" },
            { name: "Blog", url: "https://amporalabs.com/blog" },
            { name: "Feeder Sizing Calculations", url: "https://amporalabs.com/blog/feeder-sizing-calculations-nec" },
          ]}
        />
        <BlogPostingJsonLd
          headline="Feeder Sizing Calculations: NEC Conductor & Overcurrent Requirements"
          description="Complete guide to feeder sizing calculations per NEC Article 215 covering conductor sizing, demand factors, overcurrent protection, voltage drop, neutral sizing, tap rules, and grounding conductor requirements."
          datePublished="2026-03-04"
          dateModified="2026-03-04"
          url="https://amporalabs.com/blog/feeder-sizing-calculations-nec"
          wordCount={4800}
          keywords={["feeder sizing calculations", "NEC 215", "feeder conductor sizing", "feeder demand factors", "feeder tap rules"]}
        />

        <article className="max-w-4xl mx-auto px-6 py-12">
          {/* Breadcrumb */}
          <nav className="text-sm text-white/60 mb-8">
            <Link href="/" className="hover:text-white">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/blog" className="hover:text-white">Blog</Link>
            <span className="mx-2">/</span>
            <span className="text-white">Feeder Sizing Calculations</span>
          </nav>

          {/* Article Header */}
          <header className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <span className="px-3 py-1 bg-amber-600/20 text-amber-300 text-sm font-medium rounded-full">
                Calculations
              </span>
              <span className="text-white/40 text-sm">18 min read</span>
              <span className="text-white/40 text-sm">March 4, 2026</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6 leading-tight">
              Feeder Sizing Calculations: NEC Conductor &amp; Overcurrent Requirements
            </h1>
            <p className="text-xl text-white/70">
              Properly sizing feeder conductors is one of the most critical calculations an electrician performs. Undersized feeders create fire hazards and code violations, while oversized feeders waste money on unnecessary copper or aluminum. This guide walks through every step of feeder sizing per NEC Article 215, including demand factors, overcurrent protection, voltage drop, neutral sizing, tap rules, and grounding conductor requirements.
            </p>
          </header>

          <div className="mb-12 bg-gradient-to-br from-amber-900/20 to-cyan-900/20 rounded-2xl p-6 border border-white/10">
            <HeroIllustration />
          </div>

          {/* Table of Contents */}
          <div className="bg-white/5 rounded-2xl p-6 mb-12">
            <h2 className="font-display font-bold mb-4">In This Guide</h2>
            <ul className="space-y-2 text-white/70">
              <li><a href="#what-is-a-feeder" className="hover:text-purple-400">What Is a Feeder? NEC Definition</a></li>
              <li><a href="#conductor-sizing" className="hover:text-purple-400">Feeder Conductor Sizing per NEC 215</a></li>
              <li><a href="#demand-factors" className="hover:text-purple-400">Applying Demand Factors to Feeder Loads</a></li>
              <li><a href="#overcurrent-protection" className="hover:text-purple-400">Overcurrent Protection for Feeders</a></li>
              <li><a href="#voltage-drop" className="hover:text-purple-400">Voltage Drop Considerations for Feeders</a></li>
              <li><a href="#neutral-sizing" className="hover:text-purple-400">Neutral Conductor Sizing</a></li>
              <li><a href="#tap-rules" className="hover:text-purple-400">Feeder Tap Rules (10-Foot and 25-Foot)</a></li>
              <li><a href="#grounding-conductor" className="hover:text-purple-400">Grounding Conductor for Feeders</a></li>
              <li><a href="#sizing-example" className="hover:text-purple-400">Step-by-Step Feeder Sizing Example</a></li>
              <li><a href="#common-violations" className="hover:text-purple-400">Common Feeder Sizing Violations</a></li>
            </ul>
          </div>

          {/* Article Content */}
          <div className="prose prose-invert prose-lg max-w-none">

            <section id="what-is-a-feeder" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">What Is a Feeder? NEC Definition</h2>
              <p className="text-white/80 mb-4">
                Per <strong>NEC Article 100</strong>, a <strong>feeder</strong> is defined as all circuit conductors between the service equipment, the source of a separately derived system, or other power supply source and the final branch-circuit overcurrent device. In simpler terms, a feeder is the set of conductors that carries power from the main panel (or another source) to a sub-panel or distribution point where branch circuits originate.
              </p>
              <p className="text-white/80 mb-4">
                Understanding this distinction is critical because feeders and branch circuits have different sizing rules, different overcurrent protection requirements, and different code articles governing them. <strong>NEC Article 215</strong> covers feeders specifically, while Article 210 covers branch circuits.
              </p>

              <div className="grid md:grid-cols-2 gap-6 my-6">
                <div className="bg-amber-900/30 rounded-xl p-6">
                  <h3 className="font-semibold text-amber-400 mb-3">Feeder Characteristics</h3>
                  <ul className="text-white/60 text-sm space-y-1">
                    <li><strong>Origin:</strong> Service equipment, transformer, or generator</li>
                    <li><strong>Termination:</strong> Sub-panel or distribution panelboard</li>
                    <li><strong>Contains:</strong> Phase conductors, neutral, and EGC</li>
                    <li><strong>Governed by:</strong> NEC Article 215</li>
                    <li><strong>OCPD:</strong> Sized per calculated load with demand factors</li>
                  </ul>
                </div>
                <div className="bg-blue-900/30 rounded-xl p-6">
                  <h3 className="font-semibold text-blue-400 mb-3">Branch Circuit Characteristics</h3>
                  <ul className="text-white/60 text-sm space-y-1">
                    <li><strong>Origin:</strong> Final overcurrent device (breaker/fuse)</li>
                    <li><strong>Termination:</strong> Outlets, receptacles, or equipment</li>
                    <li><strong>Contains:</strong> Phase conductors, neutral, and EGC</li>
                    <li><strong>Governed by:</strong> NEC Article 210</li>
                    <li><strong>OCPD:</strong> Sized per circuit rating (15A, 20A, etc.)</li>
                  </ul>
                </div>
              </div>

              <div className="bg-white/5 rounded-xl p-6 my-6">
                <h4 className="font-semibold text-cyan-400 mb-3">Common Feeder Applications</h4>
                <ul className="text-white/70 space-y-2 text-sm">
                  <li><strong>Residential:</strong> Main panel to detached garage sub-panel, main panel to basement sub-panel, meter to main panel in some configurations</li>
                  <li><strong>Commercial:</strong> Main switchboard to floor distribution panels, main to mechanical room panels, main to lighting panels</li>
                  <li><strong>Industrial:</strong> Main switchgear to MCC (motor control center), switchgear to distribution transformers, switchgear to process panels</li>
                </ul>
              </div>
            </section>

            <section id="conductor-sizing" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Feeder Conductor Sizing per NEC 215</h2>
              <p className="text-white/80 mb-4">
                <strong>NEC 215.2</strong> requires that feeder conductors have an ampacity not less than the load to be served, as determined by the load calculations in <strong>Article 220</strong>. The conductor must be large enough to carry the calculated load after applying all applicable demand factors, and its ampacity must be evaluated considering the installation conditions.
              </p>

              <h3 className="text-xl font-display font-semibold mb-3 text-cyan-400">Key Sizing Factors</h3>
              <div className="space-y-4 my-6">
                <div className="bg-white/5 rounded-xl p-4 flex items-start gap-4">
                  <span className="bg-amber-600 text-white text-sm font-bold px-3 py-1 rounded-full">1</span>
                  <div>
                    <p className="font-semibold text-white">Calculate the Total Connected Load</p>
                    <p className="text-white/60 text-sm">Sum all branch circuit loads that the feeder will supply. Include general lighting, receptacles, appliances, motors, HVAC equipment, and any special loads. Use the connected load values before applying demand factors.</p>
                  </div>
                </div>
                <div className="bg-white/5 rounded-xl p-4 flex items-start gap-4">
                  <span className="bg-amber-600 text-white text-sm font-bold px-3 py-1 rounded-full">2</span>
                  <div>
                    <p className="font-semibold text-white">Apply Demand Factors (NEC Article 220)</p>
                    <p className="text-white/60 text-sm">Demand factors account for the fact that not all loads operate simultaneously. Apply the appropriate demand factors from NEC Article 220 to reduce the total connected load to the calculated demand load.</p>
                  </div>
                </div>
                <div className="bg-white/5 rounded-xl p-4 flex items-start gap-4">
                  <span className="bg-amber-600 text-white text-sm font-bold px-3 py-1 rounded-full">3</span>
                  <div>
                    <p className="font-semibold text-white">Select Conductor Size from Ampacity Tables</p>
                    <p className="text-white/60 text-sm">Using NEC Table 310.16 (or 310.15(B)(16) in older editions), select a conductor with an ampacity equal to or greater than the calculated demand load. Use the 75&deg;C column for most terminations per 110.14(C).</p>
                  </div>
                </div>
                <div className="bg-white/5 rounded-xl p-4 flex items-start gap-4">
                  <span className="bg-amber-600 text-white text-sm font-bold px-3 py-1 rounded-full">4</span>
                  <div>
                    <p className="font-semibold text-white">Apply Derating Factors</p>
                    <p className="text-white/60 text-sm">Adjust the ampacity for ambient temperature (NEC Table 310.15(B)(1)) and conduit fill with more than 3 current-carrying conductors (NEC Table 310.15(C)(1)). The derated ampacity must still meet or exceed the load. See our <Link href="/blog/derating-factors-conductor-ampacity" className="text-purple-400 hover:text-purple-300">conductor derating factors guide</Link> for detailed procedures.</p>
                  </div>
                </div>
                <div className="bg-white/5 rounded-xl p-4 flex items-start gap-4">
                  <span className="bg-amber-600 text-white text-sm font-bold px-3 py-1 rounded-full">5</span>
                  <div>
                    <p className="font-semibold text-white">Verify Voltage Drop</p>
                    <p className="text-white/60 text-sm">Check that the voltage drop does not exceed recommended limits. The NEC recommends 3% for feeders and 5% total from service to final outlet. Upsize the conductor if necessary to meet voltage drop requirements.</p>
                  </div>
                </div>
              </div>

              <h3 className="text-xl font-display font-semibold mb-3 text-cyan-400">Common Feeder Conductor Sizes (Copper, 75&deg;C)</h3>
              <div className="overflow-x-auto my-6">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-white/20">
                      <th className="text-left py-3 px-4 text-white/60">Conductor Size (AWG/kcmil)</th>
                      <th className="text-left py-3 px-4 text-white/60">Ampacity (75&deg;C Cu)</th>
                      <th className="text-left py-3 px-4 text-white/60">Typical Feeder Application</th>
                    </tr>
                  </thead>
                  <tbody className="text-white/80">
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-mono">#8 AWG</td>
                      <td className="py-3 px-4 font-mono text-amber-400">50A</td>
                      <td className="py-3 px-4 text-white/60">Small sub-panel, garage feeder</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-mono">#6 AWG</td>
                      <td className="py-3 px-4 font-mono text-amber-400">65A</td>
                      <td className="py-3 px-4 text-white/60">60A sub-panel feeder</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-mono">#4 AWG</td>
                      <td className="py-3 px-4 font-mono text-amber-400">85A</td>
                      <td className="py-3 px-4 text-white/60">Medium residential sub-panel</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-mono">#3 AWG</td>
                      <td className="py-3 px-4 font-mono text-amber-400">100A</td>
                      <td className="py-3 px-4 text-white/60">100A sub-panel feeder</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-mono">#1 AWG</td>
                      <td className="py-3 px-4 font-mono text-amber-400">130A</td>
                      <td className="py-3 px-4 text-white/60">125A panel, medium commercial</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-mono">1/0 AWG</td>
                      <td className="py-3 px-4 font-mono text-amber-400">150A</td>
                      <td className="py-3 px-4 text-white/60">150A commercial feeder</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-mono">3/0 AWG</td>
                      <td className="py-3 px-4 font-mono text-amber-400">200A</td>
                      <td className="py-3 px-4 text-white/60">200A service/feeder</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-mono">250 kcmil</td>
                      <td className="py-3 px-4 font-mono text-amber-400">255A</td>
                      <td className="py-3 px-4 text-white/60">Large commercial feeder</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="bg-amber-900/30 rounded-xl p-6 my-6 border border-amber-500/30">
                <h4 className="font-semibold text-amber-400 mb-3">NEC 215.2(A)(1) &mdash; Minimum Feeder Conductor Size</h4>
                <p className="text-white/70 text-sm">
                  Feeder conductor ampacity must not be less than the non-continuous load plus 125% of the continuous load. A <strong>continuous load</strong> is any load expected to operate for 3 hours or more (e.g., commercial lighting). For a feeder supplying 40A of continuous load and 20A of non-continuous load: minimum ampacity = (40A &times; 1.25) + 20A = <strong>70A</strong>.
                </p>
              </div>
            </section>

            <section id="demand-factors" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Applying Demand Factors to Feeder Loads</h2>
              <p className="text-white/80 mb-4">
                <strong>Demand factors</strong> are multipliers that reduce the total connected load to account for the reality that not all loads operate at the same time. NEC Article 220 provides specific demand factors for different load types. Applying these correctly is essential for economical feeder sizing without oversizing conductors. For a detailed breakdown, see our <Link href="/blog/demand-factor-calculations-nec" className="text-purple-400 hover:text-purple-300">demand factor calculations guide</Link>.
              </p>

              <h3 className="text-xl font-display font-semibold mb-3 text-cyan-400">General Lighting Demand Factors (Table 220.42)</h3>
              <div className="overflow-x-auto my-6">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-white/20">
                      <th className="text-left py-3 px-4 text-white/60">Type of Occupancy</th>
                      <th className="text-left py-3 px-4 text-white/60">Portion of Load (VA)</th>
                      <th className="text-left py-3 px-4 text-white/60">Demand Factor (%)</th>
                    </tr>
                  </thead>
                  <tbody className="text-white/80">
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4" rowSpan={3}>Dwelling Units</td>
                      <td className="py-3 px-4 font-mono">First 3,000 VA</td>
                      <td className="py-3 px-4 font-mono text-amber-400">100%</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-mono">3,001 to 120,000 VA</td>
                      <td className="py-3 px-4 font-mono text-amber-400">35%</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-mono">Over 120,000 VA</td>
                      <td className="py-3 px-4 font-mono text-amber-400">25%</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">Hospitals</td>
                      <td className="py-3 px-4 font-mono">First 50,000 VA at 40%, remainder</td>
                      <td className="py-3 px-4 font-mono text-amber-400">20%</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4">Hotels, Motels</td>
                      <td className="py-3 px-4 font-mono">First 20,000 VA at 50%, remainder</td>
                      <td className="py-3 px-4 font-mono text-amber-400">40%</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h3 className="text-xl font-display font-semibold mb-3 text-cyan-400">Key Demand Factor Categories</h3>
              <div className="grid md:grid-cols-2 gap-4 my-6">
                <div className="bg-white/5 rounded-xl p-4 border border-amber-500/20">
                  <p className="font-semibold text-amber-400 mb-1">General Lighting (Table 220.42)</p>
                  <p className="text-white/60 text-sm">Applies to the general lighting and receptacle load calculated using Table 220.12 (VA per square foot). Demand factors vary by occupancy type.</p>
                </div>
                <div className="bg-white/5 rounded-xl p-4 border border-amber-500/20">
                  <p className="font-semibold text-amber-400 mb-1">Small Appliances &amp; Laundry (220.52/220.53)</p>
                  <p className="text-white/60 text-sm">Dwelling units: 1,500 VA per small-appliance circuit, 1,500 VA for laundry. These are added to the general lighting load before applying demand factors from Table 220.42.</p>
                </div>
                <div className="bg-white/5 rounded-xl p-4 border border-amber-500/20">
                  <p className="font-semibold text-amber-400 mb-1">Cooking Equipment (Table 220.55)</p>
                  <p className="text-white/60 text-sm">Ranges, cooktops, and ovens in dwellings have significant demand factors. A single 12 kW range demands only 8 kW. Multiple ranges reduce further per the table.</p>
                </div>
                <div className="bg-white/5 rounded-xl p-4 border border-amber-500/20">
                  <p className="font-semibold text-amber-400 mb-1">Dryers (Table 220.54)</p>
                  <p className="text-white/60 text-sm">Household clothes dryers: use 5,000 VA or the nameplate rating, whichever is larger, for each dryer. Demand factors apply when serving multiple dryers.</p>
                </div>
                <div className="bg-white/5 rounded-xl p-4 border border-amber-500/20">
                  <p className="font-semibold text-amber-400 mb-1">Heating &amp; A/C (220.60)</p>
                  <p className="text-white/60 text-sm">The larger of the heating or cooling load is used &mdash; not both &mdash; since they do not operate simultaneously. This is the <strong>non-coincident load</strong> rule.</p>
                </div>
                <div className="bg-white/5 rounded-xl p-4 border border-amber-500/20">
                  <p className="font-semibold text-amber-400 mb-1">Motors (220.50 &amp; Article 430)</p>
                  <p className="text-white/60 text-sm">The largest motor served by the feeder must have 125% of its FLC added (per 430.24), plus the sum of all other motor loads at 100% FLC.</p>
                </div>
              </div>

              <div className="bg-white/5 rounded-xl p-6 my-6">
                <h4 className="font-semibold text-white mb-3">Important: Demand Factors Only Apply to Feeders and Services</h4>
                <p className="text-white/70 text-sm">
                  Branch circuit conductors are sized for the full connected load &mdash; demand factors do <strong>not</strong> apply to individual branch circuits. Demand factors only apply when calculating the total load on a feeder or service. This is a common point of confusion and a frequent source of exam errors for electricians. For complete <Link href="/blog/residential-load-calculations" className="text-purple-400 hover:text-purple-300">residential load calculation procedures</Link>, see our dedicated guide.
                </p>
              </div>
            </section>

            <section id="overcurrent-protection" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Overcurrent Protection for Feeders</h2>
              <p className="text-white/80 mb-4">
                Feeder overcurrent protection must comply with <strong>NEC Article 240</strong>. The overcurrent protective device (OCPD) &mdash; either a circuit breaker or fuse &mdash; must be sized to protect the feeder conductors from overcurrent damage while still being able to carry the calculated load. For detailed <Link href="/blog/nec-article-240-overcurrent-protection" className="text-purple-400 hover:text-purple-300">NEC overcurrent protection requirements</Link>, see our Article 240 guide.
              </p>

              <h3 className="text-xl font-display font-semibold mb-3 text-cyan-400">General Rule: NEC 240.4</h3>
              <p className="text-white/80 mb-4">
                Conductors must be protected against overcurrent at their ampacity. The OCPD rating must not exceed the conductor ampacity. However, several important exceptions apply:
              </p>

              <div className="space-y-4 my-6">
                <div className="bg-white/5 rounded-xl p-6 border-l-4 border-amber-500">
                  <h4 className="font-semibold text-amber-400 mb-2">Standard Overcurrent Device Sizes (240.6)</h4>
                  <p className="text-white/70 text-sm">
                    Standard OCPD ratings are: 15, 20, 25, 30, 35, 40, 45, 50, 60, 70, 80, 90, 100, 110, 125, 150, 175, 200, 225, 250, 300, 350, 400, 450, 500, 600, 700, 800, 1000, 1200, 1600, 2000, 2500, 3000, 4000, 5000, and 6000 amperes.
                  </p>
                </div>
                <div className="bg-white/5 rounded-xl p-6 border-l-4 border-amber-500">
                  <h4 className="font-semibold text-amber-400 mb-2">Next Higher Standard Size (240.4(B))</h4>
                  <p className="text-white/70 text-sm">
                    Where the ampacity of a conductor does not correspond to a standard OCPD rating, the <strong>next higher standard size</strong> may be used, provided: (1) the conductors are not part of a multi-outlet branch circuit supplying receptacles, and (2) the OCPD rating does not exceed 800A. For conductors rated over 800A, the OCPD must not exceed the conductor ampacity.
                  </p>
                </div>
                <div className="bg-white/5 rounded-xl p-6 border-l-4 border-amber-500">
                  <h4 className="font-semibold text-amber-400 mb-2">Continuous Loads (215.3 &amp; 240.4(B))</h4>
                  <p className="text-white/70 text-sm">
                    For continuous loads, the OCPD must be rated at not less than <strong>125% of the continuous load</strong> plus 100% of the non-continuous load. This means both the conductor and the OCPD must be sized for the 125% factor, unless the OCPD is listed for continuous operation at 100% of its rating.
                  </p>
                </div>
              </div>

              <div className="bg-white/5 rounded-xl p-6 my-6">
                <h4 className="font-semibold text-cyan-400 mb-3">Feeder OCPD Sizing Example</h4>
                <p className="text-white/70 mb-3 text-sm">A feeder supplies 60A of continuous load and 25A of non-continuous load:</p>
                <div className="bg-black/30 rounded-lg p-4 font-mono text-sm text-white/80">
                  <p>Continuous load: 60A &times; 1.25 = 75A</p>
                  <p>Non-continuous load: 25A &times; 1.00 = 25A</p>
                  <p>Total minimum: 75A + 25A = <span className="text-amber-400 font-bold">100A</span></p>
                  <p className="mt-2">Minimum conductor ampacity: 100A &rarr; #3 AWG Cu (100A at 75&deg;C)</p>
                  <p>OCPD rating: 100A standard size</p>
                </div>
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

            <section id="voltage-drop" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Voltage Drop Considerations for Feeders</h2>
              <p className="text-white/80 mb-4">
                While the NEC does not <em>mandate</em> a specific voltage drop limit for feeders, <strong>NEC 215.2(A)(4) Informational Note No. 2</strong> recommends that feeder voltage drop not exceed <strong>3%</strong> and that the total voltage drop from service entrance to the furthest outlet not exceed <strong>5%</strong>. Most AHJs and engineers treat these recommendations as practical requirements. For the complete <Link href="/blog/how-to-calculate-voltage-drop" className="text-purple-400 hover:text-purple-300">voltage drop calculations formula</Link>, see our dedicated guide.
              </p>

              <h3 className="text-xl font-display font-semibold mb-3 text-cyan-400">Voltage Drop Formula</h3>
              <div className="bg-white/5 rounded-xl p-6 my-6">
                <p className="text-white/70 mb-3">For single-phase feeders:</p>
                <div className="bg-black/30 rounded-lg p-4 font-mono text-sm text-center">
                  <p className="text-amber-400 text-lg">VD = (2 &times; K &times; I &times; L) / CM</p>
                </div>
                <p className="text-white/70 mt-3 mb-3">For three-phase feeders:</p>
                <div className="bg-black/30 rounded-lg p-4 font-mono text-sm text-center">
                  <p className="text-amber-400 text-lg">VD = (1.732 &times; K &times; I &times; L) / CM</p>
                </div>
                <div className="mt-4 text-white/60 text-sm space-y-1">
                  <p><strong>VD</strong> = Voltage drop (volts)</p>
                  <p><strong>K</strong> = Resistivity constant (12.9 for copper, 21.2 for aluminum)</p>
                  <p><strong>I</strong> = Current in amperes</p>
                  <p><strong>L</strong> = One-way length of conductor in feet</p>
                  <p><strong>CM</strong> = Circular mil area of the conductor</p>
                </div>
              </div>

              <h3 className="text-xl font-display font-semibold mb-3 text-cyan-400">Practical Voltage Drop Limits</h3>
              <div className="grid md:grid-cols-3 gap-4 my-6">
                <div className="bg-green-900/20 rounded-xl p-4 border border-green-500/20 text-center">
                  <p className="text-3xl font-bold text-green-400 mb-1">3%</p>
                  <p className="text-white/60 text-sm">Maximum recommended feeder voltage drop</p>
                </div>
                <div className="bg-amber-900/20 rounded-xl p-4 border border-amber-500/20 text-center">
                  <p className="text-3xl font-bold text-amber-400 mb-1">2%</p>
                  <p className="text-white/60 text-sm">Typical feeder design target (allows 3% for branch circuits)</p>
                </div>
                <div className="bg-red-900/20 rounded-xl p-4 border border-red-500/20 text-center">
                  <p className="text-3xl font-bold text-red-400 mb-1">5%</p>
                  <p className="text-white/60 text-sm">Maximum total (service to furthest outlet)</p>
                </div>
              </div>

              <div className="bg-amber-900/30 rounded-xl p-6 my-6 border border-amber-500/30">
                <h4 className="font-semibold text-amber-400 mb-3">When to Upsize for Voltage Drop</h4>
                <p className="text-white/70 text-sm">
                  Long feeder runs frequently require conductors larger than the minimum ampacity size to keep voltage drop within limits. A 100A feeder at 120/240V over 150 feet using #3 AWG copper would have approximately 3.8% voltage drop &mdash; exceeding the 3% recommendation. Upsizing to #1 AWG copper reduces the drop to approximately 2.4%. Always check voltage drop <strong>after</strong> selecting the minimum ampacity conductor size.
                </p>
              </div>
            </section>

            <section id="neutral-sizing" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Neutral Conductor Sizing</h2>
              <p className="text-white/80 mb-4">
                The feeder neutral conductor carries the unbalanced current between the phase conductors and must be properly sized per <strong>NEC 220.61</strong>. The neutral does not always need to be the same size as the phase conductors &mdash; it can often be smaller, depending on the loads served.
              </p>

              <h3 className="text-xl font-display font-semibold mb-3 text-cyan-400">NEC 220.61 &mdash; Feeder Neutral Load</h3>
              <div className="space-y-4 my-6">
                <div className="bg-white/5 rounded-xl p-6">
                  <h4 className="font-semibold text-white mb-2">Maximum Unbalanced Load</h4>
                  <p className="text-white/70 text-sm">
                    The feeder neutral load is the <strong>maximum unbalanced load</strong> &mdash; the maximum net calculated load between the neutral and any one ungrounded conductor. For a 120/240V single-phase system, this is the load on the more heavily loaded leg.
                  </p>
                </div>
                <div className="bg-white/5 rounded-xl p-6">
                  <h4 className="font-semibold text-white mb-2">200A+ Demand Factor (220.61(B))</h4>
                  <p className="text-white/70 text-sm">
                    For the portion of the unbalanced neutral load that exceeds 200A, a <strong>70% demand factor</strong> may be applied. This recognizes that very large systems rarely have full neutral loading. Example: a 300A unbalanced load would calculate as 200A + (100A &times; 0.70) = <strong>270A neutral load</strong>.
                  </p>
                </div>
                <div className="bg-white/5 rounded-xl p-6">
                  <h4 className="font-semibold text-white mb-2">Exception: Nonlinear Loads</h4>
                  <p className="text-white/70 text-sm">
                    The 200A+ demand factor does <strong>not</strong> apply to nonlinear loads such as electronic lighting ballasts, variable-frequency drives, and computer/IT equipment that produce significant third-harmonic currents. These harmonic currents add up on the neutral rather than canceling, and the neutral can actually carry <strong>more</strong> current than the phase conductors. In these cases, the neutral must be sized at 100% of the load.
                  </p>
                </div>
              </div>

              <div className="bg-white/5 rounded-xl p-6 my-6">
                <h4 className="font-semibold text-cyan-400 mb-3">When Can the Neutral Be Smaller?</h4>
                <ul className="text-white/70 space-y-2 text-sm">
                  <li><strong>240V-only loads:</strong> Electric ranges, dryers, water heaters, and HVAC equipment that operate at 240V do not load the neutral. Only the 120V portion of multi-wire loads generates neutral current.</li>
                  <li><strong>Balanced 3-phase loads:</strong> On a balanced three-phase, four-wire system, the neutral carries zero current. Even moderately unbalanced loads produce relatively small neutral currents.</li>
                  <li><strong>NEC 250.24(C) minimum:</strong> Even when the calculated neutral load is small, the grounded conductor (neutral) of a feeder must never be smaller than the required <strong>equipment grounding conductor</strong> per Table 250.122.</li>
                </ul>
              </div>
            </section>

            <section id="tap-rules" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Feeder Tap Rules (10-Foot and 25-Foot)</h2>
              <p className="text-white/80 mb-4">
                <strong>NEC 240.21(B)</strong> permits feeder conductors to be tapped from a larger feeder <strong>without</strong> overcurrent protection at the tap point, provided specific conditions are met. These are known as the <strong>tap rules</strong>, and they are among the most heavily tested topics on the electrician&apos;s exam.
              </p>

              <h3 className="text-xl font-display font-semibold mb-3 text-cyan-400">10-Foot Tap Rule (240.21(B)(1))</h3>
              <div className="bg-white/5 rounded-xl p-6 my-6 border-l-4 border-amber-500">
                <p className="text-white/70 mb-3">Tap conductors not over <strong>10 feet long</strong> may be used without overcurrent protection at the tap if ALL of the following conditions are met:</p>
                <ul className="text-white/70 space-y-2 text-sm">
                  <li><strong>1.</strong> The tap conductor ampacity is not less than the combined calculated loads on the circuits supplied by the tap conductors</li>
                  <li><strong>2.</strong> The tap conductor ampacity is not less than the rating of the device or overcurrent protection at the termination point</li>
                  <li><strong>3.</strong> The tap conductors do not extend beyond the panelboard, switchboard, or control device they supply</li>
                  <li><strong>4.</strong> The tap conductors are enclosed in a raceway (except at the point of connection to the feeder)</li>
                  <li><strong>5.</strong> For field installations where the tap conductors leave the enclosure, the tap conductors are protected from physical damage</li>
                </ul>
              </div>

              <h3 className="text-xl font-display font-semibold mb-3 text-cyan-400">25-Foot Tap Rule (240.21(B)(2))</h3>
              <div className="bg-white/5 rounded-xl p-6 my-6 border-l-4 border-amber-500">
                <p className="text-white/70 mb-3">Tap conductors not over <strong>25 feet long</strong> may be used without overcurrent protection at the tap if ALL of the following conditions are met:</p>
                <ul className="text-white/70 space-y-2 text-sm">
                  <li><strong>1.</strong> The tap conductor ampacity is not less than <strong>one-third (1/3)</strong> of the rating of the overcurrent device protecting the feeder conductors</li>
                  <li><strong>2.</strong> The tap conductors terminate in a single circuit breaker or set of fuses rated not more than the tap conductor ampacity</li>
                  <li><strong>3.</strong> The tap conductors are protected from physical damage by being enclosed in a raceway or otherwise suitably protected</li>
                </ul>
              </div>

              <div className="grid md:grid-cols-2 gap-6 my-6">
                <div className="bg-amber-900/30 rounded-xl p-6">
                  <h4 className="font-semibold text-amber-400 mb-3">10-Foot Tap Example</h4>
                  <div className="text-white/70 text-sm space-y-1">
                    <p>Feeder OCPD: 400A</p>
                    <p>Tap length: 8 feet</p>
                    <p>Tap conductor: Must carry the load served</p>
                    <p>Tap terminates at: 100A panel</p>
                    <p>Minimum tap size: <strong>100A ampacity</strong></p>
                    <p className="text-amber-400">(Must be &ge; load AND &ge; OCPD at termination)</p>
                  </div>
                </div>
                <div className="bg-amber-900/30 rounded-xl p-6">
                  <h4 className="font-semibold text-amber-400 mb-3">25-Foot Tap Example</h4>
                  <div className="text-white/70 text-sm space-y-1">
                    <p>Feeder OCPD: 400A</p>
                    <p>Tap length: 20 feet</p>
                    <p>Minimum tap ampacity: 400A &divide; 3 = 134A</p>
                    <p>Tap terminates at: OCPD &le; tap ampacity</p>
                    <p>Minimum tap size: <strong>134A ampacity</strong></p>
                    <p className="text-amber-400">(Must be &ge; 1/3 of feeder OCPD rating)</p>
                  </div>
                </div>
              </div>

              <div className="bg-red-900/30 rounded-xl p-6 my-6">
                <h4 className="font-semibold text-red-400 mb-3">Critical Tap Rule Points</h4>
                <ul className="text-white/70 space-y-2 text-sm">
                  <li>Tap conductors are <strong>not protected at their ampacity</strong> &mdash; they rely on the upstream OCPD. This is why length limits and other conditions are strictly enforced.</li>
                  <li>The <strong>10-foot tap rule does not have</strong> a 1/3 ampacity requirement &mdash; the conductor must carry only the actual load and the downstream OCPD rating.</li>
                  <li>The <strong>25-foot rule requires</strong> that taps terminate in a <strong>single</strong> OCPD &mdash; not a panelboard with multiple breakers without a main breaker.</li>
                  <li>There is also a <strong>secondary conductor rule (240.21(C))</strong> for transformer secondary conductors with its own set of length and ampacity requirements.</li>
                </ul>
              </div>
            </section>

            <section id="grounding-conductor" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Grounding Conductor for Feeders</h2>
              <p className="text-white/80 mb-4">
                Every feeder must include an <strong>equipment grounding conductor (EGC)</strong> per NEC 215.6 and 250.110. The EGC provides a low-impedance fault return path to ensure rapid clearing of ground faults by the overcurrent protective device.
              </p>

              <h3 className="text-xl font-display font-semibold mb-3 text-cyan-400">EGC Sizing (Table 250.122)</h3>
              <p className="text-white/80 mb-4">
                The minimum EGC size is determined by the rating of the <strong>feeder overcurrent protective device</strong>, not the conductor size. Use NEC Table 250.122:
              </p>

              <div className="overflow-x-auto my-6">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-white/20">
                      <th className="text-left py-3 px-4 text-white/60">Feeder OCPD Rating (Amps)</th>
                      <th className="text-left py-3 px-4 text-white/60">Copper EGC (AWG)</th>
                      <th className="text-left py-3 px-4 text-white/60">Aluminum EGC (AWG)</th>
                    </tr>
                  </thead>
                  <tbody className="text-white/80">
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-mono">60A</td>
                      <td className="py-3 px-4 font-mono text-green-400">#10</td>
                      <td className="py-3 px-4 font-mono text-green-400">#8</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-mono">100A</td>
                      <td className="py-3 px-4 font-mono text-green-400">#8</td>
                      <td className="py-3 px-4 font-mono text-green-400">#6</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-mono">200A</td>
                      <td className="py-3 px-4 font-mono text-green-400">#6</td>
                      <td className="py-3 px-4 font-mono text-green-400">#4</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-mono">400A</td>
                      <td className="py-3 px-4 font-mono text-green-400">#3</td>
                      <td className="py-3 px-4 font-mono text-green-400">#1</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-mono">600A</td>
                      <td className="py-3 px-4 font-mono text-green-400">#1</td>
                      <td className="py-3 px-4 font-mono text-green-400">1/0</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="bg-white/5 rounded-xl p-6 my-6">
                <h4 className="font-semibold text-cyan-400 mb-3">EGC Sizing Notes</h4>
                <ul className="text-white/70 space-y-2 text-sm">
                  <li><strong>Increased for voltage drop:</strong> If the phase conductors are increased in size for voltage drop, the EGC must be proportionally increased per NEC 250.122(B).</li>
                  <li><strong>Raceway as EGC:</strong> Metal conduit (RMC, IMC, EMT) can serve as the EGC without a separate wire, per NEC 250.118, provided the raceway is properly installed and all connections are tight.</li>
                  <li><strong>Separate from neutral:</strong> In sub-panels, the EGC and neutral must be <strong>separated</strong> (isolated neutral) per NEC 250.142. The neutral is only bonded to ground at the service equipment or source of a separately derived system.</li>
                </ul>
              </div>
            </section>

            <section id="sizing-example" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Step-by-Step Feeder Sizing Example</h2>
              <p className="text-white/80 mb-4">
                Let&apos;s work through a complete feeder sizing example for a 120/240V single-phase residential sub-panel in a detached workshop, 75 feet from the main panel.
              </p>

              <div className="bg-white/5 rounded-xl p-6 my-6">
                <h4 className="font-semibold text-white mb-3">Workshop Loads</h4>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-white/20">
                        <th className="text-left py-2 px-3 text-white/60">Load</th>
                        <th className="text-left py-2 px-3 text-white/60">VA / Amps</th>
                      </tr>
                    </thead>
                    <tbody className="text-white/80">
                      <tr className="border-b border-white/10">
                        <td className="py-2 px-3">General lighting (600 sq ft &times; 3 VA)</td>
                        <td className="py-2 px-3 font-mono">1,800 VA</td>
                      </tr>
                      <tr className="border-b border-white/10">
                        <td className="py-2 px-3">Receptacle circuits (2 &times; 1,500 VA small-appliance)</td>
                        <td className="py-2 px-3 font-mono">3,000 VA</td>
                      </tr>
                      <tr className="border-b border-white/10">
                        <td className="py-2 px-3">Air compressor (240V, 30A)</td>
                        <td className="py-2 px-3 font-mono">7,200 VA</td>
                      </tr>
                      <tr className="border-b border-white/10">
                        <td className="py-2 px-3">Welder receptacle (240V, 50A)</td>
                        <td className="py-2 px-3 font-mono">12,000 VA</td>
                      </tr>
                      <tr className="border-b border-white/10">
                        <td className="py-2 px-3">Electric heater (240V, 20A, continuous)</td>
                        <td className="py-2 px-3 font-mono">4,800 VA</td>
                      </tr>
                      <tr>
                        <td className="py-2 px-3 font-bold">Total connected load</td>
                        <td className="py-2 px-3 font-mono font-bold text-amber-400">28,800 VA</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="space-y-4 my-6">
                <div className="bg-white/5 rounded-xl p-6 border-l-4 border-amber-500">
                  <h4 className="font-semibold text-amber-400 mb-2">Step 1: Apply Demand Factors</h4>
                  <div className="text-white/70 text-sm font-mono space-y-1">
                    <p>General lighting + receptacles: 1,800 + 3,000 = 4,800 VA</p>
                    <p>First 3,000 VA at 100% = 3,000 VA</p>
                    <p>Remaining 1,800 VA at 35% = 630 VA</p>
                    <p>Subtotal lighting/recepts: 3,630 VA</p>
                    <p className="mt-2">Other loads at 100%:</p>
                    <p>Compressor: 7,200 VA</p>
                    <p>Welder: 12,000 VA</p>
                    <p>Heater: 4,800 VA</p>
                    <p className="mt-2 font-bold text-amber-400">Total demand load: 3,630 + 7,200 + 12,000 + 4,800 = 27,630 VA</p>
                  </div>
                </div>

                <div className="bg-white/5 rounded-xl p-6 border-l-4 border-amber-500">
                  <h4 className="font-semibold text-amber-400 mb-2">Step 2: Calculate Feeder Amperage</h4>
                  <div className="text-white/70 text-sm font-mono space-y-1">
                    <p>I = VA / V = 27,630 / 240 = 115.1A</p>
                    <p className="mt-2">Account for continuous load (heater = 20A continuous):</p>
                    <p>Non-continuous: 115.1A - 20A = 95.1A</p>
                    <p>Continuous: 20A &times; 1.25 = 25A</p>
                    <p className="mt-2 font-bold text-amber-400">Minimum ampacity: 95.1 + 25 = 120.1A</p>
                  </div>
                </div>

                <div className="bg-white/5 rounded-xl p-6 border-l-4 border-amber-500">
                  <h4 className="font-semibold text-amber-400 mb-2">Step 3: Select Conductor Size</h4>
                  <div className="text-white/70 text-sm space-y-1">
                    <p>Minimum ampacity needed: 120.1A</p>
                    <p>From NEC Table 310.16 (75&deg;C copper):</p>
                    <p className="font-mono">#1 AWG Cu = 130A &ge; 120.1A &#10003;</p>
                    <p className="mt-2 font-bold text-amber-400">Select: #1 AWG THHN copper conductors</p>
                  </div>
                </div>

                <div className="bg-white/5 rounded-xl p-6 border-l-4 border-amber-500">
                  <h4 className="font-semibold text-amber-400 mb-2">Step 4: Verify Voltage Drop</h4>
                  <div className="text-white/70 text-sm font-mono space-y-1">
                    <p>VD = (2 &times; K &times; I &times; L) / CM</p>
                    <p>VD = (2 &times; 12.9 &times; 115.1 &times; 75) / 83,690</p>
                    <p>VD = 222,879 / 83,690 = 2.66V</p>
                    <p>VD% = 2.66 / 240 &times; 100 = <span className="text-green-400 font-bold">1.11%</span> &#10003;</p>
                    <p className="mt-2 text-white/60">(Well within 3% recommendation)</p>
                  </div>
                </div>

                <div className="bg-white/5 rounded-xl p-6 border-l-4 border-amber-500">
                  <h4 className="font-semibold text-amber-400 mb-2">Step 5: Select OCPD and EGC</h4>
                  <div className="text-white/70 text-sm space-y-1">
                    <p>OCPD: Next standard size &ge; 120.1A = <strong>125A breaker</strong></p>
                    <p>EGC per Table 250.122 for 125A OCPD: <strong>#8 AWG copper</strong></p>
                    <p>Neutral: Size for maximum unbalanced load (120V loads only)</p>
                  </div>
                </div>

                <div className="bg-amber-900/30 rounded-xl p-6 border border-amber-500/30">
                  <h4 className="font-semibold text-amber-400 mb-2">Final Feeder Specification</h4>
                  <div className="text-white/70 text-sm space-y-1">
                    <p><strong>Phase conductors:</strong> (2) #1 AWG THHN copper</p>
                    <p><strong>Neutral:</strong> #1 AWG THHN copper (sized for unbalanced load)</p>
                    <p><strong>EGC:</strong> #8 AWG copper (bare or green insulated)</p>
                    <p><strong>OCPD:</strong> 125A, 2-pole circuit breaker in main panel</p>
                    <p><strong>Raceway:</strong> 1-1/4&quot; EMT or PVC (verify conduit fill per Chapter 9)</p>
                    <p><strong>Voltage drop:</strong> 1.11% (within 3% limit)</p>
                  </div>
                </div>
              </div>
            </section>

            <section id="common-violations" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Common Feeder Sizing Violations</h2>
              <p className="text-white/80 mb-4">
                Feeder sizing errors are among the most frequent NEC violations found during inspections. Knowing these common mistakes helps you avoid failed inspections and dangerous installations.
              </p>

              <div className="grid md:grid-cols-2 gap-4 my-6">
                <div className="bg-red-900/20 rounded-xl p-6 border border-red-500/20">
                  <h4 className="font-semibold text-red-400 mb-3">Undersized Conductors for Continuous Loads</h4>
                  <p className="text-white/60 text-sm">
                    Failing to apply the 125% factor for continuous loads. Commercial lighting, signage, and electric heating are continuous loads that require both the conductor and OCPD to be sized at 125% of the load.
                  </p>
                </div>
                <div className="bg-red-900/20 rounded-xl p-6 border border-red-500/20">
                  <h4 className="font-semibold text-red-400 mb-3">Wrong Temperature Column</h4>
                  <p className="text-white/60 text-sm">
                    Using the 90&deg;C ampacity column from Table 310.16 when the equipment terminations are rated for only 75&deg;C. Per NEC 110.14(C), the lower temperature rating of the conductor or terminal determines the allowable ampacity.
                  </p>
                </div>
                <div className="bg-red-900/20 rounded-xl p-6 border border-red-500/20">
                  <h4 className="font-semibold text-red-400 mb-3">Ignoring Voltage Drop on Long Runs</h4>
                  <p className="text-white/60 text-sm">
                    Sizing conductors for ampacity alone without checking voltage drop. A 200-foot feeder run can easily exceed 3% voltage drop if conductors are at minimum ampacity size, causing equipment malfunction and energy waste.
                  </p>
                </div>
                <div className="bg-red-900/20 rounded-xl p-6 border border-red-500/20">
                  <h4 className="font-semibold text-red-400 mb-3">Misapplying Demand Factors</h4>
                  <p className="text-white/60 text-sm">
                    Applying residential demand factors to commercial installations, or applying demand factors to branch circuits instead of feeders. Each occupancy type has its own demand factors that must be correctly applied.
                  </p>
                </div>
                <div className="bg-red-900/20 rounded-xl p-6 border border-red-500/20">
                  <h4 className="font-semibold text-red-400 mb-3">Bonding Neutral to Ground in Sub-Panel</h4>
                  <p className="text-white/60 text-sm">
                    Connecting the neutral bus to the ground bus in a sub-panel. The neutral-ground bond must exist only at the service equipment or separately derived system. Sub-panels require separated (floating) neutrals per NEC 250.142.
                  </p>
                </div>
                <div className="bg-red-900/20 rounded-xl p-6 border border-red-500/20">
                  <h4 className="font-semibold text-red-400 mb-3">Undersized EGC</h4>
                  <p className="text-white/60 text-sm">
                    Using an equipment grounding conductor that is too small for the feeder OCPD, or failing to increase the EGC size when phase conductors are upsized for voltage drop per NEC 250.122(B).
                  </p>
                </div>
                <div className="bg-red-900/20 rounded-xl p-6 border border-red-500/20">
                  <h4 className="font-semibold text-red-400 mb-3">Violating Tap Rule Conditions</h4>
                  <p className="text-white/60 text-sm">
                    Exceeding the 10-foot or 25-foot tap length limits, using tap conductors with insufficient ampacity, or failing to terminate taps at a single OCPD. Tap conductors are unprotected at their full ampacity &mdash; all conditions must be strictly met.
                  </p>
                </div>
                <div className="bg-red-900/20 rounded-xl p-6 border border-red-500/20">
                  <h4 className="font-semibold text-red-400 mb-3">Missing Derating for Conduit Fill</h4>
                  <p className="text-white/60 text-sm">
                    Failing to apply conduit fill derating when more than three current-carrying conductors share a raceway. Multi-circuit feeders in the same conduit often require ampacity adjustment per NEC Table 310.15(C)(1).
                  </p>
                </div>
              </div>

              <div className="bg-cyan-900/30 rounded-xl p-6 my-6">
                <h4 className="font-semibold text-cyan-400 mb-3">Feeder Sizing Checklist</h4>
                <ul className="text-white/70 space-y-2 text-sm">
                  <li>&#9744; Total connected load calculated per NEC Article 220</li>
                  <li>&#9744; Appropriate demand factors applied for occupancy type</li>
                  <li>&#9744; Continuous loads factored at 125%</li>
                  <li>&#9744; Conductor selected from correct temperature column (75&deg;C typical)</li>
                  <li>&#9744; Derating applied for ambient temperature and conduit fill</li>
                  <li>&#9744; Voltage drop verified at 3% or less</li>
                  <li>&#9744; OCPD sized per NEC 240.4 (not exceeding conductor ampacity)</li>
                  <li>&#9744; Neutral sized for maximum unbalanced load</li>
                  <li>&#9744; EGC sized per Table 250.122 for OCPD rating</li>
                  <li>&#9744; Tap rules verified if applicable (10-foot or 25-foot)</li>
                  <li>&#9744; Conduit fill verified per NEC Chapter 9 tables</li>
                  <li>&#9744; Neutral isolated (not bonded to ground) in sub-panel</li>
                </ul>
              </div>
            </section>

            {/* Footer CTA Section */}
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
                  <span className="text-amber-400 text-sm">Calculations</span>
                  <h3 className="font-semibold mt-2">Residential Electrical Load Calculations</h3>
                </Link>
                <Link href="/blog/sub-panel-installation-guide" className="bg-white/5 hover:bg-white/10 rounded-xl p-6 transition-colors">
                  <span className="text-blue-400 text-sm">Installation</span>
                  <h3 className="font-semibold mt-2">Sub-Panel Installation Guide</h3>
                </Link>
                <Link href="/blog/wire-sizing-guide-nec-ampacity-tables" className="bg-white/5 hover:bg-white/10 rounded-xl p-6 transition-colors">
                  <span className="text-cyan-400 text-sm">NEC Code</span>
                  <h3 className="font-semibold mt-2">Wire Sizing Guide: NEC Ampacity Tables</h3>
                </Link>
                <Link href="/blog/demand-factor-calculations-nec" className="bg-white/5 hover:bg-white/10 rounded-xl p-6 transition-colors">
                  <span className="text-amber-400 text-sm">Calculations</span>
                  <h3 className="font-semibold mt-2">Demand Factor Calculations per NEC</h3>
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
