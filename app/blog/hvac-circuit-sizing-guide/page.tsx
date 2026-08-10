import { Metadata } from "next";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import { BlogPostingJsonLd, BreadcrumbJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "HVAC Circuit Sizing: How to Size Circuits for AC Units & Heat Pumps",
  description: "Complete guide to HVAC circuit sizing for air conditioners and heat pumps. Learn how to read equipment nameplates, calculate MCA (Minimum Circuit Ampacity) and MOP (Maximum Overcurrent Protection), select the correct breaker size and wire gauge, handle heat pump backup strip loads, meet disconnect requirements, and calculate voltage drop for long condenser runs per NEC Article 440.",
  keywords: [
    "hvac circuit sizing",
    "ac unit breaker size",
    "heat pump circuit size",
    "MCA minimum circuit ampacity",
    "MOP maximum overcurrent protection",
    "air conditioner wire size",
    "hvac breaker sizing",
    "condenser circuit requirements",
    "ac unit electrical requirements",
    "heat pump electrical"
  ],
  alternates: {
    canonical: "https://amporalabs.com/blog/hvac-circuit-sizing-guide",
  },
  openGraph: {
    title: "HVAC Circuit Sizing: How to Size Circuits for AC Units & Heat Pumps - Ampora",
    description: "Master HVAC circuit sizing with this comprehensive guide covering MCA, MOP, nameplate data, breaker sizing, wire sizing for air conditioners and heat pumps per NEC Article 440.",
    url: "https://amporalabs.com/blog/hvac-circuit-sizing-guide",
    type: "article",
    publishedTime: "2026-03-04",
  },
};

function HeroIllustration() {
  return (
    <svg viewBox="0 0 400 180" className="w-full h-40 md:h-48" aria-label="AC condenser unit with circuit sizing diagram showing MCA and MOP values">
      {/* Background */}
      <rect x="10" y="10" width="380" height="160" rx="4" fill="#1f2937" stroke="#374151" strokeWidth="1"/>

      {/* Condenser Unit */}
      <g transform="translate(30, 25)">
        {/* Unit Body */}
        <rect x="0" y="20" width="110" height="110" rx="6" fill="#374151" stroke="#6b7280" strokeWidth="1.5"/>

        {/* Fan Grille */}
        <circle cx="55" cy="65" r="35" fill="none" stroke="#9ca3af" strokeWidth="1"/>
        <circle cx="55" cy="65" r="28" fill="none" stroke="#9ca3af" strokeWidth="0.5"/>
        <circle cx="55" cy="65" r="20" fill="none" stroke="#9ca3af" strokeWidth="0.5"/>
        <circle cx="55" cy="65" r="12" fill="none" stroke="#9ca3af" strokeWidth="0.5"/>
        {/* Fan Blades */}
        <line x1="55" y1="37" x2="55" y2="93" stroke="#6b7280" strokeWidth="1.5"/>
        <line x1="27" y1="65" x2="83" y2="65" stroke="#6b7280" strokeWidth="1.5"/>
        <line x1="35" y1="45" x2="75" y2="85" stroke="#6b7280" strokeWidth="1.5"/>
        <line x1="75" y1="45" x2="35" y2="85" stroke="#6b7280" strokeWidth="1.5"/>
        {/* Center Hub */}
        <circle cx="55" cy="65" r="5" fill="#4b5563" stroke="#9ca3af" strokeWidth="1"/>

        {/* Refrigerant Lines */}
        <line x1="95" y1="115" x2="115" y2="115" stroke="#60a5fa" strokeWidth="3" strokeLinecap="round"/>
        <line x1="95" y1="105" x2="115" y2="105" stroke="#f87171" strokeWidth="2" strokeLinecap="round"/>

        {/* Label */}
        <text x="55" y="15" textAnchor="middle" fill="#9ca3af" fontSize="7" fontWeight="bold">CONDENSER UNIT</text>

        {/* Nameplate */}
        <rect x="10" y="100" width="70" height="24" rx="2" fill="#1f2937" stroke="#6b7280" strokeWidth="0.5"/>
        <text x="45" y="110" textAnchor="middle" fill="#fbbf24" fontSize="5" fontWeight="bold">NAMEPLATE DATA</text>
        <text x="45" y="118" textAnchor="middle" fill="#9ca3af" fontSize="4">RLA 18.2A | MCA 22.0A</text>
      </g>

      {/* Wiring Path */}
      <g>
        <line x1="155" y1="90" x2="185" y2="90" stroke="#f59e0b" strokeWidth="2" strokeDasharray="4,2"/>
        <line x1="185" y1="90" x2="185" y2="50" stroke="#f59e0b" strokeWidth="2" strokeDasharray="4,2"/>
        <line x1="185" y1="50" x2="215" y2="50" stroke="#f59e0b" strokeWidth="2" strokeDasharray="4,2"/>
      </g>

      {/* Disconnect Box */}
      <g transform="translate(215, 30)">
        <rect x="0" y="0" width="45" height="55" rx="3" fill="#374151" stroke="#f59e0b" strokeWidth="1.5"/>
        <text x="22.5" y="14" textAnchor="middle" fill="#f59e0b" fontSize="6" fontWeight="bold">DISC</text>
        <line x1="10" y1="22" x2="35" y2="22" stroke="#f59e0b" strokeWidth="0.5"/>
        {/* Switch Handle */}
        <rect x="15" y="26" width="15" height="20" rx="2" fill="#1f2937" stroke="#f59e0b" strokeWidth="1"/>
        <text x="22.5" y="38" textAnchor="middle" fill="#f59e0b" fontSize="5">ON</text>
      </g>

      {/* Wire to Panel */}
      <g>
        <line x1="260" y1="57" x2="290" y2="57" stroke="#f59e0b" strokeWidth="2" strokeDasharray="4,2"/>
      </g>

      {/* Panel / Breaker */}
      <g transform="translate(290, 20)">
        <rect x="0" y="0" width="85" height="140" rx="4" fill="#374151" stroke="#6b7280" strokeWidth="1.5"/>
        <text x="42.5" y="15" textAnchor="middle" fill="#e5e7eb" fontSize="7" fontWeight="bold">PANEL</text>
        <line x1="10" y1="22" x2="75" y2="22" stroke="#6b7280" strokeWidth="0.5"/>

        {/* Breaker Slots */}
        <rect x="10" y="28" width="65" height="14" rx="2" fill="#1f2937" stroke="#6b7280" strokeWidth="0.5"/>
        <text x="42.5" y="38" textAnchor="middle" fill="#9ca3af" fontSize="5">20A</text>

        <rect x="10" y="46" width="65" height="14" rx="2" fill="#f59e0b" fillOpacity="0.2" stroke="#f59e0b" strokeWidth="1"/>
        <text x="42.5" y="56" textAnchor="middle" fill="#f59e0b" fontSize="5" fontWeight="bold">30A - HVAC</text>

        <rect x="10" y="64" width="65" height="14" rx="2" fill="#1f2937" stroke="#6b7280" strokeWidth="0.5"/>
        <text x="42.5" y="74" textAnchor="middle" fill="#9ca3af" fontSize="5">20A</text>

        <rect x="10" y="82" width="65" height="14" rx="2" fill="#1f2937" stroke="#6b7280" strokeWidth="0.5"/>
        <text x="42.5" y="92" textAnchor="middle" fill="#9ca3af" fontSize="5">15A</text>

        {/* Sizing Info */}
        <text x="42.5" y="110" textAnchor="middle" fill="#22d3ee" fontSize="5.5" fontWeight="bold">MOP: 30A</text>
        <text x="42.5" y="120" textAnchor="middle" fill="#22d3ee" fontSize="5.5" fontWeight="bold">Wire: 10 AWG</text>
        <text x="42.5" y="130" textAnchor="middle" fill="#22d3ee" fontSize="5.5" fontWeight="bold">MCA: 22.0A</text>
      </g>
    </svg>
  );
}

export default function HvacCircuitSizingGuidePage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navigation />
      <div className="pt-20">
        <BreadcrumbJsonLd
          items={[
            { name: "Home", url: "https://amporalabs.com" },
            { name: "Blog", url: "https://amporalabs.com/blog" },
            { name: "HVAC Circuit Sizing Guide", url: "https://amporalabs.com/blog/hvac-circuit-sizing-guide" },
          ]}
        />
        <BlogPostingJsonLd
          headline="HVAC Circuit Sizing: How to Size Circuits for AC Units & Heat Pumps"
          description="Complete guide to HVAC circuit sizing covering MCA, MOP, nameplate data, breaker sizing, wire sizing for air conditioners and heat pumps per NEC Article 440."
          datePublished="2026-03-04"
          dateModified="2026-03-04"
          url="https://amporalabs.com/blog/hvac-circuit-sizing-guide"
          wordCount={4800}
          keywords={["hvac circuit sizing", "MCA", "MOP", "ac unit breaker size", "heat pump circuit size"]}
        />

        <article className="max-w-4xl mx-auto px-6 py-12">
          {/* Breadcrumb */}
          <nav className="text-sm text-white/60 mb-8">
            <Link href="/" className="hover:text-white">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/blog" className="hover:text-white">Blog</Link>
            <span className="mx-2">/</span>
            <span className="text-white">HVAC Circuit Sizing Guide</span>
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
              HVAC Circuit Sizing: How to Size Circuits for AC Units &amp; Heat Pumps
            </h1>
            <p className="text-xl text-white/70">
              Sizing HVAC circuits correctly is one of the most common tasks electricians face, and getting it wrong means failed inspections or equipment damage. This guide walks you through reading equipment nameplates, calculating MCA and MOP, selecting the right breaker and wire size, handling heat pump backup strip loads, meeting disconnect requirements, and avoiding the most frequent mistakes &mdash; all per NEC Article 440.
            </p>
          </header>

          <div className="mb-12 bg-gradient-to-br from-amber-900/20 to-cyan-900/20 rounded-2xl p-6 border border-white/10">
            <HeroIllustration />
          </div>

          {/* Pro Tip Box */}
          <div className="bg-amber-900/30 border-2 border-amber-500/40 rounded-2xl p-6 mb-12">
            <div className="flex items-start gap-4">
              <div className="text-3xl">&#9889;</div>
              <div>
                <h3 className="font-display font-bold text-lg mb-2 text-amber-400">Key Principle</h3>
                <p className="text-white/80 text-sm">
                  HVAC equipment always tells you exactly how to size its circuit. The <strong>MCA (Minimum Circuit Ampacity)</strong> determines your wire size, and the <strong>MOP (Maximum Overcurrent Protection)</strong> determines your breaker size. These values are on the equipment nameplate &mdash; never size an HVAC circuit from the unit&apos;s RLA or FLA alone.
                </p>
              </div>
            </div>
          </div>

          {/* Table of Contents */}
          <div className="bg-white/5 rounded-2xl p-6 mb-12">
            <h2 className="font-display font-bold mb-4">In This Guide</h2>
            <ul className="space-y-2 text-white/70">
              <li><a href="#reading-nameplates" className="hover:text-purple-400">Reading HVAC Equipment Nameplates</a></li>
              <li><a href="#mca-and-mop" className="hover:text-purple-400">Understanding MCA and MOP</a></li>
              <li><a href="#wire-sizing" className="hover:text-purple-400">Wire Sizing Based on MCA (125% Rule)</a></li>
              <li><a href="#breaker-sizing" className="hover:text-purple-400">Breaker Sizing Based on MOP</a></li>
              <li><a href="#common-ac-circuits" className="hover:text-purple-400">Common AC Unit Sizes and Typical Circuits</a></li>
              <li><a href="#heat-pump-considerations" className="hover:text-purple-400">Heat Pump Considerations (Backup Heat Strips)</a></li>
              <li><a href="#disconnect-requirements" className="hover:text-purple-400">Disconnect Requirements</a></li>
              <li><a href="#voltage-drop" className="hover:text-purple-400">Voltage Drop for Long Condenser Runs</a></li>
              <li><a href="#step-by-step" className="hover:text-purple-400">Step-by-Step Sizing Example</a></li>
              <li><a href="#common-mistakes" className="hover:text-purple-400">Common Mistakes to Avoid</a></li>
            </ul>
          </div>

          {/* Article Content */}
          <div className="prose prose-invert prose-lg max-w-none">

            <section id="reading-nameplates" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Reading HVAC Equipment Nameplates</h2>
              <p className="text-white/80 mb-4">
                Every piece of HVAC equipment has a <strong>nameplate</strong> (also called a data plate or rating plate) that provides all the electrical information you need to size the circuit. The nameplate is typically a metal or adhesive label attached to the unit near the electrical connection point or on the access panel. Learning to read it correctly is the foundation of proper HVAC circuit sizing.
              </p>

              <div className="bg-white/5 rounded-xl p-6 my-6">
                <h4 className="font-semibold text-white mb-3">Key Nameplate Values for Circuit Sizing</h4>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <span className="text-amber-400 font-bold font-mono text-sm min-w-[60px]">RLA</span>
                    <div>
                      <p className="text-white/80 text-sm"><strong>Rated Load Amps</strong> &mdash; The current the compressor draws at rated conditions (design load, rated voltage). This is NOT what you use to size the circuit. It is the expected running current under full-load design conditions.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-amber-400 font-bold font-mono text-sm min-w-[60px]">FLA</span>
                    <div>
                      <p className="text-white/80 text-sm"><strong>Full Load Amps</strong> &mdash; Similar to RLA but used for fan motors. Represents the current drawn at the motor&apos;s rated horsepower and voltage.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-amber-400 font-bold font-mono text-sm min-w-[60px]">LRA</span>
                    <div>
                      <p className="text-white/80 text-sm"><strong>Locked Rotor Amps</strong> &mdash; The maximum inrush current the compressor draws at startup. Can be 4&ndash;6 times the RLA. Used by the manufacturer to calculate MOP but not directly used by electricians for circuit sizing.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-cyan-400 font-bold font-mono text-sm min-w-[60px]">MCA</span>
                    <div>
                      <p className="text-white/80 text-sm"><strong>Minimum Circuit Ampacity</strong> &mdash; The minimum ampacity your circuit conductors must have. This is the value you use to select wire size. It already includes the NEC-required 125% multiplier on the largest motor.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-cyan-400 font-bold font-mono text-sm min-w-[60px]">MOP</span>
                    <div>
                      <p className="text-white/80 text-sm"><strong>Maximum Overcurrent Protection</strong> &mdash; The largest breaker or fuse size you can use. You can go smaller but never larger. This is the value you use to select your breaker.</p>
                    </div>
                  </div>
                </div>
              </div>

              <p className="text-white/80 mb-4">
                The manufacturer calculates MCA and MOP based on all the motors and loads inside the unit (compressor, condenser fan, control transformer, crankcase heater, etc.) per <strong>NEC Article 440</strong>. Your job as the electrician is straightforward: read the nameplate, size the wire from MCA, and size the breaker from MOP. Do not try to recalculate these values from the individual motor data.
              </p>

              <div className="bg-amber-900/20 rounded-xl p-6 my-6 border border-amber-500/20">
                <h4 className="font-semibold text-amber-400 mb-3">Sample Nameplate (3-Ton Split System Condenser)</h4>
                <div className="font-mono text-sm space-y-1 text-white/70">
                  <p>Model: 24ACC636A003 &nbsp;&nbsp; Serial: 4321A98765</p>
                  <p>Voltage: 208/230V &nbsp;&nbsp; Phase: 1 &nbsp;&nbsp; Hz: 60</p>
                  <p>Compressor RLA: 18.2A &nbsp;&nbsp; Compressor LRA: 104A</p>
                  <p>Fan Motor FLA: 1.5A</p>
                  <p className="text-cyan-400 font-bold">MCA: 22.0A &nbsp;&nbsp;&nbsp; MOP: 30A (HACR breaker or fuse)</p>
                  <p>Refrigerant: R-410A &nbsp;&nbsp; Charge: 106 oz</p>
                </div>
              </div>
            </section>

            <section id="mca-and-mop" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Understanding MCA and MOP</h2>
              <p className="text-white/80 mb-4">
                <strong>MCA</strong> and <strong>MOP</strong> are the two most important numbers on the nameplate for electrical work. Understanding how the manufacturer derives these values helps you make confident decisions in the field.
              </p>

              <h3 className="text-xl font-display font-semibold mb-3 text-cyan-400">How MCA Is Calculated</h3>
              <p className="text-white/80 mb-4">
                Per NEC 440.33, the manufacturer calculates MCA by taking <strong>125% of the largest motor&apos;s rated-load current</strong> plus the sum of all other motor and load currents in the unit. This 125% factor accounts for continuous operation and ensures the conductors can handle sustained load without overheating.
              </p>

              <div className="bg-white/5 rounded-xl p-6 my-6">
                <h4 className="font-semibold text-white mb-3">MCA Formula</h4>
                <p className="font-mono text-cyan-400 text-center text-lg mb-3">
                  MCA = (Largest Motor RLA &times; 1.25) + All Other Motor FLAs + Other Loads
                </p>
                <p className="text-white/60 text-sm">
                  <strong>Example:</strong> Compressor RLA = 18.2A, Fan Motor FLA = 1.5A<br/>
                  MCA = (18.2 &times; 1.25) + 1.5 = 22.75 + 1.5 = 24.25A &rarr; listed as ~22.0A on nameplate
                </p>
                <p className="text-white/50 text-xs mt-2">
                  Note: Manufacturers may calculate MCA slightly differently depending on internal loads (crankcase heater, control transformer, etc.). Always use the nameplate MCA, not your own calculation.
                </p>
              </div>

              <h3 className="text-xl font-display font-semibold mb-3 text-cyan-400">How MOP Is Calculated</h3>
              <p className="text-white/80 mb-4">
                Per NEC 440.22, the manufacturer calculates MOP based on the <strong>largest motor&apos;s branch-circuit short-circuit and ground-fault protection rating</strong> plus the sum of other motor FLAs. The MOP must be large enough to handle the compressor&apos;s locked-rotor inrush current without nuisance tripping, but no larger than necessary.
              </p>

              <div className="grid md:grid-cols-2 gap-6 my-6">
                <div className="bg-cyan-900/30 rounded-xl p-6">
                  <h3 className="font-semibold text-cyan-400 mb-3">MCA Determines Wire Size</h3>
                  <ul className="text-white/60 text-sm space-y-2">
                    <li>Select wire with ampacity <strong>&ge; MCA</strong></li>
                    <li>Use NEC Table 310.16 at 75&deg;C column (for most applications)</li>
                    <li>Already includes the 125% factor</li>
                    <li>Account for temperature correction and conduit fill if needed</li>
                    <li>Check <Link href="/blog/how-to-calculate-voltage-drop" className="text-cyan-400 underline hover:text-cyan-300">voltage drop</Link> for long runs</li>
                  </ul>
                </div>
                <div className="bg-amber-900/30 rounded-xl p-6">
                  <h3 className="font-semibold text-amber-400 mb-3">MOP Determines Breaker Size</h3>
                  <ul className="text-white/60 text-sm space-y-2">
                    <li>Select breaker <strong>&le; MOP</strong></li>
                    <li>You can use a smaller breaker if it doesn&apos;t nuisance trip</li>
                    <li>Never exceed the MOP rating</li>
                    <li>Must be a standard breaker size per <Link href="/blog/nec-article-240-overcurrent-protection" className="text-amber-400 underline hover:text-amber-300">NEC 240.6</Link></li>
                    <li>HACR type is no longer a separate requirement (all modern breakers qualify)</li>
                  </ul>
                </div>
              </div>

              <div className="bg-red-900/30 rounded-xl p-6 my-6 border border-red-500/20">
                <h4 className="font-semibold text-red-400 mb-3">Critical Rule: Breaker Can Exceed Wire Ampacity</h4>
                <p className="text-white/70 text-sm">
                  With HVAC circuits, it is <strong>normal and code-compliant</strong> for the breaker to be larger than the wire&apos;s ampacity rating. For example, a unit with MCA 22.0A and MOP 30A uses 10 AWG wire (rated 30A at 75&deg;C), which works out evenly. But a unit with MCA 26.4A and MOP 45A would use 10 AWG wire (30A ampacity) with a 45A breaker &mdash; and that is perfectly legal per NEC 440.22(a). The compressor&apos;s internal overload protects the motor; the breaker protects against short circuits and ground faults only.
                </p>
              </div>
            </section>

            <section id="wire-sizing" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Wire Sizing Based on MCA (125% Rule)</h2>
              <p className="text-white/80 mb-4">
                To select the correct wire size, you need conductors with an ampacity rating that meets or exceeds the nameplate MCA. Use <Link href="/blog/wire-sizing-guide-nec-ampacity-tables" className="text-cyan-400 underline hover:text-cyan-300">NEC Table 310.16</Link> to look up conductor ampacity based on the insulation type and installation conditions.
              </p>

              <h3 className="text-xl font-display font-semibold mb-3 text-cyan-400">NEC Table 310.16 &mdash; Common HVAC Wire Sizes (Copper, 75&deg;C)</h3>
              <div className="overflow-x-auto my-6">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-white/20">
                      <th className="text-left py-3 px-4 text-white/60">Wire Size (AWG)</th>
                      <th className="text-left py-3 px-4 text-white/60">Ampacity at 75&deg;C</th>
                      <th className="text-left py-3 px-4 text-white/60">Suitable for MCA Up To</th>
                    </tr>
                  </thead>
                  <tbody className="text-white/80">
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-mono text-amber-400">14 AWG</td>
                      <td className="py-3 px-4 font-mono text-cyan-400">20A</td>
                      <td className="py-3 px-4">20.0A</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-mono text-amber-400">12 AWG</td>
                      <td className="py-3 px-4 font-mono text-cyan-400">25A</td>
                      <td className="py-3 px-4">25.0A</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-mono text-amber-400">10 AWG</td>
                      <td className="py-3 px-4 font-mono text-cyan-400">35A</td>
                      <td className="py-3 px-4">35.0A</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-mono text-amber-400">8 AWG</td>
                      <td className="py-3 px-4 font-mono text-cyan-400">50A</td>
                      <td className="py-3 px-4">50.0A</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-mono text-amber-400">6 AWG</td>
                      <td className="py-3 px-4 font-mono text-cyan-400">65A</td>
                      <td className="py-3 px-4">65.0A</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-mono text-amber-400">4 AWG</td>
                      <td className="py-3 px-4 font-mono text-cyan-400">85A</td>
                      <td className="py-3 px-4">85.0A</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="bg-white/5 rounded-xl p-6 my-6">
                <h4 className="font-semibold text-white mb-3">Wire Selection Process</h4>
                <ol className="text-white/70 space-y-2 text-sm list-decimal list-inside">
                  <li>Read the <strong>MCA</strong> from the equipment nameplate</li>
                  <li>Look up conductor ampacity in NEC Table 310.16 (75&deg;C column for THWN-2/THHN)</li>
                  <li>Select wire where <strong>ampacity &ge; MCA</strong></li>
                  <li>Apply derating factors if more than 3 current-carrying conductors in conduit or ambient temperature exceeds 86&deg;F (30&deg;C)</li>
                  <li>Check voltage drop for runs over 50 feet &mdash; increase wire size if drop exceeds 3%</li>
                </ol>
              </div>

              <p className="text-white/80 mb-4">
                <strong>Conductor type matters.</strong> Most HVAC circuits use THHN/THWN-2 copper conductors pulled in conduit, or Type NM-B (Romex) for indoor air handler runs. For outdoor condenser whips, use flexible liquid-tight conduit (LFMC) with THHN conductors, or a UL-listed AC condenser whip assembly. For a detailed breakdown of conductor types, see our <Link href="/blog/wire-sizing-guide-nec-ampacity-tables" className="text-cyan-400 underline hover:text-cyan-300">wire sizing guide with NEC ampacity tables</Link>.
              </p>
            </section>

            <section id="breaker-sizing" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Breaker Sizing Based on MOP</h2>
              <p className="text-white/80 mb-4">
                The <strong>MOP (Maximum Overcurrent Protection)</strong> on the nameplate sets the upper limit for your breaker or fuse size. Select a standard breaker size that is <strong>equal to or less than</strong> the MOP. Per <Link href="/blog/nec-article-240-overcurrent-protection" className="text-amber-400 underline hover:text-amber-300">NEC 240.6(A)</Link>, standard breaker sizes are: 15, 20, 25, 30, 35, 40, 45, 50, 60, 70, 80, 90, 100A, and so on.
              </p>

              <div className="bg-white/5 rounded-xl p-6 my-6">
                <h4 className="font-semibold text-white mb-3">Breaker Selection Rules</h4>
                <div className="space-y-3">
                  <div className="bg-green-900/20 rounded-lg p-4 border border-green-500/20">
                    <p className="text-green-400 font-semibold text-sm">Rule 1: Never exceed MOP</p>
                    <p className="text-white/60 text-sm">If MOP = 30A, you can use a 30A, 25A, or 20A breaker. You cannot use 35A or 40A.</p>
                  </div>
                  <div className="bg-green-900/20 rounded-lg p-4 border border-green-500/20">
                    <p className="text-green-400 font-semibold text-sm">Rule 2: Use the next standard size down if MOP is not a standard size</p>
                    <p className="text-white/60 text-sm">If MOP = 28A, use a 25A breaker (the next standard size at or below 28A).</p>
                  </div>
                  <div className="bg-green-900/20 rounded-lg p-4 border border-green-500/20">
                    <p className="text-green-400 font-semibold text-sm">Rule 3: Go smaller if possible</p>
                    <p className="text-white/60 text-sm">A smaller breaker provides better short-circuit protection. Only go up toward the MOP if the smaller breaker trips on startup inrush.</p>
                  </div>
                  <div className="bg-green-900/20 rounded-lg p-4 border border-green-500/20">
                    <p className="text-green-400 font-semibold text-sm">Rule 4: Match breaker type to panel</p>
                    <p className="text-white/60 text-sm">Use the correct breaker type for your panel brand (not all brands are interchangeable). Two-pole for 240V circuits.</p>
                  </div>
                </div>
              </div>

              <p className="text-white/80 mb-4">
                <strong>HACR breakers:</strong> Older nameplates may specify &ldquo;HACR&rdquo; (Heating, Air Conditioning, Refrigeration) type breakers. Since 2005, all UL 489-listed circuit breakers are rated for HACR duty. If you see &ldquo;HACR&rdquo; on the nameplate, any modern residential or commercial breaker satisfies the requirement.
              </p>

              <div className="bg-purple-900/30 rounded-xl p-6 my-6">
                <h4 className="font-semibold text-purple-400 mb-3">Fuses vs. Breakers</h4>
                <p className="text-white/70 text-sm mb-2">
                  Some nameplates specify &ldquo;Maximum Fuse Size&rdquo; and &ldquo;Maximum Breaker Size&rdquo; separately. The fuse MOP may be larger than the breaker MOP because time-delay fuses handle motor inrush differently than breakers. Always use the correct value for your protective device type. If the nameplate lists a single MOP, it applies to both fuses and breakers.
                </p>
              </div>
            </section>

            <section id="common-ac-circuits" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Common AC Unit Sizes and Typical Circuits</h2>
              <p className="text-white/80 mb-4">
                While you must always refer to the specific equipment nameplate, the following table shows <strong>typical</strong> circuit requirements for common residential and light commercial air conditioning condensers. These are approximate &mdash; actual values vary by manufacturer, efficiency rating (SEER), and refrigerant type.
              </p>

              <div className="overflow-x-auto my-6">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-white/20">
                      <th className="text-left py-3 px-4 text-white/60">Unit Size</th>
                      <th className="text-left py-3 px-4 text-white/60">BTU/hr</th>
                      <th className="text-left py-3 px-4 text-white/60">Typical MCA</th>
                      <th className="text-left py-3 px-4 text-white/60">Typical MOP</th>
                      <th className="text-left py-3 px-4 text-white/60">Wire Size</th>
                      <th className="text-left py-3 px-4 text-white/60">Breaker</th>
                    </tr>
                  </thead>
                  <tbody className="text-white/80">
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-semibold">1.5 Ton</td>
                      <td className="py-3 px-4">18,000</td>
                      <td className="py-3 px-4 font-mono text-cyan-400">11&ndash;14A</td>
                      <td className="py-3 px-4 font-mono text-amber-400">15&ndash;20A</td>
                      <td className="py-3 px-4 font-mono">14 AWG</td>
                      <td className="py-3 px-4 font-mono">15&ndash;20A</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-semibold">2 Ton</td>
                      <td className="py-3 px-4">24,000</td>
                      <td className="py-3 px-4 font-mono text-cyan-400">13&ndash;17A</td>
                      <td className="py-3 px-4 font-mono text-amber-400">20&ndash;25A</td>
                      <td className="py-3 px-4 font-mono">12 AWG</td>
                      <td className="py-3 px-4 font-mono">20&ndash;25A</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-semibold">2.5 Ton</td>
                      <td className="py-3 px-4">30,000</td>
                      <td className="py-3 px-4 font-mono text-cyan-400">15&ndash;19A</td>
                      <td className="py-3 px-4 font-mono text-amber-400">20&ndash;30A</td>
                      <td className="py-3 px-4 font-mono">12&ndash;10 AWG</td>
                      <td className="py-3 px-4 font-mono">20&ndash;30A</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-semibold">3 Ton</td>
                      <td className="py-3 px-4">36,000</td>
                      <td className="py-3 px-4 font-mono text-cyan-400">18&ndash;23A</td>
                      <td className="py-3 px-4 font-mono text-amber-400">25&ndash;35A</td>
                      <td className="py-3 px-4 font-mono">10 AWG</td>
                      <td className="py-3 px-4 font-mono">25&ndash;35A</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-semibold">3.5 Ton</td>
                      <td className="py-3 px-4">42,000</td>
                      <td className="py-3 px-4 font-mono text-cyan-400">20&ndash;26A</td>
                      <td className="py-3 px-4 font-mono text-amber-400">30&ndash;40A</td>
                      <td className="py-3 px-4 font-mono">10 AWG</td>
                      <td className="py-3 px-4 font-mono">30&ndash;40A</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-semibold">4 Ton</td>
                      <td className="py-3 px-4">48,000</td>
                      <td className="py-3 px-4 font-mono text-cyan-400">24&ndash;30A</td>
                      <td className="py-3 px-4 font-mono text-amber-400">35&ndash;45A</td>
                      <td className="py-3 px-4 font-mono">10&ndash;8 AWG</td>
                      <td className="py-3 px-4 font-mono">35&ndash;45A</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-semibold">5 Ton</td>
                      <td className="py-3 px-4">60,000</td>
                      <td className="py-3 px-4 font-mono text-cyan-400">28&ndash;38A</td>
                      <td className="py-3 px-4 font-mono text-amber-400">40&ndash;60A</td>
                      <td className="py-3 px-4 font-mono">8&ndash;6 AWG</td>
                      <td className="py-3 px-4 font-mono">40&ndash;60A</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="bg-amber-900/20 rounded-xl p-6 my-6 border border-amber-500/20">
                <h4 className="font-semibold text-amber-400 mb-3">Important Disclaimer</h4>
                <p className="text-white/70 text-sm">
                  These are <strong>typical ranges only</strong>. A high-efficiency 5-ton unit may draw less current than an older standard-efficiency 4-ton unit. Two-stage and variable-speed compressors may have different characteristics than single-stage units. <strong>Always size from the actual equipment nameplate.</strong> Use this table only as a general reference or for planning and estimating purposes.
                </p>
              </div>
            </section>

            <section id="heat-pump-considerations" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Heat Pump Considerations (Backup Heat Strips)</h2>
              <p className="text-white/80 mb-4">
                Heat pumps add complexity to circuit sizing because they often include <strong>backup electric heat strips</strong> (also called auxiliary heat or emergency heat) in the indoor air handler. The outdoor heat pump unit and the indoor air handler with heat strips are typically on <strong>separate circuits</strong>, and each must be sized independently.
              </p>

              <div className="grid md:grid-cols-2 gap-6 my-6">
                <div className="bg-cyan-900/30 rounded-xl p-6">
                  <h3 className="font-semibold text-cyan-400 mb-3">Outdoor Heat Pump Unit</h3>
                  <ul className="text-white/60 text-sm space-y-2">
                    <li>Sized exactly like an AC condenser</li>
                    <li>Read MCA and MOP from outdoor unit nameplate</li>
                    <li>Typically 240V single-phase residential</li>
                    <li>Circuit is same as equivalent tonnage AC unit</li>
                    <li>Nameplate already accounts for defrost and reversing valve</li>
                  </ul>
                </div>
                <div className="bg-red-900/30 rounded-xl p-6">
                  <h3 className="font-semibold text-red-400 mb-3">Indoor Air Handler with Heat Strips</h3>
                  <ul className="text-white/60 text-sm space-y-2">
                    <li><strong>Separate circuit</strong> from outdoor unit</li>
                    <li>Heat strips can draw 20&ndash;60+ amps depending on kW rating</li>
                    <li>5kW strips = ~21A at 240V, 10kW = ~42A, 15kW = ~63A</li>
                    <li>Read MCA and MOP from the air handler nameplate</li>
                    <li>May require 8 AWG, 6 AWG, or even 4 AWG wire</li>
                  </ul>
                </div>
              </div>

              <h3 className="text-xl font-display font-semibold mb-3 text-cyan-400">Typical Heat Strip Circuit Sizing</h3>
              <div className="overflow-x-auto my-6">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-white/20">
                      <th className="text-left py-3 px-4 text-white/60">Heat Strip Size</th>
                      <th className="text-left py-3 px-4 text-white/60">Amps at 240V</th>
                      <th className="text-left py-3 px-4 text-white/60">Typical Wire</th>
                      <th className="text-left py-3 px-4 text-white/60">Typical Breaker</th>
                    </tr>
                  </thead>
                  <tbody className="text-white/80">
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">5 kW</td>
                      <td className="py-3 px-4 font-mono text-cyan-400">~20.8A</td>
                      <td className="py-3 px-4 font-mono">10 AWG</td>
                      <td className="py-3 px-4 font-mono">30A</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">7.5 kW</td>
                      <td className="py-3 px-4 font-mono text-cyan-400">~31.3A</td>
                      <td className="py-3 px-4 font-mono">8 AWG</td>
                      <td className="py-3 px-4 font-mono">40A</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">10 kW</td>
                      <td className="py-3 px-4 font-mono text-cyan-400">~41.7A</td>
                      <td className="py-3 px-4 font-mono">8&ndash;6 AWG</td>
                      <td className="py-3 px-4 font-mono">50&ndash;60A</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">15 kW</td>
                      <td className="py-3 px-4 font-mono text-cyan-400">~62.5A</td>
                      <td className="py-3 px-4 font-mono">6&ndash;4 AWG</td>
                      <td className="py-3 px-4 font-mono">70&ndash;80A</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4">20 kW</td>
                      <td className="py-3 px-4 font-mono text-cyan-400">~83.3A</td>
                      <td className="py-3 px-4 font-mono">4&ndash;3 AWG</td>
                      <td className="py-3 px-4 font-mono">90&ndash;100A</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="bg-red-900/30 rounded-xl p-6 my-6 border border-red-500/20">
                <h4 className="font-semibold text-red-400 mb-3">Don&apos;t Forget the Air Handler Circuit</h4>
                <p className="text-white/70 text-sm">
                  One of the most common errors in heat pump installations is planning for the outdoor unit circuit but forgetting to properly size the <strong>air handler circuit</strong>. A 3-ton heat pump with 10kW backup heat strips needs two separate 240V circuits: one for the outdoor unit (typically 30A) and one for the air handler (typically 50&ndash;60A). The air handler circuit is often the larger of the two. Always check both nameplates before ordering materials.
                </p>
              </div>

              <p className="text-white/80 mb-4">
                <strong>Package units</strong> (where the heat pump and heat strips are in one cabinet) will have a single nameplate with MCA and MOP that accounts for all internal loads. These units typically require larger circuits &mdash; a 3-ton package heat pump with 10kW strips commonly has an MCA around 48A and MOP of 60A, requiring 6 AWG wire and a 60A breaker.
              </p>
            </section>

            <section id="disconnect-requirements" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Disconnect Requirements</h2>
              <p className="text-white/80 mb-4">
                NEC 440.14 requires a <strong>disconnecting means</strong> within sight of the HVAC equipment and readily accessible. &ldquo;Within sight&rdquo; means visible and not more than 50 feet from the equipment. This disconnect protects the HVAC technician working on the unit by providing a local means to de-energize it. For a comprehensive look at disconnect rules, see our <Link href="/blog/disconnect-switch-requirements-nec" className="text-cyan-400 underline hover:text-cyan-300">disconnect switch requirements guide</Link>.
              </p>

              <div className="bg-white/5 rounded-xl p-6 my-6">
                <h4 className="font-semibold text-white mb-3">Disconnect Sizing Requirements</h4>
                <ul className="text-white/70 space-y-2 text-sm">
                  <li><strong>Ampere rating:</strong> Must be at least 115% of the nameplate rated-load current (RLA) of the equipment, per NEC 440.12(A)(1)</li>
                  <li><strong>HP rating:</strong> Must be rated for the equivalent horsepower if using a motor-rated switch</li>
                  <li><strong>Common choice:</strong> A fused or non-fused disconnect switch rated 30A, 60A, or as needed. A pull-out style disconnect is the most common for residential condensers</li>
                  <li><strong>Location:</strong> Within sight and within 50 feet of the unit. Cannot be inside the unit or behind the unit where it isn&apos;t accessible</li>
                  <li><strong>Type:</strong> Can be a switch, breaker, or pull-out block. Must open all ungrounded conductors simultaneously</li>
                </ul>
              </div>

              <div className="grid md:grid-cols-3 gap-4 my-6">
                <div className="bg-white/5 rounded-xl p-4 text-center">
                  <p className="text-amber-400 font-bold text-lg mb-1">Pull-Out</p>
                  <p className="text-white/60 text-sm">Most common for residential. Non-fused or fused. Simple and inexpensive. Rated 30A or 60A.</p>
                </div>
                <div className="bg-white/5 rounded-xl p-4 text-center">
                  <p className="text-amber-400 font-bold text-lg mb-1">Fused Disconnect</p>
                  <p className="text-white/60 text-sm">Provides additional overcurrent protection at the unit. Required if the MOP is lower than the branch circuit breaker.</p>
                </div>
                <div className="bg-white/5 rounded-xl p-4 text-center">
                  <p className="text-amber-400 font-bold text-lg mb-1">Breaker Disconnect</p>
                  <p className="text-white/60 text-sm">A weatherproof breaker enclosure. Serves as both disconnect and supplemental overcurrent protection.</p>
                </div>
              </div>

              <p className="text-white/80 mb-4">
                <strong>Exception:</strong> If the branch circuit breaker or disconnect is within sight and within 50 feet of the equipment, a separate disconnect at the unit is not required per NEC 440.14. However, most jurisdictions and best practice dictate installing a disconnect at every outdoor condenser for technician safety regardless of breaker visibility.
              </p>
            </section>

            <section id="voltage-drop" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Voltage Drop for Long Condenser Runs</h2>
              <p className="text-white/80 mb-4">
                Condenser units are often located far from the electrical panel &mdash; sometimes 75, 100, or even 150+ feet away. Long wire runs create <strong>voltage drop</strong>, which reduces the voltage available at the equipment. Low voltage causes the compressor to draw more current, run hotter, and can trigger low-voltage lockouts or premature compressor failure. For a detailed treatment of voltage drop calculations, see our <Link href="/blog/how-to-calculate-voltage-drop" className="text-cyan-400 underline hover:text-cyan-300">voltage drop calculation guide</Link>.
              </p>

              <div className="bg-white/5 rounded-xl p-6 my-6">
                <h4 className="font-semibold text-white mb-3">Voltage Drop Formula (Single-Phase)</h4>
                <p className="font-mono text-cyan-400 text-center text-lg mb-3">
                  VD = (2 &times; L &times; I &times; R) &divide; 1000
                </p>
                <div className="text-white/60 text-sm space-y-1">
                  <p><strong>VD</strong> = Voltage drop in volts</p>
                  <p><strong>L</strong> = One-way length of circuit in feet</p>
                  <p><strong>I</strong> = Current in amps (use MCA for worst-case)</p>
                  <p><strong>R</strong> = Resistance per 1,000 feet (from NEC Chapter 9, Table 8)</p>
                </div>
              </div>

              <h3 className="text-xl font-display font-semibold mb-3 text-cyan-400">Maximum Recommended Distances (3% VD, 240V, Copper)</h3>
              <div className="overflow-x-auto my-6">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-white/20">
                      <th className="text-left py-3 px-4 text-white/60">Wire Size</th>
                      <th className="text-left py-3 px-4 text-white/60">At 20A Load</th>
                      <th className="text-left py-3 px-4 text-white/60">At 30A Load</th>
                      <th className="text-left py-3 px-4 text-white/60">At 40A Load</th>
                    </tr>
                  </thead>
                  <tbody className="text-white/80">
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-mono text-amber-400">14 AWG</td>
                      <td className="py-3 px-4 font-mono">~58 ft</td>
                      <td className="py-3 px-4 font-mono">~39 ft</td>
                      <td className="py-3 px-4 font-mono text-red-400">~29 ft</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-mono text-amber-400">12 AWG</td>
                      <td className="py-3 px-4 font-mono">~92 ft</td>
                      <td className="py-3 px-4 font-mono">~61 ft</td>
                      <td className="py-3 px-4 font-mono">~46 ft</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-mono text-amber-400">10 AWG</td>
                      <td className="py-3 px-4 font-mono">~147 ft</td>
                      <td className="py-3 px-4 font-mono">~98 ft</td>
                      <td className="py-3 px-4 font-mono">~73 ft</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-mono text-amber-400">8 AWG</td>
                      <td className="py-3 px-4 font-mono">~234 ft</td>
                      <td className="py-3 px-4 font-mono">~156 ft</td>
                      <td className="py-3 px-4 font-mono">~117 ft</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-mono text-amber-400">6 AWG</td>
                      <td className="py-3 px-4 font-mono">~372 ft</td>
                      <td className="py-3 px-4 font-mono">~248 ft</td>
                      <td className="py-3 px-4 font-mono">~186 ft</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="bg-red-900/30 rounded-xl p-6 my-6 border border-red-500/20">
                <h4 className="font-semibold text-red-400 mb-3">Voltage Drop Tips for HVAC Circuits</h4>
                <ul className="text-white/70 space-y-2 text-sm">
                  <li><strong>NEC recommends 3% max on branch circuits</strong> and 5% total from service entrance to load. Most HVAC manufacturers specify a minimum operating voltage range (e.g., 197&ndash;253V for 230V equipment).</li>
                  <li><strong>Use MCA for the current value</strong> in your voltage drop calculation &mdash; this represents the maximum continuous current the circuit will carry.</li>
                  <li><strong>Upsize wire if needed:</strong> If 10 AWG satisfies the MCA but the run is 120 feet, switch to 8 AWG to keep voltage drop within limits.</li>
                  <li><strong>Document your calculation:</strong> Many inspectors want to see voltage drop calculations for HVAC runs over 100 feet.</li>
                </ul>
              </div>
            </section>

            <section id="step-by-step" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Step-by-Step Sizing Example</h2>
              <p className="text-white/80 mb-4">
                Let&apos;s walk through a complete HVAC circuit sizing example for a common residential installation: a <strong>3.5-ton split system air conditioner</strong> with the condenser located 85 feet from the main panel.
              </p>

              <div className="space-y-4 my-6">
                <div className="bg-white/5 rounded-xl p-6 border-l-4 border-amber-500">
                  <h4 className="font-semibold text-amber-400 mb-2">Step 1: Read the Nameplate</h4>
                  <div className="font-mono text-sm text-white/70 space-y-1">
                    <p>Model: XR16-042 &nbsp;&nbsp; 208/230V, 1-Phase, 60Hz</p>
                    <p>Compressor RLA: 21.5A &nbsp;&nbsp; LRA: 124A</p>
                    <p>Fan Motor FLA: 1.8A</p>
                    <p className="text-cyan-400 font-bold">MCA: 26.4A &nbsp;&nbsp; MOP: 40A</p>
                  </div>
                </div>

                <div className="bg-white/5 rounded-xl p-6 border-l-4 border-amber-500">
                  <h4 className="font-semibold text-amber-400 mb-2">Step 2: Select Wire Size from MCA</h4>
                  <p className="text-white/70 text-sm">
                    MCA = 26.4A. Look at NEC Table 310.16, 75&deg;C column:<br/>
                    &bull; 12 AWG = 25A &rarr; <span className="text-red-400">Not enough (25 &lt; 26.4)</span><br/>
                    &bull; 10 AWG = 35A &rarr; <span className="text-green-400">Good (35 &ge; 26.4)</span><br/>
                    <strong>Select 10 AWG THHN copper conductors.</strong>
                  </p>
                </div>

                <div className="bg-white/5 rounded-xl p-6 border-l-4 border-amber-500">
                  <h4 className="font-semibold text-amber-400 mb-2">Step 3: Select Breaker Size from MOP</h4>
                  <p className="text-white/70 text-sm">
                    MOP = 40A. Standard breaker sizes: ...30, 35, 40, 45...<br/>
                    &bull; 40A is a standard size and equals MOP exactly &rarr; <span className="text-green-400">Use 40A 2-pole breaker</span><br/>
                    <strong>Note:</strong> 10 AWG wire is rated 35A but the breaker is 40A. This is code-compliant per NEC 440.22(a) &mdash; the breaker protects against short circuits only, not motor overload.
                  </p>
                </div>

                <div className="bg-white/5 rounded-xl p-6 border-l-4 border-amber-500">
                  <h4 className="font-semibold text-amber-400 mb-2">Step 4: Check Voltage Drop (85-Foot Run)</h4>
                  <p className="text-white/70 text-sm">
                    Using the voltage drop formula for 10 AWG copper at 85 feet, 26.4A:<br/>
                    VD = (2 &times; 85 &times; 26.4 &times; 1.21) &divide; 1000 = <strong>5.44V</strong><br/>
                    Percentage: 5.44 &divide; 240 = <strong>2.27%</strong> &rarr; <span className="text-green-400">Under 3% limit &mdash; OK</span><br/>
                    10 AWG is adequate for this run length.
                  </p>
                </div>

                <div className="bg-white/5 rounded-xl p-6 border-l-4 border-amber-500">
                  <h4 className="font-semibold text-amber-400 mb-2">Step 5: Select Disconnect</h4>
                  <p className="text-white/70 text-sm">
                    &bull; Minimum disconnect rating: 115% &times; 21.5A (RLA) = 24.7A &rarr; 30A disconnect minimum<br/>
                    &bull; Since MOP is 40A, use a <strong>non-fused 60A pull-out disconnect</strong> (common stock size that exceeds requirements)<br/>
                    &bull; Mount within sight and within 50 feet of the condenser
                  </p>
                </div>

                <div className="bg-white/5 rounded-xl p-6 border-l-4 border-amber-500">
                  <h4 className="font-semibold text-amber-400 mb-2">Step 6: Summary &mdash; Material List</h4>
                  <div className="text-white/70 text-sm space-y-1">
                    <p>&bull; <strong>Wire:</strong> 10/2 with ground (NM-B for interior, THHN in conduit for exterior)</p>
                    <p>&bull; <strong>Breaker:</strong> 40A 2-pole</p>
                    <p>&bull; <strong>Disconnect:</strong> 60A non-fused pull-out</p>
                    <p>&bull; <strong>Conduit:</strong> 1/2&quot; LFMC (liquid-tight flex) for final connection whip, 6 ft typical</p>
                    <p>&bull; <strong>Grounding:</strong> 10 AWG equipment grounding conductor</p>
                  </div>
                </div>
              </div>
            </section>

            <section id="common-mistakes" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Common Mistakes to Avoid</h2>
              <p className="text-white/80 mb-4">
                HVAC circuit sizing errors are among the top reasons for failed electrical inspections. Here are the mistakes that trip up both new and experienced electricians:
              </p>

              <div className="grid md:grid-cols-2 gap-4 my-6">
                <div className="bg-red-900/20 rounded-xl p-6 border border-red-500/20">
                  <h4 className="font-semibold text-red-400 mb-3">Sizing from RLA Instead of MCA</h4>
                  <p className="text-white/60 text-sm">
                    Using the compressor RLA to calculate wire size instead of the nameplate MCA. The MCA already includes the 125% factor and accounts for all loads in the unit. Sizing from RLA alone will result in undersized conductors.
                  </p>
                </div>
                <div className="bg-red-900/20 rounded-xl p-6 border border-red-500/20">
                  <h4 className="font-semibold text-red-400 mb-3">Exceeding MOP</h4>
                  <p className="text-white/60 text-sm">
                    Installing a breaker larger than the nameplate MOP. If MOP = 35A, a 40A breaker is a code violation &mdash; even if you think the unit needs more startup capacity. The manufacturer determined the maximum safe breaker size.
                  </p>
                </div>
                <div className="bg-red-900/20 rounded-xl p-6 border border-red-500/20">
                  <h4 className="font-semibold text-red-400 mb-3">Sizing Wire from Breaker Size</h4>
                  <p className="text-white/60 text-sm">
                    Assuming the wire ampacity must match the breaker. In HVAC circuits, the breaker can legally exceed the wire ampacity. Match wire to MCA and breaker to MOP &mdash; they are independent decisions.
                  </p>
                </div>
                <div className="bg-red-900/20 rounded-xl p-6 border border-red-500/20">
                  <h4 className="font-semibold text-red-400 mb-3">Forgetting the Air Handler Circuit</h4>
                  <p className="text-white/60 text-sm">
                    Planning only the condenser circuit for a heat pump system without sizing the air handler circuit for backup heat strips. A 10kW heat strip kit requires its own dedicated 50&ndash;60A circuit.
                  </p>
                </div>
                <div className="bg-red-900/20 rounded-xl p-6 border border-red-500/20">
                  <h4 className="font-semibold text-red-400 mb-3">Ignoring Voltage Drop on Long Runs</h4>
                  <p className="text-white/60 text-sm">
                    Running 10 AWG wire 150 feet to a condenser without checking voltage drop. At that distance with a 25A load, voltage drop on 10 AWG exceeds 3.8%, which can cause compressor problems and void warranties.
                  </p>
                </div>
                <div className="bg-red-900/20 rounded-xl p-6 border border-red-500/20">
                  <h4 className="font-semibold text-red-400 mb-3">Missing or Undersized Disconnect</h4>
                  <p className="text-white/60 text-sm">
                    Not installing a disconnect within sight of the condenser, or using a 30A disconnect on a unit that requires 40A overcurrent protection. The disconnect rating must be adequate for the circuit.
                  </p>
                </div>
                <div className="bg-red-900/20 rounded-xl p-6 border border-red-500/20">
                  <h4 className="font-semibold text-red-400 mb-3">Using Tonnage to Size Circuits</h4>
                  <p className="text-white/60 text-sm">
                    Assuming &ldquo;a 3-ton unit always needs a 30A breaker&rdquo; instead of reading the actual nameplate. A 3-ton unit from one manufacturer may require a 25A breaker while another requires 35A depending on efficiency and compressor type.
                  </p>
                </div>
                <div className="bg-red-900/20 rounded-xl p-6 border border-red-500/20">
                  <h4 className="font-semibold text-red-400 mb-3">Wrong Voltage</h4>
                  <p className="text-white/60 text-sm">
                    Installing 120V wiring for a 240V condenser, or failing to verify whether the unit is 208V or 230V. Dual-rated 208/230V units work on both, but single-rated units must match your supply voltage exactly.
                  </p>
                </div>
              </div>

              <div className="bg-cyan-900/30 rounded-xl p-6 my-6">
                <h4 className="font-semibold text-cyan-400 mb-3">HVAC Circuit Sizing Checklist</h4>
                <ul className="text-white/70 space-y-2 text-sm">
                  <li>&#9744; Read MCA and MOP from the equipment nameplate</li>
                  <li>&#9744; Select wire with ampacity &ge; MCA (NEC Table 310.16, 75&deg;C)</li>
                  <li>&#9744; Select breaker &le; MOP (standard size per NEC 240.6)</li>
                  <li>&#9744; Calculate voltage drop for runs over 50 feet</li>
                  <li>&#9744; Upsize wire if voltage drop exceeds 3%</li>
                  <li>&#9744; Install disconnect within sight and 50 feet of unit</li>
                  <li>&#9744; Verify correct voltage (208V, 230V, or 208/230V)</li>
                  <li>&#9744; Size air handler circuit separately (heat pump with strips)</li>
                  <li>&#9744; Use proper conduit and whip for final connection</li>
                  <li>&#9744; Verify equipment grounding conductor is properly sized</li>
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
                <Link href="/blog/nec-article-440-hvac-electrical" className="bg-white/5 hover:bg-white/10 rounded-xl p-6 transition-colors">
                  <span className="text-purple-400 text-sm">NEC Code</span>
                  <h3 className="font-semibold mt-2">NEC Article 440: HVAC Electrical Requirements</h3>
                </Link>
                <Link href="/blog/wire-sizing-guide-nec-ampacity-tables" className="bg-white/5 hover:bg-white/10 rounded-xl p-6 transition-colors">
                  <span className="text-amber-400 text-sm">Calculations</span>
                  <h3 className="font-semibold mt-2">Wire Sizing Guide: NEC Ampacity Tables</h3>
                </Link>
                <Link href="/blog/how-to-calculate-voltage-drop" className="bg-white/5 hover:bg-white/10 rounded-xl p-6 transition-colors">
                  <span className="text-amber-400 text-sm">Calculations</span>
                  <h3 className="font-semibold mt-2">How to Calculate Voltage Drop</h3>
                </Link>
                <Link href="/blog/disconnect-switch-requirements-nec" className="bg-white/5 hover:bg-white/10 rounded-xl p-6 transition-colors">
                  <span className="text-purple-400 text-sm">NEC Code</span>
                  <h3 className="font-semibold mt-2">Disconnect Switch Requirements per NEC</h3>
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
