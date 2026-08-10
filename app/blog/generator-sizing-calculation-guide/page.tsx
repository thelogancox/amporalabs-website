import { Metadata } from "next";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import { BlogPostingJsonLd, BreadcrumbJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Generator Sizing Guide: How to Calculate Backup Power Needs",
  description: "Complete generator sizing guide covering kW calculations, starting watts vs running watts, standby vs portable generators, transfer switch sizing, load prioritization, residential and commercial generator sizing with step-by-step calculation examples and common household load wattage tables.",
  keywords: [
    "generator sizing calculator",
    "how to size a generator",
    "generator kW calculation",
    "standby generator sizing",
    "whole house generator size",
    "generator starting watts",
    "backup generator sizing",
    "generator load calculation",
    "what size generator do I need",
    "residential generator sizing"
  ],
  alternates: {
    canonical: "https://amporalabs.com/blog/generator-sizing-calculation-guide",
  },
  openGraph: {
    title: "Generator Sizing Guide: How to Calculate Backup Power Needs - Ampora",
    description: "Master generator sizing calculations with this comprehensive guide covering kW ratings, starting vs running watts, load prioritization, and step-by-step sizing examples.",
    url: "https://amporalabs.com/blog/generator-sizing-calculation-guide",
    type: "article",
    publishedTime: "2026-03-04",
  },
};

function HeroIllustration() {
  return (
    <svg viewBox="0 0 400 180" className="w-full h-40 md:h-48" aria-label="Generator sizing calculation diagram with load breakdown">
      {/* Background */}
      <rect x="10" y="10" width="380" height="160" rx="4" fill="#1f2937" stroke="#374151" strokeWidth="1"/>

      {/* Generator Icon */}
      <g transform="translate(25, 30)">
        {/* Generator Body */}
        <rect x="0" y="20" width="80" height="50" rx="4" fill="#f59e0b" fillOpacity="0.15" stroke="#f59e0b" strokeWidth="1.5"/>
        <text x="40" y="10" textAnchor="middle" fill="#f59e0b" fontSize="8" fontWeight="bold">GENERATOR</text>
        {/* Engine Lines */}
        <rect x="8" y="28" width="30" height="16" rx="2" fill="none" stroke="#f59e0b" strokeWidth="1"/>
        <line x1="12" y1="32" x2="34" y2="32" stroke="#f59e0b" strokeWidth="0.8" strokeDasharray="2,1"/>
        <line x1="12" y1="36" x2="34" y2="36" stroke="#f59e0b" strokeWidth="0.8" strokeDasharray="2,1"/>
        <line x1="12" y1="40" x2="34" y2="40" stroke="#f59e0b" strokeWidth="0.8" strokeDasharray="2,1"/>
        {/* Alternator Circle */}
        <circle cx="58" cy="36" r="10" fill="none" stroke="#f59e0b" strokeWidth="1.5"/>
        <text x="58" y="39" textAnchor="middle" fill="#f59e0b" fontSize="8" fontWeight="bold">G</text>
        {/* Output Terminal */}
        <rect x="70" y="42" width="10" height="6" rx="1" fill="#f59e0b" fillOpacity="0.3" stroke="#f59e0b" strokeWidth="1"/>
        {/* Rating Plate */}
        <text x="40" y="60" textAnchor="middle" fill="#9ca3af" fontSize="5">22 kW / 27.5 kVA</text>
        <text x="40" y="67" textAnchor="middle" fill="#9ca3af" fontSize="4.5">240V 1-Phase 60Hz</text>
      </g>

      {/* Power Flow Arrow */}
      <g transform="translate(110, 55)">
        <line x1="0" y1="0" x2="30" y2="0" stroke="#22d3ee" strokeWidth="2"/>
        <polygon points="30,-4 38,0 30,4" fill="#22d3ee"/>
        <text x="19" y="-6" textAnchor="middle" fill="#22d3ee" fontSize="5">kW</text>
      </g>

      {/* Transfer Switch */}
      <g transform="translate(148, 30)">
        <rect x="0" y="0" width="50" height="50" rx="3" fill="#8b5cf6" fillOpacity="0.15" stroke="#8b5cf6" strokeWidth="1.5"/>
        <text x="25" y="12" textAnchor="middle" fill="#8b5cf6" fontSize="5.5" fontWeight="bold">TRANSFER</text>
        <text x="25" y="20" textAnchor="middle" fill="#8b5cf6" fontSize="5.5" fontWeight="bold">SWITCH</text>
        {/* Switch Symbol */}
        <circle cx="15" cy="32" r="3" fill="none" stroke="#8b5cf6" strokeWidth="1"/>
        <circle cx="35" cy="32" r="3" fill="none" stroke="#8b5cf6" strokeWidth="1"/>
        <line x1="18" y1="32" x2="32" y2="28" stroke="#8b5cf6" strokeWidth="1.5"/>
        <text x="25" y="46" textAnchor="middle" fill="#9ca3af" fontSize="4.5">200A ATS</text>
      </g>

      {/* Arrow to Loads */}
      <g transform="translate(200, 55)">
        <line x1="0" y1="0" x2="20" y2="0" stroke="#22d3ee" strokeWidth="2"/>
        <polygon points="20,-4 28,0 20,4" fill="#22d3ee"/>
      </g>

      {/* Load Breakdown Panel */}
      <g transform="translate(230, 18)">
        <text x="70" y="8" textAnchor="middle" fill="#22d3ee" fontSize="7" fontWeight="bold">LOAD CALCULATION</text>

        {/* Load Items */}
        <g transform="translate(0, 16)">
          <rect x="0" y="0" width="140" height="18" rx="2" fill="#ef4444" fillOpacity="0.12" stroke="#ef4444" strokeWidth="0.8"/>
          <text x="6" y="12" fill="#ef4444" fontSize="5.5" fontWeight="bold">A/C Compressor</text>
          <text x="105" y="12" fill="#ef4444" fontSize="5.5" fontWeight="bold" fontFamily="monospace">5,000W</text>
          <rect x="80" y="4" width="18" height="10" rx="1" fill="#ef4444" fillOpacity="0.25"/>
          <text x="89" y="12" textAnchor="middle" fill="#ef4444" fontSize="4.5">START</text>
        </g>

        <g transform="translate(0, 38)">
          <rect x="0" y="0" width="140" height="18" rx="2" fill="#f59e0b" fillOpacity="0.12" stroke="#f59e0b" strokeWidth="0.8"/>
          <text x="6" y="12" fill="#f59e0b" fontSize="5.5" fontWeight="bold">Well Pump</text>
          <text x="105" y="12" fill="#f59e0b" fontSize="5.5" fontWeight="bold" fontFamily="monospace">2,400W</text>
          <rect x="80" y="4" width="18" height="10" rx="1" fill="#f59e0b" fillOpacity="0.25"/>
          <text x="89" y="12" textAnchor="middle" fill="#f59e0b" fontSize="4.5">START</text>
        </g>

        <g transform="translate(0, 60)">
          <rect x="0" y="0" width="140" height="18" rx="2" fill="#22c55e" fillOpacity="0.12" stroke="#22c55e" strokeWidth="0.8"/>
          <text x="6" y="12" fill="#22c55e" fontSize="5.5" fontWeight="bold">Lighting + Misc</text>
          <text x="105" y="12" fill="#22c55e" fontSize="5.5" fontWeight="bold" fontFamily="monospace">3,200W</text>
          <rect x="80" y="4" width="18" height="10" rx="1" fill="#22c55e" fillOpacity="0.25"/>
          <text x="89" y="12" textAnchor="middle" fill="#22c55e" fontSize="4.5">RUN</text>
        </g>

        <g transform="translate(0, 82)">
          <rect x="0" y="0" width="140" height="18" rx="2" fill="#3b82f6" fillOpacity="0.12" stroke="#3b82f6" strokeWidth="0.8"/>
          <text x="6" y="12" fill="#3b82f6" fontSize="5.5" fontWeight="bold">Refrigerator</text>
          <text x="105" y="12" fill="#3b82f6" fontSize="5.5" fontWeight="bold" fontFamily="monospace">1,200W</text>
          <rect x="80" y="4" width="18" height="10" rx="1" fill="#3b82f6" fillOpacity="0.25"/>
          <text x="89" y="12" textAnchor="middle" fill="#3b82f6" fontSize="4.5">START</text>
        </g>

        {/* Total Line */}
        <line x1="0" y1="104" x2="140" y2="104" stroke="#22d3ee" strokeWidth="1"/>
        <text x="6" y="116" fill="#22d3ee" fontSize="6" fontWeight="bold">TOTAL PEAK:</text>
        <text x="105" y="116" fill="#22d3ee" fontSize="6" fontWeight="bold" fontFamily="monospace">11.8 kW</text>
      </g>

      {/* Utility Feed (top) */}
      <g transform="translate(148, 86)">
        <line x1="25" y1="0" x2="25" y2="18" stroke="#9ca3af" strokeWidth="1" strokeDasharray="3,2"/>
        <text x="25" y="28" textAnchor="middle" fill="#9ca3af" fontSize="4.5">Utility</text>
        <text x="25" y="34" textAnchor="middle" fill="#9ca3af" fontSize="4.5">(Normal)</text>
      </g>
    </svg>
  );
}

export default function GeneratorSizingCalculationGuidePage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navigation />
      <div className="pt-20">
        <BreadcrumbJsonLd
          items={[
            { name: "Home", url: "https://amporalabs.com" },
            { name: "Blog", url: "https://amporalabs.com/blog" },
            { name: "Generator Sizing Guide", url: "https://amporalabs.com/blog/generator-sizing-calculation-guide" },
          ]}
        />
        <BlogPostingJsonLd
          headline="Generator Sizing Guide: How to Calculate Backup Power Needs"
          description="Complete guide to generator sizing calculations covering kW vs kVA ratings, starting watts vs running watts, load prioritization, transfer switch compatibility, and step-by-step sizing examples for residential and commercial applications."
          datePublished="2026-03-04"
          dateModified="2026-03-04"
          url="https://amporalabs.com/blog/generator-sizing-calculation-guide"
          wordCount={5200}
          keywords={["generator sizing", "generator kW calculation", "starting watts", "running watts", "standby generator", "backup power"]}
        />

        <article className="max-w-4xl mx-auto px-6 py-12">
          {/* Breadcrumb */}
          <nav className="text-sm text-white/60 mb-8">
            <Link href="/" className="hover:text-white">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/blog" className="hover:text-white">Blog</Link>
            <span className="mx-2">/</span>
            <span className="text-white">Generator Sizing Guide</span>
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
              Generator Sizing Guide: How to Calculate Backup Power Needs
            </h1>
            <p className="text-xl text-white/70">
              Choosing the wrong generator size leads to overloaded circuits, damaged equipment, or wasted money on excess capacity. This guide walks you through the complete generator sizing process &mdash; from understanding kW vs kVA ratings and starting watts vs running watts, to calculating total load, selecting between standby and portable units, and matching your generator to the right transfer switch.
            </p>
          </header>

          <div className="mb-12 bg-gradient-to-br from-amber-900/20 to-cyan-900/20 rounded-2xl p-6 border border-white/10">
            <HeroIllustration />
          </div>

          {/* Pro Tip Callout */}
          <div className="bg-amber-900/40 border-2 border-amber-500/50 rounded-2xl p-6 mb-12">
            <div className="flex items-start gap-4">
              <div className="text-3xl">&#9889;</div>
              <div>
                <h3 className="font-display font-bold text-lg mb-2 text-amber-400">Key Sizing Principle</h3>
                <p className="text-white/80 text-sm">
                  Always size your generator based on <strong>starting watts</strong> (surge demand), not just running watts. Motor-driven loads like air conditioners, well pumps, and refrigerators can draw 2&ndash;6 times their running wattage during startup. Undersizing for starting loads is the most common generator sizing mistake.
                </p>
              </div>
            </div>
          </div>

          {/* Table of Contents */}
          <div className="bg-white/5 rounded-2xl p-6 mb-12">
            <h2 className="font-display font-bold mb-4">In This Guide</h2>
            <ul className="space-y-2 text-white/70">
              <li><a href="#generator-ratings" className="hover:text-purple-400">Understanding Generator Ratings (kW vs kVA)</a></li>
              <li><a href="#starting-vs-running" className="hover:text-purple-400">Starting Watts vs Running Watts</a></li>
              <li><a href="#calculate-total-load" className="hover:text-purple-400">How to Calculate Total Load</a></li>
              <li><a href="#common-loads-table" className="hover:text-purple-400">Common Household Loads Table</a></li>
              <li><a href="#whole-house-vs-critical" className="hover:text-purple-400">Sizing for Whole House vs Critical Loads</a></li>
              <li><a href="#standby-vs-portable" className="hover:text-purple-400">Standby vs Portable Generator Sizing</a></li>
              <li><a href="#single-vs-three-phase" className="hover:text-purple-400">Single-Phase vs Three-Phase Generators</a></li>
              <li><a href="#transfer-switch" className="hover:text-purple-400">Transfer Switch Compatibility</a></li>
              <li><a href="#fuel-considerations" className="hover:text-purple-400">Fuel Type Considerations</a></li>
              <li><a href="#sizing-example" className="hover:text-purple-400">Step-by-Step Sizing Example</a></li>
            </ul>
          </div>

          {/* Article Content */}
          <div className="prose prose-invert prose-lg max-w-none">

            <section id="generator-ratings" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Understanding Generator Ratings (kW vs kVA)</h2>
              <p className="text-white/80 mb-4">
                Generators are rated in two key units: <strong>kilowatts (kW)</strong> and <strong>kilovolt-amperes (kVA)</strong>. Understanding the difference is critical for proper sizing because using the wrong number can leave you 20% or more short on capacity.
              </p>

              <div className="grid md:grid-cols-2 gap-6 my-6">
                <div className="bg-white/5 rounded-xl p-6">
                  <h3 className="font-semibold text-cyan-400 mb-3">kW (Kilowatts) &mdash; Real Power</h3>
                  <ul className="text-white/70 text-sm space-y-1">
                    <li><strong>Definition:</strong> Actual usable power delivered to loads</li>
                    <li><strong>Also called:</strong> Real power, active power, working power</li>
                    <li><strong>Used for:</strong> Residential sizing, resistive loads</li>
                    <li><strong>What it powers:</strong> Heating elements, lights, electronics</li>
                    <li><strong>Key fact:</strong> kW is the number that matters for your loads</li>
                  </ul>
                </div>
                <div className="bg-white/5 rounded-xl p-6">
                  <h3 className="font-semibold text-amber-400 mb-3">kVA (Kilovolt-Amperes) &mdash; Apparent Power</h3>
                  <ul className="text-white/70 text-sm space-y-1">
                    <li><strong>Definition:</strong> Total power output including reactive component</li>
                    <li><strong>Also called:</strong> Apparent power</li>
                    <li><strong>Used for:</strong> Commercial sizing, generator nameplate ratings</li>
                    <li><strong>Includes:</strong> Both real power (kW) and reactive power (kVAR)</li>
                    <li><strong>Key fact:</strong> kVA is always equal to or greater than kW</li>
                  </ul>
                </div>
              </div>

              <div className="bg-white/5 rounded-xl p-6 my-6">
                <h4 className="font-semibold text-white mb-3">The Power Factor Relationship</h4>
                <p className="text-white/70 mb-3">
                  The relationship between kW and kVA is determined by the <strong>power factor (PF)</strong>:
                </p>
                <div className="bg-black/40 rounded-lg p-4 font-mono text-center text-cyan-400 mb-3">
                  kW = kVA &times; Power Factor (PF)
                </div>
                <p className="text-white/70 mb-2">
                  Most generators have a power factor of <strong>0.8</strong>, meaning a 25 kVA generator delivers only 20 kW of usable power:
                </p>
                <div className="bg-black/40 rounded-lg p-4 font-mono text-center text-amber-400">
                  25 kVA &times; 0.8 PF = 20 kW
                </div>
                <p className="text-white/60 text-sm mt-3">
                  Always check whether the manufacturer&apos;s rating is in kW or kVA. If only kVA is listed, multiply by 0.8 to get the usable kW capacity. For more on this topic, see our <Link href="/blog/3-phase-power-calculations" className="text-cyan-400 hover:underline">three-phase power calculations guide</Link>.
                </p>
              </div>

              <h3 className="text-xl font-display font-semibold mb-3 text-cyan-400">Standby vs Prime vs Continuous Ratings</h3>
              <p className="text-white/80 mb-4">
                Generator manufacturers also specify different power ratings based on intended use. Using the wrong rating for your application can lead to premature failure or warranty voiding.
              </p>
              <div className="overflow-x-auto my-6">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-white/20">
                      <th className="text-left py-3 px-4 text-white/60">Rating Type</th>
                      <th className="text-left py-3 px-4 text-white/60">Typical Load</th>
                      <th className="text-left py-3 px-4 text-white/60">Run Time</th>
                      <th className="text-left py-3 px-4 text-white/60">Application</th>
                    </tr>
                  </thead>
                  <tbody className="text-white/80">
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-bold text-amber-400">Standby</td>
                      <td className="py-3 px-4 font-mono">Variable, avg 70%</td>
                      <td className="py-3 px-4">200&ndash;500 hrs/year</td>
                      <td className="py-3 px-4 text-white/60">Backup power during outages</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-bold text-green-400">Prime</td>
                      <td className="py-3 px-4 font-mono">Variable, avg 70%</td>
                      <td className="py-3 px-4">Unlimited hours</td>
                      <td className="py-3 px-4 text-white/60">Primary power source, no utility</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-bold text-cyan-400">Continuous</td>
                      <td className="py-3 px-4 font-mono">Constant 100%</td>
                      <td className="py-3 px-4">Unlimited hours</td>
                      <td className="py-3 px-4 text-white/60">Base load, constant demand</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-white/60 text-sm">
                Standby-rated generators are designed for emergency use only and should not run more than 500 hours per year. Using a standby-rated generator as a prime power source will void the warranty and shorten engine life significantly.
              </p>
            </section>

            <section id="starting-vs-running" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Starting Watts vs Running Watts</h2>
              <p className="text-white/80 mb-4">
                This is the single most important concept in generator sizing. Every motor-driven appliance draws significantly more power during startup than during normal operation. <strong>Starting watts</strong> (also called surge watts or locked-rotor watts) can be 2 to 6 times higher than <strong>running watts</strong> (also called rated watts or continuous watts).
              </p>

              <div className="grid md:grid-cols-2 gap-6 my-6">
                <div className="bg-red-900/30 rounded-xl p-6">
                  <h3 className="font-semibold text-red-400 mb-3">Starting Watts (Surge)</h3>
                  <ul className="text-white/60 text-sm space-y-1">
                    <li><strong>Duration:</strong> 0.5 to 3 seconds per motor start</li>
                    <li><strong>Multiplier:</strong> 2&ndash;6x running watts</li>
                    <li><strong>Applies to:</strong> Motors, compressors, pumps</li>
                    <li><strong>Why it matters:</strong> Generator must handle the peak</li>
                    <li><strong>If undersized:</strong> Breaker trips, generator stalls</li>
                  </ul>
                </div>
                <div className="bg-green-900/30 rounded-xl p-6">
                  <h3 className="font-semibold text-green-400 mb-3">Running Watts (Continuous)</h3>
                  <ul className="text-white/60 text-sm space-y-1">
                    <li><strong>Duration:</strong> Entire time the load is operating</li>
                    <li><strong>Also called:</strong> Rated watts, nameplate watts</li>
                    <li><strong>Applies to:</strong> All loads during normal operation</li>
                    <li><strong>Why it matters:</strong> Determines sustained fuel consumption</li>
                    <li><strong>Planning note:</strong> Total running watts must stay within rated kW</li>
                  </ul>
                </div>
              </div>

              <div className="bg-white/5 rounded-xl p-6 my-6">
                <h4 className="font-semibold text-white mb-3">Typical Starting-to-Running Multipliers</h4>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-white/20">
                        <th className="text-left py-2 px-3 text-white/60">Load Type</th>
                        <th className="text-left py-2 px-3 text-white/60">Starting Multiplier</th>
                        <th className="text-left py-2 px-3 text-white/60">Example</th>
                      </tr>
                    </thead>
                    <tbody className="text-white/80">
                      <tr className="border-b border-white/10">
                        <td className="py-2 px-3">Central A/C (3&ndash;5 ton)</td>
                        <td className="py-2 px-3 font-mono text-red-400">3&ndash;5x</td>
                        <td className="py-2 px-3 text-white/60">3,500W run &rarr; 14,000W start</td>
                      </tr>
                      <tr className="border-b border-white/10">
                        <td className="py-2 px-3">Well pump (1/2&ndash;1 HP)</td>
                        <td className="py-2 px-3 font-mono text-red-400">3&ndash;5x</td>
                        <td className="py-2 px-3 text-white/60">800W run &rarr; 2,400W start</td>
                      </tr>
                      <tr className="border-b border-white/10">
                        <td className="py-2 px-3">Refrigerator / Freezer</td>
                        <td className="py-2 px-3 font-mono text-orange-400">2&ndash;3x</td>
                        <td className="py-2 px-3 text-white/60">400W run &rarr; 1,200W start</td>
                      </tr>
                      <tr className="border-b border-white/10">
                        <td className="py-2 px-3">Sump pump (1/3&ndash;1/2 HP)</td>
                        <td className="py-2 px-3 font-mono text-orange-400">2&ndash;3x</td>
                        <td className="py-2 px-3 text-white/60">600W run &rarr; 1,800W start</td>
                      </tr>
                      <tr className="border-b border-white/10">
                        <td className="py-2 px-3">Furnace blower motor</td>
                        <td className="py-2 px-3 font-mono text-orange-400">2&ndash;3x</td>
                        <td className="py-2 px-3 text-white/60">500W run &rarr; 1,500W start</td>
                      </tr>
                      <tr>
                        <td className="py-2 px-3">Resistive loads (heaters, lights)</td>
                        <td className="py-2 px-3 font-mono text-green-400">1x (no surge)</td>
                        <td className="py-2 px-3 text-white/60">1,500W run = 1,500W start</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="bg-amber-900/30 rounded-xl p-6 my-6">
                <h4 className="font-semibold text-amber-400 mb-3">Why Starting Watts Matter for Sizing</h4>
                <p className="text-white/70">
                  Your generator must be able to handle the <strong>largest single starting surge</strong> on top of all currently running loads. If your running loads total 8,000W and your central A/C needs 14,000W to start, the generator must supply 22,000W (22 kW) at that moment &mdash; even though the continuous demand after startup drops back to about 11,500W. This is why generators have both a <strong>rated (continuous) watts</strong> and a <strong>surge watts</strong> specification.
                </p>
              </div>
            </section>

            <section id="calculate-total-load" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">How to Calculate Total Load</h2>
              <p className="text-white/80 mb-4">
                The generator sizing calculation follows a structured process. The goal is to determine two numbers: <strong>total running watts</strong> (continuous demand) and <strong>peak starting watts</strong> (maximum surge demand). For a deeper dive into the NEC method, see our <Link href="/blog/residential-load-calculations" className="text-cyan-400 hover:underline">residential load calculations guide</Link>.
              </p>

              <div className="space-y-4 my-6">
                <div className="bg-white/5 rounded-xl p-4 flex items-start gap-4">
                  <span className="bg-amber-600 text-white text-sm font-bold px-3 py-1 rounded-full">1</span>
                  <div>
                    <p className="font-semibold text-white">List All Loads You Want to Power</p>
                    <p className="text-white/60 text-sm">Walk through your home or facility and list every appliance, system, and circuit you want the generator to support. Check nameplates for wattage or amperage ratings. Include lighting circuits, HVAC, refrigeration, well pumps, sump pumps, security systems, medical equipment, and any other essential loads.</p>
                  </div>
                </div>
                <div className="bg-white/5 rounded-xl p-4 flex items-start gap-4">
                  <span className="bg-amber-600 text-white text-sm font-bold px-3 py-1 rounded-full">2</span>
                  <div>
                    <p className="font-semibold text-white">Record Running Watts for Each Load</p>
                    <p className="text-white/60 text-sm">For each item, note the running (continuous) wattage. If the nameplate lists amps instead of watts, multiply amps by voltage (typically 120V or 240V). For 240V loads: Watts = Amps &times; 240. For 120V loads: Watts = Amps &times; 120.</p>
                  </div>
                </div>
                <div className="bg-white/5 rounded-xl p-4 flex items-start gap-4">
                  <span className="bg-amber-600 text-white text-sm font-bold px-3 py-1 rounded-full">3</span>
                  <div>
                    <p className="font-semibold text-white">Record Starting Watts for Motor Loads</p>
                    <p className="text-white/60 text-sm">For any load with a motor (A/C, pumps, refrigerators, freezers, furnace fans), note the starting wattage. If not listed on the nameplate, use the multipliers from the table above or check manufacturer documentation. Resistive loads (heaters, lights, toasters) have no starting surge.</p>
                  </div>
                </div>
                <div className="bg-white/5 rounded-xl p-4 flex items-start gap-4">
                  <span className="bg-amber-600 text-white text-sm font-bold px-3 py-1 rounded-full">4</span>
                  <div>
                    <p className="font-semibold text-white">Sum Running Watts</p>
                    <p className="text-white/60 text-sm">Add up the running watts for all loads that could be operating simultaneously. This gives your <strong>total continuous demand</strong>. The generator&apos;s rated (continuous) wattage must meet or exceed this number.</p>
                  </div>
                </div>
                <div className="bg-white/5 rounded-xl p-4 flex items-start gap-4">
                  <span className="bg-amber-600 text-white text-sm font-bold px-3 py-1 rounded-full">5</span>
                  <div>
                    <p className="font-semibold text-white">Add Largest Starting Surge</p>
                    <p className="text-white/60 text-sm">Identify the single largest starting wattage among your motor loads. Add only this one starting surge to your total running watts. This gives your <strong>peak demand</strong>. The generator&apos;s surge wattage must meet or exceed this number. (You only add the single largest surge because motors don&apos;t all start simultaneously.)</p>
                  </div>
                </div>
                <div className="bg-white/5 rounded-xl p-4 flex items-start gap-4">
                  <span className="bg-amber-600 text-white text-sm font-bold px-3 py-1 rounded-full">6</span>
                  <div>
                    <p className="font-semibold text-white">Apply a Safety Margin</p>
                    <p className="text-white/60 text-sm">Add a <strong>10&ndash;25% safety margin</strong> to your calculated totals. Generators run most efficiently at 50&ndash;80% load. Running at 100% continuously shortens engine life, increases fuel consumption, and leaves no headroom for unexpected loads. A good target is sizing for 75% of rated capacity.</p>
                  </div>
                </div>
              </div>

              <div className="bg-white/5 rounded-xl p-6 my-6">
                <h4 className="font-semibold text-white mb-3">Quick Formula Summary</h4>
                <div className="space-y-3">
                  <div className="bg-black/40 rounded-lg p-4 font-mono text-sm">
                    <span className="text-white/60">Total Running Watts = </span><span className="text-cyan-400">Sum of all running wattages</span>
                  </div>
                  <div className="bg-black/40 rounded-lg p-4 font-mono text-sm">
                    <span className="text-white/60">Peak Demand = </span><span className="text-amber-400">Total Running Watts + Largest Single Starting Surge</span>
                  </div>
                  <div className="bg-black/40 rounded-lg p-4 font-mono text-sm">
                    <span className="text-white/60">Minimum Generator Size = </span><span className="text-green-400">Peak Demand &divide; 0.75 (for 25% safety margin)</span>
                  </div>
                </div>
              </div>
            </section>

            <section id="common-loads-table" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Common Household Loads Table</h2>
              <p className="text-white/80 mb-4">
                Use this reference table when calculating your generator load. These are typical wattages; always check your specific equipment nameplates for exact values. Wattages vary significantly by equipment age, efficiency rating, and capacity.
              </p>

              <div className="overflow-x-auto my-6">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-white/20">
                      <th className="text-left py-3 px-4 text-white/60">Appliance / Load</th>
                      <th className="text-left py-3 px-4 text-white/60">Running Watts</th>
                      <th className="text-left py-3 px-4 text-white/60">Starting Watts</th>
                      <th className="text-left py-3 px-4 text-white/60">Voltage</th>
                    </tr>
                  </thead>
                  <tbody className="text-white/80">
                    <tr className="border-b border-white/10 bg-red-900/10">
                      <td className="py-3 px-4 font-semibold" colSpan={4}><span className="text-red-400">HVAC &amp; Climate</span></td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-2 px-4">Central A/C (3 ton)</td>
                      <td className="py-2 px-4 font-mono text-cyan-400">3,500</td>
                      <td className="py-2 px-4 font-mono text-red-400">10,500&ndash;14,000</td>
                      <td className="py-2 px-4 font-mono">240V</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-2 px-4">Central A/C (5 ton)</td>
                      <td className="py-2 px-4 font-mono text-cyan-400">5,000</td>
                      <td className="py-2 px-4 font-mono text-red-400">15,000&ndash;20,000</td>
                      <td className="py-2 px-4 font-mono">240V</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-2 px-4">Window A/C (10,000 BTU)</td>
                      <td className="py-2 px-4 font-mono text-cyan-400">1,200</td>
                      <td className="py-2 px-4 font-mono text-orange-400">3,600</td>
                      <td className="py-2 px-4 font-mono">120V</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-2 px-4">Furnace blower motor</td>
                      <td className="py-2 px-4 font-mono text-cyan-400">500</td>
                      <td className="py-2 px-4 font-mono text-orange-400">1,500</td>
                      <td className="py-2 px-4 font-mono">120V</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-2 px-4">Electric water heater</td>
                      <td className="py-2 px-4 font-mono text-cyan-400">4,500</td>
                      <td className="py-2 px-4 font-mono text-green-400">4,500</td>
                      <td className="py-2 px-4 font-mono">240V</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-2 px-4">Space heater (portable)</td>
                      <td className="py-2 px-4 font-mono text-cyan-400">1,500</td>
                      <td className="py-2 px-4 font-mono text-green-400">1,500</td>
                      <td className="py-2 px-4 font-mono">120V</td>
                    </tr>
                    <tr className="border-b border-white/10 bg-blue-900/10">
                      <td className="py-3 px-4 font-semibold" colSpan={4}><span className="text-blue-400">Pumps &amp; Motors</span></td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-2 px-4">Well pump (1/2 HP)</td>
                      <td className="py-2 px-4 font-mono text-cyan-400">750</td>
                      <td className="py-2 px-4 font-mono text-red-400">2,250</td>
                      <td className="py-2 px-4 font-mono">240V</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-2 px-4">Well pump (1 HP)</td>
                      <td className="py-2 px-4 font-mono text-cyan-400">1,500</td>
                      <td className="py-2 px-4 font-mono text-red-400">4,500</td>
                      <td className="py-2 px-4 font-mono">240V</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-2 px-4">Sump pump (1/3 HP)</td>
                      <td className="py-2 px-4 font-mono text-cyan-400">600</td>
                      <td className="py-2 px-4 font-mono text-orange-400">1,800</td>
                      <td className="py-2 px-4 font-mono">120V</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-2 px-4">Garage door opener</td>
                      <td className="py-2 px-4 font-mono text-cyan-400">550</td>
                      <td className="py-2 px-4 font-mono text-orange-400">1,100</td>
                      <td className="py-2 px-4 font-mono">120V</td>
                    </tr>
                    <tr className="border-b border-white/10 bg-green-900/10">
                      <td className="py-3 px-4 font-semibold" colSpan={4}><span className="text-green-400">Kitchen &amp; Refrigeration</span></td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-2 px-4">Refrigerator</td>
                      <td className="py-2 px-4 font-mono text-cyan-400">400</td>
                      <td className="py-2 px-4 font-mono text-orange-400">1,200</td>
                      <td className="py-2 px-4 font-mono">120V</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-2 px-4">Freezer (upright/chest)</td>
                      <td className="py-2 px-4 font-mono text-cyan-400">350</td>
                      <td className="py-2 px-4 font-mono text-orange-400">1,050</td>
                      <td className="py-2 px-4 font-mono">120V</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-2 px-4">Microwave oven</td>
                      <td className="py-2 px-4 font-mono text-cyan-400">1,000</td>
                      <td className="py-2 px-4 font-mono text-green-400">1,000</td>
                      <td className="py-2 px-4 font-mono">120V</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-2 px-4">Electric range/oven</td>
                      <td className="py-2 px-4 font-mono text-cyan-400">5,000</td>
                      <td className="py-2 px-4 font-mono text-green-400">5,000</td>
                      <td className="py-2 px-4 font-mono">240V</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-2 px-4">Dishwasher</td>
                      <td className="py-2 px-4 font-mono text-cyan-400">1,500</td>
                      <td className="py-2 px-4 font-mono text-green-400">1,500</td>
                      <td className="py-2 px-4 font-mono">120V</td>
                    </tr>
                    <tr className="border-b border-white/10 bg-amber-900/10">
                      <td className="py-3 px-4 font-semibold" colSpan={4}><span className="text-amber-400">Lighting &amp; Electronics</span></td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-2 px-4">LED lighting (whole house)</td>
                      <td className="py-2 px-4 font-mono text-cyan-400">200&ndash;500</td>
                      <td className="py-2 px-4 font-mono text-green-400">200&ndash;500</td>
                      <td className="py-2 px-4 font-mono">120V</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-2 px-4">TV / Entertainment system</td>
                      <td className="py-2 px-4 font-mono text-cyan-400">200&ndash;400</td>
                      <td className="py-2 px-4 font-mono text-green-400">200&ndash;400</td>
                      <td className="py-2 px-4 font-mono">120V</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-2 px-4">Computer / Router / Modem</td>
                      <td className="py-2 px-4 font-mono text-cyan-400">200&ndash;500</td>
                      <td className="py-2 px-4 font-mono text-green-400">200&ndash;500</td>
                      <td className="py-2 px-4 font-mono">120V</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-2 px-4">Security system / Cameras</td>
                      <td className="py-2 px-4 font-mono text-cyan-400">100&ndash;300</td>
                      <td className="py-2 px-4 font-mono text-green-400">100&ndash;300</td>
                      <td className="py-2 px-4 font-mono">120V</td>
                    </tr>
                    <tr className="border-b border-white/10 bg-purple-900/10">
                      <td className="py-3 px-4 font-semibold" colSpan={4}><span className="text-purple-400">Laundry &amp; Large Appliances</span></td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-2 px-4">Electric clothes dryer</td>
                      <td className="py-2 px-4 font-mono text-cyan-400">5,400</td>
                      <td className="py-2 px-4 font-mono text-green-400">5,400</td>
                      <td className="py-2 px-4 font-mono">240V</td>
                    </tr>
                    <tr>
                      <td className="py-2 px-4">Washing machine</td>
                      <td className="py-2 px-4 font-mono text-cyan-400">500</td>
                      <td className="py-2 px-4 font-mono text-orange-400">1,200</td>
                      <td className="py-2 px-4 font-mono">120V</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section id="whole-house-vs-critical" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Sizing for Whole House vs Critical Loads</h2>
              <p className="text-white/80 mb-4">
                One of the biggest decisions in generator sizing is whether to power <strong>everything in the house</strong> or just the <strong>critical circuits</strong> you cannot live without during an outage. This choice dramatically affects generator size, cost, fuel consumption, and installation complexity.
              </p>

              <div className="grid md:grid-cols-2 gap-6 my-6">
                <div className="bg-amber-900/30 rounded-xl p-6 border border-amber-500/20">
                  <h3 className="font-semibold text-amber-400 mb-3">Whole House Generator</h3>
                  <p className="text-white/70 text-sm mb-3">Powers every circuit in the electrical panel.</p>
                  <ul className="text-white/60 text-sm space-y-2">
                    <li><strong>Typical size:</strong> 16&ndash;24 kW for average home</li>
                    <li><strong>Pros:</strong> No load management needed, seamless power</li>
                    <li><strong>Cons:</strong> Higher cost ($5,000&ndash;$15,000+ installed)</li>
                    <li><strong>Fuel use:</strong> Higher &mdash; powers everything at once</li>
                    <li><strong>Transfer switch:</strong> Whole-house automatic transfer switch (ATS)</li>
                    <li><strong>Best for:</strong> Frequent outages, medical needs, home offices</li>
                  </ul>
                </div>
                <div className="bg-cyan-900/30 rounded-xl p-6 border border-cyan-500/20">
                  <h3 className="font-semibold text-cyan-400 mb-3">Critical Loads (Essential Circuits)</h3>
                  <p className="text-white/70 text-sm mb-3">Powers only selected circuits via a load center sub-panel.</p>
                  <ul className="text-white/60 text-sm space-y-2">
                    <li><strong>Typical size:</strong> 7.5&ndash;14 kW for essential circuits</li>
                    <li><strong>Pros:</strong> Lower cost, smaller generator, less fuel</li>
                    <li><strong>Cons:</strong> Must choose which circuits to power</li>
                    <li><strong>Fuel use:</strong> Lower &mdash; only critical loads served</li>
                    <li><strong>Transfer switch:</strong> Load center ATS or manual transfer switch</li>
                    <li><strong>Best for:</strong> Budget-conscious, occasional short outages</li>
                  </ul>
                </div>
              </div>

              <div className="bg-white/5 rounded-xl p-6 my-6">
                <h4 className="font-semibold text-white mb-3">Priority Load Categories</h4>
                <p className="text-white/70 mb-4 text-sm">When sizing for critical loads only, organize loads by priority tier:</p>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <span className="bg-red-600 text-white text-xs font-bold px-2 py-1 rounded">TIER 1</span>
                    <div>
                      <p className="text-white/80 text-sm font-semibold">Life Safety &amp; Health</p>
                      <p className="text-white/60 text-xs">Medical equipment, well pump (for drinking water), refrigerator (medications), security system, sump pump (flood prevention)</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="bg-amber-600 text-white text-xs font-bold px-2 py-1 rounded">TIER 2</span>
                    <div>
                      <p className="text-white/80 text-sm font-semibold">Essential Comfort</p>
                      <p className="text-white/60 text-xs">Heating/cooling (at least one zone), kitchen circuits (refrigerator, microwave, range), lighting (key rooms), internet/communications</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="bg-green-600 text-white text-xs font-bold px-2 py-1 rounded">TIER 3</span>
                    <div>
                      <p className="text-white/80 text-sm font-semibold">Convenience</p>
                      <p className="text-white/60 text-xs">Clothes washer/dryer, dishwasher, additional lighting circuits, entertainment systems, garage door opener</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white/5 rounded-xl p-6 my-6">
                <h4 className="font-semibold text-cyan-400 mb-3">Typical Generator Sizes by Home Size</h4>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-white/20">
                        <th className="text-left py-2 px-3 text-white/60">Home Size</th>
                        <th className="text-left py-2 px-3 text-white/60">Critical Loads Only</th>
                        <th className="text-left py-2 px-3 text-white/60">Whole House</th>
                      </tr>
                    </thead>
                    <tbody className="text-white/80">
                      <tr className="border-b border-white/10">
                        <td className="py-2 px-3">Small (1,000&ndash;1,500 sq ft)</td>
                        <td className="py-2 px-3 font-mono text-cyan-400">7.5&ndash;10 kW</td>
                        <td className="py-2 px-3 font-mono text-amber-400">14&ndash;16 kW</td>
                      </tr>
                      <tr className="border-b border-white/10">
                        <td className="py-2 px-3">Medium (1,500&ndash;2,500 sq ft)</td>
                        <td className="py-2 px-3 font-mono text-cyan-400">10&ndash;14 kW</td>
                        <td className="py-2 px-3 font-mono text-amber-400">16&ndash;22 kW</td>
                      </tr>
                      <tr className="border-b border-white/10">
                        <td className="py-2 px-3">Large (2,500&ndash;4,000 sq ft)</td>
                        <td className="py-2 px-3 font-mono text-cyan-400">14&ndash;18 kW</td>
                        <td className="py-2 px-3 font-mono text-amber-400">22&ndash;30 kW</td>
                      </tr>
                      <tr>
                        <td className="py-2 px-3">Very Large (4,000+ sq ft)</td>
                        <td className="py-2 px-3 font-mono text-cyan-400">18&ndash;24 kW</td>
                        <td className="py-2 px-3 font-mono text-amber-400">30&ndash;48 kW</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="text-white/60 text-sm mt-2">These are rough guidelines. Actual sizing depends on installed equipment, climate zone, and whether you have electric or gas heating, cooking, and water heating.</p>
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

            <section id="standby-vs-portable" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Standby vs Portable Generator Sizing</h2>
              <p className="text-white/80 mb-4">
                The choice between a <strong>standby (permanent)</strong> generator and a <strong>portable</strong> generator affects not only sizing but also installation requirements, code compliance, and overall reliability. For details on transfer switch requirements, see our <Link href="/blog/generator-transfer-switch-installation" className="text-cyan-400 hover:underline">generator transfer switch installation guide</Link>.
              </p>

              <div className="grid md:grid-cols-2 gap-6 my-6">
                <div className="bg-white/5 rounded-xl p-6 border border-amber-500/20">
                  <h3 className="font-semibold text-amber-400 mb-3">Standby Generator (Permanent)</h3>
                  <ul className="text-white/60 text-sm space-y-2">
                    <li><strong>Size range:</strong> 7.5 kW to 150+ kW</li>
                    <li><strong>Fuel:</strong> Natural gas, propane (LP), or diesel</li>
                    <li><strong>Startup:</strong> Automatic &mdash; starts within 10&ndash;30 seconds of outage</li>
                    <li><strong>Transfer switch:</strong> Automatic transfer switch (ATS) included or required</li>
                    <li><strong>Installation:</strong> Permanent pad, fuel connection, code-compliant wiring</li>
                    <li><strong>NEC compliance:</strong> Must meet NEC Article 702 (Optional Standby) or Article 701 (Legally Required Standby)</li>
                    <li><strong>Runtime:</strong> Limited only by fuel supply</li>
                    <li><strong>Cost:</strong> $3,000&ndash;$15,000+ installed</li>
                  </ul>
                </div>
                <div className="bg-white/5 rounded-xl p-6 border border-cyan-500/20">
                  <h3 className="font-semibold text-cyan-400 mb-3">Portable Generator</h3>
                  <ul className="text-white/60 text-sm space-y-2">
                    <li><strong>Size range:</strong> 1 kW to 17.5 kW</li>
                    <li><strong>Fuel:</strong> Gasoline, dual-fuel (gas + propane)</li>
                    <li><strong>Startup:</strong> Manual &mdash; pull-start or electric start, must be set up</li>
                    <li><strong>Transfer switch:</strong> Manual transfer switch or inlet box recommended</li>
                    <li><strong>Installation:</strong> Must be placed outdoors, 20+ ft from structure</li>
                    <li><strong>NEC compliance:</strong> Must not be backfed into panel without transfer switch</li>
                    <li><strong>Runtime:</strong> 8&ndash;16 hours per tank (varies by load)</li>
                    <li><strong>Cost:</strong> $500&ndash;$3,000 (plus transfer switch)</li>
                  </ul>
                </div>
              </div>

              <div className="bg-red-900/30 rounded-xl p-6 my-6">
                <h4 className="font-semibold text-red-400 mb-3">Never Backfeed a Generator</h4>
                <p className="text-white/70">
                  Connecting a portable generator to a panel without a transfer switch (backfeeding) is <strong>illegal per NEC 702.6</strong> and <strong>extremely dangerous</strong>. Backfeeding energizes the utility lines outside your home, creating a lethal shock hazard for utility workers and neighbors. It can also damage the generator when utility power is restored. Always use a transfer switch or interlock kit.
                </p>
              </div>

              <div className="bg-white/5 rounded-xl p-6 my-6">
                <h4 className="font-semibold text-white mb-3">Portable Generator Sizing Quick Guide</h4>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-white/20">
                        <th className="text-left py-2 px-3 text-white/60">Generator Size</th>
                        <th className="text-left py-2 px-3 text-white/60">Can Power</th>
                      </tr>
                    </thead>
                    <tbody className="text-white/80">
                      <tr className="border-b border-white/10">
                        <td className="py-2 px-3 font-mono text-amber-400">3,000&ndash;4,000W</td>
                        <td className="py-2 px-3 text-white/60">Fridge, lights, phone chargers, sump pump (basic essentials)</td>
                      </tr>
                      <tr className="border-b border-white/10">
                        <td className="py-2 px-3 font-mono text-amber-400">5,000&ndash;7,500W</td>
                        <td className="py-2 px-3 text-white/60">Above + well pump, window A/C, microwave, TV</td>
                      </tr>
                      <tr className="border-b border-white/10">
                        <td className="py-2 px-3 font-mono text-amber-400">7,500&ndash;10,000W</td>
                        <td className="py-2 px-3 text-white/60">Above + furnace blower, multiple circuits, small electric water heater</td>
                      </tr>
                      <tr>
                        <td className="py-2 px-3 font-mono text-amber-400">10,000&ndash;17,500W</td>
                        <td className="py-2 px-3 text-white/60">Most home circuits except central A/C and electric range simultaneously</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </section>

            <section id="single-vs-three-phase" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Single-Phase vs Three-Phase Generators</h2>
              <p className="text-white/80 mb-4">
                Most residential generators are <strong>single-phase</strong>, while commercial and industrial applications often require <strong>three-phase</strong> power. Selecting the wrong phase configuration is a costly mistake. For a detailed explanation of three-phase systems, see our <Link href="/blog/3-phase-power-calculations" className="text-cyan-400 hover:underline">three-phase power calculations guide</Link>.
              </p>

              <div className="grid md:grid-cols-2 gap-6 my-6">
                <div className="bg-white/5 rounded-xl p-6">
                  <h3 className="font-semibold text-cyan-400 mb-3">Single-Phase (1&Phi;)</h3>
                  <ul className="text-white/70 text-sm space-y-1">
                    <li><strong>Voltages:</strong> 120V, 120/240V</li>
                    <li><strong>Typical sizes:</strong> Up to 25&ndash;48 kW</li>
                    <li><strong>Applications:</strong> Residential, small commercial</li>
                    <li><strong>Service type:</strong> Matches standard residential 200A panels</li>
                    <li><strong>Motors:</strong> Single-phase motors only</li>
                    <li><strong>Cost:</strong> Lower purchase and installation cost</li>
                  </ul>
                </div>
                <div className="bg-white/5 rounded-xl p-6">
                  <h3 className="font-semibold text-purple-400 mb-3">Three-Phase (3&Phi;)</h3>
                  <ul className="text-white/70 text-sm space-y-1">
                    <li><strong>Voltages:</strong> 208V, 480V, 208/120V, 480/277V</li>
                    <li><strong>Typical sizes:</strong> 15 kW to 2,000+ kW</li>
                    <li><strong>Applications:</strong> Commercial, industrial, data centers</li>
                    <li><strong>Service type:</strong> Matches 3-phase commercial panels</li>
                    <li><strong>Motors:</strong> Can power 3-phase and single-phase motors</li>
                    <li><strong>Cost:</strong> Higher, but more efficient for large loads</li>
                  </ul>
                </div>
              </div>

              <div className="bg-amber-900/30 rounded-xl p-6 my-6">
                <h4 className="font-semibold text-amber-400 mb-3">Phase Matching Is Critical</h4>
                <p className="text-white/70">
                  The generator phase configuration <strong>must match your electrical service</strong>. A single-phase generator cannot power three-phase equipment, and connecting a three-phase generator to a single-phase panel wastes one-third of its capacity. For commercial buildings with three-phase service, you must use a three-phase generator even if some loads are single-phase.
                </p>
              </div>

              <div className="bg-white/5 rounded-xl p-6 my-6">
                <h4 className="font-semibold text-white mb-3">Three-Phase Sizing Difference</h4>
                <p className="text-white/70 mb-3 text-sm">
                  Three-phase generator sizing uses a different formula than single-phase:
                </p>
                <div className="space-y-3">
                  <div className="bg-black/40 rounded-lg p-4 font-mono text-sm">
                    <span className="text-white/60">Single-phase: </span><span className="text-cyan-400">kW = Volts &times; Amps &divide; 1,000</span>
                  </div>
                  <div className="bg-black/40 rounded-lg p-4 font-mono text-sm">
                    <span className="text-white/60">Three-phase: </span><span className="text-purple-400">kW = Volts &times; Amps &times; 1.732 &times; PF &divide; 1,000</span>
                  </div>
                </div>
                <p className="text-white/60 text-sm mt-3">
                  The 1.732 factor (&radic;3) accounts for the phase relationship in three-phase systems. When sizing three-phase generators, ensure loads are balanced across all three phases &mdash; any significant imbalance reduces effective capacity.
                </p>
              </div>
            </section>

            <section id="transfer-switch" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Transfer Switch Compatibility</h2>
              <p className="text-white/80 mb-4">
                The transfer switch is the connection point between the generator and your electrical system. It must be properly sized and matched to both the generator and the electrical service to ensure safe, code-compliant operation.
              </p>

              <div className="space-y-4 my-6">
                <div className="bg-white/5 rounded-xl p-6 border-l-4 border-amber-500">
                  <h4 className="font-semibold text-amber-400 mb-2">Transfer Switch Amperage Rating</h4>
                  <p className="text-white/70 text-sm">
                    The transfer switch must be rated for the <strong>full amperage of the electrical service</strong> (not just the generator output) if it is a whole-house type. For a 200-amp service, you need a 200-amp transfer switch. For critical-load panels, the switch can match the sub-panel rating. A 22 kW generator at 240V produces about 92 amps, but the transfer switch still needs to handle the full service amperage for code compliance. For more on service upgrades, see our <Link href="/blog/electrical-service-upgrade-200-amp" className="text-cyan-400 hover:underline">200-amp service upgrade guide</Link>.
                  </p>
                </div>

                <div className="bg-white/5 rounded-xl p-6 border-l-4 border-amber-500">
                  <h4 className="font-semibold text-amber-400 mb-2">Automatic vs Manual Transfer Switches</h4>
                  <p className="text-white/70 text-sm">
                    <strong>Automatic Transfer Switches (ATS)</strong> detect utility power loss and automatically start the generator and transfer loads. They also retransfer to utility and cool down the generator when power is restored. <strong>Manual Transfer Switches (MTS)</strong> require someone to physically switch the load source. ATS is standard with standby generators; MTS is typical with portable generators.
                  </p>
                </div>

                <div className="bg-white/5 rounded-xl p-6 border-l-4 border-amber-500">
                  <h4 className="font-semibold text-amber-400 mb-2">Load Management Systems</h4>
                  <p className="text-white/70 text-sm">
                    Advanced transfer switches include <strong>load management</strong> (also called load shedding or smart load control). These systems prioritize loads and shed lower-priority circuits when demand exceeds generator capacity. This allows a smaller generator to serve a whole-house panel by preventing all heavy loads from running simultaneously. For example, the system might delay the water heater when the A/C compressor is running.
                  </p>
                </div>
              </div>

              <div className="bg-white/5 rounded-xl p-6 my-6">
                <h4 className="font-semibold text-white mb-3">Transfer Switch Sizing Quick Reference</h4>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-white/20">
                        <th className="text-left py-2 px-3 text-white/60">Electrical Service</th>
                        <th className="text-left py-2 px-3 text-white/60">Whole-House ATS</th>
                        <th className="text-left py-2 px-3 text-white/60">Critical Load ATS</th>
                        <th className="text-left py-2 px-3 text-white/60">Manual TS</th>
                      </tr>
                    </thead>
                    <tbody className="text-white/80">
                      <tr className="border-b border-white/10">
                        <td className="py-2 px-3">100A Service</td>
                        <td className="py-2 px-3 font-mono text-amber-400">100A</td>
                        <td className="py-2 px-3 font-mono text-cyan-400">50&ndash;100A</td>
                        <td className="py-2 px-3 font-mono text-green-400">30&ndash;50A</td>
                      </tr>
                      <tr className="border-b border-white/10">
                        <td className="py-2 px-3">200A Service</td>
                        <td className="py-2 px-3 font-mono text-amber-400">200A</td>
                        <td className="py-2 px-3 font-mono text-cyan-400">100&ndash;200A</td>
                        <td className="py-2 px-3 font-mono text-green-400">30&ndash;60A</td>
                      </tr>
                      <tr>
                        <td className="py-2 px-3">400A Service</td>
                        <td className="py-2 px-3 font-mono text-amber-400">400A</td>
                        <td className="py-2 px-3 font-mono text-cyan-400">200&ndash;400A</td>
                        <td className="py-2 px-3 font-mono text-green-400">60&ndash;100A</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </section>

            <section id="fuel-considerations" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Fuel Type Considerations</h2>
              <p className="text-white/80 mb-4">
                The fuel type affects generator sizing because different fuels produce different power output per unit volume, and some generators are de-rated when running on certain fuels. The four common generator fuel types each have distinct advantages and limitations.
              </p>

              <div className="grid md:grid-cols-2 gap-4 my-6">
                <div className="bg-white/5 rounded-xl p-6 border border-amber-500/20">
                  <h4 className="font-semibold text-amber-400 mb-3">Natural Gas (NG)</h4>
                  <ul className="text-white/60 text-sm space-y-1">
                    <li><strong>Availability:</strong> Unlimited supply via utility pipeline</li>
                    <li><strong>Output:</strong> ~90% of rated kW (slight de-rate vs LP)</li>
                    <li><strong>Runtime:</strong> Unlimited (piped supply)</li>
                    <li><strong>Fuel storage:</strong> None needed</li>
                    <li><strong>Best for:</strong> Homes with existing gas service</li>
                    <li><strong>Note:</strong> Requires adequate gas line sizing (typically 3/4&rdquo; or 1&rdquo; line for standby generators)</li>
                  </ul>
                </div>
                <div className="bg-white/5 rounded-xl p-6 border border-cyan-500/20">
                  <h4 className="font-semibold text-cyan-400 mb-3">Propane / LP Gas</h4>
                  <ul className="text-white/60 text-sm space-y-1">
                    <li><strong>Availability:</strong> Delivered by tank truck</li>
                    <li><strong>Output:</strong> ~95% of rated kW</li>
                    <li><strong>Runtime:</strong> Depends on tank size (500-gal typical)</li>
                    <li><strong>Fuel storage:</strong> Above-ground or underground tank required</li>
                    <li><strong>Best for:</strong> Rural areas without natural gas</li>
                    <li><strong>Note:</strong> A 500-gallon tank provides ~7&ndash;10 days of runtime at 50% load for a 22 kW generator</li>
                  </ul>
                </div>
                <div className="bg-white/5 rounded-xl p-6 border border-green-500/20">
                  <h4 className="font-semibold text-green-400 mb-3">Diesel</h4>
                  <ul className="text-white/60 text-sm space-y-1">
                    <li><strong>Availability:</strong> Fuel delivery or filling station</li>
                    <li><strong>Output:</strong> 100% of rated kW (most efficient)</li>
                    <li><strong>Runtime:</strong> Depends on tank size</li>
                    <li><strong>Fuel storage:</strong> On-site tank (code requirements apply)</li>
                    <li><strong>Best for:</strong> Commercial, industrial, long-duration outages</li>
                    <li><strong>Note:</strong> Most fuel-efficient option; requires periodic exercising to prevent fuel degradation</li>
                  </ul>
                </div>
                <div className="bg-white/5 rounded-xl p-6 border border-red-500/20">
                  <h4 className="font-semibold text-red-400 mb-3">Gasoline</h4>
                  <ul className="text-white/60 text-sm space-y-1">
                    <li><strong>Availability:</strong> Gas stations (may be closed during emergencies)</li>
                    <li><strong>Output:</strong> 100% of rated watts (portable generators)</li>
                    <li><strong>Runtime:</strong> 8&ndash;16 hours per tank</li>
                    <li><strong>Fuel storage:</strong> Approved safety containers (limited to ~25 gal at home)</li>
                    <li><strong>Best for:</strong> Portable generators, short-term outages</li>
                    <li><strong>Note:</strong> Shortest shelf life; goes stale in 3&ndash;6 months without stabilizer</li>
                  </ul>
                </div>
              </div>

              <div className="bg-amber-900/30 rounded-xl p-6 my-6">
                <h4 className="font-semibold text-amber-400 mb-3">Fuel De-Rating Important for Sizing</h4>
                <p className="text-white/70">
                  Many standby generators are rated at their maximum output on LP gas. When connected to natural gas, they may produce <strong>10&ndash;15% less power</strong> because natural gas has a lower BTU content per cubic foot than propane. A generator rated at 22 kW on LP may only produce 20 kW on natural gas. Always check the manufacturer&apos;s specifications for <strong>both fuel types</strong> and size based on the fuel you will actually use.
                </p>
              </div>
            </section>

            <section id="sizing-example" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Step-by-Step Sizing Example</h2>
              <p className="text-white/80 mb-4">
                Let&apos;s walk through a complete generator sizing calculation for a typical 2,200 sq ft home with a 200-amp service. The homeowner wants to power critical loads plus A/C during an outage using a natural gas standby generator.
              </p>

              <div className="bg-white/5 rounded-xl p-6 my-6 border-l-4 border-cyan-500">
                <h4 className="font-semibold text-cyan-400 mb-3">Step 1: List the Loads</h4>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-white/20">
                        <th className="text-left py-2 px-3 text-white/60">Load</th>
                        <th className="text-right py-2 px-3 text-white/60">Running W</th>
                        <th className="text-right py-2 px-3 text-white/60">Starting W</th>
                      </tr>
                    </thead>
                    <tbody className="text-white/80">
                      <tr className="border-b border-white/10">
                        <td className="py-2 px-3">Central A/C (3 ton)</td>
                        <td className="py-2 px-3 text-right font-mono">3,500</td>
                        <td className="py-2 px-3 text-right font-mono text-red-400">10,500</td>
                      </tr>
                      <tr className="border-b border-white/10">
                        <td className="py-2 px-3">Well pump (3/4 HP)</td>
                        <td className="py-2 px-3 text-right font-mono">1,000</td>
                        <td className="py-2 px-3 text-right font-mono text-red-400">3,000</td>
                      </tr>
                      <tr className="border-b border-white/10">
                        <td className="py-2 px-3">Refrigerator</td>
                        <td className="py-2 px-3 text-right font-mono">400</td>
                        <td className="py-2 px-3 text-right font-mono text-orange-400">1,200</td>
                      </tr>
                      <tr className="border-b border-white/10">
                        <td className="py-2 px-3">Freezer (chest)</td>
                        <td className="py-2 px-3 text-right font-mono">350</td>
                        <td className="py-2 px-3 text-right font-mono text-orange-400">1,050</td>
                      </tr>
                      <tr className="border-b border-white/10">
                        <td className="py-2 px-3">Sump pump (1/3 HP)</td>
                        <td className="py-2 px-3 text-right font-mono">600</td>
                        <td className="py-2 px-3 text-right font-mono text-orange-400">1,800</td>
                      </tr>
                      <tr className="border-b border-white/10">
                        <td className="py-2 px-3">Furnace blower</td>
                        <td className="py-2 px-3 text-right font-mono">500</td>
                        <td className="py-2 px-3 text-right font-mono text-orange-400">1,500</td>
                      </tr>
                      <tr className="border-b border-white/10">
                        <td className="py-2 px-3">LED lighting (whole house)</td>
                        <td className="py-2 px-3 text-right font-mono">400</td>
                        <td className="py-2 px-3 text-right font-mono text-green-400">400</td>
                      </tr>
                      <tr className="border-b border-white/10">
                        <td className="py-2 px-3">Microwave</td>
                        <td className="py-2 px-3 text-right font-mono">1,000</td>
                        <td className="py-2 px-3 text-right font-mono text-green-400">1,000</td>
                      </tr>
                      <tr className="border-b border-white/10">
                        <td className="py-2 px-3">TV + Internet/Router</td>
                        <td className="py-2 px-3 text-right font-mono">350</td>
                        <td className="py-2 px-3 text-right font-mono text-green-400">350</td>
                      </tr>
                      <tr className="border-b border-white/10">
                        <td className="py-2 px-3">Garage door opener</td>
                        <td className="py-2 px-3 text-right font-mono">550</td>
                        <td className="py-2 px-3 text-right font-mono text-orange-400">1,100</td>
                      </tr>
                      <tr className="border-b border-white/10">
                        <td className="py-2 px-3">Security system</td>
                        <td className="py-2 px-3 text-right font-mono">200</td>
                        <td className="py-2 px-3 text-right font-mono text-green-400">200</td>
                      </tr>
                      <tr className="border-b border-white/20 font-bold">
                        <td className="py-3 px-3 text-amber-400">TOTALS</td>
                        <td className="py-3 px-3 text-right font-mono text-amber-400">8,850</td>
                        <td className="py-3 px-3 text-right font-mono text-red-400">&mdash;</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="bg-white/5 rounded-xl p-6 my-6 border-l-4 border-amber-500">
                <h4 className="font-semibold text-amber-400 mb-3">Step 2: Calculate Peak Demand</h4>
                <p className="text-white/70 mb-3">
                  The largest single starting surge is the central A/C at 10,500W. The additional starting watts above running watts is:
                </p>
                <div className="bg-black/40 rounded-lg p-4 font-mono text-sm mb-3">
                  <p className="text-white/60">A/C starting surge above running = <span className="text-red-400">10,500</span> - <span className="text-cyan-400">3,500</span> = <span className="text-amber-400">7,000W</span></p>
                </div>
                <p className="text-white/70 mb-3">
                  Peak demand = Total running watts + Largest starting surge above running:
                </p>
                <div className="bg-black/40 rounded-lg p-4 font-mono text-sm">
                  <p className="text-white/60">Peak Demand = <span className="text-cyan-400">8,850</span> + <span className="text-amber-400">7,000</span> = <span className="text-red-400 font-bold">15,850W (15.85 kW)</span></p>
                </div>
              </div>

              <div className="bg-white/5 rounded-xl p-6 my-6 border-l-4 border-green-500">
                <h4 className="font-semibold text-green-400 mb-3">Step 3: Apply Safety Margin and Select Generator</h4>
                <p className="text-white/70 mb-3">
                  Applying a 25% safety margin (sizing for 75% load):
                </p>
                <div className="bg-black/40 rounded-lg p-4 font-mono text-sm mb-3">
                  <p className="text-white/60">Minimum generator = <span className="text-red-400">15,850</span> &divide; <span className="text-cyan-400">0.75</span> = <span className="text-green-400 font-bold">21,133W &asymp; 22 kW</span></p>
                </div>
                <p className="text-white/70 mb-3">
                  Since this will run on natural gas (10% de-rate), we need to account for the fuel de-rating:
                </p>
                <div className="bg-black/40 rounded-lg p-4 font-mono text-sm mb-3">
                  <p className="text-white/60">NG-adjusted minimum = <span className="text-green-400">22 kW</span> &divide; <span className="text-cyan-400">0.90</span> = <span className="text-amber-400 font-bold">24.4 kW</span></p>
                </div>
              </div>

              <div className="bg-green-900/30 rounded-xl p-6 my-6 border border-green-500/30">
                <h4 className="font-semibold text-green-400 mb-3">Result: Recommended Generator Size</h4>
                <p className="text-white/70 mb-3">
                  For this 2,200 sq ft home with a 3-ton central A/C and the listed critical loads:
                </p>
                <div className="grid md:grid-cols-3 gap-4 text-center">
                  <div>
                    <p className="text-3xl font-bold text-cyan-400">8.85 kW</p>
                    <p className="text-white/60 text-sm">Total Running Load</p>
                  </div>
                  <div>
                    <p className="text-3xl font-bold text-amber-400">15.85 kW</p>
                    <p className="text-white/60 text-sm">Peak Starting Demand</p>
                  </div>
                  <div>
                    <p className="text-3xl font-bold text-green-400">24 kW</p>
                    <p className="text-white/60 text-sm">Recommended Generator (NG)</p>
                  </div>
                </div>
                <p className="text-white/60 text-sm mt-4">
                  A <strong>24 kW standby generator on natural gas</strong> (or a 22 kW on LP) with a 200-amp automatic transfer switch would comfortably handle these loads with room for additional circuits. Common manufacturer options at this size include the Generac Guardian 24kW, Kohler 24RCAL, and Briggs &amp; Stratton 24kW.
                </p>
              </div>

              <div className="bg-purple-900/30 rounded-xl p-6 my-6">
                <h4 className="font-semibold text-purple-400 mb-3">Alternative: Smaller Generator with Load Management</h4>
                <p className="text-white/70">
                  If the homeowner wanted to reduce cost, a <strong>16&ndash;18 kW generator with a load management module</strong> could work. The load management system would prevent the A/C from starting while the well pump or electric water heater is running. This approach costs less upfront and uses less fuel, but requires the load management system to be properly configured and means some loads may be temporarily delayed during peak demand periods.
                </p>
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
                <Link href="/blog/emergency-standby-power-systems" className="bg-white/5 hover:bg-white/10 rounded-xl p-6 transition-colors">
                  <span className="text-amber-400 text-sm">Calculations</span>
                  <h3 className="font-semibold mt-2">Emergency & Standby Power Systems Guide</h3>
                </Link>
                <Link href="/blog/generator-transfer-switch-installation" className="bg-white/5 hover:bg-white/10 rounded-xl p-6 transition-colors">
                  <span className="text-green-400 text-sm">Installation</span>
                  <h3 className="font-semibold mt-2">Generator Transfer Switch Installation Guide</h3>
                </Link>
                <Link href="/blog/residential-load-calculations" className="bg-white/5 hover:bg-white/10 rounded-xl p-6 transition-colors">
                  <span className="text-blue-400 text-sm">Calculations</span>
                  <h3 className="font-semibold mt-2">Residential Electrical Load Calculations</h3>
                </Link>
                <Link href="/blog/electrical-service-upgrade-200-amp" className="bg-white/5 hover:bg-white/10 rounded-xl p-6 transition-colors">
                  <span className="text-purple-400 text-sm">Installation</span>
                  <h3 className="font-semibold mt-2">200-Amp Electrical Service Upgrade Guide</h3>
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
