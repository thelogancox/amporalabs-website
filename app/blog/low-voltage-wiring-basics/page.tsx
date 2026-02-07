import { Metadata } from "next";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import { BreadcrumbJsonLd, BlogPostingJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Low Voltage Wiring Basics: Class 2, Class 3 & Structured Cabling Guide",
  description: "Complete guide to low voltage wiring installation. Learn Class 2 and Class 3 circuit requirements, separation from power wiring, structured cabling standards, and NEC Article 725 compliance for electricians.",
  keywords: [
    "low voltage wiring",
    "Class 2 circuits",
    "Class 3 circuits",
    "NEC Article 725",
    "structured cabling",
    "low voltage separation requirements",
    "Cat6 wiring installation",
    "low voltage cable types",
    "power limited circuits",
    "ANSI TIA 568",
    "low voltage electrician",
    "data cabling installation",
    "security wiring",
    "fire alarm wiring Class 2",
    "thermostat wiring",
    "low voltage conduit requirements"
  ],
  alternates: {
    canonical: "https://amporalabs.com/blog/low-voltage-wiring-basics",
  },
  openGraph: {
    title: "Low Voltage Wiring Basics: Class 2, Class 3 & Structured Cabling - Ampora",
    description: "Master low voltage installation with Class 2/Class 3 circuit requirements, separation rules, and structured cabling standards.",
    url: "https://amporalabs.com/blog/low-voltage-wiring-basics",
    type: "article",
  },
};

function HeroIllustration() {
  return (
    <svg viewBox="0 0 400 180" className="w-full h-40 md:h-48" aria-label="Low voltage wiring separation from power wiring">
      {/* Background */}
      <rect x="10" y="10" width="380" height="160" rx="4" fill="#1f2937" stroke="#374151" strokeWidth="1"/>

      {/* Wall/Stud Representation */}
      <rect x="195" y="20" width="10" height="140" fill="#4b5563"/>
      <text x="200" y="170" textAnchor="middle" fill="#9ca3af" fontSize="7">STUD</text>

      {/* Power Side */}
      <g transform="translate(30, 30)">
        <text x="60" y="0" textAnchor="middle" fill="#ef4444" fontSize="10" fontWeight="bold">POWER (120V+)</text>

        {/* Power Panel */}
        <rect x="20" y="15" width="80" height="50" rx="3" fill="#1e293b" stroke="#ef4444" strokeWidth="2"/>
        <text x="60" y="35" textAnchor="middle" fill="#ef4444" fontSize="8" fontWeight="bold">PANEL</text>
        <text x="60" y="48" textAnchor="middle" fill="#9ca3af" fontSize="7">120/240V</text>

        {/* Romex Cable */}
        <path d="M 100 40 L 140 40 L 140 100" stroke="#ef4444" strokeWidth="4" fill="none" strokeLinecap="round"/>
        <text x="145" y="75" fill="#fca5a5" fontSize="6">14/2 NM-B</text>

        {/* Outlet */}
        <rect x="130" y="100" width="25" height="35" rx="2" fill="#1e293b" stroke="#ef4444" strokeWidth="1.5"/>
        <circle cx="142" cy="112" r="3" fill="#ef4444"/>
        <circle cx="142" cy="125" r="3" fill="#ef4444"/>
      </g>

      {/* Separation Zone */}
      <g transform="translate(175, 40)">
        <line x1="20" y1="0" x2="20" y2="100" stroke="#f59e0b" strokeWidth="2" strokeDasharray="5,3"/>
        <text x="20" y="115" textAnchor="middle" fill="#f59e0b" fontSize="7" fontWeight="bold">2" MIN</text>
        <text x="20" y="125" textAnchor="middle" fill="#fbbf24" fontSize="6">SEPARATION</text>
      </g>

      {/* Low Voltage Side */}
      <g transform="translate(220, 30)">
        <text x="80" y="0" textAnchor="middle" fill="#22c55e" fontSize="10" fontWeight="bold">LOW VOLTAGE</text>

        {/* Structured Cabling Panel */}
        <rect x="50" y="15" width="80" height="50" rx="3" fill="#1e293b" stroke="#22c55e" strokeWidth="2"/>
        <text x="90" y="33" textAnchor="middle" fill="#22c55e" fontSize="7" fontWeight="bold">PATCH</text>
        <text x="90" y="43" textAnchor="middle" fill="#22c55e" fontSize="7" fontWeight="bold">PANEL</text>
        <text x="90" y="55" textAnchor="middle" fill="#9ca3af" fontSize="6">Cat6/Coax</text>

        {/* Cat6 Cable */}
        <path d="M 50 35 L 20 35 L 20 95" stroke="#3b82f6" strokeWidth="3" fill="none" strokeLinecap="round"/>
        <text x="5" y="70" fill="#93c5fd" fontSize="6">Cat6</text>

        {/* Coax Cable */}
        <path d="M 50 50 L 30 50 L 30 95" stroke="#8b5cf6" strokeWidth="3" fill="none" strokeLinecap="round"/>
        <text x="35" y="75" fill="#c4b5fd" fontSize="6">RG6</text>

        {/* Data Jack */}
        <rect x="10" y="95" width="20" height="25" rx="2" fill="#1e293b" stroke="#3b82f6" strokeWidth="1.5"/>
        <rect x="14" y="102" width="12" height="8" rx="1" fill="#3b82f6"/>

        {/* Coax Jack */}
        <rect x="35" y="95" width="20" height="25" rx="2" fill="#1e293b" stroke="#8b5cf6" strokeWidth="1.5"/>
        <circle cx="45" cy="107" r="4" fill="none" stroke="#8b5cf6" strokeWidth="1.5"/>
      </g>

      {/* Legend */}
      <g transform="translate(25, 155)">
        <rect x="0" y="0" width="10" height="6" fill="#ef4444"/>
        <text x="14" y="6" fill="#9ca3af" fontSize="6">Power</text>
        <rect x="50" y="0" width="10" height="6" fill="#3b82f6"/>
        <text x="64" y="6" fill="#9ca3af" fontSize="6">Data</text>
        <rect x="95" y="0" width="10" height="6" fill="#8b5cf6"/>
        <text x="109" y="6" fill="#9ca3af" fontSize="6">Coax</text>
        <rect x="140" y="0" width="10" height="6" fill="#22c55e"/>
        <text x="154" y="6" fill="#9ca3af" fontSize="6">Class 2</text>
      </g>
    </svg>
  );
}

export default function LowVoltageWiringBasicsPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navigation />
      <div className="pt-20">
        <BreadcrumbJsonLd
          items={[
            { name: "Home", url: "https://amporalabs.com" },
            { name: "Blog", url: "https://amporalabs.com/blog" },
            { name: "Low Voltage Wiring Basics", url: "https://amporalabs.com/blog/low-voltage-wiring-basics" },
          ]}
        />
        <BlogPostingJsonLd
          headline="Low Voltage Wiring Basics: Class 2, Class 3 & Structured Cabling Guide"
          description="Complete guide to low voltage installation including Class 2/Class 3 circuits, separation requirements, and structured cabling standards."
          datePublished="2025-01-15"
          dateModified="2025-01-15"
          url="https://amporalabs.com/blog/low-voltage-wiring-basics"
          wordCount={2800}
          keywords={["low voltage wiring", "Class 2 circuits", "Class 3 circuits", "structured cabling"]}
        />

        <article className="max-w-4xl mx-auto px-6 py-12">
          {/* Breadcrumb */}
          <nav className="text-sm text-white/60 mb-8">
            <Link href="/" className="hover:text-white">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/blog" className="hover:text-white">Blog</Link>
            <span className="mx-2">/</span>
            <span className="text-white">Low Voltage Wiring Basics</span>
          </nav>

          {/* Article Header */}
          <header className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <span className="px-3 py-1 bg-green-600/30 text-green-300 text-sm font-medium rounded-full">
                Installation
              </span>
              <span className="text-white/40 text-sm">10 min read</span>
              <span className="text-white/40 text-sm">January 15, 2025</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6 leading-tight">
              Low Voltage Wiring Basics: Class 2, Class 3 & Structured Cabling Guide
            </h1>
            <p className="text-xl text-white/70">
              Master the fundamentals of low voltage installation. From Class 2 thermostats to enterprise structured cabling, learn the NEC requirements and best practices that separate professional installations from amateur work.
            </p>
          </header>

          <div className="mb-12 bg-gradient-to-br from-green-900/20 to-blue-900/20 rounded-2xl p-6 border border-white/10">
            <HeroIllustration />
          </div>

          {/* Quick Reference CTA */}
          <div className="bg-purple-900/30 border border-purple-500/30 rounded-2xl p-6 mb-12">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div>
                <h3 className="font-display font-bold text-lg mb-1">NEC Code Reference at Your Fingertips</h3>
                <p className="text-white/70 text-sm">Ampora includes Article 725 and low voltage code requirements for quick field reference.</p>
              </div>
              <a
                href="https://apps.apple.com/us/app/ampora/id6753693522"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-purple-600 text-white font-semibold rounded-full hover:bg-purple-500 transition-colors whitespace-nowrap"
              >
                Download Free
              </a>
            </div>
          </div>

          {/* Table of Contents */}
          <div className="bg-white/5 rounded-2xl p-6 mb-12">
            <h2 className="font-display font-bold mb-4">In This Guide</h2>
            <ul className="space-y-2 text-white/70">
              <li><a href="#what-is-low-voltage" className="hover:text-purple-400">What is Low Voltage Wiring?</a></li>
              <li><a href="#class-2-class-3" className="hover:text-purple-400">Class 2 and Class 3 Circuits</a></li>
              <li><a href="#nec-article-725" className="hover:text-purple-400">NEC Article 725 Requirements</a></li>
              <li><a href="#separation-rules" className="hover:text-purple-400">Separation from Power Wiring</a></li>
              <li><a href="#cable-types" className="hover:text-purple-400">Low Voltage Cable Types</a></li>
              <li><a href="#structured-cabling" className="hover:text-purple-400">Structured Cabling Systems</a></li>
              <li><a href="#installation-methods" className="hover:text-purple-400">Installation Methods & Best Practices</a></li>
              <li><a href="#testing-certification" className="hover:text-purple-400">Testing and Certification</a></li>
            </ul>
          </div>

          {/* Article Content */}
          <div className="prose prose-invert prose-lg max-w-none">

            <section id="what-is-low-voltage" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">What is Low Voltage Wiring?</h2>
              <p className="text-white/80 mb-4">
                Low voltage wiring refers to electrical systems operating at power levels and voltages that present reduced shock hazards. In the context of the NEC, low voltage typically means power-limited circuits as defined in Article 725, operating at 50 volts or less for Class 2 and Class 3 circuits.
              </p>
              <p className="text-white/80 mb-4">
                Common low voltage applications include:
              </p>
              <ul className="list-disc list-inside text-white/70 space-y-2 mb-4">
                <li><strong>Data and telecommunications:</strong> Cat5e, Cat6, Cat6A, fiber optic cabling</li>
                <li><strong>Security systems:</strong> Burglar alarms, access control, CCTV</li>
                <li><strong>Fire alarm systems:</strong> Initiating devices, notification appliances</li>
                <li><strong>Audio/video systems:</strong> Speakers, displays, control systems</li>
                <li><strong>HVAC controls:</strong> Thermostats, zone dampers, building automation</li>
                <li><strong>Doorbells and intercoms:</strong> Traditional and IP-based systems</li>
                <li><strong>Landscape lighting:</strong> 12V and 24V LED systems</li>
              </ul>
              <div className="bg-blue-900/30 rounded-xl p-6 my-6">
                <h4 className="font-semibold text-blue-400 mb-3">Why Separate Low Voltage?</h4>
                <p className="text-white/80">
                  Power-limited circuits are given reduced installation requirements because the power source limits current and voltage to levels that minimize fire and shock hazards. This allows for simpler wiring methods but still requires proper installation to ensure system performance and longevity.
                </p>
              </div>
            </section>

            <section id="class-2-class-3" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Class 2 and Class 3 Circuits</h2>
              <p className="text-white/80 mb-4">
                NEC Article 725 defines three classes of remote-control, signaling, and power-limited circuits. Class 2 and Class 3 are the most common in low voltage work.
              </p>

              <div className="grid md:grid-cols-2 gap-6 my-6">
                <div className="bg-green-900/30 rounded-xl p-6">
                  <h3 className="font-semibold text-green-400 mb-3">Class 2 Circuits</h3>
                  <p className="text-white/70 mb-3 text-sm">
                    Power-limited circuits with maximum ratings per Table 11(A) and 11(B):
                  </p>
                  <ul className="text-white/60 text-sm space-y-1">
                    <li><strong>Voltage:</strong> 0-30V AC/DC typical</li>
                    <li><strong>Power:</strong> 100 VA maximum (AC)</li>
                    <li><strong>Current:</strong> 5A maximum at 30V</li>
                    <li><strong>Examples:</strong> Thermostats, doorbells, most security sensors</li>
                  </ul>
                </div>
                <div className="bg-cyan-900/30 rounded-xl p-6">
                  <h3 className="font-semibold text-cyan-400 mb-3">Class 3 Circuits</h3>
                  <p className="text-white/70 mb-3 text-sm">
                    Power-limited circuits with higher voltage allowances:
                  </p>
                  <ul className="text-white/60 text-sm space-y-1">
                    <li><strong>Voltage:</strong> 0-100V AC/DC</li>
                    <li><strong>Power:</strong> 100 VA maximum (AC)</li>
                    <li><strong>Current:</strong> Limited by power source</li>
                    <li><strong>Examples:</strong> Some nurse call systems, audio speakers</li>
                  </ul>
                </div>
              </div>

              <h3 className="text-xl font-display font-semibold mb-3 text-yellow-400">Class 2 vs Class 3 Installation Differences</h3>
              <p className="text-white/80 mb-4">
                While both are power-limited, Class 3 circuits require additional shock protection due to higher voltages:
              </p>
              <div className="overflow-x-auto my-6">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-white/20">
                      <th className="text-left py-3 px-4 text-white/60">Requirement</th>
                      <th className="text-left py-3 px-4 text-white/60">Class 2</th>
                      <th className="text-left py-3 px-4 text-white/60">Class 3</th>
                    </tr>
                  </thead>
                  <tbody className="text-white/80">
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">Insulation</td>
                      <td className="py-3 px-4 text-green-400">Standard</td>
                      <td className="py-3 px-4 text-yellow-400">Enhanced required</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">Exposed wiring</td>
                      <td className="py-3 px-4 text-green-400">Permitted in accessible areas</td>
                      <td className="py-3 px-4 text-yellow-400">Protected if accessible</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">Conductor size</td>
                      <td className="py-3 px-4">18 AWG minimum</td>
                      <td className="py-3 px-4">18 AWG minimum</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4">Cable marking</td>
                      <td className="py-3 px-4">CL2, CL2R, CL2P</td>
                      <td className="py-3 px-4">CL3, CL3R, CL3P</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="bg-orange-900/30 rounded-xl p-6 my-6">
                <h4 className="font-semibold text-orange-400 mb-3">Power Source Requirements</h4>
                <p className="text-white/70">
                  Class 2 and Class 3 circuits must be supplied from a <strong>listed Class 2 or Class 3 power source</strong>. The power source (transformer, power supply, or battery) is what makes the circuit "power-limited." Using a non-listed power source converts the circuit to Class 1, requiring Chapter 3 wiring methods.
                </p>
              </div>
            </section>

            <section id="nec-article-725" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">NEC Article 725 Requirements</h2>
              <p className="text-white/80 mb-4">
                NEC Article 725 covers "Class 1, Class 2, and Class 3 Remote-Control, Signaling, and Power-Limited Circuits." Key sections for low voltage work:
              </p>

              <div className="space-y-4 my-6">
                <div className="bg-white/5 rounded-xl p-6">
                  <h4 className="font-semibold text-purple-400 mb-2">725.3 - Other Articles</h4>
                  <p className="text-white/70 text-sm">
                    Class 2/3 circuits in specific locations must also comply with other articles: hazardous locations (500-516), healthcare facilities (517), places of assembly (518), theatres (520), etc.
                  </p>
                </div>

                <div className="bg-white/5 rounded-xl p-6">
                  <h4 className="font-semibold text-purple-400 mb-2">725.25 - Abandoned Cables</h4>
                  <p className="text-white/70 text-sm">
                    Accessible portions of abandoned Class 2/3 cables must be removed. This reduces fuel load and fire spread in plenums and riser shafts.
                  </p>
                </div>

                <div className="bg-white/5 rounded-xl p-6">
                  <h4 className="font-semibold text-purple-400 mb-2">725.136 - Separation from Electric Light, Power, Class 1, and NPLFA Conductors</h4>
                  <p className="text-white/70 text-sm">
                    Class 2/3 cables cannot be in the same cable, raceway, or enclosure as power or Class 1 circuits unless specific exceptions apply (barrier, listed equipment, etc.).
                  </p>
                </div>

                <div className="bg-white/5 rounded-xl p-6">
                  <h4 className="font-semibold text-purple-400 mb-2">725.154 - Applications of Listed Class 2/3 Cables</h4>
                  <p className="text-white/70 text-sm">
                    Specifies cable types for different locations: plenum (CL2P/CL3P), riser (CL2R/CL3R), general purpose (CL2/CL3), and substitution hierarchy.
                  </p>
                </div>
              </div>
            </section>

            <section id="separation-rules" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Separation from Power Wiring</h2>
              <p className="text-white/80 mb-4">
                Proper separation between low voltage and power wiring is critical for both safety and signal integrity. NEC 725.136 establishes the requirements.
              </p>

              <h3 className="text-xl font-display font-semibold mb-3 text-cyan-400">General Separation Rule</h3>
              <p className="text-white/80 mb-4">
                Class 2 and Class 3 circuits cannot occupy the same:
              </p>
              <ul className="list-disc list-inside text-white/70 space-y-2 mb-6">
                <li><strong>Cable:</strong> No jacketed or unjacketed cables with power conductors</li>
                <li><strong>Raceway:</strong> Cannot share conduit, cable tray, or wireway with power</li>
                <li><strong>Enclosure:</strong> Cannot share junction boxes, panels (with exceptions)</li>
              </ul>

              <h3 className="text-xl font-display font-semibold mb-3 text-cyan-400">Permitted Separations</h3>
              <div className="bg-white/5 rounded-xl p-6 my-6">
                <ul className="space-y-3 text-white/70">
                  <li><strong>Barrier:</strong> A permanent barrier within an enclosure separating Class 2/3 from power</li>
                  <li><strong>Different raceways in same enclosure:</strong> Each circuit type in its own raceway</li>
                  <li><strong>Listed equipment:</strong> Equipment listed for mixed circuits (like thermostats in HVAC equipment)</li>
                  <li><strong>Factory assembly:</strong> Equipment with Class 2 and power from factory</li>
                </ul>
              </div>

              <h3 className="text-xl font-display font-semibold mb-3 text-cyan-400">Practical Separation Distances</h3>
              <p className="text-white/80 mb-4">
                While NEC doesn't specify exact separation distances in inches, industry best practices recommend:
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-6 text-center">
                <div className="bg-white/5 rounded-xl p-4">
                  <p className="text-white/60 text-sm">In Walls</p>
                  <p className="font-mono text-xl text-green-400">2"+</p>
                  <p className="text-white/40 text-xs">from power</p>
                </div>
                <div className="bg-white/5 rounded-xl p-4">
                  <p className="text-white/60 text-sm">Parallel Runs</p>
                  <p className="font-mono text-xl text-yellow-400">6"+</p>
                  <p className="text-white/40 text-xs">recommended</p>
                </div>
                <div className="bg-white/5 rounded-xl p-4">
                  <p className="text-white/60 text-sm">Crossing Power</p>
                  <p className="font-mono text-xl text-cyan-400">90deg</p>
                  <p className="text-white/40 text-xs">perpendicular</p>
                </div>
                <div className="bg-white/5 rounded-xl p-4">
                  <p className="text-white/60 text-sm">In Cable Tray</p>
                  <p className="font-mono text-xl text-purple-400">Barrier</p>
                  <p className="text-white/40 text-xs">or separate tray</p>
                </div>
              </div>

              <div className="bg-yellow-900/30 rounded-xl p-6 my-6">
                <h4 className="font-semibold text-yellow-400 mb-3">Signal Integrity Considerations</h4>
                <p className="text-white/70">
                  Beyond NEC requirements, maintaining separation reduces electromagnetic interference (EMI). Data cables running parallel to power can experience induced noise, affecting network performance. For Cat6A expecting 10Gbps, maintain maximum possible separation and cross at 90 degrees only.
                </p>
              </div>
            </section>

            <section id="cable-types" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Low Voltage Cable Types</h2>
              <p className="text-white/80 mb-4">
                NEC Article 725 defines cable markings based on application and fire performance:
              </p>

              <div className="overflow-x-auto my-6">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-white/20">
                      <th className="text-left py-3 px-4 text-white/60">Cable Marking</th>
                      <th className="text-left py-3 px-4 text-white/60">Type</th>
                      <th className="text-left py-3 px-4 text-white/60">Application</th>
                    </tr>
                  </thead>
                  <tbody className="text-white/80">
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-mono text-purple-400">CL2P / CL3P</td>
                      <td className="py-3 px-4">Plenum</td>
                      <td className="py-3 px-4 text-white/60">Air handling spaces, ducts, plenums</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-mono text-cyan-400">CL2R / CL3R</td>
                      <td className="py-3 px-4">Riser</td>
                      <td className="py-3 px-4 text-white/60">Vertical shafts, floor-to-floor runs</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-mono text-green-400">CL2 / CL3</td>
                      <td className="py-3 px-4">General Purpose</td>
                      <td className="py-3 px-4 text-white/60">Within floors, non-plenum areas</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-mono text-yellow-400">CL2X / CL3X</td>
                      <td className="py-3 px-4">Limited Use</td>
                      <td className="py-3 px-4 text-white/60">Dwellings, raceways only in commercial</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-mono text-orange-400">PLTC</td>
                      <td className="py-3 px-4">Power Limited Tray Cable</td>
                      <td className="py-3 px-4 text-white/60">Cable trays, exposed industrial</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h3 className="text-xl font-display font-semibold mb-3 text-cyan-400">Cable Substitution Hierarchy</h3>
              <p className="text-white/80 mb-4">
                Higher-rated cables can substitute for lower-rated per NEC Table 725.154(G):
              </p>
              <div className="bg-white/5 rounded-xl p-6 my-6 text-center">
                <p className="font-mono text-lg text-white/80">
                  <span className="text-purple-400">CL2P/CL3P</span> → <span className="text-cyan-400">CL2R/CL3R</span> → <span className="text-green-400">CL2/CL3</span> → <span className="text-yellow-400">CL2X/CL3X</span>
                </p>
                <p className="text-white/60 text-sm mt-2">Plenum can substitute for anything; general purpose cannot go in plenums</p>
              </div>
            </section>

            <section id="structured-cabling" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Structured Cabling Systems</h2>
              <p className="text-white/80 mb-4">
                Structured cabling provides a standardized infrastructure for voice, data, and video systems. The ANSI/TIA-568 standard defines the architecture.
              </p>

              <h3 className="text-xl font-display font-semibold mb-3 text-blue-400">TIA-568 Components</h3>
              <div className="bg-white/5 rounded-xl p-6 my-6">
                <ul className="space-y-3 text-white/70">
                  <li><strong>Entrance Facility (EF):</strong> Where service provider cables enter building</li>
                  <li><strong>Main Cross-Connect (MC):</strong> Central distribution point, connects to backbone</li>
                  <li><strong>Intermediate Cross-Connect (IC):</strong> Optional distribution point between MC and HC</li>
                  <li><strong>Horizontal Cross-Connect (HC):</strong> Telecommunication room on each floor</li>
                  <li><strong>Work Area (WA):</strong> User location with outlet and patch cable</li>
                  <li><strong>Backbone Cabling:</strong> Connects MC, IC, and HC locations</li>
                  <li><strong>Horizontal Cabling:</strong> HC to work area outlet</li>
                </ul>
              </div>

              <h3 className="text-xl font-display font-semibold mb-3 text-blue-400">Copper Cable Categories</h3>
              <div className="overflow-x-auto my-6">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-white/20">
                      <th className="text-left py-3 px-4 text-white/60">Category</th>
                      <th className="text-left py-3 px-4 text-white/60">Bandwidth</th>
                      <th className="text-left py-3 px-4 text-white/60">Max Speed</th>
                      <th className="text-left py-3 px-4 text-white/60">Max Length</th>
                    </tr>
                  </thead>
                  <tbody className="text-white/80">
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-semibold">Cat5e</td>
                      <td className="py-3 px-4">100 MHz</td>
                      <td className="py-3 px-4 font-mono">1 Gbps</td>
                      <td className="py-3 px-4">100m (328 ft)</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-semibold">Cat6</td>
                      <td className="py-3 px-4">250 MHz</td>
                      <td className="py-3 px-4 font-mono">10 Gbps*</td>
                      <td className="py-3 px-4">100m (55m at 10G)</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-semibold">Cat6A</td>
                      <td className="py-3 px-4">500 MHz</td>
                      <td className="py-3 px-4 font-mono">10 Gbps</td>
                      <td className="py-3 px-4">100m (328 ft)</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-semibold">Cat8</td>
                      <td className="py-3 px-4">2000 MHz</td>
                      <td className="py-3 px-4 font-mono">25/40 Gbps</td>
                      <td className="py-3 px-4">30m (98 ft)</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h3 className="text-xl font-display font-semibold mb-3 text-blue-400">Channel vs Permanent Link</h3>
              <p className="text-white/80 mb-4">
                TIA-568 defines two test configurations:
              </p>
              <div className="grid md:grid-cols-2 gap-6 my-6">
                <div className="bg-blue-900/30 rounded-xl p-6">
                  <h4 className="font-semibold text-blue-400 mb-3">Permanent Link (90m)</h4>
                  <p className="text-white/70 text-sm">
                    Tests the installed infrastructure: horizontal cable + 2 connections (patch panel + outlet). Does not include patch cords.
                  </p>
                </div>
                <div className="bg-cyan-900/30 rounded-xl p-6">
                  <h4 className="font-semibold text-cyan-400 mb-3">Channel (100m)</h4>
                  <p className="text-white/70 text-sm">
                    Tests complete path including patch cords at both ends. Maximum 10m of patch cords total allowed.
                  </p>
                </div>
              </div>
            </section>

            <section id="installation-methods" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Installation Methods & Best Practices</h2>

              <div className="space-y-6">
                <div className="bg-white/5 rounded-xl p-6">
                  <h3 className="font-semibold text-green-400 mb-3">Cable Handling</h3>
                  <ul className="list-disc list-inside text-white/70 space-y-2 text-sm">
                    <li>Observe minimum bend radius: 4x cable diameter for Cat6, 10x for fiber</li>
                    <li>Maximum pulling tension: 25 lbf for 4-pair UTP cables</li>
                    <li>Do not exceed cable tray fill limits (50% for data cables)</li>
                    <li>Maintain twist-per-inch to within 1/2" of termination</li>
                    <li>Support cables every 4-5 feet with J-hooks or cable tray</li>
                  </ul>
                </div>

                <div className="bg-white/5 rounded-xl p-6">
                  <h3 className="font-semibold text-cyan-400 mb-3">Termination Best Practices</h3>
                  <ul className="list-disc list-inside text-white/70 space-y-2 text-sm">
                    <li>Use T568A or T568B consistently throughout - never mix</li>
                    <li>Untwist pairs no more than 1/2" for Cat6, 1/4" for Cat6A</li>
                    <li>Use proper punch-down or compression tools</li>
                    <li>Test all terminations with cable certifier</li>
                    <li>Label all cables at both ends per TIA-606 standards</li>
                  </ul>
                </div>

                <div className="bg-white/5 rounded-xl p-6">
                  <h3 className="font-semibold text-purple-400 mb-3">Pathway Management</h3>
                  <ul className="list-disc list-inside text-white/70 space-y-2 text-sm">
                    <li>Use dedicated low voltage pathways separate from power</li>
                    <li>Size pathways for 25-40% initial fill to allow growth</li>
                    <li>Provide pull strings in conduit for future cables</li>
                    <li>Firestop all penetrations per NEC 300.21</li>
                    <li>Maintain accessibility for additions and moves</li>
                  </ul>
                </div>
              </div>
            </section>

            <section id="testing-certification" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Testing and Certification</h2>
              <p className="text-white/80 mb-4">
                Professional low voltage installations require testing to verify performance meets standards.
              </p>

              <h3 className="text-xl font-display font-semibold mb-3 text-yellow-400">Test Parameters</h3>
              <div className="bg-white/5 rounded-xl p-6 my-6">
                <ul className="space-y-2 text-white/70">
                  <li><strong>Wire Map:</strong> Verifies correct pin-to-pin connectivity</li>
                  <li><strong>Length:</strong> Confirms within category limits</li>
                  <li><strong>Insertion Loss (IL):</strong> Signal attenuation in dB</li>
                  <li><strong>NEXT:</strong> Near-End Crosstalk between pairs</li>
                  <li><strong>PSNEXT:</strong> Power Sum NEXT (all pair combinations)</li>
                  <li><strong>Return Loss:</strong> Signal reflection due to impedance mismatch</li>
                  <li><strong>ACR-F:</strong> Attenuation to Crosstalk Ratio (Far-end)</li>
                </ul>
              </div>

              <h3 className="text-xl font-display font-semibold mb-3 text-yellow-400">Certification Levels</h3>
              <div className="grid md:grid-cols-2 gap-6 my-6">
                <div className="bg-yellow-900/30 rounded-xl p-6">
                  <h4 className="font-semibold text-yellow-400 mb-3">Verification</h4>
                  <p className="text-white/70 text-sm">
                    Basic continuity and wire map testing. Confirms connections are correct but doesn't validate performance to category standards.
                  </p>
                </div>
                <div className="bg-green-900/30 rounded-xl p-6">
                  <h4 className="font-semibold text-green-400 mb-3">Certification</h4>
                  <p className="text-white/70 text-sm">
                    Full testing with Fluke, IDEAL, or equivalent certifier. Provides pass/fail per TIA standards with detailed test report.
                  </p>
                </div>
              </div>
            </section>

            {/* CTA Section */}
            <section className="bg-gradient-to-r from-purple-900/30 to-cyan-900/30 rounded-2xl p-8 my-12">
              <h2 className="text-2xl font-display font-bold mb-4 text-center">
                Master NEC Low Voltage Requirements
              </h2>
              <p className="text-white/70 mb-6 text-center">
                Ampora provides instant access to Article 725, cable specifications, and separation requirements right on your phone.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <a
                  href="https://apps.apple.com/us/app/ampora/id6753693522"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-purple-600 text-white font-semibold rounded-full hover:bg-purple-500 transition-colors text-center"
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
                <Link href="/blog/wire-sizing-guide-nec-ampacity-tables" className="bg-white/5 hover:bg-white/10 rounded-xl p-6 transition-colors">
                  <span className="text-cyan-400 text-sm">Calculations</span>
                  <h3 className="font-semibold mt-2">Wire Sizing Guide: NEC Ampacity Tables</h3>
                </Link>
                <Link href="/blog/conduit-fill-calculation-guide" className="bg-white/5 hover:bg-white/10 rounded-xl p-6 transition-colors">
                  <span className="text-cyan-400 text-sm">Calculations</span>
                  <h3 className="font-semibold mt-2">Conduit Fill Calculation Guide</h3>
                </Link>
                <Link href="/blog/gfci-vs-afci-requirements" className="bg-white/5 hover:bg-white/10 rounded-xl p-6 transition-colors">
                  <span className="text-purple-400 text-sm">NEC Code</span>
                  <h3 className="font-semibold mt-2">GFCI vs AFCI Requirements</h3>
                </Link>
                <Link href="/blog/electrical-inspection-checklist" className="bg-white/5 hover:bg-white/10 rounded-xl p-6 transition-colors">
                  <span className="text-green-400 text-sm">Installation</span>
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
          <p className="text-sm text-white/40">© 2025 Ampora Labs</p>
        </div>
      </footer>
    </main>
  );
}
