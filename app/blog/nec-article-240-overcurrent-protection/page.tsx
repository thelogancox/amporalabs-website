import { Metadata } from "next";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import { BlogPostingJsonLd, BreadcrumbJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "NEC Article 240 Explained: Complete Guide to Overcurrent Protection",
  description: "Master NEC Article 240 overcurrent protection requirements. Learn about fuses, circuit breakers, conductor protection, tap rules, and proper sizing for residential and commercial installations.",
  keywords: [
    "NEC Article 240",
    "overcurrent protection",
    "circuit breaker sizing",
    "fuse sizing",
    "conductor protection",
    "tap rules NEC",
    "overcurrent device",
    "electrical protection",
    "breaker amperage",
    "NEC overcurrent requirements"
  ],
  openGraph: {
    title: "NEC Article 240: Overcurrent Protection Guide",
    description: "Complete guide to NEC Article 240 overcurrent protection requirements for electricians.",
    type: "article",
    publishedTime: "2025-02-03",
  },
};

// SVG Illustrations
function HeroIllustration() {
  return (
    <svg viewBox="0 0 400 200" className="w-full h-48 md:h-64" aria-label="Overcurrent protection illustration showing circuit breaker and fuse">
      <defs>
        <linearGradient id="panelGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#374151" />
          <stop offset="100%" stopColor="#1f2937" />
        </linearGradient>
        <linearGradient id="breakerGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#4b5563" />
          <stop offset="100%" stopColor="#374151" />
        </linearGradient>
      </defs>
      {/* Panel background */}
      <rect x="50" y="20" width="120" height="160" rx="4" fill="url(#panelGrad)" stroke="#6b7280" strokeWidth="2"/>
      {/* Breakers */}
      {[0, 1, 2, 3, 4, 5].map((i) => (
        <g key={i}>
          <rect x="65" y={35 + i * 22} width="40" height="18" rx="2" fill="url(#breakerGrad)" stroke="#9ca3af" strokeWidth="1"/>
          <rect x="115" y={35 + i * 22} width="40" height="18" rx="2" fill="url(#breakerGrad)" stroke="#9ca3af" strokeWidth="1"/>
          <circle cx="85" cy={44 + i * 22} r="3" fill={i === 2 ? "#ef4444" : "#22c55e"}/>
          <circle cx="135" cy={44 + i * 22} r="3" fill="#22c55e"/>
        </g>
      ))}
      {/* Main breaker */}
      <rect x="70" y="158" width="80" height="18" rx="2" fill="#1e3a5f" stroke="#3b82f6" strokeWidth="1"/>
      <text x="110" y="170" textAnchor="middle" fill="#93c5fd" fontSize="8" fontWeight="bold">MAIN 200A</text>

      {/* Fuse illustration */}
      <g transform="translate(230, 60)">
        <ellipse cx="60" cy="40" rx="50" ry="25" fill="#292524" stroke="#78716c" strokeWidth="2"/>
        <rect x="20" y="35" width="80" height="10" fill="#d4d4d8" rx="2"/>
        <circle cx="25" cy="40" r="8" fill="#a8a29e" stroke="#78716c" strokeWidth="2"/>
        <circle cx="95" cy="40" r="8" fill="#a8a29e" stroke="#78716c" strokeWidth="2"/>
        <line x1="35" y1="40" x2="85" y2="40" stroke="#71717a" strokeWidth="2"/>
        <text x="60" y="90" textAnchor="middle" fill="#a1a1aa" fontSize="10">Cartridge Fuse</text>
      </g>

      {/* Lightning bolt (overcurrent symbol) */}
      <g transform="translate(320, 20)">
        <path d="M30 0 L15 35 L25 35 L10 70 L45 30 L32 30 L50 0 Z" fill="#fbbf24" stroke="#f59e0b" strokeWidth="2"/>
      </g>

      {/* Labels */}
      <text x="110" y="12" textAnchor="middle" fill="#9ca3af" fontSize="11" fontWeight="bold">Panel</text>
    </svg>
  );
}

function BreakerSizingDiagram() {
  return (
    <svg viewBox="0 0 400 150" className="w-full h-40" aria-label="Circuit breaker sizing diagram">
      <defs>
        <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
          <polygon points="0 0, 10 3.5, 0 7" fill="#8b5cf6"/>
        </marker>
      </defs>
      {/* Wire */}
      <line x1="30" y1="75" x2="370" y2="75" stroke="#f59e0b" strokeWidth="6" strokeLinecap="round"/>

      {/* Breaker */}
      <rect x="100" y="55" width="40" height="40" rx="4" fill="#374151" stroke="#6b7280" strokeWidth="2"/>
      <text x="120" y="80" textAnchor="middle" fill="#fff" fontSize="12" fontWeight="bold">20A</text>

      {/* Load */}
      <rect x="280" y="55" width="60" height="40" rx="4" fill="#1e3a5f" stroke="#3b82f6" strokeWidth="2"/>
      <text x="310" y="78" textAnchor="middle" fill="#93c5fd" fontSize="10">LOAD</text>
      <text x="310" y="90" textAnchor="middle" fill="#93c5fd" fontSize="8">16A max</text>

      {/* Arrows and labels */}
      <line x1="120" y1="40" x2="120" y2="20" stroke="#8b5cf6" strokeWidth="2" markerEnd="url(#arrowhead)"/>
      <text x="120" y="12" textAnchor="middle" fill="#a78bfa" fontSize="9">OCPD Rating</text>

      <text x="65" y="60" textAnchor="middle" fill="#fbbf24" fontSize="9">#12 AWG</text>
      <text x="65" y="72" textAnchor="middle" fill="#a1a1aa" fontSize="8">25A capacity</text>

      <text x="200" y="120" textAnchor="middle" fill="#9ca3af" fontSize="10">Breaker ≤ Wire Ampacity</text>
      <text x="200" y="135" textAnchor="middle" fill="#6b7280" fontSize="9">20A ≤ 25A ✓</text>
    </svg>
  );
}

function TapRuleDiagram() {
  return (
    <svg viewBox="0 0 400 180" className="w-full h-48" aria-label="10-foot tap rule diagram">
      {/* Main feeder */}
      <line x1="50" y1="30" x2="350" y2="30" stroke="#f59e0b" strokeWidth="8" strokeLinecap="round"/>
      <text x="200" y="20" textAnchor="middle" fill="#fbbf24" fontSize="10">Main Feeder - 100A</text>

      {/* Tap point */}
      <circle cx="150" cy="30" r="6" fill="#8b5cf6"/>

      {/* Tap conductor */}
      <line x1="150" y1="36" x2="150" y2="130" stroke="#22d3ee" strokeWidth="4" strokeLinecap="round"/>

      {/* 10ft measurement */}
      <line x1="165" y1="40" x2="165" y2="125" stroke="#6b7280" strokeWidth="1" strokeDasharray="4"/>
      <text x="180" y="85" fill="#9ca3af" fontSize="9">≤ 10 ft</text>

      {/* OCPD at end */}
      <rect x="130" y="130" width="40" height="30" rx="4" fill="#374151" stroke="#22d3ee" strokeWidth="2"/>
      <text x="150" y="150" textAnchor="middle" fill="#22d3ee" fontSize="10">30A</text>

      {/* Requirements box */}
      <rect x="220" y="60" width="160" height="80" rx="4" fill="#1f2937" stroke="#374151" strokeWidth="1"/>
      <text x="300" y="80" textAnchor="middle" fill="#fff" fontSize="10" fontWeight="bold">10-Foot Tap Rule</text>
      <text x="230" y="98" fill="#9ca3af" fontSize="8">• Length ≤ 10 feet</text>
      <text x="230" y="112" fill="#9ca3af" fontSize="8">• Ampacity ≥ combined loads</text>
      <text x="230" y="126" fill="#9ca3af" fontSize="8">• Ends at single OCPD</text>
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
            { name: "NEC Article 240 Guide", url: "https://amporalabs.com/blog/nec-article-240-overcurrent-protection" },
          ]}
        />
        <BlogPostingJsonLd
          headline="NEC Article 240 Explained: Complete Guide to Overcurrent Protection"
          description="Master NEC Article 240 overcurrent protection requirements including fuses, circuit breakers, and tap rules."
          datePublished="2025-02-03"
          url="https://amporalabs.com/blog/nec-article-240-overcurrent-protection"
        />

        <article className="max-w-4xl mx-auto px-6 py-12">
          {/* Breadcrumb */}
          <nav className="text-sm text-white/60 mb-8">
            <Link href="/" className="hover:text-white">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/blog" className="hover:text-white">Blog</Link>
            <span className="mx-2">/</span>
            <span className="text-white">NEC Article 240</span>
          </nav>

          {/* Hero */}
          <header className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <span className="px-3 py-1 bg-purple-600/30 text-purple-300 text-sm font-medium rounded-full">
                NEC Code
              </span>
              <span className="text-white/40 text-sm">February 3, 2025</span>
              <span className="text-white/40 text-sm">• 15 min read</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">
              NEC Article 240 Explained: Complete Guide to Overcurrent Protection
            </h1>
            <p className="text-xl text-white/70">
              Master the requirements for fuses, circuit breakers, conductor protection, and tap rules. Essential knowledge for every electrician.
            </p>
          </header>

          {/* Hero Illustration */}
          <div className="mb-12 bg-gradient-to-br from-purple-900/20 to-cyan-900/20 rounded-2xl p-6 border border-white/10">
            <HeroIllustration />
          </div>

          {/* Content */}
          <div className="prose prose-invert prose-lg max-w-none">
            <h2>What is Overcurrent Protection?</h2>
            <p>
              Overcurrent protection is the backbone of electrical safety. NEC Article 240 covers the requirements
              for overcurrent protective devices (OCPDs) including <strong>fuses</strong> and <strong>circuit breakers</strong>.
              These devices protect conductors and equipment from damage caused by overcurrent conditions—whether
              from overloads or short circuits.
            </p>
            <p>
              Without proper overcurrent protection, conductors can overheat, insulation can fail, and fires can
              result. Understanding Article 240 is essential for sizing breakers correctly and ensuring safe installations.
            </p>

            <h2>Standard Ampere Ratings (240.6)</h2>
            <p>
              The NEC specifies standard ampere ratings for fuses and fixed-trip circuit breakers. You must use
              these standard sizes:
            </p>
            <div className="bg-white/5 rounded-xl p-6 my-6">
              <p className="text-white/80 font-mono text-sm leading-relaxed">
                <strong>15, 20, 25, 30, 35, 40, 45, 50, 60, 70, 80, 90, 100, 110, 125, 150, 175, 200, 225, 250, 300, 350, 400, 450, 500, 600, 700, 800, 1000, 1200, 1600, 2000, 2500, 3000, 4000, 5000, 6000</strong>
              </p>
            </div>
            <p>
              For circuits 800A and below, if the conductor ampacity doesn't match a standard rating, you may
              use the next higher standard rating—but only if certain conditions are met per 240.4(B).
            </p>

            <h2>Conductor Protection (240.4)</h2>
            <p>
              The fundamental rule: <strong>Conductors must be protected at their ampacity</strong>. The OCPD
              rating cannot exceed the conductor's ampacity as determined by NEC Table 310.16.
            </p>

            <div className="my-8">
              <BreakerSizingDiagram />
            </div>

            <h3>Small Conductor Rules (240.4(D))</h3>
            <p>For small conductors, specific maximum OCPD ratings apply:</p>
            <div className="bg-white/5 rounded-xl p-6 my-6">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="py-2 text-white">Conductor Size</th>
                    <th className="py-2 text-white">Maximum OCPD</th>
                  </tr>
                </thead>
                <tbody className="text-white/70">
                  <tr className="border-b border-white/5">
                    <td className="py-2">#14 AWG Copper</td>
                    <td className="py-2">15 Amperes</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-2">#12 AWG Copper</td>
                    <td className="py-2">20 Amperes</td>
                  </tr>
                  <tr>
                    <td className="py-2">#10 AWG Copper</td>
                    <td className="py-2">30 Amperes</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2>Tap Rules (240.21)</h2>
            <p>
              Tap conductors are an exception to the general rule that OCPDs must be at the point where
              conductors receive their supply. The NEC allows taps under specific conditions.
            </p>

            <h3>10-Foot Tap Rule (240.21(B)(1))</h3>
            <p>The most commonly used tap rule allows conductors up to 10 feet without overcurrent protection at the tap point:</p>

            <div className="my-8">
              <TapRuleDiagram />
            </div>

            <div className="bg-white/5 rounded-xl p-6 my-6">
              <h4 className="text-white font-semibold mb-3">10-Foot Tap Requirements:</h4>
              <ul className="text-white/70 space-y-2">
                <li>Tap length ≤ 10 feet</li>
                <li>Tap ampacity ≥ 10% of feeder OCPD rating</li>
                <li>Tap ampacity ≥ combined calculated loads</li>
                <li>Tap does not extend beyond the equipment it supplies</li>
                <li>Tap is enclosed in raceway (except at point of termination)</li>
                <li>Tap terminates in a single OCPD that limits current to tap ampacity</li>
              </ul>
            </div>

            <h3>25-Foot Tap Rule (240.21(B)(2))</h3>
            <p>For longer taps in installations with higher voltage or larger feeders:</p>
            <ul>
              <li>Tap length ≤ 25 feet</li>
              <li>Tap ampacity ≥ 1/3 of feeder OCPD rating</li>
              <li>Tap terminates in a single OCPD</li>
              <li>Tap is protected from physical damage</li>
            </ul>

            <h2>Circuit Breaker vs. Fuse</h2>
            <p>Both serve the same purpose but operate differently:</p>

            <div className="grid md:grid-cols-2 gap-6 my-6">
              <div className="bg-white/5 rounded-xl p-6">
                <h4 className="text-white font-semibold mb-3">Circuit Breakers</h4>
                <ul className="text-white/70 text-sm space-y-1">
                  <li>• Resettable after tripping</li>
                  <li>• Higher initial cost</li>
                  <li>• Easier to operate</li>
                  <li>• May wear over time</li>
                  <li>• Standard in most panels</li>
                </ul>
              </div>
              <div className="bg-white/5 rounded-xl p-6">
                <h4 className="text-white font-semibold mb-3">Fuses</h4>
                <ul className="text-white/70 text-sm space-y-1">
                  <li>• Must be replaced after operation</li>
                  <li>• Lower initial cost</li>
                  <li>• Faster response to faults</li>
                  <li>• No mechanical wear</li>
                  <li>• Common in industrial settings</li>
                </ul>
              </div>
            </div>

            <h2>Ground-Fault Protection of Equipment (240.13)</h2>
            <p>
              For solidly grounded wye electrical services of more than 150 volts to ground but not exceeding
              1000 volts phase-to-phase, with each disconnect rated 1000 amperes or more, ground-fault
              protection of equipment (GFPE) is required.
            </p>
            <p>
              This is different from GFCI protection—GFPE protects equipment from ground faults, while GFCI
              protects people from shock hazards.
            </p>

            <h2>Common Mistakes to Avoid</h2>
            <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-6 my-6">
              <h4 className="text-red-400 font-semibold mb-3">Watch Out For:</h4>
              <ul className="text-white/70 space-y-2">
                <li><strong>Oversizing breakers:</strong> Never upsize a breaker to stop nuisance tripping—find the cause instead</li>
                <li><strong>Ignoring temperature ratings:</strong> Ampacity depends on conductor temperature rating and terminal ratings</li>
                <li><strong>Improper tap applications:</strong> Verify all tap rule conditions are met</li>
                <li><strong>Mismatched breakers:</strong> Only use breakers listed for your panel</li>
              </ul>
            </div>

            <h2>Quick Reference: OCPD Sizing Steps</h2>
            <div className="bg-gradient-to-r from-purple-900/30 to-cyan-900/30 rounded-xl p-6 my-6">
              <ol className="text-white/80 space-y-3">
                <li><strong>1.</strong> Calculate the load current</li>
                <li><strong>2.</strong> Size conductors per NEC Table 310.16 (with corrections)</li>
                <li><strong>3.</strong> Select OCPD ≤ conductor ampacity</li>
                <li><strong>4.</strong> Verify OCPD rating is a standard size per 240.6</li>
                <li><strong>5.</strong> Check for any special requirements (motors, A/C, etc.)</li>
              </ol>
            </div>

            <h2>Use Ampora for Quick Calculations</h2>
            <p>
              Sizing overcurrent protection correctly requires considering multiple factors. The Ampora app
              helps electricians quickly determine proper OCPD ratings based on conductor size, load type,
              and installation conditions—all with NEC code references at your fingertips.
            </p>
          </div>

          {/* CTA */}
          <div className="mt-12 bg-gradient-to-r from-purple-900/30 to-cyan-900/30 rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-display font-bold mb-4">
              Get Overcurrent Protection Calculations Instantly
            </h3>
            <p className="text-white/70 mb-6">
              Download Ampora for wire sizing, breaker sizing, and NEC code reference on the job site.
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

          {/* Related Posts */}
          <div className="mt-12 pt-8 border-t border-white/10">
            <h3 className="text-xl font-display font-bold mb-6">Related Articles</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <Link href="/blog/wire-sizing-guide-nec-ampacity-tables" className="group bg-white/5 hover:bg-white/10 rounded-xl p-6 transition-all">
                <h4 className="font-semibold group-hover:text-purple-400 transition-colors">Wire Sizing Guide: NEC Ampacity Tables</h4>
                <p className="text-white/60 text-sm mt-2">Learn how to properly size conductors using NEC tables.</p>
              </Link>
              <Link href="/blog/nec-article-210-branch-circuits-guide" className="group bg-white/5 hover:bg-white/10 rounded-xl p-6 transition-all">
                <h4 className="font-semibold group-hover:text-purple-400 transition-colors">NEC Article 210: Branch Circuits Guide</h4>
                <p className="text-white/60 text-sm mt-2">Complete guide to branch circuit requirements.</p>
              </Link>
            </div>
          </div>
        </article>
      </div>
    </main>
  );
}
