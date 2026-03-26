import { Metadata } from "next";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import { BreadcrumbJsonLd, BlogPostingJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "NEC Article 230: Electrical Service Requirements Complete Guide",
  description: "Complete guide to NEC Article 230 electrical service requirements. Covers service drop vs lateral, service entrance conductors, overhead clearances, disconnecting means, overcurrent protection, grounding requirements, and service equipment installation.",
  keywords: [
    "NEC Article 230",
    "electrical service requirements",
    "service drop clearance",
    "service lateral requirements",
    "service entrance conductors",
    "main disconnect requirements",
    "service equipment NEC",
    "overhead service clearance",
    "service mast requirements",
    "NEC 230 service",
    "electrical service upgrade",
    "service disconnecting means",
    "service entrance grounding",
    "200 amp service requirements",
    "number of services NEC",
    "service conductor sizing"
  ],
  alternates: {
    canonical: "https://amporalabs.com/blog/nec-article-230-service-requirements",
  },
  openGraph: {
    title: "NEC Article 230: Electrical Service Requirements Guide - Ampora",
    description: "Complete guide to NEC Article 230 covering service drops, laterals, conductors, clearances, and disconnecting means.",
    url: "https://amporalabs.com/blog/nec-article-230-service-requirements",
    type: "article",
  },
};

function HeroIllustration() {
  return (
    <svg viewBox="0 0 400 160" className="w-full h-40 md:h-48" aria-label="Electrical service entrance diagram">
      {/* Utility pole */}
      <g transform="translate(15, 10)">
        <rect x="8" y="0" width="10" height="130" fill="#92400e"/>
        <line x1="0" y1="15" x2="30" y2="15" stroke="#4b5563" strokeWidth="2.5"/>
        <line x1="0" y1="25" x2="30" y2="25" stroke="#4b5563" strokeWidth="2.5"/>
        <line x1="0" y1="35" x2="30" y2="35" stroke="#4b5563" strokeWidth="2.5"/>
        <circle cx="5" cy="15" r="3" fill="#6b7280"/>
        <circle cx="5" cy="25" r="3" fill="#6b7280"/>
        <circle cx="5" cy="35" r="3" fill="#6b7280"/>
        <text x="13" y="148" textAnchor="middle" fill="#9ca3af" fontSize="6">Utility</text>
      </g>

      {/* Service drop lines */}
      <path d="M 45 15 Q 100 5, 155 35" stroke="#ef4444" strokeWidth="2" fill="none"/>
      <path d="M 45 25 Q 100 15, 155 40" stroke="#ef4444" strokeWidth="2" fill="none"/>
      <path d="M 45 35 Q 100 25, 155 45" stroke="#6b7280" strokeWidth="2" fill="none"/>
      <text x="100" y="8" textAnchor="middle" fill="#ef4444" fontSize="7" fontWeight="bold">Service Drop</text>

      {/* Weatherhead */}
      <g transform="translate(150, 25)">
        <path d="M 0 15 L 5 0 L 10 15" fill="#6b7280" stroke="#9ca3af" strokeWidth="1.5"/>
        <rect x="2" y="15" width="6" height="25" fill="#6b7280" stroke="#9ca3af" strokeWidth="1"/>
        <text x="25" y="10" fill="#9ca3af" fontSize="6">Weatherhead</text>
      </g>

      {/* Service mast / conduit down */}
      <rect x="153" y="50" width="6" height="60" fill="#6b7280" stroke="#9ca3af" strokeWidth="0.5"/>

      {/* Meter base */}
      <g transform="translate(140, 110)">
        <rect x="0" y="0" width="30" height="30" rx="2" fill="#374151" stroke="#9ca3af" strokeWidth="1.5"/>
        <circle cx="15" cy="15" r="10" fill="#1f2937" stroke="#6b7280" strokeWidth="1"/>
        <circle cx="15" cy="15" r="6" fill="none" stroke="#22c55e" strokeWidth="1"/>
        <text x="15" y="18" textAnchor="middle" fill="#22c55e" fontSize="6">kWh</text>
        <text x="15" y="43" textAnchor="middle" fill="#9ca3af" fontSize="6">Meter</text>
      </g>

      {/* Service entrance conductors to panel */}
      <line x1="170" y1="125" x2="220" y2="125" stroke="#ef4444" strokeWidth="2"/>

      {/* Main panel */}
      <g transform="translate(220, 85)">
        <rect x="0" y="0" width="50" height="70" rx="4" fill="#374151" stroke="#22c55e" strokeWidth="2"/>
        <text x="25" y="15" textAnchor="middle" fill="#22c55e" fontSize="8" fontWeight="bold">MAIN</text>
        <text x="25" y="27" textAnchor="middle" fill="#22c55e" fontSize="7">200A</text>
        <line x1="5" y1="33" x2="45" y2="33" stroke="#6b7280" strokeWidth="1"/>
        {/* Breaker slots */}
        <rect x="8" y="37" width="15" height="6" rx="1" fill="#1f2937" stroke="#6b7280" strokeWidth="0.5"/>
        <rect x="27" y="37" width="15" height="6" rx="1" fill="#1f2937" stroke="#6b7280" strokeWidth="0.5"/>
        <rect x="8" y="46" width="15" height="6" rx="1" fill="#1f2937" stroke="#6b7280" strokeWidth="0.5"/>
        <rect x="27" y="46" width="15" height="6" rx="1" fill="#1f2937" stroke="#6b7280" strokeWidth="0.5"/>
        <rect x="8" y="55" width="15" height="6" rx="1" fill="#1f2937" stroke="#6b7280" strokeWidth="0.5"/>
        <rect x="27" y="55" width="15" height="6" rx="1" fill="#1f2937" stroke="#6b7280" strokeWidth="0.5"/>
      </g>

      {/* Clearance dimension */}
      <g transform="translate(80, 40)">
        <line x1="0" y1="0" x2="0" y2="100" stroke="#a855f7" strokeWidth="1.5" strokeDasharray="3"/>
        <line x1="-5" y1="0" x2="5" y2="0" stroke="#a855f7" strokeWidth="1.5"/>
        <line x1="-5" y1="100" x2="5" y2="100" stroke="#a855f7" strokeWidth="1.5"/>
        <text x="-5" y="55" textAnchor="end" fill="#c4b5fd" fontSize="7">10 ft min</text>
        <text x="-5" y="65" textAnchor="end" fill="#c4b5fd" fontSize="6">clearance</text>
      </g>

      {/* Ground rod */}
      <g transform="translate(240, 155)">
        <line x1="0" y1="0" x2="0" y2="-10" stroke="#22c55e" strokeWidth="2"/>
        <line x1="-8" y1="0" x2="8" y2="0" stroke="#22c55e" strokeWidth="3"/>
        <line x1="-5" y1="3" x2="5" y2="3" stroke="#22c55e" strokeWidth="2"/>
        <line x1="-2" y1="6" x2="2" y2="6" stroke="#22c55e" strokeWidth="1"/>
      </g>

      {/* NEC 230 label */}
      <g transform="translate(300, 20)">
        <rect x="0" y="0" width="85" height="55" rx="6" fill="#a855f7" fillOpacity="0.1" stroke="#a855f7" strokeWidth="1.5"/>
        <text x="42" y="18" textAnchor="middle" fill="#a855f7" fontSize="9" fontWeight="bold">NEC 230</text>
        <text x="42" y="32" textAnchor="middle" fill="#c4b5fd" fontSize="7">Services</text>
        <text x="42" y="46" textAnchor="middle" fill="#c4b5fd" fontSize="6">Parts I through VIII</text>
      </g>

      {/* Ground label */}
      <text x="85" y="148" textAnchor="middle" fill="#9ca3af" fontSize="6">Grade Level</text>
      <line x1="55" y1="140" x2="135" y2="140" stroke="#78350f" strokeWidth="2"/>
    </svg>
  );
}

export default function NECArticle230Page() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navigation />
      <div className="pt-20">
        <BreadcrumbJsonLd
          items={[
            { name: "Home", url: "https://amporalabs.com" },
            { name: "Blog", url: "https://amporalabs.com/blog" },
            { name: "NEC Article 230 Service Requirements", url: "https://amporalabs.com/blog/nec-article-230-service-requirements" },
          ]}
        />
        <BlogPostingJsonLd
          headline="NEC Article 230: Electrical Service Requirements Complete Guide"
          description="Complete guide to NEC Article 230 covering service drops, laterals, service entrance conductors, clearances, disconnecting means, and grounding."
          datePublished="2025-02-08"
          dateModified="2025-02-08"
          url="https://amporalabs.com/blog/nec-article-230-service-requirements"
          wordCount={3200}
          keywords={["NEC Article 230", "electrical service", "service drop", "service entrance conductors", "main disconnect"]}
        />

        <article className="max-w-4xl mx-auto px-6 py-12">
          {/* Breadcrumb */}
          <nav className="text-sm text-white/60 mb-8">
            <Link href="/" className="hover:text-white">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/blog" className="hover:text-white">Blog</Link>
            <span className="mx-2">/</span>
            <span className="text-white">NEC Article 230 Service Requirements</span>
          </nav>

          {/* Article Header */}
          <header className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <span className="px-3 py-1 bg-purple-600/30 text-purple-300 text-sm font-medium rounded-full">
                NEC Code
              </span>
              <span className="text-white/40 text-sm">14 min read</span>
              <span className="text-white/40 text-sm">February 8, 2025</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6 leading-tight">
              NEC Article 230: Electrical Service Requirements Complete Guide
            </h1>
            <p className="text-xl text-white/70">
              A comprehensive walkthrough of NEC Article 230, covering every aspect of electrical services from the utility connection to the main disconnect. Includes service drops, service laterals, overhead clearances, conductor sizing, disconnecting means, and grounding requirements.
            </p>
          </header>

          <div className="mb-12 bg-gradient-to-br from-purple-900/20 to-green-900/20 rounded-2xl p-6 border border-white/10">
            <HeroIllustration />
          </div>

          {/* Quick Reference CTA */}
          <div className="bg-purple-900/30 border border-purple-500/30 rounded-2xl p-6 mb-12">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div>
                <h3 className="font-display font-bold text-lg mb-1">Quick NEC Reference</h3>
                <p className="text-white/70 text-sm">Look up Article 230 service requirements instantly with Ampora&apos;s NEC lookup.</p>
              </div>
              <a
                href="https://apps.apple.com/us/app/ampora/id6753693522"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-purple-600 text-white font-semibold rounded-full hover:bg-purple-500 transition-colors whitespace-nowrap"
              >
                Download Free
              </a>
            </div>
          </div>

          {/* Table of Contents */}
          <div className="bg-white/5 rounded-2xl p-6 mb-12">
            <h2 className="font-display font-bold mb-4">In This Guide</h2>
            <ul className="space-y-2 text-white/70">
              <li><a href="#article-overview" className="hover:text-purple-400">&#8594; Article 230 Overview &amp; Structure</a></li>
              <li><a href="#service-drop-lateral" className="hover:text-purple-400">&#8594; Service Drop vs Service Lateral</a></li>
              <li><a href="#overhead-clearances" className="hover:text-purple-400">&#8594; Overhead Service Clearances</a></li>
              <li><a href="#service-entrance-conductors" className="hover:text-purple-400">&#8594; Service Entrance Conductors</a></li>
              <li><a href="#disconnecting-means" className="hover:text-purple-400">&#8594; Service Disconnecting Means</a></li>
              <li><a href="#grounding" className="hover:text-purple-400">&#8594; Service Grounding Requirements</a></li>
              <li><a href="#common-violations" className="hover:text-purple-400">&#8594; Common Article 230 Violations</a></li>
            </ul>
          </div>

          {/* Article Content */}
          <div className="prose prose-invert prose-lg max-w-none">

            <section id="article-overview" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Article 230 Overview &amp; Structure</h2>
              <p className="text-white/80 mb-4">
                NEC Article 230 is one of the most critical articles in the code, governing how electricity enters a building from the utility supply. Every residential, commercial, and industrial electrical installation begins with the service, making Article 230 fundamental knowledge for every electrician.
              </p>

              <div className="bg-cyan-900/30 border border-cyan-500/30 rounded-xl p-6 my-6">
                <h3 className="font-semibold text-cyan-400 mb-3">Article 230 Parts</h3>
                <ul className="text-white/80 space-y-2">
                  <li><strong>Part I (230.1-230.2):</strong> Scope and number of services permitted</li>
                  <li><strong>Part II (230.6-230.56):</strong> Overhead service-drop conductors</li>
                  <li><strong>Part III (230.30-230.33):</strong> Underground service-lateral conductors</li>
                  <li><strong>Part IV (230.40-230.56):</strong> Service-entrance conductors</li>
                  <li><strong>Part V (230.62-230.66):</strong> Service equipment - general</li>
                  <li><strong>Part VI (230.70-230.82):</strong> Service equipment - disconnecting means</li>
                  <li><strong>Part VII (230.90-230.95):</strong> Service equipment - overcurrent protection</li>
                  <li><strong>Part VIII (230.200-230.212):</strong> Services exceeding 1000 volts</li>
                </ul>
              </div>

              <h3 className="text-xl font-semibold mt-6 mb-3">Number of Services - NEC 230.2</h3>
              <p className="text-white/80 mb-4">
                The general rule is that a building shall be supplied by only one service. However, NEC 230.2 permits additional services when:
              </p>
              <ul className="list-disc list-inside text-white/70 space-y-2 mb-4">
                <li><strong>Fire pumps:</strong> Separate service permitted for fire pump loads</li>
                <li><strong>Emergency systems:</strong> Separate service allowed for legally required standby or emergency systems</li>
                <li><strong>Multiple occupancies:</strong> Each occupancy can have its own service by special permission</li>
                <li><strong>Capacity requirements:</strong> When a single service cannot supply the total load</li>
                <li><strong>Different voltages/phases:</strong> When different characteristics are needed</li>
                <li><strong>Large area:</strong> Buildings of large area where single service is impractical</li>
              </ul>

              <div className="bg-orange-900/30 border border-orange-500/30 rounded-xl p-6 my-6">
                <h4 className="font-semibold text-orange-400 mb-2">Important: Service vs Feeder</h4>
                <p className="text-white/70">
                  Do not confuse &quot;service&quot; with &quot;feeder.&quot; The service is the conductors and equipment from the serving utility to the service disconnecting means. Everything after the main disconnect is a feeder or branch circuit, governed by different articles. This distinction matters because service conductors have limited overcurrent protection (only at the main disconnect), while feeders have overcurrent protection at their origin.
                </p>
              </div>
            </section>

            <section id="service-drop-lateral" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Service Drop vs Service Lateral</h2>
              <p className="text-white/80 mb-4">
                There are two fundamental ways electricity reaches a building from the utility: overhead via a service drop, or underground via a service lateral. Each has distinct requirements under Article 230.
              </p>

              <div className="grid md:grid-cols-2 gap-6 my-6">
                <div className="bg-cyan-900/30 rounded-xl p-6">
                  <h4 className="font-semibold text-cyan-400 mb-3">Service Drop (Overhead)</h4>
                  <p className="text-white/70 text-sm mb-3">NEC 230 Part II (230.6-230.56)</p>
                  <ul className="text-white/60 text-sm space-y-2">
                    <li>&#8226; Overhead conductors from utility pole to building</li>
                    <li>&#8226; Typically owned and maintained by utility</li>
                    <li>&#8226; Connects at weatherhead/service head</li>
                    <li>&#8226; Subject to overhead clearance requirements</li>
                    <li>&#8226; Common in residential and older commercial areas</li>
                    <li>&#8226; Point of attachment must be adequate to support</li>
                  </ul>
                </div>
                <div className="bg-purple-900/30 rounded-xl p-6">
                  <h4 className="font-semibold text-purple-400 mb-3">Service Lateral (Underground)</h4>
                  <p className="text-white/70 text-sm mb-3">NEC 230 Part III (230.30-230.33)</p>
                  <ul className="text-white/60 text-sm space-y-2">
                    <li>&#8226; Underground conductors from utility to building</li>
                    <li>&#8226; Ownership varies (utility or building owner)</li>
                    <li>&#8226; Enters through foundation or via conduit riser</li>
                    <li>&#8226; Subject to burial depth requirements (NEC Table 300.5)</li>
                    <li>&#8226; Preferred for aesthetics and storm protection</li>
                    <li>&#8226; Requires proper conduit and sealing at entry point</li>
                  </ul>
                </div>
              </div>

              <div className="bg-green-900/30 border border-green-500/30 rounded-xl p-6 my-6">
                <h3 className="font-semibold text-green-400 mb-3">Service Point Definition</h3>
                <p className="text-white/70">
                  The <strong>service point</strong> is the point of connection between the facilities of the serving utility and the premises wiring. This is a critical demarcation - everything on the utility side is their responsibility, and everything on the building side is the owner&apos;s responsibility. The NEC applies to the building side. The utility determines the location of the service point, which is typically at the meter base or the weatherhead.
                </p>
              </div>
            </section>

            <section id="overhead-clearances" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Overhead Service Clearances</h2>
              <p className="text-white/80 mb-4">
                NEC 230.24 specifies minimum clearances for overhead service-drop conductors. These clearances are critical safety requirements designed to prevent accidental contact with energized conductors.
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-3">Clearance Requirements - NEC 230.24</h3>
              <div className="overflow-x-auto my-6">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-white/20">
                      <th className="text-left py-3 px-4 text-white/60">Location</th>
                      <th className="text-left py-3 px-4 text-white/60">Minimum Clearance</th>
                      <th className="text-left py-3 px-4 text-white/60">NEC Reference</th>
                    </tr>
                  </thead>
                  <tbody className="text-white/80">
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">Above finished grade (general)</td>
                      <td className="py-3 px-4 font-semibold text-cyan-400">10 feet</td>
                      <td className="py-3 px-4">230.24(B)(1)</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">Above residential driveways</td>
                      <td className="py-3 px-4 font-semibold text-cyan-400">12 feet</td>
                      <td className="py-3 px-4">230.24(B)(2)</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">Above commercial driveways/parking</td>
                      <td className="py-3 px-4 font-semibold text-amber-400">18 feet</td>
                      <td className="py-3 px-4">230.24(B)(4)</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">Above public streets and roads</td>
                      <td className="py-3 px-4 font-semibold text-amber-400">18 feet</td>
                      <td className="py-3 px-4">230.24(B)(4)</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">Above rooftops (general)</td>
                      <td className="py-3 px-4 font-semibold text-cyan-400">8 feet</td>
                      <td className="py-3 px-4">230.24(A)</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4">Above roof (slope &gt; 4/12, 300V max)</td>
                      <td className="py-3 px-4 font-semibold text-green-400">3 feet</td>
                      <td className="py-3 px-4">230.24(A) Exception</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="bg-purple-900/30 border border-purple-500/30 rounded-xl p-6 my-6">
                <h4 className="font-semibold text-purple-400 mb-2">Rooftop Clearance Exceptions</h4>
                <p className="text-white/70 mb-3">
                  The 8-foot rooftop clearance can be reduced in specific situations:
                </p>
                <ul className="text-white/70 space-y-2">
                  <li><strong>3 feet:</strong> Roof slope of 4 inches per 12 inches (4/12) or greater, voltage not exceeding 300V, and conductors not more than 6 feet of horizontal run over the roof</li>
                  <li><strong>18 inches:</strong> Where the voltage between conductors does not exceed 300V, the roof area is guarded or not readily accessible, and has a slope of at least 4/12</li>
                  <li><strong>Point of attachment only:</strong> The clearance above the point of attachment is permitted to be the minimum clearance at the roof surface</li>
                </ul>
              </div>

              <h3 className="text-xl font-semibold mt-6 mb-3">Point of Attachment - NEC 230.26</h3>
              <p className="text-white/80 mb-4">
                The point of attachment for overhead service-drop conductors must be no less than 10 feet above finished grade. If the building structure is too short to provide adequate clearance, a service mast is used to extend the attachment point to the required height.
              </p>
              <ul className="list-disc list-inside text-white/70 space-y-2 mb-4">
                <li>Service mast must be of adequate strength per NEC 230.28</li>
                <li>Minimum 2-inch rigid metal conduit is typically required for service masts</li>
                <li>Guy wires or braces may be required per utility specifications</li>
                <li>Only power service-drop conductors shall be attached to a service mast per 230.28</li>
              </ul>
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

            <section id="service-entrance-conductors" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Service Entrance Conductors</h2>
              <p className="text-white/80 mb-4">
                Service entrance conductors extend from the service point (typically the weatherhead or meter base) to the service disconnecting means. NEC 230 Part IV covers their requirements.
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-3">Conductor Sizing - NEC 230.42</h3>
              <div className="bg-cyan-900/30 border border-cyan-500/30 rounded-xl p-6 my-6">
                <h4 className="font-semibold text-cyan-400 mb-3">Service Conductor Sizing Requirements</h4>
                <ul className="text-white/80 space-y-2">
                  <li><strong>230.42(A)(1):</strong> Sufficient ampacity to carry the computed load per Article 220</li>
                  <li><strong>230.42(B):</strong> Minimum 100A for single-family dwellings with 6 or more 2-wire branch circuits or an initial net computed load of 10 kVA or more</li>
                  <li><strong>230.79:</strong> Rating of service disconnecting means determines minimum service size</li>
                  <li><strong>Table 310.12:</strong> Use for conductor ampacity based on temperature rating and installation conditions</li>
                </ul>
              </div>

              <h3 className="text-xl font-semibold mt-6 mb-3">Common Service Conductor Sizes</h3>
              <div className="overflow-x-auto my-6">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-white/20">
                      <th className="text-left py-3 px-4 text-white/60">Service Size</th>
                      <th className="text-left py-3 px-4 text-white/60">Copper</th>
                      <th className="text-left py-3 px-4 text-white/60">Aluminum</th>
                      <th className="text-left py-3 px-4 text-white/60">Typical Application</th>
                    </tr>
                  </thead>
                  <tbody className="text-white/80">
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-semibold">100A</td>
                      <td className="py-3 px-4">#4 AWG</td>
                      <td className="py-3 px-4">#2 AWG</td>
                      <td className="py-3 px-4">Small homes, condos</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-semibold">200A</td>
                      <td className="py-3 px-4">2/0 AWG</td>
                      <td className="py-3 px-4">4/0 AWG</td>
                      <td className="py-3 px-4">Standard residential</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-semibold">320A</td>
                      <td className="py-3 px-4">350 kcmil</td>
                      <td className="py-3 px-4">500 kcmil</td>
                      <td className="py-3 px-4">Large homes, small commercial</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-semibold">400A</td>
                      <td className="py-3 px-4">500 kcmil</td>
                      <td className="py-3 px-4">750 kcmil</td>
                      <td className="py-3 px-4">Large residential, commercial</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="bg-orange-900/30 border border-orange-500/30 rounded-xl p-6 my-6">
                <h4 className="font-semibold text-orange-400 mb-2">SE Cable vs Individual Conductors</h4>
                <p className="text-white/70">
                  Service entrance conductors can be installed as SE (Service Entrance) cable or as individual conductors in conduit. SE cable types include USE (underground) and SE type (above ground). Per NEC 230.43, permitted wiring methods include rigid metal conduit, IMC, EMT (with restrictions), PVC conduit, SE cable, MC cable (listed for service entrance), and wireways.
                </p>
              </div>

              <h3 className="text-xl font-semibold mt-6 mb-3">Number of Service Entrance Conductor Sets - NEC 230.40</h3>
              <p className="text-white/80 mb-4">
                Each service drop or lateral shall supply only one set of service-entrance conductors, with exceptions:
              </p>
              <ul className="list-disc list-inside text-white/70 space-y-2 mb-4">
                <li><strong>Exception 1:</strong> Two-to-six disconnects in separate enclosures at single location with plywood backing</li>
                <li><strong>Exception 2:</strong> Where two to six service disconnecting means in separate enclosures are grouped at one location</li>
                <li><strong>Exception 3:</strong> A single-family dwelling and a separate structure with one set of service-entrance conductors run to each</li>
                <li><strong>Exception 5:</strong> Multi-occupancy buildings where each occupant has their own service equipment</li>
              </ul>
            </section>

            <section id="disconnecting-means" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Service Disconnecting Means</h2>
              <p className="text-white/80 mb-4">
                NEC 230 Part VI specifies the requirements for the service disconnecting means - the main disconnect that allows the entire service to be shut off. This is one of the most frequently tested areas in the NEC.
              </p>

              <div className="bg-green-900/30 border border-green-500/30 rounded-xl p-6 my-6">
                <h3 className="font-semibold text-green-400 mb-3">Key Requirements - NEC 230.70-230.82</h3>
                <ul className="text-white/80 space-y-2">
                  <li><strong>230.70(A):</strong> Must be installed at a readily accessible location nearest the point of entrance of the service conductors</li>
                  <li><strong>230.71:</strong> Maximum of six disconnects allowed (the &quot;six-throw rule&quot;) - NOTE: NEC 2020 requires a single main disconnect for dwelling units per 230.71(B)</li>
                  <li><strong>230.72:</strong> When multiple disconnects are used, they must be grouped at one location</li>
                  <li><strong>230.76:</strong> Must simultaneously disconnect all ungrounded conductors</li>
                  <li><strong>230.79:</strong> Minimum rating requirements based on load served</li>
                  <li><strong>230.82:</strong> Equipment permitted on the supply side of the service disconnect</li>
                </ul>
              </div>

              <h3 className="text-xl font-semibold mt-6 mb-3">The Six-Throw Rule and 2020 NEC Change</h3>
              <p className="text-white/80 mb-4">
                Traditionally, NEC 230.71 permitted up to six switches or six circuit breakers as the service disconnect (the &quot;six-throw rule&quot;). This allowed installations without a main breaker, using up to six individual breakers to disconnect the entire service.
              </p>

              <div className="bg-purple-900/30 border border-purple-500/30 rounded-xl p-6 my-6">
                <h4 className="font-semibold text-purple-400 mb-2">NEC 2020 Change: Emergency Disconnect for Dwellings</h4>
                <p className="text-white/70 mb-3">
                  The 2020 NEC added Section 230.85, which requires a readily accessible outdoor emergency disconnect for one- and two-family dwelling units. This is intended for use by first responders (firefighters) to de-energize the building quickly. Key requirements:
                </p>
                <ul className="text-white/70 space-y-2">
                  <li>Must be installed in a readily accessible outdoor location</li>
                  <li>Must be marked as &quot;Emergency Disconnect&quot;</li>
                  <li>Must disconnect all ungrounded conductors of the service</li>
                  <li>Can be the meter main disconnect, a separate disconnect, or listed as an emergency disconnect</li>
                </ul>
              </div>

              <h3 className="text-xl font-semibold mt-6 mb-3">Disconnect Location Requirements</h3>
              <ul className="list-disc list-inside text-white/70 space-y-2 mb-4">
                <li><strong>Readily accessible:</strong> Capable of being reached quickly without climbing over obstacles, using ladders, or removing obstructions</li>
                <li><strong>Nearest point of entrance:</strong> Located as close as practical to where service conductors enter the building</li>
                <li><strong>Inside or outside:</strong> Can be located inside or outside per the NEC, but many jurisdictions require outdoor disconnects</li>
                <li><strong>Not in bathrooms:</strong> Service equipment is not permitted in bathrooms per 230.70(A)(2)</li>
              </ul>
            </section>

            <section id="grounding" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Service Grounding Requirements</h2>
              <p className="text-white/80 mb-4">
                Proper grounding and bonding at the service is covered by both Article 230 and Article 250. The service is the single point where the grounded conductor (neutral) is bonded to the grounding electrode system.
              </p>

              <div className="bg-cyan-900/30 border border-cyan-500/30 rounded-xl p-6 my-6">
                <h3 className="font-semibold text-cyan-400 mb-3">Service Grounding Requirements Summary</h3>
                <ul className="text-white/80 space-y-2">
                  <li><strong>Main bonding jumper:</strong> Required to connect the grounded (neutral) conductor to the equipment grounding conductor and the enclosure at the service (NEC 250.24(B))</li>
                  <li><strong>Grounding electrode conductor (GEC):</strong> Connects the service neutral/ground to the grounding electrode system (NEC 250.24(D))</li>
                  <li><strong>Grounding electrode system:</strong> Per NEC 250.50, must include all available electrodes (water pipe, building steel, ground rods, concrete-encased electrode)</li>
                  <li><strong>Bonding:</strong> All metallic parts of the service (conduit, enclosures, meter base) must be effectively bonded per NEC 250.92</li>
                </ul>
              </div>

              <h3 className="text-xl font-semibold mt-6 mb-3">Grounding Electrode System - NEC 250.50</h3>
              <p className="text-white/80 mb-4">
                All available grounding electrodes at each building or structure must be bonded together to form the grounding electrode system:
              </p>

              <div className="overflow-x-auto my-6">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-white/20">
                      <th className="text-left py-3 px-4 text-white/60">Electrode Type</th>
                      <th className="text-left py-3 px-4 text-white/60">NEC Section</th>
                      <th className="text-left py-3 px-4 text-white/60">Requirements</th>
                    </tr>
                  </thead>
                  <tbody className="text-white/80">
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-semibold text-cyan-400">Metal water pipe</td>
                      <td className="py-3 px-4">250.52(A)(1)</td>
                      <td className="py-3 px-4">10 ft or more in contact with earth, supplemented</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-semibold text-cyan-400">Metal building frame</td>
                      <td className="py-3 px-4">250.52(A)(2)</td>
                      <td className="py-3 px-4">Effectively grounded (10 ft of steel in earth or bonded)</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-semibold text-green-400">Concrete-encased (Ufer)</td>
                      <td className="py-3 px-4">250.52(A)(3)</td>
                      <td className="py-3 px-4">20 ft of rebar or 20 ft of #4 AWG bare copper in foundation</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-semibold text-green-400">Ground ring</td>
                      <td className="py-3 px-4">250.52(A)(4)</td>
                      <td className="py-3 px-4">#2 AWG bare copper encircling building at 2.5 ft depth</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-semibold text-amber-400">Ground rods/pipes</td>
                      <td className="py-3 px-4">250.52(A)(5)</td>
                      <td className="py-3 px-4">8 ft rod, 5/8&quot; dia (copper-clad). Two rods if resistance &gt;25 ohms</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="bg-green-900/30 border border-green-500/30 rounded-xl p-6 my-6">
                <h4 className="font-semibold text-green-400 mb-2">Two Ground Rods Required?</h4>
                <p className="text-white/70">
                  Per NEC 250.53(A)(2), a single ground rod that does not have a resistance of 25 ohms or less must be supplemented by an additional electrode. In practice, most electricians install two ground rods at least 6 feet apart (NEC 250.53(A)(3)) rather than performing the resistance test. This has become standard practice for residential services.
                </p>
              </div>
            </section>

            <section id="common-violations" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Common Article 230 Violations</h2>
              <p className="text-white/80 mb-4">
                Article 230 violations are among the most commonly cited issues during electrical inspections. Being aware of these common problems helps you avoid costly callbacks and failed inspections.
              </p>

              <div className="bg-red-900/20 border border-red-500/30 rounded-xl p-6 my-6">
                <h4 className="font-semibold text-red-400 mb-3">Frequently Cited Violations</h4>
                <ul className="text-white/70 space-y-3">
                  <li>
                    <strong>Inadequate overhead clearances:</strong> Service drop not meeting minimum heights over driveways, sidewalks, or rooftops. The most common issue is 12-foot clearance over residential driveways not met.
                  </li>
                  <li>
                    <strong>Missing main bonding jumper:</strong> The green bonding screw or strap in the main panel not installed, leaving the neutral and ground bus unbonded at the service.
                  </li>
                  <li>
                    <strong>Undersized service conductors:</strong> Service conductors that do not meet the computed load requirements per Article 220. Often occurs during service upgrades when the load has increased.
                  </li>
                  <li>
                    <strong>Disconnect not readily accessible:</strong> Main disconnect blocked by storage, equipment, or installed above 6 feet 7 inches to the handle in the highest position.
                  </li>
                  <li>
                    <strong>Improper grounding electrode system:</strong> Missing supplemental ground rod, improperly bonded water pipe, or missing concrete-encased electrode when available.
                  </li>
                  <li>
                    <strong>More than six disconnects:</strong> Exceeding the six-throw rule or, for 2020 NEC jurisdictions, lacking a single emergency disconnect for dwelling units.
                  </li>
                  <li>
                    <strong>Service mast inadequate:</strong> Service mast not properly sized or supported to handle the weight and wind loading of the service-drop conductors.
                  </li>
                </ul>
              </div>

              <h3 className="text-xl font-semibold mt-6 mb-3">Pre-Inspection Checklist</h3>
              <div className="bg-white/5 rounded-xl p-6 my-6">
                <ul className="text-white/80 space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-green-400">&#10003;</span>
                    Overhead clearances meet NEC 230.24 minimums
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400">&#10003;</span>
                    Weatherhead/service head properly installed above point of attachment
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400">&#10003;</span>
                    Service entrance conductors properly sized per load calculation
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400">&#10003;</span>
                    Service mast adequately supported and sized
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400">&#10003;</span>
                    Main disconnect readily accessible and properly rated
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400">&#10003;</span>
                    Main bonding jumper installed
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400">&#10003;</span>
                    Grounding electrode system complete and properly bonded
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400">&#10003;</span>
                    Two ground rods installed (or 25-ohm test documented)
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400">&#10003;</span>
                    Water pipe bond installed (if metallic water piping present)
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400">&#10003;</span>
                    Surge protective device installed (NEC 2020 dwelling units)
                  </li>
                </ul>
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
                <Link href="/blog/nec-service-entrance-requirements" className="bg-white/5 hover:bg-white/10 rounded-xl p-6 transition-colors">
                  <span className="text-purple-400 text-sm">NEC Code</span>
                  <h3 className="font-semibold mt-2">NEC Service Entrance Requirements</h3>
                </Link>
                <Link href="/blog/electrical-service-upgrade-200-amp" className="bg-white/5 hover:bg-white/10 rounded-xl p-6 transition-colors">
                  <span className="text-emerald-400 text-sm">Installation</span>
                  <h3 className="font-semibold mt-2">Electrical Service Upgrade to 200 Amp</h3>
                </Link>
                <Link href="/blog/nec-article-250-grounding-guide" className="bg-white/5 hover:bg-white/10 rounded-xl p-6 transition-colors">
                  <span className="text-purple-400 text-sm">NEC Code</span>
                  <h3 className="font-semibold mt-2">NEC Article 250: Grounding Guide</h3>
                </Link>
                <Link href="/blog/electrical-grounding-vs-bonding" className="bg-white/5 hover:bg-white/10 rounded-xl p-6 transition-colors">
                  <span className="text-emerald-400 text-sm">Installation</span>
                  <h3 className="font-semibold mt-2">Electrical Grounding vs Bonding</h3>
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
