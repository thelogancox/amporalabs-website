import { Metadata } from "next";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import { BreadcrumbJsonLd, BlogPostingJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Outdoor & Landscape Lighting: NEC Requirements Guide",
  description: "Complete guide to outdoor and landscape lighting NEC requirements. Learn low-voltage vs line-voltage systems, NEC Article 411, transformer sizing, burial depths, GFCI protection, wet location ratings, and commercial landscape lighting code compliance.",
  keywords: [
    "landscape lighting NEC",
    "outdoor lighting requirements",
    "NEC Article 411",
    "low voltage landscape lighting",
    "landscape transformer sizing",
    "burial depth landscape wire",
    "GFCI outdoor lighting",
    "wet location fixtures",
    "LED landscape lighting",
    "commercial landscape lighting code",
  ],
  alternates: {
    canonical: "https://amporalabs.com/blog/outdoor-landscape-lighting-nec",
  },
  openGraph: {
    title: "Outdoor & Landscape Lighting: NEC Requirements Guide - Ampora",
    description: "NEC requirements for outdoor and landscape lighting including low-voltage systems, transformer sizing, burial depths, and GFCI protection.",
    url: "https://amporalabs.com/blog/outdoor-landscape-lighting-nec",
    type: "article",
    publishedTime: "2025-06-05",
  },
};

function HeroIllustration() {
  return (
    <svg viewBox="0 0 400 200" className="w-full h-48 md:h-56" aria-label="Outdoor landscape lighting illustration with path lights, tree uplights, and transformer">
      {/* Night sky background */}
      <rect x="0" y="0" width="400" height="200" fill="#0a0a0a" rx="8"/>

      {/* Stars */}
      <circle cx="30" cy="15" r="1" fill="#fff" opacity="0.4"/>
      <circle cx="95" cy="22" r="0.8" fill="#fff" opacity="0.3"/>
      <circle cx="180" cy="10" r="1" fill="#fff" opacity="0.5"/>
      <circle cx="260" cy="18" r="0.8" fill="#fff" opacity="0.3"/>
      <circle cx="340" cy="12" r="1" fill="#fff" opacity="0.4"/>
      <circle cx="370" cy="28" r="0.7" fill="#fff" opacity="0.3"/>

      {/* Ground */}
      <rect x="0" y="150" width="400" height="50" fill="#1a3a1a" rx="0"/>
      <rect x="0" y="148" width="400" height="4" fill="#2d5a2d"/>

      {/* Pathway */}
      <path d="M60 152 Q100 155, 140 152 Q180 149, 220 152 Q260 155, 300 152" fill="none" stroke="#4a4a4a" strokeWidth="12" opacity="0.6"/>
      <path d="M60 152 Q100 155, 140 152 Q180 149, 220 152 Q260 155, 300 152" fill="none" stroke="#5a5a5a" strokeWidth="8" opacity="0.4"/>

      {/* Tree 1 (left) */}
      <g transform="translate(50, 60)">
        {/* Trunk */}
        <rect x="18" y="60" width="8" height="32" fill="#4a3520"/>
        {/* Canopy */}
        <ellipse cx="22" cy="40" rx="28" ry="35" fill="#1a4a1a" stroke="#2d6a2d" strokeWidth="1"/>
        <ellipse cx="22" cy="40" rx="22" ry="28" fill="#1f5a1f" opacity="0.6"/>
        {/* Uplight glow on tree */}
        <ellipse cx="22" cy="70" rx="18" ry="30" fill="#22c55e" opacity="0.15"/>
        <ellipse cx="22" cy="60" rx="12" ry="20" fill="#4ade80" opacity="0.1"/>
      </g>

      {/* Tree uplight 1 fixture */}
      <g transform="translate(62, 148)">
        <rect x="0" y="0" width="10" height="6" rx="2" fill="#374151" stroke="#22c55e" strokeWidth="1"/>
        <line x1="5" y1="0" x2="5" y2="-8" stroke="#4ade80" strokeWidth="2" opacity="0.6"/>
        <circle cx="5" cy="-2" r="3" fill="#22c55e" opacity="0.4"/>
      </g>

      {/* Tree 2 (right) */}
      <g transform="translate(310, 50)">
        {/* Trunk */}
        <rect x="16" y="65" width="8" height="35" fill="#4a3520"/>
        {/* Canopy */}
        <ellipse cx="20" cy="42" rx="32" ry="38" fill="#1a4a1a" stroke="#2d6a2d" strokeWidth="1"/>
        <ellipse cx="20" cy="42" rx="25" ry="30" fill="#1f5a1f" opacity="0.6"/>
        {/* Uplight glow on tree */}
        <ellipse cx="20" cy="75" rx="18" ry="30" fill="#22c55e" opacity="0.15"/>
        <ellipse cx="20" cy="65" rx="12" ry="20" fill="#4ade80" opacity="0.1"/>
      </g>

      {/* Tree uplight 2 fixture */}
      <g transform="translate(322, 148)">
        <rect x="0" y="0" width="10" height="6" rx="2" fill="#374151" stroke="#22c55e" strokeWidth="1"/>
        <line x1="5" y1="0" x2="5" y2="-8" stroke="#4ade80" strokeWidth="2" opacity="0.6"/>
        <circle cx="5" cy="-2" r="3" fill="#22c55e" opacity="0.4"/>
      </g>

      {/* Path light 1 */}
      <g transform="translate(95, 120)">
        <line x1="5" y1="30" x2="5" y2="10" stroke="#6b7280" strokeWidth="2"/>
        <polygon points="0,12 10,12 8,6 2,6" fill="#374151" stroke="#9ca3af" strokeWidth="0.5"/>
        <ellipse cx="5" cy="8" rx="6" ry="3" fill="#fbbf24" opacity="0.3"/>
        <circle cx="5" cy="9" r="2" fill="#fbbf24" opacity="0.6"/>
        {/* Light pool on ground */}
        <ellipse cx="5" cy="32" rx="12" ry="4" fill="#fbbf24" opacity="0.15"/>
      </g>

      {/* Path light 2 */}
      <g transform="translate(160, 118)">
        <line x1="5" y1="30" x2="5" y2="10" stroke="#6b7280" strokeWidth="2"/>
        <polygon points="0,12 10,12 8,6 2,6" fill="#374151" stroke="#9ca3af" strokeWidth="0.5"/>
        <ellipse cx="5" cy="8" rx="6" ry="3" fill="#fbbf24" opacity="0.3"/>
        <circle cx="5" cy="9" r="2" fill="#fbbf24" opacity="0.6"/>
        <ellipse cx="5" cy="32" rx="12" ry="4" fill="#fbbf24" opacity="0.15"/>
      </g>

      {/* Path light 3 */}
      <g transform="translate(225, 120)">
        <line x1="5" y1="30" x2="5" y2="10" stroke="#6b7280" strokeWidth="2"/>
        <polygon points="0,12 10,12 8,6 2,6" fill="#374151" stroke="#9ca3af" strokeWidth="0.5"/>
        <ellipse cx="5" cy="8" rx="6" ry="3" fill="#fbbf24" opacity="0.3"/>
        <circle cx="5" cy="9" r="2" fill="#fbbf24" opacity="0.6"/>
        <ellipse cx="5" cy="32" rx="12" ry="4" fill="#fbbf24" opacity="0.15"/>
      </g>

      {/* Buried cable lines (dashed) connecting path lights */}
      <g stroke="#f59e0b" strokeWidth="1" strokeDasharray="3,2" opacity="0.4">
        <line x1="100" y1="155" x2="165" y2="155"/>
        <line x1="165" y1="155" x2="230" y2="155"/>
        <line x1="230" y1="155" x2="290" y2="155"/>
      </g>

      {/* Transformer box */}
      <g transform="translate(370, 130)">
        <rect x="-15" y="0" width="30" height="22" rx="3" fill="#1f2937" stroke="#a855f7" strokeWidth="2"/>
        {/* Transformer symbol */}
        <text x="0" y="10" textAnchor="middle" fill="#a855f7" fontSize="6" fontWeight="bold">120V</text>
        <line x1="-6" y1="13" x2="6" y2="13" stroke="#a855f7" strokeWidth="1"/>
        <text x="0" y="20" textAnchor="middle" fill="#c4b5fd" fontSize="5">12V</text>
      </g>

      {/* Wire from transformer to lights */}
      <line x1="355" y1="145" x2="290" y2="155" stroke="#f59e0b" strokeWidth="1" strokeDasharray="3,2" opacity="0.4"/>

      {/* Labels */}
      <text x="100" y="190" textAnchor="middle" fill="#fbbf24" fontSize="8" fontWeight="bold">PATH LIGHTS</text>
      <text x="72" y="178" textAnchor="middle" fill="#22c55e" fontSize="7" fontWeight="bold">UPLIGHT</text>
      <text x="327" y="178" textAnchor="middle" fill="#22c55e" fontSize="7" fontWeight="bold">UPLIGHT</text>
      <text x="370" y="165" textAnchor="middle" fill="#a855f7" fontSize="7" fontWeight="bold">TRANSFORMER</text>
      <text x="220" y="170" textAnchor="middle" fill="#f59e0b" fontSize="6" opacity="0.7">--- buried low-voltage cable ---</text>
    </svg>
  );
}

export default function OutdoorLandscapeLightingPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navigation />
      <div className="pt-20">
        <BreadcrumbJsonLd
          items={[
            { name: "Home", url: "https://amporalabs.com" },
            { name: "Blog", url: "https://amporalabs.com/blog" },
            { name: "Outdoor Landscape Lighting", url: "https://amporalabs.com/blog/outdoor-landscape-lighting-nec" },
          ]}
        />
        <BlogPostingJsonLd
          headline="Outdoor & Landscape Lighting: NEC Requirements Guide"
          description="Complete guide to outdoor and landscape lighting NEC requirements including low-voltage systems, transformer sizing, burial depths, and GFCI protection."
          datePublished="2025-06-05"
          dateModified="2025-06-05"
          url="https://amporalabs.com/blog/outdoor-landscape-lighting-nec"
          wordCount={3400}
          keywords={["landscape lighting NEC", "outdoor lighting", "NEC Article 411", "low voltage lighting", "landscape transformer"]}
        />

        <article className="max-w-4xl mx-auto px-6 py-12">
          {/* Breadcrumb */}
          <nav className="text-sm text-white/60 mb-8">
            <Link href="/" className="hover:text-white">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/blog" className="hover:text-white">Blog</Link>
            <span className="mx-2">/</span>
            <span className="text-white">Outdoor Landscape Lighting</span>
          </nav>

          {/* Article Header */}
          <header className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <span className="px-3 py-1 bg-green-600/30 text-green-300 text-sm font-medium rounded-full">
                Installation
              </span>
              <span className="text-white/40 text-sm">11 min read</span>
              <span className="text-white/40 text-sm">June 5, 2025</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6 leading-tight">
              Outdoor &amp; Landscape Lighting: NEC Requirements Guide
            </h1>
            <p className="text-xl text-white/70">
              Everything electricians need to know about landscape lighting installations. From low-voltage path lights to commercial parking lot fixtures, understand the NEC requirements for safe, code-compliant outdoor lighting systems.
            </p>
          </header>

          <div className="mb-12 bg-gradient-to-br from-green-900/20 to-cyan-900/20 rounded-2xl p-6 border border-white/10">
            <HeroIllustration />
          </div>

          {/* Quick Reference CTA */}
          <div className="bg-green-900/30 border border-green-500/30 rounded-2xl p-6 mb-12">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div>
                <h3 className="font-display font-bold text-lg mb-1">Quick NEC Reference</h3>
                <p className="text-white/70 text-sm">Access outdoor lighting code requirements instantly with Ampora&apos;s NEC lookup.</p>
              </div>
              <a
                href="/get"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-green-600 text-white font-semibold rounded-full hover:bg-green-500 transition-colors whitespace-nowrap"
              >
                Download Free
              </a>
            </div>
          </div>

          {/* Table of Contents */}
          <div className="bg-white/5 rounded-2xl p-6 mb-12">
            <h2 className="font-display font-bold mb-4">In This Guide</h2>
            <ul className="space-y-2 text-white/70">
              <li><a href="#line-vs-low-voltage" className="hover:text-green-400">&#8594; Line Voltage vs Low Voltage Landscape Lighting</a></li>
              <li><a href="#nec-411" className="hover:text-green-400">&#8594; NEC Article 411: Low-Voltage Lighting</a></li>
              <li><a href="#transformer-sizing" className="hover:text-green-400">&#8594; Transformer Sizing and Placement</a></li>
              <li><a href="#burial-depth" className="hover:text-green-400">&#8594; Burial Depth Requirements</a></li>
              <li><a href="#gfci-protection" className="hover:text-green-400">&#8594; GFCI Protection for Outdoor Circuits</a></li>
              <li><a href="#wet-location" className="hover:text-green-400">&#8594; Wet Location Ratings and Fixtures</a></li>
              <li><a href="#controls" className="hover:text-green-400">&#8594; Photocell and Timer Controls</a></li>
              <li><a href="#led-advantages" className="hover:text-green-400">&#8594; LED Landscape Lighting Advantages</a></li>
              <li><a href="#conduit-vs-direct-burial" className="hover:text-green-400">&#8594; Conduit vs Direct Burial Cable</a></li>
              <li><a href="#commercial" className="hover:text-green-400">&#8594; Commercial Landscape Lighting</a></li>
              <li><a href="#common-mistakes" className="hover:text-green-400">&#8594; Common Installation Mistakes</a></li>
              <li><a href="#maintenance" className="hover:text-green-400">&#8594; Maintenance Considerations</a></li>
            </ul>
          </div>

          {/* Article Content */}
          <div className="prose prose-invert prose-lg max-w-none">

            <section id="line-vs-low-voltage" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Line Voltage vs Low Voltage Landscape Lighting</h2>
              <p className="text-white/80 mb-4">
                Outdoor landscape lighting falls into two broad categories: <strong>line voltage (120V/277V)</strong> and <strong>low voltage (typically 12V or 24V)</strong>. Each has distinct NEC requirements, installation methods, and ideal applications.
              </p>

              <div className="grid md:grid-cols-2 gap-6 my-6">
                <div className="bg-amber-900/30 rounded-xl p-6">
                  <h4 className="font-semibold text-amber-400 mb-3">Line Voltage (120V/277V)</h4>
                  <p className="text-white/70 text-sm mb-3">Full NEC wiring methods apply:</p>
                  <ul className="text-white/60 text-sm space-y-1">
                    <li>&#8226; Post lights, bollard lights, flood lights</li>
                    <li>&#8226; Parking lot and security lighting</li>
                    <li>&#8226; Long-distance runs without voltage drop issues</li>
                    <li>&#8226; Requires conduit, junction boxes, proper burial depth</li>
                    <li>&#8226; Must comply with NEC Articles 300, 310, 410</li>
                    <li>&#8226; Licensed electrician typically required</li>
                  </ul>
                  <div className="mt-3 p-2 bg-amber-900/50 rounded">
                    <p className="text-amber-400 text-sm font-semibold">Best for: commercial, security, long runs</p>
                  </div>
                </div>
                <div className="bg-green-900/30 rounded-xl p-6">
                  <h4 className="font-semibold text-green-400 mb-3">Low Voltage (12V/24V)</h4>
                  <p className="text-white/70 text-sm mb-3">NEC Article 411 governs:</p>
                  <ul className="text-white/60 text-sm space-y-1">
                    <li>&#8226; Path lights, accent lights, garden lights</li>
                    <li>&#8226; Uplighting trees and architectural features</li>
                    <li>&#8226; Step lights, deck lights, underwater pond lights</li>
                    <li>&#8226; Requires listed transformer (Class 2 power supply)</li>
                    <li>&#8226; Simplified wiring - no conduit required in most cases</li>
                    <li>&#8226; Reduced shock hazard at 12V</li>
                  </ul>
                  <div className="mt-3 p-2 bg-green-900/50 rounded">
                    <p className="text-green-400 text-sm font-semibold">Best for: residential, decorative, accent</p>
                  </div>
                </div>
              </div>

              <div className="bg-orange-900/30 border border-orange-500/30 rounded-xl p-6 my-6">
                <h4 className="font-semibold text-orange-400 mb-2">Key Distinction: Voltage Classification</h4>
                <p className="text-white/70">
                  The NEC defines low-voltage lighting systems as operating at <strong>30 volts or less</strong> per Article 411. Systems operating above 30V are considered line voltage and must comply with all standard NEC wiring methods. Some &quot;low-voltage&quot; landscape systems marketed at 36V or 48V do not qualify under Article 411 and require full NEC wiring compliance.
                </p>
              </div>
            </section>

            <section id="nec-411" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">NEC Article 411: Low-Voltage Lighting</h2>
              <p className="text-white/80 mb-4">
                <strong>NEC Article 411</strong> covers lighting systems operating at 30 volts or less. This article defines the requirements for power supplies, luminaires, and wiring used in low-voltage landscape lighting installations.
              </p>

              <div className="bg-green-900/30 border border-green-500/30 rounded-xl p-6 my-6">
                <h3 className="font-semibold text-green-400 mb-3">NEC 411 Key Requirements</h3>
                <ul className="text-white/80 space-y-2">
                  <li><strong>411.3 - Listing Required:</strong> Low-voltage lighting systems must be listed as a complete system or assembled from individually listed parts</li>
                  <li><strong>411.4 - Power Supply:</strong> Must use a listed Class 2 power supply (transformer) that limits output to 25 amps maximum</li>
                  <li><strong>411.4(A) - Rating:</strong> Maximum output of 25 amperes on the secondary (low-voltage) side</li>
                  <li><strong>411.4(B) - Installation:</strong> Power supply shall not be installed in contact with combustible material</li>
                  <li><strong>411.5 - Luminaires:</strong> Listed for the specific application and location (wet, damp, or dry)</li>
                </ul>
              </div>

              <h3 className="text-xl font-semibold mt-6 mb-3">Class 2 Power Supply Requirements</h3>
              <p className="text-white/80 mb-4">
                The power supply (transformer) is the heart of any low-voltage landscape lighting system. Per NEC 411.4, it must be a listed Class 2 power supply that:
              </p>
              <ul className="list-disc list-inside text-white/70 space-y-2 mb-4">
                <li>Limits output voltage to 30V or less</li>
                <li>Limits output current to 25 amps maximum</li>
                <li>Provides isolation between the primary (line voltage) and secondary (low voltage) circuits</li>
                <li>Is listed and labeled per UL 1838 or equivalent standard</li>
                <li>Has overcurrent protection on the secondary side</li>
              </ul>

              <h3 className="text-xl font-semibold mt-6 mb-3">Wiring Under Article 411</h3>
              <p className="text-white/80 mb-4">
                One significant advantage of low-voltage landscape lighting is simplified wiring requirements. Under Article 411:
              </p>
              <ul className="list-disc list-inside text-white/70 space-y-2 mb-4">
                <li>Secondary wiring (12V side) does not require conduit in most installations</li>
                <li>Listed low-voltage landscape cable may be direct-buried</li>
                <li>Connectors must be listed for direct burial when used underground</li>
                <li>Wire gauge must be adequate for the load and run length (voltage drop)</li>
                <li>Wiring must be protected from physical damage where exposed</li>
              </ul>

              <div className="bg-purple-900/30 border border-purple-500/30 rounded-xl p-6 my-6">
                <h4 className="font-semibold text-purple-400 mb-2">Pro Tip: Article 411 vs Article 725</h4>
                <p className="text-white/70">
                  NEC Article 411 specifically covers low-voltage lighting systems. Article 725 covers Class 2 and Class 3 remote-control, signaling, and power-limited circuits. While both deal with low-voltage wiring, landscape lighting transformers and fixtures must comply with Article 411 requirements. The power supply feeding the landscape system must be on a circuit that complies with all standard NEC rules (Article 210 branch circuits, Article 300 wiring methods, etc.).
                </p>
              </div>
            </section>

            <section id="transformer-sizing" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Transformer Sizing and Placement</h2>
              <p className="text-white/80 mb-4">
                Proper transformer sizing is critical for reliable landscape lighting performance. An undersized transformer leads to dim lights, while an oversized unit wastes energy and money.
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-3">Calculating Transformer Size</h3>
              <p className="text-white/80 mb-4">
                Follow this process to size a landscape lighting transformer:
              </p>
              <div className="bg-white/5 rounded-xl p-6 my-6">
                <ol className="text-white/80 space-y-3 list-decimal list-inside">
                  <li><strong>Total wattage:</strong> Add up the wattage of every fixture on the system</li>
                  <li><strong>Add 20% safety margin:</strong> Multiply total wattage by 1.2 for headroom</li>
                  <li><strong>Account for future expansion:</strong> Consider adding 10-15% more for future fixtures</li>
                  <li><strong>Select transformer:</strong> Choose a transformer rated at or above the calculated total</li>
                </ol>
              </div>

              <div className="overflow-x-auto my-6">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-white/20">
                      <th className="text-left py-3 px-4 text-white/60">Transformer Size</th>
                      <th className="text-left py-3 px-4 text-white/60">Usable Capacity (80%)</th>
                      <th className="text-left py-3 px-4 text-white/60">Typical Application</th>
                    </tr>
                  </thead>
                  <tbody className="text-white/80">
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-semibold">150W</td>
                      <td className="py-3 px-4">120W</td>
                      <td className="py-3 px-4">Small residential - 8-12 LED path lights</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-semibold">300W</td>
                      <td className="py-3 px-4">240W</td>
                      <td className="py-3 px-4">Medium residential - paths, accent, and uplights</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-semibold">600W</td>
                      <td className="py-3 px-4">480W</td>
                      <td className="py-3 px-4">Large residential - full property coverage</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-semibold">900W-1200W</td>
                      <td className="py-3 px-4">720W-960W</td>
                      <td className="py-3 px-4">Large properties or light commercial</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h3 className="text-xl font-semibold mt-6 mb-3">Transformer Placement Requirements</h3>
              <ul className="list-disc list-inside text-white/70 space-y-2 mb-4">
                <li><strong>Outdoor rated:</strong> Must be listed for outdoor use (NEMA 3R minimum) if installed outside</li>
                <li><strong>Accessible:</strong> Install where accessible for maintenance and timer adjustments</li>
                <li><strong>Clearance:</strong> Mount at least 12 inches above grade to prevent water contact</li>
                <li><strong>Not in contact with combustible material:</strong> Per NEC 411.4(B), maintain clearance from wood, vinyl siding, and dry vegetation</li>
                <li><strong>Ventilation:</strong> Ensure adequate airflow - magnetic transformers generate heat under load</li>
                <li><strong>GFCI-protected circuit:</strong> The 120V supply feeding the transformer must be on a GFCI-protected circuit if installed outdoors</li>
              </ul>

              <div className="bg-orange-900/30 border border-orange-500/30 rounded-xl p-6 my-6">
                <h4 className="font-semibold text-orange-400 mb-2">Multi-Tap Transformers</h4>
                <p className="text-white/70">
                  Professional landscape transformers often include multiple voltage taps (12V, 13V, 14V, 15V). Higher taps compensate for voltage drop on longer cable runs. A fixture at the end of a 100-foot run on the 15V tap will receive approximately 12V after accounting for cable resistance. Always measure voltage at the furthest fixture to verify proper operation.
                </p>
              </div>
            </section>

            <section id="burial-depth" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Burial Depth Requirements</h2>
              <p className="text-white/80 mb-4">
                Burial depth requirements differ significantly between line-voltage and low-voltage landscape lighting systems. NEC Table 300.5 governs minimum cover requirements for all underground installations.
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-3">Line Voltage (120V) Burial Depths</h3>
              <div className="overflow-x-auto my-6">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-white/20">
                      <th className="text-left py-3 px-4 text-white/60">Wiring Method</th>
                      <th className="text-left py-3 px-4 text-white/60">Minimum Cover</th>
                      <th className="text-left py-3 px-4 text-white/60">NEC Reference</th>
                    </tr>
                  </thead>
                  <tbody className="text-white/80">
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">Direct-buried cables (UF cable)</td>
                      <td className="py-3 px-4 font-mono">24 inches</td>
                      <td className="py-3 px-4 text-white/60">Table 300.5</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">Rigid metal conduit (RMC) or IMC</td>
                      <td className="py-3 px-4 font-mono">6 inches</td>
                      <td className="py-3 px-4 text-white/60">Table 300.5</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">Non-metallic conduit (PVC, HDPE)</td>
                      <td className="py-3 px-4 font-mono">18 inches</td>
                      <td className="py-3 px-4 text-white/60">Table 300.5</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4">PVC with GFCI protection (residential, 20A or less)</td>
                      <td className="py-3 px-4 font-mono">12 inches</td>
                      <td className="py-3 px-4 text-white/60">Table 300.5, Column 4</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h3 className="text-xl font-semibold mt-6 mb-3">Low Voltage (30V or Less) Burial Depths</h3>
              <div className="bg-green-900/30 border border-green-500/30 rounded-xl p-6 my-6">
                <h4 className="font-semibold text-green-400 mb-3">NEC Table 300.5, Column 5</h4>
                <p className="text-white/80 mb-3">
                  For circuits operating at 30V or less (low-voltage landscape lighting):
                </p>
                <ul className="text-white/70 space-y-2">
                  <li><strong>Direct burial cable:</strong> 6 inches minimum cover</li>
                  <li><strong>In conduit:</strong> 6 inches minimum cover</li>
                  <li><strong>Under driveways or parking areas:</strong> 18 inches recommended even for low voltage</li>
                  <li><strong>Under sidewalks:</strong> Sleeve under sidewalk when possible, 6 inches minimum</li>
                </ul>
              </div>

              <div className="bg-orange-900/30 border border-orange-500/30 rounded-xl p-6 my-6">
                <h4 className="font-semibold text-orange-400 mb-2">Practical Guidance: Go Deeper</h4>
                <p className="text-white/70">
                  While 6 inches is the NEC minimum for low-voltage landscape wire, most professional installers bury cable at <strong>8-12 inches</strong> to protect against damage from garden tools, aerating equipment, and edgers. In beds that are regularly cultivated, deeper burial prevents accidental cuts. Always mark cable locations on the as-built drawing.
                </p>
              </div>
            </section>

            <section id="gfci-protection" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">GFCI Protection for Outdoor Circuits</h2>
              <p className="text-white/80 mb-4">
                GFCI protection requirements apply to the line-voltage side of outdoor lighting installations. Understanding when GFCI is required helps prevent both code violations and dangerous shock hazards.
              </p>

              <div className="bg-green-900/30 border border-green-500/30 rounded-xl p-6 my-6">
                <h3 className="font-semibold text-green-400 mb-3">When GFCI Is Required</h3>
                <ul className="text-white/80 space-y-2">
                  <li><strong>NEC 210.8(A)(3):</strong> All 125V-250V outdoor receptacles at dwelling units - this includes the receptacle feeding a landscape transformer</li>
                  <li><strong>NEC 210.8(F):</strong> Outdoor outlets (not just receptacles) in dwelling units - applies to hardwired outdoor lighting circuits at 120V-250V, 50A or less</li>
                  <li><strong>NEC 590.6:</strong> Temporary lighting installations at construction sites</li>
                  <li><strong>NEC 680.22:</strong> Lighting fixtures within specific distances of pools and spas</li>
                </ul>
              </div>

              <h3 className="text-xl font-semibold mt-6 mb-3">GFCI and Low-Voltage Transformers</h3>
              <p className="text-white/80 mb-4">
                The 120V receptacle or circuit supplying power to a landscape lighting transformer installed outdoors requires GFCI protection. This protects the line-voltage side of the installation. Key considerations:
              </p>
              <ul className="list-disc list-inside text-white/70 space-y-2 mb-4">
                <li>Plug-in transformers at outdoor receptacles: the receptacle must be GFCI-protected per NEC 210.8(A)(3)</li>
                <li>Hardwired transformers on outdoor circuits: GFCI protection required per NEC 210.8(F) for dwelling units</li>
                <li>The low-voltage (12V) secondary side does not require GFCI protection</li>
                <li>GFCI breakers may nuisance-trip with large magnetic transformers due to inrush current - consider electronic transformers or delayed-trip GFCI breakers</li>
              </ul>

              <div className="bg-purple-900/30 border border-purple-500/30 rounded-xl p-6 my-6">
                <h4 className="font-semibold text-purple-400 mb-2">NEC 2020/2023 Change: Outdoor Outlets</h4>
                <p className="text-white/70">
                  NEC 210.8(F) expanded GFCI requirements to include all outdoor outlets (not just receptacles) at dwelling units, rated 150V to ground or less and 50A or less. This means hardwired outdoor lighting circuits now require GFCI protection. Previously, only outdoor receptacles needed GFCI - now hardwired outdoor luminaires do as well.
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
                  <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/></svg><svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor" aria-hidden="true"><path d="M3 20.5V3.5c0-.59.34-1.11.84-1.35L13.69 12 3.84 21.85c-.5-.25-.84-.76-.84-1.35zm13.81-5.38L6.05 21.34l8.49-8.49 2.27 2.27zm3.35-4.31c.34.27.59.69.59 1.19 0 .5-.22.9-.57 1.18l-2.29 1.32L15.39 12l2.5-2.5 2.27 1.31zM6.05 2.66L16.81 8.88l-2.27 2.27L6.05 2.66z"/></svg>
                  Download Free
                </a>
              </div>
            </div>

            <section id="wet-location" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Wet Location Ratings and Fixtures</h2>
              <p className="text-white/80 mb-4">
                All outdoor lighting fixtures must be rated for the environment where they are installed. The NEC distinguishes between wet and damp locations, and fixture ratings must match.
              </p>

              <div className="grid md:grid-cols-2 gap-6 my-6">
                <div className="bg-cyan-900/30 rounded-xl p-6">
                  <h4 className="font-semibold text-cyan-400 mb-3">Wet Location Fixtures</h4>
                  <p className="text-white/70 text-sm mb-3">Required when directly exposed to weather:</p>
                  <ul className="text-white/60 text-sm space-y-1">
                    <li>&#8226; In-ground well lights and uplights</li>
                    <li>&#8226; Path lights without overhead protection</li>
                    <li>&#8226; Flood lights mounted on poles or buildings</li>
                    <li>&#8226; Underwater pond or fountain lights</li>
                    <li>&#8226; Any fixture subject to rain or sprinkler spray</li>
                  </ul>
                  <div className="mt-3 p-2 bg-cyan-900/50 rounded">
                    <p className="text-cyan-400 text-sm font-semibold">Marked: &quot;Suitable for Wet Locations&quot;</p>
                  </div>
                </div>
                <div className="bg-amber-900/30 rounded-xl p-6">
                  <h4 className="font-semibold text-amber-400 mb-3">Damp Location Fixtures</h4>
                  <p className="text-white/70 text-sm mb-3">Acceptable when partially protected:</p>
                  <ul className="text-white/60 text-sm space-y-1">
                    <li>&#8226; Under covered porches and eaves</li>
                    <li>&#8226; Beneath pergolas and gazebos</li>
                    <li>&#8226; Under deep overhangs (protected from rain)</li>
                    <li>&#8226; Covered outdoor kitchen areas</li>
                    <li>&#8226; Protected carport installations</li>
                  </ul>
                  <div className="mt-3 p-2 bg-amber-900/50 rounded">
                    <p className="text-amber-400 text-sm font-semibold">Marked: &quot;Suitable for Damp Locations&quot;</p>
                  </div>
                </div>
              </div>

              <h3 className="text-xl font-semibold mt-6 mb-3">NEC 410.10 - Luminaires in Specific Locations</h3>
              <p className="text-white/80 mb-4">
                NEC Article 410 Part III covers luminaire installation requirements based on location type:
              </p>
              <ul className="list-disc list-inside text-white/70 space-y-2 mb-4">
                <li><strong>410.10(A):</strong> Luminaires in wet or damp locations must be installed to prevent water entry and accumulation</li>
                <li><strong>410.10(A):</strong> Luminaires in wet locations must be marked &quot;Suitable for Wet Locations&quot;</li>
                <li><strong>410.10(A):</strong> Luminaires in damp locations must be marked for wet OR damp locations</li>
                <li><strong>410.10(B):</strong> Luminaires installed in corrosive environments require appropriate ratings</li>
              </ul>

              <div className="bg-green-900/30 border border-green-500/30 rounded-xl p-6 my-6">
                <h4 className="font-semibold text-green-400 mb-2">IP Ratings for Landscape Fixtures</h4>
                <p className="text-white/70 mb-3">
                  While the NEC uses wet/damp location markings, many manufacturers also specify IP (Ingress Protection) ratings:
                </p>
                <ul className="text-white/70 space-y-1 text-sm">
                  <li><strong>IP44:</strong> Splash-proof - suitable for damp locations under overhangs</li>
                  <li><strong>IP65:</strong> Water jet resistant - suitable for most outdoor wet locations</li>
                  <li><strong>IP67:</strong> Temporary immersion resistant - suitable for in-ground well lights</li>
                  <li><strong>IP68:</strong> Continuous submersion rated - required for underwater fixtures</li>
                </ul>
              </div>
            </section>

            <section id="controls" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Photocell and Timer Controls</h2>
              <p className="text-white/80 mb-4">
                Automated controls are standard for landscape lighting, providing convenience while meeting energy code requirements. The NEC addresses control equipment installation and wiring.
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-3">Photocell Controls</h3>
              <p className="text-white/80 mb-4">
                Photocells (photo sensors) automatically turn landscape lighting on at dusk and off at dawn. Installation considerations include:
              </p>
              <ul className="list-disc list-inside text-white/70 space-y-2 mb-4">
                <li><strong>Location:</strong> Install facing north (in Northern Hemisphere) to avoid false switching from direct sunlight</li>
                <li><strong>Wet rating:</strong> Outdoor photocells must be rated for wet locations</li>
                <li><strong>Load rating:</strong> Verify photocell amperage rating exceeds the connected load</li>
                <li><strong>Mounting height:</strong> 6-8 feet above grade, away from artificial light sources</li>
                <li><strong>Wire connections:</strong> All connections in listed weatherproof junction boxes</li>
              </ul>

              <h3 className="text-xl font-semibold mt-6 mb-3">Timer and Smart Controls</h3>
              <p className="text-white/80 mb-4">
                Many landscape lighting transformers include built-in timers, or external timers can be used to control circuits:
              </p>
              <ul className="list-disc list-inside text-white/70 space-y-2 mb-4">
                <li><strong>Astronomical timers:</strong> Automatically adjust on/off times with seasonal changes</li>
                <li><strong>Combination controls:</strong> Photocell + timer for most flexibility (on at dusk, off at midnight)</li>
                <li><strong>Smart controllers:</strong> Wi-Fi/Bluetooth landscape controllers allow zone control and scheduling</li>
                <li><strong>Low-voltage dimmers:</strong> Must be compatible with LED drivers and transformer type (magnetic vs electronic)</li>
              </ul>

              <div className="bg-white/5 rounded-xl p-6 my-6">
                <h4 className="font-semibold mb-3">Energy Code Requirements</h4>
                <p className="text-white/70 mb-3">
                  IECC and local energy codes often require automatic shutoff controls for outdoor lighting:
                </p>
                <ul className="text-white/70 space-y-1 text-sm">
                  <li>&#8226; Commercial outdoor lighting typically requires either a photocell, time clock, or astronomical timer</li>
                  <li>&#8226; Many jurisdictions require landscape lighting to be on a separate switching circuit</li>
                  <li>&#8226; Residential energy codes may limit total exterior lighting wattage</li>
                  <li>&#8226; Check local amendments - some areas restrict nighttime light output (dark sky ordinances)</li>
                </ul>
              </div>
            </section>

            <section id="led-advantages" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">LED Landscape Lighting Advantages</h2>
              <p className="text-white/80 mb-4">
                LED technology has transformed landscape lighting, offering significant advantages for both residential and commercial installations. Understanding how LEDs interact with transformers and wiring is essential for modern landscape lighting design.
              </p>

              <div className="bg-white/5 rounded-xl p-6 my-6">
                <h4 className="font-semibold mb-3">LED vs Halogen: Impact on System Design</h4>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-white/20">
                        <th className="text-left py-2 px-3 text-white/60">Factor</th>
                        <th className="text-left py-2 px-3 text-white/60">Halogen (Legacy)</th>
                        <th className="text-left py-2 px-3 text-white/60">LED (Modern)</th>
                      </tr>
                    </thead>
                    <tbody className="text-white/80">
                      <tr className="border-b border-white/10">
                        <td className="py-2 px-3">Path light wattage</td>
                        <td className="py-2 px-3">20W typical</td>
                        <td className="py-2 px-3">2-5W typical</td>
                      </tr>
                      <tr className="border-b border-white/10">
                        <td className="py-2 px-3">Uplight wattage</td>
                        <td className="py-2 px-3">35-50W typical</td>
                        <td className="py-2 px-3">5-15W typical</td>
                      </tr>
                      <tr className="border-b border-white/10">
                        <td className="py-2 px-3">Transformer loading</td>
                        <td className="py-2 px-3">High - quickly maxes out</td>
                        <td className="py-2 px-3">Low - many more fixtures per transformer</td>
                      </tr>
                      <tr className="border-b border-white/10">
                        <td className="py-2 px-3">Voltage drop sensitivity</td>
                        <td className="py-2 px-3">Less sensitive</td>
                        <td className="py-2 px-3">More sensitive - dimming and flickering</td>
                      </tr>
                      <tr className="border-b border-white/10">
                        <td className="py-2 px-3">Heat generation</td>
                        <td className="py-2 px-3">Very hot - fire risk near mulch</td>
                        <td className="py-2 px-3">Minimal heat output</td>
                      </tr>
                      <tr>
                        <td className="py-2 px-3">Lamp life</td>
                        <td className="py-2 px-3">2,000-5,000 hours</td>
                        <td className="py-2 px-3">25,000-50,000 hours</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <h3 className="text-xl font-semibold mt-6 mb-3">LED Transformer Compatibility</h3>
              <p className="text-white/80 mb-4">
                Not all transformers work well with LED fixtures. Key compatibility considerations:
              </p>
              <ul className="list-disc list-inside text-white/70 space-y-2 mb-4">
                <li><strong>Minimum load:</strong> Some magnetic transformers require a minimum wattage to operate properly - LED loads may be too small</li>
                <li><strong>Electronic transformers:</strong> Designed for LED compatibility with lower minimum loads</li>
                <li><strong>Dimming compatibility:</strong> LED drivers must be compatible with the transformer type for dimming</li>
                <li><strong>Inrush current:</strong> LED fixtures may draw high inrush current at startup, potentially tripping GFCI protection</li>
                <li><strong>Wire gauge still matters:</strong> Even though LED loads are lower, voltage drop across long runs affects LED performance significantly</li>
              </ul>

              <div className="bg-orange-900/30 border border-orange-500/30 rounded-xl p-6 my-6">
                <h4 className="font-semibold text-orange-400 mb-2">Voltage Drop with LEDs</h4>
                <p className="text-white/70">
                  LED landscape fixtures are more sensitive to voltage variations than halogen lamps. While a halogen lamp dims gradually with lower voltage, an LED fixture may flicker, change color temperature, or shut off entirely when voltage drops below its operating range. Use the hub-and-spoke wiring method (home runs from transformer to each zone) rather than daisy-chaining to minimize voltage drop across fixtures.
                </p>
              </div>
            </section>

            <section id="conduit-vs-direct-burial" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Conduit vs Direct Burial Cable</h2>
              <p className="text-white/80 mb-4">
                Choosing the right wiring method depends on whether you are installing line voltage or low voltage, the location, and the level of protection needed.
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-3">Line Voltage Outdoor Lighting Wiring</h3>
              <p className="text-white/80 mb-4">
                For 120V/277V outdoor lighting, standard NEC wiring methods apply:
              </p>
              <ul className="list-disc list-inside text-white/70 space-y-2 mb-4">
                <li><strong>PVC Schedule 40 conduit:</strong> Most common for underground runs - 18-inch minimum cover</li>
                <li><strong>PVC Schedule 80 conduit:</strong> Required where exposed to physical damage above grade</li>
                <li><strong>Rigid metal conduit (RMC):</strong> 6-inch minimum cover - best protection but highest cost</li>
                <li><strong>UF cable (direct burial):</strong> 24-inch minimum cover - no conduit needed but deeper burial required</li>
                <li><strong>Expansion fittings:</strong> Required for PVC conduit runs exceeding temperature-change expansion limits</li>
              </ul>

              <h3 className="text-xl font-semibold mt-6 mb-3">Low Voltage Landscape Cable</h3>
              <p className="text-white/80 mb-4">
                Low-voltage landscape wiring offers more flexibility:
              </p>
              <ul className="list-disc list-inside text-white/70 space-y-2 mb-4">
                <li><strong>Listed landscape cable:</strong> Two-conductor direct burial cable rated for outdoor and underground use</li>
                <li><strong>Common gauges:</strong> 12 AWG, 10 AWG, and 8 AWG for main trunk runs; 16 AWG or 14 AWG for shorter branch runs</li>
                <li><strong>Connectors:</strong> Use listed waterproof connectors designed for direct burial - gel-filled or silicone-sealed types</li>
                <li><strong>No conduit required:</strong> Low-voltage cable can be direct-buried at 6-inch minimum depth</li>
                <li><strong>Conduit recommended:</strong> Under driveways, sidewalks, and high-traffic areas for protection and future access</li>
              </ul>

              <div className="bg-green-900/30 border border-green-500/30 rounded-xl p-6 my-6">
                <h4 className="font-semibold text-green-400 mb-2">Wire Sizing for Voltage Drop</h4>
                <p className="text-white/70 mb-3">
                  For low-voltage landscape lighting, voltage drop must be kept under 10% (ideally under 5%) from transformer to the furthest fixture. Recommended wire gauges by run length for typical loads:
                </p>
                <ul className="text-white/70 space-y-1 text-sm">
                  <li><strong>16 AWG:</strong> Short runs under 25 feet, light loads under 50W</li>
                  <li><strong>14 AWG:</strong> Medium runs to 50 feet, moderate loads</li>
                  <li><strong>12 AWG:</strong> Runs to 100 feet, standard residential installations</li>
                  <li><strong>10 AWG:</strong> Runs to 150 feet or heavy loads</li>
                  <li><strong>8 AWG:</strong> Main trunk lines exceeding 150 feet</li>
                </ul>
              </div>
            </section>

            <section id="commercial" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Commercial Landscape Lighting</h2>
              <p className="text-white/80 mb-4">
                Commercial landscape lighting - including parking lots, building facades, walkways, and signage - operates primarily at line voltage and must comply with additional code requirements beyond residential installations.
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-3">Parking Lot Lighting</h3>
              <p className="text-white/80 mb-4">
                Parking lot lighting is one of the most common commercial outdoor lighting installations. Key NEC requirements include:
              </p>
              <ul className="list-disc list-inside text-white/70 space-y-2 mb-4">
                <li><strong>Circuit protection:</strong> Properly sized overcurrent protection for each lighting circuit</li>
                <li><strong>Grounding:</strong> Metal light poles must be grounded per NEC 250.4 and 410.44</li>
                <li><strong>Handhole access:</strong> Metal poles over 20 feet require a handhole or base access for wiring</li>
                <li><strong>Conductor fill:</strong> Conduit fill calculations per NEC 300.17 and Chapter 9 tables for conductors inside poles</li>
                <li><strong>Disconnecting means:</strong> Required for each building or structure per NEC 225.31</li>
                <li><strong>277V systems:</strong> Common for commercial - requires different wire color coding (brown, orange, yellow)</li>
              </ul>

              <h3 className="text-xl font-semibold mt-6 mb-3">Building Facade and Architectural Lighting</h3>
              <ul className="list-disc list-inside text-white/70 space-y-2 mb-4">
                <li><strong>Fixture mounting:</strong> Must be secured to withstand wind loads per manufacturer specifications</li>
                <li><strong>Water drainage:</strong> Fixtures must be installed to prevent water accumulation per NEC 410.10</li>
                <li><strong>Wet location rating:</strong> Required for all fixtures exposed to weather on building facades</li>
                <li><strong>Branch circuit loading:</strong> Continuous lighting loads cannot exceed 80% of the branch circuit rating per NEC 210.20(A)</li>
                <li><strong>Feeder sizing:</strong> Calculate outdoor lighting loads per NEC 220 for feeder and service sizing</li>
              </ul>

              <div className="bg-white/5 rounded-xl p-6 my-6">
                <h4 className="font-semibold mb-3">Commercial Energy Code Requirements</h4>
                <p className="text-white/70 mb-3">
                  Beyond the NEC, commercial outdoor lighting must also comply with energy codes:
                </p>
                <ul className="text-white/70 space-y-2 text-sm">
                  <li><strong>IECC/ASHRAE 90.1:</strong> Maximum lighting power density (watts per square foot) for parking areas and grounds</li>
                  <li><strong>Automatic controls required:</strong> Photocell, time clock, or astronomical timer</li>
                  <li><strong>Bi-level controls:</strong> Many codes now require reduced lighting levels during unoccupied hours</li>
                  <li><strong>Dark sky compliance:</strong> Full cutoff fixtures may be required to reduce light pollution</li>
                  <li><strong>Emergency egress:</strong> Exit paths require maintained minimum illumination levels</li>
                </ul>
              </div>
            </section>

            <section id="common-mistakes" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Common Installation Mistakes</h2>
              <p className="text-white/80 mb-4">
                Avoid these frequently encountered errors that lead to code violations, callbacks, and system failures:
              </p>

              <div className="bg-red-900/20 border border-red-500/30 rounded-xl p-6 my-6">
                <h4 className="font-semibold text-red-400 mb-3">Top Installation Errors</h4>
                <ul className="text-white/70 space-y-3">
                  <li>
                    <strong>Undersized wire causing voltage drop:</strong> Daisy-chaining fixtures on long runs of undersized wire results in dim fixtures at the end of the run. Use home-run wiring and appropriate wire gauge.
                  </li>
                  <li>
                    <strong>Missing GFCI on transformer supply:</strong> The 120V circuit feeding an outdoor landscape transformer must be GFCI-protected. This is one of the most common violations.
                  </li>
                  <li>
                    <strong>Indoor-rated fixtures used outdoors:</strong> Using fixtures not rated for wet locations outdoors leads to water intrusion, corrosion, and electrical hazards.
                  </li>
                  <li>
                    <strong>Insufficient burial depth:</strong> Shallow-buried cable gets cut by garden tools. Follow NEC minimums and bury deeper in cultivated areas.
                  </li>
                  <li>
                    <strong>Non-waterproof connections underground:</strong> Wire nuts, twist-on connectors, and electrical tape fail underground. Use only listed direct-burial connectors.
                  </li>
                  <li>
                    <strong>Overloaded transformer:</strong> Exceeding transformer capacity causes overheating and premature failure. Stay within 80% of rated capacity.
                  </li>
                  <li>
                    <strong>Transformer in contact with combustible material:</strong> Mounting directly on wood fencing or siding without clearance violates NEC 411.4(B).
                  </li>
                  <li>
                    <strong>Missing grounding on line-voltage pole bases:</strong> Metal light poles must be grounded. Missing ground connections create a shock hazard.
                  </li>
                  <li>
                    <strong>No expansion fittings on PVC conduit runs:</strong> Long PVC conduit runs expand and contract with temperature changes. Missing expansion fittings cause joint failures.
                  </li>
                  <li>
                    <strong>Ignoring voltage drop calculations:</strong> Not calculating voltage drop before installation results in uneven lighting and customer complaints.
                  </li>
                </ul>
              </div>

              <h3 className="text-xl font-semibold mt-6 mb-3">Pre-Installation Checklist</h3>
              <div className="bg-white/5 rounded-xl p-6 my-6">
                <ul className="text-white/80 space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-green-400">&#10003;</span>
                    Transformer sized at minimum 20% above total connected load
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400">&#10003;</span>
                    Wire gauge calculated for voltage drop under 10% (ideally under 5%)
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400">&#10003;</span>
                    GFCI protection on transformer supply circuit
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400">&#10003;</span>
                    All fixtures rated for wet or damp location as appropriate
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400">&#10003;</span>
                    Direct-burial connectors used for all underground splices
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400">&#10003;</span>
                    Burial depth meets or exceeds NEC Table 300.5 minimums
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400">&#10003;</span>
                    Transformer mounted with clearance from combustibles
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400">&#10003;</span>
                    Line-voltage poles properly grounded
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400">&#10003;</span>
                    Automatic control (photocell/timer) installed and tested
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400">&#10003;</span>
                    Conduit used under driveways and high-traffic areas
                  </li>
                </ul>
              </div>
            </section>

            <section id="maintenance" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Maintenance Considerations</h2>
              <p className="text-white/80 mb-4">
                A well-designed landscape lighting system should be easy to maintain. Factoring maintenance into the initial design prevents costly service calls and keeps systems operating safely.
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-3">Routine Maintenance Tasks</h3>
              <ul className="list-disc list-inside text-white/70 space-y-2 mb-4">
                <li><strong>Fixture cleaning:</strong> Remove debris, dirt, and insect nests from fixture lenses and housings quarterly</li>
                <li><strong>Lamp realignment:</strong> Adjust fixture aim as plants grow and change the landscape</li>
                <li><strong>Connection inspection:</strong> Check transformer connections, wire nuts (above grade), and splice points annually</li>
                <li><strong>Voltage testing:</strong> Measure voltage at the transformer and at the furthest fixture to detect developing problems</li>
                <li><strong>Timer adjustment:</strong> Verify timer or photocell operation seasonally - update schedules as needed</li>
                <li><strong>GFCI testing:</strong> Test GFCI protection on the transformer supply circuit monthly per manufacturer recommendations</li>
              </ul>

              <h3 className="text-xl font-semibold mt-6 mb-3">Designing for Serviceability</h3>
              <p className="text-white/80 mb-4">
                Professional installations incorporate these maintainability features:
              </p>
              <ul className="list-disc list-inside text-white/70 space-y-2 mb-4">
                <li><strong>Junction boxes above grade:</strong> Place splice points in accessible above-ground junction boxes rather than buried connections when possible</li>
                <li><strong>Spare conductors in conduit:</strong> Pull extra conductors or pull string for future additions</li>
                <li><strong>Conduit under hardscape:</strong> Always install conduit sleeves under driveways, walkways, and patios during construction</li>
                <li><strong>As-built documentation:</strong> Provide the customer with a layout showing fixture locations, wire routes, and transformer specs</li>
                <li><strong>Labeled circuits:</strong> Clearly label transformer taps and circuit zones for easy troubleshooting</li>
                <li><strong>Corrosion-resistant materials:</strong> Use stainless steel and brass fixtures in coastal or salt-spray environments</li>
              </ul>

              <div className="bg-purple-900/30 border border-purple-500/30 rounded-xl p-6 my-6">
                <h4 className="font-semibold text-purple-400 mb-2">Service Call Revenue</h4>
                <p className="text-white/70">
                  Landscape lighting maintenance is a reliable recurring revenue stream. Many electricians offer annual service agreements that include seasonal adjustments, cleaning, voltage checks, and lamp replacement. With LED systems, lamp replacement is rare, but adjustment and cleaning remain necessary as landscapes mature.
                </p>
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
                <Link href="/blog/outdoor-receptacle-requirements-nec" className="bg-white/5 hover:bg-white/10 rounded-xl p-6 transition-colors">
                  <span className="text-purple-400 text-sm">NEC Code</span>
                  <h3 className="font-semibold mt-2">Outdoor Receptacle Requirements NEC</h3>
                </Link>
                <Link href="/blog/underground-wiring-installation-guide" className="bg-white/5 hover:bg-white/10 rounded-xl p-6 transition-colors">
                  <span className="text-green-400 text-sm">Installation</span>
                  <h3 className="font-semibold mt-2">Underground Wiring Installation Guide</h3>
                </Link>
                <Link href="/blog/gfci-vs-afci-requirements" className="bg-white/5 hover:bg-white/10 rounded-xl p-6 transition-colors">
                  <span className="text-green-400 text-sm">Safety</span>
                  <h3 className="font-semibold mt-2">GFCI vs AFCI: Requirements & Differences</h3>
                </Link>
                <Link href="/blog/how-to-calculate-voltage-drop" className="bg-white/5 hover:bg-white/10 rounded-xl p-6 transition-colors">
                  <span className="text-blue-400 text-sm">Calculations</span>
                  <h3 className="font-semibold mt-2">How to Calculate Voltage Drop</h3>
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
