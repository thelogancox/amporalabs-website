import { Metadata } from "next";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import { BreadcrumbJsonLd, BlogPostingJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Electrical Wire Color Code Guide: NEC Conductor Identification Standards",
  description: "Complete guide to electrical wire color codes per NEC standards. Learn conductor identification for 120/208V and 277/480V systems, grounding conductor colors, neutral identification, and re-identification requirements under NEC 200.6 and 250.119.",
  keywords: [
    "electrical wire color code",
    "NEC conductor colors",
    "wire color identification",
    "120/208V wire colors",
    "277/480V wire colors",
    "grounding conductor color",
    "neutral wire identification",
    "NEC 200.6",
    "NEC 250.119",
    "phase wire colors",
    "electrical color code chart",
    "conductor re-identification",
    "grounded conductor marking",
    "high leg delta color",
    "electrical wiring colors",
    "wire marking NEC",
  ],
  alternates: {
    canonical: "https://amporalabs.com/blog/electrical-wire-color-code-guide",
  },
  openGraph: {
    title: "Electrical Wire Color Code Guide: NEC Standards - Ampora",
    description: "Complete NEC wire color code guide for 120/208V and 277/480V systems with conductor identification rules.",
    url: "https://amporalabs.com/blog/electrical-wire-color-code-guide",
    type: "article",
  },
};

function HeroIllustration() {
  return (
    <svg viewBox="0 0 400 160" className="w-full h-40 md:h-48" aria-label="Electrical wire color code diagram showing conductor colors">
      {/* Wire bundle */}
      {/* Black - Phase A */}
      <g transform="translate(0, 30)">
        <rect x="30" y="0" width="340" height="12" rx="6" fill="#111827" stroke="#374151" strokeWidth="1.5"/>
        <circle cx="30" cy="6" r="6" fill="#111827" stroke="#374151" strokeWidth="1.5"/>
        <circle cx="370" cy="6" r="6" fill="#111827" stroke="#374151" strokeWidth="1.5"/>
        <circle cx="370" cy="6" r="3" fill="#b87333"/>
        <text x="387" y="10" fill="#fff" fontSize="8" fontWeight="bold">Phase A (Black)</text>
      </g>

      {/* Red - Phase B */}
      <g transform="translate(0, 50)">
        <rect x="30" y="0" width="340" height="12" rx="6" fill="#dc2626" stroke="#ef4444" strokeWidth="1.5"/>
        <circle cx="30" cy="6" r="6" fill="#dc2626" stroke="#ef4444" strokeWidth="1.5"/>
        <circle cx="370" cy="6" r="6" fill="#dc2626" stroke="#ef4444" strokeWidth="1.5"/>
        <circle cx="370" cy="6" r="3" fill="#b87333"/>
        <text x="387" y="10" fill="#ef4444" fontSize="8" fontWeight="bold">Phase B (Red)</text>
      </g>

      {/* Blue - Phase C */}
      <g transform="translate(0, 70)">
        <rect x="30" y="0" width="340" height="12" rx="6" fill="#2563eb" stroke="#3b82f6" strokeWidth="1.5"/>
        <circle cx="30" cy="6" r="6" fill="#2563eb" stroke="#3b82f6" strokeWidth="1.5"/>
        <circle cx="370" cy="6" r="6" fill="#2563eb" stroke="#3b82f6" strokeWidth="1.5"/>
        <circle cx="370" cy="6" r="3" fill="#b87333"/>
        <text x="387" y="10" fill="#3b82f6" fontSize="8" fontWeight="bold">Phase C (Blue)</text>
      </g>

      {/* White - Neutral */}
      <g transform="translate(0, 95)">
        <rect x="30" y="0" width="340" height="12" rx="6" fill="#e5e7eb" stroke="#d1d5db" strokeWidth="1.5"/>
        <circle cx="30" cy="6" r="6" fill="#e5e7eb" stroke="#d1d5db" strokeWidth="1.5"/>
        <circle cx="370" cy="6" r="6" fill="#e5e7eb" stroke="#d1d5db" strokeWidth="1.5"/>
        <circle cx="370" cy="6" r="3" fill="#b87333"/>
        <text x="387" y="10" fill="#d1d5db" fontSize="8" fontWeight="bold">Neutral (White)</text>
      </g>

      {/* Green - Ground */}
      <g transform="translate(0, 115)">
        <rect x="30" y="0" width="340" height="12" rx="6" fill="#16a34a" stroke="#22c55e" strokeWidth="1.5"/>
        <circle cx="30" cy="6" r="6" fill="#16a34a" stroke="#22c55e" strokeWidth="1.5"/>
        <circle cx="370" cy="6" r="6" fill="#16a34a" stroke="#22c55e" strokeWidth="1.5"/>
        <circle cx="370" cy="6" r="3" fill="#b87333"/>
        <text x="387" y="10" fill="#22c55e" fontSize="8" fontWeight="bold">Ground (Green)</text>
      </g>

      {/* Title badge */}
      <rect x="5" y="2" width="120" height="20" rx="4" fill="#a855f7" fillOpacity="0.2" stroke="#a855f7"/>
      <text x="65" y="16" textAnchor="middle" fill="#a855f7" fontSize="9" fontWeight="bold">120/208V Colors</text>
    </svg>
  );
}

export default function ElectricalWireColorCodeGuidePage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navigation />
      <div className="pt-20">
        <BreadcrumbJsonLd
          items={[
            { name: "Home", url: "https://amporalabs.com" },
            { name: "Blog", url: "https://amporalabs.com/blog" },
            { name: "Electrical Wire Color Code Guide", url: "https://amporalabs.com/blog/electrical-wire-color-code-guide" },
          ]}
        />
        <BlogPostingJsonLd
          headline="Electrical Wire Color Code Guide: NEC Conductor Identification Standards"
          description="Complete guide to NEC electrical wire color codes for 120/208V and 277/480V systems."
          datePublished="2025-02-08"
          dateModified="2025-02-08"
          url="https://amporalabs.com/blog/electrical-wire-color-code-guide"
          wordCount={2600}
          keywords={["wire color code", "NEC conductor colors", "phase colors", "neutral identification", "grounding conductor"]}
        />

        <article className="max-w-4xl mx-auto px-6 py-12">
          {/* Breadcrumb */}
          <nav className="text-sm text-white/60 mb-8">
            <Link href="/" className="hover:text-white">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/blog" className="hover:text-white">Blog</Link>
            <span className="mx-2">/</span>
            <span className="text-white">Wire Color Code Guide</span>
          </nav>

          {/* Article Header */}
          <header className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <span className="px-3 py-1 bg-purple-600/30 text-purple-300 text-sm font-medium rounded-full">
                NEC Code
              </span>
              <span className="text-white/40 text-sm">10 min read</span>
              <span className="text-white/40 text-sm">February 8, 2025</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6 leading-tight">
              Electrical Wire Color Code Guide: NEC Conductor Identification Standards
            </h1>
            <p className="text-xl text-white/70">
              Correct wire color identification is essential for safety, troubleshooting, and NEC compliance. This guide covers standard conductor colors for all common voltage systems, grounding and neutral requirements, and re-identification rules.
            </p>
          </header>

          <div className="mb-12 bg-gradient-to-br from-purple-900/20 to-blue-900/20 rounded-2xl p-6 border border-white/10">
            <HeroIllustration />
          </div>

          {/* Table of Contents */}
          <div className="bg-white/5 rounded-2xl p-6 mb-12">
            <h2 className="font-display font-bold mb-4">In This Guide</h2>
            <ul className="space-y-2 text-white/70">
              <li><a href="#nec-overview" className="hover:text-purple-400">&#8594; NEC Color Code Overview</a></li>
              <li><a href="#120-208v" className="hover:text-purple-400">&#8594; 120/208V System Colors</a></li>
              <li><a href="#277-480v" className="hover:text-purple-400">&#8594; 277/480V System Colors</a></li>
              <li><a href="#neutral" className="hover:text-purple-400">&#8594; Neutral (Grounded) Conductor Identification</a></li>
              <li><a href="#grounding" className="hover:text-purple-400">&#8594; Grounding Conductor Colors</a></li>
              <li><a href="#high-leg" className="hover:text-purple-400">&#8594; High-Leg Delta Identification</a></li>
              <li><a href="#re-identification" className="hover:text-purple-400">&#8594; Conductor Re-Identification Rules</a></li>
              <li><a href="#dc-systems" className="hover:text-purple-400">&#8594; DC System Color Codes</a></li>
              <li><a href="#common-mistakes" className="hover:text-purple-400">&#8594; Common Color Code Mistakes</a></li>
            </ul>
          </div>

          {/* Article Content */}
          <div className="prose prose-invert prose-lg max-w-none">

            <section id="nec-overview" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">NEC Color Code Overview</h2>
              <p className="text-white/80 mb-4">
                The NEC mandates specific colors for only three conductor types: grounded (neutral) conductors, equipment grounding conductors, and the high-leg of a delta system. All other conductor colors are established by industry convention rather than code requirement. However, following standard color conventions is considered professional practice and is required in many jurisdictions through local amendments.
              </p>
              <div className="bg-purple-900/30 border border-purple-500/30 rounded-xl p-6 my-6">
                <h3 className="font-semibold text-purple-300 mb-2">Key NEC Sections for Conductor Identification</h3>
                <ul className="text-white/70 space-y-1 text-sm">
                  <li><strong>NEC 200.6</strong> &mdash; Identification of grounded (neutral) conductors</li>
                  <li><strong>NEC 200.7</strong> &mdash; Use of white or gray conductors</li>
                  <li><strong>NEC 250.119</strong> &mdash; Identification of equipment grounding conductors</li>
                  <li><strong>NEC 110.15</strong> &mdash; High-leg conductor identification</li>
                  <li><strong>NEC 210.5</strong> &mdash; Identification for branch circuits</li>
                  <li><strong>NEC 215.12</strong> &mdash; Identification for feeders</li>
                </ul>
              </div>
              <p className="text-white/80">
                Understanding which colors are mandated versus conventional is critical for troubleshooting existing installations. You may encounter non-standard colors in older work, specialty applications, or installations done by less experienced workers.
              </p>
            </section>

            <section id="120-208v" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">120/208V System Colors (Standard Convention)</h2>
              <p className="text-white/80 mb-4">
                The following color scheme is the standard industry convention for 120/208V wye systems commonly found in commercial and residential applications:
              </p>
              <div className="overflow-x-auto my-6">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-white/20">
                      <th className="text-left py-3 px-4 text-white/60">Conductor</th>
                      <th className="text-left py-3 px-4 text-white/60">Color</th>
                      <th className="text-left py-3 px-4 text-white/60">Voltage to Neutral</th>
                      <th className="text-left py-3 px-4 text-white/60">NEC Mandated?</th>
                    </tr>
                  </thead>
                  <tbody className="text-white/80">
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-semibold">Phase A</td>
                      <td className="py-3 px-4"><span className="inline-block w-3 h-3 rounded-full bg-black border border-white/30 mr-2"></span>Black</td>
                      <td className="py-3 px-4 font-mono">120V</td>
                      <td className="py-3 px-4">No (convention)</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-semibold">Phase B</td>
                      <td className="py-3 px-4"><span className="inline-block w-3 h-3 rounded-full bg-red-600 mr-2"></span>Red</td>
                      <td className="py-3 px-4 font-mono">120V</td>
                      <td className="py-3 px-4">No (convention)</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-semibold">Phase C</td>
                      <td className="py-3 px-4"><span className="inline-block w-3 h-3 rounded-full bg-blue-600 mr-2"></span>Blue</td>
                      <td className="py-3 px-4 font-mono">120V</td>
                      <td className="py-3 px-4">No (convention)</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-semibold">Neutral</td>
                      <td className="py-3 px-4"><span className="inline-block w-3 h-3 rounded-full bg-white mr-2"></span>White</td>
                      <td className="py-3 px-4 font-mono">0V</td>
                      <td className="py-3 px-4">Yes (NEC 200.6)</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-semibold">Ground</td>
                      <td className="py-3 px-4"><span className="inline-block w-3 h-3 rounded-full bg-green-600 mr-2"></span>Green or Bare</td>
                      <td className="py-3 px-4 font-mono">0V</td>
                      <td className="py-3 px-4">Yes (NEC 250.119)</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-white/80">
                In residential 120/240V single-phase systems (split-phase), the convention is black for Line 1, red for Line 2, white for neutral, and green or bare for ground. The 240V circuits use both the black and red conductors.
              </p>
            </section>

            <section id="277-480v" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">277/480V System Colors (Standard Convention)</h2>
              <p className="text-white/80 mb-4">
                Commercial and industrial 277/480V wye systems use a different color convention to distinguish them from 120/208V systems. This is critical for safety&mdash;accidentally connecting 480V equipment to a 277V circuit (or vice versa) can cause fires, equipment damage, and electrocution.
              </p>
              <div className="overflow-x-auto my-6">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-white/20">
                      <th className="text-left py-3 px-4 text-white/60">Conductor</th>
                      <th className="text-left py-3 px-4 text-white/60">Color</th>
                      <th className="text-left py-3 px-4 text-white/60">Voltage to Neutral</th>
                      <th className="text-left py-3 px-4 text-white/60">NEC Mandated?</th>
                    </tr>
                  </thead>
                  <tbody className="text-white/80">
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-semibold">Phase A</td>
                      <td className="py-3 px-4"><span className="inline-block w-3 h-3 rounded-full bg-amber-700 mr-2"></span>Brown</td>
                      <td className="py-3 px-4 font-mono">277V</td>
                      <td className="py-3 px-4">No (convention)</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-semibold">Phase B</td>
                      <td className="py-3 px-4"><span className="inline-block w-3 h-3 rounded-full bg-orange-500 mr-2"></span>Orange</td>
                      <td className="py-3 px-4 font-mono">277V</td>
                      <td className="py-3 px-4">No (convention)</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-semibold">Phase C</td>
                      <td className="py-3 px-4"><span className="inline-block w-3 h-3 rounded-full bg-yellow-400 mr-2"></span>Yellow</td>
                      <td className="py-3 px-4 font-mono">277V</td>
                      <td className="py-3 px-4">No (convention)</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-semibold">Neutral</td>
                      <td className="py-3 px-4"><span className="inline-block w-3 h-3 rounded-full bg-gray-400 mr-2"></span>Gray</td>
                      <td className="py-3 px-4 font-mono">0V</td>
                      <td className="py-3 px-4">Yes (NEC 200.6)</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-semibold">Ground</td>
                      <td className="py-3 px-4"><span className="inline-block w-3 h-3 rounded-full bg-green-600 mr-2"></span>Green or Bare</td>
                      <td className="py-3 px-4 font-mono">0V</td>
                      <td className="py-3 px-4">Yes (NEC 250.119)</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="bg-cyan-900/30 border border-cyan-500/30 rounded-xl p-6 my-6">
                <h3 className="font-semibold text-cyan-300 mb-2">Multi-Voltage Buildings</h3>
                <p className="text-white/70 text-sm">
                  NEC 210.5(C) requires a means of identifying ungrounded conductors by branch circuit or system in buildings with more than one voltage system. This can be done with color coding, marking tape, tagging, or other approved means. A legend must be posted at each panelboard identifying the system and the color/marking used.
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

            <section id="neutral" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Neutral (Grounded) Conductor Identification</h2>
              <p className="text-white/80 mb-4">
                NEC 200.6 strictly governs the identification of grounded (neutral) conductors. This is one of the few NEC-mandated color requirements:
              </p>
              <div className="space-y-4 my-6">
                <div className="bg-white/5 rounded-xl p-4">
                  <p className="text-purple-400 font-semibold">Conductors 6 AWG and Smaller (200.6(A))</p>
                  <p className="text-white/60 text-sm mt-1">Must be identified by a continuous white or gray outer finish, or by three continuous white or gray stripes along the conductor&apos;s entire length on other than green insulation.</p>
                </div>
                <div className="bg-white/5 rounded-xl p-4">
                  <p className="text-purple-400 font-semibold">Conductors 4 AWG and Larger (200.6(B))</p>
                  <p className="text-white/60 text-sm mt-1">Must be identified by a continuous white or gray outer finish, by three continuous white or gray stripes along the entire length, or at the time of installation by white or gray marking at each termination point (tape, paint, or other effective means).</p>
                </div>
                <div className="bg-white/5 rounded-xl p-4">
                  <p className="text-purple-400 font-semibold">Flexible Cords (200.6(C))</p>
                  <p className="text-white/60 text-sm mt-1">The grounded conductor in flexible cords is identified by a white or gray outer finish, a ridge on the insulation, or a stripe along the conductor length.</p>
                </div>
              </div>
              <div className="bg-orange-900/30 border border-orange-500/30 rounded-xl p-6 my-6">
                <h3 className="font-semibold text-orange-300 mb-2">Critical Rule: NEC 200.7</h3>
                <p className="text-white/70 text-sm">
                  White or gray conductors must only be used for the grounded (neutral) conductor, with limited exceptions. NEC 200.7(C) allows a white conductor to be used as an ungrounded (hot) conductor in switch loops and other specific applications, but it must be permanently re-identified with a color other than white, gray, or green at each visible and accessible location.
                </p>
              </div>
            </section>

            <section id="grounding" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Grounding Conductor Colors</h2>
              <p className="text-white/80 mb-4">
                NEC 250.119 mandates strict color requirements for equipment grounding conductors (EGCs):
              </p>
              <ul className="list-disc list-inside text-white/70 space-y-2 mb-4">
                <li><strong>Green</strong> &mdash; Continuous green outer finish</li>
                <li><strong>Green with yellow stripe(s)</strong> &mdash; Green with one or more yellow stripes</li>
                <li><strong>Bare (uninsulated)</strong> &mdash; No insulation covering</li>
              </ul>
              <p className="text-white/80 mb-4">
                For conductors larger than 6 AWG, the EGC may be permanently identified at each termination point using green marking tape, green paint, or other effective means at the time of installation (250.119(A)).
              </p>
              <div className="bg-green-900/30 border border-green-500/30 rounded-xl p-6 my-6">
                <h3 className="font-semibold text-green-300 mb-2">Never Use Green for Other Purposes</h3>
                <p className="text-white/70 text-sm">
                  NEC 250.119 explicitly prohibits using green, green with yellow stripe, or bare conductors for any purpose other than equipment grounding. This is an absolute rule with no exceptions. Using a green conductor as a current-carrying conductor creates a potentially lethal hazard.
                </p>
              </div>
            </section>

            <section id="high-leg" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">High-Leg Delta Identification</h2>
              <p className="text-white/80 mb-4">
                In a 4-wire delta system (commonly 120/240V), one phase has a higher voltage to ground (approximately 208V) than the other two phases (120V). NEC 110.15 requires specific identification of this &quot;high leg&quot; or &quot;wild leg&quot;:
              </p>
              <div className="bg-purple-900/30 border border-purple-500/30 rounded-xl p-6 my-6">
                <h3 className="font-semibold text-purple-300 mb-2">NEC 110.15 Requirement</h3>
                <p className="text-white/70 text-sm mb-2">
                  The high-leg conductor must be durably and permanently marked by an outer finish that is <strong>orange</strong> in color, or by other effective means. This marking must be present at each point where a connection is made if the grounded (neutral) conductor is also present.
                </p>
                <p className="text-white/70 text-sm">
                  The high-leg must be connected to the &quot;B&quot; phase (center position) of a panelboard per NEC 408.3(E). This standardized position prevents accidental connection of 120V loads to the 208V high leg.
                </p>
              </div>
              <div className="overflow-x-auto my-6">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-white/20">
                      <th className="text-left py-3 px-4 text-white/60">Conductor</th>
                      <th className="text-left py-3 px-4 text-white/60">Color</th>
                      <th className="text-left py-3 px-4 text-white/60">Voltage to Ground</th>
                    </tr>
                  </thead>
                  <tbody className="text-white/80">
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-semibold">Phase A</td>
                      <td className="py-3 px-4">Black (convention)</td>
                      <td className="py-3 px-4 font-mono">120V</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-semibold">Phase B (High Leg)</td>
                      <td className="py-3 px-4">Orange (NEC required)</td>
                      <td className="py-3 px-4 font-mono">208V</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-semibold">Phase C</td>
                      <td className="py-3 px-4">Blue (convention)</td>
                      <td className="py-3 px-4 font-mono">120V</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-semibold">Neutral</td>
                      <td className="py-3 px-4">White (NEC required)</td>
                      <td className="py-3 px-4 font-mono">0V</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section id="re-identification" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Conductor Re-Identification Rules</h2>
              <p className="text-white/80 mb-4">
                There are situations where conductors must be re-identified from their original insulation color. The NEC provides specific rules for how and when this is permitted:
              </p>
              <div className="space-y-4 my-6">
                <div className="bg-white/5 rounded-xl p-4">
                  <p className="text-purple-400 font-semibold">Re-Identifying White Conductors as Hot</p>
                  <p className="text-white/60 text-sm mt-1">NEC 200.7(C) permits re-identifying white or gray conductors as ungrounded (hot) conductors in specific situations (such as switch loops in cables). The conductor must be permanently re-identified at each location where it is visible and accessible using tape, paint, or other permanent means. The new color must not be white, gray, or green.</p>
                </div>
                <div className="bg-white/5 rounded-xl p-4">
                  <p className="text-purple-400 font-semibold">Large Conductor Marking (4 AWG and Larger)</p>
                  <p className="text-white/60 text-sm mt-1">For conductors 4 AWG and larger, identification at termination points is acceptable. Use colored tape, paint, or other durable marking. This applies to neutral identification (white or gray tape at terminations) and equipment grounding (green tape at terminations).</p>
                </div>
                <div className="bg-white/5 rounded-xl p-4">
                  <p className="text-purple-400 font-semibold">Prohibited Re-Identification</p>
                  <p className="text-white/60 text-sm mt-1">You cannot re-identify a green, green with yellow stripe, or bare conductor for any purpose other than grounding. You also cannot use white or gray for ungrounded conductors in conduit/raceway systems (only permitted in cables with specific exceptions).</p>
                </div>
              </div>
            </section>

            <section id="dc-systems" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">DC System Color Codes</h2>
              <p className="text-white/80 mb-4">
                With the growing prevalence of solar PV systems, battery storage, and DC lighting, understanding DC conductor colors is increasingly important:
              </p>
              <div className="overflow-x-auto my-6">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-white/20">
                      <th className="text-left py-3 px-4 text-white/60">Conductor</th>
                      <th className="text-left py-3 px-4 text-white/60">Convention Color</th>
                      <th className="text-left py-3 px-4 text-white/60">Notes</th>
                    </tr>
                  </thead>
                  <tbody className="text-white/80">
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-semibold">Positive (+)</td>
                      <td className="py-3 px-4">Red</td>
                      <td className="py-3 px-4">Ungrounded DC positive conductor</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-semibold">Negative (-)</td>
                      <td className="py-3 px-4">Black</td>
                      <td className="py-3 px-4">Ungrounded DC negative conductor</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-semibold">Grounded Conductor</td>
                      <td className="py-3 px-4">White</td>
                      <td className="py-3 px-4">If system is grounded (per NEC 200.6)</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-semibold">Ground</td>
                      <td className="py-3 px-4">Green or Bare</td>
                      <td className="py-3 px-4">Equipment grounding conductor (NEC 250.119)</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-white/80">
                For solar PV systems, conductor marking must comply with NEC Article 690. PV source circuits and output circuits have specific marking requirements per 690.31(B) to distinguish them from other system wiring.
              </p>
            </section>

            <section id="common-mistakes" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Common Color Code Mistakes</h2>
              <p className="text-white/80 mb-4">
                These are the most frequent wire color code violations encountered during inspections:
              </p>
              <ul className="list-disc list-inside text-white/70 space-y-2 mb-4">
                <li><strong>Using green wire as a current-carrying conductor</strong> &mdash; This is extremely dangerous and a direct NEC violation. Green is reserved exclusively for grounding.</li>
                <li><strong>Unmarked white wire used as hot in raceway</strong> &mdash; While permitted in cable assemblies with proper re-identification, using an unmarked white wire as hot in conduit is a violation.</li>
                <li><strong>Mixing 120/208V and 277/480V color schemes</strong> &mdash; Using black/red/blue on a 480V system creates a serious safety hazard for anyone assuming standard 120/208V colors.</li>
                <li><strong>Not marking the high-leg orange</strong> &mdash; Failure to identify the high-leg delta conductor as orange violates NEC 110.15 and creates a 208V shock/equipment damage hazard on a 120V circuit.</li>
                <li><strong>Re-identifying conductors with non-durable means</strong> &mdash; Using non-permanent markers, temporary tape, or other easily removed markings does not satisfy NEC requirements.</li>
                <li><strong>Missing panelboard identification legend</strong> &mdash; NEC 210.5(C) requires a posted legend at each panelboard in buildings with multiple voltage systems.</li>
              </ul>
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
                <Link href="/blog/thhn-vs-thwn-wire-differences" className="bg-white/5 hover:bg-white/10 rounded-xl p-6 transition-colors">
                  <span className="text-orange-400 text-sm">Materials</span>
                  <h3 className="font-semibold mt-2">THHN vs THWN: Wire Differences Explained</h3>
                </Link>
                <Link href="/blog/wire-sizing-guide-nec-ampacity-tables" className="bg-white/5 hover:bg-white/10 rounded-xl p-6 transition-colors">
                  <span className="text-cyan-400 text-sm">Calculations</span>
                  <h3 className="font-semibold mt-2">Wire Sizing Guide: NEC Ampacity Tables</h3>
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
