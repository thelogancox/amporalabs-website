import { Metadata } from "next";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import { BreadcrumbJsonLd, BlogPostingJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Power Factor Correction Basics: Understanding & Calculating Capacitor Sizing",
  description: "Learn power factor correction fundamentals for electricians. Understand what causes poor power factor, how to calculate capacitor sizing, kVAR requirements, and NEC considerations for power factor correction installations.",
  keywords: [
    "power factor correction",
    "power factor calculation",
    "capacitor sizing",
    "kVAR calculation",
    "power factor improvement",
    "reactive power",
    "lagging power factor",
    "power factor capacitors",
    "power factor penalty",
    "power triangle",
    "apparent power",
    "real power",
    "reactive power compensation",
    "NEC capacitor installation",
    "industrial power factor"
  ],
  alternates: {
    canonical: "https://amporalabs.com/blog/power-factor-correction-basics",
  },
  openGraph: {
    title: "Power Factor Correction Basics: Capacitor Sizing Guide - Ampora",
    description: "Learn power factor fundamentals and how to calculate capacitor sizing for power factor correction.",
    url: "https://amporalabs.com/blog/power-factor-correction-basics",
    type: "article",
  },
};

function HeroIllustration() {
  return (
    <svg viewBox="0 0 400 180" className="w-full h-44 md:h-52" aria-label="Power factor triangle illustration">
      {/* Background */}
      <rect x="20" y="20" width="360" height="140" rx="4" fill="#1f2937" fillOpacity="0.3"/>

      {/* Power Triangle */}
      <g transform="translate(60, 50)">
        {/* Real Power (horizontal) */}
        <line x1="0" y1="80" x2="150" y2="80" stroke="#22c55e" strokeWidth="4"/>
        <polygon points="145,75 155,80 145,85" fill="#22c55e"/>
        <text x="75" y="100" textAnchor="middle" fill="#22c55e" fontSize="12" fontWeight="bold">Real Power (kW)</text>
        <text x="75" y="115" textAnchor="middle" fill="#86efac" fontSize="9">P = Does the Work</text>

        {/* Reactive Power (vertical) */}
        <line x1="150" y1="80" x2="150" y2="10" stroke="#f59e0b" strokeWidth="4"/>
        <polygon points="145,15 150,5 155,15" fill="#f59e0b"/>
        <text x="185" y="50" textAnchor="middle" fill="#f59e0b" fontSize="12" fontWeight="bold">Reactive</text>
        <text x="185" y="65" textAnchor="middle" fill="#fcd34d" fontSize="9">(kVAR)</text>

        {/* Apparent Power (hypotenuse) */}
        <line x1="0" y1="80" x2="150" y2="10" stroke="#a855f7" strokeWidth="4"/>
        <text x="55" y="40" textAnchor="middle" fill="#a855f7" fontSize="12" fontWeight="bold" transform="rotate(-25, 55, 40)">Apparent (kVA)</text>

        {/* Angle */}
        <path d="M 30 80 A 30 30 0 0 0 45 60" fill="none" stroke="#ef4444" strokeWidth="2"/>
        <text x="50" y="70" fill="#ef4444" fontSize="10" fontWeight="bold">θ</text>
      </g>

      {/* Power Factor Display */}
      <g transform="translate(270, 50)">
        <rect x="0" y="0" width="100" height="80" rx="8" fill="#1f2937" stroke="#22c55e" strokeWidth="2"/>
        <text x="50" y="25" textAnchor="middle" fill="#9ca3af" fontSize="10">Power Factor</text>
        <text x="50" y="55" textAnchor="middle" fill="#22c55e" fontSize="24" fontWeight="bold">0.85</text>
        <text x="50" y="72" textAnchor="middle" fill="#fcd34d" fontSize="9">Lagging</text>
      </g>

      {/* Formula */}
      <text x="320" y="150" textAnchor="middle" fill="#9ca3af" fontSize="10">PF = kW / kVA = cos(θ)</text>
    </svg>
  );
}

function PowerTriangleDiagram() {
  return (
    <svg viewBox="0 0 380 200" className="w-full h-48" aria-label="Power triangle with before and after correction">
      {/* Title */}
      <text x="190" y="20" textAnchor="middle" fill="#fff" fontSize="12" fontWeight="bold">Power Factor Correction Effect</text>

      {/* Before Correction */}
      <g transform="translate(30, 50)">
        <text x="60" y="0" textAnchor="middle" fill="#ef4444" fontSize="10" fontWeight="bold">Before (PF = 0.70)</text>

        {/* Triangle */}
        <line x1="0" y1="100" x2="70" y2="100" stroke="#22c55e" strokeWidth="3"/>
        <line x1="70" y1="100" x2="70" y2="30" stroke="#f59e0b" strokeWidth="3"/>
        <line x1="0" y1="100" x2="70" y2="30" stroke="#a855f7" strokeWidth="3"/>

        {/* Labels */}
        <text x="35" y="115" textAnchor="middle" fill="#22c55e" fontSize="8">100 kW</text>
        <text x="85" y="70" textAnchor="middle" fill="#f59e0b" fontSize="8">102 kVAR</text>
        <text x="20" y="60" textAnchor="middle" fill="#a855f7" fontSize="8" transform="rotate(-45, 20, 60)">143 kVA</text>

        {/* Angle */}
        <path d="M 15 100 A 15 15 0 0 0 25 88" fill="none" stroke="#ef4444" strokeWidth="1.5"/>
        <text x="30" y="95" fill="#ef4444" fontSize="7">45°</text>
      </g>

      {/* Arrow */}
      <g transform="translate(160, 100)">
        <line x1="0" y1="0" x2="40" y2="0" stroke="#6b7280" strokeWidth="2"/>
        <polygon points="35,-5 45,0 35,5" fill="#6b7280"/>
        <text x="22" y="15" textAnchor="middle" fill="#6b7280" fontSize="8">Add Capacitors</text>
      </g>

      {/* After Correction */}
      <g transform="translate(220, 50)">
        <text x="60" y="0" textAnchor="middle" fill="#22c55e" fontSize="10" fontWeight="bold">After (PF = 0.95)</text>

        {/* Triangle - smaller reactive power */}
        <line x1="0" y1="100" x2="70" y2="100" stroke="#22c55e" strokeWidth="3"/>
        <line x1="70" y1="100" x2="70" y2="75" stroke="#f59e0b" strokeWidth="3"/>
        <line x1="0" y1="100" x2="70" y2="75" stroke="#a855f7" strokeWidth="3"/>

        {/* Capacitor effect (dashed) */}
        <line x1="70" y1="75" x2="70" y2="30" stroke="#3b82f6" strokeWidth="2" strokeDasharray="4"/>
        <text x="95" y="55" fill="#3b82f6" fontSize="7">Capacitors</text>
        <text x="95" y="65" fill="#3b82f6" fontSize="7">supply 69 kVAR</text>

        {/* Labels */}
        <text x="35" y="115" textAnchor="middle" fill="#22c55e" fontSize="8">100 kW</text>
        <text x="85" y="90" textAnchor="middle" fill="#f59e0b" fontSize="8">33 kVAR</text>
        <text x="25" y="85" textAnchor="middle" fill="#a855f7" fontSize="8" transform="rotate(-20, 25, 85)">105 kVA</text>

        {/* Angle */}
        <path d="M 15 100 A 15 15 0 0 0 22 93" fill="none" stroke="#22c55e" strokeWidth="1.5"/>
        <text x="28" y="97" fill="#22c55e" fontSize="7">18°</text>
      </g>

      {/* Savings callout */}
      <g transform="translate(120, 170)">
        <rect x="0" y="0" width="140" height="25" rx="4" fill="#22c55e" fillOpacity="0.2" stroke="#22c55e" strokeWidth="1"/>
        <text x="70" y="17" textAnchor="middle" fill="#22c55e" fontSize="9" fontWeight="bold">38 kVA reduction = Lower bills!</text>
      </g>
    </svg>
  );
}

function CapacitorSizingDiagram() {
  return (
    <svg viewBox="0 0 380 160" className="w-full h-40" aria-label="Capacitor sizing calculation">
      {/* Title */}
      <text x="190" y="18" textAnchor="middle" fill="#fff" fontSize="11" fontWeight="bold">Capacitor kVAR Calculation</text>

      {/* Formula box */}
      <rect x="30" y="35" width="320" height="50" rx="4" fill="#1e3a5f" stroke="#3b82f6" strokeWidth="1"/>
      <text x="190" y="55" textAnchor="middle" fill="#93c5fd" fontSize="10">kVAR required = kW × (tan θ₁ - tan θ₂)</text>
      <text x="190" y="75" textAnchor="middle" fill="#60a5fa" fontSize="9">Where: θ₁ = original angle, θ₂ = target angle</text>

      {/* Example calculation */}
      <rect x="30" y="95" width="320" height="55" rx="4" fill="#1f2937" stroke="#374151" strokeWidth="1"/>
      <text x="40" y="115" fill="#9ca3af" fontSize="9">Example: 100 kW load at PF 0.70, improve to PF 0.95</text>
      <text x="40" y="130" fill="#f59e0b" fontSize="9">kVAR = 100 × (tan 45.6° - tan 18.2°)</text>
      <text x="40" y="145" fill="#22c55e" fontSize="9" fontWeight="bold">kVAR = 100 × (1.02 - 0.33) = 69 kVAR capacitor needed</text>
    </svg>
  );
}

function CapacitorConnectionDiagram() {
  return (
    <svg viewBox="0 0 380 180" className="w-full h-44" aria-label="Capacitor connection methods">
      {/* Title */}
      <text x="190" y="18" textAnchor="middle" fill="#fff" fontSize="11" fontWeight="bold">Capacitor Bank Connections</text>

      {/* Delta Connection */}
      <g transform="translate(50, 40)">
        <text x="60" y="0" textAnchor="middle" fill="#f59e0b" fontSize="10" fontWeight="bold">Delta Connection</text>

        {/* Triangle */}
        <line x1="60" y1="20" x2="20" y2="90" stroke="#9ca3af" strokeWidth="2"/>
        <line x1="60" y1="20" x2="100" y2="90" stroke="#9ca3af" strokeWidth="2"/>
        <line x1="20" y1="90" x2="100" y2="90" stroke="#9ca3af" strokeWidth="2"/>

        {/* Capacitors on each leg */}
        <g transform="translate(30, 45)">
          <rect x="0" y="0" width="15" height="25" fill="none" stroke="#3b82f6" strokeWidth="2"/>
          <line x1="0" y1="12" x2="15" y2="12" stroke="#3b82f6" strokeWidth="2"/>
        </g>
        <g transform="translate(75, 45)">
          <rect x="0" y="0" width="15" height="25" fill="none" stroke="#3b82f6" strokeWidth="2"/>
          <line x1="0" y1="12" x2="15" y2="12" stroke="#3b82f6" strokeWidth="2"/>
        </g>
        <g transform="translate(52, 85)">
          <rect x="0" y="0" width="15" height="10" fill="none" stroke="#3b82f6" strokeWidth="2"/>
          <line x1="0" y1="5" x2="15" y2="5" stroke="#3b82f6" strokeWidth="2"/>
        </g>

        {/* Phase labels */}
        <circle cx="60" cy="20" r="5" fill="#ef4444"/>
        <text x="60" y="23" textAnchor="middle" fill="#fff" fontSize="6">A</text>
        <circle cx="20" cy="90" r="5" fill="#f59e0b"/>
        <text x="20" y="93" textAnchor="middle" fill="#fff" fontSize="6">B</text>
        <circle cx="100" cy="90" r="5" fill="#3b82f6"/>
        <text x="100" y="93" textAnchor="middle" fill="#fff" fontSize="6">C</text>

        <text x="60" y="115" textAnchor="middle" fill="#9ca3af" fontSize="7">V across cap = Line V</text>
        <text x="60" y="127" textAnchor="middle" fill="#9ca3af" fontSize="7">Common for higher V</text>
      </g>

      {/* Wye Connection */}
      <g transform="translate(220, 40)">
        <text x="60" y="0" textAnchor="middle" fill="#22c55e" fontSize="10" fontWeight="bold">Wye Connection</text>

        {/* Y shape */}
        <line x1="60" y1="55" x2="60" y2="20" stroke="#9ca3af" strokeWidth="2"/>
        <line x1="60" y1="55" x2="25" y2="90" stroke="#9ca3af" strokeWidth="2"/>
        <line x1="60" y1="55" x2="95" y2="90" stroke="#9ca3af" strokeWidth="2"/>

        {/* Capacitors on each leg */}
        <g transform="translate(52, 25)">
          <rect x="0" y="0" width="15" height="20" fill="none" stroke="#3b82f6" strokeWidth="2"/>
          <line x1="0" y1="10" x2="15" y2="10" stroke="#3b82f6" strokeWidth="2"/>
        </g>
        <g transform="translate(30, 65)">
          <rect x="0" y="0" width="15" height="15" fill="none" stroke="#3b82f6" strokeWidth="2"/>
          <line x1="0" y1="7" x2="15" y2="7" stroke="#3b82f6" strokeWidth="2"/>
        </g>
        <g transform="translate(75, 65)">
          <rect x="0" y="0" width="15" height="15" fill="none" stroke="#3b82f6" strokeWidth="2"/>
          <line x1="0" y1="7" x2="15" y2="7" stroke="#3b82f6" strokeWidth="2"/>
        </g>

        {/* Neutral point */}
        <circle cx="60" cy="55" r="4" fill="#22c55e"/>

        {/* Phase labels */}
        <circle cx="60" cy="15" r="5" fill="#ef4444"/>
        <text x="60" y="18" textAnchor="middle" fill="#fff" fontSize="6">A</text>
        <circle cx="22" cy="93" r="5" fill="#f59e0b"/>
        <text x="22" y="96" textAnchor="middle" fill="#fff" fontSize="6">B</text>
        <circle cx="98" cy="93" r="5" fill="#3b82f6"/>
        <text x="98" y="96" textAnchor="middle" fill="#fff" fontSize="6">C</text>

        <text x="60" y="115" textAnchor="middle" fill="#9ca3af" fontSize="7">V across cap = Phase V</text>
        <text x="60" y="127" textAnchor="middle" fill="#9ca3af" fontSize="7">Common for lower V</text>
      </g>
    </svg>
  );
}

export default function PowerFactorCorrectionPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navigation />
      <div className="pt-20">
        <BreadcrumbJsonLd
          items={[
            { name: "Home", url: "https://amporalabs.com" },
            { name: "Blog", url: "https://amporalabs.com/blog" },
            { name: "Power Factor Correction", url: "https://amporalabs.com/blog/power-factor-correction-basics" },
          ]}
        />
        <BlogPostingJsonLd
          headline="Power Factor Correction Basics: Understanding & Calculating Capacitor Sizing"
          description="Learn power factor correction fundamentals and how to calculate capacitor sizing for power factor improvement."
          datePublished="2025-02-05"
          dateModified="2025-02-05"
          url="https://amporalabs.com/blog/power-factor-correction-basics"
          wordCount={2500}
          keywords={["power factor correction", "capacitor sizing", "kVAR calculation", "reactive power"]}
        />

        <article className="max-w-4xl mx-auto px-6 py-12">
          {/* Breadcrumb */}
          <nav className="text-sm text-white/60 mb-8">
            <Link href="/" className="hover:text-white">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/blog" className="hover:text-white">Blog</Link>
            <span className="mx-2">/</span>
            <span className="text-white">Power Factor Correction</span>
          </nav>

          {/* Article Header */}
          <header className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <span className="px-3 py-1 bg-amber-600/30 text-amber-300 text-sm font-medium rounded-full">
                Calculations
              </span>
              <span className="text-white/40 text-sm">11 min read</span>
              <span className="text-white/40 text-sm">February 5, 2025</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6 leading-tight">
              Power Factor Correction Basics: Capacitor Sizing Guide
            </h1>
            <p className="text-xl text-white/70">
              Understand what power factor is, why it matters, and how to calculate the capacitor size needed to correct it. Essential knowledge for commercial and industrial electrical work.
            </p>
          </header>

          <div className="mb-12 bg-gradient-to-br from-amber-900/20 to-purple-900/20 rounded-2xl p-6 border border-white/10">
            <HeroIllustration />
          </div>

          {/* Quick Reference CTA */}
          <div className="bg-amber-900/30 border border-amber-500/30 rounded-2xl p-6 mb-12">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div>
                <h3 className="font-display font-bold text-lg mb-1">Power Calculations Made Easy</h3>
                <p className="text-white/70 text-sm">Use Ampora's calculators for 3-phase power, voltage drop, and more.</p>
              </div>
              <a
                href="https://apps.apple.com/us/app/ampora/id6753693522"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-amber-600 text-white font-semibold rounded-full hover:bg-amber-500 transition-colors whitespace-nowrap"
              >
                Download Free
              </a>
            </div>
          </div>

          {/* Table of Contents */}
          <div className="bg-white/5 rounded-2xl p-6 mb-12">
            <h2 className="font-display font-bold mb-4">In This Guide</h2>
            <ul className="space-y-2 text-white/70">
              <li><a href="#what-is-pf" className="hover:text-amber-400">→ What is Power Factor?</a></li>
              <li><a href="#power-triangle" className="hover:text-amber-400">→ The Power Triangle</a></li>
              <li><a href="#causes" className="hover:text-amber-400">→ Causes of Poor Power Factor</a></li>
              <li><a href="#effects" className="hover:text-amber-400">→ Effects of Poor Power Factor</a></li>
              <li><a href="#correction" className="hover:text-amber-400">→ Power Factor Correction Methods</a></li>
              <li><a href="#capacitor-sizing" className="hover:text-amber-400">→ Capacitor Sizing Calculations</a></li>
              <li><a href="#nec-considerations" className="hover:text-amber-400">→ NEC Installation Considerations</a></li>
            </ul>
          </div>

          {/* Article Content */}
          <div className="prose prose-invert prose-lg max-w-none">

            <section id="what-is-pf" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">What is Power Factor?</h2>
              <p className="text-white/80 mb-4">
                <strong>Power factor (PF)</strong> is the ratio of real power (kW) to apparent power (kVA) in an AC electrical system. It's a measure of how effectively electrical power is being used—specifically, how much of the power supplied is actually doing useful work.
              </p>

              <div className="bg-green-900/30 border border-green-500/30 rounded-xl p-6 my-6">
                <h3 className="font-semibold text-green-400 mb-3">Power Factor Formula</h3>
                <div className="text-2xl font-mono text-center text-green-400 mb-4">PF = kW / kVA = cos(θ)</div>
                <ul className="text-white/70 space-y-2">
                  <li><strong>PF = 1.0 (unity):</strong> All power is doing useful work (ideal)</li>
                  <li><strong>PF = 0.8 - 0.95:</strong> Typical industrial range</li>
                  <li><strong>PF &lt; 0.8:</strong> Poor power factor, often penalized by utilities</li>
                </ul>
              </div>

              <p className="text-white/80 mb-4">
                Power factor ranges from 0 to 1 (or 0% to 100%). A power factor of 1 means all the power supplied is being used for useful work. A power factor of 0.7 means only 70% of the apparent power is doing work—the rest is reactive power that flows back and forth without producing work.
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-3">Leading vs. Lagging Power Factor</h3>
              <div className="grid md:grid-cols-2 gap-4 my-6">
                <div className="bg-amber-900/30 rounded-xl p-6">
                  <h4 className="font-semibold text-amber-400 mb-2">Lagging Power Factor</h4>
                  <p className="text-white/70 text-sm mb-3">
                    Current lags behind voltage. Caused by inductive loads.
                  </p>
                  <ul className="text-white/60 text-sm space-y-1">
                    <li>• Motors</li>
                    <li>• Transformers</li>
                    <li>• Induction heaters</li>
                    <li>• Fluorescent lighting ballasts</li>
                  </ul>
                  <p className="text-amber-400 text-sm mt-3">Most common type</p>
                </div>
                <div className="bg-cyan-900/30 rounded-xl p-6">
                  <h4 className="font-semibold text-cyan-400 mb-2">Leading Power Factor</h4>
                  <p className="text-white/70 text-sm mb-3">
                    Current leads voltage. Caused by capacitive loads.
                  </p>
                  <ul className="text-white/60 text-sm space-y-1">
                    <li>• Capacitor banks</li>
                    <li>• Synchronous motors (overexcited)</li>
                    <li>• Long transmission cables (lightly loaded)</li>
                    <li>• Power electronic devices</li>
                  </ul>
                  <p className="text-cyan-400 text-sm mt-3">Less common in practice</p>
                </div>
              </div>
            </section>

            <section id="power-triangle" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">The Power Triangle</h2>
              <p className="text-white/80 mb-4">
                The power triangle visually represents the relationship between real power, reactive power, and apparent power. Understanding this relationship is key to power factor correction.
              </p>

              <div className="my-8">
                <PowerTriangleDiagram />
              </div>

              <div className="overflow-x-auto my-6">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-white/20">
                      <th className="text-left py-3 px-4 text-white/60">Power Type</th>
                      <th className="text-left py-3 px-4 text-white/60">Symbol</th>
                      <th className="text-left py-3 px-4 text-white/60">Unit</th>
                      <th className="text-left py-3 px-4 text-white/60">Description</th>
                    </tr>
                  </thead>
                  <tbody className="text-white/80">
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-semibold text-green-400">Real Power</td>
                      <td className="py-3 px-4 font-mono">P</td>
                      <td className="py-3 px-4">kW (kilowatts)</td>
                      <td className="py-3 px-4 text-white/60">Power that does actual work</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-semibold text-amber-400">Reactive Power</td>
                      <td className="py-3 px-4 font-mono">Q</td>
                      <td className="py-3 px-4">kVAR (kilovolt-amperes reactive)</td>
                      <td className="py-3 px-4 text-white/60">Power stored and returned by inductors/capacitors</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-semibold text-purple-400">Apparent Power</td>
                      <td className="py-3 px-4 font-mono">S</td>
                      <td className="py-3 px-4">kVA (kilovolt-amperes)</td>
                      <td className="py-3 px-4 text-white/60">Total power supplied by source</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="bg-white/5 rounded-xl p-6 my-6">
                <h4 className="font-semibold mb-3">Power Triangle Formulas</h4>
                <div className="grid md:grid-cols-2 gap-4 text-center">
                  <div className="bg-purple-900/30 rounded-lg p-4">
                    <div className="text-lg font-mono text-purple-400">S = √(P² + Q²)</div>
                    <div className="text-white/60 text-sm mt-1">Pythagorean relationship</div>
                  </div>
                  <div className="bg-green-900/30 rounded-lg p-4">
                    <div className="text-lg font-mono text-green-400">PF = P / S</div>
                    <div className="text-white/60 text-sm mt-1">Power factor definition</div>
                  </div>
                </div>
              </div>
            </section>

            <section id="causes" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Causes of Poor Power Factor</h2>
              <p className="text-white/80 mb-4">
                Poor power factor is primarily caused by inductive loads, which are extremely common in industrial and commercial facilities.
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-3">Common Low Power Factor Culprits</h3>
              <div className="space-y-4 my-6">
                <div className="bg-white/5 rounded-xl p-4">
                  <h4 className="font-semibold text-amber-400">Induction Motors</h4>
                  <p className="text-white/70 text-sm">
                    The largest cause of low power factor in industry. Motors running at light load have especially poor power factor (can drop to 0.3-0.4 at no load).
                  </p>
                </div>
                <div className="bg-white/5 rounded-xl p-4">
                  <h4 className="font-semibold text-amber-400">Transformers</h4>
                  <p className="text-white/70 text-sm">
                    Lightly loaded transformers draw significant magnetizing current, causing low power factor. Oversized transformers waste reactive power.
                  </p>
                </div>
                <div className="bg-white/5 rounded-xl p-4">
                  <h4 className="font-semibold text-amber-400">Fluorescent and HID Lighting</h4>
                  <p className="text-white/70 text-sm">
                    Magnetic ballasts have poor power factor (0.5-0.6). Electronic ballasts are much better (0.9+). Consider this when retrofitting lighting.
                  </p>
                </div>
                <div className="bg-white/5 rounded-xl p-4">
                  <h4 className="font-semibold text-amber-400">Welding Equipment</h4>
                  <p className="text-white/70 text-sm">
                    Arc welders and resistance welders often have power factors of 0.5-0.7, especially at partial load.
                  </p>
                </div>
                <div className="bg-white/5 rounded-xl p-4">
                  <h4 className="font-semibold text-amber-400">Variable Frequency Drives (VFDs)</h4>
                  <p className="text-white/70 text-sm">
                    While VFDs improve motor efficiency, older designs with diode front-ends can have power factor issues and harmonic distortion.
                  </p>
                </div>
              </div>
            </section>

            <section id="effects" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Effects of Poor Power Factor</h2>
              <p className="text-white/80 mb-4">
                Poor power factor has real costs—both direct financial penalties and indirect effects on the electrical system.
              </p>

              <div className="grid md:grid-cols-2 gap-6 my-6">
                <div className="bg-red-900/30 rounded-xl p-6">
                  <h4 className="font-semibold text-red-400 mb-3">Financial Impacts</h4>
                  <ul className="text-white/70 space-y-2 text-sm">
                    <li><strong>Utility penalties:</strong> Many utilities charge extra when PF falls below 0.85-0.90</li>
                    <li><strong>Demand charges:</strong> Higher kVA demand increases demand charges</li>
                    <li><strong>Energy losses:</strong> Higher current means greater I²R losses</li>
                    <li><strong>Equipment costs:</strong> Larger transformers and cables needed</li>
                  </ul>
                </div>
                <div className="bg-orange-900/30 rounded-xl p-6">
                  <h4 className="font-semibold text-orange-400 mb-3">Technical Impacts</h4>
                  <ul className="text-white/70 space-y-2 text-sm">
                    <li><strong>Voltage drop:</strong> Increased current causes greater voltage drop</li>
                    <li><strong>Reduced capacity:</strong> Transformers and cables limited by kVA</li>
                    <li><strong>Overheating:</strong> Higher currents cause conductor heating</li>
                    <li><strong>Equipment stress:</strong> Motors and other equipment work harder</li>
                  </ul>
                </div>
              </div>

              <div className="bg-purple-900/30 border border-purple-500/30 rounded-xl p-6 my-6">
                <h4 className="font-semibold text-purple-400 mb-2">Example: Power Factor Penalty Calculation</h4>
                <p className="text-white/70 text-sm mb-3">
                  A facility with 500 kW demand at 0.75 power factor:
                </p>
                <ul className="text-white/60 text-sm space-y-1">
                  <li>Apparent power: 500 kW / 0.75 = <strong>667 kVA</strong></li>
                  <li>If corrected to 0.95: 500 kW / 0.95 = <strong>526 kVA</strong></li>
                  <li>Reduction: 667 - 526 = <strong>141 kVA saved</strong></li>
                  <li>At $10/kVA demand charge: <strong>$1,410/month savings</strong></li>
                </ul>
              </div>
            </section>

            <section id="correction" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Power Factor Correction Methods</h2>
              <p className="text-white/80 mb-4">
                The most common method of power factor correction is adding capacitors to supply the reactive power that inductive loads demand. This reduces the reactive power the utility must supply.
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-3">Capacitor Bank Types</h3>
              <div className="overflow-x-auto my-6">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-white/20">
                      <th className="text-left py-3 px-4 text-white/60">Type</th>
                      <th className="text-left py-3 px-4 text-white/60">Location</th>
                      <th className="text-left py-3 px-4 text-white/60">Advantages</th>
                      <th className="text-left py-3 px-4 text-white/60">Disadvantages</th>
                    </tr>
                  </thead>
                  <tbody className="text-white/80">
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-semibold text-blue-400">Fixed Capacitors</td>
                      <td className="py-3 px-4">At load or main bus</td>
                      <td className="py-3 px-4 text-white/60">Simple, low cost</td>
                      <td className="py-3 px-4 text-white/60">Can overcorrect at light load</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-semibold text-green-400">Automatic Banks</td>
                      <td className="py-3 px-4">Main bus</td>
                      <td className="py-3 px-4 text-white/60">Adjusts to load changes</td>
                      <td className="py-3 px-4 text-white/60">Higher cost, maintenance</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-semibold text-purple-400">Synchronous Condensers</td>
                      <td className="py-3 px-4">Main bus</td>
                      <td className="py-3 px-4 text-white/60">Continuous adjustment</td>
                      <td className="py-3 px-4 text-white/60">Highest cost, complex</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="my-8">
                <CapacitorConnectionDiagram />
              </div>

              <h3 className="text-xl font-semibold mt-6 mb-3">Where to Install Capacitors</h3>
              <ul className="list-disc list-inside text-white/70 space-y-2 mb-4">
                <li><strong>At individual motors:</strong> Best correction, capacitor switched with motor. Most effective but highest installation cost.</li>
                <li><strong>At motor control center:</strong> Good balance of effectiveness and cost. Grouped correction for multiple motors.</li>
                <li><strong>At main service:</strong> Lowest installation cost but doesn't reduce current in facility wiring.</li>
              </ul>
            </section>

            <section id="capacitor-sizing" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Capacitor Sizing Calculations</h2>
              <p className="text-white/80 mb-4">
                Calculating the required capacitor size involves determining how much reactive power (kVAR) is needed to improve the power factor from its current value to the target value.
              </p>

              <div className="my-8">
                <CapacitorSizingDiagram />
              </div>

              <h3 className="text-xl font-semibold mt-6 mb-3">Step-by-Step Calculation</h3>
              <div className="space-y-4 my-6">
                <div className="bg-white/5 rounded-xl p-4">
                  <p className="text-white/70"><strong>Step 1:</strong> Determine current power factor and target power factor</p>
                  <p className="text-white/60 text-sm mt-1">Example: Current PF = 0.70, Target PF = 0.95</p>
                </div>
                <div className="bg-white/5 rounded-xl p-4">
                  <p className="text-white/70"><strong>Step 2:</strong> Find the angle for each power factor</p>
                  <p className="text-white/60 font-mono text-sm mt-1">θ₁ = arccos(0.70) = 45.6°</p>
                  <p className="text-white/60 font-mono text-sm">θ₂ = arccos(0.95) = 18.2°</p>
                </div>
                <div className="bg-white/5 rounded-xl p-4">
                  <p className="text-white/70"><strong>Step 3:</strong> Calculate tangent values</p>
                  <p className="text-white/60 font-mono text-sm mt-1">tan(45.6°) = 1.02</p>
                  <p className="text-white/60 font-mono text-sm">tan(18.2°) = 0.33</p>
                </div>
                <div className="bg-white/5 rounded-xl p-4">
                  <p className="text-white/70"><strong>Step 4:</strong> Apply the formula</p>
                  <p className="text-white/60 font-mono text-sm mt-1">kVAR = kW × (tan θ₁ - tan θ₂)</p>
                  <p className="text-white/60 font-mono text-sm">kVAR = 100 × (1.02 - 0.33) = <strong>69 kVAR</strong></p>
                </div>
              </div>

              <h3 className="text-xl font-semibold mt-6 mb-3">Quick Reference Multipliers</h3>
              <p className="text-white/80 mb-4">
                Use this table to quickly find the kVAR multiplier. Multiply your kW load by the factor to get required kVAR.
              </p>
              <div className="overflow-x-auto my-6">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-white/20">
                      <th className="text-left py-3 px-4 text-white/60">Current PF</th>
                      <th className="text-center py-3 px-4 text-white/60">To 0.85</th>
                      <th className="text-center py-3 px-4 text-white/60">To 0.90</th>
                      <th className="text-center py-3 px-4 text-white/60">To 0.95</th>
                      <th className="text-center py-3 px-4 text-white/60">To 1.00</th>
                    </tr>
                  </thead>
                  <tbody className="text-white/80">
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">0.60</td>
                      <td className="py-3 px-4 text-center font-mono">0.71</td>
                      <td className="py-3 px-4 text-center font-mono">0.85</td>
                      <td className="py-3 px-4 text-center font-mono">1.00</td>
                      <td className="py-3 px-4 text-center font-mono">1.33</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">0.70</td>
                      <td className="py-3 px-4 text-center font-mono">0.40</td>
                      <td className="py-3 px-4 text-center font-mono">0.54</td>
                      <td className="py-3 px-4 text-center font-mono">0.69</td>
                      <td className="py-3 px-4 text-center font-mono">1.02</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">0.75</td>
                      <td className="py-3 px-4 text-center font-mono">0.26</td>
                      <td className="py-3 px-4 text-center font-mono">0.40</td>
                      <td className="py-3 px-4 text-center font-mono">0.55</td>
                      <td className="py-3 px-4 text-center font-mono">0.88</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">0.80</td>
                      <td className="py-3 px-4 text-center font-mono">0.13</td>
                      <td className="py-3 px-4 text-center font-mono">0.27</td>
                      <td className="py-3 px-4 text-center font-mono">0.42</td>
                      <td className="py-3 px-4 text-center font-mono">0.75</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4">0.85</td>
                      <td className="py-3 px-4 text-center font-mono">0.00</td>
                      <td className="py-3 px-4 text-center font-mono">0.14</td>
                      <td className="py-3 px-4 text-center font-mono">0.29</td>
                      <td className="py-3 px-4 text-center font-mono">0.62</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section id="nec-considerations" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">NEC Installation Considerations</h2>
              <p className="text-white/80 mb-4">
                NEC Article 460 covers the installation of capacitors. Key requirements ensure safe operation and protection of the electrical system.
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-3">Key NEC Requirements (Article 460)</h3>
              <div className="bg-white/5 rounded-xl p-6 my-6">
                <ul className="text-white/80 space-y-3">
                  <li><strong>460.6 - Discharge:</strong> Capacitors must have automatic discharge to reduce residual voltage to 50V or less within 1 minute for 600V or less, 5 minutes for over 600V.</li>
                  <li><strong>460.8 - Conductor Rating:</strong> Conductors must be rated at 135% or more of the capacitor's rated current.</li>
                  <li><strong>460.9 - Overcurrent Protection:</strong> Each capacitor must be protected by overcurrent device rated or set as low as practicable.</li>
                  <li><strong>460.10 - Disconnecting Means:</strong> Required to disconnect from all sources of voltage.</li>
                  <li><strong>460.24 - Grounding:</strong> Capacitor cases must be grounded.</li>
                </ul>
              </div>

              <h3 className="text-xl font-semibold mt-6 mb-3">Motor-Mounted Capacitors</h3>
              <p className="text-white/80 mb-4">
                When installing capacitors at individual motors, follow these guidelines:
              </p>
              <ul className="list-disc list-inside text-white/70 space-y-2 mb-4">
                <li>Capacitor kVAR should not exceed motor no-load magnetizing kVAR</li>
                <li>Rule of thumb: Maximum kVAR = 90% of motor no-load kVA</li>
                <li>Oversizing can cause self-excitation and voltage spikes when motor is disconnected</li>
                <li>Connect on load side of motor overload protection</li>
              </ul>

              <div className="bg-red-900/30 border border-red-500/30 rounded-xl p-6 my-6">
                <h4 className="font-semibold text-red-400 mb-2">Warning: Harmonic Considerations</h4>
                <p className="text-white/70">
                  In facilities with significant harmonic distortion (VFDs, electronic loads), capacitors can resonate with system inductance and amplify harmonics. Consider harmonic filters or detuned capacitor banks in such installations. Always perform a power quality study before large capacitor installations.
                </p>
              </div>
            </section>

            {/* CTA Section */}
            <section className="bg-gradient-to-r from-amber-900/30 to-purple-900/30 rounded-2xl p-8 my-12">
              <h2 className="text-2xl font-display font-bold mb-4 text-center">
                Power Calculations in Your Pocket
              </h2>
              <p className="text-white/70 mb-6 text-center">
                Use Ampora's electrical calculators for 3-phase power, voltage drop, wire sizing, and more. Plus AI-powered assistance for complex electrical questions.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <a
                  href="https://apps.apple.com/us/app/ampora/id6753693522"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-white text-black font-semibold rounded-full hover:bg-white/90 transition-colors text-center"
                >
                  Download Free on App Store
                </a>
              </div>
            </section>

            {/* Related Articles */}
            <section className="mt-12">
              <h2 className="text-2xl font-display font-bold mb-6">Related Articles</h2>
              <div className="grid md:grid-cols-2 gap-4">
                <Link href="/blog/3-phase-power-calculations" className="bg-white/5 hover:bg-white/10 rounded-xl p-6 transition-colors">
                  <span className="text-amber-400 text-sm">Calculations</span>
                  <h3 className="font-semibold mt-2">3-Phase Power Calculations</h3>
                </Link>
                <Link href="/blog/transformer-sizing-guide" className="bg-white/5 hover:bg-white/10 rounded-xl p-6 transition-colors">
                  <span className="text-purple-400 text-sm">NEC Code</span>
                  <h3 className="font-semibold mt-2">Transformer Sizing Guide</h3>
                </Link>
                <Link href="/blog/motor-circuit-protection-sizing" className="bg-white/5 hover:bg-white/10 rounded-xl p-6 transition-colors">
                  <span className="text-purple-400 text-sm">NEC Code</span>
                  <h3 className="font-semibold mt-2">Motor Circuit Protection & Sizing</h3>
                </Link>
                <Link href="/blog/how-to-calculate-voltage-drop" className="bg-white/5 hover:bg-white/10 rounded-xl p-6 transition-colors">
                  <span className="text-amber-400 text-sm">Calculations</span>
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
          <p className="text-sm text-white/40">© 2025 Ampora Labs</p>
        </div>
      </footer>
    </main>
  );
}
