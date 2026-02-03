import { Metadata } from "next";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import { BreadcrumbJsonLd, BlogPostingJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Electrical Panel Troubleshooting: Common Problems & Solutions",
  description: "Learn how to troubleshoot common electrical panel problems. Diagnose tripping breakers, buzzing sounds, hot spots, flickering lights, and other panel issues with this professional guide.",
  keywords: [
    "electrical panel troubleshooting",
    "breaker keeps tripping",
    "electrical panel problems",
    "circuit breaker troubleshooting",
    "buzzing electrical panel",
    "hot breaker",
    "flickering lights",
    "electrical panel diagnosis",
    "panel overheating",
    "double tapped breaker",
    "loose connection electrical",
    "arc fault breaker tripping",
    "GFCI breaker troubleshooting",
    "electrical panel inspection",
    "breaker won't reset"
  ],
  alternates: {
    canonical: "https://amporalabs.com/blog/electrical-panel-troubleshooting",
  },
  openGraph: {
    title: "Electrical Panel Troubleshooting Guide - Ampora",
    description: "Professional guide to diagnosing and fixing common electrical panel problems.",
    url: "https://amporalabs.com/blog/electrical-panel-troubleshooting",
    type: "article",
  },
};

export default function PanelTroubleshootingPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navigation />
      <div className="pt-20">
        <BreadcrumbJsonLd
          items={[
            { name: "Home", url: "https://amporalabs.com" },
            { name: "Blog", url: "https://amporalabs.com/blog" },
            { name: "Panel Troubleshooting", url: "https://amporalabs.com/blog/electrical-panel-troubleshooting" },
          ]}
        />
        <BlogPostingJsonLd
          headline="Electrical Panel Troubleshooting: Common Problems & Solutions"
          description="Learn how to troubleshoot common electrical panel problems including tripping breakers, buzzing, and overheating."
          datePublished="2025-01-28"
          dateModified="2025-01-28"
          url="https://amporalabs.com/blog/electrical-panel-troubleshooting"
          wordCount={2400}
          keywords={["panel troubleshooting", "breaker tripping", "electrical problems", "circuit breaker", "panel diagnosis"]}
        />

        <article className="max-w-4xl mx-auto px-6 py-12">
          {/* Breadcrumb */}
          <nav className="text-sm text-white/60 mb-8">
            <Link href="/" className="hover:text-white">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/blog" className="hover:text-white">Blog</Link>
            <span className="mx-2">/</span>
            <span className="text-white">Panel Troubleshooting</span>
          </nav>

          {/* Article Header */}
          <header className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <span className="px-3 py-1 bg-red-600/30 text-red-300 text-sm font-medium rounded-full">
                Troubleshooting
              </span>
              <span className="text-white/40 text-sm">12 min read</span>
              <span className="text-white/40 text-sm">January 28, 2025</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6 leading-tight">
              Electrical Panel Troubleshooting: Common Problems & Solutions
            </h1>
            <p className="text-xl text-white/70">
              A systematic approach to diagnosing panel issues. From tripping breakers to mysterious buzzing, here's how to find and fix the problem.
            </p>
          </header>

          {/* Safety Warning */}
          <div className="bg-red-900/30 border border-red-500/30 rounded-2xl p-6 mb-12">
            <h3 className="font-semibold text-red-400 mb-2">Safety First</h3>
            <p className="text-white/70 text-sm">
              Electrical panels contain lethal voltages. Always de-energize circuits before working on them. Use proper PPE. If you're not a qualified electrician, consult a professional for panel work.
            </p>
          </div>

          {/* Table of Contents */}
          <div className="bg-white/5 rounded-2xl p-6 mb-12">
            <h2 className="font-display font-bold mb-4">Common Panel Problems</h2>
            <ul className="space-y-2 text-white/70">
              <li><a href="#tripping-breaker" className="hover:text-purple-400">→ Breaker Keeps Tripping</a></li>
              <li><a href="#wont-reset" className="hover:text-purple-400">→ Breaker Won't Reset</a></li>
              <li><a href="#buzzing" className="hover:text-purple-400">→ Buzzing or Humming Sound</a></li>
              <li><a href="#hot-breaker" className="hover:text-purple-400">→ Hot Breaker or Wires</a></li>
              <li><a href="#flickering" className="hover:text-purple-400">→ Flickering Lights</a></li>
              <li><a href="#afci-trips" className="hover:text-purple-400">→ AFCI Breaker Nuisance Tripping</a></li>
              <li><a href="#gfci-trips" className="hover:text-purple-400">→ GFCI Breaker Tripping</a></li>
              <li><a href="#burning-smell" className="hover:text-purple-400">→ Burning Smell</a></li>
            </ul>
          </div>

          {/* Article Content */}
          <div className="prose prose-invert prose-lg max-w-none">

            <section id="tripping-breaker" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Breaker Keeps Tripping</h2>
              <p className="text-white/80 mb-4">
                The most common service call. A breaker trips to protect the circuit - your job is to find out why.
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-3">Possible Causes:</h3>
              <div className="space-y-4 my-6">
                <div className="bg-white/5 rounded-xl p-4">
                  <h4 className="font-semibold text-white">1. Overloaded Circuit</h4>
                  <p className="text-white/60 text-sm mt-1">Circuit is drawing more current than the breaker rating. Calculate the load on the circuit. For a 20A circuit, total load shouldn't exceed 16A (80% for continuous loads).</p>
                  <p className="text-green-400 text-sm mt-2"><strong>Solution:</strong> Redistribute loads to other circuits or add a new circuit.</p>
                </div>
                <div className="bg-white/5 rounded-xl p-4">
                  <h4 className="font-semibold text-white">2. Short Circuit</h4>
                  <p className="text-white/60 text-sm mt-1">Hot wire touching neutral or ground. Trips instantly with high current. Check for damaged wire insulation, pinched wires, or faulty devices.</p>
                  <p className="text-green-400 text-sm mt-2"><strong>Solution:</strong> Isolate the circuit, check each device and junction box, repair or replace damaged wiring.</p>
                </div>
                <div className="bg-white/5 rounded-xl p-4">
                  <h4 className="font-semibold text-white">3. Ground Fault</h4>
                  <p className="text-white/60 text-sm mt-1">Hot wire touching grounded metal or current leaking to ground through moisture. Common in wet locations.</p>
                  <p className="text-green-400 text-sm mt-2"><strong>Solution:</strong> Check for water intrusion, damaged insulation, or faulty equipment. Use a megger to test insulation resistance.</p>
                </div>
                <div className="bg-white/5 rounded-xl p-4">
                  <h4 className="font-semibold text-white">4. Faulty Breaker</h4>
                  <p className="text-white/60 text-sm mt-1">Breakers can fail and trip at lower than rated current, especially older ones. Less common than other causes.</p>
                  <p className="text-green-400 text-sm mt-2"><strong>Solution:</strong> Measure actual circuit current with clamp meter. If well under breaker rating, replace the breaker.</p>
                </div>
              </div>

              <div className="bg-purple-900/30 rounded-xl p-6 my-6">
                <h3 className="font-semibold text-purple-400 mb-2">Diagnostic Approach</h3>
                <ol className="list-decimal list-inside text-white/70 text-sm space-y-1">
                  <li>Turn off all loads on the circuit</li>
                  <li>Reset the breaker</li>
                  <li>If it trips immediately with no load, suspect short circuit or ground fault</li>
                  <li>If it holds, add loads back one at a time to identify the problem device</li>
                  <li>If it trips when approaching full load, it's likely overloaded</li>
                </ol>
              </div>
            </section>

            <section id="wont-reset" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Breaker Won't Reset</h2>
              <p className="text-white/80 mb-4">
                If a breaker won't stay in the ON position, there's either a persistent fault or a mechanical problem.
              </p>
              <div className="space-y-4 my-6">
                <div className="bg-white/5 rounded-xl p-4">
                  <h4 className="font-semibold text-white">Fault Still Present</h4>
                  <p className="text-white/60 text-sm mt-1">The short circuit or ground fault hasn't been cleared. The breaker is doing its job.</p>
                  <p className="text-green-400 text-sm mt-2"><strong>Solution:</strong> Disconnect all loads and wiring from the breaker. If it resets, the fault is downstream. Isolate and repair.</p>
                </div>
                <div className="bg-white/5 rounded-xl p-4">
                  <h4 className="font-semibold text-white">Mechanical Failure</h4>
                  <p className="text-white/60 text-sm mt-1">Internal mechanism is damaged. Breaker may feel loose or sloppy when operating.</p>
                  <p className="text-green-400 text-sm mt-2"><strong>Solution:</strong> Replace the breaker with the correct type for your panel.</p>
                </div>
                <div className="bg-white/5 rounded-xl p-4">
                  <h4 className="font-semibold text-white">Improper Reset Technique</h4>
                  <p className="text-white/60 text-sm mt-1">Many breakers must be pushed fully OFF before they can be reset to ON.</p>
                  <p className="text-green-400 text-sm mt-2"><strong>Solution:</strong> Push firmly to OFF (past the trip position), then to ON.</p>
                </div>
              </div>
            </section>

            <section id="buzzing" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Buzzing or Humming Sound</h2>
              <p className="text-white/80 mb-4">
                Some electrical noise is normal, but loud buzzing indicates a problem that needs attention.
              </p>
              <div className="space-y-4 my-6">
                <div className="bg-white/5 rounded-xl p-4">
                  <h4 className="font-semibold text-white">Loose Connection</h4>
                  <p className="text-white/60 text-sm mt-1">Arcing at a loose terminal causes buzzing. This is a fire hazard.</p>
                  <p className="text-green-400 text-sm mt-2"><strong>Solution:</strong> De-energize, locate the loose connection, clean and tighten. Check for heat damage.</p>
                </div>
                <div className="bg-white/5 rounded-xl p-4">
                  <h4 className="font-semibold text-white">Overloaded Breaker</h4>
                  <p className="text-white/60 text-sm mt-1">A breaker carrying near its full rating may hum. If it's also warm, the circuit is overloaded.</p>
                  <p className="text-green-400 text-sm mt-2"><strong>Solution:</strong> Reduce the load or upsize the circuit.</p>
                </div>
                <div className="bg-white/5 rounded-xl p-4">
                  <h4 className="font-semibold text-white">Failing Breaker</h4>
                  <p className="text-white/60 text-sm mt-1">Internal arcing in a worn breaker creates noise.</p>
                  <p className="text-green-400 text-sm mt-2"><strong>Solution:</strong> Replace the breaker.</p>
                </div>
              </div>
            </section>

            <section id="hot-breaker" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Hot Breaker or Wires</h2>
              <p className="text-white/80 mb-4">
                Warm is normal under load. Hot is not. Use an infrared thermometer to quantify.
              </p>
              <div className="bg-orange-900/30 rounded-xl p-6 my-6">
                <h3 className="font-semibold text-orange-400 mb-2">Temperature Guidelines</h3>
                <ul className="text-white/70 text-sm space-y-1">
                  <li>• <strong>Normal:</strong> Up to 50°F (28°C) above ambient</li>
                  <li>• <strong>Investigate:</strong> 50-70°F (28-39°C) above ambient</li>
                  <li>• <strong>Serious:</strong> Over 70°F (39°C) above ambient - address immediately</li>
                </ul>
              </div>
              <h3 className="text-xl font-semibold mt-6 mb-3">Common Causes:</h3>
              <ul className="list-disc list-inside text-white/70 space-y-2 mb-4">
                <li><strong>Loose connection</strong> - High resistance creates heat</li>
                <li><strong>Overloaded circuit</strong> - Current too high for wire/breaker size</li>
                <li><strong>Undersized wire</strong> - Wire gauge too small for the load</li>
                <li><strong>Double-tapped breaker</strong> - Two wires on a single-rated breaker terminal</li>
                <li><strong>Wrong breaker type</strong> - Breaker doesn't match panel manufacturer</li>
              </ul>
            </section>

            <section id="flickering" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Flickering Lights</h2>
              <p className="text-white/80 mb-4">
                Flickering can indicate problems ranging from minor to serious.
              </p>
              <div className="space-y-4 my-6">
                <div className="bg-white/5 rounded-xl p-4">
                  <h4 className="font-semibold text-white">Single Circuit Flicker</h4>
                  <p className="text-white/60 text-sm mt-1">Loose connection on that circuit, bad switch, or failing fixture.</p>
                  <p className="text-green-400 text-sm mt-2"><strong>Solution:</strong> Check connections at fixture, switch, and panel. Tighten or replace as needed.</p>
                </div>
                <div className="bg-white/5 rounded-xl p-4">
                  <h4 className="font-semibold text-white">Whole-House Flicker</h4>
                  <p className="text-white/60 text-sm mt-1">Problem at the service - loose main connections, meter base issues, or utility problem.</p>
                  <p className="text-green-400 text-sm mt-2"><strong>Solution:</strong> Check main breaker connections. If secure, contact utility to check their side.</p>
                </div>
                <div className="bg-white/5 rounded-xl p-4">
                  <h4 className="font-semibold text-white">Flicker When Large Load Starts</h4>
                  <p className="text-white/60 text-sm mt-1">Normal voltage dip when motors start (AC, well pump). Excessive flicker suggests undersized service or high-resistance connection.</p>
                  <p className="text-green-400 text-sm mt-2"><strong>Solution:</strong> Check voltage at panel during motor start. Should be within 5% of nominal.</p>
                </div>
              </div>
            </section>

            <section id="afci-trips" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">AFCI Breaker Nuisance Tripping</h2>
              <p className="text-white/80 mb-4">
                AFCI breakers can trip on electrical noise that isn't actually dangerous. Common culprits:
              </p>
              <ul className="list-disc list-inside text-white/70 space-y-2 mb-4">
                <li><strong>Treadmills and vacuums</strong> - Motor brush arcing</li>
                <li><strong>Older fluorescent ballasts</strong> - Electrical noise</li>
                <li><strong>Some LED dimmers</strong> - Incompatible dimmer/LED combination</li>
                <li><strong>Shared neutral (MWBC)</strong> - Improperly wired multiwire branch circuit</li>
                <li><strong>Loose connections</strong> - Actual arcing that should be fixed</li>
              </ul>
              <div className="bg-purple-900/30 rounded-xl p-6 my-6">
                <h3 className="font-semibold text-purple-400 mb-2">Troubleshooting Steps</h3>
                <ol className="list-decimal list-inside text-white/70 text-sm space-y-1">
                  <li>Identify what was running when it tripped</li>
                  <li>Unplug suspect devices one at a time</li>
                  <li>Check all connections on the circuit</li>
                  <li>Verify neutral is not shared with other circuits</li>
                  <li>Try a different brand AFCI breaker (they have different sensitivities)</li>
                </ol>
              </div>
            </section>

            <section id="gfci-trips" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">GFCI Breaker Tripping</h2>
              <p className="text-white/80 mb-4">
                GFCI devices trip when current on hot doesn't equal current on neutral (indicating leakage to ground).
              </p>
              <h3 className="text-xl font-semibold mt-6 mb-3">Common Causes:</h3>
              <ul className="list-disc list-inside text-white/70 space-y-2 mb-4">
                <li><strong>Moisture</strong> - Water in boxes, fixtures, or conduit</li>
                <li><strong>Damaged insulation</strong> - Current leaking to ground</li>
                <li><strong>Neutral-ground contact downstream</strong> - Bootleg ground or miswiring</li>
                <li><strong>Long cable runs</strong> - Capacitive leakage on very long circuits</li>
                <li><strong>Faulty appliance</strong> - Internal ground fault in connected equipment</li>
              </ul>
              <p className="text-white/80">
                <strong>Test method:</strong> Disconnect all loads. If GFCI holds, reconnect loads one at a time. If it trips with no load, check wiring for neutral-ground faults.
              </p>
            </section>

            <section id="burning-smell" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Burning Smell from Panel</h2>
              <div className="bg-red-900/30 border border-red-500/30 rounded-xl p-6 my-6">
                <h3 className="font-semibold text-red-400 mb-2">This is an Emergency</h3>
                <p className="text-white/70">
                  A burning smell indicates overheating that could lead to fire. De-energize the panel immediately if safe to do so. Do not re-energize until the cause is found and repaired.
                </p>
              </div>
              <h3 className="text-xl font-semibold mt-6 mb-3">Likely Causes:</h3>
              <ul className="list-disc list-inside text-white/70 space-y-2 mb-4">
                <li>Severely overheated connection (arcing)</li>
                <li>Melted wire insulation</li>
                <li>Overloaded bus bars</li>
                <li>Failed breaker</li>
              </ul>
              <p className="text-white/80">
                After de-energizing, inspect all connections visually. Look for discoloration, melted plastic, or charring. All damaged components must be replaced before re-energizing.
              </p>
            </section>

            {/* CTA Section */}
            <section className="bg-gradient-to-r from-purple-900/30 to-cyan-900/30 rounded-2xl p-8 my-12">
              <h2 className="text-2xl font-display font-bold mb-4 text-center">
                Get Troubleshooting Help On-Site
              </h2>
              <p className="text-white/70 mb-6 text-center">
                Ampora's AI assistant can help you diagnose electrical problems. Describe the symptoms and get step-by-step troubleshooting guidance.
              </p>
              <div className="flex justify-center">
                <a
                  href="https://apps.apple.com/us/app/ampora/id6753693522"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-white text-black font-semibold rounded-full hover:bg-white/90 transition-colors"
                >
                  Download Ampora Free
                </a>
              </div>
            </section>

            {/* Related Articles */}
            <section className="mt-12">
              <h2 className="text-2xl font-display font-bold mb-6">Related Articles</h2>
              <div className="grid md:grid-cols-2 gap-4">
                <Link href="/blog/electrical-inspection-checklist" className="bg-white/5 hover:bg-white/10 rounded-xl p-6 transition-colors">
                  <span className="text-green-400 text-sm">Inspections</span>
                  <h3 className="font-semibold mt-2">Electrical Inspection Checklist</h3>
                </Link>
                <Link href="/blog/nec-article-210-branch-circuits-guide" className="bg-white/5 hover:bg-white/10 rounded-xl p-6 transition-colors">
                  <span className="text-purple-400 text-sm">NEC Code</span>
                  <h3 className="font-semibold mt-2">NEC Article 210: Branch Circuits Guide</h3>
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
