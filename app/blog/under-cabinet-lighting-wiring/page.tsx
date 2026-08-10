import { Metadata } from "next";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import { BlogPostingJsonLd, BreadcrumbJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Under Cabinet Lighting Wiring: Methods, Types & NEC Requirements",
  description: "Complete guide to under cabinet lighting wiring methods including LED tape lights, puck lights, hardwired vs plug-in options, NEC code requirements for kitchen cabinet lighting, LED driver placement, low voltage vs line voltage systems, dimmer compatibility, and professional installation tips for a clean finished appearance.",
  keywords: [
    "under cabinet lighting wiring",
    "hardwired under cabinet lights",
    "LED under cabinet lighting",
    "under cabinet puck lights",
    "led tape light installation",
    "under cabinet lighting circuit",
    "kitchen cabinet lighting",
    "under cabinet light switch",
    "led strip wiring",
    "under cabinet power"
  ],
  alternates: {
    canonical: "https://amporalabs.com/blog/under-cabinet-lighting-wiring",
  },
  openGraph: {
    title: "Under Cabinet Lighting Wiring: Methods, Types & NEC Requirements - Ampora",
    description: "Master under cabinet lighting installation with this comprehensive guide covering LED strips, puck lights, hardwired vs plug-in, NEC requirements, and professional wiring methods.",
    url: "https://amporalabs.com/blog/under-cabinet-lighting-wiring",
    type: "article",
    publishedTime: "2026-03-04",
  },
};

function HeroIllustration() {
  return (
    <svg viewBox="0 0 400 180" className="w-full h-40 md:h-48" aria-label="Kitchen cabinet cross-section showing under cabinet lighting types">
      {/* Background */}
      <rect x="10" y="10" width="380" height="160" rx="4" fill="#1f2937" stroke="#374151" strokeWidth="1"/>

      {/* Wall */}
      <rect x="20" y="15" width="360" height="150" fill="#111827"/>

      {/* Upper Cabinet */}
      <rect x="30" y="20" width="140" height="70" rx="2" fill="#78350f" stroke="#92400e" strokeWidth="1.5"/>
      <rect x="35" y="25" width="60" height="60" rx="1" fill="#92400e" stroke="#a16207" strokeWidth="0.5"/>
      <rect x="100" y="25" width="60" height="60" rx="1" fill="#92400e" stroke="#a16207" strokeWidth="0.5"/>
      <circle cx="90" cy="55" r="2" fill="#d4a574"/>
      <circle cx="105" cy="55" r="2" fill="#d4a574"/>

      {/* LED Strip Light under first cabinet */}
      <rect x="35" y="90" width="130" height="3" rx="1" fill="#22d3ee" fillOpacity="0.9"/>
      <line x1="35" y1="93" x2="165" y2="93" stroke="#22d3ee" strokeWidth="0.5" strokeDasharray="2,2"/>

      {/* Light glow from LED strip */}
      <polygon points="35,93 165,93 175,145 25,145" fill="#22d3ee" fillOpacity="0.06"/>

      {/* LED Strip label */}
      <text x="100" y="106" textAnchor="middle" fill="#22d3ee" fontSize="5.5" fontWeight="bold">LED STRIP</text>
      <text x="100" y="113" textAnchor="middle" fill="#9ca3af" fontSize="4.5">12V / 24V DC</text>

      {/* Second Upper Cabinet */}
      <rect x="190" y="20" width="180" height="70" rx="2" fill="#78350f" stroke="#92400e" strokeWidth="1.5"/>
      <rect x="195" y="25" width="80" height="60" rx="1" fill="#92400e" stroke="#a16207" strokeWidth="0.5"/>
      <rect x="280" y="25" width="80" height="60" rx="1" fill="#92400e" stroke="#a16207" strokeWidth="0.5"/>
      <circle cx="270" cy="55" r="2" fill="#d4a574"/>
      <circle cx="285" cy="55" r="2" fill="#d4a574"/>

      {/* Puck Lights under second cabinet */}
      <circle cx="220" cy="93" r="6" fill="#fbbf24" fillOpacity="0.3" stroke="#fbbf24" strokeWidth="1"/>
      <circle cx="220" cy="93" r="2.5" fill="#fbbf24" fillOpacity="0.8"/>
      <circle cx="280" cy="93" r="6" fill="#fbbf24" fillOpacity="0.3" stroke="#fbbf24" strokeWidth="1"/>
      <circle cx="280" cy="93" r="2.5" fill="#fbbf24" fillOpacity="0.8"/>
      <circle cx="340" cy="93" r="6" fill="#fbbf24" fillOpacity="0.3" stroke="#fbbf24" strokeWidth="1"/>
      <circle cx="340" cy="93" r="2.5" fill="#fbbf24" fillOpacity="0.8"/>

      {/* Light glow from puck lights */}
      <circle cx="220" cy="93" r="25" fill="#fbbf24" fillOpacity="0.04"/>
      <circle cx="280" cy="93" r="25" fill="#fbbf24" fillOpacity="0.04"/>
      <circle cx="340" cy="93" r="25" fill="#fbbf24" fillOpacity="0.04"/>

      {/* Puck Light label */}
      <text x="280" y="113" textAnchor="middle" fill="#fbbf24" fontSize="5.5" fontWeight="bold">PUCK LIGHTS</text>
      <text x="280" y="120" textAnchor="middle" fill="#9ca3af" fontSize="4.5">120V or Low Voltage</text>

      {/* Countertop */}
      <rect x="20" y="145" width="360" height="10" rx="1" fill="#374151" stroke="#4b5563" strokeWidth="0.5"/>
      <text x="200" y="153" textAnchor="middle" fill="#6b7280" fontSize="5">COUNTERTOP</text>

      {/* Wiring detail - Romex in wall */}
      <line x1="50" y1="20" x2="50" y2="90" stroke="#ef4444" strokeWidth="1" strokeDasharray="3,2"/>
      <text x="60" y="60" fill="#ef4444" fontSize="4">14/2 NM</text>

      {/* Low voltage wire */}
      <line x1="210" y1="20" x2="210" y2="90" stroke="#a855f7" strokeWidth="1" strokeDasharray="3,2"/>
      <text x="220" y="45" fill="#a855f7" fontSize="4">LV Wire</text>

      {/* Driver box */}
      <rect x="195" y="30" width="20" height="12" rx="1" fill="#1e1b4b" stroke="#a855f7" strokeWidth="0.8"/>
      <text x="205" y="38" textAnchor="middle" fill="#a855f7" fontSize="3.5">DRIVER</text>

      {/* Switch symbol */}
      <rect x="25" y="128" width="16" height="10" rx="1.5" fill="#1f2937" stroke="#22d3ee" strokeWidth="0.8"/>
      <circle cx="33" cy="131" r="1.5" fill="#22d3ee"/>
      <text x="33" y="142" textAnchor="middle" fill="#9ca3af" fontSize="3.5">SWITCH</text>
    </svg>
  );
}

export default function UnderCabinetLightingWiringPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navigation />
      <div className="pt-20">
        <BreadcrumbJsonLd
          items={[
            { name: "Home", url: "https://amporalabs.com" },
            { name: "Blog", url: "https://amporalabs.com/blog" },
            { name: "Under Cabinet Lighting Wiring", url: "https://amporalabs.com/blog/under-cabinet-lighting-wiring" },
          ]}
        />
        <BlogPostingJsonLd
          headline="Under Cabinet Lighting Wiring: Methods, Types & NEC Requirements"
          description="Complete guide to under cabinet lighting wiring methods including LED strips, puck lights, hardwired vs plug-in, NEC requirements, and professional installation techniques."
          datePublished="2026-03-04"
          dateModified="2026-03-04"
          url="https://amporalabs.com/blog/under-cabinet-lighting-wiring"
          wordCount={4800}
          keywords={["under cabinet lighting wiring", "hardwired under cabinet lights", "LED under cabinet lighting", "puck lights", "led tape light installation"]}
        />

        <article className="max-w-4xl mx-auto px-6 py-12">
          {/* Breadcrumb */}
          <nav className="text-sm text-white/60 mb-8">
            <Link href="/" className="hover:text-white">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/blog" className="hover:text-white">Blog</Link>
            <span className="mx-2">/</span>
            <span className="text-white">Under Cabinet Lighting Wiring</span>
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
              Under Cabinet Lighting: Wiring Methods &amp; NEC Requirements
            </h1>
            <p className="text-xl text-white/70">
              Under cabinet lighting transforms kitchen workspaces with focused task lighting while adding visual appeal. This guide covers every aspect of under cabinet lighting installation &mdash; from choosing between LED strips, puck lights, and linear fixtures to understanding hardwired vs plug-in options, NEC code requirements, LED driver placement, low voltage vs line voltage wiring, switch and dimmer selection, and professional techniques for a clean, finished appearance.
            </p>
          </header>

          <div className="mb-12 bg-gradient-to-br from-emerald-900/20 to-cyan-900/20 rounded-2xl p-6 border border-white/10">
            <HeroIllustration />
          </div>

          {/* Pro Tip */}
          <div className="bg-emerald-900/40 border-2 border-emerald-500/50 rounded-2xl p-6 mb-12">
            <div className="flex items-start gap-4">
              <div className="text-3xl">&#128161;</div>
              <div>
                <h3 className="font-display font-bold text-lg mb-2 text-emerald-400">Professional Tip</h3>
                <p className="text-white/80 text-sm">
                  The best time to wire for under cabinet lighting is during a kitchen remodel or new construction when walls are open. If you&apos;re retrofitting, plan your wiring route carefully &mdash; fishing wire through finished walls requires patience and the right tools. Always verify circuit capacity before adding lighting loads to an existing <Link href="/blog/nec-article-210-branch-circuits-guide" className="text-emerald-400 underline hover:text-emerald-300">branch circuit</Link>.
                </p>
              </div>
            </div>
          </div>

          {/* Table of Contents */}
          <div className="bg-white/5 rounded-2xl p-6 mb-12">
            <h2 className="font-display font-bold mb-4">In This Guide</h2>
            <ul className="space-y-2 text-white/70">
              <li><a href="#types-of-under-cabinet-lighting" className="hover:text-purple-400">Types of Under Cabinet Lighting</a></li>
              <li><a href="#hardwired-vs-plug-in" className="hover:text-purple-400">Hardwired vs Plug-In: Which to Choose</a></li>
              <li><a href="#nec-requirements" className="hover:text-purple-400">NEC Requirements for Cabinet Lighting</a></li>
              <li><a href="#led-drivers-transformers" className="hover:text-purple-400">LED Drivers and Transformer Placement</a></li>
              <li><a href="#wiring-methods" className="hover:text-purple-400">Wiring Methods: In-Cabinet and Behind-Wall</a></li>
              <li><a href="#switch-dimmer-options" className="hover:text-purple-400">Switch and Dimmer Options</a></li>
              <li><a href="#direct-wire-led" className="hover:text-purple-400">Direct Wire LED Fixtures</a></li>
              <li><a href="#low-voltage-vs-line-voltage" className="hover:text-purple-400">Low Voltage vs Line Voltage Systems</a></li>
              <li><a href="#installation-tips" className="hover:text-purple-400">Installation Tips for a Clean Appearance</a></li>
              <li><a href="#common-mistakes" className="hover:text-purple-400">Common Mistakes to Avoid</a></li>
            </ul>
          </div>

          {/* Article Content */}
          <div className="prose prose-invert prose-lg max-w-none">

            <section id="types-of-under-cabinet-lighting" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Types of Under Cabinet Lighting</h2>
              <p className="text-white/80 mb-4">
                Selecting the right type of under cabinet lighting depends on the desired light output, cabinet depth, installation method, and budget. Each type has distinct wiring requirements and installation considerations that electricians need to understand.
              </p>

              <div className="grid md:grid-cols-2 gap-6 my-6">
                <div className="bg-cyan-900/30 rounded-xl p-6">
                  <h3 className="font-semibold text-cyan-400 mb-3">LED Strip / Tape Lights</h3>
                  <ul className="text-white/60 text-sm space-y-1">
                    <li><strong>Voltage:</strong> 12V DC or 24V DC (requires driver/transformer)</li>
                    <li><strong>Output:</strong> 200&ndash;800 lumens per foot depending on density</li>
                    <li><strong>Pros:</strong> Thin profile, flexible, continuous even light</li>
                    <li><strong>Cons:</strong> Requires separate LED driver, can overheat without proper mounting</li>
                    <li><strong>Best for:</strong> Continuous runs, modern kitchens, cove lighting</li>
                  </ul>
                </div>
                <div className="bg-yellow-900/30 rounded-xl p-6">
                  <h3 className="font-semibold text-yellow-400 mb-3">Puck Lights</h3>
                  <ul className="text-white/60 text-sm space-y-1">
                    <li><strong>Voltage:</strong> 12V DC, 24V DC, or 120V AC depending on model</li>
                    <li><strong>Output:</strong> 100&ndash;300 lumens per puck, focused beam</li>
                    <li><strong>Pros:</strong> Easy to install, adjustable spacing, accent effect</li>
                    <li><strong>Cons:</strong> Creates scalloped light pattern, visible hot spots</li>
                    <li><strong>Best for:</strong> Accent lighting, highlighting specific areas, display cabinets</li>
                  </ul>
                </div>
                <div className="bg-purple-900/30 rounded-xl p-6">
                  <h3 className="font-semibold text-purple-400 mb-3">Linear LED Fixtures (Light Bars)</h3>
                  <ul className="text-white/60 text-sm space-y-1">
                    <li><strong>Voltage:</strong> 120V AC direct wire or 12/24V DC</li>
                    <li><strong>Output:</strong> 300&ndash;1000 lumens per fixture, even distribution</li>
                    <li><strong>Pros:</strong> Self-contained, easy to link multiple units, even light</li>
                    <li><strong>Cons:</strong> Thicker profile than tape, fixed lengths</li>
                    <li><strong>Best for:</strong> Task lighting, professional installations, new construction</li>
                  </ul>
                </div>
                <div className="bg-orange-900/30 rounded-xl p-6">
                  <h3 className="font-semibold text-orange-400 mb-3">Fluorescent Fixtures (Legacy)</h3>
                  <ul className="text-white/60 text-sm space-y-1">
                    <li><strong>Voltage:</strong> 120V AC</li>
                    <li><strong>Output:</strong> 500&ndash;1200 lumens per fixture</li>
                    <li><strong>Pros:</strong> High light output, widely available replacement tubes</li>
                    <li><strong>Cons:</strong> Bulky, hum from ballast, limited dimming, warm-up time</li>
                    <li><strong>Best for:</strong> Retrofit replacements only (LED preferred for new installs)</li>
                  </ul>
                </div>
              </div>

              <div className="bg-white/5 rounded-xl p-6 my-6">
                <h4 className="font-semibold text-cyan-400 mb-3">Light Output Comparison</h4>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                  <div>
                    <p className="text-2xl font-bold text-cyan-400">200+</p>
                    <p className="text-white/60 text-sm">Lumens/ft LED strip (standard)</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-yellow-400">250</p>
                    <p className="text-white/60 text-sm">Lumens per puck (typical)</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-purple-400">600+</p>
                    <p className="text-white/60 text-sm">Lumens per light bar</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-emerald-400">3000K</p>
                    <p className="text-white/60 text-sm">Ideal kitchen color temp</p>
                  </div>
                </div>
              </div>

              <p className="text-white/80 mb-4">
                For <Link href="/blog/kitchen-electrical-requirements-nec" className="text-emerald-400 underline hover:text-emerald-300">kitchen environments</Link>, LED strip lights and linear LED fixtures are the most popular choices due to their even light distribution across the countertop. Puck lights work well for accent lighting or display cabinets but create a scalloped pattern that some homeowners find uneven for task work. The color temperature should match other kitchen lighting &mdash; typically <strong>2700K to 3000K</strong> for warm white or <strong>3500K to 4000K</strong> for a brighter task-oriented feel.
              </p>
            </section>

            <section id="hardwired-vs-plug-in" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Hardwired vs Plug-In: Which to Choose</h2>
              <p className="text-white/80 mb-4">
                The decision between hardwired and plug-in under cabinet lighting affects the installation complexity, code compliance, appearance, and long-term reliability. Understanding the trade-offs helps you recommend the right approach to customers.
              </p>

              <div className="grid md:grid-cols-2 gap-6 my-6">
                <div className="bg-white/5 rounded-xl p-6 border border-cyan-500/20">
                  <h3 className="font-semibold text-cyan-400 mb-3">Hardwired Installation</h3>
                  <ul className="text-white/60 text-sm space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="text-green-400 mt-0.5">&#10003;</span>
                      <span>Clean appearance &mdash; no visible cords or plugs</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-400 mt-0.5">&#10003;</span>
                      <span>Dedicated switch control (wall switch or dimmer)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-400 mt-0.5">&#10003;</span>
                      <span>No receptacle required under cabinets</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-400 mt-0.5">&#10003;</span>
                      <span>Permanent, reliable connections</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-400 mt-0.5">&#10003;</span>
                      <span>Higher perceived value for resale</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-400 mt-0.5">&#10007;</span>
                      <span>Requires running new wire through walls or cabinets</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-400 mt-0.5">&#10007;</span>
                      <span>Must be done by a licensed electrician (permit required)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-400 mt-0.5">&#10007;</span>
                      <span>Higher upfront installation cost</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-white/5 rounded-xl p-6 border border-purple-500/20">
                  <h3 className="font-semibold text-purple-400 mb-3">Plug-In Installation</h3>
                  <ul className="text-white/60 text-sm space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="text-green-400 mt-0.5">&#10003;</span>
                      <span>Simple DIY-friendly installation</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-400 mt-0.5">&#10003;</span>
                      <span>No electrical permit typically required</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-400 mt-0.5">&#10003;</span>
                      <span>Lower upfront cost</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-400 mt-0.5">&#10003;</span>
                      <span>Easy to relocate or replace</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-400 mt-0.5">&#10003;</span>
                      <span>Good for renters or temporary installations</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-400 mt-0.5">&#10007;</span>
                      <span>Visible power cords detract from appearance</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-400 mt-0.5">&#10007;</span>
                      <span>Uses countertop receptacle (may not be on GFCI circuit)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-400 mt-0.5">&#10007;</span>
                      <span>No dedicated switch &mdash; must use inline switch or smart plug</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="bg-white/5 rounded-xl p-6 my-6">
                <h4 className="font-semibold text-white mb-3">When to Recommend Hardwired</h4>
                <p className="text-white/70 text-sm">
                  Always recommend hardwired under cabinet lighting for new construction, kitchen remodels where walls are open, and customers who want a professional, finished appearance. Hardwired installations are controlled by a wall switch or dimmer, produce no visible cords, and do not consume a countertop receptacle. The added cost of a hardwired installation is minimal when walls are already open during a remodel.
                </p>
              </div>
            </section>

            <section id="nec-requirements" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">NEC Requirements for Cabinet Lighting</h2>
              <p className="text-white/80 mb-4">
                Under cabinet lighting must comply with multiple NEC articles depending on the fixture type, voltage, and wiring method. Understanding these requirements ensures your installation passes inspection and operates safely.
              </p>

              <div className="space-y-4 my-6">
                <div className="bg-white/5 rounded-xl p-6 border-l-4 border-cyan-500">
                  <h4 className="font-semibold text-cyan-400 mb-2">NEC 410 &mdash; Luminaires, Lampholders, and Lamps</h4>
                  <p className="text-white/70 text-sm">
                    Under cabinet fixtures are covered under NEC Article 410. Luminaires installed in or on cabinets must be listed for the purpose and installed per manufacturer instructions. <strong>NEC 410.16</strong> addresses luminaires in closets and enclosed spaces, though kitchen cabinets have separate considerations. All luminaires must maintain proper clearance from combustible materials as specified by their listing.
                  </p>
                </div>

                <div className="bg-white/5 rounded-xl p-6 border-l-4 border-cyan-500">
                  <h4 className="font-semibold text-cyan-400 mb-2">NEC 210.52(B) &mdash; Kitchen Countertop Receptacles</h4>
                  <p className="text-white/70 text-sm">
                    Per <Link href="/blog/nec-article-210-branch-circuits-guide" className="text-cyan-400 underline hover:text-cyan-300">NEC Article 210</Link>, kitchen countertop receptacles must be served by a minimum of two 20A small-appliance branch circuits. Under cabinet lighting should <strong>not</strong> be connected to these small-appliance branch circuits per NEC 210.52(B)(2) unless the lighting is plugged into a receptacle (not hardwired to the circuit). Hardwired under cabinet lighting requires its own general lighting circuit.
                  </p>
                </div>

                <div className="bg-white/5 rounded-xl p-6 border-l-4 border-cyan-500">
                  <h4 className="font-semibold text-cyan-400 mb-2">NEC 210.11(A) &mdash; General Lighting Branch Circuits</h4>
                  <p className="text-white/70 text-sm">
                    Hardwired under cabinet lighting should be connected to a general lighting branch circuit, not a kitchen small-appliance circuit. A 15A or 20A circuit dedicated to under cabinet lighting or shared with other general lighting loads is acceptable. Calculate the total lighting load to ensure you do not exceed 80% of the circuit rating for continuous loads (lighting operating 3+ hours).
                  </p>
                </div>

                <div className="bg-white/5 rounded-xl p-6 border-l-4 border-cyan-500">
                  <h4 className="font-semibold text-cyan-400 mb-2">NEC 411 &mdash; Low-Voltage Lighting (30V or Less)</h4>
                  <p className="text-white/70 text-sm">
                    LED strip lights operating at 12V or 24V DC fall under NEC Article 411. The power supply (LED driver) must be a listed Class 2 transformer. Class 2 wiring on the secondary (low-voltage) side does not require the same wiring methods as line-voltage circuits &mdash; it can be run as exposed cable secured to cabinet surfaces. However, the primary (120V AC) side of the driver must comply with standard wiring methods.
                  </p>
                </div>

                <div className="bg-white/5 rounded-xl p-6 border-l-4 border-cyan-500">
                  <h4 className="font-semibold text-cyan-400 mb-2">NEC 300.11 &mdash; Securing and Supporting</h4>
                  <p className="text-white/70 text-sm">
                    All wiring must be properly secured and supported. NM cable (Romex) must be secured within 12 inches of every box and at intervals not exceeding 4.5 feet. Low-voltage Class 2 wiring behind cabinets should be secured with appropriate clips or staples and not left loose where it could be damaged.
                  </p>
                </div>
              </div>

              <div className="bg-emerald-900/30 rounded-xl p-6 my-6">
                <h4 className="font-semibold text-emerald-400 mb-3">Key NEC Points for Under Cabinet Lighting</h4>
                <ul className="text-white/70 space-y-2 text-sm">
                  <li><strong>Listed fixtures:</strong> All luminaires must be listed (UL, ETL, or equivalent) for the intended use</li>
                  <li><strong>Proper circuit:</strong> Hardwired lighting goes on a general lighting circuit, not a kitchen small-appliance circuit</li>
                  <li><strong>GFCI protection:</strong> Not required for hardwired under cabinet fixtures, but plug-in units using countertop receptacles must be GFCI protected per NEC 210.8(A)(6)</li>
                  <li><strong>Class 2 wiring:</strong> Low-voltage LED strips require a listed Class 2 power supply; secondary wiring has relaxed requirements</li>
                  <li><strong>Thermal protection:</strong> LED drivers and transformers must not be enclosed in insulated spaces without adequate ventilation</li>
                  <li><strong>Combustible surfaces:</strong> Fixtures installed on wood cabinets must be listed for mounting on combustible surfaces</li>
                </ul>
              </div>
            </section>

            <section id="led-drivers-transformers" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">LED Drivers and Transformer Placement</h2>
              <p className="text-white/80 mb-4">
                Low-voltage LED under cabinet lighting (12V or 24V) requires an <strong>LED driver</strong> (also called a transformer or power supply) to convert 120V AC household power to the DC voltage the LEDs require. Driver selection and placement are critical to both performance and code compliance.
              </p>

              <h3 className="text-xl font-display font-semibold mb-3 text-cyan-400">Sizing the LED Driver</h3>
              <p className="text-white/80 mb-4">
                The driver must be rated for the total wattage of all connected LED strips or fixtures plus a <strong>20% safety margin</strong>. Operating a driver at or near its maximum capacity shortens its lifespan and can cause flickering or dimming.
              </p>

              <div className="overflow-x-auto my-6">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-white/20">
                      <th className="text-left py-3 px-4 text-white/60">LED Strip Total</th>
                      <th className="text-left py-3 px-4 text-white/60">Watts per Foot</th>
                      <th className="text-left py-3 px-4 text-white/60">Total Wattage</th>
                      <th className="text-left py-3 px-4 text-white/60">Min Driver Size (with 20%)</th>
                    </tr>
                  </thead>
                  <tbody className="text-white/80">
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">6 ft</td>
                      <td className="py-3 px-4 font-mono">4.4W/ft</td>
                      <td className="py-3 px-4 font-mono">26.4W</td>
                      <td className="py-3 px-4 font-mono text-cyan-400">32W driver</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">10 ft</td>
                      <td className="py-3 px-4 font-mono">4.4W/ft</td>
                      <td className="py-3 px-4 font-mono">44W</td>
                      <td className="py-3 px-4 font-mono text-cyan-400">53W driver</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">16 ft</td>
                      <td className="py-3 px-4 font-mono">4.4W/ft</td>
                      <td className="py-3 px-4 font-mono">70.4W</td>
                      <td className="py-3 px-4 font-mono text-cyan-400">85W driver</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4">20 ft</td>
                      <td className="py-3 px-4 font-mono">7W/ft (high density)</td>
                      <td className="py-3 px-4 font-mono">140W</td>
                      <td className="py-3 px-4 font-mono text-cyan-400">168W driver</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h3 className="text-xl font-display font-semibold mb-3 text-cyan-400">Driver Placement Options</h3>
              <div className="grid md:grid-cols-2 gap-4 my-6">
                <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                  <p className="font-semibold text-emerald-400 mb-1">Inside Upper Cabinet</p>
                  <p className="text-white/60 text-sm">Mount the driver inside the upper cabinet, typically in a rear corner or on the top shelf. This hides the driver from view while keeping it accessible for service. Ensure adequate ventilation &mdash; do not bury the driver under items or insulation.</p>
                </div>
                <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                  <p className="font-semibold text-emerald-400 mb-1">Above Cabinets (Soffit Space)</p>
                  <p className="text-white/60 text-sm">If cabinets have a soffit space above them, the driver can be placed here. This keeps the driver out of usable cabinet space. Run the 120V feed through the wall to the soffit area and the low-voltage output wire down to the fixtures.</p>
                </div>
                <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                  <p className="font-semibold text-emerald-400 mb-1">Remote Location (Utility Room/Basement)</p>
                  <p className="text-white/60 text-sm">For larger installations, the driver can be installed in a remote location. Keep low-voltage wire runs under 20 feet to minimize voltage drop. For 12V systems, use 16 AWG or larger wire for runs over 10 feet.</p>
                </div>
                <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                  <p className="font-semibold text-emerald-400 mb-1">Behind the Cabinet Toe Kick</p>
                  <p className="text-white/60 text-sm">Some installers mount the driver behind the toe kick panel of base cabinets. This works but makes service access difficult. Only use this location if other options are not available and the driver is accessible by removing the toe kick panel.</p>
                </div>
              </div>

              <div className="bg-orange-900/30 rounded-xl p-6 my-6">
                <h4 className="font-semibold text-orange-400 mb-3">Voltage Drop in Low-Voltage Runs</h4>
                <p className="text-white/70 text-sm mb-3">
                  Voltage drop is a significant concern for 12V and 24V LED systems. Even small amounts of voltage drop cause noticeable dimming at the end of a run. <strong>24V systems are preferred over 12V</strong> for longer runs because they experience half the voltage drop for the same wire gauge and distance.
                </p>
                <ul className="text-white/60 text-sm space-y-1">
                  <li><strong>12V system, 18 AWG wire:</strong> Maximum recommended run ~8 feet before noticeable dimming</li>
                  <li><strong>12V system, 16 AWG wire:</strong> Maximum recommended run ~13 feet</li>
                  <li><strong>24V system, 18 AWG wire:</strong> Maximum recommended run ~16 feet</li>
                  <li><strong>24V system, 16 AWG wire:</strong> Maximum recommended run ~25 feet</li>
                </ul>
              </div>
            </section>

            <section id="wiring-methods" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Wiring Methods: In-Cabinet and Behind-Wall</h2>
              <p className="text-white/80 mb-4">
                The wiring method depends on whether you are working during new construction (open walls) or retrofitting into finished walls. Both approaches require careful planning to produce a clean, code-compliant installation.
              </p>

              <h3 className="text-xl font-display font-semibold mb-3 text-cyan-400">New Construction / Open Walls</h3>
              <div className="bg-white/5 rounded-xl p-6 my-6">
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <span className="bg-cyan-600 text-white text-sm font-bold px-3 py-1 rounded-full shrink-0">1</span>
                    <p className="text-white/70 text-sm">Run <strong>14/2 NM-B (Romex)</strong> from the switch location through the wall framing to the point where the upper cabinets will be installed. Leave a 12&ndash;18 inch loop of wire at the fixture location.</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="bg-cyan-600 text-white text-sm font-bold px-3 py-1 rounded-full shrink-0">2</span>
                    <p className="text-white/70 text-sm">Install a single-gang junction box or old-work box at the wire exit point, typically inside the cabinet or at the bottom rear of the upper cabinet where it will be hidden by the fixture or trim.</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="bg-cyan-600 text-white text-sm font-bold px-3 py-1 rounded-full shrink-0">3</span>
                    <p className="text-white/70 text-sm">For direct-wire 120V fixtures, connect the NM cable directly to the fixture&apos;s junction box. For low-voltage systems, connect the NM cable to the LED driver, then run Class 2 low-voltage wire from the driver to the LED strips.</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="bg-cyan-600 text-white text-sm font-bold px-3 py-1 rounded-full shrink-0">4</span>
                    <p className="text-white/70 text-sm">If running wire to multiple cabinet sections, route 14/2 through the wall behind the cabinets at a height that will be concealed. Use nail plates on studs where wire is within 1-1/4 inches of the framing edge.</p>
                  </div>
                </div>
              </div>

              <h3 className="text-xl font-display font-semibold mb-3 text-cyan-400">Retrofit / Finished Walls</h3>
              <div className="bg-white/5 rounded-xl p-6 my-6">
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <span className="bg-purple-600 text-white text-sm font-bold px-3 py-1 rounded-full shrink-0">1</span>
                    <p className="text-white/70 text-sm">Identify the power source &mdash; either an existing switch loop above the cabinets, a nearby junction box, or a new home run from the panel. Avoid tapping into small-appliance circuits.</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="bg-purple-600 text-white text-sm font-bold px-3 py-1 rounded-full shrink-0">2</span>
                    <p className="text-white/70 text-sm">Fish wire through the wall cavity. An old-work (remodel) box can be installed inside the cabinet. Use a flex drill bit or fish tape to route wire from the switch location up through the wall to the cabinet location.</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="bg-purple-600 text-white text-sm font-bold px-3 py-1 rounded-full shrink-0">3</span>
                    <p className="text-white/70 text-sm">For runs between cabinets along a wall, route NM cable or MC cable through the wall behind the cabinets. Alternatively, use the space above the cabinets if there is a soffit or dead space.</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="bg-purple-600 text-white text-sm font-bold px-3 py-1 rounded-full shrink-0">4</span>
                    <p className="text-white/70 text-sm">An alternative retrofit approach: run power to the space above the cabinets, install the LED driver there, and drop only low-voltage wire through small holes into the cabinet interiors and down to the fixture locations.</p>
                  </div>
                </div>
              </div>

              <div className="bg-white/5 rounded-xl p-6 my-6">
                <h4 className="font-semibold text-white mb-3">Wiring Method Quick Reference</h4>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-white/20">
                        <th className="text-left py-2 px-3 text-white/60">Wire Type</th>
                        <th className="text-left py-2 px-3 text-white/60">Use Case</th>
                        <th className="text-left py-2 px-3 text-white/60">NEC Article</th>
                      </tr>
                    </thead>
                    <tbody className="text-white/80">
                      <tr className="border-b border-white/10">
                        <td className="py-2 px-3 font-mono text-cyan-400">14/2 NM-B</td>
                        <td className="py-2 px-3">Line-voltage (120V) runs through wood-framed walls</td>
                        <td className="py-2 px-3">NEC 334</td>
                      </tr>
                      <tr className="border-b border-white/10">
                        <td className="py-2 px-3 font-mono text-cyan-400">14/2 MC Cable</td>
                        <td className="py-2 px-3">Exposed runs inside cabinets, retrofit installations</td>
                        <td className="py-2 px-3">NEC 330</td>
                      </tr>
                      <tr className="border-b border-white/10">
                        <td className="py-2 px-3 font-mono text-cyan-400">Class 2 Wire (18-16 AWG)</td>
                        <td className="py-2 px-3">Low-voltage side of LED driver to LED strips</td>
                        <td className="py-2 px-3">NEC 411, 725</td>
                      </tr>
                      <tr>
                        <td className="py-2 px-3 font-mono text-cyan-400">Flexible Cord</td>
                        <td className="py-2 px-3">Plug-in fixtures only (not for permanent wiring)</td>
                        <td className="py-2 px-3">NEC 400</td>
                      </tr>
                    </tbody>
                  </table>
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

            <section id="switch-dimmer-options" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Switch and Dimmer Options</h2>
              <p className="text-white/80 mb-4">
                The switching and dimming method depends on whether the system is line voltage or low voltage, and the type of LED driver being used. Matching the right dimmer to the driver is essential for flicker-free performance.
              </p>

              <div className="grid md:grid-cols-2 gap-6 my-6">
                <div className="bg-white/5 rounded-xl p-6">
                  <h3 className="font-semibold text-cyan-400 mb-3">Line-Voltage Dimming (120V)</h3>
                  <p className="text-white/70 text-sm mb-3">For direct-wire 120V LED fixtures:</p>
                  <ul className="text-white/60 text-sm space-y-1">
                    <li><strong>LED-compatible dimmer:</strong> Use a dimmer rated for LED loads (Lutron Caseta, Leviton Decora Smart, etc.)</li>
                    <li><strong>Minimum load:</strong> Many dimmers have a minimum load requirement &mdash; verify the total LED wattage meets this minimum</li>
                    <li><strong>Trailing-edge (ELV) dimmers:</strong> Preferred for LED fixtures as they provide smoother dimming than leading-edge (MLV)</li>
                    <li><strong>Multi-location:</strong> Use 3-way or 4-way dimmers if controlling from multiple switch locations</li>
                  </ul>
                </div>
                <div className="bg-white/5 rounded-xl p-6">
                  <h3 className="font-semibold text-purple-400 mb-3">Low-Voltage Dimming (12V/24V)</h3>
                  <p className="text-white/70 text-sm mb-3">For LED strip systems with drivers:</p>
                  <ul className="text-white/60 text-sm space-y-1">
                    <li><strong>PWM dimmer:</strong> Installed between the driver output and the LED strip; dims by pulsing the DC voltage rapidly</li>
                    <li><strong>0-10V dimmable driver:</strong> Driver accepts 0-10V dimming signal from a wall-mounted 0-10V dimmer</li>
                    <li><strong>TRIAC/ELV dimmable driver:</strong> Driver dims based on the phase-cut signal from a standard wall dimmer</li>
                    <li><strong>Smart controller:</strong> WiFi or Zigbee inline controller for app-based and voice dimming</li>
                  </ul>
                </div>
              </div>

              <div className="bg-white/5 rounded-xl p-6 my-6">
                <h4 className="font-semibold text-white mb-3">Additional Switching Options</h4>
                <ul className="text-white/70 space-y-2 text-sm">
                  <li><strong>Occupancy / vacancy sensor:</strong> Cabinet-mounted sensor turns lights on when someone enters the kitchen area. Great for energy savings.</li>
                  <li><strong>Door-activated switch:</strong> For inside-cabinet lighting, a magnetic or plunger switch turns lights on when the cabinet door opens.</li>
                  <li><strong>Touch dimmer:</strong> Capacitive touch strip mounted on the underside of the cabinet or inside the cabinet frame.</li>
                  <li><strong>Wireless switch:</strong> Battery-powered wireless wall switches (Lutron Pico, etc.) that can be placed anywhere without running wire.</li>
                  <li><strong>Timer switch:</strong> Programmable timer that turns under cabinet lights on at dusk and off at a set time &mdash; useful for ambient kitchen lighting.</li>
                </ul>
              </div>

              <div className="bg-red-900/30 rounded-xl p-6 my-6">
                <h4 className="font-semibold text-red-400 mb-3">Dimmer Compatibility Warning</h4>
                <p className="text-white/70 text-sm">
                  Using an incompatible dimmer is the number one cause of LED flickering, buzzing, and premature failure in under cabinet lighting. <strong>Always verify</strong> that the dimmer is compatible with the specific LED fixture or LED driver being installed. Most driver manufacturers publish compatibility lists. A standard incandescent dimmer will often cause problems with LED loads &mdash; use a dimmer specifically rated and listed for LED dimming.
                </p>
              </div>
            </section>

            <section id="direct-wire-led" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Direct Wire LED Fixtures</h2>
              <p className="text-white/80 mb-4">
                <strong>Direct wire (hardwired) LED under cabinet fixtures</strong> connect directly to 120V AC without an external driver or transformer. These fixtures contain an integral LED driver built into the housing, making installation straightforward &mdash; connect 120V in, get LED light out.
              </p>

              <div className="bg-white/5 rounded-xl p-6 my-6">
                <h4 className="font-semibold text-cyan-400 mb-3">Advantages of Direct Wire LED Fixtures</h4>
                <ul className="text-white/70 space-y-2 text-sm">
                  <li><strong>No external driver:</strong> Built-in driver eliminates a separate component to install, mount, and maintain</li>
                  <li><strong>Standard wiring:</strong> Connects to 14/2 NM or MC cable just like any other 120V fixture</li>
                  <li><strong>Linkable:</strong> Most direct-wire fixtures can be linked end-to-end with short connecting cables to span multiple cabinet sections</li>
                  <li><strong>Integral junction box:</strong> Many models include a built-in junction box for NM cable connections, eliminating the need for a separate box</li>
                  <li><strong>Dimmable:</strong> Most quality direct-wire LED fixtures are compatible with standard LED dimmers</li>
                </ul>
              </div>

              <h3 className="text-xl font-display font-semibold mb-3 text-cyan-400">Direct Wire Installation Steps</h3>
              <div className="space-y-3 my-6">
                <div className="bg-white/5 rounded-xl p-4 flex items-start gap-4">
                  <span className="bg-emerald-600 text-white text-sm font-bold px-3 py-1 rounded-full">1</span>
                  <div>
                    <p className="font-semibold text-white">Power Off and Verify</p>
                    <p className="text-white/60 text-sm">Turn off the circuit breaker and verify zero voltage at the wire location with a non-contact voltage tester and a multimeter.</p>
                  </div>
                </div>
                <div className="bg-white/5 rounded-xl p-4 flex items-start gap-4">
                  <span className="bg-emerald-600 text-white text-sm font-bold px-3 py-1 rounded-full">2</span>
                  <div>
                    <p className="font-semibold text-white">Mount the Fixture</p>
                    <p className="text-white/60 text-sm">Secure the fixture to the underside of the cabinet using the provided screws. Position it toward the front edge of the cabinet to direct light onto the countertop, not the backsplash.</p>
                  </div>
                </div>
                <div className="bg-white/5 rounded-xl p-4 flex items-start gap-4">
                  <span className="bg-emerald-600 text-white text-sm font-bold px-3 py-1 rounded-full">3</span>
                  <div>
                    <p className="font-semibold text-white">Make Connections</p>
                    <p className="text-white/60 text-sm">Route the NM cable into the fixture&apos;s junction box through the cable clamp. Connect black to black, white to white, and ground to ground using wire nuts. Secure the cable clamp and close the junction box cover.</p>
                  </div>
                </div>
                <div className="bg-white/5 rounded-xl p-4 flex items-start gap-4">
                  <span className="bg-emerald-600 text-white text-sm font-bold px-3 py-1 rounded-full">4</span>
                  <div>
                    <p className="font-semibold text-white">Link Additional Fixtures</p>
                    <p className="text-white/60 text-sm">Use the manufacturer&apos;s linking cables to connect additional fixtures in series. Check the maximum number of fixtures that can be linked (typically 4&ndash;8 depending on wattage and model).</p>
                  </div>
                </div>
                <div className="bg-white/5 rounded-xl p-4 flex items-start gap-4">
                  <span className="bg-emerald-600 text-white text-sm font-bold px-3 py-1 rounded-full">5</span>
                  <div>
                    <p className="font-semibold text-white">Test and Adjust</p>
                    <p className="text-white/60 text-sm">Restore power, verify operation, and test the dimmer through its full range. Check for any flickering, buzzing, or uneven light output.</p>
                  </div>
                </div>
              </div>
            </section>

            <section id="low-voltage-vs-line-voltage" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Low Voltage vs Line Voltage Systems</h2>
              <p className="text-white/80 mb-4">
                Choosing between low-voltage (12V/24V DC) and line-voltage (120V AC) under cabinet lighting affects every aspect of the installation &mdash; from wiring methods and code requirements to fixture options and dimming compatibility.
              </p>

              <div className="grid md:grid-cols-2 gap-6 my-6">
                <div className="bg-cyan-900/20 rounded-xl p-6 border border-cyan-500/20">
                  <h3 className="font-semibold text-cyan-400 mb-3">Low Voltage (12V/24V DC)</h3>
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <tbody className="text-white/70">
                        <tr className="border-b border-white/10">
                          <td className="py-2 pr-3 font-semibold">Fixture Types</td>
                          <td className="py-2">LED strips, tape lights, some puck lights</td>
                        </tr>
                        <tr className="border-b border-white/10">
                          <td className="py-2 pr-3 font-semibold">Driver Required</td>
                          <td className="py-2">Yes &mdash; Class 2 LED driver/transformer</td>
                        </tr>
                        <tr className="border-b border-white/10">
                          <td className="py-2 pr-3 font-semibold">Secondary Wiring</td>
                          <td className="py-2">Class 2 wire, relaxed NEC requirements</td>
                        </tr>
                        <tr className="border-b border-white/10">
                          <td className="py-2 pr-3 font-semibold">Voltage Drop</td>
                          <td className="py-2">Significant concern &mdash; limit run lengths</td>
                        </tr>
                        <tr className="border-b border-white/10">
                          <td className="py-2 pr-3 font-semibold">Shock Hazard</td>
                          <td className="py-2">Minimal on secondary side</td>
                        </tr>
                        <tr>
                          <td className="py-2 pr-3 font-semibold">Best For</td>
                          <td className="py-2">Flexible LED strips, custom installations, color-changing</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <div className="bg-purple-900/20 rounded-xl p-6 border border-purple-500/20">
                  <h3 className="font-semibold text-purple-400 mb-3">Line Voltage (120V AC)</h3>
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <tbody className="text-white/70">
                        <tr className="border-b border-white/10">
                          <td className="py-2 pr-3 font-semibold">Fixture Types</td>
                          <td className="py-2">Direct wire LED bars, integrated fixtures</td>
                        </tr>
                        <tr className="border-b border-white/10">
                          <td className="py-2 pr-3 font-semibold">Driver Required</td>
                          <td className="py-2">No &mdash; built into the fixture</td>
                        </tr>
                        <tr className="border-b border-white/10">
                          <td className="py-2 pr-3 font-semibold">Wiring Method</td>
                          <td className="py-2">Standard NM, MC, or conduit per NEC</td>
                        </tr>
                        <tr className="border-b border-white/10">
                          <td className="py-2 pr-3 font-semibold">Voltage Drop</td>
                          <td className="py-2">Not a concern at typical run lengths</td>
                        </tr>
                        <tr className="border-b border-white/10">
                          <td className="py-2 pr-3 font-semibold">Shock Hazard</td>
                          <td className="py-2">120V present at fixture &mdash; standard precautions</td>
                        </tr>
                        <tr>
                          <td className="py-2 pr-3 font-semibold">Best For</td>
                          <td className="py-2">Simple installations, linkable fixtures, new construction</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>

              <div className="bg-white/5 rounded-xl p-6 my-6">
                <h4 className="font-semibold text-white mb-3">Which System Should You Choose?</h4>
                <p className="text-white/70 text-sm mb-3">
                  For most residential kitchen installations, <strong>direct-wire 120V LED light bars</strong> offer the simplest installation with the fewest components. They require only standard 14/2 NM-B wiring, a wall switch or dimmer, and the fixtures themselves.
                </p>
                <p className="text-white/70 text-sm">
                  Choose <strong>low-voltage LED strips</strong> when you need a thinner profile, continuous light without visible fixture seams, color-changing capability (RGB or tunable white), or when installing in locations where a Class 2 low-voltage system is preferred for safety. The added complexity of a separate driver and low-voltage wiring is justified in these scenarios.
                </p>
              </div>
            </section>

            <section id="installation-tips" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Installation Tips for a Clean Appearance</h2>
              <p className="text-white/80 mb-4">
                Professional under cabinet lighting installation is as much about aesthetics as it is about electrical work. These techniques ensure a finished result that looks intentional and integrated, not afterthought.
              </p>

              <div className="space-y-4 my-6">
                <div className="bg-emerald-900/20 rounded-xl p-6 border border-emerald-500/20">
                  <h3 className="font-semibold text-emerald-400 mb-2">Position Fixtures Toward the Front Edge</h3>
                  <p className="text-white/70 text-sm">
                    Mount fixtures at the <strong>front 1/3</strong> of the cabinet underside, behind any front trim or valance. This directs light onto the countertop work surface rather than the backsplash wall. If the cabinet has no valance, a light shield or lens diffuser prevents direct glare into the eyes of someone standing at the counter.
                  </p>
                </div>

                <div className="bg-emerald-900/20 rounded-xl p-6 border border-emerald-500/20">
                  <h3 className="font-semibold text-emerald-400 mb-2">Use Aluminum Channels for LED Strips</h3>
                  <p className="text-white/70 text-sm">
                    Never mount bare LED strips directly to cabinet surfaces. Use <strong>aluminum extrusion channels</strong> with diffuser covers. The channel serves as a heat sink (extending LED life), the diffuser eliminates visible LED dots, and the assembly looks like a purpose-built light fixture rather than an LED strip taped to the bottom of a cabinet.
                  </p>
                </div>

                <div className="bg-emerald-900/20 rounded-xl p-6 border border-emerald-500/20">
                  <h3 className="font-semibold text-emerald-400 mb-2">Hide All Wiring</h3>
                  <p className="text-white/70 text-sm">
                    Route all wire connections through the wall, inside the cabinet, or behind trim pieces. Use wire channels (raceway) if exposed runs are unavoidable inside cabinets. Drill wire pass-through holes in the back of cabinets at locations hidden by cabinet contents. Use grommets on all drilled holes for a finished look and to protect wire insulation.
                  </p>
                </div>

                <div className="bg-emerald-900/20 rounded-xl p-6 border border-emerald-500/20">
                  <h3 className="font-semibold text-emerald-400 mb-2">Match Color Temperature Across All Fixtures</h3>
                  <p className="text-white/70 text-sm">
                    Mixing color temperatures creates an uneven, unprofessional appearance. Ensure all under cabinet fixtures are the same Kelvin rating &mdash; typically <strong>3000K</strong> for a warm white that complements most kitchen finishes. If the kitchen has recessed ceiling lights, match the under cabinet color temperature to the ceiling fixtures for visual consistency.
                  </p>
                </div>

                <div className="bg-emerald-900/20 rounded-xl p-6 border border-emerald-500/20">
                  <h3 className="font-semibold text-emerald-400 mb-2">Install a Valance or Light Shield</h3>
                  <p className="text-white/70 text-sm">
                    If the bottom of the cabinet is visible from normal standing or sitting positions, install a <strong>valance strip</strong> (a 1&ndash;2 inch trim piece) along the front edge of the cabinet bottom. This hides the fixture from direct view and eliminates glare. Many cabinet manufacturers offer matching valance pieces, or a simple piece of trim molding painted to match works well.
                  </p>
                </div>

                <div className="bg-emerald-900/20 rounded-xl p-6 border border-emerald-500/20">
                  <h3 className="font-semibold text-emerald-400 mb-2">Run Full Lengths for Even Illumination</h3>
                  <p className="text-white/70 text-sm">
                    Install lighting that spans the <strong>full width</strong> of each cabinet section for even illumination. Short fixtures centered under a wide cabinet create dark zones at the edges. For LED strips, measure and cut to the exact cabinet width. For light bars, choose lengths that cover at least 2/3 of the cabinet width.
                  </p>
                </div>
              </div>
            </section>

            <section id="common-mistakes" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Common Mistakes to Avoid</h2>
              <p className="text-white/80 mb-4">
                Under cabinet lighting installations often go wrong in predictable ways. Knowing these common mistakes helps you deliver a quality installation every time and avoid callbacks.
              </p>

              <div className="grid md:grid-cols-2 gap-4 my-6">
                <div className="bg-red-900/20 rounded-xl p-6 border border-red-500/20">
                  <h4 className="font-semibold text-red-400 mb-3">Using the Wrong Circuit</h4>
                  <p className="text-white/60 text-sm">
                    Hardwiring under cabinet lights to a kitchen small-appliance branch circuit violates NEC 210.52(B)(2). These 20A circuits are reserved for countertop receptacles. Use a general lighting circuit instead.
                  </p>
                </div>
                <div className="bg-red-900/20 rounded-xl p-6 border border-red-500/20">
                  <h4 className="font-semibold text-red-400 mb-3">Incompatible Dimmer</h4>
                  <p className="text-white/60 text-sm">
                    Installing an incandescent dimmer with LED fixtures causes flickering, buzzing, limited dimming range, and premature LED failure. Always use a dimmer rated for LED loads and verify compatibility with the specific fixture or driver.
                  </p>
                </div>
                <div className="bg-red-900/20 rounded-xl p-6 border border-red-500/20">
                  <h4 className="font-semibold text-red-400 mb-3">Overloading the LED Driver</h4>
                  <p className="text-white/60 text-sm">
                    Connecting more LED strip length than the driver is rated for causes dimming, overheating, and driver failure. Size the driver for the total LED wattage plus a minimum 20% safety margin.
                  </p>
                </div>
                <div className="bg-red-900/20 rounded-xl p-6 border border-red-500/20">
                  <h4 className="font-semibold text-red-400 mb-3">Ignoring Voltage Drop</h4>
                  <p className="text-white/60 text-sm">
                    Running 12V LED strips on long wire runs without accounting for voltage drop results in noticeably dimmer lights at the far end. Use 24V systems for runs over 10 feet, or increase wire gauge to compensate.
                  </p>
                </div>
                <div className="bg-red-900/20 rounded-xl p-6 border border-red-500/20">
                  <h4 className="font-semibold text-red-400 mb-3">Poor Heat Management</h4>
                  <p className="text-white/60 text-sm">
                    Mounting LED strips without an aluminum channel heat sink, or enclosing LED drivers in unventilated spaces, causes overheating that dramatically shortens LED lifespan. LEDs are heat-sensitive &mdash; provide a proper thermal path.
                  </p>
                </div>
                <div className="bg-red-900/20 rounded-xl p-6 border border-red-500/20">
                  <h4 className="font-semibold text-red-400 mb-3">Exposed Wiring and Connections</h4>
                  <p className="text-white/60 text-sm">
                    Leaving low-voltage wire connections exposed, using electrical tape instead of proper connectors, or running bare NM cable across cabinet surfaces. All connections must be in listed boxes, and wiring must be properly secured and protected.
                  </p>
                </div>
                <div className="bg-red-900/20 rounded-xl p-6 border border-red-500/20">
                  <h4 className="font-semibold text-red-400 mb-3">Mounting Too Far Back</h4>
                  <p className="text-white/60 text-sm">
                    Placing fixtures toward the back of the cabinet directs light onto the backsplash instead of the countertop. Position fixtures in the front third of the cabinet underside for proper task illumination where it is needed most.
                  </p>
                </div>
                <div className="bg-red-900/20 rounded-xl p-6 border border-red-500/20">
                  <h4 className="font-semibold text-red-400 mb-3">Mismatched Color Temperatures</h4>
                  <p className="text-white/60 text-sm">
                    Installing fixtures with different Kelvin ratings under adjacent cabinets creates an uneven, multi-tone appearance. Buy all fixtures from the same manufacturer and lot to ensure consistent color temperature across the entire installation.
                  </p>
                </div>
              </div>

              <div className="bg-cyan-900/30 rounded-xl p-6 my-6">
                <h4 className="font-semibold text-cyan-400 mb-3">Installation Checklist</h4>
                <ul className="text-white/70 space-y-2 text-sm">
                  <li>&#9744; Circuit identified and verified (general lighting, not small-appliance)</li>
                  <li>&#9744; All fixtures same color temperature and from same manufacturer</li>
                  <li>&#9744; LED driver properly sized (total watts + 20% margin)</li>
                  <li>&#9744; Dimmer compatible with LED fixture or driver</li>
                  <li>&#9744; Wire runs within voltage drop limits (especially 12V systems)</li>
                  <li>&#9744; All line-voltage connections in listed junction boxes</li>
                  <li>&#9744; Fixtures mounted toward front of cabinet with valance or shield</li>
                  <li>&#9744; LED strips installed in aluminum channels with diffuser</li>
                  <li>&#9744; All wiring hidden and properly secured</li>
                  <li>&#9744; Driver located in ventilated, accessible location</li>
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
                <Link href="/blog/kitchen-electrical-requirements-nec" className="bg-white/5 hover:bg-white/10 rounded-xl p-6 transition-colors">
                  <span className="text-purple-400 text-sm">NEC Code</span>
                  <h3 className="font-semibold mt-2">Kitchen Electrical Requirements: NEC Code Guide</h3>
                </Link>
                <Link href="/blog/recessed-lighting-installation-guide" className="bg-white/5 hover:bg-white/10 rounded-xl p-6 transition-colors">
                  <span className="text-emerald-400 text-sm">Installation</span>
                  <h3 className="font-semibold mt-2">Recessed Lighting Installation Guide</h3>
                </Link>
                <Link href="/blog/dimmer-switch-wiring-guide" className="bg-white/5 hover:bg-white/10 rounded-xl p-6 transition-colors">
                  <span className="text-emerald-400 text-sm">Installation</span>
                  <h3 className="font-semibold mt-2">Dimmer Switch Wiring Guide</h3>
                </Link>
                <Link href="/blog/led-driver-selection-guide" className="bg-white/5 hover:bg-white/10 rounded-xl p-6 transition-colors">
                  <span className="text-cyan-400 text-sm">Technology</span>
                  <h3 className="font-semibold mt-2">LED Driver Selection Guide</h3>
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
