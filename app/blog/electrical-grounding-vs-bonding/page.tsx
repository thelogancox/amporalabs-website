import { Metadata } from "next";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import { BreadcrumbJsonLd, BlogPostingJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Grounding vs Bonding: Understanding the Critical Difference for Electricians",
  description: "Learn the difference between grounding and bonding in electrical systems. Understand NEC Article 250 requirements, when each is required, and avoid common code violations.",
  keywords: [
    "grounding vs bonding",
    "electrical grounding",
    "electrical bonding",
    "NEC Article 250",
    "equipment grounding conductor",
    "grounding electrode conductor",
    "bonding jumper",
    "main bonding jumper",
    "grounding electrode system",
    "grounded conductor",
    "grounding requirements",
    "bonding requirements",
    "ground fault path",
    "electrical safety grounding"
  ],
  alternates: {
    canonical: "https://amporalabs.com/blog/electrical-grounding-vs-bonding",
  },
  openGraph: {
    title: "Grounding vs Bonding: The Critical Difference - Ampora",
    description: "Master the difference between grounding and bonding. Essential NEC Article 250 knowledge for electricians.",
    url: "https://amporalabs.com/blog/electrical-grounding-vs-bonding",
    type: "article",
  },
};

function HeroIllustration() {
  return (
    <svg viewBox="0 0 400 160" className="w-full h-40 md:h-48" aria-label="Grounding vs bonding illustration">
      {/* Panel */}
      <g transform="translate(150, 20)">
        <rect x="0" y="0" width="100" height="120" rx="4" fill="#1f2937" stroke="#6b7280" strokeWidth="2"/>
        <rect x="10" y="15" width="80" height="30" rx="2" fill="#374151" stroke="#4b5563"/>
        <text x="50" y="35" textAnchor="middle" fill="#9ca3af" fontSize="8">MAIN PANEL</text>
        {/* Breakers */}
        <rect x="15" y="55" width="30" height="8" rx="1" fill="#22c55e"/>
        <rect x="55" y="55" width="30" height="8" rx="1" fill="#22c55e"/>
        <rect x="15" y="68" width="30" height="8" rx="1" fill="#22c55e"/>
        <rect x="55" y="68" width="30" height="8" rx="1" fill="#22c55e"/>
        {/* Neutral/Ground bars */}
        <rect x="15" y="85" width="30" height="10" rx="1" fill="#9ca3af"/>
        <text x="30" y="93" textAnchor="middle" fill="#1f2937" fontSize="5">N</text>
        <rect x="55" y="85" width="30" height="10" rx="1" fill="#22c55e"/>
        <text x="70" y="93" textAnchor="middle" fill="#1f2937" fontSize="5">G</text>
        {/* Main Bonding Jumper */}
        <line x1="45" y1="90" x2="55" y2="90" stroke="#eab308" strokeWidth="3"/>
        <text x="50" y="105" textAnchor="middle" fill="#eab308" fontSize="6">MBJ</text>
      </g>

      {/* Grounding System - Left */}
      <g transform="translate(20, 50)">
        <text x="50" y="0" textAnchor="middle" fill="#22c55e" fontSize="10" fontWeight="bold">GROUNDING</text>
        {/* GEC */}
        <line x1="50" y1="10" x2="50" y2="60" stroke="#22c55e" strokeWidth="3"/>
        {/* Ground Rod */}
        <line x1="50" y1="60" x2="50" y2="100" stroke="#22c55e" strokeWidth="4" strokeDasharray="4,2"/>
        <circle cx="50" cy="95" r="8" fill="#422006" stroke="#22c55e" strokeWidth="2"/>
        <text x="50" y="98" textAnchor="middle" fill="#22c55e" fontSize="6">GE</text>
        <text x="80" y="35" fill="#9ca3af" fontSize="7">GEC</text>
        <text x="50" y="115" textAnchor="middle" fill="#9ca3af" fontSize="6">TO EARTH</text>
      </g>

      {/* Bonding System - Right */}
      <g transform="translate(290, 50)">
        <text x="50" y="0" textAnchor="middle" fill="#eab308" fontSize="10" fontWeight="bold">BONDING</text>
        {/* Metal enclosures */}
        <rect x="20" y="15" width="60" height="25" rx="2" fill="#1f2937" stroke="#eab308" strokeWidth="2"/>
        <text x="50" y="32" textAnchor="middle" fill="#9ca3af" fontSize="6">ENCLOSURE</text>
        {/* EGC connecting */}
        <line x1="50" y1="40" x2="50" y2="55" stroke="#eab308" strokeWidth="2"/>
        <rect x="20" y="55" width="60" height="25" rx="2" fill="#1f2937" stroke="#eab308" strokeWidth="2"/>
        <text x="50" y="72" textAnchor="middle" fill="#9ca3af" fontSize="6">EQUIPMENT</text>
        <line x1="50" y1="80" x2="50" y2="95" stroke="#eab308" strokeWidth="2"/>
        <text x="10" y="70" fill="#9ca3af" fontSize="7">EGC</text>
        <text x="50" y="110" textAnchor="middle" fill="#9ca3af" fontSize="6">FAULT PATH</text>
      </g>

      {/* Connection lines */}
      <line x1="100" y1="60" x2="150" y2="90" stroke="#22c55e" strokeWidth="2" strokeDasharray="4,2"/>
      <line x1="250" y1="90" x2="290" y2="70" stroke="#eab308" strokeWidth="2" strokeDasharray="4,2"/>
    </svg>
  );
}

export default function GroundingVsBondingPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navigation />
      <div className="pt-20">
        <BreadcrumbJsonLd
          items={[
            { name: "Home", url: "https://amporalabs.com" },
            { name: "Blog", url: "https://amporalabs.com/blog" },
            { name: "Grounding vs Bonding", url: "https://amporalabs.com/blog/electrical-grounding-vs-bonding" },
          ]}
        />
        <BlogPostingJsonLd
          headline="Grounding vs Bonding: Understanding the Critical Difference for Electricians"
          description="Learn the difference between grounding and bonding in electrical systems with NEC Article 250 requirements."
          datePublished="2025-01-12"
          dateModified="2025-01-12"
          url="https://amporalabs.com/blog/electrical-grounding-vs-bonding"
          wordCount={2400}
          keywords={["grounding vs bonding", "NEC Article 250", "electrical grounding", "bonding requirements"]}
        />

        <article className="max-w-4xl mx-auto px-6 py-12">
          {/* Breadcrumb */}
          <nav className="text-sm text-white/60 mb-8">
            <Link href="/" className="hover:text-white">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/blog" className="hover:text-white">Blog</Link>
            <span className="mx-2">/</span>
            <span className="text-white">Grounding vs Bonding</span>
          </nav>

          {/* Article Header */}
          <header className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <span className="px-3 py-1 bg-purple-600/30 text-purple-300 text-sm font-medium rounded-full">
                NEC Code
              </span>
              <span className="text-white/40 text-sm">10 min read</span>
              <span className="text-white/40 text-sm">January 12, 2025</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6 leading-tight">
              Grounding vs Bonding: Understanding the Critical Difference
            </h1>
            <p className="text-xl text-white/70">
              Grounding and bonding are two distinct electrical safety concepts that are often confused. Understanding the difference is essential for NEC compliance and safe electrical installations.
            </p>
          </header>

          <div className="mb-12 bg-gradient-to-br from-green-900/20 to-yellow-900/20 rounded-2xl p-6 border border-white/10">
            <HeroIllustration />
          </div>

          {/* Key Concept Box */}
          <div className="bg-purple-900/30 border border-purple-500/30 rounded-2xl p-6 mb-12">
            <h3 className="font-display font-bold text-lg mb-3">The One-Sentence Difference</h3>
            <p className="text-white/90">
              <strong>Grounding</strong> connects the electrical system to the earth. <strong>Bonding</strong> connects all metal parts together to create a low-impedance fault current path back to the source.
            </p>
          </div>

          {/* Table of Contents */}
          <div className="bg-white/5 rounded-2xl p-6 mb-12">
            <h2 className="font-display font-bold mb-4">In This Guide</h2>
            <ul className="space-y-2 text-white/70">
              <li><a href="#definitions" className="hover:text-purple-400">NEC Definitions</a></li>
              <li><a href="#grounding-explained" className="hover:text-purple-400">Grounding Explained</a></li>
              <li><a href="#bonding-explained" className="hover:text-purple-400">Bonding Explained</a></li>
              <li><a href="#why-it-matters" className="hover:text-purple-400">Why the Difference Matters</a></li>
              <li><a href="#conductors" className="hover:text-purple-400">Grounding and Bonding Conductors</a></li>
              <li><a href="#common-violations" className="hover:text-purple-400">Common Code Violations</a></li>
              <li><a href="#service-vs-subpanel" className="hover:text-purple-400">Service vs Subpanel Requirements</a></li>
            </ul>
          </div>

          {/* Article Content */}
          <div className="prose prose-invert prose-lg max-w-none">

            <section id="definitions" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">NEC Definitions (Article 100)</h2>
              <p className="text-white/80 mb-4">
                The NEC provides precise definitions in Article 100 that distinguish between grounding and bonding terms:
              </p>

              <div className="space-y-4 my-6">
                <div className="bg-green-900/20 rounded-xl p-6 border border-green-500/30">
                  <h3 className="font-semibold text-green-400 mb-2">Ground</h3>
                  <p className="text-white/70 text-sm">
                    The earth. (Simple, but important - ground literally means the earth itself)
                  </p>
                </div>

                <div className="bg-green-900/20 rounded-xl p-6 border border-green-500/30">
                  <h3 className="font-semibold text-green-400 mb-2">Grounded</h3>
                  <p className="text-white/70 text-sm">
                    Connected to ground (earth) or to a conductive body that extends the ground connection.
                  </p>
                </div>

                <div className="bg-green-900/20 rounded-xl p-6 border border-green-500/30">
                  <h3 className="font-semibold text-green-400 mb-2">Grounding Electrode</h3>
                  <p className="text-white/70 text-sm">
                    A conducting object through which a direct connection to earth is established.
                  </p>
                </div>

                <div className="bg-yellow-900/20 rounded-xl p-6 border border-yellow-500/30">
                  <h3 className="font-semibold text-yellow-400 mb-2">Bonded (Bonding)</h3>
                  <p className="text-white/70 text-sm">
                    Connected to establish electrical continuity and conductivity.
                  </p>
                </div>

                <div className="bg-yellow-900/20 rounded-xl p-6 border border-yellow-500/30">
                  <h3 className="font-semibold text-yellow-400 mb-2">Bonding Jumper</h3>
                  <p className="text-white/70 text-sm">
                    A reliable conductor to ensure the required electrical conductivity between metal parts required to be electrically connected.
                  </p>
                </div>

                <div className="bg-yellow-900/20 rounded-xl p-6 border border-yellow-500/30">
                  <h3 className="font-semibold text-yellow-400 mb-2">Effective Ground-Fault Current Path</h3>
                  <p className="text-white/70 text-sm">
                    An intentionally constructed, low-impedance electrically conductive path designed and intended to carry current under ground-fault conditions from the point of a ground fault on a wiring system to the electrical supply source and that facilitates the operation of the overcurrent protective device.
                  </p>
                </div>
              </div>
            </section>

            <section id="grounding-explained" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Grounding Explained</h2>
              <p className="text-white/80 mb-4">
                <strong>Grounding</strong> establishes a connection between the electrical system and the earth through grounding electrodes. This serves several purposes:
              </p>

              <ul className="list-disc list-inside text-white/70 space-y-2 mb-6">
                <li><strong>Voltage stabilization</strong> - Limits voltage imposed on the system by lightning, line surges, or unintentional contact with higher-voltage lines</li>
                <li><strong>Reference point</strong> - Establishes earth as a zero-voltage reference for the electrical system</li>
                <li><strong>Static discharge</strong> - Provides a path for static electricity to dissipate safely</li>
                <li><strong>Lightning protection</strong> - Provides a path for lightning current to reach earth</li>
              </ul>

              <h3 className="text-xl font-semibold mt-6 mb-3">Grounding Electrode System (NEC 250.50)</h3>
              <p className="text-white/80 mb-4">
                The grounding electrode system consists of all available electrodes bonded together:
              </p>

              <div className="overflow-x-auto my-6">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-white/20">
                      <th className="text-left py-3 px-4 text-white/60">Electrode Type</th>
                      <th className="text-left py-3 px-4 text-white/60">NEC Section</th>
                      <th className="text-left py-3 px-4 text-white/60">Requirements</th>
                    </tr>
                  </thead>
                  <tbody className="text-white/80">
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">Metal underground water pipe</td>
                      <td className="py-3 px-4 font-mono">250.52(A)(1)</td>
                      <td className="py-3 px-4 text-white/60">10 feet or more in direct contact with earth, supplemented by additional electrode</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">Metal building frame</td>
                      <td className="py-3 px-4 font-mono">250.52(A)(2)</td>
                      <td className="py-3 px-4 text-white/60">Effectively grounded by connection to earth</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">Concrete-encased electrode (Ufer)</td>
                      <td className="py-3 px-4 font-mono">250.52(A)(3)</td>
                      <td className="py-3 px-4 text-white/60">20 feet of bare copper 4 AWG or larger in concrete foundation</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">Ground ring</td>
                      <td className="py-3 px-4 font-mono">250.52(A)(4)</td>
                      <td className="py-3 px-4 text-white/60">2 AWG bare copper, 20 feet encircling building, 30 inches deep</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">Rod and pipe electrodes</td>
                      <td className="py-3 px-4 font-mono">250.52(A)(5)</td>
                      <td className="py-3 px-4 text-white/60">8 feet minimum length, 5/8 inch diameter</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">Plate electrodes</td>
                      <td className="py-3 px-4 font-mono">250.52(A)(7)</td>
                      <td className="py-3 px-4 text-white/60">2 square feet minimum contact area</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="bg-orange-900/30 rounded-xl p-6 my-6">
                <p className="text-white/90">
                  <strong>Important:</strong> A single rod, pipe, or plate electrode that does not achieve 25 ohms or less resistance must be supplemented by an additional electrode per NEC 250.53(A)(2).
                </p>
              </div>
            </section>

            <section id="bonding-explained" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Bonding Explained</h2>
              <p className="text-white/80 mb-4">
                <strong>Bonding</strong> connects all metal parts of the electrical system together to create a low-impedance path for fault current to flow back to the source. This is the critical safety function that allows overcurrent devices to operate quickly during a ground fault.
              </p>

              <div className="bg-yellow-900/30 rounded-xl p-6 my-6">
                <h3 className="font-semibold text-yellow-400 mb-3">The Safety Purpose of Bonding</h3>
                <p className="text-white/70">
                  When a ground fault occurs, fault current must flow back to the source (transformer) through a low-impedance path. This high fault current causes the overcurrent device (breaker or fuse) to open quickly, removing the hazard. Without proper bonding, fault current cannot return to the source efficiently, and the overcurrent device may not trip - leaving energized metal parts that can electrocute someone.
                </p>
              </div>

              <h3 className="text-xl font-semibold mt-6 mb-3">Key Bonding Components</h3>
              <div className="space-y-4 my-6">
                <div className="bg-white/5 rounded-xl p-6">
                  <h4 className="font-semibold text-yellow-400 mb-2">Main Bonding Jumper (MBJ)</h4>
                  <p className="text-white/70 text-sm">
                    The connection between the grounded conductor (neutral) and the equipment grounding conductor at the service. This is where the grounded conductor and equipment grounding system are bonded together - required only at the service equipment or separately derived system.
                  </p>
                </div>

                <div className="bg-white/5 rounded-xl p-6">
                  <h4 className="font-semibold text-yellow-400 mb-2">Equipment Grounding Conductor (EGC)</h4>
                  <p className="text-white/70 text-sm">
                    The conductive path that connects normally non-current-carrying metal parts of equipment together and to the system grounded conductor or grounding electrode conductor. Despite its name, the EGC is really a bonding conductor - it bonds equipment together for fault current return.
                  </p>
                </div>

                <div className="bg-white/5 rounded-xl p-6">
                  <h4 className="font-semibold text-yellow-400 mb-2">Bonding Jumpers</h4>
                  <p className="text-white/70 text-sm">
                    Conductors used to ensure electrical continuity around connections that may not provide adequate conductivity (like concentric or eccentric knockouts, or reducing washers).
                  </p>
                </div>
              </div>
            </section>

            <section id="why-it-matters" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Why the Difference Matters</h2>

              <div className="grid md:grid-cols-2 gap-6 my-6">
                <div className="bg-green-900/20 rounded-xl p-6 border border-green-500/30">
                  <h3 className="font-semibold text-green-400 mb-3">Grounding Alone Cannot...</h3>
                  <ul className="space-y-2 text-white/70 text-sm">
                    <li>&#8226; Clear a ground fault</li>
                    <li>&#8226; Trip a breaker during a fault</li>
                    <li>&#8226; Provide a fault current return path</li>
                    <li>&#8226; Protect you from electrocution</li>
                  </ul>
                </div>
                <div className="bg-yellow-900/20 rounded-xl p-6 border border-yellow-500/30">
                  <h3 className="font-semibold text-yellow-400 mb-3">Bonding Provides...</h3>
                  <ul className="space-y-2 text-white/70 text-sm">
                    <li>&#8226; Low-impedance fault current path</li>
                    <li>&#8226; Fast overcurrent device operation</li>
                    <li>&#8226; Equalized potential on metal parts</li>
                    <li>&#8226; Personnel safety from shock</li>
                  </ul>
                </div>
              </div>

              <div className="bg-red-900/20 border border-red-500/30 rounded-xl p-6 my-6">
                <h3 className="font-semibold text-red-400 mb-2">Critical Understanding</h3>
                <p className="text-white/70">
                  The earth (ground) is NOT an effective fault current path. Earth has too much impedance. Fault current must return through the EGC and bonding system to the source - not through the earth. This is why bonding is the safety mechanism, not grounding.
                </p>
              </div>

              <div className="bg-white/5 rounded-xl p-6 my-6">
                <h3 className="font-semibold mb-3">Example: Why This Matters</h3>
                <p className="text-white/70 text-sm mb-4">
                  Consider a ground fault on a piece of equipment:
                </p>
                <ul className="space-y-2 text-white/70 text-sm">
                  <li><strong>With proper bonding:</strong> Fault current flows through EGC back to neutral at service, creating high current that trips the breaker in milliseconds.</li>
                  <li><strong>Without proper bonding:</strong> Current tries to flow through earth, but earth resistance limits current to maybe 1-2 amps - not enough to trip the breaker. Equipment stays energized at dangerous voltage indefinitely.</li>
                </ul>
              </div>
            </section>

            <section id="conductors" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Grounding and Bonding Conductors</h2>

              <div className="overflow-x-auto my-6">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-white/20">
                      <th className="text-left py-3 px-4 text-white/60">Conductor</th>
                      <th className="text-left py-3 px-4 text-white/60">Abbreviation</th>
                      <th className="text-left py-3 px-4 text-white/60">Purpose</th>
                      <th className="text-left py-3 px-4 text-white/60">Sizing Table</th>
                    </tr>
                  </thead>
                  <tbody className="text-white/80">
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">Grounding Electrode Conductor</td>
                      <td className="py-3 px-4 font-mono text-green-400">GEC</td>
                      <td className="py-3 px-4 text-white/60">Connects grounding electrode to grounded conductor/equipment</td>
                      <td className="py-3 px-4 font-mono">250.66</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">Equipment Grounding Conductor</td>
                      <td className="py-3 px-4 font-mono text-yellow-400">EGC</td>
                      <td className="py-3 px-4 text-white/60">Bonds equipment together for fault current path</td>
                      <td className="py-3 px-4 font-mono">250.122</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">Main Bonding Jumper</td>
                      <td className="py-3 px-4 font-mono text-yellow-400">MBJ</td>
                      <td className="py-3 px-4 text-white/60">Bonds neutral to equipment ground at service</td>
                      <td className="py-3 px-4 font-mono">250.28</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">System Bonding Jumper</td>
                      <td className="py-3 px-4 font-mono text-yellow-400">SBJ</td>
                      <td className="py-3 px-4 text-white/60">Same as MBJ for separately derived systems</td>
                      <td className="py-3 px-4 font-mono">250.28</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">Supply-Side Bonding Jumper</td>
                      <td className="py-3 px-4 font-mono text-yellow-400">SSBJ</td>
                      <td className="py-3 px-4 text-white/60">Bonds equipment on supply side of service</td>
                      <td className="py-3 px-4 font-mono">250.102</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">Grounded Conductor</td>
                      <td className="py-3 px-4 font-mono text-gray-400">Neutral</td>
                      <td className="py-3 px-4 text-white/60">Current-carrying conductor connected to ground at service</td>
                      <td className="py-3 px-4 font-mono">220, 310</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section id="common-violations" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Common Code Violations</h2>

              <div className="space-y-4 my-6">
                <div className="bg-red-900/20 border border-red-500/30 rounded-xl p-6">
                  <h3 className="font-semibold text-red-400 mb-2">1. Bonding Neutral to Ground in Subpanels</h3>
                  <p className="text-white/70 text-sm">
                    The neutral and equipment ground may only be bonded at the service equipment (or separately derived system). Bonding them in a subpanel creates parallel paths for normal neutral current, which can result in current flowing on the EGC and metal raceways - a shock and fire hazard.
                  </p>
                </div>

                <div className="bg-red-900/20 border border-red-500/30 rounded-xl p-6">
                  <h3 className="font-semibold text-red-400 mb-2">2. Undersized Equipment Grounding Conductors</h3>
                  <p className="text-white/70 text-sm">
                    EGC must be sized per NEC Table 250.122 based on the rating of the overcurrent device. Using wire that is too small increases impedance and may prevent adequate fault current for fast overcurrent device operation.
                  </p>
                </div>

                <div className="bg-red-900/20 border border-red-500/30 rounded-xl p-6">
                  <h3 className="font-semibold text-red-400 mb-2">3. Missing Bonding Jumpers at Concentric Knockouts</h3>
                  <p className="text-white/70 text-sm">
                    Concentric and eccentric knockouts may not provide reliable bonding. A bonding jumper or bonding-type locknut/bushing is required when the EGC relies on the raceway for continuity.
                  </p>
                </div>

                <div className="bg-red-900/20 border border-red-500/30 rounded-xl p-6">
                  <h3 className="font-semibold text-red-400 mb-2">4. Using Ground Rods as Primary Fault Path</h3>
                  <p className="text-white/70 text-sm">
                    Some believe driving a ground rod at an outbuilding eliminates the need for an EGC. This is dangerous - the earth cannot carry enough fault current to trip the breaker. An EGC must always be provided.
                  </p>
                </div>

                <div className="bg-red-900/20 border border-red-500/30 rounded-xl p-6">
                  <h3 className="font-semibold text-red-400 mb-2">5. Failing to Bond Water Heaters and Water Piping</h3>
                  <p className="text-white/70 text-sm">
                    Metal water piping systems must be bonded per NEC 250.104. Many installations miss the bonding jumper at water heaters when using dielectric unions, which interrupts the bonding path.
                  </p>
                </div>
              </div>
            </section>

            <section id="service-vs-subpanel" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Service vs Subpanel Requirements</h2>

              <div className="grid md:grid-cols-2 gap-6 my-6">
                <div className="bg-white/5 rounded-xl p-6">
                  <h3 className="font-semibold text-green-400 mb-3">At Service Equipment</h3>
                  <ul className="space-y-2 text-white/70 text-sm">
                    <li>&#8226; Neutral and ground ARE bonded (MBJ)</li>
                    <li>&#8226; Grounding electrode conductor connects here</li>
                    <li>&#8226; Neutral bar may be bonded to enclosure</li>
                    <li>&#8226; This is the only point of neutral-ground bond</li>
                  </ul>
                </div>
                <div className="bg-white/5 rounded-xl p-6">
                  <h3 className="font-semibold text-yellow-400 mb-3">At Subpanels (Downstream)</h3>
                  <ul className="space-y-2 text-white/70 text-sm">
                    <li>&#8226; Neutral and ground MUST be separated</li>
                    <li>&#8226; Neutral bar isolated from enclosure</li>
                    <li>&#8226; Separate ground bar for EGCs</li>
                    <li>&#8226; No additional grounding electrodes required (but permitted)</li>
                    <li>&#8226; 4-wire feeder required (L1, L2, N, EGC)</li>
                  </ul>
                </div>
              </div>

              <div className="bg-purple-900/30 rounded-xl p-6 my-6">
                <h3 className="font-semibold text-purple-400 mb-3">Why Separate Neutral and Ground in Subpanels?</h3>
                <p className="text-white/70">
                  If neutral and ground are bonded in multiple locations, normal load current will split between the neutral conductor and the EGC/metallic raceway. This causes current on metal parts that should normally carry no current - creating shock hazards, heating of raceways, and interference with ground-fault sensing equipment.
                </p>
              </div>
            </section>

            {/* CTA Section */}
            <section className="bg-gradient-to-r from-purple-900/30 to-cyan-900/30 rounded-2xl p-8 my-12">
              <h2 className="text-2xl font-display font-bold mb-4 text-center">
                Master NEC Grounding Requirements
              </h2>
              <p className="text-white/70 mb-6 text-center">
                Access complete NEC Article 250 grounding and bonding requirements instantly with Ampora's AI-powered code reference.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link
                  href="/features/nec-code-reference"
                  className="px-6 py-3 bg-purple-600 text-white font-semibold rounded-full hover:bg-purple-500 transition-colors text-center"
                >
                  Explore NEC Reference
                </Link>
                <a
                  href="https://apps.apple.com/us/app/ampora/id6753693522"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-white text-black font-semibold rounded-full hover:bg-white/90 transition-colors text-center"
                >
                  Download App Free
                </a>
              </div>
            </section>

            {/* Related Articles */}
            <section className="mt-12">
              <h2 className="text-2xl font-display font-bold mb-6">Related Articles</h2>
              <div className="grid md:grid-cols-2 gap-4">
                <Link href="/blog/nec-article-250-grounding-guide" className="bg-white/5 hover:bg-white/10 rounded-xl p-6 transition-colors">
                  <span className="text-purple-400 text-sm">NEC Code</span>
                  <h3 className="font-semibold mt-2">NEC Article 250: Complete Grounding Guide</h3>
                </Link>
                <Link href="/blog/electrical-service-upgrade-200-amp" className="bg-white/5 hover:bg-white/10 rounded-xl p-6 transition-colors">
                  <span className="text-cyan-400 text-sm">Installation</span>
                  <h3 className="font-semibold mt-2">200A Service Upgrade Guide</h3>
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
