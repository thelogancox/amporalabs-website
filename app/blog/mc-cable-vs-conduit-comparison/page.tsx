import { Metadata } from "next";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import { BreadcrumbJsonLd, BlogPostingJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "MC Cable vs Conduit: When to Use Each & NEC Requirements",
  description: "Compare MC cable and conduit (EMT, IMC, RMC) for commercial and residential wiring. Learn NEC requirements, cost differences, installation speed, grounding, fire-rated assemblies, and when each method is the best choice.",
  keywords: [
    "MC cable vs conduit",
    "MC cable NEC 330",
    "EMT vs MC cable",
    "conduit vs MC cable cost",
    "MC cable installation",
    "when to use MC cable",
    "when to use conduit",
    "MC cable grounding",
    "fire rated MC cable",
    "commercial wiring methods",
  ],
  alternates: {
    canonical: "https://amporalabs.com/blog/mc-cable-vs-conduit-comparison",
  },
  openGraph: {
    title: "MC Cable vs Conduit: When to Use Each & NEC Requirements - Ampora",
    description: "Comprehensive comparison of MC cable and conduit wiring methods with NEC code requirements.",
    url: "https://amporalabs.com/blog/mc-cable-vs-conduit-comparison",
    type: "article",
    publishedTime: "2025-05-01",
  },
};

function HeroIllustration() {
  return (
    <svg viewBox="0 0 400 160" className="w-full h-40 md:h-48" aria-label="MC cable vs EMT conduit comparison">
      {/* MC Cable side */}
      <g transform="translate(100, 30)">
        <rect x="-70" y="-15" width="140" height="100" rx="6" fill="#f59e0b" fillOpacity="0.08" stroke="#f59e0b" strokeDasharray="4"/>
        <text x="0" y="0" textAnchor="middle" fill="#f59e0b" fontSize="12" fontWeight="bold">MC CABLE</text>

        {/* MC cable illustration - spiral armor */}
        <line x1="-50" y1="35" x2="50" y2="35" stroke="#6b7280" strokeWidth="14" strokeLinecap="round"/>
        {/* Spiral armor lines */}
        {[-40, -30, -20, -10, 0, 10, 20, 30, 40].map((x, i) => (
          <line key={i} x1={x - 4} y1="28" x2={x + 4} y2="42" stroke="#9ca3af" strokeWidth="1.5"/>
        ))}
        {/* Inner conductors visible at end */}
        <circle cx="50" cy="32" r="2.5" fill="#ef4444"/>
        <circle cx="50" cy="35" r="2.5" fill="#111827" stroke="#fff" strokeWidth="0.5"/>
        <circle cx="50" cy="38" r="2.5" fill="#22c55e"/>

        {/* Labels */}
        <text x="0" y="65" textAnchor="middle" fill="#9ca3af" fontSize="7">Interlocking Armor</text>
        <text x="0" y="75" textAnchor="middle" fill="#f59e0b" fontSize="7">NEC Article 330</text>
      </g>

      {/* VS divider */}
      <g transform="translate(200, 70)">
        <rect x="-16" y="-14" width="32" height="28" rx="14" fill="#8b5cf6" fillOpacity="0.2" stroke="#8b5cf6"/>
        <text x="0" y="5" textAnchor="middle" fill="#a78bfa" fontSize="14" fontWeight="bold">VS</text>
      </g>

      {/* EMT Conduit side */}
      <g transform="translate(300, 30)">
        <rect x="-70" y="-15" width="140" height="100" rx="6" fill="#22c55e" fillOpacity="0.08" stroke="#22c55e" strokeDasharray="4"/>
        <text x="0" y="0" textAnchor="middle" fill="#22c55e" fontSize="12" fontWeight="bold">EMT CONDUIT</text>

        {/* EMT conduit illustration - smooth tube */}
        <rect x="-50" y="27" width="100" height="16" rx="8" fill="#374151" stroke="#6b7280" strokeWidth="2"/>
        {/* Inner space */}
        <rect x="-48" y="29" width="96" height="12" rx="6" fill="#111827"/>
        {/* Conductors inside */}
        <circle cx="-20" cy="35" r="2.5" fill="#ef4444"/>
        <circle cx="-10" cy="35" r="2.5" fill="#111827" stroke="#fff" strokeWidth="0.5"/>
        <circle cx="0" cy="35" r="2.5" fill="#22c55e"/>
        <circle cx="10" cy="35" r="2.5" fill="#3b82f6"/>
        {/* Coupling */}
        <rect x="40" y="26" width="12" height="18" rx="2" fill="#4b5563" stroke="#6b7280" strokeWidth="1"/>

        {/* Labels */}
        <text x="0" y="65" textAnchor="middle" fill="#9ca3af" fontSize="7">Smooth Steel Tube</text>
        <text x="0" y="75" textAnchor="middle" fill="#22c55e" fontSize="7">NEC Article 358</text>
      </g>

      {/* Bottom summary */}
      <g transform="translate(200, 145)">
        <rect x="-120" y="-10" width="240" height="22" rx="4" fill="#8b5cf6" fillOpacity="0.15" stroke="#8b5cf6"/>
        <text x="0" y="5" textAnchor="middle" fill="#a78bfa" fontSize="8" fontWeight="bold">Choose the right wiring method for every job</text>
      </g>
    </svg>
  );
}

export default function MCCableVsConduitPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navigation />
      <div className="pt-20">
        <BreadcrumbJsonLd
          items={[
            { name: "Home", url: "https://amporalabs.com" },
            { name: "Blog", url: "https://amporalabs.com/blog" },
            { name: "MC Cable vs Conduit Comparison", url: "https://amporalabs.com/blog/mc-cable-vs-conduit-comparison" },
          ]}
        />
        <BlogPostingJsonLd
          headline="MC Cable vs Conduit: When to Use Each & NEC Requirements"
          description="Comprehensive comparison of MC cable and conduit wiring methods including NEC requirements, cost, installation speed, and grounding."
          datePublished="2025-05-01"
          dateModified="2025-05-01"
          url="https://amporalabs.com/blog/mc-cable-vs-conduit-comparison"
          wordCount={3200}
          keywords={["MC cable", "conduit", "EMT", "NEC 330", "wiring methods", "commercial electrical"]}
        />

        <article className="max-w-4xl mx-auto px-6 py-12">
          {/* Breadcrumb */}
          <nav className="text-sm text-white/60 mb-8">
            <Link href="/" className="hover:text-white">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/blog" className="hover:text-white">Blog</Link>
            <span className="mx-2">/</span>
            <span className="text-white">MC Cable vs Conduit</span>
          </nav>

          {/* Article Header */}
          <header className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <span className="px-3 py-1 bg-orange-600/30 text-orange-300 text-sm font-medium rounded-full">
                Materials
              </span>
              <span className="text-white/40 text-sm">12 min read</span>
              <span className="text-white/40 text-sm">May 1, 2025</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6 leading-tight">
              MC Cable vs Conduit: When to Use Each & NEC Requirements
            </h1>
            <p className="text-xl text-white/70">
              Choosing between MC cable and conduit affects labor costs, installation speed, code compliance, and long-term flexibility. Here is a detailed breakdown to help you pick the right wiring method for every application.
            </p>
          </header>

          <div className="mb-12 bg-gradient-to-br from-orange-900/20 to-cyan-900/20 rounded-2xl p-6 border border-white/10">
            <HeroIllustration />
          </div>

          {/* Article Content */}
          <div className="prose prose-invert prose-lg max-w-none">

            {/* MC Cable Types and NEC Article 330 */}
            <section className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">MC Cable Types & NEC Article 330</h2>
              <p className="text-white/80 mb-4">
                Metal-Clad (MC) cable is a factory assembly of insulated conductors enclosed in a metallic armor sheath. NEC Article 330 governs its installation. Understanding the different types is critical because each has distinct capabilities and permitted uses.
              </p>
              <div className="space-y-4 my-6">
                <div className="bg-white/5 rounded-xl p-6">
                  <h3 className="font-semibold text-orange-400 mb-2">Standard MC Cable (Type MC)</h3>
                  <p className="text-white/70 text-sm mb-2">
                    The most common type used in commercial and residential construction. Features interlocking aluminum or steel armor over insulated conductors with a bonding strip or wire.
                  </p>
                  <ul className="list-disc list-inside text-white/60 text-sm space-y-1">
                    <li>Available in sizes 14 AWG through 2000 kcmil</li>
                    <li>Interlocking armor provides mechanical protection</li>
                    <li>Includes an internal bonding strip (green insulated or bare)</li>
                    <li>Listed and marked for the intended environment (dry, damp, or wet)</li>
                  </ul>
                </div>
                <div className="bg-white/5 rounded-xl p-6">
                  <h3 className="font-semibold text-orange-400 mb-2">MC-HL (Hospital-Listed) Cable</h3>
                  <p className="text-white/70 text-sm mb-2">
                    Specifically listed for use in healthcare facilities where a redundant ground path is required per NEC 517.13.
                  </p>
                  <ul className="list-disc list-inside text-white/60 text-sm space-y-1">
                    <li>Contains an insulated equipment grounding conductor (EGC) inside the armor</li>
                    <li>The armor itself serves as a second equipment grounding path</li>
                    <li>Meets the dual-path grounding requirement for patient care areas</li>
                    <li>Reduces labor compared to running a separate EGC in conduit</li>
                  </ul>
                </div>
                <div className="bg-white/5 rounded-xl p-6">
                  <h3 className="font-semibold text-orange-400 mb-2">MC-CU (Copper-Sheathed) Cable</h3>
                  <p className="text-white/70 text-sm mb-2">
                    A specialized MC cable with a continuous corrugated copper sheath instead of interlocking armor. Permitted in more demanding environments.
                  </p>
                  <ul className="list-disc list-inside text-white/60 text-sm space-y-1">
                    <li>Suitable for direct burial and concrete encasement when listed</li>
                    <li>Continuous copper sheath provides superior ground path</li>
                    <li>Higher material cost, but excellent corrosion resistance</li>
                    <li>Used in specialized industrial and hazardous location applications</li>
                  </ul>
                </div>
              </div>
              <div className="bg-orange-900/30 rounded-xl p-6 my-6">
                <h3 className="font-semibold text-orange-400 mb-2">NEC 330.10 - Uses Permitted</h3>
                <p className="text-white/70 text-sm">
                  MC cable is permitted for services, feeders, and branch circuits; power, lighting, control, and signal circuits; indoors or outdoors; in cable trays, direct buried (where listed), and in any raceway. It can be installed exposed or concealed, in dry, damp, or wet locations when the conductors and jacket are rated accordingly.
                </p>
              </div>
            </section>

            {/* EMT, IMC, and RMC Conduit Overview */}
            <section className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">EMT, IMC & RMC Conduit Overview</h2>
              <p className="text-white/80 mb-4">
                Conduit systems provide a raceway that mechanically and electrically protects conductors. Each type has its own NEC article, wall thickness, and application profile.
              </p>
              <div className="overflow-x-auto my-6">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-white/20">
                      <th className="text-left py-3 px-4 text-white/60">Feature</th>
                      <th className="text-left py-3 px-4 text-white/60">EMT (Art. 358)</th>
                      <th className="text-left py-3 px-4 text-white/60">IMC (Art. 342)</th>
                      <th className="text-left py-3 px-4 text-white/60">RMC (Art. 344)</th>
                    </tr>
                  </thead>
                  <tbody className="text-white/80">
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-semibold">Wall Thickness</td>
                      <td className="py-3 px-4">Thin wall</td>
                      <td className="py-3 px-4">Intermediate</td>
                      <td className="py-3 px-4">Heavy wall</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-semibold">Connection</td>
                      <td className="py-3 px-4">Set-screw / compression</td>
                      <td className="py-3 px-4">Threaded</td>
                      <td className="py-3 px-4">Threaded</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-semibold">Bending</td>
                      <td className="py-3 px-4">Hand bender</td>
                      <td className="py-3 px-4">Mechanical / hydraulic</td>
                      <td className="py-3 px-4">Mechanical / hydraulic</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-semibold">Weight</td>
                      <td className="py-3 px-4">Lightest</td>
                      <td className="py-3 px-4">Medium</td>
                      <td className="py-3 px-4">Heaviest</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-semibold">Cost</td>
                      <td className="py-3 px-4 text-green-400">Lowest</td>
                      <td className="py-3 px-4 text-yellow-400">Moderate</td>
                      <td className="py-3 px-4 text-red-400">Highest</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-semibold">EGC Use</td>
                      <td className="py-3 px-4 text-green-400">Yes (250.118)</td>
                      <td className="py-3 px-4 text-green-400">Yes (250.118)</td>
                      <td className="py-3 px-4 text-green-400">Yes (250.118)</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-white/80">
                EMT is by far the most common conduit in commercial interior work. IMC and RMC are typically reserved for exposed runs in industrial settings, outdoor installations requiring physical protection, and locations where the code specifically mandates rigid conduit (such as service mast assemblies per NEC 230.28).
              </p>
            </section>

            {/* Cost Comparison */}
            <section className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Cost Comparison: Material & Labor</h2>
              <p className="text-white/80 mb-4">
                Total installed cost is the real metric. While MC cable has a higher material price per foot, its faster installation can make it the cheaper option overall in many scenarios.
              </p>
              <div className="grid md:grid-cols-2 gap-4 my-6">
                <div className="bg-white/5 rounded-xl p-6">
                  <h3 className="font-semibold text-orange-400 mb-3">MC Cable Costs</h3>
                  <ul className="space-y-2 text-white/70 text-sm">
                    <li><strong>Material:</strong> Higher per-foot cost (conductors + armor + connectors)</li>
                    <li><strong>Connectors:</strong> ~$1.50-$4 each (snap-in or screw type)</li>
                    <li><strong>Labor:</strong> Significantly less - no pulling, no bending</li>
                    <li><strong>Typical savings:</strong> 30-50% less labor than EMT</li>
                    <li><strong>Scrap:</strong> Minimal waste with pre-cut lengths</li>
                  </ul>
                </div>
                <div className="bg-white/5 rounded-xl p-6">
                  <h3 className="font-semibold text-green-400 mb-3">Conduit (EMT) Costs</h3>
                  <ul className="space-y-2 text-white/70 text-sm">
                    <li><strong>Material:</strong> Lower raceway cost, plus separate wire purchase</li>
                    <li><strong>Fittings:</strong> Connectors, couplings, straps, boxes add up</li>
                    <li><strong>Labor:</strong> Measure, cut, ream, bend, support, then pull wire</li>
                    <li><strong>Tools:</strong> Benders, reamers, pull equipment needed</li>
                    <li><strong>Scrap:</strong> More waste from cut-offs and bad bends</li>
                  </ul>
                </div>
              </div>
              <div className="bg-purple-900/30 rounded-xl p-6 my-6">
                <h3 className="font-semibold text-purple-400 mb-2">Rule of Thumb</h3>
                <p className="text-white/70">
                  For short branch circuit runs (under 50 feet) with multiple home runs, MC cable usually wins on total installed cost. For long feeder runs and large conduit sizes, conduit with pulled wire is typically more economical because wire-in-conduit scales better and you avoid paying the armor premium over long distances.
                </p>
              </div>
            </section>

            {/* Installation Speed Comparison */}
            <section className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Installation Speed Comparison</h2>
              <p className="text-white/80 mb-4">
                Installation speed directly impacts project timelines and labor budgets. The difference between MC cable and conduit is substantial.
              </p>
              <div className="space-y-4 my-6">
                <div className="bg-white/5 rounded-xl p-6">
                  <h3 className="font-semibold text-orange-400 mb-2">MC Cable Installation Steps</h3>
                  <ol className="list-decimal list-inside text-white/70 text-sm space-y-1">
                    <li>Lay out cable route and measure</li>
                    <li>Cut MC cable with rotary MC cable cutter</li>
                    <li>Remove armor, expose conductors, install anti-short bushing</li>
                    <li>Insert into MC connector at box or enclosure</li>
                    <li>Secure cable per NEC 330.30 support requirements</li>
                    <li>Make conductor terminations</li>
                  </ol>
                  <p className="text-white/60 text-sm mt-3">Estimated: 6-10 minutes per connection point for an experienced electrician.</p>
                </div>
                <div className="bg-white/5 rounded-xl p-6">
                  <h3 className="font-semibold text-green-400 mb-2">EMT Conduit Installation Steps</h3>
                  <ol className="list-decimal list-inside text-white/70 text-sm space-y-1">
                    <li>Lay out conduit route, measure, and mark</li>
                    <li>Cut EMT with hacksaw or rotary cutter</li>
                    <li>Ream both ends to remove burrs</li>
                    <li>Bend offsets, kicks, 90s, and saddles as needed</li>
                    <li>Install connectors and couplings</li>
                    <li>Mount conduit supports per NEC 358.30</li>
                    <li>Pull wire through completed raceway</li>
                    <li>Make conductor terminations</li>
                  </ol>
                  <p className="text-white/60 text-sm mt-3">Estimated: 15-25 minutes per connection point, plus wire pulling time.</p>
                </div>
              </div>
              <p className="text-white/80">
                On a typical commercial tenant fit-out with 40-60 branch circuits, switching from EMT to MC cable can save 2-3 days of labor. This is why MC cable dominates in competitive bid markets where labor rates are high.
              </p>
            </section>

            {/* Where MC Cable Is Allowed/Prohibited */}
            <section className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Where MC Cable Is Allowed & Prohibited</h2>
              <p className="text-white/80 mb-4">
                NEC 330.12 lists specific locations where MC cable is not permitted, while 330.10 covers permitted uses. Know both lists.
              </p>
              <div className="grid md:grid-cols-2 gap-4 my-6">
                <div className="bg-green-900/20 rounded-xl p-6">
                  <h3 className="font-semibold text-green-400 mb-3">Permitted Uses (330.10)</h3>
                  <ul className="list-disc list-inside text-white/70 text-sm space-y-1">
                    <li>Services, feeders, and branch circuits</li>
                    <li>Indoors and outdoors</li>
                    <li>Exposed and concealed installations</li>
                    <li>Cable trays (NEC 392)</li>
                    <li>Direct buried (when listed for direct burial)</li>
                    <li>Wet locations (with listed wet-rated jacket)</li>
                    <li>Assembly occupancies</li>
                    <li>Patient care areas (MC-HL type)</li>
                    <li>Hazardous locations (MC-HL with gas/vapor tight jacket)</li>
                    <li>Fished in walls and ceilings</li>
                  </ul>
                </div>
                <div className="bg-red-900/20 rounded-xl p-6">
                  <h3 className="font-semibold text-red-400 mb-3">Prohibited Uses (330.12)</h3>
                  <ul className="list-disc list-inside text-white/70 text-sm space-y-1">
                    <li>Where subject to physical damage</li>
                    <li>Where exposed to destructive corrosive conditions (unless jacket is suitable)</li>
                    <li>Direct burial or concrete encasement unless specifically listed</li>
                    <li>Where exposed to cinder fills that may create corrosive conditions</li>
                  </ul>
                  <div className="mt-4 bg-red-900/30 rounded-lg p-3">
                    <p className="text-white/70 text-xs">
                      <strong>Note:</strong> Many local jurisdictions add restrictions beyond the NEC. Some cities prohibit MC cable in commercial buildings above a certain height or in specific occupancy types. Always verify with the local AHJ.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Where Conduit Is Required */}
            <section className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Where Conduit Is Required</h2>
              <p className="text-white/80 mb-4">
                Several NEC provisions and practical considerations make conduit the only viable choice in certain applications.
              </p>
              <div className="space-y-4 my-6">
                <div className="bg-white/5 rounded-xl p-6">
                  <h3 className="font-semibold text-cyan-400 mb-2">Code-Mandated Conduit Locations</h3>
                  <ul className="list-disc list-inside text-white/70 text-sm space-y-1">
                    <li><strong>Service masts:</strong> RMC or IMC required for service mast assemblies (NEC 230.28)</li>
                    <li><strong>Exposed locations subject to physical damage:</strong> RMC, IMC, or Schedule 80 PVC required</li>
                    <li><strong>Underground service laterals:</strong> Conduit required for protection (varies by AHJ)</li>
                    <li><strong>Motor connections:</strong> Flexible metal conduit or liquidtight often required at motor terminations</li>
                    <li><strong>Elevator shafts:</strong> RMC or IMC typically required per NEC 620</li>
                    <li><strong>Some hazardous locations:</strong> Threaded RMC or IMC required in Class I, Division 1 (NEC 501.10)</li>
                  </ul>
                </div>
                <div className="bg-white/5 rounded-xl p-6">
                  <h3 className="font-semibold text-cyan-400 mb-2">Practical Reasons to Choose Conduit</h3>
                  <ul className="list-disc list-inside text-white/70 text-sm space-y-1">
                    <li><strong>Future flexibility:</strong> Conductors can be pulled out and replaced without destroying the raceway</li>
                    <li><strong>Large conductors:</strong> Feeders 4/0 and above are more practical to pull through conduit</li>
                    <li><strong>Long runs:</strong> More economical for runs exceeding 100 feet</li>
                    <li><strong>Harsh environments:</strong> Rigid conduit provides superior mechanical protection</li>
                    <li><strong>Exposed work:</strong> Conduit provides a cleaner, more professional appearance</li>
                    <li><strong>Owner specification:</strong> Many facility owners and engineers spec conduit for maintainability</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Grounding Considerations */}
            <section className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Grounding Considerations</h2>
              <p className="text-white/80 mb-4">
                Grounding is one of the most important differences between MC cable and conduit. NEC 250.118 lists acceptable equipment grounding conductors (EGCs), and both methods are included - but with different details.
              </p>
              <div className="grid md:grid-cols-2 gap-4 my-6">
                <div className="bg-white/5 rounded-xl p-6">
                  <h3 className="font-semibold text-orange-400 mb-3">MC Cable Grounding</h3>
                  <ul className="space-y-2 text-white/70 text-sm">
                    <li><strong>Armor as EGC:</strong> The interlocking metal armor of listed MC cable is recognized as an EGC per NEC 250.118(10)</li>
                    <li><strong>Bonding strip:</strong> Standard MC cable includes a bonding strip or wire in contact with the armor to ensure electrical continuity</li>
                    <li><strong>Internal EGC:</strong> MC-HL cable includes a separate insulated EGC inside the armor for redundant grounding</li>
                    <li><strong>Anti-short bushing:</strong> Required at terminations to protect conductors from sharp armor edges (330.40)</li>
                    <li><strong>Connector quality:</strong> The MC connector must maintain the ground path - use listed connectors only</li>
                  </ul>
                </div>
                <div className="bg-white/5 rounded-xl p-6">
                  <h3 className="font-semibold text-green-400 mb-3">Conduit Grounding</h3>
                  <ul className="space-y-2 text-white/70 text-sm">
                    <li><strong>Raceway as EGC:</strong> EMT, IMC, and RMC are all listed as EGCs per NEC 250.118</li>
                    <li><strong>Continuous path:</strong> All couplings, connectors, and fittings must be tightened to maintain the ground path</li>
                    <li><strong>Separate EGC option:</strong> You can always pull a separate equipment grounding conductor for additional safety</li>
                    <li><strong>Set-screw vs compression:</strong> Compression fittings provide a more reliable ground path than set-screw, especially in vibration environments</li>
                    <li><strong>Bonding bushings:</strong> Required at service equipment and optional for improved bonding at other enclosures</li>
                  </ul>
                </div>
              </div>
              <div className="bg-orange-900/30 rounded-xl p-6 my-6">
                <p className="text-white/90">
                  <strong>Best Practice:</strong> Many engineers specify an insulated EGC in addition to the raceway or armor regardless of the wiring method. This provides a redundant ground fault path and can improve ground fault clearing times. NEC 250.118 permits the raceway and the wire-type EGC to serve in parallel.
                </p>
              </div>
            </section>

            {/* Fire-Rated Assembly Requirements */}
            <section className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Fire-Rated Assembly Requirements</h2>
              <p className="text-white/80 mb-4">
                Penetrating fire-rated walls, floors, and ceiling assemblies requires careful attention to the wiring method. Both MC cable and conduit have specific firestopping requirements.
              </p>
              <div className="space-y-4 my-6">
                <div className="bg-white/5 rounded-xl p-6">
                  <h3 className="font-semibold text-red-400 mb-2">Key Fire-Rating Rules</h3>
                  <ul className="list-disc list-inside text-white/70 text-sm space-y-2">
                    <li><strong>NEC 300.21:</strong> All wiring methods that penetrate fire-rated assemblies must be firestopped to maintain the fire resistance rating</li>
                    <li><strong>Conduit advantage:</strong> EMT and RMC are noncombustible and often have simpler firestop details in UL listed systems</li>
                    <li><strong>MC cable:</strong> Requires approved firestop systems - typically intumescent caulk, putty pads, or pillow systems</li>
                    <li><strong>Through-penetration systems:</strong> Must be tested and listed per ASTM E814/UL 1479 for the specific cable or conduit type</li>
                    <li><strong>Annular space:</strong> The gap between the cable/conduit and the opening must be filled with listed firestop material</li>
                  </ul>
                </div>
                <div className="bg-white/5 rounded-xl p-6">
                  <h3 className="font-semibold text-red-400 mb-2">Plenum & Environmental Air Spaces</h3>
                  <p className="text-white/70 text-sm mb-2">
                    NEC 300.22 restricts wiring methods in ducts, plenums, and environmental air-handling spaces:
                  </p>
                  <ul className="list-disc list-inside text-white/70 text-sm space-y-1">
                    <li><strong>Ducts (300.22(B)):</strong> EMT, RMC, IMC, or MC cable without a nonmetallic jacket permitted</li>
                    <li><strong>Other spaces (300.22(C)):</strong> MC cable with a smooth or corrugated metallic sheath without a nonmetallic jacket is permitted; standard MC with PVC jacket requires plenum-rated listing</li>
                    <li><strong>EMT:</strong> Always permitted in plenums and air-handling spaces</li>
                  </ul>
                </div>
              </div>
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

            {/* Healthcare Facility Requirements */}
            <section className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Healthcare Facility Requirements</h2>
              <p className="text-white/80 mb-4">
                Healthcare facilities have some of the most stringent wiring requirements in the NEC. Article 517 governs these installations and heavily influences the MC cable vs conduit decision.
              </p>
              <div className="bg-white/5 rounded-xl p-6 my-6">
                <h3 className="font-semibold text-purple-400 mb-3">NEC 517.13 - Grounding in Patient Care Areas</h3>
                <p className="text-white/70 text-sm mb-3">
                  Patient care areas require a redundant equipment grounding path. Two acceptable approaches:
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-white/5 rounded-lg p-4">
                    <p className="text-orange-400 text-sm font-semibold mb-2">Option 1: MC-HL Cable</p>
                    <p className="text-white/60 text-sm">
                      Hospital-listed MC cable provides both paths in one assembly: the armor serves as one EGC, and the internal insulated ground wire serves as the second. This is the faster installation method.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-lg p-4">
                    <p className="text-green-400 text-sm font-semibold mb-2">Option 2: Conduit + EGC Wire</p>
                    <p className="text-white/60 text-sm">
                      Metal conduit (EMT/IMC/RMC) serves as one ground path, plus a separate insulated equipment grounding conductor pulled with the circuit conductors serves as the second path.
                    </p>
                  </div>
                </div>
              </div>
              <p className="text-white/80">
                MC-HL cable has become the dominant wiring method for healthcare construction because it eliminates the step of pulling a separate EGC and reduces the risk of a forgotten ground wire. Many healthcare GCs and engineers now specify MC-HL as the default method.
              </p>
            </section>

            {/* Support and Securing Requirements */}
            <section className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Support & Securing Requirements</h2>
              <p className="text-white/80 mb-4">
                Both wiring methods have specific NEC requirements for how often they must be supported and secured. Failing to meet these requirements is one of the most common inspection failures.
              </p>
              <div className="overflow-x-auto my-6">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-white/20">
                      <th className="text-left py-3 px-4 text-white/60">Requirement</th>
                      <th className="text-left py-3 px-4 text-white/60">MC Cable (330.30)</th>
                      <th className="text-left py-3 px-4 text-white/60">EMT (358.30)</th>
                      <th className="text-left py-3 px-4 text-white/60">RMC (344.30)</th>
                    </tr>
                  </thead>
                  <tbody className="text-white/80">
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-semibold">Max interval</td>
                      <td className="py-3 px-4">6 ft</td>
                      <td className="py-3 px-4">10 ft</td>
                      <td className="py-3 px-4">10 ft</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-semibold">Within ___ of box/fitting</td>
                      <td className="py-3 px-4">12 in.</td>
                      <td className="py-3 px-4">3 ft</td>
                      <td className="py-3 px-4">3 ft</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-semibold">Fished in walls</td>
                      <td className="py-3 px-4 text-green-400">Support not required</td>
                      <td className="py-3 px-4 text-red-400">N/A (cannot fish EMT)</td>
                      <td className="py-3 px-4 text-red-400">N/A</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-semibold">Cable tray</td>
                      <td className="py-3 px-4 text-green-400">Permitted</td>
                      <td className="py-3 px-4 text-green-400">Permitted</td>
                      <td className="py-3 px-4 text-green-400">Permitted</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="bg-cyan-900/30 rounded-xl p-6 my-6">
                <h3 className="font-semibold text-cyan-400 mb-2">MC Cable Bundling</h3>
                <p className="text-white/70">
                  MC cable can be bundled and supported together, but be aware of derating requirements. NEC 310.15(C) requires ampacity adjustment when more than a certain number of current-carrying conductors are bundled together for distances exceeding 24 inches. Count all current-carrying conductors in all cables in the bundle.
                </p>
              </div>
            </section>

            {/* Bend Radius Comparisons */}
            <section className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Bend Radius Comparisons</h2>
              <p className="text-white/80 mb-4">
                Minimum bend radius protects conductor insulation and the cable/conduit itself from damage. Exceeding the minimum bend radius is a code violation and can cause conductor failure over time.
              </p>
              <div className="grid md:grid-cols-2 gap-4 my-6">
                <div className="bg-white/5 rounded-xl p-6">
                  <h3 className="font-semibold text-orange-400 mb-3">MC Cable Bend Radius (330.24)</h3>
                  <ul className="space-y-2 text-white/70 text-sm">
                    <li><strong>Smooth sheath:</strong> 10x the external diameter of the metallic sheath</li>
                    <li><strong>Interlocking armor:</strong> 7x the external diameter of the MC cable</li>
                    <li><strong>Shielded conductors:</strong> 12x the overall diameter</li>
                    <li className="text-white/50">Example: 3/4" OD interlocking MC cable = 5.25" minimum bend radius</li>
                  </ul>
                </div>
                <div className="bg-white/5 rounded-xl p-6">
                  <h3 className="font-semibold text-green-400 mb-3">Conduit Bend Radius (Table 344.24/358.24)</h3>
                  <ul className="space-y-2 text-white/70 text-sm">
                    <li><strong>1/2" EMT:</strong> 4" minimum (one-shot bends)</li>
                    <li><strong>3/4" EMT:</strong> 5" minimum</li>
                    <li><strong>1" EMT:</strong> 6" minimum</li>
                    <li><strong>Max bends:</strong> 360 degrees total between pull points (no more than four 90-degree bends)</li>
                    <li className="text-white/50">Standard bender shoes are designed to meet these minimums</li>
                  </ul>
                </div>
              </div>
              <p className="text-white/80">
                MC cable has an advantage in tight spaces because it can be routed around obstacles without precise bending. However, respect the minimum bend radius to avoid cracking the armor or damaging conductor insulation.
              </p>
            </section>

            {/* Pros and Cons Comparison Table */}
            <section className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">MC Cable vs Conduit: Pros & Cons</h2>
              <div className="overflow-x-auto my-6">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-white/20">
                      <th className="text-left py-3 px-4 text-white/60">Category</th>
                      <th className="text-left py-3 px-4 text-orange-400">MC Cable</th>
                      <th className="text-left py-3 px-4 text-green-400">Conduit (EMT)</th>
                    </tr>
                  </thead>
                  <tbody className="text-white/80">
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-semibold">Installation speed</td>
                      <td className="py-3 px-4 text-green-400">Faster - no wire pulling</td>
                      <td className="py-3 px-4 text-yellow-400">Slower - multiple steps</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-semibold">Material cost</td>
                      <td className="py-3 px-4 text-yellow-400">Higher per foot</td>
                      <td className="py-3 px-4 text-green-400">Lower per foot</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-semibold">Labor cost</td>
                      <td className="py-3 px-4 text-green-400">Lower</td>
                      <td className="py-3 px-4 text-yellow-400">Higher</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-semibold">Future flexibility</td>
                      <td className="py-3 px-4 text-red-400">Low - must replace entire cable</td>
                      <td className="py-3 px-4 text-green-400">High - re-pull wire anytime</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-semibold">Physical protection</td>
                      <td className="py-3 px-4 text-yellow-400">Moderate</td>
                      <td className="py-3 px-4 text-green-400">Superior (especially RMC)</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-semibold">Tight spaces</td>
                      <td className="py-3 px-4 text-green-400">Easier to route</td>
                      <td className="py-3 px-4 text-yellow-400">Requires precise bends</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-semibold">Appearance</td>
                      <td className="py-3 px-4 text-yellow-400">Less uniform</td>
                      <td className="py-3 px-4 text-green-400">Clean, professional look</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-semibold">Skill required</td>
                      <td className="py-3 px-4 text-green-400">Lower - minimal bending</td>
                      <td className="py-3 px-4 text-yellow-400">Higher - bending skill needed</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-semibold">EMI shielding</td>
                      <td className="py-3 px-4 text-yellow-400">Moderate</td>
                      <td className="py-3 px-4 text-green-400">Better (continuous metal)</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-semibold">Plenum use</td>
                      <td className="py-3 px-4 text-yellow-400">Restrictions apply</td>
                      <td className="py-3 px-4 text-green-400">Always permitted</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Regional Preferences and Local Code Amendments */}
            <section className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Regional Preferences & Local Code Amendments</h2>
              <p className="text-white/80 mb-4">
                The wiring method you use often depends as much on geography as on the NEC. Local amendments and regional trade practices can override what the national code permits.
              </p>
              <div className="space-y-4 my-6">
                <div className="bg-white/5 rounded-xl p-6">
                  <h3 className="font-semibold text-purple-400 mb-2">Chicago & Cook County, IL</h3>
                  <p className="text-white/70 text-sm">
                    Chicago has historically required metal conduit (EMT or RMC) for virtually all wiring. MC cable and Romex (NM cable) are largely prohibited. This is one of the strictest jurisdictions in the country and significantly affects labor costs and project timelines.
                  </p>
                </div>
                <div className="bg-white/5 rounded-xl p-6">
                  <h3 className="font-semibold text-purple-400 mb-2">New York City</h3>
                  <p className="text-white/70 text-sm">
                    NYC Electrical Code has historically required conduit for most commercial work. Recent code cycles have expanded MC cable use in some applications, but conduit remains the dominant method in high-rise and commercial construction.
                  </p>
                </div>
                <div className="bg-white/5 rounded-xl p-6">
                  <h3 className="font-semibold text-purple-400 mb-2">Southeast & Southwest US</h3>
                  <p className="text-white/70 text-sm">
                    MC cable is extremely popular in the Southeast and Southwest for commercial construction. The labor savings in competitive bid markets make it the default choice for many contractors. Some jurisdictions in these regions follow the NEC with minimal amendments.
                  </p>
                </div>
                <div className="bg-white/5 rounded-xl p-6">
                  <h3 className="font-semibold text-purple-400 mb-2">West Coast</h3>
                  <p className="text-white/70 text-sm">
                    California and other western states generally follow the NEC closely but may add seismic bracing requirements that affect both conduit and MC cable support methods. MC cable is widely accepted for commercial interiors.
                  </p>
                </div>
              </div>
              <div className="bg-orange-900/30 rounded-xl p-6 my-6">
                <p className="text-white/90">
                  <strong>Always check local codes.</strong> Before bidding or starting a project in a new jurisdiction, contact the local AHJ (Authority Having Jurisdiction) to confirm which wiring methods are permitted. A single local amendment can invalidate your entire installation plan.
                </p>
              </div>
            </section>

            {/* Common Installation Mistakes */}
            <section className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Common Installation Mistakes</h2>
              <p className="text-white/80 mb-4">
                Inspectors see the same issues repeatedly. Avoid these common mistakes to pass inspection the first time.
              </p>
              <div className="grid md:grid-cols-2 gap-4 my-6">
                <div className="bg-white/5 rounded-xl p-6">
                  <h3 className="font-semibold text-orange-400 mb-3">MC Cable Mistakes</h3>
                  <ul className="list-disc list-inside text-white/70 text-sm space-y-2">
                    <li><strong>Missing anti-short bushings:</strong> The red or blue plastic bushing (sometimes called a &quot;red head&quot;) is required at every termination per NEC 330.40 to protect conductors from the sharp armor edge</li>
                    <li><strong>Incorrect support spacing:</strong> Securing MC cable every 6 feet with support within 12 inches of every box or fitting - not optional</li>
                    <li><strong>Exceeding bend radius:</strong> Kinking the armor damages conductor insulation and violates 330.24</li>
                    <li><strong>Wrong connector type:</strong> Using AC cable connectors for MC cable or vice versa - they are NOT interchangeable</li>
                    <li><strong>Unsupported cable above ceilings:</strong> Laying MC cable on ceiling grid is not a code-compliant support method</li>
                    <li><strong>Cutting into conductors:</strong> Using a hacksaw or reciprocating saw instead of an MC cable cutter risks nicking conductor insulation</li>
                  </ul>
                </div>
                <div className="bg-white/5 rounded-xl p-6">
                  <h3 className="font-semibold text-green-400 mb-3">Conduit Mistakes</h3>
                  <ul className="list-disc list-inside text-white/70 text-sm space-y-2">
                    <li><strong>Not reaming:</strong> Failing to ream conduit after cutting leaves sharp edges that damage conductor insulation during pulling</li>
                    <li><strong>Exceeding 360 degrees of bends:</strong> More than four 90-degree bends between pull points makes wire pulling extremely difficult and risks insulation damage</li>
                    <li><strong>Loose set-screw fittings:</strong> Set-screw connectors and couplings that are not fully tightened break the ground path</li>
                    <li><strong>Conduit fill violations:</strong> Stuffing too many conductors into a conduit creates heat buildup and pulling problems</li>
                    <li><strong>Mixed metals without isolation:</strong> Connecting dissimilar metals (aluminum EMT to steel box) without proper protection causes galvanic corrosion</li>
                    <li><strong>Unsupported spans:</strong> EMT requires support every 10 feet and within 3 feet of every box, connector, or fitting</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Making the Right Choice */}
            <section className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Making the Right Choice</h2>
              <p className="text-white/80 mb-4">
                Use this decision framework to select the best wiring method for your project:
              </p>
              <div className="space-y-4 my-6">
                <div className="bg-white/5 rounded-xl p-4">
                  <p className="text-purple-400 font-semibold">1. Check local codes first</p>
                  <p className="text-white/60 text-sm mt-1">Local amendments may prohibit MC cable entirely or require conduit in specific locations. This overrides everything else.</p>
                </div>
                <div className="bg-white/5 rounded-xl p-4">
                  <p className="text-purple-400 font-semibold">2. Identify code-mandated conduit locations</p>
                  <p className="text-white/60 text-sm mt-1">Service masts, hazardous locations, and areas subject to physical damage typically require rigid conduit regardless of preference.</p>
                </div>
                <div className="bg-white/5 rounded-xl p-4">
                  <p className="text-purple-400 font-semibold">3. Consider the environment</p>
                  <p className="text-white/60 text-sm mt-1">Wet locations, corrosive atmospheres, plenum spaces, and fire-rated assemblies each have specific requirements that may favor one method over the other.</p>
                </div>
                <div className="bg-white/5 rounded-xl p-4">
                  <p className="text-purple-400 font-semibold">4. Evaluate total installed cost</p>
                  <p className="text-white/60 text-sm mt-1">For branch circuits under 50 feet, MC cable usually wins. For feeders and long runs, conduit is more economical. Run the numbers for your specific project.</p>
                </div>
                <div className="bg-white/5 rounded-xl p-4">
                  <p className="text-purple-400 font-semibold">5. Factor in future needs</p>
                  <p className="text-white/60 text-sm mt-1">If the space will be reconfigured frequently (offices, retail), conduit provides the flexibility to re-pull wire. For permanent installations, MC cable is a cost-effective choice.</p>
                </div>
                <div className="bg-white/5 rounded-xl p-4">
                  <p className="text-purple-400 font-semibold">6. Match the owner&apos;s expectations</p>
                  <p className="text-white/60 text-sm mt-1">Some facility owners and engineers have strong preferences. Data centers, hospitals, and industrial plants often specify conduit for maintainability even when MC cable is code-compliant.</p>
                </div>
              </div>
            </section>

            {/* Bottom Line */}
            <section className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Bottom Line</h2>
              <p className="text-white/80 mb-4">
                Neither MC cable nor conduit is universally better. Each has clear advantages depending on the application, local codes, and project budget. The best electricians are proficient with both methods and choose based on the specific requirements of each job.
              </p>
              <div className="bg-green-900/20 border border-green-500/30 rounded-xl p-6 my-6">
                <h3 className="font-semibold text-green-400 mb-2">Quick Decision Guide</h3>
                <ul className="list-disc list-inside text-white/70 text-sm space-y-1">
                  <li><strong>Commercial tenant fit-outs:</strong> MC cable for speed and cost savings</li>
                  <li><strong>Healthcare patient care areas:</strong> MC-HL cable for dual grounding compliance</li>
                  <li><strong>Industrial/exposed work:</strong> Conduit for protection and appearance</li>
                  <li><strong>Data centers:</strong> Conduit for flexibility and future capacity</li>
                  <li><strong>Service entrances:</strong> RMC or IMC as required by code</li>
                  <li><strong>Retrofit/remodel:</strong> MC cable for easier routing through existing spaces</li>
                  <li><strong>High-rise buildings:</strong> Check local code - conduit may be required</li>
                </ul>
              </div>
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
                <Link href="/blog/conduit-fill-calculation-guide" className="bg-white/5 hover:bg-white/10 rounded-xl p-6 transition-colors">
                  <span className="text-cyan-400 text-sm">Calculations</span>
                  <h3 className="font-semibold mt-2">Conduit Fill Calculation Guide</h3>
                </Link>
                <Link href="/blog/electrical-grounding-vs-bonding" className="bg-white/5 hover:bg-white/10 rounded-xl p-6 transition-colors">
                  <span className="text-purple-400 text-sm">NEC Code</span>
                  <h3 className="font-semibold mt-2">Grounding vs Bonding: NEC Requirements</h3>
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
