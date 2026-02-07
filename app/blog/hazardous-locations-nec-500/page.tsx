import { Metadata } from "next";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import { BreadcrumbJsonLd, BlogPostingJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "NEC Article 500 Hazardous Locations Guide: Class I, II, III Divisions and Zones",
  description: "Complete guide to NEC Article 500 hazardous locations. Learn Class I, II, III divisions, Zone classifications, equipment selection, and installation requirements for explosive atmospheres.",
  keywords: [
    "NEC Article 500",
    "hazardous locations",
    "Class I Division 1",
    "Class I Division 2",
    "Class II hazardous location",
    "Class III hazardous location",
    "Zone 0",
    "Zone 1",
    "Zone 2",
    "explosion proof electrical",
    "intrinsically safe",
    "hazardous area classification",
    "flammable gas electrical",
    "combustible dust electrical",
    "NEC 500 requirements",
    "hazardous location equipment"
  ],
  alternates: {
    canonical: "https://amporalabs.com/blog/hazardous-locations-nec-500",
  },
  openGraph: {
    title: "NEC Article 500 Hazardous Locations Guide - Ampora",
    description: "Master hazardous location classifications, equipment selection, and NEC Article 500 installation requirements.",
    url: "https://amporalabs.com/blog/hazardous-locations-nec-500",
    type: "article",
  },
};

function HeroIllustration() {
  return (
    <svg viewBox="0 0 400 160" className="w-full h-40 md:h-48" aria-label="Hazardous location classification zones illustration">
      {/* Class I - Gases/Vapors Tank */}
      <g transform="translate(20, 30)">
        <ellipse cx="45" cy="90" rx="35" ry="12" fill="#1f2937" stroke="#ef4444" strokeWidth="2"/>
        <rect x="10" y="20" width="70" height="70" rx="2" fill="#1f2937" stroke="#ef4444" strokeWidth="2"/>
        <ellipse cx="45" cy="20" rx="35" ry="12" fill="#1f2937" stroke="#ef4444" strokeWidth="2"/>
        <text x="45" y="55" textAnchor="middle" fill="#ef4444" fontSize="8" fontWeight="bold">CLASS I</text>
        <text x="45" y="68" textAnchor="middle" fill="#9ca3af" fontSize="7">GASES</text>
        {/* Vapor waves */}
        <path d="M30 8 Q35 3 40 8 Q45 13 50 8 Q55 3 60 8" stroke="#f97316" strokeWidth="1.5" fill="none" opacity="0.7"/>
        <path d="M25 0 Q32 -5 40 0 Q48 5 55 0" stroke="#f97316" strokeWidth="1.5" fill="none" opacity="0.5"/>
      </g>

      {/* Class II - Dust Silo */}
      <g transform="translate(140, 25)">
        <polygon points="45,0 80,30 80,100 10,100 10,30" fill="#1f2937" stroke="#eab308" strokeWidth="2"/>
        <rect x="35" y="80" width="20" height="20" fill="#1f2937" stroke="#eab308" strokeWidth="1"/>
        <text x="45" y="55" textAnchor="middle" fill="#eab308" fontSize="8" fontWeight="bold">CLASS II</text>
        <text x="45" y="68" textAnchor="middle" fill="#9ca3af" fontSize="7">DUST</text>
        {/* Dust particles */}
        <circle cx="30" cy="15" r="2" fill="#eab308" opacity="0.6"/>
        <circle cx="55" cy="10" r="1.5" fill="#eab308" opacity="0.5"/>
        <circle cx="40" cy="5" r="1" fill="#eab308" opacity="0.7"/>
        <circle cx="60" cy="18" r="1.5" fill="#eab308" opacity="0.4"/>
      </g>

      {/* Class III - Fibers */}
      <g transform="translate(260, 35)">
        <rect x="10" y="20" width="80" height="70" rx="4" fill="#1f2937" stroke="#22c55e" strokeWidth="2"/>
        <text x="50" y="55" textAnchor="middle" fill="#22c55e" fontSize="8" fontWeight="bold">CLASS III</text>
        <text x="50" y="68" textAnchor="middle" fill="#9ca3af" fontSize="7">FIBERS</text>
        {/* Fiber lines */}
        <line x1="20" y1="25" x2="35" y2="35" stroke="#22c55e" strokeWidth="1" opacity="0.5"/>
        <line x1="50" y1="22" x2="60" y2="32" stroke="#22c55e" strokeWidth="1" opacity="0.5"/>
        <line x1="75" y1="25" x2="82" y2="38" stroke="#22c55e" strokeWidth="1" opacity="0.5"/>
        <line x1="25" y1="30" x2="15" y2="18" stroke="#22c55e" strokeWidth="1" opacity="0.4"/>
      </g>

      {/* Division indicators */}
      <g transform="translate(0, 130)">
        <rect x="30" y="5" width="100" height="20" rx="4" fill="#ef4444" fillOpacity="0.2" stroke="#ef4444"/>
        <text x="80" y="19" textAnchor="middle" fill="#ef4444" fontSize="8" fontWeight="bold">DIV 1: NORMAL</text>
      </g>
      <g transform="translate(150, 130)">
        <rect x="0" y="5" width="100" height="20" rx="4" fill="#f97316" fillOpacity="0.2" stroke="#f97316"/>
        <text x="50" y="19" textAnchor="middle" fill="#f97316" fontSize="8" fontWeight="bold">DIV 2: ABNORMAL</text>
      </g>
      <g transform="translate(270, 130)">
        <rect x="0" y="5" width="100" height="20" rx="4" fill="#22c55e" fillOpacity="0.2" stroke="#22c55e"/>
        <text x="50" y="19" textAnchor="middle" fill="#22c55e" fontSize="8" fontWeight="bold">HANDLED ONLY</text>
      </g>
    </svg>
  );
}

export default function HazardousLocationsNEC500Page() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navigation />
      <div className="pt-20">
        <BreadcrumbJsonLd
          items={[
            { name: "Home", url: "https://amporalabs.com" },
            { name: "Blog", url: "https://amporalabs.com/blog" },
            { name: "Hazardous Locations NEC 500", url: "https://amporalabs.com/blog/hazardous-locations-nec-500" },
          ]}
        />
        <BlogPostingJsonLd
          headline="NEC Article 500 Hazardous Locations Guide: Class I, II, III Divisions and Zones"
          description="Complete guide to NEC Article 500 hazardous locations including classifications, equipment selection, and installation requirements."
          datePublished="2025-01-15"
          dateModified="2025-01-15"
          url="https://amporalabs.com/blog/hazardous-locations-nec-500"
          wordCount={3200}
          keywords={["NEC Article 500", "hazardous locations", "Class I Division 1", "explosion proof", "intrinsically safe"]}
        />

        <article className="max-w-4xl mx-auto px-6 py-12">
          {/* Breadcrumb */}
          <nav className="text-sm text-white/60 mb-8">
            <Link href="/" className="hover:text-white">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/blog" className="hover:text-white">Blog</Link>
            <span className="mx-2">/</span>
            <span className="text-white">Hazardous Locations NEC 500</span>
          </nav>

          {/* Article Header */}
          <header className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <span className="px-3 py-1 bg-purple-600/30 text-purple-300 text-sm font-medium rounded-full">
                NEC Code
              </span>
              <span className="text-white/40 text-sm">14 min read</span>
              <span className="text-white/40 text-sm">January 15, 2025</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6 leading-tight">
              NEC Article 500 Hazardous Locations: Complete Classification Guide
            </h1>
            <p className="text-xl text-white/70">
              Master hazardous location classifications for electrical installations. Understand Class I, II, III divisions and zones, select proper equipment, and ensure code-compliant installations in explosive atmospheres.
            </p>
          </header>

          <div className="mb-12 bg-gradient-to-br from-red-900/20 to-yellow-900/20 rounded-2xl p-6 border border-white/10">
            <HeroIllustration />
          </div>

          {/* Warning Box */}
          <div className="bg-red-900/30 border border-red-500/30 rounded-2xl p-6 mb-12">
            <div className="flex items-start gap-4">
              <div className="text-red-400 text-2xl">&#9888;</div>
              <div>
                <h3 className="font-display font-bold text-lg mb-1 text-red-400">Critical Safety Notice</h3>
                <p className="text-white/70 text-sm">
                  Hazardous location electrical work requires specialized training and certification. Improper installations can result in explosions, fires, and fatalities. Always consult with a qualified engineer and follow all applicable codes and standards.
                </p>
              </div>
            </div>
          </div>

          {/* Table of Contents */}
          <div className="bg-white/5 rounded-2xl p-6 mb-12">
            <h2 className="font-display font-bold mb-4">In This Guide</h2>
            <ul className="space-y-2 text-white/70">
              <li><a href="#what-are-hazardous-locations" className="hover:text-purple-400">What Are Hazardous Locations?</a></li>
              <li><a href="#class-definitions" className="hover:text-purple-400">Class I, II, and III Definitions</a></li>
              <li><a href="#division-system" className="hover:text-purple-400">Division 1 vs Division 2</a></li>
              <li><a href="#zone-system" className="hover:text-purple-400">Zone Classification System</a></li>
              <li><a href="#groups" className="hover:text-purple-400">Material Groups A through G</a></li>
              <li><a href="#equipment-selection" className="hover:text-purple-400">Equipment Selection Requirements</a></li>
              <li><a href="#protection-techniques" className="hover:text-purple-400">Protection Techniques</a></li>
              <li><a href="#installation-requirements" className="hover:text-purple-400">Installation Requirements</a></li>
              <li><a href="#common-mistakes" className="hover:text-purple-400">Common Mistakes to Avoid</a></li>
            </ul>
          </div>

          {/* Article Content */}
          <div className="prose prose-invert prose-lg max-w-none">

            <section id="what-are-hazardous-locations" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">What Are Hazardous Locations?</h2>
              <p className="text-white/80 mb-4">
                <strong>Hazardous locations</strong> are areas where fire or explosion hazards may exist due to the presence of flammable gases, vapors, combustible dusts, or easily ignitable fibers and flyings. The NEC dedicates an entire chapter (Chapter 5) to wiring methods and equipment requirements for these dangerous environments.
              </p>
              <p className="text-white/80 mb-4">
                Electrical equipment in hazardous locations can become an ignition source through:
              </p>
              <ul className="list-disc list-inside text-white/70 space-y-2 mb-4">
                <li><strong>Arcing</strong> - Sparks from switches, motor brushes, or loose connections</li>
                <li><strong>Sparking</strong> - Static discharge or mechanical sparks</li>
                <li><strong>High surface temperature</strong> - Equipment operating above the ignition temperature of the atmosphere</li>
              </ul>
              <p className="text-white/80">
                NEC Article 500 provides the classification system and general requirements. Articles 501, 502, and 503 provide specific requirements for Class I, II, and III locations respectively. Articles 505 and 506 cover the alternative Zone classification system.
              </p>
            </section>

            <section id="class-definitions" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Class I, II, and III Definitions</h2>

              <div className="space-y-6 my-6">
                <div className="bg-red-900/20 rounded-xl p-6 border border-red-500/30">
                  <h3 className="font-semibold text-red-400 mb-3">Class I: Flammable Gases and Vapors</h3>
                  <p className="text-white/70 mb-3">
                    Locations where flammable gases or vapors are or may be present in quantities sufficient to produce explosive or ignitable mixtures.
                  </p>
                  <p className="text-white/60 text-sm mb-2"><strong>Examples:</strong></p>
                  <ul className="list-disc list-inside text-white/60 text-sm space-y-1">
                    <li>Petroleum refineries and gasoline dispensing areas</li>
                    <li>Spray finishing operations using flammable solvents</li>
                    <li>Aircraft hangars with fuel vapors</li>
                    <li>Natural gas processing plants</li>
                    <li>Wastewater treatment (methane)</li>
                  </ul>
                </div>

                <div className="bg-yellow-900/20 rounded-xl p-6 border border-yellow-500/30">
                  <h3 className="font-semibold text-yellow-400 mb-3">Class II: Combustible Dusts</h3>
                  <p className="text-white/70 mb-3">
                    Locations where combustible dust may be present in quantities sufficient to produce explosive or ignitable mixtures.
                  </p>
                  <p className="text-white/60 text-sm mb-2"><strong>Examples:</strong></p>
                  <ul className="list-disc list-inside text-white/60 text-sm space-y-1">
                    <li>Grain elevators and flour mills</li>
                    <li>Coal preparation plants</li>
                    <li>Sugar processing facilities</li>
                    <li>Metal powder manufacturing</li>
                    <li>Pharmaceutical manufacturing (certain processes)</li>
                  </ul>
                </div>

                <div className="bg-green-900/20 rounded-xl p-6 border border-green-500/30">
                  <h3 className="font-semibold text-green-400 mb-3">Class III: Ignitable Fibers and Flyings</h3>
                  <p className="text-white/70 mb-3">
                    Locations where easily ignitable fibers or materials producing combustible flyings are handled, manufactured, or used (but not suspended in air).
                  </p>
                  <p className="text-white/60 text-sm mb-2"><strong>Examples:</strong></p>
                  <ul className="list-disc list-inside text-white/60 text-sm space-y-1">
                    <li>Textile mills processing cotton, rayon, or synthetic fibers</li>
                    <li>Cotton gins and cotton seed mills</li>
                    <li>Woodworking facilities with sawdust</li>
                    <li>Plants handling cocoa fiber or similar materials</li>
                  </ul>
                </div>
              </div>
            </section>

            <section id="division-system" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Division 1 vs Division 2</h2>
              <p className="text-white/80 mb-4">
                Each Class is further subdivided into Divisions based on the probability of the hazardous atmosphere being present:
              </p>

              <div className="overflow-x-auto my-6">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-white/20">
                      <th className="text-left py-3 px-4 text-white/60">Division</th>
                      <th className="text-left py-3 px-4 text-white/60">Hazard Probability</th>
                      <th className="text-left py-3 px-4 text-white/60">Description</th>
                    </tr>
                  </thead>
                  <tbody className="text-white/80">
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-mono text-red-400">Division 1</td>
                      <td className="py-3 px-4">Normal conditions</td>
                      <td className="py-3 px-4 text-white/60">Hazardous atmosphere exists continuously, intermittently, or periodically under normal operating conditions</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-mono text-orange-400">Division 2</td>
                      <td className="py-3 px-4">Abnormal conditions</td>
                      <td className="py-3 px-4 text-white/60">Hazardous atmosphere present only during abnormal conditions (equipment failure, accidental rupture, unusual operation)</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="bg-white/5 rounded-xl p-6 my-6">
                <h3 className="font-semibold mb-3">Division 1 Conditions (Class I Example)</h3>
                <ul className="space-y-2 text-white/70 text-sm">
                  <li>&#8226; Ignitable concentrations exist under normal operating conditions</li>
                  <li>&#8226; Ignitable concentrations may exist frequently due to repair, maintenance, or leakage</li>
                  <li>&#8226; Breakdown or faulty operation of equipment could release ignitable concentrations AND simultaneously cause failure of electrical equipment</li>
                </ul>
              </div>

              <div className="bg-white/5 rounded-xl p-6 my-6">
                <h3 className="font-semibold mb-3">Division 2 Conditions (Class I Example)</h3>
                <ul className="space-y-2 text-white/70 text-sm">
                  <li>&#8226; Volatile flammable liquids/gases handled only in closed containers or closed systems</li>
                  <li>&#8226; Ignitable concentrations prevented by positive mechanical ventilation</li>
                  <li>&#8226; Location adjacent to a Division 1 location where ignitable concentrations might occasionally communicate</li>
                </ul>
              </div>
            </section>

            <section id="zone-system" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Zone Classification System</h2>
              <p className="text-white/80 mb-4">
                The Zone system (NEC Articles 505 and 506) is an alternative classification method based on IEC standards. It provides more granularity than the Division system and is increasingly used in international projects.
              </p>

              <div className="overflow-x-auto my-6">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-white/20">
                      <th className="text-left py-3 px-4 text-white/60">Zone</th>
                      <th className="text-left py-3 px-4 text-white/60">Class I Equivalent</th>
                      <th className="text-left py-3 px-4 text-white/60">Hazard Presence</th>
                    </tr>
                  </thead>
                  <tbody className="text-white/80">
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-mono text-red-400">Zone 0</td>
                      <td className="py-3 px-4">More restrictive than Div 1</td>
                      <td className="py-3 px-4 text-white/60">Ignitable atmosphere present continuously or for long periods (more than 1000 hrs/yr)</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-mono text-orange-400">Zone 1</td>
                      <td className="py-3 px-4">Similar to Div 1</td>
                      <td className="py-3 px-4 text-white/60">Ignitable atmosphere likely under normal operating conditions (10-1000 hrs/yr)</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-mono text-yellow-400">Zone 2</td>
                      <td className="py-3 px-4">Similar to Div 2</td>
                      <td className="py-3 px-4 text-white/60">Ignitable atmosphere unlikely, only under abnormal conditions (less than 10 hrs/yr)</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="text-white/80 mb-4">
                For combustible dusts (Class II equivalent), Zones 20, 21, and 22 are used with similar probability distinctions.
              </p>

              <div className="bg-purple-900/30 rounded-xl p-6 my-6">
                <h3 className="font-semibold text-purple-400 mb-3">Division vs Zone: When to Use Each</h3>
                <p className="text-white/70">
                  The Division system is traditional in North America, while the Zone system is internationally harmonized with IEC standards. You cannot mix Division and Zone equipment in the same installation. Choose one system based on project requirements, client preference, and available equipment.
                </p>
              </div>
            </section>

            <section id="groups" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Material Groups A through G</h2>
              <p className="text-white/80 mb-4">
                Within each Class, materials are categorized into Groups based on their explosive characteristics. Equipment must be rated for the specific Group present.
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-3">Class I Groups (Gases and Vapors)</h3>
              <div className="overflow-x-auto my-6">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-white/20">
                      <th className="text-left py-3 px-4 text-white/60">Group</th>
                      <th className="text-left py-3 px-4 text-white/60">Representative Material</th>
                      <th className="text-left py-3 px-4 text-white/60">Hazard Level</th>
                    </tr>
                  </thead>
                  <tbody className="text-white/80">
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-mono text-red-400">Group A</td>
                      <td className="py-3 px-4">Acetylene</td>
                      <td className="py-3 px-4 text-white/60">Most hazardous - highest explosion pressure</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-mono text-orange-400">Group B</td>
                      <td className="py-3 px-4">Hydrogen, butadiene, ethylene oxide</td>
                      <td className="py-3 px-4 text-white/60">Highly hazardous</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-mono text-yellow-400">Group C</td>
                      <td className="py-3 px-4">Ethylene, cyclopropane, ethyl ether</td>
                      <td className="py-3 px-4 text-white/60">Moderately hazardous</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-mono text-green-400">Group D</td>
                      <td className="py-3 px-4">Gasoline, propane, methane, natural gas</td>
                      <td className="py-3 px-4 text-white/60">Least hazardous Class I - most common</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h3 className="text-xl font-semibold mt-6 mb-3">Class II Groups (Dusts)</h3>
              <div className="overflow-x-auto my-6">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-white/20">
                      <th className="text-left py-3 px-4 text-white/60">Group</th>
                      <th className="text-left py-3 px-4 text-white/60">Material Type</th>
                      <th className="text-left py-3 px-4 text-white/60">Examples</th>
                    </tr>
                  </thead>
                  <tbody className="text-white/80">
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-mono text-red-400">Group E</td>
                      <td className="py-3 px-4">Conductive metal dusts</td>
                      <td className="py-3 px-4 text-white/60">Aluminum, magnesium, bronze powder</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-mono text-orange-400">Group F</td>
                      <td className="py-3 px-4">Carbonaceous dusts</td>
                      <td className="py-3 px-4 text-white/60">Coal, carbon black, charcoal, coke</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-mono text-yellow-400">Group G</td>
                      <td className="py-3 px-4">Non-conductive dusts</td>
                      <td className="py-3 px-4 text-white/60">Flour, grain, wood, plastics, sugar</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="bg-orange-900/30 rounded-xl p-6 my-6">
                <p className="text-white/90">
                  <strong>Important:</strong> Equipment rated for a more hazardous Group can generally be used in less hazardous Groups within the same Class. Equipment rated for Group A can be used in Groups B, C, and D. However, Group D equipment CANNOT be used in Group A, B, or C locations.
                </p>
              </div>
            </section>

            <section id="equipment-selection" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Equipment Selection Requirements</h2>
              <p className="text-white/80 mb-4">
                Equipment for hazardous locations must be specifically listed and marked for the Class, Division (or Zone), and Group where it will be used.
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-3">Required Equipment Markings</h3>
              <div className="bg-white/5 rounded-xl p-6 my-6">
                <p className="text-white/70 text-sm mb-4">Example marking for explosion-proof motor:</p>
                <div className="bg-black/50 rounded-lg p-4 font-mono text-sm">
                  <p className="text-green-400">CL I, DIV 1, GP C, D</p>
                  <p className="text-green-400">CL II, DIV 1, GP E, F, G</p>
                  <p className="text-green-400">T3C (160C)</p>
                </div>
                <ul className="mt-4 space-y-1 text-white/60 text-sm">
                  <li>&#8226; <strong>CL I, DIV 1, GP C, D</strong> - Suitable for Class I, Division 1, Groups C and D</li>
                  <li>&#8226; <strong>CL II, DIV 1, GP E, F, G</strong> - Also suitable for Class II, Division 1, Groups E, F, and G</li>
                  <li>&#8226; <strong>T3C (160C)</strong> - Maximum surface temperature 160 degrees C (Temperature Code T3C)</li>
                </ul>
              </div>

              <h3 className="text-xl font-semibold mt-6 mb-3">Temperature Codes (T-Ratings)</h3>
              <p className="text-white/80 mb-4">
                Equipment must operate below the ignition temperature of the atmosphere. T-Codes indicate maximum surface temperature:
              </p>

              <div className="overflow-x-auto my-6">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-white/20">
                      <th className="text-left py-3 px-4 text-white/60">T-Code</th>
                      <th className="text-left py-3 px-4 text-white/60">Max Temp (C)</th>
                      <th className="text-left py-3 px-4 text-white/60">Max Temp (F)</th>
                    </tr>
                  </thead>
                  <tbody className="text-white/80">
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-mono">T1</td>
                      <td className="py-3 px-4">450C</td>
                      <td className="py-3 px-4">842F</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-mono">T2</td>
                      <td className="py-3 px-4">300C</td>
                      <td className="py-3 px-4">572F</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-mono">T3</td>
                      <td className="py-3 px-4">200C</td>
                      <td className="py-3 px-4">392F</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-mono">T4</td>
                      <td className="py-3 px-4">135C</td>
                      <td className="py-3 px-4">275F</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-mono">T5</td>
                      <td className="py-3 px-4">100C</td>
                      <td className="py-3 px-4">212F</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-mono">T6</td>
                      <td className="py-3 px-4">85C</td>
                      <td className="py-3 px-4">185F</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section id="protection-techniques" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Protection Techniques</h2>
              <p className="text-white/80 mb-4">
                Various protection techniques are used to prevent electrical equipment from igniting hazardous atmospheres:
              </p>

              <div className="grid md:grid-cols-2 gap-4 my-6">
                <div className="bg-white/5 rounded-xl p-6">
                  <h3 className="font-semibold text-purple-400 mb-2">Explosion-Proof (XP)</h3>
                  <p className="text-white/60 text-sm">
                    Enclosure designed to contain an internal explosion and prevent ignition of surrounding atmosphere. Flame path cools escaping gases below ignition temperature. Common for motors, junction boxes, lighting.
                  </p>
                </div>
                <div className="bg-white/5 rounded-xl p-6">
                  <h3 className="font-semibold text-cyan-400 mb-2">Intrinsically Safe (IS)</h3>
                  <p className="text-white/60 text-sm">
                    Circuit energy limited so sparks cannot ignite the atmosphere. Requires associated apparatus (barriers) in safe area. Used for instrumentation, sensors, and low-power control circuits.
                  </p>
                </div>
                <div className="bg-white/5 rounded-xl p-6">
                  <h3 className="font-semibold text-green-400 mb-2">Purged/Pressurized</h3>
                  <p className="text-white/60 text-sm">
                    Enclosure maintained at positive pressure with clean air or inert gas to prevent hazardous atmosphere from entering. Used for control rooms and analyzer houses in hazardous areas.
                  </p>
                </div>
                <div className="bg-white/5 rounded-xl p-6">
                  <h3 className="font-semibold text-yellow-400 mb-2">Dust-Ignition-Proof</h3>
                  <p className="text-white/60 text-sm">
                    Enclosure that excludes dust and operates below ignition temperature of dust layer. Required for Class II, Division 1 locations. Not interchangeable with explosion-proof.
                  </p>
                </div>
              </div>

              <div className="bg-white/5 rounded-xl p-6 my-6">
                <h3 className="font-semibold mb-3">Additional Protection Methods</h3>
                <ul className="space-y-2 text-white/70 text-sm">
                  <li>&#8226; <strong>Hermetically Sealed</strong> - Equipment sealed by fusion (welding, brazing, glass-to-metal)</li>
                  <li>&#8226; <strong>Oil Immersion</strong> - Arcing parts immersed in oil</li>
                  <li>&#8226; <strong>Nonincendive</strong> - Incapable of igniting under normal conditions (Division 2 only)</li>
                  <li>&#8226; <strong>Encapsulation</strong> - Potting compounds surround potential ignition sources</li>
                </ul>
              </div>
            </section>

            <section id="installation-requirements" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Installation Requirements</h2>

              <h3 className="text-xl font-semibold mt-6 mb-3">Wiring Methods - Class I, Division 1</h3>
              <ul className="list-disc list-inside text-white/70 space-y-2 mb-4">
                <li>Threaded rigid metal conduit (RMC) or threaded steel intermediate metal conduit (IMC)</li>
                <li>Type MI cable with termination fittings listed for the location</li>
                <li>Type MC-HL cable listed for Division 1</li>
                <li>All boxes and fittings must be explosion-proof</li>
                <li>Minimum 5 full threads engaged on all conduit connections</li>
              </ul>

              <h3 className="text-xl font-semibold mt-6 mb-3">Wiring Methods - Class I, Division 2</h3>
              <ul className="list-disc list-inside text-white/70 space-y-2 mb-4">
                <li>All wiring methods allowed for Division 1</li>
                <li>Enclosed gasketed busways and wireways</li>
                <li>Type PLTC and PLTC-ER cables</li>
                <li>Type ITC and ITC-ER cables</li>
                <li>Type MC, MV, or TC cables with listed termination fittings</li>
              </ul>

              <h3 className="text-xl font-semibold mt-6 mb-3">Sealing Requirements (NEC 501.15)</h3>
              <div className="bg-white/5 rounded-xl p-6 my-6">
                <p className="text-white/70 text-sm mb-4">Seals are required to prevent passage of gases, vapors, or flames through conduit systems:</p>
                <ul className="space-y-2 text-white/70 text-sm">
                  <li>&#8226; <strong>At boundaries</strong> - Where conduit passes from Division 1 to Division 2 or nonhazardous areas</li>
                  <li>&#8226; <strong>At enclosures</strong> - Within 18 inches of explosion-proof enclosures containing arcing devices in 2-inch or larger conduit</li>
                  <li>&#8226; <strong>At enclosures</strong> - Within 18 inches of enclosures in 2-inch or larger conduit if enclosure is required to be explosion-proof</li>
                  <li>&#8226; <strong>Vertical runs</strong> - May require additional seals to prevent pressure piling</li>
                </ul>
              </div>

              <div className="bg-orange-900/30 rounded-xl p-6 my-6">
                <p className="text-white/90">
                  <strong>Seal Installation:</strong> Sealing compound must be fiber-free and listed for the purpose. Minimum thickness equals trade size of conduit (not less than 5/8 inch). Splices or taps are not permitted in seal fittings.
                </p>
              </div>
            </section>

            <section id="common-mistakes" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Common Mistakes to Avoid</h2>

              <div className="space-y-4 my-6">
                <div className="bg-red-900/20 border border-red-500/30 rounded-xl p-6">
                  <h3 className="font-semibold text-red-400 mb-2">1. Wrong Equipment Classification</h3>
                  <p className="text-white/70 text-sm">
                    Using Division 2 equipment in Division 1 locations, or using Group D equipment where Group C is required. Always verify the exact Class, Division/Zone, and Group before selecting equipment.
                  </p>
                </div>

                <div className="bg-red-900/20 border border-red-500/30 rounded-xl p-6">
                  <h3 className="font-semibold text-red-400 mb-2">2. Improper Conduit Seals</h3>
                  <p className="text-white/70 text-sm">
                    Missing seals at boundary crossings, seals installed more than 18 inches from enclosures, or using improper sealing compound. This can allow flame or gas propagation through the conduit system.
                  </p>
                </div>

                <div className="bg-red-900/20 border border-red-500/30 rounded-xl p-6">
                  <h3 className="font-semibold text-red-400 mb-2">3. Insufficient Thread Engagement</h3>
                  <p className="text-white/70 text-sm">
                    Explosion-proof integrity requires at least 5 full threads of engagement. Cut threads are preferred over die-cut threads for better sealing surface.
                  </p>
                </div>

                <div className="bg-red-900/20 border border-red-500/30 rounded-xl p-6">
                  <h3 className="font-semibold text-red-400 mb-2">4. Ignoring Temperature Ratings</h3>
                  <p className="text-white/70 text-sm">
                    Equipment may be correctly classified for the Group but have a T-rating too high for the specific material present. Always verify autoignition temperature of materials against equipment T-rating.
                  </p>
                </div>

                <div className="bg-red-900/20 border border-red-500/30 rounded-xl p-6">
                  <h3 className="font-semibold text-red-400 mb-2">5. Mixing Division and Zone Equipment</h3>
                  <p className="text-white/70 text-sm">
                    Division-listed and Zone-listed equipment cannot be intermixed in the same installation. Choose one classification system and maintain consistency throughout the project.
                  </p>
                </div>
              </div>
            </section>

            {/* CTA Section */}
            <section className="bg-gradient-to-r from-purple-900/30 to-cyan-900/30 rounded-2xl p-8 my-12">
              <h2 className="text-2xl font-display font-bold mb-4 text-center">
                Quick Reference for Hazardous Location Code
              </h2>
              <p className="text-white/70 mb-6 text-center">
                Access NEC Article 500 requirements instantly with Ampora's AI-powered code reference. Get answers to hazardous location classification questions in seconds.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link
                  href="/features/nec-code-reference"
                  className="px-6 py-3 bg-purple-600 text-white font-semibold rounded-full hover:bg-purple-500 transition-colors text-center"
                >
                  Explore NEC Reference
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
                <Link href="/blog/electrical-grounding-vs-bonding" className="bg-white/5 hover:bg-white/10 rounded-xl p-6 transition-colors">
                  <span className="text-purple-400 text-sm">NEC Code</span>
                  <h3 className="font-semibold mt-2">Grounding vs Bonding: Understanding the Difference</h3>
                </Link>
                <Link href="/blog/nec-article-250-grounding-guide" className="bg-white/5 hover:bg-white/10 rounded-xl p-6 transition-colors">
                  <span className="text-purple-400 text-sm">NEC Code</span>
                  <h3 className="font-semibold mt-2">NEC Article 250: Complete Grounding Guide</h3>
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
