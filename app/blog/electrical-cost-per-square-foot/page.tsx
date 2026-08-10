import { Metadata } from "next";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import { BlogPostingJsonLd, BreadcrumbJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Electrical Cost Per Square Foot: New Construction Estimating Guide",
  description: "Complete guide to electrical cost per square foot for new construction. Covers residential and commercial electrical rough-in costs, material and labor breakdown, wiring cost estimates, regional pricing variations, bid pricing strategies, and money-saving tips for electrical contractors and builders.",
  keywords: [
    "electrical cost per square foot",
    "new construction electrical cost",
    "electrical rough in cost",
    "residential electrical pricing",
    "commercial electrical cost",
    "electrical labor rates",
    "wiring cost estimate",
    "electrical construction cost",
    "cost to wire a house",
    "electrical bid pricing"
  ],
  alternates: {
    canonical: "https://amporalabs.com/blog/electrical-cost-per-square-foot",
  },
  openGraph: {
    title: "Electrical Cost Per Square Foot: New Construction Estimating Guide - Ampora",
    description: "Master electrical cost estimating for new construction with this comprehensive guide covering residential and commercial pricing, material and labor breakdown, and bidding strategies.",
    url: "https://amporalabs.com/blog/electrical-cost-per-square-foot",
    type: "article",
    publishedTime: "2026-03-04",
  },
};

function HeroIllustration() {
  return (
    <svg viewBox="0 0 400 180" className="w-full h-40 md:h-48" aria-label="Cost breakdown chart with house diagram showing electrical pricing per square foot">
      {/* Background */}
      <rect x="10" y="10" width="380" height="160" rx="4" fill="#1f2937" stroke="#374151" strokeWidth="1"/>

      {/* House Outline */}
      <g transform="translate(25, 20)">
        {/* Roof */}
        <polygon points="75,5 10,50 140,50" fill="none" stroke="#f59e0b" strokeWidth="2"/>
        {/* Walls */}
        <rect x="20" y="50" width="110" height="70" fill="#f59e0b" fillOpacity="0.08" stroke="#f59e0b" strokeWidth="1.5"/>
        {/* Door */}
        <rect x="60" y="85" width="30" height="35" fill="none" stroke="#f59e0b" strokeWidth="1"/>
        <circle cx="85" cy="103" r="2" fill="#f59e0b"/>
        {/* Windows */}
        <rect x="30" y="60" width="20" height="18" fill="#f59e0b" fillOpacity="0.15" stroke="#f59e0b" strokeWidth="1"/>
        <line x1="40" y1="60" x2="40" y2="78" stroke="#f59e0b" strokeWidth="0.5"/>
        <line x1="30" y1="69" x2="50" y2="69" stroke="#f59e0b" strokeWidth="0.5"/>
        <rect x="100" y="60" width="20" height="18" fill="#f59e0b" fillOpacity="0.15" stroke="#f59e0b" strokeWidth="1"/>
        <line x1="110" y1="60" x2="110" y2="78" stroke="#f59e0b" strokeWidth="0.5"/>
        <line x1="100" y1="69" x2="120" y2="69" stroke="#f59e0b" strokeWidth="0.5"/>

        {/* Electrical Symbol in House */}
        <path d="M68 30 L78 20 L73 28 L83 18" stroke="#fbbf24" strokeWidth="2" fill="none"/>

        {/* Sq Ft Label */}
        <text x="75" y="145" textAnchor="middle" fill="#9ca3af" fontSize="7">2,500 sq ft</text>
      </g>

      {/* Cost Breakdown Bar Chart */}
      <g transform="translate(195, 22)">
        <text x="85" y="10" textAnchor="middle" fill="#f59e0b" fontSize="8" fontWeight="bold">COST PER SQ FT</text>

        {/* Residential Bar */}
        <rect x="0" y="20" width="130" height="22" rx="3" fill="#22c55e" fillOpacity="0.15" stroke="#22c55e" strokeWidth="1"/>
        <rect x="2" y="22" width="80" height="18" rx="2" fill="#22c55e" fillOpacity="0.3"/>
        <text x="8" y="35" fill="#22c55e" fontSize="6" fontWeight="bold">RESIDENTIAL</text>
        <text x="90" y="35" fill="#22c55e" fontSize="7" fontWeight="bold" fontFamily="monospace">$7-$15</text>

        {/* Commercial Bar */}
        <rect x="0" y="48" width="130" height="22" rx="3" fill="#3b82f6" fillOpacity="0.15" stroke="#3b82f6" strokeWidth="1"/>
        <rect x="2" y="50" width="105" height="18" rx="2" fill="#3b82f6" fillOpacity="0.3"/>
        <text x="8" y="63" fill="#3b82f6" fontSize="6" fontWeight="bold">COMMERCIAL</text>
        <text x="90" y="63" fill="#3b82f6" fontSize="7" fontWeight="bold" fontFamily="monospace">$12-$28</text>

        {/* Industrial Bar */}
        <rect x="0" y="76" width="130" height="22" rx="3" fill="#a855f7" fillOpacity="0.15" stroke="#a855f7" strokeWidth="1"/>
        <rect x="2" y="78" width="125" height="18" rx="2" fill="#a855f7" fillOpacity="0.3"/>
        <text x="8" y="91" fill="#a855f7" fontSize="6" fontWeight="bold">INDUSTRIAL</text>
        <text x="90" y="91" fill="#a855f7" fontSize="7" fontWeight="bold" fontFamily="monospace">$15-$40</text>

        {/* Cost Split Breakdown */}
        <text x="85" y="112" textAnchor="middle" fill="#9ca3af" fontSize="6">TYPICAL COST SPLIT</text>

        {/* Stacked bar showing labor vs materials */}
        <rect x="0" y="118" width="78" height="14" rx="2" fill="#f59e0b" fillOpacity="0.4"/>
        <text x="39" y="128" textAnchor="middle" fill="#f59e0b" fontSize="5.5" fontWeight="bold">LABOR 60%</text>

        <rect x="78" y="118" width="52" height="14" rx="2" fill="#06b6d4" fillOpacity="0.4"/>
        <text x="104" y="128" textAnchor="middle" fill="#06b6d4" fontSize="5.5" fontWeight="bold">MATERIAL 40%</text>

        {/* Dollar amounts */}
        <text x="0" y="146" fill="#9ca3af" fontSize="5">Rough-in: $4-$8/sqft</text>
        <text x="75" y="146" fill="#9ca3af" fontSize="5">Trim-out: $3-$7/sqft</text>
      </g>
    </svg>
  );
}

export default function ElectricalCostPerSquareFootPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navigation />
      <div className="pt-20">
        <BreadcrumbJsonLd
          items={[
            { name: "Home", url: "https://amporalabs.com" },
            { name: "Blog", url: "https://amporalabs.com/blog" },
            { name: "Electrical Cost Per Square Foot", url: "https://amporalabs.com/blog/electrical-cost-per-square-foot" },
          ]}
        />
        <BlogPostingJsonLd
          headline="Electrical Cost Per Square Foot: New Construction Estimating Guide"
          description="Complete guide to electrical cost per square foot for new construction covering residential and commercial pricing, material and labor breakdown, and estimating strategies."
          datePublished="2026-03-04"
          dateModified="2026-03-04"
          url="https://amporalabs.com/blog/electrical-cost-per-square-foot"
          wordCount={5200}
          keywords={["electrical cost per square foot", "new construction electrical cost", "electrical rough in cost", "residential electrical pricing", "commercial electrical cost"]}
        />

        <article className="max-w-4xl mx-auto px-6 py-12">
          {/* Breadcrumb */}
          <nav className="text-sm text-white/60 mb-8">
            <Link href="/" className="hover:text-white">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/blog" className="hover:text-white">Blog</Link>
            <span className="mx-2">/</span>
            <span className="text-white">Electrical Cost Per Square Foot</span>
          </nav>

          {/* Article Header */}
          <header className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <span className="px-3 py-1 bg-amber-600/20 text-amber-300 text-sm font-medium rounded-full">
                Calculations
              </span>
              <span className="text-white/40 text-sm">18 min read</span>
              <span className="text-white/40 text-sm">March 4, 2026</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6 leading-tight">
              Electrical Cost Per Square Foot: New Construction Estimating Guide
            </h1>
            <p className="text-xl text-white/70">
              Whether you are bidding a custom home or pricing a commercial build-out, understanding electrical cost per square foot is essential for accurate estimating. This guide breaks down residential, commercial, and industrial electrical costs including rough-in and trim-out pricing, material and labor splits, regional variations, and practical strategies to sharpen your bids and protect your margins.
            </p>
          </header>

          <div className="mb-12 bg-gradient-to-br from-amber-900/20 to-cyan-900/20 rounded-2xl p-6 border border-white/10">
            <HeroIllustration />
          </div>

          {/* Table of Contents */}
          <div className="bg-white/5 rounded-2xl p-6 mb-12">
            <h2 className="font-display font-bold mb-4">In This Guide</h2>
            <ul className="space-y-2 text-white/70">
              <li><a href="#average-costs" className="hover:text-purple-400">Average Electrical Costs Per Square Foot</a></li>
              <li><a href="#factors-affecting-cost" className="hover:text-purple-400">Factors Affecting Electrical Cost</a></li>
              <li><a href="#material-breakdown" className="hover:text-purple-400">Material Cost Breakdown</a></li>
              <li><a href="#labor-costs" className="hover:text-purple-400">Labor Cost Considerations</a></li>
              <li><a href="#residential-pricing" className="hover:text-purple-400">Residential New Construction Pricing</a></li>
              <li><a href="#commercial-pricing" className="hover:text-purple-400">Commercial &amp; Industrial Pricing Differences</a></li>
              <li><a href="#how-to-estimate" className="hover:text-purple-400">How to Estimate Electrical Work</a></li>
              <li><a href="#cost-saving-tips" className="hover:text-purple-400">Cost-Saving Tips for Contractors</a></li>
              <li><a href="#regional-variations" className="hover:text-purple-400">Regional Price Variations</a></li>
              <li><a href="#faq" className="hover:text-purple-400">Frequently Asked Questions</a></li>
            </ul>
          </div>

          {/* Article Content */}
          <div className="prose prose-invert prose-lg max-w-none">

            <section id="average-costs" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Average Electrical Costs Per Square Foot</h2>
              <p className="text-white/80 mb-4">
                Electrical work typically represents <strong>8-12% of the total construction cost</strong> in new builds. The cost per square foot varies widely depending on building type, complexity, local labor rates, and code requirements. Understanding the baseline ranges helps you sanity-check estimates and identify projects that fall outside the norm.
              </p>

              <div className="overflow-x-auto my-6">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-white/20">
                      <th className="text-left py-3 px-4 text-white/60">Building Type</th>
                      <th className="text-left py-3 px-4 text-white/60">Low Range</th>
                      <th className="text-left py-3 px-4 text-white/60">Average</th>
                      <th className="text-left py-3 px-4 text-white/60">High Range</th>
                    </tr>
                  </thead>
                  <tbody className="text-white/80">
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">Residential (basic tract home)</td>
                      <td className="py-3 px-4 font-mono text-green-400">$7/sqft</td>
                      <td className="py-3 px-4 font-mono text-green-400">$10/sqft</td>
                      <td className="py-3 px-4 font-mono text-green-400">$13/sqft</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">Residential (custom/luxury)</td>
                      <td className="py-3 px-4 font-mono text-green-400">$12/sqft</td>
                      <td className="py-3 px-4 font-mono text-green-400">$18/sqft</td>
                      <td className="py-3 px-4 font-mono text-green-400">$25+/sqft</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">Commercial office</td>
                      <td className="py-3 px-4 font-mono text-blue-400">$12/sqft</td>
                      <td className="py-3 px-4 font-mono text-blue-400">$18/sqft</td>
                      <td className="py-3 px-4 font-mono text-blue-400">$28/sqft</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">Retail / restaurant</td>
                      <td className="py-3 px-4 font-mono text-blue-400">$15/sqft</td>
                      <td className="py-3 px-4 font-mono text-blue-400">$22/sqft</td>
                      <td className="py-3 px-4 font-mono text-blue-400">$35/sqft</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">Industrial / warehouse</td>
                      <td className="py-3 px-4 font-mono text-purple-400">$8/sqft</td>
                      <td className="py-3 px-4 font-mono text-purple-400">$14/sqft</td>
                      <td className="py-3 px-4 font-mono text-purple-400">$22/sqft</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">Industrial (heavy manufacturing)</td>
                      <td className="py-3 px-4 font-mono text-purple-400">$15/sqft</td>
                      <td className="py-3 px-4 font-mono text-purple-400">$25/sqft</td>
                      <td className="py-3 px-4 font-mono text-purple-400">$40+/sqft</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4">Medical / healthcare</td>
                      <td className="py-3 px-4 font-mono text-red-400">$25/sqft</td>
                      <td className="py-3 px-4 font-mono text-red-400">$40/sqft</td>
                      <td className="py-3 px-4 font-mono text-red-400">$65+/sqft</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="bg-amber-900/30 rounded-xl p-6 my-6">
                <h4 className="font-semibold text-amber-400 mb-3">Important Note on Pricing</h4>
                <p className="text-white/70 text-sm">
                  These figures represent 2025-2026 national averages and include both rough-in and trim-out phases. Actual costs depend heavily on local labor rates, material pricing, code jurisdiction, and project-specific requirements. Always perform a detailed <Link href="/blog/electrical-estimating-contractors" className="text-amber-400 underline hover:text-amber-300">electrical estimate</Link> based on the actual scope of work rather than relying solely on square-footage multipliers.
                </p>
              </div>

              <div className="bg-white/5 rounded-xl p-6 my-6">
                <h4 className="font-semibold text-cyan-400 mb-3">Quick Reference: Total Project Cost Examples</h4>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                  <div>
                    <p className="text-2xl font-bold text-green-400">$25K</p>
                    <p className="text-white/60 text-sm">2,500 sqft tract home at $10/sqft</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-green-400">$62K</p>
                    <p className="text-white/60 text-sm">3,500 sqft custom home at $18/sqft</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-blue-400">$180K</p>
                    <p className="text-white/60 text-sm">10,000 sqft office at $18/sqft</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-purple-400">$350K</p>
                    <p className="text-white/60 text-sm">25,000 sqft warehouse at $14/sqft</p>
                  </div>
                </div>
              </div>
            </section>

            <section id="factors-affecting-cost" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Factors Affecting Electrical Cost</h2>
              <p className="text-white/80 mb-4">
                The per-square-foot cost of electrical work is influenced by dozens of variables. Understanding these factors helps you explain pricing to customers, identify cost drivers in your bids, and avoid leaving money on the table or underbidding complex projects.
              </p>

              <div className="grid md:grid-cols-2 gap-4 my-6">
                <div className="bg-amber-900/20 rounded-xl p-6 border border-amber-500/20">
                  <h3 className="font-semibold text-amber-400 mb-3">Building Complexity</h3>
                  <ul className="text-white/60 text-sm space-y-1">
                    <li><strong>Multi-story buildings:</strong> Cost increases 10-20% per floor due to vertical runs</li>
                    <li><strong>Open floor plans:</strong> Fewer walls mean longer home runs to the panel</li>
                    <li><strong>High ceilings:</strong> Require scaffolding and longer conduit/wire runs</li>
                    <li><strong>Finished basements:</strong> Add $3-$6/sqft for the basement area</li>
                    <li><strong>Architectural features:</strong> Tray ceilings, soffits, and recesses add complexity</li>
                  </ul>
                </div>
                <div className="bg-amber-900/20 rounded-xl p-6 border border-amber-500/20">
                  <h3 className="font-semibold text-amber-400 mb-3">Code Requirements</h3>
                  <ul className="text-white/60 text-sm space-y-1">
                    <li><strong>AFCI/GFCI:</strong> NEC requirements for arc-fault and ground-fault protection</li>
                    <li><strong>Tamper-resistant receptacles:</strong> Required in all residential dwelling units</li>
                    <li><strong>Energy code:</strong> Lighting controls, occupancy sensors per IECC/ASHRAE</li>
                    <li><strong>EV readiness:</strong> Some jurisdictions require EV charging infrastructure</li>
                    <li><strong>Solar readiness:</strong> Conduit and panel space for future PV systems</li>
                  </ul>
                </div>
                <div className="bg-amber-900/20 rounded-xl p-6 border border-amber-500/20">
                  <h3 className="font-semibold text-amber-400 mb-3">Service &amp; Panel Sizing</h3>
                  <ul className="text-white/60 text-sm space-y-1">
                    <li><strong>200A vs 400A service:</strong> 400A service can add $3,000-$6,000</li>
                    <li><strong>Sub-panels:</strong> Each sub-panel adds $800-$2,500 installed</li>
                    <li><strong>Three-phase power:</strong> Commercial 3-phase adds 15-25% over single-phase</li>
                    <li><strong>Generator/transfer switch:</strong> Adds $2,500-$8,000+ to the project</li>
                    <li><strong>Meter configuration:</strong> CT cabinets and multi-meter setups cost more</li>
                  </ul>
                </div>
                <div className="bg-amber-900/20 rounded-xl p-6 border border-amber-500/20">
                  <h3 className="font-semibold text-amber-400 mb-3">Fixture &amp; Device Density</h3>
                  <ul className="text-white/60 text-sm space-y-1">
                    <li><strong>Receptacle count:</strong> More outlets = more circuits, wire, and labor</li>
                    <li><strong>Dedicated circuits:</strong> Kitchen, bath, garage, and outdoor circuits add up</li>
                    <li><strong>Lighting fixture count:</strong> Recessed cans vs. simple fixtures affect price</li>
                    <li><strong>Smart home wiring:</strong> Low-voltage runs for audio, security, networking</li>
                    <li><strong>Specialty loads:</strong> Hot tubs, saunas, electric vehicle chargers</li>
                  </ul>
                </div>
              </div>

              <div className="bg-white/5 rounded-xl p-6 my-6">
                <h4 className="font-semibold text-white mb-3">Rule of Thumb: Outlet Density Impact</h4>
                <p className="text-white/70 mb-3">
                  A typical residential room has roughly one receptacle per 12 linear feet of wall (NEC 210.52 requirement). But the actual density in kitchens, home offices, and media rooms can be 2-3x higher, significantly impacting cost. For a more precise estimate, count the actual devices on the <Link href="/blog/electrical-blueprint-takeoff-guide" className="text-amber-400 underline hover:text-amber-300">blueprint takeoff</Link> rather than estimating by square footage alone.
                </p>
              </div>
            </section>

            <section id="material-breakdown" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Material Cost Breakdown</h2>
              <p className="text-white/80 mb-4">
                Materials typically account for <strong>35-45% of the total electrical cost</strong> in new construction. The specific material split depends on the wiring methods used, fixture selection, and whether the contractor or owner is supplying fixtures and devices.
              </p>

              <div className="overflow-x-auto my-6">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-white/20">
                      <th className="text-left py-3 px-4 text-white/60">Material Category</th>
                      <th className="text-left py-3 px-4 text-white/60">% of Material Cost</th>
                      <th className="text-left py-3 px-4 text-white/60">Typical Cost (2,500 sqft home)</th>
                    </tr>
                  </thead>
                  <tbody className="text-white/80">
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">Wire &amp; cable (NM-B, THHN, etc.)</td>
                      <td className="py-3 px-4 font-mono text-cyan-400">30-35%</td>
                      <td className="py-3 px-4 font-mono text-cyan-400">$2,800-$3,800</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">Panel, breakers, &amp; service equipment</td>
                      <td className="py-3 px-4 font-mono text-cyan-400">18-22%</td>
                      <td className="py-3 px-4 font-mono text-cyan-400">$1,800-$2,400</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">Boxes, connectors, &amp; fittings</td>
                      <td className="py-3 px-4 font-mono text-cyan-400">10-14%</td>
                      <td className="py-3 px-4 font-mono text-cyan-400">$1,000-$1,500</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">Devices (receptacles, switches, plates)</td>
                      <td className="py-3 px-4 font-mono text-cyan-400">8-12%</td>
                      <td className="py-3 px-4 font-mono text-cyan-400">$800-$1,300</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">Light fixtures (if contractor-supplied)</td>
                      <td className="py-3 px-4 font-mono text-cyan-400">15-25%</td>
                      <td className="py-3 px-4 font-mono text-cyan-400">$1,500-$2,800</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">Conduit &amp; raceway (if required)</td>
                      <td className="py-3 px-4 font-mono text-cyan-400">0-10%</td>
                      <td className="py-3 px-4 font-mono text-cyan-400">$0-$1,200</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4">Miscellaneous (staples, tape, screws, etc.)</td>
                      <td className="py-3 px-4 font-mono text-cyan-400">3-5%</td>
                      <td className="py-3 px-4 font-mono text-cyan-400">$300-$500</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="grid md:grid-cols-2 gap-6 my-6">
                <div className="bg-white/5 rounded-xl p-6">
                  <h3 className="font-semibold text-green-400 mb-3">Copper Wire Pricing Factors</h3>
                  <p className="text-white/70 text-sm mb-2">
                    Copper is the single largest material expense. Prices fluctuate with the commodity market and can swing 15-25% within a single year.
                  </p>
                  <ul className="text-white/60 text-sm space-y-1">
                    <li><strong>14/2 NM-B:</strong> $0.35-$0.55/ft (general lighting circuits)</li>
                    <li><strong>12/2 NM-B:</strong> $0.45-$0.70/ft (20A receptacle circuits)</li>
                    <li><strong>10/2 NM-B:</strong> $0.80-$1.20/ft (dryers, water heaters)</li>
                    <li><strong>6/3 NM-B:</strong> $2.50-$3.50/ft (ranges, cooktops)</li>
                    <li><strong>2/0 SER:</strong> $4.00-$6.00/ft (service entrance)</li>
                  </ul>
                </div>
                <div className="bg-white/5 rounded-xl p-6">
                  <h3 className="font-semibold text-blue-400 mb-3">Commercial Material Differences</h3>
                  <p className="text-white/70 text-sm mb-2">
                    Commercial projects use different wiring methods that affect material costs significantly.
                  </p>
                  <ul className="text-white/60 text-sm space-y-1">
                    <li><strong>EMT conduit:</strong> $0.50-$1.50/ft (1/2&quot; to 2&quot;)</li>
                    <li><strong>MC cable:</strong> $1.00-$3.00/ft (common alternative to conduit)</li>
                    <li><strong>Commercial panels:</strong> $2,000-$8,000 per panel</li>
                    <li><strong>Fire alarm wire:</strong> $0.30-$0.60/ft</li>
                    <li><strong>Lighting control systems:</strong> $2-$5/sqft additional</li>
                  </ul>
                </div>
              </div>

              <div className="bg-orange-900/30 rounded-xl p-6 my-6">
                <h4 className="font-semibold text-orange-400 mb-3">Material Price Volatility Warning</h4>
                <p className="text-white/70 text-sm">
                  Copper, steel (conduit and boxes), and PVC prices have experienced significant volatility since 2020. Always use <strong>current supplier pricing</strong> when preparing bids. Many contractors include a material escalation clause in contracts longer than 90 days to protect against price increases. Lock in material pricing with your distributor whenever possible before submitting a bid.
                </p>
              </div>
            </section>

            <section id="labor-costs" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Labor Cost Considerations</h2>
              <p className="text-white/80 mb-4">
                Labor represents <strong>55-65% of the total electrical cost</strong> in new construction, making it the single largest cost component. Labor rates vary widely by region, union vs. non-union, and the experience level of the crew. Accurate labor estimating is the difference between a profitable job and one that loses money.
              </p>

              <div className="overflow-x-auto my-6">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-white/20">
                      <th className="text-left py-3 px-4 text-white/60">Labor Category</th>
                      <th className="text-left py-3 px-4 text-white/60">Hourly Rate (Non-Union)</th>
                      <th className="text-left py-3 px-4 text-white/60">Hourly Rate (Union)</th>
                      <th className="text-left py-3 px-4 text-white/60">Burdened Rate</th>
                    </tr>
                  </thead>
                  <tbody className="text-white/80">
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">Apprentice (1st-2nd year)</td>
                      <td className="py-3 px-4 font-mono text-green-400">$16-$22/hr</td>
                      <td className="py-3 px-4 font-mono text-blue-400">$22-$32/hr</td>
                      <td className="py-3 px-4 font-mono text-amber-400">$28-$52/hr</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">Apprentice (3rd-4th year)</td>
                      <td className="py-3 px-4 font-mono text-green-400">$22-$30/hr</td>
                      <td className="py-3 px-4 font-mono text-blue-400">$30-$42/hr</td>
                      <td className="py-3 px-4 font-mono text-amber-400">$38-$68/hr</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">Journeyman electrician</td>
                      <td className="py-3 px-4 font-mono text-green-400">$28-$42/hr</td>
                      <td className="py-3 px-4 font-mono text-blue-400">$45-$75/hr</td>
                      <td className="py-3 px-4 font-mono text-amber-400">$55-$120/hr</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4">Foreman / lead</td>
                      <td className="py-3 px-4 font-mono text-green-400">$35-$50/hr</td>
                      <td className="py-3 px-4 font-mono text-blue-400">$52-$85/hr</td>
                      <td className="py-3 px-4 font-mono text-amber-400">$65-$135/hr</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="bg-white/5 rounded-xl p-6 my-6">
                <h4 className="font-semibold text-white mb-3">Understanding Burdened Labor Rates</h4>
                <p className="text-white/70 mb-3">
                  The <strong>burdened rate</strong> is the true cost of having an employee on the job. It includes the base wage plus all employer-paid costs:
                </p>
                <ul className="text-white/70 space-y-1 text-sm">
                  <li><strong>FICA / Social Security &amp; Medicare:</strong> 7.65% of wages</li>
                  <li><strong>Workers&apos; compensation insurance:</strong> 8-20% (varies by state and classification)</li>
                  <li><strong>General liability insurance:</strong> 3-8%</li>
                  <li><strong>Health insurance / benefits:</strong> $4-$15/hr per employee</li>
                  <li><strong>Unemployment taxes (FUTA/SUTA):</strong> 2-6%</li>
                  <li><strong>Vacation / holiday / sick pay:</strong> 5-10%</li>
                  <li><strong>Retirement / pension contributions:</strong> 3-15% (higher for union shops)</li>
                  <li><strong>Small tools &amp; consumables:</strong> 2-4%</li>
                </ul>
                <p className="text-white/60 text-sm mt-3">
                  A common rule of thumb: the burdened rate is <strong>1.5x to 1.8x</strong> the base hourly wage for non-union shops, and <strong>1.6x to 2.0x</strong> for union shops.
                </p>
              </div>

              <h3 className="text-xl font-display font-semibold mb-3 text-cyan-400">Labor Productivity Factors</h3>
              <div className="grid md:grid-cols-2 gap-4 my-6">
                <div className="bg-green-900/20 rounded-xl p-4 border border-green-500/20">
                  <p className="font-semibold text-green-400 mb-1">Increase Productivity</p>
                  <ul className="text-white/60 text-sm space-y-1">
                    <li>Pre-fabrication of assemblies in the shop</li>
                    <li>Organized material staging and delivery</li>
                    <li>Clear, complete blueprints and specifications</li>
                    <li>Consistent crew with experienced foreman</li>
                    <li>Power tools and proper equipment on site</li>
                  </ul>
                </div>
                <div className="bg-red-900/20 rounded-xl p-4 border border-red-500/20">
                  <p className="font-semibold text-red-400 mb-1">Decrease Productivity</p>
                  <ul className="text-white/60 text-sm space-y-1">
                    <li>Excessive change orders and rework</li>
                    <li>Poor coordination with other trades</li>
                    <li>Working in occupied or congested spaces</li>
                    <li>Overtime (efficiency drops 15-25% after 8 hours)</li>
                    <li>Extreme temperatures and weather conditions</li>
                  </ul>
                </div>
              </div>
            </section>

            <section id="residential-pricing" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Residential New Construction Pricing</h2>
              <p className="text-white/80 mb-4">
                Residential electrical work in new construction is typically divided into two phases: <strong>rough-in</strong> (before drywall) and <strong>trim-out</strong> (after drywall and paint). Some contractors bid these as a single package, while others price them separately.
              </p>

              <div className="grid md:grid-cols-2 gap-6 my-6">
                <div className="bg-white/5 rounded-xl p-6 border border-amber-500/20">
                  <h3 className="font-semibold text-amber-400 mb-3">Rough-In Phase (55-65% of total)</h3>
                  <p className="text-white/70 text-sm mb-3">Typically $4-$9 per square foot</p>
                  <ul className="text-white/60 text-sm space-y-1">
                    <li>Install service entrance and main panel</li>
                    <li>Run all branch circuit wiring (NM-B cable)</li>
                    <li>Set all electrical boxes (receptacle, switch, junction)</li>
                    <li>Install dedicated circuits (kitchen, bath, laundry, HVAC)</li>
                    <li>Pull wires for smoke/CO detectors</li>
                    <li>Run low-voltage wiring (cable, data, security)</li>
                    <li>Install recessed light housings</li>
                    <li>Coordinate with HVAC, plumbing, and framing</li>
                    <li>Schedule and pass rough-in inspection</li>
                  </ul>
                </div>
                <div className="bg-white/5 rounded-xl p-6 border border-cyan-500/20">
                  <h3 className="font-semibold text-cyan-400 mb-3">Trim-Out Phase (35-45% of total)</h3>
                  <p className="text-white/70 text-sm mb-3">Typically $3-$6 per square foot</p>
                  <ul className="text-white/60 text-sm space-y-1">
                    <li>Install all receptacles, switches, and cover plates</li>
                    <li>Hang and connect all light fixtures</li>
                    <li>Install ceiling fans</li>
                    <li>Connect appliances (range, dishwasher, disposal)</li>
                    <li>Install GFCI and AFCI devices</li>
                    <li>Connect smoke/CO detectors</li>
                    <li>Install panel covers and circuit directory</li>
                    <li>Test all circuits and devices</li>
                    <li>Schedule and pass final inspection</li>
                  </ul>
                </div>
              </div>

              <h3 className="text-xl font-display font-semibold mb-3 text-cyan-400">Residential Pricing by Home Size</h3>
              <div className="overflow-x-auto my-6">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-white/20">
                      <th className="text-left py-3 px-4 text-white/60">Home Size</th>
                      <th className="text-left py-3 px-4 text-white/60">Typical Circuits</th>
                      <th className="text-left py-3 px-4 text-white/60">Devices</th>
                      <th className="text-left py-3 px-4 text-white/60">Estimated Total</th>
                    </tr>
                  </thead>
                  <tbody className="text-white/80">
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">1,200 sqft (small)</td>
                      <td className="py-3 px-4 font-mono">18-24</td>
                      <td className="py-3 px-4 font-mono">60-80</td>
                      <td className="py-3 px-4 font-mono text-green-400">$10,000-$16,000</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">2,000 sqft (average)</td>
                      <td className="py-3 px-4 font-mono">28-36</td>
                      <td className="py-3 px-4 font-mono">90-120</td>
                      <td className="py-3 px-4 font-mono text-green-400">$18,000-$28,000</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">3,000 sqft (large)</td>
                      <td className="py-3 px-4 font-mono">36-48</td>
                      <td className="py-3 px-4 font-mono">130-170</td>
                      <td className="py-3 px-4 font-mono text-green-400">$27,000-$42,000</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4">5,000+ sqft (luxury)</td>
                      <td className="py-3 px-4 font-mono">60-80+</td>
                      <td className="py-3 px-4 font-mono">200-300+</td>
                      <td className="py-3 px-4 font-mono text-green-400">$60,000-$125,000+</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="bg-purple-900/30 rounded-xl p-6 my-6">
                <h4 className="font-semibold text-purple-400 mb-3">Common Residential Add-Ons That Increase Cost</h4>
                <ul className="text-white/70 space-y-2 text-sm">
                  <li><strong>Whole-house surge protection:</strong> $300-$600 installed</li>
                  <li><strong>Whole-house generator with ATS:</strong> $8,000-$20,000+</li>
                  <li><strong>EV charger circuit (50A/240V):</strong> $500-$1,500</li>
                  <li><strong>Smart home wiring package:</strong> $2,000-$8,000</li>
                  <li><strong>Landscape lighting circuits:</strong> $1,000-$3,000</li>
                  <li><strong>Hot tub/spa circuit:</strong> $800-$2,000</li>
                  <li><strong>Home theater pre-wire:</strong> $1,500-$4,000</li>
                  <li><strong>Solar-ready conduit and panel space:</strong> $500-$1,200</li>
                </ul>
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

            <section id="commercial-pricing" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Commercial &amp; Industrial Pricing Differences</h2>
              <p className="text-white/80 mb-4">
                Commercial and industrial electrical work costs more per square foot than residential for several reasons: stricter code requirements, commercial-grade wiring methods (conduit instead of Romex), three-phase power systems, more complex lighting controls, and higher labor rates in the commercial sector.
              </p>

              <div className="grid md:grid-cols-3 gap-4 my-6">
                <div className="bg-green-900/20 rounded-xl p-6 border border-green-500/20">
                  <h3 className="font-semibold text-green-400 mb-3">Residential</h3>
                  <p className="text-3xl font-bold text-green-400 mb-2">$7-$15</p>
                  <p className="text-white/60 text-sm mb-3">per square foot</p>
                  <ul className="text-white/60 text-sm space-y-1">
                    <li>NM-B (Romex) wiring</li>
                    <li>Single-phase 120/240V</li>
                    <li>Standard devices and fixtures</li>
                    <li>Basic switching and controls</li>
                    <li>Residential-grade panels</li>
                  </ul>
                </div>
                <div className="bg-blue-900/20 rounded-xl p-6 border border-blue-500/20">
                  <h3 className="font-semibold text-blue-400 mb-3">Commercial</h3>
                  <p className="text-3xl font-bold text-blue-400 mb-2">$12-$28</p>
                  <p className="text-white/60 text-sm mb-3">per square foot</p>
                  <ul className="text-white/60 text-sm space-y-1">
                    <li>EMT/MC cable wiring methods</li>
                    <li>Three-phase 120/208V or 277/480V</li>
                    <li>Commercial-grade equipment</li>
                    <li>Lighting control systems</li>
                    <li>Fire alarm and life safety</li>
                  </ul>
                </div>
                <div className="bg-purple-900/20 rounded-xl p-6 border border-purple-500/20">
                  <h3 className="font-semibold text-purple-400 mb-3">Industrial</h3>
                  <p className="text-3xl font-bold text-purple-400 mb-2">$15-$40</p>
                  <p className="text-white/60 text-sm mb-3">per square foot</p>
                  <ul className="text-white/60 text-sm space-y-1">
                    <li>Rigid conduit / cable tray</li>
                    <li>Medium voltage distribution</li>
                    <li>Motor control centers</li>
                    <li>Process controls and PLC wiring</li>
                    <li>Explosion-proof in classified areas</li>
                  </ul>
                </div>
              </div>

              <h3 className="text-xl font-display font-semibold mb-3 text-cyan-400">Why Commercial Costs More</h3>
              <div className="space-y-4 my-6">
                <div className="bg-white/5 rounded-xl p-4 flex items-start gap-4">
                  <span className="bg-blue-600 text-white text-sm font-bold px-3 py-1 rounded-full">1</span>
                  <div>
                    <p className="font-semibold text-white">Wiring Methods</p>
                    <p className="text-white/60 text-sm">Commercial buildings require conduit (EMT, rigid, IMC) or MC cable rather than NM-B. Conduit installation takes 3-5x longer per foot than pulling Romex through residential framing. Material costs are also 2-4x higher.</p>
                  </div>
                </div>
                <div className="bg-white/5 rounded-xl p-4 flex items-start gap-4">
                  <span className="bg-blue-600 text-white text-sm font-bold px-3 py-1 rounded-full">2</span>
                  <div>
                    <p className="font-semibold text-white">Lighting Controls &amp; Energy Code</p>
                    <p className="text-white/60 text-sm">Commercial buildings must meet ASHRAE 90.1 or IECC energy code requirements including automatic shutoff, daylight harvesting, occupancy/vacancy sensors, and demand response capabilities. These controls add $2-$5/sqft.</p>
                  </div>
                </div>
                <div className="bg-white/5 rounded-xl p-4 flex items-start gap-4">
                  <span className="bg-blue-600 text-white text-sm font-bold px-3 py-1 rounded-full">3</span>
                  <div>
                    <p className="font-semibold text-white">Life Safety Systems</p>
                    <p className="text-white/60 text-sm">Fire alarm, emergency lighting, exit signs, and emergency generator systems are required in most commercial occupancies. These systems add $1-$4/sqft depending on building size and occupancy type.</p>
                  </div>
                </div>
                <div className="bg-white/5 rounded-xl p-4 flex items-start gap-4">
                  <span className="bg-blue-600 text-white text-sm font-bold px-3 py-1 rounded-full">4</span>
                  <div>
                    <p className="font-semibold text-white">Higher Labor Rates</p>
                    <p className="text-white/60 text-sm">Commercial work often requires union labor, prevailing wage compliance, or specialty certifications. The burdened labor rate for commercial work is typically 30-60% higher than residential rates in the same market.</p>
                  </div>
                </div>
              </div>

              <div className="bg-white/5 rounded-xl p-6 my-6">
                <h4 className="font-semibold text-white mb-3">Specialty Commercial Spaces</h4>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-white/20">
                        <th className="text-left py-2 px-3 text-white/60">Space Type</th>
                        <th className="text-left py-2 px-3 text-white/60">Cost/sqft</th>
                        <th className="text-left py-2 px-3 text-white/60">Key Cost Drivers</th>
                      </tr>
                    </thead>
                    <tbody className="text-white/80">
                      <tr className="border-b border-white/10">
                        <td className="py-2 px-3">Commercial kitchen</td>
                        <td className="py-2 px-3 font-mono text-amber-400">$30-$50/sqft</td>
                        <td className="py-2 px-3 text-white/60">High-amperage equipment circuits, exhaust controls, GFCI requirements</td>
                      </tr>
                      <tr className="border-b border-white/10">
                        <td className="py-2 px-3">Data center</td>
                        <td className="py-2 px-3 font-mono text-amber-400">$50-$100+/sqft</td>
                        <td className="py-2 px-3 text-white/60">Redundant power, UPS systems, PDUs, raised floor distribution</td>
                      </tr>
                      <tr className="border-b border-white/10">
                        <td className="py-2 px-3">Operating room</td>
                        <td className="py-2 px-3 font-mono text-amber-400">$80-$150/sqft</td>
                        <td className="py-2 px-3 text-white/60">Isolated power systems, emergency power, critical branch circuits</td>
                      </tr>
                      <tr>
                        <td className="py-2 px-3">Clean room</td>
                        <td className="py-2 px-3 font-mono text-amber-400">$40-$80/sqft</td>
                        <td className="py-2 px-3 text-white/60">Sealed conduit, HEPA controls, specialty lighting, clean protocols</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </section>

            <section id="how-to-estimate" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">How to Estimate Electrical Work</h2>
              <p className="text-white/80 mb-4">
                While cost-per-square-foot is useful for ballpark estimates and budget checks, profitable electrical contractors use detailed estimating methods for actual bids. Here is the standard process for building an accurate electrical estimate:
              </p>

              <div className="space-y-4 my-6">
                <div className="bg-white/5 rounded-xl p-6 border-l-4 border-amber-500">
                  <h4 className="font-semibold text-amber-400 mb-2">Step 1: Blueprint Review &amp; Takeoff</h4>
                  <p className="text-white/70 text-sm">
                    Start with a thorough review of the electrical plans, specifications, and schedule. Perform a detailed <Link href="/blog/electrical-blueprint-takeoff-guide" className="text-amber-400 underline hover:text-amber-300">blueprint takeoff</Link> counting every device, fixture, panel, circuit, and special system. Measure all conduit and wire runs. Nothing kills profitability faster than missed scope.
                  </p>
                </div>

                <div className="bg-white/5 rounded-xl p-6 border-l-4 border-amber-500">
                  <h4 className="font-semibold text-amber-400 mb-2">Step 2: Material Pricing</h4>
                  <p className="text-white/70 text-sm">
                    Get current pricing from your electrical distributor for all materials. Use job-specific quotes rather than catalog pricing. Factor in waste allowance (typically 5-10% for wire, 3-5% for conduit, and 5-8% for fittings). Include freight and delivery costs.
                  </p>
                </div>

                <div className="bg-white/5 rounded-xl p-6 border-l-4 border-amber-500">
                  <h4 className="font-semibold text-amber-400 mb-2">Step 3: Labor Hours Estimate</h4>
                  <p className="text-white/70 text-sm">
                    Assign labor units (hours) to every item in your takeoff. Use your own historical production rates if available, or reference industry labor databases (NECA Manual of Labor Units, RS Means, Accubid). Adjust for site conditions, building complexity, and crew capabilities.
                  </p>
                </div>

                <div className="bg-white/5 rounded-xl p-6 border-l-4 border-amber-500">
                  <h4 className="font-semibold text-amber-400 mb-2">Step 4: Apply Labor Rates</h4>
                  <p className="text-white/70 text-sm">
                    Multiply labor hours by your burdened labor rate. Account for crew mix (ratio of journeymen to apprentices), overtime requirements, and any premium time. Include supervision costs if a working foreman or project manager is required.
                  </p>
                </div>

                <div className="bg-white/5 rounded-xl p-6 border-l-4 border-amber-500">
                  <h4 className="font-semibold text-amber-400 mb-2">Step 5: Add Overhead &amp; Profit</h4>
                  <p className="text-white/70 text-sm">
                    Add your company overhead (office expenses, vehicles, insurance, tools, estimating time) and profit margin. Typical overhead runs 10-20% and profit margins range from 8-15% depending on the market and competition. Never cut your margin below your actual cost of doing business.
                  </p>
                </div>

                <div className="bg-white/5 rounded-xl p-6 border-l-4 border-amber-500">
                  <h4 className="font-semibold text-amber-400 mb-2">Step 6: Sanity Check with Square Footage</h4>
                  <p className="text-white/70 text-sm">
                    After completing your detailed estimate, divide the total by the building square footage and compare against the ranges in this guide. If your number is significantly above or below the expected range, review your takeoff for missed items or over-counting before submitting.
                  </p>
                </div>
              </div>

              <div className="bg-cyan-900/30 rounded-xl p-6 my-6">
                <h4 className="font-semibold text-cyan-400 mb-3">Estimate Formula Quick Reference</h4>
                <div className="bg-black/30 rounded-lg p-4 font-mono text-sm text-white/80">
                  <p>Total Bid = (Material Cost + Waste) + (Labor Hours x Burdened Rate) + Overhead + Profit</p>
                  <p className="mt-2 text-white/50">Where:</p>
                  <p className="text-white/50">  Waste = Material Cost x 5-10%</p>
                  <p className="text-white/50">  Overhead = (Material + Labor) x 10-20%</p>
                  <p className="text-white/50">  Profit = Subtotal x 8-15%</p>
                </div>
              </div>
            </section>

            <section id="cost-saving-tips" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Cost-Saving Tips for Contractors</h2>
              <p className="text-white/80 mb-4">
                Improving profitability is not just about charging more. It is about reducing waste, improving efficiency, and making smarter decisions on materials and crew management. These strategies can save 10-20% on your total job costs without sacrificing quality.
              </p>

              <div className="space-y-4 my-6">
                <div className="bg-green-900/20 rounded-xl p-6 border border-green-500/20">
                  <h3 className="font-semibold text-green-400 mb-2">1. Pre-Fabricate Assemblies</h3>
                  <p className="text-white/70 text-sm">
                    Build panel whips, fixture whips, conduit runs, and junction box assemblies in your shop where labor is more efficient and conditions are controlled. Pre-fab can reduce field installation time by 20-40% on repetitive assemblies. This is especially effective on multi-unit residential and commercial projects.
                  </p>
                </div>

                <div className="bg-green-900/20 rounded-xl p-6 border border-green-500/20">
                  <h3 className="font-semibold text-green-400 mb-2">2. Optimize Material Ordering</h3>
                  <p className="text-white/70 text-sm">
                    Consolidate material orders to maximize volume discounts. Schedule deliveries to avoid double-handling on site. Return unused materials promptly for credit. Negotiate annual pricing agreements with your distributor if you have consistent volume.
                  </p>
                </div>

                <div className="bg-green-900/20 rounded-xl p-6 border border-green-500/20">
                  <h3 className="font-semibold text-green-400 mb-2">3. Crew Mix Optimization</h3>
                  <p className="text-white/70 text-sm">
                    Not every task requires a journeyman. Use apprentices for material handling, box installation, wire pulling, and other tasks appropriate to their skill level. A typical residential crew of one journeyman and one apprentice can rough-in 200-300 sqft per day.
                  </p>
                </div>

                <div className="bg-green-900/20 rounded-xl p-6 border border-green-500/20">
                  <h3 className="font-semibold text-green-400 mb-2">4. Schedule Coordination</h3>
                  <p className="text-white/70 text-sm">
                    Poor scheduling costs money through idle time, return trips, and rework. Coordinate rough-in with framing completion and before insulation. Coordinate trim-out after paint. Avoid stacking trades in the same space at the same time.
                  </p>
                </div>

                <div className="bg-green-900/20 rounded-xl p-6 border border-green-500/20">
                  <h3 className="font-semibold text-green-400 mb-2">5. Track Your Actual Costs</h3>
                  <p className="text-white/70 text-sm">
                    Keep detailed job cost records comparing estimated vs. actual hours and materials for every project. Over time, this data becomes your most valuable estimating tool. You will identify where you consistently over- or under-estimate and adjust your future bids accordingly.
                  </p>
                </div>

                <div className="bg-green-900/20 rounded-xl p-6 border border-green-500/20">
                  <h3 className="font-semibold text-green-400 mb-2">6. Value Engineering Suggestions</h3>
                  <p className="text-white/70 text-sm">
                    Offer the builder or owner cost-saving alternatives that maintain code compliance: fewer recessed lights in favor of surface fixtures, standard-grade devices instead of decorator, optimized circuit layouts that reduce home run lengths, and combined circuits where code allows.
                  </p>
                </div>
              </div>
            </section>

            <section id="regional-variations" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Regional Price Variations</h2>
              <p className="text-white/80 mb-4">
                Electrical construction costs vary significantly by region due to differences in labor rates, material availability, code requirements, cost of living, and whether the local market is union or open-shop dominated. Understanding regional factors is critical when bidding work in an unfamiliar market.
              </p>

              <div className="overflow-x-auto my-6">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-white/20">
                      <th className="text-left py-3 px-4 text-white/60">Region</th>
                      <th className="text-left py-3 px-4 text-white/60">Cost Factor</th>
                      <th className="text-left py-3 px-4 text-white/60">Residential $/sqft</th>
                      <th className="text-left py-3 px-4 text-white/60">Key Drivers</th>
                    </tr>
                  </thead>
                  <tbody className="text-white/80">
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">Northeast (NYC, Boston)</td>
                      <td className="py-3 px-4 font-mono text-red-400">1.3-1.6x</td>
                      <td className="py-3 px-4 font-mono">$12-$22</td>
                      <td className="py-3 px-4 text-white/60 text-xs">Union labor, high cost of living, strict codes</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">West Coast (CA, WA, OR)</td>
                      <td className="py-3 px-4 font-mono text-orange-400">1.2-1.5x</td>
                      <td className="py-3 px-4 font-mono">$11-$20</td>
                      <td className="py-3 px-4 text-white/60 text-xs">Prevailing wage, Title 24, seismic requirements</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">Midwest (Chicago, Detroit)</td>
                      <td className="py-3 px-4 font-mono text-yellow-400">1.0-1.3x</td>
                      <td className="py-3 px-4 font-mono">$8-$15</td>
                      <td className="py-3 px-4 text-white/60 text-xs">Mixed union/open shop, moderate cost of living</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">Southeast (FL, GA, NC)</td>
                      <td className="py-3 px-4 font-mono text-green-400">0.8-1.0x</td>
                      <td className="py-3 px-4 font-mono">$7-$13</td>
                      <td className="py-3 px-4 text-white/60 text-xs">Open shop dominant, lower cost of living, less regulation</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">Southwest (TX, AZ, NV)</td>
                      <td className="py-3 px-4 font-mono text-green-400">0.8-1.1x</td>
                      <td className="py-3 px-4 font-mono">$7-$14</td>
                      <td className="py-3 px-4 text-white/60 text-xs">Open shop, rapid growth, competitive market</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4">Rural areas (national avg)</td>
                      <td className="py-3 px-4 font-mono text-green-400">0.7-0.9x</td>
                      <td className="py-3 px-4 font-mono">$6-$11</td>
                      <td className="py-3 px-4 text-white/60 text-xs">Lower labor rates, but longer material delivery times</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="grid md:grid-cols-2 gap-6 my-6">
                <div className="bg-white/5 rounded-xl p-6">
                  <h3 className="font-semibold text-red-400 mb-3">Highest Cost Markets</h3>
                  <ul className="text-white/60 text-sm space-y-2">
                    <li><strong>New York City:</strong> $18-$30/sqft residential, union required on most projects, conduit required in most jurisdictions</li>
                    <li><strong>San Francisco:</strong> $16-$25/sqft, Title 24 energy code, seismic requirements, high permit costs</li>
                    <li><strong>Hawaii:</strong> $15-$28/sqft, island premium on materials (20-40% above mainland)</li>
                  </ul>
                </div>
                <div className="bg-white/5 rounded-xl p-6">
                  <h3 className="font-semibold text-green-400 mb-3">Lowest Cost Markets</h3>
                  <ul className="text-white/60 text-sm space-y-2">
                    <li><strong>Rural Southeast:</strong> $6-$10/sqft, open shop, minimal additional local codes beyond NEC</li>
                    <li><strong>Rural Midwest:</strong> $6-$11/sqft, competitive market, moderate regulation</li>
                    <li><strong>West Texas:</strong> $6-$10/sqft, rapid construction pace, open shop market</li>
                  </ul>
                </div>
              </div>

              <div className="bg-blue-900/30 rounded-xl p-6 my-6">
                <h4 className="font-semibold text-blue-400 mb-3">Adjusting for Your Market</h4>
                <p className="text-white/70 text-sm">
                  To adapt national averages to your local market: (1) check your state&apos;s prevailing wage requirements for public work, (2) verify local code amendments that may exceed the NEC, (3) confirm whether union or open-shop labor rates apply, and (4) get current material pricing from your local distributor. The RS Means City Cost Index published annually provides location adjustment factors for every major U.S. metro area.
                </p>
              </div>
            </section>

            <section id="faq" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Frequently Asked Questions</h2>

              <div className="space-y-6">
                <div className="bg-white/5 rounded-xl p-6">
                  <h3 className="font-semibold text-white mb-2">How much does it cost to wire a new 2,000 square foot house?</h3>
                  <p className="text-white/70 text-sm">
                    A typical 2,000 sqft new construction home costs <strong>$18,000-$28,000</strong> for complete electrical including rough-in, trim-out, service entrance, panel, and all circuits. This assumes standard construction with a 200A service, approximately 30 circuits, and builder-grade fixtures and devices. Custom homes with high-end fixtures, smart home systems, or extensive low-voltage wiring will be at the higher end or above this range.
                  </p>
                </div>

                <div className="bg-white/5 rounded-xl p-6">
                  <h3 className="font-semibold text-white mb-2">What is included in the rough-in cost?</h3>
                  <p className="text-white/70 text-sm">
                    The rough-in phase includes all work done before drywall: installing the main panel, running all branch circuit wiring, setting all electrical boxes, pulling wire for smoke detectors, installing recessed light cans, running low-voltage wiring (cable, data), and setting any conduit or sleeves. Rough-in typically represents 55-65% of the total electrical cost and runs <strong>$4-$9 per square foot</strong>.
                  </p>
                </div>

                <div className="bg-white/5 rounded-xl p-6">
                  <h3 className="font-semibold text-white mb-2">Why is commercial electrical more expensive than residential?</h3>
                  <p className="text-white/70 text-sm">
                    Commercial electrical costs more because it requires conduit or MC cable wiring methods (3-5x slower to install than Romex), three-phase power systems, commercial-grade equipment, lighting control systems to meet energy codes, fire alarm and life safety systems, and often union or prevailing wage labor rates. The typical commercial office runs <strong>$12-$28/sqft</strong> compared to <strong>$7-$15/sqft</strong> for residential.
                  </p>
                </div>

                <div className="bg-white/5 rounded-xl p-6">
                  <h3 className="font-semibold text-white mb-2">How much do electricians charge per hour for new construction?</h3>
                  <p className="text-white/70 text-sm">
                    Base hourly rates for journeyman electricians range from <strong>$28-$42/hr</strong> (non-union) to <strong>$45-$75/hr</strong> (union), but the burdened rate (including insurance, benefits, taxes, and overhead) typically runs <strong>$55-$120/hr</strong>. Most new construction electrical work is bid as a lump sum or per-square-foot price rather than time-and-material, so hourly rates are used internally for estimating rather than customer billing.
                  </p>
                </div>

                <div className="bg-white/5 rounded-xl p-6">
                  <h3 className="font-semibold text-white mb-2">What percentage of construction cost is electrical?</h3>
                  <p className="text-white/70 text-sm">
                    Electrical work typically represents <strong>8-12% of the total construction cost</strong> for standard residential and commercial buildings. This percentage increases for buildings with high electrical density (data centers, hospitals, laboratories) where electrical can reach 15-25% of the total construction budget. The percentage also increases with higher-end finishes and more complex systems.
                  </p>
                </div>

                <div className="bg-white/5 rounded-xl p-6">
                  <h3 className="font-semibold text-white mb-2">How can I reduce electrical costs in new construction?</h3>
                  <p className="text-white/70 text-sm">
                    Key strategies include: (1) simplify the electrical plan by reducing receptacle and fixture count to code minimums, (2) use standard devices instead of decorator-grade, (3) optimize panel location to minimize home run lengths, (4) combine circuits where NEC allows, (5) have the owner supply fixtures directly, (6) select a contractor who pre-fabricates assemblies, and (7) ensure the electrical plan is finalized before construction starts to minimize change orders.
                  </p>
                </div>

                <div className="bg-white/5 rounded-xl p-6">
                  <h3 className="font-semibold text-white mb-2">Should I get multiple bids for electrical work?</h3>
                  <p className="text-white/70 text-sm">
                    Yes, always get at least <strong>three bids</strong> from licensed electrical contractors for new construction work. Compare bids on an apples-to-apples basis ensuring each contractor is pricing the same scope of work. Be wary of bids that are significantly below the others, as they may be missing scope items, using lower-quality materials, or underbidding to get the job and then making it up on change orders.
                  </p>
                </div>

                <div className="bg-white/5 rounded-xl p-6">
                  <h3 className="font-semibold text-white mb-2">Do electrical costs include the permit and inspection fees?</h3>
                  <p className="text-white/70 text-sm">
                    Most electrical contractors include the <strong>electrical permit fee</strong> in their bid price, as they are responsible for pulling the permit. Permit fees vary by jurisdiction but typically range from $150-$1,000 for residential and $500-$5,000+ for commercial. The rough-in and final inspections are covered by the permit fee. Always confirm with your contractor whether the permit cost is included in their bid.
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
                <Link href="/blog/electrical-estimating-contractors" className="bg-white/5 hover:bg-white/10 rounded-xl p-6 transition-colors">
                  <span className="text-amber-400 text-sm">Calculations</span>
                  <h3 className="font-semibold mt-2">Electrical Estimating for Contractors</h3>
                </Link>
                <Link href="/blog/electrical-blueprint-takeoff-guide" className="bg-white/5 hover:bg-white/10 rounded-xl p-6 transition-colors">
                  <span className="text-amber-400 text-sm">Calculations</span>
                  <h3 className="font-semibold mt-2">Electrical Blueprint Takeoff Guide</h3>
                </Link>
                <Link href="/blog/residential-load-calculations" className="bg-white/5 hover:bg-white/10 rounded-xl p-6 transition-colors">
                  <span className="text-amber-400 text-sm">Calculations</span>
                  <h3 className="font-semibold mt-2">Residential Load Calculations</h3>
                </Link>
                <Link href="/blog/electrical-permit-process-guide" className="bg-white/5 hover:bg-white/10 rounded-xl p-6 transition-colors">
                  <span className="text-purple-400 text-sm">Inspections</span>
                  <h3 className="font-semibold mt-2">Electrical Permit Process Guide</h3>
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
