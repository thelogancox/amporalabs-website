import { Metadata } from "next";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import { BlogPostingJsonLd, BreadcrumbJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "NEC Article 517: Healthcare Facility Electrical Requirements Guide",
  description: "Comprehensive guide to NEC Article 517 healthcare facility electrical requirements. Learn essential electrical system design including life safety branch, critical branch, and equipment system. Covers hospital grade receptacles, isolated power systems, wet procedure locations, transfer switch and generator requirements, ground fault protection, and patient care vicinity definitions for hospitals and medical facilities.",
  keywords: [
    "nec article 517",
    "healthcare facility electrical",
    "hospital electrical requirements",
    "essential electrical system",
    "life safety branch",
    "critical branch",
    "hospital grade receptacle",
    "isolated power system",
    "healthcare electrical code",
    "medical facility wiring"
  ],
  alternates: {
    canonical: "https://amporalabs.com/blog/nec-article-517-healthcare-electrical",
  },
  openGraph: {
    title: "NEC Article 517: Healthcare Facility Electrical Requirements Guide - Ampora",
    description: "Master healthcare facility electrical requirements with this comprehensive NEC Article 517 guide covering essential electrical systems, hospital grade receptacles, isolated power, and patient care areas.",
    url: "https://amporalabs.com/blog/nec-article-517-healthcare-electrical",
    type: "article",
    publishedTime: "2026-03-04",
  },
};

function HeroIllustration() {
  return (
    <svg viewBox="0 0 400 180" className="w-full h-40 md:h-48" aria-label="Healthcare facility electrical system diagram showing essential electrical system branches">
      {/* Background */}
      <rect x="10" y="10" width="380" height="160" rx="4" fill="#1f2937" stroke="#374151" strokeWidth="1"/>

      {/* Hospital Building Outline */}
      <rect x="25" y="25" width="80" height="60" rx="2" fill="none" stroke="#8b5cf6" strokeWidth="1.5"/>
      <rect x="50" y="20" width="30" height="10" rx="1" fill="#8b5cf6" fillOpacity="0.3" stroke="#8b5cf6" strokeWidth="1"/>
      {/* Cross Symbol */}
      <rect x="57" y="21" width="16" height="3" rx="0.5" fill="#8b5cf6"/>
      <rect x="63" y="18" width="3" height="10" rx="0.5" fill="#8b5cf6"/>
      {/* Hospital Windows */}
      <rect x="32" y="35" width="10" height="8" rx="1" fill="#8b5cf6" fillOpacity="0.15" stroke="#8b5cf6" strokeWidth="0.5"/>
      <rect x="48" y="35" width="10" height="8" rx="1" fill="#8b5cf6" fillOpacity="0.15" stroke="#8b5cf6" strokeWidth="0.5"/>
      <rect x="64" y="35" width="10" height="8" rx="1" fill="#8b5cf6" fillOpacity="0.15" stroke="#8b5cf6" strokeWidth="0.5"/>
      <rect x="80" y="35" width="10" height="8" rx="1" fill="#8b5cf6" fillOpacity="0.15" stroke="#8b5cf6" strokeWidth="0.5"/>
      <rect x="32" y="50" width="10" height="8" rx="1" fill="#8b5cf6" fillOpacity="0.15" stroke="#8b5cf6" strokeWidth="0.5"/>
      <rect x="48" y="50" width="10" height="8" rx="1" fill="#8b5cf6" fillOpacity="0.15" stroke="#8b5cf6" strokeWidth="0.5"/>
      <rect x="64" y="50" width="10" height="8" rx="1" fill="#8b5cf6" fillOpacity="0.15" stroke="#8b5cf6" strokeWidth="0.5"/>
      <rect x="80" y="50" width="10" height="8" rx="1" fill="#8b5cf6" fillOpacity="0.15" stroke="#8b5cf6" strokeWidth="0.5"/>
      {/* Hospital Door */}
      <rect x="55" y="65" width="20" height="20" rx="1" fill="#8b5cf6" fillOpacity="0.2" stroke="#8b5cf6" strokeWidth="1"/>

      {/* Generator Symbol */}
      <rect x="25" y="100" width="50" height="30" rx="3" fill="#22c55e" fillOpacity="0.15" stroke="#22c55e" strokeWidth="1.5"/>
      <text x="50" y="113" textAnchor="middle" fill="#22c55e" fontSize="6" fontWeight="bold">GENERATOR</text>
      <text x="50" y="123" textAnchor="middle" fill="#9ca3af" fontSize="5">10 sec ATS</text>

      {/* Normal Power Feed */}
      <line x1="105" y1="55" x2="135" y2="55" stroke="#60a5fa" strokeWidth="1.5" strokeDasharray="3,2"/>
      <text x="120" y="50" textAnchor="middle" fill="#60a5fa" fontSize="4.5">NORMAL</text>

      {/* Transfer Switch */}
      <rect x="135" y="40" width="40" height="30" rx="2" fill="#f59e0b" fillOpacity="0.15" stroke="#f59e0b" strokeWidth="1.5"/>
      <text x="155" y="53" textAnchor="middle" fill="#f59e0b" fontSize="5" fontWeight="bold">ATS</text>
      <text x="155" y="63" textAnchor="middle" fill="#9ca3af" fontSize="4">Transfer</text>

      {/* Generator to ATS line */}
      <line x1="75" y1="115" x2="155" y2="115" stroke="#22c55e" strokeWidth="1" strokeDasharray="3,2"/>
      <line x1="155" y1="70" x2="155" y2="115" stroke="#22c55e" strokeWidth="1" strokeDasharray="3,2"/>
      <text x="115" y="111" textAnchor="middle" fill="#22c55e" fontSize="4">EMERGENCY</text>

      {/* Three Branches from ATS */}
      <line x1="175" y1="48" x2="210" y2="28" stroke="#ef4444" strokeWidth="1.5"/>
      <line x1="175" y1="55" x2="210" y2="55" stroke="#f59e0b" strokeWidth="1.5"/>
      <line x1="175" y1="62" x2="210" y2="82" stroke="#22d3ee" strokeWidth="1.5"/>

      {/* Life Safety Branch */}
      <rect x="210" y="15" width="110" height="30" rx="3" fill="#ef4444" fillOpacity="0.12" stroke="#ef4444" strokeWidth="1.5"/>
      <text x="265" y="27" textAnchor="middle" fill="#ef4444" fontSize="6" fontWeight="bold">LIFE SAFETY</text>
      <text x="265" y="37" textAnchor="middle" fill="#9ca3af" fontSize="4.5">Exit lights, alarms, OR lighting</text>

      {/* Critical Branch */}
      <rect x="210" y="50" width="110" height="30" rx="3" fill="#f59e0b" fillOpacity="0.12" stroke="#f59e0b" strokeWidth="1.5"/>
      <text x="265" y="62" textAnchor="middle" fill="#f59e0b" fontSize="6" fontWeight="bold">CRITICAL BRANCH</text>
      <text x="265" y="72" textAnchor="middle" fill="#9ca3af" fontSize="4.5">Patient care, isolated power</text>

      {/* Equipment System */}
      <rect x="210" y="85" width="110" height="30" rx="3" fill="#22d3ee" fillOpacity="0.12" stroke="#22d3ee" strokeWidth="1.5"/>
      <text x="265" y="97" textAnchor="middle" fill="#22d3ee" fontSize="6" fontWeight="bold">EQUIPMENT</text>
      <text x="265" y="107" textAnchor="middle" fill="#9ca3af" fontSize="4.5">HVAC, elevators, med air</text>

      {/* Hospital Grade Receptacle */}
      <g transform="translate(335, 18)">
        <rect x="0" y="0" width="45" height="50" rx="3" fill="#22c55e" fillOpacity="0.1" stroke="#22c55e" strokeWidth="1"/>
        <text x="22" y="12" textAnchor="middle" fill="#22c55e" fontSize="5" fontWeight="bold">HG</text>
        {/* Receptacle Face */}
        <rect x="8" y="16" width="28" height="28" rx="2" fill="#1f2937" stroke="#22c55e" strokeWidth="1"/>
        {/* Outlet slots */}
        <rect x="14" y="22" width="2" height="6" rx="0.5" fill="#22c55e"/>
        <rect x="28" y="22" width="2" height="6" rx="0.5" fill="#22c55e"/>
        {/* Ground pin */}
        <circle cx="22" cy="36" r="2" fill="none" stroke="#22c55e" strokeWidth="1"/>
        {/* Green dot indicator */}
        <circle cx="22" cy="48" r="1.5" fill="#22c55e"/>
      </g>

      {/* Isolated Power Panel */}
      <g transform="translate(335, 75)">
        <rect x="0" y="0" width="45" height="45" rx="3" fill="#f59e0b" fillOpacity="0.1" stroke="#f59e0b" strokeWidth="1"/>
        <text x="22" y="12" textAnchor="middle" fill="#f59e0b" fontSize="5" fontWeight="bold">LIM</text>
        {/* Panel face */}
        <rect x="6" y="16" width="32" height="20" rx="2" fill="#1f2937" stroke="#f59e0b" strokeWidth="0.5"/>
        {/* LED indicators */}
        <circle cx="14" cy="23" r="2" fill="#22c55e"/>
        <circle cx="22" cy="23" r="2" fill="#22c55e"/>
        <circle cx="30" cy="23" r="2" fill="#ef4444" fillOpacity="0.3"/>
        <text x="22" y="33" textAnchor="middle" fill="#9ca3af" fontSize="3.5">MONITOR</text>
        <text x="22" y="115" textAnchor="middle" fill="#f59e0b" fontSize="4">Isolated Pwr</text>
      </g>

      {/* 517 Reference Label */}
      <rect x="25" y="140" width="120" height="22" rx="3" fill="#8b5cf6" fillOpacity="0.15" stroke="#8b5cf6" strokeWidth="1"/>
      <text x="85" y="153" textAnchor="middle" fill="#8b5cf6" fontSize="7" fontWeight="bold">NEC ARTICLE 517</text>
      <text x="85" y="160" textAnchor="middle" fill="#9ca3af" fontSize="4">Healthcare Facilities</text>

      {/* Patient Care Area Label */}
      <rect x="160" y="125" width="100" height="38" rx="3" fill="none" stroke="#8b5cf6" strokeWidth="1" strokeDasharray="3,2"/>
      <text x="210" y="138" textAnchor="middle" fill="#8b5cf6" fontSize="5" fontWeight="bold">PATIENT CARE</text>
      <text x="210" y="147" textAnchor="middle" fill="#9ca3af" fontSize="4">General Care: 6 ft</text>
      <text x="210" y="155" textAnchor="middle" fill="#9ca3af" fontSize="4">Critical Care: 6 ft</text>

      {/* Ground Fault Protection */}
      <g transform="translate(275, 125)">
        <rect x="0" y="0" width="95" height="38" rx="3" fill="#ef4444" fillOpacity="0.1" stroke="#ef4444" strokeWidth="1"/>
        <text x="47" y="13" textAnchor="middle" fill="#ef4444" fontSize="5" fontWeight="bold">GFP REQUIREMENTS</text>
        <text x="47" y="23" textAnchor="middle" fill="#9ca3af" fontSize="4">Next level downstream</text>
        <text x="47" y="32" textAnchor="middle" fill="#9ca3af" fontSize="4">No GFP on life safety</text>
      </g>
    </svg>
  );
}

export default function NECArticle517HealthcareElectricalPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navigation />
      <div className="pt-20">
        <BreadcrumbJsonLd
          items={[
            { name: "Home", url: "https://amporalabs.com" },
            { name: "Blog", url: "https://amporalabs.com/blog" },
            { name: "NEC Article 517: Healthcare Facility Electrical", url: "https://amporalabs.com/blog/nec-article-517-healthcare-electrical" },
          ]}
        />
        <BlogPostingJsonLd
          headline="NEC Article 517: Healthcare Facility Electrical Requirements Guide"
          description="Comprehensive guide to NEC Article 517 covering healthcare facility electrical requirements including essential electrical systems, hospital grade receptacles, isolated power systems, and patient care area definitions."
          datePublished="2026-03-04"
          dateModified="2026-03-04"
          url="https://amporalabs.com/blog/nec-article-517-healthcare-electrical"
          wordCount={5200}
          keywords={["nec article 517", "healthcare facility electrical", "essential electrical system", "hospital grade receptacle", "isolated power system"]}
        />

        <article className="max-w-4xl mx-auto px-6 py-12">
          {/* Breadcrumb */}
          <nav className="text-sm text-white/60 mb-8">
            <Link href="/" className="hover:text-white">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/blog" className="hover:text-white">Blog</Link>
            <span className="mx-2">/</span>
            <span className="text-white">NEC Article 517: Healthcare Facility Electrical</span>
          </nav>

          {/* Article Header */}
          <header className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <span className="px-3 py-1 bg-purple-600/20 text-purple-300 text-sm font-medium rounded-full">
                NEC Code
              </span>
              <span className="text-white/40 text-sm">18 min read</span>
              <span className="text-white/40 text-sm">March 4, 2026</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6 leading-tight">
              NEC Article 517: Healthcare Facility Electrical Requirements Guide
            </h1>
            <p className="text-xl text-white/70">
              Healthcare facilities demand the highest level of electrical reliability because lives depend on uninterrupted power. NEC Article 517 establishes the specialized wiring requirements for hospitals, nursing homes, clinics, and other medical facilities. This guide covers the essential electrical system, its three branches, transfer switch and generator requirements, hospital grade receptacles, isolated power systems, wet procedure locations, and the most common code violations found during inspections.
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
                  This article is for educational purposes only. Healthcare facility electrical work must be performed by qualified electricians and engineers familiar with NEC Article 517, NFPA 99, and applicable state and local codes. Always consult the current edition of the NEC and work with the authority having jurisdiction (AHJ) for your specific project.
                </p>
              </div>
            </div>
          </div>

          {/* Table of Contents */}
          <div className="bg-white/5 rounded-2xl p-6 mb-12">
            <h2 className="font-display font-bold mb-4">In This Guide</h2>
            <ul className="space-y-2 text-white/70">
              <li><a href="#scope-and-facility-types" className="hover:text-purple-400">NEC 517 Scope and Healthcare Facility Types</a></li>
              <li><a href="#essential-electrical-system" className="hover:text-purple-400">Essential Electrical System (EES) Overview</a></li>
              <li><a href="#life-safety-branch" className="hover:text-purple-400">Life Safety Branch Requirements</a></li>
              <li><a href="#critical-branch" className="hover:text-purple-400">Critical Branch Requirements</a></li>
              <li><a href="#equipment-system" className="hover:text-purple-400">Equipment System Requirements</a></li>
              <li><a href="#transfer-switches-generators" className="hover:text-purple-400">Transfer Switch and Generator Requirements</a></li>
              <li><a href="#hospital-grade-receptacles" className="hover:text-purple-400">Hospital Grade Receptacle Requirements</a></li>
              <li><a href="#wet-procedure-locations" className="hover:text-purple-400">Wet Procedure Locations</a></li>
              <li><a href="#isolated-power-systems" className="hover:text-purple-400">Isolated Power Systems</a></li>
              <li><a href="#ground-fault-protection" className="hover:text-purple-400">Ground Fault Protection in Healthcare</a></li>
              <li><a href="#patient-care-vicinity" className="hover:text-purple-400">Patient Care Vicinity Definitions</a></li>
              <li><a href="#common-violations" className="hover:text-purple-400">Common NEC 517 Violations</a></li>
            </ul>
          </div>

          {/* Article Content */}
          <div className="prose prose-invert prose-lg max-w-none">

            <section id="scope-and-facility-types" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">NEC 517 Scope and Healthcare Facility Types</h2>
              <p className="text-white/80 mb-4">
                <strong>NEC Article 517</strong> covers the installation of wiring and equipment in healthcare facilities. The scope extends to all locations where patients receive medical diagnosis, treatment, or care &mdash; not just hospitals. Understanding which facility type applies to your project is critical because the electrical requirements become progressively more stringent based on the level of patient care provided.
              </p>
              <p className="text-white/80 mb-4">
                Article 517 works hand-in-hand with <strong>NFPA 99, Health Care Facilities Code</strong>, which classifies facility systems based on risk. The NEC references NFPA 99 for risk category assignments that determine the specific electrical system requirements.
              </p>

              <div className="overflow-x-auto my-6">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-white/20">
                      <th className="text-left py-3 px-4 text-white/60">Facility Type</th>
                      <th className="text-left py-3 px-4 text-white/60">Examples</th>
                      <th className="text-left py-3 px-4 text-white/60">EES Requirement</th>
                    </tr>
                  </thead>
                  <tbody className="text-white/80">
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-bold text-purple-400">Hospitals</td>
                      <td className="py-3 px-4">Acute care hospitals, surgical centers, trauma centers</td>
                      <td className="py-3 px-4 font-mono text-red-400">Type 1 EES (3-branch)</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-bold text-purple-400">Nursing Homes</td>
                      <td className="py-3 px-4">Long-term care, skilled nursing, assisted living with medical</td>
                      <td className="py-3 px-4 font-mono text-orange-400">Type 2 EES (2-branch)</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-bold text-purple-400">Limited Care</td>
                      <td className="py-3 px-4">Ambulatory surgical centers, outpatient surgery, urgent care</td>
                      <td className="py-3 px-4 font-mono text-yellow-400">Type 2 EES (2-branch)</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-bold text-purple-400">Clinics</td>
                      <td className="py-3 px-4">Doctor&apos;s offices, dental offices, outpatient clinics</td>
                      <td className="py-3 px-4 font-mono text-green-400">Varies by procedures</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-bold text-purple-400">Other</td>
                      <td className="py-3 px-4">Freestanding emergency, psychiatric, rehabilitation</td>
                      <td className="py-3 px-4 font-mono text-cyan-400">Per NFPA 99 risk category</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="bg-purple-900/30 rounded-xl p-6 my-6">
                <h4 className="font-semibold text-purple-400 mb-3">Key NEC 517 Definitions</h4>
                <ul className="text-white/70 space-y-2 text-sm">
                  <li><strong>Healthcare Facility:</strong> Buildings or portions of buildings in which medical, dental, psychiatric, nursing, obstetrical, or surgical care is provided (517.2)</li>
                  <li><strong>Patient Care Area:</strong> Any area of a healthcare facility where patients are intended to be examined or treated (517.2)</li>
                  <li><strong>Patient Vicinity:</strong> The space within 6 feet (1.8 m) of the perimeter of a patient bed or treatment area, extending vertically to 7.5 feet (2.3 m) above the floor (517.2)</li>
                  <li><strong>Wet Procedure Location:</strong> Patient care area normally subject to wet conditions while patients are present, including standing fluids on the floor or drenching of the work area (517.2)</li>
                </ul>
              </div>
            </section>

            <section id="essential-electrical-system" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Essential Electrical System (EES) Overview</h2>
              <p className="text-white/80 mb-4">
                The <strong>Essential Electrical System (EES)</strong> is the backbone of healthcare facility electrical design. It comprises the power sources, transfer equipment, distribution systems, and connected loads that are designed to provide electrical power during interruption of the normal power source. The EES ensures that critical patient care functions continue without dangerous interruption.
              </p>
              <p className="text-white/80 mb-4">
                NEC 517.25 requires the EES to be divided into separate branches so that a fault on one branch does not compromise the other branches. This separation of branches is fundamental to the reliability of the system.
              </p>

              <div className="grid md:grid-cols-2 gap-6 my-6">
                <div className="bg-white/5 rounded-xl p-6">
                  <h3 className="font-semibold text-red-400 mb-3">Type 1 EES (Hospitals)</h3>
                  <p className="text-white/70 text-sm mb-3">Required for hospitals and critical care facilities per NEC 517.30</p>
                  <ul className="text-white/60 text-sm space-y-1">
                    <li><strong>Life Safety Branch</strong> &mdash; emergency illumination, alarms</li>
                    <li><strong>Critical Branch</strong> &mdash; patient care areas, critical tasks</li>
                    <li><strong>Equipment System</strong> &mdash; mechanical, HVAC, elevators</li>
                    <li>Three separate transfer switches minimum</li>
                    <li>Generator restoration within 10 seconds</li>
                  </ul>
                </div>
                <div className="bg-white/5 rounded-xl p-6">
                  <h3 className="font-semibold text-orange-400 mb-3">Type 2 EES (Nursing/Limited Care)</h3>
                  <p className="text-white/70 text-sm mb-3">Required for nursing homes and limited care per NEC 517.40-517.44</p>
                  <ul className="text-white/60 text-sm space-y-1">
                    <li><strong>Life Safety Branch</strong> &mdash; same as Type 1</li>
                    <li><strong>Critical Branch</strong> &mdash; combined with equipment loads</li>
                    <li>No separate equipment system required</li>
                    <li>Two separate transfer switches minimum</li>
                    <li>Generator restoration within 10 seconds</li>
                  </ul>
                </div>
              </div>

              <div className="bg-white/5 rounded-xl p-6 my-6">
                <h4 className="font-semibold text-cyan-400 mb-3">EES Design Principles</h4>
                <ul className="text-white/70 space-y-2 text-sm">
                  <li><strong>Branch separation:</strong> The life safety branch and critical branch must be kept independent &mdash; separate raceways, separate transfer switches, and separate overcurrent devices</li>
                  <li><strong>Wiring integrity:</strong> EES wiring is required to be mechanically protected (run in metal raceways, Type MI cable, or Schedule 80 PVC in concrete) per 517.30(C)(3)</li>
                  <li><strong>Load limitation:</strong> Only specifically permitted loads may be connected to each branch &mdash; no unauthorized connections are allowed</li>
                  <li><strong>Selective coordination:</strong> Overcurrent protective devices serving the EES must be <Link href="/blog/nec-article-240-overcurrent-protection" className="text-purple-400 hover:text-purple-300 underline">selectively coordinated</Link> for the full range of overcurrent conditions per 517.26</li>
                </ul>
              </div>
            </section>

            <section id="life-safety-branch" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Life Safety Branch Requirements</h2>
              <p className="text-white/80 mb-4">
                The <strong>life safety branch</strong> supplies power to a limited number of circuits that are considered essential to protecting life and facilitating evacuation during a power failure. This branch is the highest priority of the essential electrical system and must be connected to the alternate power source (generator) automatically with a maximum restoration time of <strong>10 seconds</strong>.
              </p>
              <p className="text-white/80 mb-4">
                Per NEC 517.33, no additional loads may be connected to the life safety branch beyond those specifically listed. This strict limitation protects the branch from overloading and ensures that life-critical circuits remain operational.
              </p>

              <div className="bg-red-900/30 rounded-xl p-6 my-6">
                <h4 className="font-semibold text-red-400 mb-3">Life Safety Branch Permitted Loads (517.33)</h4>
                <ul className="text-white/70 space-y-2 text-sm">
                  <li><strong>Illumination of means of egress:</strong> Exit signs, stairwell lighting, corridor lighting required for safe evacuation paths</li>
                  <li><strong>Exit signs:</strong> All required exit signs and exit directional signs</li>
                  <li><strong>Alarm and alerting systems:</strong> Fire alarms, medical gas alarms, and other alarm systems required for life safety</li>
                  <li><strong>Hospital communication systems:</strong> Emergency communication systems where required for life safety functions</li>
                  <li><strong>Generator set location:</strong> Task illumination, selected receptacles, and ventilation at the generator set location</li>
                  <li><strong>Elevator cab lighting, communication, and ventilation:</strong> When the elevator system is not on the equipment system</li>
                  <li><strong>Automatic doors:</strong> Used for building egress</li>
                </ul>
              </div>

              <div className="bg-orange-900/30 rounded-xl p-6 my-6">
                <h4 className="font-semibold text-orange-400 mb-3">Life Safety Branch Wiring Rules</h4>
                <ul className="text-white/70 space-y-2 text-sm">
                  <li>Must have its own dedicated automatic transfer switch (ATS)</li>
                  <li>Wiring must be kept entirely independent of all other wiring and equipment</li>
                  <li>No multiwire branch circuits permitted on the life safety branch</li>
                  <li>Must be mechanically protected &mdash; metal raceways, Type MI cable, or Schedule 80 PVC embedded in not less than 2 inches of concrete</li>
                  <li>The life safety branch must never share a raceway with other branches</li>
                </ul>
              </div>
            </section>

            <section id="critical-branch" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Critical Branch Requirements</h2>
              <p className="text-white/80 mb-4">
                The <strong>critical branch</strong> supplies power to task illumination, fixed equipment, selected receptacles, and selected power circuits serving patient care areas and other areas that are deemed critical to patient safety during a power interruption. Like the life safety branch, the critical branch must be restored within <strong>10 seconds</strong> of a normal power failure.
              </p>

              <div className="bg-yellow-900/30 rounded-xl p-6 my-6">
                <h4 className="font-semibold text-yellow-400 mb-3">Critical Branch Permitted Loads (517.34)</h4>
                <ul className="text-white/70 space-y-2 text-sm">
                  <li><strong>Patient care area task illumination and receptacles:</strong> Lighting and receptacles at the patient bedside, in anesthetizing locations, and other critical care areas</li>
                  <li><strong>Isolated power systems:</strong> Isolated power circuits in special environments per 517.160</li>
                  <li><strong>Operating rooms, delivery rooms, trauma rooms:</strong> Task illumination and selected receptacles</li>
                  <li><strong>Nurse call systems:</strong> Communication between patients and nursing staff</li>
                  <li><strong>Blood banks, bone banks, tissue banks:</strong> Refrigeration and preservation equipment</li>
                  <li><strong>Pharmacy dispensing areas:</strong> Automated dispensing and pharmaceutical refrigeration</li>
                  <li><strong>In-vitro fertilization equipment:</strong> Where applicable</li>
                  <li><strong>Stairway pressurization systems:</strong> Where required for smoke control</li>
                  <li><strong>Smoke control and stair pressurization:</strong> Where connected per 517.34(A)(9)</li>
                </ul>
              </div>

              <p className="text-white/80 mb-4">
                NEC 517.34(B) permits the critical branch to supply subdistribution panels from a single critical branch transfer switch, as long as the panels serve only loads permitted on the critical branch. This arrangement simplifies distribution while maintaining code compliance.
              </p>

              <div className="bg-white/5 rounded-xl p-6 my-6">
                <h4 className="font-semibold text-white mb-3">Critical Branch vs Life Safety Branch</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <p className="text-red-400 font-semibold text-sm mb-2">Life Safety (517.33)</p>
                    <ul className="text-white/60 text-sm space-y-1">
                      <li>Egress illumination</li>
                      <li>Exit signs</li>
                      <li>Fire alarms</li>
                      <li>Generator room circuits</li>
                      <li>Strictly limited loads</li>
                    </ul>
                  </div>
                  <div>
                    <p className="text-yellow-400 font-semibold text-sm mb-2">Critical (517.34)</p>
                    <ul className="text-white/60 text-sm space-y-1">
                      <li>Patient care task lighting</li>
                      <li>Isolated power systems</li>
                      <li>Nurse call systems</li>
                      <li>Critical care receptacles</li>
                      <li>More extensive load list</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            <section id="equipment-system" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Equipment System Requirements</h2>
              <p className="text-white/80 mb-4">
                The <strong>equipment system</strong> supplies power to major building equipment that, while important to patient care and facility operation, does not require the immediate 10-second restoration of the life safety and critical branches. Equipment system loads are typically connected to the generator through delayed automatic or manual transfer switches.
              </p>

              <div className="bg-cyan-900/30 rounded-xl p-6 my-6">
                <h4 className="font-semibold text-cyan-400 mb-3">Equipment System Loads (517.35)</h4>
                <div className="space-y-4">
                  <div>
                    <p className="text-white font-semibold text-sm mb-1">Automatic Connection (Delayed)</p>
                    <ul className="text-white/70 text-sm space-y-1">
                      <li><strong>HVAC systems:</strong> Heating, cooling, and ventilation equipment serving patient care areas and operating rooms</li>
                      <li><strong>Supply, return, and exhaust ventilation for:</strong> Operating rooms, delivery rooms, isolation rooms, and critical areas</li>
                      <li><strong>Medical air compressors and vacuum systems:</strong> Where required for patient care</li>
                      <li><strong>Smoke management systems:</strong> Not served by the life safety or critical branch</li>
                    </ul>
                  </div>
                  <div>
                    <p className="text-white font-semibold text-sm mb-1">Automatic or Manual Connection</p>
                    <ul className="text-white/70 text-sm space-y-1">
                      <li><strong>Elevators:</strong> Selected elevators for patient transport and evacuation</li>
                      <li><strong>Heating equipment:</strong> Building heating for patient comfort when normal power is extended</li>
                      <li><strong>Refrigeration equipment:</strong> Non-critical refrigeration for food storage</li>
                      <li><strong>Additional equipment:</strong> As determined by the governing body per NFPA 99</li>
                    </ul>
                  </div>
                </div>
              </div>

              <p className="text-white/80 mb-4">
                The equipment system must be arranged so that its loads are automatically shed in a prioritized sequence if the generator capacity is insufficient to handle all equipment system loads simultaneously. This load-shedding capability prevents generator overload and protects the higher-priority life safety and critical branches.
              </p>
            </section>

            <section id="transfer-switches-generators" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Transfer Switch and Generator Requirements</h2>
              <p className="text-white/80 mb-4">
                The <strong>automatic transfer switch (ATS)</strong> is the critical link between normal power and emergency power in a healthcare facility. NEC Article 517 and NFPA 110 establish strict requirements for transfer switches and generators to ensure reliable switchover during power failures. For more on <Link href="/blog/emergency-standby-power-systems" className="text-purple-400 hover:text-purple-300 underline">emergency standby power system</Link> design, see our dedicated guide.
              </p>

              <h3 className="text-xl font-display font-semibold mb-3 text-cyan-400">Transfer Switch Requirements</h3>
              <div className="space-y-4 my-6">
                <div className="bg-white/5 rounded-xl p-4 flex items-start gap-4">
                  <span className="bg-purple-600 text-white text-sm font-bold px-3 py-1 rounded-full">1</span>
                  <div>
                    <p className="font-semibold text-white">Minimum Number of Transfer Switches</p>
                    <p className="text-white/60 text-sm">Type 1 EES (hospitals): minimum 3 ATS units &mdash; one each for life safety, critical, and equipment branches. Type 2 EES: minimum 2 ATS units &mdash; one for life safety, one for critical/equipment combined.</p>
                  </div>
                </div>
                <div className="bg-white/5 rounded-xl p-4 flex items-start gap-4">
                  <span className="bg-purple-600 text-white text-sm font-bold px-3 py-1 rounded-full">2</span>
                  <div>
                    <p className="font-semibold text-white">Transfer Time</p>
                    <p className="text-white/60 text-sm">Life safety and critical branch transfer switches must restore power within 10 seconds of a power failure. Equipment system transfer may be delayed per design to prevent generator overload during startup.</p>
                  </div>
                </div>
                <div className="bg-white/5 rounded-xl p-4 flex items-start gap-4">
                  <span className="bg-purple-600 text-white text-sm font-bold px-3 py-1 rounded-full">3</span>
                  <div>
                    <p className="font-semibold text-white">Bypass-Isolation</p>
                    <p className="text-white/60 text-sm">Bypass-isolation transfer switches are recommended (and often required by the AHJ) to allow maintenance and testing of the ATS without interrupting power to the essential system branch.</p>
                  </div>
                </div>
                <div className="bg-white/5 rounded-xl p-4 flex items-start gap-4">
                  <span className="bg-purple-600 text-white text-sm font-bold px-3 py-1 rounded-full">4</span>
                  <div>
                    <p className="font-semibold text-white">Location</p>
                    <p className="text-white/60 text-sm">Transfer switches must be accessible to authorized persons only and must not be installed in hazardous locations. They should be located as close as practical to the load they serve.</p>
                  </div>
                </div>
              </div>

              <h3 className="text-xl font-display font-semibold mb-3 text-cyan-400">Generator Requirements</h3>
              <div className="grid md:grid-cols-2 gap-6 my-6">
                <div className="bg-white/5 rounded-xl p-6">
                  <h4 className="font-semibold text-white mb-3">Sizing and Capacity</h4>
                  <ul className="text-white/60 text-sm space-y-1">
                    <li>Must supply all loads connected to the EES simultaneously</li>
                    <li>Must carry motor starting loads plus running loads</li>
                    <li>Typically sized at 1.25x calculated connected load minimum</li>
                    <li>Fuel supply for minimum operation per NFPA 110 (varies by Type)</li>
                    <li>Must be rated for continuous duty</li>
                  </ul>
                </div>
                <div className="bg-white/5 rounded-xl p-6">
                  <h4 className="font-semibold text-white mb-3">Testing and Maintenance</h4>
                  <ul className="text-white/60 text-sm space-y-1">
                    <li>Monthly testing under load per NFPA 110</li>
                    <li>Annual full-load transfer test</li>
                    <li>Battery starting system maintained and tested</li>
                    <li>Fuel system inspection and fuel quality testing</li>
                    <li>Written maintenance log required</li>
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

            <section id="hospital-grade-receptacles" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Hospital Grade Receptacle Requirements</h2>
              <p className="text-white/80 mb-4">
                <strong>Hospital grade receptacles</strong> are specially designed and tested to meet the rigorous demands of healthcare environments. NEC 517.18 and 517.19 establish specific requirements for receptacles in patient care areas, including the type, number, and configuration of receptacles at each patient location.
              </p>

              <div className="grid md:grid-cols-2 gap-6 my-6">
                <div className="bg-white/5 rounded-xl p-6">
                  <h3 className="font-semibold text-green-400 mb-3">General Care Areas (517.18)</h3>
                  <ul className="text-white/70 text-sm space-y-2">
                    <li><strong>Minimum receptacles:</strong> Each patient bed location requires a minimum of <strong>8 receptacles</strong></li>
                    <li><strong>Hospital grade:</strong> All receptacles must be listed as &quot;hospital grade&quot; and identified by a green dot on the face</li>
                    <li><strong>Grounding:</strong> Equipment grounding must comply with 517.13 &mdash; redundant grounding path required</li>
                    <li><strong>Branch circuits:</strong> Each patient bed must be served by at least <strong>2 branch circuits</strong> from the normal system</li>
                    <li><strong>Emergency power:</strong> At least one branch circuit at each patient bed from the critical branch</li>
                  </ul>
                </div>
                <div className="bg-white/5 rounded-xl p-6">
                  <h3 className="font-semibold text-red-400 mb-3">Critical Care Areas (517.19)</h3>
                  <ul className="text-white/70 text-sm space-y-2">
                    <li><strong>Minimum receptacles:</strong> Each patient bed location requires a minimum of <strong>14 receptacles</strong></li>
                    <li><strong>Hospital grade:</strong> All must be hospital grade with green dot identification</li>
                    <li><strong>Emergency circuits:</strong> At least one branch circuit from the critical branch required</li>
                    <li><strong>Normal + emergency:</strong> Receptacles supplied from both normal and emergency sources must be identified</li>
                    <li><strong>Operating rooms:</strong> Must have at least <strong>36 receptacles</strong> per OR (typical practice)</li>
                  </ul>
                </div>
              </div>

              <div className="bg-green-900/30 rounded-xl p-6 my-6">
                <h4 className="font-semibold text-green-400 mb-3">Hospital Grade Receptacle Identification</h4>
                <p className="text-white/70 mb-3">Hospital grade receptacles are identified and distinguished from standard grade in several ways:</p>
                <ul className="text-white/70 space-y-2 text-sm">
                  <li><strong>Green dot:</strong> A visible green dot on the face of the receptacle indicates hospital grade listing</li>
                  <li><strong>UL 498 testing:</strong> Hospital grade devices undergo 5,000 insertion/withdrawal cycles vs. 500 for standard grade</li>
                  <li><strong>Assembly integrity:</strong> Must pass impact, crush, and assembly integrity tests</li>
                  <li><strong>Grounding reliability:</strong> Enhanced ground contact integrity testing to ensure uninterrupted ground continuity</li>
                  <li><strong>Retention force:</strong> Higher plug retention force to prevent accidental disconnection of critical equipment</li>
                </ul>
              </div>

              <div className="bg-white/5 rounded-xl p-6 my-6">
                <h4 className="font-semibold text-white mb-3">Redundant Grounding (517.13)</h4>
                <p className="text-white/70 text-sm mb-3">
                  NEC 517.13 requires a redundant equipment grounding path in patient care areas. The branch circuit must contain <strong>both</strong> of the following grounding paths:
                </p>
                <ul className="text-white/70 text-sm space-y-1">
                  <li><strong>Metal raceway or cable armor:</strong> A metallic raceway system or metal-clad cable that serves as one grounding path</li>
                  <li><strong>Insulated copper equipment grounding conductor:</strong> A separate insulated copper conductor installed within the raceway or cable assembly</li>
                </ul>
                <p className="text-white/60 text-xs mt-3">Exception: Type MC cable with a continuous corrugated metallic sheath and an internal bonding strip qualifies as both paths when used with listed fittings.</p>
              </div>
            </section>

            <section id="wet-procedure-locations" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Wet Procedure Locations</h2>
              <p className="text-white/80 mb-4">
                <strong>Wet procedure locations</strong> are patient care areas where standing fluids on the floor or drenching of the work area is expected during normal medical procedures. These locations present an elevated risk of electrical shock because wet conditions reduce the body&apos;s contact resistance, allowing dangerous current flow at voltages that would normally be harmless.
              </p>
              <p className="text-white/80 mb-4">
                Per NEC 517.20, wet procedure locations require special electrical protection. The <Link href="/blog/gfci-vs-afci-requirements" className="text-purple-400 hover:text-purple-300 underline">GFCI protection requirements</Link> for these areas differ from standard applications because of the critical nature of the equipment involved.
              </p>

              <div className="grid md:grid-cols-2 gap-6 my-6">
                <div className="bg-white/5 rounded-xl p-6 border border-cyan-500/20">
                  <h3 className="font-semibold text-cyan-400 mb-3">Common Wet Procedure Locations</h3>
                  <ul className="text-white/60 text-sm space-y-1">
                    <li>Operating rooms (not always &mdash; AHJ determines)</li>
                    <li>Cardiac catheterization labs</li>
                    <li>Dialysis treatment areas</li>
                    <li>Hydrotherapy areas</li>
                    <li>Endoscopy suites</li>
                    <li>Cystoscopy procedure rooms</li>
                    <li>Birthing rooms with tubs</li>
                  </ul>
                </div>
                <div className="bg-white/5 rounded-xl p-6 border border-orange-500/20">
                  <h3 className="font-semibold text-orange-400 mb-3">Protection Options (517.20)</h3>
                  <ul className="text-white/70 text-sm space-y-2">
                    <li><strong>Option 1:</strong> Power supplied through an <strong>isolated power system</strong> with line isolation monitor (preferred for critical areas)</li>
                    <li><strong>Option 2:</strong> All circuits protected by <strong>GFCI</strong> (interruption of power is acceptable)</li>
                    <li><strong>Option 3:</strong> Circuits may supply only listed, fixed, therapeutic, and diagnostic equipment with the power interruption evaluated for patient safety</li>
                  </ul>
                </div>
              </div>

              <div className="bg-orange-900/30 rounded-xl p-6 my-6">
                <h4 className="font-semibold text-orange-400 mb-3">Who Designates Wet Procedure Locations?</h4>
                <p className="text-white/70 text-sm">
                  The governing body of the healthcare facility is responsible for designating which areas are wet procedure locations. This designation must be based on the types of procedures performed and the expected conditions during those procedures. The electrical designer must coordinate with the facility&apos;s clinical staff to accurately identify all wet procedure locations <em>before</em> the electrical design is finalized. Incorrect designation is one of the most common sources of NEC 517 violations.
                </p>
              </div>
            </section>

            <section id="isolated-power-systems" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Isolated Power Systems</h2>
              <p className="text-white/80 mb-4">
                An <strong>isolated power system</strong> uses an isolating transformer to create an ungrounded power supply for a specific area, such as an operating room or cardiac catheterization lab. The key advantage is that a single ground fault does not cause an overcurrent device to trip, thereby preventing an unexpected loss of power during a critical medical procedure.
              </p>

              <div className="bg-white/5 rounded-xl p-6 my-6">
                <h4 className="font-semibold text-white mb-3">How Isolated Power Works</h4>
                <div className="space-y-3 text-white/70 text-sm">
                  <p>In a standard grounded electrical system, a ground fault creates a low-impedance path that trips the overcurrent device. In an isolated (ungrounded) power system:</p>
                  <ul className="space-y-1">
                    <li><strong>First fault:</strong> A single ground fault does not complete a circuit &mdash; current cannot flow to ground because neither conductor is referenced to ground. The <strong>line isolation monitor (LIM)</strong> detects the fault and activates a visible and audible alarm, but power is NOT interrupted.</li>
                    <li><strong>Second fault:</strong> If a second ground fault occurs on the opposite conductor while the first fault still exists, a ground fault circuit is now complete. The overcurrent device will then operate as normal.</li>
                  </ul>
                  <p>This &quot;first fault tolerance&quot; is the primary reason isolated power is used in critical medical areas where unexpected loss of power could endanger patients.</p>
                </div>
              </div>

              <h3 className="text-xl font-display font-semibold mb-3 text-cyan-400">Line Isolation Monitor (LIM)</h3>
              <p className="text-white/80 mb-4">
                Per NEC 517.160(A)(5), each isolated power circuit must be provided with a <strong>line isolation monitor (LIM)</strong> that continuously monitors the impedance from each line conductor to ground. The LIM must be designed to:
              </p>

              <div className="grid md:grid-cols-2 gap-4 my-6">
                <div className="bg-yellow-900/20 rounded-xl p-4 border border-yellow-500/20">
                  <p className="font-semibold text-yellow-400 mb-1">Alarm at 5 mA or Less</p>
                  <p className="text-white/60 text-sm">The LIM must activate an alarm when the total hazard current (resistive and capacitive) from either isolated conductor to ground reaches 5 mA. This is well below the threshold that could harm a patient.</p>
                </div>
                <div className="bg-yellow-900/20 rounded-xl p-4 border border-yellow-500/20">
                  <p className="font-semibold text-yellow-400 mb-1">Visible and Audible Alarm</p>
                  <p className="text-white/60 text-sm">The alarm must be clearly visible and audible to staff in the area served. The visible indicator must be located within the area served by the isolated power system, and the audible alarm must be heard in the area.</p>
                </div>
                <div className="bg-yellow-900/20 rounded-xl p-4 border border-yellow-500/20">
                  <p className="font-semibold text-yellow-400 mb-1">Do Not Interrupt Power</p>
                  <p className="text-white/60 text-sm">The LIM alarm is a warning only &mdash; it does <strong>not</strong> disconnect power. Staff must investigate the alarm and take appropriate action, but patient care can continue during the first fault.</p>
                </div>
                <div className="bg-yellow-900/20 rounded-xl p-4 border border-yellow-500/20">
                  <p className="font-semibold text-yellow-400 mb-1">Ammeter Display</p>
                  <p className="text-white/60 text-sm">The LIM must include an ammeter or equivalent display that indicates the total hazard current, allowing staff to monitor the system status at a glance.</p>
                </div>
              </div>

              <div className="bg-purple-900/30 rounded-xl p-6 my-6">
                <h4 className="font-semibold text-purple-400 mb-3">Isolated Power System Components (517.160)</h4>
                <ul className="text-white/70 space-y-2 text-sm">
                  <li><strong>Isolating transformer:</strong> Listed for use in isolated power systems, typically 120V secondary, single-phase</li>
                  <li><strong>Line isolation monitor (LIM):</strong> Monitors hazard current and alarms at 5 mA threshold</li>
                  <li><strong>Ungrounded conductors:</strong> Both circuit conductors are ungrounded (neither is connected to the grounding system)</li>
                  <li><strong>Equipment grounding:</strong> The metal enclosures, transformer case, and all equipment grounds are still connected to the grounding system &mdash; only the circuit conductors are isolated</li>
                  <li><strong>Overcurrent protection:</strong> Standard overcurrent protection is still provided for the isolated circuits</li>
                </ul>
              </div>
            </section>

            <section id="ground-fault-protection" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Ground Fault Protection in Healthcare</h2>
              <p className="text-white/80 mb-4">
                Ground fault protection in healthcare facilities requires special consideration because an unplanned power interruption can be life-threatening. NEC 517.17 establishes specific rules for ground fault protection of equipment (GFP) that differ significantly from standard commercial building requirements.
              </p>
              <p className="text-white/80 mb-4">
                Understanding <Link href="/blog/electrical-fault-current-calculations" className="text-purple-400 hover:text-purple-300 underline">fault current calculations</Link> is essential for properly designing ground fault protection systems in healthcare facilities.
              </p>

              <div className="bg-red-900/30 rounded-xl p-6 my-6">
                <h4 className="font-semibold text-red-400 mb-3">NEC 517.17 Ground Fault Protection Rules</h4>
                <ul className="text-white/70 space-y-3 text-sm">
                  <li>
                    <strong>Additional level required:</strong> Where ground fault protection is provided on the normal service disconnecting means per 230.95, an <strong>additional level of ground fault protection</strong> must be provided on the next level of feeder disconnecting means downstream. This ensures that a ground fault is cleared at the lowest possible level, minimizing the area of the facility affected.
                  </li>
                  <li>
                    <strong>Selective coordination:</strong> The two levels of ground fault protection must be <strong>selectively coordinated</strong> so that the downstream device clears the fault before the upstream device operates. A minimum 6-cycle (0.1 second) separation is required between levels.
                  </li>
                  <li>
                    <strong>No GFP on life safety branch:</strong> Ground fault protection of equipment shall <strong>NOT</strong> be installed on the life safety branch. A nuisance trip on the life safety branch could disable exit lighting, fire alarms, and other life-critical systems during an emergency.
                  </li>
                  <li>
                    <strong>No GFP on critical branch:</strong> Ground fault protection of equipment shall <strong>NOT</strong> be installed on the critical branch for the same reason &mdash; protecting patient care continuity.
                  </li>
                </ul>
              </div>

              <div className="bg-white/5 rounded-xl p-6 my-6">
                <h4 className="font-semibold text-cyan-400 mb-3">GFP vs GFCI in Healthcare</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <p className="text-white font-semibold text-sm mb-2">Ground Fault Protection (GFP) &mdash; 517.17</p>
                    <ul className="text-white/60 text-sm space-y-1">
                      <li>Protects <strong>equipment</strong> from ground fault damage</li>
                      <li>Trips at 30 mA to 1200A+ (equipment level)</li>
                      <li>NOT permitted on life safety or critical branches</li>
                      <li>Required on service entrance per 230.95</li>
                    </ul>
                  </div>
                  <div>
                    <p className="text-white font-semibold text-sm mb-2">GFCI Protection &mdash; 517.20</p>
                    <ul className="text-white/60 text-sm space-y-1">
                      <li>Protects <strong>people</strong> from shock</li>
                      <li>Trips at 5 mA (personnel protection level)</li>
                      <li>Required in wet procedure locations (option 2)</li>
                      <li>Not typically used where power interruption is dangerous</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            <section id="patient-care-vicinity" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Patient Care Vicinity Definitions</h2>
              <p className="text-white/80 mb-4">
                The <strong>patient care vicinity</strong> is a precisely defined zone around a patient bed or procedure table that triggers the most stringent electrical requirements in NEC 517. Understanding and correctly applying this definition is essential for compliant healthcare electrical design.
              </p>

              <div className="bg-white/5 rounded-xl p-6 my-6">
                <h4 className="font-semibold text-white mb-3">Patient Care Vicinity Dimensions (517.2)</h4>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-center">
                  <div>
                    <p className="text-2xl font-bold text-purple-400">6 ft</p>
                    <p className="text-white/60 text-sm">Horizontal distance from bed perimeter</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-purple-400">7.5 ft</p>
                    <p className="text-white/60 text-sm">Vertical height above finished floor</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-purple-400">2.3 m</p>
                    <p className="text-white/60 text-sm">Metric vertical equivalent</p>
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6 my-6">
                <div className="bg-white/5 rounded-xl p-6 border border-green-500/20">
                  <h3 className="font-semibold text-green-400 mb-3">General Care Patient Care Area</h3>
                  <p className="text-white/70 text-sm mb-3">Areas where patients come in contact with ordinary appliances and are expected to be conscious:</p>
                  <ul className="text-white/60 text-sm space-y-1">
                    <li>Medical/surgical patient rooms</li>
                    <li>Examination rooms</li>
                    <li>Treatment rooms</li>
                    <li>Physical therapy areas</li>
                    <li>Infusion therapy areas</li>
                  </ul>
                </div>
                <div className="bg-white/5 rounded-xl p-6 border border-red-500/20">
                  <h3 className="font-semibold text-red-400 mb-3">Critical Care Patient Care Area</h3>
                  <p className="text-white/70 text-sm mb-3">Areas where patients are connected to line-operated, electromedical devices or are unconscious:</p>
                  <ul className="text-white/60 text-sm space-y-1">
                    <li>Intensive care units (ICU/CCU)</li>
                    <li>Operating rooms</li>
                    <li>Post-anesthesia recovery (PACU)</li>
                    <li>Cardiac catheterization labs</li>
                    <li>Angiography suites</li>
                  </ul>
                </div>
              </div>

              <div className="bg-orange-900/30 rounded-xl p-6 my-6">
                <h4 className="font-semibold text-orange-400 mb-3">Why Patient Care Vicinity Matters</h4>
                <p className="text-white/70 text-sm mb-3">Within the patient care vicinity, NEC 517 imposes special requirements because patients are uniquely vulnerable to electrical hazards:</p>
                <ul className="text-white/70 space-y-2 text-sm">
                  <li><strong>Reduced resistance:</strong> Patients may have broken skin, surgical incisions, or invasive catheters that bypass the body&apos;s natural skin resistance</li>
                  <li><strong>Direct cardiac contact:</strong> Intracardiac catheters or pacing leads create a direct electrical path to the heart, where currents as low as 10 microamperes can cause ventricular fibrillation</li>
                  <li><strong>Inability to react:</strong> Sedated, anesthetized, or restrained patients cannot pull away from an electrical contact</li>
                  <li><strong>Multiple connections:</strong> Patients may be simultaneously connected to multiple pieces of electrical equipment, increasing cumulative leakage current risk</li>
                </ul>
              </div>

              <h3 className="text-xl font-display font-semibold mb-3 text-cyan-400">Equipotential Grounding in Patient Care Areas</h3>
              <p className="text-white/80 mb-4">
                NEC 517.13 and 517.14 require special grounding measures within patient care vicinities to minimize the potential difference between all conductive surfaces that a patient might simultaneously contact. All conductive surfaces within the patient care vicinity &mdash; including bed frames, medical equipment, plumbing fixtures, and building steel &mdash; must be bonded to the <Link href="/blog/electrical-grounding-vs-bonding" className="text-purple-400 hover:text-purple-300 underline">equipment grounding system</Link> through a low-impedance path.
              </p>

              <div className="bg-white/5 rounded-xl p-6 my-6">
                <h4 className="font-semibold text-white mb-3">Maximum Potential Difference</h4>
                <p className="text-white/70 text-sm">
                  The design goal is to keep the potential difference between any two exposed conductive surfaces in the patient care vicinity below <strong>500 millivolts (0.5V)</strong>. In critical care areas, many facilities target even lower values. Periodic testing of the grounding system is recommended to verify that potential differences remain within acceptable limits.
                </p>
              </div>
            </section>

            <section id="common-violations" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Common NEC 517 Violations</h2>
              <p className="text-white/80 mb-4">
                Healthcare facility electrical inspections frequently reveal recurring code violations. Understanding these common issues helps electricians and designers avoid costly rework and ensures patient safety from the start.
              </p>

              <div className="grid md:grid-cols-2 gap-4 my-6">
                <div className="bg-red-900/20 rounded-xl p-6 border border-red-500/20">
                  <h4 className="font-semibold text-red-400 mb-3">Unauthorized Loads on Life Safety</h4>
                  <p className="text-white/60 text-sm">
                    Connecting loads to the life safety branch that are not specifically permitted by 517.33. Common examples include convenience receptacles, vending machines, and non-emergency lighting. Only the loads explicitly listed in 517.33 are permitted.
                  </p>
                </div>
                <div className="bg-red-900/20 rounded-xl p-6 border border-red-500/20">
                  <h4 className="font-semibold text-red-400 mb-3">Branch Wiring Not Separated</h4>
                  <p className="text-white/60 text-sm">
                    Life safety branch wiring sharing a raceway with critical branch or normal power wiring. NEC 517.30(C)(3) requires the life safety and critical branches to be kept in separate raceways from each other and from all other wiring.
                  </p>
                </div>
                <div className="bg-red-900/20 rounded-xl p-6 border border-red-500/20">
                  <h4 className="font-semibold text-red-400 mb-3">Missing Redundant Grounding</h4>
                  <p className="text-white/60 text-sm">
                    Patient care area branch circuits installed without the required redundant equipment grounding path per 517.13. Both a metallic raceway/cable armor AND an insulated copper equipment grounding conductor are required.
                  </p>
                </div>
                <div className="bg-red-900/20 rounded-xl p-6 border border-red-500/20">
                  <h4 className="font-semibold text-red-400 mb-3">Non-Hospital Grade Receptacles</h4>
                  <p className="text-white/60 text-sm">
                    Standard commercial-grade receptacles installed in patient care areas instead of hospital-grade devices with the green dot identifier. All receptacles in patient care areas must be listed hospital grade per 517.18 and 517.19.
                  </p>
                </div>
                <div className="bg-red-900/20 rounded-xl p-6 border border-red-500/20">
                  <h4 className="font-semibold text-red-400 mb-3">Insufficient Receptacle Count</h4>
                  <p className="text-white/60 text-sm">
                    Patient bed locations with fewer than the minimum required receptacles &mdash; 8 minimum for general care (517.18) and 14 minimum for critical care (517.19). Operating rooms require even more based on the equipment being served.
                  </p>
                </div>
                <div className="bg-red-900/20 rounded-xl p-6 border border-red-500/20">
                  <h4 className="font-semibold text-red-400 mb-3">GFP on Essential Branches</h4>
                  <p className="text-white/60 text-sm">
                    Ground fault protection of equipment installed on the life safety or critical branches in violation of 517.17. GFP on these branches creates an unacceptable risk of power interruption during emergencies.
                  </p>
                </div>
                <div className="bg-red-900/20 rounded-xl p-6 border border-red-500/20">
                  <h4 className="font-semibold text-red-400 mb-3">Wet Location Misidentification</h4>
                  <p className="text-white/60 text-sm">
                    Failure to properly identify wet procedure locations, resulting in areas that lack the required isolated power systems or GFCI protection per 517.20. The facility&apos;s governing body must designate these locations.
                  </p>
                </div>
                <div className="bg-red-900/20 rounded-xl p-6 border border-red-500/20">
                  <h4 className="font-semibold text-red-400 mb-3">Missing Selective Coordination</h4>
                  <p className="text-white/60 text-sm">
                    Essential electrical system overcurrent devices that are not selectively coordinated per 517.26. A fault on a downstream device must not trip an upstream device, which would take out a larger portion of the essential system.
                  </p>
                </div>
              </div>

              <div className="bg-cyan-900/30 rounded-xl p-6 my-6">
                <h4 className="font-semibold text-cyan-400 mb-3">NEC 517 Compliance Checklist</h4>
                <ul className="text-white/70 space-y-2 text-sm">
                  <li>&#9744; Essential electrical system branches properly separated with dedicated ATS units</li>
                  <li>&#9744; Life safety branch loads limited to 517.33 permitted loads only</li>
                  <li>&#9744; Critical branch loads limited to 517.34 permitted loads only</li>
                  <li>&#9744; Generator starts and transfers within 10 seconds under test</li>
                  <li>&#9744; All patient care area receptacles are hospital grade (green dot)</li>
                  <li>&#9744; Minimum receptacle counts met at each patient bed location</li>
                  <li>&#9744; Redundant equipment grounding in all patient care areas (517.13)</li>
                  <li>&#9744; Wet procedure locations identified and properly protected (517.20)</li>
                  <li>&#9744; Isolated power systems with functioning LIM where required</li>
                  <li>&#9744; No GFP on life safety or critical branches (517.17)</li>
                  <li>&#9744; Second level of GFP downstream of service entrance GFP</li>
                  <li>&#9744; Selective coordination of EES overcurrent devices (517.26)</li>
                  <li>&#9744; Emergency system wiring in approved raceways per 517.30(C)(3)</li>
                  <li>&#9744; Generator testing and maintenance log current per NFPA 110</li>
                </ul>
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
                <Link href="/blog/emergency-standby-power-systems" className="bg-white/5 hover:bg-white/10 rounded-xl p-6 transition-colors">
                  <span className="text-green-400 text-sm">Installation</span>
                  <h3 className="font-semibold mt-2">Emergency & Standby Power Systems Guide</h3>
                </Link>
                <Link href="/blog/electrical-grounding-vs-bonding" className="bg-white/5 hover:bg-white/10 rounded-xl p-6 transition-colors">
                  <span className="text-blue-400 text-sm">Fundamentals</span>
                  <h3 className="font-semibold mt-2">Electrical Grounding vs Bonding Explained</h3>
                </Link>
                <Link href="/blog/generator-transfer-switch-installation" className="bg-white/5 hover:bg-white/10 rounded-xl p-6 transition-colors">
                  <span className="text-cyan-400 text-sm">Installation</span>
                  <h3 className="font-semibold mt-2">Generator Transfer Switch Installation Guide</h3>
                </Link>
                <Link href="/blog/selective-coordination-requirements" className="bg-white/5 hover:bg-white/10 rounded-xl p-6 transition-colors">
                  <span className="text-purple-400 text-sm">NEC Code</span>
                  <h3 className="font-semibold mt-2">Selective Coordination Requirements Guide</h3>
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
