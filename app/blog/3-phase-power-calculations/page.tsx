import { Metadata } from "next";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import { BlogPostingJsonLd, BreadcrumbJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "3-Phase Power Calculations: Complete Guide for Electricians",
  description: "Master 3-phase power calculations including voltage, current, power factor, and kVA. Learn delta vs wye configurations, line vs phase values, and practical calculation examples.",
  keywords: [
    "3-phase power calculations",
    "three phase power",
    "delta vs wye",
    "3-phase voltage",
    "3-phase current calculation",
    "power factor",
    "kVA calculation",
    "line voltage vs phase voltage",
    "3-phase formulas",
    "commercial electrical calculations"
  ],
  openGraph: {
    title: "3-Phase Power Calculations Guide",
    description: "Complete guide to 3-phase power calculations for commercial and industrial electricians.",
    type: "article",
    publishedTime: "2025-02-03",
  },
};

// SVG Illustrations
function HeroIllustration() {
  return (
    <svg viewBox="0 0 400 200" className="w-full h-48 md:h-64" aria-label="Three-phase power waveform illustration">
      <defs>
        <linearGradient id="phaseA" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#ef4444"/>
          <stop offset="100%" stopColor="#dc2626"/>
        </linearGradient>
        <linearGradient id="phaseB" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#22c55e"/>
          <stop offset="100%" stopColor="#16a34a"/>
        </linearGradient>
        <linearGradient id="phaseC" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#3b82f6"/>
          <stop offset="100%" stopColor="#2563eb"/>
        </linearGradient>
      </defs>

      {/* Grid lines */}
      <line x1="40" y1="100" x2="380" y2="100" stroke="#374151" strokeWidth="1"/>
      {[80, 140, 200, 260, 320].map((x) => (
        <line key={x} x1={x} y1="30" x2={x} y2="170" stroke="#374151" strokeWidth="0.5" strokeDasharray="4"/>
      ))}

      {/* Phase A - Red */}
      <path
        d="M 40 100 Q 70 30, 100 100 Q 130 170, 160 100 Q 190 30, 220 100 Q 250 170, 280 100 Q 310 30, 340 100 Q 355 135, 370 100"
        fill="none"
        stroke="url(#phaseA)"
        strokeWidth="3"
      />

      {/* Phase B - Green (120° offset) */}
      <path
        d="M 40 140 Q 70 170, 100 100 Q 130 30, 160 100 Q 190 170, 220 100 Q 250 30, 280 100 Q 310 170, 340 100 Q 355 65, 370 100"
        fill="none"
        stroke="url(#phaseB)"
        strokeWidth="3"
      />

      {/* Phase C - Blue (240° offset) */}
      <path
        d="M 40 60 Q 70 100, 100 100 Q 130 100, 160 60 Q 190 30, 220 100 Q 250 170, 280 140 Q 310 100, 340 60 Q 355 45, 370 100"
        fill="none"
        stroke="url(#phaseC)"
        strokeWidth="3"
      />

      {/* Labels */}
      <text x="385" y="60" fill="#ef4444" fontSize="12" fontWeight="bold">A</text>
      <text x="385" y="100" fill="#22c55e" fontSize="12" fontWeight="bold">B</text>
      <text x="385" y="140" fill="#3b82f6" fontSize="12" fontWeight="bold">C</text>

      {/* 120° markers */}
      <text x="200" y="190" textAnchor="middle" fill="#9ca3af" fontSize="10">120° Phase Separation</text>
    </svg>
  );
}

function DeltaWyeDiagram() {
  return (
    <svg viewBox="0 0 450 200" className="w-full h-52" aria-label="Delta and Wye configuration comparison">
      {/* Delta Configuration */}
      <g transform="translate(50, 20)">
        <text x="75" y="0" textAnchor="middle" fill="#fff" fontSize="14" fontWeight="bold">Delta (Δ)</text>

        {/* Triangle */}
        <polygon points="75,30 25,130 125,130" fill="none" stroke="#f59e0b" strokeWidth="3"/>

        {/* Coils on each side */}
        <circle cx="50" cy="80" r="8" fill="#1f2937" stroke="#f59e0b" strokeWidth="2"/>
        <circle cx="100" cy="80" r="8" fill="#1f2937" stroke="#f59e0b" strokeWidth="2"/>
        <circle cx="75" cy="130" r="8" fill="#1f2937" stroke="#f59e0b" strokeWidth="2"/>

        {/* Line connections */}
        <line x1="75" y1="30" x2="75" y2="10" stroke="#ef4444" strokeWidth="2"/>
        <line x1="25" y1="130" x2="5" y2="150" stroke="#22c55e" strokeWidth="2"/>
        <line x1="125" y1="130" x2="145" y2="150" stroke="#3b82f6" strokeWidth="2"/>

        <text x="80" y="22" fill="#ef4444" fontSize="10">L1</text>
        <text x="0" y="158" fill="#22c55e" fontSize="10">L2</text>
        <text x="140" y="158" fill="#3b82f6" fontSize="10">L3</text>

        <text x="75" y="175" textAnchor="middle" fill="#9ca3af" fontSize="9">V_line = V_phase</text>
        <text x="75" y="188" textAnchor="middle" fill="#9ca3af" fontSize="9">I_line = √3 × I_phase</text>
      </g>

      {/* Wye Configuration */}
      <g transform="translate(280, 20)">
        <text x="75" y="0" textAnchor="middle" fill="#fff" fontSize="14" fontWeight="bold">Wye (Y)</text>

        {/* Center point */}
        <circle cx="75" cy="90" r="6" fill="#8b5cf6"/>

        {/* Lines to center */}
        <line x1="75" y1="90" x2="75" y2="40" stroke="#ef4444" strokeWidth="3"/>
        <line x1="75" y1="90" x2="30" y2="130" stroke="#22c55e" strokeWidth="3"/>
        <line x1="75" y1="90" x2="120" y2="130" stroke="#3b82f6" strokeWidth="3"/>

        {/* Coils */}
        <circle cx="75" cy="55" r="8" fill="#1f2937" stroke="#ef4444" strokeWidth="2"/>
        <circle cx="45" cy="115" r="8" fill="#1f2937" stroke="#22c55e" strokeWidth="2"/>
        <circle cx="105" cy="115" r="8" fill="#1f2937" stroke="#3b82f6" strokeWidth="2"/>

        {/* Line extensions */}
        <line x1="75" y1="40" x2="75" y2="20" stroke="#ef4444" strokeWidth="2"/>
        <line x1="30" y1="130" x2="10" y2="150" stroke="#22c55e" strokeWidth="2"/>
        <line x1="120" y1="130" x2="140" y2="150" stroke="#3b82f6" strokeWidth="2"/>

        {/* Neutral */}
        <line x1="75" y1="90" x2="75" y2="150" stroke="#9ca3af" strokeWidth="2" strokeDasharray="4"/>
        <text x="85" y="140" fill="#9ca3af" fontSize="10">N</text>

        <text x="80" y="12" fill="#ef4444" fontSize="10">L1</text>
        <text x="0" y="158" fill="#22c55e" fontSize="10">L2</text>
        <text x="135" y="158" fill="#3b82f6" fontSize="10">L3</text>

        <text x="75" y="175" textAnchor="middle" fill="#9ca3af" fontSize="9">V_line = √3 × V_phase</text>
        <text x="75" y="188" textAnchor="middle" fill="#9ca3af" fontSize="9">I_line = I_phase</text>
      </g>
    </svg>
  );
}

function PowerTriangle() {
  return (
    <svg viewBox="0 0 350 180" className="w-full h-44" aria-label="Power triangle showing relationship between kW, kVA, and kVAR">
      <defs>
        <marker id="arrow" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
          <polygon points="0 0, 10 3.5, 0 7" fill="#8b5cf6"/>
        </marker>
      </defs>

      {/* Triangle */}
      <polygon points="50,140 300,140 300,40" fill="none" stroke="#4b5563" strokeWidth="1" strokeDasharray="4"/>

      {/* Real Power (kW) - horizontal */}
      <line x1="50" y1="140" x2="290" y2="140" stroke="#22c55e" strokeWidth="4" markerEnd="url(#arrow)"/>
      <text x="170" y="160" textAnchor="middle" fill="#22c55e" fontSize="12" fontWeight="bold">Real Power (kW)</text>
      <text x="170" y="175" textAnchor="middle" fill="#86efac" fontSize="10">P = V × I × cos(θ) × √3</text>

      {/* Reactive Power (kVAR) - vertical */}
      <line x1="300" y1="140" x2="300" y2="50" stroke="#f59e0b" strokeWidth="4" markerEnd="url(#arrow)"/>
      <text x="340" y="95" textAnchor="middle" fill="#f59e0b" fontSize="11" fontWeight="bold" transform="rotate(90, 340, 95)">Reactive (kVAR)</text>

      {/* Apparent Power (kVA) - hypotenuse */}
      <line x1="50" y1="140" x2="295" y2="45" stroke="#8b5cf6" strokeWidth="4" markerEnd="url(#arrow)"/>
      <text x="150" y="75" fill="#8b5cf6" fontSize="12" fontWeight="bold" transform="rotate(-22, 150, 75)">Apparent Power (kVA)</text>
      <text x="150" y="90" fill="#c4b5fd" fontSize="10" transform="rotate(-22, 150, 90)">S = V × I × √3</text>

      {/* Power Factor angle */}
      <path d="M 90 140 A 40 40 0 0 0 100 115" fill="none" stroke="#fff" strokeWidth="1"/>
      <text x="110" y="125" fill="#fff" fontSize="10">θ</text>
      <text x="50" y="30" fill="#9ca3af" fontSize="10">Power Factor = cos(θ) = kW/kVA</text>
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
            { name: "3-Phase Power Calculations", url: "https://amporalabs.com/blog/3-phase-power-calculations" },
          ]}
        />
        <BlogPostingJsonLd
          headline="3-Phase Power Calculations: Complete Guide for Electricians"
          description="Master 3-phase power calculations including delta vs wye, power factor, and practical examples."
          datePublished="2025-02-03"
          url="https://amporalabs.com/blog/3-phase-power-calculations"
        />

        <article className="max-w-4xl mx-auto px-6 py-12">
          {/* Breadcrumb */}
          <nav className="text-sm text-white/60 mb-8">
            <Link href="/" className="hover:text-white">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/blog" className="hover:text-white">Blog</Link>
            <span className="mx-2">/</span>
            <span className="text-white">3-Phase Power</span>
          </nav>

          {/* Hero */}
          <header className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <span className="px-3 py-1 bg-cyan-600/30 text-cyan-300 text-sm font-medium rounded-full">
                Calculations
              </span>
              <span className="text-white/40 text-sm">February 3, 2025</span>
              <span className="text-white/40 text-sm">• 14 min read</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">
              3-Phase Power Calculations: Complete Guide for Electricians
            </h1>
            <p className="text-xl text-white/70">
              Master 3-phase calculations for commercial and industrial work. Understand delta vs wye, line vs phase values, and power factor.
            </p>
          </header>

          {/* Hero Illustration */}
          <div className="mb-12 bg-gradient-to-br from-cyan-900/20 to-purple-900/20 rounded-2xl p-6 border border-white/10">
            <HeroIllustration />
          </div>

          {/* Content */}
          <div className="prose prose-invert prose-lg max-w-none">
            <h2>Why 3-Phase Power?</h2>
            <p>
              Three-phase power is the standard for commercial and industrial electrical systems. It offers
              significant advantages over single-phase power:
            </p>
            <ul>
              <li><strong>More efficient:</strong> Delivers more power with less conductor material</li>
              <li><strong>Constant power:</strong> Power delivery is smooth, not pulsating</li>
              <li><strong>Better for motors:</strong> Creates a rotating magnetic field naturally</li>
              <li><strong>Reduced conductor size:</strong> Neutral carries no current in balanced loads</li>
            </ul>

            <h2>Delta vs Wye Configurations</h2>
            <p>
              The two fundamental 3-phase configurations are Delta (Δ) and Wye (Y). Understanding the difference
              is critical for correct calculations.
            </p>

            <div className="my-8">
              <DeltaWyeDiagram />
            </div>

            <h3>Wye (Star) Configuration</h3>
            <p>In a wye system, one end of each winding connects to a common neutral point:</p>
            <div className="bg-white/5 rounded-xl p-6 my-6">
              <p className="text-white font-mono mb-2">V<sub>line</sub> = √3 × V<sub>phase</sub> = 1.732 × V<sub>phase</sub></p>
              <p className="text-white font-mono mb-2">I<sub>line</sub> = I<sub>phase</sub></p>
              <p className="text-white/70 text-sm mt-4">Example: 208Y/120V system → 208V line-to-line, 120V line-to-neutral</p>
            </div>

            <h3>Delta Configuration</h3>
            <p>In a delta system, the windings form a closed triangle with no neutral:</p>
            <div className="bg-white/5 rounded-xl p-6 my-6">
              <p className="text-white font-mono mb-2">V<sub>line</sub> = V<sub>phase</sub></p>
              <p className="text-white font-mono mb-2">I<sub>line</sub> = √3 × I<sub>phase</sub> = 1.732 × I<sub>phase</sub></p>
              <p className="text-white/70 text-sm mt-4">Example: 480V delta → 480V line-to-line, no neutral available</p>
            </div>

            <h2>Common 3-Phase Voltages</h2>
            <div className="bg-white/5 rounded-xl p-6 my-6">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="py-2 text-white">System</th>
                    <th className="py-2 text-white">Line-to-Line</th>
                    <th className="py-2 text-white">Line-to-Neutral</th>
                  </tr>
                </thead>
                <tbody className="text-white/70">
                  <tr className="border-b border-white/5">
                    <td className="py-2">208Y/120V</td>
                    <td className="py-2">208V</td>
                    <td className="py-2">120V</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-2">480Y/277V</td>
                    <td className="py-2">480V</td>
                    <td className="py-2">277V</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-2">240V Delta</td>
                    <td className="py-2">240V</td>
                    <td className="py-2">N/A (or 120V high-leg)</td>
                  </tr>
                  <tr>
                    <td className="py-2">480V Delta</td>
                    <td className="py-2">480V</td>
                    <td className="py-2">N/A</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2>Power Calculations</h2>
            <p>
              Understanding the relationship between real power (kW), reactive power (kVAR), and apparent
              power (kVA) is essential for proper equipment sizing.
            </p>

            <div className="my-8">
              <PowerTriangle />
            </div>

            <h3>Key 3-Phase Power Formulas</h3>
            <div className="bg-gradient-to-r from-purple-900/30 to-cyan-900/30 rounded-xl p-6 my-6">
              <div className="space-y-4">
                <div>
                  <p className="text-white font-semibold">Apparent Power (kVA):</p>
                  <p className="text-white font-mono text-lg">S = (V<sub>L</sub> × I<sub>L</sub> × √3) / 1000</p>
                </div>
                <div>
                  <p className="text-white font-semibold">Real Power (kW):</p>
                  <p className="text-white font-mono text-lg">P = (V<sub>L</sub> × I<sub>L</sub> × √3 × PF) / 1000</p>
                </div>
                <div>
                  <p className="text-white font-semibold">Current from kVA:</p>
                  <p className="text-white font-mono text-lg">I = (kVA × 1000) / (V<sub>L</sub> × √3)</p>
                </div>
                <div>
                  <p className="text-white font-semibold">Current from kW:</p>
                  <p className="text-white font-mono text-lg">I = (kW × 1000) / (V<sub>L</sub> × √3 × PF)</p>
                </div>
              </div>
            </div>

            <h2>Practical Example</h2>
            <div className="bg-white/5 rounded-xl p-6 my-6">
              <h4 className="text-white font-semibold mb-4">Problem: Size conductors for a 50 HP motor on 480V 3-phase</h4>

              <p className="text-white/70 mb-4">Given: 50 HP motor, 480V, 3-phase, 0.85 power factor, 90% efficiency</p>

              <div className="space-y-3 text-white/80">
                <p><strong>Step 1:</strong> Convert HP to kW</p>
                <p className="font-mono ml-4">P = 50 HP × 0.746 kW/HP = 37.3 kW (output)</p>

                <p><strong>Step 2:</strong> Account for efficiency (input power)</p>
                <p className="font-mono ml-4">P<sub>in</sub> = 37.3 / 0.90 = 41.4 kW</p>

                <p><strong>Step 3:</strong> Calculate current</p>
                <p className="font-mono ml-4">I = (41,400) / (480 × 1.732 × 0.85)</p>
                <p className="font-mono ml-4">I = 41,400 / 706.5 = <strong>58.6 Amps</strong></p>

                <p><strong>Step 4:</strong> Apply NEC 430.22 (125% for motor circuits)</p>
                <p className="font-mono ml-4">I<sub>conductor</sub> = 58.6 × 1.25 = <strong>73.3 Amps</strong></p>

                <p className="text-green-400 mt-4">→ Use #4 AWG copper conductors (85A @ 75°C)</p>
              </div>
            </div>

            <h2>Power Factor Correction</h2>
            <p>
              Low power factor wastes energy and can result in utility penalties. Most utilities require
              a power factor of 0.90 or higher. Power factor can be improved by adding capacitor banks.
            </p>
            <div className="bg-white/5 rounded-xl p-6 my-6">
              <p className="text-white font-semibold mb-2">kVAR required for correction:</p>
              <p className="text-white font-mono">kVAR = kW × (tan θ<sub>1</sub> - tan θ<sub>2</sub>)</p>
              <p className="text-white/60 text-sm mt-2">Where θ₁ = existing angle, θ₂ = desired angle</p>
            </div>

            <h2>Quick Reference Card</h2>
            <div className="grid md:grid-cols-2 gap-4 my-6">
              <div className="bg-white/5 rounded-xl p-4">
                <h4 className="text-purple-400 font-semibold mb-2">√3 = 1.732</h4>
                <p className="text-white/60 text-sm">The magic number in 3-phase calculations</p>
              </div>
              <div className="bg-white/5 rounded-xl p-4">
                <h4 className="text-cyan-400 font-semibold mb-2">746W = 1 HP</h4>
                <p className="text-white/60 text-sm">Converting horsepower to watts</p>
              </div>
              <div className="bg-white/5 rounded-xl p-4">
                <h4 className="text-green-400 font-semibold mb-2">kVA = kW / PF</h4>
                <p className="text-white/60 text-sm">Apparent from real power</p>
              </div>
              <div className="bg-white/5 rounded-xl p-4">
                <h4 className="text-amber-400 font-semibold mb-2">208V = 120V × √3</h4>
                <p className="text-white/60 text-sm">Line voltage from phase voltage</p>
              </div>
            </div>

            <h2>Use Ampora for Complex Calculations</h2>
            <p>
              3-phase calculations can get complex quickly—especially when factoring in power factor, efficiency,
              and derating factors. Ampora's calculator handles all of this instantly, giving you accurate
              results with NEC code references.
            </p>
          </div>

          {/* CTA */}
          <div className="mt-12 bg-gradient-to-r from-cyan-900/30 to-purple-900/30 rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-display font-bold mb-4">
              Calculate 3-Phase Power Instantly
            </h3>
            <p className="text-white/70 mb-6">
              Download Ampora for voltage drop, wire sizing, and power calculations on the job site.
            </p>
            <a
              href="https://apps.apple.com/us/app/ampora/id6753693522"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-black font-semibold rounded-full hover:bg-white/90 transition-colors"
            >
              Download Free on App Store
            </a>
          </div>

          {/* Related Posts */}
          <div className="mt-12 pt-8 border-t border-white/10">
            <h3 className="text-xl font-display font-bold mb-6">Related Articles</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <Link href="/blog/how-to-calculate-voltage-drop" className="group bg-white/5 hover:bg-white/10 rounded-xl p-6 transition-all">
                <h4 className="font-semibold group-hover:text-purple-400 transition-colors">How to Calculate Voltage Drop</h4>
                <p className="text-white/60 text-sm mt-2">Step-by-step voltage drop calculations.</p>
              </Link>
              <Link href="/blog/motor-circuit-protection-sizing" className="group bg-white/5 hover:bg-white/10 rounded-xl p-6 transition-all">
                <h4 className="font-semibold group-hover:text-purple-400 transition-colors">Motor Circuit Protection & Sizing</h4>
                <p className="text-white/60 text-sm mt-2">NEC requirements for motor circuits.</p>
              </Link>
            </div>
          </div>
        </article>
      </div>
    </main>
  );
}
