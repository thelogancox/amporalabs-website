import { Metadata } from "next";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import { BlogPostingJsonLd, BreadcrumbJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Detached Building Electrical: Feeding Garages, Shops & ADUs Guide",
  description: "Complete guide to detached building electrical installations including detached garage wiring, ADU electrical requirements, separate building feeders, sub-panel installation in detached buildings, overhead vs underground feeder options, disconnect requirements per NEC 225, and grounding at a second building.",
  keywords: [
    "detached garage electrical",
    "ADU electrical requirements",
    "feeding a detached building",
    "detached building sub panel",
    "overhead vs underground feeder",
    "separate building disconnect",
    "detached garage wiring",
    "barn electrical wiring",
    "workshop electrical feed",
    "accessory dwelling unit electrical"
  ],
  alternates: {
    canonical: "https://amporalabs.com/blog/detached-building-electrical-guide",
  },
  openGraph: {
    title: "Detached Building Electrical: Feeding Garages, Shops & ADUs Guide - Ampora",
    description: "Master detached building electrical installations with this comprehensive guide covering feeders, sub-panels, disconnects, grounding, ADU requirements, and NEC 225 compliance.",
    url: "https://amporalabs.com/blog/detached-building-electrical-guide",
    type: "article",
    publishedTime: "2026-03-04",
  },
};

function HeroIllustration() {
  return (
    <svg viewBox="0 0 400 180" className="w-full h-40 md:h-48" aria-label="House with feeder running to detached garage showing sub-panel and disconnect">
      {/* Background */}
      <rect x="10" y="10" width="380" height="160" rx="4" fill="#1f2937" stroke="#374151" strokeWidth="1"/>

      {/* Ground Line */}
      <line x1="20" y1="145" x2="380" y2="145" stroke="#4b5563" strokeWidth="1.5"/>

      {/* Main House */}
      <g transform="translate(30, 50)">
        {/* House body */}
        <rect x="0" y="40" width="80" height="55" fill="#1e3a5f" stroke="#60a5fa" strokeWidth="1.5"/>
        {/* Roof */}
        <polygon points="-5,40 40,10 85,40" fill="none" stroke="#60a5fa" strokeWidth="1.5"/>
        {/* Door */}
        <rect x="32" y="65" width="16" height="30" fill="#0f172a" stroke="#60a5fa" strokeWidth="1"/>
        {/* Window */}
        <rect x="10" y="52" width="14" height="14" fill="#0f172a" stroke="#60a5fa" strokeWidth="1"/>
        <line x1="17" y1="52" x2="17" y2="66" stroke="#60a5fa" strokeWidth="0.5"/>
        <line x1="10" y1="59" x2="24" y2="59" stroke="#60a5fa" strokeWidth="0.5"/>
        {/* Main Panel Label */}
        <rect x="60" y="52" width="14" height="20" fill="#22c55e" fillOpacity="0.3" stroke="#22c55e" strokeWidth="1"/>
        <text x="67" y="65" textAnchor="middle" fill="#22c55e" fontSize="5" fontWeight="bold">MP</text>
        {/* House Label */}
        <text x="40" y="104" textAnchor="middle" fill="#9ca3af" fontSize="6">MAIN HOUSE</text>
      </g>

      {/* Underground Feeder Path */}
      <g>
        {/* Conduit going down from house panel */}
        <line x1="127" y1="122" x2="127" y2="145" stroke="#f59e0b" strokeWidth="2" strokeDasharray="4,2"/>
        {/* Underground run */}
        <line x1="127" y1="150" x2="270" y2="150" stroke="#f59e0b" strokeWidth="2" strokeDasharray="4,2"/>
        {/* Conduit going up to detached building */}
        <line x1="270" y1="150" x2="270" y2="122" stroke="#f59e0b" strokeWidth="2" strokeDasharray="4,2"/>
        {/* Underground label */}
        <text x="198" y="162" textAnchor="middle" fill="#f59e0b" fontSize="5.5" fontWeight="bold">UNDERGROUND FEEDER (18&quot; MIN)</text>
      </g>

      {/* Overhead Feeder Path (shown as alternate) */}
      <g opacity="0.4">
        <path d="M 110 60 Q 198 20 285 60" fill="none" stroke="#22d3ee" strokeWidth="1.5" strokeDasharray="6,3"/>
        <text x="198" y="28" textAnchor="middle" fill="#22d3ee" fontSize="5">OVERHEAD (ALT)</text>
      </g>

      {/* Detached Building */}
      <g transform="translate(240, 50)">
        {/* Building body */}
        <rect x="0" y="30" width="120" height="65" fill="#1e3a5f" stroke="#60a5fa" strokeWidth="1.5"/>
        {/* Roof */}
        <polygon points="-5,30 60,5 125,30" fill="none" stroke="#60a5fa" strokeWidth="1.5"/>
        {/* Garage door */}
        <rect x="10" y="55" width="40" height="40" fill="#0f172a" stroke="#60a5fa" strokeWidth="1"/>
        <line x1="10" y1="65" x2="50" y2="65" stroke="#60a5fa" strokeWidth="0.5"/>
        <line x1="10" y1="75" x2="50" y2="75" stroke="#60a5fa" strokeWidth="0.5"/>
        <line x1="10" y1="85" x2="50" y2="85" stroke="#60a5fa" strokeWidth="0.5"/>
        {/* Disconnect */}
        <rect x="62" y="42" width="12" height="16" fill="#ef4444" fillOpacity="0.3" stroke="#ef4444" strokeWidth="1"/>
        <text x="68" y="53" textAnchor="middle" fill="#ef4444" fontSize="4.5" fontWeight="bold">DC</text>
        {/* Sub-Panel */}
        <rect x="82" y="42" width="14" height="20" fill="#a855f7" fillOpacity="0.3" stroke="#a855f7" strokeWidth="1"/>
        <text x="89" y="55" textAnchor="middle" fill="#a855f7" fontSize="5" fontWeight="bold">SP</text>
        {/* Grounding electrode */}
        <line x1="100" y1="62" x2="100" y2="95" stroke="#22c55e" strokeWidth="1.5"/>
        <line x1="94" y1="88" x2="106" y2="88" stroke="#22c55e" strokeWidth="1.5"/>
        <line x1="96" y1="91" x2="104" y2="91" stroke="#22c55e" strokeWidth="1"/>
        <line x1="98" y1="94" x2="102" y2="94" stroke="#22c55e" strokeWidth="0.8"/>
        {/* Building Label */}
        <text x="60" y="104" textAnchor="middle" fill="#9ca3af" fontSize="6">DETACHED BUILDING</text>
      </g>

      {/* Legend */}
      <g transform="translate(140, 14)">
        <rect x="0" y="0" width="120" height="30" rx="3" fill="#111827" stroke="#374151" strokeWidth="0.5"/>
        <rect x="6" y="5" width="8" height="4" fill="#22c55e" fillOpacity="0.3" stroke="#22c55e" strokeWidth="0.8"/>
        <text x="18" y="9" fill="#9ca3af" fontSize="4.5">Main Panel</text>
        <rect x="6" y="13" width="8" height="4" fill="#ef4444" fillOpacity="0.3" stroke="#ef4444" strokeWidth="0.8"/>
        <text x="18" y="17" fill="#9ca3af" fontSize="4.5">Disconnect</text>
        <rect x="6" y="21" width="8" height="4" fill="#a855f7" fillOpacity="0.3" stroke="#a855f7" strokeWidth="0.8"/>
        <text x="18" y="25" fill="#9ca3af" fontSize="4.5">Sub-Panel</text>
        <line x1="65" y1="7" x2="78" y2="7" stroke="#f59e0b" strokeWidth="1.5" strokeDasharray="3,1.5"/>
        <text x="82" y="9" fill="#9ca3af" fontSize="4.5">Underground</text>
        <line x1="65" y1="15" x2="78" y2="15" stroke="#22d3ee" strokeWidth="1" strokeDasharray="3,1.5"/>
        <text x="82" y="17" fill="#9ca3af" fontSize="4.5">Overhead</text>
        <line x1="65" y1="23" x2="78" y2="23" stroke="#22c55e" strokeWidth="1.5"/>
        <text x="82" y="25" fill="#9ca3af" fontSize="4.5">Ground Rod</text>
      </g>
    </svg>
  );
}

export default function DetachedBuildingElectricalGuidePage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navigation />
      <div className="pt-20">
        <BreadcrumbJsonLd
          items={[
            { name: "Home", url: "https://amporalabs.com" },
            { name: "Blog", url: "https://amporalabs.com/blog" },
            { name: "Detached Building Electrical Guide", url: "https://amporalabs.com/blog/detached-building-electrical-guide" },
          ]}
        />
        <BlogPostingJsonLd
          headline="Detached Building Electrical: Feeding Garages, Shops & ADUs Guide"
          description="Complete guide to detached building electrical installations covering feeders, sub-panels, disconnects, grounding, ADU requirements, and NEC 225 compliance."
          datePublished="2026-03-04"
          dateModified="2026-03-04"
          url="https://amporalabs.com/blog/detached-building-electrical-guide"
          wordCount={4800}
          keywords={["detached building electrical", "detached garage wiring", "ADU electrical", "sub-panel installation", "NEC 225"]}
        />

        <article className="max-w-4xl mx-auto px-6 py-12">
          {/* Breadcrumb */}
          <nav className="text-sm text-white/60 mb-8">
            <Link href="/" className="hover:text-white">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/blog" className="hover:text-white">Blog</Link>
            <span className="mx-2">/</span>
            <span className="text-white">Detached Building Electrical Guide</span>
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
              Detached Building Electrical: Feeding Garages, Shops &amp; ADUs
            </h1>
            <p className="text-xl text-white/70">
              Running electrical power to a detached garage, workshop, barn, or accessory dwelling unit (ADU) is one of the most common residential and light commercial projects. This guide covers the complete process from planning the feeder route and sizing conductors through disconnect requirements, sub-panel installation, grounding at the second building per NEC Article 225, and the special considerations for ADUs.
            </p>
          </header>

          <div className="mb-12 bg-gradient-to-br from-emerald-900/20 to-cyan-900/20 rounded-2xl p-6 border border-white/10">
            <HeroIllustration />
          </div>

          {/* Important Notice */}
          <div className="bg-yellow-900/40 border-2 border-yellow-500/50 rounded-2xl p-6 mb-12">
            <div className="flex items-start gap-4">
              <div className="text-3xl">&#9888;</div>
              <div>
                <h3 className="font-display font-bold text-lg mb-2 text-yellow-400">Permits and Professional Installation</h3>
                <p className="text-white/80 text-sm">
                  Electrical work feeding a detached building requires a permit in virtually all jurisdictions. The work must comply with the current edition of the NEC adopted locally and may need to be performed or supervised by a licensed electrician. Always verify requirements with your local authority having jurisdiction (AHJ) before beginning work.
                </p>
              </div>
            </div>
          </div>

          {/* Table of Contents */}
          <div className="bg-white/5 rounded-2xl p-6 mb-12">
            <h2 className="font-display font-bold mb-4">In This Guide</h2>
            <ul className="space-y-2 text-white/70">
              <li><a href="#planning-the-feed" className="hover:text-purple-400">Planning the Electrical Feed</a></li>
              <li><a href="#overhead-vs-underground" className="hover:text-purple-400">Overhead vs Underground Feeder Options</a></li>
              <li><a href="#feeder-conductor-sizing" className="hover:text-purple-400">Feeder Conductor Sizing</a></li>
              <li><a href="#disconnect-requirements" className="hover:text-purple-400">Disconnect Requirements (NEC 225.31)</a></li>
              <li><a href="#sub-panel-installation" className="hover:text-purple-400">Sub-Panel Installation in the Detached Building</a></li>
              <li><a href="#grounding-second-building" className="hover:text-purple-400">Grounding at the Second Building</a></li>
              <li><a href="#nec-225-requirements" className="hover:text-purple-400">NEC Article 225 Key Requirements</a></li>
              <li><a href="#adu-considerations" className="hover:text-purple-400">ADU-Specific Considerations</a></li>
              <li><a href="#load-calculations" className="hover:text-purple-400">Load Calculations for Detached Buildings</a></li>
              <li><a href="#permit-inspection" className="hover:text-purple-400">Permit and Inspection Requirements</a></li>
              <li><a href="#common-mistakes" className="hover:text-purple-400">Common Mistakes to Avoid</a></li>
            </ul>
          </div>

          {/* Article Content */}
          <div className="prose prose-invert prose-lg max-w-none">

            <section id="planning-the-feed" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Planning the Electrical Feed</h2>
              <p className="text-white/80 mb-4">
                Before running any wire, you need to determine the <strong>total load</strong> the detached building will carry, the <strong>distance</strong> from the main panel to the new sub-panel, and the <strong>method of routing</strong> the feeder (overhead or underground). These three factors drive every other decision in the project.
              </p>

              <div className="grid md:grid-cols-2 gap-6 my-6">
                <div className="bg-white/5 rounded-xl p-6">
                  <h3 className="font-semibold text-cyan-400 mb-3">Key Planning Questions</h3>
                  <ul className="text-white/70 text-sm space-y-2">
                    <li><strong>What loads will the building serve?</strong> Lights, receptacles, power tools, welders, EV chargers, HVAC, hot tub, kitchen appliances?</li>
                    <li><strong>How far is the building?</strong> Measure the actual wire run, not the straight-line distance. Account for vertical runs and routing around obstacles.</li>
                    <li><strong>Is 120V sufficient or do you need 240V?</strong> Most detached buildings need a 240V feed for sub-panel flexibility.</li>
                    <li><strong>Will you need a separate meter?</strong> ADUs may require their own utility meter depending on local rules.</li>
                    <li><strong>What is the existing main panel capacity?</strong> Verify the main panel has spare capacity and available breaker spaces for the new feeder.</li>
                  </ul>
                </div>
                <div className="bg-white/5 rounded-xl p-6">
                  <h3 className="font-semibold text-emerald-400 mb-3">Typical Building Types</h3>
                  <ul className="text-white/70 text-sm space-y-2">
                    <li><strong>Basic garage:</strong> 60A feeder, lighting and receptacles, maybe a garage door opener</li>
                    <li><strong>Workshop/shop:</strong> 60-100A feeder, 240V tools, welders, compressors, dust collection</li>
                    <li><strong>Barn/agricultural:</strong> 60-200A feeder, lighting, motors, heaters, well pump</li>
                    <li><strong>ADU/guest house:</strong> 60-100A feeder (or separate service), full kitchen, HVAC, laundry</li>
                    <li><strong>Pool house:</strong> 60A feeder, GFCI-protected circuits, pool equipment, outdoor kitchen</li>
                  </ul>
                </div>
              </div>

              <div className="bg-white/5 rounded-xl p-6 my-6">
                <h4 className="font-semibold text-white mb-3">Step-by-Step Planning Process</h4>
                <ol className="text-white/70 space-y-2 text-sm list-decimal list-inside">
                  <li>List every load the building will serve, both now and in the foreseeable future</li>
                  <li>Perform a <Link href="/blog/residential-load-calculations" className="text-purple-400 hover:text-purple-300">load calculation</Link> to determine the minimum feeder ampacity</li>
                  <li>Measure the feeder route distance from the main panel to the detached building panel location</li>
                  <li>Calculate <Link href="/blog/how-to-calculate-voltage-drop" className="text-purple-400 hover:text-purple-300">voltage drop</Link> and upsize conductors if needed</li>
                  <li>Choose overhead or underground routing based on site conditions and local codes</li>
                  <li>Verify main panel capacity can support the additional feeder load</li>
                  <li>Contact your local building department for permit requirements</li>
                </ol>
              </div>
            </section>

            <section id="overhead-vs-underground" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Overhead vs Underground Feeder Options</h2>
              <p className="text-white/80 mb-4">
                The two primary methods for routing a feeder between buildings are <strong>overhead (aerial)</strong> and <strong>underground</strong>. Each method has distinct advantages, code requirements, and cost implications. Understanding both options helps you make the right choice for your specific installation.
              </p>

              <div className="grid md:grid-cols-2 gap-6 my-6">
                <div className="bg-white/5 rounded-xl p-6 border border-cyan-500/20">
                  <h3 className="font-semibold text-cyan-400 mb-3">Overhead (Aerial) Feeder</h3>
                  <ul className="text-white/60 text-sm space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="text-green-400 mt-0.5">&#10003;</span>
                      <span>Lower material cost &mdash; no trenching or conduit burial</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-400 mt-0.5">&#10003;</span>
                      <span>Faster installation for shorter spans</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-400 mt-0.5">&#10003;</span>
                      <span>No disruption to landscaping or hardscaping</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-400 mt-0.5">&#10007;</span>
                      <span>Minimum clearances required (10 ft over grade, 12 ft over driveways, 18 ft over roads)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-400 mt-0.5">&#10007;</span>
                      <span>Exposed to weather, falling trees, and ice loading</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-400 mt-0.5">&#10007;</span>
                      <span>Less aesthetically pleasing</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-400 mt-0.5">&#10007;</span>
                      <span>May require mast, guy wires, or pole for long spans</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-white/5 rounded-xl p-6 border border-purple-500/20">
                  <h3 className="font-semibold text-purple-400 mb-3">Underground Feeder</h3>
                  <ul className="text-white/60 text-sm space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="text-green-400 mt-0.5">&#10003;</span>
                      <span>Clean appearance &mdash; no visible wires</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-400 mt-0.5">&#10003;</span>
                      <span>Protected from weather, ice, and falling debris</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-400 mt-0.5">&#10003;</span>
                      <span>No clearance height restrictions</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-400 mt-0.5">&#10003;</span>
                      <span>Longer lifespan and fewer maintenance issues</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-400 mt-0.5">&#10007;</span>
                      <span>Higher cost &mdash; trenching labor and conduit materials</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-400 mt-0.5">&#10007;</span>
                      <span>Must meet burial depth requirements (18&quot;-24&quot; depending on method)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-400 mt-0.5">&#10007;</span>
                      <span>Disrupts existing landscaping during installation</span>
                    </li>
                  </ul>
                </div>
              </div>

              <h3 className="text-xl font-display font-semibold mb-3 text-cyan-400">Underground Burial Depths (NEC Table 300.5)</h3>
              <div className="overflow-x-auto my-6">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-white/20">
                      <th className="text-left py-3 px-4 text-white/60">Wiring Method</th>
                      <th className="text-left py-3 px-4 text-white/60">Under Buildings</th>
                      <th className="text-left py-3 px-4 text-white/60">Under Driveways</th>
                      <th className="text-left py-3 px-4 text-white/60">Under Yard/Garden</th>
                    </tr>
                  </thead>
                  <tbody className="text-white/80">
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">RMC or IMC (Rigid Metal Conduit)</td>
                      <td className="py-3 px-4 font-mono text-cyan-400">0 in (on slab)</td>
                      <td className="py-3 px-4 font-mono text-cyan-400">6 in</td>
                      <td className="py-3 px-4 font-mono text-cyan-400">6 in</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">PVC Schedule 80 Conduit</td>
                      <td className="py-3 px-4 font-mono text-cyan-400">0 in (on slab)</td>
                      <td className="py-3 px-4 font-mono text-cyan-400">18 in</td>
                      <td className="py-3 px-4 font-mono text-cyan-400">18 in</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">UF-B Cable (Direct Burial)</td>
                      <td className="py-3 px-4 font-mono text-cyan-400">0 in (in raceway)</td>
                      <td className="py-3 px-4 font-mono text-cyan-400">24 in</td>
                      <td className="py-3 px-4 font-mono text-cyan-400">24 in</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4">PVC Schedule 40 Conduit</td>
                      <td className="py-3 px-4 font-mono text-cyan-400">0 in (on slab)</td>
                      <td className="py-3 px-4 font-mono text-cyan-400">18 in</td>
                      <td className="py-3 px-4 font-mono text-cyan-400">18 in</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="bg-orange-900/30 rounded-xl p-6 my-6">
                <h4 className="font-semibold text-orange-400 mb-3">Underground Installation Tips</h4>
                <ul className="text-white/70 space-y-2 text-sm">
                  <li><strong>Call 811:</strong> Always call before you dig to have underground utilities marked. This is required by law in all 50 states.</li>
                  <li><strong>Use sweeps, not elbows:</strong> At the bottom of each vertical-to-horizontal transition, use long-radius conduit sweeps to make wire pulling easier.</li>
                  <li><strong>Install a pull string:</strong> Leave a pull rope in the conduit during burial to simplify future wire pulling.</li>
                  <li><strong>Sand bedding:</strong> For direct-burial cable, place 3-4 inches of sand below and above the cable to protect against rocks.</li>
                  <li><strong>Warning tape:</strong> Install underground warning tape 12 inches above the conduit or cable to alert future excavators.</li>
                  <li><strong>Expansion fittings:</strong> Use expansion fittings on long PVC runs to account for thermal expansion and contraction.</li>
                </ul>
              </div>

              <h3 className="text-xl font-display font-semibold mb-3 text-cyan-400">Overhead Clearance Requirements (NEC 225.18)</h3>
              <div className="overflow-x-auto my-6">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-white/20">
                      <th className="text-left py-3 px-4 text-white/60">Location</th>
                      <th className="text-left py-3 px-4 text-white/60">Minimum Clearance (600V or less)</th>
                    </tr>
                  </thead>
                  <tbody className="text-white/80">
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">Above finished grade (pedestrian only)</td>
                      <td className="py-3 px-4 font-mono text-cyan-400">10 ft</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">Above residential driveways</td>
                      <td className="py-3 px-4 font-mono text-cyan-400">12 ft</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">Above commercial/farm driveways</td>
                      <td className="py-3 px-4 font-mono text-cyan-400">15 ft</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4">Above public roads and parking areas</td>
                      <td className="py-3 px-4 font-mono text-cyan-400">18 ft</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section id="feeder-conductor-sizing" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Feeder Conductor Sizing</h2>
              <p className="text-white/80 mb-4">
                Feeder conductors must be sized for both the <strong>calculated load</strong> and acceptable <strong>voltage drop</strong>. The NEC limits voltage drop to a recommended maximum of 3% for feeders and 5% total for the combination of feeder and branch circuits. On long runs common with detached buildings, voltage drop often dictates a larger conductor size than the load alone would require.
              </p>

              <p className="text-white/80 mb-4">
                Use the <Link href="/blog/wire-sizing-guide-nec-ampacity-tables" className="text-purple-400 hover:text-purple-300">NEC ampacity tables</Link> to determine the minimum conductor size based on load, then check <Link href="/blog/how-to-calculate-voltage-drop" className="text-purple-400 hover:text-purple-300">voltage drop calculations</Link> to see if upsizing is needed.
              </p>

              <h3 className="text-xl font-display font-semibold mb-3 text-cyan-400">Common Feeder Sizes for Detached Buildings</h3>
              <div className="overflow-x-auto my-6">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-white/20">
                      <th className="text-left py-3 px-4 text-white/60">Feeder Size</th>
                      <th className="text-left py-3 px-4 text-white/60">Copper Conductor</th>
                      <th className="text-left py-3 px-4 text-white/60">Aluminum Conductor</th>
                      <th className="text-left py-3 px-4 text-white/60">Typical Use</th>
                    </tr>
                  </thead>
                  <tbody className="text-white/80">
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-bold">60A</td>
                      <td className="py-3 px-4 font-mono">#6 AWG Cu</td>
                      <td className="py-3 px-4 font-mono">#4 AWG Al</td>
                      <td className="py-3 px-4 text-white/60">Basic garage, small shop</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-bold">100A</td>
                      <td className="py-3 px-4 font-mono">#3 AWG Cu</td>
                      <td className="py-3 px-4 font-mono">#1 AWG Al</td>
                      <td className="py-3 px-4 text-white/60">Workshop, ADU, large garage</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-bold">125A</td>
                      <td className="py-3 px-4 font-mono">#2 AWG Cu</td>
                      <td className="py-3 px-4 font-mono">#1/0 AWG Al</td>
                      <td className="py-3 px-4 text-white/60">ADU with HVAC, heavy shop</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-bold">200A</td>
                      <td className="py-3 px-4 font-mono">#2/0 AWG Cu</td>
                      <td className="py-3 px-4 font-mono">#4/0 AWG Al</td>
                      <td className="py-3 px-4 text-white/60">Full ADU, large barn, commercial</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="bg-white/5 rounded-xl p-6 my-6">
                <h4 className="font-semibold text-cyan-400 mb-3">Voltage Drop Example</h4>
                <p className="text-white/70 text-sm mb-3">
                  Consider a 100A, 240V feeder running 150 feet to a detached workshop using copper THHN:
                </p>
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="text-white/60 mb-1">With #3 AWG Cu (minimum for 100A):</p>
                    <p className="font-mono text-orange-400">Voltage drop = ~4.8% (exceeds 3% recommendation)</p>
                  </div>
                  <div>
                    <p className="text-white/60 mb-1">With #1 AWG Cu (upsized for voltage drop):</p>
                    <p className="font-mono text-green-400">Voltage drop = ~3.0% (meets recommendation)</p>
                  </div>
                </div>
                <p className="text-white/60 text-xs mt-3">
                  Use the <Link href="/blog/how-to-calculate-voltage-drop" className="text-purple-400 hover:text-purple-300">voltage drop calculations formula</Link> or a voltage drop calculator to verify for your specific installation distance and load.
                </p>
              </div>

              <div className="bg-emerald-900/30 rounded-xl p-6 my-6">
                <h4 className="font-semibold text-emerald-400 mb-3">Aluminum vs Copper for Feeders</h4>
                <p className="text-white/70 text-sm mb-2">
                  Aluminum conductors are widely used for feeder runs to detached buildings because they cost significantly less per foot than copper of equivalent ampacity. For a 100-foot run at 100A, aluminum can save 40-60% on conductor cost.
                </p>
                <ul className="text-white/60 text-sm space-y-1">
                  <li><strong>Aluminum is fine for feeders:</strong> Unlike small branch circuits, large aluminum feeder conductors have proven reliability when properly terminated</li>
                  <li><strong>Use AL-rated lugs:</strong> Always verify the sub-panel and breaker lugs are rated for aluminum conductors (marked AL-CU or AL)</li>
                  <li><strong>Anti-oxidant compound:</strong> Apply anti-oxidant paste to aluminum conductor terminations to prevent oxide buildup</li>
                  <li><strong>Size up:</strong> Aluminum must be sized two AWG sizes larger than copper for the same ampacity (e.g., #1 Al vs. #3 Cu for 100A)</li>
                </ul>
              </div>
            </section>

            <section id="disconnect-requirements" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Disconnect Requirements (NEC 225.31)</h2>
              <p className="text-white/80 mb-4">
                <strong>NEC Section 225.31</strong> requires a means to disconnect all ungrounded conductors that supply or pass through a building or structure. This disconnect must be installed at a <strong>readily accessible location</strong> either inside or outside the building, nearest the point of entry of the feeder conductors.
              </p>

              <div className="bg-white/5 rounded-xl p-6 my-6">
                <h4 className="font-semibold text-white mb-3">Disconnect Options</h4>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="bg-white/5 rounded-lg p-4">
                    <h5 className="font-semibold text-cyan-400 mb-2">Main Breaker Panel</h5>
                    <p className="text-white/60 text-sm">Install a sub-panel with a <strong>main breaker</strong>. The main breaker serves as the building disconnect. This is the most common and practical approach.</p>
                  </div>
                  <div className="bg-white/5 rounded-lg p-4">
                    <h5 className="font-semibold text-purple-400 mb-2">Separate Disconnect Switch</h5>
                    <p className="text-white/60 text-sm">Install a separate fusible or non-fusible disconnect switch on the outside of the building, ahead of a main-lug-only (MLO) sub-panel inside.</p>
                  </div>
                  <div className="bg-white/5 rounded-lg p-4">
                    <h5 className="font-semibold text-emerald-400 mb-2">Breaker at Building Entry</h5>
                    <p className="text-white/60 text-sm">A single circuit breaker enclosure at the point of entry, feeding an MLO panel inside. Less common but code-compliant.</p>
                  </div>
                </div>
              </div>

              <div className="space-y-4 my-6">
                <div className="bg-white/5 rounded-xl p-4 flex items-start gap-4">
                  <span className="bg-cyan-600 text-white text-sm font-bold px-3 py-1 rounded-full">1</span>
                  <div>
                    <p className="font-semibold text-white">Location (225.32)</p>
                    <p className="text-white/60 text-sm">The disconnect must be at a readily accessible location nearest the point of entry of the feeder conductors. &quot;Readily accessible&quot; means it can be reached quickly without climbing, removing obstacles, or using tools.</p>
                  </div>
                </div>
                <div className="bg-white/5 rounded-xl p-4 flex items-start gap-4">
                  <span className="bg-cyan-600 text-white text-sm font-bold px-3 py-1 rounded-full">2</span>
                  <div>
                    <p className="font-semibold text-white">Maximum Number (225.33)</p>
                    <p className="text-white/60 text-sm">No more than six switches or circuit breakers may serve as the disconnect means. In practice, a single main breaker or disconnect switch is standard for residential detached buildings.</p>
                  </div>
                </div>
                <div className="bg-white/5 rounded-xl p-4 flex items-start gap-4">
                  <span className="bg-cyan-600 text-white text-sm font-bold px-3 py-1 rounded-full">3</span>
                  <div>
                    <p className="font-semibold text-white">Rating (225.39)</p>
                    <p className="text-white/60 text-sm">The disconnect must be rated at least as large as the calculated load. For a single-circuit installation, it must be at least 15A. For multi-circuit installations (which is typical), the disconnect must be rated for the feeder load served.</p>
                  </div>
                </div>
                <div className="bg-white/5 rounded-xl p-4 flex items-start gap-4">
                  <span className="bg-cyan-600 text-white text-sm font-bold px-3 py-1 rounded-full">4</span>
                  <div>
                    <p className="font-semibold text-white">Grouping (225.34)</p>
                    <p className="text-white/60 text-sm">Where more than one disconnect is used, they must be grouped together. Each disconnect must be marked to indicate the load it serves.</p>
                  </div>
                </div>
              </div>

              <div className="bg-red-900/30 rounded-xl p-6 my-6">
                <h4 className="font-semibold text-red-400 mb-3">Emergency Disconnect Visibility</h4>
                <p className="text-white/70 text-sm">
                  The disconnect must be visible and accessible so that fire departments and emergency responders can de-energize the building quickly. Some jurisdictions require the disconnect to be on the <strong>exterior</strong> of the detached building. Always verify this with your local AHJ &mdash; some areas have adopted amendments requiring exterior emergency disconnects.
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

            <section id="sub-panel-installation" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Sub-Panel Installation in the Detached Building</h2>
              <p className="text-white/80 mb-4">
                The sub-panel in the detached building is the distribution point for all branch circuits within that building. Selecting and installing the sub-panel correctly is critical for safety, code compliance, and future expandability. For a detailed walkthrough, see our <Link href="/blog/sub-panel-installation-guide" className="text-purple-400 hover:text-purple-300">complete sub-panel installation guide</Link>.
              </p>

              <div className="grid md:grid-cols-2 gap-6 my-6">
                <div className="bg-white/5 rounded-xl p-6">
                  <h3 className="font-semibold text-cyan-400 mb-3">Panel Selection Tips</h3>
                  <ul className="text-white/70 text-sm space-y-2">
                    <li><strong>Buy bigger than needed:</strong> A 24-space panel costs marginally more than a 12-space but provides much more flexibility for future circuits</li>
                    <li><strong>Main breaker vs. MLO:</strong> A main-breaker panel serves as the building disconnect. An MLO panel requires a separate external disconnect.</li>
                    <li><strong>Outdoor rated:</strong> If installing on the exterior wall, use a NEMA 3R rated enclosure</li>
                    <li><strong>Match the feeder:</strong> Panel bus rating must be equal to or greater than the feeder overcurrent protection</li>
                  </ul>
                </div>
                <div className="bg-white/5 rounded-xl p-6">
                  <h3 className="font-semibold text-emerald-400 mb-3">Installation Requirements</h3>
                  <ul className="text-white/70 text-sm space-y-2">
                    <li><strong>Working clearance:</strong> 30&quot; wide x 36&quot; deep (NEC 110.26) minimum clear space in front of the panel</li>
                    <li><strong>Height:</strong> No breaker handle higher than 6&apos;7&quot; above the floor (NEC 240.24)</li>
                    <li><strong>Dedicated space:</strong> The area above and below the panel must be clear of pipes, ducts, and other foreign systems (NEC 110.26(F))</li>
                    <li><strong>Illumination:</strong> Adequate illumination required at the panel (NEC 110.26(D))</li>
                  </ul>
                </div>
              </div>

              <div className="bg-purple-900/30 rounded-xl p-6 my-6">
                <h4 className="font-semibold text-purple-400 mb-3">Critical: Neutral-Ground Bonding in a Sub-Panel</h4>
                <p className="text-white/70 text-sm mb-3">
                  In a <strong>sub-panel</strong> (as opposed to the main panel), the neutral bus and ground bus must be <strong>separate and isolated from each other</strong>. This is one of the most commonly violated rules in detached building wiring.
                </p>
                <ul className="text-white/60 text-sm space-y-1">
                  <li><strong>Remove the bonding screw or strap</strong> that connects the neutral bus to the panel enclosure</li>
                  <li><strong>Install a separate ground bus bar</strong> if the panel does not have one (the ground bus bonds to the enclosure)</li>
                  <li><strong>Neutral conductors</strong> connect only to the isolated neutral bus</li>
                  <li><strong>Equipment grounding conductors</strong> connect only to the ground bus (which is bonded to the enclosure)</li>
                  <li>The neutral-ground bond occurs at <strong>one point only</strong> &mdash; the main panel (or at the transformer if separately derived)</li>
                </ul>
                <p className="text-white/60 text-xs mt-3">
                  See our <Link href="/blog/electrical-grounding-vs-bonding" className="text-purple-400 hover:text-purple-300">grounding vs bonding guide</Link> for a detailed explanation of why this separation matters.
                </p>
              </div>
            </section>

            <section id="grounding-second-building" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Grounding at the Second Building</h2>
              <p className="text-white/80 mb-4">
                <strong>NEC 250.32</strong> requires that each separate building or structure with its own electrical system must have its own <strong>grounding electrode system</strong>. This is not optional &mdash; even if the feeder includes an equipment grounding conductor (EGC), the detached building still needs its own ground rods or other grounding electrodes.
              </p>

              <div className="space-y-4 my-6">
                <div className="bg-white/5 rounded-xl p-6 border-l-4 border-emerald-500">
                  <h4 className="font-semibold text-emerald-400 mb-2">Grounding Electrode Requirements</h4>
                  <p className="text-white/70 text-sm mb-3">
                    The detached building must have a grounding electrode system per NEC 250.50. Acceptable electrodes include:
                  </p>
                  <ul className="text-white/60 text-sm space-y-1">
                    <li><strong>Two ground rods:</strong> Two 8-foot ground rods driven at least 6 feet apart (most common method)</li>
                    <li><strong>Concrete-encased electrode (Ufer ground):</strong> 20 ft of #4 AWG bare copper in the building&apos;s concrete foundation</li>
                    <li><strong>Metal water pipe:</strong> 10 ft or more of underground metal water pipe (supplemented by another electrode)</li>
                    <li><strong>Ground ring:</strong> #2 AWG bare copper encircling the building at a depth of 2.5 ft</li>
                  </ul>
                </div>

                <div className="bg-white/5 rounded-xl p-6 border-l-4 border-cyan-500">
                  <h4 className="font-semibold text-cyan-400 mb-2">Equipment Grounding Conductor (EGC)</h4>
                  <p className="text-white/70 text-sm">
                    A <strong>separate equipment grounding conductor</strong> must be run with the feeder conductors from the main panel to the detached building sub-panel. This EGC provides the low-impedance fault return path needed to trip the feeder breaker during a ground fault. The EGC connects to the ground bus in the sub-panel, which also connects to the local grounding electrode system. The EGC must be sized per NEC Table 250.122 based on the rating of the feeder overcurrent device.
                  </p>
                </div>

                <div className="bg-white/5 rounded-xl p-6 border-l-4 border-purple-500">
                  <h4 className="font-semibold text-purple-400 mb-2">Grounding Electrode Conductor (GEC)</h4>
                  <p className="text-white/70 text-sm">
                    A <strong>grounding electrode conductor</strong> runs from the ground bus in the sub-panel to the local grounding electrode(s). This conductor must be sized per NEC Table 250.66 based on the size of the feeder conductors. For most residential detached buildings with #2 AWG to #1/0 AWG feeders, a #8 AWG or #6 AWG copper GEC to the ground rods is sufficient.
                  </p>
                </div>
              </div>

              <div className="bg-red-900/30 rounded-xl p-6 my-6">
                <h4 className="font-semibold text-red-400 mb-3">Do NOT Bond Neutral to Ground at the Sub-Panel</h4>
                <p className="text-white/70 text-sm">
                  At the detached building sub-panel, the neutral must remain <strong>isolated from the equipment ground</strong>. The only connection to the grounding electrode system is through the equipment ground bus. Bonding neutral to ground at both the main panel and the sub-panel creates parallel return paths for neutral current, which can cause stray current on metal parts, interfere with GFCI operation, and create shock hazards.
                </p>
              </div>
            </section>

            <section id="nec-225-requirements" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">NEC Article 225 Key Requirements</h2>
              <p className="text-white/80 mb-4">
                <strong>NEC Article 225 &mdash; Outside Branch Circuits and Feeders</strong> is the primary code article governing electrical installations that supply separate buildings and structures. Here are the sections most relevant to detached building projects:
              </p>

              <div className="space-y-4 my-6">
                <div className="bg-white/5 rounded-xl p-4">
                  <h4 className="font-semibold text-cyan-400 mb-2">225.10 &mdash; Wiring on Buildings</h4>
                  <p className="text-white/60 text-sm">Conductors on the exterior of buildings must be installed as specified in NEC 230.51 for service conductors. The permitted wiring methods include cables, multiconductor cables, or open conductors on insulators.</p>
                </div>
                <div className="bg-white/5 rounded-xl p-4">
                  <h4 className="font-semibold text-cyan-400 mb-2">225.14 &mdash; Point of Attachment</h4>
                  <p className="text-white/60 text-sm">For overhead conductors, the point of attachment to a building must be not less than 10 feet above finished grade.</p>
                </div>
                <div className="bg-white/5 rounded-xl p-4">
                  <h4 className="font-semibold text-cyan-400 mb-2">225.18 &mdash; Clearance for Overhead Conductors</h4>
                  <p className="text-white/60 text-sm">Overhead spans must maintain specific clearances above ground: 10 ft over sidewalks and pedestrian areas, 12 ft over residential driveways, 18 ft over public roadways and commercial parking areas.</p>
                </div>
                <div className="bg-white/5 rounded-xl p-4">
                  <h4 className="font-semibold text-cyan-400 mb-2">225.26 &mdash; Vegetation as Support</h4>
                  <p className="text-white/60 text-sm">Trees and vegetation shall not be used as support for overhead conductor spans. Conductors must be supported by approved fittings on buildings or separate poles.</p>
                </div>
                <div className="bg-white/5 rounded-xl p-4">
                  <h4 className="font-semibold text-cyan-400 mb-2">225.30 &mdash; Number of Supplies</h4>
                  <p className="text-white/60 text-sm">Generally, a building or structure shall be supplied by only one feeder or branch circuit unless specific exceptions apply (such as fire pumps, emergency systems, or loads over 1000A).</p>
                </div>
                <div className="bg-white/5 rounded-xl p-4">
                  <h4 className="font-semibold text-cyan-400 mb-2">225.31 &mdash; Disconnect Required</h4>
                  <p className="text-white/60 text-sm">Means shall be provided for disconnecting all ungrounded conductors that supply or pass through the building or structure. This is the fundamental disconnect requirement for detached buildings.</p>
                </div>
                <div className="bg-white/5 rounded-xl p-4">
                  <h4 className="font-semibold text-cyan-400 mb-2">225.36 &mdash; Suitable for Service Equipment</h4>
                  <p className="text-white/60 text-sm">The disconnecting means must be listed as suitable for use as service equipment (unless it is a snap switch, circuit breaker, or other device permitted by exception).</p>
                </div>
              </div>

              <div className="bg-orange-900/30 rounded-xl p-6 my-6">
                <h4 className="font-semibold text-orange-400 mb-3">NEC 225 vs NEC 230</h4>
                <p className="text-white/70 text-sm">
                  NEC Article 225 covers feeders <strong>from one building to another</strong> on the same property, while NEC Article 230 covers <strong>service entrance</strong> conductors from the utility. A detached building receiving power from the main house panel is governed by Article 225. A detached building with its own separate utility meter and service is governed by Article 230. ADUs sometimes fall under Article 230 if the local utility or AHJ requires a separate service.
                </p>
              </div>
            </section>

            <section id="adu-considerations" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">ADU-Specific Considerations</h2>
              <p className="text-white/80 mb-4">
                <strong>Accessory dwelling units (ADUs)</strong> &mdash; also called granny flats, in-law suites, or backyard cottages &mdash; have unique electrical requirements that go beyond a typical garage or workshop. Because ADUs are habitable dwellings, they must meet all the requirements of a residential dwelling unit under the NEC.
              </p>

              <div className="grid md:grid-cols-2 gap-6 my-6">
                <div className="bg-white/5 rounded-xl p-6">
                  <h3 className="font-semibold text-cyan-400 mb-3">ADU Electrical Essentials</h3>
                  <ul className="text-white/70 text-sm space-y-2">
                    <li><strong>Minimum circuits:</strong> Two 20A small-appliance circuits in kitchen, one 20A bathroom circuit, one laundry circuit, and general lighting circuits</li>
                    <li><strong>Kitchen loads:</strong> Dedicated circuits for range/oven, dishwasher, garbage disposal, microwave, refrigerator</li>
                    <li><strong>HVAC:</strong> Dedicated circuit for heating and cooling system(s)</li>
                    <li><strong>Water heater:</strong> Dedicated circuit if electric</li>
                    <li><strong>GFCI protection:</strong> Required in kitchens, bathrooms, laundry, garages, outdoors, and crawl spaces</li>
                    <li><strong>AFCI protection:</strong> Required in bedrooms, living rooms, hallways, closets, and other dwelling areas per NEC 210.12</li>
                    <li><strong>Smoke/CO detectors:</strong> Hard-wired with battery backup, interconnected</li>
                  </ul>
                </div>
                <div className="bg-white/5 rounded-xl p-6">
                  <h3 className="font-semibold text-emerald-400 mb-3">Separate Service vs. Sub-Panel</h3>
                  <ul className="text-white/70 text-sm space-y-2">
                    <li><strong>Sub-panel fed from main house:</strong> Simpler permit process, lower cost, shared utility bill. Works well for 60-100A ADUs close to the main panel.</li>
                    <li><strong>Separate utility service:</strong> Required by some jurisdictions and utility companies. Allows independent metering and billing. Required if the ADU will be rented separately in some areas.</li>
                    <li><strong>Sub-meter:</strong> Some areas allow a sub-meter on a sub-panel feed for separate billing without requiring a full separate service.</li>
                    <li><strong>Local regulations vary widely:</strong> Some states (like California) have streamlined ADU permitting, while others have strict requirements. Always check local codes.</li>
                  </ul>
                </div>
              </div>

              <div className="bg-white/5 rounded-xl p-6 my-6">
                <h4 className="font-semibold text-white mb-3">Typical ADU Load Calculation</h4>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-white/20">
                        <th className="text-left py-2 px-3 text-white/60">Load</th>
                        <th className="text-left py-2 px-3 text-white/60">VA</th>
                        <th className="text-left py-2 px-3 text-white/60">Notes</th>
                      </tr>
                    </thead>
                    <tbody className="text-white/80">
                      <tr className="border-b border-white/10">
                        <td className="py-2 px-3">General lighting (600 sq ft x 3 VA)</td>
                        <td className="py-2 px-3 font-mono">1,800 VA</td>
                        <td className="py-2 px-3 text-white/60">NEC 220.12</td>
                      </tr>
                      <tr className="border-b border-white/10">
                        <td className="py-2 px-3">Small appliance circuits (2 x 1,500)</td>
                        <td className="py-2 px-3 font-mono">3,000 VA</td>
                        <td className="py-2 px-3 text-white/60">NEC 220.52</td>
                      </tr>
                      <tr className="border-b border-white/10">
                        <td className="py-2 px-3">Laundry circuit</td>
                        <td className="py-2 px-3 font-mono">1,500 VA</td>
                        <td className="py-2 px-3 text-white/60">NEC 220.52</td>
                      </tr>
                      <tr className="border-b border-white/10">
                        <td className="py-2 px-3">Electric range</td>
                        <td className="py-2 px-3 font-mono">8,000 VA</td>
                        <td className="py-2 px-3 text-white/60">NEC 220.55</td>
                      </tr>
                      <tr className="border-b border-white/10">
                        <td className="py-2 px-3">HVAC (mini-split heat pump)</td>
                        <td className="py-2 px-3 font-mono">3,600 VA</td>
                        <td className="py-2 px-3 text-white/60">Nameplate rating</td>
                      </tr>
                      <tr className="border-b border-white/10">
                        <td className="py-2 px-3">Electric water heater (40 gal)</td>
                        <td className="py-2 px-3 font-mono">4,500 VA</td>
                        <td className="py-2 px-3 text-white/60">Nameplate rating</td>
                      </tr>
                      <tr className="border-b border-white/10">
                        <td className="py-2 px-3">Washer/dryer (electric)</td>
                        <td className="py-2 px-3 font-mono">5,500 VA</td>
                        <td className="py-2 px-3 text-white/60">Nameplate rating</td>
                      </tr>
                      <tr className="border-b border-white/10 font-bold">
                        <td className="py-2 px-3">Subtotal before demand factors</td>
                        <td className="py-2 px-3 font-mono text-cyan-400">27,900 VA</td>
                        <td className="py-2 px-3"></td>
                      </tr>
                      <tr className="font-bold">
                        <td className="py-2 px-3">After demand factors (approximate)</td>
                        <td className="py-2 px-3 font-mono text-green-400">~18,000 VA = 75A at 240V</td>
                        <td className="py-2 px-3 text-white/60">100A feeder recommended</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </section>

            <section id="load-calculations" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Load Calculations for Detached Buildings</h2>
              <p className="text-white/80 mb-4">
                Accurate load calculations ensure you install the right size feeder and sub-panel without oversizing (wasting money) or undersizing (creating a safety hazard and failing inspection). The NEC provides specific methods for calculating loads depending on the building type.
              </p>

              <div className="grid md:grid-cols-2 gap-6 my-6">
                <div className="bg-white/5 rounded-xl p-6">
                  <h3 className="font-semibold text-cyan-400 mb-3">Garage/Workshop Load Calculation</h3>
                  <div className="text-sm space-y-2">
                    <div className="flex justify-between text-white/70">
                      <span>General lighting (600 sq ft x 1.25 VA)</span>
                      <span className="font-mono">750 VA</span>
                    </div>
                    <div className="flex justify-between text-white/70">
                      <span>Receptacle outlets (10 x 180 VA)</span>
                      <span className="font-mono">1,800 VA</span>
                    </div>
                    <div className="flex justify-between text-white/70">
                      <span>Garage door openers (2 x 600W)</span>
                      <span className="font-mono">1,200 VA</span>
                    </div>
                    <div className="flex justify-between text-white/70">
                      <span>Compressor (240V, 20A)</span>
                      <span className="font-mono">4,800 VA</span>
                    </div>
                    <div className="flex justify-between text-white/70">
                      <span>Welder (240V, 50A)</span>
                      <span className="font-mono">12,000 VA</span>
                    </div>
                    <div className="border-t border-white/10 pt-2 flex justify-between text-white font-bold">
                      <span>Total (largest motor at 125%)</span>
                      <span className="font-mono text-cyan-400">23,550 VA = ~98A</span>
                    </div>
                    <p className="text-white/60 text-xs">A 100A feeder would be appropriate for this workshop.</p>
                  </div>
                </div>
                <div className="bg-white/5 rounded-xl p-6">
                  <h3 className="font-semibold text-emerald-400 mb-3">Basic Garage Load Calculation</h3>
                  <div className="text-sm space-y-2">
                    <div className="flex justify-between text-white/70">
                      <span>General lighting (400 sq ft x 1.25 VA)</span>
                      <span className="font-mono">500 VA</span>
                    </div>
                    <div className="flex justify-between text-white/70">
                      <span>Receptacle outlets (4 x 180 VA)</span>
                      <span className="font-mono">720 VA</span>
                    </div>
                    <div className="flex justify-between text-white/70">
                      <span>Garage door opener (1 x 600W)</span>
                      <span className="font-mono">600 VA</span>
                    </div>
                    <div className="flex justify-between text-white/70">
                      <span>Exterior lighting</span>
                      <span className="font-mono">300 VA</span>
                    </div>
                    <div className="flex justify-between text-white/70">
                      <span>EV charger (Level 2, 40A)</span>
                      <span className="font-mono">9,600 VA</span>
                    </div>
                    <div className="border-t border-white/10 pt-2 flex justify-between text-white font-bold">
                      <span>Total</span>
                      <span className="font-mono text-emerald-400">11,720 VA = ~49A</span>
                    </div>
                    <p className="text-white/60 text-xs">A 60A feeder would be appropriate for this garage.</p>
                  </div>
                </div>
              </div>

              <div className="bg-orange-900/30 rounded-xl p-6 my-6">
                <h4 className="font-semibold text-orange-400 mb-3">Future-Proofing Your Installation</h4>
                <p className="text-white/70 text-sm">
                  Consider oversizing the feeder and conduit slightly to accommodate future loads. Installing 100A capacity when your current calculation shows 60A costs only marginally more but avoids the expense of re-running conductors later. At minimum, install conduit one size larger than the minimum to allow easier wire pulling and future upgrades. Think about whether you might add an EV charger, hot tub, HVAC, or convert a garage into a workshop in the future.
                </p>
              </div>
            </section>

            <section id="permit-inspection" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Permit and Inspection Requirements</h2>
              <p className="text-white/80 mb-4">
                Virtually all jurisdictions require an electrical permit for running a feeder to a detached building and installing a sub-panel. Skipping the permit exposes you to safety risks, insurance issues, and problems when selling the property. Here is what to expect during the permit and inspection process.
              </p>

              <div className="space-y-4 my-6">
                <div className="bg-white/5 rounded-xl p-6 border-l-4 border-cyan-500">
                  <h4 className="font-semibold text-cyan-400 mb-2">1. Permit Application</h4>
                  <p className="text-white/70 text-sm">
                    Submit an electrical permit application to your local building department. Include a description of work, load calculation, wire and conduit sizing, panel schedule, and a basic site plan showing the feeder route and building locations. Some jurisdictions require a licensed electrician to pull the permit.
                  </p>
                </div>

                <div className="bg-white/5 rounded-xl p-6 border-l-4 border-cyan-500">
                  <h4 className="font-semibold text-cyan-400 mb-2">2. Rough-In Inspection</h4>
                  <p className="text-white/70 text-sm">
                    The inspector verifies the trench depth (for underground), conduit routing, conductor types, panel mounting, grounding electrode installation, and disconnect placement <strong>before</strong> the trench is backfilled and walls are closed up. Call for this inspection before covering any work.
                  </p>
                </div>

                <div className="bg-white/5 rounded-xl p-6 border-l-4 border-cyan-500">
                  <h4 className="font-semibold text-cyan-400 mb-2">3. Final Inspection</h4>
                  <p className="text-white/70 text-sm">
                    The inspector verifies all connections, proper wire termination, panel labeling, GFCI/AFCI protection, grounding continuity, neutral-ground separation in the sub-panel, and proper operation of the disconnect. The panel directory must be complete and accurate.
                  </p>
                </div>
              </div>

              <div className="bg-white/5 rounded-xl p-6 my-6">
                <h4 className="font-semibold text-white mb-3">What Inspectors Commonly Check</h4>
                <ul className="text-white/70 space-y-2 text-sm">
                  <li>&#9744; Proper burial depth for underground conduit or cable</li>
                  <li>&#9744; Warning tape installed above underground wiring</li>
                  <li>&#9744; Correct conductor sizing for the load and distance</li>
                  <li>&#9744; Feeder overcurrent protection sized correctly at the main panel</li>
                  <li>&#9744; Building disconnect properly installed and accessible</li>
                  <li>&#9744; Neutral and ground buses separated in sub-panel</li>
                  <li>&#9744; Grounding electrode system installed (ground rods, Ufer, etc.)</li>
                  <li>&#9744; Equipment grounding conductor run with feeder</li>
                  <li>&#9744; GFCI protection where required</li>
                  <li>&#9744; AFCI protection where required (dwelling units)</li>
                  <li>&#9744; Panel schedule completed and legible</li>
                  <li>&#9744; Working clearance maintained in front of panel</li>
                </ul>
              </div>
            </section>

            <section id="common-mistakes" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Common Mistakes to Avoid</h2>
              <p className="text-white/80 mb-4">
                Detached building electrical projects are frequently done incorrectly, either by unlicensed installers or by homeowners who skip the permit process. These are the most common errors that cause inspection failures, safety hazards, and expensive rework.
              </p>

              <div className="grid md:grid-cols-2 gap-4 my-6">
                <div className="bg-red-900/20 rounded-xl p-6 border border-red-500/20">
                  <h4 className="font-semibold text-red-400 mb-3">Bonding Neutral to Ground in Sub-Panel</h4>
                  <p className="text-white/60 text-sm">
                    The number one mistake. In a sub-panel, the neutral bus must be isolated from the enclosure and the ground bus. Leaving the bonding screw in place creates parallel return paths for neutral current and defeats GFCI protection.
                  </p>
                </div>
                <div className="bg-red-900/20 rounded-xl p-6 border border-red-500/20">
                  <h4 className="font-semibold text-red-400 mb-3">No Grounding Electrode at the Building</h4>
                  <p className="text-white/60 text-sm">
                    Every detached building with a sub-panel requires its own grounding electrode system (ground rods). The equipment grounding conductor alone is not sufficient &mdash; local grounding electrodes are required by NEC 250.32.
                  </p>
                </div>
                <div className="bg-red-900/20 rounded-xl p-6 border border-red-500/20">
                  <h4 className="font-semibold text-red-400 mb-3">Ignoring Voltage Drop</h4>
                  <p className="text-white/60 text-sm">
                    Long feeder runs to detached buildings are especially susceptible to voltage drop. Using minimum-sized conductors on a 150-foot run can result in 5%+ voltage drop, causing dim lights, motor overheating, and tool underperformance.
                  </p>
                </div>
                <div className="bg-red-900/20 rounded-xl p-6 border border-red-500/20">
                  <h4 className="font-semibold text-red-400 mb-3">No Building Disconnect</h4>
                  <p className="text-white/60 text-sm">
                    Every detached building must have a disconnect means at or near the point of entry. Using a main-lug-only panel without a separate external disconnect is a code violation unless the main-lug panel meets specific exceptions.
                  </p>
                </div>
                <div className="bg-red-900/20 rounded-xl p-6 border border-red-500/20">
                  <h4 className="font-semibold text-red-400 mb-3">Insufficient Burial Depth</h4>
                  <p className="text-white/60 text-sm">
                    UF-B cable requires 24 inches of cover, PVC conduit requires 18 inches. Burying conduit at 12 inches &quot;because the ground is rocky&quot; will fail inspection and puts the cable at risk of damage from future digging or frost heave.
                  </p>
                </div>
                <div className="bg-red-900/20 rounded-xl p-6 border border-red-500/20">
                  <h4 className="font-semibold text-red-400 mb-3">Using Interior-Rated Wire Underground</h4>
                  <p className="text-white/60 text-sm">
                    Running NM-B (Romex) through underground conduit is a code violation. Underground installations require conductors rated for wet locations (THWN, XHHW) in conduit, or UF-B cable for direct burial.
                  </p>
                </div>
                <div className="bg-red-900/20 rounded-xl p-6 border border-red-500/20">
                  <h4 className="font-semibold text-red-400 mb-3">Undersized Conduit</h4>
                  <p className="text-white/60 text-sm">
                    Conduit fill calculations are frequently ignored. Four #6 THHN conductors in 1/2&quot; PVC exceeds the 40% fill limit. Always calculate conduit fill or use a conduit fill chart to select the proper size. See our <Link href="/blog/conduit-fill-calculation-guide" className="text-purple-400 hover:text-purple-300">conduit fill guide</Link>.
                  </p>
                </div>
                <div className="bg-red-900/20 rounded-xl p-6 border border-red-500/20">
                  <h4 className="font-semibold text-red-400 mb-3">Overloading the Main Panel</h4>
                  <p className="text-white/60 text-sm">
                    Adding a 100A feeder breaker to a 200A main panel that is already heavily loaded can exceed the panel&apos;s bus rating or the service capacity. Verify that the existing service and main panel can support the additional load before installing the feeder.
                  </p>
                </div>
              </div>

              <div className="bg-cyan-900/30 rounded-xl p-6 my-6">
                <h4 className="font-semibold text-cyan-400 mb-3">Pre-Installation Checklist</h4>
                <ul className="text-white/70 space-y-2 text-sm">
                  <li>&#9744; Load calculation completed and feeder sized appropriately</li>
                  <li>&#9744; Voltage drop calculated and conductors upsized if needed</li>
                  <li>&#9744; Main panel capacity verified for the additional load</li>
                  <li>&#9744; Underground utility locates completed (call 811)</li>
                  <li>&#9744; Electrical permit obtained from local building department</li>
                  <li>&#9744; Conduit fill calculated and proper conduit size selected</li>
                  <li>&#9744; Burial depth requirements confirmed for your wiring method</li>
                  <li>&#9744; Disconnect type and location determined</li>
                  <li>&#9744; Grounding electrode materials purchased (ground rods, clamps, GEC)</li>
                  <li>&#9744; Sub-panel selected with adequate spaces for current and future circuits</li>
                </ul>
              </div>
            </section>

            {/* Footer CTA Section */}
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
                <Link href="/blog/nec-article-225-outside-feeders" className="bg-white/5 hover:bg-white/10 rounded-xl p-6 transition-colors">
                  <span className="text-purple-400 text-sm">NEC Code</span>
                  <h3 className="font-semibold mt-2">NEC Article 225: Outside Branch Circuits and Feeders</h3>
                </Link>
                <Link href="/blog/sub-panel-installation-guide" className="bg-white/5 hover:bg-white/10 rounded-xl p-6 transition-colors">
                  <span className="text-emerald-400 text-sm">Installation</span>
                  <h3 className="font-semibold mt-2">Sub-Panel Installation Guide</h3>
                </Link>
                <Link href="/blog/underground-wiring-installation-guide" className="bg-white/5 hover:bg-white/10 rounded-xl p-6 transition-colors">
                  <span className="text-emerald-400 text-sm">Installation</span>
                  <h3 className="font-semibold mt-2">Underground Wiring Installation Guide</h3>
                </Link>
                <Link href="/blog/garage-electrical-requirements-nec" className="bg-white/5 hover:bg-white/10 rounded-xl p-6 transition-colors">
                  <span className="text-purple-400 text-sm">NEC Code</span>
                  <h3 className="font-semibold mt-2">Garage Electrical Requirements per NEC</h3>
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
