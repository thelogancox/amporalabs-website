import { Metadata } from "next";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import { BlogPostingJsonLd, BreadcrumbJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Neutral vs Ground Wire: Understanding the Critical Difference",
  description: "Understand the critical difference between neutral and ground wires. Learn NEC definitions of grounded conductor vs grounding conductor, why they bond only at the service entrance, floating neutral dangers, bootleg grounds, sub-panel neutral-ground separation, and common code violations with testing procedures.",
  keywords: [
    "neutral vs ground wire",
    "grounded conductor vs grounding conductor",
    "white wire vs green wire",
    "neutral ground difference",
    "why separate neutral and ground",
    "neutral ground bond",
    "ground wire purpose",
    "neutral wire purpose",
    "floating neutral",
    "bootleg ground"
  ],
  alternates: {
    canonical: "https://amporalabs.com/blog/neutral-vs-ground-wire-explained",
  },
  openGraph: {
    title: "Neutral vs Ground Wire: Understanding the Critical Difference - Ampora",
    description: "Master the difference between neutral and ground wires with NEC definitions, bonding rules, floating neutral dangers, bootleg grounds, and sub-panel separation requirements.",
    url: "https://amporalabs.com/blog/neutral-vs-ground-wire-explained",
    type: "article",
    publishedTime: "2026-03-04",
  },
};

function HeroIllustration() {
  return (
    <svg viewBox="0 0 400 180" className="w-full h-40 md:h-48" aria-label="Circuit diagram showing neutral and ground wire paths from service panel">
      {/* Background */}
      <rect x="10" y="10" width="380" height="160" rx="4" fill="#1f2937" stroke="#374151" strokeWidth="1"/>

      {/* Service Panel */}
      <rect x="30" y="25" width="90" height="130" rx="3" fill="#111827" stroke="#6b7280" strokeWidth="1.5"/>
      <text x="75" y="42" textAnchor="middle" fill="#9ca3af" fontSize="7" fontWeight="bold">SERVICE PANEL</text>

      {/* Main Bonding Jumper */}
      <rect x="45" y="50" width="60" height="18" rx="2" fill="#22c55e" fillOpacity="0.15" stroke="#22c55e" strokeWidth="1"/>
      <text x="75" y="62" textAnchor="middle" fill="#22c55e" fontSize="5.5" fontWeight="bold">BONDING JUMPER</text>

      {/* Neutral Bus */}
      <rect x="42" y="75" width="28" height="70" rx="2" fill="#e5e7eb" fillOpacity="0.1" stroke="#e5e7eb" strokeWidth="1.5"/>
      <text x="56" y="88" textAnchor="middle" fill="#e5e7eb" fontSize="5" fontWeight="bold">N</text>
      <text x="56" y="96" textAnchor="middle" fill="#9ca3af" fontSize="4">BUS</text>

      {/* Ground Bus */}
      <rect x="80" y="75" width="28" height="70" rx="2" fill="#22c55e" fillOpacity="0.1" stroke="#22c55e" strokeWidth="1.5"/>
      <text x="94" y="88" textAnchor="middle" fill="#22c55e" fontSize="5" fontWeight="bold">G</text>
      <text x="94" y="96" textAnchor="middle" fill="#9ca3af" fontSize="4">BUS</text>

      {/* Bond connection between buses */}
      <line x1="70" y1="82" x2="80" y2="82" stroke="#22c55e" strokeWidth="2" strokeDasharray="3,2"/>

      {/* Grounding Electrode */}
      <line x1="94" y1="145" x2="94" y2="160" stroke="#22c55e" strokeWidth="1.5"/>
      <line x1="82" y1="158" x2="106" y2="158" stroke="#22c55e" strokeWidth="2"/>
      <line x1="85" y1="162" x2="103" y2="162" stroke="#22c55e" strokeWidth="1.5"/>
      <line x1="88" y1="166" x2="100" y2="166" stroke="#22c55e" strokeWidth="1"/>
      <text x="94" y="155" textAnchor="middle" fill="#22c55e" fontSize="4">EARTH</text>

      {/* Neutral Wire Path - to load */}
      <line x1="56" y1="105" x2="56" y2="115" stroke="#e5e7eb" strokeWidth="2"/>
      <line x1="56" y1="115" x2="180" y2="115" stroke="#e5e7eb" strokeWidth="2"/>
      <text x="118" y="112" textAnchor="middle" fill="#e5e7eb" fontSize="5" fontWeight="bold">NEUTRAL (White)</text>
      <text x="118" y="125" textAnchor="middle" fill="#9ca3af" fontSize="4">Current-carrying conductor</text>

      {/* Ground Wire Path - to load */}
      <line x1="94" y1="105" x2="94" y2="135" stroke="#22c55e" strokeWidth="2"/>
      <line x1="94" y1="135" x2="180" y2="135" stroke="#22c55e" strokeWidth="2"/>
      <text x="140" y="143" textAnchor="middle" fill="#22c55e" fontSize="5" fontWeight="bold">GROUND (Green/Bare)</text>
      <text x="140" y="151" textAnchor="middle" fill="#9ca3af" fontSize="4">Safety conductor - no current</text>

      {/* Hot Wire Path */}
      <line x1="40" y1="105" x2="40" y2="95" stroke="#ef4444" strokeWidth="2"/>
      <line x1="40" y1="95" x2="180" y2="95" stroke="#ef4444" strokeWidth="2"/>
      <text x="118" y="92" textAnchor="middle" fill="#ef4444" fontSize="5" fontWeight="bold">HOT (Black)</text>

      {/* Sub-Panel */}
      <rect x="185" y="30" width="80" height="135" rx="3" fill="#111827" stroke="#6b7280" strokeWidth="1.5"/>
      <text x="225" y="47" textAnchor="middle" fill="#9ca3af" fontSize="7" fontWeight="bold">SUB-PANEL</text>

      {/* Sub-Panel Neutral Bus */}
      <rect x="195" y="55" width="25" height="50" rx="2" fill="#e5e7eb" fillOpacity="0.1" stroke="#e5e7eb" strokeWidth="1.5"/>
      <text x="207" y="70" textAnchor="middle" fill="#e5e7eb" fontSize="5" fontWeight="bold">N</text>

      {/* Sub-Panel Ground Bus */}
      <rect x="230" y="55" width="25" height="50" rx="2" fill="#22c55e" fillOpacity="0.1" stroke="#22c55e" strokeWidth="1.5"/>
      <text x="242" y="70" textAnchor="middle" fill="#22c55e" fontSize="5" fontWeight="bold">G</text>

      {/* NO Bond in Sub-Panel - X mark */}
      <line x1="220" y1="65" x2="230" y2="65" stroke="#ef4444" strokeWidth="1" strokeDasharray="2,2"/>
      <text x="225" y="63" textAnchor="middle" fill="#ef4444" fontSize="8" fontWeight="bold">X</text>

      {/* Separated label */}
      <text x="225" y="115" textAnchor="middle" fill="#f59e0b" fontSize="5" fontWeight="bold">SEPARATED</text>
      <text x="225" y="123" textAnchor="middle" fill="#f59e0b" fontSize="4">N &amp; G isolated</text>

      {/* Load Outlet */}
      <rect x="290" y="55" width="80" height="100" rx="3" fill="#111827" stroke="#6b7280" strokeWidth="1"/>
      <text x="330" y="70" textAnchor="middle" fill="#9ca3af" fontSize="6" fontWeight="bold">LOAD / OUTLET</text>

      {/* Outlet Symbol */}
      <circle cx="320" cy="100" r="6" fill="none" stroke="#ef4444" strokeWidth="1.5"/>
      <line x1="316" y1="97" x2="316" y2="103" stroke="#ef4444" strokeWidth="1.5"/>
      <circle cx="340" cy="100" r="6" fill="none" stroke="#e5e7eb" strokeWidth="1.5"/>
      <line x1="336" y1="97" x2="336" y2="103" stroke="#e5e7eb" strokeWidth="1.5"/>
      <path d="M326 112 L330 118 L334 112" fill="none" stroke="#22c55e" strokeWidth="1.5"/>

      {/* Labels */}
      <text x="320" y="90" textAnchor="middle" fill="#ef4444" fontSize="4">HOT</text>
      <text x="340" y="90" textAnchor="middle" fill="#e5e7eb" fontSize="4">NEU</text>
      <text x="330" y="128" textAnchor="middle" fill="#22c55e" fontSize="4">GND</text>

      {/* Key */}
      <text x="310" y="147" textAnchor="middle" fill="#f59e0b" fontSize="5">Bond at service ONLY</text>
      <text x="310" y="155" textAnchor="middle" fill="#9ca3af" fontSize="4">NEC 250.24(A)(5)</text>
    </svg>
  );
}

export default function NeutralVsGroundWireExplainedPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navigation />
      <div className="pt-20">
        <BreadcrumbJsonLd
          items={[
            { name: "Home", url: "https://amporalabs.com" },
            { name: "Blog", url: "https://amporalabs.com/blog" },
            { name: "Neutral vs Ground Wire Explained", url: "https://amporalabs.com/blog/neutral-vs-ground-wire-explained" },
          ]}
        />
        <BlogPostingJsonLd
          headline="Neutral vs Ground Wire: Understanding the Critical Difference"
          description="Comprehensive guide explaining the difference between neutral and ground wires, NEC definitions, bonding rules, floating neutral dangers, bootleg grounds, and sub-panel separation requirements."
          datePublished="2026-03-04"
          dateModified="2026-03-04"
          url="https://amporalabs.com/blog/neutral-vs-ground-wire-explained"
          wordCount={4800}
          keywords={["neutral vs ground wire", "grounded conductor", "grounding conductor", "neutral ground bond", "floating neutral"]}
        />

        <article className="max-w-4xl mx-auto px-6 py-12">
          {/* Breadcrumb */}
          <nav className="text-sm text-white/60 mb-8">
            <Link href="/" className="hover:text-white">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/blog" className="hover:text-white">Blog</Link>
            <span className="mx-2">/</span>
            <span className="text-white">Neutral vs Ground Wire Explained</span>
          </nav>

          {/* Article Header */}
          <header className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <span className="px-3 py-1 bg-red-600/20 text-red-300 text-sm font-medium rounded-full">
                Troubleshooting
              </span>
              <span className="text-white/40 text-sm">18 min read</span>
              <span className="text-white/40 text-sm">March 4, 2026</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6 leading-tight">
              Neutral vs Ground Wire: Understanding the Critical Difference
            </h1>
            <p className="text-xl text-white/70">
              The neutral and ground wires are two of the most misunderstood conductors in electrical systems. While they may share a connection at the service entrance, they serve entirely different purposes. Confusing them causes code violations, shock hazards, and equipment damage. This guide breaks down exactly what each conductor does, why they&apos;re bonded only at the main panel, and what goes wrong when the rules are broken.
            </p>
          </header>

          <div className="mb-12 bg-gradient-to-br from-red-900/20 to-cyan-900/20 rounded-2xl p-6 border border-white/10">
            <HeroIllustration />
          </div>

          {/* Safety Warning */}
          <div className="bg-red-900/40 border-2 border-red-500/50 rounded-2xl p-6 mb-12">
            <div className="flex items-start gap-4">
              <div className="text-3xl">&#9888;</div>
              <div>
                <h3 className="font-display font-bold text-lg mb-2 text-red-400">Critical Safety Information</h3>
                <p className="text-white/80 text-sm">
                  This article is for educational purposes only. Always de-energize circuits and verify zero voltage before working on any wiring. Neutral conductors can carry dangerous current and should never be assumed safe to touch. All electrical work must comply with the NEC and local codes. Consult a qualified electrician for any wiring modifications.
                </p>
              </div>
            </div>
          </div>

          {/* Table of Contents */}
          <div className="bg-white/5 rounded-2xl p-6 mb-12">
            <h2 className="font-display font-bold mb-4">In This Guide</h2>
            <ul className="space-y-2 text-white/70">
              <li><a href="#nec-definitions" className="hover:text-purple-400">NEC Definitions: Grounded vs Grounding Conductor</a></li>
              <li><a href="#neutral-wire-role" className="hover:text-purple-400">The Role of the Neutral Wire</a></li>
              <li><a href="#ground-wire-role" className="hover:text-purple-400">The Role of the Ground Wire</a></li>
              <li><a href="#bonded-at-service" className="hover:text-purple-400">Why They&apos;re Bonded Only at the Service</a></li>
              <li><a href="#downstream-connection" className="hover:text-purple-400">What Happens When Neutral and Ground Connect Downstream</a></li>
              <li><a href="#floating-neutral" className="hover:text-purple-400">Floating Neutral Dangers</a></li>
              <li><a href="#bootleg-grounds" className="hover:text-purple-400">Bootleg Grounds Explained</a></li>
              <li><a href="#sub-panel-separation" className="hover:text-purple-400">Sub-Panel Neutral-Ground Separation</a></li>
              <li><a href="#testing-procedures" className="hover:text-purple-400">Testing for Proper Neutral/Ground</a></li>
              <li><a href="#common-violations" className="hover:text-purple-400">Common Code Violations</a></li>
              <li><a href="#faq" className="hover:text-purple-400">Frequently Asked Questions</a></li>
            </ul>
          </div>

          {/* Article Content */}
          <div className="prose prose-invert prose-lg max-w-none">

            <section id="nec-definitions" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">NEC Definitions: Grounded vs Grounding Conductor</h2>
              <p className="text-white/80 mb-4">
                The NEC uses precise terminology that distinguishes between the neutral and ground conductors. Understanding these definitions is the foundation for understanding the entire neutral-versus-ground relationship. The confusion starts because both conductors connect to earth &mdash; but they do so for completely different reasons.
              </p>

              <div className="grid md:grid-cols-2 gap-6 my-6">
                <div className="bg-white/5 rounded-xl p-6 border border-white/20">
                  <h3 className="font-semibold text-white mb-3">Grounded Conductor (Neutral)</h3>
                  <p className="text-white/60 text-sm mb-3">
                    <strong>NEC Article 100 Definition:</strong> A system or circuit conductor that is intentionally grounded.
                  </p>
                  <ul className="text-white/60 text-sm space-y-1">
                    <li><strong>Color:</strong> White or gray (NEC 200.6)</li>
                    <li><strong>Purpose:</strong> Carries return current from loads</li>
                    <li><strong>Current flow:</strong> Normal operating current</li>
                    <li><strong>Connected to:</strong> Neutral bus bar</li>
                    <li><strong>NEC reference:</strong> Article 200</li>
                  </ul>
                </div>
                <div className="bg-green-900/20 rounded-xl p-6 border border-green-500/20">
                  <h3 className="font-semibold text-green-400 mb-3">Equipment Grounding Conductor (Ground)</h3>
                  <p className="text-white/60 text-sm mb-3">
                    <strong>NEC Article 100 Definition:</strong> The conductive path(s) that provides a ground-fault current path and connects normally non-current-carrying metal parts of equipment to the system grounded conductor, the grounding electrode conductor, or both.
                  </p>
                  <ul className="text-white/60 text-sm space-y-1">
                    <li><strong>Color:</strong> Green, green with yellow stripe, or bare (NEC 250.119)</li>
                    <li><strong>Purpose:</strong> Safety path for fault current</li>
                    <li><strong>Current flow:</strong> Only during a fault</li>
                    <li><strong>Connected to:</strong> Ground bus bar, equipment enclosures</li>
                    <li><strong>NEC reference:</strong> Article 250, Part VI</li>
                  </ul>
                </div>
              </div>

              <div className="bg-purple-900/30 rounded-xl p-6 my-6">
                <h4 className="font-semibold text-purple-400 mb-3">The One-Letter Difference That Matters</h4>
                <p className="text-white/70 text-sm mb-3">
                  The NEC distinguishes between &ldquo;grounded&rdquo; and &ldquo;grounding&rdquo; &mdash; a single letter that changes the entire meaning:
                </p>
                <ul className="text-white/70 space-y-2 text-sm">
                  <li><strong>Ground<em>ed</em> conductor:</strong> A conductor that HAS BEEN grounded (past tense) &mdash; the neutral. It carries current as its normal function and happens to be connected to earth.</li>
                  <li><strong>Ground<em>ing</em> conductor:</strong> A conductor whose purpose IS TO ground (present participle) &mdash; the EGC. It exists to provide a path to ground for safety, carrying current only during fault conditions.</li>
                  <li><strong>Grounding electrode conductor (GEC):</strong> The conductor that connects the grounding electrode (earth rod, water pipe, etc.) to the system. Defined in <Link href="/blog/nec-article-250-grounding-guide" className="text-purple-400 hover:text-purple-300">NEC Article 250, Part III</Link>.</li>
                </ul>
              </div>
            </section>

            <section id="neutral-wire-role" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">The Role of the Neutral Wire</h2>
              <p className="text-white/80 mb-4">
                The <strong>neutral wire</strong> (grounded conductor) is a current-carrying conductor. Its primary job is to provide the return path for current flowing through loads in the circuit. Without a functional neutral, current has no intended path back to the source, and the circuit cannot operate properly.
              </p>

              <h3 className="text-xl font-display font-semibold mb-3 text-cyan-400">How the Neutral Works in a 120V Circuit</h3>
              <p className="text-white/80 mb-4">
                In a standard 120V branch circuit, current flows from the hot (ungrounded) conductor through the load and returns to the source via the neutral (grounded) conductor. The neutral carries the same amount of current as the hot wire. This is normal operation &mdash; the neutral is a <strong>working conductor</strong> that is always part of the circuit.
              </p>

              <h3 className="text-xl font-display font-semibold mb-3 text-cyan-400">Neutral in 240V and Multiwire Branch Circuits</h3>
              <p className="text-white/80 mb-4">
                In a 240V-only circuit (such as a water heater or baseboard heater on two hots with no neutral), no neutral conductor is needed because both hot conductors serve as supply and return for each other. However, in a <strong>multiwire branch circuit</strong> (MWBC) sharing a neutral between two hot conductors on opposite phases, the neutral carries only the <strong>unbalanced current</strong> &mdash; the difference between the two hot conductor loads.
              </p>

              <div className="bg-white/5 rounded-xl p-6 my-6">
                <h4 className="font-semibold text-white mb-3">Neutral Current in Multiwire Branch Circuits</h4>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-white/20">
                        <th className="text-left py-2 px-3 text-white/60">Phase A Load</th>
                        <th className="text-left py-2 px-3 text-white/60">Phase B Load</th>
                        <th className="text-left py-2 px-3 text-white/60">Neutral Current</th>
                        <th className="text-left py-2 px-3 text-white/60">Explanation</th>
                      </tr>
                    </thead>
                    <tbody className="text-white/80">
                      <tr className="border-b border-white/10">
                        <td className="py-2 px-3 font-mono">10A</td>
                        <td className="py-2 px-3 font-mono">10A</td>
                        <td className="py-2 px-3 font-mono text-green-400">0A</td>
                        <td className="py-2 px-3 text-white/60">Balanced &mdash; currents cancel</td>
                      </tr>
                      <tr className="border-b border-white/10">
                        <td className="py-2 px-3 font-mono">15A</td>
                        <td className="py-2 px-3 font-mono">5A</td>
                        <td className="py-2 px-3 font-mono text-yellow-400">10A</td>
                        <td className="py-2 px-3 text-white/60">Unbalanced &mdash; difference flows on neutral</td>
                      </tr>
                      <tr>
                        <td className="py-2 px-3 font-mono">12A</td>
                        <td className="py-2 px-3 font-mono">0A</td>
                        <td className="py-2 px-3 font-mono text-red-400">12A</td>
                        <td className="py-2 px-3 text-white/60">Fully unbalanced &mdash; full current on neutral</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="bg-orange-900/30 rounded-xl p-6 my-6">
                <h4 className="font-semibold text-orange-400 mb-3">Never Switch or Fuse the Neutral</h4>
                <p className="text-white/70 text-sm">
                  Per NEC 240.22, overcurrent devices shall not be connected in series with any conductor that is intentionally grounded, unless the device simultaneously opens all conductors of the circuit. Opening the neutral while loads are still energized creates a <strong>floating neutral</strong> condition, which can cause dangerous overvoltage on one phase of a multiwire circuit.
                </p>
              </div>
            </section>

            <section id="ground-wire-role" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">The Role of the Ground Wire</h2>
              <p className="text-white/80 mb-4">
                The <strong>equipment grounding conductor (EGC)</strong> is a safety conductor. Under normal operating conditions, it carries <strong>zero current</strong>. Its sole purpose is to provide a low-impedance fault current path back to the source so that overcurrent protective devices (circuit breakers or fuses) can quickly clear a ground fault. As detailed in our <Link href="/blog/electrical-grounding-vs-bonding" className="text-cyan-400 hover:text-cyan-300">grounding vs bonding guide</Link>, the EGC is the backbone of electrical safety.
              </p>

              <div className="space-y-4 my-6">
                <div className="bg-white/5 rounded-xl p-4 flex items-start gap-4">
                  <span className="bg-green-600 text-white text-sm font-bold px-3 py-1 rounded-full">1</span>
                  <div>
                    <p className="font-semibold text-white">Provides a Fault Current Path</p>
                    <p className="text-white/60 text-sm">If a hot wire contacts a metal enclosure, the EGC provides a low-impedance path for fault current to flow back to the source. This high fault current trips the breaker rapidly, clearing the fault before it causes harm.</p>
                  </div>
                </div>
                <div className="bg-white/5 rounded-xl p-4 flex items-start gap-4">
                  <span className="bg-green-600 text-white text-sm font-bold px-3 py-1 rounded-full">2</span>
                  <div>
                    <p className="font-semibold text-white">Keeps Metal Enclosures at Ground Potential</p>
                    <p className="text-white/60 text-sm">By connecting all metal boxes, conduit, device yokes, and equipment frames to the grounding system, the EGC ensures they remain at or near zero volts relative to ground. This protects people from shock if they touch the enclosure.</p>
                  </div>
                </div>
                <div className="bg-white/5 rounded-xl p-4 flex items-start gap-4">
                  <span className="bg-green-600 text-white text-sm font-bold px-3 py-1 rounded-full">3</span>
                  <div>
                    <p className="font-semibold text-white">Enables Overcurrent Device Operation</p>
                    <p className="text-white/60 text-sm">Without a low-impedance fault path, a ground fault may not generate enough current to trip the breaker. The fault would persist, energizing metal parts and creating a continuous shock and fire hazard.</p>
                  </div>
                </div>
                <div className="bg-white/5 rounded-xl p-4 flex items-start gap-4">
                  <span className="bg-green-600 text-white text-sm font-bold px-3 py-1 rounded-full">4</span>
                  <div>
                    <p className="font-semibold text-white">Stabilizes Voltage During Faults</p>
                    <p className="text-white/60 text-sm">The EGC limits the voltage imposed on equipment during ground faults, reducing the risk of insulation breakdown and equipment damage throughout the system.</p>
                  </div>
                </div>
              </div>

              <div className="bg-white/5 rounded-xl p-6 my-6">
                <h4 className="font-semibold text-cyan-400 mb-3">Key Point: The Ground Wire Is NOT an Earth Connection</h4>
                <p className="text-white/70 text-sm">
                  A common misconception is that the ground wire&apos;s job is to send fault current into the earth. In reality, earth is a poor conductor. The EGC&apos;s job is to carry fault current <strong>back to the source transformer</strong> &mdash; not into the dirt. The <Link href="/blog/grounding-electrode-system-guide" className="text-cyan-400 hover:text-cyan-300">grounding electrode system</Link> connects to earth for voltage stabilization and lightning dissipation, but the EGC provides the actual fault-clearing path.
                </p>
              </div>
            </section>

            <section id="bonded-at-service" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Why They&apos;re Bonded Only at the Service</h2>
              <p className="text-white/80 mb-4">
                <strong>NEC 250.24(A)(5)</strong> requires the grounded conductor (neutral) and the equipment grounding conductor (ground) to be bonded together at the service entrance &mdash; and <strong>nowhere else</strong> in the system. This single bonding point is established via the <strong>main bonding jumper (MBJ)</strong> inside the service disconnect or main panel.
              </p>

              <h3 className="text-xl font-display font-semibold mb-3 text-cyan-400">The Single-Point Bonding Rule</h3>
              <p className="text-white/80 mb-4">
                The entire grounding and bonding system is designed around one principle: fault current must have one defined path back to the source. Bonding neutral to ground at only one point ensures that all fault current returns through the EGC to the main panel, where the main bonding jumper connects it to the neutral, completing the circuit back to the utility transformer.
              </p>

              <div className="grid md:grid-cols-2 gap-6 my-6">
                <div className="bg-green-900/20 rounded-xl p-6 border border-green-500/20">
                  <h3 className="font-semibold text-green-400 mb-3">Correct: Bonded at Service Only</h3>
                  <ul className="text-white/60 text-sm space-y-2">
                    <li>Fault current flows through EGC to main panel</li>
                    <li>MBJ connects EGC path to neutral path</li>
                    <li>Current returns to transformer via neutral</li>
                    <li>Full fault current trips the breaker</li>
                    <li>No current on EGC during normal operation</li>
                    <li>GFCI devices function properly</li>
                  </ul>
                </div>
                <div className="bg-red-900/20 rounded-xl p-6 border border-red-500/20">
                  <h3 className="font-semibold text-red-400 mb-3">Wrong: Multiple Bond Points</h3>
                  <ul className="text-white/60 text-sm space-y-2">
                    <li>Neutral current splits between neutral wire and EGC</li>
                    <li>Normal operating current flows on ground wire</li>
                    <li>Metal enclosures become energized</li>
                    <li>GFCI devices nuisance-trip or fail to protect</li>
                    <li>Objectionable current on grounding paths (NEC 250.6)</li>
                    <li>Shock hazard on metal parts</li>
                  </ul>
                </div>
              </div>

              <div className="bg-white/5 rounded-xl p-6 my-6">
                <h4 className="font-semibold text-white mb-3">NEC 250.6 &mdash; Objectionable Current</h4>
                <p className="text-white/70 text-sm">
                  NEC 250.6 specifically addresses the problem of current flowing on grounding conductors. It states that the grounding system shall be arranged so as to <strong>prevent objectionable current</strong> from flowing on the grounding conductors or grounding paths. If objectionable current is detected, the cause must be corrected &mdash; typically by removing an improper downstream neutral-to-ground bond.
                </p>
              </div>
            </section>

            <section id="downstream-connection" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">What Happens When Neutral and Ground Connect Downstream</h2>
              <p className="text-white/80 mb-4">
                When a neutral-to-ground connection exists downstream of the service entrance (in a sub-panel, at a receptacle, or anywhere else in the system), it creates parallel paths for neutral return current. Current will split between the neutral conductor and the EGC based on their relative impedances, causing several dangerous problems.
              </p>

              <div className="space-y-4 my-6">
                <div className="bg-red-900/20 rounded-xl p-6 border border-red-500/20">
                  <h4 className="font-semibold text-red-400 mb-2">Current on the Ground Wire</h4>
                  <p className="text-white/60 text-sm">
                    Normal load current splits between the neutral and ground paths. This means every metal box, conduit run, and device yoke connected by the EGC now carries operating current. Anyone touching a metal enclosure while grounded (standing on a concrete floor, touching a water pipe) could receive a shock &mdash; even though no fault exists.
                  </p>
                </div>
                <div className="bg-red-900/20 rounded-xl p-6 border border-red-500/20">
                  <h4 className="font-semibold text-red-400 mb-2">GFCI Malfunction</h4>
                  <p className="text-white/60 text-sm">
                    GFCI devices work by monitoring the balance between hot and neutral current. If some neutral current is diverted to the ground wire before passing back through the GFCI, it detects an imbalance and trips. This creates <strong>nuisance tripping</strong> on GFCI-protected circuits. Worse, in some configurations, the GFCI may <strong>fail to trip</strong> during an actual ground fault because the current path bypasses its sensing.
                  </p>
                </div>
                <div className="bg-red-900/20 rounded-xl p-6 border border-red-500/20">
                  <h4 className="font-semibold text-red-400 mb-2">Voltage on Metal Parts</h4>
                  <p className="text-white/60 text-sm">
                    When current flows through the EGC, the resistance of the ground path creates a voltage drop. This means metal enclosures and conduit are no longer at zero volts relative to true earth ground. Under heavy load, these voltages can reach levels sufficient to cause painful shock or worse.
                  </p>
                </div>
                <div className="bg-red-900/20 rounded-xl p-6 border border-red-500/20">
                  <h4 className="font-semibold text-red-400 mb-2">Fire Risk</h4>
                  <p className="text-white/60 text-sm">
                    Current flowing through connections not designed to carry it &mdash; such as bonding screws, ground clips, and conduit fittings &mdash; generates heat at high-resistance contact points. Over time, this can lead to arcing, insulation damage, and fire.
                  </p>
                </div>
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

            <section id="floating-neutral" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Floating Neutral Dangers</h2>
              <p className="text-white/80 mb-4">
                A <strong>floating neutral</strong> (also called an &ldquo;open neutral&rdquo; or &ldquo;lost neutral&rdquo;) occurs when the neutral conductor loses its connection &mdash; either through a loose termination, a broken wire, corrosion, or an intentional (and dangerous) disconnection. This is one of the most hazardous conditions in residential and commercial electrical systems.
              </p>

              <h3 className="text-xl font-display font-semibold mb-3 text-cyan-400">What Happens When the Neutral Opens</h3>
              <p className="text-white/80 mb-4">
                In a single-phase, three-wire (120/240V) system, the neutral acts as the center tap of the transformer. When the neutral opens, the two 120V legs are no longer independently referenced to the center point. Instead, they become a <strong>series circuit</strong> across 240V, with the load impedances acting as a voltage divider.
              </p>

              <div className="bg-red-900/40 rounded-xl p-6 my-6 border border-red-500/30">
                <h4 className="font-semibold text-red-400 mb-3">Floating Neutral Voltage Imbalance Example</h4>
                <p className="text-white/70 text-sm mb-3">
                  Consider a 120/240V system with an open neutral. Leg A has a 1,200W load (10 ohms) and Leg B has a 100W load (144 ohms):
                </p>
                <div className="grid grid-cols-2 gap-4 text-center mb-3">
                  <div>
                    <p className="text-white/60 text-sm">Leg A Voltage</p>
                    <p className="text-2xl font-bold text-green-400 font-mono">~15.6V</p>
                    <p className="text-white/50 text-xs">Severely undervoltaged</p>
                  </div>
                  <div>
                    <p className="text-white/60 text-sm">Leg B Voltage</p>
                    <p className="text-2xl font-bold text-red-400 font-mono">~224V</p>
                    <p className="text-white/50 text-xs">Dangerously overvoltaged</p>
                  </div>
                </div>
                <p className="text-white/60 text-sm">
                  The lightly loaded leg receives excessive voltage, destroying electronics, appliances, and motors. The heavily loaded leg receives insufficient voltage, causing motors to overheat and stall. Both conditions are hazardous.
                </p>
              </div>

              <h3 className="text-xl font-display font-semibold mb-3 text-cyan-400">Common Causes of Open Neutrals</h3>
              <div className="grid md:grid-cols-2 gap-4 my-6">
                <div className="bg-white/5 rounded-xl p-4">
                  <p className="font-semibold text-white mb-1">Utility-Side Open</p>
                  <p className="text-white/60 text-sm">Loose connection at the meter, weatherhead, or utility transformer. Corrosion at the service drop attachment. Wind or storm damage breaking the neutral conductor.</p>
                </div>
                <div className="bg-white/5 rounded-xl p-4">
                  <p className="font-semibold text-white mb-1">Main Panel Open</p>
                  <p className="text-white/60 text-sm">Loose neutral lug in the main panel. Failed neutral bus bar. Overheated connection due to undersized conductor or poor workmanship.</p>
                </div>
                <div className="bg-white/5 rounded-xl p-4">
                  <p className="font-semibold text-white mb-1">Branch Circuit Open</p>
                  <p className="text-white/60 text-sm">Loose wire nut on the neutral splice. Backstab connection failure at a receptacle. Broken neutral in a damaged cable run.</p>
                </div>
                <div className="bg-white/5 rounded-xl p-4">
                  <p className="font-semibold text-white mb-1">MWBC Open</p>
                  <p className="text-white/60 text-sm">Opening the neutral on a multiwire branch circuit while both hots are loaded. This puts the two loads in series across 240V &mdash; the same floating neutral effect at the branch circuit level.</p>
                </div>
              </div>

              <div className="bg-orange-900/30 rounded-xl p-6 my-6">
                <h4 className="font-semibold text-orange-400 mb-3">Signs of a Floating Neutral</h4>
                <ul className="text-white/70 space-y-2 text-sm">
                  <li><strong>Flickering lights:</strong> Lights that brighten and dim as loads cycle on other circuits</li>
                  <li><strong>Burned-out bulbs and electronics:</strong> Appliances on the high-voltage leg fail prematurely</li>
                  <li><strong>Inconsistent voltages:</strong> Voltage readings at receptacles fluctuate depending on what else is turned on</li>
                  <li><strong>Voltage between neutral and ground:</strong> Measuring more than 1-2V between neutral and ground at a receptacle may indicate an open or high-resistance neutral</li>
                  <li><strong>Tingling from metal surfaces:</strong> Current seeking a path through grounding system and water pipes</li>
                </ul>
              </div>
            </section>

            <section id="bootleg-grounds" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Bootleg Grounds Explained</h2>
              <p className="text-white/80 mb-4">
                A <strong>bootleg ground</strong> (also called a &ldquo;false ground&rdquo; or &ldquo;cheated ground&rdquo;) is a wiring hack where someone connects the ground terminal of a three-prong receptacle to the neutral wire instead of running an actual equipment grounding conductor. This is done to make a three-prong outlet &ldquo;test good&rdquo; with a basic outlet tester, but it creates a <strong>dangerous and code-violating condition</strong>.
              </p>

              <div className="bg-red-900/30 rounded-xl p-6 my-6">
                <h4 className="font-semibold text-red-400 mb-3">Why Bootleg Grounds Are Dangerous</h4>
                <ul className="text-white/70 space-y-2 text-sm">
                  <li><strong>Shock hazard via neutral current:</strong> Normal operating current flows on the neutral. By connecting the ground pin to the neutral, the metal case of any three-prong appliance becomes part of the neutral path. If the neutral opens upstream, the appliance case becomes energized at full line voltage.</li>
                  <li><strong>GFCI defeat:</strong> A bootleg ground can prevent GFCI protection from working. Since the &ldquo;ground&rdquo; is actually the neutral, fault current returns on the neutral rather than the EGC, and the GFCI may not detect the imbalance.</li>
                  <li><strong>Hidden from basic testers:</strong> A standard three-light outlet tester will show &ldquo;correct&rdquo; wiring because it only checks for voltage between the terminals. It cannot distinguish a real ground from a bootleg ground.</li>
                  <li><strong>Fire hazard:</strong> The receptacle ground terminal and the appliance ground path are not designed to carry continuous neutral current. This causes overheating at connections.</li>
                </ul>
              </div>

              <h3 className="text-xl font-display font-semibold mb-3 text-cyan-400">How to Detect a Bootleg Ground</h3>
              <div className="bg-white/5 rounded-xl p-6 my-6">
                <ul className="text-white/70 space-y-2 text-sm">
                  <li><strong>Measure neutral-to-ground voltage:</strong> At a properly wired receptacle, there should be 0.5V to 2V between neutral and ground (due to neutral current causing voltage drop). A bootleg ground will show <strong>exactly 0V</strong> between neutral and ground because they&apos;re the same wire.</li>
                  <li><strong>GFCI test:</strong> Install a GFCI receptacle. If the GFCI test button does not trip the device, a bootleg ground may be present (the test button works by routing a small current from hot to ground, which on a bootleg returns on the neutral and doesn&apos;t create an imbalance).</li>
                  <li><strong>Impedance tester:</strong> Professional-grade receptacle testers with impedance measurement can identify bootleg grounds by measuring the impedance of the ground path versus the neutral path.</li>
                  <li><strong>Visual inspection:</strong> Open the receptacle and check whether a jumper wire connects the neutral terminal to the ground terminal. Check the <Link href="/blog/electrical-wire-color-code-guide" className="text-cyan-400 hover:text-cyan-300">wire color codes</Link> &mdash; only green, green/yellow, or bare conductors should connect to the ground terminal.</li>
                </ul>
              </div>

              <div className="bg-cyan-900/30 rounded-xl p-6 my-6">
                <h4 className="font-semibold text-cyan-400 mb-3">NEC-Compliant Alternatives to a Bootleg Ground</h4>
                <p className="text-white/70 text-sm mb-3">If an older two-wire circuit has no EGC, the NEC provides three legal options (NEC 406.4(D)):</p>
                <ol className="text-white/70 space-y-2 text-sm list-decimal list-inside">
                  <li><strong>Install a two-prong receptacle:</strong> Replace the three-prong receptacle with a two-prong type that matches the wiring.</li>
                  <li><strong>Install a GFCI receptacle:</strong> A GFCI receptacle or upstream GFCI breaker provides personal protection without an EGC. The receptacle must be labeled &ldquo;No Equipment Ground.&rdquo;</li>
                  <li><strong>Run an equipment grounding conductor:</strong> Per NEC 250.130(C), you can retrofit a grounding conductor from the receptacle to any accessible point on the grounding electrode system, grounding electrode conductor, panelboard grounding terminal, or another EGC that is part of a branch circuit.</li>
                </ol>
              </div>
            </section>

            <section id="sub-panel-separation" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Sub-Panel Neutral-Ground Separation</h2>
              <p className="text-white/80 mb-4">
                One of the most common wiring mistakes in residential and commercial work is failing to separate the neutral and ground buses in a <Link href="/blog/sub-panel-installation-guide" className="text-cyan-400 hover:text-cyan-300">sub-panel</Link>. Per <strong>NEC 250.24(A)(5)</strong>, the neutral-to-ground bond must exist <strong>only at the service disconnecting means</strong>. Every downstream panel must have isolated neutral and ground buses.
              </p>

              <h3 className="text-xl font-display font-semibold mb-3 text-cyan-400">How to Properly Configure a Sub-Panel</h3>
              <div className="space-y-4 my-6">
                <div className="bg-white/5 rounded-xl p-4 flex items-start gap-4">
                  <span className="bg-cyan-600 text-white text-sm font-bold px-3 py-1 rounded-full">1</span>
                  <div>
                    <p className="font-semibold text-white">Remove the Bonding Screw or Strap</p>
                    <p className="text-white/60 text-sm">Most panels ship with a green bonding screw or bonding strap installed that connects the neutral bus to the enclosure (and therefore to the ground bus). This screw/strap must be <strong>removed</strong> when the panel is used as a sub-panel. Save it with the panel documentation.</p>
                  </div>
                </div>
                <div className="bg-white/5 rounded-xl p-4 flex items-start gap-4">
                  <span className="bg-cyan-600 text-white text-sm font-bold px-3 py-1 rounded-full">2</span>
                  <div>
                    <p className="font-semibold text-white">Install a Separate Ground Bus (If Needed)</p>
                    <p className="text-white/60 text-sm">Some panels have only one bus bar for both neutral and ground. If so, install a separate ground bus bar kit. Ground wires connect to the ground bus (which bonds to the enclosure), and neutral wires connect to the isolated neutral bus (which floats from the enclosure).</p>
                  </div>
                </div>
                <div className="bg-white/5 rounded-xl p-4 flex items-start gap-4">
                  <span className="bg-cyan-600 text-white text-sm font-bold px-3 py-1 rounded-full">3</span>
                  <div>
                    <p className="font-semibold text-white">Run a 4-Wire Feeder</p>
                    <p className="text-white/60 text-sm">The feeder to the sub-panel must include two hots, a neutral, <strong>and</strong> a separate equipment grounding conductor &mdash; four wires total. The EGC connects to the sub-panel ground bus. The neutral connects to the isolated neutral bus.</p>
                  </div>
                </div>
                <div className="bg-white/5 rounded-xl p-4 flex items-start gap-4">
                  <span className="bg-cyan-600 text-white text-sm font-bold px-3 py-1 rounded-full">4</span>
                  <div>
                    <p className="font-semibold text-white">Verify No Cross-Connection</p>
                    <p className="text-white/60 text-sm">After wiring, confirm that no neutral wires land on the ground bus and no ground wires land on the neutral bus. Each conductor must be on its correct bus bar.</p>
                  </div>
                </div>
              </div>

              <div className="bg-yellow-900/30 rounded-xl p-6 my-6 border border-yellow-500/30">
                <h4 className="font-semibold text-yellow-400 mb-3">Exception: Detached Building with No Metallic Paths</h4>
                <p className="text-white/70 text-sm">
                  NEC 250.32(B) Exception allows a detached building or structure to have its own grounding electrode system with a neutral-to-ground bond if: (1) there are no continuous metallic paths between the buildings (water pipe, gas pipe, communications cable shield, etc.), and (2) ground-fault protection of equipment is not installed on the supply side. If either condition is not met, the standard 4-wire feeder with separated neutral and ground is required.
                </p>
              </div>
            </section>

            <section id="testing-procedures" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Testing for Proper Neutral/Ground</h2>
              <p className="text-white/80 mb-4">
                Proper testing helps identify neutral-ground issues including bootleg grounds, floating neutrals, downstream bonds, and high-resistance connections. Here are the key tests every electrician should know.
              </p>

              <div className="overflow-x-auto my-6">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-white/20">
                      <th className="text-left py-3 px-4 text-white/60">Test</th>
                      <th className="text-left py-3 px-4 text-white/60">Method</th>
                      <th className="text-left py-3 px-4 text-white/60">Normal Result</th>
                      <th className="text-left py-3 px-4 text-white/60">Problem Indicator</th>
                    </tr>
                  </thead>
                  <tbody className="text-white/80">
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-semibold">Neutral-to-Ground Voltage</td>
                      <td className="py-3 px-4 text-white/60">Measure voltage between neutral and ground slots at a loaded receptacle</td>
                      <td className="py-3 px-4 font-mono text-green-400">0.5V &ndash; 2V</td>
                      <td className="py-3 px-4 text-white/60">0V = bootleg ground; &gt;5V = high-resistance neutral</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-semibold">Hot-to-Neutral Voltage</td>
                      <td className="py-3 px-4 text-white/60">Measure voltage between hot and neutral slots</td>
                      <td className="py-3 px-4 font-mono text-green-400">118V &ndash; 122V</td>
                      <td className="py-3 px-4 text-white/60">&lt;110V or &gt;130V = possible open neutral upstream</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-semibold">Hot-to-Ground Voltage</td>
                      <td className="py-3 px-4 text-white/60">Measure voltage between hot and ground slots</td>
                      <td className="py-3 px-4 font-mono text-green-400">118V &ndash; 122V</td>
                      <td className="py-3 px-4 text-white/60">0V = open/missing ground; significantly different from H-N = wiring issue</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-semibold">Ground Impedance</td>
                      <td className="py-3 px-4 text-white/60">Use a ground impedance tester at receptacle</td>
                      <td className="py-3 px-4 font-mono text-green-400">&lt;1 ohm</td>
                      <td className="py-3 px-4 text-white/60">&gt;1 ohm = poor ground path; may not clear faults quickly</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-semibold">GFCI Trip Test</td>
                      <td className="py-3 px-4 text-white/60">Press test button on GFCI receptacle or use external GFCI tester</td>
                      <td className="py-3 px-4 font-mono text-green-400">Trips within specs</td>
                      <td className="py-3 px-4 text-white/60">No trip = bootleg ground or open ground; nuisance trip = downstream N-G bond</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="bg-white/5 rounded-xl p-6 my-6">
                <h4 className="font-semibold text-cyan-400 mb-3">Panel-Level Testing for Downstream Bonds</h4>
                <p className="text-white/70 text-sm mb-3">
                  To detect an improper neutral-ground bond downstream of the main panel:
                </p>
                <ol className="text-white/70 space-y-2 text-sm list-decimal list-inside">
                  <li>Turn off the main breaker to disconnect the utility neutral</li>
                  <li>Remove the main bonding jumper (MBJ) to isolate neutral from ground bus</li>
                  <li>Measure resistance between the neutral bus and ground bus with an ohmmeter</li>
                  <li>If the reading is very low (near 0 ohms), a downstream bond exists</li>
                  <li>Systematically turn off breakers and disconnect branch circuit neutrals to isolate the offending circuit</li>
                  <li>Reinstall the MBJ and restore the main breaker when testing is complete</li>
                </ol>
              </div>
            </section>

            <section id="common-violations" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Common Code Violations</h2>
              <p className="text-white/80 mb-4">
                Neutral and ground wire mistakes are among the most frequently cited NEC violations during inspections. Many of these violations exist in older installations where the rules were different, or where unqualified individuals performed the work. Here are the most common issues.
              </p>

              <div className="grid md:grid-cols-2 gap-4 my-6">
                <div className="bg-red-900/20 rounded-xl p-6 border border-red-500/20">
                  <h4 className="font-semibold text-red-400 mb-3">Bonded Sub-Panel</h4>
                  <p className="text-white/60 text-sm">
                    Leaving the bonding screw installed in a sub-panel, creating a second neutral-to-ground connection downstream. This is the most common neutral/ground violation and causes current on the grounding system.
                  </p>
                </div>
                <div className="bg-red-900/20 rounded-xl p-6 border border-red-500/20">
                  <h4 className="font-semibold text-red-400 mb-3">3-Wire Feeder to Sub-Panel</h4>
                  <p className="text-white/60 text-sm">
                    Running only three wires (two hots and a neutral) to a sub-panel and using the neutral as both the grounded conductor and the equipment grounding conductor. A 4-wire feeder is required (NEC 250.32(B)).
                  </p>
                </div>
                <div className="bg-red-900/20 rounded-xl p-6 border border-red-500/20">
                  <h4 className="font-semibold text-red-400 mb-3">Bootleg Ground at Receptacles</h4>
                  <p className="text-white/60 text-sm">
                    Jumping neutral to ground at a receptacle to make a two-wire circuit appear properly grounded. This deceives basic testers and creates shock and fire hazards.
                  </p>
                </div>
                <div className="bg-red-900/20 rounded-xl p-6 border border-red-500/20">
                  <h4 className="font-semibold text-red-400 mb-3">Neutral and Ground Shared on Same Lug</h4>
                  <p className="text-white/60 text-sm">
                    Double-tapping neutral and ground wires under the same terminal screw in a panel. NEC 408.41 requires each grounded (neutral) conductor to terminate in an individual terminal. Ground wires can share terminals only where the terminal is listed for multiple conductors.
                  </p>
                </div>
                <div className="bg-red-900/20 rounded-xl p-6 border border-red-500/20">
                  <h4 className="font-semibold text-red-400 mb-3">White Wire Used as Hot Without Marking</h4>
                  <p className="text-white/60 text-sm">
                    Using a white conductor as an ungrounded (hot) conductor without re-identifying it with tape or paint at every termination point. NEC 200.7 requires re-identification when a white wire is used as a hot in switch loops or 240V circuits.
                  </p>
                </div>
                <div className="bg-red-900/20 rounded-xl p-6 border border-red-500/20">
                  <h4 className="font-semibold text-red-400 mb-3">Missing Main Bonding Jumper</h4>
                  <p className="text-white/60 text-sm">
                    The main panel lacks the bonding screw or strap connecting the neutral bus to the enclosure. Without this connection, there is no defined return path for ground-fault current, and the entire grounding system is ineffective.
                  </p>
                </div>
                <div className="bg-red-900/20 rounded-xl p-6 border border-red-500/20">
                  <h4 className="font-semibold text-red-400 mb-3">Switched or Fused Neutral</h4>
                  <p className="text-white/60 text-sm">
                    Installing a single-pole switch or fuse in the neutral conductor. Per NEC 240.22, overcurrent devices cannot be placed in a grounded conductor unless they simultaneously open all ungrounded conductors. A switched neutral can cause a floating neutral condition.
                  </p>
                </div>
                <div className="bg-red-900/20 rounded-xl p-6 border border-red-500/20">
                  <h4 className="font-semibold text-red-400 mb-3">Ground Wire Used as Neutral</h4>
                  <p className="text-white/60 text-sm">
                    Using the EGC to carry neutral (return) current because the neutral wire is damaged or missing. This puts operating current on the grounding system, energizing metal enclosures and defeating the safety purpose of the EGC.
                  </p>
                </div>
              </div>
            </section>

            <section id="faq" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Frequently Asked Questions</h2>

              <div className="space-y-6 my-6">
                <div className="bg-white/5 rounded-xl p-6">
                  <h3 className="font-semibold text-white mb-2">If neutral and ground are bonded at the panel, aren&apos;t they the same thing?</h3>
                  <p className="text-white/70 text-sm">
                    No. They are bonded at one point to create a reference, but they serve completely different functions. The neutral carries normal return current. The ground carries zero current under normal conditions and only provides a fault path for safety. Think of them as two highways that share one interchange &mdash; they connect at that single point but carry different traffic.
                  </p>
                </div>

                <div className="bg-white/5 rounded-xl p-6">
                  <h3 className="font-semibold text-white mb-2">Can I use the ground wire as a neutral in an emergency?</h3>
                  <p className="text-white/70 text-sm">
                    Never. Using the ground wire as a neutral conductor puts operating current on every metal enclosure, conduit run, and device frame in that circuit&apos;s grounding path. This creates an immediate shock hazard and violates NEC 250.6 (objectionable current). If the neutral is damaged, the circuit must be taken out of service until repaired.
                  </p>
                </div>

                <div className="bg-white/5 rounded-xl p-6">
                  <h3 className="font-semibold text-white mb-2">Why does my outlet tester show &ldquo;correct&rdquo; even with a bootleg ground?</h3>
                  <p className="text-white/70 text-sm">
                    Basic three-light testers only check for voltage presence between terminals. Since a bootleg ground connects the ground terminal to the neutral wire, the tester sees voltage between hot-neutral, hot-ground, and no voltage between neutral-ground &mdash; exactly the same pattern as a correctly wired outlet. You need a GFCI test or impedance measurement to detect bootleg grounds.
                  </p>
                </div>

                <div className="bg-white/5 rounded-xl p-6">
                  <h3 className="font-semibold text-white mb-2">Is it normal to measure voltage between neutral and ground?</h3>
                  <p className="text-white/70 text-sm">
                    Yes. A small voltage (typically 0.5V to 2V) between neutral and ground at a loaded receptacle is normal and expected. This voltage is caused by the IR drop (current times resistance) of the neutral conductor carrying return current from the load back to the panel. If you read 0V exactly, it may indicate a bootleg ground. If you read more than 5V, it may indicate a high-resistance neutral connection.
                  </p>
                </div>

                <div className="bg-white/5 rounded-xl p-6">
                  <h3 className="font-semibold text-white mb-2">My house has a 3-wire feeder to the sub-panel. Do I need to rewire it?</h3>
                  <p className="text-white/70 text-sm">
                    If your installation was done under an older edition of the NEC that permitted 3-wire feeders to sub-panels (prior to the 2008 NEC), it may be grandfathered as a legal existing installation. However, it is not up to current code, and upgrading to a 4-wire feeder with separate neutral and ground is strongly recommended for safety. Any new work or modification to the panel would require bringing it into compliance with current code.
                  </p>
                </div>

                <div className="bg-white/5 rounded-xl p-6">
                  <h3 className="font-semibold text-white mb-2">Does the neutral wire carry current in a 240V circuit?</h3>
                  <p className="text-white/70 text-sm">
                    In a straight 240V circuit (like a water heater or baseboard heater using only two hots and a ground), no neutral is present or needed. In a 120/240V circuit (like a range or dryer that uses both 240V and 120V), the neutral carries the unbalanced current from the 120V loads. In a balanced 240V circuit with no 120V loads, the neutral carries no current.
                  </p>
                </div>

                <div className="bg-white/5 rounded-xl p-6">
                  <h3 className="font-semibold text-white mb-2">What does the NEC say about the neutral wire size?</h3>
                  <p className="text-white/70 text-sm">
                    NEC 220.61 addresses the sizing of the feeder or service neutral. For a standard dwelling, the neutral conductor must be sized to carry the maximum unbalanced load. For ranges, ovens, and dryers, the neutral can be sized at 70% of the demand load. The neutral must never be smaller than the requirements of NEC 250.24(C) for service conductors, and it must be identified per NEC 200.6.
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
                <Link href="/blog/electrical-grounding-vs-bonding" className="bg-white/5 hover:bg-white/10 rounded-xl p-6 transition-colors">
                  <span className="text-cyan-400 text-sm">Troubleshooting</span>
                  <h3 className="font-semibold mt-2">Electrical Grounding vs Bonding: What&apos;s the Difference?</h3>
                </Link>
                <Link href="/blog/nec-article-250-grounding-guide" className="bg-white/5 hover:bg-white/10 rounded-xl p-6 transition-colors">
                  <span className="text-purple-400 text-sm">NEC Code</span>
                  <h3 className="font-semibold mt-2">NEC Article 250: Complete Grounding Guide</h3>
                </Link>
                <Link href="/blog/sub-panel-installation-guide" className="bg-white/5 hover:bg-white/10 rounded-xl p-6 transition-colors">
                  <span className="text-blue-400 text-sm">Installation</span>
                  <h3 className="font-semibold mt-2">Sub-Panel Installation Guide</h3>
                </Link>
                <Link href="/blog/electrical-wire-color-code-guide" className="bg-white/5 hover:bg-white/10 rounded-xl p-6 transition-colors">
                  <span className="text-green-400 text-sm">Materials</span>
                  <h3 className="font-semibold mt-2">Electrical Wire Color Code Guide</h3>
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
