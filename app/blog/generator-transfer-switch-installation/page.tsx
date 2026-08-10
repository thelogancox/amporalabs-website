import { Metadata } from "next";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import { BreadcrumbJsonLd, BlogPostingJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Generator Transfer Switch Installation: Manual vs Automatic & NEC Requirements",
  description: "Complete guide to generator transfer switch installation including manual vs automatic transfer switches, sizing calculations, NEC Article 702 requirements, interlock kits, grounding rules, and step-by-step installation procedures.",
  keywords: [
    "transfer switch installation",
    "manual transfer switch",
    "automatic transfer switch",
    "generator transfer switch",
    "NEC Article 702",
    "transfer switch sizing",
    "generator interlock kit",
    "ATS installation",
    "standby power transfer",
    "generator grounding requirements",
    "whole house generator",
    "backup power installation",
    "transfer switch wiring",
    "generator panel interlock",
  ],
  alternates: {
    canonical: "https://amporalabs.com/blog/generator-transfer-switch-installation",
  },
  openGraph: {
    title: "Generator Transfer Switch Installation: Manual vs Automatic - Ampora",
    description: "Complete guide to transfer switch installation, sizing, NEC 702 requirements, and grounding.",
    url: "https://amporalabs.com/blog/generator-transfer-switch-installation",
    type: "article",
  },
};

function HeroIllustration() {
  return (
    <svg viewBox="0 0 400 160" className="w-full h-40 md:h-48" aria-label="Generator transfer switch installation diagram">
      {/* Utility power */}
      <g transform="translate(40, 40)">
        <rect x="-25" y="-18" width="50" height="36" rx="4" fill="#1f2937" stroke="#6b7280" strokeWidth="1.5"/>
        <text x="0" y="-4" textAnchor="middle" fill="#fff" fontSize="7" fontWeight="bold">Utility</text>
        <text x="0" y="8" textAnchor="middle" fill="#60a5fa" fontSize="6">Power</text>
      </g>

      {/* Transfer switch */}
      <g transform="translate(175, 40)">
        <rect x="-40" y="-28" width="80" height="56" rx="6" fill="#1e3a5f" stroke="#3b82f6" strokeWidth="2"/>
        <text x="0" y="-12" textAnchor="middle" fill="#fff" fontSize="8" fontWeight="bold">Transfer</text>
        <text x="0" y="0" textAnchor="middle" fill="#fff" fontSize="8" fontWeight="bold">Switch</text>

        {/* Switch position indicator */}
        <rect x="-20" y="8" width="40" height="12" rx="6" fill="#111827" stroke="#4b5563"/>
        <circle cx="-8" cy="14" r="4" fill="#22c55e"/>
        <text x="8" y="17" textAnchor="middle" fill="#9ca3af" fontSize="6">UTIL</text>
      </g>

      {/* Generator */}
      <g transform="translate(40, 120)">
        <rect x="-25" y="-18" width="50" height="36" rx="4" fill="#1f2937" stroke="#f97316" strokeWidth="1.5"/>
        <text x="0" y="-4" textAnchor="middle" fill="#fff" fontSize="7" fontWeight="bold">Gen</text>
        <text x="0" y="8" textAnchor="middle" fill="#f97316" fontSize="6">Standby</text>
      </g>

      {/* Main panel */}
      <g transform="translate(320, 40)">
        <rect x="-30" y="-28" width="60" height="56" rx="4" fill="#1f2937" stroke="#6b7280" strokeWidth="1.5"/>
        <text x="0" y="-10" textAnchor="middle" fill="#fff" fontSize="7" fontWeight="bold">Main</text>
        <text x="0" y="2" textAnchor="middle" fill="#fff" fontSize="7" fontWeight="bold">Panel</text>
        {/* Breaker slots */}
        {[0, 1, 2].map((i) => (
          <g key={i}>
            <rect x="-20" y={10 + i * 8} width="17" height="5" rx="1" fill="#374151" stroke="#4b5563" strokeWidth="0.5"/>
            <rect x="3" y={10 + i * 8} width="17" height="5" rx="1" fill="#374151" stroke="#4b5563" strokeWidth="0.5"/>
          </g>
        ))}
      </g>

      {/* Load icons */}
      <g transform="translate(320, 120)">
        <rect x="-25" y="-15" width="50" height="30" rx="4" fill="#111827" stroke="#22c55e" strokeWidth="1.5"/>
        <text x="0" y="-2" textAnchor="middle" fill="#22c55e" fontSize="7" fontWeight="bold">Critical</text>
        <text x="0" y="9" textAnchor="middle" fill="#22c55e" fontSize="7">Loads</text>
      </g>

      {/* Connection lines */}
      <line x1="65" y1="40" x2="135" y2="40" stroke="#60a5fa" strokeWidth="2"/>
      <line x1="215" y1="40" x2="290" y2="40" stroke="#22c55e" strokeWidth="2"/>
      <line x1="65" y1="120" x2="135" y2="80" stroke="#f97316" strokeWidth="2" strokeDasharray="4,3"/>
      <line x1="320" y1="68" x2="320" y2="105" stroke="#22c55e" strokeWidth="1.5"/>

      {/* Arrow labels */}
      <text x="100" y="34" textAnchor="middle" fill="#60a5fa" fontSize="6">Normal</text>
      <text x="253" y="34" textAnchor="middle" fill="#22c55e" fontSize="6">To Panel</text>
      <text x="85" y="92" textAnchor="middle" fill="#f97316" fontSize="6">Standby</text>

      {/* Title badge */}
      <rect x="240" y="100" width="90" height="25" rx="4" fill="#10b981" fillOpacity="0.2" stroke="#10b981"/>
      <text x="285" y="117" textAnchor="middle" fill="#10b981" fontSize="9" fontWeight="bold">NEC 702</text>
    </svg>
  );
}

export default function GeneratorTransferSwitchPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navigation />
      <div className="pt-20">
        <BreadcrumbJsonLd
          items={[
            { name: "Home", url: "https://amporalabs.com" },
            { name: "Blog", url: "https://amporalabs.com/blog" },
            { name: "Generator Transfer Switch Installation", url: "https://amporalabs.com/blog/generator-transfer-switch-installation" },
          ]}
        />
        <BlogPostingJsonLd
          headline="Generator Transfer Switch Installation: Manual vs Automatic &amp; NEC Requirements"
          description="Complete guide to generator transfer switch installation including manual vs automatic types, sizing, and NEC 702 requirements."
          datePublished="2025-02-08"
          dateModified="2025-02-08"
          url="https://amporalabs.com/blog/generator-transfer-switch-installation"
          wordCount={3000}
          keywords={["transfer switch", "generator installation", "NEC 702", "automatic transfer switch", "manual transfer switch", "interlock kit"]}
        />

        <article className="max-w-4xl mx-auto px-6 py-12">
          {/* Breadcrumb */}
          <nav className="text-sm text-white/60 mb-8">
            <Link href="/" className="hover:text-white">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/blog" className="hover:text-white">Blog</Link>
            <span className="mx-2">/</span>
            <span className="text-white">Generator Transfer Switch Installation</span>
          </nav>

          {/* Article Header */}
          <header className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <span className="px-3 py-1 bg-emerald-600/30 text-emerald-300 text-sm font-medium rounded-full">
                Installation
              </span>
              <span className="text-white/40 text-sm">13 min read</span>
              <span className="text-white/40 text-sm">February 8, 2025</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6 leading-tight">
              Generator Transfer Switch Installation: Manual vs Automatic &amp; NEC Requirements
            </h1>
            <p className="text-xl text-white/70">
              Transfer switches are the critical link between generator power and your electrical system. This guide covers manual vs. automatic transfer switches, proper sizing, NEC Article 702 requirements, interlock kits, and grounding considerations.
            </p>
          </header>

          <div className="mb-12 bg-gradient-to-br from-emerald-900/20 to-cyan-900/20 rounded-2xl p-6 border border-white/10">
            <HeroIllustration />
          </div>

          {/* Table of Contents */}
          <div className="bg-white/5 rounded-2xl p-6 mb-12">
            <h2 className="font-display font-bold mb-4">In This Guide</h2>
            <ul className="space-y-2 text-white/70">
              <li><a href="#transfer-switch-basics" className="hover:text-purple-400">&#8594; Transfer Switch Basics</a></li>
              <li><a href="#manual-vs-automatic" className="hover:text-purple-400">&#8594; Manual vs. Automatic Transfer Switches</a></li>
              <li><a href="#interlock-kits" className="hover:text-purple-400">&#8594; Generator Interlock Kits</a></li>
              <li><a href="#sizing" className="hover:text-purple-400">&#8594; Transfer Switch Sizing</a></li>
              <li><a href="#nec-702" className="hover:text-purple-400">&#8594; NEC Article 702 Requirements</a></li>
              <li><a href="#grounding" className="hover:text-purple-400">&#8594; Grounding &amp; Bonding</a></li>
              <li><a href="#installation-steps" className="hover:text-purple-400">&#8594; Installation Procedures</a></li>
              <li><a href="#testing" className="hover:text-purple-400">&#8594; Testing &amp; Commissioning</a></li>
            </ul>
          </div>

          {/* Article Content */}
          <div className="prose prose-invert prose-lg max-w-none">

            <section id="transfer-switch-basics" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Transfer Switch Basics</h2>
              <p className="text-white/80 mb-4">
                A transfer switch is a switching device that transfers electrical load between two power sources&mdash;typically utility power and a generator. Its primary purpose is to prevent backfeeding, which occurs when generator power feeds back into the utility grid through your service panel.
              </p>
              <div className="bg-orange-900/30 border border-orange-500/30 rounded-xl p-6 my-6">
                <h3 className="font-semibold text-orange-300 mb-2">Why Backfeed Prevention Is Critical</h3>
                <p className="text-white/70 text-sm">
                  Backfeeding is extremely dangerous and often fatal. When generator power feeds back through the utility transformer, it is stepped up from 240V to thousands of volts on the distribution lines. Utility line workers may be electrocuted because they expect de-energized lines during an outage. NEC 702.5 requires all optional standby systems to have a transfer switch or equivalent means to prevent backfeed.
                </p>
              </div>
              <p className="text-white/80">
                Transfer switches operate in one of two positions: NORMAL (utility power) or EMERGENCY/STANDBY (generator power). The key design feature is that they mechanically prevent both sources from being connected simultaneously. This is called &quot;break-before-make&quot; switching.
              </p>
            </section>

            <section id="manual-vs-automatic" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Manual vs. Automatic Transfer Switches</h2>
              <p className="text-white/80 mb-4">
                The choice between manual and automatic transfer switches depends on the application, budget, and how quickly power must be restored:
              </p>
              <div className="overflow-x-auto my-6">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-white/20">
                      <th className="text-left py-3 px-4 text-white/60">Feature</th>
                      <th className="text-left py-3 px-4 text-white/60">Manual Transfer Switch</th>
                      <th className="text-left py-3 px-4 text-white/60">Automatic Transfer Switch</th>
                    </tr>
                  </thead>
                  <tbody className="text-white/80">
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-semibold">Operation</td>
                      <td className="py-3 px-4">Owner manually flips switch</td>
                      <td className="py-3 px-4">Automatically senses outage &amp; switches</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-semibold">Generator Start</td>
                      <td className="py-3 px-4">Manual start required</td>
                      <td className="py-3 px-4">Auto-start signal to generator</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-semibold">Transfer Time</td>
                      <td className="py-3 px-4">Minutes (depends on operator)</td>
                      <td className="py-3 px-4">10-30 seconds typical</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-semibold">Typical Cost</td>
                      <td className="py-3 px-4">$300-$800</td>
                      <td className="py-3 px-4">$800-$3,000+</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-semibold">Best For</td>
                      <td className="py-3 px-4">Portable generators, budget installs</td>
                      <td className="py-3 px-4">Standby generators, critical loads</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-semibold">Load Selection</td>
                      <td className="py-3 px-4">Pre-selected circuits only</td>
                      <td className="py-3 px-4">Whole house or selected circuits</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-semibold">Unattended Operation</td>
                      <td className="py-3 px-4">No &mdash; requires someone home</td>
                      <td className="py-3 px-4">Yes &mdash; fully automatic</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="grid md:grid-cols-2 gap-4 my-6">
                <div className="bg-cyan-900/30 rounded-xl p-6">
                  <h3 className="font-semibold text-cyan-300 mb-3">Manual Transfer Switch Types</h3>
                  <ul className="text-white/70 space-y-1 text-sm">
                    <li>&#8226; <strong>Load center style</strong> &mdash; Sub-panel with dedicated breakers for selected circuits</li>
                    <li>&#8226; <strong>Switch-only</strong> &mdash; Single handle switches all selected circuits</li>
                    <li>&#8226; <strong>Circuit-by-circuit</strong> &mdash; Individual switches per circuit for load management</li>
                    <li>&#8226; <strong>6-circuit, 10-circuit</strong> &mdash; Common residential sizes</li>
                  </ul>
                </div>
                <div className="bg-green-900/30 rounded-xl p-6">
                  <h3 className="font-semibold text-green-300 mb-3">Automatic Transfer Switch Types</h3>
                  <ul className="text-white/70 space-y-1 text-sm">
                    <li>&#8226; <strong>Open transition</strong> &mdash; Brief power interruption during transfer (most common)</li>
                    <li>&#8226; <strong>Closed transition</strong> &mdash; Momentary parallel operation (commercial)</li>
                    <li>&#8226; <strong>Soft transfer</strong> &mdash; Ramped transition for sensitive loads</li>
                    <li>&#8226; <strong>Service entrance rated</strong> &mdash; For whole-house applications</li>
                  </ul>
                </div>
              </div>
            </section>

            <section id="interlock-kits" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Generator Interlock Kits</h2>
              <p className="text-white/80 mb-4">
                An interlock kit is a mechanical device that attaches to the main panel and prevents the main breaker and generator backfeed breaker from being ON simultaneously. It is a lower-cost alternative to a separate transfer switch:
              </p>
              <div className="space-y-4 my-6">
                <div className="bg-white/5 rounded-xl p-4">
                  <p className="text-emerald-400 font-semibold">How Interlock Kits Work</p>
                  <p className="text-white/60 text-sm mt-1">A sliding metal plate mechanically links the main breaker and a dedicated generator breaker (typically in the top two positions of the panel). When the generator breaker is ON, the plate physically prevents the main breaker from closing, and vice versa. This provides the break-before-make safety required by code.</p>
                </div>
                <div className="bg-white/5 rounded-xl p-4">
                  <p className="text-emerald-400 font-semibold">NEC Compliance</p>
                  <p className="text-white/60 text-sm mt-1">Interlock kits are permitted as transfer equipment per NEC 702.5 when they are listed for the specific panel and installed per the listing instructions. The kit must be UL listed (or equivalent) for the exact panel model. Generic or universal kits may not meet code in all jurisdictions.</p>
                </div>
                <div className="bg-white/5 rounded-xl p-4">
                  <p className="text-emerald-400 font-semibold">Advantages &amp; Limitations</p>
                  <p className="text-white/60 text-sm mt-1">Interlock kits are less expensive ($50-$200 for the kit), allow the owner to power any circuit in the panel (by selecting breakers), and require no additional sub-panel. However, they require manual operation, the generator breaker size limits total available power, and load management relies on the operator manually turning off non-essential breakers.</p>
                </div>
              </div>
              <div className="bg-purple-900/30 border border-purple-500/30 rounded-xl p-6 my-6">
                <h3 className="font-semibold text-purple-300 mb-2">Installation Requirement</h3>
                <p className="text-white/70 text-sm">
                  The generator backfeed breaker must be installed immediately adjacent to the main breaker for the interlock to function properly. Most interlock kits require the generator breaker in the top-right position of the panel. A power inlet box (NEMA L14-30 or similar) is installed on the exterior of the building with a conduit run to the panel. The portable generator connects to the inlet box via a cord.
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
                  <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/></svg>
                  Download Free
                </a>
              </div>
            </div>

            <section id="sizing" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Transfer Switch Sizing</h2>
              <p className="text-white/80 mb-4">
                Proper sizing of the transfer switch is based on the generator capacity, the loads to be served, and the service entrance rating:
              </p>
              <div className="overflow-x-auto my-6">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-white/20">
                      <th className="text-left py-3 px-4 text-white/60">Generator Size</th>
                      <th className="text-left py-3 px-4 text-white/60">Transfer Switch Rating</th>
                      <th className="text-left py-3 px-4 text-white/60">Typical Application</th>
                    </tr>
                  </thead>
                  <tbody className="text-white/80">
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-semibold">5-7.5 kW (portable)</td>
                      <td className="py-3 px-4">30A manual transfer switch</td>
                      <td className="py-3 px-4">6-10 selected circuits</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-semibold">7.5-12 kW (portable/standby)</td>
                      <td className="py-3 px-4">50A transfer switch</td>
                      <td className="py-3 px-4">Selected circuits or small whole-house</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-semibold">14-20 kW (standby)</td>
                      <td className="py-3 px-4">100A ATS</td>
                      <td className="py-3 px-4">Most residential whole-house</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-semibold">22-30 kW (standby)</td>
                      <td className="py-3 px-4">200A ATS</td>
                      <td className="py-3 px-4">Large residential whole-house</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-semibold">30+ kW (commercial)</td>
                      <td className="py-3 px-4">200A-600A+ ATS</td>
                      <td className="py-3 px-4">Commercial &amp; industrial applications</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="bg-cyan-900/30 border border-cyan-500/30 rounded-xl p-6 my-6">
                <h3 className="font-semibold text-cyan-300 mb-2">Sizing Best Practice</h3>
                <p className="text-white/70 text-sm">
                  Size the transfer switch to match the service entrance rating (e.g., 200A ATS for a 200A service) when installing a whole-house standby system. For selected-circuit manual systems, the transfer switch ampere rating must be at least equal to the generator output amperage. Always account for motor starting currents (typically 3-6x running amps for induction motors) when sizing.
                </p>
              </div>
            </section>

            <section id="nec-702" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">NEC Article 702 Requirements</h2>
              <p className="text-white/80 mb-4">
                NEC Article 702 governs optional standby systems (the category covering most residential and many commercial generator installations). Key requirements include:
              </p>
              <ul className="list-disc list-inside text-white/70 space-y-2 mb-4">
                <li><strong>702.5 &mdash; Transfer Equipment</strong> &mdash; All optional standby systems must have transfer equipment that prevents inadvertent interconnection of normal and standby sources. The transfer equipment must be listed, identified for standby use, and approved by the AHJ.</li>
                <li><strong>702.6 &mdash; Signals</strong> &mdash; Audible and visual signal devices are required to indicate when the optional standby source is operating (derangement signal). This is commonly satisfied by the ATS status indicators.</li>
                <li><strong>702.7 &mdash; Signs</strong> &mdash; A sign is required at the service entrance indicating the type, location, and connection point of the optional standby power source. Example: &quot;THIS BUILDING HAS AN OPTIONAL STANDBY SYSTEM - GENERATOR LOCATED AT [LOCATION].&quot;</li>
                <li><strong>702.12 &mdash; Outdoor Generator Disconnect</strong> &mdash; A readily accessible disconnect must be provided at the generator for maintenance. This is typically the generator&apos;s built-in circuit breaker.</li>
              </ul>
              <div className="bg-green-900/30 border border-green-500/30 rounded-xl p-6 my-6">
                <h3 className="font-semibold text-green-300 mb-2">Emergency vs. Optional Standby (Article 700 vs. 702)</h3>
                <p className="text-white/70 text-sm">
                  Article 700 covers legally required emergency systems (hospitals, fire pumps, exit lighting). Article 701 covers legally required standby systems. Article 702 covers optional standby systems (residential generators, convenience backup). Most residential generator installations fall under Article 702. The requirements for Articles 700 and 701 are significantly more stringent, including mandatory automatic transfer and specific transfer time limits (10 seconds for emergency systems).
                </p>
              </div>
            </section>

            <section id="grounding" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Grounding &amp; Bonding</h2>
              <p className="text-white/80 mb-4">
                Generator grounding is one of the most misunderstood aspects of standby power installation. The correct approach depends on whether the generator is a separately derived system:
              </p>
              <div className="grid md:grid-cols-2 gap-4 my-6">
                <div className="bg-orange-900/30 rounded-xl p-6">
                  <h3 className="font-semibold text-orange-300 mb-3">NOT Separately Derived (Most Common)</h3>
                  <ul className="text-white/70 space-y-1 text-sm">
                    <li>&#8226; Transfer switch does NOT switch the neutral</li>
                    <li>&#8226; Neutral is continuous from utility through to generator</li>
                    <li>&#8226; Generator neutral-to-ground bond must be REMOVED</li>
                    <li>&#8226; Grounding is provided by the service entrance</li>
                    <li>&#8226; No separate grounding electrode needed at generator</li>
                    <li>&#8226; Most residential installations use this configuration</li>
                  </ul>
                </div>
                <div className="bg-purple-900/30 rounded-xl p-6">
                  <h3 className="font-semibold text-purple-300 mb-3">Separately Derived System</h3>
                  <ul className="text-white/70 space-y-1 text-sm">
                    <li>&#8226; Transfer switch switches BOTH hot AND neutral</li>
                    <li>&#8226; Neutral is isolated between sources</li>
                    <li>&#8226; Generator neutral-to-ground bond must be MAINTAINED</li>
                    <li>&#8226; Requires grounding electrode at generator per 250.30</li>
                    <li>&#8226; More complex but avoids parallel neutral paths</li>
                    <li>&#8226; Required by some AHJs and for certain installations</li>
                  </ul>
                </div>
              </div>
              <div className="bg-cyan-900/30 border border-cyan-500/30 rounded-xl p-6 my-6">
                <h3 className="font-semibold text-cyan-300 mb-2">Critical Safety Warning</h3>
                <p className="text-white/70 text-sm">
                  If the transfer switch does NOT switch the neutral (not separately derived), the generator&apos;s internal neutral-ground bonding jumper MUST be removed or disconnected. Leaving it in place creates parallel ground paths and can result in objectionable current on grounding conductors, false GFCI tripping, and potential shock hazards. Consult the generator manufacturer&apos;s instructions for bonding jumper location.
                </p>
              </div>
            </section>

            <section id="installation-steps" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Installation Procedures</h2>
              <p className="text-white/80 mb-4">
                Follow these general steps for a typical manual transfer switch or interlock kit installation with a portable generator:
              </p>
              <div className="space-y-4 my-6">
                <div className="bg-white/5 rounded-xl p-4">
                  <p className="text-emerald-400 font-semibold">Step 1: Load Assessment</p>
                  <p className="text-white/60 text-sm mt-1">Calculate the total wattage of circuits to be backed up. Include starting watts for motors (AC units, refrigerators, sump pumps). Use this to verify the generator and transfer switch sizing is adequate. Document the load calculation for the permit application.</p>
                </div>
                <div className="bg-white/5 rounded-xl p-4">
                  <p className="text-emerald-400 font-semibold">Step 2: Install Power Inlet Box</p>
                  <p className="text-white/60 text-sm mt-1">Mount a NEMA L14-30R (or appropriate) flanged inlet box on the exterior wall near the panel location. Use a weatherproof box rated for outdoor use. Run the conduit from the inlet box to the panel (shortest practical route). Install appropriately sized conductors per the generator output rating.</p>
                </div>
                <div className="bg-white/5 rounded-xl p-4">
                  <p className="text-emerald-400 font-semibold">Step 3: Install Transfer Equipment</p>
                  <p className="text-white/60 text-sm mt-1">For a transfer switch: mount adjacent to the main panel and wire per manufacturer instructions. For an interlock kit: install the generator backfeed breaker in the required position, install the interlock plate per the listing instructions, and verify mechanical interlock operation before energizing.</p>
                </div>
                <div className="bg-white/5 rounded-xl p-4">
                  <p className="text-emerald-400 font-semibold">Step 4: Make Connections</p>
                  <p className="text-white/60 text-sm mt-1">Connect the inlet box conductors to the generator breaker (for interlock) or transfer switch input. Route conductors per NEC Chapter 3 wiring methods. Ensure all connections are torqued to manufacturer specifications. Verify neutral and grounding connections are correct.</p>
                </div>
                <div className="bg-white/5 rounded-xl p-4">
                  <p className="text-emerald-400 font-semibold">Step 5: Install Signage</p>
                  <p className="text-white/60 text-sm mt-1">Install the required NEC 702.7 sign at the service entrance. Include operating instructions on or near the transfer switch/interlock. Label the generator breaker in the panel schedule. Post any load management instructions (which breakers to turn off before switching to generator).</p>
                </div>
              </div>
            </section>

            <section id="testing" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Testing &amp; Commissioning</h2>
              <p className="text-white/80 mb-4">
                Thorough testing is essential before leaving the job site. Perform these checks:
              </p>
              <ul className="list-disc list-inside text-white/70 space-y-2 mb-4">
                <li><strong>Mechanical interlock test</strong> &mdash; Verify the transfer switch or interlock physically prevents both sources from being ON simultaneously. Try to turn on both breakers; the interlock must prevent it.</li>
                <li><strong>Voltage verification</strong> &mdash; With the generator running and connected, verify proper voltage (240V line-to-line, 120V line-to-neutral) at the transfer switch or generator breaker.</li>
                <li><strong>Load test</strong> &mdash; Transfer to generator power and energize the selected circuits. Verify lights, outlets, and equipment function properly. Test motor loads (refrigerator, sump pump) for proper operation.</li>
                <li><strong>GFCI/AFCI verification</strong> &mdash; Test all GFCI and AFCI devices while on generator power. If GFCIs are nuisance-tripping on generator, this may indicate a grounding/bonding issue.</li>
                <li><strong>Transfer back test</strong> &mdash; Transfer back to utility power and verify smooth transition. Check that the transfer switch or interlock returns to the NORMAL position correctly.</li>
                <li><strong>Generator shutdown procedure</strong> &mdash; Verify proper shutdown sequence: transfer to utility first, then shut down generator. Never switch to utility while generator is under load without following the proper sequence.</li>
              </ul>
              <div className="bg-green-900/30 border border-green-500/30 rounded-xl p-6 my-6">
                <h3 className="font-semibold text-green-300 mb-2">Customer Training</h3>
                <p className="text-white/70 text-sm">
                  Walk the homeowner through the complete startup and shutdown procedure. Provide written instructions posted near the transfer equipment. Demonstrate load management (turning off high-draw circuits before starting the generator). Explain the importance of never backfeeding the panel without using the transfer switch or interlock.
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
                    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/></svg>
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
                <Link href="/blog/emergency-standby-power-systems" className="bg-white/5 hover:bg-white/10 rounded-xl p-6 transition-colors">
                  <span className="text-emerald-400 text-sm">Installation</span>
                  <h3 className="font-semibold mt-2">Emergency &amp; Standby Power Systems Guide</h3>
                </Link>
                <Link href="/blog/electrical-service-upgrade-200-amp" className="bg-white/5 hover:bg-white/10 rounded-xl p-6 transition-colors">
                  <span className="text-emerald-400 text-sm">Installation</span>
                  <h3 className="font-semibold mt-2">Electrical Service Upgrade to 200 Amp Guide</h3>
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
