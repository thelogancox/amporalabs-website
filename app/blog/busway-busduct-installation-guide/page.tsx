import { Metadata } from "next";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import { BreadcrumbJsonLd, BlogPostingJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Busway & Bus Duct Installation: NEC Requirements Guide",
  description: "Complete guide to busway and bus duct installation per NEC Article 368. Learn about feeder, plug-in, and trolley busway types, support requirements, tap connections, overcurrent protection, and permitted uses for commercial and industrial electrical systems.",
  keywords: [
    "busway installation",
    "bus duct NEC",
    "NEC Article 368",
    "plug-in busway",
    "feeder busway",
    "trolley busway",
    "busway tap connections",
    "busway support requirements",
    "bus duct overcurrent protection",
    "busway vs conduit",
  ],
  alternates: {
    canonical: "https://amporalabs.com/blog/busway-busduct-installation-guide",
  },
  openGraph: {
    title: "Busway & Bus Duct Installation: NEC Requirements Guide - Ampora",
    description: "Complete guide to busway and bus duct installation per NEC Article 368.",
    url: "https://amporalabs.com/blog/busway-busduct-installation-guide",
    type: "article",
    publishedTime: "2025-06-08",
  },
};

function HeroIllustration() {
  return (
    <svg viewBox="0 0 400 180" className="w-full h-40 md:h-48" aria-label="Busway with tap-off boxes illustration">
      {/* Main busway duct */}
      <rect x="30" y="50" width="340" height="30" rx="3" fill="#1f2937" stroke="#6b7280" strokeWidth="2"/>
      <rect x="35" y="55" width="330" height="20" rx="2" fill="#111827"/>

      {/* Bus bars inside duct */}
      <line x1="40" y1="60" x2="360" y2="60" stroke="#b87333" strokeWidth="3"/>
      <line x1="40" y1="65" x2="360" y2="65" stroke="#b87333" strokeWidth="3"/>
      <line x1="40" y1="70" x2="360" y2="70" stroke="#b87333" strokeWidth="3"/>

      {/* Ground bar */}
      <line x1="40" y1="74" x2="360" y2="74" stroke="#22c55e" strokeWidth="1.5" strokeDasharray="4 2"/>

      {/* Tap-off box 1 */}
      <rect x="80" y="80" width="40" height="45" rx="3" fill="#1f2937" stroke="#8b5cf6" strokeWidth="1.5"/>
      <rect x="87" y="85" width="26" height="8" rx="1" fill="#8b5cf6" fillOpacity="0.3"/>
      <circle cx="100" cy="105" r="4" fill="none" stroke="#ef4444" strokeWidth="1.5"/>
      <line x1="100" y1="101" x2="100" y2="109" stroke="#ef4444" strokeWidth="1"/>
      <text x="100" y="138" textAnchor="middle" fill="#8b5cf6" fontSize="7" fontWeight="bold">TAP BOX</text>

      {/* Connection line from busway to tap box 1 */}
      <line x1="100" y1="80" x2="100" y2="80" stroke="#6b7280" strokeWidth="1"/>

      {/* Tap-off box 2 */}
      <rect x="180" y="80" width="40" height="45" rx="3" fill="#1f2937" stroke="#3b82f6" strokeWidth="1.5"/>
      <rect x="187" y="85" width="26" height="8" rx="1" fill="#3b82f6" fillOpacity="0.3"/>
      <circle cx="200" cy="105" r="4" fill="none" stroke="#ef4444" strokeWidth="1.5"/>
      <line x1="200" y1="101" x2="200" y2="109" stroke="#ef4444" strokeWidth="1"/>
      <text x="200" y="138" textAnchor="middle" fill="#3b82f6" fontSize="7" fontWeight="bold">TAP BOX</text>

      {/* Tap-off box 3 */}
      <rect x="280" y="80" width="40" height="45" rx="3" fill="#1f2937" stroke="#22c55e" strokeWidth="1.5"/>
      <rect x="287" y="85" width="26" height="8" rx="1" fill="#22c55e" fillOpacity="0.3"/>
      <circle cx="300" cy="105" r="4" fill="none" stroke="#ef4444" strokeWidth="1.5"/>
      <line x1="300" y1="101" x2="300" y2="109" stroke="#ef4444" strokeWidth="1"/>
      <text x="300" y="138" textAnchor="middle" fill="#22c55e" fontSize="7" fontWeight="bold">TAP BOX</text>

      {/* Support hangers */}
      <line x1="60" y1="20" x2="60" y2="50" stroke="#9ca3af" strokeWidth="2"/>
      <line x1="50" y1="20" x2="70" y2="20" stroke="#9ca3af" strokeWidth="2"/>
      <line x1="200" y1="20" x2="200" y2="50" stroke="#9ca3af" strokeWidth="2"/>
      <line x1="190" y1="20" x2="210" y2="20" stroke="#9ca3af" strokeWidth="2"/>
      <line x1="340" y1="20" x2="340" y2="50" stroke="#9ca3af" strokeWidth="2"/>
      <line x1="330" y1="20" x2="350" y2="20" stroke="#9ca3af" strokeWidth="2"/>

      {/* Labels */}
      <text x="200" y="15" textAnchor="middle" fill="#9ca3af" fontSize="8">SUPPORT HANGERS</text>
      <text x="200" y="46" textAnchor="middle" fill="#f59e0b" fontSize="9" fontWeight="bold">BUSWAY DUCT (NEC 368)</text>
      <text x="200" y="172" textAnchor="middle" fill="#6b7280" fontSize="8">Plug-In Busway with Tap-Off Boxes</text>

      {/* Amperage rating label */}
      <rect x="5" y="55" width="22" height="20" rx="2" fill="#f59e0b" fillOpacity="0.2" stroke="#f59e0b" strokeWidth="0.5"/>
      <text x="16" y="67" textAnchor="middle" fill="#f59e0b" fontSize="6" fontWeight="bold">800A</text>
    </svg>
  );
}

export default function BuswayBusDuctInstallationGuidePage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navigation />
      <div className="pt-20">
        <BreadcrumbJsonLd
          items={[
            { name: "Home", url: "https://amporalabs.com" },
            { name: "Blog", url: "https://amporalabs.com/blog" },
            { name: "Busway Bus Duct Installation", url: "https://amporalabs.com/blog/busway-busduct-installation-guide" },
          ]}
        />
        <BlogPostingJsonLd
          headline="Busway & Bus Duct Installation: NEC Requirements Guide"
          description="Complete guide to busway and bus duct installation per NEC Article 368 covering types, support, overcurrent protection, and tap connections."
          datePublished="2025-06-08"
          dateModified="2025-06-08"
          url="https://amporalabs.com/blog/busway-busduct-installation-guide"
          wordCount={3200}
          keywords={["busway", "bus duct", "NEC Article 368", "plug-in busway", "feeder busway", "tap connections"]}
        />

        <article className="max-w-4xl mx-auto px-6 py-12">
          {/* Breadcrumb */}
          <nav className="text-sm text-white/60 mb-8">
            <Link href="/" className="hover:text-white">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/blog" className="hover:text-white">Blog</Link>
            <span className="mx-2">/</span>
            <span className="text-white">Busway &amp; Bus Duct Installation</span>
          </nav>

          {/* Article Header */}
          <header className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <span className="px-3 py-1 bg-green-600/30 text-green-300 text-sm font-medium rounded-full">
                Installation
              </span>
              <span className="text-white/40 text-sm">13 min read</span>
              <span className="text-white/40 text-sm">June 8, 2025</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6 leading-tight">
              Busway &amp; Bus Duct Installation: NEC Requirements Guide
            </h1>
            <p className="text-xl text-white/70">
              Busway systems offer a flexible, high-capacity alternative to traditional conduit and cable for distributing large amounts of power. This guide covers NEC Article 368 requirements for feeder, plug-in, and trolley busway installations.
            </p>
          </header>

          <div className="mb-12 bg-gradient-to-br from-green-900/20 to-cyan-900/20 rounded-2xl p-6 border border-white/10">
            <HeroIllustration />
          </div>

          {/* Table of Contents */}
          <div className="bg-white/5 rounded-2xl p-6 mb-12">
            <h2 className="font-display font-bold mb-4">In This Guide</h2>
            <ul className="space-y-2 text-white/70">
              <li><a href="#nec-article-368" className="hover:text-purple-400">→ NEC Article 368 Overview</a></li>
              <li><a href="#busway-types" className="hover:text-purple-400">→ Busway Types: Feeder, Plug-In, and Trolley</a></li>
              <li><a href="#ratings-applications" className="hover:text-purple-400">→ Ratings and Applications</a></li>
              <li><a href="#permitted-uses" className="hover:text-purple-400">→ Permitted and Not Permitted Uses</a></li>
              <li><a href="#support-requirements" className="hover:text-purple-400">→ Support Requirements</a></li>
              <li><a href="#overcurrent-protection" className="hover:text-purple-400">→ Overcurrent Protection</a></li>
              <li><a href="#tap-connections" className="hover:text-purple-400">→ Tap Connections</a></li>
              <li><a href="#ventilation" className="hover:text-purple-400">→ Ventilation and Environmental Considerations</a></li>
              <li><a href="#indoor-vs-outdoor" className="hover:text-purple-400">→ Indoor vs Outdoor Use</a></li>
              <li><a href="#busway-vs-conduit" className="hover:text-purple-400">→ Advantages Over Conduit for Large Feeders</a></li>
              <li><a href="#sizing" className="hover:text-purple-400">→ Sizing Considerations</a></li>
              <li><a href="#common-mistakes" className="hover:text-purple-400">→ Common Installation Mistakes</a></li>
            </ul>
          </div>

          {/* Article Content */}
          <div className="prose prose-invert prose-lg max-w-none">

            <section id="nec-article-368" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">NEC Article 368 Overview</h2>
              <p className="text-white/80 mb-4">
                <strong>NEC Article 368</strong> governs the installation of busways, also known as bus ducts. A busway is a grounded metal enclosure containing factory-mounted bare or insulated conductors (bus bars), which are usually copper or aluminum. Busways are a recognized wiring method under the NEC and are widely used in commercial and industrial electrical distribution systems.
              </p>
              <p className="text-white/80 mb-4">
                Article 368 is organized into the following major parts:
              </p>
              <div className="grid md:grid-cols-2 gap-4 my-6">
                <div className="bg-white/5 rounded-xl p-4">
                  <p className="text-green-400 font-semibold">Part I: General</p>
                  <p className="text-white/60 text-sm mt-1">Scope, definitions, and other articles that apply alongside Article 368.</p>
                </div>
                <div className="bg-white/5 rounded-xl p-4">
                  <p className="text-green-400 font-semibold">Part II: Installation</p>
                  <p className="text-white/60 text-sm mt-1">Permitted and not-permitted uses, support intervals, overcurrent protection, and marking requirements.</p>
                </div>
                <div className="bg-white/5 rounded-xl p-4">
                  <p className="text-green-400 font-semibold">Part III: Construction</p>
                  <p className="text-white/60 text-sm mt-1">Construction specifications, joints, and dead ends. These requirements mostly apply to manufacturers.</p>
                </div>
                <div className="bg-white/5 rounded-xl p-4">
                  <p className="text-green-400 font-semibold">Part IV: Reserved</p>
                  <p className="text-white/60 text-sm mt-1">Reserved for future NEC code cycle additions.</p>
                </div>
              </div>
              <p className="text-white/80">
                Before installing any busway system, the installer must verify the busway is listed and marked with the manufacturer&apos;s name, voltage, current rating, and frequency. Per Section 368.6, busway must be listed unless it is field-assembled and inspected under engineering supervision per 368.56.
              </p>
            </section>

            <section id="busway-types" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Busway Types: Feeder, Plug-In, and Trolley</h2>
              <p className="text-white/80 mb-4">
                The three primary types of busway serve different purposes in an electrical distribution system. Understanding the distinctions is critical for proper specification and installation.
              </p>

              <div className="space-y-6 my-6">
                <div className="bg-green-900/20 border border-green-500/30 rounded-xl p-6">
                  <h3 className="font-semibold text-green-400 mb-3">Feeder Busway</h3>
                  <p className="text-white/70 mb-3">
                    Feeder busway is designed for point-to-point power transmission without intermediate tap-off points. It carries large amounts of current from the main switchboard to distribution panels or large equipment, functioning similarly to a large feeder cable run.
                  </p>
                  <ul className="list-disc list-inside text-white/60 space-y-1 text-sm">
                    <li>No plug-in openings along its length</li>
                    <li>Available in ratings from 600A to 6000A and beyond</li>
                    <li>Used for main feeder runs from service equipment to distribution points</li>
                    <li>Compact design with sandwich bus bar construction for lower impedance</li>
                    <li>Higher short-circuit withstand ratings than plug-in designs</li>
                  </ul>
                </div>

                <div className="bg-blue-900/20 border border-blue-500/30 rounded-xl p-6">
                  <h3 className="font-semibold text-blue-400 mb-3">Plug-In Busway</h3>
                  <p className="text-white/70 mb-3">
                    Plug-in busway is the most commonly encountered type in commercial and industrial facilities. It features regularly spaced plug-in openings along its length where tap-off boxes (also called bus plugs) can be installed to provide power take-offs for individual circuits or equipment.
                  </p>
                  <ul className="list-disc list-inside text-white/60 space-y-1 text-sm">
                    <li>Plug-in openings typically on 12-inch or 24-inch centers</li>
                    <li>Available in ratings from 100A to 5000A</li>
                    <li>Bus plugs contain fusible switches or circuit breakers for branch protection</li>
                    <li>Highly flexible: tap-off points can be added, moved, or removed without shutting down the entire busway</li>
                    <li>Common in manufacturing plants, data centers, and large commercial buildings</li>
                  </ul>
                </div>

                <div className="bg-purple-900/20 border border-purple-500/30 rounded-xl p-6">
                  <h3 className="font-semibold text-purple-400 mb-3">Trolley Busway</h3>
                  <p className="text-white/70 mb-3">
                    Trolley busway is a specialized type designed for moving electrical connections. It contains exposed or partially exposed conductors within a protective housing that allows trolley-mounted contacts to travel along the busway&apos;s length while maintaining electrical connection.
                  </p>
                  <ul className="list-disc list-inside text-white/60 space-y-1 text-sm">
                    <li>Used for overhead cranes, hoists, monorails, and moving machinery</li>
                    <li>Trolley contacts slide along the bus bars inside the enclosure</li>
                    <li>Available in lighter-duty ratings, typically up to 800A</li>
                    <li>Special NEC provisions apply under Section 368.258</li>
                    <li>Must not be installed where combustible dust or flammable vapors are present</li>
                  </ul>
                </div>
              </div>
            </section>

            <section id="ratings-applications" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Ratings and Applications</h2>
              <p className="text-white/80 mb-4">
                Busway systems are rated for voltage, continuous current, and short-circuit withstand. Understanding these ratings is essential for proper specification.
              </p>

              <div className="overflow-x-auto my-6">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-white/20">
                      <th className="text-left py-3 px-4 text-white/60">Rating Parameter</th>
                      <th className="text-left py-3 px-4 text-white/60">Typical Range</th>
                      <th className="text-left py-3 px-4 text-white/60">Notes</th>
                    </tr>
                  </thead>
                  <tbody className="text-white/80">
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">Voltage</td>
                      <td className="py-3 px-4 font-mono">600V or less</td>
                      <td className="py-3 px-4">Standard for most commercial/industrial busway</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">Medium Voltage</td>
                      <td className="py-3 px-4 font-mono">5kV - 38kV</td>
                      <td className="py-3 px-4">Isolated-phase bus for utility and heavy industrial</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">Continuous Current</td>
                      <td className="py-3 px-4 font-mono">100A - 6000A+</td>
                      <td className="py-3 px-4">Copper or aluminum bus bars</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">Short-Circuit Rating</td>
                      <td className="py-3 px-4 font-mono">10kA - 200kA+</td>
                      <td className="py-3 px-4">Must exceed available fault current at installation point</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4">Frequency</td>
                      <td className="py-3 px-4 font-mono">60 Hz</td>
                      <td className="py-3 px-4">Standard in North America; 50 Hz versions available</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="bg-orange-900/30 rounded-xl p-6 my-6">
                <h3 className="font-semibold text-orange-400 mb-2">Critical: Short-Circuit Withstand Ratings</h3>
                <p className="text-white/70">
                  Per NEC 368.17(C), busway must have a short-circuit current rating not less than the available fault current at the point of installation. This is marked on the busway by the manufacturer. Failure to verify this can result in catastrophic equipment failure during a fault event. Always coordinate with the electrical engineer&apos;s short-circuit study.
                </p>
              </div>

              <p className="text-white/80 mb-4">
                Common applications for busway include:
              </p>
              <ul className="list-disc list-inside text-white/70 space-y-2 mb-4">
                <li><strong>High-rise buildings</strong> - Vertical risers from main switchgear to floor distribution</li>
                <li><strong>Manufacturing facilities</strong> - Overhead plug-in busway for machine power</li>
                <li><strong>Data centers</strong> - Overhead busway feeding rows of server racks via tap boxes</li>
                <li><strong>Hospitals</strong> - Distribution from main switchboard to floor panels</li>
                <li><strong>Retail and commercial</strong> - Lighting busway for track-style lighting systems</li>
                <li><strong>Industrial plants</strong> - Feeder busway replacing large parallel conduit runs</li>
              </ul>
            </section>

            <section id="permitted-uses" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Permitted and Not Permitted Uses</h2>
              <p className="text-white/80 mb-4">
                NEC Article 368 Part II clearly defines where busway can and cannot be installed. These rules are strictly enforced and must be followed.
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-3 text-green-400">Permitted Uses (368.10)</h3>
              <ul className="list-disc list-inside text-white/70 space-y-2 mb-6">
                <li>Installed where accessible (behind removable panels or above accessible ceilings)</li>
                <li>Behind access panels per 368.10(A) if certain conditions are met</li>
                <li>Through dry walls or floors with proper fire-stopping where required</li>
                <li>Installed in the open, exposed, and visible</li>
                <li>Used as feeders or branch circuits (with appropriate ratings)</li>
              </ul>

              <h3 className="text-xl font-semibold mt-6 mb-3 text-red-400">Not Permitted Uses (368.12)</h3>
              <div className="space-y-3 my-4">
                <div className="bg-red-900/20 border border-red-500/30 rounded-xl p-4">
                  <p className="text-white/70"><strong>368.12(1):</strong> Where subject to severe physical damage or corrosive vapors</p>
                </div>
                <div className="bg-red-900/20 border border-red-500/30 rounded-xl p-4">
                  <p className="text-white/70"><strong>368.12(2):</strong> In hoistways (elevator shafts)</p>
                </div>
                <div className="bg-red-900/20 border border-red-500/30 rounded-xl p-4">
                  <p className="text-white/70"><strong>368.12(3):</strong> In any hazardous (classified) location, unless specifically approved for such use</p>
                </div>
                <div className="bg-red-900/20 border border-red-500/30 rounded-xl p-4">
                  <p className="text-white/70"><strong>368.12(4):</strong> Outdoors or in wet or damp locations, unless identified for such use</p>
                </div>
              </div>

              <div className="bg-cyan-900/30 rounded-xl p-6 my-6">
                <h3 className="font-semibold text-cyan-400 mb-2">Key Distinction: Accessible vs. Concealed</h3>
                <p className="text-white/70">
                  Busway must generally remain accessible for inspection and maintenance. Per 368.10, busway can be installed behind access panels only if the bus joints and plug-in devices are accessible for maintenance. A busway run completely concealed within a finished wall with no access is a code violation. Dropped ceilings with removable tiles are acceptable because they provide accessibility.
                </p>
              </div>
            </section>

            <section id="support-requirements" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Support Requirements</h2>
              <p className="text-white/80 mb-4">
                Proper support is critical for busway longevity and safety. NEC Section 368.30 addresses support requirements, and manufacturer installation instructions provide specific support intervals and methods.
              </p>

              <div className="grid md:grid-cols-2 gap-4 my-6">
                <div className="bg-white/5 rounded-xl p-6 text-center">
                  <div className="text-4xl font-mono font-bold text-green-400 mb-2">5 ft</div>
                  <p className="text-white/70">Maximum support interval for horizontal busway (unless otherwise listed)</p>
                </div>
                <div className="bg-white/5 rounded-xl p-6 text-center">
                  <div className="text-4xl font-mono font-bold text-blue-400 mb-2">16 ft</div>
                  <p className="text-white/70">Maximum support interval for vertical busway (typical, per manufacturer)</p>
                </div>
              </div>

              <p className="text-white/80 mb-4">
                General support rules under NEC 368.30:
              </p>
              <ul className="list-disc list-inside text-white/70 space-y-2 mb-4">
                <li><strong>368.30(A):</strong> Busway must be securely supported at intervals not exceeding 5 feet unless otherwise listed and marked for different support spacing</li>
                <li><strong>Horizontal runs:</strong> Supports must prevent sagging and maintain alignment. Use spring hangers, trapeze hangers, or wall brackets as specified by the manufacturer</li>
                <li><strong>Vertical runs:</strong> Support at each floor level or at intervals specified by the manufacturer. Spring-loaded supports may be required to accommodate thermal expansion</li>
                <li><strong>Expansion joints:</strong> Required on long horizontal runs to accommodate thermal expansion and contraction. Typically one expansion fitting per 100-150 feet of straight run</li>
                <li><strong>Seismic bracing:</strong> In seismic zones, additional lateral bracing per the applicable building code (IBC/ASCE 7) is required</li>
              </ul>

              <div className="bg-orange-900/30 rounded-xl p-6 my-6">
                <h3 className="font-semibold text-orange-400 mb-2">Thermal Expansion</h3>
                <p className="text-white/70">
                  Busway expands and contracts with temperature changes. Copper busway expands approximately 1 inch per 100 feet for a 50 degree F temperature rise. Aluminum busway expands about 40% more than copper. Failure to install expansion fittings on long runs will cause joint damage, bus bar misalignment, and possible ground faults.
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
                  <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/></svg><svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor" aria-hidden="true"><path d="M3 20.5V3.5c0-.59.34-1.11.84-1.35L13.69 12 3.84 21.85c-.5-.25-.84-.76-.84-1.35zm13.81-5.38L6.05 21.34l8.49-8.49 2.27 2.27zm3.35-4.31c.34.27.59.69.59 1.19 0 .5-.22.9-.57 1.18l-2.29 1.32L15.39 12l2.5-2.5 2.27 1.31zM6.05 2.66L16.81 8.88l-2.27 2.27L6.05 2.66z"/></svg>
                  Download Free
                </a>
              </div>
            </div>

            <section id="overcurrent-protection" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Overcurrent Protection</h2>
              <p className="text-white/80 mb-4">
                NEC Section 368.17 covers overcurrent protection requirements for busway installations. Proper protection prevents bus bar damage during overload and fault conditions.
              </p>

              <div className="space-y-4 my-6">
                <div className="bg-white/5 rounded-xl p-4">
                  <p className="text-green-400 font-semibold">368.17(A): Rating of Overcurrent Protection</p>
                  <p className="text-white/60 text-sm mt-1">Overcurrent protection shall be provided at the point where the busway receives its supply, in accordance with the busway&apos;s continuous current rating. This means the feeder breaker or fuse at the source must not exceed the busway&apos;s ampere rating.</p>
                </div>
                <div className="bg-white/5 rounded-xl p-4">
                  <p className="text-green-400 font-semibold">368.17(B): Reduction in Size</p>
                  <p className="text-white/60 text-sm mt-1">Where a busway is reduced in ampacity, overcurrent protection must be provided at the point of reduction. For example, transitioning from an 800A busway to a 400A busway requires overcurrent protection rated at 400A or less at the transition point.</p>
                </div>
                <div className="bg-white/5 rounded-xl p-4">
                  <p className="text-green-400 font-semibold">368.17(C): Short-Circuit Current Rating</p>
                  <p className="text-white/60 text-sm mt-1">Busway must have a marked short-circuit current rating not less than the available fault current. The overcurrent protective devices upstream must be capable of interrupting the maximum available fault current.</p>
                </div>
              </div>

              <div className="bg-red-900/20 border border-red-500/30 rounded-xl p-6 my-6">
                <h3 className="font-semibold text-red-400 mb-2">Exception: Feeder Taps</h3>
                <p className="text-white/70">
                  NEC 240.21(B) permits feeder taps from busway without overcurrent protection at the tap point under specific conditions. The most common is the 10-foot tap rule: the tap conductors must be not longer than 10 feet, enclosed in a raceway, have ampacity not less than the combined computed loads, and terminate in a single circuit breaker or set of fuses with a rating not exceeding the tap conductor ampacity.
                </p>
              </div>
            </section>

            <section id="tap-connections" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Tap Connections</h2>
              <p className="text-white/80 mb-4">
                One of the primary advantages of plug-in busway is the ability to make tap connections at any plug-in opening. NEC 368.56 provides specific rules for tap connections.
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-3">Bus Plugs (Tap-Off Boxes)</h3>
              <p className="text-white/80 mb-4">
                Bus plugs are the devices that connect to the plug-in openings. They are available in several configurations:
              </p>
              <div className="grid md:grid-cols-2 gap-4 my-6">
                <div className="bg-white/5 rounded-xl p-4">
                  <h4 className="font-semibold text-cyan-400 mb-2">Fusible Switch Bus Plugs</h4>
                  <p className="text-white/60 text-sm">Contain a fused disconnect switch. Available from 30A to 800A. Allow fuse-based overcurrent protection at each tap point.</p>
                </div>
                <div className="bg-white/5 rounded-xl p-4">
                  <h4 className="font-semibold text-cyan-400 mb-2">Circuit Breaker Bus Plugs</h4>
                  <p className="text-white/60 text-sm">Contain a molded-case circuit breaker. Available from 15A to 1200A. More convenient for resetting after trips.</p>
                </div>
                <div className="bg-white/5 rounded-xl p-4">
                  <h4 className="font-semibold text-cyan-400 mb-2">Blank/Splice Bus Plugs</h4>
                  <p className="text-white/60 text-sm">Cover unused plug-in openings. Must be used to maintain the busway enclosure integrity and IP rating.</p>
                </div>
                <div className="bg-white/5 rounded-xl p-4">
                  <h4 className="font-semibold text-cyan-400 mb-2">Ground Fault Bus Plugs</h4>
                  <p className="text-white/60 text-sm">Incorporate ground-fault protection. Required where NEC mandates GFCI or GFP protection for the specific application.</p>
                </div>
              </div>

              <h3 className="text-xl font-semibold mt-6 mb-3">Tap Connection Rules</h3>
              <ul className="list-disc list-inside text-white/70 space-y-2 mb-4">
                <li><strong>Sub-feed taps:</strong> Where a tap feeds a sub-panel, NEC 240.21(B) tap rules apply. Conductors from the bus plug to the sub-panel must be properly sized and protected</li>
                <li><strong>Motor taps:</strong> Taps for individual motor branch circuits must follow NEC Article 430 requirements for motor circuit protection</li>
                <li><strong>Tap conductor length:</strong> The 10-foot tap rule (240.21(B)(1)) or 25-foot tap rule (240.21(B)(2)) governs the maximum length of unprotected tap conductors</li>
                <li><strong>Plug-in connections:</strong> Bus plugs must be listed for the busway they connect to. Mixing manufacturers is not permitted unless the plug is specifically listed for cross-compatibility</li>
              </ul>

              <div className="bg-cyan-900/30 rounded-xl p-6 my-6">
                <h3 className="font-semibold text-cyan-400 mb-2">Installation Tip: Hot-Swappable Bus Plugs</h3>
                <p className="text-white/70">
                  Many modern plug-in busway systems are designed to allow bus plug installation and removal under load (hot-swappable). However, this capability varies by manufacturer and rating. Always verify the busway system is rated for under-load plug insertion before performing this operation, and always follow proper PPE and arc flash safety procedures per NFPA 70E.
                </p>
              </div>
            </section>

            <section id="ventilation" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Ventilation and Environmental Considerations</h2>
              <p className="text-white/80 mb-4">
                Busway generates heat during normal operation due to resistance in the bus bars and connections. Proper ventilation is necessary to maintain rated ampacity and prevent overheating.
              </p>

              <ul className="list-disc list-inside text-white/70 space-y-2 mb-4">
                <li><strong>Ventilated busway:</strong> Has openings in the housing for natural air circulation. Provides the highest continuous ampacity rating but cannot be used where dripping liquids, combustible dust, or foreign objects could enter</li>
                <li><strong>Non-ventilated (totally enclosed) busway:</strong> Sealed housing with no ventilation openings. Required in areas where contamination is a concern. Has a lower ampacity rating compared to ventilated designs of the same size</li>
                <li><strong>Clearance from combustibles:</strong> Per 368.12(1), busway must not be installed where subject to corrosive vapors. Additionally, maintain adequate clearances from combustible materials, especially with ventilated busway where hot air exhausts from the enclosure</li>
                <li><strong>Ambient temperature derating:</strong> Busway ampacity is typically rated at 40 degrees C ambient. If installed in higher ambient temperatures, the manufacturer&apos;s derating tables must be applied to reduce the continuous current rating</li>
              </ul>

              <div className="bg-purple-900/30 rounded-xl p-6 my-6">
                <h3 className="font-semibold text-purple-400 mb-2">Vertical Busway Ventilation</h3>
                <p className="text-white/70">
                  Vertical busway runs create a chimney effect that naturally draws air upward through ventilated sections. This actually enhances cooling in vertical installations. However, fire stops must be installed where busway passes through floor penetrations to prevent fire spread between floors, per NEC 368.10(C). These fire stops must be listed and maintain the fire rating of the floor assembly.
                </p>
              </div>
            </section>

            <section id="indoor-vs-outdoor" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Indoor vs Outdoor Use</h2>
              <p className="text-white/80 mb-4">
                Standard busway is designed for indoor, dry locations. However, outdoor-rated busway is available for specific applications.
              </p>

              <div className="grid md:grid-cols-2 gap-4 my-6">
                <div className="bg-green-900/20 border border-green-500/30 rounded-xl p-6">
                  <h3 className="font-semibold text-green-400 mb-2">Indoor Installation</h3>
                  <ul className="text-white/60 text-sm space-y-2">
                    <li>Standard ventilated or non-ventilated busway</li>
                    <li>Must be in dry locations unless rated otherwise</li>
                    <li>Protected from physical damage per 368.12(1)</li>
                    <li>Accessible for maintenance and inspection</li>
                    <li>Fire stops required at floor penetrations</li>
                  </ul>
                </div>
                <div className="bg-blue-900/20 border border-blue-500/30 rounded-xl p-6">
                  <h3 className="font-semibold text-blue-400 mb-2">Outdoor Installation</h3>
                  <ul className="text-white/60 text-sm space-y-2">
                    <li>Must be identified (listed and marked) for outdoor use per 368.12(4)</li>
                    <li>Requires weatherproof enclosure rated for the environment</li>
                    <li>NEMA 3R or NEMA 4 rated housing typically required</li>
                    <li>Non-ventilated design to prevent water and debris ingress</li>
                    <li>Corrosion-resistant materials or coatings required</li>
                  </ul>
                </div>
              </div>

              <p className="text-white/80">
                Per NEC 368.12(4), busway shall not be installed outdoors or in wet or damp locations unless identified for such use. Installing standard indoor busway outdoors, even under a roof overhang, is a code violation if the busway is not specifically rated for the exposure.
              </p>
            </section>

            <section id="busway-vs-conduit" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Advantages Over Conduit for Large Feeders</h2>
              <p className="text-white/80 mb-4">
                For high-ampacity feeder runs (typically 800A and above), busway offers significant advantages over traditional conduit and wire installations. Understanding these trade-offs helps with system selection.
              </p>

              <div className="overflow-x-auto my-6">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-white/20">
                      <th className="text-left py-3 px-4 text-white/60">Factor</th>
                      <th className="text-left py-3 px-4 text-white/60">Busway</th>
                      <th className="text-left py-3 px-4 text-white/60">Conduit &amp; Wire</th>
                    </tr>
                  </thead>
                  <tbody className="text-white/80">
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-semibold">Installation Speed</td>
                      <td className="py-3 px-4 text-green-400">Much faster - bolt sections together</td>
                      <td className="py-3 px-4 text-orange-400">Slower - bend conduit, pull wire</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-semibold">Labor Cost</td>
                      <td className="py-3 px-4 text-green-400">Lower for large feeders</td>
                      <td className="py-3 px-4 text-orange-400">Higher due to pulling and termination</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-semibold">Material Cost</td>
                      <td className="py-3 px-4 text-orange-400">Higher initial cost per foot</td>
                      <td className="py-3 px-4 text-green-400">Lower material cost for small runs</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-semibold">Flexibility</td>
                      <td className="py-3 px-4 text-green-400">Tap-offs easily added/relocated</td>
                      <td className="py-3 px-4 text-orange-400">Modifications require new pulls</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-semibold">Space Required</td>
                      <td className="py-3 px-4 text-green-400">Compact footprint</td>
                      <td className="py-3 px-4 text-orange-400">Multiple parallel conduits need more space</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-semibold">Voltage Drop</td>
                      <td className="py-3 px-4 text-green-400">Lower due to larger conductor cross-section</td>
                      <td className="py-3 px-4 text-orange-400">Higher, especially with parallel runs</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-semibold">Maintenance</td>
                      <td className="py-3 px-4 text-green-400">Easy visual inspection and joint tightening</td>
                      <td className="py-3 px-4 text-orange-400">Difficult to inspect conductors in conduit</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="text-white/80">
                The break-even point where busway becomes more economical than conduit and wire is typically around 800A to 1000A for runs of 50 feet or more. Below 600A, conduit and wire is generally more cost-effective unless the flexibility of plug-in busway is specifically needed for the application.
              </p>
            </section>

            <section id="sizing" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Sizing Considerations</h2>
              <p className="text-white/80 mb-4">
                Properly sizing busway involves more than simply matching the busway rating to the load current. Several factors must be considered.
              </p>

              <div className="space-y-4 my-6">
                <div className="bg-white/5 rounded-xl p-4">
                  <p className="text-green-400 font-semibold">Step 1: Calculate the Total Connected Load</p>
                  <p className="text-white/60 text-sm mt-1">Sum all loads that the busway will serve, applying demand factors per NEC Article 220 where applicable. Include future load growth projections, typically 20-25% spare capacity.</p>
                </div>
                <div className="bg-white/5 rounded-xl p-4">
                  <p className="text-green-400 font-semibold">Step 2: Apply Ambient Temperature Derating</p>
                  <p className="text-white/60 text-sm mt-1">If ambient temperature exceeds 40 degrees C (104 degrees F), apply the manufacturer&apos;s derating factors. Busway installed near ceilings in unconditioned spaces may see significantly elevated temperatures.</p>
                </div>
                <div className="bg-white/5 rounded-xl p-4">
                  <p className="text-green-400 font-semibold">Step 3: Account for Altitude</p>
                  <p className="text-white/60 text-sm mt-1">At elevations above 3300 feet (1000 meters), air density decreases and cooling efficiency drops. Manufacturers provide altitude derating factors, typically reducing ampacity by 1% for every 330 feet above 3300 feet.</p>
                </div>
                <div className="bg-white/5 rounded-xl p-4">
                  <p className="text-green-400 font-semibold">Step 4: Verify Voltage Drop</p>
                  <p className="text-white/60 text-sm mt-1">Calculate voltage drop using the busway manufacturer&apos;s impedance data (resistance and reactance per foot). NEC recommends total voltage drop not exceed 5% from service entrance to the farthest outlet, with not more than 3% on feeders.</p>
                </div>
                <div className="bg-white/5 rounded-xl p-4">
                  <p className="text-green-400 font-semibold">Step 5: Verify Short-Circuit Withstand</p>
                  <p className="text-white/60 text-sm mt-1">The selected busway must have a short-circuit rating at least equal to the available fault current at its supply point. Coordinate with the project&apos;s short-circuit and coordination study.</p>
                </div>
                <div className="bg-white/5 rounded-xl p-4">
                  <p className="text-green-400 font-semibold">Step 6: Select Bus Bar Material</p>
                  <p className="text-white/60 text-sm mt-1">Copper bus bars offer lower resistance and smaller physical size but cost more. Aluminum bus bars are lighter and less expensive but require larger cross-sections for equivalent ampacity. Most systems above 1600A use copper.</p>
                </div>
              </div>

              <div className="bg-green-900/20 border border-green-500/30 rounded-xl p-6 my-6">
                <h3 className="font-semibold text-green-400 mb-2">Worked Example: Busway Sizing</h3>
                <p className="text-white/70 mb-2">
                  A manufacturing facility requires a busway to serve a total calculated demand load of 650A at 480V, 3-phase. The ambient temperature is 45 degrees C, and the installation is at sea level.
                </p>
                <p className="text-white/70 mb-2">
                  <strong>Step 1:</strong> Demand load = 650A. With 25% spare capacity: 650 x 1.25 = 812.5A.
                </p>
                <p className="text-white/70 mb-2">
                  <strong>Step 2:</strong> At 45 degrees C, manufacturer&apos;s derating factor for this busway = 0.90. Required rating: 812.5 / 0.90 = 903A.
                </p>
                <p className="text-white/70 mb-2">
                  <strong>Selection:</strong> Choose a 1000A rated plug-in busway. This provides adequate capacity for the derated load and future growth.
                </p>
              </div>
            </section>

            <section id="common-mistakes" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Common Installation Mistakes</h2>
              <p className="text-white/80 mb-4">
                Avoid these frequently encountered errors when installing busway systems:
              </p>
              <div className="space-y-4 my-6">
                <div className="bg-red-900/20 border border-red-500/30 rounded-xl p-6">
                  <h3 className="font-semibold text-red-400 mb-2">Inadequate Support Spacing</h3>
                  <p className="text-white/60 text-sm">Supporting busway at intervals greater than 5 feet (or the listed interval) causes sagging, misalignment of joints, and potential ground faults. Always follow manufacturer support specifications exactly.</p>
                </div>
                <div className="bg-red-900/20 border border-red-500/30 rounded-xl p-6">
                  <h3 className="font-semibold text-red-400 mb-2">Missing Expansion Joints on Long Runs</h3>
                  <p className="text-white/60 text-sm">Long busway runs without expansion joints will develop joint separation or buckling as temperatures change. This leads to arcing at joints, increased resistance, and eventual failure.</p>
                </div>
                <div className="bg-red-900/20 border border-red-500/30 rounded-xl p-6">
                  <h3 className="font-semibold text-red-400 mb-2">Improper Joint Torque</h3>
                  <p className="text-white/60 text-sm">Bus bar splice joints must be torqued to manufacturer specifications. Under-torqued joints create high-resistance connections that overheat. Over-torqued joints can damage bus bar plating and thread integrity. Always use a calibrated torque wrench.</p>
                </div>
                <div className="bg-red-900/20 border border-red-500/30 rounded-xl p-6">
                  <h3 className="font-semibold text-red-400 mb-2">Ignoring Short-Circuit Ratings</h3>
                  <p className="text-white/60 text-sm">Installing busway with a short-circuit rating below the available fault current is a serious safety hazard. During a fault, the busway could be destroyed, potentially causing an arc flash or fire. Always verify the available fault current at the point of supply.</p>
                </div>
                <div className="bg-red-900/20 border border-red-500/30 rounded-xl p-6">
                  <h3 className="font-semibold text-red-400 mb-2">Missing Fire Stops at Floor Penetrations</h3>
                  <p className="text-white/60 text-sm">Vertical busway runs through floors must include listed fire stop materials to maintain the fire rating of the floor/ceiling assembly. This is often overlooked on retrofit installations.</p>
                </div>
                <div className="bg-red-900/20 border border-red-500/30 rounded-xl p-6">
                  <h3 className="font-semibold text-red-400 mb-2">Using Indoor Busway in Damp or Wet Locations</h3>
                  <p className="text-white/60 text-sm">Standard busway is for dry, indoor locations only. Installing it in parking garages, loading docks, or outdoor areas without a proper outdoor rating violates NEC 368.12(4) and will lead to corrosion and insulation failure.</p>
                </div>
                <div className="bg-red-900/20 border border-red-500/30 rounded-xl p-6">
                  <h3 className="font-semibold text-red-400 mb-2">Mixing Manufacturer Components</h3>
                  <p className="text-white/60 text-sm">Bus plugs, fittings, and sections from different manufacturers are not interchangeable unless specifically listed for cross-compatibility. Mismatched components can result in poor contact, overheating, and loss of listing.</p>
                </div>
                <div className="bg-red-900/20 border border-red-500/30 rounded-xl p-6">
                  <h3 className="font-semibold text-red-400 mb-2">No Overcurrent Protection at Busway Reduction</h3>
                  <p className="text-white/60 text-sm">When transitioning from a larger busway to a smaller one, overcurrent protection must be provided at the reduction point per NEC 368.17(B). Omitting this protection leaves the smaller busway vulnerable to overload damage.</p>
                </div>
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
                <Link href="/blog/electrical-fault-current-calculations" className="bg-white/5 hover:bg-white/10 rounded-xl p-6 transition-colors">
                  <span className="text-cyan-400 text-sm">Calculations</span>
                  <h3 className="font-semibold mt-2">Electrical Fault Current Calculations</h3>
                </Link>
                <Link href="/blog/nec-article-240-overcurrent-protection" className="bg-white/5 hover:bg-white/10 rounded-xl p-6 transition-colors">
                  <span className="text-purple-400 text-sm">NEC Code</span>
                  <h3 className="font-semibold mt-2">NEC Article 240: Overcurrent Protection</h3>
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
