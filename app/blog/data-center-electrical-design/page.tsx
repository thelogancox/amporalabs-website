import { Metadata } from "next";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import { BreadcrumbJsonLd, BlogPostingJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Data Center Electrical Design: Power Distribution & Redundancy Guide",
  description: "Comprehensive guide to data center electrical design. Learn about power distribution architectures, N+1 and 2N redundancy configurations, UPS systems, generator integration, and critical power infrastructure for mission-critical facilities.",
  keywords: [
    "data center electrical design",
    "data center power distribution",
    "N+1 redundancy",
    "2N redundancy",
    "data center UPS",
    "critical power systems",
    "data center generator",
    "Tier 1 Tier 2 Tier 3 Tier 4 data center",
    "PDU power distribution unit",
    "data center electrical infrastructure",
    "mission critical power",
    "concurrent maintainability",
    "fault tolerance data center",
    "automatic transfer switch ATS",
    "data center backup power",
    "static transfer switch STS"
  ],
  alternates: {
    canonical: "https://amporalabs.com/blog/data-center-electrical-design",
  },
  openGraph: {
    title: "Data Center Electrical Design: Power Distribution & Redundancy - Ampora",
    description: "Complete guide to data center power distribution, redundancy configurations, UPS systems, and generator integration.",
    url: "https://amporalabs.com/blog/data-center-electrical-design",
    type: "article",
  },
};

function HeroIllustration() {
  return (
    <svg viewBox="0 0 400 180" className="w-full h-40 md:h-48" aria-label="Data center 2N redundancy power architecture">
      {/* Background Grid */}
      <rect x="10" y="10" width="380" height="160" rx="4" fill="#0f172a" stroke="#334155" strokeWidth="1"/>

      {/* Utility A */}
      <g transform="translate(30, 25)">
        <rect x="0" y="0" width="50" height="30" rx="3" fill="#1e3a5f" stroke="#3b82f6" strokeWidth="2"/>
        <text x="25" y="15" textAnchor="middle" fill="#3b82f6" fontSize="8" fontWeight="bold">UTILITY</text>
        <text x="25" y="24" textAnchor="middle" fill="#60a5fa" fontSize="7">A</text>
      </g>

      {/* Utility B */}
      <g transform="translate(320, 25)">
        <rect x="0" y="0" width="50" height="30" rx="3" fill="#1e3a5f" stroke="#3b82f6" strokeWidth="2"/>
        <text x="25" y="15" textAnchor="middle" fill="#3b82f6" fontSize="8" fontWeight="bold">UTILITY</text>
        <text x="25" y="24" textAnchor="middle" fill="#60a5fa" fontSize="7">B</text>
      </g>

      {/* Generator A */}
      <g transform="translate(30, 65)">
        <rect x="0" y="0" width="50" height="25" rx="3" fill="#1e3a5f" stroke="#22c55e" strokeWidth="2"/>
        <text x="25" y="15" textAnchor="middle" fill="#22c55e" fontSize="7" fontWeight="bold">GEN A</text>
      </g>

      {/* Generator B */}
      <g transform="translate(320, 65)">
        <rect x="0" y="0" width="50" height="25" rx="3" fill="#1e3a5f" stroke="#22c55e" strokeWidth="2"/>
        <text x="25" y="15" textAnchor="middle" fill="#22c55e" fontSize="7" fontWeight="bold">GEN B</text>
      </g>

      {/* ATS A */}
      <g transform="translate(90, 45)">
        <rect x="0" y="0" width="35" height="25" rx="2" fill="#374151" stroke="#f59e0b" strokeWidth="1.5"/>
        <text x="17" y="15" textAnchor="middle" fill="#f59e0b" fontSize="7" fontWeight="bold">ATS</text>
      </g>

      {/* ATS B */}
      <g transform="translate(275, 45)">
        <rect x="0" y="0" width="35" height="25" rx="2" fill="#374151" stroke="#f59e0b" strokeWidth="1.5"/>
        <text x="17" y="15" textAnchor="middle" fill="#f59e0b" fontSize="7" fontWeight="bold">ATS</text>
      </g>

      {/* UPS A */}
      <g transform="translate(90, 90)">
        <rect x="0" y="0" width="45" height="30" rx="3" fill="#1e3a5f" stroke="#8b5cf6" strokeWidth="2"/>
        <text x="22" y="15" textAnchor="middle" fill="#8b5cf6" fontSize="8" fontWeight="bold">UPS A</text>
        <text x="22" y="24" textAnchor="middle" fill="#a78bfa" fontSize="6">500 kVA</text>
      </g>

      {/* UPS B */}
      <g transform="translate(265, 90)">
        <rect x="0" y="0" width="45" height="30" rx="3" fill="#1e3a5f" stroke="#8b5cf6" strokeWidth="2"/>
        <text x="22" y="15" textAnchor="middle" fill="#8b5cf6" fontSize="8" fontWeight="bold">UPS B</text>
        <text x="22" y="24" textAnchor="middle" fill="#a78bfa" fontSize="6">500 kVA</text>
      </g>

      {/* PDU/RPP A */}
      <g transform="translate(90, 135)">
        <rect x="0" y="0" width="45" height="22" rx="2" fill="#374151" stroke="#ec4899" strokeWidth="1.5"/>
        <text x="22" y="14" textAnchor="middle" fill="#ec4899" fontSize="7" fontWeight="bold">PDU A</text>
      </g>

      {/* PDU/RPP B */}
      <g transform="translate(265, 135)">
        <rect x="0" y="0" width="45" height="22" rx="2" fill="#374151" stroke="#ec4899" strokeWidth="1.5"/>
        <text x="22" y="14" textAnchor="middle" fill="#ec4899" fontSize="7" fontWeight="bold">PDU B</text>
      </g>

      {/* Server Rack with Dual Power */}
      <g transform="translate(165, 100)">
        <rect x="0" y="0" width="70" height="55" rx="3" fill="#1f2937" stroke="#6b7280" strokeWidth="1.5"/>
        <text x="35" y="15" textAnchor="middle" fill="#ffffff" fontSize="8" fontWeight="bold">SERVER RACK</text>
        <rect x="10" y="22" width="22" height="12" rx="1" fill="#374151" stroke="#ec4899" strokeWidth="1"/>
        <text x="21" y="30" textAnchor="middle" fill="#ec4899" fontSize="6">PSU A</text>
        <rect x="38" y="22" width="22" height="12" rx="1" fill="#374151" stroke="#ec4899" strokeWidth="1"/>
        <text x="49" y="30" textAnchor="middle" fill="#ec4899" fontSize="6">PSU B</text>
        <text x="35" y="48" textAnchor="middle" fill="#9ca3af" fontSize="6">Dual-Corded</text>
      </g>

      {/* Connection Lines - Path A */}
      <line x1="55" y1="55" x2="90" y2="57" stroke="#3b82f6" strokeWidth="2"/>
      <line x1="55" y1="75" x2="90" y2="57" stroke="#22c55e" strokeWidth="1.5" strokeDasharray="3,2"/>
      <line x1="107" y1="70" x2="112" y2="90" stroke="#f59e0b" strokeWidth="2"/>
      <line x1="112" y1="120" x2="112" y2="135" stroke="#8b5cf6" strokeWidth="2"/>
      <line x1="135" y1="146" x2="165" y2="128" stroke="#ec4899" strokeWidth="1.5"/>

      {/* Connection Lines - Path B */}
      <line x1="345" y1="55" x2="310" y2="57" stroke="#3b82f6" strokeWidth="2"/>
      <line x1="345" y1="75" x2="310" y2="57" stroke="#22c55e" strokeWidth="1.5" strokeDasharray="3,2"/>
      <line x1="293" y1="70" x2="288" y2="90" stroke="#f59e0b" strokeWidth="2"/>
      <line x1="288" y1="120" x2="288" y2="135" stroke="#8b5cf6" strokeWidth="2"/>
      <line x1="265" y1="146" x2="235" y2="128" stroke="#ec4899" strokeWidth="1.5"/>

      {/* 2N Label */}
      <rect x="175" y="70" width="50" height="18" rx="9" fill="#22c55e" fillOpacity="0.2" stroke="#22c55e"/>
      <text x="200" y="82" textAnchor="middle" fill="#22c55e" fontSize="9" fontWeight="bold">2N</text>
    </svg>
  );
}

export default function DataCenterElectricalDesignPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navigation />
      <div className="pt-20">
        <BreadcrumbJsonLd
          items={[
            { name: "Home", url: "https://amporalabs.com" },
            { name: "Blog", url: "https://amporalabs.com/blog" },
            { name: "Data Center Electrical Design", url: "https://amporalabs.com/blog/data-center-electrical-design" },
          ]}
        />
        <BlogPostingJsonLd
          headline="Data Center Electrical Design: Power Distribution & Redundancy Guide"
          description="Comprehensive guide to data center electrical design including power distribution, redundancy configurations, UPS, and generator integration."
          datePublished="2025-01-15"
          dateModified="2025-01-15"
          url="https://amporalabs.com/blog/data-center-electrical-design"
          wordCount={3400}
          keywords={["data center electrical", "power distribution", "redundancy", "UPS", "critical power"]}
        />

        <article className="max-w-4xl mx-auto px-6 py-12">
          {/* Breadcrumb */}
          <nav className="text-sm text-white/60 mb-8">
            <Link href="/" className="hover:text-white">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/blog" className="hover:text-white">Blog</Link>
            <span className="mx-2">/</span>
            <span className="text-white">Data Center Electrical Design</span>
          </nav>

          {/* Article Header */}
          <header className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <span className="px-3 py-1 bg-green-600/30 text-green-300 text-sm font-medium rounded-full">
                Installation
              </span>
              <span className="text-white/40 text-sm">14 min read</span>
              <span className="text-white/40 text-sm">January 15, 2025</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6 leading-tight">
              Data Center Electrical Design: Power Distribution & Redundancy Guide
            </h1>
            <p className="text-xl text-white/70">
              Master the complexities of mission-critical power systems. From N+1 to 2N redundancy, UPS integration to generator paralleling, learn how to design electrical systems that achieve 99.999% uptime.
            </p>
          </header>

          <div className="mb-12 bg-gradient-to-br from-blue-900/20 to-purple-900/20 rounded-2xl p-6 border border-white/10">
            <HeroIllustration />
          </div>

          {/* Quick Reference CTA */}
          <div className="bg-purple-900/30 border border-purple-500/30 rounded-2xl p-6 mb-12">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div>
                <h3 className="font-display font-bold text-lg mb-1">Critical Power Calculations</h3>
                <p className="text-white/70 text-sm">Use Ampora for UPS sizing, generator calculations, and load analysis for data center projects.</p>
              </div>
              <a
                href="https://apps.apple.com/us/app/ampora/id6753693522"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-purple-600 text-white font-semibold rounded-full hover:bg-purple-500 transition-colors whitespace-nowrap"
              >
                Download Free
              </a>
            </div>
          </div>

          {/* Table of Contents */}
          <div className="bg-white/5 rounded-2xl p-6 mb-12">
            <h2 className="font-display font-bold mb-4">In This Guide</h2>
            <ul className="space-y-2 text-white/70">
              <li><a href="#overview" className="hover:text-purple-400">Data Center Power Overview</a></li>
              <li><a href="#tier-classifications" className="hover:text-purple-400">Tier Classifications & Requirements</a></li>
              <li><a href="#redundancy-configs" className="hover:text-purple-400">Redundancy Configurations (N+1, 2N, 2N+1)</a></li>
              <li><a href="#power-distribution" className="hover:text-purple-400">Power Distribution Architecture</a></li>
              <li><a href="#ups-systems" className="hover:text-purple-400">UPS System Design</a></li>
              <li><a href="#generator-integration" className="hover:text-purple-400">Generator Integration</a></li>
              <li><a href="#ats-sts" className="hover:text-purple-400">ATS and STS Switching</a></li>
              <li><a href="#pdu-design" className="hover:text-purple-400">PDU and Rack Power</a></li>
              <li><a href="#monitoring" className="hover:text-purple-400">Power Monitoring & DCIM</a></li>
            </ul>
          </div>

          {/* Article Content */}
          <div className="prose prose-invert prose-lg max-w-none">

            <section id="overview" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Data Center Power Overview</h2>
              <p className="text-white/80 mb-4">
                Data center electrical systems are engineered to deliver uninterrupted power to critical IT loads. Unlike typical commercial buildings, data centers require multiple levels of redundancy, sophisticated switching systems, and continuous power conditioning to achieve uptimes of 99.99% or higher.
              </p>
              <p className="text-white/80 mb-4">
                The typical data center power chain includes:
              </p>
              <ul className="list-disc list-inside text-white/70 space-y-2 mb-4">
                <li><strong>Utility service entrance:</strong> Medium voltage (typically 12-35 kV) stepped down to utilization voltage</li>
                <li><strong>Emergency generation:</strong> Diesel or natural gas generators for extended outages</li>
                <li><strong>Uninterruptible Power Supply (UPS):</strong> Battery-backed power conditioning</li>
                <li><strong>Power Distribution Units (PDUs):</strong> Rack-level power distribution</li>
                <li><strong>IT equipment power supplies:</strong> Final conversion to DC for servers</li>
              </ul>
              <div className="bg-blue-900/30 rounded-xl p-6 my-6">
                <h4 className="font-semibold text-blue-400 mb-3">Power Efficiency Metric: PUE</h4>
                <p className="text-white/80 mb-2">
                  Power Usage Effectiveness (PUE) measures data center efficiency:
                </p>
                <div className="bg-white/5 rounded-lg p-4 text-center">
                  <span className="font-mono text-xl text-blue-400">PUE = Total Facility Power / IT Equipment Power</span>
                </div>
                <p className="text-white/60 text-sm mt-3">
                  Industry average is ~1.58. Hyperscale facilities achieve 1.1-1.2. A PUE of 1.0 would mean all power goes to IT loads.
                </p>
              </div>
            </section>

            <section id="tier-classifications" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Tier Classifications & Requirements</h2>
              <p className="text-white/80 mb-4">
                The Uptime Institute's Tier Classification System defines four levels of data center infrastructure, each with specific electrical requirements:
              </p>
              <div className="overflow-x-auto my-6">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-white/20">
                      <th className="text-left py-3 px-4 text-white/60">Tier</th>
                      <th className="text-left py-3 px-4 text-white/60">Uptime</th>
                      <th className="text-left py-3 px-4 text-white/60">Redundancy</th>
                      <th className="text-left py-3 px-4 text-white/60">Key Characteristics</th>
                    </tr>
                  </thead>
                  <tbody className="text-white/80">
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-bold text-gray-400">Tier I</td>
                      <td className="py-3 px-4 font-mono">99.671%</td>
                      <td className="py-3 px-4">N</td>
                      <td className="py-3 px-4 text-white/60">Single path, no redundancy</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-bold text-yellow-400">Tier II</td>
                      <td className="py-3 px-4 font-mono">99.741%</td>
                      <td className="py-3 px-4">N+1</td>
                      <td className="py-3 px-4 text-white/60">Single path, redundant components</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-bold text-cyan-400">Tier III</td>
                      <td className="py-3 px-4 font-mono">99.982%</td>
                      <td className="py-3 px-4">N+1</td>
                      <td className="py-3 px-4 text-white/60">Multiple paths, one active. Concurrently maintainable</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-bold text-green-400">Tier IV</td>
                      <td className="py-3 px-4 font-mono">99.995%</td>
                      <td className="py-3 px-4">2N or 2N+1</td>
                      <td className="py-3 px-4 text-white/60">Multiple active paths. Fault tolerant</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="bg-green-900/30 rounded-xl p-6 my-6">
                <h4 className="font-semibold text-green-400 mb-3">Understanding Downtime Impact</h4>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="text-white/60">Tier I: 99.671%</p>
                    <p className="font-mono text-white/80">~28.8 hours/year downtime</p>
                  </div>
                  <div>
                    <p className="text-white/60">Tier II: 99.741%</p>
                    <p className="font-mono text-white/80">~22.7 hours/year downtime</p>
                  </div>
                  <div>
                    <p className="text-white/60">Tier III: 99.982%</p>
                    <p className="font-mono text-white/80">~1.6 hours/year downtime</p>
                  </div>
                  <div>
                    <p className="text-white/60">Tier IV: 99.995%</p>
                    <p className="font-mono text-white/80">~26 minutes/year downtime</p>
                  </div>
                </div>
              </div>
            </section>

            <section id="redundancy-configs" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Redundancy Configurations</h2>
              <p className="text-white/80 mb-4">
                Redundancy notation describes how many additional components or paths are provided beyond what's needed to serve the load:
              </p>

              <div className="space-y-6 my-6">
                <div className="bg-white/5 rounded-xl p-6">
                  <h3 className="font-semibold text-yellow-400 mb-3">N (No Redundancy)</h3>
                  <p className="text-white/70 mb-2">
                    "N" represents the minimum capacity needed to serve the load. No spare components exist - any failure causes downtime.
                  </p>
                  <p className="text-white/60 text-sm">
                    Example: A 1000 kVA IT load served by a single 1000 kVA UPS system.
                  </p>
                </div>

                <div className="bg-white/5 rounded-xl p-6">
                  <h3 className="font-semibold text-cyan-400 mb-3">N+1 (Component Redundancy)</h3>
                  <p className="text-white/70 mb-2">
                    One additional component is added to handle the failure of any single unit. All units share the load under normal conditions.
                  </p>
                  <p className="text-white/60 text-sm">
                    Example: A 1000 kVA IT load served by 4 x 333 kVA UPS modules. If one module fails, the remaining three carry the full load.
                  </p>
                </div>

                <div className="bg-white/5 rounded-xl p-6">
                  <h3 className="font-semibold text-green-400 mb-3">2N (Full Redundancy)</h3>
                  <p className="text-white/70 mb-2">
                    Two completely independent power paths, each capable of serving 100% of the load. True fault tolerance with no single point of failure.
                  </p>
                  <p className="text-white/60 text-sm">
                    Example: A 1000 kVA IT load served by two independent 1000 kVA UPS systems, each on separate utility feeds with separate generators.
                  </p>
                </div>

                <div className="bg-white/5 rounded-xl p-6">
                  <h3 className="font-semibold text-purple-400 mb-3">2N+1 (Distributed Redundancy)</h3>
                  <p className="text-white/70 mb-2">
                    Two independent paths, each with internal N+1 redundancy. Provides fault tolerance plus maintenance capability without reducing redundancy.
                  </p>
                  <p className="text-white/60 text-sm">
                    Example: Two systems of 3 x 500 kVA UPS modules each (N+1 within each path), serving dual-corded equipment.
                  </p>
                </div>
              </div>

              <div className="bg-orange-900/30 rounded-xl p-6 my-6">
                <h4 className="font-semibold text-orange-400 mb-3">Critical: Dual-Corded Equipment Required</h4>
                <p className="text-white/70">
                  2N redundancy only provides fault tolerance if IT equipment has dual power supplies connected to both power paths. Single-corded equipment negates the benefit of 2N infrastructure.
                </p>
              </div>
            </section>

            <section id="power-distribution" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Power Distribution Architecture</h2>
              <p className="text-white/80 mb-4">
                Data center power distribution typically follows a hierarchical structure from utility entrance to rack level:
              </p>

              <h3 className="text-xl font-display font-semibold mb-3 text-cyan-400">Main Distribution</h3>
              <div className="bg-white/5 rounded-xl p-6 my-4">
                <ul className="space-y-2 text-white/70">
                  <li><strong>Medium Voltage Service:</strong> 12.47 kV, 13.8 kV, or 34.5 kV typical</li>
                  <li><strong>Main Switchgear:</strong> 15 kV class, 1200-3000A</li>
                  <li><strong>Unit Substation Transformers:</strong> Step down to 480V (US) or 400V (EU)</li>
                  <li><strong>Low Voltage Switchgear:</strong> 480V, 2000-5000A main bus</li>
                </ul>
              </div>

              <h3 className="text-xl font-display font-semibold mb-3 text-cyan-400">UPS Distribution</h3>
              <div className="bg-white/5 rounded-xl p-6 my-4">
                <ul className="space-y-2 text-white/70">
                  <li><strong>UPS Input:</strong> 480V 3-phase from upstream switchgear</li>
                  <li><strong>UPS Output:</strong> 480V to distribution panels</li>
                  <li><strong>Static Bypass:</strong> Allows maintenance without transfer</li>
                  <li><strong>Maintenance Bypass:</strong> Manual bypass for UPS service</li>
                </ul>
              </div>

              <h3 className="text-xl font-display font-semibold mb-3 text-cyan-400">Room-Level Distribution</h3>
              <div className="bg-white/5 rounded-xl p-6 my-4">
                <ul className="space-y-2 text-white/70">
                  <li><strong>Remote Power Panels (RPP):</strong> Subfeed panels in data hall</li>
                  <li><strong>Power Distribution Units (PDU):</strong> Transform 480V to 208V/120V</li>
                  <li><strong>Busway/Overhead Busduct:</strong> Flexible power distribution to racks</li>
                  <li><strong>Whips:</strong> Final connections to rack PDU strips</li>
                </ul>
              </div>
            </section>

            <section id="ups-systems" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">UPS System Design</h2>
              <p className="text-white/80 mb-4">
                Uninterruptible Power Supply systems provide conditioned power and battery backup. Understanding UPS topologies is critical for data center design.
              </p>

              <h3 className="text-xl font-display font-semibold mb-3 text-purple-400">UPS Topologies</h3>
              <div className="overflow-x-auto my-6">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-white/20">
                      <th className="text-left py-3 px-4 text-white/60">Topology</th>
                      <th className="text-left py-3 px-4 text-white/60">Description</th>
                      <th className="text-left py-3 px-4 text-white/60">Efficiency</th>
                      <th className="text-left py-3 px-4 text-white/60">Application</th>
                    </tr>
                  </thead>
                  <tbody className="text-white/80">
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-semibold">Double Conversion</td>
                      <td className="py-3 px-4 text-white/60">AC→DC→AC, continuous operation</td>
                      <td className="py-3 px-4 font-mono">90-95%</td>
                      <td className="py-3 px-4 text-white/60">Critical loads, best protection</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-semibold">Line Interactive</td>
                      <td className="py-3 px-4 text-white/60">Inverter assists utility power</td>
                      <td className="py-3 px-4 font-mono">95-98%</td>
                      <td className="py-3 px-4 text-white/60">Medium loads, good protection</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-semibold">Delta Conversion</td>
                      <td className="py-3 px-4 text-white/60">Partial power through inverter</td>
                      <td className="py-3 px-4 font-mono">96-97%</td>
                      <td className="py-3 px-4 text-white/60">Large installations</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-semibold">Eco Mode</td>
                      <td className="py-3 px-4 text-white/60">Bypass with fast transfer</td>
                      <td className="py-3 px-4 font-mono">98-99%</td>
                      <td className="py-3 px-4 text-white/60">Efficiency-focused designs</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h3 className="text-xl font-display font-semibold mb-3 text-purple-400">Battery Runtime Calculation</h3>
              <p className="text-white/80 mb-4">
                Battery runtime depends on load, battery capacity, and system efficiency:
              </p>
              <div className="bg-purple-900/30 rounded-xl p-6 my-6">
                <div className="text-center mb-4">
                  <span className="font-mono text-xl text-purple-400">Runtime (min) = (Battery Capacity kWh x Efficiency) / Load kW x 60</span>
                </div>
                <p className="text-white/70 text-sm">
                  Typical runtimes: 5-15 minutes for generator-backed systems, 30-60+ minutes for locations without generators.
                </p>
              </div>

              <h3 className="text-xl font-display font-semibold mb-3 text-purple-400">Battery Technologies</h3>
              <div className="grid md:grid-cols-2 gap-4 my-4">
                <div className="bg-white/5 rounded-xl p-4">
                  <h4 className="font-semibold text-white mb-2">VRLA (Lead Acid)</h4>
                  <ul className="text-white/60 text-sm space-y-1">
                    <li>Lower initial cost</li>
                    <li>3-5 year lifespan typical</li>
                    <li>Temperature sensitive</li>
                    <li>Heavier, larger footprint</li>
                  </ul>
                </div>
                <div className="bg-white/5 rounded-xl p-4">
                  <h4 className="font-semibold text-white mb-2">Lithium-Ion</h4>
                  <ul className="text-white/60 text-sm space-y-1">
                    <li>Higher initial cost</li>
                    <li>10-15 year lifespan</li>
                    <li>Better temperature tolerance</li>
                    <li>Smaller, lighter footprint</li>
                  </ul>
                </div>
              </div>
            </section>

            <section id="generator-integration" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Generator Integration</h2>
              <p className="text-white/80 mb-4">
                Emergency generators provide extended backup power beyond UPS battery runtime. Proper integration ensures seamless transitions and reliable long-term operation.
              </p>

              <h3 className="text-xl font-display font-semibold mb-3 text-green-400">Generator Sizing</h3>
              <p className="text-white/80 mb-4">
                Generators must be sized for both running load and transient (step) loads:
              </p>
              <div className="bg-white/5 rounded-xl p-6 my-4">
                <ul className="space-y-2 text-white/70">
                  <li><strong>Running Load:</strong> Total continuous critical load including cooling</li>
                  <li><strong>Step Loading:</strong> Maximum load applied in a single step (typically 100% of one UPS)</li>
                  <li><strong>Motor Starting:</strong> Account for chiller and CRAC unit inrush</li>
                  <li><strong>Derating:</strong> Altitude and temperature derating per NFPA 110</li>
                </ul>
              </div>

              <h3 className="text-xl font-display font-semibold mb-3 text-green-400">Paralleling Options</h3>
              <div className="grid md:grid-cols-2 gap-6 my-6">
                <div className="bg-green-900/30 rounded-xl p-6">
                  <h4 className="font-semibold text-green-400 mb-3">Isolated Redundant</h4>
                  <p className="text-white/70 text-sm mb-2">
                    Each generator serves a dedicated load path. Simple but no load sharing.
                  </p>
                  <ul className="text-white/60 text-sm space-y-1">
                    <li>Simpler controls</li>
                    <li>No single point of failure</li>
                    <li>Larger individual units</li>
                  </ul>
                </div>
                <div className="bg-cyan-900/30 rounded-xl p-6">
                  <h4 className="font-semibold text-cyan-400 mb-3">Paralleled Bus</h4>
                  <p className="text-white/70 text-sm mb-2">
                    Multiple generators operate in parallel on a common bus. Provides load sharing and N+1 capability.
                  </p>
                  <ul className="text-white/60 text-sm space-y-1">
                    <li>Load sharing efficiency</li>
                    <li>Modular capacity growth</li>
                    <li>More complex controls</li>
                  </ul>
                </div>
              </div>

              <h3 className="text-xl font-display font-semibold mb-3 text-green-400">Fuel Systems</h3>
              <div className="bg-white/5 rounded-xl p-6 my-4">
                <ul className="space-y-2 text-white/70">
                  <li><strong>Base Tank:</strong> Integral sub-base tank, typically 8-24 hour capacity</li>
                  <li><strong>Day Tank:</strong> Automatic fuel transfer from bulk storage</li>
                  <li><strong>Bulk Storage:</strong> Large on-site tanks for 48-96+ hour runtime</li>
                  <li><strong>Fuel Contracts:</strong> Priority fuel delivery agreements for extended events</li>
                </ul>
              </div>
            </section>

            <section id="ats-sts" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">ATS and STS Switching</h2>
              <p className="text-white/80 mb-4">
                Transfer switches manage the transition between power sources. The type of switch determines transfer speed and load impact.
              </p>

              <div className="grid md:grid-cols-2 gap-6 my-6">
                <div className="bg-yellow-900/30 rounded-xl p-6">
                  <h3 className="font-semibold text-yellow-400 mb-3">Automatic Transfer Switch (ATS)</h3>
                  <p className="text-white/70 mb-3">Mechanical contactor-based switching between utility and generator.</p>
                  <ul className="text-white/60 text-sm space-y-1">
                    <li>Transfer time: 100-500 ms</li>
                    <li>Break-before-make operation</li>
                    <li>Lower cost than STS</li>
                    <li>Requires UPS for no-break transfer</li>
                    <li>Used upstream of UPS systems</li>
                  </ul>
                </div>
                <div className="bg-purple-900/30 rounded-xl p-6">
                  <h3 className="font-semibold text-purple-400 mb-3">Static Transfer Switch (STS)</h3>
                  <p className="text-white/70 mb-3">Solid-state switching between two power sources.</p>
                  <ul className="text-white/60 text-sm space-y-1">
                    <li>Transfer time: 4-8 ms (1/4 cycle)</li>
                    <li>No perceptible interruption</li>
                    <li>Make-before-break capable</li>
                    <li>Higher cost and losses</li>
                    <li>Used for critical loads or single-corded equipment</li>
                  </ul>
                </div>
              </div>

              <div className="bg-orange-900/30 rounded-xl p-6 my-6">
                <h4 className="font-semibold text-orange-400 mb-3">STS Synchronization Requirement</h4>
                <p className="text-white/70">
                  STS transfers require both sources to be synchronized (same frequency, phase angle within limits). If sources are out of sync, the STS performs a break-before-make transfer with a brief interruption. Design systems to maintain synchronization or use UPS to ride through transfers.
                </p>
              </div>
            </section>

            <section id="pdu-design" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">PDU and Rack Power</h2>
              <p className="text-white/80 mb-4">
                Power Distribution Units transform and distribute power from the UPS output to individual server racks. PDU design impacts efficiency, monitoring, and flexibility.
              </p>

              <h3 className="text-xl font-display font-semibold mb-3 text-pink-400">Floor PDU Types</h3>
              <div className="overflow-x-auto my-6">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-white/20">
                      <th className="text-left py-3 px-4 text-white/60">PDU Type</th>
                      <th className="text-left py-3 px-4 text-white/60">Transformation</th>
                      <th className="text-left py-3 px-4 text-white/60">Typical Rating</th>
                      <th className="text-left py-3 px-4 text-white/60">Racks Served</th>
                    </tr>
                  </thead>
                  <tbody className="text-white/80">
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-semibold">Static PDU</td>
                      <td className="py-3 px-4">480V to 208V/120V</td>
                      <td className="py-3 px-4 font-mono">75-225 kVA</td>
                      <td className="py-3 px-4 text-white/60">10-30 racks</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-semibold">RPP (No transformer)</td>
                      <td className="py-3 px-4">Distribution only</td>
                      <td className="py-3 px-4 font-mono">100-400A</td>
                      <td className="py-3 px-4 text-white/60">Varies</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-semibold">Modular PDU</td>
                      <td className="py-3 px-4">Scalable configuration</td>
                      <td className="py-3 px-4 font-mono">50-500 kVA</td>
                      <td className="py-3 px-4 text-white/60">Configurable</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h3 className="text-xl font-display font-semibold mb-3 text-pink-400">Rack PDU Types</h3>
              <div className="bg-white/5 rounded-xl p-6 my-4">
                <ul className="space-y-2 text-white/70">
                  <li><strong>Basic:</strong> Simple power strip, no monitoring</li>
                  <li><strong>Metered:</strong> Total input current/voltage monitoring</li>
                  <li><strong>Monitored:</strong> Per-outlet monitoring capability</li>
                  <li><strong>Switched:</strong> Remote outlet control and monitoring</li>
                  <li><strong>Intelligent:</strong> Full environmental sensing, DCIM integration</li>
                </ul>
              </div>

              <h3 className="text-xl font-display font-semibold mb-3 text-pink-400">Rack Power Density</h3>
              <p className="text-white/80 mb-4">
                Modern high-density deployments may require 20-50+ kW per rack. Power delivery must scale accordingly:
              </p>
              <div className="grid grid-cols-3 gap-4 my-4 text-center">
                <div className="bg-white/5 rounded-xl p-4">
                  <p className="text-white/60 text-sm">Traditional</p>
                  <p className="font-mono text-xl text-cyan-400">4-8 kW</p>
                  <p className="text-white/40 text-xs">per rack</p>
                </div>
                <div className="bg-white/5 rounded-xl p-4">
                  <p className="text-white/60 text-sm">High Density</p>
                  <p className="font-mono text-xl text-yellow-400">15-25 kW</p>
                  <p className="text-white/40 text-xs">per rack</p>
                </div>
                <div className="bg-white/5 rounded-xl p-4">
                  <p className="text-white/60 text-sm">AI/HPC</p>
                  <p className="font-mono text-xl text-red-400">50-100+ kW</p>
                  <p className="text-white/40 text-xs">per rack</p>
                </div>
              </div>
            </section>

            <section id="monitoring" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Power Monitoring & DCIM</h2>
              <p className="text-white/80 mb-4">
                Comprehensive power monitoring is essential for capacity planning, efficiency optimization, and rapid fault response.
              </p>

              <h3 className="text-xl font-display font-semibold mb-3 text-cyan-400">Key Monitoring Points</h3>
              <div className="bg-white/5 rounded-xl p-6 my-4">
                <ul className="space-y-2 text-white/70">
                  <li><strong>Utility Metering:</strong> kW, kVA, kVAR, PF, harmonics</li>
                  <li><strong>Generator Status:</strong> Running, available, fuel level, alarms</li>
                  <li><strong>UPS Status:</strong> Load %, battery status, input/output metrics</li>
                  <li><strong>PDU Metering:</strong> Per-circuit and per-breaker monitoring</li>
                  <li><strong>Rack PDU:</strong> Per-outlet current, voltage, power</li>
                  <li><strong>Environmental:</strong> Temperature, humidity at rack level</li>
                </ul>
              </div>

              <h3 className="text-xl font-display font-semibold mb-3 text-cyan-400">DCIM Integration</h3>
              <p className="text-white/80 mb-4">
                Data Center Infrastructure Management (DCIM) platforms aggregate monitoring data for:
              </p>
              <ul className="list-disc list-inside text-white/70 space-y-2 mb-4">
                <li>Real-time capacity visualization</li>
                <li>Predictive analytics and trending</li>
                <li>Automated alerting and escalation</li>
                <li>Change management and planning</li>
                <li>PUE tracking and efficiency reporting</li>
              </ul>
            </section>

            {/* CTA Section */}
            <section className="bg-gradient-to-r from-purple-900/30 to-cyan-900/30 rounded-2xl p-8 my-12">
              <h2 className="text-2xl font-display font-bold mb-4 text-center">
                Power Your Critical Calculations
              </h2>
              <p className="text-white/70 mb-6 text-center">
                Ampora helps electrical professionals with UPS sizing, generator load analysis, and power distribution calculations for mission-critical facilities.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <a
                  href="https://apps.apple.com/us/app/ampora/id6753693522"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-purple-600 text-white font-semibold rounded-full hover:bg-purple-500 transition-colors text-center"
                >
                  Download Ampora Free
                </a>
                <Link
                  href="/calculators"
                  className="px-6 py-3 bg-white text-black font-semibold rounded-full hover:bg-white/90 transition-colors text-center"
                >
                  Try Web Calculators
                </Link>
              </div>
            </section>

            {/* Related Articles */}
            <section className="mt-12">
              <h2 className="text-2xl font-display font-bold mb-6">Related Articles</h2>
              <div className="grid md:grid-cols-2 gap-4">
                <Link href="/blog/emergency-standby-power-systems" className="bg-white/5 hover:bg-white/10 rounded-xl p-6 transition-colors">
                  <span className="text-green-400 text-sm">Installation</span>
                  <h3 className="font-semibold mt-2">Emergency & Standby Power Systems</h3>
                </Link>
                <Link href="/blog/transformer-sizing-guide" className="bg-white/5 hover:bg-white/10 rounded-xl p-6 transition-colors">
                  <span className="text-cyan-400 text-sm">Calculations</span>
                  <h3 className="font-semibold mt-2">Transformer Sizing Guide</h3>
                </Link>
                <Link href="/blog/3-phase-power-calculations" className="bg-white/5 hover:bg-white/10 rounded-xl p-6 transition-colors">
                  <span className="text-cyan-400 text-sm">Calculations</span>
                  <h3 className="font-semibold mt-2">3-Phase Power Calculations</h3>
                </Link>
                <Link href="/blog/nec-service-entrance-requirements" className="bg-white/5 hover:bg-white/10 rounded-xl p-6 transition-colors">
                  <span className="text-purple-400 text-sm">NEC Code</span>
                  <h3 className="font-semibold mt-2">NEC Service Entrance Requirements</h3>
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
