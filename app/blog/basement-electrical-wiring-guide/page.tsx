import { Metadata } from "next";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import { BlogPostingJsonLd, BreadcrumbJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Basement Electrical Wiring Guide: Finishing a Basement to Code",
  description: "Complete guide to basement electrical wiring for finished basements. Covers AFCI protection requirements, receptacle spacing per NEC 210.52, lighting and switch placement, basement bathroom GFCI circuits, bedroom electrical requirements, egress lighting, panel capacity planning, smoke and CO detector wiring, permit and inspection tips, and common code violations to avoid.",
  keywords: [
    "basement electrical wiring",
    "finished basement electrical code",
    "basement AFCI requirements",
    "basement receptacle layout",
    "basement lighting requirements",
    "wiring a finished basement",
    "basement electrical permit",
    "basement bathroom electrical",
    "basement bedroom electrical",
    "basement egress lighting"
  ],
  alternates: {
    canonical: "https://amporalabs.com/blog/basement-electrical-wiring-guide",
  },
  openGraph: {
    title: "Basement Electrical Wiring Guide: Finishing a Basement to Code - Ampora",
    description: "Master basement electrical wiring with this comprehensive code guide covering AFCI requirements, receptacle spacing, lighting, bathroom circuits, and inspection preparation.",
    url: "https://amporalabs.com/blog/basement-electrical-wiring-guide",
    type: "article",
    publishedTime: "2026-03-04",
  },
};

function HeroIllustration() {
  return (
    <svg viewBox="0 0 400 180" className="w-full h-40 md:h-48" aria-label="Basement floor plan showing electrical layout with receptacles, lights, and panel">
      {/* Background */}
      <rect x="10" y="10" width="380" height="160" rx="4" fill="#1f2937" stroke="#374151" strokeWidth="1"/>

      {/* Floor plan outline - basement walls */}
      <rect x="30" y="25" width="340" height="140" rx="2" fill="none" stroke="#6b7280" strokeWidth="2"/>

      {/* Room dividers */}
      <line x1="200" y1="25" x2="200" y2="110" stroke="#6b7280" strokeWidth="1.5"/>
      <line x1="200" y1="110" x2="370" y2="110" stroke="#6b7280" strokeWidth="1.5"/>
      <line x1="310" y1="25" x2="310" y2="110" stroke="#6b7280" strokeWidth="1.5"/>

      {/* Door openings */}
      <line x1="200" y1="60" x2="200" y2="80" stroke="#1f2937" strokeWidth="3"/>
      <line x1="310" y1="50" x2="310" y2="70" stroke="#1f2937" strokeWidth="3"/>
      <line x1="240" y1="110" x2="260" y2="110" stroke="#1f2937" strokeWidth="3"/>

      {/* Room labels */}
      <text x="110" y="90" textAnchor="middle" fill="#9ca3af" fontSize="7" fontWeight="bold">MAIN ROOM</text>
      <text x="250" y="75" textAnchor="middle" fill="#9ca3af" fontSize="6" fontWeight="bold">BEDROOM</text>
      <text x="340" y="75" textAnchor="middle" fill="#9ca3af" fontSize="6" fontWeight="bold">BATH</text>
      <text x="280" y="140" textAnchor="middle" fill="#9ca3af" fontSize="6" fontWeight="bold">UTILITY</text>

      {/* Panel location */}
      <rect x="355" y="125" width="10" height="18" fill="#f59e0b" fillOpacity="0.3" stroke="#f59e0b" strokeWidth="1.5" rx="1"/>
      <text x="360" y="136" textAnchor="middle" fill="#f59e0b" fontSize="4" fontWeight="bold">P</text>
      <text x="360" y="155" textAnchor="middle" fill="#f59e0b" fontSize="4">PANEL</text>

      {/* Receptacle symbols - small circles with two lines */}
      {/* Main room receptacles */}
      <g transform="translate(40, 45)">
        <circle cx="0" cy="0" r="3" fill="none" stroke="#22d3ee" strokeWidth="1.2"/>
        <line x1="-3" y1="0" x2="-7" y2="0" stroke="#22d3ee" strokeWidth="1"/>
        <line x1="0" y1="-3" x2="0" y2="-7" stroke="#22d3ee" strokeWidth="1"/>
      </g>
      <g transform="translate(40, 120)">
        <circle cx="0" cy="0" r="3" fill="none" stroke="#22d3ee" strokeWidth="1.2"/>
        <line x1="-3" y1="0" x2="-7" y2="0" stroke="#22d3ee" strokeWidth="1"/>
        <line x1="0" y1="3" x2="0" y2="7" stroke="#22d3ee" strokeWidth="1"/>
      </g>
      <g transform="translate(100, 155)">
        <circle cx="0" cy="0" r="3" fill="none" stroke="#22d3ee" strokeWidth="1.2"/>
        <line x1="0" y1="3" x2="0" y2="7" stroke="#22d3ee" strokeWidth="1"/>
        <line x1="3" y1="0" x2="7" y2="0" stroke="#22d3ee" strokeWidth="1"/>
      </g>
      <g transform="translate(155, 155)">
        <circle cx="0" cy="0" r="3" fill="none" stroke="#22d3ee" strokeWidth="1.2"/>
        <line x1="0" y1="3" x2="0" y2="7" stroke="#22d3ee" strokeWidth="1"/>
        <line x1="-3" y1="0" x2="-7" y2="0" stroke="#22d3ee" strokeWidth="1"/>
      </g>
      <g transform="translate(155, 35)">
        <circle cx="0" cy="0" r="3" fill="none" stroke="#22d3ee" strokeWidth="1.2"/>
        <line x1="0" y1="-3" x2="0" y2="-7" stroke="#22d3ee" strokeWidth="1"/>
        <line x1="-3" y1="0" x2="-7" y2="0" stroke="#22d3ee" strokeWidth="1"/>
      </g>

      {/* Bedroom receptacles */}
      <g transform="translate(210, 35)">
        <circle cx="0" cy="0" r="3" fill="none" stroke="#22d3ee" strokeWidth="1.2"/>
        <line x1="0" y1="-3" x2="0" y2="-7" stroke="#22d3ee" strokeWidth="1"/>
        <line x1="3" y1="0" x2="7" y2="0" stroke="#22d3ee" strokeWidth="1"/>
      </g>
      <g transform="translate(270, 35)">
        <circle cx="0" cy="0" r="3" fill="none" stroke="#22d3ee" strokeWidth="1.2"/>
        <line x1="0" y1="-3" x2="0" y2="-7" stroke="#22d3ee" strokeWidth="1"/>
        <line x1="-3" y1="0" x2="-7" y2="0" stroke="#22d3ee" strokeWidth="1"/>
      </g>
      <g transform="translate(290, 100)">
        <circle cx="0" cy="0" r="3" fill="none" stroke="#22d3ee" strokeWidth="1.2"/>
        <line x1="3" y1="0" x2="7" y2="0" stroke="#22d3ee" strokeWidth="1"/>
        <line x1="0" y1="3" x2="0" y2="7" stroke="#22d3ee" strokeWidth="1"/>
      </g>

      {/* Bathroom GFCI receptacle */}
      <g transform="translate(340, 35)">
        <circle cx="0" cy="0" r="3.5" fill="none" stroke="#22c55e" strokeWidth="1.5"/>
        <line x1="0" y1="-3.5" x2="0" y2="-7" stroke="#22c55e" strokeWidth="1"/>
        <line x1="3.5" y1="0" x2="7" y2="0" stroke="#22c55e" strokeWidth="1"/>
        <text x="0" y="2" textAnchor="middle" fill="#22c55e" fontSize="4" fontWeight="bold">G</text>
      </g>

      {/* Light fixtures - X in circle */}
      <g transform="translate(110, 70)">
        <circle cx="0" cy="0" r="5" fill="#a855f7" fillOpacity="0.2" stroke="#a855f7" strokeWidth="1"/>
        <line x1="-3" y1="-3" x2="3" y2="3" stroke="#a855f7" strokeWidth="0.8"/>
        <line x1="3" y1="-3" x2="-3" y2="3" stroke="#a855f7" strokeWidth="0.8"/>
      </g>
      <g transform="translate(250, 60)">
        <circle cx="0" cy="0" r="5" fill="#a855f7" fillOpacity="0.2" stroke="#a855f7" strokeWidth="1"/>
        <line x1="-3" y1="-3" x2="3" y2="3" stroke="#a855f7" strokeWidth="0.8"/>
        <line x1="3" y1="-3" x2="-3" y2="3" stroke="#a855f7" strokeWidth="0.8"/>
      </g>
      <g transform="translate(340, 60)">
        <circle cx="0" cy="0" r="5" fill="#a855f7" fillOpacity="0.2" stroke="#a855f7" strokeWidth="1"/>
        <line x1="-3" y1="-3" x2="3" y2="3" stroke="#a855f7" strokeWidth="0.8"/>
        <line x1="3" y1="-3" x2="-3" y2="3" stroke="#a855f7" strokeWidth="0.8"/>
      </g>
      <g transform="translate(280, 130)">
        <circle cx="0" cy="0" r="5" fill="#a855f7" fillOpacity="0.2" stroke="#a855f7" strokeWidth="1"/>
        <line x1="-3" y1="-3" x2="3" y2="3" stroke="#a855f7" strokeWidth="0.8"/>
        <line x1="3" y1="-3" x2="-3" y2="3" stroke="#a855f7" strokeWidth="0.8"/>
      </g>

      {/* Switch symbols - S */}
      <text x="195" y="56" textAnchor="middle" fill="#fbbf24" fontSize="6" fontWeight="bold">S</text>
      <text x="305" y="48" textAnchor="middle" fill="#fbbf24" fontSize="6" fontWeight="bold">S</text>
      <text x="248" y="107" textAnchor="middle" fill="#fbbf24" fontSize="6" fontWeight="bold">S</text>

      {/* Smoke detector */}
      <g transform="translate(60, 35)">
        <circle cx="0" cy="0" r="4" fill="#ef4444" fillOpacity="0.2" stroke="#ef4444" strokeWidth="1"/>
        <text x="0" y="2" textAnchor="middle" fill="#ef4444" fontSize="4" fontWeight="bold">SD</text>
      </g>

      {/* AFCI label */}
      <rect x="32" y="132" width="30" height="10" rx="2" fill="#f97316" fillOpacity="0.2" stroke="#f97316" strokeWidth="0.8"/>
      <text x="47" y="139" textAnchor="middle" fill="#f97316" fontSize="4.5" fontWeight="bold">AFCI</text>

      {/* Legend */}
      <g transform="translate(32, 27)">
        <circle cx="0" cy="0" r="2" fill="none" stroke="#22d3ee" strokeWidth="1"/>
        <text x="5" y="2" fill="#22d3ee" fontSize="4">Receptacle</text>
      </g>
      <g transform="translate(70, 27)">
        <circle cx="0" cy="0" r="2" fill="#a855f7" fillOpacity="0.3" stroke="#a855f7" strokeWidth="1"/>
        <text x="5" y="2" fill="#a855f7" fontSize="4">Light</text>
      </g>
      <g transform="translate(98, 27)">
        <circle cx="0" cy="0" r="2" fill="none" stroke="#22c55e" strokeWidth="1"/>
        <text x="5" y="2" fill="#22c55e" fontSize="4">GFCI</text>
      </g>
    </svg>
  );
}

export default function BasementElectricalWiringGuidePage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navigation />
      <div className="pt-20">
        <BreadcrumbJsonLd
          items={[
            { name: "Home", url: "https://amporalabs.com" },
            { name: "Blog", url: "https://amporalabs.com/blog" },
            { name: "Basement Electrical Wiring Guide", url: "https://amporalabs.com/blog/basement-electrical-wiring-guide" },
          ]}
        />
        <BlogPostingJsonLd
          headline="Basement Electrical Wiring Guide: Finishing a Basement to Code"
          description="Complete guide to basement electrical wiring for finished basements covering AFCI requirements, receptacle spacing, lighting, bathroom circuits, egress lighting, and inspection preparation."
          datePublished="2026-03-04"
          dateModified="2026-03-04"
          url="https://amporalabs.com/blog/basement-electrical-wiring-guide"
          wordCount={4800}
          keywords={["basement electrical wiring", "finished basement electrical code", "basement AFCI requirements", "basement receptacle layout", "basement lighting requirements"]}
        />

        <article className="max-w-4xl mx-auto px-6 py-12">
          {/* Breadcrumb */}
          <nav className="text-sm text-white/60 mb-8">
            <Link href="/" className="hover:text-white">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/blog" className="hover:text-white">Blog</Link>
            <span className="mx-2">/</span>
            <span className="text-white">Basement Electrical Wiring Guide</span>
          </nav>

          {/* Article Header */}
          <header className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <span className="px-3 py-1 bg-emerald-600/20 text-emerald-300 text-sm font-medium rounded-full">
                Installation
              </span>
              <span className="text-white/40 text-sm">18 min read</span>
              <span className="text-white/40 text-sm">March 4, 2026</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6 leading-tight">
              Basement Electrical Wiring Guide: Finishing a Basement to Code
            </h1>
            <p className="text-xl text-white/70">
              Finishing a basement is one of the most common residential projects, but the electrical work must meet the same NEC standards as any other habitable space. This guide covers everything you need to wire a finished basement to code &mdash; from AFCI protection and receptacle spacing to bathroom circuits, egress lighting, smoke detectors, panel capacity planning, and the permit and inspection process.
            </p>
          </header>

          <div className="mb-12 bg-gradient-to-br from-emerald-900/20 to-cyan-900/20 rounded-2xl p-6 border border-white/10">
            <HeroIllustration />
          </div>

          {/* Important Note */}
          <div className="bg-amber-900/40 border-2 border-amber-500/50 rounded-2xl p-6 mb-12">
            <div className="flex items-start gap-4">
              <div className="text-3xl">&#9888;</div>
              <div>
                <h3 className="font-display font-bold text-lg mb-2 text-amber-400">Permit Required</h3>
                <p className="text-white/80 text-sm">
                  Finishing a basement requires an electrical permit in virtually all jurisdictions. This article is for educational purposes and does not replace the need for a licensed electrician and proper inspections. Always check with your local authority having jurisdiction (AHJ) for specific requirements that may exceed the NEC.
                </p>
              </div>
            </div>
          </div>

          {/* Table of Contents */}
          <div className="bg-white/5 rounded-2xl p-6 mb-12">
            <h2 className="font-display font-bold mb-4">In This Guide</h2>
            <ul className="space-y-2 text-white/70">
              <li><a href="#planning-layout" className="hover:text-purple-400">Planning Your Basement Electrical Layout</a></li>
              <li><a href="#afci-requirements" className="hover:text-purple-400">AFCI Protection Requirements for Basements</a></li>
              <li><a href="#receptacle-spacing" className="hover:text-purple-400">Receptacle Spacing per NEC 210.52</a></li>
              <li><a href="#lighting-requirements" className="hover:text-purple-400">Lighting Requirements and Switch Locations</a></li>
              <li><a href="#bathroom-electrical" className="hover:text-purple-400">Basement Bathroom Electrical (GFCI, Exhaust Fan)</a></li>
              <li><a href="#bedroom-requirements" className="hover:text-purple-400">Basement Bedroom Electrical Requirements</a></li>
              <li><a href="#egress-lighting" className="hover:text-purple-400">Egress Lighting Requirements</a></li>
              <li><a href="#running-cable" className="hover:text-purple-400">Running Cable Through Finished Walls</a></li>
              <li><a href="#panel-capacity" className="hover:text-purple-400">Panel Capacity for Basement Circuits</a></li>
              <li><a href="#smoke-co-detectors" className="hover:text-purple-400">Smoke and CO Detector Requirements</a></li>
              <li><a href="#permit-inspection" className="hover:text-purple-400">Permit and Inspection Considerations</a></li>
              <li><a href="#common-violations" className="hover:text-purple-400">Common Code Violations in Basement Wiring</a></li>
            </ul>
          </div>

          {/* Article Content */}
          <div className="prose prose-invert prose-lg max-w-none">

            <section id="planning-layout" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Planning Your Basement Electrical Layout</h2>
              <p className="text-white/80 mb-4">
                Before running a single wire, you need a complete electrical plan for your finished basement. This plan should account for every room, its intended use, and all the code requirements that apply. A well-planned layout avoids costly rework, failed inspections, and the frustration of discovering you need more circuits after the drywall is up.
              </p>
              <p className="text-white/80 mb-4">
                Start by drawing a floor plan of your finished basement showing all rooms, hallways, closets, and stairways. Mark the locations of the existing electrical panel (or where a sub-panel will go), any existing circuits you plan to reuse, and all planned receptacles, switches, and light fixtures. This plan will also be required when you apply for your electrical permit.
              </p>

              <div className="grid md:grid-cols-2 gap-6 my-6">
                <div className="bg-white/5 rounded-xl p-6">
                  <h3 className="font-semibold text-cyan-400 mb-3">Pre-Planning Checklist</h3>
                  <ul className="text-white/60 text-sm space-y-1">
                    <li><strong>Room functions:</strong> Living area, bedroom, bathroom, office, laundry, utility</li>
                    <li><strong>Panel capacity:</strong> Available spaces and amperage</li>
                    <li><strong>Existing circuits:</strong> What can be reused vs. what needs replacing</li>
                    <li><strong>Dedicated circuits:</strong> Bathroom, laundry, kitchen if applicable</li>
                    <li><strong>Low-voltage:</strong> Cable TV, Ethernet, speaker wiring</li>
                    <li><strong>HVAC loads:</strong> Electric baseboard, mini-split, or furnace</li>
                  </ul>
                </div>
                <div className="bg-white/5 rounded-xl p-6">
                  <h3 className="font-semibold text-emerald-400 mb-3">Typical Basement Circuit Count</h3>
                  <ul className="text-white/60 text-sm space-y-1">
                    <li><strong>General lighting:</strong> 1-2 circuits (15A)</li>
                    <li><strong>General receptacles:</strong> 2-3 circuits (20A)</li>
                    <li><strong>Bathroom:</strong> 1 dedicated circuit (20A GFCI)</li>
                    <li><strong>Laundry:</strong> 1 dedicated circuit (20A)</li>
                    <li><strong>Utility/sump pump:</strong> 1 dedicated circuit</li>
                    <li><strong>Electric heat:</strong> 1-2 dedicated circuits</li>
                    <li><strong>Home theater/office:</strong> 1-2 dedicated circuits</li>
                  </ul>
                </div>
              </div>

              <div className="bg-white/5 rounded-xl p-6 my-6">
                <h4 className="font-semibold text-cyan-400 mb-3">Circuit Planning by the Numbers</h4>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                  <div>
                    <p className="text-2xl font-bold text-emerald-400">6-10</p>
                    <p className="text-white/60 text-sm">Typical new circuits for a finished basement</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-cyan-400">12 ft</p>
                    <p className="text-white/60 text-sm">Max receptacle spacing along walls</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-purple-400">20A</p>
                    <p className="text-white/60 text-sm">Minimum for bathroom receptacle circuit</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-amber-400">100%</p>
                    <p className="text-white/60 text-sm">AFCI protection required in finished basements</p>
                  </div>
                </div>
              </div>

              <p className="text-white/80 mb-4">
                Consider future needs as well. It is far cheaper to run an extra circuit or two during rough-in than to open finished walls later. If you might add a kitchenette, home theater, or workshop, plan those circuits now even if you install them later.
              </p>
            </section>

            <section id="afci-requirements" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">AFCI Protection Requirements for Basements</h2>
              <p className="text-white/80 mb-4">
                <strong>Arc-fault circuit interrupter (AFCI)</strong> protection is one of the most important &mdash; and most commonly misunderstood &mdash; requirements for finished basement wiring. Per <strong>NEC 210.12</strong>, AFCI protection is required for all 120-volt, 15- and 20-ampere branch circuits supplying outlets and devices in dwelling unit bedrooms, living rooms, family rooms, dining rooms, libraries, dens, sunrooms, recreation rooms, closets, hallways, laundry areas, and similar rooms or areas. In a finished basement, this effectively means <strong>every circuit</strong> in the finished living space requires AFCI protection.
              </p>

              <div className="bg-orange-900/30 rounded-xl p-6 my-6">
                <h4 className="font-semibold text-orange-400 mb-3">Where AFCI Is Required in a Finished Basement</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <p className="text-white/70 text-sm font-semibold mb-2">AFCI Required:</p>
                    <ul className="text-white/60 text-sm space-y-1">
                      <li>&#10003; Recreation/family room receptacles and lights</li>
                      <li>&#10003; Bedroom receptacles and lights</li>
                      <li>&#10003; Hallway receptacles and lights</li>
                      <li>&#10003; Closet lights</li>
                      <li>&#10003; Office/den receptacles and lights</li>
                      <li>&#10003; Laundry room receptacles and lights</li>
                    </ul>
                  </div>
                  <div>
                    <p className="text-white/70 text-sm font-semibold mb-2">AFCI Typically Not Required:</p>
                    <ul className="text-white/60 text-sm space-y-1">
                      <li>&#10007; Bathroom circuits (GFCI required instead)</li>
                      <li>&#10007; Unfinished utility areas</li>
                      <li>&#10007; Dedicated HVAC equipment circuits</li>
                      <li>&#10007; Sump pump circuit (check local AHJ)</li>
                      <li>&#10007; Fire alarm circuits</li>
                    </ul>
                  </div>
                </div>
              </div>

              <p className="text-white/80 mb-4">
                For a deeper dive into AFCI vs. GFCI protection and where each is required, see our <Link href="/blog/gfci-vs-afci-requirements" className="text-purple-400 hover:text-purple-300 underline">GFCI vs. AFCI Requirements Guide</Link>. Understanding the distinction is critical for basement wiring since both types of protection apply in different areas of the same project.
              </p>

              <h3 className="text-xl font-display font-semibold mb-3 text-cyan-400">AFCI Implementation Options</h3>
              <div className="space-y-3 my-6">
                <div className="bg-white/5 rounded-xl p-4">
                  <p className="font-semibold text-white mb-1">AFCI Circuit Breaker (Most Common)</p>
                  <p className="text-white/60 text-sm">Install a combination-type AFCI breaker at the panel. This protects the entire branch circuit from the panel to the last outlet. This is the simplest and most reliable method for new construction and basement finishing.</p>
                </div>
                <div className="bg-white/5 rounded-xl p-4">
                  <p className="font-semibold text-white mb-1">AFCI Receptacle (Outlet Device)</p>
                  <p className="text-white/60 text-sm">An AFCI receptacle installed at the first outlet in the branch circuit can provide downstream AFCI protection. This is primarily used for retrofit situations where replacing the breaker is impractical. The home run from the panel to the first outlet is not protected.</p>
                </div>
                <div className="bg-white/5 rounded-xl p-4">
                  <p className="font-semibold text-white mb-1">Dual-Function AFCI/GFCI Breaker</p>
                  <p className="text-white/60 text-sm">Where both AFCI and GFCI protection are required on the same circuit (such as a basement laundry with a sink), a dual-function breaker provides both protections from a single device. These are more expensive but simplify installation.</p>
                </div>
              </div>

              <div className="bg-red-900/30 rounded-xl p-6 my-6">
                <h4 className="font-semibold text-red-400 mb-3">Common AFCI Nuisance Tripping in Basements</h4>
                <p className="text-white/70 text-sm mb-2">AFCI breakers can nuisance-trip from certain loads. Be aware of these common causes:</p>
                <ul className="text-white/60 text-sm space-y-1">
                  <li><strong>Treadmills and exercise equipment:</strong> Motor brush arcing can trip AFCI breakers</li>
                  <li><strong>Older vacuum cleaners:</strong> Universal motors with worn brushes</li>
                  <li><strong>Shared neutrals:</strong> Multi-wire branch circuits cause AFCI tripping; use separate neutrals</li>
                  <li><strong>Long home runs:</strong> Excessive cable length can increase susceptibility to tripping</li>
                  <li><strong>Loose connections:</strong> The most common cause &mdash; verify all terminations are tight</li>
                </ul>
              </div>
            </section>

            <section id="receptacle-spacing" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Receptacle Spacing per NEC 210.52</h2>
              <p className="text-white/80 mb-4">
                A finished basement is considered habitable space, so it must meet the same receptacle spacing requirements as any other room in the dwelling. <strong>NEC Section 210.52(A)</strong> establishes the general rule: receptacles must be installed so that no point measured horizontally along the floor line of any wall space is more than <strong>6 feet</strong> from a receptacle outlet. This effectively means a receptacle is required every <strong>12 feet</strong> along the wall, plus at least one receptacle in any wall space 2 feet or wider.
              </p>

              <p className="text-white/80 mb-4">
                For a thorough understanding of branch circuit design and receptacle requirements, refer to our <Link href="/blog/nec-article-210-branch-circuits-guide" className="text-purple-400 hover:text-purple-300 underline">NEC Article 210 Branch Circuits Guide</Link>.
              </p>

              <div className="overflow-x-auto my-6">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-white/20">
                      <th className="text-left py-3 px-4 text-white/60">Requirement</th>
                      <th className="text-left py-3 px-4 text-white/60">NEC Reference</th>
                      <th className="text-left py-3 px-4 text-white/60">Details</th>
                    </tr>
                  </thead>
                  <tbody className="text-white/80">
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">General spacing</td>
                      <td className="py-3 px-4 font-mono text-cyan-400">210.52(A)</td>
                      <td className="py-3 px-4">No point along floor line more than 6 ft from a receptacle</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">Wall space definition</td>
                      <td className="py-3 px-4 font-mono text-cyan-400">210.52(A)(2)</td>
                      <td className="py-3 px-4">Any wall space 2 ft or wider requires a receptacle</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">Floor receptacles</td>
                      <td className="py-3 px-4 font-mono text-cyan-400">210.52(A)(3)</td>
                      <td className="py-3 px-4">Floor receptacles within 18 in of wall count toward spacing</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">Countertop receptacles</td>
                      <td className="py-3 px-4 font-mono text-cyan-400">210.52(C)</td>
                      <td className="py-3 px-4">Required if basement includes a kitchenette with countertops</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">Hallways</td>
                      <td className="py-3 px-4 font-mono text-cyan-400">210.52(H)</td>
                      <td className="py-3 px-4">At least one receptacle in hallways 10 ft or longer</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4">Bathroom receptacle</td>
                      <td className="py-3 px-4 font-mono text-cyan-400">210.52(D)</td>
                      <td className="py-3 px-4">At least one GFCI receptacle within 3 ft of each basin</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="bg-white/5 rounded-xl p-6 my-6">
                <h4 className="font-semibold text-white mb-3">Basement-Specific Receptacle Considerations</h4>
                <ul className="text-white/70 space-y-2">
                  <li><strong>Columns and posts:</strong> Structural columns in an open basement do not count as wall space. However, if a column is finished and creates an isolated wall segment, receptacles may be needed.</li>
                  <li><strong>Bar or kitchenette areas:</strong> If your basement includes a wet bar or kitchenette with countertops, the countertop receptacle requirements of NEC 210.52(C) apply, including GFCI protection for receptacles serving countertop surfaces.</li>
                  <li><strong>Sump pump receptacle:</strong> The sump pump should be on a dedicated circuit, accessible but not blocked by the finished walls. Many jurisdictions require this receptacle to remain accessible even after finishing.</li>
                  <li><strong>Behind-wall access:</strong> Consider installing access panels for junction boxes, sump pump connections, and cleanouts that will be behind finished walls.</li>
                </ul>
              </div>
            </section>

            <section id="lighting-requirements" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Lighting Requirements and Switch Locations</h2>
              <p className="text-white/80 mb-4">
                Adequate lighting is essential in a finished basement, both for livability and code compliance. <strong>NEC 210.70</strong> requires lighting outlets and switching for habitable rooms, hallways, stairways, and storage areas. Since basements typically have low ceilings (often 7 to 8 feet), the choice of lighting fixtures and their placement requires careful planning.
              </p>

              <div className="grid md:grid-cols-2 gap-6 my-6">
                <div className="bg-white/5 rounded-xl p-6">
                  <h3 className="font-semibold text-purple-400 mb-3">Required Lighting Outlets</h3>
                  <ul className="text-white/60 text-sm space-y-2">
                    <li><strong>Every habitable room:</strong> At least one wall-switch-controlled lighting outlet (NEC 210.70(A)(1))</li>
                    <li><strong>Hallways:</strong> At least one wall-switch-controlled lighting outlet</li>
                    <li><strong>Stairways:</strong> Lighting at each floor level with 3-way switches at top and bottom (NEC 210.70(A)(2)(c))</li>
                    <li><strong>Storage/utility areas:</strong> At least one lighting outlet with switch at entry</li>
                    <li><strong>Bathroom:</strong> At least one wall-switch-controlled lighting outlet</li>
                  </ul>
                </div>
                <div className="bg-white/5 rounded-xl p-6">
                  <h3 className="font-semibold text-emerald-400 mb-3">Best Practices for Basement Lighting</h3>
                  <ul className="text-white/60 text-sm space-y-2">
                    <li><strong>Recessed (can) lights:</strong> Ideal for low ceilings; IC-rated where insulation contact is possible</li>
                    <li><strong>Surface-mount LED panels:</strong> Low-profile option for very tight ceiling clearances</li>
                    <li><strong>Dimmer switches:</strong> Great for recreation and theater rooms; verify LED compatibility</li>
                    <li><strong>Under-cabinet lighting:</strong> Useful for bar areas and workbenches</li>
                    <li><strong>Ceiling fan/light combos:</strong> Only if ceiling height is 7 ft minimum to blade tips (check local code)</li>
                  </ul>
                </div>
              </div>

              <div className="bg-amber-900/30 rounded-xl p-6 my-6">
                <h4 className="font-semibold text-amber-400 mb-3">Stairway Switching &mdash; A Common Missed Requirement</h4>
                <p className="text-white/70 text-sm">
                  NEC 210.70(A)(2)(c) requires that interior stairways with six or more risers have a wall switch at each floor level to control the stairway lighting. This means you must install <strong>3-way switches</strong> at both the top and bottom of the basement stairs. This is one of the most frequently missed requirements in basement finishing projects and will fail inspection.
                </p>
              </div>

              <h3 className="text-xl font-display font-semibold mb-3 text-cyan-400">Closet Lighting Restrictions</h3>
              <p className="text-white/80 mb-4">
                <strong>NEC 410.16</strong> restricts the types of luminaires permitted in closets due to fire risk from stored materials. In basement closets, only the following are permitted:
              </p>
              <ul className="list-disc list-inside text-white/70 space-y-2 mb-4">
                <li><strong>Surface-mounted or recessed LED luminaires</strong> identified for closet use</li>
                <li><strong>Surface-mounted or recessed incandescent/fluorescent fixtures</strong> with specific clearance requirements from storage areas</li>
                <li><strong>Pendant fixtures and open/exposed lamp fixtures are prohibited</strong> in closets</li>
              </ul>
              <p className="text-white/80 mb-4">
                Minimum clearances: 12 inches from the nearest shelf storage point for surface-mounted fixtures, 6 inches for recessed fixtures with a solid lens.
              </p>
            </section>

            {/* Mid-Article CTA */}
            <div className="not-prose my-12 bg-gradient-to-r from-purple-900/40 to-cyan-900/40 rounded-xl p-6 border border-purple-500/20">
              <div className="flex flex-col sm:flex-row items-center gap-4">
                <div className="flex-1 text-center sm:text-left">
                  <p className="font-display font-bold text-lg text-white mb-1">Ampora &mdash; The Electrician&apos;s AI Companion</p>
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

            <section id="bathroom-electrical" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Basement Bathroom Electrical (GFCI, Exhaust Fan)</h2>
              <p className="text-white/80 mb-4">
                Adding a bathroom to a finished basement introduces several dedicated electrical requirements. Bathrooms have some of the strictest electrical code requirements in the NEC because of the inherent danger of water and electricity in close proximity.
              </p>

              <div className="space-y-4 my-6">
                <div className="bg-white/5 rounded-xl p-4 flex items-start gap-4">
                  <span className="bg-emerald-600 text-white text-sm font-bold px-3 py-1 rounded-full">1</span>
                  <div>
                    <p className="font-semibold text-white">Dedicated 20-Amp Receptacle Circuit</p>
                    <p className="text-white/60 text-sm">NEC 210.11(C)(3) requires at least one 20-ampere branch circuit to supply bathroom receptacle outlets. This circuit can serve only bathroom receptacles &mdash; it cannot supply lighting or other room outlets. In a basement with one bathroom, a single 20A circuit dedicated to the bathroom receptacle(s) is sufficient.</p>
                  </div>
                </div>
                <div className="bg-white/5 rounded-xl p-4 flex items-start gap-4">
                  <span className="bg-emerald-600 text-white text-sm font-bold px-3 py-1 rounded-full">2</span>
                  <div>
                    <p className="font-semibold text-white">GFCI Protection Required</p>
                    <p className="text-white/60 text-sm">All 125-volt, 15- and 20-ampere receptacles in bathrooms must have GFCI protection per NEC 210.8(A)(1). This includes receptacles near the basin and any other receptacle in the bathroom space. Use a GFCI receptacle or a GFCI circuit breaker.</p>
                  </div>
                </div>
                <div className="bg-white/5 rounded-xl p-4 flex items-start gap-4">
                  <span className="bg-emerald-600 text-white text-sm font-bold px-3 py-1 rounded-full">3</span>
                  <div>
                    <p className="font-semibold text-white">Receptacle Location</p>
                    <p className="text-white/60 text-sm">At least one GFCI-protected receptacle must be installed within 3 feet of the outside edge of each basin per NEC 210.52(D). The receptacle must be on a wall or partition adjacent to the basin, not inside a cabinet.</p>
                  </div>
                </div>
                <div className="bg-white/5 rounded-xl p-4 flex items-start gap-4">
                  <span className="bg-emerald-600 text-white text-sm font-bold px-3 py-1 rounded-full">4</span>
                  <div>
                    <p className="font-semibold text-white">Exhaust Fan</p>
                    <p className="text-white/60 text-sm">Most building codes require mechanical ventilation (exhaust fan) in bathrooms without an operable window. Basement bathrooms almost never have windows, so an exhaust fan is essentially always required. The fan must vent to the exterior &mdash; never into an attic, crawl space, or soffit. The fan circuit can share the bathroom lighting circuit.</p>
                  </div>
                </div>
                <div className="bg-white/5 rounded-xl p-4 flex items-start gap-4">
                  <span className="bg-emerald-600 text-white text-sm font-bold px-3 py-1 rounded-full">5</span>
                  <div>
                    <p className="font-semibold text-white">Lighting</p>
                    <p className="text-white/60 text-sm">At least one wall-switch-controlled lighting outlet is required. Fixtures in shower/tub areas must be suitable for damp or wet locations depending on the zone. Fixtures within the shower stall must be rated for wet locations and connected to a GFCI-protected circuit.</p>
                  </div>
                </div>
              </div>

              <div className="bg-cyan-900/30 rounded-xl p-6 my-6">
                <h4 className="font-semibold text-cyan-400 mb-3">Bathroom Electrical Quick Reference</h4>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-white/20">
                        <th className="text-left py-2 px-3 text-white/60">Item</th>
                        <th className="text-left py-2 px-3 text-white/60">Requirement</th>
                      </tr>
                    </thead>
                    <tbody className="text-white/80">
                      <tr className="border-b border-white/10">
                        <td className="py-2 px-3">Receptacle circuit</td>
                        <td className="py-2 px-3">Dedicated 20A, GFCI protected</td>
                      </tr>
                      <tr className="border-b border-white/10">
                        <td className="py-2 px-3">Receptacle location</td>
                        <td className="py-2 px-3">Within 3 ft of each basin</td>
                      </tr>
                      <tr className="border-b border-white/10">
                        <td className="py-2 px-3">Exhaust fan</td>
                        <td className="py-2 px-3">Required (no window); vent to exterior</td>
                      </tr>
                      <tr className="border-b border-white/10">
                        <td className="py-2 px-3">Lighting</td>
                        <td className="py-2 px-3">Wall-switch controlled; wet-location rated in shower</td>
                      </tr>
                      <tr>
                        <td className="py-2 px-3">Switches</td>
                        <td className="py-2 px-3">Not within reach of tub or shower (NEC 404.4)</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </section>

            <section id="bedroom-requirements" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Basement Bedroom Electrical Requirements</h2>
              <p className="text-white/80 mb-4">
                A basement bedroom must meet the same electrical requirements as any other bedroom in the dwelling. If a room is designated as a bedroom on the plans (or will be used as sleeping quarters), the following electrical requirements apply in addition to the general finished-space requirements.
              </p>

              <div className="grid md:grid-cols-2 gap-6 my-6">
                <div className="bg-purple-900/30 rounded-xl p-6">
                  <h3 className="font-semibold text-purple-400 mb-3">Electrical Requirements</h3>
                  <ul className="text-white/60 text-sm space-y-2">
                    <li><strong>AFCI protection:</strong> Required on all 120V, 15A and 20A circuits supplying the bedroom (NEC 210.12)</li>
                    <li><strong>Receptacle spacing:</strong> Standard 6 ft/12 ft rule per NEC 210.52(A)</li>
                    <li><strong>Lighting outlet:</strong> At least one wall-switch-controlled lighting outlet (NEC 210.70(A)(1))</li>
                    <li><strong>Smoke alarm:</strong> Interconnected, hardwired with battery backup inside the bedroom (IRC R314)</li>
                    <li><strong>CO alarm:</strong> Required outside each sleeping area (IRC R315)</li>
                  </ul>
                </div>
                <div className="bg-emerald-900/30 rounded-xl p-6">
                  <h3 className="font-semibold text-emerald-400 mb-3">Egress Requirements (Building Code)</h3>
                  <ul className="text-white/60 text-sm space-y-2">
                    <li><strong>Egress window:</strong> Minimum 5.7 sq ft opening, max 44 in sill height</li>
                    <li><strong>Window well:</strong> Required if window is below grade; minimum 9 sq ft</li>
                    <li><strong>Egress lighting:</strong> Emergency illumination at the egress path</li>
                    <li><strong>Closet lighting:</strong> NEC 410.16 restrictions on luminaire types</li>
                    <li><strong>Switched outlet alternative:</strong> A switched receptacle can substitute for a ceiling light (NEC 210.70(A)(1) Exception No. 1)</li>
                  </ul>
                </div>
              </div>

              <p className="text-white/80 mb-4">
                One important note: even if the building plans label a room as an &quot;office&quot; or &quot;bonus room,&quot; if it has a closet and meets the building code definition of a sleeping room, many inspectors will require it to meet bedroom electrical requirements including AFCI protection and smoke alarms. When in doubt, wire it as a bedroom.
              </p>
            </section>

            <section id="egress-lighting" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Egress Lighting Requirements</h2>
              <p className="text-white/80 mb-4">
                Egress lighting ensures occupants can safely exit the basement in an emergency. The <strong>International Residential Code (IRC)</strong> and the <strong>NEC</strong> work together to establish lighting requirements along the means of egress from basement living spaces. This is particularly important in basements because they are below grade with limited natural light.
              </p>

              <div className="space-y-3 my-6">
                <div className="bg-white/5 rounded-xl p-6 border-l-4 border-amber-500">
                  <h4 className="font-semibold text-amber-400 mb-2">Stairway Lighting</h4>
                  <p className="text-white/70 text-sm">
                    The stairway from the basement to the main floor must have illumination at all times during use. Per NEC 210.70(A)(2)(c), a wall switch must be provided at each floor level and at each landing if the stairway has six or more risers. Use 3-way switches so the light can be controlled from both the top and bottom of the stairs.
                  </p>
                </div>
                <div className="bg-white/5 rounded-xl p-6 border-l-4 border-amber-500">
                  <h4 className="font-semibold text-amber-400 mb-2">Hallway Lighting</h4>
                  <p className="text-white/70 text-sm">
                    All hallways in the basement egress path require wall-switch-controlled lighting. If the hallway is long, consider adding 3-way switching at each end for convenience and safety.
                  </p>
                </div>
                <div className="bg-white/5 rounded-xl p-6 border-l-4 border-amber-500">
                  <h4 className="font-semibold text-amber-400 mb-2">Exterior Egress Lighting</h4>
                  <p className="text-white/70 text-sm">
                    If the basement has a walkout exit or an egress window well, exterior illumination at the exit point is required. An outdoor-rated fixture controlled by an interior switch provides lighting for the exterior egress area. GFCI protection is required for outdoor lighting circuits.
                  </p>
                </div>
                <div className="bg-white/5 rounded-xl p-6 border-l-4 border-amber-500">
                  <h4 className="font-semibold text-amber-400 mb-2">Emergency and Night Lighting</h4>
                  <p className="text-white/70 text-sm">
                    While not always code-required in residential, installing night lights or low-level LED lighting along the egress path is an excellent practice, especially for basement bedrooms. Battery-backup night lights in hallways and stairways provide illumination during power outages.
                  </p>
                </div>
              </div>
            </section>

            <section id="running-cable" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Running Cable Through Finished Walls</h2>
              <p className="text-white/80 mb-4">
                The wiring method you choose for a finished basement depends on the wall construction, local code amendments, and whether you are using wood framing, steel studs, or furring strips. NM cable (Romex) is the most common wiring method for residential basement finishing, but some jurisdictions require conduit or MC cable.
              </p>

              <div className="grid md:grid-cols-2 gap-6 my-6">
                <div className="bg-white/5 rounded-xl p-6">
                  <h3 className="font-semibold text-cyan-400 mb-3">NM Cable (Romex) &mdash; NEC 334</h3>
                  <ul className="text-white/60 text-sm space-y-2">
                    <li><strong>Permitted:</strong> In wood-framed walls behind drywall or paneling</li>
                    <li><strong>Bored holes:</strong> Center of stud with minimum 1-1/4 in from edge, or use nail plates</li>
                    <li><strong>Stapling:</strong> Within 12 in of every box, then every 4.5 ft</li>
                    <li><strong>Steel studs:</strong> NM cable can pass through steel studs using listed bushings or grommets to protect the cable</li>
                    <li><strong>Not permitted:</strong> Exposed runs (must be behind finished surface), damp or wet locations</li>
                  </ul>
                </div>
                <div className="bg-white/5 rounded-xl p-6">
                  <h3 className="font-semibold text-emerald-400 mb-3">MC Cable &mdash; NEC 330</h3>
                  <ul className="text-white/60 text-sm space-y-2">
                    <li><strong>Advantage:</strong> Can be used exposed or concealed; metal armor provides physical protection</li>
                    <li><strong>Furring strips:</strong> MC cable is often preferred when walls use furring strips on concrete</li>
                    <li><strong>Support:</strong> Secured within 12 in of box, then every 6 ft</li>
                    <li><strong>Anti-short bushing:</strong> Required at each box termination</li>
                    <li><strong>Some jurisdictions:</strong> Required in all basement wiring regardless of framing</li>
                  </ul>
                </div>
              </div>

              <div className="bg-white/5 rounded-xl p-6 my-6">
                <h4 className="font-semibold text-white mb-3">Basement-Specific Wiring Considerations</h4>
                <ul className="text-white/70 space-y-2">
                  <li><strong>Moisture barrier:</strong> If the basement wall has a vapor barrier (poly sheeting) against the concrete, ensure cables do not penetrate or compromise the barrier.</li>
                  <li><strong>Concrete penetrations:</strong> Where cables pass through concrete walls or floors, use approved sleeves and seal the penetrations to prevent moisture intrusion.</li>
                  <li><strong>Insulation contact:</strong> If cables run through insulated cavities, NM cable is permitted in contact with thermal insulation. Ensure recessed light fixtures are IC-rated (insulation contact) if they will touch insulation.</li>
                  <li><strong>Ceiling access:</strong> Consider leaving a portion of the basement ceiling as a drop ceiling for future access to wiring, plumbing, and HVAC above.</li>
                  <li><strong>Protection from damage:</strong> NEC 300.4 requires nail plates where cables pass through studs less than 1-1/4 inches from the edge, and physical protection where cables are subject to damage.</li>
                </ul>
              </div>
            </section>

            <section id="panel-capacity" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Panel Capacity for Basement Circuits</h2>
              <p className="text-white/80 mb-4">
                Before adding 6 to 10 new circuits for a finished basement, you must verify that the existing electrical panel has the capacity to handle the additional load. This means checking both the <strong>physical space</strong> (available breaker slots) and the <strong>electrical capacity</strong> (total amperage). For a detailed understanding of residential load calculations, see our <Link href="/blog/residential-load-calculations" className="text-purple-400 hover:text-purple-300 underline">Residential Load Calculations Guide</Link>.
              </p>

              <div className="space-y-4 my-6">
                <div className="bg-white/5 rounded-xl p-6">
                  <h3 className="font-semibold text-cyan-400 mb-2">Step 1: Count Available Breaker Spaces</h3>
                  <p className="text-white/70 text-sm">
                    Open the panel cover and count the available (unused) breaker spaces. A typical finished basement needs 8-12 spaces for new circuits (AFCI breakers are full-size and cannot use tandem/twin breakers in most panels). If the panel is full, you may need a sub-panel.
                  </p>
                </div>
                <div className="bg-white/5 rounded-xl p-6">
                  <h3 className="font-semibold text-cyan-400 mb-2">Step 2: Calculate Existing Load</h3>
                  <p className="text-white/70 text-sm">
                    Perform a load calculation per NEC Article 220 to determine the total existing demand on the service. This includes the general lighting load (3 VA per square foot of existing finished space), fixed appliances, HVAC, range, dryer, water heater, and other loads.
                  </p>
                </div>
                <div className="bg-white/5 rounded-xl p-6">
                  <h3 className="font-semibold text-cyan-400 mb-2">Step 3: Add the Basement Load</h3>
                  <p className="text-white/70 text-sm">
                    Add the new basement load: 3 VA per square foot of new finished basement space for general lighting and receptacles, plus any dedicated loads (electric heat, bathroom exhaust fan, sump pump, etc.). Apply demand factors per NEC 220.42 for dwelling units.
                  </p>
                </div>
                <div className="bg-white/5 rounded-xl p-6">
                  <h3 className="font-semibold text-cyan-400 mb-2">Step 4: Compare to Service Size</h3>
                  <p className="text-white/70 text-sm">
                    If the total calculated load exceeds 80% of the service capacity (e.g., 160A for a 200A service), you may need a service upgrade. Most modern 200A services have adequate capacity for a basement finish, but older 100A or 150A services may need upgrading.
                  </p>
                </div>
              </div>

              <div className="bg-amber-900/30 rounded-xl p-6 my-6">
                <h4 className="font-semibold text-amber-400 mb-3">When a Sub-Panel Is Needed</h4>
                <p className="text-white/70 text-sm mb-2">Consider installing a sub-panel in the basement when:</p>
                <ul className="text-white/60 text-sm space-y-1">
                  <li><strong>Insufficient spaces:</strong> The main panel does not have enough open spaces for all new circuits</li>
                  <li><strong>Long home runs:</strong> The main panel is far from the basement; a local sub-panel reduces cable runs and voltage drop</li>
                  <li><strong>Future expansion:</strong> You want extra capacity for future additions (workshop, sauna, EV charger)</li>
                  <li><strong>Typical sizing:</strong> A 60A or 100A sub-panel with 20-24 spaces is common for basement installations</li>
                </ul>
              </div>
            </section>

            <section id="smoke-co-detectors" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Smoke and CO Detector Requirements</h2>
              <p className="text-white/80 mb-4">
                Smoke alarms and carbon monoxide (CO) alarms are life-safety devices required by the <strong>International Residential Code (IRC)</strong> and often enforced as part of the electrical inspection for a finished basement. When finishing a basement, new hardwired, interconnected smoke and CO alarms must be installed.
              </p>

              <div className="grid md:grid-cols-2 gap-6 my-6">
                <div className="bg-red-900/30 rounded-xl p-6">
                  <h3 className="font-semibold text-red-400 mb-3">Smoke Alarm Placement (IRC R314)</h3>
                  <ul className="text-white/60 text-sm space-y-2">
                    <li><strong>Inside each bedroom:</strong> On the ceiling or wall within 12 in of ceiling</li>
                    <li><strong>Outside sleeping areas:</strong> In the immediate vicinity of the bedrooms</li>
                    <li><strong>Each story:</strong> At least one smoke alarm on the basement level</li>
                    <li><strong>Interconnected:</strong> All smoke alarms must be interconnected so when one sounds, they all sound</li>
                    <li><strong>Hardwired:</strong> AC-powered with battery backup (not battery-only)</li>
                  </ul>
                </div>
                <div className="bg-orange-900/30 rounded-xl p-6">
                  <h3 className="font-semibold text-orange-400 mb-3">CO Alarm Placement (IRC R315)</h3>
                  <ul className="text-white/60 text-sm space-y-2">
                    <li><strong>Outside sleeping areas:</strong> Within the immediate vicinity of each separate sleeping area</li>
                    <li><strong>Each story:</strong> At least one CO alarm on the basement level if fuel-burning appliances are present or attached garage exists</li>
                    <li><strong>Interconnected:</strong> Must be interconnected with smoke alarms</li>
                    <li><strong>Combination units:</strong> Combination smoke/CO alarms can satisfy both requirements</li>
                    <li><strong>Fuel-burning equipment:</strong> Required even for water heaters, furnaces, or fireplaces on any level</li>
                  </ul>
                </div>
              </div>

              <p className="text-white/80 mb-4">
                When finishing a basement, you must also bring the <strong>entire dwelling</strong> up to current smoke alarm requirements per IRC R314.3.1. This means if the existing upstairs smoke alarms are battery-only, you may be required to upgrade them to hardwired, interconnected units as part of the basement finishing permit. Check with your local AHJ &mdash; this requirement catches many homeowners by surprise.
              </p>

              <p className="text-white/80 mb-4">
                For comprehensive pre-inspection guidance, review our <Link href="/blog/electrical-inspection-checklist" className="text-purple-400 hover:text-purple-300 underline">Electrical Inspection Checklist</Link> to ensure all safety devices and wiring methods pass on the first inspection.
              </p>
            </section>

            <section id="permit-inspection" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Permit and Inspection Considerations</h2>
              <p className="text-white/80 mb-4">
                An electrical permit is required for finishing a basement in virtually every jurisdiction. The permit process ensures the work is reviewed by a qualified inspector and meets the adopted electrical code. Skipping the permit creates serious problems: insurance issues, liability exposure, difficulty selling the home, and most importantly, safety risks.
              </p>

              <div className="space-y-4 my-6">
                <div className="bg-white/5 rounded-xl p-4 flex items-start gap-4">
                  <span className="bg-purple-600 text-white text-sm font-bold px-3 py-1 rounded-full">1</span>
                  <div>
                    <p className="font-semibold text-white">Submit Plans and Apply for Permit</p>
                    <p className="text-white/60 text-sm">Provide a floor plan showing the proposed layout, circuit schedule, panel details, and any structural changes. Some jurisdictions require plans drawn by a licensed designer; others accept homeowner-drawn plans. The electrical permit is often part of a larger basement finishing permit package.</p>
                  </div>
                </div>
                <div className="bg-white/5 rounded-xl p-4 flex items-start gap-4">
                  <span className="bg-purple-600 text-white text-sm font-bold px-3 py-1 rounded-full">2</span>
                  <div>
                    <p className="font-semibold text-white">Rough-In Inspection</p>
                    <p className="text-white/60 text-sm">Schedule this inspection after all boxes are mounted, cables are run, and connections are made at the panel &mdash; but <strong>before drywall is installed</strong>. The inspector will check cable routing, box fill, nail plates, stapling, grounding, AFCI/GFCI breakers, and overall compliance. This is the critical inspection; issues found after drywall require tearing out walls.</p>
                  </div>
                </div>
                <div className="bg-white/5 rounded-xl p-4 flex items-start gap-4">
                  <span className="bg-purple-600 text-white text-sm font-bold px-3 py-1 rounded-full">3</span>
                  <div>
                    <p className="font-semibold text-white">Final Inspection</p>
                    <p className="text-white/60 text-sm">After drywall, trim, and device installation are complete, schedule the final inspection. The inspector will verify all devices are installed, cover plates in place, AFCI/GFCI protection functional (test buttons work), smoke/CO alarms operational and interconnected, and all switches and receptacles properly wired.</p>
                  </div>
                </div>
              </div>

              <div className="bg-white/5 rounded-xl p-6 my-6">
                <h4 className="font-semibold text-white mb-3">What Inspectors Look For</h4>
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="text-cyan-400 font-semibold mb-2">Rough-In Inspection</p>
                    <ul className="text-white/60 space-y-1">
                      <li>&#9744; Proper cable type and sizing</li>
                      <li>&#9744; Correct box fill calculations</li>
                      <li>&#9744; Nail plates where required</li>
                      <li>&#9744; Cable properly stapled and supported</li>
                      <li>&#9744; Correct number of circuits</li>
                      <li>&#9744; AFCI breakers installed</li>
                      <li>&#9744; Grounding and bonding correct</li>
                      <li>&#9744; Smoke alarm rough-in wiring</li>
                    </ul>
                  </div>
                  <div>
                    <p className="text-emerald-400 font-semibold mb-2">Final Inspection</p>
                    <ul className="text-white/60 space-y-1">
                      <li>&#9744; All devices installed and functional</li>
                      <li>&#9744; Cover plates on all boxes</li>
                      <li>&#9744; AFCI/GFCI test buttons functional</li>
                      <li>&#9744; Correct polarity on all receptacles</li>
                      <li>&#9744; Smoke/CO alarms installed and interconnected</li>
                      <li>&#9744; Stairway 3-way switches work correctly</li>
                      <li>&#9744; Bathroom exhaust fan vented to exterior</li>
                      <li>&#9744; Panel directory updated</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            <section id="common-violations" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Common Code Violations in Basement Wiring</h2>
              <p className="text-white/80 mb-4">
                Basement finishing projects generate a high rate of electrical inspection failures, especially when the work is performed by homeowners or general contractors without electrical expertise. Here are the most common violations found during basement electrical inspections:
              </p>

              <div className="grid md:grid-cols-2 gap-4 my-6">
                <div className="bg-red-900/20 rounded-xl p-6 border border-red-500/20">
                  <h4 className="font-semibold text-red-400 mb-3">Missing AFCI Protection</h4>
                  <p className="text-white/60 text-sm">
                    The number one violation: failing to install AFCI breakers on all required basement circuits. Every 120V, 15A and 20A branch circuit supplying outlets in finished basement living spaces requires AFCI protection per NEC 210.12.
                  </p>
                </div>
                <div className="bg-red-900/20 rounded-xl p-6 border border-red-500/20">
                  <h4 className="font-semibold text-red-400 mb-3">No 3-Way Switch at Stairs</h4>
                  <p className="text-white/60 text-sm">
                    Failing to install 3-way switches at both the top and bottom of the basement stairway for stairway lighting. This is required by NEC 210.70(A)(2)(c) when the stairway has six or more risers.
                  </p>
                </div>
                <div className="bg-red-900/20 rounded-xl p-6 border border-red-500/20">
                  <h4 className="font-semibold text-red-400 mb-3">Insufficient Receptacles</h4>
                  <p className="text-white/60 text-sm">
                    Not meeting the 6-foot spacing rule of NEC 210.52(A). Every wall space 2 feet or wider needs a receptacle, and no point along the floor line should be more than 6 feet from a receptacle outlet.
                  </p>
                </div>
                <div className="bg-red-900/20 rounded-xl p-6 border border-red-500/20">
                  <h4 className="font-semibold text-red-400 mb-3">Bathroom Not on Dedicated Circuit</h4>
                  <p className="text-white/60 text-sm">
                    Sharing the bathroom receptacle circuit with other rooms or with the bathroom lighting. NEC 210.11(C)(3) requires a dedicated 20A circuit for bathroom receptacles.
                  </p>
                </div>
                <div className="bg-red-900/20 rounded-xl p-6 border border-red-500/20">
                  <h4 className="font-semibold text-red-400 mb-3">Missing Nail Plates</h4>
                  <p className="text-white/60 text-sm">
                    Not installing steel nail plates where cables pass through studs within 1-1/4 inches of the stud edge. Per NEC 300.4(A)(1), cables must be protected from nails and screws by steel plates at least 1/16 inch thick.
                  </p>
                </div>
                <div className="bg-red-900/20 rounded-xl p-6 border border-red-500/20">
                  <h4 className="font-semibold text-red-400 mb-3">Exhaust Fan Not Vented Outside</h4>
                  <p className="text-white/60 text-sm">
                    Bathroom exhaust fans vented into the joist cavity, crawl space, or rim joist area instead of to the building exterior. This causes moisture damage and mold. The duct must terminate outdoors.
                  </p>
                </div>
                <div className="bg-red-900/20 rounded-xl p-6 border border-red-500/20">
                  <h4 className="font-semibold text-red-400 mb-3">Smoke Alarms Not Interconnected</h4>
                  <p className="text-white/60 text-sm">
                    Installing battery-only smoke alarms or failing to interconnect new basement alarms with the existing alarms in the dwelling. All smoke alarms must be hardwired, interconnected, and have battery backup.
                  </p>
                </div>
                <div className="bg-red-900/20 rounded-xl p-6 border border-red-500/20">
                  <h4 className="font-semibold text-red-400 mb-3">Overcrowded Boxes</h4>
                  <p className="text-white/60 text-sm">
                    Exceeding box fill calculations per NEC 314.16. Each conductor, device, clamp, and ground counts toward the box fill volume. Undersized boxes are a fire hazard and a common inspection failure.
                  </p>
                </div>
              </div>

              <div className="bg-emerald-900/30 rounded-xl p-6 my-6">
                <h4 className="font-semibold text-emerald-400 mb-3">Pro Tip: Avoid Rework</h4>
                <p className="text-white/70 text-sm">
                  The single best way to avoid failed inspections and costly rework is to schedule the rough-in inspection <strong>before</strong> installing any drywall. Most violations are easily corrected when the framing is exposed. Once the walls are closed up, even minor corrections can require cutting open drywall, patching, and repainting &mdash; turning a 15-minute fix into a full day of work.
                </p>
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
                  Join thousands of electricians using Ampora for instant NEC code answers, electrical calculations, and AI-powered troubleshooting &mdash; right from your phone.
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
                <Link href="/blog/gfci-vs-afci-requirements" className="bg-white/5 hover:bg-white/10 rounded-xl p-6 transition-colors">
                  <span className="text-emerald-400 text-sm">Installation</span>
                  <h3 className="font-semibold mt-2">GFCI vs AFCI Protection: Requirements & Differences</h3>
                </Link>
                <Link href="/blog/nec-article-210-branch-circuits-guide" className="bg-white/5 hover:bg-white/10 rounded-xl p-6 transition-colors">
                  <span className="text-purple-400 text-sm">NEC Code</span>
                  <h3 className="font-semibold mt-2">NEC Article 210: Branch Circuits Guide</h3>
                </Link>
                <Link href="/blog/residential-load-calculations" className="bg-white/5 hover:bg-white/10 rounded-xl p-6 transition-colors">
                  <span className="text-blue-400 text-sm">Calculations</span>
                  <h3 className="font-semibold mt-2">Residential Electrical Load Calculations</h3>
                </Link>
                <Link href="/blog/recessed-lighting-installation-guide" className="bg-white/5 hover:bg-white/10 rounded-xl p-6 transition-colors">
                  <span className="text-emerald-400 text-sm">Installation</span>
                  <h3 className="font-semibold mt-2">Recessed Lighting Installation Guide</h3>
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
