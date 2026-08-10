import { Metadata } from "next";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import { BlogPostingJsonLd, BreadcrumbJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "240V Outlet Wiring Guide: Dryer, Range & EV Circuits Explained",
  description: "Complete 240V outlet wiring guide covering NEMA 14-30 dryer outlets, NEMA 14-50 range and EV charging outlets, 3-wire vs 4-wire configurations, double-pole breaker selection, wire sizing per NEC, and step-by-step installation for 240 volt receptacles including converting old 3-wire to modern 4-wire circuits.",
  keywords: [
    "240v outlet wiring",
    "dryer outlet wiring",
    "range outlet wiring",
    "NEMA 14-30",
    "NEMA 14-50",
    "4 wire dryer outlet",
    "3 wire to 4 wire conversion",
    "240 volt receptacle",
    "EV outlet wiring",
    "double pole breaker wiring"
  ],
  alternates: {
    canonical: "https://amporalabs.com/blog/240v-outlet-wiring-guide",
  },
  openGraph: {
    title: "240V Outlet Wiring Guide: Dryer, Range & EV Circuits Explained - Ampora",
    description: "Master 240V outlet wiring with this comprehensive guide covering NEMA configurations, dryer and range outlets, EV charging circuits, wire sizing, and breaker selection.",
    url: "https://amporalabs.com/blog/240v-outlet-wiring-guide",
    type: "article",
    publishedTime: "2026-03-04",
  },
};

function HeroIllustration() {
  return (
    <svg viewBox="0 0 400 180" className="w-full h-40 md:h-48" aria-label="240V outlet types showing NEMA 14-30, 14-50, and 6-50 receptacles">
      {/* Background */}
      <rect x="10" y="10" width="380" height="160" rx="4" fill="#1f2937" stroke="#374151" strokeWidth="1"/>

      {/* NEMA 14-30 Outlet */}
      <g transform="translate(45, 20)">
        <text x="45" y="12" textAnchor="middle" fill="#22d3ee" fontSize="7" fontWeight="bold">NEMA 14-30</text>
        <text x="45" y="22" textAnchor="middle" fill="#9ca3af" fontSize="5">30A Dryer</text>
        <rect x="10" y="28" width="70" height="105" rx="6" fill="#111827" stroke="#6b7280" strokeWidth="2"/>
        {/* Face plate screws */}
        <circle cx="45" cy="36" r="2" fill="#4b5563"/>
        <circle cx="45" cy="125" r="2" fill="#4b5563"/>
        {/* L-shaped hot slots */}
        <path d="M30 55 L30 70 L36 70" stroke="#ef4444" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
        <path d="M60 55 L60 70 L54 70" stroke="#ef4444" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
        {/* Neutral (L-shape bottom) */}
        <path d="M35 90 L55 90" stroke="#9ca3af" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
        {/* Ground (round hole) */}
        <circle cx="45" cy="108" r="4" fill="none" stroke="#22c55e" strokeWidth="2"/>
        {/* Labels */}
        <text x="23" y="50" fill="#ef4444" fontSize="4">HOT</text>
        <text x="54" y="50" fill="#ef4444" fontSize="4">HOT</text>
        <text x="35" y="86" fill="#9ca3af" fontSize="4">NEU</text>
        <text x="38" y="120" fill="#22c55e" fontSize="4">GND</text>
      </g>

      {/* NEMA 14-50 Outlet */}
      <g transform="translate(155, 20)">
        <text x="45" y="12" textAnchor="middle" fill="#f59e0b" fontSize="7" fontWeight="bold">NEMA 14-50</text>
        <text x="45" y="22" textAnchor="middle" fill="#9ca3af" fontSize="5">50A Range / EV</text>
        <rect x="10" y="28" width="70" height="105" rx="6" fill="#111827" stroke="#6b7280" strokeWidth="2"/>
        {/* Face plate screws */}
        <circle cx="45" cy="36" r="2" fill="#4b5563"/>
        <circle cx="45" cy="125" r="2" fill="#4b5563"/>
        {/* Angled hot slots */}
        <path d="M27 56 L33 70" stroke="#ef4444" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
        <path d="M63 56 L57 70" stroke="#ef4444" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
        {/* Neutral (straight bottom) */}
        <path d="M35 90 L55 90" stroke="#9ca3af" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
        {/* Ground (U-shape) */}
        <path d="M40 103 L40 113 L50 113 L50 103" stroke="#22c55e" strokeWidth="2" fill="none" strokeLinecap="round"/>
        {/* Labels */}
        <text x="20" y="52" fill="#ef4444" fontSize="4">HOT</text>
        <text x="57" y="52" fill="#ef4444" fontSize="4">HOT</text>
        <text x="35" y="86" fill="#9ca3af" fontSize="4">NEU</text>
        <text x="38" y="124" fill="#22c55e" fontSize="4">GND</text>
      </g>

      {/* NEMA 6-50 Outlet */}
      <g transform="translate(265, 20)">
        <text x="45" y="12" textAnchor="middle" fill="#a78bfa" fontSize="7" fontWeight="bold">NEMA 6-50</text>
        <text x="45" y="22" textAnchor="middle" fill="#9ca3af" fontSize="5">50A EV / Welder</text>
        <rect x="10" y="28" width="70" height="105" rx="6" fill="#111827" stroke="#6b7280" strokeWidth="2"/>
        {/* Face plate screws */}
        <circle cx="45" cy="36" r="2" fill="#4b5563"/>
        <circle cx="45" cy="125" r="2" fill="#4b5563"/>
        {/* Horizontal hot slots */}
        <path d="M24 62 L38 62" stroke="#ef4444" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
        <path d="M52 62 L66 62" stroke="#ef4444" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
        {/* Ground (U-shape) */}
        <path d="M40 90 L40 100 L50 100 L50 90" stroke="#22c55e" strokeWidth="2" fill="none" strokeLinecap="round"/>
        {/* Labels */}
        <text x="22" y="55" fill="#ef4444" fontSize="4">HOT</text>
        <text x="54" y="55" fill="#ef4444" fontSize="4">HOT</text>
        <text x="35" y="112" fill="#22c55e" fontSize="4">GND</text>
        {/* No neutral label */}
        <text x="25" y="82" fill="#6b7280" fontSize="4">No Neutral</text>
      </g>

      {/* Voltage label */}
      <text x="200" y="172" textAnchor="middle" fill="#374151" fontSize="5">240V Split-Phase Receptacle Configurations</text>
    </svg>
  );
}

export default function TwoFortyVOutletWiringGuidePage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navigation />
      <div className="pt-20">
        <BreadcrumbJsonLd
          items={[
            { name: "Home", url: "https://amporalabs.com" },
            { name: "Blog", url: "https://amporalabs.com/blog" },
            { name: "240V Outlet Wiring Guide", url: "https://amporalabs.com/blog/240v-outlet-wiring-guide" },
          ]}
        />
        <BlogPostingJsonLd
          headline="240V Outlet Wiring Guide: Dryer, Range & EV Circuits Explained"
          description="Complete guide to 240V outlet wiring covering NEMA configurations, dryer and range outlets, EV charging circuits, wire sizing, breaker selection, and 3-wire to 4-wire conversions."
          datePublished="2026-03-04"
          dateModified="2026-03-04"
          url="https://amporalabs.com/blog/240v-outlet-wiring-guide"
          wordCount={4800}
          keywords={["240v outlet wiring", "NEMA 14-30", "NEMA 14-50", "dryer outlet", "EV charging outlet"]}
        />

        <article className="max-w-4xl mx-auto px-6 py-12">
          {/* Breadcrumb */}
          <nav className="text-sm text-white/60 mb-8">
            <Link href="/" className="hover:text-white">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/blog" className="hover:text-white">Blog</Link>
            <span className="mx-2">/</span>
            <span className="text-white">240V Outlet Wiring Guide</span>
          </nav>

          {/* Article Header */}
          <header className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <span className="px-3 py-1 bg-emerald-600/20 text-emerald-300 text-sm font-medium rounded-full">
                Installation
              </span>
              <span className="text-white/40 text-sm">18 min read</span>
              <span className="text-white/40 text-sm">March 4, 2026</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6 leading-tight">
              240V Outlet Wiring: Dryer, Range &amp; EV Circuit Guide
            </h1>
            <p className="text-xl text-white/70">
              Whether you&apos;re wiring a dryer outlet, installing a range receptacle, or adding a 240V circuit for an EV charger, understanding NEMA configurations, proper wire sizing, and double-pole breaker selection is essential. This guide covers everything from how 240V split-phase power works to step-by-step wiring for the most common residential 240V receptacles, including the critical differences between 3-wire and 4-wire circuits.
            </p>
          </header>

          <div className="mb-12 bg-gradient-to-br from-emerald-900/20 to-cyan-900/20 rounded-2xl p-6 border border-white/10">
            <HeroIllustration />
          </div>

          {/* Safety Warning */}
          <div className="bg-red-900/40 border-2 border-red-500/50 rounded-2xl p-6 mb-12">
            <div className="flex items-start gap-4">
              <div className="text-3xl">&#9888;</div>
              <div>
                <h3 className="font-display font-bold text-lg mb-2 text-red-400">Electrical Safety Warning</h3>
                <p className="text-white/80 text-sm">
                  Working with 240V circuits is dangerous and can cause electrocution, fire, or death. Always turn off the breaker and verify power is off with a voltage tester before working on any circuit. 240V outlet installation must comply with local codes and typically requires an electrical permit. If you are not a licensed electrician, consult one before performing this work.
                </p>
              </div>
            </div>
          </div>

          {/* Table of Contents */}
          <div className="bg-white/5 rounded-2xl p-6 mb-12">
            <h2 className="font-display font-bold mb-4">In This Guide</h2>
            <ul className="space-y-2 text-white/70">
              <li><a href="#how-240v-works" className="hover:text-purple-400">How 240V Circuits Work (Split-Phase Power)</a></li>
              <li><a href="#nema-configurations" className="hover:text-purple-400">Common 240V NEMA Configurations</a></li>
              <li><a href="#3-wire-vs-4-wire" className="hover:text-purple-400">3-Wire vs 4-Wire: Old Code vs New Code</a></li>
              <li><a href="#dryer-outlet-wiring" className="hover:text-purple-400">Dryer Outlet Wiring (NEMA 14-30, 30A)</a></li>
              <li><a href="#range-outlet-wiring" className="hover:text-purple-400">Range/Oven Outlet Wiring (NEMA 14-50, 50A)</a></li>
              <li><a href="#ev-charger-outlet" className="hover:text-purple-400">EV Charger Outlet Wiring (NEMA 14-50 vs 6-50)</a></li>
              <li><a href="#wire-sizing" className="hover:text-purple-400">Wire Sizing for 240V Circuits</a></li>
              <li><a href="#breaker-selection" className="hover:text-purple-400">Double-Pole Breaker Selection</a></li>
              <li><a href="#3-to-4-wire-conversion" className="hover:text-purple-400">Converting 3-Wire to 4-Wire</a></li>
              <li><a href="#common-mistakes" className="hover:text-purple-400">Common Mistakes and Code Violations</a></li>
            </ul>
          </div>

          {/* Article Content */}
          <div className="prose prose-invert prose-lg max-w-none">

            <section id="how-240v-works" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">How 240V Circuits Work (Split-Phase Power)</h2>
              <p className="text-white/80 mb-4">
                Residential electrical service in the United States uses a <strong>split-phase 120/240V system</strong>. The utility transformer delivers two 120V &ldquo;hot&rdquo; legs (Line 1 and Line 2) that are 180 degrees out of phase with each other, plus a center-tapped neutral. Measuring between either hot leg and neutral gives you <strong>120V</strong>. Measuring between the two hot legs gives you <strong>240V</strong>.
              </p>
              <p className="text-white/80 mb-4">
                This is why 240V circuits require <strong>two hot conductors</strong> instead of one. Each hot wire carries one phase of the 120V supply, and the voltage difference between them produces the 240V needed for high-power appliances like dryers, ranges, water heaters, and <Link href="/blog/ev-charger-installation-guide" className="text-purple-400 hover:text-purple-300">EV chargers</Link>.
              </p>

              <div className="grid md:grid-cols-2 gap-6 my-6">
                <div className="bg-white/5 rounded-xl p-6">
                  <h3 className="font-semibold text-cyan-400 mb-3">120V Circuit</h3>
                  <ul className="text-white/60 text-sm space-y-1">
                    <li><strong>1 hot wire</strong> (black) &mdash; Line 1 or Line 2</li>
                    <li><strong>1 neutral wire</strong> (white) &mdash; return path</li>
                    <li><strong>1 ground wire</strong> (green/bare) &mdash; safety</li>
                    <li><strong>Single-pole breaker</strong> in the panel</li>
                    <li>Standard outlets, lights, small appliances</li>
                  </ul>
                </div>
                <div className="bg-white/5 rounded-xl p-6">
                  <h3 className="font-semibold text-emerald-400 mb-3">240V Circuit</h3>
                  <ul className="text-white/60 text-sm space-y-1">
                    <li><strong>2 hot wires</strong> (black + red) &mdash; Line 1 and Line 2</li>
                    <li><strong>1 neutral wire</strong> (white) &mdash; if needed for 120V loads</li>
                    <li><strong>1 ground wire</strong> (green/bare) &mdash; safety</li>
                    <li><strong>Double-pole breaker</strong> in the panel</li>
                    <li>Dryers, ranges, EV chargers, water heaters</li>
                  </ul>
                </div>
              </div>

              <div className="bg-white/5 rounded-xl p-6 my-6">
                <h4 className="font-semibold text-cyan-400 mb-3">Why Some 240V Circuits Need a Neutral</h4>
                <p className="text-white/70 mb-3">
                  Pure 240V loads (water heaters, well pumps, baseboard heaters) only need the two hot wires and a ground &mdash; they use a <strong>3-wire circuit</strong> (2 hots + ground, no neutral). However, appliances that also use 120V internally &mdash; like dryers (for the drum motor and controls) and ranges (for the clock, lights, and controls) &mdash; need a <strong>4-wire circuit</strong> (2 hots + neutral + ground) to provide both 240V and 120V.
                </p>
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <p className="text-lg font-bold text-cyan-400">3-Wire (no neutral)</p>
                    <p className="text-white/60 text-sm">Water heater, well pump, A/C compressor, baseboard heat, welder</p>
                  </div>
                  <div>
                    <p className="text-lg font-bold text-emerald-400">4-Wire (with neutral)</p>
                    <p className="text-white/60 text-sm">Dryer, range/oven, EV charger (NEMA 14-50), wall oven with clock</p>
                  </div>
                </div>
              </div>
            </section>

            <section id="nema-configurations" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Common 240V NEMA Configurations</h2>
              <p className="text-white/80 mb-4">
                NEMA (National Electrical Manufacturers Association) designates <Link href="/blog/receptacle-types-configurations-guide" className="text-purple-400 hover:text-purple-300">receptacle configurations</Link> with a numbering system. The first number indicates the configuration type, and the number after the dash indicates the amperage rating. Understanding these designations is critical for selecting the correct outlet for your application.
              </p>

              <div className="overflow-x-auto my-6">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-white/20">
                      <th className="text-left py-3 px-4 text-white/60">NEMA Type</th>
                      <th className="text-left py-3 px-4 text-white/60">Amperage</th>
                      <th className="text-left py-3 px-4 text-white/60">Conductors</th>
                      <th className="text-left py-3 px-4 text-white/60">Common Use</th>
                    </tr>
                  </thead>
                  <tbody className="text-white/80">
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-mono font-bold text-cyan-400">NEMA 6-20</td>
                      <td className="py-3 px-4">20A</td>
                      <td className="py-3 px-4">2 hot + ground (3-wire)</td>
                      <td className="py-3 px-4 text-white/60">Window A/C units, small equipment</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-mono font-bold text-cyan-400">NEMA 6-50</td>
                      <td className="py-3 px-4">50A</td>
                      <td className="py-3 px-4">2 hot + ground (3-wire)</td>
                      <td className="py-3 px-4 text-white/60">Welders, EV chargers, shop equipment</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-mono font-bold text-emerald-400">NEMA 10-30</td>
                      <td className="py-3 px-4">30A</td>
                      <td className="py-3 px-4">2 hot + neutral (3-wire, NO ground)</td>
                      <td className="py-3 px-4 text-white/60">Old dryer outlet (pre-1996)</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-mono font-bold text-emerald-400">NEMA 10-50</td>
                      <td className="py-3 px-4">50A</td>
                      <td className="py-3 px-4">2 hot + neutral (3-wire, NO ground)</td>
                      <td className="py-3 px-4 text-white/60">Old range outlet (pre-1996)</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-mono font-bold text-yellow-400">NEMA 14-30</td>
                      <td className="py-3 px-4">30A</td>
                      <td className="py-3 px-4">2 hot + neutral + ground (4-wire)</td>
                      <td className="py-3 px-4 text-white/60">Modern dryer outlet (post-1996)</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-mono font-bold text-yellow-400">NEMA 14-50</td>
                      <td className="py-3 px-4">50A</td>
                      <td className="py-3 px-4">2 hot + neutral + ground (4-wire)</td>
                      <td className="py-3 px-4 text-white/60">Modern range outlet, EV chargers</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="bg-purple-900/30 rounded-xl p-6 my-6">
                <h4 className="font-semibold text-purple-400 mb-3">NEMA Numbering Decoded</h4>
                <ul className="text-white/70 space-y-2 text-sm">
                  <li><strong>NEMA 6-xx:</strong> 240V only, no neutral. Two hots and a ground. Used for pure 240V loads.</li>
                  <li><strong>NEMA 10-xx:</strong> 240V with neutral but NO ground. Legacy configuration, no longer permitted for new installations.</li>
                  <li><strong>NEMA 14-xx:</strong> 240V with neutral AND ground. Modern 4-wire configuration required for new dryer and range circuits.</li>
                  <li><strong>The dash number</strong> indicates amperage: -20 = 20A, -30 = 30A, -50 = 50A.</li>
                </ul>
              </div>
            </section>

            <section id="3-wire-vs-4-wire" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">3-Wire vs 4-Wire: Old Code vs New Code</h2>
              <p className="text-white/80 mb-4">
                The <strong>1996 NEC</strong> introduced one of the most important changes in residential 240V wiring: the requirement for a <strong>separate equipment grounding conductor</strong> on dryer and range circuits. Before 1996, the NEC permitted 3-wire circuits (NEMA 10-30 and 10-50) where the neutral wire doubled as the grounding path. This practice was eliminated because it created a shock hazard.
              </p>

              <div className="grid md:grid-cols-2 gap-6 my-6">
                <div className="bg-red-900/30 rounded-xl p-6 border border-red-500/30">
                  <h3 className="font-semibold text-red-400 mb-3">Old 3-Wire (NEMA 10) &mdash; Pre-1996</h3>
                  <ul className="text-white/60 text-sm space-y-2">
                    <li><strong>Conductors:</strong> 2 hots + 1 neutral (NO ground)</li>
                    <li><strong>Problem:</strong> Neutral wire served as both the current-carrying neutral AND the equipment ground</li>
                    <li><strong>Hazard:</strong> If the neutral wire broke or came loose, the appliance frame could become energized at 120V, creating a lethal shock hazard</li>
                    <li><strong>Status:</strong> Existing 3-wire installations are grandfathered but cannot be used for new installations</li>
                    <li><strong>Receptacles:</strong> NEMA 10-30 (dryer), NEMA 10-50 (range)</li>
                  </ul>
                </div>
                <div className="bg-green-900/30 rounded-xl p-6 border border-green-500/30">
                  <h3 className="font-semibold text-green-400 mb-3">Modern 4-Wire (NEMA 14) &mdash; Post-1996</h3>
                  <ul className="text-white/60 text-sm space-y-2">
                    <li><strong>Conductors:</strong> 2 hots + 1 neutral + 1 ground (4 wires)</li>
                    <li><strong>Advantage:</strong> Neutral carries only return current; ground provides separate fault path</li>
                    <li><strong>Safety:</strong> If a ground fault occurs, current flows through the ground wire to the breaker, which trips to clear the fault</li>
                    <li><strong>Status:</strong> Required for all new dryer and range circuits per NEC 250.140</li>
                    <li><strong>Receptacles:</strong> NEMA 14-30 (dryer), NEMA 14-50 (range)</li>
                  </ul>
                </div>
              </div>

              <div className="bg-orange-900/30 rounded-xl p-6 my-6">
                <h4 className="font-semibold text-orange-400 mb-3">NEC 250.140 &mdash; The Key Code Section</h4>
                <p className="text-white/70 text-sm">
                  NEC Section 250.140 specifically addresses frames of ranges and dryers. For new branch circuits installed after the adoption of the 1996 NEC, the equipment grounding conductor (the 4th wire) is required. Existing 3-wire installations are permitted to remain in service per the exception in 250.140, but any new circuit or receptacle replacement in a new location must be 4-wire.
                </p>
              </div>
            </section>

            <section id="dryer-outlet-wiring" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Dryer Outlet Wiring (NEMA 14-30, 30A)</h2>
              <p className="text-white/80 mb-4">
                A standard residential clothes dryer requires a <strong>30-amp, 240V circuit</strong> with a <strong>NEMA 14-30 receptacle</strong>. The dryer uses 240V for the heating element and 120V (via the neutral) for the drum motor, timer, and controls. Here is how to wire a NEMA 14-30 dryer outlet correctly.
              </p>

              <div className="bg-white/5 rounded-xl p-6 my-6">
                <h4 className="font-semibold text-white mb-3">NEMA 14-30 Dryer Circuit Requirements</h4>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <tbody className="text-white/80">
                      <tr className="border-b border-white/10">
                        <td className="py-2 px-3 text-white/60">Breaker</td>
                        <td className="py-2 px-3 font-mono text-cyan-400">30A double-pole</td>
                      </tr>
                      <tr className="border-b border-white/10">
                        <td className="py-2 px-3 text-white/60">Wire (NM cable)</td>
                        <td className="py-2 px-3 font-mono text-cyan-400">10/3 NM-B (10 AWG, 3 conductors + ground)</td>
                      </tr>
                      <tr className="border-b border-white/10">
                        <td className="py-2 px-3 text-white/60">Wire (individual THHN)</td>
                        <td className="py-2 px-3 font-mono text-cyan-400">10 AWG THHN &mdash; 2 black/red + 1 white + 1 green</td>
                      </tr>
                      <tr className="border-b border-white/10">
                        <td className="py-2 px-3 text-white/60">Receptacle</td>
                        <td className="py-2 px-3 font-mono text-cyan-400">NEMA 14-30R (flush or surface mount)</td>
                      </tr>
                      <tr>
                        <td className="py-2 px-3 text-white/60">Box size</td>
                        <td className="py-2 px-3 font-mono text-cyan-400">4&Prime; square metal box or listed plastic box</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <h3 className="text-xl font-display font-semibold mb-3 text-cyan-400">Wiring Connections</h3>
              <div className="space-y-3 my-6">
                <div className="bg-white/5 rounded-xl p-4 flex items-start gap-4">
                  <span className="bg-red-600 text-white text-xs font-bold px-2 py-1 rounded">HOT</span>
                  <div>
                    <p className="text-white/80 text-sm"><strong>Black wire</strong> to one brass terminal (Line 1 &mdash; X or W terminal)</p>
                  </div>
                </div>
                <div className="bg-white/5 rounded-xl p-4 flex items-start gap-4">
                  <span className="bg-red-600 text-white text-xs font-bold px-2 py-1 rounded">HOT</span>
                  <div>
                    <p className="text-white/80 text-sm"><strong>Red wire</strong> to the other brass terminal (Line 2 &mdash; Y terminal)</p>
                  </div>
                </div>
                <div className="bg-white/5 rounded-xl p-4 flex items-start gap-4">
                  <span className="bg-gray-500 text-white text-xs font-bold px-2 py-1 rounded">NEU</span>
                  <div>
                    <p className="text-white/80 text-sm"><strong>White wire</strong> to the silver/chrome terminal (Neutral &mdash; L-shaped slot)</p>
                  </div>
                </div>
                <div className="bg-white/5 rounded-xl p-4 flex items-start gap-4">
                  <span className="bg-green-600 text-white text-xs font-bold px-2 py-1 rounded">GND</span>
                  <div>
                    <p className="text-white/80 text-sm"><strong>Green/bare wire</strong> to the green terminal (Ground &mdash; round hole)</p>
                  </div>
                </div>
              </div>

              <p className="text-white/80 mb-4">
                At the panel, connect both hot wires (black and red) to a <strong>30A double-pole breaker</strong>, the white neutral wire to the <strong>neutral bus bar</strong>, and the green/bare ground wire to the <strong>grounding bus bar</strong>. Make sure to use the correct torque on all terminal connections per manufacturer specifications. For more on <Link href="/blog/wire-sizing-guide-nec-ampacity-tables" className="text-purple-400 hover:text-purple-300">wire sizing and NEC ampacity tables</Link>, see our dedicated guide.
              </p>
            </section>

            <section id="range-outlet-wiring" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Range/Oven Outlet Wiring (NEMA 14-50, 50A)</h2>
              <p className="text-white/80 mb-4">
                Electric ranges, cooktops, and wall ovens typically require a <strong>50-amp, 240V circuit</strong> with a <strong>NEMA 14-50 receptacle</strong>. Like the dryer, a range uses both 240V (for burners and oven elements) and 120V (for the clock, lights, convenience outlet, and electronic controls).
              </p>

              <div className="bg-white/5 rounded-xl p-6 my-6">
                <h4 className="font-semibold text-white mb-3">NEMA 14-50 Range Circuit Requirements</h4>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <tbody className="text-white/80">
                      <tr className="border-b border-white/10">
                        <td className="py-2 px-3 text-white/60">Breaker</td>
                        <td className="py-2 px-3 font-mono text-cyan-400">50A double-pole</td>
                      </tr>
                      <tr className="border-b border-white/10">
                        <td className="py-2 px-3 text-white/60">Wire (NM cable)</td>
                        <td className="py-2 px-3 font-mono text-cyan-400">6/3 NM-B (6 AWG, 3 conductors + ground)</td>
                      </tr>
                      <tr className="border-b border-white/10">
                        <td className="py-2 px-3 text-white/60">Wire (individual THHN)</td>
                        <td className="py-2 px-3 font-mono text-cyan-400">6 AWG THHN &mdash; 2 black/red + 1 white + 1 green</td>
                      </tr>
                      <tr className="border-b border-white/10">
                        <td className="py-2 px-3 text-white/60">Receptacle</td>
                        <td className="py-2 px-3 font-mono text-cyan-400">NEMA 14-50R (typically surface mount)</td>
                      </tr>
                      <tr>
                        <td className="py-2 px-3 text-white/60">Box size</td>
                        <td className="py-2 px-3 font-mono text-cyan-400">4-11/16&Prime; square metal box or listed enclosure</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <p className="text-white/80 mb-4">
                The wiring connections for a NEMA 14-50 follow the same color-code pattern as the 14-30: <strong>black and red to the hot (brass) terminals</strong>, <strong>white to the neutral (silver) terminal</strong>, and <strong>green/bare to the ground (green) terminal</strong>. The key difference is the heavier <strong>6 AWG wire</strong> required for the 50A circuit versus the 10 AWG used for 30A dryer circuits.
              </p>

              <div className="bg-orange-900/30 rounded-xl p-6 my-6">
                <h4 className="font-semibold text-orange-400 mb-3">Important: Wire Sizing for 50A Circuits</h4>
                <p className="text-white/70 text-sm mb-2">
                  NEC Table 310.16 requires a minimum of <strong>6 AWG copper</strong> conductors for a 50A circuit. However, for long runs you may need to upsize the wire to account for <Link href="/blog/how-to-calculate-voltage-drop" className="text-purple-400 hover:text-purple-300">voltage drop</Link>. The NEC recommends keeping voltage drop to 3% or less for branch circuits. For a 50A, 240V circuit:
                </p>
                <ul className="text-white/60 text-sm space-y-1">
                  <li><strong>Up to ~55 ft:</strong> 6 AWG copper is sufficient</li>
                  <li><strong>55&ndash;85 ft:</strong> Consider upsizing to 4 AWG copper</li>
                  <li><strong>85+ ft:</strong> Use 3 AWG or larger copper, or perform a voltage drop calculation</li>
                </ul>
              </div>

              <div className="bg-white/5 rounded-xl p-6 my-6">
                <h4 className="font-semibold text-cyan-400 mb-3">NEC 210.19(A)(3) &mdash; Range Load Reduction</h4>
                <p className="text-white/70 text-sm">
                  NEC Table 220.55 allows demand factor reductions for household cooking equipment. For a single range rated 12 kW or less, the maximum demand load is 8 kW. This means the branch-circuit conductor can be sized per the calculated load rather than the nameplate rating, but the minimum branch-circuit rating for a range is still <strong>40A</strong> per NEC 210.19(A)(3). Most electricians install a 50A circuit to accommodate any standard residential range.
                </p>
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

            <section id="ev-charger-outlet" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">EV Charger Outlet Wiring (NEMA 14-50 vs 6-50)</h2>
              <p className="text-white/80 mb-4">
                Level 2 <Link href="/blog/ev-charger-installation-guide" className="text-purple-400 hover:text-purple-300">EV charger installation</Link> requires a 240V circuit, and the two most common outlet options are <strong>NEMA 14-50</strong> and <strong>NEMA 6-50</strong>. The choice depends on the specific EV charger (EVSE) you are using and whether you need the flexibility of a plug-in unit versus a hardwired installation.
              </p>

              <div className="grid md:grid-cols-2 gap-6 my-6">
                <div className="bg-yellow-900/20 rounded-xl p-6 border border-yellow-500/20">
                  <h3 className="font-semibold text-yellow-400 mb-3">NEMA 14-50 for EV Charging</h3>
                  <ul className="text-white/60 text-sm space-y-2">
                    <li><strong>Conductors:</strong> 2 hots + neutral + ground (4-wire)</li>
                    <li><strong>Amperage:</strong> 50A circuit, charger draws up to 40A continuous</li>
                    <li><strong>Wire:</strong> 6 AWG copper (6/3 NM-B or THHN in conduit)</li>
                    <li><strong>Best for:</strong> Tesla Mobile Connector, portable EVSEs, flexibility to plug in different devices</li>
                    <li><strong>Note:</strong> The neutral is present but most EV chargers do not use it</li>
                  </ul>
                </div>
                <div className="bg-purple-900/20 rounded-xl p-6 border border-purple-500/20">
                  <h3 className="font-semibold text-purple-400 mb-3">NEMA 6-50 for EV Charging</h3>
                  <ul className="text-white/60 text-sm space-y-2">
                    <li><strong>Conductors:</strong> 2 hots + ground (3-wire, no neutral)</li>
                    <li><strong>Amperage:</strong> 50A circuit, charger draws up to 40A continuous</li>
                    <li><strong>Wire:</strong> 6 AWG copper (6/2 NM-B or THHN in conduit)</li>
                    <li><strong>Best for:</strong> Dedicated EV wall chargers (ChargePoint, Grizzl-E, JuiceBox)</li>
                    <li><strong>Advantage:</strong> Slightly less expensive (one fewer conductor)</li>
                  </ul>
                </div>
              </div>

              <div className="bg-white/5 rounded-xl p-6 my-6">
                <h4 className="font-semibold text-cyan-400 mb-3">NEC 625.40 &mdash; Continuous Load Rule</h4>
                <p className="text-white/70 text-sm mb-2">
                  EV charging is classified as a <strong>continuous load</strong> under NEC Article 625 because charging sessions typically exceed 3 hours. Per NEC 210.20, the circuit breaker must be rated at <strong>125% of the continuous load</strong>. This means:
                </p>
                <ul className="text-white/60 text-sm space-y-1">
                  <li>A 40A charger requires a <strong>50A breaker</strong> (40A x 1.25 = 50A)</li>
                  <li>A 32A charger requires a <strong>40A breaker</strong> (32A x 1.25 = 40A)</li>
                  <li>A 24A charger requires a <strong>30A breaker</strong> (24A x 1.25 = 30A)</li>
                </ul>
                <p className="text-white/60 text-sm mt-2">
                  This is why a 50A outlet with a 50A breaker can only supply an EV charger that draws a maximum of 40A.
                </p>
              </div>

              <div className="bg-emerald-900/30 rounded-xl p-6 my-6">
                <h4 className="font-semibold text-emerald-400 mb-3">Which EV Outlet Should You Install?</h4>
                <p className="text-white/70 text-sm mb-3">
                  If you are unsure which outlet to install, <strong>NEMA 14-50 is the most versatile choice</strong>. It works with virtually every portable EV charger on the market, the Tesla Mobile Connector, and most wall-mounted EVSEs. A NEMA 6-50 saves slightly on wire cost but limits your options if you later switch charger brands.
                </p>
                <p className="text-white/70 text-sm">
                  Many electricians recommend a <strong>hardwired installation</strong> for permanent wall-mount chargers. This eliminates the receptacle entirely and connects the EVSE directly to the circuit wiring, which can be more reliable and may allow higher amperage ratings at the same wire size.
                </p>
              </div>
            </section>

            <section id="wire-sizing" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Wire Sizing for 240V Circuits</h2>
              <p className="text-white/80 mb-4">
                Selecting the correct wire size is critical for safety, code compliance, and performance of any 240V circuit. Wire must be sized based on the <strong>circuit breaker amperage</strong>, with adjustments for <Link href="/blog/how-to-calculate-voltage-drop" className="text-purple-400 hover:text-purple-300">voltage drop</Link> on longer runs. Refer to <Link href="/blog/wire-sizing-guide-nec-ampacity-tables" className="text-purple-400 hover:text-purple-300">NEC ampacity tables</Link> for the authoritative source, but here is a quick reference for common 240V circuits.
              </p>

              <div className="overflow-x-auto my-6">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-white/20">
                      <th className="text-left py-3 px-4 text-white/60">Breaker Size</th>
                      <th className="text-left py-3 px-4 text-white/60">Copper Wire (NM-B)</th>
                      <th className="text-left py-3 px-4 text-white/60">Copper Wire (THHN)</th>
                      <th className="text-left py-3 px-4 text-white/60">Typical Application</th>
                    </tr>
                  </thead>
                  <tbody className="text-white/80">
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-mono text-cyan-400">20A</td>
                      <td className="py-3 px-4">12 AWG</td>
                      <td className="py-3 px-4">12 AWG</td>
                      <td className="py-3 px-4 text-white/60">Window A/C, small equipment</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-mono text-cyan-400">30A</td>
                      <td className="py-3 px-4">10 AWG</td>
                      <td className="py-3 px-4">10 AWG</td>
                      <td className="py-3 px-4 text-white/60">Dryer, water heater, small EV charger</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-mono text-cyan-400">40A</td>
                      <td className="py-3 px-4">8 AWG</td>
                      <td className="py-3 px-4">8 AWG</td>
                      <td className="py-3 px-4 text-white/60">Cooktop, 32A EV charger</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-mono text-cyan-400">50A</td>
                      <td className="py-3 px-4">6 AWG</td>
                      <td className="py-3 px-4">6 AWG</td>
                      <td className="py-3 px-4 text-white/60">Range, 40A EV charger, welder</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-mono text-cyan-400">60A</td>
                      <td className="py-3 px-4">6 AWG (60&deg;C) / 4 AWG</td>
                      <td className="py-3 px-4">6 AWG</td>
                      <td className="py-3 px-4 text-white/60">Sub-panel feed, large equipment</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="bg-red-900/30 rounded-xl p-6 my-6">
                <h4 className="font-semibold text-red-400 mb-3">Critical: Temperature Rating Matters</h4>
                <p className="text-white/70 text-sm">
                  NM-B cable (Romex) is rated at <strong>60&deg;C</strong> at the terminals per NEC 334.80, even though the conductors inside are rated higher. This means you must use the <strong>60&deg;C column</strong> of NEC Table 310.16 when sizing NM-B cable. THHN wire in conduit is rated at 90&deg;C but must typically be derated to <strong>75&deg;C</strong> for termination purposes. This distinction matters most at 60A and higher where the columns diverge. Consult <Link href="/blog/nec-article-240-overcurrent-protection" className="text-purple-400 hover:text-purple-300">NEC overcurrent protection rules</Link> for the complete picture.
                </p>
              </div>
            </section>

            <section id="breaker-selection" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Double-Pole Breaker Selection</h2>
              <p className="text-white/80 mb-4">
                Every 240V circuit requires a <strong>double-pole circuit breaker</strong> that simultaneously connects to both Line 1 and Line 2 in the panel. The breaker protects both hot conductors and trips both poles together if an overcurrent condition occurs on either leg. This is fundamentally different from using two single-pole breakers with a handle tie, though handle-tied singles are permitted for some applications.
              </p>

              <div className="bg-white/5 rounded-xl p-6 my-6">
                <h4 className="font-semibold text-white mb-3">Double-Pole Breaker Key Points</h4>
                <ul className="space-y-2 text-white/70">
                  <li><strong>Internal linkage:</strong> A true double-pole breaker has an internal mechanism that trips both poles if either pole detects a fault. This is critical for 240V safety.</li>
                  <li><strong>Panel compatibility:</strong> The breaker must be listed for your specific panel brand and model. Do not interchange breakers between brands unless UL classified for that use.</li>
                  <li><strong>Stab-on position:</strong> Double-pole breakers take up two adjacent slots in the panel and must straddle both bus bars (Line 1 and Line 2).</li>
                  <li><strong>GFCI/AFCI options:</strong> Double-pole GFCI breakers are available for 240V circuits that require ground-fault protection (e.g., spa circuits per NEC 680.44). Double-pole AFCI breakers exist for branch circuits requiring arc-fault protection.</li>
                </ul>
              </div>

              <div className="grid md:grid-cols-2 gap-6 my-6">
                <div className="bg-white/5 rounded-xl p-6">
                  <h3 className="font-semibold text-cyan-400 mb-3">Common Double-Pole Sizes</h3>
                  <ul className="text-white/60 text-sm space-y-1">
                    <li><strong>20A DP:</strong> Window A/C, NEMA 6-20 circuits</li>
                    <li><strong>30A DP:</strong> Dryer (NEMA 14-30), water heater</li>
                    <li><strong>40A DP:</strong> Cooktop, 32A EV charger</li>
                    <li><strong>50A DP:</strong> Range (NEMA 14-50), 40A EV</li>
                    <li><strong>60A DP:</strong> Sub-panel, large A/C unit</li>
                  </ul>
                </div>
                <div className="bg-white/5 rounded-xl p-6">
                  <h3 className="font-semibold text-orange-400 mb-3">Panel Connection Tips</h3>
                  <ul className="text-white/60 text-sm space-y-1">
                    <li>Black wire to one breaker terminal</li>
                    <li>Red wire to the other breaker terminal</li>
                    <li>White (neutral) to the neutral bus bar</li>
                    <li>Green/bare (ground) to the grounding bus bar</li>
                    <li>Torque terminals to manufacturer specs</li>
                  </ul>
                </div>
              </div>
            </section>

            <section id="3-to-4-wire-conversion" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Converting 3-Wire to 4-Wire</h2>
              <p className="text-white/80 mb-4">
                Many older homes have <strong>3-wire dryer outlets (NEMA 10-30)</strong> or <strong>3-wire range outlets (NEMA 10-50)</strong> that lack a separate equipment grounding conductor. While the NEC allows existing 3-wire installations to remain, converting to a 4-wire circuit is the safest option and is required for new installations.
              </p>

              <h3 className="text-xl font-display font-semibold mb-3 text-cyan-400">Option 1: Run New 4-Wire Cable (Best Option)</h3>
              <p className="text-white/80 mb-4">
                The ideal solution is to run a completely new cable from the panel to the outlet location. This provides a proper 4-wire circuit with a dedicated ground conductor, meeting current NEC requirements.
              </p>
              <div className="space-y-3 my-6">
                <div className="bg-white/5 rounded-xl p-4 flex items-start gap-4">
                  <span className="bg-cyan-600 text-white text-sm font-bold px-3 py-1 rounded-full">1</span>
                  <div>
                    <p className="font-semibold text-white">Turn off the breaker</p>
                    <p className="text-white/60 text-sm">De-energize the circuit and verify with a voltage tester. Lock out the panel if possible.</p>
                  </div>
                </div>
                <div className="bg-white/5 rounded-xl p-4 flex items-start gap-4">
                  <span className="bg-cyan-600 text-white text-sm font-bold px-3 py-1 rounded-full">2</span>
                  <div>
                    <p className="font-semibold text-white">Remove the old 3-wire cable and NEMA 10 receptacle</p>
                    <p className="text-white/60 text-sm">Disconnect the old cable at both the panel and the outlet box.</p>
                  </div>
                </div>
                <div className="bg-white/5 rounded-xl p-4 flex items-start gap-4">
                  <span className="bg-cyan-600 text-white text-sm font-bold px-3 py-1 rounded-full">3</span>
                  <div>
                    <p className="font-semibold text-white">Run new 4-wire cable</p>
                    <p className="text-white/60 text-sm">Install 10/3 NM-B (for 30A dryer) or 6/3 NM-B (for 50A range) from the panel to the outlet location.</p>
                  </div>
                </div>
                <div className="bg-white/5 rounded-xl p-4 flex items-start gap-4">
                  <span className="bg-cyan-600 text-white text-sm font-bold px-3 py-1 rounded-full">4</span>
                  <div>
                    <p className="font-semibold text-white">Install the new NEMA 14 receptacle</p>
                    <p className="text-white/60 text-sm">Connect the 4 wires to the NEMA 14-30R (dryer) or NEMA 14-50R (range) receptacle.</p>
                  </div>
                </div>
                <div className="bg-white/5 rounded-xl p-4 flex items-start gap-4">
                  <span className="bg-cyan-600 text-white text-sm font-bold px-3 py-1 rounded-full">5</span>
                  <div>
                    <p className="font-semibold text-white">Connect at the panel and test</p>
                    <p className="text-white/60 text-sm">Connect to the double-pole breaker, neutral bus, and ground bus. Energize and test for proper voltage (240V hot-to-hot, 120V hot-to-neutral).</p>
                  </div>
                </div>
              </div>

              <h3 className="text-xl font-display font-semibold mb-3 text-cyan-400">Option 2: Add a Ground Wire (Where Feasible)</h3>
              <p className="text-white/80 mb-4">
                NEC 250.130(C) permits retrofitting a ground wire to an existing circuit by running a separate equipment grounding conductor from the outlet box back to the panel&apos;s grounding bus, to the grounding electrode system, or to another accessible point on the grounding electrode conductor. This avoids the cost of running an entirely new cable.
              </p>

              <div className="bg-yellow-900/30 rounded-xl p-6 my-6">
                <h4 className="font-semibold text-yellow-400 mb-3">Converting the Appliance Cord</h4>
                <p className="text-white/70 text-sm mb-2">
                  When converting from a 3-wire to a 4-wire setup, you also need to change the appliance cord. On a 3-wire (NEMA 10) cord, a bonding strap or wire connects the neutral terminal to the appliance frame. When switching to a 4-wire (NEMA 14) cord:
                </p>
                <ol className="text-white/60 text-sm space-y-1 list-decimal list-inside">
                  <li><strong>Remove the bonding strap</strong> connecting neutral to the frame</li>
                  <li>Connect the green wire from the new cord to the <strong>frame ground screw</strong></li>
                  <li>Connect the white wire to the <strong>neutral terminal</strong></li>
                  <li>Connect the black and red wires to the <strong>hot terminals</strong></li>
                </ol>
                <p className="text-white/60 text-sm mt-2">Failure to remove the bonding strap defeats the purpose of the 4-wire system and creates a shock hazard.</p>
              </div>
            </section>

            <section id="common-mistakes" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Common Mistakes and Code Violations</h2>
              <p className="text-white/80 mb-4">
                240V outlet wiring mistakes are among the most dangerous residential electrical errors because of the higher voltage and current involved. Here are the most common problems electricians and inspectors encounter.
              </p>

              <div className="grid md:grid-cols-2 gap-4 my-6">
                <div className="bg-red-900/20 rounded-xl p-6 border border-red-500/20">
                  <h4 className="font-semibold text-red-400 mb-3">Using Wrong Wire Size</h4>
                  <p className="text-white/60 text-sm">
                    Installing 12 AWG on a 30A circuit or 10 AWG on a 50A circuit. Undersized wire overheats and causes fires. Always match wire size to the breaker amperage per NEC Table 310.16.
                  </p>
                </div>
                <div className="bg-red-900/20 rounded-xl p-6 border border-red-500/20">
                  <h4 className="font-semibold text-red-400 mb-3">Bootleg Ground on 3-Wire</h4>
                  <p className="text-white/60 text-sm">
                    Connecting a jumper wire from the neutral terminal to the ground terminal on a NEMA 14 receptacle when only 3 wires are present. This creates a dangerous false ground that defeats the purpose of a separate grounding conductor.
                  </p>
                </div>
                <div className="bg-red-900/20 rounded-xl p-6 border border-red-500/20">
                  <h4 className="font-semibold text-red-400 mb-3">Swapped Neutral and Ground</h4>
                  <p className="text-white/60 text-sm">
                    Connecting the white neutral wire to the ground terminal and the green ground wire to the neutral terminal. This puts current on the ground wire and leaves the neutral ungrounded, a serious shock and fire hazard.
                  </p>
                </div>
                <div className="bg-red-900/20 rounded-xl p-6 border border-red-500/20">
                  <h4 className="font-semibold text-red-400 mb-3">Not Removing Bonding Strap</h4>
                  <p className="text-white/60 text-sm">
                    When converting a dryer or range to a 4-wire cord, failing to remove the bonding strap that connects neutral to the appliance frame. This maintains the unsafe neutral-to-frame bond that the 4-wire system is designed to eliminate.
                  </p>
                </div>
                <div className="bg-red-900/20 rounded-xl p-6 border border-red-500/20">
                  <h4 className="font-semibold text-red-400 mb-3">Wrong Receptacle for Application</h4>
                  <p className="text-white/60 text-sm">
                    Installing a NEMA 14-50 (50A) receptacle on a 30A circuit, or a NEMA 14-30 on a 50A circuit. The receptacle must match the circuit amperage. NEC 210.21(B) requires the receptacle rating to match the branch-circuit rating for single-receptacle circuits.
                  </p>
                </div>
                <div className="bg-red-900/20 rounded-xl p-6 border border-red-500/20">
                  <h4 className="font-semibold text-red-400 mb-3">Loose Connections</h4>
                  <p className="text-white/60 text-sm">
                    Failing to properly torque terminal screws on receptacles and breakers. Loose connections cause arcing, overheating, and are a leading cause of electrical fires. Use a torque screwdriver per NEC 110.14(D).
                  </p>
                </div>
                <div className="bg-red-900/20 rounded-xl p-6 border border-red-500/20">
                  <h4 className="font-semibold text-red-400 mb-3">Two Single-Pole Breakers Instead of Double-Pole</h4>
                  <p className="text-white/60 text-sm">
                    Using two individual single-pole breakers without an approved handle tie for a 240V circuit. If only one breaker trips, the circuit remains energized at 120V, which can damage equipment or create a shock hazard during troubleshooting.
                  </p>
                </div>
                <div className="bg-red-900/20 rounded-xl p-6 border border-red-500/20">
                  <h4 className="font-semibold text-red-400 mb-3">Ignoring Voltage Drop on Long Runs</h4>
                  <p className="text-white/60 text-sm">
                    Running 6 AWG wire 100+ feet without calculating <Link href="/blog/how-to-calculate-voltage-drop" className="text-purple-400 hover:text-purple-300">voltage drop</Link>. Excessive voltage drop causes appliances to run inefficiently, overheat, and can damage sensitive electronics in modern ranges and EV chargers.
                  </p>
                </div>
              </div>

              <div className="bg-cyan-900/30 rounded-xl p-6 my-6">
                <h4 className="font-semibold text-cyan-400 mb-3">Pre-Installation Checklist</h4>
                <ul className="text-white/70 space-y-2 text-sm">
                  <li>&#9744; Verify panel has space for a double-pole breaker</li>
                  <li>&#9744; Confirm total panel load can handle the new circuit</li>
                  <li>&#9744; Select correct NEMA receptacle for the application</li>
                  <li>&#9744; Size wire per NEC Table 310.16 for the breaker amperage</li>
                  <li>&#9744; Calculate voltage drop for runs over 50 feet</li>
                  <li>&#9744; Obtain electrical permit from local AHJ</li>
                  <li>&#9744; Use correct cable type (NM-B for dry locations, UF-B for wet)</li>
                  <li>&#9744; Verify box fill per <Link href="/blog/box-fill-calculations-nec-314" className="text-purple-400 hover:text-purple-300">NEC 314.16</Link></li>
                  <li>&#9744; Plan cable route and support per NEC 334.30</li>
                  <li>&#9744; Verify receptacle is accessible (not blocked by the appliance)</li>
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
                <Link href="/blog/ev-charger-installation-guide" className="bg-white/5 hover:bg-white/10 rounded-xl p-6 transition-colors">
                  <span className="text-emerald-400 text-sm">Installation</span>
                  <h3 className="font-semibold mt-2">EV Charger Installation Guide: NEC Requirements & Best Practices</h3>
                </Link>
                <Link href="/blog/receptacle-types-configurations-guide" className="bg-white/5 hover:bg-white/10 rounded-xl p-6 transition-colors">
                  <span className="text-cyan-400 text-sm">Materials</span>
                  <h3 className="font-semibold mt-2">Receptacle Types & Configurations Guide</h3>
                </Link>
                <Link href="/blog/wire-sizing-guide-nec-ampacity-tables" className="bg-white/5 hover:bg-white/10 rounded-xl p-6 transition-colors">
                  <span className="text-blue-400 text-sm">Calculations</span>
                  <h3 className="font-semibold mt-2">Wire Sizing Guide: NEC Ampacity Tables Explained</h3>
                </Link>
                <Link href="/blog/nec-article-210-branch-circuits-guide" className="bg-white/5 hover:bg-white/10 rounded-xl p-6 transition-colors">
                  <span className="text-purple-400 text-sm">NEC Code</span>
                  <h3 className="font-semibold mt-2">NEC Article 210: Branch Circuits Guide</h3>
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
