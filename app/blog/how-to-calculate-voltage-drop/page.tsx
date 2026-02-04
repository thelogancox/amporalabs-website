import { Metadata } from "next";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import { BreadcrumbJsonLd, BlogPostingJsonLd, HowToJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "How to Calculate Voltage Drop: Step-by-Step Guide for Electricians",
  description: "Learn how to calculate voltage drop for single-phase and three-phase circuits. Includes NEC voltage drop requirements, formulas, wire sizing examples, and when to upsize conductors for long runs.",
  keywords: [
    "how to calculate voltage drop",
    "voltage drop calculation",
    "voltage drop formula",
    "NEC voltage drop",
    "voltage drop calculator",
    "calculate voltage drop in wire",
    "electrical voltage drop",
    "voltage drop percentage",
    "3% voltage drop rule",
    "5% voltage drop rule",
    "single phase voltage drop",
    "three phase voltage drop",
    "long wire run voltage drop",
    "upsize conductor voltage drop",
    "NEC 210.19",
    "wire sizing for voltage drop"
  ],
  alternates: {
    canonical: "https://amporalabs.com/blog/how-to-calculate-voltage-drop",
  },
  openGraph: {
    title: "How to Calculate Voltage Drop: Electrician's Guide - Ampora",
    description: "Step-by-step voltage drop calculations for single-phase and three-phase circuits with NEC requirements.",
    url: "https://amporalabs.com/blog/how-to-calculate-voltage-drop",
    type: "article",
  },
};

function HeroIllustration() {
  return (
    <svg viewBox="0 0 400 160" className="w-full h-40 md:h-48" aria-label="Voltage drop illustration showing wire run">
      {/* Source */}
      <g transform="translate(30, 50)">
        <rect x="0" y="0" width="50" height="60" rx="4" fill="#1f2937" stroke="#22c55e" strokeWidth="2"/>
        <text x="25" y="25" textAnchor="middle" fill="#22c55e" fontSize="10" fontWeight="bold">120V</text>
        <text x="25" y="40" textAnchor="middle" fill="#9ca3af" fontSize="8">SOURCE</text>
      </g>

      {/* Wire run with voltage gradient */}
      <defs>
        <linearGradient id="voltageGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#22c55e"/>
          <stop offset="100%" stopColor="#eab308"/>
        </linearGradient>
      </defs>
      <line x1="80" y1="70" x2="280" y2="70" stroke="url(#voltageGradient)" strokeWidth="6" strokeLinecap="round"/>
      <line x1="80" y1="90" x2="280" y2="90" stroke="#6b7280" strokeWidth="4" strokeLinecap="round"/>

      {/* Distance marker */}
      <line x1="80" y1="120" x2="280" y2="120" stroke="#6b7280" strokeWidth="1"/>
      <line x1="80" y1="115" x2="80" y2="125" stroke="#6b7280" strokeWidth="1"/>
      <line x1="280" y1="115" x2="280" y2="125" stroke="#6b7280" strokeWidth="1"/>
      <text x="180" y="135" textAnchor="middle" fill="#9ca3af" fontSize="9">Distance (D) = 150 ft</text>

      {/* Load */}
      <g transform="translate(290, 50)">
        <rect x="0" y="0" width="70" height="60" rx="4" fill="#1f2937" stroke="#eab308" strokeWidth="2"/>
        <text x="35" y="25" textAnchor="middle" fill="#eab308" fontSize="10" fontWeight="bold">108V</text>
        <text x="35" y="40" textAnchor="middle" fill="#9ca3af" fontSize="8">AT LOAD</text>
      </g>

      {/* Voltage drop indicator */}
      <rect x="130" y="15" width="100" height="25" rx="4" fill="#ef4444" fillOpacity="0.2" stroke="#ef4444"/>
      <text x="180" y="32" textAnchor="middle" fill="#ef4444" fontSize="10" fontWeight="bold">VD = 12V (10%)</text>

      {/* Wire gauge label */}
      <text x="180" y="60" textAnchor="middle" fill="#9ca3af" fontSize="8">#12 AWG Copper</text>
    </svg>
  );
}

export default function VoltageDropGuidePage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navigation />
      <div className="pt-20">
        <BreadcrumbJsonLd
          items={[
            { name: "Home", url: "https://amporalabs.com" },
            { name: "Blog", url: "https://amporalabs.com/blog" },
            { name: "Voltage Drop Guide", url: "https://amporalabs.com/blog/how-to-calculate-voltage-drop" },
          ]}
        />
        <BlogPostingJsonLd
          headline="How to Calculate Voltage Drop: Step-by-Step Guide for Electricians"
          description="Learn the complete voltage drop calculation process for single-phase and three-phase circuits with NEC requirements."
          datePublished="2025-01-10"
          dateModified="2025-01-10"
          url="https://amporalabs.com/blog/how-to-calculate-voltage-drop"
          wordCount={2200}
          keywords={["voltage drop", "voltage drop calculation", "NEC voltage drop", "wire sizing"]}
        />
        <HowToJsonLd
          name="How to Calculate Voltage Drop in Electrical Circuits"
          description="Step-by-step guide to calculating voltage drop for single-phase and three-phase electrical circuits"
          steps={[
            { name: "Identify circuit parameters", text: "Gather your circuit voltage, load current, wire gauge, and one-way distance" },
            { name: "Select the correct formula", text: "Use single-phase formula (VD = 2×K×I×D/CM) or three-phase formula (VD = 1.732×K×I×D/CM)" },
            { name: "Find conductor resistance constant", text: "Use K=12.9 for copper or K=21.2 for aluminum conductors" },
            { name: "Look up circular mils", text: "Find the circular mil area for your wire gauge from NEC Chapter 9 Table 8" },
            { name: "Calculate voltage drop", text: "Plug values into formula to get voltage drop in volts" },
            { name: "Convert to percentage", text: "Divide voltage drop by source voltage and multiply by 100 to get percentage" }
          ]}
        />

        <article className="max-w-4xl mx-auto px-6 py-12">
          {/* Breadcrumb */}
          <nav className="text-sm text-white/60 mb-8">
            <Link href="/" className="hover:text-white">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/blog" className="hover:text-white">Blog</Link>
            <span className="mx-2">/</span>
            <span className="text-white">Voltage Drop Guide</span>
          </nav>

          {/* Article Header */}
          <header className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <span className="px-3 py-1 bg-cyan-600/30 text-cyan-300 text-sm font-medium rounded-full">
                Calculations
              </span>
              <span className="text-white/40 text-sm">10 min read</span>
              <span className="text-white/40 text-sm">January 10, 2025</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6 leading-tight">
              How to Calculate Voltage Drop: Step-by-Step Guide for Electricians
            </h1>
            <p className="text-xl text-white/70">
              Master voltage drop calculations for any circuit. Learn when to upsize conductors, understand NEC recommendations, and avoid inspection issues on long wire runs.
            </p>
          </header>

          <div className="mb-12 bg-gradient-to-br from-green-900/20 to-yellow-900/20 rounded-2xl p-6 border border-white/10">
            <HeroIllustration />
          </div>

          {/* Quick Calculator CTA */}
          <div className="bg-purple-900/30 border border-purple-500/30 rounded-2xl p-6 mb-12">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div>
                <h3 className="font-display font-bold text-lg mb-1">Need quick results?</h3>
                <p className="text-white/70 text-sm">Use our free voltage drop calculator for instant NEC-compliant calculations.</p>
              </div>
              <Link
                href="/calculators/voltage-drop"
                className="px-6 py-3 bg-purple-600 text-white font-semibold rounded-full hover:bg-purple-500 transition-colors whitespace-nowrap"
              >
                Open Calculator
              </Link>
            </div>
          </div>

          {/* Table of Contents */}
          <div className="bg-white/5 rounded-2xl p-6 mb-12">
            <h2 className="font-display font-bold mb-4">In This Guide</h2>
            <ul className="space-y-2 text-white/70">
              <li><a href="#what-is-voltage-drop" className="hover:text-purple-400">→ What is Voltage Drop?</a></li>
              <li><a href="#nec-requirements" className="hover:text-purple-400">→ NEC Voltage Drop Requirements</a></li>
              <li><a href="#formulas" className="hover:text-purple-400">→ Voltage Drop Formulas</a></li>
              <li><a href="#single-phase-example" className="hover:text-purple-400">→ Single-Phase Calculation Example</a></li>
              <li><a href="#three-phase-example" className="hover:text-purple-400">→ Three-Phase Calculation Example</a></li>
              <li><a href="#circular-mils" className="hover:text-purple-400">→ Wire Gauge Circular Mils Table</a></li>
              <li><a href="#when-to-upsize" className="hover:text-purple-400">→ When to Upsize Conductors</a></li>
            </ul>
          </div>

          {/* Article Content */}
          <div className="prose prose-invert prose-lg max-w-none">

            <section id="what-is-voltage-drop" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">What is Voltage Drop?</h2>
              <p className="text-white/80 mb-4">
                <strong>Voltage drop</strong> is the reduction in voltage that occurs as electrical current flows through a conductor due to the conductor's resistance. All conductors have some resistance, and when current flows through this resistance, some voltage is "lost" as heat according to Ohm's Law (V = I × R).
              </p>
              <p className="text-white/80 mb-4">
                Excessive voltage drop causes:
              </p>
              <ul className="list-disc list-inside text-white/70 space-y-2 mb-4">
                <li><strong>Reduced equipment efficiency</strong> - Motors run hotter and less efficiently</li>
                <li><strong>Dimming lights</strong> - Especially noticeable with long lighting circuits</li>
                <li><strong>Equipment damage</strong> - Some equipment won't operate correctly at low voltage</li>
                <li><strong>Overheating conductors</strong> - Wasted energy turns to heat in the wire</li>
                <li><strong>Failed inspections</strong> - Inspectors may reject installations with excessive voltage drop</li>
              </ul>
            </section>

            <section id="nec-requirements" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">NEC Voltage Drop Requirements</h2>
              <p className="text-white/80 mb-4">
                The NEC provides voltage drop recommendations in <strong>NEC 210.19(A) Informational Note No. 4</strong> and <strong>NEC 215.2(A)(4) Informational Note No. 2</strong>:
              </p>
              <div className="grid md:grid-cols-2 gap-4 my-6">
                <div className="bg-green-900/30 rounded-xl p-6 text-center">
                  <div className="text-4xl font-mono font-bold text-green-400 mb-2">3%</div>
                  <p className="text-white/70">Maximum recommended voltage drop for <strong>branch circuits</strong></p>
                </div>
                <div className="bg-cyan-900/30 rounded-xl p-6 text-center">
                  <div className="text-4xl font-mono font-bold text-cyan-400 mb-2">5%</div>
                  <p className="text-white/70">Maximum recommended <strong>total</strong> voltage drop (feeder + branch circuit combined)</p>
                </div>
              </div>
              <div className="bg-orange-900/30 rounded-xl p-6 my-6">
                <p className="text-white/90">
                  <strong>Important:</strong> These are <em>recommendations</em>, not requirements. However, many AHJs (Authority Having Jurisdiction) enforce these as requirements. Always check local codes and practices.
                </p>
              </div>
              <p className="text-white/80">
                For a 120V circuit, 3% voltage drop equals 3.6V. For a 240V circuit, 3% equals 7.2V. For 480V three-phase, 3% equals 14.4V.
              </p>
            </section>

            <section id="formulas" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Voltage Drop Formulas</h2>
              <p className="text-white/80 mb-4">
                The standard voltage drop formula uses the conductor's resistivity, length, and circular mil area:
              </p>

              <div className="grid md:grid-cols-2 gap-6 my-6">
                <div className="bg-purple-900/30 rounded-xl p-6">
                  <h3 className="font-semibold text-purple-400 mb-3">Single-Phase Formula</h3>
                  <div className="text-2xl font-mono font-bold text-purple-400 mb-4">VD = (2 × K × I × D) / CM</div>
                  <p className="text-white/60 text-sm">Use for single-phase and DC circuits</p>
                </div>
                <div className="bg-cyan-900/30 rounded-xl p-6">
                  <h3 className="font-semibold text-cyan-400 mb-3">Three-Phase Formula</h3>
                  <div className="text-2xl font-mono font-bold text-cyan-400 mb-4">VD = (1.732 × K × I × D) / CM</div>
                  <p className="text-white/60 text-sm">Use for three-phase circuits (√3 = 1.732)</p>
                </div>
              </div>

              <div className="bg-white/5 rounded-xl p-6 my-6">
                <h3 className="font-semibold mb-3">Variable Definitions</h3>
                <ul className="space-y-2 text-white/70">
                  <li><strong>VD</strong> = Voltage drop (volts)</li>
                  <li><strong>K</strong> = Resistivity constant: <strong>12.9</strong> for copper, <strong>21.2</strong> for aluminum</li>
                  <li><strong>I</strong> = Current (amps)</li>
                  <li><strong>D</strong> = One-way distance (feet) - not round trip!</li>
                  <li><strong>CM</strong> = Circular mils of the conductor (from NEC Chapter 9 Table 8)</li>
                </ul>
              </div>

              <p className="text-white/80 mt-4">
                To calculate <strong>voltage drop percentage</strong>:
              </p>
              <div className="bg-white/5 rounded-xl p-6 my-4 text-center">
                <div className="text-xl font-mono font-bold text-white">VD% = (VD / Source Voltage) × 100</div>
              </div>
            </section>

            <section id="single-phase-example" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Single-Phase Calculation Example</h2>
              <div className="bg-white/5 rounded-xl p-6 mb-4">
                <h3 className="font-semibold text-purple-400 mb-3">Problem:</h3>
                <p className="text-white/80">
                  Calculate the voltage drop for a 120V, 20A circuit using 12 AWG copper wire with a one-way distance of 150 feet.
                </p>
              </div>

              <div className="space-y-4 my-6">
                <div className="bg-white/5 rounded-xl p-4">
                  <p className="text-white/70"><strong>Step 1:</strong> Identify values</p>
                  <p className="text-white/60 text-sm mt-1">K = 12.9 (copper), I = 20A, D = 150 ft, CM = 6530 (12 AWG)</p>
                </div>
                <div className="bg-white/5 rounded-xl p-4">
                  <p className="text-white/70"><strong>Step 2:</strong> Apply single-phase formula</p>
                  <p className="text-white/60 font-mono text-sm mt-1">VD = (2 × 12.9 × 20 × 150) / 6530</p>
                </div>
                <div className="bg-white/5 rounded-xl p-4">
                  <p className="text-white/70"><strong>Step 3:</strong> Calculate</p>
                  <p className="text-white/60 font-mono text-sm mt-1">VD = 77,400 / 6530 = <strong>11.86 volts</strong></p>
                </div>
                <div className="bg-white/5 rounded-xl p-4">
                  <p className="text-white/70"><strong>Step 4:</strong> Convert to percentage</p>
                  <p className="text-white/60 font-mono text-sm mt-1">VD% = (11.86 / 120) × 100 = <strong>9.88%</strong></p>
                </div>
              </div>

              <div className="bg-red-900/20 border border-red-500/30 rounded-xl p-6 my-6">
                <h3 className="font-semibold text-red-400 mb-2">Result: FAILS 3% Rule</h3>
                <p className="text-white/70">
                  At 9.88% voltage drop, this circuit exceeds the 3% NEC recommendation. The conductor needs to be upsized to reduce voltage drop.
                </p>
              </div>

              <p className="text-white/80">
                <strong>Solution:</strong> Upsizing to 6 AWG (26240 CM) would give: VD = 77,400 / 26240 = 2.95V (2.46%) ✓
              </p>
            </section>

            <section id="three-phase-example" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Three-Phase Calculation Example</h2>
              <div className="bg-white/5 rounded-xl p-6 mb-4">
                <h3 className="font-semibold text-cyan-400 mb-3">Problem:</h3>
                <p className="text-white/80">
                  Calculate the voltage drop for a 480V three-phase, 100A circuit using 1 AWG copper wire with a one-way distance of 200 feet.
                </p>
              </div>

              <div className="space-y-4 my-6">
                <div className="bg-white/5 rounded-xl p-4">
                  <p className="text-white/70"><strong>Step 1:</strong> Identify values</p>
                  <p className="text-white/60 text-sm mt-1">K = 12.9 (copper), I = 100A, D = 200 ft, CM = 83690 (1 AWG)</p>
                </div>
                <div className="bg-white/5 rounded-xl p-4">
                  <p className="text-white/70"><strong>Step 2:</strong> Apply three-phase formula</p>
                  <p className="text-white/60 font-mono text-sm mt-1">VD = (1.732 × 12.9 × 100 × 200) / 83690</p>
                </div>
                <div className="bg-white/5 rounded-xl p-4">
                  <p className="text-white/70"><strong>Step 3:</strong> Calculate</p>
                  <p className="text-white/60 font-mono text-sm mt-1">VD = 446,856 / 83690 = <strong>5.34 volts</strong></p>
                </div>
                <div className="bg-white/5 rounded-xl p-4">
                  <p className="text-white/70"><strong>Step 4:</strong> Convert to percentage</p>
                  <p className="text-white/60 font-mono text-sm mt-1">VD% = (5.34 / 480) × 100 = <strong>1.11%</strong></p>
                </div>
              </div>

              <div className="bg-green-900/20 border border-green-500/30 rounded-xl p-6 my-6">
                <h3 className="font-semibold text-green-400 mb-2">Result: PASSES 3% Rule</h3>
                <p className="text-white/70">
                  At 1.11% voltage drop, this circuit is well within the 3% NEC recommendation.
                </p>
              </div>
            </section>

            <section id="circular-mils" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Wire Gauge Circular Mils Table</h2>
              <p className="text-white/80 mb-4">
                Reference table for common wire gauges (from NEC Chapter 9, Table 8):
              </p>
              <div className="overflow-x-auto my-6">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-white/20">
                      <th className="text-left py-3 px-4 text-white/60">AWG/kcmil</th>
                      <th className="text-left py-3 px-4 text-white/60">Circular Mils (CM)</th>
                      <th className="text-left py-3 px-4 text-white/60">Typical Use</th>
                    </tr>
                  </thead>
                  <tbody className="text-white/80">
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">14 AWG</td>
                      <td className="py-3 px-4 font-mono">4110</td>
                      <td className="py-3 px-4 text-white/60">15A lighting circuits</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">12 AWG</td>
                      <td className="py-3 px-4 font-mono">6530</td>
                      <td className="py-3 px-4 text-white/60">20A receptacle circuits</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">10 AWG</td>
                      <td className="py-3 px-4 font-mono">10380</td>
                      <td className="py-3 px-4 text-white/60">30A circuits, dryers</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">8 AWG</td>
                      <td className="py-3 px-4 font-mono">16510</td>
                      <td className="py-3 px-4 text-white/60">40A circuits, ranges</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">6 AWG</td>
                      <td className="py-3 px-4 font-mono">26240</td>
                      <td className="py-3 px-4 text-white/60">50-55A circuits</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">4 AWG</td>
                      <td className="py-3 px-4 font-mono">41740</td>
                      <td className="py-3 px-4 text-white/60">65-70A circuits</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">2 AWG</td>
                      <td className="py-3 px-4 font-mono">66360</td>
                      <td className="py-3 px-4 text-white/60">90-95A circuits</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">1 AWG</td>
                      <td className="py-3 px-4 font-mono">83690</td>
                      <td className="py-3 px-4 text-white/60">110A circuits</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">1/0 AWG</td>
                      <td className="py-3 px-4 font-mono">105600</td>
                      <td className="py-3 px-4 text-white/60">125A circuits</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">2/0 AWG</td>
                      <td className="py-3 px-4 font-mono">133100</td>
                      <td className="py-3 px-4 text-white/60">145A circuits</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">3/0 AWG</td>
                      <td className="py-3 px-4 font-mono">167800</td>
                      <td className="py-3 px-4 text-white/60">165A circuits</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4">4/0 AWG</td>
                      <td className="py-3 px-4 font-mono">211600</td>
                      <td className="py-3 px-4 text-white/60">195A circuits</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section id="when-to-upsize" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">When to Upsize Conductors</h2>
              <p className="text-white/80 mb-4">
                You should consider upsizing conductors for voltage drop when:
              </p>
              <ul className="list-disc list-inside text-white/70 space-y-2 mb-6">
                <li>Wire runs exceed 100 feet</li>
                <li>Calculated voltage drop exceeds 3% on branch circuits</li>
                <li>Total feeder + branch circuit drop exceeds 5%</li>
                <li>Sensitive electronic equipment is being powered</li>
                <li>Motor loads require full starting voltage</li>
                <li>LED lighting circuits (LEDs are sensitive to voltage variations)</li>
              </ul>

              <div className="bg-purple-900/30 rounded-xl p-6 my-6">
                <h3 className="font-semibold text-purple-400 mb-3">Pro Tip: The 100-Foot Rule of Thumb</h3>
                <p className="text-white/70">
                  For quick field estimates: If your wire run exceeds 100 feet at full circuit load, you likely need to upsize. Always verify with calculation, but this rule catches most voltage drop issues before they become inspection problems.
                </p>
              </div>
            </section>

            {/* CTA Section */}
            <section className="bg-gradient-to-r from-purple-900/30 to-cyan-900/30 rounded-2xl p-8 my-12">
              <h2 className="text-2xl font-display font-bold mb-4 text-center">
                Calculate Voltage Drop Instantly
              </h2>
              <p className="text-white/70 mb-6 text-center">
                Skip the manual calculations. Ampora's voltage drop calculator handles single-phase and three-phase circuits automatically, with NEC-compliant recommendations.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link
                  href="/calculators/voltage-drop"
                  className="px-6 py-3 bg-purple-600 text-white font-semibold rounded-full hover:bg-purple-500 transition-colors text-center"
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
                <Link href="/blog/wire-sizing-guide-nec-ampacity-tables" className="bg-white/5 hover:bg-white/10 rounded-xl p-6 transition-colors">
                  <span className="text-cyan-400 text-sm">Calculations</span>
                  <h3 className="font-semibold mt-2">Wire Sizing Guide: NEC Ampacity Tables</h3>
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
