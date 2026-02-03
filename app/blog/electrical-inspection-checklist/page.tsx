import { Metadata } from "next";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import { BreadcrumbJsonLd, BlogPostingJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Electrical Inspection Checklist: Pass Your Inspection First Time",
  description: "Complete electrical inspection checklist for residential and commercial work. Common code violations, what inspectors look for, rough-in and final inspection preparation tips from professional electricians.",
  keywords: [
    "electrical inspection checklist",
    "electrical inspection",
    "electrical inspection prep",
    "pass electrical inspection",
    "rough-in inspection",
    "final electrical inspection",
    "electrical code violations",
    "what inspectors look for",
    "residential electrical inspection",
    "commercial electrical inspection",
    "electrical inspection tips",
    "fail electrical inspection",
    "NEC inspection requirements",
    "inspection red flags",
    "electrical permit inspection"
  ],
  alternates: {
    canonical: "https://amporalabs.com/blog/electrical-inspection-checklist",
  },
  openGraph: {
    title: "Electrical Inspection Checklist: Pass First Time - Ampora",
    description: "Complete electrical inspection preparation guide with checklists for rough-in and final inspections.",
    url: "https://amporalabs.com/blog/electrical-inspection-checklist",
    type: "article",
  },
};

export default function ElectricalInspectionChecklistPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navigation />
      <div className="pt-20">
        <BreadcrumbJsonLd
          items={[
            { name: "Home", url: "https://amporalabs.com" },
            { name: "Blog", url: "https://amporalabs.com/blog" },
            { name: "Electrical Inspection Checklist", url: "https://amporalabs.com/blog/electrical-inspection-checklist" },
          ]}
        />
        <BlogPostingJsonLd
          headline="Electrical Inspection Checklist: Pass Your Inspection First Time"
          description="Complete electrical inspection checklist covering residential and commercial work with common code violations and preparation tips."
          datePublished="2025-01-05"
          dateModified="2025-01-05"
          url="https://amporalabs.com/blog/electrical-inspection-checklist"
          wordCount={2800}
          keywords={["electrical inspection", "inspection checklist", "code violations", "rough-in inspection", "final inspection"]}
        />

        <article className="max-w-4xl mx-auto px-6 py-12">
          {/* Breadcrumb */}
          <nav className="text-sm text-white/60 mb-8">
            <Link href="/" className="hover:text-white">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/blog" className="hover:text-white">Blog</Link>
            <span className="mx-2">/</span>
            <span className="text-white">Inspection Checklist</span>
          </nav>

          {/* Article Header */}
          <header className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <span className="px-3 py-1 bg-green-600/30 text-green-300 text-sm font-medium rounded-full">
                Inspections
              </span>
              <span className="text-white/40 text-sm">15 min read</span>
              <span className="text-white/40 text-sm">January 5, 2025</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6 leading-tight">
              Electrical Inspection Checklist: Pass Your Inspection First Time
            </h1>
            <p className="text-xl text-white/70">
              Don't let common mistakes delay your project. This comprehensive checklist covers everything inspectors look for during rough-in and final electrical inspections.
            </p>
          </header>

          {/* Table of Contents */}
          <div className="bg-white/5 rounded-2xl p-6 mb-12">
            <h2 className="font-display font-bold mb-4">In This Guide</h2>
            <ul className="space-y-2 text-white/70">
              <li><a href="#before-inspection" className="hover:text-purple-400">→ Before Calling for Inspection</a></li>
              <li><a href="#rough-in-checklist" className="hover:text-purple-400">→ Rough-In Inspection Checklist</a></li>
              <li><a href="#final-checklist" className="hover:text-purple-400">→ Final Inspection Checklist</a></li>
              <li><a href="#common-violations" className="hover:text-purple-400">→ Top 15 Common Code Violations</a></li>
              <li><a href="#inspector-tips" className="hover:text-purple-400">→ What Inspectors Actually Look For</a></li>
              <li><a href="#if-you-fail" className="hover:text-purple-400">→ What to Do If You Fail</a></li>
            </ul>
          </div>

          {/* Article Content */}
          <div className="prose prose-invert prose-lg max-w-none">

            <section id="before-inspection" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Before Calling for Inspection</h2>
              <p className="text-white/80 mb-4">
                Proper preparation prevents failed inspections. Before you schedule an inspection, verify:
              </p>
              <div className="grid md:grid-cols-2 gap-4 my-6">
                <div className="bg-white/5 rounded-xl p-6">
                  <h3 className="font-semibold text-purple-400 mb-3">Administrative Items</h3>
                  <ul className="space-y-2 text-white/70 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-green-400">□</span>
                      <span>Permit posted and visible on site</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-400">□</span>
                      <span>Approved plans on site</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-400">□</span>
                      <span>Previous inspections approved (if applicable)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-400">□</span>
                      <span>Address clearly visible from street</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-400">□</span>
                      <span>Safe access to work area</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-white/5 rounded-xl p-6">
                  <h3 className="font-semibold text-cyan-400 mb-3">Work Completion</h3>
                  <ul className="space-y-2 text-white/70 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-green-400">□</span>
                      <span>All work for this phase complete</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-400">□</span>
                      <span>Work area clean and accessible</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-400">□</span>
                      <span>All boxes accessible (not buried)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-400">□</span>
                      <span>Panel cover off (for inspection)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-400">□</span>
                      <span>Lights on/working (final inspection)</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section id="rough-in-checklist" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Rough-In Inspection Checklist</h2>
              <p className="text-white/80 mb-4">
                The rough-in inspection happens after wiring is installed but before walls are closed. This is your chance to fix issues before they're hidden behind drywall.
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-3">Box Installation</h3>
              <div className="bg-white/5 rounded-xl p-6 my-4">
                <ul className="space-y-2 text-white/70">
                  <li className="flex items-start gap-2">
                    <span className="text-green-400">□</span>
                    <span>Boxes flush with or extending past finished wall surface</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400">□</span>
                    <span>Boxes secured within 8" of cable entry (NM cable)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400">□</span>
                    <span>Box fill calculations within limits</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400">□</span>
                    <span>Proper box type for application (metal vs plastic)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400">□</span>
                    <span>Ceiling fan boxes rated for fan support</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400">□</span>
                    <span>Heavy fixture boxes properly supported</span>
                  </li>
                </ul>
              </div>

              <h3 className="text-xl font-semibold mt-6 mb-3">Cable/Wire Installation</h3>
              <div className="bg-white/5 rounded-xl p-6 my-4">
                <ul className="space-y-2 text-white/70">
                  <li className="flex items-start gap-2">
                    <span className="text-green-400">□</span>
                    <span>NM cable stapled within 12" of boxes, every 4.5' thereafter</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400">□</span>
                    <span>Cables protected from physical damage (nail plates on studs)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400">□</span>
                    <span>No damaged cable sheathing</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400">□</span>
                    <span>Correct wire gauge for circuit rating</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400">□</span>
                    <span>Cable connectors at all box entries</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400">□</span>
                    <span>At least 6" of conductor at each box for connections</span>
                  </li>
                </ul>
              </div>

              <h3 className="text-xl font-semibold mt-6 mb-3">Grounding</h3>
              <div className="bg-white/5 rounded-xl p-6 my-4">
                <ul className="space-y-2 text-white/70">
                  <li className="flex items-start gap-2">
                    <span className="text-green-400">□</span>
                    <span>Grounding electrode conductor installed</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400">□</span>
                    <span>Ground rods driven (if required)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400">□</span>
                    <span>Bonding to water pipe/gas pipe (if applicable)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400">□</span>
                    <span>Equipment grounding conductor in all circuits</span>
                  </li>
                </ul>
              </div>

              <h3 className="text-xl font-semibold mt-6 mb-3">Panel/Service</h3>
              <div className="bg-white/5 rounded-xl p-6 my-4">
                <ul className="space-y-2 text-white/70">
                  <li className="flex items-start gap-2">
                    <span className="text-green-400">□</span>
                    <span>Panel location compliant (not in bathrooms, clothes closets)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400">□</span>
                    <span>Working space clearances met (30" wide, 36" deep, 78" high)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400">□</span>
                    <span>Service entrance conductors properly sized</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400">□</span>
                    <span>Neutral/ground separation correct (main vs sub-panel)</span>
                  </li>
                </ul>
              </div>
            </section>

            <section id="final-checklist" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Final Inspection Checklist</h2>
              <p className="text-white/80 mb-4">
                The final inspection verifies everything is complete, safe, and working. All devices must be installed and energized.
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-3">Receptacles</h3>
              <div className="bg-white/5 rounded-xl p-6 my-4">
                <ul className="space-y-2 text-white/70">
                  <li className="flex items-start gap-2">
                    <span className="text-green-400">□</span>
                    <span>All receptacles installed and covered</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400">□</span>
                    <span>GFCI receptacles in required locations (kitchen, bath, garage, outdoor)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400">□</span>
                    <span>GFCI protection functioning (test button works)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400">□</span>
                    <span>Tamper-resistant receptacles in dwelling units</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400">□</span>
                    <span>Weather-resistant covers on outdoor receptacles</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400">□</span>
                    <span>Proper polarity on all receptacles</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400">□</span>
                    <span>Receptacle spacing meets NEC 210.52 requirements</span>
                  </li>
                </ul>
              </div>

              <h3 className="text-xl font-semibold mt-6 mb-3">Switches & Lighting</h3>
              <div className="bg-white/5 rounded-xl p-6 my-4">
                <ul className="space-y-2 text-white/70">
                  <li className="flex items-start gap-2">
                    <span className="text-green-400">□</span>
                    <span>All switches installed and operational</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400">□</span>
                    <span>Three-way switches wired correctly</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400">□</span>
                    <span>Lighting outlets in required locations</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400">□</span>
                    <span>Stairway lighting with 3-way switches at each level</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400">□</span>
                    <span>Exterior lighting at entrances</span>
                  </li>
                </ul>
              </div>

              <h3 className="text-xl font-semibold mt-6 mb-3">Panel Completion</h3>
              <div className="bg-white/5 rounded-xl p-6 my-4">
                <ul className="space-y-2 text-white/70">
                  <li className="flex items-start gap-2">
                    <span className="text-green-400">□</span>
                    <span>AFCI breakers on required circuits</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400">□</span>
                    <span>All circuits properly labeled</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400">□</span>
                    <span>No double-tapped breakers (unless rated)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400">□</span>
                    <span>Proper breaker type for panel</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400">□</span>
                    <span>All knockouts covered</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400">□</span>
                    <span>Dead-front cover installed</span>
                  </li>
                </ul>
              </div>

              <h3 className="text-xl font-semibold mt-6 mb-3">Appliances & Special Equipment</h3>
              <div className="bg-white/5 rounded-xl p-6 my-4">
                <ul className="space-y-2 text-white/70">
                  <li className="flex items-start gap-2">
                    <span className="text-green-400">□</span>
                    <span>Range/oven properly connected</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400">□</span>
                    <span>Dryer receptacle installed (if electric)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400">□</span>
                    <span>HVAC disconnect accessible and visible</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400">□</span>
                    <span>Water heater disconnect (if required)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400">□</span>
                    <span>Smoke detectors installed and working</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400">□</span>
                    <span>CO detectors installed (if required)</span>
                  </li>
                </ul>
              </div>
            </section>

            <section id="common-violations" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Top 15 Common Code Violations</h2>
              <p className="text-white/80 mb-4">
                These are the most frequent reasons electricians fail inspections. Avoid these mistakes:
              </p>

              <div className="space-y-3 my-6">
                {[
                  { num: 1, title: "Missing GFCI protection", desc: "Especially kitchens (within 6' of sink), bathrooms, garages, outdoor" },
                  { num: 2, title: "Missing AFCI protection", desc: "Required on bedroom, living room, kitchen circuits in dwelling units" },
                  { num: 3, title: "Improper box fill", desc: "Too many conductors/devices in box without calculating fill" },
                  { num: 4, title: "Missing nail plates", desc: "Cables within 1.25\" of stud edge need protection" },
                  { num: 5, title: "Inadequate support/securing", desc: "NM cable not stapled within 12\" of box, every 4.5' along run" },
                  { num: 6, title: "Wrong wire gauge", desc: "Using 14 AWG on 20A circuit or undersized conductors" },
                  { num: 7, title: "Missing tamper-resistant receptacles", desc: "Required in all dwelling units at 15A and 20A receptacles" },
                  { num: 8, title: "Improper grounding", desc: "Missing equipment grounds, improper bonding, bootleg grounds" },
                  { num: 9, title: "Panel working space violations", desc: "Not maintaining 30\" x 36\" x 78\" clearance" },
                  { num: 10, title: "Missing circuit labels", desc: "All circuits must be legibly identified" },
                  { num: 11, title: "Kitchen circuit errors", desc: "Not providing required two 20A small appliance circuits" },
                  { num: 12, title: "Bathroom circuit issues", desc: "Sharing bathroom receptacle with other rooms improperly" },
                  { num: 13, title: "Missing outdoor receptacles", desc: "Dwelling units need front and back outdoor receptacles" },
                  { num: 14, title: "Smoke/CO detector issues", desc: "Missing interconnection, wrong locations, or not hardwired" },
                  { num: 15, title: "Improper device connections", desc: "Backstabbing instead of side terminals, poor splices" },
                ].map((item) => (
                  <div key={item.num} className="bg-red-900/10 border border-red-500/20 rounded-xl p-4">
                    <div className="flex items-start gap-3">
                      <span className="text-red-400 font-bold text-lg">{item.num}.</span>
                      <div>
                        <h3 className="font-semibold text-white">{item.title}</h3>
                        <p className="text-white/60 text-sm mt-1">{item.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section id="inspector-tips" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">What Inspectors Actually Look For</h2>
              <p className="text-white/80 mb-4">
                Understanding an inspector's perspective helps you prepare better:
              </p>

              <div className="grid md:grid-cols-2 gap-6 my-6">
                <div className="bg-green-900/20 rounded-xl p-6">
                  <h3 className="font-semibold text-green-400 mb-3">Things That Impress Inspectors</h3>
                  <ul className="space-y-2 text-white/70 text-sm">
                    <li>• Clean, professional workmanship</li>
                    <li>• Organized panel with neat wire routing</li>
                    <li>• Proper labeling throughout</li>
                    <li>• Plans and permit readily available</li>
                    <li>• Ready for inspection (lights on, panels open)</li>
                    <li>• Consistent spacing and alignment</li>
                  </ul>
                </div>
                <div className="bg-red-900/20 rounded-xl p-6">
                  <h3 className="font-semibold text-red-400 mb-3">Red Flags That Trigger Closer Scrutiny</h3>
                  <ul className="space-y-2 text-white/70 text-sm">
                    <li>• Sloppy workmanship</li>
                    <li>• Missing permits or plans</li>
                    <li>• Previous failed inspections</li>
                    <li>• Work not ready for inspection</li>
                    <li>• Defensive attitude</li>
                    <li>• Evidence of shortcuts</li>
                  </ul>
                </div>
              </div>

              <div className="bg-purple-900/30 rounded-xl p-6 my-6">
                <h3 className="font-semibold text-purple-400 mb-3">Pro Tip: The Walk-Through</h3>
                <p className="text-white/70">
                  Before calling for inspection, walk the job yourself with a code book or the Ampora app. Check every box, every device, every connection. It's easier to fix issues before the inspector arrives than to reschedule and delay the project.
                </p>
              </div>
            </section>

            <section id="if-you-fail" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">What to Do If You Fail</h2>
              <p className="text-white/80 mb-4">
                Failed inspections happen. Here's how to handle it professionally:
              </p>
              <ol className="list-decimal list-inside text-white/70 space-y-3 mb-4">
                <li><strong>Get a detailed correction list</strong> - Ask the inspector to specify exactly what needs to be fixed with code references.</li>
                <li><strong>Don't argue on site</strong> - If you disagree, there's an appeals process. Arguing rarely changes the outcome.</li>
                <li><strong>Fix all items listed</strong> - Address every deficiency, not just the major ones.</li>
                <li><strong>Look for similar issues elsewhere</strong> - If you missed GFCI in one bathroom, check all bathrooms.</li>
                <li><strong>Schedule reinspection promptly</strong> - Don't let corrections sit; schedule as soon as work is complete.</li>
                <li><strong>Document what you fixed</strong> - Take photos showing corrections were made.</li>
              </ol>
            </section>

            {/* CTA Section */}
            <section className="bg-gradient-to-r from-purple-900/30 to-cyan-900/30 rounded-2xl p-8 my-12">
              <h2 className="text-2xl font-display font-bold mb-4 text-center">
                Verify Code Compliance On-Site
              </h2>
              <p className="text-white/70 mb-6 text-center">
                Ampora's AI assistant answers code questions instantly. Check GFCI requirements, verify box fill, and confirm your work meets code before the inspector arrives.
              </p>
              <div className="flex justify-center">
                <a
                  href="https://apps.apple.com/us/app/ampora/id6753693522"
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
