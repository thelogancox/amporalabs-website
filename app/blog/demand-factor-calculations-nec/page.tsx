import { Metadata } from "next";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import { BlogPostingJsonLd, BreadcrumbJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Demand Factor Calculations: Reducing Oversized Services",
  description: "Master NEC demand factor calculations to properly size electrical services. Learn how demand factors from Tables 220.42, 220.54, 220.55, and 220.56 reduce calculated loads and prevent oversized, costly installations.",
  keywords: [
    "demand factor calculations",
    "NEC demand factors",
    "service sizing",
    "Table 220.42",
    "Table 220.55",
    "Table 220.56",
    "electrical load reduction",
    "optional calculation method",
    "oversized service",
    "diversity factor"
  ],
  openGraph: {
    title: "Demand Factor Calculations: Reducing Oversized Services",
    description: "Learn how NEC demand factors reduce calculated loads and prevent oversized electrical services.",
    type: "article",
    publishedTime: "2025-04-01",
  },
};

function HeroIllustration() {
  return (
    <svg viewBox="0 0 400 200" className="w-full h-48 md:h-64" aria-label="Service panel with load reduction arrows and demand factor percentages">
      <defs>
        <linearGradient id="panelGradDF" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#374151" />
          <stop offset="100%" stopColor="#1f2937" />
        </linearGradient>
        <linearGradient id="reductionGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#f59e0b" />
          <stop offset="100%" stopColor="#22c55e" />
        </linearGradient>
      </defs>

      {/* Service panel */}
      <g transform="translate(20, 20)">
        <rect x="0" y="0" width="90" height="160" rx="4" fill="url(#panelGradDF)" stroke="#6b7280" strokeWidth="2"/>
        <rect x="10" y="10" width="70" height="140" fill="#111827"/>
        {/* Breakers */}
        {[0, 1, 2, 3, 4, 5].map((i) => (
          <g key={i}>
            <rect x="15" y={18 + i * 20} width="26" height="15" rx="2" fill="#374151" stroke="#4b5563" strokeWidth="1"/>
            <rect x="49" y={18 + i * 20} width="26" height="15" rx="2" fill="#374151" stroke="#4b5563" strokeWidth="1"/>
          </g>
        ))}
        <text x="45" y="155" textAnchor="middle" fill="#9ca3af" fontSize="7">200A SERVICE</text>
      </g>

      {/* Connected load bar (large) */}
      <g transform="translate(140, 25)">
        <text x="0" y="0" fill="#ef4444" fontSize="9" fontWeight="bold">Connected Load</text>
        <rect x="0" y="8" width="230" height="24" rx="4" fill="#ef4444" fillOpacity="0.3" stroke="#ef4444" strokeWidth="1"/>
        <text x="115" y="24" textAnchor="middle" fill="#fca5a5" fontSize="11" fontWeight="bold">68,400 VA</text>
      </g>

      {/* Reduction arrows */}
      <g transform="translate(180, 65)">
        <polygon points="30,0 60,18 0,18" fill="#f59e0b" fillOpacity="0.6"/>
        <text x="30" y="12" textAnchor="middle" fill="#1f2937" fontSize="7" fontWeight="bold">35%</text>
      </g>
      <g transform="translate(230, 65)">
        <polygon points="30,0 60,18 0,18" fill="#f59e0b" fillOpacity="0.6"/>
        <text x="30" y="12" textAnchor="middle" fill="#1f2937" fontSize="7" fontWeight="bold">75%</text>
      </g>
      <g transform="translate(280, 65)">
        <polygon points="30,0 60,18 0,18" fill="#f59e0b" fillOpacity="0.6"/>
        <text x="30" y="12" textAnchor="middle" fill="#1f2937" fontSize="7" fontWeight="bold">80%</text>
      </g>

      {/* Demand factor label */}
      <text x="260" y="100" textAnchor="middle" fill="#fbbf24" fontSize="10" fontWeight="bold">Demand Factors Applied</text>

      {/* Calculated load bar (smaller) */}
      <g transform="translate(140, 112)">
        <text x="0" y="0" fill="#22c55e" fontSize="9" fontWeight="bold">Calculated Load</text>
        <rect x="0" y="8" width="150" height="24" rx="4" fill="#22c55e" fillOpacity="0.3" stroke="#22c55e" strokeWidth="1"/>
        <text x="75" y="24" textAnchor="middle" fill="#86efac" fontSize="11" fontWeight="bold">38,950 VA</text>
      </g>

      {/* Savings callout */}
      <g transform="translate(310, 110)">
        <rect x="0" y="0" width="80" height="40" rx="6" fill="#8b5cf6" fillOpacity="0.25" stroke="#8b5cf6" strokeWidth="1"/>
        <text x="40" y="18" textAnchor="middle" fill="#c4b5fd" fontSize="9" fontWeight="bold">43% Reduction</text>
        <text x="40" y="32" textAnchor="middle" fill="#a78bfa" fontSize="8">= Cost Savings</text>
      </g>

      {/* Service size result */}
      <g transform="translate(140, 155)">
        <rect x="0" y="0" width="250" height="28" rx="4" fill="#8b5cf6" fillOpacity="0.15" stroke="#8b5cf6" strokeWidth="1"/>
        <text x="125" y="18" textAnchor="middle" fill="#a78bfa" fontSize="10" fontWeight="bold">Service Required: 163A at 240V = 200A Service</text>
      </g>
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
            { name: "Demand Factor Calculations", url: "https://amporalabs.com/blog/demand-factor-calculations-nec" },
          ]}
        />
        <BlogPostingJsonLd
          headline="Demand Factor Calculations: Reducing Oversized Services"
          description="Master NEC demand factor calculations to properly size electrical services and prevent oversized installations."
          datePublished="2025-04-01"
          url="https://amporalabs.com/blog/demand-factor-calculations-nec"
        />

        <article className="max-w-4xl mx-auto px-6 py-12">
          {/* Breadcrumb */}
          <nav className="text-sm text-white/60 mb-8">
            <Link href="/" className="hover:text-white">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/blog" className="hover:text-white">Blog</Link>
            <span className="mx-2">/</span>
            <span className="text-white">Demand Factor Calculations</span>
          </nav>

          {/* Hero */}
          <header className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <span className="px-3 py-1 bg-amber-600/30 text-amber-300 text-sm font-medium rounded-full">
                Calculations
              </span>
              <span className="text-white/40 text-sm">April 1, 2025</span>
              <span className="text-white/40 text-sm">• 13 min read</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">
              Demand Factor Calculations: Reducing Oversized Services
            </h1>
            <p className="text-xl text-white/70">
              Demand factors are the key to right-sizing electrical services. Learn how the NEC allows you to reduce calculated loads and avoid costly oversized installations.
            </p>
          </header>

          {/* Hero Illustration */}
          <div className="mb-12 bg-gradient-to-br from-amber-900/20 to-cyan-900/20 rounded-2xl p-6 border border-white/10">
            <HeroIllustration />
          </div>

          {/* Content */}
          <div className="prose prose-invert prose-lg max-w-none">
            <h2>What Are Demand Factors and Why They Matter</h2>
            <p>
              A <strong>demand factor</strong> is the ratio of the maximum demand of a system or part of a system
              to the total connected load. In practical terms, it recognizes a simple reality: not all electrical
              equipment in a building operates at full load at the same time.
            </p>
            <p>
              Consider a house with a kitchen range, clothes dryer, water heater, air conditioning, and dozens of
              lighting circuits. The probability that every single load will draw maximum current simultaneously is
              essentially zero. The NEC accounts for this through demand factors specified in Article 220, which
              allow electricians to reduce the calculated load below the total connected load.
            </p>
            <p>
              Without demand factors, you would need to size the service entrance equipment for the sum of every
              connected load at its full nameplate rating. This would result in massively oversized services, larger
              conductors than necessary, bigger panels, and significantly higher costs for the building owner. A
              typical residence with 68,000 VA of connected load might only require a 200A service instead of a 400A
              service once demand factors are properly applied.
            </p>
            <div className="bg-amber-500/10 border border-amber-500/30 rounded-xl p-6 my-6">
              <h4 className="text-amber-400 font-semibold mb-3">Key Definition (NEC Article 100)</h4>
              <p className="text-white/80">
                <strong>Demand Factor:</strong> The ratio of the maximum demand of a system, or part of a system,
                to the total connected load of a system or the part of the system under consideration.
              </p>
              <p className="text-white/60 mt-2 text-sm">
                Example: If a building has 100 kVA of connected lighting but the maximum demand is only 50 kVA,
                the demand factor is 50/100 = 0.50 or 50%.
              </p>
            </div>

            <h2>Demand Factors vs. Diversity Factors</h2>
            <p>
              These two terms are often confused, but they are distinct concepts used in different contexts:
            </p>
            <div className="grid md:grid-cols-2 gap-6 my-6">
              <div className="bg-white/5 rounded-xl p-6">
                <h4 className="text-amber-400 font-semibold mb-3">Demand Factor</h4>
                <ul className="text-white/70 text-sm space-y-2">
                  <li>Ratio of maximum demand to total connected load</li>
                  <li>Applied to individual loads or groups of similar loads</li>
                  <li>Always less than or equal to 1.0 (100%)</li>
                  <li>Used in NEC Article 220 calculations</li>
                  <li>Example: 35% demand factor for general lighting over 3,000 VA</li>
                </ul>
              </div>
              <div className="bg-white/5 rounded-xl p-6">
                <h4 className="text-cyan-400 font-semibold mb-3">Diversity Factor</h4>
                <ul className="text-white/70 text-sm space-y-2">
                  <li>Ratio of sum of individual maximum demands to total system maximum demand</li>
                  <li>Applied to groups of loads that peak at different times</li>
                  <li>Always greater than or equal to 1.0</li>
                  <li>More common in utility and industrial engineering</li>
                  <li>Example: Office lights peak daytime, parking lights peak nighttime</li>
                </ul>
              </div>
            </div>
            <p>
              In NEC calculations for electricians, you will primarily work with <strong>demand factors</strong>.
              The demand factor is a multiplier you apply to connected load to determine the portion that must be
              included in the service calculation. Think of it as the percentage of connected load that actually
              contributes to peak demand.
            </p>

            <h2>General Lighting Demand Factors (Table 220.42)</h2>
            <p>
              Table 220.42 provides demand factors for general lighting loads in various occupancy types.
              For dwelling units, this table is critical because the general lighting load (calculated at
              3 VA per square foot per 220.12) plus small appliance and laundry loads are subject to these
              demand factors:
            </p>
            <div className="bg-white/5 rounded-xl p-6 my-6">
              <h4 className="text-white font-semibold mb-4">Table 220.42 - Lighting Load Demand Factors (Dwelling Units)</h4>
              <table className="w-full text-left text-sm">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="py-2 text-white">Portion of Lighting Load</th>
                    <th className="py-2 text-white text-right">Demand Factor %</th>
                  </tr>
                </thead>
                <tbody className="text-white/70">
                  <tr className="border-b border-white/5">
                    <td className="py-2">First 3,000 VA or less</td>
                    <td className="py-2 text-right">100%</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-2">3,001 VA to 120,000 VA</td>
                    <td className="py-2 text-right">35%</td>
                  </tr>
                  <tr>
                    <td className="py-2">Over 120,000 VA</td>
                    <td className="py-2 text-right">25%</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p>
              For non-dwelling occupancies, different demand factors apply. Hospitals have 40% for the first
              50,000 VA and 20% over 50,000 VA. Hotels and motels use 50% for the first 20,000 VA, 40% for
              the next 80,000 VA, and 30% over 100,000 VA. Warehouses (storage) get 100% for the first 12,500 VA
              and 50% above that. Always check Table 220.42 for the specific occupancy type.
            </p>

            <h3>Applying Table 220.42: Example</h3>
            <div className="bg-gradient-to-r from-amber-900/30 to-cyan-900/30 rounded-xl p-6 my-6">
              <p className="text-white/80 mb-3">
                <strong>Given:</strong> 2,800 sq ft dwelling unit
              </p>
              <p className="text-white/80 mb-1">General lighting: 2,800 sq ft x 3 VA = 8,400 VA</p>
              <p className="text-white/80 mb-1">Small appliance circuits: 2 x 1,500 VA = 3,000 VA</p>
              <p className="text-white/80 mb-3">Laundry circuit: 1 x 1,500 VA = 1,500 VA</p>
              <p className="text-white/80 mb-1"><strong>Subtotal: 12,900 VA</strong></p>
              <p className="text-white/60 mt-3 mb-1">Apply Table 220.42:</p>
              <p className="text-white/80 mb-1">First 3,000 VA at 100% = 3,000 VA</p>
              <p className="text-white/80 mb-1">Remaining 9,900 VA at 35% = 3,465 VA</p>
              <p className="text-amber-400 mt-3 font-semibold">Net computed lighting load: 6,465 VA (saved 6,435 VA = 50% reduction)</p>
            </div>

            <h2>Kitchen Equipment Demand Factors (Table 220.56)</h2>
            <p>
              In commercial kitchens, the number of pieces of cooking equipment directly determines the demand
              factor applied. Table 220.56 covers commercial electric cooking equipment, including dishwasher
              booster heaters, water heaters, and other kitchen equipment. This table applies to
              <strong> thermally controlled</strong> or <strong>intermittently used</strong> equipment rated over 1.65 kW.
            </p>
            <div className="bg-white/5 rounded-xl p-6 my-6">
              <h4 className="text-white font-semibold mb-4">Table 220.56 - Kitchen Equipment Demand Factors (Selected Values)</h4>
              <table className="w-full text-left text-sm">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="py-2 text-white">Number of Units</th>
                    <th className="py-2 text-white text-right">Demand Factor %</th>
                  </tr>
                </thead>
                <tbody className="text-white/70">
                  <tr className="border-b border-white/5">
                    <td className="py-2">1</td>
                    <td className="py-2 text-right">100%</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-2">2</td>
                    <td className="py-2 text-right">100%</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-2">3</td>
                    <td className="py-2 text-right">90%</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-2">4</td>
                    <td className="py-2 text-right">80%</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-2">5</td>
                    <td className="py-2 text-right">70%</td>
                  </tr>
                  <tr>
                    <td className="py-2">6 or more</td>
                    <td className="py-2 text-right">65%</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p>
              This means a commercial kitchen with 6 pieces of equipment rated at a combined 90 kW only needs to
              account for 58.5 kW (65%) in the service calculation. That is a savings of 31.5 kW, which translates
              to a significantly smaller service entrance.
            </p>

            <h2>Dryer Demand Factors (Table 220.54)</h2>
            <p>
              Table 220.54 provides demand factors for household electric clothes dryers in multifamily dwellings.
              For a single dryer, the demand is 5,000 watts or the nameplate rating, whichever is larger. When
              multiple dwelling units share a common service, the demand factors reduce significantly:
            </p>
            <div className="bg-white/5 rounded-xl p-6 my-6">
              <h4 className="text-white font-semibold mb-4">Table 220.54 - Dryer Demand Factors (Selected Values)</h4>
              <table className="w-full text-left text-sm">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="py-2 text-white">Number of Dryers</th>
                    <th className="py-2 text-white text-right">Demand Factor %</th>
                  </tr>
                </thead>
                <tbody className="text-white/70">
                  <tr className="border-b border-white/5">
                    <td className="py-2">1-4</td>
                    <td className="py-2 text-right">100%</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-2">5</td>
                    <td className="py-2 text-right">80%</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-2">6-10</td>
                    <td className="py-2 text-right">70%</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-2">11-13</td>
                    <td className="py-2 text-right">65%</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-2">14-19</td>
                    <td className="py-2 text-right">60%</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-2">20-24</td>
                    <td className="py-2 text-right">55%</td>
                  </tr>
                  <tr>
                    <td className="py-2">25-29</td>
                    <td className="py-2 text-right">50%</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p>
              For an apartment complex with 20 units, each with a 5,000-watt dryer, the total connected dryer load
              is 100,000 watts. Applying the 55% demand factor reduces the calculated dryer load to 55,000 watts --
              a savings of 45,000 watts in the service calculation.
            </p>

            <h2>Range Demand Factors (Table 220.55)</h2>
            <p>
              Table 220.55 is one of the most complex demand factor tables in the NEC. It applies to household
              electric ranges, wall-mounted ovens, counter-mounted cooking units, and other household cooking
              appliances rated over 1-3/4 kW. The table has three columns:
            </p>
            <ul>
              <li><strong>Column A:</strong> Not over 12 kW rating (most common for single dwelling units)</li>
              <li><strong>Column B:</strong> 3-1/2 to 8-3/4 kW rating</li>
              <li><strong>Column C:</strong> Less than 3-1/2 kW rating</li>
            </ul>
            <div className="bg-white/5 rounded-xl p-6 my-6">
              <h4 className="text-white font-semibold mb-4">Table 220.55 - Range Demand Factors (Column A, Selected Values)</h4>
              <table className="w-full text-left text-sm">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="py-2 text-white">Number of Appliances</th>
                    <th className="py-2 text-white text-right">Maximum Demand (kW) - Column A</th>
                  </tr>
                </thead>
                <tbody className="text-white/70">
                  <tr className="border-b border-white/5">
                    <td className="py-2">1</td>
                    <td className="py-2 text-right">8 kW</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-2">2</td>
                    <td className="py-2 text-right">11 kW</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-2">3</td>
                    <td className="py-2 text-right">14 kW</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-2">4</td>
                    <td className="py-2 text-right">17 kW</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-2">5</td>
                    <td className="py-2 text-right">20 kW</td>
                  </tr>
                  <tr>
                    <td className="py-2">6-10</td>
                    <td className="py-2 text-right">21-25 kW</td>
                  </tr>
                </tbody>
              </table>
              <p className="text-white/50 text-sm mt-4">
                Note 1: For ranges rated over 12 kW but not more than 27 kW, the Column A demand must be increased
                by 5% for each additional kW (or major fraction) above 12 kW.
              </p>
            </div>
            <p>
              For a single dwelling unit with one range rated at 12 kW or less, the demand is only 8 kW --
              a significant reduction from the nameplate rating. For an apartment building with 10 units each
              having a 12 kW range (120 kW total connected), the demand is only 25 kW. That is a 79% reduction.
            </p>

            <h2>Heating and Air Conditioning Load Considerations (220.60)</h2>
            <p>
              Section 220.60 provides one of the most impactful demand factor provisions: the
              <strong> non-coincident load</strong> rule. It states that where it is unlikely that two or more
              non-coincident loads will be in use simultaneously, only the largest load shall be used in
              computing the total load of a feeder or service.
            </p>
            <p>
              The most common application of this rule involves heating and air conditioning. In most buildings,
              you will not run the heating system and the air conditioning system at the same time. Therefore,
              you only count the larger of the two loads in your calculation.
            </p>
            <div className="bg-amber-500/10 border border-amber-500/30 rounded-xl p-6 my-6">
              <h4 className="text-amber-400 font-semibold mb-3">220.60 Non-Coincident Loads Example</h4>
              <table className="w-full text-left text-sm">
                <tbody className="text-white/70">
                  <tr className="border-b border-white/5">
                    <td className="py-2">Air conditioning load</td>
                    <td className="py-2 text-right">5,000 VA</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-2">Electric heating load</td>
                    <td className="py-2 text-right">12,000 VA</td>
                  </tr>
                  <tr className="border-b border-white/10">
                    <td className="py-2 line-through text-white/40">Total if both counted</td>
                    <td className="py-2 text-right line-through text-white/40">17,000 VA</td>
                  </tr>
                  <tr>
                    <td className="py-2 text-amber-400 font-semibold">Use larger load only</td>
                    <td className="py-2 text-right text-amber-400 font-semibold">12,000 VA</td>
                  </tr>
                </tbody>
              </table>
              <p className="text-white/60 text-sm mt-3">Savings: 5,000 VA omitted from the calculation.</p>
            </div>
            <p>
              Be careful with this provision. If there are supplemental electric heaters that operate with the
              air conditioning (such as reheat coils in a commercial VAV system), those heating loads are
              coincident with the cooling load and must both be counted.
            </p>

            <h2>Optional Calculation Method for Dwellings (220.82)</h2>
            <p>
              For existing dwelling units with an initial connected load of 10 kVA or more, or for new dwelling
              units, the NEC provides an optional (simplified) calculation method. This method often yields a
              smaller calculated load than the standard method and is widely used by electricians and engineers.
            </p>
            <div className="bg-white/5 rounded-xl p-6 my-6">
              <h4 className="text-white font-semibold mb-4">220.82 Optional Method Steps</h4>
              <ol className="text-white/70 space-y-3">
                <li><strong>Step 1:</strong> Calculate the general lighting and receptacle load at 3 VA per square foot</li>
                <li><strong>Step 2:</strong> Add 1,500 VA for each 20A small appliance circuit and laundry circuit</li>
                <li><strong>Step 3:</strong> Add the nameplate rating of all appliances (range, dryer, water heater, dishwasher, etc.) and any permanently connected loads fastened in place</li>
                <li><strong>Step 4:</strong> Apply demand factors:
                  <ul className="mt-2 ml-4 space-y-1">
                    <li>First 10 kVA at 100%</li>
                    <li>Remainder at 40%</li>
                  </ul>
                </li>
                <li><strong>Step 5:</strong> Add the larger of the air conditioning or heat pump compressor load vs. 65% of the central electric space heating load (if there are fewer than four separately controlled units) or 40% (if four or more units)</li>
              </ol>
            </div>
            <p>
              The optional method is significantly simpler than the standard method and typically results in
              a smaller service size. This is because the flat 40% demand factor on everything above 10 kVA
              is quite aggressive compared to applying individual table demand factors. Most inspectors accept
              this method for single dwelling units.
            </p>

            <h2>Step-by-Step Residential Example Calculation</h2>
            <p>
              Let us walk through a complete residential service calculation using both the standard and optional
              methods to see the impact of demand factors.
            </p>
            <div className="bg-amber-500/10 border border-amber-500/30 rounded-xl p-6 my-6">
              <h4 className="text-amber-400 font-semibold mb-3">Given: 3,000 sq ft Single-Family Home</h4>
              <ul className="text-white/70 text-sm space-y-1">
                <li>14 kW electric range</li>
                <li>5.5 kW clothes dryer</li>
                <li>4.5 kW water heater</li>
                <li>1.2 kW dishwasher</li>
                <li>0.5 kW garbage disposer</li>
                <li>5 kW air conditioning (240V)</li>
                <li>15 kW electric heat (5 separately controlled circuits)</li>
                <li>2 small appliance circuits, 1 laundry circuit</li>
              </ul>
            </div>

            <h3>Standard Method (220.40 through 220.55)</h3>
            <div className="bg-white/5 rounded-xl p-6 my-6">
              <table className="w-full text-left text-sm">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="py-2 text-white">Load Component</th>
                    <th className="py-2 text-white text-right">VA</th>
                  </tr>
                </thead>
                <tbody className="text-white/70">
                  <tr className="border-b border-white/5">
                    <td className="py-2">General lighting (3,000 sq ft x 3 VA)</td>
                    <td className="py-2 text-right">9,000 VA</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-2">Small appliance circuits (2 x 1,500 VA)</td>
                    <td className="py-2 text-right">3,000 VA</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-2">Laundry circuit</td>
                    <td className="py-2 text-right">1,500 VA</td>
                  </tr>
                  <tr className="border-b border-white/10">
                    <td className="py-2"><strong>Subtotal for Table 220.42</strong></td>
                    <td className="py-2 text-right"><strong>13,500 VA</strong></td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-2 text-amber-300">First 3,000 VA at 100%</td>
                    <td className="py-2 text-right text-amber-300">3,000 VA</td>
                  </tr>
                  <tr className="border-b border-white/10">
                    <td className="py-2 text-amber-300">Remaining 10,500 VA at 35%</td>
                    <td className="py-2 text-right text-amber-300">3,675 VA</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-2">Range: 8 kW + 5% x 2 (14 kW - 12 kW = 2 kW over, Note 1)</td>
                    <td className="py-2 text-right">8,800 VA</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-2">Dryer (5,500 VA nameplate, greater than 5,000 VA minimum)</td>
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
                    <td className="py-2">Disposer</td>
                    <td className="py-2 text-right">500 VA</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-2">Larger of heating or AC (per 220.60): 15 kW heat</td>
                    <td className="py-2 text-right">15,000 VA</td>
                  </tr>
                  <tr className="border-t border-white/10">
                    <td className="py-2 text-green-400"><strong>Total Calculated Load</strong></td>
                    <td className="py-2 text-right text-green-400"><strong>42,175 VA</strong></td>
                  </tr>
                </tbody>
              </table>
              <p className="text-white/70 mt-4">Service size: 42,175 VA / 240V = <strong>175.7A = 200A service</strong></p>
              <p className="text-white/50 text-sm mt-2">
                Total connected load was 54,400 VA. Demand factors saved 12,225 VA (22% reduction).
              </p>
            </div>

            <h3>Optional Method (220.82)</h3>
            <div className="bg-white/5 rounded-xl p-6 my-6">
              <table className="w-full text-left text-sm">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="py-2 text-white">Load Component</th>
                    <th className="py-2 text-white text-right">VA</th>
                  </tr>
                </thead>
                <tbody className="text-white/70">
                  <tr className="border-b border-white/5">
                    <td className="py-2">General lighting (3,000 sq ft x 3 VA)</td>
                    <td className="py-2 text-right">9,000 VA</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-2">Small appliance + laundry (3 x 1,500 VA)</td>
                    <td className="py-2 text-right">4,500 VA</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-2">Range (nameplate)</td>
                    <td className="py-2 text-right">14,000 VA</td>
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
                    <td className="py-2">Disposer</td>
                    <td className="py-2 text-right">500 VA</td>
                  </tr>
                  <tr className="border-b border-white/10">
                    <td className="py-2"><strong>Total before demand</strong></td>
                    <td className="py-2 text-right"><strong>39,200 VA</strong></td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-2 text-amber-300">First 10,000 VA at 100%</td>
                    <td className="py-2 text-right text-amber-300">10,000 VA</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-2 text-amber-300">Remaining 29,200 VA at 40%</td>
                    <td className="py-2 text-right text-amber-300">11,680 VA</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-2">Larger of AC (5,000 VA) or 40% of heat (15,000 x 0.40 = 6,000 VA): use heat</td>
                    <td className="py-2 text-right">6,000 VA</td>
                  </tr>
                  <tr className="border-t border-white/10">
                    <td className="py-2 text-green-400"><strong>Total Calculated Load</strong></td>
                    <td className="py-2 text-right text-green-400"><strong>27,680 VA</strong></td>
                  </tr>
                </tbody>
              </table>
              <p className="text-white/70 mt-4">Service size: 27,680 VA / 240V = <strong>115.3A = 125A service</strong></p>
              <p className="text-white/50 text-sm mt-2">
                The optional method yields a significantly smaller calculated load, potentially allowing a 125A or 150A service instead of 200A.
              </p>
            </div>

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

            <h2>Step-by-Step Commercial Example</h2>
            <p>
              Commercial buildings have their own set of demand factors. Let us calculate the service for a
              small restaurant to see how commercial demand factors reduce the calculated load.
            </p>
            <div className="bg-amber-500/10 border border-amber-500/30 rounded-xl p-6 my-6">
              <h4 className="text-amber-400 font-semibold mb-3">Given: 4,000 sq ft Restaurant</h4>
              <ul className="text-white/70 text-sm space-y-1">
                <li>General lighting: 4,000 sq ft x 2 VA/sq ft (per Table 220.12) = 8,000 VA</li>
                <li>Receptacle load: 20 receptacles x 180 VA = 3,600 VA</li>
                <li>Sign circuit: 1,200 VA minimum (per 220.14(F))</li>
                <li>8 pieces of commercial kitchen equipment totaling 120 kW</li>
                <li>20 kW HVAC system</li>
                <li>15 kW electric water heater (non-kitchen)</li>
                <li>Multioutlet assembly in prep area: 12 ft x 180 VA = 2,160 VA</li>
              </ul>
            </div>

            <div className="bg-white/5 rounded-xl p-6 my-6">
              <h4 className="text-white font-semibold mb-4">Commercial Standard Calculation</h4>
              <table className="w-full text-left text-sm">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="py-2 text-white">Load Component</th>
                    <th className="py-2 text-white text-right">VA</th>
                  </tr>
                </thead>
                <tbody className="text-white/70">
                  <tr className="border-b border-white/5">
                    <td className="py-2">General lighting (8,000 VA at 100% -- no demand factor for restaurants per Table 220.42)</td>
                    <td className="py-2 text-right">8,000 VA</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-2">Receptacle load: first 10 kVA at 100%</td>
                    <td className="py-2 text-right">3,600 VA</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-2">Sign circuit</td>
                    <td className="py-2 text-right">1,200 VA</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-2">Multioutlet assembly</td>
                    <td className="py-2 text-right">2,160 VA</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-2 text-amber-300">Kitchen equipment: 120 kW x 65% (8 units, Table 220.56)</td>
                    <td className="py-2 text-right text-amber-300">78,000 VA</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-2">HVAC</td>
                    <td className="py-2 text-right">20,000 VA</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-2">Water heater</td>
                    <td className="py-2 text-right">15,000 VA</td>
                  </tr>
                  <tr className="border-t border-white/10">
                    <td className="py-2 text-green-400"><strong>Total Calculated Load</strong></td>
                    <td className="py-2 text-right text-green-400"><strong>127,960 VA</strong></td>
                  </tr>
                </tbody>
              </table>
              <p className="text-white/70 mt-4">
                At 208V/3-phase: 127,960 / (208 x 1.732) = <strong>355A = 400A service</strong>
              </p>
              <p className="text-white/50 text-sm mt-2">
                Total connected load was 169,960 VA. The kitchen equipment demand factor alone saved 42,000 VA.
                Without demand factors, this would have required a 600A service.
              </p>
            </div>

            <h2>Cost Savings from Proper Demand Factor Application</h2>
            <p>
              The financial impact of correctly applying demand factors is substantial. Here is what oversizing
              a service typically costs:
            </p>
            <div className="grid md:grid-cols-2 gap-6 my-6">
              <div className="bg-white/5 rounded-xl p-6">
                <h4 className="text-red-400 font-semibold mb-3">Cost of Oversizing</h4>
                <ul className="text-white/70 text-sm space-y-2">
                  <li><strong>Service entrance conductors:</strong> Jumping from 200A to 400A copper service entrance conductors can add $2,000-$5,000 in conductor costs alone</li>
                  <li><strong>Panel/switchgear:</strong> A 400A panel costs 2-3 times more than a 200A panel</li>
                  <li><strong>Utility transformer:</strong> Larger transformer requirements increase utility charges</li>
                  <li><strong>Conduit sizing:</strong> Larger conductors require larger raceways, increasing material and labor</li>
                  <li><strong>Meter base:</strong> Higher-rated meter enclosures cost more</li>
                </ul>
              </div>
              <div className="bg-white/5 rounded-xl p-6">
                <h4 className="text-green-400 font-semibold mb-3">Savings Examples</h4>
                <ul className="text-white/70 text-sm space-y-2">
                  <li><strong>Residential:</strong> Correctly sizing from 400A to 200A saves $3,000-$8,000 on an average home</li>
                  <li><strong>Multifamily:</strong> Proper dryer and range demand factors on a 50-unit apartment can reduce service from 1200A to 800A, saving $15,000-$30,000</li>
                  <li><strong>Commercial kitchen:</strong> Kitchen equipment demand factors can reduce service by 1-2 sizes, saving $10,000-$25,000</li>
                  <li><strong>Overall:</strong> Industry estimates suggest proper demand factor application saves 15-40% on service entrance costs</li>
                </ul>
              </div>
            </div>
            <p>
              Beyond direct cost savings, right-sized services also reduce the available fault current at the
              service, which can simplify downstream overcurrent protection and arc flash considerations.
            </p>

            <h2>Common Mistakes</h2>
            <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-6 my-6">
              <h4 className="text-red-400 font-semibold mb-3">Watch Out For These Errors:</h4>
              <ul className="text-white/70 space-y-3">
                <li>
                  <strong>Applying demand factors to the wrong loads:</strong> Table 220.42 demand factors only
                  apply to general lighting, small appliance, and laundry loads combined. Do not apply them to
                  individual appliance loads like ranges, dryers, or water heaters.
                </li>
                <li>
                  <strong>Forgetting to apply Note 1 to Table 220.55:</strong> For ranges rated over 12 kW,
                  you must increase the Column A demand by 5% per kW over 12 kW. A 16 kW range has a demand of
                  8 kW + (4 x 5%) = 8 kW x 1.20 = 9.6 kW, not 8 kW.
                </li>
                <li>
                  <strong>Counting both heating and cooling loads:</strong> Per 220.60, use only the larger of
                  non-coincident loads. Counting both heating and AC inflates the calculated load.
                </li>
                <li>
                  <strong>Using the optional method for multifamily feeders:</strong> The 220.82 optional method
                  applies to individual dwelling units. For multifamily building services, use 220.84 or the
                  standard method.
                </li>
                <li>
                  <strong>Ignoring the 5,000 VA minimum for dryers:</strong> Even if the dryer nameplate is
                  4,000 watts, you must use 5,000 VA in the standard calculation per 220.54.
                </li>
                <li>
                  <strong>Applying Table 220.56 to residential ranges:</strong> Table 220.56 is for commercial
                  kitchen equipment. Residential ranges use Table 220.55. These are different tables with
                  different demand factors.
                </li>
                <li>
                  <strong>Not adjusting for motor loads:</strong> The largest motor load must have an additional
                  25% added per 220.50, and this is done before or separate from demand factors.
                </li>
                <li>
                  <strong>Double-dipping demand factors:</strong> You cannot apply Table 220.42 demand factors
                  and then also apply optional method demand factors. Use one method or the other, not both.
                </li>
              </ul>
            </div>

            <h2>When to Use Standard vs. Optional Method</h2>
            <p>
              Choosing the right calculation method can make a meaningful difference in service size and cost:
            </p>
            <div className="bg-white/5 rounded-xl p-6 my-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-white font-semibold mb-3">Use Standard Method When:</h4>
                  <ul className="text-white/70 text-sm space-y-2">
                    <li>Calculating multifamily building services</li>
                    <li>Working on commercial or industrial projects</li>
                    <li>The inspector requires it</li>
                    <li>You need the most conservative (largest) result</li>
                    <li>The dwelling has less than 10 kVA connected load</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-3">Use Optional Method When:</h4>
                  <ul className="text-white/70 text-sm space-y-2">
                    <li>Single dwelling unit with 10 kVA or more connected load</li>
                    <li>You want a simpler calculation</li>
                    <li>The standard method yields an oversized service</li>
                    <li>Adding loads to an existing dwelling</li>
                    <li>The authority having jurisdiction (AHJ) permits it</li>
                  </ul>
                </div>
              </div>
            </div>

            <h2>Demand Factors for Service and Feeder Sizing</h2>
            <p>
              It is important to understand that demand factors apply at the service and feeder level, not at the
              branch circuit level. Individual branch circuits must still be sized for the full load they serve.
              A 20A kitchen small appliance circuit must use #12 AWG wire rated for 20A regardless of demand factors.
            </p>
            <p>
              However, when those branch circuit loads are aggregated into the feeder or service calculation,
              demand factors reduce the total. This is where the savings happen -- at the upstream equipment level.
              The feeder to a subpanel serving multiple circuits can be smaller than the sum of all branch circuit
              ratings because of demand factors.
            </p>

            <h2>Use Ampora for Load Calculations</h2>
            <p>
              Demand factor calculations involve multiple NEC tables, notes, and exceptions. A single mistake can
              result in an oversized (costly) or undersized (dangerous) service. The Ampora app provides built-in
              electrical calculators that apply the correct demand factors automatically, with direct NEC code
              references so you can verify every step. Whether you are sizing a residential service or a
              commercial kitchen, Ampora helps you get it right the first time.
            </p>
          </div>

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

          {/* Related Posts */}
          <div className="mt-12 pt-8 border-t border-white/10">
            <h3 className="text-xl font-display font-bold mb-6">Related Articles</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <Link href="/blog/residential-load-calculations" className="group bg-white/5 hover:bg-white/10 rounded-xl p-6 transition-all">
                <h4 className="font-semibold group-hover:text-amber-400 transition-colors">Residential Load Calculations: NEC Article 220 Guide</h4>
                <p className="text-white/60 text-sm mt-2">Master the standard and optional methods for residential service sizing.</p>
              </Link>
              <Link href="/blog/electrical-service-upgrade-200-amp" className="group bg-white/5 hover:bg-white/10 rounded-xl p-6 transition-all">
                <h4 className="font-semibold group-hover:text-amber-400 transition-colors">200 Amp Service Upgrade Guide</h4>
                <p className="text-white/60 text-sm mt-2">Complete guide to upgrading residential electrical service to 200 amps.</p>
              </Link>
            </div>
          </div>
        </article>
      </div>
    </main>
  );
}
