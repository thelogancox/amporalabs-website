import { Metadata } from "next";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import { BreadcrumbJsonLd, BlogPostingJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Conductor Derating Factors: Temperature & Conduit Fill Guide for Electricians",
  description: "Complete guide to conductor derating factors per NEC. Learn temperature correction, conduit fill adjustment, and how to use NEC Table 310.15 for proper ampacity calculations.",
  keywords: [
    "conductor derating",
    "ampacity derating",
    "NEC Table 310.15",
    "temperature correction factor",
    "conduit fill derating",
    "ampacity adjustment",
    "wire ampacity calculation",
    "ambient temperature correction",
    "conductor ampacity",
    "NEC ampacity tables",
    "derating factors electrical",
    "310.15(B)(3)(a)",
    "310.15(B)(2)",
    "current-carrying conductors"
  ],
  alternates: {
    canonical: "https://amporalabs.com/blog/derating-factors-conductor-ampacity",
  },
  openGraph: {
    title: "Conductor Derating Factors: Complete NEC Guide - Ampora",
    description: "Master conductor derating for temperature and conduit fill. NEC Table 310.15 explained with examples.",
    url: "https://amporalabs.com/blog/derating-factors-conductor-ampacity",
    type: "article",
  },
};

function HeroIllustration() {
  return (
    <svg viewBox="0 0 400 160" className="w-full h-40 md:h-48" aria-label="Conductor derating factors illustration">
      {/* Base ampacity bar */}
      <g transform="translate(30, 25)">
        <rect x="0" y="0" width="340" height="25" rx="4" fill="#22c55e" fillOpacity="0.3" stroke="#22c55e" strokeWidth="2"/>
        <text x="170" y="17" textAnchor="middle" fill="#22c55e" fontSize="10" fontWeight="bold">BASE AMPACITY: 100A</text>
      </g>

      {/* Temperature correction */}
      <g transform="translate(30, 60)">
        <rect x="0" y="0" width="280" height="25" rx="4" fill="#eab308" fillOpacity="0.3" stroke="#eab308" strokeWidth="2"/>
        <text x="140" y="17" textAnchor="middle" fill="#eab308" fontSize="10" fontWeight="bold">TEMP CORRECTED: 82A (0.82 factor)</text>
        {/* Thermometer icon */}
        <g transform="translate(-25, 3)">
          <rect x="5" y="0" width="6" height="15" rx="3" fill="none" stroke="#eab308" strokeWidth="1.5"/>
          <circle cx="8" cy="18" r="5" fill="none" stroke="#eab308" strokeWidth="1.5"/>
          <rect x="6" y="6" width="4" height="12" fill="#ef4444"/>
        </g>
      </g>

      {/* Conduit fill adjustment */}
      <g transform="translate(30, 95)">
        <rect x="0" y="0" width="220" height="25" rx="4" fill="#f97316" fillOpacity="0.3" stroke="#f97316" strokeWidth="2"/>
        <text x="110" y="17" textAnchor="middle" fill="#f97316" fontSize="10" fontWeight="bold">FILL ADJUSTED: 66A (0.80 factor)</text>
        {/* Conduit icon */}
        <g transform="translate(-25, 5)">
          <ellipse cx="10" cy="8" rx="8" ry="6" fill="none" stroke="#f97316" strokeWidth="1.5"/>
          <circle cx="6" cy="6" r="2" fill="#f97316"/>
          <circle cx="14" cy="6" r="2" fill="#f97316"/>
          <circle cx="6" cy="10" r="2" fill="#f97316"/>
          <circle cx="14" cy="10" r="2" fill="#f97316"/>
          <circle cx="10" cy="8" r="2" fill="#f97316"/>
        </g>
      </g>

      {/* Final ampacity */}
      <g transform="translate(30, 130)">
        <rect x="0" y="0" width="180" height="25" rx="4" fill="#ef4444" fillOpacity="0.3" stroke="#ef4444" strokeWidth="2"/>
        <text x="90" y="17" textAnchor="middle" fill="#ef4444" fontSize="10" fontWeight="bold">FINAL AMPACITY: 66A</text>
      </g>

      {/* Arrows showing reduction */}
      <g stroke="#6b7280" strokeWidth="1.5" fill="none">
        <path d="M 320 37 L 320 60" markerEnd="url(#arrowhead)"/>
        <path d="M 260 85 L 260 95" markerEnd="url(#arrowhead)"/>
        <path d="M 200 120 L 200 130" markerEnd="url(#arrowhead)"/>
      </g>

      {/* Factor labels on right */}
      <g transform="translate(330, 55)">
        <text x="0" y="0" fill="#eab308" fontSize="8">x 0.82</text>
      </g>
      <g transform="translate(270, 90)">
        <text x="0" y="0" fill="#f97316" fontSize="8">x 0.80</text>
      </g>

      <defs>
        <marker id="arrowhead" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
          <path d="M0,0 L6,3 L0,6 Z" fill="#6b7280"/>
        </marker>
      </defs>
    </svg>
  );
}

export default function DeratingFactorsPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navigation />
      <div className="pt-20">
        <BreadcrumbJsonLd
          items={[
            { name: "Home", url: "https://amporalabs.com" },
            { name: "Blog", url: "https://amporalabs.com/blog" },
            { name: "Derating Factors", url: "https://amporalabs.com/blog/derating-factors-conductor-ampacity" },
          ]}
        />
        <BlogPostingJsonLd
          headline="Conductor Derating Factors: Temperature & Conduit Fill Guide for Electricians"
          description="Complete guide to conductor derating factors per NEC including temperature correction and conduit fill adjustment."
          datePublished="2025-01-11"
          dateModified="2025-01-11"
          url="https://amporalabs.com/blog/derating-factors-conductor-ampacity"
          wordCount={2800}
          keywords={["conductor derating", "ampacity derating", "NEC Table 310.15", "temperature correction"]}
        />

        <article className="max-w-4xl mx-auto px-6 py-12">
          {/* Breadcrumb */}
          <nav className="text-sm text-white/60 mb-8">
            <Link href="/" className="hover:text-white">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/blog" className="hover:text-white">Blog</Link>
            <span className="mx-2">/</span>
            <span className="text-white">Derating Factors</span>
          </nav>

          {/* Article Header */}
          <header className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <span className="px-3 py-1 bg-cyan-600/30 text-cyan-300 text-sm font-medium rounded-full">
                Calculations
              </span>
              <span className="text-white/40 text-sm">12 min read</span>
              <span className="text-white/40 text-sm">January 11, 2025</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6 leading-tight">
              Conductor Derating Factors: Complete Temperature & Conduit Fill Guide
            </h1>
            <p className="text-xl text-white/70">
              Understanding when and how to apply derating factors is essential for proper conductor sizing. Learn temperature correction, conduit fill adjustment, and how to use NEC Table 310.15 correctly.
            </p>
          </header>

          <div className="mb-12 bg-gradient-to-br from-green-900/20 to-orange-900/20 rounded-2xl p-6 border border-white/10">
            <HeroIllustration />
          </div>

          {/* Quick Reference Box */}
          <div className="bg-purple-900/30 border border-purple-500/30 rounded-2xl p-6 mb-12">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div>
                <h3 className="font-display font-bold text-lg mb-1">Calculate Derating Instantly</h3>
                <p className="text-white/70 text-sm">Use our wire sizing calculator with automatic derating based on conditions.</p>
              </div>
              <Link
                href="/calculators/wire-sizing"
                className="px-6 py-3 bg-purple-600 text-white font-semibold rounded-full hover:bg-purple-500 transition-colors whitespace-nowrap"
              >
                Wire Sizing Calculator
              </Link>
            </div>
          </div>

          {/* Table of Contents */}
          <div className="bg-white/5 rounded-2xl p-6 mb-12">
            <h2 className="font-display font-bold mb-4">In This Guide</h2>
            <ul className="space-y-2 text-white/70">
              <li><a href="#what-is-derating" className="hover:text-purple-400">What is Conductor Derating?</a></li>
              <li><a href="#temperature-correction" className="hover:text-purple-400">Temperature Correction Factors</a></li>
              <li><a href="#conduit-fill" className="hover:text-purple-400">Conduit Fill Adjustment Factors</a></li>
              <li><a href="#applying-factors" className="hover:text-purple-400">How to Apply Multiple Factors</a></li>
              <li><a href="#table-310-15" className="hover:text-purple-400">Using NEC Table 310.15</a></li>
              <li><a href="#examples" className="hover:text-purple-400">Calculation Examples</a></li>
              <li><a href="#exceptions" className="hover:text-purple-400">Exceptions and Special Cases</a></li>
              <li><a href="#common-mistakes" className="hover:text-purple-400">Common Mistakes</a></li>
            </ul>
          </div>

          {/* Article Content */}
          <div className="prose prose-invert prose-lg max-w-none">

            <section id="what-is-derating" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">What is Conductor Derating?</h2>
              <p className="text-white/80 mb-4">
                <strong>Derating</strong> (also called ampacity adjustment) is the process of reducing the allowable current-carrying capacity of a conductor based on installation conditions. The base ampacity values in NEC Table 310.16 assume specific conditions - when actual conditions differ, adjustments must be made.
              </p>
              <p className="text-white/80 mb-4">
                NEC Table 310.16 base ampacities assume:
              </p>
              <ul className="list-disc list-inside text-white/70 space-y-2 mb-4">
                <li>Ambient temperature of 30 degrees C (86 degrees F)</li>
                <li>No more than 3 current-carrying conductors in a raceway</li>
                <li>Conductors operating at their temperature rating</li>
              </ul>
              <p className="text-white/80">
                When conditions differ from these assumptions, the ampacity must be reduced to prevent conductor overheating and insulation damage.
              </p>
            </section>

            <section id="temperature-correction" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Temperature Correction Factors</h2>
              <p className="text-white/80 mb-4">
                When ambient temperature exceeds 30 degrees C (86 degrees F), conductor ampacity must be reduced per <strong>NEC 310.15(B)(2)</strong>. Higher ambient temperatures mean the conductor can dissipate less heat, requiring reduced current to prevent overheating.
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-3">Temperature Correction Factor Table</h3>
              <p className="text-white/80 mb-4">
                Use NEC Table 310.15(B)(1) to find the correction factor based on ambient temperature and conductor insulation rating:
              </p>

              <div className="overflow-x-auto my-6">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-white/20">
                      <th className="text-left py-3 px-4 text-white/60">Ambient Temp (C)</th>
                      <th className="text-left py-3 px-4 text-white/60">Ambient Temp (F)</th>
                      <th className="text-left py-3 px-4 text-white/60">60C Insulation</th>
                      <th className="text-left py-3 px-4 text-white/60">75C Insulation</th>
                      <th className="text-left py-3 px-4 text-white/60">90C Insulation</th>
                    </tr>
                  </thead>
                  <tbody className="text-white/80">
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">21-25</td>
                      <td className="py-3 px-4">70-77</td>
                      <td className="py-3 px-4 font-mono text-green-400">1.08</td>
                      <td className="py-3 px-4 font-mono text-green-400">1.05</td>
                      <td className="py-3 px-4 font-mono text-green-400">1.04</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">26-30</td>
                      <td className="py-3 px-4">79-86</td>
                      <td className="py-3 px-4 font-mono">1.00</td>
                      <td className="py-3 px-4 font-mono">1.00</td>
                      <td className="py-3 px-4 font-mono">1.00</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">31-35</td>
                      <td className="py-3 px-4">88-95</td>
                      <td className="py-3 px-4 font-mono text-yellow-400">0.91</td>
                      <td className="py-3 px-4 font-mono text-yellow-400">0.94</td>
                      <td className="py-3 px-4 font-mono text-yellow-400">0.96</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">36-40</td>
                      <td className="py-3 px-4">97-104</td>
                      <td className="py-3 px-4 font-mono text-orange-400">0.82</td>
                      <td className="py-3 px-4 font-mono text-orange-400">0.88</td>
                      <td className="py-3 px-4 font-mono text-orange-400">0.91</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">41-45</td>
                      <td className="py-3 px-4">106-113</td>
                      <td className="py-3 px-4 font-mono text-orange-400">0.71</td>
                      <td className="py-3 px-4 font-mono text-orange-400">0.82</td>
                      <td className="py-3 px-4 font-mono text-orange-400">0.87</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">46-50</td>
                      <td className="py-3 px-4">115-122</td>
                      <td className="py-3 px-4 font-mono text-red-400">0.58</td>
                      <td className="py-3 px-4 font-mono text-red-400">0.75</td>
                      <td className="py-3 px-4 font-mono text-orange-400">0.82</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">51-55</td>
                      <td className="py-3 px-4">124-131</td>
                      <td className="py-3 px-4 font-mono text-red-400">0.41</td>
                      <td className="py-3 px-4 font-mono text-red-400">0.67</td>
                      <td className="py-3 px-4 font-mono text-orange-400">0.76</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">56-60</td>
                      <td className="py-3 px-4">133-140</td>
                      <td className="py-3 px-4 font-mono text-red-400">---</td>
                      <td className="py-3 px-4 font-mono text-red-400">0.58</td>
                      <td className="py-3 px-4 font-mono text-red-400">0.71</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="bg-purple-900/30 rounded-xl p-6 my-6">
                <h3 className="font-semibold text-purple-400 mb-3">Pro Tip: 90C Rating Advantage</h3>
                <p className="text-white/70">
                  Using conductors with 90 degrees C insulation (THHN, THWN-2, XHHW-2) provides a significant advantage in high-temperature environments. While you typically must use the 75 degrees C column for termination limits, you can use the 90 degrees C ampacity as your starting point for derating calculations.
                </p>
              </div>
            </section>

            <section id="conduit-fill" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Conduit Fill Adjustment Factors</h2>
              <p className="text-white/80 mb-4">
                When more than 3 current-carrying conductors are installed in the same raceway or cable, the ampacity must be reduced per <strong>NEC 310.15(B)(3)(a)</strong>. More conductors generate more heat in a confined space, limiting each conductor's ability to dissipate heat.
              </p>

              <div className="overflow-x-auto my-6">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-white/20">
                      <th className="text-left py-3 px-4 text-white/60">Number of Current-Carrying Conductors</th>
                      <th className="text-left py-3 px-4 text-white/60">Adjustment Factor</th>
                      <th className="text-left py-3 px-4 text-white/60">Ampacity Retained</th>
                    </tr>
                  </thead>
                  <tbody className="text-white/80">
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">1-3</td>
                      <td className="py-3 px-4 font-mono text-green-400">1.00</td>
                      <td className="py-3 px-4 text-white/60">100%</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">4-6</td>
                      <td className="py-3 px-4 font-mono text-yellow-400">0.80</td>
                      <td className="py-3 px-4 text-white/60">80%</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">7-9</td>
                      <td className="py-3 px-4 font-mono text-orange-400">0.70</td>
                      <td className="py-3 px-4 text-white/60">70%</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">10-20</td>
                      <td className="py-3 px-4 font-mono text-orange-400">0.50</td>
                      <td className="py-3 px-4 text-white/60">50%</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">21-30</td>
                      <td className="py-3 px-4 font-mono text-red-400">0.45</td>
                      <td className="py-3 px-4 text-white/60">45%</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">31-40</td>
                      <td className="py-3 px-4 font-mono text-red-400">0.40</td>
                      <td className="py-3 px-4 text-white/60">40%</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">41 and above</td>
                      <td className="py-3 px-4 font-mono text-red-400">0.35</td>
                      <td className="py-3 px-4 text-white/60">35%</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h3 className="text-xl font-semibold mt-6 mb-3">Counting Current-Carrying Conductors</h3>
              <p className="text-white/80 mb-4">
                Not all conductors count toward the derating calculation:
              </p>

              <div className="grid md:grid-cols-2 gap-4 my-6">
                <div className="bg-green-900/20 rounded-xl p-6 border border-green-500/30">
                  <h4 className="font-semibold text-green-400 mb-2">DO Count</h4>
                  <ul className="space-y-1 text-white/60 text-sm">
                    <li>&#8226; Phase conductors (ungrounded)</li>
                    <li>&#8226; Neutral carrying unbalanced current</li>
                    <li>&#8226; Neutral with harmonic loads (310.15(B)(5)(c))</li>
                    <li>&#8226; Travelers for 3-way switches at 100% load</li>
                  </ul>
                </div>
                <div className="bg-red-900/20 rounded-xl p-6 border border-red-500/30">
                  <h4 className="font-semibold text-red-400 mb-2">DO NOT Count</h4>
                  <ul className="space-y-1 text-white/60 text-sm">
                    <li>&#8226; Equipment grounding conductors</li>
                    <li>&#8226; Bonding conductors</li>
                    <li>&#8226; Neutral in 3-phase, 4-wire systems (balanced)</li>
                    <li>&#8226; Control conductors (not power circuits)</li>
                  </ul>
                </div>
              </div>

              <div className="bg-orange-900/30 rounded-xl p-6 my-6">
                <p className="text-white/90">
                  <strong>Important:</strong> Per NEC 310.15(B)(5)(c), in a 3-phase, 4-wire wye system with nonlinear loads (computers, LED lighting, VFDs), the neutral conductor carries harmonic currents and must be counted as a current-carrying conductor.
                </p>
              </div>
            </section>

            <section id="applying-factors" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">How to Apply Multiple Factors</h2>
              <p className="text-white/80 mb-4">
                When both temperature correction and conduit fill adjustment apply, multiply the factors together:
              </p>

              <div className="bg-white/5 rounded-xl p-6 my-6">
                <h3 className="font-semibold mb-3">Derating Formula</h3>
                <div className="bg-black/50 rounded-lg p-4 font-mono text-center">
                  <p className="text-cyan-400 text-lg">Adjusted Ampacity = Base Ampacity x Temp Factor x Fill Factor</p>
                </div>
              </div>

              <div className="bg-white/5 rounded-xl p-6 my-6">
                <h3 className="font-semibold mb-3">Step-by-Step Process</h3>
                <ol className="space-y-3 text-white/70">
                  <li><strong>1.</strong> Start with base ampacity from NEC Table 310.16 (or 310.17 for free air)</li>
                  <li><strong>2.</strong> Determine the ambient temperature and find the correction factor</li>
                  <li><strong>3.</strong> Count the current-carrying conductors and find the adjustment factor</li>
                  <li><strong>4.</strong> Multiply: Base Ampacity x Temp Factor x Fill Factor</li>
                  <li><strong>5.</strong> Verify the result meets or exceeds the load current</li>
                  <li><strong>6.</strong> Verify termination temperature ratings are satisfied</li>
                </ol>
              </div>
            </section>

            <section id="table-310-15" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Using NEC Table 310.16</h2>
              <p className="text-white/80 mb-4">
                NEC Table 310.16 provides base ampacities for insulated conductors rated 0-2000 volts in raceways, cables, or earth. Understanding how to read this table is fundamental to electrical calculations.
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-3">Partial Table 310.16 - Common Wire Sizes (Copper)</h3>
              <div className="overflow-x-auto my-6">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-white/20">
                      <th className="text-left py-3 px-4 text-white/60">AWG/kcmil</th>
                      <th className="text-left py-3 px-4 text-white/60">60C (TW, UF)</th>
                      <th className="text-left py-3 px-4 text-white/60">75C (THW, THWN, XHHW)</th>
                      <th className="text-left py-3 px-4 text-white/60">90C (THHN, THWN-2, XHHW-2)</th>
                    </tr>
                  </thead>
                  <tbody className="text-white/80">
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-mono">14</td>
                      <td className="py-3 px-4">15A</td>
                      <td className="py-3 px-4">20A</td>
                      <td className="py-3 px-4">25A</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-mono">12</td>
                      <td className="py-3 px-4">20A</td>
                      <td className="py-3 px-4">25A</td>
                      <td className="py-3 px-4">30A</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-mono">10</td>
                      <td className="py-3 px-4">30A</td>
                      <td className="py-3 px-4">35A</td>
                      <td className="py-3 px-4">40A</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-mono">8</td>
                      <td className="py-3 px-4">40A</td>
                      <td className="py-3 px-4">50A</td>
                      <td className="py-3 px-4">55A</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-mono">6</td>
                      <td className="py-3 px-4">55A</td>
                      <td className="py-3 px-4">65A</td>
                      <td className="py-3 px-4">75A</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-mono">4</td>
                      <td className="py-3 px-4">70A</td>
                      <td className="py-3 px-4">85A</td>
                      <td className="py-3 px-4">95A</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-mono">3</td>
                      <td className="py-3 px-4">85A</td>
                      <td className="py-3 px-4">100A</td>
                      <td className="py-3 px-4">115A</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-mono">2</td>
                      <td className="py-3 px-4">95A</td>
                      <td className="py-3 px-4">115A</td>
                      <td className="py-3 px-4">130A</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-mono">1</td>
                      <td className="py-3 px-4">110A</td>
                      <td className="py-3 px-4">130A</td>
                      <td className="py-3 px-4">145A</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-mono">1/0</td>
                      <td className="py-3 px-4">125A</td>
                      <td className="py-3 px-4">150A</td>
                      <td className="py-3 px-4">170A</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-mono">2/0</td>
                      <td className="py-3 px-4">145A</td>
                      <td className="py-3 px-4">175A</td>
                      <td className="py-3 px-4">195A</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-mono">3/0</td>
                      <td className="py-3 px-4">165A</td>
                      <td className="py-3 px-4">200A</td>
                      <td className="py-3 px-4">225A</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-mono">4/0</td>
                      <td className="py-3 px-4">195A</td>
                      <td className="py-3 px-4">230A</td>
                      <td className="py-3 px-4">260A</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section id="examples" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Calculation Examples</h2>

              <div className="bg-white/5 rounded-xl p-6 mb-6">
                <h3 className="font-semibold text-cyan-400 mb-3">Example 1: High Temperature Environment</h3>
                <p className="text-white/70 mb-4">
                  Size conductors for a 75A load in an environment with 40 degrees C ambient temperature. 3 current-carrying conductors in conduit.
                </p>
                <div className="space-y-3 text-white/60 text-sm">
                  <p><strong>Step 1:</strong> Need 75A. Check 4 AWG THHN (90C column): 95A base</p>
                  <p><strong>Step 2:</strong> Temperature factor at 40C for 90C wire: 0.91</p>
                  <p><strong>Step 3:</strong> Only 3 conductors, fill factor: 1.00</p>
                  <p><strong>Step 4:</strong> Adjusted ampacity: 95A x 0.91 x 1.00 = 86.45A</p>
                  <p className="text-green-400"><strong>Result:</strong> 4 AWG THHN at 86.45A is adequate for 75A load</p>
                </div>
              </div>

              <div className="bg-white/5 rounded-xl p-6 mb-6">
                <h3 className="font-semibold text-cyan-400 mb-3">Example 2: Multiple Conductors in Conduit</h3>
                <p className="text-white/70 mb-4">
                  Size conductors for 6 circuits (12 current-carrying conductors) each carrying 18A, ambient 30 degrees C.
                </p>
                <div className="space-y-3 text-white/60 text-sm">
                  <p><strong>Step 1:</strong> Need 18A per circuit. Check 12 AWG THHN (90C column): 30A base</p>
                  <p><strong>Step 2:</strong> Temperature factor at 30C: 1.00</p>
                  <p><strong>Step 3:</strong> 12 conductors, fill factor from table: 0.50</p>
                  <p><strong>Step 4:</strong> Adjusted ampacity: 30A x 1.00 x 0.50 = 15A</p>
                  <p className="text-red-400"><strong>Result:</strong> 12 AWG at 15A is NOT adequate for 18A load</p>
                  <p><strong>Solution:</strong> Upsize to 10 AWG THHN: 40A x 0.50 = 20A (adequate)</p>
                </div>
              </div>

              <div className="bg-white/5 rounded-xl p-6 mb-6">
                <h3 className="font-semibold text-cyan-400 mb-3">Example 3: Combined Derating</h3>
                <p className="text-white/70 mb-4">
                  Size conductors for 100A load, 45 degrees C ambient, 6 current-carrying conductors in conduit.
                </p>
                <div className="space-y-3 text-white/60 text-sm">
                  <p><strong>Step 1:</strong> Need 100A. Check 1 AWG THHN (90C column): 145A base</p>
                  <p><strong>Step 2:</strong> Temperature factor at 45C for 90C wire: 0.87</p>
                  <p><strong>Step 3:</strong> 6 conductors, fill factor: 0.80</p>
                  <p><strong>Step 4:</strong> Adjusted ampacity: 145A x 0.87 x 0.80 = 100.92A</p>
                  <p className="text-green-400"><strong>Result:</strong> 1 AWG THHN at 100.92A is adequate for 100A load (just barely!)</p>
                </div>
              </div>
            </section>

            <section id="exceptions" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Exceptions and Special Cases</h2>

              <div className="space-y-4 my-6">
                <div className="bg-white/5 rounded-xl p-6">
                  <h3 className="font-semibold text-purple-400 mb-2">Nipples (310.15(B)(3)(a)(4))</h3>
                  <p className="text-white/70 text-sm">
                    Conduit nipples not exceeding 24 inches in length do not require conduit fill derating. This exception is commonly used at panel connections.
                  </p>
                </div>

                <div className="bg-white/5 rounded-xl p-6">
                  <h3 className="font-semibold text-purple-400 mb-2">Rooftop Installations (310.15(B)(3)(c))</h3>
                  <p className="text-white/70 text-sm">
                    Raceways on rooftops exposed to direct sunlight must add a temperature adder to the ambient temperature. The adder ranges from 17 degrees C to 33 degrees C based on distance above roof.
                  </p>
                </div>

                <div className="bg-white/5 rounded-xl p-6">
                  <h3 className="font-semibold text-purple-400 mb-2">Continuous vs Non-Continuous Loads</h3>
                  <p className="text-white/70 text-sm">
                    Conductor ampacity for continuous loads (3+ hours) must be at least 125% of the continuous load. This is separate from and in addition to derating requirements.
                  </p>
                </div>

                <div className="bg-white/5 rounded-xl p-6">
                  <h3 className="font-semibold text-purple-400 mb-2">Termination Temperature Limits (110.14(C))</h3>
                  <p className="text-white/70 text-sm">
                    Even when using 90 degrees C wire for derating purposes, termination limits apply. Most equipment under 100A is rated for 60 degrees C terminations; 100A+ is typically 75 degrees C unless marked otherwise.
                  </p>
                </div>
              </div>
            </section>

            <section id="common-mistakes" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Common Mistakes</h2>

              <div className="space-y-4 my-6">
                <div className="bg-red-900/20 border border-red-500/30 rounded-xl p-6">
                  <h3 className="font-semibold text-red-400 mb-2">1. Forgetting Termination Limits</h3>
                  <p className="text-white/70 text-sm">
                    Using 90 degrees C ampacity without verifying the terminations can handle it. Always check equipment ratings - most receptacles and smaller breakers are rated for 60 degrees C or 75 degrees C only.
                  </p>
                </div>

                <div className="bg-red-900/20 border border-red-500/30 rounded-xl p-6">
                  <h3 className="font-semibold text-red-400 mb-2">2. Counting Neutral Incorrectly</h3>
                  <p className="text-white/70 text-sm">
                    Forgetting to count the neutral as a current-carrying conductor when serving nonlinear loads (computers, LED lighting), or incorrectly counting it for balanced 3-phase loads.
                  </p>
                </div>

                <div className="bg-red-900/20 border border-red-500/30 rounded-xl p-6">
                  <h3 className="font-semibold text-red-400 mb-2">3. Missing Rooftop Temperature Adder</h3>
                  <p className="text-white/70 text-sm">
                    Conduit on rooftops in direct sun requires a temperature adder to ambient. A 100 degrees F day with conduit less than 1 inch above roof requires adding 60 degrees F to ambient for calculations.
                  </p>
                </div>

                <div className="bg-red-900/20 border border-red-500/30 rounded-xl p-6">
                  <h3 className="font-semibold text-red-400 mb-2">4. Not Verifying After Derating</h3>
                  <p className="text-white/70 text-sm">
                    Calculating derating correctly but then failing to verify the derated ampacity still meets the load requirements. Always compare final ampacity to actual load current.
                  </p>
                </div>
              </div>
            </section>

            {/* CTA Section */}
            <section className="bg-gradient-to-r from-purple-900/30 to-cyan-900/30 rounded-2xl p-8 my-12">
              <h2 className="text-2xl font-display font-bold mb-4 text-center">
                Calculate Wire Sizing with Automatic Derating
              </h2>
              <p className="text-white/70 mb-6 text-center">
                Skip the manual calculations. Ampora's wire sizing calculator automatically applies temperature correction and conduit fill adjustment factors based on your installation conditions.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link
                  href="/calculators/wire-sizing"
                  className="px-6 py-3 bg-purple-600 text-white font-semibold rounded-full hover:bg-purple-500 transition-colors text-center"
                >
                  Wire Sizing Calculator
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
                <Link href="/blog/conduit-fill-calculation-guide" className="bg-white/5 hover:bg-white/10 rounded-xl p-6 transition-colors">
                  <span className="text-cyan-400 text-sm">Calculations</span>
                  <h3 className="font-semibold mt-2">Conduit Fill Calculation Guide</h3>
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
