import { Metadata } from "next";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import { BlogPostingJsonLd, BreadcrumbJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Conduit Bending Calculations: Offsets, Kicks & Saddle Bends Guide",
  description: "Master conduit bending calculations for offset bends, saddle bends, kick 90s, and stub-ups. Includes offset multiplier tables (10-60 degrees), shrink constants, 3-point and 4-point saddle formulas, segment bending for large EMT/rigid conduit, and field-proven tips for accurate, consistent bends every time.",
  keywords: [
    "conduit bending calculations",
    "offset bend multiplier",
    "saddle bend conduit",
    "conduit bending formulas",
    "EMT bending",
    "kick 90",
    "conduit shrink calculation",
    "bending multiplier chart",
    "conduit offset formula",
    "electrical conduit bending"
  ],
  alternates: {
    canonical: "https://amporalabs.com/blog/conduit-bending-calculations",
  },
  openGraph: {
    title: "Conduit Bending Calculations: Offsets, Kicks & Saddle Bends Guide - Ampora",
    description: "Complete guide to conduit bending calculations including offset multipliers, shrink constants, saddle bends, kick 90s, and segment bending techniques for electricians.",
    url: "https://amporalabs.com/blog/conduit-bending-calculations",
    type: "article",
    publishedTime: "2026-03-04",
  },
};

function HeroIllustration() {
  return (
    <svg viewBox="0 0 400 180" className="w-full h-40 md:h-48" aria-label="Conduit bending diagrams showing offset bend, saddle bend, and 90-degree stub-up">
      {/* Background */}
      <rect x="10" y="10" width="380" height="160" rx="4" fill="#1f2937" stroke="#374151" strokeWidth="1"/>

      {/* 90-Degree Stub-Up */}
      <g transform="translate(25, 20)">
        <text x="40" y="12" textAnchor="middle" fill="#22d3ee" fontSize="7" fontWeight="bold">90&deg; STUB-UP</text>
        {/* Vertical conduit */}
        <line x1="40" y1="22" x2="40" y2="75" stroke="#60a5fa" strokeWidth="3" strokeLinecap="round"/>
        {/* Bend arc */}
        <path d="M40 75 Q40 95 60 95" fill="none" stroke="#60a5fa" strokeWidth="3" strokeLinecap="round"/>
        {/* Horizontal conduit */}
        <line x1="60" y1="95" x2="95" y2="95" stroke="#60a5fa" strokeWidth="3" strokeLinecap="round"/>
        {/* Angle arc indicator */}
        <path d="M40 80 Q40 88 48 88" fill="none" stroke="#fbbf24" strokeWidth="1" strokeDasharray="2,2"/>
        <text x="50" y="86" fill="#fbbf24" fontSize="6">90&deg;</text>
        {/* Stub-up arrow */}
        <line x1="25" y1="22" x2="25" y2="75" stroke="#9ca3af" strokeWidth="0.5" strokeDasharray="2,2"/>
        <text x="18" y="50" fill="#9ca3af" fontSize="5" transform="rotate(-90, 18, 50)">Stub</text>
        {/* Deduct mark */}
        <circle cx="40" cy="75" r="2" fill="#ef4444"/>
        <text x="30" y="78" fill="#ef4444" fontSize="5" textAnchor="end">Deduct</text>
      </g>

      {/* Offset Bend */}
      <g transform="translate(140, 20)">
        <text x="55" y="12" textAnchor="middle" fill="#22d3ee" fontSize="7" fontWeight="bold">OFFSET BEND</text>
        {/* First straight section */}
        <line x1="10" y1="50" x2="35" y2="50" stroke="#60a5fa" strokeWidth="3" strokeLinecap="round"/>
        {/* First bend going up */}
        <line x1="35" y1="50" x2="70" y2="90" stroke="#60a5fa" strokeWidth="3" strokeLinecap="round"/>
        {/* Second straight section (offset) */}
        <line x1="70" y1="90" x2="105" y2="90" stroke="#60a5fa" strokeWidth="3" strokeLinecap="round"/>
        {/* Offset distance arrow */}
        <line x1="108" y1="50" x2="108" y2="90" stroke="#fbbf24" strokeWidth="0.7" strokeDasharray="2,2"/>
        <text x="118" y="73" fill="#fbbf24" fontSize="5" textAnchor="middle">Offset</text>
        {/* Dashed original line */}
        <line x1="35" y1="50" x2="105" y2="50" stroke="#9ca3af" strokeWidth="0.5" strokeDasharray="2,2"/>
        {/* Angle indicator */}
        <path d="M42 50 Q42 55 45 57" fill="none" stroke="#fbbf24" strokeWidth="1"/>
        <text x="48" y="47" fill="#fbbf24" fontSize="5">&theta;</text>
        {/* Bend marks */}
        <circle cx="35" cy="50" r="2" fill="#ef4444"/>
        <circle cx="70" cy="90" r="2" fill="#ef4444"/>
        {/* Multiplier note */}
        <text x="55" y="130" textAnchor="middle" fill="#a78bfa" fontSize="5">Distance = Offset &times; Multiplier</text>
      </g>

      {/* Saddle Bend */}
      <g transform="translate(275, 20)">
        <text x="50" y="12" textAnchor="middle" fill="#22d3ee" fontSize="7" fontWeight="bold">3-PT SADDLE</text>
        {/* First straight section */}
        <line x1="5" y1="80" x2="25" y2="80" stroke="#60a5fa" strokeWidth="3" strokeLinecap="round"/>
        {/* Up bend */}
        <line x1="25" y1="80" x2="45" y2="55" stroke="#60a5fa" strokeWidth="3" strokeLinecap="round"/>
        {/* Center bend back down */}
        <line x1="45" y1="55" x2="65" y2="80" stroke="#60a5fa" strokeWidth="3" strokeLinecap="round"/>
        {/* Last straight section */}
        <line x1="65" y1="80" x2="95" y2="80" stroke="#60a5fa" strokeWidth="3" strokeLinecap="round"/>
        {/* Obstacle box */}
        <rect x="35" y="80" width="25" height="18" rx="2" fill="#ef4444" fillOpacity="0.2" stroke="#ef4444" strokeWidth="1"/>
        <text x="47" y="92" textAnchor="middle" fill="#ef4444" fontSize="5">Obstacle</text>
        {/* Saddle depth */}
        <line x1="45" y1="55" x2="45" y2="80" stroke="#fbbf24" strokeWidth="0.7" strokeDasharray="2,2"/>
        <text x="43" y="68" fill="#fbbf24" fontSize="5" textAnchor="end">Depth</text>
        {/* Bend marks */}
        <circle cx="25" cy="80" r="2" fill="#ef4444"/>
        <circle cx="45" cy="55" r="2" fill="#a78bfa"/>
        <circle cx="65" cy="80" r="2" fill="#ef4444"/>
        {/* Angle labels */}
        <text x="28" y="75" fill="#fbbf24" fontSize="5">22.5&deg;</text>
        <text x="48" y="52" fill="#a78bfa" fontSize="5">45&deg;</text>
        <text x="60" y="75" fill="#fbbf24" fontSize="5">22.5&deg;</text>
      </g>

      {/* Bottom formula bar */}
      <rect x="20" y="140" width="360" height="22" rx="3" fill="#111827" stroke="#374151" strokeWidth="0.5"/>
      <text x="200" y="154" textAnchor="middle" fill="#a78bfa" fontSize="7" fontFamily="monospace">
        Travel = Offset &times; Multiplier &nbsp; | &nbsp; Shrink = Offset &times; Shrink Constant
      </text>
    </svg>
  );
}

export default function ConduitBendingCalculationsPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navigation />
      <div className="pt-20">
        <BreadcrumbJsonLd
          items={[
            { name: "Home", url: "https://amporalabs.com" },
            { name: "Blog", url: "https://amporalabs.com/blog" },
            { name: "Conduit Bending Calculations", url: "https://amporalabs.com/blog/conduit-bending-calculations" },
          ]}
        />
        <BlogPostingJsonLd
          headline="Conduit Bending Calculations: Offsets, Kicks & Saddle Bends Guide"
          description="Complete guide to conduit bending calculations including offset multipliers, shrink constants, saddle bends, kick 90s, and segment bending techniques for electricians."
          datePublished="2026-03-04"
          dateModified="2026-03-04"
          url="https://amporalabs.com/blog/conduit-bending-calculations"
          wordCount={4800}
          keywords={["conduit bending calculations", "offset bend multiplier", "saddle bend conduit", "EMT bending", "kick 90"]}
        />

        <article className="max-w-4xl mx-auto px-6 py-12">
          {/* Breadcrumb */}
          <nav className="text-sm text-white/60 mb-8">
            <Link href="/" className="hover:text-white">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/blog" className="hover:text-white">Blog</Link>
            <span className="mx-2">/</span>
            <span className="text-white">Conduit Bending Calculations</span>
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
              Conduit Bending Calculations: Offsets, Kicks &amp; Saddle Bends Guide
            </h1>
            <p className="text-xl text-white/70">
              Accurate conduit bending separates professional electricians from amateurs. This guide covers the essential calculations for every type of bend you will encounter in the field &mdash; 90-degree stub-ups, offset bends with multiplier and shrink tables, 3-point and 4-point saddle bends, kick 90s, and segment bending for larger conduit sizes. Master these formulas and you will bend clean, consistent runs every time.
            </p>
          </header>

          <div className="mb-12 bg-gradient-to-br from-amber-900/20 to-cyan-900/20 rounded-2xl p-6 border border-white/10">
            <HeroIllustration />
          </div>

          {/* Table of Contents */}
          <div className="bg-white/5 rounded-2xl p-6 mb-12">
            <h2 className="font-display font-bold mb-4">In This Guide</h2>
            <ul className="space-y-2 text-white/70">
              <li><a href="#types-of-bends" className="hover:text-purple-400">Types of Conduit Bends</a></li>
              <li><a href="#90-degree-bends" className="hover:text-purple-400">90-Degree Bends and Stub-Ups</a></li>
              <li><a href="#offset-bends" className="hover:text-purple-400">Offset Bends with Multiplier Table</a></li>
              <li><a href="#shrink-calculations" className="hover:text-purple-400">Shrink Calculations for Offsets</a></li>
              <li><a href="#saddle-bends" className="hover:text-purple-400">3-Point and 4-Point Saddle Bends</a></li>
              <li><a href="#kick-90s" className="hover:text-purple-400">Kick 90s (Combination Bends)</a></li>
              <li><a href="#segment-bending" className="hover:text-purple-400">Segment Bending for Large Conduit</a></li>
              <li><a href="#common-mistakes" className="hover:text-purple-400">Common Bending Mistakes</a></li>
              <li><a href="#tips-consistent-bends" className="hover:text-purple-400">Tips for Consistent Bends</a></li>
            </ul>
          </div>

          {/* Article Content */}
          <div className="prose prose-invert prose-lg max-w-none">

            <section id="types-of-bends" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Types of Conduit Bends</h2>
              <p className="text-white/80 mb-4">
                Every conduit installation requires some combination of bends to route the raceway around obstacles, change direction, and transition between surfaces. Understanding the basic bend types and when to use each one is the foundation of competent conduit work. The NEC limits conduit runs to a maximum of <strong>360 degrees of total bends</strong> between pull points (NEC 358.26 for EMT, NEC 344.26 for rigid).
              </p>

              <div className="grid md:grid-cols-2 gap-6 my-6">
                <div className="bg-white/5 rounded-xl p-6">
                  <h3 className="font-semibold text-cyan-400 mb-3">Basic Bend Types</h3>
                  <ul className="text-white/60 text-sm space-y-2">
                    <li><strong>90-degree stub-up:</strong> Changes direction by 90 degrees for vertical-to-horizontal transitions</li>
                    <li><strong>Back-to-back 90s:</strong> Two 90-degree bends creating a U-shape or Z-path</li>
                    <li><strong>Offset bend:</strong> Two equal-angle bends that shift the conduit to a parallel plane</li>
                    <li><strong>3-point saddle:</strong> Three bends that rise over an obstacle and return to the original plane</li>
                    <li><strong>4-point saddle:</strong> Four bends forming a trapezoidal path over an obstacle</li>
                    <li><strong>Kick 90 (kick bend):</strong> A 90-degree bend combined with a small offset at the base</li>
                  </ul>
                </div>
                <div className="bg-white/5 rounded-xl p-6">
                  <h3 className="font-semibold text-amber-400 mb-3">Bender Types by Conduit Size</h3>
                  <ul className="text-white/60 text-sm space-y-2">
                    <li><strong>Hand bender:</strong> 1/2&quot; to 1-1/4&quot; EMT; manual operation using bender shoe and handle</li>
                    <li><strong>Mechanical bender:</strong> 1/2&quot; to 2&quot; EMT or rigid; table-mounted with ratchet or lever</li>
                    <li><strong>Hydraulic bender:</strong> 2&quot; to 6&quot; rigid or IMC; powered for large-radius bends</li>
                    <li><strong>Chicago bender:</strong> 1/2&quot; to 2&quot; rigid; one-shot bending with fixed shoes</li>
                    <li><strong>Segment bender:</strong> Large conduit sizes; makes multiple small bends (segments) to form a curve</li>
                  </ul>
                </div>
              </div>

              <p className="text-white/80 mb-4">
                When planning conduit runs, always consider the <Link href="/blog/conduit-fill-calculation-guide" className="text-purple-400 hover:text-purple-300">conduit fill requirements</Link> in addition to bending. Tight bends and excessive total degrees make wire pulling significantly more difficult, even when fill calculations are within NEC limits. Selecting the right <Link href="/blog/electrical-conduit-types-guide" className="text-purple-400 hover:text-purple-300">conduit type</Link> also affects bending approach &mdash; EMT bends easily with a hand bender, while rigid metal conduit and IMC require more force and different tooling.
              </p>
            </section>

            <section id="90-degree-bends" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">90-Degree Bends and Stub-Ups</h2>
              <p className="text-white/80 mb-4">
                The <strong>90-degree stub-up</strong> is the most fundamental conduit bend. It takes a horizontal piece of conduit and turns it vertically (or vice versa). The key to an accurate stub-up is understanding the <strong>deduct</strong> (also called &quot;take-up&quot;) &mdash; the amount the bender&apos;s shoe adds to the stub length during the bending process.
              </p>

              <div className="bg-white/5 rounded-xl p-6 my-6">
                <h4 className="font-semibold text-white mb-3">90-Degree Stub-Up Formula</h4>
                <div className="bg-black/50 rounded-lg p-4 font-mono text-sm text-cyan-400 mb-4">
                  Mark = Desired Stub Height &minus; Deduct (Take-Up)
                </div>
                <p className="text-white/70 text-sm">
                  Place your mark at the arrow on the bender shoe. The bender adds the deduct distance as it forms the bend, so you subtract it from your target stub height to find the correct mark placement.
                </p>
              </div>

              <h3 className="text-xl font-display font-semibold mb-3 text-cyan-400">Standard Deduct Values (Hand Bender)</h3>
              <div className="overflow-x-auto my-6">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-white/20">
                      <th className="text-left py-3 px-4 text-white/60">Conduit Size</th>
                      <th className="text-left py-3 px-4 text-white/60">Deduct (Take-Up)</th>
                      <th className="text-left py-3 px-4 text-white/60">Gain</th>
                      <th className="text-left py-3 px-4 text-white/60">Bending Radius</th>
                    </tr>
                  </thead>
                  <tbody className="text-white/80">
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">1/2&quot; EMT</td>
                      <td className="py-3 px-4 font-mono text-cyan-400">5&quot;</td>
                      <td className="py-3 px-4 font-mono text-green-400">3-1/8&quot;</td>
                      <td className="py-3 px-4 font-mono text-white/60">4&quot;</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">3/4&quot; EMT</td>
                      <td className="py-3 px-4 font-mono text-cyan-400">6&quot;</td>
                      <td className="py-3 px-4 font-mono text-green-400">3-3/4&quot;</td>
                      <td className="py-3 px-4 font-mono text-white/60">4-1/2&quot;</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">1&quot; EMT</td>
                      <td className="py-3 px-4 font-mono text-cyan-400">8&quot;</td>
                      <td className="py-3 px-4 font-mono text-green-400">5&quot;</td>
                      <td className="py-3 px-4 font-mono text-white/60">5-3/4&quot;</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4">1-1/4&quot; EMT</td>
                      <td className="py-3 px-4 font-mono text-cyan-400">11&quot;</td>
                      <td className="py-3 px-4 font-mono text-green-400">6-7/8&quot;</td>
                      <td className="py-3 px-4 font-mono text-white/60">7-1/4&quot;</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="bg-amber-900/30 rounded-xl p-6 my-6">
                <h4 className="font-semibold text-amber-400 mb-3">Example: 1/2&quot; EMT Stub-Up to 12&quot;</h4>
                <div className="text-white/70 text-sm space-y-2">
                  <p><strong>Goal:</strong> Stub up 12 inches from the floor using 1/2&quot; EMT.</p>
                  <p><strong>Deduct for 1/2&quot; EMT:</strong> 5 inches</p>
                  <p><strong>Calculation:</strong> 12&quot; &minus; 5&quot; = <strong className="text-amber-400">7 inches</strong></p>
                  <p><strong>Procedure:</strong> Measure 7&quot; from the end of the conduit. Place this mark at the arrow on the bender. Bend to 90 degrees. The stub will measure 12&quot;.</p>
                </div>
              </div>

              <h3 className="text-xl font-display font-semibold mb-3 text-cyan-400">Back-to-Back 90s</h3>
              <p className="text-white/80 mb-4">
                <strong>Back-to-back 90s</strong> create two 90-degree bends in one piece of conduit. The key measurement is the distance between the backs of the two bends. To lay this out, make your first 90, then measure from the back of the first bend to where you want the back of the second bend. Place that mark at the back of the bender shoe (the &quot;star&quot; or &quot;back of bend&quot; mark) and bend the second 90.
              </p>

              <div className="bg-white/5 rounded-xl p-6 my-6">
                <h4 className="font-semibold text-white mb-3">Understanding Gain</h4>
                <p className="text-white/70 text-sm mb-3">
                  <strong>Gain</strong> is the amount of conduit &quot;saved&quot; by bending versus using a coupling and two straight pieces at a right angle. When cutting conduit for a back-to-back 90, you must account for the gain at each bend:
                </p>
                <div className="bg-black/50 rounded-lg p-4 font-mono text-sm text-cyan-400">
                  Total Conduit Length = Stub Height + Horizontal Run + Distance Between Backs &minus; (2 &times; Gain)
                </div>
              </div>
            </section>

            <section id="offset-bends" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Offset Bends with Multiplier Table</h2>
              <p className="text-white/80 mb-4">
                An <strong>offset bend</strong> consists of two equal-angle bends in opposite directions that shift the conduit from one parallel plane to another. Offsets are the most common bend in commercial and industrial work &mdash; used every time conduit transitions from a wall to a panel, passes over another conduit, or changes elevation slightly.
              </p>

              <div className="bg-white/5 rounded-xl p-6 my-6">
                <h4 className="font-semibold text-white mb-3">Offset Bend Formula</h4>
                <div className="bg-black/50 rounded-lg p-4 font-mono text-sm text-cyan-400 mb-4 space-y-2">
                  <p>Travel (distance between marks) = Offset Depth &times; Multiplier</p>
                  <p>Multiplier = 1 / sin(bend angle)</p>
                </div>
                <p className="text-white/70 text-sm">
                  The <strong>offset depth</strong> is the perpendicular distance you need the conduit to shift. The <strong>multiplier</strong> converts that depth into the distance between your two bend marks along the conduit.
                </p>
              </div>

              <h3 className="text-xl font-display font-semibold mb-3 text-cyan-400">Offset Multiplier and Shrink Table</h3>
              <div className="overflow-x-auto my-6">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-white/20">
                      <th className="text-left py-3 px-4 text-white/60">Bend Angle</th>
                      <th className="text-left py-3 px-4 text-white/60">Multiplier</th>
                      <th className="text-left py-3 px-4 text-white/60">Shrink Constant (per inch of offset)</th>
                      <th className="text-left py-3 px-4 text-white/60">Common Use</th>
                    </tr>
                  </thead>
                  <tbody className="text-white/80">
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-mono">10&deg;</td>
                      <td className="py-3 px-4 font-mono text-cyan-400">6.0</td>
                      <td className="py-3 px-4 font-mono text-amber-400">1/16&quot;</td>
                      <td className="py-3 px-4 text-white/60">Very gradual offsets, large conduit</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-mono">22.5&deg;</td>
                      <td className="py-3 px-4 font-mono text-cyan-400">2.6</td>
                      <td className="py-3 px-4 font-mono text-amber-400">3/16&quot;</td>
                      <td className="py-3 px-4 text-white/60">Medium offsets, common for parallel runs</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-mono">30&deg;</td>
                      <td className="py-3 px-4 font-mono text-cyan-400">2.0</td>
                      <td className="py-3 px-4 font-mono text-amber-400">1/4&quot;</td>
                      <td className="py-3 px-4 text-white/60">Most common offset angle, easy math</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-mono">45&deg;</td>
                      <td className="py-3 px-4 font-mono text-cyan-400">1.414</td>
                      <td className="py-3 px-4 font-mono text-amber-400">3/8&quot;</td>
                      <td className="py-3 px-4 text-white/60">Large offsets, tight spaces</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-mono">60&deg;</td>
                      <td className="py-3 px-4 font-mono text-cyan-400">1.155</td>
                      <td className="py-3 px-4 font-mono text-amber-400">1/2&quot;</td>
                      <td className="py-3 px-4 text-white/60">Very large offsets, rarely used</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="bg-amber-900/30 rounded-xl p-6 my-6">
                <h4 className="font-semibold text-amber-400 mb-3">Example: 30-Degree Offset, 4&quot; Depth</h4>
                <div className="text-white/70 text-sm space-y-2">
                  <p><strong>Goal:</strong> Offset 4 inches using 30-degree bends.</p>
                  <p><strong>Multiplier for 30&deg;:</strong> 2.0</p>
                  <p><strong>Travel = </strong> 4&quot; &times; 2.0 = <strong className="text-amber-400">8 inches</strong> between marks</p>
                  <p><strong>Procedure:</strong> Make your first mark, then measure 8&quot; and make your second mark. Bend the first mark to 30&deg;, flip the conduit, then bend the second mark to 30&deg; in the opposite direction.</p>
                </div>
              </div>

              <div className="bg-cyan-900/30 rounded-xl p-6 my-6">
                <h4 className="font-semibold text-cyan-400 mb-3">Example: 45-Degree Offset, 6&quot; Depth</h4>
                <div className="text-white/70 text-sm space-y-2">
                  <p><strong>Goal:</strong> Offset 6 inches using 45-degree bends.</p>
                  <p><strong>Multiplier for 45&deg;:</strong> 1.414</p>
                  <p><strong>Travel = </strong> 6&quot; &times; 1.414 = <strong className="text-cyan-400">8.48 inches</strong> (approximately 8-1/2&quot;) between marks</p>
                  <p><strong>Shrink = </strong> 6&quot; &times; 3/8&quot; = <strong className="text-cyan-400">2-1/4 inches</strong></p>
                  <p><strong>Note:</strong> 45-degree offsets eat more conduit length (shrink) but produce a tighter, more compact transition.</p>
                </div>
              </div>

              <h3 className="text-xl font-display font-semibold mb-3 text-cyan-400">Why 30 Degrees Is the Most Popular Offset Angle</h3>
              <p className="text-white/80 mb-4">
                The 30-degree offset is the standard choice for most electricians because the multiplier is exactly <strong>2.0</strong>, making the math simple &mdash; just double the offset depth. The shrink is a manageable 1/4&quot; per inch of offset, and the resulting bend has a professional appearance with good clearance. For offsets under about 3 inches, 22.5 degrees produces a flatter look. For offsets over 6 inches, 45 degrees keeps the bend compact but creates more shrink.
              </p>
            </section>

            <section id="shrink-calculations" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Shrink Calculations for Offsets</h2>
              <p className="text-white/80 mb-4">
                <strong>Shrink</strong> (also called &quot;shrinkage&quot;) is the amount of conduit length that is &quot;lost&quot; when you make an offset bend. Because the offset bends divert the conduit away from a straight line and then back, the end-to-end length of the conduit becomes shorter than the total length of conduit used. If you do not account for shrink, your conduit will come up short at the termination point.
              </p>

              <div className="bg-white/5 rounded-xl p-6 my-6">
                <h4 className="font-semibold text-white mb-3">Shrink Formula</h4>
                <div className="bg-black/50 rounded-lg p-4 font-mono text-sm text-cyan-400 mb-4">
                  Shrink = Offset Depth &times; Shrink Constant
                </div>
                <p className="text-white/70 text-sm">
                  The shrink constant varies by bend angle. A higher bend angle produces a larger shrink per inch of offset because the conduit travels a more aggressive diagonal path.
                </p>
              </div>

              <h3 className="text-xl font-display font-semibold mb-3 text-cyan-400">Shrink Constant Reference</h3>
              <div className="overflow-x-auto my-6">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-white/20">
                      <th className="text-left py-3 px-4 text-white/60">Bend Angle</th>
                      <th className="text-left py-3 px-4 text-white/60">Shrink per Inch of Offset</th>
                      <th className="text-left py-3 px-4 text-white/60">Shrink for 4&quot; Offset</th>
                      <th className="text-left py-3 px-4 text-white/60">Shrink for 6&quot; Offset</th>
                    </tr>
                  </thead>
                  <tbody className="text-white/80">
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-mono">10&deg;</td>
                      <td className="py-3 px-4 font-mono text-amber-400">1/16&quot; (0.0625&quot;)</td>
                      <td className="py-3 px-4 font-mono text-white/60">1/4&quot;</td>
                      <td className="py-3 px-4 font-mono text-white/60">3/8&quot;</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-mono">22.5&deg;</td>
                      <td className="py-3 px-4 font-mono text-amber-400">3/16&quot; (0.1875&quot;)</td>
                      <td className="py-3 px-4 font-mono text-white/60">3/4&quot;</td>
                      <td className="py-3 px-4 font-mono text-white/60">1-1/8&quot;</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-mono">30&deg;</td>
                      <td className="py-3 px-4 font-mono text-amber-400">1/4&quot; (0.25&quot;)</td>
                      <td className="py-3 px-4 font-mono text-white/60">1&quot;</td>
                      <td className="py-3 px-4 font-mono text-white/60">1-1/2&quot;</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-mono">45&deg;</td>
                      <td className="py-3 px-4 font-mono text-amber-400">3/8&quot; (0.375&quot;)</td>
                      <td className="py-3 px-4 font-mono text-white/60">1-1/2&quot;</td>
                      <td className="py-3 px-4 font-mono text-white/60">2-1/4&quot;</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-mono">60&deg;</td>
                      <td className="py-3 px-4 font-mono text-amber-400">1/2&quot; (0.5&quot;)</td>
                      <td className="py-3 px-4 font-mono text-white/60">2&quot;</td>
                      <td className="py-3 px-4 font-mono text-white/60">3&quot;</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="bg-purple-900/30 rounded-xl p-6 my-6">
                <h4 className="font-semibold text-purple-400 mb-3">Applying Shrink to Your Layout</h4>
                <p className="text-white/70 text-sm mb-3">
                  When you are measuring from a fixed starting point (like a panel knockout) to place your first offset mark, <strong>add the shrink value</strong> to your measurement. This compensates for the conduit shortening that occurs during the offset.
                </p>
                <div className="bg-black/50 rounded-lg p-4 font-mono text-sm text-cyan-400">
                  First Mark = Distance from reference point + Shrink
                </div>
              </div>

              <div className="bg-amber-900/30 rounded-xl p-6 my-6">
                <h4 className="font-semibold text-amber-400 mb-3">Example: Offset with Shrink Compensation</h4>
                <div className="text-white/70 text-sm space-y-2">
                  <p><strong>Scenario:</strong> You need a 30-degree offset of 6&quot; depth, with the first bend starting 24&quot; from the end of the conduit.</p>
                  <p><strong>Travel:</strong> 6&quot; &times; 2.0 = 12&quot; between marks</p>
                  <p><strong>Shrink:</strong> 6&quot; &times; 1/4&quot; = 1-1/2&quot;</p>
                  <p><strong>First mark:</strong> 24&quot; + 1-1/2&quot; = <strong className="text-amber-400">25-1/2&quot;</strong> from the end</p>
                  <p><strong>Second mark:</strong> 25-1/2&quot; + 12&quot; = <strong className="text-amber-400">37-1/2&quot;</strong> from the end</p>
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
                  <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/></svg>
                  Download Free
                </a>
              </div>
            </div>

            <section id="saddle-bends" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">3-Point and 4-Point Saddle Bends</h2>
              <p className="text-white/80 mb-4">
                <strong>Saddle bends</strong> allow conduit to pass over an obstruction &mdash; such as another conduit, a pipe, or a structural member &mdash; while remaining on the same mounting surface. The conduit rises up, crosses over the obstacle, and returns to the original plane.
              </p>

              <h3 className="text-xl font-display font-semibold mb-3 text-cyan-400">3-Point Saddle Bend</h3>
              <p className="text-white/80 mb-4">
                A 3-point saddle uses three bends: a center bend at <strong>45 degrees</strong> and two outer bends at <strong>22.5 degrees</strong> each. This is the most common saddle configuration and works well for obstacles up to about 3 inches in height.
              </p>

              <div className="bg-white/5 rounded-xl p-6 my-6">
                <h4 className="font-semibold text-white mb-3">3-Point Saddle Layout</h4>
                <div className="space-y-3 text-white/70 text-sm">
                  <p><strong>Step 1:</strong> Mark the center of the obstacle on the conduit.</p>
                  <p><strong>Step 2:</strong> Determine the saddle depth (height of the obstacle plus clearance).</p>
                  <p><strong>Step 3:</strong> Calculate the distance from the center mark to each outer mark:</p>
                  <div className="bg-black/50 rounded-lg p-4 font-mono text-sm text-cyan-400">
                    Outer Mark Distance = Saddle Depth &times; 2.6 (from center mark, each direction)
                  </div>
                  <p><strong>Step 4:</strong> Bend the center mark to 45&deg; first, then bend each outer mark to 22.5&deg; in the opposite direction.</p>
                </div>
              </div>

              <div className="bg-amber-900/30 rounded-xl p-6 my-6">
                <h4 className="font-semibold text-amber-400 mb-3">Example: 3-Point Saddle Over a 2&quot; Pipe</h4>
                <div className="text-white/70 text-sm space-y-2">
                  <p><strong>Obstacle:</strong> 2&quot; conduit on the wall (approximately 2-3/8&quot; OD with fitting).</p>
                  <p><strong>Saddle depth:</strong> 2-3/8&quot; (round to 2.5&quot; for clearance).</p>
                  <p><strong>Outer mark distance:</strong> 2.5&quot; &times; 2.6 = <strong className="text-amber-400">6.5&quot;</strong> from center mark, both sides.</p>
                  <p><strong>Shrink:</strong> Approximately 3/16&quot; per inch &times; 2.5&quot; = <strong className="text-amber-400">~7/16&quot;</strong> added to center mark placement.</p>
                  <p><strong>Procedure:</strong> Mark center of obstacle on conduit (adjusted for shrink). Mark 6.5&quot; on each side. Bend center to 45&deg;, then each outer mark to 22.5&deg;.</p>
                </div>
              </div>

              <h3 className="text-xl font-display font-semibold mb-3 text-cyan-400">4-Point Saddle Bend</h3>
              <p className="text-white/80 mb-4">
                A <strong>4-point saddle</strong> uses four bends &mdash; essentially two offset bends placed back to back. This creates a flat section across the top of the obstacle, which is useful for larger obstacles or when you need the conduit to maintain a specific height for a distance before returning to the original plane.
              </p>

              <div className="bg-white/5 rounded-xl p-6 my-6">
                <h4 className="font-semibold text-white mb-3">4-Point Saddle Layout</h4>
                <div className="space-y-3 text-white/70 text-sm">
                  <p><strong>Configuration:</strong> Two offset bends (each offset = saddle depth), separated by the width of the obstacle.</p>
                  <p><strong>Bend angles:</strong> Typically 22.5&deg; or 30&deg; for each bend (four bends total).</p>
                  <p><strong>First offset:</strong> Raises the conduit by the saddle depth.</p>
                  <p><strong>Flat section:</strong> Runs across the top of the obstacle.</p>
                  <p><strong>Second offset:</strong> Returns the conduit to the original plane.</p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6 my-6">
                <div className="bg-white/5 rounded-xl p-6">
                  <h4 className="font-semibold text-cyan-400 mb-3">3-Point vs 4-Point</h4>
                  <ul className="text-white/60 text-sm space-y-2">
                    <li><strong>3-point:</strong> Best for narrow obstacles (pipes, small conduits)</li>
                    <li><strong>4-point:</strong> Best for wide obstacles (ductwork, cable trays)</li>
                    <li><strong>3-point:</strong> Quicker to bend (3 bends vs 4)</li>
                    <li><strong>4-point:</strong> Provides flat clearance across the top</li>
                    <li><strong>3-point:</strong> Consumes less conduit total length</li>
                  </ul>
                </div>
                <div className="bg-white/5 rounded-xl p-6">
                  <h4 className="font-semibold text-amber-400 mb-3">Common Saddle Depth Reference</h4>
                  <ul className="text-white/60 text-sm space-y-2">
                    <li><strong>1/2&quot; EMT:</strong> ~0.7&quot; OD &mdash; use 1&quot; saddle depth</li>
                    <li><strong>3/4&quot; EMT:</strong> ~0.9&quot; OD &mdash; use 1-1/4&quot; saddle depth</li>
                    <li><strong>1&quot; EMT:</strong> ~1.2&quot; OD &mdash; use 1-1/2&quot; saddle depth</li>
                    <li><strong>2&quot; EMT:</strong> ~2.2&quot; OD &mdash; use 2-1/2&quot; saddle depth</li>
                    <li><strong>4&quot; PVC pipe:</strong> ~4.5&quot; OD &mdash; use 5&quot; saddle depth</li>
                  </ul>
                </div>
              </div>
            </section>

            <section id="kick-90s" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Kick 90s (Combination Bends)</h2>
              <p className="text-white/80 mb-4">
                A <strong>kick 90</strong> (also called a &quot;kick bend&quot; or &quot;kick and 90&quot;) combines a 90-degree stub-up with a small offset at the base. This is used when conduit needs to stub up into a panel or box that is not directly above the conduit run &mdash; for example, when conduit running along a wall needs to kick out slightly and then turn up into a surface-mounted panel.
              </p>

              <div className="bg-white/5 rounded-xl p-6 my-6">
                <h4 className="font-semibold text-white mb-3">Kick 90 Layout Method</h4>
                <div className="space-y-3 text-white/70 text-sm">
                  <p><strong>Step 1:</strong> Determine the stub height and the kick distance (offset from wall or surface).</p>
                  <p><strong>Step 2:</strong> Calculate the adjusted stub height by subtracting the kick distance from the desired stub height.</p>
                  <p><strong>Step 3:</strong> Use the standard deduct for the 90-degree bend.</p>
                  <p><strong>Step 4:</strong> Make the 90-degree bend first. Then, with the conduit still in the bender, apply a small additional bend (typically 10-15 degrees) at the base to create the kick.</p>
                </div>
              </div>

              <div className="bg-amber-900/30 rounded-xl p-6 my-6">
                <h4 className="font-semibold text-amber-400 mb-3">Kick 90 Calculation Notes</h4>
                <p className="text-white/70 text-sm mb-3">
                  Kick 90s require practice because two variables are changing simultaneously &mdash; the stub height and the lateral offset. Key considerations:
                </p>
                <ul className="text-white/60 text-sm space-y-2">
                  <li><strong>Small kicks (under 2&quot;):</strong> Can often be done by feel after the 90 is made. Just overbend slightly past 90, creating a small kick at the tangent point.</li>
                  <li><strong>Larger kicks (2-6&quot;):</strong> Require a separate offset calculation. Treat the kick as a small offset, then add the 90 at the end of the offset.</li>
                  <li><strong>The kick reduces the effective stub height</strong> by approximately the kick distance. Account for this in your deduct calculation.</li>
                  <li><strong>Mark rotation:</strong> Make sure the kick direction aligns with where you need the offset to go. Rotating the conduit in the bender controls the kick direction.</li>
                </ul>
              </div>

              <p className="text-white/80 mb-4">
                Many experienced electricians develop a feel for kick 90s through repetition rather than precise calculation. However, for parallel conduit runs where multiple kick 90s must match exactly, doing the math ensures consistent results across all conduits in the rack.
              </p>
            </section>

            <section id="segment-bending" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Segment Bending for Large Conduit</h2>
              <p className="text-white/80 mb-4">
                <strong>Segment bending</strong> (also called &quot;segmented bending&quot; or &quot;multi-shot bending&quot;) is used for conduit sizes that are too large for a one-shot bender. Instead of making a single 90-degree bend, you make multiple smaller bends (segments) that together form a smooth curve adding up to the desired total angle. This technique is common for 2&quot; and larger rigid metal conduit and IMC.
              </p>

              <div className="bg-white/5 rounded-xl p-6 my-6">
                <h4 className="font-semibold text-white mb-3">Segment Bending Formulas</h4>
                <div className="bg-black/50 rounded-lg p-4 font-mono text-sm text-cyan-400 mb-4 space-y-2">
                  <p>Developed Length = (Total Bend Angle / 360) &times; 2&pi;R</p>
                  <p>Spacing Between Shots = Developed Length / (Number of Shots &minus; 1)</p>
                  <p>Degrees Per Shot = Total Bend Angle / Number of Shots</p>
                </div>
                <p className="text-white/70 text-sm">
                  <strong>R</strong> is the centerline radius of the desired bend (typically the minimum bending radius per NEC Table 344.24 for rigid conduit). The <strong>developed length</strong> is the arc length of conduit that will be bent.
                </p>
              </div>

              <h3 className="text-xl font-display font-semibold mb-3 text-cyan-400">Segment Bending Reference Table (90-Degree Bend)</h3>
              <div className="overflow-x-auto my-6">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-white/20">
                      <th className="text-left py-3 px-4 text-white/60">Conduit Size</th>
                      <th className="text-left py-3 px-4 text-white/60">Min Radius (NEC)</th>
                      <th className="text-left py-3 px-4 text-white/60">Developed Length</th>
                      <th className="text-left py-3 px-4 text-white/60">Recommended Shots</th>
                      <th className="text-left py-3 px-4 text-white/60">Degrees/Shot</th>
                    </tr>
                  </thead>
                  <tbody className="text-white/80">
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">2&quot; RMC</td>
                      <td className="py-3 px-4 font-mono text-white/60">9-1/2&quot;</td>
                      <td className="py-3 px-4 font-mono text-cyan-400">14.9&quot;</td>
                      <td className="py-3 px-4 font-mono">5&ndash;7</td>
                      <td className="py-3 px-4 font-mono text-amber-400">12.9&ndash;18&deg;</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">2-1/2&quot; RMC</td>
                      <td className="py-3 px-4 font-mono text-white/60">10-1/2&quot;</td>
                      <td className="py-3 px-4 font-mono text-cyan-400">16.5&quot;</td>
                      <td className="py-3 px-4 font-mono">6&ndash;9</td>
                      <td className="py-3 px-4 font-mono text-amber-400">10&ndash;15&deg;</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">3&quot; RMC</td>
                      <td className="py-3 px-4 font-mono text-white/60">13&quot;</td>
                      <td className="py-3 px-4 font-mono text-cyan-400">20.4&quot;</td>
                      <td className="py-3 px-4 font-mono">7&ndash;10</td>
                      <td className="py-3 px-4 font-mono text-amber-400">9&ndash;12.9&deg;</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">3-1/2&quot; RMC</td>
                      <td className="py-3 px-4 font-mono text-white/60">15&quot;</td>
                      <td className="py-3 px-4 font-mono text-cyan-400">23.6&quot;</td>
                      <td className="py-3 px-4 font-mono">8&ndash;12</td>
                      <td className="py-3 px-4 font-mono text-amber-400">7.5&ndash;11.3&deg;</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4">4&quot; RMC</td>
                      <td className="py-3 px-4 font-mono text-white/60">16&quot;</td>
                      <td className="py-3 px-4 font-mono text-cyan-400">25.1&quot;</td>
                      <td className="py-3 px-4 font-mono">9&ndash;15</td>
                      <td className="py-3 px-4 font-mono text-amber-400">6&ndash;10&deg;</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="bg-purple-900/30 rounded-xl p-6 my-6">
                <h4 className="font-semibold text-purple-400 mb-3">Segment Bending Tips</h4>
                <ul className="text-white/70 text-sm space-y-2">
                  <li><strong>More shots = smoother bend.</strong> While fewer shots are faster, more shots produce a smoother curve that is easier to pull wire through and looks more professional.</li>
                  <li><strong>Keep shots consistent.</strong> Use a protractor or digital angle finder to verify each shot is the same degree. Inconsistent shots produce a wavy, uneven bend.</li>
                  <li><strong>Mark all shot locations before bending.</strong> Lay out the entire developed length and mark each shot position. Do not try to measure between shots as you go.</li>
                  <li><strong>Check your angle after every 2-3 shots.</strong> Cumulative error can cause the final angle to be off. Adjusting early is easier than correcting at the end.</li>
                  <li><strong>Use a level and straight edge</strong> to verify the bend is in a single plane. Twisting during segment bending is the most common error.</li>
                </ul>
              </div>
            </section>

            <section id="common-mistakes" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Common Bending Mistakes</h2>
              <p className="text-white/80 mb-4">
                Even experienced electricians make bending errors. Knowing the most frequent mistakes helps you avoid them and reduce wasted material on the job.
              </p>

              <div className="grid md:grid-cols-2 gap-4 my-6">
                <div className="bg-red-900/20 rounded-xl p-6 border border-red-500/20">
                  <h4 className="font-semibold text-red-400 mb-3">Forgetting Shrink on Offsets</h4>
                  <p className="text-white/60 text-sm">
                    The most common offset mistake. Failing to add shrink to your starting measurement causes the conduit to end up short. At 30 degrees, a 6&quot; offset loses 1-1/2&quot; of length.
                  </p>
                </div>
                <div className="bg-red-900/20 rounded-xl p-6 border border-red-500/20">
                  <h4 className="font-semibold text-red-400 mb-3">Overbending or Underbending</h4>
                  <p className="text-white/60 text-sm">
                    Not using a protractor or angle reference to verify the bend angle. Even 2-3 degrees off will cause visible misalignment in offset bends, especially over multiple parallel conduits.
                  </p>
                </div>
                <div className="bg-red-900/20 rounded-xl p-6 border border-red-500/20">
                  <h4 className="font-semibold text-red-400 mb-3">Dog-Legging (Twisting)</h4>
                  <p className="text-white/60 text-sm">
                    When the second bend of an offset is not in the same plane as the first bend, the conduit twists. This is called a &quot;dog-leg.&quot; Line up the handle and previous bend mark carefully before making each subsequent bend.
                  </p>
                </div>
                <div className="bg-red-900/20 rounded-xl p-6 border border-red-500/20">
                  <h4 className="font-semibold text-red-400 mb-3">Wrong Deduct for Conduit Size</h4>
                  <p className="text-white/60 text-sm">
                    Using the 1/2&quot; EMT deduct (5&quot;) when bending 3/4&quot; EMT (6&quot; deduct) or 1&quot; EMT (8&quot; deduct). Always verify the deduct for the specific conduit size and bender brand.
                  </p>
                </div>
                <div className="bg-red-900/20 rounded-xl p-6 border border-red-500/20">
                  <h4 className="font-semibold text-red-400 mb-3">Measuring from the Wrong End</h4>
                  <p className="text-white/60 text-sm">
                    Starting your measurement from the wrong end of the conduit, or confusing which end goes into the bender first. Develop a consistent habit of always measuring from the same reference point.
                  </p>
                </div>
                <div className="bg-red-900/20 rounded-xl p-6 border border-red-500/20">
                  <h4 className="font-semibold text-red-400 mb-3">Kinking the Conduit</h4>
                  <p className="text-white/60 text-sm">
                    Applying too much pressure in one spot, especially with thin-wall EMT. Kinks create code violations (NEC 358.28 requires bends to be made without damage), restrict wire pulling, and require cutting out and replacing the damaged section.
                  </p>
                </div>
                <div className="bg-red-900/20 rounded-xl p-6 border border-red-500/20">
                  <h4 className="font-semibold text-red-400 mb-3">Not Accounting for Spring-Back</h4>
                  <p className="text-white/60 text-sm">
                    Conduit has elasticity and will spring back slightly after bending. Slightly overbend by 2-3 degrees on each bend to compensate, especially with larger sizes and rigid conduit.
                  </p>
                </div>
                <div className="bg-red-900/20 rounded-xl p-6 border border-red-500/20">
                  <h4 className="font-semibold text-red-400 mb-3">Exceeding 360 Degrees Between Pull Points</h4>
                  <p className="text-white/60 text-sm">
                    Forgetting to add up total bend degrees in a run. A 90-degree stub plus a few offsets and saddles can quickly exceed the NEC 360-degree limit. Plan runs to include junction boxes as pull points.
                  </p>
                </div>
              </div>
            </section>

            <section id="tips-consistent-bends" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Tips for Consistent Bends</h2>
              <p className="text-white/80 mb-4">
                Clean, consistent bending is a skill that separates apprentices from journeymen. These field-proven practices will improve your bending accuracy and speed.
              </p>

              <div className="space-y-4 my-6">
                <div className="bg-green-900/20 rounded-xl p-6 border border-green-500/20">
                  <h3 className="font-semibold text-green-400 mb-2">1. Know Your Bender</h3>
                  <p className="text-white/70 text-sm">
                    Different bender brands have slightly different deducts and gains. The values on the bender shoe are your most reliable reference. Before starting a job with a new bender, make a test bend and verify the deduct with a tape measure. Write the actual deduct on the bender handle with a marker.
                  </p>
                </div>

                <div className="bg-green-900/20 rounded-xl p-6 border border-green-500/20">
                  <h3 className="font-semibold text-green-400 mb-2">2. Use a Level and Protractor</h3>
                  <p className="text-white/70 text-sm">
                    A torpedo level on the conduit or bender handle verifies 90-degree bends. A digital angle finder gives precise readings for offset angles. Do not rely on the degree markings cast into bender shoes &mdash; they are approximate at best.
                  </p>
                </div>

                <div className="bg-green-900/20 rounded-xl p-6 border border-green-500/20">
                  <h3 className="font-semibold text-green-400 mb-2">3. Apply Steady, Even Foot Pressure</h3>
                  <p className="text-white/70 text-sm">
                    Place the conduit on a flat surface. Keep constant pressure on the bender foot with one foot while pulling the handle smoothly. Jerky movements cause kinks and uneven bends. For EMT, the conduit should slide smoothly through the shoe as you bend.
                  </p>
                </div>

                <div className="bg-green-900/20 rounded-xl p-6 border border-green-500/20">
                  <h3 className="font-semibold text-green-400 mb-2">4. Anti-Dog-Leg Technique for Offsets</h3>
                  <p className="text-white/70 text-sm">
                    After making the first bend of an offset, sight down the conduit from one end. The handle of the bender (when positioned for the second bend) should be aligned with the straight section of conduit before the first bend. If the handle is twisted relative to the conduit, the second bend will produce a dog-leg.
                  </p>
                </div>

                <div className="bg-green-900/20 rounded-xl p-6 border border-green-500/20">
                  <h3 className="font-semibold text-green-400 mb-2">5. Pre-Mark All Bends Before Bending</h3>
                  <p className="text-white/70 text-sm">
                    For complex bends (saddles, multiple offsets, segment bends), lay out and mark every bend point before making any bends. This lets you double-check all your math while the conduit is still straight and easy to measure.
                  </p>
                </div>

                <div className="bg-green-900/20 rounded-xl p-6 border border-green-500/20">
                  <h3 className="font-semibold text-green-400 mb-2">6. Make a Bending Cheat Sheet</h3>
                  <p className="text-white/70 text-sm">
                    Keep a laminated card in your tool pouch with the multiplier table, shrink constants, and deduct values for each conduit size. Even experienced electricians benefit from a quick reference rather than relying on memory under production pressure.
                  </p>
                </div>

                <div className="bg-green-900/20 rounded-xl p-6 border border-green-500/20">
                  <h3 className="font-semibold text-green-400 mb-2">7. Bend Parallel Runs Using a Jig</h3>
                  <p className="text-white/70 text-sm">
                    For multiple parallel conduits that must match exactly, bend the first conduit and verify it fits. Then use it as a template to mark and verify all subsequent conduits. Some electricians build a simple plywood jig to hold the first conduit&apos;s shape for comparison.
                  </p>
                </div>
              </div>

              <div className="bg-cyan-900/30 rounded-xl p-6 my-6">
                <h4 className="font-semibold text-cyan-400 mb-3">Quick Reference Card</h4>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                  <div>
                    <p className="text-xl font-bold text-amber-400 font-mono">2.0</p>
                    <p className="text-white/60 text-sm">30&deg; Multiplier</p>
                  </div>
                  <div>
                    <p className="text-xl font-bold text-amber-400 font-mono">1.414</p>
                    <p className="text-white/60 text-sm">45&deg; Multiplier</p>
                  </div>
                  <div>
                    <p className="text-xl font-bold text-amber-400 font-mono">2.6</p>
                    <p className="text-white/60 text-sm">22.5&deg; Multiplier</p>
                  </div>
                  <div>
                    <p className="text-xl font-bold text-amber-400 font-mono">6.0</p>
                    <p className="text-white/60 text-sm">10&deg; Multiplier</p>
                  </div>
                </div>
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
                  Join thousands of electricians using Ampora for instant NEC code answers, electrical calculations, and AI-powered troubleshooting &mdash; right from your phone.
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
                <Link href="/blog/conduit-fill-calculation-guide" className="bg-white/5 hover:bg-white/10 rounded-xl p-6 transition-colors">
                  <span className="text-amber-400 text-sm">Calculations</span>
                  <h3 className="font-semibold mt-2">Conduit Fill Calculation Guide</h3>
                </Link>
                <Link href="/blog/electrical-conduit-types-guide" className="bg-white/5 hover:bg-white/10 rounded-xl p-6 transition-colors">
                  <span className="text-green-400 text-sm">Materials</span>
                  <h3 className="font-semibold mt-2">Electrical Conduit Types Guide</h3>
                </Link>
                <Link href="/blog/pvc-conduit-installation-guide" className="bg-white/5 hover:bg-white/10 rounded-xl p-6 transition-colors">
                  <span className="text-blue-400 text-sm">Installation</span>
                  <h3 className="font-semibold mt-2">PVC Conduit Installation Guide</h3>
                </Link>
                <Link href="/blog/wire-pulling-techniques-guide" className="bg-white/5 hover:bg-white/10 rounded-xl p-6 transition-colors">
                  <span className="text-cyan-400 text-sm">Installation</span>
                  <h3 className="font-semibold mt-2">Wire Pulling Techniques Guide</h3>
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
