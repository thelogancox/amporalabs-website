import { Metadata } from "next";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import { BreadcrumbJsonLd, BlogPostingJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Electrical Load Balancing: How to Balance a Residential Panel",
  description: "Learn how to balance electrical loads across a residential panel. Understand 120V vs 240V distribution, measure with an amp clamp, calculate neutral current, and avoid overloaded legs with practical examples.",
  keywords: [
    "electrical load balancing",
    "balance residential panel",
    "panel load balancing",
    "amp clamp measurement",
    "120V vs 240V distribution",
    "neutral current calculation",
    "unbalanced panel",
    "electrical panel legs",
    "load distribution",
    "residential electrical panel",
    "leg A leg B balancing",
    "single phase panel",
    "breaker load balance",
    "panel schedule"
  ],
  alternates: {
    canonical: "https://amporalabs.com/blog/electrical-load-balancing-guide",
  },
  openGraph: {
    title: "Electrical Load Balancing: How to Balance a Residential Panel - Ampora",
    description: "Complete guide to balancing electrical loads across a residential panel with practical measurement techniques and examples.",
    url: "https://amporalabs.com/blog/electrical-load-balancing-guide",
    type: "article",
  },
};

function HeroIllustration() {
  return (
    <svg viewBox="0 0 400 160" className="w-full h-40 md:h-48" aria-label="Residential panel load balancing illustration showing balanced legs">
      {/* Panel outline */}
      <g transform="translate(130, 10)">
        <rect x="0" y="0" width="140" height="140" rx="6" fill="#1f2937" stroke="#6b7280" strokeWidth="2"/>
        <rect x="8" y="8" width="124" height="124" fill="#111827"/>

        {/* Main breaker */}
        <rect x="42" y="14" width="56" height="20" rx="3" fill="#374151" stroke="#f59e0b" strokeWidth="1.5"/>
        <text x="70" y="28" textAnchor="middle" fill="#f59e0b" fontSize="8" fontWeight="bold">200A MAIN</text>

        {/* Leg A label */}
        <text x="35" y="48" textAnchor="middle" fill="#3b82f6" fontSize="7" fontWeight="bold">Leg A</text>
        {/* Leg B label */}
        <text x="105" y="48" textAnchor="middle" fill="#ef4444" fontSize="7" fontWeight="bold">Leg B</text>

        {/* Breakers - Left (odd) */}
        {[0, 1, 2, 3, 4].map((i) => (
          <g key={`left-${i}`}>
            <rect x="14" y={55 + i * 16} width="40" height="12" rx="2" fill="#374151" stroke="#3b82f6" strokeWidth="0.5"/>
            <text x="34" y={64 + i * 16} textAnchor="middle" fill="#9ca3af" fontSize="6">{[15, 20, 20, 15, 30][i]}A</text>
          </g>
        ))}

        {/* Breakers - Right (even) */}
        {[0, 1, 2, 3, 4].map((i) => (
          <g key={`right-${i}`}>
            <rect x="86" y={55 + i * 16} width="40" height="12" rx="2" fill="#374151" stroke="#ef4444" strokeWidth="0.5"/>
            <text x="106" y={64 + i * 16} textAnchor="middle" fill="#9ca3af" fontSize="6">{[20, 15, 30, 20, 15][i]}A</text>
          </g>
        ))}
      </g>

      {/* Balance scale */}
      <g transform="translate(20, 30)">
        <line x1="50" y1="10" x2="50" y2="50" stroke="#6b7280" strokeWidth="2"/>
        <line x1="20" y1="50" x2="80" y2="50" stroke="#6b7280" strokeWidth="2"/>
        <circle cx="50" cy="10" r="4" fill="#f59e0b"/>
        <text x="20" y="70" textAnchor="middle" fill="#3b82f6" fontSize="8" fontWeight="bold">48A</text>
        <text x="80" y="70" textAnchor="middle" fill="#ef4444" fontSize="8" fontWeight="bold">52A</text>
        <text x="50" y="90" textAnchor="middle" fill="#22c55e" fontSize="7">Balanced</text>
      </g>

      {/* Amp clamp illustration */}
      <g transform="translate(310, 20)">
        <rect x="0" y="0" width="60" height="80" rx="4" fill="#1f2937" stroke="#22c55e" strokeWidth="2"/>
        <rect x="10" y="8" width="40" height="24" fill="#111827"/>
        <text x="30" y="24" textAnchor="middle" fill="#22c55e" fontSize="9" fontWeight="bold">48.2A</text>
        <path d="M 15 45 Q 10 55 15 65 Q 20 75 30 75 Q 40 75 45 65 Q 50 55 45 45" stroke="#22c55e" strokeWidth="2" fill="none"/>
        <text x="30" y="100" textAnchor="middle" fill="#9ca3af" fontSize="7">Amp Clamp</text>
      </g>
    </svg>
  );
}

export default function ElectricalLoadBalancingPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navigation />
      <div className="pt-20">
        <BreadcrumbJsonLd
          items={[
            { name: "Home", url: "https://amporalabs.com" },
            { name: "Blog", url: "https://amporalabs.com/blog" },
            { name: "Electrical Load Balancing Guide", url: "https://amporalabs.com/blog/electrical-load-balancing-guide" },
          ]}
        />
        <BlogPostingJsonLd
          headline="Electrical Load Balancing: How to Balance a Residential Panel"
          description="Learn how to balance electrical loads across a residential panel with measurement techniques, calculation methods, and practical examples."
          datePublished="2025-02-08"
          dateModified="2025-02-08"
          url="https://amporalabs.com/blog/electrical-load-balancing-guide"
          wordCount={2600}
          keywords={["load balancing", "residential panel", "amp clamp", "neutral current", "panel legs", "120V 240V distribution"]}
        />

        <article className="max-w-4xl mx-auto px-6 py-12">
          {/* Breadcrumb */}
          <nav className="text-sm text-white/60 mb-8">
            <Link href="/" className="hover:text-white">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/blog" className="hover:text-white">Blog</Link>
            <span className="mx-2">/</span>
            <span className="text-white">Electrical Load Balancing</span>
          </nav>

          {/* Article Header */}
          <header className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <span className="px-3 py-1 bg-amber-600/30 text-amber-300 text-sm font-medium rounded-full">
                Calculations
              </span>
              <span className="text-white/40 text-sm">10 min read</span>
              <span className="text-white/40 text-sm">February 8, 2025</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6 leading-tight">
              Electrical Load Balancing: How to Balance a Residential Panel
            </h1>
            <p className="text-xl text-white/70">
              An unbalanced panel causes premature breaker wear, excessive neutral current, and voltage fluctuations. Here&apos;s how to properly distribute loads across both legs of a single-phase service.
            </p>
          </header>

          <div className="mb-12 bg-gradient-to-br from-amber-900/20 to-blue-900/20 rounded-2xl p-6 border border-white/10">
            <HeroIllustration />
          </div>

          {/* Table of Contents */}
          <div className="bg-white/5 rounded-2xl p-6 mb-12">
            <h2 className="font-display font-bold mb-4">In This Guide</h2>
            <ul className="space-y-2 text-white/70">
              <li><a href="#why-balance" className="hover:text-purple-400">&#8594; Why Load Balancing Matters</a></li>
              <li><a href="#how-panels-work" className="hover:text-purple-400">&#8594; How 120V/240V Distribution Works</a></li>
              <li><a href="#measuring-loads" className="hover:text-purple-400">&#8594; Measuring Loads with an Amp Clamp</a></li>
              <li><a href="#neutral-current" className="hover:text-purple-400">&#8594; Understanding Neutral Current</a></li>
              <li><a href="#balancing-process" className="hover:text-purple-400">&#8594; Step-by-Step Balancing Process</a></li>
              <li><a href="#panel-schedule" className="hover:text-purple-400">&#8594; Creating a Panel Schedule</a></li>
              <li><a href="#examples" className="hover:text-purple-400">&#8594; Practical Balancing Examples</a></li>
              <li><a href="#common-mistakes" className="hover:text-purple-400">&#8594; Common Mistakes to Avoid</a></li>
            </ul>
          </div>

          {/* Article Content */}
          <div className="prose prose-invert prose-lg max-w-none">

            <section id="why-balance" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Why Load Balancing Matters</h2>
              <p className="text-white/80 mb-4">
                In a properly balanced residential panel, both legs (Leg A and Leg B) carry approximately the same amount of current. When loads are unevenly distributed, several problems can occur.
              </p>
              <div className="bg-orange-900/30 rounded-xl p-6 my-6">
                <h3 className="font-semibold text-orange-400 mb-2">Consequences of an Unbalanced Panel</h3>
                <ul className="text-white/70 text-sm space-y-1">
                  <li>&bull; <strong>Excessive neutral current:</strong> The neutral carries the difference between the two legs, increasing heat and potential for failure</li>
                  <li>&bull; <strong>Voltage imbalance:</strong> The heavily loaded leg drops in voltage while the lightly loaded leg rises above nominal</li>
                  <li>&bull; <strong>Premature equipment wear:</strong> Motors and electronics perform poorly with unbalanced voltage</li>
                  <li>&bull; <strong>Wasted capacity:</strong> One leg may be near capacity while the other has significant headroom</li>
                  <li>&bull; <strong>Nuisance tripping:</strong> The overloaded leg is more likely to trip the main breaker</li>
                </ul>
              </div>
              <p className="text-white/80 mb-4">
                The NEC does not specify a maximum allowable imbalance for residential panels, but best practice is to keep the difference between legs to within 10-15% of total load. A perfectly balanced panel is the goal every electrician should aim for when installing or reorganizing circuits.
              </p>
            </section>

            <section id="how-panels-work" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">How 120V/240V Distribution Works</h2>
              <p className="text-white/80 mb-4">
                A standard residential service in North America is a single-phase, three-wire, 120/240V system. The utility transformer supplies two hot conductors (Line 1 and Line 2) and a grounded neutral conductor. Each hot line carries 120V to ground, and the two hots are 180 degrees out of phase with each other, producing 240V between them.
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-3">Panel Bus Bar Layout</h3>
              <p className="text-white/80 mb-4">
                Inside the panel, the bus bars alternate connections. In most panels, breaker positions alternate between legs:
              </p>
              <div className="overflow-x-auto my-6">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-white/20">
                      <th className="text-left py-3 px-4 text-white/60">Position</th>
                      <th className="text-left py-3 px-4 text-white/60">Left Side (Odd)</th>
                      <th className="text-left py-3 px-4 text-white/60">Right Side (Even)</th>
                    </tr>
                  </thead>
                  <tbody className="text-white/80">
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">Row 1</td>
                      <td className="py-3 px-4 text-blue-400">Leg A (Circuit 1)</td>
                      <td className="py-3 px-4 text-red-400">Leg B (Circuit 2)</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">Row 2</td>
                      <td className="py-3 px-4 text-red-400">Leg B (Circuit 3)</td>
                      <td className="py-3 px-4 text-blue-400">Leg A (Circuit 4)</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">Row 3</td>
                      <td className="py-3 px-4 text-blue-400">Leg A (Circuit 5)</td>
                      <td className="py-3 px-4 text-red-400">Leg B (Circuit 6)</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4">Row 4</td>
                      <td className="py-3 px-4 text-red-400">Leg B (Circuit 7)</td>
                      <td className="py-3 px-4 text-blue-400">Leg A (Circuit 8)</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="bg-cyan-900/30 rounded-xl p-6 my-6">
                <h3 className="font-semibold text-cyan-400 mb-2">240V Circuits</h3>
                <p className="text-white/70">
                  A 240V double-pole breaker occupies two adjacent spaces in the same row, connecting to both Leg A and Leg B. Because it draws equally from both legs, a 240V circuit does not create an imbalance. This is why appliances like dryers, ranges, and water heaters (all 240V) help keep the panel balanced inherently.
                </p>
              </div>
            </section>

            <section id="measuring-loads" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Measuring Loads with an Amp Clamp</h2>
              <p className="text-white/80 mb-4">
                The most effective way to assess load balance is to measure actual current draw using a clamp-on ammeter (amp clamp). Here&apos;s the procedure for measuring panel balance in the field.
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-3">Method 1: Measure at the Service Entrance Conductors</h3>
              <div className="space-y-4 my-6">
                <div className="bg-white/5 rounded-xl p-4">
                  <p className="text-amber-400 font-semibold">Step 1: Identify the two hot conductors</p>
                  <p className="text-white/60 text-sm mt-1">Locate Line 1 and Line 2 where they enter the main breaker. These are typically the two largest conductors in the panel.</p>
                </div>
                <div className="bg-white/5 rounded-xl p-4">
                  <p className="text-amber-400 font-semibold">Step 2: Clamp around Line 1 (Leg A)</p>
                  <p className="text-white/60 text-sm mt-1">Place the clamp around only one conductor. Record the reading. For example: 48.2A.</p>
                </div>
                <div className="bg-white/5 rounded-xl p-4">
                  <p className="text-amber-400 font-semibold">Step 3: Clamp around Line 2 (Leg B)</p>
                  <p className="text-white/60 text-sm mt-1">Move the clamp to the other hot conductor. Record the reading. For example: 52.6A.</p>
                </div>
                <div className="bg-white/5 rounded-xl p-4">
                  <p className="text-amber-400 font-semibold">Step 4: Calculate the imbalance</p>
                  <p className="text-white/60 text-sm mt-1">Difference: 52.6 - 48.2 = 4.4A. Percentage: 4.4 / 50.4 (average) = 8.7%. This panel is reasonably balanced.</p>
                </div>
              </div>

              <h3 className="text-xl font-semibold mt-6 mb-3">Method 2: Measure Individual Circuits</h3>
              <p className="text-white/80 mb-4">
                For a more detailed picture, measure each branch circuit individually. Clamp each hot conductor where it exits its breaker. Record the amperage on each circuit, then total up Leg A and Leg B separately. This method takes more time but reveals exactly which circuits are the heaviest loads.
              </p>

              <div className="bg-green-900/30 rounded-xl p-6 my-6">
                <h3 className="font-semibold text-green-400 mb-2">Best Time to Measure</h3>
                <p className="text-white/70">
                  Loads fluctuate throughout the day. For the most useful data, measure during peak usage times - typically early evening when cooking, HVAC, lighting, and entertainment systems are all running simultaneously. Take readings at multiple times if possible to understand the load profile.
                </p>
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

            <section id="neutral-current" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Understanding Neutral Current</h2>
              <p className="text-white/80 mb-4">
                In a balanced single-phase 120/240V system, the neutral conductor carries the <strong>difference</strong> in current between the two legs. This is because the two 120V loads are 180 degrees out of phase - their return currents partially cancel each other on the shared neutral.
              </p>

              <div className="bg-white/5 rounded-xl p-6 my-6">
                <h4 className="text-white font-semibold mb-4">Neutral Current Formula</h4>
                <p className="text-white font-mono text-lg mb-2">I(neutral) = |I(Leg A) - I(Leg B)|</p>
                <p className="text-white/70 mt-4">Example calculations:</p>
                <ul className="text-white/60 text-sm mt-2 space-y-1">
                  <li>&bull; Leg A = 50A, Leg B = 50A &#8594; Neutral = 0A (perfectly balanced)</li>
                  <li>&bull; Leg A = 60A, Leg B = 40A &#8594; Neutral = 20A</li>
                  <li>&bull; Leg A = 80A, Leg B = 20A &#8594; Neutral = 60A (severely unbalanced)</li>
                </ul>
              </div>

              <div className="bg-purple-900/30 rounded-xl p-6 my-6">
                <h3 className="font-semibold text-purple-400 mb-2">Why High Neutral Current Is a Problem</h3>
                <p className="text-white/70">
                  The neutral conductor is sized to carry the maximum unbalanced current. In a severely unbalanced panel, the neutral may carry nearly as much current as one of the hot legs. This causes heating in the neutral conductor and its connections, which can lead to loose connections, melted insulation, and potential fire hazards. In older homes with undersized neutrals, this risk is even greater.
                </p>
              </div>
            </section>

            <section id="balancing-process" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Step-by-Step Balancing Process</h2>
              <p className="text-white/80 mb-4">
                Whether you&apos;re installing a new panel or reorganizing an existing one, follow this systematic approach to achieve proper load balance.
              </p>

              <div className="space-y-4 my-6">
                <div className="bg-white/5 rounded-xl p-4">
                  <p className="text-amber-400 font-semibold">Step 1: Document current circuit assignments</p>
                  <p className="text-white/60 text-sm mt-1">List every circuit, its breaker size, the leg it occupies, and the actual measured load. A panel schedule template makes this organized.</p>
                </div>
                <div className="bg-white/5 rounded-xl p-4">
                  <p className="text-amber-400 font-semibold">Step 2: Identify 240V circuits</p>
                  <p className="text-white/60 text-sm mt-1">Mark all double-pole breakers. These are inherently balanced and do not need to be moved. They include range, dryer, water heater, HVAC, and EV charger circuits.</p>
                </div>
                <div className="bg-white/5 rounded-xl p-4">
                  <p className="text-amber-400 font-semibold">Step 3: Total up each leg</p>
                  <p className="text-white/60 text-sm mt-1">Add the measured amperage of all 120V circuits on Leg A and separately on Leg B. Exclude 240V circuits since they draw equally from both legs.</p>
                </div>
                <div className="bg-white/5 rounded-xl p-4">
                  <p className="text-amber-400 font-semibold">Step 4: Identify circuits to swap</p>
                  <p className="text-white/60 text-sm mt-1">Move 120V circuits from the heavier leg to the lighter leg. Target high-draw circuits (kitchen, laundry, bathroom heaters) for the biggest impact with the fewest moves.</p>
                </div>
                <div className="bg-white/5 rounded-xl p-4">
                  <p className="text-amber-400 font-semibold">Step 5: Verify and re-measure</p>
                  <p className="text-white/60 text-sm mt-1">After moving breakers, re-measure both legs to confirm improved balance. Update the panel schedule and directory.</p>
                </div>
              </div>
            </section>

            <section id="panel-schedule" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Creating a Panel Schedule</h2>
              <p className="text-white/80 mb-4">
                A panel schedule documents every circuit in the panel, showing its position, breaker size, description, and which leg it connects to. This is essential for proper load balancing and future maintenance.
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-3">Sample Panel Schedule (200A Panel)</h3>
              <div className="overflow-x-auto my-6">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-white/20">
                      <th className="text-left py-3 px-4 text-white/60">Ckt #</th>
                      <th className="text-left py-3 px-4 text-white/60">Description</th>
                      <th className="text-left py-3 px-4 text-white/60">Amps</th>
                      <th className="text-left py-3 px-4 text-white/60">Leg A (VA)</th>
                      <th className="text-left py-3 px-4 text-white/60">Leg B (VA)</th>
                    </tr>
                  </thead>
                  <tbody className="text-white/80">
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">1</td>
                      <td className="py-3 px-4">Kitchen receptacles</td>
                      <td className="py-3 px-4">20A</td>
                      <td className="py-3 px-4 text-blue-400">1,920</td>
                      <td className="py-3 px-4">-</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">2</td>
                      <td className="py-3 px-4">Kitchen receptacles</td>
                      <td className="py-3 px-4">20A</td>
                      <td className="py-3 px-4">-</td>
                      <td className="py-3 px-4 text-red-400">1,920</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">3/5</td>
                      <td className="py-3 px-4">Range (240V)</td>
                      <td className="py-3 px-4">40A</td>
                      <td className="py-3 px-4 text-blue-400">4,800</td>
                      <td className="py-3 px-4 text-red-400">4,800</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">4</td>
                      <td className="py-3 px-4">Bathroom/hall lighting</td>
                      <td className="py-3 px-4">15A</td>
                      <td className="py-3 px-4">-</td>
                      <td className="py-3 px-4 text-red-400">1,200</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">7</td>
                      <td className="py-3 px-4">Living room receptacles</td>
                      <td className="py-3 px-4">15A</td>
                      <td className="py-3 px-4 text-blue-400">1,440</td>
                      <td className="py-3 px-4">-</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">8</td>
                      <td className="py-3 px-4">Bedroom receptacles</td>
                      <td className="py-3 px-4">15A</td>
                      <td className="py-3 px-4">-</td>
                      <td className="py-3 px-4 text-red-400">1,320</td>
                    </tr>
                    <tr className="border-t border-white/10">
                      <td className="py-3 px-4" colSpan={3}><strong>120V Totals</strong></td>
                      <td className="py-3 px-4 text-blue-400"><strong>3,360</strong></td>
                      <td className="py-3 px-4 text-red-400"><strong>4,440</strong></td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-white/60 text-sm">
                In this example, Leg B carries about 32% more 120V load than Leg A. Moving one circuit from Leg B to Leg A would improve balance significantly.
              </p>
            </section>

            <section id="examples" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Practical Balancing Examples</h2>

              <h3 className="text-xl font-semibold mt-6 mb-3">Example 1: New Home Installation</h3>
              <div className="bg-white/5 rounded-xl p-6 my-6">
                <p className="text-white/70 mb-4">
                  Planning a 200A panel for a 2,400 sq ft home with the following 120V loads:
                </p>
                <ul className="text-white/60 text-sm space-y-1 mb-4">
                  <li>&bull; 2 kitchen receptacle circuits (20A each) - 1,500 VA each</li>
                  <li>&bull; 1 laundry circuit (20A) - 1,500 VA</li>
                  <li>&bull; 1 bathroom circuit (20A) - 1,200 VA</li>
                  <li>&bull; 1 garage circuit (20A) - 1,800 VA</li>
                  <li>&bull; 3 general lighting circuits (15A each) - 1,200 VA each</li>
                  <li>&bull; 2 bedroom receptacle circuits (15A each) - 1,080 VA each</li>
                </ul>
                <p className="text-white/70 mb-2"><strong>Balanced assignment:</strong></p>
                <p className="text-blue-400 text-sm">Leg A: Kitchen 1 (1,500) + Laundry (1,500) + Lighting 1 (1,200) + Bedroom 1 (1,080) = 5,280 VA</p>
                <p className="text-red-400 text-sm">Leg B: Kitchen 2 (1,500) + Bathroom (1,200) + Garage (1,800) + Lighting 2 (1,200) = 5,700 VA</p>
                <p className="text-green-400 text-sm mt-2">Imbalance: 420 VA (7.5%) - Acceptable</p>
              </div>

              <h3 className="text-xl font-semibold mt-6 mb-3">Example 2: Existing Panel Rebalance</h3>
              <div className="bg-white/5 rounded-xl p-6 my-6">
                <p className="text-white/70 mb-4">
                  Measured readings show Leg A at 62A and Leg B at 38A during peak usage. The difference is 24A (38% imbalance).
                </p>
                <p className="text-white/70 mb-2"><strong>Investigation reveals:</strong></p>
                <ul className="text-white/60 text-sm space-y-1 mb-4">
                  <li>&bull; Space heater circuit (12A) is on Leg A</li>
                  <li>&bull; Workshop circuit (8A) is on Leg A</li>
                </ul>
                <p className="text-white/70 mb-2"><strong>Solution:</strong> Move the space heater circuit from Leg A to Leg B.</p>
                <p className="text-blue-400 text-sm">New Leg A: 62 - 12 = 50A</p>
                <p className="text-red-400 text-sm">New Leg B: 38 + 12 = 50A</p>
                <p className="text-green-400 text-sm mt-2">Result: Perfectly balanced!</p>
              </div>
            </section>

            <section id="common-mistakes" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Common Mistakes to Avoid</h2>
              <div className="space-y-4 my-6">
                <div className="bg-white/5 rounded-xl p-4">
                  <h4 className="font-semibold text-white">Balancing by breaker rating instead of actual load</h4>
                  <p className="text-white/60 text-sm mt-1">A 20A breaker drawing 5A is not the same as a 20A breaker drawing 16A. Always measure actual current, not just add up breaker ratings.</p>
                </div>
                <div className="bg-white/5 rounded-xl p-4">
                  <h4 className="font-semibold text-white">Ignoring variable loads</h4>
                  <p className="text-white/60 text-sm mt-1">HVAC systems, well pumps, and EV chargers cycle on and off. Consider peak coincident load when balancing, not just what&apos;s running at the moment you measure.</p>
                </div>
                <div className="bg-white/5 rounded-xl p-4">
                  <h4 className="font-semibold text-white">Forgetting to update the panel directory</h4>
                  <p className="text-white/60 text-sm mt-1">After moving circuits, always update the panel schedule/directory inside the panel door. An inaccurate directory is worse than no directory.</p>
                </div>
                <div className="bg-white/5 rounded-xl p-4">
                  <h4 className="font-semibold text-white">Not considering future loads</h4>
                  <p className="text-white/60 text-sm mt-1">If the homeowner plans to add an EV charger or hot tub, factor those 240V loads into the panel layout before finalizing the balance.</p>
                </div>
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
                <Link href="/blog/residential-load-calculations" className="bg-white/5 hover:bg-white/10 rounded-xl p-6 transition-colors">
                  <span className="text-amber-400 text-sm">Calculations</span>
                  <h3 className="font-semibold mt-2">Residential Load Calculations: NEC Article 220 Guide</h3>
                </Link>
                <Link href="/blog/electrical-panel-troubleshooting" className="bg-white/5 hover:bg-white/10 rounded-xl p-6 transition-colors">
                  <span className="text-red-400 text-sm">Troubleshooting</span>
                  <h3 className="font-semibold mt-2">Electrical Panel Troubleshooting: Common Problems &amp; Solutions</h3>
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
