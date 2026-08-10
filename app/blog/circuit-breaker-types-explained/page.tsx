import { Metadata } from "next";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import { BlogPostingJsonLd, BreadcrumbJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Circuit Breaker Types Explained: Standard, GFCI, AFCI & Dual-Function",
  description: "Complete guide to every type of circuit breaker: standard single-pole and double-pole, GFCI breakers, AFCI breakers, dual-function AFCI/GFCI, tandem/slim breakers, GFPE, molded case circuit breakers (MCCB), supplementary protectors, and shunt trip breakers. Learn how each works, NEC requirements for where each type is required, brand compatibility, and how to choose the right breaker for residential and commercial applications.",
  keywords: [
    "circuit breaker types",
    "GFCI breaker",
    "AFCI breaker",
    "dual function breaker",
    "types of circuit breakers",
    "breaker types explained",
    "standard circuit breaker",
    "ground fault breaker",
    "arc fault breaker",
    "MCCB circuit breaker"
  ],
  alternates: {
    canonical: "https://amporalabs.com/blog/circuit-breaker-types-explained",
  },
  openGraph: {
    title: "Circuit Breaker Types Explained: Standard, GFCI, AFCI & Dual-Function - Ampora",
    description: "Master every circuit breaker type with this comprehensive guide covering standard, GFCI, AFCI, dual-function, tandem, MCCB, GFPE, shunt trip, and supplementary protectors.",
    url: "https://amporalabs.com/blog/circuit-breaker-types-explained",
    type: "article",
    publishedTime: "2026-03-04",
  },
};

function HeroIllustration() {
  return (
    <svg viewBox="0 0 400 180" className="w-full h-40 md:h-48" aria-label="Different circuit breaker types shown side by side: standard, GFCI, AFCI, and dual-function">
      {/* Background */}
      <rect x="10" y="10" width="380" height="160" rx="4" fill="#1f2937" stroke="#374151" strokeWidth="1"/>

      {/* Standard Breaker */}
      <g transform="translate(30, 22)">
        <rect x="0" y="0" width="70" height="138" rx="3" fill="#374151" stroke="#4b5563" strokeWidth="1.5"/>
        <rect x="10" y="12" width="50" height="20" rx="2" fill="#1f2937" stroke="#6b7280" strokeWidth="1"/>
        <text x="35" y="26" textAnchor="middle" fill="#9ca3af" fontSize="7" fontWeight="bold">20A</text>
        {/* Toggle */}
        <rect x="22" y="42" width="26" height="40" rx="3" fill="#059669" stroke="#10b981" strokeWidth="1.5"/>
        <text x="35" y="57" textAnchor="middle" fill="white" fontSize="6" fontWeight="bold">ON</text>
        <rect x="25" y="60" width="20" height="6" rx="1" fill="#047857"/>
        {/* Wire lugs */}
        <rect x="12" y="92" width="46" height="10" rx="2" fill="#292524" stroke="#6b7280" strokeWidth="0.8"/>
        <circle cx="24" cy="97" r="3" fill="#1f2937" stroke="#9ca3af" strokeWidth="0.8"/>
        <circle cx="46" cy="97" r="3" fill="#1f2937" stroke="#9ca3af" strokeWidth="0.8"/>
        <text x="35" y="118" textAnchor="middle" fill="#9ca3af" fontSize="6">Standard</text>
        <text x="35" y="128" textAnchor="middle" fill="#6b7280" fontSize="5">Single-Pole</text>
      </g>

      {/* GFCI Breaker */}
      <g transform="translate(118, 22)">
        <rect x="0" y="0" width="70" height="138" rx="3" fill="#374151" stroke="#3b82f6" strokeWidth="1.5"/>
        <rect x="10" y="12" width="50" height="20" rx="2" fill="#1e3a5f" stroke="#3b82f6" strokeWidth="1"/>
        <text x="35" y="26" textAnchor="middle" fill="#60a5fa" fontSize="7" fontWeight="bold">20A</text>
        {/* Toggle */}
        <rect x="22" y="42" width="26" height="40" rx="3" fill="#059669" stroke="#10b981" strokeWidth="1.5"/>
        <text x="35" y="57" textAnchor="middle" fill="white" fontSize="6" fontWeight="bold">ON</text>
        <rect x="25" y="60" width="20" height="6" rx="1" fill="#047857"/>
        {/* Test button */}
        <circle cx="35" cy="90" r="6" fill="#3b82f6" stroke="#60a5fa" strokeWidth="1"/>
        <text x="35" y="93" textAnchor="middle" fill="white" fontSize="5" fontWeight="bold">T</text>
        {/* Pigtail wire */}
        <path d="M55 100 Q65 105 60 115 Q55 125 65 130" stroke="#f5f5f4" strokeWidth="1.2" fill="none" strokeDasharray="2,1"/>
        <text x="35" y="118" textAnchor="middle" fill="#60a5fa" fontSize="6" fontWeight="bold">GFCI</text>
        <text x="35" y="128" textAnchor="middle" fill="#6b7280" fontSize="5">Ground Fault</text>
      </g>

      {/* AFCI Breaker */}
      <g transform="translate(206, 22)">
        <rect x="0" y="0" width="70" height="138" rx="3" fill="#374151" stroke="#a855f7" strokeWidth="1.5"/>
        <rect x="10" y="12" width="50" height="20" rx="2" fill="#3b1f5e" stroke="#a855f7" strokeWidth="1"/>
        <text x="35" y="26" textAnchor="middle" fill="#c084fc" fontSize="7" fontWeight="bold">15A</text>
        {/* Toggle */}
        <rect x="22" y="42" width="26" height="40" rx="3" fill="#059669" stroke="#10b981" strokeWidth="1.5"/>
        <text x="35" y="57" textAnchor="middle" fill="white" fontSize="6" fontWeight="bold">ON</text>
        <rect x="25" y="60" width="20" height="6" rx="1" fill="#047857"/>
        {/* Test button */}
        <circle cx="35" cy="90" r="6" fill="#a855f7" stroke="#c084fc" strokeWidth="1"/>
        <text x="35" y="93" textAnchor="middle" fill="white" fontSize="5" fontWeight="bold">T</text>
        {/* Pigtail wire */}
        <path d="M55 100 Q65 105 60 115 Q55 125 65 130" stroke="#f5f5f4" strokeWidth="1.2" fill="none" strokeDasharray="2,1"/>
        <text x="35" y="118" textAnchor="middle" fill="#c084fc" fontSize="6" fontWeight="bold">AFCI</text>
        <text x="35" y="128" textAnchor="middle" fill="#6b7280" fontSize="5">Arc Fault</text>
      </g>

      {/* Dual-Function Breaker */}
      <g transform="translate(294, 22)">
        <rect x="0" y="0" width="70" height="138" rx="3" fill="#374151" stroke="#f59e0b" strokeWidth="1.5"/>
        <rect x="10" y="12" width="50" height="20" rx="2" fill="#422006" stroke="#f59e0b" strokeWidth="1"/>
        <text x="35" y="26" textAnchor="middle" fill="#fbbf24" fontSize="7" fontWeight="bold">20A</text>
        {/* Toggle */}
        <rect x="22" y="42" width="26" height="40" rx="3" fill="#059669" stroke="#10b981" strokeWidth="1.5"/>
        <text x="35" y="57" textAnchor="middle" fill="white" fontSize="6" fontWeight="bold">ON</text>
        <rect x="25" y="60" width="20" height="6" rx="1" fill="#047857"/>
        {/* Test button */}
        <circle cx="35" cy="90" r="6" fill="#f59e0b" stroke="#fbbf24" strokeWidth="1"/>
        <text x="35" y="93" textAnchor="middle" fill="white" fontSize="5" fontWeight="bold">T</text>
        {/* Pigtail wire */}
        <path d="M55 100 Q65 105 60 115 Q55 125 65 130" stroke="#f5f5f4" strokeWidth="1.2" fill="none" strokeDasharray="2,1"/>
        <text x="35" y="118" textAnchor="middle" fill="#fbbf24" fontSize="6" fontWeight="bold">DF</text>
        <text x="35" y="128" textAnchor="middle" fill="#6b7280" fontSize="5">AFCI + GFCI</text>
      </g>
    </svg>
  );
}

export default function CircuitBreakerTypesExplainedPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navigation />
      <div className="pt-20">
        <BreadcrumbJsonLd
          items={[
            { name: "Home", url: "https://amporalabs.com" },
            { name: "Blog", url: "https://amporalabs.com/blog" },
            { name: "Circuit Breaker Types Explained", url: "https://amporalabs.com/blog/circuit-breaker-types-explained" },
          ]}
        />
        <BlogPostingJsonLd
          headline="Circuit Breaker Types Explained: Standard, GFCI, AFCI & Dual-Function"
          description="Complete guide to every type of circuit breaker including standard, GFCI, AFCI, dual-function, tandem, MCCB, GFPE, shunt trip, and supplementary protectors with NEC requirements and selection guidance."
          datePublished="2026-03-04"
          dateModified="2026-03-04"
          url="https://amporalabs.com/blog/circuit-breaker-types-explained"
          wordCount={5800}
          keywords={["circuit breaker types", "GFCI breaker", "AFCI breaker", "dual function breaker", "MCCB circuit breaker"]}
        />

        <article className="max-w-4xl mx-auto px-6 py-12">
          {/* Breadcrumb */}
          <nav className="text-sm text-white/60 mb-8">
            <Link href="/" className="hover:text-white">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/blog" className="hover:text-white">Blog</Link>
            <span className="mx-2">/</span>
            <span className="text-white">Circuit Breaker Types Explained</span>
          </nav>

          {/* Article Header */}
          <header className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <span className="px-3 py-1 bg-orange-600/20 text-orange-300 text-sm font-medium rounded-full">
                Materials
              </span>
              <span className="text-white/40 text-sm">20 min read</span>
              <span className="text-white/40 text-sm">March 4, 2026</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6 leading-tight">
              Circuit Breaker Types Explained: Standard, GFCI, AFCI &amp; More
            </h1>
            <p className="text-xl text-white/70">
              From the standard thermal-magnetic breaker in every residential panel to specialized GFCI, AFCI, and dual-function breakers required by the NEC, this guide covers every type of circuit breaker you will encounter on the job. Learn how each type works, where the code requires it, how to choose the right breaker, and critical brand compatibility rules that every electrician needs to know.
            </p>
          </header>

          <div className="mb-12 bg-gradient-to-br from-orange-900/20 to-cyan-900/20 rounded-2xl p-6 border border-white/10">
            <HeroIllustration />
          </div>

          {/* Table of Contents */}
          <div className="bg-white/5 rounded-2xl p-6 mb-12">
            <h2 className="font-display font-bold mb-4">In This Guide</h2>
            <ul className="space-y-2 text-white/70">
              <li><a href="#how-breakers-work" className="hover:text-purple-400">How Circuit Breakers Work (Thermal-Magnetic Basics)</a></li>
              <li><a href="#standard-breakers" className="hover:text-purple-400">Standard Breakers: Single-Pole &amp; Double-Pole</a></li>
              <li><a href="#gfci-breakers" className="hover:text-purple-400">GFCI Breakers &mdash; How They Work &amp; Where Required</a></li>
              <li><a href="#afci-breakers" className="hover:text-purple-400">AFCI Breakers &mdash; How They Work &amp; Where Required</a></li>
              <li><a href="#dual-function" className="hover:text-purple-400">Dual-Function (AFCI/GFCI) Breakers</a></li>
              <li><a href="#tandem-breakers" className="hover:text-purple-400">Tandem / Slim Breakers</a></li>
              <li><a href="#gfpe-breakers" className="hover:text-purple-400">GFPE Breakers (Ground Fault Protection of Equipment)</a></li>
              <li><a href="#mccb" className="hover:text-purple-400">Molded Case Circuit Breakers (MCCB)</a></li>
              <li><a href="#supplementary-protectors" className="hover:text-purple-400">Supplementary Protectors</a></li>
              <li><a href="#shunt-trip" className="hover:text-purple-400">Shunt Trip Breakers</a></li>
              <li><a href="#choosing-breaker" className="hover:text-purple-400">Choosing the Right Breaker</a></li>
              <li><a href="#brand-compatibility" className="hover:text-purple-400">Brand Compatibility &amp; Panel Matching</a></li>
              <li><a href="#faq" className="hover:text-purple-400">Frequently Asked Questions</a></li>
            </ul>
          </div>

          {/* Article Content */}
          <div className="prose prose-invert prose-lg max-w-none">

            <section id="how-breakers-work" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">How Circuit Breakers Work (Thermal-Magnetic Basics)</h2>
              <p className="text-white/80 mb-4">
                A <strong>circuit breaker</strong> is an overcurrent protective device designed to automatically disconnect a circuit when current exceeds a safe level. Understanding the basic mechanism is essential before exploring the specialized types. Per <Link href="/blog/nec-article-240-overcurrent-protection" className="text-purple-400 hover:text-purple-300">NEC Article 240 (overcurrent protection)</Link>, every circuit must have overcurrent protection that will interrupt the circuit before conductors or equipment are damaged.
              </p>

              <div className="grid md:grid-cols-2 gap-6 my-6">
                <div className="bg-white/5 rounded-xl p-6">
                  <h3 className="font-semibold text-cyan-400 mb-3">Thermal Element (Overload Protection)</h3>
                  <p className="text-white/60 text-sm">
                    A <strong>bimetallic strip</strong> inside the breaker heats up as current flows through it. Under sustained overload conditions (e.g., a 20A breaker carrying 25A), the strip bends slowly from heat until it releases a latch that trips the breaker. This provides <strong>inverse-time</strong> tripping: small overloads trip slowly, larger overloads trip faster. A 20A breaker may carry 125% (25A) for up to an hour before tripping, but at 200% (40A) it will trip in seconds.
                  </p>
                </div>
                <div className="bg-white/5 rounded-xl p-6">
                  <h3 className="font-semibold text-orange-400 mb-3">Magnetic Element (Short-Circuit Protection)</h3>
                  <p className="text-white/60 text-sm">
                    An <strong>electromagnetic coil</strong> (solenoid) responds to high fault currents instantaneously. When a short circuit occurs and current spikes to many times the breaker&apos;s rating, the magnetic field in the coil is strong enough to immediately yank the trip mechanism open. This <strong>instantaneous trip</strong> occurs in milliseconds, protecting conductors from the extreme heat of a short circuit before the thermal element can even respond.
                  </p>
                </div>
              </div>

              <div className="bg-white/5 rounded-xl p-6 my-6">
                <h4 className="font-semibold text-white mb-3">Key Circuit Breaker Ratings</h4>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                  <div>
                    <p className="text-2xl font-bold text-cyan-400">Amps</p>
                    <p className="text-white/60 text-sm">Continuous current rating (15A, 20A, 30A, etc.)</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-orange-400">Volts</p>
                    <p className="text-white/60 text-sm">Maximum voltage (120V, 120/240V, 240V, 480V)</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-purple-400">AIC</p>
                    <p className="text-white/60 text-sm">Interrupting capacity (10kA, 22kA, 65kA)</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-green-400">Poles</p>
                    <p className="text-white/60 text-sm">Number of poles (1P, 2P, 3P)</p>
                  </div>
                </div>
              </div>

              <p className="text-white/80 mb-4">
                The <strong>ampere interrupting capacity (AIC)</strong> rating tells you the maximum fault current the breaker can safely interrupt. A standard residential breaker is typically rated for <strong>10,000 AIC</strong>, meaning it can safely interrupt up to 10,000 amps of fault current. Commercial panels often need breakers rated for 22,000 AIC or higher. Installing a breaker with an AIC rating lower than the available fault current at the panel is a serious code violation per <Link href="/blog/nec-article-240-overcurrent-protection" className="text-purple-400 hover:text-purple-300">NEC 240.86</Link> and creates a dangerous condition where the breaker could explode during a fault.
              </p>
            </section>

            <section id="standard-breakers" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Standard Breakers: Single-Pole &amp; Double-Pole</h2>
              <p className="text-white/80 mb-4">
                Standard thermal-magnetic breakers are the workhorse of every electrical panel. They provide overcurrent and short-circuit protection but do <strong>not</strong> detect ground faults or arc faults. These are used where the NEC does not specifically require GFCI or AFCI protection.
              </p>

              <div className="grid md:grid-cols-2 gap-6 my-6">
                <div className="bg-white/5 rounded-xl p-6 border border-cyan-500/20">
                  <h3 className="font-semibold text-cyan-400 mb-3">Single-Pole Breaker</h3>
                  <ul className="text-white/60 text-sm space-y-2">
                    <li><strong>Voltage:</strong> 120V (one hot leg to neutral)</li>
                    <li><strong>Width:</strong> 1 panel space (typically 1 inch)</li>
                    <li><strong>Common ratings:</strong> 15A, 20A, 30A</li>
                    <li><strong>Uses:</strong> General lighting circuits, most receptacle circuits, small appliance circuits</li>
                    <li><strong>Wiring:</strong> One hot wire, shares neutral with panel bus</li>
                  </ul>
                </div>
                <div className="bg-white/5 rounded-xl p-6 border border-orange-500/20">
                  <h3 className="font-semibold text-orange-400 mb-3">Double-Pole Breaker</h3>
                  <ul className="text-white/60 text-sm space-y-2">
                    <li><strong>Voltage:</strong> 240V (two hot legs) or 120/240V</li>
                    <li><strong>Width:</strong> 2 panel spaces (typically 2 inches)</li>
                    <li><strong>Common ratings:</strong> 20A, 30A, 40A, 50A, 60A</li>
                    <li><strong>Uses:</strong> Dryers, ranges, A/C units, water heaters, EV chargers, sub-panels</li>
                    <li><strong>Wiring:</strong> Two hot wires with ganged handle &mdash; both poles trip together</li>
                  </ul>
                </div>
              </div>

              <div className="bg-orange-900/30 rounded-xl p-6 my-6">
                <h4 className="font-semibold text-orange-400 mb-3">Handle Ties vs. Common-Trip Double-Pole</h4>
                <p className="text-white/70 text-sm">
                  A <strong>common-trip</strong> double-pole breaker has an internal mechanism that trips both poles simultaneously if either pole detects a fault. A <strong>handle tie</strong> is a physical clip that connects the handles of two single-pole breakers so they switch together, but it does <strong>not</strong> provide common trip protection. The NEC requires common-trip breakers (not just handle ties) for 240V multi-wire branch circuits per NEC 210.4(B) and for 240V loads where both ungrounded conductors must be disconnected simultaneously.
                </p>
              </div>
            </section>

            <section id="gfci-breakers" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">GFCI Breakers &mdash; How They Work &amp; Where Required</h2>
              <p className="text-white/80 mb-4">
                A <strong>ground fault circuit interrupter (GFCI) breaker</strong> provides the same overcurrent protection as a standard breaker plus the ability to detect dangerous <strong>ground faults</strong> &mdash; situations where current is leaking from the hot conductor through an unintended path (such as through a person) to ground. For a complete comparison of GFCI and AFCI protection, see our guide on <Link href="/blog/gfci-vs-afci-requirements" className="text-purple-400 hover:text-purple-300">GFCI vs AFCI requirements</Link>.
              </p>

              <div className="bg-blue-900/30 rounded-xl p-6 my-6">
                <h4 className="font-semibold text-blue-400 mb-3">How GFCI Protection Works</h4>
                <p className="text-white/70 text-sm mb-3">
                  The GFCI monitors the <strong>current balance</strong> between the hot and neutral conductors using a small current transformer (CT). Under normal conditions, every milliamp of current flowing out on the hot conductor returns on the neutral conductor &mdash; the net current through the CT is zero.
                </p>
                <p className="text-white/70 text-sm mb-3">
                  If current leaks to ground through an unintended path (e.g., through a person touching a live wire while grounded), the current on the hot and neutral conductors becomes <strong>imbalanced</strong>. The GFCI detects this imbalance and trips when the difference reaches <strong>4&ndash;6 milliamps</strong> (typically trips at 5 mA). It must trip within <strong>25 milliseconds</strong> for Class A GFCI devices.
                </p>
                <div className="bg-blue-900/40 rounded-lg p-4 mt-3">
                  <p className="text-blue-300 text-sm font-semibold">Key Detail: The Neutral Pigtail</p>
                  <p className="text-white/60 text-sm mt-1">
                    GFCI breakers have a <strong>white pigtail wire</strong> (coiled neutral lead) that must be connected to the panel&apos;s neutral bus bar. The circuit&apos;s neutral wire connects to the breaker&apos;s neutral terminal &mdash; not directly to the neutral bus. This allows the breaker to monitor both hot and neutral current through its internal CT. Connecting the neutral wrong defeats the GFCI protection entirely.
                  </p>
                </div>
              </div>

              <h3 className="text-xl font-display font-semibold mb-3 text-cyan-400">NEC GFCI Requirements (Key Locations)</h3>
              <p className="text-white/80 mb-4">
                The NEC has expanded GFCI requirements with each code cycle. As of the 2023 NEC, GFCI protection is required for all 125V through 250V receptacles in the following locations:
              </p>
              <div className="overflow-x-auto my-6">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-white/20">
                      <th className="text-left py-3 px-4 text-white/60">Location</th>
                      <th className="text-left py-3 px-4 text-white/60">NEC Section</th>
                      <th className="text-left py-3 px-4 text-white/60">Notes</th>
                    </tr>
                  </thead>
                  <tbody className="text-white/80">
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">Bathrooms</td>
                      <td className="py-3 px-4 font-mono text-cyan-400">210.8(A)(1)</td>
                      <td className="py-3 px-4 text-white/60">All receptacles, all amperages</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">Kitchens</td>
                      <td className="py-3 px-4 font-mono text-cyan-400">210.8(A)(6)</td>
                      <td className="py-3 px-4 text-white/60">All countertop and within 6 ft of sink</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">Garages &amp; Accessory Buildings</td>
                      <td className="py-3 px-4 font-mono text-cyan-400">210.8(A)(2)</td>
                      <td className="py-3 px-4 text-white/60">All receptacles except dedicated appliances</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">Outdoors</td>
                      <td className="py-3 px-4 font-mono text-cyan-400">210.8(A)(3)</td>
                      <td className="py-3 px-4 text-white/60">All outdoor receptacles</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">Crawl Spaces &amp; Unfinished Basements</td>
                      <td className="py-3 px-4 font-mono text-cyan-400">210.8(A)(4)(5)</td>
                      <td className="py-3 px-4 text-white/60">All receptacles at or below grade</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">Laundry Areas</td>
                      <td className="py-3 px-4 font-mono text-cyan-400">210.8(A)(10)</td>
                      <td className="py-3 px-4 text-white/60">All receptacles in laundry areas</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4">Indoor Damp/Wet Locations</td>
                      <td className="py-3 px-4 font-mono text-cyan-400">210.8(A)(11)</td>
                      <td className="py-3 px-4 text-white/60">2023 NEC expanded requirement</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="bg-white/5 rounded-xl p-6 my-6">
                <h4 className="font-semibold text-white mb-3">GFCI Breaker vs. GFCI Receptacle</h4>
                <p className="text-white/70 text-sm mb-3">
                  A GFCI breaker installed at the panel protects the <strong>entire circuit</strong> from the panel to every device on that circuit. A GFCI receptacle only protects its own location and any downstream receptacles wired from its LOAD terminals. Electricians choose GFCI breakers when:
                </p>
                <ul className="text-white/60 text-sm space-y-1">
                  <li>&bull; The entire circuit needs GFCI protection (e.g., bathroom circuit, outdoor circuit)</li>
                  <li>&bull; Multiple receptacles on the same circuit need protection</li>
                  <li>&bull; The first receptacle location is not easily accessible for a GFCI outlet</li>
                  <li>&bull; The circuit feeds hardwired equipment requiring GFCI (e.g., dishwasher, hot tub)</li>
                </ul>
              </div>
            </section>

            <section id="afci-breakers" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">AFCI Breakers &mdash; How They Work &amp; Where Required</h2>
              <p className="text-white/80 mb-4">
                An <strong>arc fault circuit interrupter (AFCI) breaker</strong> detects dangerous <strong>electrical arcing</strong> &mdash; sparking between conductors or from a conductor to ground &mdash; that can ignite surrounding materials and cause fires. Arcing can occur from damaged wires, loose connections, pinched cables, or deteriorated insulation, often hidden behind walls where it goes unnoticed until a fire starts.
              </p>

              <div className="bg-purple-900/30 rounded-xl p-6 my-6">
                <h4 className="font-semibold text-purple-400 mb-3">How AFCI Detection Works</h4>
                <p className="text-white/70 text-sm mb-3">
                  AFCI breakers use sophisticated <strong>electronic circuitry with microprocessors</strong> that analyze the waveform characteristics of the current flowing through the circuit. Dangerous arcs produce distinctive, irregular current signatures that differ from normal electrical noise.
                </p>
                <div className="grid md:grid-cols-2 gap-4 mt-3">
                  <div className="bg-purple-900/40 rounded-lg p-4">
                    <p className="text-purple-300 text-sm font-semibold">Series Arcing</p>
                    <p className="text-white/60 text-sm mt-1">Occurs within a single conductor &mdash; a break or loose connection in the hot or neutral wire. Current drops below the breaker&apos;s rating, so a standard breaker cannot detect it. The AFCI identifies the irregular waveform pattern.</p>
                  </div>
                  <div className="bg-purple-900/40 rounded-lg p-4">
                    <p className="text-purple-300 text-sm font-semibold">Parallel Arcing</p>
                    <p className="text-white/60 text-sm mt-1">Occurs between hot and neutral, or hot and ground, through damaged insulation. This can produce currents high enough for a standard breaker to trip, but the AFCI trips faster by detecting the arc signature before the fault escalates.</p>
                  </div>
                </div>
              </div>

              <h3 className="text-xl font-display font-semibold mb-3 text-cyan-400">NEC AFCI Requirements</h3>
              <p className="text-white/80 mb-4">
                The 2023 NEC requires AFCI protection for all <strong>120V, 15A and 20A</strong> branch circuits supplying outlets or devices in the following dwelling unit areas (NEC 210.12):
              </p>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3 my-6">
                {[
                  "Kitchens", "Family rooms", "Dining rooms",
                  "Living rooms", "Parlors", "Libraries",
                  "Dens", "Bedrooms", "Sunrooms",
                  "Recreation rooms", "Closets", "Hallways",
                  "Laundry areas", "Similar rooms/areas", ""
                ].filter(Boolean).map((room) => (
                  <div key={room} className="bg-purple-900/20 rounded-lg px-4 py-2 text-center">
                    <span className="text-white/70 text-sm">{room}</span>
                  </div>
                ))}
              </div>
              <p className="text-white/80 mb-4">
                In practice, AFCI protection is required for <strong>virtually every 15A and 20A circuit in a dwelling unit</strong> except bathrooms (which require GFCI instead), garages, and outdoors. Many jurisdictions now require dual-function breakers in areas that need both AFCI and GFCI protection. For troubleshooting nuisance AFCI trips, see our guide on <Link href="/blog/afci-breaker-nuisance-tripping" className="text-purple-400 hover:text-purple-300">AFCI breaker nuisance tripping</Link>.
              </p>

              <div className="bg-orange-900/30 rounded-xl p-6 my-6">
                <h4 className="font-semibold text-orange-400 mb-3">AFCI Types: Combination vs. Branch/Feeder</h4>
                <p className="text-white/70 text-sm">
                  The <strong>combination-type AFCI</strong> (required since the 2008 NEC) detects both series and parallel arcing. Older <strong>branch/feeder-type</strong> AFCIs only detected parallel arcing and are no longer accepted for new installations. All AFCI breakers sold today for residential use are combination-type. The &ldquo;combination&rdquo; refers to the types of arcs detected, not a combination of AFCI and GFCI &mdash; that is a dual-function breaker.
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

            <section id="dual-function" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Dual-Function (AFCI/GFCI) Breakers</h2>
              <p className="text-white/80 mb-4">
                A <strong>dual-function breaker</strong> combines both AFCI and GFCI protection in a single device. It provides overcurrent protection, arc fault detection, <em>and</em> ground fault detection &mdash; all three in one breaker. These are increasingly required by the NEC in locations that need both types of protection, such as kitchen circuits and laundry areas.
              </p>

              <div className="bg-yellow-900/30 rounded-xl p-6 my-6 border border-yellow-500/30">
                <h4 className="font-semibold text-yellow-400 mb-3">Why Dual-Function Breakers Are Becoming Standard</h4>
                <p className="text-white/70 text-sm mb-3">
                  As the NEC continues to expand both AFCI and GFCI requirements, many circuits now require <strong>both</strong> types of protection. For example:
                </p>
                <ul className="text-white/60 text-sm space-y-2">
                  <li><strong>Kitchens:</strong> AFCI required per 210.12 + GFCI required per 210.8(A)(6) = dual-function</li>
                  <li><strong>Laundry areas:</strong> AFCI required per 210.12 + GFCI required per 210.8(A)(10) = dual-function</li>
                  <li><strong>Unfinished basements:</strong> AFCI for habitable areas + GFCI per 210.8(A)(5) = dual-function</li>
                  <li><strong>Garages (with habitable space above):</strong> Some configurations may need both protections</li>
                </ul>
                <p className="text-white/60 text-sm mt-3">
                  Rather than installing an AFCI breaker and a GFCI receptacle (or vice versa), a single dual-function breaker simplifies installation and ensures both protections are always active.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-4 my-6">
                <div className="bg-green-900/20 rounded-xl p-4 border border-green-500/20 text-center">
                  <p className="font-semibold text-green-400 text-lg mb-1">$30&ndash;$55</p>
                  <p className="text-white/60 text-sm">Typical cost per breaker</p>
                </div>
                <div className="bg-green-900/20 rounded-xl p-4 border border-green-500/20 text-center">
                  <p className="font-semibold text-green-400 text-lg mb-1">1 Space</p>
                  <p className="text-white/60 text-sm">Same as standard single-pole</p>
                </div>
                <div className="bg-green-900/20 rounded-xl p-4 border border-green-500/20 text-center">
                  <p className="font-semibold text-green-400 text-lg mb-1">3-in-1</p>
                  <p className="text-white/60 text-sm">OCP + AFCI + GFCI in one device</p>
                </div>
              </div>

              <p className="text-white/80 mb-4">
                Like standalone GFCI and AFCI breakers, dual-function breakers have a <strong>test button</strong> and a <strong>neutral pigtail wire</strong> that must be connected to the panel&apos;s neutral bus bar. The circuit neutral connects to the breaker terminal, not directly to the bus. Dual-function breakers are available from all major manufacturers (Square D, Eaton, Siemens, Leviton) in 15A and 20A ratings.
              </p>
            </section>

            <section id="tandem-breakers" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Tandem / Slim Breakers</h2>
              <p className="text-white/80 mb-4">
                A <strong>tandem breaker</strong> (also called a <strong>slim</strong>, <strong>twin</strong>, <strong>duplex</strong>, or <strong>half-size</strong> breaker) fits two independent single-pole circuits into one standard breaker space. Each half of the tandem breaker has its own toggle handle and protects its own circuit. Tandem breakers are used when a panel is running out of spaces but has not reached its maximum circuit count.
              </p>

              <div className="bg-red-900/30 rounded-xl p-6 my-6">
                <h4 className="font-semibold text-red-400 mb-3">Critical Rules for Tandem Breakers</h4>
                <ul className="text-white/70 space-y-2 text-sm">
                  <li><strong>Panel labeling:</strong> The panel must be listed to accept tandem breakers. Check the panel&apos;s label or directory &mdash; it will specify which spaces accept tandem breakers (often shown as notches or specific slot positions).</li>
                  <li><strong>Maximum circuits:</strong> NEC 408.54 requires that the number of overcurrent devices in a panelboard must not exceed the number for which the panel is designed and listed. You cannot exceed the panel&apos;s <strong>maximum circuit</strong> count even with tandems.</li>
                  <li><strong>Position restrictions:</strong> Many panels only allow tandem breakers in <strong>specific positions</strong>, typically the center slots. Installing a tandem in a non-approved slot is a code violation.</li>
                  <li><strong>No AFCI/GFCI tandems:</strong> As of 2026, no manufacturer produces tandem breakers with AFCI or GFCI protection. If the circuit requires either protection, a full-size breaker must be used.</li>
                  <li><strong>Not for 240V:</strong> Tandem breakers cannot be used for 240V circuits because the two halves connect to the same bus bar leg (same phase), not opposite phases.</li>
                </ul>
              </div>

              <p className="text-white/80 mb-4">
                Common tandem breaker configurations include <strong>15/15A</strong>, <strong>20/20A</strong>, <strong>15/20A</strong>, and <strong>20/30A</strong>. Some panels use <strong>rejection features</strong> (physical tabs or notches) to prevent tandem breakers from being installed in non-approved positions. Never modify or file down rejection features to force a breaker to fit.
              </p>
            </section>

            <section id="gfpe-breakers" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">GFPE Breakers (Ground Fault Protection of Equipment)</h2>
              <p className="text-white/80 mb-4">
                <strong>Ground fault protection of equipment (GFPE)</strong> is different from GFCI (personnel) protection. While GFCI breakers trip at 4&ndash;6 milliamps to protect people, GFPE devices trip at <strong>30 milliamps or higher</strong> (typically 30 mA for equipment protection). GFPE is designed to protect <strong>equipment</strong> from damage caused by ground faults, not to protect humans from electrocution.
              </p>

              <div className="grid md:grid-cols-2 gap-6 my-6">
                <div className="bg-blue-900/30 rounded-xl p-6">
                  <h3 className="font-semibold text-blue-400 mb-3">GFCI (Personnel Protection)</h3>
                  <ul className="text-white/60 text-sm space-y-1">
                    <li><strong>Trip level:</strong> 4&ndash;6 mA (Class A)</li>
                    <li><strong>Trip time:</strong> &le;25 milliseconds</li>
                    <li><strong>Purpose:</strong> Prevent electrocution</li>
                    <li><strong>NEC section:</strong> 210.8</li>
                    <li><strong>Typical use:</strong> Receptacle circuits, 15A&ndash;60A</li>
                  </ul>
                </div>
                <div className="bg-green-900/30 rounded-xl p-6">
                  <h3 className="font-semibold text-green-400 mb-3">GFPE (Equipment Protection)</h3>
                  <ul className="text-white/60 text-sm space-y-1">
                    <li><strong>Trip level:</strong> 30 mA and up (varies)</li>
                    <li><strong>Trip time:</strong> Varies by application</li>
                    <li><strong>Purpose:</strong> Prevent equipment damage and fire</li>
                    <li><strong>NEC section:</strong> 230.95, 240.13</li>
                    <li><strong>Typical use:</strong> Service equipment 1000A+, 480Y/277V</li>
                  </ul>
                </div>
              </div>

              <p className="text-white/80 mb-4">
                Per <strong>NEC 230.95</strong>, ground fault protection of equipment is required for solidly grounded wye services rated <strong>1000 amperes or more</strong> at voltages exceeding <strong>150 volts to ground</strong> (most commonly 480Y/277V systems). The maximum setting is <strong>1200 amperes</strong> with a maximum time delay of <strong>1 second</strong> for ground fault currents of 3000 amperes or more. NEC 240.13 extends this requirement to feeders in certain configurations.
              </p>

              <div className="bg-orange-900/30 rounded-xl p-6 my-6">
                <h4 className="font-semibold text-orange-400 mb-3">Important: GFPE Does NOT Protect People</h4>
                <p className="text-white/70 text-sm">
                  A 30 mA trip threshold is <strong>far above the level</strong> that can cause fatal electrocution (as little as 50&ndash;100 mA across the heart). GFPE is designed to detect ground fault current that could overheat conductors, damage equipment, or start fires &mdash; not to provide shock protection. Where personnel protection is needed, GFCI devices (5 mA trip) must be used regardless of whether GFPE is also present.
                </p>
              </div>
            </section>

            <section id="mccb" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Molded Case Circuit Breakers (MCCB)</h2>
              <p className="text-white/80 mb-4">
                A <strong>molded case circuit breaker (MCCB)</strong> is a heavy-duty circuit breaker used in commercial and industrial applications where higher current ratings, adjustable trip settings, and greater interrupting capacities are needed. MCCBs are enclosed in a molded insulating housing (the &ldquo;case&rdquo;) and are the standard protective device in commercial switchboards, panelboards, and motor control centers.
              </p>

              <div className="bg-white/5 rounded-xl p-6 my-6">
                <h4 className="font-semibold text-white mb-3">MCCB vs. Residential Breaker Comparison</h4>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-white/20">
                        <th className="text-left py-3 px-4 text-white/60">Feature</th>
                        <th className="text-left py-3 px-4 text-white/60">Standard (Miniature)</th>
                        <th className="text-left py-3 px-4 text-white/60">MCCB</th>
                      </tr>
                    </thead>
                    <tbody className="text-white/80">
                      <tr className="border-b border-white/10">
                        <td className="py-3 px-4">Current range</td>
                        <td className="py-3 px-4 font-mono text-cyan-400">15A&ndash;125A</td>
                        <td className="py-3 px-4 font-mono text-orange-400">15A&ndash;2,500A</td>
                      </tr>
                      <tr className="border-b border-white/10">
                        <td className="py-3 px-4">Interrupting capacity</td>
                        <td className="py-3 px-4 font-mono text-cyan-400">10&ndash;22 kAIC</td>
                        <td className="py-3 px-4 font-mono text-orange-400">14&ndash;200 kAIC</td>
                      </tr>
                      <tr className="border-b border-white/10">
                        <td className="py-3 px-4">Adjustable trip</td>
                        <td className="py-3 px-4">No (fixed)</td>
                        <td className="py-3 px-4">Yes (thermal &amp; magnetic)</td>
                      </tr>
                      <tr className="border-b border-white/10">
                        <td className="py-3 px-4">Trip unit type</td>
                        <td className="py-3 px-4">Thermal-magnetic only</td>
                        <td className="py-3 px-4">Thermal-magnetic or electronic</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4">Typical application</td>
                        <td className="py-3 px-4">Residential panels</td>
                        <td className="py-3 px-4">Commercial switchgear, MCC, distribution</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <h3 className="text-xl font-display font-semibold mb-3 text-cyan-400">MCCB Trip Unit Options</h3>
              <div className="grid md:grid-cols-2 gap-6 my-6">
                <div className="bg-white/5 rounded-xl p-6">
                  <h4 className="font-semibold text-cyan-400 mb-2">Thermal-Magnetic Trip Unit</h4>
                  <p className="text-white/60 text-sm">
                    Uses the same bimetallic strip and electromagnetic coil as residential breakers, but with <strong>adjustable settings</strong>. The long-time delay (thermal) and instantaneous (magnetic) trip points can be adjusted with dials or screws to match the specific load and coordination requirements. More affordable but less precise than electronic units.
                  </p>
                </div>
                <div className="bg-white/5 rounded-xl p-6">
                  <h4 className="font-semibold text-orange-400 mb-2">Electronic Trip Unit</h4>
                  <p className="text-white/60 text-sm">
                    Uses <strong>current transformers and microprocessor-based electronics</strong> to monitor current and determine trip characteristics. Offers far more adjustment options: long-time pickup and delay, short-time pickup and delay, instantaneous pickup, and ground fault pickup and delay. Essential for precise protective device coordination in complex systems.
                  </p>
                </div>
              </div>
            </section>

            <section id="supplementary-protectors" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Supplementary Protectors</h2>
              <p className="text-white/80 mb-4">
                <strong>Supplementary protectors</strong> (sometimes called &ldquo;supplemental protectors&rdquo; or &ldquo;supplementary overcurrent protective devices&rdquo;) look like circuit breakers and function similarly, but they are <strong>not listed as branch circuit overcurrent protective devices</strong> under UL 489. Instead, they are listed under <strong>UL 1077</strong>.
              </p>

              <div className="bg-yellow-900/30 rounded-xl p-6 my-6">
                <h4 className="font-semibold text-yellow-400 mb-3">Key Differences from Circuit Breakers</h4>
                <ul className="text-white/70 space-y-2 text-sm">
                  <li><strong>Cannot serve as branch circuit protection:</strong> They are not a substitute for the branch circuit breaker required by the NEC. A supplementary protector must be used <em>in addition to</em> (downstream of) a listed branch circuit OCPD.</li>
                  <li><strong>Lower interrupting ratings:</strong> Typically 5,000&ndash;10,000 AIC, lower than most branch circuit breakers.</li>
                  <li><strong>Common uses:</strong> Protecting individual components within equipment &mdash; control transformers (NEC 450.3), power supplies, lighting fixtures within industrial panels, appliance internal circuits.</li>
                  <li><strong>Marked differently:</strong> Supplementary protectors are marked &ldquo;Recognized&rdquo; (UL Recognized Component) rather than &ldquo;Listed&rdquo; (UL Listed).</li>
                  <li><strong>Found in:</strong> Industrial control panels, HVAC equipment, IT equipment, machinery, UPS systems.</li>
                </ul>
              </div>

              <p className="text-white/80 mb-4">
                The most common mistake with supplementary protectors is using them as the sole overcurrent protection on a branch circuit. They may look identical to miniature breakers and can even mount on DIN rails, but their UL listing does not permit use as a branch circuit OCPD. Always check the listing mark &mdash; UL 489 for branch circuit breakers, UL 1077 for supplementary protectors.
              </p>
            </section>

            <section id="shunt-trip" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Shunt Trip Breakers</h2>
              <p className="text-white/80 mb-4">
                A <strong>shunt trip breaker</strong> is a standard circuit breaker equipped with an external <strong>electromagnetic trip coil</strong> (the &ldquo;shunt trip accessory&rdquo;) that allows the breaker to be tripped remotely when voltage is applied to the coil. The breaker provides its normal overcurrent protection, and the shunt trip adds the ability to disconnect the circuit from a remote location or from an automatic control system.
              </p>

              <div className="bg-white/5 rounded-xl p-6 my-6">
                <h4 className="font-semibold text-white mb-3">Common Applications for Shunt Trip Breakers</h4>
                <ul className="text-white/70 space-y-2 text-sm">
                  <li><strong>Fire alarm shutdown:</strong> The fire alarm system sends a signal to trip the shunt trip breaker, shutting off power to specific systems during a fire event (e.g., kitchen hood exhaust, elevator shunt trip per NEC 620.51(B))</li>
                  <li><strong>Emergency power off (EPO):</strong> Data centers and server rooms use shunt trip breakers connected to EPO buttons that allow immediate disconnection of all power in an emergency</li>
                  <li><strong>Kitchen exhaust hoods:</strong> NEC 690.12 rapid shutdown of PV systems uses shunt trip to disconnect roof-mounted solar arrays from a ground-level switch</li>
                  <li><strong>Elevator recall:</strong> Per NEC 620.51, elevator machine room disconnects often use shunt trip breakers that can be tripped by the fire alarm system</li>
                  <li><strong>Spa/hot tub disconnect:</strong> Remote emergency shutoff for pools and spas per NEC 680.12</li>
                </ul>
              </div>

              <div className="bg-cyan-900/30 rounded-xl p-6 my-6">
                <h4 className="font-semibold text-cyan-400 mb-3">Shunt Trip Wiring Notes</h4>
                <p className="text-white/70 text-sm">
                  The shunt trip coil requires a <strong>separate control voltage</strong> (typically 120VAC or 24VDC) to operate. When the control circuit is energized &mdash; via a push button, relay contact, or fire alarm output &mdash; the coil magnetically trips the breaker. The control wiring must be properly sized and protected. Shunt trip breakers must be <strong>manually reset</strong> after tripping; they cannot be reset remotely. Some installations also include an <strong>auxiliary contact</strong> that reports the breaker&apos;s position (open/closed) back to the building management system.
                </p>
              </div>
            </section>

            <section id="choosing-breaker" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Choosing the Right Breaker</h2>
              <p className="text-white/80 mb-4">
                Selecting the correct circuit breaker requires evaluating the circuit&apos;s requirements against several criteria. Here is a systematic approach to choosing the right breaker for any circuit:
              </p>

              <div className="space-y-4 my-6">
                <div className="bg-white/5 rounded-xl p-4 flex items-start gap-4">
                  <span className="bg-cyan-600 text-white text-sm font-bold px-3 py-1 rounded-full">1</span>
                  <div>
                    <p className="font-semibold text-white">Determine the Amperage</p>
                    <p className="text-white/60 text-sm">Size the breaker based on the conductor ampacity and load calculations. The breaker must protect the conductor &mdash; its rating must not exceed the conductor&apos;s ampacity (with some exceptions per <Link href="/blog/nec-article-240-overcurrent-protection" className="text-purple-400 hover:text-purple-300">NEC 240.4</Link>). Standard ratings: 15, 20, 25, 30, 35, 40, 45, 50, 60, 70, 80, 90, 100A, etc.</p>
                  </div>
                </div>
                <div className="bg-white/5 rounded-xl p-4 flex items-start gap-4">
                  <span className="bg-cyan-600 text-white text-sm font-bold px-3 py-1 rounded-full">2</span>
                  <div>
                    <p className="font-semibold text-white">Determine the Voltage</p>
                    <p className="text-white/60 text-sm">Single-pole for 120V circuits, double-pole for 240V or 120/240V circuits. For 3-phase systems, use 3-pole breakers. The breaker&apos;s voltage rating must equal or exceed the circuit voltage.</p>
                  </div>
                </div>
                <div className="bg-white/5 rounded-xl p-4 flex items-start gap-4">
                  <span className="bg-cyan-600 text-white text-sm font-bold px-3 py-1 rounded-full">3</span>
                  <div>
                    <p className="font-semibold text-white">Check GFCI Requirements</p>
                    <p className="text-white/60 text-sm">Does NEC 210.8 require GFCI protection for this circuit location? If yes, use a GFCI breaker or protect with GFCI receptacles downstream. See our <Link href="/blog/gfci-vs-afci-requirements" className="text-purple-400 hover:text-purple-300">GFCI vs AFCI guide</Link> for the complete list.</p>
                  </div>
                </div>
                <div className="bg-white/5 rounded-xl p-4 flex items-start gap-4">
                  <span className="bg-cyan-600 text-white text-sm font-bold px-3 py-1 rounded-full">4</span>
                  <div>
                    <p className="font-semibold text-white">Check AFCI Requirements</p>
                    <p className="text-white/60 text-sm">Does NEC 210.12 require AFCI protection? In dwellings, this is essentially every 15A and 20A circuit except bathrooms, garages, and outdoors. If both AFCI and GFCI are required, use a dual-function breaker.</p>
                  </div>
                </div>
                <div className="bg-white/5 rounded-xl p-4 flex items-start gap-4">
                  <span className="bg-cyan-600 text-white text-sm font-bold px-3 py-1 rounded-full">5</span>
                  <div>
                    <p className="font-semibold text-white">Verify Interrupting Capacity</p>
                    <p className="text-white/60 text-sm">The breaker&apos;s AIC rating must equal or exceed the available fault current at the panel. Standard residential breakers are 10kAIC. Panels fed by large transformers or close to utility service may need 22kAIC or higher rated breakers.</p>
                  </div>
                </div>
                <div className="bg-white/5 rounded-xl p-4 flex items-start gap-4">
                  <span className="bg-cyan-600 text-white text-sm font-bold px-3 py-1 rounded-full">6</span>
                  <div>
                    <p className="font-semibold text-white">Match the Panel Brand</p>
                    <p className="text-white/60 text-sm">Use only breakers listed and approved for your specific panel. See the brand compatibility section below. Using non-listed breakers is a code violation per NEC 110.3(B) and can void the panel&apos;s UL listing.</p>
                  </div>
                </div>
              </div>

              <div className="bg-white/5 rounded-xl p-6 my-6">
                <h4 className="font-semibold text-white mb-3">Quick Selection Chart</h4>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-white/20">
                        <th className="text-left py-3 px-4 text-white/60">Circuit Location</th>
                        <th className="text-left py-3 px-4 text-white/60">Breaker Type Needed</th>
                      </tr>
                    </thead>
                    <tbody className="text-white/80">
                      <tr className="border-b border-white/10">
                        <td className="py-3 px-4">Bedroom, living room, den, hallway</td>
                        <td className="py-3 px-4 font-mono text-purple-400">AFCI</td>
                      </tr>
                      <tr className="border-b border-white/10">
                        <td className="py-3 px-4">Bathroom</td>
                        <td className="py-3 px-4 font-mono text-blue-400">GFCI</td>
                      </tr>
                      <tr className="border-b border-white/10">
                        <td className="py-3 px-4">Kitchen, laundry</td>
                        <td className="py-3 px-4 font-mono text-yellow-400">Dual-Function (AFCI/GFCI)</td>
                      </tr>
                      <tr className="border-b border-white/10">
                        <td className="py-3 px-4">Garage, outdoor</td>
                        <td className="py-3 px-4 font-mono text-blue-400">GFCI</td>
                      </tr>
                      <tr className="border-b border-white/10">
                        <td className="py-3 px-4">Water heater (240V)</td>
                        <td className="py-3 px-4 font-mono text-cyan-400">Standard double-pole (or GFCI per 2023 NEC)</td>
                      </tr>
                      <tr className="border-b border-white/10">
                        <td className="py-3 px-4">Range, dryer (240V, dedicated)</td>
                        <td className="py-3 px-4 font-mono text-cyan-400">Standard double-pole</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4">HVAC equipment</td>
                        <td className="py-3 px-4 font-mono text-cyan-400">Standard (check local amendments)</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </section>

            <section id="brand-compatibility" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Brand Compatibility &amp; Panel Matching</h2>
              <p className="text-white/80 mb-4">
                One of the most critical rules in electrical work: <strong>you must use breakers that are listed and approved for your specific panel</strong>. Per NEC 110.3(B), equipment must be installed according to the conditions of its listing. Using a non-listed breaker in a panel can void the panel&apos;s UL listing, create unsafe conditions, and fail inspection.
              </p>

              <div className="bg-red-900/30 rounded-xl p-6 my-6">
                <h4 className="font-semibold text-red-400 mb-3">Never Cross Brands Unless Classified</h4>
                <p className="text-white/70 text-sm mb-3">
                  Just because a breaker physically fits in a panel does not mean it is approved for that panel. The bus stab design, contact pressure, and thermal characteristics are engineered as a matched system. Mismatched breakers can overheat, fail to trip, or cause arcing at the bus connection.
                </p>
                <p className="text-white/70 text-sm">
                  The only exception is a breaker that is <strong>UL Classified</strong> for use in another manufacturer&apos;s panel. UL-classified breakers have been tested in the specific panel they are classified for and will have markings indicating which panels they are approved to be installed in.
                </p>
              </div>

              <div className="overflow-x-auto my-6">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-white/20">
                      <th className="text-left py-3 px-4 text-white/60">Panel Brand</th>
                      <th className="text-left py-3 px-4 text-white/60">Breaker Line</th>
                      <th className="text-left py-3 px-4 text-white/60">Notes</th>
                    </tr>
                  </thead>
                  <tbody className="text-white/80">
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-semibold">Square D (Schneider)</td>
                      <td className="py-3 px-4">Homeline (HOM), QO</td>
                      <td className="py-3 px-4 text-white/60">HOM and QO are NOT interchangeable; different bus design</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-semibold">Eaton</td>
                      <td className="py-3 px-4">BR, CH (Cutler-Hammer)</td>
                      <td className="py-3 px-4 text-white/60">BR and CH are different product lines; not interchangeable</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-semibold">Siemens</td>
                      <td className="py-3 px-4">QP, QAF, QPF</td>
                      <td className="py-3 px-4 text-white/60">Also fits some Murray panels (Siemens acquired Murray)</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-semibold">Leviton</td>
                      <td className="py-3 px-4">LB series</td>
                      <td className="py-3 px-4 text-white/60">Newer to the market; Leviton panels only</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-semibold">GE</td>
                      <td className="py-3 px-4">THQL, THQP</td>
                      <td className="py-3 px-4 text-white/60">GE residential division now part of Savant; check availability</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="text-white/80 mb-4">
                When replacing breakers in older or obsolete panels (Federal Pacific, Zinsco, Pushmatic, Bryant), sourcing approved breakers can be challenging. In many cases, the safest solution is a <strong>panel upgrade</strong> to a current, supported product line where breakers are readily available.
              </p>
            </section>

            <section id="faq" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Frequently Asked Questions</h2>

              <div className="space-y-6 my-6">
                <div className="bg-white/5 rounded-xl p-6">
                  <h3 className="font-semibold text-white mb-2">Can I use a GFCI breaker and a GFCI receptacle on the same circuit?</h3>
                  <p className="text-white/70 text-sm">
                    Technically yes, but it is not recommended. Having both can cause <strong>nuisance tripping</strong> because both devices are monitoring for the same ground fault imbalance. If the GFCI receptacle trips first, you have to reset it at the outlet <em>and</em> the breaker at the panel. Use one or the other on any given circuit, not both. The same applies to stacking AFCI breakers with AFCI receptacles.
                  </p>
                </div>

                <div className="bg-white/5 rounded-xl p-6">
                  <h3 className="font-semibold text-white mb-2">Why does my AFCI breaker keep tripping?</h3>
                  <p className="text-white/70 text-sm">
                    Common causes include: <strong>loose wire connections</strong> at receptacles, switches, or the breaker itself; <strong>damaged wiring</strong> (nail through cable, rodent damage); <strong>shared neutrals</strong> with another circuit (multiwire branch circuit with improperly wired neutrals); certain appliances with motors or electronic components that produce normal electrical noise the AFCI interprets as arcing (vacuum cleaners, treadmills, some LED dimmers). Start by tightening all connections on the circuit, then check for incompatible devices.
                  </p>
                </div>

                <div className="bg-white/5 rounded-xl p-6">
                  <h3 className="font-semibold text-white mb-2">What is the difference between a GFCI breaker and a ground fault breaker?</h3>
                  <p className="text-white/70 text-sm">
                    &ldquo;Ground fault breaker&rdquo; is a colloquial term that could refer to either a <strong>GFCI breaker</strong> (5 mA trip, personnel protection) or a <strong>GFPE breaker</strong> (30 mA+ trip, equipment protection). Always clarify which type is needed. For receptacle circuits in wet/damp locations, you need GFCI (5 mA). For large commercial service equipment, GFPE per NEC 230.95 is what is required.
                  </p>
                </div>

                <div className="bg-white/5 rounded-xl p-6">
                  <h3 className="font-semibold text-white mb-2">Can I put a tandem breaker in any slot?</h3>
                  <p className="text-white/70 text-sm">
                    No. Tandem breakers can only be installed in <strong>panel positions specifically approved</strong> for tandem installation. The panel&apos;s label or directory will indicate which positions accept tandems. Many panels have physical rejection features that prevent tandems from being installed in non-approved positions. Installing tandems in unapproved slots violates NEC 408.54 and the panel&apos;s listing.
                  </p>
                </div>

                <div className="bg-white/5 rounded-xl p-6">
                  <h3 className="font-semibold text-white mb-2">Do I need AFCI protection when replacing a breaker in an existing panel?</h3>
                  <p className="text-white/70 text-sm">
                    Generally, <strong>like-for-like</strong> replacements do not require upgrading to AFCI. However, if you are extending a circuit, adding outlets, or performing work that requires a permit, the AHJ may require AFCI protection to be added at that time. Some jurisdictions require AFCI when any branch circuit modification is made. Always check with your local AHJ.
                  </p>
                </div>

                <div className="bg-white/5 rounded-xl p-6">
                  <h3 className="font-semibold text-white mb-2">What is the cost difference between breaker types?</h3>
                  <p className="text-white/70 text-sm">
                    Approximate 2026 retail prices vary by brand: <strong>Standard single-pole:</strong> $5&ndash;$12. <strong>GFCI breaker:</strong> $25&ndash;$45. <strong>AFCI breaker:</strong> $25&ndash;$45. <strong>Dual-function (AFCI/GFCI):</strong> $30&ndash;$55. <strong>Tandem:</strong> $10&ndash;$20. Dual-function breakers cost only marginally more than standalone AFCI or GFCI breakers, making them a cost-effective choice when both protections are required.
                  </p>
                </div>

                <div className="bg-white/5 rounded-xl p-6">
                  <h3 className="font-semibold text-white mb-2">Can a breaker go bad even if it has not tripped?</h3>
                  <p className="text-white/70 text-sm">
                    Yes. Breakers can fail in several ways: the contacts can weld shut (breaker <strong>won&apos;t trip</strong> during a fault &mdash; extremely dangerous), the thermal element can weaken from age and heat exposure (breaker <strong>trips at lower than rated current</strong>), or internal components can corrode (breaker has <strong>high resistance</strong> causing heat at the bus connection). If a breaker feels hot to the touch, shows discoloration, smells burnt, or trips erratically, it should be replaced. For detailed troubleshooting steps, see our <Link href="/blog/electrical-panel-troubleshooting" className="text-purple-400 hover:text-purple-300">electrical panel troubleshooting guide</Link>.
                  </p>
                </div>
              </div>
            </section>

            {/* Footer CTA Section */}
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
                <Link href="/blog/nec-article-240-overcurrent-protection" className="bg-white/5 hover:bg-white/10 rounded-xl p-6 transition-colors">
                  <span className="text-purple-400 text-sm">NEC Code</span>
                  <h3 className="font-semibold mt-2">NEC Article 240: Overcurrent Protection</h3>
                </Link>
                <Link href="/blog/gfci-vs-afci-requirements" className="bg-white/5 hover:bg-white/10 rounded-xl p-6 transition-colors">
                  <span className="text-green-400 text-sm">Installation</span>
                  <h3 className="font-semibold mt-2">GFCI vs AFCI: Requirements &amp; Differences Explained</h3>
                </Link>
                <Link href="/blog/electrical-panel-troubleshooting" className="bg-white/5 hover:bg-white/10 rounded-xl p-6 transition-colors">
                  <span className="text-cyan-400 text-sm">Troubleshooting</span>
                  <h3 className="font-semibold mt-2">Electrical Panel Troubleshooting Guide</h3>
                </Link>
                <Link href="/blog/tandem-breakers-nec-rules" className="bg-white/5 hover:bg-white/10 rounded-xl p-6 transition-colors">
                  <span className="text-orange-400 text-sm">Materials</span>
                  <h3 className="font-semibold mt-2">Tandem Breakers: NEC Rules &amp; Installation Guide</h3>
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
