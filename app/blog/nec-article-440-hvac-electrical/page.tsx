import { Metadata } from "next";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import { BlogPostingJsonLd, BreadcrumbJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "NEC Article 440: HVAC Equipment Electrical Requirements Guide",
  description: "Complete guide to NEC Article 440 HVAC electrical requirements. Learn AC disconnect sizing, compressor circuit protection, heat pump wiring, MCA and MOP calculations, overload protection for hermetic refrigerant motor-compressors, wire sizing for air conditioning units, and common HVAC electrical code violations to avoid.",
  keywords: [
    "nec article 440",
    "hvac electrical requirements",
    "air conditioner circuit sizing",
    "heat pump wiring",
    "hvac disconnect",
    "MCA MOP",
    "compressor circuit protection",
    "ac unit breaker size",
    "hvac electrical code",
    "air conditioning electrical"
  ],
  alternates: {
    canonical: "https://amporalabs.com/blog/nec-article-440-hvac-electrical",
  },
  openGraph: {
    title: "NEC Article 440: HVAC Equipment Electrical Requirements Guide - Ampora",
    description: "Master HVAC electrical requirements with this comprehensive NEC Article 440 guide covering MCA, MOP, disconnect sizing, compressor circuit protection, and wire sizing.",
    url: "https://amporalabs.com/blog/nec-article-440-hvac-electrical",
    type: "article",
    publishedTime: "2026-03-04",
  },
};

function HeroIllustration() {
  return (
    <svg viewBox="0 0 400 180" className="w-full h-40 md:h-48" aria-label="HVAC condenser unit with disconnect switch and circuit components">
      {/* Background */}
      <rect x="10" y="10" width="380" height="160" rx="4" fill="#1f2937" stroke="#374151" strokeWidth="1"/>

      {/* Condenser Unit */}
      <g transform="translate(30, 25)">
        <rect x="0" y="20" width="100" height="110" rx="4" fill="#374151" stroke="#6b7280" strokeWidth="1.5"/>
        {/* Fan Grille */}
        <circle cx="50" cy="60" r="30" fill="none" stroke="#9ca3af" strokeWidth="1"/>
        <circle cx="50" cy="60" r="22" fill="none" stroke="#9ca3af" strokeWidth="0.5"/>
        <circle cx="50" cy="60" r="14" fill="none" stroke="#9ca3af" strokeWidth="0.5"/>
        {/* Fan Blades */}
        <line x1="50" y1="38" x2="50" y2="82" stroke="#22d3ee" strokeWidth="1.5"/>
        <line x1="28" y1="60" x2="72" y2="60" stroke="#22d3ee" strokeWidth="1.5"/>
        <line x1="35" y1="45" x2="65" y2="75" stroke="#22d3ee" strokeWidth="1"/>
        <line x1="65" y1="45" x2="35" y2="75" stroke="#22d3ee" strokeWidth="1"/>
        {/* Compressor Label */}
        <text x="50" y="108" textAnchor="middle" fill="#9ca3af" fontSize="6">CONDENSER</text>
        <text x="50" y="118" textAnchor="middle" fill="#9ca3af" fontSize="5">RLA: 18.2A</text>
        {/* Refrigerant Lines */}
        <line x1="100" y1="90" x2="120" y2="90" stroke="#a78bfa" strokeWidth="2" strokeDasharray="4 2"/>
        <line x1="100" y1="100" x2="120" y2="100" stroke="#60a5fa" strokeWidth="2" strokeDasharray="4 2"/>
        <text x="50" y="15" textAnchor="middle" fill="#22d3ee" fontSize="7" fontWeight="bold">A/C UNIT</text>
      </g>

      {/* Disconnect Switch */}
      <g transform="translate(155, 20)">
        <rect x="0" y="0" width="70" height="100" rx="3" fill="#4b5563" stroke="#9ca3af" strokeWidth="1.5"/>
        <text x="35" y="14" textAnchor="middle" fill="#fbbf24" fontSize="6" fontWeight="bold">DISCONNECT</text>
        {/* Switch Handle */}
        <rect x="22" y="22" width="26" height="40" rx="2" fill="#1f2937" stroke="#fbbf24" strokeWidth="1.5"/>
        <text x="35" y="38" textAnchor="middle" fill="#22c55e" fontSize="7" fontWeight="bold">ON</text>
        <text x="35" y="52" textAnchor="middle" fill="#ef4444" fontSize="7">OFF</text>
        <line x1="15" y1="44" x2="55" y2="44" stroke="#fbbf24" strokeWidth="0.5"/>
        {/* Rating */}
        <text x="35" y="78" textAnchor="middle" fill="#9ca3af" fontSize="5">60A / 240V</text>
        <text x="35" y="88" textAnchor="middle" fill="#9ca3af" fontSize="5">NEMA 3R</text>
        {/* Wire to unit */}
        <line x1="0" y1="50" x2="-25" y2="50" stroke="#a78bfa" strokeWidth="1.5"/>
      </g>

      {/* Circuit Breaker Panel Section */}
      <g transform="translate(250, 20)">
        <rect x="0" y="0" width="120" height="140" rx="3" fill="#1e293b" stroke="#475569" strokeWidth="1.5"/>
        <text x="60" y="14" textAnchor="middle" fill="#22d3ee" fontSize="7" fontWeight="bold">NAMEPLATE DATA</text>

        {/* MCA Box */}
        <rect x="8" y="22" width="104" height="28" rx="2" fill="#22c55e" fillOpacity="0.12" stroke="#22c55e" strokeWidth="1"/>
        <text x="14" y="34" fill="#9ca3af" fontSize="5">MCA (Min Circuit Ampacity):</text>
        <text x="14" y="44" fill="#22c55e" fontSize="8" fontWeight="bold" fontFamily="monospace">23.0 A</text>
        <text x="70" y="44" fill="#9ca3af" fontSize="5">Wire &amp; OCPD min</text>

        {/* MOP Box */}
        <rect x="8" y="56" width="104" height="28" rx="2" fill="#f59e0b" fillOpacity="0.12" stroke="#f59e0b" strokeWidth="1"/>
        <text x="14" y="68" fill="#9ca3af" fontSize="5">MOP (Max Overcurrent Prot.):</text>
        <text x="14" y="78" fill="#f59e0b" fontSize="8" fontWeight="bold" fontFamily="monospace">30 A</text>
        <text x="70" y="78" fill="#9ca3af" fontSize="5">Breaker max</text>

        {/* Voltage */}
        <rect x="8" y="90" width="50" height="22" rx="2" fill="#a78bfa" fillOpacity="0.12" stroke="#a78bfa" strokeWidth="1"/>
        <text x="14" y="100" fill="#9ca3af" fontSize="5">Voltage:</text>
        <text x="14" y="108" fill="#a78bfa" fontSize="7" fontWeight="bold" fontFamily="monospace">208/230V</text>

        {/* Phase */}
        <rect x="62" y="90" width="50" height="22" rx="2" fill="#60a5fa" fillOpacity="0.12" stroke="#60a5fa" strokeWidth="1"/>
        <text x="68" y="100" fill="#9ca3af" fontSize="5">Phase:</text>
        <text x="68" y="108" fill="#60a5fa" fontSize="7" fontWeight="bold" fontFamily="monospace">1-PH</text>

        {/* Wire to disconnect */}
        <line x1="0" y1="70" x2="-25" y2="70" stroke="#a78bfa" strokeWidth="1.5"/>

        {/* NEC 440 Reference */}
        <text x="60" y="130" textAnchor="middle" fill="#6b7280" fontSize="5">NEC Article 440</text>
      </g>

      {/* Wire path from panel to disconnect */}
      <line x1="225" y1="90" x2="250" y2="90" stroke="#a78bfa" strokeWidth="1.5"/>
    </svg>
  );
}

export default function NECArticle440HVACElectricalPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navigation />
      <div className="pt-20">
        <BreadcrumbJsonLd
          items={[
            { name: "Home", url: "https://amporalabs.com" },
            { name: "Blog", url: "https://amporalabs.com/blog" },
            { name: "NEC Article 440: HVAC Electrical", url: "https://amporalabs.com/blog/nec-article-440-hvac-electrical" },
          ]}
        />
        <BlogPostingJsonLd
          headline="NEC Article 440: HVAC Equipment Electrical Requirements Guide"
          description="Complete guide to NEC Article 440 covering HVAC electrical requirements including MCA, MOP, disconnect sizing, compressor circuit protection, and wire sizing for air conditioning and heat pump installations."
          datePublished="2026-03-04"
          dateModified="2026-03-04"
          url="https://amporalabs.com/blog/nec-article-440-hvac-electrical"
          wordCount={4500}
          keywords={["nec article 440", "hvac electrical", "MCA MOP", "compressor circuits", "hvac disconnect"]}
        />

        <article className="max-w-4xl mx-auto px-6 py-12">
          {/* Breadcrumb */}
          <nav className="text-sm text-white/60 mb-8">
            <Link href="/" className="hover:text-white">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/blog" className="hover:text-white">Blog</Link>
            <span className="mx-2">/</span>
            <span className="text-white">NEC Article 440: HVAC Electrical</span>
          </nav>

          {/* Article Header */}
          <header className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <span className="px-3 py-1 bg-purple-600/20 text-purple-300 text-sm font-medium rounded-full">
                NEC Code
              </span>
              <span className="text-white/40 text-sm">18 min read</span>
              <span className="text-white/40 text-sm">March 4, 2026</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6 leading-tight">
              NEC Article 440: HVAC Equipment Electrical Requirements Guide
            </h1>
            <p className="text-xl text-white/70">
              HVAC equipment wiring is one of the most common tasks electricians encounter, yet it is also one of the most frequently cited for code violations. This comprehensive guide walks through NEC Article 440 requirements for hermetic refrigerant motor-compressors, covering MCA and MOP calculations, disconnect sizing, circuit protection, wire sizing, and the installation mistakes that lead to failed inspections.
            </p>
          </header>

          <div className="mb-12 bg-gradient-to-br from-purple-900/20 to-cyan-900/20 rounded-2xl p-6 border border-white/10">
            <HeroIllustration />
          </div>

          {/* Important Note */}
          <div className="bg-purple-900/40 border-2 border-purple-500/50 rounded-2xl p-6 mb-12">
            <div className="flex items-start gap-4">
              <div className="text-3xl">&#9888;</div>
              <div>
                <h3 className="font-display font-bold text-lg mb-2 text-purple-400">Important Code Reference</h3>
                <p className="text-white/80 text-sm">
                  This article references the NEC (NFPA 70) and is for educational purposes. Always verify requirements against the NEC edition adopted in your jurisdiction. HVAC equipment must be installed per the manufacturer&apos;s instructions in addition to the NEC. Local amendments may impose additional requirements beyond what is covered here.
                </p>
              </div>
            </div>
          </div>

          {/* Table of Contents */}
          <div className="bg-white/5 rounded-2xl p-6 mb-12">
            <h2 className="font-display font-bold mb-4">In This Guide</h2>
            <ul className="space-y-2 text-white/70">
              <li><a href="#introduction" className="hover:text-purple-400">Introduction to NEC 440 and HVAC Equipment</a></li>
              <li><a href="#mca-mop" className="hover:text-purple-400">Understanding MCA and MOP</a></li>
              <li><a href="#circuit-sizing" className="hover:text-purple-400">Circuit Sizing for AC Units and Heat Pumps</a></li>
              <li><a href="#disconnect-requirements" className="hover:text-purple-400">Disconnect Requirements (Within Sight, Rated)</a></li>
              <li><a href="#overload-protection" className="hover:text-purple-400">Overload Protection for Compressors</a></li>
              <li><a href="#wire-sizing-examples" className="hover:text-purple-400">Wire Sizing Examples</a></li>
              <li><a href="#common-mistakes" className="hover:text-purple-400">Common Installation Mistakes</a></li>
              <li><a href="#faq" className="hover:text-purple-400">Frequently Asked Questions</a></li>
            </ul>
          </div>

          {/* Article Content */}
          <div className="prose prose-invert prose-lg max-w-none">

            <section id="introduction" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Introduction to NEC 440 and HVAC Equipment</h2>
              <p className="text-white/80 mb-4">
                <strong>NEC Article 440</strong> covers the electrical requirements for <strong>hermetic refrigerant motor-compressors</strong> and the equipment they serve, including air conditioning units, heat pumps, and refrigeration systems. This article exists because hermetic compressors behave differently than standard motors &mdash; they have unique starting characteristics, are factory-sealed, and their overload protection requirements differ from the general motor rules in Article 430.
              </p>
              <p className="text-white/80 mb-4">
                Article 440 does not replace Article 430 entirely. Instead, it <strong>amends and supplements</strong> the general motor provisions. Where Article 440 does not specifically address a requirement, you fall back to Article 430 for motor circuit rules, <Link href="/blog/nec-article-240-overcurrent-protection" className="text-purple-400 hover:text-purple-300">Article 240 for overcurrent protection</Link>, and other applicable NEC articles.
              </p>

              <div className="grid md:grid-cols-2 gap-6 my-6">
                <div className="bg-purple-900/30 rounded-xl p-6">
                  <h3 className="font-semibold text-purple-400 mb-3">Article 440 Covers</h3>
                  <ul className="text-white/60 text-sm space-y-1">
                    <li><strong>Hermetic refrigerant motor-compressors</strong></li>
                    <li><strong>Branch circuits</strong> for A/C and refrigeration equipment</li>
                    <li><strong>Disconnecting means</strong> for HVAC units</li>
                    <li><strong>Overload protection</strong> for compressor motors</li>
                    <li><strong>Short-circuit and ground-fault protection</strong></li>
                    <li><strong>Controllers</strong> for hermetic compressors</li>
                    <li><strong>Room air conditioners</strong> (Part VII)</li>
                  </ul>
                </div>
                <div className="bg-cyan-900/30 rounded-xl p-6">
                  <h3 className="font-semibold text-cyan-400 mb-3">Article 440 Does NOT Cover</h3>
                  <ul className="text-white/60 text-sm space-y-1">
                    <li>Open-type compressors (use Article 430)</li>
                    <li>Furnace blower motors (use Article 430)</li>
                    <li>Duct heaters and strip heat (use Article 424)</li>
                    <li>Fan coil units without compressors</li>
                    <li>Condensate pumps</li>
                    <li>Thermostats and control wiring</li>
                    <li>Refrigerant piping</li>
                  </ul>
                </div>
              </div>

              <p className="text-white/80 mb-4">
                The key distinction is the word <strong>&ldquo;hermetic.&rdquo;</strong> A hermetic motor-compressor is a combination of a compressor and motor enclosed in the same housing, with no external shaft or shaft seals. The motor operates within the refrigerant atmosphere, and the motor windings are cooled by the refrigerant itself. Because the motor is completely sealed, you cannot inspect it, and its locked-rotor current characteristics differ from standard motors.
              </p>

              <div className="bg-white/5 rounded-xl p-6 my-6">
                <h4 className="font-semibold text-cyan-400 mb-3">Key NEC 440 Terminology</h4>
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="text-white/80"><strong>RLA (Rated Load Amps):</strong> The maximum current the compressor draws under rated load conditions. Found on the equipment nameplate.</p>
                  </div>
                  <div>
                    <p className="text-white/80"><strong>LRA (Locked Rotor Amps):</strong> The current drawn by the compressor at startup when the rotor is stationary. Can be 4-6 times the RLA.</p>
                  </div>
                  <div>
                    <p className="text-white/80"><strong>FLA (Full Load Amps):</strong> Used for non-hermetic motors. Not the same as RLA for compressors.</p>
                  </div>
                  <div>
                    <p className="text-white/80"><strong>Branch-circuit selection current:</strong> The value used instead of RLA for determining wire size, disconnect rating, and controller rating. Listed on the nameplate when applicable.</p>
                  </div>
                </div>
              </div>
            </section>

            <section id="mca-mop" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Understanding MCA (Minimum Circuit Ampacity) and MOP (Maximum Overcurrent Protection)</h2>
              <p className="text-white/80 mb-4">
                Every HVAC unit nameplate includes two critical values that electricians must understand: <strong>MCA (Minimum Circuit Ampacity)</strong> and <strong>MOP (Maximum Overcurrent Protection)</strong>. These two numbers drive every sizing decision for the branch circuit feeding the equipment.
              </p>

              <div className="grid md:grid-cols-2 gap-6 my-6">
                <div className="bg-green-900/30 rounded-xl p-6 border border-green-500/20">
                  <h3 className="font-semibold text-green-400 mb-3">MCA &mdash; Minimum Circuit Ampacity</h3>
                  <p className="text-white/70 text-sm mb-3">
                    The MCA determines the <strong>minimum wire size</strong> and <strong>minimum ampacity</strong> of the conductors feeding the equipment. It is calculated by the manufacturer per NEC 440.33:
                  </p>
                  <div className="bg-black/30 rounded-lg p-4 font-mono text-sm text-green-400 mb-3">
                    MCA = 1.25 &times; Largest Motor RLA + Sum of All Other Motor RLAs + Other Loads
                  </div>
                  <p className="text-white/60 text-sm">
                    The 1.25 multiplier on the largest motor accounts for the continuous duty nature of the compressor and ensures the conductors are not loaded beyond 80% of their ampacity.
                  </p>
                </div>
                <div className="bg-yellow-900/30 rounded-xl p-6 border border-yellow-500/20">
                  <h3 className="font-semibold text-yellow-400 mb-3">MOP &mdash; Maximum Overcurrent Protection</h3>
                  <p className="text-white/70 text-sm mb-3">
                    The MOP determines the <strong>maximum breaker or fuse size</strong> allowed for the branch circuit. It is calculated by the manufacturer per NEC 440.22:
                  </p>
                  <div className="bg-black/30 rounded-lg p-4 font-mono text-sm text-yellow-400 mb-3">
                    MOP = 1.75 &times; Largest Motor RLA + Sum of All Other Motor RLAs + Other Loads
                  </div>
                  <p className="text-white/60 text-sm">
                    The larger multiplier (1.75) on the overcurrent device allows for the high inrush current during compressor startup without nuisance tripping.
                  </p>
                </div>
              </div>

              <div className="bg-white/5 rounded-xl p-6 my-6">
                <h4 className="font-semibold text-white mb-3">MCA vs. MOP: What Each Number Tells You</h4>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-white/20">
                        <th className="text-left py-3 px-4 text-white/60">Decision</th>
                        <th className="text-left py-3 px-4 text-white/60">Use MCA</th>
                        <th className="text-left py-3 px-4 text-white/60">Use MOP</th>
                      </tr>
                    </thead>
                    <tbody className="text-white/80">
                      <tr className="border-b border-white/10">
                        <td className="py-3 px-4">Wire size</td>
                        <td className="py-3 px-4 font-mono text-green-400">Yes &mdash; conductor ampacity &ge; MCA</td>
                        <td className="py-3 px-4 text-white/40">No</td>
                      </tr>
                      <tr className="border-b border-white/10">
                        <td className="py-3 px-4">Breaker / fuse size</td>
                        <td className="py-3 px-4 text-white/40">No</td>
                        <td className="py-3 px-4 font-mono text-yellow-400">Yes &mdash; OCPD &le; MOP</td>
                      </tr>
                      <tr className="border-b border-white/10">
                        <td className="py-3 px-4">Disconnect ampere rating</td>
                        <td className="py-3 px-4 font-mono text-green-400">Yes &mdash; rated &ge; 115% of nameplate RLA</td>
                        <td className="py-3 px-4 text-white/40">No</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4">Conduit fill (wire count)</td>
                        <td className="py-3 px-4 font-mono text-green-400">Yes &mdash; wire size determines conduit</td>
                        <td className="py-3 px-4 text-white/40">No</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="bg-orange-900/30 rounded-xl p-6 my-6">
                <h4 className="font-semibold text-orange-400 mb-3">Critical Rule: MOP Is a Maximum, Not a Target</h4>
                <p className="text-white/70 mb-3">
                  A common mistake is automatically selecting a breaker equal to the MOP. The MOP is the <strong>upper limit</strong> &mdash; you cannot exceed it. But you can (and often should) use a smaller breaker if the equipment starts without tripping. A smaller breaker provides better short-circuit protection and may reduce <Link href="/blog/how-to-calculate-voltage-drop" className="text-purple-400 hover:text-purple-300">voltage drop concerns on long circuit runs</Link>.
                </p>
                <p className="text-white/70 text-sm">
                  For example, if the MOP is 35A, you could use a 25A or 30A breaker if the compressor starts reliably. Only go up to 35A if the compressor trips a smaller breaker on startup.
                </p>
              </div>

              <h3 className="text-xl font-display font-semibold mb-3 text-cyan-400">Example MCA/MOP Calculation</h3>
              <p className="text-white/80 mb-4">
                Consider a 3-ton residential split system with the following nameplate data:
              </p>
              <div className="bg-white/5 rounded-xl p-6 my-6">
                <p className="text-white/60 text-sm mb-2">Nameplate: Compressor RLA = 15.8A, Fan Motor FLA = 1.2A, 208-230V, 1-Phase</p>
                <div className="space-y-2 font-mono text-sm">
                  <p className="text-green-400">MCA = (15.8 &times; 1.25) + 1.2 = 19.75 + 1.2 = <strong>20.95A</strong></p>
                  <p className="text-white/60">Wire must have ampacity &ge; 20.95A &rarr; Use #10 AWG (30A @ 60&deg;C)</p>
                  <p className="text-yellow-400 mt-4">MOP = (15.8 &times; 1.75) + 1.2 = 27.65 + 1.2 = <strong>28.85A</strong></p>
                  <p className="text-white/60">Round up to standard size &rarr; 30A breaker maximum</p>
                </div>
              </div>
            </section>

            <section id="circuit-sizing" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Circuit Sizing for AC Units and Heat Pumps</h2>
              <p className="text-white/80 mb-4">
                Sizing the branch circuit for HVAC equipment involves matching the wire, breaker, and disconnect to the nameplate MCA and MOP values. Here is the step-by-step process for both single-phase and <Link href="/blog/how-to-calculate-voltage-drop" className="text-purple-400 hover:text-purple-300">three-phase systems where voltage drop must also be considered</Link>.
              </p>

              <div className="space-y-4 my-6">
                <div className="bg-white/5 rounded-xl p-4 flex items-start gap-4">
                  <span className="bg-purple-600 text-white text-sm font-bold px-3 py-1 rounded-full">1</span>
                  <div>
                    <p className="font-semibold text-white">Read the Equipment Nameplate</p>
                    <p className="text-white/60 text-sm">Locate the MCA, MOP, voltage, phase, and frequency on the condensing unit nameplate. For split systems, the outdoor unit nameplate typically includes the total system MCA/MOP. For package units, all data is on one nameplate.</p>
                  </div>
                </div>
                <div className="bg-white/5 rounded-xl p-4 flex items-start gap-4">
                  <span className="bg-purple-600 text-white text-sm font-bold px-3 py-1 rounded-full">2</span>
                  <div>
                    <p className="font-semibold text-white">Select Wire Size Based on MCA</p>
                    <p className="text-white/60 text-sm">The conductor ampacity must be equal to or greater than the MCA. Use the 60&deg;C column of NEC Table 310.16 for circuits rated 100A or less (per NEC 110.14(C)). Apply <Link href="/blog/derating-factors-conductor-ampacity" className="text-purple-400 hover:text-purple-300">derating factors for ambient temperature and conduit fill</Link> if applicable.</p>
                  </div>
                </div>
                <div className="bg-white/5 rounded-xl p-4 flex items-start gap-4">
                  <span className="bg-purple-600 text-white text-sm font-bold px-3 py-1 rounded-full">3</span>
                  <div>
                    <p className="font-semibold text-white">Select Breaker/Fuse Size Based on MOP</p>
                    <p className="text-white/60 text-sm">The overcurrent protective device (OCPD) must not exceed the MOP. If the MOP falls between standard sizes, you may round up to the next standard size per NEC 440.22(A). Start with a smaller breaker and only increase if the compressor trips on startup.</p>
                  </div>
                </div>
                <div className="bg-white/5 rounded-xl p-4 flex items-start gap-4">
                  <span className="bg-purple-600 text-white text-sm font-bold px-3 py-1 rounded-full">4</span>
                  <div>
                    <p className="font-semibold text-white">Verify Voltage Drop</p>
                    <p className="text-white/60 text-sm">For long circuit runs (common when the condensing unit is far from the panel), check that voltage drop does not exceed 3% for the branch circuit. Excessive voltage drop causes hard starting, overheating, and premature compressor failure.</p>
                  </div>
                </div>
                <div className="bg-white/5 rounded-xl p-4 flex items-start gap-4">
                  <span className="bg-purple-600 text-white text-sm font-bold px-3 py-1 rounded-full">5</span>
                  <div>
                    <p className="font-semibold text-white">Size the Disconnect</p>
                    <p className="text-white/60 text-sm">The disconnect must be rated at least 115% of the nameplate rated-load current or branch-circuit selection current, whichever is greater (NEC 440.12). The disconnect must also be rated for the voltage of the circuit.</p>
                  </div>
                </div>
              </div>

              <h3 className="text-xl font-display font-semibold mb-3 text-cyan-400">Common Residential A/C Circuit Sizes</h3>
              <div className="overflow-x-auto my-6">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-white/20">
                      <th className="text-left py-3 px-4 text-white/60">A/C Size</th>
                      <th className="text-left py-3 px-4 text-white/60">Typical MCA</th>
                      <th className="text-left py-3 px-4 text-white/60">Typical MOP</th>
                      <th className="text-left py-3 px-4 text-white/60">Wire Size</th>
                      <th className="text-left py-3 px-4 text-white/60">Breaker</th>
                    </tr>
                  </thead>
                  <tbody className="text-white/80">
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">1.5 - 2 Ton</td>
                      <td className="py-3 px-4 font-mono">12-15A</td>
                      <td className="py-3 px-4 font-mono">20-25A</td>
                      <td className="py-3 px-4 font-mono text-green-400">#12 AWG</td>
                      <td className="py-3 px-4 font-mono text-yellow-400">20-25A</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">2.5 - 3 Ton</td>
                      <td className="py-3 px-4 font-mono">17-22A</td>
                      <td className="py-3 px-4 font-mono">25-35A</td>
                      <td className="py-3 px-4 font-mono text-green-400">#10 AWG</td>
                      <td className="py-3 px-4 font-mono text-yellow-400">25-30A</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">3.5 - 4 Ton</td>
                      <td className="py-3 px-4 font-mono">22-28A</td>
                      <td className="py-3 px-4 font-mono">30-40A</td>
                      <td className="py-3 px-4 font-mono text-green-400">#10 AWG</td>
                      <td className="py-3 px-4 font-mono text-yellow-400">30-35A</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4">5 Ton</td>
                      <td className="py-3 px-4 font-mono">28-35A</td>
                      <td className="py-3 px-4 font-mono">40-50A</td>
                      <td className="py-3 px-4 font-mono text-green-400">#8 AWG</td>
                      <td className="py-3 px-4 font-mono text-yellow-400">40-45A</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-white/60 text-sm">
                Note: These are typical ranges only. Always use the actual nameplate MCA/MOP values for the specific equipment being installed. Values vary significantly between manufacturers and efficiency ratings.
              </p>

              <h3 className="text-xl font-display font-semibold mb-3 text-cyan-400">Heat Pump Considerations</h3>
              <p className="text-white/80 mb-4">
                Heat pumps often have higher electrical requirements than cooling-only units because they include supplemental electric heat strips (strip heat) for defrost mode and low-temperature operation. The nameplate MCA/MOP for a heat pump with strip heat will be significantly higher than a comparable cooling-only unit.
              </p>
              <div className="bg-white/5 rounded-xl p-6 my-6">
                <h4 className="font-semibold text-white mb-3">Heat Pump vs. A/C-Only Circuit Example (3-Ton Unit)</h4>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <p className="text-cyan-400 font-semibold mb-2">Cooling-Only Condensing Unit</p>
                    <p className="text-white/60 text-sm">MCA: 21A / MOP: 30A</p>
                    <p className="text-white/60 text-sm">Wire: #10 AWG / Breaker: 30A</p>
                  </div>
                  <div>
                    <p className="text-orange-400 font-semibold mb-2">Heat Pump with 10kW Strip Heat</p>
                    <p className="text-white/60 text-sm">MCA: 52A / MOP: 60A</p>
                    <p className="text-white/60 text-sm">Wire: #6 AWG / Breaker: 60A</p>
                  </div>
                </div>
                <p className="text-white/50 text-xs mt-4">The strip heat dramatically increases the circuit requirements. Verify whether the air handler and heat strips are on a separate circuit or combined with the outdoor unit.</p>
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

            <section id="disconnect-requirements" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Disconnect Requirements (Within Sight, Rated)</h2>
              <p className="text-white/80 mb-4">
                NEC 440.14 requires a <strong>disconnecting means</strong> for every HVAC unit with a hermetic motor-compressor. The disconnect must be located <strong>within sight</strong> of the equipment and must be <strong>readily accessible</strong>. This is a safety requirement that allows service technicians to visually verify that power is disconnected before working on the unit.
              </p>

              <div className="bg-white/5 rounded-xl p-6 my-6">
                <h4 className="font-semibold text-white mb-3">NEC 440 Disconnect Requirements Summary</h4>
                <ul className="space-y-3 text-white/70">
                  <li className="flex items-start gap-3">
                    <span className="text-purple-400 mt-0.5 font-bold">&#9679;</span>
                    <span><strong>Within sight:</strong> The disconnect must be visible from the equipment and not more than <strong>50 feet</strong> away (NEC 440.14). &ldquo;Within sight&rdquo; means the disconnect is visible and not more than 50 ft from the equipment.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-purple-400 mt-0.5 font-bold">&#9679;</span>
                    <span><strong>Readily accessible:</strong> The disconnect must be accessible without climbing over obstacles, using ladders, or removing panels. A disconnect on a rooftop is acceptable if it is next to the equipment on that same roof.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-purple-400 mt-0.5 font-bold">&#9679;</span>
                    <span><strong>Ampere rating:</strong> Per NEC 440.12, the disconnect must be rated at least <strong>115%</strong> of the nameplate rated-load current or branch-circuit selection current. In practice, standard disconnect sizes (30A, 60A) usually exceed this requirement.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-purple-400 mt-0.5 font-bold">&#9679;</span>
                    <span><strong>Horsepower rating:</strong> For units with a nameplate horsepower rating, the disconnect must also be HP-rated. For hermetic motor-compressors, convert the rated-load current to an equivalent HP using NEC Table 440.12(A).</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-purple-400 mt-0.5 font-bold">&#9679;</span>
                    <span><strong>Type:</strong> The disconnect can be a switch (fusible or non-fusible), a circuit breaker, or a controller that opens all ungrounded conductors simultaneously. A pull-out type disconnect is the most common for residential A/C units.</span>
                  </li>
                </ul>
              </div>

              <h3 className="text-xl font-display font-semibold mb-3 text-cyan-400">Fusible vs. Non-Fusible Disconnects</h3>
              <div className="grid md:grid-cols-2 gap-6 my-6">
                <div className="bg-white/5 rounded-xl p-6">
                  <h4 className="font-semibold text-green-400 mb-3">Non-Fusible Pull-Out</h4>
                  <ul className="text-white/60 text-sm space-y-1">
                    <li>Most common for residential installations</li>
                    <li>Simple pull-out block with no fuses</li>
                    <li>Relies on panel breaker for all OCPD</li>
                    <li>Lower cost, less maintenance</li>
                    <li>NEMA 3R rated for outdoor use</li>
                  </ul>
                </div>
                <div className="bg-white/5 rounded-xl p-6">
                  <h4 className="font-semibold text-yellow-400 mb-3">Fusible Disconnect</h4>
                  <ul className="text-white/60 text-sm space-y-1">
                    <li>Contains time-delay fuses (HACR type)</li>
                    <li>Provides additional overcurrent protection at the equipment</li>
                    <li>May be required by manufacturer or local code</li>
                    <li>Fuses must not exceed MOP value</li>
                    <li>Preferred for commercial installations</li>
                  </ul>
                </div>
              </div>

              <div className="bg-red-900/30 rounded-xl p-6 my-6">
                <h4 className="font-semibold text-red-400 mb-3">Common Disconnect Violations</h4>
                <ul className="text-white/70 space-y-2 text-sm">
                  <li><strong>Not within sight:</strong> Disconnect installed around the corner or inside the building where it cannot be seen from the equipment</li>
                  <li><strong>Not readily accessible:</strong> Disconnect mounted too high, blocked by landscaping, or behind locked panels</li>
                  <li><strong>Undersized:</strong> Using a 30A disconnect on a unit that requires 60A</li>
                  <li><strong>Wrong fuse size:</strong> Fuses in a fusible disconnect exceed the MOP</li>
                  <li><strong>Missing entirely:</strong> No disconnect installed &mdash; relying solely on the panel breaker as the disconnect</li>
                </ul>
              </div>
            </section>

            <section id="overload-protection" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Overload Protection for Compressors</h2>
              <p className="text-white/80 mb-4">
                Overload protection for hermetic refrigerant motor-compressors is covered in <strong>NEC 440.52</strong>. Unlike standard motors where the electrician typically provides overload protection, hermetic compressor overload protection is almost always <strong>factory-installed</strong> by the equipment manufacturer. This is a key difference from standard motor circuits covered in <Link href="/blog/motor-circuit-protection-sizing" className="text-purple-400 hover:text-purple-300">Article 430 motor circuit protection</Link>.
              </p>

              <h3 className="text-xl font-display font-semibold mb-3 text-cyan-400">Types of Overload Protection (NEC 440.52)</h3>
              <div className="space-y-4 my-6">
                <div className="bg-white/5 rounded-xl p-6 border-l-4 border-green-500">
                  <h4 className="font-semibold text-green-400 mb-2">440.52(A)(1) &mdash; Separate Overload Relay</h4>
                  <p className="text-white/70 text-sm">
                    An external overload relay sized per the manufacturer&apos;s instructions. The relay trips to protect the compressor from sustained overcurrent conditions. This type is common on older or larger commercial equipment. The overload relay must be rated at not more than 140% of the compressor rated-load current.
                  </p>
                </div>

                <div className="bg-white/5 rounded-xl p-6 border-l-4 border-cyan-500">
                  <h4 className="font-semibold text-cyan-400 mb-2">440.52(A)(2) &mdash; Thermal Protector Integral with Compressor</h4>
                  <p className="text-white/70 text-sm">
                    A thermal sensor embedded in the compressor motor windings that opens the control circuit when temperature exceeds safe limits. This is the most common type on modern residential and light commercial equipment. The thermal protector is approved as part of the listed equipment and requires no additional external overload protection.
                  </p>
                </div>

                <div className="bg-white/5 rounded-xl p-6 border-l-4 border-yellow-500">
                  <h4 className="font-semibold text-yellow-400 mb-2">440.52(A)(3) &mdash; Fuse or Inverse-Time Breaker</h4>
                  <p className="text-white/70 text-sm">
                    A fuse or inverse-time circuit breaker may serve as overload protection if it is rated at not more than 125% of the compressor rated-load current. This method is less common and only used when the equipment does not have factory-installed overload protection.
                  </p>
                </div>

                <div className="bg-white/5 rounded-xl p-6 border-l-4 border-purple-500">
                  <h4 className="font-semibold text-purple-400 mb-2">440.52(A)(4) &mdash; Protective System Approved for the Equipment</h4>
                  <p className="text-white/70 text-sm">
                    A complete protection system furnished and approved as part of the listed equipment. This includes electronic overload modules, variable frequency drive protection, and other manufacturer-specific systems. The protection system must be listed as suitable for the specific compressor.
                  </p>
                </div>
              </div>

              <div className="bg-cyan-900/30 rounded-xl p-6 my-6">
                <h4 className="font-semibold text-cyan-400 mb-3">Practical Takeaway</h4>
                <p className="text-white/70">
                  For the vast majority of residential and commercial HVAC installations, the compressor overload protection is <strong>built into the unit by the manufacturer</strong>. As the installing electrician, your responsibility for overload protection is typically limited to verifying the nameplate states &ldquo;integral overload protection&rdquo; or equivalent. Your primary responsibilities are sizing the branch circuit conductors (MCA), overcurrent protection (MOP), and disconnect correctly.
                </p>
              </div>
            </section>

            <section id="wire-sizing-examples" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Wire Sizing Examples</h2>
              <p className="text-white/80 mb-4">
                Let&apos;s walk through several real-world wire sizing scenarios for HVAC equipment. Remember that conductor ampacity must be equal to or greater than the nameplate MCA, and you must also check for voltage drop on longer runs.
              </p>

              <div className="space-y-6 my-6">
                <div className="bg-white/5 rounded-xl p-6">
                  <h4 className="font-semibold text-green-400 mb-3">Example 1: Residential 3-Ton A/C (240V, 1-Phase)</h4>
                  <p className="text-white/60 text-sm mb-3">Nameplate: MCA = 21A, MOP = 30A, 208-230V, 1-Phase</p>
                  <div className="space-y-2 font-mono text-sm">
                    <p className="text-white/70">Wire: Ampacity &ge; 21A &rarr; <span className="text-green-400">#10 AWG THHN (30A @ 60&deg;C)</span></p>
                    <p className="text-white/70">Breaker: &le; 30A &rarr; <span className="text-yellow-400">30A 2-pole breaker</span></p>
                    <p className="text-white/70">Disconnect: 115% of RLA &rarr; <span className="text-purple-400">60A non-fusible pull-out</span></p>
                    <p className="text-white/70">Circuit: <span className="text-cyan-400">#10/2 w/ground NM-B or #10 THHN in conduit</span></p>
                  </div>
                </div>

                <div className="bg-white/5 rounded-xl p-6">
                  <h4 className="font-semibold text-green-400 mb-3">Example 2: Residential 5-Ton Heat Pump with 15kW Strip Heat (240V, 1-Phase)</h4>
                  <p className="text-white/60 text-sm mb-3">Nameplate: MCA = 67A, MOP = 80A, 208-230V, 1-Phase</p>
                  <div className="space-y-2 font-mono text-sm">
                    <p className="text-white/70">Wire: Ampacity &ge; 67A &rarr; <span className="text-green-400">#4 AWG THHN (70A @ 60&deg;C)</span></p>
                    <p className="text-white/70">Breaker: &le; 80A &rarr; <span className="text-yellow-400">80A 2-pole breaker</span></p>
                    <p className="text-white/70">Disconnect: <span className="text-purple-400">100A fusible or non-fusible disconnect</span></p>
                    <p className="text-white/70">Conduit: <span className="text-cyan-400">3/4&quot; EMT for two #4 + #4 ground (check fill)</span></p>
                  </div>
                </div>

                <div className="bg-white/5 rounded-xl p-6">
                  <h4 className="font-semibold text-green-400 mb-3">Example 3: Commercial 15-Ton Rooftop Unit (208V, 3-Phase)</h4>
                  <p className="text-white/60 text-sm mb-3">Nameplate: MCA = 58A, MOP = 70A, 208V, 3-Phase</p>
                  <div className="space-y-2 font-mono text-sm">
                    <p className="text-white/70">Wire: Ampacity &ge; 58A &rarr; <span className="text-green-400">#6 AWG THHN (65A @ 75&deg;C)</span></p>
                    <p className="text-white/70">Note: 60&deg;C column gives 55A for #6 &mdash; must upsize to <span className="text-green-400">#4 AWG</span> if terminals are 60&deg;C rated</p>
                    <p className="text-white/70">Breaker: &le; 70A &rarr; <span className="text-yellow-400">70A 3-pole breaker</span></p>
                    <p className="text-white/70">Disconnect: <span className="text-purple-400">100A 3-phase fusible disconnect</span></p>
                  </div>
                </div>

                <div className="bg-white/5 rounded-xl p-6">
                  <h4 className="font-semibold text-green-400 mb-3">Example 4: Long Run &mdash; Voltage Drop Check (240V, 1-Phase, 150 ft)</h4>
                  <p className="text-white/60 text-sm mb-3">Nameplate: MCA = 21A, MOP = 30A, Circuit run = 150 feet</p>
                  <div className="space-y-2 font-mono text-sm">
                    <p className="text-white/70">VD with #10 AWG = (2 &times; 150 &times; 21 &times; 1.21) / (1000) = <span className="text-red-400">7.62V = 3.18%</span></p>
                    <p className="text-white/70">3.18% exceeds 3% recommendation &rarr; <span className="text-green-400">Upsize to #8 AWG</span></p>
                    <p className="text-white/70">VD with #8 AWG = (2 &times; 150 &times; 21 &times; 0.764) / (1000) = <span className="text-green-400">4.81V = 2.0%</span> &#10003;</p>
                  </div>
                </div>
              </div>

              <div className="bg-orange-900/30 rounded-xl p-6 my-6">
                <h4 className="font-semibold text-orange-400 mb-3">Temperature Rating of Terminations</h4>
                <p className="text-white/70 text-sm">
                  Per NEC 110.14(C), for circuits rated 100A or less, conductors must be sized using the <strong>60&deg;C column</strong> of Table 310.16 unless the equipment is listed and marked for 75&deg;C terminations. Most residential HVAC disconnects and breakers have 60&deg;C rated terminals. Commercial equipment more commonly has 75&deg;C terminals. Always check the terminal temperature rating before selecting wire size.
                </p>
              </div>
            </section>

            <section id="common-mistakes" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Common Installation Mistakes</h2>
              <p className="text-white/80 mb-4">
                HVAC electrical work accounts for a significant number of inspection failures and code violations. Here are the most common mistakes electricians and HVAC installers make:
              </p>

              <div className="grid md:grid-cols-2 gap-4 my-6">
                <div className="bg-red-900/20 rounded-xl p-6 border border-red-500/20">
                  <h4 className="font-semibold text-red-400 mb-3">1. Using FLA Instead of Nameplate MCA</h4>
                  <p className="text-white/60 text-sm">
                    Calculating wire size from the compressor FLA or RLA instead of the nameplate MCA. The manufacturer has already done the calculation &mdash; use the MCA and MOP values directly from the nameplate.
                  </p>
                </div>
                <div className="bg-red-900/20 rounded-xl p-6 border border-red-500/20">
                  <h4 className="font-semibold text-red-400 mb-3">2. Exceeding the MOP</h4>
                  <p className="text-white/60 text-sm">
                    Installing a breaker larger than the nameplate MOP. The MOP is a hard maximum. If you need a larger breaker to prevent tripping, there is a problem with the equipment or the installation &mdash; not with the breaker size.
                  </p>
                </div>
                <div className="bg-red-900/20 rounded-xl p-6 border border-red-500/20">
                  <h4 className="font-semibold text-red-400 mb-3">3. Disconnect Not Within Sight</h4>
                  <p className="text-white/60 text-sm">
                    Installing the disconnect around the corner, inside the house, or more than 50 feet from the unit. The disconnect must be visible from the equipment to allow service technicians to verify it is open before working on the unit.
                  </p>
                </div>
                <div className="bg-red-900/20 rounded-xl p-6 border border-red-500/20">
                  <h4 className="font-semibold text-red-400 mb-3">4. Undersized Conductors</h4>
                  <p className="text-white/60 text-sm">
                    Using wire that has an ampacity less than the MCA. Common when using the 75&deg;C column for 60&deg;C terminals, or failing to apply ambient temperature derating for attic or rooftop runs.
                  </p>
                </div>
                <div className="bg-red-900/20 rounded-xl p-6 border border-red-500/20">
                  <h4 className="font-semibold text-red-400 mb-3">5. Ignoring Voltage Drop</h4>
                  <p className="text-white/60 text-sm">
                    Running #10 wire 200+ feet to a condensing unit without checking voltage drop. Excessive voltage drop causes low voltage at the compressor, hard starting, high amperage draw, and premature compressor failure.
                  </p>
                </div>
                <div className="bg-red-900/20 rounded-xl p-6 border border-red-500/20">
                  <h4 className="font-semibold text-red-400 mb-3">6. Wrong Disconnect Rating</h4>
                  <p className="text-white/60 text-sm">
                    Using a disconnect that is not rated for the voltage or amperage. A 30A disconnect on a 5-ton unit, or a 240V disconnect on a 208V 3-phase system. The disconnect must match both the voltage and the minimum ampere rating.
                  </p>
                </div>
                <div className="bg-red-900/20 rounded-xl p-6 border border-red-500/20">
                  <h4 className="font-semibold text-red-400 mb-3">7. No Equipment Grounding Conductor</h4>
                  <p className="text-white/60 text-sm">
                    Failing to install or properly connect the equipment grounding conductor. The condensing unit frame must be grounded per NEC 250.110. Metal conduit can serve as the EGC if properly installed, but a separate wire is often safer.
                  </p>
                </div>
                <div className="bg-red-900/20 rounded-xl p-6 border border-red-500/20">
                  <h4 className="font-semibold text-red-400 mb-3">8. Whip Not Secured</h4>
                  <p className="text-white/60 text-sm">
                    Failing to secure the flexible conduit (whip) connection to the condensing unit. Liquid-tight flexible metal conduit must be secured within 12 inches of each connector and supported at intervals per NEC 350.30.
                  </p>
                </div>
              </div>

              <div className="bg-cyan-900/30 rounded-xl p-6 my-6">
                <h4 className="font-semibold text-cyan-400 mb-3">Inspection Preparation Checklist</h4>
                <ul className="text-white/70 space-y-2 text-sm">
                  <li>&#9744; Wire size meets or exceeds nameplate MCA</li>
                  <li>&#9744; Breaker/fuse does not exceed nameplate MOP</li>
                  <li>&#9744; Disconnect within sight and within 50 feet of equipment</li>
                  <li>&#9744; Disconnect properly rated (amperes, voltage, HP if applicable)</li>
                  <li>&#9744; Equipment grounding conductor properly sized and connected</li>
                  <li>&#9744; Flexible conduit properly secured and supported</li>
                  <li>&#9744; Correct terminal torque applied per manufacturer specs</li>
                  <li>&#9744; Voltage drop within acceptable limits for long runs</li>
                  <li>&#9744; All connections weatherproofed for outdoor equipment</li>
                  <li>&#9744; Nameplate legible and accessible for inspector review</li>
                </ul>
              </div>
            </section>

            <section id="faq" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Frequently Asked Questions</h2>

              <div className="space-y-6 my-6">
                <div className="bg-white/5 rounded-xl p-6">
                  <h3 className="font-semibold text-white mb-2">What breaker size do I need for a 3-ton A/C unit?</h3>
                  <p className="text-white/70 text-sm">
                    The breaker size depends on the <strong>nameplate MOP</strong>, not the tonnage. A typical 3-ton unit on 240V single-phase has an MOP of 25-35A, so a 25A or 30A breaker is common. Always check the specific unit&apos;s nameplate &mdash; different manufacturers and efficiency ratings result in different MOP values for the same tonnage.
                  </p>
                </div>

                <div className="bg-white/5 rounded-xl p-6">
                  <h3 className="font-semibold text-white mb-2">Can I use NM-B (Romex) cable to wire an A/C condensing unit?</h3>
                  <p className="text-white/70 text-sm">
                    NM-B cable can be used for the indoor portion of the circuit run but <strong>cannot be exposed to physical damage or used outdoors</strong>. The final connection to the outdoor unit must be made with an approved wiring method such as liquid-tight flexible metal conduit (LFMC), rigid metal conduit (RMC), or other NEC-approved raceway. Most installations transition from NM-B inside to conduit outside at the penetration point.
                  </p>
                </div>

                <div className="bg-white/5 rounded-xl p-6">
                  <h3 className="font-semibold text-white mb-2">Does the A/C unit need a dedicated circuit?</h3>
                  <p className="text-white/70 text-sm">
                    Yes. Per NEC 440.6, a hermetic refrigerant motor-compressor must be on a dedicated <strong>individual branch circuit</strong>. No other outlets, lights, or equipment may be connected to the same circuit. This ensures the full capacity of the circuit is available for the HVAC equipment at all times.
                  </p>
                </div>

                <div className="bg-white/5 rounded-xl p-6">
                  <h3 className="font-semibold text-white mb-2">Can the panel breaker serve as the disconnect?</h3>
                  <p className="text-white/70 text-sm">
                    Only if the panel is <strong>within sight of the equipment and within 50 feet</strong>. In most residential installations, the panel is inside the house and the condensing unit is outside, so the panel breaker does not meet the &ldquo;within sight&rdquo; requirement. A separate disconnect at the outdoor unit is required.
                  </p>
                </div>

                <div className="bg-white/5 rounded-xl p-6">
                  <h3 className="font-semibold text-white mb-2">What is the difference between HACR and standard circuit breakers?</h3>
                  <p className="text-white/70 text-sm">
                    HACR (Heating, Air Conditioning, and Refrigeration) rated breakers were specifically tested for the high inrush currents of compressor motors. As of the 2011 NEC, the HACR rating requirement was removed, and all standard UL 489 breakers are now considered suitable for HACR applications. However, older equipment may still specify HACR breakers on the nameplate.
                  </p>
                </div>

                <div className="bg-white/5 rounded-xl p-6">
                  <h3 className="font-semibold text-white mb-2">How do I size a circuit for a mini-split system?</h3>
                  <p className="text-white/70 text-sm">
                    Mini-splits are sized the same way as any other HVAC equipment &mdash; use the nameplate MCA and MOP. Most single-zone mini-splits (9,000-18,000 BTU) require a 20A or 25A circuit on #12 or #10 wire. Multi-zone mini-splits with larger outdoor units may require 30A+ circuits. Always verify against the specific model&apos;s nameplate data.
                  </p>
                </div>

                <div className="bg-white/5 rounded-xl p-6">
                  <h3 className="font-semibold text-white mb-2">What if the MCA is higher than the MOP suggests?</h3>
                  <p className="text-white/70 text-sm">
                    This is normal and expected. The MCA is calculated with a 1.25 multiplier, while the MOP uses a 1.75 multiplier applied to different components. It is common for the wire ampacity (based on MCA) to be larger than the breaker size (based on MOP). This is one of the unique aspects of HVAC circuits &mdash; unlike most other circuits, the wire may appear to be &ldquo;over-protected.&rdquo; This is by design per NEC 440.
                  </p>
                </div>

                <div className="bg-white/5 rounded-xl p-6">
                  <h3 className="font-semibold text-white mb-2">Do I need a surge protector for the A/C unit?</h3>
                  <p className="text-white/70 text-sm">
                    The NEC does not specifically require a surge protector for individual A/C units, but NEC 230.67 (added in 2020) requires surge protection at the service entrance for dwelling units, which protects all branch circuits. Many HVAC manufacturers recommend or require surge protection to maintain their warranty. A Type 2 SPD at the disconnect or panel is an inexpensive safeguard for expensive compressor electronics.
                  </p>
                </div>
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
                <Link href="/blog/nec-article-240-overcurrent-protection" className="bg-white/5 hover:bg-white/10 rounded-xl p-6 transition-colors">
                  <span className="text-purple-400 text-sm">NEC Code</span>
                  <h3 className="font-semibold mt-2">NEC Article 240: Overcurrent Protection</h3>
                </Link>
                <Link href="/blog/motor-circuit-protection-sizing" className="bg-white/5 hover:bg-white/10 rounded-xl p-6 transition-colors">
                  <span className="text-purple-400 text-sm">NEC Code</span>
                  <h3 className="font-semibold mt-2">Motor Circuit Protection & Sizing Guide</h3>
                </Link>
                <Link href="/blog/wire-sizing-guide-nec-ampacity-tables" className="bg-white/5 hover:bg-white/10 rounded-xl p-6 transition-colors">
                  <span className="text-blue-400 text-sm">Calculations</span>
                  <h3 className="font-semibold mt-2">Wire Sizing Guide: NEC Ampacity Tables</h3>
                </Link>
                <Link href="/blog/disconnect-switch-requirements-nec" className="bg-white/5 hover:bg-white/10 rounded-xl p-6 transition-colors">
                  <span className="text-purple-400 text-sm">NEC Code</span>
                  <h3 className="font-semibold mt-2">Disconnect Switch Requirements per NEC</h3>
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
