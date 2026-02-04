import { Metadata } from "next";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import { BlogPostingJsonLd, BreadcrumbJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "GFCI vs AFCI: Requirements, Differences, and When to Use Each",
  description: "Understand the key differences between GFCI and AFCI protection. Learn NEC requirements for each type, where they're required, and how they protect against different hazards.",
  keywords: [
    "GFCI vs AFCI",
    "GFCI requirements",
    "AFCI requirements",
    "ground fault circuit interrupter",
    "arc fault circuit interrupter",
    "NEC GFCI locations",
    "NEC AFCI locations",
    "GFCI protection",
    "AFCI protection",
    "electrical safety devices"
  ],
  openGraph: {
    title: "GFCI vs AFCI: Complete Guide",
    description: "Learn the differences between GFCI and AFCI protection and NEC requirements for each.",
    type: "article",
    publishedTime: "2025-02-03",
  },
};

// SVG Illustrations
function HeroIllustration() {
  return (
    <svg viewBox="0 0 400 180" className="w-full h-44 md:h-52" aria-label="GFCI and AFCI outlet comparison">
      {/* GFCI Outlet */}
      <g transform="translate(50, 20)">
        <rect x="0" y="0" width="100" height="140" rx="8" fill="#f5f5f4" stroke="#a8a29e" strokeWidth="2"/>
        {/* Top outlet */}
        <rect x="30" y="20" width="40" height="25" rx="3" fill="#1f2937"/>
        <rect x="38" y="27" width="8" height="12" rx="1" fill="#374151"/>
        <rect x="54" y="27" width="8" height="12" rx="1" fill="#374151"/>
        <circle cx="50" cy="52" r="4" fill="#374151"/>
        {/* Buttons */}
        <rect x="25" y="60" width="22" height="16" rx="2" fill="#ef4444" stroke="#dc2626" strokeWidth="1"/>
        <text x="36" y="72" textAnchor="middle" fill="#fff" fontSize="6" fontWeight="bold">TEST</text>
        <rect x="53" y="60" width="22" height="16" rx="2" fill="#1f2937" stroke="#374151" strokeWidth="1"/>
        <text x="64" y="72" textAnchor="middle" fill="#fff" fontSize="5" fontWeight="bold">RESET</text>
        {/* Bottom outlet */}
        <rect x="30" y="90" width="40" height="25" rx="3" fill="#1f2937"/>
        <rect x="38" y="97" width="8" height="12" rx="1" fill="#374151"/>
        <rect x="54" y="97" width="8" height="12" rx="1" fill="#374151"/>
        <circle cx="50" cy="122" r="4" fill="#374151"/>
        {/* Label */}
        <text x="50" y="155" textAnchor="middle" fill="#22c55e" fontSize="12" fontWeight="bold">GFCI</text>
      </g>

      {/* AFCI Breaker */}
      <g transform="translate(220, 20)">
        <rect x="0" y="0" width="80" height="100" rx="4" fill="#1f2937" stroke="#374151" strokeWidth="2"/>
        {/* Toggle */}
        <rect x="25" y="15" width="30" height="40" rx="3" fill="#374151" stroke="#4b5563" strokeWidth="1"/>
        <rect x="30" y="20" width="20" height="15" rx="2" fill="#22c55e"/>
        <text x="40" y="30" textAnchor="middle" fill="#fff" fontSize="6" fontWeight="bold">ON</text>
        {/* Test button */}
        <circle cx="40" cy="70" r="8" fill="#3b82f6" stroke="#2563eb" strokeWidth="1"/>
        <text x="40" y="73" textAnchor="middle" fill="#fff" fontSize="6" fontWeight="bold">T</text>
        {/* Rating */}
        <text x="40" y="92" textAnchor="middle" fill="#9ca3af" fontSize="8">20A</text>
        {/* Label */}
        <rect x="10" y="105" width="60" height="20" rx="2" fill="#1e3a5f" stroke="#3b82f6" strokeWidth="1"/>
        <text x="40" y="118" textAnchor="middle" fill="#93c5fd" fontSize="8" fontWeight="bold">AFCI</text>
        <text x="40" y="155" textAnchor="middle" fill="#3b82f6" fontSize="12" fontWeight="bold">AFCI</text>
      </g>

      {/* VS text */}
      <text x="195" y="100" textAnchor="middle" fill="#6b7280" fontSize="16" fontWeight="bold">vs</text>

      {/* Protection icons */}
      <g transform="translate(340, 50)">
        <circle cx="20" cy="20" r="18" fill="#22c55e" fillOpacity="0.2" stroke="#22c55e" strokeWidth="2"/>
        <path d="M12 20 L18 26 L28 14" stroke="#22c55e" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
        <text x="20" y="55" textAnchor="middle" fill="#9ca3af" fontSize="8">Shock</text>
        <text x="20" y="65" textAnchor="middle" fill="#9ca3af" fontSize="8">Protection</text>
      </g>
      <g transform="translate(340, 100)">
        <circle cx="20" cy="20" r="18" fill="#3b82f6" fillOpacity="0.2" stroke="#3b82f6" strokeWidth="2"/>
        <path d="M20 8 L20 32 M8 20 L32 20" stroke="#3b82f6" strokeWidth="3" fill="none" strokeLinecap="round"/>
        <text x="20" y="55" textAnchor="middle" fill="#9ca3af" fontSize="8">Fire</text>
        <text x="20" y="65" textAnchor="middle" fill="#9ca3af" fontSize="8">Protection</text>
      </g>
    </svg>
  );
}

function GFCIdiagram() {
  return (
    <svg viewBox="0 0 380 160" className="w-full h-40" aria-label="GFCI operation diagram showing current imbalance detection">
      {/* Hot wire */}
      <line x1="30" y1="50" x2="350" y2="50" stroke="#ef4444" strokeWidth="4"/>
      <text x="20" y="55" textAnchor="end" fill="#ef4444" fontSize="10">Hot</text>

      {/* Neutral wire */}
      <line x1="30" y1="110" x2="350" y2="110" stroke="#9ca3af" strokeWidth="4"/>
      <text x="20" y="115" textAnchor="end" fill="#9ca3af" fontSize="10">Neutral</text>

      {/* Current transformer (donut) */}
      <ellipse cx="120" cy="80" rx="30" ry="45" fill="none" stroke="#8b5cf6" strokeWidth="3"/>
      <text x="120" y="140" textAnchor="middle" fill="#a78bfa" fontSize="9">Sensor</text>

      {/* GFCI device */}
      <rect x="180" y="40" width="60" height="80" rx="4" fill="#1f2937" stroke="#22c55e" strokeWidth="2"/>
      <text x="210" y="85" textAnchor="middle" fill="#22c55e" fontSize="10" fontWeight="bold">GFCI</text>

      {/* Load */}
      <rect x="290" y="60" width="50" height="40" rx="4" fill="#374151" stroke="#6b7280" strokeWidth="1"/>
      <text x="315" y="85" textAnchor="middle" fill="#9ca3af" fontSize="9">Load</text>

      {/* Ground fault path (dashed) */}
      <path d="M 315 100 L 315 130 L 200 130" stroke="#fbbf24" strokeWidth="2" strokeDasharray="5" fill="none"/>
      <text x="260" y="145" textAnchor="middle" fill="#fbbf24" fontSize="8">Fault current to ground</text>

      {/* Current arrows */}
      <polygon points="70,45 80,50 70,55" fill="#ef4444"/>
      <text x="75" y="38" textAnchor="middle" fill="#ef4444" fontSize="8">5A</text>
      <polygon points="80,105 70,110 80,115" fill="#9ca3af"/>
      <text x="75" y="128" textAnchor="middle" fill="#9ca3af" fontSize="8">4.995A</text>

      {/* Imbalance indicator */}
      <text x="120" y="85" textAnchor="middle" fill="#fbbf24" fontSize="7">Δ5mA</text>
    </svg>
  );
}

function AFCIdiagram() {
  return (
    <svg viewBox="0 0 380 150" className="w-full h-40" aria-label="AFCI operation diagram showing arc detection">
      {/* Wire with arc */}
      <line x1="30" y1="75" x2="140" y2="75" stroke="#f59e0b" strokeWidth="4"/>
      <line x1="180" y1="75" x2="350" y2="75" stroke="#f59e0b" strokeWidth="4"/>

      {/* Arc representation */}
      <g transform="translate(160, 55)">
        <path d="M 0 20 Q 5 10, 10 20 Q 15 30, 20 20 Q 25 10, 30 20" stroke="#ef4444" strokeWidth="2" fill="none"/>
        <path d="M 5 15 Q 10 5, 15 15 Q 20 25, 25 15" stroke="#fbbf24" strokeWidth="2" fill="none"/>
        <text x="15" y="45" textAnchor="middle" fill="#ef4444" fontSize="8" fontWeight="bold">ARC!</text>
      </g>

      {/* AFCI breaker */}
      <rect x="40" y="100" width="80" height="40" rx="4" fill="#1f2937" stroke="#3b82f6" strokeWidth="2"/>
      <text x="80" y="125" textAnchor="middle" fill="#3b82f6" fontSize="10" fontWeight="bold">AFCI Breaker</text>

      {/* Signal lines */}
      <line x1="160" y1="75" x2="120" y2="100" stroke="#8b5cf6" strokeWidth="1" strokeDasharray="3"/>
      <line x1="160" y1="75" x2="80" y2="100" stroke="#8b5cf6" strokeWidth="1" strokeDasharray="3"/>

      {/* Detection box */}
      <rect x="220" y="100" width="120" height="40" rx="4" fill="#1e3a5f" stroke="#3b82f6" strokeWidth="1"/>
      <text x="280" y="118" textAnchor="middle" fill="#93c5fd" fontSize="8">Analyzes waveform</text>
      <text x="280" y="130" textAnchor="middle" fill="#93c5fd" fontSize="8">for arc signatures</text>

      {/* Labels */}
      <text x="110" y="20" textAnchor="middle" fill="#9ca3af" fontSize="9">Damaged insulation or loose connection</text>
      <text x="110" y="32" textAnchor="middle" fill="#9ca3af" fontSize="9">creates dangerous arcing</text>
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
            { name: "GFCI vs AFCI", url: "https://amporalabs.com/blog/gfci-vs-afci-requirements" },
          ]}
        />
        <BlogPostingJsonLd
          headline="GFCI vs AFCI: Requirements, Differences, and When to Use Each"
          description="Understand GFCI and AFCI protection differences and NEC requirements."
          datePublished="2025-02-03"
          url="https://amporalabs.com/blog/gfci-vs-afci-requirements"
        />

        <article className="max-w-4xl mx-auto px-6 py-12">
          {/* Breadcrumb */}
          <nav className="text-sm text-white/60 mb-8">
            <Link href="/" className="hover:text-white">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/blog" className="hover:text-white">Blog</Link>
            <span className="mx-2">/</span>
            <span className="text-white">GFCI vs AFCI</span>
          </nav>

          {/* Hero */}
          <header className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <span className="px-3 py-1 bg-green-600/30 text-green-300 text-sm font-medium rounded-full">
                Safety
              </span>
              <span className="text-white/40 text-sm">February 3, 2025</span>
              <span className="text-white/40 text-sm">• 12 min read</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">
              GFCI vs AFCI: Requirements, Differences, and When to Use Each
            </h1>
            <p className="text-xl text-white/70">
              Both protect against electrical hazards, but in very different ways. Learn when each is required and why.
            </p>
          </header>

          {/* Hero Illustration */}
          <div className="mb-12 bg-gradient-to-br from-green-900/20 to-blue-900/20 rounded-2xl p-6 border border-white/10">
            <HeroIllustration />
          </div>

          {/* Content */}
          <div className="prose prose-invert prose-lg max-w-none">
            <h2>The Key Difference</h2>
            <p>
              <strong>GFCI (Ground Fault Circuit Interrupter)</strong> protects against <em>shock hazards</em> by
              detecting current leakage to ground. <strong>AFCI (Arc Fault Circuit Interrupter)</strong> protects
              against <em>fire hazards</em> by detecting dangerous electrical arcing.
            </p>
            <p>
              Think of it this way: GFCI saves lives from electrocution, AFCI saves homes from electrical fires.
              Both are required by the NEC, but in different locations for different reasons.
            </p>

            <h2>How GFCI Protection Works</h2>
            <p>
              A GFCI continuously monitors the current flowing through the hot and neutral conductors.
              In normal operation, current out equals current back. If there's a difference (as little as
              4-6 milliamps), it means current is leaking—possibly through a person—and the GFCI trips
              in about 1/40th of a second.
            </p>

            <div className="my-8">
              <GFCIdiagram />
            </div>

            <h3>NEC GFCI Requirements (210.8)</h3>
            <p>GFCI protection is required in these dwelling locations:</p>
            <div className="bg-white/5 rounded-xl p-6 my-6">
              <ul className="text-white/80 space-y-2">
                <li><strong>Bathrooms</strong> — All receptacles</li>
                <li><strong>Kitchens</strong> — Receptacles serving countertop surfaces</li>
                <li><strong>Outdoors</strong> — All receptacles</li>
                <li><strong>Garages</strong> — All receptacles (except dedicated appliance outlets)</li>
                <li><strong>Basements</strong> — Unfinished areas</li>
                <li><strong>Crawl spaces</strong> — At or below grade</li>
                <li><strong>Laundry areas</strong> — All receptacles</li>
                <li><strong>Within 6 feet of sinks</strong> — All receptacles</li>
                <li><strong>Boathouses</strong> — All receptacles</li>
                <li><strong>Indoor damp/wet locations</strong> — All receptacles</li>
              </ul>
            </div>

            <h2>How AFCI Protection Works</h2>
            <p>
              An AFCI uses electronic circuitry to analyze the current waveform. Dangerous arcs—from
              damaged cords, loose connections, or nail-pierced wires—create distinctive electrical
              signatures that differ from normal arcs (like those from motors or switches). When
              detected, the AFCI trips to prevent fire.
            </p>

            <div className="my-8">
              <AFCIdiagram />
            </div>

            <h3>NEC AFCI Requirements (210.12)</h3>
            <p>AFCI protection is required for branch circuits supplying outlets in:</p>
            <div className="bg-white/5 rounded-xl p-6 my-6">
              <ul className="text-white/80 space-y-2">
                <li><strong>Kitchens</strong></li>
                <li><strong>Family rooms</strong></li>
                <li><strong>Dining rooms</strong></li>
                <li><strong>Living rooms</strong></li>
                <li><strong>Parlors</strong></li>
                <li><strong>Libraries</strong></li>
                <li><strong>Dens</strong></li>
                <li><strong>Bedrooms</strong></li>
                <li><strong>Sunrooms</strong></li>
                <li><strong>Recreation rooms</strong></li>
                <li><strong>Closets</strong></li>
                <li><strong>Hallways</strong></li>
                <li><strong>Laundry areas</strong></li>
                <li><strong>Similar rooms or areas</strong></li>
              </ul>
            </div>

            <h2>Side-by-Side Comparison</h2>
            <div className="overflow-x-auto my-6">
              <table className="w-full text-left bg-white/5 rounded-xl">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="p-4 text-white">Feature</th>
                    <th className="p-4 text-green-400">GFCI</th>
                    <th className="p-4 text-blue-400">AFCI</th>
                  </tr>
                </thead>
                <tbody className="text-white/70">
                  <tr className="border-b border-white/5">
                    <td className="p-4">Primary Protection</td>
                    <td className="p-4">Shock/electrocution</td>
                    <td className="p-4">Fire from arcing</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="p-4">Detection Method</td>
                    <td className="p-4">Current imbalance (5mA)</td>
                    <td className="p-4">Waveform analysis</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="p-4">Typical Form</td>
                    <td className="p-4">Receptacle or breaker</td>
                    <td className="p-4">Breaker (mostly)</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="p-4">Trip Speed</td>
                    <td className="p-4">~25 milliseconds</td>
                    <td className="p-4">~100 milliseconds</td>
                  </tr>
                  <tr>
                    <td className="p-4">NEC Article</td>
                    <td className="p-4">210.8</td>
                    <td className="p-4">210.12</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2>Dual Function AFCI/GFCI</h2>
            <p>
              In locations where both GFCI and AFCI protection are required (like kitchens and laundry areas),
              you have options:
            </p>
            <ul>
              <li>Use a <strong>dual-function AFCI/GFCI breaker</strong></li>
              <li>Use an AFCI breaker with GFCI receptacles downstream</li>
              <li>Use a dual-function AFCI/GFCI receptacle</li>
            </ul>
            <p>
              Dual-function devices are becoming increasingly popular as they simplify installations
              and provide comprehensive protection.
            </p>

            <h2>Common Installation Mistakes</h2>
            <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-6 my-6">
              <h4 className="text-red-400 font-semibold mb-3">Avoid These Errors:</h4>
              <ul className="text-white/70 space-y-2">
                <li><strong>Shared neutrals:</strong> GFCI/AFCI devices don't work properly with shared (multi-wire branch circuit) neutrals unless specifically designed for it</li>
                <li><strong>Wrong load terminals:</strong> LINE vs LOAD terminal mix-ups can leave downstream devices unprotected</li>
                <li><strong>Missing GFCI where AFCI is required:</strong> Some locations need both—check carefully</li>
                <li><strong>Motor loads on AFCI:</strong> Some motors can cause nuisance trips; use compatible devices</li>
              </ul>
            </div>

            <h2>Testing Requirements</h2>
            <p>
              Both GFCI and AFCI devices must be tested periodically. The NEC requires manufacturers
              to include operating instructions, and most recommend monthly testing.
            </p>
            <div className="bg-gradient-to-r from-green-900/30 to-blue-900/30 rounded-xl p-6 my-6">
              <h4 className="text-white font-semibold mb-3">Test Procedure:</h4>
              <ol className="text-white/80 space-y-2">
                <li><strong>1.</strong> Press the TEST button</li>
                <li><strong>2.</strong> Verify the device trips (power is cut)</li>
                <li><strong>3.</strong> Press RESET to restore power</li>
                <li><strong>4.</strong> If the device doesn't trip when tested, replace it</li>
              </ol>
            </div>

            <h2>Quick Reference: Where Each Is Required</h2>
            <div className="grid md:grid-cols-2 gap-6 my-6">
              <div className="bg-green-500/10 border border-green-500/30 rounded-xl p-4">
                <h4 className="text-green-400 font-semibold mb-2">GFCI Only</h4>
                <ul className="text-white/70 text-sm space-y-1">
                  <li>• Outdoors</li>
                  <li>• Bathrooms</li>
                  <li>• Pool/spa equipment</li>
                  <li>• Unfinished basement receptacles</li>
                </ul>
              </div>
              <div className="bg-blue-500/10 border border-blue-500/30 rounded-xl p-4">
                <h4 className="text-blue-400 font-semibold mb-2">AFCI Only</h4>
                <ul className="text-white/70 text-sm space-y-1">
                  <li>• Bedrooms</li>
                  <li>• Living rooms</li>
                  <li>• Hallways</li>
                  <li>• Closets</li>
                </ul>
              </div>
              <div className="bg-purple-500/10 border border-purple-500/30 rounded-xl p-4 md:col-span-2">
                <h4 className="text-purple-400 font-semibold mb-2">Both GFCI and AFCI</h4>
                <ul className="text-white/70 text-sm space-y-1">
                  <li>• Kitchens (countertop receptacles)</li>
                  <li>• Laundry areas</li>
                </ul>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-12 bg-gradient-to-r from-green-900/30 to-blue-900/30 rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-display font-bold mb-4">
              Quick NEC Code Lookup on the Job
            </h3>
            <p className="text-white/70 mb-6">
              Download Ampora for instant GFCI and AFCI requirements, plus AI-powered code assistance.
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
              <Link href="/blog/nec-article-210-branch-circuits-guide" className="group bg-white/5 hover:bg-white/10 rounded-xl p-6 transition-all">
                <h4 className="font-semibold group-hover:text-purple-400 transition-colors">NEC Article 210: Branch Circuits</h4>
                <p className="text-white/60 text-sm mt-2">Complete guide to branch circuit requirements.</p>
              </Link>
              <Link href="/blog/electrical-inspection-checklist" className="group bg-white/5 hover:bg-white/10 rounded-xl p-6 transition-all">
                <h4 className="font-semibold group-hover:text-purple-400 transition-colors">Electrical Inspection Checklist</h4>
                <p className="text-white/60 text-sm mt-2">Pass your inspections the first time.</p>
              </Link>
            </div>
          </div>
        </article>
      </div>
    </main>
  );
}
