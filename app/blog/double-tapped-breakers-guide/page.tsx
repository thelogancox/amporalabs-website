import { Metadata } from "next";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import { BlogPostingJsonLd, BreadcrumbJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Double Tapped Breakers: Why They're Dangerous & How to Fix Them",
  description: "Complete guide to double tapped breakers — why two wires on one breaker is a fire hazard and NEC code violation. Learn how home inspectors flag double taps, which breakers allow double lugging, and proper fixes including pigtailing, tandem breakers, and sub-panels.",
  keywords: [
    "double tapped breaker",
    "two wires one breaker",
    "double lugged breaker",
    "double tap electrical",
    "breaker with two wires",
    "double tapped breaker fix",
    "home inspection double tap",
    "circuit breaker double tap",
    "double tapped panel",
    "double tap code violation"
  ],
  alternates: {
    canonical: "https://amporalabs.com/blog/double-tapped-breakers-guide",
  },
  openGraph: {
    title: "Double Tapped Breakers: Why They're Dangerous & How to Fix Them - Ampora",
    description: "Learn why double tapped breakers are dangerous, how to identify them, which breakers allow two wires, and the proper fixes to make your panel safe and code-compliant.",
    url: "https://amporalabs.com/blog/double-tapped-breakers-guide",
    type: "article",
    publishedTime: "2026-03-04",
  },
};

function HeroIllustration() {
  return (
    <svg viewBox="0 0 400 180" className="w-full h-40 md:h-48" aria-label="Diagram comparing a double tapped breaker with two wires versus a properly wired single connection">
      {/* Background */}
      <rect x="10" y="10" width="380" height="160" rx="4" fill="#1f2937" stroke="#374151" strokeWidth="1"/>

      {/* Left Side - Double Tap (Bad) */}
      <g transform="translate(30, 20)">
        <text x="70" y="12" textAnchor="middle" fill="#ef4444" fontSize="8" fontWeight="bold">DOUBLE TAP (WRONG)</text>

        {/* Breaker Body */}
        <rect x="30" y="22" width="80" height="100" rx="3" fill="#374151" stroke="#ef4444" strokeWidth="1.5"/>
        <rect x="38" y="30" width="64" height="16" rx="2" fill="#1f2937" stroke="#6b7280" strokeWidth="1"/>
        <text x="70" y="42" textAnchor="middle" fill="#9ca3af" fontSize="7" fontWeight="bold">20A</text>

        {/* Toggle */}
        <rect x="58" y="52" width="24" height="14" rx="2" fill="#ef4444" fillOpacity="0.3" stroke="#ef4444" strokeWidth="1"/>
        <text x="70" y="62" textAnchor="middle" fill="#ef4444" fontSize="6" fontWeight="bold">ON</text>

        {/* Lug / Terminal */}
        <rect x="48" y="72" width="44" height="16" rx="2" fill="#78716c" stroke="#a8a29e" strokeWidth="1"/>
        <rect x="52" y="76" width="36" height="8" rx="1" fill="#57534e"/>

        {/* Wire 1 - going left */}
        <path d="M52 80 L20 80 L20 140" stroke="#ef4444" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
        <text x="10" y="148" fill="#ef4444" fontSize="5">Wire 1</text>

        {/* Wire 2 - going right, squeezed in */}
        <path d="M84 80 L110 80 L110 140" stroke="#f97316" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
        <text x="100" y="148" fill="#f97316" fontSize="5">Wire 2</text>

        {/* X mark */}
        <circle cx="70" cy="108" r="8" fill="none" stroke="#ef4444" strokeWidth="1.5"/>
        <line x1="65" y1="103" x2="75" y2="113" stroke="#ef4444" strokeWidth="2"/>
        <line x1="75" y1="103" x2="65" y2="113" stroke="#ef4444" strokeWidth="2"/>
      </g>

      {/* Divider */}
      <line x1="200" y1="25" x2="200" y2="160" stroke="#4b5563" strokeWidth="1" strokeDasharray="4,4"/>

      {/* Right Side - Proper Connection (Good) */}
      <g transform="translate(220, 20)">
        <text x="70" y="12" textAnchor="middle" fill="#22c55e" fontSize="8" fontWeight="bold">PROPER FIX (PIGTAIL)</text>

        {/* Breaker Body */}
        <rect x="30" y="22" width="80" height="100" rx="3" fill="#374151" stroke="#22c55e" strokeWidth="1.5"/>
        <rect x="38" y="30" width="64" height="16" rx="2" fill="#1f2937" stroke="#6b7280" strokeWidth="1"/>
        <text x="70" y="42" textAnchor="middle" fill="#9ca3af" fontSize="7" fontWeight="bold">20A</text>

        {/* Toggle */}
        <rect x="58" y="52" width="24" height="14" rx="2" fill="#22c55e" fillOpacity="0.3" stroke="#22c55e" strokeWidth="1"/>
        <text x="70" y="62" textAnchor="middle" fill="#22c55e" fontSize="6" fontWeight="bold">ON</text>

        {/* Lug / Terminal */}
        <rect x="48" y="72" width="44" height="16" rx="2" fill="#78716c" stroke="#a8a29e" strokeWidth="1"/>
        <rect x="52" y="76" width="36" height="8" rx="1" fill="#57534e"/>

        {/* Single pigtail wire from breaker */}
        <path d="M70 88 L70 110" stroke="#22c55e" strokeWidth="2.5" fill="none" strokeLinecap="round"/>

        {/* Wire nut */}
        <polygon points="60,110 80,110 74,125 66,125" fill="#f59e0b" stroke="#d97706" strokeWidth="1"/>
        <text x="70" y="120" textAnchor="middle" fill="#78350f" fontSize="5" fontWeight="bold">WN</text>

        {/* Wire 1 from wire nut */}
        <path d="M66 125 L30 125 L30 150" stroke="#22c55e" strokeWidth="2" fill="none" strokeLinecap="round"/>
        <text x="20" y="158" fill="#22c55e" fontSize="5">Wire 1</text>

        {/* Wire 2 from wire nut */}
        <path d="M74 125 L110 125 L110 150" stroke="#22c55e" strokeWidth="2" fill="none" strokeLinecap="round"/>
        <text x="100" y="158" fill="#22c55e" fontSize="5">Wire 2</text>

        {/* Checkmark */}
        <circle cx="70" cy="143" r="7" fill="none" stroke="#22c55e" strokeWidth="1.5"/>
        <polyline points="65,143 68,147 76,139" fill="none" stroke="#22c55e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </g>
    </svg>
  );
}

export default function DoubleTappedBreakersGuidePage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navigation />
      <div className="pt-20">
        <BreadcrumbJsonLd
          items={[
            { name: "Home", url: "https://amporalabs.com" },
            { name: "Blog", url: "https://amporalabs.com/blog" },
            { name: "Double Tapped Breakers Guide", url: "https://amporalabs.com/blog/double-tapped-breakers-guide" },
          ]}
        />
        <BlogPostingJsonLd
          headline="Double Tapped Breakers: Why They're Dangerous & How to Fix Them"
          description="Complete guide to double tapped breakers covering why two wires on one breaker is a fire hazard, NEC 110.14 requirements, home inspection implications, and proper fixes including pigtailing, tandem breakers, and sub-panels."
          datePublished="2026-03-04"
          dateModified="2026-03-04"
          url="https://amporalabs.com/blog/double-tapped-breakers-guide"
          wordCount={4800}
          keywords={["double tapped breaker", "two wires one breaker", "double lugged breaker", "NEC 110.14", "pigtail breaker fix"]}
        />

        <article className="max-w-4xl mx-auto px-6 py-12">
          {/* Breadcrumb */}
          <nav className="text-sm text-white/60 mb-8">
            <Link href="/" className="hover:text-white">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/blog" className="hover:text-white">Blog</Link>
            <span className="mx-2">/</span>
            <span className="text-white">Double Tapped Breakers Guide</span>
          </nav>

          {/* Article Header */}
          <header className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <span className="px-3 py-1 bg-red-600/20 text-red-300 text-sm font-medium rounded-full">
                Troubleshooting
              </span>
              <span className="text-white/40 text-sm">18 min read</span>
              <span className="text-white/40 text-sm">March 4, 2026</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6 leading-tight">
              Double Tapped Breakers: Why They&apos;re Dangerous &amp; How to Fix Them
            </h1>
            <p className="text-xl text-white/70">
              A double tapped breaker &mdash; two wires connected to a single circuit breaker terminal &mdash; is one of the most common defects found during home inspections and one of the leading causes of electrical fires from loose connections. This guide explains why double taps are dangerous, what the NEC says, which breakers actually allow two conductors, and the proper fixes every electrician should know.
            </p>
          </header>

          <div className="mb-12 bg-gradient-to-br from-red-900/20 to-cyan-900/20 rounded-2xl p-6 border border-white/10">
            <HeroIllustration />
          </div>

          {/* Safety Warning */}
          <div className="bg-red-900/40 border-2 border-red-500/50 rounded-2xl p-6 mb-12">
            <div className="flex items-start gap-4">
              <div className="text-3xl">&#9888;</div>
              <div>
                <h3 className="font-display font-bold text-lg mb-2 text-red-400">Safety Warning</h3>
                <p className="text-white/80 text-sm">
                  Working inside an electrical panel is dangerous and can result in electrocution, arc flash, or death. Only qualified electricians should open and work inside electrical panels. Always de-energize circuits before making any modifications. If you are a homeowner and suspect a double tapped breaker, contact a licensed electrician for inspection and repair.
                </p>
              </div>
            </div>
          </div>

          {/* Table of Contents */}
          <div className="bg-white/5 rounded-2xl p-6 mb-12">
            <h2 className="font-display font-bold mb-4">In This Guide</h2>
            <ul className="space-y-2 text-white/70">
              <li><a href="#what-is-double-tap" className="hover:text-purple-400">What Is a Double Tapped Breaker?</a></li>
              <li><a href="#why-dangerous" className="hover:text-purple-400">Why Double Taps Are Dangerous</a></li>
              <li><a href="#nec-requirements" className="hover:text-purple-400">NEC Requirements (Section 110.14)</a></li>
              <li><a href="#home-inspection" className="hover:text-purple-400">Home Inspection Implications</a></li>
              <li><a href="#breakers-that-allow" className="hover:text-purple-400">Which Breakers Allow Double Taps?</a></li>
              <li><a href="#proper-fixes" className="hover:text-purple-400">Proper Fixes for Double Tapped Breakers</a></li>
              <li><a href="#how-to-identify" className="hover:text-purple-400">How to Identify Double Taps</a></li>
              <li><a href="#insurance-real-estate" className="hover:text-purple-400">Insurance and Real Estate Implications</a></li>
              <li><a href="#related-panel-issues" className="hover:text-purple-400">Common Related Panel Issues</a></li>
              <li><a href="#faq" className="hover:text-purple-400">Frequently Asked Questions</a></li>
            </ul>
          </div>

          {/* Article Content */}
          <div className="prose prose-invert prose-lg max-w-none">

            <section id="what-is-double-tap" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">What Is a Double Tapped Breaker?</h2>
              <p className="text-white/80 mb-4">
                A <strong>double tapped breaker</strong> (also called a &ldquo;double lugged breaker&rdquo; or &ldquo;double tap&rdquo;) occurs when <strong>two or more wires are connected to a single circuit breaker terminal</strong> that is only rated and listed for one conductor. The terminal lug on most residential circuit breakers is designed to securely clamp a single wire. When a second wire is forced under the same terminal screw, neither wire can be properly secured.
              </p>
              <p className="text-white/80 mb-4">
                Double taps typically happen when a homeowner or unqualified person adds a new circuit to the panel and, rather than installing a new breaker, simply shoves the additional wire under an existing breaker&apos;s terminal. They also occur when a panel runs out of breaker spaces and someone takes a shortcut instead of installing a <Link href="/blog/sub-panel-installation-guide" className="text-purple-400 hover:text-purple-300">sub-panel</Link> or using tandem breakers.
              </p>

              <div className="bg-white/5 rounded-xl p-6 my-6">
                <h4 className="font-semibold text-cyan-400 mb-3">Double Tap at a Glance</h4>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                  <div>
                    <p className="text-2xl font-bold text-red-400">#1</p>
                    <p className="text-white/60 text-sm">Most common panel defect in home inspections</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-orange-400">2x</p>
                    <p className="text-white/60 text-sm">Wires in a terminal rated for one</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-yellow-400">110.14</p>
                    <p className="text-white/60 text-sm">NEC section governing connections</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-red-500">Fire</p>
                    <p className="text-white/60 text-sm">Leading risk from loose connections</p>
                  </div>
                </div>
              </div>

              <p className="text-white/80 mb-4">
                It is important to understand that a double tap is not the same as a <strong>tandem breaker</strong> (also called a &ldquo;duplex&rdquo; or &ldquo;cheater&rdquo; breaker). A tandem breaker is a specially designed breaker that fits into a single panel slot but provides two independent circuits, each with its own terminal for a single wire. Tandem breakers, when used in panels listed to accept them, are a code-compliant solution.
              </p>
            </section>

            <section id="why-dangerous" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Why Double Taps Are Dangerous</h2>
              <p className="text-white/80 mb-4">
                The danger of a double tapped breaker comes down to physics: breaker terminals are machined to clamp <strong>one conductor of a specific size range</strong>. When two wires are forced under the same terminal, several serious problems arise.
              </p>

              <div className="grid md:grid-cols-2 gap-6 my-6">
                <div className="bg-red-900/30 rounded-xl p-6">
                  <h3 className="font-semibold text-red-400 mb-3">Loose Connections</h3>
                  <ul className="text-white/60 text-sm space-y-1">
                    <li><strong>Uneven clamping:</strong> Terminal cannot apply equal pressure to both wires</li>
                    <li><strong>One wire slips:</strong> Smaller gauge wire is pushed aside by the larger</li>
                    <li><strong>Thermal cycling:</strong> Heat expansion/contraction loosens connection over time</li>
                    <li><strong>Vibration:</strong> Normal panel vibration works wires free</li>
                    <li><strong>Different gauges:</strong> Mixing 14 AWG and 12 AWG guarantees one is loose</li>
                  </ul>
                </div>
                <div className="bg-orange-900/30 rounded-xl p-6">
                  <h3 className="font-semibold text-orange-400 mb-3">Fire &amp; Damage Risks</h3>
                  <ul className="text-white/60 text-sm space-y-1">
                    <li><strong>Arcing:</strong> Loose connections create intermittent arcs generating extreme heat</li>
                    <li><strong>Overheating:</strong> High-resistance connections heat the breaker and surrounding wiring</li>
                    <li><strong>Melted insulation:</strong> Heat degrades wire insulation, exposing bare conductors</li>
                    <li><strong>Breaker damage:</strong> Overheated terminals damage the breaker internals</li>
                    <li><strong>Panel fire:</strong> Sustained arcing or overheating can ignite panel components</li>
                  </ul>
                </div>
              </div>

              <div className="bg-white/5 rounded-xl p-6 my-6">
                <h4 className="font-semibold text-white mb-3">How Loose Connections Cause Fires</h4>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <span className="bg-red-600 text-white text-xs font-bold px-2 py-0.5 rounded-full mt-0.5">1</span>
                    <p className="text-white/70 text-sm">Two wires under one terminal &mdash; the terminal cannot fully clamp both conductors</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="bg-red-600 text-white text-xs font-bold px-2 py-0.5 rounded-full mt-0.5">2</span>
                    <p className="text-white/70 text-sm">Over time, thermal cycling and vibration work one wire loose, creating a high-resistance connection</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="bg-red-600 text-white text-xs font-bold px-2 py-0.5 rounded-full mt-0.5">3</span>
                    <p className="text-white/70 text-sm">The high-resistance point generates heat whenever current flows &mdash; more current equals more heat</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="bg-red-600 text-white text-xs font-bold px-2 py-0.5 rounded-full mt-0.5">4</span>
                    <p className="text-white/70 text-sm">Intermittent arcing begins at the loose connection, producing temperatures that can exceed <strong>10,000&deg;F</strong></p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="bg-red-600 text-white text-xs font-bold px-2 py-0.5 rounded-full mt-0.5">5</span>
                    <p className="text-white/70 text-sm">Wire insulation melts, breaker components degrade, and surrounding materials can ignite</p>
                  </div>
                </div>
              </div>

              <p className="text-white/80 mb-4">
                The insidious aspect of double taps is that they often work <strong>without immediate problems</strong>. A double tap can function for months or even years before the connection loosens enough to cause arcing. By the time symptoms appear &mdash; flickering lights, burning smell, tripped breakers, or discolored wiring &mdash; significant damage may have already occurred inside the panel. For deeper <Link href="/blog/electrical-panel-troubleshooting" className="text-purple-400 hover:text-purple-300">panel troubleshooting techniques</Link>, see our dedicated guide.
              </p>
            </section>

            <section id="nec-requirements" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">NEC Requirements (Section 110.14)</h2>
              <p className="text-white/80 mb-4">
                The National Electrical Code addresses double tapped breakers primarily through <strong>NEC Section 110.14 &mdash; Electrical Connections</strong>. This section establishes the fundamental rule that all electrical connections must be made in a manner that is both safe and in accordance with the equipment&apos;s listing and labeling.
              </p>

              <div className="bg-purple-900/30 rounded-xl p-6 my-6">
                <h4 className="font-semibold text-purple-400 mb-3">Key NEC Sections for Double Taps</h4>
                <ul className="text-white/70 space-y-2 text-sm">
                  <li><strong>110.14(A) &mdash; Terminals:</strong> Connection of conductors to terminal parts shall ensure a thoroughly good connection without damaging the conductors. Terminals for more than one conductor shall be so identified.</li>
                  <li><strong>110.14(B) &mdash; Splices:</strong> Conductors shall be spliced or joined with splicing devices identified for the use or by brazing, welding, or soldering with a fusible alloy.</li>
                  <li><strong>110.3(B) &mdash; Listed Equipment:</strong> Listed or labeled equipment shall be installed and used in accordance with any instructions included in the listing or labeling. If a breaker is listed for one wire, you cannot connect two.</li>
                  <li><strong>408.41 &mdash; Grounded Conductor Terminations:</strong> Each grounded (neutral) conductor shall terminate within the panelboard in an individual terminal that is not also used for another conductor (with specific exceptions).</li>
                </ul>
              </div>

              <p className="text-white/80 mb-4">
                The critical phrase in <strong>110.14(A)</strong> is: &ldquo;Terminals for more than one conductor shall be so identified.&rdquo; This means a breaker terminal <strong>must be specifically listed and marked</strong> for multiple conductors if you want to connect more than one wire. The vast majority of residential breakers are listed for a single conductor only. If the breaker&apos;s labeling or the manufacturer&apos;s documentation does not explicitly state it accepts two conductors, connecting two wires is a code violation.
              </p>

              <p className="text-white/80 mb-4">
                This requirement also ties into <Link href="/blog/nec-article-240-overcurrent-protection" className="text-purple-400 hover:text-purple-300">NEC Article 240 on overcurrent protection</Link>. A double tapped breaker can create a scenario where the breaker is protecting two separate circuits, and the total load may exceed the breaker&apos;s rating &mdash; an additional code violation beyond the connection issue itself.
              </p>

              <div className="bg-white/5 rounded-xl p-6 my-6">
                <h4 className="font-semibold text-cyan-400 mb-3">NEC 408.41 &mdash; Neutral Bar Double Taps</h4>
                <p className="text-white/70 mb-3">
                  Double taps on the <strong>neutral (grounded conductor) bus bar</strong> are also a code violation under NEC 408.41. Each neutral conductor must have its own dedicated terminal. This is a separate but related issue often found alongside breaker double taps. Note that <strong>equipment grounding conductors</strong> are permitted to share terminals under certain conditions per NEC 250.122, but neutral conductors are not.
                </p>
              </div>
            </section>

            <section id="home-inspection" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Home Inspection Implications</h2>
              <p className="text-white/80 mb-4">
                Double tapped breakers are one of the <strong>most frequently cited defects</strong> in residential home inspections. Home inspectors are trained to check every breaker terminal for multiple conductors, and this defect appears in a significant percentage of home inspection reports, particularly in older homes that have had circuits added over the years.
              </p>

              <div className="grid md:grid-cols-2 gap-6 my-6">
                <div className="bg-white/5 rounded-xl p-6">
                  <h3 className="font-semibold text-cyan-400 mb-3">What Inspectors Look For</h3>
                  <ul className="text-white/70 text-sm space-y-1">
                    <li>Multiple wires under any single breaker terminal</li>
                    <li>Multiple neutrals on a single neutral bar terminal</li>
                    <li>Signs of overheating: discolored wires, melted insulation</li>
                    <li>Mismatched wire gauges at the same terminal</li>
                    <li>Evidence of DIY wiring modifications</li>
                    <li>Breaker types that do not match the panel manufacturer</li>
                  </ul>
                </div>
                <div className="bg-white/5 rounded-xl p-6">
                  <h3 className="font-semibold text-orange-400 mb-3">Typical Inspector Report Language</h3>
                  <ul className="text-white/70 text-sm space-y-1">
                    <li>&ldquo;Double tapped breaker observed at [location]&rdquo;</li>
                    <li>&ldquo;Two conductors connected to a single-pole breaker terminal rated for one wire&rdquo;</li>
                    <li>&ldquo;Recommend evaluation and repair by a licensed electrician&rdquo;</li>
                    <li>&ldquo;Fire hazard &mdash; improper connection at panel&rdquo;</li>
                    <li>&ldquo;NEC violation: multiple conductors at breaker terminal&rdquo;</li>
                  </ul>
                </div>
              </div>

              <p className="text-white/80 mb-4">
                For a comprehensive overview of what electrical items inspectors evaluate, see our <Link href="/blog/electrical-inspection-checklist" className="text-purple-400 hover:text-purple-300">electrical inspection checklist</Link>. A double tap finding on an inspection report typically requires repair before a home sale closes, and the repair must be performed by a licensed electrician in most jurisdictions.
              </p>

              <div className="bg-orange-900/30 rounded-xl p-6 my-6">
                <h4 className="font-semibold text-orange-400 mb-3">Impact on Home Sales</h4>
                <p className="text-white/70 text-sm">
                  While a double tapped breaker is not typically a &ldquo;deal breaker&rdquo; in a real estate transaction, it is a <strong>safety concern that buyers and their agents will require to be corrected</strong>. The cost to fix is usually modest ($150&ndash;$500 depending on the repair method), but leaving it unaddressed can delay closings, cause buyers to request credits, or trigger further electrical evaluation requirements. Mortgage lenders and insurance companies may also flag this as a condition that must be resolved.
                </p>
              </div>
            </section>

            <section id="breakers-that-allow" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Which Breakers Allow Double Taps?</h2>
              <p className="text-white/80 mb-4">
                While <strong>most residential circuit breakers are rated for a single conductor only</strong>, there are a few notable exceptions. Some breakers are specifically listed, tested, and labeled to accept two conductors at a single terminal. It is critical to verify this by checking the breaker&apos;s labeling and the manufacturer&apos;s documentation &mdash; not by assumption.
              </p>

              <div className="overflow-x-auto my-6">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-white/20">
                      <th className="text-left py-3 px-4 text-white/60">Manufacturer / Series</th>
                      <th className="text-left py-3 px-4 text-white/60">Two-Wire Rating</th>
                      <th className="text-left py-3 px-4 text-white/60">Notes</th>
                    </tr>
                  </thead>
                  <tbody className="text-white/80">
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-semibold text-green-400">Square D Homeline (HOM)</td>
                      <td className="py-3 px-4 font-mono text-green-400">Yes &mdash; most models</td>
                      <td className="py-3 px-4 text-white/60">Look for marking on breaker body showing two-wire rating with accepted wire gauge combinations</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-semibold text-green-400">Square D QO (some models)</td>
                      <td className="py-3 px-4 font-mono text-yellow-400">Some models</td>
                      <td className="py-3 px-4 text-white/60">Not all QO breakers are rated for two wires &mdash; check specific model labeling</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-semibold text-red-400">Siemens</td>
                      <td className="py-3 px-4 font-mono text-red-400">No &mdash; single wire only</td>
                      <td className="py-3 px-4 text-white/60">Standard residential Siemens breakers are rated for one conductor</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-semibold text-red-400">Eaton BR</td>
                      <td className="py-3 px-4 font-mono text-red-400">No &mdash; single wire only</td>
                      <td className="py-3 px-4 text-white/60">Eaton/Cutler-Hammer BR series breakers accept one conductor only</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-semibold text-red-400">Eaton CH</td>
                      <td className="py-3 px-4 font-mono text-red-400">No &mdash; single wire only</td>
                      <td className="py-3 px-4 text-white/60">Eaton/Cutler-Hammer CH series breakers accept one conductor only</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-semibold text-red-400">GE</td>
                      <td className="py-3 px-4 font-mono text-red-400">No &mdash; single wire only</td>
                      <td className="py-3 px-4 text-white/60">Standard GE residential breakers are rated for one conductor</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="bg-yellow-900/30 rounded-xl p-6 my-6 border border-yellow-500/50">
                <h4 className="font-semibold text-yellow-400 mb-3">How to Verify Two-Wire Rating</h4>
                <ul className="text-white/70 space-y-2 text-sm">
                  <li><strong>Check the breaker label:</strong> Look for markings on the breaker body such as &ldquo;Rated for 2 wires&rdquo; or a diagram showing accepted wire combinations (e.g., &ldquo;1-#14 to 1-#8&rdquo; or &ldquo;2-#14 to 2-#10&rdquo;)</li>
                  <li><strong>Check the manufacturer&apos;s catalog:</strong> The product specification sheet will list the terminal&apos;s wire capacity</li>
                  <li><strong>Match wire gauges:</strong> Even on breakers rated for two wires, both conductors typically must be the <strong>same gauge</strong> &mdash; mixing 14 AWG and 12 AWG is usually not permitted</li>
                  <li><strong>When in doubt, pigtail:</strong> If you cannot definitively verify the two-wire rating, treat the breaker as single-wire and use a pigtail splice</li>
                </ul>
              </div>

              <p className="text-white/80 mb-4">
                Even when a breaker is rated for two conductors, many electricians prefer to use a pigtail method anyway. It provides a more reliable, cleaner connection and eliminates any ambiguity during future inspections.
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

            <section id="proper-fixes" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Proper Fixes for Double Tapped Breakers</h2>
              <p className="text-white/80 mb-4">
                There are several code-compliant methods for correcting a double tapped breaker, depending on the specific situation, available panel space, and budget. Here are the primary options, listed from simplest to most involved:
              </p>

              <div className="space-y-4 my-6">
                <div className="bg-green-900/20 rounded-xl p-6 border border-green-500/20">
                  <h3 className="font-semibold text-green-400 mb-2">Fix 1: Pigtail Splice (Most Common)</h3>
                  <p className="text-white/70 text-sm mb-3">
                    The most common and often simplest fix. Remove both wires from the breaker terminal. Connect the two wires along with a third short &ldquo;pigtail&rdquo; wire of the same gauge using an appropriately sized wire nut or approved splice connector. Then connect the single pigtail wire to the breaker terminal.
                  </p>
                  <div className="bg-white/5 rounded-lg p-4">
                    <h4 className="text-white text-sm font-semibold mb-2">Pigtail Procedure:</h4>
                    <ol className="text-white/60 text-sm space-y-1 list-decimal list-inside">
                      <li>De-energize the panel and verify with a voltage tester</li>
                      <li>Remove both wires from the breaker terminal</li>
                      <li>Cut a 6&ndash;8 inch pigtail of the same gauge wire (match the circuit wire gauge)</li>
                      <li>Strip approximately 3/4 inch of insulation from each wire end</li>
                      <li>Join all three wires (two original + pigtail) with an approved wire connector</li>
                      <li>Connect the single pigtail wire to the breaker terminal and torque to specification</li>
                      <li>Verify the splice is secure and no bare copper is exposed outside the connector</li>
                    </ol>
                  </div>
                  <p className="text-white/60 text-xs mt-3">
                    <strong>Cost:</strong> $50&ndash;$150 per occurrence (materials are minimal; cost is primarily labor)
                  </p>
                </div>

                <div className="bg-green-900/20 rounded-xl p-6 border border-green-500/20">
                  <h3 className="font-semibold text-green-400 mb-2">Fix 2: Install a Tandem (Duplex) Breaker</h3>
                  <p className="text-white/70 text-sm mb-3">
                    If the panel is listed to accept tandem breakers in certain positions, remove the single breaker and replace it with a tandem breaker. This provides two independent circuits in a single panel slot, each with its own dedicated terminal. Each wire gets its own breaker and terminal.
                  </p>
                  <ul className="text-white/60 text-sm space-y-1">
                    <li><strong>Check panel listing:</strong> Not all panels accept tandem breakers, and those that do often only allow them in specific slots (check the panel&apos;s label diagram)</li>
                    <li><strong>Match breaker to panel:</strong> The tandem breaker must be the correct brand and type for the panel</li>
                    <li><strong>Check circuit counts:</strong> Panels have a maximum number of circuits &mdash; adding a tandem must not exceed this limit</li>
                    <li><strong>Verify amperage:</strong> Ensure each circuit gets the correct amperage breaker for its wire gauge</li>
                  </ul>
                  <p className="text-white/60 text-xs mt-3">
                    <strong>Cost:</strong> $100&ndash;$250 (breaker cost + labor)
                  </p>
                </div>

                <div className="bg-green-900/20 rounded-xl p-6 border border-green-500/20">
                  <h3 className="font-semibold text-green-400 mb-2">Fix 3: Add a New Breaker (If Space Available)</h3>
                  <p className="text-white/70 text-sm mb-3">
                    If the panel has an open breaker space, simply remove one of the two wires from the double-tapped breaker and install a new, separate breaker for that circuit. This is the cleanest solution when panel space is available.
                  </p>
                  <ul className="text-white/60 text-sm space-y-1">
                    <li>Match the new breaker amperage to the wire gauge (e.g., 15A for 14 AWG, 20A for 12 AWG)</li>
                    <li>Use the correct breaker brand and type for the panel</li>
                    <li>Ensure the wire reaches the new breaker position &mdash; you may need to re-route the conductor</li>
                  </ul>
                  <p className="text-white/60 text-xs mt-3">
                    <strong>Cost:</strong> $100&ndash;$200 (breaker cost + labor)
                  </p>
                </div>

                <div className="bg-green-900/20 rounded-xl p-6 border border-green-500/20">
                  <h3 className="font-semibold text-green-400 mb-2">Fix 4: Install a Sub-Panel</h3>
                  <p className="text-white/70 text-sm mb-3">
                    When the main panel is completely full and no tandem breaker positions are available, installing a <Link href="/blog/sub-panel-installation-guide" className="text-purple-400 hover:text-purple-300">sub-panel</Link> may be the best long-term solution. A sub-panel is fed from the main panel and provides additional breaker spaces for current and future circuits.
                  </p>
                  <ul className="text-white/60 text-sm space-y-1">
                    <li>Requires a two-pole breaker in the main panel to feed the sub-panel</li>
                    <li>Provides 6&ndash;24+ additional circuit spaces depending on sub-panel size</li>
                    <li>A good investment if the home needs additional circuits or if multiple double taps exist</li>
                    <li>Sub-panel must have separate neutral and ground buses (for detached structures, per NEC 250.32)</li>
                  </ul>
                  <p className="text-white/60 text-xs mt-3">
                    <strong>Cost:</strong> $500&ndash;$1,500+ (materials + labor, depending on panel size and installation complexity)
                  </p>
                </div>
              </div>

              <div className="bg-red-900/30 rounded-xl p-6 my-6">
                <h4 className="font-semibold text-red-400 mb-3">What NOT to Do</h4>
                <ul className="text-white/70 space-y-2 text-sm">
                  <li><strong>Do not force two wires under a single-wire terminal</strong> and assume it will be fine</li>
                  <li><strong>Do not use a breaker from a different manufacturer</strong> to &ldquo;solve&rdquo; the problem &mdash; cross-brand breakers are not listed for the panel and create a different code violation</li>
                  <li><strong>Do not tape or solder wires together</strong> and land them as one conductor on the terminal</li>
                  <li><strong>Do not leave the double tap</strong> if an inspector has flagged it &mdash; it must be properly corrected</li>
                  <li><strong>Do not daisy-chain receptacles</strong> to avoid adding a breaker &mdash; each circuit still needs proper overcurrent protection</li>
                </ul>
              </div>
            </section>

            <section id="how-to-identify" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">How to Identify Double Taps</h2>
              <p className="text-white/80 mb-4">
                Identifying double tapped breakers requires a careful visual inspection of the electrical panel. Here is what to look for and what signs indicate there may be a problem.
              </p>

              <div className="space-y-4 my-6">
                <div className="bg-white/5 rounded-xl p-4 flex items-start gap-4">
                  <span className="bg-cyan-600 text-white text-sm font-bold px-3 py-1 rounded-full">1</span>
                  <div>
                    <p className="font-semibold text-white">Visual Inspection of Breaker Terminals</p>
                    <p className="text-white/60 text-sm">Open the panel cover (dead front) and examine every breaker terminal. Look for any terminal that has two or more wires entering it. This is immediately visible on most breakers. Count the wires at each breaker &mdash; there should be exactly one hot conductor per terminal on a standard breaker.</p>
                  </div>
                </div>
                <div className="bg-white/5 rounded-xl p-4 flex items-start gap-4">
                  <span className="bg-cyan-600 text-white text-sm font-bold px-3 py-1 rounded-full">2</span>
                  <div>
                    <p className="font-semibold text-white">Check the Neutral Bus Bar</p>
                    <p className="text-white/60 text-sm">Inspect the neutral bus bar for multiple white (neutral) conductors under a single terminal screw. Each neutral must have its own terminal. Double tapped neutrals are equally hazardous and equally common.</p>
                  </div>
                </div>
                <div className="bg-white/5 rounded-xl p-4 flex items-start gap-4">
                  <span className="bg-cyan-600 text-white text-sm font-bold px-3 py-1 rounded-full">3</span>
                  <div>
                    <p className="font-semibold text-white">Look for Signs of Overheating</p>
                    <p className="text-white/60 text-sm">Discolored or darkened wire insulation, melted plastic on breakers, a burning smell, or scorch marks near terminals are all signs that a loose connection has been generating excessive heat. These symptoms often accompany double taps that have been in place for a long time.</p>
                  </div>
                </div>
                <div className="bg-white/5 rounded-xl p-4 flex items-start gap-4">
                  <span className="bg-cyan-600 text-white text-sm font-bold px-3 py-1 rounded-full">4</span>
                  <div>
                    <p className="font-semibold text-white">Check Main Breaker Terminals</p>
                    <p className="text-white/60 text-sm">Double taps can also occur at the main breaker, where someone has connected an additional circuit to the main lugs. This is particularly dangerous because the main breaker terminals carry the full service amperage.</p>
                  </div>
                </div>
                <div className="bg-white/5 rounded-xl p-4 flex items-start gap-4">
                  <span className="bg-cyan-600 text-white text-sm font-bold px-3 py-1 rounded-full">5</span>
                  <div>
                    <p className="font-semibold text-white">Verify Breaker Rating</p>
                    <p className="text-white/60 text-sm">If you see two wires at a breaker, check the breaker&apos;s label before calling it a defect. If the breaker is explicitly rated for two conductors (such as many Square D Homeline models), and the wire gauges match the rating, it may be acceptable.</p>
                  </div>
                </div>
              </div>

              <div className="bg-cyan-900/30 rounded-xl p-6 my-6">
                <h4 className="font-semibold text-cyan-400 mb-3">Infrared Thermography</h4>
                <p className="text-white/70 text-sm">
                  Professional electricians and inspectors use <strong>infrared (thermal) cameras</strong> to detect hot spots in electrical panels without direct contact. A double tapped breaker with a loose connection will show an elevated temperature at the terminal &mdash; often 20&ndash;50&deg;F or more above surrounding connections. IR scanning can identify dangerous connections before they progress to visible damage or fire.
                </p>
              </div>
            </section>

            <section id="insurance-real-estate" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Insurance and Real Estate Implications</h2>
              <p className="text-white/80 mb-4">
                Double tapped breakers have real consequences beyond code compliance. They can affect homeowner&apos;s insurance policies, real estate transactions, and liability in the event of an electrical fire.
              </p>

              <div className="grid md:grid-cols-2 gap-6 my-6">
                <div className="bg-white/5 rounded-xl p-6">
                  <h3 className="font-semibold text-cyan-400 mb-3">Insurance Implications</h3>
                  <ul className="text-white/70 text-sm space-y-2">
                    <li><strong>Coverage denial:</strong> Some insurance companies may deny fire claims if the fire is traced to a known code violation such as a double tap that was not corrected</li>
                    <li><strong>Policy requirements:</strong> Insurers may require an electrical inspection before issuing a policy, especially on older homes, and double taps must be corrected</li>
                    <li><strong>Premium increases:</strong> Known electrical defects can increase insurance premiums or trigger mandatory remediation timelines</li>
                    <li><strong>Four-point inspections:</strong> In some states (notably Florida), four-point inspections are required for older homes, and double taps are flagged</li>
                  </ul>
                </div>
                <div className="bg-white/5 rounded-xl p-6">
                  <h3 className="font-semibold text-orange-400 mb-3">Real Estate Implications</h3>
                  <ul className="text-white/70 text-sm space-y-2">
                    <li><strong>Inspection findings:</strong> Buyers can request repair or a credit at closing based on the inspection report</li>
                    <li><strong>FHA/VA loans:</strong> Government-backed loans may require all safety defects be corrected before the loan closes</li>
                    <li><strong>Seller disclosure:</strong> Once identified, sellers may be legally required to disclose known electrical defects</li>
                    <li><strong>Negotiation leverage:</strong> Buyers may use electrical defects to negotiate the purchase price downward</li>
                  </ul>
                </div>
              </div>

              <p className="text-white/80 mb-4">
                The bottom line: fixing a double tapped breaker is inexpensive ($100&ndash;$500 in most cases), but ignoring it can have significant financial consequences if it leads to a fire, insurance denial, or complications in a home sale.
              </p>
            </section>

            <section id="related-panel-issues" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Common Related Panel Issues</h2>
              <p className="text-white/80 mb-4">
                Double tapped breakers rarely exist in isolation. When one is found during an inspection, the panel often has other defects as well. Being aware of these related issues helps electricians provide a thorough evaluation and prevents callbacks.
              </p>

              <div className="grid md:grid-cols-2 gap-4 my-6">
                <div className="bg-white/5 rounded-xl p-6">
                  <h4 className="font-semibold text-red-400 mb-2">Double Tapped Neutrals</h4>
                  <p className="text-white/60 text-sm">
                    Multiple neutral conductors under a single terminal on the neutral bus bar. Just as hazardous as breaker double taps, and a separate code violation under NEC 408.41.
                  </p>
                </div>
                <div className="bg-white/5 rounded-xl p-6">
                  <h4 className="font-semibold text-red-400 mb-2">Oversized Breakers</h4>
                  <p className="text-white/60 text-sm">
                    A 20A breaker on 14 AWG wire, or a 30A breaker on 12 AWG wire. Often done when a circuit trips frequently &mdash; instead of finding the overload, someone installs a larger breaker, defeating the overcurrent protection.
                  </p>
                </div>
                <div className="bg-white/5 rounded-xl p-6">
                  <h4 className="font-semibold text-red-400 mb-2">Wrong Breaker Brand</h4>
                  <p className="text-white/60 text-sm">
                    Breakers from one manufacturer installed in another manufacturer&apos;s panel (e.g., GE breakers in a Square D panel). Cross-brand breakers are not listed for the panel and create poor bus bar contact.
                  </p>
                </div>
                <div className="bg-white/5 rounded-xl p-6">
                  <h4 className="font-semibold text-red-400 mb-2">Missing Knockouts</h4>
                  <p className="text-white/60 text-sm">
                    Open holes in the panel enclosure where knockouts have been removed but no cable or connector installed. Allows pests, debris, and fingers to contact energized components.
                  </p>
                </div>
                <div className="bg-white/5 rounded-xl p-6">
                  <h4 className="font-semibold text-red-400 mb-2">Aluminum Wiring on Standard Breakers</h4>
                  <p className="text-white/60 text-sm">
                    Aluminum branch circuit conductors connected to breakers not rated for aluminum. Requires CO/ALR-rated devices or approved aluminum-to-copper adapters.
                  </p>
                </div>
                <div className="bg-white/5 rounded-xl p-6">
                  <h4 className="font-semibold text-red-400 mb-2">Federal Pacific / Zinsco Panels</h4>
                  <p className="text-white/60 text-sm">
                    Older panel brands known for breaker failure. Federal Pacific Stab-Lok and Zinsco panels have documented histories of breakers failing to trip during overcurrent conditions. Replacement is generally recommended.
                  </p>
                </div>
              </div>
            </section>

            <section id="faq" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Frequently Asked Questions</h2>

              <div className="space-y-4 my-6">
                <div className="bg-white/5 rounded-xl p-6">
                  <h3 className="font-semibold text-white mb-2">Is a double tapped breaker always a code violation?</h3>
                  <p className="text-white/70 text-sm">
                    Not necessarily. If the circuit breaker is specifically listed and labeled for two conductors (such as many Square D Homeline breakers), and the wire gauges match the rating, then two wires on that breaker is permitted. However, the vast majority of residential breakers are rated for a single conductor only, making most double taps a code violation under NEC 110.14(A).
                  </p>
                </div>

                <div className="bg-white/5 rounded-xl p-6">
                  <h3 className="font-semibold text-white mb-2">Can I fix a double tap myself?</h3>
                  <p className="text-white/70 text-sm">
                    Working inside an electrical panel is extremely dangerous due to the presence of energized bus bars carrying the full service amperage. Even with the main breaker off, the service entrance conductors and main lugs remain energized. This work should only be performed by a licensed electrician. In many jurisdictions, panel modifications require a permit and inspection.
                  </p>
                </div>

                <div className="bg-white/5 rounded-xl p-6">
                  <h3 className="font-semibold text-white mb-2">How much does it cost to fix a double tapped breaker?</h3>
                  <p className="text-white/70 text-sm">
                    A pigtail splice repair typically costs <strong>$100&ndash;$200</strong> for an electrician&apos;s service call and repair. Installing a new breaker runs <strong>$150&ndash;$250</strong>. A tandem breaker replacement is similar. If a sub-panel is needed, expect <strong>$500&ndash;$1,500+</strong>. Most double tap repairs are among the least expensive electrical fixes.
                  </p>
                </div>

                <div className="bg-white/5 rounded-xl p-6">
                  <h3 className="font-semibold text-white mb-2">What if my entire panel has double taps?</h3>
                  <p className="text-white/70 text-sm">
                    If the panel has multiple double taps, the most cost-effective solution is often to install a sub-panel to provide additional breaker spaces, or to replace the entire panel with a larger one. A licensed electrician can evaluate the situation and recommend the most practical approach. Multiple double taps often indicate that the panel is undersized for the home&apos;s electrical needs.
                  </p>
                </div>

                <div className="bg-white/5 rounded-xl p-6">
                  <h3 className="font-semibold text-white mb-2">Is a double tapped main breaker more dangerous?</h3>
                  <p className="text-white/70 text-sm">
                    Yes. A double tap at the <strong>main breaker</strong> is particularly dangerous because the main breaker terminals handle the full service amperage (often 100A&ndash;200A). A loose connection at the main breaker carries far more current and generates much more heat than a loose connection at a 15A or 20A branch circuit breaker. Additionally, the main breaker terminals are always energized even when the breaker is off &mdash; only the utility can de-energize these terminals.
                  </p>
                </div>

                <div className="bg-white/5 rounded-xl p-6">
                  <h3 className="font-semibold text-white mb-2">Can two ground wires share a terminal?</h3>
                  <p className="text-white/70 text-sm">
                    Equipment grounding conductors (green or bare copper) are permitted to share a terminal on the grounding bus bar in certain configurations per NEC 250.122. However, <strong>neutral (grounded) conductors must each have their own individual terminal</strong> per NEC 408.41. This distinction is important &mdash; ground wires sharing a terminal is often acceptable, but neutral wires sharing a terminal is not.
                  </p>
                </div>

                <div className="bg-white/5 rounded-xl p-6">
                  <h3 className="font-semibold text-white mb-2">Will a double tapped breaker cause my breaker to trip?</h3>
                  <p className="text-white/70 text-sm">
                    Not directly from the double tap connection itself, but indirectly yes. Two circuits on one breaker means the breaker is protecting a combined load that may exceed its rating. If both circuits draw significant current simultaneously, the total may exceed the breaker&apos;s trip threshold. Also, loose connections from the double tap can cause intermittent tripping due to arcing and heat.
                  </p>
                </div>

                <div className="bg-white/5 rounded-xl p-6">
                  <h3 className="font-semibold text-white mb-2">How do home inspectors check for double taps?</h3>
                  <p className="text-white/70 text-sm">
                    Home inspectors remove the panel dead front (cover) and visually inspect every breaker terminal and bus bar terminal. They look for multiple conductors at any single terminal, signs of overheating, incorrect breaker types, and other panel defects. The inspection is visual only &mdash; inspectors do not tighten connections or make repairs. Any defects are documented in the inspection report with recommendations for correction by a licensed electrician. See our full <Link href="/blog/electrical-inspection-checklist" className="text-purple-400 hover:text-purple-300">electrical inspection checklist</Link> for details.
                  </p>
                </div>
              </div>
            </section>

            {/* Footer CTA Section */}
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

            {/* Related Articles */}
            <section className="mt-12">
              <h2 className="text-2xl font-display font-bold mb-6">Related Articles</h2>
              <div className="grid md:grid-cols-2 gap-4">
                <Link href="/blog/electrical-panel-troubleshooting" className="bg-white/5 hover:bg-white/10 rounded-xl p-6 transition-colors">
                  <span className="text-cyan-400 text-sm">Troubleshooting</span>
                  <h3 className="font-semibold mt-2">Electrical Panel Troubleshooting Guide</h3>
                </Link>
                <Link href="/blog/tandem-breakers-nec-rules" className="bg-white/5 hover:bg-white/10 rounded-xl p-6 transition-colors">
                  <span className="text-purple-400 text-sm">NEC Code</span>
                  <h3 className="font-semibold mt-2">Tandem Breakers: NEC Rules &amp; When You Can Use Them</h3>
                </Link>
                <Link href="/blog/electrical-inspection-checklist" className="bg-white/5 hover:bg-white/10 rounded-xl p-6 transition-colors">
                  <span className="text-green-400 text-sm">Inspections</span>
                  <h3 className="font-semibold mt-2">Electrical Inspection Checklist</h3>
                </Link>
                <Link href="/blog/sub-panel-installation-guide" className="bg-white/5 hover:bg-white/10 rounded-xl p-6 transition-colors">
                  <span className="text-blue-400 text-sm">Installation</span>
                  <h3 className="font-semibold mt-2">Sub-Panel Installation Guide</h3>
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
          <p className="text-sm text-white/40">&copy; 2025 Ampora Labs</p>
        </div>
      </footer>
    </main>
  );
}
