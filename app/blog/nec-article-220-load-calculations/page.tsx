import { Metadata } from "next";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import { BreadcrumbJsonLd, BlogPostingJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "NEC Article 220 Explained: Branch Circuit & Feeder Load Calculations",
  description: "Complete guide to NEC Article 220 load calculations for electricians. Learn branch circuit loads, feeder calculations, demand factors, optional methods for dwelling units, and worked examples.",
  keywords: [
    "NEC Article 220",
    "load calculations",
    "branch circuit loads",
    "feeder load calculations",
    "demand factors NEC",
    "optional calculation method",
    "dwelling unit load calculation",
    "service sizing NEC",
    "NEC 220 demand factors",
    "electrical load calculation guide"
  ],
  alternates: {
    canonical: "https://amporalabs.com/blog/nec-article-220-load-calculations",
  },
  openGraph: {
    title: "NEC Article 220 Explained: Load Calculations Guide - Ampora",
    description: "Complete guide to NEC Article 220 branch circuit and feeder load calculations for electricians.",
    url: "https://amporalabs.com/blog/nec-article-220-load-calculations",
    type: "article",
  },
};

function HeroIllustration() {
  return (
    <svg viewBox="0 0 400 180" className="w-full h-44 md:h-52" aria-label="Electrical panel with load calculation symbols and formulas">
      {/* Panel body */}
      <g transform="translate(30, 10)">
        <rect x="0" y="0" width="70" height="150" rx="4" fill="#1f2937" stroke="#8b5cf6" strokeWidth="2"/>
        <rect x="8" y="8" width="54" height="134" fill="#111827"/>
        {/* Main breaker */}
        <rect x="14" y="14" width="42" height="16" rx="2" fill="#8b5cf6" opacity="0.8"/>
        <text x="35" y="25" textAnchor="middle" fill="#fff" fontSize="7" fontWeight="bold">MAIN</text>
        {/* Breaker rows */}
        {[0, 1, 2, 3, 4, 5].map((i) => (
          <g key={i}>
            <rect x="14" y={38 + i * 16} width="18" height="12" rx="2" fill={i < 3 ? "#a78bfa" : "#374151"}/>
            <rect x="38" y={38 + i * 16} width="18" height="12" rx="2" fill={i < 4 ? "#a78bfa" : "#374151"}/>
          </g>
        ))}
        <text x="35" y="160" textAnchor="middle" fill="#9ca3af" fontSize="7">PANEL</text>
      </g>

      {/* Load calculation flow arrows */}
      <line x1="108" y1="50" x2="140" y2="50" stroke="#8b5cf6" strokeWidth="2" markerEnd="url(#arrowhead)"/>
      <line x1="108" y1="90" x2="140" y2="90" stroke="#8b5cf6" strokeWidth="2"/>
      <line x1="108" y1="130" x2="140" y2="130" stroke="#8b5cf6" strokeWidth="2"/>

      {/* Calculation boxes */}
      <g transform="translate(142, 30)">
        <rect x="0" y="0" width="105" height="40" rx="6" fill="#1f2937" stroke="#a78bfa" strokeWidth="1.5"/>
        <text x="52" y="17" textAnchor="middle" fill="#c4b5fd" fontSize="8" fontWeight="bold">Branch Circuits</text>
        <text x="52" y="30" textAnchor="middle" fill="#9ca3af" fontSize="7">220.40 - 220.44</text>
      </g>
      <g transform="translate(142, 78)">
        <rect x="0" y="0" width="105" height="40" rx="6" fill="#1f2937" stroke="#a78bfa" strokeWidth="1.5"/>
        <text x="52" y="17" textAnchor="middle" fill="#c4b5fd" fontSize="8" fontWeight="bold">Feeder Loads</text>
        <text x="52" y="30" textAnchor="middle" fill="#9ca3af" fontSize="7">220.50 - 220.60</text>
      </g>
      <g transform="translate(142, 118)">
        <rect x="0" y="0" width="105" height="40" rx="6" fill="#1f2937" stroke="#06b6d4" strokeWidth="1.5"/>
        <text x="52" y="17" textAnchor="middle" fill="#67e8f9" fontSize="8" fontWeight="bold">Optional Method</text>
        <text x="52" y="30" textAnchor="middle" fill="#9ca3af" fontSize="7">220.82 - 220.87</text>
      </g>

      {/* Result arrow and total */}
      <line x1="250" y1="90" x2="275" y2="90" stroke="#22c55e" strokeWidth="2"/>
      <g transform="translate(278, 55)">
        <rect x="0" y="0" width="110" height="70" rx="8" fill="#22c55e" fillOpacity="0.15" stroke="#22c55e" strokeWidth="1.5"/>
        <text x="55" y="20" textAnchor="middle" fill="#22c55e" fontSize="9" fontWeight="bold">TOTAL LOAD</text>
        <text x="55" y="38" textAnchor="middle" fill="#fff" fontSize="14" fontWeight="bold">VA</text>
        <line x1="15" y1="46" x2="95" y2="46" stroke="#22c55e" strokeWidth="0.5" opacity="0.5"/>
        <text x="55" y="60" textAnchor="middle" fill="#86efac" fontSize="8">Service Size (A)</text>
      </g>

      {/* Sigma / sum symbol */}
      <text x="265" y="95" textAnchor="middle" fill="#a78bfa" fontSize="18" fontFamily="serif">&Sigma;</text>

      {/* Formula at bottom */}
      <text x="200" y="175" textAnchor="middle" fill="#6b7280" fontSize="8">NEC Article 220 - Branch Circuit, Feeder &amp; Service Load Calculations</text>
    </svg>
  );
}

export default function BlogPost() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navigation />
      <div className="pt-20">
        <BreadcrumbJsonLd
          items={[
            { name: "Home", url: "https://amporalabs.com" },
            { name: "Blog", url: "https://amporalabs.com/blog" },
            { name: "NEC Article 220 Load Calculations", url: "https://amporalabs.com/blog/nec-article-220-load-calculations" },
          ]}
        />
        <BlogPostingJsonLd
          headline="NEC Article 220 Explained: Branch Circuit & Feeder Load Calculations"
          description="Complete guide to NEC Article 220 load calculations including branch circuits, feeders, demand factors, and optional dwelling unit methods."
          datePublished="2025-03-15"
          url="https://amporalabs.com/blog/nec-article-220-load-calculations"
        />

        <article className="max-w-4xl mx-auto px-6 py-12">
          {/* Breadcrumb */}
          <nav className="text-sm text-white/60 mb-8">
            <Link href="/" className="hover:text-white">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/blog" className="hover:text-white">Blog</Link>
            <span className="mx-2">/</span>
            <span className="text-white">NEC Article 220</span>
          </nav>

          {/* Article Header */}
          <header className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <span className="px-3 py-1 bg-purple-600/30 text-purple-300 text-sm font-medium rounded-full">
                NEC Code
              </span>
              <span className="text-white/40 text-sm">March 15, 2025</span>
              <span className="text-white/40 text-sm">14 min read</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6 leading-tight">
              NEC Article 220 Explained: Branch Circuit &amp; Feeder Load Calculations
            </h1>
            <p className="text-xl text-white/70">
              Accurate load calculations are the foundation of every safe electrical installation. NEC Article 220 provides the rules for calculating branch circuit, feeder, and service loads. This guide breaks down every section with practical examples and formulas you can use on the job.
            </p>
          </header>

          <div className="mb-12 bg-gradient-to-br from-purple-900/20 to-cyan-900/20 rounded-2xl p-6 border border-white/10">
            <HeroIllustration />
          </div>

          {/* Table of Contents */}
          <div className="bg-white/5 rounded-2xl p-6 mb-12">
            <h2 className="font-display font-bold mb-4">In This Guide</h2>
            <ul className="space-y-2 text-white/70">
              <li><a href="#overview" className="hover:text-purple-400">→ What is NEC Article 220?</a></li>
              <li><a href="#general-requirements" className="hover:text-purple-400">→ General Requirements (220.10 - 220.18)</a></li>
              <li><a href="#branch-circuit-loads" className="hover:text-purple-400">→ Branch Circuit Load Calculations (220.40 - 220.44)</a></li>
              <li><a href="#feeder-service-loads" className="hover:text-purple-400">→ Feeder &amp; Service Load Calculations (220.50 - 220.60)</a></li>
              <li><a href="#optional-calculations" className="hover:text-purple-400">→ Optional Calculations for Dwelling Units (220.82 - 220.87)</a></li>
              <li><a href="#example-standard" className="hover:text-purple-400">→ Worked Example: Standard Method</a></li>
              <li><a href="#example-optional" className="hover:text-purple-400">→ Worked Example: Optional Method</a></li>
              <li><a href="#demand-factor-tables" className="hover:text-purple-400">→ Key Demand Factor Tables</a></li>
              <li><a href="#common-mistakes" className="hover:text-purple-400">→ Common Mistakes to Avoid</a></li>
            </ul>
          </div>

          {/* Article Content */}
          <div className="prose prose-invert prose-lg max-w-none">

            <section id="overview" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">What is NEC Article 220?</h2>
              <p className="text-white/80 mb-4">
                NEC Article 220 establishes the requirements for <strong>calculating branch circuit, feeder, and service loads</strong>. It is one of the most critical articles in the National Electrical Code because every electrical installation - from a single-family home to a commercial building - depends on accurate load calculations to determine proper conductor sizing, overcurrent protection, and service entrance equipment.
              </p>
              <p className="text-white/80 mb-4">
                Article 220 is organized into five parts:
              </p>
              <ul className="list-disc list-inside text-white/70 space-y-2 mb-4">
                <li><strong>Part I - General (220.1 - 220.5):</strong> Scope, definitions, and computation of branch circuit loads</li>
                <li><strong>Part II - Branch Circuit Load Calculations (220.40 - 220.44):</strong> How to compute loads for individual branch circuits</li>
                <li><strong>Part III - Feeder and Service Load Calculations (220.50 - 220.60):</strong> Demand factors for lighting, appliances, ranges, dryers, and HVAC</li>
                <li><strong>Part IV - Optional Feeder and Service Load Calculations (220.82 - 220.87):</strong> Simplified methods for dwelling units and existing installations</li>
                <li><strong>Part V - Farm Load Calculations (220.100 - 220.103):</strong> Special provisions for farm buildings</li>
              </ul>
              <div className="bg-purple-900/30 rounded-xl p-6 my-6">
                <p className="text-white/90 font-medium">
                  <strong>Pro Tip:</strong> Use Ampora&apos;s AI assistant to quickly calculate loads on-site. Just describe your installation - &quot;2,500 sq ft home with electric range and heat pump&quot; - and get an instant NEC-compliant load calculation.
                </p>
              </div>
            </section>

            <section id="general-requirements" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">General Requirements (220.10 - 220.18)</h2>
              <p className="text-white/80 mb-4">
                Part I of Article 220 lays the groundwork for all load calculations. These sections define the fundamental rules that apply regardless of which calculation method you use.
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-3">220.5 - Calculations</h3>
              <p className="text-white/80 mb-4">
                All load calculations must be based on <strong>volt-amperes (VA)</strong> or <strong>amperes</strong>. The nominal system voltage is used for calculations. For single-phase systems, that typically means 120V for line-to-neutral and 240V for line-to-line loads. For three-phase systems, common voltages include 208V and 480V.
              </p>
              <div className="bg-white/5 rounded-xl p-6 my-6">
                <p className="text-white font-mono text-lg mb-2">I = VA / V (single-phase)</p>
                <p className="text-white font-mono text-lg mb-2">I = VA / (V x 1.732) (three-phase)</p>
                <p className="text-white/70 text-sm mt-2">Fractions of an ampere 0.5 or greater are rounded up to the next whole ampere.</p>
              </div>

              <h3 className="text-xl font-semibold mt-6 mb-3">220.10 - Branch Circuit Load Basis</h3>
              <p className="text-white/80 mb-4">
                Branch circuit loads are calculated based on one of the following, as applicable:
              </p>
              <ul className="list-disc list-inside text-white/70 space-y-2 mb-4">
                <li><strong>Nameplate ratings</strong> of utilization equipment</li>
                <li><strong>Ampere ratings</strong> of equipment (motors, etc.)</li>
                <li><strong>Watt or VA ratings</strong> of the loads served</li>
                <li><strong>Minimum VA/sq ft values</strong> from NEC Table 220.12 (for lighting)</li>
              </ul>

              <h3 className="text-xl font-semibold mt-6 mb-3">220.12 - Lighting Load for Listed Occupancies</h3>
              <p className="text-white/80 mb-4">
                Table 220.12 provides unit loads (VA per square foot) for different types of occupancies. These values represent the <strong>minimum</strong> lighting loads to be used in calculations. The most common values are:
              </p>
              <div className="overflow-x-auto my-6">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-white/20">
                      <th className="text-left py-3 px-4 text-white/60">Occupancy Type</th>
                      <th className="text-left py-3 px-4 text-white/60">VA per sq ft</th>
                    </tr>
                  </thead>
                  <tbody className="text-white/80">
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">Dwelling units</td>
                      <td className="py-3 px-4">3</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">Hospitals</td>
                      <td className="py-3 px-4">2</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">Hotels/motels (guest rooms)</td>
                      <td className="py-3 px-4">2</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">Office buildings</td>
                      <td className="py-3 px-4">3.5</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">Retail stores</td>
                      <td className="py-3 px-4">1.5</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">Schools</td>
                      <td className="py-3 px-4">3</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">Warehouses (storage)</td>
                      <td className="py-3 px-4">0.25</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4">Assembly halls / auditoriums</td>
                      <td className="py-3 px-4">1</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-white/70 text-sm">
                Note: The square footage is calculated from the outside dimensions of the building or area. For dwelling units, do not include open porches, garages, or unused/unfinished spaces not adaptable for future use.
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-3">220.14 - Other Loads for General-Use Receptacles</h3>
              <p className="text-white/80 mb-4">
                General-use receptacle outlets in non-dwelling occupancies are calculated at a minimum of <strong>180 VA per receptacle</strong>. Each single, duplex, or triplex receptacle on a single yoke (strap) counts as 180 VA. A four-plex receptacle (four receptacles on a single yoke) is calculated at 360 VA.
              </p>
              <div className="bg-white/5 rounded-xl p-6 my-6">
                <p className="text-white font-mono text-lg mb-2">Single / duplex / triplex on one strap = 180 VA</p>
                <p className="text-white font-mono text-lg">4+ receptacles on one strap = 360 VA</p>
              </div>

              <h3 className="text-xl font-semibold mt-6 mb-3">220.18 - Maximum Load on a Branch Circuit</h3>
              <p className="text-white/80 mb-4">
                Where a branch circuit supplies continuous loads (operating for 3 hours or more), the total load shall not exceed <strong>80%</strong> of the branch circuit rating unless the overcurrent device and its assembly are listed for operation at 100% of its rating.
              </p>
              <div className="bg-purple-900/30 rounded-xl p-6 my-6">
                <p className="text-white/90 font-medium">
                  <strong>Example:</strong> A 20A branch circuit supplying continuous lighting loads can carry a maximum of 20A x 0.80 = <strong>16A continuous</strong>. If the load is 15A continuous, you must size the circuit breaker at 15A / 0.80 = 18.75A, rounded up to the next standard size of 20A.
                </p>
              </div>
            </section>

            <section id="branch-circuit-loads" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Branch Circuit Load Calculations (220.40 - 220.44)</h2>
              <p className="text-white/80 mb-4">
                Part II specifies how to calculate the load on individual branch circuits. This is the starting point for all calculations because feeder loads are built by aggregating branch circuit loads with applicable demand factors.
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-3">220.40 - General</h3>
              <p className="text-white/80 mb-4">
                The calculated load of a branch circuit is the <strong>sum of all loads</strong> on that circuit. This seems simple, but there are important nuances:
              </p>
              <ul className="list-disc list-inside text-white/70 space-y-2 mb-4">
                <li>For motor loads, use 125% of the motor full-load current (per NEC 430)</li>
                <li>For continuous loads, use 125% of the continuous load plus 100% of the non-continuous load</li>
                <li>Loads calculated from Table 220.12 VA/sq ft values include general-use receptacles in dwelling units</li>
              </ul>

              <h3 className="text-xl font-semibold mt-6 mb-3">220.42 - General Lighting</h3>
              <p className="text-white/80 mb-4">
                For branch circuits supplying general illumination, the load is computed at the unit load per square foot from Table 220.12. For dwelling units:
              </p>
              <div className="bg-white/5 rounded-xl p-6 my-6">
                <p className="text-white font-mono text-lg mb-2">General Lighting Load = Floor Area (sq ft) x 3 VA/sq ft</p>
                <p className="text-white/70 text-sm mt-2">This 3 VA/sq ft value is a minimum and includes general-use receptacles in dwellings.</p>
              </div>

              <h3 className="text-xl font-semibold mt-6 mb-3">220.43 - Show Window and Track Lighting</h3>
              <p className="text-white/80 mb-4">
                Show window lighting is calculated at a minimum of <strong>200 VA per linear foot</strong> of show window. Track lighting is calculated at <strong>150 VA per 2 feet</strong> of track length (or fraction thereof). These values are used in commercial applications and are important for retail electrical design.
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-3">220.44 - Receptacle Loads - Other Than Dwelling Units</h3>
              <p className="text-white/80 mb-4">
                In non-dwelling occupancies, the receptacle load is calculated at 180 VA per receptacle outlet per 220.14. However, when computing the branch circuit load for a multioutlet assembly in commercial or industrial settings:
              </p>
              <ul className="list-disc list-inside text-white/70 space-y-2 mb-4">
                <li><strong>Where unlikely to be used simultaneously:</strong> each 5-foot (1.5 m) section or fraction = 180 VA</li>
                <li><strong>Where likely to be used simultaneously</strong> (e.g., workbenches): each 1-foot (300 mm) section or fraction = 180 VA</li>
              </ul>
            </section>

            {/* Mid-Article CTA */}
            <div className="not-prose my-12 bg-gradient-to-r from-purple-900/40 to-cyan-900/40 rounded-xl p-6 border border-purple-500/20">
              <div className="flex flex-col sm:flex-row items-center gap-4">
                <div className="flex-1 text-center sm:text-left">
                  <p className="font-display font-bold text-lg text-white mb-1">Ampora — The Electrician&apos;s AI Companion</p>
                  <p className="text-white/60 text-sm">Instant NEC code answers, electrical calculators, and AI troubleshooting. Free on iOS.</p>
                </div>
                <a href="https://apps.apple.com/us/app/ampora/id6753693522" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 bg-white text-black font-semibold rounded-full hover:bg-white/90 transition-colors text-sm whitespace-nowrap">
                  <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/></svg>
                  Download Free
                </a>
              </div>
            </div>

            <section id="feeder-service-loads" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Feeder &amp; Service Load Calculations (220.50 - 220.60)</h2>
              <p className="text-white/80 mb-4">
                Part III is where <strong>demand factors</strong> come into play. While branch circuits must be sized for the full connected load, feeders and services benefit from the statistical reality that not all loads operate at the same time. The NEC provides demand factor tables that allow you to reduce the calculated load for feeders and services.
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-3">220.50 - General (Demand Factor Application)</h3>
              <p className="text-white/80 mb-4">
                Feeder and service loads are computed by applying demand factors to the various types of connected loads. The key principle: <strong>demand factors can only be applied when calculating feeder and service loads, not individual branch circuit loads.</strong>
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-3">220.51 - Fixed Electrical Space Heating</h3>
              <p className="text-white/80 mb-4">
                Fixed electric space heating loads on feeders and services can be computed at <strong>100% of the total connected load</strong>. However, there is no additional demand factor reduction available. The only exception is when using the optional calculation methods in Part IV.
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-3">220.52 - Small Appliance and Laundry Loads</h3>
              <p className="text-white/80 mb-4">
                For dwelling units, specific minimum loads must be included:
              </p>
              <div className="grid md:grid-cols-2 gap-4 my-6">
                <div className="bg-white/5 rounded-xl p-6">
                  <h4 className="font-semibold text-purple-400 mb-2">Small Appliance Circuits</h4>
                  <p className="text-white/70 text-sm mb-2">Minimum of <strong>two 20A circuits</strong> required for kitchen, dining, breakfast, pantry, and similar areas.</p>
                  <p className="text-white font-mono text-sm">2 circuits x 1,500 VA = 3,000 VA</p>
                </div>
                <div className="bg-white/5 rounded-xl p-6">
                  <h4 className="font-semibold text-purple-400 mb-2">Laundry Circuit</h4>
                  <p className="text-white/70 text-sm mb-2">Minimum of <strong>one 20A circuit</strong> required for the laundry area.</p>
                  <p className="text-white font-mono text-sm">1 circuit x 1,500 VA = 1,500 VA</p>
                </div>
              </div>
              <p className="text-white/70 text-sm">
                These loads are added to the general lighting load before applying Table 220.42 demand factors.
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-3">220.53 - Appliance Load (Four or More Fastened-in-Place)</h3>
              <p className="text-white/80 mb-4">
                When a dwelling unit has <strong>four or more fastened-in-place appliances</strong> (other than ranges, dryers, space heating, or air conditioning), the feeder demand factor for these appliances is <strong>75%</strong> of the total nameplate ratings. This applies to equipment such as:
              </p>
              <ul className="list-disc list-inside text-white/70 space-y-2 mb-4">
                <li>Dishwashers</li>
                <li>Garbage disposals</li>
                <li>Water heaters</li>
                <li>Trash compactors</li>
                <li>Permanently installed bathroom heaters</li>
                <li>Attic fans</li>
              </ul>
              <div className="bg-white/5 rounded-xl p-6 my-6">
                <p className="text-white font-mono text-lg mb-2">4+ appliances: Total nameplate VA x 0.75</p>
                <p className="text-white/70 text-sm mt-2">Example: Dishwasher (1,200 VA) + Disposal (960 VA) + Water heater (4,500 VA) + Trash compactor (1,500 VA) = 8,160 VA x 0.75 = 6,120 VA</p>
              </div>

              <h3 className="text-xl font-semibold mt-6 mb-3">220.54 - Electric Clothes Dryers</h3>
              <p className="text-white/80 mb-4">
                The feeder load for electric clothes dryers in dwelling units must be a minimum of <strong>5,000 watts (VA)</strong> or the nameplate rating, whichever is larger. For multiple dryers on a single feeder (such as in apartment buildings), Table 220.54 provides demand factors:
              </p>
              <div className="overflow-x-auto my-6">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-white/20">
                      <th className="text-left py-3 px-4 text-white/60">Number of Dryers</th>
                      <th className="text-left py-3 px-4 text-white/60">Demand Factor (%)</th>
                    </tr>
                  </thead>
                  <tbody className="text-white/80">
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">1 - 4</td>
                      <td className="py-3 px-4">100%</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">5</td>
                      <td className="py-3 px-4">85%</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">6 - 10</td>
                      <td className="py-3 px-4">75%</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">11 - 20</td>
                      <td className="py-3 px-4">65%</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4">21 - 40</td>
                      <td className="py-3 px-4">60%</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h3 className="text-xl font-semibold mt-6 mb-3">220.55 - Electric Ranges and Cooking Appliances</h3>
              <p className="text-white/80 mb-4">
                Table 220.55 is one of the most referenced tables in the NEC. It provides demand factors for household electric ranges, wall-mounted ovens, counter-mounted cooking units, and other cooking appliances rated over 1-3/4 kW. For a <strong>single range not exceeding 12 kW</strong>, the maximum demand from Column C is <strong>8 kW</strong>.
              </p>
              <div className="overflow-x-auto my-6">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-white/20">
                      <th className="text-left py-3 px-4 text-white/60">Number of Appliances</th>
                      <th className="text-left py-3 px-4 text-white/60">Column A (&lt;3.5 kW)</th>
                      <th className="text-left py-3 px-4 text-white/60">Column B (3.5-8.75 kW)</th>
                      <th className="text-left py-3 px-4 text-white/60">Column C (max 12 kW)</th>
                    </tr>
                  </thead>
                  <tbody className="text-white/80">
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">1</td>
                      <td className="py-3 px-4">80%</td>
                      <td className="py-3 px-4">80%</td>
                      <td className="py-3 px-4">8 kW</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">2</td>
                      <td className="py-3 px-4">75%</td>
                      <td className="py-3 px-4">65%</td>
                      <td className="py-3 px-4">11 kW</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">3</td>
                      <td className="py-3 px-4">70%</td>
                      <td className="py-3 px-4">55%</td>
                      <td className="py-3 px-4">14 kW</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">4</td>
                      <td className="py-3 px-4">66%</td>
                      <td className="py-3 px-4">50%</td>
                      <td className="py-3 px-4">17 kW</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4">5</td>
                      <td className="py-3 px-4">62%</td>
                      <td className="py-3 px-4">45%</td>
                      <td className="py-3 px-4">20 kW</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="bg-orange-900/30 rounded-xl p-6 my-6">
                <p className="text-white/90 font-medium">
                  <strong>Important Note:</strong> For ranges rated over 12 kW, you must increase the Column C value by 5% for each additional kW (or major fraction thereof) above 12 kW. For example, a 14 kW range: 8 kW + (2 x 5% x 8 kW) = 8 kW + 0.8 kW = 8.8 kW demand.
                </p>
              </div>

              <h3 className="text-xl font-semibold mt-6 mb-3">220.56 - Kitchen Equipment (Non-Dwelling)</h3>
              <p className="text-white/80 mb-4">
                For commercial kitchens, Table 220.56 provides demand factors for kitchen equipment (dishwashers, booster heaters, warmers, etc.). When there are <strong>three or more pieces of commercial kitchen equipment</strong> on a feeder or service, you can apply these demand factors rather than using 100% of the total connected load.
              </p>
              <div className="overflow-x-auto my-6">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-white/20">
                      <th className="text-left py-3 px-4 text-white/60">Number of Equipment</th>
                      <th className="text-left py-3 px-4 text-white/60">Demand Factor (%)</th>
                    </tr>
                  </thead>
                  <tbody className="text-white/80">
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">3</td>
                      <td className="py-3 px-4">90%</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">4</td>
                      <td className="py-3 px-4">80%</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">5</td>
                      <td className="py-3 px-4">70%</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4">6 or more</td>
                      <td className="py-3 px-4">65%</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h3 className="text-xl font-semibold mt-6 mb-3">220.60 - Non-Coincident Loads</h3>
              <p className="text-white/80 mb-4">
                Where it is unlikely that two or more non-coincident loads will operate simultaneously, only the <strong>largest load</strong> needs to be included in the calculation. The most common application is heating vs. air conditioning - since they won&apos;t run at the same time, you use whichever load is greater.
              </p>
              <div className="bg-white/5 rounded-xl p-6 my-6">
                <p className="text-white font-mono text-lg mb-2">Use LARGER of: Heating Load OR A/C Load</p>
                <p className="text-white/70 text-sm mt-2">Example: If heating = 10 kW and A/C = 6 kW, use 10 kW for the calculation.</p>
              </div>
            </section>

            <section id="optional-calculations" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Optional Calculations for Dwelling Units (220.82 - 220.87)</h2>
              <p className="text-white/80 mb-4">
                Part IV provides simplified calculation methods that often result in smaller service sizes. These methods are permitted as alternatives to the standard method and are widely used because they reflect actual demand patterns more accurately.
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-3">220.82 - Optional Calculation for Dwelling Units</h3>
              <p className="text-white/80 mb-4">
                This is the most commonly used optional method. It can be used for <strong>single dwelling units</strong> served by a single 120/240V or 120/208V set of 3-wire service or feeder conductors with an ampacity of 100 amperes or greater. The method is straightforward:
              </p>
              <div className="bg-gradient-to-r from-purple-900/30 to-cyan-900/30 rounded-xl p-6 my-6">
                <h4 className="text-white font-semibold mb-3">Step 1: Add All Loads at 100%</h4>
                <ul className="text-white/70 space-y-1 text-sm mb-4">
                  <li>General lighting and receptacles: 3 VA/sq ft</li>
                  <li>Small appliance circuits: 1,500 VA per circuit (minimum 2)</li>
                  <li>Laundry circuit: 1,500 VA</li>
                  <li>All appliances (ranges, dryers, water heaters, etc.) at nameplate</li>
                  <li>All motors at nameplate</li>
                </ul>
                <h4 className="text-white font-semibold mb-3">Step 2: Apply Demand Factors</h4>
                <ul className="text-white/70 space-y-1 text-sm mb-4">
                  <li>First 10 kVA at <strong>100%</strong></li>
                  <li>Remainder at <strong>40%</strong></li>
                </ul>
                <h4 className="text-white font-semibold mb-3">Step 3: Heating/Cooling Loads (add the largest of):</h4>
                <ul className="text-white/70 space-y-1 text-sm">
                  <li>100% of A/C nameplate</li>
                  <li>100% of heat pump compressor at nameplate + 65% of supplemental heat</li>
                  <li>65% of electric space heating (if 4+ separately controlled units)</li>
                  <li>100% of electric space heating (if fewer than 4 units)</li>
                </ul>
              </div>

              <h3 className="text-xl font-semibold mt-6 mb-3">220.83 - Optional Calculation for Existing Dwelling Units</h3>
              <p className="text-white/80 mb-4">
                When adding new loads to an existing dwelling that already has a service of 100 amperes or more, this section provides a simplified approach. The existing load is determined by measuring the maximum demand over a representative period, then the new load is added using the demand factors from 220.82.
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-3">220.84 - Optional Calculation for Multifamily Dwellings</h3>
              <p className="text-white/80 mb-4">
                For multifamily dwelling buildings, an optional calculation method is available when each unit has electric cooking equipment and either electric space heating or air conditioning (or both). The connected load per unit is calculated, then a demand factor based on the number of units is applied:
              </p>
              <div className="overflow-x-auto my-6">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-white/20">
                      <th className="text-left py-3 px-4 text-white/60">Number of Units</th>
                      <th className="text-left py-3 px-4 text-white/60">Demand Factor (%)</th>
                    </tr>
                  </thead>
                  <tbody className="text-white/80">
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">3</td>
                      <td className="py-3 px-4">45%</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">4 - 5</td>
                      <td className="py-3 px-4">40%</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">6 - 7</td>
                      <td className="py-3 px-4">39%</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">8 - 10</td>
                      <td className="py-3 px-4">38%</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">11 - 20</td>
                      <td className="py-3 px-4">37%</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4">21 - 40</td>
                      <td className="py-3 px-4">36%</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h3 className="text-xl font-semibold mt-6 mb-3">220.87 - Determining Existing Loads</h3>
              <p className="text-white/80 mb-4">
                This section allows the use of actual maximum demand data to determine existing loads. The measurement must cover a minimum <strong>30-day period</strong> using a recording ammeter or power meter. The measured demand is then used as the basis for adding new loads to an existing installation. This is especially useful for commercial and industrial service upgrades.
              </p>
            </section>

            <section id="example-standard" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Worked Example: Standard Method</h2>
              <p className="text-white/80 mb-4">
                Let&apos;s calculate the service size for a 2,800 sq ft single-family home with the following loads:
              </p>
              <div className="bg-white/5 rounded-xl p-6 my-6">
                <h4 className="text-white font-semibold mb-4">Given:</h4>
                <ul className="text-white/70 space-y-1 text-sm mb-6">
                  <li>2,800 sq ft living area</li>
                  <li>12 kW electric range</li>
                  <li>5.5 kW electric dryer</li>
                  <li>4.5 kW water heater</li>
                  <li>1,200 VA dishwasher</li>
                  <li>960 VA garbage disposal</li>
                  <li>1,500 VA trash compactor</li>
                  <li>5 kW A/C compressor</li>
                  <li>10 kW electric heat (4 separately controlled units)</li>
                </ul>

                <h4 className="text-white font-semibold mb-3">Step 1: General Lighting, Small Appliance &amp; Laundry</h4>
                <table className="w-full text-left text-sm mb-6">
                  <tbody className="text-white/70">
                    <tr className="border-b border-white/5">
                      <td className="py-2">General lighting (2,800 x 3 VA)</td>
                      <td className="py-2 text-right">8,400 VA</td>
                    </tr>
                    <tr className="border-b border-white/5">
                      <td className="py-2">Small appliance circuits (2 x 1,500 VA)</td>
                      <td className="py-2 text-right">3,000 VA</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-2">Laundry circuit (1 x 1,500 VA)</td>
                      <td className="py-2 text-right">1,500 VA</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-2"><strong>Subtotal</strong></td>
                      <td className="py-2 text-right"><strong>12,900 VA</strong></td>
                    </tr>
                  </tbody>
                </table>

                <h4 className="text-white font-semibold mb-3">Step 2: Apply Table 220.42 Demand Factors</h4>
                <table className="w-full text-left text-sm mb-6">
                  <tbody className="text-white/70">
                    <tr className="border-b border-white/5">
                      <td className="py-2">First 3,000 VA @ 100%</td>
                      <td className="py-2 text-right">3,000 VA</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-2">Remaining 9,900 VA @ 35%</td>
                      <td className="py-2 text-right">3,465 VA</td>
                    </tr>
                    <tr>
                      <td className="py-2"><strong>Net lighting/SA/laundry</strong></td>
                      <td className="py-2 text-right"><strong>6,465 VA</strong></td>
                    </tr>
                  </tbody>
                </table>

                <h4 className="text-white font-semibold mb-3">Step 3: Range (Table 220.55, Column C)</h4>
                <table className="w-full text-left text-sm mb-6">
                  <tbody className="text-white/70">
                    <tr>
                      <td className="py-2">One 12 kW range (Column C)</td>
                      <td className="py-2 text-right">8,000 VA</td>
                    </tr>
                  </tbody>
                </table>

                <h4 className="text-white font-semibold mb-3">Step 4: Dryer (220.54)</h4>
                <table className="w-full text-left text-sm mb-6">
                  <tbody className="text-white/70">
                    <tr>
                      <td className="py-2">Dryer (5,500 VA nameplate, larger than 5,000 min)</td>
                      <td className="py-2 text-right">5,500 VA</td>
                    </tr>
                  </tbody>
                </table>

                <h4 className="text-white font-semibold mb-3">Step 5: Fastened-in-Place Appliances (220.53)</h4>
                <table className="w-full text-left text-sm mb-6">
                  <tbody className="text-white/70">
                    <tr className="border-b border-white/5">
                      <td className="py-2">Water heater</td>
                      <td className="py-2 text-right">4,500 VA</td>
                    </tr>
                    <tr className="border-b border-white/5">
                      <td className="py-2">Dishwasher</td>
                      <td className="py-2 text-right">1,200 VA</td>
                    </tr>
                    <tr className="border-b border-white/5">
                      <td className="py-2">Garbage disposal</td>
                      <td className="py-2 text-right">960 VA</td>
                    </tr>
                    <tr className="border-b border-white/5">
                      <td className="py-2">Trash compactor</td>
                      <td className="py-2 text-right">1,500 VA</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-2">Total (4 appliances)</td>
                      <td className="py-2 text-right">8,160 VA</td>
                    </tr>
                    <tr>
                      <td className="py-2">@ 75% demand factor</td>
                      <td className="py-2 text-right"><strong>6,120 VA</strong></td>
                    </tr>
                  </tbody>
                </table>

                <h4 className="text-white font-semibold mb-3">Step 6: Heating/Cooling (220.60 - Largest Non-Coincident)</h4>
                <table className="w-full text-left text-sm mb-6">
                  <tbody className="text-white/70">
                    <tr className="border-b border-white/5">
                      <td className="py-2">A/C: 5,000 VA</td>
                      <td className="py-2 text-right">5,000 VA</td>
                    </tr>
                    <tr className="border-b border-white/5">
                      <td className="py-2">Electric heat: 10,000 VA</td>
                      <td className="py-2 text-right">10,000 VA</td>
                    </tr>
                    <tr>
                      <td className="py-2"><strong>Use larger (electric heat)</strong></td>
                      <td className="py-2 text-right"><strong>10,000 VA</strong></td>
                    </tr>
                  </tbody>
                </table>

                <h4 className="text-white font-semibold mb-3">Step 7: Total Calculated Load</h4>
                <table className="w-full text-left text-sm">
                  <tbody className="text-white/70">
                    <tr className="border-b border-white/5">
                      <td className="py-2">Lighting/SA/Laundry (after demand)</td>
                      <td className="py-2 text-right">6,465 VA</td>
                    </tr>
                    <tr className="border-b border-white/5">
                      <td className="py-2">Range</td>
                      <td className="py-2 text-right">8,000 VA</td>
                    </tr>
                    <tr className="border-b border-white/5">
                      <td className="py-2">Dryer</td>
                      <td className="py-2 text-right">5,500 VA</td>
                    </tr>
                    <tr className="border-b border-white/5">
                      <td className="py-2">Fastened-in-place appliances</td>
                      <td className="py-2 text-right">6,120 VA</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-2">Heating (largest)</td>
                      <td className="py-2 text-right">10,000 VA</td>
                    </tr>
                    <tr className="border-t border-white/10">
                      <td className="py-2 text-purple-400"><strong>Total Calculated Load</strong></td>
                      <td className="py-2 text-right text-purple-400"><strong>36,085 VA</strong></td>
                    </tr>
                  </tbody>
                </table>
                <p className="text-white/70 mt-4">Service size: 36,085 VA / 240V = <strong>150.4A → 200A service</strong></p>
              </div>
            </section>

            <section id="example-optional" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Worked Example: Optional Method (220.82)</h2>
              <p className="text-white/80 mb-4">
                Using the same 2,800 sq ft home from above, let&apos;s compare using the optional calculation method:
              </p>
              <div className="bg-white/5 rounded-xl p-6 my-6">
                <h4 className="text-white font-semibold mb-3">Step 1: Total Connected Load (all loads at 100%)</h4>
                <table className="w-full text-left text-sm mb-6">
                  <tbody className="text-white/70">
                    <tr className="border-b border-white/5">
                      <td className="py-2">General lighting (2,800 x 3 VA)</td>
                      <td className="py-2 text-right">8,400 VA</td>
                    </tr>
                    <tr className="border-b border-white/5">
                      <td className="py-2">Small appliance circuits (2 x 1,500)</td>
                      <td className="py-2 text-right">3,000 VA</td>
                    </tr>
                    <tr className="border-b border-white/5">
                      <td className="py-2">Laundry circuit</td>
                      <td className="py-2 text-right">1,500 VA</td>
                    </tr>
                    <tr className="border-b border-white/5">
                      <td className="py-2">Range (nameplate)</td>
                      <td className="py-2 text-right">12,000 VA</td>
                    </tr>
                    <tr className="border-b border-white/5">
                      <td className="py-2">Dryer (nameplate)</td>
                      <td className="py-2 text-right">5,500 VA</td>
                    </tr>
                    <tr className="border-b border-white/5">
                      <td className="py-2">Water heater</td>
                      <td className="py-2 text-right">4,500 VA</td>
                    </tr>
                    <tr className="border-b border-white/5">
                      <td className="py-2">Dishwasher</td>
                      <td className="py-2 text-right">1,200 VA</td>
                    </tr>
                    <tr className="border-b border-white/5">
                      <td className="py-2">Garbage disposal</td>
                      <td className="py-2 text-right">960 VA</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-2">Trash compactor</td>
                      <td className="py-2 text-right">1,500 VA</td>
                    </tr>
                    <tr>
                      <td className="py-2"><strong>Total connected (non-HVAC)</strong></td>
                      <td className="py-2 text-right"><strong>38,560 VA</strong></td>
                    </tr>
                  </tbody>
                </table>

                <h4 className="text-white font-semibold mb-3">Step 2: Apply 220.82 Demand Factors</h4>
                <table className="w-full text-left text-sm mb-6">
                  <tbody className="text-white/70">
                    <tr className="border-b border-white/5">
                      <td className="py-2">First 10,000 VA @ 100%</td>
                      <td className="py-2 text-right">10,000 VA</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-2">Remaining 28,560 VA @ 40%</td>
                      <td className="py-2 text-right">11,424 VA</td>
                    </tr>
                    <tr>
                      <td className="py-2"><strong>Subtotal</strong></td>
                      <td className="py-2 text-right"><strong>21,424 VA</strong></td>
                    </tr>
                  </tbody>
                </table>

                <h4 className="text-white font-semibold mb-3">Step 3: Add Heating/Cooling (largest applicable)</h4>
                <p className="text-white/70 text-sm mb-3">
                  Electric heat with 4 separately controlled units: use 65% per 220.82(C)(4):
                </p>
                <table className="w-full text-left text-sm mb-4">
                  <tbody className="text-white/70">
                    <tr className="border-b border-white/5">
                      <td className="py-2">A/C @ 100%: 5,000 VA</td>
                      <td className="py-2 text-right">5,000 VA</td>
                    </tr>
                    <tr className="border-b border-white/5">
                      <td className="py-2">Heat @ 65%: 10,000 x 0.65</td>
                      <td className="py-2 text-right">6,500 VA</td>
                    </tr>
                    <tr>
                      <td className="py-2"><strong>Use larger (heat @ 65%)</strong></td>
                      <td className="py-2 text-right"><strong>6,500 VA</strong></td>
                    </tr>
                  </tbody>
                </table>

                <h4 className="text-white font-semibold mb-3">Step 4: Total Calculated Load</h4>
                <table className="w-full text-left text-sm">
                  <tbody className="text-white/70">
                    <tr className="border-b border-white/5">
                      <td className="py-2">Non-HVAC demand</td>
                      <td className="py-2 text-right">21,424 VA</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-2">Heating load</td>
                      <td className="py-2 text-right">6,500 VA</td>
                    </tr>
                    <tr className="border-t border-white/10">
                      <td className="py-2 text-cyan-400"><strong>Total Calculated Load</strong></td>
                      <td className="py-2 text-right text-cyan-400"><strong>27,924 VA</strong></td>
                    </tr>
                  </tbody>
                </table>
                <p className="text-white/70 mt-4">Service size: 27,924 VA / 240V = <strong>116.4A → 125A or 150A service</strong></p>
              </div>

              <div className="bg-purple-900/30 rounded-xl p-6 my-6">
                <p className="text-white/90 font-medium">
                  <strong>Key Takeaway:</strong> The optional method yields a total of 27,924 VA (116.4A) compared to the standard method&apos;s 36,085 VA (150.4A). The optional method saves roughly 8,000 VA because it applies a uniform 40% demand factor to everything above 10 kVA, which better reflects the reality that not all loads run simultaneously in a dwelling.
                </p>
              </div>
            </section>

            <section id="demand-factor-tables" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Key Demand Factor Tables</h2>
              <p className="text-white/80 mb-4">
                Here is a quick-reference summary of the most important demand factor tables in Article 220:
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-3">Table 220.42 - General Lighting Demand Factors</h3>
              <div className="overflow-x-auto my-6">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-white/20">
                      <th className="text-left py-3 px-4 text-white/60">Occupancy Type</th>
                      <th className="text-left py-3 px-4 text-white/60">Portion of Load (VA)</th>
                      <th className="text-left py-3 px-4 text-white/60">Demand Factor (%)</th>
                    </tr>
                  </thead>
                  <tbody className="text-white/80">
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4" rowSpan={2}>Dwelling units</td>
                      <td className="py-3 px-4">First 3,000 VA</td>
                      <td className="py-3 px-4">100%</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">3,001 to 120,000 VA</td>
                      <td className="py-3 px-4">35%</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">Hospitals</td>
                      <td className="py-3 px-4">First 50,000 VA / Remainder</td>
                      <td className="py-3 px-4">40% / 20%</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">Hotels, motels</td>
                      <td className="py-3 px-4">First 20,000 / 20,001-100,000 / Over 100,000</td>
                      <td className="py-3 px-4">50% / 40% / 30%</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4">All others</td>
                      <td className="py-3 px-4">Total VA</td>
                      <td className="py-3 px-4">100%</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h3 className="text-xl font-semibold mt-6 mb-3">Table 220.44 - Receptacle Loads (Non-Dwelling)</h3>
              <p className="text-white/80 mb-4">
                For non-dwelling occupancies, receptacle loads calculated at 180 VA per outlet can be reduced using Table 220.44 demand factors when computing feeder loads:
              </p>
              <div className="overflow-x-auto my-6">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-white/20">
                      <th className="text-left py-3 px-4 text-white/60">Portion of Receptacle Load (VA)</th>
                      <th className="text-left py-3 px-4 text-white/60">Demand Factor (%)</th>
                    </tr>
                  </thead>
                  <tbody className="text-white/80">
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">First 10,000 VA</td>
                      <td className="py-3 px-4">100%</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4">Remainder over 10,000 VA</td>
                      <td className="py-3 px-4">50%</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-white/70 text-sm">
                This reduction is significant for office buildings and retail spaces with large numbers of receptacles.
              </p>
            </section>

            <section id="common-mistakes" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Common Mistakes to Avoid</h2>
              <p className="text-white/80 mb-4">
                Load calculation errors can lead to undersized services, failed inspections, or unsafe installations. Here are the most frequent mistakes electricians make with Article 220:
              </p>
              <div className="space-y-4">
                <div className="bg-red-900/20 border border-red-500/30 rounded-xl p-6">
                  <h3 className="font-semibold text-red-400 mb-2">Applying Demand Factors to Branch Circuits</h3>
                  <p className="text-white/70 text-sm">Demand factors from Tables 220.42, 220.44, 220.54, and 220.55 apply only to feeder and service calculations. Individual branch circuits must be sized for the full connected load.</p>
                </div>
                <div className="bg-red-900/20 border border-red-500/30 rounded-xl p-6">
                  <h3 className="font-semibold text-red-400 mb-2">Forgetting Small Appliance and Laundry Loads</h3>
                  <p className="text-white/70 text-sm">The 3,000 VA for small appliance circuits and 1,500 VA for laundry are mandatory minimums that must be included in every dwelling unit calculation, even if fewer circuits are installed.</p>
                </div>
                <div className="bg-red-900/20 border border-red-500/30 rounded-xl p-6">
                  <h3 className="font-semibold text-red-400 mb-2">Mixing Standard and Optional Methods</h3>
                  <p className="text-white/70 text-sm">You cannot combine parts of the standard method with parts of the optional method. Choose one method and follow it completely. The optional method uses different demand factors and includes all loads differently.</p>
                </div>
                <div className="bg-red-900/20 border border-red-500/30 rounded-xl p-6">
                  <h3 className="font-semibold text-red-400 mb-2">Incorrect Non-Coincident Load Selection</h3>
                  <p className="text-white/70 text-sm">When using 220.60 for heating vs. cooling, you must compare the loads correctly. In the standard method, use 100% of each. In the optional method (220.82), heating with 4+ units uses 65% while A/C uses 100% - so compare 65% of heat to 100% of A/C.</p>
                </div>
                <div className="bg-red-900/20 border border-red-500/30 rounded-xl p-6">
                  <h3 className="font-semibold text-red-400 mb-2">Using Wrong Dryer Minimum</h3>
                  <p className="text-white/70 text-sm">Per 220.54, the minimum dryer load is 5,000 VA. If the nameplate rating is higher, use the nameplate. Many electricians mistakenly use 5,000 VA even when the dryer nameplate is 5,500 VA or more.</p>
                </div>
                <div className="bg-red-900/20 border border-red-500/30 rounded-xl p-6">
                  <h3 className="font-semibold text-red-400 mb-2">Omitting the 75% Appliance Demand Factor</h3>
                  <p className="text-white/70 text-sm">When a dwelling has four or more fastened-in-place appliances (excluding ranges, dryers, heating, and A/C), the 75% demand factor from 220.53 applies. Forgetting this results in an oversized service calculation.</p>
                </div>
                <div className="bg-red-900/20 border border-red-500/30 rounded-xl p-6">
                  <h3 className="font-semibold text-red-400 mb-2">Incorrect Range Calculation for Over 12 kW</h3>
                  <p className="text-white/70 text-sm">For ranges exceeding 12 kW, the Column C value of 8 kW must be increased by 5% per kW (or major fraction) over 12 kW. A common error is using the flat 8 kW for a 14 kW or 16 kW range.</p>
                </div>
                <div className="bg-red-900/20 border border-red-500/30 rounded-xl p-6">
                  <h3 className="font-semibold text-red-400 mb-2">Neglecting Continuous Load Rules</h3>
                  <p className="text-white/70 text-sm">Per 220.18, continuous loads (3+ hours) must not exceed 80% of the branch circuit or overcurrent device rating. Commercial lighting and sign circuits are common continuous loads that get overlooked.</p>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">When to Use Each Method</h2>
              <p className="text-white/80 mb-4">
                Choosing between the standard and optional methods depends on the installation:
              </p>
              <div className="grid md:grid-cols-2 gap-4 my-6">
                <div className="bg-white/5 rounded-xl p-6">
                  <h3 className="font-semibold text-purple-400 mb-2">Use Standard Method When:</h3>
                  <ul className="text-white/70 text-sm space-y-2">
                    <li>Service is less than 100A</li>
                    <li>The installation is commercial or industrial</li>
                    <li>The authority having jurisdiction (AHJ) requires it</li>
                    <li>You need the most conservative (largest) result</li>
                    <li>Calculating loads for multiwire branch circuits</li>
                  </ul>
                </div>
                <div className="bg-white/5 rounded-xl p-6">
                  <h3 className="font-semibold text-cyan-400 mb-2">Use Optional Method When:</h3>
                  <ul className="text-white/70 text-sm space-y-2">
                    <li>Single dwelling unit with 100A+ service</li>
                    <li>You want a smaller (more realistic) calculated load</li>
                    <li>Adding loads to an existing dwelling (220.83)</li>
                    <li>Multifamily buildings with electric cooking and HVAC (220.84)</li>
                    <li>The AHJ accepts it (most do)</li>
                  </ul>
                </div>
              </div>
              <div className="bg-purple-900/30 rounded-xl p-6 my-6">
                <p className="text-white/90 font-medium">
                  <strong>Pro Tip:</strong> When in doubt, run both calculations. If the standard method yields a 200A service but the optional method shows 150A is adequate, present both to the inspector. Many AHJs prefer seeing both calculations documented.
                </p>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">EV Charger Considerations</h2>
              <p className="text-white/80 mb-4">
                With the increasing adoption of electric vehicles, load calculations for EV chargers have become a critical topic. The NEC 2023 added Article 625 requirements that affect load calculations:
              </p>
              <ul className="list-disc list-inside text-white/70 space-y-2 mb-4">
                <li><strong>Level 2 chargers</strong> are typically 7.2 kW to 19.2 kW (30A to 80A at 240V)</li>
                <li>EV charger loads are considered <strong>continuous loads</strong>, so the branch circuit must be rated at 125% of the charger&apos;s maximum current</li>
                <li>For the standard method, add the full nameplate rating to the service calculation</li>
                <li>For the optional method (220.82), include EV charger load at nameplate in the total connected load</li>
                <li>NEC 625.42 permits the use of an <strong>energy management system (EMS)</strong> to reduce the calculated load where approved by the AHJ</li>
              </ul>
              <div className="bg-white/5 rounded-xl p-6 my-6">
                <p className="text-white font-mono text-lg mb-2">EV charger branch circuit: 48A charger / 0.80 = 60A circuit</p>
                <p className="text-white/70 text-sm mt-2">A 48A Level 2 charger requires a minimum 60A circuit due to the continuous load 125% rule.</p>
              </div>
            </section>

            {/* CTA Section */}
            <section className="bg-gradient-to-r from-purple-900/30 to-cyan-900/30 rounded-2xl p-8 md:p-12 my-12 border border-purple-500/20">
              <div className="text-center">
                <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-1.5 rounded-full mb-4">
                  <span className="text-sm text-white/80">&#9733; Free on the App Store</span>
                </div>
                <h2 className="text-2xl md:text-3xl font-display font-bold mb-4">Your Electrical Reference, Powered by AI</h2>
                <p className="text-white/70 mb-8 max-w-2xl mx-auto">Join thousands of electricians using Ampora for instant NEC code answers, electrical calculations, and AI-powered troubleshooting — right from your phone.</p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <a href="https://apps.apple.com/us/app/ampora/id6753693522" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-black font-semibold rounded-full hover:bg-white/90 transition-colors">
                    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/></svg>
                    Download on App Store
                  </a>
                  <Link href="/features/nec-code-reference" className="px-8 py-4 bg-white/10 text-white font-semibold rounded-full hover:bg-white/20 transition-colors text-center">Explore Features</Link>
                </div>
              </div>
            </section>

            {/* Related Articles */}
            <section className="mt-12">
              <h2 className="text-2xl font-display font-bold mb-6">Related Articles</h2>
              <div className="grid md:grid-cols-2 gap-4">
                <Link href="/blog/residential-load-calculations" className="bg-white/5 hover:bg-white/10 rounded-xl p-6 transition-colors">
                  <span className="text-purple-400 text-sm">Calculations</span>
                  <h3 className="font-semibold mt-2">Residential Load Calculations Guide</h3>
                </Link>
                <Link href="/blog/electrical-service-upgrade-200-amp" className="bg-white/5 hover:bg-white/10 rounded-xl p-6 transition-colors">
                  <span className="text-purple-400 text-sm">Installation</span>
                  <h3 className="font-semibold mt-2">Electrical Service Upgrade to 200 Amp</h3>
                </Link>
                <Link href="/blog/nec-article-210-branch-circuits-guide" className="bg-white/5 hover:bg-white/10 rounded-xl p-6 transition-colors">
                  <span className="text-purple-400 text-sm">NEC Code</span>
                  <h3 className="font-semibold mt-2">NEC Article 210: Branch Circuits Guide</h3>
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
          <p className="text-sm text-white/40">&copy; 2025 Ampora Labs</p>
        </div>
      </footer>
    </main>
  );
}
