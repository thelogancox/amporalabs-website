import { Metadata } from "next";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import { BlogPostingJsonLd, BreadcrumbJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "NEC Article 300: General Wiring Methods Requirements Guide",
  description: "Comprehensive guide to NEC Article 300 general wiring methods. Learn conductor installation, underground burial depths, raceway requirements, fire stopping, securing and supporting, splices, and common inspection failures.",
  keywords: [
    "NEC Article 300",
    "wiring methods NEC",
    "underground wiring burial depth",
    "raceway installation requirements",
    "conductor protection NEC",
    "fire stopping electrical",
    "NEC 300.4 protection",
    "wiring in ducts plenums",
    "NEC securing supporting",
    "electrical wiring methods guide"
  ],
  alternates: {
    canonical: "https://amporalabs.com/blog/nec-article-300-wiring-methods",
  },
  openGraph: {
    title: "NEC Article 300: General Wiring Methods Requirements Guide - Ampora",
    description: "Complete guide to NEC Article 300 general wiring methods requirements for electricians.",
    url: "https://amporalabs.com/blog/nec-article-300-wiring-methods",
    type: "article",
    publishedTime: "2025-05-15",
  },
};

function HeroIllustration() {
  return (
    <svg viewBox="0 0 400 200" className="w-full h-48 md:h-64" aria-label="Wiring methods illustration showing conduits, cables, and raceways">
      <defs>
        <linearGradient id="wallGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#374151" />
          <stop offset="100%" stopColor="#1f2937" />
        </linearGradient>
        <linearGradient id="conduitGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#6b7280" />
          <stop offset="100%" stopColor="#4b5563" />
        </linearGradient>
        <linearGradient id="groundGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#78350f" />
          <stop offset="100%" stopColor="#451a03" />
        </linearGradient>
      </defs>

      {/* Wall section */}
      <rect x="20" y="10" width="160" height="120" fill="url(#wallGrad)" stroke="#6b7280" strokeWidth="1"/>
      <text x="100" y="8" textAnchor="middle" fill="#9ca3af" fontSize="8">WALL SECTION</text>

      {/* Stud framing */}
      <rect x="55" y="10" width="6" height="120" fill="#92400e" opacity="0.6"/>
      <rect x="105" y="10" width="6" height="120" fill="#92400e" opacity="0.6"/>
      <rect x="145" y="10" width="6" height="120" fill="#92400e" opacity="0.6"/>

      {/* NM cable through bored holes */}
      <circle cx="58" cy="60" r="6" fill="#1f2937" stroke="#4b5563" strokeWidth="1"/>
      <circle cx="108" cy="60" r="6" fill="#1f2937" stroke="#4b5563" strokeWidth="1"/>
      <circle cx="148" cy="60" r="6" fill="#1f2937" stroke="#4b5563" strokeWidth="1"/>
      <line x1="20" y1="60" x2="180" y2="60" stroke="#f59e0b" strokeWidth="3" strokeLinecap="round"/>
      <text x="100" y="78" textAnchor="middle" fill="#fbbf24" fontSize="7">NM Cable</text>

      {/* Nail plate on stud */}
      <rect x="103" y="50" width="12" height="20" fill="#9ca3af" stroke="#d1d5db" strokeWidth="1"/>
      <text x="109" y="46" textAnchor="middle" fill="#d1d5db" fontSize="5">PLATE</text>

      {/* EMT conduit section */}
      <rect x="20" y="95" width="160" height="12" rx="6" fill="url(#conduitGrad)" stroke="#9ca3af" strokeWidth="1"/>
      <text x="100" y="120" textAnchor="middle" fill="#9ca3af" fontSize="7">EMT Conduit</text>

      {/* Conduit strap */}
      <path d="M 70 89 Q 70 101 70 107 Q 70 113 76 113 L 76 89" fill="none" stroke="#d1d5db" strokeWidth="1.5"/>
      <path d="M 130 89 Q 130 101 130 107 Q 130 113 136 113 L 136 89" fill="none" stroke="#d1d5db" strokeWidth="1.5"/>

      {/* Underground section */}
      <rect x="210" y="80" width="180" height="110" fill="url(#groundGrad)" opacity="0.7"/>
      <text x="300" y="78" textAnchor="middle" fill="#9ca3af" fontSize="8">UNDERGROUND</text>

      {/* Ground surface line */}
      <line x1="210" y1="80" x2="390" y2="80" stroke="#65a30d" strokeWidth="2" strokeDasharray="4"/>
      <text x="215" y="76" fill="#65a30d" fontSize="6">Grade</text>

      {/* Direct burial cable */}
      <line x1="220" y1="140" x2="380" y2="140" stroke="#22d3ee" strokeWidth="4" strokeLinecap="round"/>
      <text x="300" y="155" textAnchor="middle" fill="#22d3ee" fontSize="7">Direct Burial Cable</text>

      {/* Burial depth indicator */}
      <line x1="240" y1="82" x2="240" y2="138" stroke="#fff" strokeWidth="1" strokeDasharray="3"/>
      <text x="248" y="115" fill="#fff" fontSize="6">24&quot;</text>
      <line x1="236" y1="82" x2="244" y2="82" stroke="#fff" strokeWidth="1"/>
      <line x1="236" y1="138" x2="244" y2="138" stroke="#fff" strokeWidth="1"/>

      {/* PVC conduit underground */}
      <rect x="280" y="110" width="100" height="10" rx="5" fill="#6366f1" stroke="#818cf8" strokeWidth="1"/>
      <text x="330" y="108" textAnchor="middle" fill="#818cf8" fontSize="6">PVC Conduit</text>

      {/* Burial depth for conduit */}
      <line x1="360" y1="82" x2="360" y2="108" stroke="#fff" strokeWidth="1" strokeDasharray="3"/>
      <text x="368" y="98" fill="#fff" fontSize="6">18&quot;</text>
      <line x1="356" y1="82" x2="364" y2="82" stroke="#fff" strokeWidth="1"/>
      <line x1="356" y1="108" x2="364" y2="108" stroke="#fff" strokeWidth="1"/>

      {/* Junction box */}
      <g transform="translate(210, 15)">
        <rect x="0" y="0" width="45" height="40" rx="3" fill="#374151" stroke="#8b5cf6" strokeWidth="2"/>
        <text x="22" y="15" textAnchor="middle" fill="#a78bfa" fontSize="6">JUNCTION</text>
        <text x="22" y="24" textAnchor="middle" fill="#a78bfa" fontSize="6">BOX</text>
        <line x1="45" y1="20" x2="80" y2="20" stroke="#f59e0b" strokeWidth="3"/>
        <line x1="0" y1="20" x2="-15" y2="20" stroke="#f59e0b" strokeWidth="3"/>
        {/* Splice symbol */}
        <circle cx="22" cy="32" r="3" fill="none" stroke="#fbbf24" strokeWidth="1"/>
      </g>

      {/* Raceway section */}
      <g transform="translate(300, 10)">
        <rect x="0" y="0" width="80" height="55" rx="3" fill="#1f2937" stroke="#374151" strokeWidth="1"/>
        <text x="40" y="14" textAnchor="middle" fill="#a78bfa" fontSize="7" fontWeight="bold">Raceway Types</text>
        <text x="10" y="26" fill="#9ca3af" fontSize="6">EMT</text>
        <rect x="35" y="20" width="35" height="5" rx="2.5" fill="#6b7280"/>
        <text x="10" y="38" fill="#9ca3af" fontSize="6">RMC</text>
        <rect x="35" y="32" width="35" height="6" rx="3" fill="#4b5563" stroke="#6b7280" strokeWidth="1"/>
        <text x="10" y="50" fill="#9ca3af" fontSize="6">PVC</text>
        <rect x="35" y="44" width="35" height="5" rx="2.5" fill="#6366f1"/>
      </g>

      {/* Title */}
      <text x="200" y="198" textAnchor="middle" fill="#a78bfa" fontSize="10" fontWeight="bold">NEC Article 300 — General Wiring Methods</text>
    </svg>
  );
}

export default function BlogPost() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navigation />
      <div className="pt-20">
        <BreadcrumbJsonLd
          items={[
            { name: "Home", url: "https://amporalabs.com" },
            { name: "Blog", url: "https://amporalabs.com/blog" },
            { name: "NEC Article 300 Wiring Methods", url: "https://amporalabs.com/blog/nec-article-300-wiring-methods" },
          ]}
        />
        <BlogPostingJsonLd
          headline="NEC Article 300: General Wiring Methods Requirements Guide"
          description="Comprehensive guide to NEC Article 300 covering conductor installation, underground wiring, raceway requirements, fire stopping, and common inspection failures."
          datePublished="2025-05-15"
          dateModified="2025-05-15"
          url="https://amporalabs.com/blog/nec-article-300-wiring-methods"
          wordCount={3800}
          keywords={["NEC Article 300", "wiring methods", "underground wiring", "raceway requirements", "conductor protection", "fire stopping"]}
        />

        <article className="max-w-4xl mx-auto px-6 py-12">
          {/* Breadcrumb */}
          <nav className="text-sm text-white/60 mb-8">
            <Link href="/" className="hover:text-white">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/blog" className="hover:text-white">Blog</Link>
            <span className="mx-2">/</span>
            <span className="text-white">NEC Article 300 Wiring Methods</span>
          </nav>

          {/* Article Header */}
          <header className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <span className="px-3 py-1 bg-purple-600/30 text-purple-300 text-sm font-medium rounded-full">
                NEC Code
              </span>
              <span className="text-white/40 text-sm">May 15, 2025</span>
              <span className="text-white/40 text-sm">14 min read</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6 leading-tight">
              NEC Article 300: General Wiring Methods Requirements Guide
            </h1>
            <p className="text-xl text-white/70">
              Article 300 is the foundation of wiring method requirements in the NEC. It applies to all wiring installations and covers everything from conductor grouping and physical protection to underground burial depths and fire stopping. Every electrician needs to know these rules.
            </p>
          </header>

          {/* Hero Illustration */}
          <div className="mb-12 bg-gradient-to-br from-purple-900/20 to-cyan-900/20 rounded-2xl p-6 border border-white/10">
            <HeroIllustration />
          </div>

          {/* Table of Contents */}
          <div className="bg-white/5 rounded-2xl p-6 mb-12">
            <h2 className="font-display font-bold mb-4">In This Guide</h2>
            <ul className="space-y-2 text-white/70">
              <li><a href="#scope" className="hover:text-purple-400">→ Scope of Article 300</a></li>
              <li><a href="#conductor-installation" className="hover:text-purple-400">→ Conductor Installation (300.3)</a></li>
              <li><a href="#physical-damage" className="hover:text-purple-400">→ Protection Against Physical Damage (300.4)</a></li>
              <li><a href="#underground" className="hover:text-purple-400">→ Underground Installations (300.5)</a></li>
              <li><a href="#temperature" className="hover:text-purple-400">→ Raceways Exposed to Different Temperatures (300.7)</a></li>
              <li><a href="#securing-supporting" className="hover:text-purple-400">→ Securing and Supporting (300.11)</a></li>
              <li><a href="#mechanical-continuity" className="hover:text-purple-400">→ Mechanical Continuity (300.12)</a></li>
              <li><a href="#splices-taps" className="hover:text-purple-400">→ Splices, Taps, and Conductor Length (300.13-300.15)</a></li>
              <li><a href="#fire-stopping" className="hover:text-purple-400">→ Spread of Fire or Products of Combustion (300.21)</a></li>
              <li><a href="#ducts-plenums" className="hover:text-purple-400">→ Wiring in Ducts and Plenums (300.22)</a></li>
              <li><a href="#common-violations" className="hover:text-purple-400">→ Common Violations and Inspection Failures</a></li>
            </ul>
          </div>

          {/* Article Content */}
          <div className="prose prose-invert prose-lg max-w-none">

            <section id="scope" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Scope of Article 300</h2>
              <p className="text-white/80 mb-4">
                NEC Article 300 covers general requirements for wiring methods and materials for all wiring installations. It applies unless modified by other articles in the NEC. This article is the baseline — think of it as the default set of rules that apply to every wiring method before the specific article for that wiring method (such as Article 334 for NM cable, Article 344 for RMC, or Article 358 for EMT) adds or modifies requirements.
              </p>
              <p className="text-white/80 mb-4">
                Article 300 addresses practical concerns that every electrician encounters daily: How do you protect cables passing through framing members? How deep must you bury underground wiring? How do you maintain fire separation when running cables through walls and floors? These are the questions Article 300 answers.
              </p>
              <div className="bg-purple-900/30 rounded-xl p-6 my-6">
                <h3 className="font-semibold text-purple-400 mb-2">Key Point: 300.1(A) - All Wiring Installations</h3>
                <p className="text-white/70">
                  Article 300 applies to all wiring installations unless a specific article overrides a particular requirement. When Article 300 and a specific wiring method article conflict, the specific article takes precedence. For example, Article 334 may permit NM cable without additional protection in certain situations where Article 300 would otherwise require it.
                </p>
              </div>
              <p className="text-white/80">
                The article also clarifies in 300.1(B) that it does not apply to the conductors that form an integral part of equipment, such as motors, controllers, motor control centers, or factory-assembled control equipment.
              </p>
            </section>

            <section id="conductor-installation" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Conductor Installation (300.3)</h2>

              <h3 className="text-xl font-semibold mt-6 mb-3">Single Conductors (300.3(A))</h3>
              <p className="text-white/80 mb-4">
                Single conductors specified in Table 310.104(A) must only be installed where part of a recognized wiring method of Chapter 3. You cannot run individual THHN conductors loose through open spaces — they must be installed in a raceway, cable tray, or other approved method.
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-3">Conductors of the Same Circuit (300.3(B))</h3>
              <p className="text-white/80 mb-4">
                All conductors of the same circuit — including the grounded conductor (neutral) and all equipment grounding conductors — <strong>must be contained within the same raceway, cable, trench, cord, or cable tray</strong>. This is one of the most important rules in Article 300.
              </p>
              <div className="bg-orange-900/30 rounded-xl p-6 my-6">
                <p className="text-white/90">
                  <strong>Why This Matters:</strong> Grouping all conductors of a circuit together prevents inductive heating. When AC current flows through a conductor, it creates a magnetic field. If the supply and return conductors are separated, the magnetic fields do not cancel, and eddy currents can be induced in surrounding metal — causing the metal to heat up. In steel conduit, this can be especially problematic and could lead to overheating and fire.
                </p>
              </div>

              <h3 className="text-xl font-semibold mt-6 mb-3">Parallel Conductors (300.3(B)(1))</h3>
              <p className="text-white/80 mb-4">
                When conductors are installed in parallel as permitted in 310.10(G), the paralleled conductors in each raceway or cable must have the same characteristics: same length, same conductor material (copper or aluminum), same size in circular mil area, same insulation type, and same terminations. Each raceway or cable must also contain one conductor of each phase plus the neutral and equipment grounding conductor.
              </p>
              <div className="bg-white/5 rounded-xl p-6 my-6">
                <h4 className="font-semibold text-white mb-3">Parallel Conductor Example</h4>
                <p className="text-white/70 text-sm mb-3">For a 400A service using parallel 3/0 AWG copper THHN conductors per phase:</p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-green-900/20 rounded-lg p-4">
                    <h5 className="font-semibold text-green-400 text-sm mb-1">Correct</h5>
                    <p className="text-white/60 text-sm">Raceway 1: A, B, C, N, G</p>
                    <p className="text-white/60 text-sm">Raceway 2: A, B, C, N, G</p>
                    <p className="text-white/60 text-sm">(Same wire in each raceway)</p>
                  </div>
                  <div className="bg-red-900/20 rounded-lg p-4">
                    <h5 className="font-semibold text-red-400 text-sm mb-1">Violation</h5>
                    <p className="text-white/60 text-sm">Raceway 1: A, A, B, B</p>
                    <p className="text-white/60 text-sm">Raceway 2: C, C, N, N</p>
                    <p className="text-white/60 text-sm">(Phases separated)</p>
                  </div>
                </div>
              </div>
            </section>

            <section id="physical-damage" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Protection Against Physical Damage (300.4)</h2>
              <p className="text-white/80 mb-4">
                Section 300.4 is one of the most frequently cited sections during inspections. It addresses how cables and raceways must be protected when passing through or along framing members.
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-3">Bored Holes (300.4(A)(1))</h3>
              <p className="text-white/80 mb-4">
                When cables or raceways are installed through bored holes in wood framing members (joists, rafters, studs), the edge of the hole must be at least <strong>1-1/4 inches from the nearest edge</strong> of the framing member. If you cannot maintain this distance, a steel plate or bushing at least 1/16 inch thick must be installed to protect the cable from nail or screw penetration.
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-3">Notches in Wood (300.4(A)(2))</h3>
              <p className="text-white/80 mb-4">
                When cables are laid in notches in wood studs, joists, or rafters, a steel plate at least 1/16 inch thick must be installed before the building finish is applied. This protects the cable from nails and screws driven during drywall installation or finish work.
              </p>

              <div className="bg-white/5 rounded-xl p-6 my-6">
                <h4 className="font-semibold text-white mb-3">300.4 Quick Reference: Protection Requirements</h4>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <span className="text-purple-400 font-bold text-sm mt-0.5">300.4(A)(1)</span>
                    <p className="text-white/70 text-sm">Bored holes in wood: 1-1/4&quot; minimum from edge, or use steel plate</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-purple-400 font-bold text-sm mt-0.5">300.4(A)(2)</span>
                    <p className="text-white/70 text-sm">Notches in wood: Always requires steel nail plate</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-purple-400 font-bold text-sm mt-0.5">300.4(B)(1)</span>
                    <p className="text-white/70 text-sm">Steel studs/joists: Cables must be protected by bushings or grommets</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-purple-400 font-bold text-sm mt-0.5">300.4(D)</span>
                    <p className="text-white/70 text-sm">Cables parallel to framing: 1-1/4&quot; setback from edge, or use nail plate</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-purple-400 font-bold text-sm mt-0.5">300.4(E)</span>
                    <p className="text-white/70 text-sm">Shallow grooves: Cables in shallow grooves must be protected by steel plates at least 1/16&quot; thick</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-purple-400 font-bold text-sm mt-0.5">300.4(G)</span>
                    <p className="text-white/70 text-sm">Insulated fittings: Required where conductors 4 AWG and larger enter enclosures with raceways, unless bushed</p>
                  </div>
                </div>
              </div>

              <h3 className="text-xl font-semibold mt-6 mb-3">Cables Through Metal Framing (300.4(B))</h3>
              <p className="text-white/80 mb-4">
                When NM cable, BX (AC cable), or other cables pass through steel studs or steel joists, the cable must be protected by a listed bushing or listed grommet that covers the full opening. The sharp edges of metal framing members can easily cut through cable insulation, so this protection is mandatory regardless of the setback distance.
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-3">Cables Parallel to Framing (300.4(D))</h3>
              <p className="text-white/80 mb-4">
                When cables are run parallel to framing members (such as along the face of a stud or joist), the cable must be set back at least 1-1/4 inches from the nearest edge of the framing member. If this setback cannot be maintained, a steel plate at least 1/16 inch thick and of appropriate width must protect the cable.
              </p>
            </section>

            <section id="underground" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Underground Installations (300.5)</h2>
              <p className="text-white/80 mb-4">
                Section 300.5 covers the requirements for underground wiring installations, including minimum burial depths, protection from damage, and specific conditions for different wiring methods. Table 300.5 is the key reference for burial depth requirements.
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-3">Minimum Cover Requirements (Table 300.5)</h3>
              <p className="text-white/80 mb-4">
                The required burial depth varies depending on the wiring method and the location. Here are the most commonly referenced minimum cover depths:
              </p>

              <div className="overflow-x-auto my-6">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-white/20">
                      <th className="text-left py-3 px-4 text-white/60">Wiring Method / Circuit Type</th>
                      <th className="text-left py-3 px-4 text-white/60">Under Buildings</th>
                      <th className="text-left py-3 px-4 text-white/60">Under Streets/Highways</th>
                      <th className="text-left py-3 px-4 text-white/60">Residential Driveways</th>
                      <th className="text-left py-3 px-4 text-white/60">Other Locations</th>
                    </tr>
                  </thead>
                  <tbody className="text-white/80">
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">Direct burial cables or conductors</td>
                      <td className="py-3 px-4">0&quot; (in raceway)</td>
                      <td className="py-3 px-4">24&quot;</td>
                      <td className="py-3 px-4">18&quot;</td>
                      <td className="py-3 px-4">24&quot;</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">Rigid metal conduit (RMC) or IMC</td>
                      <td className="py-3 px-4">0&quot;</td>
                      <td className="py-3 px-4">24&quot;</td>
                      <td className="py-3 px-4">6&quot;</td>
                      <td className="py-3 px-4">6&quot;</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">PVC conduit (Schedule 80)</td>
                      <td className="py-3 px-4">0&quot;</td>
                      <td className="py-3 px-4">24&quot;</td>
                      <td className="py-3 px-4">12&quot;</td>
                      <td className="py-3 px-4">18&quot;</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">Residential 120V, 20A GFCI, no direct burial</td>
                      <td className="py-3 px-4">0&quot; (in raceway)</td>
                      <td className="py-3 px-4">24&quot;</td>
                      <td className="py-3 px-4">12&quot;</td>
                      <td className="py-3 px-4">12&quot;</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4">Low-voltage landscape lighting (30V or less)</td>
                      <td className="py-3 px-4">0&quot; (in raceway)</td>
                      <td className="py-3 px-4">24&quot;</td>
                      <td className="py-3 px-4">6&quot;</td>
                      <td className="py-3 px-4">6&quot;</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="text-white/70 text-sm mb-4">
                <strong>Note:</strong> Depths are measured from the top of the cable or raceway to finished grade. Under concrete slabs at least 4 inches thick, direct burial depths may be reduced in certain cases.
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-3">Additional Underground Requirements</h3>
              <div className="space-y-4 my-6">
                <div className="bg-white/5 rounded-xl p-4">
                  <h4 className="font-semibold text-white">Protection From Damage (300.5(D))</h4>
                  <p className="text-white/60 text-sm mt-1">Direct-buried conductors and cables emerging from the ground must be protected by enclosures or raceways extending from the minimum cover distance below grade to a point at least 8 feet above finished grade. Also required where subject to physical damage.</p>
                </div>
                <div className="bg-white/5 rounded-xl p-4">
                  <h4 className="font-semibold text-white">Backfill (300.5(F))</h4>
                  <p className="text-white/60 text-sm mt-1">Backfill must not damage cables or raceways or their insulation. Large rocks, paving materials, cinders, and similar materials must not be placed in the trench without suitable protection — such as a layer of clean sand or fine-screened earth around the cable.</p>
                </div>
                <div className="bg-white/5 rounded-xl p-4">
                  <h4 className="font-semibold text-white">Raceway Seals (300.5(G))</h4>
                  <p className="text-white/60 text-sm mt-1">Conduits or raceways through which moisture may contact energized live parts must be sealed or plugged at either or both ends. Spare or unused raceways must also be sealed. This prevents water migration into panels and enclosures.</p>
                </div>
                <div className="bg-white/5 rounded-xl p-4">
                  <h4 className="font-semibold text-white">Warning Ribbon (300.5(D)(3))</h4>
                  <p className="text-white/60 text-sm mt-1">Underground service conductors that are not encased in concrete and are buried 18 inches or more below grade must have a warning ribbon placed in the trench at least 12 inches above the conductors.</p>
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
                  <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/></svg>
                  Download Free
                </a>
              </div>
            </div>

            <section id="temperature" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Raceways Exposed to Different Temperatures (300.7)</h2>
              <p className="text-white/80 mb-4">
                When a raceway passes from one area to another where there is a significant temperature difference — such as from a heated interior to an unheated exterior, or from a refrigerated space to an ambient area — the raceway must be sealed to prevent condensation from forming inside.
              </p>
              <p className="text-white/80 mb-4">
                Warm, moist air drawn into a cold raceway will condense, and water will accumulate inside the conduit. This can damage conductor insulation, cause corrosion, and create shock hazards. The seal can be made with a listed fitting, duct seal compound, or other approved method.
              </p>
              <div className="bg-cyan-900/30 rounded-xl p-6 my-6">
                <h3 className="font-semibold text-cyan-400 mb-2">Expansion Fittings (300.7(B))</h3>
                <p className="text-white/70">
                  Raceways exposed to large temperature swings must be provided with expansion fittings or other means to compensate for thermal expansion and contraction. PVC conduit is particularly susceptible to thermal expansion. A 100-foot run of PVC can expand or contract several inches between summer and winter temperatures. Without expansion fittings, the raceway can buckle, pull apart at couplings, or damage connected equipment.
                </p>
              </div>
            </section>

            <section id="securing-supporting" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Securing and Supporting (300.11)</h2>
              <p className="text-white/80 mb-4">
                Section 300.11 addresses how raceways, cable assemblies, boxes, cabinets, and fittings must be secured and supported. The key principle is that wiring methods must be independently supported — they cannot rely on other systems for support.
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-3">Ceiling Support Independence (300.11(A))</h3>
              <p className="text-white/80 mb-4">
                Wiring located within the cavity of a fire-rated floor-ceiling or roof-ceiling assembly must not be secured to or supported by the ceiling assembly, including the ceiling grid. The wiring must be independently supported by its own hangers, trapeze mounts, or other approved methods secured to the building structure.
              </p>
              <div className="bg-red-900/20 border border-red-500/30 rounded-xl p-6 my-6">
                <h3 className="font-semibold text-red-400 mb-2">Common Violation</h3>
                <p className="text-white/60 text-sm">Laying cables or raceways directly on a suspended ceiling grid is a code violation. In a fire, the ceiling can collapse, and wiring attached to it would fall into the occupied space below, creating additional hazards. Wiring must be supported independently from the structure above.</p>
              </div>

              <h3 className="text-xl font-semibold mt-6 mb-3">Non-Fire-Rated Assemblies (300.11(A)(2))</h3>
              <p className="text-white/80 mb-4">
                In non-fire-rated ceiling assemblies, cables and raceways are permitted to be supported by the ceiling support wires, but only if the support wires are identified with a distinguishing marking (separate from the wires supporting the ceiling grid) or if the wires are installed in addition to the ceiling support wires.
              </p>
            </section>

            <section id="mechanical-continuity" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Mechanical Continuity (300.12)</h2>
              <p className="text-white/80 mb-4">
                Raceways and cable sheaths must be mechanically continuous between cabinets, boxes, fittings, or other enclosures or outlets. This means every raceway run must be complete — no gaps, no missing connectors, and no loose fittings.
              </p>
              <p className="text-white/80 mb-4">
                This requirement ensures that the wiring method provides its intended physical protection to the conductors throughout the entire run. A gap in a raceway exposes conductors to physical damage and eliminates the equipment grounding path through the raceway (for metal raceways).
              </p>
              <div className="bg-white/5 rounded-xl p-6 my-6">
                <h4 className="font-semibold text-white mb-3">What Mechanical Continuity Means in Practice</h4>
                <ul className="text-white/70 text-sm space-y-2">
                  <li>Every conduit joint must be tight and secure — no loose set-screw connectors</li>
                  <li>EMT couplings must be fully engaged</li>
                  <li>MC cable connectors must be properly installed with the anti-short bushing in place</li>
                  <li>PVC joints must be properly solvent-welded</li>
                  <li>Raceways entering boxes must use proper connectors — not simply poked through knockouts</li>
                </ul>
              </div>
            </section>

            <section id="splices-taps" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Splices, Taps, and Conductor Length (300.13-300.15)</h2>

              <h3 className="text-xl font-semibold mt-6 mb-3">Length of Free Conductors at Outlets (300.14)</h3>
              <p className="text-white/80 mb-4">
                At each outlet, junction, and switch point, a minimum of <strong>6 inches of free conductor</strong> must be left for the making of joints or the connection of luminaires or devices. The conductor must extend at least 3 inches outside the box opening. This requirement ensures that electricians have enough wire to make proper connections and that devices can be pulled out of the box for servicing without disconnecting the wires.
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-3">Continuity of Grounded Conductors (300.13(B))</h3>
              <p className="text-white/80 mb-4">
                The continuity of a grounded conductor (neutral) in a multiwire branch circuit must not depend on device connections such as the screw terminals of a receptacle. In other words, the neutral in a multiwire branch circuit must be <strong>spliced together with a pigtail to the device</strong>, not simply daisy-chained from one receptacle screw terminal to the next.
              </p>
              <div className="bg-orange-900/30 rounded-xl p-6 my-6">
                <p className="text-white/90">
                  <strong>Why Pigtail the Neutral?</strong> If a neutral is fed through a receptacle on its screw terminals and that receptacle is removed, the neutral is broken for all downstream loads on the multiwire circuit. With two hot legs sharing one neutral, the loss of the neutral can result in overvoltage on one leg and undervoltage on the other — damaging equipment and creating a fire hazard.
                </p>
              </div>

              <h3 className="text-xl font-semibold mt-6 mb-3">Boxes, Conduit Bodies, or Fittings Required (300.15)</h3>
              <p className="text-white/80 mb-4">
                A box or conduit body must be installed at each conductor splice point, outlet, switch point, junction point, or pull point. Splices are not permitted within a raceway itself. Every splice must be accessible — meaning it must be reachable without removing any part of the building structure. Exceptions exist for specific wiring methods such as:
              </p>
              <ul className="list-disc list-inside text-white/70 space-y-2 mb-4">
                <li>Splices in wireways (Article 376)</li>
                <li>Splices in surface metal raceways with removable covers</li>
                <li>Splices in cable trays (Article 392)</li>
                <li>Direct-buried splice kits listed for the purpose</li>
              </ul>
            </section>

            <section id="fire-stopping" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Spread of Fire or Products of Combustion (300.21)</h2>
              <p className="text-white/80 mb-4">
                Electrical installations through fire-rated walls, partitions, floors, and ceilings must be <strong>firestopped</strong> using approved methods to maintain the fire-resistance rating. This is one of the most critical requirements in Article 300 and one that is frequently violated.
              </p>
              <p className="text-white/80 mb-4">
                When you penetrate a fire-rated assembly — whether by running conduit, cable, or cable tray through it — you have compromised the fire barrier. The penetration must be sealed with a listed firestop system that restores the original fire-resistance rating of the assembly.
              </p>
              <div className="bg-white/5 rounded-xl p-6 my-6">
                <h4 className="font-semibold text-white mb-3">Firestopping Requirements</h4>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <span className="text-red-400 font-bold text-sm mt-0.5">Must Seal</span>
                    <p className="text-white/70 text-sm">Any penetration through a fire-rated wall, floor, or ceiling assembly</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-cyan-400 font-bold text-sm mt-0.5">Materials</span>
                    <p className="text-white/70 text-sm">Listed firestop caulk, putty pads, intumescent collars, mineral wool with sealant, or listed firestop devices</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-purple-400 font-bold text-sm mt-0.5">Testing</span>
                    <p className="text-white/70 text-sm">Firestop systems must be tested per ASTM E814 (UL 1479) and listed for the specific penetration type</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-orange-400 font-bold text-sm mt-0.5">Draftstopping</span>
                    <p className="text-white/70 text-sm">Even non-fire-rated assemblies may require draftstopping to prevent the spread of combustion products</p>
                  </div>
                </div>
              </div>
              <p className="text-white/80">
                Inspectors pay close attention to firestopping, especially in commercial and multi-family residential construction. Missing or improperly installed firestop is one of the most common reasons for failed inspections in these occupancies.
              </p>
            </section>

            <section id="ducts-plenums" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Wiring in Ducts and Plenums (300.22)</h2>
              <p className="text-white/80 mb-4">
                Section 300.22 restricts what types of wiring can be installed in ducts or plenum spaces used for environmental air handling. The concern is that in a fire, certain wiring materials can produce toxic smoke that would be distributed throughout the building by the HVAC system.
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-3">Ducts for Dust, Loose Stock, or Vapor Removal (300.22(A))</h3>
              <p className="text-white/80 mb-4">
                No wiring of any type is permitted in ducts used to transport dust, loose stock, or flammable vapors. Only wiring methods for the operation and maintenance of the duct system itself may be installed.
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-3">Ducts Used for Environmental Air (300.22(B))</h3>
              <p className="text-white/80 mb-4">
                In ducts specifically fabricated for environmental air, only the following wiring methods are permitted:
              </p>
              <ul className="list-disc list-inside text-white/70 space-y-2 mb-4">
                <li>Metal raceways without nonmetallic cover</li>
                <li>Type MI cable (mineral insulated)</li>
                <li>Type MC cable without nonmetallic cover</li>
              </ul>

              <h3 className="text-xl font-semibold mt-6 mb-3">Other Spaces Used for Environmental Air (300.22(C))</h3>
              <p className="text-white/80 mb-4">
                The ceiling cavity above a suspended ceiling that is used as a return air plenum is one of the most common &quot;other spaces used for environmental air.&quot; In these spaces, wiring methods are more flexible but still restricted:
              </p>
              <div className="grid md:grid-cols-2 gap-4 my-6">
                <div className="bg-green-900/20 rounded-xl p-6">
                  <h4 className="font-semibold text-green-400 mb-2">Permitted</h4>
                  <ul className="text-white/70 text-sm space-y-1">
                    <li>EMT, RMC, IMC</li>
                    <li>Type MI, MC cable</li>
                    <li>Type AC cable</li>
                    <li>Listed plenum-rated cables (CMP, CATVP, etc.)</li>
                    <li>Flexible metal conduit (limited length)</li>
                    <li>Liquidtight flex (limited length)</li>
                  </ul>
                </div>
                <div className="bg-red-900/20 rounded-xl p-6">
                  <h4 className="font-semibold text-red-400 mb-2">Not Permitted</h4>
                  <ul className="text-white/70 text-sm space-y-1">
                    <li>NM cable (Romex)</li>
                    <li>Non-plenum-rated communication cables</li>
                    <li>PVC conduit</li>
                    <li>ENT (Smurf tube)</li>
                    <li>Non-metallic wireways</li>
                    <li>Standard jacketed cables</li>
                  </ul>
                </div>
              </div>
            </section>

            <section id="common-violations" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Common Violations and Inspection Failures</h2>
              <p className="text-white/80 mb-4">
                Article 300 violations are among the most frequently cited issues during electrical inspections. Here are the most common problems and how to avoid them:
              </p>
              <div className="space-y-4 my-6">
                <div className="bg-red-900/20 border border-red-500/30 rounded-xl p-6">
                  <h3 className="font-semibold text-red-400 mb-2">Missing Nail Plates (300.4)</h3>
                  <p className="text-white/60 text-sm">Cables within 1-1/4 inches of the framing edge without steel protection plates. This is the single most common Article 300 violation in residential work. Carry a box of nail plates on every rough-in.</p>
                </div>
                <div className="bg-red-900/20 border border-red-500/30 rounded-xl p-6">
                  <h3 className="font-semibold text-red-400 mb-2">Insufficient Burial Depth (300.5)</h3>
                  <p className="text-white/60 text-sm">Underground wiring not buried to the required depth per Table 300.5. Inspectors may require proof of depth, especially for direct burial installations. Take photos during the open trench inspection.</p>
                </div>
                <div className="bg-red-900/20 border border-red-500/30 rounded-xl p-6">
                  <h3 className="font-semibold text-red-400 mb-2">Unsealed Raceways (300.5(G) / 300.7)</h3>
                  <p className="text-white/60 text-sm">Failing to seal conduits entering buildings from underground, or conduits passing between areas with significant temperature differences. Water intrusion into panels is a major safety concern.</p>
                </div>
                <div className="bg-red-900/20 border border-red-500/30 rounded-xl p-6">
                  <h3 className="font-semibold text-red-400 mb-2">Cables Resting on Ceiling Grid (300.11)</h3>
                  <p className="text-white/60 text-sm">Wiring in fire-rated assemblies must be independently supported. Simply laying MC cable or NM cable on a suspended ceiling T-bar grid is a violation in fire-rated assemblies.</p>
                </div>
                <div className="bg-red-900/20 border border-red-500/30 rounded-xl p-6">
                  <h3 className="font-semibold text-red-400 mb-2">Insufficient Free Conductor Length (300.14)</h3>
                  <p className="text-white/60 text-sm">Less than 6 inches of free conductor at outlets and junction boxes, or less than 3 inches extending past the box opening. Short wires make proper connections difficult and increase the risk of loose connections.</p>
                </div>
                <div className="bg-red-900/20 border border-red-500/30 rounded-xl p-6">
                  <h3 className="font-semibold text-red-400 mb-2">Missing Firestop at Penetrations (300.21)</h3>
                  <p className="text-white/60 text-sm">Penetrations through fire-rated walls and floors without listed firestop materials. This is a serious life-safety violation that can have consequences beyond just a failed inspection.</p>
                </div>
                <div className="bg-red-900/20 border border-red-500/30 rounded-xl p-6">
                  <h3 className="font-semibold text-red-400 mb-2">NM Cable in Plenum Spaces (300.22)</h3>
                  <p className="text-white/60 text-sm">Installing NM cable (Romex) in ceiling cavities used as return air plenums. If the space above the ceiling is used for air handling, only plenum-rated wiring methods are allowed.</p>
                </div>
                <div className="bg-red-900/20 border border-red-500/30 rounded-xl p-6">
                  <h3 className="font-semibold text-red-400 mb-2">Separated Circuit Conductors (300.3(B))</h3>
                  <p className="text-white/60 text-sm">Running phase conductors through separate metal conduits or raceways. All conductors of a circuit must be grouped together to prevent inductive heating of the raceway.</p>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Quick Reference: Key Article 300 Sections</h2>
              <div className="overflow-x-auto my-6">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-white/20">
                      <th className="text-left py-3 px-4 text-white/60">Section</th>
                      <th className="text-left py-3 px-4 text-white/60">Topic</th>
                      <th className="text-left py-3 px-4 text-white/60">Key Requirement</th>
                    </tr>
                  </thead>
                  <tbody className="text-white/80">
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-mono text-purple-400">300.3(B)</td>
                      <td className="py-3 px-4">Conductor grouping</td>
                      <td className="py-3 px-4">All circuit conductors in same raceway/cable</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-mono text-purple-400">300.4(A)</td>
                      <td className="py-3 px-4">Bored holes/notches</td>
                      <td className="py-3 px-4">1-1/4&quot; setback or steel nail plate</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-mono text-purple-400">300.4(B)</td>
                      <td className="py-3 px-4">Metal framing</td>
                      <td className="py-3 px-4">Listed bushings or grommets required</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-mono text-purple-400">300.5</td>
                      <td className="py-3 px-4">Underground wiring</td>
                      <td className="py-3 px-4">Minimum cover per Table 300.5</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-mono text-purple-400">300.7</td>
                      <td className="py-3 px-4">Temperature differentials</td>
                      <td className="py-3 px-4">Seal raceways and provide expansion fittings</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-mono text-purple-400">300.11</td>
                      <td className="py-3 px-4">Support</td>
                      <td className="py-3 px-4">Independent support in fire-rated assemblies</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-mono text-purple-400">300.12</td>
                      <td className="py-3 px-4">Mechanical continuity</td>
                      <td className="py-3 px-4">Complete raceway between enclosures</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-mono text-purple-400">300.13(B)</td>
                      <td className="py-3 px-4">Neutral continuity</td>
                      <td className="py-3 px-4">Pigtail neutrals in multiwire circuits</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-mono text-purple-400">300.14</td>
                      <td className="py-3 px-4">Free conductor length</td>
                      <td className="py-3 px-4">6&quot; minimum, 3&quot; past box opening</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-mono text-purple-400">300.15</td>
                      <td className="py-3 px-4">Boxes required</td>
                      <td className="py-3 px-4">Box at every splice, outlet, switch, junction</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-mono text-purple-400">300.21</td>
                      <td className="py-3 px-4">Fire stopping</td>
                      <td className="py-3 px-4">Seal penetrations in fire-rated assemblies</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-mono text-purple-400">300.22</td>
                      <td className="py-3 px-4">Ducts and plenums</td>
                      <td className="py-3 px-4">Restricted wiring methods in air-handling spaces</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Practical Tips for the Field</h2>
              <p className="text-white/80 mb-4">
                Article 300 touches nearly every aspect of electrical installation. Here are practical tips to keep your work compliant:
              </p>
              <div className="bg-gradient-to-r from-purple-900/30 to-cyan-900/30 rounded-xl p-6 my-6">
                <ol className="text-white/80 space-y-3">
                  <li><strong>1.</strong> Always carry nail plates — they are cheap insurance against a failed inspection and they protect your work from trades that follow.</li>
                  <li><strong>2.</strong> Photograph underground installations before backfilling. Show a tape measure for depth verification. Inspectors may not be available when the trench is open.</li>
                  <li><strong>3.</strong> Use duct seal on every conduit that enters a building from underground or transitions between temperature zones.</li>
                  <li><strong>4.</strong> Leave generous conductor lengths at boxes — 8 to 10 inches instead of the minimum 6. Future serviceability depends on it.</li>
                  <li><strong>5.</strong> Always pigtail neutrals in multiwire branch circuits. It is good practice to pigtail all neutrals, but it is required on multiwire circuits.</li>
                  <li><strong>6.</strong> Use independent support wires in fire-rated ceiling assemblies. Never lay cables on the ceiling grid.</li>
                  <li><strong>7.</strong> Keep firestop materials on the truck. Seal penetrations as you make them rather than trying to come back later.</li>
                </ol>
              </div>
              <p className="text-white/80">
                Mastering Article 300 is essential because it applies to every installation. Whether you are wiring a single-family home or a commercial high-rise, these general wiring method requirements form the basis of a safe and code-compliant installation.
              </p>
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
                <Link href="/blog/nec-article-250-grounding-guide" className="bg-white/5 hover:bg-white/10 rounded-xl p-6 transition-colors">
                  <span className="text-purple-400 text-sm">NEC Code</span>
                  <h3 className="font-semibold mt-2">NEC Article 250: Grounding & Bonding Guide</h3>
                </Link>
                <Link href="/blog/conduit-fill-calculation-guide" className="bg-white/5 hover:bg-white/10 rounded-xl p-6 transition-colors">
                  <span className="text-cyan-400 text-sm">Calculations</span>
                  <h3 className="font-semibold mt-2">Conduit Fill Calculation Guide</h3>
                </Link>
                <Link href="/blog/underground-wiring-installation-guide" className="bg-white/5 hover:bg-white/10 rounded-xl p-6 transition-colors">
                  <span className="text-green-400 text-sm">Installation</span>
                  <h3 className="font-semibold mt-2">Underground Wiring Installation Guide</h3>
                </Link>
                <Link href="/blog/electrical-inspection-checklist" className="bg-white/5 hover:bg-white/10 rounded-xl p-6 transition-colors">
                  <span className="text-orange-400 text-sm">Inspections</span>
                  <h3 className="font-semibold mt-2">Electrical Inspection Checklist</h3>
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
