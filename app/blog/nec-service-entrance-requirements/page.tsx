import { Metadata } from "next";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import { BreadcrumbJsonLd, BlogPostingJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "NEC Service Entrance Requirements: Complete Installation Guide",
  description: "Learn NEC service entrance requirements including service drop clearances, meter base installation, service panel sizing, grounding electrode systems, and disconnecting means per Articles 230 and 250.",
  keywords: [
    "NEC service entrance",
    "service entrance requirements",
    "NEC Article 230",
    "service drop clearance",
    "meter base installation",
    "service panel requirements",
    "main disconnect",
    "service entrance conductor",
    "200 amp service",
    "electrical service upgrade",
    "service mast requirements",
    "weatherhead installation",
    "service entrance grounding",
    "residential service entrance",
    "commercial service entrance"
  ],
  alternates: {
    canonical: "https://amporalabs.com/blog/nec-service-entrance-requirements",
  },
  openGraph: {
    title: "NEC Service Entrance Requirements: Installation Guide - Ampora",
    description: "Complete guide to NEC service entrance requirements including clearances, sizing, and grounding.",
    url: "https://amporalabs.com/blog/nec-service-entrance-requirements",
    type: "article",
  },
};

function HeroIllustration() {
  return (
    <svg viewBox="0 0 400 200" className="w-full h-48 md:h-56" aria-label="Service entrance diagram showing components">
      {/* Utility pole */}
      <g transform="translate(30, 20)">
        <rect x="5" y="0" width="10" height="150" fill="#8b6914"/>
        <line x1="0" y1="20" x2="40" y2="20" stroke="#374151" strokeWidth="3"/>
        <line x1="0" y1="30" x2="40" y2="30" stroke="#374151" strokeWidth="3"/>
        <line x1="0" y1="40" x2="40" y2="40" stroke="#374151" strokeWidth="3"/>
        <text x="10" y="175" textAnchor="middle" fill="#9ca3af" fontSize="7">Utility</text>
      </g>

      {/* Service drop lines */}
      <path d="M 70 25 Q 120 10, 170 50" stroke="#ef4444" strokeWidth="3" fill="none"/>
      <path d="M 70 35 Q 120 20, 170 60" stroke="#111111" strokeWidth="3" fill="none"/>
      <path d="M 70 45 Q 120 30, 170 70" stroke="#ef4444" strokeWidth="3" fill="none"/>

      {/* Weatherhead */}
      <g transform="translate(160, 35)">
        <path d="M 0 20 L 10 0 L 20 20 Z" fill="#374151" stroke="#6b7280" strokeWidth="2"/>
        <rect x="5" y="20" width="10" height="30" fill="#374151" stroke="#6b7280" strokeWidth="2"/>
      </g>

      {/* Service mast */}
      <rect x="165" y="65" width="10" height="60" fill="#6b7280" stroke="#9ca3af" strokeWidth="1"/>

      {/* Meter base */}
      <g transform="translate(145, 125)">
        <rect x="0" y="0" width="50" height="50" rx="4" fill="#1f2937" stroke="#22c55e" strokeWidth="2"/>
        <circle cx="25" cy="25" r="15" fill="#111827" stroke="#22c55e"/>
        <text x="25" y="28" textAnchor="middle" fill="#22c55e" fontSize="8">kWh</text>
        <text x="25" y="60" textAnchor="middle" fill="#9ca3af" fontSize="7">Meter</text>
      </g>

      {/* Service panel */}
      <g transform="translate(220, 95)">
        <rect x="0" y="0" width="80" height="90" rx="4" fill="#1f2937" stroke="#8b5cf6" strokeWidth="2"/>
        <rect x="10" y="15" width="60" height="65" fill="#111827"/>
        {/* Main breaker */}
        <rect x="20" y="22" width="40" height="15" rx="2" fill="#8b5cf6"/>
        <text x="40" y="33" textAnchor="middle" fill="#fff" fontSize="6">200A MAIN</text>
        {/* Branch breakers */}
        {[0, 1, 2].map((i) => (
          <g key={i}>
            <rect x="20" y={45 + i * 12} width="15" height="8" rx="1" fill="#374151"/>
            <rect x="45" y={45 + i * 12} width="15" height="8" rx="1" fill="#374151"/>
          </g>
        ))}
        <text x="40" y="100" textAnchor="middle" fill="#9ca3af" fontSize="7">Panel</text>
      </g>

      {/* Connection to meter */}
      <line x1="170" y1="125" x2="170" y2="150" stroke="#ef4444" strokeWidth="3"/>
      <line x1="195" y1="150" x2="220" y2="140" stroke="#ef4444" strokeWidth="3"/>

      {/* Ground rod */}
      <g transform="translate(320, 130)">
        <rect x="5" y="0" width="6" height="50" fill="#b87333"/>
        <line x1="8" y1="0" x2="260" y2="110" stroke="#22c55e" strokeWidth="2" strokeDasharray="4"/>
        <text x="8" y="60" textAnchor="middle" fill="#9ca3af" fontSize="7">Ground</text>
        <text x="8" y="70" textAnchor="middle" fill="#9ca3af" fontSize="7">Rod</text>
      </g>

      {/* Clearance indicator */}
      <g transform="translate(100, 100)">
        <line x1="0" y1="0" x2="0" y2="70" stroke="#f59e0b" strokeWidth="1" strokeDasharray="3"/>
        <text x="5" y="35" fill="#f59e0b" fontSize="7">10' min</text>
      </g>
    </svg>
  );
}

export default function ServiceEntranceGuidePage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navigation />
      <div className="pt-20">
        <BreadcrumbJsonLd
          items={[
            { name: "Home", url: "https://amporalabs.com" },
            { name: "Blog", url: "https://amporalabs.com/blog" },
            { name: "Service Entrance Guide", url: "https://amporalabs.com/blog/nec-service-entrance-requirements" },
          ]}
        />
        <BlogPostingJsonLd
          headline="NEC Service Entrance Requirements: Complete Installation Guide"
          description="Learn NEC service entrance requirements including clearances, panel sizing, and grounding electrode systems."
          datePublished="2025-01-30"
          dateModified="2025-01-30"
          url="https://amporalabs.com/blog/nec-service-entrance-requirements"
          wordCount={2600}
          keywords={["NEC service entrance", "Article 230", "service drop", "main disconnect", "service grounding"]}
        />

        <article className="max-w-4xl mx-auto px-6 py-12">
          {/* Breadcrumb */}
          <nav className="text-sm text-white/60 mb-8">
            <Link href="/" className="hover:text-white">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/blog" className="hover:text-white">Blog</Link>
            <span className="mx-2">/</span>
            <span className="text-white">Service Entrance Guide</span>
          </nav>

          {/* Article Header */}
          <header className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <span className="px-3 py-1 bg-purple-600/30 text-purple-300 text-sm font-medium rounded-full">
                NEC Code
              </span>
              <span className="text-white/40 text-sm">13 min read</span>
              <span className="text-white/40 text-sm">January 30, 2025</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6 leading-tight">
              NEC Service Entrance Requirements: Complete Installation Guide
            </h1>
            <p className="text-xl text-white/70">
              Service entrance work requires coordination with the utility and strict code compliance. Here's everything you need to know about NEC Article 230 requirements.
            </p>
          </header>

          <div className="mb-12 bg-gradient-to-br from-purple-900/20 to-green-900/20 rounded-2xl p-6 border border-white/10">
            <HeroIllustration />
          </div>

          {/* Table of Contents */}
          <div className="bg-white/5 rounded-2xl p-6 mb-12">
            <h2 className="font-display font-bold mb-4">In This Guide</h2>
            <ul className="space-y-2 text-white/70">
              <li><a href="#service-types" className="hover:text-purple-400">→ Types of Services</a></li>
              <li><a href="#clearances" className="hover:text-purple-400">→ Service Drop Clearances (230.24)</a></li>
              <li><a href="#point-of-attachment" className="hover:text-purple-400">→ Point of Attachment</a></li>
              <li><a href="#service-conductors" className="hover:text-purple-400">→ Service Entrance Conductors</a></li>
              <li><a href="#disconnecting-means" className="hover:text-purple-400">→ Disconnecting Means Requirements</a></li>
              <li><a href="#grounding" className="hover:text-purple-400">→ Service Grounding</a></li>
              <li><a href="#200-amp" className="hover:text-purple-400">→ 200 Amp Service Sizing</a></li>
            </ul>
          </div>

          {/* Article Content */}
          <div className="prose prose-invert prose-lg max-w-none">

            <section id="service-types" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Types of Electrical Services</h2>
              <p className="text-white/80 mb-4">
                Understanding service terminology is essential:
              </p>
              <div className="grid md:grid-cols-2 gap-4 my-6">
                <div className="bg-white/5 rounded-xl p-6">
                  <h3 className="font-semibold text-purple-400 mb-2">Service Drop</h3>
                  <p className="text-white/70 text-sm">Overhead conductors from the utility pole to the point of attachment on the building. Owned and maintained by utility up to the weatherhead.</p>
                </div>
                <div className="bg-white/5 rounded-xl p-6">
                  <h3 className="font-semibold text-cyan-400 mb-2">Service Lateral</h3>
                  <p className="text-white/70 text-sm">Underground conductors from the utility to the meter base. May be utility-owned or customer-owned depending on jurisdiction.</p>
                </div>
                <div className="bg-white/5 rounded-xl p-6">
                  <h3 className="font-semibold text-green-400 mb-2">Service Entrance Conductors</h3>
                  <p className="text-white/70 text-sm">Conductors from the point of connection with the utility to the service disconnecting means. Always customer-owned.</p>
                </div>
                <div className="bg-white/5 rounded-xl p-6">
                  <h3 className="font-semibold text-orange-400 mb-2">Service Equipment</h3>
                  <p className="text-white/70 text-sm">The main disconnect and associated equipment - typically the main breaker panel or disconnect switch.</p>
                </div>
              </div>
            </section>

            <section id="clearances" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Service Drop Clearances (230.24)</h2>
              <p className="text-white/80 mb-4">
                Overhead service conductors must maintain minimum clearances to protect people and property:
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-3">Vertical Clearances from Ground</h3>
              <div className="overflow-x-auto my-6">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-white/20">
                      <th className="text-left py-3 px-4 text-white/60">Location</th>
                      <th className="text-left py-3 px-4 text-white/60">Clearance</th>
                    </tr>
                  </thead>
                  <tbody className="text-white/80">
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">Above finished grade (pedestrian only)</td>
                      <td className="py-3 px-4 font-semibold">10 feet</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">Above residential driveways</td>
                      <td className="py-3 px-4 font-semibold">12 feet</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">Above commercial/public roads</td>
                      <td className="py-3 px-4 font-semibold">18 feet</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4">Above roofs (not readily accessible)</td>
                      <td className="py-3 px-4 font-semibold">3 feet*</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-white/60 text-sm">
                *Roof clearance increases to 8 feet if roof slope is less than 4:12 and area is readily accessible.
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-3">Clearances from Building Openings</h3>
              <p className="text-white/80 mb-4">
                Per 230.9, service conductors must maintain <strong>3 feet</strong> clearance from windows, doors, porches, balconies, fire escapes, and similar locations. Exception: Conductors above the top of a window don't need the 3-foot clearance.
              </p>
            </section>

            <section id="point-of-attachment" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Point of Attachment (230.26)</h2>
              <p className="text-white/80 mb-4">
                The point of attachment for service drops must be:
              </p>
              <ul className="list-disc list-inside text-white/70 space-y-2 mb-4">
                <li>Not less than <strong>10 feet</strong> above finished grade</li>
                <li>Located to maintain required clearances</li>
                <li>At a structurally suitable point on the building</li>
              </ul>

              <h3 className="text-xl font-semibold mt-6 mb-3">Service Mast Requirements (230.28)</h3>
              <p className="text-white/80 mb-4">
                When a service mast is used:
              </p>
              <ul className="list-disc list-inside text-white/70 space-y-2 mb-4">
                <li>Must be adequate strength to support conductors</li>
                <li>Minimum 2" rigid metal conduit (RMC) or 2" intermediate metal conduit (IMC)</li>
                <li>May require guy wires for additional support</li>
                <li>Service head (weatherhead) must be above point of attachment</li>
              </ul>

              <div className="bg-orange-900/30 rounded-xl p-6 my-6">
                <h3 className="font-semibold text-orange-400 mb-2">Drip Loop Required</h3>
                <p className="text-white/70">
                  Service conductors must form a drip loop below the weatherhead to prevent water from entering the service mast. Individual conductors must extend at least 12 inches outside the weatherhead.
                </p>
              </div>
            </section>

            <section id="service-conductors" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Service Entrance Conductors</h2>

              <h3 className="text-xl font-semibold mt-6 mb-3">Minimum Size (230.42)</h3>
              <p className="text-white/80 mb-4">
                Service entrance conductors must have ampacity sufficient for the calculated load but not less than:
              </p>
              <ul className="list-disc list-inside text-white/70 space-y-2 mb-4">
                <li><strong>100 amperes</strong> for single dwelling units</li>
                <li><strong>60 amperes</strong> for other than single dwelling units (with limitations)</li>
              </ul>

              <h3 className="text-xl font-semibold mt-6 mb-3">Common Service Sizes</h3>
              <div className="overflow-x-auto my-6">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-white/20">
                      <th className="text-left py-3 px-4 text-white/60">Service Size</th>
                      <th className="text-left py-3 px-4 text-white/60">Copper SE Cable</th>
                      <th className="text-left py-3 px-4 text-white/60">Aluminum SE Cable</th>
                    </tr>
                  </thead>
                  <tbody className="text-white/80">
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">100A</td>
                      <td className="py-3 px-4">4 AWG</td>
                      <td className="py-3 px-4">2 AWG</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">125A</td>
                      <td className="py-3 px-4">2 AWG</td>
                      <td className="py-3 px-4">1/0 AWG</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">150A</td>
                      <td className="py-3 px-4">1 AWG</td>
                      <td className="py-3 px-4">2/0 AWG</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4">200A</td>
                      <td className="py-3 px-4">2/0 AWG</td>
                      <td className="py-3 px-4">4/0 AWG</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-white/60 text-sm">
                Note: These are typical values using 75°C termination ratings. Always verify with NEC 310.16 and applicable termination ratings.
              </p>
            </section>

            <section id="disconnecting-means" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Disconnecting Means Requirements (230.70-230.82)</h2>

              <h3 className="text-xl font-semibold mt-6 mb-3">Location Requirements</h3>
              <p className="text-white/80 mb-4">
                The service disconnecting means must be:
              </p>
              <ul className="list-disc list-inside text-white/70 space-y-2 mb-4">
                <li><strong>Installed at a readily accessible location</strong> - either outside or inside nearest the point of entrance</li>
                <li><strong>As close as practicable</strong> to where service conductors enter the building</li>
                <li><strong>Marked</strong> as suitable for use as service equipment</li>
              </ul>

              <h3 className="text-xl font-semibold mt-6 mb-3">Maximum Number of Disconnects</h3>
              <p className="text-white/80 mb-4">
                Per 230.71, the service disconnecting means can consist of <strong>up to six switches or circuit breakers</strong> mounted in a single enclosure or group of separate enclosures.
              </p>

              <div className="bg-purple-900/30 rounded-xl p-6 my-6">
                <h3 className="font-semibold text-purple-400 mb-2">Emergency Disconnect (NEC 2020+)</h3>
                <p className="text-white/70">
                  NEC 230.85 requires an emergency disconnect for one- and two-family dwellings. It must be installed outdoors in a readily accessible location and marked "EMERGENCY DISCONNECT."
                </p>
              </div>

              <h3 className="text-xl font-semibold mt-6 mb-3">Working Space (110.26)</h3>
              <p className="text-white/80 mb-4">
                Service equipment requires minimum working clearances:
              </p>
              <ul className="list-disc list-inside text-white/70 space-y-2 mb-4">
                <li><strong>Width:</strong> 30 inches or width of equipment (whichever is greater)</li>
                <li><strong>Depth:</strong> 36 inches minimum</li>
                <li><strong>Height:</strong> 78 inches (6.5 feet) minimum</li>
              </ul>
            </section>

            <section id="grounding" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Service Grounding Requirements</h2>
              <p className="text-white/80 mb-4">
                Service grounding is critical for safety and proper operation:
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-3">Key Requirements</h3>
              <ul className="list-disc list-inside text-white/70 space-y-2 mb-4">
                <li>Grounded conductor (neutral) must be bonded to grounding electrode system at service</li>
                <li>Main bonding jumper connects neutral bus to equipment ground</li>
                <li>Grounding electrode conductor connects to grounding electrode system</li>
                <li>All grounding electrodes present must be bonded together</li>
              </ul>

              <div className="bg-white/5 rounded-xl p-6 my-6">
                <h3 className="font-semibold text-white mb-3">Grounding Electrode System Checklist</h3>
                <ul className="space-y-2 text-white/70 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-green-400">□</span>
                    <span>Metal underground water pipe (if 10+ feet in earth)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400">□</span>
                    <span>Concrete-encased electrode (Ufer ground) - if present</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400">□</span>
                    <span>Ground ring - if present</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400">□</span>
                    <span>Ground rod(s) - required if above not present</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400">□</span>
                    <span>All electrodes bonded together</span>
                  </li>
                </ul>
              </div>

              <p className="text-white/80">
                See our <Link href="/blog/nec-article-250-grounding-guide" className="text-purple-400 hover:text-purple-300">NEC Article 250 Grounding Guide</Link> for complete grounding requirements.
              </p>
            </section>

            <section id="200-amp" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">200 Amp Residential Service</h2>
              <p className="text-white/80 mb-4">
                200A is the standard for modern homes. Here's a typical specification:
              </p>
              <div className="bg-white/5 rounded-xl p-6 my-6">
                <h3 className="font-semibold text-white mb-3">200A Service Specifications</h3>
                <ul className="space-y-2 text-white/70 text-sm">
                  <li><strong>Service Entrance Conductors:</strong> 4/0 AWG aluminum or 2/0 AWG copper</li>
                  <li><strong>Service Mast:</strong> 2" RMC or IMC minimum</li>
                  <li><strong>Meter Base:</strong> 200A rated, utility approved</li>
                  <li><strong>Main Panel:</strong> 200A rated, 40+ circuits typical</li>
                  <li><strong>GEC to Ground Rod:</strong> 6 AWG copper maximum</li>
                  <li><strong>GEC to Water Pipe:</strong> Per Table 250.66 (4 AWG for 4/0 service)</li>
                  <li><strong>Main Bonding Jumper:</strong> Per Table 250.66</li>
                </ul>
              </div>
            </section>

            {/* CTA Section */}
            <section className="bg-gradient-to-r from-purple-900/30 to-cyan-900/30 rounded-2xl p-8 my-12">
              <h2 className="text-2xl font-display font-bold mb-4 text-center">
                Calculate Service Loads Instantly
              </h2>
              <p className="text-white/70 mb-6 text-center">
                Use Ampora's load calculation tool to properly size residential and commercial services per NEC Article 220.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link
                  href="/calculators/load-calculation"
                  className="px-6 py-3 bg-purple-600 text-white font-semibold rounded-full hover:bg-purple-500 transition-colors text-center"
                >
                  Load Calculator
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
                <Link href="/blog/nec-article-250-grounding-guide" className="bg-white/5 hover:bg-white/10 rounded-xl p-6 transition-colors">
                  <span className="text-purple-400 text-sm">NEC Code</span>
                  <h3 className="font-semibold mt-2">NEC Article 250: Grounding Guide</h3>
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
          <p className="text-sm text-white/40">© 2025 Ampora Labs</p>
        </div>
      </footer>
    </main>
  );
}
