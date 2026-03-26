import { Metadata } from "next";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import { BreadcrumbJsonLd, BlogPostingJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "How to Calculate Short-Circuit Current for Panel Sizing",
  description: "Learn how to calculate short-circuit current for panel sizing. Covers point-to-point method, transformer contributions, motor contributions, AIC ratings, NEC 110.9 requirements, and series-rated vs fully-rated systems.",
  keywords: [
    "short circuit current calculation",
    "panel sizing fault current",
    "AIC rating",
    "available fault current",
    "NEC 110.9",
    "point to point calculation",
    "transformer impedance",
    "series rated systems",
    "interrupting capacity",
    "short circuit current rating"
  ],
  alternates: {
    canonical: "https://amporalabs.com/blog/short-circuit-current-calculation",
  },
  openGraph: {
    title: "How to Calculate Short-Circuit Current for Panel Sizing - Ampora",
    description: "Complete guide to calculating short-circuit current for panel sizing, AIC ratings, and NEC compliance.",
    url: "https://amporalabs.com/blog/short-circuit-current-calculation",
    type: "article",
    publishedTime: "2025-03-25",
  },
};

function HeroIllustration() {
  return (
    <svg viewBox="0 0 400 180" className="w-full h-44 md:h-52" aria-label="Electrical panel with fault current arrows and AIC rating label">
      {/* Panel enclosure */}
      <g transform="translate(140, 10)">
        <rect x="0" y="0" width="120" height="150" rx="6" fill="#1f2937" stroke="#6b7280" strokeWidth="2"/>
        <rect x="8" y="8" width="104" height="134" fill="#111827" rx="3"/>

        {/* Main breaker */}
        <rect x="35" y="15" width="50" height="22" rx="3" fill="#374151" stroke="#f59e0b" strokeWidth="1.5"/>
        <text x="60" y="30" textAnchor="middle" fill="#f59e0b" fontSize="8" fontWeight="bold">MAIN</text>

        {/* Bus bars */}
        <line x1="50" y1="37" x2="50" y2="130" stroke="#f59e0b" strokeWidth="2"/>
        <line x1="70" y1="37" x2="70" y2="130" stroke="#f59e0b" strokeWidth="2"/>

        {/* Branch breakers left */}
        <rect x="15" y="48" width="30" height="14" rx="2" fill="#374151"/>
        <rect x="15" y="68" width="30" height="14" rx="2" fill="#374151"/>
        <rect x="15" y="88" width="30" height="14" rx="2" fill="#374151"/>
        <rect x="15" y="108" width="30" height="14" rx="2" fill="#374151"/>

        {/* Branch breakers right */}
        <rect x="75" y="48" width="30" height="14" rx="2" fill="#374151"/>
        <rect x="75" y="68" width="30" height="14" rx="2" fill="#374151"/>
        <rect x="75" y="88" width="30" height="14" rx="2" fill="#374151"/>
        <rect x="75" y="108" width="30" height="14" rx="2" fill="#374151"/>
      </g>

      {/* Fault current arrows coming into panel - left side */}
      <g transform="translate(30, 50)">
        {/* Lightning bolt */}
        <polygon points="30,0 20,18 28,18 18,38 35,15 27,15" fill="#ef4444" opacity="0.9"/>
        <polygon points="50,5 40,23 48,23 38,43 55,20 47,20" fill="#ef4444" opacity="0.7"/>

        {/* Arrow */}
        <line x1="60" y1="25" x2="100" y2="25" stroke="#ef4444" strokeWidth="3"/>
        <polygon points="100,18 115,25 100,32" fill="#ef4444"/>

        <text x="45" y="60" textAnchor="middle" fill="#ef4444" fontSize="9" fontWeight="bold">FAULT</text>
        <text x="45" y="72" textAnchor="middle" fill="#ef4444" fontSize="9" fontWeight="bold">CURRENT</text>
      </g>

      {/* Fault current arrows - right side */}
      <g transform="translate(270, 50)">
        <line x1="0" y1="25" x2="40" y2="25" stroke="#ef4444" strokeWidth="3"/>
        <polygon points="0,18 -15,25 0,32" fill="#ef4444"/>

        {/* Lightning bolt */}
        <polygon points="60,0 50,18 58,18 48,38 65,15 57,15" fill="#ef4444" opacity="0.9"/>
        <polygon points="80,5 70,23 78,23 68,43 85,20 77,20" fill="#ef4444" opacity="0.7"/>

        <text x="70" y="60" textAnchor="middle" fill="#ef4444" fontSize="9" fontWeight="bold">I_sc</text>
        <text x="70" y="72" textAnchor="middle" fill="#ef4444" fontSize="9" fontWeight="bold">42,000A</text>
      </g>

      {/* AIC Rating Label */}
      <g transform="translate(155, 162)">
        <rect x="0" y="0" width="90" height="18" rx="4" fill="#22c55e" fillOpacity="0.2" stroke="#22c55e" strokeWidth="1.5"/>
        <text x="45" y="13" textAnchor="middle" fill="#22c55e" fontSize="9" fontWeight="bold">AIC: 65,000A</text>
      </g>

      {/* Upstream source indicator */}
      <g transform="translate(10, 10)">
        <rect x="0" y="0" width="65" height="30" rx="4" fill="#1f2937" stroke="#a855f7" strokeWidth="1.5"/>
        <text x="32" y="13" textAnchor="middle" fill="#a855f7" fontSize="7" fontWeight="bold">UTILITY</text>
        <text x="32" y="24" textAnchor="middle" fill="#9ca3af" fontSize="6">500 MVA</text>
      </g>

      <line x1="75" y1="25" x2="140" y2="25" stroke="#a855f7" strokeWidth="2" strokeDasharray="4,3"/>

      {/* Downstream load indicator */}
      <g transform="translate(325, 10)">
        <rect x="0" y="0" width="65" height="30" rx="4" fill="#1f2937" stroke="#0ea5e9" strokeWidth="1.5"/>
        <text x="32" y="13" textAnchor="middle" fill="#0ea5e9" fontSize="7" fontWeight="bold">LOADS</text>
        <text x="32" y="24" textAnchor="middle" fill="#9ca3af" fontSize="6">Downstream</text>
      </g>

      <line x1="260" y1="25" x2="325" y2="25" stroke="#0ea5e9" strokeWidth="2" strokeDasharray="4,3"/>

      {/* Requirement callout */}
      <g transform="translate(10, 130)">
        <rect x="0" y="0" width="120" height="32" rx="4" fill="#f59e0b" fillOpacity="0.15" stroke="#f59e0b" strokeWidth="1"/>
        <text x="60" y="14" textAnchor="middle" fill="#f59e0b" fontSize="7" fontWeight="bold">NEC 110.9 Requires:</text>
        <text x="60" y="26" textAnchor="middle" fill="#f59e0b" fontSize="7">AIC &#8805; Available Fault</text>
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
            { name: "Short-Circuit Current Calculation", url: "https://amporalabs.com/blog/short-circuit-current-calculation" },
          ]}
        />
        <BlogPostingJsonLd
          headline="How to Calculate Short-Circuit Current for Panel Sizing"
          description="Complete guide to calculating short-circuit current for panel sizing, covering point-to-point method, transformer and motor contributions, AIC ratings, and NEC 110.9 compliance."
          datePublished="2025-03-25"
          dateModified="2025-03-25"
          url="https://amporalabs.com/blog/short-circuit-current-calculation"
          wordCount={3800}
          keywords={["short circuit current", "panel sizing", "AIC rating", "fault current calculation", "NEC 110.9"]}
        />

        <article className="max-w-4xl mx-auto px-6 py-12">
          {/* Breadcrumb */}
          <nav className="text-sm text-white/60 mb-8">
            <Link href="/" className="hover:text-white">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/blog" className="hover:text-white">Blog</Link>
            <span className="mx-2">/</span>
            <span className="text-white">Short-Circuit Current Calculation</span>
          </nav>

          {/* Article Header */}
          <header className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <span className="px-3 py-1 bg-amber-600/30 text-amber-300 text-sm font-medium rounded-full">
                Calculations
              </span>
              <span className="text-white/40 text-sm">14 min read</span>
              <span className="text-white/40 text-sm">March 25, 2025</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6 leading-tight">
              How to Calculate Short-Circuit Current for Panel Sizing
            </h1>
            <p className="text-xl text-white/70">
              Every panelboard, switchboard, and overcurrent protective device must be rated for the maximum fault current it could see. Learn how to calculate available short-circuit current step by step and ensure your equipment meets NEC 110.9 requirements.
            </p>
          </header>

          <div className="mb-12 bg-gradient-to-br from-amber-900/20 to-cyan-900/20 rounded-2xl p-6 border border-white/10">
            <HeroIllustration />
          </div>

          {/* Key Concept Box */}
          <div className="bg-red-900/30 border border-red-500/30 rounded-2xl p-6 mb-12">
            <div className="flex items-start gap-4">
              <div className="text-red-400 text-2xl">&#9889;</div>
              <div>
                <h3 className="font-display font-bold text-lg mb-2 text-red-400">Critical Safety Requirement</h3>
                <p className="text-white/70">
                  Equipment with an interrupting rating less than the available fault current is an immediate safety hazard. A breaker that cannot interrupt the available fault current may fail catastrophically during a short circuit, resulting in an arc blast, fire, or explosion. NEC 110.9 makes this a code violation, and inspectors increasingly verify fault current labels per NEC 110.24.
                </p>
              </div>
            </div>
          </div>

          {/* Table of Contents */}
          <div className="bg-white/5 rounded-2xl p-6 mb-12">
            <h2 className="font-display font-bold mb-4">In This Guide</h2>
            <ul className="space-y-2 text-white/70">
              <li><a href="#what-is-afc" className="hover:text-purple-400">&#8594; What Is Available Fault Current (AFC)?</a></li>
              <li><a href="#why-it-matters" className="hover:text-purple-400">&#8594; Why Short-Circuit Current Matters</a></li>
              <li><a href="#point-to-point" className="hover:text-purple-400">&#8594; Point-to-Point Calculation Method</a></li>
              <li><a href="#transformer-contribution" className="hover:text-purple-400">&#8594; Transformer Contribution Calculations</a></li>
              <li><a href="#motor-contribution" className="hover:text-purple-400">&#8594; Motor Contribution to Fault Current</a></li>
              <li><a href="#step-by-step" className="hover:text-purple-400">&#8594; Step-by-Step Calculation Examples</a></li>
              <li><a href="#aic-ratings" className="hover:text-purple-400">&#8594; AIC Ratings for Common Equipment</a></li>
              <li><a href="#impedance-tables" className="hover:text-purple-400">&#8594; Transformer and Conductor Impedance Tables</a></li>
              <li><a href="#series-vs-fully" className="hover:text-purple-400">&#8594; Series-Rated vs Fully-Rated Systems</a></li>
              <li><a href="#common-mistakes" className="hover:text-purple-400">&#8594; Common Mistakes and Inspection Failures</a></li>
            </ul>
          </div>

          {/* Article Content */}
          <div className="prose prose-invert prose-lg max-w-none">

            <section id="what-is-afc" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">What Is Available Fault Current (AFC)?</h2>
              <p className="text-white/80 mb-4">
                <strong>Available fault current (AFC)</strong> is the maximum current that can flow through an electrical system during a short circuit at a specific point. It represents the worst-case bolted fault condition where a zero-impedance connection occurs between phase conductors, or between a phase conductor and ground.
              </p>
              <p className="text-white/80 mb-4">
                The magnitude of available fault current at any point in a system depends on three factors:
              </p>
              <ul className="list-disc list-inside text-white/70 space-y-2 mb-6">
                <li><strong>Utility source capacity:</strong> The power company&apos;s available short-circuit capacity at the service point, typically expressed in MVA or kA</li>
                <li><strong>Transformer impedance:</strong> The percent impedance (%Z) of the step-down transformer, which is the single largest impedance element in most systems</li>
                <li><strong>Conductor impedance:</strong> The resistance and reactance of all conductors from the source to the fault point, which reduces fault current with distance</li>
              </ul>
              <p className="text-white/80 mb-4">
                Fault current is highest at the transformer secondary terminals and decreases as you move downstream through conductors. Every foot of wire adds impedance that limits the current a fault can draw.
              </p>

              <div className="bg-white/5 rounded-xl p-6 my-6 text-center">
                <p className="text-white/60 mb-2">Fundamental Relationship</p>
                <div className="text-2xl font-mono font-bold text-cyan-400">I<sub>sc</sub> = V / Z<sub>total</sub></div>
                <p className="text-white/60 mt-2 text-sm">Where V = system voltage and Z<sub>total</sub> = sum of all impedances from source to fault point</p>
              </div>

              <p className="text-white/80 mb-4">
                In practical terms, available fault current at a 480V commercial service typically ranges from 10,000A to 65,000A depending on the transformer size and utility source. Residential services fed by small pad-mount transformers may see 10,000A to 22,000A. Large industrial facilities with 2000+ kVA transformers and strong utility sources can exceed 100,000A.
              </p>
            </section>

            <section id="why-it-matters" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Why Short-Circuit Current Matters for Panel Sizing</h2>
              <p className="text-white/80 mb-4">
                Short-circuit current is not just an academic exercise. It directly determines what equipment you can legally and safely install. The NEC has three primary sections that govern fault current requirements.
              </p>

              <div className="grid md:grid-cols-2 gap-6 my-6">
                <div className="bg-purple-900/30 rounded-xl p-6">
                  <h3 className="font-semibold text-purple-400 mb-3">NEC 110.9 &mdash; Interrupting Rating</h3>
                  <p className="text-white/70 text-sm mb-3">
                    Equipment intended to interrupt current at fault levels shall have an interrupting rating <strong>not less than the nominal circuit voltage and the current that is available at the line terminals</strong> of the equipment.
                  </p>
                  <p className="text-white/60 text-sm">
                    In plain language: every breaker and fuse must be rated to safely interrupt the maximum fault current it could see. A 10,000 AIC breaker installed where 22,000A is available violates this section.
                  </p>
                </div>
                <div className="bg-cyan-900/30 rounded-xl p-6">
                  <h3 className="font-semibold text-cyan-400 mb-3">NEC 110.10 &mdash; Circuit Impedance, Short-Circuit Current Ratings</h3>
                  <p className="text-white/70 text-sm mb-3">
                    The overcurrent protective devices, the total impedance, the equipment short-circuit current ratings, and other characteristics of the circuit shall be selected and coordinated to <strong>permit the circuit protective devices to clear a fault without extensive damage</strong> to the electrical equipment.
                  </p>
                  <p className="text-white/60 text-sm">
                    This means all components &mdash; bus bars, contactors, starters &mdash; must withstand the fault current for the time it takes protection to clear the fault.
                  </p>
                </div>
              </div>

              <h3 className="text-xl font-semibold mb-3 mt-6">NEC 110.24 &mdash; Available Fault Current Documentation</h3>
              <div className="bg-orange-900/30 rounded-xl p-6 my-6">
                <p className="text-white/70 mb-3">
                  For service equipment in <strong>other than dwelling units</strong>, NEC 110.24(A) requires field marking of:
                </p>
                <ul className="space-y-2 text-white/70">
                  <li><strong>1.</strong> The maximum available fault current at the service overcurrent protective devices</li>
                  <li><strong>2.</strong> The date the fault current calculation was performed</li>
                  <li><strong>3.</strong> The marking must be sufficiently durable to withstand the environment</li>
                </ul>
                <p className="text-white/60 mt-4 text-sm">
                  NEC 110.24(B) further requires that when modifications to the electrical installation affect the available fault current, the marking must be verified and updated. This includes utility transformer changes, service upgrades, and additions of large motor loads.
                </p>
              </div>
            </section>

            <section id="point-to-point" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Point-to-Point Calculation Method</h2>
              <p className="text-white/80 mb-4">
                The <strong>point-to-point method</strong> is the standard approach for calculating available fault current at successive locations in an electrical distribution system. You start at the source and work downstream, adding the impedance of each element &mdash; transformer, conductors, and bus &mdash; to determine fault current at each point.
              </p>
              <p className="text-white/80 mb-4">
                This method uses the concept of an <strong>f-factor</strong> (or multiplier) that accounts for the impedance added by each conductor run. The f-factor represents the ratio of conductor impedance to the system impedance at the upstream point.
              </p>

              <div className="bg-white/5 rounded-xl p-6 my-6">
                <h3 className="font-semibold text-cyan-400 mb-3">Point-to-Point Formulas</h3>
                <div className="space-y-4">
                  <div className="text-center">
                    <p className="text-white/60 text-sm mb-1">Step 1: Calculate the f-factor</p>
                    <div className="text-lg font-mono font-bold text-cyan-400">f = (1.732 x L x I<sub>sc</sub>) / (C x n x V)</div>
                    <p className="text-white/60 text-sm mt-1">Three-phase systems</p>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-mono font-bold text-purple-400">f = (2 x L x I<sub>sc</sub>) / (C x n x V)</div>
                    <p className="text-white/60 text-sm mt-1">Single-phase systems</p>
                  </div>
                  <div className="text-center mt-4">
                    <p className="text-white/60 text-sm mb-1">Step 2: Calculate downstream fault current</p>
                    <div className="text-lg font-mono font-bold text-amber-400">I<sub>sc(downstream)</sub> = I<sub>sc(upstream)</sub> / (1 + f)</div>
                  </div>
                </div>
              </div>

              <h3 className="text-xl font-semibold mb-3 mt-6">Variable Definitions</h3>
              <div className="overflow-x-auto my-6">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-white/20">
                      <th className="text-left py-3 px-4 text-white/60">Variable</th>
                      <th className="text-left py-3 px-4 text-white/60">Description</th>
                    </tr>
                  </thead>
                  <tbody className="text-white/80">
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-mono">L</td>
                      <td className="py-3 px-4">Length of conductor in feet (one way)</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-mono">I<sub>sc</sub></td>
                      <td className="py-3 px-4">Available short-circuit current at the upstream point (amps)</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-mono">C</td>
                      <td className="py-3 px-4">Constant from C-value tables (based on conductor size and type)</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-mono">n</td>
                      <td className="py-3 px-4">Number of conductors per phase (parallel sets)</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-mono">V</td>
                      <td className="py-3 px-4">System voltage (line-to-line)</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="text-white/80 mb-4">
                The C-value tables are published by equipment manufacturers (such as Eaton/Bussmann and Schneider Electric/Square D) and are derived from NEC Chapter 9, Table 9 conductor impedance values. Higher C-values mean lower impedance per foot, which results in less fault current reduction over a given distance.
              </p>
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

            <section id="transformer-contribution" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Transformer Contribution Calculations</h2>
              <p className="text-white/80 mb-4">
                The transformer is the primary impedance element that limits fault current in most electrical systems. The available fault current at the transformer secondary terminals is calculated using the transformer&apos;s nameplate <strong>percent impedance (%Z)</strong>, which represents the voltage drop across the transformer at full load current.
              </p>

              <div className="bg-white/5 rounded-xl p-6 my-6">
                <h3 className="font-semibold text-cyan-400 mb-3">Transformer Secondary Fault Current Formulas</h3>
                <div className="space-y-4">
                  <div className="text-center">
                    <p className="text-white/60 text-sm mb-1">Three-Phase Transformer</p>
                    <div className="text-xl font-mono font-bold text-cyan-400">I<sub>sc</sub> = (kVA x 1000) / (V<sub>sec</sub> x 1.732 x %Z / 100)</div>
                  </div>
                  <div className="text-center">
                    <p className="text-white/60 text-sm mb-1">Single-Phase Transformer</p>
                    <div className="text-xl font-mono font-bold text-purple-400">I<sub>sc</sub> = (kVA x 1000) / (V<sub>sec</sub> x %Z / 100)</div>
                  </div>
                  <div className="text-center">
                    <p className="text-white/60 text-sm mb-1">Simplified (using FLA)</p>
                    <div className="text-xl font-mono font-bold text-amber-400">I<sub>sc</sub> = FLA / (%Z / 100)</div>
                  </div>
                </div>
              </div>

              <p className="text-white/80 mb-4">
                These formulas assume an <strong>infinite bus</strong> condition, meaning the utility source has unlimited capacity. This is a conservative assumption that yields the highest possible fault current. In reality, the utility source has finite impedance that limits the available fault current, resulting in a slightly lower actual value. For most calculations, the infinite bus assumption is acceptable and preferred for safety.
              </p>

              <h3 className="text-xl font-semibold mb-3 mt-6">Accounting for Utility Source Impedance</h3>
              <p className="text-white/80 mb-4">
                When the utility provides their available fault current (or short-circuit MVA), you can account for it using a more precise calculation:
              </p>
              <div className="bg-cyan-900/30 rounded-xl p-6 my-6 text-center">
                <div className="text-lg font-mono font-bold text-cyan-400">I<sub>sc(actual)</sub> = I<sub>sc(infinite)</sub> x M<sub>utility</sub></div>
                <p className="text-white/60 mt-2 text-sm">Where M<sub>utility</sub> = 1 / (1 + I<sub>sc(infinite)</sub> / I<sub>sc(utility)</sub>)</p>
                <p className="text-white/60 mt-1 text-sm">I<sub>sc(utility)</sub> = utility available fault current at primary</p>
              </div>

              <h3 className="text-xl font-semibold mb-3 mt-6">Transformer Impedance Values</h3>
              <div className="overflow-x-auto my-6">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-white/20">
                      <th className="text-left py-3 px-4 text-white/60">Transformer kVA</th>
                      <th className="text-left py-3 px-4 text-white/60">Typical %Z</th>
                      <th className="text-left py-3 px-4 text-white/60">FLA at 480V 3&#966;</th>
                      <th className="text-left py-3 px-4 text-white/60">I<sub>sc</sub> at 480V (infinite bus)</th>
                    </tr>
                  </thead>
                  <tbody className="text-white/80">
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">45 kVA</td>
                      <td className="py-3 px-4">1.5 &ndash; 2.5%</td>
                      <td className="py-3 px-4 font-mono">54A</td>
                      <td className="py-3 px-4 font-mono">2,160 &ndash; 3,600A</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">75 kVA</td>
                      <td className="py-3 px-4">2.5 &ndash; 3.5%</td>
                      <td className="py-3 px-4 font-mono">90A</td>
                      <td className="py-3 px-4 font-mono">2,571 &ndash; 3,600A</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">150 kVA</td>
                      <td className="py-3 px-4">3.0 &ndash; 4.0%</td>
                      <td className="py-3 px-4 font-mono">180A</td>
                      <td className="py-3 px-4 font-mono">4,500 &ndash; 6,000A</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">300 kVA</td>
                      <td className="py-3 px-4">4.0 &ndash; 5.0%</td>
                      <td className="py-3 px-4 font-mono">361A</td>
                      <td className="py-3 px-4 font-mono">7,220 &ndash; 9,025A</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">500 kVA</td>
                      <td className="py-3 px-4">4.5 &ndash; 5.75%</td>
                      <td className="py-3 px-4 font-mono">601A</td>
                      <td className="py-3 px-4 font-mono">10,452 &ndash; 13,356A</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">750 kVA</td>
                      <td className="py-3 px-4">5.0 &ndash; 5.75%</td>
                      <td className="py-3 px-4 font-mono">902A</td>
                      <td className="py-3 px-4 font-mono">15,687 &ndash; 18,040A</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">1000 kVA</td>
                      <td className="py-3 px-4">5.0 &ndash; 5.75%</td>
                      <td className="py-3 px-4 font-mono">1,203A</td>
                      <td className="py-3 px-4 font-mono">20,922 &ndash; 24,060A</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">1500 kVA</td>
                      <td className="py-3 px-4">5.75 &ndash; 6.0%</td>
                      <td className="py-3 px-4 font-mono">1,804A</td>
                      <td className="py-3 px-4 font-mono">30,067 &ndash; 31,374A</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4">2000 kVA</td>
                      <td className="py-3 px-4">5.75 &ndash; 6.5%</td>
                      <td className="py-3 px-4 font-mono">2,406A</td>
                      <td className="py-3 px-4 font-mono">37,015 &ndash; 41,843A</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-white/60 text-sm mb-4">
                Note: Actual %Z varies by manufacturer. Always use the nameplate value for calculations. ANSI C57.12 allows a tolerance of &#177;7.5% on the nameplate impedance for transformers 500 kVA and above, and &#177;10% for smaller units.
              </p>
            </section>

            <section id="motor-contribution" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Motor Contribution to Fault Current</h2>
              <p className="text-white/80 mb-4">
                When a short circuit occurs, running motors do not stop instantly. The mechanical inertia of the rotating shaft keeps the motor spinning, and the motor&apos;s magnetic field causes it to act as a <strong>generator</strong>, feeding current back into the fault. This motor contribution adds to the available fault current from the utility and transformer.
              </p>

              <div className="bg-orange-900/30 rounded-xl p-6 my-6">
                <h3 className="font-semibold text-orange-400 mb-3">Motor Contribution Rules of Thumb</h3>
                <ul className="space-y-2 text-white/70">
                  <li><strong>Induction motors:</strong> Contribute approximately 4 to 6 times their full load amperage (FLA) during a fault</li>
                  <li><strong>Synchronous motors:</strong> Contribute approximately 6 to 10 times their FLA</li>
                  <li><strong>Duration:</strong> Motor contribution decays rapidly, typically within 1 to 6 cycles (16 to 100 milliseconds at 60 Hz)</li>
                  <li><strong>Quick estimate:</strong> Total motor contribution = 4 x sum of all motor FLAs</li>
                </ul>
              </div>

              <h3 className="text-xl font-semibold mb-3 mt-6">When to Include Motor Contribution</h3>
              <p className="text-white/80 mb-4">
                Motor contribution should be included in fault current calculations when:
              </p>
              <ul className="list-disc list-inside text-white/70 space-y-2 mb-6">
                <li>Total connected motor load exceeds 25% of the transformer kVA rating</li>
                <li>The fault occurs at or near the motor control center or motor terminals</li>
                <li>Large individual motors (50 HP and above) are connected to the system</li>
                <li>An exact fault current study is required for engineering purposes</li>
              </ul>

              <div className="bg-white/5 rounded-xl p-6 my-6 text-center">
                <p className="text-white/60 mb-2">Total Available Fault Current with Motor Contribution</p>
                <div className="text-xl font-mono font-bold text-cyan-400">I<sub>sc(total)</sub> = I<sub>sc(transformer)</sub> + I<sub>sc(motors)</sub></div>
                <p className="text-white/60 mt-2 text-sm">Where I<sub>sc(motors)</sub> = 4 x &#931; Motor FLAs (conservative estimate)</p>
              </div>

              <p className="text-white/80 mb-4">
                For a more precise motor contribution, use the subtransient reactance (X&quot;d) of each motor. However, the 4x FLA multiplier is widely accepted for initial calculations and provides a reasonable conservative estimate for most commercial and industrial installations.
              </p>
            </section>

            <section id="step-by-step" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Step-by-Step Calculation Examples</h2>

              <h3 className="text-xl font-semibold mb-3 mt-6">Example 1: 480V Commercial System</h3>
              <div className="bg-purple-900/30 rounded-xl p-6 my-6">
                <p className="text-white/70 mb-4">
                  <strong>Given:</strong> 1000 kVA, 480/277V three-phase transformer, 5.75% impedance. 200 feet of 500 kcmil copper conductors in steel conduit (1 set per phase) feeding a subpanel. Utility available fault current is 500 MVA at 12,470V primary.
                </p>

                <div className="space-y-4 text-white/70">
                  <div>
                    <p className="font-semibold text-white">Step 1: Transformer secondary fault current (infinite bus)</p>
                    <p className="font-mono text-sm ml-4 mt-1">FLA = 1000 x 1000 / (480 x 1.732) = 1,203A</p>
                    <p className="font-mono text-sm ml-4">I<sub>sc</sub> = 1,203 / 0.0575 = <strong>20,922A</strong></p>
                  </div>

                  <div>
                    <p className="font-semibold text-white">Step 2: Account for utility impedance</p>
                    <p className="font-mono text-sm ml-4 mt-1">I<sub>sc(utility at 480V)</sub> = 500,000,000 / (480 x 1.732) = 601,535A</p>
                    <p className="font-mono text-sm ml-4">M = 1 / (1 + 20,922 / 601,535) = 0.9664</p>
                    <p className="font-mono text-sm ml-4">I<sub>sc(adjusted)</sub> = 20,922 x 0.9664 = <strong>20,219A</strong></p>
                    <p className="text-white/60 text-sm ml-4 mt-1">Note: Utility impedance only reduces fault current by ~3% here. In practice, many engineers use the infinite bus value for conservatism.</p>
                  </div>

                  <div>
                    <p className="font-semibold text-white">Step 3: Calculate fault current at subpanel (point-to-point)</p>
                    <p className="text-sm ml-4 mt-1">Using C = 22,185 for 500 kcmil copper in steel conduit:</p>
                    <p className="font-mono text-sm ml-4 mt-1">f = (1.732 x 200 x 20,922) / (22,185 x 1 x 480)</p>
                    <p className="font-mono text-sm ml-4">f = 7,245,290 / 10,648,800 = 0.6804</p>
                    <p className="font-mono text-sm ml-4">I<sub>sc(subpanel)</sub> = 20,922 / (1 + 0.6804) = <strong>12,451A</strong></p>
                  </div>
                </div>
              </div>

              <h3 className="text-xl font-semibold mb-3 mt-6">Example 2: 208V Office Building</h3>
              <div className="bg-cyan-900/30 rounded-xl p-6 my-6">
                <p className="text-white/70 mb-4">
                  <strong>Given:</strong> 150 kVA, 208/120V three-phase transformer, 3.5% impedance. 50 feet of 3/0 AWG copper in steel conduit to main panel.
                </p>

                <div className="space-y-4 text-white/70">
                  <div>
                    <p className="font-semibold text-white">Step 1: Transformer secondary fault current</p>
                    <p className="font-mono text-sm ml-4 mt-1">FLA = 150,000 / (208 x 1.732) = 416A</p>
                    <p className="font-mono text-sm ml-4">I<sub>sc</sub> = 416 / 0.035 = <strong>11,893A</strong></p>
                  </div>

                  <div>
                    <p className="font-semibold text-white">Step 2: Calculate fault current at main panel</p>
                    <p className="text-sm ml-4 mt-1">Using C = 11,424 for 3/0 AWG copper in steel conduit:</p>
                    <p className="font-mono text-sm ml-4 mt-1">f = (1.732 x 50 x 11,893) / (11,424 x 1 x 208)</p>
                    <p className="font-mono text-sm ml-4">f = 1,029,918 / 2,376,192 = 0.4334</p>
                    <p className="font-mono text-sm ml-4">I<sub>sc(panel)</sub> = 11,893 / (1 + 0.4334) = <strong>8,299A</strong></p>
                  </div>

                  <div>
                    <p className="font-semibold text-white">Step 3: Panel selection</p>
                    <p className="text-sm ml-4 mt-1">Available fault current at panel = 8,299A. A panel rated at 10,000 AIC would be adequate.</p>
                    <p className="text-sm ml-4">Standard 14,000 AIC or 22,000 AIC commercial panels provide additional margin.</p>
                  </div>
                </div>
              </div>

              <h3 className="text-xl font-semibold mb-3 mt-6">Example 3: Single-Phase Residential Service</h3>
              <div className="bg-amber-900/30 rounded-xl p-6 my-6">
                <p className="text-white/70 mb-4">
                  <strong>Given:</strong> 50 kVA, 240/120V single-phase transformer, 2.0% impedance. 25 feet of 2/0 AWG copper SE cable to main panel.
                </p>

                <div className="space-y-4 text-white/70">
                  <div>
                    <p className="font-semibold text-white">Step 1: Transformer secondary fault current</p>
                    <p className="font-mono text-sm ml-4 mt-1">FLA = 50,000 / 240 = 208A</p>
                    <p className="font-mono text-sm ml-4">I<sub>sc</sub> = 208 / 0.02 = <strong>10,417A</strong></p>
                  </div>

                  <div>
                    <p className="font-semibold text-white">Step 2: Calculate fault current at main panel</p>
                    <p className="text-sm ml-4 mt-1">Using C = 9,473 for 2/0 AWG copper:</p>
                    <p className="font-mono text-sm ml-4 mt-1">f = (2 x 25 x 10,417) / (9,473 x 1 x 240)</p>
                    <p className="font-mono text-sm ml-4">f = 520,850 / 2,273,520 = 0.2291</p>
                    <p className="font-mono text-sm ml-4">I<sub>sc(panel)</sub> = 10,417 / (1 + 0.2291) = <strong>8,475A</strong></p>
                  </div>

                  <div>
                    <p className="font-semibold text-white">Step 3: Panel selection</p>
                    <p className="text-sm ml-4 mt-1">Standard residential panels are rated 10,000 AIC, which is adequate for this installation.</p>
                    <p className="text-white/60 text-sm ml-4 mt-1">Note: Larger utility transformers (100+ kVA) serving a single residence may push fault current above 10,000A at the panel, requiring a higher AIC rating.</p>
                  </div>
                </div>
              </div>
            </section>

            <section id="aic-ratings" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">AIC Ratings for Common Equipment</h2>
              <p className="text-white/80 mb-4">
                <strong>AIC (Ampere Interrupting Capacity)</strong> is the maximum fault current a circuit breaker or fuse can safely interrupt without damage. Equipment must have an AIC rating equal to or greater than the available fault current at its location per NEC 110.9.
              </p>

              <h3 className="text-xl font-semibold mb-3 mt-6">Circuit Breaker AIC Ratings</h3>
              <div className="overflow-x-auto my-6">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-white/20">
                      <th className="text-left py-3 px-4 text-white/60">Breaker Type</th>
                      <th className="text-left py-3 px-4 text-white/60">Typical AIC @ 240V</th>
                      <th className="text-left py-3 px-4 text-white/60">Typical AIC @ 480V</th>
                      <th className="text-left py-3 px-4 text-white/60">Application</th>
                    </tr>
                  </thead>
                  <tbody className="text-white/80">
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">Residential (QO, BR, CH)</td>
                      <td className="py-3 px-4 font-mono">10,000A</td>
                      <td className="py-3 px-4 font-mono">N/A</td>
                      <td className="py-3 px-4">Dwelling units</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">Commercial bolt-on</td>
                      <td className="py-3 px-4 font-mono">22,000A</td>
                      <td className="py-3 px-4 font-mono">14,000A</td>
                      <td className="py-3 px-4">Small commercial</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">High-AIC bolt-on</td>
                      <td className="py-3 px-4 font-mono">65,000A</td>
                      <td className="py-3 px-4 font-mono">25,000A</td>
                      <td className="py-3 px-4">Commercial/light industrial</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">Molded case (MCCB)</td>
                      <td className="py-3 px-4 font-mono">65,000A</td>
                      <td className="py-3 px-4 font-mono">25,000 &ndash; 65,000A</td>
                      <td className="py-3 px-4">Industrial distribution</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4">Insulated case (ICCB)</td>
                      <td className="py-3 px-4 font-mono">100,000A+</td>
                      <td className="py-3 px-4 font-mono">65,000 &ndash; 200,000A</td>
                      <td className="py-3 px-4">Switchgear, large industrial</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h3 className="text-xl font-semibold mb-3 mt-6">Fuse Interrupting Ratings</h3>
              <div className="overflow-x-auto my-6">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-white/20">
                      <th className="text-left py-3 px-4 text-white/60">Fuse Class</th>
                      <th className="text-left py-3 px-4 text-white/60">Interrupting Rating</th>
                      <th className="text-left py-3 px-4 text-white/60">Current Limiting?</th>
                      <th className="text-left py-3 px-4 text-white/60">Typical Use</th>
                    </tr>
                  </thead>
                  <tbody className="text-white/80">
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">Class RK1</td>
                      <td className="py-3 px-4 font-mono">200,000A</td>
                      <td className="py-3 px-4">Yes (high degree)</td>
                      <td className="py-3 px-4">Motor circuits, general protection</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">Class RK5</td>
                      <td className="py-3 px-4 font-mono">200,000A</td>
                      <td className="py-3 px-4">Yes (moderate)</td>
                      <td className="py-3 px-4">General purpose, feeders</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">Class J</td>
                      <td className="py-3 px-4 font-mono">200,000A</td>
                      <td className="py-3 px-4">Yes (high degree)</td>
                      <td className="py-3 px-4">Motor circuits, compact design</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">Class L</td>
                      <td className="py-3 px-4 font-mono">200,000A</td>
                      <td className="py-3 px-4">Yes</td>
                      <td className="py-3 px-4">601A &ndash; 6000A mains and feeders</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4">Class CC</td>
                      <td className="py-3 px-4 font-mono">200,000A</td>
                      <td className="py-3 px-4">Yes (high degree)</td>
                      <td className="py-3 px-4">Control circuits, small motors</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="bg-green-900/30 rounded-xl p-6 my-6">
                <h3 className="font-semibold text-green-400 mb-3">Key Advantage of Fuses</h3>
                <p className="text-white/70">
                  Current-limiting fuses with 200,000A interrupting ratings are often the simplest solution for high fault current locations. Their current-limiting ability also reduces the let-through energy (I&#178;t), protecting downstream equipment and reducing arc flash hazard. This is why fused disconnects remain popular in industrial installations despite the convenience of circuit breakers.
                </p>
              </div>
            </section>

            <section id="impedance-tables" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Conductor Impedance Reference</h2>
              <p className="text-white/80 mb-4">
                Conductor impedance is what reduces fault current as it travels from the transformer to downstream equipment. Longer runs and smaller conductors produce more impedance, resulting in lower fault current at the far end. The values below are derived from NEC Chapter 9, Table 9 for 60 Hz AC systems.
              </p>

              <h3 className="text-xl font-semibold mb-3 mt-6">C-Values for Copper Conductors in Steel Conduit</h3>
              <div className="overflow-x-auto my-6">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-white/20">
                      <th className="text-left py-3 px-4 text-white/60">AWG / kcmil</th>
                      <th className="text-left py-3 px-4 text-white/60">C Value (600V)</th>
                      <th className="text-left py-3 px-4 text-white/60">R (ohms/1000ft)</th>
                      <th className="text-left py-3 px-4 text-white/60">X (ohms/1000ft)</th>
                    </tr>
                  </thead>
                  <tbody className="text-white/80">
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">14 AWG</td>
                      <td className="py-3 px-4 font-mono">389</td>
                      <td className="py-3 px-4 font-mono">3.14</td>
                      <td className="py-3 px-4 font-mono">0.058</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">12 AWG</td>
                      <td className="py-3 px-4 font-mono">617</td>
                      <td className="py-3 px-4 font-mono">1.98</td>
                      <td className="py-3 px-4 font-mono">0.054</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">10 AWG</td>
                      <td className="py-3 px-4 font-mono">981</td>
                      <td className="py-3 px-4 font-mono">1.24</td>
                      <td className="py-3 px-4 font-mono">0.050</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">8 AWG</td>
                      <td className="py-3 px-4 font-mono">1,538</td>
                      <td className="py-3 px-4 font-mono">0.78</td>
                      <td className="py-3 px-4 font-mono">0.052</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">4 AWG</td>
                      <td className="py-3 px-4 font-mono">3,806</td>
                      <td className="py-3 px-4 font-mono">0.321</td>
                      <td className="py-3 px-4 font-mono">0.048</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">1 AWG</td>
                      <td className="py-3 px-4 font-mono">6,044</td>
                      <td className="py-3 px-4 font-mono">0.16</td>
                      <td className="py-3 px-4 font-mono">0.046</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">1/0 AWG</td>
                      <td className="py-3 px-4 font-mono">7,493</td>
                      <td className="py-3 px-4 font-mono">0.127</td>
                      <td className="py-3 px-4 font-mono">0.045</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">3/0 AWG</td>
                      <td className="py-3 px-4 font-mono">11,424</td>
                      <td className="py-3 px-4 font-mono">0.079</td>
                      <td className="py-3 px-4 font-mono">0.043</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">250 kcmil</td>
                      <td className="py-3 px-4 font-mono">13,236</td>
                      <td className="py-3 px-4 font-mono">0.054</td>
                      <td className="py-3 px-4 font-mono">0.041</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">350 kcmil</td>
                      <td className="py-3 px-4 font-mono">17,483</td>
                      <td className="py-3 px-4 font-mono">0.039</td>
                      <td className="py-3 px-4 font-mono">0.040</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4">500 kcmil</td>
                      <td className="py-3 px-4 font-mono">22,185</td>
                      <td className="py-3 px-4 font-mono">0.029</td>
                      <td className="py-3 px-4 font-mono">0.039</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="bg-white/5 rounded-xl p-6 my-6">
                <h3 className="font-semibold mb-3">Aluminum Conductor Adjustment</h3>
                <p className="text-white/70 text-sm">
                  Aluminum conductors have approximately 1.6 times the resistance of copper for the same size. When using aluminum, the C-values are roughly 60% of the copper values. For example, 500 kcmil aluminum has a C-value of approximately 14,089 compared to 22,185 for copper. Always verify with the specific manufacturer&apos;s published data for precise calculations.
                </p>
              </div>
            </section>

            <section id="series-vs-fully" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Series-Rated vs Fully-Rated Systems</h2>
              <p className="text-white/80 mb-4">
                When the available fault current exceeds the AIC rating of downstream breakers, you have two options: upgrade all breakers to fully-rated devices, or use a <strong>series-rated combination</strong> where a higher-rated upstream device protects lower-rated downstream devices.
              </p>

              <div className="grid md:grid-cols-2 gap-6 my-6">
                <div className="bg-cyan-900/30 rounded-xl p-6">
                  <h3 className="font-semibold text-cyan-400 mb-3">Fully-Rated System</h3>
                  <p className="text-white/70 text-sm mb-3">
                    Every overcurrent protective device in the system is individually rated for the full available fault current at its location.
                  </p>
                  <ul className="space-y-2 text-white/70 text-sm">
                    <li>&#10003; Each device independently rated for AFC</li>
                    <li>&#10003; No restrictions on replacement breakers</li>
                    <li>&#10003; No special labeling required beyond NEC 110.24</li>
                    <li>&#10003; Preferred for critical systems</li>
                    <li>&#10007; Higher cost for downstream devices</li>
                  </ul>
                </div>
                <div className="bg-purple-900/30 rounded-xl p-6">
                  <h3 className="font-semibold text-purple-400 mb-3">Series-Rated System</h3>
                  <p className="text-white/70 text-sm mb-3">
                    A tested combination where the upstream device (line-side) enhances the effective interrupting rating of the downstream device (load-side).
                  </p>
                  <ul className="space-y-2 text-white/70 text-sm">
                    <li>&#10003; Lower cost for downstream breakers</li>
                    <li>&#10003; Allows use of standard-AIC breakers in high-fault locations</li>
                    <li>&#10007; Must be a listed and tested combination</li>
                    <li>&#10007; Requires NEC 110.22(C) labeling</li>
                    <li>&#10007; Cannot be used where selective coordination is required</li>
                  </ul>
                </div>
              </div>

              <h3 className="text-xl font-semibold mb-3 mt-6">NEC Requirements for Series-Rated Systems</h3>
              <div className="bg-orange-900/30 rounded-xl p-6 my-6">
                <p className="text-white/70 mb-3">
                  Per NEC 240.86 and 110.22(C), series-rated combinations require:
                </p>
                <ul className="space-y-2 text-white/70">
                  <li><strong>1. Listed combination:</strong> The upstream and downstream devices must be tested and listed together by a nationally recognized testing laboratory (UL, etc.)</li>
                  <li><strong>2. Labeling:</strong> Equipment must be legibly marked in the field: &quot;Caution &mdash; Series Rated System. _____ Amp Breaker Replacement Required.&quot;</li>
                  <li><strong>3. Documentation:</strong> The available fault current must not exceed the series combination rating</li>
                  <li><strong>4. Engineering supervision:</strong> Per NEC 240.86(A), series ratings selected under engineering supervision in existing installations must have proper documentation on file</li>
                </ul>
              </div>

              <h3 className="text-xl font-semibold mb-3 mt-6">When Series Rating Is Not Permitted</h3>
              <ul className="list-disc list-inside text-white/70 space-y-2 mb-6">
                <li><strong>Emergency systems (NEC 700):</strong> Selective coordination is required, which precludes series rating</li>
                <li><strong>Legally required standby systems (NEC 701):</strong> Same selective coordination requirement</li>
                <li><strong>Critical operations power systems (NEC 708):</strong> Requires selective coordination</li>
                <li><strong>Healthcare essential electrical systems (NEC 517.26):</strong> Selective coordination required</li>
                <li><strong>Elevator circuits (NEC 620.62):</strong> Selective coordination required</li>
              </ul>
            </section>

            <section id="common-mistakes" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Common Mistakes and Inspection Failures</h2>
              <p className="text-white/80 mb-4">
                Fault current errors are among the most common code violations cited by inspectors, particularly since NEC 110.24 began requiring fault current documentation on service equipment. Here are the mistakes that lead to failed inspections and unsafe installations.
              </p>

              <div className="space-y-4 my-6">
                <div className="bg-red-900/20 rounded-xl p-5 border border-red-500/20">
                  <h3 className="font-semibold text-red-400 mb-2">Mistake 1: Assuming 10,000 AIC Is Always Enough</h3>
                  <p className="text-white/70 text-sm">
                    Many electricians default to standard 10,000 AIC residential breakers without checking the available fault current. A residence fed by a 167 kVA or larger utility transformer with short service conductors can exceed 10,000A at the panel. Always calculate or obtain the AFC from the utility before specifying equipment.
                  </p>
                </div>

                <div className="bg-red-900/20 rounded-xl p-5 border border-red-500/20">
                  <h3 className="font-semibold text-red-400 mb-2">Mistake 2: Missing NEC 110.24 Label</h3>
                  <p className="text-white/70 text-sm">
                    For all non-dwelling-unit service equipment, the available fault current and the date of calculation must be field-marked on the equipment. Inspectors routinely reject installations missing this label. The label must be durable and legible &mdash; handwritten labels in pencil or marker that can fade are often rejected.
                  </p>
                </div>

                <div className="bg-red-900/20 rounded-xl p-5 border border-red-500/20">
                  <h3 className="font-semibold text-red-400 mb-2">Mistake 3: Using Infinite Bus When Utility Data Is Known</h3>
                  <p className="text-white/70 text-sm">
                    While the infinite bus assumption is conservative and often acceptable, some engineers over-specify equipment by not accounting for utility impedance. This can lead to unnecessarily expensive equipment. Conversely, some engineers use low utility fault current values that may change if the utility upgrades their system. The safest approach is to use the infinite bus value or confirm the utility will not increase their available fault current.
                  </p>
                </div>

                <div className="bg-red-900/20 rounded-xl p-5 border border-red-500/20">
                  <h3 className="font-semibold text-red-400 mb-2">Mistake 4: Ignoring Motor Contribution</h3>
                  <p className="text-white/70 text-sm">
                    In industrial facilities with large motor loads, motor contribution can add 20% or more to the available fault current. Failing to account for motor contribution can result in equipment with inadequate AIC ratings. This is especially critical at motor control centers where motors contribute directly to the bus fault current.
                  </p>
                </div>

                <div className="bg-red-900/20 rounded-xl p-5 border border-red-500/20">
                  <h3 className="font-semibold text-red-400 mb-2">Mistake 5: Series-Rated Labeling Violations</h3>
                  <p className="text-white/70 text-sm">
                    When a series-rated combination is used, NEC 110.22(C) requires the equipment to be labeled identifying the series combination and the required replacement breaker. Replacing a breaker in a series-rated panel with a non-listed substitute can create a dangerous condition. Ensure all series-rated panels are properly labeled and that replacement breakers match the listed combination.
                  </p>
                </div>

                <div className="bg-red-900/20 rounded-xl p-5 border border-red-500/20">
                  <h3 className="font-semibold text-red-400 mb-2">Mistake 6: Not Updating After Utility Transformer Changes</h3>
                  <p className="text-white/70 text-sm">
                    NEC 110.24(B) requires that when modifications to the electrical installation affect available fault current, the labels must be recalculated and updated. A common scenario: the utility replaces a 150 kVA padmount transformer with a 500 kVA unit to serve new loads in the area. The available fault current at your service can triple overnight, potentially exceeding the AIC rating of existing equipment.
                  </p>
                </div>

                <div className="bg-red-900/20 rounded-xl p-5 border border-red-500/20">
                  <h3 className="font-semibold text-red-400 mb-2">Mistake 7: Confusing AIC and SCCR</h3>
                  <p className="text-white/70 text-sm">
                    <strong>AIC (Ampere Interrupting Capacity)</strong> applies to individual overcurrent protective devices &mdash; it is the maximum fault current the device can safely interrupt. <strong>SCCR (Short-Circuit Current Rating)</strong> applies to an entire assembly (panelboard, MCC, industrial control panel) and is determined by the weakest component in the assembly. An assembly with 65 kAIC breakers may only have a 10 kA SCCR if it contains a contactor or other component rated at 10 kA.
                  </p>
                </div>
              </div>

              <div className="bg-green-900/30 rounded-xl p-6 my-6">
                <h3 className="font-semibold text-green-400 mb-3">Inspection Best Practices</h3>
                <ul className="space-y-2 text-white/70 text-sm">
                  <li>&#10003; Always obtain available fault current data from the utility before specifying equipment</li>
                  <li>&#10003; Perform or commission a short-circuit current calculation for every commercial/industrial project</li>
                  <li>&#10003; Label all non-dwelling service equipment per NEC 110.24 with AFC and date</li>
                  <li>&#10003; Verify AIC ratings of all overcurrent devices against calculated AFC at their location</li>
                  <li>&#10003; Document series-rated combinations with proper NEC 110.22(C) labels</li>
                  <li>&#10003; Include motor contribution for industrial facilities with significant motor loads</li>
                  <li>&#10003; Keep a copy of the fault current study on file at the building</li>
                </ul>
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
                <Link href="/blog/electrical-fault-current-calculations" className="bg-white/5 hover:bg-white/10 rounded-xl p-6 transition-colors">
                  <span className="text-cyan-400 text-sm">Calculations</span>
                  <h3 className="font-semibold mt-2">Electrical Fault Current Calculations: Complete Guide</h3>
                </Link>
                <Link href="/blog/nec-article-240-overcurrent-protection" className="bg-white/5 hover:bg-white/10 rounded-xl p-6 transition-colors">
                  <span className="text-purple-400 text-sm">NEC Code</span>
                  <h3 className="font-semibold mt-2">NEC Article 240: Overcurrent Protection Guide</h3>
                </Link>
                <Link href="/blog/transformer-sizing-guide" className="bg-white/5 hover:bg-white/10 rounded-xl p-6 transition-colors">
                  <span className="text-amber-400 text-sm">Calculations</span>
                  <h3 className="font-semibold mt-2">Transformer Sizing Guide for Electricians</h3>
                </Link>
                <Link href="/blog/electrical-panel-troubleshooting" className="bg-white/5 hover:bg-white/10 rounded-xl p-6 transition-colors">
                  <span className="text-red-400 text-sm">Troubleshooting</span>
                  <h3 className="font-semibold mt-2">Electrical Panel Troubleshooting Guide</h3>
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
