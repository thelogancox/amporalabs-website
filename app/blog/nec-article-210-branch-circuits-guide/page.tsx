import { Metadata } from "next";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import { BreadcrumbJsonLd, BlogPostingJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "NEC Article 210 Explained: Complete Guide to Branch Circuits",
  description: "Master NEC Article 210 branch circuit requirements. Learn about receptacle outlets, lighting loads, GFCI requirements, AFCI protection, and conductor sizing for residential and commercial installations.",
  keywords: [
    "NEC Article 210",
    "NEC 210",
    "branch circuits",
    "branch circuit requirements",
    "NEC branch circuit",
    "receptacle outlet requirements",
    "lighting circuit requirements",
    "GFCI requirements NEC",
    "AFCI requirements NEC",
    "dwelling unit branch circuits",
    "commercial branch circuits",
    "NEC code explained",
    "electrical code article 210",
    "branch circuit conductor sizing",
    "15 amp circuit requirements",
    "20 amp circuit requirements"
  ],
  alternates: {
    canonical: "https://amporalabs.com/blog/nec-article-210-branch-circuits-guide",
  },
  openGraph: {
    title: "NEC Article 210 Explained: Branch Circuits Guide - Ampora",
    description: "Complete guide to NEC Article 210 branch circuit requirements for electricians.",
    url: "https://amporalabs.com/blog/nec-article-210-branch-circuits-guide",
    type: "article",
  },
};

export default function NECArticle210Page() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navigation />
      <div className="pt-20">
        <BreadcrumbJsonLd
          items={[
            { name: "Home", url: "https://amporalabs.com" },
            { name: "Blog", url: "https://amporalabs.com/blog" },
            { name: "NEC Article 210 Guide", url: "https://amporalabs.com/blog/nec-article-210-branch-circuits-guide" },
          ]}
        />
        <BlogPostingJsonLd
          headline="NEC Article 210 Explained: Complete Guide to Branch Circuits"
          description="Master NEC Article 210 branch circuit requirements including receptacle outlets, lighting loads, GFCI, and AFCI protection."
          datePublished="2025-01-15"
          dateModified="2025-01-15"
          url="https://amporalabs.com/blog/nec-article-210-branch-circuits-guide"
          wordCount={2500}
          keywords={["NEC Article 210", "branch circuits", "GFCI requirements", "AFCI requirements", "electrical code"]}
        />

        <article className="max-w-4xl mx-auto px-6 py-12">
          {/* Breadcrumb */}
          <nav className="text-sm text-white/60 mb-8">
            <Link href="/" className="hover:text-white">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/blog" className="hover:text-white">Blog</Link>
            <span className="mx-2">/</span>
            <span className="text-white">NEC Article 210</span>
          </nav>

          {/* Article Header */}
          <header className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <span className="px-3 py-1 bg-purple-600/30 text-purple-300 text-sm font-medium rounded-full">
                NEC Code
              </span>
              <span className="text-white/40 text-sm">12 min read</span>
              <span className="text-white/40 text-sm">January 15, 2025</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6 leading-tight">
              NEC Article 210 Explained: Complete Guide to Branch Circuits
            </h1>
            <p className="text-xl text-white/70">
              Everything electricians need to know about NEC Article 210 - from receptacle requirements to GFCI/AFCI protection. A practical breakdown for residential and commercial work.
            </p>
          </header>

          {/* Table of Contents */}
          <div className="bg-white/5 rounded-2xl p-6 mb-12">
            <h2 className="font-display font-bold mb-4">In This Guide</h2>
            <ul className="space-y-2 text-white/70">
              <li><a href="#overview" className="hover:text-purple-400">→ What is NEC Article 210?</a></li>
              <li><a href="#branch-circuit-ratings" className="hover:text-purple-400">→ Branch Circuit Ratings (210.3)</a></li>
              <li><a href="#conductor-sizing" className="hover:text-purple-400">→ Conductor Sizing Requirements</a></li>
              <li><a href="#gfci-protection" className="hover:text-purple-400">→ GFCI Protection Requirements (210.8)</a></li>
              <li><a href="#afci-protection" className="hover:text-purple-400">→ AFCI Protection Requirements (210.12)</a></li>
              <li><a href="#receptacle-outlets" className="hover:text-purple-400">→ Receptacle Outlet Requirements (210.52)</a></li>
              <li><a href="#lighting-outlets" className="hover:text-purple-400">→ Lighting Outlet Requirements (210.70)</a></li>
              <li><a href="#common-violations" className="hover:text-purple-400">→ Common Code Violations</a></li>
            </ul>
          </div>

          {/* Article Content */}
          <div className="prose prose-invert prose-lg max-w-none">

            <section id="overview" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">What is NEC Article 210?</h2>
              <p className="text-white/80 mb-4">
                NEC Article 210 covers <strong>Branch Circuits</strong> - the portion of the wiring system that extends beyond the final overcurrent device (breaker or fuse) protecting the circuit. This article is one of the most frequently referenced sections of the National Electrical Code because it applies to virtually every electrical installation.
              </p>
              <p className="text-white/80 mb-4">
                Article 210 establishes requirements for:
              </p>
              <ul className="list-disc list-inside text-white/70 space-y-2 mb-4">
                <li>Branch circuit ratings and classifications</li>
                <li>Conductor sizing and identification</li>
                <li>Ground-fault circuit interrupter (GFCI) protection</li>
                <li>Arc-fault circuit interrupter (AFCI) protection</li>
                <li>Required outlets for receptacles, lighting, and appliances</li>
              </ul>
              <div className="bg-purple-900/30 rounded-xl p-6 my-6">
                <p className="text-white/90 font-medium">
                  <strong>Pro Tip:</strong> Use Ampora's AI assistant to quickly look up specific NEC 210 sections while on the job site. Just ask "What are the GFCI requirements for kitchens?" and get instant code references.
                </p>
              </div>
            </section>

            <section id="branch-circuit-ratings" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Branch Circuit Ratings (210.3)</h2>
              <p className="text-white/80 mb-4">
                Branch circuits are classified by the rating of the overcurrent device (breaker or fuse). Per NEC 210.3, branch circuits that supply multiple outlets or receptacles must be rated at one of these standard values:
              </p>
              <div className="grid md:grid-cols-2 gap-4 my-6">
                <div className="bg-white/5 rounded-xl p-6">
                  <h3 className="font-semibold text-purple-400 mb-2">15-Ampere Circuits</h3>
                  <p className="text-white/70 text-sm">General lighting and receptacles. Most common in residential work. Requires 14 AWG minimum conductors.</p>
                </div>
                <div className="bg-white/5 rounded-xl p-6">
                  <h3 className="font-semibold text-purple-400 mb-2">20-Ampere Circuits</h3>
                  <p className="text-white/70 text-sm">Kitchen, bathroom, garage, and outdoor receptacles. Required for small appliance loads. Requires 12 AWG minimum conductors.</p>
                </div>
                <div className="bg-white/5 rounded-xl p-6">
                  <h3 className="font-semibold text-purple-400 mb-2">30-Ampere Circuits</h3>
                  <p className="text-white/70 text-sm">Fixed appliances like dryers, water heaters. Requires 10 AWG minimum conductors.</p>
                </div>
                <div className="bg-white/5 rounded-xl p-6">
                  <h3 className="font-semibold text-purple-400 mb-2">40 & 50-Ampere Circuits</h3>
                  <p className="text-white/70 text-sm">Cooking appliances, ranges, large equipment. Requires 8 AWG (40A) or 6 AWG (50A) minimum.</p>
                </div>
              </div>
            </section>

            <section id="conductor-sizing" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Conductor Sizing Requirements</h2>
              <p className="text-white/80 mb-4">
                NEC 210.3 requires branch circuit conductors to have an ampacity not less than the maximum load to be served. The minimum conductor sizes for standard branch circuits are:
              </p>
              <div className="overflow-x-auto my-6">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-white/20">
                      <th className="text-left py-3 px-4 text-white/60">Circuit Rating</th>
                      <th className="text-left py-3 px-4 text-white/60">Minimum Copper AWG</th>
                      <th className="text-left py-3 px-4 text-white/60">Minimum Aluminum AWG</th>
                    </tr>
                  </thead>
                  <tbody className="text-white/80">
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">15 Ampere</td>
                      <td className="py-3 px-4">14 AWG</td>
                      <td className="py-3 px-4">12 AWG</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">20 Ampere</td>
                      <td className="py-3 px-4">12 AWG</td>
                      <td className="py-3 px-4">10 AWG</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">30 Ampere</td>
                      <td className="py-3 px-4">10 AWG</td>
                      <td className="py-3 px-4">8 AWG</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">40 Ampere</td>
                      <td className="py-3 px-4">8 AWG</td>
                      <td className="py-3 px-4">6 AWG</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4">50 Ampere</td>
                      <td className="py-3 px-4">6 AWG</td>
                      <td className="py-3 px-4">4 AWG</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-white/70 text-sm">
                Note: Conductors may need to be upsized for voltage drop on long runs. Use Ampora's <Link href="/calculators/wire-sizing" className="text-purple-400 hover:text-purple-300">Wire Sizing Calculator</Link> to verify.
              </p>
            </section>

            <section id="gfci-protection" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">GFCI Protection Requirements (210.8)</h2>
              <p className="text-white/80 mb-4">
                NEC 210.8 specifies where ground-fault circuit-interrupter protection is required. GFCI protection must be provided for all 125-volt through 250-volt receptacles in the following locations:
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-3">Dwelling Units (210.8(A))</h3>
              <ul className="list-disc list-inside text-white/70 space-y-2 mb-4">
                <li><strong>Bathrooms</strong> - All receptacles</li>
                <li><strong>Garages and accessory buildings</strong> - All receptacles with floor at or below grade</li>
                <li><strong>Outdoors</strong> - All receptacles with direct grade-level access</li>
                <li><strong>Crawl spaces</strong> - At or below grade level</li>
                <li><strong>Basements</strong> - Unfinished (finished basements excluded except for laundry areas)</li>
                <li><strong>Kitchens</strong> - All receptacles serving countertop surfaces and within 6 feet of sink</li>
                <li><strong>Sinks</strong> - Receptacles within 6 feet of outside edge (all locations)</li>
                <li><strong>Boathouses</strong> - All receptacles</li>
                <li><strong>Bathtubs and shower stalls</strong> - Receptacles within 6 feet</li>
                <li><strong>Laundry areas</strong> - All receptacles</li>
                <li><strong>Indoor damp/wet locations</strong> - All receptacles</li>
              </ul>

              <h3 className="text-xl font-semibold mt-6 mb-3">Other Than Dwelling Units (210.8(B))</h3>
              <ul className="list-disc list-inside text-white/70 space-y-2 mb-4">
                <li>Bathrooms</li>
                <li>Kitchens</li>
                <li>Rooftops</li>
                <li>Outdoors</li>
                <li>Sinks (within 6 feet)</li>
                <li>Indoor wet locations</li>
                <li>Locker rooms with shower facilities</li>
                <li>Garages, service bays, and similar areas</li>
                <li>Crawl spaces at or below grade</li>
                <li>Unfinished basements</li>
                <li>Bathtubs and shower stalls (within 6 feet)</li>
              </ul>

              <div className="bg-orange-900/30 rounded-xl p-6 my-6">
                <p className="text-white/90 font-medium">
                  <strong>Important:</strong> The NEC 2023 expanded GFCI requirements significantly. Receptacles rated up to 250V now require GFCI protection in specified locations, including 240V outlets for HVAC equipment outdoors.
                </p>
              </div>
            </section>

            <section id="afci-protection" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">AFCI Protection Requirements (210.12)</h2>
              <p className="text-white/80 mb-4">
                Arc-fault circuit-interrupter protection is required for 120-volt, single-phase, 15- and 20-ampere branch circuits in dwelling units supplying outlets and devices in:
              </p>
              <ul className="list-disc list-inside text-white/70 space-y-2 mb-4">
                <li>Kitchens</li>
                <li>Family rooms</li>
                <li>Dining rooms</li>
                <li>Living rooms</li>
                <li>Parlors</li>
                <li>Libraries</li>
                <li>Dens</li>
                <li>Bedrooms</li>
                <li>Sunrooms</li>
                <li>Recreation rooms</li>
                <li>Closets</li>
                <li>Hallways</li>
                <li>Laundry areas</li>
                <li>Similar rooms or areas</li>
              </ul>
              <p className="text-white/80">
                AFCI protection can be provided by AFCI circuit breakers, AFCI receptacles (at the first outlet), or a combination approach as permitted by NEC 210.12(A).
              </p>
            </section>

            <section id="receptacle-outlets" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Receptacle Outlet Requirements (210.52)</h2>
              <p className="text-white/80 mb-4">
                NEC 210.52 specifies the minimum number and placement of receptacles in dwelling units. These requirements ensure that appliances can be used without extension cords.
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-3">General Provisions - Wall Spacing Rule</h3>
              <p className="text-white/80 mb-4">
                Receptacles must be installed so that no point along the floor line of any wall space is more than <strong>6 feet</strong> from a receptacle outlet. This means:
              </p>
              <ul className="list-disc list-inside text-white/70 space-y-2 mb-4">
                <li>Maximum 12 feet between receptacles on a wall</li>
                <li>Any wall space 2 feet or wider requires a receptacle</li>
                <li>Fixed panels in exterior walls (sliding glass doors) are not wall space</li>
              </ul>

              <h3 className="text-xl font-semibold mt-6 mb-3">Kitchen Countertop Receptacles (210.52(C))</h3>
              <ul className="list-disc list-inside text-white/70 space-y-2 mb-4">
                <li>Receptacle required for each countertop space 12 inches or wider</li>
                <li>No point along countertop can be more than 24 inches from a receptacle (2-foot rule)</li>
                <li>Island countertops require at least one receptacle per NEC 210.52(C)(2)</li>
                <li>Peninsular countertops require at least one receptacle</li>
                <li>Must be supplied by 20-ampere small appliance branch circuits</li>
              </ul>

              <h3 className="text-xl font-semibold mt-6 mb-3">Bathroom Receptacles (210.52(D))</h3>
              <p className="text-white/70 mb-4">
                At least one receptacle outlet required within 3 feet of the outside edge of each basin. Must be on a 20-ampere circuit with no other outlets (or dedicated bathroom circuit serving only that bathroom).
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-3">Outdoor Receptacles (210.52(E))</h3>
              <ul className="list-disc list-inside text-white/70 space-y-2 mb-4">
                <li>At least two receptacles at one- and two-family dwellings (front and back)</li>
                <li>One receptacle accessible from grade at each entrance to the dwelling</li>
                <li>Balconies, decks, and porches with usable area require receptacles</li>
              </ul>
            </section>

            <section id="lighting-outlets" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Lighting Outlet Requirements (210.70)</h2>
              <p className="text-white/80 mb-4">
                NEC 210.70 specifies where lighting outlets are required in dwelling units:
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-3">Habitable Rooms</h3>
              <p className="text-white/70 mb-4">
                At least one wall switch-controlled lighting outlet required in every habitable room, including kitchens and bathrooms. In non-habitable rooms (like closets), a lighting outlet is required if the room is illuminated.
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-3">Additional Requirements</h3>
              <ul className="list-disc list-inside text-white/70 space-y-2 mb-4">
                <li><strong>Hallways:</strong> Lighting outlet required in hallways</li>
                <li><strong>Stairways:</strong> Lighting at each floor level and landing, with 3-way switching at top and bottom</li>
                <li><strong>Garages:</strong> At least one lighting outlet</li>
                <li><strong>Outdoors:</strong> Lighting outlets at outdoor entrances/exits</li>
                <li><strong>Basements/Attics/Crawl spaces:</strong> Lighting required with switch at entry point</li>
              </ul>
            </section>

            <section id="common-violations" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Common Article 210 Code Violations</h2>
              <p className="text-white/80 mb-4">
                Inspectors frequently cite these NEC Article 210 violations. Make sure your work avoids these common mistakes:
              </p>
              <div className="space-y-4">
                <div className="bg-red-900/20 border border-red-500/30 rounded-xl p-6">
                  <h3 className="font-semibold text-red-400 mb-2">Missing GFCI Protection</h3>
                  <p className="text-white/70 text-sm">Forgetting GFCI in required locations - especially the 6-foot sink rule, laundry areas, and unfinished basements.</p>
                </div>
                <div className="bg-red-900/20 border border-red-500/30 rounded-xl p-6">
                  <h3 className="font-semibold text-red-400 mb-2">Kitchen Circuit Errors</h3>
                  <p className="text-white/70 text-sm">Using 15A circuits for kitchen countertops (must be 20A), or not providing the required two small appliance circuits.</p>
                </div>
                <div className="bg-red-900/20 border border-red-500/30 rounded-xl p-6">
                  <h3 className="font-semibold text-red-400 mb-2">Bathroom Circuit Sharing</h3>
                  <p className="text-white/70 text-sm">Running bathroom receptacle on a circuit with other outlets outside that bathroom (unless it's a dedicated bathroom circuit).</p>
                </div>
                <div className="bg-red-900/20 border border-red-500/30 rounded-xl p-6">
                  <h3 className="font-semibold text-red-400 mb-2">Wall Spacing Violations</h3>
                  <p className="text-white/70 text-sm">Exceeding the 6-foot/12-foot spacing rule for receptacles, or missing receptacles on 2-foot wall sections.</p>
                </div>
                <div className="bg-red-900/20 border border-red-500/30 rounded-xl p-6">
                  <h3 className="font-semibold text-red-400 mb-2">Missing AFCI Protection</h3>
                  <p className="text-white/70 text-sm">Not providing AFCI on bedroom and other required circuits in dwelling unit bedrooms, living areas, and kitchens.</p>
                </div>
              </div>
            </section>

            {/* CTA Section */}
            <section className="bg-gradient-to-r from-purple-900/30 to-cyan-900/30 rounded-2xl p-8 my-12">
              <h2 className="text-2xl font-display font-bold mb-4 text-center">
                Look Up NEC Code Instantly
              </h2>
              <p className="text-white/70 mb-6 text-center">
                Ampora's AI assistant can answer your NEC questions in seconds. Ask about Article 210 requirements, get conductor sizing help, and verify code compliance on the job site.
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
                <Link href="/blog/how-to-calculate-voltage-drop" className="bg-white/5 hover:bg-white/10 rounded-xl p-6 transition-colors">
                  <span className="text-purple-400 text-sm">Calculations</span>
                  <h3 className="font-semibold mt-2">How to Calculate Voltage Drop</h3>
                </Link>
                <Link href="/blog/wire-sizing-guide-nec-ampacity-tables" className="bg-white/5 hover:bg-white/10 rounded-xl p-6 transition-colors">
                  <span className="text-purple-400 text-sm">Calculations</span>
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
