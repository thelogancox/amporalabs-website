import { Metadata } from "next";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import { BreadcrumbJsonLd, BlogPostingJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Solar PV Installation Guide: NEC Article 690 Requirements for Electricians",
  description: "Complete NEC Article 690 guide for solar PV system installation. Learn rapid shutdown requirements, conductor sizing, disconnect locations, grounding methods, and code-compliant installation practices.",
  keywords: [
    "NEC Article 690",
    "solar PV installation",
    "photovoltaic installation",
    "rapid shutdown NEC",
    "solar panel wiring",
    "PV system grounding",
    "solar disconnect requirements",
    "NEC 690 rapid shutdown",
    "solar conductor sizing",
    "PV array wiring",
    "solar electrical code",
    "rooftop solar installation",
    "solar inverter installation",
    "PV system design",
    "solar combiner box"
  ],
  alternates: {
    canonical: "https://amporalabs.com/blog/solar-pv-system-installation-nec-690",
  },
  openGraph: {
    title: "Solar PV Installation: NEC Article 690 Guide - Ampora",
    description: "Master NEC 690 requirements for solar PV installations including rapid shutdown, conductor sizing, and grounding.",
    url: "https://amporalabs.com/blog/solar-pv-system-installation-nec-690",
    type: "article",
  },
};

function HeroIllustration() {
  return (
    <svg viewBox="0 0 400 160" className="w-full h-40 md:h-48" aria-label="Solar PV system diagram">
      {/* Sun */}
      <circle cx="50" cy="30" r="18" fill="#eab308" opacity="0.8"/>
      <g stroke="#eab308" strokeWidth="2">
        <line x1="50" y1="5" x2="50" y2="0" opacity="0.6"/>
        <line x1="50" y1="55" x2="50" y2="60" opacity="0.6"/>
        <line x1="25" y1="30" x2="20" y2="30" opacity="0.6"/>
        <line x1="75" y1="30" x2="80" y2="30" opacity="0.6"/>
        <line x1="32" y1="12" x2="28" y2="8" opacity="0.6"/>
        <line x1="68" y1="48" x2="72" y2="52" opacity="0.6"/>
        <line x1="68" y1="12" x2="72" y2="8" opacity="0.6"/>
        <line x1="32" y1="48" x2="28" y2="52" opacity="0.6"/>
      </g>

      {/* Solar Panels */}
      <g transform="translate(90, 20)">
        <rect x="0" y="0" width="45" height="35" rx="2" fill="#1e3a5f" stroke="#3b82f6" strokeWidth="2"/>
        <line x1="15" y1="0" x2="15" y2="35" stroke="#3b82f6" strokeWidth="1" opacity="0.5"/>
        <line x1="30" y1="0" x2="30" y2="35" stroke="#3b82f6" strokeWidth="1" opacity="0.5"/>
        <line x1="0" y1="12" x2="45" y2="12" stroke="#3b82f6" strokeWidth="1" opacity="0.5"/>
        <line x1="0" y1="24" x2="45" y2="24" stroke="#3b82f6" strokeWidth="1" opacity="0.5"/>

        <rect x="50" y="0" width="45" height="35" rx="2" fill="#1e3a5f" stroke="#3b82f6" strokeWidth="2"/>
        <line x1="65" y1="0" x2="65" y2="35" stroke="#3b82f6" strokeWidth="1" opacity="0.5"/>
        <line x1="80" y1="0" x2="80" y2="35" stroke="#3b82f6" strokeWidth="1" opacity="0.5"/>
        <line x1="50" y1="12" x2="95" y2="12" stroke="#3b82f6" strokeWidth="1" opacity="0.5"/>
        <line x1="50" y1="24" x2="95" y2="24" stroke="#3b82f6" strokeWidth="1" opacity="0.5"/>
        <text x="47" y="48" textAnchor="middle" fill="#3b82f6" fontSize="7">PV ARRAY</text>
      </g>

      {/* DC Wiring */}
      <line x1="185" y1="55" x2="185" y2="75" stroke="#ef4444" strokeWidth="2"/>
      <line x1="185" y1="75" x2="230" y2="75" stroke="#ef4444" strokeWidth="2"/>
      <text x="205" y="70" fill="#ef4444" fontSize="6">DC</text>

      {/* Rapid Shutdown Box */}
      <g transform="translate(230, 60)">
        <rect x="0" y="0" width="40" height="30" rx="3" fill="#1f2937" stroke="#f97316" strokeWidth="2"/>
        <text x="20" y="13" textAnchor="middle" fill="#f97316" fontSize="6" fontWeight="bold">RAPID</text>
        <text x="20" y="22" textAnchor="middle" fill="#f97316" fontSize="6" fontWeight="bold">SHUTDOWN</text>
      </g>

      {/* Inverter */}
      <g transform="translate(290, 55)">
        <rect x="0" y="0" width="50" height="40" rx="3" fill="#1f2937" stroke="#22c55e" strokeWidth="2"/>
        <text x="25" y="18" textAnchor="middle" fill="#22c55e" fontSize="7" fontWeight="bold">INVERTER</text>
        <text x="25" y="30" textAnchor="middle" fill="#9ca3af" fontSize="6">DC→AC</text>
      </g>
      <line x1="270" y1="75" x2="290" y2="75" stroke="#ef4444" strokeWidth="2"/>

      {/* AC Wiring to Panel */}
      <line x1="340" y1="75" x2="360" y2="75" stroke="#22c55e" strokeWidth="2"/>
      <line x1="360" y1="75" x2="360" y2="110" stroke="#22c55e" strokeWidth="2"/>
      <text x="350" y="70" fill="#22c55e" fontSize="6">AC</text>

      {/* Main Panel */}
      <g transform="translate(340, 110)">
        <rect x="0" y="0" width="45" height="40" rx="3" fill="#1f2937" stroke="#6b7280" strokeWidth="2"/>
        <text x="22" y="15" textAnchor="middle" fill="#9ca3af" fontSize="6">MAIN</text>
        <text x="22" y="25" textAnchor="middle" fill="#9ca3af" fontSize="6">PANEL</text>
        <rect x="10" y="30" width="25" height="6" rx="1" fill="#22c55e"/>
      </g>

      {/* Grid */}
      <line x1="385" y1="130" x2="400" y2="130" stroke="#6b7280" strokeWidth="2"/>
      <text x="392" y="145" textAnchor="middle" fill="#9ca3af" fontSize="6">GRID</text>

      {/* Labels */}
      <g transform="translate(110, 130)">
        <rect x="0" y="0" width="80" height="18" rx="3" fill="#3b82f6" fillOpacity="0.2" stroke="#3b82f6"/>
        <text x="40" y="12" textAnchor="middle" fill="#3b82f6" fontSize="7">ARRAY BOUNDARY</text>
      </g>
    </svg>
  );
}

export default function SolarPVInstallationPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navigation />
      <div className="pt-20">
        <BreadcrumbJsonLd
          items={[
            { name: "Home", url: "https://amporalabs.com" },
            { name: "Blog", url: "https://amporalabs.com/blog" },
            { name: "Solar PV Installation NEC 690", url: "https://amporalabs.com/blog/solar-pv-system-installation-nec-690" },
          ]}
        />
        <BlogPostingJsonLd
          headline="Solar PV Installation Guide: NEC Article 690 Requirements for Electricians"
          description="Complete NEC Article 690 guide for solar PV installation including rapid shutdown, conductor sizing, and grounding."
          datePublished="2025-01-14"
          dateModified="2025-01-14"
          url="https://amporalabs.com/blog/solar-pv-system-installation-nec-690"
          wordCount={3500}
          keywords={["NEC Article 690", "solar PV installation", "rapid shutdown", "photovoltaic wiring"]}
        />

        <article className="max-w-4xl mx-auto px-6 py-12">
          {/* Breadcrumb */}
          <nav className="text-sm text-white/60 mb-8">
            <Link href="/" className="hover:text-white">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/blog" className="hover:text-white">Blog</Link>
            <span className="mx-2">/</span>
            <span className="text-white">Solar PV Installation NEC 690</span>
          </nav>

          {/* Article Header */}
          <header className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <span className="px-3 py-1 bg-cyan-600/30 text-cyan-300 text-sm font-medium rounded-full">
                Installation
              </span>
              <span className="text-white/40 text-sm">15 min read</span>
              <span className="text-white/40 text-sm">January 14, 2025</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6 leading-tight">
              Solar PV System Installation: NEC Article 690 Complete Guide
            </h1>
            <p className="text-xl text-white/70">
              Everything electricians need to know about NEC Article 690 requirements for photovoltaic installations. From rapid shutdown to conductor sizing, disconnects to grounding - ensure code-compliant solar installations.
            </p>
          </header>

          <div className="mb-12 bg-gradient-to-br from-blue-900/20 to-green-900/20 rounded-2xl p-6 border border-white/10">
            <HeroIllustration />
          </div>

          {/* Important Update Box */}
          <div className="bg-orange-900/30 border border-orange-500/30 rounded-2xl p-6 mb-12">
            <h3 className="font-display font-bold text-lg mb-2 text-orange-400">NEC 2023 Updates</h3>
            <p className="text-white/70 text-sm">
              NEC 2023 includes significant updates to Article 690, particularly in rapid shutdown requirements, DC arc-fault protection, and energy storage integration. This guide covers current code requirements - always verify with your local AHJ for adopted code edition.
            </p>
          </div>

          {/* Table of Contents */}
          <div className="bg-white/5 rounded-2xl p-6 mb-12">
            <h2 className="font-display font-bold mb-4">In This Guide</h2>
            <ul className="space-y-2 text-white/70">
              <li><a href="#article-690-overview" className="hover:text-purple-400">Article 690 Overview</a></li>
              <li><a href="#system-components" className="hover:text-purple-400">PV System Components</a></li>
              <li><a href="#rapid-shutdown" className="hover:text-purple-400">Rapid Shutdown Requirements (690.12)</a></li>
              <li><a href="#conductor-sizing" className="hover:text-purple-400">Conductor Sizing and Ampacity</a></li>
              <li><a href="#overcurrent-protection" className="hover:text-purple-400">Overcurrent Protection</a></li>
              <li><a href="#disconnects" className="hover:text-purple-400">Disconnect Requirements</a></li>
              <li><a href="#grounding" className="hover:text-purple-400">Grounding and Bonding</a></li>
              <li><a href="#labeling" className="hover:text-purple-400">Labeling Requirements</a></li>
              <li><a href="#common-violations" className="hover:text-purple-400">Common Code Violations</a></li>
            </ul>
          </div>

          {/* Article Content */}
          <div className="prose prose-invert prose-lg max-w-none">

            <section id="article-690-overview" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Article 690 Overview</h2>
              <p className="text-white/80 mb-4">
                <strong>NEC Article 690 - Solar Photovoltaic (PV) Systems</strong> covers the installation of solar PV systems including array circuits, inverter circuits, and storage batteries. It applies to all PV systems regardless of whether they are utility-interactive, stand-alone, or hybrid systems.
              </p>

              <div className="bg-white/5 rounded-xl p-6 my-6">
                <h3 className="font-semibold mb-3">Article 690 Structure</h3>
                <ul className="space-y-2 text-white/70 text-sm">
                  <li><strong>Part I (690.1-690.4)</strong> - General requirements and definitions</li>
                  <li><strong>Part II (690.7-690.9)</strong> - Circuit requirements including maximum voltage</li>
                  <li><strong>Part III (690.11-690.12)</strong> - Disconnecting means and rapid shutdown</li>
                  <li><strong>Part IV (690.31-690.35)</strong> - Wiring methods</li>
                  <li><strong>Part V (690.41-690.47)</strong> - Grounding and bonding</li>
                  <li><strong>Part VI (690.51-690.56)</strong> - Marking and labeling</li>
                  <li><strong>Part VII (690.71-690.72)</strong> - Connection to other sources</li>
                </ul>
              </div>

              <p className="text-white/80">
                Article 690 works in conjunction with other NEC articles. Where requirements differ, Article 690 takes precedence for PV-specific installations. General wiring requirements from Chapters 1-4 still apply unless modified by Article 690.
              </p>
            </section>

            <section id="system-components" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">PV System Components</h2>

              <div className="space-y-4 my-6">
                <div className="bg-blue-900/20 rounded-xl p-6 border border-blue-500/30">
                  <h3 className="font-semibold text-blue-400 mb-2">PV Module (Solar Panel)</h3>
                  <p className="text-white/70 text-sm">
                    The smallest complete, environmentally protected assembly of photovoltaic cells. Typically 300-450W per module for residential installations. Each module has its own maximum voltage (Voc) and short-circuit current (Isc) ratings.
                  </p>
                </div>

                <div className="bg-blue-900/20 rounded-xl p-6 border border-blue-500/30">
                  <h3 className="font-semibold text-blue-400 mb-2">String</h3>
                  <p className="text-white/70 text-sm">
                    Modules connected in series to achieve the required voltage. String voltage must not exceed the inverter's maximum input voltage or NEC maximum system voltage limits.
                  </p>
                </div>

                <div className="bg-blue-900/20 rounded-xl p-6 border border-blue-500/30">
                  <h3 className="font-semibold text-blue-400 mb-2">Array</h3>
                  <p className="text-white/70 text-sm">
                    All PV modules and other equipment mechanically and electrically integrated to form a DC power-producing unit. Multiple strings may be combined in parallel at a combiner box.
                  </p>
                </div>

                <div className="bg-green-900/20 rounded-xl p-6 border border-green-500/30">
                  <h3 className="font-semibold text-green-400 mb-2">Inverter</h3>
                  <p className="text-white/70 text-sm">
                    Converts DC power from the array to AC power for use by loads or export to the grid. Types include string inverters, microinverters, and power optimizers with central inverter.
                  </p>
                </div>

                <div className="bg-orange-900/20 rounded-xl p-6 border border-orange-500/30">
                  <h3 className="font-semibold text-orange-400 mb-2">Rapid Shutdown Equipment</h3>
                  <p className="text-white/70 text-sm">
                    Equipment that reduces PV system conductors and modules to safe voltage levels within the array boundary and outside the array boundary per NEC 690.12.
                  </p>
                </div>
              </div>
            </section>

            <section id="rapid-shutdown" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Rapid Shutdown Requirements (NEC 690.12)</h2>
              <p className="text-white/80 mb-4">
                Rapid shutdown is one of the most critical requirements for rooftop PV systems. It ensures firefighters and first responders can safely operate around solar installations by quickly reducing voltage levels.
              </p>

              <div className="bg-red-900/20 border border-red-500/30 rounded-xl p-6 my-6">
                <h3 className="font-semibold text-red-400 mb-3">NEC 2023 Rapid Shutdown Requirements</h3>
                <p className="text-white/70 text-sm mb-4">
                  PV system circuits installed on or in buildings shall include a rapid shutdown function to reduce shock hazard for emergency responders.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-black/30 rounded-lg p-4">
                    <h4 className="font-semibold text-orange-400 mb-2">Outside Array Boundary</h4>
                    <p className="text-white/60 text-sm">Controlled conductors outside the array boundary shall be limited to not more than <strong>30 volts</strong> within <strong>30 seconds</strong> of rapid shutdown initiation.</p>
                  </div>
                  <div className="bg-black/30 rounded-lg p-4">
                    <h4 className="font-semibold text-orange-400 mb-2">Inside Array Boundary</h4>
                    <p className="text-white/60 text-sm">Controlled conductors within the array boundary shall be limited to not more than <strong>80 volts</strong> within <strong>30 seconds</strong> of rapid shutdown initiation.</p>
                  </div>
                </div>
              </div>

              <h3 className="text-xl font-semibold mt-6 mb-3">Array Boundary Definition</h3>
              <p className="text-white/80 mb-4">
                The array boundary is defined as 1 foot from the array in all directions. This includes:
              </p>
              <ul className="list-disc list-inside text-white/70 space-y-2 mb-6">
                <li>1 foot from the outermost modules</li>
                <li>1 foot below the mounting plane of the array</li>
                <li>Raceways and enclosures within this boundary must meet the 80V requirement</li>
              </ul>

              <h3 className="text-xl font-semibold mt-6 mb-3">Rapid Shutdown Methods</h3>
              <div className="overflow-x-auto my-6">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-white/20">
                      <th className="text-left py-3 px-4 text-white/60">Method</th>
                      <th className="text-left py-3 px-4 text-white/60">Technology</th>
                      <th className="text-left py-3 px-4 text-white/60">Compliance</th>
                    </tr>
                  </thead>
                  <tbody className="text-white/80">
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">Microinverters</td>
                      <td className="py-3 px-4 text-white/60">AC output at each module, DC contained within module</td>
                      <td className="py-3 px-4 text-green-400">Inherently compliant</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">DC Optimizers</td>
                      <td className="py-3 px-4 text-white/60">Module-level electronics reduce voltage when communication lost</td>
                      <td className="py-3 px-4 text-green-400">Compliant when listed</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">Rapid Shutdown Boxes</td>
                      <td className="py-3 px-4 text-white/60">External shutdown devices at array with initiation at inverter</td>
                      <td className="py-3 px-4 text-green-400">Compliant when listed</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">String Inverter Only</td>
                      <td className="py-3 px-4 text-white/60">No module-level shutdown capability</td>
                      <td className="py-3 px-4 text-red-400">Does NOT comply</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="bg-purple-900/30 rounded-xl p-6 my-6">
                <h3 className="font-semibold text-purple-400 mb-3">Initiation Device Requirements</h3>
                <p className="text-white/70 text-sm">
                  The rapid shutdown initiation device shall be located at a readily accessible location outside the building, or inside at the main service disconnect. It must be clearly marked and function shall be accomplished by a single action.
                </p>
              </div>
            </section>

            <section id="conductor-sizing" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Conductor Sizing and Ampacity</h2>

              <h3 className="text-xl font-semibold mt-6 mb-3">Maximum System Voltage (690.7)</h3>
              <p className="text-white/80 mb-4">
                PV system DC voltage is calculated based on the coldest expected temperature. Use the module's open-circuit voltage (Voc) and apply temperature correction factors.
              </p>

              <div className="bg-white/5 rounded-xl p-6 my-6">
                <h4 className="font-semibold mb-3">Voltage Calculation Formula</h4>
                <div className="bg-black/50 rounded-lg p-4 font-mono text-sm">
                  <p className="text-cyan-400">Max System Voltage = Voc × Number of Modules in String × Temperature Correction Factor</p>
                </div>
                <p className="text-white/60 text-sm mt-3">
                  Temperature correction factors from NEC Table 690.7(A) range from 1.02 at 20C to 1.25 at -40C for crystalline silicon modules.
                </p>
              </div>

              <h3 className="text-xl font-semibold mt-6 mb-3">Conductor Ampacity (690.8)</h3>
              <p className="text-white/80 mb-4">
                PV source and output circuit conductors must have an ampacity not less than the maximum circuit current multiplied by 1.25 (125%).
              </p>

              <div className="bg-white/5 rounded-xl p-6 my-6">
                <h4 className="font-semibold mb-3">Ampacity Calculation</h4>
                <ul className="space-y-2 text-white/70 text-sm">
                  <li><strong>Maximum Circuit Current</strong> = Sum of parallel-connected module short-circuit currents (Isc)</li>
                  <li><strong>Minimum Conductor Ampacity</strong> = Maximum Circuit Current × 1.25</li>
                  <li><strong>Additional derating</strong> may be required for conduit fill and ambient temperature</li>
                </ul>
              </div>

              <div className="overflow-x-auto my-6">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-white/20">
                      <th className="text-left py-3 px-4 text-white/60">Circuit Type</th>
                      <th className="text-left py-3 px-4 text-white/60">Common Wire Size</th>
                      <th className="text-left py-3 px-4 text-white/60">Notes</th>
                    </tr>
                  </thead>
                  <tbody className="text-white/80">
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">Module to Module (String)</td>
                      <td className="py-3 px-4 font-mono">10 AWG</td>
                      <td className="py-3 px-4 text-white/60">USE-2 or PV Wire, typically pre-installed</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">String to Combiner</td>
                      <td className="py-3 px-4 font-mono">10 AWG</td>
                      <td className="py-3 px-4 text-white/60">THWN-2, USE-2, or PV Wire in conduit</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">Combiner to Inverter</td>
                      <td className="py-3 px-4 font-mono">6-2 AWG</td>
                      <td className="py-3 px-4 text-white/60">Size based on combined string currents</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">Inverter to Panel (AC)</td>
                      <td className="py-3 px-4 font-mono">10-6 AWG</td>
                      <td className="py-3 px-4 text-white/60">Based on inverter output current</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="bg-orange-900/30 rounded-xl p-6 my-6">
                <p className="text-white/90">
                  <strong>Important:</strong> PV Wire and USE-2 are rated for wet locations and direct sunlight exposure. Standard THHN/THWN should only be used inside conduit and not exposed to direct sunlight.
                </p>
              </div>
            </section>

            <section id="overcurrent-protection" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Overcurrent Protection (NEC 690.9)</h2>
              <p className="text-white/80 mb-4">
                PV source circuits and PV output circuits require overcurrent protection when the maximum circuit current exceeds the ampacity of the conductors.
              </p>

              <div className="bg-white/5 rounded-xl p-6 my-6">
                <h3 className="font-semibold mb-3">When OCPD is Required</h3>
                <p className="text-white/70 text-sm mb-4">
                  Overcurrent protection is required when the sum of available fault currents from parallel sources exceeds the conductor or module ampacity:
                </p>
                <ul className="space-y-2 text-white/70 text-sm">
                  <li>&#8226; More than 2 strings in parallel typically require string fusing</li>
                  <li>&#8226; Fuse or circuit breaker rating shall not exceed module Isc × 1.56</li>
                  <li>&#8226; Module backsheet typically lists maximum series fuse value</li>
                </ul>
              </div>

              <h3 className="text-xl font-semibold mt-6 mb-3">DC Arc-Fault Circuit Protection (690.11)</h3>
              <p className="text-white/80 mb-4">
                PV systems with DC source circuits, DC output circuits, or both operating at 80 volts or greater shall be protected by a listed arc-fault circuit interrupter (AFCI).
              </p>
              <ul className="list-disc list-inside text-white/70 space-y-2 mb-4">
                <li>Arc-fault protection can be at inverter or external device</li>
                <li>Must detect and interrupt arcing faults</li>
                <li>Shall disable inverter or disrupt operation of system</li>
                <li>Annunciation required to indicate arc-fault detection</li>
              </ul>
            </section>

            <section id="disconnects" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Disconnect Requirements (NEC 690.13-690.15)</h2>

              <h3 className="text-xl font-semibold mt-6 mb-3">PV System Disconnecting Means</h3>
              <p className="text-white/80 mb-4">
                A means shall be provided to disconnect all conductors of a PV system from all other conductors in a building or structure.
              </p>

              <div className="grid md:grid-cols-2 gap-4 my-6">
                <div className="bg-white/5 rounded-xl p-6">
                  <h4 className="font-semibold text-orange-400 mb-2">DC Disconnect</h4>
                  <ul className="space-y-1 text-white/60 text-sm">
                    <li>&#8226; Required between array and inverter</li>
                    <li>&#8226; Shall be listed for DC at system voltage</li>
                    <li>&#8226; Suitable for current available</li>
                    <li>&#8226; Accessible and within sight of inverter (or lockable)</li>
                  </ul>
                </div>
                <div className="bg-white/5 rounded-xl p-6">
                  <h4 className="font-semibold text-green-400 mb-2">AC Disconnect</h4>
                  <ul className="space-y-1 text-white/60 text-sm">
                    <li>&#8226; Required at point of connection to premises wiring</li>
                    <li>&#8226; Typically at main panel or dedicated breaker</li>
                    <li>&#8226; Shall disconnect ungrounded conductors</li>
                    <li>&#8226; Can be integral to inverter if listed</li>
                  </ul>
                </div>
              </div>

              <h3 className="text-xl font-semibold mt-6 mb-3">Utility-Interactive Disconnects</h3>
              <p className="text-white/80 mb-4">
                Per NEC 690.13(B), the inverter output disconnect for utility-interactive systems shall be accessible by the utility and may be required to be lockable by utility requirements.
              </p>
            </section>

            <section id="grounding" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Grounding and Bonding (NEC 690.41-690.47)</h2>

              <h3 className="text-xl font-semibold mt-6 mb-3">System Grounding</h3>
              <p className="text-white/80 mb-4">
                PV systems may be grounded or ungrounded. Most residential grid-tied systems with string inverters use ungrounded (floating) DC arrays with ground-fault detection.
              </p>

              <div className="bg-white/5 rounded-xl p-6 my-6">
                <h4 className="font-semibold mb-3">Ground-Fault Protection (690.41(B))</h4>
                <p className="text-white/70 text-sm">
                  Grounded DC PV arrays shall be provided with ground-fault protection that complies with 690.41(B). Ungrounded arrays shall comply with 690.41(A) and use listed equipment marked for ungrounded PV arrays.
                </p>
              </div>

              <h3 className="text-xl font-semibold mt-6 mb-3">Equipment Grounding (Bonding)</h3>
              <p className="text-white/80 mb-4">
                All exposed non-current-carrying metal parts of PV equipment shall be grounded (bonded) per NEC 690.43:
              </p>
              <ul className="list-disc list-inside text-white/70 space-y-2 mb-4">
                <li>Module frames</li>
                <li>Mounting structure/racking</li>
                <li>Inverter enclosures</li>
                <li>Combiner boxes</li>
                <li>Junction boxes and conduit</li>
              </ul>

              <div className="bg-green-900/30 rounded-xl p-6 my-6">
                <h3 className="font-semibold text-green-400 mb-3">Module Grounding Methods</h3>
                <ul className="space-y-2 text-white/70 text-sm">
                  <li>&#8226; <strong>WEEB (Washer Electrical Equipment Bond)</strong> - Star washer that pierces anodized coating</li>
                  <li>&#8226; <strong>Grounding lugs</strong> - Listed grounding lugs with proper hardware</li>
                  <li>&#8226; <strong>Bonding clips</strong> - Listed clips that bond frame to rail</li>
                  <li>&#8226; <strong>Lay-in lugs</strong> - UL-listed for grounding/bonding applications</li>
                </ul>
              </div>

              <h3 className="text-xl font-semibold mt-6 mb-3">Equipment Grounding Conductor Sizing</h3>
              <p className="text-white/80 mb-4">
                EGC size per NEC 690.45 based on the rating of the overcurrent device or maximum circuit current:
              </p>

              <div className="overflow-x-auto my-6">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-white/20">
                      <th className="text-left py-3 px-4 text-white/60">OCPD Rating (A)</th>
                      <th className="text-left py-3 px-4 text-white/60">Copper EGC</th>
                      <th className="text-left py-3 px-4 text-white/60">Aluminum EGC</th>
                    </tr>
                  </thead>
                  <tbody className="text-white/80">
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">15</td>
                      <td className="py-3 px-4 font-mono">14 AWG</td>
                      <td className="py-3 px-4 font-mono">12 AWG</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">20</td>
                      <td className="py-3 px-4 font-mono">12 AWG</td>
                      <td className="py-3 px-4 font-mono">10 AWG</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">30</td>
                      <td className="py-3 px-4 font-mono">10 AWG</td>
                      <td className="py-3 px-4 font-mono">8 AWG</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">60</td>
                      <td className="py-3 px-4 font-mono">10 AWG</td>
                      <td className="py-3 px-4 font-mono">8 AWG</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">100</td>
                      <td className="py-3 px-4 font-mono">8 AWG</td>
                      <td className="py-3 px-4 font-mono">6 AWG</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section id="labeling" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Labeling Requirements (NEC 690.51-690.56)</h2>
              <p className="text-white/80 mb-4">
                Proper labeling is essential for inspector approval and first responder safety. Missing or incorrect labels are common inspection failures.
              </p>

              <div className="space-y-4 my-6">
                <div className="bg-white/5 rounded-xl p-6">
                  <h3 className="font-semibold text-orange-400 mb-2">690.53 - DC PV Power Source</h3>
                  <p className="text-white/70 text-sm">
                    A permanent label at DC disconnect or junction box indicating: Maximum Power Point Current (Imp), Maximum Power Point Voltage (Vmp), Maximum System Voltage, and Short-Circuit Current (Isc).
                  </p>
                </div>

                <div className="bg-white/5 rounded-xl p-6">
                  <h3 className="font-semibold text-orange-400 mb-2">690.54 - Interactive System Point of Connection</h3>
                  <p className="text-white/70 text-sm">
                    Label at AC disconnect location indicating: Rated AC output current, Nominal operating AC voltage.
                  </p>
                </div>

                <div className="bg-white/5 rounded-xl p-6">
                  <h3 className="font-semibold text-red-400 mb-2">690.56(C) - Rapid Shutdown</h3>
                  <p className="text-white/70 text-sm">
                    Rapid shutdown switch must be marked: "PHOTOVOLTAIC SYSTEM RAPID SHUTDOWN SWITCH" in capital letters. Mark shall be reflective red with white letters, minimum 3/8 inch height.
                  </p>
                </div>

                <div className="bg-white/5 rounded-xl p-6">
                  <h3 className="font-semibold text-orange-400 mb-2">690.31(G) - DC Conductor Routing</h3>
                  <p className="text-white/70 text-sm">
                    Where DC conductors are run inside a building, the conduit or raceway shall be marked every 10 feet with "WARNING: PHOTOVOLTAIC POWER SOURCE" using red background with white letters.
                  </p>
                </div>
              </div>
            </section>

            <section id="common-violations" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Common Code Violations</h2>

              <div className="space-y-4 my-6">
                <div className="bg-red-900/20 border border-red-500/30 rounded-xl p-6">
                  <h3 className="font-semibold text-red-400 mb-2">1. Non-Compliant Rapid Shutdown</h3>
                  <p className="text-white/70 text-sm">
                    Using string inverters without module-level rapid shutdown equipment. Systems installed after NEC 2017 adoption require rapid shutdown both inside and outside array boundary.
                  </p>
                </div>

                <div className="bg-red-900/20 border border-red-500/30 rounded-xl p-6">
                  <h3 className="font-semibold text-red-400 mb-2">2. Missing or Incorrect Labels</h3>
                  <p className="text-white/70 text-sm">
                    Common issues: missing rapid shutdown label at service, missing DC source label, incorrect voltage/current ratings, labels not durable for outdoor use.
                  </p>
                </div>

                <div className="bg-red-900/20 border border-red-500/30 rounded-xl p-6">
                  <h3 className="font-semibold text-red-400 mb-2">3. Improper Conductor Type</h3>
                  <p className="text-white/70 text-sm">
                    Using THHN exposed to sunlight or weather. USE-2 or PV Wire required for exposed rooftop applications. THWN-2 acceptable in conduit.
                  </p>
                </div>

                <div className="bg-red-900/20 border border-red-500/30 rounded-xl p-6">
                  <h3 className="font-semibold text-red-400 mb-2">4. Inadequate Module Grounding</h3>
                  <p className="text-white/70 text-sm">
                    Using unlisted grounding clips, missing grounding of every module frame, or improper bonding between rails. Each module must be bonded to grounding system.
                  </p>
                </div>

                <div className="bg-red-900/20 border border-red-500/30 rounded-xl p-6">
                  <h3 className="font-semibold text-red-400 mb-2">5. Backfed Breaker Issues</h3>
                  <p className="text-white/70 text-sm">
                    Solar breaker not listed for backfeed, exceeding 120% bus rating without proper calculation, or backfed breaker not at opposite end from main.
                  </p>
                </div>
              </div>
            </section>

            {/* CTA Section */}
            <section className="bg-gradient-to-r from-purple-900/30 to-cyan-900/30 rounded-2xl p-8 my-12">
              <h2 className="text-2xl font-display font-bold mb-4 text-center">
                Calculate Solar System Requirements Instantly
              </h2>
              <p className="text-white/70 mb-6 text-center">
                Size conductors, verify voltage limits, and ensure NEC 690 compliance with Ampora's electrical calculators. Access code requirements instantly with AI-powered assistance.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link
                  href="/calculators/wire-sizing"
                  className="px-6 py-3 bg-purple-600 text-white font-semibold rounded-full hover:bg-purple-500 transition-colors text-center"
                >
                  Wire Sizing Calculator
                </Link>
                <a
                  href="https://apps.apple.com/us/app/ampora/id6753693522"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-white text-black font-semibold rounded-full hover:bg-white/90 transition-colors text-center"
                >
                  Download App Free
                </a>
              </div>
            </section>

            {/* Related Articles */}
            <section className="mt-12">
              <h2 className="text-2xl font-display font-bold mb-6">Related Articles</h2>
              <div className="grid md:grid-cols-2 gap-4">
                <Link href="/blog/electrical-grounding-vs-bonding" className="bg-white/5 hover:bg-white/10 rounded-xl p-6 transition-colors">
                  <span className="text-purple-400 text-sm">NEC Code</span>
                  <h3 className="font-semibold mt-2">Grounding vs Bonding: Understanding the Difference</h3>
                </Link>
                <Link href="/blog/derating-factors-conductor-ampacity" className="bg-white/5 hover:bg-white/10 rounded-xl p-6 transition-colors">
                  <span className="text-cyan-400 text-sm">Calculations</span>
                  <h3 className="font-semibold mt-2">Conductor Derating Factors Guide</h3>
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
