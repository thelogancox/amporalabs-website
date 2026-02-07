import { Metadata } from "next";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import { BreadcrumbJsonLd, BlogPostingJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Underground Wiring Installation Guide: NEC Burial Depth & Methods",
  description: "Complete guide to underground electrical wiring installation. Learn NEC burial depth requirements, direct burial vs conduit methods, UF cable selection, and trenching best practices for residential and commercial installations.",
  keywords: [
    "underground wiring installation",
    "NEC burial depth requirements",
    "direct burial cable",
    "underground conduit installation",
    "UF-B cable installation",
    "underground feeder cable",
    "NEC 300.5",
    "electrical trenching",
    "underground electrical conduit",
    "burial depth electrical",
    "direct burial vs conduit",
    "underground wire protection",
    "landscape lighting wiring",
    "pool electrical underground",
    "GFCI outdoor circuits"
  ],
  alternates: {
    canonical: "https://amporalabs.com/blog/underground-wiring-installation-guide",
  },
  openGraph: {
    title: "Underground Wiring Installation Guide: NEC Requirements - Ampora",
    description: "Learn NEC burial depth requirements, direct burial vs conduit methods, and underground cable selection.",
    url: "https://amporalabs.com/blog/underground-wiring-installation-guide",
    type: "article",
  },
};

function HeroIllustration() {
  return (
    <svg viewBox="0 0 400 200" className="w-full h-48 md:h-56" aria-label="Underground wiring installation cross-section">
      {/* Sky/Above ground */}
      <rect x="0" y="0" width="400" height="60" fill="#0c4a6e" fillOpacity="0.3"/>

      {/* Ground surface */}
      <rect x="0" y="60" width="400" height="140" fill="#422006" fillOpacity="0.4"/>

      {/* Ground line */}
      <line x1="0" y1="60" x2="400" y2="60" stroke="#78350f" strokeWidth="3"/>
      <text x="380" y="55" textAnchor="end" fill="#9ca3af" fontSize="8">Ground Level</text>

      {/* House/Building on left */}
      <g transform="translate(20, 10)">
        <rect x="0" y="20" width="60" height="30" fill="#374151" stroke="#6b7280" strokeWidth="1"/>
        <polygon points="0,20 30,0 60,20" fill="#4b5563" stroke="#6b7280" strokeWidth="1"/>
        <rect x="22" y="35" width="16" height="15" fill="#1f2937"/>
        <rect x="55" y="40" width="8" height="20" fill="#a855f7" stroke="#c4b5fd" strokeWidth="1"/>
        <text x="59" y="55" textAnchor="middle" fill="#c4b5fd" fontSize="4">Panel</text>
      </g>

      {/* Outbuilding/Garage on right */}
      <g transform="translate(300, 25)">
        <rect x="0" y="15" width="80" height="20" fill="#374151" stroke="#6b7280" strokeWidth="1"/>
        <rect x="25" y="20" width="30" height="15" fill="#1f2937"/>
        <text x="40" y="50" textAnchor="middle" fill="#9ca3af" fontSize="7">Outbuilding</text>
      </g>

      {/* Method 1: Direct Burial UF-B Cable */}
      <g transform="translate(100, 60)">
        {/* Trench */}
        <rect x="0" y="0" width="25" height="90" fill="#1c1917" fillOpacity="0.3"/>
        {/* Cable */}
        <line x1="12" y1="0" x2="12" y2="90" stroke="#f59e0b" strokeWidth="6"/>
        <line x1="12" y1="0" x2="12" y2="90" stroke="#fbbf24" strokeWidth="3"/>
        {/* Depth marker */}
        <line x1="30" y1="0" x2="30" y2="72" stroke="#9ca3af" strokeWidth="1"/>
        <line x1="25" y1="0" x2="35" y2="0" stroke="#9ca3af" strokeWidth="1"/>
        <line x1="25" y1="72" x2="35" y2="72" stroke="#9ca3af" strokeWidth="1"/>
        <text x="40" y="40" fill="#f59e0b" fontSize="8" fontWeight="bold">24"</text>
        <text x="40" y="52" fill="#fcd34d" fontSize="6">UF-B Direct</text>
        <text x="40" y="62" fill="#fcd34d" fontSize="6">Burial</text>
      </g>

      {/* Method 2: RMC Conduit */}
      <g transform="translate(170, 60)">
        {/* Conduit */}
        <rect x="5" y="0" width="14" height="55" fill="#6b7280" stroke="#9ca3af" strokeWidth="1"/>
        <rect x="8" y="0" width="8" height="55" fill="#1f2937"/>
        {/* Depth marker */}
        <line x1="25" y1="0" x2="25" y2="36" stroke="#9ca3af" strokeWidth="1"/>
        <line x1="20" y1="0" x2="30" y2="0" stroke="#9ca3af" strokeWidth="1"/>
        <line x1="20" y1="36" x2="30" y2="36" stroke="#9ca3af" strokeWidth="1"/>
        <text x="35" y="20" fill="#9ca3af" fontSize="8" fontWeight="bold">6"</text>
        <text x="35" y="32" fill="#d1d5db" fontSize="6">RMC</text>
        <text x="35" y="42" fill="#d1d5db" fontSize="6">Conduit</text>
      </g>

      {/* Method 3: PVC Conduit */}
      <g transform="translate(240, 60)">
        {/* Conduit */}
        <rect x="5" y="0" width="14" height="78" fill="#4b5563" stroke="#6b7280" strokeWidth="1"/>
        <rect x="8" y="0" width="8" height="78" fill="#1f2937"/>
        {/* Depth marker */}
        <line x1="25" y1="0" x2="25" y2="72" stroke="#9ca3af" strokeWidth="1"/>
        <line x1="20" y1="0" x2="30" y2="0" stroke="#9ca3af" strokeWidth="1"/>
        <line x1="20" y1="72" x2="30" y2="72" stroke="#9ca3af" strokeWidth="1"/>
        <text x="35" y="40" fill="#6b7280" fontSize="8" fontWeight="bold">18"</text>
        <text x="35" y="52" fill="#9ca3af" fontSize="6">PVC</text>
        <text x="35" y="62" fill="#9ca3af" fontSize="6">Conduit</text>
      </g>

      {/* Legend */}
      <g transform="translate(10, 170)">
        <rect x="0" y="0" width="12" height="8" fill="#f59e0b"/>
        <text x="16" y="7" fill="#9ca3af" fontSize="7">UF-B Cable</text>
        <rect x="80" y="0" width="12" height="8" fill="#6b7280"/>
        <text x="96" y="7" fill="#9ca3af" fontSize="7">RMC Conduit</text>
        <rect x="170" y="0" width="12" height="8" fill="#4b5563"/>
        <text x="186" y="7" fill="#9ca3af" fontSize="7">PVC Conduit</text>
      </g>
    </svg>
  );
}

function BurialDepthDiagram() {
  return (
    <svg viewBox="0 0 380 200" className="w-full h-48" aria-label="NEC burial depth requirements chart">
      {/* Title */}
      <text x="190" y="20" textAnchor="middle" fill="#fff" fontSize="12" fontWeight="bold">NEC 300.5 Minimum Cover Requirements</text>

      {/* Ground line */}
      <line x1="40" y1="45" x2="360" y2="45" stroke="#78350f" strokeWidth="2"/>
      <text x="30" y="48" textAnchor="end" fill="#9ca3af" fontSize="8">0"</text>

      {/* Depth lines */}
      <line x1="40" y1="65" x2="360" y2="65" stroke="#374151" strokeWidth="1" strokeDasharray="4"/>
      <text x="30" y="68" textAnchor="end" fill="#9ca3af" fontSize="8">6"</text>

      <line x1="40" y1="95" x2="360" y2="95" stroke="#374151" strokeWidth="1" strokeDasharray="4"/>
      <text x="30" y="98" textAnchor="end" fill="#9ca3af" fontSize="8">12"</text>

      <line x1="40" y1="125" x2="360" y2="125" stroke="#374151" strokeWidth="1" strokeDasharray="4"/>
      <text x="30" y="128" textAnchor="end" fill="#9ca3af" fontSize="8">18"</text>

      <line x1="40" y1="155" x2="360" y2="155" stroke="#374151" strokeWidth="1" strokeDasharray="4"/>
      <text x="30" y="158" textAnchor="end" fill="#9ca3af" fontSize="8">24"</text>

      {/* RMC - 6" */}
      <g transform="translate(55, 45)">
        <rect x="0" y="0" width="40" height="20" fill="#6b7280" stroke="#9ca3af" strokeWidth="1"/>
        <text x="20" y="35" textAnchor="middle" fill="#d1d5db" fontSize="7">RMC</text>
        <text x="20" y="46" textAnchor="middle" fill="#22c55e" fontSize="9" fontWeight="bold">6"</text>
      </g>

      {/* IMC - 6" */}
      <g transform="translate(110, 45)">
        <rect x="0" y="0" width="40" height="20" fill="#525252" stroke="#9ca3af" strokeWidth="1"/>
        <text x="20" y="35" textAnchor="middle" fill="#d1d5db" fontSize="7">IMC</text>
        <text x="20" y="46" textAnchor="middle" fill="#22c55e" fontSize="9" fontWeight="bold">6"</text>
      </g>

      {/* PVC under concrete - 6" (with concrete) */}
      <g transform="translate(165, 45)">
        <rect x="0" y="0" width="40" height="20" fill="#4b5563" stroke="#9ca3af" strokeWidth="1"/>
        <rect x="0" y="0" width="40" height="8" fill="#78716c"/>
        <text x="20" y="35" textAnchor="middle" fill="#9ca3af" fontSize="6">PVC+Slab</text>
        <text x="20" y="46" textAnchor="middle" fill="#22c55e" fontSize="9" fontWeight="bold">6"</text>
      </g>

      {/* PVC - 18" */}
      <g transform="translate(220, 45)">
        <rect x="0" y="0" width="40" height="80" fill="#4b5563" stroke="#9ca3af" strokeWidth="1"/>
        <text x="20" y="95" textAnchor="middle" fill="#9ca3af" fontSize="7">PVC</text>
        <text x="20" y="106" textAnchor="middle" fill="#f59e0b" fontSize="9" fontWeight="bold">18"</text>
      </g>

      {/* UF-B - 24" */}
      <g transform="translate(275, 45)">
        <line x1="20" y1="0" x2="20" y2="110" stroke="#f59e0b" strokeWidth="8"/>
        <line x1="20" y1="0" x2="20" y2="110" stroke="#fbbf24" strokeWidth="4"/>
        <text x="20" y="125" textAnchor="middle" fill="#fbbf24" fontSize="7">UF-B</text>
        <text x="20" y="136" textAnchor="middle" fill="#ef4444" fontSize="9" fontWeight="bold">24"</text>
      </g>

      {/* Low voltage - 6" */}
      <g transform="translate(330, 45)">
        <line x1="10" y1="0" x2="10" y2="20" stroke="#22c55e" strokeWidth="3"/>
        <text x="10" y="35" textAnchor="middle" fill="#86efac" fontSize="6">Low V</text>
        <text x="10" y="46" textAnchor="middle" fill="#22c55e" fontSize="9" fontWeight="bold">6"</text>
      </g>

      {/* Note */}
      <text x="190" y="185" textAnchor="middle" fill="#9ca3af" fontSize="7">*Depths for circuits 0-600V. Additional requirements apply for driveways, parking areas.</text>
    </svg>
  );
}

function TrenchDetailDiagram() {
  return (
    <svg viewBox="0 0 380 180" className="w-full h-44" aria-label="Proper trench installation detail">
      {/* Title */}
      <text x="190" y="18" textAnchor="middle" fill="#fff" fontSize="11" fontWeight="bold">Proper Trench Installation</text>

      {/* Ground surface */}
      <rect x="30" y="35" width="320" height="130" fill="#422006" fillOpacity="0.3"/>
      <line x1="30" y1="35" x2="350" y2="35" stroke="#78350f" strokeWidth="2"/>

      {/* Trench cross-section */}
      <rect x="140" y="35" width="100" height="120" fill="#1c1917" fillOpacity="0.4" stroke="#374151" strokeWidth="1"/>

      {/* Sand bedding at bottom */}
      <rect x="145" y="140" width="90" height="10" fill="#fcd34d" fillOpacity="0.3"/>
      <text x="190" y="148" textAnchor="middle" fill="#fcd34d" fontSize="6">Sand Bedding</text>

      {/* Conduit */}
      <rect x="175" y="115" width="30" height="25" rx="3" fill="#4b5563" stroke="#6b7280" strokeWidth="2"/>
      <rect x="180" y="120" width="20" height="15" fill="#1f2937"/>
      <text x="190" y="130" textAnchor="middle" fill="#9ca3af" fontSize="6">PVC</text>

      {/* Warning tape */}
      <rect x="145" y="70" width="90" height="8" fill="#f59e0b" stroke="#f97316" strokeWidth="1"/>
      <text x="190" y="77" textAnchor="middle" fill="#1f2937" fontSize="5" fontWeight="bold">CAUTION BURIED ELECTRICAL</text>

      {/* Fill layers */}
      <rect x="145" y="80" width="90" height="35" fill="#78716c" fillOpacity="0.3"/>
      <text x="270" y="100" fill="#9ca3af" fontSize="7">Backfill (no rocks)</text>
      <line x1="235" y1="98" x2="250" y2="98" stroke="#9ca3af" strokeWidth="1"/>

      <rect x="145" y="35" width="90" height="35" fill="#422006" fillOpacity="0.5"/>
      <text x="270" y="55" fill="#9ca3af" fontSize="7">Topsoil/Original Fill</text>
      <line x1="235" y1="53" x2="250" y2="53" stroke="#9ca3af" strokeWidth="1"/>

      {/* Depth markers */}
      <line x1="120" y1="35" x2="120" y2="140" stroke="#22c55e" strokeWidth="1"/>
      <line x1="115" y1="35" x2="125" y2="35" stroke="#22c55e" strokeWidth="1"/>
      <line x1="115" y1="140" x2="125" y2="140" stroke="#22c55e" strokeWidth="1"/>
      <text x="100" y="90" textAnchor="middle" fill="#22c55e" fontSize="8" transform="rotate(-90, 100, 90)">18" min</text>

      {/* Warning tape depth */}
      <line x1="250" y1="35" x2="250" y2="70" stroke="#f59e0b" strokeWidth="1"/>
      <text x="280" y="55" fill="#f59e0b" fontSize="7">12" above</text>

      {/* Width marker */}
      <line x1="140" y1="160" x2="240" y2="160" stroke="#9ca3af" strokeWidth="1"/>
      <line x1="140" y1="155" x2="140" y2="165" stroke="#9ca3af" strokeWidth="1"/>
      <line x1="240" y1="155" x2="240" y2="165" stroke="#9ca3af" strokeWidth="1"/>
      <text x="190" y="172" textAnchor="middle" fill="#9ca3af" fontSize="7">6-8" width typical</text>
    </svg>
  );
}

export default function UndergroundWiringGuidePage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navigation />
      <div className="pt-20">
        <BreadcrumbJsonLd
          items={[
            { name: "Home", url: "https://amporalabs.com" },
            { name: "Blog", url: "https://amporalabs.com/blog" },
            { name: "Underground Wiring Guide", url: "https://amporalabs.com/blog/underground-wiring-installation-guide" },
          ]}
        />
        <BlogPostingJsonLd
          headline="Underground Wiring Installation Guide: NEC Burial Depth & Methods"
          description="Complete guide to underground electrical wiring installation including NEC burial depth requirements, direct burial vs conduit methods, and cable selection."
          datePublished="2025-02-05"
          dateModified="2025-02-05"
          url="https://amporalabs.com/blog/underground-wiring-installation-guide"
          wordCount={2600}
          keywords={["underground wiring", "burial depth", "direct burial cable", "NEC 300.5", "underground conduit"]}
        />

        <article className="max-w-4xl mx-auto px-6 py-12">
          {/* Breadcrumb */}
          <nav className="text-sm text-white/60 mb-8">
            <Link href="/" className="hover:text-white">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/blog" className="hover:text-white">Blog</Link>
            <span className="mx-2">/</span>
            <span className="text-white">Underground Wiring Guide</span>
          </nav>

          {/* Article Header */}
          <header className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <span className="px-3 py-1 bg-emerald-600/30 text-emerald-300 text-sm font-medium rounded-full">
                Installation
              </span>
              <span className="text-white/40 text-sm">12 min read</span>
              <span className="text-white/40 text-sm">February 5, 2025</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6 leading-tight">
              Underground Wiring Installation Guide: NEC Burial Depth & Methods
            </h1>
            <p className="text-xl text-white/70">
              Everything you need to know about running electrical wiring underground. From NEC burial depth requirements to choosing between direct burial and conduit methods.
            </p>
          </header>

          <div className="mb-12 bg-gradient-to-br from-amber-900/20 to-gray-900/20 rounded-2xl p-6 border border-white/10">
            <HeroIllustration />
          </div>

          {/* Quick Reference CTA */}
          <div className="bg-emerald-900/30 border border-emerald-500/30 rounded-2xl p-6 mb-12">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div>
                <h3 className="font-display font-bold text-lg mb-1">Need Quick Calculations?</h3>
                <p className="text-white/70 text-sm">Use Ampora for voltage drop, conduit fill, and wire sizing for long underground runs.</p>
              </div>
              <a
                href="https://apps.apple.com/us/app/ampora/id6753693522"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-emerald-600 text-white font-semibold rounded-full hover:bg-emerald-500 transition-colors whitespace-nowrap"
              >
                Download Free
              </a>
            </div>
          </div>

          {/* Table of Contents */}
          <div className="bg-white/5 rounded-2xl p-6 mb-12">
            <h2 className="font-display font-bold mb-4">In This Guide</h2>
            <ul className="space-y-2 text-white/70">
              <li><a href="#burial-depth" className="hover:text-emerald-400">→ NEC Burial Depth Requirements</a></li>
              <li><a href="#direct-burial" className="hover:text-emerald-400">→ Direct Burial Cable Method</a></li>
              <li><a href="#conduit-methods" className="hover:text-emerald-400">→ Conduit Installation Methods</a></li>
              <li><a href="#cable-selection" className="hover:text-emerald-400">→ Underground Cable Selection</a></li>
              <li><a href="#trenching" className="hover:text-emerald-400">→ Trenching Best Practices</a></li>
              <li><a href="#gfci-protection" className="hover:text-emerald-400">→ GFCI Protection Requirements</a></li>
              <li><a href="#special-locations" className="hover:text-emerald-400">→ Special Location Requirements</a></li>
            </ul>
          </div>

          {/* Article Content */}
          <div className="prose prose-invert prose-lg max-w-none">

            <section id="burial-depth" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">NEC Burial Depth Requirements</h2>
              <p className="text-white/80 mb-4">
                NEC Article 300.5 specifies minimum cover (burial depth) requirements for underground wiring. The required depth depends on the wiring method, voltage, and location. These are <strong>minimum</strong> requirements—deeper is always acceptable and often preferred.
              </p>

              <div className="my-8">
                <BurialDepthDiagram />
              </div>

              <div className="overflow-x-auto my-6">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-white/20">
                      <th className="text-left py-3 px-4 text-white/60">Wiring Method</th>
                      <th className="text-left py-3 px-4 text-white/60">Min. Depth</th>
                      <th className="text-left py-3 px-4 text-white/60">Under Driveway</th>
                      <th className="text-left py-3 px-4 text-white/60">Notes</th>
                    </tr>
                  </thead>
                  <tbody className="text-white/80">
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">Direct Burial (UF-B)</td>
                      <td className="py-3 px-4 font-mono text-amber-400">24"</td>
                      <td className="py-3 px-4 font-mono">24"</td>
                      <td className="py-3 px-4 text-white/60">120V, 20A max with GFCI: 12"</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">PVC Conduit (Schedule 80)</td>
                      <td className="py-3 px-4 font-mono text-amber-400">18"</td>
                      <td className="py-3 px-4 font-mono">18"</td>
                      <td className="py-3 px-4 text-white/60">Most common residential method</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">RMC or IMC Conduit</td>
                      <td className="py-3 px-4 font-mono text-green-400">6"</td>
                      <td className="py-3 px-4 font-mono">6"</td>
                      <td className="py-3 px-4 text-white/60">Best protection, highest cost</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">Under Concrete Slab (4" min)</td>
                      <td className="py-3 px-4 font-mono text-green-400">6"*</td>
                      <td className="py-3 px-4 font-mono">N/A</td>
                      <td className="py-3 px-4 text-white/60">*Below slab, PVC Schedule 80</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">Low Voltage (50V or less)</td>
                      <td className="py-3 px-4 font-mono text-green-400">6"</td>
                      <td className="py-3 px-4 font-mono">18"</td>
                      <td className="py-3 px-4 text-white/60">Landscape lighting, doorbells</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4">GFCI Protected (120V, 20A max)</td>
                      <td className="py-3 px-4 font-mono text-cyan-400">12"</td>
                      <td className="py-3 px-4 font-mono">18"</td>
                      <td className="py-3 px-4 text-white/60">Reduced depth with GFCI</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="bg-orange-900/30 border border-orange-500/30 rounded-xl p-6 my-6">
                <h4 className="font-semibold text-orange-400 mb-2">Critical: Call Before You Dig</h4>
                <p className="text-white/70">
                  Always call 811 (or your local one-call center) at least 48-72 hours before digging. Utility companies will mark existing underground lines at no charge. Damaging gas, electric, or communication lines can be dangerous and expensive.
                </p>
              </div>
            </section>

            <section id="direct-burial" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Direct Burial Cable Method</h2>
              <p className="text-white/80 mb-4">
                Direct burial cable is installed directly in the ground without conduit. The most common type for residential use is <strong>UF-B (Underground Feeder)</strong> cable.
              </p>

              <div className="grid md:grid-cols-2 gap-6 my-6">
                <div className="bg-green-900/30 rounded-xl p-6">
                  <h4 className="font-semibold text-green-400 mb-3">Advantages</h4>
                  <ul className="text-white/70 space-y-2 text-sm">
                    <li>• Lower material cost than conduit</li>
                    <li>• Faster installation for simple runs</li>
                    <li>• No conduit bending required</li>
                    <li>• Suitable for short, simple circuits</li>
                  </ul>
                </div>
                <div className="bg-red-900/30 rounded-xl p-6">
                  <h4 className="font-semibold text-red-400 mb-3">Disadvantages</h4>
                  <ul className="text-white/70 space-y-2 text-sm">
                    <li>• Requires deeper burial (24")</li>
                    <li>• Cannot add or replace wires later</li>
                    <li>• More susceptible to damage</li>
                    <li>• Limited wire types available</li>
                  </ul>
                </div>
              </div>

              <h3 className="text-xl font-semibold mt-6 mb-3">UF-B Cable Specifications</h3>
              <div className="bg-white/5 rounded-xl p-6 my-6">
                <ul className="text-white/80 space-y-3">
                  <li><strong>Insulation:</strong> Solid gray plastic encasing all conductors</li>
                  <li><strong>Temperature rating:</strong> 60°C wet or dry</li>
                  <li><strong>Sunlight resistance:</strong> Must be marked "Sunlight Resistant" for above-ground exposure</li>
                  <li><strong>Sizes available:</strong> 14 AWG through 4/0 AWG</li>
                  <li><strong>GFCI requirement:</strong> All underground circuits serving 15A/20A, 120V or 240V outlets require GFCI</li>
                </ul>
              </div>

              <h3 className="text-xl font-semibold mt-6 mb-3">When to Use Direct Burial</h3>
              <ul className="list-disc list-inside text-white/70 space-y-2 mb-4">
                <li>Short runs to outbuildings, sheds, or detached garages</li>
                <li>Landscape lighting circuits (with appropriate voltage)</li>
                <li>Locations where future expansion is unlikely</li>
                <li>Budget-conscious projects with simple requirements</li>
              </ul>

              <div className="bg-purple-900/30 border border-purple-500/30 rounded-xl p-6 my-6">
                <h4 className="font-semibold text-purple-400 mb-2">Pro Tip: Transition to Conduit</h4>
                <p className="text-white/70">
                  Where UF-B cable emerges from the ground, protect it with conduit extending at least 18 inches below grade to 8 feet above. Use a weatherproof fitting at the transition point.
                </p>
              </div>
            </section>

            <section id="conduit-methods" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Conduit Installation Methods</h2>
              <p className="text-white/80 mb-4">
                Conduit provides superior protection for underground wiring and allows future wire replacement or additions. Several conduit types are suitable for underground use.
              </p>

              <div className="overflow-x-auto my-6">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-white/20">
                      <th className="text-left py-3 px-4 text-white/60">Conduit Type</th>
                      <th className="text-left py-3 px-4 text-white/60">Min. Depth</th>
                      <th className="text-left py-3 px-4 text-white/60">Pros</th>
                      <th className="text-left py-3 px-4 text-white/60">Cons</th>
                    </tr>
                  </thead>
                  <tbody className="text-white/80">
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-semibold text-cyan-400">PVC Schedule 40</td>
                      <td className="py-3 px-4 font-mono">18"</td>
                      <td className="py-3 px-4 text-white/60">Low cost, easy to work</td>
                      <td className="py-3 px-4 text-white/60">Less impact resistance</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-semibold text-cyan-400">PVC Schedule 80</td>
                      <td className="py-3 px-4 font-mono">18"</td>
                      <td className="py-3 px-4 text-white/60">Thicker wall, more durable</td>
                      <td className="py-3 px-4 text-white/60">Smaller ID, higher cost</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-semibold text-gray-400">RMC (Rigid Metal)</td>
                      <td className="py-3 px-4 font-mono">6"</td>
                      <td className="py-3 px-4 text-white/60">Maximum protection, EGC</td>
                      <td className="py-3 px-4 text-white/60">Expensive, heavy, corrosion risk</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-semibold text-gray-400">IMC (Intermediate)</td>
                      <td className="py-3 px-4 font-mono">6"</td>
                      <td className="py-3 px-4 text-white/60">Lighter than RMC, same depth</td>
                      <td className="py-3 px-4 text-white/60">Cost, corrosion concerns</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-semibold text-amber-400">LFNC (Liquid-tight)</td>
                      <td className="py-3 px-4 font-mono">18"</td>
                      <td className="py-3 px-4 text-white/60">Flexible, easy transitions</td>
                      <td className="py-3 px-4 text-white/60">Limited lengths, special fittings</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h3 className="text-xl font-semibold mt-6 mb-3">Conduit Best Practices</h3>
              <ul className="list-disc list-inside text-white/70 space-y-2 mb-4">
                <li><strong>Upsize conduit:</strong> Use larger than minimum for easier wire pulling and future expansion</li>
                <li><strong>Pull string:</strong> Always install a pull string or rope for future use</li>
                <li><strong>Sweep elbows:</strong> Use long-radius sweeps instead of tight 90° bends</li>
                <li><strong>Expansion fittings:</strong> Required for long runs to accommodate thermal expansion</li>
                <li><strong>Drainage:</strong> Slope conduit to allow moisture drainage; use weep holes at low points</li>
              </ul>

              <div className="bg-white/5 rounded-xl p-6 my-6">
                <h4 className="font-semibold mb-3">Conduit Fill Limits (NEC Chapter 9)</h4>
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div className="bg-purple-900/30 rounded-lg p-4">
                    <div className="text-2xl font-bold text-purple-400">53%</div>
                    <div className="text-white/60 text-sm">1 Wire</div>
                  </div>
                  <div className="bg-purple-900/30 rounded-lg p-4">
                    <div className="text-2xl font-bold text-purple-400">31%</div>
                    <div className="text-white/60 text-sm">2 Wires</div>
                  </div>
                  <div className="bg-purple-900/30 rounded-lg p-4">
                    <div className="text-2xl font-bold text-purple-400">40%</div>
                    <div className="text-white/60 text-sm">3+ Wires</div>
                  </div>
                </div>
              </div>
            </section>

            <section id="cable-selection" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Underground Cable Selection</h2>
              <p className="text-white/80 mb-4">
                Choosing the correct cable type is critical for underground installations. The cable must be rated for the installation environment.
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-3">Cable Types for Underground Use</h3>
              <div className="grid md:grid-cols-2 gap-4 my-6">
                <div className="bg-amber-900/30 rounded-xl p-6">
                  <h4 className="font-semibold text-amber-400 mb-2">UF-B (Direct Burial)</h4>
                  <p className="text-white/70 text-sm mb-3">Underground Feeder cable</p>
                  <ul className="text-white/60 text-sm space-y-1">
                    <li>• Suitable for direct burial or in conduit</li>
                    <li>• Gray outer jacket</li>
                    <li>• 60°C temperature rating</li>
                    <li>• NM-B equivalent for underground</li>
                  </ul>
                </div>
                <div className="bg-cyan-900/30 rounded-xl p-6">
                  <h4 className="font-semibold text-cyan-400 mb-2">USE-2 (Underground Service)</h4>
                  <p className="text-white/70 text-sm mb-3">Underground Service Entrance</p>
                  <ul className="text-white/60 text-sm space-y-1">
                    <li>• Single conductor cables</li>
                    <li>• 90°C wet rating</li>
                    <li>• Often used for services</li>
                    <li>• Higher ampacity than UF-B</li>
                  </ul>
                </div>
                <div className="bg-purple-900/30 rounded-xl p-6">
                  <h4 className="font-semibold text-purple-400 mb-2">THWN/THWN-2 (In Conduit)</h4>
                  <p className="text-white/70 text-sm mb-3">For installation in conduit only</p>
                  <ul className="text-white/60 text-sm space-y-1">
                    <li>• Must be in conduit underground</li>
                    <li>• 75°C (THWN) or 90°C (THWN-2) wet</li>
                    <li>• Most common for larger installations</li>
                    <li>• Higher ampacity ratings</li>
                  </ul>
                </div>
                <div className="bg-green-900/30 rounded-xl p-6">
                  <h4 className="font-semibold text-green-400 mb-2">XHHW-2 (Premium)</h4>
                  <p className="text-white/70 text-sm mb-3">Cross-linked polyethylene</p>
                  <ul className="text-white/60 text-sm space-y-1">
                    <li>• 90°C wet or dry</li>
                    <li>• Excellent for underground</li>
                    <li>• Higher ampacity</li>
                    <li>• More expensive than THWN</li>
                  </ul>
                </div>
              </div>

              <div className="bg-red-900/30 border border-red-500/30 rounded-xl p-6 my-6">
                <h4 className="font-semibold text-red-400 mb-2">Cables NOT Suitable for Underground</h4>
                <ul className="text-white/70 space-y-1">
                  <li>• <strong>NM-B (Romex):</strong> Not rated for wet locations</li>
                  <li>• <strong>THHN only:</strong> Must have "W" rating for wet locations</li>
                  <li>• <strong>Aluminum SE Cable:</strong> Without proper underground rating</li>
                </ul>
              </div>
            </section>

            <section id="trenching" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Trenching Best Practices</h2>
              <p className="text-white/80 mb-4">
                Proper trenching is essential for a long-lasting, code-compliant underground installation.
              </p>

              <div className="my-8">
                <TrenchDetailDiagram />
              </div>

              <h3 className="text-xl font-semibold mt-6 mb-3">Trench Preparation Steps</h3>
              <div className="space-y-4 my-6">
                <div className="bg-white/5 rounded-xl p-4">
                  <p className="text-white/70"><strong>Step 1:</strong> Mark the route and call 811</p>
                  <p className="text-white/60 text-sm mt-1">Plan the route avoiding existing utilities, tree roots, and irrigation</p>
                </div>
                <div className="bg-white/5 rounded-xl p-4">
                  <p className="text-white/70"><strong>Step 2:</strong> Excavate to proper depth</p>
                  <p className="text-white/60 text-sm mt-1">Dig 3-4" deeper than required to allow for bedding material</p>
                </div>
                <div className="bg-white/5 rounded-xl p-4">
                  <p className="text-white/70"><strong>Step 3:</strong> Prepare the trench bottom</p>
                  <p className="text-white/60 text-sm mt-1">Remove rocks and debris; add 3-4" of sand or fine soil</p>
                </div>
                <div className="bg-white/5 rounded-xl p-4">
                  <p className="text-white/70"><strong>Step 4:</strong> Install cable or conduit</p>
                  <p className="text-white/60 text-sm mt-1">Lay cable without tension; support conduit to prevent sagging</p>
                </div>
                <div className="bg-white/5 rounded-xl p-4">
                  <p className="text-white/70"><strong>Step 5:</strong> Initial backfill</p>
                  <p className="text-white/60 text-sm mt-1">Cover with 3-4" of sand or rock-free soil; compact lightly</p>
                </div>
                <div className="bg-white/5 rounded-xl p-4">
                  <p className="text-white/70"><strong>Step 6:</strong> Install warning tape</p>
                  <p className="text-white/60 text-sm mt-1">Place caution tape 12" above cables (required for direct burial)</p>
                </div>
                <div className="bg-white/5 rounded-xl p-4">
                  <p className="text-white/70"><strong>Step 7:</strong> Complete backfill</p>
                  <p className="text-white/60 text-sm mt-1">Fill in layers, compacting each layer; finish with topsoil</p>
                </div>
              </div>

              <div className="bg-purple-900/30 border border-purple-500/30 rounded-xl p-6 my-6">
                <h4 className="font-semibold text-purple-400 mb-2">Documentation Tip</h4>
                <p className="text-white/70">
                  Photograph the trench before backfilling, including a tape measure showing depth. Document the route with measurements from permanent structures. This helps with future repairs or additions and may be required by inspectors.
                </p>
              </div>
            </section>

            <section id="gfci-protection" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">GFCI Protection Requirements</h2>
              <p className="text-white/80 mb-4">
                Underground wiring often supplies outdoor receptacles, which require GFCI protection per NEC 210.8.
              </p>

              <div className="bg-green-900/30 border border-green-500/30 rounded-xl p-6 my-6">
                <h4 className="font-semibold text-green-400 mb-3">GFCI Required Locations (Outdoor)</h4>
                <ul className="text-white/70 space-y-2">
                  <li>• All outdoor receptacles at dwelling units</li>
                  <li>• Receptacles in garages and accessory buildings</li>
                  <li>• Pool and spa equipment</li>
                  <li>• Boathouses and docks</li>
                  <li>• Any receptacle within 6 feet of water</li>
                </ul>
              </div>

              <p className="text-white/80 mb-4">
                Note: NEC 300.5(D) Exception allows reduced burial depth (12" instead of 24") for residential 120V, 20A GFCI-protected circuits. This can significantly reduce excavation work for residential landscape and outbuilding circuits.
              </p>
            </section>

            <section id="special-locations" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Special Location Requirements</h2>

              <h3 className="text-xl font-semibold mt-6 mb-3">Under Driveways and Parking Areas</h3>
              <p className="text-white/80 mb-4">
                Vehicle traffic areas require additional consideration:
              </p>
              <ul className="list-disc list-inside text-white/70 space-y-2 mb-4">
                <li>RMC or IMC conduit recommended for maximum protection</li>
                <li>PVC Schedule 80 required if using PVC (not Schedule 40)</li>
                <li>Same depth requirements apply, but consider using RMC at 6"</li>
                <li>Encased in concrete is an option for existing driveways</li>
              </ul>

              <h3 className="text-xl font-semibold mt-6 mb-3">Swimming Pool Circuits</h3>
              <p className="text-white/80 mb-4">
                Per NEC Article 680, pool electrical has specific underground requirements:
              </p>
              <ul className="list-disc list-inside text-white/70 space-y-2 mb-4">
                <li>All underground wiring within 5 feet of pool must be in rigid metal or PVC conduit</li>
                <li>Equipment bonding required</li>
                <li>GFCI protection mandatory for all pool equipment</li>
                <li>Minimum 18" burial depth for most conduit types</li>
              </ul>

              <h3 className="text-xl font-semibold mt-6 mb-3">Agricultural Buildings</h3>
              <p className="text-white/80 mb-4">
                Agricultural environments may require:
              </p>
              <ul className="list-disc list-inside text-white/70 space-y-2 mb-4">
                <li>Corrosion-resistant conduit (PVC preferred over metal)</li>
                <li>Protection from equipment and animal traffic</li>
                <li>Deeper burial in cultivated areas</li>
                <li>Special grounding considerations per NEC 547</li>
              </ul>
            </section>

            {/* CTA Section */}
            <section className="bg-gradient-to-r from-emerald-900/30 to-cyan-900/30 rounded-2xl p-8 my-12">
              <h2 className="text-2xl font-display font-bold mb-4 text-center">
                Calculate Wire Size for Long Runs
              </h2>
              <p className="text-white/70 mb-6 text-center">
                Underground runs often require upsizing conductors for voltage drop. Use Ampora's voltage drop calculator to ensure proper wire sizing for any distance.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <a
                  href="https://apps.apple.com/us/app/ampora/id6753693522"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-white text-black font-semibold rounded-full hover:bg-white/90 transition-colors text-center"
                >
                  Download Free on App Store
                </a>
                <Link
                  href="/calculators/voltage-drop"
                  className="px-6 py-3 bg-emerald-600 text-white font-semibold rounded-full hover:bg-emerald-500 transition-colors text-center"
                >
                  Use Voltage Drop Calculator
                </Link>
              </div>
            </section>

            {/* Related Articles */}
            <section className="mt-12">
              <h2 className="text-2xl font-display font-bold mb-6">Related Articles</h2>
              <div className="grid md:grid-cols-2 gap-4">
                <Link href="/blog/how-to-calculate-voltage-drop" className="bg-white/5 hover:bg-white/10 rounded-xl p-6 transition-colors">
                  <span className="text-amber-400 text-sm">Calculations</span>
                  <h3 className="font-semibold mt-2">How to Calculate Voltage Drop</h3>
                </Link>
                <Link href="/blog/conduit-fill-calculation-guide" className="bg-white/5 hover:bg-white/10 rounded-xl p-6 transition-colors">
                  <span className="text-amber-400 text-sm">Calculations</span>
                  <h3 className="font-semibold mt-2">Conduit Fill Calculation Guide</h3>
                </Link>
                <Link href="/blog/outdoor-receptacle-requirements-nec" className="bg-white/5 hover:bg-white/10 rounded-xl p-6 transition-colors">
                  <span className="text-purple-400 text-sm">NEC Code</span>
                  <h3 className="font-semibold mt-2">Outdoor Receptacle Requirements</h3>
                </Link>
                <Link href="/blog/wire-sizing-guide-nec-ampacity-tables" className="bg-white/5 hover:bg-white/10 rounded-xl p-6 transition-colors">
                  <span className="text-amber-400 text-sm">Calculations</span>
                  <h3 className="font-semibold mt-2">Wire Sizing Guide: NEC Ampacity Tables</h3>
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
