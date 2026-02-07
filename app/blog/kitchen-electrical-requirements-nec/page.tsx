import { Metadata } from "next";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import { BreadcrumbJsonLd, BlogPostingJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Kitchen Electrical Requirements: NEC Code Guide for Electricians",
  description: "Complete guide to NEC kitchen electrical requirements. Learn small appliance circuit rules, countertop receptacle spacing, GFCI protection, dedicated circuit requirements for dishwashers, disposals, and refrigerators.",
  keywords: [
    "kitchen electrical requirements",
    "small appliance circuit",
    "kitchen GFCI requirements",
    "kitchen receptacle spacing",
    "NEC kitchen circuits",
    "countertop receptacle requirements",
    "kitchen dedicated circuits",
    "dishwasher circuit NEC",
    "garbage disposal circuit",
    "refrigerator dedicated circuit",
    "NEC 210.52",
    "NEC 210.8",
    "kitchen outlet requirements",
    "island receptacle NEC",
    "peninsula outlet requirements",
    "kitchen electrical code"
  ],
  alternates: {
    canonical: "https://amporalabs.com/blog/kitchen-electrical-requirements-nec",
  },
  openGraph: {
    title: "Kitchen Electrical Requirements: Complete NEC Guide - Ampora",
    description: "Master NEC kitchen electrical requirements for circuits, receptacles, and GFCI protection.",
    url: "https://amporalabs.com/blog/kitchen-electrical-requirements-nec",
    type: "article",
  },
};

function HeroIllustration() {
  return (
    <svg viewBox="0 0 400 160" className="w-full h-40 md:h-48" aria-label="Kitchen electrical diagram showing countertop receptacles and appliance circuits">
      {/* Kitchen counter background */}
      <rect x="20" y="80" width="360" height="60" fill="#374151" stroke="#4b5563" strokeWidth="1"/>
      <rect x="20" y="70" width="360" height="12" fill="#6b7280"/>

      {/* Backsplash area */}
      <rect x="20" y="20" width="360" height="50" fill="#1f2937" stroke="#374151" strokeWidth="1"/>

      {/* Countertop receptacles */}
      <g transform="translate(50, 35)">
        <rect x="-12" y="-10" width="24" height="20" rx="3" fill="#22c55e" stroke="#16a34a" strokeWidth="1.5"/>
        <ellipse cx="0" cy="-3" rx="4" ry="2" fill="#1f2937"/>
        <ellipse cx="0" cy="3" rx="4" ry="2" fill="#1f2937"/>
        <text x="0" y="25" textAnchor="middle" fill="#22c55e" fontSize="6">GFCI</text>
      </g>

      <g transform="translate(130, 35)">
        <rect x="-12" y="-10" width="24" height="20" rx="3" fill="#0ea5e9" stroke="#0284c7" strokeWidth="1.5"/>
        <ellipse cx="0" cy="-3" rx="4" ry="2" fill="#1f2937"/>
        <ellipse cx="0" cy="3" rx="4" ry="2" fill="#1f2937"/>
      </g>

      <g transform="translate(270, 35)">
        <rect x="-12" y="-10" width="24" height="20" rx="3" fill="#0ea5e9" stroke="#0284c7" strokeWidth="1.5"/>
        <ellipse cx="0" cy="-3" rx="4" ry="2" fill="#1f2937"/>
        <ellipse cx="0" cy="3" rx="4" ry="2" fill="#1f2937"/>
      </g>

      <g transform="translate(350, 35)">
        <rect x="-12" y="-10" width="24" height="20" rx="3" fill="#22c55e" stroke="#16a34a" strokeWidth="1.5"/>
        <ellipse cx="0" cy="-3" rx="4" ry="2" fill="#1f2937"/>
        <ellipse cx="0" cy="3" rx="4" ry="2" fill="#1f2937"/>
        <text x="0" y="25" textAnchor="middle" fill="#22c55e" fontSize="6">GFCI</text>
      </g>

      {/* Distance markers */}
      <g transform="translate(50, 60)">
        <line x1="0" y1="0" x2="80" y2="0" stroke="#fbbf24" strokeWidth="1"/>
        <line x1="0" y1="-3" x2="0" y2="3" stroke="#fbbf24" strokeWidth="1"/>
        <line x1="80" y1="-3" x2="80" y2="3" stroke="#fbbf24" strokeWidth="1"/>
        <text x="40" y="10" textAnchor="middle" fill="#fbbf24" fontSize="6">48&quot; MAX</text>
      </g>

      <g transform="translate(270, 60)">
        <line x1="0" y1="0" x2="80" y2="0" stroke="#fbbf24" strokeWidth="1"/>
        <line x1="0" y1="-3" x2="0" y2="3" stroke="#fbbf24" strokeWidth="1"/>
        <line x1="80" y1="-3" x2="80" y2="3" stroke="#fbbf24" strokeWidth="1"/>
        <text x="40" y="10" textAnchor="middle" fill="#fbbf24" fontSize="6">48&quot; MAX</text>
      </g>

      {/* Sink area (no receptacles) */}
      <g transform="translate(185, 85)">
        <rect x="-25" y="0" width="50" height="40" rx="5" fill="#1e3a5f" stroke="#0ea5e9" strokeWidth="1"/>
        <ellipse cx="0" cy="15" rx="15" ry="10" fill="#1e3a5f" stroke="#0ea5e9" strokeWidth="0.5"/>
        <text x="0" y="50" textAnchor="middle" fill="#0ea5e9" fontSize="6">SINK</text>
      </g>

      {/* Island */}
      <g transform="translate(185, 145)">
        <rect x="-50" y="-20" width="100" height="30" fill="#4b5563" stroke="#6b7280" strokeWidth="1"/>
        <rect x="-25" y="-10" width="24" height="16" rx="2" fill="#22c55e" stroke="#16a34a" strokeWidth="1"/>
        <text x="-13" y="18" textAnchor="middle" fill="#22c55e" fontSize="5">ISLAND</text>

        <rect x="5" y="-10" width="24" height="16" rx="2" fill="#22c55e" stroke="#16a34a" strokeWidth="1"/>
        <text x="17" y="18" textAnchor="middle" fill="#22c55e" fontSize="5">OUTLET</text>
      </g>

      {/* Appliances under counter */}
      <g transform="translate(60, 100)">
        <rect x="0" y="0" width="35" height="30" rx="2" fill="#1f2937" stroke="#a855f7" strokeWidth="1.5"/>
        <text x="17" y="18" textAnchor="middle" fill="#a855f7" fontSize="6">DW</text>
        <text x="17" y="40" textAnchor="middle" fill="#a855f7" fontSize="5">20A</text>
      </g>

      <g transform="translate(305, 100)">
        <rect x="0" y="0" width="55" height="30" rx="2" fill="#1f2937" stroke="#f97316" strokeWidth="1.5"/>
        <rect x="45" y="5" width="8" height="20" rx="1" fill="#374151"/>
        <text x="22" y="18" textAnchor="middle" fill="#f97316" fontSize="6">FRIDGE</text>
        <text x="27" y="40" textAnchor="middle" fill="#f97316" fontSize="5">DEDICATED</text>
      </g>

      {/* Panel connection indicator */}
      <g transform="translate(5, 10)">
        <rect x="0" y="0" width="30" height="45" rx="2" fill="#1f2937" stroke="#22c55e" strokeWidth="1.5"/>
        <text x="15" y="12" textAnchor="middle" fill="#22c55e" fontSize="6">PANEL</text>
        <rect x="5" y="16" width="8" height="4" rx="1" fill="#22c55e"/>
        <rect x="5" y="22" width="8" height="4" rx="1" fill="#22c55e"/>
        <rect x="17" y="16" width="8" height="4" rx="1" fill="#0ea5e9"/>
        <rect x="17" y="22" width="8" height="4" rx="1" fill="#0ea5e9"/>
        <rect x="5" y="28" width="8" height="4" rx="1" fill="#a855f7"/>
        <rect x="17" y="28" width="8" height="4" rx="1" fill="#f97316"/>
        <rect x="5" y="34" width="8" height="4" rx="1" fill="#6b7280"/>
        <rect x="17" y="34" width="8" height="4" rx="1" fill="#6b7280"/>
      </g>

      {/* Legend */}
      <g transform="translate(300, 0)">
        <rect x="0" y="0" width="95" height="55" rx="3" fill="#1f2937" fillOpacity="0.8"/>
        <circle cx="12" cy="10" r="4" fill="#22c55e"/>
        <text x="20" y="13" fill="#9ca3af" fontSize="6">Small Appliance (GFCI)</text>
        <circle cx="12" cy="22" r="4" fill="#a855f7"/>
        <text x="20" y="25" fill="#9ca3af" fontSize="6">Dishwasher 20A</text>
        <circle cx="12" cy="34" r="4" fill="#f97316"/>
        <text x="20" y="37" fill="#9ca3af" fontSize="6">Refrigerator</text>
        <circle cx="12" cy="46" r="4" fill="#0ea5e9"/>
        <text x="20" y="49" fill="#9ca3af" fontSize="6">Countertop</text>
      </g>
    </svg>
  );
}

export default function KitchenElectricalRequirementsPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navigation />
      <div className="pt-20">
        <BreadcrumbJsonLd
          items={[
            { name: "Home", url: "https://amporalabs.com" },
            { name: "Blog", url: "https://amporalabs.com/blog" },
            { name: "Kitchen Electrical Requirements", url: "https://amporalabs.com/blog/kitchen-electrical-requirements-nec" },
          ]}
        />
        <BlogPostingJsonLd
          headline="Kitchen Electrical Requirements: NEC Code Guide for Electricians"
          description="Complete guide to NEC kitchen electrical requirements including small appliance circuits, countertop receptacles, and GFCI protection."
          datePublished="2025-01-19"
          dateModified="2025-01-19"
          url="https://amporalabs.com/blog/kitchen-electrical-requirements-nec"
          wordCount={2900}
          keywords={["kitchen electrical", "small appliance circuit", "GFCI", "countertop receptacle", "NEC 210.52"]}
        />

        <article className="max-w-4xl mx-auto px-6 py-12">
          {/* Breadcrumb */}
          <nav className="text-sm text-white/60 mb-8">
            <Link href="/" className="hover:text-white">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/blog" className="hover:text-white">Blog</Link>
            <span className="mx-2">/</span>
            <span className="text-white">Kitchen Electrical Requirements</span>
          </nav>

          {/* Article Header */}
          <header className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <span className="px-3 py-1 bg-purple-600/30 text-purple-300 text-sm font-medium rounded-full">
                NEC Code
              </span>
              <span className="text-white/40 text-sm">12 min read</span>
              <span className="text-white/40 text-sm">January 19, 2025</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6 leading-tight">
              Kitchen Electrical Requirements: Complete NEC Guide for Electricians
            </h1>
            <p className="text-xl text-white/70">
              Master every kitchen electrical requirement in the NEC. From small appliance circuits to island receptacles, learn the rules that keep kitchens safe and pass inspection.
            </p>
          </header>

          <div className="mb-12 bg-gradient-to-br from-green-900/20 to-cyan-900/20 rounded-2xl p-6 border border-white/10">
            <HeroIllustration />
          </div>

          {/* Quick Reference Box */}
          <div className="bg-green-900/30 border border-green-500/30 rounded-2xl p-6 mb-12">
            <h3 className="font-display font-bold text-lg mb-3 text-green-400">Kitchen Circuit Quick Reference</h3>
            <div className="grid md:grid-cols-2 gap-4 text-sm">
              <div>
                <p className="text-white/70"><strong>Small appliance circuits:</strong> Minimum 2 required</p>
                <p className="text-white/70"><strong>Countertop spacing:</strong> Max 48&quot; (24&quot; from any point)</p>
                <p className="text-white/70"><strong>GFCI required:</strong> All kitchen receptacles serving countertops</p>
              </div>
              <div>
                <p className="text-white/70"><strong>Island receptacles:</strong> At least 1 per island/peninsula</p>
                <p className="text-white/70"><strong>Dishwasher:</strong> Dedicated 20A circuit</p>
                <p className="text-white/70"><strong>Refrigerator:</strong> Individual branch circuit recommended</p>
              </div>
            </div>
          </div>

          {/* Table of Contents */}
          <div className="bg-white/5 rounded-2xl p-6 mb-12">
            <h2 className="font-display font-bold mb-4">In This Guide</h2>
            <ul className="space-y-2 text-white/70">
              <li><a href="#small-appliance" className="hover:text-purple-400">&#8594; Small Appliance Branch Circuits</a></li>
              <li><a href="#countertop" className="hover:text-purple-400">&#8594; Countertop Receptacle Requirements</a></li>
              <li><a href="#islands" className="hover:text-purple-400">&#8594; Island and Peninsula Requirements</a></li>
              <li><a href="#gfci" className="hover:text-purple-400">&#8594; GFCI Protection Requirements</a></li>
              <li><a href="#dedicated" className="hover:text-purple-400">&#8594; Dedicated Circuit Requirements</a></li>
              <li><a href="#load-calc" className="hover:text-purple-400">&#8594; Kitchen Load Calculations</a></li>
              <li><a href="#common-mistakes" className="hover:text-purple-400">&#8594; Common Inspection Failures</a></li>
              <li><a href="#checklist" className="hover:text-purple-400">&#8594; Installation Checklist</a></li>
            </ul>
          </div>

          {/* Article Content */}
          <div className="prose prose-invert prose-lg max-w-none">

            <section id="small-appliance" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Small Appliance Branch Circuits</h2>
              <p className="text-white/80 mb-4">
                NEC 210.11(C)(1) requires a <strong>minimum of two 20-amp small appliance branch circuits</strong> to serve receptacle outlets in the kitchen, pantry, breakfast room, dining room, and similar areas. These circuits are dedicated to countertop and wall outlets for portable appliances.
              </p>

              <div className="bg-cyan-900/30 rounded-xl p-6 my-6">
                <h3 className="font-semibold text-cyan-400 mb-3">Small Appliance Circuit Requirements (NEC 210.52(B))</h3>
                <ul className="space-y-2 text-white/70">
                  <li><strong>Minimum 2 circuits:</strong> At least two 20A circuits required</li>
                  <li><strong>Circuit rating:</strong> 20 amperes (no 15A circuits allowed)</li>
                  <li><strong>12 AWG wire minimum:</strong> Required for 20A circuits</li>
                  <li><strong>Dedicated purpose:</strong> Only receptacle outlets, no lighting permitted</li>
                  <li><strong>Coverage area:</strong> Kitchen, pantry, dining room, breakfast nook</li>
                </ul>
              </div>

              <h3 className="text-xl font-semibold mb-3 mt-6">What Can Be Connected</h3>
              <div className="grid md:grid-cols-2 gap-4 my-6">
                <div className="bg-green-900/30 rounded-xl p-4">
                  <h4 className="font-semibold text-green-400 mb-2">Permitted on Small Appliance Circuits</h4>
                  <ul className="space-y-1 text-white/70 text-sm">
                    <li>&#10003; Countertop receptacles</li>
                    <li>&#10003; Wall receptacles in kitchen</li>
                    <li>&#10003; Receptacles in pantry</li>
                    <li>&#10003; Dining room receptacles</li>
                    <li>&#10003; Electric clock receptacle</li>
                    <li>&#10003; Gas range receptacle (ignitor)</li>
                  </ul>
                </div>
                <div className="bg-red-900/30 rounded-xl p-4">
                  <h4 className="font-semibold text-red-400 mb-2">NOT Permitted on Small Appliance Circuits</h4>
                  <ul className="space-y-1 text-white/70 text-sm">
                    <li>&#10007; Lighting outlets</li>
                    <li>&#10007; Dishwasher (needs dedicated circuit)</li>
                    <li>&#10007; Garbage disposal (needs dedicated circuit)</li>
                    <li>&#10007; Refrigerator (should be dedicated)</li>
                    <li>&#10007; Microwave (if over 50% circuit capacity)</li>
                    <li>&#10007; Receptacles in other rooms (except dining)</li>
                  </ul>
                </div>
              </div>

              <div className="bg-orange-900/30 rounded-xl p-6 my-6">
                <h3 className="font-semibold text-orange-400 mb-2">Exception: Refrigerator Circuit</h3>
                <p className="text-white/70">
                  Per NEC 210.52(B)(1) Exception 2, a <strong>refrigerator can be supplied by an individual 15A branch circuit</strong> rated at 15 amperes or greater. This allows a dedicated refrigerator circuit that isn&apos;t one of the two required small appliance circuits. Best practice is a dedicated 20A circuit for the refrigerator.
                </p>
              </div>
            </section>

            <section id="countertop" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Countertop Receptacle Requirements</h2>
              <p className="text-white/80 mb-4">
                NEC 210.52(C) establishes specific requirements for countertop receptacles to ensure appliances can be used anywhere on the countertop without using extension cords.
              </p>

              <h3 className="text-xl font-semibold mb-3 mt-6">The 24-Inch / 48-Inch Rule</h3>
              <div className="bg-purple-900/30 rounded-xl p-6 my-6">
                <p className="text-white/70 mb-3">
                  The fundamental rule: <strong>No point along the countertop wall line can be more than 24 inches from a receptacle outlet.</strong>
                </p>
                <ul className="space-y-2 text-white/70">
                  <li><strong>Maximum spacing:</strong> 48 inches between receptacles</li>
                  <li><strong>24&quot; rule:</strong> Any point must be within 24&quot; of a receptacle</li>
                  <li><strong>Measurement:</strong> Along the wall line at countertop level</li>
                </ul>
              </div>

              <h3 className="text-xl font-semibold mb-3 mt-6">Wall Counter Space Requirements</h3>
              <div className="overflow-x-auto my-6">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-white/20">
                      <th className="text-left py-3 px-4 text-white/60">Counter Space Width</th>
                      <th className="text-left py-3 px-4 text-white/60">Receptacles Required</th>
                      <th className="text-left py-3 px-4 text-white/60">Notes</th>
                    </tr>
                  </thead>
                  <tbody className="text-white/80">
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">Less than 12&quot;</td>
                      <td className="py-3 px-4">None required</td>
                      <td className="py-3 px-4 text-white/60">Not considered counter space</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">12&quot; or more</td>
                      <td className="py-3 px-4">At least 1</td>
                      <td className="py-3 px-4 text-white/60">Qualifies as counter space</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">12&quot; to 48&quot;</td>
                      <td className="py-3 px-4">1</td>
                      <td className="py-3 px-4 text-white/60">One receptacle covers entire span</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4">Greater than 48&quot;</td>
                      <td className="py-3 px-4">2 or more</td>
                      <td className="py-3 px-4 text-white/60">Apply 24&quot; rule for placement</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h3 className="text-xl font-semibold mb-3 mt-6">What Breaks Counter Space</h3>
              <ul className="list-disc list-inside text-white/70 space-y-2 mb-6">
                <li><strong>Range tops and sinks:</strong> Counter spaces separated by these are treated individually</li>
                <li><strong>Corner measurements:</strong> Corners are measured around, not diagonally</li>
                <li><strong>Refrigerators:</strong> Do not break counter space</li>
              </ul>

              <h3 className="text-xl font-semibold mb-3 mt-6">Receptacle Placement Height</h3>
              <div className="bg-white/5 rounded-xl p-6 my-6">
                <p className="text-white/70 mb-3">Per NEC 210.52(C)(5), countertop receptacles must be located:</p>
                <ul className="space-y-2 text-white/70">
                  <li><strong>Not more than 20 inches</strong> above the countertop surface</li>
                  <li><strong>Not more than 12 inches</strong> below the countertop (if below)</li>
                  <li><strong>Exception:</strong> For physically impaired or elderly, may be mounted not more than 48&quot; above floor</li>
                </ul>
              </div>
            </section>

            <section id="islands" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Island and Peninsula Requirements</h2>
              <p className="text-white/80 mb-4">
                Kitchen islands and peninsulas have specific receptacle requirements per NEC 210.52(C)(2) and (C)(3) that are often misunderstood.
              </p>

              <h3 className="text-xl font-semibold mb-3 mt-6">Island Countertop Requirements</h3>
              <div className="bg-cyan-900/30 rounded-xl p-6 my-6">
                <p className="text-white/70 mb-3">
                  An island countertop with a <strong>long dimension of 24 inches or greater</strong> AND <strong>short dimension of 12 inches or greater</strong> requires:
                </p>
                <ul className="space-y-2 text-white/70">
                  <li><strong>At least one receptacle</strong> must be installed</li>
                  <li><strong>For larger islands:</strong> Apply the 48-inch maximum spacing rule</li>
                  <li><strong>Location:</strong> Must serve the countertop, not floor level</li>
                </ul>
              </div>

              <h3 className="text-xl font-semibold mb-3 mt-6">Peninsula Countertop Requirements</h3>
              <div className="bg-purple-900/30 rounded-xl p-6 my-6">
                <p className="text-white/70 mb-3">
                  A peninsula countertop with a <strong>long dimension of 24 inches or greater</strong> AND <strong>short dimension of 12 inches or greater</strong> requires:
                </p>
                <ul className="space-y-2 text-white/70">
                  <li><strong>At least one receptacle</strong> must be installed</li>
                  <li><strong>Measured from connecting edge:</strong> Not from wall</li>
                  <li><strong>For longer peninsulas:</strong> Additional receptacles per 48&quot; rule</li>
                </ul>
              </div>

              <h3 className="text-xl font-semibold mb-3 mt-6">Island Receptacle Placement Options</h3>
              <div className="grid md:grid-cols-2 gap-4 my-6">
                <div className="bg-white/5 rounded-xl p-4">
                  <h4 className="font-semibold text-white mb-2">Countertop Level</h4>
                  <ul className="space-y-1 text-white/70 text-sm">
                    <li>&#8226; Pop-up receptacles in countertop</li>
                    <li>&#8226; Receptacles in end of island cabinet</li>
                    <li>&#8226; Not more than 20&quot; above countertop</li>
                  </ul>
                </div>
                <div className="bg-white/5 rounded-xl p-4">
                  <h4 className="font-semibold text-white mb-2">Below Countertop</h4>
                  <ul className="space-y-1 text-white/70 text-sm">
                    <li>&#8226; In side of island cabinet</li>
                    <li>&#8226; Not more than 12&quot; below countertop</li>
                    <li>&#8226; Must not be face-up (no floor outlets)</li>
                  </ul>
                </div>
              </div>

              <div className="bg-orange-900/30 rounded-xl p-6 my-6">
                <h3 className="font-semibold text-orange-400 mb-2">No Floor Receptacles for Countertops</h3>
                <p className="text-white/70">
                  Receptacles installed in a floor are <strong>not permitted to serve countertop surfaces</strong> per NEC 210.52(C)(5). Island receptacles must be mounted in or on the island itself, not in the floor.
                </p>
              </div>
            </section>

            <section id="gfci" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">GFCI Protection Requirements</h2>
              <p className="text-white/80 mb-4">
                NEC 210.8(A)(6) requires GFCI protection for kitchen receptacles. The NEC 2023 expanded these requirements significantly.
              </p>

              <div className="bg-green-900/30 rounded-xl p-6 my-6">
                <h3 className="font-semibold text-green-400 mb-3">Kitchen GFCI Requirements (NEC 2023)</h3>
                <p className="text-white/70 mb-3">GFCI protection required for all 125V through 250V receptacles:</p>
                <ul className="space-y-2 text-white/70">
                  <li><strong>Serving countertop surfaces:</strong> All countertop receptacles</li>
                  <li><strong>Within 6 feet of sink:</strong> Any receptacle within 6 feet measured along wall line</li>
                  <li><strong>All kitchen receptacles:</strong> NEC 2023 requires GFCI for ALL kitchen receptacles rated 50A or less</li>
                </ul>
              </div>

              <h3 className="text-xl font-semibold mb-3 mt-6">NEC 2023 Changes to Kitchen GFCI</h3>
              <div className="bg-purple-900/30 rounded-xl p-6 my-6">
                <p className="text-white/70 mb-3">
                  The NEC 2023 significantly expanded kitchen GFCI requirements:
                </p>
                <ul className="space-y-2 text-white/70">
                  <li><strong>All kitchen receptacles:</strong> Not just countertop, ALL receptacles in kitchen</li>
                  <li><strong>250V included:</strong> Expanded from 125V to include 250V receptacles</li>
                  <li><strong>Dishwasher:</strong> Now requires GFCI protection</li>
                  <li><strong>Refrigerator:</strong> Now requires GFCI protection</li>
                  <li><strong>Up to 50 amps:</strong> Covers range receptacles in some cases</li>
                </ul>
              </div>

              <h3 className="text-xl font-semibold mb-3 mt-6">GFCI Protection Methods</h3>
              <ul className="list-disc list-inside text-white/70 space-y-2 mb-6">
                <li><strong>GFCI receptacle:</strong> First receptacle on circuit can protect downstream</li>
                <li><strong>GFCI circuit breaker:</strong> Protects entire circuit from panel</li>
                <li><strong>Combination AFCI/GFCI:</strong> Available for dual protection</li>
              </ul>
            </section>

            <section id="dedicated" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Dedicated Circuit Requirements</h2>
              <p className="text-white/80 mb-4">
                Several kitchen appliances require or benefit from dedicated circuits per NEC requirements or best practices.
              </p>

              <div className="overflow-x-auto my-6">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-white/20">
                      <th className="text-left py-3 px-4 text-white/60">Appliance</th>
                      <th className="text-left py-3 px-4 text-white/60">Circuit Required</th>
                      <th className="text-left py-3 px-4 text-white/60">NEC Reference</th>
                      <th className="text-left py-3 px-4 text-white/60">Notes</th>
                    </tr>
                  </thead>
                  <tbody className="text-white/80">
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-semibold">Dishwasher</td>
                      <td className="py-3 px-4">20A dedicated</td>
                      <td className="py-3 px-4 text-white/60">422.16(B)(2)</td>
                      <td className="py-3 px-4 text-white/60">GFCI required (NEC 2023)</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-semibold">Garbage Disposal</td>
                      <td className="py-3 px-4">20A (can share with DW)</td>
                      <td className="py-3 px-4 text-white/60">210.23</td>
                      <td className="py-3 px-4 text-white/60">Can share with dishwasher only</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-semibold">Refrigerator</td>
                      <td className="py-3 px-4">15A or 20A dedicated</td>
                      <td className="py-3 px-4 text-white/60">210.52(B)(1) Ex. 2</td>
                      <td className="py-3 px-4 text-white/60">Recommended, not required</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-semibold">Microwave (built-in)</td>
                      <td className="py-3 px-4">20A dedicated</td>
                      <td className="py-3 px-4 text-white/60">Best practice</td>
                      <td className="py-3 px-4 text-white/60">If &gt;50% of circuit rating</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-semibold">Electric Range</td>
                      <td className="py-3 px-4">40A or 50A dedicated</td>
                      <td className="py-3 px-4 text-white/60">210.19, 210.23</td>
                      <td className="py-3 px-4 text-white/60">8 AWG for 40A, 6 AWG for 50A</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-semibold">Electric Wall Oven</td>
                      <td className="py-3 px-4">Per nameplate</td>
                      <td className="py-3 px-4 text-white/60">422.10</td>
                      <td className="py-3 px-4 text-white/60">Typically 30A-50A</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="bg-cyan-900/30 rounded-xl p-6 my-6">
                <h3 className="font-semibold text-cyan-400 mb-3">Dishwasher/Disposal Shared Circuit</h3>
                <p className="text-white/70">
                  Per NEC 210.23(A)(1), a dishwasher and garbage disposal <strong>may share a 20A circuit</strong> if they are the only loads on that circuit. This is the only permitted sharing arrangement. Both loads must have disconnecting means, and the combined load should not exceed circuit capacity.
                </p>
              </div>
            </section>

            <section id="load-calc" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Kitchen Load Calculations</h2>
              <p className="text-white/80 mb-4">
                For dwelling unit service calculations per NEC Article 220, kitchen loads are calculated as follows:
              </p>

              <div className="bg-white/5 rounded-xl p-6 my-6">
                <h3 className="font-semibold text-purple-400 mb-3">NEC 220.52 - Small Appliance and Laundry</h3>
                <ul className="space-y-3 text-white/70">
                  <li>
                    <strong>Small appliance circuits:</strong> 1500 VA per circuit
                    <p className="text-white/60 text-sm ml-4">Minimum 2 circuits = 3000 VA minimum</p>
                  </li>
                  <li>
                    <strong>Laundry circuit:</strong> 1500 VA
                    <p className="text-white/60 text-sm ml-4">Additional required load</p>
                  </li>
                  <li>
                    <strong>Demand factor:</strong> Applied to first 3000 VA + 35% of remainder
                    <p className="text-white/60 text-sm ml-4">Per NEC Table 220.42 for general lighting and receptacles</p>
                  </li>
                </ul>
              </div>

              <h3 className="text-xl font-semibold mb-3 mt-6">Typical Kitchen Circuit Summary</h3>
              <div className="overflow-x-auto my-6">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-white/20">
                      <th className="text-left py-3 px-4 text-white/60">Circuit</th>
                      <th className="text-left py-3 px-4 text-white/60">Rating</th>
                      <th className="text-left py-3 px-4 text-white/60">Wire Size (Cu)</th>
                      <th className="text-left py-3 px-4 text-white/60">Qty</th>
                    </tr>
                  </thead>
                  <tbody className="text-white/80">
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">Small appliance #1</td>
                      <td className="py-3 px-4">20A</td>
                      <td className="py-3 px-4 font-mono">12 AWG</td>
                      <td className="py-3 px-4">1</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">Small appliance #2</td>
                      <td className="py-3 px-4">20A</td>
                      <td className="py-3 px-4 font-mono">12 AWG</td>
                      <td className="py-3 px-4">1</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">Refrigerator</td>
                      <td className="py-3 px-4">20A</td>
                      <td className="py-3 px-4 font-mono">12 AWG</td>
                      <td className="py-3 px-4">1</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">Dishwasher</td>
                      <td className="py-3 px-4">20A</td>
                      <td className="py-3 px-4 font-mono">12 AWG</td>
                      <td className="py-3 px-4">1</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">Disposal</td>
                      <td className="py-3 px-4">20A*</td>
                      <td className="py-3 px-4 font-mono">12 AWG</td>
                      <td className="py-3 px-4">1*</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">Range/Cooktop</td>
                      <td className="py-3 px-4">50A</td>
                      <td className="py-3 px-4 font-mono">6 AWG</td>
                      <td className="py-3 px-4">1</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4">Microwave</td>
                      <td className="py-3 px-4">20A</td>
                      <td className="py-3 px-4 font-mono">12 AWG</td>
                      <td className="py-3 px-4">1</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-white/60 text-sm">*Disposal can share circuit with dishwasher</p>
            </section>

            <section id="common-mistakes" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Common Inspection Failures</h2>
              <p className="text-white/80 mb-4">
                These are the most common kitchen electrical violations that cause failed inspections:
              </p>

              <div className="space-y-4 my-6">
                <div className="bg-red-900/20 rounded-xl p-4 border border-red-500/30">
                  <p className="text-white font-semibold mb-2">1. Insufficient countertop receptacles</p>
                  <p className="text-white/60 text-sm">Failing to meet the 48&quot; maximum / 24&quot; rule for countertop spacing</p>
                </div>
                <div className="bg-red-900/20 rounded-xl p-4 border border-red-500/30">
                  <p className="text-white font-semibold mb-2">2. Missing island/peninsula receptacles</p>
                  <p className="text-white/60 text-sm">Islands meeting size requirements (24&quot; x 12&quot;) need at least one receptacle</p>
                </div>
                <div className="bg-red-900/20 rounded-xl p-4 border border-red-500/30">
                  <p className="text-white font-semibold mb-2">3. GFCI protection missing or improperly located</p>
                  <p className="text-white/60 text-sm">All countertop receptacles and receptacles within 6&apos; of sink require GFCI</p>
                </div>
                <div className="bg-red-900/20 rounded-xl p-4 border border-red-500/30">
                  <p className="text-white font-semibold mb-2">4. Only one small appliance circuit</p>
                  <p className="text-white/60 text-sm">Minimum of two 20A small appliance circuits required</p>
                </div>
                <div className="bg-red-900/20 rounded-xl p-4 border border-red-500/30">
                  <p className="text-white font-semibold mb-2">5. 15A circuits for countertop receptacles</p>
                  <p className="text-white/60 text-sm">Small appliance circuits must be 20A, not 15A</p>
                </div>
                <div className="bg-red-900/20 rounded-xl p-4 border border-red-500/30">
                  <p className="text-white font-semibold mb-2">6. Receptacles too high above countertop</p>
                  <p className="text-white/60 text-sm">Maximum 20&quot; above countertop surface</p>
                </div>
              </div>
            </section>

            <section id="checklist" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Kitchen Electrical Installation Checklist</h2>

              <div className="bg-green-900/30 rounded-xl p-6 my-6">
                <h3 className="font-semibold text-green-400 mb-4">Pre-Inspection Verification</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <span className="text-green-400">&#9744;</span>
                    <span className="text-white/70">Minimum 2 small appliance circuits (20A each)</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-green-400">&#9744;</span>
                    <span className="text-white/70">Countertop receptacles meet 24&quot;/48&quot; spacing rule</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-green-400">&#9744;</span>
                    <span className="text-white/70">All countertop receptacles GFCI protected</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-green-400">&#9744;</span>
                    <span className="text-white/70">Receptacles within 6&apos; of sink GFCI protected</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-green-400">&#9744;</span>
                    <span className="text-white/70">Island/peninsula receptacles installed (if applicable)</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-green-400">&#9744;</span>
                    <span className="text-white/70">Dishwasher on dedicated 20A circuit with GFCI</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-green-400">&#9744;</span>
                    <span className="text-white/70">Refrigerator circuit installed</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-green-400">&#9744;</span>
                    <span className="text-white/70">Range/cooktop circuit properly sized</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-green-400">&#9744;</span>
                    <span className="text-white/70">Receptacles not more than 20&quot; above countertop</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-green-400">&#9744;</span>
                    <span className="text-white/70">All receptacles are grounding type</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-green-400">&#9744;</span>
                    <span className="text-white/70">No lighting on small appliance circuits</span>
                  </div>
                </div>
              </div>
            </section>

            {/* CTA Section */}
            <section className="bg-gradient-to-r from-purple-900/30 to-cyan-900/30 rounded-2xl p-8 my-12">
              <h2 className="text-2xl font-display font-bold mb-4 text-center">
                NEC Code Reference at Your Fingertips
              </h2>
              <p className="text-white/70 mb-6 text-center">
                Access kitchen electrical requirements and all NEC codes instantly with Ampora. Get accurate code answers while you work.
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
                <Link href="/blog/gfci-vs-afci-requirements" className="bg-white/5 hover:bg-white/10 rounded-xl p-6 transition-colors">
                  <span className="text-purple-400 text-sm">NEC Code</span>
                  <h3 className="font-semibold mt-2">GFCI vs AFCI: Complete Requirements Guide</h3>
                </Link>
                <Link href="/blog/nec-article-210-branch-circuits-guide" className="bg-white/5 hover:bg-white/10 rounded-xl p-6 transition-colors">
                  <span className="text-purple-400 text-sm">NEC Code</span>
                  <h3 className="font-semibold mt-2">NEC Article 210: Branch Circuits Guide</h3>
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
