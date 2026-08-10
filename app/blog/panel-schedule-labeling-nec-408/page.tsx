import { Metadata } from "next";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import { BreadcrumbJsonLd, BlogPostingJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Panel Schedule & Labeling Requirements: NEC 408.4 Directory Guide",
  description: "Complete guide to NEC 408.4 panel schedule and labeling requirements. Learn about circuit directory rules, fault current marking, field vs factory markings, and panel labeling best practices.",
  keywords: [
    "panel schedule requirements",
    "NEC 408.4",
    "circuit directory",
    "panel labeling",
    "electrical panel markings",
    "fault current marking",
    "panel schedule template",
    "circuit identification",
    "NEC panel requirements",
    "electrical panel directory",
    "breaker labeling",
    "panel board schedule",
    "available fault current",
    "field marking electrical",
    "panel schedule best practices",
    "circuit breaker identification"
  ],
  alternates: {
    canonical: "https://amporalabs.com/blog/panel-schedule-labeling-nec-408",
  },
  openGraph: {
    title: "Panel Schedule & Labeling Requirements: NEC 408.4 Directory Guide - Ampora",
    description: "Complete guide to NEC 408.4 panel directory, fault current marking, and labeling best practices.",
    url: "https://amporalabs.com/blog/panel-schedule-labeling-nec-408",
    type: "article",
  },
};

function HeroIllustration() {
  return (
    <svg viewBox="0 0 400 160" className="w-full h-40 md:h-48" aria-label="Panel schedule and labeling illustration">
      {/* Panel with schedule */}
      <g transform="translate(100, 5)">
        <rect x="0" y="0" width="200" height="150" rx="6" fill="#1f2937" stroke="#a855f7" strokeWidth="2"/>
        <rect x="10" y="10" width="180" height="130" fill="#111827"/>

        {/* Schedule header */}
        <rect x="15" y="15" width="170" height="18" fill="#a855f7" fillOpacity="0.2"/>
        <text x="100" y="28" textAnchor="middle" fill="#a855f7" fontSize="7" fontWeight="bold">PANEL SCHEDULE - LP-1</text>

        {/* Column headers */}
        <text x="25" y="45" fill="#9ca3af" fontSize="5">CKT</text>
        <text x="55" y="45" fill="#9ca3af" fontSize="5">DESCRIPTION</text>
        <text x="125" y="45" fill="#9ca3af" fontSize="5">AMP</text>
        <text x="155" y="45" fill="#9ca3af" fontSize="5">CKT</text>

        {/* Circuit rows */}
        {[
          { l: "1", ld: "Kitchen Recep", a: "20", r: "2", rd: "Dining Lights" },
          { l: "3", ld: "Bath GFCI", a: "20", r: "4", rd: "Bedroom Recep" },
          { l: "5", ld: "Garage Recep", a: "20", r: "6", rd: "Washer" },
          { l: "7", ld: "Dishwasher", a: "20", r: "8", rd: "Disposal" },
          { l: "9", ld: "HVAC", a: "30", r: "10", rd: "Dryer" },
        ].map((row, i) => (
          <g key={i}>
            <text x="25" y={58 + i * 14} fill="#06b6d4" fontSize="5">{row.l}</text>
            <text x="38" y={58 + i * 14} fill="#d1d5db" fontSize="5">{row.ld}</text>
            <text x="125" y={58 + i * 14} fill="#f59e0b" fontSize="5">{row.a}A</text>
            <text x="155" y={58 + i * 14} fill="#06b6d4" fontSize="5">{row.r}</text>
            <text x="168" y={58 + i * 14} fill="#d1d5db" fontSize="5">{row.rd}</text>
            <line x1="15" y1={61 + i * 14} x2="185" y2={61 + i * 14} stroke="#374151" strokeWidth="0.5"/>
          </g>
        ))}
      </g>

      {/* Checkmark labels */}
      <g transform="translate(20, 20)">
        <rect x="0" y="0" width="65" height="100" rx="4" fill="#22c55e" fillOpacity="0.1" stroke="#22c55e" strokeDasharray="4"/>
        <text x="32" y="15" textAnchor="middle" fill="#22c55e" fontSize="6" fontWeight="bold">Required</text>
        <text x="8" y="32" fill="#9ca3af" fontSize="5.5">&#x2713; Circuit ID</text>
        <text x="8" y="46" fill="#9ca3af" fontSize="5.5">&#x2713; Area served</text>
        <text x="8" y="60" fill="#9ca3af" fontSize="5.5">&#x2713; Amp rating</text>
        <text x="8" y="74" fill="#9ca3af" fontSize="5.5">&#x2713; AFC marking</text>
        <text x="8" y="88" fill="#9ca3af" fontSize="5.5">&#x2713; Date of calc</text>
      </g>

      {/* Fault current label */}
      <g transform="translate(315, 30)">
        <rect x="0" y="0" width="75" height="55" rx="4" fill="#f59e0b" fillOpacity="0.15" stroke="#f59e0b" strokeWidth="1.5"/>
        <text x="37" y="15" textAnchor="middle" fill="#f59e0b" fontSize="6" fontWeight="bold">AFC Label</text>
        <text x="37" y="30" textAnchor="middle" fill="#d1d5db" fontSize="5.5">22,000 AIC</text>
        <text x="37" y="42" textAnchor="middle" fill="#9ca3af" fontSize="5">Date: 01/2025</text>
      </g>
    </svg>
  );
}

export default function PanelScheduleLabelingNec408Page() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navigation />
      <div className="pt-20">
        <BreadcrumbJsonLd
          items={[
            { name: "Home", url: "https://amporalabs.com" },
            { name: "Blog", url: "https://amporalabs.com/blog" },
            { name: "Panel Schedule Labeling NEC 408", url: "https://amporalabs.com/blog/panel-schedule-labeling-nec-408" },
          ]}
        />
        <BlogPostingJsonLd
          headline="Panel Schedule & Labeling Requirements: NEC 408.4 Directory Guide"
          description="Complete guide to NEC 408.4 panel schedule and labeling requirements including circuit directories, fault current markings, and best practices."
          datePublished="2025-02-08"
          dateModified="2025-02-08"
          url="https://amporalabs.com/blog/panel-schedule-labeling-nec-408"
          wordCount={2500}
          keywords={["panel schedule", "NEC 408.4", "circuit directory", "panel labeling", "fault current marking"]}
        />

        <article className="max-w-4xl mx-auto px-6 py-12">
          {/* Breadcrumb */}
          <nav className="text-sm text-white/60 mb-8">
            <Link href="/" className="hover:text-white">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/blog" className="hover:text-white">Blog</Link>
            <span className="mx-2">/</span>
            <span className="text-white">Panel Schedule &amp; Labeling NEC 408</span>
          </nav>

          {/* Article Header */}
          <header className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <span className="px-3 py-1 bg-purple-600/30 text-purple-300 text-sm font-medium rounded-full">
                NEC Code
              </span>
              <span className="text-white/40 text-sm">10 min read</span>
              <span className="text-white/40 text-sm">February 8, 2025</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6 leading-tight">
              Panel Schedule &amp; Labeling Requirements: NEC 408.4 Directory Guide
            </h1>
            <p className="text-xl text-white/70">
              Everything you need to know about NEC panelboard directory and labeling requirements, including the 2023 NEC changes to fault current marking, proper circuit identification, and field marking best practices.
            </p>
          </header>

          <div className="mb-12 bg-gradient-to-br from-purple-900/20 to-amber-900/20 rounded-2xl p-6 border border-white/10">
            <HeroIllustration />
          </div>

          {/* Table of Contents */}
          <div className="bg-white/5 rounded-2xl p-6 mb-12">
            <h2 className="font-display font-bold mb-4">In This Guide</h2>
            <ul className="space-y-2 text-white/70">
              <li><a href="#nec-408-overview" className="hover:text-purple-400">&#8594; NEC 408.4 Overview</a></li>
              <li><a href="#circuit-directory" className="hover:text-purple-400">&#8594; Circuit Directory Requirements</a></li>
              <li><a href="#fault-current-marking" className="hover:text-purple-400">&#8594; Available Fault Current Marking</a></li>
              <li><a href="#field-vs-factory" className="hover:text-purple-400">&#8594; Field vs Factory Markings</a></li>
              <li><a href="#labeling-best-practices" className="hover:text-purple-400">&#8594; Labeling Best Practices</a></li>
              <li><a href="#common-mistakes" className="hover:text-purple-400">&#8594; Common Labeling Mistakes</a></li>
              <li><a href="#inspection-tips" className="hover:text-purple-400">&#8594; Passing Inspection</a></li>
            </ul>
          </div>

          {/* Article Content */}
          <div className="prose prose-invert prose-lg max-w-none">

            <section id="nec-408-overview" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">NEC 408.4 Overview</h2>
              <p className="text-white/80 mb-4">
                NEC Article 408 covers switchboards, switchgear, and panelboards. Section 408.4 specifically addresses circuit directory and identification requirements. This section has been progressively strengthened in recent NEC editions to improve electrical safety and system documentation.
              </p>
              <p className="text-white/80 mb-4">
                The fundamental requirement is simple: <strong>every circuit breaker or fuse in a panelboard must be legibly identified as to its clear, evident, and specific purpose or use.</strong> However, the details of what constitutes adequate identification and the additional marking requirements have evolved significantly.
              </p>

              <div className="bg-purple-900/30 rounded-xl p-6 my-6">
                <h3 className="font-semibold text-purple-400 mb-3">Key NEC 408 Sections for Panel Labeling</h3>
                <ul className="space-y-2 text-white/70 text-sm">
                  <li>&#x2022; <strong>408.4(A)</strong> &mdash; Circuit directory or circuit identification</li>
                  <li>&#x2022; <strong>408.4(B)</strong> &mdash; Available fault current marking (added 2017 NEC, expanded 2020/2023)</li>
                  <li>&#x2022; <strong>408.4(C)</strong> &mdash; Ungrounded conductor identification (2023 NEC)</li>
                  <li>&#x2022; <strong>408.6</strong> &mdash; Legibility of markings (must be durable and not handwritten on the panel)</li>
                  <li>&#x2022; <strong>110.22</strong> &mdash; Identification of disconnecting means (related requirement)</li>
                  <li>&#x2022; <strong>110.24</strong> &mdash; Available fault current documentation (for service equipment)</li>
                </ul>
              </div>
            </section>

            <section id="circuit-directory" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Circuit Directory Requirements</h2>
              <p className="text-white/80 mb-4">
                NEC 408.4(A) requires every circuit and circuit modification to be legibly identified as to its clear, evident, and specific purpose or use. The identification must be included in a circuit directory located on the face or inside of the panel door.
              </p>

              <div className="bg-cyan-900/30 rounded-xl p-6 my-6">
                <h3 className="font-semibold text-cyan-400 mb-3">What &quot;Clear, Evident, and Specific&quot; Means</h3>
                <p className="text-white/70 text-sm mb-3">
                  The NEC requires circuit descriptions that unambiguously identify what each breaker serves. The days of vague labels are over:
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="text-red-400 text-sm font-semibold mb-2">Unacceptable Labels</h4>
                    <ul className="space-y-1 text-white/70 text-sm">
                      <li>&#x2022; &quot;Misc&quot; or &quot;Miscellaneous&quot;</li>
                      <li>&#x2022; &quot;Spare&quot; (if the breaker has a load)</li>
                      <li>&#x2022; &quot;Lights&quot; (which lights?)</li>
                      <li>&#x2022; &quot;Outlets&quot; (which outlets?)</li>
                      <li>&#x2022; &quot;John&apos;s stuff&quot;</li>
                      <li>&#x2022; Blank entries for active circuits</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-green-400 text-sm font-semibold mb-2">Acceptable Labels</h4>
                    <ul className="space-y-1 text-white/70 text-sm">
                      <li>&#x2022; &quot;Kitchen Countertop Recep (GFCI)&quot;</li>
                      <li>&#x2022; &quot;Master Bedroom Lights &amp; Recep&quot;</li>
                      <li>&#x2022; &quot;Garage Door Opener&quot;</li>
                      <li>&#x2022; &quot;HVAC Condenser Unit&quot;</li>
                      <li>&#x2022; &quot;2nd Floor Bath GFCI Recep&quot;</li>
                      <li>&#x2022; &quot;Dishwasher&quot;</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-green-900/30 rounded-xl p-6 my-6">
                <h3 className="font-semibold text-green-400 mb-3">Directory Format Requirements</h3>
                <ul className="space-y-2 text-white/70 text-sm">
                  <li>&#x2022; <strong>Location</strong> &mdash; Must be on the face or inside of the panel door</li>
                  <li>&#x2022; <strong>Legibility</strong> &mdash; Must be legible and durable (NEC 408.4(A))</li>
                  <li>&#x2022; <strong>Format</strong> &mdash; Typed or machine-printed directories are best practice (and required by some AHJs)</li>
                  <li>&#x2022; <strong>Accuracy</strong> &mdash; Must be updated whenever circuits are added or modified</li>
                  <li>&#x2022; <strong>Spare/Space</strong> &mdash; Blank breaker positions should be labeled &quot;Spare&quot; (breaker installed, no load) or &quot;Space&quot; (no breaker installed)</li>
                </ul>
              </div>
            </section>

            <section id="fault-current-marking" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Available Fault Current Marking</h2>
              <p className="text-white/80 mb-4">
                One of the most significant additions to panel marking requirements in recent NEC editions is the requirement to label equipment with the available fault current (AFC). This helps ensure that overcurrent protective devices are rated to safely interrupt the maximum fault current available at their location.
              </p>

              <div className="overflow-x-auto my-6">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-white/20">
                      <th className="text-left py-3 px-4 text-white/60">NEC Section</th>
                      <th className="text-left py-3 px-4 text-white/60">Equipment</th>
                      <th className="text-left py-3 px-4 text-white/60">Required Marking</th>
                      <th className="text-left py-3 px-4 text-white/60">Date Required?</th>
                    </tr>
                  </thead>
                  <tbody className="text-white/70">
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-semibold">110.24(A)</td>
                      <td className="py-3 px-4">Service equipment</td>
                      <td className="py-3 px-4">Available fault current + date of calculation</td>
                      <td className="py-3 px-4">Yes</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-semibold">408.4(B)</td>
                      <td className="py-3 px-4">Panelboards (other than dwelling)</td>
                      <td className="py-3 px-4">Available fault current + date of calculation</td>
                      <td className="py-3 px-4">Yes</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-semibold">409.110(4)</td>
                      <td className="py-3 px-4">Industrial control panels</td>
                      <td className="py-3 px-4">Short-circuit current rating</td>
                      <td className="py-3 px-4">No</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-semibold">440.4(B)</td>
                      <td className="py-3 px-4">HVAC equipment disconnects</td>
                      <td className="py-3 px-4">Available fault current (2023 NEC)</td>
                      <td className="py-3 px-4">Yes</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="bg-orange-900/30 rounded-xl p-6 my-6">
                <h3 className="font-semibold text-orange-400 mb-3">How to Determine Available Fault Current</h3>
                <p className="text-white/70 text-sm mb-3">
                  Available fault current (AFC) is calculated based on the utility transformer size, impedance, and the distance/size of conductors to the equipment. Methods include:
                </p>
                <ul className="space-y-2 text-white/70 text-sm">
                  <li>&#x2022; <strong>Utility company data</strong> &mdash; Request the available fault current at the service point from the utility</li>
                  <li>&#x2022; <strong>Point-to-point calculation</strong> &mdash; Calculate fault current reduction through conductors using impedance data</li>
                  <li>&#x2022; <strong>Software tools</strong> &mdash; Eaton, Square D, and others offer free fault current calculators</li>
                  <li>&#x2022; <strong>Infinite bus method</strong> &mdash; Conservative calculation assuming unlimited utility fault current</li>
                </ul>
                <p className="text-white/70 text-sm mt-3">
                  The calculated AFC must not exceed the interrupting rating (AIC) of the overcurrent protective devices installed in the equipment. If it does, upgrades or current-limiting devices are required.
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

            <section id="field-vs-factory" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Field vs Factory Markings</h2>
              <p className="text-white/80 mb-4">
                Panelboards come from the manufacturer with certain factory markings that must not be obscured or altered. Field markings are additional labels applied during or after installation by the electrician.
              </p>

              <div className="grid md:grid-cols-2 gap-6 my-6">
                <div className="bg-white/5 rounded-xl p-6">
                  <h3 className="font-semibold text-purple-400 mb-3">Factory Markings (Do Not Remove)</h3>
                  <ul className="space-y-2 text-white/70 text-sm">
                    <li>&#x2022; Manufacturer name and brand</li>
                    <li>&#x2022; Voltage and ampere rating</li>
                    <li>&#x2022; Number of phases</li>
                    <li>&#x2022; Short-circuit current rating (SCCR)</li>
                    <li>&#x2022; UL listing mark and file number</li>
                    <li>&#x2022; Wiring diagram (inside panel)</li>
                    <li>&#x2022; Bus bar rating</li>
                    <li>&#x2022; Enclosure type rating</li>
                  </ul>
                </div>
                <div className="bg-white/5 rounded-xl p-6">
                  <h3 className="font-semibold text-cyan-400 mb-3">Required Field Markings</h3>
                  <ul className="space-y-2 text-white/70 text-sm">
                    <li>&#x2022; Circuit directory (408.4(A))</li>
                    <li>&#x2022; Available fault current + date (408.4(B))</li>
                    <li>&#x2022; Panel designation (e.g., &quot;LP-1&quot;, &quot;Panel A&quot;)</li>
                    <li>&#x2022; Voltage and source identification</li>
                    <li>&#x2022; Disconnecting means identification (110.22)</li>
                    <li>&#x2022; Arc flash warning label (NFPA 70E)</li>
                    <li>&#x2022; Conductor identification where required</li>
                    <li>&#x2022; Series-rated combination marking (if applicable)</li>
                  </ul>
                </div>
              </div>
            </section>

            <section id="labeling-best-practices" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Labeling Best Practices</h2>
              <p className="text-white/80 mb-4">
                Going beyond minimum code requirements produces better documentation, fewer inspection issues, and easier long-term maintenance. These best practices are worth adopting on every project.
              </p>

              <div className="space-y-4 my-6">
                <div className="bg-white/5 rounded-xl p-4 flex items-start gap-4">
                  <span className="text-purple-400 font-bold text-lg">1.</span>
                  <div>
                    <h3 className="font-semibold">Use machine-printed labels</h3>
                    <p className="text-white/60 text-sm mt-1">Invest in a label maker or print directories on a computer. Handwritten labels are technically allowed by the NEC but many inspectors reject them, and they fade or become illegible over time.</p>
                  </div>
                </div>
                <div className="bg-white/5 rounded-xl p-4 flex items-start gap-4">
                  <span className="text-purple-400 font-bold text-lg">2.</span>
                  <div>
                    <h3 className="font-semibold">Include room names or numbers</h3>
                    <p className="text-white/60 text-sm mt-1">In commercial buildings, reference room numbers from the architectural drawings. In residential, use specific room names: &quot;Master BR South Wall Recep&quot; is better than &quot;Bedroom Outlets.&quot;</p>
                  </div>
                </div>
                <div className="bg-white/5 rounded-xl p-4 flex items-start gap-4">
                  <span className="text-purple-400 font-bold text-lg">3.</span>
                  <div>
                    <h3 className="font-semibold">Document multi-wire branch circuits</h3>
                    <p className="text-white/60 text-sm mt-1">Clearly indicate which breakers share a neutral (MWBC). Use handle ties or common-trip breakers and note the relationship in the directory.</p>
                  </div>
                </div>
                <div className="bg-white/5 rounded-xl p-4 flex items-start gap-4">
                  <span className="text-purple-400 font-bold text-lg">4.</span>
                  <div>
                    <h3 className="font-semibold">Note special protection types</h3>
                    <p className="text-white/60 text-sm mt-1">Indicate GFCI, AFCI, or dual-function breakers in the directory. This helps future electricians understand the protection already in place.</p>
                  </div>
                </div>
                <div className="bg-white/5 rounded-xl p-4 flex items-start gap-4">
                  <span className="text-purple-400 font-bold text-lg">5.</span>
                  <div>
                    <h3 className="font-semibold">Keep a spare blank schedule</h3>
                    <p className="text-white/60 text-sm mt-1">Tape a blank schedule template inside the panel cover. When circuits are added or changed, the next electrician has a clean form ready.</p>
                  </div>
                </div>
              </div>
            </section>

            <section id="common-mistakes" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Common Labeling Mistakes</h2>
              <p className="text-white/80 mb-4">
                These mistakes frequently cause inspection failures or create safety issues for future maintenance:
              </p>

              <div className="space-y-3 my-6">
                <div className="bg-white/5 rounded-xl p-4 flex items-start gap-4">
                  <span className="text-red-400 font-bold text-lg">&#x2717;</span>
                  <div>
                    <h3 className="font-semibold">Vague circuit descriptions</h3>
                    <p className="text-white/60 text-sm mt-1">Labels like &quot;Outlets,&quot; &quot;Lights,&quot; or &quot;Misc&quot; don&apos;t meet the NEC&apos;s &quot;clear, evident, and specific&quot; standard. Every entry must identify the specific area or equipment served.</p>
                  </div>
                </div>
                <div className="bg-white/5 rounded-xl p-4 flex items-start gap-4">
                  <span className="text-red-400 font-bold text-lg">&#x2717;</span>
                  <div>
                    <h3 className="font-semibold">Missing fault current marking</h3>
                    <p className="text-white/60 text-sm mt-1">Since the 2017 NEC, service equipment must be marked with available fault current. The 2020 and 2023 editions extended this to panelboards in non-dwelling occupancies.</p>
                  </div>
                </div>
                <div className="bg-white/5 rounded-xl p-4 flex items-start gap-4">
                  <span className="text-red-400 font-bold text-lg">&#x2717;</span>
                  <div>
                    <h3 className="font-semibold">Outdated or inaccurate directory</h3>
                    <p className="text-white/60 text-sm mt-1">Circuit directories must reflect the current state of the panel. When circuits are added or repurposed, the directory must be updated to match.</p>
                  </div>
                </div>
                <div className="bg-white/5 rounded-xl p-4 flex items-start gap-4">
                  <span className="text-red-400 font-bold text-lg">&#x2717;</span>
                  <div>
                    <h3 className="font-semibold">Covering factory labels</h3>
                    <p className="text-white/60 text-sm mt-1">Field-applied labels and directories must not cover or obscure the manufacturer&apos;s nameplate, rating labels, or UL listing mark.</p>
                  </div>
                </div>
              </div>
            </section>

            <section id="inspection-tips" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Passing Inspection</h2>
              <p className="text-white/80 mb-4">
                Panel labeling is one of the easiest items to get right &mdash; and one of the most common reasons for inspection corrections. Follow this checklist to ensure your panel labeling passes:
              </p>

              <div className="bg-green-900/30 rounded-xl p-6 my-6">
                <h3 className="font-semibold text-green-400 mb-3">Panel Labeling Inspection Checklist</h3>
                <ul className="space-y-2 text-white/70 text-sm">
                  <li className="flex items-start gap-2"><span className="text-green-400">&#x25A1;</span><span>Every active circuit has a clear, specific description</span></li>
                  <li className="flex items-start gap-2"><span className="text-green-400">&#x25A1;</span><span>Spare positions labeled &quot;Spare&quot; and empty positions labeled &quot;Space&quot;</span></li>
                  <li className="flex items-start gap-2"><span className="text-green-400">&#x25A1;</span><span>Directory is legible and durable (preferably machine-printed)</span></li>
                  <li className="flex items-start gap-2"><span className="text-green-400">&#x25A1;</span><span>Available fault current labeled with date (service equipment &amp; non-dwelling panels)</span></li>
                  <li className="flex items-start gap-2"><span className="text-green-400">&#x25A1;</span><span>Panel designation label visible on exterior</span></li>
                  <li className="flex items-start gap-2"><span className="text-green-400">&#x25A1;</span><span>Voltage source identification present</span></li>
                  <li className="flex items-start gap-2"><span className="text-green-400">&#x25A1;</span><span>Factory markings visible and not obscured</span></li>
                  <li className="flex items-start gap-2"><span className="text-green-400">&#x25A1;</span><span>MWBC breakers have handle ties and are identified</span></li>
                  <li className="flex items-start gap-2"><span className="text-green-400">&#x25A1;</span><span>Arc flash labels installed (NFPA 70E requirement for commercial)</span></li>
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
                <Link href="/blog/electrical-inspection-checklist" className="bg-white/5 hover:bg-white/10 rounded-xl p-6 transition-colors">
                  <span className="text-green-400 text-sm">Inspections</span>
                  <h3 className="font-semibold mt-2">Electrical Inspection Checklist</h3>
                </Link>
                <Link href="/blog/electrical-panel-troubleshooting" className="bg-white/5 hover:bg-white/10 rounded-xl p-6 transition-colors">
                  <span className="text-red-400 text-sm">Troubleshooting</span>
                  <h3 className="font-semibold mt-2">Electrical Panel Troubleshooting Guide</h3>
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
