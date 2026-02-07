import { Metadata } from "next";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import { BreadcrumbJsonLd, BlogPostingJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "200 Amp Service Upgrade: Complete Planning Guide for Electricians",
  description: "Step-by-step guide to planning and installing a 200A residential electrical service upgrade. Covers NEC requirements, load calculations, permits, equipment selection, and installation best practices.",
  keywords: [
    "200 amp service upgrade",
    "electrical service upgrade",
    "200A panel upgrade",
    "residential service upgrade",
    "electrical panel upgrade",
    "service entrance upgrade",
    "main panel upgrade",
    "upgrade to 200 amp",
    "NEC service requirements",
    "load calculation residential",
    "service entrance conductors",
    "meter base upgrade",
    "electrical permit",
    "service disconnect"
  ],
  alternates: {
    canonical: "https://amporalabs.com/blog/electrical-service-upgrade-200-amp",
  },
  openGraph: {
    title: "200 Amp Service Upgrade: Complete Guide - Ampora",
    description: "Plan and execute 200A residential service upgrades with NEC requirements, load calculations, and best practices.",
    url: "https://amporalabs.com/blog/electrical-service-upgrade-200-amp",
    type: "article",
  },
};

function HeroIllustration() {
  return (
    <svg viewBox="0 0 400 160" className="w-full h-40 md:h-48" aria-label="200A service upgrade illustration">
      {/* Utility pole */}
      <g transform="translate(20, 10)">
        <rect x="8" y="0" width="8" height="130" fill="#78350f"/>
        <line x1="0" y1="20" x2="24" y2="20" stroke="#78350f" strokeWidth="4"/>
        {/* Wires */}
        <line x1="12" y1="20" x2="90" y2="35" stroke="#374151" strokeWidth="2"/>
        <line x1="12" y1="20" x2="90" y2="40" stroke="#374151" strokeWidth="2"/>
        <text x="12" y="150" textAnchor="middle" fill="#9ca3af" fontSize="7">UTILITY</text>
      </g>

      {/* Weather head */}
      <g transform="translate(95, 25)">
        <path d="M0,20 L10,0 L20,20" fill="none" stroke="#6b7280" strokeWidth="3"/>
        <line x1="5" y1="15" x2="5" y2="35" stroke="#6b7280" strokeWidth="2"/>
        <line x1="15" y1="15" x2="15" y2="35" stroke="#6b7280" strokeWidth="2"/>
        <text x="10" y="50" textAnchor="middle" fill="#9ca3af" fontSize="6">MAST</text>
      </g>

      {/* Meter */}
      <g transform="translate(130, 45)">
        <rect x="0" y="0" width="40" height="50" rx="3" fill="#1f2937" stroke="#6b7280" strokeWidth="2"/>
        <circle cx="20" cy="20" r="12" fill="#000" stroke="#22c55e" strokeWidth="1"/>
        <text x="20" y="24" textAnchor="middle" fill="#22c55e" fontSize="8">kWh</text>
        <text x="20" y="45" textAnchor="middle" fill="#9ca3af" fontSize="6">METER</text>
      </g>

      {/* Conductors from meter to panel */}
      <line x1="170" y1="70" x2="200" y2="70" stroke="#6b7280" strokeWidth="3"/>

      {/* Main disconnect / Panel */}
      <g transform="translate(200, 30)">
        <rect x="0" y="0" width="80" height="100" rx="4" fill="#1f2937" stroke="#22c55e" strokeWidth="2"/>
        <rect x="10" y="10" width="60" height="25" rx="2" fill="#374151" stroke="#4b5563"/>
        <text x="40" y="27" textAnchor="middle" fill="#22c55e" fontSize="8" fontWeight="bold">200A</text>
        <text x="40" y="15" textAnchor="middle" fill="#9ca3af" fontSize="6">MAIN</text>
        {/* Breakers */}
        <rect x="15" y="45" width="22" height="8" rx="1" fill="#22c55e"/>
        <rect x="43" y="45" width="22" height="8" rx="1" fill="#22c55e"/>
        <rect x="15" y="57" width="22" height="8" rx="1" fill="#22c55e"/>
        <rect x="43" y="57" width="22" height="8" rx="1" fill="#22c55e"/>
        <rect x="15" y="69" width="22" height="8" rx="1" fill="#22c55e"/>
        <rect x="43" y="69" width="22" height="8" rx="1" fill="#22c55e"/>
        <rect x="15" y="81" width="22" height="8" rx="1" fill="#22c55e"/>
        <rect x="43" y="81" width="22" height="8" rx="1" fill="#22c55e"/>
      </g>

      {/* Ground system */}
      <g transform="translate(210, 135)">
        <line x1="0" y1="0" x2="0" y2="15" stroke="#22c55e" strokeWidth="2"/>
        <line x1="-10" y1="15" x2="10" y2="15" stroke="#22c55e" strokeWidth="2"/>
        <line x1="-7" y1="19" x2="7" y2="19" stroke="#22c55e" strokeWidth="1.5"/>
        <line x1="-4" y1="23" x2="4" y2="23" stroke="#22c55e" strokeWidth="1"/>
        <text x="0" y="-5" textAnchor="middle" fill="#9ca3af" fontSize="6">GEC</text>
      </g>

      {/* Labels */}
      <g transform="translate(300, 30)">
        <rect x="0" y="0" width="90" height="70" rx="4" fill="#22c55e" fillOpacity="0.1" stroke="#22c55e" strokeWidth="1"/>
        <text x="45" y="18" textAnchor="middle" fill="#22c55e" fontSize="8" fontWeight="bold">200A SERVICE</text>
        <text x="45" y="32" textAnchor="middle" fill="#9ca3af" fontSize="7">4/0 AWG Cu</text>
        <text x="45" y="44" textAnchor="middle" fill="#9ca3af" fontSize="7">or 250 kcmil Al</text>
        <text x="45" y="58" textAnchor="middle" fill="#9ca3af" fontSize="7">240V Single Phase</text>
      </g>

      {/* Arrow indicating upgrade */}
      <g transform="translate(85, 130)">
        <rect x="0" y="0" width="85" height="20" rx="3" fill="#eab308" fillOpacity="0.2" stroke="#eab308"/>
        <text x="42" y="14" textAnchor="middle" fill="#eab308" fontSize="8" fontWeight="bold">UPGRADE PATH</text>
      </g>
    </svg>
  );
}

export default function ServiceUpgrade200AmpPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navigation />
      <div className="pt-20">
        <BreadcrumbJsonLd
          items={[
            { name: "Home", url: "https://amporalabs.com" },
            { name: "Blog", url: "https://amporalabs.com/blog" },
            { name: "200 Amp Service Upgrade", url: "https://amporalabs.com/blog/electrical-service-upgrade-200-amp" },
          ]}
        />
        <BlogPostingJsonLd
          headline="200 Amp Service Upgrade: Complete Planning Guide for Electricians"
          description="Step-by-step guide to planning and installing a 200A residential electrical service upgrade with NEC requirements."
          datePublished="2025-01-13"
          dateModified="2025-01-13"
          url="https://amporalabs.com/blog/electrical-service-upgrade-200-amp"
          wordCount={3000}
          keywords={["200 amp service upgrade", "electrical service upgrade", "residential service", "NEC service requirements"]}
        />

        <article className="max-w-4xl mx-auto px-6 py-12">
          {/* Breadcrumb */}
          <nav className="text-sm text-white/60 mb-8">
            <Link href="/" className="hover:text-white">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/blog" className="hover:text-white">Blog</Link>
            <span className="mx-2">/</span>
            <span className="text-white">200 Amp Service Upgrade</span>
          </nav>

          {/* Article Header */}
          <header className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <span className="px-3 py-1 bg-cyan-600/30 text-cyan-300 text-sm font-medium rounded-full">
                Installation
              </span>
              <span className="text-white/40 text-sm">13 min read</span>
              <span className="text-white/40 text-sm">January 13, 2025</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6 leading-tight">
              200 Amp Service Upgrade: Complete Planning and Installation Guide
            </h1>
            <p className="text-xl text-white/70">
              Everything electricians need to know about upgrading residential electrical service to 200 amps. From load calculations to final inspection, this guide covers NEC requirements, equipment selection, and installation best practices.
            </p>
          </header>

          <div className="mb-12 bg-gradient-to-br from-green-900/20 to-yellow-900/20 rounded-2xl p-6 border border-white/10">
            <HeroIllustration />
          </div>

          {/* When to Upgrade Box */}
          <div className="bg-purple-900/30 border border-purple-500/30 rounded-2xl p-6 mb-12">
            <h3 className="font-display font-bold text-lg mb-3">When is a 200A Upgrade Needed?</h3>
            <ul className="space-y-2 text-white/70 text-sm">
              <li>&#8226; Existing 100A or 150A service is at capacity</li>
              <li>&#8226; Adding EV charger (40-100A circuits)</li>
              <li>&#8226; Adding central air conditioning or heat pump</li>
              <li>&#8226; Adding electric vehicle charging</li>
              <li>&#8226; Major remodel or addition requiring additional circuits</li>
              <li>&#8226; Solar PV installation with battery backup</li>
              <li>&#8226; Hot tub, pool equipment, or workshop requirements</li>
            </ul>
          </div>

          {/* Table of Contents */}
          <div className="bg-white/5 rounded-2xl p-6 mb-12">
            <h2 className="font-display font-bold mb-4">In This Guide</h2>
            <ul className="space-y-2 text-white/70">
              <li><a href="#planning-phase" className="hover:text-purple-400">Planning Phase</a></li>
              <li><a href="#load-calculation" className="hover:text-purple-400">Load Calculation (NEC Article 220)</a></li>
              <li><a href="#conductor-sizing" className="hover:text-purple-400">Service Conductor Sizing</a></li>
              <li><a href="#equipment-selection" className="hover:text-purple-400">Equipment Selection</a></li>
              <li><a href="#grounding-requirements" className="hover:text-purple-400">Grounding Requirements</a></li>
              <li><a href="#permit-process" className="hover:text-purple-400">Permit and Inspection Process</a></li>
              <li><a href="#installation-steps" className="hover:text-purple-400">Installation Steps</a></li>
              <li><a href="#common-issues" className="hover:text-purple-400">Common Issues and Solutions</a></li>
            </ul>
          </div>

          {/* Article Content */}
          <div className="prose prose-invert prose-lg max-w-none">

            <section id="planning-phase" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Planning Phase</h2>
              <p className="text-white/80 mb-4">
                A successful 200A service upgrade requires thorough planning before any work begins. This phase involves coordination with the utility company, site assessment, and permit preparation.
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-3">Utility Coordination</h3>
              <p className="text-white/80 mb-4">
                Contact the utility company early in the process:
              </p>
              <ul className="list-disc list-inside text-white/70 space-y-2 mb-4">
                <li><strong>Service application</strong> - Submit request for 200A service (may require engineering review)</li>
                <li><strong>Transformer capacity</strong> - Verify existing transformer can handle the upgrade</li>
                <li><strong>Meter base requirements</strong> - Get utility specifications for approved meter bases</li>
                <li><strong>Disconnect requirements</strong> - Some utilities require specific disconnect locations</li>
                <li><strong>Scheduling</strong> - Coordinate the meter pull/replacement date</li>
              </ul>

              <h3 className="text-xl font-semibold mt-6 mb-3">Site Assessment</h3>
              <p className="text-white/80 mb-4">
                Evaluate the existing installation and plan the new service:
              </p>
              <ul className="list-disc list-inside text-white/70 space-y-2 mb-4">
                <li>Existing panel location and whether it will be reused</li>
                <li>Service entrance cable routing (overhead vs underground)</li>
                <li>Weatherhead/mast condition and size</li>
                <li>Grounding electrode system condition</li>
                <li>Available wall space for new panel</li>
                <li>Clearance requirements for outdoor equipment</li>
              </ul>

              <div className="bg-orange-900/30 rounded-xl p-6 my-6">
                <p className="text-white/90">
                  <strong>Important:</strong> Many jurisdictions require the new panel to be located on an exterior wall for firefighter access, or in a garage with direct access. Check local amendments to the NEC before finalizing panel location.
                </p>
              </div>
            </section>

            <section id="load-calculation" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Load Calculation (NEC Article 220)</h2>
              <p className="text-white/80 mb-4">
                Before upgrading, perform a load calculation per NEC Article 220 to verify 200A service is adequate (and not oversized, which wastes money) for the dwelling.
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-3">Standard Calculation Method (NEC 220.82)</h3>
              <p className="text-white/80 mb-4">
                The standard method for single-family dwellings:
              </p>

              <div className="bg-white/5 rounded-xl p-6 my-6">
                <h4 className="font-semibold mb-3">Step 1: General Loads at 100%</h4>
                <ul className="space-y-2 text-white/70 text-sm">
                  <li>&#8226; <strong>General lighting and receptacles:</strong> 3 VA per square foot of living area</li>
                  <li>&#8226; <strong>Small appliance circuits:</strong> 1500 VA per circuit (minimum 2 required)</li>
                  <li>&#8226; <strong>Laundry circuit:</strong> 1500 VA</li>
                </ul>
              </div>

              <div className="bg-white/5 rounded-xl p-6 my-6">
                <h4 className="font-semibold mb-3">Step 2: Apply Demand Factor</h4>
                <p className="text-white/70 text-sm mb-2">For the first 10,000 VA: apply 100%</p>
                <p className="text-white/70 text-sm">For remainder over 10,000 VA: apply 40%</p>
              </div>

              <div className="bg-white/5 rounded-xl p-6 my-6">
                <h4 className="font-semibold mb-3">Step 3: Add Individual Loads</h4>
                <ul className="space-y-2 text-white/70 text-sm">
                  <li>&#8226; <strong>AC/Heat pump:</strong> 100% of largest + 65% of next largest</li>
                  <li>&#8226; <strong>Electric range:</strong> Use NEC Table 220.55</li>
                  <li>&#8226; <strong>Electric dryer:</strong> Use 5000 VA or nameplate, whichever is greater</li>
                  <li>&#8226; <strong>Water heater:</strong> Nameplate rating</li>
                  <li>&#8226; <strong>EV charger:</strong> Full nameplate rating (continuous load)</li>
                </ul>
              </div>

              <h3 className="text-xl font-semibold mt-6 mb-3">Sample Load Calculation</h3>
              <div className="overflow-x-auto my-6">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-white/20">
                      <th className="text-left py-3 px-4 text-white/60">Load Description</th>
                      <th className="text-left py-3 px-4 text-white/60">VA</th>
                      <th className="text-left py-3 px-4 text-white/60">Demand Factor</th>
                      <th className="text-left py-3 px-4 text-white/60">Demand VA</th>
                    </tr>
                  </thead>
                  <tbody className="text-white/80">
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">General lighting (2500 sq ft x 3 VA)</td>
                      <td className="py-3 px-4">7,500</td>
                      <td className="py-3 px-4">-</td>
                      <td className="py-3 px-4">-</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">Small appliance (2 x 1500)</td>
                      <td className="py-3 px-4">3,000</td>
                      <td className="py-3 px-4">-</td>
                      <td className="py-3 px-4">-</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">Laundry</td>
                      <td className="py-3 px-4">1,500</td>
                      <td className="py-3 px-4">-</td>
                      <td className="py-3 px-4">-</td>
                    </tr>
                    <tr className="border-b border-white/10 bg-white/5">
                      <td className="py-3 px-4 font-semibold">Subtotal</td>
                      <td className="py-3 px-4 font-semibold">12,000</td>
                      <td className="py-3 px-4" colSpan={2}></td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">First 10,000 VA</td>
                      <td className="py-3 px-4">10,000</td>
                      <td className="py-3 px-4">100%</td>
                      <td className="py-3 px-4">10,000</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">Remainder</td>
                      <td className="py-3 px-4">2,000</td>
                      <td className="py-3 px-4">40%</td>
                      <td className="py-3 px-4">800</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">AC (4 ton, 5000W)</td>
                      <td className="py-3 px-4">5,000</td>
                      <td className="py-3 px-4">100%</td>
                      <td className="py-3 px-4">5,000</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">Electric range (12kW)</td>
                      <td className="py-3 px-4">12,000</td>
                      <td className="py-3 px-4">Table 220.55</td>
                      <td className="py-3 px-4">8,000</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">Electric dryer</td>
                      <td className="py-3 px-4">5,000</td>
                      <td className="py-3 px-4">100%</td>
                      <td className="py-3 px-4">5,000</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">Water heater (4500W)</td>
                      <td className="py-3 px-4">4,500</td>
                      <td className="py-3 px-4">100%</td>
                      <td className="py-3 px-4">4,500</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">EV Charger (48A x 240V)</td>
                      <td className="py-3 px-4">11,520</td>
                      <td className="py-3 px-4">100%</td>
                      <td className="py-3 px-4">11,520</td>
                    </tr>
                    <tr className="border-b border-white/10 bg-green-900/20">
                      <td className="py-3 px-4 font-semibold text-green-400">Total Demand</td>
                      <td className="py-3 px-4"></td>
                      <td className="py-3 px-4"></td>
                      <td className="py-3 px-4 font-semibold text-green-400">44,820 VA</td>
                    </tr>
                    <tr className="bg-green-900/20">
                      <td className="py-3 px-4 font-semibold text-green-400">Service Size Required</td>
                      <td className="py-3 px-4" colSpan={2}></td>
                      <td className="py-3 px-4 font-semibold text-green-400">44,820 / 240 = 187A</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="bg-green-900/30 rounded-xl p-6 my-6">
                <p className="text-white/90">
                  <strong>Result:</strong> With a calculated demand of 187A, a 200A service is appropriate for this dwelling. If the calculation exceeded 200A, a 320A or 400A service would be required, or load management systems considered.
                </p>
              </div>
            </section>

            <section id="conductor-sizing" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Service Conductor Sizing</h2>
              <p className="text-white/80 mb-4">
                Service entrance conductors must be sized per NEC 230.42 to have an ampacity not less than the maximum load to be served, and not less than the rating of the service disconnect.
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-3">Minimum Conductor Sizes for 200A Service</h3>
              <div className="overflow-x-auto my-6">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-white/20">
                      <th className="text-left py-3 px-4 text-white/60">Conductor Type</th>
                      <th className="text-left py-3 px-4 text-white/60">Copper</th>
                      <th className="text-left py-3 px-4 text-white/60">Aluminum</th>
                    </tr>
                  </thead>
                  <tbody className="text-white/80">
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">Service Entrance Conductors (Ungrounded)</td>
                      <td className="py-3 px-4 font-mono">2/0 AWG or 4/0 AWG</td>
                      <td className="py-3 px-4 font-mono">4/0 AWG or 250 kcmil</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">Service Neutral (Grounded Conductor)</td>
                      <td className="py-3 px-4 font-mono">2/0 AWG</td>
                      <td className="py-3 px-4 font-mono">4/0 AWG</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">Grounding Electrode Conductor</td>
                      <td className="py-3 px-4 font-mono">4 AWG</td>
                      <td className="py-3 px-4 font-mono">2 AWG</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="bg-purple-900/30 rounded-xl p-6 my-6">
                <h3 className="font-semibold text-purple-400 mb-3">83% Rule (NEC 310.12)</h3>
                <p className="text-white/70">
                  For dwelling unit services rated 100-400A, service entrance conductors may be sized per the 83% rule. 200A x 0.83 = 166A minimum ampacity. This allows using 4/0 copper (230A @ 75C) or 250 kcmil aluminum (205A @ 75C) with some margin.
                </p>
              </div>

              <h3 className="text-xl font-semibold mt-6 mb-3">Common Service Entrance Cable Types</h3>
              <ul className="list-disc list-inside text-white/70 space-y-2 mb-4">
                <li><strong>SE-R (Service Entrance Round)</strong> - Three individual conductors for conduit</li>
                <li><strong>SER (Service Entrance Round)</strong> - Cable assembly with three conductors plus bare neutral</li>
                <li><strong>SEU (Service Entrance Unarmored)</strong> - Two insulated + 1 concentric neutral for overhead</li>
                <li><strong>USE (Underground Service Entrance)</strong> - Rated for direct burial or in conduit</li>
              </ul>
            </section>

            <section id="equipment-selection" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Equipment Selection</h2>

              <h3 className="text-xl font-semibold mt-6 mb-3">Main Panel Requirements</h3>
              <ul className="list-disc list-inside text-white/70 space-y-2 mb-4">
                <li>Minimum 200A main breaker</li>
                <li>Adequate number of spaces for circuits (30-42 spaces typical)</li>
                <li>Listed for service entrance use</li>
                <li>NEMA 3R rating for outdoor installation</li>
                <li>Copper or aluminum bus rated for conductor material used</li>
              </ul>

              <h3 className="text-xl font-semibold mt-6 mb-3">Meter Base Requirements</h3>
              <ul className="list-disc list-inside text-white/70 space-y-2 mb-4">
                <li>200A continuous rating</li>
                <li>Approved by local utility (check approved meter base list)</li>
                <li>Proper jaw configuration for utility meter</li>
                <li>Ringless type (most jurisdictions)</li>
                <li>Proper hub size for service entrance conductors</li>
              </ul>

              <div className="grid md:grid-cols-2 gap-4 my-6">
                <div className="bg-white/5 rounded-xl p-6">
                  <h4 className="font-semibold text-cyan-400 mb-2">Overhead Service</h4>
                  <ul className="space-y-1 text-white/60 text-sm">
                    <li>&#8226; Weatherhead/service head</li>
                    <li>&#8226; Service mast (2-inch minimum for 200A)</li>
                    <li>&#8226; Service mast flashing</li>
                    <li>&#8226; Mast support bracket</li>
                    <li>&#8226; Service entrance cable or conduit</li>
                  </ul>
                </div>
                <div className="bg-white/5 rounded-xl p-6">
                  <h4 className="font-semibold text-cyan-400 mb-2">Underground Service</h4>
                  <ul className="space-y-1 text-white/60 text-sm">
                    <li>&#8226; Meter pedestal or surface-mount base</li>
                    <li>&#8226; PVC conduit (Schedule 40 or 80)</li>
                    <li>&#8226; LB or pull box at building entrance</li>
                    <li>&#8226; Ground sleeve if required</li>
                    <li>&#8226; Trenching and backfill</li>
                  </ul>
                </div>
              </div>
            </section>

            <section id="grounding-requirements" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Grounding Requirements</h2>
              <p className="text-white/80 mb-4">
                Proper grounding is critical for safety and code compliance. NEC Article 250 governs grounding and bonding requirements.
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-3">Grounding Electrode System (NEC 250.50)</h3>
              <p className="text-white/80 mb-4">
                All available grounding electrodes must be bonded together:
              </p>
              <ul className="list-disc list-inside text-white/70 space-y-2 mb-4">
                <li><strong>Metal water pipe</strong> - First 5 feet entering building, must be supplemented</li>
                <li><strong>Ground rods</strong> - 8 feet minimum, must be supplemented if resistance exceeds 25 ohms</li>
                <li><strong>Concrete-encased electrode (Ufer)</strong> - 20 feet of 4 AWG bare copper in footing</li>
                <li><strong>Metal building frame</strong> - If effectively grounded</li>
              </ul>

              <div className="bg-white/5 rounded-xl p-6 my-6">
                <h3 className="font-semibold mb-3">GEC Sizing for 200A Service</h3>
                <p className="text-white/70 text-sm mb-2">Per NEC Table 250.66:</p>
                <ul className="space-y-1 text-white/60 text-sm">
                  <li>&#8226; For 4/0 copper service conductors: <strong>4 AWG copper</strong> or <strong>2 AWG aluminum</strong> GEC</li>
                  <li>&#8226; For 250 kcmil aluminum service conductors: <strong>4 AWG copper</strong> or <strong>2 AWG aluminum</strong> GEC</li>
                  <li>&#8226; To ground rods only: 6 AWG copper maximum required regardless of service size</li>
                </ul>
              </div>

              <h3 className="text-xl font-semibold mt-6 mb-3">Bonding Requirements</h3>
              <ul className="list-disc list-inside text-white/70 space-y-2 mb-4">
                <li><strong>Main bonding jumper</strong> - Bonds neutral to equipment ground at service</li>
                <li><strong>Water pipe bonding</strong> - Metal water piping within 5 feet of entrance</li>
                <li><strong>Gas pipe bonding</strong> - CSST and metal gas piping per manufacturer</li>
                <li><strong>Intersystem bonding termination</strong> - For telecom, CATV, and similar systems</li>
              </ul>
            </section>

            <section id="permit-process" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Permit and Inspection Process</h2>

              <h3 className="text-xl font-semibold mt-6 mb-3">Permit Application Requirements</h3>
              <p className="text-white/80 mb-4">
                Most jurisdictions require the following for a service upgrade permit:
              </p>
              <ul className="list-disc list-inside text-white/70 space-y-2 mb-4">
                <li>Completed electrical permit application</li>
                <li>Load calculation worksheet</li>
                <li>Site plan showing service location</li>
                <li>Panel schedule (sometimes required)</li>
                <li>Contractor license information</li>
                <li>Utility approval letter (some jurisdictions)</li>
              </ul>

              <h3 className="text-xl font-semibold mt-6 mb-3">Typical Inspection Sequence</h3>
              <div className="space-y-4 my-6">
                <div className="bg-white/5 rounded-xl p-6">
                  <h4 className="font-semibold text-orange-400 mb-2">1. Rough Inspection</h4>
                  <p className="text-white/70 text-sm">
                    After service entrance equipment is mounted and grounding electrodes are installed but before the meter is set. Inspector verifies equipment, conductor routing, and grounding.
                  </p>
                </div>

                <div className="bg-white/5 rounded-xl p-6">
                  <h4 className="font-semibold text-orange-400 mb-2">2. Final Inspection</h4>
                  <p className="text-white/70 text-sm">
                    After all work is complete. Inspector verifies connections, labeling, proper bonding, and overall code compliance. Upon passing, inspector releases the job to the utility.
                  </p>
                </div>

                <div className="bg-white/5 rounded-xl p-6">
                  <h4 className="font-semibold text-orange-400 mb-2">3. Utility Connection</h4>
                  <p className="text-white/70 text-sm">
                    Utility sets the meter after receiving approval from the inspector. Some utilities perform their own inspection of service entrance equipment.
                  </p>
                </div>
              </div>
            </section>

            <section id="installation-steps" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Installation Steps</h2>

              <div className="space-y-4 my-6">
                <div className="bg-white/5 rounded-xl p-6">
                  <h3 className="font-semibold mb-2">1. Coordinate Utility Disconnect</h3>
                  <p className="text-white/70 text-sm">
                    Schedule meter pull with utility. Some utilities allow electrician-pulled meters with proper authorization. Have temporary power plan for customer if needed.
                  </p>
                </div>

                <div className="bg-white/5 rounded-xl p-6">
                  <h3 className="font-semibold mb-2">2. Remove Existing Service Equipment</h3>
                  <p className="text-white/70 text-sm">
                    After power is disconnected, remove existing meter base, weatherhead/mast (if replacing), and panel (if replacing location). Document existing circuit connections.
                  </p>
                </div>

                <div className="bg-white/5 rounded-xl p-6">
                  <h3 className="font-semibold mb-2">3. Install New Service Equipment</h3>
                  <p className="text-white/70 text-sm">
                    Mount new meter base at proper height (typically 5-6 feet to center), install new mast/weatherhead or underground conduit, mount new panel. Maintain required working space.
                  </p>
                </div>

                <div className="bg-white/5 rounded-xl p-6">
                  <h3 className="font-semibold mb-2">4. Pull Service Entrance Conductors</h3>
                  <p className="text-white/70 text-sm">
                    Install service entrance conductors from weatherhead through meter base to panel. Leave adequate length at weatherhead for utility connection (typically 36 inches).
                  </p>
                </div>

                <div className="bg-white/5 rounded-xl p-6">
                  <h3 className="font-semibold mb-2">5. Complete Grounding System</h3>
                  <p className="text-white/70 text-sm">
                    Install or connect to grounding electrodes. Run GEC to panel. Install main bonding jumper. Bond water and gas piping as required.
                  </p>
                </div>

                <div className="bg-white/5 rounded-xl p-6">
                  <h3 className="font-semibold mb-2">6. Transfer Branch Circuits</h3>
                  <p className="text-white/70 text-sm">
                    Move existing branch circuits to new panel. This is an opportunity to add AFCI/GFCI protection where now required. Balance loads across phases.
                  </p>
                </div>

                <div className="bg-white/5 rounded-xl p-6">
                  <h3 className="font-semibold mb-2">7. Label and Document</h3>
                  <p className="text-white/70 text-sm">
                    Apply required labels (disconnecting means, voltage warning, available fault current if known). Complete panel schedule. Prepare for inspection.
                  </p>
                </div>
              </div>
            </section>

            <section id="common-issues" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Common Issues and Solutions</h2>

              <div className="space-y-4 my-6">
                <div className="bg-red-900/20 border border-red-500/30 rounded-xl p-6">
                  <h3 className="font-semibold text-red-400 mb-2">Inadequate Working Space</h3>
                  <p className="text-white/70 text-sm">
                    NEC 110.26 requires 36 inches depth, 30 inches width, and 78 inches height for 200A equipment. Plan panel location carefully in tight spaces. Consider outdoor installation if indoor space is limited.
                  </p>
                </div>

                <div className="bg-red-900/20 border border-red-500/30 rounded-xl p-6">
                  <h3 className="font-semibold text-red-400 mb-2">Service Mast Support</h3>
                  <p className="text-white/70 text-sm">
                    A 200A service mast must support the weight of utility conductors. Use proper roof jacks and guy wires as required. Verify mast is adequately braced or specify specific conditions for utility.
                  </p>
                </div>

                <div className="bg-red-900/20 border border-red-500/30 rounded-xl p-6">
                  <h3 className="font-semibold text-red-400 mb-2">Grounding Electrode Issues</h3>
                  <p className="text-white/70 text-sm">
                    Older homes may have inadequate grounding. If metal water pipe is not available, install ground rods. Consider Ufer ground during foundation work on additions.
                  </p>
                </div>

                <div className="bg-red-900/20 border border-red-500/30 rounded-xl p-6">
                  <h3 className="font-semibold text-red-400 mb-2">Utility Transformer Capacity</h3>
                  <p className="text-white/70 text-sm">
                    Some older neighborhoods have undersized transformers. The utility may require transformer upgrade (at their cost) before approving 200A service, which can add weeks to the project.
                  </p>
                </div>
              </div>
            </section>

            {/* CTA Section */}
            <section className="bg-gradient-to-r from-purple-900/30 to-cyan-900/30 rounded-2xl p-8 my-12">
              <h2 className="text-2xl font-display font-bold mb-4 text-center">
                Calculate Load Requirements Instantly
              </h2>
              <p className="text-white/70 mb-6 text-center">
                Use Ampora's load calculation tools to verify service size requirements. Access NEC Article 220 demand factors and get accurate results for any residential project.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link
                  href="/calculators"
                  className="px-6 py-3 bg-purple-600 text-white font-semibold rounded-full hover:bg-purple-500 transition-colors text-center"
                >
                  Explore Calculators
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
                <Link href="/blog/electrical-grounding-vs-bonding" className="bg-white/5 hover:bg-white/10 rounded-xl p-6 transition-colors">
                  <span className="text-purple-400 text-sm">NEC Code</span>
                  <h3 className="font-semibold mt-2">Grounding vs Bonding: Understanding the Difference</h3>
                </Link>
                <Link href="/blog/residential-load-calculations" className="bg-white/5 hover:bg-white/10 rounded-xl p-6 transition-colors">
                  <span className="text-cyan-400 text-sm">Calculations</span>
                  <h3 className="font-semibold mt-2">Residential Load Calculations Guide</h3>
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
