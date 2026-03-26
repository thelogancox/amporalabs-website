import { Metadata } from "next";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import { BlogPostingJsonLd, BreadcrumbJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "NEC Article 480: Battery Storage Systems Requirements Guide",
  description: "Complete guide to NEC Article 480 battery energy storage system (BESS) requirements. Learn about battery types, wiring methods, disconnecting means, overcurrent protection, ventilation, and integration with solar PV systems per the National Electrical Code.",
  keywords: [
    "NEC Article 480",
    "battery storage systems",
    "BESS requirements",
    "battery energy storage",
    "battery disconnecting means",
    "battery room ventilation",
    "lithium-ion battery code",
    "battery overcurrent protection",
    "NEC battery wiring",
    "energy storage system NEC"
  ],
  alternates: {
    canonical: "https://amporalabs.com/blog/nec-article-480-battery-storage",
  },
  openGraph: {
    title: "NEC Article 480: Battery Storage Systems Requirements Guide - Ampora",
    description: "Complete guide to NEC Article 480 battery energy storage system requirements for electricians.",
    url: "https://amporalabs.com/blog/nec-article-480-battery-storage",
    type: "article",
    publishedTime: "2025-03-20",
  },
};

function HeroIllustration() {
  return (
    <svg viewBox="0 0 400 200" className="w-full h-48 md:h-64" aria-label="Battery energy storage system diagram showing batteries, inverter, and panel connection">
      <defs>
        <linearGradient id="battGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#7c3aed" />
          <stop offset="100%" stopColor="#4c1d95" />
        </linearGradient>
        <linearGradient id="invGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#1e3a5f" />
          <stop offset="100%" stopColor="#0f172a" />
        </linearGradient>
        <linearGradient id="chargeGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#22d3ee" stopOpacity="0" />
          <stop offset="50%" stopColor="#22d3ee" stopOpacity="1" />
          <stop offset="100%" stopColor="#22d3ee" stopOpacity="0" />
        </linearGradient>
      </defs>

      {/* Title */}
      <text x="200" y="16" textAnchor="middle" fill="#a78bfa" fontSize="10" fontWeight="bold">Battery Energy Storage System (BESS)</text>

      {/* Battery Bank - 3 battery units */}
      <g transform="translate(20, 35)">
        {/* Battery 1 */}
        <rect x="0" y="0" width="50" height="80" rx="4" fill="url(#battGrad)" stroke="#8b5cf6" strokeWidth="2"/>
        <rect x="15" y="-5" width="20" height="8" rx="2" fill="#8b5cf6"/>
        <text x="25" y="25" textAnchor="middle" fill="#e9d5ff" fontSize="7" fontWeight="bold">48V</text>
        <rect x="10" y="32" width="30" height="6" rx="1" fill="#22c55e" opacity="0.8"/>
        <rect x="10" y="42" width="30" height="6" rx="1" fill="#22c55e" opacity="0.6"/>
        <rect x="10" y="52" width="30" height="6" rx="1" fill="#22c55e" opacity="0.4"/>
        <text x="25" y="72" textAnchor="middle" fill="#c4b5fd" fontSize="6">100Ah</text>

        {/* Battery 2 */}
        <rect x="58" y="0" width="50" height="80" rx="4" fill="url(#battGrad)" stroke="#8b5cf6" strokeWidth="2"/>
        <rect x="73" y="-5" width="20" height="8" rx="2" fill="#8b5cf6"/>
        <text x="83" y="25" textAnchor="middle" fill="#e9d5ff" fontSize="7" fontWeight="bold">48V</text>
        <rect x="68" y="32" width="30" height="6" rx="1" fill="#22c55e" opacity="0.8"/>
        <rect x="68" y="42" width="30" height="6" rx="1" fill="#22c55e" opacity="0.6"/>
        <rect x="68" y="52" width="30" height="6" rx="1" fill="#22c55e" opacity="0.4"/>
        <text x="83" y="72" textAnchor="middle" fill="#c4b5fd" fontSize="6">100Ah</text>

        {/* Battery 3 */}
        <rect x="116" y="0" width="50" height="80" rx="4" fill="url(#battGrad)" stroke="#8b5cf6" strokeWidth="2"/>
        <rect x="131" y="-5" width="20" height="8" rx="2" fill="#8b5cf6"/>
        <text x="141" y="25" textAnchor="middle" fill="#e9d5ff" fontSize="7" fontWeight="bold">48V</text>
        <rect x="126" y="32" width="30" height="6" rx="1" fill="#22c55e" opacity="0.8"/>
        <rect x="126" y="42" width="30" height="6" rx="1" fill="#22c55e" opacity="0.6"/>
        <rect x="126" y="52" width="30" height="6" rx="1" fill="#22c55e" opacity="0.4"/>
        <text x="141" y="72" textAnchor="middle" fill="#c4b5fd" fontSize="6">100Ah</text>

        <text x="83" y="100" textAnchor="middle" fill="#9ca3af" fontSize="8">Battery Bank</text>
      </g>

      {/* DC Disconnect */}
      <g transform="translate(195, 50)">
        <rect x="0" y="0" width="30" height="40" rx="3" fill="#374151" stroke="#f59e0b" strokeWidth="2"/>
        <line x1="8" y1="15" x2="22" y2="25" stroke="#f59e0b" strokeWidth="3" strokeLinecap="round"/>
        <text x="15" y="55" textAnchor="middle" fill="#fbbf24" fontSize="6">DC</text>
        <text x="15" y="63" textAnchor="middle" fill="#fbbf24" fontSize="6">DISC</text>
      </g>

      {/* Connection lines - Battery to DC Disconnect */}
      <line x1="186" y1="60" x2="195" y2="65" stroke="#ef4444" strokeWidth="3"/>
      <line x1="186" y1="80" x2="195" y2="80" stroke="#3b82f6" strokeWidth="3"/>

      {/* Inverter */}
      <g transform="translate(245, 35)">
        <rect x="0" y="0" width="60" height="70" rx="4" fill="url(#invGrad)" stroke="#22d3ee" strokeWidth="2"/>
        <text x="30" y="20" textAnchor="middle" fill="#22d3ee" fontSize="8" fontWeight="bold">INVERTER</text>
        {/* DC input label */}
        <text x="5" y="38" fill="#ef4444" fontSize="7">DC+</text>
        <text x="5" y="52" fill="#3b82f6" fontSize="7">DC-</text>
        {/* AC output label */}
        <text x="35" y="38" fill="#22c55e" fontSize="7">L1</text>
        <text x="35" y="52" fill="#22c55e" fontSize="7">L2</text>
        {/* Sine wave symbol */}
        <path d="M20 60 Q25 54 30 60 Q35 66 40 60" fill="none" stroke="#22d3ee" strokeWidth="1.5"/>
        <text x="30" y="90" textAnchor="middle" fill="#9ca3af" fontSize="7">DC to AC</text>
      </g>

      {/* Connection lines - DC Disconnect to Inverter */}
      <line x1="225" y1="65" x2="245" y2="62" stroke="#ef4444" strokeWidth="3"/>
      <line x1="225" y1="80" x2="245" y2="77" stroke="#3b82f6" strokeWidth="3"/>

      {/* AC Disconnect */}
      <g transform="translate(320, 50)">
        <rect x="0" y="0" width="30" height="40" rx="3" fill="#374151" stroke="#22c55e" strokeWidth="2"/>
        <line x1="8" y1="15" x2="22" y2="25" stroke="#22c55e" strokeWidth="3" strokeLinecap="round"/>
        <text x="15" y="55" textAnchor="middle" fill="#22c55e" fontSize="6">AC</text>
        <text x="15" y="63" textAnchor="middle" fill="#22c55e" fontSize="6">DISC</text>
      </g>

      {/* Connection lines - Inverter to AC Disconnect */}
      <line x1="305" y1="65" x2="320" y2="65" stroke="#22c55e" strokeWidth="3"/>
      <line x1="305" y1="77" x2="320" y2="77" stroke="#22c55e" strokeWidth="3"/>

      {/* Panel */}
      <g transform="translate(360, 35)">
        <rect x="0" y="0" width="30" height="70" rx="3" fill="#1f2937" stroke="#6b7280" strokeWidth="2"/>
        <rect x="5" y="8" width="8" height="6" rx="1" fill="#374151" stroke="#9ca3af" strokeWidth="0.5"/>
        <rect x="17" y="8" width="8" height="6" rx="1" fill="#374151" stroke="#9ca3af" strokeWidth="0.5"/>
        <rect x="5" y="20" width="8" height="6" rx="1" fill="#374151" stroke="#9ca3af" strokeWidth="0.5"/>
        <rect x="17" y="20" width="8" height="6" rx="1" fill="#374151" stroke="#9ca3af" strokeWidth="0.5"/>
        <rect x="5" y="32" width="8" height="6" rx="1" fill="#374151" stroke="#9ca3af" strokeWidth="0.5"/>
        <rect x="17" y="32" width="8" height="6" rx="1" fill="#374151" stroke="#9ca3af" strokeWidth="0.5"/>
        <text x="15" y="55" textAnchor="middle" fill="#9ca3af" fontSize="5">MAIN</text>
        <text x="15" y="63" textAnchor="middle" fill="#9ca3af" fontSize="5">PANEL</text>
        <text x="15" y="85" textAnchor="middle" fill="#9ca3af" fontSize="7">Panel</text>
      </g>

      {/* Connection lines - AC Disconnect to Panel */}
      <line x1="350" y1="65" x2="360" y2="65" stroke="#22c55e" strokeWidth="3"/>
      <line x1="350" y1="77" x2="360" y2="77" stroke="#22c55e" strokeWidth="3"/>

      {/* Flow arrows */}
      <text x="200" y="185" textAnchor="middle" fill="#6b7280" fontSize="8">DC Side (Art. 480)</text>
      <text x="340" y="185" textAnchor="middle" fill="#6b7280" fontSize="8">AC Side</text>
      <line x1="140" y1="178" x2="260" y2="178" stroke="#8b5cf6" strokeWidth="1" strokeDasharray="4"/>
      <line x1="290" y1="178" x2="390" y2="178" stroke="#22c55e" strokeWidth="1" strokeDasharray="4"/>
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
            { name: "NEC Article 480 Battery Storage", url: "https://amporalabs.com/blog/nec-article-480-battery-storage" },
          ]}
        />
        <BlogPostingJsonLd
          headline="NEC Article 480: Battery Storage Systems Requirements Guide"
          description="Complete guide to NEC Article 480 battery energy storage system requirements including wiring, disconnecting means, overcurrent protection, and ventilation."
          datePublished="2025-03-20"
          dateModified="2025-03-20"
          url="https://amporalabs.com/blog/nec-article-480-battery-storage"
          wordCount={3200}
          keywords={["NEC Article 480", "battery storage", "BESS", "energy storage system", "battery disconnecting means"]}
        />

        <article className="max-w-4xl mx-auto px-6 py-12">
          {/* Breadcrumb */}
          <nav className="text-sm text-white/60 mb-8">
            <Link href="/" className="hover:text-white">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/blog" className="hover:text-white">Blog</Link>
            <span className="mx-2">/</span>
            <span className="text-white">NEC Article 480 Battery Storage</span>
          </nav>

          {/* Article Header */}
          <header className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <span className="px-3 py-1 bg-purple-600/30 text-purple-300 text-sm font-medium rounded-full">
                NEC Code
              </span>
              <span className="text-white/40 text-sm">March 20, 2025</span>
              <span className="text-white/40 text-sm">13 min read</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6 leading-tight">
              NEC Article 480: Battery Storage Systems Requirements Guide
            </h1>
            <p className="text-xl text-white/70">
              Battery energy storage systems are transforming the electrical industry. This guide breaks down NEC Article 480 requirements for battery installations, from residential backup to commercial-scale BESS projects.
            </p>
          </header>

          <div className="mb-12 bg-gradient-to-br from-purple-900/20 to-cyan-900/20 rounded-2xl p-6 border border-white/10">
            <HeroIllustration />
          </div>

          {/* Table of Contents */}
          <div className="bg-white/5 rounded-2xl p-6 mb-12">
            <h2 className="font-display font-bold mb-4">In This Guide</h2>
            <ul className="space-y-2 text-white/70">
              <li><a href="#growth-of-bess" className="hover:text-purple-400">&#8594; Growth of Battery Energy Storage Systems</a></li>
              <li><a href="#scope" className="hover:text-purple-400">&#8594; Scope of Article 480</a></li>
              <li><a href="#battery-types" className="hover:text-purple-400">&#8594; Battery Types and Characteristics</a></li>
              <li><a href="#wiring-protection" className="hover:text-purple-400">&#8594; Wiring and Protection Requirements</a></li>
              <li><a href="#disconnecting-means" className="hover:text-purple-400">&#8594; Disconnecting Means (480.7)</a></li>
              <li><a href="#overcurrent" className="hover:text-purple-400">&#8594; Overcurrent Protection</a></li>
              <li><a href="#ventilation" className="hover:text-purple-400">&#8594; Battery Room Ventilation Requirements</a></li>
              <li><a href="#spacing" className="hover:text-purple-400">&#8594; Spacing and Accessibility</a></li>
              <li><a href="#article-706" className="hover:text-purple-400">&#8594; Integration with Solar PV (Article 706)</a></li>
              <li><a href="#inspection" className="hover:text-purple-400">&#8594; Inspection Considerations</a></li>
            </ul>
          </div>

          {/* Article Content */}
          <div className="prose prose-invert prose-lg max-w-none">

            <section id="growth-of-bess" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Growth of Battery Energy Storage Systems</h2>
              <p className="text-white/80 mb-4">
                Battery energy storage systems (BESS) have seen explosive growth in recent years. Driven by falling lithium-ion battery prices, increased solar PV adoption, grid resilience concerns, and utility demand-response programs, battery installations are becoming standard on both residential and commercial projects.
              </p>
              <p className="text-white/80 mb-4">
                For electricians, this means understanding the NEC requirements for battery systems is no longer optional. Whether you are installing a Tesla Powerwall for a homeowner, a commercial-scale battery array for peak shaving, or an industrial UPS system, NEC Article 480 provides the foundational safety requirements you must follow.
              </p>
              <p className="text-white/80">
                The 2023 NEC cycle brought significant updates to battery storage requirements, and the relationship between Article 480 (storage batteries) and Article 706 (energy storage systems) is essential to understand. Article 480 covers the batteries themselves, while Article 706 addresses the broader energy storage system including power conversion equipment, controls, and interconnection.
              </p>
            </section>

            <section id="scope" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Scope of Article 480</h2>
              <p className="text-white/80 mb-4">
                NEC Article 480 applies to <strong>all stationary installations of storage batteries</strong>. This includes batteries used for:
              </p>
              <ul className="list-disc list-inside text-white/70 space-y-2 mb-4">
                <li><strong>Backup power systems</strong> - UPS systems, emergency lighting, standby power</li>
                <li><strong>Renewable energy storage</strong> - Solar PV battery backup, wind energy storage</li>
                <li><strong>Peak demand management</strong> - Load shifting and demand-response systems</li>
                <li><strong>Telecommunications</strong> - Central office battery plants, cell tower backup</li>
                <li><strong>Industrial applications</strong> - Forklift charging stations, DC power systems</li>
              </ul>
              <div className="bg-purple-900/30 rounded-xl p-6 my-6">
                <h3 className="font-semibold text-purple-400 mb-2">Article 480 vs Article 706</h3>
                <p className="text-white/70">
                  <strong>Article 480</strong> covers the batteries themselves: wiring, disconnecting means, overcurrent protection, ventilation, and spacing. <strong>Article 706</strong> (Energy Storage Systems) covers the complete system including inverters, charge controllers, interconnection to premises wiring, and system-level requirements. For most BESS installations, you will need to reference both articles.
                </p>
              </div>
              <p className="text-white/80">
                Article 480 does <strong>not</strong> apply to batteries used for starting and ignition of vehicles, self-contained battery-powered vehicles, or batteries integral to listed equipment where the battery is not field-replaceable.
              </p>
            </section>

            <section id="battery-types" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Battery Types and Characteristics</h2>
              <p className="text-white/80 mb-4">
                Understanding battery chemistry is critical for proper installation because each type has different safety requirements, ventilation needs, and failure modes. Here are the major battery types encountered in stationary installations:
              </p>

              <div className="grid md:grid-cols-2 gap-4 my-6">
                <div className="bg-purple-900/30 rounded-xl p-6">
                  <h3 className="font-semibold text-purple-400 mb-2">Lithium-Ion (Li-ion)</h3>
                  <p className="text-white/70 text-sm mb-2">The dominant technology for residential and commercial BESS. Includes LFP (lithium iron phosphate) and NMC (nickel manganese cobalt) variants.</p>
                  <ul className="text-white/60 text-sm space-y-1">
                    <li>High energy density (150-250 Wh/kg)</li>
                    <li>Long cycle life (3,000-10,000 cycles for LFP)</li>
                    <li>Thermal runaway risk requires BMS</li>
                    <li>No ventilation for hydrogen, but fire suppression considerations</li>
                  </ul>
                </div>
                <div className="bg-cyan-900/30 rounded-xl p-6">
                  <h3 className="font-semibold text-cyan-400 mb-2">Lead-Acid (Flooded &amp; VRLA)</h3>
                  <p className="text-white/70 text-sm mb-2">Traditional technology still widely used in UPS systems, telecommunications, and off-grid solar. Flooded and valve-regulated (VRLA/AGM/gel) types.</p>
                  <ul className="text-white/60 text-sm space-y-1">
                    <li>Lower energy density (30-50 Wh/kg)</li>
                    <li>Shorter cycle life (500-1,500 cycles)</li>
                    <li>Flooded types produce hydrogen gas during charging</li>
                    <li>Ventilation requirements critical for flooded cells</li>
                  </ul>
                </div>
                <div className="bg-green-900/30 rounded-xl p-6">
                  <h3 className="font-semibold text-green-400 mb-2">Flow Batteries (Vanadium Redox)</h3>
                  <p className="text-white/70 text-sm mb-2">Emerging technology for large-scale, long-duration storage. Electrolyte stored in external tanks.</p>
                  <ul className="text-white/60 text-sm space-y-1">
                    <li>Scalable capacity (add more electrolyte)</li>
                    <li>Very long cycle life (10,000+ cycles)</li>
                    <li>Lower energy density, larger footprint</li>
                    <li>Electrolyte handling and containment requirements</li>
                  </ul>
                </div>
                <div className="bg-orange-900/30 rounded-xl p-6">
                  <h3 className="font-semibold text-orange-400 mb-2">Nickel-Based (NiCd, NiFe)</h3>
                  <p className="text-white/70 text-sm mb-2">Legacy technology found in some industrial and utility applications. Nickel-cadmium still used in some critical systems.</p>
                  <ul className="text-white/60 text-sm space-y-1">
                    <li>Extremely rugged and reliable</li>
                    <li>Wide operating temperature range</li>
                    <li>Hydrogen gas production during charging</li>
                    <li>Cadmium disposal environmental concerns</li>
                  </ul>
                </div>
              </div>

              <div className="overflow-x-auto my-6">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-white/20">
                      <th className="text-left py-3 px-4 text-white/60">Battery Type</th>
                      <th className="text-left py-3 px-4 text-white/60">Nominal Voltage/Cell</th>
                      <th className="text-left py-3 px-4 text-white/60">Typical System Voltage</th>
                      <th className="text-left py-3 px-4 text-white/60">H2 Ventilation Required</th>
                    </tr>
                  </thead>
                  <tbody className="text-white/80">
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">Lithium-Ion (LFP)</td>
                      <td className="py-3 px-4">3.2V</td>
                      <td className="py-3 px-4">48V - 800V+</td>
                      <td className="py-3 px-4">No</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">Lithium-Ion (NMC)</td>
                      <td className="py-3 px-4">3.6-3.7V</td>
                      <td className="py-3 px-4">48V - 800V+</td>
                      <td className="py-3 px-4">No</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">Lead-Acid (Flooded)</td>
                      <td className="py-3 px-4">2.0V</td>
                      <td className="py-3 px-4">12V - 480V</td>
                      <td className="py-3 px-4">Yes - Critical</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">Lead-Acid (VRLA/AGM)</td>
                      <td className="py-3 px-4">2.0V</td>
                      <td className="py-3 px-4">12V - 480V</td>
                      <td className="py-3 px-4">Yes - Reduced</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">Vanadium Redox Flow</td>
                      <td className="py-3 px-4">1.2-1.4V</td>
                      <td className="py-3 px-4">48V - 1000V</td>
                      <td className="py-3 px-4">No</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4">Nickel-Cadmium</td>
                      <td className="py-3 px-4">1.2V</td>
                      <td className="py-3 px-4">24V - 480V</td>
                      <td className="py-3 px-4">Yes</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section id="wiring-protection" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Wiring and Protection Requirements</h2>
              <p className="text-white/80 mb-4">
                Battery systems present unique wiring challenges because batteries are both a source and a load. Unlike utility-supplied circuits where fault current flows from one direction, battery systems can supply fault current from the battery terminals themselves. This fundamentally affects how you approach conductor sizing, overcurrent protection placement, and wiring methods.
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-3">Conductor Sizing (480.4)</h3>
              <p className="text-white/80 mb-4">
                Battery conductors must be sized based on the maximum current the battery can deliver. Per 480.4, conductor ampacity must not be less than the maximum current that the battery can deliver during normal or abnormal conditions. Key considerations:
              </p>
              <ul className="list-disc list-inside text-white/70 space-y-2 mb-4">
                <li><strong>Short-circuit current</strong> - Batteries, especially lithium-ion, can deliver extremely high fault currents (thousands of amps from a single module)</li>
                <li><strong>Continuous duty</strong> - Battery charging and discharging are often considered continuous loads requiring the 125% sizing factor per 210.20</li>
                <li><strong>Temperature correction</strong> - Battery rooms can be warm; apply temperature correction factors from NEC Table 310.15(B)(1)</li>
                <li><strong>Voltage drop</strong> - DC systems are particularly sensitive to voltage drop; keep runs short and conductors adequately sized</li>
              </ul>

              <h3 className="text-xl font-semibold mt-6 mb-3">Wiring Methods (480.3)</h3>
              <p className="text-white/80 mb-4">
                Wiring methods must comply with the applicable articles of the NEC for the specific conductor types used. In battery rooms, additional considerations apply:
              </p>
              <div className="bg-white/5 rounded-xl p-6 my-6">
                <ul className="text-white/70 space-y-2">
                  <li><strong>Conductor insulation</strong> - Must be rated for the voltage of the battery system. For systems above 50V, insulation voltage rating must equal or exceed system voltage.</li>
                  <li><strong>Flexible cables</strong> - Battery interconnection cables are often flexible welding cable or battery cable. These must be listed and suitable for the application.</li>
                  <li><strong>Raceway fill</strong> - Standard conduit fill calculations apply. DC battery circuits often use larger conductors, so plan raceway sizes accordingly.</li>
                  <li><strong>Identification</strong> - DC conductors must be identified per 210.5. Positive conductors are typically red, negative conductors are typically black, and the grounded conductor (if any) is white.</li>
                </ul>
              </div>

              <div className="bg-orange-900/30 rounded-xl p-6 my-6">
                <p className="text-white/90">
                  <strong>Critical Safety Note:</strong> Unlike AC systems where opening one conductor interrupts the circuit, DC battery systems can sustain arcs much more readily. DC arcs do not have zero-crossing points like AC, making them harder to extinguish. This is why DC-rated disconnects, breakers, and fuses are absolutely essential. Never use AC-only rated devices on DC battery circuits.
                </p>
              </div>
            </section>

            <section id="disconnecting-means" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Disconnecting Means (480.7)</h2>
              <p className="text-white/80 mb-4">
                NEC 480.7 requires a disconnecting means for all ungrounded conductors of a battery system that operates at over 50 volts nominal. This is one of the most critical safety requirements for battery installations.
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-3">Key Requirements</h3>
              <div className="space-y-4 my-6">
                <div className="bg-white/5 rounded-xl p-4">
                  <h4 className="font-semibold text-white">Location (480.7(A))</h4>
                  <p className="text-white/60 text-sm mt-1">The disconnecting means must be readily accessible and located within sight of the battery system. &quot;Within sight&quot; means visible and not more than 50 feet from the battery per NEC definitions.</p>
                </div>
                <div className="bg-white/5 rounded-xl p-4">
                  <h4 className="font-semibold text-white">Rating (480.7(B))</h4>
                  <p className="text-white/60 text-sm mt-1">The disconnect must be rated for the maximum circuit voltage and current. It must be a DC-rated device capable of interrupting the maximum available fault current from the battery.</p>
                </div>
                <div className="bg-white/5 rounded-xl p-4">
                  <h4 className="font-semibold text-white">Simultaneous Disconnect (480.7(C))</h4>
                  <p className="text-white/60 text-sm mt-1">Where the battery system is grounded, the disconnecting means must disconnect all ungrounded conductors simultaneously. A single-pole disconnect on just the positive conductor is not permitted on grounded systems above 50V.</p>
                </div>
                <div className="bg-white/5 rounded-xl p-4">
                  <h4 className="font-semibold text-white">Lockable (480.7(D))</h4>
                  <p className="text-white/60 text-sm mt-1">The disconnecting means must be capable of being locked in the open position per 110.25. This enables safe servicing by allowing lockout/tagout procedures. The provisions for locking must remain in place with or without the lock installed.</p>
                </div>
              </div>

              <div className="bg-purple-900/30 rounded-xl p-6 my-6">
                <h3 className="font-semibold text-purple-400 mb-2">Multiple Battery Banks</h3>
                <p className="text-white/70">
                  When multiple battery strings or banks are connected together, each battery bank should have its own disconnecting means. This allows individual strings to be isolated for maintenance without shutting down the entire system. Per 480.7, the disconnecting means for each battery circuit must be located so as to be readily accessible.
                </p>
              </div>
            </section>

            <section id="overcurrent" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Overcurrent Protection</h2>
              <p className="text-white/80 mb-4">
                Battery overcurrent protection requires careful attention because the battery itself is a power source. Unlike load-side circuits where fault current comes from the utility transformer, battery fault current originates from the electrochemical cells and can be extraordinarily high.
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-3">Protection Requirements (480.5)</h3>
              <p className="text-white/80 mb-4">
                Per NEC 480.5, overcurrent protection must be provided for battery conductors operating at over 50 volts nominal. The overcurrent device must:
              </p>
              <ul className="list-disc list-inside text-white/70 space-y-2 mb-4">
                <li>Be rated for DC service (not just AC)</li>
                <li>Be rated for the available fault current from the battery</li>
                <li>Be located as close as practicable to the battery terminals</li>
                <li>Protect conductors per their ampacity rating</li>
              </ul>

              <div className="overflow-x-auto my-6">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-white/20">
                      <th className="text-left py-3 px-4 text-white/60">Battery System Voltage</th>
                      <th className="text-left py-3 px-4 text-white/60">Typical Capacity Range</th>
                      <th className="text-left py-3 px-4 text-white/60">Typical OCPD Type</th>
                      <th className="text-left py-3 px-4 text-white/60">AIC Rating Needed</th>
                    </tr>
                  </thead>
                  <tbody className="text-white/80">
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">12-48V (Residential)</td>
                      <td className="py-3 px-4">5-20 kWh</td>
                      <td className="py-3 px-4">DC Fuse or DC Breaker</td>
                      <td className="py-3 px-4">5,000-10,000A</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">48-120V (Small Commercial)</td>
                      <td className="py-3 px-4">20-100 kWh</td>
                      <td className="py-3 px-4">DC Fuse or Molded Case Breaker</td>
                      <td className="py-3 px-4">10,000-50,000A</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">200-600V (Commercial)</td>
                      <td className="py-3 px-4">100-500 kWh</td>
                      <td className="py-3 px-4">DC MCCB or DC Fuse</td>
                      <td className="py-3 px-4">50,000-100,000A</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4">600V-1000V (Utility Scale)</td>
                      <td className="py-3 px-4">500 kWh - MWh+</td>
                      <td className="py-3 px-4">High-speed DC Fuse</td>
                      <td className="py-3 px-4">100,000A+</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="bg-red-900/20 border border-red-500/30 rounded-xl p-6 my-6">
                <h3 className="font-semibold text-red-400 mb-2">Common Mistake: Using AC Breakers on DC Circuits</h3>
                <p className="text-white/60 text-sm">
                  Standard AC circuit breakers are NOT rated for DC service unless specifically marked with a DC voltage rating. AC breakers rely on the alternating current&apos;s zero-crossing to extinguish the arc. DC has no zero-crossing, so arcs can be sustained indefinitely, leading to breaker destruction and fire. Always verify the DC voltage and current rating on any overcurrent device used in a battery circuit.
                </p>
              </div>
            </section>

            {/* Mid-Article CTA */}
            <div className="not-prose my-12 bg-gradient-to-r from-purple-900/40 to-cyan-900/40 rounded-xl p-6 border border-purple-500/20"><div className="flex flex-col sm:flex-row items-center gap-4"><div className="flex-1 text-center sm:text-left"><p className="font-display font-bold text-lg text-white mb-1">Ampora — The Electrician&apos;s AI Companion</p><p className="text-white/60 text-sm">Instant NEC code answers, electrical calculators, and AI troubleshooting. Free on iOS.</p></div><a href="https://apps.apple.com/us/app/ampora/id6753693522" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 bg-white text-black font-semibold rounded-full hover:bg-white/90 transition-colors text-sm whitespace-nowrap"><svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/></svg>Download Free</a></div></div>

            <section id="ventilation" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Battery Room Ventilation Requirements</h2>
              <p className="text-white/80 mb-4">
                Ventilation is one of the most critical and most frequently misunderstood requirements for battery installations. The requirements vary significantly based on battery chemistry, and getting this wrong can create explosive hydrogen gas accumulations.
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-3">Hydrogen Gas Hazards (480.9(A))</h3>
              <p className="text-white/80 mb-4">
                Flooded lead-acid and nickel-cadmium batteries produce hydrogen gas during charging through the electrolysis of water. Hydrogen is explosive at concentrations of 4% to 75% in air (lower explosive limit or LEL is 4%). NEC 480.9(A) requires ventilation sufficient to prevent hydrogen accumulation in excess of 1% concentration - providing a 4:1 safety factor below the LEL.
              </p>

              <div className="bg-white/5 rounded-xl p-6 my-6">
                <h4 className="text-white font-semibold mb-3">Ventilation Calculation for Flooded Lead-Acid Batteries</h4>
                <p className="text-white/70 text-sm mb-3">The hydrogen generation rate can be calculated using the following formula from IEEE 484:</p>
                <div className="bg-black/30 rounded-lg p-4 font-mono text-sm text-white/80 mb-3">
                  <p>Q = 0.000269 x N x I x C</p>
                  <p className="text-white/50 mt-2">Where:</p>
                  <p className="text-white/50">Q = Hydrogen generation rate (ft3/min)</p>
                  <p className="text-white/50">N = Number of cells</p>
                  <p className="text-white/50">I = Charging current (amps)</p>
                  <p className="text-white/50">C = Overcharge factor (typically 1.0 to 1.15)</p>
                </div>
                <p className="text-white/70 text-sm">
                  The required ventilation rate in CFM equals Q divided by 0.01 (to maintain hydrogen below 1% concentration). Ensure both supply and exhaust are provided, with exhaust located at the highest point in the room since hydrogen is lighter than air.
                </p>
              </div>

              <h3 className="text-xl font-semibold mt-6 mb-3">Ventilation by Battery Type</h3>
              <div className="space-y-4 my-6">
                <div className="bg-red-900/20 border border-red-500/30 rounded-xl p-4">
                  <h4 className="font-semibold text-red-400">Flooded Lead-Acid - HIGH Ventilation Required</h4>
                  <p className="text-white/60 text-sm mt-1">Continuous mechanical ventilation is typically required. Battery room must have both supply and exhaust. Exhaust at ceiling level. No ignition sources. Explosion-proof electrical equipment may be required depending on room classification. Eyewash station required within 25 feet for electrolyte splash.</p>
                </div>
                <div className="bg-yellow-900/20 border border-yellow-500/30 rounded-xl p-4">
                  <h4 className="font-semibold text-yellow-400">VRLA/AGM Lead-Acid - MODERATE Ventilation Required</h4>
                  <p className="text-white/60 text-sm mt-1">VRLA batteries normally recombine hydrogen internally, but can vent during overcharging or thermal runaway. Natural ventilation is often acceptable, but mechanical ventilation should be provided for larger installations. Hydrogen sensors recommended.</p>
                </div>
                <div className="bg-green-900/20 border border-green-500/30 rounded-xl p-4">
                  <h4 className="font-semibold text-green-400">Lithium-Ion - MINIMAL Hydrogen Ventilation</h4>
                  <p className="text-white/60 text-sm mt-1">Li-ion batteries do not produce hydrogen during normal operation. However, thermal runaway can produce toxic gases (HF, CO, electrolyte vapors). Ventilation design should address thermal runaway exhaust per manufacturer requirements. NFPA 855 provides additional guidance for li-ion fire safety.</p>
                </div>
              </div>
            </section>

            <section id="spacing" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Spacing and Accessibility</h2>
              <p className="text-white/80 mb-4">
                Proper spacing around battery systems ensures safe maintenance access and adequate airflow. NEC 480.9(B) through 480.9(E) address physical installation requirements.
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-3">Working Space (480.9(G))</h3>
              <p className="text-white/80 mb-4">
                Battery systems operating at over 50 volts nominal require working space in accordance with NEC 110.26. This means:
              </p>
              <div className="overflow-x-auto my-6">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-white/20">
                      <th className="text-left py-3 px-4 text-white/60">System Voltage</th>
                      <th className="text-left py-3 px-4 text-white/60">Condition 1 (No live/grounded parts opposite)</th>
                      <th className="text-left py-3 px-4 text-white/60">Condition 2 (Grounded parts opposite)</th>
                      <th className="text-left py-3 px-4 text-white/60">Condition 3 (Live parts opposite)</th>
                    </tr>
                  </thead>
                  <tbody className="text-white/80">
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">50-150V</td>
                      <td className="py-3 px-4">3 feet</td>
                      <td className="py-3 px-4">3 feet</td>
                      <td className="py-3 px-4">3 feet</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">151-600V</td>
                      <td className="py-3 px-4">3 feet</td>
                      <td className="py-3 px-4">3.5 feet</td>
                      <td className="py-3 px-4">4 feet</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4">601V-1000V</td>
                      <td className="py-3 px-4">3 feet</td>
                      <td className="py-3 px-4">4 feet</td>
                      <td className="py-3 px-4">5 feet</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h3 className="text-xl font-semibold mt-6 mb-3">Additional Spacing Requirements</h3>
              <ul className="list-disc list-inside text-white/70 space-y-2 mb-4">
                <li><strong>Rack spacing</strong> - Battery racks must be arranged to allow adequate air circulation between cells and provide access for maintenance (electrolyte checks, connection torquing)</li>
                <li><strong>Floor loading</strong> - Battery systems are heavy. A typical lead-acid telecom battery string can weigh 2,000-10,000+ pounds. Verify floor load capacity before installation.</li>
                <li><strong>Seismic bracing</strong> - In seismic zones, battery racks must be braced per applicable building codes. This is especially critical for tall multi-tier rack installations.</li>
                <li><strong>Dedicated room or area</strong> - For larger installations, a dedicated battery room with appropriate fire rating, containment, and signage is typically required by the AHJ and referenced standards (NFPA 855, IFC).</li>
              </ul>

              <div className="bg-purple-900/30 rounded-xl p-6 my-6">
                <h3 className="font-semibold text-purple-400 mb-2">Signage Requirements (480.9(F))</h3>
                <p className="text-white/70">
                  Battery rooms and enclosures must be posted with appropriate warning signs. Signs must indicate the <strong>nominal battery voltage</strong>, the <strong>maximum available fault current</strong>, and the <strong>date of installation</strong>. For rooms containing batteries that produce hydrogen, additional signage warning of explosive gas hazard and prohibiting open flames and sparks is required.
                </p>
              </div>
            </section>

            <section id="article-706" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Integration with Solar PV (Article 706 ESS)</h2>
              <p className="text-white/80 mb-4">
                Most modern battery storage installations are paired with solar photovoltaic systems. This creates an intersection between three major NEC articles: <strong>Article 480</strong> (batteries), <strong>Article 690</strong> (solar PV), and <strong>Article 706</strong> (energy storage systems). Understanding how these articles work together is essential.
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-3">Article 706 - Energy Storage Systems</h3>
              <p className="text-white/80 mb-4">
                Article 706 was introduced in the 2020 NEC and significantly expanded in the 2023 edition. It covers the complete energy storage system (ESS) rather than just the batteries. Key Article 706 requirements include:
              </p>
              <ul className="list-disc list-inside text-white/70 space-y-2 mb-4">
                <li><strong>706.6 - Listing requirements</strong> - ESS equipment must be listed and labeled (UL 9540 is the primary listing standard)</li>
                <li><strong>706.12 - Connection to other sources</strong> - Requirements for interconnecting ESS with PV, utility, and generators</li>
                <li><strong>706.15 - System capacity</strong> - Maximum stored energy must be marked on the equipment</li>
                <li><strong>706.20 - Disconnecting means</strong> - Each ESS must have a disconnecting means complying with Article 706 requirements (in addition to Article 480 battery disconnects)</li>
                <li><strong>706.30 - Overcurrent protection</strong> - System-level overcurrent protection sized for the power conversion equipment output</li>
                <li><strong>706.50 - Grounding and bonding</strong> - Must comply with Article 250, with special attention to DC grounding configurations</li>
              </ul>

              <h3 className="text-xl font-semibold mt-6 mb-3">DC-Coupled vs AC-Coupled Systems</h3>
              <div className="grid md:grid-cols-2 gap-4 my-6">
                <div className="bg-purple-900/30 rounded-xl p-6">
                  <h3 className="font-semibold text-purple-400 mb-2">DC-Coupled</h3>
                  <p className="text-white/70 text-sm">Solar PV array connects to a charge controller that feeds the battery bank directly on the DC bus. A single hybrid inverter converts DC to AC for the panel. Fewer components but the inverter must handle both PV and battery. Battery and PV share a common DC disconnect. Article 690 applies to the PV side, Article 480 to batteries, and Article 706 to the complete system.</p>
                </div>
                <div className="bg-cyan-900/30 rounded-xl p-6">
                  <h3 className="font-semibold text-cyan-400 mb-2">AC-Coupled</h3>
                  <p className="text-white/70 text-sm">Solar PV has its own inverter connecting to the AC panel. The battery system has a separate battery inverter connecting to the same AC panel. Each system operates independently on the AC side. This approach is common for retrofit installations. Each inverter must comply with its respective interconnection requirements (Article 690 for PV, Article 706 for ESS).</p>
                </div>
              </div>

              <div className="bg-white/5 rounded-xl p-6 my-6">
                <h4 className="text-white font-semibold mb-3">Backfeed Protection and Bus Bar Ratings</h4>
                <p className="text-white/70 text-sm">
                  When battery inverters backfeed into a panel, you must account for the additional current source. The 120% rule (705.12(B)(2)) applies: the sum of the supply breaker ratings feeding the busbar (main breaker + backfed inverter breakers) must not exceed 120% of the busbar rating. For example, a 200A panel with a 200A main can accept a maximum of 40A of backfed inverter breakers (200 x 1.20 = 240A; 240A - 200A main = 40A). The backfed breakers must be installed at the opposite end of the bus from the main breaker.
                </p>
              </div>
            </section>

            <section id="inspection" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Inspection Considerations</h2>
              <p className="text-white/80 mb-4">
                Battery storage installations undergo rigorous inspection. Knowing what the inspector will be looking for helps you get it right the first time. Here is a comprehensive checklist of common inspection points:
              </p>

              <div className="space-y-4 my-6">
                <div className="bg-white/5 rounded-xl p-4">
                  <h4 className="font-semibold text-white">1. Equipment Listing and Labeling</h4>
                  <p className="text-white/60 text-sm mt-1">All ESS equipment must be listed to UL 9540 (or equivalent). Battery modules must be listed to UL 1973. Inverters must be listed to UL 1741. Inspectors will check for listing marks on all major components.</p>
                </div>
                <div className="bg-white/5 rounded-xl p-4">
                  <h4 className="font-semibold text-white">2. Disconnecting Means</h4>
                  <p className="text-white/60 text-sm mt-1">Verify DC disconnect is within sight and readily accessible. Check DC voltage and current ratings. Confirm lockout/tagout capability. For systems with both PV and battery, each source must have its own disconnect.</p>
                </div>
                <div className="bg-white/5 rounded-xl p-4">
                  <h4 className="font-semibold text-white">3. Overcurrent Protection</h4>
                  <p className="text-white/60 text-sm mt-1">Confirm all overcurrent devices are DC-rated and have adequate AIC rating for the available fault current. Check that conductor ampacity is protected by the OCPD rating. Verify fuse or breaker is installed as close to battery terminals as practicable.</p>
                </div>
                <div className="bg-white/5 rounded-xl p-4">
                  <h4 className="font-semibold text-white">4. Grounding and Bonding</h4>
                  <p className="text-white/60 text-sm mt-1">Check that the system grounding configuration (grounded vs ungrounded) matches the equipment design. Verify equipment grounding conductor sizing per Table 250.122. Confirm all metal enclosures and racking are properly bonded.</p>
                </div>
                <div className="bg-white/5 rounded-xl p-4">
                  <h4 className="font-semibold text-white">5. Ventilation and Room Requirements</h4>
                  <p className="text-white/60 text-sm mt-1">For hydrogen-producing batteries: verify ventilation rate calculations, exhaust location at ceiling, no ignition sources, explosion-proof equipment if classified area. For lithium-ion: verify manufacturer ventilation requirements are met and smoke detection is installed.</p>
                </div>
                <div className="bg-white/5 rounded-xl p-4">
                  <h4 className="font-semibold text-white">6. Signage and Labeling</h4>
                  <p className="text-white/60 text-sm mt-1">Battery system voltage, available fault current, and installation date on the equipment. Rapid shutdown labels (if applicable). Directory at main panel showing all power sources (utility, PV, battery). Warning signs for hydrogen hazard areas.</p>
                </div>
                <div className="bg-white/5 rounded-xl p-4">
                  <h4 className="font-semibold text-white">7. Interconnection Compliance</h4>
                  <p className="text-white/60 text-sm mt-1">Verify the 120% rule is satisfied for backfed breakers. Check that dedicated breakers are used and properly identified. Confirm the backfed breakers are positioned at the opposite end of the bus from the main breaker. Verify rapid shutdown compliance if required by local amendments.</p>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Battery System Sizing Reference</h2>
              <p className="text-white/80 mb-4">
                The following table provides a quick reference for typical battery system sizing parameters that affect electrical installation requirements:
              </p>
              <div className="overflow-x-auto my-6">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-white/20">
                      <th className="text-left py-3 px-4 text-white/60">Application</th>
                      <th className="text-left py-3 px-4 text-white/60">Typical Size (kWh)</th>
                      <th className="text-left py-3 px-4 text-white/60">System Voltage</th>
                      <th className="text-left py-3 px-4 text-white/60">Inverter Size</th>
                      <th className="text-left py-3 px-4 text-white/60">Min. Conductor Size</th>
                    </tr>
                  </thead>
                  <tbody className="text-white/80">
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">Residential Backup</td>
                      <td className="py-3 px-4">10-20 kWh</td>
                      <td className="py-3 px-4">48V DC</td>
                      <td className="py-3 px-4">5-7.6 kW</td>
                      <td className="py-3 px-4">4 AWG Cu</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">Residential Solar+Storage</td>
                      <td className="py-3 px-4">20-40 kWh</td>
                      <td className="py-3 px-4">48-400V DC</td>
                      <td className="py-3 px-4">7.6-11.4 kW</td>
                      <td className="py-3 px-4">2 AWG Cu</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">Small Commercial</td>
                      <td className="py-3 px-4">50-200 kWh</td>
                      <td className="py-3 px-4">200-600V DC</td>
                      <td className="py-3 px-4">25-60 kW</td>
                      <td className="py-3 px-4">2/0 AWG Cu</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">Commercial Peak Shaving</td>
                      <td className="py-3 px-4">200-1,000 kWh</td>
                      <td className="py-3 px-4">400-800V DC</td>
                      <td className="py-3 px-4">60-250 kW</td>
                      <td className="py-3 px-4">350 kcmil Cu</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4">Utility Scale</td>
                      <td className="py-3 px-4">1+ MWh</td>
                      <td className="py-3 px-4">600-1500V DC</td>
                      <td className="py-3 px-4">500 kW+</td>
                      <td className="py-3 px-4">Parallel runs, 500 kcmil+</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-white/70 text-sm">
                <strong>Note:</strong> Actual conductor sizing must be calculated based on specific equipment ratings, cable length, temperature correction, and continuous load factors. These values are approximate starting points only.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Key Takeaways for Electricians</h2>
              <div className="bg-gradient-to-r from-purple-900/30 to-cyan-900/30 rounded-xl p-6 my-6">
                <ol className="text-white/80 space-y-3">
                  <li><strong>1.</strong> Always use DC-rated disconnects, breakers, and fuses for battery circuits. AC-only devices can fail catastrophically on DC.</li>
                  <li><strong>2.</strong> Know your battery chemistry. Flooded lead-acid requires serious ventilation; lithium-ion requires fire safety planning.</li>
                  <li><strong>3.</strong> Battery fault current can be extremely high. Verify the AIC rating of your overcurrent devices against the battery manufacturer&apos;s short-circuit current data.</li>
                  <li><strong>4.</strong> Disconnecting means must be within sight, lockable, and rated for the full system voltage and current.</li>
                  <li><strong>5.</strong> For solar+storage systems, understand the relationship between Articles 480, 690, and 706, and apply the 120% rule for backfed breakers.</li>
                  <li><strong>6.</strong> All ESS equipment must be listed (UL 9540, UL 1973, UL 1741). Unlisted components will not pass inspection.</li>
                  <li><strong>7.</strong> Reference NFPA 855 (Standard for the Installation of Stationary Energy Storage Systems) for fire safety requirements beyond the NEC.</li>
                </ol>
              </div>
            </section>

          </div>

          {/* CTA Section */}
          <section className="bg-gradient-to-r from-purple-900/30 to-cyan-900/30 rounded-2xl p-8 md:p-12 my-12 border border-purple-500/20"><div className="text-center"><div className="inline-flex items-center gap-2 bg-white/10 px-4 py-1.5 rounded-full mb-4"><span className="text-sm text-white/80">&#9733; Free on the App Store</span></div><h2 className="text-2xl md:text-3xl font-display font-bold mb-4">Your Electrical Reference, Powered by AI</h2><p className="text-white/70 mb-8 max-w-2xl mx-auto">Join thousands of electricians using Ampora for instant NEC code answers, electrical calculations, and AI-powered troubleshooting — right from your phone.</p><div className="flex flex-col sm:flex-row justify-center gap-4"><a href="https://apps.apple.com/us/app/ampora/id6753693522" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-black font-semibold rounded-full hover:bg-white/90 transition-colors"><svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/></svg>Download on App Store</a><Link href="/features/nec-code-reference" className="px-8 py-4 bg-white/10 text-white font-semibold rounded-full hover:bg-white/20 transition-colors text-center">Explore Features</Link></div></div></section>

          {/* Related Posts */}
          <div className="mt-12 pt-8 border-t border-white/10">
            <h3 className="text-xl font-display font-bold mb-6">Related Articles</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <Link href="/blog/solar-pv-system-installation-nec-690" className="group bg-white/5 hover:bg-white/10 rounded-xl p-6 transition-all">
                <span className="text-purple-400 text-sm">NEC Code</span>
                <h4 className="font-semibold group-hover:text-purple-400 transition-colors mt-2">Solar PV System Installation: NEC 690 Guide</h4>
                <p className="text-white/60 text-sm mt-2">Complete guide to NEC Article 690 for solar photovoltaic installations.</p>
              </Link>
              <Link href="/blog/electrical-grounding-vs-bonding" className="group bg-white/5 hover:bg-white/10 rounded-xl p-6 transition-all">
                <span className="text-purple-400 text-sm">NEC Code</span>
                <h4 className="font-semibold group-hover:text-purple-400 transition-colors mt-2">Electrical Grounding vs Bonding Explained</h4>
                <p className="text-white/60 text-sm mt-2">Understand the critical differences between grounding and bonding in electrical systems.</p>
              </Link>
            </div>
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
