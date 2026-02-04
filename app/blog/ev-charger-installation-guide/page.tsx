import { Metadata } from "next";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import { BlogPostingJsonLd, BreadcrumbJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "EV Charger Installation Guide: NEC Requirements for Electricians",
  description: "Complete guide to electric vehicle charger installation. Learn NEC 625 requirements, Level 1 vs Level 2 charging, circuit sizing, and EVSE installation best practices.",
  keywords: [
    "EV charger installation",
    "NEC 625",
    "electric vehicle charging",
    "EVSE installation",
    "Level 2 charger",
    "EV charging circuit",
    "charger sizing",
    "Tesla charger installation",
    "home EV charging",
    "electric car charger"
  ],
  openGraph: {
    title: "EV Charger Installation Guide",
    description: "Complete guide to EV charger installation per NEC 625.",
    type: "article",
    publishedTime: "2025-02-03",
  },
};

function HeroIllustration() {
  return (
    <svg viewBox="0 0 400 180" className="w-full h-44 md:h-52" aria-label="Electric vehicle charging station illustration">
      {/* EV silhouette */}
      <g transform="translate(180, 60)">
        <ellipse cx="100" cy="95" rx="90" ry="20" fill="#1f2937"/>
        <path d="M 20 70 Q 30 30, 80 20 L 160 20 Q 180 35, 180 70 L 180 80 L 20 80 Z" fill="#374151" stroke="#4b5563" strokeWidth="2"/>
        <rect x="45" y="35" width="40" height="25" rx="3" fill="#1e3a5f" stroke="#3b82f6"/>
        <rect x="110" y="35" width="50" height="25" rx="3" fill="#1e3a5f" stroke="#3b82f6"/>
        {/* Wheels */}
        <circle cx="50" cy="80" r="15" fill="#1f2937" stroke="#6b7280" strokeWidth="3"/>
        <circle cx="150" cy="80" r="15" fill="#1f2937" stroke="#6b7280" strokeWidth="3"/>
        {/* Charge port */}
        <rect x="155" y="50" width="12" height="12" rx="2" fill="#22c55e"/>
      </g>

      {/* Charging station */}
      <g transform="translate(30, 30)">
        <rect x="0" y="0" width="60" height="110" rx="6" fill="#1f2937" stroke="#22c55e" strokeWidth="2"/>
        <rect x="10" y="15" width="40" height="25" rx="3" fill="#111827"/>
        <text x="30" y="32" textAnchor="middle" fill="#22c55e" fontSize="10">48A</text>
        <circle cx="30" cy="60" r="12" fill="#22c55e" fillOpacity="0.3" stroke="#22c55e" strokeWidth="2"/>
        <path d="M 27 55 L 30 60 L 27 65 M 33 55 L 30 60 L 33 65" stroke="#22c55e" strokeWidth="2" fill="none"/>
        {/* Cable */}
        <path d="M 60 80 Q 100 90, 140 70" stroke="#22c55e" strokeWidth="4" fill="none" strokeLinecap="round"/>
        <rect x="15" y="90" width="30" height="12" rx="2" fill="#374151"/>
        <text x="30" y="100" textAnchor="middle" fill="#9ca3af" fontSize="6">EVSE</text>
      </g>

      {/* Lightning bolt */}
      <g transform="translate(95, 55)">
        <path d="M 15 0 L 8 18 L 14 18 L 5 35 L 20 15 L 13 15 L 22 0 Z" fill="#fbbf24" stroke="#f59e0b"/>
      </g>

      {/* Labels */}
      <text x="60" y="165" textAnchor="middle" fill="#22c55e" fontSize="10" fontWeight="bold">Level 2</text>
      <text x="60" y="177" textAnchor="middle" fill="#9ca3af" fontSize="8">240V / 48A</text>
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
            { name: "EV Charger Installation", url: "https://amporalabs.com/blog/ev-charger-installation-guide" },
          ]}
        />
        <BlogPostingJsonLd
          headline="EV Charger Installation Guide: NEC Requirements for Electricians"
          description="Complete guide to EV charger installation per NEC 625."
          datePublished="2025-02-03"
          url="https://amporalabs.com/blog/ev-charger-installation-guide"
        />

        <article className="max-w-4xl mx-auto px-6 py-12">
          <nav className="text-sm text-white/60 mb-8">
            <Link href="/" className="hover:text-white">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/blog" className="hover:text-white">Blog</Link>
            <span className="mx-2">/</span>
            <span className="text-white">EV Charger Installation</span>
          </nav>

          <header className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <span className="px-3 py-1 bg-green-600/30 text-green-300 text-sm font-medium rounded-full">
                Installation
              </span>
              <span className="text-white/40 text-sm">February 3, 2025</span>
              <span className="text-white/40 text-sm">• 12 min read</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">
              EV Charger Installation Guide: NEC Requirements for Electricians
            </h1>
            <p className="text-xl text-white/70">
              EV charging is one of the fastest-growing areas for electrical work. Master the NEC requirements for EVSE installations.
            </p>
          </header>

          <div className="mb-12 bg-gradient-to-br from-green-900/20 to-cyan-900/20 rounded-2xl p-6 border border-white/10">
            <HeroIllustration />
          </div>

          <div className="prose prose-invert prose-lg max-w-none">
            <h2>Charging Levels Explained</h2>
            <div className="grid md:grid-cols-3 gap-4 my-6">
              <div className="bg-white/5 rounded-xl p-4">
                <h4 className="text-white font-semibold">Level 1</h4>
                <p className="text-3xl font-bold text-amber-400">120V</p>
                <ul className="text-white/60 text-sm mt-2 space-y-1">
                  <li>• 12-16A typical</li>
                  <li>• 3-5 miles/hour</li>
                  <li>• Standard outlet</li>
                </ul>
              </div>
              <div className="bg-green-500/10 border border-green-500/30 rounded-xl p-4">
                <h4 className="text-white font-semibold">Level 2</h4>
                <p className="text-3xl font-bold text-green-400">240V</p>
                <ul className="text-white/60 text-sm mt-2 space-y-1">
                  <li>• 16-80A typical</li>
                  <li>• 12-80 miles/hour</li>
                  <li>• Most common install</li>
                </ul>
              </div>
              <div className="bg-white/5 rounded-xl p-4">
                <h4 className="text-white font-semibold">DC Fast</h4>
                <p className="text-3xl font-bold text-blue-400">480V+</p>
                <ul className="text-white/60 text-sm mt-2 space-y-1">
                  <li>• 50-350 kW</li>
                  <li>• 100+ miles/hour</li>
                  <li>• Commercial</li>
                </ul>
              </div>
            </div>

            <h2>NEC Article 625 Requirements</h2>

            <h3>Continuous Load (625.41)</h3>
            <p>
              EV charging is considered a <strong>continuous load</strong>. Size conductors and overcurrent
              protection at 125% of the maximum load:
            </p>
            <div className="bg-gradient-to-r from-green-900/30 to-cyan-900/30 rounded-xl p-6 my-6">
              <p className="text-white font-mono">48A charger × 1.25 = 60A circuit breaker</p>
              <p className="text-white font-mono">60A × 1.25 = 75A conductor (use #6 AWG copper)</p>
            </div>

            <h3>Branch Circuit Sizing</h3>
            <div className="bg-white/5 rounded-xl p-6 my-6">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="py-2 text-white">EVSE Rating</th>
                    <th className="py-2 text-white">Breaker Size</th>
                    <th className="py-2 text-white">Wire Size (Cu)</th>
                  </tr>
                </thead>
                <tbody className="text-white/70">
                  <tr className="border-b border-white/5">
                    <td className="py-2">16A</td>
                    <td className="py-2">20A</td>
                    <td className="py-2">#12 AWG</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-2">32A</td>
                    <td className="py-2">40A</td>
                    <td className="py-2">#8 AWG</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-2">40A</td>
                    <td className="py-2">50A</td>
                    <td className="py-2">#6 AWG</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-2">48A</td>
                    <td className="py-2">60A</td>
                    <td className="py-2">#6 AWG</td>
                  </tr>
                  <tr>
                    <td className="py-2">80A</td>
                    <td className="py-2">100A</td>
                    <td className="py-2">#3 AWG</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3>Disconnect Requirements (625.43)</h3>
            <ul>
              <li>Disconnect required for each EVSE</li>
              <li>Must be lockable in open position</li>
              <li>Located within sight of EVSE (or use lockable breaker)</li>
            </ul>

            <h3>Ventilation (625.52)</h3>
            <p>
              Indoor installations may require ventilation for some vehicle types. Check vehicle
              manufacturer requirements and local codes.
            </p>

            <h2>Installation Checklist</h2>
            <div className="bg-white/5 rounded-xl p-6 my-6">
              <ul className="text-white/80 space-y-2">
                <li>☐ Verify panel capacity for new load</li>
                <li>☐ Size conductors for continuous load (125%)</li>
                <li>☐ Install appropriate breaker size</li>
                <li>☐ Ensure GFCI protection if required by EVSE</li>
                <li>☐ Mount EVSE per manufacturer instructions</li>
                <li>☐ Verify proper grounding</li>
                <li>☐ Test GFCI function if applicable</li>
                <li>☐ Provide disconnect if required</li>
              </ul>
            </div>

            <h2>Panel Capacity Considerations</h2>
            <p>
              Many older homes may need panel upgrades to accommodate EV charging. A 48A EVSE adds
              approximately 11.5 kW to the home's load. Options include:
            </p>
            <ul>
              <li><strong>Panel upgrade:</strong> Increase service size</li>
              <li><strong>Load management:</strong> Smart breakers that share capacity</li>
              <li><strong>Lower amperage EVSE:</strong> 24A or 32A units require smaller circuits</li>
            </ul>
          </div>

          <div className="mt-12 bg-gradient-to-r from-green-900/30 to-cyan-900/30 rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-display font-bold mb-4">
              Size EV Circuits Correctly
            </h3>
            <p className="text-white/70 mb-6">
              Download Ampora for wire sizing, load calculations, and NEC reference.
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
