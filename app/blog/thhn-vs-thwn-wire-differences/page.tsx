import { Metadata } from "next";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import { BreadcrumbJsonLd, BlogPostingJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "THHN vs THWN Wire: What's the Difference? Complete Comparison",
  description: "Understand the differences between THHN and THWN wire. Learn about temperature ratings, wet location use, insulation thickness, and when to use each wire type per NEC requirements.",
  keywords: [
    "THHN vs THWN",
    "THHN wire",
    "THWN wire",
    "THWN-2 wire",
    "wire insulation types",
    "electrical wire types",
    "wet location wire",
    "dry location wire",
    "wire temperature rating",
    "building wire",
    "THHN ampacity",
    "difference between THHN and THWN",
    "what is THHN wire",
    "what is THWN wire",
    "electrical wire insulation"
  ],
  alternates: {
    canonical: "https://amporalabs.com/blog/thhn-vs-thwn-wire-differences",
  },
  openGraph: {
    title: "THHN vs THWN Wire: Complete Comparison - Ampora",
    description: "Understand the differences between THHN and THWN wire types for electrical installations.",
    url: "https://amporalabs.com/blog/thhn-vs-thwn-wire-differences",
    type: "article",
  },
};

function HeroIllustration() {
  return (
    <svg viewBox="0 0 400 160" className="w-full h-40 md:h-48" aria-label="THHN vs THWN wire comparison">
      {/* THHN wire */}
      <g transform="translate(100, 40)">
        <rect x="-60" y="-15" width="120" height="80" rx="6" fill="#f59e0b" fillOpacity="0.1" stroke="#f59e0b" strokeDasharray="4"/>
        <text x="0" y="0" textAnchor="middle" fill="#f59e0b" fontSize="12" fontWeight="bold">THHN</text>

        {/* Wire cross-section */}
        <circle cx="0" cy="35" r="18" fill="#374151" stroke="#f59e0b" strokeWidth="2"/>
        <circle cx="0" cy="35" r="14" fill="#1f2937"/>
        <circle cx="0" cy="35" r="10" fill="#b87333"/>

        {/* Labels */}
        <text x="0" y="70" textAnchor="middle" fill="#9ca3af" fontSize="7">90°C Dry</text>
        <text x="0" y="80" textAnchor="middle" fill="#ef4444" fontSize="7">NOT wet rated</text>
      </g>

      {/* VS */}
      <text x="200" y="75" textAnchor="middle" fill="#6b7280" fontSize="16" fontWeight="bold">VS</text>

      {/* THWN-2 wire */}
      <g transform="translate(300, 40)">
        <rect x="-60" y="-15" width="120" height="80" rx="6" fill="#22c55e" fillOpacity="0.1" stroke="#22c55e" strokeDasharray="4"/>
        <text x="0" y="0" textAnchor="middle" fill="#22c55e" fontSize="12" fontWeight="bold">THWN-2</text>

        {/* Wire cross-section */}
        <circle cx="0" cy="35" r="18" fill="#374151" stroke="#22c55e" strokeWidth="2"/>
        <circle cx="0" cy="35" r="14" fill="#1f2937"/>
        <circle cx="0" cy="35" r="10" fill="#b87333"/>

        {/* Labels */}
        <text x="0" y="70" textAnchor="middle" fill="#9ca3af" fontSize="7">90°C Dry & Wet</text>
        <text x="0" y="80" textAnchor="middle" fill="#22c55e" fontSize="7">Wet location OK</text>
      </g>

      {/* Best choice indicator */}
      <g transform="translate(200, 130)">
        <rect x="-90" y="-8" width="180" height="22" rx="4" fill="#8b5cf6" fillOpacity="0.2" stroke="#8b5cf6"/>
        <text x="0" y="6" textAnchor="middle" fill="#a78bfa" fontSize="9" fontWeight="bold">Most wire is dual-rated THHN/THWN-2</text>
      </g>
    </svg>
  );
}

export default function THHNvsTHWNPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navigation />
      <div className="pt-20">
        <BreadcrumbJsonLd
          items={[
            { name: "Home", url: "https://amporalabs.com" },
            { name: "Blog", url: "https://amporalabs.com/blog" },
            { name: "THHN vs THWN", url: "https://amporalabs.com/blog/thhn-vs-thwn-wire-differences" },
          ]}
        />
        <BlogPostingJsonLd
          headline="THHN vs THWN Wire: What's the Difference?"
          description="Complete comparison of THHN and THWN wire types including temperature ratings, wet location use, and applications."
          datePublished="2025-01-25"
          dateModified="2025-01-25"
          url="https://amporalabs.com/blog/thhn-vs-thwn-wire-differences"
          wordCount={1800}
          keywords={["THHN", "THWN", "wire types", "insulation", "wet location", "temperature rating"]}
        />

        <article className="max-w-4xl mx-auto px-6 py-12">
          {/* Breadcrumb */}
          <nav className="text-sm text-white/60 mb-8">
            <Link href="/" className="hover:text-white">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/blog" className="hover:text-white">Blog</Link>
            <span className="mx-2">/</span>
            <span className="text-white">THHN vs THWN</span>
          </nav>

          {/* Article Header */}
          <header className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <span className="px-3 py-1 bg-orange-600/30 text-orange-300 text-sm font-medium rounded-full">
                Wire Types
              </span>
              <span className="text-white/40 text-sm">8 min read</span>
              <span className="text-white/40 text-sm">January 25, 2025</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6 leading-tight">
              THHN vs THWN Wire: What's the Difference?
            </h1>
            <p className="text-xl text-white/70">
              Both are common building wire types, but they're rated for different conditions. Here's what electricians need to know about choosing the right wire.
            </p>
          </header>

          <div className="mb-12 bg-gradient-to-br from-amber-900/20 to-green-900/20 rounded-2xl p-6 border border-white/10">
            <HeroIllustration />
          </div>

          {/* Article Content */}
          <div className="prose prose-invert prose-lg max-w-none">

            <section className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Decoding Wire Names</h2>
              <p className="text-white/80 mb-4">
                Wire designation letters tell you exactly what you're getting. Here's what each letter means:
              </p>
              <div className="grid md:grid-cols-2 gap-4 my-6">
                <div className="bg-white/5 rounded-xl p-6">
                  <h3 className="font-semibold text-purple-400 mb-3">THHN Breakdown</h3>
                  <ul className="space-y-2 text-white/70 text-sm">
                    <li><strong>T</strong> - Thermoplastic insulation</li>
                    <li><strong>H</strong> - Heat resistant (75°C)</li>
                    <li><strong>H</strong> - High heat resistant (90°C)</li>
                    <li><strong>N</strong> - Nylon jacket (abrasion resistant)</li>
                  </ul>
                </div>
                <div className="bg-white/5 rounded-xl p-6">
                  <h3 className="font-semibold text-cyan-400 mb-3">THWN Breakdown</h3>
                  <ul className="space-y-2 text-white/70 text-sm">
                    <li><strong>T</strong> - Thermoplastic insulation</li>
                    <li><strong>H</strong> - Heat resistant (75°C)</li>
                    <li><strong>W</strong> - Wet location rated</li>
                    <li><strong>N</strong> - Nylon jacket (abrasion resistant)</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Quick Comparison</h2>
              <div className="overflow-x-auto my-6">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-white/20">
                      <th className="text-left py-3 px-4 text-white/60">Feature</th>
                      <th className="text-left py-3 px-4 text-white/60">THHN</th>
                      <th className="text-left py-3 px-4 text-white/60">THWN</th>
                      <th className="text-left py-3 px-4 text-white/60">THWN-2</th>
                    </tr>
                  </thead>
                  <tbody className="text-white/80">
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-semibold">Dry Location Rating</td>
                      <td className="py-3 px-4">90°C</td>
                      <td className="py-3 px-4">75°C</td>
                      <td className="py-3 px-4">90°C</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-semibold">Wet Location Rating</td>
                      <td className="py-3 px-4 text-red-400">Not rated</td>
                      <td className="py-3 px-4">75°C</td>
                      <td className="py-3 px-4">90°C</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-semibold">Wet Location Use</td>
                      <td className="py-3 px-4 text-red-400">No</td>
                      <td className="py-3 px-4 text-green-400">Yes</td>
                      <td className="py-3 px-4 text-green-400">Yes</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-semibold">Conduit Use</td>
                      <td className="py-3 px-4 text-green-400">Yes</td>
                      <td className="py-3 px-4 text-green-400">Yes</td>
                      <td className="py-3 px-4 text-green-400">Yes</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-semibold">Nylon Jacket</td>
                      <td className="py-3 px-4 text-green-400">Yes</td>
                      <td className="py-3 px-4 text-green-400">Yes</td>
                      <td className="py-3 px-4 text-green-400">Yes</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">The Real-World Answer: THHN/THWN-2</h2>
              <p className="text-white/80 mb-4">
                Here's what most electricians should know: <strong>modern wire is typically dual-rated THHN/THWN-2</strong>. Look at the wire jacket - you'll usually see both designations printed.
              </p>
              <div className="bg-green-900/30 rounded-xl p-6 my-6">
                <h3 className="font-semibold text-green-400 mb-2">Dual-Rated Wire: Best of Both Worlds</h3>
                <p className="text-white/70">
                  THHN/THWN-2 wire is rated 90°C in dry locations AND 90°C in wet locations. This makes it suitable for virtually any building wire application. Most major manufacturers produce their building wire this way.
                </p>
              </div>
              <p className="text-white/80">
                When you buy "THHN" from a supply house today, you're almost certainly getting THHN/THWN-2 dual-rated wire. But always verify by checking the markings on the wire itself.
              </p>
            </section>

            {/* Mid-Article CTA */}
            <div className="not-prose my-12 bg-gradient-to-r from-purple-900/40 to-cyan-900/40 rounded-xl p-6 border border-purple-500/20">
              <div className="flex flex-col sm:flex-row items-center gap-4">
                <div className="flex-1 text-center sm:text-left">
                  <p className="font-display font-bold text-lg text-white mb-1">Ampora — The Electrician&apos;s AI Companion</p>
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

            <section className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">What is a "Wet Location"?</h2>
              <p className="text-white/80 mb-4">
                Per NEC Article 100 definitions:
              </p>
              <div className="space-y-4 my-6">
                <div className="bg-white/5 rounded-xl p-6">
                  <h3 className="font-semibold text-cyan-400 mb-2">Wet Locations Include:</h3>
                  <ul className="list-disc list-inside text-white/70 text-sm space-y-1">
                    <li>Underground installations</li>
                    <li>Concrete slabs in direct contact with earth</li>
                    <li>Locations subject to saturation with water</li>
                    <li>Unprotected outdoor locations</li>
                    <li>Below-grade conduit (even if above water table)</li>
                  </ul>
                </div>
                <div className="bg-white/5 rounded-xl p-6">
                  <h3 className="font-semibold text-purple-400 mb-2">Damp Locations Include:</h3>
                  <ul className="list-disc list-inside text-white/70 text-sm space-y-1">
                    <li>Protected outdoor locations (under canopies)</li>
                    <li>Interior locations subject to moderate moisture</li>
                    <li>Some basements</li>
                  </ul>
                </div>
              </div>
              <div className="bg-orange-900/30 rounded-xl p-6 my-6">
                <p className="text-white/90">
                  <strong>Important:</strong> Any conduit run underground, through a slab, or outdoors is considered a wet location - even if the conduit appears dry. Always use wet-rated wire in these applications.
                </p>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Temperature Rating and Ampacity</h2>
              <p className="text-white/80 mb-4">
                The wire's temperature rating affects its ampacity from NEC Table 310.16:
              </p>
              <div className="overflow-x-auto my-6">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-white/20">
                      <th className="text-left py-3 px-4 text-white/60">Wire Size</th>
                      <th className="text-left py-3 px-4 text-white/60">75°C Column</th>
                      <th className="text-left py-3 px-4 text-white/60">90°C Column</th>
                    </tr>
                  </thead>
                  <tbody className="text-white/80">
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">12 AWG</td>
                      <td className="py-3 px-4">25A</td>
                      <td className="py-3 px-4">30A</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">10 AWG</td>
                      <td className="py-3 px-4">35A</td>
                      <td className="py-3 px-4">40A</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">8 AWG</td>
                      <td className="py-3 px-4">50A</td>
                      <td className="py-3 px-4">55A</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4">6 AWG</td>
                      <td className="py-3 px-4">65A</td>
                      <td className="py-3 px-4">75A</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="bg-purple-900/30 rounded-xl p-6 my-6">
                <h3 className="font-semibold text-purple-400 mb-2">Remember the Termination Rule</h3>
                <p className="text-white/70">
                  Even with 90°C wire, you typically use the 75°C ampacity column because most terminations (breakers, devices) are rated 75°C. The 90°C rating is mainly useful for derating calculations.
                </p>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">When to Use What</h2>
              <div className="space-y-4 my-6">
                <div className="bg-white/5 rounded-xl p-6">
                  <h3 className="font-semibold text-green-400 mb-2">Use THHN/THWN-2 (Dual-Rated) For:</h3>
                  <ul className="list-disc list-inside text-white/70 text-sm space-y-1">
                    <li>All general conduit work</li>
                    <li>Underground conduit runs</li>
                    <li>Outdoor conduit</li>
                    <li>Anywhere you need flexibility for future changes</li>
                  </ul>
                </div>
                <div className="bg-white/5 rounded-xl p-6">
                  <h3 className="font-semibold text-cyan-400 mb-2">Other Wire Types to Know:</h3>
                  <ul className="list-disc list-inside text-white/70 text-sm space-y-1">
                    <li><strong>XHHW-2</strong> - Cross-linked polyethylene, excellent for wet locations</li>
                    <li><strong>USE-2</strong> - Underground service entrance (direct burial rated)</li>
                    <li><strong>NM-B</strong> - Romex, for dry indoor locations only</li>
                    <li><strong>UF-B</strong> - Underground feeder, direct burial rated</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Bottom Line</h2>
              <p className="text-white/80 mb-4">
                For most electricians doing conduit work:
              </p>
              <ol className="list-decimal list-inside text-white/70 space-y-2 mb-4">
                <li>Buy THHN/THWN-2 dual-rated wire (most common at supply houses)</li>
                <li>Verify the wire jacket shows both ratings</li>
                <li>You'll be covered for both dry and wet locations</li>
                <li>Use the 90°C rating for derating calculations, 75°C for final ampacity</li>
              </ol>
            </section>

            {/* CTA Section */}
            <section className="bg-gradient-to-r from-purple-900/30 to-cyan-900/30 rounded-2xl p-8 md:p-12 my-12 border border-purple-500/20">
              <div className="text-center">
                <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-1.5 rounded-full mb-4">
                  <span className="text-sm text-white/80">&#9733; Free on iOS &amp; Android</span>
                </div>
                <h2 className="text-2xl md:text-3xl font-display font-bold mb-4">
                  Your Electrical Reference, Powered by AI
                </h2>
                <p className="text-white/70 mb-8 max-w-2xl mx-auto">
                  Join thousands of electricians using Ampora for instant NEC code answers, electrical calculations, and AI-powered troubleshooting — right from your phone.
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
                <Link href="/blog/wire-sizing-guide-nec-ampacity-tables" className="bg-white/5 hover:bg-white/10 rounded-xl p-6 transition-colors">
                  <span className="text-cyan-400 text-sm">Calculations</span>
                  <h3 className="font-semibold mt-2">Wire Sizing Guide: NEC Ampacity Tables</h3>
                </Link>
                <Link href="/blog/conduit-fill-calculation-guide" className="bg-white/5 hover:bg-white/10 rounded-xl p-6 transition-colors">
                  <span className="text-cyan-400 text-sm">Calculations</span>
                  <h3 className="font-semibold mt-2">Conduit Fill Calculation Guide</h3>
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
