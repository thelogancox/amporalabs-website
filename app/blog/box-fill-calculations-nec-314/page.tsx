import { Metadata } from "next";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import { BlogPostingJsonLd, BreadcrumbJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Box Fill Calculations: NEC 314.16 Complete Guide",
  description: "Master box fill calculations using NEC 314.16. Learn how to count conductors, calculate volume requirements, and select the right electrical box size for any installation.",
  keywords: [
    "box fill calculation",
    "NEC 314.16",
    "electrical box sizing",
    "conductor volume",
    "junction box sizing",
    "device box calculation",
    "box fill NEC",
    "electrical box volume",
    "outlet box sizing",
    "box fill chart"
  ],
  openGraph: {
    title: "Box Fill Calculations: NEC 314.16 Guide",
    description: "Complete guide to electrical box fill calculations per NEC 314.16.",
    type: "article",
    publishedTime: "2025-02-03",
  },
};

// SVG Illustrations
function HeroIllustration() {
  return (
    <svg viewBox="0 0 400 180" className="w-full h-44 md:h-52" aria-label="Electrical box with conductors illustration">
      {/* Box outline */}
      <rect x="100" y="20" width="200" height="140" rx="4" fill="#1f2937" stroke="#4b5563" strokeWidth="3"/>
      <rect x="110" y="30" width="180" height="120" rx="2" fill="#111827" stroke="#374151" strokeWidth="1"/>

      {/* Conductors entering from left */}
      <g>
        <line x1="20" y1="60" x2="110" y2="60" stroke="#ef4444" strokeWidth="4" strokeLinecap="round"/>
        <line x1="20" y1="80" x2="110" y2="80" stroke="#1f1f1f" strokeWidth="4" strokeLinecap="round"/>
        <line x1="20" y1="100" x2="110" y2="100" stroke="#22c55e" strokeWidth="4" strokeLinecap="round"/>
        <text x="15" y="80" textAnchor="end" fill="#9ca3af" fontSize="8">12 AWG</text>
      </g>

      {/* Conductors exiting right */}
      <g>
        <line x1="290" y1="60" x2="380" y2="60" stroke="#ef4444" strokeWidth="4" strokeLinecap="round"/>
        <line x1="290" y1="80" x2="380" y2="80" stroke="#1f1f1f" strokeWidth="4" strokeLinecap="round"/>
        <line x1="290" y1="100" x2="380" y2="100" stroke="#22c55e" strokeWidth="4" strokeLinecap="round"/>
      </g>

      {/* Conductors inside box - curved */}
      <path d="M 110 60 Q 150 40, 200 50 Q 250 60, 290 60" stroke="#ef4444" strokeWidth="3" fill="none"/>
      <path d="M 110 80 Q 150 110, 200 90 Q 250 70, 290 80" stroke="#1f1f1f" strokeWidth="3" fill="none"/>
      <path d="M 110 100 Q 150 130, 200 120 Q 250 110, 290 100" stroke="#22c55e" strokeWidth="3" fill="none"/>

      {/* Ground wires */}
      <circle cx="200" cy="130" r="8" fill="none" stroke="#16a34a" strokeWidth="2"/>
      <line x1="110" y1="120" x2="192" y2="130" stroke="#16a34a" strokeWidth="2"/>
      <line x1="208" y1="130" x2="290" y2="120" stroke="#16a34a" strokeWidth="2"/>

      {/* Volume label */}
      <rect x="150" y="65" width="100" height="30" rx="4" fill="#8b5cf6" fillOpacity="0.2" stroke="#8b5cf6" strokeWidth="1"/>
      <text x="200" y="85" textAnchor="middle" fill="#a78bfa" fontSize="10" fontWeight="bold">18 cu. in.</text>

      {/* Knockout symbols */}
      <circle cx="110" cy="60" r="8" fill="none" stroke="#6b7280" strokeWidth="1" strokeDasharray="2"/>
      <circle cx="110" cy="100" r="8" fill="none" stroke="#6b7280" strokeWidth="1" strokeDasharray="2"/>
      <circle cx="290" cy="60" r="8" fill="none" stroke="#6b7280" strokeWidth="1" strokeDasharray="2"/>
      <circle cx="290" cy="100" r="8" fill="none" stroke="#6b7280" strokeWidth="1" strokeDasharray="2"/>
    </svg>
  );
}

function VolumeTable() {
  return (
    <svg viewBox="0 0 380 200" className="w-full h-52" aria-label="NEC Table 314.16(B) conductor volume allowances">
      <rect x="10" y="10" width="360" height="180" rx="8" fill="#1f2937" stroke="#374151" strokeWidth="2"/>

      <text x="190" y="35" textAnchor="middle" fill="#fff" fontSize="12" fontWeight="bold">Table 314.16(B) - Conductor Volume</text>

      {/* Headers */}
      <text x="80" y="60" textAnchor="middle" fill="#9ca3af" fontSize="10" fontWeight="bold">Wire Size</text>
      <text x="200" y="60" textAnchor="middle" fill="#9ca3af" fontSize="10" fontWeight="bold">Volume (cu. in.)</text>
      <text x="310" y="60" textAnchor="middle" fill="#9ca3af" fontSize="10" fontWeight="bold">Volume (cm³)</text>

      <line x1="30" y1="70" x2="350" y2="70" stroke="#374151" strokeWidth="1"/>

      {/* Data rows */}
      {[
        { size: "#18 AWG", cuIn: "1.50", cm3: "24.6" },
        { size: "#16 AWG", cuIn: "1.75", cm3: "28.7" },
        { size: "#14 AWG", cuIn: "2.00", cm3: "32.8" },
        { size: "#12 AWG", cuIn: "2.25", cm3: "36.9" },
        { size: "#10 AWG", cuIn: "2.50", cm3: "41.0" },
        { size: "#8 AWG", cuIn: "3.00", cm3: "49.2" },
        { size: "#6 AWG", cuIn: "5.00", cm3: "81.9" },
      ].map((row, i) => (
        <g key={i}>
          <text x="80" y={90 + i * 16} textAnchor="middle" fill="#e5e7eb" fontSize="10">{row.size}</text>
          <text x="200" y={90 + i * 16} textAnchor="middle" fill="#22c55e" fontSize="10" fontWeight="bold">{row.cuIn}</text>
          <text x="310" y={90 + i * 16} textAnchor="middle" fill="#9ca3af" fontSize="10">{row.cm3}</text>
        </g>
      ))}
    </svg>
  );
}

function CountingDiagram() {
  return (
    <svg viewBox="0 0 400 220" className="w-full h-56" aria-label="Box fill counting rules diagram">
      <text x="200" y="20" textAnchor="middle" fill="#fff" fontSize="14" fontWeight="bold">Counting Conductors</text>

      {/* Row 1 - Regular conductors */}
      <g transform="translate(20, 40)">
        <rect x="0" y="0" width="170" height="35" rx="4" fill="#1f2937" stroke="#374151"/>
        <line x1="20" y1="17" x2="60" y2="17" stroke="#ef4444" strokeWidth="4" strokeLinecap="round"/>
        <text x="90" y="22" fill="#e5e7eb" fontSize="10">Each conductor = 1</text>
      </g>

      {/* Row 2 - Ground wires */}
      <g transform="translate(200, 40)">
        <rect x="0" y="0" width="180" height="35" rx="4" fill="#1f2937" stroke="#374151"/>
        <line x1="20" y1="17" x2="40" y2="17" stroke="#16a34a" strokeWidth="3"/>
        <line x1="45" y1="17" x2="65" y2="17" stroke="#16a34a" strokeWidth="3"/>
        <text x="100" y="22" fill="#e5e7eb" fontSize="10">All EGCs = 1 total</text>
      </g>

      {/* Row 3 - Devices */}
      <g transform="translate(20, 85)">
        <rect x="0" y="0" width="170" height="50" rx="4" fill="#1f2937" stroke="#374151"/>
        <rect x="15" y="10" width="30" height="30" rx="2" fill="#4b5563"/>
        <circle cx="30" cy="18" r="4" fill="#22c55e"/>
        <circle cx="30" cy="32" r="4" fill="#1f1f1f"/>
        <text x="90" y="27" fill="#e5e7eb" fontSize="10">Each device</text>
        <text x="90" y="42" fill="#fbbf24" fontSize="10" fontWeight="bold">= 2 conductors</text>
      </g>

      {/* Row 4 - Clamps */}
      <g transform="translate(200, 85)">
        <rect x="0" y="0" width="180" height="50" rx="4" fill="#1f2937" stroke="#374151"/>
        <ellipse cx="35" cy="25" rx="15" ry="10" fill="#6b7280" stroke="#9ca3af"/>
        <ellipse cx="60" cy="25" rx="15" ry="10" fill="#6b7280" stroke="#9ca3af"/>
        <text x="110" y="27" fill="#e5e7eb" fontSize="10">All clamps</text>
        <text x="110" y="42" fill="#fbbf24" fontSize="10" fontWeight="bold">= 1 total</text>
      </g>

      {/* Row 5 - Support fittings */}
      <g transform="translate(20, 145)">
        <rect x="0" y="0" width="170" height="50" rx="4" fill="#1f2937" stroke="#374151"/>
        <rect x="20" y="15" width="35" height="20" rx="2" fill="#78716c" stroke="#a8a29e"/>
        <text x="90" y="32" fill="#e5e7eb" fontSize="10">Fixture stud = 1</text>
        <text x="90" y="47" fill="#e5e7eb" fontSize="10">Hickey = 1</text>
      </g>

      {/* Row 6 - Pigtails */}
      <g transform="translate(200, 145)">
        <rect x="0" y="0" width="180" height="50" rx="4" fill="#1f2937" stroke="#374151"/>
        <path d="M 20 25 Q 35 15, 50 25 Q 65 35, 80 25" stroke="#ef4444" strokeWidth="3" fill="none"/>
        <text x="115" y="27" fill="#e5e7eb" fontSize="10">Pigtails &lt;6"</text>
        <text x="115" y="42" fill="#22c55e" fontSize="10" fontWeight="bold">= 0 (don&apos;t count)</text>
      </g>

      {/* Formula box */}
      <rect x="20" y="205" width="360" height="0" rx="4" fill="#8b5cf6" fillOpacity="0.1"/>
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
            { name: "Box Fill Calculations", url: "https://amporalabs.com/blog/box-fill-calculations-nec-314" },
          ]}
        />
        <BlogPostingJsonLd
          headline="Box Fill Calculations: NEC 314.16 Complete Guide"
          description="Master box fill calculations using NEC 314.16."
          datePublished="2025-02-03"
          url="https://amporalabs.com/blog/box-fill-calculations-nec-314"
        />

        <article className="max-w-4xl mx-auto px-6 py-12">
          {/* Breadcrumb */}
          <nav className="text-sm text-white/60 mb-8">
            <Link href="/" className="hover:text-white">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/blog" className="hover:text-white">Blog</Link>
            <span className="mx-2">/</span>
            <span className="text-white">Box Fill Calculations</span>
          </nav>

          {/* Hero */}
          <header className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <span className="px-3 py-1 bg-amber-600/30 text-amber-300 text-sm font-medium rounded-full">
                Calculations
              </span>
              <span className="text-white/40 text-sm">February 3, 2025</span>
              <span className="text-white/40 text-sm">• 11 min read</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">
              Box Fill Calculations: NEC 314.16 Complete Guide
            </h1>
            <p className="text-xl text-white/70">
              Overstuffed boxes cause callbacks and code violations. Learn the proper method for sizing electrical boxes.
            </p>
          </header>

          {/* Hero Illustration */}
          <div className="mb-12 bg-gradient-to-br from-amber-900/20 to-orange-900/20 rounded-2xl p-6 border border-white/10">
            <HeroIllustration />
          </div>

          {/* Content */}
          <div className="prose prose-invert prose-lg max-w-none">
            <h2>Why Box Fill Matters</h2>
            <p>
              An overfilled electrical box creates several hazards:
            </p>
            <ul>
              <li><strong>Heat buildup:</strong> Conductors generate heat; overcrowding prevents dissipation</li>
              <li><strong>Damaged insulation:</strong> Cramming wires can nick or compress insulation</li>
              <li><strong>Difficult terminations:</strong> Hard to make secure connections in tight spaces</li>
              <li><strong>Code violations:</strong> Inspectors check box fill—it's a common fail point</li>
            </ul>

            <h2>The Basic Concept</h2>
            <p>
              NEC 314.16 requires that the total volume of conductors, devices, and fittings in a box
              must not exceed the box's rated volume. The calculation involves:
            </p>
            <ol>
              <li>Counting all items that take up space</li>
              <li>Multiplying by the volume allowance for the conductor size</li>
              <li>Comparing to the box's rated volume</li>
            </ol>

            <h2>Conductor Volume Allowances</h2>
            <p>
              Each conductor size has a specific volume allowance from NEC Table 314.16(B):
            </p>

            <div className="my-8">
              <VolumeTable />
            </div>

            <h2>Counting Rules</h2>
            <p>
              The tricky part of box fill is knowing what to count and how. Here are the rules:
            </p>

            <div className="my-8">
              <CountingDiagram />
            </div>

            <div className="bg-white/5 rounded-xl p-6 my-6">
              <h4 className="text-white font-semibold mb-4">Summary of Counting Rules:</h4>
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="py-2 text-white">Item</th>
                    <th className="py-2 text-white">Count As</th>
                  </tr>
                </thead>
                <tbody className="text-white/70">
                  <tr className="border-b border-white/5">
                    <td className="py-2">Each conductor entering box</td>
                    <td className="py-2">1 conductor</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-2">All equipment grounding conductors</td>
                    <td className="py-2">1 conductor (total)</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-2">Each yoke/strap (device)</td>
                    <td className="py-2">2 conductors</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-2">All internal cable clamps</td>
                    <td className="py-2">1 conductor (total)</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-2">Fixture stud or hickey</td>
                    <td className="py-2">1 conductor each</td>
                  </tr>
                  <tr>
                    <td className="py-2">Conductors ≤6" not spliced</td>
                    <td className="py-2">0 (don't count)</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2>Step-by-Step Example</h2>
            <div className="bg-gradient-to-r from-purple-900/30 to-amber-900/30 rounded-xl p-6 my-6">
              <h4 className="text-white font-semibold mb-4">Problem: Size a box for the following:</h4>
              <ul className="text-white/70 mb-4">
                <li>• Two 14/2 NM cables (4 current-carrying + 2 grounds)</li>
                <li>• One single-pole switch</li>
                <li>• Internal cable clamps</li>
              </ul>

              <div className="space-y-3 text-white/80">
                <p><strong>Step 1: Count conductors</strong></p>
                <ul className="ml-4 text-sm">
                  <li>Hot conductors: 2 × 1 = 2</li>
                  <li>Neutral conductors: 2 × 1 = 2</li>
                  <li>Equipment grounds: 1 (all count as 1)</li>
                  <li>Device (switch): 2</li>
                  <li>Clamps: 1</li>
                </ul>
                <p className="font-mono">Total: 2 + 2 + 1 + 2 + 1 = <strong>8 conductor equivalents</strong></p>

                <p><strong>Step 2: Calculate volume needed</strong></p>
                <p className="font-mono">8 × 2.00 cu. in. (#14 AWG) = <strong>16 cu. in. minimum</strong></p>

                <p><strong>Step 3: Select box</strong></p>
                <p className="text-green-400">→ Use 18 cu. in. device box (common 2"×3" single-gang)</p>
              </div>
            </div>

            <h2>Common Box Volumes</h2>
            <div className="bg-white/5 rounded-xl p-6 my-6">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="py-2 text-white">Box Type</th>
                    <th className="py-2 text-white">Volume (cu. in.)</th>
                  </tr>
                </thead>
                <tbody className="text-white/70">
                  <tr className="border-b border-white/5">
                    <td className="py-2">Single-gang plastic (old work)</td>
                    <td className="py-2">14 - 18</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-2">Single-gang metal (new work)</td>
                    <td className="py-2">12.5 - 18</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-2">Two-gang plastic</td>
                    <td className="py-2">30 - 34</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-2">4" square × 1-1/2" deep</td>
                    <td className="py-2">21</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-2">4" square × 2-1/8" deep</td>
                    <td className="py-2">30.3</td>
                  </tr>
                  <tr>
                    <td className="py-2">4-11/16" square × 2-1/8"</td>
                    <td className="py-2">42</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2>Special Considerations</h2>

            <h3>Mixed Conductor Sizes</h3>
            <p>
              When a box contains conductors of different sizes, each conductor uses the volume allowance
              for its size. Devices, clamps, and grounds use the volume of the <em>largest</em> conductor
              in the box.
            </p>

            <h3>Barrier/Divider Fittings</h3>
            <p>
              If a box has a barrier that creates separate compartments, calculate fill for each
              compartment separately.
            </p>

            <h3>Extension Rings</h3>
            <p>
              When using extension rings, add the ring's volume to the base box volume. This is a
              great solution when you need more space.
            </p>

            <h2>Common Mistakes</h2>
            <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-6 my-6">
              <h4 className="text-red-400 font-semibold mb-3">Avoid These Errors:</h4>
              <ul className="text-white/70 space-y-2">
                <li><strong>Forgetting device count:</strong> Each switch or receptacle counts as 2 conductors</li>
                <li><strong>Counting EGCs separately:</strong> All grounds together count as just 1</li>
                <li><strong>Wrong conductor size:</strong> Use the actual size, not assumed size</li>
                <li><strong>Ignoring clamps:</strong> Internal clamps take volume too</li>
              </ul>
            </div>

            <h2>Pro Tips</h2>
            <div className="bg-green-500/10 border border-green-500/30 rounded-xl p-6 my-6">
              <ul className="text-white/70 space-y-2">
                <li><strong>When in doubt, go bigger:</strong> The cost difference is minimal</li>
                <li><strong>4-square + mud ring:</strong> Provides more volume and flexibility</li>
                <li><strong>Deep boxes:</strong> 2-1/8" deep boxes provide significantly more volume than standard</li>
                <li><strong>Check the box:</strong> Volume is stamped on plastic boxes; metal boxes use NEC Table 314.16(A)</li>
              </ul>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-12 bg-gradient-to-r from-amber-900/30 to-orange-900/30 rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-display font-bold mb-4">
              Calculate Box Fill Instantly
            </h3>
            <p className="text-white/70 mb-6">
              Download Ampora for box fill calculations, wire sizing, and NEC code reference.
            </p>
            <a
              href="https://apps.apple.com/us/app/ampora/id6753693522"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-black font-semibold rounded-full hover:bg-white/90 transition-colors"
            >
              Download Free on App Store
            </a>
          </div>

          {/* Related Posts */}
          <div className="mt-12 pt-8 border-t border-white/10">
            <h3 className="text-xl font-display font-bold mb-6">Related Articles</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <Link href="/blog/conduit-fill-calculation-guide" className="group bg-white/5 hover:bg-white/10 rounded-xl p-6 transition-all">
                <h4 className="font-semibold group-hover:text-purple-400 transition-colors">Conduit Fill Calculations</h4>
                <p className="text-white/60 text-sm mt-2">NEC Chapter 9 tables and the 40% rule.</p>
              </Link>
              <Link href="/blog/wire-sizing-guide-nec-ampacity-tables" className="group bg-white/5 hover:bg-white/10 rounded-xl p-6 transition-all">
                <h4 className="font-semibold group-hover:text-purple-400 transition-colors">Wire Sizing Guide</h4>
                <p className="text-white/60 text-sm mt-2">NEC ampacity tables explained.</p>
              </Link>
            </div>
          </div>
        </article>
      </div>
    </main>
  );
}
