import { Metadata } from "next";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import { BreadcrumbJsonLd, BlogPostingJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "NFPA 70E Electrical Safety: Arc Flash PPE & Lockout/Tagout Guide",
  description: "Complete guide to NFPA 70E electrical safety requirements. Learn arc flash PPE categories, incident energy analysis, lockout/tagout procedures, approach boundaries, and how to establish an electrically safe work condition.",
  keywords: [
    "NFPA 70E",
    "electrical safety",
    "arc flash PPE",
    "arc flash categories",
    "lockout tagout electrical",
    "LOTO procedures",
    "arc flash hazard analysis",
    "incident energy",
    "electrical PPE requirements",
    "arc flash boundary",
    "limited approach boundary",
    "restricted approach boundary",
    "electrically safe work condition",
    "qualified electrical worker",
    "arc rated clothing",
    "electrical safety program"
  ],
  alternates: {
    canonical: "https://amporalabs.com/blog/electrical-safety-nfpa-70e",
  },
  openGraph: {
    title: "NFPA 70E Electrical Safety: Arc Flash PPE & LOTO Guide - Ampora",
    description: "Master NFPA 70E requirements for arc flash protection, PPE categories, lockout/tagout, and establishing electrically safe work conditions.",
    url: "https://amporalabs.com/blog/electrical-safety-nfpa-70e",
    type: "article",
  },
};

function HeroIllustration() {
  return (
    <svg viewBox="0 0 400 180" className="w-full h-40 md:h-48" aria-label="NFPA 70E approach boundaries diagram">
      {/* Background */}
      <rect x="10" y="10" width="380" height="160" rx="4" fill="#1f2937" stroke="#374151" strokeWidth="1"/>

      {/* Arc Flash Boundary - Outer */}
      <ellipse cx="200" cy="100" rx="170" ry="65" fill="#ef4444" fillOpacity="0.15" stroke="#ef4444" strokeWidth="1.5" strokeDasharray="8,4"/>
      <text x="45" y="45" fill="#ef4444" fontSize="8" fontWeight="bold">ARC FLASH BOUNDARY</text>

      {/* Limited Approach Boundary */}
      <ellipse cx="200" cy="100" rx="120" ry="48" fill="#f59e0b" fillOpacity="0.2" stroke="#f59e0b" strokeWidth="1.5" strokeDasharray="6,3"/>
      <text x="95" y="58" fill="#f59e0b" fontSize="7" fontWeight="bold">LIMITED APPROACH</text>

      {/* Restricted Approach Boundary */}
      <ellipse cx="200" cy="100" rx="70" ry="32" fill="#eab308" fillOpacity="0.25" stroke="#eab308" strokeWidth="1.5" strokeDasharray="4,2"/>
      <text x="153" y="75" fill="#eab308" fontSize="6" fontWeight="bold">RESTRICTED</text>

      {/* Prohibited Approach Boundary */}
      <ellipse cx="200" cy="100" rx="35" ry="18" fill="#dc2626" fillOpacity="0.3" stroke="#dc2626" strokeWidth="2"/>
      <text x="175" y="97" fill="#dc2626" fontSize="5" fontWeight="bold">PROHIBITED</text>

      {/* Equipment */}
      <rect x="185" y="95" width="30" height="20" rx="2" fill="#374151" stroke="#6b7280" strokeWidth="1.5"/>
      <text x="200" y="108" textAnchor="middle" fill="#9ca3af" fontSize="6">EQUIP</text>

      {/* Distance Labels */}
      <g transform="translate(200, 130)">
        <line x1="-170" y1="0" x2="-35" y2="0" stroke="#ef4444" strokeWidth="1"/>
        <text x="-100" y="-3" textAnchor="middle" fill="#ef4444" fontSize="6">Arc Flash = 4+ ft (varies)</text>
      </g>

      {/* Qualified Person Icon */}
      <g transform="translate(50, 90)">
        <circle cx="10" cy="5" r="5" fill="#22c55e"/>
        <path d="M 10 10 L 10 22 M 5 15 L 15 15 M 10 22 L 5 32 M 10 22 L 15 32" stroke="#22c55e" strokeWidth="2" fill="none"/>
        <text x="10" y="45" textAnchor="middle" fill="#22c55e" fontSize="6">QUALIFIED</text>
      </g>

      {/* Unqualified Person Icon */}
      <g transform="translate(320, 85)">
        <circle cx="10" cy="5" r="5" fill="#3b82f6"/>
        <path d="M 10 10 L 10 22 M 5 15 L 15 15 M 10 22 L 5 32 M 10 22 L 15 32" stroke="#3b82f6" strokeWidth="2" fill="none"/>
        <text x="10" y="45" textAnchor="middle" fill="#3b82f6" fontSize="6">UNQUALIFIED</text>
        <line x1="-15" y1="5" x2="35" y2="5" stroke="#ef4444" strokeWidth="2"/>
        <text x="10" y="55" textAnchor="middle" fill="#ef4444" fontSize="5">STOP HERE</text>
      </g>

      {/* Legend */}
      <g transform="translate(280, 145)">
        <rect x="0" y="0" width="8" height="6" fill="#ef4444" fillOpacity="0.3"/>
        <text x="12" y="5" fill="#9ca3af" fontSize="5">Arc Flash Boundary</text>
        <rect x="0" y="10" width="8" height="6" fill="#f59e0b" fillOpacity="0.3"/>
        <text x="12" y="15" fill="#9ca3af" fontSize="5">Limited Approach</text>
      </g>
    </svg>
  );
}

export default function NFPA70ESafetyPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navigation />
      <div className="pt-20">
        <BreadcrumbJsonLd
          items={[
            { name: "Home", url: "https://amporalabs.com" },
            { name: "Blog", url: "https://amporalabs.com/blog" },
            { name: "NFPA 70E Electrical Safety", url: "https://amporalabs.com/blog/electrical-safety-nfpa-70e" },
          ]}
        />
        <BlogPostingJsonLd
          headline="NFPA 70E Electrical Safety: Arc Flash PPE & Lockout/Tagout Guide"
          description="Complete guide to NFPA 70E electrical safety including arc flash protection, PPE categories, and lockout/tagout procedures."
          datePublished="2025-01-15"
          dateModified="2025-01-15"
          url="https://amporalabs.com/blog/electrical-safety-nfpa-70e"
          wordCount={3100}
          keywords={["NFPA 70E", "electrical safety", "arc flash", "lockout tagout", "PPE"]}
        />

        <article className="max-w-4xl mx-auto px-6 py-12">
          {/* Breadcrumb */}
          <nav className="text-sm text-white/60 mb-8">
            <Link href="/" className="hover:text-white">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/blog" className="hover:text-white">Blog</Link>
            <span className="mx-2">/</span>
            <span className="text-white">NFPA 70E Electrical Safety</span>
          </nav>

          {/* Article Header */}
          <header className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <span className="px-3 py-1 bg-red-600/30 text-red-300 text-sm font-medium rounded-full">
                Safety
              </span>
              <span className="text-white/40 text-sm">12 min read</span>
              <span className="text-white/40 text-sm">January 15, 2025</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6 leading-tight">
              NFPA 70E Electrical Safety: Arc Flash PPE & Lockout/Tagout Guide
            </h1>
            <p className="text-xl text-white/70">
              Electrical work is inherently dangerous. NFPA 70E provides the framework for protecting workers from electrical hazards. This guide covers arc flash PPE requirements, approach boundaries, lockout/tagout procedures, and how to establish an electrically safe work condition.
            </p>
          </header>

          <div className="mb-12 bg-gradient-to-br from-red-900/20 to-orange-900/20 rounded-2xl p-6 border border-white/10">
            <HeroIllustration />
          </div>

          {/* Safety Warning */}
          <div className="bg-red-900/40 border-2 border-red-500/50 rounded-2xl p-6 mb-12">
            <div className="flex items-start gap-4">
              <div className="text-3xl">&#9888;</div>
              <div>
                <h3 className="font-display font-bold text-lg mb-2 text-red-400">Critical Safety Information</h3>
                <p className="text-white/80 text-sm">
                  This article is for educational purposes only. Electrical work can cause serious injury or death. Always follow your employer's electrical safety program, obtain proper training, and use appropriate PPE. When in doubt, de-energize the equipment.
                </p>
              </div>
            </div>
          </div>

          {/* Table of Contents */}
          <div className="bg-white/5 rounded-2xl p-6 mb-12">
            <h2 className="font-display font-bold mb-4">In This Guide</h2>
            <ul className="space-y-2 text-white/70">
              <li><a href="#overview" className="hover:text-purple-400">NFPA 70E Overview</a></li>
              <li><a href="#electrical-hazards" className="hover:text-purple-400">Electrical Hazards: Shock and Arc Flash</a></li>
              <li><a href="#approach-boundaries" className="hover:text-purple-400">Approach Boundaries</a></li>
              <li><a href="#arc-flash-ppe" className="hover:text-purple-400">Arc Flash PPE Categories</a></li>
              <li><a href="#incident-energy" className="hover:text-purple-400">Incident Energy Analysis</a></li>
              <li><a href="#lockout-tagout" className="hover:text-purple-400">Lockout/Tagout Procedures</a></li>
              <li><a href="#eswc" className="hover:text-purple-400">Establishing Electrically Safe Work Condition</a></li>
              <li><a href="#energized-work" className="hover:text-purple-400">Working on Energized Equipment</a></li>
              <li><a href="#safety-program" className="hover:text-purple-400">Electrical Safety Program Elements</a></li>
            </ul>
          </div>

          {/* Article Content */}
          <div className="prose prose-invert prose-lg max-w-none">

            <section id="overview" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">NFPA 70E Overview</h2>
              <p className="text-white/80 mb-4">
                <strong>NFPA 70E, Standard for Electrical Safety in the Workplace</strong>, is the industry consensus standard for electrical safety practices. While the NEC (NFPA 70) covers electrical installation, NFPA 70E covers the work practices needed to protect workers from electrical hazards.
              </p>
              <p className="text-white/80 mb-4">
                OSHA regulations (29 CFR 1910 Subpart S for general industry) establish the legal requirements for electrical safety. OSHA recognizes NFPA 70E as the authoritative reference for achieving compliance with electrical safety requirements.
              </p>

              <div className="grid md:grid-cols-2 gap-6 my-6">
                <div className="bg-white/5 rounded-xl p-6">
                  <h3 className="font-semibold text-cyan-400 mb-3">NFPA 70 (NEC)</h3>
                  <ul className="text-white/70 text-sm space-y-1">
                    <li>Covers electrical installation</li>
                    <li>Applies to construction/installation</li>
                    <li>Enforced by AHJ at time of installation</li>
                    <li>Focused on installed system safety</li>
                  </ul>
                </div>
                <div className="bg-white/5 rounded-xl p-6">
                  <h3 className="font-semibold text-red-400 mb-3">NFPA 70E</h3>
                  <ul className="text-white/70 text-sm space-y-1">
                    <li>Covers electrical work practices</li>
                    <li>Applies to ongoing maintenance/operation</li>
                    <li>Enforced by employers (OSHA requirement)</li>
                    <li>Focused on worker protection</li>
                  </ul>
                </div>
              </div>

              <div className="bg-orange-900/30 rounded-xl p-6 my-6">
                <h4 className="font-semibold text-orange-400 mb-3">Key NFPA 70E Principle</h4>
                <p className="text-white/80">
                  <strong>Work on de-energized equipment whenever possible.</strong> Energized electrical work is only permitted when de-energizing creates additional or increased hazards, or when the task is infeasible to perform in a de-energized state.
                </p>
              </div>
            </section>

            <section id="electrical-hazards" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Electrical Hazards: Shock and Arc Flash</h2>
              <p className="text-white/80 mb-4">
                NFPA 70E addresses two primary electrical hazards:
              </p>

              <div className="grid md:grid-cols-2 gap-6 my-6">
                <div className="bg-yellow-900/30 rounded-xl p-6">
                  <h3 className="font-semibold text-yellow-400 mb-3">Electrical Shock</h3>
                  <p className="text-white/70 mb-3 text-sm">
                    Electric shock occurs when current flows through the body. Effects depend on current magnitude and path:
                  </p>
                  <ul className="text-white/60 text-sm space-y-1">
                    <li><strong>1 mA:</strong> Perception threshold</li>
                    <li><strong>10-20 mA:</strong> Muscular contraction, may not be able to let go</li>
                    <li><strong>50-100 mA:</strong> Ventricular fibrillation possible</li>
                    <li><strong>100+ mA:</strong> Heart stoppage, severe burns</li>
                  </ul>
                </div>
                <div className="bg-red-900/30 rounded-xl p-6">
                  <h3 className="font-semibold text-red-400 mb-3">Arc Flash</h3>
                  <p className="text-white/70 mb-3 text-sm">
                    An arc flash is an explosive release of energy when current flows through ionized air. Effects include:
                  </p>
                  <ul className="text-white/60 text-sm space-y-1">
                    <li><strong>Extreme heat:</strong> 35,000°F (hotter than sun surface)</li>
                    <li><strong>Pressure wave:</strong> 1000+ psi at arc point</li>
                    <li><strong>Shrapnel:</strong> Molten copper, debris</li>
                    <li><strong>Light:</strong> UV radiation, flash blindness</li>
                    <li><strong>Sound:</strong> 140+ dB (permanent hearing damage)</li>
                  </ul>
                </div>
              </div>

              <p className="text-white/80 mb-4">
                <strong>Arc blast</strong> is the pressure wave accompanying an arc flash. The combination of arc flash and arc blast can throw workers across rooms, cause severe burns through clothing, and result in fatal injuries.
              </p>
            </section>

            <section id="approach-boundaries" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Approach Boundaries</h2>
              <p className="text-white/80 mb-4">
                NFPA 70E establishes approach boundaries around exposed energized electrical conductors and circuit parts. These boundaries define zones requiring different levels of protection and training.
              </p>

              <div className="space-y-4 my-6">
                <div className="bg-red-900/30 rounded-xl p-6 border-l-4 border-red-500">
                  <h3 className="font-semibold text-red-400 mb-2">Arc Flash Boundary</h3>
                  <p className="text-white/70 text-sm">
                    The distance at which incident energy equals 1.2 cal/cm² (onset of second-degree burn). Anyone crossing this boundary must wear arc-rated PPE. Distance varies based on equipment and available fault current.
                  </p>
                </div>

                <div className="bg-orange-900/30 rounded-xl p-6 border-l-4 border-orange-500">
                  <h3 className="font-semibold text-orange-400 mb-2">Limited Approach Boundary</h3>
                  <p className="text-white/70 text-sm">
                    The distance from exposed energized conductors where a shock hazard exists. Only qualified persons may cross this boundary. Unqualified persons must be escorted by qualified persons if they must cross.
                  </p>
                </div>

                <div className="bg-yellow-900/30 rounded-xl p-6 border-l-4 border-yellow-500">
                  <h3 className="font-semibold text-yellow-400 mb-2">Restricted Approach Boundary</h3>
                  <p className="text-white/70 text-sm">
                    The distance from exposed energized conductors where increased shock risk exists. Qualified persons only, with shock protection techniques or equipment that controls movement to prevent contact.
                  </p>
                </div>

                <div className="bg-red-900/40 rounded-xl p-6 border-l-4 border-red-600">
                  <h3 className="font-semibold text-red-500 mb-2">Prohibited Approach Boundary</h3>
                  <p className="text-white/70 text-sm">
                    Crossing this boundary is considered same as making contact. Work within this distance requires the same protection as direct contact - insulating equipment rated for the voltage, or the equipment must be in an electrically safe work condition.
                  </p>
                </div>
              </div>

              <h3 className="text-xl font-display font-semibold mb-3 text-cyan-400">Approach Boundary Distances (Table 130.4(E)(a))</h3>
              <p className="text-white/80 mb-4">
                Sample boundaries for AC systems (fixed and movable conductors):
              </p>
              <div className="overflow-x-auto my-6">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-white/20">
                      <th className="text-left py-3 px-4 text-white/60">Voltage</th>
                      <th className="text-left py-3 px-4 text-white/60">Limited</th>
                      <th className="text-left py-3 px-4 text-white/60">Restricted</th>
                      <th className="text-left py-3 px-4 text-white/60">Prohibited</th>
                    </tr>
                  </thead>
                  <tbody className="text-white/80">
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">120V</td>
                      <td className="py-3 px-4 font-mono text-orange-400">3 ft 6 in</td>
                      <td className="py-3 px-4 font-mono text-yellow-400">Avoid contact</td>
                      <td className="py-3 px-4 font-mono text-red-400">Avoid contact</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">208-240V</td>
                      <td className="py-3 px-4 font-mono text-orange-400">3 ft 6 in</td>
                      <td className="py-3 px-4 font-mono text-yellow-400">1 ft 0 in</td>
                      <td className="py-3 px-4 font-mono text-red-400">Avoid contact</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">480V</td>
                      <td className="py-3 px-4 font-mono text-orange-400">3 ft 6 in</td>
                      <td className="py-3 px-4 font-mono text-yellow-400">1 ft 0 in</td>
                      <td className="py-3 px-4 font-mono text-red-400">1 in</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">600V</td>
                      <td className="py-3 px-4 font-mono text-orange-400">3 ft 6 in</td>
                      <td className="py-3 px-4 font-mono text-yellow-400">1 ft 0 in</td>
                      <td className="py-3 px-4 font-mono text-red-400">1 in</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4">4160V</td>
                      <td className="py-3 px-4 font-mono text-orange-400">4 ft 0 in</td>
                      <td className="py-3 px-4 font-mono text-yellow-400">2 ft 2 in</td>
                      <td className="py-3 px-4 font-mono text-red-400">3 in</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section id="arc-flash-ppe" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Arc Flash PPE Categories</h2>
              <p className="text-white/80 mb-4">
                NFPA 70E Table 130.7(C)(15)(c) provides a PPE category method for determining arc flash protection when detailed incident energy analysis is not performed.
              </p>

              <div className="overflow-x-auto my-6">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-white/20">
                      <th className="text-left py-3 px-4 text-white/60">PPE Category</th>
                      <th className="text-left py-3 px-4 text-white/60">Min Arc Rating</th>
                      <th className="text-left py-3 px-4 text-white/60">Required PPE</th>
                    </tr>
                  </thead>
                  <tbody className="text-white/80">
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-bold text-green-400">Category 1</td>
                      <td className="py-3 px-4 font-mono">4 cal/cm²</td>
                      <td className="py-3 px-4 text-white/60">AR clothing, safety glasses, hearing protection, leather gloves</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-bold text-yellow-400">Category 2</td>
                      <td className="py-3 px-4 font-mono">8 cal/cm²</td>
                      <td className="py-3 px-4 text-white/60">AR clothing, face shield or flash hood, hearing protection, leather gloves</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-bold text-orange-400">Category 3</td>
                      <td className="py-3 px-4 font-mono">25 cal/cm²</td>
                      <td className="py-3 px-4 text-white/60">Flash suit hood, AR coveralls/jacket+pants, gloves, hearing protection</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-bold text-red-400">Category 4</td>
                      <td className="py-3 px-4 font-mono">40 cal/cm²</td>
                      <td className="py-3 px-4 text-white/60">Full flash suit with hood, multi-layer AR clothing, all protective equipment</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="bg-purple-900/30 rounded-xl p-6 my-6">
                <h4 className="font-semibold text-purple-400 mb-3">PPE Category Limitations</h4>
                <p className="text-white/70 mb-3">
                  The PPE category method can only be used when equipment parameters fall within the tables' assumptions:
                </p>
                <ul className="text-white/60 text-sm space-y-1">
                  <li>Maximum available fault current within table limits</li>
                  <li>Maximum clearing time within table limits</li>
                  <li>Minimum working distance as specified</li>
                  <li>Equipment type matches table equipment type</li>
                </ul>
                <p className="text-white/70 mt-3 text-sm">
                  If conditions exceed table limits, incident energy analysis is required.
                </p>
              </div>

              <h3 className="text-xl font-display font-semibold mb-3 text-cyan-400">Arc-Rated Clothing Requirements</h3>
              <ul className="list-disc list-inside text-white/70 space-y-2 mb-4">
                <li><strong>Arc rating:</strong> Must meet or exceed incident energy at working distance</li>
                <li><strong>No melting:</strong> Clothing must not melt or ignite (no polyester, nylon, etc. in outer layers)</li>
                <li><strong>FR vs AR:</strong> All AR clothing is FR (flame resistant), but not all FR is AR</li>
                <li><strong>Layering:</strong> Multiple layers can be combined; total arc rating is NOT additive</li>
                <li><strong>Condition:</strong> Damaged, contaminated, or worn AR clothing loses protective value</li>
              </ul>
            </section>

            <section id="incident-energy" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Incident Energy Analysis</h2>
              <p className="text-white/80 mb-4">
                Incident energy analysis provides more accurate PPE requirements than the category method. It calculates the actual thermal energy exposure in cal/cm² at a specific working distance.
              </p>

              <h3 className="text-xl font-display font-semibold mb-3 text-cyan-400">Factors Affecting Incident Energy</h3>
              <div className="bg-white/5 rounded-xl p-6 my-6">
                <ul className="space-y-2 text-white/70">
                  <li><strong>Available fault current:</strong> Higher current = higher energy</li>
                  <li><strong>Arc clearing time:</strong> Longer time = higher energy</li>
                  <li><strong>Working distance:</strong> Closer = higher energy (inverse square relationship)</li>
                  <li><strong>Equipment configuration:</strong> Box vs open air, voltage class</li>
                  <li><strong>Electrode configuration:</strong> Affects arc behavior</li>
                </ul>
              </div>

              <h3 className="text-xl font-display font-semibold mb-3 text-cyan-400">Arc Flash Labels</h3>
              <p className="text-white/80 mb-4">
                Equipment must be field or factory labeled with arc flash hazard information per NEC 110.16. Labels typically include:
              </p>
              <div className="bg-yellow-900/30 rounded-xl p-6 my-6 border border-yellow-500/50">
                <div className="text-center mb-4">
                  <span className="text-yellow-400 font-bold text-lg">&#9888; WARNING - ARC FLASH HAZARD &#9888;</span>
                </div>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="text-white/60">Incident Energy:</p>
                    <p className="font-mono text-yellow-400">8.5 cal/cm² at 18 in</p>
                  </div>
                  <div>
                    <p className="text-white/60">Arc Flash Boundary:</p>
                    <p className="font-mono text-yellow-400">4 ft 0 in</p>
                  </div>
                  <div>
                    <p className="text-white/60">PPE Category:</p>
                    <p className="font-mono text-yellow-400">2</p>
                  </div>
                  <div>
                    <p className="text-white/60">Limited Approach:</p>
                    <p className="font-mono text-yellow-400">3 ft 6 in</p>
                  </div>
                </div>
              </div>
            </section>

            <section id="lockout-tagout" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Lockout/Tagout Procedures</h2>
              <p className="text-white/80 mb-4">
                Lockout/tagout (LOTO) is the primary method for protecting workers from unexpected energization. OSHA 29 CFR 1910.147 and NFPA 70E Article 120 establish requirements.
              </p>

              <h3 className="text-xl font-display font-semibold mb-3 text-green-400">Basic LOTO Steps</h3>
              <div className="space-y-4 my-6">
                <div className="bg-white/5 rounded-xl p-4 flex items-start gap-4">
                  <span className="bg-green-600 text-white text-sm font-bold px-3 py-1 rounded-full">1</span>
                  <div>
                    <p className="font-semibold text-white">Preparation</p>
                    <p className="text-white/60 text-sm">Identify all energy sources, obtain procedures, notify affected employees</p>
                  </div>
                </div>
                <div className="bg-white/5 rounded-xl p-4 flex items-start gap-4">
                  <span className="bg-green-600 text-white text-sm font-bold px-3 py-1 rounded-full">2</span>
                  <div>
                    <p className="font-semibold text-white">Shutdown</p>
                    <p className="text-white/60 text-sm">Normal shutdown of equipment following established procedures</p>
                  </div>
                </div>
                <div className="bg-white/5 rounded-xl p-4 flex items-start gap-4">
                  <span className="bg-green-600 text-white text-sm font-bold px-3 py-1 rounded-full">3</span>
                  <div>
                    <p className="font-semibold text-white">Isolation</p>
                    <p className="text-white/60 text-sm">Operate disconnecting means to isolate equipment from energy sources</p>
                  </div>
                </div>
                <div className="bg-white/5 rounded-xl p-4 flex items-start gap-4">
                  <span className="bg-green-600 text-white text-sm font-bold px-3 py-1 rounded-full">4</span>
                  <div>
                    <p className="font-semibold text-white">Lockout/Tagout</p>
                    <p className="text-white/60 text-sm">Apply individual locks and tags to each energy-isolating device</p>
                  </div>
                </div>
                <div className="bg-white/5 rounded-xl p-4 flex items-start gap-4">
                  <span className="bg-green-600 text-white text-sm font-bold px-3 py-1 rounded-full">5</span>
                  <div>
                    <p className="font-semibold text-white">Stored Energy</p>
                    <p className="text-white/60 text-sm">Release or restrain all stored energy (capacitors, springs, elevated components)</p>
                  </div>
                </div>
                <div className="bg-white/5 rounded-xl p-4 flex items-start gap-4">
                  <span className="bg-green-600 text-white text-sm font-bold px-3 py-1 rounded-full">6</span>
                  <div>
                    <p className="font-semibold text-white">Verification</p>
                    <p className="text-white/60 text-sm">Verify zero energy state using appropriate test equipment</p>
                  </div>
                </div>
              </div>

              <div className="bg-red-900/30 rounded-xl p-6 my-6">
                <h4 className="font-semibold text-red-400 mb-3">Critical: One Person, One Lock</h4>
                <p className="text-white/70">
                  Each employee working on equipment must apply their own individual lock. Group lockout requires specific additional procedures. <strong>Only the person who applied a lock may remove it</strong>, except under documented authorized procedures for absent employees.
                </p>
              </div>
            </section>

            <section id="eswc" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Establishing Electrically Safe Work Condition</h2>
              <p className="text-white/80 mb-4">
                An <strong>Electrically Safe Work Condition (ESWC)</strong> is the goal of the LOTO process. Per NFPA 70E 120.5, an ESWC requires:
              </p>

              <div className="space-y-4 my-6">
                <div className="bg-white/5 rounded-xl p-6">
                  <h4 className="font-semibold text-cyan-400 mb-2">1. Determine All Possible Sources</h4>
                  <p className="text-white/70 text-sm">
                    Identify all sources of electrical supply to the equipment. Check single-line diagrams, labeling, and trace circuits.
                  </p>
                </div>
                <div className="bg-white/5 rounded-xl p-6">
                  <h4 className="font-semibold text-cyan-400 mb-2">2. Interrupt Load Current</h4>
                  <p className="text-white/70 text-sm">
                    Properly shut down the equipment to interrupt load current before opening the disconnecting means.
                  </p>
                </div>
                <div className="bg-white/5 rounded-xl p-6">
                  <h4 className="font-semibold text-cyan-400 mb-2">3. Visually Verify Disconnection</h4>
                  <p className="text-white/70 text-sm">
                    Where possible, visually verify that blades of disconnecting means are fully open or circuit breaker is in fully open position.
                  </p>
                </div>
                <div className="bg-white/5 rounded-xl p-6">
                  <h4 className="font-semibold text-cyan-400 mb-2">4. Release Stored Energy</h4>
                  <p className="text-white/70 text-sm">
                    Discharge capacitors, release spring tension, block elevated equipment. Wait appropriate discharge time for capacitors.
                  </p>
                </div>
                <div className="bg-white/5 rounded-xl p-6">
                  <h4 className="font-semibold text-cyan-400 mb-2">5. Apply Lockout/Tagout Devices</h4>
                  <p className="text-white/70 text-sm">
                    Apply locks and tags to each disconnecting means. Verify locks prevent operation.
                  </p>
                </div>
                <div className="bg-white/5 rounded-xl p-6">
                  <h4 className="font-semibold text-cyan-400 mb-2">6. Test for Absence of Voltage</h4>
                  <p className="text-white/70 text-sm">
                    Use properly rated voltage detector. Test the tester, test the circuit, test the tester again. Test phase-to-phase and phase-to-ground.
                  </p>
                </div>
                <div className="bg-white/5 rounded-xl p-6">
                  <h4 className="font-semibold text-cyan-400 mb-2">7. Apply Temporary Protective Grounds (if required)</h4>
                  <p className="text-white/70 text-sm">
                    For systems over 600V, or where induced voltages may be present, apply grounds. Size per available fault current.
                  </p>
                </div>
              </div>
            </section>

            <section id="energized-work" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Working on Energized Equipment</h2>
              <p className="text-white/80 mb-4">
                Energized electrical work is only permitted under specific conditions per NFPA 70E 130.2:
              </p>

              <div className="bg-orange-900/30 rounded-xl p-6 my-6">
                <h4 className="font-semibold text-orange-400 mb-3">Conditions Permitting Energized Work</h4>
                <ul className="text-white/70 space-y-2">
                  <li><strong>Additional hazard:</strong> De-energizing would create additional or increased hazards (ventilation, life support, emergency alarms)</li>
                  <li><strong>Infeasibility:</strong> Task is infeasible to perform de-energized (testing, troubleshooting requiring power)</li>
                  <li><strong>Low voltage:</strong> Less than 50V with no increased arc flash exposure (still requires shock protection)</li>
                </ul>
              </div>

              <h3 className="text-xl font-display font-semibold mb-3 text-yellow-400">Energized Electrical Work Permit</h3>
              <p className="text-white/80 mb-4">
                When energized work is required above 50V, an Energized Electrical Work Permit (EEWP) is typically required. The permit documents:
              </p>
              <ul className="list-disc list-inside text-white/70 space-y-2 mb-4">
                <li>Description of work and circuit/equipment</li>
                <li>Justification for why work must be performed energized</li>
                <li>Shock and arc flash hazard analysis results</li>
                <li>Required PPE and safety procedures</li>
                <li>Means to restrict unqualified persons from the area</li>
                <li>Evidence of safe work practice training</li>
                <li>Authorizing signatures (typically employer and worker)</li>
              </ul>
            </section>

            <section id="safety-program" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Electrical Safety Program Elements</h2>
              <p className="text-white/80 mb-4">
                NFPA 70E requires employers to implement and document an electrical safety program (Article 110). Key elements include:
              </p>

              <div className="grid md:grid-cols-2 gap-4 my-6">
                <div className="bg-white/5 rounded-xl p-6">
                  <h4 className="font-semibold text-purple-400 mb-3">Training Requirements</h4>
                  <ul className="text-white/60 text-sm space-y-1">
                    <li>Qualified person training and certification</li>
                    <li>Task-specific training</li>
                    <li>Emergency response/CPR/AED</li>
                    <li>Retraining when conditions change</li>
                  </ul>
                </div>
                <div className="bg-white/5 rounded-xl p-6">
                  <h4 className="font-semibold text-cyan-400 mb-3">Documentation</h4>
                  <ul className="text-white/60 text-sm space-y-1">
                    <li>Written safety procedures</li>
                    <li>Arc flash hazard analysis</li>
                    <li>EEWP records</li>
                    <li>Training records</li>
                  </ul>
                </div>
                <div className="bg-white/5 rounded-xl p-6">
                  <h4 className="font-semibold text-green-400 mb-3">Equipment Requirements</h4>
                  <ul className="text-white/60 text-sm space-y-1">
                    <li>Properly rated PPE</li>
                    <li>Tested insulating equipment</li>
                    <li>Voltage detectors</li>
                    <li>Barriers and signs</li>
                  </ul>
                </div>
                <div className="bg-white/5 rounded-xl p-6">
                  <h4 className="font-semibold text-orange-400 mb-3">Auditing</h4>
                  <ul className="text-white/60 text-sm space-y-1">
                    <li>Annual program audits</li>
                    <li>Field verification of practices</li>
                    <li>Incident investigation</li>
                    <li>Continuous improvement</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* CTA Section */}
            <section className="bg-gradient-to-r from-red-900/30 to-orange-900/30 rounded-2xl p-8 my-12">
              <h2 className="text-2xl font-display font-bold mb-4 text-center">
                Stay Safe with Proper Code Knowledge
              </h2>
              <p className="text-white/70 mb-6 text-center">
                Ampora provides quick access to NEC code requirements and electrical calculations. Knowledge is your first line of defense.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <a
                  href="https://apps.apple.com/us/app/ampora/id6753693522"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-red-600 text-white font-semibold rounded-full hover:bg-red-500 transition-colors text-center"
                >
                  Download Ampora Free
                </a>
                <Link
                  href="/features/nec-code-reference"
                  className="px-6 py-3 bg-white text-black font-semibold rounded-full hover:bg-white/90 transition-colors text-center"
                >
                  Explore NEC Features
                </Link>
              </div>
            </section>

            {/* Related Articles */}
            <section className="mt-12">
              <h2 className="text-2xl font-display font-bold mb-6">Related Articles</h2>
              <div className="grid md:grid-cols-2 gap-4">
                <Link href="/blog/electrical-inspection-checklist" className="bg-white/5 hover:bg-white/10 rounded-xl p-6 transition-colors">
                  <span className="text-green-400 text-sm">Installation</span>
                  <h3 className="font-semibold mt-2">Electrical Inspection Checklist</h3>
                </Link>
                <Link href="/blog/electrical-panel-troubleshooting" className="bg-white/5 hover:bg-white/10 rounded-xl p-6 transition-colors">
                  <span className="text-cyan-400 text-sm">Troubleshooting</span>
                  <h3 className="font-semibold mt-2">Electrical Panel Troubleshooting</h3>
                </Link>
                <Link href="/blog/nec-article-250-grounding-guide" className="bg-white/5 hover:bg-white/10 rounded-xl p-6 transition-colors">
                  <span className="text-purple-400 text-sm">NEC Code</span>
                  <h3 className="font-semibold mt-2">NEC Article 250: Grounding Guide</h3>
                </Link>
                <Link href="/blog/nec-article-240-overcurrent-protection" className="bg-white/5 hover:bg-white/10 rounded-xl p-6 transition-colors">
                  <span className="text-purple-400 text-sm">NEC Code</span>
                  <h3 className="font-semibold mt-2">NEC Article 240: Overcurrent Protection</h3>
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
