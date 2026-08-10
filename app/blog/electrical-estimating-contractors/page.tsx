import { Metadata } from "next";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import { BreadcrumbJsonLd, BlogPostingJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Electrical Estimating Guide: How to Bid Jobs & Calculate Material & Labor Costs",
  description: "Complete electrical estimating guide for contractors. Learn the takeoff process, material pricing strategies, labor unit calculations, overhead and profit margins, residential vs commercial bidding, and common estimating mistakes to avoid.",
  keywords: [
    "electrical estimating",
    "electrical bidding",
    "electrical contractor estimating",
    "material takeoff electrical",
    "labor units electrical",
    "electrical job costing",
    "how to bid electrical jobs",
    "electrical overhead and profit",
    "residential electrical estimating",
    "commercial electrical estimating",
    "electrical estimate template",
    "electrical contractor pricing",
    "electrical labor rates",
    "electrical material pricing",
    "construction estimating electrical",
    "electrical bid proposal"
  ],
  alternates: {
    canonical: "https://amporalabs.com/blog/electrical-estimating-contractors",
  },
  openGraph: {
    title: "Electrical Estimating Guide: Bidding Jobs & Calculating Costs - Ampora",
    description: "How to bid electrical jobs, calculate material and labor costs, and build profitable estimates.",
    url: "https://amporalabs.com/blog/electrical-estimating-contractors",
    type: "article",
  },
};

function HeroIllustration() {
  return (
    <svg viewBox="0 0 400 160" className="w-full h-40 md:h-48" aria-label="Electrical estimating and bidding illustration">
      {/* Blueprint/plan background */}
      <rect x="20" y="10" width="170" height="140" rx="4" fill="#1e3a5f" fillOpacity="0.3" stroke="#3b82f6" strokeWidth="1"/>
      {/* Grid lines on blueprint */}
      <g stroke="#3b82f6" strokeWidth="0.5" opacity="0.3">
        <line x1="40" y1="10" x2="40" y2="150"/>
        <line x1="70" y1="10" x2="70" y2="150"/>
        <line x1="100" y1="10" x2="100" y2="150"/>
        <line x1="130" y1="10" x2="130" y2="150"/>
        <line x1="160" y1="10" x2="160" y2="150"/>
        <line x1="20" y1="40" x2="190" y2="40"/>
        <line x1="20" y1="70" x2="190" y2="70"/>
        <line x1="20" y1="100" x2="190" y2="100"/>
        <line x1="20" y1="130" x2="190" y2="130"/>
      </g>
      {/* Room outlines on blueprint */}
      <rect x="35" y="25" width="60" height="40" fill="none" stroke="#60a5fa" strokeWidth="1.5"/>
      <rect x="105" y="25" width="70" height="55" fill="none" stroke="#60a5fa" strokeWidth="1.5"/>
      <rect x="35" y="75" width="50" height="50" fill="none" stroke="#60a5fa" strokeWidth="1.5"/>
      {/* Electrical symbols */}
      <circle cx="55" cy="40" r="4" fill="none" stroke="#fbbf24" strokeWidth="1.5"/>
      <circle cx="80" cy="55" r="4" fill="none" stroke="#fbbf24" strokeWidth="1.5"/>
      <circle cx="130" cy="45" r="4" fill="none" stroke="#fbbf24" strokeWidth="1.5"/>
      <circle cx="155" cy="60" r="4" fill="none" stroke="#fbbf24" strokeWidth="1.5"/>
      <circle cx="50" cy="95" r="4" fill="none" stroke="#fbbf24" strokeWidth="1.5"/>
      <text x="105" y="148" textAnchor="middle" fill="#60a5fa" fontSize="7">Blueprint Takeoff</text>

      {/* Calculator/estimate */}
      <g transform="translate(210, 15)">
        <rect x="0" y="0" width="170" height="130" rx="6" fill="#374151" fillOpacity="0.4" stroke="#6b7280" strokeWidth="1.5"/>
        <text x="85" y="18" textAnchor="middle" fill="#fff" fontSize="9" fontWeight="bold">ESTIMATE</text>
        <line x1="10" y1="24" x2="160" y2="24" stroke="#6b7280" strokeWidth="1"/>

        {/* Line items */}
        <text x="15" y="40" fill="#9ca3af" fontSize="7">Materials</text>
        <text x="145" y="40" textAnchor="end" fill="#22c55e" fontSize="7">$12,450</text>

        <text x="15" y="55" fill="#9ca3af" fontSize="7">Labor (240 hrs)</text>
        <text x="145" y="55" textAnchor="end" fill="#22c55e" fontSize="7">$16,800</text>

        <text x="15" y="70" fill="#9ca3af" fontSize="7">Overhead (15%)</text>
        <text x="145" y="70" textAnchor="end" fill="#f59e0b" fontSize="7">$4,388</text>

        <text x="15" y="85" fill="#9ca3af" fontSize="7">Profit (10%)</text>
        <text x="145" y="85" textAnchor="end" fill="#f59e0b" fontSize="7">$3,364</text>

        <line x1="10" y1="92" x2="160" y2="92" stroke="#6b7280" strokeWidth="1"/>

        <text x="15" y="107" fill="#fff" fontSize="9" fontWeight="bold">Total Bid</text>
        <text x="145" y="107" textAnchor="end" fill="#22c55e" fontSize="10" fontWeight="bold">$37,002</text>

        {/* Profit indicator */}
        <rect x="20" y="115" width="120" height="10" rx="3" fill="#22c55e" fillOpacity="0.15"/>
        <rect x="20" y="115" width="96" height="10" rx="3" fill="#22c55e" fillOpacity="0.4"/>
        <text x="80" y="123" textAnchor="middle" fill="#86efac" fontSize="6">Target Margin: 10%</text>
      </g>
    </svg>
  );
}

export default function ElectricalEstimatingContractorsPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navigation />
      <div className="pt-20">
        <BreadcrumbJsonLd
          items={[
            { name: "Home", url: "https://amporalabs.com" },
            { name: "Blog", url: "https://amporalabs.com/blog" },
            { name: "Electrical Estimating Guide", url: "https://amporalabs.com/blog/electrical-estimating-contractors" },
          ]}
        />
        <BlogPostingJsonLd
          headline="Electrical Estimating Guide: How to Bid Jobs & Calculate Material & Labor Costs"
          description="Complete electrical estimating guide covering material takeoffs, labor unit calculations, overhead and profit, and bidding strategies for contractors."
          datePublished="2025-02-08"
          dateModified="2025-02-08"
          url="https://amporalabs.com/blog/electrical-estimating-contractors"
          wordCount={3000}
          keywords={["electrical estimating", "electrical bidding", "labor units", "material takeoff", "contractor pricing"]}
        />

        <article className="max-w-4xl mx-auto px-6 py-12">
          {/* Breadcrumb */}
          <nav className="text-sm text-white/60 mb-8">
            <Link href="/" className="hover:text-white">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/blog" className="hover:text-white">Blog</Link>
            <span className="mx-2">/</span>
            <span className="text-white">Electrical Estimating Guide</span>
          </nav>

          {/* Article Header */}
          <header className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <span className="px-3 py-1 bg-cyan-600/30 text-cyan-300 text-sm font-medium rounded-full">
                Technology
              </span>
              <span className="text-white/40 text-sm">13 min read</span>
              <span className="text-white/40 text-sm">February 8, 2025</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6 leading-tight">
              Electrical Estimating Guide: How to Bid Jobs &amp; Calculate Costs
            </h1>
            <p className="text-xl text-white/70">
              Master the art and science of electrical estimating. From material takeoffs to labor unit calculations, overhead allocation, and competitive bidding strategies for both residential and commercial projects.
            </p>
          </header>

          <div className="mb-12 bg-gradient-to-br from-cyan-900/20 to-green-900/20 rounded-2xl p-6 border border-white/10">
            <HeroIllustration />
          </div>

          {/* Quick Reference CTA */}
          <div className="bg-cyan-900/30 border border-cyan-500/30 rounded-2xl p-6 mb-12">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div>
                <h3 className="font-display font-bold text-lg mb-1">Electrical Calculators</h3>
                <p className="text-white/70 text-sm">Speed up your estimates with Ampora&apos;s professional electrical calculators.</p>
              </div>
              <a
                href="/get"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-cyan-600 text-white font-semibold rounded-full hover:bg-cyan-500 transition-colors whitespace-nowrap"
              >
                Download Free
              </a>
            </div>
          </div>

          {/* Table of Contents */}
          <div className="bg-white/5 rounded-2xl p-6 mb-12">
            <h2 className="font-display font-bold mb-4">In This Guide</h2>
            <ul className="space-y-2 text-white/70">
              <li><a href="#takeoff-process" className="hover:text-cyan-400">&#8594; The Takeoff Process</a></li>
              <li><a href="#material-pricing" className="hover:text-cyan-400">&#8594; Material Pricing Strategies</a></li>
              <li><a href="#labor-units" className="hover:text-cyan-400">&#8594; Labor Unit Calculations</a></li>
              <li><a href="#overhead-profit" className="hover:text-cyan-400">&#8594; Overhead &amp; Profit Margins</a></li>
              <li><a href="#residential-vs-commercial" className="hover:text-cyan-400">&#8594; Residential vs Commercial Estimating</a></li>
              <li><a href="#common-mistakes" className="hover:text-cyan-400">&#8594; Common Estimating Mistakes</a></li>
              <li><a href="#bidding-tips" className="hover:text-cyan-400">&#8594; Competitive Bidding Tips</a></li>
            </ul>
          </div>

          {/* Article Content */}
          <div className="prose prose-invert prose-lg max-w-none">

            <section id="takeoff-process" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">The Takeoff Process</h2>
              <p className="text-white/80 mb-4">
                The material takeoff is the foundation of every electrical estimate. This is where you systematically count and measure every component needed for the project. A thorough, accurate takeoff directly determines whether your bid is profitable or a money-loser.
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-3">Step-by-Step Takeoff Process</h3>
              <div className="space-y-4 my-6">
                <div className="bg-white/5 rounded-xl p-4 flex items-start gap-4">
                  <span className="text-cyan-400 font-bold text-lg">1.</span>
                  <div>
                    <h4 className="font-semibold">Review Plans and Specifications</h4>
                    <p className="text-white/60 text-sm mt-1">Study the electrical drawings, panel schedules, riser diagrams, and specifications thoroughly. Note the spec section (typically Division 26) for material requirements, quality standards, and special conditions.</p>
                  </div>
                </div>
                <div className="bg-white/5 rounded-xl p-4 flex items-start gap-4">
                  <span className="text-cyan-400 font-bold text-lg">2.</span>
                  <div>
                    <h4 className="font-semibold">Count Devices and Fixtures</h4>
                    <p className="text-white/60 text-sm mt-1">Count every receptacle, switch, light fixture, panel, disconnect, and device on the plans. Use colored markers or digital takeoff tools to mark items as counted to avoid double-counting or missing items.</p>
                  </div>
                </div>
                <div className="bg-white/5 rounded-xl p-4 flex items-start gap-4">
                  <span className="text-cyan-400 font-bold text-lg">3.</span>
                  <div>
                    <h4 className="font-semibold">Measure Wire and Conduit Runs</h4>
                    <p className="text-white/60 text-sm mt-1">Measure all branch circuit runs, feeder runs, and homerun lengths. Add 10-15% for routing, vertical risers, and connections. Use a scale ruler or digital measuring tool on the plans.</p>
                  </div>
                </div>
                <div className="bg-white/5 rounded-xl p-4 flex items-start gap-4">
                  <span className="text-cyan-400 font-bold text-lg">4.</span>
                  <div>
                    <h4 className="font-semibold">List Fittings and Hardware</h4>
                    <p className="text-white/60 text-sm mt-1">Count boxes, connectors, couplings, straps, hangers, and fittings for every conduit run. Don&apos;t forget cover plates, wire nuts, tape, and miscellaneous consumables.</p>
                  </div>
                </div>
                <div className="bg-white/5 rounded-xl p-4 flex items-start gap-4">
                  <span className="text-cyan-400 font-bold text-lg">5.</span>
                  <div>
                    <h4 className="font-semibold">Organize by System</h4>
                    <p className="text-white/60 text-sm mt-1">Group items by system: power distribution, lighting, fire alarm, low voltage, special systems. This organizes your estimate and helps catch missing systems.</p>
                  </div>
                </div>
              </div>

              <div className="bg-cyan-900/30 border border-cyan-500/30 rounded-xl p-6 my-6">
                <h4 className="font-semibold text-cyan-400 mb-2">Takeoff Accuracy Rule of Thumb</h4>
                <p className="text-white/70">
                  Your material takeoff should be accurate to within 5% of actual quantities. Missing even a small percentage of materials can eat your entire profit margin. A typical residential job has 200-500 line items; a commercial job can have 2,000 or more. Use checklists and systematic methods to ensure nothing is missed.
                </p>
              </div>
            </section>

            <section id="material-pricing" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Material Pricing Strategies</h2>
              <p className="text-white/80 mb-4">
                After completing the takeoff, every item needs a price. Material costs typically represent 35-45% of a total electrical estimate, making accurate pricing critical for profitability.
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-3">Pricing Sources</h3>
              <ul className="list-disc list-inside text-white/70 space-y-2 mb-4">
                <li><strong>Distributor quotes:</strong> Get current pricing from your electrical supply house for the specific project</li>
                <li><strong>Published price books:</strong> NECA Manual of Labor Units, Trade Service, or estimating software databases</li>
                <li><strong>Online pricing:</strong> Manufacturer websites and online distributors for reference pricing</li>
                <li><strong>Historical data:</strong> Your own records from past projects (adjust for price changes)</li>
              </ul>

              <div className="bg-green-900/30 border border-green-500/30 rounded-xl p-6 my-6">
                <h3 className="font-semibold text-green-400 mb-3">Material Pricing Best Practices</h3>
                <ul className="text-white/80 space-y-2">
                  <li><strong>Get fresh quotes:</strong> Copper and commodity prices fluctuate - use current pricing for large jobs</li>
                  <li><strong>Include tax:</strong> Don&apos;t forget sales tax on materials (varies by state and project type)</li>
                  <li><strong>Account for waste:</strong> Add 5-10% for waste, damaged items, and cutting losses</li>
                  <li><strong>Delivery costs:</strong> Include delivery charges if not covered by your supply account</li>
                  <li><strong>Price escalation:</strong> For long projects, include a price escalation clause or lock in pricing</li>
                </ul>
              </div>

              <h3 className="text-xl font-semibold mt-6 mb-3">Material Cost Categories</h3>
              <div className="overflow-x-auto my-6">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-white/20">
                      <th className="text-left py-3 px-4 text-white/60">Category</th>
                      <th className="text-left py-3 px-4 text-white/60">Typical % of Material Cost</th>
                      <th className="text-left py-3 px-4 text-white/60">Key Items</th>
                    </tr>
                  </thead>
                  <tbody className="text-white/80">
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-semibold text-cyan-400">Wire &amp; Cable</td>
                      <td className="py-3 px-4">30-40%</td>
                      <td className="py-3 px-4">Building wire, feeders, NM cable, MC cable</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-semibold text-cyan-400">Panels &amp; Breakers</td>
                      <td className="py-3 px-4">15-25%</td>
                      <td className="py-3 px-4">Panels, breakers, disconnects, transformers</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-semibold text-cyan-400">Conduit &amp; Fittings</td>
                      <td className="py-3 px-4">10-20%</td>
                      <td className="py-3 px-4">EMT, PVC, rigid, fittings, connectors, straps</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-semibold text-cyan-400">Devices &amp; Covers</td>
                      <td className="py-3 px-4">5-10%</td>
                      <td className="py-3 px-4">Receptacles, switches, plates, boxes</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-semibold text-cyan-400">Fixtures &amp; Equipment</td>
                      <td className="py-3 px-4">15-25%</td>
                      <td className="py-3 px-4">Light fixtures, sensors, controls, specialty</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section id="labor-units" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Labor Unit Calculations</h2>
              <p className="text-white/80 mb-4">
                Labor is typically 40-55% of a total electrical estimate and the most difficult component to estimate accurately. Labor units express the time required to install each item, measured in man-hours per unit.
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-3">Understanding Labor Units</h3>
              <p className="text-white/80 mb-4">
                A labor unit represents the average time for a qualified electrician to install one unit of a specific item, including unpacking, layout, mounting, connecting, and cleanup. For example:
              </p>

              <div className="overflow-x-auto my-6">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-white/20">
                      <th className="text-left py-3 px-4 text-white/60">Item</th>
                      <th className="text-left py-3 px-4 text-white/60">Labor Unit (hours)</th>
                      <th className="text-left py-3 px-4 text-white/60">Notes</th>
                    </tr>
                  </thead>
                  <tbody className="text-white/80">
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">Duplex receptacle (NM cable)</td>
                      <td className="py-3 px-4 font-semibold text-green-400">0.25-0.35</td>
                      <td className="py-3 px-4">Residential, wood frame</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">Duplex receptacle (EMT)</td>
                      <td className="py-3 px-4 font-semibold text-green-400">0.50-0.75</td>
                      <td className="py-3 px-4">Commercial, includes conduit</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">Single-pole switch (NM)</td>
                      <td className="py-3 px-4 font-semibold text-green-400">0.20-0.30</td>
                      <td className="py-3 px-4">Residential, wood frame</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">2x4 LED troffer</td>
                      <td className="py-3 px-4 font-semibold text-green-400">0.50-0.80</td>
                      <td className="py-3 px-4">Commercial, grid ceiling</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">100 ft EMT 3/4&quot;</td>
                      <td className="py-3 px-4 font-semibold text-green-400">3.0-4.5</td>
                      <td className="py-3 px-4">With fittings and straps</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4">200A panel install</td>
                      <td className="py-3 px-4 font-semibold text-green-400">8.0-12.0</td>
                      <td className="py-3 px-4">Mount, wire, breakers</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="bg-purple-900/30 border border-purple-500/30 rounded-xl p-6 my-6">
                <h3 className="font-semibold text-purple-400 mb-3">Labor Adjustment Factors</h3>
                <p className="text-white/70 mb-3">
                  Published labor units assume ideal conditions. Adjust for real-world factors:
                </p>
                <ul className="text-white/70 space-y-2">
                  <li><strong>Building height:</strong> Add 10-20% for work above 10 feet requiring lifts or scaffolding</li>
                  <li><strong>Existing building:</strong> Add 15-30% for renovation work vs new construction</li>
                  <li><strong>Congested areas:</strong> Add 10-15% for tight mechanical rooms or above-ceiling work</li>
                  <li><strong>Weather exposure:</strong> Add 10-25% for outdoor work in extreme temperatures</li>
                  <li><strong>Crew skill level:</strong> Apprentice-heavy crews may require 10-20% more time</li>
                  <li><strong>Site conditions:</strong> Long material hauls, security delays, or access restrictions</li>
                </ul>
              </div>

              <h3 className="text-xl font-semibold mt-6 mb-3">Converting Labor Hours to Dollars</h3>
              <p className="text-white/80 mb-4">
                Once you have total labor hours, multiply by your burdened labor rate:
              </p>
              <div className="bg-white/5 rounded-xl p-6 my-6">
                <p className="text-white/80 mb-2"><strong>Burdened Labor Rate</strong> = Base Wage + Taxes + Insurance + Benefits</p>
                <ul className="text-white/70 space-y-2 mt-3">
                  <li>Journeyman base wage: $28-$55/hour (varies by region)</li>
                  <li>Payroll taxes (FICA, FUTA, SUTA): 10-15% of wages</li>
                  <li>Workers&apos; comp insurance: 5-15% of wages</li>
                  <li>Benefits (health, retirement, etc.): $5-$20/hour</li>
                  <li><strong>Typical burdened rate: $45-$85/hour</strong></li>
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

            <section id="overhead-profit" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Overhead &amp; Profit Margins</h2>
              <p className="text-white/80 mb-4">
                After calculating direct costs (materials and labor), you must add overhead and profit to arrive at your selling price. This is where many new contractors make critical errors.
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-3">Understanding Overhead</h3>
              <p className="text-white/80 mb-4">
                Overhead includes all business expenses not directly tied to a specific project:
              </p>

              <div className="grid md:grid-cols-2 gap-6 my-6">
                <div className="bg-cyan-900/30 rounded-xl p-6">
                  <h4 className="font-semibold text-cyan-400 mb-3">Fixed Overhead</h4>
                  <ul className="text-white/70 text-sm space-y-1">
                    <li>&#8226; Office rent and utilities</li>
                    <li>&#8226; Vehicle payments and insurance</li>
                    <li>&#8226; General liability insurance</li>
                    <li>&#8226; Office staff salaries</li>
                    <li>&#8226; Accounting and legal fees</li>
                    <li>&#8226; License and permit fees</li>
                    <li>&#8226; Software and subscriptions</li>
                  </ul>
                </div>
                <div className="bg-orange-900/30 rounded-xl p-6">
                  <h4 className="font-semibold text-orange-400 mb-3">Variable Overhead</h4>
                  <ul className="text-white/70 text-sm space-y-1">
                    <li>&#8226; Fuel and vehicle maintenance</li>
                    <li>&#8226; Tool replacement and repair</li>
                    <li>&#8226; Small tools and consumables</li>
                    <li>&#8226; Warranty and callback costs</li>
                    <li>&#8226; Marketing and advertising</li>
                    <li>&#8226; Training and continuing education</li>
                    <li>&#8226; Equipment rental</li>
                  </ul>
                </div>
              </div>

              <div className="bg-green-900/30 border border-green-500/30 rounded-xl p-6 my-6">
                <h3 className="font-semibold text-green-400 mb-3">Typical Markup Ranges</h3>
                <ul className="text-white/80 space-y-2">
                  <li><strong>Overhead markup:</strong> 10-20% of direct costs (industry average 15%)</li>
                  <li><strong>Profit margin:</strong> 8-15% of total project cost (industry average 10%)</li>
                  <li><strong>Combined markup:</strong> 20-35% above direct costs</li>
                  <li><strong>Small jobs (&lt;$5,000):</strong> Higher markups (25-40%) to cover fixed overhead allocation</li>
                  <li><strong>Large projects (&gt;$100,000):</strong> Lower markups (15-25%) due to volume efficiency</li>
                </ul>
              </div>

              <h3 className="text-xl font-semibold mt-6 mb-3">Calculating the Selling Price</h3>
              <div className="bg-white/5 rounded-xl p-6 my-6">
                <p className="text-white/80 mb-3 font-semibold">Example: Residential Service Panel Upgrade</p>
                <ul className="text-white/70 space-y-2">
                  <li>Materials: $2,800</li>
                  <li>Labor (24 hours x $55/hr burdened): $1,320</li>
                  <li>Direct costs subtotal: $4,120</li>
                  <li>Overhead (15%): $618</li>
                  <li>Subtotal: $4,738</li>
                  <li>Profit (10%): $474</li>
                  <li className="font-semibold text-green-400 pt-2 border-t border-white/10">Selling Price: $5,212</li>
                </ul>
              </div>
            </section>

            <section id="residential-vs-commercial" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Residential vs Commercial Estimating</h2>
              <p className="text-white/80 mb-4">
                Residential and commercial electrical estimating require different approaches, different labor units, and different pricing strategies.
              </p>

              <div className="overflow-x-auto my-6">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-white/20">
                      <th className="text-left py-3 px-4 text-white/60">Factor</th>
                      <th className="text-left py-3 px-4 text-white/60">Residential</th>
                      <th className="text-left py-3 px-4 text-white/60">Commercial</th>
                    </tr>
                  </thead>
                  <tbody className="text-white/80">
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-semibold">Wiring method</td>
                      <td className="py-3 px-4">NM cable (Romex) primary</td>
                      <td className="py-3 px-4">EMT, MC cable, rigid conduit</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-semibold">Plans quality</td>
                      <td className="py-3 px-4">Often basic or no plans</td>
                      <td className="py-3 px-4">Detailed engineered drawings</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-semibold">Bidding process</td>
                      <td className="py-3 px-4">Often per-unit or fixed price</td>
                      <td className="py-3 px-4">Competitive sealed bid</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-semibold">Labor productivity</td>
                      <td className="py-3 px-4">Higher (repetitive layouts)</td>
                      <td className="py-3 px-4">Variable (complex systems)</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-semibold">Markup range</td>
                      <td className="py-3 px-4">25-40%</td>
                      <td className="py-3 px-4">15-25%</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-semibold">Change orders</td>
                      <td className="py-3 px-4">Common, often verbal</td>
                      <td className="py-3 px-4">Formal written process</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="bg-orange-900/30 border border-orange-500/30 rounded-xl p-6 my-6">
                <h4 className="font-semibold text-orange-400 mb-2">Residential Estimating Shortcut: Per-Unit Pricing</h4>
                <p className="text-white/70">
                  Many residential contractors use per-unit pricing for common tasks: $150-$250 per receptacle (including wire, box, device, and plate), $80-$150 per switch, $200-$400 per recessed light. These unit prices include material and labor and are calibrated from past job data. This method is fast for small jobs but less accurate for complex or unique work.
                </p>
              </div>
            </section>

            <section id="common-mistakes" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Common Estimating Mistakes</h2>
              <p className="text-white/80 mb-4">
                Even experienced estimators make costly errors. Recognizing these common mistakes helps you build more accurate and profitable estimates.
              </p>

              <div className="bg-red-900/20 border border-red-500/30 rounded-xl p-6 my-6">
                <h4 className="font-semibold text-red-400 mb-3">Top Estimating Errors</h4>
                <ul className="text-white/70 space-y-3">
                  <li>
                    <strong>Forgetting the homerun:</strong> Counting receptacles and switches but forgetting the wire run back to the panel. Every circuit has a homerun, and on large projects this adds up to thousands of feet of wire.
                  </li>
                  <li>
                    <strong>Ignoring site conditions:</strong> Estimating from plans alone without visiting the site. High ceilings, limited access, old construction, asbestos, and long material haul distances all increase labor.
                  </li>
                  <li>
                    <strong>Using outdated pricing:</strong> Wire prices can change 20-30% in a year. Using last year&apos;s prices on this year&apos;s bid can wipe out your profit entirely.
                  </li>
                  <li>
                    <strong>Underestimating overhead:</strong> Many small contractors only account for materials and labor, forgetting that truck payments, insurance, tools, and office costs must come from somewhere.
                  </li>
                  <li>
                    <strong>Not reading the specs:</strong> The specifications often require specific brands, quality levels, or installation methods that affect pricing. Missing a spec requirement can result in costly change orders at your expense.
                  </li>
                  <li>
                    <strong>Scope gaps:</strong> Not clarifying what is and isn&apos;t included. Trenching, patching, painting, fire stopping, and testing may or may not be in your scope - define it clearly in your proposal.
                  </li>
                </ul>
              </div>
            </section>

            <section id="bidding-tips" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Competitive Bidding Tips</h2>
              <p className="text-white/80 mb-4">
                Building an accurate estimate is only half the battle. You also need to present a professional proposal and win work at profitable prices.
              </p>

              <div className="bg-purple-900/30 border border-purple-500/30 rounded-xl p-6 my-6">
                <h3 className="font-semibold text-purple-400 mb-3">Winning Bid Strategies</h3>
                <ul className="text-white/80 space-y-2">
                  <li><strong>Know your breakeven:</strong> Calculate the minimum price at which you cover all costs - never bid below this</li>
                  <li><strong>Qualify your bid:</strong> List exclusions and assumptions clearly to protect your margin</li>
                  <li><strong>Value engineering:</strong> Offer alternatives that save cost while meeting code requirements</li>
                  <li><strong>Relationship building:</strong> GCs and owners prefer contractors they trust, even at slightly higher prices</li>
                  <li><strong>Follow up:</strong> If you don&apos;t win, ask for feedback on your pricing and proposal</li>
                </ul>
              </div>

              <h3 className="text-xl font-semibold mt-6 mb-3">Proposal Essentials</h3>
              <ul className="list-disc list-inside text-white/70 space-y-2 mb-4">
                <li><strong>Scope of work:</strong> Clear description of what&apos;s included and excluded</li>
                <li><strong>Price breakdown:</strong> Lump sum or line-item as appropriate</li>
                <li><strong>Schedule:</strong> Duration and crew size assumptions</li>
                <li><strong>Payment terms:</strong> Progress billing schedule and payment expectations</li>
                <li><strong>Exclusions:</strong> Explicitly state what is NOT included</li>
                <li><strong>Validity period:</strong> How long the price is guaranteed (30-60 days typical)</li>
                <li><strong>Terms and conditions:</strong> Change order process, warranty, insurance requirements</li>
              </ul>

              <div className="bg-green-900/30 border border-green-500/30 rounded-xl p-6 my-6">
                <h4 className="font-semibold text-green-400 mb-2">Track Your Win Rate</h4>
                <p className="text-white/70">
                  A healthy bid-to-win ratio for competitive commercial work is 20-30% (you win 1 in 4 or 5 bids). If you win every job, you&apos;re probably too cheap. If you never win, your pricing may be too high or your proposals need improvement. Track this metric and adjust your approach accordingly.
                </p>
              </div>
            </section>

            {/* CTA Section */}
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
                <Link href="/blog/ai-tools-for-electricians" className="bg-white/5 hover:bg-white/10 rounded-xl p-6 transition-colors">
                  <span className="text-cyan-400 text-sm">Technology</span>
                  <h3 className="font-semibold mt-2">AI Tools for Electricians</h3>
                </Link>
                <Link href="/blog/electrical-apprenticeship-career-guide" className="bg-white/5 hover:bg-white/10 rounded-xl p-6 transition-colors">
                  <span className="text-emerald-400 text-sm">Career</span>
                  <h3 className="font-semibold mt-2">Electrical Apprenticeship Career Guide</h3>
                </Link>
                <Link href="/blog/how-to-calculate-voltage-drop" className="bg-white/5 hover:bg-white/10 rounded-xl p-6 transition-colors">
                  <span className="text-amber-400 text-sm">Calculations</span>
                  <h3 className="font-semibold mt-2">How to Calculate Voltage Drop</h3>
                </Link>
                <Link href="/blog/conduit-fill-calculation-guide" className="bg-white/5 hover:bg-white/10 rounded-xl p-6 transition-colors">
                  <span className="text-amber-400 text-sm">Calculations</span>
                  <h3 className="font-semibold mt-2">Conduit Fill Calculation Guide</h3>
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
