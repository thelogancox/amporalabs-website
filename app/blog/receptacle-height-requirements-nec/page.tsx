import { Metadata } from "next";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import { BreadcrumbJsonLd, BlogPostingJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Receptacle & Switch Height Requirements: NEC & ADA Mounting Guidelines",
  description: "Complete guide to receptacle and switch mounting heights per NEC and ADA requirements. Learn standard heights, countertop receptacle placement, floor receptacles, outdoor heights, and ADA accessibility guidelines for electrical installations.",
  keywords: [
    "receptacle height requirements",
    "switch mounting height NEC",
    "ADA receptacle height",
    "outlet height code",
    "NEC receptacle placement",
    "countertop receptacle height",
    "floor receptacle requirements",
    "switch height ADA",
    "outdoor receptacle height",
    "electrical outlet mounting height",
    "NEC 210.52",
    "ADA electrical requirements",
    "receptacle mounting guidelines",
    "commercial outlet height",
    "residential switch height",
    "accessible receptacle placement"
  ],
  alternates: {
    canonical: "https://amporalabs.com/blog/receptacle-height-requirements-nec",
  },
  openGraph: {
    title: "Receptacle & Switch Height Requirements: NEC & ADA Guidelines - Ampora",
    description: "NEC and ADA receptacle and switch mounting height requirements for residential and commercial installations.",
    url: "https://amporalabs.com/blog/receptacle-height-requirements-nec",
    type: "article",
  },
};

function HeroIllustration() {
  return (
    <svg viewBox="0 0 400 160" className="w-full h-40 md:h-48" aria-label="Receptacle and switch height requirements illustration">
      {/* Wall background */}
      <rect x="20" y="10" width="360" height="140" rx="4" fill="#374151" fillOpacity="0.3"/>

      {/* Floor line */}
      <line x1="20" y1="150" x2="380" y2="150" stroke="#6b7280" strokeWidth="2"/>
      <text x="200" y="158" textAnchor="middle" fill="#9ca3af" fontSize="7">Finished Floor</text>

      {/* Standard receptacle - 12" */}
      <g transform="translate(50, 60)">
        <rect x="0" y="0" width="30" height="45" rx="3" fill="#f5f5f4" stroke="#9ca3af" strokeWidth="1.5"/>
        <rect x="8" y="8" width="14" height="10" rx="1" fill="#1f2937"/>
        <rect x="8" y="27" width="14" height="10" rx="1" fill="#1f2937"/>
        <circle cx="15" cy="22" r="2" fill="#22c55e"/>
      </g>
      {/* Height dimension */}
      <line x1="45" y1="105" x2="45" y2="150" stroke="#a855f7" strokeWidth="1.5"/>
      <line x1="40" y1="105" x2="50" y2="105" stroke="#a855f7" strokeWidth="1.5"/>
      <line x1="40" y1="150" x2="50" y2="150" stroke="#a855f7" strokeWidth="1.5"/>
      <text x="43" y="132" textAnchor="middle" fill="#c4b5fd" fontSize="7">12&quot;</text>
      <text x="65" y="120" fill="#c4b5fd" fontSize="6">Standard</text>

      {/* Countertop receptacle - 42-44" */}
      <g transform="translate(140, 25)">
        <rect x="0" y="0" width="30" height="45" rx="3" fill="#f5f5f4" stroke="#9ca3af" strokeWidth="1.5"/>
        <rect x="8" y="8" width="14" height="10" rx="1" fill="#1f2937"/>
        <rect x="8" y="27" width="14" height="10" rx="1" fill="#1f2937"/>
        <circle cx="15" cy="22" r="2" fill="#22c55e"/>
      </g>
      {/* Counter surface */}
      <rect x="120" y="80" width="70" height="4" fill="#78716c"/>
      <text x="155" y="95" textAnchor="middle" fill="#fcd34d" fontSize="6">Counter</text>
      <line x1="135" y1="70" x2="135" y2="150" stroke="#f59e0b" strokeWidth="1.5"/>
      <line x1="130" y1="70" x2="140" y2="70" stroke="#f59e0b" strokeWidth="1.5"/>
      <text x="127" y="115" textAnchor="middle" fill="#fcd34d" fontSize="7">42-44&quot;</text>

      {/* Switch - 48" */}
      <g transform="translate(230, 18)">
        <rect x="0" y="0" width="26" height="42" rx="3" fill="#f5f5f4" stroke="#9ca3af" strokeWidth="1.5"/>
        <rect x="7" y="10" width="12" height="22" rx="6" fill="#1f2937"/>
        <circle cx="13" cy="18" r="4" fill="#6b7280"/>
      </g>
      <line x1="225" y1="40" x2="225" y2="150" stroke="#22c55e" strokeWidth="1.5"/>
      <line x1="220" y1="40" x2="230" y2="40" stroke="#22c55e" strokeWidth="1.5"/>
      <text x="218" y="100" textAnchor="middle" fill="#86efac" fontSize="7">48&quot;</text>
      <text x="250" y="75" fill="#86efac" fontSize="6">Switch</text>

      {/* ADA range */}
      <g transform="translate(310, 28)">
        <rect x="0" y="0" width="60" height="90" rx="6" fill="#0ea5e9" fillOpacity="0.1" stroke="#0ea5e9" strokeWidth="1.5" strokeDasharray="4"/>
        <text x="30" y="15" textAnchor="middle" fill="#0ea5e9" fontSize="8" fontWeight="bold">ADA</text>
        <text x="30" y="28" textAnchor="middle" fill="#7dd3fc" fontSize="7">15&quot; - 48&quot;</text>
        <text x="30" y="42" textAnchor="middle" fill="#7dd3fc" fontSize="6">above floor</text>
        <line x1="30" y1="52" x2="30" y2="85" stroke="#0ea5e9" strokeWidth="1" strokeDasharray="3"/>
        <text x="30" y="78" textAnchor="middle" fill="#7dd3fc" fontSize="6">accessible</text>
        <text x="30" y="88" textAnchor="middle" fill="#7dd3fc" fontSize="6">range</text>
      </g>
    </svg>
  );
}

export default function ReceptacleHeightRequirementsPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navigation />
      <div className="pt-20">
        <BreadcrumbJsonLd
          items={[
            { name: "Home", url: "https://amporalabs.com" },
            { name: "Blog", url: "https://amporalabs.com/blog" },
            { name: "Receptacle Height Requirements", url: "https://amporalabs.com/blog/receptacle-height-requirements-nec" },
          ]}
        />
        <BlogPostingJsonLd
          headline="Receptacle & Switch Height Requirements: NEC & ADA Mounting Guidelines"
          description="Complete guide to receptacle and switch mounting heights per NEC and ADA requirements for residential and commercial installations."
          datePublished="2025-02-08"
          dateModified="2025-02-08"
          url="https://amporalabs.com/blog/receptacle-height-requirements-nec"
          wordCount={2400}
          keywords={["receptacle height requirements", "switch mounting height", "ADA receptacle height", "NEC outlet placement"]}
        />

        <article className="max-w-4xl mx-auto px-6 py-12">
          {/* Breadcrumb */}
          <nav className="text-sm text-white/60 mb-8">
            <Link href="/" className="hover:text-white">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/blog" className="hover:text-white">Blog</Link>
            <span className="mx-2">/</span>
            <span className="text-white">Receptacle Height Requirements</span>
          </nav>

          {/* Article Header */}
          <header className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <span className="px-3 py-1 bg-purple-600/30 text-purple-300 text-sm font-medium rounded-full">
                NEC Code
              </span>
              <span className="text-white/40 text-sm">9 min read</span>
              <span className="text-white/40 text-sm">February 8, 2025</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6 leading-tight">
              Receptacle &amp; Switch Height Requirements: NEC &amp; ADA Mounting Guidelines
            </h1>
            <p className="text-xl text-white/70">
              A comprehensive guide to proper mounting heights for receptacles and switches. Covers NEC standards, ADA accessibility requirements, countertop placements, floor receptacles, outdoor heights, and common installation practices.
            </p>
          </header>

          <div className="mb-12 bg-gradient-to-br from-purple-900/20 to-cyan-900/20 rounded-2xl p-6 border border-white/10">
            <HeroIllustration />
          </div>

          {/* Quick Reference CTA */}
          <div className="bg-purple-900/30 border border-purple-500/30 rounded-2xl p-6 mb-12">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div>
                <h3 className="font-display font-bold text-lg mb-1">Quick NEC Reference</h3>
                <p className="text-white/70 text-sm">Look up receptacle placement and height rules instantly with Ampora&apos;s NEC lookup.</p>
              </div>
              <a
                href="/get"
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
              <li><a href="#standard-heights" className="hover:text-purple-400">&#8594; Standard Receptacle Heights</a></li>
              <li><a href="#ada-requirements" className="hover:text-purple-400">&#8594; ADA Accessibility Requirements</a></li>
              <li><a href="#countertop-heights" className="hover:text-purple-400">&#8594; Countertop Receptacle Heights</a></li>
              <li><a href="#floor-receptacles" className="hover:text-purple-400">&#8594; Floor Receptacle Requirements</a></li>
              <li><a href="#outdoor-heights" className="hover:text-purple-400">&#8594; Outdoor Receptacle Heights</a></li>
              <li><a href="#switch-heights" className="hover:text-purple-400">&#8594; Switch Mounting Heights</a></li>
              <li><a href="#height-reference" className="hover:text-purple-400">&#8594; Complete Height Reference Table</a></li>
            </ul>
          </div>

          {/* Article Content */}
          <div className="prose prose-invert prose-lg max-w-none">

            <section id="standard-heights" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Standard Receptacle Heights</h2>
              <p className="text-white/80 mb-4">
                One of the most common questions from apprentices and homeowners alike is &quot;How high should an outlet be?&quot; While the NEC does not explicitly mandate a specific height for general-purpose receptacles in residential settings, industry practice and local codes have established well-accepted standards.
              </p>

              <div className="bg-cyan-900/30 border border-cyan-500/30 rounded-xl p-6 my-6">
                <h3 className="font-semibold text-cyan-400 mb-3">NEC Receptacle Placement vs. Height</h3>
                <p className="text-white/70 mb-3">
                  The NEC (Article 210.52) specifies <strong>where</strong> receptacles must be placed (spacing along walls, required locations), but generally does not dictate the exact mounting height above the floor for standard receptacles. Height requirements come from:
                </p>
                <ul className="text-white/70 space-y-2">
                  <li><strong>ADA/accessibility codes:</strong> Specific height ranges for accessible spaces</li>
                  <li><strong>Local building codes:</strong> May specify minimum or maximum heights</li>
                  <li><strong>Industry practice:</strong> Standard heights accepted by inspectors</li>
                  <li><strong>Manufacturer specifications:</strong> Countertop and specialty applications</li>
                </ul>
              </div>

              <h3 className="text-xl font-semibold mt-6 mb-3">Residential Standard Heights</h3>
              <p className="text-white/80 mb-4">
                The standard residential receptacle height is measured from the finished floor to the center of the receptacle box:
              </p>
              <ul className="list-disc list-inside text-white/70 space-y-2 mb-4">
                <li><strong>General-purpose wall receptacles:</strong> 12 inches to center of box (most common)</li>
                <li><strong>Alternative standard:</strong> 15 inches to center (also widely accepted)</li>
                <li><strong>Garage receptacles:</strong> 18-48 inches depending on use and accessibility needs</li>
                <li><strong>Laundry receptacles:</strong> 42 inches (above washer/dryer) or 12 inches standard</li>
              </ul>

              <div className="bg-green-900/30 border border-green-500/30 rounded-xl p-6 my-6">
                <h4 className="font-semibold text-green-400 mb-2">Why 12 Inches Is Standard</h4>
                <p className="text-white/70">
                  The 12-inch standard became common practice because it places the receptacle above most baseboards (typically 3-5 inches tall), keeps outlets at a consistent height throughout the home, and allows for a standard stud-mounted box location. Some regions prefer 15 inches, which provides slightly more accessibility while still remaining below furniture lines.
                </p>
              </div>

              <h3 className="text-xl font-semibold mt-6 mb-3">Commercial Standard Heights</h3>
              <p className="text-white/80 mb-4">
                Commercial installations typically use different mounting heights than residential:
              </p>
              <ul className="list-disc list-inside text-white/70 space-y-2 mb-4">
                <li><strong>Office receptacles:</strong> 15-18 inches above finished floor</li>
                <li><strong>Hospital/healthcare:</strong> 18-24 inches (facilitates wheelchair access)</li>
                <li><strong>Industrial:</strong> 18-48 inches depending on equipment and hazards</li>
                <li><strong>Retail spaces:</strong> Often 15-18 inches or as specified by design</li>
              </ul>
            </section>

            <section id="ada-requirements" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">ADA Accessibility Requirements</h2>
              <p className="text-white/80 mb-4">
                The Americans with Disabilities Act (ADA) and ICC/ANSI A117.1 establish specific reach ranges that directly affect receptacle and switch placement in accessible spaces. These requirements apply to all public accommodations, commercial facilities, and accessible dwelling units.
              </p>

              <div className="bg-purple-900/30 border border-purple-500/30 rounded-xl p-6 my-6">
                <h3 className="font-semibold text-purple-400 mb-3">ADA Reach Ranges</h3>
                <ul className="text-white/80 space-y-2">
                  <li><strong>Forward reach (unobstructed):</strong> 15 inches minimum to 48 inches maximum above floor</li>
                  <li><strong>Forward reach (over obstruction):</strong> Maximum 44 inches if obstruction depth is 20-25 inches</li>
                  <li><strong>Side reach (unobstructed):</strong> 15 inches minimum to 48 inches maximum above floor</li>
                  <li><strong>Side reach (over obstruction):</strong> Maximum 46 inches if obstruction is 10 inches deep max</li>
                </ul>
              </div>

              <h3 className="text-xl font-semibold mt-6 mb-3">Where ADA Heights Apply</h3>
              <p className="text-white/80 mb-4">
                ADA-compliant receptacle heights are required in:
              </p>
              <ul className="list-disc list-inside text-white/70 space-y-2 mb-4">
                <li><strong>Public buildings:</strong> Government offices, libraries, schools, hospitals</li>
                <li><strong>Commercial spaces:</strong> Offices, retail stores, restaurants</li>
                <li><strong>Multi-family housing:</strong> Common areas and adaptable/accessible units</li>
                <li><strong>Hotels:</strong> Accessible guest rooms (percentage required by code)</li>
                <li><strong>Healthcare facilities:</strong> Patient rooms, public areas, exam rooms</li>
              </ul>

              <div className="bg-orange-900/30 border border-orange-500/30 rounded-xl p-6 my-6">
                <h4 className="font-semibold text-orange-400 mb-2">Important: ADA vs NEC</h4>
                <p className="text-white/70">
                  ADA requirements take precedence over general installation practices in accessible spaces. An outlet installed at the standard 12-inch residential height does NOT meet ADA requirements because 12 inches is below the 15-inch minimum. When ADA applies, the minimum receptacle height is 15 inches above the finished floor to the center of the outlet.
                </p>
              </div>

              <h3 className="text-xl font-semibold mt-6 mb-3">ADA Height Summary Table</h3>
              <div className="overflow-x-auto my-6">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-white/20">
                      <th className="text-left py-3 px-4 text-white/60">Reach Type</th>
                      <th className="text-left py-3 px-4 text-white/60">Minimum Height</th>
                      <th className="text-left py-3 px-4 text-white/60">Maximum Height</th>
                      <th className="text-left py-3 px-4 text-white/60">Notes</th>
                    </tr>
                  </thead>
                  <tbody className="text-white/80">
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">Forward (unobstructed)</td>
                      <td className="py-3 px-4 font-semibold text-cyan-400">15&quot;</td>
                      <td className="py-3 px-4 font-semibold text-cyan-400">48&quot;</td>
                      <td className="py-3 px-4">Most common scenario</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">Forward (over obstruction)</td>
                      <td className="py-3 px-4 font-semibold text-amber-400">15&quot;</td>
                      <td className="py-3 px-4 font-semibold text-amber-400">44&quot;</td>
                      <td className="py-3 px-4">Obstruction 20-25&quot; deep</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">Side (unobstructed)</td>
                      <td className="py-3 px-4 font-semibold text-cyan-400">15&quot;</td>
                      <td className="py-3 px-4 font-semibold text-cyan-400">48&quot;</td>
                      <td className="py-3 px-4">Clear floor space beside</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4">Side (over obstruction)</td>
                      <td className="py-3 px-4 font-semibold text-amber-400">15&quot;</td>
                      <td className="py-3 px-4 font-semibold text-amber-400">46&quot;</td>
                      <td className="py-3 px-4">Obstruction max 10&quot; deep</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section id="countertop-heights" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Countertop Receptacle Heights</h2>
              <p className="text-white/80 mb-4">
                Kitchen and bathroom countertop receptacles have specific requirements driven by both the NEC and practical considerations. Per NEC 210.52(C), receptacles serving kitchen countertop surfaces must be placed to serve the counter, which means they are typically installed above the backsplash area.
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-3">Kitchen Countertop Receptacles</h3>
              <div className="bg-cyan-900/30 border border-cyan-500/30 rounded-xl p-6 my-6">
                <h4 className="font-semibold text-cyan-400 mb-3">NEC 210.52(C) - Kitchen Counter Requirements</h4>
                <ul className="text-white/80 space-y-2">
                  <li><strong>Standard counter height:</strong> Receptacles at 42-44 inches above the finished floor</li>
                  <li><strong>Above backsplash:</strong> Typically 4-6 inches above countertop surface (counters are 36&quot; AFF)</li>
                  <li><strong>Maximum height:</strong> NEC 210.52(C)(5) - not more than 20 inches above countertop</li>
                  <li><strong>Island/peninsula:</strong> Below the countertop is acceptable per NEC 210.52(C)(2)</li>
                </ul>
              </div>

              <p className="text-white/80 mb-4">
                Kitchen countertop receptacle spacing per NEC 210.52(C)(1):
              </p>
              <ul className="list-disc list-inside text-white/70 space-y-2 mb-4">
                <li>No point along the wall line shall be more than 24 inches from a receptacle</li>
                <li>This effectively means a receptacle every 48 inches (4 feet) of counter space</li>
                <li>Each counter space 12 inches or wider requires a receptacle</li>
                <li>Island countertops with a long dimension of 24 inches or more need at least one receptacle</li>
              </ul>

              <h3 className="text-xl font-semibold mt-6 mb-3">Bathroom Countertop Receptacles</h3>
              <p className="text-white/80 mb-4">
                Bathroom receptacle placement follows NEC 210.52(D):
              </p>
              <ul className="list-disc list-inside text-white/70 space-y-2 mb-4">
                <li><strong>Height:</strong> Typically 42-44 inches above floor (same as kitchen counters)</li>
                <li><strong>Location:</strong> Within 36 inches of outside edge of each basin</li>
                <li><strong>GFCI protection:</strong> Required per NEC 210.8(A)(1)</li>
                <li><strong>Dedicated circuit:</strong> 20A circuit required for bathroom receptacles</li>
              </ul>

              <div className="bg-green-900/30 border border-green-500/30 rounded-xl p-6 my-6">
                <h4 className="font-semibold text-green-400 mb-2">Pro Tip: Backsplash Height Coordination</h4>
                <p className="text-white/70">
                  Coordinate receptacle placement with the backsplash design. A standard 4-inch backsplash means the outlet center should be about 44 inches AFF. For full-height backsplash (18 inches), plan receptacle cutouts before tile installation. Communicate with the tile installer early to avoid conflicts.
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

            <section id="floor-receptacles" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Floor Receptacle Requirements</h2>
              <p className="text-white/80 mb-4">
                Floor receptacles are used in open spaces where wall receptacles cannot provide adequate coverage, such as office areas with cubicles, islands in retail spaces, and conference room tables. NEC 210.52(A)(3) addresses floor receptacles specifically.
              </p>

              <div className="bg-purple-900/30 border border-purple-500/30 rounded-xl p-6 my-6">
                <h3 className="font-semibold text-purple-400 mb-3">NEC 210.52(A)(3) - Floor Receptacle Spacing</h3>
                <p className="text-white/70 mb-3">
                  Floor receptacles located more than 18 inches from a wall do NOT count toward the required wall receptacle spacing of NEC 210.52(A)(1). This means:
                </p>
                <ul className="text-white/70 space-y-2">
                  <li>Floor receptacles are supplemental in most residential applications</li>
                  <li>Wall receptacle requirements must still be independently satisfied</li>
                  <li>Floor receptacles within 18 inches of the wall CAN count toward spacing</li>
                </ul>
              </div>

              <h3 className="text-xl font-semibold mt-6 mb-3">Floor Receptacle Installation Requirements</h3>
              <ul className="list-disc list-inside text-white/70 space-y-2 mb-4">
                <li><strong>Box type:</strong> Must use floor-rated box and cover assembly</li>
                <li><strong>Cover requirement:</strong> Listed floor box cover plate required</li>
                <li><strong>Carpet/tile flush:</strong> Must be flush with or slightly above finished floor</li>
                <li><strong>ADA consideration:</strong> Must not create a tripping hazard</li>
                <li><strong>Wet mopping areas:</strong> Must have watertight covers when in use</li>
              </ul>

              <div className="bg-orange-900/30 border border-orange-500/30 rounded-xl p-6 my-6">
                <h4 className="font-semibold text-orange-400 mb-2">Inspection Tip</h4>
                <p className="text-white/70">
                  Floor receptacles in areas subject to wet mopping or spillage must have covers rated for that environment. Per NEC 314.27(B), floor boxes in wet areas must be listed for that purpose. This is a common inspection failure in commercial spaces like restaurants and lobbies.
                </p>
              </div>
            </section>

            <section id="outdoor-heights" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Outdoor Receptacle Heights</h2>
              <p className="text-white/80 mb-4">
                Outdoor receptacles have practical height considerations beyond the NEC minimum requirements. Proper height selection affects weatherproofing, accessibility, and protection from damage.
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-3">Recommended Outdoor Heights</h3>
              <div className="overflow-x-auto my-6">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-white/20">
                      <th className="text-left py-3 px-4 text-white/60">Location</th>
                      <th className="text-left py-3 px-4 text-white/60">Recommended Height</th>
                      <th className="text-left py-3 px-4 text-white/60">Reasoning</th>
                    </tr>
                  </thead>
                  <tbody className="text-white/80">
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">General exterior wall</td>
                      <td className="py-3 px-4 font-semibold text-cyan-400">18-24&quot; above grade</td>
                      <td className="py-3 px-4">Above splash zone, accessible</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">Deck/patio</td>
                      <td className="py-3 px-4 font-semibold text-cyan-400">12-18&quot; above deck surface</td>
                      <td className="py-3 px-4">Standard wall outlet height</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">Flood-prone areas</td>
                      <td className="py-3 px-4 font-semibold text-amber-400">Above flood level</td>
                      <td className="py-3 px-4">Check local flood zone requirements</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4">Near driveways</td>
                      <td className="py-3 px-4 font-semibold text-cyan-400">18-48&quot; above grade</td>
                      <td className="py-3 px-4">Protected from vehicle contact</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="bg-cyan-900/30 border border-cyan-500/30 rounded-xl p-6 my-6">
                <h4 className="font-semibold text-cyan-400 mb-2">Weather Protection and Height</h4>
                <p className="text-white/70">
                  Higher mounting heights reduce splash and snow accumulation around the receptacle. However, heights above 6.5 feet (78 inches) may be impractical for general use. For outdoor receptacles serving holiday lighting or landscape equipment, 18-24 inches above grade is the most practical range.
                </p>
              </div>
            </section>

            <section id="switch-heights" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Switch Mounting Heights</h2>
              <p className="text-white/80 mb-4">
                Like receptacles, the NEC does not specify an exact mounting height for switches in most cases. However, ADA requirements and industry standards establish clear guidelines.
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-3">Standard Switch Heights</h3>
              <ul className="list-disc list-inside text-white/70 space-y-2 mb-4">
                <li><strong>Residential standard:</strong> 48 inches to center of box above finished floor</li>
                <li><strong>ADA maximum:</strong> 48 inches above floor (unobstructed forward or side reach)</li>
                <li><strong>Children&apos;s facilities:</strong> Often 36-42 inches for younger children</li>
                <li><strong>Above countertops:</strong> 48-52 inches when near kitchen or bath counters</li>
              </ul>

              <div className="bg-green-900/30 border border-green-500/30 rounded-xl p-6 my-6">
                <h3 className="font-semibold text-green-400 mb-3">ADA Switch Requirements</h3>
                <ul className="text-white/80 space-y-2">
                  <li><strong>Maximum height:</strong> 48 inches above finished floor for operable parts</li>
                  <li><strong>Minimum height:</strong> 15 inches above finished floor</li>
                  <li><strong>Operation:</strong> Must be operable with one hand without tight grasping or twisting</li>
                  <li><strong>Force:</strong> Maximum 5 pounds of force to operate</li>
                </ul>
              </div>

              <h3 className="text-xl font-semibold mt-6 mb-3">Special Switch Locations</h3>
              <div className="overflow-x-auto my-6">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-white/20">
                      <th className="text-left py-3 px-4 text-white/60">Location</th>
                      <th className="text-left py-3 px-4 text-white/60">Height</th>
                      <th className="text-left py-3 px-4 text-white/60">Notes</th>
                    </tr>
                  </thead>
                  <tbody className="text-white/80">
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">Standard residential</td>
                      <td className="py-3 px-4 font-semibold">48&quot; to center</td>
                      <td className="py-3 px-4">Industry standard</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">Adjacent to door</td>
                      <td className="py-3 px-4 font-semibold">48&quot; to center</td>
                      <td className="py-3 px-4">Strike side of door, 6&quot; from casing</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">Above countertop</td>
                      <td className="py-3 px-4 font-semibold">48-52&quot; to center</td>
                      <td className="py-3 px-4">Must be above backsplash</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">Garage (vehicle area)</td>
                      <td className="py-3 px-4 font-semibold">48&quot; to center</td>
                      <td className="py-3 px-4">Accessible from vehicle</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4">ADA accessible</td>
                      <td className="py-3 px-4 font-semibold">44-48&quot; max</td>
                      <td className="py-3 px-4">May be lower if obstruction present</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section id="height-reference" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Complete Height Reference Table</h2>
              <p className="text-white/80 mb-4">
                This comprehensive table summarizes all standard mounting heights for receptacles and switches across different applications:
              </p>

              <div className="overflow-x-auto my-6">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-white/20">
                      <th className="text-left py-3 px-4 text-white/60">Device &amp; Location</th>
                      <th className="text-left py-3 px-4 text-white/60">Height (AFF)</th>
                      <th className="text-left py-3 px-4 text-white/60">Source</th>
                    </tr>
                  </thead>
                  <tbody className="text-white/80">
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">Standard wall receptacle</td>
                      <td className="py-3 px-4 font-semibold text-cyan-400">12-15&quot;</td>
                      <td className="py-3 px-4">Industry practice</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">Kitchen countertop receptacle</td>
                      <td className="py-3 px-4 font-semibold text-cyan-400">42-44&quot;</td>
                      <td className="py-3 px-4">NEC 210.52(C)</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">Bathroom countertop receptacle</td>
                      <td className="py-3 px-4 font-semibold text-cyan-400">42-44&quot;</td>
                      <td className="py-3 px-4">NEC 210.52(D)</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">Laundry receptacle (above washer)</td>
                      <td className="py-3 px-4 font-semibold text-cyan-400">42&quot;</td>
                      <td className="py-3 px-4">Industry practice</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">Garage receptacle</td>
                      <td className="py-3 px-4 font-semibold text-cyan-400">18-48&quot;</td>
                      <td className="py-3 px-4">Local code / ADA</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">Outdoor receptacle</td>
                      <td className="py-3 px-4 font-semibold text-cyan-400">18-24&quot;</td>
                      <td className="py-3 px-4">Industry practice</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">ADA receptacle (any)</td>
                      <td className="py-3 px-4 font-semibold text-amber-400">15-48&quot;</td>
                      <td className="py-3 px-4">ADA / ICC A117.1</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">Standard wall switch</td>
                      <td className="py-3 px-4 font-semibold text-green-400">48&quot;</td>
                      <td className="py-3 px-4">Industry practice / ADA</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">ADA switch (max)</td>
                      <td className="py-3 px-4 font-semibold text-amber-400">48&quot; max</td>
                      <td className="py-3 px-4">ADA / ICC A117.1</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4">Thermostat / doorbell</td>
                      <td className="py-3 px-4 font-semibold text-green-400">48-60&quot;</td>
                      <td className="py-3 px-4">Industry practice</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="bg-purple-900/30 border border-purple-500/30 rounded-xl p-6 my-6">
                <h4 className="font-semibold text-purple-400 mb-2">Consistency Is Key</h4>
                <p className="text-white/70">
                  Regardless of the specific height chosen, consistency throughout a project is essential. Inspectors will note visually inconsistent receptacle heights even when each individual outlet meets code. Use a measuring jig or mark your stud at the desired height to ensure uniformity across every room.
                </p>
              </div>
            </section>

            {/* CTA Section */}
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
                <Link href="/blog/outdoor-receptacle-requirements-nec" className="bg-white/5 hover:bg-white/10 rounded-xl p-6 transition-colors">
                  <span className="text-purple-400 text-sm">NEC Code</span>
                  <h3 className="font-semibold mt-2">Outdoor Receptacle Requirements NEC</h3>
                </Link>
                <Link href="/blog/bathroom-electrical-code-requirements" className="bg-white/5 hover:bg-white/10 rounded-xl p-6 transition-colors">
                  <span className="text-purple-400 text-sm">NEC Code</span>
                  <h3 className="font-semibold mt-2">Bathroom Electrical Code Requirements</h3>
                </Link>
                <Link href="/blog/kitchen-electrical-requirements-nec" className="bg-white/5 hover:bg-white/10 rounded-xl p-6 transition-colors">
                  <span className="text-purple-400 text-sm">NEC Code</span>
                  <h3 className="font-semibold mt-2">Kitchen Electrical Requirements NEC</h3>
                </Link>
                <Link href="/blog/receptacle-types-configurations-guide" className="bg-white/5 hover:bg-white/10 rounded-xl p-6 transition-colors">
                  <span className="text-orange-400 text-sm">Materials</span>
                  <h3 className="font-semibold mt-2">Receptacle Types &amp; Configurations Guide</h3>
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
