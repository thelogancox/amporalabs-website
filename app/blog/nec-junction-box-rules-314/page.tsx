import { Metadata } from "next";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import { BlogPostingJsonLd, BreadcrumbJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "NEC Junction Box Rules: Article 314 Installation & Accessibility Requirements",
  description: "Complete guide to NEC Article 314 junction box rules. Learn junction box accessibility requirements (314.29), pull box sizing for straight and angle pulls (314.28), conduit body rules, box fill calculations, cover plate requirements, box support and mounting, and damp/wet location box installation.",
  keywords: [
    "junction box rules nec",
    "nec article 314",
    "junction box accessibility",
    "pull box sizing",
    "conduit body",
    "junction box installation",
    "electrical box requirements",
    "box accessibility code",
    "junction box cover plate",
    "pull box calculations"
  ],
  alternates: {
    canonical: "https://amporalabs.com/blog/nec-junction-box-rules-314",
  },
  openGraph: {
    title: "NEC Junction Box Rules: Article 314 Installation & Accessibility Requirements - Ampora",
    description: "Master NEC Article 314 junction box rules covering accessibility, pull box sizing, conduit bodies, box fill, cover plates, and wet location requirements.",
    url: "https://amporalabs.com/blog/nec-junction-box-rules-314",
    type: "article",
    publishedTime: "2026-03-04",
  },
};

function HeroIllustration() {
  return (
    <svg viewBox="0 0 400 180" className="w-full h-40 md:h-48" aria-label="Junction box and pull box diagrams showing NEC 314 installation requirements">
      {/* Background */}
      <rect x="10" y="10" width="380" height="160" rx="4" fill="#1f2937" stroke="#374151" strokeWidth="1"/>

      {/* Junction Box (left side) */}
      <g transform="translate(30, 25)">
        <text x="65" y="10" textAnchor="middle" fill="#a78bfa" fontSize="7" fontWeight="bold">JUNCTION BOX</text>

        {/* Box outline */}
        <rect x="20" y="18" width="90" height="70" rx="3" fill="#a78bfa" fillOpacity="0.1" stroke="#a78bfa" strokeWidth="1.5"/>

        {/* Cover plate (dashed) */}
        <rect x="18" y="16" width="94" height="74" rx="4" fill="none" stroke="#a78bfa" strokeWidth="1" strokeDasharray="3,2"/>

        {/* Conduit entries */}
        <rect x="0" y="38" width="20" height="10" rx="2" fill="#374151" stroke="#9ca3af" strokeWidth="1"/>
        <rect x="110" y="38" width="20" height="10" rx="2" fill="#374151" stroke="#9ca3af" strokeWidth="1"/>
        <rect x="50" y="0" width="10" height="18" rx="2" fill="#374151" stroke="#9ca3af" strokeWidth="1"/>
        <rect x="70" y="0" width="10" height="18" rx="2" fill="#374151" stroke="#9ca3af" strokeWidth="1"/>

        {/* Wires inside box */}
        <path d="M20 43 Q40 43 55 30" stroke="#ef4444" strokeWidth="1" fill="none"/>
        <path d="M20 43 Q40 50 55 60" stroke="#22c55e" strokeWidth="1" fill="none"/>
        <path d="M110 43 Q90 43 75 30" stroke="#3b82f6" strokeWidth="1" fill="none"/>
        <path d="M110 43 Q90 50 75 60" stroke="#eab308" strokeWidth="1" fill="none"/>

        {/* Wire nuts */}
        <circle cx="55" cy="28" r="4" fill="#ef4444" fillOpacity="0.4" stroke="#ef4444" strokeWidth="1"/>
        <circle cx="75" cy="28" r="4" fill="#3b82f6" fillOpacity="0.4" stroke="#3b82f6" strokeWidth="1"/>
        <circle cx="55" cy="62" r="4" fill="#22c55e" fillOpacity="0.4" stroke="#22c55e" strokeWidth="1"/>
        <circle cx="75" cy="62" r="4" fill="#eab308" fillOpacity="0.4" stroke="#eab308" strokeWidth="1"/>

        {/* Labels */}
        <text x="65" y="104" textAnchor="middle" fill="#9ca3af" fontSize="5">Cover Required</text>
        <text x="65" y="112" textAnchor="middle" fill="#9ca3af" fontSize="5">314.25(A)</text>

        {/* Accessibility arrow */}
        <text x="65" y="128" textAnchor="middle" fill="#a78bfa" fontSize="5" fontWeight="bold">Accessible 314.29</text>
      </g>

      {/* Pull Box (right side) */}
      <g transform="translate(210, 20)">
        <text x="75" y="10" textAnchor="middle" fill="#22d3ee" fontSize="7" fontWeight="bold">PULL BOX - STRAIGHT PULL</text>

        {/* Box outline */}
        <rect x="15" y="18" width="120" height="60" rx="3" fill="#22d3ee" fillOpacity="0.1" stroke="#22d3ee" strokeWidth="1.5"/>

        {/* Conduit left */}
        <rect x="0" y="38" width="15" height="12" rx="2" fill="#374151" stroke="#9ca3af" strokeWidth="1"/>
        {/* Conduit right */}
        <rect x="135" y="38" width="15" height="12" rx="2" fill="#374151" stroke="#9ca3af" strokeWidth="1"/>

        {/* Conductors through box */}
        <line x1="0" y1="41" x2="150" y2="41" stroke="#ef4444" strokeWidth="1"/>
        <line x1="0" y1="44" x2="150" y2="44" stroke="#3b82f6" strokeWidth="1"/>
        <line x1="0" y1="47" x2="150" y2="47" stroke="#22c55e" strokeWidth="1"/>

        {/* Dimension line */}
        <line x1="15" y1="86" x2="135" y2="86" stroke="#f59e0b" strokeWidth="1"/>
        <line x1="15" y1="82" x2="15" y2="90" stroke="#f59e0b" strokeWidth="1"/>
        <line x1="135" y1="82" x2="135" y2="90" stroke="#f59e0b" strokeWidth="1"/>
        <text x="75" y="94" textAnchor="middle" fill="#f59e0b" fontSize="6" fontWeight="bold">L = 8 x Trade Size</text>

        {/* Largest raceway label */}
        <text x="75" y="106" textAnchor="middle" fill="#9ca3af" fontSize="5">314.28(A)(1)</text>
      </g>

      {/* Angle Pull Box (bottom right) */}
      <g transform="translate(220, 115)">
        <text x="55" y="8" textAnchor="middle" fill="#f59e0b" fontSize="6" fontWeight="bold">ANGLE PULL</text>

        {/* Box outline */}
        <rect x="15" y="14" width="55" height="45" rx="3" fill="#f59e0b" fillOpacity="0.1" stroke="#f59e0b" strokeWidth="1.5"/>

        {/* Conduit left */}
        <rect x="0" y="28" width="15" height="10" rx="2" fill="#374151" stroke="#9ca3af" strokeWidth="1"/>
        {/* Conduit bottom */}
        <rect x="35" y="59" width="10" height="12" rx="2" fill="#374151" stroke="#9ca3af" strokeWidth="1"/>

        {/* Conductor path */}
        <path d="M0 33 L40 33 L40 71" stroke="#ef4444" strokeWidth="1" fill="none"/>

        {/* Formula */}
        <text x="100" y="30" fill="#f59e0b" fontSize="5.5" fontWeight="bold">6 x Trade Size</text>
        <text x="100" y="40" fill="#f59e0b" fontSize="5.5" fontWeight="bold">+ All Others</text>
        <text x="100" y="52" fill="#9ca3af" fontSize="5">314.28(A)(2)</text>
      </g>
    </svg>
  );
}

export default function NECJunctionBoxRules314Page() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navigation />
      <div className="pt-20">
        <BreadcrumbJsonLd
          items={[
            { name: "Home", url: "https://amporalabs.com" },
            { name: "Blog", url: "https://amporalabs.com/blog" },
            { name: "NEC Junction Box Rules: Article 314", url: "https://amporalabs.com/blog/nec-junction-box-rules-314" },
          ]}
        />
        <BlogPostingJsonLd
          headline="NEC Junction Box Rules: Article 314 Installation & Accessibility Requirements"
          description="Complete guide to NEC Article 314 junction box rules covering accessibility, pull box sizing, conduit bodies, box fill, cover plates, and wet location requirements."
          datePublished="2026-03-04"
          dateModified="2026-03-04"
          url="https://amporalabs.com/blog/nec-junction-box-rules-314"
          wordCount={4500}
          keywords={["junction box rules NEC", "NEC Article 314", "pull box sizing", "junction box accessibility", "conduit body"]}
        />

        <article className="max-w-4xl mx-auto px-6 py-12">
          {/* Breadcrumb */}
          <nav className="text-sm text-white/60 mb-8">
            <Link href="/" className="hover:text-white">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/blog" className="hover:text-white">Blog</Link>
            <span className="mx-2">/</span>
            <span className="text-white">NEC Junction Box Rules: Article 314</span>
          </nav>

          {/* Article Header */}
          <header className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <span className="px-3 py-1 bg-purple-600/20 text-purple-300 text-sm font-medium rounded-full">
                NEC Code
              </span>
              <span className="text-white/40 text-sm">18 min read</span>
              <span className="text-white/40 text-sm">March 4, 2026</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6 leading-tight">
              NEC Junction Box Rules: Article 314 Installation &amp; Accessibility Requirements
            </h1>
            <p className="text-xl text-white/70">
              Junction boxes and pull boxes are critical components in every electrical installation. NEC Article 314 governs their sizing, installation, accessibility, and use. This guide covers the complete set of requirements including box accessibility (314.29), pull box sizing calculations for straight and angle pulls (314.28), conduit body rules, cover plate requirements, box support and mounting, and installation in damp and wet locations.
            </p>
          </header>

          <div className="mb-12 bg-gradient-to-br from-purple-900/20 to-cyan-900/20 rounded-2xl p-6 border border-white/10">
            <HeroIllustration />
          </div>

          {/* Table of Contents */}
          <div className="bg-white/5 rounded-2xl p-6 mb-12">
            <h2 className="font-display font-bold mb-4">In This Guide</h2>
            <ul className="space-y-2 text-white/70">
              <li><a href="#purpose-and-scope" className="hover:text-purple-400">Junction Box Purpose &amp; NEC 314 Scope</a></li>
              <li><a href="#accessibility" className="hover:text-purple-400">Accessibility Requirements (314.29)</a></li>
              <li><a href="#box-fill" className="hover:text-purple-400">Box Fill Calculations Review</a></li>
              <li><a href="#pull-box-sizing" className="hover:text-purple-400">Pull Box Sizing (314.28) &mdash; Straight &amp; Angle Pulls</a></li>
              <li><a href="#conduit-bodies" className="hover:text-purple-400">Conduit Bodies as Junction Boxes</a></li>
              <li><a href="#support-mounting" className="hover:text-purple-400">Box Support &amp; Mounting Requirements</a></li>
              <li><a href="#cover-plates" className="hover:text-purple-400">Cover Plate Requirements</a></li>
              <li><a href="#damp-wet-locations" className="hover:text-purple-400">Damp &amp; Wet Location Boxes</a></li>
              <li><a href="#common-violations" className="hover:text-purple-400">Common Junction Box Violations</a></li>
            </ul>
          </div>

          {/* Article Content */}
          <div className="prose prose-invert prose-lg max-w-none">

            <section id="purpose-and-scope" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Junction Box Purpose &amp; NEC 314 Scope</h2>
              <p className="text-white/80 mb-4">
                A <strong>junction box</strong> is an enclosure that protects electrical connections (splices, taps, and terminations) and provides a defined point where conductors can be accessed for future maintenance. Junction boxes prevent exposed wiring connections from creating fire hazards or shock risks, and they contain any arcing or heat that may occur at connection points.
              </p>
              <p className="text-white/80 mb-4">
                <strong>NEC Article 314</strong> covers the installation and use of all outlet boxes, device boxes, pull boxes, junction boxes, conduit bodies, and handhole enclosures. The article addresses sizing, installation methods, support requirements, accessibility, and special conditions such as damp and wet locations. It works in conjunction with <Link href="/blog/nec-article-300-wiring-methods" className="text-purple-400 hover:text-purple-300 underline">NEC Article 300 (Wiring Methods)</Link> which governs how conductors are routed between boxes.
              </p>

              <div className="grid md:grid-cols-2 gap-6 my-6">
                <div className="bg-purple-900/30 rounded-xl p-6">
                  <h3 className="font-semibold text-purple-400 mb-3">Article 314 Covers</h3>
                  <ul className="text-white/60 text-sm space-y-1">
                    <li><strong>314.15:</strong> Damp and wet locations</li>
                    <li><strong>314.16:</strong> Number of conductors in outlet, device, and junction boxes</li>
                    <li><strong>314.17:</strong> Conductors entering boxes</li>
                    <li><strong>314.20:</strong> Boxes recessed in walls or ceilings</li>
                    <li><strong>314.23:</strong> Supports for boxes</li>
                    <li><strong>314.25:</strong> Covers and canopies</li>
                    <li><strong>314.27:</strong> Outlet boxes (luminaires and ceiling fans)</li>
                    <li><strong>314.28:</strong> Pull and junction boxes and conduit bodies</li>
                    <li><strong>314.29:</strong> Accessibility requirements</li>
                    <li><strong>314.30:</strong> Handhole enclosures</li>
                  </ul>
                </div>
                <div className="bg-cyan-900/30 rounded-xl p-6">
                  <h3 className="font-semibold text-cyan-400 mb-3">Types of Boxes</h3>
                  <ul className="text-white/60 text-sm space-y-1">
                    <li><strong>Outlet boxes:</strong> Where devices or luminaires are mounted (4&quot; square, octagonal, etc.)</li>
                    <li><strong>Device boxes:</strong> For switches and receptacles (single-gang, multi-gang)</li>
                    <li><strong>Junction boxes:</strong> For splices and taps only, no devices mounted</li>
                    <li><strong>Pull boxes:</strong> Facilitate conductor pulling in long or complex conduit runs</li>
                    <li><strong>Conduit bodies:</strong> LB, LL, LR, T, C, and X fittings</li>
                    <li><strong>Handhole enclosures:</strong> Underground access points</li>
                  </ul>
                </div>
              </div>

              <div className="bg-white/5 rounded-xl p-6 my-6">
                <h4 className="font-semibold text-cyan-400 mb-3">Why Junction Boxes Matter</h4>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                  <div>
                    <p className="text-2xl font-bold text-purple-400">314.16</p>
                    <p className="text-white/60 text-sm">Box fill limits prevent overheating</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-cyan-400">314.29</p>
                    <p className="text-white/60 text-sm">Accessibility ensures future maintenance</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-green-400">314.25</p>
                    <p className="text-white/60 text-sm">Covers contain arcs and prevent contact</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-orange-400">314.28</p>
                    <p className="text-white/60 text-sm">Proper sizing protects conductor insulation</p>
                  </div>
                </div>
              </div>
            </section>

            <section id="accessibility" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Accessibility Requirements (314.29)</h2>
              <p className="text-white/80 mb-4">
                <strong>NEC 314.29</strong> states that boxes, conduit bodies, and handhole enclosures shall be installed so that the wiring contained in them <strong>can be rendered accessible without removing any part of the building</strong> or, in underground systems, without excavating sidewalks, paving, earth, or other substance that is to be used to establish the finished grade. This is one of the most frequently cited and misunderstood requirements in the NEC.
              </p>

              <div className="bg-purple-900/30 rounded-xl p-6 my-6 border border-purple-500/30">
                <h4 className="font-semibold text-purple-400 mb-3">Key Accessibility Principles</h4>
                <ul className="text-white/70 space-y-2 text-sm">
                  <li><strong>No permanent concealment:</strong> You cannot bury a junction box behind drywall, plaster, tile, or any permanent building finish without providing a cover that remains accessible</li>
                  <li><strong>Removable panels are permitted:</strong> Access panels, suspended ceiling tiles, and removable covers satisfy the accessibility requirement</li>
                  <li><strong>Attic and crawl space boxes:</strong> Permitted as long as there is a means of access (hatch, door, scuttle hole)</li>
                  <li><strong>Underground boxes:</strong> Must be accessible without excavation &mdash; use handhole enclosures or pull boxes with grade-level covers</li>
                  <li><strong>No tools required for access:</strong> The intent is that a qualified person can reach the box using normal building access points</li>
                </ul>
              </div>

              <h3 className="text-xl font-display font-semibold mb-3 text-cyan-400">Exception: Boxes Behind Removable Covers</h3>
              <p className="text-white/80 mb-4">
                Boxes behind suspended ceiling panels are considered accessible because the panels can be removed without disturbing the building structure. Similarly, junction boxes in accessible attic spaces or above removable access panels comply with 314.29. The key test: can a qualified electrician reach the box without cutting, breaking, or permanently altering any part of the building?
              </p>

              <div className="grid md:grid-cols-2 gap-6 my-6">
                <div className="bg-green-900/30 rounded-xl p-6">
                  <h3 className="font-semibold text-green-400 mb-3">Compliant Installations</h3>
                  <ul className="text-white/60 text-sm space-y-1">
                    <li>Box above removable suspended ceiling tile</li>
                    <li>Box in accessible attic with walk path</li>
                    <li>Box in unfinished basement ceiling</li>
                    <li>Box behind removable access panel in wall</li>
                    <li>Surface-mounted box on exposed wall</li>
                    <li>Box in mechanical room with clear access</li>
                    <li>Pull box in electrical room</li>
                  </ul>
                </div>
                <div className="bg-red-900/30 rounded-xl p-6">
                  <h3 className="font-semibold text-red-400 mb-3">Non-Compliant Installations</h3>
                  <ul className="text-white/60 text-sm space-y-1">
                    <li>Box buried behind drywall with no access</li>
                    <li>Box covered by tile or brick</li>
                    <li>Box encased in concrete (unless handhole)</li>
                    <li>Box above hard ceiling with no access panel</li>
                    <li>Box in closed wall cavity with no cover plate</li>
                    <li>Underground box with no grade-level access</li>
                    <li>Box behind permanent cabinetry with no access</li>
                  </ul>
                </div>
              </div>

              <div className="bg-orange-900/30 rounded-xl p-6 my-6">
                <h4 className="font-semibold text-orange-400 mb-3">Practical Tip</h4>
                <p className="text-white/70 text-sm">
                  Before closing up walls or ceilings, photograph all junction box locations and note them on as-built drawings. When doing inspections, verify every junction box marked on the plans is accessible from the finished space. As detailed in our <Link href="/blog/electrical-inspection-checklist" className="text-purple-400 hover:text-purple-300 underline">electrical inspection checklist</Link>, accessible junction boxes are one of the first things inspectors verify.
                </p>
              </div>
            </section>

            <section id="box-fill" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Box Fill Calculations Review</h2>
              <p className="text-white/80 mb-4">
                <strong>NEC 314.16</strong> limits the number of conductors permitted in outlet and device boxes to prevent overcrowding that could damage conductor insulation and cause overheating. Every item that takes up space inside the box must be counted using the volume allowance values from Table 314.16(B). For a deep dive into these calculations, see our comprehensive <Link href="/blog/box-fill-calculations-nec-314" className="text-purple-400 hover:text-purple-300 underline">box fill calculations guide</Link>.
              </p>

              <div className="overflow-x-auto my-6">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-white/20">
                      <th className="text-left py-3 px-4 text-white/60">AWG Size</th>
                      <th className="text-left py-3 px-4 text-white/60">Volume per Conductor</th>
                    </tr>
                  </thead>
                  <tbody className="text-white/80">
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">14 AWG</td>
                      <td className="py-3 px-4 font-mono text-cyan-400">2.00 in&sup3;</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">12 AWG</td>
                      <td className="py-3 px-4 font-mono text-cyan-400">2.25 in&sup3;</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">10 AWG</td>
                      <td className="py-3 px-4 font-mono text-cyan-400">2.50 in&sup3;</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">8 AWG</td>
                      <td className="py-3 px-4 font-mono text-cyan-400">3.00 in&sup3;</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4">6 AWG</td>
                      <td className="py-3 px-4 font-mono text-cyan-400">5.00 in&sup3;</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h3 className="text-xl font-display font-semibold mb-3 text-cyan-400">Box Fill Counting Rules</h3>
              <div className="space-y-3 my-6">
                <div className="bg-white/5 rounded-xl p-4">
                  <p className="font-semibold text-white text-sm">Each conductor entering the box</p>
                  <p className="text-white/60 text-sm">Count as 1 volume allowance based on conductor size</p>
                </div>
                <div className="bg-white/5 rounded-xl p-4">
                  <p className="font-semibold text-white text-sm">Conductors running through without splice</p>
                  <p className="text-white/60 text-sm">Count as 1 volume allowance (not 2)</p>
                </div>
                <div className="bg-white/5 rounded-xl p-4">
                  <p className="font-semibold text-white text-sm">Equipment grounding conductors (all combined)</p>
                  <p className="text-white/60 text-sm">Count as 1 volume allowance based on largest EGC</p>
                </div>
                <div className="bg-white/5 rounded-xl p-4">
                  <p className="font-semibold text-white text-sm">Each yoke or strap (device)</p>
                  <p className="text-white/60 text-sm">Count as 2 volume allowances based on largest conductor connected</p>
                </div>
                <div className="bg-white/5 rounded-xl p-4">
                  <p className="font-semibold text-white text-sm">Internal cable clamps (all combined)</p>
                  <p className="text-white/60 text-sm">Count as 1 volume allowance based on largest conductor</p>
                </div>
              </div>

              <div className="bg-white/5 rounded-xl p-6 my-6">
                <h4 className="font-semibold text-white mb-3">Important Note: 314.16 vs 314.28</h4>
                <p className="text-white/70 text-sm">
                  Section 314.16 applies to boxes up to 100 in&sup3; (1650 cm&sup3;). For boxes and conduit bodies over 100 in&sup3; and for pull boxes of any size with conductors 4 AWG and larger, the sizing requirements of <strong>314.28</strong> apply instead. The two methods use fundamentally different approaches &mdash; 314.16 counts conductor fill volume while 314.28 calculates minimum box dimensions based on raceway trade size.
                </p>
              </div>
            </section>

            <section id="pull-box-sizing" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Pull Box Sizing (314.28) &mdash; Straight &amp; Angle Pulls</h2>
              <p className="text-white/80 mb-4">
                <strong>NEC 314.28</strong> establishes minimum sizing requirements for pull boxes, junction boxes, and conduit bodies used with conductors 4 AWG and larger. These rules ensure there is adequate space inside the box to pull conductors without damaging their insulation. The calculations differ based on whether the conductors make a <strong>straight pull</strong> or an <strong>angle pull</strong> (including U-pulls) through the box.
              </p>

              <h3 className="text-xl font-display font-semibold mb-3 text-cyan-400">Straight Pulls &mdash; 314.28(A)(1)</h3>
              <p className="text-white/80 mb-4">
                For a straight pull, the length of the box must be at least <strong>8 times</strong> the trade size (metric designator) of the <strong>largest raceway</strong> entering the box.
              </p>

              <div className="bg-cyan-900/30 rounded-xl p-6 my-6 border border-cyan-500/30">
                <h4 className="font-semibold text-cyan-400 mb-3">Straight Pull Formula</h4>
                <p className="font-mono text-white text-lg text-center mb-4">
                  Minimum Length = 8 &times; Largest Trade Size
                </p>
                <div className="bg-black/30 rounded-lg p-4">
                  <p className="text-white/60 text-sm mb-2"><strong>Example:</strong> A pull box has 3-inch conduits entering and leaving on opposite sides (straight pull).</p>
                  <p className="font-mono text-cyan-400 text-sm">Minimum box length = 8 &times; 3&quot; = 24 inches</p>
                </div>
              </div>

              <h3 className="text-xl font-display font-semibold mb-3 text-cyan-400">Angle Pulls &mdash; 314.28(A)(2)</h3>
              <p className="text-white/80 mb-4">
                When conductors enter and exit through different walls of the box (angle pull, U-pull), the distance from the raceway entry to the opposite wall must be at least <strong>6 times</strong> the trade size of the <strong>largest raceway</strong> entering that wall, <strong>plus</strong> the sum of the trade sizes of all other raceways entering the same wall.
              </p>

              <div className="bg-orange-900/30 rounded-xl p-6 my-6 border border-orange-500/30">
                <h4 className="font-semibold text-orange-400 mb-3">Angle Pull Formula</h4>
                <p className="font-mono text-white text-lg text-center mb-4">
                  Minimum Distance = (6 &times; Largest Trade Size) + Sum of Other Trade Sizes
                </p>
                <div className="bg-black/30 rounded-lg p-4 mb-4">
                  <p className="text-white/60 text-sm mb-2"><strong>Example:</strong> A pull box with three conduits entering one wall &mdash; one 3&quot;, one 2&quot;, and one 1&quot;.</p>
                  <p className="font-mono text-orange-400 text-sm">Minimum distance = (6 &times; 3&quot;) + 2&quot; + 1&quot; = 18&quot; + 3&quot; = 21 inches</p>
                </div>
                <p className="text-white/60 text-sm">
                  Calculate this distance for <strong>each wall</strong> that has raceway entries, then measure from each entry wall to the opposite wall. Each dimension of the box must meet or exceed the calculated minimum for that wall.
                </p>
              </div>

              <h3 className="text-xl font-display font-semibold mb-3 text-cyan-400">U-Pulls &mdash; Same Wall Entry and Exit</h3>
              <p className="text-white/80 mb-4">
                When conductors enter and leave through the same wall of a box (a U-pull), the calculation follows the <strong>angle pull formula</strong>. The distance from the wall of entry to the opposite wall must meet the 6-times-plus-others minimum. Additionally, per 314.28(A)(2), the distance between raceways enclosing the same conductor on the same wall must be at least <strong>6 times the trade size of the larger raceway</strong>.
              </p>

              <div className="overflow-x-auto my-6">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-white/20">
                      <th className="text-left py-3 px-4 text-white/60">Pull Type</th>
                      <th className="text-left py-3 px-4 text-white/60">Formula</th>
                      <th className="text-left py-3 px-4 text-white/60">Measured From</th>
                    </tr>
                  </thead>
                  <tbody className="text-white/80">
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-bold text-cyan-400">Straight Pull</td>
                      <td className="py-3 px-4 font-mono">8 &times; largest trade size</td>
                      <td className="py-3 px-4 text-white/60">Entry wall to opposite wall (along conductor path)</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-bold text-orange-400">Angle Pull</td>
                      <td className="py-3 px-4 font-mono">6 &times; largest + sum of others</td>
                      <td className="py-3 px-4 text-white/60">Entry wall to opposite wall (perpendicular to entry)</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-bold text-yellow-400">U-Pull</td>
                      <td className="py-3 px-4 font-mono">6 &times; largest + sum of others</td>
                      <td className="py-3 px-4 text-white/60">Entry wall to opposite wall; plus 6 &times; larger raceway between entries</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h3 className="text-xl font-display font-semibold mb-3 text-cyan-400">Pull Box Depth &mdash; 314.28(A)(3)</h3>
              <p className="text-white/80 mb-4">
                In addition to length and width, the <strong>depth</strong> of the pull box must be sufficient to allow the conductors to be installed without bending them beyond their minimum bending radius. For conductors 4 AWG and larger, the depth cannot be less than <strong>6 times the trade size of the largest raceway</strong>, unless the box is equipped with a removable cover opposite the entry.
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

            <section id="conduit-bodies" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Conduit Bodies as Junction Boxes</h2>
              <p className="text-white/80 mb-4">
                <strong>Conduit bodies</strong> (commonly called condulets) such as LB, LL, LR, T, C, and X fittings can serve as junction boxes under certain conditions specified in <strong>NEC 314.16(C)</strong>. However, their use for splices and taps is limited based on the conduit body&apos;s volume and configuration.
              </p>

              <div className="grid md:grid-cols-2 gap-6 my-6">
                <div className="bg-green-900/30 rounded-xl p-6">
                  <h3 className="font-semibold text-green-400 mb-3">Splices Permitted When:</h3>
                  <ul className="text-white/60 text-sm space-y-2">
                    <li><strong>Marked with volume:</strong> The conduit body is durably and legibly marked with its cubic inch capacity by the manufacturer</li>
                    <li><strong>Meets box fill:</strong> The number of conductors does not exceed the volume calculated using Table 314.16(B) fill values</li>
                    <li><strong>Conductor size:</strong> Conductors 6 AWG or smaller for standard conduit bodies</li>
                    <li><strong>Conduit body type:</strong> Must have a removable cover that allows access to the interior</li>
                  </ul>
                </div>
                <div className="bg-red-900/30 rounded-xl p-6">
                  <h3 className="font-semibold text-red-400 mb-3">Splices NOT Permitted When:</h3>
                  <ul className="text-white/60 text-sm space-y-2">
                    <li><strong>Not marked:</strong> Conduit body lacks cubic inch volume marking</li>
                    <li><strong>Exceeds fill:</strong> Adding spliced conductors would exceed the marked volume</li>
                    <li><strong>Short radius bodies:</strong> Short-radius conduit bodies are not permitted for splices or taps</li>
                    <li><strong>No cover access:</strong> The conduit body does not provide adequate access to its interior</li>
                  </ul>
                </div>
              </div>

              <div className="bg-white/5 rounded-xl p-6 my-6">
                <h4 className="font-semibold text-white mb-3">Common Conduit Body Types</h4>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm">
                  <div>
                    <p className="font-bold text-cyan-400">LB</p>
                    <p className="text-white/60">Back outlet &mdash; 90&deg; turn</p>
                  </div>
                  <div>
                    <p className="font-bold text-cyan-400">LL</p>
                    <p className="text-white/60">Left outlet &mdash; 90&deg; turn</p>
                  </div>
                  <div>
                    <p className="font-bold text-cyan-400">LR</p>
                    <p className="text-white/60">Right outlet &mdash; 90&deg; turn</p>
                  </div>
                  <div>
                    <p className="font-bold text-cyan-400">T</p>
                    <p className="text-white/60">Three-way fitting</p>
                  </div>
                  <div>
                    <p className="font-bold text-cyan-400">C</p>
                    <p className="text-white/60">Straight-through access</p>
                  </div>
                  <div>
                    <p className="font-bold text-cyan-400">X</p>
                    <p className="text-white/60">Four-way fitting</p>
                  </div>
                </div>
              </div>

              <div className="bg-yellow-900/30 rounded-xl p-6 my-6 border border-yellow-500/30">
                <h4 className="font-semibold text-yellow-400 mb-3">314.28 for Conduit Bodies with 4 AWG and Larger</h4>
                <p className="text-white/70 text-sm">
                  When conduit bodies contain conductors 4 AWG and larger, they must meet the pull box sizing rules of 314.28. This means the conduit body must provide the equivalent of 6 times the trade size distance for angle pulls. In practice, most standard conduit bodies meet this requirement for their nominal trade size, but always verify with the manufacturer&apos;s specifications, especially for parallel conduit runs.
                </p>
              </div>
            </section>

            <section id="support-mounting" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Box Support &amp; Mounting Requirements</h2>
              <p className="text-white/80 mb-4">
                <strong>NEC 314.23</strong> specifies how boxes must be supported and secured. Proper support prevents boxes from shifting, sagging, or pulling away from the building structure, which could damage conductor connections and create fire or shock hazards.
              </p>

              <div className="space-y-4 my-6">
                <div className="bg-white/5 rounded-xl p-4 flex items-start gap-4">
                  <span className="bg-purple-600 text-white text-sm font-bold px-3 py-1 rounded-full">A</span>
                  <div>
                    <p className="font-semibold text-white">Surface-Mounted Boxes (314.23(A))</p>
                    <p className="text-white/60 text-sm">Boxes mounted on the building surface must be rigidly and securely fastened. Surface-mounted boxes on concrete, masonry, or tile must use approved anchoring devices.</p>
                  </div>
                </div>
                <div className="bg-white/5 rounded-xl p-4 flex items-start gap-4">
                  <span className="bg-purple-600 text-white text-sm font-bold px-3 py-1 rounded-full">B</span>
                  <div>
                    <p className="font-semibold text-white">Structural Mounting (314.23(B))</p>
                    <p className="text-white/60 text-sm">Boxes can be supported by nails, screws, or bolts to structural members such as joists, studs, or structural steel. Nails must pass through the box mounting bracket (not the interior of the box).</p>
                  </div>
                </div>
                <div className="bg-white/5 rounded-xl p-4 flex items-start gap-4">
                  <span className="bg-purple-600 text-white text-sm font-bold px-3 py-1 rounded-full">C</span>
                  <div>
                    <p className="font-semibold text-white">Bracket or Bar Hanger Support (314.23(B)(1))</p>
                    <p className="text-white/60 text-sm">Adjustable bar hangers or brackets spanning between structural members. Must be securely fastened at both ends. The box must be supported within 8 inches of a structural member when using a single bar.</p>
                  </div>
                </div>
                <div className="bg-white/5 rounded-xl p-4 flex items-start gap-4">
                  <span className="bg-purple-600 text-white text-sm font-bold px-3 py-1 rounded-full">D</span>
                  <div>
                    <p className="font-semibold text-white">Raceway Support (314.23(E))</p>
                    <p className="text-white/60 text-sm">Boxes may be supported by the raceway (conduit) system when the conduit is properly secured within 3 feet of the box and the box does not exceed 100 in&sup3;. Two or more conduits must be threaded wrench-tight into the box.</p>
                  </div>
                </div>
                <div className="bg-white/5 rounded-xl p-4 flex items-start gap-4">
                  <span className="bg-purple-600 text-white text-sm font-bold px-3 py-1 rounded-full">E</span>
                  <div>
                    <p className="font-semibold text-white">Cable Support (314.23(F))</p>
                    <p className="text-white/60 text-sm">Boxes may be supported by cable assemblies (NM, AC, MC) when the cable is secured within 8 inches of the box, and the box does not exceed 100 in&sup3;.</p>
                  </div>
                </div>
              </div>

              <div className="bg-orange-900/30 rounded-xl p-6 my-6">
                <h4 className="font-semibold text-orange-400 mb-3">Flush-Mounted Box Requirements (314.20)</h4>
                <p className="text-white/70 text-sm mb-3">
                  When boxes are installed flush in walls or ceilings of <strong>combustible material</strong> (wood studs with drywall), the front edge of the box must be set back no more than <strong>1/4 inch</strong> from the finished surface. For <strong>noncombustible surfaces</strong> (concrete, tile), the box can be set back up to 1/4 inch. Boxes in noncombustible walls or ceilings must be installed so the front edge is flush with or projects from the finished surface.
                </p>
              </div>
            </section>

            <section id="cover-plates" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Cover Plate Requirements</h2>
              <p className="text-white/80 mb-4">
                <strong>NEC 314.25</strong> requires that all boxes and conduit bodies have covers, canopies, or faceplates installed. Covers serve a critical safety function: they contain arcing from loose connections, prevent accidental contact with live conductors, and keep debris out of the box.
              </p>

              <div className="grid md:grid-cols-2 gap-6 my-6">
                <div className="bg-white/5 rounded-xl p-6">
                  <h3 className="font-semibold text-cyan-400 mb-3">314.25(A) &mdash; Nonmetallic or Metal Covers</h3>
                  <ul className="text-white/60 text-sm space-y-2">
                    <li>Metal covers on metal boxes must be grounded</li>
                    <li>Nonmetallic covers on metal boxes are permitted</li>
                    <li>Covers must be secured with screws or approved fasteners</li>
                    <li>Blank covers required on unused junction boxes</li>
                    <li>Covers must be suitable for the conditions (weatherproof if outdoors)</li>
                  </ul>
                </div>
                <div className="bg-white/5 rounded-xl p-6">
                  <h3 className="font-semibold text-cyan-400 mb-3">314.25(B) &mdash; Exposed Combustible Wall</h3>
                  <ul className="text-white/60 text-sm space-y-2">
                    <li>When a box is mounted on a combustible surface, the cover must extend at least <strong>1 inch</strong> beyond the box opening on all sides if combustible material is exposed between the box and the cover</li>
                    <li>Or use a box that is listed for the application</li>
                    <li>Metal covers provide the best fire containment</li>
                  </ul>
                </div>
              </div>

              <div className="bg-red-900/30 rounded-xl p-6 my-6">
                <h4 className="font-semibold text-red-400 mb-3">Missing Covers = Code Violation</h4>
                <p className="text-white/70 text-sm">
                  A junction box without a cover plate is a <strong>code violation</strong> regardless of location. This is one of the most common deficiencies found during inspections. Even in attics, crawl spaces, above ceilings, and in mechanical rooms, every junction box must have an appropriate cover installed. Open boxes also violate 300.15, which requires a fitting (box or conduit body) at every splice, junction, and termination point.
                </p>
              </div>

              <h3 className="text-xl font-display font-semibold mb-3 text-cyan-400">Cover Material Considerations</h3>
              <ul className="list-disc list-inside text-white/70 space-y-2 mb-4">
                <li><strong>Steel covers:</strong> Standard for metal junction boxes; must be grounded; provide fire containment</li>
                <li><strong>Nonmetallic covers:</strong> Permitted on metal or nonmetallic boxes; eliminates grounding requirement for cover</li>
                <li><strong>Raised covers:</strong> Used when devices (receptacles, switches) are mounted in 4&quot; square boxes</li>
                <li><strong>Weatherproof covers:</strong> Required in damp or wet locations per 314.15; must maintain weatherproof rating when in use</li>
                <li><strong>Gasketed covers:</strong> Required in wet locations; the cover must be listed as weatherproof whether the device is in use or not (NEC 406.9(B)(1) for receptacles)</li>
              </ul>
            </section>

            <section id="damp-wet-locations" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Damp &amp; Wet Location Boxes</h2>
              <p className="text-white/80 mb-4">
                <strong>NEC 314.15</strong> establishes requirements for boxes and conduit bodies installed in damp or wet locations. The goal is to prevent moisture from entering the enclosure and reaching the electrical connections inside, which could cause corrosion, ground faults, or short circuits.
              </p>

              <div className="grid md:grid-cols-2 gap-6 my-6">
                <div className="bg-blue-900/30 rounded-xl p-6">
                  <h3 className="font-semibold text-blue-400 mb-3">Damp Locations</h3>
                  <p className="text-white/70 text-sm mb-3">Locations protected from weather but subject to moderate degrees of moisture (covered porches, basements, some garages).</p>
                  <ul className="text-white/60 text-sm space-y-1">
                    <li>Boxes must be placed or equipped to prevent moisture from entering</li>
                    <li>Weatherproof covers or enclosures required</li>
                    <li>Drainage provisions may be needed</li>
                    <li>Corrosion-resistant materials recommended</li>
                  </ul>
                </div>
                <div className="bg-blue-900/30 rounded-xl p-6">
                  <h3 className="font-semibold text-blue-400 mb-3">Wet Locations</h3>
                  <p className="text-white/70 text-sm mb-3">Locations subject to saturation with water or other liquids (outdoors, car washes, underground).</p>
                  <ul className="text-white/60 text-sm space-y-1">
                    <li>Boxes must be listed for wet locations</li>
                    <li>Weatherproof when closed &mdash; and for receptacles, weatherproof whether cover is open or closed</li>
                    <li>All entries must use listed weatherproof fittings</li>
                    <li>Boxes rated NEMA 3R, 4, 4X, or 6P as appropriate</li>
                  </ul>
                </div>
              </div>

              <div className="bg-white/5 rounded-xl p-6 my-6">
                <h4 className="font-semibold text-white mb-3">NEMA Ratings for Wet/Damp Locations</h4>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-white/20">
                        <th className="text-left py-2 px-3 text-white/60">NEMA Type</th>
                        <th className="text-left py-2 px-3 text-white/60">Protection Level</th>
                        <th className="text-left py-2 px-3 text-white/60">Common Use</th>
                      </tr>
                    </thead>
                    <tbody className="text-white/80">
                      <tr className="border-b border-white/10">
                        <td className="py-2 px-3 font-mono text-cyan-400">Type 3R</td>
                        <td className="py-2 px-3">Rain, sleet, and ice on enclosure</td>
                        <td className="py-2 px-3 text-white/60">Outdoor panels, general outdoor use</td>
                      </tr>
                      <tr className="border-b border-white/10">
                        <td className="py-2 px-3 font-mono text-cyan-400">Type 4</td>
                        <td className="py-2 px-3">Watertight (splashing, hose-down)</td>
                        <td className="py-2 px-3 text-white/60">Car washes, food processing</td>
                      </tr>
                      <tr className="border-b border-white/10">
                        <td className="py-2 px-3 font-mono text-cyan-400">Type 4X</td>
                        <td className="py-2 px-3">Watertight + corrosion resistant</td>
                        <td className="py-2 px-3 text-white/60">Chemical plants, coastal areas</td>
                      </tr>
                      <tr>
                        <td className="py-2 px-3 font-mono text-cyan-400">Type 6P</td>
                        <td className="py-2 px-3">Submersible, prolonged immersion</td>
                        <td className="py-2 px-3 text-white/60">Underwater, flooded areas</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="bg-purple-900/30 rounded-xl p-6 my-6">
                <h4 className="font-semibold text-purple-400 mb-3">Drainage Requirements (314.15)</h4>
                <p className="text-white/70 text-sm">
                  Boxes installed in wet locations must have approved drainage openings not larger than <strong>1/4 inch</strong> or must be listed for the location. The drainage openings prevent water from accumulating inside the box. In underground installations, raceways entering below the box should have drainage provisions or sealed entries to prevent water migration into the box.
                </p>
              </div>
            </section>

            <section id="common-violations" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Common Junction Box Violations</h2>
              <p className="text-white/80 mb-4">
                Junction box violations are among the most frequently cited deficiencies during electrical inspections. Understanding these common issues helps you avoid failed inspections and install code-compliant work from the start. Consult our <Link href="/blog/electrical-inspection-checklist" className="text-purple-400 hover:text-purple-300 underline">electrical inspection checklist</Link> for a complete review before calling for inspection.
              </p>

              <div className="grid md:grid-cols-2 gap-4 my-6">
                <div className="bg-red-900/20 rounded-xl p-6 border border-red-500/20">
                  <h4 className="font-semibold text-red-400 mb-3">Inaccessible Junction Boxes</h4>
                  <p className="text-white/60 text-sm">
                    Boxes buried behind finished drywall, covered by cabinetry, or concealed above hard ceilings without access panels. Per 314.29, every box must remain accessible without removing any part of the building.
                  </p>
                </div>
                <div className="bg-red-900/20 rounded-xl p-6 border border-red-500/20">
                  <h4 className="font-semibold text-red-400 mb-3">Missing Cover Plates</h4>
                  <p className="text-white/60 text-sm">
                    Junction boxes left open without covers, especially in attics, crawl spaces, and above suspended ceilings. Per 314.25, every box must have an appropriate cover, canopy, or faceplate.
                  </p>
                </div>
                <div className="bg-red-900/20 rounded-xl p-6 border border-red-500/20">
                  <h4 className="font-semibold text-red-400 mb-3">Overfilled Boxes</h4>
                  <p className="text-white/60 text-sm">
                    Too many conductors crammed into a box, exceeding the volume limits of 314.16. Overfilling damages insulation, makes connections difficult, and increases heat buildup. Always calculate box fill before installation.
                  </p>
                </div>
                <div className="bg-red-900/20 rounded-xl p-6 border border-red-500/20">
                  <h4 className="font-semibold text-red-400 mb-3">Undersized Pull Boxes</h4>
                  <p className="text-white/60 text-sm">
                    Pull boxes that do not meet the minimum dimensions calculated per 314.28 for straight or angle pulls. Undersized boxes damage conductor insulation during pulling and make future conductor replacement extremely difficult.
                  </p>
                </div>
                <div className="bg-red-900/20 rounded-xl p-6 border border-red-500/20">
                  <h4 className="font-semibold text-red-400 mb-3">Splices in Conduit Bodies Without Volume</h4>
                  <p className="text-white/60 text-sm">
                    Making splices or taps in conduit bodies that are not marked with their cubic inch volume, or in short-radius conduit bodies. Per 314.16(C)(2), splices in conduit bodies require the body to be marked with volume and the fill to be calculated.
                  </p>
                </div>
                <div className="bg-red-900/20 rounded-xl p-6 border border-red-500/20">
                  <h4 className="font-semibold text-red-400 mb-3">Wrong Box for Location</h4>
                  <p className="text-white/60 text-sm">
                    Using indoor-rated boxes in wet or damp locations, or failing to use weatherproof covers outdoors. Per 314.15, boxes in wet locations must be listed for wet locations with appropriate NEMA ratings and weatherproof fittings.
                  </p>
                </div>
                <div className="bg-red-900/20 rounded-xl p-6 border border-red-500/20">
                  <h4 className="font-semibold text-red-400 mb-3">Improper Box Support</h4>
                  <p className="text-white/60 text-sm">
                    Boxes not properly supported per 314.23 &mdash; hanging by cable alone without proper fastening, not secured to structural members, or mounted on drywall without proper backing. Loose boxes cause connection failures over time.
                  </p>
                </div>
                <div className="bg-red-900/20 rounded-xl p-6 border border-red-500/20">
                  <h4 className="font-semibold text-red-400 mb-3">Box Set Back Too Far</h4>
                  <p className="text-white/60 text-sm">
                    Flush-mounted boxes recessed more than 1/4 inch from the finished surface in combustible walls, or not flush with noncombustible surfaces. Per 314.20, proper setback is critical for fire safety and cover plate fit.
                  </p>
                </div>
              </div>

              <div className="bg-cyan-900/30 rounded-xl p-6 my-6">
                <h4 className="font-semibold text-cyan-400 mb-3">Inspection Checklist for Junction Boxes</h4>
                <ul className="text-white/70 space-y-2 text-sm">
                  <li>&#9744; Every junction box is accessible without removing building structure (314.29)</li>
                  <li>&#9744; All boxes have appropriate covers or faceplates installed (314.25)</li>
                  <li>&#9744; Box fill calculations confirm each box has adequate volume (314.16)</li>
                  <li>&#9744; Pull boxes meet minimum dimensions for straight and angle pulls (314.28)</li>
                  <li>&#9744; Boxes are properly supported and securely fastened (314.23)</li>
                  <li>&#9744; Flush-mounted boxes meet setback requirements (314.20)</li>
                  <li>&#9744; Outdoor and wet location boxes are listed and weatherproof (314.15)</li>
                  <li>&#9744; Conduit body splices only in marked, volume-rated bodies (314.16(C))</li>
                  <li>&#9744; All cable and conduit entries properly secured to the box (314.17)</li>
                  <li>&#9744; Unused openings in boxes are closed with listed plugs or covers (314.17(A))</li>
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

            {/* Related Articles */}
            <section className="mt-12">
              <h2 className="text-2xl font-display font-bold mb-6">Related Articles</h2>
              <div className="grid md:grid-cols-2 gap-4">
                <Link href="/blog/box-fill-calculations-nec-314" className="bg-white/5 hover:bg-white/10 rounded-xl p-6 transition-colors">
                  <span className="text-blue-400 text-sm">Calculations</span>
                  <h3 className="font-semibold mt-2">Box Fill Calculations: NEC 314.16 Complete Guide</h3>
                </Link>
                <Link href="/blog/conduit-fill-calculation-guide" className="bg-white/5 hover:bg-white/10 rounded-xl p-6 transition-colors">
                  <span className="text-blue-400 text-sm">Calculations</span>
                  <h3 className="font-semibold mt-2">Conduit Fill Calculation Guide</h3>
                </Link>
                <Link href="/blog/nec-article-300-wiring-methods" className="bg-white/5 hover:bg-white/10 rounded-xl p-6 transition-colors">
                  <span className="text-purple-400 text-sm">NEC Code</span>
                  <h3 className="font-semibold mt-2">NEC Article 300: Wiring Methods Guide</h3>
                </Link>
                <Link href="/blog/electrical-conduit-types-guide" className="bg-white/5 hover:bg-white/10 rounded-xl p-6 transition-colors">
                  <span className="text-green-400 text-sm">Materials</span>
                  <h3 className="font-semibold mt-2">Electrical Conduit Types: Complete Guide</h3>
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
