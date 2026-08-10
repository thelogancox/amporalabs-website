import { Metadata } from "next";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import { BlogPostingJsonLd, BreadcrumbJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Hot Tub & Spa Electrical Wiring: GFCI, Disconnect & NEC 680 Guide",
  description: "Complete guide to hot tub and spa electrical wiring requirements per NEC Article 680. Learn GFCI protection rules, disconnect placement (5-50 feet), 240V wire sizing for 50A spa circuits, conduit and direct burial methods, bonding requirements, breaker sizing, and permit requirements for safe hot tub electrical installation.",
  keywords: [
    "hot tub wiring",
    "spa electrical requirements",
    "hot tub GFCI",
    "spa disconnect",
    "hot tub electrical code",
    "nec 680 hot tub",
    "hot tub breaker size",
    "spa wire size",
    "hot tub electrical installation",
    "240v hot tub wiring"
  ],
  alternates: {
    canonical: "https://amporalabs.com/blog/hot-tub-spa-electrical-wiring",
  },
  openGraph: {
    title: "Hot Tub & Spa Electrical Wiring: GFCI, Disconnect & NEC 680 Guide - Ampora",
    description: "Master hot tub and spa electrical installation with this comprehensive NEC 680 guide covering GFCI protection, disconnect placement, wire sizing, bonding, and code requirements.",
    url: "https://amporalabs.com/blog/hot-tub-spa-electrical-wiring",
    type: "article",
    publishedTime: "2026-03-04",
  },
};

function HeroIllustration() {
  return (
    <svg viewBox="0 0 400 180" className="w-full h-40 md:h-48" aria-label="Hot tub electrical wiring diagram showing disconnect panel, GFCI breaker, and hot tub">
      {/* Background */}
      <rect x="10" y="10" width="380" height="160" rx="4" fill="#1f2937" stroke="#374151" strokeWidth="1"/>

      {/* Main Panel (left) */}
      <g transform="translate(25, 25)">
        <rect x="0" y="0" width="70" height="100" rx="3" fill="#111827" stroke="#6b7280" strokeWidth="1.5"/>
        <text x="35" y="14" textAnchor="middle" fill="#9ca3af" fontSize="6" fontWeight="bold">MAIN PANEL</text>
        <line x1="10" y1="19" x2="60" y2="19" stroke="#4b5563" strokeWidth="0.5"/>

        {/* GFCI Breaker highlighted */}
        <rect x="10" y="24" width="50" height="18" rx="2" fill="#059669" fillOpacity="0.25" stroke="#10b981" strokeWidth="1"/>
        <text x="35" y="32" textAnchor="middle" fill="#10b981" fontSize="5.5" fontWeight="bold">50A GFCI</text>
        <text x="35" y="39" textAnchor="middle" fill="#10b981" fontSize="4.5">240V 2-POLE</text>

        {/* Other breakers */}
        <rect x="10" y="46" width="50" height="10" rx="1" fill="#374151" stroke="#4b5563" strokeWidth="0.5"/>
        <rect x="10" y="59" width="50" height="10" rx="1" fill="#374151" stroke="#4b5563" strokeWidth="0.5"/>
        <rect x="10" y="72" width="50" height="10" rx="1" fill="#374151" stroke="#4b5563" strokeWidth="0.5"/>
        <rect x="10" y="85" width="50" height="10" rx="1" fill="#374151" stroke="#4b5563" strokeWidth="0.5"/>

        {/* Ground bar */}
        <rect x="5" y="85" width="3" height="12" rx="1" fill="#22c55e" fillOpacity="0.5"/>
      </g>

      {/* Wire run from panel to disconnect */}
      <line x1="95" y1="58" x2="155" y2="58" stroke="#ef4444" strokeWidth="1.5" strokeDasharray="4 2"/>
      <line x1="95" y1="62" x2="155" y2="62" stroke="#111827" strokeWidth="1.5" strokeDasharray="4 2"/>
      <line x1="95" y1="66" x2="155" y2="66" stroke="#22c55e" strokeWidth="1.5" strokeDasharray="4 2"/>
      <text x="125" y="80" textAnchor="middle" fill="#9ca3af" fontSize="4.5">6 AWG THHN</text>
      <text x="125" y="87" textAnchor="middle" fill="#9ca3af" fontSize="4.5">IN CONDUIT</text>

      {/* Disconnect Box (center) */}
      <g transform="translate(155, 25)">
        <rect x="0" y="0" width="65" height="100" rx="3" fill="#111827" stroke="#f59e0b" strokeWidth="1.5"/>
        <text x="32" y="14" textAnchor="middle" fill="#f59e0b" fontSize="6" fontWeight="bold">DISCONNECT</text>
        <line x1="8" y1="19" x2="57" y2="19" stroke="#4b5563" strokeWidth="0.5"/>

        {/* Switch handle */}
        <rect x="18" y="28" width="30" height="40" rx="2" fill="#1f2937" stroke="#f59e0b" strokeWidth="1"/>
        <rect x="22" y="32" width="22" height="14" rx="1" fill="#ef4444" fillOpacity="0.3" stroke="#ef4444" strokeWidth="0.8"/>
        <text x="33" y="41" textAnchor="middle" fill="#ef4444" fontSize="5" fontWeight="bold">OFF</text>
        <rect x="22" y="50" width="22" height="14" rx="1" fill="#22c55e" fillOpacity="0.15" stroke="#22c55e" strokeWidth="0.8"/>
        <text x="33" y="59" textAnchor="middle" fill="#22c55e" fontSize="5">ON</text>

        {/* Handle indicator */}
        <line x1="33" y1="70" x2="33" y2="78" stroke="#f59e0b" strokeWidth="2" strokeLinecap="round"/>
        <circle cx="33" cy="80" r="3" fill="none" stroke="#f59e0b" strokeWidth="1"/>

        <text x="32" y="93" textAnchor="middle" fill="#9ca3af" fontSize="4.5">60A NON-FUSED</text>
      </g>

      {/* Distance label between disconnect and tub */}
      <text x="255" y="42" textAnchor="middle" fill="#f59e0b" fontSize="5.5" fontWeight="bold">5 ft MIN</text>
      <line x1="225" y1="45" x2="285" y2="45" stroke="#f59e0b" strokeWidth="0.8" markerEnd="url(#arrowEnd)" markerStart="url(#arrowStart)"/>

      {/* Wire run from disconnect to hot tub */}
      <line x1="220" y1="58" x2="280" y2="58" stroke="#ef4444" strokeWidth="1.5" strokeDasharray="4 2"/>
      <line x1="220" y1="62" x2="280" y2="62" stroke="#111827" strokeWidth="1.5" strokeDasharray="4 2"/>
      <line x1="220" y1="66" x2="280" y2="66" stroke="#22c55e" strokeWidth="1.5" strokeDasharray="4 2"/>
      <text x="250" y="80" textAnchor="middle" fill="#9ca3af" fontSize="4.5">6 AWG WIRE</text>

      {/* Hot Tub (right) */}
      <g transform="translate(280, 20)">
        {/* Tub body */}
        <ellipse cx="50" cy="95" rx="55" ry="18" fill="#1e3a5f" fillOpacity="0.4" stroke="#3b82f6" strokeWidth="1"/>
        <rect x="5" y="40" width="90" height="56" rx="6" fill="#1e3a5f" fillOpacity="0.5" stroke="#3b82f6" strokeWidth="1.5"/>
        <ellipse cx="50" cy="40" rx="45" ry="14" fill="#1e3a5f" fillOpacity="0.6" stroke="#3b82f6" strokeWidth="1.5"/>

        {/* Water surface */}
        <ellipse cx="50" cy="43" rx="38" ry="10" fill="#0ea5e9" fillOpacity="0.15"/>

        {/* Bubbles/jets */}
        <circle cx="35" cy="45" r="2" fill="#0ea5e9" fillOpacity="0.3"/>
        <circle cx="50" cy="42" r="1.5" fill="#0ea5e9" fillOpacity="0.4"/>
        <circle cx="65" cy="46" r="2" fill="#0ea5e9" fillOpacity="0.3"/>
        <circle cx="42" cy="48" r="1" fill="#0ea5e9" fillOpacity="0.2"/>
        <circle cx="58" cy="44" r="1" fill="#0ea5e9" fillOpacity="0.2"/>

        {/* Label */}
        <text x="50" y="72" textAnchor="middle" fill="#60a5fa" fontSize="6" fontWeight="bold">HOT TUB</text>
        <text x="50" y="81" textAnchor="middle" fill="#9ca3af" fontSize="4.5">240V / 50A</text>

        {/* Bonding wire indicator */}
        <line x1="5" y1="90" x2="-5" y2="100" stroke="#22c55e" strokeWidth="1" strokeDasharray="2 1"/>
        <text x="-5" y="108" textAnchor="middle" fill="#22c55e" fontSize="4">BOND</text>
      </g>

      {/* Legend at bottom */}
      <g transform="translate(25, 140)">
        <line x1="0" y1="5" x2="12" y2="5" stroke="#ef4444" strokeWidth="1.5" strokeDasharray="4 2"/>
        <text x="16" y="8" fill="#9ca3af" fontSize="4.5">Hot (L1, L2)</text>

        <line x1="70" y1="5" x2="82" y2="5" stroke="#22c55e" strokeWidth="1.5" strokeDasharray="4 2"/>
        <text x="86" y="8" fill="#9ca3af" fontSize="4.5">Equipment Ground</text>

        <line x1="155" y1="5" x2="167" y2="5" stroke="#111827" strokeWidth="1.5" strokeDasharray="4 2"/>
        <text x="171" y="8" fill="#9ca3af" fontSize="4.5">Neutral (if required)</text>

        <rect x="255" y="0" width="8" height="8" rx="1" fill="#059669" fillOpacity="0.25" stroke="#10b981" strokeWidth="0.8"/>
        <text x="267" y="7" fill="#9ca3af" fontSize="4.5">GFCI Protected</text>
      </g>

      {/* Arrow markers */}
      <defs>
        <marker id="arrowEnd" markerWidth="6" markerHeight="4" refX="5" refY="2" orient="auto">
          <path d="M0,0 L6,2 L0,4" fill="none" stroke="#f59e0b" strokeWidth="0.8"/>
        </marker>
        <marker id="arrowStart" markerWidth="6" markerHeight="4" refX="1" refY="2" orient="auto">
          <path d="M6,0 L0,2 L6,4" fill="none" stroke="#f59e0b" strokeWidth="0.8"/>
        </marker>
      </defs>
    </svg>
  );
}

export default function HotTubSpaElectricalWiringPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navigation />
      <div className="pt-20">
        <BreadcrumbJsonLd
          items={[
            { name: "Home", url: "https://amporalabs.com" },
            { name: "Blog", url: "https://amporalabs.com/blog" },
            { name: "Hot Tub & Spa Electrical Wiring", url: "https://amporalabs.com/blog/hot-tub-spa-electrical-wiring" },
          ]}
        />
        <BlogPostingJsonLd
          headline="Hot Tub & Spa Electrical Wiring: GFCI, Disconnect & NEC 680 Guide"
          description="Complete guide to hot tub and spa electrical wiring requirements per NEC Article 680, covering GFCI protection, disconnect placement, wire sizing, bonding, and installation procedures."
          datePublished="2026-03-04"
          dateModified="2026-03-04"
          url="https://amporalabs.com/blog/hot-tub-spa-electrical-wiring"
          wordCount={4800}
          keywords={["hot tub wiring", "spa electrical requirements", "NEC 680", "GFCI protection", "spa disconnect"]}
        />

        <article className="max-w-4xl mx-auto px-6 py-12">
          {/* Breadcrumb */}
          <nav className="text-sm text-white/60 mb-8">
            <Link href="/" className="hover:text-white">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/blog" className="hover:text-white">Blog</Link>
            <span className="mx-2">/</span>
            <span className="text-white">Hot Tub &amp; Spa Electrical Wiring</span>
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
              Hot Tub &amp; Spa Electrical Wiring: GFCI, Disconnect &amp; NEC 680 Guide
            </h1>
            <p className="text-xl text-white/70">
              Hot tub and spa installations are among the most common residential electrical projects &mdash; and among the most commonly failed inspections. This guide covers everything you need to know about NEC Article 680 requirements for hot tubs and spas, including GFCI protection, disconnect placement, wire sizing, bonding, conduit methods, and the step-by-step installation process to pass inspection the first time.
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
                <h3 className="font-display font-bold text-lg mb-2 text-red-400">Critical Safety Information</h3>
                <p className="text-white/80 text-sm">
                  Hot tub electrical work involves 240-volt circuits that can cause electrocution. All hot tub and spa wiring must be performed by a licensed electrician and inspected by the local authority having jurisdiction (AHJ). This article is for educational purposes &mdash; always follow your local electrical codes, which may be more restrictive than the NEC.
                </p>
              </div>
            </div>
          </div>

          {/* Table of Contents */}
          <div className="bg-white/5 rounded-2xl p-6 mb-12">
            <h2 className="font-display font-bold mb-4">In This Guide</h2>
            <ul className="space-y-2 text-white/70">
              <li><a href="#nec-680-overview" className="hover:text-purple-400">NEC Article 680: Hot Tub &amp; Spa Requirements</a></li>
              <li><a href="#gfci-protection" className="hover:text-purple-400">GFCI Protection Requirements (Class A)</a></li>
              <li><a href="#disconnect-requirements" className="hover:text-purple-400">Disconnect Placement: The 5-to-50-Foot Rule</a></li>
              <li><a href="#wire-sizing" className="hover:text-purple-400">Wire Sizing for Hot Tubs (50A/240V)</a></li>
              <li><a href="#conduit-methods" className="hover:text-purple-400">Conduit vs. Direct Burial Methods</a></li>
              <li><a href="#bonding-requirements" className="hover:text-purple-400">Bonding Requirements per NEC 680.26</a></li>
              <li><a href="#common-specs" className="hover:text-purple-400">Common Hot Tub Electrical Specifications</a></li>
              <li><a href="#cord-vs-hardwired" className="hover:text-purple-400">Cord-and-Plug Connected vs. Hardwired</a></li>
              <li><a href="#permit-requirements" className="hover:text-purple-400">Permit and Inspection Requirements</a></li>
              <li><a href="#installation-guide" className="hover:text-purple-400">Step-by-Step Installation Guide</a></li>
              <li><a href="#common-violations" className="hover:text-purple-400">Common Code Violations and How to Avoid Them</a></li>
            </ul>
          </div>

          {/* Article Content */}
          <div className="prose prose-invert prose-lg max-w-none">

            <section id="nec-680-overview" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">NEC Article 680: Hot Tub &amp; Spa Requirements</h2>
              <p className="text-white/80 mb-4">
                <strong>NEC Article 680</strong> governs the electrical installation of swimming pools, fountains, hot tubs, spas, and hydromassage bathtubs. Hot tubs and spas fall under <strong>Part IV (680.40&ndash;680.44)</strong>, which establishes specific requirements for permanently installed spas and hot tubs, whether indoor or outdoor.
              </p>
              <p className="text-white/80 mb-4">
                The NEC distinguishes between several types of water-related installations. Understanding which category your hot tub falls into determines which rules apply:
              </p>

              <div className="grid md:grid-cols-2 gap-6 my-6">
                <div className="bg-blue-900/30 rounded-xl p-6">
                  <h3 className="font-semibold text-blue-400 mb-3">Spa or Hot Tub (NEC 680.2)</h3>
                  <ul className="text-white/60 text-sm space-y-1">
                    <li>Factory-built or field-constructed</li>
                    <li>Designed for immersion of persons</li>
                    <li>May include hydrotherapy jets, hot water, cold water, mineral baths, or air induction</li>
                    <li>Not designed to be drained after each use</li>
                    <li>Governed by NEC 680 Part IV</li>
                  </ul>
                </div>
                <div className="bg-cyan-900/30 rounded-xl p-6">
                  <h3 className="font-semibold text-cyan-400 mb-3">Hydromassage Bathtub (NEC 680.2)</h3>
                  <ul className="text-white/60 text-sm space-y-1">
                    <li>Designed for water circulation and jet action</li>
                    <li>Drained after each use</li>
                    <li>Not designed for immersion (bathtub depth)</li>
                    <li>Typically 120V, 15A or 20A circuit</li>
                    <li>Governed by NEC 680 Part VII (less restrictive)</li>
                  </ul>
                </div>
              </div>

              <div className="bg-white/5 rounded-xl p-6 my-6">
                <h4 className="font-semibold text-cyan-400 mb-3">Key NEC 680 Sections for Hot Tubs</h4>
                <ul className="text-white/70 space-y-2 text-sm">
                  <li><strong>680.40:</strong> Outdoor installations &mdash; must comply with Parts I and II (pools) except as modified by Part IV</li>
                  <li><strong>680.41:</strong> Emergency switch or control for turning off power</li>
                  <li><strong>680.42:</strong> Outdoor installation requirements (same as pool in many cases)</li>
                  <li><strong>680.43:</strong> Indoor installation requirements (additional ventilation considerations)</li>
                  <li><strong>680.44:</strong> GFCI protection requirements</li>
                  <li><strong>680.26:</strong> Equipotential bonding requirements (referenced from Part II)</li>
                  <li><strong>680.7:</strong> Cord-and-plug connection provisions</li>
                </ul>
              </div>

              <p className="text-white/80 mb-4">
                A critical point many electricians miss: <strong>outdoor spa and hot tub installations must comply with NEC 680 Part I (General) and Part II (Permanently Installed Pools)</strong> except where Part IV specifically modifies those requirements. This means swimming pool wiring rules &mdash; including bonding, grounding, and clearance distances &mdash; generally apply to hot tubs as well. For more details on pool electrical requirements, see our <Link href="/blog/swimming-pool-electrical-nec-680" className="text-purple-400 hover:text-purple-300">complete NEC 680 swimming pool electrical guide</Link>.
              </p>
            </section>

            <section id="gfci-protection" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">GFCI Protection Requirements (Class A)</h2>
              <p className="text-white/80 mb-4">
                <strong>NEC 680.44</strong> requires that all hot tub and spa circuits be protected by a <strong>Class A ground-fault circuit interrupter (GFCI)</strong>. This is a non-negotiable requirement &mdash; there are no exceptions. A Class A GFCI trips when it detects a ground-fault current of <strong>5 milliamps or more</strong>, providing life-saving protection against electrocution in wet environments.
              </p>

              <div className="bg-emerald-900/30 rounded-xl p-6 my-6">
                <h4 className="font-semibold text-emerald-400 mb-3">GFCI Requirements Summary</h4>
                <ul className="text-white/70 space-y-2 text-sm">
                  <li><strong>All 125V and 250V circuits:</strong> Must be GFCI protected, including pump motors, heaters, controls, and lighting</li>
                  <li><strong>Class A protection:</strong> Trips at 5mA ground-fault current (4-6mA range)</li>
                  <li><strong>Method:</strong> GFCI circuit breaker at the panel is the most common method for 240V spa circuits</li>
                  <li><strong>Testing:</strong> Must be tested monthly per manufacturer instructions and before each use</li>
                  <li><strong>Outlet-type GFCI:</strong> Not used for 240V hardwired spas &mdash; GFCI breaker is required</li>
                </ul>
              </div>

              <p className="text-white/80 mb-4">
                For 240V hot tubs (which is the vast majority of full-size spas), GFCI protection is provided by a <strong>two-pole GFCI circuit breaker</strong> installed in the main electrical panel or sub-panel. This breaker monitors both hot legs simultaneously and will trip if a ground fault is detected on either leg. For a deeper understanding of GFCI vs. AFCI protection types, refer to our <Link href="/blog/gfci-vs-afci-requirements" className="text-purple-400 hover:text-purple-300">GFCI vs. AFCI requirements guide</Link>.
              </p>

              <div className="grid md:grid-cols-2 gap-6 my-6">
                <div className="bg-white/5 rounded-xl p-6">
                  <h3 className="font-semibold text-white mb-3">GFCI Breaker Installation Notes</h3>
                  <ul className="text-white/60 text-sm space-y-2">
                    <li>GFCI breakers have a coiled white neutral pigtail that <strong>must</strong> connect to the panel neutral bar</li>
                    <li>The load neutral connects to the breaker itself, not the neutral bar</li>
                    <li>Two-pole GFCI breakers are larger than standard breakers &mdash; verify panel space before purchasing</li>
                    <li>Must be the same brand as the panel (Square D, Eaton, Siemens, etc.)</li>
                    <li>Cost: $80-$200 for a 50A two-pole GFCI breaker</li>
                  </ul>
                </div>
                <div className="bg-red-900/30 rounded-xl p-6">
                  <h3 className="font-semibold text-red-400 mb-3">Common GFCI Tripping Causes</h3>
                  <ul className="text-white/60 text-sm space-y-2">
                    <li><strong>Moisture in connections:</strong> Water intrusion at disconnect or junction boxes</li>
                    <li><strong>Damaged heater element:</strong> Heating element contacting the spa shell</li>
                    <li><strong>Worn pump seals:</strong> Water leaking into the pump motor</li>
                    <li><strong>Neutral-ground bond:</strong> Neutral touching ground downstream of GFCI</li>
                    <li><strong>Long wire runs:</strong> Capacitive leakage on runs over 100 feet</li>
                  </ul>
                </div>
              </div>

              <div className="bg-orange-900/30 rounded-xl p-6 my-6">
                <h4 className="font-semibold text-orange-400 mb-3">120V Plug-In Spas</h4>
                <p className="text-white/70 text-sm">
                  Smaller plug-in hot tubs (120V/15A or 20A) must plug into a GFCI-protected receptacle. Per NEC 680.44, the receptacle must be a GFCI type or on a GFCI-protected circuit. These spas typically include an integrated GFCI in the cord, but the NEC still requires GFCI protection at the receptacle or breaker as well. The receptacle must be located at least <strong>6 feet</strong> from the inside wall of the spa per NEC 680.43(A).
                </p>
              </div>
            </section>

            <section id="disconnect-requirements" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Disconnect Placement: The 5-to-50-Foot Rule</h2>
              <p className="text-white/80 mb-4">
                NEC 680.12 requires a <strong>disconnect means</strong> for every hot tub and spa installation. This disconnect must be <strong>within sight of</strong> and at least <strong>5 feet from</strong> the inside wall of the hot tub. The NEC defines &ldquo;within sight&rdquo; as visible and not more than <strong>50 feet</strong> away.
              </p>

              <div className="bg-yellow-900/30 rounded-xl p-6 my-6 border border-yellow-500/30">
                <h4 className="font-semibold text-yellow-400 mb-3">Disconnect Placement Rules</h4>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <p className="text-white/60 text-sm mb-2 font-semibold">Required:</p>
                    <ul className="text-white/70 text-sm space-y-1">
                      <li>Minimum <strong>5 feet</strong> from inside wall of spa</li>
                      <li>Maximum <strong>50 feet</strong> from the spa (within sight)</li>
                      <li>Must be <strong>readily accessible</strong> (not behind locked doors)</li>
                      <li>Must disconnect <strong>all ungrounded conductors</strong></li>
                      <li>Must be rated for the circuit amperage</li>
                    </ul>
                  </div>
                  <div>
                    <p className="text-white/60 text-sm mb-2 font-semibold">Common Disconnect Types:</p>
                    <ul className="text-white/70 text-sm space-y-1">
                      <li><strong>60A non-fused disconnect:</strong> Most common for 50A circuits</li>
                      <li><strong>60A fused disconnect:</strong> Provides additional overcurrent protection</li>
                      <li><strong>GFCI disconnect combo:</strong> Combines disconnect and GFCI in one enclosure</li>
                      <li><strong>Intermatic-style spa panel:</strong> Includes GFCI breaker and disconnect</li>
                    </ul>
                  </div>
                </div>
              </div>

              <p className="text-white/80 mb-4">
                The <strong>5-foot minimum</strong> rule exists for safety &mdash; it prevents a person standing in or touching the spa from reaching the disconnect. The <strong>50-foot maximum</strong> ensures that a person servicing the spa can see if someone is in or near the water before re-energizing the circuit.
              </p>

              <div className="bg-white/5 rounded-xl p-6 my-6">
                <h4 className="font-semibold text-white mb-3">Practical Disconnect Placement Tips</h4>
                <ul className="text-white/70 space-y-2 text-sm">
                  <li><strong>Mount at 4-5 feet height:</strong> The disconnect switch should be easily operable without bending or reaching</li>
                  <li><strong>Weather-rated enclosure:</strong> Outdoor disconnects must be rated NEMA 3R (rain-tight) minimum</li>
                  <li><strong>Avoid mounting on the house directly behind the spa:</strong> This is a common violation because the measurement is from the inside wall of the spa, not the outside edge &mdash; often placing the disconnect less than 5 feet away</li>
                  <li><strong>Lockable disconnect:</strong> While not required by the NEC for residential, a lockable disconnect is best practice for maintenance safety</li>
                  <li><strong>Spa panel combo units:</strong> Popular products like the Intermatic P1000 series combine a GFCI breaker and disconnect in one NEMA 3R enclosure &mdash; simplifying the installation</li>
                </ul>
              </div>

              <div className="bg-red-900/30 rounded-xl p-6 my-6">
                <h4 className="font-semibold text-red-400 mb-3">Can the Main Panel Serve as the Disconnect?</h4>
                <p className="text-white/70 text-sm">
                  Only if the main panel is <strong>within sight of</strong> the spa and between 5 and 50 feet from the inside wall. In most residential installations, the main panel is inside the house (garage, basement, or utility room) and not visible from the spa location. In those cases, a <strong>separate outdoor disconnect is required</strong> regardless of whether you install a sub-panel or spa panel.
                </p>
              </div>
            </section>

            <section id="wire-sizing" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Wire Sizing for Hot Tubs (50A/240V)</h2>
              <p className="text-white/80 mb-4">
                Most full-size hot tubs and spas require a <strong>240-volt, 50-ampere dedicated circuit</strong>. The wire size for this circuit depends on the amperage, wire type, conduit method, ambient temperature, and total run distance. Proper <Link href="/blog/wire-sizing-guide-nec-ampacity-tables" className="text-purple-400 hover:text-purple-300">wire sizing per NEC ampacity tables</Link> is critical for safety and passing inspection.
              </p>

              <div className="overflow-x-auto my-6">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-white/20">
                      <th className="text-left py-3 px-4 text-white/60">Spa Circuit</th>
                      <th className="text-left py-3 px-4 text-white/60">Breaker Size</th>
                      <th className="text-left py-3 px-4 text-white/60">Copper Wire (THHN/THWN)</th>
                      <th className="text-left py-3 px-4 text-white/60">Aluminum Wire</th>
                    </tr>
                  </thead>
                  <tbody className="text-white/80">
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">Small spa (120V)</td>
                      <td className="py-3 px-4 font-mono text-cyan-400">20A / 120V</td>
                      <td className="py-3 px-4 font-mono">12 AWG</td>
                      <td className="py-3 px-4 font-mono">10 AWG</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">Mid-size spa</td>
                      <td className="py-3 px-4 font-mono text-cyan-400">40A / 240V</td>
                      <td className="py-3 px-4 font-mono">8 AWG</td>
                      <td className="py-3 px-4 font-mono">6 AWG</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">Standard spa (most common)</td>
                      <td className="py-3 px-4 font-mono text-cyan-400">50A / 240V</td>
                      <td className="py-3 px-4 font-mono">6 AWG</td>
                      <td className="py-3 px-4 font-mono">4 AWG</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4">Large/commercial spa</td>
                      <td className="py-3 px-4 font-mono text-cyan-400">60A / 240V</td>
                      <td className="py-3 px-4 font-mono">6 AWG</td>
                      <td className="py-3 px-4 font-mono">4 AWG</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="bg-white/5 rounded-xl p-6 my-6">
                <h4 className="font-semibold text-cyan-400 mb-3">Standard 50A/240V Hot Tub Wiring</h4>
                <p className="text-white/70 mb-3">For the most common hot tub installation (50A, 240V), you will need:</p>
                <ul className="text-white/70 space-y-2 text-sm">
                  <li><strong>Two hot conductors:</strong> 6 AWG copper THHN/THWN (one red, one black)</li>
                  <li><strong>One neutral conductor:</strong> 6 AWG copper THHN/THWN (white) &mdash; required if the spa has 120V components (lights, ozonator, controls)</li>
                  <li><strong>One equipment grounding conductor:</strong> 6 AWG copper (green or bare)</li>
                  <li><strong>Total wire count:</strong> 4 conductors (2 hot + 1 neutral + 1 ground) for most spas</li>
                  <li><strong>Some spas (3-wire):</strong> If the manufacturer specifies no neutral, you run 3 conductors (2 hot + 1 ground) &mdash; always check the spa manual</li>
                </ul>
              </div>

              <h3 className="text-xl font-display font-semibold mb-3 text-cyan-400">Voltage Drop Considerations</h3>
              <p className="text-white/80 mb-4">
                For longer wire runs, <Link href="/blog/how-to-calculate-voltage-drop" className="text-purple-400 hover:text-purple-300">voltage drop calculations</Link> become important. The NEC recommends limiting voltage drop to <strong>3% for branch circuits</strong> (7.2V for a 240V circuit) and <strong>5% total</strong> for feeder plus branch circuit combined. For a 50A/240V spa circuit:
              </p>
              <div className="overflow-x-auto my-6">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-white/20">
                      <th className="text-left py-3 px-4 text-white/60">Wire Size (Copper)</th>
                      <th className="text-left py-3 px-4 text-white/60">Max Distance at 3% Drop (50A, 240V)</th>
                      <th className="text-left py-3 px-4 text-white/60">Max Distance at 5% Drop</th>
                    </tr>
                  </thead>
                  <tbody className="text-white/80">
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-mono">6 AWG</td>
                      <td className="py-3 px-4 font-mono text-cyan-400">~58 feet</td>
                      <td className="py-3 px-4 font-mono text-cyan-400">~96 feet</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-mono">4 AWG</td>
                      <td className="py-3 px-4 font-mono text-cyan-400">~92 feet</td>
                      <td className="py-3 px-4 font-mono text-cyan-400">~153 feet</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-mono">3 AWG</td>
                      <td className="py-3 px-4 font-mono text-cyan-400">~116 feet</td>
                      <td className="py-3 px-4 font-mono text-cyan-400">~193 feet</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-white/60 text-sm">
                If your wire run exceeds the distance limits for 6 AWG, you must upsize to 4 AWG or larger. Always calculate voltage drop for runs over 50 feet.
              </p>
            </section>

            <section id="conduit-methods" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Conduit vs. Direct Burial Methods</h2>
              <p className="text-white/80 mb-4">
                Hot tub wiring typically runs from the main panel (usually inside the house) to an outdoor disconnect, and then from the disconnect to the spa equipment pack. The wiring method depends on whether the run is above ground, underground, or a combination of both.
              </p>

              <div className="grid md:grid-cols-2 gap-6 my-6">
                <div className="bg-white/5 rounded-xl p-6">
                  <h3 className="font-semibold text-cyan-400 mb-3">Conduit Methods (Above Ground)</h3>
                  <ul className="text-white/70 text-sm space-y-2">
                    <li><strong>PVC Schedule 80:</strong> Required where exposed to physical damage; gray color</li>
                    <li><strong>PVC Schedule 40:</strong> Acceptable where not subject to physical damage</li>
                    <li><strong>Rigid Metal Conduit (RMC):</strong> Provides excellent physical protection; serves as equipment grounding conductor</li>
                    <li><strong>Electrical Metallic Tubing (EMT):</strong> Acceptable above ground; lighter and easier to work with than RMC</li>
                    <li><strong>Liquidtight Flexible:</strong> Required for the final connection to the spa pack (whip)</li>
                  </ul>
                </div>
                <div className="bg-white/5 rounded-xl p-6">
                  <h3 className="font-semibold text-emerald-400 mb-3">Underground Wiring Methods</h3>
                  <ul className="text-white/70 text-sm space-y-2">
                    <li><strong>PVC Schedule 80 conduit with THWN wire:</strong> Minimum 18&Prime; burial depth</li>
                    <li><strong>PVC Schedule 40 conduit with THWN wire:</strong> Minimum 18&Prime; burial depth</li>
                    <li><strong>Rigid Metal Conduit (RMC):</strong> Minimum 6&Prime; burial depth</li>
                    <li><strong>UF-B cable (direct burial):</strong> Minimum 24&Prime; burial depth &mdash; check local codes, some AHJs do not allow UF-B for spa circuits</li>
                    <li><strong>GFCI-protected circuit in PVC:</strong> May reduce burial depth to 12&Prime; per NEC 300.5</li>
                  </ul>
                </div>
              </div>

              <div className="bg-orange-900/30 rounded-xl p-6 my-6">
                <h4 className="font-semibold text-orange-400 mb-3">Minimum Burial Depths (NEC Table 300.5)</h4>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-white/20">
                        <th className="text-left py-2 px-3 text-white/60">Wiring Method</th>
                        <th className="text-left py-2 px-3 text-white/60">Under Driveway</th>
                        <th className="text-left py-2 px-3 text-white/60">Under Yard/Landscaping</th>
                      </tr>
                    </thead>
                    <tbody className="text-white/80">
                      <tr className="border-b border-white/10">
                        <td className="py-2 px-3">RMC or IMC</td>
                        <td className="py-2 px-3 font-mono text-cyan-400">6&Prime;</td>
                        <td className="py-2 px-3 font-mono text-cyan-400">6&Prime;</td>
                      </tr>
                      <tr className="border-b border-white/10">
                        <td className="py-2 px-3">PVC conduit (Schedule 40/80)</td>
                        <td className="py-2 px-3 font-mono text-cyan-400">24&Prime;</td>
                        <td className="py-2 px-3 font-mono text-cyan-400">18&Prime;</td>
                      </tr>
                      <tr className="border-b border-white/10">
                        <td className="py-2 px-3">PVC with GFCI protection</td>
                        <td className="py-2 px-3 font-mono text-cyan-400">18&Prime;</td>
                        <td className="py-2 px-3 font-mono text-cyan-400">12&Prime;</td>
                      </tr>
                      <tr>
                        <td className="py-2 px-3">UF-B cable (direct burial)</td>
                        <td className="py-2 px-3 font-mono text-cyan-400">24&Prime;</td>
                        <td className="py-2 px-3 font-mono text-cyan-400">24&Prime;</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="text-white/60 text-xs mt-3">For complete underground wiring guidance, see our <Link href="/blog/underground-wiring-installation-guide" className="text-purple-400 hover:text-purple-300">underground wiring installation guide</Link>.</p>
              </div>

              <div className="bg-white/5 rounded-xl p-6 my-6">
                <h4 className="font-semibold text-white mb-3">Typical Conduit Routing</h4>
                <p className="text-white/70 text-sm mb-3">A typical hot tub conduit run looks like this:</p>
                <ol className="text-white/70 text-sm space-y-2 list-decimal list-inside">
                  <li><strong>Panel to exterior wall:</strong> EMT or PVC through the wall with an LB fitting</li>
                  <li><strong>Down exterior wall:</strong> PVC Schedule 80 (exposed to damage) or EMT</li>
                  <li><strong>Underground:</strong> Transition to PVC Schedule 40 at 18&Prime; depth minimum</li>
                  <li><strong>Up to disconnect:</strong> PVC Schedule 80 rising from ground to disconnect box</li>
                  <li><strong>Disconnect to spa:</strong> Underground PVC or above-ground conduit run</li>
                  <li><strong>Final connection:</strong> Liquidtight flexible conduit (whip) from junction to spa pack</li>
                </ol>
              </div>
            </section>

            <section id="bonding-requirements" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Bonding Requirements per NEC 680.26</h2>
              <p className="text-white/80 mb-4">
                <strong>Equipotential bonding</strong> is one of the most critical &mdash; and most frequently misunderstood &mdash; aspects of hot tub electrical installation. NEC 680.26 requires an <strong>equipotential bonding grid</strong> to eliminate voltage gradients that could cause electric shock. Bonding and grounding serve different purposes:
              </p>

              <div className="grid md:grid-cols-2 gap-6 my-6">
                <div className="bg-emerald-900/30 rounded-xl p-6">
                  <h3 className="font-semibold text-emerald-400 mb-3">Bonding (Equipotential)</h3>
                  <ul className="text-white/60 text-sm space-y-1">
                    <li>Connects all metal parts to the <strong>same potential</strong></li>
                    <li>Eliminates voltage differences between touchable surfaces</li>
                    <li>Uses minimum 8 AWG solid copper</li>
                    <li>Does NOT need to connect to the panel ground</li>
                    <li>Creates an equipotential plane around the spa</li>
                  </ul>
                </div>
                <div className="bg-blue-900/30 rounded-xl p-6">
                  <h3 className="font-semibold text-blue-400 mb-3">Grounding (Safety)</h3>
                  <ul className="text-white/60 text-sm space-y-1">
                    <li>Provides a <strong>fault return path</strong> to the source</li>
                    <li>Trips the breaker during a ground fault</li>
                    <li>Equipment grounding conductor in the circuit</li>
                    <li>Connected back to the electrical panel</li>
                    <li>Part of the circuit wiring</li>
                  </ul>
                </div>
              </div>

              <h3 className="text-xl font-display font-semibold mb-3 text-cyan-400">What Must Be Bonded</h3>
              <p className="text-white/80 mb-4">
                Per NEC 680.26, the following items within <strong>5 feet</strong> of the inside wall of the spa must be bonded together with a minimum <strong>8 AWG solid copper</strong> bonding conductor:
              </p>
              <ul className="list-disc list-inside text-white/70 space-y-2 mb-4">
                <li><strong>All metal parts of the spa</strong> (frame, shell support, motor housings, heater housing)</li>
                <li><strong>Metal fittings, piping, and conduit</strong> within 5 feet</li>
                <li><strong>Metal fence, railing, or deck structure</strong> within 5 feet</li>
                <li><strong>Metal water pipe</strong> within 5 feet</li>
                <li><strong>Reinforcing steel (rebar)</strong> in concrete pads or decks within 5 feet</li>
                <li><strong>Metal light fixtures, junction boxes, or enclosures</strong> within 5 feet</li>
              </ul>

              <div className="bg-yellow-900/30 rounded-xl p-6 my-6 border border-yellow-500/30">
                <h4 className="font-semibold text-yellow-400 mb-3">Common Bonding Mistakes</h4>
                <ul className="text-white/70 space-y-2 text-sm">
                  <li><strong>Missing bonding lug on spa:</strong> Most factory-built spas have a bonding lug on the equipment pack &mdash; it must be connected to the bonding grid</li>
                  <li><strong>Using stranded wire:</strong> NEC 680.26(B) requires <strong>solid copper</strong> for the bonding conductor &mdash; stranded is not permitted</li>
                  <li><strong>Forgetting the concrete pad:</strong> If the spa sits on a concrete pad with rebar, the rebar must be bonded. If no rebar, a copper conductor grid (minimum 4 feet by 4 feet of bare copper) must be installed per NEC 680.26(B)(2)</li>
                  <li><strong>Confusing bonding with grounding:</strong> The bonding conductor is separate from the equipment grounding conductor in the circuit wiring</li>
                  <li><strong>Not bonding metal within 5 feet:</strong> Metal patio furniture anchors, gas piping, deck railings, and fence posts within 5 feet are often overlooked</li>
                </ul>
              </div>
            </section>

            {/* Mid-Article CTA */}
            <div className="not-prose my-12 bg-gradient-to-r from-purple-900/40 to-cyan-900/40 rounded-xl p-6 border border-purple-500/20">
              <div className="flex flex-col sm:flex-row items-center gap-4">
                <div className="flex-1 text-center sm:text-left">
                  <p className="font-display font-bold text-lg text-white mb-1">Ampora &mdash; The Electrician&apos;s AI Companion</p>
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

            <section id="common-specs" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Common Hot Tub Electrical Specifications</h2>
              <p className="text-white/80 mb-4">
                Hot tub manufacturers specify the electrical requirements in the owner&apos;s manual and on the equipment nameplate. Always follow the manufacturer&apos;s specifications &mdash; they may be more restrictive than NEC minimums. Here are the most common configurations:
              </p>

              <div className="overflow-x-auto my-6">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-white/20">
                      <th className="text-left py-3 px-4 text-white/60">Spa Category</th>
                      <th className="text-left py-3 px-4 text-white/60">Voltage</th>
                      <th className="text-left py-3 px-4 text-white/60">Amperage</th>
                      <th className="text-left py-3 px-4 text-white/60">Wattage</th>
                      <th className="text-left py-3 px-4 text-white/60">Typical Use</th>
                    </tr>
                  </thead>
                  <tbody className="text-white/80">
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">Plug-in spa</td>
                      <td className="py-3 px-4 font-mono text-cyan-400">120V</td>
                      <td className="py-3 px-4 font-mono">15-20A</td>
                      <td className="py-3 px-4 font-mono">1,000-1,500W</td>
                      <td className="py-3 px-4 text-white/60">2-4 person portable</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">Convertible spa</td>
                      <td className="py-3 px-4 font-mono text-cyan-400">120V/240V</td>
                      <td className="py-3 px-4 font-mono">20A/30A</td>
                      <td className="py-3 px-4 font-mono">1,500-5,000W</td>
                      <td className="py-3 px-4 text-white/60">Mid-size, dual voltage</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">Standard spa</td>
                      <td className="py-3 px-4 font-mono text-cyan-400">240V</td>
                      <td className="py-3 px-4 font-mono">40-50A</td>
                      <td className="py-3 px-4 font-mono">7,200-12,000W</td>
                      <td className="py-3 px-4 text-white/60">5-7 person, heater + pumps</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4">High-performance spa</td>
                      <td className="py-3 px-4 font-mono text-cyan-400">240V</td>
                      <td className="py-3 px-4 font-mono">50-60A</td>
                      <td className="py-3 px-4 font-mono">10,000-15,000W</td>
                      <td className="py-3 px-4 text-white/60">7+ person, dual pumps, full features</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="bg-white/5 rounded-xl p-6 my-6">
                <h4 className="font-semibold text-white mb-3">Typical Hot Tub Electrical Components</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <p className="text-white/60 text-sm font-semibold mb-2">Major Loads:</p>
                    <ul className="text-white/70 text-sm space-y-1">
                      <li><strong>Heater:</strong> 4,000-6,000W (the largest single load)</li>
                      <li><strong>Jet pump 1:</strong> 1,500-2,500W (1-3 HP)</li>
                      <li><strong>Jet pump 2:</strong> 1,500-2,500W (if equipped)</li>
                      <li><strong>Circulation pump:</strong> 100-250W (runs continuously)</li>
                    </ul>
                  </div>
                  <div>
                    <p className="text-white/60 text-sm font-semibold mb-2">Auxiliary Loads:</p>
                    <ul className="text-white/70 text-sm space-y-1">
                      <li><strong>Ozonator:</strong> 30-100W</li>
                      <li><strong>LED lighting:</strong> 10-50W</li>
                      <li><strong>Control board:</strong> 20-50W</li>
                      <li><strong>Audio system:</strong> 50-100W (if equipped)</li>
                    </ul>
                  </div>
                </div>
                <p className="text-white/60 text-xs mt-4">
                  Note: Most spas use load management &mdash; the heater shuts off automatically when the jet pump runs to keep total current draw under 50A.
                </p>
              </div>
            </section>

            <section id="cord-vs-hardwired" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Cord-and-Plug Connected vs. Hardwired</h2>
              <p className="text-white/80 mb-4">
                NEC 680.7 permits cord-and-plug connection for certain spa and hot tub installations, but there are strict limitations. Understanding the difference determines your wiring approach and inspection requirements.
              </p>

              <div className="grid md:grid-cols-2 gap-6 my-6">
                <div className="bg-white/5 rounded-xl p-6 border border-cyan-500/20">
                  <h3 className="font-semibold text-cyan-400 mb-3">Cord-and-Plug (120V Spas)</h3>
                  <ul className="text-white/60 text-sm space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="text-green-400 mt-0.5">&#10003;</span>
                      <span>Permitted for listed, factory-built spas</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-400 mt-0.5">&#10003;</span>
                      <span>Maximum cord length: 15 feet</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-400 mt-0.5">&#10003;</span>
                      <span>Must include integral GFCI in cord or plug</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-400 mt-0.5">&#10003;</span>
                      <span>Receptacle must be GFCI-protected</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-400 mt-0.5">&#10003;</span>
                      <span>Receptacle minimum 6 feet from spa (indoor)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-400 mt-0.5">&#10003;</span>
                      <span>Receptacle minimum 10 feet from spa (outdoor, per 680.22)</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-white/5 rounded-xl p-6 border border-emerald-500/20">
                  <h3 className="font-semibold text-emerald-400 mb-3">Hardwired (240V Spas)</h3>
                  <ul className="text-white/60 text-sm space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="text-green-400 mt-0.5">&#10003;</span>
                      <span>Required for all 240V installations</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-400 mt-0.5">&#10003;</span>
                      <span>Direct wiring from disconnect to spa pack</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-400 mt-0.5">&#10003;</span>
                      <span>GFCI protection via breaker at panel</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-400 mt-0.5">&#10003;</span>
                      <span>Disconnect switch required (5-50 feet)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-400 mt-0.5">&#10003;</span>
                      <span>Liquidtight flexible conduit for final connection</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-400 mt-0.5">&#10003;</span>
                      <span>Requires electrical permit and inspection</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="bg-purple-900/30 rounded-xl p-6 my-6">
                <h4 className="font-semibold text-purple-400 mb-3">Important: Most Full-Size Spas Are Hardwired</h4>
                <p className="text-white/70 text-sm">
                  The vast majority of 5+ person hot tubs require 240V/50A hardwired connections. Even &ldquo;plug and play&rdquo; spas that ship with a 120V cord are usually designed to be converted to 240V for full heater and pump performance. When a spa is converted from 120V plug-in to 240V hardwired, the full NEC 680 requirements apply, including a dedicated circuit, GFCI breaker, disconnect, and bonding.
                </p>
              </div>
            </section>

            <section id="permit-requirements" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Permit and Inspection Requirements</h2>
              <p className="text-white/80 mb-4">
                Hot tub electrical installations <strong>require an electrical permit</strong> in virtually every jurisdiction in the United States. The permit ensures that the installation will be inspected by the local AHJ for compliance with the NEC and any local amendments.
              </p>

              <div className="space-y-4 my-6">
                <div className="bg-white/5 rounded-xl p-4 flex items-start gap-4">
                  <span className="bg-cyan-600 text-white text-sm font-bold px-3 py-1 rounded-full">1</span>
                  <div>
                    <p className="font-semibold text-white">Apply for Electrical Permit</p>
                    <p className="text-white/60 text-sm">Contact your local building department. You will need to describe the scope of work (new 240V/50A circuit for hot tub), provide a site plan showing the spa location, disconnect location, and wire route. Some jurisdictions require a licensed electrician to pull the permit.</p>
                  </div>
                </div>
                <div className="bg-white/5 rounded-xl p-4 flex items-start gap-4">
                  <span className="bg-cyan-600 text-white text-sm font-bold px-3 py-1 rounded-full">2</span>
                  <div>
                    <p className="font-semibold text-white">Rough-In Inspection (if required)</p>
                    <p className="text-white/60 text-sm">Some jurisdictions require a rough-in inspection before the trench is backfilled and before the spa is placed over any wiring. The inspector verifies conduit type, burial depth, wire size, and bonding grid installation.</p>
                  </div>
                </div>
                <div className="bg-white/5 rounded-xl p-4 flex items-start gap-4">
                  <span className="bg-cyan-600 text-white text-sm font-bold px-3 py-1 rounded-full">3</span>
                  <div>
                    <p className="font-semibold text-white">Final Inspection</p>
                    <p className="text-white/60 text-sm">The final inspection covers the complete installation: panel connections, GFCI breaker function, disconnect placement and rating, wire sizing, conduit fill, bonding connections, and overall workmanship. The spa should be in place but does not need to be filled with water.</p>
                  </div>
                </div>
                <div className="bg-white/5 rounded-xl p-4 flex items-start gap-4">
                  <span className="bg-cyan-600 text-white text-sm font-bold px-3 py-1 rounded-full">4</span>
                  <div>
                    <p className="font-semibold text-white">Approval and Close-Out</p>
                    <p className="text-white/60 text-sm">Once approved, you receive a signed-off permit. Keep this documentation &mdash; it may be required for home insurance claims, property sales, or future renovations. Without a permit, your homeowner&apos;s insurance may deny claims related to the hot tub installation.</p>
                  </div>
                </div>
              </div>

              <div className="bg-red-900/30 rounded-xl p-6 my-6">
                <h4 className="font-semibold text-red-400 mb-3">Consequences of Unpermitted Work</h4>
                <ul className="text-white/70 space-y-2 text-sm">
                  <li><strong>Insurance denial:</strong> Homeowner&apos;s insurance may deny fire or injury claims if the electrical work was unpermitted</li>
                  <li><strong>Liability:</strong> You assume personal liability for any injuries or property damage caused by the installation</li>
                  <li><strong>Sale complications:</strong> Unpermitted work can delay or kill a home sale during buyer inspections</li>
                  <li><strong>Fines:</strong> Building departments can impose fines for work performed without permits</li>
                  <li><strong>Forced removal:</strong> In extreme cases, the AHJ can require removal and reinstallation of unpermitted work</li>
                </ul>
              </div>
            </section>

            <section id="installation-guide" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Step-by-Step Installation Guide</h2>
              <p className="text-white/80 mb-4">
                The following is an overview of the typical installation process for a <strong>240V/50A hardwired hot tub</strong>. This guide assumes the hot tub is being placed outdoors on an existing concrete pad with the main electrical panel inside the house.
              </p>

              <div className="space-y-4 my-6">
                <div className="bg-white/5 rounded-xl p-6 border-l-4 border-emerald-500">
                  <h4 className="font-semibold text-emerald-400 mb-2">Step 1: Review Manufacturer Requirements</h4>
                  <p className="text-white/70 text-sm">
                    Read the spa owner&apos;s manual completely. Verify the required voltage (240V), amperage (typically 50A), number of conductors (3-wire vs. 4-wire), and any specific requirements for the equipment grounding conductor, bonding lug, or whip connection. The manual is your primary reference &mdash; it supersedes generic guidance.
                  </p>
                </div>

                <div className="bg-white/5 rounded-xl p-6 border-l-4 border-emerald-500">
                  <h4 className="font-semibold text-emerald-400 mb-2">Step 2: Plan the Route and Pull Permit</h4>
                  <p className="text-white/70 text-sm">
                    Map the conduit route from the main panel to the disconnect location to the spa. Verify the disconnect will be 5-50 feet from the spa. Confirm the main panel has space for a two-pole 50A GFCI breaker. Calculate total wire length for voltage drop. Call 811 (DigSafe) before digging. Pull your electrical permit.
                  </p>
                </div>

                <div className="bg-white/5 rounded-xl p-6 border-l-4 border-emerald-500">
                  <h4 className="font-semibold text-emerald-400 mb-2">Step 3: Install the Disconnect</h4>
                  <p className="text-white/70 text-sm">
                    Mount the disconnect box (60A non-fused or spa panel with GFCI) on a post, wall, or other structure at the planned location. Use a NEMA 3R rated enclosure for outdoor installations. Mount at approximately 4-5 feet from grade. Ensure the location is between 5 and 50 feet from the spa&apos;s inside wall.
                  </p>
                </div>

                <div className="bg-white/5 rounded-xl p-6 border-l-4 border-emerald-500">
                  <h4 className="font-semibold text-emerald-400 mb-2">Step 4: Trench and Install Underground Conduit</h4>
                  <p className="text-white/70 text-sm">
                    Dig the trench to the required depth (18&Prime; minimum for PVC conduit). Lay a bed of sand at the bottom. Install PVC conduit with proper fittings and sweeps (avoid tight 90-degree bends). Leave pull string in the conduit. Install risers at both ends with PVC Schedule 80 where exposed above grade. Place warning tape 12&Prime; above the conduit.
                  </p>
                </div>

                <div className="bg-white/5 rounded-xl p-6 border-l-4 border-emerald-500">
                  <h4 className="font-semibold text-emerald-400 mb-2">Step 5: Pull Wire</h4>
                  <p className="text-white/70 text-sm">
                    Pull 6 AWG THHN/THWN copper wire through the conduit: two hot conductors (black and red), one neutral (white, if required), and one equipment grounding conductor (green). Use wire-pulling lubricant for long runs. Leave at least 12 inches of extra wire at each termination point. Verify wire is not damaged during the pull.
                  </p>
                </div>

                <div className="bg-white/5 rounded-xl p-6 border-l-4 border-emerald-500">
                  <h4 className="font-semibold text-emerald-400 mb-2">Step 6: Install Bonding</h4>
                  <p className="text-white/70 text-sm">
                    Run 8 AWG solid copper bonding conductor to all required bonding points: the spa bonding lug, any metal within 5 feet (fence, railing, piping), and the rebar in the concrete pad (or install a copper bonding grid if no rebar exists). All connections must be accessible or made with listed direct-burial connectors.
                  </p>
                </div>

                <div className="bg-white/5 rounded-xl p-6 border-l-4 border-emerald-500">
                  <h4 className="font-semibold text-emerald-400 mb-2">Step 7: Make Connections</h4>
                  <p className="text-white/70 text-sm">
                    At the <strong>main panel:</strong> install the two-pole 50A GFCI breaker, connect hot conductors, neutral to the breaker (not the neutral bar), and ground to the ground bar. At the <strong>disconnect:</strong> connect the line side from the panel and load side to the spa. At the <strong>spa pack:</strong> use liquidtight flexible conduit for the final whip connection, terminate per the manufacturer&apos;s wiring diagram.
                  </p>
                </div>

                <div className="bg-white/5 rounded-xl p-6 border-l-4 border-emerald-500">
                  <h4 className="font-semibold text-emerald-400 mb-2">Step 8: Test and Inspect</h4>
                  <p className="text-white/70 text-sm">
                    Before calling for inspection: verify all connections are tight, test the GFCI breaker (press TEST button), verify disconnect operates correctly, check voltage at the spa pack (240V between hots, 120V from each hot to neutral if applicable, 0V from neutral to ground). Schedule your final inspection. After approval, fill the spa and test all functions.
                  </p>
                </div>
              </div>

              <div className="bg-white/5 rounded-xl p-6 my-6">
                <h4 className="font-semibold text-white mb-3">Materials List for a Typical 50A/240V Hot Tub Installation</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <p className="text-white/60 text-sm font-semibold mb-2">Electrical:</p>
                    <ul className="text-white/70 text-sm space-y-1">
                      <li>50A 2-pole GFCI breaker (panel-specific)</li>
                      <li>6 AWG THHN/THWN wire (4 conductors)</li>
                      <li>60A disconnect or spa panel</li>
                      <li>8 AWG solid copper bonding wire</li>
                      <li>Liquidtight flexible conduit &amp; fittings (whip)</li>
                    </ul>
                  </div>
                  <div>
                    <p className="text-white/60 text-sm font-semibold mb-2">Conduit &amp; Hardware:</p>
                    <ul className="text-white/70 text-sm space-y-1">
                      <li>PVC conduit (Schedule 40 underground, 80 exposed)</li>
                      <li>PVC fittings (LBs, sweeps, couplings, adapters)</li>
                      <li>PVC cement and primer</li>
                      <li>Wire-pulling lubricant</li>
                      <li>Grounding/bonding clamps and lugs</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            <section id="common-violations" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Common Code Violations and How to Avoid Them</h2>
              <p className="text-white/80 mb-4">
                Hot tub electrical installations are among the most frequently failed residential inspections. Understanding the most common violations will help you get it right the first time. Here are the top issues inspectors flag:
              </p>

              <div className="grid md:grid-cols-2 gap-4 my-6">
                <div className="bg-red-900/20 rounded-xl p-6 border border-red-500/20">
                  <h4 className="font-semibold text-red-400 mb-3">1. Disconnect Too Close</h4>
                  <p className="text-white/60 text-sm">
                    The disconnect is less than 5 feet from the inside wall of the spa. Measured from the <strong>inside wall</strong>, not the outside edge or the equipment compartment. A spa that is 7 feet across has its inside wall 3.5 feet from center &mdash; account for this when measuring.
                  </p>
                </div>
                <div className="bg-red-900/20 rounded-xl p-6 border border-red-500/20">
                  <h4 className="font-semibold text-red-400 mb-3">2. Missing GFCI Protection</h4>
                  <p className="text-white/60 text-sm">
                    Using a standard breaker instead of a GFCI breaker, or relying on the spa&apos;s built-in GFCI (which does not satisfy the NEC requirement for GFCI protection at the supply side). The GFCI must be in the panel or spa panel.
                  </p>
                </div>
                <div className="bg-red-900/20 rounded-xl p-6 border border-red-500/20">
                  <h4 className="font-semibold text-red-400 mb-3">3. No Bonding or Incomplete Bonding</h4>
                  <p className="text-white/60 text-sm">
                    Missing the bonding connection to the spa, using stranded wire instead of solid copper, or failing to bond metal structures within 5 feet. Bonding is separate from grounding and is frequently overlooked.
                  </p>
                </div>
                <div className="bg-red-900/20 rounded-xl p-6 border border-red-500/20">
                  <h4 className="font-semibold text-red-400 mb-3">4. Undersized Wire</h4>
                  <p className="text-white/60 text-sm">
                    Using 8 AWG or 10 AWG wire on a 50A circuit, or using aluminum wire that is too small. Always verify the wire ampacity matches or exceeds the breaker rating using the correct NEC ampacity table for the installation conditions.
                  </p>
                </div>
                <div className="bg-red-900/20 rounded-xl p-6 border border-red-500/20">
                  <h4 className="font-semibold text-red-400 mb-3">5. Shallow Burial Depth</h4>
                  <p className="text-white/60 text-sm">
                    Underground conduit or cable not buried to the minimum depth required by NEC Table 300.5. Inspectors may require the trench to be open during the rough-in inspection to verify depth.
                  </p>
                </div>
                <div className="bg-red-900/20 rounded-xl p-6 border border-red-500/20">
                  <h4 className="font-semibold text-red-400 mb-3">6. Wrong Conduit Type</h4>
                  <p className="text-white/60 text-sm">
                    Using Schedule 40 PVC where Schedule 80 is required (exposed to physical damage), or using EMT underground. Using non-rated flexible conduit for the spa whip connection instead of listed liquidtight flexible conduit.
                  </p>
                </div>
                <div className="bg-red-900/20 rounded-xl p-6 border border-red-500/20">
                  <h4 className="font-semibold text-red-400 mb-3">7. No Permit Pulled</h4>
                  <p className="text-white/60 text-sm">
                    Performing the installation without an electrical permit. Even if the work is done correctly, the lack of a permit is itself a violation and creates insurance and liability issues.
                  </p>
                </div>
                <div className="bg-red-900/20 rounded-xl p-6 border border-red-500/20">
                  <h4 className="font-semibold text-red-400 mb-3">8. Neutral/Ground Bond Error</h4>
                  <p className="text-white/60 text-sm">
                    Bonding neutral to ground at the disconnect or spa panel (downstream of the main panel). This creates a parallel path for neutral current on the grounding conductor, which will cause the GFCI to trip.
                  </p>
                </div>
              </div>

              <div className="bg-emerald-900/30 rounded-xl p-6 my-6">
                <h4 className="font-semibold text-emerald-400 mb-3">Pre-Inspection Checklist</h4>
                <ul className="text-white/70 space-y-2 text-sm">
                  <li>&#9744; GFCI breaker installed and tested (trips correctly)</li>
                  <li>&#9744; Disconnect within sight, 5-50 feet from inside wall of spa</li>
                  <li>&#9744; Wire size matches breaker rating (6 AWG copper for 50A)</li>
                  <li>&#9744; All four conductors present (2 hot, 1 neutral, 1 ground) or as specified by manufacturer</li>
                  <li>&#9744; Bonding conductor (8 AWG solid copper) connected to spa and all metal within 5 feet</li>
                  <li>&#9744; Conduit burial depth meets NEC Table 300.5</li>
                  <li>&#9744; Schedule 80 PVC used where exposed to physical damage</li>
                  <li>&#9744; Liquidtight flexible conduit for final whip connection</li>
                  <li>&#9744; All connections tight and properly terminated</li>
                  <li>&#9744; No neutral-ground bond downstream of main panel</li>
                  <li>&#9744; Permit posted and accessible for inspector</li>
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
                  Join thousands of electricians using Ampora for instant NEC code answers, electrical calculations, and AI-powered troubleshooting &mdash; right from your phone.
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
                <Link href="/blog/swimming-pool-electrical-nec-680" className="bg-white/5 hover:bg-white/10 rounded-xl p-6 transition-colors">
                  <span className="text-blue-400 text-sm">NEC Code</span>
                  <h3 className="font-semibold mt-2">Swimming Pool Electrical Requirements: NEC 680 Guide</h3>
                </Link>
                <Link href="/blog/gfci-vs-afci-requirements" className="bg-white/5 hover:bg-white/10 rounded-xl p-6 transition-colors">
                  <span className="text-purple-400 text-sm">NEC Code</span>
                  <h3 className="font-semibold mt-2">GFCI vs. AFCI: Requirements, Differences & When You Need Both</h3>
                </Link>
                <Link href="/blog/240v-outlet-wiring-guide" className="bg-white/5 hover:bg-white/10 rounded-xl p-6 transition-colors">
                  <span className="text-emerald-400 text-sm">Installation</span>
                  <h3 className="font-semibold mt-2">240V Outlet Wiring Guide: Circuits, Wire Size & Installation</h3>
                </Link>
                <Link href="/blog/underground-wiring-installation-guide" className="bg-white/5 hover:bg-white/10 rounded-xl p-6 transition-colors">
                  <span className="text-emerald-400 text-sm">Installation</span>
                  <h3 className="font-semibold mt-2">Underground Wiring Installation Guide</h3>
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
