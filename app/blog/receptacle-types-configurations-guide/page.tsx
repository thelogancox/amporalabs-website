import { Metadata } from "next";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import { BreadcrumbJsonLd, BlogPostingJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "NEMA Receptacle Types & Configurations: Complete Electrician's Guide",
  description: "Complete guide to NEMA receptacle configurations. Learn 15A, 20A, 30A, and 50A receptacle types, twist-lock configurations, hospital grade requirements, and special purpose receptacles for residential and commercial applications.",
  keywords: [
    "NEMA receptacle configurations",
    "receptacle types",
    "15 amp receptacle",
    "20 amp receptacle",
    "30 amp receptacle",
    "50 amp receptacle",
    "twist lock receptacle",
    "NEMA 5-15",
    "NEMA 5-20",
    "NEMA 6-20",
    "NEMA 14-30",
    "NEMA 14-50",
    "hospital grade receptacle",
    "tamper resistant receptacle",
    "GFCI receptacle",
    "electrical outlet types"
  ],
  alternates: {
    canonical: "https://amporalabs.com/blog/receptacle-types-configurations-guide",
  },
  openGraph: {
    title: "NEMA Receptacle Types & Configurations Guide - Ampora",
    description: "Complete reference for NEMA receptacle configurations, ratings, and applications including twist-lock and special purpose types.",
    url: "https://amporalabs.com/blog/receptacle-types-configurations-guide",
    type: "article",
  },
};

function HeroIllustration() {
  return (
    <svg viewBox="0 0 400 180" className="w-full h-40 md:h-48" aria-label="Common NEMA receptacle configurations">
      {/* Background */}
      <rect x="10" y="10" width="380" height="160" rx="4" fill="#1f2937" stroke="#374151" strokeWidth="1"/>

      {/* NEMA 5-15 (Standard 15A) */}
      <g transform="translate(45, 35)">
        <rect x="0" y="0" width="50" height="65" rx="4" fill="#374151" stroke="#6b7280" strokeWidth="1.5"/>
        {/* Slots */}
        <rect x="14" y="12" width="4" height="12" rx="1" fill="#1f2937"/>
        <rect x="32" y="12" width="4" height="12" rx="1" fill="#1f2937"/>
        <circle cx="25" cy="42" r="5" fill="#1f2937"/>
        <text x="25" y="58" textAnchor="middle" fill="#9ca3af" fontSize="5">5-15R</text>
        <text x="25" y="78" textAnchor="middle" fill="#22c55e" fontSize="7" fontWeight="bold">15A 125V</text>
      </g>

      {/* NEMA 5-20 (20A) */}
      <g transform="translate(115, 35)">
        <rect x="0" y="0" width="50" height="65" rx="4" fill="#374151" stroke="#22c55e" strokeWidth="2"/>
        {/* T-slot on left */}
        <path d="M 14 12 L 14 24 L 18 24 L 18 18 L 14 18" fill="#1f2937"/>
        <rect x="32" y="12" width="4" height="12" rx="1" fill="#1f2937"/>
        <circle cx="25" cy="42" r="5" fill="#1f2937"/>
        <text x="25" y="58" textAnchor="middle" fill="#9ca3af" fontSize="5">5-20R</text>
        <text x="25" y="78" textAnchor="middle" fill="#22c55e" fontSize="7" fontWeight="bold">20A 125V</text>
      </g>

      {/* NEMA 6-20 (240V 20A) */}
      <g transform="translate(185, 35)">
        <rect x="0" y="0" width="50" height="65" rx="4" fill="#374151" stroke="#3b82f6" strokeWidth="2"/>
        {/* Horizontal slots */}
        <rect x="12" y="15" width="12" height="4" rx="1" fill="#1f2937"/>
        <rect x="26" y="15" width="12" height="4" rx="1" fill="#1f2937"/>
        <circle cx="25" cy="42" r="5" fill="#1f2937"/>
        <text x="25" y="58" textAnchor="middle" fill="#9ca3af" fontSize="5">6-20R</text>
        <text x="25" y="78" textAnchor="middle" fill="#3b82f6" fontSize="7" fontWeight="bold">20A 250V</text>
      </g>

      {/* NEMA 14-30 (Dryer) */}
      <g transform="translate(255, 30)">
        <rect x="0" y="0" width="55" height="70" rx="4" fill="#374151" stroke="#f59e0b" strokeWidth="2"/>
        {/* 4 prong layout */}
        <rect x="13" y="12" width="4" height="14" rx="1" fill="#1f2937"/>
        <rect x="38" y="12" width="4" height="14" rx="1" fill="#1f2937"/>
        <path d="M 25 30 L 18 38 L 32 38 Z" fill="#1f2937"/>
        <circle cx="27" cy="52" r="5" fill="#1f2937"/>
        <text x="27" y="65" textAnchor="middle" fill="#9ca3af" fontSize="5">14-30R</text>
        <text x="27" y="85" textAnchor="middle" fill="#f59e0b" fontSize="7" fontWeight="bold">30A 250V</text>
      </g>

      {/* NEMA 14-50 (Range/EV) */}
      <g transform="translate(330, 25)">
        <rect x="0" y="0" width="55" height="75" rx="4" fill="#374151" stroke="#ef4444" strokeWidth="2"/>
        {/* 4 prong layout - larger */}
        <rect x="10" y="12" width="6" height="16" rx="1" fill="#1f2937"/>
        <rect x="39" y="12" width="6" height="16" rx="1" fill="#1f2937"/>
        <path d="M 27 32 L 18 44 L 36 44 Z" fill="#1f2937"/>
        <circle cx="27" cy="58" r="6" fill="#1f2937"/>
        <text x="27" y="72" textAnchor="middle" fill="#9ca3af" fontSize="5">14-50R</text>
        <text x="27" y="92" textAnchor="middle" fill="#ef4444" fontSize="7" fontWeight="bold">50A 250V</text>
      </g>

      {/* Twist-Lock Example (L5-30) */}
      <g transform="translate(45, 115)">
        <circle cx="25" cy="20" r="22" fill="#374151" stroke="#8b5cf6" strokeWidth="2"/>
        {/* Curved slots */}
        <path d="M 18 10 Q 12 15 14 22" stroke="#1f2937" strokeWidth="4" fill="none" strokeLinecap="round"/>
        <path d="M 32 10 Q 38 15 36 22" stroke="#1f2937" strokeWidth="4" fill="none" strokeLinecap="round"/>
        <circle cx="25" cy="28" r="4" fill="#1f2937"/>
        <text x="25" y="50" textAnchor="middle" fill="#8b5cf6" fontSize="6" fontWeight="bold">L5-30R</text>
      </g>

      {/* Twist-Lock Example (L14-30) */}
      <g transform="translate(115, 115)">
        <circle cx="25" cy="20" r="22" fill="#374151" stroke="#ec4899" strokeWidth="2"/>
        {/* 4 curved slots */}
        <path d="M 18 8 Q 10 12 12 20" stroke="#1f2937" strokeWidth="3" fill="none" strokeLinecap="round"/>
        <path d="M 32 8 Q 40 12 38 20" stroke="#1f2937" strokeWidth="3" fill="none" strokeLinecap="round"/>
        <path d="M 25 30 Q 20 35 22 38" stroke="#1f2937" strokeWidth="3" fill="none" strokeLinecap="round"/>
        <circle cx="25" cy="20" r="3" fill="#1f2937"/>
        <text x="25" y="50" textAnchor="middle" fill="#ec4899" fontSize="6" fontWeight="bold">L14-30R</text>
      </g>

      {/* Legend Labels */}
      <g transform="translate(185, 120)">
        <text x="0" y="5" fill="#22c55e" fontSize="8" fontWeight="bold">Straight Blade</text>
        <text x="0" y="16" fill="#9ca3af" fontSize="6">Standard residential/commercial</text>
        <text x="0" y="32" fill="#8b5cf6" fontSize="8" fontWeight="bold">Twist-Lock (Locking)</text>
        <text x="0" y="43" fill="#9ca3af" fontSize="6">Industrial, generators, temp power</text>
      </g>
    </svg>
  );
}

export default function ReceptacleTypesGuidePage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navigation />
      <div className="pt-20">
        <BreadcrumbJsonLd
          items={[
            { name: "Home", url: "https://amporalabs.com" },
            { name: "Blog", url: "https://amporalabs.com/blog" },
            { name: "Receptacle Types & Configurations", url: "https://amporalabs.com/blog/receptacle-types-configurations-guide" },
          ]}
        />
        <BlogPostingJsonLd
          headline="NEMA Receptacle Types & Configurations: Complete Electrician's Guide"
          description="Complete reference guide to NEMA receptacle configurations, ratings, and applications for electrical professionals."
          datePublished="2025-01-15"
          dateModified="2025-01-15"
          url="https://amporalabs.com/blog/receptacle-types-configurations-guide"
          wordCount={2600}
          keywords={["NEMA receptacle", "receptacle configurations", "electrical outlets", "twist lock"]}
        />

        <article className="max-w-4xl mx-auto px-6 py-12">
          {/* Breadcrumb */}
          <nav className="text-sm text-white/60 mb-8">
            <Link href="/" className="hover:text-white">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/blog" className="hover:text-white">Blog</Link>
            <span className="mx-2">/</span>
            <span className="text-white">Receptacle Types & Configurations</span>
          </nav>

          {/* Article Header */}
          <header className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <span className="px-3 py-1 bg-yellow-600/30 text-yellow-300 text-sm font-medium rounded-full">
                Materials
              </span>
              <span className="text-white/40 text-sm">9 min read</span>
              <span className="text-white/40 text-sm">January 15, 2025</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6 leading-tight">
              NEMA Receptacle Types & Configurations: Complete Electrician's Guide
            </h1>
            <p className="text-xl text-white/70">
              Master the NEMA receptacle system with this comprehensive reference. From standard 15A outlets to 50A range receptacles, twist-lock configurations, and hospital-grade specialty types, understand every receptacle you'll encounter in the field.
            </p>
          </header>

          <div className="mb-12 bg-gradient-to-br from-yellow-900/20 to-purple-900/20 rounded-2xl p-6 border border-white/10">
            <HeroIllustration />
          </div>

          {/* Quick Reference CTA */}
          <div className="bg-purple-900/30 border border-purple-500/30 rounded-2xl p-6 mb-12">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div>
                <h3 className="font-display font-bold text-lg mb-1">Quick NEMA Reference</h3>
                <p className="text-white/70 text-sm">Ampora includes complete NEMA configuration charts for quick field identification.</p>
              </div>
              <a
                href="https://apps.apple.com/us/app/ampora/id6753693522"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-purple-600 text-white font-semibold rounded-full hover:bg-purple-500 transition-colors whitespace-nowrap"
              >
                Download Free
              </a>
            </div>
          </div>

          {/* Table of Contents */}
          <div className="bg-white/5 rounded-2xl p-6 mb-12">
            <h2 className="font-display font-bold mb-4">In This Guide</h2>
            <ul className="space-y-2 text-white/70">
              <li><a href="#nema-system" className="hover:text-purple-400">Understanding NEMA Designations</a></li>
              <li><a href="#125v-receptacles" className="hover:text-purple-400">125V Receptacles (5-15, 5-20, 5-30, 5-50)</a></li>
              <li><a href="#250v-receptacles" className="hover:text-purple-400">250V Receptacles (6-15, 6-20, 6-30, 6-50)</a></li>
              <li><a href="#split-phase" className="hover:text-purple-400">125/250V Receptacles (10, 14 Series)</a></li>
              <li><a href="#twist-lock" className="hover:text-purple-400">Twist-Lock (Locking) Receptacles</a></li>
              <li><a href="#special-purpose" className="hover:text-purple-400">Special Purpose Receptacles</a></li>
              <li><a href="#installation-requirements" className="hover:text-purple-400">Installation Requirements</a></li>
              <li><a href="#common-applications" className="hover:text-purple-400">Common Application Guide</a></li>
            </ul>
          </div>

          {/* Article Content */}
          <div className="prose prose-invert prose-lg max-w-none">

            <section id="nema-system" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Understanding NEMA Designations</h2>
              <p className="text-white/80 mb-4">
                The National Electrical Manufacturers Association (NEMA) standardizes electrical connectors in North America. Each NEMA designation tells you exactly what a receptacle or plug is designed for.
              </p>

              <div className="bg-white/5 rounded-xl p-6 my-6">
                <h3 className="font-semibold text-cyan-400 mb-3">NEMA Designation Format</h3>
                <div className="text-center mb-4">
                  <span className="font-mono text-2xl text-cyan-400">L14-30R</span>
                </div>
                <div className="grid grid-cols-4 gap-4 text-sm text-center">
                  <div>
                    <p className="font-mono text-purple-400 text-lg">L</p>
                    <p className="text-white/60">Locking</p>
                    <p className="text-white/40 text-xs">(if present)</p>
                  </div>
                  <div>
                    <p className="font-mono text-yellow-400 text-lg">14</p>
                    <p className="text-white/60">Configuration</p>
                    <p className="text-white/40 text-xs">(voltage/wires)</p>
                  </div>
                  <div>
                    <p className="font-mono text-green-400 text-lg">30</p>
                    <p className="text-white/60">Amperage</p>
                    <p className="text-white/40 text-xs">(rating)</p>
                  </div>
                  <div>
                    <p className="font-mono text-red-400 text-lg">R</p>
                    <p className="text-white/60">Type</p>
                    <p className="text-white/40 text-xs">R=Receptacle, P=Plug</p>
                  </div>
                </div>
              </div>

              <h3 className="text-xl font-display font-semibold mb-3 text-cyan-400">Configuration Numbers Explained</h3>
              <div className="overflow-x-auto my-6">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-white/20">
                      <th className="text-left py-3 px-4 text-white/60">Series</th>
                      <th className="text-left py-3 px-4 text-white/60">Voltage</th>
                      <th className="text-left py-3 px-4 text-white/60">Wires</th>
                      <th className="text-left py-3 px-4 text-white/60">Ground</th>
                    </tr>
                  </thead>
                  <tbody className="text-white/80">
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-mono">1</td>
                      <td className="py-3 px-4">125V</td>
                      <td className="py-3 px-4">2-wire</td>
                      <td className="py-3 px-4 text-red-400">No ground</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-mono">5</td>
                      <td className="py-3 px-4">125V</td>
                      <td className="py-3 px-4">2-wire + ground</td>
                      <td className="py-3 px-4 text-green-400">Grounded</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-mono">6</td>
                      <td className="py-3 px-4">250V</td>
                      <td className="py-3 px-4">2-wire + ground</td>
                      <td className="py-3 px-4 text-green-400">Grounded</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-mono">10</td>
                      <td className="py-3 px-4">125/250V</td>
                      <td className="py-3 px-4">3-wire</td>
                      <td className="py-3 px-4 text-red-400">No ground (obsolete)</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-mono">14</td>
                      <td className="py-3 px-4">125/250V</td>
                      <td className="py-3 px-4">3-wire + ground</td>
                      <td className="py-3 px-4 text-green-400">Grounded</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-mono">15</td>
                      <td className="py-3 px-4">250V 3-phase</td>
                      <td className="py-3 px-4">3-wire + ground</td>
                      <td className="py-3 px-4 text-green-400">Grounded</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section id="125v-receptacles" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">125V Receptacles (NEMA 5 Series)</h2>
              <p className="text-white/80 mb-4">
                The NEMA 5 series represents standard 125V grounded receptacles used throughout residential and commercial applications.
              </p>

              <div className="space-y-6 my-6">
                <div className="bg-green-900/20 rounded-xl p-6 border border-green-500/30">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="font-semibold text-green-400 mb-2">NEMA 5-15R</h3>
                      <p className="text-white/60 text-sm mb-3">15A 125V - Standard duplex receptacle</p>
                    </div>
                    <span className="font-mono text-green-400 text-xl">15A</span>
                  </div>
                  <ul className="text-white/70 text-sm space-y-1">
                    <li>Most common receptacle in North America</li>
                    <li>Two parallel vertical slots + U-shaped ground</li>
                    <li>Accepts 5-15P plugs only</li>
                    <li>Used for general purpose 120V loads</li>
                  </ul>
                </div>

                <div className="bg-green-900/20 rounded-xl p-6 border border-green-500/30">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="font-semibold text-green-400 mb-2">NEMA 5-20R</h3>
                      <p className="text-white/60 text-sm mb-3">20A 125V - Commercial/kitchen grade</p>
                    </div>
                    <span className="font-mono text-green-400 text-xl">20A</span>
                  </div>
                  <ul className="text-white/70 text-sm space-y-1">
                    <li>T-slot on neutral side (horizontal + vertical)</li>
                    <li>Accepts both 5-15P and 5-20P plugs</li>
                    <li>Required in kitchens, bathrooms, laundry per NEC</li>
                    <li>Must be on 20A circuit</li>
                  </ul>
                </div>

                <div className="bg-cyan-900/20 rounded-xl p-6 border border-cyan-500/30">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="font-semibold text-cyan-400 mb-2">NEMA 5-30R & 5-50R</h3>
                      <p className="text-white/60 text-sm mb-3">30A/50A 125V - Heavy 120V loads</p>
                    </div>
                    <span className="font-mono text-cyan-400 text-xl">30-50A</span>
                  </div>
                  <ul className="text-white/70 text-sm space-y-1">
                    <li>Larger blade configurations</li>
                    <li>5-30R: RV parks (older), some window AC</li>
                    <li>5-50R: Rare, some industrial 120V equipment</li>
                    <li>Distinct slot patterns prevent cross-plugging</li>
                  </ul>
                </div>
              </div>
            </section>

            <section id="250v-receptacles" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">250V Receptacles (NEMA 6 Series)</h2>
              <p className="text-white/80 mb-4">
                The NEMA 6 series provides 250V single-phase power with two hot conductors and a ground. No neutral is present.
              </p>

              <div className="space-y-6 my-6">
                <div className="bg-blue-900/20 rounded-xl p-6 border border-blue-500/30">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="font-semibold text-blue-400 mb-2">NEMA 6-15R & 6-20R</h3>
                      <p className="text-white/60 text-sm mb-3">15A/20A 250V - Common 240V outlets</p>
                    </div>
                    <span className="font-mono text-blue-400 text-xl">15-20A</span>
                  </div>
                  <ul className="text-white/70 text-sm space-y-1">
                    <li>Horizontal slot orientation (unlike 5-series vertical)</li>
                    <li>Common for window air conditioners</li>
                    <li>Workshop equipment (welders, compressors)</li>
                    <li>6-20R has T-slot similar to 5-20R</li>
                  </ul>
                </div>

                <div className="bg-blue-900/20 rounded-xl p-6 border border-blue-500/30">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="font-semibold text-blue-400 mb-2">NEMA 6-30R</h3>
                      <p className="text-white/60 text-sm mb-3">30A 250V - Heavy equipment</p>
                    </div>
                    <span className="font-mono text-blue-400 text-xl">30A</span>
                  </div>
                  <ul className="text-white/70 text-sm space-y-1">
                    <li>Larger industrial equipment</li>
                    <li>Some older EV chargers</li>
                    <li>Large welders</li>
                    <li>Commercial HVAC equipment</li>
                  </ul>
                </div>

                <div className="bg-blue-900/20 rounded-xl p-6 border border-blue-500/30">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="font-semibold text-blue-400 mb-2">NEMA 6-50R</h3>
                      <p className="text-white/60 text-sm mb-3">50A 250V - Welders, EV charging</p>
                    </div>
                    <span className="font-mono text-blue-400 text-xl">50A</span>
                  </div>
                  <ul className="text-white/70 text-sm space-y-1">
                    <li>Many Level 2 EV chargers use 6-50</li>
                    <li>Industrial welding equipment</li>
                    <li>Note: No neutral - not for range/dryer use</li>
                    <li>Provides 240V @ 50A = 12kW maximum</li>
                  </ul>
                </div>
              </div>
            </section>

            <section id="split-phase" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">125/250V Receptacles (NEMA 10 & 14 Series)</h2>
              <p className="text-white/80 mb-4">
                These 4-wire configurations provide both 240V (between hots) and 120V (hot to neutral) from the same receptacle. The NEMA 14 series replaced the ungrounded NEMA 10 series.
              </p>

              <div className="bg-orange-900/30 rounded-xl p-6 my-6">
                <h4 className="font-semibold text-orange-400 mb-3">NEMA 10 Series (Obsolete)</h4>
                <p className="text-white/70 mb-2">
                  The NEMA 10-30 and 10-50 receptacles have no equipment ground. The neutral doubles as the grounding conductor, which is no longer permitted for new installations.
                </p>
                <ul className="text-white/60 text-sm space-y-1">
                  <li><strong>10-30:</strong> Old dryer outlets (3-prong)</li>
                  <li><strong>10-50:</strong> Old range outlets (3-prong)</li>
                  <li>May be replaced with 14-series on existing circuits if grounding is added</li>
                </ul>
              </div>

              <div className="space-y-6 my-6">
                <div className="bg-yellow-900/20 rounded-xl p-6 border border-yellow-500/30">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="font-semibold text-yellow-400 mb-2">NEMA 14-30R</h3>
                      <p className="text-white/60 text-sm mb-3">30A 125/250V - Electric dryers</p>
                    </div>
                    <span className="font-mono text-yellow-400 text-xl">30A</span>
                  </div>
                  <ul className="text-white/70 text-sm space-y-1">
                    <li>Standard for modern electric dryers</li>
                    <li>4-wire: 2 hots, neutral, ground</li>
                    <li>Provides 240V for heating, 120V for controls/lights</li>
                    <li>Also used for some Level 2 EV chargers</li>
                  </ul>
                </div>

                <div className="bg-red-900/20 rounded-xl p-6 border border-red-500/30">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="font-semibold text-red-400 mb-2">NEMA 14-50R</h3>
                      <p className="text-white/60 text-sm mb-3">50A 125/250V - Ranges, EV charging</p>
                    </div>
                    <span className="font-mono text-red-400 text-xl">50A</span>
                  </div>
                  <ul className="text-white/70 text-sm space-y-1">
                    <li>Standard for modern electric ranges</li>
                    <li>Most common EV charging receptacle</li>
                    <li>RV parks (50A service)</li>
                    <li>Provides up to 9.6kW for EV charging (80% of 50A = 40A continuous)</li>
                  </ul>
                </div>

                <div className="bg-cyan-900/20 rounded-xl p-6 border border-cyan-500/30">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="font-semibold text-cyan-400 mb-2">NEMA 14-20R</h3>
                      <p className="text-white/60 text-sm mb-3">20A 125/250V - Special applications</p>
                    </div>
                    <span className="font-mono text-cyan-400 text-xl">20A</span>
                  </div>
                  <ul className="text-white/70 text-sm space-y-1">
                    <li>Less common than 14-30 and 14-50</li>
                    <li>Some UPS systems</li>
                    <li>Data center PDUs</li>
                    <li>Provides 240V with 120V option</li>
                  </ul>
                </div>
              </div>
            </section>

            <section id="twist-lock" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Twist-Lock (Locking) Receptacles</h2>
              <p className="text-white/80 mb-4">
                Locking receptacles (prefix "L") require the plug to be twisted clockwise after insertion to lock it in place. They prevent accidental disconnection and are common in industrial, generator, and temporary power applications.
              </p>

              <div className="overflow-x-auto my-6">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-white/20">
                      <th className="text-left py-3 px-4 text-white/60">NEMA Type</th>
                      <th className="text-left py-3 px-4 text-white/60">Voltage</th>
                      <th className="text-left py-3 px-4 text-white/60">Amperage</th>
                      <th className="text-left py-3 px-4 text-white/60">Common Use</th>
                    </tr>
                  </thead>
                  <tbody className="text-white/80">
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-mono text-purple-400">L5-15R</td>
                      <td className="py-3 px-4">125V</td>
                      <td className="py-3 px-4">15A</td>
                      <td className="py-3 px-4 text-white/60">Computer/data equipment</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-mono text-purple-400">L5-20R</td>
                      <td className="py-3 px-4">125V</td>
                      <td className="py-3 px-4">20A</td>
                      <td className="py-3 px-4 text-white/60">Network equipment</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-mono text-purple-400">L5-30R</td>
                      <td className="py-3 px-4">125V</td>
                      <td className="py-3 px-4">30A</td>
                      <td className="py-3 px-4 text-white/60">RV parks, generator 120V output</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-mono text-purple-400">L6-20R</td>
                      <td className="py-3 px-4">250V</td>
                      <td className="py-3 px-4">20A</td>
                      <td className="py-3 px-4 text-white/60">Data center PDUs</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-mono text-purple-400">L6-30R</td>
                      <td className="py-3 px-4">250V</td>
                      <td className="py-3 px-4">30A</td>
                      <td className="py-3 px-4 text-white/60">Industrial equipment, UPS</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-mono text-pink-400">L14-20R</td>
                      <td className="py-3 px-4">125/250V</td>
                      <td className="py-3 px-4">20A</td>
                      <td className="py-3 px-4 text-white/60">Small generators</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-mono text-pink-400">L14-30R</td>
                      <td className="py-3 px-4">125/250V</td>
                      <td className="py-3 px-4">30A</td>
                      <td className="py-3 px-4 text-white/60">Portable generators, transfer switches</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-mono text-pink-400">L21-30R</td>
                      <td className="py-3 px-4">120/208V 3PH</td>
                      <td className="py-3 px-4">30A</td>
                      <td className="py-3 px-4 text-white/60">3-phase temporary power</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="bg-purple-900/30 rounded-xl p-6 my-6">
                <h4 className="font-semibold text-purple-400 mb-3">L14-30: The Generator Standard</h4>
                <p className="text-white/70">
                  The L14-30R is the most common receptacle for portable generators used with home transfer switches. It provides both 120V and 240V from a 30A circuit, allowing a 7,500W+ generator to power essential circuits during outages.
                </p>
              </div>
            </section>

            <section id="special-purpose" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Special Purpose Receptacles</h2>

              <div className="space-y-6 my-6">
                <div className="bg-white/5 rounded-xl p-6">
                  <h3 className="font-semibold text-green-400 mb-3">Tamper-Resistant (TR) Receptacles</h3>
                  <p className="text-white/70 mb-3">
                    Required by NEC 406.12 in all dwelling unit locations. Internal shutters prevent insertion of foreign objects unless both slots are engaged simultaneously.
                  </p>
                  <ul className="text-white/60 text-sm space-y-1">
                    <li>Marked "TR" on face</li>
                    <li>Required in all new residential construction</li>
                    <li>Protects children from electrical shock</li>
                    <li>Available in all standard configurations</li>
                  </ul>
                </div>

                <div className="bg-white/5 rounded-xl p-6">
                  <h3 className="font-semibold text-cyan-400 mb-3">Hospital Grade Receptacles</h3>
                  <p className="text-white/70 mb-3">
                    UL 498 listed for healthcare facilities. Green dot indicates hospital grade. Required in patient care areas per NEC 517.18.
                  </p>
                  <ul className="text-white/60 text-sm space-y-1">
                    <li>Tighter grip on plug blades</li>
                    <li>Higher impact resistance</li>
                    <li>Better ground contact integrity</li>
                    <li>Green dot on face required</li>
                  </ul>
                </div>

                <div className="bg-white/5 rounded-xl p-6">
                  <h3 className="font-semibold text-yellow-400 mb-3">Weather-Resistant (WR) Receptacles</h3>
                  <p className="text-white/70 mb-3">
                    Required by NEC 406.9(A) for damp/wet locations. Must meet additional corrosion and UV resistance requirements.
                  </p>
                  <ul className="text-white/60 text-sm space-y-1">
                    <li>Marked "WR" on device</li>
                    <li>Required for all outdoor receptacles</li>
                    <li>Also for covered porches, carports, garages</li>
                    <li>Still requires weatherproof cover</li>
                  </ul>
                </div>

                <div className="bg-white/5 rounded-xl p-6">
                  <h3 className="font-semibold text-red-400 mb-3">Isolated Ground (IG) Receptacles</h3>
                  <p className="text-white/70 mb-3">
                    Orange colored face indicates isolated ground per NEC 250.146(D). Equipment ground is isolated from device yoke.
                  </p>
                  <ul className="text-white/60 text-sm space-y-1">
                    <li>Reduces electrical noise for sensitive electronics</li>
                    <li>Requires separate insulated ground conductor</li>
                    <li>Common in computer rooms, AV systems, medical imaging</li>
                    <li>Orange triangle on face</li>
                  </ul>
                </div>
              </div>
            </section>

            <section id="installation-requirements" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Installation Requirements</h2>

              <h3 className="text-xl font-display font-semibold mb-3 text-cyan-400">Receptacle Orientation</h3>
              <p className="text-white/80 mb-4">
                NEC does not require a specific orientation (ground up vs ground down). However:
              </p>
              <ul className="list-disc list-inside text-white/70 space-y-2 mb-6">
                <li><strong>Ground up:</strong> Preferred by many jurisdictions - if a plug falls partially out, a falling object hits ground pin first</li>
                <li><strong>Ground down:</strong> Traditional residential orientation</li>
                <li><strong>Horizontal:</strong> Often used with special covers</li>
                <li><strong>Hospital grade:</strong> Some facilities require ground up</li>
              </ul>

              <h3 className="text-xl font-display font-semibold mb-3 text-cyan-400">Wire Connections</h3>
              <div className="bg-white/5 rounded-xl p-6 my-6">
                <ul className="space-y-2 text-white/70">
                  <li><strong>Hot (brass screw):</strong> Black or red wire</li>
                  <li><strong>Neutral (silver screw):</strong> White or gray wire</li>
                  <li><strong>Ground (green screw):</strong> Green or bare copper</li>
                  <li><strong>Backstab connections:</strong> Not recommended for 20A circuits; use screw terminals or screw-to-clamp</li>
                </ul>
              </div>

              <h3 className="text-xl font-display font-semibold mb-3 text-cyan-400">Box Fill Considerations</h3>
              <p className="text-white/80 mb-4">
                Receptacles count as 2 conductor equivalents per NEC 314.16(B)(4). Ensure adequate box volume when installing:
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-4 text-center text-sm">
                <div className="bg-white/5 rounded-xl p-4">
                  <p className="text-white/60">14 AWG</p>
                  <p className="font-mono text-cyan-400">4.0 cu in</p>
                  <p className="text-white/40 text-xs">per receptacle</p>
                </div>
                <div className="bg-white/5 rounded-xl p-4">
                  <p className="text-white/60">12 AWG</p>
                  <p className="font-mono text-cyan-400">4.5 cu in</p>
                  <p className="text-white/40 text-xs">per receptacle</p>
                </div>
                <div className="bg-white/5 rounded-xl p-4">
                  <p className="text-white/60">10 AWG</p>
                  <p className="font-mono text-cyan-400">5.0 cu in</p>
                  <p className="text-white/40 text-xs">per receptacle</p>
                </div>
                <div className="bg-white/5 rounded-xl p-4">
                  <p className="text-white/60">8 AWG</p>
                  <p className="font-mono text-cyan-400">6.0 cu in</p>
                  <p className="text-white/40 text-xs">per receptacle</p>
                </div>
              </div>
            </section>

            <section id="common-applications" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Common Application Guide</h2>
              <p className="text-white/80 mb-4">
                Quick reference for matching applications to receptacle types:
              </p>
              <div className="overflow-x-auto my-6">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-white/20">
                      <th className="text-left py-3 px-4 text-white/60">Application</th>
                      <th className="text-left py-3 px-4 text-white/60">Receptacle</th>
                      <th className="text-left py-3 px-4 text-white/60">Circuit</th>
                    </tr>
                  </thead>
                  <tbody className="text-white/80">
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">General residential outlets</td>
                      <td className="py-3 px-4 font-mono">5-15R or 5-20R</td>
                      <td className="py-3 px-4 text-white/60">15A or 20A</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">Kitchen countertop</td>
                      <td className="py-3 px-4 font-mono">5-20R (GFCI)</td>
                      <td className="py-3 px-4 text-white/60">20A (dedicated)</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">Bathroom</td>
                      <td className="py-3 px-4 font-mono">5-20R (GFCI)</td>
                      <td className="py-3 px-4 text-white/60">20A</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">Window air conditioner (240V)</td>
                      <td className="py-3 px-4 font-mono">6-15R or 6-20R</td>
                      <td className="py-3 px-4 text-white/60">15A or 20A @ 240V</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">Electric dryer</td>
                      <td className="py-3 px-4 font-mono">14-30R</td>
                      <td className="py-3 px-4 text-white/60">30A @ 240V</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">Electric range/oven</td>
                      <td className="py-3 px-4 font-mono">14-50R</td>
                      <td className="py-3 px-4 text-white/60">50A @ 240V</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">EV charger (Level 2)</td>
                      <td className="py-3 px-4 font-mono">14-50R or 6-50R</td>
                      <td className="py-3 px-4 text-white/60">50A @ 240V</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">Portable generator</td>
                      <td className="py-3 px-4 font-mono">L14-30R</td>
                      <td className="py-3 px-4 text-white/60">30A @ 240V</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">RV park (30A service)</td>
                      <td className="py-3 px-4 font-mono">TT-30R</td>
                      <td className="py-3 px-4 text-white/60">30A @ 120V</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4">RV park (50A service)</td>
                      <td className="py-3 px-4 font-mono">14-50R</td>
                      <td className="py-3 px-4 text-white/60">50A @ 240V</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* CTA Section */}
            <section className="bg-gradient-to-r from-purple-900/30 to-cyan-900/30 rounded-2xl p-8 my-12">
              <h2 className="text-2xl font-display font-bold mb-4 text-center">
                NEMA Reference at Your Fingertips
              </h2>
              <p className="text-white/70 mb-6 text-center">
                Ampora includes complete NEMA configuration charts, wire sizing guides, and NEC requirements for every receptacle installation.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <a
                  href="https://apps.apple.com/us/app/ampora/id6753693522"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-purple-600 text-white font-semibold rounded-full hover:bg-purple-500 transition-colors text-center"
                >
                  Download Ampora Free
                </a>
                <Link
                  href="/calculators"
                  className="px-6 py-3 bg-white text-black font-semibold rounded-full hover:bg-white/90 transition-colors text-center"
                >
                  Try Web Calculators
                </Link>
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
                <Link href="/blog/gfci-vs-afci-requirements" className="bg-white/5 hover:bg-white/10 rounded-xl p-6 transition-colors">
                  <span className="text-purple-400 text-sm">NEC Code</span>
                  <h3 className="font-semibold mt-2">GFCI vs AFCI Requirements</h3>
                </Link>
                <Link href="/blog/nec-article-210-branch-circuits-guide" className="bg-white/5 hover:bg-white/10 rounded-xl p-6 transition-colors">
                  <span className="text-purple-400 text-sm">NEC Code</span>
                  <h3 className="font-semibold mt-2">NEC Article 210: Branch Circuits</h3>
                </Link>
                <Link href="/blog/ev-charger-installation-guide" className="bg-white/5 hover:bg-white/10 rounded-xl p-6 transition-colors">
                  <span className="text-green-400 text-sm">Installation</span>
                  <h3 className="font-semibold mt-2">EV Charger Installation Guide</h3>
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
