import { Metadata } from "next";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import { BlogPostingJsonLd, BreadcrumbJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Emergency & Standby Power Systems: NEC Articles 700, 701, 702 Guide",
  description: "Understand emergency, legally required standby, and optional standby power systems. Learn NEC requirements for transfer switches, generator sizing, and circuit separation.",
  keywords: [
    "emergency power system",
    "standby power",
    "NEC Article 700",
    "NEC Article 701",
    "NEC Article 702",
    "transfer switch",
    "generator sizing",
    "backup power",
    "emergency lighting",
    "automatic transfer switch"
  ],
  openGraph: {
    title: "Emergency & Standby Power Systems Guide",
    description: "Complete guide to emergency and standby power per NEC Articles 700, 701, 702.",
    type: "article",
    publishedTime: "2025-02-03",
  },
};

function HeroIllustration() {
  return (
    <svg viewBox="0 0 400 200" className="w-full h-48 md:h-56" aria-label="Emergency power system with generator and transfer switch">
      {/* Utility power */}
      <g transform="translate(20, 40)">
        <rect x="0" y="20" width="60" height="80" rx="4" fill="#1f2937" stroke="#6b7280" strokeWidth="2"/>
        <line x1="10" y1="40" x2="50" y2="40" stroke="#fbbf24" strokeWidth="3"/>
        <line x1="10" y1="55" x2="50" y2="55" stroke="#fbbf24" strokeWidth="3"/>
        <line x1="10" y1="70" x2="50" y2="70" stroke="#fbbf24" strokeWidth="3"/>
        <text x="30" y="90" textAnchor="middle" fill="#9ca3af" fontSize="8">UTILITY</text>
      </g>

      {/* Generator */}
      <g transform="translate(20, 130)">
        <rect x="0" y="0" width="60" height="50" rx="4" fill="#1f2937" stroke="#22c55e" strokeWidth="2"/>
        <circle cx="20" cy="25" r="12" fill="#374151" stroke="#22c55e" strokeWidth="2"/>
        <rect x="35" y="10" width="18" height="30" rx="2" fill="#374151"/>
        <text x="30" y="60" textAnchor="middle" fill="#22c55e" fontSize="8">GENERATOR</text>
      </g>

      {/* Transfer switch */}
      <g transform="translate(140, 60)">
        <rect x="0" y="0" width="80" height="100" rx="6" fill="#1f2937" stroke="#8b5cf6" strokeWidth="2"/>
        <text x="40" y="20" textAnchor="middle" fill="#a78bfa" fontSize="9" fontWeight="bold">TRANSFER</text>
        <text x="40" y="32" textAnchor="middle" fill="#a78bfa" fontSize="9" fontWeight="bold">SWITCH</text>

        {/* Switch mechanism */}
        <circle cx="25" cy="55" r="8" fill="#374151" stroke="#fbbf24" strokeWidth="2"/>
        <circle cx="55" cy="55" r="8" fill="#374151" stroke="#22c55e" strokeWidth="2"/>
        <line x1="25" y1="55" x2="55" y2="55" stroke="#6b7280" strokeWidth="3"/>
        <circle cx="40" cy="55" r="5" fill="#8b5cf6"/>

        <text x="25" y="75" textAnchor="middle" fill="#fbbf24" fontSize="7">N</text>
        <text x="55" y="75" textAnchor="middle" fill="#22c55e" fontSize="7">E</text>
        <text x="40" y="95" textAnchor="middle" fill="#6b7280" fontSize="7">ATS</text>
      </g>

      {/* Load panel */}
      <g transform="translate(280, 50)">
        <rect x="0" y="0" width="70" height="120" rx="4" fill="#1f2937" stroke="#ef4444" strokeWidth="2"/>
        <rect x="10" y="15" width="50" height="90" fill="#111827"/>
        {/* Emergency circuits */}
        <rect x="15" y="20" width="18" height="12" rx="1" fill="#ef4444"/>
        <rect x="37" y="20" width="18" height="12" rx="1" fill="#ef4444"/>
        <rect x="15" y="36" width="18" height="12" rx="1" fill="#ef4444"/>
        <rect x="37" y="36" width="18" height="12" rx="1" fill="#ef4444"/>
        {/* Normal circuits */}
        <rect x="15" y="56" width="18" height="12" rx="1" fill="#374151"/>
        <rect x="37" y="56" width="18" height="12" rx="1" fill="#374151"/>
        <rect x="15" y="72" width="18" height="12" rx="1" fill="#374151"/>
        <rect x="37" y="72" width="18" height="12" rx="1" fill="#374151"/>
        <rect x="15" y="88" width="18" height="12" rx="1" fill="#374151"/>
        <rect x="37" y="88" width="18" height="12" rx="1" fill="#374151"/>
        <text x="35" y="125" textAnchor="middle" fill="#ef4444" fontSize="8">EMERGENCY</text>
        <text x="35" y="135" textAnchor="middle" fill="#ef4444" fontSize="8">PANEL</text>
      </g>

      {/* Connections */}
      <line x1="80" y1="80" x2="140" y2="95" stroke="#fbbf24" strokeWidth="2"/>
      <line x1="80" y1="155" x2="140" y2="130" stroke="#22c55e" strokeWidth="2"/>
      <line x1="220" y1="110" x2="280" y2="110" stroke="#ef4444" strokeWidth="3"/>

      {/* 10 second label */}
      <rect x="130" y="5" width="100" height="25" rx="4" fill="#ef4444" fillOpacity="0.2" stroke="#ef4444"/>
      <text x="180" y="22" textAnchor="middle" fill="#ef4444" fontSize="10" fontWeight="bold">≤10 sec transfer</text>
    </svg>
  );
}

function SystemComparison() {
  return (
    <svg viewBox="0 0 400 180" className="w-full h-44" aria-label="Comparison of emergency, legally required, and optional standby systems">
      <rect x="10" y="10" width="380" height="160" rx="8" fill="#1f2937" stroke="#374151" strokeWidth="2"/>

      <text x="200" y="32" textAnchor="middle" fill="#fff" fontSize="11" fontWeight="bold">System Types Comparison</text>

      {/* Headers */}
      <text x="80" y="55" textAnchor="middle" fill="#9ca3af" fontSize="8" fontWeight="bold">Characteristic</text>
      <text x="175" y="55" textAnchor="middle" fill="#ef4444" fontSize="8" fontWeight="bold">Emergency</text>
      <text x="265" y="55" textAnchor="middle" fill="#f59e0b" fontSize="8" fontWeight="bold">Legally Req.</text>
      <text x="350" y="55" textAnchor="middle" fill="#22c55e" fontSize="8" fontWeight="bold">Optional</text>

      <line x1="20" y1="62" x2="380" y2="62" stroke="#374151" strokeWidth="1"/>

      {/* Data rows */}
      {[
        { char: "NEC Article", em: "700", lr: "701", op: "702" },
        { char: "Transfer Time", em: "≤10 sec", lr: "≤60 sec", op: "No limit" },
        { char: "Separate Raceways", em: "Required", lr: "Required", op: "Not req." },
        { char: "Fire Rating", em: "2 hours", lr: "1 hour", op: "Not req." },
        { char: "Example", em: "Exit signs", lr: "Elevators", op: "HVAC" },
      ].map((row, i) => (
        <g key={i}>
          <text x="80" y={80 + i * 18} textAnchor="middle" fill="#e5e7eb" fontSize="8">{row.char}</text>
          <text x="175" y={80 + i * 18} textAnchor="middle" fill="#fca5a5" fontSize="8">{row.em}</text>
          <text x="265" y={80 + i * 18} textAnchor="middle" fill="#fcd34d" fontSize="8">{row.lr}</text>
          <text x="350" y={80 + i * 18} textAnchor="middle" fill="#86efac" fontSize="8">{row.op}</text>
        </g>
      ))}
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
            { name: "Emergency & Standby Power", url: "https://amporalabs.com/blog/emergency-standby-power-systems" },
          ]}
        />
        <BlogPostingJsonLd
          headline="Emergency & Standby Power Systems: NEC Articles 700, 701, 702 Guide"
          description="Understand emergency, legally required, and optional standby power systems."
          datePublished="2025-02-03"
          url="https://amporalabs.com/blog/emergency-standby-power-systems"
        />

        <article className="max-w-4xl mx-auto px-6 py-12">
          <nav className="text-sm text-white/60 mb-8">
            <Link href="/" className="hover:text-white">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/blog" className="hover:text-white">Blog</Link>
            <span className="mx-2">/</span>
            <span className="text-white">Emergency & Standby Power</span>
          </nav>

          <header className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <span className="px-3 py-1 bg-red-600/30 text-red-300 text-sm font-medium rounded-full">
                NEC Code
              </span>
              <span className="text-white/40 text-sm">February 3, 2025</span>
              <span className="text-white/40 text-sm">• 14 min read</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">
              Emergency & Standby Power: NEC Articles 700, 701, 702 Guide
            </h1>
            <p className="text-xl text-white/70">
              Critical systems need reliable backup power. Learn the differences between emergency, legally required, and optional standby systems.
            </p>
          </header>

          <div className="mb-12 bg-gradient-to-br from-red-900/20 to-green-900/20 rounded-2xl p-6 border border-white/10">
            <HeroIllustration />
          </div>

          <div className="prose prose-invert prose-lg max-w-none">
            <h2>Three Categories of Standby Power</h2>
            <p>
              The NEC divides backup power systems into three categories based on their criticality
              and the consequences of power loss:
            </p>

            <div className="my-8">
              <SystemComparison />
            </div>

            <h2>Emergency Systems (Article 700)</h2>
            <p>
              Emergency systems support loads essential for <strong>life safety</strong>. These are
              legally required by codes like NFPA 101 (Life Safety Code) and building codes.
            </p>

            <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-6 my-6">
              <h4 className="text-red-400 font-semibold mb-2">Emergency Loads Include:</h4>
              <ul className="text-white/70 space-y-1">
                <li>• Exit signs and egress lighting</li>
                <li>• Fire alarm systems</li>
                <li>• Fire pump controllers</li>
                <li>• Smoke control systems</li>
                <li>• Communication systems for emergency use</li>
              </ul>
            </div>

            <h3>Key Requirements (700.12)</h3>
            <ul>
              <li><strong>10-second transfer:</strong> Power must restore within 10 seconds</li>
              <li><strong>Separate raceways:</strong> Emergency circuits cannot share raceways with normal circuits</li>
              <li><strong>2-hour fire rating:</strong> Wiring must survive 2 hours of fire exposure</li>
              <li><strong>Dedicated equipment:</strong> Transfer switches, panels, and feeders for emergency only</li>
            </ul>

            <h2>Legally Required Standby (Article 701)</h2>
            <p>
              These systems power loads where loss isn't immediately life-threatening but could
              create hazards or impede rescue operations.
            </p>

            <div className="bg-amber-500/10 border border-amber-500/30 rounded-xl p-6 my-6">
              <h4 className="text-amber-400 font-semibold mb-2">Legally Required Loads Include:</h4>
              <ul className="text-white/70 space-y-1">
                <li>• Heating for facilities like hospitals</li>
                <li>• Elevators and escalators</li>
                <li>• Refrigeration for medical supplies</li>
                <li>• Ventilation and smoke removal</li>
                <li>• Sewage and water treatment</li>
              </ul>
            </div>

            <h3>Key Requirements (701.12)</h3>
            <ul>
              <li><strong>60-second transfer:</strong> Longer transfer time allowed</li>
              <li><strong>Separate wiring:</strong> Must be independent from normal system wiring</li>
              <li><strong>1-hour fire rating:</strong> Less stringent than emergency</li>
            </ul>

            <h2>Optional Standby (Article 702)</h2>
            <p>
              Optional standby systems protect loads where power interruption causes inconvenience
              or economic loss but doesn't affect life safety.
            </p>

            <div className="bg-green-500/10 border border-green-500/30 rounded-xl p-6 my-6">
              <h4 className="text-green-400 font-semibold mb-2">Optional Standby Loads Include:</h4>
              <ul className="text-white/70 space-y-1">
                <li>• HVAC for comfort</li>
                <li>• Data processing and computers</li>
                <li>• Industrial processes</li>
                <li>• Commercial refrigeration</li>
                <li>• Residential whole-house backup</li>
              </ul>
            </div>

            <h3>Key Requirements (702.12)</h3>
            <ul>
              <li><strong>No transfer time limit:</strong> Manual or automatic transfer acceptable</li>
              <li><strong>Wiring flexibility:</strong> Can share raceways with normal circuits</li>
              <li><strong>Capacity sizing:</strong> Based on owner's needs, not code mandates</li>
            </ul>

            <h2>Transfer Switch Requirements</h2>
            <p>
              All systems require a transfer switch to prevent backfeed to the utility.
            </p>

            <div className="grid md:grid-cols-2 gap-4 my-6">
              <div className="bg-white/5 rounded-xl p-4">
                <h4 className="text-white font-semibold">Automatic Transfer Switch (ATS)</h4>
                <ul className="text-white/60 text-sm mt-2 space-y-1">
                  <li>• Senses utility loss automatically</li>
                  <li>• Starts generator and transfers</li>
                  <li>• Required for emergency systems</li>
                  <li>• Returns to normal when utility restored</li>
                </ul>
              </div>
              <div className="bg-white/5 rounded-xl p-4">
                <h4 className="text-white font-semibold">Manual Transfer Switch (MTS)</h4>
                <ul className="text-white/60 text-sm mt-2 space-y-1">
                  <li>• Operator switches manually</li>
                  <li>• Lower cost than ATS</li>
                  <li>• Acceptable for optional standby</li>
                  <li>• Must prevent parallel operation</li>
                </ul>
              </div>
            </div>

            <h2>Generator Sizing</h2>
            <p>
              Size the generator to handle all connected loads plus starting current for the
              largest motor:
            </p>

            <div className="bg-gradient-to-r from-purple-900/30 to-blue-900/30 rounded-xl p-6 my-6">
              <p className="text-white font-mono mb-2">Generator kW = Total Running Load + Largest Motor Starting kW</p>
              <p className="text-white/70 text-sm">Account for power factor: kVA = kW / 0.8 (typical)</p>
            </div>

            <h3>Load Shedding</h3>
            <p>
              For optional standby with limited generator capacity, load shedding can prioritize
              critical loads when demand exceeds generator capacity.
            </p>

            <h2>Testing Requirements</h2>
            <div className="bg-white/5 rounded-xl p-6 my-6">
              <h4 className="text-white font-semibold mb-3">NFPA 110 Testing Schedule:</h4>
              <ul className="text-white/70 space-y-2">
                <li><strong>Weekly:</strong> 30-minute test run under load</li>
                <li><strong>Monthly:</strong> Full load transfer test</li>
                <li><strong>Annually:</strong> 4-hour full-load test</li>
                <li>Maintain written records of all tests</li>
              </ul>
            </div>

            <h2>Common Installation Issues</h2>
            <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-6 my-6">
              <ul className="text-white/70 space-y-2">
                <li><strong>Mixed circuits:</strong> Emergency and normal wiring in same raceway</li>
                <li><strong>Wrong transfer time:</strong> Using 60-sec ATS for emergency (needs 10-sec)</li>
                <li><strong>Undersized generator:</strong> Not accounting for motor starting current</li>
                <li><strong>Missing identification:</strong> Emergency circuits must be marked</li>
              </ul>
            </div>
          </div>

          <div className="mt-12 bg-gradient-to-r from-red-900/30 to-green-900/30 rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-display font-bold mb-4">
              Size Standby Systems Correctly
            </h3>
            <p className="text-white/70 mb-6">
              Download Ampora for generator sizing, load calculations, and NEC reference.
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
