import { Metadata } from "next";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import { BreadcrumbJsonLd, BlogPostingJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "NEC Article 250 Explained: Complete Grounding & Bonding Guide",
  description: "Master NEC Article 250 grounding and bonding requirements. Learn about grounding electrode systems, equipment grounding conductors, bonding jumpers, and common grounding mistakes electricians make.",
  keywords: [
    "NEC Article 250",
    "NEC 250",
    "electrical grounding",
    "grounding and bonding",
    "grounding electrode system",
    "equipment grounding conductor",
    "grounding electrode conductor",
    "bonding jumper",
    "ground rod requirements",
    "NEC grounding requirements",
    "electrical bonding",
    "grounding code",
    "GEC sizing",
    "EGC sizing",
    "main bonding jumper"
  ],
  alternates: {
    canonical: "https://amporalabs.com/blog/nec-article-250-grounding-guide",
  },
  openGraph: {
    title: "NEC Article 250 Explained: Grounding & Bonding Guide - Ampora",
    description: "Complete guide to NEC Article 250 grounding and bonding requirements for electricians.",
    url: "https://amporalabs.com/blog/nec-article-250-grounding-guide",
    type: "article",
  },
};

export default function NECArticle250Page() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navigation />
      <div className="pt-20">
        <BreadcrumbJsonLd
          items={[
            { name: "Home", url: "https://amporalabs.com" },
            { name: "Blog", url: "https://amporalabs.com/blog" },
            { name: "NEC Article 250 Guide", url: "https://amporalabs.com/blog/nec-article-250-grounding-guide" },
          ]}
        />
        <BlogPostingJsonLd
          headline="NEC Article 250 Explained: Complete Grounding & Bonding Guide"
          description="Master NEC Article 250 grounding and bonding requirements including grounding electrode systems and equipment grounding."
          datePublished="2025-01-20"
          dateModified="2025-01-20"
          url="https://amporalabs.com/blog/nec-article-250-grounding-guide"
          wordCount={2800}
          keywords={["NEC Article 250", "grounding", "bonding", "grounding electrode", "equipment grounding conductor"]}
        />

        <article className="max-w-4xl mx-auto px-6 py-12">
          {/* Breadcrumb */}
          <nav className="text-sm text-white/60 mb-8">
            <Link href="/" className="hover:text-white">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/blog" className="hover:text-white">Blog</Link>
            <span className="mx-2">/</span>
            <span className="text-white">NEC Article 250</span>
          </nav>

          {/* Article Header */}
          <header className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <span className="px-3 py-1 bg-purple-600/30 text-purple-300 text-sm font-medium rounded-full">
                NEC Code
              </span>
              <span className="text-white/40 text-sm">14 min read</span>
              <span className="text-white/40 text-sm">January 20, 2025</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6 leading-tight">
              NEC Article 250 Explained: Complete Grounding & Bonding Guide
            </h1>
            <p className="text-xl text-white/70">
              Grounding is one of the most critical safety aspects of electrical work. This guide breaks down NEC Article 250 into practical knowledge for everyday electrical installations.
            </p>
          </header>

          {/* Table of Contents */}
          <div className="bg-white/5 rounded-2xl p-6 mb-12">
            <h2 className="font-display font-bold mb-4">In This Guide</h2>
            <ul className="space-y-2 text-white/70">
              <li><a href="#why-grounding" className="hover:text-purple-400">→ Why Grounding Matters</a></li>
              <li><a href="#terminology" className="hover:text-purple-400">→ Grounding vs Bonding Terminology</a></li>
              <li><a href="#grounding-electrode" className="hover:text-purple-400">→ Grounding Electrode System (250.50)</a></li>
              <li><a href="#gec-sizing" className="hover:text-purple-400">→ Grounding Electrode Conductor Sizing</a></li>
              <li><a href="#egc" className="hover:text-purple-400">→ Equipment Grounding Conductors</a></li>
              <li><a href="#bonding" className="hover:text-purple-400">→ Bonding Requirements</a></li>
              <li><a href="#common-mistakes" className="hover:text-purple-400">→ Common Grounding Mistakes</a></li>
            </ul>
          </div>

          {/* Article Content */}
          <div className="prose prose-invert prose-lg max-w-none">

            <section id="why-grounding" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Why Grounding Matters</h2>
              <p className="text-white/80 mb-4">
                Proper grounding serves three critical functions in electrical systems:
              </p>
              <ul className="list-disc list-inside text-white/70 space-y-2 mb-4">
                <li><strong>Personnel safety</strong> - Provides a path for fault current to trip overcurrent devices, preventing electrocution</li>
                <li><strong>Equipment protection</strong> - Limits voltage on equipment enclosures during faults</li>
                <li><strong>System stability</strong> - Establishes a reference point for the electrical system and helps with surge protection</li>
              </ul>
              <p className="text-white/80">
                Without proper grounding, a fault in equipment could energize metal enclosures at full voltage, creating a deadly shock hazard that may not trip the breaker.
              </p>
            </section>

            <section id="terminology" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Grounding vs Bonding: Know the Difference</h2>
              <p className="text-white/80 mb-4">
                The NEC uses specific terminology that's important to understand:
              </p>
              <div className="grid md:grid-cols-2 gap-4 my-6">
                <div className="bg-purple-900/30 rounded-xl p-6">
                  <h3 className="font-semibold text-purple-400 mb-2">Grounding</h3>
                  <p className="text-white/70 text-sm">Connecting to the earth (ground rods, water pipes, concrete-encased electrodes). Establishes earth reference.</p>
                </div>
                <div className="bg-cyan-900/30 rounded-xl p-6">
                  <h3 className="font-semibold text-cyan-400 mb-2">Bonding</h3>
                  <p className="text-white/70 text-sm">Connecting metal parts together to ensure electrical continuity. Creates fault current path back to source.</p>
                </div>
                <div className="bg-green-900/30 rounded-xl p-6">
                  <h3 className="font-semibold text-green-400 mb-2">Grounded Conductor</h3>
                  <p className="text-white/70 text-sm">The neutral - a current-carrying conductor that's intentionally grounded at the service.</p>
                </div>
                <div className="bg-orange-900/30 rounded-xl p-6">
                  <h3 className="font-semibold text-orange-400 mb-2">Grounding Conductor</h3>
                  <p className="text-white/70 text-sm">The equipment ground (EGC) - NOT intended to carry current except during faults.</p>
                </div>
              </div>
              <div className="bg-orange-900/30 rounded-xl p-6 my-6">
                <p className="text-white/90">
                  <strong>Key Point:</strong> Bonding (not grounding to earth) is what actually clears faults. Earth grounding alone has too much resistance to trip breakers. The equipment grounding conductor provides the low-impedance path needed.
                </p>
              </div>
            </section>

            <section id="grounding-electrode" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Grounding Electrode System (250.50)</h2>
              <p className="text-white/80 mb-4">
                NEC 250.50 requires that <strong>all grounding electrodes present at a building be bonded together</strong> to form the grounding electrode system. Required electrodes include:
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-3">Required Electrodes (if present)</h3>
              <div className="space-y-4 my-6">
                <div className="bg-white/5 rounded-xl p-4">
                  <h4 className="font-semibold text-white">Metal Underground Water Pipe (250.52(A)(1))</h4>
                  <p className="text-white/60 text-sm mt-1">Must have 10 feet or more in direct contact with earth. Must be supplemented by an additional electrode.</p>
                </div>
                <div className="bg-white/5 rounded-xl p-4">
                  <h4 className="font-semibold text-white">Metal Frame of Building (250.52(A)(2))</h4>
                  <p className="text-white/60 text-sm mt-1">If effectively grounded (10 feet of structural metal in earth, or bonded to concrete-encased electrode).</p>
                </div>
                <div className="bg-white/5 rounded-xl p-4">
                  <h4 className="font-semibold text-white">Concrete-Encased Electrode "Ufer Ground" (250.52(A)(3))</h4>
                  <p className="text-white/60 text-sm mt-1">20+ feet of 4 AWG or larger bare copper, or 1/2" rebar, encased in 2+ inches of concrete in contact with earth.</p>
                </div>
                <div className="bg-white/5 rounded-xl p-4">
                  <h4 className="font-semibold text-white">Ground Ring (250.52(A)(4))</h4>
                  <p className="text-white/60 text-sm mt-1">2 AWG or larger bare copper, minimum 20 feet, encircling building in direct contact with earth at 2.5 feet depth.</p>
                </div>
              </div>

              <h3 className="text-xl font-semibold mt-6 mb-3">Made Electrodes (250.52(A)(5))</h3>
              <p className="text-white/80 mb-4">
                If none of the above electrodes exist, you must install made electrodes:
              </p>
              <ul className="list-disc list-inside text-white/70 space-y-2 mb-4">
                <li><strong>Ground rods</strong> - 5/8" diameter, 8 feet long minimum, driven vertically</li>
                <li><strong>Pipe electrodes</strong> - 3/4" trade size, 8 feet long, galvanized or metal-coated</li>
                <li><strong>Plate electrodes</strong> - 2 sq ft surface area, 1/4" thick (steel) or 0.06" thick (nonferrous)</li>
              </ul>

              <div className="bg-purple-900/30 rounded-xl p-6 my-6">
                <h3 className="font-semibold text-purple-400 mb-2">The 25-Ohm Rule (250.53(A)(2))</h3>
                <p className="text-white/70">
                  A single ground rod must have resistance to ground of 25 ohms or less. If it exceeds 25 ohms, a <strong>second rod</strong> is required (spaced at least 6 feet apart). With two rods, no further testing is required regardless of resistance.
                </p>
              </div>
            </section>

            <section id="gec-sizing" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Grounding Electrode Conductor (GEC) Sizing</h2>
              <p className="text-white/80 mb-4">
                The GEC connects the grounding electrode system to the service equipment. Size per NEC Table 250.66:
              </p>
              <div className="overflow-x-auto my-6">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-white/20">
                      <th className="text-left py-3 px-4 text-white/60">Service Conductor Size (Copper)</th>
                      <th className="text-left py-3 px-4 text-white/60">GEC Size (Copper)</th>
                      <th className="text-left py-3 px-4 text-white/60">GEC Size (Aluminum)</th>
                    </tr>
                  </thead>
                  <tbody className="text-white/80">
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">2 AWG or smaller</td>
                      <td className="py-3 px-4">8 AWG</td>
                      <td className="py-3 px-4">6 AWG</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">1 AWG or 1/0 AWG</td>
                      <td className="py-3 px-4">6 AWG</td>
                      <td className="py-3 px-4">4 AWG</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">2/0 or 3/0 AWG</td>
                      <td className="py-3 px-4">4 AWG</td>
                      <td className="py-3 px-4">2 AWG</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">Over 3/0 through 350 kcmil</td>
                      <td className="py-3 px-4">2 AWG</td>
                      <td className="py-3 px-4">1/0 AWG</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">Over 350 through 600 kcmil</td>
                      <td className="py-3 px-4">1/0 AWG</td>
                      <td className="py-3 px-4">3/0 AWG</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4">Over 600 through 1100 kcmil</td>
                      <td className="py-3 px-4">2/0 AWG</td>
                      <td className="py-3 px-4">4/0 AWG</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-white/70 text-sm">
                <strong>Note:</strong> GEC to ground rods/pipes never needs to be larger than 6 AWG copper. GEC to concrete-encased electrode never needs to be larger than 4 AWG copper.
              </p>
            </section>

            <section id="egc" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Equipment Grounding Conductors (EGC)</h2>
              <p className="text-white/80 mb-4">
                The EGC provides the fault return path from equipment back to the source. Size per NEC Table 250.122 based on the overcurrent device protecting the circuit:
              </p>
              <div className="overflow-x-auto my-6">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-white/20">
                      <th className="text-left py-3 px-4 text-white/60">Overcurrent Device (Amps)</th>
                      <th className="text-left py-3 px-4 text-white/60">Copper EGC</th>
                      <th className="text-left py-3 px-4 text-white/60">Aluminum EGC</th>
                    </tr>
                  </thead>
                  <tbody className="text-white/80">
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">15</td>
                      <td className="py-3 px-4">14 AWG</td>
                      <td className="py-3 px-4">12 AWG</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">20</td>
                      <td className="py-3 px-4">12 AWG</td>
                      <td className="py-3 px-4">10 AWG</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">30</td>
                      <td className="py-3 px-4">10 AWG</td>
                      <td className="py-3 px-4">8 AWG</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">40</td>
                      <td className="py-3 px-4">10 AWG</td>
                      <td className="py-3 px-4">8 AWG</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">60</td>
                      <td className="py-3 px-4">10 AWG</td>
                      <td className="py-3 px-4">8 AWG</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">100</td>
                      <td className="py-3 px-4">8 AWG</td>
                      <td className="py-3 px-4">6 AWG</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4">200</td>
                      <td className="py-3 px-4">6 AWG</td>
                      <td className="py-3 px-4">4 AWG</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section id="bonding" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Bonding Requirements</h2>

              <h3 className="text-xl font-semibold mt-6 mb-3">Main Bonding Jumper (250.28)</h3>
              <p className="text-white/80 mb-4">
                At the service, the grounded conductor (neutral) must be bonded to the equipment grounding conductor and enclosure. This is the ONLY place where neutral and ground should be connected in most systems.
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-3">Bonding of Metal Piping (250.104)</h3>
              <ul className="list-disc list-inside text-white/70 space-y-2 mb-4">
                <li><strong>Metal water piping</strong> - Must be bonded to service equipment, grounding electrode conductor, or grounding electrode</li>
                <li><strong>Other metal piping</strong> - Gas piping, etc. must be bonded if likely to become energized</li>
                <li><strong>Structural steel</strong> - Must be bonded if likely to become energized</li>
              </ul>

              <h3 className="text-xl font-semibold mt-6 mb-3">Bonding Around Concentric/Eccentric Knockouts</h3>
              <p className="text-white/80 mb-4">
                Standard locknuts are NOT sufficient for bonding on the line side of service equipment. Use bonding bushings or bonding locknuts with bonding jumpers per 250.92(B).
              </p>
            </section>

            <section id="common-mistakes" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Common Grounding Mistakes</h2>
              <div className="space-y-4 my-6">
                <div className="bg-red-900/20 border border-red-500/30 rounded-xl p-6">
                  <h3 className="font-semibold text-red-400 mb-2">Neutral-Ground Bond in Sub-Panel</h3>
                  <p className="text-white/60 text-sm">The neutral and ground should only be bonded at the main service. In sub-panels, keep them separate. Bonding at both creates parallel paths and can cause neutral current on equipment grounds.</p>
                </div>
                <div className="bg-red-900/20 border border-red-500/30 rounded-xl p-6">
                  <h3 className="font-semibold text-red-400 mb-2">Bootleg Ground</h3>
                  <p className="text-white/60 text-sm">Connecting ground to neutral at a receptacle instead of running an actual ground wire. This is dangerous and won't trip GFCI devices properly.</p>
                </div>
                <div className="bg-red-900/20 border border-red-500/30 rounded-xl p-6">
                  <h3 className="font-semibold text-red-400 mb-2">Undersized GEC or EGC</h3>
                  <p className="text-white/60 text-sm">Not following Tables 250.66 and 250.122. Undersized grounding conductors may not clear faults properly.</p>
                </div>
                <div className="bg-red-900/20 border border-red-500/30 rounded-xl p-6">
                  <h3 className="font-semibold text-red-400 mb-2">Single Ground Rod Without Testing</h3>
                  <p className="text-white/60 text-sm">Installing one ground rod without testing for 25 ohms or less resistance. If you can't test, install two rods.</p>
                </div>
                <div className="bg-red-900/20 border border-red-500/30 rounded-xl p-6">
                  <h3 className="font-semibold text-red-400 mb-2">Not Bonding Water Heater</h3>
                  <p className="text-white/60 text-sm">Forgetting to bond metal water piping at water heater where dielectric unions interrupt the grounding path.</p>
                </div>
              </div>
            </section>

            {/* CTA Section */}
            <section className="bg-gradient-to-r from-purple-900/30 to-cyan-900/30 rounded-2xl p-8 my-12">
              <h2 className="text-2xl font-display font-bold mb-4 text-center">
                Get Grounding Answers Instantly
              </h2>
              <p className="text-white/70 mb-6 text-center">
                Ampora's AI assistant can answer your NEC 250 questions on the job site. Ask about GEC sizing, bonding requirements, or any grounding question.
              </p>
              <div className="flex justify-center">
                <a
                  href="https://apps.apple.com/us/app/ampora/id6753693522"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-white text-black font-semibold rounded-full hover:bg-white/90 transition-colors"
                >
                  Download Ampora Free
                </a>
              </div>
            </section>

            {/* Related Articles */}
            <section className="mt-12">
              <h2 className="text-2xl font-display font-bold mb-6">Related Articles</h2>
              <div className="grid md:grid-cols-2 gap-4">
                <Link href="/blog/nec-article-210-branch-circuits-guide" className="bg-white/5 hover:bg-white/10 rounded-xl p-6 transition-colors">
                  <span className="text-purple-400 text-sm">NEC Code</span>
                  <h3 className="font-semibold mt-2">NEC Article 210: Branch Circuits Guide</h3>
                </Link>
                <Link href="/blog/electrical-inspection-checklist" className="bg-white/5 hover:bg-white/10 rounded-xl p-6 transition-colors">
                  <span className="text-green-400 text-sm">Inspections</span>
                  <h3 className="font-semibold mt-2">Electrical Inspection Checklist</h3>
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
