import { Metadata } from "next";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import { BlogPostingJsonLd, BreadcrumbJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Final Electrical Inspection: Common Failures & How to Prepare",
  description: "Complete guide to passing your final electrical inspection. Learn what inspectors look for during the cover-up and final inspection, the most common inspection failures including missing cover plates, GFCI/AFCI violations, panel labeling issues, grounding deficiencies, and working clearance problems. Includes a room-by-room checklist and tips from experienced inspectors.",
  keywords: [
    "final electrical inspection",
    "electrical inspection checklist",
    "final inspection failures",
    "electrical cover up inspection",
    "what inspectors look for",
    "final inspection preparation",
    "electrical inspection tips",
    "pass electrical inspection",
    "inspection code violations",
    "final inspection requirements"
  ],
  alternates: {
    canonical: "https://amporalabs.com/blog/final-electrical-inspection-guide",
  },
  openGraph: {
    title: "Final Electrical Inspection: Common Failures & How to Prepare - Ampora",
    description: "Master your final electrical inspection with this comprehensive guide covering common failures, inspector checklists, preparation tips, and the re-inspection process.",
    url: "https://amporalabs.com/blog/final-electrical-inspection-guide",
    type: "article",
    publishedTime: "2026-03-04",
  },
};

function HeroIllustration() {
  return (
    <svg viewBox="0 0 400 180" className="w-full h-40 md:h-48" aria-label="Inspection checklist with pass and fail icons">
      {/* Background */}
      <rect x="10" y="10" width="380" height="160" rx="4" fill="#1f2937" stroke="#374151" strokeWidth="1"/>

      {/* Clipboard */}
      <rect x="30" y="20" width="160" height="140" rx="4" fill="#111827" stroke="#4b5563" strokeWidth="1.5"/>
      <rect x="80" y="14" width="40" height="14" rx="3" fill="#4b5563"/>
      <circle cx="100" cy="21" r="3" fill="#1f2937" stroke="#6b7280" strokeWidth="1"/>

      {/* Checklist Title */}
      <text x="110" y="50" textAnchor="middle" fill="#22d3ee" fontSize="7" fontWeight="bold">FINAL INSPECTION</text>
      <line x1="50" y1="55" x2="170" y2="55" stroke="#374151" strokeWidth="0.5"/>

      {/* Checklist Items - Pass */}
      <rect x="44" y="62" width="8" height="8" rx="1.5" fill="#064e3b" stroke="#10b981" strokeWidth="1"/>
      <path d="M46 66.5 L48 68.5 L51 64" stroke="#10b981" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
      <text x="58" y="69" fill="#9ca3af" fontSize="5.5">Cover plates installed</text>

      <rect x="44" y="76" width="8" height="8" rx="1.5" fill="#064e3b" stroke="#10b981" strokeWidth="1"/>
      <path d="M46 80.5 L48 82.5 L51 78" stroke="#10b981" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
      <text x="58" y="83" fill="#9ca3af" fontSize="5.5">GFCI protection</text>

      <rect x="44" y="90" width="8" height="8" rx="1.5" fill="#064e3b" stroke="#10b981" strokeWidth="1"/>
      <path d="M46 94.5 L48 96.5 L51 92" stroke="#10b981" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
      <text x="58" y="97" fill="#9ca3af" fontSize="5.5">Panel directory complete</text>

      {/* Checklist Items - Fail */}
      <rect x="44" y="104" width="8" height="8" rx="1.5" fill="#7f1d1d" stroke="#ef4444" strokeWidth="1"/>
      <path d="M46 106 L50 110 M50 106 L46 110" stroke="#ef4444" strokeWidth="1.5" strokeLinecap="round"/>
      <text x="58" y="111" fill="#9ca3af" fontSize="5.5">Working clearance</text>

      <rect x="44" y="118" width="8" height="8" rx="1.5" fill="#7f1d1d" stroke="#ef4444" strokeWidth="1"/>
      <path d="M46 120 L50 124 M50 120 L46 124" stroke="#ef4444" strokeWidth="1.5" strokeLinecap="round"/>
      <text x="58" y="125" fill="#9ca3af" fontSize="5.5">Smoke detectors</text>

      <rect x="44" y="132" width="8" height="8" rx="1.5" fill="#064e3b" stroke="#10b981" strokeWidth="1"/>
      <path d="M46 136.5 L48 138.5 L51 134" stroke="#10b981" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
      <text x="58" y="139" fill="#9ca3af" fontSize="5.5">Grounding/bonding</text>

      {/* Pass/Fail Summary Panel */}
      <g transform="translate(210, 22)">
        <text x="75" y="10" textAnchor="middle" fill="#22d3ee" fontSize="7" fontWeight="bold">INSPECTION RESULT</text>

        {/* Pass circle */}
        <g transform="translate(20, 22)">
          <circle cx="30" cy="35" r="30" fill="#064e3b" fillOpacity="0.5" stroke="#10b981" strokeWidth="2"/>
          <path d="M16 35 L26 45 L44 25" stroke="#10b981" strokeWidth="3.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
          <text x="30" y="75" textAnchor="middle" fill="#10b981" fontSize="7" fontWeight="bold">PASSED</text>
        </g>

        {/* Fail circle */}
        <g transform="translate(90, 22)">
          <circle cx="30" cy="35" r="30" fill="#7f1d1d" fillOpacity="0.5" stroke="#ef4444" strokeWidth="2" strokeDasharray="4 2"/>
          <path d="M19 24 L41 46 M41 24 L19 46" stroke="#ef4444" strokeWidth="3.5" strokeLinecap="round"/>
          <text x="30" y="75" textAnchor="middle" fill="#ef4444" fontSize="7" fontWeight="bold">FAILED</text>
        </g>

        {/* Stats */}
        <text x="75" y="115" textAnchor="middle" fill="#9ca3af" fontSize="5">4 of 6 items passed</text>
        <rect x="20" y="120" width="110" height="6" rx="3" fill="#374151"/>
        <rect x="20" y="120" width="73" height="6" rx="3" fill="#10b981"/>
        <text x="75" y="138" textAnchor="middle" fill="#fbbf24" fontSize="6" fontWeight="bold">CORRECTION NOTICE ISSUED</text>
      </g>
    </svg>
  );
}

export default function FinalElectricalInspectionGuidePage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navigation />
      <div className="pt-20">
        <BreadcrumbJsonLd
          items={[
            { name: "Home", url: "https://amporalabs.com" },
            { name: "Blog", url: "https://amporalabs.com/blog" },
            { name: "Final Electrical Inspection Guide", url: "https://amporalabs.com/blog/final-electrical-inspection-guide" },
          ]}
        />
        <BlogPostingJsonLd
          headline="Final Electrical Inspection: Common Failures & How to Prepare"
          description="Complete guide to passing your final electrical inspection covering common failures, what inspectors look for, room-by-room checklists, and preparation tips."
          datePublished="2026-03-04"
          dateModified="2026-03-04"
          url="https://amporalabs.com/blog/final-electrical-inspection-guide"
          wordCount={5200}
          keywords={["final electrical inspection", "inspection checklist", "inspection failures", "electrical code violations", "cover-up inspection"]}
        />

        <article className="max-w-4xl mx-auto px-6 py-12">
          {/* Breadcrumb */}
          <nav className="text-sm text-white/60 mb-8">
            <Link href="/" className="hover:text-white">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/blog" className="hover:text-white">Blog</Link>
            <span className="mx-2">/</span>
            <span className="text-white">Final Electrical Inspection Guide</span>
          </nav>

          {/* Article Header */}
          <header className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <span className="px-3 py-1 bg-green-600/20 text-green-300 text-sm font-medium rounded-full">
                Inspections
              </span>
              <span className="text-white/40 text-sm">18 min read</span>
              <span className="text-white/40 text-sm">March 4, 2026</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6 leading-tight">
              Final Electrical Inspection: Common Failures & How to Prepare
            </h1>
            <p className="text-xl text-white/70">
              The final electrical inspection is the last hurdle before a project receives its certificate of occupancy or completion sign-off. This guide covers everything you need to know about what inspectors look for, the most common reasons for failure, a room-by-room preparation checklist, and what to do if you don&apos;t pass on the first attempt.
            </p>
          </header>

          <div className="mb-12 bg-gradient-to-br from-green-900/20 to-cyan-900/20 rounded-2xl p-6 border border-white/10">
            <HeroIllustration />
          </div>

          {/* Pro Tip Callout */}
          <div className="bg-green-900/40 border-2 border-green-500/50 rounded-2xl p-6 mb-12">
            <div className="flex items-start gap-4">
              <div className="text-3xl">&#128161;</div>
              <div>
                <h3 className="font-display font-bold text-lg mb-2 text-green-400">Pro Tip</h3>
                <p className="text-white/80 text-sm">
                  The best way to pass your final inspection is to treat every stage of the project as if the inspector is watching. If your rough-in was clean and code-compliant, your final inspection will be straightforward. Most final inspection failures stem from issues that should have been caught during the <Link href="/blog/rough-in-inspection-preparation" className="text-green-400 underline hover:text-green-300">rough-in inspection</Link> or from last-minute oversights during the finish phase.
                </p>
              </div>
            </div>
          </div>

          {/* Table of Contents */}
          <div className="bg-white/5 rounded-2xl p-6 mb-12">
            <h2 className="font-display font-bold mb-4">In This Guide</h2>
            <ul className="space-y-2 text-white/70">
              <li><a href="#rough-in-vs-final" className="hover:text-purple-400">Rough-In vs. Final Inspection: Key Differences</a></li>
              <li><a href="#what-happens" className="hover:text-purple-400">What Happens During a Final Electrical Inspection</a></li>
              <li><a href="#common-failures" className="hover:text-purple-400">Common Final Inspection Failures</a></li>
              <li><a href="#checklist-by-area" className="hover:text-purple-400">Final Inspection Checklist by Area</a></li>
              <li><a href="#preparing-for-inspector" className="hover:text-purple-400">How to Prepare for the Inspector</a></li>
              <li><a href="#what-if-you-fail" className="hover:text-purple-400">What to Do If You Fail</a></li>
              <li><a href="#reinspection-process" className="hover:text-purple-400">The Re-Inspection Process</a></li>
              <li><a href="#inspector-tips" className="hover:text-purple-400">Tips from Experienced Inspectors</a></li>
              <li><a href="#faq" className="hover:text-purple-400">Frequently Asked Questions</a></li>
            </ul>
          </div>

          {/* Article Content */}
          <div className="prose prose-invert prose-lg max-w-none">

            <section id="rough-in-vs-final" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Rough-In vs. Final Inspection: Key Differences</h2>
              <p className="text-white/80 mb-4">
                Understanding the distinction between the <strong>rough-in inspection</strong> and the <strong>final inspection</strong> is essential for preparing correctly. Each inspection has a different focus, and the inspector is looking for different things at each stage.
              </p>

              <div className="grid md:grid-cols-2 gap-6 my-6">
                <div className="bg-white/5 rounded-xl p-6 border border-cyan-500/20">
                  <h3 className="font-semibold text-cyan-400 mb-3">Rough-In Inspection</h3>
                  <p className="text-white/70 text-sm mb-3">Performed before walls are closed up</p>
                  <ul className="text-white/60 text-sm space-y-2">
                    <li><strong>Timing:</strong> After wiring is installed, before drywall/insulation</li>
                    <li><strong>Focus:</strong> Wire routing, box placement, cable support, derating</li>
                    <li><strong>Access:</strong> All wiring is visible and accessible</li>
                    <li><strong>Boxes:</strong> Correct fill calculations, proper mounting</li>
                    <li><strong>Grounding:</strong> Equipment grounding conductor paths verified</li>
                    <li><strong>Also called:</strong> &quot;Cover-up&quot; inspection in some jurisdictions</li>
                  </ul>
                </div>
                <div className="bg-white/5 rounded-xl p-6 border border-green-500/20">
                  <h3 className="font-semibold text-green-400 mb-3">Final Inspection</h3>
                  <p className="text-white/70 text-sm mb-3">Performed after all work is complete</p>
                  <ul className="text-white/60 text-sm space-y-2">
                    <li><strong>Timing:</strong> After devices, fixtures, and panel are finished</li>
                    <li><strong>Focus:</strong> Devices installed, circuits tested, panel complete</li>
                    <li><strong>Access:</strong> Only finished work is visible</li>
                    <li><strong>Devices:</strong> GFCI/AFCI protection, cover plates, labeling</li>
                    <li><strong>Testing:</strong> Functional tests of GFCI, AFCI, smoke detectors</li>
                    <li><strong>Also called:</strong> &quot;Final trim&quot; or &quot;finish&quot; inspection</li>
                  </ul>
                </div>
              </div>

              <p className="text-white/80 mb-4">
                In some jurisdictions, the <strong>cover-up inspection</strong> is a separate step that occurs after insulation is installed but before drywall. This specifically verifies that insulation does not compromise wire ampacity derating and that vapor barriers have not damaged wiring. Check with your local AHJ (Authority Having Jurisdiction) to confirm which inspections are required and in what order. For a deeper dive into the rough-in process, see our <Link href="/blog/rough-in-inspection-preparation" className="text-green-400 underline hover:text-green-300">rough-in inspection preparation guide</Link>.
              </p>

              <div className="bg-white/5 rounded-xl p-6 my-6">
                <h4 className="font-semibold text-white mb-3">Typical Residential Inspection Sequence</h4>
                <div className="flex flex-col md:flex-row gap-2 text-sm">
                  <div className="bg-cyan-900/30 rounded-lg p-3 flex-1 text-center">
                    <p className="font-bold text-cyan-400">1. Temporary Power</p>
                    <p className="text-white/60 text-xs">Service & temp panel</p>
                  </div>
                  <div className="hidden md:flex items-center text-white/30">&#8594;</div>
                  <div className="bg-cyan-900/30 rounded-lg p-3 flex-1 text-center">
                    <p className="font-bold text-cyan-400">2. Underground</p>
                    <p className="text-white/60 text-xs">Before backfill</p>
                  </div>
                  <div className="hidden md:flex items-center text-white/30">&#8594;</div>
                  <div className="bg-cyan-900/30 rounded-lg p-3 flex-1 text-center">
                    <p className="font-bold text-cyan-400">3. Rough-In</p>
                    <p className="text-white/60 text-xs">Before drywall</p>
                  </div>
                  <div className="hidden md:flex items-center text-white/30">&#8594;</div>
                  <div className="bg-cyan-900/30 rounded-lg p-3 flex-1 text-center">
                    <p className="font-bold text-cyan-400">4. Cover-Up</p>
                    <p className="text-white/60 text-xs">After insulation</p>
                  </div>
                  <div className="hidden md:flex items-center text-white/30">&#8594;</div>
                  <div className="bg-green-900/30 rounded-lg p-3 flex-1 text-center border border-green-500/30">
                    <p className="font-bold text-green-400">5. Final</p>
                    <p className="text-white/60 text-xs">All work complete</p>
                  </div>
                </div>
              </div>
            </section>

            <section id="what-happens" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">What Happens During a Final Electrical Inspection</h2>
              <p className="text-white/80 mb-4">
                During the final electrical inspection, the inspector walks the entire project verifying that all electrical work matches the approved plans and complies with the adopted edition of the NEC. Here is the general process most inspectors follow:
              </p>

              <div className="space-y-4 my-6">
                <div className="bg-white/5 rounded-xl p-4 flex items-start gap-4">
                  <span className="bg-green-600 text-white text-sm font-bold px-3 py-1 rounded-full">1</span>
                  <div>
                    <p className="font-semibold text-white">Plan Review at the Panel</p>
                    <p className="text-white/60 text-sm">The inspector starts at the main electrical panel, comparing the panel schedule and circuit directory against the approved plans. They verify the panel is properly labeled per <Link href="/blog/panel-schedule-labeling-nec-408" className="text-green-400 underline hover:text-green-300">NEC 408.4</Link>, that all breakers are identified, and that the available fault current label is in place for service equipment.</p>
                  </div>
                </div>
                <div className="bg-white/5 rounded-xl p-4 flex items-start gap-4">
                  <span className="bg-green-600 text-white text-sm font-bold px-3 py-1 rounded-full">2</span>
                  <div>
                    <p className="font-semibold text-white">Working Space Verification</p>
                    <p className="text-white/60 text-sm">The inspector checks that the required working clearance in front of the panel is maintained per NEC 110.26. For a typical 120/240V residential panel, this means 3 feet of clear space in front, 30 inches wide, and headroom to the ceiling or 6.5 feet, whichever is less. Nothing can be stored in this space.</p>
                  </div>
                </div>
                <div className="bg-white/5 rounded-xl p-4 flex items-start gap-4">
                  <span className="bg-green-600 text-white text-sm font-bold px-3 py-1 rounded-full">3</span>
                  <div>
                    <p className="font-semibold text-white">Room-by-Room Walkthrough</p>
                    <p className="text-white/60 text-sm">The inspector walks every room, checking that all receptacles, switches, and fixtures are installed, have cover plates, and are properly grounded. They verify that required GFCI and AFCI protection is in place per the <Link href="/blog/gfci-vs-afci-requirements" className="text-green-400 underline hover:text-green-300">current NEC requirements</Link>.</p>
                  </div>
                </div>
                <div className="bg-white/5 rounded-xl p-4 flex items-start gap-4">
                  <span className="bg-green-600 text-white text-sm font-bold px-3 py-1 rounded-full">4</span>
                  <div>
                    <p className="font-semibold text-white">Functional Testing</p>
                    <p className="text-white/60 text-sm">The inspector tests GFCI receptacles and breakers using the TEST button, verifies AFCI breakers trip correctly, tests smoke and CO detector interconnection, checks that outdoor lighting and receptacles function, and may use a receptacle tester to check polarity and grounding.</p>
                  </div>
                </div>
                <div className="bg-white/5 rounded-xl p-4 flex items-start gap-4">
                  <span className="bg-green-600 text-white text-sm font-bold px-3 py-1 rounded-full">5</span>
                  <div>
                    <p className="font-semibold text-white">Exterior and Service Check</p>
                    <p className="text-white/60 text-sm">The inspector examines the service entrance, meter base, weatherhead, grounding electrode system, and any outdoor receptacles or lighting. They verify that the service meets the approved design and that the grounding electrode conductor is properly installed and bonded.</p>
                  </div>
                </div>
                <div className="bg-white/5 rounded-xl p-4 flex items-start gap-4">
                  <span className="bg-green-600 text-white text-sm font-bold px-3 py-1 rounded-full">6</span>
                  <div>
                    <p className="font-semibold text-white">Documentation and Result</p>
                    <p className="text-white/60 text-sm">The inspector documents their findings on an inspection report. If all items pass, they issue an approval (green tag or signed card). If corrections are needed, they issue a correction notice listing each deficiency with the applicable code section.</p>
                  </div>
                </div>
              </div>

              <div className="bg-white/5 rounded-xl p-6 my-6">
                <h4 className="font-semibold text-cyan-400 mb-3">What the Inspector Expects You to Have Ready</h4>
                <ul className="text-white/70 space-y-1 text-sm">
                  <li>&#8226; Approved plans and permit posted at the job site</li>
                  <li>&#8226; All electrical work 100% complete (no &quot;almost done&quot; items)</li>
                  <li>&#8226; Panel energized and all circuits labeled</li>
                  <li>&#8226; All cover plates and trim rings installed</li>
                  <li>&#8226; Smoke detectors and CO detectors installed and functional</li>
                  <li>&#8226; All areas accessible (move ladders, materials, and debris)</li>
                  <li>&#8226; Previous inspection approvals (rough-in card) available</li>
                </ul>
              </div>
            </section>

            <section id="common-failures" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Common Final Inspection Failures</h2>
              <p className="text-white/80 mb-4">
                While every AHJ and inspector has their own focus areas, certain deficiencies appear on correction notices far more often than others. Understanding these common failures &mdash; and checking for them yourself before the inspector arrives &mdash; is the single most effective way to pass on the first attempt. For a comprehensive pre-inspection walkthrough, see our <Link href="/blog/electrical-inspection-checklist" className="text-green-400 underline hover:text-green-300">electrical inspection checklist</Link>.
              </p>

              <div className="space-y-6 my-6">
                <div className="bg-red-900/20 rounded-xl p-6 border border-red-500/20">
                  <h3 className="font-semibold text-red-400 mb-3">1. Missing or Incorrect Cover Plates</h3>
                  <p className="text-white/70 text-sm mb-3">
                    This is the number one cause of final inspection failures, and it is entirely preventable. Every junction box, switch box, receptacle box, and blank box must have a cover plate or device plate installed. NEC 314.25 requires that boxes have covers, and NEC 406.6 requires receptacle faceplates.
                  </p>
                  <div className="bg-white/5 rounded-lg p-4">
                    <p className="text-white/60 text-sm"><strong>Common issues:</strong></p>
                    <ul className="text-white/60 text-sm space-y-1 mt-1">
                      <li>&#8226; Blank boxes in attics, garages, or basements left uncovered</li>
                      <li>&#8226; Junction boxes hidden above ceilings without covers</li>
                      <li>&#8226; Damaged or cracked cover plates not replaced</li>
                      <li>&#8226; Weatherproof covers missing on outdoor boxes</li>
                      <li>&#8226; In-use covers required on wet-location outdoor receptacles (NEC 406.9(B))</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-red-900/20 rounded-xl p-6 border border-red-500/20">
                  <h3 className="font-semibold text-red-400 mb-3">2. GFCI/AFCI Protection Not Installed Where Required</h3>
                  <p className="text-white/70 text-sm mb-3">
                    GFCI and AFCI requirements have expanded significantly with each NEC code cycle. Many electricians, especially those who learned on older editions, miss newly required locations. Under the 2020 and 2023 NEC, <Link href="/blog/gfci-vs-afci-requirements" className="text-green-400 underline hover:text-green-300">GFCI protection is required for virtually all 125V, 15A, and 20A receptacles</Link> in dwelling units (NEC 210.8).
                  </p>
                  <div className="grid md:grid-cols-2 gap-4 mt-3">
                    <div className="bg-white/5 rounded-lg p-4">
                      <p className="text-cyan-400 text-sm font-semibold mb-2">GFCI Required Locations (NEC 210.8)</p>
                      <ul className="text-white/60 text-sm space-y-1">
                        <li>&#8226; Bathrooms</li>
                        <li>&#8226; Kitchens (all countertop receptacles)</li>
                        <li>&#8226; Garages and accessory buildings</li>
                        <li>&#8226; Outdoors</li>
                        <li>&#8226; Crawl spaces and unfinished basements</li>
                        <li>&#8226; Laundry areas</li>
                        <li>&#8226; Within 6 ft of any sink</li>
                        <li>&#8226; Boathouses</li>
                      </ul>
                    </div>
                    <div className="bg-white/5 rounded-lg p-4">
                      <p className="text-purple-400 text-sm font-semibold mb-2">AFCI Required Locations (NEC 210.12)</p>
                      <ul className="text-white/60 text-sm space-y-1">
                        <li>&#8226; Kitchens</li>
                        <li>&#8226; Family rooms and living rooms</li>
                        <li>&#8226; Dining rooms</li>
                        <li>&#8226; Bedrooms</li>
                        <li>&#8226; Hallways and closets</li>
                        <li>&#8226; Laundry areas</li>
                        <li>&#8226; Sunrooms and recreation rooms</li>
                        <li>&#8226; All areas with 120V, 15/20A outlets</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-red-900/20 rounded-xl p-6 border border-red-500/20">
                  <h3 className="font-semibold text-red-400 mb-3">3. Incomplete Panel Labeling</h3>
                  <p className="text-white/70 text-sm mb-3">
                    NEC 408.4 requires every circuit breaker in a panelboard to be legibly identified as to its clear, evident, and specific purpose. Vague labels like &quot;bedroom&quot; or &quot;misc&quot; will be flagged. Each circuit must identify the specific room or area and the type of load it serves.
                  </p>
                  <div className="bg-white/5 rounded-lg p-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <p className="text-red-400 text-sm font-semibold mb-2">Unacceptable Labels</p>
                        <ul className="text-white/60 text-sm space-y-1">
                          <li>&#8226; &quot;Bedroom&quot;</li>
                          <li>&#8226; &quot;Misc&quot;</li>
                          <li>&#8226; &quot;Lights&quot;</li>
                          <li>&#8226; &quot;Kitchen&quot;</li>
                          <li>&#8226; &quot;Spare&quot; (if connected)</li>
                        </ul>
                      </div>
                      <div>
                        <p className="text-green-400 text-sm font-semibold mb-2">Acceptable Labels</p>
                        <ul className="text-white/60 text-sm space-y-1">
                          <li>&#8226; &quot;Master Bedroom Receptacles&quot;</li>
                          <li>&#8226; &quot;Hall Bathroom GFCI&quot;</li>
                          <li>&#8226; &quot;Kitchen Lighting&quot;</li>
                          <li>&#8226; &quot;Kitchen Countertop Receps (East)&quot;</li>
                          <li>&#8226; &quot;Spare&quot; (if truly unused)</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-red-900/20 rounded-xl p-6 border border-red-500/20">
                  <h3 className="font-semibold text-red-400 mb-3">4. Missing Working Clearance (NEC 110.26)</h3>
                  <p className="text-white/70 text-sm mb-3">
                    The required working clearance in front of electrical panels is one of the most commonly violated NEC provisions. Homeowners, general contractors, and even electricians sometimes allow the panel space to become a storage area. At the time of final inspection, the clearance must be unobstructed.
                  </p>
                  <div className="bg-white/5 rounded-lg p-4">
                    <p className="text-white/60 text-sm"><strong>NEC 110.26 Requirements (0-150V to ground):</strong></p>
                    <ul className="text-white/60 text-sm space-y-1 mt-1">
                      <li>&#8226; <strong>Depth:</strong> 3 feet minimum clear space in front of the panel</li>
                      <li>&#8226; <strong>Width:</strong> 30 inches minimum (or width of equipment, whichever is greater)</li>
                      <li>&#8226; <strong>Height:</strong> 6 feet 6 inches (or to ceiling if lower) from the floor</li>
                      <li>&#8226; <strong>Illumination:</strong> Adequate illumination must be provided (NEC 110.26(D))</li>
                      <li>&#8226; No storage of any kind in the required working space</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-red-900/20 rounded-xl p-6 border border-red-500/20">
                  <h3 className="font-semibold text-red-400 mb-3">5. Improper Grounding and Bonding</h3>
                  <p className="text-white/70 text-sm mb-3">
                    Grounding and bonding deficiencies are serious code violations that inspectors pay close attention to. The grounding electrode system, equipment grounding conductors, and bonding connections must all be complete and compliant with NEC Article 250.
                  </p>
                  <div className="bg-white/5 rounded-lg p-4">
                    <p className="text-white/60 text-sm"><strong>Frequent grounding/bonding issues:</strong></p>
                    <ul className="text-white/60 text-sm space-y-1 mt-1">
                      <li>&#8226; Grounding electrode conductor not connected or improperly attached</li>
                      <li>&#8226; Water pipe bond missing (NEC 250.104(A))</li>
                      <li>&#8226; Gas pipe bonding not completed</li>
                      <li>&#8226; Neutral-ground bond in sub-panels (should only be at service)</li>
                      <li>&#8226; Missing ground rod or Ufer (concrete-encased electrode)</li>
                      <li>&#8226; Supplemental electrode required (two rods if single rod exceeds 25 ohms)</li>
                      <li>&#8226; Intersystem bonding termination not installed (NEC 250.94)</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-red-900/20 rounded-xl p-6 border border-red-500/20">
                  <h3 className="font-semibold text-red-400 mb-3">6. Missing or Non-Functional Smoke/CO Detectors</h3>
                  <p className="text-white/70 text-sm mb-3">
                    While smoke and CO detectors fall under the building code (IRC/IBC) and fire code rather than the NEC, electrical inspectors in many jurisdictions verify their installation as part of the final electrical inspection because they are hardwired devices on electrical circuits.
                  </p>
                  <div className="bg-white/5 rounded-lg p-4">
                    <p className="text-white/60 text-sm"><strong>Requirements:</strong></p>
                    <ul className="text-white/60 text-sm space-y-1 mt-1">
                      <li>&#8226; Smoke detectors in every bedroom, outside each sleeping area, and on every level</li>
                      <li>&#8226; CO detectors outside each sleeping area and on every level with fuel-burning appliances</li>
                      <li>&#8226; All units must be interconnected (when one alarms, all alarm)</li>
                      <li>&#8226; Hardwired with battery backup</li>
                      <li>&#8226; Must be tested and functional at time of inspection</li>
                      <li>&#8226; Combination smoke/CO units are acceptable in most jurisdictions</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-red-900/20 rounded-xl p-6 border border-red-500/20">
                  <h3 className="font-semibold text-red-400 mb-3">7. Other Common Failures</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-white/5 rounded-lg p-4">
                      <p className="text-orange-400 text-sm font-semibold mb-2">Device Issues</p>
                      <ul className="text-white/60 text-sm space-y-1">
                        <li>&#8226; Receptacles installed upside down per local requirement</li>
                        <li>&#8226; Tamper-resistant receptacles not used where required (NEC 406.12)</li>
                        <li>&#8226; Weather-resistant receptacles missing outdoors (NEC 406.9)</li>
                        <li>&#8226; Wrong receptacle type for circuit ampacity</li>
                      </ul>
                    </div>
                    <div className="bg-white/5 rounded-lg p-4">
                      <p className="text-orange-400 text-sm font-semibold mb-2">Panel Issues</p>
                      <ul className="text-white/60 text-sm space-y-1">
                        <li>&#8226; Open knockouts (NEC 408.7)</li>
                        <li>&#8226; Double-tapped breakers (unless rated)</li>
                        <li>&#8226; Missing main bonding jumper</li>
                        <li>&#8226; Dead front not properly secured</li>
                      </ul>
                    </div>
                    <div className="bg-white/5 rounded-lg p-4">
                      <p className="text-orange-400 text-sm font-semibold mb-2">Fixture Issues</p>
                      <ul className="text-white/60 text-sm space-y-1">
                        <li>&#8226; Light fixtures not properly supported</li>
                        <li>&#8226; Recessed lights in insulated ceilings not IC-rated</li>
                        <li>&#8226; Bathroom exhaust fan on wrong circuit</li>
                        <li>&#8226; Missing required lighting (closet, stairway, outdoor)</li>
                      </ul>
                    </div>
                    <div className="bg-white/5 rounded-lg p-4">
                      <p className="text-orange-400 text-sm font-semibold mb-2">Wiring Issues</p>
                      <ul className="text-white/60 text-sm space-y-1">
                        <li>&#8226; Exposed NM cable in unfinished areas not protected</li>
                        <li>&#8226; Cable damage from other trades</li>
                        <li>&#8226; Unused conductors not capped with wire nuts</li>
                        <li>&#8226; Missing cable clamps at boxes</li>
                      </ul>
                    </div>
                  </div>
                </div>
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

            <section id="checklist-by-area" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Final Inspection Checklist by Area</h2>
              <p className="text-white/80 mb-4">
                Use this room-by-room checklist to walk the project yourself before the inspector arrives. Addressing every item on this list will dramatically increase your chances of passing on the first attempt.
              </p>

              <div className="space-y-6 my-6">
                <div className="bg-white/5 rounded-xl p-6 border-l-4 border-green-500">
                  <h3 className="font-semibold text-green-400 mb-3">Main Electrical Panel</h3>
                  <ul className="text-white/70 space-y-2 text-sm">
                    <li>&#9744; Panel directory complete with legible, specific labels for every circuit</li>
                    <li>&#9744; All breakers properly seated and torqued</li>
                    <li>&#9744; Dead front cover secured with all screws</li>
                    <li>&#9744; All knockouts filled (no open holes)</li>
                    <li>&#9744; Working clearance maintained (3 ft deep, 30 in wide, 6.5 ft high)</li>
                    <li>&#9744; Adequate illumination at the panel</li>
                    <li>&#9744; Available fault current label on service equipment</li>
                    <li>&#9744; Main bonding jumper installed</li>
                    <li>&#9744; Neutral and ground bars separated in sub-panels</li>
                    <li>&#9744; No double-tapped breakers (unless listed for two conductors)</li>
                  </ul>
                </div>

                <div className="bg-white/5 rounded-xl p-6 border-l-4 border-green-500">
                  <h3 className="font-semibold text-green-400 mb-3">Kitchen</h3>
                  <ul className="text-white/70 space-y-2 text-sm">
                    <li>&#9744; Two 20A small appliance branch circuits for countertop receptacles</li>
                    <li>&#9744; GFCI protection on all countertop receptacles</li>
                    <li>&#9744; AFCI protection on all 120V, 15A/20A circuits</li>
                    <li>&#9744; Receptacle within 2 feet of each side of the sink</li>
                    <li>&#9744; No point along the countertop more than 24 inches from a receptacle</li>
                    <li>&#9744; Dedicated circuits: dishwasher, disposal, refrigerator (check local requirements)</li>
                    <li>&#9744; All cover plates installed and not cracked</li>
                    <li>&#9744; Range/oven circuit correctly sized and connected</li>
                  </ul>
                </div>

                <div className="bg-white/5 rounded-xl p-6 border-l-4 border-green-500">
                  <h3 className="font-semibold text-green-400 mb-3">Bathrooms</h3>
                  <ul className="text-white/70 space-y-2 text-sm">
                    <li>&#9744; GFCI protection on all receptacles</li>
                    <li>&#9744; At least one 20A circuit for bathroom receptacle(s)</li>
                    <li>&#9744; Receptacle within 36 inches of each basin (NEC 210.52(D))</li>
                    <li>&#9744; Exhaust fan installed and functional (if required by code)</li>
                    <li>&#9744; Light fixture over tub/shower rated for damp/wet location</li>
                    <li>&#9744; Switch for exhaust fan accessible</li>
                    <li>&#9744; All cover plates installed</li>
                  </ul>
                </div>

                <div className="bg-white/5 rounded-xl p-6 border-l-4 border-green-500">
                  <h3 className="font-semibold text-green-400 mb-3">Bedrooms &amp; Living Areas</h3>
                  <ul className="text-white/70 space-y-2 text-sm">
                    <li>&#9744; AFCI protection on all 120V, 15A/20A branch circuits</li>
                    <li>&#9744; Receptacle spacing: no point along a wall more than 6 feet from a receptacle</li>
                    <li>&#9744; Tamper-resistant receptacles installed</li>
                    <li>&#9744; Wall-switch-controlled lighting outlet in each room</li>
                    <li>&#9744; Smoke detectors in every bedroom, hardwired and interconnected</li>
                    <li>&#9744; All cover plates installed and flush to wall</li>
                    <li>&#9744; Closet lighting compliant (proper clearance from storage)</li>
                  </ul>
                </div>

                <div className="bg-white/5 rounded-xl p-6 border-l-4 border-green-500">
                  <h3 className="font-semibold text-green-400 mb-3">Garage</h3>
                  <ul className="text-white/70 space-y-2 text-sm">
                    <li>&#9744; GFCI protection on all 125V, 15A/20A receptacles</li>
                    <li>&#9744; At least one receptacle for each car bay</li>
                    <li>&#9744; Receptacle accessible for garage door opener</li>
                    <li>&#9744; Lighting on a switch at the entrance</li>
                    <li>&#9744; NM cable protected where subject to physical damage</li>
                    <li>&#9744; Cover plates on all boxes</li>
                    <li>&#9744; EV charger outlet if required by local code or plans</li>
                  </ul>
                </div>

                <div className="bg-white/5 rounded-xl p-6 border-l-4 border-green-500">
                  <h3 className="font-semibold text-green-400 mb-3">Exterior &amp; Service</h3>
                  <ul className="text-white/70 space-y-2 text-sm">
                    <li>&#9744; GFCI protection on all outdoor receptacles</li>
                    <li>&#9744; Weather-resistant receptacles and in-use covers on all outdoor boxes</li>
                    <li>&#9744; Front and rear outdoor receptacle installed (NEC 210.52(E))</li>
                    <li>&#9744; Outdoor lighting at all entrances</li>
                    <li>&#9744; Service entrance cable/conduit properly secured and sealed</li>
                    <li>&#9744; Meter base properly mounted and sealed</li>
                    <li>&#9744; Grounding electrode system complete (rods, Ufer, water pipe)</li>
                    <li>&#9744; Intersystem bonding termination device installed</li>
                  </ul>
                </div>

                <div className="bg-white/5 rounded-xl p-6 border-l-4 border-green-500">
                  <h3 className="font-semibold text-green-400 mb-3">Laundry</h3>
                  <ul className="text-white/70 space-y-2 text-sm">
                    <li>&#9744; Dedicated 20A circuit for laundry room receptacle(s)</li>
                    <li>&#9744; GFCI protection (within 6 feet of sink if present)</li>
                    <li>&#9744; AFCI protection on the laundry circuit</li>
                    <li>&#9744; Dryer circuit properly sized (30A for residential electric dryer)</li>
                    <li>&#9744; Correct receptacle configuration for dryer (NEMA 14-30R for 4-wire)</li>
                  </ul>
                </div>
              </div>
            </section>

            <section id="preparing-for-inspector" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">How to Prepare for the Inspector</h2>
              <p className="text-white/80 mb-4">
                Passing the final electrical inspection starts well before the inspector arrives. Here are the steps experienced electricians take to prepare for a smooth, one-trip inspection:
              </p>

              <div className="space-y-4 my-6">
                <div className="bg-green-900/20 rounded-xl p-6 border border-green-500/20">
                  <h3 className="font-semibold text-green-400 mb-2">Do Your Own Pre-Inspection Walkthrough</h3>
                  <p className="text-white/70 text-sm">
                    Walk every room with the checklist above and a receptacle tester. Test every GFCI and AFCI device. Verify every cover plate is installed. Check every smoke detector. This single step eliminates the vast majority of final inspection failures. Many experienced electricians use a helper to work through the checklist while they focus on the panel and service.
                  </p>
                </div>

                <div className="bg-green-900/20 rounded-xl p-6 border border-green-500/20">
                  <h3 className="font-semibold text-green-400 mb-2">Complete the Panel Directory</h3>
                  <p className="text-white/70 text-sm">
                    Fill out the panel directory completely and legibly. Use a typed or printed label if your handwriting is not clear. Every circuit must have a specific, descriptive label. Turn on each breaker one at a time and verify the label matches. This is your chance to catch mis-landed circuits before the inspector does.
                  </p>
                </div>

                <div className="bg-green-900/20 rounded-xl p-6 border border-green-500/20">
                  <h3 className="font-semibold text-green-400 mb-2">Clear the Working Space</h3>
                  <p className="text-white/70 text-sm">
                    Ensure the panel has the full required working clearance. Move any materials, tools, or storage away from the panel area. If the panel is in a garage, make sure the homeowner or GC has not started storing items in front of it. Also ensure there is adequate lighting at the panel location.
                  </p>
                </div>

                <div className="bg-green-900/20 rounded-xl p-6 border border-green-500/20">
                  <h3 className="font-semibold text-green-400 mb-2">Have Documentation Ready</h3>
                  <p className="text-white/70 text-sm">
                    Have the approved plans, the permit card, and any previous inspection approvals readily available. If the inspector has to hunt for documentation, it starts the inspection off on the wrong foot. Post the permit in a visible location as required.
                  </p>
                </div>

                <div className="bg-green-900/20 rounded-xl p-6 border border-green-500/20">
                  <h3 className="font-semibold text-green-400 mb-2">Ensure Access to All Areas</h3>
                  <p className="text-white/70 text-sm">
                    The inspector needs to access every room, the attic, crawl space, garage, exterior, and the panel. Make sure all areas are accessible, unlocked, and safe to enter. Move ladders, tools, and construction debris. If the inspector cannot access an area, they cannot inspect it, and the inspection will be incomplete.
                  </p>
                </div>

                <div className="bg-green-900/20 rounded-xl p-6 border border-green-500/20">
                  <h3 className="font-semibold text-green-400 mb-2">Be Present for the Inspection</h3>
                  <p className="text-white/70 text-sm">
                    While not always required, being present during the inspection allows you to answer questions, demonstrate that systems work, and get immediate clarification on any issues. If a correction is needed, you can understand exactly what the inspector wants and avoid guessing. Professional inspectors appreciate working with knowledgeable electricians who are engaged in the process.
                  </p>
                </div>
              </div>
            </section>

            <section id="what-if-you-fail" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">What to Do If You Fail</h2>
              <p className="text-white/80 mb-4">
                Failing a final electrical inspection is not the end of the world. It happens to experienced electricians, and the process for correcting and re-inspecting is straightforward. Here is what to do:
              </p>

              <div className="space-y-4 my-6">
                <div className="bg-white/5 rounded-xl p-4 flex items-start gap-4">
                  <span className="bg-orange-600 text-white text-sm font-bold px-3 py-1 rounded-full">1</span>
                  <div>
                    <p className="font-semibold text-white">Read the Correction Notice Carefully</p>
                    <p className="text-white/60 text-sm">The inspector provides a written correction notice listing each deficiency with the applicable NEC section. Read every item. If anything is unclear, call the inspector&apos;s office the same day for clarification. Do not guess at what they mean.</p>
                  </div>
                </div>
                <div className="bg-white/5 rounded-xl p-4 flex items-start gap-4">
                  <span className="bg-orange-600 text-white text-sm font-bold px-3 py-1 rounded-full">2</span>
                  <div>
                    <p className="font-semibold text-white">Fix Every Item on the List</p>
                    <p className="text-white/60 text-sm">Address every single item on the correction notice, not just the ones you agree with. If you disagree with a correction, fix it anyway and discuss it with the inspector during the re-inspection. Arguing code interpretations during the initial inspection rarely helps.</p>
                  </div>
                </div>
                <div className="bg-white/5 rounded-xl p-4 flex items-start gap-4">
                  <span className="bg-orange-600 text-white text-sm font-bold px-3 py-1 rounded-full">3</span>
                  <div>
                    <p className="font-semibold text-white">Do Another Self-Inspection</p>
                    <p className="text-white/60 text-sm">After making corrections, walk the entire project again. The inspector may look more carefully at other areas during the re-inspection, so make sure everything is in order, not just the items from the correction notice.</p>
                  </div>
                </div>
                <div className="bg-white/5 rounded-xl p-4 flex items-start gap-4">
                  <span className="bg-orange-600 text-white text-sm font-bold px-3 py-1 rounded-full">4</span>
                  <div>
                    <p className="font-semibold text-white">Schedule the Re-Inspection</p>
                    <p className="text-white/60 text-sm">Call to schedule the re-inspection once all corrections are complete. Do not schedule it until every item is actually fixed. Failing a re-inspection wastes everyone&apos;s time and may result in additional fees.</p>
                  </div>
                </div>
              </div>

              <div className="bg-orange-900/30 rounded-xl p-6 my-6">
                <h4 className="font-semibold text-orange-400 mb-3">What NOT to Do After a Failed Inspection</h4>
                <ul className="text-white/70 space-y-2 text-sm">
                  <li>&#10007; Do not argue with the inspector on site &mdash; it never helps</li>
                  <li>&#10007; Do not cover up or hide deficiencies</li>
                  <li>&#10007; Do not schedule a re-inspection before all corrections are complete</li>
                  <li>&#10007; Do not assume the inspector will only check the items from the correction notice</li>
                  <li>&#10007; Do not take it personally &mdash; the inspector is doing their job to protect the public</li>
                </ul>
              </div>
            </section>

            <section id="reinspection-process" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">The Re-Inspection Process</h2>
              <p className="text-white/80 mb-4">
                The re-inspection process varies by jurisdiction, but the general framework is similar across most AHJs. Here is what to expect:
              </p>

              <div className="overflow-x-auto my-6">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-white/20">
                      <th className="text-left py-3 px-4 text-white/60">Aspect</th>
                      <th className="text-left py-3 px-4 text-white/60">Typical Policy</th>
                    </tr>
                  </thead>
                  <tbody className="text-white/80">
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-semibold">First re-inspection fee</td>
                      <td className="py-3 px-4">Often included in the original permit fee (free)</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-semibold">Second re-inspection fee</td>
                      <td className="py-3 px-4">$50-$150+ depending on jurisdiction</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-semibold">Scheduling window</td>
                      <td className="py-3 px-4">Usually next-day to 3 business days</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-semibold">Scope of re-inspection</td>
                      <td className="py-3 px-4">Correction items plus anything else the inspector notices</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-semibold">Time limit for corrections</td>
                      <td className="py-3 px-4">Typically 30-180 days before permit expires</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-semibold">Multiple failures</td>
                      <td className="py-3 px-4">May trigger supervisory review or meeting with chief inspector</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="text-white/80 mb-4">
                Most jurisdictions allow at least one free re-inspection, with fees increasing for subsequent visits. Check with your local building department for their specific fee schedule and policies. Some jurisdictions require that corrections be made within a certain timeframe (often 30 to 180 days) before the permit expires and you would need to start over with a new permit.
              </p>

              <div className="bg-purple-900/30 rounded-xl p-6 my-6">
                <h4 className="font-semibold text-purple-400 mb-3">Appealing an Inspection Decision</h4>
                <p className="text-white/70 text-sm mb-3">
                  If you genuinely believe the inspector has made an error in code interpretation, you have the right to appeal. The typical process is:
                </p>
                <ol className="text-white/70 space-y-2 text-sm list-decimal list-inside">
                  <li>Discuss the issue respectfully with the inspector, referencing the specific NEC section</li>
                  <li>If unresolved, request a meeting with the chief electrical inspector or plan review supervisor</li>
                  <li>If still unresolved, file a formal appeal with the local board of appeals</li>
                  <li>Bring your code book with highlighted sections and any manufacturer documentation supporting your interpretation</li>
                </ol>
                <p className="text-white/60 text-sm mt-3">
                  In practice, most disagreements are resolved at step 1 or step 2. Formal appeals are rare and should be reserved for genuine code interpretation disputes, not for trying to avoid doing the work.
                </p>
              </div>
            </section>

            <section id="inspector-tips" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Tips from Experienced Inspectors</h2>
              <p className="text-white/80 mb-4">
                These insights come from common themes shared by electrical inspectors with decades of experience. Following these principles will improve your inspection pass rate and build a professional reputation with your local inspection department.
              </p>

              <div className="space-y-4 my-6">
                <div className="bg-cyan-900/20 rounded-xl p-6 border border-cyan-500/20">
                  <h3 className="font-semibold text-cyan-400 mb-2">&quot;Don&apos;t Call for Inspection Until the Work Is Actually Done&quot;</h3>
                  <p className="text-white/70 text-sm">
                    The most frustrating thing for an inspector is arriving at a job where the work is clearly not complete. &quot;Almost done&quot; or &quot;just a few more cover plates&quot; means the inspection cannot pass. Every device, every cover plate, every label, and every smoke detector must be installed and functional before you call.
                  </p>
                </div>

                <div className="bg-cyan-900/20 rounded-xl p-6 border border-cyan-500/20">
                  <h3 className="font-semibold text-cyan-400 mb-2">&quot;Know Which Code Edition Your Jurisdiction Has Adopted&quot;</h3>
                  <p className="text-white/70 text-sm">
                    Not every jurisdiction is on the latest NEC edition. Some are on the 2020 NEC, others on 2023, and some still on 2017. The code edition matters significantly for GFCI, AFCI, and tamper-resistant receptacle requirements. Know which edition your AHJ enforces and any local amendments before you start the job, not when you&apos;re standing in front of the inspector.
                  </p>
                </div>

                <div className="bg-cyan-900/20 rounded-xl p-6 border border-cyan-500/20">
                  <h3 className="font-semibold text-cyan-400 mb-2">&quot;A Clean Job Passes More Easily&quot;</h3>
                  <p className="text-white/70 text-sm">
                    Inspectors are human. When they open a panel and see neat, organized wiring with clear labels, they have confidence in the work. When they see a rat&apos;s nest of wires, illegible labels, and sloppy workmanship, they look more carefully at everything. First impressions matter. Take the time to make the panel look professional and the rest of the job clean.
                  </p>
                </div>

                <div className="bg-cyan-900/20 rounded-xl p-6 border border-cyan-500/20">
                  <h3 className="font-semibold text-cyan-400 mb-2">&quot;Have the Permit and Plans Visible&quot;</h3>
                  <p className="text-white/70 text-sm">
                    Post the permit card in a visible location (usually on a window or near the entrance) and have the approved plans on site. The inspector should not have to ask for these. If you are doing work that differs from the approved plans, get a plan revision approved before the inspection. Inspectors inspect to the approved plans.
                  </p>
                </div>

                <div className="bg-cyan-900/20 rounded-xl p-6 border border-cyan-500/20">
                  <h3 className="font-semibold text-cyan-400 mb-2">&quot;Build a Relationship with Your Local Department&quot;</h3>
                  <p className="text-white/70 text-sm">
                    Electricians who consistently pass inspections, are professional, and treat inspectors with respect develop a positive working relationship. This does not mean inspectors go easier on them &mdash; it means when questions arise, there is a foundation of trust and professional communication. If you are unsure about a code requirement, call the department before the work is done. They are generally happy to help.
                  </p>
                </div>

                <div className="bg-cyan-900/20 rounded-xl p-6 border border-cyan-500/20">
                  <h3 className="font-semibold text-cyan-400 mb-2">&quot;Test Everything Before We Get There&quot;</h3>
                  <p className="text-white/70 text-sm">
                    Every GFCI should trip when you press TEST. Every AFCI breaker should trip when tested. Every smoke detector should alarm and all interconnected units should follow. Every switch should control the correct fixture. Test all of these yourself. If the inspector tests a GFCI and it does not trip, the inspection fails immediately.
                  </p>
                </div>
              </div>
            </section>

            <section id="faq" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Frequently Asked Questions</h2>

              <div className="space-y-6 my-6">
                <div className="bg-white/5 rounded-xl p-6">
                  <h3 className="font-semibold text-white mb-2">How long does a final electrical inspection take?</h3>
                  <p className="text-white/70 text-sm">
                    A typical residential final electrical inspection takes 20-45 minutes, depending on the size of the home and the complexity of the electrical system. Larger homes, commercial projects, or jobs with many circuits can take longer. If the inspector finds issues, the inspection may take longer as they document each deficiency.
                  </p>
                </div>

                <div className="bg-white/5 rounded-xl p-6">
                  <h3 className="font-semibold text-white mb-2">Can I occupy the building before the final electrical inspection passes?</h3>
                  <p className="text-white/70 text-sm">
                    No. In virtually all jurisdictions, a passed final electrical inspection is required before a certificate of occupancy (CO) is issued. Occupying a building without a CO is a violation of the building code and can result in fines, legal liability, and insurance complications. Some jurisdictions issue a temporary certificate of occupancy (TCO) in limited circumstances, but this requires specific approval.
                  </p>
                </div>

                <div className="bg-white/5 rounded-xl p-6">
                  <h3 className="font-semibold text-white mb-2">Does the homeowner need to be present for the final inspection?</h3>
                  <p className="text-white/70 text-sm">
                    The homeowner does not typically need to be present, but someone must provide access to the property and all areas. Most jurisdictions require that the licensed contractor or permit holder (or their representative) be available. Being present to answer questions and demonstrate systems is always recommended.
                  </p>
                </div>

                <div className="bg-white/5 rounded-xl p-6">
                  <h3 className="font-semibold text-white mb-2">What if the inspector finds something that was missed during rough-in?</h3>
                  <p className="text-white/70 text-sm">
                    It happens. If the inspector discovers a deficiency that should have been caught at rough-in (for example, a missing circuit or incorrect wire size), it still must be corrected. Passing the rough-in inspection does not guarantee that everything behind the walls is correct &mdash; inspectors are human and can miss things too. The cost of correction at the final stage is typically higher because walls are already closed.
                  </p>
                </div>

                <div className="bg-white/5 rounded-xl p-6">
                  <h3 className="font-semibold text-white mb-2">Can I use my own inspection checklist app or tool?</h3>
                  <p className="text-white/70 text-sm">
                    Absolutely. Many electricians use mobile apps and digital checklists to prepare for inspections. Tools like the <a href="/get" target="_blank" rel="noopener noreferrer" className="text-green-400 underline hover:text-green-300">Ampora app</a> provide NEC code reference, electrical calculators, and AI-powered assistance that can help you verify code requirements on the job site.
                  </p>
                </div>

                <div className="bg-white/5 rounded-xl p-6">
                  <h3 className="font-semibold text-white mb-2">What happens if my permit expires before I can get the final inspection?</h3>
                  <p className="text-white/70 text-sm">
                    If your permit expires, you will typically need to renew it (with a fee) or apply for a new permit. In some jurisdictions, the renewed permit must comply with the current code edition, which may be newer than when the original permit was issued. This can create additional work if code requirements have changed. Keep track of your permit expiration dates and do not let them lapse.
                  </p>
                </div>

                <div className="bg-white/5 rounded-xl p-6">
                  <h3 className="font-semibold text-white mb-2">Is there a difference between residential and commercial final inspections?</h3>
                  <p className="text-white/70 text-sm">
                    Yes. Commercial final inspections are typically more detailed and may include additional requirements such as emergency lighting verification, exit sign functionality, fire alarm system testing, metering accuracy, power quality measurements, and coordination with other trades for fire stopping and life safety systems. Commercial inspections often take longer and may involve multiple inspectors.
                  </p>
                </div>

                <div className="bg-white/5 rounded-xl p-6">
                  <h3 className="font-semibold text-white mb-2">Do I need to call for a separate inspection for the grounding electrode system?</h3>
                  <p className="text-white/70 text-sm">
                    In many jurisdictions, the grounding electrode system (ground rods, Ufer/concrete-encased electrodes) must be inspected before being covered or backfilled. This is typically part of the underground or foundation inspection, not the final. However, the inspector will verify at the final that the grounding electrode conductor is properly connected from the electrode to the panel. Check with your local AHJ for their specific inspection sequence.
                  </p>
                </div>
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
                <Link href="/blog/electrical-inspection-checklist" className="bg-white/5 hover:bg-white/10 rounded-xl p-6 transition-colors">
                  <span className="text-green-400 text-sm">Inspections</span>
                  <h3 className="font-semibold mt-2">Electrical Inspection Checklist: Complete Guide</h3>
                </Link>
                <Link href="/blog/rough-in-inspection-preparation" className="bg-white/5 hover:bg-white/10 rounded-xl p-6 transition-colors">
                  <span className="text-green-400 text-sm">Inspections</span>
                  <h3 className="font-semibold mt-2">Rough-In Inspection Preparation Guide</h3>
                </Link>
                <Link href="/blog/electrical-permit-process-guide" className="bg-white/5 hover:bg-white/10 rounded-xl p-6 transition-colors">
                  <span className="text-cyan-400 text-sm">Installation</span>
                  <h3 className="font-semibold mt-2">Electrical Permit Process Guide</h3>
                </Link>
                <Link href="/blog/panel-schedule-labeling-nec-408" className="bg-white/5 hover:bg-white/10 rounded-xl p-6 transition-colors">
                  <span className="text-purple-400 text-sm">NEC Code</span>
                  <h3 className="font-semibold mt-2">Panel Schedule & Labeling: NEC 408 Guide</h3>
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
