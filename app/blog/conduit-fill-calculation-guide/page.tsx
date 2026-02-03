import { Metadata } from "next";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import { BreadcrumbJsonLd, BlogPostingJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Conduit Fill Calculation Guide: NEC Chapter 9 Tables Explained",
  description: "Learn how to calculate conduit fill using NEC Chapter 9 tables. Understand the 40% fill rule, conductor areas, jam ratio, and how to select the right conduit size for EMT, RMC, PVC, and FMC.",
  keywords: [
    "conduit fill calculation",
    "NEC conduit fill",
    "conduit fill chart",
    "conduit sizing",
    "NEC Chapter 9",
    "40 percent fill rule",
    "conduit fill calculator",
    "EMT conduit fill",
    "PVC conduit fill",
    "conductor area",
    "how to calculate conduit fill",
    "conduit fill percentage",
    "NEC Table 4",
    "NEC Table 5",
    "electrical conduit sizing"
  ],
  alternates: {
    canonical: "https://amporalabs.com/blog/conduit-fill-calculation-guide",
  },
  openGraph: {
    title: "Conduit Fill Calculation Guide: NEC Tables Explained - Ampora",
    description: "Complete guide to calculating conduit fill using NEC Chapter 9 tables.",
    url: "https://amporalabs.com/blog/conduit-fill-calculation-guide",
    type: "article",
  },
};

export default function ConduitFillGuidePage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navigation />
      <div className="pt-20">
        <BreadcrumbJsonLd
          items={[
            { name: "Home", url: "https://amporalabs.com" },
            { name: "Blog", url: "https://amporalabs.com/blog" },
            { name: "Conduit Fill Guide", url: "https://amporalabs.com/blog/conduit-fill-calculation-guide" },
          ]}
        />
        <BlogPostingJsonLd
          headline="Conduit Fill Calculation Guide: NEC Chapter 9 Tables Explained"
          description="Learn how to calculate conduit fill using NEC Chapter 9 tables and the 40% fill rule."
          datePublished="2025-01-22"
          dateModified="2025-01-22"
          url="https://amporalabs.com/blog/conduit-fill-calculation-guide"
          wordCount={2200}
          keywords={["conduit fill", "NEC Chapter 9", "40% fill rule", "conduit sizing", "conductor area"]}
        />

        <article className="max-w-4xl mx-auto px-6 py-12">
          {/* Breadcrumb */}
          <nav className="text-sm text-white/60 mb-8">
            <Link href="/" className="hover:text-white">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/blog" className="hover:text-white">Blog</Link>
            <span className="mx-2">/</span>
            <span className="text-white">Conduit Fill Guide</span>
          </nav>

          {/* Article Header */}
          <header className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <span className="px-3 py-1 bg-cyan-600/30 text-cyan-300 text-sm font-medium rounded-full">
                Calculations
              </span>
              <span className="text-white/40 text-sm">10 min read</span>
              <span className="text-white/40 text-sm">January 22, 2025</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6 leading-tight">
              Conduit Fill Calculation: NEC Chapter 9 Tables Explained
            </h1>
            <p className="text-xl text-white/70">
              Properly sizing conduit prevents pulling problems and heat buildup. This guide walks through NEC Chapter 9 tables step by step.
            </p>
          </header>

          {/* Quick Calculator CTA */}
          <div className="bg-cyan-900/30 border border-cyan-500/30 rounded-2xl p-6 mb-12">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div>
                <h3 className="font-display font-bold text-lg mb-1">Skip the math</h3>
                <p className="text-white/70 text-sm">Our conduit fill calculator does the lookup automatically for any combination of conductors.</p>
              </div>
              <Link
                href="/calculators/conduit-fill"
                className="px-6 py-3 bg-cyan-600 text-white font-semibold rounded-full hover:bg-cyan-500 transition-colors whitespace-nowrap"
              >
                Open Calculator
              </Link>
            </div>
          </div>

          {/* Table of Contents */}
          <div className="bg-white/5 rounded-2xl p-6 mb-12">
            <h2 className="font-display font-bold mb-4">In This Guide</h2>
            <ul className="space-y-2 text-white/70">
              <li><a href="#fill-percentages" className="hover:text-purple-400">→ Conduit Fill Percentages</a></li>
              <li><a href="#why-40-percent" className="hover:text-purple-400">→ Why the 40% Rule?</a></li>
              <li><a href="#calculation-steps" className="hover:text-purple-400">→ Step-by-Step Calculation</a></li>
              <li><a href="#conductor-areas" className="hover:text-purple-400">→ Conductor Area Table</a></li>
              <li><a href="#conduit-areas" className="hover:text-purple-400">→ Conduit Area Table</a></li>
              <li><a href="#example" className="hover:text-purple-400">→ Worked Example</a></li>
              <li><a href="#jam-ratio" className="hover:text-purple-400">→ Understanding Jam Ratio</a></li>
            </ul>
          </div>

          {/* Article Content */}
          <div className="prose prose-invert prose-lg max-w-none">

            <section id="fill-percentages" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Conduit Fill Percentages</h2>
              <p className="text-white/80 mb-4">
                NEC Chapter 9, Table 1 specifies maximum conduit fill based on the number of conductors:
              </p>
              <div className="grid md:grid-cols-3 gap-4 my-6">
                <div className="bg-purple-900/30 rounded-xl p-6 text-center">
                  <div className="text-4xl font-mono font-bold text-purple-400 mb-2">53%</div>
                  <p className="text-white/70">One Conductor</p>
                </div>
                <div className="bg-cyan-900/30 rounded-xl p-6 text-center">
                  <div className="text-4xl font-mono font-bold text-cyan-400 mb-2">31%</div>
                  <p className="text-white/70">Two Conductors</p>
                </div>
                <div className="bg-green-900/30 rounded-xl p-6 text-center">
                  <div className="text-4xl font-mono font-bold text-green-400 mb-2">40%</div>
                  <p className="text-white/70">Three or More</p>
                </div>
              </div>
              <p className="text-white/70 text-sm">
                These percentages apply to new work. For existing conduit with lead-sheath conductors, different rules may apply.
              </p>
            </section>

            <section id="why-40-percent" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Why the 40% Fill Rule?</h2>
              <p className="text-white/80 mb-4">
                The 40% maximum fill for three or more conductors exists for several important reasons:
              </p>
              <ul className="list-disc list-inside text-white/70 space-y-2 mb-4">
                <li><strong>Heat dissipation</strong> - Conductors need air space to dissipate heat. Overfilled conduit causes overheating.</li>
                <li><strong>Pulling ease</strong> - Conductors must be able to slide past each other during installation. Overfilled conduit leads to damaged insulation.</li>
                <li><strong>Future access</strong> - Room for pulling additional conductors later or replacing damaged ones.</li>
                <li><strong>Conductor protection</strong> - Prevents crushing and abrasion of conductor insulation.</li>
              </ul>
            </section>

            <section id="calculation-steps" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Step-by-Step Conduit Fill Calculation</h2>
              <div className="space-y-4 my-6">
                <div className="bg-white/5 rounded-xl p-4">
                  <p className="text-purple-400 font-semibold">Step 1: List all conductors</p>
                  <p className="text-white/60 text-sm mt-1">Count each conductor by size and insulation type (e.g., 3× #12 THHN, 1× #12 THHN ground).</p>
                </div>
                <div className="bg-white/5 rounded-xl p-4">
                  <p className="text-purple-400 font-semibold">Step 2: Find conductor areas</p>
                  <p className="text-white/60 text-sm mt-1">Look up each conductor's area in NEC Chapter 9, Table 5 (or Table 5A for compact conductors).</p>
                </div>
                <div className="bg-white/5 rounded-xl p-4">
                  <p className="text-purple-400 font-semibold">Step 3: Calculate total area</p>
                  <p className="text-white/60 text-sm mt-1">Multiply each conductor area by quantity and sum all areas.</p>
                </div>
                <div className="bg-white/5 rounded-xl p-4">
                  <p className="text-purple-400 font-semibold">Step 4: Determine fill percentage</p>
                  <p className="text-white/60 text-sm mt-1">Use 40% for 3+ conductors (most common). Use 31% for 2 conductors, 53% for 1 conductor.</p>
                </div>
                <div className="bg-white/5 rounded-xl p-4">
                  <p className="text-purple-400 font-semibold">Step 5: Find conduit size</p>
                  <p className="text-white/60 text-sm mt-1">Look up NEC Chapter 9, Table 4 for the conduit type. Find the smallest size where 40% fill area ≥ your total conductor area.</p>
                </div>
              </div>
            </section>

            <section id="conductor-areas" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Common Conductor Areas (NEC Table 5)</h2>
              <p className="text-white/80 mb-4">
                Approximate areas for THHN/THWN-2 conductors (most common in conduit):
              </p>
              <div className="overflow-x-auto my-6">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-white/20">
                      <th className="text-left py-3 px-4 text-white/60">Wire Size</th>
                      <th className="text-left py-3 px-4 text-white/60">Area (sq in)</th>
                      <th className="text-left py-3 px-4 text-white/60">Area (mm²)</th>
                    </tr>
                  </thead>
                  <tbody className="text-white/80">
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">14 AWG</td>
                      <td className="py-3 px-4 font-mono">0.0097</td>
                      <td className="py-3 px-4 font-mono">6.26</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">12 AWG</td>
                      <td className="py-3 px-4 font-mono">0.0133</td>
                      <td className="py-3 px-4 font-mono">8.58</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">10 AWG</td>
                      <td className="py-3 px-4 font-mono">0.0211</td>
                      <td className="py-3 px-4 font-mono">13.61</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">8 AWG</td>
                      <td className="py-3 px-4 font-mono">0.0366</td>
                      <td className="py-3 px-4 font-mono">23.61</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">6 AWG</td>
                      <td className="py-3 px-4 font-mono">0.0507</td>
                      <td className="py-3 px-4 font-mono">32.71</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">4 AWG</td>
                      <td className="py-3 px-4 font-mono">0.0824</td>
                      <td className="py-3 px-4 font-mono">53.16</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">3 AWG</td>
                      <td className="py-3 px-4 font-mono">0.0973</td>
                      <td className="py-3 px-4 font-mono">62.77</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">2 AWG</td>
                      <td className="py-3 px-4 font-mono">0.1158</td>
                      <td className="py-3 px-4 font-mono">74.71</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">1 AWG</td>
                      <td className="py-3 px-4 font-mono">0.1562</td>
                      <td className="py-3 px-4 font-mono">100.8</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4">1/0 AWG</td>
                      <td className="py-3 px-4 font-mono">0.1855</td>
                      <td className="py-3 px-4 font-mono">119.7</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section id="conduit-areas" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Conduit Fill Areas at 40% (NEC Table 4)</h2>
              <p className="text-white/80 mb-4">
                Maximum conductor area allowed in EMT at 40% fill:
              </p>
              <div className="overflow-x-auto my-6">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-white/20">
                      <th className="text-left py-3 px-4 text-white/60">EMT Size</th>
                      <th className="text-left py-3 px-4 text-white/60">Total Area (sq in)</th>
                      <th className="text-left py-3 px-4 text-white/60">40% Fill (sq in)</th>
                    </tr>
                  </thead>
                  <tbody className="text-white/80">
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">1/2"</td>
                      <td className="py-3 px-4 font-mono">0.304</td>
                      <td className="py-3 px-4 font-mono">0.122</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">3/4"</td>
                      <td className="py-3 px-4 font-mono">0.533</td>
                      <td className="py-3 px-4 font-mono">0.213</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">1"</td>
                      <td className="py-3 px-4 font-mono">0.864</td>
                      <td className="py-3 px-4 font-mono">0.346</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">1-1/4"</td>
                      <td className="py-3 px-4 font-mono">1.496</td>
                      <td className="py-3 px-4 font-mono">0.598</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">1-1/2"</td>
                      <td className="py-3 px-4 font-mono">2.036</td>
                      <td className="py-3 px-4 font-mono">0.814</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4">2"</td>
                      <td className="py-3 px-4 font-mono">3.356</td>
                      <td className="py-3 px-4 font-mono">1.342</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section id="example" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Worked Example</h2>
              <div className="bg-white/5 rounded-xl p-6 mb-4">
                <h3 className="font-semibold text-cyan-400 mb-3">Problem:</h3>
                <p className="text-white/80">
                  What size EMT is needed for: 3× #10 THHN (circuit conductors) + 1× #10 THHN (ground)?
                </p>
              </div>

              <div className="space-y-4 my-6">
                <div className="bg-white/5 rounded-xl p-4">
                  <p className="text-white/70"><strong>Step 1:</strong> List conductors</p>
                  <p className="text-white/60 text-sm mt-1">4× #10 THHN total</p>
                </div>
                <div className="bg-white/5 rounded-xl p-4">
                  <p className="text-white/70"><strong>Step 2:</strong> Find conductor area</p>
                  <p className="text-white/60 text-sm mt-1">#10 THHN = 0.0211 sq in each</p>
                </div>
                <div className="bg-white/5 rounded-xl p-4">
                  <p className="text-white/70"><strong>Step 3:</strong> Calculate total area</p>
                  <p className="text-white/60 font-mono text-sm mt-1">4 × 0.0211 = 0.0844 sq in</p>
                </div>
                <div className="bg-white/5 rounded-xl p-4">
                  <p className="text-white/70"><strong>Step 4:</strong> Determine fill percentage</p>
                  <p className="text-white/60 text-sm mt-1">4 conductors = 40% fill applies</p>
                </div>
                <div className="bg-white/5 rounded-xl p-4">
                  <p className="text-white/70"><strong>Step 5:</strong> Find conduit size</p>
                  <p className="text-white/60 text-sm mt-1">1/2" EMT allows 0.122 sq in at 40%. Since 0.0844 &lt; 0.122, <strong>1/2" EMT</strong> is sufficient.</p>
                </div>
              </div>

              <div className="bg-green-900/20 border border-green-500/30 rounded-xl p-6 my-6">
                <h3 className="font-semibold text-green-400 mb-2">Answer: 1/2" EMT</h3>
                <p className="text-white/70">
                  Four #10 THHN conductors fit in 1/2" EMT at 69% of the allowable 40% fill (0.0844 / 0.122 = 69%).
                </p>
              </div>
            </section>

            <section id="jam-ratio" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Understanding Jam Ratio</h2>
              <p className="text-white/80 mb-4">
                While the NEC doesn't specifically address jam ratio, it's an important practical consideration. Jam ratio is the conduit inner diameter divided by conductor outer diameter:
              </p>
              <ul className="list-disc list-inside text-white/70 space-y-2 mb-4">
                <li><strong>Jam ratio between 2.5 and 3.2</strong> - Conductors can jam during pulling</li>
                <li><strong>Jam ratio below 2.5</strong> - Usually safe from jamming</li>
                <li><strong>Jam ratio above 3.2</strong> - Usually safe from jamming</li>
              </ul>
              <p className="text-white/80">
                When you have conductors of the same size that could jam, consider upsizing the conduit even if fill calculations allow the smaller size.
              </p>
            </section>

            {/* CTA Section */}
            <section className="bg-gradient-to-r from-purple-900/30 to-cyan-900/30 rounded-2xl p-8 my-12">
              <h2 className="text-2xl font-display font-bold mb-4 text-center">
                Calculate Conduit Fill Instantly
              </h2>
              <p className="text-white/70 mb-6 text-center">
                Ampora's conduit fill calculator handles all NEC Chapter 9 table lookups automatically. Enter your conductors and get the right conduit size in seconds.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link
                  href="/calculators/conduit-fill"
                  className="px-6 py-3 bg-cyan-600 text-white font-semibold rounded-full hover:bg-cyan-500 transition-colors text-center"
                >
                  Use Web Calculator
                </Link>
                <a
                  href="https://apps.apple.com/us/app/ampora/id6753693522"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-white text-black font-semibold rounded-full hover:bg-white/90 transition-colors text-center"
                >
                  Download App Free
                </a>
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
                <Link href="/blog/thhn-vs-thwn-wire-differences" className="bg-white/5 hover:bg-white/10 rounded-xl p-6 transition-colors">
                  <span className="text-orange-400 text-sm">Wire Types</span>
                  <h3 className="font-semibold mt-2">THHN vs THWN: Wire Differences Explained</h3>
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
