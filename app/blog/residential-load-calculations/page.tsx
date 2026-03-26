import { Metadata } from "next";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import { BlogPostingJsonLd, BreadcrumbJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Residential Load Calculations: NEC Article 220 Complete Guide",
  description: "Master residential electrical load calculations per NEC Article 220. Learn standard and optional methods, demand factors, and how to size services for new homes.",
  keywords: [
    "residential load calculation",
    "NEC Article 220",
    "electrical load calculation",
    "service sizing",
    "demand factor",
    "dwelling unit calculation",
    "optional calculation method",
    "standard calculation method",
    "home electrical load",
    "panel sizing"
  ],
  openGraph: {
    title: "Residential Load Calculations Guide",
    description: "Complete guide to residential load calculations per NEC Article 220.",
    type: "article",
    publishedTime: "2025-02-03",
  },
};

function HeroIllustration() {
  return (
    <svg viewBox="0 0 400 180" className="w-full h-44 md:h-52" aria-label="Residential electrical panel and home illustration">
      {/* House outline */}
      <g transform="translate(200, 20)">
        <polygon points="80,0 160,50 160,120 0,120 0,50" fill="#1f2937" stroke="#4b5563" strokeWidth="2"/>
        <rect x="30" y="70" width="30" height="50" fill="#374151" stroke="#6b7280"/>
        <rect x="80" y="50" width="40" height="30" fill="#1e3a5f" stroke="#3b82f6"/>
        <rect x="100" y="50" width="2" height="30" fill="#3b82f6"/>
        <rect x="80" y="65" width="40" height="2" fill="#3b82f6"/>
      </g>

      {/* Panel */}
      <g transform="translate(20, 30)">
        <rect x="0" y="0" width="80" height="120" rx="4" fill="#1f2937" stroke="#6b7280" strokeWidth="2"/>
        <rect x="10" y="10" width="60" height="100" fill="#111827"/>
        {/* Breakers */}
        {[0, 1, 2, 3, 4].map((i) => (
          <g key={i}>
            <rect x="15" y={20 + i * 18} width="22" height="14" rx="2" fill="#374151"/>
            <rect x="43" y={20 + i * 18} width="22" height="14" rx="2" fill="#374151"/>
          </g>
        ))}
        <text x="40" y="145" textAnchor="middle" fill="#9ca3af" fontSize="8">200A Panel</text>
      </g>

      {/* Power line to house */}
      <path d="M 100 60 Q 150 40, 200 70" stroke="#ef4444" strokeWidth="3" fill="none"/>

      {/* Load calculation box */}
      <rect x="120" y="130" width="160" height="45" rx="4" fill="#8b5cf6" fillOpacity="0.2" stroke="#8b5cf6"/>
      <text x="200" y="148" textAnchor="middle" fill="#a78bfa" fontSize="10" fontWeight="bold">Total Load: 24,000 VA</text>
      <text x="200" y="163" textAnchor="middle" fill="#a78bfa" fontSize="9">Service: 100A @ 240V</text>
    </svg>
  );
}

function LoadBreakdown() {
  return (
    <svg viewBox="0 0 400 220" className="w-full h-56" aria-label="Residential load breakdown chart">
      <rect x="10" y="10" width="380" height="200" rx="8" fill="#1f2937" stroke="#374151" strokeWidth="2"/>
      <text x="200" y="32" textAnchor="middle" fill="#fff" fontSize="11" fontWeight="bold">Standard Load Calculation Breakdown</text>

      {/* Bar chart */}
      {[
        { label: "General Lighting", va: "4500", pct: 45, color: "#f59e0b" },
        { label: "Small Appliance", va: "3000", pct: 30, color: "#22c55e" },
        { label: "Laundry", va: "1500", pct: 15, color: "#3b82f6" },
        { label: "Range", va: "8000", pct: 80, color: "#ef4444" },
        { label: "Dryer", va: "5000", pct: 50, color: "#8b5cf6" },
        { label: "A/C or Heat", va: "6000", pct: 60, color: "#06b6d4" },
      ].map((item, i) => (
        <g key={i} transform={`translate(20, ${50 + i * 26})`}>
          <text x="0" y="12" fill="#9ca3af" fontSize="9">{item.label}</text>
          <rect x="95" y="2" width={item.pct * 1.8} height="14" rx="2" fill={item.color}/>
          <text x={105 + item.pct * 1.8} y="13" fill="#e5e7eb" fontSize="9">{item.va} VA</text>
        </g>
      ))}

      <line x1="95" y1="45" x2="95" y2="200" stroke="#374151" strokeWidth="1"/>
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
            { name: "Residential Load Calculations", url: "https://amporalabs.com/blog/residential-load-calculations" },
          ]}
        />
        <BlogPostingJsonLd
          headline="Residential Load Calculations: NEC Article 220 Complete Guide"
          description="Master residential electrical load calculations per NEC Article 220."
          datePublished="2025-02-03"
          url="https://amporalabs.com/blog/residential-load-calculations"
        />

        <article className="max-w-4xl mx-auto px-6 py-12">
          <nav className="text-sm text-white/60 mb-8">
            <Link href="/" className="hover:text-white">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/blog" className="hover:text-white">Blog</Link>
            <span className="mx-2">/</span>
            <span className="text-white">Residential Load Calculations</span>
          </nav>

          <header className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <span className="px-3 py-1 bg-green-600/30 text-green-300 text-sm font-medium rounded-full">
                Calculations
              </span>
              <span className="text-white/40 text-sm">February 3, 2025</span>
              <span className="text-white/40 text-sm">• 14 min read</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">
              Residential Load Calculations: NEC Article 220 Complete Guide
            </h1>
            <p className="text-xl text-white/70">
              Properly sized services prevent problems. Learn the NEC methods for calculating residential electrical loads.
            </p>
          </header>

          <div className="mb-12 bg-gradient-to-br from-green-900/20 to-blue-900/20 rounded-2xl p-6 border border-white/10">
            <HeroIllustration />
          </div>

          <div className="prose prose-invert prose-lg max-w-none">
            <h2>Two Calculation Methods</h2>
            <p>
              The NEC provides two methods for calculating dwelling unit loads:
            </p>
            <ul>
              <li><strong>Standard Method (220.40-220.55):</strong> More detailed, always acceptable</li>
              <li><strong>Optional Method (220.82):</strong> Simpler, only for single dwelling units</li>
            </ul>

            <h2>Standard Method Components</h2>
            <div className="my-8">
              <LoadBreakdown />
            </div>

            <h3>General Lighting Load (220.42)</h3>
            <div className="bg-white/5 rounded-xl p-6 my-6">
              <p className="text-white font-mono text-lg mb-2">3 VA × Square Footage</p>
              <p className="text-white/70">Example: 2,000 sq ft × 3 VA = 6,000 VA</p>
              <p className="text-white/70 mt-2">Apply demand factors from Table 220.42:</p>
              <ul className="text-white/60 text-sm mt-2">
                <li>First 3,000 VA: 100%</li>
                <li>3,001 - 120,000 VA: 35%</li>
              </ul>
            </div>

            <h3>Small Appliance Circuits (220.52)</h3>
            <p>Minimum two 20A circuits required:</p>
            <div className="bg-gradient-to-r from-green-900/30 to-blue-900/30 rounded-xl p-6 my-6">
              <p className="text-white font-mono">2 circuits × 1,500 VA = 3,000 VA</p>
            </div>

            <h3>Laundry Circuit (220.52)</h3>
            <p>One 20A circuit required:</p>
            <div className="bg-gradient-to-r from-green-900/30 to-blue-900/30 rounded-xl p-6 my-6">
              <p className="text-white font-mono">1 circuit × 1,500 VA = 1,500 VA</p>
            </div>

            <h3>Appliance Loads</h3>
            <ul>
              <li><strong>Range:</strong> Use NEC Table 220.55 demand factors</li>
              <li><strong>Dryer:</strong> 5,000 VA minimum or nameplate (whichever is larger)</li>
              <li><strong>Water heater, dishwasher, disposer:</strong> Nameplate ratings</li>
            </ul>

            <h3>HVAC Load (220.60)</h3>
            <p>
              Use the larger of heating or cooling load—they won't operate simultaneously
              (non-coincident loads).
            </p>

            <h2>Example: Standard Calculation</h2>
            <div className="bg-white/5 rounded-xl p-6 my-6">
              <h4 className="text-white font-semibold mb-4">2,500 sq ft home with:</h4>
              <table className="w-full text-left text-sm">
                <tbody className="text-white/70">
                  <tr className="border-b border-white/5">
                    <td className="py-2">General lighting (2,500 × 3 VA)</td>
                    <td className="py-2 text-right">7,500 VA</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-2">Small appliance circuits</td>
                    <td className="py-2 text-right">3,000 VA</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-2">Laundry circuit</td>
                    <td className="py-2 text-right">1,500 VA</td>
                  </tr>
                  <tr className="border-b border-white/10">
                    <td className="py-2"><strong>Subtotal</strong></td>
                    <td className="py-2 text-right"><strong>12,000 VA</strong></td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-2">First 3,000 @ 100%</td>
                    <td className="py-2 text-right">3,000 VA</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-2">Remainder @ 35%</td>
                    <td className="py-2 text-right">3,150 VA</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-2">Range (Table 220.55)</td>
                    <td className="py-2 text-right">8,000 VA</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-2">Dryer</td>
                    <td className="py-2 text-right">5,000 VA</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-2">A/C (largest motor load)</td>
                    <td className="py-2 text-right">6,000 VA</td>
                  </tr>
                  <tr className="border-t border-white/10">
                    <td className="py-2 text-green-400"><strong>Total</strong></td>
                    <td className="py-2 text-right text-green-400"><strong>25,150 VA</strong></td>
                  </tr>
                </tbody>
              </table>
              <p className="text-white/70 mt-4">Service size: 25,150 ÷ 240V = <strong>105A → 125A service</strong></p>
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
            <h2>Optional Calculation Method</h2>
            <p>
              For existing homes with a connected load of 10 kW or more, or new homes:
            </p>
            <ol>
              <li>Add all loads at nameplate ratings</li>
              <li>First 10 kW at 100%</li>
              <li>Remainder at 40%</li>
              <li>Add largest motor load at 25%</li>
            </ol>
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
        </article>
      </div>
    </main>
  );
}
