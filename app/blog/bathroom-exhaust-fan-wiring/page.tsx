import { Metadata } from "next";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import { BlogPostingJsonLd, BreadcrumbJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Bathroom Exhaust Fan Wiring: Installation, Timer Switch & CFM Guide",
  description: "Complete guide to bathroom exhaust fan wiring and installation. Learn CFM sizing by room square footage, timer switch and humidity sensor wiring, fan/light/heater combo connections, duct sizing and routing, building code ventilation requirements, GFCI considerations, sone ratings, and common installation mistakes to avoid.",
  keywords: [
    "bathroom exhaust fan wiring",
    "bath fan installation",
    "exhaust fan timer switch",
    "bathroom fan CFM",
    "bathroom ventilation code",
    "fan light combo wiring",
    "exhaust fan duct size",
    "bathroom fan circuit",
    "humidity sensing fan",
    "exhaust fan switch wiring"
  ],
  alternates: {
    canonical: "https://amporalabs.com/blog/bathroom-exhaust-fan-wiring",
  },
  openGraph: {
    title: "Bathroom Exhaust Fan Wiring: Installation, Timer Switch & CFM Guide - Ampora",
    description: "Master bathroom exhaust fan wiring with this comprehensive guide covering CFM sizing, timer switches, humidity sensors, fan/light combos, duct routing, and code requirements.",
    url: "https://amporalabs.com/blog/bathroom-exhaust-fan-wiring",
    type: "article",
    publishedTime: "2026-03-04",
  },
};

function HeroIllustration() {
  return (
    <svg viewBox="0 0 400 180" className="w-full h-40 md:h-48" aria-label="Bathroom exhaust fan installation cross-section showing fan housing, ductwork, and roof vent">
      {/* Background */}
      <rect x="10" y="10" width="380" height="160" rx="4" fill="#1f2937" stroke="#374151" strokeWidth="1"/>

      {/* Ceiling line */}
      <line x1="30" y1="100" x2="250" y2="100" stroke="#6b7280" strokeWidth="2"/>
      <text x="35" y="115" fill="#9ca3af" fontSize="6">CEILING</text>

      {/* Attic space label */}
      <text x="140" y="30" textAnchor="middle" fill="#9ca3af" fontSize="7" fontWeight="bold">ATTIC SPACE</text>

      {/* Roof line */}
      <line x1="30" y1="40" x2="130" y2="20" stroke="#6b7280" strokeWidth="2"/>
      <line x1="130" y1="20" x2="250" y2="40" stroke="#6b7280" strokeWidth="2"/>

      {/* Fan housing in ceiling */}
      <rect x="100" y="80" width="60" height="20" rx="2" fill="#374151" stroke="#10b981" strokeWidth="1.5"/>
      <text x="130" y="94" textAnchor="middle" fill="#10b981" fontSize="7" fontWeight="bold">FAN</text>

      {/* Fan grille below ceiling */}
      <rect x="108" y="100" width="44" height="8" rx="1" fill="#1f2937" stroke="#6b7280" strokeWidth="1"/>
      <line x1="115" y1="101" x2="115" y2="107" stroke="#6b7280" strokeWidth="0.5"/>
      <line x1="122" y1="101" x2="122" y2="107" stroke="#6b7280" strokeWidth="0.5"/>
      <line x1="129" y1="101" x2="129" y2="107" stroke="#6b7280" strokeWidth="0.5"/>
      <line x1="136" y1="101" x2="136" y2="107" stroke="#6b7280" strokeWidth="0.5"/>
      <line x1="143" y1="101" x2="143" y2="107" stroke="#6b7280" strokeWidth="0.5"/>

      {/* Duct from fan to roof vent */}
      <rect x="125" y="45" width="16" height="35" rx="1" fill="#374151" stroke="#60a5fa" strokeWidth="1.5"/>
      <text x="133" y="68" textAnchor="middle" fill="#60a5fa" fontSize="5" transform="rotate(-90, 133, 68)">DUCT</text>

      {/* Roof vent cap */}
      <rect x="118" y="36" width="30" height="10" rx="2" fill="#374151" stroke="#f59e0b" strokeWidth="1.5"/>
      <path d="M120 36 L133 28 L146 36" fill="none" stroke="#f59e0b" strokeWidth="1.5"/>
      <text x="133" y="44" textAnchor="middle" fill="#f59e0b" fontSize="5">VENT CAP</text>

      {/* Arrow showing airflow */}
      <path d="M130 120 L130 112" stroke="#22d3ee" strokeWidth="1" markerEnd="url(#arrowUp)"/>
      <path d="M133 75 L133 52" stroke="#22d3ee" strokeWidth="1" strokeDasharray="3,2"/>
      <text x="145" y="130" fill="#22d3ee" fontSize="5">AIRFLOW</text>

      {/* Arrow marker */}
      <defs>
        <marker id="arrowUp" markerWidth="6" markerHeight="6" refX="3" refY="6" orient="auto">
          <path d="M1 6 L3 1 L5 6" fill="none" stroke="#22d3ee" strokeWidth="1"/>
        </marker>
      </defs>

      {/* Wiring from switch to fan */}
      <path d="M60 140 L60 90 L100 90" fill="none" stroke="#ef4444" strokeWidth="1.5" strokeDasharray="4,2"/>
      <text x="45" y="92" fill="#ef4444" fontSize="5">14/2 NM</text>

      {/* Switch box */}
      <rect x="48" y="140" width="24" height="18" rx="2" fill="#374151" stroke="#a78bfa" strokeWidth="1.5"/>
      <line x1="60" y1="144" x2="60" y2="154" stroke="#a78bfa" strokeWidth="2"/>
      <circle cx="60" cy="144" r="2" fill="#a78bfa"/>
      <text x="60" y="165" textAnchor="middle" fill="#a78bfa" fontSize="6">SWITCH</text>

      {/* Right side - Wiring diagram label */}
      <g transform="translate(270, 20)">
        <text x="50" y="10" textAnchor="middle" fill="#10b981" fontSize="7" fontWeight="bold">QUICK SPECS</text>

        {/* CFM spec */}
        <g transform="translate(0, 18)">
          <rect x="0" y="0" width="100" height="22" rx="3" fill="#10b981" fillOpacity="0.15" stroke="#10b981" strokeWidth="1"/>
          <text x="8" y="10" fill="#10b981" fontSize="6" fontWeight="bold">CFM Sizing</text>
          <text x="8" y="18" fill="#9ca3af" fontSize="5">1 CFM per sq ft</text>
        </g>

        {/* Circuit spec */}
        <g transform="translate(0, 46)">
          <rect x="0" y="0" width="100" height="22" rx="3" fill="#60a5fa" fillOpacity="0.15" stroke="#60a5fa" strokeWidth="1"/>
          <text x="8" y="10" fill="#60a5fa" fontSize="6" fontWeight="bold">Circuit</text>
          <text x="8" y="18" fill="#9ca3af" fontSize="5">15A or 20A, 120V</text>
        </g>

        {/* Duct spec */}
        <g transform="translate(0, 74)">
          <rect x="0" y="0" width="100" height="22" rx="3" fill="#f59e0b" fillOpacity="0.15" stroke="#f59e0b" strokeWidth="1"/>
          <text x="8" y="10" fill="#f59e0b" fontSize="6" fontWeight="bold">Duct Size</text>
          <text x="8" y="18" fill="#9ca3af" fontSize="5">4&quot; min (6&quot; preferred)</text>
        </g>

        {/* Noise spec */}
        <g transform="translate(0, 102)">
          <rect x="0" y="0" width="100" height="22" rx="3" fill="#a78bfa" fillOpacity="0.15" stroke="#a78bfa" strokeWidth="1"/>
          <text x="8" y="10" fill="#a78bfa" fontSize="6" fontWeight="bold">Noise Rating</text>
          <text x="8" y="18" fill="#9ca3af" fontSize="5">&lt;1.0 sone = quiet</text>
        </g>

        {/* Vent spec */}
        <g transform="translate(0, 130)">
          <rect x="0" y="0" width="100" height="22" rx="3" fill="#ef4444" fillOpacity="0.15" stroke="#ef4444" strokeWidth="1"/>
          <text x="8" y="10" fill="#ef4444" fontSize="6" fontWeight="bold">Vent To</text>
          <text x="8" y="18" fill="#9ca3af" fontSize="5">Exterior ONLY</text>
        </g>
      </g>

      {/* Room label */}
      <text x="130" y="140" textAnchor="middle" fill="#9ca3af" fontSize="7">BATHROOM</text>
    </svg>
  );
}

export default function BathroomExhaustFanWiringPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navigation />
      <div className="pt-20">
        <BreadcrumbJsonLd
          items={[
            { name: "Home", url: "https://amporalabs.com" },
            { name: "Blog", url: "https://amporalabs.com/blog" },
            { name: "Bathroom Exhaust Fan Wiring", url: "https://amporalabs.com/blog/bathroom-exhaust-fan-wiring" },
          ]}
        />
        <BlogPostingJsonLd
          headline="Bathroom Exhaust Fan Wiring: Installation, Timer Switch & CFM Guide"
          description="Complete guide to bathroom exhaust fan wiring covering CFM sizing, timer switches, humidity sensors, fan/light/heater combo wiring, duct routing, and building code requirements."
          datePublished="2026-03-04"
          dateModified="2026-03-04"
          url="https://amporalabs.com/blog/bathroom-exhaust-fan-wiring"
          wordCount={4800}
          keywords={["bathroom exhaust fan wiring", "bath fan installation", "exhaust fan timer switch", "fan light combo wiring", "bathroom ventilation code"]}
        />

        <article className="max-w-4xl mx-auto px-6 py-12">
          {/* Breadcrumb */}
          <nav className="text-sm text-white/60 mb-8">
            <Link href="/" className="hover:text-white">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/blog" className="hover:text-white">Blog</Link>
            <span className="mx-2">/</span>
            <span className="text-white">Bathroom Exhaust Fan Wiring</span>
          </nav>

          {/* Article Header */}
          <header className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <span className="px-3 py-1 bg-emerald-600/20 text-emerald-300 text-sm font-medium rounded-full">
                Installation
              </span>
              <span className="text-white/40 text-sm">18 min read</span>
              <span className="text-white/40 text-sm">March 4, 2026</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6 leading-tight">
              Bathroom Exhaust Fan Wiring: Installation, Timer Switch &amp; CFM Guide
            </h1>
            <p className="text-xl text-white/70">
              Proper bathroom ventilation prevents mold, moisture damage, and poor air quality. This guide covers everything electricians and homeowners need to know about bathroom exhaust fan wiring &mdash; from CFM sizing and building code requirements to timer switch wiring, humidity-sensing controls, fan/light/heater combo connections, duct routing, and the most common installation mistakes.
            </p>
          </header>

          <div className="mb-12 bg-gradient-to-br from-emerald-900/20 to-cyan-900/20 rounded-2xl p-6 border border-white/10">
            <HeroIllustration />
          </div>

          {/* Safety Warning */}
          <div className="bg-red-900/40 border-2 border-red-500/50 rounded-2xl p-6 mb-12">
            <div className="flex items-start gap-4">
              <div className="text-3xl">&#9888;</div>
              <div>
                <h3 className="font-display font-bold text-lg mb-2 text-red-400">Safety First</h3>
                <p className="text-white/80 text-sm">
                  Always turn off power at the circuit breaker before performing any electrical work. Verify the circuit is de-energized using a non-contact voltage tester. Bathroom wiring must comply with the NEC and local building codes. If you are not comfortable working with electrical wiring, hire a licensed electrician. Permit requirements vary by jurisdiction &mdash; check with your local authority having jurisdiction (AHJ) before starting work.
                </p>
              </div>
            </div>
          </div>

          {/* Table of Contents */}
          <div className="bg-white/5 rounded-2xl p-6 mb-12">
            <h2 className="font-display font-bold mb-4">In This Guide</h2>
            <ul className="space-y-2 text-white/70">
              <li><a href="#code-requirements" className="hover:text-purple-400">Building Code Ventilation Requirements</a></li>
              <li><a href="#cfm-sizing" className="hover:text-purple-400">CFM Sizing Guide (Room Size Calculation)</a></li>
              <li><a href="#fan-only-wiring" className="hover:text-purple-400">Fan-Only Wiring</a></li>
              <li><a href="#fan-light-combo" className="hover:text-purple-400">Fan/Light Combo Wiring</a></li>
              <li><a href="#fan-light-heater" className="hover:text-purple-400">Fan/Light/Heater Combo Wiring</a></li>
              <li><a href="#timer-switch" className="hover:text-purple-400">Timer Switch Options and Wiring</a></li>
              <li><a href="#humidity-sensing" className="hover:text-purple-400">Humidity-Sensing Fan Switches</a></li>
              <li><a href="#duct-sizing" className="hover:text-purple-400">Duct Sizing and Routing</a></li>
              <li><a href="#proper-venting" className="hover:text-purple-400">Proper Venting (Not Into the Attic!)</a></li>
              <li><a href="#gfci-considerations" className="hover:text-purple-400">GFCI Considerations</a></li>
              <li><a href="#noise-ratings" className="hover:text-purple-400">Noise Ratings (Sones)</a></li>
              <li><a href="#common-mistakes" className="hover:text-purple-400">Common Installation Mistakes</a></li>
            </ul>
          </div>

          {/* Article Content */}
          <div className="prose prose-invert prose-lg max-w-none">

            <section id="code-requirements" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Building Code Ventilation Requirements</h2>
              <p className="text-white/80 mb-4">
                Building codes require adequate ventilation in bathrooms to remove moisture, odors, and airborne contaminants. Understanding these requirements is the first step in any exhaust fan installation. For detailed bathroom wiring rules, see our <Link href="/blog/bathroom-electrical-code-requirements" className="text-purple-400 hover:text-purple-300">bathroom electrical code requirements</Link> guide.
              </p>

              <div className="grid md:grid-cols-2 gap-6 my-6">
                <div className="bg-white/5 rounded-xl p-6">
                  <h3 className="font-semibold text-emerald-400 mb-3">IRC (Residential)</h3>
                  <ul className="text-white/70 text-sm space-y-1">
                    <li><strong>IRC R303.3:</strong> Bathrooms must have natural ventilation (openable window) OR mechanical ventilation</li>
                    <li><strong>Minimum exhaust:</strong> 50 CFM intermittent or 20 CFM continuous</li>
                    <li><strong>Window option:</strong> Openable area of at least 1.5 sq ft (but a fan is always recommended)</li>
                    <li><strong>Exhaust destination:</strong> Must vent to the outdoors, never into an attic, soffit, or crawl space</li>
                  </ul>
                </div>
                <div className="bg-white/5 rounded-xl p-6">
                  <h3 className="font-semibold text-cyan-400 mb-3">IMC (Commercial)</h3>
                  <ul className="text-white/70 text-sm space-y-1">
                    <li><strong>IMC Table 403.3.1:</strong> Public restrooms require specific air change rates</li>
                    <li><strong>Toilet rooms:</strong> 75 CFM per water closet or urinal</li>
                    <li><strong>Locker/shower rooms:</strong> 0.5 CFM per sq ft minimum</li>
                    <li><strong>Make-up air:</strong> Must be provided when exhaust exceeds infiltration capacity</li>
                  </ul>
                </div>
              </div>

              <div className="bg-emerald-900/30 rounded-xl p-6 my-6">
                <h4 className="font-semibold text-emerald-400 mb-3">NEC Requirements for Bathroom Fan Circuits</h4>
                <ul className="text-white/70 space-y-2 text-sm">
                  <li><strong>NEC 210.11(C)(3):</strong> A minimum of one 20-amp <Link href="/blog/nec-article-210-branch-circuits-guide" className="text-purple-400 hover:text-purple-300">branch circuit</Link> is required for bathroom receptacles</li>
                  <li><strong>Fan circuit:</strong> The exhaust fan may be on the required bathroom receptacle circuit, a separate 15A or 20A lighting circuit, or its own dedicated circuit</li>
                  <li><strong>Wire sizing:</strong> 14 AWG for 15A circuits, 12 AWG for 20A circuits</li>
                  <li><strong>Fan/heater combos:</strong> Units with built-in heaters often require a dedicated 20A circuit due to higher current draw</li>
                  <li><strong>GFCI protection:</strong> Required for receptacles per <Link href="/blog/gfci-vs-afci-requirements" className="text-purple-400 hover:text-purple-300">NEC 210.8(A)(1)</Link>; fan circuits have specific rules (see GFCI section below)</li>
                </ul>
              </div>

              <p className="text-white/80 mb-4">
                Many jurisdictions adopt the IRC with amendments. Some local codes are stricter &mdash; for example, Washington state and California (Title 24) mandate mechanical ventilation in all bathrooms regardless of windows. Always check with your local AHJ for the applicable requirements in your area.
              </p>
            </section>

            <section id="cfm-sizing" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">CFM Sizing Guide (Room Size Calculation)</h2>
              <p className="text-white/80 mb-4">
                <strong>CFM (cubic feet per minute)</strong> measures the volume of air the fan can move. An undersized fan will not adequately remove moisture, while an oversized fan can create negative pressure problems and waste energy. The Home Ventilating Institute (HVI) recommends the following sizing method:
              </p>

              <div className="bg-white/5 rounded-xl p-6 my-6">
                <h4 className="font-semibold text-white mb-3">Standard Sizing Rule</h4>
                <p className="text-white/70 mb-3">
                  For bathrooms up to 100 sq ft, use <strong>1 CFM per square foot</strong> of floor area (minimum 50 CFM). For bathrooms larger than 100 sq ft, calculate based on the number of fixtures:
                </p>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-white/20">
                        <th className="text-left py-2 px-3 text-white/60">Fixture</th>
                        <th className="text-left py-2 px-3 text-white/60">CFM Required</th>
                      </tr>
                    </thead>
                    <tbody className="text-white/80">
                      <tr className="border-b border-white/10">
                        <td className="py-2 px-3">Toilet</td>
                        <td className="py-2 px-3 font-mono text-emerald-400">50 CFM</td>
                      </tr>
                      <tr className="border-b border-white/10">
                        <td className="py-2 px-3">Shower</td>
                        <td className="py-2 px-3 font-mono text-emerald-400">50 CFM</td>
                      </tr>
                      <tr className="border-b border-white/10">
                        <td className="py-2 px-3">Bathtub</td>
                        <td className="py-2 px-3 font-mono text-emerald-400">50 CFM</td>
                      </tr>
                      <tr className="border-b border-white/10">
                        <td className="py-2 px-3">Jetted tub / whirlpool</td>
                        <td className="py-2 px-3 font-mono text-emerald-400">100 CFM</td>
                      </tr>
                      <tr>
                        <td className="py-2 px-3">Enclosed toilet compartment</td>
                        <td className="py-2 px-3 font-mono text-emerald-400">50 CFM (separate fan)</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="bg-white/5 rounded-xl p-6 my-6">
                <h4 className="font-semibold text-cyan-400 mb-3">Sizing Examples</h4>
                <div className="grid md:grid-cols-3 gap-4 text-center">
                  <div>
                    <p className="text-2xl font-bold text-emerald-400">50 CFM</p>
                    <p className="text-white/60 text-sm">Small half-bath</p>
                    <p className="text-white/40 text-xs">Up to 50 sq ft</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-emerald-400">80 CFM</p>
                    <p className="text-white/60 text-sm">Standard full bath</p>
                    <p className="text-white/40 text-xs">~80 sq ft with tub/shower</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-emerald-400">150 CFM</p>
                    <p className="text-white/60 text-sm">Large master bath</p>
                    <p className="text-white/40 text-xs">Separate shower + tub + toilet</p>
                  </div>
                </div>
              </div>

              <div className="bg-orange-900/30 rounded-xl p-6 my-6">
                <h4 className="font-semibold text-orange-400 mb-3">Duct Length Derating</h4>
                <p className="text-white/70 text-sm">
                  Long duct runs and elbows reduce effective airflow. The fan&apos;s rated CFM assumes a short, straight duct run. For every additional foot of duct beyond the manufacturer&apos;s rating, you lose airflow. As a rule of thumb, add <strong>10-15% extra CFM capacity</strong> for every 90-degree elbow in the duct run, and size up one fan rating for duct runs exceeding 25 feet. Always check the fan manufacturer&apos;s duct length performance chart for accurate CFM at your specific duct configuration.
                </p>
              </div>
            </section>

            <section id="fan-only-wiring" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Fan-Only Wiring</h2>
              <p className="text-white/80 mb-4">
                The simplest exhaust fan installation uses a fan-only unit controlled by a single-pole switch. This is the most common setup for replacing an existing fan or adding ventilation to a bathroom that currently has none.
              </p>

              <div className="bg-white/5 rounded-xl p-6 my-6">
                <h4 className="font-semibold text-white mb-3">Wiring Components</h4>
                <ul className="space-y-2 text-white/70">
                  <li><strong>Cable from panel/junction:</strong> 14/2 NM-B (15A circuit) or 12/2 NM-B (20A circuit)</li>
                  <li><strong>Cable from switch to fan:</strong> 14/2 NM-B (or 12/2 if on 20A circuit)</li>
                  <li><strong>Switch:</strong> Single-pole toggle or decorator switch</li>
                  <li><strong>Box at switch:</strong> Single-gang old-work box (remodel) or new-work box</li>
                </ul>
              </div>

              <div className="space-y-4 my-6">
                <div className="bg-white/5 rounded-xl p-4 flex items-start gap-4">
                  <span className="bg-emerald-600 text-white text-sm font-bold px-3 py-1 rounded-full">1</span>
                  <div>
                    <p className="font-semibold text-white">Power enters switch box</p>
                    <p className="text-white/60 text-sm">Hot (black) from the breaker connects to one terminal on the single-pole switch. Neutral (white) passes through to the fan via a wire nut splice. Ground (bare or green) connects to the switch ground screw and continues to the fan.</p>
                  </div>
                </div>
                <div className="bg-white/5 rounded-xl p-4 flex items-start gap-4">
                  <span className="bg-emerald-600 text-white text-sm font-bold px-3 py-1 rounded-full">2</span>
                  <div>
                    <p className="font-semibold text-white">Switched hot to fan</p>
                    <p className="text-white/60 text-sm">The other switch terminal connects to the black wire in the 14/2 cable running to the fan housing. When the switch is ON, 120V is delivered to the fan motor.</p>
                  </div>
                </div>
                <div className="bg-white/5 rounded-xl p-4 flex items-start gap-4">
                  <span className="bg-emerald-600 text-white text-sm font-bold px-3 py-1 rounded-full">3</span>
                  <div>
                    <p className="font-semibold text-white">Connections at fan housing</p>
                    <p className="text-white/60 text-sm">Inside the fan junction box: black (switched hot) to black fan lead, white (neutral) to white fan lead, ground to green fan lead or metal housing ground screw.</p>
                  </div>
                </div>
              </div>

              <div className="bg-purple-900/30 rounded-xl p-6 my-6">
                <h4 className="font-semibold text-purple-400 mb-3">Pro Tip: Switch Loop Wiring</h4>
                <p className="text-white/70 text-sm">
                  If power arrives at the fan box first (common in retrofit installations), you can run a switch loop down to the switch. With 14/2 cable in a switch loop, the white wire must be re-identified (marked with black tape or marker) at both ends per NEC 200.7(C)(1), since it serves as the hot conductor in this configuration.
                </p>
              </div>
            </section>

            <section id="fan-light-combo" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Fan/Light Combo Wiring</h2>
              <p className="text-white/80 mb-4">
                Fan/light combination units are the most popular choice for bathrooms. They allow independent control of the fan and light, which is important &mdash; you want the fan to run after showering without necessarily needing the light on. This requires <strong>14/3 or 12/3 NM-B cable</strong> between the switch box and the fan unit.
              </p>

              <div className="bg-white/5 rounded-xl p-6 my-6">
                <h4 className="font-semibold text-white mb-3">Wiring with Two Separate Switches</h4>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-white/20">
                        <th className="text-left py-2 px-3 text-white/60">Wire Color</th>
                        <th className="text-left py-2 px-3 text-white/60">Function</th>
                        <th className="text-left py-2 px-3 text-white/60">Connection at Fan</th>
                      </tr>
                    </thead>
                    <tbody className="text-white/80">
                      <tr className="border-b border-white/10">
                        <td className="py-2 px-3 font-mono text-red-400">Black</td>
                        <td className="py-2 px-3">Switched hot &mdash; Fan</td>
                        <td className="py-2 px-3">Black fan motor lead</td>
                      </tr>
                      <tr className="border-b border-white/10">
                        <td className="py-2 px-3 font-mono text-red-400">Red</td>
                        <td className="py-2 px-3">Switched hot &mdash; Light</td>
                        <td className="py-2 px-3">Blue (or red) light lead</td>
                      </tr>
                      <tr className="border-b border-white/10">
                        <td className="py-2 px-3 font-mono text-white/80">White</td>
                        <td className="py-2 px-3">Neutral (shared)</td>
                        <td className="py-2 px-3">White neutral lead</td>
                      </tr>
                      <tr>
                        <td className="py-2 px-3 font-mono text-green-400">Bare/Green</td>
                        <td className="py-2 px-3">Equipment ground</td>
                        <td className="py-2 px-3">Green lead or housing ground</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <p className="text-white/80 mb-4">
                At the switch box, the incoming hot (black from power source) pigtails to both switches. One switch controls the black wire (fan), and the other switch controls the red wire (light). Both switches share the neutral and ground, which pass through to the fan housing.
              </p>

              <div className="bg-cyan-900/30 rounded-xl p-6 my-6">
                <h4 className="font-semibold text-cyan-400 mb-3">Using a Double-Rocker Switch</h4>
                <p className="text-white/70 text-sm">
                  A double-rocker (dual-function) switch fits in a single gang box and provides separate controls for fan and light. This is ideal for retrofit installations where you only have a single-gang box. The switch has two independent toggles but shares a common hot terminal. Wire it the same as two individual switches &mdash; hot to the common terminal, black to one output, red to the other output.
                </p>
              </div>
            </section>

            <section id="fan-light-heater" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Fan/Light/Heater Combo Wiring</h2>
              <p className="text-white/80 mb-4">
                Three-function bathroom units that combine a fan, light, and heater require careful wiring due to the heater&apos;s higher current draw. Most fan/light/heater combos draw 10-15 amps, and many manufacturers require a <strong>dedicated 20-amp circuit</strong> for these units.
              </p>

              <div className="bg-white/5 rounded-xl p-6 my-6">
                <h4 className="font-semibold text-white mb-3">Typical Wiring Requirements</h4>
                <ul className="space-y-2 text-white/70">
                  <li><strong>Circuit:</strong> Dedicated 20A circuit with 12 AWG wire (per manufacturer instructions)</li>
                  <li><strong>Cable to unit:</strong> 12/4 NM-B (4 conductors for 3 independent functions) or two 12/2 cables</li>
                  <li><strong>Switches:</strong> Three-function wall control (often a special combination switch plate from the manufacturer)</li>
                  <li><strong>Connections:</strong> Black = fan, red = heater, blue = light, white = neutral, green/bare = ground</li>
                </ul>
              </div>

              <div className="grid md:grid-cols-2 gap-6 my-6">
                <div className="bg-red-900/30 rounded-xl p-6">
                  <h3 className="font-semibold text-red-400 mb-3">Heater Wiring Warnings</h3>
                  <ul className="text-white/60 text-sm space-y-1">
                    <li><strong>Never on 15A circuit:</strong> Most heater elements draw 8-12A alone</li>
                    <li><strong>Follow manufacturer specs:</strong> Wire gauge and breaker size per installation manual</li>
                    <li><strong>No dimmer on heater:</strong> Never use a dimmer switch on the heater circuit</li>
                    <li><strong>Thermal protection:</strong> Unit must have built-in thermal cutoff</li>
                    <li><strong>Clearance:</strong> Maintain required clearances from combustible materials</li>
                  </ul>
                </div>
                <div className="bg-emerald-900/30 rounded-xl p-6">
                  <h3 className="font-semibold text-emerald-400 mb-3">Installation Best Practices</h3>
                  <ul className="text-white/60 text-sm space-y-1">
                    <li><strong>Dedicated circuit:</strong> Run a separate home run from the panel</li>
                    <li><strong>Verify amperage:</strong> Add fan + light + heater amps; must not exceed 80% of breaker rating</li>
                    <li><strong>Use manufacturer switch:</strong> Many units include a proprietary wall control</li>
                    <li><strong>Strain relief:</strong> Properly secure cable at the fan junction box</li>
                    <li><strong>Junction box size:</strong> Verify box fill per NEC 314.16</li>
                  </ul>
                </div>
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
                  <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/></svg><svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor" aria-hidden="true"><path d="M3 20.5V3.5c0-.59.34-1.11.84-1.35L13.69 12 3.84 21.85c-.5-.25-.84-.76-.84-1.35zm13.81-5.38L6.05 21.34l8.49-8.49 2.27 2.27zm3.35-4.31c.34.27.59.69.59 1.19 0 .5-.22.9-.57 1.18l-2.29 1.32L15.39 12l2.5-2.5 2.27 1.31zM6.05 2.66L16.81 8.88l-2.27 2.27L6.05 2.66z"/></svg>
                  Download Free
                </a>
              </div>
            </div>

            <section id="timer-switch" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Timer Switch Options and Wiring</h2>
              <p className="text-white/80 mb-4">
                Timer switches are the best upgrade for bathroom exhaust fans. They ensure the fan runs long enough after bathing to remove all moisture (typically 15-20 minutes), then shut off automatically. This prevents mold while eliminating the energy waste of fans left running indefinitely.
              </p>

              <div className="grid md:grid-cols-2 gap-6 my-6">
                <div className="bg-white/5 rounded-xl p-6">
                  <h3 className="font-semibold text-emerald-400 mb-3">Spring-Wound Timer</h3>
                  <ul className="text-white/70 text-sm space-y-1">
                    <li><strong>Type:</strong> Mechanical countdown (no neutral needed)</li>
                    <li><strong>Settings:</strong> Typically 5 to 60 minutes</li>
                    <li><strong>Wiring:</strong> 2-wire (hot in, switched hot out) &mdash; replaces any single-pole switch</li>
                    <li><strong>Pros:</strong> No neutral required, simple retrofit, no electricity when off</li>
                    <li><strong>Cons:</strong> No OFF position, audible ticking, limited precision</li>
                  </ul>
                </div>
                <div className="bg-white/5 rounded-xl p-6">
                  <h3 className="font-semibold text-cyan-400 mb-3">Electronic Timer</h3>
                  <ul className="text-white/70 text-sm space-y-1">
                    <li><strong>Type:</strong> Digital or touch-button electronic countdown</li>
                    <li><strong>Settings:</strong> Preset intervals (5/10/15/20/30/60 min) plus manual ON/OFF</li>
                    <li><strong>Wiring:</strong> 3-wire or 4-wire (most require a neutral)</li>
                    <li><strong>Pros:</strong> Silent, precise timing, ON/OFF capability, LED indicators</li>
                    <li><strong>Cons:</strong> Requires neutral wire, slightly more expensive</li>
                  </ul>
                </div>
              </div>

              <div className="bg-white/5 rounded-xl p-6 my-6">
                <h4 className="font-semibold text-white mb-3">Electronic Timer Wiring (Neutral Required)</h4>
                <div className="space-y-2 text-white/70 text-sm">
                  <p><strong>Line (hot in):</strong> Black wire from power source connects to the timer&apos;s LINE terminal (usually black lead)</p>
                  <p><strong>Load (switched hot out):</strong> Timer&apos;s LOAD terminal (usually blue or red lead) connects to the black wire going to the fan</p>
                  <p><strong>Neutral:</strong> Timer&apos;s neutral lead (white) connects to the neutral bundle (white wires) in the switch box</p>
                  <p><strong>Ground:</strong> Timer&apos;s ground lead (green) connects to the ground wires in the box</p>
                </div>
              </div>

              <div className="bg-orange-900/30 rounded-xl p-6 my-6">
                <h4 className="font-semibold text-orange-400 mb-3">NEC 404.2(C) &mdash; Neutral at Switch Boxes</h4>
                <p className="text-white/70 text-sm">
                  Since the 2011 NEC, a <strong>grounded conductor (neutral) is required at most switch locations</strong> per NEC 404.2(C). This requirement was specifically designed to accommodate electronic timers, occupancy sensors, and smart switches that require a neutral to operate. Exceptions exist for switch loops where a raceway or cable with extra conductors is impractical, but new construction should always include a neutral at switch boxes.
                </p>
              </div>
            </section>

            <section id="humidity-sensing" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Humidity-Sensing Fan Switches</h2>
              <p className="text-white/80 mb-4">
                Humidity-sensing switches (also called <strong>dehumidistat controls</strong>) automatically turn the fan on when moisture levels rise and off when the humidity returns to normal. They are the most hands-free solution for bathroom ventilation and are increasingly popular in energy-efficient construction.
              </p>

              <div className="bg-white/5 rounded-xl p-6 my-6">
                <h4 className="font-semibold text-white mb-3">How They Work</h4>
                <p className="text-white/70 mb-3">
                  The sensor detects <strong>relative humidity (RH)</strong> in the bathroom. When the RH rises above the set threshold (typically adjustable from 40% to 80%), the switch energizes the fan. The fan continues running until the RH drops back below the threshold, then shuts off automatically. Most models also include a manual override button and a minimum run time setting.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6 my-6">
                <div className="bg-emerald-900/20 rounded-xl p-6 border border-emerald-500/20">
                  <h3 className="font-semibold text-emerald-400 mb-3">Standalone Humidity Switch</h3>
                  <p className="text-white/60 text-sm mb-2">
                    Replaces a standard wall switch. Wired with hot, load, neutral, and ground (4-wire). The sensor is built into the switch faceplate. Adjustable sensitivity dial sets the humidity threshold. Some models include a motion sensor that also turns on the fan when someone enters.
                  </p>
                  <p className="text-white/60 text-sm"><strong>Best for:</strong> Retrofits, replacing existing switches</p>
                </div>
                <div className="bg-cyan-900/20 rounded-xl p-6 border border-cyan-500/20">
                  <h3 className="font-semibold text-cyan-400 mb-3">Fan with Built-In Humidity Sensor</h3>
                  <p className="text-white/60 text-sm mb-2">
                    Many modern exhaust fans include a built-in humidity sensor in the fan housing itself. The fan is wired to constant power (always hot) and operates automatically based on humidity. A standard switch can be wired in series to provide a manual override or master shutoff.
                  </p>
                  <p className="text-white/60 text-sm"><strong>Best for:</strong> New construction, full fan replacements</p>
                </div>
              </div>

              <div className="bg-purple-900/30 rounded-xl p-6 my-6">
                <h4 className="font-semibold text-purple-400 mb-3">Humidity Switch Wiring Notes</h4>
                <ul className="text-white/70 space-y-2 text-sm">
                  <li><strong>Neutral required:</strong> All humidity-sensing switches need a neutral connection to power the sensor electronics</li>
                  <li><strong>Sensitivity adjustment:</strong> Set the sensitivity lower in humid climates, higher in dry climates</li>
                  <li><strong>Combination units:</strong> Some models combine a humidity sensor + timer + manual switch in one device</li>
                  <li><strong>Fan/light models:</strong> Advanced sensors can independently control the fan (humidity-based) and light (manual or motion-based)</li>
                  <li><strong>Continuous low-speed:</strong> Some fans with built-in sensors offer a continuous low-speed mode for ongoing ventilation, ramping up to full speed when humidity spikes</li>
                </ul>
              </div>
            </section>

            <section id="duct-sizing" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Duct Sizing and Routing</h2>
              <p className="text-white/80 mb-4">
                Proper ductwork is as important as the fan itself. A powerful fan connected to undersized, kinked, or excessively long ductwork will not deliver its rated CFM. The duct is the exhaust pathway, and any restriction reduces performance.
              </p>

              <div className="overflow-x-auto my-6">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-white/20">
                      <th className="text-left py-3 px-4 text-white/60">Fan CFM Rating</th>
                      <th className="text-left py-3 px-4 text-white/60">Minimum Duct Diameter</th>
                      <th className="text-left py-3 px-4 text-white/60">Recommended Duct Diameter</th>
                    </tr>
                  </thead>
                  <tbody className="text-white/80">
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">50 CFM</td>
                      <td className="py-3 px-4 font-mono text-cyan-400">4 inches</td>
                      <td className="py-3 px-4 font-mono text-emerald-400">4 inches</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">80 CFM</td>
                      <td className="py-3 px-4 font-mono text-cyan-400">4 inches</td>
                      <td className="py-3 px-4 font-mono text-emerald-400">6 inches</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">110 CFM</td>
                      <td className="py-3 px-4 font-mono text-cyan-400">4 inches</td>
                      <td className="py-3 px-4 font-mono text-emerald-400">6 inches</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">150 CFM</td>
                      <td className="py-3 px-4 font-mono text-cyan-400">6 inches</td>
                      <td className="py-3 px-4 font-mono text-emerald-400">6 inches</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4">200+ CFM</td>
                      <td className="py-3 px-4 font-mono text-cyan-400">6 inches</td>
                      <td className="py-3 px-4 font-mono text-emerald-400">8 inches</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="grid md:grid-cols-2 gap-6 my-6">
                <div className="bg-emerald-900/20 rounded-xl p-6 border border-emerald-500/20">
                  <h3 className="font-semibold text-emerald-400 mb-3">Rigid Duct (Best)</h3>
                  <ul className="text-white/60 text-sm space-y-1">
                    <li>Smooth interior minimizes air resistance</li>
                    <li>Galvanized steel or PVC for long runs</li>
                    <li>Most efficient airflow of any duct type</li>
                    <li>Joints sealed with foil tape (not duct tape)</li>
                    <li>Best choice for long runs and vertical venting</li>
                  </ul>
                </div>
                <div className="bg-orange-900/20 rounded-xl p-6 border border-orange-500/20">
                  <h3 className="font-semibold text-orange-400 mb-3">Flexible Duct (Acceptable)</h3>
                  <ul className="text-white/60 text-sm space-y-1">
                    <li>Ribbed interior creates air resistance &mdash; reduces CFM</li>
                    <li>Easier to install in tight attic spaces</li>
                    <li>Must be pulled taut &mdash; sagging traps condensation</li>
                    <li>Keep runs as short and straight as possible</li>
                    <li>Insulated flex duct prevents condensation in cold attics</li>
                  </ul>
                </div>
              </div>

              <div className="bg-white/5 rounded-xl p-6 my-6">
                <h4 className="font-semibold text-white mb-3">Duct Routing Best Practices</h4>
                <ul className="text-white/70 space-y-2 text-sm">
                  <li><strong>Shortest path:</strong> Route the duct by the shortest practical path to the exterior</li>
                  <li><strong>Minimal elbows:</strong> Each 90-degree elbow is equivalent to approximately 5-10 feet of straight duct</li>
                  <li><strong>Slope for drainage:</strong> Pitch the duct slightly downward toward the exterior vent to drain condensation</li>
                  <li><strong>Insulate in cold climates:</strong> Wrap uninsulated duct with R-6 or higher insulation in unconditioned attic space to prevent condensation</li>
                  <li><strong>Support properly:</strong> Hang or strap ductwork every 4-6 feet to prevent sagging</li>
                  <li><strong>Seal all joints:</strong> Use foil-faced tape or mastic sealant at every connection &mdash; never use cloth duct tape</li>
                  <li><strong>No screws inside:</strong> Avoid sheet metal screws that protrude into the duct interior &mdash; they catch lint and impede airflow</li>
                </ul>
              </div>
            </section>

            <section id="proper-venting" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Proper Venting (Not Into the Attic!)</h2>
              <p className="text-white/80 mb-4">
                This is the single most important rule of exhaust fan installation: <strong>the fan must vent to the exterior of the building</strong>. Venting into an attic, soffit, crawl space, or wall cavity is a code violation and one of the most common causes of mold, rot, and structural damage in residential construction.
              </p>

              <div className="bg-red-900/40 border-2 border-red-500/50 rounded-xl p-6 my-6">
                <h4 className="font-semibold text-red-400 mb-3">Never Vent Into These Locations</h4>
                <ul className="text-white/70 space-y-2 text-sm">
                  <li><strong>Attic space:</strong> Warm moist air condenses on cold roof sheathing, causing mold, rot, and eventual structural failure</li>
                  <li><strong>Soffit vents:</strong> Moisture is drawn back into the attic through soffit ventilation, creating the same problems as venting directly into the attic</li>
                  <li><strong>Crawl spaces:</strong> Creates moisture damage to floor framing, insulation, and can promote mold growth</li>
                  <li><strong>Wall cavities:</strong> Trapped moisture rots framing and promotes mold inside walls</li>
                  <li><strong>Garage:</strong> Not an acceptable termination point per building codes</li>
                </ul>
              </div>

              <div className="bg-white/5 rounded-xl p-6 my-6">
                <h4 className="font-semibold text-white mb-3">Acceptable Exterior Termination Points</h4>
                <div className="grid md:grid-cols-3 gap-4 text-center my-4">
                  <div>
                    <p className="text-xl font-bold text-emerald-400">Roof Cap</p>
                    <p className="text-white/60 text-sm">Through-roof vent with weather cap and damper</p>
                    <p className="text-white/40 text-xs">Best for short, direct runs</p>
                  </div>
                  <div>
                    <p className="text-xl font-bold text-emerald-400">Wall Cap</p>
                    <p className="text-white/60 text-sm">Through-wall vent with louvered or spring-loaded damper</p>
                    <p className="text-white/40 text-xs">Easiest to install and maintain</p>
                  </div>
                  <div>
                    <p className="text-xl font-bold text-emerald-400">Gable Vent</p>
                    <p className="text-white/60 text-sm">Through gable end wall with vent cap</p>
                    <p className="text-white/40 text-xs">Good for horizontal duct runs</p>
                  </div>
                </div>
              </div>

              <div className="bg-cyan-900/30 rounded-xl p-6 my-6">
                <h4 className="font-semibold text-cyan-400 mb-3">Exterior Vent Cap Requirements</h4>
                <ul className="text-white/70 space-y-2 text-sm">
                  <li><strong>Damper or backflow preventer:</strong> Every vent cap must have a built-in damper to prevent cold air, rain, and pests from entering when the fan is off</li>
                  <li><strong>No screen mesh:</strong> Do not add insect screen over the vent opening &mdash; it clogs with lint and restricts airflow (the damper flap keeps pests out)</li>
                  <li><strong>Clearance from openings:</strong> Terminate at least 3 feet from any openable window, door, or air intake</li>
                  <li><strong>Weather sealing:</strong> Flash and caulk the vent cap properly to prevent water intrusion</li>
                </ul>
              </div>
            </section>

            <section id="gfci-considerations" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">GFCI Considerations</h2>
              <p className="text-white/80 mb-4">
                <Link href="/blog/gfci-vs-afci-requirements" className="text-purple-400 hover:text-purple-300">GFCI protection</Link> is critical in bathrooms due to the presence of water. However, the NEC requirements for exhaust fans are often misunderstood. Here is how GFCI rules apply to bathroom exhaust fan circuits:
              </p>

              <div className="bg-white/5 rounded-xl p-6 my-6">
                <h4 className="font-semibold text-white mb-3">NEC GFCI Requirements in Bathrooms</h4>
                <ul className="space-y-3 text-white/70">
                  <li>
                    <p><strong className="text-cyan-400">Receptacles (NEC 210.8(A)(1)):</strong> All 125V, 15A and 20A receptacles in bathrooms require GFCI protection. This is clear and absolute.</p>
                  </li>
                  <li>
                    <p><strong className="text-cyan-400">Exhaust fan on receptacle circuit:</strong> If the fan is connected to the same circuit as bathroom receptacles, it may be downstream of the GFCI protection. This is acceptable but can cause nuisance tripping.</p>
                  </li>
                  <li>
                    <p><strong className="text-cyan-400">Exhaust fan on dedicated or lighting circuit:</strong> A hardwired exhaust fan on its own circuit or on a lighting circuit is not specifically required to have GFCI protection by the NEC. However, some local jurisdictions add this requirement.</p>
                  </li>
                  <li>
                    <p><strong className="text-cyan-400">Fan/light combos over tub/shower:</strong> Per NEC 410.10(D), luminaires within the shower/tub zone (within 3 feet horizontally and 8 feet vertically of the tub rim) must be listed for damp or wet locations. GFCI protection is required for the lighting portion if within this zone.</p>
                  </li>
                </ul>
              </div>

              <div className="bg-orange-900/30 rounded-xl p-6 my-6">
                <h4 className="font-semibold text-orange-400 mb-3">Practical Recommendations</h4>
                <p className="text-white/70 text-sm">
                  Even when the NEC does not strictly require GFCI protection on a fan-only circuit, it is a best practice to provide it. If the fan motor develops an insulation fault, GFCI protection prevents a shock hazard &mdash; especially important in a wet environment. If nuisance tripping occurs with a motor load on a GFCI, try a GFCI breaker rather than a GFCI receptacle, as breakers tend to be more tolerant of motor inrush current.
                </p>
              </div>
            </section>

            <section id="noise-ratings" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Noise Ratings (Sones)</h2>
              <p className="text-white/80 mb-4">
                Fan noise is measured in <strong>sones</strong>, a unit of perceived loudness. Lower sone ratings mean quieter operation. The sone rating is one of the most important factors in customer satisfaction &mdash; a loud fan will be turned off early or not used at all, defeating the purpose of ventilation.
              </p>

              <div className="overflow-x-auto my-6">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-white/20">
                      <th className="text-left py-3 px-4 text-white/60">Sone Rating</th>
                      <th className="text-left py-3 px-4 text-white/60">Comparable Sound</th>
                      <th className="text-left py-3 px-4 text-white/60">Quality Level</th>
                    </tr>
                  </thead>
                  <tbody className="text-white/80">
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-mono text-emerald-400">0.3 - 0.5 sones</td>
                      <td className="py-3 px-4">Barely audible &mdash; rustling leaves</td>
                      <td className="py-3 px-4"><span className="text-emerald-400 font-semibold">Ultra-Quiet (Premium)</span></td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-mono text-emerald-400">0.5 - 1.0 sones</td>
                      <td className="py-3 px-4">Quiet refrigerator hum</td>
                      <td className="py-3 px-4"><span className="text-green-400 font-semibold">Quiet (Recommended)</span></td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-mono text-yellow-400">1.0 - 2.0 sones</td>
                      <td className="py-3 px-4">Moderate background noise</td>
                      <td className="py-3 px-4"><span className="text-yellow-400 font-semibold">Standard</span></td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-mono text-orange-400">2.0 - 3.0 sones</td>
                      <td className="py-3 px-4">Normal conversation volume</td>
                      <td className="py-3 px-4"><span className="text-orange-400 font-semibold">Noticeable</span></td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-mono text-red-400">3.0 - 4.0+ sones</td>
                      <td className="py-3 px-4">TV volume, hair dryer on low</td>
                      <td className="py-3 px-4"><span className="text-red-400 font-semibold">Loud (Budget models)</span></td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="bg-white/5 rounded-xl p-6 my-6">
                <h4 className="font-semibold text-white mb-3">Tips for Quiet Operation</h4>
                <ul className="text-white/70 space-y-2 text-sm">
                  <li><strong>Buy by sone rating, not price:</strong> The difference between a 3.0-sone and a 0.7-sone fan is dramatic</li>
                  <li><strong>Larger fan at lower speed:</strong> An 110 CFM fan running at 80 CFM is quieter than an 80 CFM fan running at full speed</li>
                  <li><strong>Rigid ductwork:</strong> Flexible duct amplifies vibration noise; rigid duct is quieter</li>
                  <li><strong>Isolation mounting:</strong> Use rubber or foam gaskets between the fan housing and framing to reduce vibration transfer</li>
                  <li><strong>Inline fans:</strong> Remote-mount inline fans installed in the attic are the quietest option &mdash; only a grille is visible in the bathroom</li>
                  <li><strong>Proper duct sizing:</strong> Undersized ducts create whooshing noise as air is forced through a restricted opening</li>
                </ul>
              </div>
            </section>

            <section id="common-mistakes" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Common Installation Mistakes</h2>
              <p className="text-white/80 mb-4">
                Bathroom exhaust fan installations are straightforward, but these common mistakes reduce performance, create code violations, or lead to moisture damage. Avoid these pitfalls for a professional-quality installation:
              </p>

              <div className="grid md:grid-cols-2 gap-4 my-6">
                <div className="bg-red-900/20 rounded-xl p-6 border border-red-500/20">
                  <h4 className="font-semibold text-red-400 mb-3">Venting Into the Attic</h4>
                  <p className="text-white/60 text-sm">
                    The #1 mistake. The duct terminates in the attic space rather than passing through the roof or wall to the exterior. Moisture condenses on roof sheathing and framing, causing mold, wood rot, and potential structural failure over time.
                  </p>
                </div>
                <div className="bg-red-900/20 rounded-xl p-6 border border-red-500/20">
                  <h4 className="font-semibold text-red-400 mb-3">Undersized Fan</h4>
                  <p className="text-white/60 text-sm">
                    Installing a 50 CFM fan in a large master bathroom. The fan cannot move enough air to remove moisture effectively, leading to chronic humidity problems. Always size the fan to the room using the 1 CFM per sq ft rule.
                  </p>
                </div>
                <div className="bg-red-900/20 rounded-xl p-6 border border-red-500/20">
                  <h4 className="font-semibold text-red-400 mb-3">Flexible Duct Sagging</h4>
                  <p className="text-white/60 text-sm">
                    Leaving flex duct lying in loops across attic joists. Low spots trap condensation water, restrict airflow, and eventually grow mold. Flex duct must be pulled taut and supported every 4-6 feet.
                  </p>
                </div>
                <div className="bg-red-900/20 rounded-xl p-6 border border-red-500/20">
                  <h4 className="font-semibold text-red-400 mb-3">No Damper / Backflow</h4>
                  <p className="text-white/60 text-sm">
                    Missing or stuck damper at the exterior vent cap. Without a working damper, cold air drafts back through the duct into the bathroom. Insects and pests can also enter through an open duct.
                  </p>
                </div>
                <div className="bg-red-900/20 rounded-xl p-6 border border-red-500/20">
                  <h4 className="font-semibold text-red-400 mb-3">Duct Tape on Joints</h4>
                  <p className="text-white/60 text-sm">
                    Using cloth duct tape instead of foil tape or mastic. Cloth duct tape dries out and falls off within 1-2 years, leaving duct joints unsealed and leaking moisture-laden air into the attic or wall cavity.
                  </p>
                </div>
                <div className="bg-red-900/20 rounded-xl p-6 border border-red-500/20">
                  <h4 className="font-semibold text-red-400 mb-3">Undersized Ductwork</h4>
                  <p className="text-white/60 text-sm">
                    Connecting a high-CFM fan to a 3-inch or 4-inch duct when 6-inch is needed. This chokes airflow, increases noise, and prevents the fan from delivering its rated CFM. Match duct size to fan rating.
                  </p>
                </div>
                <div className="bg-red-900/20 rounded-xl p-6 border border-red-500/20">
                  <h4 className="font-semibold text-red-400 mb-3">Fan Not Positioned Correctly</h4>
                  <p className="text-white/60 text-sm">
                    Placing the fan far from the shower/tub area. The fan should be positioned directly over or adjacent to the shower/tub to capture moisture at the source. For large bathrooms, consider two fans or a fan positioned between the shower and toilet.
                  </p>
                </div>
                <div className="bg-red-900/20 rounded-xl p-6 border border-red-500/20">
                  <h4 className="font-semibold text-red-400 mb-3">No Insulation on Duct</h4>
                  <p className="text-white/60 text-sm">
                    Running uninsulated duct through a cold attic. Warm moist exhaust air condenses inside the duct, drips back down into the fan housing, and stains the ceiling. Insulate all duct runs through unconditioned spaces.
                  </p>
                </div>
              </div>

              <div className="bg-cyan-900/30 rounded-xl p-6 my-6">
                <h4 className="font-semibold text-cyan-400 mb-3">Installation Quality Checklist</h4>
                <ul className="text-white/70 space-y-2 text-sm">
                  <li>&#9744; Fan CFM properly sized for room square footage</li>
                  <li>&#9744; Duct sized to match fan output port (4&quot; or 6&quot;)</li>
                  <li>&#9744; Duct routed to exterior wall or roof with proper vent cap</li>
                  <li>&#9744; All duct joints sealed with foil tape or mastic</li>
                  <li>&#9744; Duct insulated in unconditioned spaces</li>
                  <li>&#9744; Duct supported every 4-6 feet, no sagging</li>
                  <li>&#9744; Exterior vent cap has working damper</li>
                  <li>&#9744; Fan housing properly secured to framing</li>
                  <li>&#9744; Electrical connections made in approved junction box</li>
                  <li>&#9744; Timer or humidity switch installed for automatic operation</li>
                  <li>&#9744; Fan tested for proper airflow (tissue paper test at grille)</li>
                  <li>&#9744; No air leaks at housing-to-ceiling connection</li>
                </ul>
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

            {/* Related Articles */}
            <section className="mt-12">
              <h2 className="text-2xl font-display font-bold mb-6">Related Articles</h2>
              <div className="grid md:grid-cols-2 gap-4">
                <Link href="/blog/bathroom-electrical-code-requirements" className="bg-white/5 hover:bg-white/10 rounded-xl p-6 transition-colors">
                  <span className="text-purple-400 text-sm">NEC Code</span>
                  <h3 className="font-semibold mt-2">Bathroom Electrical Code Requirements</h3>
                </Link>
                <Link href="/blog/gfci-vs-afci-requirements" className="bg-white/5 hover:bg-white/10 rounded-xl p-6 transition-colors">
                  <span className="text-purple-400 text-sm">NEC Code</span>
                  <h3 className="font-semibold mt-2">GFCI vs AFCI: Protection Requirements Guide</h3>
                </Link>
                <Link href="/blog/ceiling-fan-wiring-installation" className="bg-white/5 hover:bg-white/10 rounded-xl p-6 transition-colors">
                  <span className="text-emerald-400 text-sm">Installation</span>
                  <h3 className="font-semibold mt-2">Ceiling Fan Wiring & Installation Guide</h3>
                </Link>
                <Link href="/blog/recessed-lighting-installation-guide" className="bg-white/5 hover:bg-white/10 rounded-xl p-6 transition-colors">
                  <span className="text-emerald-400 text-sm">Installation</span>
                  <h3 className="font-semibold mt-2">Recessed Lighting Installation Guide</h3>
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
