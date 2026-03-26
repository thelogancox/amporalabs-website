import { Metadata } from "next";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import { BlogPostingJsonLd, BreadcrumbJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Transformer Sizing Guide: kVA Calculations & NEC Requirements",
  description: "Learn how to properly size transformers for electrical installations. Covers kVA calculations, primary/secondary sizing, overcurrent protection, and NEC Article 450 requirements.",
  keywords: [
    "transformer sizing",
    "kVA calculation",
    "NEC Article 450",
    "transformer protection",
    "primary protection",
    "secondary protection",
    "transformer overcurrent",
    "step-down transformer",
    "dry-type transformer",
    "transformer installation"
  ],
  openGraph: {
    title: "Transformer Sizing Guide",
    description: "Complete guide to transformer sizing and NEC Article 450 requirements.",
    type: "article",
    publishedTime: "2025-02-03",
  },
};

function HeroIllustration() {
  return (
    <svg viewBox="0 0 400 200" className="w-full h-48 md:h-56" aria-label="Transformer diagram with primary and secondary windings">
      <defs>
        <linearGradient id="coreGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#374151"/>
          <stop offset="100%" stopColor="#1f2937"/>
        </linearGradient>
      </defs>

      {/* Transformer core */}
      <rect x="140" y="40" width="120" height="120" rx="4" fill="url(#coreGrad)" stroke="#6b7280" strokeWidth="3"/>
      <rect x="160" y="60" width="80" height="80" rx="2" fill="#111827"/>

      {/* Primary winding (left) */}
      <g transform="translate(100, 50)">
        {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => (
          <ellipse key={i} cx="40" cy={10 + i * 12} rx="20" ry="6" fill="none" stroke="#ef4444" strokeWidth="3"/>
        ))}
        <line x1="20" y1="10" x2="20" y2="-10" stroke="#ef4444" strokeWidth="3"/>
        <line x1="60" y1="94" x2="60" y2="114" stroke="#ef4444" strokeWidth="3"/>
        <text x="40" y="130" textAnchor="middle" fill="#ef4444" fontSize="10" fontWeight="bold">PRIMARY</text>
        <text x="40" y="145" textAnchor="middle" fill="#9ca3af" fontSize="9">480V</text>
      </g>

      {/* Secondary winding (right) */}
      <g transform="translate(260, 50)">
        {[0, 1, 2, 3, 4].map((i) => (
          <ellipse key={i} cx="0" cy={20 + i * 16} rx="20" ry="6" fill="none" stroke="#22c55e" strokeWidth="3"/>
        ))}
        <line x1="-20" y1="20" x2="-20" y2="0" stroke="#22c55e" strokeWidth="3"/>
        <line x1="20" y1="84" x2="20" y2="104" stroke="#22c55e" strokeWidth="3"/>
        <text x="0" y="130" textAnchor="middle" fill="#22c55e" fontSize="10" fontWeight="bold">SECONDARY</text>
        <text x="0" y="145" textAnchor="middle" fill="#9ca3af" fontSize="9">208V</text>
      </g>

      {/* kVA rating */}
      <rect x="165" y="85" width="70" height="30" rx="4" fill="#8b5cf6" fillOpacity="0.3" stroke="#8b5cf6"/>
      <text x="200" y="105" textAnchor="middle" fill="#a78bfa" fontSize="12" fontWeight="bold">75 kVA</text>

      {/* Input/Output arrows */}
      <path d="M 50 100 L 80 100" stroke="#ef4444" strokeWidth="2" markerEnd="url(#arrowRed)"/>
      <path d="M 320 100 L 350 100" stroke="#22c55e" strokeWidth="2" markerEnd="url(#arrowGreen)"/>

      <defs>
        <marker id="arrowRed" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
          <path d="M0,0 L0,6 L9,3 z" fill="#ef4444"/>
        </marker>
        <marker id="arrowGreen" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
          <path d="M0,0 L0,6 L9,3 z" fill="#22c55e"/>
        </marker>
      </defs>
    </svg>
  );
}

function ProtectionDiagram() {
  return (
    <svg viewBox="0 0 400 140" className="w-full h-36" aria-label="Transformer overcurrent protection diagram">
      <rect x="10" y="10" width="380" height="120" rx="8" fill="#1f2937" stroke="#374151" strokeWidth="2"/>

      {/* Primary side */}
      <rect x="40" y="40" width="60" height="60" rx="4" fill="#ef4444" fillOpacity="0.2" stroke="#ef4444" strokeWidth="2"/>
      <text x="70" y="65" textAnchor="middle" fill="#ef4444" fontSize="9" fontWeight="bold">PRIMARY</text>
      <text x="70" y="78" textAnchor="middle" fill="#ef4444" fontSize="8">OCPD</text>
      <text x="70" y="90" textAnchor="middle" fill="#fca5a5" fontSize="10">125%</text>

      {/* Transformer symbol */}
      <circle cx="160" cy="70" r="20" fill="#374151" stroke="#8b5cf6" strokeWidth="2"/>
      <circle cx="200" cy="70" r="20" fill="#374151" stroke="#8b5cf6" strokeWidth="2"/>
      <text x="180" y="75" textAnchor="middle" fill="#a78bfa" fontSize="12" fontWeight="bold">T</text>

      {/* Secondary side */}
      <rect x="260" y="40" width="60" height="60" rx="4" fill="#22c55e" fillOpacity="0.2" stroke="#22c55e" strokeWidth="2"/>
      <text x="290" y="65" textAnchor="middle" fill="#22c55e" fontSize="9" fontWeight="bold">SECONDARY</text>
      <text x="290" y="78" textAnchor="middle" fill="#22c55e" fontSize="8">OCPD</text>
      <text x="290" y="90" textAnchor="middle" fill="#86efac" fontSize="10">125%</text>

      {/* Connections */}
      <line x1="100" y1="70" x2="140" y2="70" stroke="#6b7280" strokeWidth="2"/>
      <line x1="220" y1="70" x2="260" y2="70" stroke="#6b7280" strokeWidth="2"/>

      {/* Labels */}
      <text x="340" y="75" textAnchor="middle" fill="#9ca3af" fontSize="8">≤1000V</text>
      <text x="200" y="115" textAnchor="middle" fill="#6b7280" fontSize="9">NEC 450.3(B) - Dry-Type Transformers</text>
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
            { name: "Transformer Sizing Guide", url: "https://amporalabs.com/blog/transformer-sizing-guide" },
          ]}
        />
        <BlogPostingJsonLd
          headline="Transformer Sizing Guide: kVA Calculations & NEC Requirements"
          description="Learn how to properly size transformers for electrical installations."
          datePublished="2025-02-03"
          url="https://amporalabs.com/blog/transformer-sizing-guide"
        />

        <article className="max-w-4xl mx-auto px-6 py-12">
          <nav className="text-sm text-white/60 mb-8">
            <Link href="/" className="hover:text-white">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/blog" className="hover:text-white">Blog</Link>
            <span className="mx-2">/</span>
            <span className="text-white">Transformer Sizing</span>
          </nav>

          <header className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <span className="px-3 py-1 bg-purple-600/30 text-purple-300 text-sm font-medium rounded-full">
                NEC Code
              </span>
              <span className="text-white/40 text-sm">February 3, 2025</span>
              <span className="text-white/40 text-sm">• 11 min read</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">
              Transformer Sizing Guide: kVA Calculations & NEC Requirements
            </h1>
            <p className="text-xl text-white/70">
              Proper transformer sizing ensures reliable power distribution. Learn kVA calculations and NEC Article 450 protection requirements.
            </p>
          </header>

          <div className="mb-12 bg-gradient-to-br from-purple-900/20 to-red-900/20 rounded-2xl p-6 border border-white/10">
            <HeroIllustration />
          </div>

          <div className="prose prose-invert prose-lg max-w-none">
            <h2>Understanding kVA Ratings</h2>
            <p>
              Transformers are rated in kilovolt-amperes (kVA), representing their apparent power capacity.
              Unlike resistive loads measured in kW, kVA accounts for both real and reactive power.
            </p>

            <div className="bg-gradient-to-r from-purple-900/30 to-blue-900/30 rounded-xl p-6 my-6">
              <p className="text-white font-mono text-lg mb-2">kVA = (Volts × Amps) / 1000</p>
              <p className="text-white/70">Single-phase: kVA = (V × I) / 1000</p>
              <p className="text-white/70">Three-phase: kVA = (V × I × 1.732) / 1000</p>
            </div>

            <h2>Sizing Steps</h2>
            <ol>
              <li><strong>Calculate total connected load</strong> — Sum all loads on the secondary</li>
              <li><strong>Apply demand factors</strong> — Not all loads operate simultaneously</li>
              <li><strong>Add growth allowance</strong> — Typically 20-25% for future expansion</li>
              <li><strong>Select standard size</strong> — Choose next larger standard kVA rating</li>
            </ol>

            <h3>Standard Transformer Sizes</h3>
            <div className="bg-white/5 rounded-xl p-6 my-6">
              <p className="text-white/70 mb-3">Common dry-type transformer ratings (kVA):</p>
              <div className="grid grid-cols-5 gap-2 text-center">
                {[3, 6, 9, 15, 30, 45, 75, 112.5, 150, 225, 300, 500, 750, 1000, 1500].map((kva) => (
                  <span key={kva} className="bg-white/10 rounded px-2 py-1 text-sm">{kva}</span>
                ))}
              </div>
            </div>

            <h2>Primary & Secondary Current</h2>
            <p>
              Once you know the kVA rating, calculate the full-load currents for conductor and protection sizing:
            </p>

            <div className="bg-white/5 rounded-xl p-6 my-6">
              <h4 className="text-white font-semibold mb-3">Single-Phase</h4>
              <p className="text-white font-mono">I = kVA × 1000 / V</p>
              <h4 className="text-white font-semibold mt-4 mb-3">Three-Phase</h4>
              <p className="text-white font-mono">I = kVA × 1000 / (V × 1.732)</p>
            </div>

            <div className="bg-gradient-to-r from-green-900/30 to-blue-900/30 rounded-xl p-6 my-6">
              <h4 className="text-white font-semibold mb-3">Example: 75 kVA, 480V to 208V, 3-Phase</h4>
              <p className="text-white/80">Primary current: 75,000 / (480 × 1.732) = <strong>90.2A</strong></p>
              <p className="text-white/80">Secondary current: 75,000 / (208 × 1.732) = <strong>208.2A</strong></p>
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
            <h2>Overcurrent Protection (NEC 450.3)</h2>
            <p>
              NEC Article 450 provides specific requirements for transformer overcurrent protection.
              Rules differ based on voltage and transformer type.
            </p>

            <div className="my-8">
              <ProtectionDiagram />
            </div>

            <h3>Transformers 1000V or Less (450.3(B))</h3>
            <div className="bg-white/5 rounded-xl p-6 my-6">
              <table className="w-full text-left text-sm">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="py-2 text-white">Protection Method</th>
                    <th className="py-2 text-white">Primary Only</th>
                    <th className="py-2 text-white">Primary + Secondary</th>
                  </tr>
                </thead>
                <tbody className="text-white/70">
                  <tr className="border-b border-white/5">
                    <td className="py-2">Primary OCPD (9A or more)</td>
                    <td className="py-2">125%</td>
                    <td className="py-2">250%</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-2">Primary OCPD (less than 9A)</td>
                    <td className="py-2">167%</td>
                    <td className="py-2">300%</td>
                  </tr>
                  <tr>
                    <td className="py-2">Secondary OCPD</td>
                    <td className="py-2">—</td>
                    <td className="py-2">125%</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2>Conductor Sizing</h2>
            <p>
              Size conductors based on the full-load current at each voltage level:
            </p>
            <ul>
              <li><strong>Primary conductors:</strong> Sized for primary full-load current</li>
              <li><strong>Secondary conductors:</strong> Sized for secondary full-load current</li>
              <li><strong>Apply ampacity correction factors</strong> for temperature and conduit fill</li>
            </ul>

            <h2>Example Installation</h2>
            <div className="bg-gradient-to-r from-purple-900/30 to-green-900/30 rounded-xl p-6 my-6">
              <h4 className="text-white font-semibold mb-3">Size a transformer for 150A of 208V, 3-phase load</h4>
              <div className="space-y-3 text-white/80">
                <p><strong>1. Calculate required kVA:</strong></p>
                <p className="font-mono ml-4">kVA = (208 × 150 × 1.732) / 1000 = 54 kVA</p>
                <p><strong>2. Add 25% growth:</strong> 54 × 1.25 = 67.5 kVA</p>
                <p><strong>3. Select standard size:</strong> 75 kVA transformer</p>
                <p><strong>4. Primary current (480V):</strong> 90.2A</p>
                <p><strong>5. Primary OCPD (125%):</strong> 90.2 × 1.25 = 112.75A → 110A breaker</p>
                <p><strong>6. Primary conductors:</strong> #2 AWG copper (115A @ 75°C)</p>
              </div>
            </div>

            <h2>Installation Considerations</h2>
            <ul>
              <li><strong>Ventilation:</strong> Dry-type transformers require adequate airflow</li>
              <li><strong>Clearances:</strong> Maintain manufacturer-specified clearances</li>
              <li><strong>Grounding:</strong> Secondary must be grounded per NEC 250</li>
              <li><strong>Accessibility:</strong> Ensure access for maintenance and inspection</li>
            </ul>
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
