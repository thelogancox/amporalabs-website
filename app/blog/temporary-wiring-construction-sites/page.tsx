import { Metadata } from "next";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import { BreadcrumbJsonLd, BlogPostingJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "NEC Article 590: Temporary Wiring for Construction Sites",
  description: "Complete guide to NEC Article 590 temporary power requirements for construction sites. Learn GFCI protection rules, cord and cable requirements, temporary panel installation, and inspection requirements.",
  keywords: [
    "NEC 590",
    "temporary wiring",
    "construction site electrical",
    "temporary power",
    "GFCI construction site",
    "temporary electrical panel",
    "construction temporary power",
    "spider box",
    "temp power requirements",
    "NEC temporary wiring",
    "construction site GFCI",
    "temporary lighting construction",
    "extension cord construction",
    "portable GFCI",
    "assured equipment grounding",
    "AEGCP"
  ],
  alternates: {
    canonical: "https://amporalabs.com/blog/temporary-wiring-construction-sites",
  },
  openGraph: {
    title: "NEC 590: Temporary Power for Construction Sites - Ampora",
    description: "Master temporary wiring requirements for construction including GFCI protection and cord requirements.",
    url: "https://amporalabs.com/blog/temporary-wiring-construction-sites",
    type: "article",
  },
};

function HeroIllustration() {
  return (
    <svg viewBox="0 0 400 160" className="w-full h-40 md:h-48" aria-label="Construction site temporary power diagram">
      {/* Utility pole */}
      <g transform="translate(20, 10)">
        <rect x="8" y="0" width="8" height="130" fill="#78716c"/>
        <line x1="0" y1="20" x2="24" y2="20" stroke="#78716c" strokeWidth="4"/>

        {/* Service wires */}
        <circle cx="0" cy="20" r="3" fill="#1f2937" stroke="#ef4444" strokeWidth="1"/>
        <circle cx="24" cy="20" r="3" fill="#1f2937" stroke="#000" strokeWidth="1"/>
      </g>

      {/* Service drop */}
      <path d="M44 30 Q80 40, 90 60" fill="none" stroke="#ef4444" strokeWidth="2"/>
      <path d="M32 30 Q70 45, 90 70" fill="none" stroke="#000" strokeWidth="2"/>
      <path d="M44 30 Q75 50, 90 80" fill="none" stroke="#ef4444" strokeWidth="2"/>

      {/* Temporary service panel */}
      <g transform="translate(80, 50)">
        <rect x="0" y="0" width="50" height="80" rx="3" fill="#374151" stroke="#f97316" strokeWidth="2"/>
        <rect x="5" y="5" width="40" height="15" rx="2" fill="#1f2937"/>
        <text x="25" y="15" textAnchor="middle" fill="#f97316" fontSize="7" fontWeight="bold">200A</text>

        {/* Breakers */}
        <rect x="8" y="25" width="14" height="10" rx="1" fill="#22c55e"/>
        <rect x="28" y="25" width="14" height="10" rx="1" fill="#22c55e"/>
        <rect x="8" y="40" width="14" height="10" rx="1" fill="#22c55e"/>
        <rect x="28" y="40" width="14" height="10" rx="1" fill="#22c55e"/>
        <rect x="8" y="55" width="14" height="10" rx="1" fill="#6b7280"/>
        <rect x="28" y="55" width="14" height="10" rx="1" fill="#6b7280"/>

        <text x="25" y="78" textAnchor="middle" fill="#9ca3af" fontSize="6">TEMP PANEL</text>
      </g>

      {/* Ground rod */}
      <g transform="translate(85, 130)">
        <rect x="0" y="0" width="4" height="25" fill="#a16207"/>
        <line x1="2" y1="-5" x2="2" y2="0" stroke="#22c55e" strokeWidth="2"/>
        <text x="2" y="35" textAnchor="middle" fill="#22c55e" fontSize="6">GND</text>
      </g>

      {/* Spider box */}
      <g transform="translate(180, 70)">
        <rect x="0" y="0" width="60" height="40" rx="4" fill="#1f2937" stroke="#a855f7" strokeWidth="2"/>
        <text x="30" y="15" textAnchor="middle" fill="#a855f7" fontSize="7" fontWeight="bold">SPIDER BOX</text>
        <text x="30" y="25" textAnchor="middle" fill="#22c55e" fontSize="6">GFCI</text>

        {/* Outlets */}
        <circle cx="10" cy="33" r="4" fill="#22c55e"/>
        <circle cx="22" cy="33" r="4" fill="#22c55e"/>
        <circle cx="34" cy="33" r="4" fill="#22c55e"/>
        <circle cx="46" cy="33" r="4" fill="#22c55e"/>
      </g>

      {/* Feeder cable to spider box */}
      <path d="M130 90 Q155 90, 180 90" fill="none" stroke="#f97316" strokeWidth="4"/>
      <text x="155" y="82" textAnchor="middle" fill="#f97316" fontSize="6">50A FEEDER</text>

      {/* Extension cords from spider box */}
      <path d="M240 95 Q260 100, 280 130" fill="none" stroke="#fbbf24" strokeWidth="2"/>
      <path d="M240 95 Q270 95, 300 95" fill="none" stroke="#fbbf24" strokeWidth="2"/>
      <path d="M240 90 Q265 80, 290 60" fill="none" stroke="#fbbf24" strokeWidth="2"/>

      {/* Power tools */}
      <g transform="translate(275, 120)">
        <rect x="0" y="0" width="30" height="20" rx="3" fill="#1f2937" stroke="#eab308" strokeWidth="1"/>
        <circle cx="8" cy="10" r="6" fill="#374151" stroke="#eab308" strokeWidth="1"/>
        <text x="15" y="35" textAnchor="middle" fill="#9ca3af" fontSize="6">SAW</text>
      </g>

      <g transform="translate(295, 85)">
        <rect x="0" y="0" width="25" height="15" rx="2" fill="#1f2937" stroke="#eab308" strokeWidth="1"/>
        <rect x="25" y="5" width="15" height="5" rx="1" fill="#374151"/>
        <text x="20" y="25" textAnchor="middle" fill="#9ca3af" fontSize="6">DRILL</text>
      </g>

      {/* Temporary light string */}
      <g transform="translate(280, 40)">
        <line x1="0" y1="0" x2="80" y2="0" stroke="#fbbf24" strokeWidth="1"/>
        <circle cx="20" cy="0" r="5" fill="#fbbf24" opacity="0.8"/>
        <circle cx="40" cy="0" r="5" fill="#fbbf24" opacity="0.8"/>
        <circle cx="60" cy="0" r="5" fill="#fbbf24" opacity="0.8"/>
        <text x="40" y="15" textAnchor="middle" fill="#fbbf24" fontSize="6">TEMP LIGHTS</text>
      </g>

      {/* GFCI Protection label */}
      <rect x="160" y="5" width="90" height="25" rx="4" fill="#22c55e" fillOpacity="0.2" stroke="#22c55e"/>
      <text x="205" y="17" textAnchor="middle" fill="#22c55e" fontSize="8" fontWeight="bold">ALL 125V 15/20A</text>
      <text x="205" y="26" textAnchor="middle" fill="#22c55e" fontSize="7">GFCI PROTECTED</text>

      {/* Construction zone markers */}
      <rect x="0" y="140" width="400" height="20" fill="#78716c" opacity="0.3"/>
      <text x="200" y="153" textAnchor="middle" fill="#9ca3af" fontSize="8">CONSTRUCTION SITE</text>
    </svg>
  );
}

export default function TemporaryWiringPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navigation />
      <div className="pt-20">
        <BreadcrumbJsonLd
          items={[
            { name: "Home", url: "https://amporalabs.com" },
            { name: "Blog", url: "https://amporalabs.com/blog" },
            { name: "Temporary Wiring Construction", url: "https://amporalabs.com/blog/temporary-wiring-construction-sites" },
          ]}
        />
        <BlogPostingJsonLd
          headline="NEC Article 590: Temporary Wiring for Construction Sites"
          description="Complete guide to NEC 590 temporary power requirements for construction sites including GFCI protection and cord requirements."
          datePublished="2025-01-17"
          dateModified="2025-01-17"
          url="https://amporalabs.com/blog/temporary-wiring-construction-sites"
          wordCount={2600}
          keywords={["NEC 590", "temporary wiring", "construction electrical", "GFCI protection", "temp power"]}
        />

        <article className="max-w-4xl mx-auto px-6 py-12">
          {/* Breadcrumb */}
          <nav className="text-sm text-white/60 mb-8">
            <Link href="/" className="hover:text-white">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/blog" className="hover:text-white">Blog</Link>
            <span className="mx-2">/</span>
            <span className="text-white">Temporary Wiring Construction</span>
          </nav>

          {/* Article Header */}
          <header className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <span className="px-3 py-1 bg-cyan-600/30 text-cyan-300 text-sm font-medium rounded-full">
                Installation
              </span>
              <span className="text-white/40 text-sm">10 min read</span>
              <span className="text-white/40 text-sm">January 17, 2025</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6 leading-tight">
              NEC Article 590: Temporary Wiring for Construction Sites
            </h1>
            <p className="text-xl text-white/70">
              Understand the requirements for temporary electrical installations on construction sites. From GFCI protection to cord and cable rules, learn what it takes to provide safe temporary power that passes inspection.
            </p>
          </header>

          <div className="mb-12 bg-gradient-to-br from-orange-900/20 to-yellow-900/20 rounded-2xl p-6 border border-white/10">
            <HeroIllustration />
          </div>

          {/* Safety Warning */}
          <div className="bg-orange-900/30 border border-orange-500/30 rounded-2xl p-6 mb-12">
            <div className="flex items-start gap-4">
              <div className="text-orange-400 text-2xl">&#9888;</div>
              <div>
                <h3 className="font-display font-bold text-lg mb-2 text-orange-400">Construction Site Hazards</h3>
                <p className="text-white/70">
                  Construction sites present unique electrical hazards: wet conditions, damaged cords, missing covers, and untrained personnel. OSHA statistics show electrocution is one of the "Fatal Four" causes of construction deaths. Proper temporary wiring saves lives.
                </p>
              </div>
            </div>
          </div>

          {/* Table of Contents */}
          <div className="bg-white/5 rounded-2xl p-6 mb-12">
            <h2 className="font-display font-bold mb-4">In This Guide</h2>
            <ul className="space-y-2 text-white/70">
              <li><a href="#overview" className="hover:text-purple-400">&#8594; NEC 590 Overview</a></li>
              <li><a href="#gfci" className="hover:text-purple-400">&#8594; GFCI Protection Requirements</a></li>
              <li><a href="#aegcp" className="hover:text-purple-400">&#8594; Assured Equipment Grounding</a></li>
              <li><a href="#cords" className="hover:text-purple-400">&#8594; Cord and Cable Requirements</a></li>
              <li><a href="#services" className="hover:text-purple-400">&#8594; Temporary Services and Feeders</a></li>
              <li><a href="#lighting" className="hover:text-purple-400">&#8594; Temporary Lighting</a></li>
              <li><a href="#receptacles" className="hover:text-purple-400">&#8594; Receptacle Installation</a></li>
              <li><a href="#inspection" className="hover:text-purple-400">&#8594; Inspection Requirements</a></li>
            </ul>
          </div>

          {/* Article Content */}
          <div className="prose prose-invert prose-lg max-w-none">

            <section id="overview" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">NEC 590 Overview</h2>
              <p className="text-white/80 mb-4">
                <strong>NEC Article 590</strong> covers temporary electrical power and lighting installations during construction, remodeling, maintenance, repair, or demolition of buildings or structures. It also covers similar installations for experimental/developmental work, emergencies, and tests.
              </p>

              <div className="bg-cyan-900/30 rounded-xl p-6 my-6">
                <h3 className="font-semibold text-cyan-400 mb-3">Scope of NEC 590</h3>
                <ul className="space-y-2 text-white/70">
                  <li><strong>590.1:</strong> Scope - temporary installations during construction</li>
                  <li><strong>590.2:</strong> Time constraints - 90 days for holiday displays, duration of construction</li>
                  <li><strong>590.3:</strong> General requirements - must comply with other NEC articles</li>
                  <li><strong>590.4:</strong> General requirements for wiring methods</li>
                  <li><strong>590.5:</strong> Lamps and lampholders</li>
                  <li><strong>590.6:</strong> Ground-fault protection for personnel</li>
                </ul>
              </div>

              <h3 className="text-xl font-semibold mb-3 mt-6">Duration Limits</h3>
              <p className="text-white/80 mb-4">
                Temporary wiring has specific time limits per NEC 590.3(B):
              </p>
              <ul className="list-disc list-inside text-white/70 space-y-2 mb-6">
                <li><strong>Construction:</strong> During the period of construction, remodeling, or demolition</li>
                <li><strong>Holiday lighting:</strong> Maximum 90 days</li>
                <li><strong>Emergencies:</strong> Duration of the emergency</li>
                <li><strong>Tests/experiments:</strong> Duration of the testing</li>
              </ul>

              <div className="bg-white/5 rounded-xl p-6 my-6">
                <h3 className="font-semibold mb-3">What Article 590 Does NOT Cover</h3>
                <p className="text-white/70">
                  Article 590 applies to temporary wiring installations. It does not relax requirements for:
                </p>
                <ul className="mt-3 space-y-1 text-white/70">
                  <li>&#8226; Permanent wiring being installed</li>
                  <li>&#8226; Equipment grounding requirements</li>
                  <li>&#8226; Overcurrent protection sizing</li>
                  <li>&#8226; Conductor ampacity requirements</li>
                </ul>
              </div>
            </section>

            <section id="gfci" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">GFCI Protection Requirements</h2>
              <p className="text-white/80 mb-4">
                GFCI protection is critical for construction site safety. NEC 590.6 requires GFCI protection for most temporary power receptacles.
              </p>

              <div className="bg-green-900/30 rounded-xl p-6 my-6">
                <h3 className="font-semibold text-green-400 mb-3">NEC 590.6(A) - Required GFCI Protection</h3>
                <p className="text-white/70 mb-3">
                  GFCI protection is required for all <strong>125V, single-phase, 15A, 20A, and 30A receptacle outlets</strong> that are:
                </p>
                <ul className="space-y-2 text-white/70">
                  <li>&#10003; Not part of the permanent wiring of the building</li>
                  <li>&#10003; Used for temporary power during construction</li>
                  <li>&#10003; Including cord sets (extension cords) used on the site</li>
                </ul>
              </div>

              <h3 className="text-xl font-semibold mb-3 mt-6">GFCI Protection Methods</h3>
              <div className="overflow-x-auto my-6">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-white/20">
                      <th className="text-left py-3 px-4 text-white/60">Method</th>
                      <th className="text-left py-3 px-4 text-white/60">Location</th>
                      <th className="text-left py-3 px-4 text-white/60">Advantages</th>
                      <th className="text-left py-3 px-4 text-white/60">Considerations</th>
                    </tr>
                  </thead>
                  <tbody className="text-white/80">
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-semibold">GFCI Breaker</td>
                      <td className="py-3 px-4">Panel</td>
                      <td className="py-3 px-4 text-white/60">Protects entire circuit</td>
                      <td className="py-3 px-4 text-white/60">Nuisance trips on long runs</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-semibold">GFCI Receptacle</td>
                      <td className="py-3 px-4">First outlet</td>
                      <td className="py-3 px-4 text-white/60">Protects downstream</td>
                      <td className="py-3 px-4 text-white/60">Must be accessible for reset</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-semibold">Spider Box</td>
                      <td className="py-3 px-4">Distribution point</td>
                      <td className="py-3 px-4 text-white/60">Multiple protected outlets</td>
                      <td className="py-3 px-4 text-white/60">Portable, rugged design</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-semibold">Cord-Type GFCI</td>
                      <td className="py-3 px-4">Cord end</td>
                      <td className="py-3 px-4 text-white/60">Portable protection</td>
                      <td className="py-3 px-4 text-white/60">Subject to damage</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="bg-purple-900/30 rounded-xl p-6 my-6">
                <h3 className="font-semibold text-purple-400 mb-3">Spider Boxes (Temporary Power Distribution)</h3>
                <p className="text-white/70 mb-3">
                  Spider boxes (also called power distribution boxes or temp power centers) are common on construction sites. They typically include:
                </p>
                <ul className="space-y-2 text-white/70 text-sm">
                  <li><strong>Built-in GFCI protection</strong> for 15A and 20A receptacles</li>
                  <li><strong>30A or 50A input</strong> from temporary panel</li>
                  <li><strong>Multiple 20A duplex outlets</strong> (typically 4-6)</li>
                  <li><strong>Circuit breaker protection</strong> for each outlet group</li>
                  <li><strong>Rugged enclosure</strong> rated for job site use</li>
                </ul>
              </div>
            </section>

            <section id="aegcp" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Assured Equipment Grounding Conductor Program</h2>
              <p className="text-white/80 mb-4">
                NEC 590.6(B) provides an alternative to GFCI protection: the <strong>Assured Equipment Grounding Conductor Program (AEGCP)</strong>. However, this is rarely used because GFCI protection is simpler and more reliable.
              </p>

              <div className="bg-orange-900/30 rounded-xl p-6 my-6">
                <h3 className="font-semibold text-orange-400 mb-3">AEGCP Requirements (If GFCI Not Used)</h3>
                <p className="text-white/70 mb-3">If GFCI protection is not provided, all of the following must be implemented:</p>
                <ul className="space-y-2 text-white/70">
                  <li><strong>1. Written program:</strong> Document describing procedures</li>
                  <li><strong>2. Designated person:</strong> Competent individual responsible for program</li>
                  <li><strong>3. Daily visual inspection:</strong> Check cords and equipment before use</li>
                  <li><strong>4. Testing intervals:</strong> Test equipment grounding before first use, after repair, and quarterly</li>
                  <li><strong>5. Recorded tests:</strong> Document all test results</li>
                  <li><strong>6. Remove defective equipment:</strong> Tag and remove from service</li>
                </ul>
              </div>

              <div className="bg-white/5 rounded-xl p-6 my-6">
                <h3 className="font-semibold mb-3">Why GFCI is Preferred</h3>
                <p className="text-white/70">
                  The AEGCP was common before reliable GFCI devices were available. Today, most contractors use GFCI protection exclusively because:
                </p>
                <ul className="mt-3 space-y-1 text-white/70">
                  <li>&#8226; GFCI devices are inexpensive and reliable</li>
                  <li>&#8226; AEGCP requires significant documentation and testing</li>
                  <li>&#8226; GFCI provides real-time protection against ground faults</li>
                  <li>&#8226; OSHA inspectors prefer GFCI protection</li>
                </ul>
              </div>
            </section>

            <section id="cords" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Cord and Cable Requirements</h2>
              <p className="text-white/80 mb-4">
                Extension cords and flexible cables are extensively used on construction sites. NEC 590.4 establishes requirements for their use.
              </p>

              <h3 className="text-xl font-semibold mb-3 mt-6">Permitted Cord Types</h3>
              <div className="overflow-x-auto my-6">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-white/20">
                      <th className="text-left py-3 px-4 text-white/60">Cord Type</th>
                      <th className="text-left py-3 px-4 text-white/60">Description</th>
                      <th className="text-left py-3 px-4 text-white/60">Typical Use</th>
                    </tr>
                  </thead>
                  <tbody className="text-white/80">
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-semibold">S, SO, ST, STO</td>
                      <td className="py-3 px-4">Hard service cord</td>
                      <td className="py-3 px-4 text-white/60">General construction, power tools</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-semibold">SJ, SJO, SJT</td>
                      <td className="py-3 px-4">Junior hard service</td>
                      <td className="py-3 px-4 text-white/60">Light-duty tools, appliances</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-semibold">W</td>
                      <td className="py-3 px-4">Extra hard usage</td>
                      <td className="py-3 px-4 text-white/60">Severe duty, outdoor</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-semibold">G, G-GC</td>
                      <td className="py-3 px-4">Portable power cable</td>
                      <td className="py-3 px-4 text-white/60">High amperage feeders</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h3 className="text-xl font-semibold mb-3 mt-6">Cord Requirements</h3>
              <ul className="list-disc list-inside text-white/70 space-y-2 mb-6">
                <li><strong>Equipment grounding conductor:</strong> Required in all cords for construction</li>
                <li><strong>Strain relief:</strong> Proper cord connections with strain relief</li>
                <li><strong>No splices:</strong> Cords shall not be spliced (repaired ends are splices)</li>
                <li><strong>Grounding-type:</strong> All cord caps and receptacles must be grounding type</li>
                <li><strong>Protection from damage:</strong> Route to avoid physical damage</li>
              </ul>

              <div className="bg-red-900/30 rounded-xl p-6 my-6">
                <h3 className="font-semibold text-red-400 mb-2">Common Cord Violations</h3>
                <ul className="space-y-2 text-white/70">
                  <li>&#10007; Missing ground prong (cut off or broken)</li>
                  <li>&#10007; Damaged outer jacket exposing conductors</li>
                  <li>&#10007; Electrical tape "repairs" (constitutes splice)</li>
                  <li>&#10007; Cords run through doorways or windows where they can be damaged</li>
                  <li>&#10007; Undersized cords for the load</li>
                  <li>&#10007; Cords in water or wet conditions without proper rating</li>
                </ul>
              </div>

              <h3 className="text-xl font-semibold mb-3 mt-6">Extension Cord Sizing</h3>
              <div className="bg-white/5 rounded-xl p-6 my-6">
                <p className="text-white/70 mb-3">Extension cords must be sized for the load and length. Minimum wire gauge recommendations:</p>
                <div className="grid md:grid-cols-3 gap-4 mt-4">
                  <div className="bg-white/5 rounded-lg p-3 text-center">
                    <p className="text-white font-semibold">Up to 50 ft</p>
                    <p className="text-white/60 text-sm">16 AWG for 10A</p>
                    <p className="text-white/60 text-sm">14 AWG for 15A</p>
                    <p className="text-white/60 text-sm">12 AWG for 20A</p>
                  </div>
                  <div className="bg-white/5 rounded-lg p-3 text-center">
                    <p className="text-white font-semibold">50-100 ft</p>
                    <p className="text-white/60 text-sm">14 AWG for 10A</p>
                    <p className="text-white/60 text-sm">12 AWG for 15A</p>
                    <p className="text-white/60 text-sm">10 AWG for 20A</p>
                  </div>
                  <div className="bg-white/5 rounded-lg p-3 text-center">
                    <p className="text-white font-semibold">100-150 ft</p>
                    <p className="text-white/60 text-sm">12 AWG for 10A</p>
                    <p className="text-white/60 text-sm">10 AWG for 15A</p>
                    <p className="text-white/60 text-sm">8 AWG for 20A</p>
                  </div>
                </div>
              </div>
            </section>

            <section id="services" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Temporary Services and Feeders</h2>
              <p className="text-white/80 mb-4">
                Temporary services must comply with NEC Article 230 (Services) with modifications allowed by Article 590.
              </p>

              <h3 className="text-xl font-semibold mb-3 mt-6">Temporary Service Requirements</h3>
              <ul className="list-disc list-inside text-white/70 space-y-2 mb-6">
                <li><strong>Service equipment:</strong> Must meet Article 230 requirements</li>
                <li><strong>Grounding:</strong> Full grounding electrode system required</li>
                <li><strong>Overcurrent protection:</strong> Standard requirements apply</li>
                <li><strong>Disconnect:</strong> Service disconnect required per 230.70</li>
                <li><strong>Metering:</strong> Typically required by utility</li>
              </ul>

              <div className="bg-cyan-900/30 rounded-xl p-6 my-6">
                <h3 className="font-semibold text-cyan-400 mb-3">Typical Temporary Service Sizes</h3>
                <div className="grid md:grid-cols-2 gap-4 mt-3">
                  <div>
                    <p className="text-white font-semibold">Residential Construction</p>
                    <ul className="text-white/70 text-sm mt-2 space-y-1">
                      <li>&#8226; 100A or 200A service</li>
                      <li>&#8226; Single-phase 120/240V</li>
                      <li>&#8226; Ground rod required</li>
                    </ul>
                  </div>
                  <div>
                    <p className="text-white font-semibold">Commercial Construction</p>
                    <ul className="text-white/70 text-sm mt-2 space-y-1">
                      <li>&#8226; 200A-400A typical</li>
                      <li>&#8226; Three-phase 208V or 480V</li>
                      <li>&#8226; May use permanent service</li>
                    </ul>
                  </div>
                </div>
              </div>

              <h3 className="text-xl font-semibold mb-3 mt-6">Feeder and Branch Circuit Protection</h3>
              <p className="text-white/80 mb-4">
                Temporary feeders and branch circuits must have overcurrent protection per NEC 240. Cable assemblies used for feeders must be:
              </p>
              <ul className="list-disc list-inside text-white/70 space-y-2 mb-6">
                <li>Listed for the purpose (Type G, Type W, or suitable cord)</li>
                <li>Protected from physical damage</li>
                <li>Supported at intervals per manufacturer specifications</li>
                <li>Not laid in water or subject to vehicular traffic without protection</li>
              </ul>
            </section>

            <section id="lighting" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Temporary Lighting</h2>
              <p className="text-white/80 mb-4">
                NEC 590.4(F) and 590.5 cover temporary lighting installations on construction sites.
              </p>

              <h3 className="text-xl font-semibold mb-3 mt-6">Lamp and Lampholder Requirements</h3>
              <ul className="list-disc list-inside text-white/70 space-y-2 mb-6">
                <li><strong>Guards required:</strong> All lamps must have guards unless recessed or more than 7 feet above working surface</li>
                <li><strong>Grounded lampholders:</strong> Required for metal shell lampholders</li>
                <li><strong>Strain relief:</strong> Connections must have proper strain relief</li>
                <li><strong>Wet location rating:</strong> Required if subject to weather or wet conditions</li>
              </ul>

              <div className="bg-yellow-900/30 rounded-xl p-6 my-6">
                <h3 className="font-semibold text-yellow-400 mb-3">Temporary String Lighting</h3>
                <p className="text-white/70 mb-3">
                  Temporary string lights are common on construction sites. Requirements include:
                </p>
                <ul className="space-y-2 text-white/70 text-sm">
                  <li><strong>Listed for purpose:</strong> Must be listed temporary lighting string</li>
                  <li><strong>Guard requirement:</strong> Each lamp must have a protective guard</li>
                  <li><strong>Support:</strong> Must be properly supported, not by cord</li>
                  <li><strong>GFCI protection:</strong> Required if 125V, 15A or 20A</li>
                </ul>
              </div>
            </section>

            <section id="receptacles" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Receptacle Installation</h2>
              <p className="text-white/80 mb-4">
                Temporary receptacles have specific installation requirements per NEC 590.4(D).
              </p>

              <h3 className="text-xl font-semibold mb-3 mt-6">Receptacle Requirements</h3>
              <ul className="list-disc list-inside text-white/70 space-y-2 mb-6">
                <li><strong>Grounding-type required:</strong> All receptacles must be grounding type</li>
                <li><strong>Box mounting:</strong> Receptacles must be installed in boxes</li>
                <li><strong>Weatherproof:</strong> In wet locations, must be weatherproof with cover closed</li>
                <li><strong>GFCI protection:</strong> Per 590.6 for 125V, 15-30A receptacles</li>
              </ul>

              <div className="bg-white/5 rounded-xl p-6 my-6">
                <h3 className="font-semibold mb-3">Temporary Panel/Box Installation</h3>
                <p className="text-white/70 mb-3">Temporary panels and boxes must be:</p>
                <ul className="space-y-2 text-white/70">
                  <li>&#10003; Mounted on stable support (post, structure, or stand)</li>
                  <li>&#10003; Protected from physical damage and weather</li>
                  <li>&#10003; Accessible for operation and inspection</li>
                  <li>&#10003; Properly grounded with equipment grounding conductor</li>
                  <li>&#10003; Labeled with voltage and current ratings</li>
                </ul>
              </div>
            </section>

            <section id="inspection" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Inspection Requirements</h2>
              <p className="text-white/80 mb-4">
                Temporary electrical installations typically require inspection just like permanent wiring. Requirements vary by jurisdiction.
              </p>

              <div className="bg-green-900/30 rounded-xl p-6 my-6">
                <h3 className="font-semibold text-green-400 mb-4">Temporary Power Inspection Checklist</h3>
                <div className="space-y-2">
                  <div className="flex items-center gap-3">
                    <span className="text-green-400">&#9744;</span>
                    <span className="text-white/70">Permit posted at temporary service</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-green-400">&#9744;</span>
                    <span className="text-white/70">Proper grounding electrode installed</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-green-400">&#9744;</span>
                    <span className="text-white/70">Service disconnect accessible and labeled</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-green-400">&#9744;</span>
                    <span className="text-white/70">GFCI protection on all 125V 15-30A receptacles</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-green-400">&#9744;</span>
                    <span className="text-white/70">All cords in good condition, no splices</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-green-400">&#9744;</span>
                    <span className="text-white/70">Temporary lighting protected with guards</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-green-400">&#9744;</span>
                    <span className="text-white/70">Weatherproof covers where required</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-green-400">&#9744;</span>
                    <span className="text-white/70">Cables protected from physical damage</span>
                  </div>
                </div>
              </div>
            </section>

            {/* CTA Section */}
            <section className="bg-gradient-to-r from-purple-900/30 to-cyan-900/30 rounded-2xl p-8 my-12">
              <h2 className="text-2xl font-display font-bold mb-4 text-center">
                NEC Reference On Every Job Site
              </h2>
              <p className="text-white/70 mb-6 text-center">
                Access NEC 590 temporary wiring requirements and all electrical codes instantly with Ampora. Get code answers while you work.
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
                <Link href="/blog/electrical-inspection-checklist" className="bg-white/5 hover:bg-white/10 rounded-xl p-6 transition-colors">
                  <span className="text-cyan-400 text-sm">Installation</span>
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
          <p className="text-sm text-white/40">&copy; 2025 Ampora Labs</p>
        </div>
      </footer>
    </main>
  );
}
