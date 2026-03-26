import { Metadata } from "next";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import { BlogPostingJsonLd, BreadcrumbJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Electric Heating Systems: Installation & NEC Requirements",
  description: "Complete guide to electric heating system installation per NEC Article 424. Learn requirements for baseboard heaters, wall heaters, radiant floor heat, heat pumps, duct heaters, and branch circuit sizing for electricians.",
  keywords: [
    "electric heat installation",
    "NEC Article 424",
    "baseboard heater wiring",
    "radiant floor heating",
    "heat pump electrical",
    "duct heater installation",
    "electric furnace wiring",
    "thermostat wiring",
    "electric space heating",
    "heating load calculation"
  ],
  openGraph: {
    title: "Electric Heating Systems: Installation & NEC Requirements",
    description: "Complete guide to electric heating installation per NEC Article 424.",
    type: "article",
    publishedTime: "2025-06-01",
  },
};

function HeroIllustration() {
  return (
    <svg viewBox="0 0 400 180" className="w-full h-44 md:h-52" aria-label="Baseboard heater and heat pump with electrical connections illustration">
      {/* Baseboard heater */}
      <g transform="translate(20, 40)">
        {/* Wall section */}
        <rect x="0" y="0" width="150" height="60" rx="2" fill="#1f2937" stroke="#4b5563" strokeWidth="1.5"/>
        <text x="75" y="15" textAnchor="middle" fill="#6b7280" fontSize="8">WALL</text>
        {/* Baseboard unit */}
        <rect x="10" y="60" width="130" height="30" rx="3" fill="#374151" stroke="#9ca3af" strokeWidth="1.5"/>
        {/* Fins */}
        {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((i) => (
          <line key={i} x1={20 + i * 10} y1="63" x2={20 + i * 10} y2="87" stroke="#6b7280" strokeWidth="1"/>
        ))}
        {/* Heat waves */}
        <path d="M 30 55 Q 35 48, 30 40" stroke="#ef4444" strokeWidth="1.5" fill="none" opacity="0.6"/>
        <path d="M 55 55 Q 60 48, 55 40" stroke="#ef4444" strokeWidth="1.5" fill="none" opacity="0.6"/>
        <path d="M 80 55 Q 85 48, 80 40" stroke="#ef4444" strokeWidth="1.5" fill="none" opacity="0.6"/>
        <path d="M 105 55 Q 110 48, 105 40" stroke="#ef4444" strokeWidth="1.5" fill="none" opacity="0.6"/>
        {/* Electrical connection */}
        <path d="M 140 75 L 160 75 L 160 25 L 150 25" stroke="#22c55e" strokeWidth="2" fill="none" strokeDasharray="4,2"/>
        <circle cx="160" cy="25" r="5" fill="#22c55e" fillOpacity="0.3" stroke="#22c55e" strokeWidth="1.5"/>
        {/* Thermostat */}
        <rect x="55" y="20" width="22" height="30" rx="3" fill="#374151" stroke="#22c55e" strokeWidth="1.5"/>
        <circle cx="66" cy="35" r="6" fill="none" stroke="#22c55e" strokeWidth="1"/>
        <text x="66" y="38" textAnchor="middle" fill="#22c55e" fontSize="6">72</text>
        <text x="66" y="18" textAnchor="middle" fill="#9ca3af" fontSize="6">T-STAT</text>
      </g>

      {/* Heat pump outdoor unit */}
      <g transform="translate(220, 30)">
        {/* Unit body */}
        <rect x="0" y="20" width="80" height="80" rx="4" fill="#1f2937" stroke="#06b6d4" strokeWidth="2"/>
        {/* Fan grille */}
        <circle cx="40" cy="55" r="25" fill="none" stroke="#4b5563" strokeWidth="1.5"/>
        <circle cx="40" cy="55" r="20" fill="none" stroke="#4b5563" strokeWidth="1"/>
        <circle cx="40" cy="55" r="15" fill="none" stroke="#4b5563" strokeWidth="0.5"/>
        {/* Fan blades */}
        <line x1="40" y1="40" x2="40" y2="70" stroke="#06b6d4" strokeWidth="2"/>
        <line x1="25" y1="55" x2="55" y2="55" stroke="#06b6d4" strokeWidth="2"/>
        <line x1="29" y1="44" x2="51" y2="66" stroke="#06b6d4" strokeWidth="1.5"/>
        <line x1="51" y1="44" x2="29" y2="66" stroke="#06b6d4" strokeWidth="1.5"/>
        {/* Refrigerant lines */}
        <path d="M 80 45 L 110 45 Q 120 45, 120 55 L 120 90" stroke="#06b6d4" strokeWidth="3" fill="none"/>
        <path d="M 80 65 L 105 65 Q 115 65, 115 75 L 115 90" stroke="#06b6d4" strokeWidth="2" fill="none"/>
        {/* Electrical whip */}
        <path d="M 0 80 L -20 80 L -20 40" stroke="#22c55e" strokeWidth="2" fill="none" strokeDasharray="4,2"/>
        {/* Disconnect */}
        <rect x="-30" y="20" width="20" height="30" rx="2" fill="#374151" stroke="#f59e0b" strokeWidth="1.5"/>
        <text x="-20" y="38" textAnchor="middle" fill="#f59e0b" fontSize="6">DISC</text>
        <path d="M -20 20 L -20 5" stroke="#22c55e" strokeWidth="2" fill="none"/>
        {/* Label */}
        <text x="40" y="115" textAnchor="middle" fill="#06b6d4" fontSize="9" fontWeight="bold">HEAT PUMP</text>
      </g>

      {/* Electrical panel connection */}
      <g transform="translate(340, 20)">
        <rect x="0" y="0" width="45" height="70" rx="3" fill="#1f2937" stroke="#6b7280" strokeWidth="1.5"/>
        <rect x="5" y="5" width="35" height="60" fill="#111827"/>
        {/* Breakers */}
        <rect x="8" y="10" width="14" height="8" rx="1" fill="#ef4444" fillOpacity="0.6"/>
        <rect x="24" y="10" width="14" height="8" rx="1" fill="#374151"/>
        <rect x="8" y="22" width="14" height="8" rx="1" fill="#22c55e" fillOpacity="0.6"/>
        <rect x="24" y="22" width="14" height="8" rx="1" fill="#374151"/>
        <rect x="8" y="34" width="14" height="8" rx="1" fill="#06b6d4" fillOpacity="0.6"/>
        <rect x="24" y="34" width="14" height="8" rx="1" fill="#374151"/>
        <rect x="8" y="46" width="14" height="8" rx="1" fill="#374151"/>
        <rect x="24" y="46" width="14" height="8" rx="1" fill="#374151"/>
        <text x="22" y="80" textAnchor="middle" fill="#9ca3af" fontSize="7">PANEL</text>
      </g>

      {/* Wire runs from panel */}
      <path d="M 340 35 L 310 35 L 310 5 L 200 5 L 200 40" stroke="#22c55e" strokeWidth="1.5" fill="none" opacity="0.5"/>
      <path d="M 340 50 L 320 50 L 320 125 L 180 125 L 180 115" stroke="#ef4444" strokeWidth="1.5" fill="none" opacity="0.5"/>

      {/* Labels */}
      <text x="95" y="170" textAnchor="middle" fill="#ef4444" fontSize="9" fontWeight="bold">BASEBOARD</text>
      <text x="95" y="180" textAnchor="middle" fill="#9ca3af" fontSize="7">240V / 20A</text>
      <text x="260" y="170" textAnchor="middle" fill="#06b6d4" fontSize="9" fontWeight="bold">HEAT PUMP</text>
      <text x="260" y="180" textAnchor="middle" fill="#9ca3af" fontSize="7">240V / 30-60A</text>
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
            { name: "Electric Heat Installation", url: "https://amporalabs.com/blog/electric-heat-installation-nec" },
          ]}
        />
        <BlogPostingJsonLd
          headline="Electric Heating Systems: Installation & NEC Requirements"
          description="Complete guide to electric heating installation per NEC Article 424."
          datePublished="2025-06-01"
          url="https://amporalabs.com/blog/electric-heat-installation-nec"
        />

        <article className="max-w-4xl mx-auto px-6 py-12">
          <nav className="text-sm text-white/60 mb-8">
            <Link href="/" className="hover:text-white">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/blog" className="hover:text-white">Blog</Link>
            <span className="mx-2">/</span>
            <span className="text-white">Electric Heat Installation</span>
          </nav>

          <header className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <span className="px-3 py-1 bg-green-600/30 text-green-300 text-sm font-medium rounded-full">
                Installation
              </span>
              <span className="text-white/40 text-sm">June 1, 2025</span>
              <span className="text-white/40 text-sm">• 12 min read</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">
              Electric Heating Systems: Installation & NEC Requirements
            </h1>
            <p className="text-xl text-white/70">
              Electric heating work is a staple of residential and commercial electrical installations. Master the NEC Article 424 requirements to ensure safe, code-compliant heating system installations.
            </p>
          </header>

          <div className="mb-12 bg-gradient-to-br from-green-900/20 to-cyan-900/20 rounded-2xl p-6 border border-white/10">
            <HeroIllustration />
          </div>

          <div className="prose prose-invert prose-lg max-w-none">
            <h2>Types of Electric Heating Systems</h2>
            <p>
              Electric heating encompasses a wide range of equipment, each with distinct installation requirements.
              Understanding the different types helps electricians select the correct NEC articles and size circuits properly.
            </p>
            <div className="grid md:grid-cols-2 gap-4 my-6">
              <div className="bg-white/5 rounded-xl p-4">
                <h4 className="text-white font-semibold">Baseboard Heaters</h4>
                <p className="text-3xl font-bold text-red-400">240V</p>
                <ul className="text-white/60 text-sm mt-2 space-y-1">
                  <li>• 500W to 2,500W per unit</li>
                  <li>• Individual room control</li>
                  <li>• Simplest installation</li>
                  <li>• NEC 424 Part III</li>
                </ul>
              </div>
              <div className="bg-white/5 rounded-xl p-4">
                <h4 className="text-white font-semibold">Wall Heaters</h4>
                <p className="text-3xl font-bold text-orange-400">120/240V</p>
                <ul className="text-white/60 text-sm mt-2 space-y-1">
                  <li>• 750W to 4,000W typical</li>
                  <li>• Recessed or surface mount</li>
                  <li>• Built-in fan or convection</li>
                  <li>• NEC 424 Part III</li>
                </ul>
              </div>
              <div className="bg-cyan-500/10 border border-cyan-500/30 rounded-xl p-4">
                <h4 className="text-white font-semibold">Heat Pumps</h4>
                <p className="text-3xl font-bold text-cyan-400">240V</p>
                <ul className="text-white/60 text-sm mt-2 space-y-1">
                  <li>• 15A to 60A circuits</li>
                  <li>• Highest efficiency (COP 2-4)</li>
                  <li>• Outdoor disconnect required</li>
                  <li>• NEC 440 + 424 for aux heat</li>
                </ul>
              </div>
              <div className="bg-white/5 rounded-xl p-4">
                <h4 className="text-white font-semibold">Electric Furnaces</h4>
                <p className="text-3xl font-bold text-amber-400">240V</p>
                <ul className="text-white/60 text-sm mt-2 space-y-1">
                  <li>• 10 kW to 25 kW typical</li>
                  <li>• Central forced air</li>
                  <li>• Multiple heating elements</li>
                  <li>• NEC 424 Part IV</li>
                </ul>
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-4 my-6">
              <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-4">
                <h4 className="text-white font-semibold">Radiant Floor Heating</h4>
                <p className="text-3xl font-bold text-red-400">240V</p>
                <ul className="text-white/60 text-sm mt-2 space-y-1">
                  <li>• 8-15 watts per sq ft</li>
                  <li>• Cables or mat systems</li>
                  <li>• Embedded in floor</li>
                  <li>• NEC 424 Part IX</li>
                </ul>
              </div>
              <div className="bg-white/5 rounded-xl p-4">
                <h4 className="text-white font-semibold">Duct Heaters</h4>
                <p className="text-3xl font-bold text-yellow-400">240/480V</p>
                <ul className="text-white/60 text-sm mt-2 space-y-1">
                  <li>• 3 kW to 50+ kW</li>
                  <li>• Installed in ductwork</li>
                  <li>• Airflow interlock required</li>
                  <li>• NEC 424 Part VII</li>
                </ul>
              </div>
            </div>

            <h2>NEC Article 424: Fixed Electric Space Heating Equipment</h2>
            <p>
              NEC Article 424 is the primary code reference for electric heating installations. It covers the installation
              of fixed electric equipment used for space heating, including heating cables, unit heaters, boilers, central
              systems, and other fixed electric space heating equipment. Understanding the structure of Article 424 is
              essential for any electrician working on heating systems.
            </p>
            <div className="bg-white/5 rounded-xl p-6 my-6">
              <h4 className="text-white font-semibold mb-4">Article 424 Structure</h4>
              <table className="w-full text-left text-sm">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="py-2 text-white">Part</th>
                    <th className="py-2 text-white">Coverage</th>
                  </tr>
                </thead>
                <tbody className="text-white/70">
                  <tr className="border-b border-white/5">
                    <td className="py-2">Part I</td>
                    <td className="py-2">General (scope, definitions)</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-2">Part II</td>
                    <td className="py-2">Installation (location, clearances)</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-2">Part III</td>
                    <td className="py-2">Branch circuits, controllers, disconnects</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-2">Part IV</td>
                    <td className="py-2">Marking of heating equipment</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-2">Part V</td>
                    <td className="py-2">Electric space heating cables</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-2">Part VI</td>
                    <td className="py-2">Duct heaters</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-2">Part VII</td>
                    <td className="py-2">Resistance-type boilers</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-2">Part VIII</td>
                    <td className="py-2">Electrode-type boilers</td>
                  </tr>
                  <tr>
                    <td className="py-2">Part IX</td>
                    <td className="py-2">Heating cables and panels (radiant)</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2>Branch Circuit Sizing for Continuous Loads (125%)</h2>
            <p>
              All fixed electric space heating equipment is considered a <strong>continuous load</strong> per NEC 424.3(B).
              This means conductors and overcurrent protection must be sized at <strong>125% of the total connected load</strong>.
              This is one of the most critical and commonly tested requirements for heating installations.
            </p>
            <div className="bg-gradient-to-r from-red-900/30 to-orange-900/30 rounded-xl p-6 my-6">
              <p className="text-white font-semibold mb-2">Continuous Load Formula:</p>
              <p className="text-white font-mono text-lg">Circuit Breaker = Load Amps x 1.25</p>
              <p className="text-white font-mono text-lg mt-1">Conductor Ampacity ≥ Load Amps x 1.25</p>
            </div>
            <div className="bg-white/5 rounded-xl p-6 my-6">
              <h4 className="text-white font-semibold mb-4">Example: 2,000W Baseboard Heater at 240V</h4>
              <table className="w-full text-left text-sm">
                <tbody className="text-white/70">
                  <tr className="border-b border-white/5">
                    <td className="py-2">Load current</td>
                    <td className="py-2 text-right">2,000W / 240V = <strong>8.33A</strong></td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-2">Continuous load (x 1.25)</td>
                    <td className="py-2 text-right">8.33A x 1.25 = <strong>10.42A</strong></td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-2">Minimum breaker size</td>
                    <td className="py-2 text-right"><strong>15A (next standard size)</strong></td>
                  </tr>
                  <tr>
                    <td className="py-2">Minimum conductor</td>
                    <td className="py-2 text-right"><strong>#14 AWG copper (15A rated)</strong></td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3>Common Branch Circuit Sizing for Baseboard Heaters</h3>
            <div className="bg-white/5 rounded-xl p-6 my-6">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="py-2 text-white">Total Load</th>
                    <th className="py-2 text-white">Amps @ 240V</th>
                    <th className="py-2 text-white">125% Load</th>
                    <th className="py-2 text-white">Breaker</th>
                    <th className="py-2 text-white">Wire (Cu)</th>
                  </tr>
                </thead>
                <tbody className="text-white/70">
                  <tr className="border-b border-white/5">
                    <td className="py-2">1,500W</td>
                    <td className="py-2">6.25A</td>
                    <td className="py-2">7.81A</td>
                    <td className="py-2">15A</td>
                    <td className="py-2">#14 AWG</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-2">2,500W</td>
                    <td className="py-2">10.42A</td>
                    <td className="py-2">13.02A</td>
                    <td className="py-2">15A</td>
                    <td className="py-2">#14 AWG</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-2">3,600W</td>
                    <td className="py-2">15.0A</td>
                    <td className="py-2">18.75A</td>
                    <td className="py-2">20A</td>
                    <td className="py-2">#12 AWG</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-2">4,800W</td>
                    <td className="py-2">20.0A</td>
                    <td className="py-2">25.0A</td>
                    <td className="py-2">30A</td>
                    <td className="py-2">#10 AWG</td>
                  </tr>
                  <tr>
                    <td className="py-2">7,200W</td>
                    <td className="py-2">30.0A</td>
                    <td className="py-2">37.5A</td>
                    <td className="py-2">40A</td>
                    <td className="py-2">#8 AWG</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p>
              Per NEC 424.3(A), branch circuits for fixed electric space heating shall comply with Article 210 and
              shall not exceed the ratings specified in 424.3(A)(1) through (3). Individual baseboard heaters may be
              connected to 15A, 20A, 25A, or 30A branch circuits. Fixed electric space heating equipment rated over
              50A shall be supplied by an individual branch circuit.
            </p>

            <h2>Disconnecting Means (424.19 - 424.20)</h2>
            <p>
              Every fixed electric space heating unit requires a disconnecting means. The NEC provides specific rules
              depending on the type and size of the equipment:
            </p>
            <ul>
              <li><strong>Unit switches (424.19(A)):</strong> A unit switch with a marked &quot;off&quot; position that disconnects all ungrounded conductors can serve as the disconnect if the branch circuit switch or breaker is also accessible</li>
              <li><strong>Branch circuit breaker (424.19(B)):</strong> The branch circuit overcurrent device can serve as the disconnect if it is within sight of the equipment or is lockable per 110.25</li>
              <li><strong>Motor-driven equipment (424.20):</strong> Equipment with motors rated over 1/8 HP must have a disconnect within sight of the controller, or the disconnect must be lockable in the open position</li>
            </ul>
            <div className="bg-gradient-to-r from-amber-900/30 to-red-900/30 rounded-xl p-6 my-6">
              <p className="text-amber-300 font-semibold mb-2">Key Rule: Within Sight</p>
              <p className="text-white/70">
                &quot;Within sight&quot; means visible and not more than 50 feet (15 m) from the equipment. If the disconnect
                is not within sight, it must be capable of being locked in the open position per NEC 110.25. This applies
                to all fixed electric heating installations.
              </p>
            </div>

            <h2>Thermostat Wiring Requirements</h2>
            <p>
              Thermostats for electric heating systems fall into two categories: line-voltage and low-voltage. The type
              used depends on the heating equipment and the desired control strategy.
            </p>
            <h3>Line-Voltage Thermostats</h3>
            <p>
              Used with most baseboard heaters and wall heaters. These carry the full load current and must be rated
              for the connected load. Key requirements:
            </p>
            <ul>
              <li>Must be rated for the type of load (resistive vs. inductive)</li>
              <li>Listed and labeled for the application</li>
              <li>Switch all ungrounded conductors on 240V systems (double-pole for 240V)</li>
              <li>Installed per manufacturer instructions and NEC 424.20</li>
              <li>A single-pole thermostat on a 240V circuit does NOT meet code as a disconnect because it only opens one leg</li>
            </ul>
            <h3>Low-Voltage Thermostats</h3>
            <p>
              Used with central electric furnaces, heat pumps, and duct heaters. These operate at 24VAC via a
              control transformer and switch relay contacts, not the heating element directly. Installation requirements:
            </p>
            <ul>
              <li>Thermostat wire (18 AWG typical) run per NEC Article 725 (Class 2 circuits)</li>
              <li>Keep thermostat wire separated from line-voltage wiring</li>
              <li>Do not run Class 2 wiring in the same raceway or cable as power conductors</li>
              <li>Transformer must be properly sized for the control circuit VA load</li>
            </ul>

            <h2>Duct Heaters: NEC 424.57 - 424.66</h2>
            <p>
              Duct heaters are installed directly inside HVAC ductwork and have specific safety requirements due to
              fire hazards associated with heating elements in confined airflow spaces. These are covered under NEC
              Article 424 Part VI.
            </p>
            <h3>Critical Requirements</h3>
            <ul>
              <li><strong>Airflow interlock (424.62):</strong> Duct heaters must be interlocked with the air handler fan so the heater cannot operate without adequate airflow. The fan must start before the heater energizes and continue running after the heater de-energizes to dissipate residual heat</li>
              <li><strong>Limit controls (424.63):</strong> Each duct heater must have an approved automatic-reset temperature-limiting device and a separate manual-reset backup limit control. These prevent overheating if airflow is reduced or blocked</li>
              <li><strong>Location (424.57):</strong> Duct heaters shall not be installed in ducts carrying flammable vapors. They must be installed in accordance with the manufacturer&apos;s instructions and listed for the application</li>
              <li><strong>Clearances (424.59):</strong> Minimum clearances from combustible materials must be maintained per the manufacturer&apos;s listing. If not specified, a minimum of 2 inches is required from combustible materials</li>
              <li><strong>Disconnect (424.65):</strong> A disconnect must be provided within sight of the controller or lockable per 110.25. The controller can be the thermostat or building automation system</li>
              <li><strong>Installation on commercial duct systems (424.66):</strong> Duct heaters installed in commercial applications must be identified for the type of duct used (rigid, flexible, etc.) and the installation orientation</li>
            </ul>
            <div className="bg-white/5 rounded-xl p-6 my-6">
              <h4 className="text-white font-semibold mb-2">Duct Heater Safety Interlocks</h4>
              <p className="text-white/70 text-sm mb-3">Required sequence of operation:</p>
              <ol className="text-white/60 text-sm space-y-1">
                <li>1. Thermostat calls for heat</li>
                <li>2. Fan starts and airflow is confirmed</li>
                <li>3. Time delay relay allows heater to energize (after airflow proven)</li>
                <li>4. Heater elements energize in stages</li>
                <li>5. On satisfaction, heater de-energizes</li>
                <li>6. Fan continues running (fan-off delay) to dissipate residual heat</li>
                <li>7. Fan stops after delay period</li>
              </ol>
            </div>

            <h2>Radiant Heating Cables and Panels: NEC 424 Part IX</h2>
            <p>
              Radiant heating systems embedded in floors, walls, or ceilings use resistance heating cables or
              pre-manufactured panels. NEC 424 Part IX (Sections 424.96 through 424.106) covers specific installation
              requirements for these systems.
            </p>
            <h3>Heating Cable Installation Rules</h3>
            <ul>
              <li><strong>Spacing (424.98):</strong> Heating cables must be installed with uniform spacing as specified by the manufacturer. Cables shall not be installed closer than the minimum spacing listed on the cable labeling</li>
              <li><strong>Secured in place (424.98):</strong> Cables shall be secured in place by approved means before the concrete, morite, or other finish material is applied. Do not drive nails or staples through the cable</li>
              <li><strong>GFCI protection (424.44):</strong> Heating cables and panels installed in floors, walls, or ceilings of bathrooms, kitchens, and hydromassage bathtub locations require GFCI protection</li>
              <li><strong>Identification (424.99):</strong> The presence of heating cables shall be identified on the building plans and visible signage shall be provided to warn against penetration of the surface</li>
              <li><strong>Non-heating leads (424.100):</strong> The non-heating leads of cables must be suitable for the temperature encountered and must be a minimum of 6 feet long within the room or area</li>
              <li><strong>Splices (424.100):</strong> Factory-made splices are required. Field splices of heating cables are generally not permitted unless specifically approved</li>
            </ul>
            <h3>Radiant Panel Installation</h3>
            <ul>
              <li>Panels must be listed and labeled for the application</li>
              <li>Install per manufacturer specifications for substrate type</li>
              <li>Maintain required clearances from thermal insulation per 424.98</li>
              <li>Do not install in ceiling areas covered by insulation that traps heat</li>
              <li>Floor sensors may be required for floor temperature limiting</li>
            </ul>
            <div className="bg-gradient-to-r from-red-900/30 to-orange-900/30 rounded-xl p-6 my-6">
              <p className="text-red-300 font-semibold mb-2">Important: GFCI for Radiant Heat</p>
              <p className="text-white/70">
                NEC 424.44 requires GFCI protection for electric heating cables and panels installed in specific
                locations including bathroom floors, kitchen floors, and areas with hydromassage tubs. Always verify
                local amendments, as some jurisdictions require GFCI protection for all radiant floor heating installations
                regardless of location.
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
                  href="https://apps.apple.com/us/app/ampora/id6753693522"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-white text-black font-semibold rounded-full hover:bg-white/90 transition-colors text-sm whitespace-nowrap"
                >
                  <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/></svg>
                  Download Free
                </a>
              </div>
            </div>

            <h2>Heat Pump Electrical Considerations</h2>
            <p>
              Heat pumps present unique electrical considerations because they combine a motor-driven compressor
              (covered under NEC Article 440) with electric resistance auxiliary/emergency heating elements (covered
              under NEC Article 424). Electricians must reference both articles for a complete installation.
            </p>
            <h3>Circuit Sizing for Heat Pumps</h3>
            <p>
              Heat pump nameplate data includes two critical values for circuit sizing:
            </p>
            <ul>
              <li><strong>Minimum Circuit Ampacity (MCA):</strong> The minimum conductor size required. Size conductors to carry at least this amperage. This accounts for the compressor, fan motors, and auxiliary heat</li>
              <li><strong>Maximum Overcurrent Protection (MOP or MOCP):</strong> The maximum breaker or fuse size allowed. Never exceed this value. Using a larger breaker than the MOP voids the listing</li>
            </ul>
            <div className="bg-white/5 rounded-xl p-6 my-6">
              <h4 className="text-white font-semibold mb-4">Heat Pump Circuit Sizing Example</h4>
              <table className="w-full text-left text-sm">
                <tbody className="text-white/70">
                  <tr className="border-b border-white/5">
                    <td className="py-2">Equipment</td>
                    <td className="py-2 text-right">3-ton heat pump with 10 kW aux heat</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-2">MCA (nameplate)</td>
                    <td className="py-2 text-right"><strong>44A</strong></td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-2">MOP (nameplate)</td>
                    <td className="py-2 text-right"><strong>60A</strong></td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-2">Minimum conductor</td>
                    <td className="py-2 text-right">#6 AWG copper (65A @ 60C)</td>
                  </tr>
                  <tr>
                    <td className="py-2">Breaker size</td>
                    <td className="py-2 text-right">60A maximum (per MOP)</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <h3>Outdoor Disconnect for Heat Pumps</h3>
            <p>
              An outdoor disconnect is required within sight of the heat pump condensing unit per NEC 440.14. This
              disconnect must be readily accessible and located within 50 feet of the unit. Common options include:
            </p>
            <ul>
              <li>Non-fused disconnect switch (most common for residential)</li>
              <li>Fused disconnect with proper fuse sizing per nameplate</li>
              <li>A breaker panel or sub-panel if within sight</li>
            </ul>
            <p>
              The disconnect must be rated for the voltage and current of the equipment. For a unit with a MCA of 44A,
              a 60A disconnect rated at 240V is typical.
            </p>

            <h2>Load Calculations per NEC 220.51</h2>
            <p>
              When calculating the total electrical load for a building with electric heating, NEC 220.51 addresses
              the relationship between heating and air conditioning loads. Since heating and cooling do not typically
              operate simultaneously, you use the <strong>larger of the two loads</strong> (non-coincident loads) in your
              service calculation.
            </p>
            <div className="bg-white/5 rounded-xl p-6 my-6">
              <h4 className="text-white font-semibold mb-4">Electric Heat Load Calculation Example</h4>
              <table className="w-full text-left text-sm">
                <tbody className="text-white/70">
                  <tr className="border-b border-white/5">
                    <td className="py-2">Bedroom 1: baseboard heater</td>
                    <td className="py-2 text-right">1,500W</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-2">Bedroom 2: baseboard heater</td>
                    <td className="py-2 text-right">2,000W</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-2">Bedroom 3: baseboard heater</td>
                    <td className="py-2 text-right">2,000W</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-2">Living room: baseboard heater</td>
                    <td className="py-2 text-right">2,500W</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-2">Kitchen: wall heater</td>
                    <td className="py-2 text-right">1,500W</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-2">Bathroom: wall heater</td>
                    <td className="py-2 text-right">1,000W</td>
                  </tr>
                  <tr className="border-b border-white/10">
                    <td className="py-2"><strong>Total heating load</strong></td>
                    <td className="py-2 text-right"><strong>10,500W</strong></td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-2">A/C load (comparison)</td>
                    <td className="py-2 text-right">5,000W</td>
                  </tr>
                  <tr className="border-t border-white/10">
                    <td className="py-2 text-green-400"><strong>Use larger load</strong></td>
                    <td className="py-2 text-right text-green-400"><strong>10,500W (heating)</strong></td>
                  </tr>
                </tbody>
              </table>
              <p className="text-white/70 mt-4">
                For the standard calculation method, electric heat is not subject to demand factors unless four or more
                separately controlled units are present (NEC 220.51 permits omitting the smaller of heating/cooling).
              </p>
            </div>
            <p>
              When using the optional calculation method per NEC 220.82, all heating loads are included at nameplate
              rating in the total connected load. The first 10 kVA is taken at 100%, and the remainder at 40%. This
              often results in a lower calculated load than the standard method.
            </p>

            <h2>Common Installation Mistakes</h2>
            <p>
              Even experienced electricians can make errors on heating installations. Here are the most frequent
              mistakes found during inspections and how to avoid them:
            </p>
            <div className="bg-white/5 rounded-xl p-6 my-6">
              <ul className="text-white/80 space-y-4">
                <li>
                  <strong className="text-red-400">Forgetting the 125% continuous load factor.</strong> The most common
                  mistake is sizing the circuit for the nameplate amps without applying the 1.25 multiplier. A 20A heater
                  load requires a 25A minimum circuit, which means a 30A breaker and #10 AWG wire.
                </li>
                <li>
                  <strong className="text-red-400">Single-pole thermostat on 240V circuit.</strong> A single-pole
                  thermostat only opens one leg of a 240V circuit, leaving the other leg energized at the heater. Use
                  double-pole thermostats for 240V heating circuits to disconnect both ungrounded conductors.
                </li>
                <li>
                  <strong className="text-red-400">Exceeding the heat pump MOP.</strong> Installing a larger breaker
                  than the nameplate maximum overcurrent protection is a code violation and a safety hazard. The MOP
                  accounts for the motor locked-rotor current and element ratings.
                </li>
                <li>
                  <strong className="text-red-400">Missing duct heater airflow interlock.</strong> Duct heaters must be
                  interlocked with the air handler. Energizing heating elements without airflow creates a fire hazard.
                  Verify the interlock functions during commissioning.
                </li>
                <li>
                  <strong className="text-red-400">Insufficient clearances from combustibles.</strong> Baseboard heaters
                  require specific clearances from drapes, furniture, and other combustible materials. Follow manufacturer
                  specifications, typically 12 inches in front and 6 inches below a receptacle.
                </li>
                <li>
                  <strong className="text-red-400">Missing outdoor disconnect for heat pump.</strong> Forgetting to
                  install the required within-sight disconnect at the outdoor condensing unit is a common oversight,
                  especially on replacement installations.
                </li>
                <li>
                  <strong className="text-red-400">Improper radiant cable spacing.</strong> Bunching or overlapping
                  radiant floor heating cables creates hot spots that can damage flooring and potentially cause a fire.
                  Follow the manufacturer&apos;s specified spacing exactly.
                </li>
                <li>
                  <strong className="text-red-400">Missing GFCI on bathroom radiant heat.</strong> Radiant floor
                  heating cables in bathrooms require GFCI protection per NEC 424.44. This is frequently missed on
                  renovation projects.
                </li>
              </ul>
            </div>

            <h2>Inspection Requirements</h2>
            <p>
              Electric heating installations are subject to inspection at multiple stages. Understanding what
              inspectors look for helps electricians pass inspections the first time and avoid costly return trips.
            </p>
            <h3>Rough-In Inspection</h3>
            <ul>
              <li>Correct wire gauge for the connected load with 125% continuous load factor applied</li>
              <li>Proper box sizing for connections (NEC 314.16)</li>
              <li>Thermostat wiring separated from line-voltage conductors</li>
              <li>Radiant cables installed per manufacturer spacing before concrete pour</li>
              <li>GFCI protection wiring in place for required locations</li>
              <li>Duct heater rough-in with control wiring and interlock connections</li>
            </ul>
            <h3>Final Inspection</h3>
            <ul>
              <li>Equipment listed and labeled for the installation</li>
              <li>Overcurrent protection properly sized (125% rule verified)</li>
              <li>Disconnecting means accessible and properly rated</li>
              <li>Clearances from combustible materials maintained</li>
              <li>Thermostats operational and properly controlling equipment</li>
              <li>Heat pump outdoor disconnect installed within sight of unit</li>
              <li>Duct heater airflow interlock tested and functional</li>
              <li>GFCI protection tested in required locations</li>
              <li>All connections tight and properly terminated</li>
              <li>Equipment grounding verified throughout</li>
            </ul>
            <div className="bg-gradient-to-r from-green-900/30 to-cyan-900/30 rounded-xl p-6 my-6">
              <p className="text-green-300 font-semibold mb-2">Inspection Tip</p>
              <p className="text-white/70">
                Before calling for final inspection, perform a complete functional test of all heating equipment. Verify
                each thermostat controls the correct zone, check that all safety interlocks operate properly, and confirm
                that GFCI devices trip correctly. Document your test results, as some jurisdictions now require
                commissioning reports for commercial heating installations.
              </p>
            </div>

            <h2>Key Takeaways</h2>
            <ul>
              <li>Electric heating is always a continuous load, requiring 125% sizing for conductors and overcurrent protection per NEC 424.3(B)</li>
              <li>NEC Article 424 is divided into nine parts covering everything from baseboard heaters to radiant cables to boilers</li>
              <li>Heat pumps require referencing both NEC 440 (compressor) and NEC 424 (auxiliary heat), and always use the nameplate MCA and MOP values</li>
              <li>Duct heaters require airflow interlocks, dual limit controls, and proper clearances per NEC 424.57-424.66</li>
              <li>Radiant floor heating cables require GFCI protection in bathrooms and kitchens per NEC 424.44</li>
              <li>Use the larger of heating or cooling loads in service calculations per NEC 220.51</li>
              <li>Double-pole thermostats are required for 240V heating circuits to disconnect both ungrounded conductors</li>
              <li>Always provide a disconnect within sight of the equipment, or ensure it is lockable per NEC 110.25</li>
            </ul>
          </div>

            {/* CTA Section */}
            <section className="bg-gradient-to-r from-purple-900/30 to-cyan-900/30 rounded-2xl p-8 md:p-12 my-12 border border-purple-500/20">
              <div className="text-center">
                <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-1.5 rounded-full mb-4">
                  <span className="text-sm text-white/80">&#9733; Free on the App Store</span>
                </div>
                <h2 className="text-2xl md:text-3xl font-display font-bold mb-4">
                  Your Electrical Reference, Powered by AI
                </h2>
                <p className="text-white/70 mb-8 max-w-2xl mx-auto">
                  Join thousands of electricians using Ampora for instant NEC code answers, electrical calculations, and AI-powered troubleshooting — right from your phone.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <a
                    href="https://apps.apple.com/us/app/ampora/id6753693522"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-black font-semibold rounded-full hover:bg-white/90 transition-colors"
                  >
                    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/></svg>
                    Download on App Store
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
