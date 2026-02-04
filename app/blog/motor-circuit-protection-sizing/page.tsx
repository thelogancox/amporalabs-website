import { Metadata } from "next";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import { BlogPostingJsonLd, BreadcrumbJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Motor Circuit Protection & Sizing: NEC Article 430 Guide",
  description: "Master motor circuit sizing and protection requirements per NEC Article 430. Learn about overload protection, short-circuit protection, conductor sizing, and motor FLA calculations.",
  keywords: [
    "motor circuit sizing",
    "NEC Article 430",
    "motor overload protection",
    "motor branch circuit",
    "motor FLA",
    "motor conductor sizing",
    "motor breaker sizing",
    "motor protection",
    "motor starter sizing",
    "motor circuit design"
  ],
  openGraph: {
    title: "Motor Circuit Protection & Sizing Guide",
    description: "Complete guide to motor circuit protection per NEC Article 430.",
    type: "article",
    publishedTime: "2025-02-03",
  },
};

function HeroIllustration() {
  return (
    <svg viewBox="0 0 400 200" className="w-full h-48 md:h-56" aria-label="Motor circuit protection diagram">
      <defs>
        <linearGradient id="motorGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#374151"/>
          <stop offset="100%" stopColor="#1f2937"/>
        </linearGradient>
      </defs>

      {/* Power source */}
      <rect x="20" y="70" width="50" height="60" rx="4" fill="#1f2937" stroke="#6b7280" strokeWidth="2"/>
      <text x="45" y="95" textAnchor="middle" fill="#9ca3af" fontSize="8">PANEL</text>
      <text x="45" y="115" textAnchor="middle" fill="#9ca3af" fontSize="8">480V</text>

      {/* Disconnect */}
      <rect x="95" y="75" width="35" height="50" rx="3" fill="#1f2937" stroke="#ef4444" strokeWidth="2"/>
      <text x="112" y="95" textAnchor="middle" fill="#ef4444" fontSize="7">DISC</text>
      <line x1="100" y1="110" x2="125" y2="90" stroke="#ef4444" strokeWidth="2"/>

      {/* Short-circuit protection */}
      <rect x="150" y="75" width="45" height="50" rx="3" fill="#1f2937" stroke="#f59e0b" strokeWidth="2"/>
      <text x="172" y="95" textAnchor="middle" fill="#f59e0b" fontSize="7">SCPD</text>
      <text x="172" y="108" textAnchor="middle" fill="#f59e0b" fontSize="6">250%</text>

      {/* Starter with overloads */}
      <rect x="215" y="65" width="55" height="70" rx="4" fill="#1f2937" stroke="#22c55e" strokeWidth="2"/>
      <text x="242" y="85" textAnchor="middle" fill="#22c55e" fontSize="7">STARTER</text>
      <rect x="225" y="95" width="35" height="25" rx="2" fill="#374151"/>
      <text x="242" y="112" textAnchor="middle" fill="#22c55e" fontSize="6">OL 115%</text>

      {/* Motor */}
      <circle cx="330" cy="100" r="40" fill="url(#motorGrad)" stroke="#8b5cf6" strokeWidth="3"/>
      <circle cx="330" cy="100" r="25" fill="#1f2937" stroke="#6b7280" strokeWidth="1"/>
      <text x="330" y="95" textAnchor="middle" fill="#a78bfa" fontSize="10">M</text>
      <text x="330" y="108" textAnchor="middle" fill="#a78bfa" fontSize="8">3φ</text>

      {/* Conductors */}
      <line x1="70" y1="100" x2="95" y2="100" stroke="#ef4444" strokeWidth="3"/>
      <line x1="130" y1="100" x2="150" y2="100" stroke="#ef4444" strokeWidth="3"/>
      <line x1="195" y1="100" x2="215" y2="100" stroke="#ef4444" strokeWidth="3"/>
      <line x1="270" y1="100" x2="290" y2="100" stroke="#ef4444" strokeWidth="3"/>

      {/* Labels */}
      <text x="112" y="145" textAnchor="middle" fill="#9ca3af" fontSize="7">Within sight</text>
      <text x="172" y="145" textAnchor="middle" fill="#9ca3af" fontSize="7">Branch circuit</text>
      <text x="242" y="155" textAnchor="middle" fill="#9ca3af" fontSize="7">Overload</text>

      {/* Conductor sizing note */}
      <text x="200" y="180" textAnchor="middle" fill="#8b5cf6" fontSize="9">Conductors: 125% of motor FLC</text>
    </svg>
  );
}

function ProtectionTable() {
  return (
    <svg viewBox="0 0 400 160" className="w-full h-40" aria-label="Motor protection device maximum sizes">
      <rect x="10" y="10" width="380" height="140" rx="8" fill="#1f2937" stroke="#374151" strokeWidth="2"/>

      <text x="200" y="32" textAnchor="middle" fill="#fff" fontSize="11" fontWeight="bold">Maximum SCPD Sizing (NEC 430.52)</text>

      {/* Headers */}
      <text x="80" y="55" textAnchor="middle" fill="#9ca3af" fontSize="9" fontWeight="bold">Device Type</text>
      <text x="200" y="55" textAnchor="middle" fill="#9ca3af" fontSize="9" fontWeight="bold">Non-Time Delay</text>
      <text x="320" y="55" textAnchor="middle" fill="#9ca3af" fontSize="9" fontWeight="bold">Time Delay/Breaker</text>

      <line x1="20" y1="62" x2="380" y2="62" stroke="#374151" strokeWidth="1"/>

      {/* Data */}
      <text x="80" y="80" textAnchor="middle" fill="#e5e7eb" fontSize="9">Standard Motor</text>
      <text x="200" y="80" textAnchor="middle" fill="#f59e0b" fontSize="10" fontWeight="bold">300%</text>
      <text x="320" y="80" textAnchor="middle" fill="#22c55e" fontSize="10" fontWeight="bold">250%</text>

      <text x="80" y="100" textAnchor="middle" fill="#e5e7eb" fontSize="9">Design E Motor</text>
      <text x="200" y="100" textAnchor="middle" fill="#f59e0b" fontSize="10" fontWeight="bold">300%</text>
      <text x="320" y="100" textAnchor="middle" fill="#22c55e" fontSize="10" fontWeight="bold">250%</text>

      <text x="80" y="120" textAnchor="middle" fill="#e5e7eb" fontSize="9">Wound Rotor</text>
      <text x="200" y="120" textAnchor="middle" fill="#f59e0b" fontSize="10" fontWeight="bold">150%</text>
      <text x="320" y="120" textAnchor="middle" fill="#22c55e" fontSize="10" fontWeight="bold">150%</text>

      <text x="200" y="145" textAnchor="middle" fill="#6b7280" fontSize="8">Round up to next standard size if calculated value is non-standard</text>
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
            { name: "Motor Circuit Protection", url: "https://amporalabs.com/blog/motor-circuit-protection-sizing" },
          ]}
        />
        <BlogPostingJsonLd
          headline="Motor Circuit Protection & Sizing: NEC Article 430 Guide"
          description="Master motor circuit sizing and protection per NEC Article 430."
          datePublished="2025-02-03"
          url="https://amporalabs.com/blog/motor-circuit-protection-sizing"
        />

        <article className="max-w-4xl mx-auto px-6 py-12">
          <nav className="text-sm text-white/60 mb-8">
            <Link href="/" className="hover:text-white">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/blog" className="hover:text-white">Blog</Link>
            <span className="mx-2">/</span>
            <span className="text-white">Motor Circuit Protection</span>
          </nav>

          <header className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <span className="px-3 py-1 bg-purple-600/30 text-purple-300 text-sm font-medium rounded-full">
                NEC Code
              </span>
              <span className="text-white/40 text-sm">February 3, 2025</span>
              <span className="text-white/40 text-sm">• 13 min read</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">
              Motor Circuit Protection & Sizing: NEC Article 430 Guide
            </h1>
            <p className="text-xl text-white/70">
              Motors require special protection because of their high inrush current. Learn the NEC requirements for proper motor circuit design.
            </p>
          </header>

          <div className="mb-12 bg-gradient-to-br from-purple-900/20 to-blue-900/20 rounded-2xl p-6 border border-white/10">
            <HeroIllustration />
          </div>

          <div className="prose prose-invert prose-lg max-w-none">
            <h2>Why Motor Circuits Are Different</h2>
            <p>
              Motors draw 6-8 times their full-load current during startup. Standard overcurrent protection
              would trip immediately. NEC Article 430 provides special rules that allow larger branch circuit
              protection while still protecting the motor from overloads and short circuits.
            </p>

            <h2>Motor Circuit Components</h2>
            <p>A properly designed motor branch circuit includes:</p>
            <ul>
              <li><strong>Branch circuit short-circuit and ground-fault protection (SCPD)</strong> — Sized larger to allow motor starting</li>
              <li><strong>Disconnect</strong> — Within sight of motor or lockable</li>
              <li><strong>Motor controller/starter</strong> — Controls motor operation</li>
              <li><strong>Overload protection</strong> — Sized close to motor FLA, protects running motor</li>
            </ul>

            <h2>Using Table 430.250 (FLC)</h2>
            <p>
              <strong>Critical:</strong> Motor calculations must use the Full-Load Current (FLC) from NEC Tables 430.247-250,
              NOT the nameplate FLA. This ensures consistent design regardless of motor efficiency variations.
            </p>

            <div className="bg-white/5 rounded-xl p-6 my-6">
              <h4 className="text-white font-semibold mb-3">Example: 10 HP, 460V, 3-Phase Motor</h4>
              <p className="text-white/70">From NEC Table 430.250: FLC = <strong>14 Amps</strong></p>
            </div>

            <h2>Conductor Sizing (430.22)</h2>
            <p>Motor branch circuit conductors must be sized at minimum <strong>125% of motor FLC</strong>:</p>
            <div className="bg-gradient-to-r from-purple-900/30 to-blue-900/30 rounded-xl p-6 my-6">
              <p className="text-white font-mono text-lg">Conductor Ampacity ≥ 1.25 × FLC</p>
              <p className="text-white/70 mt-2">Example: 14A × 1.25 = 17.5A minimum → Use #12 AWG (20A @ 75°C)</p>
            </div>

            <h2>Short-Circuit Protection Sizing (430.52)</h2>
            <p>
              The SCPD (fuses or circuit breakers) can be sized much larger than conductor ampacity to
              allow motor starting:
            </p>

            <div className="my-8">
              <ProtectionTable />
            </div>

            <div className="bg-white/5 rounded-xl p-6 my-6">
              <h4 className="text-white font-semibold mb-3">Example Calculation:</h4>
              <p className="text-white/70">10 HP motor, 460V, 3-phase (FLC = 14A)</p>
              <ul className="text-white/70 mt-2 space-y-1">
                <li>Time-delay fuse: 14A × 250% = 35A → Use 35A fuse</li>
                <li>Inverse-time breaker: 14A × 250% = 35A → Use 35A or 40A breaker</li>
              </ul>
            </div>

            <h2>Overload Protection (430.32)</h2>
            <p>
              Overload protection is sized based on the motor's <em>nameplate</em> FLA (not table FLC):
            </p>
            <ul>
              <li><strong>Motors with service factor ≥1.15:</strong> 125% of nameplate FLA</li>
              <li><strong>Motors with temp rise ≤40°C:</strong> 125% of nameplate FLA</li>
              <li><strong>All other motors:</strong> 115% of nameplate FLA</li>
            </ul>

            <h2>Disconnect Requirements (430.102)</h2>
            <p>Each motor must have a disconnecting means that:</p>
            <ul>
              <li>Is within sight of the motor and controller, OR</li>
              <li>Is capable of being locked in the open position</li>
              <li>Is rated at least 115% of motor FLC</li>
              <li>For motors over 2 HP @ 300V: must be a motor-circuit switch, circuit breaker, or molded-case switch</li>
            </ul>

            <h2>Complete Example</h2>
            <div className="bg-gradient-to-r from-green-900/30 to-blue-900/30 rounded-xl p-6 my-6">
              <h4 className="text-white font-semibold mb-3">Design a circuit for: 25 HP, 460V, 3-phase motor</h4>
              <div className="space-y-3 text-white/80">
                <p><strong>1. FLC from Table 430.250:</strong> 34 Amps</p>
                <p><strong>2. Conductor sizing:</strong> 34 × 1.25 = 42.5A → #8 AWG (50A @ 75°C)</p>
                <p><strong>3. SCPD (inverse-time breaker):</strong> 34 × 2.5 = 85A → 90A breaker</p>
                <p><strong>4. Overload (assume SF ≥1.15):</strong> Nameplate FLA × 1.25</p>
                <p><strong>5. Disconnect:</strong> 34 × 1.15 = 39.1A → 40A or larger motor-rated</p>
              </div>
            </div>

            <h2>Common Mistakes</h2>
            <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-6 my-6">
              <ul className="text-white/70 space-y-2">
                <li><strong>Using nameplate FLA for SCPD:</strong> Always use table FLC</li>
                <li><strong>Undersized conductors:</strong> Remember the 125% rule</li>
                <li><strong>Missing overloads:</strong> Breakers alone don't provide overload protection</li>
                <li><strong>Wrong disconnect rating:</strong> Must be motor-rated for larger motors</li>
              </ul>
            </div>
          </div>

          <div className="mt-12 bg-gradient-to-r from-purple-900/30 to-blue-900/30 rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-display font-bold mb-4">
              Size Motor Circuits Instantly
            </h3>
            <p className="text-white/70 mb-6">
              Download Ampora for motor FLC lookup, conductor sizing, and SCPD calculations.
            </p>
            <a
              href="https://apps.apple.com/us/app/ampora/id6753693522"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-black font-semibold rounded-full hover:bg-white/90 transition-colors"
            >
              Download Free on App Store
            </a>
          </div>
        </article>
      </div>
    </main>
  );
}
