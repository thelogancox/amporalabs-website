import { Metadata } from "next";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import { BreadcrumbJsonLd, BlogPostingJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "NEC Article 680: Swimming Pool Electrical Requirements Guide",
  description: "Complete guide to NEC Article 680 pool and spa electrical requirements. Learn bonding requirements, GFCI protection, equipment clearances, underwater lighting, and equipment location restrictions for safe pool installations.",
  keywords: [
    "NEC 680",
    "pool electrical requirements",
    "swimming pool wiring",
    "pool bonding requirements",
    "pool GFCI protection",
    "spa electrical code",
    "hot tub wiring",
    "pool equipment bonding",
    "equipotential bonding grid",
    "pool light GFCI",
    "underwater lighting NEC",
    "pool pump wiring",
    "pool electrical clearances",
    "NEC article 680",
    "pool electrical installation",
    "pool grounding requirements"
  ],
  alternates: {
    canonical: "https://amporalabs.com/blog/swimming-pool-electrical-nec-680",
  },
  openGraph: {
    title: "NEC Article 680: Pool & Spa Electrical Requirements - Ampora",
    description: "Master NEC 680 requirements for pool bonding, GFCI protection, and equipment location restrictions.",
    url: "https://amporalabs.com/blog/swimming-pool-electrical-nec-680",
    type: "article",
  },
};

function HeroIllustration() {
  return (
    <svg viewBox="0 0 400 180" className="w-full h-40 md:h-48" aria-label="Swimming pool electrical diagram showing bonding and equipment zones">
      {/* Pool water */}
      <defs>
        <linearGradient id="waterGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#0ea5e9" stopOpacity="0.6"/>
          <stop offset="100%" stopColor="#0369a1" stopOpacity="0.8"/>
        </linearGradient>
        <pattern id="waterPattern" x="0" y="0" width="20" height="10" patternUnits="userSpaceOnUse">
          <path d="M0 5 Q5 0, 10 5 T20 5" fill="none" stroke="#38bdf8" strokeWidth="0.5" opacity="0.5"/>
        </pattern>
      </defs>

      {/* Pool shell */}
      <path d="M40 80 L40 140 Q40 150, 50 150 L350 150 Q360 150, 360 140 L360 80 Q360 70, 350 70 L50 70 Q40 70, 40 80" fill="url(#waterGradient)" stroke="#0284c7" strokeWidth="2"/>
      <rect x="40" y="70" width="320" height="80" fill="url(#waterPattern)"/>

      {/* Pool edge/coping */}
      <rect x="30" y="60" width="340" height="12" rx="2" fill="#64748b" stroke="#475569" strokeWidth="1"/>

      {/* Bonding grid under pool (dotted lines) */}
      <g stroke="#22c55e" strokeWidth="1.5" strokeDasharray="4,2" opacity="0.7">
        <line x1="50" y1="155" x2="350" y2="155"/>
        <line x1="80" y1="155" x2="80" y2="165"/>
        <line x1="150" y1="155" x2="150" y2="165"/>
        <line x1="250" y1="155" x2="250" y2="165"/>
        <line x1="320" y1="155" x2="320" y2="165"/>
      </g>

      {/* Equipotential bonding label */}
      <text x="200" y="173" textAnchor="middle" fill="#22c55e" fontSize="8" fontWeight="bold">EQUIPOTENTIAL BONDING GRID</text>

      {/* Pool light */}
      <circle cx="60" cy="110" r="12" fill="#1f2937" stroke="#fbbf24" strokeWidth="2"/>
      <circle cx="60" cy="110" r="6" fill="#fbbf24" opacity="0.6"/>
      <text x="60" y="135" textAnchor="middle" fill="#fbbf24" fontSize="7">LIGHT</text>

      {/* Pump equipment (outside 5ft zone) */}
      <g transform="translate(380, 90)">
        <rect x="0" y="0" width="35" height="50" rx="3" fill="#1f2937" stroke="#a855f7" strokeWidth="2"/>
        <circle cx="17" cy="25" r="10" fill="none" stroke="#a855f7" strokeWidth="2"/>
        <text x="17" y="58" textAnchor="middle" fill="#a855f7" fontSize="7">PUMP</text>
      </g>

      {/* 5 feet zone indicator */}
      <line x1="360" y1="45" x2="380" y2="45" stroke="#ef4444" strokeWidth="1" strokeDasharray="3,2"/>
      <text x="370" y="40" textAnchor="middle" fill="#ef4444" fontSize="7">5 FT</text>

      {/* GFCI breaker panel */}
      <g transform="translate(10, 20)">
        <rect x="0" y="0" width="25" height="35" rx="2" fill="#1f2937" stroke="#22c55e" strokeWidth="2"/>
        <rect x="5" y="8" width="15" height="6" rx="1" fill="#22c55e"/>
        <text x="12" y="12" textAnchor="middle" fill="#000" fontSize="5" fontWeight="bold">GFCI</text>
        <rect x="5" y="18" width="15" height="6" rx="1" fill="#22c55e"/>
        <rect x="5" y="28" width="15" height="6" rx="1" fill="#6b7280"/>
      </g>

      {/* Overhead clearance zone */}
      <line x1="30" y1="20" x2="370" y2="20" stroke="#f97316" strokeWidth="1" strokeDasharray="5,3"/>
      <text x="200" y="15" textAnchor="middle" fill="#f97316" fontSize="8">OVERHEAD CLEARANCE: 22.5 FT MIN FROM WATER</text>

      {/* Wire run from panel to equipment */}
      <path d="M35 37 L35 55 L380 55 L380 90" fill="none" stroke="#22c55e" strokeWidth="2"/>

      {/* Bonding connector */}
      <circle cx="200" cy="65" r="4" fill="#22c55e"/>
      <text x="200" y="52" textAnchor="middle" fill="#22c55e" fontSize="7">BOND</text>
    </svg>
  );
}

export default function SwimmingPoolElectricalPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navigation />
      <div className="pt-20">
        <BreadcrumbJsonLd
          items={[
            { name: "Home", url: "https://amporalabs.com" },
            { name: "Blog", url: "https://amporalabs.com/blog" },
            { name: "NEC 680 Pool Electrical", url: "https://amporalabs.com/blog/swimming-pool-electrical-nec-680" },
          ]}
        />
        <BlogPostingJsonLd
          headline="NEC Article 680: Swimming Pool Electrical Requirements Guide"
          description="Complete guide to NEC Article 680 pool and spa electrical requirements including bonding, GFCI protection, and equipment location restrictions."
          datePublished="2025-01-15"
          dateModified="2025-01-15"
          url="https://amporalabs.com/blog/swimming-pool-electrical-nec-680"
          wordCount={3200}
          keywords={["NEC 680", "pool electrical", "pool bonding", "GFCI protection", "spa wiring"]}
        />

        <article className="max-w-4xl mx-auto px-6 py-12">
          {/* Breadcrumb */}
          <nav className="text-sm text-white/60 mb-8">
            <Link href="/" className="hover:text-white">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/blog" className="hover:text-white">Blog</Link>
            <span className="mx-2">/</span>
            <span className="text-white">NEC 680 Pool Electrical</span>
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
              NEC Article 680: Swimming Pool Electrical Requirements Guide
            </h1>
            <p className="text-xl text-white/70">
              Master the critical electrical requirements for pools, spas, and hot tubs. Learn proper bonding techniques, GFCI protection requirements, and equipment location rules that keep swimmers safe and pass inspection.
            </p>
          </header>

          <div className="mb-12 bg-gradient-to-br from-cyan-900/20 to-blue-900/20 rounded-2xl p-6 border border-white/10">
            <HeroIllustration />
          </div>

          {/* Warning Box */}
          <div className="bg-red-900/30 border border-red-500/30 rounded-2xl p-6 mb-12">
            <div className="flex items-start gap-4">
              <div className="text-red-400 text-2xl">&#9888;</div>
              <div>
                <h3 className="font-display font-bold text-lg mb-2 text-red-400">Critical Safety Area</h3>
                <p className="text-white/70">
                  Pool electrical work presents extreme electrocution hazards. Water and electricity create a lethal combination. NEC 680 requirements are strict for good reason - lives depend on proper installation. Always verify local amendments and obtain proper permits.
                </p>
              </div>
            </div>
          </div>

          {/* Table of Contents */}
          <div className="bg-white/5 rounded-2xl p-6 mb-12">
            <h2 className="font-display font-bold mb-4">In This Guide</h2>
            <ul className="space-y-2 text-white/70">
              <li><a href="#overview" className="hover:text-purple-400">&#8594; NEC 680 Overview and Scope</a></li>
              <li><a href="#bonding" className="hover:text-purple-400">&#8594; Equipotential Bonding Requirements</a></li>
              <li><a href="#gfci" className="hover:text-purple-400">&#8594; GFCI Protection Requirements</a></li>
              <li><a href="#clearances" className="hover:text-purple-400">&#8594; Equipment Location and Clearances</a></li>
              <li><a href="#wiring" className="hover:text-purple-400">&#8594; Wiring Methods</a></li>
              <li><a href="#lighting" className="hover:text-purple-400">&#8594; Underwater Lighting</a></li>
              <li><a href="#pumps" className="hover:text-purple-400">&#8594; Motors and Pump Equipment</a></li>
              <li><a href="#spas" className="hover:text-purple-400">&#8594; Spas and Hot Tubs</a></li>
              <li><a href="#inspection" className="hover:text-purple-400">&#8594; Inspection Checklist</a></li>
            </ul>
          </div>

          {/* Article Content */}
          <div className="prose prose-invert prose-lg max-w-none">

            <section id="overview" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">NEC 680 Overview and Scope</h2>
              <p className="text-white/80 mb-4">
                <strong>NEC Article 680</strong> covers electrical installations for swimming pools, storable pools, spas, hot tubs, fountains, hydromassage bathtubs, and similar installations. This article is one of the most detailed in the NEC because water environments present extreme shock hazards.
              </p>
              <p className="text-white/80 mb-4">
                Article 680 is organized into seven parts:
              </p>
              <div className="overflow-x-auto my-6">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-white/20">
                      <th className="text-left py-3 px-4 text-white/60">Part</th>
                      <th className="text-left py-3 px-4 text-white/60">Coverage</th>
                      <th className="text-left py-3 px-4 text-white/60">Key Sections</th>
                    </tr>
                  </thead>
                  <tbody className="text-white/80">
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-semibold">Part I</td>
                      <td className="py-3 px-4">General Requirements</td>
                      <td className="py-3 px-4 text-white/60">680.1 - 680.7</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-semibold">Part II</td>
                      <td className="py-3 px-4">Permanently Installed Pools</td>
                      <td className="py-3 px-4 text-white/60">680.20 - 680.33</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-semibold">Part III</td>
                      <td className="py-3 px-4">Storable Pools</td>
                      <td className="py-3 px-4 text-white/60">680.30 - 680.33</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-semibold">Part IV</td>
                      <td className="py-3 px-4">Spas and Hot Tubs</td>
                      <td className="py-3 px-4 text-white/60">680.40 - 680.44</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-semibold">Part V</td>
                      <td className="py-3 px-4">Fountains</td>
                      <td className="py-3 px-4 text-white/60">680.50 - 680.58</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-semibold">Part VI</td>
                      <td className="py-3 px-4">Pools and Tubs for Therapy</td>
                      <td className="py-3 px-4 text-white/60">680.60 - 680.62</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-semibold">Part VII</td>
                      <td className="py-3 px-4">Hydromassage Bathtubs</td>
                      <td className="py-3 px-4 text-white/60">680.70 - 680.74</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-white/80">
                The article applies to both indoor and outdoor installations. Understanding which Part applies to your specific installation is the first step in code compliance.
              </p>
            </section>

            <section id="bonding" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Equipotential Bonding Requirements</h2>
              <p className="text-white/80 mb-4">
                <strong>Equipotential bonding</strong> is the most critical safety measure in pool electrical systems. Per NEC 680.26, an equipotential bonding grid creates a common voltage reference around and under the pool, eliminating voltage differences that could shock swimmers.
              </p>

              <div className="bg-cyan-900/30 rounded-xl p-6 my-6">
                <h3 className="font-semibold text-cyan-400 mb-3">What Must Be Bonded (NEC 680.26)</h3>
                <ul className="space-y-2 text-white/70">
                  <li><strong>1. Pool structure:</strong> Conductive pool shell (reinforcing steel, copper grid, or structural metal)</li>
                  <li><strong>2. Perimeter surfaces:</strong> Unencapsulated metal parts within 3 feet horizontally of pool edge</li>
                  <li><strong>3. Metallic components:</strong> All metallic parts of the pool structure including ladders, handrails, diving boards</li>
                  <li><strong>4. Underwater lighting:</strong> All metal forming shells and no-niche luminaire bodies</li>
                  <li><strong>5. Metal fittings:</strong> Within or attached to pool shell (drain covers, skimmer frames)</li>
                  <li><strong>6. Electrical equipment:</strong> Motor pump housing, controller enclosures within 5 feet</li>
                  <li><strong>7. Metal parts of equipment:</strong> Heaters, filters, transformers associated with pool</li>
                  <li><strong>8. Metal sheathed cables and raceways:</strong> Containing pool equipment circuits</li>
                </ul>
              </div>

              <h3 className="text-xl font-semibold mb-3 mt-6">Bonding Conductor Requirements</h3>
              <p className="text-white/80 mb-4">
                Per NEC 680.26(B), bonding conductors must be:
              </p>
              <ul className="list-disc list-inside text-white/70 space-y-2 mb-6">
                <li>Minimum <strong>8 AWG solid copper</strong> conductor</li>
                <li><strong>Insulated, covered, or bare</strong></li>
                <li>Secured using <strong>listed pressure connectors</strong> - no solder connections</li>
                <li>Connected to form a continuous bonding path</li>
              </ul>

              <div className="bg-purple-900/30 rounded-xl p-6 my-6">
                <h3 className="font-semibold text-purple-400 mb-3">Perimeter Surface Bonding Options</h3>
                <p className="text-white/70 mb-3">Per NEC 680.26(B)(2), you have three options for perimeter surfaces extending 3 feet horizontally from pool edge:</p>
                <div className="space-y-3">
                  <div className="bg-white/5 rounded-lg p-4">
                    <p className="font-semibold text-white">Option 1: Structural Reinforcing Steel</p>
                    <p className="text-white/60 text-sm">Bond unencapsulated structural reinforcing steel together by steel tie wires or equivalent</p>
                  </div>
                  <div className="bg-white/5 rounded-lg p-4">
                    <p className="font-semibold text-white">Option 2: Copper Conductor Grid</p>
                    <p className="text-white/60 text-sm">Minimum 8 AWG bare solid copper bonding grid at 450mm x 450mm (18&quot; x 18&quot;) maximum spacing</p>
                  </div>
                  <div className="bg-white/5 rounded-lg p-4">
                    <p className="font-semibold text-white">Option 3: Alternative Listed Means</p>
                    <p className="text-white/60 text-sm">Listed means for providing equipotential bonding (prefabricated systems)</p>
                  </div>
                </div>
              </div>

              <div className="bg-orange-900/30 rounded-xl p-6 my-6">
                <h3 className="font-semibold text-orange-400 mb-2">Critical: Bonding vs. Grounding</h3>
                <p className="text-white/70">
                  Bonding and grounding serve different purposes. <strong>Bonding</strong> creates equal potential between all conductive surfaces to prevent shock. <strong>Grounding</strong> provides a path for fault current to trip protective devices. Pool equipment requires BOTH - they must be grounded per Article 250 AND bonded per 680.26.
                </p>
              </div>
            </section>

            <section id="gfci" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">GFCI Protection Requirements</h2>
              <p className="text-white/80 mb-4">
                GFCI protection is mandatory for virtually all pool-related circuits. The requirements vary based on the specific equipment and location.
              </p>

              <div className="overflow-x-auto my-6">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-white/20">
                      <th className="text-left py-3 px-4 text-white/60">Equipment/Location</th>
                      <th className="text-left py-3 px-4 text-white/60">GFCI Required</th>
                      <th className="text-left py-3 px-4 text-white/60">NEC Reference</th>
                    </tr>
                  </thead>
                  <tbody className="text-white/80">
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">Underwater luminaires (all voltages)</td>
                      <td className="py-3 px-4 text-green-400">Yes</td>
                      <td className="py-3 px-4 text-white/60">680.23(A)(3)</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">Receptacles within 20 feet of pool edge</td>
                      <td className="py-3 px-4 text-green-400">Yes</td>
                      <td className="py-3 px-4 text-white/60">680.22(A)(5)</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">Pump motors (single-phase, 120V-240V)</td>
                      <td className="py-3 px-4 text-green-400">Yes</td>
                      <td className="py-3 px-4 text-white/60">680.21(C)</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">Pool cover motors</td>
                      <td className="py-3 px-4 text-green-400">Yes</td>
                      <td className="py-3 px-4 text-white/60">680.27(B)(2)</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">Spa and hot tub equipment</td>
                      <td className="py-3 px-4 text-green-400">Yes</td>
                      <td className="py-3 px-4 text-white/60">680.44</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">Fountain equipment</td>
                      <td className="py-3 px-4 text-green-400">Yes</td>
                      <td className="py-3 px-4 text-white/60">680.51(A)</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4">Electrically operated pool covers</td>
                      <td className="py-3 px-4 text-green-400">Yes</td>
                      <td className="py-3 px-4 text-white/60">680.27(B)(2)</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="bg-green-900/30 rounded-xl p-6 my-6">
                <h3 className="font-semibold text-green-400 mb-3">NEC 2023 Changes to Pool GFCI</h3>
                <p className="text-white/70">
                  The NEC 2023 expanded GFCI requirements for pool pump motors. Per 680.21(C), GFCI protection is now required for <strong>all single-phase pool pump motors rated 120V through 240V</strong>, regardless of horsepower. Previously, only motors up to certain horsepower ratings required GFCI.
                </p>
              </div>
            </section>

            <section id="clearances" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Equipment Location and Clearances</h2>
              <p className="text-white/80 mb-4">
                NEC 680 establishes specific clearance requirements to keep electrical equipment safely away from pool water. These requirements apply to both indoor and outdoor pools.
              </p>

              <h3 className="text-xl font-semibold mb-3 mt-6">Overhead Clearances (NEC 680.8)</h3>
              <div className="overflow-x-auto my-6">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-white/20">
                      <th className="text-left py-3 px-4 text-white/60">Item</th>
                      <th className="text-left py-3 px-4 text-white/60">Over Water/Deck</th>
                      <th className="text-left py-3 px-4 text-white/60">From Edge of Pool</th>
                    </tr>
                  </thead>
                  <tbody className="text-white/80">
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">Utility lines (0-750V to ground, insulated)</td>
                      <td className="py-3 px-4 font-mono">22.5 ft</td>
                      <td className="py-3 px-4 font-mono">10 ft horizontal</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">Utility lines (over 750V, insulated)</td>
                      <td className="py-3 px-4 font-mono">25 ft</td>
                      <td className="py-3 px-4 font-mono">10 ft horizontal</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">Service drop conductors</td>
                      <td className="py-3 px-4 font-mono">22.5 ft</td>
                      <td className="py-3 px-4 font-mono">10 ft horizontal</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">Communications cables</td>
                      <td className="py-3 px-4 font-mono">10 ft</td>
                      <td className="py-3 px-4 font-mono">-</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4">Network-powered broadband</td>
                      <td className="py-3 px-4 font-mono">22.5 ft</td>
                      <td className="py-3 px-4 font-mono">10 ft horizontal</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h3 className="text-xl font-semibold mb-3 mt-6">Receptacle Location Requirements (NEC 680.22)</h3>
              <ul className="list-disc list-inside text-white/70 space-y-2 mb-6">
                <li><strong>Minimum 6 feet</strong> from inside wall of pool (permanently installed pools)</li>
                <li><strong>Required receptacle:</strong> At least one 125V, 15A or 20A receptacle between 6-20 feet from pool</li>
                <li><strong>Maximum 20 feet:</strong> No receptacles beyond 20 feet require GFCI for pool use</li>
                <li><strong>Locking and grounding type:</strong> Required for specific equipment</li>
              </ul>

              <h3 className="text-xl font-semibold mb-3 mt-6">Luminaire and Ceiling Fan Clearances (NEC 680.22(B))</h3>
              <div className="bg-white/5 rounded-xl p-6 my-6">
                <ul className="space-y-2 text-white/70">
                  <li><strong>12 feet horizontally</strong> from inside walls of pool for luminaires, ceiling fans, and outlets</li>
                  <li><strong>7.5 feet above</strong> maximum water level or any observation stands, platforms, or diving structures</li>
                  <li><strong>Exception:</strong> GFCI-protected and identified for damp/wet location luminaires may be installed less than 12 feet (minimum 5 feet) horizontally</li>
                </ul>
              </div>

              <h3 className="text-xl font-semibold mb-3 mt-6">Switching Device Locations (NEC 680.22(C))</h3>
              <p className="text-white/80 mb-4">
                Switching devices must be located at least <strong>5 feet horizontally</strong> from the inside walls of pools unless separated by a solid fence, wall, or other permanent barrier.
              </p>
            </section>

            <section id="wiring" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Wiring Methods</h2>
              <p className="text-white/80 mb-4">
                NEC 680.21(A) specifies acceptable wiring methods for pool electrical installations:
              </p>

              <div className="grid md:grid-cols-2 gap-4 my-6">
                <div className="bg-green-900/30 rounded-xl p-6">
                  <h3 className="font-semibold text-green-400 mb-3">Permitted Wiring Methods</h3>
                  <ul className="space-y-2 text-white/70 text-sm">
                    <li>&#10003; Rigid metal conduit (RMC)</li>
                    <li>&#10003; Intermediate metal conduit (IMC)</li>
                    <li>&#10003; Liquidtight flexible nonmetallic conduit (LFNC-B)</li>
                    <li>&#10003; Rigid polyvinyl chloride conduit (PVC)</li>
                    <li>&#10003; Reinforced thermosetting resin conduit (RTRC)</li>
                    <li>&#10003; MC cable (listed for wet locations)</li>
                    <li>&#10003; Type TC cable (properly rated)</li>
                  </ul>
                </div>
                <div className="bg-red-900/30 rounded-xl p-6">
                  <h3 className="font-semibold text-red-400 mb-3">Not Permitted</h3>
                  <ul className="space-y-2 text-white/70 text-sm">
                    <li>&#10007; EMT (on or within buildings) without supplemental grounding</li>
                    <li>&#10007; Flexible metal conduit (FMC) alone</li>
                    <li>&#10007; Electrical metallic tubing underground</li>
                    <li>&#10007; NM cable (Romex) for pool equipment</li>
                    <li>&#10007; Aluminum conduit in contact with earth</li>
                  </ul>
                </div>
              </div>

              <div className="bg-orange-900/30 rounded-xl p-6 my-6">
                <h3 className="font-semibold text-orange-400 mb-2">Underground Wiring</h3>
                <p className="text-white/70">
                  Underground wiring to pool equipment must maintain minimum <strong>burial depths per NEC Table 300.5</strong>. PVC conduit requires 18-inch minimum cover, while direct-buried UF cable requires 24 inches. All underground metal raceways and equipment grounding conductors must be protected against corrosion.
                </p>
              </div>
            </section>

            <section id="lighting" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Underwater Lighting</h2>
              <p className="text-white/80 mb-4">
                Underwater lighting requirements are covered in NEC 680.23. All underwater luminaires present unique hazards and require specific installation practices.
              </p>

              <h3 className="text-xl font-semibold mb-3 mt-6">General Requirements</h3>
              <ul className="list-disc list-inside text-white/70 space-y-2 mb-6">
                <li><strong>Listed for the purpose:</strong> All underwater luminaires must be specifically listed</li>
                <li><strong>GFCI protection required:</strong> For ALL underwater luminaires regardless of voltage</li>
                <li><strong>No exposed live parts:</strong> In pool water at any voltage level</li>
                <li><strong>Maximum depth:</strong> Installed per manufacturer specifications</li>
              </ul>

              <h3 className="text-xl font-semibold mb-3 mt-6">Wet-Niche vs. Dry-Niche Luminaires</h3>
              <div className="grid md:grid-cols-2 gap-4 my-6">
                <div className="bg-white/5 rounded-xl p-6">
                  <h4 className="font-semibold text-cyan-400 mb-3">Wet-Niche Luminaires</h4>
                  <ul className="space-y-2 text-white/70 text-sm">
                    <li>Luminaire body in direct contact with pool water</li>
                    <li>Flexible cord from luminaire to deck junction box</li>
                    <li>Cord length: 12 ft minimum, extra length stored in forming shell</li>
                    <li>Forming shell bonded to equipotential grid</li>
                    <li>Junction box: 4 inches above deck or 8 inches above water level</li>
                  </ul>
                </div>
                <div className="bg-white/5 rounded-xl p-6">
                  <h4 className="font-semibold text-purple-400 mb-3">Dry-Niche Luminaires</h4>
                  <ul className="space-y-2 text-white/70 text-sm">
                    <li>Luminaire behind watertight lens in pool wall</li>
                    <li>Provision to drain water from niche</li>
                    <li>Drain to prevent water accumulation</li>
                    <li>Less common in new installations</li>
                    <li>Same bonding requirements apply</li>
                  </ul>
                </div>
              </div>

              <div className="bg-green-900/30 rounded-xl p-6 my-6">
                <h3 className="font-semibold text-green-400 mb-2">Low-Voltage Underwater Lighting</h3>
                <p className="text-white/70">
                  Per NEC 680.23(A)(2), underwater luminaires operating at 15V or less may not require GFCI protection if supplied by a listed transformer or power supply that limits output to 15V. However, many manufacturers and AHJs still require GFCI protection. Always check local requirements.
                </p>
              </div>
            </section>

            <section id="pumps" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Motors and Pump Equipment</h2>
              <p className="text-white/80 mb-4">
                Pool pump motors are the workhorse of pool systems and have specific electrical requirements under NEC 680.21.
              </p>

              <h3 className="text-xl font-semibold mb-3 mt-6">Motor Installation Requirements</h3>
              <ul className="list-disc list-inside text-white/70 space-y-2 mb-6">
                <li><strong>Location:</strong> Minimum 5 feet from inside walls of pool (unless separated by solid barrier)</li>
                <li><strong>GFCI protection:</strong> Required for all single-phase motors 120V-240V</li>
                <li><strong>Disconnecting means:</strong> Required within sight of motor and equipment</li>
                <li><strong>Grounding:</strong> Equipment grounding conductor required in all wiring methods</li>
                <li><strong>Bonding:</strong> Motor housing must be bonded to equipotential grid</li>
              </ul>

              <div className="bg-white/5 rounded-xl p-6 my-6">
                <h3 className="font-semibold mb-3">Cord-and-Plug Connected Equipment</h3>
                <p className="text-white/70 mb-3">
                  Cord-connected pool pump motors are permitted under NEC 680.21(A)(4) if:
                </p>
                <ul className="space-y-2 text-white/70 text-sm">
                  <li>The flexible cord is not longer than 3 feet</li>
                  <li>Uses a grounding-type attachment plug</li>
                  <li>GFCI protection is provided</li>
                  <li>Cord is protected from physical damage</li>
                  <li>Listed for the application</li>
                </ul>
              </div>

              <h3 className="text-xl font-semibold mb-3 mt-6">Variable-Speed Pool Pumps</h3>
              <p className="text-white/80 mb-4">
                Variable-speed pumps with VFD (variable frequency drive) controllers have additional considerations:
              </p>
              <ul className="list-disc list-inside text-white/70 space-y-2 mb-6">
                <li>VFD enclosure must be suitable for the environment (NEMA 3R minimum outdoor)</li>
                <li>Bonding of metal enclosure required</li>
                <li>May require additional harmonic filtering per utility requirements</li>
                <li>Manufacturer grounding and bonding instructions must be followed</li>
              </ul>
            </section>

            <section id="spas" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Spas and Hot Tubs</h2>
              <p className="text-white/80 mb-4">
                NEC 680.40-680.44 covers spa and hot tub installations. Requirements differ for indoor versus outdoor installations and self-contained versus field-assembled units.
              </p>

              <h3 className="text-xl font-semibold mb-3 mt-6">Self-Contained Spas and Hot Tubs</h3>
              <div className="bg-purple-900/30 rounded-xl p-6 my-6">
                <p className="text-white/70 mb-3">
                  Factory-built, self-contained units with all electrical equipment integral are typically:
                </p>
                <ul className="space-y-2 text-white/70 text-sm">
                  <li><strong>Listed as a complete unit</strong> by testing laboratory</li>
                  <li><strong>Cord-and-plug connected</strong> or permanently wired</li>
                  <li><strong>GFCI protected</strong> - either integral or at supply</li>
                  <li><strong>Equipment compartment bonded</strong> at factory</li>
                </ul>
              </div>

              <h3 className="text-xl font-semibold mb-3 mt-6">Outdoor Spa Installation Requirements</h3>
              <ul className="list-disc list-inside text-white/70 space-y-2 mb-6">
                <li><strong>Receptacles:</strong> Minimum 6 feet from inside walls (5 feet if GFCI protected)</li>
                <li><strong>Required receptacle:</strong> At least one 125V receptacle between 6-10 feet</li>
                <li><strong>Lighting:</strong> 12 feet minimum from spa edge (5 feet if GFCI and rated for wet locations)</li>
                <li><strong>Disconnect:</strong> Required within sight, at least 5 feet from spa</li>
                <li><strong>Bonding:</strong> All metal parts, water piping, and equipment bonded together</li>
              </ul>

              <h3 className="text-xl font-semibold mb-3 mt-6">Indoor Spa Considerations</h3>
              <p className="text-white/80 mb-4">
                Indoor spa installations have additional requirements per NEC 680.43:
              </p>
              <ul className="list-disc list-inside text-white/70 space-y-2 mb-6">
                <li><strong>All outlet devices</strong> within 5 feet must be GFCI protected</li>
                <li><strong>Wall switches</strong> minimum 5 feet from spa edge</li>
                <li><strong>Bonding:</strong> Metal water pipes, metal window frames, and other conductive surfaces within 5 feet</li>
                <li><strong>Ventilation:</strong> Consider bathroom fan requirements and moisture control</li>
              </ul>
            </section>

            <section id="inspection" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Pool Electrical Inspection Checklist</h2>
              <p className="text-white/80 mb-4">
                Use this checklist to verify your pool electrical installation before calling for inspection:
              </p>

              <div className="bg-white/5 rounded-xl p-6 my-6">
                <h3 className="font-semibold text-green-400 mb-4">Pre-Inspection Verification</h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <span className="text-green-400 mt-1">&#9744;</span>
                    <span className="text-white/70">Equipotential bonding grid installed and accessible for inspection</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-green-400 mt-1">&#9744;</span>
                    <span className="text-white/70">All bonding connections made with listed pressure connectors (no solder)</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-green-400 mt-1">&#9744;</span>
                    <span className="text-white/70">8 AWG minimum solid copper bonding conductors</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-green-400 mt-1">&#9744;</span>
                    <span className="text-white/70">Pool shell reinforcing steel or copper grid bonded</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-green-400 mt-1">&#9744;</span>
                    <span className="text-white/70">Metal ladders, handrails, diving board supports bonded</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-green-400 mt-1">&#9744;</span>
                    <span className="text-white/70">Pump motor housing bonded to grid</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-green-400 mt-1">&#9744;</span>
                    <span className="text-white/70">GFCI protection on all required circuits</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-green-400 mt-1">&#9744;</span>
                    <span className="text-white/70">Receptacles minimum 6 feet from pool, required receptacle within 20 feet</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-green-400 mt-1">&#9744;</span>
                    <span className="text-white/70">Underwater luminaires listed and properly installed</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-green-400 mt-1">&#9744;</span>
                    <span className="text-white/70">Light junction box 4 inches above deck level</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-green-400 mt-1">&#9744;</span>
                    <span className="text-white/70">Disconnect within sight of pool equipment</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-green-400 mt-1">&#9744;</span>
                    <span className="text-white/70">Overhead clearances verified (22.5 feet minimum for power lines)</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-green-400 mt-1">&#9744;</span>
                    <span className="text-white/70">Equipment grounding conductor continuous to panel</span>
                  </div>
                </div>
              </div>
            </section>

            {/* CTA Section */}
            <section className="bg-gradient-to-r from-purple-900/30 to-cyan-900/30 rounded-2xl p-8 my-12">
              <h2 className="text-2xl font-display font-bold mb-4 text-center">
                Pool Electrical Reference On-Site
              </h2>
              <p className="text-white/70 mb-6 text-center">
                Access NEC 680 requirements, bonding specifications, and GFCI requirements instantly with Ampora. Get pool electrical code answers while you work.
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
                <Link href="/blog/nec-article-250-grounding-guide" className="bg-white/5 hover:bg-white/10 rounded-xl p-6 transition-colors">
                  <span className="text-purple-400 text-sm">NEC Code</span>
                  <h3 className="font-semibold mt-2">NEC Article 250: Grounding and Bonding</h3>
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
