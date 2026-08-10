import { Metadata } from "next";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import { BlogPostingJsonLd, BreadcrumbJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Home Workshop Electrical Setup: Circuit Planning for Power Tools & Welders",
  description: "Complete guide to planning your home workshop electrical system. Learn workshop sub-panel sizing, welder circuit requirements, air compressor wiring, 240V shop circuits, power tool dedicated circuits, workshop lighting layout, receptacle placement strategies, and dust collector wiring for woodworking and metalworking shops.",
  keywords: [
    "workshop electrical setup",
    "shop wiring plan",
    "welder circuit requirements",
    "air compressor circuit",
    "workshop sub panel",
    "power tool circuits",
    "garage workshop wiring",
    "woodworking shop electrical",
    "workshop lighting",
    "240v shop circuits"
  ],
  alternates: {
    canonical: "https://amporalabs.com/blog/home-workshop-electrical-setup",
  },
  openGraph: {
    title: "Home Workshop Electrical Setup: Circuit Planning for Power Tools & Welders - Ampora",
    description: "Plan your home workshop electrical system with this comprehensive guide covering sub-panels, 240V circuits, welder wiring, tool circuits, and shop lighting.",
    url: "https://amporalabs.com/blog/home-workshop-electrical-setup",
    type: "article",
    publishedTime: "2026-03-04",
  },
};

function HeroIllustration() {
  return (
    <svg viewBox="0 0 400 180" className="w-full h-40 md:h-48" aria-label="Workshop layout showing tools, sub-panel, and electrical circuits">
      {/* Background */}
      <rect x="10" y="10" width="380" height="160" rx="4" fill="#1f2937" stroke="#374151" strokeWidth="1"/>

      {/* Workshop Floor */}
      <rect x="20" y="130" width="360" height="35" rx="2" fill="#374151" fillOpacity="0.5"/>

      {/* Sub-Panel on Wall */}
      <rect x="30" y="25" width="50" height="70" rx="2" fill="#111827" stroke="#10b981" strokeWidth="1.5"/>
      <text x="55" y="42" textAnchor="middle" fill="#10b981" fontSize="6" fontWeight="bold">SUB</text>
      <text x="55" y="50" textAnchor="middle" fill="#10b981" fontSize="6" fontWeight="bold">PANEL</text>
      {/* Breaker slots */}
      <rect x="36" y="55" width="16" height="4" rx="1" fill="#10b981" fillOpacity="0.4"/>
      <rect x="36" y="61" width="16" height="4" rx="1" fill="#10b981" fillOpacity="0.4"/>
      <rect x="36" y="67" width="16" height="4" rx="1" fill="#10b981" fillOpacity="0.4"/>
      <rect x="36" y="73" width="16" height="4" rx="1" fill="#10b981" fillOpacity="0.4"/>
      <rect x="54" y="55" width="16" height="4" rx="1" fill="#f59e0b" fillOpacity="0.4"/>
      <rect x="54" y="61" width="16" height="4" rx="1" fill="#f59e0b" fillOpacity="0.4"/>
      <rect x="54" y="67" width="16" height="4" rx="1" fill="#f59e0b" fillOpacity="0.4"/>
      <rect x="54" y="73" width="16" height="4" rx="1" fill="#f59e0b" fillOpacity="0.4"/>
      <text x="55" y="88" textAnchor="middle" fill="#9ca3af" fontSize="4.5">60A / 100A</text>

      {/* Circuit lines from panel */}
      <line x1="80" y1="58" x2="120" y2="58" stroke="#10b981" strokeWidth="1" strokeDasharray="3,2"/>
      <line x1="80" y1="64" x2="180" y2="64" stroke="#f59e0b" strokeWidth="1" strokeDasharray="3,2"/>
      <line x1="80" y1="70" x2="260" y2="70" stroke="#ef4444" strokeWidth="1" strokeDasharray="3,2"/>
      <line x1="80" y1="76" x2="340" y2="76" stroke="#8b5cf6" strokeWidth="1" strokeDasharray="3,2"/>

      {/* Table Saw */}
      <g transform="translate(100, 100)">
        <rect x="0" y="0" width="50" height="30" rx="2" fill="#1e3a5f" stroke="#3b82f6" strokeWidth="1"/>
        <line x1="10" y1="15" x2="40" y2="15" stroke="#60a5fa" strokeWidth="1.5"/>
        <circle cx="25" cy="15" r="8" fill="none" stroke="#60a5fa" strokeWidth="0.8" strokeDasharray="2,1"/>
        <text x="25" y="38" textAnchor="middle" fill="#9ca3af" fontSize="5">Table Saw</text>
        <text x="25" y="44" textAnchor="middle" fill="#10b981" fontSize="4">20A / 120V</text>
      </g>

      {/* Welder */}
      <g transform="translate(170, 100)">
        <rect x="0" y="0" width="50" height="30" rx="2" fill="#3b1f1f" stroke="#ef4444" strokeWidth="1"/>
        <circle cx="25" cy="12" r="6" fill="none" stroke="#ef4444" strokeWidth="1.5"/>
        <line x1="19" y1="12" x2="31" y2="12" stroke="#ef4444" strokeWidth="1"/>
        <line x1="25" y1="6" x2="25" y2="18" stroke="#ef4444" strokeWidth="1"/>
        <text x="25" y="38" textAnchor="middle" fill="#9ca3af" fontSize="5">Welder</text>
        <text x="25" y="44" textAnchor="middle" fill="#f59e0b" fontSize="4">50A / 240V</text>
      </g>

      {/* Air Compressor */}
      <g transform="translate(240, 100)">
        <rect x="0" y="0" width="45" height="30" rx="2" fill="#1f2d1f" stroke="#22c55e" strokeWidth="1"/>
        <circle cx="22" cy="15" r="10" fill="none" stroke="#22c55e" strokeWidth="1"/>
        <circle cx="22" cy="15" r="5" fill="none" stroke="#22c55e" strokeWidth="0.8"/>
        <text x="22" y="38" textAnchor="middle" fill="#9ca3af" fontSize="5">Compressor</text>
        <text x="22" y="44" textAnchor="middle" fill="#ef4444" fontSize="4">30A / 240V</text>
      </g>

      {/* Dust Collector */}
      <g transform="translate(305, 100)">
        <rect x="0" y="0" width="45" height="30" rx="2" fill="#2d1f3b" stroke="#8b5cf6" strokeWidth="1"/>
        <circle cx="22" cy="10" r="7" fill="none" stroke="#8b5cf6" strokeWidth="1"/>
        <line x1="22" y1="17" x2="22" y2="27" stroke="#8b5cf6" strokeWidth="1.5"/>
        <line x1="15" y1="27" x2="29" y2="27" stroke="#8b5cf6" strokeWidth="1"/>
        <text x="22" y="38" textAnchor="middle" fill="#9ca3af" fontSize="5">Dust Collector</text>
        <text x="22" y="44" textAnchor="middle" fill="#8b5cf6" fontSize="4">20A / 240V</text>
      </g>

      {/* Ceiling Lights */}
      <g transform="translate(100, 20)">
        <rect x="0" y="0" width="260" height="12" rx="2" fill="#fbbf24" fillOpacity="0.08" stroke="#fbbf24" strokeWidth="0.5"/>
        <circle cx="40" cy="6" r="3" fill="#fbbf24" fillOpacity="0.5"/>
        <circle cx="90" cy="6" r="3" fill="#fbbf24" fillOpacity="0.5"/>
        <circle cx="140" cy="6" r="3" fill="#fbbf24" fillOpacity="0.5"/>
        <circle cx="190" cy="6" r="3" fill="#fbbf24" fillOpacity="0.5"/>
        <circle cx="240" cy="6" r="3" fill="#fbbf24" fillOpacity="0.5"/>
        <text x="130" y="22" textAnchor="middle" fill="#fbbf24" fontSize="4.5" fillOpacity="0.7">LED Shop Lights - 20A Lighting Circuit</text>
      </g>

      {/* Legend */}
      <g transform="translate(110, 50)">
        <line x1="0" y1="0" x2="12" y2="0" stroke="#10b981" strokeWidth="1.5" strokeDasharray="3,2"/>
        <text x="15" y="2" fill="#9ca3af" fontSize="4">120V Circuit</text>
        <line x1="70" y1="0" x2="82" y2="0" stroke="#f59e0b" strokeWidth="1.5" strokeDasharray="3,2"/>
        <text x="85" y="2" fill="#9ca3af" fontSize="4">240V Circuit</text>
        <line x1="140" y1="0" x2="152" y2="0" stroke="#ef4444" strokeWidth="1.5" strokeDasharray="3,2"/>
        <text x="155" y="2" fill="#9ca3af" fontSize="4">240V Heavy</text>
        <line x1="205" y1="0" x2="217" y2="0" stroke="#8b5cf6" strokeWidth="1.5" strokeDasharray="3,2"/>
        <text x="220" y="2" fill="#9ca3af" fontSize="4">Dedicated</text>
      </g>
    </svg>
  );
}

export default function HomeWorkshopElectricalSetupPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navigation />
      <div className="pt-20">
        <BreadcrumbJsonLd
          items={[
            { name: "Home", url: "https://amporalabs.com" },
            { name: "Blog", url: "https://amporalabs.com/blog" },
            { name: "Home Workshop Electrical Setup", url: "https://amporalabs.com/blog/home-workshop-electrical-setup" },
          ]}
        />
        <BlogPostingJsonLd
          headline="Home Workshop Electrical Setup: Circuit Planning for Power Tools & Welders"
          description="Complete guide to planning your home workshop electrical system covering sub-panel sizing, 240V circuits, welder wiring, power tool dedicated circuits, and shop lighting layout."
          datePublished="2026-03-04"
          dateModified="2026-03-04"
          url="https://amporalabs.com/blog/home-workshop-electrical-setup"
          wordCount={5200}
          keywords={["workshop electrical setup", "shop wiring plan", "welder circuit requirements", "workshop sub panel", "power tool circuits"]}
        />

        <article className="max-w-4xl mx-auto px-6 py-12">
          {/* Breadcrumb */}
          <nav className="text-sm text-white/60 mb-8">
            <Link href="/" className="hover:text-white">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/blog" className="hover:text-white">Blog</Link>
            <span className="mx-2">/</span>
            <span className="text-white">Home Workshop Electrical Setup</span>
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
              Home Workshop Electrical Setup: Circuit Planning for Power Tools &amp; Welders
            </h1>
            <p className="text-xl text-white/70">
              A well-planned electrical system is the backbone of any productive workshop. Whether you&apos;re building a woodworking shop, a metal fabrication space, or an all-purpose garage workshop, getting the wiring right from the start prevents tripped breakers, voltage drop problems, and safety hazards. This guide covers everything from sub-panel sizing and 240V welder circuits to dust collector wiring, receptacle placement, and lighting layout for your home shop.
            </p>
          </header>

          <div className="mb-12 bg-gradient-to-br from-emerald-900/20 to-cyan-900/20 rounded-2xl p-6 border border-white/10">
            <HeroIllustration />
          </div>

          {/* Safety Warning */}
          <div className="bg-red-900/40 border-2 border-red-500/50 rounded-2xl p-6 mb-12">
            <div className="flex items-start gap-4">
              <div className="text-3xl">&#9888;</div>
              <div>
                <h3 className="font-display font-bold text-lg mb-2 text-red-400">Electrical Work Safety Notice</h3>
                <p className="text-white/80 text-sm">
                  Workshop electrical installations involve working with high-amperage circuits, 240V power, and sub-panel wiring. This work typically requires a permit and inspection by your local authority having jurisdiction (AHJ). Unless you are a licensed electrician, hire a qualified professional for panel work, 240V circuit installation, and any work inside electrical enclosures. All installations must comply with the NEC and local codes.
                </p>
              </div>
            </div>
          </div>

          {/* Table of Contents */}
          <div className="bg-white/5 rounded-2xl p-6 mb-12">
            <h2 className="font-display font-bold mb-4">In This Guide</h2>
            <ul className="space-y-2 text-white/70">
              <li><a href="#planning-layout" className="hover:text-purple-400">Planning Your Workshop Electrical Layout</a></li>
              <li><a href="#total-load" className="hover:text-purple-400">Determining Total Load: Common Tool Wattages</a></li>
              <li><a href="#sub-panel-sizing" className="hover:text-purple-400">Sub-Panel Sizing for Workshops</a></li>
              <li><a href="#120v-circuits" className="hover:text-purple-400">120V Circuits for General Use</a></li>
              <li><a href="#240v-circuits" className="hover:text-purple-400">240V Circuits for Welders, Compressors &amp; Dust Collectors</a></li>
              <li><a href="#dedicated-circuits" className="hover:text-purple-400">Dedicated Circuits for Stationary Tools</a></li>
              <li><a href="#lighting-layout" className="hover:text-purple-400">Lighting Layout: Task and Ambient</a></li>
              <li><a href="#receptacle-placement" className="hover:text-purple-400">Receptacle Placement Strategies</a></li>
              <li><a href="#dust-collector-wiring" className="hover:text-purple-400">Dust Collector Wiring</a></li>
              <li><a href="#compressed-air-electrical" className="hover:text-purple-400">Compressed Air and Electrical Considerations</a></li>
              <li><a href="#common-mistakes" className="hover:text-purple-400">Common Workshop Electrical Mistakes</a></li>
            </ul>
          </div>

          {/* Article Content */}
          <div className="prose prose-invert prose-lg max-w-none">

            <section id="planning-layout" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Planning Your Workshop Electrical Layout</h2>
              <p className="text-white/80 mb-4">
                Before pulling a single wire, you need a clear plan. The biggest mistake workshop owners make is wiring reactively &mdash; adding one circuit at a time as they buy new tools. This approach leads to overloaded circuits, tangled extension cords, and eventually a panel that cannot support the shop&apos;s real needs.
              </p>
              <p className="text-white/80 mb-4">
                Start by sketching your shop layout on graph paper or a digital tool. Mark the locations of every stationary tool (table saw, band saw, jointer, planer, drill press, welder, compressor), your workbench areas, and where you want overhead lighting. Then trace the path from each tool back to where your sub-panel will be mounted.
              </p>

              <div className="bg-white/5 rounded-xl p-6 my-6">
                <h4 className="font-semibold text-cyan-400 mb-3">Workshop Planning Checklist</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <p className="font-semibold text-white text-sm mb-2">Before You Wire</p>
                    <ul className="text-white/60 text-sm space-y-1">
                      <li>&#9744; List every tool you own and plan to own</li>
                      <li>&#9744; Record nameplate amps/watts for each tool</li>
                      <li>&#9744; Identify which tools need 240V vs 120V</li>
                      <li>&#9744; Decide sub-panel location (near main panel feed)</li>
                      <li>&#9744; Map tool positions and workbench areas</li>
                      <li>&#9744; Plan for future expansion (add 25-50% capacity)</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-semibold text-white text-sm mb-2">Code Considerations</p>
                    <ul className="text-white/60 text-sm space-y-1">
                      <li>&#9744; Check local permit requirements</li>
                      <li>&#9744; Verify <Link href="/blog/gfci-vs-afci-requirements" className="text-purple-400 hover:text-purple-300">GFCI requirements</Link> for garage/outbuilding</li>
                      <li>&#9744; Confirm minimum working clearance at panel (NEC 110.26)</li>
                      <li>&#9744; Plan conduit or cable routing paths</li>
                      <li>&#9744; Size feeder based on calculated load</li>
                      <li>&#9744; Determine grounding electrode requirements</li>
                    </ul>
                  </div>
                </div>
              </div>

              <p className="text-white/80 mb-4">
                A critical principle: <strong>plan for the shop you want, not just the shop you have today</strong>. If you think you might add a welder in two years, run the feeder and install the sub-panel to support it now. Adding capacity later means tearing out what you just installed, which costs far more than doing it right the first time.
              </p>
            </section>

            <section id="total-load" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Determining Total Load: Common Tool Wattages</h2>
              <p className="text-white/80 mb-4">
                Every electrical plan starts with a load calculation. You need to know how much power your tools draw &mdash; both their running watts and their <strong>startup (inrush) current</strong>, which can be 3-6 times the running current for motor-driven tools. This startup surge is why circuits trip even when the running load seems well within the breaker rating.
              </p>

              <div className="overflow-x-auto my-6">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-white/20">
                      <th className="text-left py-3 px-4 text-white/60">Tool</th>
                      <th className="text-left py-3 px-4 text-white/60">Voltage</th>
                      <th className="text-left py-3 px-4 text-white/60">Running Amps</th>
                      <th className="text-left py-3 px-4 text-white/60">Running Watts</th>
                      <th className="text-left py-3 px-4 text-white/60">Startup Surge</th>
                    </tr>
                  </thead>
                  <tbody className="text-white/80">
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">Table Saw (1.75 HP)</td>
                      <td className="py-3 px-4 font-mono text-cyan-400">120V</td>
                      <td className="py-3 px-4 font-mono">13-15A</td>
                      <td className="py-3 px-4 font-mono">1,560-1,800W</td>
                      <td className="py-3 px-4 font-mono text-yellow-400">45-60A</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">Table Saw (3 HP cabinet)</td>
                      <td className="py-3 px-4 font-mono text-orange-400">240V</td>
                      <td className="py-3 px-4 font-mono">12-14A</td>
                      <td className="py-3 px-4 font-mono">2,880-3,360W</td>
                      <td className="py-3 px-4 font-mono text-yellow-400">36-56A</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">Thickness Planer (15&quot;)</td>
                      <td className="py-3 px-4 font-mono text-cyan-400">120V</td>
                      <td className="py-3 px-4 font-mono">13-15A</td>
                      <td className="py-3 px-4 font-mono">1,560-1,800W</td>
                      <td className="py-3 px-4 font-mono text-yellow-400">40-55A</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">MIG Welder (small)</td>
                      <td className="py-3 px-4 font-mono text-cyan-400">120V</td>
                      <td className="py-3 px-4 font-mono">20A</td>
                      <td className="py-3 px-4 font-mono">2,400W</td>
                      <td className="py-3 px-4 font-mono text-yellow-400">25-30A</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">MIG/TIG Welder (full-size)</td>
                      <td className="py-3 px-4 font-mono text-orange-400">240V</td>
                      <td className="py-3 px-4 font-mono">30-50A</td>
                      <td className="py-3 px-4 font-mono">7,200-12,000W</td>
                      <td className="py-3 px-4 font-mono text-yellow-400">40-60A</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">Air Compressor (5 HP)</td>
                      <td className="py-3 px-4 font-mono text-orange-400">240V</td>
                      <td className="py-3 px-4 font-mono">20-24A</td>
                      <td className="py-3 px-4 font-mono">4,800-5,760W</td>
                      <td className="py-3 px-4 font-mono text-yellow-400">60-80A</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">Dust Collector (2 HP)</td>
                      <td className="py-3 px-4 font-mono text-orange-400">240V</td>
                      <td className="py-3 px-4 font-mono">9-12A</td>
                      <td className="py-3 px-4 font-mono">2,160-2,880W</td>
                      <td className="py-3 px-4 font-mono text-yellow-400">30-45A</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">Band Saw (14&quot;)</td>
                      <td className="py-3 px-4 font-mono text-cyan-400">120V</td>
                      <td className="py-3 px-4 font-mono">6-9A</td>
                      <td className="py-3 px-4 font-mono">720-1,080W</td>
                      <td className="py-3 px-4 font-mono text-yellow-400">18-35A</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">Router (3.25 HP)</td>
                      <td className="py-3 px-4 font-mono text-cyan-400">120V</td>
                      <td className="py-3 px-4 font-mono">13-15A</td>
                      <td className="py-3 px-4 font-mono">1,560-1,800W</td>
                      <td className="py-3 px-4 font-mono text-yellow-400">35-50A</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">Drill Press (floor model)</td>
                      <td className="py-3 px-4 font-mono text-cyan-400">120V</td>
                      <td className="py-3 px-4 font-mono">5-8A</td>
                      <td className="py-3 px-4 font-mono">600-960W</td>
                      <td className="py-3 px-4 font-mono text-yellow-400">15-25A</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">Plasma Cutter</td>
                      <td className="py-3 px-4 font-mono text-orange-400">240V</td>
                      <td className="py-3 px-4 font-mono">25-40A</td>
                      <td className="py-3 px-4 font-mono">6,000-9,600W</td>
                      <td className="py-3 px-4 font-mono text-yellow-400">30-50A</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4">Shop Vacuum</td>
                      <td className="py-3 px-4 font-mono text-cyan-400">120V</td>
                      <td className="py-3 px-4 font-mono">8-12A</td>
                      <td className="py-3 px-4 font-mono">960-1,440W</td>
                      <td className="py-3 px-4 font-mono text-yellow-400">20-30A</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="bg-orange-900/30 rounded-xl p-6 my-6">
                <h4 className="font-semibold text-orange-400 mb-3">Understanding Demand Factor</h4>
                <p className="text-white/70 text-sm">
                  You won&apos;t run every tool simultaneously. The NEC allows <strong>demand factors</strong> when calculating total load &mdash; essentially recognizing that not all loads operate at the same time. For a home workshop, a common approach is to calculate your two or three largest loads at 100%, then apply a 50-60% demand factor to the remaining loads. However, always size the feeder to handle the <strong>maximum realistic simultaneous load</strong> &mdash; for example, running a table saw, dust collector, and shop lights at the same time. See our <Link href="/blog/residential-load-calculations" className="text-purple-400 hover:text-purple-300">residential load calculations guide</Link> for detailed NEC calculation methods.
                </p>
              </div>
            </section>

            <section id="sub-panel-sizing" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Sub-Panel Sizing for Workshops</h2>
              <p className="text-white/80 mb-4">
                Most home workshops are best served by a dedicated <strong>sub-panel</strong> fed from the main electrical panel. This gives you ample breaker spaces, keeps workshop loads isolated from the house, and provides a convenient disconnecting means right in your shop. The question is: how big should it be?
              </p>

              <div className="grid md:grid-cols-3 gap-6 my-6">
                <div className="bg-white/5 rounded-xl p-6 border border-green-500/20">
                  <h3 className="font-semibold text-green-400 mb-3">Light Duty: 60A Sub-Panel</h3>
                  <p className="text-white/60 text-sm mb-3">Best for: Small hobby shops with 120V tools only</p>
                  <ul className="text-white/60 text-sm space-y-1">
                    <li>12-16 breaker spaces</li>
                    <li>Supports 120V power tools</li>
                    <li>Adequate lighting and receptacles</li>
                    <li>No 240V heavy equipment</li>
                    <li>Limited expansion capability</li>
                  </ul>
                  <p className="text-green-400 text-sm font-semibold mt-3">Feeder: 6 AWG copper</p>
                </div>
                <div className="bg-white/5 rounded-xl p-6 border border-yellow-500/20">
                  <h3 className="font-semibold text-yellow-400 mb-3">Medium Duty: 100A Sub-Panel</h3>
                  <p className="text-white/60 text-sm mb-3">Best for: Serious hobbyist / woodworking shops</p>
                  <ul className="text-white/60 text-sm space-y-1">
                    <li>20-24 breaker spaces</li>
                    <li>Supports table saw + dust collector</li>
                    <li>One 240V welder or compressor</li>
                    <li>Multiple 120V circuits</li>
                    <li>Good room for future tools</li>
                  </ul>
                  <p className="text-yellow-400 text-sm font-semibold mt-3">Feeder: 3 AWG copper or 1 AWG aluminum</p>
                </div>
                <div className="bg-white/5 rounded-xl p-6 border border-red-500/20">
                  <h3 className="font-semibold text-red-400 mb-3">Heavy Duty: 200A Sub-Panel</h3>
                  <p className="text-white/60 text-sm mb-3">Best for: Full fab shop / welder + compressor + tools</p>
                  <ul className="text-white/60 text-sm space-y-1">
                    <li>30-42 breaker spaces</li>
                    <li>Supports multiple 240V loads</li>
                    <li>Large welder + compressor + dust collector</li>
                    <li>All 120V circuits you need</li>
                    <li>Maximum future flexibility</li>
                  </ul>
                  <p className="text-red-400 text-sm font-semibold mt-3">Feeder: 2/0 AWG copper or 4/0 AWG aluminum</p>
                </div>
              </div>

              <div className="bg-white/5 rounded-xl p-6 my-6">
                <h4 className="font-semibold text-cyan-400 mb-3">Sub-Panel Installation Tips</h4>
                <ul className="text-white/70 space-y-2 text-sm">
                  <li><strong>Location:</strong> Mount the sub-panel near where the feeder enters the shop, at a height that provides the NEC-required 30&quot; x 36&quot; clear working space in front (NEC 110.26)</li>
                  <li><strong>Grounding:</strong> If the sub-panel is in a separate building (detached garage, outbuilding), you need a <strong>grounding electrode system</strong> at the shop and the neutral and ground buses must be <strong>separated</strong> (NEC 250.32)</li>
                  <li><strong>Feeder sizing:</strong> Account for <Link href="/blog/how-to-calculate-voltage-drop" className="text-purple-400 hover:text-purple-300">voltage drop</Link> on long feeder runs. For runs over 50 feet, you may need to upsize the wire. Use our voltage drop guide to check your specific installation</li>
                  <li><strong>Conduit vs. cable:</strong> Underground feeders to a detached shop typically use PVC conduit with THWN-2 conductors or direct-burial rated cable. Check <Link href="/blog/wire-sizing-guide-nec-ampacity-tables" className="text-purple-400 hover:text-purple-300">NEC ampacity tables</Link> for proper sizing</li>
                  <li><strong>Spare spaces:</strong> Always buy a panel with more breaker spaces than you currently need &mdash; a 30-space panel costs only marginally more than a 20-space</li>
                </ul>
              </div>

              <p className="text-white/80 mb-4">
                <strong>The recommendation for most serious workshops is a 100A sub-panel with at least 24 spaces.</strong> This handles a typical combination of woodworking or metalworking tools, a welder or compressor on 240V, and plenty of 120V general-purpose circuits. If you plan to run a large welder (50A, 240V) <em>and</em> a 5 HP compressor simultaneously, consider stepping up to a 200A sub-panel &mdash; the incremental cost is small compared to the cost of upgrading later.
              </p>
            </section>

            <section id="120v-circuits" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">120V Circuits for General Use</h2>
              <p className="text-white/80 mb-4">
                The backbone of any workshop is a generous supply of <strong>120V, 20A general-purpose circuits</strong>. These power your handheld tools, smaller bench tools, battery chargers, radio, and anything else you plug in. The NEC requires 20A circuits for most workshop receptacles &mdash; not 15A &mdash; because motor loads on shop tools routinely draw 12-15 amps.
              </p>

              <div className="grid md:grid-cols-2 gap-6 my-6">
                <div className="bg-white/5 rounded-xl p-6">
                  <h3 className="font-semibold text-cyan-400 mb-3">Recommended 120V Circuits</h3>
                  <ul className="text-white/70 text-sm space-y-2">
                    <li><strong>Workbench circuit(s):</strong> At least one dedicated 20A circuit per major workbench area. Heavy users should have two circuits per bench &mdash; one on each side</li>
                    <li><strong>Wall receptacle circuits:</strong> Two or more 20A circuits feeding receptacles around the shop perimeter, spaced every 6 feet maximum</li>
                    <li><strong>Portable tool circuit:</strong> One 20A circuit for tools used in the center of the shop (via retractable cord reels from the ceiling)</li>
                    <li><strong>Lighting circuit:</strong> Separate 20A circuit dedicated to shop lighting (never share with tool circuits)</li>
                    <li><strong>Miscellaneous:</strong> One 20A circuit for chargers, radio, phone, space heater, or mini-fridge</li>
                  </ul>
                </div>
                <div className="bg-white/5 rounded-xl p-6">
                  <h3 className="font-semibold text-emerald-400 mb-3">Wiring Specifications</h3>
                  <ul className="text-white/70 text-sm space-y-2">
                    <li><strong>Wire size:</strong> 12 AWG minimum for all 20A circuits</li>
                    <li><strong>Receptacles:</strong> 20A rated (T-slot), not 15A</li>
                    <li><strong>GFCI protection:</strong> Required in garages and unfinished basements per NEC 210.8(A). Use GFCI breakers for the cleanest installation</li>
                    <li><strong>Wiring method:</strong> 12/2 NM-B (Romex) for finished spaces, or 12 AWG THHN in conduit for exposed runs in garages/shops</li>
                    <li><strong>Box fill:</strong> Use 4&quot; square boxes with single-gang plaster rings for adequate box fill</li>
                  </ul>
                </div>
              </div>

              <div className="bg-emerald-900/30 rounded-xl p-6 my-6">
                <h4 className="font-semibold text-emerald-400 mb-3">Pro Tip: The Two-Circuit Workbench</h4>
                <p className="text-white/70 text-sm">
                  Run two separate 20A circuits to each primary workbench, terminated in a 4-plex receptacle box (two duplex outlets, each on its own circuit). This way, you can run a router table and a shop vac simultaneously without tripping a breaker. Use different-colored outlets or labels to indicate which receptacle is on which circuit so you can balance the load intentionally.
                </p>
              </div>
            </section>

            <section id="240v-circuits" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">240V Circuits for Welders, Compressors &amp; Dust Collectors</h2>
              <p className="text-white/80 mb-4">
                The heavy hitters in your workshop &mdash; welders, air compressors, large dust collectors, and cabinet table saws &mdash; typically require <strong>240V dedicated circuits</strong>. Running these tools on 240V halves the current draw compared to 120V, which means smaller wire, less voltage drop, and more efficient motor operation.
              </p>

              <h3 className="text-xl font-display font-semibold mb-3 text-cyan-400">Welder Circuit Requirements</h3>
              <p className="text-white/80 mb-4">
                Welders are among the most demanding loads in a home workshop. The circuit you need depends entirely on the welder&apos;s input rating:
              </p>

              <div className="overflow-x-auto my-6">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-white/20">
                      <th className="text-left py-3 px-4 text-white/60">Welder Type</th>
                      <th className="text-left py-3 px-4 text-white/60">Input</th>
                      <th className="text-left py-3 px-4 text-white/60">Breaker</th>
                      <th className="text-left py-3 px-4 text-white/60">Wire Size</th>
                      <th className="text-left py-3 px-4 text-white/60">Receptacle</th>
                    </tr>
                  </thead>
                  <tbody className="text-white/80">
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">Small MIG (Lincoln 140, Hobart 140)</td>
                      <td className="py-3 px-4 font-mono">120V / 20A</td>
                      <td className="py-3 px-4 font-mono text-green-400">20A single-pole</td>
                      <td className="py-3 px-4 font-mono">12 AWG</td>
                      <td className="py-3 px-4">NEMA 5-20R</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">Mid MIG (Lincoln 210, Miller 211)</td>
                      <td className="py-3 px-4 font-mono">240V / 30A</td>
                      <td className="py-3 px-4 font-mono text-yellow-400">30A double-pole</td>
                      <td className="py-3 px-4 font-mono">10 AWG</td>
                      <td className="py-3 px-4">NEMA 6-30R or 6-50R</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">Full MIG/TIG (Miller 252, Lincoln 256)</td>
                      <td className="py-3 px-4 font-mono">240V / 50A</td>
                      <td className="py-3 px-4 font-mono text-orange-400">50A double-pole</td>
                      <td className="py-3 px-4 font-mono">6 AWG</td>
                      <td className="py-3 px-4">NEMA 6-50R</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4">Stick Welder (large)</td>
                      <td className="py-3 px-4 font-mono">240V / 50A</td>
                      <td className="py-3 px-4 font-mono text-orange-400">50A double-pole</td>
                      <td className="py-3 px-4 font-mono">6 AWG</td>
                      <td className="py-3 px-4">NEMA 6-50R</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="bg-yellow-900/30 rounded-xl p-6 my-6">
                <h4 className="font-semibold text-yellow-400 mb-3">Welder Circuit Sizing Rule</h4>
                <p className="text-white/70 text-sm">
                  Per NEC 630.11, the branch circuit for an arc welder must be sized at the <strong>rated primary current multiplied by the duty cycle factor</strong>. For a welder with a 30% duty cycle, multiply the nameplate amps by 0.71. For 60% duty cycle, multiply by 0.87. For 100% duty cycle, use the full nameplate amps. However, many manufacturers simply state the required circuit size &mdash; always check the manual. When in doubt, <strong>size up</strong>. A 50A circuit with a NEMA 6-50R receptacle accommodates the widest range of welders.
                </p>
              </div>

              <h3 className="text-xl font-display font-semibold mb-3 text-cyan-400">Air Compressor Circuit Requirements</h3>
              <p className="text-white/80 mb-4">
                Stationary air compressors with motors of 2 HP and above almost always require 240V. The startup current on a compressor is brutal &mdash; a 5 HP compressor can pull <strong>60-80 amps at startup</strong> before settling to its running current of 20-24 amps. This is why a dedicated circuit with properly sized wire is essential.
              </p>

              <div className="grid md:grid-cols-2 gap-4 my-6">
                <div className="bg-white/5 rounded-xl p-4">
                  <p className="font-semibold text-white mb-2">Small Compressor (2-3 HP)</p>
                  <ul className="text-white/60 text-sm space-y-1">
                    <li>Voltage: 240V single-phase</li>
                    <li>Breaker: 20A double-pole</li>
                    <li>Wire: 12 AWG (short runs) / 10 AWG (long runs)</li>
                    <li>Receptacle: NEMA 6-20R</li>
                  </ul>
                </div>
                <div className="bg-white/5 rounded-xl p-4">
                  <p className="font-semibold text-white mb-2">Large Compressor (5-7.5 HP)</p>
                  <ul className="text-white/60 text-sm space-y-1">
                    <li>Voltage: 240V single-phase</li>
                    <li>Breaker: 30-40A double-pole</li>
                    <li>Wire: 10 AWG (30A) / 8 AWG (40A)</li>
                    <li>Receptacle: NEMA 6-30R or hardwired</li>
                  </ul>
                </div>
              </div>

              <p className="text-white/80 mb-4">
                For compressors, always check the <strong>motor nameplate</strong> for the FLA (full load amps) and the LRA (locked rotor amps or startup amps). Size the breaker per NEC Article 430 for motor circuits &mdash; typically 250% of FLA for inverse-time breakers. A time-delay fuse or a breaker rated for motor starting can prevent nuisance trips during that initial surge.
              </p>
            </section>

            <section id="dedicated-circuits" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Dedicated Circuits for Stationary Tools</h2>
              <p className="text-white/80 mb-4">
                Any stationary power tool that draws <strong>12 amps or more at 120V</strong> (or any 240V tool) should have its own <strong>dedicated circuit</strong>. This prevents the situation where starting up your table saw trips the breaker because your shop vac is on the same circuit, and it ensures each tool gets clean, full-voltage power.
              </p>

              <div className="bg-white/5 rounded-xl p-6 my-6">
                <h4 className="font-semibold text-white mb-3">Tools That Need Dedicated Circuits</h4>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <p className="text-cyan-400 font-semibold text-sm mb-2">120V Dedicated (20A each)</p>
                    <ul className="text-white/60 text-sm space-y-1">
                      <li>Table saw (contractor/hybrid, 1.75-2 HP)</li>
                      <li>Thickness planer (12-15&quot;)</li>
                      <li>Router table (3+ HP router)</li>
                      <li>Jointer (6-8&quot; benchtop/short bed)</li>
                      <li>Miter saw (12&quot; sliding compound)</li>
                    </ul>
                  </div>
                  <div>
                    <p className="text-orange-400 font-semibold text-sm mb-2">240V Dedicated</p>
                    <ul className="text-white/60 text-sm space-y-1">
                      <li>Cabinet table saw (3-5 HP) &mdash; 20-30A</li>
                      <li>Welder &mdash; 30-50A</li>
                      <li>Air compressor &mdash; 20-40A</li>
                      <li>Dust collector (2+ HP) &mdash; 20A</li>
                      <li>Plasma cutter &mdash; 30-50A</li>
                    </ul>
                  </div>
                </div>
              </div>

              <p className="text-white/80 mb-4">
                For each dedicated circuit, run a <strong>home-run wire</strong> directly from the sub-panel to the tool location. Do not daisy-chain dedicated circuits through other receptacles. Label each breaker clearly in the panel schedule so you always know which breaker controls which tool &mdash; this is both a safety measure and a code requirement (NEC 408.4).
              </p>

              <div className="bg-purple-900/30 rounded-xl p-6 my-6">
                <h4 className="font-semibold text-purple-400 mb-3">Sample Workshop Panel Schedule (100A Sub-Panel)</h4>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-white/20">
                        <th className="text-left py-2 px-3 text-white/60">Breaker #</th>
                        <th className="text-left py-2 px-3 text-white/60">Amps</th>
                        <th className="text-left py-2 px-3 text-white/60">Poles</th>
                        <th className="text-left py-2 px-3 text-white/60">Description</th>
                      </tr>
                    </thead>
                    <tbody className="text-white/80">
                      <tr className="border-b border-white/10">
                        <td className="py-2 px-3 font-mono">1-2</td>
                        <td className="py-2 px-3 font-mono">50A</td>
                        <td className="py-2 px-3">2P</td>
                        <td className="py-2 px-3">Welder (NEMA 6-50R)</td>
                      </tr>
                      <tr className="border-b border-white/10">
                        <td className="py-2 px-3 font-mono">3-4</td>
                        <td className="py-2 px-3 font-mono">30A</td>
                        <td className="py-2 px-3">2P</td>
                        <td className="py-2 px-3">Air Compressor (240V)</td>
                      </tr>
                      <tr className="border-b border-white/10">
                        <td className="py-2 px-3 font-mono">5-6</td>
                        <td className="py-2 px-3 font-mono">20A</td>
                        <td className="py-2 px-3">2P</td>
                        <td className="py-2 px-3">Dust Collector (240V)</td>
                      </tr>
                      <tr className="border-b border-white/10">
                        <td className="py-2 px-3 font-mono">7</td>
                        <td className="py-2 px-3 font-mono">20A</td>
                        <td className="py-2 px-3">1P</td>
                        <td className="py-2 px-3">Table Saw (dedicated)</td>
                      </tr>
                      <tr className="border-b border-white/10">
                        <td className="py-2 px-3 font-mono">8</td>
                        <td className="py-2 px-3 font-mono">20A</td>
                        <td className="py-2 px-3">1P</td>
                        <td className="py-2 px-3">Planer (dedicated)</td>
                      </tr>
                      <tr className="border-b border-white/10">
                        <td className="py-2 px-3 font-mono">9</td>
                        <td className="py-2 px-3 font-mono">20A</td>
                        <td className="py-2 px-3">1P</td>
                        <td className="py-2 px-3">Workbench Receptacles A</td>
                      </tr>
                      <tr className="border-b border-white/10">
                        <td className="py-2 px-3 font-mono">10</td>
                        <td className="py-2 px-3 font-mono">20A</td>
                        <td className="py-2 px-3">1P</td>
                        <td className="py-2 px-3">Workbench Receptacles B</td>
                      </tr>
                      <tr className="border-b border-white/10">
                        <td className="py-2 px-3 font-mono">11</td>
                        <td className="py-2 px-3 font-mono">20A</td>
                        <td className="py-2 px-3">1P</td>
                        <td className="py-2 px-3">Wall Receptacles &mdash; North</td>
                      </tr>
                      <tr className="border-b border-white/10">
                        <td className="py-2 px-3 font-mono">12</td>
                        <td className="py-2 px-3 font-mono">20A</td>
                        <td className="py-2 px-3">1P</td>
                        <td className="py-2 px-3">Wall Receptacles &mdash; South</td>
                      </tr>
                      <tr className="border-b border-white/10">
                        <td className="py-2 px-3 font-mono">13</td>
                        <td className="py-2 px-3 font-mono">20A</td>
                        <td className="py-2 px-3">1P</td>
                        <td className="py-2 px-3">Lighting Circuit</td>
                      </tr>
                      <tr>
                        <td className="py-2 px-3 font-mono">14</td>
                        <td className="py-2 px-3 font-mono">20A</td>
                        <td className="py-2 px-3">1P</td>
                        <td className="py-2 px-3">Misc (chargers, radio, heater)</td>
                      </tr>
                    </tbody>
                  </table>
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
                  <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/></svg><svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor" aria-hidden="true"><path d="M3 20.5V3.5c0-.59.34-1.11.84-1.35L13.69 12 3.84 21.85c-.5-.25-.84-.76-.84-1.35zm13.81-5.38L6.05 21.34l8.49-8.49 2.27 2.27zm3.35-4.31c.34.27.59.69.59 1.19 0 .5-.22.9-.57 1.18l-2.29 1.32L15.39 12l2.5-2.5 2.27 1.31zM6.05 2.66L16.81 8.88l-2.27 2.27L6.05 2.66z"/></svg>
                  Download Free
                </a>
              </div>
            </div>

            <section id="lighting-layout" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Lighting Layout: Task and Ambient</h2>
              <p className="text-white/80 mb-4">
                Good lighting is one of the most underestimated aspects of workshop design. Poor lighting leads to measurement errors, safety hazards, and eye strain. Your shop needs two types of lighting: <strong>ambient (general) lighting</strong> to illuminate the entire space uniformly, and <strong>task lighting</strong> for workstations where precision matters.
              </p>

              <div className="grid md:grid-cols-2 gap-6 my-6">
                <div className="bg-white/5 rounded-xl p-6">
                  <h3 className="font-semibold text-yellow-400 mb-3">Ambient (General) Lighting</h3>
                  <ul className="text-white/70 text-sm space-y-2">
                    <li><strong>Target level:</strong> 50-75 foot-candles throughout the shop</li>
                    <li><strong>Fixture type:</strong> 4-foot LED shop lights (linked or individual)</li>
                    <li><strong>Color temperature:</strong> 5000K (daylight) for best color rendering in a workshop</li>
                    <li><strong>Spacing:</strong> Mount fixtures in parallel rows, spaced roughly equal to their mounting height above the work surface</li>
                    <li><strong>Mounting:</strong> Suspended from ceiling at 7-8 ft above floor, or flush-mounted if ceiling height is limited</li>
                    <li><strong>Quantity rule of thumb:</strong> One 4-foot, 40W LED fixture per 40-50 sq ft of floor space</li>
                  </ul>
                </div>
                <div className="bg-white/5 rounded-xl p-6">
                  <h3 className="font-semibold text-cyan-400 mb-3">Task Lighting</h3>
                  <ul className="text-white/70 text-sm space-y-2">
                    <li><strong>Target level:</strong> 100-150 foot-candles at the work surface</li>
                    <li><strong>Locations:</strong> Above table saw, above workbench, above drill press, at lathe</li>
                    <li><strong>Fixture type:</strong> Adjustable LED work lights, swing-arm lamps, or under-shelf strips</li>
                    <li><strong>Shadow control:</strong> Position task lights to minimize shadows cast by your hands and the tool itself</li>
                    <li><strong>Switching:</strong> Individual switches for each task light zone so you can illuminate only where you are working</li>
                  </ul>
                </div>
              </div>

              <div className="bg-emerald-900/30 rounded-xl p-6 my-6">
                <h4 className="font-semibold text-emerald-400 mb-3">Workshop Lighting Best Practices</h4>
                <ul className="text-white/70 space-y-2 text-sm">
                  <li><strong>Dedicated circuit:</strong> Run all shop lighting on its own 20A circuit, separate from any tool circuits. You never want to lose your lights because a tool tripped a breaker</li>
                  <li><strong>Switch location:</strong> Install the main lighting switch right at the shop entry door, at standard height. Consider a second switch at the opposite end for shops with two doors</li>
                  <li><strong>LED advantages:</strong> LED shop lights produce no flicker (unlike magnetic-ballast fluorescents that can create a stroboscopic effect on spinning blades &mdash; a serious safety hazard), turn on instantly in cold weather, and last 50,000+ hours</li>
                  <li><strong>Paint walls white or light gray:</strong> Reflective wall surfaces multiply the effectiveness of your lighting by bouncing light throughout the space</li>
                </ul>
              </div>
            </section>

            <section id="receptacle-placement" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Receptacle Placement Strategies</h2>
              <p className="text-white/80 mb-4">
                Strategic receptacle placement eliminates extension cords, reduces tripping hazards, and ensures every tool can reach power easily. Think of your shop in zones and plan receptacle locations around how you actually work, not just where it&apos;s convenient to run wire.
              </p>

              <div className="space-y-4 my-6">
                <div className="bg-white/5 rounded-xl p-4 flex items-start gap-4">
                  <span className="bg-emerald-600 text-white text-sm font-bold px-3 py-1 rounded-full">1</span>
                  <div>
                    <p className="font-semibold text-white">Perimeter Wall Receptacles</p>
                    <p className="text-white/60 text-sm">Install duplex receptacles every 6 feet around the shop perimeter at 48&quot; above floor level (not the standard residential 12-16&quot;). Higher mounting keeps cords off the floor, away from sawdust, and accessible above workbenches and tool tables. Use 20A circuits with 20A-rated (T-slot) receptacles.</p>
                  </div>
                </div>
                <div className="bg-white/5 rounded-xl p-4 flex items-start gap-4">
                  <span className="bg-emerald-600 text-white text-sm font-bold px-3 py-1 rounded-full">2</span>
                  <div>
                    <p className="font-semibold text-white">Workbench Receptacles</p>
                    <p className="text-white/60 text-sm">Mount receptacles at the back edge of each workbench, just above the work surface (36-42&quot;). Provide at least one quad box (two duplex receptacles) per 4-foot section of bench. For electronics or finishing work, consider adding a dedicated receptacle with a GFCI for easy access.</p>
                  </div>
                </div>
                <div className="bg-white/5 rounded-xl p-4 flex items-start gap-4">
                  <span className="bg-emerald-600 text-white text-sm font-bold px-3 py-1 rounded-full">3</span>
                  <div>
                    <p className="font-semibold text-white">Ceiling-Mounted Retractable Cord Reels</p>
                    <p className="text-white/60 text-sm">For tools used in the center of the shop (assembly, finishing, sanding), install ceiling-mounted retractable cord reels fed from a dedicated overhead circuit. These keep cords completely off the floor and always within reach. Install one above each major work zone.</p>
                  </div>
                </div>
                <div className="bg-white/5 rounded-xl p-4 flex items-start gap-4">
                  <span className="bg-emerald-600 text-white text-sm font-bold px-3 py-1 rounded-full">4</span>
                  <div>
                    <p className="font-semibold text-white">240V Receptacle Placement</p>
                    <p className="text-white/60 text-sm">Install 240V receptacles at the exact tool location or within 6 feet of it. For tools that may be repositioned (like a welder on a cart), consider installing two 240V receptacles at different locations and sharing a single breaker &mdash; you will only ever plug in one at a time. Mount 240V receptacles at 24-36&quot; height for easy access.</p>
                  </div>
                </div>
                <div className="bg-white/5 rounded-xl p-4 flex items-start gap-4">
                  <span className="bg-emerald-600 text-white text-sm font-bold px-3 py-1 rounded-full">5</span>
                  <div>
                    <p className="font-semibold text-white">Floor Boxes (Optional)</p>
                    <p className="text-white/60 text-sm">For tools positioned in the center of the shop (like a free-standing table saw or assembly table), a flush-mount floor box eliminates long cord runs across the floor. Use a rated floor box with a waterproof cover to keep out dust and debris.</p>
                  </div>
                </div>
              </div>
            </section>

            <section id="dust-collector-wiring" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Dust Collector Wiring</h2>
              <p className="text-white/80 mb-4">
                A central dust collection system is essential for woodworking shops. From an electrical standpoint, dust collectors have some unique considerations related to motor sizing, startup current, remote switching, and the static electricity generated by dust flowing through ductwork.
              </p>

              <div className="grid md:grid-cols-2 gap-6 my-6">
                <div className="bg-white/5 rounded-xl p-6">
                  <h3 className="font-semibold text-purple-400 mb-3">Dust Collector Sizing by Shop</h3>
                  <ul className="text-white/70 text-sm space-y-2">
                    <li><strong>Small shop (1-2 tools):</strong> 1 HP, 120V, 12A &mdash; 20A dedicated circuit</li>
                    <li><strong>Medium shop (2-4 tools):</strong> 1.5-2 HP, 240V, 9-12A &mdash; 20A/240V circuit</li>
                    <li><strong>Large shop (4+ tools):</strong> 3-5 HP, 240V, 14-24A &mdash; 30A/240V circuit</li>
                    <li><strong>Cyclone system (3+ HP):</strong> 240V, check nameplate &mdash; often 20-30A circuit</li>
                  </ul>
                </div>
                <div className="bg-white/5 rounded-xl p-6">
                  <h3 className="font-semibold text-cyan-400 mb-3">Wiring Considerations</h3>
                  <ul className="text-white/70 text-sm space-y-2">
                    <li><strong>Remote start/stop:</strong> Wire a remote switch at each tool station so you can turn the collector on/off without walking to the unit. Use a relay/contactor controlled by low-voltage switches</li>
                    <li><strong>Auto-start:</strong> Many collectors offer a current-sensing auto-start relay that turns on the collector when it detects a tool powering up</li>
                    <li><strong>Grounding ductwork:</strong> Ground all metal ductwork to prevent static discharge near fine dust &mdash; a fire/explosion hazard. Run a bare copper grounding conductor attached to each duct section</li>
                    <li><strong>Motor location:</strong> Ensure the collector motor has adequate ventilation and is not buried in a corner where heat cannot dissipate</li>
                  </ul>
                </div>
              </div>

              <div className="bg-red-900/30 rounded-xl p-6 my-6">
                <h4 className="font-semibold text-red-400 mb-3">Dust and Electrical Safety</h4>
                <p className="text-white/70 text-sm">
                  Fine wood dust is <strong>combustible</strong>. The NEC classifies concentrations of combustible dust as a <strong>Class II hazardous location</strong> (NEC Article 500). While a typical home workshop does not reach the dust concentration levels that trigger full Class II requirements, you should still take precautions: keep dust away from electrical connections, use dust-tight junction boxes near the collector, and ensure all ductwork is properly grounded. Never allow sawdust to accumulate on or near electrical panels, receptacles, or motors.
                </p>
              </div>
            </section>

            <section id="compressed-air-electrical" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Compressed Air and Electrical Considerations</h2>
              <p className="text-white/80 mb-4">
                A stationary air compressor is a significant electrical load that presents unique challenges. The relationship between the compressor&apos;s motor, its pressure switch, and your electrical system requires careful planning.
              </p>

              <div className="bg-white/5 rounded-xl p-6 my-6">
                <h4 className="font-semibold text-white mb-3">Compressor Electrical Planning</h4>
                <ul className="text-white/70 space-y-3 text-sm">
                  <li>
                    <strong className="text-cyan-400">Startup current is the key challenge.</strong> A 5 HP compressor motor may draw 20-24A running but 60-80A at startup (locked rotor amps). Standard breakers will trip on this surge unless properly sized for motor loads. Use a time-delay breaker or slow-blow fuses rated per NEC 430 (typically 175-250% of FLA for time-delay fuses).
                  </li>
                  <li>
                    <strong className="text-cyan-400">Pressure switch cycling.</strong> Compressors cycle on and off as the tank pressure drops below and rises above the setpoints. Each restart produces a full inrush current event. Frequent cycling on a marginally sized circuit will eventually trip the breaker. Size the circuit for the motor, not just the running load.
                  </li>
                  <li>
                    <strong className="text-cyan-400">Unloader valve timing.</strong> Most compressors have an unloader valve that bleeds off head pressure when the motor stops, allowing it to restart against minimal load. If this valve fails, the motor tries to start against full tank pressure and may stall, drawing locked-rotor current until the breaker trips or the motor overheats.
                  </li>
                  <li>
                    <strong className="text-cyan-400">Voltage drop matters.</strong> Compressor motors are sensitive to low voltage at startup. If the supply voltage drops more than 5% during the startup surge, the motor may struggle to start, run hot, or trip the thermal overload. Keep feeder runs short and wire size adequate to maintain voltage. Check your installation against <Link href="/blog/how-to-calculate-voltage-drop" className="text-purple-400 hover:text-purple-300">voltage drop guidelines</Link>.
                  </li>
                  <li>
                    <strong className="text-cyan-400">Disconnect requirement.</strong> NEC requires a motor disconnect within sight of the motor (NEC 430.102). For a cord-and-plug connected compressor, the plug serves as the disconnect. For hardwired compressors, install a disconnect switch or use the breaker in the sub-panel if it is within sight.
                  </li>
                </ul>
              </div>
            </section>

            <section id="common-mistakes" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Common Workshop Electrical Mistakes</h2>
              <p className="text-white/80 mb-4">
                After years of wiring workshops and helping others plan theirs, these are the mistakes that come up again and again. Avoid these and your shop electrical system will serve you reliably for decades.
              </p>

              <div className="grid md:grid-cols-2 gap-4 my-6">
                <div className="bg-red-900/20 rounded-xl p-6 border border-red-500/20">
                  <h4 className="font-semibold text-red-400 mb-3">1. Undersizing the Sub-Panel</h4>
                  <p className="text-white/60 text-sm">
                    Installing a 60A sub-panel &quot;to save money&quot; and running out of capacity within a year when you add a welder or compressor. The cost difference between a 60A and 100A panel is minimal compared to the cost of replacing it.
                  </p>
                </div>
                <div className="bg-red-900/20 rounded-xl p-6 border border-red-500/20">
                  <h4 className="font-semibold text-red-400 mb-3">2. Too Few Circuits</h4>
                  <p className="text-white/60 text-sm">
                    Putting all 120V receptacles on one or two circuits. When you run a table saw and planer on the same circuit, you trip the breaker every time. Each major tool needs its own circuit.
                  </p>
                </div>
                <div className="bg-red-900/20 rounded-xl p-6 border border-red-500/20">
                  <h4 className="font-semibold text-red-400 mb-3">3. Sharing Lighting with Tools</h4>
                  <p className="text-white/60 text-sm">
                    Running shop lights on the same circuit as power tools. When the table saw trips the breaker, you are plunged into darkness with a spinning blade. Always use a dedicated lighting circuit.
                  </p>
                </div>
                <div className="bg-red-900/20 rounded-xl p-6 border border-red-500/20">
                  <h4 className="font-semibold text-red-400 mb-3">4. Ignoring Voltage Drop</h4>
                  <p className="text-white/60 text-sm">
                    Running long wire runs (especially to a detached shop) without accounting for voltage drop. A 150-foot run of 12 AWG at 20A loses significant voltage. Motors run hot and inefficiently on low voltage. Use our <Link href="/blog/how-to-calculate-voltage-drop" className="text-purple-400 hover:text-purple-300">voltage drop calculator</Link>.
                  </p>
                </div>
                <div className="bg-red-900/20 rounded-xl p-6 border border-red-500/20">
                  <h4 className="font-semibold text-red-400 mb-3">5. Overloading Extension Cords</h4>
                  <p className="text-white/60 text-sm">
                    Using lightweight extension cords to feed heavy tools permanently. Extension cords add resistance, drop voltage, and create fire hazards &mdash; especially under sawdust. Install proper receptacles at every tool location instead.
                  </p>
                </div>
                <div className="bg-red-900/20 rounded-xl p-6 border border-red-500/20">
                  <h4 className="font-semibold text-red-400 mb-3">6. Wrong Receptacle Height</h4>
                  <p className="text-white/60 text-sm">
                    Mounting receptacles at residential height (12-16&quot;) in a workshop where they end up behind tool cabinets and workbenches, buried under dust. Mount shop receptacles at 48&quot; for accessibility and cleanliness.
                  </p>
                </div>
                <div className="bg-red-900/20 rounded-xl p-6 border border-red-500/20">
                  <h4 className="font-semibold text-red-400 mb-3">7. Skipping the Permit</h4>
                  <p className="text-white/60 text-sm">
                    Doing the work without a permit and inspection. Unpermitted electrical work creates liability issues, insurance problems, and complications when selling your home. Inspectors catch real safety issues.
                  </p>
                </div>
                <div className="bg-red-900/20 rounded-xl p-6 border border-red-500/20">
                  <h4 className="font-semibold text-red-400 mb-3">8. No GFCI in Garage/Outbuilding</h4>
                  <p className="text-white/60 text-sm">
                    Forgetting that the NEC requires <Link href="/blog/gfci-vs-afci-requirements" className="text-purple-400 hover:text-purple-300">GFCI protection</Link> for all 125V, 15A and 20A receptacles in garages and accessory buildings. Use GFCI breakers in the sub-panel for the cleanest and most reliable protection.
                  </p>
                </div>
              </div>

              <div className="bg-cyan-900/30 rounded-xl p-6 my-6">
                <h4 className="font-semibold text-cyan-400 mb-3">Workshop Electrical Success Formula</h4>
                <ul className="text-white/70 space-y-2 text-sm">
                  <li>&#9744; 100A+ sub-panel with 24+ breaker spaces</li>
                  <li>&#9744; Separate dedicated circuit for each stationary tool drawing 12A+</li>
                  <li>&#9744; At least 4-6 general-purpose 20A/120V circuits</li>
                  <li>&#9744; 240V circuits pre-wired for welder, compressor, and dust collector</li>
                  <li>&#9744; Dedicated 20A lighting circuit (not shared with tools)</li>
                  <li>&#9744; Receptacles at 48&quot; height, spaced every 6 feet on perimeter</li>
                  <li>&#9744; GFCI protection on all 120V receptacles per NEC</li>
                  <li>&#9744; Proper feeder sizing with voltage drop accounted for</li>
                  <li>&#9744; All work permitted and inspected</li>
                  <li>&#9744; Panel schedule clearly labeled per NEC 408.4</li>
                </ul>
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
                <Link href="/blog/detached-building-electrical-guide" className="bg-white/5 hover:bg-white/10 rounded-xl p-6 transition-colors">
                  <span className="text-emerald-400 text-sm">Installation</span>
                  <h3 className="font-semibold mt-2">Detached Building Electrical: Wiring a Garage, Barn, or Shed</h3>
                </Link>
                <Link href="/blog/sub-panel-installation-guide" className="bg-white/5 hover:bg-white/10 rounded-xl p-6 transition-colors">
                  <span className="text-emerald-400 text-sm">Installation</span>
                  <h3 className="font-semibold mt-2">Sub-Panel Installation Guide: Sizing, Wiring &amp; NEC Requirements</h3>
                </Link>
                <Link href="/blog/240v-outlet-wiring-guide" className="bg-white/5 hover:bg-white/10 rounded-xl p-6 transition-colors">
                  <span className="text-emerald-400 text-sm">Installation</span>
                  <h3 className="font-semibold mt-2">240V Outlet Wiring Guide: Circuit, Wire Size &amp; Receptacle Types</h3>
                </Link>
                <Link href="/blog/residential-load-calculations" className="bg-white/5 hover:bg-white/10 rounded-xl p-6 transition-colors">
                  <span className="text-blue-400 text-sm">Calculations</span>
                  <h3 className="font-semibold mt-2">Residential Electrical Load Calculations per NEC</h3>
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
