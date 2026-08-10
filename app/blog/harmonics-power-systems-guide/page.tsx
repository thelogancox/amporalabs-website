import { Metadata } from "next";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import { BlogPostingJsonLd, BreadcrumbJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Harmonics in Electrical Systems: Causes, Effects & Solutions",
  description: "Comprehensive guide to harmonics in power systems for electricians. Learn about THD measurement, harmonic sources like VFDs and LED drivers, effects on transformers and neutrals, triplen harmonics, K-rated transformers, passive and active filters, and IEEE 519 compliance.",
  keywords: [
    "electrical harmonics",
    "total harmonic distortion",
    "THD measurement",
    "harmonic filters",
    "K-rated transformers",
    "triplen harmonics",
    "IEEE 519",
    "power quality",
    "VFD harmonics",
    "neutral overloading",
  ],
  alternates: {
    canonical: "https://amporalabs.com/blog/harmonics-power-systems-guide",
  },
  openGraph: {
    title: "Harmonics in Electrical Systems: Causes, Effects & Solutions - Ampora",
    description: "Comprehensive guide to harmonics in power systems. Learn about THD, harmonic sources, effects on equipment, and mitigation solutions.",
    url: "https://amporalabs.com/blog/harmonics-power-systems-guide",
    type: "article",
    publishedTime: "2025-05-22",
  },
};

function HeroIllustration() {
  return (
    <svg viewBox="0 0 400 200" className="w-full h-48 md:h-64" aria-label="Distorted sine wave with harmonic frequencies">
      <defs>
        <linearGradient id="fundamentalGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#22c55e" />
          <stop offset="100%" stopColor="#16a34a" />
        </linearGradient>
        <linearGradient id="thirdGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#f59e0b" />
          <stop offset="100%" stopColor="#d97706" />
        </linearGradient>
        <linearGradient id="fifthGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#ef4444" />
          <stop offset="100%" stopColor="#dc2626" />
        </linearGradient>
        <linearGradient id="distortedGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#a855f7" />
          <stop offset="100%" stopColor="#7c3aed" />
        </linearGradient>
      </defs>

      {/* Background grid */}
      <line x1="30" y1="100" x2="370" y2="100" stroke="#374151" strokeWidth="1" />
      {[70, 110, 150, 190, 230, 270, 310, 350].map((x) => (
        <line key={x} x1={x} y1="30" x2={x} y2="170" stroke="#374151" strokeWidth="0.5" strokeDasharray="4" />
      ))}

      {/* Fundamental 60Hz - clean sine */}
      <path
        d="M 30 100 Q 50 40, 70 100 Q 90 160, 110 100 Q 130 40, 150 100 Q 170 160, 190 100 Q 210 40, 230 100 Q 250 160, 270 100 Q 290 40, 310 100 Q 330 160, 350 100"
        fill="none"
        stroke="url(#fundamentalGrad)"
        strokeWidth="2"
        opacity="0.5"
      />

      {/* 3rd Harmonic - faster oscillation, smaller amplitude */}
      <path
        d="M 30 100 Q 37 78, 43 100 Q 50 122, 57 100 Q 63 78, 70 100 Q 77 122, 83 100 Q 90 78, 97 100 Q 103 122, 110 100 Q 117 78, 123 100 Q 130 122, 137 100 Q 143 78, 150 100 Q 157 122, 163 100 Q 170 78, 177 100 Q 183 122, 190 100 Q 197 78, 203 100 Q 210 122, 217 100 Q 223 78, 230 100 Q 237 122, 243 100 Q 250 78, 257 100 Q 263 122, 270 100 Q 277 78, 283 100 Q 290 122, 297 100 Q 303 78, 310 100 Q 317 122, 323 100 Q 330 78, 337 100 Q 343 122, 350 100"
        fill="none"
        stroke="url(#thirdGrad)"
        strokeWidth="1.5"
        opacity="0.5"
      />

      {/* Distorted composite waveform */}
      <path
        d="M 30 100 Q 40 32, 55 75 Q 60 85, 70 105 Q 80 130, 90 165 Q 100 140, 110 100 Q 120 55, 135 70 Q 140 78, 150 100 Q 160 128, 170 160 Q 180 138, 190 100 Q 200 45, 215 72 Q 220 82, 230 105 Q 240 130, 250 162 Q 260 138, 270 100 Q 280 50, 295 70 Q 300 80, 310 100 Q 320 132, 330 158 Q 340 135, 350 100"
        fill="none"
        stroke="url(#distortedGrad)"
        strokeWidth="3"
      />

      {/* Legend */}
      <g transform="translate(30, 180)">
        <line x1="0" y1="0" x2="20" y2="0" stroke="#22c55e" strokeWidth="2" opacity="0.5" />
        <text x="24" y="4" fill="#9ca3af" fontSize="8">Fundamental (60Hz)</text>

        <line x1="110" y1="0" x2="130" y2="0" stroke="#f59e0b" strokeWidth="1.5" opacity="0.5" />
        <text x="134" y="4" fill="#9ca3af" fontSize="8">3rd Harmonic (180Hz)</text>

        <line x1="240" y1="0" x2="260" y2="0" stroke="#a855f7" strokeWidth="3" />
        <text x="264" y="4" fill="#9ca3af" fontSize="8">Distorted Composite</text>
      </g>

      {/* THD indicator */}
      <g transform="translate(300, 25)">
        <rect x="0" y="0" width="65" height="40" rx="6" fill="#1f2937" stroke="#ef4444" strokeWidth="1.5" />
        <text x="32" y="16" textAnchor="middle" fill="#9ca3af" fontSize="8">THD</text>
        <text x="32" y="34" textAnchor="middle" fill="#ef4444" fontSize="14" fontWeight="bold">28.3%</text>
      </g>
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
            { name: "Harmonics in Power Systems", url: "https://amporalabs.com/blog/harmonics-power-systems-guide" },
          ]}
        />
        <BlogPostingJsonLd
          headline="Harmonics in Electrical Systems: Causes, Effects & Solutions"
          description="Comprehensive guide to harmonics in power systems including THD measurement, harmonic sources, effects on equipment, and mitigation solutions."
          datePublished="2025-05-22"
          dateModified="2025-05-22"
          url="https://amporalabs.com/blog/harmonics-power-systems-guide"
          wordCount={3200}
          keywords={["electrical harmonics", "THD", "harmonic filters", "K-rated transformers", "IEEE 519", "power quality"]}
        />

        <article className="max-w-4xl mx-auto px-6 py-12">
          {/* Breadcrumb */}
          <nav className="text-sm text-white/60 mb-8">
            <Link href="/" className="hover:text-white">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/blog" className="hover:text-white">Blog</Link>
            <span className="mx-2">/</span>
            <span className="text-white">Harmonics in Power Systems</span>
          </nav>

          {/* Article Header */}
          <header className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <span className="px-3 py-1 bg-amber-600/30 text-amber-300 text-sm font-medium rounded-full">
                Calculations
              </span>
              <span className="text-white/40 text-sm">May 22, 2025</span>
              <span className="text-white/40 text-sm">14 min read</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6 leading-tight">
              Harmonics in Electrical Systems: Causes, Effects &amp; Solutions
            </h1>
            <p className="text-xl text-white/70">
              Understand how harmonic distortion impacts power quality, why modern electrical loads generate harmonics, and what solutions electricians and engineers use to keep systems running reliably.
            </p>
          </header>

          <div className="mb-12 bg-gradient-to-br from-amber-900/20 to-cyan-900/20 rounded-2xl p-6 border border-white/10">
            <HeroIllustration />
          </div>

          {/* Table of Contents */}
          <div className="bg-white/5 rounded-2xl p-6 mb-12">
            <h2 className="font-display font-bold mb-4">In This Guide</h2>
            <ul className="space-y-2 text-white/70">
              <li><a href="#what-are-harmonics" className="hover:text-amber-400">&#8594; What Are Harmonics?</a></li>
              <li><a href="#thd-measurement" className="hover:text-amber-400">&#8594; Measuring THD (Total Harmonic Distortion)</a></li>
              <li><a href="#harmonic-sources" className="hover:text-amber-400">&#8594; Common Harmonic Sources</a></li>
              <li><a href="#effects" className="hover:text-amber-400">&#8594; Effects on Transformers, Neutrals, Motors &amp; Capacitors</a></li>
              <li><a href="#triplen-harmonics" className="hover:text-amber-400">&#8594; Triplen Harmonics &amp; Neutral Overloading</a></li>
              <li><a href="#k-rated-transformers" className="hover:text-amber-400">&#8594; K-Rated Transformers</a></li>
              <li><a href="#harmonic-filters" className="hover:text-amber-400">&#8594; Harmonic Filters: Passive &amp; Active</a></li>
              <li><a href="#ieee-519" className="hover:text-amber-400">&#8594; IEEE 519 Limits</a></li>
              <li><a href="#power-quality-analysis" className="hover:text-amber-400">&#8594; Power Quality Analysis</a></li>
              <li><a href="#solutions-summary" className="hover:text-amber-400">&#8594; Common Solutions Summary</a></li>
            </ul>
          </div>

          {/* Article Content */}
          <div className="prose prose-invert prose-lg max-w-none">

            <section id="what-are-harmonics" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">What Are Harmonics?</h2>
              <p className="text-white/80 mb-4">
                In an ideal AC power system, voltage and current follow a pure sinusoidal waveform at the fundamental frequency&mdash;60 Hz in North America, 50 Hz in most other countries. <strong>Harmonics</strong> are additional sinusoidal components at integer multiples of the fundamental frequency that distort this clean waveform.
              </p>
              <p className="text-white/80 mb-4">
                When non-linear loads draw current in pulses rather than smooth sine waves, they inject harmonic currents back into the power system. These harmonic currents interact with system impedance to create harmonic voltage distortion, degrading power quality for every device on the circuit.
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-3">Harmonic Orders</h3>
              <p className="text-white/80 mb-4">
                Each harmonic is identified by its order number&mdash;the multiple of the fundamental frequency. The most significant harmonics in power systems are the low-order odd harmonics.
              </p>

              <div className="overflow-x-auto my-6">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-white/20">
                      <th className="text-left py-3 px-4 text-white/60">Harmonic Order</th>
                      <th className="text-left py-3 px-4 text-white/60">Frequency (60 Hz System)</th>
                      <th className="text-left py-3 px-4 text-white/60">Sequence</th>
                      <th className="text-left py-3 px-4 text-white/60">Notes</th>
                    </tr>
                  </thead>
                  <tbody className="text-white/80">
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-semibold text-green-400">1st (Fundamental)</td>
                      <td className="py-3 px-4 font-mono">60 Hz</td>
                      <td className="py-3 px-4">Positive</td>
                      <td className="py-3 px-4 text-white/60">The desired operating frequency</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-semibold text-amber-400">3rd</td>
                      <td className="py-3 px-4 font-mono">180 Hz</td>
                      <td className="py-3 px-4">Zero</td>
                      <td className="py-3 px-4 text-white/60">Triplen&mdash;adds in neutral</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-semibold text-red-400">5th</td>
                      <td className="py-3 px-4 font-mono">300 Hz</td>
                      <td className="py-3 px-4">Negative</td>
                      <td className="py-3 px-4 text-white/60">Opposes motor rotation</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-semibold text-blue-400">7th</td>
                      <td className="py-3 px-4 font-mono">420 Hz</td>
                      <td className="py-3 px-4">Positive</td>
                      <td className="py-3 px-4 text-white/60">Aids motor rotation (slightly)</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-semibold text-amber-400">9th</td>
                      <td className="py-3 px-4 font-mono">540 Hz</td>
                      <td className="py-3 px-4">Zero</td>
                      <td className="py-3 px-4 text-white/60">Triplen&mdash;adds in neutral</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-semibold text-red-400">11th</td>
                      <td className="py-3 px-4 font-mono">660 Hz</td>
                      <td className="py-3 px-4">Negative</td>
                      <td className="py-3 px-4 text-white/60">Common in 6-pulse VFDs</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-semibold text-blue-400">13th</td>
                      <td className="py-3 px-4 font-mono">780 Hz</td>
                      <td className="py-3 px-4">Positive</td>
                      <td className="py-3 px-4 text-white/60">Common in 6-pulse VFDs</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="bg-cyan-900/30 border border-cyan-500/30 rounded-xl p-6 my-6">
                <h4 className="font-semibold text-cyan-400 mb-2">Why Odd Harmonics Dominate</h4>
                <p className="text-white/70">
                  Even harmonics (2nd, 4th, 6th) are typically small in balanced systems because the positive and negative half-cycles of the current waveform are symmetrical. Odd harmonics (3rd, 5th, 7th) dominate because most non-linear loads draw current asymmetrically relative to the zero crossing, producing odd-order distortion.
                </p>
              </div>
            </section>

            <section id="thd-measurement" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Measuring THD (Total Harmonic Distortion)</h2>
              <p className="text-white/80 mb-4">
                <strong>Total Harmonic Distortion (THD)</strong> is the single most common metric for quantifying harmonic content. It expresses the total harmonic energy as a percentage of the fundamental.
              </p>

              <div className="bg-green-900/30 border border-green-500/30 rounded-xl p-6 my-6">
                <h3 className="font-semibold text-green-400 mb-3">THD Formula</h3>
                <div className="text-xl font-mono text-center text-green-400 mb-4">
                  THD = (&radic;(V&#8322;&sup2; + V&#8323;&sup2; + V&#8324;&sup2; + &hellip;)) / V&#8321; &times; 100%
                </div>
                <p className="text-white/70 text-sm text-center">
                  Where V&#8321; is the fundamental RMS voltage, and V&#8322;, V&#8323;, etc. are the RMS values of each harmonic.
                </p>
              </div>

              <p className="text-white/80 mb-4">
                THD is measured for both voltage (THDv) and current (THDi). Voltage THD reflects the overall quality of the supply, while current THD indicates how much distortion a specific load is injecting.
              </p>

              <div className="grid md:grid-cols-2 gap-4 my-6">
                <div className="bg-white/5 rounded-xl p-6">
                  <h4 className="font-semibold text-green-400 mb-2">Good Power Quality</h4>
                  <p className="text-3xl font-mono text-green-400 mb-2">THDv &lt; 5%</p>
                  <p className="text-white/60 text-sm">Acceptable for most equipment. Meets IEEE 519 general limits for systems up to 69 kV.</p>
                </div>
                <div className="bg-white/5 rounded-xl p-6">
                  <h4 className="font-semibold text-red-400 mb-2">Poor Power Quality</h4>
                  <p className="text-3xl font-mono text-red-400 mb-2">THDv &gt; 8%</p>
                  <p className="text-white/60 text-sm">Causes equipment malfunction, overheating, and nuisance tripping. Requires mitigation.</p>
                </div>
              </div>

              <h3 className="text-xl font-semibold mt-6 mb-3">Measurement Tools</h3>
              <ul className="list-disc list-inside text-white/70 space-y-2 mb-4">
                <li><strong>Power quality analyzers:</strong> Fluke 435-II, Dranetz HDPQ, Hioki PQ3100&mdash;capture waveforms, calculate THD, log data over time</li>
                <li><strong>Harmonic-capable clamp meters:</strong> Fluke 345, Fluke 376 FC&mdash;quick spot checks of current THD</li>
                <li><strong>Oscilloscopes with FFT:</strong> Show frequency spectrum, useful for identifying specific harmonic orders</li>
              </ul>
            </section>

            <section id="harmonic-sources" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Common Harmonic Sources</h2>
              <p className="text-white/80 mb-4">
                Harmonic distortion is generated by <strong>non-linear loads</strong>&mdash;devices that draw current in a non-sinusoidal pattern. As modern buildings incorporate more electronic equipment, harmonic levels continue to rise.
              </p>

              <div className="overflow-x-auto my-6">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-white/20">
                      <th className="text-left py-3 px-4 text-white/60">Source</th>
                      <th className="text-left py-3 px-4 text-white/60">Dominant Harmonics</th>
                      <th className="text-left py-3 px-4 text-white/60">Typical THDi</th>
                      <th className="text-left py-3 px-4 text-white/60">Where Found</th>
                    </tr>
                  </thead>
                  <tbody className="text-white/80">
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-semibold text-amber-400">6-Pulse VFDs</td>
                      <td className="py-3 px-4">5th, 7th, 11th, 13th</td>
                      <td className="py-3 px-4 font-mono">40&ndash;80%</td>
                      <td className="py-3 px-4 text-white/60">HVAC systems, pumps, conveyors</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-semibold text-amber-400">LED Drivers</td>
                      <td className="py-3 px-4">3rd, 5th, 7th</td>
                      <td className="py-3 px-4 font-mono">15&ndash;30%</td>
                      <td className="py-3 px-4 text-white/60">Commercial lighting, retrofits</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-semibold text-amber-400">Computers &amp; Servers</td>
                      <td className="py-3 px-4">3rd, 5th, 7th</td>
                      <td className="py-3 px-4 font-mono">55&ndash;80%</td>
                      <td className="py-3 px-4 text-white/60">Data centers, offices</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-semibold text-amber-400">UPS Systems</td>
                      <td className="py-3 px-4">5th, 7th, 11th</td>
                      <td className="py-3 px-4 font-mono">25&ndash;40%</td>
                      <td className="py-3 px-4 text-white/60">Data centers, hospitals</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-semibold text-amber-400">Electronic Ballasts</td>
                      <td className="py-3 px-4">3rd, 5th</td>
                      <td className="py-3 px-4 font-mono">10&ndash;20%</td>
                      <td className="py-3 px-4 text-white/60">Commercial fluorescent lighting</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-semibold text-amber-400">Welding Equipment</td>
                      <td className="py-3 px-4">3rd, 5th, 7th</td>
                      <td className="py-3 px-4 font-mono">30&ndash;50%</td>
                      <td className="py-3 px-4 text-white/60">Fabrication shops, manufacturing</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-semibold text-amber-400">EV Chargers</td>
                      <td className="py-3 px-4">5th, 7th, 11th</td>
                      <td className="py-3 px-4 font-mono">10&ndash;35%</td>
                      <td className="py-3 px-4 text-white/60">Parking garages, commercial lots</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="bg-amber-900/30 border border-amber-500/30 rounded-xl p-6 my-6">
                <h4 className="font-semibold text-amber-400 mb-2">Why VFDs Produce Specific Harmonics</h4>
                <p className="text-white/70">
                  A standard 6-pulse variable frequency drive uses a 6-diode bridge rectifier on the input. This converter topology produces characteristic harmonics at orders h = (6n &plusmn; 1), where n is any positive integer. This gives the 5th, 7th, 11th, 13th, 17th, 19th, and so on. The magnitude of each harmonic is approximately 1/h of the fundamental current, so the 5th harmonic is roughly 20% and the 7th is roughly 14%.
                </p>
              </div>

              <h3 className="text-xl font-semibold mt-6 mb-3">Single-Phase vs. Three-Phase Harmonic Sources</h3>
              <div className="grid md:grid-cols-2 gap-4 my-6">
                <div className="bg-white/5 rounded-xl p-6">
                  <h4 className="font-semibold text-purple-400 mb-2">Single-Phase Loads</h4>
                  <p className="text-white/70 text-sm mb-3">
                    Switch-mode power supplies in computers, LED drivers, and chargers produce high levels of 3rd harmonic current.
                  </p>
                  <ul className="text-white/60 text-sm space-y-1">
                    <li>&#8226; Dominant: 3rd, 5th, 7th harmonics</li>
                    <li>&#8226; 3rd harmonic is zero-sequence</li>
                    <li>&#8226; Causes neutral overloading</li>
                  </ul>
                </div>
                <div className="bg-white/5 rounded-xl p-6">
                  <h4 className="font-semibold text-cyan-400 mb-2">Three-Phase Loads</h4>
                  <p className="text-white/70 text-sm mb-3">
                    VFDs, large UPS systems, and DC drives produce primarily 5th and 7th harmonics. Triplen harmonics cancel in balanced three-phase loads.
                  </p>
                  <ul className="text-white/60 text-sm space-y-1">
                    <li>&#8226; Dominant: 5th, 7th, 11th, 13th</li>
                    <li>&#8226; 5th harmonic is negative-sequence</li>
                    <li>&#8226; Causes motor heating and torque pulsation</li>
                  </ul>
                </div>
              </div>
            </section>

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

            <section id="effects" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Effects on Transformers, Neutrals, Motors &amp; Capacitors</h2>
              <p className="text-white/80 mb-4">
                Harmonic currents cause additional heating and stress throughout the electrical system. The effects vary depending on the equipment and the harmonic spectrum present.
              </p>

              <div className="space-y-6 my-6">
                <div className="bg-red-900/30 border border-red-500/30 rounded-xl p-6">
                  <h4 className="font-semibold text-red-400 mb-3">Transformers</h4>
                  <ul className="text-white/70 space-y-2 text-sm">
                    <li><strong>Increased eddy current losses:</strong> Eddy current losses increase proportionally to the square of the harmonic order (h&sup2;). A 5th harmonic current produces 25 times the eddy current loss of the same magnitude fundamental current.</li>
                    <li><strong>Hysteresis losses:</strong> Higher-frequency magnetic flux reversals increase core losses.</li>
                    <li><strong>Hotspot heating:</strong> Localized overheating can degrade insulation and reduce transformer life.</li>
                    <li><strong>Derating required:</strong> Standard transformers must be derated when supplying harmonic loads. A transformer loaded with 30% THDi may need to be derated to 80% of its nameplate capacity.</li>
                  </ul>
                </div>

                <div className="bg-orange-900/30 border border-orange-500/30 rounded-xl p-6">
                  <h4 className="font-semibold text-orange-400 mb-3">Neutral Conductors</h4>
                  <ul className="text-white/70 space-y-2 text-sm">
                    <li><strong>Zero-sequence addition:</strong> Triplen harmonics (3rd, 9th, 15th) from all three phases add algebraically in the neutral conductor rather than cancelling.</li>
                    <li><strong>Neutral current exceeding phase current:</strong> In facilities with heavy single-phase non-linear loads, the neutral can carry 1.5&ndash;1.7 times the phase current.</li>
                    <li><strong>Overheating risk:</strong> Shared neutrals sized at 100% of the phase conductor may overheat, creating a fire hazard.</li>
                    <li><strong>NEC requirement:</strong> NEC 310.15(B)(5)(c) requires the neutral conductor to be counted as a current-carrying conductor when the major portion of the load consists of non-linear loads.</li>
                  </ul>
                </div>

                <div className="bg-purple-900/30 border border-purple-500/30 rounded-xl p-6">
                  <h4 className="font-semibold text-purple-400 mb-3">Motors</h4>
                  <ul className="text-white/70 space-y-2 text-sm">
                    <li><strong>Additional heating:</strong> Harmonic currents flow in stator windings, producing I&sup2;R losses at each harmonic frequency.</li>
                    <li><strong>Torque pulsation:</strong> Negative-sequence 5th harmonics create a counter-rotating magnetic field, while positive-sequence 7th harmonics create a forward field at 7x speed. The interaction causes 6th harmonic torque pulsation.</li>
                    <li><strong>Bearing damage:</strong> Shaft currents induced by high-frequency harmonics can cause pitting in motor bearings.</li>
                    <li><strong>Reduced efficiency:</strong> Total motor losses may increase 10&ndash;20% in high-harmonic environments.</li>
                  </ul>
                </div>

                <div className="bg-blue-900/30 border border-blue-500/30 rounded-xl p-6">
                  <h4 className="font-semibold text-blue-400 mb-3">Capacitors</h4>
                  <ul className="text-white/70 space-y-2 text-sm">
                    <li><strong>Harmonic resonance:</strong> Capacitors combined with system inductance can form a parallel resonant circuit near a harmonic frequency, amplifying that harmonic dramatically.</li>
                    <li><strong>Overcurrent:</strong> Since capacitive reactance decreases with frequency (X<sub>C</sub> = 1/2&pi;fC), capacitors act as low-impedance sinks for harmonic currents, drawing excessive current.</li>
                    <li><strong>Premature failure:</strong> Excessive heating from harmonic currents and voltage stress causes dielectric breakdown and capacitor failure.</li>
                    <li><strong>Power factor correction issues:</strong> Standard capacitor banks installed for power factor correction can make harmonic problems worse if not properly designed with detuning reactors.</li>
                  </ul>
                </div>
              </div>
            </section>

            <section id="triplen-harmonics" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Triplen Harmonics &amp; Neutral Overloading</h2>
              <p className="text-white/80 mb-4">
                <strong>Triplen harmonics</strong> (3rd, 9th, 15th, 21st&hellip;) are multiples of the 3rd harmonic and deserve special attention because of their unique behavior in three-phase systems.
              </p>
              <p className="text-white/80 mb-4">
                In a balanced three-phase system, the fundamental currents in each phase are displaced by 120 degrees and cancel in the neutral. However, triplen harmonic currents are <strong>zero-sequence</strong>&mdash;they are in phase across all three conductors. Instead of cancelling, they add together in the neutral, potentially producing neutral currents of up to three times the individual phase harmonic current.
              </p>

              <div className="bg-red-900/30 border border-red-500/30 rounded-xl p-6 my-6">
                <h4 className="font-semibold text-red-400 mb-3">Example: Neutral Overloading</h4>
                <div className="text-white/70 text-sm space-y-2">
                  <p>A three-phase panel feeds 120V single-phase computer loads. Each phase draws 100A fundamental and 70A of 3rd harmonic current.</p>
                  <p className="font-mono text-white/80">Phase current (RMS) = &radic;(100&sup2; + 70&sup2;) = 122A</p>
                  <p className="font-mono text-white/80">Neutral current (3rd harmonic) = 3 &times; 70A = <strong className="text-red-400">210A</strong></p>
                  <p className="text-red-400 font-semibold mt-2">The neutral current is 1.72 times the phase current!</p>
                  <p>If the neutral was sized at 100A (matching original phase conductor rating), it would be severely overloaded. This is a leading cause of neutral conductor fires in commercial buildings with heavy computer loads.</p>
                </div>
              </div>

              <h3 className="text-xl font-semibold mt-6 mb-3">Design Solutions for Triplen Harmonics</h3>
              <ul className="list-disc list-inside text-white/70 space-y-2 mb-4">
                <li><strong>Oversized neutrals:</strong> Size neutral conductor at 200% of phase conductor for panels with heavy non-linear loads</li>
                <li><strong>Separate neutral for each phase:</strong> Use individual neutrals per phase circuit rather than shared neutrals</li>
                <li><strong>Delta-wye transformers:</strong> Triplen harmonics circulate in the delta winding and are not passed to the supply side</li>
                <li><strong>Zero-sequence harmonic filters:</strong> Zig-zag transformers provide a low-impedance path for triplen harmonic currents</li>
                <li><strong>NEC compliance:</strong> Follow NEC 310.15(B)(5)(c) for neutral conductor sizing in non-linear load scenarios</li>
              </ul>
            </section>

            <section id="k-rated-transformers" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">K-Rated Transformers</h2>
              <p className="text-white/80 mb-4">
                Standard transformers are designed for sinusoidal (linear) loads. When subjected to harmonic-rich currents, additional eddy current and stray losses cause excessive heating. <strong>K-rated transformers</strong> are specifically designed to withstand the additional heating caused by harmonic loads.
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-3">Understanding the K-Factor</h3>
              <p className="text-white/80 mb-4">
                The K-factor is a numerical rating that indicates a transformer&apos;s ability to handle harmonic content. It accounts for the additional eddy current heating produced by harmonic currents.
              </p>

              <div className="bg-green-900/30 border border-green-500/30 rounded-xl p-6 my-6">
                <h3 className="font-semibold text-green-400 mb-3">K-Factor Formula</h3>
                <div className="text-xl font-mono text-center text-green-400 mb-4">
                  K = &sum; (I<sub>h</sub>&sup2; &times; h&sup2;)
                </div>
                <p className="text-white/70 text-sm text-center">
                  Where I<sub>h</sub> is the per-unit current at harmonic order h (as a fraction of total RMS current).
                </p>
              </div>

              <div className="overflow-x-auto my-6">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-white/20">
                      <th className="text-left py-3 px-4 text-white/60">K-Rating</th>
                      <th className="text-left py-3 px-4 text-white/60">Typical Application</th>
                      <th className="text-left py-3 px-4 text-white/60">Load THDi Range</th>
                    </tr>
                  </thead>
                  <tbody className="text-white/80">
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-semibold text-green-400">K-1</td>
                      <td className="py-3 px-4">Linear loads only (resistive heating, incandescent lighting)</td>
                      <td className="py-3 px-4 font-mono">0&ndash;5%</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-semibold text-blue-400">K-4</td>
                      <td className="py-3 px-4">Welders, induction heaters, fluorescent lighting</td>
                      <td className="py-3 px-4 font-mono">5&ndash;35%</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-semibold text-amber-400">K-13</td>
                      <td className="py-3 px-4">Telecommunications, data processing, LED lighting</td>
                      <td className="py-3 px-4 font-mono">35&ndash;75%</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-semibold text-red-400">K-20</td>
                      <td className="py-3 px-4">Mainframe computers, VFDs, SCR-controlled equipment</td>
                      <td className="py-3 px-4 font-mono">75&ndash;100%</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h3 className="text-xl font-semibold mt-6 mb-3">K-Rated Transformer Features</h3>
              <ul className="list-disc list-inside text-white/70 space-y-2 mb-4">
                <li><strong>Oversized neutral bus:</strong> Rated at 200% of phase current to handle triplen harmonics</li>
                <li><strong>Low-loss core design:</strong> Reduces hysteresis heating from high-frequency flux</li>
                <li><strong>Reduced eddy current losses:</strong> Uses thinner core laminations and transposed windings</li>
                <li><strong>Additional thermal capacity:</strong> Enhanced cooling and insulation systems</li>
                <li><strong>Electrostatic shielding:</strong> Prevents high-frequency noise from coupling between windings</li>
              </ul>
            </section>

            <section id="harmonic-filters" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Harmonic Filters: Passive &amp; Active</h2>
              <p className="text-white/80 mb-4">
                Harmonic filters are the primary tool for reducing harmonic distortion to acceptable levels. They come in two main types: passive filters that use tuned LC circuits, and active filters that use power electronics to inject cancelling currents.
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-3">Passive Harmonic Filters</h3>
              <p className="text-white/80 mb-4">
                Passive filters use combinations of inductors (L) and capacitors (C) tuned to specific harmonic frequencies. At the tuned frequency, the filter presents a low-impedance path that diverts harmonic current away from the supply.
              </p>

              <div className="grid md:grid-cols-2 gap-4 my-6">
                <div className="bg-white/5 rounded-xl p-6">
                  <h4 className="font-semibold text-green-400 mb-3">Advantages</h4>
                  <ul className="text-white/60 text-sm space-y-2">
                    <li>&#8226; Lower initial cost than active filters</li>
                    <li>&#8226; No active power electronics&mdash;highly reliable</li>
                    <li>&#8226; Also provide reactive power compensation (power factor correction)</li>
                    <li>&#8226; Simple to install and maintain</li>
                    <li>&#8226; Well-proven technology</li>
                  </ul>
                </div>
                <div className="bg-white/5 rounded-xl p-6">
                  <h4 className="font-semibold text-red-400 mb-3">Limitations</h4>
                  <ul className="text-white/60 text-sm space-y-2">
                    <li>&#8226; Tuned to specific harmonic orders only</li>
                    <li>&#8226; Can interact with system impedance (resonance risk)</li>
                    <li>&#8226; Performance depends on system conditions</li>
                    <li>&#8226; Bulky&mdash;require significant floor space</li>
                    <li>&#8226; Must be carefully engineered for each installation</li>
                  </ul>
                </div>
              </div>

              <h3 className="text-xl font-semibold mt-6 mb-3">Active Harmonic Filters (AHFs)</h3>
              <p className="text-white/80 mb-4">
                Active filters monitor the load current in real-time and inject equal-and-opposite harmonic currents to cancel the distortion. They use IGBT-based power electronics to generate precise compensating waveforms.
              </p>

              <div className="grid md:grid-cols-2 gap-4 my-6">
                <div className="bg-white/5 rounded-xl p-6">
                  <h4 className="font-semibold text-green-400 mb-3">Advantages</h4>
                  <ul className="text-white/60 text-sm space-y-2">
                    <li>&#8226; Compensates all harmonic orders simultaneously (typically up to 50th)</li>
                    <li>&#8226; Adapts automatically to changing loads</li>
                    <li>&#8226; No risk of system resonance</li>
                    <li>&#8226; Compact&mdash;wall-mounted units available</li>
                    <li>&#8226; Can also correct power factor and load balancing</li>
                  </ul>
                </div>
                <div className="bg-white/5 rounded-xl p-6">
                  <h4 className="font-semibold text-red-400 mb-3">Limitations</h4>
                  <ul className="text-white/60 text-sm space-y-2">
                    <li>&#8226; Higher cost than passive filters</li>
                    <li>&#8226; Contains active electronics that can fail</li>
                    <li>&#8226; Requires proper sizing for the harmonic load</li>
                    <li>&#8226; May need environmental controls (cooling)</li>
                    <li>&#8226; Power supply required for operation</li>
                  </ul>
                </div>
              </div>

              <h3 className="text-xl font-semibold mt-6 mb-3">Other Mitigation Strategies</h3>
              <div className="space-y-4 my-6">
                <div className="bg-white/5 rounded-xl p-4">
                  <h4 className="font-semibold text-cyan-400">Line Reactors (3&ndash;5% Impedance)</h4>
                  <p className="text-white/70 text-sm">
                    Simple inductors added to the input of VFDs. Reduce THDi from 80% to 35&ndash;45%. Low cost and effective first step. Required by many VFD manufacturers.
                  </p>
                </div>
                <div className="bg-white/5 rounded-xl p-4">
                  <h4 className="font-semibold text-cyan-400">12-Pulse Rectifiers</h4>
                  <p className="text-white/70 text-sm">
                    Use two 6-pulse bridges fed from phase-shifted transformer secondaries (delta-delta and delta-wye). Eliminates 5th and 7th harmonics, reducing THDi to 10&ndash;15%. Common for large VFDs.
                  </p>
                </div>
                <div className="bg-white/5 rounded-xl p-4">
                  <h4 className="font-semibold text-cyan-400">18-Pulse Rectifiers</h4>
                  <p className="text-white/70 text-sm">
                    Three 6-pulse bridges with 20-degree phase shifts. Eliminates 5th, 7th, 11th, and 13th harmonics. THDi below 5%. Used for critical applications requiring IEEE 519 compliance.
                  </p>
                </div>
                <div className="bg-white/5 rounded-xl p-4">
                  <h4 className="font-semibold text-cyan-400">Active Front End (AFE) Drives</h4>
                  <p className="text-white/70 text-sm">
                    VFDs with IGBT-based input rectifiers that draw near-sinusoidal current. THDi below 3&ndash;5%. Also provide regenerative braking capability and unity power factor.
                  </p>
                </div>
                <div className="bg-white/5 rounded-xl p-4">
                  <h4 className="font-semibold text-cyan-400">Zig-Zag Transformers</h4>
                  <p className="text-white/70 text-sm">
                    Special transformer winding configuration that provides a low-impedance path for triplen (zero-sequence) harmonic currents. Effective for treating neutral overloading from single-phase non-linear loads.
                  </p>
                </div>
              </div>
            </section>

            <section id="ieee-519" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">IEEE 519 Limits</h2>
              <p className="text-white/80 mb-4">
                <strong>IEEE 519-2022 (Recommended Practice and Requirements for Harmonic Control in Electric Power Systems)</strong> is the primary standard governing harmonic limits in North America. It establishes limits at the point of common coupling (PCC)&mdash;the boundary between the utility and the customer&apos;s facility.
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-3">Voltage Distortion Limits</h3>
              <div className="overflow-x-auto my-6">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-white/20">
                      <th className="text-left py-3 px-4 text-white/60">Bus Voltage at PCC</th>
                      <th className="text-center py-3 px-4 text-white/60">Individual Harmonic (%)</th>
                      <th className="text-center py-3 px-4 text-white/60">THDv (%)</th>
                    </tr>
                  </thead>
                  <tbody className="text-white/80">
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">V &le; 1.0 kV</td>
                      <td className="py-3 px-4 text-center font-mono">5.0</td>
                      <td className="py-3 px-4 text-center font-mono text-green-400">8.0</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">1 kV &lt; V &le; 69 kV</td>
                      <td className="py-3 px-4 text-center font-mono">3.0</td>
                      <td className="py-3 px-4 text-center font-mono text-green-400">5.0</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">69 kV &lt; V &le; 161 kV</td>
                      <td className="py-3 px-4 text-center font-mono">1.5</td>
                      <td className="py-3 px-4 text-center font-mono text-green-400">2.5</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4">V &gt; 161 kV</td>
                      <td className="py-3 px-4 text-center font-mono">1.0</td>
                      <td className="py-3 px-4 text-center font-mono text-green-400">1.5</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h3 className="text-xl font-semibold mt-6 mb-3">Current Distortion Limits (120V&ndash;69kV)</h3>
              <p className="text-white/80 mb-4">
                Current harmonic limits depend on the ratio of short-circuit current (I<sub>SC</sub>) to maximum demand load current (I<sub>L</sub>) at the PCC. A stiffer system (higher I<sub>SC</sub>/I<sub>L</sub> ratio) allows more harmonic current injection.
              </p>
              <div className="overflow-x-auto my-6">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-white/20">
                      <th className="text-left py-3 px-4 text-white/60">I<sub>SC</sub>/I<sub>L</sub></th>
                      <th className="text-center py-3 px-4 text-white/60">h&lt;11</th>
                      <th className="text-center py-3 px-4 text-white/60">11&le;h&lt;17</th>
                      <th className="text-center py-3 px-4 text-white/60">17&le;h&lt;23</th>
                      <th className="text-center py-3 px-4 text-white/60">23&le;h&lt;35</th>
                      <th className="text-center py-3 px-4 text-white/60">35&le;h&lt;50</th>
                      <th className="text-center py-3 px-4 text-white/60">TDD (%)</th>
                    </tr>
                  </thead>
                  <tbody className="text-white/80">
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">&lt;20</td>
                      <td className="py-3 px-4 text-center font-mono">4.0</td>
                      <td className="py-3 px-4 text-center font-mono">2.0</td>
                      <td className="py-3 px-4 text-center font-mono">1.5</td>
                      <td className="py-3 px-4 text-center font-mono">0.6</td>
                      <td className="py-3 px-4 text-center font-mono">0.3</td>
                      <td className="py-3 px-4 text-center font-mono text-amber-400">5.0</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">20&ndash;50</td>
                      <td className="py-3 px-4 text-center font-mono">7.0</td>
                      <td className="py-3 px-4 text-center font-mono">3.5</td>
                      <td className="py-3 px-4 text-center font-mono">2.5</td>
                      <td className="py-3 px-4 text-center font-mono">1.0</td>
                      <td className="py-3 px-4 text-center font-mono">0.5</td>
                      <td className="py-3 px-4 text-center font-mono text-amber-400">8.0</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">50&ndash;100</td>
                      <td className="py-3 px-4 text-center font-mono">10.0</td>
                      <td className="py-3 px-4 text-center font-mono">4.5</td>
                      <td className="py-3 px-4 text-center font-mono">4.0</td>
                      <td className="py-3 px-4 text-center font-mono">1.5</td>
                      <td className="py-3 px-4 text-center font-mono">0.7</td>
                      <td className="py-3 px-4 text-center font-mono text-amber-400">12.0</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">100&ndash;1000</td>
                      <td className="py-3 px-4 text-center font-mono">12.0</td>
                      <td className="py-3 px-4 text-center font-mono">5.5</td>
                      <td className="py-3 px-4 text-center font-mono">5.0</td>
                      <td className="py-3 px-4 text-center font-mono">2.0</td>
                      <td className="py-3 px-4 text-center font-mono">1.0</td>
                      <td className="py-3 px-4 text-center font-mono text-amber-400">15.0</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4">&gt;1000</td>
                      <td className="py-3 px-4 text-center font-mono">15.0</td>
                      <td className="py-3 px-4 text-center font-mono">7.0</td>
                      <td className="py-3 px-4 text-center font-mono">6.0</td>
                      <td className="py-3 px-4 text-center font-mono">2.5</td>
                      <td className="py-3 px-4 text-center font-mono">1.4</td>
                      <td className="py-3 px-4 text-center font-mono text-amber-400">20.0</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="bg-cyan-900/30 border border-cyan-500/30 rounded-xl p-6 my-6">
                <h4 className="font-semibold text-cyan-400 mb-2">TDD vs. THD</h4>
                <p className="text-white/70">
                  IEEE 519 uses <strong>Total Demand Distortion (TDD)</strong> for current limits rather than THD. TDD references harmonics against the <em>maximum demand load current</em> (the average peak current over the past 12 months), while THD references the <em>fundamental current at the time of measurement</em>. This distinction matters: a lightly loaded circuit can have very high THDi but still be within TDD limits because the actual harmonic current magnitude is small.
                </p>
              </div>
            </section>

            <section id="power-quality-analysis" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Power Quality Analysis</h2>
              <p className="text-white/80 mb-4">
                Before implementing harmonic mitigation, a thorough power quality study should be performed to identify the specific harmonic sources, measure distortion levels, and model the effects of proposed solutions.
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-3">Steps for a Harmonic Assessment</h3>
              <div className="space-y-4 my-6">
                <div className="bg-white/5 rounded-xl p-4">
                  <p className="text-white/70"><strong>Step 1: Data Collection</strong></p>
                  <p className="text-white/60 text-sm mt-1">Install power quality analyzers at the main service entrance, distribution panels, and near major non-linear loads. Record voltage and current waveforms for a minimum of 7 days to capture variations in load patterns.</p>
                </div>
                <div className="bg-white/5 rounded-xl p-4">
                  <p className="text-white/70"><strong>Step 2: Harmonic Spectrum Analysis</strong></p>
                  <p className="text-white/60 text-sm mt-1">Identify which harmonic orders are present and their magnitudes. Determine whether the dominant harmonics are triplen (neutral concern) or non-triplen (motor and capacitor concern).</p>
                </div>
                <div className="bg-white/5 rounded-xl p-4">
                  <p className="text-white/70"><strong>Step 3: System Modeling</strong></p>
                  <p className="text-white/60 text-sm mt-1">Create a single-line diagram with impedance values for all major components. Use harmonic analysis software (ETAP, SKM, EasyPower) to simulate harmonic propagation and identify resonant frequencies.</p>
                </div>
                <div className="bg-white/5 rounded-xl p-4">
                  <p className="text-white/70"><strong>Step 4: IEEE 519 Compliance Check</strong></p>
                  <p className="text-white/60 text-sm mt-1">Compare measured THDv and TDD values against IEEE 519 limits for the system voltage class and I<sub>SC</sub>/I<sub>L</sub> ratio. Identify which specific harmonic orders exceed limits.</p>
                </div>
                <div className="bg-white/5 rounded-xl p-4">
                  <p className="text-white/70"><strong>Step 5: Mitigation Design</strong></p>
                  <p className="text-white/60 text-sm mt-1">Select appropriate filters or other mitigation equipment. Simulate the system with proposed solutions to verify compliance and check for new resonance conditions. Verify that power factor correction capacitors will not create resonance problems.</p>
                </div>
                <div className="bg-white/5 rounded-xl p-4">
                  <p className="text-white/70"><strong>Step 6: Post-Installation Verification</strong></p>
                  <p className="text-white/60 text-sm mt-1">After installing mitigation equipment, repeat power quality measurements to confirm that harmonic levels are within limits and no new problems have been introduced.</p>
                </div>
              </div>

              <div className="bg-amber-900/30 border border-amber-500/30 rounded-xl p-6 my-6">
                <h4 className="font-semibold text-amber-400 mb-2">When to Perform a Power Quality Study</h4>
                <ul className="text-white/70 space-y-2 text-sm">
                  <li>&#8226; Unexplained equipment failures or nuisance breaker tripping</li>
                  <li>&#8226; Overheating transformers, panels, or neutral conductors</li>
                  <li>&#8226; Capacitor bank failures or fuse blowing</li>
                  <li>&#8226; Before installing large VFDs or non-linear loads</li>
                  <li>&#8226; Utility penalties for poor power factor or harmonic injection</li>
                  <li>&#8226; Flickering lights or audible buzzing in transformers</li>
                  <li>&#8226; New data center or server room installations</li>
                </ul>
              </div>
            </section>

            <section id="solutions-summary" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Common Solutions Summary</h2>
              <p className="text-white/80 mb-4">
                The right harmonic solution depends on the specific problem, budget, and system characteristics. Here is a comprehensive comparison of the most common approaches.
              </p>

              <div className="overflow-x-auto my-6">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-white/20">
                      <th className="text-left py-3 px-4 text-white/60">Solution</th>
                      <th className="text-left py-3 px-4 text-white/60">THDi Reduction</th>
                      <th className="text-left py-3 px-4 text-white/60">Relative Cost</th>
                      <th className="text-left py-3 px-4 text-white/60">Best For</th>
                    </tr>
                  </thead>
                  <tbody className="text-white/80">
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-semibold text-green-400">Line Reactors (3&ndash;5%)</td>
                      <td className="py-3 px-4">Reduces to 35&ndash;45%</td>
                      <td className="py-3 px-4 text-green-400">$</td>
                      <td className="py-3 px-4 text-white/60">Individual VFDs, first step</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-semibold text-blue-400">Passive Tuned Filters</td>
                      <td className="py-3 px-4">Reduces to 8&ndash;12%</td>
                      <td className="py-3 px-4 text-amber-400">$$</td>
                      <td className="py-3 px-4 text-white/60">Specific harmonic orders, fixed loads</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-semibold text-purple-400">12-Pulse Rectifiers</td>
                      <td className="py-3 px-4">Reduces to 10&ndash;15%</td>
                      <td className="py-3 px-4 text-amber-400">$$</td>
                      <td className="py-3 px-4 text-white/60">Large individual VFDs (&gt;100 HP)</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-semibold text-cyan-400">18-Pulse Rectifiers</td>
                      <td className="py-3 px-4">Reduces to &lt;5%</td>
                      <td className="py-3 px-4 text-orange-400">$$$</td>
                      <td className="py-3 px-4 text-white/60">Critical facilities, strict IEEE 519</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-semibold text-amber-400">Active Harmonic Filters</td>
                      <td className="py-3 px-4">Reduces to &lt;5%</td>
                      <td className="py-3 px-4 text-orange-400">$$$</td>
                      <td className="py-3 px-4 text-white/60">Variable loads, multiple sources</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-semibold text-red-400">Active Front End Drives</td>
                      <td className="py-3 px-4">Reduces to &lt;3%</td>
                      <td className="py-3 px-4 text-red-400">$$$$</td>
                      <td className="py-3 px-4 text-white/60">New VFD installations, regeneration needed</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-semibold text-green-400">K-Rated Transformers</td>
                      <td className="py-3 px-4">No reduction (withstands harmonics)</td>
                      <td className="py-3 px-4 text-amber-400">$$</td>
                      <td className="py-3 px-4 text-white/60">Protecting transformers from harmonic heating</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-semibold text-blue-400">Zig-Zag Transformers</td>
                      <td className="py-3 px-4">Reduces triplen harmonics in neutral</td>
                      <td className="py-3 px-4 text-amber-400">$$</td>
                      <td className="py-3 px-4 text-white/60">Neutral overloading from single-phase loads</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="bg-purple-900/30 border border-purple-500/30 rounded-xl p-6 my-6">
                <h4 className="font-semibold text-purple-400 mb-3">Practical Decision Guide</h4>
                <ul className="text-white/70 space-y-2 text-sm">
                  <li><strong>Single VFD with moderate THD needs:</strong> Start with a 3&ndash;5% line reactor. If that is insufficient, add a passive 5th/7th harmonic filter.</li>
                  <li><strong>Multiple VFDs on a common bus:</strong> Consider an active harmonic filter at the bus level for adaptive correction across varying loads.</li>
                  <li><strong>Data center or office with heavy single-phase loads:</strong> Use K-13 or K-20 rated transformers, oversize neutrals, and consider zig-zag transformers for triplen harmonic mitigation.</li>
                  <li><strong>New facility design:</strong> Specify 18-pulse or AFE drives for large motors, K-rated transformers, and design in 200% neutral capacity for single-phase distribution panels.</li>
                  <li><strong>Existing facility with capacitor problems:</strong> Add detuning reactors to shift the resonant frequency below the lowest harmonic, or replace with harmonic-rated capacitor banks.</li>
                </ul>
              </div>
            </section>

            {/* Related Articles */}
            <section className="mt-12">
              <h2 className="text-2xl font-display font-bold mb-6">Related Articles</h2>
              <div className="grid md:grid-cols-2 gap-4">
                <Link href="/blog/power-factor-correction-basics" className="bg-white/5 hover:bg-white/10 rounded-xl p-6 transition-colors">
                  <span className="text-amber-400 text-sm">Calculations</span>
                  <h3 className="font-semibold mt-2">Power Factor Correction Basics</h3>
                </Link>
                <Link href="/blog/transformer-sizing-guide" className="bg-white/5 hover:bg-white/10 rounded-xl p-6 transition-colors">
                  <span className="text-purple-400 text-sm">NEC Code</span>
                  <h3 className="font-semibold mt-2">Transformer Sizing Guide</h3>
                </Link>
                <Link href="/blog/3-phase-power-calculations" className="bg-white/5 hover:bg-white/10 rounded-xl p-6 transition-colors">
                  <span className="text-amber-400 text-sm">Calculations</span>
                  <h3 className="font-semibold mt-2">3-Phase Power Calculations</h3>
                </Link>
                <Link href="/blog/electrical-fault-current-calculations" className="bg-white/5 hover:bg-white/10 rounded-xl p-6 transition-colors">
                  <span className="text-amber-400 text-sm">Calculations</span>
                  <h3 className="font-semibold mt-2">Electrical Fault Current Calculations</h3>
                </Link>
              </div>
            </section>

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
