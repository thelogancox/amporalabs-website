import { Metadata } from "next";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import { BreadcrumbJsonLd, BlogPostingJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Multimeter Guide for Electricians: How to Test Voltage, Current & Resistance",
  description: "Complete multimeter guide for electricians covering how to test voltage, current, and resistance. Learn digital vs analog meters, CAT safety ratings, testing outlets and breakers, and proper measurement techniques.",
  keywords: [
    "multimeter guide electricians",
    "how to use multimeter",
    "test voltage with multimeter",
    "test current multimeter",
    "test resistance multimeter",
    "digital multimeter electrician",
    "CAT rating multimeter",
    "multimeter safety",
    "test outlet with multimeter",
    "test breaker with multimeter",
    "digital vs analog multimeter",
    "AC voltage measurement",
    "continuity test",
    "multimeter settings",
    "electrical testing tools"
  ],
  alternates: {
    canonical: "https://amporalabs.com/blog/multimeter-guide-electricians",
  },
  openGraph: {
    title: "Multimeter Guide for Electricians - Ampora",
    description: "Complete guide to using a multimeter for electrical testing including voltage, current, resistance, and safety ratings.",
    url: "https://amporalabs.com/blog/multimeter-guide-electricians",
    type: "article",
  },
};

function HeroIllustration() {
  return (
    <svg viewBox="0 0 400 160" className="w-full h-40 md:h-48" aria-label="Digital multimeter illustration showing voltage reading">
      {/* Multimeter body */}
      <g transform="translate(120, 5)">
        <rect x="0" y="0" width="160" height="150" rx="10" fill="#1f2937" stroke="#6b7280" strokeWidth="2"/>

        {/* Screen */}
        <rect x="20" y="12" width="120" height="45" rx="4" fill="#111827" stroke="#374151" strokeWidth="1"/>
        <text x="130" y="40" textAnchor="end" fill="#22c55e" fontSize="24" fontWeight="bold" fontFamily="monospace">120.3</text>
        <text x="132" y="48" textAnchor="end" fill="#22c55e" fontSize="10">V AC</text>
        <text x="30" y="28" fill="#6b7280" fontSize="7">AUTO</text>

        {/* Rotary dial */}
        <circle cx="80" cy="90" r="30" fill="#374151" stroke="#6b7280" strokeWidth="1"/>
        <circle cx="80" cy="90" r="3" fill="#9ca3af"/>
        {/* Dial positions */}
        <text x="80" y="66" textAnchor="middle" fill="#ef4444" fontSize="7" fontWeight="bold">V~</text>
        <text x="108" y="78" textAnchor="middle" fill="#3b82f6" fontSize="7">V=</text>
        <text x="112" y="98" textAnchor="middle" fill="#f59e0b" fontSize="7">&Omega;</text>
        <text x="100" y="115" textAnchor="middle" fill="#22c55e" fontSize="7">A</text>
        <text x="55" y="115" textAnchor="middle" fill="#a78bfa" fontSize="6">))))</text>
        <text x="48" y="98" textAnchor="middle" fill="#9ca3af" fontSize="7">OFF</text>
        {/* Pointer */}
        <line x1="80" y1="90" x2="80" y2="68" stroke="#ef4444" strokeWidth="2"/>

        {/* Input jacks */}
        <circle cx="45" cy="138" r="6" fill="#111827" stroke="#ef4444" strokeWidth="1.5"/>
        <text x="45" y="141" textAnchor="middle" fill="#ef4444" fontSize="6">V</text>
        <circle cx="80" cy="138" r="6" fill="#111827" stroke="#6b7280" strokeWidth="1.5"/>
        <text x="80" y="141" textAnchor="middle" fill="#9ca3af" fontSize="6">COM</text>
        <circle cx="115" cy="138" r="6" fill="#111827" stroke="#f59e0b" strokeWidth="1.5"/>
        <text x="115" y="141" textAnchor="middle" fill="#f59e0b" fontSize="5">mA</text>
      </g>

      {/* Test probes */}
      <g transform="translate(20, 40)">
        <line x1="0" y1="0" x2="0" y2="80" stroke="#ef4444" strokeWidth="3"/>
        <polygon points="-3,80 3,80 0,95" fill="#ef4444"/>
        <text x="0" y="110" textAnchor="middle" fill="#ef4444" fontSize="7">Red (+)</text>
      </g>
      <g transform="translate(60, 40)">
        <line x1="0" y1="0" x2="0" y2="80" stroke="#374151" strokeWidth="3"/>
        <polygon points="-3,80 3,80 0,95" fill="#374151"/>
        <text x="0" y="110" textAnchor="middle" fill="#9ca3af" fontSize="7">Black (-)</text>
      </g>

      {/* CAT rating badge */}
      <g transform="translate(310, 20)">
        <rect x="0" y="0" width="70" height="50" rx="6" fill="#f59e0b" fillOpacity="0.15" stroke="#f59e0b" strokeWidth="1"/>
        <text x="35" y="18" textAnchor="middle" fill="#f59e0b" fontSize="9" fontWeight="bold">CAT III</text>
        <text x="35" y="32" textAnchor="middle" fill="#f59e0b" fontSize="8">600V</text>
        <text x="35" y="44" textAnchor="middle" fill="#9ca3af" fontSize="6">Safety Rated</text>
      </g>

      {/* Measurement types */}
      <g transform="translate(310, 85)">
        <text x="0" y="0" fill="#9ca3af" fontSize="7">Measurements:</text>
        <text x="0" y="15" fill="#ef4444" fontSize="7">&bull; AC/DC Voltage</text>
        <text x="0" y="28" fill="#3b82f6" fontSize="7">&bull; AC/DC Current</text>
        <text x="0" y="41" fill="#f59e0b" fontSize="7">&bull; Resistance</text>
        <text x="0" y="54" fill="#22c55e" fontSize="7">&bull; Continuity</text>
      </g>
    </svg>
  );
}

export default function MultimeterGuidePage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navigation />
      <div className="pt-20">
        <BreadcrumbJsonLd
          items={[
            { name: "Home", url: "https://amporalabs.com" },
            { name: "Blog", url: "https://amporalabs.com/blog" },
            { name: "Multimeter Guide for Electricians", url: "https://amporalabs.com/blog/multimeter-guide-electricians" },
          ]}
        />
        <BlogPostingJsonLd
          headline="Multimeter Guide for Electricians: How to Test Voltage, Current & Resistance"
          description="Complete guide to using a multimeter for electrical testing including voltage, current, resistance, CAT ratings, and safety procedures."
          datePublished="2025-02-08"
          dateModified="2025-02-08"
          url="https://amporalabs.com/blog/multimeter-guide-electricians"
          wordCount={2800}
          keywords={["multimeter guide", "voltage testing", "current testing", "resistance testing", "CAT rating", "electrical testing"]}
        />

        <article className="max-w-4xl mx-auto px-6 py-12">
          {/* Breadcrumb */}
          <nav className="text-sm text-white/60 mb-8">
            <Link href="/" className="hover:text-white">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/blog" className="hover:text-white">Blog</Link>
            <span className="mx-2">/</span>
            <span className="text-white">Multimeter Guide for Electricians</span>
          </nav>

          {/* Article Header */}
          <header className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <span className="px-3 py-1 bg-cyan-600/30 text-cyan-300 text-sm font-medium rounded-full">
                Technology
              </span>
              <span className="text-white/40 text-sm">11 min read</span>
              <span className="text-white/40 text-sm">February 8, 2025</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6 leading-tight">
              Multimeter Guide for Electricians: How to Test Voltage, Current &amp; Resistance
            </h1>
            <p className="text-xl text-white/70">
              A multimeter is the most essential tool in an electrician&apos;s kit. Master the fundamentals of voltage, current, and resistance measurement to diagnose problems safely and accurately.
            </p>
          </header>

          <div className="mb-12 bg-gradient-to-br from-cyan-900/20 to-green-900/20 rounded-2xl p-6 border border-white/10">
            <HeroIllustration />
          </div>

          {/* Safety Warning */}
          <div className="bg-orange-900/30 border border-orange-500/30 rounded-2xl p-6 mb-12">
            <h3 className="font-semibold text-orange-400 mb-2">Safety First</h3>
            <p className="text-white/70 text-sm">
              Always verify your meter is functioning correctly before and after each use by testing a known live source. Use properly rated meters (CAT III or CAT IV for panel work). Never exceed the meter&apos;s rated voltage or current. Inspect test leads for damaged insulation before every use.
            </p>
          </div>

          {/* Table of Contents */}
          <div className="bg-white/5 rounded-2xl p-6 mb-12">
            <h2 className="font-display font-bold mb-4">In This Guide</h2>
            <ul className="space-y-2 text-white/70">
              <li><a href="#digital-vs-analog" className="hover:text-purple-400">&#8594; Digital vs Analog Multimeters</a></li>
              <li><a href="#cat-ratings" className="hover:text-purple-400">&#8594; Understanding CAT Safety Ratings</a></li>
              <li><a href="#voltage-testing" className="hover:text-purple-400">&#8594; How to Test Voltage</a></li>
              <li><a href="#current-testing" className="hover:text-purple-400">&#8594; How to Test Current</a></li>
              <li><a href="#resistance-testing" className="hover:text-purple-400">&#8594; How to Test Resistance</a></li>
              <li><a href="#continuity" className="hover:text-purple-400">&#8594; Continuity Testing</a></li>
              <li><a href="#testing-outlets" className="hover:text-purple-400">&#8594; Testing Outlets &amp; Breakers</a></li>
              <li><a href="#meter-care" className="hover:text-purple-400">&#8594; Meter Care &amp; Best Practices</a></li>
            </ul>
          </div>

          {/* Article Content */}
          <div className="prose prose-invert prose-lg max-w-none">

            <section id="digital-vs-analog" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Digital vs Analog Multimeters</h2>
              <p className="text-white/80 mb-4">
                While analog meters still have specialized uses, digital multimeters (DMMs) are the standard for professional electricians. Understanding the strengths of each type helps you choose the right tool for the job.
              </p>

              <div className="overflow-x-auto my-6">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-white/20">
                      <th className="text-left py-3 px-4 text-white/60">Feature</th>
                      <th className="text-left py-3 px-4 text-white/60">Digital (DMM)</th>
                      <th className="text-left py-3 px-4 text-white/60">Analog</th>
                    </tr>
                  </thead>
                  <tbody className="text-white/80">
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-semibold">Accuracy</td>
                      <td className="py-3 px-4">Typically &plusmn;0.5% or better</td>
                      <td className="py-3 px-4">Typically &plusmn;3%</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-semibold">Reading</td>
                      <td className="py-3 px-4">Exact numeric display</td>
                      <td className="py-3 px-4">Needle on scale (interpolation)</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-semibold">Input impedance</td>
                      <td className="py-3 px-4">10 M&Omega; (high, minimal circuit loading)</td>
                      <td className="py-3 px-4">20k&Omega;/V (lower, can load sensitive circuits)</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-semibold">Trending</td>
                      <td className="py-3 px-4">Numbers change rapidly (bar graph helps)</td>
                      <td className="py-3 px-4">Needle movement shows trends naturally</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-semibold">Durability</td>
                      <td className="py-3 px-4">Requires battery; electronics sensitive</td>
                      <td className="py-3 px-4">No battery for V/A; mechanically fragile</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-semibold">Best for</td>
                      <td className="py-3 px-4">All general electrical work</td>
                      <td className="py-3 px-4">Observing fluctuating signals</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="bg-cyan-900/30 rounded-xl p-6 my-6">
                <h3 className="font-semibold text-cyan-400 mb-2">Recommended Features for Electricians</h3>
                <p className="text-white/70">
                  When selecting a DMM for electrical work, look for: True RMS measurement (essential for non-sinusoidal loads like VFDs and LED drivers), auto-ranging capability, min/max recording, CAT III 600V or CAT IV 300V rating minimum, backlit display for dark panels, and a built-in non-contact voltage detector.
                </p>
              </div>
            </section>

            <section id="cat-ratings" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Understanding CAT Safety Ratings</h2>
              <p className="text-white/80 mb-4">
                CAT (Category) ratings define a meter&apos;s ability to withstand transient voltage spikes. Higher CAT numbers indicate greater protection. These ratings are defined by IEC 61010 and are critical for safe electrical testing.
              </p>

              <div className="overflow-x-auto my-6">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-white/20">
                      <th className="text-left py-3 px-4 text-white/60">Rating</th>
                      <th className="text-left py-3 px-4 text-white/60">Location</th>
                      <th className="text-left py-3 px-4 text-white/60">Examples</th>
                    </tr>
                  </thead>
                  <tbody className="text-white/80">
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-semibold">CAT I</td>
                      <td className="py-3 px-4">Electronic circuits</td>
                      <td className="py-3 px-4">Protected equipment, signal levels</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-semibold">CAT II</td>
                      <td className="py-3 px-4">Single-phase receptacle loads</td>
                      <td className="py-3 px-4">Plugged-in appliances, portable tools</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-semibold text-green-400">CAT III</td>
                      <td className="py-3 px-4">Distribution level</td>
                      <td className="py-3 px-4">Panel boards, bus ducts, feeders, branch circuits</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-semibold text-amber-400">CAT IV</td>
                      <td className="py-3 px-4">Utility/service entrance</td>
                      <td className="py-3 px-4">Service drops, meter bases, service entrance equipment</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="bg-purple-900/30 rounded-xl p-6 my-6">
                <h3 className="font-semibold text-purple-400 mb-2">The CAT Rule of Thumb</h3>
                <p className="text-white/70">
                  Always use a meter rated for the category of work you are performing or higher. A CAT III 600V meter is the minimum for residential and commercial panel work. For service entrance work, use CAT IV rated equipment. Never use a CAT II meter inside a panel - the transient voltage capability is insufficient to protect you from fault energy at the distribution level.
                </p>
              </div>
            </section>

            <section id="voltage-testing" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">How to Test Voltage</h2>
              <p className="text-white/80 mb-4">
                Voltage is measured in <strong>parallel</strong> with the circuit. The meter is connected across the two points where you want to measure the potential difference. This is the most common measurement an electrician performs.
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-3">AC Voltage Measurement Steps</h3>
              <div className="space-y-4 my-6">
                <div className="bg-white/5 rounded-xl p-4">
                  <p className="text-cyan-400 font-semibold">Step 1: Select AC voltage mode (V~)</p>
                  <p className="text-white/60 text-sm mt-1">Turn the rotary dial to the AC voltage position. If your meter is not auto-ranging, select a range higher than the expected voltage (e.g., 600V for residential work).</p>
                </div>
                <div className="bg-white/5 rounded-xl p-4">
                  <p className="text-cyan-400 font-semibold">Step 2: Connect test leads</p>
                  <p className="text-white/60 text-sm mt-1">Black lead in COM jack, red lead in V/&Omega; jack. Never place the red lead in the current (A) jack when measuring voltage.</p>
                </div>
                <div className="bg-white/5 rounded-xl p-4">
                  <p className="text-cyan-400 font-semibold">Step 3: Test a known source first</p>
                  <p className="text-white/60 text-sm mt-1">Before testing the target circuit, verify your meter works on a known live source. This confirms the meter and leads are functional.</p>
                </div>
                <div className="bg-white/5 rounded-xl p-4">
                  <p className="text-cyan-400 font-semibold">Step 4: Take your measurement</p>
                  <p className="text-white/60 text-sm mt-1">Touch probe tips to the two test points simultaneously. For a 120V circuit: hot to neutral should read 118-122V, hot to ground should read the same, neutral to ground should read 0V (or very close).</p>
                </div>
                <div className="bg-white/5 rounded-xl p-4">
                  <p className="text-cyan-400 font-semibold">Step 5: Test the known source again</p>
                  <p className="text-white/60 text-sm mt-1">After finishing, re-test the known live source. This confirms the meter was working throughout your testing. This is the &quot;test before and after&quot; procedure recommended by NFPA 70E.</p>
                </div>
              </div>

              <div className="bg-green-900/30 rounded-xl p-6 my-6">
                <h3 className="font-semibold text-green-400 mb-2">Expected Residential Voltage Readings</h3>
                <ul className="text-white/70 text-sm space-y-1">
                  <li>&bull; <strong>Hot to Neutral:</strong> 114V - 126V (120V nominal &plusmn;5%)</li>
                  <li>&bull; <strong>Hot to Ground:</strong> 114V - 126V (same as hot to neutral)</li>
                  <li>&bull; <strong>Neutral to Ground:</strong> 0V - 2V (higher indicates a problem)</li>
                  <li>&bull; <strong>Hot to Hot (240V circuit):</strong> 228V - 252V (240V nominal &plusmn;5%)</li>
                </ul>
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
                  href="https://apps.apple.com/us/app/ampora/id6753693522"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-white text-black font-semibold rounded-full hover:bg-white/90 transition-colors text-sm whitespace-nowrap"
                >
                  <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/></svg>
                  Download Free
                </a>
              </div>
            </div>

            <section id="current-testing" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">How to Test Current</h2>
              <p className="text-white/80 mb-4">
                Current is measured in <strong>series</strong> with the circuit. The meter must be inserted into the circuit path so that all current flows through the meter. For most field work, electricians use a clamp meter instead, which measures current magnetically without breaking the circuit.
              </p>

              <div className="bg-orange-900/30 rounded-xl p-6 my-6">
                <h3 className="font-semibold text-orange-400 mb-2">Clamp Meter vs Inline Measurement</h3>
                <p className="text-white/70">
                  For measuring current in existing circuits, a clamp-on ammeter (amp clamp) is far safer and more practical than breaking the circuit to insert a meter inline. Inline current measurement with a DMM is mainly used for low-current circuits (milliamp range) during troubleshooting control circuits. Never attempt to measure current in a high-amperage circuit inline with a standard DMM - use a clamp meter.
                </p>
              </div>

              <h3 className="text-xl font-semibold mt-6 mb-3">Clamp Meter Technique</h3>
              <ul className="list-disc list-inside text-white/70 space-y-2 mb-4">
                <li><strong>Clamp around ONE conductor only</strong> - clamping around both hot and neutral will read zero because the fields cancel</li>
                <li><strong>Center the conductor in the jaws</strong> - off-center positioning reduces accuracy</li>
                <li><strong>Close the jaws completely</strong> - an air gap causes inaccurate readings</li>
                <li><strong>Use the min/max feature</strong> to capture motor inrush current or cycling loads</li>
                <li><strong>Select AC amps (A~)</strong> for standard branch circuit measurements</li>
              </ul>
            </section>

            <section id="resistance-testing" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">How to Test Resistance</h2>
              <p className="text-white/80 mb-4">
                Resistance is measured with the circuit <strong>de-energized</strong>. The meter sends a small test current through the component and calculates resistance using Ohm&apos;s law. Never measure resistance on a live circuit - it will damage the meter and give meaningless readings.
              </p>

              <div className="space-y-4 my-6">
                <div className="bg-white/5 rounded-xl p-4">
                  <p className="text-cyan-400 font-semibold">Step 1: De-energize the circuit</p>
                  <p className="text-white/60 text-sm mt-1">Turn off the breaker and verify with a voltage test that the circuit is dead. Lock out/tag out if required.</p>
                </div>
                <div className="bg-white/5 rounded-xl p-4">
                  <p className="text-cyan-400 font-semibold">Step 2: Select resistance mode (&Omega;)</p>
                  <p className="text-white/60 text-sm mt-1">Turn the dial to the resistance (&Omega;) position. The meter will display OL (overload/open) until the leads are connected to something.</p>
                </div>
                <div className="bg-white/5 rounded-xl p-4">
                  <p className="text-cyan-400 font-semibold">Step 3: Zero the leads</p>
                  <p className="text-white/60 text-sm mt-1">Touch the leads together. The reading should be very close to 0 &Omega; (typically 0.1-0.5 &Omega; for lead resistance). This confirms the leads and meter function are working.</p>
                </div>
                <div className="bg-white/5 rounded-xl p-4">
                  <p className="text-cyan-400 font-semibold">Step 4: Measure the component</p>
                  <p className="text-white/60 text-sm mt-1">Touch the probes across the component. For a good conductor (wire), expect near 0 &Omega;. For a heating element, expect the rated resistance. OL indicates an open circuit.</p>
                </div>
              </div>

              <div className="bg-purple-900/30 rounded-xl p-6 my-6">
                <h3 className="font-semibold text-purple-400 mb-2">Common Resistance Values to Know</h3>
                <ul className="text-white/70 text-sm space-y-1">
                  <li>&bull; <strong>Good conductor (short wire run):</strong> 0 - 2 &Omega;</li>
                  <li>&bull; <strong>Open circuit (broken wire):</strong> OL (infinity)</li>
                  <li>&bull; <strong>4500W water heater element (240V):</strong> ~12.8 &Omega;</li>
                  <li>&bull; <strong>1500W space heater element (120V):</strong> ~9.6 &Omega;</li>
                  <li>&bull; <strong>Good ground connection:</strong> less than 1 &Omega;</li>
                </ul>
              </div>
            </section>

            <section id="continuity" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Continuity Testing</h2>
              <p className="text-white/80 mb-4">
                Continuity mode is a specialized resistance test that beeps when a low-resistance path exists (typically less than 20-40 &Omega;). It is used to verify that a conductor has a complete path from one end to the other.
              </p>
              <h3 className="text-xl font-semibold mt-6 mb-3">Common Uses for Continuity Testing</h3>
              <ul className="list-disc list-inside text-white/70 space-y-2 mb-4">
                <li><strong>Identifying wires:</strong> In a bundle of same-color wires, short one end and test from the other end to identify which wire is which</li>
                <li><strong>Checking switches:</strong> Verify a switch makes and breaks contact properly</li>
                <li><strong>Testing fuses:</strong> A good fuse will beep (continuity); a blown fuse reads OL</li>
                <li><strong>Verifying ground connections:</strong> Test continuity from equipment ground to panel ground bar</li>
                <li><strong>Finding broken wires:</strong> No continuity between ends of a wire indicates a break</li>
              </ul>
            </section>

            <section id="testing-outlets" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Testing Outlets &amp; Breakers</h2>

              <h3 className="text-xl font-semibold mt-6 mb-3">Testing a 120V Receptacle</h3>
              <div className="bg-white/5 rounded-xl p-6 my-6">
                <p className="text-white/70 mb-3">With the circuit energized, set your meter to AC voltage and test these three combinations:</p>
                <ul className="text-white/60 text-sm space-y-2">
                  <li>&bull; <strong>Hot (small slot) to Neutral (large slot):</strong> Should read 120V (&plusmn;5%). If 0V, the circuit is dead or the breaker is off.</li>
                  <li>&bull; <strong>Hot (small slot) to Ground (round hole):</strong> Should read 120V (&plusmn;5%). If significantly different from hot-to-neutral, suspect a ground problem.</li>
                  <li>&bull; <strong>Neutral (large slot) to Ground (round hole):</strong> Should read 0V or very close. A reading over 2V indicates a neutral problem or high neutral current. If this reads 120V, hot and neutral are reversed.</li>
                </ul>
              </div>

              <h3 className="text-xl font-semibold mt-6 mb-3">Testing a Circuit Breaker</h3>
              <div className="bg-white/5 rounded-xl p-6 my-6">
                <p className="text-white/70 mb-3">With the panel cover removed and the breaker in the ON position:</p>
                <ul className="text-white/60 text-sm space-y-2">
                  <li>&bull; <strong>Breaker terminal to neutral bar:</strong> Should read 120V for single-pole, 240V for double-pole</li>
                  <li>&bull; <strong>Line side to load side:</strong> Should read 0V (voltage present on both sides). If load side reads 0V and line side reads 120V, the breaker is open internally - replace it.</li>
                  <li>&bull; <strong>Between two single-pole breakers on opposite legs:</strong> Should read 240V. If 0V, both breakers are on the same leg.</li>
                </ul>
              </div>
            </section>

            <section id="meter-care" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Meter Care &amp; Best Practices</h2>
              <div className="space-y-4 my-6">
                <div className="bg-white/5 rounded-xl p-4">
                  <h4 className="font-semibold text-white">Replace test leads regularly</h4>
                  <p className="text-white/60 text-sm mt-1">Damaged, frayed, or cracked test leads are a safety hazard. Inspect before every use and replace at the first sign of damage. Use only leads rated for your meter&apos;s CAT category.</p>
                </div>
                <div className="bg-white/5 rounded-xl p-4">
                  <h4 className="font-semibold text-white">Keep fuses stocked</h4>
                  <p className="text-white/60 text-sm mt-1">If you accidentally try to measure voltage with leads in the current jacks, the internal fuse will blow. Carry spare fuses of the correct rating - never substitute with wire or a higher-rated fuse.</p>
                </div>
                <div className="bg-white/5 rounded-xl p-4">
                  <h4 className="font-semibold text-white">Replace batteries before they die</h4>
                  <p className="text-white/60 text-sm mt-1">Low batteries cause inaccurate readings. When the low-battery indicator appears, replace immediately. Most meters use standard 9V or AA batteries.</p>
                </div>
                <div className="bg-white/5 rounded-xl p-4">
                  <h4 className="font-semibold text-white">Calibrate annually</h4>
                  <p className="text-white/60 text-sm mt-1">Professional meters should be calibrated annually per manufacturer recommendations. Keep calibration records for your employer and inspection authorities.</p>
                </div>
              </div>
            </section>

            {/* CTA Section */}
            <section className="bg-gradient-to-r from-purple-900/30 to-cyan-900/30 rounded-2xl p-8 md:p-12 my-12 border border-purple-500/20">
              <div className="text-center">
                <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-1.5 rounded-full mb-4">
                  <span className="text-sm text-white/80">&#9733; Free on the App Store</span>
                </div>
                <h2 className="text-2xl md:text-3xl font-display font-bold mb-4">
                  Your Electrical Reference, Powered by AI
                </h2>
                <p className="text-white/70 mb-8 max-w-2xl mx-auto">
                  Join thousands of electricians using Ampora for instant NEC code answers, electrical calculations, and AI-powered troubleshooting — right from your phone.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <a
                    href="https://apps.apple.com/us/app/ampora/id6753693522"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-black font-semibold rounded-full hover:bg-white/90 transition-colors"
                  >
                    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/></svg>
                    Download on App Store
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
                <Link href="/blog/electrical-panel-troubleshooting" className="bg-white/5 hover:bg-white/10 rounded-xl p-6 transition-colors">
                  <span className="text-red-400 text-sm">Troubleshooting</span>
                  <h3 className="font-semibold mt-2">Electrical Panel Troubleshooting: Common Problems &amp; Solutions</h3>
                </Link>
                <Link href="/blog/electrical-symbols-blueprint-reading" className="bg-white/5 hover:bg-white/10 rounded-xl p-6 transition-colors">
                  <span className="text-cyan-400 text-sm">Technology</span>
                  <h3 className="font-semibold mt-2">Electrical Symbols &amp; Blueprint Reading Guide</h3>
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
