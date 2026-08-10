import { Metadata } from "next";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import { BreadcrumbJsonLd, BlogPostingJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Electrical Permit Process Guide: From Application to Final Inspection",
  description: "Complete guide to the electrical permit process for residential and commercial projects. Learn when permits are required, application steps, required documentation, inspection scheduling, common failure points, and how to work effectively with inspectors.",
  keywords: [
    "electrical permit",
    "electrical permit process",
    "electrical permit application",
    "when is electrical permit required",
    "electrical inspection process",
    "electrical permit fees",
    "residential electrical permit",
    "commercial electrical permit",
    "electrical permit documentation",
    "rough-in inspection",
    "final electrical inspection",
    "permit closeout",
    "unpermitted electrical work",
    "electrical inspector",
    "building permit electrical",
    "electrical permit timeline"
  ],
  alternates: {
    canonical: "https://amporalabs.com/blog/electrical-permit-process-guide",
  },
  openGraph: {
    title: "Electrical Permit Process Guide: Application to Final Inspection - Ampora",
    description: "Complete guide to electrical permits including application steps, required documentation, inspection scheduling, and how to work with inspectors.",
    url: "https://amporalabs.com/blog/electrical-permit-process-guide",
    type: "article",
  },
};

function HeroIllustration() {
  return (
    <svg viewBox="0 0 400 180" className="w-full h-44 md:h-52" aria-label="Electrical permit process illustration showing document, stamp, and inspection steps">
      {/* Background grid */}
      <defs>
        <pattern id="permitGrid" width="20" height="20" patternUnits="userSpaceOnUse">
          <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#374151" strokeWidth="0.5" strokeOpacity="0.3"/>
        </pattern>
      </defs>
      <rect x="0" y="0" width="400" height="180" fill="url(#permitGrid)"/>

      {/* Permit Document */}
      <g transform="translate(30, 15)">
        <rect x="0" y="0" width="100" height="130" rx="4" fill="#1f2937" stroke="#f43f5e" strokeWidth="2"/>
        <rect x="10" y="10" width="80" height="12" rx="2" fill="#f43f5e" fillOpacity="0.3"/>
        <text x="50" y="19" textAnchor="middle" fill="#fb7185" fontSize="7" fontWeight="bold">ELECTRICAL PERMIT</text>
        <rect x="10" y="30" width="60" height="4" rx="1" fill="#374151"/>
        <rect x="10" y="40" width="50" height="4" rx="1" fill="#374151"/>
        <rect x="10" y="50" width="65" height="4" rx="1" fill="#374151"/>
        <rect x="10" y="60" width="45" height="4" rx="1" fill="#374151"/>
        <rect x="10" y="70" width="55" height="4" rx="1" fill="#374151"/>
        {/* Signature line */}
        <line x1="10" y1="95" x2="70" y2="95" stroke="#6b7280" strokeWidth="1"/>
        <text x="10" y="105" fill="#6b7280" fontSize="6">Signature</text>
        {/* Stamp */}
        <circle cx="75" cy="105" r="18" fill="none" stroke="#22c55e" strokeWidth="2" strokeDasharray="3,2"/>
        <text x="75" y="103" textAnchor="middle" fill="#22c55e" fontSize="6" fontWeight="bold">APPROVED</text>
        <text x="75" y="112" textAnchor="middle" fill="#22c55e" fontSize="5">AHJ</text>
      </g>

      {/* Process Arrow Steps */}
      <g transform="translate(155, 25)">
        {/* Step 1 - Apply */}
        <rect x="0" y="0" width="60" height="40" rx="6" fill="#f43f5e" fillOpacity="0.2" stroke="#f43f5e" strokeWidth="1.5"/>
        <text x="30" y="18" textAnchor="middle" fill="#fb7185" fontSize="8" fontWeight="bold">1. APPLY</text>
        <text x="30" y="30" textAnchor="middle" fill="#9ca3af" fontSize="6">Submit docs</text>
        {/* Arrow */}
        <path d="M 65 20 L 80 20" stroke="#f43f5e" strokeWidth="1.5" markerEnd="url(#arrowHead)"/>

        {/* Step 2 - Review */}
        <rect x="85" y="0" width="60" height="40" rx="6" fill="#f59e0b" fillOpacity="0.2" stroke="#f59e0b" strokeWidth="1.5"/>
        <text x="115" y="18" textAnchor="middle" fill="#fbbf24" fontSize="8" fontWeight="bold">2. REVIEW</text>
        <text x="115" y="30" textAnchor="middle" fill="#9ca3af" fontSize="6">Plan check</text>
        {/* Arrow */}
        <path d="M 150 20 L 165 20" stroke="#f59e0b" strokeWidth="1.5"/>

        {/* Step 3 - Issue */}
        <rect x="170" y="0" width="60" height="40" rx="6" fill="#22c55e" fillOpacity="0.2" stroke="#22c55e" strokeWidth="1.5"/>
        <text x="200" y="18" textAnchor="middle" fill="#4ade80" fontSize="8" fontWeight="bold">3. ISSUE</text>
        <text x="200" y="30" textAnchor="middle" fill="#9ca3af" fontSize="6">Permit card</text>
      </g>

      {/* Lower steps */}
      <g transform="translate(155, 85)">
        {/* Step 4 - Work */}
        <rect x="0" y="0" width="60" height="40" rx="6" fill="#3b82f6" fillOpacity="0.2" stroke="#3b82f6" strokeWidth="1.5"/>
        <text x="30" y="18" textAnchor="middle" fill="#60a5fa" fontSize="8" fontWeight="bold">4. WORK</text>
        <text x="30" y="30" textAnchor="middle" fill="#9ca3af" fontSize="6">Install</text>
        {/* Arrow */}
        <path d="M 65 20 L 80 20" stroke="#3b82f6" strokeWidth="1.5"/>

        {/* Step 5 - Inspect */}
        <rect x="85" y="0" width="60" height="40" rx="6" fill="#a855f7" fillOpacity="0.2" stroke="#a855f7" strokeWidth="1.5"/>
        <text x="115" y="18" textAnchor="middle" fill="#c084fc" fontSize="8" fontWeight="bold">5. INSPECT</text>
        <text x="115" y="30" textAnchor="middle" fill="#9ca3af" fontSize="6">Rough + Final</text>
        {/* Arrow */}
        <path d="M 150 20 L 165 20" stroke="#a855f7" strokeWidth="1.5"/>

        {/* Step 6 - Close */}
        <rect x="170" y="0" width="60" height="40" rx="6" fill="#22c55e" fillOpacity="0.2" stroke="#22c55e" strokeWidth="1.5"/>
        <text x="200" y="18" textAnchor="middle" fill="#4ade80" fontSize="8" fontWeight="bold">6. CLOSE</text>
        <text x="200" y="30" textAnchor="middle" fill="#9ca3af" fontSize="6">Finalize</text>
      </g>

      {/* Connecting vertical arrow between rows */}
      <path d="M 380 68 L 380 82" stroke="#6b7280" strokeWidth="1.5" strokeDasharray="3,2"/>

      {/* Arrow marker definition */}
      <defs>
        <marker id="arrowHead" markerWidth="6" markerHeight="4" refX="5" refY="2" orient="auto">
          <path d="M 0 0 L 6 2 L 0 4" fill="#f43f5e"/>
        </marker>
      </defs>
    </svg>
  );
}

export default function BlogPost() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navigation />
      <div className="pt-20">
        <BreadcrumbJsonLd
          items={[
            { name: "Home", url: "https://amporalabs.com" },
            { name: "Blog", url: "https://amporalabs.com/blog" },
            { name: "Electrical Permit Process Guide", url: "https://amporalabs.com/blog/electrical-permit-process-guide" },
          ]}
        />
        <BlogPostingJsonLd
          headline="Electrical Permit Process Guide: From Application to Final Inspection"
          description="Complete guide to the electrical permit process covering application steps, documentation requirements, inspections, and permit closeout."
          datePublished="2026-03-02"
          dateModified="2026-03-02"
          url="https://amporalabs.com/blog/electrical-permit-process-guide"
          wordCount={4500}
          keywords={["electrical permit", "permit process", "electrical inspection", "permit application", "rough-in inspection", "final inspection"]}
        />

        <article className="max-w-4xl mx-auto px-6 py-12">
          {/* Breadcrumb */}
          <nav className="text-sm text-white/60 mb-8">
            <Link href="/" className="hover:text-white">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/blog" className="hover:text-white">Blog</Link>
            <span className="mx-2">/</span>
            <span className="text-white">Electrical Permit Process Guide</span>
          </nav>

          {/* Article Header */}
          <header className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <span className="px-3 py-1 bg-rose-600/30 text-rose-300 text-sm font-medium rounded-full">
                Inspections
              </span>
              <span className="text-white/40 text-sm">22 min read</span>
              <span className="text-white/40 text-sm">March 2, 2026</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6 leading-tight">
              Electrical Permit Process Guide: From Application to Final Inspection
            </h1>
            <p className="text-xl text-white/70">
              Navigating the electrical permit process can be confusing for homeowners and even seasoned contractors. This comprehensive guide walks you through every step -- from determining when a permit is required, to submitting your application, scheduling inspections, and closing out the permit.
            </p>
          </header>

          <div className="mb-12 bg-gradient-to-br from-rose-900/20 to-amber-900/20 rounded-2xl p-6 border border-white/10">
            <HeroIllustration />
          </div>

          {/* Table of Contents */}
          <div className="bg-white/5 rounded-2xl p-6 mb-12">
            <h2 className="font-display font-bold mb-4">In This Guide</h2>
            <ul className="space-y-2 text-white/70">
              <li><a href="#when-required" className="hover:text-rose-400">&#8594; When Electrical Permits Are Required</a></li>
              <li><a href="#types-of-permits" className="hover:text-rose-400">&#8594; Types of Electrical Permits</a></li>
              <li><a href="#application-process" className="hover:text-rose-400">&#8594; Application Process Step by Step</a></li>
              <li><a href="#documentation" className="hover:text-rose-400">&#8594; Required Documentation and Plans</a></li>
              <li><a href="#fees-timelines" className="hover:text-rose-400">&#8594; Permit Fees and Timelines</a></li>
              <li><a href="#scheduling-inspections" className="hover:text-rose-400">&#8594; Scheduling Inspections</a></li>
              <li><a href="#common-failures" className="hover:text-rose-400">&#8594; Common Inspection Failure Points</a></li>
              <li><a href="#rough-in-vs-final" className="hover:text-rose-400">&#8594; Rough-In vs Final Inspection</a></li>
              <li><a href="#permit-closeout" className="hover:text-rose-400">&#8594; Permit Closeout Process</a></li>
              <li><a href="#working-with-inspectors" className="hover:text-rose-400">&#8594; Working with Inspectors -- Best Practices</a></li>
              <li><a href="#unpermitted-work" className="hover:text-rose-400">&#8594; Consequences of Unpermitted Work</a></li>
            </ul>
          </div>

          {/* Article Content */}
          <div className="prose prose-invert prose-lg max-w-none">

            <section id="when-required" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">When Electrical Permits Are Required</h2>
              <p className="text-white/80 mb-4">
                Electrical permits are a critical part of the construction and renovation process. They exist to ensure that all electrical work meets the safety standards of the National Electrical Code (NEC) as adopted and amended by the local Authority Having Jurisdiction (AHJ). Understanding when a permit is required versus when work is exempt can save you time, money, and legal headaches.
              </p>
              <p className="text-white/80 mb-4">
                As a general rule, any electrical work that involves new circuits, modifications to existing circuits, or changes to the electrical service requires a permit. However, the specific requirements vary by jurisdiction, so always confirm with your local building department before starting work.
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-3">Work That Typically Requires a Permit</h3>
              <div className="bg-white/5 rounded-xl p-6 my-4">
                <ul className="space-y-2 text-white/70">
                  <li className="flex items-start gap-2">
                    <span className="text-rose-400 font-bold">&#8226;</span>
                    <span>Installing new electrical circuits or extending existing ones</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-rose-400 font-bold">&#8226;</span>
                    <span>Upgrading or replacing the electrical service panel</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-rose-400 font-bold">&#8226;</span>
                    <span>Installing a new sub-panel</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-rose-400 font-bold">&#8226;</span>
                    <span>Adding or relocating receptacles, switches, or light fixtures (beyond simple replacement)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-rose-400 font-bold">&#8226;</span>
                    <span>Wiring for new appliances (EV chargers, ranges, HVAC equipment, water heaters)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-rose-400 font-bold">&#8226;</span>
                    <span>Installing generator transfer switches or standby power systems</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-rose-400 font-bold">&#8226;</span>
                    <span>Solar PV system installation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-rose-400 font-bold">&#8226;</span>
                    <span>Swimming pool, hot tub, or spa electrical connections</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-rose-400 font-bold">&#8226;</span>
                    <span>Low-voltage fire alarm or security system installation (in many jurisdictions)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-rose-400 font-bold">&#8226;</span>
                    <span>Any electrical work associated with a building addition, remodel, or new construction</span>
                  </li>
                </ul>
              </div>

              <h3 className="text-xl font-semibold mt-6 mb-3">Work That Typically Does NOT Require a Permit</h3>
              <div className="bg-white/5 rounded-xl p-6 my-4">
                <ul className="space-y-2 text-white/70">
                  <li className="flex items-start gap-2">
                    <span className="text-green-400 font-bold">&#8226;</span>
                    <span>Replacing a receptacle, switch, or light fixture in-kind (same location, same type)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400 font-bold">&#8226;</span>
                    <span>Replacing a circuit breaker with one of the same type and rating</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400 font-bold">&#8226;</span>
                    <span>Minor repair work (replacing a damaged cover plate, re-attaching a loose wire)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400 font-bold">&#8226;</span>
                    <span>Plugging in portable appliances or equipment</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400 font-bold">&#8226;</span>
                    <span>Low-voltage landscape lighting or doorbell systems (varies by jurisdiction)</span>
                  </li>
                </ul>
              </div>

              <div className="bg-rose-900/20 border border-rose-500/30 rounded-xl p-6 my-6">
                <h4 className="font-semibold text-rose-400 mb-2">Important: When in Doubt, Ask</h4>
                <p className="text-white/70">
                  If you are unsure whether your project requires a permit, call your local building department. It is always better to ask upfront than to discover mid-project that you needed a permit. Many jurisdictions impose penalties for unpermitted work that go far beyond the original permit fee.
                </p>
              </div>
            </section>

            <section id="types-of-permits" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Types of Electrical Permits</h2>
              <p className="text-white/80 mb-4">
                Not all electrical permits are the same. Depending on the scope, complexity, and type of building, you may encounter different permit categories. Understanding which type applies to your project helps streamline the application process and ensures you provide the correct documentation.
              </p>

              <div className="overflow-x-auto my-6">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="border-b border-white/20">
                      <th className="text-left p-3 text-rose-400 font-semibold">Permit Type</th>
                      <th className="text-left p-3 text-rose-400 font-semibold">Typical Scope</th>
                      <th className="text-left p-3 text-rose-400 font-semibold">Plan Review</th>
                      <th className="text-left p-3 text-rose-400 font-semibold">Typical Fee Range</th>
                    </tr>
                  </thead>
                  <tbody className="text-white/70">
                    <tr className="border-b border-white/10">
                      <td className="p-3 font-medium text-white">Residential Minor</td>
                      <td className="p-3">Single circuit additions, panel swap-outs, EV charger installs</td>
                      <td className="p-3">Usually not required</td>
                      <td className="p-3">$50 - $200</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="p-3 font-medium text-white">Residential Major</td>
                      <td className="p-3">Service upgrades, whole-house rewires, additions</td>
                      <td className="p-3">Often required</td>
                      <td className="p-3">$200 - $1,000+</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="p-3 font-medium text-white">Commercial</td>
                      <td className="p-3">Tenant improvements, new construction, service installations</td>
                      <td className="p-3">Always required</td>
                      <td className="p-3">$500 - $5,000+</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="p-3 font-medium text-white">Industrial</td>
                      <td className="p-3">Large equipment, high-voltage systems, process controls</td>
                      <td className="p-3">Always required</td>
                      <td className="p-3">$1,000 - $10,000+</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="p-3 font-medium text-white">Specialty / Separate</td>
                      <td className="p-3">Solar PV, fire alarm, generator, pool/spa</td>
                      <td className="p-3">Varies</td>
                      <td className="p-3">$100 - $2,000</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="p-3 font-medium text-white">Temporary Power</td>
                      <td className="p-3">Construction site power, events, seasonal displays</td>
                      <td className="p-3">Usually not required</td>
                      <td className="p-3">$50 - $300</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h3 className="text-xl font-semibold mt-6 mb-3">Residential Permits</h3>
              <p className="text-white/80 mb-4">
                Residential electrical permits are the most common type encountered by electricians. Most jurisdictions split these into minor and major categories. A minor residential permit typically covers work involving one to three new circuits, an appliance hookup, or a like-for-like panel replacement. A major residential permit covers service upgrades, whole-house rewiring, additions with significant new wiring, or new construction.
              </p>
              <p className="text-white/80 mb-4">
                Many jurisdictions offer over-the-counter issuance for minor residential permits, meaning you can walk into the building department, fill out an application, pay the fee, and receive your permit on the same visit. Major residential permits may require plan review, which adds time to the process.
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-3">Commercial Permits</h3>
              <p className="text-white/80 mb-4">
                Commercial electrical permits are required for work in non-residential buildings including offices, retail spaces, restaurants, warehouses, and multi-family dwellings (in most jurisdictions, buildings with more than two or three dwelling units are classified as commercial). Commercial permits almost always require plan review by a licensed professional engineer or the building department&apos;s plan review staff.
              </p>
              <p className="text-white/80 mb-4">
                The commercial permit process is typically more involved, requiring stamped engineering drawings, load calculations, panel schedules, one-line diagrams, and sometimes short-circuit and coordination studies. The review process alone can take two to six weeks depending on the jurisdiction and project complexity.
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-3">Specialty Permits</h3>
              <p className="text-white/80 mb-4">
                Some types of electrical work require a separate or specialty permit even when a general electrical permit is already in place. Common specialty permits include:
              </p>
              <div className="bg-white/5 rounded-xl p-6 my-4">
                <ul className="space-y-2 text-white/70">
                  <li className="flex items-start gap-2">
                    <span className="text-amber-400 font-bold">&#8226;</span>
                    <span><strong>Solar PV Permit</strong> -- Often requires a separate application with system specifications, inverter data sheets, site plan, single-line diagram, and utility interconnection agreement</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-400 font-bold">&#8226;</span>
                    <span><strong>Fire Alarm Permit</strong> -- Typically requires NICET-certified design drawings and coordination with the fire marshal</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-400 font-bold">&#8226;</span>
                    <span><strong>Generator/Transfer Switch Permit</strong> -- May require utility notification and load shedding calculations</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-400 font-bold">&#8226;</span>
                    <span><strong>Pool/Spa Electrical Permit</strong> -- Requires compliance with NEC Article 680 including bonding details</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-400 font-bold">&#8226;</span>
                    <span><strong>Temporary Power Permit</strong> -- For construction sites or events, often with specific duration limits</span>
                  </li>
                </ul>
              </div>
            </section>

            <section id="application-process" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Application Process Step by Step</h2>
              <p className="text-white/80 mb-4">
                While the specifics vary by jurisdiction, most electrical permit applications follow a similar workflow. Here is the typical process from start to finish:
              </p>

              <div className="space-y-4 my-6">
                <div className="bg-white/5 rounded-xl p-6 border-l-4 border-rose-500">
                  <div className="flex items-start gap-4">
                    <span className="bg-rose-600/30 text-rose-300 font-bold text-lg px-3 py-1 rounded-lg shrink-0">1</span>
                    <div>
                      <h4 className="font-semibold text-white mb-2">Determine Permit Requirements</h4>
                      <p className="text-white/70 text-sm">
                        Contact your local building department or visit their website to determine the permit type required for your project. Identify whether a plan review is needed, what documentation is required, and what the applicable fees are. Some jurisdictions provide worksheets or checklists to help you determine requirements.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white/5 rounded-xl p-6 border-l-4 border-rose-500">
                  <div className="flex items-start gap-4">
                    <span className="bg-rose-600/30 text-rose-300 font-bold text-lg px-3 py-1 rounded-lg shrink-0">2</span>
                    <div>
                      <h4 className="font-semibold text-white mb-2">Prepare Documentation</h4>
                      <p className="text-white/70 text-sm">
                        Gather all required documentation including the permit application form, project description, electrical plans or drawings (if required), load calculations, panel schedules, and contractor license information. For commercial work, engineering drawings may need to be stamped by a licensed PE.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white/5 rounded-xl p-6 border-l-4 border-rose-500">
                  <div className="flex items-start gap-4">
                    <span className="bg-rose-600/30 text-rose-300 font-bold text-lg px-3 py-1 rounded-lg shrink-0">3</span>
                    <div>
                      <h4 className="font-semibold text-white mb-2">Submit the Application</h4>
                      <p className="text-white/70 text-sm">
                        Submit your application in person, by mail, or through the jurisdiction&apos;s online portal. Many jurisdictions now offer electronic submittal, which can significantly speed up the process. Include all required documents, plans, and the permit fee payment. Keep copies of everything you submit.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white/5 rounded-xl p-6 border-l-4 border-amber-500">
                  <div className="flex items-start gap-4">
                    <span className="bg-amber-600/30 text-amber-300 font-bold text-lg px-3 py-1 rounded-lg shrink-0">4</span>
                    <div>
                      <h4 className="font-semibold text-white mb-2">Plan Review (If Required)</h4>
                      <p className="text-white/70 text-sm">
                        If plan review is required, the building department will examine your drawings and calculations for code compliance. This process can take anywhere from a few days to several weeks. You may receive comments or corrections that must be addressed before the permit is issued. Respond to plan review comments promptly to avoid delays.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white/5 rounded-xl p-6 border-l-4 border-green-500">
                  <div className="flex items-start gap-4">
                    <span className="bg-green-600/30 text-green-300 font-bold text-lg px-3 py-1 rounded-lg shrink-0">5</span>
                    <div>
                      <h4 className="font-semibold text-white mb-2">Permit Issuance</h4>
                      <p className="text-white/70 text-sm">
                        Once the application is approved (and plan review is complete, if applicable), the permit is issued. You will receive a permit card or document that must be posted in a visible location at the job site. Do not begin work before the permit is issued unless the jurisdiction allows work to commence upon application submission.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white/5 rounded-xl p-6 border-l-4 border-blue-500">
                  <div className="flex items-start gap-4">
                    <span className="bg-blue-600/30 text-blue-300 font-bold text-lg px-3 py-1 rounded-lg shrink-0">6</span>
                    <div>
                      <h4 className="font-semibold text-white mb-2">Perform Work and Schedule Inspections</h4>
                      <p className="text-white/70 text-sm">
                        Complete the electrical work in accordance with the approved plans and the NEC. Schedule required inspections at the appropriate stages. Most permits require at minimum a rough-in inspection and a final inspection, though some projects may require additional inspections such as underground, slab, or service inspections.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white/5 rounded-xl p-6 border-l-4 border-purple-500">
                  <div className="flex items-start gap-4">
                    <span className="bg-purple-600/30 text-purple-300 font-bold text-lg px-3 py-1 rounded-lg shrink-0">7</span>
                    <div>
                      <h4 className="font-semibold text-white mb-2">Pass Final Inspection and Close Permit</h4>
                      <p className="text-white/70 text-sm">
                        After all inspections are approved, the permit is closed out. Some jurisdictions issue a certificate of completion or a letter of approval. Keep this documentation in your records -- it serves as proof that the work was inspected and approved. Homeowners should retain this for future home sales.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section id="documentation" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Required Documentation and Plans</h2>
              <p className="text-white/80 mb-4">
                The documentation required for an electrical permit varies based on the type and scope of the project. Having everything prepared before you visit the building department saves time and prevents multiple trips. Here is a breakdown of typical documentation requirements by project type.
              </p>

              <div className="grid md:grid-cols-2 gap-6 my-6">
                <div className="bg-white/5 rounded-xl p-6">
                  <h3 className="font-semibold text-rose-400 mb-3">Residential Projects</h3>
                  <ul className="space-y-2 text-white/70 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-rose-400">&#9744;</span>
                      <span>Completed permit application form</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-rose-400">&#9744;</span>
                      <span>Description of work (scope, number of circuits, equipment)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-rose-400">&#9744;</span>
                      <span>Electrical contractor license number</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-rose-400">&#9744;</span>
                      <span>Property address and owner information</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-rose-400">&#9744;</span>
                      <span>Load calculation (for service upgrades or new construction)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-rose-400">&#9744;</span>
                      <span>Site plan showing service location (if applicable)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-rose-400">&#9744;</span>
                      <span>Panel schedule (for new panels or service upgrades)</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-white/5 rounded-xl p-6">
                  <h3 className="font-semibold text-cyan-400 mb-3">Commercial Projects</h3>
                  <ul className="space-y-2 text-white/70 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-cyan-400">&#9744;</span>
                      <span>All items required for residential, plus:</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-cyan-400">&#9744;</span>
                      <span>Stamped electrical drawings (PE-sealed in most jurisdictions)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-cyan-400">&#9744;</span>
                      <span>One-line diagram of electrical distribution</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-cyan-400">&#9744;</span>
                      <span>Complete panel schedules with load calculations</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-cyan-400">&#9744;</span>
                      <span>Equipment specifications and cut sheets</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-cyan-400">&#9744;</span>
                      <span>Short-circuit and coordination study (large services)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-cyan-400">&#9744;</span>
                      <span>Emergency/standby power system details (if applicable)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-cyan-400">&#9744;</span>
                      <span>Lighting plans with fixture schedule and controls</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-cyan-400">&#9744;</span>
                      <span>Fire alarm riser diagram (if applicable)</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="bg-amber-900/20 border border-amber-500/30 rounded-xl p-6 my-6">
                <h4 className="font-semibold text-amber-400 mb-2">Pro Tip: Digital Copies</h4>
                <p className="text-white/70">
                  Many jurisdictions now accept or even prefer digital plan submittal. Keep high-quality PDF copies of all your drawings and documents. This makes resubmission easy if corrections are needed during plan review. Also keep digital copies of your approved plans -- you will need them at the job site during inspections.
                </p>
              </div>

              <h3 className="text-xl font-semibold mt-6 mb-3">Load Calculation Requirements</h3>
              <p className="text-white/80 mb-4">
                For service upgrades, new construction, and major renovations, a residential load calculation per NEC Article 220 is almost always required. This calculation determines the minimum service size needed to safely supply the building&apos;s electrical loads. At a minimum, you will need to document:
              </p>
              <div className="bg-white/5 rounded-xl p-6 my-4">
                <ul className="space-y-2 text-white/70">
                  <li className="flex items-start gap-2">
                    <span className="text-rose-400 font-bold">&#8226;</span>
                    <span>General lighting and receptacle load (3 VA per sq ft for dwellings)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-rose-400 font-bold">&#8226;</span>
                    <span>Small appliance circuit loads (1,500 VA per circuit, minimum two circuits)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-rose-400 font-bold">&#8226;</span>
                    <span>Laundry circuit load (1,500 VA minimum)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-rose-400 font-bold">&#8226;</span>
                    <span>Appliance loads (range, dryer, water heater, HVAC, etc.)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-rose-400 font-bold">&#8226;</span>
                    <span>Demand factors applied per NEC Table 220.42 and Table 220.54/220.55</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-rose-400 font-bold">&#8226;</span>
                    <span>Largest motor load at 125%</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-rose-400 font-bold">&#8226;</span>
                    <span>Total calculated load and resulting minimum service size</span>
                  </li>
                </ul>
              </div>
            </section>

            <section id="fees-timelines" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Permit Fees and Timelines</h2>
              <p className="text-white/80 mb-4">
                Permit fees and processing timelines vary significantly between jurisdictions. Understanding typical ranges helps you plan your project schedule and budget accordingly.
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-3">How Fees Are Calculated</h3>
              <p className="text-white/80 mb-4">
                Most jurisdictions calculate electrical permit fees using one or more of these methods:
              </p>
              <div className="bg-white/5 rounded-xl p-6 my-4">
                <ul className="space-y-3 text-white/70">
                  <li className="flex items-start gap-2">
                    <span className="text-rose-400 font-bold">&#8226;</span>
                    <span><strong>Flat fee</strong> -- A fixed amount for specific types of work (e.g., $75 for a panel replacement, $50 for an EV charger)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-rose-400 font-bold">&#8226;</span>
                    <span><strong>Per-circuit fee</strong> -- A base fee plus an additional charge per circuit (e.g., $50 base + $10 per circuit)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-rose-400 font-bold">&#8226;</span>
                    <span><strong>Valuation-based</strong> -- A percentage of the estimated project value (common for commercial work)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-rose-400 font-bold">&#8226;</span>
                    <span><strong>Amperage-based</strong> -- Fee based on the service size (e.g., $200 for 200A service, $400 for 400A service)</span>
                  </li>
                </ul>
              </div>

              <h3 className="text-xl font-semibold mt-6 mb-3">Typical Timelines</h3>
              <div className="overflow-x-auto my-6">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="border-b border-white/20">
                      <th className="text-left p-3 text-rose-400 font-semibold">Process Step</th>
                      <th className="text-left p-3 text-rose-400 font-semibold">Residential (Minor)</th>
                      <th className="text-left p-3 text-rose-400 font-semibold">Residential (Major)</th>
                      <th className="text-left p-3 text-rose-400 font-semibold">Commercial</th>
                    </tr>
                  </thead>
                  <tbody className="text-white/70">
                    <tr className="border-b border-white/10">
                      <td className="p-3 font-medium text-white">Application to Issuance</td>
                      <td className="p-3">Same day (over the counter)</td>
                      <td className="p-3">1-2 weeks</td>
                      <td className="p-3">2-6 weeks</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="p-3 font-medium text-white">Plan Review</td>
                      <td className="p-3">Not required</td>
                      <td className="p-3">3-10 business days</td>
                      <td className="p-3">2-4 weeks</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="p-3 font-medium text-white">Inspection Scheduling</td>
                      <td className="p-3">Next business day</td>
                      <td className="p-3">1-3 business days</td>
                      <td className="p-3">1-5 business days</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="p-3 font-medium text-white">Reinspection (if needed)</td>
                      <td className="p-3">1-2 business days</td>
                      <td className="p-3">1-3 business days</td>
                      <td className="p-3">2-5 business days</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="p-3 font-medium text-white">Permit Validity</td>
                      <td className="p-3">6-12 months</td>
                      <td className="p-3">6-12 months</td>
                      <td className="p-3">12-24 months</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="bg-rose-900/20 border border-rose-500/30 rounded-xl p-6 my-6">
                <h4 className="font-semibold text-rose-400 mb-2">Watch Out: Permit Expiration</h4>
                <p className="text-white/70">
                  Most electrical permits have an expiration date, typically 6 to 12 months from issuance. If the permit expires before the work is completed and inspected, you may need to apply for a new permit and pay additional fees. Some jurisdictions allow permit extensions for a fee. Monitor your permit expiration dates carefully, especially on larger projects where unexpected delays occur.
                </p>
              </div>
            </section>

            <section id="scheduling-inspections" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Scheduling Inspections</h2>
              <p className="text-white/80 mb-4">
                Once your permit is issued and work is underway, you will need to schedule inspections at specific stages. The inspection process is where the rubber meets the road -- this is where an inspector verifies that the work complies with the NEC and any local amendments.
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-3">How to Schedule</h3>
              <p className="text-white/80 mb-4">
                Most jurisdictions offer multiple methods for scheduling inspections:
              </p>
              <div className="bg-white/5 rounded-xl p-6 my-4">
                <ul className="space-y-2 text-white/70">
                  <li className="flex items-start gap-2">
                    <span className="text-green-400 font-bold">&#8226;</span>
                    <span><strong>Online portal</strong> -- The fastest and most convenient method. Many jurisdictions use systems like Accela, TRAKiT, or custom platforms where you can log in, enter your permit number, and select an inspection date.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400 font-bold">&#8226;</span>
                    <span><strong>Phone/IVR system</strong> -- Call the building department&apos;s automated inspection line. You will typically need your permit number and the type of inspection to request.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400 font-bold">&#8226;</span>
                    <span><strong>In person</strong> -- Visit the building department to request an inspection. Less common in the digital age but still available.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400 font-bold">&#8226;</span>
                    <span><strong>Email or app</strong> -- Some jurisdictions offer email-based scheduling or dedicated mobile apps for contractors.</span>
                  </li>
                </ul>
              </div>

              <h3 className="text-xl font-semibold mt-6 mb-3">Common Inspection Types and When to Schedule Them</h3>
              <div className="overflow-x-auto my-6">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="border-b border-white/20">
                      <th className="text-left p-3 text-rose-400 font-semibold">Inspection Type</th>
                      <th className="text-left p-3 text-rose-400 font-semibold">When to Schedule</th>
                      <th className="text-left p-3 text-rose-400 font-semibold">What&apos;s Checked</th>
                    </tr>
                  </thead>
                  <tbody className="text-white/70">
                    <tr className="border-b border-white/10">
                      <td className="p-3 font-medium text-white">Underground/Slab</td>
                      <td className="p-3">Before backfill or concrete pour</td>
                      <td className="p-3">Conduit depth, type, connections, ground rod</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="p-3 font-medium text-white">Rough-In</td>
                      <td className="p-3">After wiring, before closing walls</td>
                      <td className="p-3">Wiring methods, box placement, securing, grounding</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="p-3 font-medium text-white">Service/Meter</td>
                      <td className="p-3">Service equipment installed, before utility connects</td>
                      <td className="p-3">Service entrance, grounding electrode, meter base</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="p-3 font-medium text-white">Final</td>
                      <td className="p-3">All work complete, devices installed, energized</td>
                      <td className="p-3">Everything -- devices, GFCI/AFCI, labeling, operation</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="bg-purple-900/20 border border-purple-500/30 rounded-xl p-6 my-6">
                <h4 className="font-semibold text-purple-400 mb-2">Scheduling Tips</h4>
                <p className="text-white/70">
                  Schedule inspections at least 24 hours in advance (48 hours in busy jurisdictions). Most inspectors have morning and afternoon windows. Request a morning inspection if you want to address corrections and potentially get a re-inspection the same day. Be aware that Mondays and days after holidays tend to be the busiest -- scheduling mid-week often results in faster service.
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
                  <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/></svg>
                  Download Free
                </a>
              </div>
            </div>

            <section id="common-failures" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Common Inspection Failure Points</h2>
              <p className="text-white/80 mb-4">
                Understanding why inspections fail is just as important as knowing the permit process. Failed inspections cost time and money -- reinspection fees, project delays, and potential rework. Here are the most common reasons electrical inspections fail, organized by inspection stage.
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-3">Administrative Failures (Before the Inspector Even Looks at Your Work)</h3>
              <div className="space-y-3 my-6">
                {[
                  { num: 1, title: "Permit not posted on site", desc: "The permit card must be visible and accessible at the job site. No permit on display often means no inspection." },
                  { num: 2, title: "Approved plans not on site", desc: "If plans were required for the permit, approved copies must be available for the inspector to reference during the inspection." },
                  { num: 3, title: "Work not ready for inspection", desc: "Calling for an inspection before the work is complete wastes everyone's time. All work for the requested inspection stage must be finished." },
                  { num: 4, title: "No access to work areas", desc: "Locked doors, blocked panels, inaccessible attic spaces, or stacked materials preventing access to boxes and wiring." },
                  { num: 5, title: "Wrong inspection type requested", desc: "Requesting a final inspection when a rough-in has not been approved, or scheduling the wrong type of inspection for the work performed." },
                ].map((item) => (
                  <div key={item.num} className="bg-red-900/10 border border-red-500/20 rounded-xl p-4">
                    <div className="flex items-start gap-3">
                      <span className="text-red-400 font-bold text-lg">{item.num}.</span>
                      <div>
                        <h4 className="font-semibold text-white">{item.title}</h4>
                        <p className="text-white/60 text-sm mt-1">{item.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <h3 className="text-xl font-semibold mt-6 mb-3">Technical Failures (Code Violations)</h3>
              <div className="space-y-3 my-6">
                {[
                  { num: 1, title: "Missing GFCI protection", desc: "Required in kitchens, bathrooms, garages, outdoors, unfinished basements, crawl spaces, laundry areas, and within 6 feet of any sink (NEC 210.8)." },
                  { num: 2, title: "Missing AFCI protection", desc: "Required on most 15A and 20A branch circuits in dwelling unit bedrooms, living rooms, dining rooms, kitchens, hallways, closets, and similar areas (NEC 210.12)." },
                  { num: 3, title: "Improper cable securing and support", desc: "NM cable must be stapled within 12 inches of each box and supported every 4.5 feet. Cables running through bored holes in joists/studs are considered supported." },
                  { num: 4, title: "Box fill violations", desc: "Exceeding the allowable number of conductors, devices, and clamps in a box per NEC 314.16. Inspectors frequently count box fill." },
                  { num: 5, title: "Missing nail plates", desc: "Steel plates are required where cables pass through bored holes within 1-1/4 inches of the stud edge (NEC 300.4)." },
                  { num: 6, title: "Working space clearance violations", desc: "Not maintaining the 30 in. x 36 in. x 78 in. clear working space in front of panels (NEC 110.26)." },
                  { num: 7, title: "Improper grounding and bonding", desc: "Missing equipment grounding conductors, incorrect grounding electrode system, or failing to bond metal water pipes." },
                  { num: 8, title: "Missing tamper-resistant receptacles", desc: "All 15A and 20A receptacles in dwelling units must be tamper-resistant (NEC 406.12)." },
                  { num: 9, title: "Panel labeling deficiencies", desc: "Every circuit must be legibly identified as to its clear, evident, and specific purpose (NEC 408.4)." },
                  { num: 10, title: "Incorrect wire size for breaker rating", desc: "14 AWG on a 20A breaker, or other mismatches between conductor ampacity and overcurrent protection." },
                ].map((item) => (
                  <div key={item.num} className="bg-red-900/10 border border-red-500/20 rounded-xl p-4">
                    <div className="flex items-start gap-3">
                      <span className="text-red-400 font-bold text-lg">{item.num}.</span>
                      <div>
                        <h4 className="font-semibold text-white">{item.title}</h4>
                        <p className="text-white/60 text-sm mt-1">{item.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section id="rough-in-vs-final" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Rough-In vs Final Inspection</h2>
              <p className="text-white/80 mb-4">
                The two most critical inspections in any electrical project are the rough-in and the final. Understanding the differences between them and what each one covers helps you prepare properly and avoid delays.
              </p>

              <div className="grid md:grid-cols-2 gap-6 my-6">
                <div className="bg-amber-900/20 border border-amber-500/30 rounded-xl p-6">
                  <h3 className="font-semibold text-amber-400 mb-3">Rough-In Inspection</h3>
                  <p className="text-white/70 text-sm mb-3">Occurs after wiring is installed but BEFORE walls, ceilings, and floors are closed up.</p>
                  <ul className="space-y-2 text-white/70 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-amber-400">&#9744;</span>
                      <span>All wiring routed and secured to framing</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-amber-400">&#9744;</span>
                      <span>Boxes installed at correct heights and positions</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-amber-400">&#9744;</span>
                      <span>Nail plates installed where required</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-amber-400">&#9744;</span>
                      <span>Cables properly secured and supported</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-amber-400">&#9744;</span>
                      <span>Panel installed with proper clearances</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-amber-400">&#9744;</span>
                      <span>Grounding electrode system visible</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-amber-400">&#9744;</span>
                      <span>Box fill within limits (all conductors visible)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-amber-400">&#9744;</span>
                      <span>6 inches of free conductor at each box</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-amber-400">&#9744;</span>
                      <span>Connectors installed at all cable entries</span>
                    </li>
                  </ul>
                  <div className="mt-4 p-3 bg-amber-900/30 rounded-lg">
                    <p className="text-amber-300 text-xs font-semibold">KEY POINT: Do NOT close walls until rough-in is approved. If the inspector finds issues after drywall is up, you will have to open walls at your expense.</p>
                  </div>
                </div>
                <div className="bg-green-900/20 border border-green-500/30 rounded-xl p-6">
                  <h3 className="font-semibold text-green-400 mb-3">Final Inspection</h3>
                  <p className="text-white/70 text-sm mb-3">Occurs AFTER all work is complete, devices installed, and circuits energized.</p>
                  <ul className="space-y-2 text-white/70 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-green-400">&#9744;</span>
                      <span>All receptacles, switches, and fixtures installed</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-400">&#9744;</span>
                      <span>Cover plates on all devices and junction boxes</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-400">&#9744;</span>
                      <span>GFCI devices installed and tested</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-400">&#9744;</span>
                      <span>AFCI breakers installed on required circuits</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-400">&#9744;</span>
                      <span>Panel schedule complete and legible</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-400">&#9744;</span>
                      <span>All circuits energized and functioning</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-400">&#9744;</span>
                      <span>Smoke and CO detectors installed and working</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-400">&#9744;</span>
                      <span>Proper polarity verified on all receptacles</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-400">&#9744;</span>
                      <span>Dead-front cover installed on panel</span>
                    </li>
                  </ul>
                  <div className="mt-4 p-3 bg-green-900/30 rounded-lg">
                    <p className="text-green-300 text-xs font-semibold">KEY POINT: Everything must be complete and energized. Inspectors will test GFCI/AFCI operation, check polarity, and verify all circuits are properly labeled.</p>
                  </div>
                </div>
              </div>

              <h3 className="text-xl font-semibold mt-6 mb-3">Additional Inspection Stages</h3>
              <p className="text-white/80 mb-4">
                Depending on your project, additional inspections beyond rough-in and final may be required:
              </p>
              <div className="bg-white/5 rounded-xl p-6 my-4">
                <ul className="space-y-3 text-white/70">
                  <li className="flex items-start gap-2">
                    <span className="text-rose-400 font-bold">&#8226;</span>
                    <span><strong>Underground/Slab Inspection</strong> -- Required before backfilling trenches or pouring concrete over conduit. The inspector verifies conduit type, burial depth, proper fittings, and grounding electrodes. This inspection is critical because the work becomes permanently inaccessible once covered.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-rose-400 font-bold">&#8226;</span>
                    <span><strong>Service/Meter Inspection</strong> -- Some jurisdictions require a separate inspection of the service entrance before the utility will connect power. This covers the meter base, service entrance conductors, weatherhead, grounding electrode system, and main disconnect.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-rose-400 font-bold">&#8226;</span>
                    <span><strong>Temporary Power Inspection</strong> -- For construction sites requiring temporary electrical service. Verifies proper GFCI protection, grounding, and weatherproofing of temporary equipment.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-rose-400 font-bold">&#8226;</span>
                    <span><strong>Special Systems Inspection</strong> -- Fire alarm, emergency power, solar PV, and other specialty systems may require separate inspections, sometimes by different inspectors with specific expertise.</span>
                  </li>
                </ul>
              </div>
            </section>

            <section id="permit-closeout" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Permit Closeout Process</h2>
              <p className="text-white/80 mb-4">
                Closing out the electrical permit is the final administrative step that many contractors and homeowners overlook. An open permit can cause significant problems down the road, from property sale complications to insurance issues. Here is what you need to know about properly closing your permit.
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-3">Steps to Close Out a Permit</h3>
              <div className="bg-white/5 rounded-xl p-6 my-4">
                <ol className="list-decimal list-inside text-white/70 space-y-3">
                  <li><strong>Pass all required inspections</strong> -- Every inspection associated with the permit must receive an approved status. This includes rough-in, final, and any intermediate inspections.</li>
                  <li><strong>Verify approval status</strong> -- Check with the building department (online or by phone) that all inspections show as approved in their system. Sometimes inspection results take a day or two to be entered.</li>
                  <li><strong>Obtain certificate of completion</strong> -- Some jurisdictions automatically issue a certificate of completion or letter of approval once the final inspection is approved. Others require you to request it. This document is your proof that the work was done under permit and inspected.</li>
                  <li><strong>Utility release (if applicable)</strong> -- For new services or service upgrades, the building department may need to issue a utility release form before the utility company will establish permanent service or upgrade the meter.</li>
                  <li><strong>Retain documentation</strong> -- Keep copies of the permit, approved plans, inspection records, and certificate of completion in your project files. Homeowners should store these with other home records for future reference during resale.</li>
                </ol>
              </div>

              <div className="bg-rose-900/20 border border-rose-500/30 rounded-xl p-6 my-6">
                <h4 className="font-semibold text-rose-400 mb-2">Warning: Open Permits</h4>
                <p className="text-white/70">
                  An open (unclosed) permit on a property can create serious problems. When a property is sold, the title search may reveal open permits, which can delay or derail the sale. Lenders and insurance companies may require open permits to be resolved before closing. In some jurisdictions, the current property owner becomes responsible for closing open permits -- even if they did not pull the original permit. As a contractor, always follow through to ensure permits are properly closed. As a homeowner, verify that your contractor closes all permits when the project is complete.
                </p>
              </div>
            </section>

            <section id="working-with-inspectors" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Working with Inspectors -- Best Practices</h2>
              <p className="text-white/80 mb-4">
                Your relationship with the electrical inspector can make or break your inspection experience. Inspectors are professionals doing an important job -- ensuring public safety. Approaching the inspection process with the right attitude and preparation leads to better outcomes for everyone.
              </p>

              <div className="grid md:grid-cols-2 gap-6 my-6">
                <div className="bg-green-900/20 rounded-xl p-6">
                  <h3 className="font-semibold text-green-400 mb-3">Do This</h3>
                  <ul className="space-y-2 text-white/70 text-sm">
                    <li>&#10003; Be present during the inspection or have a knowledgeable representative on site</li>
                    <li>&#10003; Have the permit posted and approved plans available</li>
                    <li>&#10003; Ensure the work area is clean, well-lit, and accessible</li>
                    <li>&#10003; Remove panel covers before the inspector arrives</li>
                    <li>&#10003; Be professional, courteous, and receptive to feedback</li>
                    <li>&#10003; Ask questions if you do not understand a correction</li>
                    <li>&#10003; Request specific code references for any corrections</li>
                    <li>&#10003; Fix corrections promptly and schedule reinspection</li>
                    <li>&#10003; Maintain a good working relationship over time</li>
                  </ul>
                </div>
                <div className="bg-red-900/20 rounded-xl p-6">
                  <h3 className="font-semibold text-red-400 mb-3">Avoid This</h3>
                  <ul className="space-y-2 text-white/70 text-sm">
                    <li>&#10007; Arguing with the inspector on site</li>
                    <li>&#10007; Calling for inspection when work is incomplete</li>
                    <li>&#10007; Making the inspector search for the work area</li>
                    <li>&#10007; Being absent without arranging access</li>
                    <li>&#10007; Covering work before the inspection is approved</li>
                    <li>&#10007; Making excuses for code violations</li>
                    <li>&#10007; Attempting to influence the inspector improperly</li>
                    <li>&#10007; Ignoring corrections or delaying reinspection</li>
                    <li>&#10007; Working beyond the scope of the permit without notification</li>
                  </ul>
                </div>
              </div>

              <div className="bg-purple-900/30 rounded-xl p-6 my-6">
                <h4 className="font-semibold text-purple-400 mb-2">Pro Tip: Build Credibility Over Time</h4>
                <p className="text-white/70">
                  Inspectors remember contractors -- both good and bad. Consistently producing clean, code-compliant work builds trust. Over time, inspectors who know your reputation for quality work may be less likely to scrutinize every minor detail because they trust your overall workmanship. Conversely, a history of failed inspections and sloppy work will earn you extra scrutiny on every job. Your reputation follows you.
                </p>
              </div>

              <h3 className="text-xl font-semibold mt-6 mb-3">Handling Disagreements</h3>
              <p className="text-white/80 mb-4">
                Occasionally, you may disagree with an inspector&apos;s interpretation of the code. Here is how to handle it professionally:
              </p>
              <div className="bg-white/5 rounded-xl p-6 my-4">
                <ol className="list-decimal list-inside text-white/70 space-y-3">
                  <li><strong>Do not argue on site</strong> -- This almost never results in a changed decision and can damage the working relationship.</li>
                  <li><strong>Ask for the specific code reference</strong> -- Request the NEC article, section, and subsection that supports the correction. You have a right to know the basis for the requirement.</li>
                  <li><strong>Research the code yourself</strong> -- Review the cited code section, the NEC Handbook commentary, and any local amendments. The Ampora app can help you quickly look up code sections in the field.</li>
                  <li><strong>Discuss with the chief inspector</strong> -- If you believe the correction is in error, contact the chief electrical inspector or the inspector&apos;s supervisor. Present your case calmly with code references.</li>
                  <li><strong>Use the formal appeals process</strong> -- Most jurisdictions have a Board of Appeals that can review disputed code interpretations. This is the proper channel for resolving genuine disagreements.</li>
                  <li><strong>Know when to just fix it</strong> -- Sometimes it is faster and cheaper to make the correction than to fight it, even if you believe you are technically right. Consider the cost-benefit of each situation.</li>
                </ol>
              </div>
            </section>

            <section id="unpermitted-work" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Consequences of Unpermitted Work</h2>
              <p className="text-white/80 mb-4">
                Some contractors and homeowners try to skip the permit process to save time and money. This is a serious mistake with potentially severe consequences. Understanding the risks helps explain to clients why permits matter.
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-3">Legal and Financial Consequences</h3>
              <div className="space-y-3 my-6">
                <div className="bg-red-900/10 border border-red-500/20 rounded-xl p-4">
                  <div className="flex items-start gap-3">
                    <span className="text-red-400 text-xl">&#9888;</span>
                    <div>
                      <h4 className="font-semibold text-white">Fines and Penalties</h4>
                      <p className="text-white/60 text-sm mt-1">Most jurisdictions impose fines for unpermitted work, often double or triple the original permit fee. Repeat offenders may face escalating penalties, and contractors can face license suspension or revocation.</p>
                    </div>
                  </div>
                </div>
                <div className="bg-red-900/10 border border-red-500/20 rounded-xl p-4">
                  <div className="flex items-start gap-3">
                    <span className="text-red-400 text-xl">&#9888;</span>
                    <div>
                      <h4 className="font-semibold text-white">Required Removal or Exposure</h4>
                      <p className="text-white/60 text-sm mt-1">If unpermitted work is discovered, the building department may require you to remove finished surfaces (drywall, flooring, ceilings) to expose the wiring for inspection. This can cost thousands of dollars in additional construction work.</p>
                    </div>
                  </div>
                </div>
                <div className="bg-red-900/10 border border-red-500/20 rounded-xl p-4">
                  <div className="flex items-start gap-3">
                    <span className="text-red-400 text-xl">&#9888;</span>
                    <div>
                      <h4 className="font-semibold text-white">Insurance Implications</h4>
                      <p className="text-white/60 text-sm mt-1">Homeowner&apos;s insurance may deny claims related to damage caused by unpermitted electrical work. If a fire starts due to unpermitted wiring, the insurance company may refuse to pay the claim, leaving the homeowner fully liable.</p>
                    </div>
                  </div>
                </div>
                <div className="bg-red-900/10 border border-red-500/20 rounded-xl p-4">
                  <div className="flex items-start gap-3">
                    <span className="text-red-400 text-xl">&#9888;</span>
                    <div>
                      <h4 className="font-semibold text-white">Property Sale Complications</h4>
                      <p className="text-white/60 text-sm mt-1">Unpermitted work is often discovered during home inspections before a sale. Buyers may demand that the work be permitted and inspected (potentially requiring wall opening), reduce their offer, or walk away entirely. Undisclosed unpermitted work can also lead to lawsuits after the sale.</p>
                    </div>
                  </div>
                </div>
                <div className="bg-red-900/10 border border-red-500/20 rounded-xl p-4">
                  <div className="flex items-start gap-3">
                    <span className="text-red-400 text-xl">&#9888;</span>
                    <div>
                      <h4 className="font-semibold text-white">Liability Exposure</h4>
                      <p className="text-white/60 text-sm mt-1">If someone is injured or property is damaged due to unpermitted electrical work, the person who performed the work (or the property owner who authorized it) may face personal liability, including potential criminal charges in cases of serious injury or death.</p>
                    </div>
                  </div>
                </div>
                <div className="bg-red-900/10 border border-red-500/20 rounded-xl p-4">
                  <div className="flex items-start gap-3">
                    <span className="text-red-400 text-xl">&#9888;</span>
                    <div>
                      <h4 className="font-semibold text-white">Contractor License Actions</h4>
                      <p className="text-white/60 text-sm mt-1">Licensed electricians who perform unpermitted work risk disciplinary action from the licensing board, including fines, mandatory continuing education, license suspension, or permanent revocation. The license you worked hard to earn is not worth risking for the cost of a permit.</p>
                    </div>
                  </div>
                </div>
              </div>

              <h3 className="text-xl font-semibold mt-6 mb-3">How Unpermitted Work Gets Discovered</h3>
              <p className="text-white/80 mb-4">
                Homeowners and contractors who skip permits often assume no one will find out. In practice, unpermitted work is frequently discovered through:
              </p>
              <div className="bg-white/5 rounded-xl p-6 my-4">
                <ul className="space-y-2 text-white/70">
                  <li className="flex items-start gap-2">
                    <span className="text-rose-400 font-bold">&#8226;</span>
                    <span><strong>Home inspections during property sales</strong> -- Experienced home inspectors can identify work that was done without inspection</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-rose-400 font-bold">&#8226;</span>
                    <span><strong>Neighbor complaints</strong> -- Visible construction activity without permits often prompts calls to the building department</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-rose-400 font-bold">&#8226;</span>
                    <span><strong>Insurance investigations</strong> -- Following a fire or electrical incident, investigators check permit records</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-rose-400 font-bold">&#8226;</span>
                    <span><strong>Future permitted work</strong> -- When a later project does pull permits, the inspector may discover prior unpermitted work</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-rose-400 font-bold">&#8226;</span>
                    <span><strong>Utility company records</strong> -- Utility service changes or meter installations may trigger permit verification</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-rose-400 font-bold">&#8226;</span>
                    <span><strong>Property tax reassessment</strong> -- County assessors compare property records against building permits to identify improvements</span>
                  </li>
                </ul>
              </div>

              <div className="bg-green-900/20 border border-green-500/30 rounded-xl p-6 my-6">
                <h4 className="font-semibold text-green-400 mb-2">The Bottom Line on Permits</h4>
                <p className="text-white/70">
                  Electrical permits exist to protect life and property. The permit fee is a tiny fraction of the overall project cost and provides enormous value: professional plan review, independent inspection, documented compliance, and legal protection. For professional electricians, pulling permits is not optional -- it is a fundamental part of doing business responsibly and protecting your license, your clients, and the public.
                </p>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Quick Reference: Permit Process Checklist</h2>
              <p className="text-white/80 mb-4">
                Use this checklist as a quick reference for any electrical permit project:
              </p>
              <div className="bg-white/5 rounded-xl p-6 my-4">
                <h3 className="font-semibold text-rose-400 mb-4">Before Applying</h3>
                <ul className="space-y-2 text-white/70 text-sm mb-6">
                  <li className="flex items-start gap-2">
                    <span className="text-rose-400">&#9744;</span>
                    <span>Confirm permit is required for your scope of work</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-rose-400">&#9744;</span>
                    <span>Identify the type of permit needed (residential, commercial, specialty)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-rose-400">&#9744;</span>
                    <span>Determine if plan review is required</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-rose-400">&#9744;</span>
                    <span>Prepare all required documentation and drawings</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-rose-400">&#9744;</span>
                    <span>Calculate load (if service upgrade or new construction)</span>
                  </li>
                </ul>

                <h3 className="font-semibold text-amber-400 mb-4">During the Project</h3>
                <ul className="space-y-2 text-white/70 text-sm mb-6">
                  <li className="flex items-start gap-2">
                    <span className="text-amber-400">&#9744;</span>
                    <span>Post permit card visibly at the job site</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-400">&#9744;</span>
                    <span>Keep approved plans on site and accessible</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-400">&#9744;</span>
                    <span>Schedule inspections at required stages</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-400">&#9744;</span>
                    <span>Do not cover work until rough-in is approved</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-400">&#9744;</span>
                    <span>Address any corrections promptly</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-400">&#9744;</span>
                    <span>Monitor permit expiration date</span>
                  </li>
                </ul>

                <h3 className="font-semibold text-green-400 mb-4">After Completion</h3>
                <ul className="space-y-2 text-white/70 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-green-400">&#9744;</span>
                    <span>Pass final inspection</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400">&#9744;</span>
                    <span>Verify permit shows as closed/finalized in the system</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400">&#9744;</span>
                    <span>Obtain certificate of completion (if applicable)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400">&#9744;</span>
                    <span>Obtain utility release (if applicable)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400">&#9744;</span>
                    <span>Retain all permit documentation in project files</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400">&#9744;</span>
                    <span>Provide homeowner with copies of permit and inspection records</span>
                  </li>
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
                    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/></svg>
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
                  <h3 className="font-semibold mt-2">Electrical Inspection Checklist: Pass Your Inspection First Time</h3>
                </Link>
                <Link href="/blog/residential-load-calculations" className="bg-white/5 hover:bg-white/10 rounded-xl p-6 transition-colors">
                  <span className="text-amber-400 text-sm">Calculations</span>
                  <h3 className="font-semibold mt-2">Residential Load Calculations: NEC Article 220 Guide</h3>
                </Link>
                <Link href="/blog/electrical-service-upgrade-200-amp" className="bg-white/5 hover:bg-white/10 rounded-xl p-6 transition-colors">
                  <span className="text-emerald-400 text-sm">Installation</span>
                  <h3 className="font-semibold mt-2">200-Amp Electrical Service Upgrade Guide</h3>
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
