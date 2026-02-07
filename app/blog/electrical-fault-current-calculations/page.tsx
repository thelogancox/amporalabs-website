import { Metadata } from "next";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import { BreadcrumbJsonLd, BlogPostingJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Electrical Fault Current Calculations: Complete Guide for Electricians",
  description: "Learn how to calculate available fault current for electrical systems. Understand fault current theory, point-to-point calculation method, equipment ratings, and selective coordination requirements.",
  keywords: [
    "fault current calculation",
    "available fault current",
    "short circuit current",
    "AIC rating",
    "fault current calculator",
    "point to point method",
    "short circuit calculation",
    "interrupting rating",
    "NEC 110.9",
    "NEC 110.10",
    "transformer fault current",
    "utility fault current",
    "impedance calculation",
    "selective coordination",
    "series rated systems",
    "withstand rating"
  ],
  alternates: {
    canonical: "https://amporalabs.com/blog/electrical-fault-current-calculations",
  },
  openGraph: {
    title: "Fault Current Calculations: Electrician's Guide - Ampora",
    description: "Master fault current calculations for equipment ratings and selective coordination.",
    url: "https://amporalabs.com/blog/electrical-fault-current-calculations",
    type: "article",
  },
};

function HeroIllustration() {
  return (
    <svg viewBox="0 0 400 160" className="w-full h-40 md:h-48" aria-label="Fault current calculation diagram showing utility to panel">
      {/* Utility/Transformer Source */}
      <g transform="translate(20, 30)">
        <rect x="0" y="0" width="50" height="60" rx="4" fill="#1f2937" stroke="#ef4444" strokeWidth="2"/>
        <text x="25" y="18" textAnchor="middle" fill="#ef4444" fontSize="8" fontWeight="bold">UTILITY</text>

        {/* Transformer symbol */}
        <circle cx="15" cy="38" r="10" fill="none" stroke="#ef4444" strokeWidth="1.5"/>
        <circle cx="35" cy="38" r="10" fill="none" stroke="#ef4444" strokeWidth="1.5"/>

        <text x="25" y="58" textAnchor="middle" fill="#9ca3af" fontSize="6">500 MVA</text>
      </g>

      {/* Transformer */}
      <g transform="translate(90, 30)">
        <rect x="0" y="0" width="45" height="60" rx="4" fill="#1f2937" stroke="#f97316" strokeWidth="2"/>
        <text x="22" y="15" textAnchor="middle" fill="#f97316" fontSize="7" fontWeight="bold">XFMR</text>

        {/* Coil symbols */}
        <path d="M12 25 Q17 20, 22 25 Q27 30, 32 25" fill="none" stroke="#f97316" strokeWidth="1.5"/>
        <path d="M12 35 Q17 30, 22 35 Q27 40, 32 35" fill="none" stroke="#f97316" strokeWidth="1.5"/>

        <text x="22" y="50" textAnchor="middle" fill="#9ca3af" fontSize="6">1000 kVA</text>
        <text x="22" y="58" textAnchor="middle" fill="#9ca3af" fontSize="6">5.75% Z</text>
      </g>

      {/* Main Distribution */}
      <g transform="translate(160, 25)">
        <rect x="0" y="0" width="55" height="70" rx="4" fill="#1f2937" stroke="#a855f7" strokeWidth="2"/>
        <text x="27" y="15" textAnchor="middle" fill="#a855f7" fontSize="7" fontWeight="bold">MDP</text>

        {/* Breaker symbol */}
        <rect x="15" y="22" width="25" height="15" rx="2" fill="#374151"/>
        <line x1="20" y1="29" x2="35" y2="29" stroke="#a855f7" strokeWidth="2"/>
        <circle cx="27" cy="29" r="3" fill="#a855f7"/>

        <text x="27" y="50" textAnchor="middle" fill="#22c55e" fontSize="7" fontWeight="bold">65 kAIC</text>
        <text x="27" y="60" textAnchor="middle" fill="#9ca3af" fontSize="6">AFC: 42kA</text>
      </g>

      {/* Feeder Cable */}
      <g transform="translate(225, 55)">
        <line x1="0" y1="5" x2="50" y2="5" stroke="#eab308" strokeWidth="4"/>
        <text x="25" y="20" textAnchor="middle" fill="#eab308" fontSize="6">100 ft</text>
        <text x="25" y="28" textAnchor="middle" fill="#9ca3af" fontSize="5">3/0 AWG Cu</text>
      </g>

      {/* Sub Panel */}
      <g transform="translate(290, 25)">
        <rect x="0" y="0" width="55" height="70" rx="4" fill="#1f2937" stroke="#0ea5e9" strokeWidth="2"/>
        <text x="27" y="15" textAnchor="middle" fill="#0ea5e9" fontSize="7" fontWeight="bold">SUB</text>

        {/* Breaker symbol */}
        <rect x="15" y="22" width="25" height="15" rx="2" fill="#374151"/>
        <line x1="20" y1="29" x2="35" y2="29" stroke="#0ea5e9" strokeWidth="2"/>
        <circle cx="27" cy="29" r="3" fill="#0ea5e9"/>

        <text x="27" y="50" textAnchor="middle" fill="#22c55e" fontSize="7" fontWeight="bold">22 kAIC</text>
        <text x="27" y="60" textAnchor="middle" fill="#9ca3af" fontSize="6">AFC: 18kA</text>
      </g>

      {/* Connection lines */}
      <line x1="70" y1="60" x2="90" y2="60" stroke="#ef4444" strokeWidth="3"/>
      <line x1="135" y1="60" x2="160" y2="60" stroke="#f97316" strokeWidth="3"/>
      <line x1="215" y1="60" x2="225" y2="60" stroke="#a855f7" strokeWidth="3"/>
      <line x1="275" y1="60" x2="290" y2="60" stroke="#eab308" strokeWidth="3"/>

      {/* Fault current values along the path */}
      <g transform="translate(80, 100)">
        <rect x="-15" y="0" width="40" height="20" rx="3" fill="#ef4444" fillOpacity="0.2" stroke="#ef4444"/>
        <text x="5" y="14" textAnchor="middle" fill="#ef4444" fontSize="8" fontWeight="bold">Isc=?</text>
      </g>

      <g transform="translate(165, 100)">
        <rect x="-15" y="0" width="50" height="20" rx="3" fill="#a855f7" fillOpacity="0.2" stroke="#a855f7"/>
        <text x="10" y="14" textAnchor="middle" fill="#a855f7" fontSize="8" fontWeight="bold">42,000A</text>
      </g>

      <g transform="translate(290, 100)">
        <rect x="-15" y="0" width="50" height="20" rx="3" fill="#0ea5e9" fillOpacity="0.2" stroke="#0ea5e9"/>
        <text x="10" y="14" textAnchor="middle" fill="#0ea5e9" fontSize="8" fontWeight="bold">18,500A</text>
      </g>

      {/* Fault current arrows */}
      <path d="M85 130 L200 130 L200 140 L220 125 L200 110 L200 120 L85 120 Z" fill="#ef4444" opacity="0.3"/>
      <text x="150" y="155" textAnchor="middle" fill="#ef4444" fontSize="8">FAULT CURRENT FLOW</text>

      {/* Legend */}
      <g transform="translate(350, 15)">
        <text x="0" y="0" fill="#9ca3af" fontSize="6">AIC = Interrupting</text>
        <text x="0" y="8" fill="#9ca3af" fontSize="6">AFC = Available</text>
        <text x="0" y="16" fill="#9ca3af" fontSize="6">Fault Current</text>
      </g>
    </svg>
  );
}

export default function FaultCurrentCalculationsPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navigation />
      <div className="pt-20">
        <BreadcrumbJsonLd
          items={[
            { name: "Home", url: "https://amporalabs.com" },
            { name: "Blog", url: "https://amporalabs.com/blog" },
            { name: "Fault Current Calculations", url: "https://amporalabs.com/blog/electrical-fault-current-calculations" },
          ]}
        />
        <BlogPostingJsonLd
          headline="Electrical Fault Current Calculations: Complete Guide for Electricians"
          description="Learn how to calculate available fault current for electrical systems including point-to-point method and equipment ratings."
          datePublished="2025-01-18"
          dateModified="2025-01-18"
          url="https://amporalabs.com/blog/electrical-fault-current-calculations"
          wordCount={3000}
          keywords={["fault current", "short circuit", "AIC rating", "available fault current", "selective coordination"]}
        />

        <article className="max-w-4xl mx-auto px-6 py-12">
          {/* Breadcrumb */}
          <nav className="text-sm text-white/60 mb-8">
            <Link href="/" className="hover:text-white">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/blog" className="hover:text-white">Blog</Link>
            <span className="mx-2">/</span>
            <span className="text-white">Fault Current Calculations</span>
          </nav>

          {/* Article Header */}
          <header className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <span className="px-3 py-1 bg-cyan-600/30 text-cyan-300 text-sm font-medium rounded-full">
                Calculations
              </span>
              <span className="text-white/40 text-sm">13 min read</span>
              <span className="text-white/40 text-sm">January 18, 2025</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6 leading-tight">
              Electrical Fault Current Calculations: Complete Guide for Electricians
            </h1>
            <p className="text-xl text-white/70">
              Understand available fault current and why it matters. Learn to calculate fault current at any point in the system and ensure equipment ratings are adequate for safe operation.
            </p>
          </header>

          <div className="mb-12 bg-gradient-to-br from-red-900/20 to-purple-900/20 rounded-2xl p-6 border border-white/10">
            <HeroIllustration />
          </div>

          {/* Key Concept Box */}
          <div className="bg-red-900/30 border border-red-500/30 rounded-2xl p-6 mb-12">
            <div className="flex items-start gap-4">
              <div className="text-red-400 text-2xl">&#9889;</div>
              <div>
                <h3 className="font-display font-bold text-lg mb-2 text-red-400">Why Fault Current Matters</h3>
                <p className="text-white/70">
                  A short circuit can produce currents tens of thousands of amps higher than normal operating current. If protective devices cannot safely interrupt this current, or equipment cannot withstand it, the result can be explosions, fires, and arc flash incidents. NEC 110.9 and 110.10 require equipment to be rated for available fault current.
                </p>
              </div>
            </div>
          </div>

          {/* Table of Contents */}
          <div className="bg-white/5 rounded-2xl p-6 mb-12">
            <h2 className="font-display font-bold mb-4">In This Guide</h2>
            <ul className="space-y-2 text-white/70">
              <li><a href="#fundamentals" className="hover:text-purple-400">&#8594; Fault Current Fundamentals</a></li>
              <li><a href="#nec-requirements" className="hover:text-purple-400">&#8594; NEC Requirements</a></li>
              <li><a href="#calculation-method" className="hover:text-purple-400">&#8594; Point-to-Point Calculation Method</a></li>
              <li><a href="#transformer" className="hover:text-purple-400">&#8594; Transformer Fault Current</a></li>
              <li><a href="#conductor" className="hover:text-purple-400">&#8594; Conductor Impedance Effects</a></li>
              <li><a href="#motor" className="hover:text-purple-400">&#8594; Motor Contribution</a></li>
              <li><a href="#equipment" className="hover:text-purple-400">&#8594; Equipment Ratings</a></li>
              <li><a href="#coordination" className="hover:text-purple-400">&#8594; Selective Coordination</a></li>
            </ul>
          </div>

          {/* Article Content */}
          <div className="prose prose-invert prose-lg max-w-none">

            <section id="fundamentals" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Fault Current Fundamentals</h2>
              <p className="text-white/80 mb-4">
                <strong>Fault current</strong> (also called short circuit current) is the current that flows when a low-impedance path is created between conductors or between a conductor and ground. This can occur due to insulation failure, equipment malfunction, or accidental contact.
              </p>

              <h3 className="text-xl font-semibold mb-3 mt-6">Types of Faults</h3>
              <div className="grid md:grid-cols-2 gap-4 my-6">
                <div className="bg-red-900/30 rounded-xl p-4">
                  <h4 className="font-semibold text-red-400 mb-2">Bolted Fault</h4>
                  <p className="text-white/70 text-sm">Zero impedance connection between conductors. Produces maximum fault current. Used for worst-case calculations.</p>
                </div>
                <div className="bg-orange-900/30 rounded-xl p-4">
                  <h4 className="font-semibold text-orange-400 mb-2">Arcing Fault</h4>
                  <p className="text-white/70 text-sm">Fault through an arc with some impedance. Lower current but can sustain and cause arc flash hazards.</p>
                </div>
                <div className="bg-purple-900/30 rounded-xl p-4">
                  <h4 className="font-semibold text-purple-400 mb-2">Three-Phase Fault</h4>
                  <p className="text-white/70 text-sm">All three phases shorted together. Produces highest symmetrical fault current in three-phase systems.</p>
                </div>
                <div className="bg-cyan-900/30 rounded-xl p-4">
                  <h4 className="font-semibold text-cyan-400 mb-2">Line-to-Ground Fault</h4>
                  <p className="text-white/70 text-sm">Single phase to ground. Most common fault type. Current depends on grounding system.</p>
                </div>
              </div>

              <h3 className="text-xl font-semibold mb-3 mt-6">Ohms Law Applied to Faults</h3>
              <p className="text-white/80 mb-4">
                Fault current is simply Ohms Law applied: I = V / Z. The fault current magnitude depends on:
              </p>
              <ul className="list-disc list-inside text-white/70 space-y-2 mb-6">
                <li><strong>System voltage:</strong> Higher voltage = higher potential fault current</li>
                <li><strong>Total impedance:</strong> All impedance from source to fault point</li>
                <li><strong>Source capacity:</strong> Utility available fault current</li>
              </ul>

              <div className="bg-white/5 rounded-xl p-6 my-6 text-center">
                <p className="text-white/60 mb-2">Basic Fault Current Formula</p>
                <div className="text-2xl font-mono font-bold text-cyan-400">I<sub>fault</sub> = V / Z<sub>total</sub></div>
                <p className="text-white/60 mt-2 text-sm">Where Z<sub>total</sub> is the total impedance from source to fault</p>
              </div>
            </section>

            <section id="nec-requirements" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">NEC Requirements for Fault Current</h2>
              <p className="text-white/80 mb-4">
                The NEC has specific requirements related to available fault current that every electrician must understand.
              </p>

              <div className="grid md:grid-cols-2 gap-6 my-6">
                <div className="bg-purple-900/30 rounded-xl p-6">
                  <h3 className="font-semibold text-purple-400 mb-3">NEC 110.9 - Interrupting Rating</h3>
                  <p className="text-white/70 text-sm mb-3">
                    Equipment intended to interrupt current at fault levels shall have an <strong>interrupting rating not less than</strong> the nominal circuit voltage and current to be interrupted.
                  </p>
                  <p className="text-white/60 text-sm">
                    Translation: Breakers and fuses must be rated to safely interrupt the available fault current.
                  </p>
                </div>
                <div className="bg-cyan-900/30 rounded-xl p-6">
                  <h3 className="font-semibold text-cyan-400 mb-3">NEC 110.10 - Short-Circuit Current Rating</h3>
                  <p className="text-white/70 text-sm mb-3">
                    The overcurrent protective devices, total impedance, component short-circuit current ratings shall be selected and coordinated to <strong>permit clearing of faults without extensive damage</strong>.
                  </p>
                  <p className="text-white/60 text-sm">
                    Translation: All components must withstand fault current until protection clears.
                  </p>
                </div>
              </div>

              <h3 className="text-xl font-semibold mb-3 mt-6">NEC 110.24 - Available Fault Current Documentation</h3>
              <div className="bg-orange-900/30 rounded-xl p-6 my-6">
                <p className="text-white/70 mb-3">
                  NEC 110.24(A) requires service equipment (other than dwelling units) to be <strong>field marked</strong> with:
                </p>
                <ul className="space-y-2 text-white/70">
                  <li><strong>1.</strong> Maximum available fault current at service</li>
                  <li><strong>2.</strong> Date the calculation was performed</li>
                  <li><strong>3.</strong> Must be legibly marked in the field</li>
                </ul>
                <p className="text-white/60 mt-4 text-sm">
                  This marking allows future verification that equipment is properly rated for available fault current.
                </p>
              </div>
            </section>

            <section id="calculation-method" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Point-to-Point Calculation Method</h2>
              <p className="text-white/80 mb-4">
                The <strong>point-to-point method</strong> calculates fault current at successive points in the electrical system by adding the impedance of each component. This is the standard method used in most commercial/industrial applications.
              </p>

              <h3 className="text-xl font-semibold mb-3 mt-6">Step-by-Step Process</h3>
              <div className="space-y-4 my-6">
                <div className="bg-white/5 rounded-xl p-4">
                  <p className="text-white font-semibold mb-2">Step 1: Determine Utility Available Fault Current</p>
                  <p className="text-white/60 text-sm">Contact the utility for available fault current at the service point, typically given in MVA or kA. If unknown, infinite bus (unlimited source) assumptions may be used.</p>
                </div>
                <div className="bg-white/5 rounded-xl p-4">
                  <p className="text-white font-semibold mb-2">Step 2: Calculate Transformer Impedance</p>
                  <p className="text-white/60 text-sm">Use transformer nameplate %Z to determine impedance contribution. This is typically the largest single impedance element.</p>
                </div>
                <div className="bg-white/5 rounded-xl p-4">
                  <p className="text-white font-semibold mb-2">Step 3: Add Conductor Impedance</p>
                  <p className="text-white/60 text-sm">Calculate impedance of each conductor run based on length, size, and material. Use values from NEC Chapter 9 Table 9.</p>
                </div>
                <div className="bg-white/5 rounded-xl p-4">
                  <p className="text-white font-semibold mb-2">Step 4: Calculate Fault Current at Each Point</p>
                  <p className="text-white/60 text-sm">I<sub>sc</sub> = V / Z<sub>total</sub>. Fault current decreases as you move further from the source.</p>
                </div>
                <div className="bg-white/5 rounded-xl p-4">
                  <p className="text-white font-semibold mb-2">Step 5: Add Motor Contribution (if applicable)</p>
                  <p className="text-white/60 text-sm">Motors act as generators during faults, adding to fault current. Typically 4-6x motor FLA.</p>
                </div>
              </div>
            </section>

            <section id="transformer" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Transformer Fault Current Calculation</h2>
              <p className="text-white/80 mb-4">
                The transformer is typically the dominant impedance element limiting fault current. Transformer fault current can be calculated using the nameplate impedance (%Z).
              </p>

              <div className="bg-white/5 rounded-xl p-6 my-6">
                <h3 className="font-semibold text-cyan-400 mb-3">Transformer Short Circuit Current Formula</h3>
                <div className="text-center my-4">
                  <div className="text-xl font-mono font-bold text-cyan-400 mb-2">I<sub>sc</sub> = (kVA x 1000) / (V<sub>secondary</sub> x 1.732 x %Z / 100)</div>
                  <p className="text-white/60 text-sm">For three-phase transformers</p>
                </div>
                <div className="text-center my-4">
                  <div className="text-xl font-mono font-bold text-purple-400 mb-2">I<sub>sc</sub> = (kVA x 1000) / (V<sub>secondary</sub> x %Z / 100)</div>
                  <p className="text-white/60 text-sm">For single-phase transformers</p>
                </div>
              </div>

              <h3 className="text-xl font-semibold mb-3 mt-6">Calculation Example</h3>
              <div className="bg-purple-900/30 rounded-xl p-6 my-6">
                <p className="text-white/70 mb-4">
                  <strong>Given:</strong> 1000 kVA transformer, 480V secondary, 5.75% impedance
                </p>
                <div className="space-y-2 text-white/70">
                  <p><strong>Step 1:</strong> Calculate full load amps</p>
                  <p className="font-mono text-sm ml-4">FLA = 1000 x 1000 / (480 x 1.732) = 1203A</p>
                  <p className="mt-4"><strong>Step 2:</strong> Calculate fault current</p>
                  <p className="font-mono text-sm ml-4">I<sub>sc</sub> = FLA / (%Z/100) = 1203 / 0.0575 = <strong>20,922A</strong></p>
                </div>
              </div>

              <h3 className="text-xl font-semibold mb-3 mt-6">Common Transformer Impedances</h3>
              <div className="overflow-x-auto my-6">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-white/20">
                      <th className="text-left py-3 px-4 text-white/60">Transformer Size</th>
                      <th className="text-left py-3 px-4 text-white/60">Typical %Z</th>
                      <th className="text-left py-3 px-4 text-white/60">AFC at 480V (approx)</th>
                    </tr>
                  </thead>
                  <tbody className="text-white/80">
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">75 kVA</td>
                      <td className="py-3 px-4">2.5-3.5%</td>
                      <td className="py-3 px-4 font-mono">2,500 - 3,600A</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">150 kVA</td>
                      <td className="py-3 px-4">3.0-4.0%</td>
                      <td className="py-3 px-4 font-mono">4,500 - 6,000A</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">500 kVA</td>
                      <td className="py-3 px-4">4.5-5.75%</td>
                      <td className="py-3 px-4 font-mono">10,500 - 13,400A</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">1000 kVA</td>
                      <td className="py-3 px-4">5.0-5.75%</td>
                      <td className="py-3 px-4 font-mono">21,000 - 24,000A</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4">2000 kVA</td>
                      <td className="py-3 px-4">5.75-6.5%</td>
                      <td className="py-3 px-4 font-mono">37,000 - 42,000A</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section id="conductor" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Conductor Impedance Effects</h2>
              <p className="text-white/80 mb-4">
                As fault current travels through conductors, the conductor impedance reduces the available fault current. This is why fault current decreases as you move further from the source.
              </p>

              <h3 className="text-xl font-semibold mb-3 mt-6">Conductor Impedance Values</h3>
              <p className="text-white/80 mb-4">
                Conductor impedance includes both resistance (R) and reactance (X). For fault calculations, use values from <strong>NEC Chapter 9, Table 9</strong>.
              </p>

              <div className="bg-white/5 rounded-xl p-6 my-6">
                <h4 className="font-semibold mb-3">Typical Impedance Values (Copper in Steel Conduit)</h4>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-white/20">
                        <th className="text-left py-2 px-3 text-white/60">AWG/kcmil</th>
                        <th className="text-left py-2 px-3 text-white/60">R (ohms/1000ft)</th>
                        <th className="text-left py-2 px-3 text-white/60">X (ohms/1000ft)</th>
                        <th className="text-left py-2 px-3 text-white/60">Z (ohms/1000ft)</th>
                      </tr>
                    </thead>
                    <tbody className="text-white/80">
                      <tr className="border-b border-white/10">
                        <td className="py-2 px-3">4 AWG</td>
                        <td className="py-2 px-3 font-mono">0.321</td>
                        <td className="py-2 px-3 font-mono">0.048</td>
                        <td className="py-2 px-3 font-mono">0.325</td>
                      </tr>
                      <tr className="border-b border-white/10">
                        <td className="py-2 px-3">1 AWG</td>
                        <td className="py-2 px-3 font-mono">0.16</td>
                        <td className="py-2 px-3 font-mono">0.046</td>
                        <td className="py-2 px-3 font-mono">0.166</td>
                      </tr>
                      <tr className="border-b border-white/10">
                        <td className="py-2 px-3">3/0 AWG</td>
                        <td className="py-2 px-3 font-mono">0.079</td>
                        <td className="py-2 px-3 font-mono">0.043</td>
                        <td className="py-2 px-3 font-mono">0.09</td>
                      </tr>
                      <tr className="border-b border-white/10">
                        <td className="py-2 px-3">250 kcmil</td>
                        <td className="py-2 px-3 font-mono">0.054</td>
                        <td className="py-2 px-3 font-mono">0.041</td>
                        <td className="py-2 px-3 font-mono">0.068</td>
                      </tr>
                      <tr>
                        <td className="py-2 px-3">500 kcmil</td>
                        <td className="py-2 px-3 font-mono">0.029</td>
                        <td className="py-2 px-3 font-mono">0.039</td>
                        <td className="py-2 px-3 font-mono">0.048</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <h3 className="text-xl font-semibold mb-3 mt-6">Multiplier Method (f-Factor)</h3>
              <p className="text-white/80 mb-4">
                A quick method for calculating fault current at the end of a conductor run uses multiplier tables (C values). The formula:
              </p>
              <div className="bg-cyan-900/30 rounded-xl p-6 my-6 text-center">
                <div className="text-xl font-mono font-bold text-cyan-400">I<sub>sc-downstream</sub> = I<sub>sc-upstream</sub> x M</div>
                <p className="text-white/60 mt-2 text-sm">Where M = 1 / (1 + f) and f = (I<sub>sc</sub> x L x Z) / V</p>
              </div>
            </section>

            <section id="motor" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Motor Contribution to Fault Current</h2>
              <p className="text-white/80 mb-4">
                When a fault occurs, running motors continue to spin due to inertia and feed current back into the fault. This <strong>motor contribution</strong> adds to the available fault current.
              </p>

              <div className="bg-orange-900/30 rounded-xl p-6 my-6">
                <h3 className="font-semibold text-orange-400 mb-3">Motor Contribution Guidelines</h3>
                <ul className="space-y-2 text-white/70">
                  <li><strong>Induction motors:</strong> Typically contribute 4-6x their full load amps</li>
                  <li><strong>Synchronous motors:</strong> May contribute 6-10x their full load amps</li>
                  <li><strong>Duration:</strong> Motor contribution decays quickly (1-4 cycles)</li>
                  <li><strong>When significant:</strong> Large motor loads relative to transformer size</li>
                </ul>
              </div>

              <p className="text-white/80 mb-4">
                Motor contribution is most significant when:
              </p>
              <ul className="list-disc list-inside text-white/70 space-y-2 mb-6">
                <li>Total motor load exceeds 25% of transformer capacity</li>
                <li>Fault occurs close to motor terminals</li>
                <li>Large individual motors (100+ HP) are present</li>
              </ul>
            </section>

            <section id="equipment" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Equipment Ratings and Selection</h2>
              <p className="text-white/80 mb-4">
                All electrical equipment must be rated for the available fault current at its location. Key ratings to verify:
              </p>

              <h3 className="text-xl font-semibold mb-3 mt-6">Interrupting Rating (AIR or AIC)</h3>
              <div className="bg-white/5 rounded-xl p-6 my-6">
                <p className="text-white/70 mb-3">
                  <strong>AIC (Ampere Interrupting Capacity)</strong> or AIR (Ampere Interrupting Rating) is the maximum fault current a device can safely interrupt.
                </p>
                <div className="grid md:grid-cols-2 gap-4 mt-4">
                  <div>
                    <p className="text-white font-semibold">Standard Breaker AICs</p>
                    <ul className="text-white/70 text-sm mt-2 space-y-1">
                      <li>&#8226; Residential: 10,000A</li>
                      <li>&#8226; Commercial: 14,000-22,000A</li>
                      <li>&#8226; Industrial: 25,000-65,000A</li>
                      <li>&#8226; High-AIC: 100,000A+</li>
                    </ul>
                  </div>
                  <div>
                    <p className="text-white font-semibold">Fuse Interrupting Ratings</p>
                    <ul className="text-white/70 text-sm mt-2 space-y-1">
                      <li>&#8226; Class RK1/RK5: 200,000A</li>
                      <li>&#8226; Class J: 200,000A</li>
                      <li>&#8226; Class L: 200,000A</li>
                      <li>&#8226; Class CC: 200,000A</li>
                    </ul>
                  </div>
                </div>
              </div>

              <h3 className="text-xl font-semibold mb-3 mt-6">Short-Circuit Current Rating (SCCR)</h3>
              <p className="text-white/80 mb-4">
                <strong>SCCR</strong> is the maximum fault current an assembly (like a motor control center or industrial control panel) can withstand. Unlike AIC, SCCR considers the entire assembly, not just individual devices.
              </p>

              <div className="bg-green-900/30 rounded-xl p-6 my-6">
                <h3 className="font-semibold text-green-400 mb-3">Series-Rated Systems</h3>
                <p className="text-white/70 mb-3">
                  <strong>Series rating</strong> allows a lower-rated downstream breaker to be protected by a higher-rated upstream device. Requirements:
                </p>
                <ul className="space-y-2 text-white/70 text-sm">
                  <li>&#10003; Devices must be tested and listed as a series combination</li>
                  <li>&#10003; Listed on manufacturer cut sheets</li>
                  <li>&#10003; Label required on equipment per NEC 110.22(C)</li>
                  <li>&#10003; Not permitted where selective coordination is required</li>
                </ul>
              </div>
            </section>

            <section id="coordination" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Selective Coordination</h2>
              <p className="text-white/80 mb-4">
                <strong>Selective coordination</strong> means that the overcurrent device closest to a fault opens while upstream devices remain closed. This prevents unnecessary outages.
              </p>

              <h3 className="text-xl font-semibold mb-3 mt-6">When Selective Coordination is Required</h3>
              <div className="bg-purple-900/30 rounded-xl p-6 my-6">
                <p className="text-white/70 mb-3">Per NEC 700.32 and 701.32, selective coordination is required for:</p>
                <ul className="space-y-2 text-white/70">
                  <li><strong>Emergency systems (NEC 700)</strong> - Life safety systems</li>
                  <li><strong>Legally required standby (NEC 701)</strong> - Code-required systems</li>
                  <li><strong>Critical operations power systems (NEC 708)</strong> - Mission critical</li>
                  <li><strong>Healthcare essential systems</strong> - Per NEC 517</li>
                </ul>
              </div>

              <h3 className="text-xl font-semibold mb-3 mt-6">Achieving Selective Coordination</h3>
              <ul className="list-disc list-inside text-white/70 space-y-2 mb-6">
                <li><strong>Time-current coordination:</strong> Time delays allow downstream devices to clear first</li>
                <li><strong>Zone-selective interlocking:</strong> Communication between devices</li>
                <li><strong>Current-limiting fuses:</strong> Let-through current limits coordination</li>
                <li><strong>Fuse sizing:</strong> 2:1 or 3:1 ratios between levels</li>
              </ul>

              <div className="bg-white/5 rounded-xl p-6 my-6">
                <h3 className="font-semibold mb-3">Coordination Study</h3>
                <p className="text-white/70">
                  A <strong>coordination study</strong> plots time-current curves of all protective devices to verify they coordinate. This analysis is typically performed using specialized software and is required for complex systems and where selective coordination is mandated.
                </p>
              </div>
            </section>

            {/* CTA Section */}
            <section className="bg-gradient-to-r from-purple-900/30 to-cyan-900/30 rounded-2xl p-8 my-12">
              <h2 className="text-2xl font-display font-bold mb-4 text-center">
                Electrical Calculations Made Easy
              </h2>
              <p className="text-white/70 mb-6 text-center">
                Access professional electrical calculators and NEC reference materials instantly with Ampora. Get accurate results for voltage drop, wire sizing, and more.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link
                  href="/calculators"
                  className="px-6 py-3 bg-purple-600 text-white font-semibold rounded-full hover:bg-purple-500 transition-colors text-center"
                >
                  Explore Calculators
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
                <Link href="/blog/nec-article-240-overcurrent-protection" className="bg-white/5 hover:bg-white/10 rounded-xl p-6 transition-colors">
                  <span className="text-purple-400 text-sm">NEC Code</span>
                  <h3 className="font-semibold mt-2">NEC Article 240: Overcurrent Protection Guide</h3>
                </Link>
                <Link href="/blog/transformer-sizing-guide" className="bg-white/5 hover:bg-white/10 rounded-xl p-6 transition-colors">
                  <span className="text-cyan-400 text-sm">Calculations</span>
                  <h3 className="font-semibold mt-2">Transformer Sizing Guide</h3>
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
