import { Metadata } from "next";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import { BlogPostingJsonLd, BreadcrumbJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "UPS Systems: Sizing, Installation & NEC Requirements",
  description: "Complete guide to uninterruptible power supply systems for electricians. Learn UPS topologies, sizing calculations, battery runtime, NEC Article 706 and 480 requirements, bypass switches, grounding, and installation best practices.",
  keywords: [
    "UPS system sizing",
    "uninterruptible power supply",
    "NEC Article 706",
    "NEC 480 battery requirements",
    "UPS installation guide",
    "double conversion UPS",
    "UPS bypass switch",
    "battery runtime calculation",
    "UPS grounding requirements",
    "UPS maintenance bypass",
  ],
  openGraph: {
    title: "UPS Systems: Sizing, Installation & NEC Requirements - Ampora",
    description: "Complete guide to UPS topologies, sizing, battery systems, NEC requirements, and installation best practices for electricians.",
    type: "article",
    publishedTime: "2025-06-18",
  },
};

function HeroIllustration() {
  return (
    <svg viewBox="0 0 400 200" className="w-full h-48 md:h-56" aria-label="UPS unit with battery bank and bypass switch">
      {/* UPS Main Unit */}
      <g transform="translate(130, 20)">
        <rect x="0" y="0" width="100" height="120" rx="6" fill="#1f2937" stroke="#06b6d4" strokeWidth="2"/>
        <text x="50" y="20" textAnchor="middle" fill="#06b6d4" fontSize="10" fontWeight="bold">UPS</text>
        <text x="50" y="32" textAnchor="middle" fill="#67e8f9" fontSize="7">Double Conversion</text>

        {/* Rectifier block */}
        <rect x="10" y="42" width="35" height="24" rx="3" fill="#374151" stroke="#a78bfa" strokeWidth="1.5"/>
        <text x="27" y="52" textAnchor="middle" fill="#a78bfa" fontSize="7">AC</text>
        <text x="27" y="61" textAnchor="middle" fill="#a78bfa" fontSize="6">to DC</text>

        {/* Inverter block */}
        <rect x="55" y="42" width="35" height="24" rx="3" fill="#374151" stroke="#22c55e" strokeWidth="1.5"/>
        <text x="72" y="52" textAnchor="middle" fill="#22c55e" fontSize="7">DC</text>
        <text x="72" y="61" textAnchor="middle" fill="#22c55e" fontSize="6">to AC</text>

        {/* Arrow between rectifier and inverter */}
        <line x1="45" y1="54" x2="55" y2="54" stroke="#fbbf24" strokeWidth="2" markerEnd="url(#arrowhead)"/>

        {/* Status indicators */}
        <circle cx="20" cy="85" r="4" fill="#22c55e"/>
        <text x="28" y="87" fill="#9ca3af" fontSize="6">Online</text>
        <circle cx="20" cy="98" r="4" fill="#374151" stroke="#6b7280" strokeWidth="1"/>
        <text x="28" y="100" fill="#9ca3af" fontSize="6">Battery</text>
        <circle cx="60" cy="85" r="4" fill="#374151" stroke="#6b7280" strokeWidth="1"/>
        <text x="68" y="87" fill="#9ca3af" fontSize="6">Bypass</text>
        <circle cx="60" cy="98" r="4" fill="#374151" stroke="#6b7280" strokeWidth="1"/>
        <text x="68" y="100" fill="#9ca3af" fontSize="6">Alarm</text>

        <rect x="10" y="108" width="80" height="6" rx="2" fill="#374151"/>
        <rect x="10" y="108" width="60" height="6" rx="2" fill="#06b6d4" fillOpacity="0.6"/>
      </g>

      {/* Battery Bank */}
      <g transform="translate(130, 150)">
        <rect x="0" y="0" width="100" height="40" rx="4" fill="#1f2937" stroke="#f59e0b" strokeWidth="2"/>
        <text x="50" y="14" textAnchor="middle" fill="#f59e0b" fontSize="8" fontWeight="bold">BATTERY BANK</text>
        {/* Battery cells */}
        <rect x="8" y="20" width="12" height="14" rx="1" fill="#374151" stroke="#fbbf24" strokeWidth="1"/>
        <rect x="23" y="20" width="12" height="14" rx="1" fill="#374151" stroke="#fbbf24" strokeWidth="1"/>
        <rect x="38" y="20" width="12" height="14" rx="1" fill="#374151" stroke="#fbbf24" strokeWidth="1"/>
        <rect x="53" y="20" width="12" height="14" rx="1" fill="#374151" stroke="#fbbf24" strokeWidth="1"/>
        <rect x="68" y="20" width="12" height="14" rx="1" fill="#374151" stroke="#fbbf24" strokeWidth="1"/>
        <rect x="83" y="20" width="12" height="14" rx="1" fill="#374151" stroke="#fbbf24" strokeWidth="1"/>
      </g>

      {/* Battery connection to UPS */}
      <line x1="180" y1="140" x2="180" y2="150" stroke="#f59e0b" strokeWidth="2"/>

      {/* Input power (utility) */}
      <g transform="translate(15, 45)">
        <rect x="0" y="0" width="70" height="50" rx="4" fill="#1f2937" stroke="#3b82f6" strokeWidth="2"/>
        <text x="35" y="18" textAnchor="middle" fill="#3b82f6" fontSize="9" fontWeight="bold">UTILITY</text>
        <text x="35" y="30" textAnchor="middle" fill="#60a5fa" fontSize="7">480V 3-Phase</text>
        <line x1="12" y1="40" x2="58" y2="40" stroke="#3b82f6" strokeWidth="2"/>
      </g>

      {/* Input connection */}
      <line x1="85" y1="70" x2="130" y2="70" stroke="#3b82f6" strokeWidth="2"/>

      {/* Bypass Switch */}
      <g transform="translate(15, 115)">
        <rect x="0" y="0" width="70" height="45" rx="4" fill="#1f2937" stroke="#ef4444" strokeWidth="2"/>
        <text x="35" y="16" textAnchor="middle" fill="#ef4444" fontSize="8" fontWeight="bold">BYPASS</text>
        <text x="35" y="27" textAnchor="middle" fill="#fca5a5" fontSize="7">SWITCH</text>
        {/* Switch symbol */}
        <circle cx="22" cy="37" r="4" fill="#374151" stroke="#ef4444" strokeWidth="1.5"/>
        <line x1="26" y1="37" x2="44" y2="32" stroke="#ef4444" strokeWidth="2"/>
        <circle cx="48" cy="37" r="4" fill="#374151" stroke="#ef4444" strokeWidth="1.5"/>
      </g>

      {/* Bypass connections */}
      <line x1="50" y1="95" x2="50" y2="115" stroke="#ef4444" strokeWidth="1.5" strokeDasharray="4,3"/>
      <line x1="85" y1="137" x2="130" y2="137" stroke="#ef4444" strokeWidth="1.5" strokeDasharray="4,3"/>

      {/* Output to load */}
      <g transform="translate(280, 45)">
        <rect x="0" y="0" width="80" height="95" rx="4" fill="#1f2937" stroke="#8b5cf6" strokeWidth="2"/>
        <text x="40" y="18" textAnchor="middle" fill="#8b5cf6" fontSize="9" fontWeight="bold">CRITICAL</text>
        <text x="40" y="30" textAnchor="middle" fill="#a78bfa" fontSize="8">LOADS</text>
        {/* Load indicators */}
        <rect x="10" y="40" width="25" height="18" rx="2" fill="#374151" stroke="#8b5cf6" strokeWidth="1"/>
        <text x="22" y="52" textAnchor="middle" fill="#a78bfa" fontSize="6">Server</text>
        <rect x="45" y="40" width="25" height="18" rx="2" fill="#374151" stroke="#8b5cf6" strokeWidth="1"/>
        <text x="57" y="52" textAnchor="middle" fill="#a78bfa" fontSize="6">Net</text>
        <rect x="10" y="65" width="25" height="18" rx="2" fill="#374151" stroke="#8b5cf6" strokeWidth="1"/>
        <text x="22" y="77" textAnchor="middle" fill="#a78bfa" fontSize="6">Storage</text>
        <rect x="45" y="65" width="25" height="18" rx="2" fill="#374151" stroke="#8b5cf6" strokeWidth="1"/>
        <text x="57" y="77" textAnchor="middle" fill="#a78bfa" fontSize="6">Comm</text>
      </g>

      {/* Output connection */}
      <line x1="230" y1="80" x2="280" y2="80" stroke="#8b5cf6" strokeWidth="3"/>

      {/* Power flow label */}
      <rect x="240" y="60" width="35" height="14" rx="7" fill="#22c55e" fillOpacity="0.2" stroke="#22c55e"/>
      <text x="257" y="70" textAnchor="middle" fill="#22c55e" fontSize="7" fontWeight="bold">Clean</text>

      {/* Arrow marker definition */}
      <defs>
        <marker id="arrowhead" markerWidth="6" markerHeight="4" refX="6" refY="2" orient="auto">
          <polygon points="0 0, 6 2, 0 4" fill="#fbbf24"/>
        </marker>
      </defs>
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
            { name: "UPS Systems Guide", url: "https://amporalabs.com/blog/uninterruptible-power-supply-guide" },
          ]}
        />
        <BlogPostingJsonLd
          headline="UPS Systems: Sizing, Installation & NEC Requirements"
          description="Complete guide to uninterruptible power supply systems for electricians. Learn UPS topologies, sizing, battery systems, NEC requirements, and installation best practices."
          datePublished="2025-06-18"
          url="https://amporalabs.com/blog/uninterruptible-power-supply-guide"
        />

        <article className="max-w-4xl mx-auto px-6 py-12">
          <nav className="text-sm text-white/60 mb-8">
            <Link href="/" className="hover:text-white">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/blog" className="hover:text-white">Blog</Link>
            <span className="mx-2">/</span>
            <span className="text-white">UPS Systems Guide</span>
          </nav>

          <header className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <span className="px-3 py-1 bg-cyan-600/30 text-cyan-300 text-sm font-medium rounded-full">
                Technology
              </span>
              <span className="text-white/40 text-sm">June 18, 2025</span>
              <span className="text-white/40 text-sm">14 min read</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">
              UPS Systems: Sizing, Installation & NEC Requirements
            </h1>
            <p className="text-xl text-white/70">
              Uninterruptible power supplies are the last line of defense for critical loads. Learn how to select the right topology, size systems correctly, meet NEC requirements, and avoid costly installation mistakes.
            </p>
          </header>

          <div className="mb-12 bg-gradient-to-br from-cyan-900/20 to-purple-900/20 rounded-2xl p-6 border border-white/10">
            <HeroIllustration />
          </div>

          <div className="prose prose-invert prose-lg max-w-none">
            <h2>Understanding UPS Topologies</h2>
            <p>
              Not all UPS systems are created equal. The three primary topologies offer different levels
              of protection, efficiency, and cost. Choosing the right one depends on the criticality of
              the load, acceptable transfer time, and budget.
            </p>

            <h3>Standby (Offline) UPS</h3>
            <p>
              The simplest and most affordable topology. Under normal conditions, the load is fed
              directly from utility power. The inverter and battery only engage when utility power fails
              or falls outside acceptable parameters.
            </p>
            <div className="bg-white/5 rounded-xl p-6 my-6">
              <h4 className="text-white font-semibold mb-2">Standby UPS Characteristics</h4>
              <ul className="text-white/70 space-y-1">
                <li><strong>Transfer time:</strong> 5-12 milliseconds (typical)</li>
                <li><strong>Efficiency:</strong> 95-99% (utility power passes through directly)</li>
                <li><strong>Protection:</strong> Basic battery backup and surge suppression</li>
                <li><strong>Typical sizes:</strong> 300 VA to 1,500 VA</li>
                <li><strong>Best for:</strong> Desktop computers, home office equipment, POS terminals</li>
              </ul>
            </div>
            <p>
              The transfer time gap means a brief interruption occurs when switching to battery. Most
              modern power supplies in computers can ride through this gap, but sensitive equipment like
              medical devices or precision instruments may not tolerate it.
            </p>

            <h3>Line-Interactive UPS</h3>
            <p>
              An improvement over standby topology, line-interactive UPS systems add an autotransformer
              that regulates voltage without switching to battery. This handles brownouts and overvoltages
              while preserving battery life for actual outages.
            </p>
            <div className="bg-white/5 rounded-xl p-6 my-6">
              <h4 className="text-white font-semibold mb-2">Line-Interactive Characteristics</h4>
              <ul className="text-white/70 space-y-1">
                <li><strong>Transfer time:</strong> 2-4 milliseconds</li>
                <li><strong>Efficiency:</strong> 95-98%</li>
                <li><strong>Protection:</strong> Voltage regulation, battery backup, surge suppression</li>
                <li><strong>Typical sizes:</strong> 500 VA to 5,000 VA</li>
                <li><strong>Best for:</strong> Network equipment, small servers, telecom, retail systems</li>
              </ul>
            </div>
            <p>
              The autotransformer can boost low voltage or buck high voltage by tapping different
              windings, all without engaging the battery. This makes line-interactive UPS systems
              particularly effective in areas with frequent voltage fluctuations.
            </p>

            <h3>Online Double-Conversion UPS</h3>
            <p>
              The gold standard for critical power protection. In a double-conversion UPS, incoming AC
              power is continuously converted to DC (by the rectifier), then back to AC (by the inverter).
              The load always receives power from the inverter, completely isolating it from utility
              disturbances.
            </p>
            <div className="bg-cyan-500/10 border border-cyan-500/30 rounded-xl p-6 my-6">
              <h4 className="text-cyan-400 font-semibold mb-2">Online Double-Conversion Characteristics</h4>
              <ul className="text-white/70 space-y-1">
                <li><strong>Transfer time:</strong> Zero (0 ms) -- load is always on inverter</li>
                <li><strong>Efficiency:</strong> 90-96% (double conversion losses)</li>
                <li><strong>Protection:</strong> Complete power conditioning, zero transfer time, frequency regulation</li>
                <li><strong>Typical sizes:</strong> 1 kVA to 5,000+ kVA</li>
                <li><strong>Best for:</strong> Data centers, hospitals, industrial controls, mission-critical systems</li>
              </ul>
            </div>
            <p>
              Because the battery is always connected to the DC bus, there is no transfer time when
              utility power fails. The inverter simply continues operating from battery power instead of
              rectified utility power. This zero-transfer-time operation is why double-conversion UPS
              systems are specified for critical facilities.
            </p>

            <div className="overflow-x-auto my-8">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-white/20">
                    <th className="text-left py-3 px-4 text-white/60">Feature</th>
                    <th className="text-left py-3 px-4 text-white/60">Standby</th>
                    <th className="text-left py-3 px-4 text-white/60">Line-Interactive</th>
                    <th className="text-left py-3 px-4 text-white/60">Double-Conversion</th>
                  </tr>
                </thead>
                <tbody className="text-white/80">
                  <tr className="border-b border-white/10">
                    <td className="py-3 px-4 font-semibold">Transfer Time</td>
                    <td className="py-3 px-4">5-12 ms</td>
                    <td className="py-3 px-4">2-4 ms</td>
                    <td className="py-3 px-4 text-cyan-400">0 ms</td>
                  </tr>
                  <tr className="border-b border-white/10">
                    <td className="py-3 px-4 font-semibold">Voltage Regulation</td>
                    <td className="py-3 px-4">None</td>
                    <td className="py-3 px-4">Autotransformer</td>
                    <td className="py-3 px-4 text-cyan-400">Continuous</td>
                  </tr>
                  <tr className="border-b border-white/10">
                    <td className="py-3 px-4 font-semibold">Frequency Regulation</td>
                    <td className="py-3 px-4">None</td>
                    <td className="py-3 px-4">None</td>
                    <td className="py-3 px-4 text-cyan-400">Yes</td>
                  </tr>
                  <tr className="border-b border-white/10">
                    <td className="py-3 px-4 font-semibold">Efficiency</td>
                    <td className="py-3 px-4 text-green-400">95-99%</td>
                    <td className="py-3 px-4">95-98%</td>
                    <td className="py-3 px-4">90-96%</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-semibold">Relative Cost</td>
                    <td className="py-3 px-4 text-green-400">Low</td>
                    <td className="py-3 px-4">Medium</td>
                    <td className="py-3 px-4">High</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2>Sizing UPS Systems: VA vs. Watts</h2>
            <p>
              One of the most common mistakes electricians encounter is confusing VA (volt-amperes) with
              watts. UPS systems are rated in VA, but the actual usable power in watts depends on the
              power factor of the load.
            </p>

            <div className="bg-gradient-to-r from-purple-900/30 to-blue-900/30 rounded-xl p-6 my-6">
              <p className="text-white font-mono mb-2">Watts = VA x Power Factor (PF)</p>
              <p className="text-white/70 text-sm">Most modern IT equipment has a PF of 0.9-0.99. Older equipment may be 0.6-0.7.</p>
            </div>

            <h3>Step-by-Step Sizing Process</h3>
            <ol>
              <li><strong>Inventory all loads:</strong> List every device the UPS will power, including its nameplate VA or wattage rating</li>
              <li><strong>Calculate total load:</strong> Sum all device ratings. Use actual measured draw if possible, not nameplate maximums</li>
              <li><strong>Apply power factor:</strong> If loads are rated in watts only, divide by 0.8 (typical UPS power factor) to get VA</li>
              <li><strong>Add growth margin:</strong> Add 20-25% for future load growth</li>
              <li><strong>Size the UPS:</strong> Select a UPS with a VA rating that keeps the load at or below 80% of capacity</li>
            </ol>

            <div className="bg-cyan-500/10 border border-cyan-500/30 rounded-xl p-6 my-6">
              <h4 className="text-cyan-400 font-semibold mb-2">Sizing Example</h4>
              <ul className="text-white/70 space-y-1">
                <li>Server rack measured draw: 4,200 watts</li>
                <li>Power factor of load: 0.95</li>
                <li>Load in VA: 4,200 / 0.95 = <strong>4,421 VA</strong></li>
                <li>With 25% growth: 4,421 x 1.25 = <strong>5,526 VA</strong></li>
                <li>80% loading rule: 5,526 / 0.80 = <strong>6,908 VA</strong></li>
                <li>Recommended UPS: <strong>8 kVA or 10 kVA unit</strong></li>
              </ul>
            </div>

            <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-6 my-6">
              <h4 className="text-red-400 font-semibold mb-2">Warning: Inrush Current</h4>
              <p className="text-white/70">
                Some loads draw significantly more current during startup than during steady-state
                operation. Motors, transformers, and capacitive loads can draw 5-10x their running
                current at startup. The UPS must handle this inrush without tripping or transferring
                to bypass. Factor inrush into your sizing calculations, or sequence load startup.
              </p>
            </div>

            <h2>Battery Types and Runtime Calculations</h2>
            <p>
              The battery system is the heart of a UPS. Battery selection affects runtime, lifespan,
              maintenance requirements, physical footprint, and total cost of ownership.
            </p>

            <h3>VRLA (Valve-Regulated Lead-Acid)</h3>
            <div className="bg-white/5 rounded-xl p-6 my-6">
              <ul className="text-white/70 space-y-2">
                <li><strong>Lifespan:</strong> 3-5 years (standard) or 8-10 years (high-rate, extended life)</li>
                <li><strong>Maintenance:</strong> Sealed design, no watering required. Still requires periodic testing</li>
                <li><strong>Temperature sensitivity:</strong> Every 15 degrees F above 77 degrees F reduces life by 50%</li>
                <li><strong>Cost:</strong> Lower upfront cost per kWh</li>
                <li><strong>Weight/footprint:</strong> Heavier and larger than lithium-ion alternatives</li>
                <li><strong>Recycling:</strong> 99% recyclable, well-established recycling infrastructure</li>
              </ul>
            </div>

            <h3>Lithium-Ion (Li-Ion)</h3>
            <div className="bg-white/5 rounded-xl p-6 my-6">
              <ul className="text-white/70 space-y-2">
                <li><strong>Lifespan:</strong> 8-15 years depending on chemistry and cycling</li>
                <li><strong>Maintenance:</strong> Integrated battery management system (BMS) provides cell-level monitoring</li>
                <li><strong>Temperature tolerance:</strong> Operates efficiently up to 104 degrees F</li>
                <li><strong>Cost:</strong> Higher upfront but lower total cost of ownership over life</li>
                <li><strong>Weight/footprint:</strong> 50-70% smaller and lighter than equivalent VRLA</li>
                <li><strong>Safety:</strong> Requires thermal management and fire suppression considerations</li>
              </ul>
            </div>

            <h3>Nickel-Cadmium (NiCd)</h3>
            <div className="bg-white/5 rounded-xl p-6 my-6">
              <ul className="text-white/70 space-y-2">
                <li><strong>Lifespan:</strong> 15-20+ years</li>
                <li><strong>Maintenance:</strong> Flooded cells require watering and equalization charges</li>
                <li><strong>Temperature tolerance:</strong> Excellent performance in extreme temperatures</li>
                <li><strong>Cost:</strong> Highest upfront cost</li>
                <li><strong>Best for:</strong> Industrial environments, extreme temperature applications, utility substations</li>
              </ul>
            </div>

            <h3>Runtime Calculation</h3>
            <p>
              Determining how long a battery system will support the load requires understanding the
              relationship between battery capacity, discharge rate, and efficiency.
            </p>

            <div className="bg-gradient-to-r from-cyan-900/30 to-purple-900/30 rounded-xl p-6 my-6">
              <p className="text-white font-mono mb-3">Runtime (minutes) = (Battery Capacity in Wh x Efficiency) / Load in Watts x 60</p>
              <div className="text-white/70 text-sm space-y-1">
                <p>Typical UPS system efficiency on battery: 0.85-0.92</p>
                <p>VRLA batteries: Use manufacturer discharge tables for accurate runtime at specific loads</p>
                <p>Battery capacity decreases as discharge rate increases (Peukert effect for lead-acid)</p>
              </div>
            </div>

            <div className="bg-cyan-500/10 border border-cyan-500/30 rounded-xl p-6 my-6">
              <h4 className="text-cyan-400 font-semibold mb-2">Runtime Example</h4>
              <ul className="text-white/70 space-y-1">
                <li>UPS load: 8,000 watts</li>
                <li>Battery bank: 20 kWh capacity</li>
                <li>System efficiency: 0.90</li>
                <li>Runtime = (20,000 Wh x 0.90) / 8,000 W x 60 = <strong>135 minutes</strong></li>
                <li>Note: Actual runtime depends on battery age, temperature, and discharge rate</li>
              </ul>
            </div>

            <h2>NEC Article 706: Energy Storage Systems</h2>
            <p>
              NEC Article 706, introduced in the 2020 NEC cycle and expanded in the 2023 edition, covers
              energy storage systems (ESS) including UPS battery installations. This article applies to
              all permanently installed energy storage systems operating over 50 volts.
            </p>

            <div className="bg-cyan-500/10 border border-cyan-500/30 rounded-xl p-6 my-6">
              <h4 className="text-cyan-400 font-semibold mb-2">Key Article 706 Requirements</h4>
              <ul className="text-white/70 space-y-2">
                <li><strong>706.7 -- Listing:</strong> ESS equipment must be listed for the application. UPS systems and associated battery cabinets must carry appropriate UL listings</li>
                <li><strong>706.10 -- Directory:</strong> A directory showing ESS location and identifying the disconnect must be posted at service equipment</li>
                <li><strong>706.15 -- Disconnecting Means:</strong> A disconnecting means must be provided for the ESS that is lockable in the open position</li>
                <li><strong>706.20 -- Circuit Sizing:</strong> Circuit conductors must be sized at minimum 125% of the maximum current from the ESS</li>
                <li><strong>706.30 -- Overcurrent Protection:</strong> Each ungrounded conductor must have overcurrent protection rated to handle both charging and discharging currents</li>
                <li><strong>706.31 -- Arc-Flash Hazard:</strong> ESS exceeding threshold values must have arc-flash warning labels per NFPA 70E</li>
              </ul>
            </div>

            <h3>706.40 -- Signs and Labels</h3>
            <p>
              Permanent labels are required at the ESS disconnecting means and at the main service
              disconnect. Labels must include the maximum stored energy (kWh), maximum output voltage,
              and maximum output current.
            </p>

            <h2>NEC Article 480: Storage Batteries</h2>
            <p>
              While Article 706 covers the broader ESS installation, Article 480 specifically addresses
              storage battery requirements that apply directly to UPS battery systems.
            </p>

            <div className="bg-amber-500/10 border border-amber-500/30 rounded-xl p-6 my-6">
              <h4 className="text-amber-400 font-semibold mb-2">Key Article 480 Requirements</h4>
              <ul className="text-white/70 space-y-2">
                <li><strong>480.3 -- Wiring and Equipment:</strong> Must be suitable for expected temperature, battery gas exposure, and electrolyte</li>
                <li><strong>480.5 -- Disconnecting Means:</strong> A disconnecting means must be provided within sight of the battery and rated for the circuit voltage and current</li>
                <li><strong>480.6 -- Overcurrent Protection:</strong> Overcurrent protection for battery conductors is required, listed for the application</li>
                <li><strong>480.7 -- Insulation:</strong> Battery racks and trays must be treated to resist electrolyte deterioration. Conductive cases must be insulated from conductive racks</li>
                <li><strong>480.9 -- Battery Locations:</strong> Batteries must be accessible for maintenance. Adequate ventilation must be provided for gas dissipation</li>
                <li><strong>480.10 -- Battery Enclosures:</strong> Battery enclosures must be arranged for adequate ventilation and maintenance access</li>
              </ul>
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

            <h2>Bypass Switch Requirements</h2>
            <p>
              Bypass switches allow the UPS to be taken out of service for maintenance without shutting
              down critical loads. There are two types of bypass: static (automatic) and maintenance
              (manual).
            </p>

            <h3>Static Bypass</h3>
            <p>
              The static bypass is built into the UPS and uses solid-state switching (thyristors or SCRs)
              to automatically transfer the load to utility power if the UPS experiences an internal fault
              or overload. Transfer happens in less than 4 milliseconds, fast enough that most loads
              never notice the switch.
            </p>
            <div className="bg-white/5 rounded-xl p-6 my-6">
              <h4 className="text-white font-semibold mb-2">Static Bypass Triggers</h4>
              <ul className="text-white/70 space-y-1">
                <li>UPS internal fault or component failure</li>
                <li>Output overload exceeding UPS capacity</li>
                <li>UPS overtemperature condition</li>
                <li>Manual operator command (to bypass for testing)</li>
                <li>End of battery discharge with no generator available</li>
              </ul>
            </div>

            <h3>Maintenance Bypass</h3>
            <p>
              The maintenance bypass is an external manual switch (sometimes called a wrap-around bypass
              or make-before-break bypass) that provides a continuous power path around the entire UPS.
              This allows the UPS to be fully de-energized and isolated for service.
            </p>
            <div className="bg-amber-500/10 border border-amber-500/30 rounded-xl p-6 my-6">
              <h4 className="text-amber-400 font-semibold mb-2">Maintenance Bypass Requirements</h4>
              <ul className="text-white/70 space-y-1">
                <li>Must provide make-before-break transfer (no interruption to the load)</li>
                <li>Rated for full load current</li>
                <li>Must include means to isolate the UPS input, output, and battery connections</li>
                <li>Should be key-interlocked or procedurally controlled to prevent backfeed</li>
                <li>NEC 480.5 requires disconnecting means within sight of the battery</li>
              </ul>
            </div>

            <h2>Input/Output Wiring</h2>
            <p>
              Proper wiring of UPS systems requires attention to conductor sizing, separation of circuits,
              and labeling. The input and output of a UPS are treated as separate electrical sources.
            </p>

            <h3>Input Wiring</h3>
            <div className="bg-white/5 rounded-xl p-6 my-6">
              <ul className="text-white/70 space-y-2">
                <li><strong>Conductor sizing:</strong> Size input conductors for 125% of UPS input current rating per NEC 210.19 and 215.2</li>
                <li><strong>Overcurrent protection:</strong> Input OCPD must be coordinated with UPS internal protection</li>
                <li><strong>Dual input:</strong> Many larger UPS units have separate rectifier and bypass inputs to allow different sources</li>
                <li><strong>Harmonic considerations:</strong> UPS rectifiers generate harmonics. Use K-rated transformers or oversized neutrals where applicable</li>
                <li><strong>Input power factor:</strong> Modern UPS units with active front-end rectifiers achieve 0.99 PF. Older units may require PF correction</li>
              </ul>
            </div>

            <h3>Output Wiring</h3>
            <div className="bg-white/5 rounded-xl p-6 my-6">
              <ul className="text-white/70 space-y-2">
                <li><strong>Conductor sizing:</strong> Size output conductors for 125% of UPS output current rating</li>
                <li><strong>Separately derived system:</strong> If the UPS output is a separately derived system (no direct neutral connection to input), it must be grounded per NEC 250.30</li>
                <li><strong>Output panelboard:</strong> Install a dedicated panelboard for UPS-fed circuits, clearly labeled</li>
                <li><strong>Circuit identification:</strong> All UPS-powered circuits and outlets must be marked to distinguish them from non-UPS circuits</li>
                <li><strong>Receptacle color:</strong> Orange receptacles are commonly used (though not NEC-required) to identify UPS/emergency power circuits</li>
              </ul>
            </div>

            <h2>Grounding Considerations</h2>
            <p>
              Grounding a UPS system correctly is critical for safety, equipment protection, and proper
              operation of ground-fault detection. The grounding approach depends on whether the UPS
              creates a separately derived system.
            </p>

            <div className="grid md:grid-cols-2 gap-4 my-6">
              <div className="bg-white/5 rounded-xl p-4">
                <h4 className="text-white font-semibold">Separately Derived System</h4>
                <ul className="text-white/60 text-sm mt-2 space-y-1">
                  <li>UPS has an internal isolation transformer</li>
                  <li>Neutral is not passed through from input</li>
                  <li>Must establish new grounding electrode conductor per NEC 250.30</li>
                  <li>Bonding jumper at UPS output</li>
                  <li>Ground-fault protection must be reconfigured</li>
                </ul>
              </div>
              <div className="bg-white/5 rounded-xl p-4">
                <h4 className="text-white font-semibold">Non-Separately Derived System</h4>
                <ul className="text-white/60 text-sm mt-2 space-y-1">
                  <li>UPS passes neutral through without interruption</li>
                  <li>Grounding system remains per existing building ground</li>
                  <li>Equipment grounding conductor must be continuous</li>
                  <li>Simpler installation, fewer grounding requirements</li>
                  <li>Upstream ground-fault protection remains effective</li>
                </ul>
              </div>
            </div>

            <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-6 my-6">
              <h4 className="text-red-400 font-semibold mb-2">Critical: Neutral-to-Ground Bond</h4>
              <p className="text-white/70">
                In a separately derived system, the neutral must be bonded to ground at only one point.
                If the UPS has an internal isolation transformer, the N-G bond is made at the UPS output.
                A second bond (such as at a downstream panel) creates a parallel path for current on
                the grounding conductor, which can cause nuisance tripping and equipment damage. Verify
                with a megger or N-G voltage test after installation.
              </p>
            </div>

            <h2>Ventilation for Battery Rooms</h2>
            <p>
              Battery installations, particularly VRLA and flooded lead-acid, produce hydrogen gas
              during charging. While VRLA batteries produce less hydrogen than flooded types, proper
              ventilation is still required to prevent gas accumulation.
            </p>

            <div className="bg-amber-500/10 border border-amber-500/30 rounded-xl p-6 my-6">
              <h4 className="text-amber-400 font-semibold mb-2">Ventilation Requirements</h4>
              <ul className="text-white/70 space-y-2">
                <li><strong>NEC 480.9(A):</strong> Batteries must be located in an area with adequate ventilation to prevent gas accumulation</li>
                <li><strong>NFPA 1 and IFC:</strong> Dedicated battery rooms exceeding certain thresholds require mechanical ventilation, hydrogen detection, and exhaust systems</li>
                <li><strong>Hydrogen threshold:</strong> Ventilation must maintain hydrogen concentration below 1% by volume (25% of the lower explosive limit of 4%)</li>
                <li><strong>Air changes:</strong> Typically calculated to provide sufficient air exchange based on battery string count, charging rate, and room volume</li>
                <li><strong>Exhaust location:</strong> Hydrogen is lighter than air, so exhaust vents must be at the highest point in the room</li>
                <li><strong>Lithium-ion considerations:</strong> Li-ion installations may require thermal runaway exhaust systems and gas detection per NFPA 855</li>
              </ul>
            </div>

            <h3>Temperature Control</h3>
            <p>
              Battery room temperature directly impacts battery life and capacity. VRLA batteries are
              rated at 77 degrees F (25 degrees C). For every 15 degrees F above this, battery life is
              reduced by approximately 50%. Maintain the battery room at 68-77 degrees F for optimal
              performance and longevity.
            </p>

            <div className="bg-white/5 rounded-xl p-6 my-6">
              <h4 className="text-white font-semibold mb-2">Environmental Controls Checklist</h4>
              <ul className="text-white/70 space-y-1">
                <li>Dedicated HVAC system or zone for battery room</li>
                <li>Temperature monitoring with high/low alarms</li>
                <li>Hydrogen detection sensors with alarm integration</li>
                <li>Continuous ventilation fan with airflow monitoring</li>
                <li>Emergency exhaust activation on hydrogen detection</li>
                <li>Eye wash station and spill containment (for flooded batteries)</li>
              </ul>
            </div>

            <h2>Maintenance Bypass Procedures</h2>
            <p>
              Transferring a UPS to maintenance bypass is a critical operation that must be performed
              correctly to avoid load interruption. The exact procedure varies by manufacturer, but the
              general sequence follows a standard pattern.
            </p>

            <div className="bg-white/5 rounded-xl p-6 my-6">
              <h4 className="text-white font-semibold mb-3">Standard Transfer-to-Bypass Procedure</h4>
              <ol className="text-white/70 space-y-2">
                <li><strong>1. Verify bypass source:</strong> Confirm utility power is stable and within acceptable voltage and frequency parameters</li>
                <li><strong>2. Transfer to static bypass:</strong> Use the UPS control panel to transfer the load from inverter to static bypass. Load is now on utility through the UPS static switch</li>
                <li><strong>3. Close maintenance bypass:</strong> Engage the external maintenance bypass switch. This creates a parallel path momentarily</li>
                <li><strong>4. Open UPS output breaker:</strong> Disconnect the UPS output. Load is now fed through the maintenance bypass only</li>
                <li><strong>5. Open UPS input breaker:</strong> Disconnect utility from the UPS rectifier</li>
                <li><strong>6. Open battery breaker:</strong> Isolate the battery bank from the UPS DC bus</li>
                <li><strong>7. Verify isolation:</strong> Use a voltmeter to confirm the UPS is fully de-energized before performing maintenance</li>
              </ol>
            </div>

            <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-6 my-6">
              <h4 className="text-red-400 font-semibold mb-2">Warning: Load Is Unprotected on Bypass</h4>
              <p className="text-white/70">
                While the UPS is on maintenance bypass, the load receives raw utility power with no
                conditioning, no battery backup, and no surge protection. Notify facility management
                and coordinate the maintenance window. Have a plan for immediate load transfer or
                shutdown if utility power becomes unstable during maintenance.
              </p>
            </div>

            <h2>Monitoring and Management</h2>
            <p>
              Modern UPS systems include extensive monitoring and communication capabilities. Proper
              configuration of monitoring ensures rapid response to power events and proactive
              maintenance.
            </p>

            <h3>SNMP and Network Monitoring</h3>
            <div className="bg-white/5 rounded-xl p-6 my-6">
              <ul className="text-white/70 space-y-2">
                <li><strong>SNMP cards:</strong> Network management cards enable remote monitoring via SNMP v1/v2c/v3 protocols</li>
                <li><strong>Environmental sensors:</strong> External temperature, humidity, and contact-closure sensors connect to the network card</li>
                <li><strong>Email/SMS alerts:</strong> Configure notifications for power events, battery warnings, and overload conditions</li>
                <li><strong>Modbus/BACnet:</strong> Building management system integration for centralized facility monitoring</li>
                <li><strong>Cloud monitoring:</strong> Many manufacturers offer cloud-based dashboards for fleet-wide UPS management</li>
              </ul>
            </div>

            <h3>Key Metrics to Monitor</h3>
            <div className="grid md:grid-cols-2 gap-4 my-6">
              <div className="bg-white/5 rounded-xl p-4">
                <h4 className="text-white font-semibold">Real-Time Monitoring</h4>
                <ul className="text-white/60 text-sm mt-2 space-y-1">
                  <li>Input voltage, current, and frequency</li>
                  <li>Output voltage, current, and frequency</li>
                  <li>Load percentage (VA and watts)</li>
                  <li>Battery voltage, current, and temperature</li>
                  <li>Estimated runtime remaining</li>
                  <li>UPS operating mode</li>
                </ul>
              </div>
              <div className="bg-white/5 rounded-xl p-4">
                <h4 className="text-white font-semibold">Trending and Alerts</h4>
                <ul className="text-white/60 text-sm mt-2 space-y-1">
                  <li>Battery impedance trending (early failure detection)</li>
                  <li>Load growth over time</li>
                  <li>Power event frequency and duration</li>
                  <li>Capacitor age and replacement scheduling</li>
                  <li>Fan runtime and bearing temperature</li>
                  <li>Efficiency tracking (input vs. output power)</li>
                </ul>
              </div>
            </div>

            <h3>Automatic Shutdown and Load Shedding</h3>
            <p>
              Configure UPS shutdown agents on critical servers to perform graceful OS shutdowns when
              battery runtime reaches a low threshold. For multi-server environments, configure load
              shedding to shut down non-essential systems first, extending runtime for the most critical
              applications.
            </p>

            <h2>Common Installation Mistakes</h2>
            <p>
              After years of UPS installations, certain errors appear repeatedly. Awareness of these
              common pitfalls can save time, money, and embarrassment on job sites.
            </p>

            <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-6 my-6">
              <h4 className="text-red-400 font-semibold mb-3">Top Installation Mistakes</h4>
              <ul className="text-white/70 space-y-3">
                <li><strong>Undersizing the UPS:</strong> Using nameplate ratings instead of measured loads, forgetting inrush current, or failing to account for growth. Always measure actual loads with a power meter before sizing</li>
                <li><strong>Incorrect grounding:</strong> Failing to properly bond a separately derived system, creating multiple N-G bonds, or not establishing a new grounding electrode conductor when required by NEC 250.30</li>
                <li><strong>Poor battery room ventilation:</strong> Not providing adequate hydrogen gas exhaust, failing to install gas detection, or placing batteries in enclosed spaces without airflow</li>
                <li><strong>Skipping the maintenance bypass:</strong> Installing a UPS without an external maintenance bypass switch. This forces a load outage for any UPS service work</li>
                <li><strong>Wrong battery environment:</strong> Placing batteries in hot mechanical rooms, near heat sources, or in uncontrolled environments. High temperatures drastically shorten battery life</li>
                <li><strong>Ignoring input harmonics:</strong> Not accounting for UPS rectifier harmonics on the upstream electrical system. This can cause overheating of neutral conductors and transformers</li>
                <li><strong>No load bank testing:</strong> Commissioning a UPS without performing a full load bank test. This leaves you unsure whether the system will perform as expected during an actual outage</li>
                <li><strong>Mixing battery strings:</strong> Combining old and new batteries in the same string, or mixing battery brands and models. Weaker batteries drag down the entire string</li>
                <li><strong>Forgetting labeling:</strong> Not marking UPS-powered panels, receptacles, and circuits. First responders and other electricians must be able to identify UPS-backed circuits quickly</li>
                <li><strong>Inadequate cable routing:</strong> Running input and output cables in the same raceway as normal power circuits without proper separation or identification</li>
              </ul>
            </div>

            <h2>UPS for Data Centers vs. Commercial Facilities</h2>
            <p>
              While the fundamental UPS technologies are the same, the design approach differs
              significantly between data center and general commercial applications.
            </p>

            <div className="grid md:grid-cols-2 gap-6 my-6">
              <div className="bg-cyan-900/30 rounded-xl p-6">
                <h4 className="text-cyan-400 font-semibold mb-3">Data Center UPS</h4>
                <ul className="text-white/70 space-y-2 text-sm">
                  <li><strong>Topology:</strong> Online double-conversion, always</li>
                  <li><strong>Size:</strong> 100 kVA to 2,000+ kVA per module</li>
                  <li><strong>Redundancy:</strong> N+1 minimum, 2N for Tier III/IV</li>
                  <li><strong>Runtime:</strong> 5-15 minutes (generator-backed)</li>
                  <li><strong>Battery type:</strong> VRLA or lithium-ion in dedicated rooms</li>
                  <li><strong>Paralleling:</strong> Modular scalable architecture</li>
                  <li><strong>Monitoring:</strong> Full DCIM integration, SNMP, Modbus</li>
                  <li><strong>Maintenance:</strong> Hot-swappable modules, concurrent maintainability</li>
                  <li><strong>Efficiency focus:</strong> Eco-mode operation for 98-99% efficiency</li>
                </ul>
              </div>
              <div className="bg-purple-900/30 rounded-xl p-6">
                <h4 className="text-purple-400 font-semibold mb-3">Commercial/Industrial UPS</h4>
                <ul className="text-white/70 space-y-2 text-sm">
                  <li><strong>Topology:</strong> Line-interactive or double-conversion</li>
                  <li><strong>Size:</strong> 1 kVA to 200 kVA typical</li>
                  <li><strong>Redundancy:</strong> Single unit, N configuration common</li>
                  <li><strong>Runtime:</strong> 15-60+ minutes (may not have generator)</li>
                  <li><strong>Battery type:</strong> Internal VRLA batteries</li>
                  <li><strong>Paralleling:</strong> Standalone or simple parallel for redundancy</li>
                  <li><strong>Monitoring:</strong> Basic SNMP or dry contact alarms</li>
                  <li><strong>Maintenance:</strong> Scheduled downtime for service</li>
                  <li><strong>Applications:</strong> POS systems, network closets, medical equipment</li>
                </ul>
              </div>
            </div>

            <h3>Scalable Modular UPS Architecture</h3>
            <p>
              Modern data center UPS systems use a modular approach where individual power modules
              (typically 25-100 kVA each) slide into a common frame. This provides several advantages
              over traditional monolithic UPS designs.
            </p>
            <div className="bg-white/5 rounded-xl p-6 my-6">
              <ul className="text-white/70 space-y-2">
                <li><strong>Pay-as-you-grow:</strong> Start with fewer modules and add capacity as load increases</li>
                <li><strong>Hot-swappable:</strong> Failed modules can be replaced without transferring to bypass</li>
                <li><strong>N+1 within the frame:</strong> Built-in redundancy at the module level</li>
                <li><strong>Improved efficiency:</strong> Modules can be powered down at low loads for better efficiency</li>
                <li><strong>Reduced mean time to repair:</strong> Module replacement takes minutes, not hours</li>
              </ul>
            </div>

            <h2>Commissioning and Testing</h2>
            <p>
              Proper commissioning ensures the UPS system performs as designed. Never rely solely on
              factory testing -- field conditions, wiring, and integration with the building electrical
              system must all be verified.
            </p>

            <div className="bg-white/5 rounded-xl p-6 my-6">
              <h4 className="text-white font-semibold mb-3">Commissioning Checklist</h4>
              <ul className="text-white/70 space-y-2">
                <li><strong>Visual inspection:</strong> Verify all wiring connections, torque specifications, and cable routing</li>
                <li><strong>Grounding verification:</strong> Test all ground connections and verify N-G bond location</li>
                <li><strong>Battery string testing:</strong> Measure individual cell voltages and impedance</li>
                <li><strong>No-load test:</strong> Power on UPS with no load to verify basic operation and alarms</li>
                <li><strong>Load bank test:</strong> Apply full rated load and verify voltage, frequency, and current stability</li>
                <li><strong>Transfer testing:</strong> Simulate utility failure and verify seamless transfer to battery. Test return to normal</li>
                <li><strong>Bypass testing:</strong> Transfer to static and maintenance bypass, verify load continuity</li>
                <li><strong>Overload test:</strong> Verify UPS transfers to bypass at the specified overload threshold</li>
                <li><strong>Runtime test:</strong> Discharge batteries under load to verify actual runtime meets design</li>
                <li><strong>Alarm verification:</strong> Test all alarm conditions and verify notification delivery</li>
                <li><strong>Integration test:</strong> Confirm SNMP monitoring, shutdown agents, and BMS integration</li>
              </ul>
            </div>

            <div className="bg-cyan-500/10 border border-cyan-500/30 rounded-xl p-6 my-6">
              <h4 className="text-cyan-400 font-semibold mb-2">Ongoing Maintenance Schedule</h4>
              <ul className="text-white/70 space-y-1">
                <li><strong>Monthly:</strong> Visual inspection, check indicator lights, verify ambient temperature</li>
                <li><strong>Quarterly:</strong> Battery voltage checks, clean air filters, review event logs</li>
                <li><strong>Semi-annually:</strong> Full preventive maintenance including capacitor inspection, connection torque checks, and thermal imaging</li>
                <li><strong>Annually:</strong> Battery impedance/conductance testing, full load bank test, firmware updates</li>
                <li><strong>Every 3-5 years:</strong> Battery replacement (VRLA), capacitor replacement, fan replacement</li>
              </ul>
            </div>
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

            {/* Related Articles */}
            <section className="mt-12">
              <h2 className="text-2xl font-display font-bold mb-6">Related Articles</h2>
              <div className="grid md:grid-cols-2 gap-4">
                <Link href="/blog/data-center-electrical-design" className="bg-white/5 hover:bg-white/10 rounded-xl p-6 transition-colors">
                  <span className="text-green-400 text-sm">Installation</span>
                  <h3 className="font-semibold mt-2">Data Center Electrical Design</h3>
                </Link>
                <Link href="/blog/emergency-standby-power-systems" className="bg-white/5 hover:bg-white/10 rounded-xl p-6 transition-colors">
                  <span className="text-red-400 text-sm">NEC Code</span>
                  <h3 className="font-semibold mt-2">Emergency & Standby Power Systems</h3>
                </Link>
                <Link href="/blog/electrical-grounding-vs-bonding" className="bg-white/5 hover:bg-white/10 rounded-xl p-6 transition-colors">
                  <span className="text-purple-400 text-sm">NEC Code</span>
                  <h3 className="font-semibold mt-2">Electrical Grounding vs. Bonding</h3>
                </Link>
                <Link href="/blog/surge-arrester-vs-tvss" className="bg-white/5 hover:bg-white/10 rounded-xl p-6 transition-colors">
                  <span className="text-cyan-400 text-sm">Technology</span>
                  <h3 className="font-semibold mt-2">Surge Arrester vs. TVSS</h3>
                </Link>
              </div>
            </section>
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
