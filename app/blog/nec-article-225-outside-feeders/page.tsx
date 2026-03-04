import { Metadata } from "next";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import { BlogPostingJsonLd, BreadcrumbJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "NEC Article 225: Outside Branch Circuits & Feeders Guide",
  description: "Complete guide to NEC Article 225 covering outside branch circuits and feeders. Learn overhead conductor clearance heights, underground feeder installation methods, detached building disconnect requirements, number of disconnects allowed per 225.33, grounding at separate buildings, and feeder sizing for detached garages and outbuildings.",
  keywords: [
    "nec article 225",
    "outside branch circuits",
    "outside feeders",
    "detached building disconnect",
    "overhead clearances",
    "underground feeder",
    "outside wiring",
    "building disconnect requirements",
    "overhead conductor height",
    "feeder to detached garage"
  ],
  alternates: {
    canonical: "https://amporalabs.com/blog/nec-article-225-outside-feeders",
  },
  openGraph: {
    title: "NEC Article 225: Outside Branch Circuits & Feeders Guide - Ampora",
    description: "Master NEC Article 225 with this comprehensive guide to outside branch circuits, feeders, overhead clearances, underground methods, and detached building disconnects.",
    url: "https://amporalabs.com/blog/nec-article-225-outside-feeders",
    type: "article",
    publishedTime: "2026-03-04",
  },
};

function HeroIllustration() {
  return (
    <svg viewBox="0 0 400 180" className="w-full h-40 md:h-48" aria-label="Overhead and underground feeder to detached building with disconnect">
      {/* Background */}
      <rect x="10" y="10" width="380" height="160" rx="4" fill="#1f2937" stroke="#374151" strokeWidth="1"/>

      {/* Ground line */}
      <line x1="20" y1="140" x2="380" y2="140" stroke="#4b5563" strokeWidth="1.5" strokeDasharray="4,2"/>
      <text x="200" y="152" textAnchor="middle" fill="#6b7280" fontSize="5">GRADE LEVEL</text>

      {/* Main Building */}
      <rect x="30" y="50" width="80" height="90" rx="2" fill="#1e3a5f" stroke="#3b82f6" strokeWidth="1.5"/>
      <text x="70" y="68" textAnchor="middle" fill="#60a5fa" fontSize="7" fontWeight="bold">MAIN</text>
      <text x="70" y="78" textAnchor="middle" fill="#60a5fa" fontSize="6">BUILDING</text>

      {/* Main Panel */}
      <rect x="90" y="82" width="16" height="24" rx="1" fill="#374151" stroke="#60a5fa" strokeWidth="1"/>
      <text x="98" y="97" textAnchor="middle" fill="#60a5fa" fontSize="5">PNL</text>

      {/* Weatherhead on main building */}
      <line x1="98" y1="50" x2="98" y2="35" stroke="#9ca3af" strokeWidth="2"/>
      <path d="M93 35 L98 25 L103 35" fill="none" stroke="#9ca3af" strokeWidth="1.5"/>

      {/* Overhead conductors */}
      <path d="M98 30 Q200 15 302 30" fill="none" stroke="#f59e0b" strokeWidth="1.5"/>
      <path d="M98 33 Q200 18 302 33" fill="none" stroke="#f59e0b" strokeWidth="1.5"/>
      <path d="M98 36 Q200 21 302 36" fill="none" stroke="#f59e0b" strokeWidth="1.5"/>

      {/* Clearance arrow */}
      <line x1="200" y1="18" x2="200" y2="140" stroke="#22c55e" strokeWidth="0.5" strokeDasharray="3,3"/>
      <line x1="195" y1="18" x2="205" y2="18" stroke="#22c55e" strokeWidth="1"/>
      <line x1="195" y1="140" x2="205" y2="140" stroke="#22c55e" strokeWidth="1"/>
      <text x="215" y="80" fill="#22c55e" fontSize="6" fontWeight="bold">MIN</text>
      <text x="215" y="88" fill="#22c55e" fontSize="6" fontWeight="bold">CLEARANCE</text>

      {/* Detached Building */}
      <rect x="290" y="50" width="80" height="90" rx="2" fill="#1e3a5f" stroke="#a855f7" strokeWidth="1.5"/>
      <text x="330" y="68" textAnchor="middle" fill="#c084fc" fontSize="7" fontWeight="bold">DETACHED</text>
      <text x="330" y="78" textAnchor="middle" fill="#c084fc" fontSize="6">BUILDING</text>

      {/* Weatherhead on detached building */}
      <line x1="302" y1="50" x2="302" y2="35" stroke="#9ca3af" strokeWidth="2"/>
      <path d="M297 35 L302 25 L307 35" fill="none" stroke="#9ca3af" strokeWidth="1.5"/>

      {/* Disconnect at detached building */}
      <rect x="294" y="85" width="20" height="28" rx="1" fill="#374151" stroke="#ef4444" strokeWidth="1.5"/>
      <text x="304" y="97" textAnchor="middle" fill="#ef4444" fontSize="5" fontWeight="bold">DISC</text>
      <text x="304" y="106" textAnchor="middle" fill="#ef4444" fontSize="4">225.31</text>

      {/* Sub panel in detached building */}
      <rect x="322" y="90" width="14" height="20" rx="1" fill="#374151" stroke="#c084fc" strokeWidth="1"/>
      <text x="329" y="103" textAnchor="middle" fill="#c084fc" fontSize="4.5">SUB</text>

      {/* Underground feeder path */}
      <path d="M70 140 L70 160 L330 160 L330 140" fill="none" stroke="#f97316" strokeWidth="2" strokeDasharray="6,3"/>
      <text x="200" y="168" textAnchor="middle" fill="#f97316" fontSize="5" fontWeight="bold">UNDERGROUND FEEDER (ALT)</text>

      {/* Labels */}
      <text x="200" y="30" textAnchor="middle" fill="#fbbf24" fontSize="5">OVERHEAD CONDUCTORS 225.18/.19</text>

      {/* Grounding rod at detached building */}
      <line x1="360" y1="130" x2="360" y2="155" stroke="#22c55e" strokeWidth="1.5"/>
      <line x1="356" y1="145" x2="364" y2="145" stroke="#22c55e" strokeWidth="1"/>
      <line x1="357" y1="148" x2="363" y2="148" stroke="#22c55e" strokeWidth="1"/>
      <line x1="358" y1="151" x2="362" y2="151" stroke="#22c55e" strokeWidth="1"/>
      <text x="360" y="164" textAnchor="middle" fill="#22c55e" fontSize="4">GND</text>
    </svg>
  );
}

export default function NECArticle225OutsideFeedersPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navigation />
      <div className="pt-20">
        <BreadcrumbJsonLd
          items={[
            { name: "Home", url: "https://amporalabs.com" },
            { name: "Blog", url: "https://amporalabs.com/blog" },
            { name: "NEC Article 225: Outside Branch Circuits & Feeders", url: "https://amporalabs.com/blog/nec-article-225-outside-feeders" },
          ]}
        />
        <BlogPostingJsonLd
          headline="NEC Article 225: Outside Branch Circuits & Feeders Guide"
          description="Complete guide to NEC Article 225 covering outside branch circuits, feeders, overhead conductor clearances, underground feeder methods, and detached building disconnect requirements."
          datePublished="2026-03-04"
          dateModified="2026-03-04"
          url="https://amporalabs.com/blog/nec-article-225-outside-feeders"
          wordCount={4500}
          keywords={["nec article 225", "outside feeders", "outside branch circuits", "detached building disconnect", "overhead clearances"]}
        />

        <article className="max-w-4xl mx-auto px-6 py-12">
          {/* Breadcrumb */}
          <nav className="text-sm text-white/60 mb-8">
            <Link href="/" className="hover:text-white">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/blog" className="hover:text-white">Blog</Link>
            <span className="mx-2">/</span>
            <span className="text-white">NEC Article 225: Outside Branch Circuits &amp; Feeders</span>
          </nav>

          {/* Article Header */}
          <header className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <span className="px-3 py-1 bg-purple-600/20 text-purple-300 text-sm font-medium rounded-full">
                NEC Code
              </span>
              <span className="text-white/40 text-sm">16 min read</span>
              <span className="text-white/40 text-sm">March 4, 2026</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6 leading-tight">
              NEC Article 225: Outside Branch Circuits &amp; Feeders Guide
            </h1>
            <p className="text-xl text-white/70">
              Running power to a detached garage, outbuilding, or separate structure on the same property requires compliance with NEC Article 225. This guide covers every aspect of outside branch circuits and feeders &mdash; from overhead conductor clearances and underground wiring methods to disconnecting means requirements, the number of disconnects allowed per 225.33, and grounding at separate buildings.
            </p>
          </header>

          <div className="mb-12 bg-gradient-to-br from-purple-900/20 to-cyan-900/20 rounded-2xl p-6 border border-white/10">
            <HeroIllustration />
          </div>

          {/* Table of Contents */}
          <div className="bg-white/5 rounded-2xl p-6 mb-12">
            <h2 className="font-display font-bold mb-4">In This Guide</h2>
            <ul className="space-y-2 text-white/70">
              <li><a href="#scope-purpose" className="hover:text-purple-400">NEC 225 Scope and Purpose</a></li>
              <li><a href="#overhead-conductors" className="hover:text-purple-400">Overhead Conductor Installation &amp; Clearances</a></li>
              <li><a href="#underground-feeders" className="hover:text-purple-400">Underground Feeder Methods</a></li>
              <li><a href="#disconnecting-means" className="hover:text-purple-400">Disconnecting Means at Detached Buildings</a></li>
              <li><a href="#number-of-disconnects" className="hover:text-purple-400">Number of Disconnects Allowed (225.33)</a></li>
              <li><a href="#grounding-separate-buildings" className="hover:text-purple-400">Grounding at Separate Buildings</a></li>
              <li><a href="#multi-building-campuses" className="hover:text-purple-400">Multi-Building Campuses</a></li>
              <li><a href="#common-violations" className="hover:text-purple-400">Common Code Violations</a></li>
              <li><a href="#faq" className="hover:text-purple-400">Frequently Asked Questions</a></li>
            </ul>
          </div>

          {/* Article Content */}
          <div className="prose prose-invert prose-lg max-w-none">

            <section id="scope-purpose" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">NEC 225 Scope and Purpose</h2>
              <p className="text-white/80 mb-4">
                <strong>NEC Article 225</strong> covers the installation requirements for outside branch circuits and feeders run on or between buildings, structures, or poles on the premises. It also covers equipment and disconnecting means located on the outside of buildings or on or in other structures.
              </p>
              <p className="text-white/80 mb-4">
                The scope of Article 225 picks up where the service entrance ends. Once power enters the main building and is distributed through the service equipment, any circuits that leave the building and travel to another structure on the same property fall under the requirements of Article 225. This includes wiring to detached garages, barns, workshops, pool houses, sheds with electrical loads, and separate buildings on commercial or industrial campuses.
              </p>

              <div className="bg-white/5 rounded-xl p-6 my-6">
                <h4 className="font-semibold text-cyan-400 mb-3">Key Distinction: Service vs. Feeder</h4>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <p className="font-semibold text-white mb-2">Service Conductors (Article 230)</p>
                    <p className="text-white/60 text-sm">Run from the utility to the main service disconnect. Covered by <Link href="/blog/nec-service-entrance-requirements" className="text-purple-400 hover:text-purple-300">NEC Article 230 service entrance requirements</Link>.</p>
                  </div>
                  <div>
                    <p className="font-semibold text-white mb-2">Outside Feeders (Article 225)</p>
                    <p className="text-white/60 text-sm">Run from the main building&apos;s service equipment to another building or structure on the same property. Subject to Article 225 rules.</p>
                  </div>
                </div>
              </div>

              <p className="text-white/80 mb-4">
                Article 225 is organized into three main parts: <strong>Part I</strong> covers general requirements for all outside branch circuits and feeders; <strong>Part II</strong> covers buildings or other structures supplied by a feeder or branch circuit; and <strong>Part III</strong> addresses installations over 1000 volts. For most residential and commercial work, Parts I and II contain the critical requirements.
              </p>

              <div className="bg-purple-900/30 rounded-xl p-6 my-6">
                <h4 className="font-semibold text-purple-400 mb-3">Related NEC Articles</h4>
                <ul className="text-white/70 space-y-2 text-sm">
                  <li><strong>Article 230:</strong> Services &mdash; covers conductors from utility to service equipment</li>
                  <li><strong>Article 215:</strong> Feeders &mdash; general feeder requirements (Article 225 supplements these for outside runs)</li>
                  <li><strong>Article 300:</strong> Wiring Methods &mdash; general installation requirements</li>
                  <li><strong>Article 250:</strong> Grounding and Bonding &mdash; grounding at separate buildings</li>
                  <li><strong>Article 310:</strong> Conductors &mdash; ampacity and sizing requirements</li>
                </ul>
              </div>
            </section>

            <section id="overhead-conductors" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Overhead Conductor Installation &amp; Clearances</h2>
              <p className="text-white/80 mb-4">
                Overhead spans between buildings are one of the most common methods for running feeders to detached structures. NEC Article 225 establishes strict clearance requirements to protect people, vehicles, and property from contact with overhead conductors. These clearances mirror many of the requirements found in <Link href="/blog/nec-service-entrance-requirements" className="text-purple-400 hover:text-purple-300">NEC Article 230 for service drops</Link>.
              </p>

              <h3 className="text-xl font-display font-semibold mb-3 text-cyan-400">Minimum Clearances from Ground (225.18)</h3>
              <p className="text-white/80 mb-4">
                Section 225.18 specifies the minimum height of overhead spans of outside branch circuits and feeders above finished grade, sidewalks, platforms, or other surfaces from which they might be accessible. The clearances vary based on the voltage and the area below the conductors.
              </p>

              <div className="overflow-x-auto my-6">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-white/20">
                      <th className="text-left py-3 px-4 text-white/60">Location / Condition</th>
                      <th className="text-left py-3 px-4 text-white/60">Minimum Clearance</th>
                    </tr>
                  </thead>
                  <tbody className="text-white/80">
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">Above finished grade, sidewalks, or platforms accessible to pedestrians only (not exceeding 150V to ground)</td>
                      <td className="py-3 px-4 font-mono text-cyan-400">10 feet</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">Above finished grade, sidewalks, or platforms accessible to pedestrians only (exceeding 150V to ground)</td>
                      <td className="py-3 px-4 font-mono text-cyan-400">12 feet</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">Over residential property and driveways, and those commercial areas not subject to truck traffic (not exceeding 300V to ground)</td>
                      <td className="py-3 px-4 font-mono text-cyan-400">12 feet</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">Over residential property and driveways (exceeding 300V to ground)</td>
                      <td className="py-3 px-4 font-mono text-cyan-400">15 feet</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4">Over public streets, alleys, roads, parking areas subject to truck traffic, driveways on other than residential property, and other land traversed by vehicles such as cultivated, grazing, forest, and orchard</td>
                      <td className="py-3 px-4 font-mono text-cyan-400">18 feet</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h3 className="text-xl font-display font-semibold mb-3 text-cyan-400">Clearances from Buildings (225.19)</h3>
              <p className="text-white/80 mb-4">
                Section 225.19 requires that overhead conductors and cables maintain specific clearances from buildings and structures. These clearances protect building occupants and prevent accidental contact during normal activities near the building.
              </p>

              <div className="grid md:grid-cols-2 gap-6 my-6">
                <div className="bg-white/5 rounded-xl p-6">
                  <h4 className="font-semibold text-cyan-400 mb-3">Above Roofs</h4>
                  <ul className="text-white/60 text-sm space-y-2">
                    <li><strong>General rule:</strong> 8 feet above the roof surface</li>
                    <li><strong>Roof slope &ge; 4/12:</strong> May be reduced to 3 feet</li>
                    <li><strong>Not exceeding 300V, not more than 4 feet of conductor over overhang:</strong> May be reduced to 18 inches</li>
                    <li><strong>Where roof is not readily accessible:</strong> Reduced clearance applies</li>
                  </ul>
                </div>
                <div className="bg-white/5 rounded-xl p-6">
                  <h4 className="font-semibold text-orange-400 mb-3">From Windows &amp; Openings</h4>
                  <ul className="text-white/60 text-sm space-y-2">
                    <li><strong>From windows that open:</strong> 3 feet minimum</li>
                    <li><strong>From doors, porches, fire escapes:</strong> 3 feet minimum</li>
                    <li><strong>Above windows that do not open:</strong> Conductors may be installed above if clearance from upper edge is maintained</li>
                    <li><strong>Measured from:</strong> Where the conductors can be reached</li>
                  </ul>
                </div>
              </div>

              <h3 className="text-xl font-display font-semibold mb-3 text-cyan-400">Conductor Support and Attachment (225.15 &amp; 225.16)</h3>
              <p className="text-white/80 mb-4">
                Overhead conductors must be supported on appropriate insulators or messenger cables. The point of attachment to a building must not be less than <strong>10 feet above finished grade</strong>. Where individual open conductors are used, they must have a separation of at least <strong>6 inches</strong> between conductors. When using cables (such as Type SE, USE, or MC), the cable assembly must be suitable for outdoor use and supported per manufacturer requirements.
              </p>

              <div className="bg-orange-900/30 rounded-xl p-6 my-6">
                <h4 className="font-semibold text-orange-400 mb-3">Practical Overhead Span Considerations</h4>
                <ul className="text-white/70 space-y-2 text-sm">
                  <li><strong>Maximum span:</strong> While no specific maximum span is given, conductors must be able to withstand weather loads and maintain required clearances under all conditions including ice loading and wind</li>
                  <li><strong>Drip loops:</strong> Provide drip loops at each building attachment to prevent moisture intrusion at the point of entry</li>
                  <li><strong>Messenger wire:</strong> For longer spans, a messenger wire (steel cable) supports the conductors to prevent excessive sag</li>
                  <li><strong>Trees:</strong> Overhead spans must not be routed through trees; tree growth can damage conductors and create hazards</li>
                </ul>
              </div>
            </section>

            <section id="underground-feeders" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Underground Feeder Methods</h2>
              <p className="text-white/80 mb-4">
                Underground installation is often preferred over overhead wiring because it eliminates clearance issues, provides better protection from weather and physical damage, and results in a cleaner appearance. For details on underground wiring methods, burial depths, and conduit requirements, see our comprehensive <Link href="/blog/underground-wiring-installation-guide" className="text-purple-400 hover:text-purple-300">underground wiring installation guide</Link>.
              </p>

              <h3 className="text-xl font-display font-semibold mb-3 text-cyan-400">Minimum Cover Requirements</h3>
              <p className="text-white/80 mb-4">
                NEC Table 300.5 specifies the minimum burial depths for underground conductors and cables. The required depth depends on the wiring method and the voltage of the circuit. Here are the most common scenarios for outside feeders:
              </p>

              <div className="overflow-x-auto my-6">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-white/20">
                      <th className="text-left py-3 px-4 text-white/60">Wiring Method</th>
                      <th className="text-left py-3 px-4 text-white/60">Under Buildings</th>
                      <th className="text-left py-3 px-4 text-white/60">Under Driveways</th>
                      <th className="text-left py-3 px-4 text-white/60">General (No Specific Designation)</th>
                    </tr>
                  </thead>
                  <tbody className="text-white/80">
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">Rigid Metal Conduit (RMC)</td>
                      <td className="py-3 px-4 font-mono text-cyan-400">0 in (in raceway)</td>
                      <td className="py-3 px-4 font-mono text-cyan-400">18 in</td>
                      <td className="py-3 px-4 font-mono text-cyan-400">6 in</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">Intermediate Metal Conduit (IMC)</td>
                      <td className="py-3 px-4 font-mono text-cyan-400">0 in (in raceway)</td>
                      <td className="py-3 px-4 font-mono text-cyan-400">18 in</td>
                      <td className="py-3 px-4 font-mono text-cyan-400">6 in</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">PVC Schedule 80 or Rigid Nonmetallic Conduit</td>
                      <td className="py-3 px-4 font-mono text-cyan-400">0 in (in raceway)</td>
                      <td className="py-3 px-4 font-mono text-cyan-400">18 in</td>
                      <td className="py-3 px-4 font-mono text-cyan-400">18 in</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">UF Cable (Direct Burial, 120V GFCI protected or 120V residential only)</td>
                      <td className="py-3 px-4 font-mono text-cyan-400">0 in (in raceway)</td>
                      <td className="py-3 px-4 font-mono text-cyan-400">18 in</td>
                      <td className="py-3 px-4 font-mono text-cyan-400">12 in</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4">UF Cable or Direct Burial Cable (general, not exceeding 600V)</td>
                      <td className="py-3 px-4 font-mono text-cyan-400">0 in (in raceway)</td>
                      <td className="py-3 px-4 font-mono text-cyan-400">24 in</td>
                      <td className="py-3 px-4 font-mono text-cyan-400">24 in</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h3 className="text-xl font-display font-semibold mb-3 text-cyan-400">Common Underground Wiring Methods</h3>
              <div className="grid md:grid-cols-2 gap-6 my-6">
                <div className="bg-white/5 rounded-xl p-6">
                  <h4 className="font-semibold text-white mb-3">PVC Conduit with THWN/THHN</h4>
                  <p className="text-white/60 text-sm mb-2">
                    Schedule 40 PVC conduit with individual THWN-2 conductors is the most common method for underground feeders to detached buildings. Schedule 80 is required where the conduit emerges from the ground and is exposed to physical damage.
                  </p>
                  <p className="text-white/60 text-sm">
                    <strong>Advantages:</strong> Cost-effective, easy to install, allows conductor upgrades by pulling new wire
                  </p>
                </div>
                <div className="bg-white/5 rounded-xl p-6">
                  <h4 className="font-semibold text-white mb-3">Direct Burial Cable (UF or USE)</h4>
                  <p className="text-white/60 text-sm mb-2">
                    Type UF (underground feeder) cable can be directly buried without conduit, though it requires deeper burial depths. Type USE-2 cable is also suitable for direct burial and underground service entrance applications.
                  </p>
                  <p className="text-white/60 text-sm">
                    <strong>Advantages:</strong> No conduit required, single trench operation
                  </p>
                </div>
              </div>

              <p className="text-white/80 mb-4">
                When sizing underground feeder conductors, be sure to account for <Link href="/blog/how-to-calculate-voltage-drop" className="text-purple-400 hover:text-purple-300">voltage drop calculations</Link> &mdash; long runs to detached buildings often require oversized conductors to keep voltage drop within acceptable limits. NEC 210.19(A) Informational Note No. 4 and 215.2(A)(3) Informational Note No. 2 recommend a maximum 3% voltage drop on branch circuits and 5% combined feeder and branch circuit drop. Refer to <Link href="/blog/wire-sizing-guide-nec-ampacity-tables" className="text-purple-400 hover:text-purple-300">wire sizing and NEC ampacity tables</Link> for proper conductor selection.
              </p>
            </section>

            {/* Mid-Article CTA */}
            <div className="not-prose my-12 bg-gradient-to-r from-purple-900/40 to-cyan-900/40 rounded-xl p-6 border border-purple-500/20">
              <div className="flex flex-col sm:flex-row items-center gap-4">
                <div className="flex-1 text-center sm:text-left">
                  <p className="font-display font-bold text-lg text-white mb-1">Ampora &mdash; The Electrician&apos;s AI Companion</p>
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

            <section id="disconnecting-means" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Disconnecting Means at Detached Buildings</h2>
              <p className="text-white/80 mb-4">
                <strong>NEC Section 225.31</strong> is one of the most critical requirements in Article 225: every building or structure supplied by a feeder or branch circuit must have a <strong>disconnecting means</strong> installed at a readily accessible location either outside the building or structure, or inside nearest the point of entry of the conductors.
              </p>

              <div className="bg-purple-900/30 rounded-xl p-6 my-6">
                <h4 className="font-semibold text-purple-400 mb-3">225.31 &mdash; Disconnecting Means Required</h4>
                <p className="text-white/70 text-sm">
                  For each building or structure served, a means must be provided to disconnect all ungrounded conductors that supply the building. The disconnect must be installed at a <strong>readily accessible location</strong> nearest the point of entry of the conductors, either outside or inside the building.
                </p>
              </div>

              <h3 className="text-xl font-display font-semibold mb-3 text-cyan-400">Disconnect Location Requirements (225.32)</h3>
              <p className="text-white/80 mb-4">
                Section 225.32 requires the disconnecting means to be installed at a readily accessible location. While both interior and exterior locations are permitted, the preferred location is:
              </p>

              <div className="space-y-4 my-6">
                <div className="bg-white/5 rounded-xl p-4 flex items-start gap-4">
                  <span className="bg-purple-600 text-white text-sm font-bold px-3 py-1 rounded-full">1</span>
                  <div>
                    <p className="font-semibold text-white">Outside the Building</p>
                    <p className="text-white/60 text-sm">The most common and preferred location. An exterior-rated disconnect switch or circuit breaker is mounted on the outside of the detached building, near where the feeder conductors enter. This allows first responders to de-energize the building without entering.</p>
                  </div>
                </div>
                <div className="bg-white/5 rounded-xl p-4 flex items-start gap-4">
                  <span className="bg-purple-600 text-white text-sm font-bold px-3 py-1 rounded-full">2</span>
                  <div>
                    <p className="font-semibold text-white">Inside, Nearest Point of Entry</p>
                    <p className="text-white/60 text-sm">If installed inside, the disconnect must be located nearest the point of entry of the conductors. The intent is to minimize the length of unprotected feeder conductors inside the building. A sub-panel with a main breaker satisfies this requirement when located at the point of entry. For more details, see our <Link href="/blog/sub-panel-installation-guide" className="text-purple-400 hover:text-purple-300">sub-panel installation guide</Link>.</p>
                  </div>
                </div>
              </div>

              <h3 className="text-xl font-display font-semibold mb-3 text-cyan-400">Disconnect Rating and Type (225.36 &amp; 225.38)</h3>
              <p className="text-white/80 mb-4">
                The disconnecting means must meet specific rating and type requirements:
              </p>
              <ul className="list-disc list-inside text-white/70 space-y-2 mb-4">
                <li><strong>Ampere rating:</strong> Must be rated not less than the calculated load to be served, per 225.39</li>
                <li><strong>Suitable as disconnect:</strong> Must be listed and identified as suitable for use as service equipment when the building is the only structure on the premises, or listed as a disconnect if additional buildings are present</li>
                <li><strong>Simultaneous disconnect:</strong> Each disconnect must simultaneously disconnect all ungrounded conductors it controls</li>
                <li><strong>Indicating:</strong> Must clearly indicate whether it is in the open (off) or closed (on) position</li>
              </ul>

              <div className="bg-white/5 rounded-xl p-6 my-6">
                <h4 className="font-semibold text-white mb-3">Common Disconnect Types for Detached Buildings</h4>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="bg-cyan-900/20 rounded-lg p-4 border border-cyan-500/20">
                    <p className="font-semibold text-cyan-400 text-sm mb-1">Fusible Disconnect Switch</p>
                    <p className="text-white/60 text-xs">NEMA 3R rated outdoor enclosure with fused disconnect. Provides both disconnecting means and overcurrent protection.</p>
                  </div>
                  <div className="bg-cyan-900/20 rounded-lg p-4 border border-cyan-500/20">
                    <p className="font-semibold text-cyan-400 text-sm mb-1">Non-Fusible Disconnect</p>
                    <p className="text-white/60 text-xs">Provides disconnecting means only. Overcurrent protection must be provided by the breaker at the main panel.</p>
                  </div>
                  <div className="bg-cyan-900/20 rounded-lg p-4 border border-cyan-500/20">
                    <p className="font-semibold text-cyan-400 text-sm mb-1">Sub-Panel with Main Breaker</p>
                    <p className="text-white/60 text-xs">A loadcenter with a main circuit breaker serves as both disconnect and distribution panel. Most common for garages and workshops.</p>
                  </div>
                </div>
              </div>

              <h3 className="text-xl font-display font-semibold mb-3 text-cyan-400">Minimum Disconnect Rating (225.39)</h3>
              <p className="text-white/80 mb-4">
                Section 225.39 establishes minimum ampere ratings for the disconnect, regardless of the actual calculated load:
              </p>
              <div className="overflow-x-auto my-6">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-white/20">
                      <th className="text-left py-3 px-4 text-white/60">Application</th>
                      <th className="text-left py-3 px-4 text-white/60">Minimum Disconnect Rating</th>
                    </tr>
                  </thead>
                  <tbody className="text-white/80">
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">One-circuit installations</td>
                      <td className="py-3 px-4 font-mono text-cyan-400">15 amperes</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">Two-circuit installations</td>
                      <td className="py-3 px-4 font-mono text-cyan-400">30 amperes</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">One-family dwelling (all loads)</td>
                      <td className="py-3 px-4 font-mono text-cyan-400">100 amperes</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4">All other installations</td>
                      <td className="py-3 px-4 font-mono text-cyan-400">60 amperes</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section id="number-of-disconnects" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Number of Disconnects Allowed (225.33)</h2>
              <p className="text-white/80 mb-4">
                <strong>NEC Section 225.33</strong> addresses one of the most commonly referenced provisions of Article 225: the maximum number of disconnecting means permitted for each supply at a building or structure.
              </p>

              <div className="bg-purple-900/30 rounded-xl p-6 my-6 border border-purple-500/30">
                <h4 className="font-semibold text-purple-400 mb-3">225.33 &mdash; Maximum Number of Disconnects</h4>
                <p className="text-white/70 mb-3">
                  The disconnecting means for each supply permitted by 225.30 shall consist of not more than <strong>six switches or six circuit breakers</strong> mounted in a single enclosure, in a group of separate enclosures, or in or on a switchboard or switchgear. There shall be no more than six disconnects per supply grouped in any one location.
                </p>
                <p className="text-white/60 text-sm">
                  This is commonly known as the <strong>&ldquo;six disconnect rule&rdquo;</strong> or the <strong>&ldquo;six throw rule&rdquo;</strong> &mdash; all power to the building must be disconnectable in no more than six motions of the hand.
                </p>
              </div>

              <p className="text-white/80 mb-4">
                In practice, most detached buildings use a single disconnect &mdash; either a standalone disconnect switch or a sub-panel with a main breaker. The six-disconnect option is more commonly encountered in commercial and industrial settings where multiple feeders serve different systems in the same building.
              </p>

              <div className="grid md:grid-cols-2 gap-6 my-6">
                <div className="bg-white/5 rounded-xl p-6">
                  <h4 className="font-semibold text-green-400 mb-3">Compliant Examples</h4>
                  <ul className="text-white/60 text-sm space-y-2">
                    <li>&#10003; Single 200A main breaker panel serving entire detached garage</li>
                    <li>&#10003; Three disconnect switches (lighting, HVAC, process) grouped together on an industrial outbuilding</li>
                    <li>&#10003; Six circuit breakers in a single switchboard serving all loads in a warehouse building</li>
                    <li>&#10003; One disconnect for each of two separate supplies to one building (two groups of up to six each)</li>
                  </ul>
                </div>
                <div className="bg-white/5 rounded-xl p-6">
                  <h4 className="font-semibold text-red-400 mb-3">Non-Compliant Examples</h4>
                  <ul className="text-white/60 text-sm space-y-2">
                    <li>&#10007; Seven individual disconnect switches for one supply on a building</li>
                    <li>&#10007; Six disconnects scattered at different locations around the building (must be grouped)</li>
                    <li>&#10007; MLO (main-lug-only) panel with no separate disconnect at a detached building (no disconnect means at the building)</li>
                    <li>&#10007; A panelboard behind locked rooms counted as the disconnect (not readily accessible)</li>
                  </ul>
                </div>
              </div>

              <h3 className="text-xl font-display font-semibold mb-3 text-cyan-400">225.30 &mdash; Number of Supplies</h3>
              <p className="text-white/80 mb-4">
                Section 225.30 limits each building or structure to be supplied by only <strong>one feeder or one branch circuit</strong>, unless one of several exceptions is met. Exceptions include separate systems (fire pumps, emergency power, legally required standby), different voltages or frequencies, different uses, capacity requirements exceeding 2000 amperes, parallel power production systems, and documented switching procedures for multiple sources.
              </p>
            </section>

            <section id="grounding-separate-buildings" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Grounding at Separate Buildings</h2>
              <p className="text-white/80 mb-4">
                Grounding requirements at separate buildings supplied by feeders are covered in <strong>NEC Section 250.32</strong>, which works in conjunction with Article 225. This is one of the most complex and commonly misunderstood areas of outside feeder installation. For a deep dive into grounding principles, see our <Link href="/blog/nec-article-250-grounding-guide" className="text-purple-400 hover:text-purple-300">NEC Article 250 grounding guide</Link>.
              </p>

              <h3 className="text-xl font-display font-semibold mb-3 text-cyan-400">Grounding Electrode System Required (250.32(A))</h3>
              <p className="text-white/80 mb-4">
                A <strong>grounding electrode system</strong> must be established at each separate building or structure served by a feeder. This includes any electrodes present at the building (such as metal underground water pipe, concrete-encased electrodes, ground rods, or ground rings) and must comply with the requirements of NEC 250.50 through 250.60.
              </p>

              <div className="bg-white/5 rounded-xl p-6 my-6">
                <h4 className="font-semibold text-cyan-400 mb-3">Grounding Electrode Conductor (GEC)</h4>
                <p className="text-white/70 mb-3 text-sm">
                  A grounding electrode conductor must be installed at the separate building to connect the equipment grounding bar to the grounding electrode system. The GEC is sized per NEC Table 250.66 based on the size of the feeder conductors.
                </p>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-white/20">
                        <th className="text-left py-2 px-3 text-white/60">Feeder Conductor Size (Copper)</th>
                        <th className="text-left py-2 px-3 text-white/60">Minimum GEC Size (Copper)</th>
                      </tr>
                    </thead>
                    <tbody className="text-white/80">
                      <tr className="border-b border-white/10">
                        <td className="py-2 px-3 font-mono">#2 AWG or smaller</td>
                        <td className="py-2 px-3 font-mono text-cyan-400">#8 AWG</td>
                      </tr>
                      <tr className="border-b border-white/10">
                        <td className="py-2 px-3 font-mono">#1 or 1/0 AWG</td>
                        <td className="py-2 px-3 font-mono text-cyan-400">#6 AWG</td>
                      </tr>
                      <tr className="border-b border-white/10">
                        <td className="py-2 px-3 font-mono">2/0 or 3/0 AWG</td>
                        <td className="py-2 px-3 font-mono text-cyan-400">#4 AWG</td>
                      </tr>
                      <tr>
                        <td className="py-2 px-3 font-mono">Over 3/0 through 350 kcmil</td>
                        <td className="py-2 px-3 font-mono text-cyan-400">#2 AWG</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <h3 className="text-xl font-display font-semibold mb-3 text-cyan-400">Equipment Grounding Conductor (EGC) Method</h3>
              <p className="text-white/80 mb-4">
                Under the current NEC, the standard method for grounding at a separate building is to run an <strong>equipment grounding conductor (EGC)</strong> with the feeder conductors from the main building to the detached building. At the detached building:
              </p>
              <ul className="list-disc list-inside text-white/70 space-y-2 mb-4">
                <li>The <strong>neutral (grounded conductor) must be isolated</strong> from the equipment grounding system &mdash; the neutral bar must not be bonded to the enclosure</li>
                <li>A separate <strong>equipment grounding bar</strong> must be installed and bonded to the enclosure</li>
                <li>The <strong>EGC</strong> connects to the equipment grounding bar</li>
                <li>A <strong>grounding electrode conductor</strong> connects the equipment grounding bar to the local grounding electrode system</li>
              </ul>

              <div className="bg-red-900/30 rounded-xl p-6 my-6 border border-red-500/30">
                <h4 className="font-semibold text-red-400 mb-3">Critical: Neutral-Ground Bond Location</h4>
                <p className="text-white/70 text-sm">
                  When an EGC is run with the feeder, the <strong>neutral must not be bonded to ground at the separate building</strong>. The neutral-ground bond exists only at the main service equipment (250.24(A)(5)). Bonding neutral to ground at both the main building and the detached building creates parallel return paths for neutral current through the grounding system, which can cause dangerous voltages on metal equipment, objectionable current flow on metal piping, and interference with ground-fault protection devices.
                </p>
              </div>

              <h3 className="text-xl font-display font-semibold mb-3 text-cyan-400">Existing Installations &mdash; Legacy Exception</h3>
              <p className="text-white/80 mb-4">
                In older installations, you may encounter feeders to detached buildings that use the neutral conductor for both the neutral return and the equipment grounding path (a three-wire feeder with no separate EGC). This was permitted under older editions of the NEC but is <strong>no longer allowed for new installations</strong>. Existing installations are typically grandfathered, but any new feeders or replacement feeders must include a separate EGC and maintain neutral-ground isolation at the detached building. For more on grounding and bonding, see our <Link href="/blog/electrical-grounding-vs-bonding" className="text-purple-400 hover:text-purple-300">grounding vs. bonding guide</Link>.
              </p>
            </section>

            <section id="multi-building-campuses" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Multi-Building Campuses</h2>
              <p className="text-white/80 mb-4">
                Commercial and industrial properties with multiple buildings present unique challenges for outside feeder design. Article 225 applies to each building or structure individually, meaning each building must have its own disconnecting means, grounding electrode system, and compliant feeder installation.
              </p>

              <div className="grid md:grid-cols-2 gap-6 my-6">
                <div className="bg-white/5 rounded-xl p-6">
                  <h4 className="font-semibold text-cyan-400 mb-3">Campus Distribution Considerations</h4>
                  <ul className="text-white/60 text-sm space-y-2">
                    <li><strong>Single supply per building:</strong> Each building generally receives one feeder per 225.30 (exceptions apply)</li>
                    <li><strong>Disconnect at each building:</strong> Every building must have its own disconnect per 225.31</li>
                    <li><strong>Feeder sizing:</strong> Size each feeder for its building&apos;s calculated load plus any applicable demand factors</li>
                    <li><strong>Voltage drop:</strong> Longer runs between buildings require careful voltage drop analysis</li>
                    <li><strong>Coordination:</strong> Overcurrent devices must be coordinated for selective tripping</li>
                  </ul>
                </div>
                <div className="bg-white/5 rounded-xl p-6">
                  <h4 className="font-semibold text-orange-400 mb-3">Common Campus Wiring Methods</h4>
                  <ul className="text-white/60 text-sm space-y-2">
                    <li><strong>Underground duct bank:</strong> Multiple conduits in a common trench, often with concrete encasement for protection</li>
                    <li><strong>Direct buried cables:</strong> Suitable for less congested routes with proper marking tape</li>
                    <li><strong>Overhead pole line:</strong> Used where underground is impractical or too expensive</li>
                    <li><strong>Medium voltage distribution:</strong> Campuses over a few hundred feet often use 4160V or higher distribution with step-down transformers at each building</li>
                    <li><strong>Pad-mounted transformers:</strong> Common for converting medium voltage distribution to utilization voltage at each building</li>
                  </ul>
                </div>
              </div>

              <div className="bg-white/5 rounded-xl p-6 my-6">
                <h4 className="font-semibold text-white mb-3">Feeder Sizing for Detached Buildings</h4>
                <p className="text-white/70 mb-3 text-sm">
                  Size outside feeders per NEC Article 220 load calculations, just as you would for any feeder. Key considerations for outside feeders include:
                </p>
                <ul className="text-white/60 space-y-2 text-sm">
                  <li><strong>225.39 minimums:</strong> Disconnect rating must meet the minimums regardless of calculated load</li>
                  <li><strong>Conductor ampacity:</strong> Per NEC 310 and applicable <Link href="/blog/wire-sizing-guide-nec-ampacity-tables" className="text-purple-400 hover:text-purple-300">ampacity tables</Link>, accounting for temperature correction and adjustment factors</li>
                  <li><strong>Voltage drop:</strong> Calculate <Link href="/blog/how-to-calculate-voltage-drop" className="text-purple-400 hover:text-purple-300">voltage drop</Link> for the feeder length and increase conductor size as needed</li>
                  <li><strong>Future load growth:</strong> Consider oversizing feeders and conduits for anticipated future loads</li>
                  <li><strong>Environmental conditions:</strong> Apply derating for underground installations in high-temperature soil or for conduits with multiple circuits</li>
                </ul>
              </div>
            </section>

            <section id="common-violations" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Common Code Violations</h2>
              <p className="text-white/80 mb-4">
                Outside feeders and branch circuits to detached buildings are frequently cited during electrical inspections. Understanding the most common violations helps you avoid them and pass inspection the first time.
              </p>

              <div className="grid md:grid-cols-2 gap-4 my-6">
                <div className="bg-red-900/20 rounded-xl p-6 border border-red-500/20">
                  <h4 className="font-semibold text-red-400 mb-3">No Disconnect at Detached Building</h4>
                  <p className="text-white/60 text-sm">
                    Running a feeder to a sub-panel in a detached garage without providing a disconnect at or near the building. An MLO (main lug only) panel alone does not satisfy the disconnecting means requirement unless there is a separate disconnect switch.
                  </p>
                </div>
                <div className="bg-red-900/20 rounded-xl p-6 border border-red-500/20">
                  <h4 className="font-semibold text-red-400 mb-3">Neutral Bonded to Ground at Sub-Panel</h4>
                  <p className="text-white/60 text-sm">
                    Bonding the neutral bar to the enclosure at the detached building sub-panel when a separate EGC is run with the feeder. The neutral must be isolated at the sub-panel; only the EGC bar bonds to the enclosure.
                  </p>
                </div>
                <div className="bg-red-900/20 rounded-xl p-6 border border-red-500/20">
                  <h4 className="font-semibold text-red-400 mb-3">Insufficient Overhead Clearance</h4>
                  <p className="text-white/60 text-sm">
                    Overhead conductors that sag below the required minimum clearance heights, especially over driveways (12 feet minimum for residential, 300V or less) or areas accessible to pedestrians (10 feet for 150V or less).
                  </p>
                </div>
                <div className="bg-red-900/20 rounded-xl p-6 border border-red-500/20">
                  <h4 className="font-semibold text-red-400 mb-3">Inadequate Burial Depth</h4>
                  <p className="text-white/60 text-sm">
                    Underground feeder cables or conduits buried at insufficient depth. Common mistake: burying UF cable at 12 inches under a driveway when 24 inches (or 18 inches for conduit) is required.
                  </p>
                </div>
                <div className="bg-red-900/20 rounded-xl p-6 border border-red-500/20">
                  <h4 className="font-semibold text-red-400 mb-3">No Grounding Electrode at Detached Building</h4>
                  <p className="text-white/60 text-sm">
                    Failing to install a grounding electrode system at the separate building. At minimum, two ground rods spaced 6 feet apart are typically required (or a single rod if tested at 25 ohms or less).
                  </p>
                </div>
                <div className="bg-red-900/20 rounded-xl p-6 border border-red-500/20">
                  <h4 className="font-semibold text-red-400 mb-3">Missing EGC with Feeder</h4>
                  <p className="text-white/60 text-sm">
                    Running only three wires (two hots and a neutral) to a detached building without an equipment grounding conductor. Current NEC requires a four-wire feeder (two hots, neutral, and EGC) for new installations.
                  </p>
                </div>
                <div className="bg-red-900/20 rounded-xl p-6 border border-red-500/20">
                  <h4 className="font-semibold text-red-400 mb-3">Disconnect Not Readily Accessible</h4>
                  <p className="text-white/60 text-sm">
                    Placing the disconnect behind locked doors, above suspended ceilings, or in locations that require a ladder or removal of obstacles to reach. &ldquo;Readily accessible&rdquo; means capable of being reached quickly without climbing, removing obstacles, or using keys.
                  </p>
                </div>
                <div className="bg-red-900/20 rounded-xl p-6 border border-red-500/20">
                  <h4 className="font-semibold text-red-400 mb-3">Undersized Conductors (Voltage Drop)</h4>
                  <p className="text-white/60 text-sm">
                    Using conductors sized only for ampacity without accounting for voltage drop on long runs. A 200-foot underground run to a detached garage may need conductors two or three sizes larger than the minimum ampacity rating requires.
                  </p>
                </div>
              </div>

              <div className="bg-cyan-900/30 rounded-xl p-6 my-6">
                <h4 className="font-semibold text-cyan-400 mb-3">Pre-Inspection Checklist</h4>
                <ul className="text-white/70 space-y-2 text-sm">
                  <li>&#9744; Disconnect installed at detached building per 225.31/225.32</li>
                  <li>&#9744; Disconnect rated per 225.39 minimums</li>
                  <li>&#9744; No more than six disconnects per supply per 225.33</li>
                  <li>&#9744; Overhead clearances meet 225.18/225.19 requirements</li>
                  <li>&#9744; Underground burial depths meet Table 300.5</li>
                  <li>&#9744; EGC run with feeder conductors</li>
                  <li>&#9744; Neutral isolated from ground at sub-panel (not bonded)</li>
                  <li>&#9744; Grounding electrode system installed at detached building</li>
                  <li>&#9744; GEC sized per Table 250.66</li>
                  <li>&#9744; Conductors sized for both ampacity and voltage drop</li>
                  <li>&#9744; Physical protection provided where conductors emerge from ground</li>
                </ul>
              </div>
            </section>

            <section id="faq" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Frequently Asked Questions</h2>

              <div className="space-y-6 my-6">
                <div className="bg-white/5 rounded-xl p-6">
                  <h3 className="font-semibold text-white mb-2">Do I need a disconnect at a detached garage?</h3>
                  <p className="text-white/70 text-sm">
                    Yes. NEC 225.31 requires a disconnecting means at every building or structure supplied by a feeder or branch circuit. For a detached garage, this is typically satisfied by either an exterior disconnect switch or a sub-panel with a main breaker located inside the garage near the point of conductor entry.
                  </p>
                </div>

                <div className="bg-white/5 rounded-xl p-6">
                  <h3 className="font-semibold text-white mb-2">Can I use an MLO (main lug only) panel at a detached building?</h3>
                  <p className="text-white/70 text-sm">
                    You can use an MLO panel <strong>only if</strong> a separate disconnect is provided at the building. The MLO panel itself does not satisfy the disconnect requirement of 225.31. Common solutions include installing a disconnect switch ahead of the MLO panel, or simply using a panel with a main breaker instead.
                  </p>
                </div>

                <div className="bg-white/5 rounded-xl p-6">
                  <h3 className="font-semibold text-white mb-2">What size wire do I need to run to my detached garage?</h3>
                  <p className="text-white/70 text-sm">
                    The wire size depends on the load you plan to serve and the distance of the run. For a typical residential detached garage with a 60A sub-panel and a 100-foot run, #6 AWG copper or #4 AWG aluminum conductors are common starting points, but you must calculate the actual load and <Link href="/blog/how-to-calculate-voltage-drop" className="text-purple-400 hover:text-purple-300">check voltage drop</Link> for your specific distance. Longer runs may require larger conductors.
                  </p>
                </div>

                <div className="bg-white/5 rounded-xl p-6">
                  <h3 className="font-semibold text-white mb-2">Do I need ground rods at the detached building?</h3>
                  <p className="text-white/70 text-sm">
                    Yes. Per NEC 250.32(A), a grounding electrode system must be established at each separate building. In most cases, this means installing at least two ground rods (each at least 8 feet long) spaced a minimum of 6 feet apart. If the first ground rod has a resistance of 25 ohms or less, a single rod is acceptable, but most electricians install two as standard practice. A grounding electrode conductor must connect the electrode system to the equipment grounding bar in the sub-panel.
                  </p>
                </div>

                <div className="bg-white/5 rounded-xl p-6">
                  <h3 className="font-semibold text-white mb-2">Can I run a 240V circuit to an outbuilding for a single piece of equipment?</h3>
                  <p className="text-white/70 text-sm">
                    Yes, you can run a single branch circuit (rather than a full feeder) to an outbuilding for a dedicated load. A disconnect is still required at the outbuilding per 225.31. The circuit must still comply with all applicable Article 225 requirements for overhead clearances or underground burial depth. The disconnect can be as simple as a single-pole switch or a listed disconnect switch rated for the circuit.
                  </p>
                </div>

                <div className="bg-white/5 rounded-xl p-6">
                  <h3 className="font-semibold text-white mb-2">What is the minimum overhead clearance over a residential driveway?</h3>
                  <p className="text-white/70 text-sm">
                    For overhead conductors not exceeding 300 volts to ground (which covers most 120/240V residential feeders), the minimum clearance over residential driveways is <strong>12 feet</strong> per NEC 225.18. For conductors exceeding 300V to ground, the minimum increases to 15 feet. Over areas subject to truck traffic, the requirement is 18 feet.
                  </p>
                </div>

                <div className="bg-white/5 rounded-xl p-6">
                  <h3 className="font-semibold text-white mb-2">Should the neutral be bonded to ground at the detached building?</h3>
                  <p className="text-white/70 text-sm">
                    <strong>No</strong> &mdash; not when an equipment grounding conductor (EGC) is run with the feeder, which is required for all new installations. The neutral must be <strong>isolated</strong> at the detached building. The neutral-ground bond exists only at the main service equipment in the main building. Bonding neutral to ground at both locations creates hazardous parallel return paths for current.
                  </p>
                </div>

                <div className="bg-white/5 rounded-xl p-6">
                  <h3 className="font-semibold text-white mb-2">How many feeders can supply one detached building?</h3>
                  <p className="text-white/70 text-sm">
                    Per NEC 225.30, each building or structure shall be supplied by only <strong>one feeder or one branch circuit</strong> unless specific exceptions apply. Exceptions include separate supplies for fire pumps, emergency systems, legally required standby systems, optional standby systems, parallel power production, and documented switching procedures. When multiple supplies are permitted, each supply can have up to six disconnects per 225.33.
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
                  Join thousands of electricians using Ampora for instant NEC code answers, electrical calculations, and AI-powered troubleshooting &mdash; right from your phone.
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
                <Link href="/blog/nec-service-entrance-requirements" className="bg-white/5 hover:bg-white/10 rounded-xl p-6 transition-colors">
                  <span className="text-purple-400 text-sm">NEC Code</span>
                  <h3 className="font-semibold mt-2">NEC Service Entrance Requirements</h3>
                </Link>
                <Link href="/blog/underground-wiring-installation-guide" className="bg-white/5 hover:bg-white/10 rounded-xl p-6 transition-colors">
                  <span className="text-green-400 text-sm">Installation</span>
                  <h3 className="font-semibold mt-2">Underground Wiring Installation Guide</h3>
                </Link>
                <Link href="/blog/sub-panel-installation-guide" className="bg-white/5 hover:bg-white/10 rounded-xl p-6 transition-colors">
                  <span className="text-blue-400 text-sm">Installation</span>
                  <h3 className="font-semibold mt-2">Sub-Panel Installation Guide</h3>
                </Link>
                <Link href="/blog/electrical-grounding-vs-bonding" className="bg-white/5 hover:bg-white/10 rounded-xl p-6 transition-colors">
                  <span className="text-cyan-400 text-sm">NEC Code</span>
                  <h3 className="font-semibold mt-2">Electrical Grounding vs. Bonding Explained</h3>
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
