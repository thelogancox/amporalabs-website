import { Metadata } from "next";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import { BreadcrumbJsonLd, BlogPostingJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Disconnect Switch Requirements: NEC Rules for Equipment Disconnecting Means",
  description: "Complete guide to NEC disconnect switch requirements. Learn about in-sight rules, NEC Articles 404, 430, and 440, disconnect types, ratings, lockable disconnects, and HVAC/motor disconnect sizing.",
  keywords: [
    "disconnect switch requirements",
    "NEC disconnect rules",
    "in sight disconnect",
    "lockable disconnect",
    "motor disconnect switch",
    "HVAC disconnect requirements",
    "NEC 430 disconnect",
    "NEC 440 disconnect",
    "disconnect switch sizing",
    "safety disconnect switch",
    "fusible disconnect",
    "non-fusible disconnect",
    "equipment disconnecting means",
    "line of sight disconnect",
    "disconnect switch types",
    "NEC 404 switches"
  ],
  alternates: {
    canonical: "https://amporalabs.com/blog/disconnect-switch-requirements-nec",
  },
  openGraph: {
    title: "Disconnect Switch Requirements: NEC Rules for Equipment Disconnecting Means - Ampora",
    description: "Complete guide to NEC disconnect switch requirements including in-sight rules, types, ratings, and HVAC/motor applications.",
    url: "https://amporalabs.com/blog/disconnect-switch-requirements-nec",
    type: "article",
  },
};

function HeroIllustration() {
  return (
    <svg viewBox="0 0 400 160" className="w-full h-40 md:h-48" aria-label="Disconnect switch types and requirements illustration">
      {/* Safety disconnect switch */}
      <g transform="translate(40, 15)">
        <rect x="0" y="0" width="70" height="100" rx="4" fill="#1f2937" stroke="#a855f7" strokeWidth="2"/>
        <rect x="10" y="10" width="50" height="60" fill="#111827"/>

        {/* Handle */}
        <rect x="52" y="25" width="12" height="30" rx="2" fill="#ef4444"/>
        <text x="58" y="43" textAnchor="middle" fill="#fff" fontSize="5" fontWeight="bold">OFF</text>

        {/* Label */}
        <text x="35" y="85" textAnchor="middle" fill="#a855f7" fontSize="6" fontWeight="bold">SAFETY</text>
        <text x="35" y="95" textAnchor="middle" fill="#a855f7" fontSize="6" fontWeight="bold">SWITCH</text>
        <text x="35" y="120" textAnchor="middle" fill="#9ca3af" fontSize="6">Fusible</text>
      </g>

      {/* HVAC unit with disconnect */}
      <g transform="translate(150, 10)">
        {/* HVAC unit */}
        <rect x="30" y="40" width="80" height="70" rx="4" fill="#374151" stroke="#6b7280"/>
        <text x="70" y="70" textAnchor="middle" fill="#9ca3af" fontSize="7">HVAC</text>
        <text x="70" y="82" textAnchor="middle" fill="#9ca3af" fontSize="7">Unit</text>
        <circle cx="70" cy="95" r="8" fill="#111827" stroke="#6b7280"/>

        {/* Disconnect on wall */}
        <rect x="0" y="50" width="22" height="35" rx="2" fill="#1f2937" stroke="#22c55e" strokeWidth="1.5"/>
        <rect x="4" y="55" width="14" height="20" fill="#111827"/>
        <text x="11" y="68" textAnchor="middle" fill="#22c55e" fontSize="4" fontWeight="bold">OFF</text>

        {/* In-sight line */}
        <line x1="22" y1="67" x2="30" y2="67" stroke="#f59e0b" strokeWidth="1" strokeDasharray="3"/>
        <text x="45" y="35" fill="#f59e0b" fontSize="6">&#x2264; 50 ft &amp;</text>
        <text x="45" y="44" fill="#f59e0b" fontSize="6">in sight</text>
      </g>

      {/* Types comparison */}
      <g transform="translate(280, 10)">
        <rect x="0" y="0" width="110" height="140" rx="6" fill="#a855f7" fillOpacity="0.1" stroke="#a855f7" strokeDasharray="4"/>
        <text x="55" y="18" textAnchor="middle" fill="#a855f7" fontSize="7" fontWeight="bold">Disconnect Types</text>

        <text x="8" y="38" fill="#22c55e" fontSize="6">&#x2713; Safety switch</text>
        <text x="8" y="53" fill="#22c55e" fontSize="6">&#x2713; Circuit breaker</text>
        <text x="8" y="68" fill="#22c55e" fontSize="6">&#x2713; Motor starter</text>
        <text x="8" y="83" fill="#22c55e" fontSize="6">&#x2713; Molded case</text>
        <text x="8" y="98" fill="#22c55e" fontSize="6">&#x2713; Cord &amp; plug</text>

        <line x1="8" y1="108" x2="102" y2="108" stroke="#374151"/>
        <text x="8" y="122" fill="#f59e0b" fontSize="6">Must: Open all</text>
        <text x="8" y="134" fill="#f59e0b" fontSize="6">ungrounded conductors</text>
      </g>
    </svg>
  );
}

export default function DisconnectSwitchRequirementsNecPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navigation />
      <div className="pt-20">
        <BreadcrumbJsonLd
          items={[
            { name: "Home", url: "https://amporalabs.com" },
            { name: "Blog", url: "https://amporalabs.com/blog" },
            { name: "Disconnect Switch Requirements NEC", url: "https://amporalabs.com/blog/disconnect-switch-requirements-nec" },
          ]}
        />
        <BlogPostingJsonLd
          headline="Disconnect Switch Requirements: NEC Rules for Equipment Disconnecting Means"
          description="Complete guide to NEC disconnect switch requirements covering in-sight rules, types, ratings, lockable disconnects, and HVAC/motor applications."
          datePublished="2025-02-08"
          dateModified="2025-02-08"
          url="https://amporalabs.com/blog/disconnect-switch-requirements-nec"
          wordCount={2700}
          keywords={["disconnect switch", "NEC requirements", "in-sight rule", "motor disconnect", "HVAC disconnect"]}
        />

        <article className="max-w-4xl mx-auto px-6 py-12">
          {/* Breadcrumb */}
          <nav className="text-sm text-white/60 mb-8">
            <Link href="/" className="hover:text-white">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/blog" className="hover:text-white">Blog</Link>
            <span className="mx-2">/</span>
            <span className="text-white">Disconnect Switch Requirements NEC</span>
          </nav>

          {/* Article Header */}
          <header className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <span className="px-3 py-1 bg-purple-600/30 text-purple-300 text-sm font-medium rounded-full">
                NEC Code
              </span>
              <span className="text-white/40 text-sm">11 min read</span>
              <span className="text-white/40 text-sm">February 8, 2025</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6 leading-tight">
              Disconnect Switch Requirements: NEC Rules for Equipment Disconnecting Means
            </h1>
            <p className="text-xl text-white/70">
              A comprehensive guide to NEC disconnect switch requirements, covering the &quot;in-sight&quot; rule, proper sizing for motors and HVAC equipment, lockable disconnect provisions, and the various types of acceptable disconnecting means.
            </p>
          </header>

          <div className="mb-12 bg-gradient-to-br from-purple-900/20 to-emerald-900/20 rounded-2xl p-6 border border-white/10">
            <HeroIllustration />
          </div>

          {/* Table of Contents */}
          <div className="bg-white/5 rounded-2xl p-6 mb-12">
            <h2 className="font-display font-bold mb-4">In This Guide</h2>
            <ul className="space-y-2 text-white/70">
              <li><a href="#disconnect-overview" className="hover:text-purple-400">&#8594; Why Disconnects Are Required</a></li>
              <li><a href="#in-sight-rule" className="hover:text-purple-400">&#8594; The &quot;In-Sight&quot; Rule Explained</a></li>
              <li><a href="#disconnect-types" className="hover:text-purple-400">&#8594; Types of Disconnecting Means</a></li>
              <li><a href="#disconnect-ratings" className="hover:text-purple-400">&#8594; Disconnect Ratings &amp; Sizing</a></li>
              <li><a href="#motor-disconnects" className="hover:text-purple-400">&#8594; Motor Disconnect Requirements (NEC 430)</a></li>
              <li><a href="#hvac-disconnects" className="hover:text-purple-400">&#8594; HVAC Disconnect Requirements (NEC 440)</a></li>
              <li><a href="#lockable-disconnects" className="hover:text-purple-400">&#8594; Lockable Disconnect Provisions</a></li>
              <li><a href="#common-applications" className="hover:text-purple-400">&#8594; Common Applications &amp; Mistakes</a></li>
            </ul>
          </div>

          {/* Article Content */}
          <div className="prose prose-invert prose-lg max-w-none">

            <section id="disconnect-overview" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Why Disconnects Are Required</h2>
              <p className="text-white/80 mb-4">
                The NEC requires disconnecting means for virtually all electrical equipment to ensure that workers can safely de-energize equipment for maintenance, repair, or emergency situations. The fundamental principle is that <strong>every electrical installation must have a way to disconnect all ungrounded (hot) conductors</strong> from the source of supply.
              </p>
              <p className="text-white/80 mb-4">
                Disconnect requirements appear throughout the NEC, but the primary articles governing disconnects include:
              </p>

              <div className="bg-purple-900/30 rounded-xl p-6 my-6">
                <h3 className="font-semibold text-purple-400 mb-3">Key NEC Articles for Disconnects</h3>
                <ul className="space-y-2 text-white/70 text-sm">
                  <li>&#x2022; <strong>NEC 404</strong> &mdash; Switches (general switch requirements)</li>
                  <li>&#x2022; <strong>NEC 422.31-422.35</strong> &mdash; Appliance disconnects</li>
                  <li>&#x2022; <strong>NEC 430 Part IX</strong> &mdash; Motor disconnecting means</li>
                  <li>&#x2022; <strong>NEC 440 Part II</strong> &mdash; Air-conditioning and refrigeration disconnects</li>
                  <li>&#x2022; <strong>NEC 445.18</strong> &mdash; Generator disconnects</li>
                  <li>&#x2022; <strong>NEC 480.7</strong> &mdash; Battery system disconnects</li>
                  <li>&#x2022; <strong>NEC 600.6</strong> &mdash; Sign and outline lighting disconnects</li>
                  <li>&#x2022; <strong>NEC 680.12</strong> &mdash; Swimming pool equipment disconnects</li>
                </ul>
              </div>
            </section>

            <section id="in-sight-rule" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">The &quot;In-Sight&quot; Rule Explained</h2>
              <p className="text-white/80 mb-4">
                One of the most frequently referenced (and misunderstood) disconnect requirements is the &quot;within sight&quot; rule. NEC Article 100 defines &quot;within sight&quot; as:
              </p>

              <div className="bg-cyan-900/30 rounded-xl p-6 my-6">
                <h3 className="font-semibold text-cyan-400 mb-3">NEC Definition: &quot;Within Sight&quot;</h3>
                <p className="text-white/70 text-sm">
                  <strong>Within Sight From (Within Sight):</strong> Where this Code specifies that one equipment shall be &quot;within sight from,&quot; &quot;within sight of,&quot; or &quot;within sight,&quot; and so forth, of another equipment, the specified equipment is to be visible and not more than <strong>15 m (50 ft)</strong> distant from the other.
                </p>
              </div>

              <p className="text-white/80 mb-4">
                This means two conditions must both be met:
              </p>
              <div className="grid md:grid-cols-2 gap-6 my-6">
                <div className="bg-white/5 rounded-xl p-6">
                  <h3 className="font-semibold text-green-400 mb-3">Condition 1: Visible</h3>
                  <p className="text-white/70 text-sm">
                    The disconnect must be visible from the equipment. If you&apos;re standing at the motor or HVAC unit, you must be able to see the disconnect. A disconnect around a corner, in a different room, or behind an obstruction does not satisfy this requirement.
                  </p>
                </div>
                <div className="bg-white/5 rounded-xl p-6">
                  <h3 className="font-semibold text-orange-400 mb-3">Condition 2: Not More Than 50 Feet</h3>
                  <p className="text-white/70 text-sm">
                    Even if visible, the disconnect must be within 50 feet of the equipment it serves. A disconnect that is visible but 60 feet away does not qualify as &quot;within sight.&quot;
                  </p>
                </div>
              </div>

              <div className="bg-orange-900/30 rounded-xl p-6 my-6">
                <h3 className="font-semibold text-orange-400 mb-3">Exceptions to the In-Sight Rule</h3>
                <p className="text-white/70 text-sm mb-3">
                  Several NEC articles provide exceptions where the disconnect does not need to be within sight of the equipment, provided that the disconnect is:
                </p>
                <ul className="space-y-2 text-white/70 text-sm">
                  <li>&#x2022; <strong>Lockable in the open position</strong> &mdash; NEC 430.102(B) Exception allows motor disconnects that are not within sight if the disconnect can be locked in the open position and is individually identified</li>
                  <li>&#x2022; <strong>Controller-type disconnect</strong> &mdash; For some motor applications, the controller can serve as the disconnect if it opens all ungrounded conductors and is capable of being locked open</li>
                  <li>&#x2022; <strong>High-voltage or industrial applications</strong> &mdash; Some provisions allow remote disconnects with lockout/tagout procedures</li>
                </ul>
              </div>
            </section>

            <section id="disconnect-types" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Types of Disconnecting Means</h2>
              <p className="text-white/80 mb-4">
                The NEC permits several types of devices to serve as disconnecting means, depending on the application and rating requirements:
              </p>

              <div className="overflow-x-auto my-6">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-white/20">
                      <th className="text-left py-3 px-4 text-white/60">Disconnect Type</th>
                      <th className="text-left py-3 px-4 text-white/60">Common Applications</th>
                      <th className="text-left py-3 px-4 text-white/60">Key Features</th>
                    </tr>
                  </thead>
                  <tbody className="text-white/70">
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-semibold">Safety Switch (Fusible)</td>
                      <td className="py-3 px-4">Motors, HVAC, general equipment</td>
                      <td className="py-3 px-4">Provides disconnecting means + overcurrent protection</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-semibold">Safety Switch (Non-Fusible)</td>
                      <td className="py-3 px-4">Equipment with upstream protection</td>
                      <td className="py-3 px-4">Disconnect only &mdash; no fuses, lower cost</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-semibold">Circuit Breaker</td>
                      <td className="py-3 px-4">Panelboard-mounted disconnects</td>
                      <td className="py-3 px-4">Must be capable of being locked open per 110.25</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-semibold">Motor Circuit Switch</td>
                      <td className="py-3 px-4">Motor circuits specifically</td>
                      <td className="py-3 px-4">Rated in HP, designed for motor inrush current</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-semibold">Molded Case Switch</td>
                      <td className="py-3 px-4">Heavy-duty industrial</td>
                      <td className="py-3 px-4">Looks like a breaker but is switch-rated only</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-semibold">Cord-and-Plug Connection</td>
                      <td className="py-3 px-4">Portable equipment, appliances</td>
                      <td className="py-3 px-4">Pulling the plug serves as the disconnect</td>
                    </tr>
                  </tbody>
                </table>
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

            <section id="disconnect-ratings" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Disconnect Ratings &amp; Sizing</h2>
              <p className="text-white/80 mb-4">
                Disconnect sizing depends on the type of equipment being served. The NEC establishes minimum ratings based on the load characteristics.
              </p>

              <div className="bg-green-900/30 rounded-xl p-6 my-6">
                <h3 className="font-semibold text-green-400 mb-3">General Sizing Rules</h3>
                <ul className="space-y-2 text-white/70 text-sm">
                  <li>&#x2022; <strong>General equipment</strong> &mdash; Disconnect must be rated at least 115% of the full-load current of the equipment</li>
                  <li>&#x2022; <strong>Motor disconnects</strong> &mdash; Must be rated at least 115% of the motor full-load current (NEC 430.110)</li>
                  <li>&#x2022; <strong>HP-rated switches</strong> &mdash; Must have an HP rating at least equal to the motor HP at the system voltage</li>
                  <li>&#x2022; <strong>HVAC equipment</strong> &mdash; Must be rated at least 115% of the nameplate rated-load current or branch-circuit selection current, whichever is greater</li>
                  <li>&#x2022; <strong>Minimum size</strong> &mdash; No disconnect shall be less than 30A for circuits of 600V or less (NEC 430.110(A))</li>
                </ul>
              </div>

              <div className="overflow-x-auto my-6">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-white/20">
                      <th className="text-left py-3 px-4 text-white/60">Motor HP (230V, 3-Phase)</th>
                      <th className="text-left py-3 px-4 text-white/60">FLA (NEC Table 430.250)</th>
                      <th className="text-left py-3 px-4 text-white/60">Min. Disconnect Amps</th>
                      <th className="text-left py-3 px-4 text-white/60">Standard Switch Size</th>
                    </tr>
                  </thead>
                  <tbody className="text-white/70">
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">1 HP</td>
                      <td className="py-3 px-4">3.6A</td>
                      <td className="py-3 px-4">4.1A</td>
                      <td className="py-3 px-4">30A</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">5 HP</td>
                      <td className="py-3 px-4">15.2A</td>
                      <td className="py-3 px-4">17.5A</td>
                      <td className="py-3 px-4">30A</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">10 HP</td>
                      <td className="py-3 px-4">28A</td>
                      <td className="py-3 px-4">32.2A</td>
                      <td className="py-3 px-4">60A</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">25 HP</td>
                      <td className="py-3 px-4">68A</td>
                      <td className="py-3 px-4">78.2A</td>
                      <td className="py-3 px-4">100A</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">50 HP</td>
                      <td className="py-3 px-4">130A</td>
                      <td className="py-3 px-4">149.5A</td>
                      <td className="py-3 px-4">200A</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section id="motor-disconnects" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Motor Disconnect Requirements (NEC 430)</h2>
              <p className="text-white/80 mb-4">
                NEC Article 430, Part IX (Sections 430.101 through 430.113) covers the disconnecting means requirements specifically for motor circuits. These requirements are among the most detailed and frequently tested on licensing exams.
              </p>

              <div className="space-y-4 my-6">
                <div className="bg-white/5 rounded-xl p-6">
                  <h3 className="font-semibold text-purple-400 mb-2">430.102(A) &mdash; Controller Disconnect</h3>
                  <p className="text-white/70 text-sm">
                    A disconnecting means must be located within sight of the motor controller. This allows the person working on the controller to verify the power is off. The disconnect must open all ungrounded supply conductors and cannot automatically close.
                  </p>
                </div>
                <div className="bg-white/5 rounded-xl p-6">
                  <h3 className="font-semibold text-cyan-400 mb-2">430.102(B) &mdash; Motor Disconnect</h3>
                  <p className="text-white/70 text-sm">
                    A disconnecting means must be located within sight of the motor and driven machinery. <strong>Exception:</strong> If the disconnect is not within sight, it must be capable of being locked in the open position and individually identified. The lock provisions must remain in place with or without the lock installed.
                  </p>
                </div>
                <div className="bg-white/5 rounded-xl p-6">
                  <h3 className="font-semibold text-green-400 mb-2">430.109 &mdash; Type of Disconnect</h3>
                  <p className="text-white/70 text-sm">
                    For motors rated 100 HP and below at 600V or less, the disconnect must be a listed motor-circuit switch rated in horsepower, a listed molded case circuit breaker, or a listed molded case switch. For motors over 100 HP, the disconnect can be a switch rated in amperes at 115% or more of FLA.
                  </p>
                </div>
              </div>
            </section>

            <section id="hvac-disconnects" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">HVAC Disconnect Requirements (NEC 440)</h2>
              <p className="text-white/80 mb-4">
                NEC Article 440 covers air-conditioning and refrigeration equipment, which have unique electrical characteristics due to their hermetic compressor motors. HVAC disconnects have some important differences from standard motor disconnects.
              </p>

              <div className="bg-cyan-900/30 rounded-xl p-6 my-6">
                <h3 className="font-semibold text-cyan-400 mb-3">HVAC Disconnect Specifics</h3>
                <ul className="space-y-2 text-white/70 text-sm">
                  <li>&#x2022; <strong>440.14 &mdash; Location</strong> &mdash; The disconnect must be within sight from and readily accessible from the equipment</li>
                  <li>&#x2022; <strong>440.12 &mdash; Rating</strong> &mdash; Must be at least 115% of the nameplate rated-load current or branch-circuit selection current, whichever is greater</li>
                  <li>&#x2022; <strong>Ampere rating</strong> &mdash; For non-HP-rated disconnects, the ampere rating must be at least 115% of the equipment rated-load current</li>
                  <li>&#x2022; <strong>HP rating</strong> &mdash; HP-rated disconnects must be rated per NEC Table 430.251 for the equivalent locked-rotor current</li>
                </ul>
              </div>

              <div className="bg-orange-900/30 rounded-xl p-6 my-6">
                <h3 className="font-semibold text-orange-400 mb-3">HVAC Disconnect Installation Tips</h3>
                <ul className="space-y-2 text-white/70 text-sm">
                  <li>&#x2022; Mount the disconnect on the building wall adjacent to the outdoor unit, not on the unit itself</li>
                  <li>&#x2022; Install at a height accessible to service technicians (typically 4-5 feet above grade)</li>
                  <li>&#x2022; Use a weatherproof (NEMA 3R) enclosure for outdoor installations</li>
                  <li>&#x2022; Ensure the disconnect is accessible even when the unit access panel is open</li>
                  <li>&#x2022; A non-fusible disconnect is acceptable when overcurrent protection is provided upstream at the panel</li>
                  <li>&#x2022; For mini-split systems, read the manufacturer&apos;s installation manual for specific disconnect requirements</li>
                </ul>
              </div>
            </section>

            <section id="lockable-disconnects" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Lockable Disconnect Provisions</h2>
              <p className="text-white/80 mb-4">
                The 2020 and 2023 NEC editions significantly strengthened the lockable disconnect requirements. NEC 110.25 now provides a unified definition and requirement for lockable disconnecting means throughout the code.
              </p>

              <div className="bg-purple-900/30 rounded-xl p-6 my-6">
                <h3 className="font-semibold text-purple-400 mb-3">NEC 110.25 &mdash; Lockable Disconnecting Means</h3>
                <p className="text-white/70 text-sm mb-3">
                  Where a disconnecting means is required to be lockable, it must meet all of the following:
                </p>
                <ul className="space-y-2 text-white/70 text-sm">
                  <li>&#x2022; <strong>Capable of being locked</strong> in the open position</li>
                  <li>&#x2022; The <strong>lock provisions must remain in place</strong> with or without the lock installed</li>
                  <li>&#x2022; <strong>Portable locking means</strong> (such as snap-on lock hasp devices) are NOT permitted as the means of locking</li>
                  <li>&#x2022; The disconnect must be designed to accept a <strong>permanent, integral lock attachment</strong></li>
                </ul>
                <p className="text-white/70 text-sm mt-3">
                  This is a major change from previous editions. Clip-on lock devices that were commonly used are no longer compliant. Disconnects must have a built-in provision for locking.
                </p>
              </div>
            </section>

            <section id="common-applications" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Common Applications &amp; Mistakes</h2>
              <p className="text-white/80 mb-4">
                Understanding common disconnect applications and the mistakes that lead to inspection failures will help you get it right the first time.
              </p>

              <div className="space-y-3 my-6">
                <div className="bg-white/5 rounded-xl p-4 flex items-start gap-4">
                  <span className="text-red-400 font-bold text-lg">&#x2717;</span>
                  <div>
                    <h3 className="font-semibold">Disconnect not within sight of outdoor HVAC unit</h3>
                    <p className="text-white/60 text-sm mt-1">The HVAC disconnect must be visible from the equipment AND within 50 feet. Mounting it inside the garage or around a corner does not comply.</p>
                  </div>
                </div>
                <div className="bg-white/5 rounded-xl p-4 flex items-start gap-4">
                  <span className="text-red-400 font-bold text-lg">&#x2717;</span>
                  <div>
                    <h3 className="font-semibold">Undersized disconnect for motor application</h3>
                    <p className="text-white/60 text-sm mt-1">A 30A disconnect on a 10 HP motor is undersized. The disconnect must be rated at least 115% of the motor FLA and must have an appropriate HP rating.</p>
                  </div>
                </div>
                <div className="bg-white/5 rounded-xl p-4 flex items-start gap-4">
                  <span className="text-red-400 font-bold text-lg">&#x2717;</span>
                  <div>
                    <h3 className="font-semibold">Using a snap-on lock device as the lockable means</h3>
                    <p className="text-white/60 text-sm mt-1">Per NEC 110.25, portable locking means are not permitted. The disconnect must have a permanent, integral lock provision.</p>
                  </div>
                </div>
                <div className="bg-white/5 rounded-xl p-4 flex items-start gap-4">
                  <span className="text-red-400 font-bold text-lg">&#x2717;</span>
                  <div>
                    <h3 className="font-semibold">Missing disconnect at rooftop equipment</h3>
                    <p className="text-white/60 text-sm mt-1">Rooftop HVAC units, exhaust fans, and other equipment still require within-sight disconnects. The panel in the electrical room below does not satisfy this requirement.</p>
                  </div>
                </div>
                <div className="bg-white/5 rounded-xl p-4 flex items-start gap-4">
                  <span className="text-red-400 font-bold text-lg">&#x2717;</span>
                  <div>
                    <h3 className="font-semibold">Non-weatherproof disconnect outdoors</h3>
                    <p className="text-white/60 text-sm mt-1">Outdoor disconnects must be in NEMA 3R (or better) rated enclosures to protect against weather exposure.</p>
                  </div>
                </div>
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
                <Link href="/blog/motor-circuit-protection-sizing" className="bg-white/5 hover:bg-white/10 rounded-xl p-6 transition-colors">
                  <span className="text-purple-400 text-sm">NEC Code</span>
                  <h3 className="font-semibold mt-2">Motor Circuit Protection &amp; Sizing Guide</h3>
                </Link>
                <Link href="/blog/nec-article-240-overcurrent-protection" className="bg-white/5 hover:bg-white/10 rounded-xl p-6 transition-colors">
                  <span className="text-purple-400 text-sm">NEC Code</span>
                  <h3 className="font-semibold mt-2">NEC Article 240: Overcurrent Protection Guide</h3>
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
