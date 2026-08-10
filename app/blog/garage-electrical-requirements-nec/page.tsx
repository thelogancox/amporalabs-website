import { Metadata } from "next";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import { BreadcrumbJsonLd, BlogPostingJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Garage Electrical Requirements: NEC Code Guide for Residential & Detached Garages",
  description: "Complete guide to NEC garage electrical requirements. Learn receptacle placement, GFCI protection, lighting circuits, detached garage feeder sizing, sub-panel requirements, and EV charger readiness.",
  keywords: [
    "garage electrical requirements",
    "garage GFCI requirements",
    "detached garage wiring",
    "garage sub panel",
    "garage receptacle requirements NEC",
    "detached garage feeder sizing",
    "garage electrical code",
    "EV charger garage wiring",
    "garage door opener circuit",
    "NEC 210.52(G)",
    "garage lighting requirements",
    "detached building grounding",
    "4-wire feeder detached garage",
    "garage electrical panel"
  ],
  alternates: {
    canonical: "https://amporalabs.com/blog/garage-electrical-requirements-nec",
  },
  openGraph: {
    title: "Garage Electrical Requirements: NEC Code Guide - Ampora",
    description: "Master NEC garage electrical requirements for receptacles, GFCI, lighting, and detached garage feeders.",
    url: "https://amporalabs.com/blog/garage-electrical-requirements-nec",
    type: "article",
  },
};

function HeroIllustration() {
  return (
    <svg viewBox="0 0 400 160" className="w-full h-40 md:h-48" aria-label="Garage electrical layout showing receptacles, lighting, and sub-panel">
      {/* Garage outline */}
      <rect x="30" y="20" width="340" height="120" rx="4" fill="#1f2937" stroke="#4b5563" strokeWidth="1.5"/>
      {/* Garage door */}
      <rect x="130" y="110" width="140" height="30" rx="2" fill="#374151" stroke="#6b7280" strokeWidth="1"/>
      <line x1="130" y1="120" x2="270" y2="120" stroke="#4b5563" strokeWidth="0.5"/>
      <line x1="130" y1="130" x2="270" y2="130" stroke="#4b5563" strokeWidth="0.5"/>
      {/* Sub-panel */}
      <rect x="45" y="35" width="25" height="40" rx="2" fill="#1f2937" stroke="#22c55e" strokeWidth="1.5"/>
      <rect x="50" y="42" width="6" height="4" rx="1" fill="#22c55e"/>
      <rect x="50" y="50" width="6" height="4" rx="1" fill="#22c55e"/>
      <rect x="59" y="42" width="6" height="4" rx="1" fill="#22c55e"/>
      <rect x="59" y="50" width="6" height="4" rx="1" fill="#22c55e"/>
      <text x="57" y="68" textAnchor="middle" fill="#22c55e" fontSize="5">PANEL</text>
      {/* GFCI Receptacles */}
      <g transform="translate(110, 50)">
        <rect x="-8" y="-6" width="16" height="12" rx="2" fill="#22c55e" stroke="#16a34a" strokeWidth="1"/>
        <text x="0" y="18" textAnchor="middle" fill="#22c55e" fontSize="5">GFCI</text>
      </g>
      <g transform="translate(200, 50)">
        <rect x="-8" y="-6" width="16" height="12" rx="2" fill="#22c55e" stroke="#16a34a" strokeWidth="1"/>
        <text x="0" y="18" textAnchor="middle" fill="#22c55e" fontSize="5">GFCI</text>
      </g>
      <g transform="translate(290, 50)">
        <rect x="-8" y="-6" width="16" height="12" rx="2" fill="#22c55e" stroke="#16a34a" strokeWidth="1"/>
        <text x="0" y="18" textAnchor="middle" fill="#22c55e" fontSize="5">GFCI</text>
      </g>
      {/* Ceiling light */}
      <circle cx="200" cy="85" r="8" fill="#fbbf24" fillOpacity="0.3" stroke="#fbbf24" strokeWidth="1"/>
      <text x="200" y="100" textAnchor="middle" fill="#fbbf24" fontSize="5">LIGHT</text>
      {/* EV Charger */}
      <g transform="translate(340, 60)">
        <rect x="-15" y="-15" width="30" height="30" rx="3" fill="#3b82f6" fillOpacity="0.2" stroke="#3b82f6" strokeWidth="1.5"/>
        <text x="0" y="2" textAnchor="middle" fill="#3b82f6" fontSize="7">EV</text>
        <text x="0" y="25" textAnchor="middle" fill="#3b82f6" fontSize="5">240V</text>
      </g>
      {/* Door opener */}
      <rect x="180" y="105" width="40" height="8" rx="2" fill="#a855f7" fillOpacity="0.3" stroke="#a855f7" strokeWidth="1"/>
      <text x="200" y="155" textAnchor="middle" fill="#9ca3af" fontSize="6">Garage Electrical Layout</text>
    </svg>
  );
}

export default function GarageElectricalRequirementsPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navigation />
      <div className="pt-20">
        <BreadcrumbJsonLd
          items={[
            { name: "Home", url: "https://amporalabs.com" },
            { name: "Blog", url: "https://amporalabs.com/blog" },
            { name: "Garage Electrical Requirements", url: "https://amporalabs.com/blog/garage-electrical-requirements-nec" },
          ]}
        />
        <BlogPostingJsonLd
          headline="Garage Electrical Requirements: NEC Code Guide for Residential & Detached Garages"
          description="Complete guide to NEC garage electrical requirements including receptacles, GFCI, lighting, and detached garage feeders."
          datePublished="2025-02-08"
          dateModified="2025-02-08"
          url="https://amporalabs.com/blog/garage-electrical-requirements-nec"
          wordCount={3000}
          keywords={["garage electrical", "GFCI garage", "detached garage wiring", "NEC 210.52(G)", "EV charger garage"]}
        />

        <article className="max-w-4xl mx-auto px-6 py-12">
          <nav className="text-sm text-white/60 mb-8">
            <Link href="/" className="hover:text-white">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/blog" className="hover:text-white">Blog</Link>
            <span className="mx-2">/</span>
            <span className="text-white">Garage Electrical Requirements</span>
          </nav>

          <header className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <span className="px-3 py-1 bg-purple-600/30 text-purple-300 text-sm font-medium rounded-full">NEC Code</span>
              <span className="text-white/40 text-sm">12 min read</span>
              <span className="text-white/40 text-sm">February 8, 2025</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6 leading-tight">
              Garage Electrical Requirements: Complete NEC Guide
            </h1>
            <p className="text-xl text-white/70">
              Everything you need to know about wiring residential garages and detached buildings per NEC code. From GFCI receptacles to EV charger circuits and sub-panel installations.
            </p>
          </header>

          <div className="mb-12 bg-gradient-to-br from-green-900/20 to-cyan-900/20 rounded-2xl p-6 border border-white/10">
            <HeroIllustration />
          </div>

          <div className="bg-green-900/30 border border-green-500/30 rounded-2xl p-6 mb-12">
            <h3 className="font-display font-bold text-lg mb-3 text-green-400">Garage Electrical Quick Reference</h3>
            <div className="grid md:grid-cols-2 gap-4 text-sm">
              <div>
                <p className="text-white/70"><strong>Receptacles:</strong> Minimum 1 per car bay (NEC 210.52(G))</p>
                <p className="text-white/70"><strong>GFCI required:</strong> All 125V, 15A &amp; 20A receptacles</p>
                <p className="text-white/70"><strong>Lighting:</strong> At least 1 wall switch-controlled outlet</p>
              </div>
              <div>
                <p className="text-white/70"><strong>Detached feeder:</strong> 4-wire required (2 hot + N + G)</p>
                <p className="text-white/70"><strong>Sub-panel ground:</strong> Separate electrode required</p>
                <p className="text-white/70"><strong>EV charger:</strong> 125% of nameplate current</p>
              </div>
            </div>
          </div>

          <div className="bg-white/5 rounded-2xl p-6 mb-12">
            <h2 className="font-display font-bold mb-4">In This Guide</h2>
            <ul className="space-y-2 text-white/70">
              <li><a href="#receptacles" className="hover:text-purple-400">&#8594; Receptacle Requirements</a></li>
              <li><a href="#gfci" className="hover:text-purple-400">&#8594; GFCI Protection</a></li>
              <li><a href="#lighting" className="hover:text-purple-400">&#8594; Lighting Requirements</a></li>
              <li><a href="#dedicated" className="hover:text-purple-400">&#8594; Dedicated Circuits</a></li>
              <li><a href="#detached" className="hover:text-purple-400">&#8594; Detached Garage Feeder Sizing</a></li>
              <li><a href="#subpanel" className="hover:text-purple-400">&#8594; Sub-Panel Requirements</a></li>
              <li><a href="#ev" className="hover:text-purple-400">&#8594; EV Charger Readiness</a></li>
              <li><a href="#mistakes" className="hover:text-purple-400">&#8594; Common Inspection Failures</a></li>
            </ul>
          </div>

          <div className="prose prose-invert prose-lg max-w-none">
            <section id="receptacles" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Receptacle Requirements</h2>
              <p className="text-white/80 mb-4">
                NEC 210.52(G) requires at least <strong>one receptacle outlet</strong> in each attached garage and each detached garage with electric power. For a two-car garage, best practice is to install receptacles on each wall for convenience.
              </p>
              <div className="bg-cyan-900/30 rounded-xl p-6 my-6">
                <h3 className="font-semibold text-cyan-400 mb-3">NEC 210.52(G) Key Points</h3>
                <ul className="space-y-2 text-white/70">
                  <li><strong>Minimum 1 receptacle:</strong> Required in each vehicle bay area</li>
                  <li><strong>Not behind cars:</strong> Place where accessible without moving vehicles</li>
                  <li><strong>Height:</strong> Standard 12-18&quot; above floor is typical</li>
                  <li><strong>20A circuits recommended:</strong> For power tool use</li>
                </ul>
              </div>
            </section>

            <section id="gfci" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">GFCI Protection Requirements</h2>
              <p className="text-white/80 mb-4">
                NEC 210.8(A)(2) requires <strong>GFCI protection for all 125-volt, 15- and 20-ampere receptacles</strong> installed in garages. This applies to both attached and detached garages.
              </p>
              <div className="bg-green-900/30 rounded-xl p-6 my-6">
                <h3 className="font-semibold text-green-400 mb-3">Garage GFCI Requirements (NEC 2023)</h3>
                <ul className="space-y-2 text-white/70">
                  <li><strong>All 125V receptacles:</strong> Every receptacle in the garage must be GFCI protected</li>
                  <li><strong>Ceiling receptacles:</strong> Including outlets for garage door openers</li>
                  <li><strong>250V receptacles:</strong> NEC 2023 expanded to include 250V up to 50A</li>
                  <li><strong>Dedicated appliance circuits:</strong> Freezer, refrigerator circuits also need GFCI</li>
                </ul>
              </div>
              <div className="bg-orange-900/30 rounded-xl p-6 my-6">
                <h3 className="font-semibold text-orange-400 mb-2">Exception: Dedicated Appliance (Pre-2023)</h3>
                <p className="text-white/70">
                  Under NEC 2020 and earlier, a receptacle serving a dedicated freezer or refrigerator in the garage was exempt from GFCI. The <strong>NEC 2023 removed this exception</strong> &mdash; all garage receptacles now require GFCI protection.
                </p>
              </div>
            </section>

            <section id="lighting" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Lighting Requirements</h2>
              <p className="text-white/80 mb-4">
                NEC 210.70(A)(2)(a) requires at least one wall switch-controlled lighting outlet in attached garages and detached garages with electric power.
              </p>
              <div className="bg-white/5 rounded-xl p-6 my-6">
                <h3 className="font-semibold text-white mb-3">Garage Lighting Best Practices</h3>
                <ul className="space-y-2 text-white/70">
                  <li><strong>Wall switch at entry:</strong> Required by code for at least one light</li>
                  <li><strong>Adequate illumination:</strong> 50 lumens per sq ft minimum recommended</li>
                  <li><strong>Workbench lighting:</strong> Additional task lighting for workshops</li>
                  <li><strong>Motion sensors:</strong> Permitted as wall switch alternative for exterior</li>
                  <li><strong>LED fixtures:</strong> Best for garages &mdash; instant on, low heat, long life</li>
                </ul>
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

            <section id="dedicated" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Dedicated Circuits</h2>
              <p className="text-white/80 mb-4">
                While the NEC only requires one general receptacle, most functional garages need multiple dedicated circuits for tools and equipment.
              </p>
              <div className="overflow-x-auto my-6">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-white/20">
                      <th className="text-left py-3 px-4 text-white/60">Equipment</th>
                      <th className="text-left py-3 px-4 text-white/60">Typical Draw</th>
                      <th className="text-left py-3 px-4 text-white/60">Circuit Size</th>
                      <th className="text-left py-3 px-4 text-white/60">Dedicated?</th>
                    </tr>
                  </thead>
                  <tbody className="text-white/80">
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-semibold">Garage door opener</td>
                      <td className="py-3 px-4">5-8A (120V)</td>
                      <td className="py-3 px-4">15A or 20A</td>
                      <td className="py-3 px-4 text-white/60">Recommended</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-semibold">Air compressor</td>
                      <td className="py-3 px-4">12-15A (120V)</td>
                      <td className="py-3 px-4">20A dedicated</td>
                      <td className="py-3 px-4 text-white/60">Yes</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-semibold">Table saw</td>
                      <td className="py-3 px-4">12-15A (120V)</td>
                      <td className="py-3 px-4">20A dedicated</td>
                      <td className="py-3 px-4 text-white/60">Yes</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-semibold">Welder (small)</td>
                      <td className="py-3 px-4">20-50A (240V)</td>
                      <td className="py-3 px-4">30-50A, 240V</td>
                      <td className="py-3 px-4 text-white/60">Yes</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-semibold">Freezer</td>
                      <td className="py-3 px-4">3-6A (120V)</td>
                      <td className="py-3 px-4">15A or 20A</td>
                      <td className="py-3 px-4 text-white/60">Recommended</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-semibold">EV charger (Level 2)</td>
                      <td className="py-3 px-4">32-48A (240V)</td>
                      <td className="py-3 px-4">40A or 60A, 240V</td>
                      <td className="py-3 px-4 text-white/60">Required (NEC 625)</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section id="detached" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Detached Garage Feeder Sizing</h2>
              <p className="text-white/80 mb-4">
                Wiring a detached garage requires running a feeder from the main panel. NEC Article 225 covers outside branch circuits and feeders to separate buildings.
              </p>
              <div className="bg-purple-900/30 rounded-xl p-6 my-6">
                <h3 className="font-semibold text-purple-400 mb-3">Feeder Sizing Steps</h3>
                <ol className="space-y-2 text-white/70 list-decimal list-inside">
                  <li><strong>Calculate total load:</strong> Sum all connected loads</li>
                  <li><strong>Apply demand factors:</strong> Per NEC Article 220</li>
                  <li><strong>Size conductors:</strong> Based on load per NEC Table 310.16</li>
                  <li><strong>Check voltage drop:</strong> Keep below 3% for feeders</li>
                  <li><strong>Select wiring method:</strong> Underground or overhead</li>
                </ol>
              </div>
              <div className="overflow-x-auto my-6">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-white/20">
                      <th className="text-left py-3 px-4 text-white/60">Garage Use</th>
                      <th className="text-left py-3 px-4 text-white/60">Sub-Panel</th>
                      <th className="text-left py-3 px-4 text-white/60">Feeder (Cu)</th>
                    </tr>
                  </thead>
                  <tbody className="text-white/80">
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">Basic (lights + outlets)</td>
                      <td className="py-3 px-4">Not required</td>
                      <td className="py-3 px-4 font-mono">12 AWG (20A)</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">Workshop</td>
                      <td className="py-3 px-4">60A sub-panel</td>
                      <td className="py-3 px-4 font-mono">6 AWG</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">Workshop + EV charger</td>
                      <td className="py-3 px-4">100A sub-panel</td>
                      <td className="py-3 px-4 font-mono">3 AWG</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4">Full workshop + EV + HVAC</td>
                      <td className="py-3 px-4">125A sub-panel</td>
                      <td className="py-3 px-4 font-mono">1 AWG</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="bg-orange-900/30 rounded-xl p-6 my-6">
                <h3 className="font-semibold text-orange-400 mb-2">Voltage Drop for Long Runs</h3>
                <p className="text-white/70">
                  For detached garages 50-150 feet from the main panel, voltage drop is critical. NEC recommends no more than <strong>3% for feeders</strong> and <strong>5% total</strong>. Always calculate and upsize conductors as needed.
                </p>
              </div>
            </section>

            <section id="subpanel" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Sub-Panel Requirements</h2>
              <p className="text-white/80 mb-4">
                When a detached garage has multiple circuits, a sub-panel provides convenient distribution. NEC 250.32 covers grounding at separate buildings.
              </p>
              <div className="bg-cyan-900/30 rounded-xl p-6 my-6">
                <h3 className="font-semibold text-cyan-400 mb-3">Detached Building Grounding (NEC 250.32)</h3>
                <ul className="space-y-2 text-white/70">
                  <li><strong>Separate grounding electrode:</strong> Required &mdash; typically two ground rods 6&apos; apart</li>
                  <li><strong>4-wire feeder:</strong> Two hots, one neutral, one equipment ground</li>
                  <li><strong>Neutral isolation:</strong> Neutral must NOT be bonded to ground at sub-panel</li>
                  <li><strong>Grounding electrode conductor:</strong> Sized per NEC Table 250.66</li>
                </ul>
              </div>
              <div className="bg-red-900/20 rounded-xl p-6 my-6 border border-red-500/30">
                <h3 className="font-semibold text-red-400 mb-2">Critical: 3-Wire vs. 4-Wire Feeder</h3>
                <p className="text-white/70">
                  Older installations used a 3-wire feeder with neutral bonded at the sub-panel. This is <strong>no longer permitted</strong>. All new detached building feeders must be <strong>4-wire</strong> with the neutral floating (isolated) at the sub-panel.
                </p>
              </div>
            </section>

            <section id="ev" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">EV Charger Readiness</h2>
              <p className="text-white/80 mb-4">
                NEC Article 625 covers EV charging. Many jurisdictions now require EV-ready infrastructure in new construction.
              </p>
              <div className="overflow-x-auto my-6">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-white/20">
                      <th className="text-left py-3 px-4 text-white/60">Charger Level</th>
                      <th className="text-left py-3 px-4 text-white/60">Draw</th>
                      <th className="text-left py-3 px-4 text-white/60">Breaker</th>
                      <th className="text-left py-3 px-4 text-white/60">Wire (Cu)</th>
                    </tr>
                  </thead>
                  <tbody className="text-white/80">
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">Level 1 (1.4 kW)</td>
                      <td className="py-3 px-4">12A / 120V</td>
                      <td className="py-3 px-4">15A or 20A</td>
                      <td className="py-3 px-4 font-mono">14 or 12 AWG</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">Level 2 (7.7 kW)</td>
                      <td className="py-3 px-4">32A / 240V</td>
                      <td className="py-3 px-4">40A</td>
                      <td className="py-3 px-4 font-mono">8 AWG</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">Level 2 (9.6 kW)</td>
                      <td className="py-3 px-4">40A / 240V</td>
                      <td className="py-3 px-4">50A</td>
                      <td className="py-3 px-4 font-mono">6 AWG</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4">Level 2 (11.5 kW)</td>
                      <td className="py-3 px-4">48A / 240V</td>
                      <td className="py-3 px-4">60A</td>
                      <td className="py-3 px-4 font-mono">4 AWG</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="bg-purple-900/30 rounded-xl p-6 my-6">
                <h3 className="font-semibold text-purple-400 mb-3">EV Circuit Requirements (NEC 625)</h3>
                <ul className="space-y-2 text-white/70">
                  <li><strong>Continuous load:</strong> Circuit rated at 125% of charger nameplate</li>
                  <li><strong>Dedicated circuit:</strong> Required for each EV charging station</li>
                  <li><strong>GFCI protection:</strong> Required per NEC 2023</li>
                  <li><strong>Disconnect:</strong> Must be within sight of the EVSE</li>
                </ul>
              </div>
            </section>

            <section id="mistakes" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Common Inspection Failures</h2>
              <div className="space-y-4 my-6">
                <div className="bg-red-900/20 rounded-xl p-4 border border-red-500/30">
                  <p className="text-white font-semibold mb-2">1. Missing GFCI protection</p>
                  <p className="text-white/60 text-sm">All garage 125V receptacles require GFCI, including ceiling outlets for openers</p>
                </div>
                <div className="bg-red-900/20 rounded-xl p-4 border border-red-500/30">
                  <p className="text-white font-semibold mb-2">2. Neutral-ground bond at sub-panel</p>
                  <p className="text-white/60 text-sm">Sub-panels must have isolated (floating) neutral &mdash; only bond at main panel</p>
                </div>
                <div className="bg-red-900/20 rounded-xl p-4 border border-red-500/30">
                  <p className="text-white font-semibold mb-2">3. 3-wire feeder to detached garage</p>
                  <p className="text-white/60 text-sm">Current NEC requires 4-wire feeder: 2 hots + neutral + equipment ground</p>
                </div>
                <div className="bg-red-900/20 rounded-xl p-4 border border-red-500/30">
                  <p className="text-white font-semibold mb-2">4. Missing grounding electrode</p>
                  <p className="text-white/60 text-sm">Detached buildings require their own grounding electrode system</p>
                </div>
                <div className="bg-red-900/20 rounded-xl p-4 border border-red-500/30">
                  <p className="text-white font-semibold mb-2">5. No wall switch-controlled lighting</p>
                  <p className="text-white/60 text-sm">At least one lighting outlet must be wall switch-controlled at entry</p>
                </div>
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

            <section className="mt-12">
              <h2 className="text-2xl font-display font-bold mb-6">Related Articles</h2>
              <div className="grid md:grid-cols-2 gap-4">
                <Link href="/blog/bathroom-electrical-code-requirements" className="bg-white/5 hover:bg-white/10 rounded-xl p-6 transition-colors">
                  <span className="text-purple-400 text-sm">NEC Code</span>
                  <h3 className="font-semibold mt-2">Bathroom Electrical Code Requirements</h3>
                </Link>
                <Link href="/blog/nec-article-210-branch-circuits-guide" className="bg-white/5 hover:bg-white/10 rounded-xl p-6 transition-colors">
                  <span className="text-purple-400 text-sm">NEC Code</span>
                  <h3 className="font-semibold mt-2">NEC Article 210: Branch Circuits Guide</h3>
                </Link>
              </div>
            </section>
          </div>
        </article>
      </div>
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
