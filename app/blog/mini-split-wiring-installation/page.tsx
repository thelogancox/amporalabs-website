import { Metadata } from "next";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import { BlogPostingJsonLd, BreadcrumbJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Mini-Split AC Wiring: Complete Electrical Installation Guide",
  description: "Complete electrical installation guide for ductless mini-split AC systems. Learn circuit sizing from MCA/MOP nameplate data, disconnect switch requirements, wire sizing for 120V and 240V units, whip connections, communication wire routing, multi-zone wiring configurations, condensate pump wiring, and NEC compliance for mini-split installations.",
  keywords: [
    "mini split wiring",
    "ductless AC electrical",
    "mini split installation electrical",
    "mini split disconnect",
    "mini split circuit size",
    "mini split wire size",
    "ductless heat pump wiring",
    "mini split whip",
    "mini split breaker size",
    "mini split electrical requirements"
  ],
  alternates: {
    canonical: "https://amporalabs.com/blog/mini-split-wiring-installation",
  },
  openGraph: {
    title: "Mini-Split AC Wiring: Complete Electrical Installation Guide - Ampora",
    description: "Master mini-split electrical installation with this comprehensive guide covering circuit sizing, disconnect requirements, whip connections, multi-zone wiring, and NEC compliance.",
    url: "https://amporalabs.com/blog/mini-split-wiring-installation",
    type: "article",
    publishedTime: "2026-03-04",
  },
};

function HeroIllustration() {
  return (
    <svg viewBox="0 0 400 180" className="w-full h-40 md:h-48" aria-label="Mini-split indoor and outdoor unit wiring diagram showing disconnect switch and electrical connections">
      {/* Background */}
      <rect x="10" y="10" width="380" height="160" rx="4" fill="#1f2937" stroke="#374151" strokeWidth="1"/>

      {/* Indoor Unit */}
      <g transform="translate(30, 25)">
        <text x="45" y="-2" textAnchor="middle" fill="#9ca3af" fontSize="6" fontWeight="bold">INDOOR UNIT</text>
        {/* Wall mount bracket */}
        <rect x="5" y="5" width="80" height="8" rx="1" fill="#4b5563" stroke="#6b7280" strokeWidth="0.5"/>
        {/* Unit body */}
        <rect x="0" y="13" width="90" height="40" rx="4" fill="#374151" stroke="#22d3ee" strokeWidth="1.5"/>
        {/* Louvers */}
        <line x1="8" y1="35" x2="82" y2="35" stroke="#4b5563" strokeWidth="0.8"/>
        <line x1="8" y1="39" x2="82" y2="39" stroke="#4b5563" strokeWidth="0.8"/>
        <line x1="8" y1="43" x2="82" y2="43" stroke="#4b5563" strokeWidth="0.8"/>
        <line x1="8" y1="47" x2="82" y2="47" stroke="#4b5563" strokeWidth="0.8"/>
        {/* Display */}
        <rect x="35" y="18" width="20" height="8" rx="2" fill="#22d3ee" fillOpacity="0.3" stroke="#22d3ee" strokeWidth="0.5"/>
        <text x="45" y="25" textAnchor="middle" fill="#22d3ee" fontSize="5" fontFamily="monospace">72F</text>
        {/* Communication wire from indoor */}
        <line x1="90" y1="30" x2="105" y2="30" stroke="#a78bfa" strokeWidth="1" strokeDasharray="2,2"/>
        <text x="97" y="26" fill="#a78bfa" fontSize="4">COMM</text>
      </g>

      {/* Line Set / Refrigerant Lines */}
      <g transform="translate(120, 40)">
        {/* Insulated suction line (larger) */}
        <path d="M0,15 C15,15 15,55 30,55 L80,55" stroke="#6b7280" strokeWidth="4" fill="none" strokeLinecap="round"/>
        {/* Liquid line (smaller) */}
        <path d="M0,22 C15,22 15,62 30,62 L80,62" stroke="#d97706" strokeWidth="2" fill="none" strokeLinecap="round"/>
        {/* Communication wire */}
        <path d="M-15,5 C10,5 10,48 30,48 L80,48" stroke="#a78bfa" strokeWidth="1" strokeDasharray="2,2" fill="none"/>
        <text x="40" y="45" fill="#a78bfa" fontSize="4">14/4 COMM WIRE</text>
        <text x="50" y="72" textAnchor="middle" fill="#9ca3af" fontSize="4">LINE SET</text>
      </g>

      {/* Disconnect Switch */}
      <g transform="translate(215, 20)">
        <text x="25" y="0" textAnchor="middle" fill="#f59e0b" fontSize="6" fontWeight="bold">DISCONNECT</text>
        <rect x="0" y="5" width="50" height="60" rx="3" fill="#374151" stroke="#f59e0b" strokeWidth="1.5"/>
        {/* Handle */}
        <rect x="18" y="12" width="14" height="20" rx="2" fill="#f59e0b" fillOpacity="0.3" stroke="#f59e0b" strokeWidth="1"/>
        <text x="25" y="25" textAnchor="middle" fill="#f59e0b" fontSize="5" fontWeight="bold">ON</text>
        {/* Terminal connections */}
        <circle cx="12" cy="42" r="3" fill="none" stroke="#ef4444" strokeWidth="1"/>
        <circle cx="25" cy="42" r="3" fill="none" stroke="#000" strokeWidth="1"/>
        <circle cx="38" cy="42" r="3" fill="none" stroke="#ef4444" strokeWidth="1"/>
        <text x="12" y="56" textAnchor="middle" fill="#ef4444" fontSize="4">L1</text>
        <text x="25" y="56" textAnchor="middle" fill="#22c55e" fontSize="4">G</text>
        <text x="38" y="56" textAnchor="middle" fill="#ef4444" fontSize="4">L2</text>
      </g>

      {/* Whip Connection */}
      <g transform="translate(260, 60)">
        <path d="M5,25 C20,25 20,35 40,35" stroke="#ef4444" strokeWidth="2" fill="none"/>
        <path d="M5,30 C20,30 20,40 40,40" stroke="#ef4444" strokeWidth="2" fill="none"/>
        <path d="M5,35 C20,35 20,45 40,45" stroke="#22c55e" strokeWidth="1.5" fill="none"/>
        <text x="22" y="20" textAnchor="middle" fill="#9ca3af" fontSize="4">WHIP (6ft)</text>
      </g>

      {/* Outdoor Unit (Condenser) */}
      <g transform="translate(300, 20)">
        <text x="40" y="0" textAnchor="middle" fill="#9ca3af" fontSize="6" fontWeight="bold">OUTDOOR UNIT</text>
        <rect x="0" y="5" width="80" height="75" rx="4" fill="#374151" stroke="#22c55e" strokeWidth="1.5"/>
        {/* Fan grille */}
        <circle cx="40" cy="35" r="22" fill="none" stroke="#6b7280" strokeWidth="1"/>
        <circle cx="40" cy="35" r="16" fill="none" stroke="#6b7280" strokeWidth="0.5"/>
        <circle cx="40" cy="35" r="10" fill="none" stroke="#6b7280" strokeWidth="0.5"/>
        <circle cx="40" cy="35" r="4" fill="#4b5563" stroke="#6b7280" strokeWidth="0.5"/>
        {/* Fan blades */}
        <line x1="40" y1="19" x2="40" y2="51" stroke="#6b7280" strokeWidth="0.5"/>
        <line x1="24" y1="35" x2="56" y2="35" stroke="#6b7280" strokeWidth="0.5"/>
        {/* Service valve connections */}
        <rect x="10" y="62" width="60" height="12" rx="2" fill="#1f2937" stroke="#6b7280" strokeWidth="0.5"/>
        <text x="40" y="71" textAnchor="middle" fill="#9ca3af" fontSize="4">SERVICE VALVES</text>
      </g>

      {/* Circuit Info Box */}
      <g transform="translate(30, 105)">
        <rect x="0" y="0" width="140" height="50" rx="3" fill="#22d3ee" fillOpacity="0.08" stroke="#22d3ee" strokeWidth="1"/>
        <text x="70" y="12" textAnchor="middle" fill="#22d3ee" fontSize="6" fontWeight="bold">TYPICAL 240V CIRCUIT</text>
        <text x="8" y="24" fill="#9ca3af" fontSize="5">Breaker: <tspan fill="#22d3ee" fontFamily="monospace">20A 2-pole</tspan></text>
        <text x="8" y="34" fill="#9ca3af" fontSize="5">Wire: <tspan fill="#22d3ee" fontFamily="monospace">12/2 NM or 12 AWG THHN</tspan></text>
        <text x="8" y="44" fill="#9ca3af" fontSize="5">MCA: <tspan fill="#f59e0b" fontFamily="monospace">15A</tspan>  MOP: <tspan fill="#ef4444" fontFamily="monospace">20A</tspan></text>
      </g>

      {/* Nameplate Box */}
      <g transform="translate(190, 110)">
        <rect x="0" y="0" width="100" height="42" rx="3" fill="#f59e0b" fillOpacity="0.08" stroke="#f59e0b" strokeWidth="1"/>
        <text x="50" y="12" textAnchor="middle" fill="#f59e0b" fontSize="6" fontWeight="bold">NAMEPLATE DATA</text>
        <text x="8" y="24" fill="#9ca3af" fontSize="5">MCA = <tspan fill="#f59e0b" fontFamily="monospace">Min Circuit Amps</tspan></text>
        <text x="8" y="34" fill="#9ca3af" fontSize="5">MOP = <tspan fill="#f59e0b" fontFamily="monospace">Max Overcurrent</tspan></text>
      </g>

      {/* Panel connection arrow */}
      <g transform="translate(210, 87)">
        <line x1="30" y1="0" x2="30" y2="-7" stroke="#ef4444" strokeWidth="1.5"/>
        <text x="30" y="-10" textAnchor="middle" fill="#ef4444" fontSize="4">FROM PANEL</text>
      </g>
    </svg>
  );
}

export default function MiniSplitWiringInstallationPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navigation />
      <div className="pt-20">
        <BreadcrumbJsonLd
          items={[
            { name: "Home", url: "https://amporalabs.com" },
            { name: "Blog", url: "https://amporalabs.com/blog" },
            { name: "Mini-Split AC Wiring Installation", url: "https://amporalabs.com/blog/mini-split-wiring-installation" },
          ]}
        />
        <BlogPostingJsonLd
          headline="Mini-Split AC Wiring: Complete Electrical Installation Guide"
          description="Complete electrical installation guide for ductless mini-split AC systems covering circuit sizing, disconnect requirements, whip connections, multi-zone wiring, and NEC compliance."
          datePublished="2026-03-04"
          dateModified="2026-03-04"
          url="https://amporalabs.com/blog/mini-split-wiring-installation"
          wordCount={4800}
          keywords={["mini split wiring", "ductless AC electrical", "mini split disconnect", "mini split circuit size", "mini split wire size"]}
        />

        <article className="max-w-4xl mx-auto px-6 py-12">
          {/* Breadcrumb */}
          <nav className="text-sm text-white/60 mb-8">
            <Link href="/" className="hover:text-white">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/blog" className="hover:text-white">Blog</Link>
            <span className="mx-2">/</span>
            <span className="text-white">Mini-Split AC Wiring Installation</span>
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
              Mini-Split AC Wiring: Complete Electrical Installation Guide
            </h1>
            <p className="text-xl text-white/70">
              Ductless mini-split systems are one of the fastest-growing segments in residential and light commercial HVAC. This guide covers the complete electrical installation process, from reading nameplate data and sizing circuits to installing disconnect switches, pulling whip connections, wiring communication cables, and handling multi-zone configurations &mdash; all per NEC requirements.
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
                <h3 className="font-display font-bold text-lg mb-2 text-red-400">Safety Notice</h3>
                <p className="text-white/80 text-sm">
                  All electrical work must comply with the National Electrical Code (NEC), local amendments, and manufacturer installation instructions. Mini-split electrical connections involve line voltage circuits that can cause shock, burns, or death. Always de-energize circuits before working on them, verify with a voltage tester, and obtain required permits. This guide is for educational purposes &mdash; consult the equipment manual and your local AHJ for specific requirements.
                </p>
              </div>
            </div>
          </div>

          {/* Table of Contents */}
          <div className="bg-white/5 rounded-2xl p-6 mb-12">
            <h2 className="font-display font-bold mb-4">In This Guide</h2>
            <ul className="space-y-2 text-white/70">
              <li><a href="#system-components" className="hover:text-purple-400">Mini-Split System Components Overview</a></li>
              <li><a href="#reading-nameplate" className="hover:text-purple-400">Reading the Nameplate: MCA and MOP Explained</a></li>
              <li><a href="#circuit-wire-sizing" className="hover:text-purple-400">Circuit and Wire Sizing</a></li>
              <li><a href="#disconnect-requirements" className="hover:text-purple-400">Disconnect Switch Requirements</a></li>
              <li><a href="#whip-lineset" className="hover:text-purple-400">Whip and Line Set Installation</a></li>
              <li><a href="#communication-wire" className="hover:text-purple-400">Communication Wire Between Units</a></li>
              <li><a href="#multi-zone" className="hover:text-purple-400">Multi-Zone System Wiring</a></li>
              <li><a href="#120v-vs-240v" className="hover:text-purple-400">120V vs 240V Mini-Splits</a></li>
              <li><a href="#condensate-pump" className="hover:text-purple-400">Condensate Pump Wiring</a></li>
              <li><a href="#common-mistakes" className="hover:text-purple-400">Common Installation Mistakes</a></li>
              <li><a href="#permit-requirements" className="hover:text-purple-400">Permit and Inspection Requirements</a></li>
            </ul>
          </div>

          {/* Article Content */}
          <div className="prose prose-invert prose-lg max-w-none">

            <section id="system-components" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Mini-Split System Components Overview</h2>
              <p className="text-white/80 mb-4">
                A <strong>ductless mini-split system</strong> consists of an outdoor condenser unit connected to one or more indoor air-handling units (evaporators) by refrigerant lines, a condensate drain, and communication wiring. Unlike traditional central air systems, mini-splits require no ductwork, which makes them ideal for additions, garages, server rooms, and older homes without existing ducts.
              </p>
              <p className="text-white/80 mb-4">
                From an electrical standpoint, the key distinction is that <strong>power is typically fed to the outdoor unit only</strong>. The indoor unit receives its power through the communication/control cable from the outdoor unit. This is a critical point that affects how you size and route your circuits.
              </p>

              <div className="grid md:grid-cols-2 gap-6 my-6">
                <div className="bg-white/5 rounded-xl p-6">
                  <h3 className="font-semibold text-cyan-400 mb-3">Outdoor Unit (Condenser)</h3>
                  <ul className="text-white/60 text-sm space-y-1">
                    <li><strong>Compressor:</strong> The primary electrical load (largest inrush current)</li>
                    <li><strong>Condenser fan motor:</strong> Rejects heat to outdoor air</li>
                    <li><strong>Control board:</strong> Manages all system operations</li>
                    <li><strong>Terminal block:</strong> Where the power whip and communication wire connect</li>
                    <li><strong>Service valves:</strong> Refrigerant line connections</li>
                  </ul>
                </div>
                <div className="bg-white/5 rounded-xl p-6">
                  <h3 className="font-semibold text-emerald-400 mb-3">Indoor Unit (Evaporator)</h3>
                  <ul className="text-white/60 text-sm space-y-1">
                    <li><strong>Blower fan:</strong> Circulates conditioned air</li>
                    <li><strong>Evaporator coil:</strong> Heat exchange with room air</li>
                    <li><strong>Control board:</strong> Receives commands via communication wire</li>
                    <li><strong>Infrared receiver:</strong> Wireless remote control signal</li>
                    <li><strong>Condensate pan and drain:</strong> Collects moisture</li>
                  </ul>
                </div>
              </div>

              <div className="bg-white/5 rounded-xl p-6 my-6">
                <h4 className="font-semibold text-cyan-400 mb-3">Electrical Components You Will Install</h4>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                  <div>
                    <p className="text-2xl font-bold text-emerald-400">1</p>
                    <p className="text-white/60 text-sm">Dedicated circuit from panel</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-yellow-400">1</p>
                    <p className="text-white/60 text-sm">Disconnect switch at outdoor unit</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-red-400">1</p>
                    <p className="text-white/60 text-sm">Power whip to unit</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-purple-400">1</p>
                    <p className="text-white/60 text-sm">Communication cable between units</p>
                  </div>
                </div>
              </div>
            </section>

            <section id="reading-nameplate" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Reading the Nameplate: MCA and MOP Explained</h2>
              <p className="text-white/80 mb-4">
                Every mini-split outdoor unit has a <strong>nameplate</strong> (also called a data plate or rating plate) that contains two critical values for electrical installation: <strong>MCA</strong> and <strong>MOP</strong> (sometimes listed as <strong>MOCP</strong>). These numbers, not the unit&apos;s BTU rating or tonnage, determine your wire size and breaker size.
              </p>

              <div className="grid md:grid-cols-2 gap-6 my-6">
                <div className="bg-cyan-900/30 rounded-xl p-6 border border-cyan-500/30">
                  <h3 className="font-semibold text-cyan-400 mb-3">MCA &mdash; Minimum Circuit Ampacity</h3>
                  <p className="text-white/70 text-sm mb-3">
                    The <strong>MCA</strong> is the minimum current-carrying capacity that the branch circuit conductors must have. It accounts for the compressor locked-rotor amps, fan motor full-load amps, and a 25% safety factor per NEC 440.32.
                  </p>
                  <p className="text-white/60 text-sm">
                    <strong>MCA determines your wire size.</strong> Select conductors with an ampacity equal to or greater than the MCA value from NEC Table 310.16.
                  </p>
                </div>
                <div className="bg-yellow-900/30 rounded-xl p-6 border border-yellow-500/30">
                  <h3 className="font-semibold text-yellow-400 mb-3">MOP/MOCP &mdash; Maximum Overcurrent Protection</h3>
                  <p className="text-white/70 text-sm mb-3">
                    The <strong>MOP</strong> (Maximum Overcurrent Protection) or <strong>MOCP</strong> (Maximum Overcurrent Protective Device) is the largest breaker or fuse you can use on the circuit. This value is set by the manufacturer per NEC 440.22.
                  </p>
                  <p className="text-white/60 text-sm">
                    <strong>MOP determines your breaker size.</strong> You can use a breaker equal to or smaller than the MOP, but never larger.
                  </p>
                </div>
              </div>

              <div className="bg-white/5 rounded-xl p-6 my-6">
                <h4 className="font-semibold text-white mb-3">Example Nameplate Reading</h4>
                <div className="bg-black/40 rounded-lg p-4 font-mono text-sm border border-white/20">
                  <p className="text-white/50 mb-2">--- OUTDOOR UNIT NAMEPLATE ---</p>
                  <p className="text-white/80">Model: MSZ-GL12NA</p>
                  <p className="text-white/80">BTU/h: 12,000 (1 ton)</p>
                  <p className="text-white/80">Voltage: 208-230V / 60Hz / 1Ph</p>
                  <p className="text-white/80">RLA (compressor): 6.1A</p>
                  <p className="text-white/80">FLA (fan motor): 0.44A</p>
                  <p className="text-cyan-400 font-bold">MCA: 15A</p>
                  <p className="text-yellow-400 font-bold">MOP/MOCP: 20A</p>
                  <p className="text-white/50 mt-2">--- END NAMEPLATE ---</p>
                </div>
                <p className="text-white/60 text-sm mt-3">
                  In this example: use conductors rated for at least <strong>15A</strong> (12 AWG copper minimum) and a breaker no larger than <strong>20A</strong>.
                </p>
              </div>

              <div className="bg-orange-900/30 rounded-xl p-6 my-6">
                <h4 className="font-semibold text-orange-400 mb-3">Why MCA Is Higher Than RLA + FLA</h4>
                <p className="text-white/70 text-sm">
                  You might notice the MCA (15A) is much higher than the running load (6.1A + 0.44A = 6.54A). That is because MCA includes a <strong>25% compressor safety factor</strong> per NEC 440.32: MCA = (largest motor RLA x 1.25) + other motor FLAs. This accounts for the high starting current of hermetic compressors and prevents nuisance tripping during startup surges. Never size your wire to the running amps &mdash; always use the MCA.
                </p>
              </div>
            </section>

            <section id="circuit-wire-sizing" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Circuit and Wire Sizing</h2>
              <p className="text-white/80 mb-4">
                Once you have the MCA and MOP from the nameplate, sizing the circuit is straightforward. The wire must handle the MCA, and the breaker must not exceed the MOP. For long runs, you also need to check <Link href="/blog/how-to-calculate-voltage-drop" className="text-cyan-400 hover:text-cyan-300">voltage drop calculations</Link> to ensure the conductors are large enough.
              </p>

              <h3 className="text-xl font-display font-semibold mb-3 text-cyan-400">Common Mini-Split Circuit Sizes</h3>
              <div className="overflow-x-auto my-6">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-white/20">
                      <th className="text-left py-3 px-4 text-white/60">Unit Size (BTU)</th>
                      <th className="text-left py-3 px-4 text-white/60">Typical Voltage</th>
                      <th className="text-left py-3 px-4 text-white/60">Typical MCA</th>
                      <th className="text-left py-3 px-4 text-white/60">Typical MOP</th>
                      <th className="text-left py-3 px-4 text-white/60">Min Wire Size</th>
                      <th className="text-left py-3 px-4 text-white/60">Breaker</th>
                    </tr>
                  </thead>
                  <tbody className="text-white/80">
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">9,000 (3/4 ton)</td>
                      <td className="py-3 px-4 font-mono text-cyan-400">115V</td>
                      <td className="py-3 px-4 font-mono">10A</td>
                      <td className="py-3 px-4 font-mono">15A</td>
                      <td className="py-3 px-4 font-mono text-emerald-400">14 AWG</td>
                      <td className="py-3 px-4 font-mono text-yellow-400">15A 1-pole</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">12,000 (1 ton)</td>
                      <td className="py-3 px-4 font-mono text-cyan-400">208-230V</td>
                      <td className="py-3 px-4 font-mono">15A</td>
                      <td className="py-3 px-4 font-mono">20A</td>
                      <td className="py-3 px-4 font-mono text-emerald-400">12 AWG</td>
                      <td className="py-3 px-4 font-mono text-yellow-400">20A 2-pole</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">18,000 (1.5 ton)</td>
                      <td className="py-3 px-4 font-mono text-cyan-400">208-230V</td>
                      <td className="py-3 px-4 font-mono">15A</td>
                      <td className="py-3 px-4 font-mono">20A</td>
                      <td className="py-3 px-4 font-mono text-emerald-400">12 AWG</td>
                      <td className="py-3 px-4 font-mono text-yellow-400">20A 2-pole</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">24,000 (2 ton)</td>
                      <td className="py-3 px-4 font-mono text-cyan-400">208-230V</td>
                      <td className="py-3 px-4 font-mono">19A</td>
                      <td className="py-3 px-4 font-mono">25A</td>
                      <td className="py-3 px-4 font-mono text-emerald-400">10 AWG</td>
                      <td className="py-3 px-4 font-mono text-yellow-400">25A 2-pole</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">36,000 (3 ton)</td>
                      <td className="py-3 px-4 font-mono text-cyan-400">208-230V</td>
                      <td className="py-3 px-4 font-mono">23A</td>
                      <td className="py-3 px-4 font-mono">30A</td>
                      <td className="py-3 px-4 font-mono text-emerald-400">10 AWG</td>
                      <td className="py-3 px-4 font-mono text-yellow-400">30A 2-pole</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4">48,000 (4 ton)</td>
                      <td className="py-3 px-4 font-mono text-cyan-400">208-230V</td>
                      <td className="py-3 px-4 font-mono">32A</td>
                      <td className="py-3 px-4 font-mono">40A</td>
                      <td className="py-3 px-4 font-mono text-emerald-400">8 AWG</td>
                      <td className="py-3 px-4 font-mono text-yellow-400">40A 2-pole</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-white/60 text-sm mb-4">
                Note: These are typical values. Always use the specific MCA/MOP from your unit&apos;s nameplate. Wire sizes are for copper conductors at 75&deg;C from <Link href="/blog/wire-sizing-guide-nec-ampacity-tables" className="text-cyan-400 hover:text-cyan-300">NEC Table 310.16</Link>.
              </p>

              <h3 className="text-xl font-display font-semibold mb-3 text-cyan-400">Voltage Drop Considerations</h3>
              <p className="text-white/80 mb-4">
                For runs longer than 50 feet, check the <Link href="/blog/how-to-calculate-voltage-drop" className="text-cyan-400 hover:text-cyan-300">voltage drop</Link> to ensure it does not exceed 3% for the branch circuit (NEC 210.19 Informational Note 4). Excessive voltage drop can cause compressor overheating, reduced efficiency, and nuisance tripping. For a 12,000 BTU unit drawing 15A on a 240V circuit:
              </p>

              <div className="overflow-x-auto my-6">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-white/20">
                      <th className="text-left py-3 px-4 text-white/60">Wire Size</th>
                      <th className="text-left py-3 px-4 text-white/60">Max Run (3% VD at 15A, 240V)</th>
                    </tr>
                  </thead>
                  <tbody className="text-white/80">
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-mono">14 AWG</td>
                      <td className="py-3 px-4 font-mono text-red-400">~45 ft (too short for most installs)</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-mono">12 AWG</td>
                      <td className="py-3 px-4 font-mono text-yellow-400">~72 ft</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-mono">10 AWG</td>
                      <td className="py-3 px-4 font-mono text-emerald-400">~114 ft</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-mono">8 AWG</td>
                      <td className="py-3 px-4 font-mono text-emerald-400">~182 ft</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="bg-purple-900/30 rounded-xl p-6 my-6">
                <h4 className="font-semibold text-purple-400 mb-3">Wire Type Selection</h4>
                <ul className="text-white/70 space-y-2 text-sm">
                  <li><strong>NM-B (Romex):</strong> Suitable for indoor dry locations only. Cannot be used outdoors, in conduit exposed to sunlight, or in wet locations.</li>
                  <li><strong>THHN/THWN in conduit:</strong> The most versatile option. Use PVC, EMT, or rigid conduit based on the installation location. Required for exposed outdoor runs.</li>
                  <li><strong>UF-B (Underground Feeder):</strong> Rated for direct burial and wet locations. Can be used for underground runs from panel to outdoor unit location.</li>
                  <li><strong>SE Cable (Service Entrance):</strong> Some jurisdictions allow SE cable for 240V circuits. Check with your local AHJ.</li>
                </ul>
              </div>
            </section>

            <section id="disconnect-requirements" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Disconnect Switch Requirements</h2>
              <p className="text-white/80 mb-4">
                NEC 440.14 requires a <strong>disconnecting means within sight and readily accessible</strong> from the air-conditioning or refrigeration equipment. &ldquo;Within sight&rdquo; means visible and not more than <strong>50 feet</strong> from the equipment. This disconnect allows service technicians to safely de-energize the unit before performing maintenance.
              </p>

              <div className="grid md:grid-cols-2 gap-6 my-6">
                <div className="bg-white/5 rounded-xl p-6">
                  <h3 className="font-semibold text-yellow-400 mb-3">Disconnect Types</h3>
                  <ul className="text-white/60 text-sm space-y-2">
                    <li><strong>Non-fusible pullout disconnect:</strong> Most common for residential mini-splits. Uses a removable handle block. Size must be at least 115% of the nameplate rated-load current or the branch-circuit selection current, whichever is greater.</li>
                    <li><strong>Fusible pullout disconnect:</strong> Contains fuses that provide additional overcurrent protection. The fuse rating must not exceed the MOP.</li>
                    <li><strong>Molded-case switch:</strong> A toggle or rotary switch type. Common in commercial installations.</li>
                    <li><strong>Circuit breaker disconnect:</strong> A breaker mounted in a small enclosure at the unit. Less common but permitted if it meets lockable disconnect requirements.</li>
                  </ul>
                </div>
                <div className="bg-white/5 rounded-xl p-6">
                  <h3 className="font-semibold text-emerald-400 mb-3">Installation Rules</h3>
                  <ul className="text-white/60 text-sm space-y-2">
                    <li><strong>Location:</strong> Within sight of the outdoor unit and not more than 50 ft away</li>
                    <li><strong>Height:</strong> Center of grip no higher than 6 ft 7 in above grade (NEC 404.8)</li>
                    <li><strong>Accessibility:</strong> Must be readily accessible &mdash; no ladders, climbing, or removing obstacles</li>
                    <li><strong>Rating:</strong> Must be rated for the voltage and at least 115% of rated-load current</li>
                    <li><strong>Lockable:</strong> Must be capable of being locked in the open position per NEC 110.25</li>
                    <li><strong>Weather rating:</strong> Outdoor disconnects must be rated NEMA 3R or better</li>
                  </ul>
                </div>
              </div>

              <div className="bg-orange-900/30 rounded-xl p-6 my-6">
                <h4 className="font-semibold text-orange-400 mb-3">Common Disconnect Sizing</h4>
                <p className="text-white/70 mb-3 text-sm">Match the disconnect to your circuit. For more on <Link href="/blog/disconnect-switch-requirements-nec" className="text-cyan-400 hover:text-cyan-300">disconnect switch requirements</Link>, see our dedicated guide.</p>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-white/20">
                        <th className="text-left py-2 px-3 text-white/60">Breaker Size</th>
                        <th className="text-left py-2 px-3 text-white/60">Disconnect Rating</th>
                        <th className="text-left py-2 px-3 text-white/60">Pullout Block</th>
                      </tr>
                    </thead>
                    <tbody className="text-white/80">
                      <tr className="border-b border-white/10">
                        <td className="py-2 px-3 font-mono">15A</td>
                        <td className="py-2 px-3 font-mono text-yellow-400">30A or 60A</td>
                        <td className="py-2 px-3">Non-fusible or 15A fuses</td>
                      </tr>
                      <tr className="border-b border-white/10">
                        <td className="py-2 px-3 font-mono">20A</td>
                        <td className="py-2 px-3 font-mono text-yellow-400">30A or 60A</td>
                        <td className="py-2 px-3">Non-fusible or 20A fuses</td>
                      </tr>
                      <tr className="border-b border-white/10">
                        <td className="py-2 px-3 font-mono">25-30A</td>
                        <td className="py-2 px-3 font-mono text-yellow-400">60A</td>
                        <td className="py-2 px-3">Non-fusible or 30A fuses</td>
                      </tr>
                      <tr>
                        <td className="py-2 px-3 font-mono">40A</td>
                        <td className="py-2 px-3 font-mono text-yellow-400">60A</td>
                        <td className="py-2 px-3">Non-fusible or 40A fuses</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <p className="text-white/80 mb-4">
                Mount the disconnect on an exterior wall, typically beside or above the outdoor unit. Use appropriate anchors for the wall material (tapcon for masonry, lag bolts for wood framing). Route conduit from the disconnect down to the unit&apos;s terminal connection point using a <strong>weatherproof whip</strong>.
              </p>
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

            <section id="whip-lineset" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Whip and Line Set Installation</h2>
              <p className="text-white/80 mb-4">
                The <strong>whip</strong> (also called a &ldquo;whip connection&rdquo; or &ldquo;liquid-tight flex&rdquo;) is the short section of flexible conduit that connects the disconnect switch to the outdoor unit. It allows for vibration isolation and makes the final connection without rigid conduit.
              </p>

              <div className="space-y-4 my-6">
                <div className="bg-white/5 rounded-xl p-4 flex items-start gap-4">
                  <span className="bg-cyan-600 text-white text-sm font-bold px-3 py-1 rounded-full">1</span>
                  <div>
                    <p className="font-semibold text-white">Install the Disconnect Box</p>
                    <p className="text-white/60 text-sm">Mount the disconnect within sight of the outdoor unit. The bottom of the disconnect should typically be 3-5 feet above grade for easy access. Ensure the knockout positions align with your conduit runs.</p>
                  </div>
                </div>
                <div className="bg-white/5 rounded-xl p-4 flex items-start gap-4">
                  <span className="bg-cyan-600 text-white text-sm font-bold px-3 py-1 rounded-full">2</span>
                  <div>
                    <p className="font-semibold text-white">Run the Power Feed to the Disconnect</p>
                    <p className="text-white/60 text-sm">Route conduit (EMT, PVC, or rigid) from the electrical panel to the top of the disconnect. Pull the branch circuit conductors through and terminate at the line side of the disconnect. For 240V circuits: two hot conductors (black and red or black and white re-identified) and a ground.</p>
                  </div>
                </div>
                <div className="bg-white/5 rounded-xl p-4 flex items-start gap-4">
                  <span className="bg-cyan-600 text-white text-sm font-bold px-3 py-1 rounded-full">3</span>
                  <div>
                    <p className="font-semibold text-white">Install the Whip</p>
                    <p className="text-white/60 text-sm">Use a 3/4&quot; or 1/2&quot; liquid-tight flexible non-metallic conduit (LFNC) or liquid-tight flexible metal conduit (LFMC), typically 6 feet long. Connect from the load side of the disconnect to the outdoor unit&apos;s electrical compartment. Use approved liquid-tight fittings at both ends.</p>
                  </div>
                </div>
                <div className="bg-white/5 rounded-xl p-4 flex items-start gap-4">
                  <span className="bg-cyan-600 text-white text-sm font-bold px-3 py-1 rounded-full">4</span>
                  <div>
                    <p className="font-semibold text-white">Make Terminal Connections</p>
                    <p className="text-white/60 text-sm">Connect the hot conductors to the L1 and L2 terminals on the unit&apos;s terminal block. Connect the equipment grounding conductor to the ground terminal. Torque all connections to the manufacturer&apos;s specifications. Most mini-split terminal blocks use screw-type lugs rated for 14-8 AWG copper.</p>
                  </div>
                </div>
              </div>

              <div className="bg-emerald-900/30 rounded-xl p-6 my-6">
                <h4 className="font-semibold text-emerald-400 mb-3">Pre-Made Whip Kits</h4>
                <p className="text-white/70 text-sm">
                  Many suppliers sell <strong>pre-made A/C whip kits</strong> that include the liquid-tight flex, fittings, and pre-pulled wires. These are available in 1/2&quot; x 6&apos; and 3/4&quot; x 6&apos; sizes with 10 AWG or 8 AWG conductors. They save time on residential installs and ensure the fittings are rated for the conduit type. Verify the wire gauge in the kit matches your MCA requirement before purchasing.
                </p>
              </div>
            </section>

            <section id="communication-wire" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Communication Wire Between Units</h2>
              <p className="text-white/80 mb-4">
                The <strong>communication cable</strong> (also called the signal wire, interconnect cable, or control wire) connects the outdoor unit to the indoor unit. This low-voltage cable carries both power for the indoor unit&apos;s electronics and control signals. It is separate from the line-voltage power circuit.
              </p>

              <div className="grid md:grid-cols-2 gap-6 my-6">
                <div className="bg-white/5 rounded-xl p-6">
                  <h3 className="font-semibold text-purple-400 mb-3">Typical Communication Wire Specs</h3>
                  <ul className="text-white/60 text-sm space-y-2">
                    <li><strong>Conductors:</strong> 2, 3, or 4 conductors depending on the manufacturer</li>
                    <li><strong>Gauge:</strong> 14 AWG stranded most common (some allow 16 or 18 AWG for short runs)</li>
                    <li><strong>Type:</strong> Shielded or unshielded per manufacturer specs</li>
                    <li><strong>Max length:</strong> Typically 50-100 ft (check manufacturer limits)</li>
                    <li><strong>Color coding:</strong> Varies by brand &mdash; match terminal numbers, not colors</li>
                  </ul>
                </div>
                <div className="bg-white/5 rounded-xl p-6">
                  <h3 className="font-semibold text-cyan-400 mb-3">Common Cable Requirements by Brand</h3>
                  <ul className="text-white/60 text-sm space-y-2">
                    <li><strong>Mitsubishi:</strong> 14/3 or 14/4 (3 or 4 conductor)</li>
                    <li><strong>Fujitsu:</strong> 14/3 or 14/4 shielded</li>
                    <li><strong>Daikin:</strong> 14/4 (4 conductor)</li>
                    <li><strong>LG:</strong> 14/4 shielded</li>
                    <li><strong>Samsung:</strong> 14/3 (3 conductor)</li>
                    <li><strong>MRCOOL/Pioneer:</strong> 14/4 (4 conductor)</li>
                  </ul>
                </div>
              </div>

              <div className="bg-orange-900/30 rounded-xl p-6 my-6">
                <h4 className="font-semibold text-orange-400 mb-3">Critical Installation Notes</h4>
                <ul className="text-white/70 space-y-2 text-sm">
                  <li><strong>Never run communication wire in the same conduit as line-voltage power conductors.</strong> Electromagnetic interference from 240V wiring can corrupt control signals and damage circuit boards.</li>
                  <li><strong>Route along the line set:</strong> Many installers tape or strap the communication wire to the insulated refrigerant line set. This keeps it organized and protected.</li>
                  <li><strong>Match terminal numbers:</strong> Connect terminal 1 on the outdoor unit to terminal 1 on the indoor unit, and so on. Do not rely on wire colors &mdash; they vary between manufacturers and cable types.</li>
                  <li><strong>Leave service loops:</strong> Leave 12-18 inches of extra cable at both the indoor and outdoor unit for future service access.</li>
                  <li><strong>Protect outdoor runs:</strong> Where exposed to sunlight or physical damage, run the communication wire in separate conduit or UV-rated cable covering.</li>
                </ul>
              </div>
            </section>

            <section id="multi-zone" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Multi-Zone System Wiring</h2>
              <p className="text-white/80 mb-4">
                Multi-zone mini-split systems use a single outdoor unit to serve <strong>2 to 5 indoor units</strong>. The electrical installation differs from single-zone systems in several important ways.
              </p>

              <div className="bg-white/5 rounded-xl p-6 my-6">
                <h4 className="font-semibold text-white mb-3">Multi-Zone vs Single-Zone Electrical Differences</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-emerald-900/20 rounded-lg p-4 border border-emerald-500/20">
                    <p className="font-semibold text-emerald-400 mb-2">Single-Zone (1:1)</p>
                    <ul className="text-white/60 text-sm space-y-1">
                      <li>One outdoor unit, one indoor unit</li>
                      <li>One dedicated circuit</li>
                      <li>One disconnect</li>
                      <li>One communication cable</li>
                      <li>Typical MCA: 10-23A</li>
                    </ul>
                  </div>
                  <div className="bg-cyan-900/20 rounded-lg p-4 border border-cyan-500/20">
                    <p className="font-semibold text-cyan-400 mb-2">Multi-Zone (1:2 to 1:5)</p>
                    <ul className="text-white/60 text-sm space-y-1">
                      <li>One outdoor unit, multiple indoor units</li>
                      <li>One dedicated circuit (larger)</li>
                      <li>One disconnect at outdoor unit</li>
                      <li>Separate communication cable to each indoor unit</li>
                      <li>Typical MCA: 20-45A</li>
                    </ul>
                  </div>
                </div>
              </div>

              <h3 className="text-xl font-display font-semibold mb-3 text-cyan-400">Wiring Configuration</h3>
              <p className="text-white/80 mb-4">
                In a multi-zone system, the outdoor unit has a terminal block with numbered positions for <strong>each indoor unit</strong>. Each indoor unit gets its own dedicated communication cable back to the outdoor unit. These cables are typically daisy-chained in some brands or run as home-run cables in others.
              </p>

              <div className="space-y-3 my-6">
                <div className="bg-white/5 rounded-xl p-4">
                  <p className="font-semibold text-white mb-1">Daisy-Chain Configuration (Mitsubishi, some Daikin)</p>
                  <p className="text-white/60 text-sm">Communication cable runs from the outdoor unit to indoor unit A, then from A to B, then from B to C. Simpler cable routing but requires each unit to be powered on for the chain to work.</p>
                </div>
                <div className="bg-white/5 rounded-xl p-4">
                  <p className="font-semibold text-white mb-1">Home-Run Configuration (Fujitsu, LG, most brands)</p>
                  <p className="text-white/60 text-sm">Each indoor unit has its own individual cable running directly back to the outdoor unit. More cable but easier troubleshooting and more reliable. Each cable connects to a dedicated terminal position on the outdoor control board.</p>
                </div>
              </div>

              <div className="bg-yellow-900/30 rounded-xl p-6 my-6 border border-yellow-500/30">
                <h4 className="font-semibold text-yellow-400 mb-3">Multi-Zone Circuit Sizing Example</h4>
                <div className="bg-black/40 rounded-lg p-4 font-mono text-sm border border-white/20">
                  <p className="text-white/50 mb-2">--- 3-ZONE SYSTEM NAMEPLATE ---</p>
                  <p className="text-white/80">Model: MXZ-3C30NAHZ (Mitsubishi)</p>
                  <p className="text-white/80">BTU/h: 30,000 (2.5 ton)</p>
                  <p className="text-white/80">Indoor units: 3x MSZ-GL09NA (9K each)</p>
                  <p className="text-white/80">Voltage: 208-230V / 60Hz / 1Ph</p>
                  <p className="text-cyan-400 font-bold">MCA: 27A</p>
                  <p className="text-yellow-400 font-bold">MOP: 40A</p>
                  <p className="text-white/50 mt-2">Circuit: 40A 2-pole breaker, 8 AWG copper</p>
                  <p className="text-white/50">Disconnect: 60A non-fusible</p>
                  <p className="text-white/50">Comm wire: 3 separate 14/3 cables</p>
                </div>
              </div>
            </section>

            <section id="120v-vs-240v" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">120V vs 240V Mini-Splits</h2>
              <p className="text-white/80 mb-4">
                Mini-split systems are available in both <strong>120V (115V)</strong> and <strong>240V (208-230V)</strong> configurations. The voltage affects circuit wiring, breaker type, and disconnect requirements. Understanding the differences is essential for correct installation.
              </p>

              <div className="grid md:grid-cols-2 gap-6 my-6">
                <div className="bg-white/5 rounded-xl p-6 border border-cyan-500/20">
                  <h3 className="font-semibold text-cyan-400 mb-3">120V Mini-Splits</h3>
                  <ul className="text-white/60 text-sm space-y-2">
                    <li><strong>Availability:</strong> 9,000-12,000 BTU units only</li>
                    <li><strong>Circuit:</strong> 15A or 20A, single-pole breaker</li>
                    <li><strong>Conductors:</strong> Hot (black), neutral (white), ground (green/bare)</li>
                    <li><strong>Wire:</strong> 14/2 NM or 12/2 NM with ground</li>
                    <li><strong>Disconnect:</strong> Single-pole rated disconnect or cord-and-plug connection</li>
                    <li><strong>Advantage:</strong> Can tap existing 120V circuit in some cases (if dedicated)</li>
                    <li><strong>Disadvantage:</strong> Higher amperage for same BTU, limited to smaller units</li>
                  </ul>
                </div>
                <div className="bg-white/5 rounded-xl p-6 border border-emerald-500/20">
                  <h3 className="font-semibold text-emerald-400 mb-3">240V Mini-Splits</h3>
                  <ul className="text-white/60 text-sm space-y-2">
                    <li><strong>Availability:</strong> 9,000-60,000+ BTU (most common)</li>
                    <li><strong>Circuit:</strong> 15A-50A, two-pole breaker</li>
                    <li><strong>Conductors:</strong> Two hots (black/red), ground (green/bare) &mdash; NO neutral</li>
                    <li><strong>Wire:</strong> 12/2 NM, 10/2 NM, or THHN in conduit</li>
                    <li><strong>Disconnect:</strong> Two-pole rated disconnect</li>
                    <li><strong>Advantage:</strong> Lower amperage, available in all sizes, more efficient operation</li>
                    <li><strong>Disadvantage:</strong> Requires 240V circuit from panel (2-pole breaker space)</li>
                  </ul>
                </div>
              </div>

              <div className="bg-red-900/30 rounded-xl p-6 my-6">
                <h4 className="font-semibold text-red-400 mb-3">240V Mini-Splits: No Neutral Required</h4>
                <p className="text-white/70 text-sm">
                  A common mistake is running 3-wire plus ground (12/3 NM) to a 240V mini-split. Most 240V mini-split systems do <strong>not require a neutral conductor</strong>. They use only L1, L2, and a ground. Check your unit&apos;s wiring diagram &mdash; if the terminal block shows only L1, L2, and a ground symbol, you need 2-wire plus ground (e.g., 12/2 NM with ground). Running an unnecessary neutral wastes material and can cause confusion during service. However, some 240V units from certain manufacturers do require a neutral &mdash; always verify from the installation manual.
                </p>
              </div>

              <p className="text-white/80 mb-4">
                For breaker and overcurrent protection sizing, refer to the MOP on the nameplate and our <Link href="/blog/nec-article-240-overcurrent-protection" className="text-cyan-400 hover:text-cyan-300">NEC Article 240 overcurrent protection guide</Link> for the standard breaker sizes available.
              </p>
            </section>

            <section id="condensate-pump" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Condensate Pump Wiring</h2>
              <p className="text-white/80 mb-4">
                When the indoor unit cannot drain condensate by gravity (e.g., when mounted in a basement, interior wall, or server room where the drain line must travel upward), a <strong>condensate removal pump</strong> is required. These small pumps have specific electrical connection requirements.
              </p>

              <div className="bg-white/5 rounded-xl p-6 my-6">
                <h4 className="font-semibold text-white mb-3">Condensate Pump Options</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <p className="font-semibold text-cyan-400 text-sm mb-2">Mini-Split Specific Pumps</p>
                    <ul className="text-white/60 text-sm space-y-1">
                      <li>Slim profile fits inside the indoor unit or behind it</li>
                      <li>Powered from the indoor unit&apos;s terminal board (low voltage)</li>
                      <li>No separate electrical circuit needed</li>
                      <li>Includes safety shutoff &mdash; shuts down cooling if pump fails</li>
                      <li>Examples: Rectorseal Aspen, DiversiTech IQP</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-semibold text-emerald-400 text-sm mb-2">Universal Condensate Pumps</p>
                    <ul className="text-white/60 text-sm space-y-1">
                      <li>Standalone unit mounted near the indoor unit</li>
                      <li>Requires 120V outlet or hardwired connection</li>
                      <li>May require a separate circuit or can share with the unit</li>
                      <li>Safety switch must be wired to the mini-split for shutoff</li>
                      <li>Examples: Little Giant VCMX-20, Liberty 404</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-orange-900/30 rounded-xl p-6 my-6">
                <h4 className="font-semibold text-orange-400 mb-3">Safety Shutoff Wiring</h4>
                <p className="text-white/70 text-sm">
                  Regardless of pump type, a <strong>safety float switch</strong> or pump alarm contact should be wired to shut down the mini-split if the condensate cannot be removed. Without this safeguard, a failed pump or clogged drain will cause water overflow and property damage. Most mini-split indoor units have a dedicated terminal (often labeled &ldquo;CN&rdquo; or &ldquo;S1/S2&rdquo;) for an external safety switch that will halt cooling operation when the contact opens.
                </p>
              </div>
            </section>

            <section id="common-mistakes" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Common Installation Mistakes</h2>
              <p className="text-white/80 mb-4">
                Mini-split electrical installations have several common failure points that lead to failed inspections, warranty voidance, equipment damage, or safety hazards. Avoid these pitfalls:
              </p>

              <div className="grid md:grid-cols-2 gap-4 my-6">
                <div className="bg-red-900/20 rounded-xl p-6 border border-red-500/20">
                  <h4 className="font-semibold text-red-400 mb-3">Sizing Wire to Running Amps</h4>
                  <p className="text-white/60 text-sm">
                    Using the running load current (RLA) instead of the MCA to select wire size. The MCA includes the required 25% safety factor for compressor circuits. Wire sized to RLA will be undersized and will fail inspection.
                  </p>
                </div>
                <div className="bg-red-900/20 rounded-xl p-6 border border-red-500/20">
                  <h4 className="font-semibold text-red-400 mb-3">Oversized Breaker</h4>
                  <p className="text-white/60 text-sm">
                    Installing a breaker larger than the MOP. If the nameplate says MOP 20A, a 30A breaker is a code violation. The MOP is the <strong>maximum</strong>, not a suggestion. Oversized breakers will not trip in time to protect the compressor and wiring.
                  </p>
                </div>
                <div className="bg-red-900/20 rounded-xl p-6 border border-red-500/20">
                  <h4 className="font-semibold text-red-400 mb-3">Missing Disconnect</h4>
                  <p className="text-white/60 text-sm">
                    Omitting the disconnect at the outdoor unit. Even if the panel breaker is nearby, NEC 440.14 requires a disconnect within sight and readily accessible from the equipment. The only exception is if the branch circuit breaker is within sight.
                  </p>
                </div>
                <div className="bg-red-900/20 rounded-xl p-6 border border-red-500/20">
                  <h4 className="font-semibold text-red-400 mb-3">Communication Wire in Power Conduit</h4>
                  <p className="text-white/60 text-sm">
                    Running the low-voltage communication cable in the same conduit as the 240V power wires. This causes electromagnetic interference that corrupts signals, trips error codes, and can damage control boards. Use separate conduit or route along the line set.
                  </p>
                </div>
                <div className="bg-red-900/20 rounded-xl p-6 border border-red-500/20">
                  <h4 className="font-semibold text-red-400 mb-3">Wrong Communication Cable</h4>
                  <p className="text-white/60 text-sm">
                    Using thermostat wire (18/2 or 18/4) instead of the manufacturer-specified 14-gauge communication cable. The communication wire carries power to the indoor unit &mdash; thermostat wire is too small and will cause voltage drops, error codes, and potential fire hazards.
                  </p>
                </div>
                <div className="bg-red-900/20 rounded-xl p-6 border border-red-500/20">
                  <h4 className="font-semibold text-red-400 mb-3">No Dedicated Circuit</h4>
                  <p className="text-white/60 text-sm">
                    Sharing the mini-split circuit with other loads (receptacles, lighting). NEC 440.6 and the manufacturer&apos;s instructions require a <strong>dedicated circuit</strong> for each mini-split outdoor unit. Sharing circuits causes voltage fluctuations and nuisance tripping.
                  </p>
                </div>
                <div className="bg-red-900/20 rounded-xl p-6 border border-red-500/20">
                  <h4 className="font-semibold text-red-400 mb-3">Improper Grounding</h4>
                  <p className="text-white/60 text-sm">
                    Failing to bond the equipment grounding conductor to the outdoor unit frame and disconnect enclosure. The ground connection is essential for fault protection and must be continuous from the panel ground bar through the disconnect to the unit chassis.
                  </p>
                </div>
                <div className="bg-red-900/20 rounded-xl p-6 border border-red-500/20">
                  <h4 className="font-semibold text-red-400 mb-3">Not Checking Voltage Before Startup</h4>
                  <p className="text-white/60 text-sm">
                    Powering up the system without verifying the voltage at the outdoor unit terminals. Incorrect voltage (especially on a 120V unit wired to 240V) will instantly destroy the control board, compressor, and other components. Always measure L1-L2 and L1/L2-Ground before energizing.
                  </p>
                </div>
              </div>

              <div className="bg-cyan-900/30 rounded-xl p-6 my-6">
                <h4 className="font-semibold text-cyan-400 mb-3">Pre-Startup Electrical Checklist</h4>
                <ul className="text-white/70 space-y-2 text-sm">
                  <li>&#9744; Wire size meets or exceeds MCA from nameplate</li>
                  <li>&#9744; Breaker size does not exceed MOP from nameplate</li>
                  <li>&#9744; Disconnect installed within sight and within 50 ft of outdoor unit</li>
                  <li>&#9744; All connections torqued to specification</li>
                  <li>&#9744; Communication wire matches manufacturer requirements (gauge, conductor count)</li>
                  <li>&#9744; Communication wire is NOT in the same conduit as power conductors</li>
                  <li>&#9744; Terminal numbers match between indoor and outdoor units</li>
                  <li>&#9744; Equipment grounding conductor continuous from panel to unit</li>
                  <li>&#9744; Voltage measured at outdoor unit terminals matches nameplate range</li>
                  <li>&#9744; Service loops left at both indoor and outdoor connections</li>
                </ul>
              </div>
            </section>

            <section id="permit-requirements" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Permit and Inspection Requirements</h2>
              <p className="text-white/80 mb-4">
                Mini-split installations typically require <strong>both electrical and mechanical permits</strong> in most jurisdictions. The electrical permit covers the new circuit, disconnect, and wiring. The mechanical permit covers the refrigerant system, line set, and HVAC components.
              </p>

              <div className="grid md:grid-cols-2 gap-6 my-6">
                <div className="bg-white/5 rounded-xl p-6">
                  <h3 className="font-semibold text-cyan-400 mb-3">Electrical Inspection Items</h3>
                  <ul className="text-white/60 text-sm space-y-2">
                    <li><strong>Panel:</strong> Dedicated breaker properly sized per MOP, correct pole count, adequate panel capacity</li>
                    <li><strong>Wiring method:</strong> Appropriate cable or conduit type for the installation location</li>
                    <li><strong>Wire size:</strong> Conductors sized to MCA or larger, proper type for ambient conditions</li>
                    <li><strong>Disconnect:</strong> Within sight, proper rating, lockable, NEMA 3R for outdoor</li>
                    <li><strong>Connections:</strong> Proper terminations, anti-oxidant on aluminum (if applicable), torque marks</li>
                    <li><strong>Grounding:</strong> Continuous equipment grounding conductor, proper bonding</li>
                    <li><strong>Communication cable:</strong> Proper gauge, separate from power wiring, correct routing</li>
                  </ul>
                </div>
                <div className="bg-white/5 rounded-xl p-6">
                  <h3 className="font-semibold text-emerald-400 mb-3">Who Can Pull the Permit?</h3>
                  <ul className="text-white/60 text-sm space-y-2">
                    <li><strong>Licensed electrician:</strong> Can pull electrical permits in all jurisdictions</li>
                    <li><strong>Licensed HVAC contractor:</strong> Many states allow HVAC contractors to pull both mechanical and electrical permits for HVAC-related work</li>
                    <li><strong>Homeowner:</strong> Some jurisdictions allow homeowners to pull permits for work on their own residence. Check local requirements.</li>
                    <li><strong>General contractor:</strong> May pull permits through licensed subcontractors</li>
                  </ul>
                  <p className="text-white/50 text-xs mt-3">
                    DIY mini-split installations without permits may void the manufacturer warranty, void homeowner insurance coverage, and create legal issues when selling the property.
                  </p>
                </div>
              </div>

              <div className="bg-purple-900/30 rounded-xl p-6 my-6">
                <h4 className="font-semibold text-purple-400 mb-3">NEC Articles That Apply to Mini-Split Installations</h4>
                <ul className="text-white/70 space-y-2 text-sm">
                  <li><strong>NEC Article 440:</strong> Air-Conditioning and Refrigerating Equipment &mdash; the primary article governing mini-split electrical installations</li>
                  <li><strong>NEC 440.14:</strong> Disconnecting means location requirements</li>
                  <li><strong>NEC 440.22:</strong> Maximum overcurrent protective device sizing (MOP)</li>
                  <li><strong>NEC 440.32:</strong> Single motor-compressor conductor sizing (MCA basis)</li>
                  <li><strong>NEC 440.35:</strong> Multi-motor and combination load equipment conductor sizing</li>
                  <li><strong>NEC Article 210:</strong> Branch circuit requirements for dedicated circuits</li>
                  <li><strong>NEC 110.14:</strong> Electrical connections &mdash; torque requirements and termination ratings</li>
                  <li><strong>NEC 300.4:</strong> Protection of conductors against physical damage</li>
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
                <Link href="/blog/nec-article-440-hvac-electrical" className="bg-white/5 hover:bg-white/10 rounded-xl p-6 transition-colors">
                  <span className="text-purple-400 text-sm">NEC Code</span>
                  <h3 className="font-semibold mt-2">NEC Article 440: HVAC Electrical Requirements</h3>
                </Link>
                <Link href="/blog/hvac-circuit-sizing-guide" className="bg-white/5 hover:bg-white/10 rounded-xl p-6 transition-colors">
                  <span className="text-blue-400 text-sm">Calculations</span>
                  <h3 className="font-semibold mt-2">HVAC Circuit Sizing Guide</h3>
                </Link>
                <Link href="/blog/disconnect-switch-requirements-nec" className="bg-white/5 hover:bg-white/10 rounded-xl p-6 transition-colors">
                  <span className="text-purple-400 text-sm">NEC Code</span>
                  <h3 className="font-semibold mt-2">Disconnect Switch Requirements per NEC</h3>
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
