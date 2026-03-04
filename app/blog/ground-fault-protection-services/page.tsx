import { Metadata } from "next";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import { BlogPostingJsonLd, BreadcrumbJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Ground Fault Protection for Services: NEC 230.95 Complete Guide",
  description: "Complete guide to ground fault protection (GFP) for services per NEC 230.95. Learn GFP vs GFCI differences, 1000 amp threshold requirements, solidly grounded wye system criteria, two levels of GFP per NEC 215.10, zero-sequence and residual sensing methods, GFP testing and maintenance requirements, nuisance tripping causes, and healthcare facility exceptions.",
  keywords: [
    "ground fault protection",
    "nec 230.95",
    "GFP vs GFCI",
    "ground fault protection equipment",
    "service disconnect GFP",
    "1000 amp ground fault",
    "solidly grounded wye",
    "GFP testing requirements",
    "ground fault relay",
    "main breaker ground fault"
  ],
  alternates: {
    canonical: "https://amporalabs.com/blog/ground-fault-protection-services",
  },
  openGraph: {
    title: "Ground Fault Protection for Services: NEC 230.95 Complete Guide - Ampora",
    description: "Master ground fault protection requirements for electrical services with this comprehensive NEC 230.95 guide covering GFP vs GFCI, testing, sensing methods, and healthcare exceptions.",
    url: "https://amporalabs.com/blog/ground-fault-protection-services",
    type: "article",
    publishedTime: "2026-03-04",
  },
};

function HeroIllustration() {
  return (
    <svg viewBox="0 0 400 180" className="w-full h-40 md:h-48" aria-label="Ground fault protection system diagram showing current transformers and relay">
      {/* Background */}
      <rect x="10" y="10" width="380" height="160" rx="4" fill="#1f2937" stroke="#374151" strokeWidth="1"/>

      {/* Main Bus / Service Entrance */}
      <rect x="30" y="30" width="140" height="50" rx="3" fill="#7c3aed" fillOpacity="0.15" stroke="#7c3aed" strokeWidth="1.5"/>
      <text x="100" y="48" textAnchor="middle" fill="#a78bfa" fontSize="7" fontWeight="bold">SERVICE DISCONNECT</text>
      <text x="100" y="60" textAnchor="middle" fill="#a78bfa" fontSize="6">1200A / 480Y/277V</text>
      <text x="100" y="72" textAnchor="middle" fill="#9ca3af" fontSize="5">Solidly Grounded Wye</text>

      {/* Phase Conductors (3 lines) */}
      <line x1="170" y1="40" x2="220" y2="40" stroke="#ef4444" strokeWidth="1.5"/>
      <line x1="170" y1="50" x2="220" y2="50" stroke="#f59e0b" strokeWidth="1.5"/>
      <line x1="170" y1="60" x2="220" y2="60" stroke="#3b82f6" strokeWidth="1.5"/>
      {/* Neutral */}
      <line x1="170" y1="70" x2="220" y2="70" stroke="#9ca3af" strokeWidth="1" strokeDasharray="3,2"/>

      {/* Phase Labels */}
      <text x="175" y="37" fill="#ef4444" fontSize="5">A</text>
      <text x="175" y="47" fill="#f59e0b" fontSize="5">B</text>
      <text x="175" y="57" fill="#3b82f6" fontSize="5">C</text>
      <text x="175" y="68" fill="#9ca3af" fontSize="5">N</text>

      {/* CT (Zero-Sequence / Window CT) */}
      <circle cx="232" cy="55" r="18" fill="none" stroke="#22d3ee" strokeWidth="2"/>
      <text x="232" y="53" textAnchor="middle" fill="#22d3ee" fontSize="6" fontWeight="bold">CT</text>
      <text x="232" y="61" textAnchor="middle" fill="#22d3ee" fontSize="5">Zero-Seq</text>

      {/* Conductors through CT */}
      <line x1="244" y1="40" x2="290" y2="40" stroke="#ef4444" strokeWidth="1.5"/>
      <line x1="244" y1="50" x2="290" y2="50" stroke="#f59e0b" strokeWidth="1.5"/>
      <line x1="244" y1="60" x2="290" y2="60" stroke="#3b82f6" strokeWidth="1.5"/>
      <line x1="244" y1="70" x2="290" y2="70" stroke="#9ca3af" strokeWidth="1" strokeDasharray="3,2"/>

      {/* Load Side */}
      <rect x="290" y="30" width="80" height="50" rx="3" fill="#065f46" fillOpacity="0.2" stroke="#10b981" strokeWidth="1"/>
      <text x="330" y="50" textAnchor="middle" fill="#10b981" fontSize="7" fontWeight="bold">LOAD</text>
      <text x="330" y="62" textAnchor="middle" fill="#10b981" fontSize="5">Distribution</text>
      <text x="330" y="72" textAnchor="middle" fill="#9ca3af" fontSize="5">Switchboard</text>

      {/* GFP Relay */}
      <rect x="200" y="95" width="100" height="45" rx="3" fill="#7c3aed" fillOpacity="0.2" stroke="#a78bfa" strokeWidth="1.5"/>
      <text x="250" y="110" textAnchor="middle" fill="#a78bfa" fontSize="7" fontWeight="bold">GFP RELAY</text>
      <text x="250" y="121" textAnchor="middle" fill="#9ca3af" fontSize="5">Pickup: 1200A</text>
      <text x="250" y="131" textAnchor="middle" fill="#9ca3af" fontSize="5">Delay: 0.5 sec max</text>

      {/* CT to Relay connection */}
      <line x1="232" y1="73" x2="232" y2="95" stroke="#22d3ee" strokeWidth="1" strokeDasharray="4,2"/>
      <text x="238" y="87" fill="#22d3ee" fontSize="4">Signal</text>

      {/* Relay to Breaker trip connection */}
      <line x1="200" y1="117" x2="100" y2="117" stroke="#a78bfa" strokeWidth="1" strokeDasharray="4,2"/>
      <line x1="100" y1="117" x2="100" y2="80" stroke="#a78bfa" strokeWidth="1" strokeDasharray="4,2"/>
      <text x="145" y="114" fill="#a78bfa" fontSize="4">Trip Signal</text>

      {/* Ground fault arrow */}
      <line x1="330" y1="80" x2="330" y2="150" stroke="#ef4444" strokeWidth="1.5"/>
      <polygon points="330,155 325,148 335,148" fill="#ef4444"/>
      <text x="345" y="140" fill="#ef4444" fontSize="5" fontWeight="bold">Ground</text>
      <text x="345" y="148" fill="#ef4444" fontSize="5" fontWeight="bold">Fault</text>

      {/* Ground symbol */}
      <line x1="322" y1="158" x2="338" y2="158" stroke="#ef4444" strokeWidth="1.5"/>
      <line x1="325" y1="162" x2="335" y2="162" stroke="#ef4444" strokeWidth="1.2"/>
      <line x1="328" y1="166" x2="332" y2="166" stroke="#ef4444" strokeWidth="1"/>

      {/* Info box */}
      <rect x="30" y="95" width="155" height="65" rx="3" fill="#1e3a5f" fillOpacity="0.4" stroke="#3b82f6" strokeWidth="0.5"/>
      <text x="37" y="108" fill="#60a5fa" fontSize="5.5" fontWeight="bold">NEC 230.95 Requirements:</text>
      <text x="37" y="120" fill="#9ca3af" fontSize="5">&#8226; 1000A or more service disconnect</text>
      <text x="37" y="130" fill="#9ca3af" fontSize="5">&#8226; Greater than 150V to ground</text>
      <text x="37" y="140" fill="#9ca3af" fontSize="5">&#8226; Solidly grounded wye system</text>
      <text x="37" y="150" fill="#9ca3af" fontSize="5">&#8226; Max setting: 1200A, 1 sec delay</text>
    </svg>
  );
}

export default function GroundFaultProtectionServicesPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navigation />
      <div className="pt-20">
        <BreadcrumbJsonLd
          items={[
            { name: "Home", url: "https://amporalabs.com" },
            { name: "Blog", url: "https://amporalabs.com/blog" },
            { name: "Ground Fault Protection for Services", url: "https://amporalabs.com/blog/ground-fault-protection-services" },
          ]}
        />
        <BlogPostingJsonLd
          headline="Ground Fault Protection for Services: NEC 230.95 Complete Guide"
          description="Complete guide to ground fault protection for electrical services per NEC 230.95 covering GFP vs GFCI, sensing methods, testing requirements, healthcare exceptions, and nuisance tripping."
          datePublished="2026-03-04"
          dateModified="2026-03-04"
          url="https://amporalabs.com/blog/ground-fault-protection-services"
          wordCount={4800}
          keywords={["ground fault protection", "NEC 230.95", "GFP vs GFCI", "solidly grounded wye", "GFP testing"]}
        />

        <article className="max-w-4xl mx-auto px-6 py-12">
          {/* Breadcrumb */}
          <nav className="text-sm text-white/60 mb-8">
            <Link href="/" className="hover:text-white">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/blog" className="hover:text-white">Blog</Link>
            <span className="mx-2">/</span>
            <span className="text-white">Ground Fault Protection for Services</span>
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
              Ground Fault Protection for Services: NEC 230.95 Complete Guide
            </h1>
            <p className="text-xl text-white/70">
              Ground fault protection of equipment (GFP) is a critical NEC requirement for large electrical services that prevents destructive arcing ground faults from causing fires and equipment damage. This guide covers NEC 230.95 requirements, the difference between GFP and GFCI, the 1000 amp threshold, solidly grounded wye system criteria, two levels of GFP, sensing methods, testing requirements, healthcare facility exceptions, and common installation issues.
            </p>
          </header>

          <div className="mb-12 bg-gradient-to-br from-purple-900/20 to-cyan-900/20 rounded-2xl p-6 border border-white/10">
            <HeroIllustration />
          </div>

          {/* Safety Warning */}
          <div className="bg-red-900/40 border-2 border-red-500/50 rounded-2xl p-6 mb-12">
            <div className="flex items-start gap-4">
              <div className="text-3xl">&#9888;</div>
              <div>
                <h3 className="font-display font-bold text-lg mb-2 text-red-400">Critical Safety Information</h3>
                <p className="text-white/80 text-sm">
                  This article is for educational purposes only. Ground fault protection equipment must be installed and tested by qualified electricians and engineers. Always follow the NEC, manufacturer instructions, and your local authority having jurisdiction (AHJ). Improperly installed or untested GFP can fail to operate during a ground fault, resulting in fire, equipment destruction, and risk to life.
                </p>
              </div>
            </div>
          </div>

          {/* Table of Contents */}
          <div className="bg-white/5 rounded-2xl p-6 mb-12">
            <h2 className="font-display font-bold mb-4">In This Guide</h2>
            <ul className="space-y-2 text-white/70">
              <li><a href="#what-is-gfp" className="hover:text-purple-400">What Is Ground Fault Protection (GFP)?</a></li>
              <li><a href="#gfp-vs-gfci" className="hover:text-purple-400">GFP vs GFCI: Key Differences</a></li>
              <li><a href="#nec-230-95" className="hover:text-purple-400">NEC 230.95 Requirements</a></li>
              <li><a href="#when-gfp-required" className="hover:text-purple-400">When GFP Is Required: The Three Criteria</a></li>
              <li><a href="#two-levels-gfp" className="hover:text-purple-400">Two Levels of GFP (NEC 215.10)</a></li>
              <li><a href="#sensing-methods" className="hover:text-purple-400">Types of GFP Sensing Systems</a></li>
              <li><a href="#testing-maintenance" className="hover:text-purple-400">Testing and Maintenance Requirements</a></li>
              <li><a href="#nuisance-tripping" className="hover:text-purple-400">GFP Nuisance Tripping Causes</a></li>
              <li><a href="#healthcare-exceptions" className="hover:text-purple-400">Healthcare Facility Exceptions</a></li>
              <li><a href="#installation-issues" className="hover:text-purple-400">Common Installation Issues</a></li>
            </ul>
          </div>

          {/* Article Content */}
          <div className="prose prose-invert prose-lg max-w-none">

            <section id="what-is-gfp" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">What Is Ground Fault Protection (GFP)?</h2>
              <p className="text-white/80 mb-4">
                <strong>Ground fault protection of equipment (GFP)</strong>, also called ground fault protection for services, is an overcurrent protective system designed to detect ground fault currents and disconnect the affected circuit before the fault causes catastrophic damage. Unlike standard overcurrent devices that protect against overloads and short circuits between phase conductors, GFP specifically monitors for current flowing in unintended paths to ground.
              </p>
              <p className="text-white/80 mb-4">
                Arcing ground faults on solidly grounded wye systems are particularly dangerous because they can sustain themselves at relatively low current levels &mdash; often below the trip threshold of standard <Link href="/blog/nec-article-240-overcurrent-protection" className="text-purple-400 hover:text-purple-300">overcurrent protective devices</Link>. A 480Y/277V arcing ground fault might draw only 200-500 amps, well below the instantaneous trip setting of a 1200A main breaker, allowing the fault to burn continuously and cause devastating fire damage.
              </p>

              <div className="bg-white/5 rounded-xl p-6 my-6">
                <h4 className="font-semibold text-cyan-400 mb-3">Why Arcing Ground Faults Are Destructive</h4>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                  <div>
                    <p className="text-2xl font-bold text-red-400">480V</p>
                    <p className="text-white/60 text-sm">Most common system where GFP is required</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-orange-400">80%</p>
                    <p className="text-white/60 text-sm">Of electrical fires on 480V systems caused by ground faults</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-yellow-400">200A</p>
                    <p className="text-white/60 text-sm">Typical arcing ground fault current (below breaker trip)</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-red-500">5,000&deg;F</p>
                    <p className="text-white/60 text-sm">Temperature at the arc point igniting surrounding materials</p>
                  </div>
                </div>
              </div>

              <p className="text-white/80 mb-4">
                The physics behind this hazard are straightforward: on a 480Y/277V solidly grounded wye system, phase-to-ground voltage is 277 volts. This voltage is high enough to sustain an arc once initiated, but the impedance of the arcing fault path limits the current to levels that standard overcurrent devices will not clear quickly. The arc burns at extreme temperatures, vaporizing copper conductors and igniting insulation, cable trays, and building materials.
              </p>
            </section>

            <section id="gfp-vs-gfci" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">GFP vs GFCI: Key Differences</h2>
              <p className="text-white/80 mb-4">
                One of the most common points of confusion in electrical work is the difference between <strong>ground fault protection (GFP)</strong> and <strong>ground fault circuit interrupter (GFCI)</strong> protection. While both detect ground fault current, they serve fundamentally different purposes and operate at vastly different sensitivity levels.
              </p>

              <div className="grid md:grid-cols-2 gap-6 my-6">
                <div className="bg-purple-900/30 rounded-xl p-6 border border-purple-500/20">
                  <h3 className="font-semibold text-purple-400 mb-3">GFP (Ground Fault Protection)</h3>
                  <ul className="text-white/60 text-sm space-y-2">
                    <li><strong>Purpose:</strong> Protects <em>equipment</em> from damage</li>
                    <li><strong>Sensitivity:</strong> Trips at hundreds or thousands of amps</li>
                    <li><strong>NEC reference:</strong> 230.95, 215.10</li>
                    <li><strong>Typical pickup:</strong> 100A to 1200A</li>
                    <li><strong>Time delay:</strong> Up to 1 second maximum</li>
                    <li><strong>Application:</strong> Service disconnects, feeders</li>
                    <li><strong>Does NOT protect people from shock</strong></li>
                  </ul>
                </div>
                <div className="bg-cyan-900/30 rounded-xl p-6 border border-cyan-500/20">
                  <h3 className="font-semibold text-cyan-400 mb-3">GFCI (Ground Fault Circuit Interrupter)</h3>
                  <ul className="text-white/60 text-sm space-y-2">
                    <li><strong>Purpose:</strong> Protects <em>people</em> from electrocution</li>
                    <li><strong>Sensitivity:</strong> Trips at 4-6 milliamps (0.004-0.006A)</li>
                    <li><strong>NEC reference:</strong> 210.8, 590.6</li>
                    <li><strong>Typical pickup:</strong> 5 mA (Class A)</li>
                    <li><strong>Response time:</strong> 25 milliseconds or less</li>
                    <li><strong>Application:</strong> Receptacles, branch circuits</li>
                    <li><strong>Designed specifically to prevent electrocution</strong></li>
                  </ul>
                </div>
              </div>

              <div className="bg-orange-900/30 rounded-xl p-6 my-6">
                <h4 className="font-semibold text-orange-400 mb-3">Critical Distinction</h4>
                <p className="text-white/70">
                  GFP at the service disconnect will <strong>not prevent electrocution</strong>. A lethal shock can occur at current levels as low as 50 milliamps (0.050A), while GFP equipment typically does not trip until ground fault current reaches hundreds of amps. Only GFCI protection at the branch circuit level provides personnel shock protection. Both types serve essential but different safety functions in a complete electrical system.
                </p>
              </div>
            </section>

            <section id="nec-230-95" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">NEC 230.95 Requirements</h2>
              <p className="text-white/80 mb-4">
                <strong>NEC Section 230.95</strong> is the primary code section governing ground fault protection of equipment for service disconnecting means. This section was added to the NEC after a series of devastating fires in the 1960s and 1970s caused by arcing ground faults on 480Y/277V systems that went undetected by standard overcurrent devices.
              </p>

              <div className="bg-white/5 rounded-xl p-6 my-6">
                <h4 className="font-semibold text-white mb-3">NEC 230.95 Key Provisions</h4>
                <div className="space-y-4">
                  <div className="border-l-4 border-purple-500 pl-4">
                    <p className="font-semibold text-purple-400">230.95(A) &mdash; Setting</p>
                    <p className="text-white/70 text-sm">The ground fault protection system shall operate to cause the service disconnecting means to open all ungrounded conductors. The maximum setting is <strong>1200 amperes</strong>, and the maximum time delay is <strong>one second</strong> for ground fault currents equal to or greater than 3000 amperes.</p>
                  </div>
                  <div className="border-l-4 border-purple-500 pl-4">
                    <p className="font-semibold text-purple-400">230.95(B) &mdash; Fuses</p>
                    <p className="text-white/70 text-sm">If a switch and fuse combination is used as the service disconnecting means, the fuses employed shall be capable of interrupting any current higher than the interrupting capacity of the switch during a time when the ground fault protective system will not cause the switch to open.</p>
                  </div>
                  <div className="border-l-4 border-purple-500 pl-4">
                    <p className="font-semibold text-purple-400">230.95(C) &mdash; Performance Testing</p>
                    <p className="text-white/70 text-sm">The ground fault protection system shall be <strong>performance tested when first installed on site</strong>. A written record of the test shall be made and shall be available to the authority having jurisdiction.</p>
                  </div>
                </div>
              </div>

              <p className="text-white/80 mb-4">
                The NEC intentionally limits GFP settings to prevent the protection from being set so high or so slow that it becomes ineffective. The 1200A maximum pickup and 1-second maximum delay at 3000A represent the upper bounds &mdash; in practice, many GFP systems are set more sensitively for better protection. Understanding these settings is essential alongside knowledge of <Link href="/blog/electrical-grounding-vs-bonding" className="text-purple-400 hover:text-purple-300">grounding and bonding principles</Link> to ensure proper system operation.
              </p>

              <div className="bg-white/5 rounded-xl p-6 my-6">
                <h4 className="font-semibold text-cyan-400 mb-3">NEC 230.95 Maximum Settings</h4>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-white/20">
                        <th className="text-left py-3 px-4 text-white/60">Parameter</th>
                        <th className="text-left py-3 px-4 text-white/60">Maximum Value</th>
                        <th className="text-left py-3 px-4 text-white/60">Notes</th>
                      </tr>
                    </thead>
                    <tbody className="text-white/80">
                      <tr className="border-b border-white/10">
                        <td className="py-3 px-4">Pickup Setting</td>
                        <td className="py-3 px-4 font-mono text-purple-400">1200A</td>
                        <td className="py-3 px-4 text-white/60">Maximum ground fault current to initiate trip</td>
                      </tr>
                      <tr className="border-b border-white/10">
                        <td className="py-3 px-4">Time Delay at 3000A</td>
                        <td className="py-3 px-4 font-mono text-purple-400">1.0 second</td>
                        <td className="py-3 px-4 text-white/60">Maximum delay for fault currents &ge; 3000A</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4">Conductors Opened</td>
                        <td className="py-3 px-4 font-mono text-purple-400">All ungrounded</td>
                        <td className="py-3 px-4 text-white/60">Must open all phase conductors (not neutral)</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </section>

            <section id="when-gfp-required" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">When GFP Is Required: The Three Criteria</h2>
              <p className="text-white/80 mb-4">
                NEC 230.95 requires ground fault protection when <strong>all three</strong> of the following conditions are met simultaneously. If any one condition is not present, GFP is not required by this section (although it may still be required by NEC 215.10 for feeders or by other code sections).
              </p>

              <div className="space-y-4 my-6">
                <div className="bg-purple-900/20 rounded-xl p-6 border border-purple-500/20">
                  <div className="flex items-start gap-4">
                    <span className="bg-purple-600 text-white text-sm font-bold px-3 py-1 rounded-full">1</span>
                    <div>
                      <p className="font-semibold text-purple-400 mb-2">Service Disconnect Rated 1000 Amperes or More</p>
                      <p className="text-white/70 text-sm">
                        The rating of the service disconnecting means must be 1000A or greater. This is the <em>rating</em> of the disconnect device, not the actual load current. A 1200A main breaker with only 600A of load still requires GFP. Note: prior to the 2020 NEC, the threshold was 1000A. Some older references may show different values.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="bg-purple-900/20 rounded-xl p-6 border border-purple-500/20">
                  <div className="flex items-start gap-4">
                    <span className="bg-purple-600 text-white text-sm font-bold px-3 py-1 rounded-full">2</span>
                    <div>
                      <p className="font-semibold text-purple-400 mb-2">Voltage Greater Than 150 Volts to Ground</p>
                      <p className="text-white/70 text-sm">
                        The system must have more than 150 volts to ground. A <strong>480Y/277V</strong> system has 277V to ground &mdash; GFP is required. A <strong>208Y/120V</strong> system has only 120V to ground &mdash; GFP is <em>not</em> required by 230.95. This threshold exists because lower-voltage arcing faults tend to be self-extinguishing, while 277V+ arcs sustain themselves.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="bg-purple-900/20 rounded-xl p-6 border border-purple-500/20">
                  <div className="flex items-start gap-4">
                    <span className="bg-purple-600 text-white text-sm font-bold px-3 py-1 rounded-full">3</span>
                    <div>
                      <p className="font-semibold text-purple-400 mb-2">Solidly Grounded Wye System</p>
                      <p className="text-white/70 text-sm">
                        The system must be a <strong>solidly grounded wye</strong> configuration. This means the neutral point of the wye-connected transformer or generator is connected directly to the grounding electrode system without any intentional impedance. Delta systems, high-resistance grounded systems, and ungrounded systems are <em>not</em> subject to this requirement. Understanding <Link href="/blog/3-phase-power-calculations" className="text-purple-400 hover:text-purple-300">three-phase power system configurations</Link> is essential for determining which systems require GFP.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white/5 rounded-xl p-6 my-6">
                <h4 className="font-semibold text-white mb-3">Quick Reference: Does This Service Need GFP?</h4>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-white/20">
                        <th className="text-left py-3 px-4 text-white/60">System</th>
                        <th className="text-left py-3 px-4 text-white/60">Disconnect</th>
                        <th className="text-left py-3 px-4 text-white/60">V to Ground</th>
                        <th className="text-left py-3 px-4 text-white/60">GFP Required?</th>
                      </tr>
                    </thead>
                    <tbody className="text-white/80">
                      <tr className="border-b border-white/10">
                        <td className="py-3 px-4">480Y/277V, solidly grounded wye</td>
                        <td className="py-3 px-4 font-mono">1200A</td>
                        <td className="py-3 px-4 font-mono">277V</td>
                        <td className="py-3 px-4 font-mono text-red-400">Yes</td>
                      </tr>
                      <tr className="border-b border-white/10">
                        <td className="py-3 px-4">480Y/277V, solidly grounded wye</td>
                        <td className="py-3 px-4 font-mono">800A</td>
                        <td className="py-3 px-4 font-mono">277V</td>
                        <td className="py-3 px-4 font-mono text-green-400">No (below 1000A)</td>
                      </tr>
                      <tr className="border-b border-white/10">
                        <td className="py-3 px-4">208Y/120V, solidly grounded wye</td>
                        <td className="py-3 px-4 font-mono">1600A</td>
                        <td className="py-3 px-4 font-mono">120V</td>
                        <td className="py-3 px-4 font-mono text-green-400">No (&le;150V to gnd)</td>
                      </tr>
                      <tr className="border-b border-white/10">
                        <td className="py-3 px-4">480V, 3-phase delta</td>
                        <td className="py-3 px-4 font-mono">2000A</td>
                        <td className="py-3 px-4 font-mono">N/A</td>
                        <td className="py-3 px-4 font-mono text-green-400">No (not wye)</td>
                      </tr>
                      <tr className="border-b border-white/10">
                        <td className="py-3 px-4">480Y/277V, high-resistance grounded</td>
                        <td className="py-3 px-4 font-mono">1200A</td>
                        <td className="py-3 px-4 font-mono">277V</td>
                        <td className="py-3 px-4 font-mono text-green-400">No (not solidly gnd)</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4">600Y/347V, solidly grounded wye</td>
                        <td className="py-3 px-4 font-mono">1000A</td>
                        <td className="py-3 px-4 font-mono">347V</td>
                        <td className="py-3 px-4 font-mono text-red-400">Yes</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </section>

            <section id="two-levels-gfp" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Two Levels of GFP (NEC 215.10)</h2>
              <p className="text-white/80 mb-4">
                <strong>NEC Section 215.10</strong> requires a <strong>second level</strong> of ground fault protection for feeders under specific conditions. This requirement was added because a single level of GFP at the service entrance does not always provide adequate protection for downstream equipment &mdash; particularly when the service GFP has a time delay that allows significant fault energy to pass through before tripping.
              </p>

              <div className="bg-purple-900/30 rounded-xl p-6 my-6">
                <h4 className="font-semibold text-purple-400 mb-3">When Two Levels of GFP Are Required</h4>
                <p className="text-white/70 mb-3">NEC 215.10 requires ground fault protection on feeders when:</p>
                <ul className="text-white/70 space-y-2 text-sm">
                  <li><strong>The service has GFP per 230.95:</strong> If GFP is required and installed at the service disconnect</li>
                  <li><strong>The feeder disconnect is 1000A or more:</strong> The downstream feeder disconnecting means is rated 1000A or more</li>
                  <li><strong>The system meets 230.95 criteria:</strong> Solidly grounded wye, greater than 150V to ground</li>
                </ul>
              </div>

              <h3 className="text-xl font-display font-semibold mb-3 text-cyan-400">Coordination Between Levels</h3>
              <p className="text-white/80 mb-4">
                When two levels of GFP are installed, the upstream (service) and downstream (feeder) protection must be <strong>selectively coordinated</strong>. This means the downstream device must trip first for faults on its load side, while the upstream device serves as backup. Coordination is typically achieved through:
              </p>
              <ul className="list-disc list-inside text-white/70 space-y-2 mb-4">
                <li><strong>Pickup settings:</strong> The downstream GFP is set to a lower pickup than the upstream GFP</li>
                <li><strong>Time delay settings:</strong> The downstream GFP has a shorter time delay than the upstream GFP</li>
                <li><strong>Zone-selective interlocking (ZSI):</strong> An interlocking signal allows the downstream device to trip without delay while the upstream device adds intentional delay</li>
              </ul>

              <div className="bg-white/5 rounded-xl p-6 my-6">
                <h4 className="font-semibold text-white mb-3">Example Two-Level GFP Coordination</h4>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-white/20">
                        <th className="text-left py-3 px-4 text-white/60">Level</th>
                        <th className="text-left py-3 px-4 text-white/60">Location</th>
                        <th className="text-left py-3 px-4 text-white/60">Pickup</th>
                        <th className="text-left py-3 px-4 text-white/60">Time Delay</th>
                      </tr>
                    </thead>
                    <tbody className="text-white/80">
                      <tr className="border-b border-white/10">
                        <td className="py-3 px-4 font-bold text-purple-400">Level 1 (Upstream)</td>
                        <td className="py-3 px-4">Service Main Breaker</td>
                        <td className="py-3 px-4 font-mono">1200A</td>
                        <td className="py-3 px-4 font-mono">0.5 sec</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4 font-bold text-cyan-400">Level 2 (Downstream)</td>
                        <td className="py-3 px-4">Feeder Breaker</td>
                        <td className="py-3 px-4 font-mono">400A</td>
                        <td className="py-3 px-4 font-mono">0.1 sec</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="text-white/60 text-sm mt-3">The downstream feeder GFP trips first for faults on its circuit, while the main GFP provides backup protection with a longer delay.</p>
              </div>

              <div className="bg-orange-900/30 rounded-xl p-6 my-6">
                <h4 className="font-semibold text-orange-400 mb-3">Alternative to Second Level: 215.10 Exception</h4>
                <p className="text-white/70 text-sm">
                  NEC 215.10 includes an exception: if the feeder is protected by a GFP device that <strong>does not have an intentional time delay</strong> exceeding the maximum values stated, and the feeder is in an industrial installation where conditions of maintenance and supervision ensure only qualified persons service the equipment, the second level may not be required. Always verify with the local AHJ.
                </p>
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

            <section id="sensing-methods" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Types of GFP Sensing Systems</h2>
              <p className="text-white/80 mb-4">
                There are two primary methods for sensing ground fault current in GFP systems. Both methods detect the imbalance in current flow that indicates a ground fault, but they use different physical arrangements to accomplish this.
              </p>

              <div className="grid md:grid-cols-2 gap-6 my-6">
                <div className="bg-white/5 rounded-xl p-6 border border-cyan-500/20">
                  <h3 className="font-semibold text-cyan-400 mb-3">Zero-Sequence (Window CT) Method</h3>
                  <p className="text-white/70 text-sm mb-3">All phase conductors and the neutral pass through a single large current transformer (window CT).</p>
                  <ul className="text-white/60 text-sm space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="text-green-400 mt-0.5">&#10003;</span>
                      <span>Simple design with one CT</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-400 mt-0.5">&#10003;</span>
                      <span>No CT saturation errors from load current</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-400 mt-0.5">&#10003;</span>
                      <span>Output is zero under normal conditions</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-400 mt-0.5">&#10007;</span>
                      <span>Large CT window needed for multiple conductors</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-400 mt-0.5">&#10007;</span>
                      <span>Difficult to retrofit on existing installations</span>
                    </li>
                  </ul>
                  <div className="mt-4 bg-black/30 rounded-lg p-3">
                    <p className="text-white/50 text-xs font-mono">Normal: I_A + I_B + I_C + I_N = 0</p>
                    <p className="text-red-400 text-xs font-mono">Fault: I_A + I_B + I_C + I_N = I_ground</p>
                  </div>
                </div>
                <div className="bg-white/5 rounded-xl p-6 border border-purple-500/20">
                  <h3 className="font-semibold text-purple-400 mb-3">Residual (Summation CT) Method</h3>
                  <p className="text-white/70 text-sm mb-3">Individual CTs on each phase conductor and neutral, with secondaries connected in a summation (residual) configuration.</p>
                  <ul className="text-white/60 text-sm space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="text-green-400 mt-0.5">&#10003;</span>
                      <span>Easier to install in tight spaces</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-400 mt-0.5">&#10003;</span>
                      <span>Standard CTs can be used</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-400 mt-0.5">&#10003;</span>
                      <span>Easier to retrofit on existing installations</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-400 mt-0.5">&#10007;</span>
                      <span>CT saturation errors at high fault currents</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-400 mt-0.5">&#10007;</span>
                      <span>Requires matched CTs for accuracy</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-400 mt-0.5">&#10007;</span>
                      <span>More wiring complexity (4 CTs + connections)</span>
                    </li>
                  </ul>
                  <div className="mt-4 bg-black/30 rounded-lg p-3">
                    <p className="text-white/50 text-xs font-mono">CT_A + CT_B + CT_C + CT_N = 0 (normal)</p>
                    <p className="text-red-400 text-xs font-mono">CT_A + CT_B + CT_C + CT_N &ne; 0 (fault)</p>
                  </div>
                </div>
              </div>

              <h3 className="text-xl font-display font-semibold mb-3 text-cyan-400">Ground Return (Source Ground) Method</h3>
              <p className="text-white/80 mb-4">
                A third, less common approach places a single CT on the <strong>main bonding jumper</strong> or <strong>grounding electrode conductor</strong>. Under normal conditions, no current flows through this path. During a ground fault, fault current returns through the grounding system and is detected by the CT. This method is simple but does not detect ground faults that return through paths other than the monitored conductor (such as metallic conduit or water piping).
              </p>
            </section>

            <section id="testing-maintenance" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Testing and Maintenance Requirements</h2>
              <p className="text-white/80 mb-4">
                <strong>NEC 230.95(C)</strong> mandates that ground fault protection systems be <strong>performance tested when first installed on site</strong>. This is one of the few NEC requirements for field testing of protective equipment, reflecting the critical importance of GFP and the frequency of installation errors that render GFP systems inoperative.
              </p>

              <div className="bg-red-900/30 rounded-xl p-6 my-6">
                <h4 className="font-semibold text-red-400 mb-3">Alarming Failure Rates</h4>
                <p className="text-white/70 mb-3">
                  Industry studies have consistently shown that a significant percentage of GFP systems fail to operate correctly when first installed. Testing records reveal:
                </p>
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <p className="text-2xl font-bold text-red-400">25-30%</p>
                    <p className="text-white/60 text-sm">Of new GFP installations fail initial testing</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-orange-400">50%+</p>
                    <p className="text-white/60 text-sm">Of GFP systems that have never been tested are found defective</p>
                  </div>
                </div>
              </div>

              <h3 className="text-xl font-display font-semibold mb-3 text-cyan-400">Initial Performance Testing</h3>
              <p className="text-white/80 mb-4">
                The initial performance test must verify that the GFP system operates correctly as a complete system &mdash; not just that individual components function. The test should include:
              </p>

              <div className="space-y-4 my-6">
                <div className="bg-white/5 rounded-xl p-4 flex items-start gap-4">
                  <span className="bg-cyan-600 text-white text-sm font-bold px-3 py-1 rounded-full">1</span>
                  <div>
                    <p className="font-semibold text-white">Primary Injection Test</p>
                    <p className="text-white/60 text-sm">Inject actual current through the GFP system CTs to simulate a ground fault. Verify that the relay picks up at the correct current threshold and that the disconnecting means opens within the required time. This tests the complete system from CT through relay to breaker trip coil.</p>
                  </div>
                </div>
                <div className="bg-white/5 rounded-xl p-4 flex items-start gap-4">
                  <span className="bg-cyan-600 text-white text-sm font-bold px-3 py-1 rounded-full">2</span>
                  <div>
                    <p className="font-semibold text-white">Secondary Injection Test</p>
                    <p className="text-white/60 text-sm">Inject a test signal into the relay input to verify relay pickup, timing, and trip output. This tests the relay and trip circuit but does not verify CT installation or wiring.</p>
                  </div>
                </div>
                <div className="bg-white/5 rounded-xl p-4 flex items-start gap-4">
                  <span className="bg-cyan-600 text-white text-sm font-bold px-3 py-1 rounded-full">3</span>
                  <div>
                    <p className="font-semibold text-white">CT Polarity Verification</p>
                    <p className="text-white/60 text-sm">Verify correct CT polarity and wiring connections. Reversed CT polarity is one of the most common causes of GFP failure. The residual method is particularly sensitive to CT polarity errors.</p>
                  </div>
                </div>
                <div className="bg-white/5 rounded-xl p-4 flex items-start gap-4">
                  <span className="bg-cyan-600 text-white text-sm font-bold px-3 py-1 rounded-full">4</span>
                  <div>
                    <p className="font-semibold text-white">Documentation</p>
                    <p className="text-white/60 text-sm">Record all test results including: date of test, test equipment used, pickup current measured, time delay measured, name of person performing the test, and pass/fail determination. This record must be available to the AHJ.</p>
                  </div>
                </div>
              </div>

              <h3 className="text-xl font-display font-semibold mb-3 text-cyan-400">Ongoing Maintenance Testing</h3>
              <p className="text-white/80 mb-4">
                While the NEC only requires the initial performance test, <strong>NFPA 70B (Recommended Practice for Electrical Equipment Maintenance)</strong> and industry best practices recommend periodic testing of GFP systems. Recommended intervals vary by facility criticality:
              </p>

              <div className="overflow-x-auto my-6">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-white/20">
                      <th className="text-left py-3 px-4 text-white/60">Facility Type</th>
                      <th className="text-left py-3 px-4 text-white/60">Recommended Test Interval</th>
                    </tr>
                  </thead>
                  <tbody className="text-white/80">
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">Critical facilities (hospitals, data centers)</td>
                      <td className="py-3 px-4 font-mono text-cyan-400">Annually</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">Commercial buildings</td>
                      <td className="py-3 px-4 font-mono text-cyan-400">Every 3 years</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">Industrial facilities</td>
                      <td className="py-3 px-4 font-mono text-cyan-400">Every 1-3 years</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4">After any system modifications</td>
                      <td className="py-3 px-4 font-mono text-cyan-400">Immediately</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section id="nuisance-tripping" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">GFP Nuisance Tripping Causes</h2>
              <p className="text-white/80 mb-4">
                Nuisance tripping of GFP systems causes costly unplanned outages and can lead building operators to disable or bypass the protection &mdash; a dangerous and code-violating practice. Understanding the common causes of false trips is essential for reliable GFP operation.
              </p>

              <div className="grid md:grid-cols-2 gap-4 my-6">
                <div className="bg-orange-900/20 rounded-xl p-6 border border-orange-500/20">
                  <h4 className="font-semibold text-orange-400 mb-3">Neutral-to-Ground Connections Downstream</h4>
                  <p className="text-white/60 text-sm">
                    The most common cause of GFP nuisance tripping. When a neutral-to-ground bond exists anywhere downstream of the GFP sensor, normal neutral return current splits between the neutral conductor and the grounding path. The GFP system interprets this as a ground fault. Even a single downstream N-G bond will cause problems.
                  </p>
                </div>
                <div className="bg-orange-900/20 rounded-xl p-6 border border-orange-500/20">
                  <h4 className="font-semibold text-orange-400 mb-3">CT Installation Errors</h4>
                  <p className="text-white/60 text-sm">
                    Incorrect CT polarity, wrong CT ratio, or failure to include all required conductors through the window CT. In the residual method, mismatched CT ratios or unequal burden on CT secondaries produce false residual current that appears as a ground fault.
                  </p>
                </div>
                <div className="bg-orange-900/20 rounded-xl p-6 border border-orange-500/20">
                  <h4 className="font-semibold text-orange-400 mb-3">Inrush Current</h4>
                  <p className="text-white/60 text-sm">
                    Large motor starting, transformer energization, or capacitor switching can produce transient current imbalances that temporarily appear as ground fault current. If GFP pickup is set too low or time delay too short, these transients can cause false trips.
                  </p>
                </div>
                <div className="bg-orange-900/20 rounded-xl p-6 border border-orange-500/20">
                  <h4 className="font-semibold text-orange-400 mb-3">Multiple Grounding Points</h4>
                  <p className="text-white/60 text-sm">
                    Separately derived systems (like transformers with secondary-side bonding) that create additional neutral-to-ground connections downstream of the GFP sensing point. Each bonding point provides an alternate return path that the GFP interprets as fault current.
                  </p>
                </div>
                <div className="bg-orange-900/20 rounded-xl p-6 border border-orange-500/20">
                  <h4 className="font-semibold text-orange-400 mb-3">Electromagnetic Interference</h4>
                  <p className="text-white/60 text-sm">
                    High-frequency noise from variable frequency drives (VFDs), welders, or other power electronics can induce spurious signals in GFP sensing circuits. Proper shielding and routing of CT secondary wiring can mitigate this issue.
                  </p>
                </div>
                <div className="bg-orange-900/20 rounded-xl p-6 border border-orange-500/20">
                  <h4 className="font-semibold text-orange-400 mb-3">Moisture and Contamination</h4>
                  <p className="text-white/60 text-sm">
                    Water intrusion, condensation, or conductive contamination on bus work or conductors can create low-level leakage current to ground. While this is technically a genuine ground fault, it may not represent an immediate hazard but will cause GFP operation.
                  </p>
                </div>
              </div>

              <div className="bg-cyan-900/30 rounded-xl p-6 my-6">
                <h4 className="font-semibold text-cyan-400 mb-3">Troubleshooting Nuisance Trips Checklist</h4>
                <ul className="text-white/70 space-y-2 text-sm">
                  <li>&#9744; Verify no downstream neutral-to-ground bonds exist</li>
                  <li>&#9744; Check CT polarity markings and wiring connections</li>
                  <li>&#9744; Verify all required conductors pass through window CT</li>
                  <li>&#9744; Inspect all separately derived system bonding points</li>
                  <li>&#9744; Check for moisture or contamination in equipment</li>
                  <li>&#9744; Measure actual ground fault current with clamp meter on grounding conductor</li>
                  <li>&#9744; Review GFP relay event logs for trip current magnitude and timing</li>
                  <li>&#9744; Verify GFP pickup and delay settings match coordination study</li>
                </ul>
              </div>
            </section>

            <section id="healthcare-exceptions" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Healthcare Facility Exceptions</h2>
              <p className="text-white/80 mb-4">
                Healthcare facilities present a unique challenge for ground fault protection because an unplanned power outage caused by GFP tripping can be just as life-threatening as the ground fault itself. Patients on life support, in surgery, or receiving critical treatments cannot tolerate loss of power. The NEC addresses this through specific provisions in <strong>NEC Article 517</strong>.
              </p>

              <div className="bg-green-900/20 rounded-xl p-6 my-6 border border-green-500/30">
                <h4 className="font-semibold text-green-400 mb-3">NEC 517.17 &mdash; Ground Fault Protection of Equipment</h4>
                <p className="text-white/70 mb-3">NEC 517.17 modifies the standard GFP requirements for healthcare facilities:</p>
                <ul className="text-white/70 space-y-2 text-sm">
                  <li><strong>Two levels required:</strong> When GFP is required on the service per 230.95, an additional level of ground fault protection is required on the next level of feeder disconnecting means downstream toward the life safety and critical branch loads</li>
                  <li><strong>Selective coordination mandatory:</strong> The two levels must be fully selective (coordinated) so that a ground fault on a feeder trips only that feeder, not the entire service</li>
                  <li><strong>No GFP on life safety branch:</strong> GFP shall <strong>not</strong> be installed on the life safety branch of the essential electrical system (the branch that powers exit lights, fire alarms, and other life safety loads)</li>
                  <li><strong>No GFP on critical branch:</strong> GFP shall <strong>not</strong> be installed on the critical branch of the essential electrical system (the branch that powers patient care areas and critical equipment)</li>
                </ul>
              </div>

              <div className="bg-white/5 rounded-xl p-6 my-6">
                <h4 className="font-semibold text-white mb-3">Healthcare Essential Electrical System Structure</h4>
                <div className="space-y-3">
                  <div className="bg-red-900/20 rounded-lg p-3 border-l-4 border-red-500">
                    <p className="text-red-400 font-semibold text-sm">Life Safety Branch</p>
                    <p className="text-white/60 text-xs">Exit lights, fire alarms, hospital communication &mdash; <strong>No GFP allowed</strong></p>
                  </div>
                  <div className="bg-orange-900/20 rounded-lg p-3 border-l-4 border-orange-500">
                    <p className="text-orange-400 font-semibold text-sm">Critical Branch</p>
                    <p className="text-white/60 text-xs">Patient care areas, nurse call, surgical lighting &mdash; <strong>No GFP allowed</strong></p>
                  </div>
                  <div className="bg-green-900/20 rounded-lg p-3 border-l-4 border-green-500">
                    <p className="text-green-400 font-semibold text-sm">Equipment Branch</p>
                    <p className="text-white/60 text-xs">HVAC, elevators, large equipment &mdash; GFP may be applied with coordination</p>
                  </div>
                  <div className="bg-blue-900/20 rounded-lg p-3 border-l-4 border-blue-500">
                    <p className="text-blue-400 font-semibold text-sm">Normal Power</p>
                    <p className="text-white/60 text-xs">General lighting, receptacles &mdash; Standard GFP requirements apply</p>
                  </div>
                </div>
              </div>

              <p className="text-white/80 mb-4">
                The rationale is clear: a ground fault on a feeder serving patient care areas should not trigger the service main GFP and black out the entire hospital. Selective coordination and the prohibition of GFP on life safety and critical branches ensure that ground fault protection operates surgically &mdash; disconnecting only the faulted circuit while maintaining power to life-critical systems.
              </p>
            </section>

            <section id="installation-issues" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Common Installation Issues</h2>
              <p className="text-white/80 mb-4">
                The high failure rate of GFP systems at initial testing (25-30%) points to persistent installation errors that electricians and engineers must understand and avoid. The following are the most frequently encountered problems:
              </p>

              <div className="space-y-4 my-6">
                <div className="bg-red-900/20 rounded-xl p-6 border border-red-500/20">
                  <h3 className="font-semibold text-red-400 mb-2">1. Neutral Conductor Not Through Window CT</h3>
                  <p className="text-white/60 text-sm">
                    In the zero-sequence method, all current-carrying conductors (phases AND neutral) must pass through the window CT. If the neutral is routed outside the CT, normal neutral return current appears as a ground fault. This is the single most common installation error and will cause immediate tripping when load is applied.
                  </p>
                </div>

                <div className="bg-red-900/20 rounded-xl p-6 border border-red-500/20">
                  <h3 className="font-semibold text-red-400 mb-2">2. Grounding Conductor Through Window CT</h3>
                  <p className="text-white/60 text-sm">
                    The equipment grounding conductor (EGC) must <strong>not</strong> pass through the zero-sequence window CT. If the EGC passes through the CT, ground fault current returning through the grounding system is cancelled out and the GFP becomes unable to detect the fault. The EGC should be routed around the outside of the CT.
                  </p>
                </div>

                <div className="bg-red-900/20 rounded-xl p-6 border border-red-500/20">
                  <h3 className="font-semibold text-red-400 mb-2">3. Reversed CT Polarity</h3>
                  <p className="text-white/60 text-sm">
                    In the residual method, all CTs must have consistent polarity orientation. A reversed CT causes its secondary current to add rather than cancel, creating a false residual signal equal to twice the current in that phase. This can cause either nuisance tripping or failure to detect actual faults depending on the fault location.
                  </p>
                </div>

                <div className="bg-red-900/20 rounded-xl p-6 border border-red-500/20">
                  <h3 className="font-semibold text-red-400 mb-2">4. Downstream Neutral-to-Ground Bonds</h3>
                  <p className="text-white/60 text-sm">
                    The neutral-to-ground bond must exist at only <strong>one point</strong> on the line side of (or at) the GFP sensing location. Any downstream N-G bonds cause normal neutral current to split between the neutral and grounding paths, creating a persistent false ground fault signal. Common culprits include separately derived systems, sub-panels with bonding screws installed, and equipment with factory-installed N-G bonds.
                  </p>
                </div>

                <div className="bg-red-900/20 rounded-xl p-6 border border-red-500/20">
                  <h3 className="font-semibold text-red-400 mb-2">5. Incorrect Relay Settings</h3>
                  <p className="text-white/60 text-sm">
                    GFP pickup set above the NEC 230.95 maximum of 1200A, time delay set beyond 1 second at 3000A, or settings that do not coordinate with the downstream level of GFP. Always verify relay settings match the coordination study and comply with NEC maximum values.
                  </p>
                </div>

                <div className="bg-red-900/20 rounded-xl p-6 border border-red-500/20">
                  <h3 className="font-semibold text-red-400 mb-2">6. Missing or Incomplete Performance Test</h3>
                  <p className="text-white/60 text-sm">
                    NEC 230.95(C) requires a performance test when first installed. A secondary-only test is not sufficient &mdash; the test must verify the complete system including CTs, wiring, relay, and breaker trip function. Written records must be maintained and available to the AHJ.
                  </p>
                </div>
              </div>

              <div className="bg-cyan-900/30 rounded-xl p-6 my-6">
                <h4 className="font-semibold text-cyan-400 mb-3">GFP Installation Best Practices</h4>
                <ul className="text-white/70 space-y-2 text-sm">
                  <li>&#9744; Verify all phase AND neutral conductors pass through the zero-sequence CT</li>
                  <li>&#9744; Confirm the EGC is routed OUTSIDE the zero-sequence CT</li>
                  <li>&#9744; Check CT polarity markings on all CTs (residual method)</li>
                  <li>&#9744; Verify only ONE neutral-to-ground bond exists on the line side of GFP</li>
                  <li>&#9744; Confirm relay pickup does not exceed 1200A</li>
                  <li>&#9744; Confirm time delay does not exceed 1 second at 3000A</li>
                  <li>&#9744; Perform primary injection test before energizing</li>
                  <li>&#9744; Document all test results with date, tester, and equipment used</li>
                  <li>&#9744; Verify selective coordination with downstream GFP (if two levels)</li>
                  <li>&#9744; Label equipment indicating GFP is installed and tested</li>
                </ul>
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
                <Link href="/blog/gfci-vs-afci-requirements" className="bg-white/5 hover:bg-white/10 rounded-xl p-6 transition-colors">
                  <span className="text-purple-400 text-sm">NEC Code</span>
                  <h3 className="font-semibold mt-2">GFCI vs AFCI Requirements: Complete NEC Guide</h3>
                </Link>
                <Link href="/blog/nec-article-240-overcurrent-protection" className="bg-white/5 hover:bg-white/10 rounded-xl p-6 transition-colors">
                  <span className="text-purple-400 text-sm">NEC Code</span>
                  <h3 className="font-semibold mt-2">NEC Article 240: Overcurrent Protection</h3>
                </Link>
                <Link href="/blog/electrical-fault-current-calculations" className="bg-white/5 hover:bg-white/10 rounded-xl p-6 transition-colors">
                  <span className="text-blue-400 text-sm">Calculations</span>
                  <h3 className="font-semibold mt-2">Electrical Fault Current Calculations</h3>
                </Link>
                <Link href="/blog/nec-article-250-grounding-guide" className="bg-white/5 hover:bg-white/10 rounded-xl p-6 transition-colors">
                  <span className="text-purple-400 text-sm">NEC Code</span>
                  <h3 className="font-semibold mt-2">NEC Article 250: Grounding and Bonding Guide</h3>
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
