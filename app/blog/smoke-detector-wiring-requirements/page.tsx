import { Metadata } from "next";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import { BreadcrumbJsonLd, BlogPostingJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Smoke Detector Wiring Requirements: NEC & Building Code Guide",
  description: "Complete guide to smoke detector wiring requirements including NEC and building code standards. Learn hardwired vs battery placement, interconnection methods, circuit requirements, CO detector rules, and installation best practices.",
  keywords: [
    "smoke detector wiring",
    "hardwired smoke detector",
    "smoke alarm interconnection",
    "smoke detector placement",
    "NEC smoke detector requirements",
    "smoke detector circuit",
    "carbon monoxide detector wiring",
    "CO detector requirements",
    "smoke alarm building code",
    "interconnected smoke alarms",
    "smoke detector installation",
    "NFPA 72 smoke detector",
    "residential fire alarm wiring",
    "smoke detector battery backup",
  ],
  alternates: {
    canonical: "https://amporalabs.com/blog/smoke-detector-wiring-requirements",
  },
  openGraph: {
    title: "Smoke Detector Wiring Requirements: NEC & Building Code - Ampora",
    description: "Complete guide to smoke detector wiring, placement, and interconnection requirements.",
    url: "https://amporalabs.com/blog/smoke-detector-wiring-requirements",
    type: "article",
  },
};

function HeroIllustration() {
  return (
    <svg viewBox="0 0 400 160" className="w-full h-40 md:h-48" aria-label="Smoke detector wiring and interconnection diagram">
      {/* Ceiling line */}
      <line x1="20" y1="30" x2="380" y2="30" stroke="#4b5563" strokeWidth="2" strokeDasharray="8,4"/>
      <text x="200" y="22" textAnchor="middle" fill="#6b7280" fontSize="8">Ceiling</text>

      {/* Smoke detector 1 - Bedroom */}
      <g transform="translate(70, 45)">
        <circle cx="0" cy="0" r="18" fill="#1f2937" stroke="#6b7280" strokeWidth="2"/>
        <circle cx="0" cy="0" r="14" fill="#111827"/>
        <circle cx="0" cy="0" r="3" fill="#22c55e" opacity="0.8"/>
        <circle cx="0" cy="0" r="5" fill="#22c55e" opacity="0.2"/>
        <text x="0" y="30" textAnchor="middle" fill="#fff" fontSize="8" fontWeight="bold">Bedroom 1</text>
      </g>

      {/* Smoke detector 2 - Hallway */}
      <g transform="translate(200, 45)">
        <circle cx="0" cy="0" r="18" fill="#1f2937" stroke="#f43f5e" strokeWidth="2"/>
        <circle cx="0" cy="0" r="14" fill="#111827"/>
        <circle cx="0" cy="0" r="3" fill="#ef4444" opacity="0.9"/>
        <circle cx="0" cy="0" r="5" fill="#ef4444" opacity="0.3"/>
        <text x="0" y="30" textAnchor="middle" fill="#fff" fontSize="8" fontWeight="bold">Hallway</text>
      </g>

      {/* Smoke detector 3 - Bedroom */}
      <g transform="translate(330, 45)">
        <circle cx="0" cy="0" r="18" fill="#1f2937" stroke="#6b7280" strokeWidth="2"/>
        <circle cx="0" cy="0" r="14" fill="#111827"/>
        <circle cx="0" cy="0" r="3" fill="#22c55e" opacity="0.8"/>
        <circle cx="0" cy="0" r="5" fill="#22c55e" opacity="0.2"/>
        <text x="0" y="30" textAnchor="middle" fill="#fff" fontSize="8" fontWeight="bold">Bedroom 2</text>
      </g>

      {/* Interconnection wires */}
      <line x1="88" y1="45" x2="182" y2="45" stroke="#ef4444" strokeWidth="1.5"/>
      <line x1="218" y1="45" x2="312" y2="45" stroke="#ef4444" strokeWidth="1.5"/>

      {/* 3-wire label */}
      <line x1="88" y1="50" x2="182" y2="50" stroke="#fbbf24" strokeWidth="1" strokeDasharray="3,2"/>
      <line x1="218" y1="50" x2="312" y2="50" stroke="#fbbf24" strokeWidth="1" strokeDasharray="3,2"/>

      {/* Power feed from panel */}
      <g transform="translate(200, 120)">
        <rect x="-25" y="-12" width="50" height="24" rx="3" fill="#1f2937" stroke="#6b7280" strokeWidth="1.5"/>
        <text x="0" y="0" textAnchor="middle" fill="#fff" fontSize="7" fontWeight="bold" dy="3">Panel</text>
      </g>
      <line x1="200" y1="63" x2="200" y2="108" stroke="#60a5fa" strokeWidth="1.5"/>

      {/* Wire labels */}
      <rect x="135" y="90" width="130" height="18" rx="3" fill="#1e3a5f" fillOpacity="0.5"/>
      <text x="200" y="103" textAnchor="middle" fill="#60a5fa" fontSize="7">14/3 NM-B (with interconnect)</text>

      {/* Legend */}
      <g transform="translate(30, 140)">
        <line x1="0" y1="0" x2="15" y2="0" stroke="#ef4444" strokeWidth="2"/>
        <text x="20" y="4" fill="#fff" fontSize="7">Hot (black)</text>
        <line x1="90" y1="0" x2="105" y2="0" stroke="#fbbf24" strokeWidth="1.5" strokeDasharray="3,2"/>
        <text x="110" y="4" fill="#fff" fontSize="7">Interconnect (red)</text>
        <line x1="210" y1="0" x2="225" y2="0" stroke="#60a5fa" strokeWidth="2"/>
        <text x="230" y="4" fill="#fff" fontSize="7">120V Feed</text>
      </g>
    </svg>
  );
}

export default function SmokeDetectorWiringPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navigation />
      <div className="pt-20">
        <BreadcrumbJsonLd
          items={[
            { name: "Home", url: "https://amporalabs.com" },
            { name: "Blog", url: "https://amporalabs.com/blog" },
            { name: "Smoke Detector Wiring Requirements", url: "https://amporalabs.com/blog/smoke-detector-wiring-requirements" },
          ]}
        />
        <BlogPostingJsonLd
          headline="Smoke Detector Wiring Requirements: NEC &amp; Building Code Guide"
          description="Complete guide to smoke detector wiring requirements including hardwired vs battery, interconnection, and placement."
          datePublished="2025-02-08"
          dateModified="2025-02-08"
          url="https://amporalabs.com/blog/smoke-detector-wiring-requirements"
          wordCount={2700}
          keywords={["smoke detector wiring", "hardwired smoke alarm", "interconnection", "CO detector", "fire alarm code"]}
        />

        <article className="max-w-4xl mx-auto px-6 py-12">
          {/* Breadcrumb */}
          <nav className="text-sm text-white/60 mb-8">
            <Link href="/" className="hover:text-white">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/blog" className="hover:text-white">Blog</Link>
            <span className="mx-2">/</span>
            <span className="text-white">Smoke Detector Wiring Requirements</span>
          </nav>

          {/* Article Header */}
          <header className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <span className="px-3 py-1 bg-rose-600/30 text-rose-300 text-sm font-medium rounded-full">
                Safety
              </span>
              <span className="text-white/40 text-sm">11 min read</span>
              <span className="text-white/40 text-sm">February 8, 2025</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6 leading-tight">
              Smoke Detector Wiring Requirements: NEC &amp; Building Code Guide
            </h1>
            <p className="text-xl text-white/70">
              Proper smoke detector wiring saves lives. This guide covers hardwired vs. battery-powered detectors, interconnection requirements, placement rules, circuit considerations, and carbon monoxide detector integration.
            </p>
          </header>

          <div className="mb-12 bg-gradient-to-br from-rose-900/20 to-purple-900/20 rounded-2xl p-6 border border-white/10">
            <HeroIllustration />
          </div>

          {/* Table of Contents */}
          <div className="bg-white/5 rounded-2xl p-6 mb-12">
            <h2 className="font-display font-bold mb-4">In This Guide</h2>
            <ul className="space-y-2 text-white/70">
              <li><a href="#codes-overview" className="hover:text-purple-400">&#8594; Codes &amp; Standards Overview</a></li>
              <li><a href="#hardwired-vs-battery" className="hover:text-purple-400">&#8594; Hardwired vs. Battery-Powered</a></li>
              <li><a href="#placement" className="hover:text-purple-400">&#8594; Placement Requirements</a></li>
              <li><a href="#interconnection" className="hover:text-purple-400">&#8594; Interconnection Wiring</a></li>
              <li><a href="#circuit-requirements" className="hover:text-purple-400">&#8594; Circuit Requirements</a></li>
              <li><a href="#co-detectors" className="hover:text-purple-400">&#8594; Carbon Monoxide Detectors</a></li>
              <li><a href="#detector-types" className="hover:text-purple-400">&#8594; Ionization vs. Photoelectric</a></li>
              <li><a href="#installation-tips" className="hover:text-purple-400">&#8594; Installation Best Practices</a></li>
            </ul>
          </div>

          {/* Article Content */}
          <div className="prose prose-invert prose-lg max-w-none">

            <section id="codes-overview" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Codes &amp; Standards Overview</h2>
              <p className="text-white/80 mb-4">
                Smoke detector requirements come from multiple code sources. Electricians must understand which codes apply and how they interact:
              </p>
              <div className="overflow-x-auto my-6">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-white/20">
                      <th className="text-left py-3 px-4 text-white/60">Code / Standard</th>
                      <th className="text-left py-3 px-4 text-white/60">Coverage</th>
                      <th className="text-left py-3 px-4 text-white/60">Key Sections</th>
                    </tr>
                  </thead>
                  <tbody className="text-white/80">
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-semibold">NEC (NFPA 70)</td>
                      <td className="py-3 px-4">Electrical wiring, circuit requirements</td>
                      <td className="py-3 px-4">Article 760 (Fire Alarm), 210.12</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-semibold">NFPA 72</td>
                      <td className="py-3 px-4">Fire alarm system design &amp; installation</td>
                      <td className="py-3 px-4">Chapter 29 (Single/Multiple Station)</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-semibold">IRC (Building Code)</td>
                      <td className="py-3 px-4">Placement, quantity, type requirements</td>
                      <td className="py-3 px-4">Section R314 (Smoke Alarms)</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-semibold">UL 217 / UL 268</td>
                      <td className="py-3 px-4">Product listing standards</td>
                      <td className="py-3 px-4">Smoke alarm &amp; smoke detector listings</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="bg-cyan-900/30 border border-cyan-500/30 rounded-xl p-6 my-6">
                <h3 className="font-semibold text-cyan-300 mb-2">Smoke Alarm vs. Smoke Detector</h3>
                <p className="text-white/70 text-sm">
                  A &quot;smoke alarm&quot; is a self-contained unit with built-in detection and audible alarm (residential). A &quot;smoke detector&quot; is a detection device connected to a fire alarm control panel (commercial). For residential work, you are typically installing smoke alarms, though the terms are often used interchangeably.
                </p>
              </div>
            </section>

            <section id="hardwired-vs-battery" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Hardwired vs. Battery-Powered</h2>
              <p className="text-white/80 mb-4">
                Building codes determine when hardwired smoke alarms are required versus when battery-only units are acceptable:
              </p>
              <div className="grid md:grid-cols-2 gap-4 my-6">
                <div className="bg-green-900/30 rounded-xl p-6">
                  <h3 className="font-semibold text-green-300 mb-3">Hardwired Required (IRC R314.4)</h3>
                  <ul className="text-white/70 space-y-1 text-sm">
                    <li>&#8226; All new construction</li>
                    <li>&#8226; Additions (new &amp; existing portions)</li>
                    <li>&#8226; Alterations exceeding $1,000 (some jurisdictions)</li>
                    <li>&#8226; When a building permit is pulled for renovation</li>
                    <li>&#8226; Must include battery backup</li>
                  </ul>
                </div>
                <div className="bg-purple-900/30 rounded-xl p-6">
                  <h3 className="font-semibold text-purple-300 mb-3">Battery-Only Acceptable</h3>
                  <ul className="text-white/70 space-y-1 text-sm">
                    <li>&#8226; Existing homes with no renovation</li>
                    <li>&#8226; Where hardwiring is impracticable (some codes)</li>
                    <li>&#8226; Must be sealed 10-year lithium battery type</li>
                    <li>&#8226; Wireless interconnection may be required</li>
                    <li>&#8226; Check local amendments carefully</li>
                  </ul>
                </div>
              </div>
              <p className="text-white/80">
                Even when battery-only units are acceptable, hardwired smoke alarms with battery backup provide superior reliability. The 120V power ensures constant operation while the battery backup covers power outages. Most jurisdictions now require 10-year sealed lithium batteries in any new smoke alarm installation.
              </p>
            </section>

            <section id="placement" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Placement Requirements</h2>
              <p className="text-white/80 mb-4">
                IRC Section R314.3 specifies where smoke alarms must be installed in dwelling units:
              </p>
              <div className="space-y-4 my-6">
                <div className="bg-white/5 rounded-xl p-4">
                  <p className="text-rose-400 font-semibold">Inside Each Bedroom</p>
                  <p className="text-white/60 text-sm mt-1">A smoke alarm is required inside every sleeping room. Mount on the ceiling at least 4 inches from walls, or on the wall between 4 and 12 inches from the ceiling.</p>
                </div>
                <div className="bg-white/5 rounded-xl p-4">
                  <p className="text-rose-400 font-semibold">Outside Each Sleeping Area</p>
                  <p className="text-white/60 text-sm mt-1">At least one smoke alarm must be in the immediate vicinity of bedrooms, typically in the hallway. If bedrooms are on different hallways, each hallway needs a detector.</p>
                </div>
                <div className="bg-white/5 rounded-xl p-4">
                  <p className="text-rose-400 font-semibold">On Each Story</p>
                  <p className="text-white/60 text-sm mt-1">Every story of the dwelling (including basements) must have at least one smoke alarm. For split-level homes, this includes each level even if separated by only a few steps.</p>
                </div>
                <div className="bg-white/5 rounded-xl p-4">
                  <p className="text-rose-400 font-semibold">Basement Requirements</p>
                  <p className="text-white/60 text-sm mt-1">Install at the bottom of the basement stairway on the ceiling. In finished basements with sleeping rooms, follow the same inside-bedroom and outside-sleeping-area rules.</p>
                </div>
              </div>
              <div className="bg-orange-900/30 border border-orange-500/30 rounded-xl p-6 my-6">
                <h3 className="font-semibold text-orange-300 mb-2">Placement Restrictions</h3>
                <p className="text-white/70 text-sm">
                  Do not install smoke alarms within 3 feet of bathrooms with showers, 3 feet of supply air registers, within 10 feet of cooking appliances (unless photoelectric type or with silencing feature), or near windows or doors where drafts could affect detection. Avoid areas with normal ambient temperatures above 100&deg;F or below 40&deg;F.
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

            <section id="interconnection" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Interconnection Wiring</h2>
              <p className="text-white/80 mb-4">
                IRC R314.4 requires all smoke alarms in new construction to be interconnected so that when one alarm sounds, all alarms sound simultaneously. This critical safety feature ensures occupants are alerted regardless of which room detects smoke first.
              </p>
              <div className="bg-cyan-900/30 border border-cyan-500/30 rounded-xl p-6 my-6">
                <h3 className="font-semibold text-cyan-300 mb-2">Wiring Method: 14/3 NM-B Cable</h3>
                <p className="text-white/70 text-sm mb-2">
                  The standard wiring method uses 14/3 NM-B (Romex) cable with three conductors plus ground:
                </p>
                <ul className="text-white/70 space-y-1 text-sm">
                  <li><strong>Black wire</strong> &mdash; 120V hot (power from circuit breaker)</li>
                  <li><strong>White wire</strong> &mdash; Neutral (return path)</li>
                  <li><strong>Red wire</strong> &mdash; Interconnect signal (triggers all alarms when one detects smoke)</li>
                  <li><strong>Bare/green wire</strong> &mdash; Equipment grounding conductor</li>
                </ul>
              </div>
              <p className="text-white/80 mb-4">
                The interconnect (red) wire carries a low-voltage signal between detectors. When any detector senses smoke, it sends a signal on the red wire that activates all connected alarms. All interconnected units must be from the same manufacturer to ensure signal compatibility.
              </p>
              <div className="grid md:grid-cols-2 gap-4 my-6">
                <div className="bg-green-900/30 rounded-xl p-6">
                  <h3 className="font-semibold text-green-300 mb-3">Hardwired Interconnection</h3>
                  <ul className="text-white/70 space-y-1 text-sm">
                    <li>&#8226; Most reliable method</li>
                    <li>&#8226; Uses dedicated red wire in 14/3 cable</li>
                    <li>&#8226; Maximum 18 units per interconnect circuit (typical)</li>
                    <li>&#8226; All units must be same manufacturer</li>
                    <li>&#8226; Required for new construction</li>
                  </ul>
                </div>
                <div className="bg-purple-900/30 rounded-xl p-6">
                  <h3 className="font-semibold text-purple-300 mb-3">Wireless Interconnection</h3>
                  <ul className="text-white/70 space-y-1 text-sm">
                    <li>&#8226; For existing homes without interconnect wiring</li>
                    <li>&#8226; RF signal between units</li>
                    <li>&#8226; Must be listed for wireless interconnection</li>
                    <li>&#8226; Some combine hardwired power with wireless signal</li>
                    <li>&#8226; Check local code acceptance</li>
                  </ul>
                </div>
              </div>
            </section>

            <section id="circuit-requirements" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Circuit Requirements</h2>
              <p className="text-white/80 mb-4">
                The NEC does not require a dedicated circuit for smoke alarms in dwelling units, but there are important considerations:
              </p>
              <ul className="list-disc list-inside text-white/70 space-y-2 mb-4">
                <li><strong>Shared circuits</strong> &mdash; Smoke alarms may share a circuit with other outlets and lights. However, they must not be on a circuit protected by a GFCI device, as GFCI tripping could disable all alarms.</li>
                <li><strong>AFCI protection</strong> &mdash; NEC 210.12 requires AFCI protection for bedroom circuits. Since smoke alarms are typically on bedroom circuits, the AFCI breaker protects the smoke alarm circuit. This is acceptable and required.</li>
                <li><strong>Dedicated circuit advantage</strong> &mdash; While not required, a dedicated 15A circuit for smoke and CO alarms prevents other devices from tripping the breaker and disabling alarms. Many electricians consider this best practice.</li>
                <li><strong>Circuit identification</strong> &mdash; Mark the breaker clearly as &quot;SMOKE ALARMS&quot; in the panel schedule so it is not inadvertently turned off.</li>
              </ul>
              <div className="bg-orange-900/30 border border-orange-500/30 rounded-xl p-6 my-6">
                <h3 className="font-semibold text-orange-300 mb-2">GFCI Warning</h3>
                <p className="text-white/70 text-sm">
                  Never place smoke alarms on a GFCI-protected circuit. A ground fault anywhere on the circuit could trip the GFCI and de-energize all smoke alarms, leaving the dwelling unprotected. If a smoke alarm circuit passes through an area requiring GFCI protection, route the smoke alarm wiring separately.
                </p>
              </div>
            </section>

            <section id="co-detectors" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Carbon Monoxide Detectors</h2>
              <p className="text-white/80 mb-4">
                Most jurisdictions now require carbon monoxide (CO) detectors in dwelling units with fuel-burning appliances or attached garages. Many electricians install combination smoke/CO alarm units to simplify wiring and meet both requirements:
              </p>
              <div className="overflow-x-auto my-6">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-white/20">
                      <th className="text-left py-3 px-4 text-white/60">Requirement</th>
                      <th className="text-left py-3 px-4 text-white/60">Smoke Alarm</th>
                      <th className="text-left py-3 px-4 text-white/60">CO Alarm</th>
                    </tr>
                  </thead>
                  <tbody className="text-white/80">
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-semibold">Inside bedrooms</td>
                      <td className="py-3 px-4">Required</td>
                      <td className="py-3 px-4">Required (if fuel-burning or garage)</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-semibold">Outside sleeping areas</td>
                      <td className="py-3 px-4">Required</td>
                      <td className="py-3 px-4">Required</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-semibold">Each story</td>
                      <td className="py-3 px-4">Required</td>
                      <td className="py-3 px-4">Required (varies by jurisdiction)</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-semibold">Near fuel appliances</td>
                      <td className="py-3 px-4">Not specific</td>
                      <td className="py-3 px-4">Within 10-15 ft (varies)</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-semibold">Interconnection</td>
                      <td className="py-3 px-4">Required (new construction)</td>
                      <td className="py-3 px-4">Required (new construction)</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-white/80">
                Combination smoke/CO units with the same interconnect wire signal are available from all major manufacturers. These units produce distinct alarm patterns: three beeps for smoke, four beeps for CO, per NFPA 72 temporal pattern requirements.
              </p>
            </section>

            <section id="detector-types" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Ionization vs. Photoelectric</h2>
              <p className="text-white/80 mb-4">
                Understanding the two main smoke detection technologies helps electricians and homeowners choose the right units:
              </p>
              <div className="grid md:grid-cols-2 gap-4 my-6">
                <div className="bg-cyan-900/30 rounded-xl p-6">
                  <h3 className="font-semibold text-cyan-300 mb-3">Ionization</h3>
                  <ul className="text-white/70 space-y-1 text-sm">
                    <li>&#8226; Better at detecting fast-flaming fires</li>
                    <li>&#8226; Uses a small radioactive source</li>
                    <li>&#8226; More prone to nuisance alarms from cooking</li>
                    <li>&#8226; Generally less expensive</li>
                    <li>&#8226; Being phased out in some jurisdictions</li>
                  </ul>
                </div>
                <div className="bg-green-900/30 rounded-xl p-6">
                  <h3 className="font-semibold text-green-300 mb-3">Photoelectric</h3>
                  <ul className="text-white/70 space-y-1 text-sm">
                    <li>&#8226; Better at detecting slow-smoldering fires</li>
                    <li>&#8226; Uses a light beam and sensor</li>
                    <li>&#8226; Fewer nuisance alarms from cooking</li>
                    <li>&#8226; Slightly more expensive</li>
                    <li>&#8226; Required by some jurisdictions (e.g., MA, IA)</li>
                  </ul>
                </div>
              </div>
              <p className="text-white/80">
                The NFPA and USFA recommend using both technologies for the best protection. Dual-sensor smoke alarms containing both ionization and photoelectric sensors are widely available. Some jurisdictions, including Massachusetts and Iowa, require photoelectric technology in all new installations.
              </p>
            </section>

            <section id="installation-tips" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Installation Best Practices</h2>
              <p className="text-white/80 mb-4">
                Follow these guidelines for professional smoke alarm installations:
              </p>
              <div className="space-y-4 my-6">
                <div className="bg-white/5 rounded-xl p-4">
                  <p className="text-rose-400 font-semibold">Junction Box Selection</p>
                  <p className="text-white/60 text-sm mt-1">Use a 4&quot; round or octagonal ceiling box rated for the smoke alarm mounting bracket. Many smoke alarms include an adapter plate for standard boxes. Ensure the box is mounted flush with the finished ceiling surface.</p>
                </div>
                <div className="bg-white/5 rounded-xl p-4">
                  <p className="text-rose-400 font-semibold">Wire Connections</p>
                  <p className="text-white/60 text-sm mt-1">Use the pigtail connector provided with the smoke alarm. Connect black to black, white to white, red interconnect to red, and green/bare to the box ground. Leave enough wire in the box for easy alarm replacement (6-8 inches).</p>
                </div>
                <div className="bg-white/5 rounded-xl p-4">
                  <p className="text-rose-400 font-semibold">Testing After Installation</p>
                  <p className="text-white/60 text-sm mt-1">Test every unit using the test button after installation. Verify interconnection by pressing the test button on one unit and confirming all connected alarms sound. Document the test date and results.</p>
                </div>
                <div className="bg-white/5 rounded-xl p-4">
                  <p className="text-rose-400 font-semibold">Customer Education</p>
                  <p className="text-white/60 text-sm mt-1">Inform the homeowner about the 10-year replacement requirement, monthly testing, and the meaning of different alarm patterns (3 beeps = smoke, 4 beeps = CO, chirping = low battery or end of life).</p>
                </div>
              </div>
            </section>

            {/* CTA Section */}
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
                <Link href="/blog/electrical-inspection-checklist" className="bg-white/5 hover:bg-white/10 rounded-xl p-6 transition-colors">
                  <span className="text-rose-400 text-sm">Safety</span>
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
          <p className="text-sm text-white/40">&copy; 2025 Ampora Labs</p>
        </div>
      </footer>
    </main>
  );
}
