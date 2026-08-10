import { Metadata } from "next";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import { BlogPostingJsonLd, BreadcrumbJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Single-Phase vs Three-Phase Power: When to Use Each",
  description: "Understand the differences between single-phase and three-phase power systems. Learn voltage relationships, power formulas, wire counts, cost comparisons, and when to use each system for residential, commercial, and industrial applications.",
  keywords: [
    "single phase vs three phase",
    "single phase power",
    "three phase power",
    "208 vs 240 voltage",
    "phase converter",
    "wye vs delta",
    "residential vs commercial power",
    "three phase motor",
    "single phase to three phase",
    "electrical power systems"
  ],
  openGraph: {
    title: "Single-Phase vs Three-Phase Power: When to Use Each",
    description: "Complete guide to single-phase and three-phase power systems with voltage relationships, formulas, and practical guidance for electricians.",
    type: "article",
    publishedTime: "2025-05-25",
  },
};

function HeroIllustration() {
  return (
    <svg viewBox="0 0 400 200" className="w-full h-48 md:h-64" aria-label="Single-phase sine wave compared to three-phase waveforms">
      <defs>
        <linearGradient id="singlePhaseGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#f59e0b"/>
          <stop offset="100%" stopColor="#d97706"/>
        </linearGradient>
        <linearGradient id="phaseAGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#ef4444"/>
          <stop offset="100%" stopColor="#dc2626"/>
        </linearGradient>
        <linearGradient id="phaseBGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#22c55e"/>
          <stop offset="100%" stopColor="#16a34a"/>
        </linearGradient>
        <linearGradient id="phaseCGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#3b82f6"/>
          <stop offset="100%" stopColor="#2563eb"/>
        </linearGradient>
      </defs>

      {/* Divider */}
      <line x1="200" y1="15" x2="200" y2="185" stroke="#374151" strokeWidth="1" strokeDasharray="6"/>

      {/* Left side: Single-Phase */}
      <text x="100" y="20" textAnchor="middle" fill="#f59e0b" fontSize="12" fontWeight="bold">Single-Phase</text>

      {/* Single-phase grid */}
      <line x1="15" y1="100" x2="185" y2="100" stroke="#374151" strokeWidth="0.5"/>
      {[50, 85, 120, 155].map((x) => (
        <line key={x} x1={x} y1="40" x2={x} y2="160" stroke="#374151" strokeWidth="0.3" strokeDasharray="3"/>
      ))}

      {/* Single-phase waveform */}
      <path
        d="M 15 100 Q 32 35, 50 100 Q 68 165, 85 100 Q 102 35, 120 100 Q 138 165, 155 100 Q 170 50, 185 100"
        fill="none"
        stroke="url(#singlePhaseGrad)"
        strokeWidth="3"
      />

      {/* Zero-crossing markers */}
      <text x="100" y="178" textAnchor="middle" fill="#9ca3af" fontSize="8">One Conductor + Neutral</text>

      {/* Right side: Three-Phase */}
      <text x="305" y="20" textAnchor="middle" fill="#8b5cf6" fontSize="12" fontWeight="bold">Three-Phase</text>

      {/* Three-phase grid */}
      <line x1="215" y1="100" x2="390" y2="100" stroke="#374151" strokeWidth="0.5"/>
      {[245, 275, 305, 335, 365].map((x) => (
        <line key={x} x1={x} y1="40" x2={x} y2="160" stroke="#374151" strokeWidth="0.3" strokeDasharray="3"/>
      ))}

      {/* Phase A - Red */}
      <path
        d="M 215 100 Q 230 35, 245 100 Q 260 165, 275 100 Q 290 35, 305 100 Q 320 165, 335 100 Q 350 35, 365 100 Q 378 140, 390 100"
        fill="none"
        stroke="url(#phaseAGrad)"
        strokeWidth="2.5"
      />

      {/* Phase B - Green (120 degrees offset) */}
      <path
        d="M 215 145 Q 230 165, 245 100 Q 260 35, 275 100 Q 290 165, 305 100 Q 320 35, 335 100 Q 350 165, 365 100 Q 378 60, 390 100"
        fill="none"
        stroke="url(#phaseBGrad)"
        strokeWidth="2.5"
      />

      {/* Phase C - Blue (240 degrees offset) */}
      <path
        d="M 215 55 Q 230 100, 245 100 Q 260 100, 275 55 Q 290 35, 305 100 Q 320 165, 335 145 Q 350 100, 365 55 Q 378 45, 390 100"
        fill="none"
        stroke="url(#phaseCGrad)"
        strokeWidth="2.5"
      />

      {/* Phase labels */}
      <circle cx="355" cy="42" r="3" fill="#ef4444"/>
      <text x="362" y="46" fill="#ef4444" fontSize="8">A</text>
      <circle cx="355" cy="54" r="3" fill="#22c55e"/>
      <text x="362" y="58" fill="#22c55e" fontSize="8">B</text>
      <circle cx="355" cy="66" r="3" fill="#3b82f6"/>
      <text x="362" y="70" fill="#3b82f6" fontSize="8">C</text>

      <text x="305" y="178" textAnchor="middle" fill="#9ca3af" fontSize="8">Three Conductors (120&#176; Apart)</text>
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
            { name: "Single-Phase vs Three-Phase", url: "https://amporalabs.com/blog/single-phase-vs-three-phase" },
          ]}
        />
        <BlogPostingJsonLd
          headline="Single-Phase vs Three-Phase Power: When to Use Each"
          description="Complete guide to single-phase and three-phase power systems with voltage relationships, formulas, and practical guidance."
          datePublished="2025-05-25"
          url="https://amporalabs.com/blog/single-phase-vs-three-phase"
        />

        <article className="max-w-4xl mx-auto px-6 py-12">
          {/* Breadcrumb */}
          <nav className="text-sm text-white/60 mb-8">
            <Link href="/" className="hover:text-white">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/blog" className="hover:text-white">Blog</Link>
            <span className="mx-2">/</span>
            <span className="text-white">Single-Phase vs Three-Phase</span>
          </nav>

          {/* Hero */}
          <header className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <span className="px-3 py-1 bg-amber-600/30 text-amber-300 text-sm font-medium rounded-full">
                Calculations
              </span>
              <span className="text-white/40 text-sm">May 25, 2025</span>
              <span className="text-white/40 text-sm">&bull; 12 min read</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">
              Single-Phase vs Three-Phase Power: When to Use Each
            </h1>
            <p className="text-xl text-white/70">
              Know when single-phase is sufficient and when three-phase is required. Understand voltage relationships, power delivery differences, and the real-world cost and performance tradeoffs every electrician should know.
            </p>
          </header>

          {/* Hero Illustration */}
          <div className="mb-12 bg-gradient-to-br from-amber-900/20 to-cyan-900/20 rounded-2xl p-6 border border-white/10">
            <HeroIllustration />
          </div>

          {/* Content */}
          <div className="prose prose-invert prose-lg max-w-none">

            <h2>Understanding Power System Basics</h2>
            <p>
              All alternating current (AC) power is delivered as sinusoidal waveforms. The fundamental difference between
              single-phase and three-phase power is the number of those waveforms and their timing relationship. This
              distinction affects everything from the size of conductors you pull to the types of equipment a building can support.
            </p>
            <p>
              As an electrician, knowing when each system is appropriate&mdash;and understanding the voltage, current,
              and cost implications&mdash;is essential for both residential and commercial work.
            </p>

            <h2>How Single-Phase Power Works</h2>
            <p>
              Single-phase power uses one alternating voltage waveform delivered between two conductors: a hot (ungrounded)
              conductor and a neutral (grounded) conductor. In North America, standard single-phase residential service is
              actually a <strong>split-phase</strong> system derived from a center-tapped transformer.
            </p>
            <p>
              A split-phase 120/240V service provides:
            </p>
            <ul>
              <li><strong>120V</strong> between either hot leg (L1 or L2) and neutral</li>
              <li><strong>240V</strong> between the two hot legs (L1 to L2)</li>
            </ul>
            <p>
              The two hot legs are 180 degrees out of phase with each other. This is why the voltage between them adds
              up to 240V rather than canceling out.
            </p>

            <div className="bg-white/5 rounded-xl p-6 my-6">
              <h4 className="text-white font-semibold mb-3">Single-Phase Conductor Configuration</h4>
              <ul className="text-white/70 text-sm space-y-2">
                <li><strong>120V circuit:</strong> 1 hot + 1 neutral + 1 ground = 3 wires</li>
                <li><strong>240V circuit:</strong> 2 hots + 1 ground = 3 wires (no neutral needed for pure 240V loads)</li>
                <li><strong>120/240V circuit:</strong> 2 hots + 1 neutral + 1 ground = 4 wires (ranges, dryers)</li>
              </ul>
            </div>

            <h3>Single-Phase Power Formula</h3>
            <div className="bg-gradient-to-r from-amber-900/30 to-amber-800/20 rounded-xl p-6 my-6">
              <div className="space-y-4">
                <div>
                  <p className="text-white font-semibold">Apparent Power:</p>
                  <p className="text-white font-mono text-lg">S = V × I</p>
                </div>
                <div>
                  <p className="text-white font-semibold">Real Power:</p>
                  <p className="text-white font-mono text-lg">P = V × I × PF</p>
                </div>
                <div>
                  <p className="text-white font-semibold">Current from Watts:</p>
                  <p className="text-white font-mono text-lg">I = P / (V × PF)</p>
                </div>
              </div>
              <p className="text-white/60 text-sm mt-4">Where PF = power factor (1.0 for resistive loads like heaters, 0.8-0.9 for motor loads)</p>
            </div>

            <h2>How Three-Phase Power Works</h2>
            <p>
              Three-phase power uses three separate alternating voltage waveforms, each offset by 120 electrical degrees.
              This means at any given instant, the three phases are at different points in their cycle&mdash;and their
              sum is always zero in a balanced system.
            </p>
            <p>
              This 120-degree separation creates a critical advantage: <strong>constant power delivery</strong>. While
              single-phase power pulses (dropping to zero twice per cycle), three-phase power never drops to zero. This
              produces smoother, more efficient power transfer&mdash;especially important for motors, which run quieter
              and cooler on three-phase supply.
            </p>

            <h3>Delta Configuration</h3>
            <p>
              In a delta system, the three transformer windings form a closed triangle. There is no inherent neutral point.
            </p>
            <div className="bg-white/5 rounded-xl p-6 my-6">
              <p className="text-white font-mono mb-2">V<sub>line</sub> = V<sub>phase</sub></p>
              <p className="text-white font-mono mb-2">I<sub>line</sub> = &radic;3 &times; I<sub>phase</sub></p>
              <p className="text-white/70 text-sm mt-4">Common delta systems: 240V delta, 480V delta</p>
              <p className="text-white/70 text-sm">A center-tapped &ldquo;high-leg&rdquo; delta provides 240V L-L, 120V L-N on two legs, and 208V on the high leg (B phase).</p>
            </div>

            <h3>Wye (Star) Configuration</h3>
            <p>
              In a wye system, one end of each winding connects to a common neutral point. This provides both
              line-to-line and line-to-neutral voltages.
            </p>
            <div className="bg-white/5 rounded-xl p-6 my-6">
              <p className="text-white font-mono mb-2">V<sub>line</sub> = &radic;3 &times; V<sub>phase</sub></p>
              <p className="text-white font-mono mb-2">I<sub>line</sub> = I<sub>phase</sub></p>
              <p className="text-white/70 text-sm mt-4">Common wye systems: 208Y/120V, 480Y/277V</p>
              <p className="text-white/70 text-sm">The neutral carries unbalanced current. In a perfectly balanced three-phase load, the neutral current is zero.</p>
            </div>

            <h3>Three-Phase Power Formulas</h3>
            <div className="bg-gradient-to-r from-purple-900/30 to-cyan-900/30 rounded-xl p-6 my-6">
              <div className="space-y-4">
                <div>
                  <p className="text-white font-semibold">Apparent Power (kVA):</p>
                  <p className="text-white font-mono text-lg">S = (V<sub>L</sub> &times; I<sub>L</sub> &times; &radic;3) / 1000</p>
                </div>
                <div>
                  <p className="text-white font-semibold">Real Power (kW):</p>
                  <p className="text-white font-mono text-lg">P = (V<sub>L</sub> &times; I<sub>L</sub> &times; &radic;3 &times; PF) / 1000</p>
                </div>
                <div>
                  <p className="text-white font-semibold">Current from kW:</p>
                  <p className="text-white font-mono text-lg">I = (kW &times; 1000) / (V<sub>L</sub> &times; &radic;3 &times; PF)</p>
                </div>
              </div>
              <p className="text-white/60 text-sm mt-4">The &radic;3 factor (1.732) appears because three-phase power is delivered across three conductors simultaneously.</p>
            </div>

            <h2>Voltage Relationships: 208V vs 240V vs 480V</h2>
            <p>
              One of the most common points of confusion is the difference between 208V and 240V. They are <em>not</em> interchangeable,
              and the distinction matters for equipment operation and conductor sizing.
            </p>

            <div className="bg-white/5 rounded-xl p-6 my-6">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="py-2 text-white">System</th>
                    <th className="py-2 text-white">Configuration</th>
                    <th className="py-2 text-white">Line-to-Line</th>
                    <th className="py-2 text-white">Line-to-Neutral</th>
                  </tr>
                </thead>
                <tbody className="text-white/70">
                  <tr className="border-b border-white/5">
                    <td className="py-2">Residential Split-Phase</td>
                    <td className="py-2">Center-tap</td>
                    <td className="py-2">240V</td>
                    <td className="py-2">120V</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-2">Commercial 3-Phase</td>
                    <td className="py-2">208Y/120V Wye</td>
                    <td className="py-2">208V</td>
                    <td className="py-2">120V</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-2">Commercial/Industrial</td>
                    <td className="py-2">480Y/277V Wye</td>
                    <td className="py-2">480V</td>
                    <td className="py-2">277V</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-2">Industrial Delta</td>
                    <td className="py-2">240V Delta</td>
                    <td className="py-2">240V</td>
                    <td className="py-2">N/A*</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-2">High-Leg Delta</td>
                    <td className="py-2">240V High-Leg</td>
                    <td className="py-2">240V</td>
                    <td className="py-2">120V / 208V*</td>
                  </tr>
                  <tr>
                    <td className="py-2">Industrial Delta</td>
                    <td className="py-2">480V Delta</td>
                    <td className="py-2">480V</td>
                    <td className="py-2">N/A</td>
                  </tr>
                </tbody>
              </table>
              <p className="text-white/50 text-xs mt-3">*High-leg delta provides 120V on two legs but 208V on the &ldquo;wild&rdquo; or &ldquo;high&rdquo; leg (typically marked orange per NEC 110.15).</p>
            </div>

            <div className="bg-amber-900/30 rounded-xl p-6 my-6">
              <h4 className="text-amber-400 font-semibold mb-2">Why 208V Is Not 240V</h4>
              <p className="text-white/70">
                In a 208Y/120V wye system, 120V &times; &radic;3 = 207.8V (rounded to 208V). In a split-phase residential system,
                120V + 120V = 240V because the two phases are 180 degrees apart, not 120 degrees. Equipment rated for 240V
                may underperform or overheat on 208V&mdash;a 13% voltage reduction. Always check nameplate ratings. Many modern
                appliances are rated &ldquo;208-240V&rdquo; to handle both systems.
              </p>
            </div>

            <h2>Wire Count Comparison</h2>
            <p>
              Understanding conductor requirements is critical for conduit sizing, cost estimation, and installation planning.
            </p>

            <div className="bg-white/5 rounded-xl p-6 my-6">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="py-2 text-white">System</th>
                    <th className="py-2 text-white">Hots</th>
                    <th className="py-2 text-white">Neutral</th>
                    <th className="py-2 text-white">Ground</th>
                    <th className="py-2 text-white">Total</th>
                  </tr>
                </thead>
                <tbody className="text-white/70">
                  <tr className="border-b border-white/5">
                    <td className="py-2">1-Phase 120V</td>
                    <td className="py-2">1</td>
                    <td className="py-2">1</td>
                    <td className="py-2">1</td>
                    <td className="py-2 font-semibold">3</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-2">1-Phase 240V</td>
                    <td className="py-2">2</td>
                    <td className="py-2">0</td>
                    <td className="py-2">1</td>
                    <td className="py-2 font-semibold">3</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-2">1-Phase 120/240V</td>
                    <td className="py-2">2</td>
                    <td className="py-2">1</td>
                    <td className="py-2">1</td>
                    <td className="py-2 font-semibold">4</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-2">3-Phase Delta (no neutral)</td>
                    <td className="py-2">3</td>
                    <td className="py-2">0</td>
                    <td className="py-2">1</td>
                    <td className="py-2 font-semibold">4</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-2">3-Phase Wye (with neutral)</td>
                    <td className="py-2">3</td>
                    <td className="py-2">1</td>
                    <td className="py-2">1</td>
                    <td className="py-2 font-semibold">5</td>
                  </tr>
                  <tr>
                    <td className="py-2">3-Phase High-Leg Delta</td>
                    <td className="py-2">3</td>
                    <td className="py-2">1</td>
                    <td className="py-2">1</td>
                    <td className="py-2 font-semibold">5</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p>
              Despite having more phase conductors, three-phase systems deliver significantly more power per conductor than
              single-phase systems. A three-phase, three-wire system delivers 1.73 times the power of a single-phase, two-wire
              system using only 1.5 times the copper. This is one of the main reasons three-phase is standard for
              commercial and industrial installations.
            </p>

            {/* Mid-Article CTA */}
            <div className="not-prose my-12 bg-gradient-to-r from-purple-900/40 to-cyan-900/40 rounded-xl p-6 border border-purple-500/20">
              <div className="flex flex-col sm:flex-row items-center gap-4">
                <div className="flex-1 text-center sm:text-left">
                  <p className="font-display font-bold text-lg text-white mb-1">Ampora &mdash; The Electrician&apos;s AI Companion</p>
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

            <h2>When to Use Single-Phase Power</h2>
            <p>
              Single-phase power is the standard for residential and light commercial applications. It is appropriate when:
            </p>
            <ul>
              <li><strong>Total load is under approximately 10-15 kW</strong> &mdash; Most homes fall in this range for continuous loads</li>
              <li><strong>No large three-phase motors are required</strong> &mdash; Single-phase motors are available up to about 10 HP, though efficiency drops above 5 HP</li>
              <li><strong>Standard residential appliances only</strong> &mdash; Ranges, dryers, water heaters, HVAC units under 5 tons</li>
              <li><strong>Utility only provides single-phase</strong> &mdash; Rural areas and residential subdivisions typically only have single-phase available at the pole</li>
              <li><strong>Cost is the primary concern</strong> &mdash; Single-phase equipment and panels cost less upfront</li>
            </ul>

            <h3>Typical Single-Phase Applications</h3>
            <div className="grid md:grid-cols-2 gap-4 my-6">
              <div className="bg-white/5 rounded-xl p-4">
                <h4 className="text-amber-400 font-semibold mb-2">Residential</h4>
                <ul className="text-white/60 text-sm space-y-1">
                  <li>Single-family homes</li>
                  <li>Apartments and condos</li>
                  <li>Attached garages and workshops</li>
                  <li>Detached accessory structures</li>
                </ul>
              </div>
              <div className="bg-white/5 rounded-xl p-4">
                <h4 className="text-amber-400 font-semibold mb-2">Light Commercial</h4>
                <ul className="text-white/60 text-sm space-y-1">
                  <li>Small retail stores</li>
                  <li>Home offices</li>
                  <li>Small restaurants (under 2,000 sq ft)</li>
                  <li>Agricultural outbuildings</li>
                </ul>
              </div>
            </div>

            <h2>When to Use Three-Phase Power</h2>
            <p>
              Three-phase power becomes necessary or advantageous when loads exceed what single-phase can efficiently serve,
              or when specific equipment requires it:
            </p>
            <ul>
              <li><strong>Large motor loads (over 5 HP)</strong> &mdash; Three-phase motors are smaller, lighter, more efficient, and self-starting compared to equivalent single-phase motors</li>
              <li><strong>Total building load exceeds 20-40 kW</strong> &mdash; Three-phase service delivers more power with smaller conductors</li>
              <li><strong>Commercial HVAC systems</strong> &mdash; Rooftop units above 5 tons almost always require three-phase</li>
              <li><strong>Industrial machinery</strong> &mdash; CNC machines, compressors, welders, and production equipment</li>
              <li><strong>Data centers and server rooms</strong> &mdash; Balanced loading and higher power density</li>
              <li><strong>Commercial kitchens</strong> &mdash; Large ovens, walk-in coolers, and dishwashers</li>
            </ul>

            <h3>Typical Three-Phase Applications</h3>
            <div className="grid md:grid-cols-2 gap-4 my-6">
              <div className="bg-white/5 rounded-xl p-4">
                <h4 className="text-purple-400 font-semibold mb-2">Commercial</h4>
                <ul className="text-white/60 text-sm space-y-1">
                  <li>Office buildings</li>
                  <li>Retail stores (large)</li>
                  <li>Restaurants and commercial kitchens</li>
                  <li>Medical and dental offices</li>
                  <li>Schools and institutional buildings</li>
                </ul>
              </div>
              <div className="bg-white/5 rounded-xl p-4">
                <h4 className="text-purple-400 font-semibold mb-2">Industrial</h4>
                <ul className="text-white/60 text-sm space-y-1">
                  <li>Manufacturing facilities</li>
                  <li>Machine shops</li>
                  <li>Water treatment plants</li>
                  <li>Data centers</li>
                  <li>Agricultural processing</li>
                </ul>
              </div>
            </div>

            <h2>Advantages and Disadvantages</h2>

            <h3>Single-Phase: Pros and Cons</h3>
            <div className="grid md:grid-cols-2 gap-4 my-6">
              <div className="bg-green-900/20 rounded-xl p-4">
                <h4 className="text-green-400 font-semibold mb-2">Advantages</h4>
                <ul className="text-white/60 text-sm space-y-1">
                  <li>Lower installation cost</li>
                  <li>Simpler wiring (fewer conductors)</li>
                  <li>Widely available everywhere</li>
                  <li>Adequate for most residential loads</li>
                  <li>Less expensive panels and breakers</li>
                  <li>Easier troubleshooting</li>
                </ul>
              </div>
              <div className="bg-red-900/20 rounded-xl p-4">
                <h4 className="text-red-400 font-semibold mb-2">Disadvantages</h4>
                <ul className="text-white/60 text-sm space-y-1">
                  <li>Power pulsates (drops to zero twice per cycle)</li>
                  <li>Less efficient for large loads</li>
                  <li>Single-phase motors are less efficient</li>
                  <li>Larger conductor sizes needed for equivalent power</li>
                  <li>Not suitable for heavy industrial equipment</li>
                  <li>Motors above 10 HP impractical</li>
                </ul>
              </div>
            </div>

            <h3>Three-Phase: Pros and Cons</h3>
            <div className="grid md:grid-cols-2 gap-4 my-6">
              <div className="bg-green-900/20 rounded-xl p-4">
                <h4 className="text-green-400 font-semibold mb-2">Advantages</h4>
                <ul className="text-white/60 text-sm space-y-1">
                  <li>Constant, non-pulsating power delivery</li>
                  <li>More power per conductor (less copper)</li>
                  <li>Three-phase motors are self-starting</li>
                  <li>Motors run cooler and more efficiently</li>
                  <li>Balanced neutral current in balanced loads</li>
                  <li>Required for large industrial equipment</li>
                </ul>
              </div>
              <div className="bg-red-900/20 rounded-xl p-4">
                <h4 className="text-red-400 font-semibold mb-2">Disadvantages</h4>
                <ul className="text-white/60 text-sm space-y-1">
                  <li>Higher initial installation cost</li>
                  <li>Not always available (especially rural areas)</li>
                  <li>More complex wiring and troubleshooting</li>
                  <li>More expensive panels, breakers, and disconnects</li>
                  <li>Requires phase balancing across legs</li>
                  <li>Phase loss can damage motors (requires protection)</li>
                </ul>
              </div>
            </div>

            <h2>Cost Comparison</h2>
            <p>
              The cost difference between single-phase and three-phase power involves several factors:
            </p>

            <div className="bg-white/5 rounded-xl p-6 my-6">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="py-2 text-white">Cost Factor</th>
                    <th className="py-2 text-white">Single-Phase</th>
                    <th className="py-2 text-white">Three-Phase</th>
                  </tr>
                </thead>
                <tbody className="text-white/70">
                  <tr className="border-b border-white/5">
                    <td className="py-2">Utility connection</td>
                    <td className="py-2">Standard (included)</td>
                    <td className="py-2">May require new transformer ($5,000-$25,000+)</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-2">Service entrance</td>
                    <td className="py-2">200A panel: ~$1,500-3,000</td>
                    <td className="py-2">200A 3-phase panel: ~$3,000-6,000</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-2">Conductor cost</td>
                    <td className="py-2">3-4 conductors</td>
                    <td className="py-2">4-5 conductors (but smaller gauges for same power)</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-2">Monthly demand charges</td>
                    <td className="py-2">Rarely applies</td>
                    <td className="py-2">Common for commercial accounts</td>
                  </tr>
                  <tr>
                    <td className="py-2">Motor cost (equivalent HP)</td>
                    <td className="py-2">Higher (heavier, less efficient)</td>
                    <td className="py-2">Lower (lighter, more efficient)</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p>
              For commercial and industrial applications, the higher upfront cost of three-phase service is typically
              offset by lower operating costs, smaller conductor sizes, and more efficient equipment. The break-even
              point generally falls around 10-20 kW of continuous load.
            </p>

            <h2>Converting Between Systems</h2>
            <p>
              When three-phase equipment must operate in a location with only single-phase service, or vice versa,
              several conversion methods are available:
            </p>

            <h3>Phase Converters (Single-Phase to Three-Phase)</h3>
            <div className="bg-white/5 rounded-xl p-6 my-6">
              <div className="space-y-6">
                <div>
                  <h4 className="text-white font-semibold mb-2">Static Phase Converter</h4>
                  <p className="text-white/70 text-sm">
                    Uses capacitors to create the third phase. Only provides true three-phase power during motor starting&mdash;the
                    manufactured leg is weaker during running. Best for single motors that are lightly loaded. Cost: $300-$1,500.
                    Not suitable for CNC machines or sensitive electronics.
                  </p>
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-2">Rotary Phase Converter</h4>
                  <p className="text-white/70 text-sm">
                    Uses an idler motor (essentially a motor-generator) to create balanced three-phase power from single-phase input.
                    Produces good-quality three-phase power suitable for most equipment. Cost: $1,500-$8,000 depending on size.
                    Can power multiple loads simultaneously.
                  </p>
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-2">Variable Frequency Drive (VFD)</h4>
                  <p className="text-white/70 text-sm">
                    Converts single-phase AC to DC, then synthesizes three-phase AC at the desired frequency. Provides
                    excellent three-phase output with variable speed control. Cost: $500-$5,000+. Best for individual motor loads.
                    Also provides soft-start capability and energy savings through speed control.
                  </p>
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-2">Digital Phase Converter</h4>
                  <p className="text-white/70 text-sm">
                    Uses power electronics (IGBTs) to synthesize a clean third phase waveform. Produces near-perfect
                    three-phase output. Cost: $2,000-$10,000+. Best for sensitive equipment like CNC machines and medical devices.
                  </p>
                </div>
              </div>
            </div>

            <h3>Transformers (Voltage and Configuration Changes)</h3>
            <p>
              Transformers can change voltage levels and convert between delta and wye configurations, but they
              cannot create a third phase from a single-phase source. Common uses include:
            </p>
            <ul>
              <li><strong>480V to 208Y/120V:</strong> Step-down transformer for 120V receptacle loads in an industrial building</li>
              <li><strong>Delta to Wye:</strong> Provides a neutral for line-to-neutral loads</li>
              <li><strong>240V to 480V:</strong> Step-up for specific equipment needs</li>
            </ul>

            <h2>Common Misconceptions</h2>

            <div className="space-y-6 my-6">
              <div className="bg-red-900/20 border-l-4 border-red-500 rounded-r-xl p-6">
                <h4 className="text-red-400 font-semibold mb-2">Myth: &ldquo;208V and 240V are the same thing.&rdquo;</h4>
                <p className="text-white/70 text-sm">
                  <strong>Reality:</strong> 208V comes from a three-phase wye system (120V &times; &radic;3), while 240V comes from a
                  single-phase center-tapped system (120V + 120V). Equipment rated at 240V will receive 13% less voltage on 208V,
                  which can reduce heating element output by 25% and cause motors to draw more current.
                </p>
              </div>

              <div className="bg-red-900/20 border-l-4 border-red-500 rounded-r-xl p-6">
                <h4 className="text-red-400 font-semibold mb-2">Myth: &ldquo;Three-phase power is three times more powerful than single-phase.&rdquo;</h4>
                <p className="text-white/70 text-sm">
                  <strong>Reality:</strong> At the same voltage and current per conductor, three-phase delivers &radic;3 (1.732) times
                  the power of single-phase&mdash;not three times. The advantage is in the efficiency of delivery, not a tripling of capacity.
                </p>
              </div>

              <div className="bg-red-900/20 border-l-4 border-red-500 rounded-r-xl p-6">
                <h4 className="text-red-400 font-semibold mb-2">Myth: &ldquo;You can run a three-phase motor on single-phase by just connecting two of the three leads.&rdquo;</h4>
                <p className="text-white/70 text-sm">
                  <strong>Reality:</strong> A three-phase motor will not start on single-phase power. Even if manually spun to get it
                  started, it will run at reduced capacity with severe vibration, overheating, and likely winding failure. Always use a
                  proper phase converter or VFD.
                </p>
              </div>

              <div className="bg-red-900/20 border-l-4 border-red-500 rounded-r-xl p-6">
                <h4 className="text-red-400 font-semibold mb-2">Myth: &ldquo;Residential split-phase is the same as two-phase power.&rdquo;</h4>
                <p className="text-white/70 text-sm">
                  <strong>Reality:</strong> True two-phase power (90-degree phase offset) was used historically but is essentially
                  obsolete. Residential 120/240V is a single-phase, center-tapped system. The two hot legs are derived from a single
                  winding and are 180 degrees apart&mdash;not 90 degrees.
                </p>
              </div>

              <div className="bg-red-900/20 border-l-4 border-red-500 rounded-r-xl p-6">
                <h4 className="text-red-400 font-semibold mb-2">Myth: &ldquo;Three-phase power is always more expensive.&rdquo;</h4>
                <p className="text-white/70 text-sm">
                  <strong>Reality:</strong> While the initial service installation costs more, three-phase motors and equipment are often
                  cheaper for the same horsepower rating. Operating costs are lower due to improved efficiency. For facilities with
                  large motor loads, three-phase can be significantly cheaper to operate over the long term.
                </p>
              </div>
            </div>

            <h2>Practical Calculation Example</h2>
            <p>
              Compare the conductor requirements for delivering 24 kW to a load using single-phase 240V versus
              three-phase 208V:
            </p>

            <div className="bg-white/5 rounded-xl p-6 my-6">
              <h4 className="text-white font-semibold mb-4">Single-Phase 240V (PF = 1.0)</h4>
              <div className="space-y-2 text-white/80">
                <p className="font-mono">I = P / V = 24,000 / 240 = <strong>100 Amps</strong></p>
                <p>Conductors: 2 hots + 1 neutral + 1 ground</p>
                <p>Wire size: #3 AWG copper (100A @ 75&deg;C per NEC Table 310.16)</p>
                <p className="text-amber-400">Total copper: 4 conductors of #3 AWG</p>
              </div>
            </div>

            <div className="bg-white/5 rounded-xl p-6 my-6">
              <h4 className="text-white font-semibold mb-4">Three-Phase 208V (PF = 1.0)</h4>
              <div className="space-y-2 text-white/80">
                <p className="font-mono">I = P / (V &times; &radic;3) = 24,000 / (208 &times; 1.732) = <strong>66.6 Amps</strong></p>
                <p>Conductors: 3 hots + 1 ground (no neutral for balanced 3-phase load)</p>
                <p>Wire size: #6 AWG copper (65A @ 75&deg;C) &mdash; or #4 AWG for next standard size up</p>
                <p className="text-green-400">Total copper: 4 conductors of #4 AWG</p>
              </div>
            </div>

            <div className="bg-green-900/20 border border-green-500/30 rounded-xl p-6 my-6">
              <h4 className="text-green-400 font-semibold mb-2">Result: Significant Copper Savings</h4>
              <p className="text-white/70">
                The three-phase system uses #4 AWG conductors versus #3 AWG for single-phase. More importantly,
                the current per conductor is 33% lower (66.6A vs 100A), meaning less voltage drop over long runs,
                reduced heat generation, and the potential to use even smaller conduit sizes.
              </p>
            </div>

            <h2>Quick Reference: Decision Guide</h2>
            <div className="bg-gradient-to-r from-amber-900/30 to-purple-900/30 rounded-xl p-6 my-6">
              <div className="space-y-3 text-white/80">
                <p><strong>Choose Single-Phase when:</strong></p>
                <ul className="text-white/60 text-sm space-y-1 mb-4">
                  <li>Total service load is under 20 kW</li>
                  <li>No motors above 5 HP are needed</li>
                  <li>Application is residential or small commercial</li>
                  <li>Three-phase is not available from the utility</li>
                  <li>Budget is the primary constraint</li>
                </ul>
                <p><strong>Choose Three-Phase when:</strong></p>
                <ul className="text-white/60 text-sm space-y-1">
                  <li>Total load exceeds 20-40 kW</li>
                  <li>Motors above 5 HP are required</li>
                  <li>Application is commercial or industrial</li>
                  <li>Balanced power distribution is needed</li>
                  <li>Long-term operating efficiency matters</li>
                  <li>Equipment specifically requires three-phase supply</li>
                </ul>
              </div>
            </div>

            <h2>Use Ampora for Power System Calculations</h2>
            <p>
              Whether you are sizing conductors for a single-phase residential panel or calculating three-phase motor
              loads for a commercial job, getting the math right matters. Ampora handles single-phase and three-phase
              calculations instantly, with NEC code references built in&mdash;so you can verify your work on the jobsite
              without flipping through codebooks.
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
              <Link href="/blog/3-phase-power-calculations" className="group bg-white/5 hover:bg-white/10 rounded-xl p-6 transition-all">
                <h4 className="font-semibold group-hover:text-purple-400 transition-colors">3-Phase Power Calculations: Complete Guide</h4>
                <p className="text-white/60 text-sm mt-2">Master delta vs wye, power factor, and kVA calculations for commercial work.</p>
              </Link>
              <Link href="/blog/how-to-calculate-voltage-drop" className="group bg-white/5 hover:bg-white/10 rounded-xl p-6 transition-all">
                <h4 className="font-semibold group-hover:text-purple-400 transition-colors">How to Calculate Voltage Drop</h4>
                <p className="text-white/60 text-sm mt-2">Step-by-step voltage drop calculations for single-phase and three-phase circuits.</p>
              </Link>
            </div>
          </div>
        </article>
      </div>
    </main>
  );
}
