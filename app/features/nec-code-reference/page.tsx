import { Metadata } from "next";
import Link from "next/link";
import { BreadcrumbJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "NEC Code Reference | National Electrical Code 2023 Lookup App",
  description: "Free NEC code reference app for electricians. Search National Electrical Code articles, tables, and requirements. NEC 2023 compliant with quick lookup and bookmarks.",
  keywords: [
    "NEC code",
    "NEC code lookup",
    "NEC reference",
    "NEC 2023",
    "National Electrical Code",
    "electrical code reference",
    "NEC code book",
    "NEC app",
    "electrical code lookup",
    "NEC tables",
    "NEC articles",
    "electrical code app",
    "NEC search",
    "NEC code search",
    "NFPA 70"
  ],
  alternates: {
    canonical: "https://amporalabs.com/features/nec-code-reference",
  },
  openGraph: {
    title: "NEC Code Reference | NEC 2023 Lookup - Ampora",
    description: "Search NEC code articles and tables instantly. Free National Electrical Code reference app for electricians.",
    url: "https://amporalabs.com/features/nec-code-reference",
    type: "website",
  },
};

export default function NECCodeReferencePage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "https://amporalabs.com" },
          { name: "Features", url: "https://amporalabs.com/features" },
          { name: "NEC Code Reference", url: "https://amporalabs.com/features/nec-code-reference" },
        ]}
      />

      <article className="max-w-4xl mx-auto px-6 py-12">
        {/* Breadcrumb */}
        <nav className="text-sm text-white/60 mb-8">
          <Link href="/" className="hover:text-white">Home</Link>
          <span className="mx-2">/</span>
          <span className="text-white">NEC Code Reference</span>
        </nav>

        {/* Hero Section */}
        <header className="mb-12">
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">
            NEC Code Reference
          </h1>
          <p className="text-xl text-white/70 mb-8">
            Instant access to National Electrical Code articles, tables, and requirements. Searchable NEC 2023 reference designed for the field.
          </p>
          <a
            href="https://apps.apple.com/us/app/ampora/id6753693522"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-purple-600 text-white font-semibold rounded-full hover:bg-purple-500 transition-colors"
          >
            Access NEC Reference
          </a>
        </header>

        {/* What is NEC */}
        <section className="mb-12">
          <h2 className="text-2xl font-display font-bold mb-4">What is the NEC?</h2>
          <p className="text-white/80 mb-4">
            The <strong>National Electrical Code (NEC)</strong>, also known as NFPA 70, is the standard for safe electrical installation in the United States. Published by the National Fire Protection Association, the NEC is updated every three years and adopted by most states and municipalities.
          </p>
          <p className="text-white/80">
            Electricians must know and follow NEC requirements for every installation. Ampora provides quick, searchable access to NEC articles and tables right on your phone - no bulky code book required.
          </p>
        </section>

        {/* NEC Structure */}
        <section className="mb-12">
          <h2 className="text-2xl font-display font-bold mb-4">NEC Structure Overview</h2>
          <div className="space-y-3">
            <div className="bg-white/5 rounded-xl p-4">
              <h3 className="font-semibold text-purple-400">Chapter 1: General (Articles 90-110)</h3>
              <p className="text-white/70 text-sm">Scope, definitions, and general requirements for installations</p>
            </div>
            <div className="bg-white/5 rounded-xl p-4">
              <h3 className="font-semibold text-purple-400">Chapter 2: Wiring & Protection (Articles 200-285)</h3>
              <p className="text-white/70 text-sm">Branch circuits, feeders, overcurrent protection, grounding</p>
            </div>
            <div className="bg-white/5 rounded-xl p-4">
              <h3 className="font-semibold text-purple-400">Chapter 3: Wiring Methods (Articles 300-399)</h3>
              <p className="text-white/70 text-sm">Conduit, cable, raceways, boxes, and enclosures</p>
            </div>
            <div className="bg-white/5 rounded-xl p-4">
              <h3 className="font-semibold text-purple-400">Chapter 4: Equipment (Articles 400-490)</h3>
              <p className="text-white/70 text-sm">Switches, receptacles, luminaires, appliances, HVAC</p>
            </div>
            <div className="bg-white/5 rounded-xl p-4">
              <h3 className="font-semibold text-purple-400">Chapter 5: Special Occupancies (Articles 500-590)</h3>
              <p className="text-white/70 text-sm">Hazardous locations, healthcare, assembly, temporary wiring</p>
            </div>
            <div className="bg-white/5 rounded-xl p-4">
              <h3 className="font-semibold text-purple-400">Chapter 6: Special Equipment (Articles 600-695)</h3>
              <p className="text-white/70 text-sm">Signs, electric vehicles, pools, generators, fire pumps</p>
            </div>
            <div className="bg-white/5 rounded-xl p-4">
              <h3 className="font-semibold text-purple-400">Chapter 7: Special Conditions (Articles 700-770)</h3>
              <p className="text-white/70 text-sm">Emergency systems, standby power, fire alarm, fiber optics</p>
            </div>
            <div className="bg-white/5 rounded-xl p-4">
              <h3 className="font-semibold text-purple-400">Chapter 8: Communications (Articles 800-840)</h3>
              <p className="text-white/70 text-sm">Communications circuits, CATV, network-powered broadband</p>
            </div>
            <div className="bg-white/5 rounded-xl p-4">
              <h3 className="font-semibold text-purple-400">Chapter 9: Tables</h3>
              <p className="text-white/70 text-sm">Conductor properties, conduit fill, AC resistance, etc.</p>
            </div>
          </div>
        </section>

        {/* Key NEC Articles */}
        <section className="mb-12">
          <h2 className="text-2xl font-display font-bold mb-4">Most-Referenced NEC Articles</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-white/20">
                  <th className="py-3 px-4 text-white/60 font-medium">Article</th>
                  <th className="py-3 px-4 text-white/60 font-medium">Topic</th>
                </tr>
              </thead>
              <tbody className="text-white/80">
                <tr className="border-b border-white/10">
                  <td className="py-3 px-4 font-semibold">210</td>
                  <td className="py-3 px-4">Branch Circuits</td>
                </tr>
                <tr className="border-b border-white/10">
                  <td className="py-3 px-4 font-semibold">220</td>
                  <td className="py-3 px-4">Branch-Circuit, Feeder, and Service Load Calculations</td>
                </tr>
                <tr className="border-b border-white/10">
                  <td className="py-3 px-4 font-semibold">230</td>
                  <td className="py-3 px-4">Services</td>
                </tr>
                <tr className="border-b border-white/10">
                  <td className="py-3 px-4 font-semibold">240</td>
                  <td className="py-3 px-4">Overcurrent Protection</td>
                </tr>
                <tr className="border-b border-white/10">
                  <td className="py-3 px-4 font-semibold">250</td>
                  <td className="py-3 px-4">Grounding and Bonding</td>
                </tr>
                <tr className="border-b border-white/10">
                  <td className="py-3 px-4 font-semibold">300</td>
                  <td className="py-3 px-4">General Requirements for Wiring Methods</td>
                </tr>
                <tr className="border-b border-white/10">
                  <td className="py-3 px-4 font-semibold">310</td>
                  <td className="py-3 px-4">Conductors for General Wiring</td>
                </tr>
                <tr className="border-b border-white/10">
                  <td className="py-3 px-4 font-semibold">314</td>
                  <td className="py-3 px-4">Outlet, Device, Pull, and Junction Boxes</td>
                </tr>
                <tr className="border-b border-white/10">
                  <td className="py-3 px-4 font-semibold">406</td>
                  <td className="py-3 px-4">Receptacles, Cord Connectors, and Attachment Plugs</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-semibold">430</td>
                  <td className="py-3 px-4">Motors, Motor Circuits, and Controllers</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Important Tables */}
        <section className="mb-12">
          <h2 className="text-2xl font-display font-bold mb-4">Essential NEC Tables</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-white/5 rounded-xl p-4">
              <h3 className="font-semibold text-purple-400 mb-1">Table 310.16</h3>
              <p className="text-white/70 text-sm">Conductor ampacities for 0-2000V</p>
            </div>
            <div className="bg-white/5 rounded-xl p-4">
              <h3 className="font-semibold text-purple-400 mb-1">Table 220.42</h3>
              <p className="text-white/70 text-sm">Lighting load demand factors</p>
            </div>
            <div className="bg-white/5 rounded-xl p-4">
              <h3 className="font-semibold text-purple-400 mb-1">Table 220.55</h3>
              <p className="text-white/70 text-sm">Electric range demand factors</p>
            </div>
            <div className="bg-white/5 rounded-xl p-4">
              <h3 className="font-semibold text-purple-400 mb-1">Table 250.122</h3>
              <p className="text-white/70 text-sm">Equipment grounding conductor sizing</p>
            </div>
            <div className="bg-white/5 rounded-xl p-4">
              <h3 className="font-semibold text-purple-400 mb-1">Table 430.52</h3>
              <p className="text-white/70 text-sm">Motor short-circuit protection</p>
            </div>
            <div className="bg-white/5 rounded-xl p-4">
              <h3 className="font-semibold text-purple-400 mb-1">Table 430.250</h3>
              <p className="text-white/70 text-sm">Three-phase motor FLC values</p>
            </div>
            <div className="bg-white/5 rounded-xl p-4">
              <h3 className="font-semibold text-purple-400 mb-1">Chapter 9, Table 4</h3>
              <p className="text-white/70 text-sm">Conduit dimensions and areas</p>
            </div>
            <div className="bg-white/5 rounded-xl p-4">
              <h3 className="font-semibold text-purple-400 mb-1">Chapter 9, Table 5</h3>
              <p className="text-white/70 text-sm">Conductor dimensions and areas</p>
            </div>
          </div>
        </section>

        {/* App Features */}
        <section className="mb-12">
          <h2 className="text-2xl font-display font-bold mb-4">Ampora NEC Reference Features</h2>
          <div className="space-y-4">
            <div className="flex gap-4 items-start">
              <div className="w-12 h-12 bg-purple-600/20 rounded-xl flex items-center justify-center text-2xl shrink-0">🔍</div>
              <div>
                <h3 className="font-semibold mb-1">Quick Search</h3>
                <p className="text-white/70 text-sm">Search by article number, keyword, or topic. Find what you need in seconds.</p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <div className="w-12 h-12 bg-purple-600/20 rounded-xl flex items-center justify-center text-2xl shrink-0">📊</div>
              <div>
                <h3 className="font-semibold mb-1">Interactive Tables</h3>
                <p className="text-white/70 text-sm">All NEC tables with easy lookup. No more flipping pages.</p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <div className="w-12 h-12 bg-purple-600/20 rounded-xl flex items-center justify-center text-2xl shrink-0">📱</div>
              <div>
                <h3 className="font-semibold mb-1">Mobile Optimized</h3>
                <p className="text-white/70 text-sm">Designed for field use. Works great on your phone.</p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <div className="w-12 h-12 bg-purple-600/20 rounded-xl flex items-center justify-center text-2xl shrink-0">🤖</div>
              <div>
                <h3 className="font-semibold mb-1">AI Integration</h3>
                <p className="text-white/70 text-sm">Ask questions about code requirements and get instant answers with article references.</p>
              </div>
            </div>
          </div>
        </section>

        {/* App CTA */}
        <section className="bg-gradient-to-r from-purple-900/30 to-cyan-900/30 rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-display font-bold mb-4">
            NEC Code in Your Pocket
          </h2>
          <p className="text-white/70 mb-6">
            Stop carrying the heavy code book. Get instant NEC lookup right on your phone with Ampora.
          </p>
          <a
            href="https://apps.apple.com/us/app/ampora/id6753693522"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-black font-semibold rounded-full hover:bg-white/90 transition-colors"
          >
            Download Free on App Store
          </a>
        </section>
      </article>
    </>
  );
}
