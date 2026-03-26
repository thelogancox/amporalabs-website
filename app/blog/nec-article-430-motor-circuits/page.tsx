import { Metadata } from "next";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import { BlogPostingJsonLd, BreadcrumbJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "NEC Article 430: Motor Circuit Wiring Requirements Guide",
  description: "Complete guide to NEC Article 430 motor circuit wiring requirements. Learn motor FLC tables, branch circuit conductor sizing, overload protection, short-circuit protection, disconnect requirements, and controller specifications for compliant motor installations.",
  keywords: [
    "NEC Article 430",
    "motor circuit wiring",
    "motor full load current",
    "motor overload protection",
    "motor branch circuit protection",
    "motor disconnect requirements",
    "motor conductor sizing",
    "motor controller NEC",
    "motor FLC table",
    "motor circuit design"
  ],
  openGraph: {
    title: "NEC Article 430: Motor Circuit Wiring Requirements Guide",
    description: "Complete guide to NEC Article 430 motor circuit wiring requirements for electricians.",
    type: "article",
    publishedTime: "2025-03-18",
  },
};

function HeroIllustration() {
  return (
    <svg viewBox="0 0 400 220" className="w-full h-48 md:h-56" aria-label="Motor with circuit protection illustration">
      <defs>
        <linearGradient id="motorBodyGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#374151"/>
          <stop offset="100%" stopColor="#1f2937"/>
        </linearGradient>
        <linearGradient id="shieldGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#7c3aed"/>
          <stop offset="100%" stopColor="#4c1d95"/>
        </linearGradient>
        <radialGradient id="motorGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.3"/>
          <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0"/>
        </radialGradient>
      </defs>

      {/* Background glow behind motor */}
      <circle cx="310" cy="110" r="70" fill="url(#motorGlow)"/>

      {/* Power supply panel */}
      <rect x="15" y="65" width="50" height="70" rx="4" fill="#1f2937" stroke="#6b7280" strokeWidth="2"/>
      <text x="40" y="90" textAnchor="middle" fill="#9ca3af" fontSize="7" fontWeight="bold">SUPPLY</text>
      <text x="40" y="105" textAnchor="middle" fill="#a78bfa" fontSize="8">480V</text>
      <text x="40" y="118" textAnchor="middle" fill="#9ca3af" fontSize="7">3-Phase</text>

      {/* Conductors from panel to disconnect */}
      <line x1="65" y1="90" x2="90" y2="90" stroke="#ef4444" strokeWidth="2.5"/>
      <line x1="65" y1="100" x2="90" y2="100" stroke="#f59e0b" strokeWidth="2.5"/>
      <line x1="65" y1="110" x2="90" y2="110" stroke="#3b82f6" strokeWidth="2.5"/>

      {/* Disconnect switch */}
      <rect x="90" y="72" width="38" height="56" rx="3" fill="#1f2937" stroke="#ef4444" strokeWidth="2"/>
      <text x="109" y="88" textAnchor="middle" fill="#ef4444" fontSize="7" fontWeight="bold">DISC</text>
      <line x1="98" y1="108" x2="120" y2="92" stroke="#ef4444" strokeWidth="2" strokeLinecap="round"/>
      <text x="109" y="120" textAnchor="middle" fill="#9ca3af" fontSize="5">430.102</text>

      {/* Conductors to SCPD */}
      <line x1="128" y1="90" x2="148" y2="90" stroke="#ef4444" strokeWidth="2.5"/>
      <line x1="128" y1="100" x2="148" y2="100" stroke="#f59e0b" strokeWidth="2.5"/>
      <line x1="128" y1="110" x2="148" y2="110" stroke="#3b82f6" strokeWidth="2.5"/>

      {/* Short-circuit protection device */}
      <rect x="148" y="72" width="42" height="56" rx="3" fill="#1f2937" stroke="#f59e0b" strokeWidth="2"/>
      <text x="169" y="88" textAnchor="middle" fill="#f59e0b" fontSize="6" fontWeight="bold">SCPD</text>
      <text x="169" y="100" textAnchor="middle" fill="#f59e0b" fontSize="7">250%</text>
      <text x="169" y="110" textAnchor="middle" fill="#f59e0b" fontSize="6">FLC</text>
      <text x="169" y="120" textAnchor="middle" fill="#9ca3af" fontSize="5">430.52</text>

      {/* Conductors to starter */}
      <line x1="190" y1="90" x2="210" y2="90" stroke="#ef4444" strokeWidth="2.5"/>
      <line x1="190" y1="100" x2="210" y2="100" stroke="#f59e0b" strokeWidth="2.5"/>
      <line x1="190" y1="110" x2="210" y2="110" stroke="#3b82f6" strokeWidth="2.5"/>

      {/* Motor starter with overloads */}
      <rect x="210" y="62" width="50" height="76" rx="4" fill="#1f2937" stroke="#22c55e" strokeWidth="2"/>
      <text x="235" y="78" textAnchor="middle" fill="#22c55e" fontSize="7" fontWeight="bold">STARTER</text>
      <rect x="218" y="84" width="34" height="18" rx="2" fill="#374151" stroke="#22c55e" strokeWidth="1"/>
      <text x="235" y="96" textAnchor="middle" fill="#22c55e" fontSize="6">CONTACTOR</text>
      <rect x="218" y="108" width="34" height="18" rx="2" fill="#374151" stroke="#06b6d4" strokeWidth="1"/>
      <text x="235" y="120" textAnchor="middle" fill="#06b6d4" fontSize="6">OL 125%</text>
      <text x="235" y="133" textAnchor="middle" fill="#9ca3af" fontSize="5">430.32</text>

      {/* Conductors to motor */}
      <line x1="260" y1="90" x2="275" y2="90" stroke="#ef4444" strokeWidth="2.5"/>
      <line x1="260" y1="100" x2="275" y2="100" stroke="#f59e0b" strokeWidth="2.5"/>
      <line x1="260" y1="110" x2="275" y2="110" stroke="#3b82f6" strokeWidth="2.5"/>

      {/* Motor body */}
      <circle cx="310" cy="100" r="42" fill="url(#motorBodyGrad)" stroke="#8b5cf6" strokeWidth="3"/>
      <circle cx="310" cy="100" r="28" fill="#1f2937" stroke="#6b7280" strokeWidth="1.5"/>
      <circle cx="310" cy="100" r="8" fill="#374151" stroke="#6b7280" strokeWidth="1"/>
      {/* Motor shaft */}
      <rect x="348" y="95" width="25" height="10" rx="2" fill="#4b5563" stroke="#6b7280" strokeWidth="1"/>
      {/* Motor symbol */}
      <text x="310" y="95" textAnchor="middle" fill="#a78bfa" fontSize="14" fontWeight="bold">M</text>
      <text x="310" y="112" textAnchor="middle" fill="#a78bfa" fontSize="9">3&#x3C6;</text>
      {/* Motor fins */}
      {[0, 1, 2, 3, 4, 5].map((i) => (
        <line
          key={i}
          x1={310 + 35 * Math.cos((i * 60 * Math.PI) / 180)}
          y1={100 + 35 * Math.sin((i * 60 * Math.PI) / 180)}
          x2={310 + 42 * Math.cos((i * 60 * Math.PI) / 180)}
          y2={100 + 42 * Math.sin((i * 60 * Math.PI) / 180)}
          stroke="#6b7280"
          strokeWidth="1"
        />
      ))}

      {/* Bottom labels */}
      <text x="40" y="155" textAnchor="middle" fill="#9ca3af" fontSize="7">Power</text>
      <text x="40" y="165" textAnchor="middle" fill="#9ca3af" fontSize="7">Source</text>
      <text x="109" y="155" textAnchor="middle" fill="#9ca3af" fontSize="7">Disconnect</text>
      <text x="109" y="165" textAnchor="middle" fill="#9ca3af" fontSize="7">Within Sight</text>
      <text x="169" y="155" textAnchor="middle" fill="#9ca3af" fontSize="7">Branch Ckt</text>
      <text x="169" y="165" textAnchor="middle" fill="#9ca3af" fontSize="7">Protection</text>
      <text x="235" y="155" textAnchor="middle" fill="#9ca3af" fontSize="7">Controller</text>
      <text x="235" y="165" textAnchor="middle" fill="#9ca3af" fontSize="7">+ Overload</text>
      <text x="310" y="155" textAnchor="middle" fill="#9ca3af" fontSize="7">Motor</text>

      {/* Conductor sizing note */}
      <rect x="75" y="185" width="250" height="22" rx="4" fill="#8b5cf6" fillOpacity="0.15" stroke="#8b5cf6" strokeWidth="1" strokeOpacity="0.3"/>
      <text x="200" y="200" textAnchor="middle" fill="#a78bfa" fontSize="9" fontWeight="bold">Conductors sized at 125% of motor FLC (430.22)</text>
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
            { name: "NEC Article 430 Motor Circuits", url: "https://amporalabs.com/blog/nec-article-430-motor-circuits" },
          ]}
        />
        <BlogPostingJsonLd
          headline="NEC Article 430: Motor Circuit Wiring Requirements Guide"
          description="Complete guide to NEC Article 430 motor circuit wiring requirements including FLC tables, conductor sizing, overload protection, short-circuit protection, and disconnect requirements."
          datePublished="2025-03-18"
          url="https://amporalabs.com/blog/nec-article-430-motor-circuits"
        />

        <article className="max-w-4xl mx-auto px-6 py-12">
          <nav className="text-sm text-white/60 mb-8">
            <Link href="/" className="hover:text-white">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/blog" className="hover:text-white">Blog</Link>
            <span className="mx-2">/</span>
            <span className="text-white">NEC Article 430 Motor Circuits</span>
          </nav>

          <header className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <span className="px-3 py-1 bg-purple-600/30 text-purple-300 text-sm font-medium rounded-full">
                NEC Code
              </span>
              <span className="text-white/40 text-sm">March 18, 2025</span>
              <span className="text-white/40 text-sm">• 15 min read</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">
              NEC Article 430: Motor Circuit Wiring Requirements Guide
            </h1>
            <p className="text-xl text-white/70">
              A deep dive into NEC Article 430 covering every component of a motor branch circuit — from FLC tables and conductor sizing to overload protection, short-circuit devices, disconnects, and controllers.
            </p>
          </header>

          <div className="mb-12 bg-gradient-to-br from-purple-900/20 to-cyan-900/20 rounded-2xl p-6 border border-white/10">
            <HeroIllustration />
          </div>

          <div className="prose prose-invert prose-lg max-w-none">
            <h2>Understanding Motor Circuit Components</h2>
            <p>
              NEC Article 430 is one of the longest and most complex articles in the National Electrical Code, and for good reason. Motors present unique challenges that standard branch circuit rules cannot address. During startup, a typical induction motor draws <strong>6 to 8 times its full-load current</strong> for several seconds. A standard overcurrent device sized to the conductor ampacity would trip immediately, preventing the motor from ever starting.
            </p>
            <p>
              Article 430 resolves this by splitting motor protection into two distinct layers: <strong>overload protection</strong> (which guards the running motor against sustained overcurrent) and <strong>branch circuit short-circuit and ground-fault protection</strong> (which guards against faults but is intentionally oversized to permit starting inrush). Between these two layers, the motor can start safely while remaining fully protected during operation and fault conditions.
            </p>
            <p>A complete motor branch circuit consists of four required components in sequence:</p>
            <ul>
              <li><strong>Branch circuit short-circuit and ground-fault protection device (SCPD)</strong> — fuses or circuit breaker sized per 430.52 to allow motor starting while protecting against short circuits</li>
              <li><strong>Disconnecting means</strong> — a switch or breaker within sight of the motor and controller, per 430.102</li>
              <li><strong>Motor controller</strong> — a contactor, starter, or VFD capable of starting and stopping the motor under load, per 430.81</li>
              <li><strong>Motor overload protection</strong> — thermal overloads, electronic overloads, or inherent protection sized close to the motor&apos;s nameplate FLA, per 430.32</li>
            </ul>
            <p>
              Each component has specific sizing rules, and confusing one with another is one of the most common mistakes electricians make on motor installations. The sections below walk through each requirement in detail.
            </p>

            <h2>Motor Full-Load Current Tables (430.247 - 430.250)</h2>
            <p>
              Before you can size any component of a motor circuit, you need the motor&apos;s <strong>full-load current (FLC)</strong>. This is a critical distinction in Article 430: all branch circuit components — conductors, SCPD, and disconnect — must be sized using the FLC values from the NEC tables, <strong>not</strong> the nameplate full-load amperes (FLA).
            </p>
            <p>
              The reason for this is standardization. Nameplate FLA varies between manufacturers based on motor efficiency, design type, and power factor. Using a standardized table value ensures that every motor of a given horsepower rating on a given voltage system gets the same branch circuit design, regardless of the specific manufacturer.
            </p>
            <p>
              The NEC provides four FLC tables:
            </p>
            <ul>
              <li><strong>Table 430.247</strong> — Full-Load Current for DC Motors</li>
              <li><strong>Table 430.248</strong> — Full-Load Current for Single-Phase AC Motors</li>
              <li><strong>Table 430.249</strong> — Full-Load Current for Two-Phase AC Motors</li>
              <li><strong>Table 430.250</strong> — Full-Load Current for Three-Phase AC Motors</li>
            </ul>

            <h3>Common Three-Phase Motor FLC Values (Table 430.250)</h3>
            <p>
              The following table shows the most commonly referenced values from NEC Table 430.250 for three-phase induction motors. These are the numbers you will use for conductor sizing, SCPD sizing, and disconnect sizing.
            </p>
            <div className="bg-white/5 rounded-xl p-6 my-6 overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="py-2 text-white">HP</th>
                    <th className="py-2 text-white">208V FLC</th>
                    <th className="py-2 text-white">230V FLC</th>
                    <th className="py-2 text-white">460V FLC</th>
                    <th className="py-2 text-white">575V FLC</th>
                  </tr>
                </thead>
                <tbody className="text-white/70">
                  <tr className="border-b border-white/5">
                    <td className="py-2">1</td>
                    <td className="py-2">4.6A</td>
                    <td className="py-2">4.2A</td>
                    <td className="py-2">2.1A</td>
                    <td className="py-2">1.7A</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-2">3</td>
                    <td className="py-2">11.0A</td>
                    <td className="py-2">9.6A</td>
                    <td className="py-2">4.8A</td>
                    <td className="py-2">3.9A</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-2">5</td>
                    <td className="py-2">16.7A</td>
                    <td className="py-2">15.2A</td>
                    <td className="py-2">7.6A</td>
                    <td className="py-2">6.1A</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-2">7.5</td>
                    <td className="py-2">24.2A</td>
                    <td className="py-2">22A</td>
                    <td className="py-2">11A</td>
                    <td className="py-2">9A</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-2">10</td>
                    <td className="py-2">30.8A</td>
                    <td className="py-2">28A</td>
                    <td className="py-2">14A</td>
                    <td className="py-2">11A</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-2">15</td>
                    <td className="py-2">46.2A</td>
                    <td className="py-2">42A</td>
                    <td className="py-2">21A</td>
                    <td className="py-2">17A</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-2">20</td>
                    <td className="py-2">59.4A</td>
                    <td className="py-2">54A</td>
                    <td className="py-2">27A</td>
                    <td className="py-2">22A</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-2">25</td>
                    <td className="py-2">74.8A</td>
                    <td className="py-2">68A</td>
                    <td className="py-2">34A</td>
                    <td className="py-2">27A</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-2">30</td>
                    <td className="py-2">88A</td>
                    <td className="py-2">80A</td>
                    <td className="py-2">40A</td>
                    <td className="py-2">32A</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-2">40</td>
                    <td className="py-2">114A</td>
                    <td className="py-2">104A</td>
                    <td className="py-2">52A</td>
                    <td className="py-2">41A</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-2">50</td>
                    <td className="py-2">143A</td>
                    <td className="py-2">130A</td>
                    <td className="py-2">65A</td>
                    <td className="py-2">52A</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-2">75</td>
                    <td className="py-2">211A</td>
                    <td className="py-2">192A</td>
                    <td className="py-2">96A</td>
                    <td className="py-2">77A</td>
                  </tr>
                  <tr>
                    <td className="py-2">100</td>
                    <td className="py-2">273A</td>
                    <td className="py-2">248A</td>
                    <td className="py-2">124A</td>
                    <td className="py-2">99A</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p>
              <strong>Important:</strong> The only place where you use the motor&apos;s nameplate FLA instead of the table FLC is for sizing <em>overload protection</em> per 430.32. Every other component uses table FLC values.
            </p>

            <h2>Branch Circuit Conductor Sizing (430.22)</h2>
            <p>
              NEC Section 430.22 requires that branch circuit conductors supplying a single motor have an ampacity of not less than <strong>125% of the motor full-load current</strong> as listed in the applicable FLC table. This 25% margin accounts for the continuous nature of motor loads and provides a safety factor for sustained operation.
            </p>
            <div className="bg-gradient-to-r from-purple-900/30 to-blue-900/30 rounded-xl p-6 my-6">
              <p className="text-white font-mono text-lg">Minimum Conductor Ampacity = 1.25 x FLC (from table)</p>
            </div>
            <p>
              After calculating the minimum ampacity, select a conductor from NEC Table 310.16 (or 310.17 for free-air installations) that meets or exceeds that ampacity at the appropriate temperature rating. Remember that terminal temperature limitations per 110.14(C) may require using the 60 degrees C or 75 degrees C column even if you are using conductors rated for a higher temperature.
            </p>

            <h3>Conductor Sizing Examples</h3>
            <div className="bg-white/5 rounded-xl p-6 my-6">
              <h4 className="text-white font-semibold mb-3">Example 1: 10 HP, 460V, 3-Phase Motor</h4>
              <div className="space-y-2 text-white/70">
                <p>FLC from Table 430.250 = <strong>14A</strong></p>
                <p>Minimum conductor ampacity = 14A x 1.25 = <strong>17.5A</strong></p>
                <p>From Table 310.16 (75 degrees C copper): #12 AWG = 25A</p>
                <p>Result: <strong>#12 AWG THHN copper is adequate</strong></p>
              </div>
            </div>
            <div className="bg-white/5 rounded-xl p-6 my-6">
              <h4 className="text-white font-semibold mb-3">Example 2: 50 HP, 460V, 3-Phase Motor</h4>
              <div className="space-y-2 text-white/70">
                <p>FLC from Table 430.250 = <strong>65A</strong></p>
                <p>Minimum conductor ampacity = 65A x 1.25 = <strong>81.25A</strong></p>
                <p>From Table 310.16 (75 degrees C copper): #4 AWG = 85A</p>
                <p>Result: <strong>#4 AWG THHN copper is adequate</strong></p>
              </div>
            </div>

            <h3>Multiple Motors on One Feeder (430.24)</h3>
            <p>
              When a feeder supplies more than one motor, the conductor ampacity must be at least the sum of all motor FLCs, plus 25% of the largest motor FLC. This accounts for the fact that only one motor will have the highest starting inrush at any given time.
            </p>
            <div className="bg-gradient-to-r from-purple-900/30 to-blue-900/30 rounded-xl p-6 my-6">
              <p className="text-white font-mono text-lg">Feeder Ampacity = 1.25 x Largest FLC + Sum of All Other FLCs</p>
            </div>
            <div className="bg-white/5 rounded-xl p-6 my-6">
              <h4 className="text-white font-semibold mb-3">Feeder Example: Three Motors on 460V</h4>
              <div className="space-y-2 text-white/70">
                <p>Motor 1: 25 HP (FLC = 34A) — largest motor</p>
                <p>Motor 2: 10 HP (FLC = 14A)</p>
                <p>Motor 3: 5 HP (FLC = 7.6A)</p>
                <p>Feeder ampacity = (34 x 1.25) + 14 + 7.6 = 42.5 + 14 + 7.6 = <strong>64.1A</strong></p>
                <p>From Table 310.16 (75 degrees C copper): #6 AWG = 65A</p>
                <p>Result: <strong>#6 AWG copper minimum for this feeder</strong></p>
              </div>
            </div>

            <h2>Motor Overload Protection (430.32)</h2>
            <p>
              Overload protection is the layer of protection closest to the motor. Its purpose is to protect the motor, the motor control apparatus, and the branch circuit conductors from excessive heating due to motor overloads and failure to start. Overload relays are typically built into the motor starter and are sized based on the motor&apos;s <strong>nameplate FLA</strong> — not the table FLC.
            </p>
            <p>
              This is the one exception to the &quot;use FLC from the table&quot; rule. The reasoning is that overloads must be matched to the specific motor&apos;s actual current draw, which the nameplate FLA reflects.
            </p>

            <h3>Overload Sizing Rules (430.32(A)(1))</h3>
            <div className="bg-white/5 rounded-xl p-6 my-6 overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="py-2 text-white">Motor Type</th>
                    <th className="py-2 text-white">Maximum Overload Setting</th>
                  </tr>
                </thead>
                <tbody className="text-white/70">
                  <tr className="border-b border-white/5">
                    <td className="py-2">Service factor 1.15 or greater</td>
                    <td className="py-2"><strong>125%</strong> of nameplate FLA</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-2">Temperature rise not over 40 degrees C</td>
                    <td className="py-2"><strong>125%</strong> of nameplate FLA</td>
                  </tr>
                  <tr>
                    <td className="py-2">All other motors</td>
                    <td className="py-2"><strong>115%</strong> of nameplate FLA</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p>
              If the value calculated does not correspond to a standard overload heater or overload relay setting, the next higher standard size may be used per 430.32(A)(1). However, if the motor then fails to start or trips repeatedly, 430.32(C) permits increasing the overload protection up to the following maximums:
            </p>
            <ul>
              <li>Motors with SF &ge; 1.15 or temp rise &le; 40 degrees C: maximum <strong>140%</strong> of FLA</li>
              <li>All other motors: maximum <strong>130%</strong> of FLA</li>
            </ul>

            <div className="bg-white/5 rounded-xl p-6 my-6">
              <h4 className="text-white font-semibold mb-3">Overload Sizing Example</h4>
              <div className="space-y-2 text-white/70">
                <p>Motor nameplate: 25 HP, 460V, 3-phase, FLA = 32.0A, SF = 1.15</p>
                <p>Maximum overload = 32.0A x 1.25 = <strong>40.0A</strong></p>
                <p>Select overload heater or relay setting at or below 40.0A</p>
                <p>If motor won&apos;t start: may increase up to 32.0A x 1.40 = <strong>44.8A maximum</strong></p>
              </div>
            </div>

            {/* Mid-Article CTA */}
            <div className="not-prose my-12 bg-gradient-to-r from-purple-900/40 to-cyan-900/40 rounded-xl p-6 border border-purple-500/20">
              <div className="flex flex-col sm:flex-row items-center gap-4">
                <div className="flex-1 text-center sm:text-left">
                  <p className="font-display font-bold text-lg text-white mb-1">Ampora — The Electrician&apos;s AI Companion</p>
                  <p className="text-white/60 text-sm">Instant NEC code answers, electrical calculators, and AI troubleshooting. Free on iOS.</p>
                </div>
                <a
                  href="https://apps.apple.com/us/app/ampora/id6753693522"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-white text-black font-semibold rounded-full hover:bg-white/90 transition-colors text-sm whitespace-nowrap"
                >
                  <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/></svg>
                  Download Free
                </a>
              </div>
            </div>

            <h2>Branch Circuit Short-Circuit and Ground-Fault Protection (430.52)</h2>
            <p>
              The SCPD — typically a fuse or circuit breaker — is sized to permit the motor&apos;s high starting inrush current to flow without tripping the device, while still providing protection against short circuits and ground faults. Because this device must be oversized relative to normal conductor protection rules, the NEC provides specific maximum percentages of the motor FLC for each type of protective device.
            </p>

            <h3>Maximum SCPD Sizing (Table 430.52)</h3>
            <div className="bg-white/5 rounded-xl p-6 my-6 overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="py-2 text-white">Type of Motor</th>
                    <th className="py-2 text-white">Non-Time-Delay Fuse</th>
                    <th className="py-2 text-white">Dual-Element (Time-Delay) Fuse</th>
                    <th className="py-2 text-white">Instantaneous Trip Breaker</th>
                    <th className="py-2 text-white">Inverse-Time Breaker</th>
                  </tr>
                </thead>
                <tbody className="text-white/70">
                  <tr className="border-b border-white/5">
                    <td className="py-2">AC Squirrel Cage (other than Design B energy efficient)</td>
                    <td className="py-2 text-yellow-400 font-bold">300%</td>
                    <td className="py-2 text-green-400 font-bold">175%</td>
                    <td className="py-2 text-cyan-400 font-bold">800%</td>
                    <td className="py-2 text-purple-400 font-bold">250%</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-2">AC Squirrel Cage (Design B energy efficient)</td>
                    <td className="py-2 text-yellow-400 font-bold">300%</td>
                    <td className="py-2 text-green-400 font-bold">175%</td>
                    <td className="py-2 text-cyan-400 font-bold">1100%</td>
                    <td className="py-2 text-purple-400 font-bold">250%</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-2">Wound Rotor</td>
                    <td className="py-2 text-yellow-400 font-bold">150%</td>
                    <td className="py-2 text-green-400 font-bold">150%</td>
                    <td className="py-2 text-cyan-400 font-bold">800%</td>
                    <td className="py-2 text-purple-400 font-bold">150%</td>
                  </tr>
                  <tr>
                    <td className="py-2">DC (constant voltage)</td>
                    <td className="py-2 text-yellow-400 font-bold">150%</td>
                    <td className="py-2 text-green-400 font-bold">150%</td>
                    <td className="py-2 text-cyan-400 font-bold">250%</td>
                    <td className="py-2 text-purple-400 font-bold">150%</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p>
              If the calculated SCPD value does not correspond to a standard device rating, the NEC permits rounding up to the <strong>next standard size</strong>. For example, if you calculate a 175% fuse as 24.5A, you can use a 25A or 30A standard fuse. However, if the motor still won&apos;t start with the standard size, 430.52(C)(1) allows certain exceptions to increase the SCPD further:
            </p>
            <ul>
              <li>Non-time-delay fuses: may be increased to a maximum of <strong>400%</strong></li>
              <li>Time-delay fuses: may be increased to a maximum of <strong>225%</strong></li>
              <li>Inverse-time breakers: may be increased to a maximum of <strong>400%</strong></li>
            </ul>

            <h3>SCPD Sizing Examples</h3>
            <div className="bg-white/5 rounded-xl p-6 my-6">
              <h4 className="text-white font-semibold mb-3">Example 1: 10 HP, 460V, 3-Phase Motor with Time-Delay Fuses</h4>
              <div className="space-y-2 text-white/70">
                <p>FLC from Table 430.250 = <strong>14A</strong></p>
                <p>Maximum time-delay fuse = 14A x 1.75 = <strong>24.5A</strong></p>
                <p>24.5A is not a standard fuse size, so round up to <strong>25A</strong> or next standard <strong>30A</strong></p>
                <p>Result: <strong>25A or 30A dual-element time-delay fuse</strong></p>
              </div>
            </div>
            <div className="bg-white/5 rounded-xl p-6 my-6">
              <h4 className="text-white font-semibold mb-3">Example 2: 25 HP, 460V, 3-Phase Motor with Inverse-Time Breaker</h4>
              <div className="space-y-2 text-white/70">
                <p>FLC from Table 430.250 = <strong>34A</strong></p>
                <p>Maximum inverse-time breaker = 34A x 2.50 = <strong>85A</strong></p>
                <p>85A is not a standard breaker size, so round up to <strong>90A</strong></p>
                <p>Result: <strong>90A inverse-time circuit breaker</strong></p>
              </div>
            </div>
            <div className="bg-white/5 rounded-xl p-6 my-6">
              <h4 className="text-white font-semibold mb-3">Example 3: 50 HP, 460V, 3-Phase Motor with Non-Time-Delay Fuses</h4>
              <div className="space-y-2 text-white/70">
                <p>FLC from Table 430.250 = <strong>65A</strong></p>
                <p>Maximum non-time-delay fuse = 65A x 3.00 = <strong>195A</strong></p>
                <p>195A is not a standard fuse size, so round up to <strong>200A</strong></p>
                <p>Result: <strong>200A non-time-delay fuse</strong></p>
              </div>
            </div>

            <h2>Disconnect Requirements (430.102 - 430.113)</h2>
            <p>
              NEC Article 430, Part IX covers the disconnecting means for motors and controllers. The disconnect serves a critical safety function — it allows the motor to be fully de-energized for maintenance and repair work. The Code requires two separate disconnects: one for the controller and one for the motor itself.
            </p>

            <h3>Controller Disconnect (430.102(A))</h3>
            <p>
              A disconnecting means must be located <strong>within sight</strong> of the controller. &quot;Within sight&quot; is defined by the NEC as visible and not more than 50 feet (15 m) from the equipment. This disconnect is used to de-energize the controller for servicing.
            </p>

            <h3>Motor Disconnect (430.102(B))</h3>
            <p>
              A disconnecting means must also be located <strong>within sight of the motor</strong> and the driven machinery. The exception is that the disconnect may be out of sight if it is capable of being individually locked in the open position per 430.102(B)(2). The lock must remain in place with or without the lock installed, and the provision for locking must remain with the switch or breaker.
            </p>

            <h3>Disconnect Rating Requirements</h3>
            <div className="bg-white/5 rounded-xl p-6 my-6 overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="py-2 text-white">Motor Size</th>
                    <th className="py-2 text-white">Disconnect Type Allowed</th>
                    <th className="py-2 text-white">Minimum Rating</th>
                  </tr>
                </thead>
                <tbody className="text-white/70">
                  <tr className="border-b border-white/5">
                    <td className="py-2">1/8 HP to 2 HP, 300V or less (stationary)</td>
                    <td className="py-2">General-use switch (ampere rated &ge; 2x motor FLC)</td>
                    <td className="py-2">200% of FLC</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-2">Over 2 HP, 300V or less</td>
                    <td className="py-2">Motor-circuit switch, circuit breaker, or molded-case switch</td>
                    <td className="py-2">115% of FLC</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-2">Over 2 HP, over 300V</td>
                    <td className="py-2">Motor-circuit switch, circuit breaker, or molded-case switch</td>
                    <td className="py-2">115% of FLC</td>
                  </tr>
                  <tr>
                    <td className="py-2">Over 100 HP</td>
                    <td className="py-2">Motor-circuit switch, circuit breaker, molded-case switch, or listed manual motor controller additionally marked &quot;Suitable as Motor Disconnect&quot;</td>
                    <td className="py-2">115% of FLC</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3>Key Disconnect Rules</h3>
            <ul>
              <li>The disconnect must clearly indicate whether it is in the open (OFF) or closed (ON) position (430.104)</li>
              <li>The disconnect must disconnect the motor and the controller from all ungrounded supply conductors (430.103)</li>
              <li>No pole of the disconnect can operate independently — all poles must open simultaneously (430.103)</li>
              <li>A single disconnect may serve as both the controller disconnect and the motor disconnect if it meets the requirements for both (430.102)</li>
              <li>For group installations, a single disconnect may serve multiple motors under the conditions in 430.112</li>
            </ul>

            <h2>Controller Requirements (430.81 - 430.90)</h2>
            <p>
              NEC Article 430, Part VII covers motor controllers. A controller is any device used to start and stop a motor, including switches, contactors, motor starters, and variable frequency drives (VFDs). Understanding the controller requirements ensures that the device selected can handle the motor&apos;s starting current and running load.
            </p>

            <h3>Controller Sizing (430.83)</h3>
            <p>
              The controller must have a horsepower rating not less than the horsepower rating of the motor it controls. For motors rated over 600V, the controller must be designed for the voltage and current of the motor.
            </p>
            <ul>
              <li><strong>Stationary motors, 2 HP or less, 300V or less:</strong> A general-use AC snap switch rated for AC may serve as the controller if it is rated not less than 2x the FLC of the motor</li>
              <li><strong>Stationary motors, over 2 HP:</strong> Must use a controller with an HP rating equal to or greater than the motor HP</li>
              <li><strong>Portable motors, 1/3 HP or less:</strong> The attachment plug and receptacle may serve as the controller</li>
            </ul>

            <h3>Controller Types</h3>
            <div className="grid md:grid-cols-2 gap-6 my-6">
              <div className="bg-white/5 rounded-xl p-6">
                <h4 className="text-white font-semibold mb-3">Manual Starters</h4>
                <ul className="text-white/70 text-sm space-y-1">
                  <li>Direct on-line starting (full voltage)</li>
                  <li>Operator must manually start and stop</li>
                  <li>Suitable for small motors (typically &le; 10 HP)</li>
                  <li>Includes built-in overload protection</li>
                  <li>Less expensive than magnetic starters</li>
                </ul>
              </div>
              <div className="bg-white/5 rounded-xl p-6">
                <h4 className="text-white font-semibold mb-3">Magnetic Starters</h4>
                <ul className="text-white/70 text-sm space-y-1">
                  <li>Electromagnetic contactor with overload relay</li>
                  <li>Remote start/stop control capability</li>
                  <li>Low-voltage protection (drops out on power loss)</li>
                  <li>Suitable for all motor sizes</li>
                  <li>Available in NEMA sizes 00 through 9</li>
                </ul>
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-6 my-6">
              <div className="bg-white/5 rounded-xl p-6">
                <h4 className="text-white font-semibold mb-3">Reduced Voltage Starters</h4>
                <ul className="text-white/70 text-sm space-y-1">
                  <li>Wye-delta, autotransformer, or solid-state</li>
                  <li>Reduces starting current (typically 30-60% of FLC)</li>
                  <li>Reduces mechanical stress on driven equipment</li>
                  <li>Required when utility limits inrush current</li>
                  <li>More complex and expensive than full-voltage</li>
                </ul>
              </div>
              <div className="bg-white/5 rounded-xl p-6">
                <h4 className="text-white font-semibold mb-3">Variable Frequency Drives (VFDs)</h4>
                <ul className="text-white/70 text-sm space-y-1">
                  <li>Controls motor speed by varying frequency</li>
                  <li>Provides soft-start capability</li>
                  <li>Significant energy savings at partial loads</li>
                  <li>Often includes built-in overload protection</li>
                  <li>Must comply with 430.120-430.128 (Part X)</li>
                </ul>
              </div>
            </div>

            <h2>NEMA Starter Sizes</h2>
            <p>
              Magnetic motor starters are categorized by NEMA sizes, which correspond to the maximum horsepower they can control at specific voltages. Selecting the correct NEMA size ensures the contactor can handle the motor&apos;s starting and running currents.
            </p>
            <div className="bg-white/5 rounded-xl p-6 my-6 overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="py-2 text-white">NEMA Size</th>
                    <th className="py-2 text-white">Max HP @ 230V 3-Phase</th>
                    <th className="py-2 text-white">Max HP @ 460V 3-Phase</th>
                    <th className="py-2 text-white">Max FLC (Amps)</th>
                  </tr>
                </thead>
                <tbody className="text-white/70">
                  <tr className="border-b border-white/5">
                    <td className="py-2">00</td>
                    <td className="py-2">1.5 HP</td>
                    <td className="py-2">2 HP</td>
                    <td className="py-2">9A</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-2">0</td>
                    <td className="py-2">3 HP</td>
                    <td className="py-2">5 HP</td>
                    <td className="py-2">18A</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-2">1</td>
                    <td className="py-2">7.5 HP</td>
                    <td className="py-2">10 HP</td>
                    <td className="py-2">27A</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-2">2</td>
                    <td className="py-2">15 HP</td>
                    <td className="py-2">25 HP</td>
                    <td className="py-2">45A</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-2">3</td>
                    <td className="py-2">30 HP</td>
                    <td className="py-2">50 HP</td>
                    <td className="py-2">90A</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-2">4</td>
                    <td className="py-2">50 HP</td>
                    <td className="py-2">100 HP</td>
                    <td className="py-2">135A</td>
                  </tr>
                  <tr>
                    <td className="py-2">5</td>
                    <td className="py-2">100 HP</td>
                    <td className="py-2">200 HP</td>
                    <td className="py-2">270A</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2>Complete Motor Circuit Design Example</h2>
            <p>
              Let&apos;s walk through a full motor circuit design from start to finish. This is the process you should follow for every motor installation.
            </p>
            <div className="bg-gradient-to-r from-green-900/30 to-blue-900/30 rounded-xl p-6 my-6">
              <h4 className="text-white font-semibold mb-4">Design: 30 HP, 460V, 3-Phase Squirrel Cage Motor</h4>
              <p className="text-white/60 mb-4">Nameplate FLA = 38A, Service Factor = 1.15, using inverse-time circuit breaker and THHN copper conductors in conduit</p>
              <div className="space-y-4 text-white/80">
                <div>
                  <p className="font-semibold text-white">Step 1: Determine FLC from Table 430.250</p>
                  <p>30 HP, 460V, 3-phase: FLC = <strong>40A</strong></p>
                </div>
                <div>
                  <p className="font-semibold text-white">Step 2: Size Branch Circuit Conductors (430.22)</p>
                  <p>40A x 1.25 = 50A minimum ampacity</p>
                  <p>Table 310.16 (75 degrees C copper): #6 AWG = 65A</p>
                  <p>Result: <strong>#6 AWG THHN copper</strong></p>
                </div>
                <div>
                  <p className="font-semibold text-white">Step 3: Size SCPD — Inverse-Time Breaker (430.52)</p>
                  <p>40A x 2.50 = 100A</p>
                  <p>100A is a standard breaker size</p>
                  <p>Result: <strong>100A inverse-time circuit breaker</strong></p>
                </div>
                <div>
                  <p className="font-semibold text-white">Step 4: Size Overload Protection (430.32)</p>
                  <p>Nameplate FLA = 38A, SF = 1.15 (so use 125%)</p>
                  <p>38A x 1.25 = 47.5A</p>
                  <p>Result: <strong>Overload relay set at or below 47.5A</strong></p>
                </div>
                <div>
                  <p className="font-semibold text-white">Step 5: Size Disconnect (430.110)</p>
                  <p>40A x 1.15 = 46A minimum</p>
                  <p>Next standard size motor-circuit switch: 60A</p>
                  <p>Result: <strong>60A motor-circuit switch or disconnect</strong></p>
                </div>
                <div>
                  <p className="font-semibold text-white">Step 6: Select Controller (430.83)</p>
                  <p>Controller must be rated for at least 30 HP at 460V</p>
                  <p>NEMA Size 2 = 25 HP max at 460V (too small)</p>
                  <p>NEMA Size 3 = 50 HP max at 460V</p>
                  <p>Result: <strong>NEMA Size 3 magnetic starter</strong></p>
                </div>
              </div>
            </div>

            <h2>Special Considerations</h2>

            <h3>Hermetic Refrigerant Motor-Compressors (440)</h3>
            <p>
              Motors used in air conditioning and refrigeration equipment are covered by NEC Article 440, not Article 430. Article 440 references back to Article 430 for many requirements but has important differences, particularly in how the rated-load current (RLA) and branch circuit selection current (BCSC) are used instead of FLC.
            </p>

            <h3>Motor on Individual Branch Circuit</h3>
            <p>
              Per 430.53, several motors may be connected to a single branch circuit under specific conditions, including that each motor is rated not more than 1 HP, that the full-load current of each motor does not exceed 6 amperes, and that the branch circuit protection does not exceed 20 amperes. In practice, most motor installations use individual branch circuits to simplify protection coordination.
            </p>

            <h3>Adjustable Speed Drive Systems (430.120 - 430.128)</h3>
            <p>
              VFDs and other adjustable speed drive systems have additional requirements covered in Part X of Article 430. Key requirements include:
            </p>
            <ul>
              <li>Branch circuit conductors to the drive must be sized based on the drive&apos;s rated input current</li>
              <li>The SCPD must be sized per the drive manufacturer&apos;s instructions</li>
              <li>If the drive provides listed overload protection, separate overload relays are not required</li>
              <li>Bypass circuits (if present) must have their own properly sized overload protection</li>
            </ul>

            <h2>Common Mistakes and Code Violations</h2>
            <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-6 my-6">
              <h4 className="text-red-400 font-semibold mb-3">Avoid These Errors:</h4>
              <ul className="text-white/70 space-y-3">
                <li>
                  <strong>Using nameplate FLA for conductor and SCPD sizing:</strong> This is wrong. Always use the NEC table FLC values for conductors, SCPD, and disconnect sizing. Nameplate FLA is only used for overload protection.
                </li>
                <li>
                  <strong>Relying on the SCPD for overload protection:</strong> The circuit breaker or fuse is intentionally oversized for motor starting. It will NOT protect the motor from overloads. Separate overload protection (thermal relays, electronic relays, or inherent protection) is required.
                </li>
                <li>
                  <strong>Sizing conductors at 100% of FLC:</strong> Motor branch circuit conductors must be sized at a minimum of 125% of FLC per 430.22. Sizing at 100% is a code violation.
                </li>
                <li>
                  <strong>Using a non-motor-rated disconnect for motors over 2 HP:</strong> A general-use switch cannot be used as a disconnect for motors rated over 2 HP at 300V or less. You must use a motor-circuit switch, circuit breaker, or molded-case switch.
                </li>
                <li>
                  <strong>Disconnect not within sight or not lockable:</strong> The motor disconnect must be within sight of the motor (visible and within 50 feet) OR must be individually capable of being locked in the open position.
                </li>
                <li>
                  <strong>Forgetting to size feeder conductors with the 125% rule for the largest motor:</strong> When multiple motors share a feeder, the feeder ampacity must include 125% of the largest motor&apos;s FLC, not just 100%.
                </li>
                <li>
                  <strong>Exceeding SCPD maximums after rounding up:</strong> While you can round up to the next standard size, you cannot exceed the maximum percentages allowed by 430.52(C)(1) without a permitted exception.
                </li>
              </ul>
            </div>

            <h2>Quick Reference Summary</h2>
            <div className="bg-gradient-to-r from-purple-900/30 to-cyan-900/30 rounded-xl p-6 my-6">
              <div className="space-y-3 text-white/80">
                <p><strong>1. FLC:</strong> Use NEC Tables 430.247-250 (not nameplate FLA)</p>
                <p><strong>2. Conductors:</strong> 125% of FLC minimum (430.22)</p>
                <p><strong>3. SCPD:</strong> Per Table 430.52 percentages, round up to next standard size</p>
                <p><strong>4. Overloads:</strong> 125% of nameplate FLA (SF &ge; 1.15) or 115% (all others) per 430.32</p>
                <p><strong>5. Disconnect:</strong> 115% of FLC, motor-rated for motors over 2 HP (430.110)</p>
                <p><strong>6. Controller:</strong> HP-rated equal to or greater than the motor (430.83)</p>
                <p><strong>7. Feeder:</strong> 125% of largest FLC + sum of all other FLCs (430.24)</p>
              </div>
            </div>

            <h2>Use Ampora for Motor Circuit Calculations</h2>
            <p>
              Motor circuit design involves looking up FLC values, calculating percentages, matching to standard device sizes, and verifying code compliance across multiple NEC sections. The Ampora app gives electricians instant access to motor FLC tables, automatic conductor sizing, SCPD calculations, and overload relay sizing — all with NEC code references built in. Stop flipping through the codebook and get accurate motor circuit answers in seconds.
            </p>
          </div>

            {/* CTA Section */}
            <section className="bg-gradient-to-r from-purple-900/30 to-cyan-900/30 rounded-2xl p-8 md:p-12 my-12 border border-purple-500/20">
              <div className="text-center">
                <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-1.5 rounded-full mb-4">
                  <span className="text-sm text-white/80">&#9733; Free on the App Store</span>
                </div>
                <h2 className="text-2xl md:text-3xl font-display font-bold mb-4">
                  Your Electrical Reference, Powered by AI
                </h2>
                <p className="text-white/70 mb-8 max-w-2xl mx-auto">
                  Join thousands of electricians using Ampora for instant NEC code answers, electrical calculations, and AI-powered troubleshooting — right from your phone.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <a
                    href="https://apps.apple.com/us/app/ampora/id6753693522"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-black font-semibold rounded-full hover:bg-white/90 transition-colors"
                  >
                    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/></svg>
                    Download on App Store
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

          {/* Related Posts */}
          <div className="mt-12 pt-8 border-t border-white/10">
            <h3 className="text-xl font-display font-bold mb-6">Related Articles</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <Link href="/blog/motor-circuit-protection-sizing" className="group bg-white/5 hover:bg-white/10 rounded-xl p-6 transition-all">
                <h4 className="font-semibold group-hover:text-purple-400 transition-colors">Motor Circuit Protection & Sizing Guide</h4>
                <p className="text-white/60 text-sm mt-2">Quick reference for motor protection sizing per NEC Article 430.</p>
              </Link>
              <Link href="/blog/nec-article-240-overcurrent-protection" className="group bg-white/5 hover:bg-white/10 rounded-xl p-6 transition-all">
                <h4 className="font-semibold group-hover:text-purple-400 transition-colors">NEC Article 240: Overcurrent Protection</h4>
                <p className="text-white/60 text-sm mt-2">Complete guide to overcurrent protection requirements for all circuits.</p>
              </Link>
            </div>
          </div>
        </article>
      </div>
    </main>
  );
}
