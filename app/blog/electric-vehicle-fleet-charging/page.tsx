import { Metadata } from "next";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import { BlogPostingJsonLd, BreadcrumbJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Commercial EV Fleet Charging Infrastructure Design | Electrician Guide",
  description: "Complete guide to designing commercial EV fleet charging infrastructure. Learn electrical service sizing, load management, NEC 625 requirements, transformer considerations, OCPP networking, and future-proofing strategies for fleet depots.",
  keywords: [
    "EV fleet charging infrastructure",
    "commercial EVSE installation",
    "fleet depot charging design",
    "NEC Article 625 commercial",
    "EV load management",
    "DC fast charging fleet",
    "OCPP charging network",
    "fleet charging electrical service",
    "demand charge mitigation EV",
    "electric vehicle fleet depot"
  ],
  openGraph: {
    title: "Commercial EV Fleet Charging Infrastructure Design",
    description: "Complete guide to designing commercial EV fleet charging infrastructure for electricians.",
    type: "article",
    publishedTime: "2025-04-25",
  },
};

function HeroIllustration() {
  return (
    <svg viewBox="0 0 400 200" className="w-full h-44 md:h-52" aria-label="Commercial EV fleet charging depot illustration">
      {/* Ground / Depot Surface */}
      <rect x="0" y="155" width="400" height="45" fill="#1f2937"/>
      <line x1="0" y1="155" x2="400" y2="155" stroke="#374151" strokeWidth="1.5"/>

      {/* Parking lines */}
      <line x1="70" y1="155" x2="70" y2="200" stroke="#4b5563" strokeWidth="1" strokeDasharray="4,3"/>
      <line x1="145" y1="155" x2="145" y2="200" stroke="#4b5563" strokeWidth="1" strokeDasharray="4,3"/>
      <line x1="220" y1="155" x2="220" y2="200" stroke="#4b5563" strokeWidth="1" strokeDasharray="4,3"/>
      <line x1="295" y1="155" x2="295" y2="200" stroke="#4b5563" strokeWidth="1" strokeDasharray="4,3"/>

      {/* Utility / Transformer */}
      <g transform="translate(15, 20)">
        <rect x="0" y="0" width="45" height="35" rx="3" fill="#1e3a5f" stroke="#3b82f6" strokeWidth="2"/>
        <text x="22" y="14" textAnchor="middle" fill="#3b82f6" fontSize="7" fontWeight="bold">UTILITY</text>
        <text x="22" y="24" textAnchor="middle" fill="#60a5fa" fontSize="6">480V 3PH</text>
        <rect x="5" y="42" width="35" height="25" rx="3" fill="#374151" stroke="#f59e0b" strokeWidth="1.5"/>
        <text x="22" y="55" textAnchor="middle" fill="#f59e0b" fontSize="6" fontWeight="bold">XFMR</text>
        <text x="22" y="63" textAnchor="middle" fill="#fbbf24" fontSize="5">1500kVA</text>
      </g>

      {/* Main feeder line */}
      <line x1="37" y1="87" x2="37" y2="105" stroke="#f59e0b" strokeWidth="2"/>
      <line x1="37" y1="105" x2="370" y2="105" stroke="#22c55e" strokeWidth="2"/>

      {/* Load Management Controller */}
      <g transform="translate(165, 88)">
        <rect x="0" y="0" width="70" height="22" rx="3" fill="#1e3a5f" stroke="#8b5cf6" strokeWidth="1.5"/>
        <text x="35" y="10" textAnchor="middle" fill="#8b5cf6" fontSize="6" fontWeight="bold">LOAD MGMT</text>
        <text x="35" y="18" textAnchor="middle" fill="#a78bfa" fontSize="5">OCPP Controller</text>
      </g>

      {/* Charging Station 1 - DC Fast */}
      <g transform="translate(72, 112)">
        <line x1="15" y1="-7" x2="15" y2="0" stroke="#22c55e" strokeWidth="1.5"/>
        <rect x="0" y="0" width="30" height="40" rx="4" fill="#1f2937" stroke="#06b6d4" strokeWidth="2"/>
        <rect x="5" y="6" width="20" height="10" rx="2" fill="#111827"/>
        <text x="15" y="13" textAnchor="middle" fill="#06b6d4" fontSize="5" fontWeight="bold">150kW</text>
        <circle cx="15" cy="28" r="5" fill="#06b6d4" fillOpacity="0.3" stroke="#06b6d4" strokeWidth="1.5"/>
        <text x="15" y="30" textAnchor="middle" fill="#06b6d4" fontSize="5">DC</text>
        <text x="15" y="48" textAnchor="middle" fill="#06b6d4" fontSize="5" fontWeight="bold">DCFC</text>
      </g>

      {/* Charging Station 2 - DC Fast */}
      <g transform="translate(147, 112)">
        <line x1="15" y1="-7" x2="15" y2="0" stroke="#22c55e" strokeWidth="1.5"/>
        <rect x="0" y="0" width="30" height="40" rx="4" fill="#1f2937" stroke="#06b6d4" strokeWidth="2"/>
        <rect x="5" y="6" width="20" height="10" rx="2" fill="#111827"/>
        <text x="15" y="13" textAnchor="middle" fill="#06b6d4" fontSize="5" fontWeight="bold">150kW</text>
        <circle cx="15" cy="28" r="5" fill="#06b6d4" fillOpacity="0.3" stroke="#06b6d4" strokeWidth="1.5"/>
        <text x="15" y="30" textAnchor="middle" fill="#06b6d4" fontSize="5">DC</text>
        <text x="15" y="48" textAnchor="middle" fill="#06b6d4" fontSize="5" fontWeight="bold">DCFC</text>
      </g>

      {/* Charging Station 3 - Level 2 */}
      <g transform="translate(222, 112)">
        <line x1="15" y1="-7" x2="15" y2="0" stroke="#22c55e" strokeWidth="1.5"/>
        <rect x="0" y="0" width="30" height="40" rx="4" fill="#1f2937" stroke="#22c55e" strokeWidth="2"/>
        <rect x="5" y="6" width="20" height="10" rx="2" fill="#111827"/>
        <text x="15" y="13" textAnchor="middle" fill="#22c55e" fontSize="6" fontWeight="bold">L2</text>
        <circle cx="15" cy="28" r="5" fill="#22c55e" fillOpacity="0.3" stroke="#22c55e" strokeWidth="1.5"/>
        <text x="15" y="30" textAnchor="middle" fill="#22c55e" fontSize="5">AC</text>
        <text x="15" y="48" textAnchor="middle" fill="#22c55e" fontSize="5">19.2kW</text>
      </g>

      {/* Charging Station 4 - Level 2 */}
      <g transform="translate(297, 112)">
        <line x1="15" y1="-7" x2="15" y2="0" stroke="#22c55e" strokeWidth="1.5"/>
        <rect x="0" y="0" width="30" height="40" rx="4" fill="#1f2937" stroke="#22c55e" strokeWidth="2"/>
        <rect x="5" y="6" width="20" height="10" rx="2" fill="#111827"/>
        <text x="15" y="13" textAnchor="middle" fill="#22c55e" fontSize="6" fontWeight="bold">L2</text>
        <circle cx="15" cy="28" r="5" fill="#22c55e" fillOpacity="0.3" stroke="#22c55e" strokeWidth="1.5"/>
        <text x="15" y="30" textAnchor="middle" fill="#22c55e" fontSize="5">AC</text>
        <text x="15" y="48" textAnchor="middle" fill="#22c55e" fontSize="5">19.2kW</text>
      </g>

      {/* Vehicle 1 */}
      <g transform="translate(65, 155)">
        <rect x="0" y="2" width="45" height="18" rx="3" fill="#374151" stroke="#4b5563" strokeWidth="1"/>
        <rect x="5" y="5" width="12" height="8" rx="1" fill="#1e3a5f"/>
        <rect x="22" y="5" width="18" height="8" rx="1" fill="#1e3a5f"/>
        <circle cx="10" cy="20" r="4" fill="#1f2937" stroke="#6b7280" strokeWidth="1.5"/>
        <circle cx="35" cy="20" r="4" fill="#1f2937" stroke="#6b7280" strokeWidth="1.5"/>
        <rect x="36" y="8" width="5" height="4" rx="1" fill="#06b6d4"/>
      </g>

      {/* Vehicle 2 */}
      <g transform="translate(140, 155)">
        <rect x="0" y="2" width="45" height="18" rx="3" fill="#374151" stroke="#4b5563" strokeWidth="1"/>
        <rect x="5" y="5" width="12" height="8" rx="1" fill="#1e3a5f"/>
        <rect x="22" y="5" width="18" height="8" rx="1" fill="#1e3a5f"/>
        <circle cx="10" cy="20" r="4" fill="#1f2937" stroke="#6b7280" strokeWidth="1.5"/>
        <circle cx="35" cy="20" r="4" fill="#1f2937" stroke="#6b7280" strokeWidth="1.5"/>
        <rect x="36" y="8" width="5" height="4" rx="1" fill="#06b6d4"/>
      </g>

      {/* Vehicle 3 */}
      <g transform="translate(215, 155)">
        <rect x="0" y="2" width="45" height="18" rx="3" fill="#374151" stroke="#4b5563" strokeWidth="1"/>
        <rect x="5" y="5" width="12" height="8" rx="1" fill="#1e3a5f"/>
        <rect x="22" y="5" width="18" height="8" rx="1" fill="#1e3a5f"/>
        <circle cx="10" cy="20" r="4" fill="#1f2937" stroke="#6b7280" strokeWidth="1.5"/>
        <circle cx="35" cy="20" r="4" fill="#1f2937" stroke="#6b7280" strokeWidth="1.5"/>
        <rect x="36" y="8" width="5" height="4" rx="1" fill="#22c55e"/>
      </g>

      {/* Vehicle 4 */}
      <g transform="translate(290, 155)">
        <rect x="0" y="2" width="45" height="18" rx="3" fill="#374151" stroke="#4b5563" strokeWidth="1"/>
        <rect x="5" y="5" width="12" height="8" rx="1" fill="#1e3a5f"/>
        <rect x="22" y="5" width="18" height="8" rx="1" fill="#1e3a5f"/>
        <circle cx="10" cy="20" r="4" fill="#1f2937" stroke="#6b7280" strokeWidth="1.5"/>
        <circle cx="35" cy="20" r="4" fill="#1f2937" stroke="#6b7280" strokeWidth="1.5"/>
        <rect x="36" y="8" width="5" height="4" rx="1" fill="#22c55e"/>
      </g>

      {/* Battery Storage */}
      <g transform="translate(345, 25)">
        <rect x="0" y="0" width="40" height="55" rx="3" fill="#1f2937" stroke="#a78bfa" strokeWidth="1.5"/>
        <text x="20" y="14" textAnchor="middle" fill="#a78bfa" fontSize="6" fontWeight="bold">BESS</text>
        <rect x="8" y="20" width="24" height="8" rx="1" fill="#a78bfa" fillOpacity="0.3" stroke="#a78bfa" strokeWidth="1"/>
        <rect x="8" y="32" width="24" height="8" rx="1" fill="#a78bfa" fillOpacity="0.3" stroke="#a78bfa" strokeWidth="1"/>
        <rect x="8" y="44" width="24" height="8" rx="1" fill="#a78bfa" fillOpacity="0.2" stroke="#a78bfa" strokeWidth="1"/>
        <line x1="20" y1="55" x2="20" y2="62" stroke="#a78bfa" strokeWidth="1.5"/>
      </g>

      {/* Connection from BESS to main bus */}
      <line x1="365" y1="80" x2="365" y2="105" stroke="#a78bfa" strokeWidth="1.5" strokeDasharray="3,2"/>

      {/* Fleet label */}
      <text x="200" y="14" textAnchor="middle" fill="#ffffff" fontSize="9" fontWeight="bold" opacity="0.6">FLEET CHARGING DEPOT</text>
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
            { name: "EV Fleet Charging Infrastructure", url: "https://amporalabs.com/blog/electric-vehicle-fleet-charging" },
          ]}
        />
        <BlogPostingJsonLd
          headline="Commercial EV Fleet Charging Infrastructure Design"
          description="Complete guide to designing commercial EV fleet charging infrastructure for electricians."
          datePublished="2025-04-25"
          url="https://amporalabs.com/blog/electric-vehicle-fleet-charging"
        />

        <article className="max-w-4xl mx-auto px-6 py-12">
          <nav className="text-sm text-white/60 mb-8">
            <Link href="/" className="hover:text-white">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/blog" className="hover:text-white">Blog</Link>
            <span className="mx-2">/</span>
            <span className="text-white">EV Fleet Charging Infrastructure</span>
          </nav>

          <header className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <span className="px-3 py-1 bg-cyan-600/30 text-cyan-300 text-sm font-medium rounded-full">
                Technology
              </span>
              <span className="text-white/40 text-sm">April 25, 2025</span>
              <span className="text-white/40 text-sm">14 min read</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">
              Commercial EV Fleet Charging Infrastructure Design
            </h1>
            <p className="text-xl text-white/70">
              As commercial fleets electrify, electricians face complex infrastructure projects requiring careful coordination between utility providers, fleet operators, and equipment manufacturers. This guide covers everything from site assessment to future-proofing your fleet charging installations.
            </p>
          </header>

          <div className="mb-12 bg-gradient-to-br from-cyan-900/20 to-purple-900/20 rounded-2xl p-6 border border-white/10">
            <HeroIllustration />
          </div>

          <div className="prose prose-invert prose-lg max-w-none">

            <h2>The Growth of Commercial EV Fleets</h2>
            <p>
              Commercial fleet electrification is accelerating rapidly. Delivery vans, transit buses, school buses, and medium-duty trucks are transitioning to electric powertrains driven by federal and state mandates, total cost of ownership advantages, and corporate sustainability goals. For electricians, this represents one of the largest emerging market segments in the trade.
            </p>
            <p>
              Unlike residential EV charger installations where you typically wire a single 240V circuit, fleet charging projects involve <strong>hundreds of kilowatts to multiple megawatts</strong> of new electrical load concentrated at a single site. These projects require utility coordination, custom switchgear, sophisticated load management, and careful conductor sizing to deliver reliable, cost-effective charging infrastructure.
            </p>
            <p>
              Fleet depot charging differs fundamentally from public charging stations. Fleets have <strong>predictable schedules</strong>, known vehicle types, defined duty cycles, and overnight dwell times that allow engineers and electricians to optimize infrastructure for maximum efficiency rather than maximum speed.
            </p>

            <h2>Site Assessment and Utility Coordination</h2>
            <p>
              Every fleet charging project begins with a thorough site assessment. Before designing anything, you need to understand the existing electrical infrastructure and the utility&apos;s capacity to serve the new load.
            </p>

            <h3>Existing Electrical Service Evaluation</h3>
            <ul>
              <li><strong>Service entrance capacity:</strong> Review the existing main switchgear rating and available ampacity. A facility with a 2000A, 480V service may already be using 1600A for building loads, leaving only 400A available.</li>
              <li><strong>Transformer capacity:</strong> Check the nameplate rating of the serving transformer. Utility transformers are often shared and may not have capacity for a large fleet charging load.</li>
              <li><strong>Panel and feeder capacity:</strong> Determine if existing distribution equipment can accommodate new breakers and feeders, or if new switchgear is required.</li>
              <li><strong>Metering arrangement:</strong> Determine whether the fleet charging load should be on the existing meter or a separate utility meter to take advantage of different rate structures.</li>
            </ul>

            <h3>Utility Coordination Process</h3>
            <p>
              For fleet charging installations exceeding 200 kW, early utility coordination is essential. The process typically involves:
            </p>
            <div className="bg-white/5 rounded-xl p-6 my-6">
              <ol className="text-white/80 space-y-3">
                <li><strong>1. Load letter submission:</strong> Submit a formal request to the utility detailing the anticipated load, phasing plan, and timeline. Include peak demand, connected load, and diversity factors.</li>
                <li><strong>2. System impact study:</strong> The utility performs an engineering study to determine if the distribution system can handle the new load. This may take 4-12 weeks.</li>
                <li><strong>3. Infrastructure upgrade identification:</strong> The utility identifies any required upgrades such as new transformers, reconductoring, or substation work. Costs may be shared or passed to the customer.</li>
                <li><strong>4. Service agreement:</strong> Negotiate the service voltage, metering point, rate schedule, and any demand ratchet provisions.</li>
                <li><strong>5. Construction timeline:</strong> Utility upgrades often have 6-18 month lead times. Factor this into project schedules.</li>
              </ol>
            </div>

            <div className="bg-cyan-900/30 rounded-xl p-6 my-6">
              <h4 className="font-semibold text-cyan-400 mb-3">Pro Tip: Separate Metering</h4>
              <p className="text-white/70">
                Many utilities offer time-of-use (TOU) commercial EV rates with significantly lower off-peak pricing. Installing a separate meter dedicated to fleet charging allows the operator to take advantage of these rates without affecting the building&apos;s existing rate schedule. This often justifies the cost of a separate service entrance.
              </p>
            </div>

            <h2>Electrical Service Sizing for Fleet Charging</h2>
            <p>
              Properly sizing the electrical service for fleet charging requires understanding the total connected load, applying appropriate demand factors, and accounting for future growth. Undersizing the service creates expensive upgrade headaches; oversizing wastes capital on transformer and switchgear capacity that may never be used.
            </p>

            <h3>Connected Load Calculation</h3>
            <p>
              Calculate the total connected load by summing all EVSE nameplate ratings. Remember that EV charging is a <strong>continuous load</strong> per NEC 625.41, so conductors and overcurrent devices must be rated at 125% of the maximum load.
            </p>
            <div className="bg-gradient-to-r from-cyan-900/30 to-purple-900/30 rounded-xl p-6 my-6">
              <p className="text-white font-mono mb-2">Example: 10 x Level 2 EVSE at 19.2 kW each</p>
              <p className="text-white font-mono mb-2">Connected load = 10 x 19.2 kW = 192 kW</p>
              <p className="text-white font-mono mb-2">At 480V 3-phase: 192,000 / (480 x 1.732) = 231A</p>
              <p className="text-white font-mono">Continuous load (125%): 231A x 1.25 = 289A minimum</p>
            </div>

            <h3>Fleet Power Requirements by Size</h3>
            <div className="bg-white/5 rounded-xl p-6 my-6">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="py-2 text-white">Fleet Size</th>
                    <th className="py-2 text-white">Charger Mix</th>
                    <th className="py-2 text-white">Connected Load</th>
                    <th className="py-2 text-white">Managed Peak</th>
                    <th className="py-2 text-white">Service Size</th>
                  </tr>
                </thead>
                <tbody className="text-white/70">
                  <tr className="border-b border-white/5">
                    <td className="py-2">10 vehicles</td>
                    <td className="py-2">10x L2 (19.2kW)</td>
                    <td className="py-2">192 kW</td>
                    <td className="py-2">~120 kW</td>
                    <td className="py-2">400A 480V</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-2">25 vehicles</td>
                    <td className="py-2">20x L2 + 2x DCFC</td>
                    <td className="py-2">684 kW</td>
                    <td className="py-2">~400 kW</td>
                    <td className="py-2">800A 480V</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-2">50 vehicles</td>
                    <td className="py-2">40x L2 + 5x DCFC</td>
                    <td className="py-2">1,518 kW</td>
                    <td className="py-2">~900 kW</td>
                    <td className="py-2">1600A 480V</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-2">100 vehicles</td>
                    <td className="py-2">80x L2 + 10x DCFC</td>
                    <td className="py-2">3,036 kW</td>
                    <td className="py-2">~1,800 kW</td>
                    <td className="py-2">2500A 480V</td>
                  </tr>
                  <tr>
                    <td className="py-2">200+ vehicles</td>
                    <td className="py-2">Custom design</td>
                    <td className="py-2">5+ MW</td>
                    <td className="py-2">~3+ MW</td>
                    <td className="py-2">MV service</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p>
              The &quot;Managed Peak&quot; column reflects the typical demand when using intelligent load management, which can reduce peak demand by 30-50% compared to unmanaged charging. This reduction directly impacts service sizing, transformer requirements, and utility demand charges.
            </p>

            <h2>Load Management and Power Sharing Systems</h2>
            <p>
              Load management is the single most important technology in fleet charging infrastructure. Without it, a 50-vehicle fleet depot would need over 1.5 MW of electrical service. With intelligent load management, that same fleet can operate on 900 kW or less, dramatically reducing infrastructure costs.
            </p>

            <h3>How Load Management Works</h3>
            <p>
              Load management systems monitor the total available power at the site and dynamically distribute it among active charging sessions. The system prioritizes vehicles based on departure schedules, current state of charge, and energy requirements. Key approaches include:
            </p>
            <ul>
              <li><strong>Static power sharing:</strong> Available capacity is divided equally among all connected vehicles. Simple but not optimal for mixed fleets.</li>
              <li><strong>Dynamic load management:</strong> A central controller adjusts individual EVSE output in real time based on site power availability, vehicle needs, and departure schedules.</li>
              <li><strong>Scheduled charging:</strong> Vehicles are assigned specific charge windows during overnight dwell times, staggering demand across available hours.</li>
              <li><strong>Priority-based queuing:</strong> Critical vehicles (first-out routes) receive priority power allocation, while vehicles with longer dwell times charge at reduced rates.</li>
            </ul>

            <div className="bg-white/5 rounded-xl p-6 my-6">
              <h4 className="font-semibold text-white mb-3">Load Management Savings Example</h4>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-red-900/20 rounded-lg p-4 border border-red-500/20">
                  <p className="text-red-400 font-semibold mb-2">Without Load Management</p>
                  <ul className="text-white/60 text-sm space-y-1">
                    <li>50 vehicles x 19.2 kW = 960 kW</li>
                    <li>Service: 1600A at 480V</li>
                    <li>Transformer: 1500 kVA</li>
                    <li>Peak demand charge: ~$15,000/mo</li>
                  </ul>
                </div>
                <div className="bg-green-900/20 rounded-lg p-4 border border-green-500/20">
                  <p className="text-green-400 font-semibold mb-2">With Load Management</p>
                  <ul className="text-white/60 text-sm space-y-1">
                    <li>50 vehicles managed to 500 kW</li>
                    <li>Service: 800A at 480V</li>
                    <li>Transformer: 750 kVA</li>
                    <li>Peak demand charge: ~$7,500/mo</li>
                  </ul>
                </div>
              </div>
            </div>

            <h2>Level 2 vs DC Fast Charging for Fleets</h2>
            <p>
              Choosing between Level 2 AC charging and DC fast charging (DCFC) depends on the fleet&apos;s operational profile, vehicle types, and dwell times. Most fleet depots use a combination of both.
            </p>

            <div className="bg-white/5 rounded-xl p-6 my-6">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="py-2 text-white">Factor</th>
                    <th className="py-2 text-white">Level 2 (AC)</th>
                    <th className="py-2 text-white">DC Fast Charging</th>
                  </tr>
                </thead>
                <tbody className="text-white/70">
                  <tr className="border-b border-white/5">
                    <td className="py-2 font-semibold">Power per unit</td>
                    <td className="py-2">7.2 - 19.2 kW</td>
                    <td className="py-2">50 - 350 kW</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-2 font-semibold">Equipment cost</td>
                    <td className="py-2">$2,000 - $8,000</td>
                    <td className="py-2">$30,000 - $150,000+</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-2 font-semibold">Installation cost</td>
                    <td className="py-2">$3,000 - $8,000</td>
                    <td className="py-2">$15,000 - $75,000+</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-2 font-semibold">Best for</td>
                    <td className="py-2">Overnight depot charging</td>
                    <td className="py-2">Mid-day top-ups, buses</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-2 font-semibold">Dwell time needed</td>
                    <td className="py-2">4 - 10 hours</td>
                    <td className="py-2">20 min - 2 hours</td>
                  </tr>
                  <tr>
                    <td className="py-2 font-semibold">Battery impact</td>
                    <td className="py-2">Minimal degradation</td>
                    <td className="py-2">Accelerated degradation</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p>
              For most delivery fleets that return to the depot overnight, <strong>Level 2 charging is the primary workhorse</strong>. A typical electric delivery van with a 60 kWh battery can fully charge in about 3-4 hours on a 19.2 kW Level 2 unit, well within an 8-10 hour overnight window. DC fast chargers are deployed as supplemental units for vehicles that need mid-day top-ups or for buses with large battery packs (200-600 kWh) that cannot fully charge on Level 2 alone.
            </p>

            <h2>Transformer and Switchgear Considerations</h2>
            <p>
              Fleet charging installations frequently require new or upgraded transformers and switchgear. Understanding the specifications and lead times is critical for project planning.
            </p>

            <h3>Transformer Sizing</h3>
            <p>
              Size transformers based on the managed peak demand plus a growth margin of 20-30%. For fleet charging, the serving transformer must handle the continuous load nature of EVSE:
            </p>
            <div className="bg-gradient-to-r from-cyan-900/30 to-purple-900/30 rounded-xl p-6 my-6">
              <p className="text-white font-mono mb-2">Managed peak demand: 500 kW</p>
              <p className="text-white font-mono mb-2">Growth factor (25%): 500 x 1.25 = 625 kW</p>
              <p className="text-white font-mono mb-2">At 0.95 power factor: 625 / 0.95 = 658 kVA</p>
              <p className="text-white font-mono">Select next standard size: 750 kVA transformer</p>
            </div>

            <h3>Key Transformer Specifications</h3>
            <ul>
              <li><strong>Voltage:</strong> Typically 12.47 kV or 13.8 kV primary to 480Y/277V secondary for commercial fleet charging</li>
              <li><strong>K-rating:</strong> EV charging introduces harmonic currents. Specify K-13 or K-20 rated transformers for sites with significant DCFC loads</li>
              <li><strong>Impedance:</strong> Standard 5.75% impedance for most applications. Lower impedance reduces voltage drop but increases available fault current</li>
              <li><strong>Cooling:</strong> Oil-filled (ONAN/ONAF) for outdoor pad-mount installations; dry-type (AA/FA) for indoor applications</li>
              <li><strong>Lead time:</strong> Custom transformers currently have 26-52 week lead times; plan accordingly</li>
            </ul>

            <h3>Switchgear and Distribution</h3>
            <p>
              The main switchgear for fleet charging typically includes:
            </p>
            <ul>
              <li><strong>Main breaker:</strong> Sized for the full transformer capacity with provisions for future expansion</li>
              <li><strong>EVSE distribution section:</strong> Individual breakers or fused disconnects for each EVSE circuit. Group Level 2 units on panelboards; provide individual breakers for DCFC units</li>
              <li><strong>Metering section:</strong> Revenue-grade metering for utility billing and sub-metering for fleet operator cost allocation</li>
              <li><strong>Surge protection:</strong> SPD at the main switchgear and at each EVSE distribution panel per NEC 625.22</li>
            </ul>

            <h2>Conductor Sizing for Multiple EVSE Installations</h2>
            <p>
              Conductor sizing in fleet charging is governed by standard NEC requirements but involves additional considerations due to the number of parallel circuits, continuous load requirements, and often long run lengths.
            </p>

            <h3>Branch Circuit Conductors</h3>
            <p>
              Each EVSE branch circuit must be sized for 125% of the maximum load current per NEC 625.41. For common Level 2 EVSE installations at 480V:
            </p>
            <div className="bg-white/5 rounded-xl p-6 my-6">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="py-2 text-white">EVSE Rating</th>
                    <th className="py-2 text-white">Circuit Amps (480V)</th>
                    <th className="py-2 text-white">125% Continuous</th>
                    <th className="py-2 text-white">Breaker</th>
                    <th className="py-2 text-white">Wire (Cu, 75C)</th>
                  </tr>
                </thead>
                <tbody className="text-white/70">
                  <tr className="border-b border-white/5">
                    <td className="py-2">7.2 kW</td>
                    <td className="py-2">8.7A</td>
                    <td className="py-2">10.8A</td>
                    <td className="py-2">15A</td>
                    <td className="py-2">#14 AWG</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-2">19.2 kW</td>
                    <td className="py-2">23.1A</td>
                    <td className="py-2">28.9A</td>
                    <td className="py-2">30A</td>
                    <td className="py-2">#10 AWG</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-2">50 kW DCFC</td>
                    <td className="py-2">60.2A</td>
                    <td className="py-2">75.2A</td>
                    <td className="py-2">80A</td>
                    <td className="py-2">#4 AWG</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-2">150 kW DCFC</td>
                    <td className="py-2">180.4A</td>
                    <td className="py-2">225.5A</td>
                    <td className="py-2">250A</td>
                    <td className="py-2">250 kcmil</td>
                  </tr>
                  <tr>
                    <td className="py-2">350 kW DCFC</td>
                    <td className="py-2">421.0A</td>
                    <td className="py-2">526.3A</td>
                    <td className="py-2">600A</td>
                    <td className="py-2">2x 350 kcmil</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3>Voltage Drop Considerations</h3>
            <p>
              Fleet depot wiring runs are often long, with chargers located 200-500 feet from the distribution equipment. NEC recommends a maximum 3% voltage drop on branch circuits and 5% total (feeder plus branch). For long runs at 480V:
            </p>
            <div className="bg-gradient-to-r from-cyan-900/30 to-purple-900/30 rounded-xl p-6 my-6">
              <p className="text-white font-mono mb-2">Voltage drop = (2 x L x I x R) / 1000</p>
              <p className="text-white/60 text-sm mt-2">Where L = one-way distance in feet, I = load current, R = conductor resistance per 1000 ft</p>
              <p className="text-white/60 text-sm mt-2">At 480V, 3% = 14.4V maximum drop on the branch circuit</p>
              <p className="text-white/60 text-sm mt-2">For a 300 ft run at 23A (#10 Cu): VD = (2 x 300 x 23 x 1.21) / 1000 = 16.7V (3.5%) - upsize to #8 AWG</p>
            </div>

            <h3>Conduit and Raceway Sizing</h3>
            <p>
              Multiple EVSE circuits often share a common trench or conduit run from the distribution equipment to the charging area. Key considerations:
            </p>
            <ul>
              <li><strong>Conduit fill:</strong> NEC Chapter 9 Table 1 limits fill to 40% for three or more conductors. Size conduits generously and include spare conduits for future expansion.</li>
              <li><strong>Ampacity derating:</strong> When more than three current-carrying conductors share a raceway, apply NEC 310.15(C)(1) derating factors. With 10-20 conductors in a conduit, derate to 50% of the base ampacity.</li>
              <li><strong>Direct burial:</strong> For outdoor depot installations, consider direct-buried cables (USE-2 or XHHW-2) in trenches with proper cover depth per NEC 300.5.</li>
              <li><strong>Spare capacity:</strong> Install 25-50% additional conduit capacity and pull boxes for future EVSE additions.</li>
            </ul>

            <h2>NEC Article 625 for Commercial Installations</h2>
            <p>
              NEC Article 625 governs electric vehicle charging system installations. Several sections have specific implications for commercial fleet charging:
            </p>

            <h3>Key NEC 625 Requirements</h3>
            <div className="bg-white/5 rounded-xl p-6 my-6">
              <ul className="text-white/80 space-y-3">
                <li><strong>625.41 - Overcurrent Protection:</strong> EVSE branch circuits must have overcurrent protection rated for continuous duty. Size at 125% of the maximum load current.</li>
                <li><strong>625.42 - Rating:</strong> The branch circuit rating must not be less than the EVSE nameplate rating. For adjustable EVSE, use the maximum adjustable rating.</li>
                <li><strong>625.43 - Disconnect:</strong> A disconnect is required for each EVSE. It must be lockable in the open position and located within sight of the equipment, or the circuit breaker may serve as the disconnect if lockable.</li>
                <li><strong>625.44 - GFCI Protection:</strong> All EVSE branch circuits rated 150V to ground or less and 50A or less require GFCI protection. Most 480V fleet installations are exempt, but 208V circuits require GFCI.</li>
                <li><strong>625.22 - Surge Protection:</strong> Surge protection devices must be installed at the EVSE or at the panelboard supplying the EVSE branch circuits.</li>
                <li><strong>625.48 - Interactive Systems:</strong> Where EVSE is capable of bidirectional power flow (V2G), it must comply with Article 705 for interconnected electric power production sources.</li>
              </ul>
            </div>

            <h3>Ventilation Requirements</h3>
            <p>
              NEC 625.52 addresses indoor charging installations. While most fleet depot charging occurs outdoors, indoor maintenance facilities may require ventilation. The requirement depends on the charging connector type and vehicle manufacturer specifications. Listed EVSE with sealed connector systems generally do not require mechanical ventilation.
            </p>

            <h3>Wiring Methods</h3>
            <p>
              NEC 625.30 permits any wiring method included in Chapter 3 for EVSE installations. For commercial fleet applications, common methods include:
            </p>
            <ul>
              <li>Rigid metal conduit (RMC) or intermediate metal conduit (IMC) for exposed outdoor runs</li>
              <li>PVC-coated rigid conduit for corrosive environments</li>
              <li>Liquidtight flexible metal conduit (LFMC) for final connections to EVSE pedestal units</li>
              <li>Schedule 40 or 80 PVC for underground runs per NEC 300.5</li>
            </ul>

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

            <h2>Energy Storage Integration for Peak Management</h2>
            <p>
              Battery Energy Storage Systems (BESS) are increasingly deployed alongside fleet charging to reduce peak demand charges and provide grid resilience. A properly sized BESS can shave 30-50% off peak demand, paying for itself in 3-5 years through demand charge savings alone.
            </p>

            <h3>How BESS Works with Fleet Charging</h3>
            <p>
              The BESS charges during off-peak hours when electricity is cheapest and demand is low. During peak charging periods or when site demand approaches a threshold, the BESS discharges to supplement grid power, reducing the peak demand seen by the utility meter.
            </p>
            <ul>
              <li><strong>Peak shaving:</strong> BESS limits maximum demand by discharging when load exceeds a set threshold. If the site has a 500 kW peak and you install a 200 kW / 400 kWh BESS, the utility sees a maximum demand of approximately 300 kW.</li>
              <li><strong>Load shifting:</strong> Store low-cost off-peak energy and use it during high-cost peak periods. Particularly valuable in regions with TOU rates that have 3:1 or greater peak-to-off-peak price ratios.</li>
              <li><strong>Backup power:</strong> BESS can provide limited ride-through capability during grid outages, maintaining critical charging for first-out vehicles.</li>
            </ul>

            <h3>Electrical Integration</h3>
            <p>
              BESS installations for fleet charging require careful electrical integration:
            </p>
            <ul>
              <li>Dedicated breaker and feeder from the main switchgear, sized for the BESS inverter rating</li>
              <li>Compliance with NEC Article 706 (Energy Storage Systems) for installation requirements</li>
              <li>Rapid shutdown provisions per NEC 706.15</li>
              <li>Disconnect and overcurrent protection per NEC 706.30</li>
              <li>Coordination with the load management controller for integrated demand management</li>
            </ul>

            <h2>Utility Demand Charges and Mitigation Strategies</h2>
            <p>
              Demand charges are often the largest component of a fleet charging operator&apos;s electricity bill, sometimes exceeding the energy charges. Understanding demand charges and designing infrastructure to minimize them is essential.
            </p>

            <h3>How Demand Charges Work</h3>
            <p>
              Commercial utility rates include two main components:
            </p>
            <ul>
              <li><strong>Energy charges ($/kWh):</strong> Based on total energy consumed. Typically $0.05-$0.15/kWh for commercial customers.</li>
              <li><strong>Demand charges ($/kW):</strong> Based on the highest 15-minute average demand during the billing period. Typically $10-$30/kW per month, with some utilities charging $40+/kW.</li>
            </ul>
            <div className="bg-white/5 rounded-xl p-6 my-6">
              <h4 className="font-semibold text-white mb-3">Demand Charge Impact Example</h4>
              <p className="text-white/70 mb-3">A fleet depot consuming 50,000 kWh/month with a 500 kW peak demand:</p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-white/5 rounded-lg p-4">
                  <p className="text-white/60 text-sm">Energy charge</p>
                  <p className="font-mono text-lg text-cyan-400">50,000 kWh x $0.08 = $4,000</p>
                </div>
                <div className="bg-white/5 rounded-lg p-4">
                  <p className="text-white/60 text-sm">Demand charge</p>
                  <p className="font-mono text-lg text-red-400">500 kW x $20 = $10,000</p>
                </div>
              </div>
              <p className="text-white/60 text-sm mt-3">In this example, demand charges are 71% of the total bill. Reducing peak demand by 200 kW saves $4,000/month.</p>
            </div>

            <h3>Mitigation Strategies</h3>
            <ul>
              <li><strong>Intelligent load management:</strong> The most cost-effective strategy. Spread charging across available hours to minimize peak demand.</li>
              <li><strong>Battery energy storage:</strong> Peak shave with BESS to cap demand at a target threshold.</li>
              <li><strong>Time-of-use optimization:</strong> Shift charging to off-peak periods when demand charges are lower or waived.</li>
              <li><strong>On-site solar PV:</strong> Reduce grid demand during daytime peaks. Size the system to offset daytime opportunity charging.</li>
              <li><strong>Separate metering:</strong> Isolate EV charging on a dedicated meter with an EV-specific rate schedule that has reduced or no demand charges.</li>
              <li><strong>Demand response participation:</strong> Enroll in utility demand response programs to earn credits for curtailing charging during grid emergencies.</li>
            </ul>

            <h2>Network Management and OCPP Protocol</h2>
            <p>
              Fleet charging stations are networked devices that require reliable communications for load management, billing, monitoring, and maintenance. The <strong>Open Charge Point Protocol (OCPP)</strong> is the industry standard for EVSE communication.
            </p>

            <h3>OCPP Overview</h3>
            <p>
              OCPP is an open-source protocol that defines communication between charging stations and a central management system (CMS). It enables:
            </p>
            <ul>
              <li><strong>Remote monitoring:</strong> Real-time status, energy consumption, and fault reporting from every charging station</li>
              <li><strong>Load management commands:</strong> The CMS can remotely adjust the charging power of individual stations based on site-level constraints</li>
              <li><strong>Firmware updates:</strong> Over-the-air updates to EVSE firmware without truck rolls</li>
              <li><strong>Authorization:</strong> Vehicle or driver authentication via RFID, mobile app, or plug-and-charge (ISO 15118)</li>
              <li><strong>Session reporting:</strong> Detailed charging session data for fleet management, cost allocation, and utility reporting</li>
            </ul>

            <h3>Networking Requirements for Electricians</h3>
            <p>
              While IT networking is not traditionally in the electrician&apos;s scope, fleet charging installations require the electrician to provide network connectivity to each EVSE:
            </p>
            <ul>
              <li><strong>Ethernet:</strong> Cat6 cabling from each EVSE to a network switch. Most reliable option for outdoor depot environments. Run in separate conduit from power conductors per NEC 725/800.</li>
              <li><strong>Cellular:</strong> Built-in cellular modem in each EVSE. No additional wiring required but has ongoing data costs and potential coverage issues.</li>
              <li><strong>Wi-Fi:</strong> Suitable for smaller installations with good signal coverage. Install outdoor-rated access points as needed. Less reliable for mission-critical fleet operations.</li>
            </ul>
            <div className="bg-cyan-900/30 rounded-xl p-6 my-6">
              <h4 className="font-semibold text-cyan-400 mb-3">Networking Best Practice</h4>
              <p className="text-white/70">
                For fleet depots with 10+ chargers, install dedicated Ethernet to each EVSE even if the units have cellular capability. Hardwired connections provide the reliability needed for real-time load management and eliminate monthly cellular data costs. Install a dedicated network cabinet with managed switch, UPS, and cellular failover gateway near the EVSE distribution equipment.
              </p>
            </div>

            <h2>Future-Proofing Infrastructure</h2>
            <p>
              Fleet electrification is a multi-year transition. Most operators start with a partial fleet conversion and expand over 3-7 years. Designing infrastructure that accommodates future growth is essential to avoid costly rework.
            </p>

            <h3>Electrical Future-Proofing Strategies</h3>
            <ul>
              <li><strong>Oversize transformers and switchgear:</strong> Install equipment rated for the full buildout, not just Phase 1. A 1500 kVA transformer costs only 15-25% more than a 750 kVA unit but doubles available capacity.</li>
              <li><strong>Spare breaker positions:</strong> Specify switchgear with 30-50% spare breaker positions for future EVSE circuits.</li>
              <li><strong>Spare conduit runs:</strong> Install additional empty conduits to the charging area during initial trenching. Adding conduits later is 3-5x more expensive than including them in the original installation.</li>
              <li><strong>Oversized concrete pads:</strong> Pour foundation pads sized for the ultimate number of EVSE pedestals at each location.</li>
              <li><strong>Make-ready infrastructure:</strong> Install conduit, conductors, and junction boxes to future EVSE locations, terminating at a stub-up. This approach, called &quot;make-ready,&quot; allows new chargers to be installed without additional construction.</li>
            </ul>

            <h3>Vehicle-to-Grid (V2G) Readiness</h3>
            <p>
              V2G technology allows fleet vehicles to discharge energy back to the grid or building during peak periods. While V2G adoption is still early, preparing infrastructure now avoids costly retrofits:
            </p>
            <ul>
              <li>Specify bidirectional-capable EVSE or ensure mounting locations can accommodate larger bidirectional units</li>
              <li>Install CT cabinets at the service entrance for future grid interconnection metering per NEC Article 705</li>
              <li>Size conductors and switchgear for bidirectional power flow</li>
              <li>Coordinate with the utility on interconnection requirements for distributed energy resources</li>
            </ul>

            <h2>Common Design Mistakes</h2>
            <p>
              Fleet charging projects are complex, and mistakes during the design phase can result in costly change orders, project delays, or underperforming infrastructure. Avoid these common pitfalls:
            </p>
            <div className="bg-white/5 rounded-xl p-6 my-6">
              <ul className="text-white/80 space-y-4">
                <li>
                  <strong className="text-red-400">1. Ignoring utility lead times.</strong>
                  <p className="text-white/60 mt-1">Utility transformer upgrades and new service installations can take 6-18 months. Start utility coordination in the earliest design phase, not after construction documents are complete.</p>
                </li>
                <li>
                  <strong className="text-red-400">2. Sizing service for full connected load without load management.</strong>
                  <p className="text-white/60 mt-1">An unmanaged 50-charger installation needs roughly twice the electrical service of a managed one. Always design with load management as a core component, not an afterthought.</p>
                </li>
                <li>
                  <strong className="text-red-400">3. Neglecting ampacity derating in shared raceways.</strong>
                  <p className="text-white/60 mt-1">Running 20 EVSE circuits through a common conduit bank without applying NEC 310.15(C)(1) derating will result in overheated conductors. Calculate actual ampacity after derating and upsize conductors accordingly.</p>
                </li>
                <li>
                  <strong className="text-red-400">4. Forgetting voltage drop on long runs.</strong>
                  <p className="text-white/60 mt-1">A 300-foot run to an outdoor charger at full load can easily exceed 3% voltage drop if conductors are only sized for ampacity. Always check voltage drop for runs over 100 feet and upsize conductors as needed.</p>
                </li>
                <li>
                  <strong className="text-red-400">5. No provisions for future expansion.</strong>
                  <p className="text-white/60 mt-1">Failing to install spare conduits and oversize switchgear forces expensive rework when the fleet grows. The marginal cost of spare capacity during initial construction is a fraction of the retrofit cost.</p>
                </li>
                <li>
                  <strong className="text-red-400">6. Ignoring demand charges in the economic analysis.</strong>
                  <p className="text-white/60 mt-1">Demand charges can represent 50-70% of fleet charging costs. Infrastructure decisions that reduce peak demand (load management, BESS, TOU optimization) often have better ROI than cheaper upfront construction.</p>
                </li>
                <li>
                  <strong className="text-red-400">7. Inadequate grounding and bonding.</strong>
                  <p className="text-white/60 mt-1">Fleet charging installations with multiple EVSE units and long conduit runs require careful attention to equipment grounding conductor sizing per NEC 250.122 and bonding of all metallic enclosures, raceways, and structural steel in the charging area.</p>
                </li>
              </ul>
            </div>

            <h2>Installation Best Practices</h2>
            <p>
              Following these best practices will help ensure a successful fleet charging installation:
            </p>

            <div className="bg-white/5 rounded-xl p-6 my-6">
              <ul className="text-white/80 space-y-2">
                <li>&#9744; Coordinate with utility early - submit load letter before design starts</li>
                <li>&#9744; Perform a complete site electrical assessment including fault current study</li>
                <li>&#9744; Design load management as a core system component</li>
                <li>&#9744; Size transformers and switchgear for full buildout capacity</li>
                <li>&#9744; Calculate voltage drop for all branch circuits over 100 feet</li>
                <li>&#9744; Apply conduit fill and ampacity derating for shared raceways</li>
                <li>&#9744; Install spare conduits (minimum 25% extra) to all charging areas</li>
                <li>&#9744; Provide dedicated Ethernet or cellular connectivity to each EVSE</li>
                <li>&#9744; Install surge protection at main switchgear and EVSE distribution panels</li>
                <li>&#9744; Verify disconnect requirements per NEC 625.43 for each EVSE</li>
                <li>&#9744; Label all circuits clearly with EVSE identification numbers</li>
                <li>&#9744; Commission load management system and verify power sharing operation</li>
                <li>&#9744; Document as-built conditions including conduit routing and spare capacity</li>
              </ul>
            </div>

            <h2>Conclusion</h2>
            <p>
              Commercial EV fleet charging infrastructure represents a significant and growing opportunity for electricians. These projects demand a combination of traditional electrical skills and new knowledge in load management, utility coordination, energy storage, and networked systems. By understanding the complete system design from utility service through conductor sizing to network management, electricians can deliver fleet charging installations that are reliable, cost-effective, and ready for future expansion.
            </p>
            <p>
              The key to success is early planning, particularly utility coordination and load management design, combined with generous provisions for future growth. A well-designed fleet charging depot will serve the operator for 15-20 years through multiple generations of electric vehicles and charging technology.
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
        </article>
      </div>
    </main>
  );
}
