import { Metadata } from "next";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import { BlogPostingJsonLd, BreadcrumbJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Arc Flash Hazard Analysis: NFPA 70E Compliance Guide",
  description: "Complete guide to arc flash hazard analysis per NFPA 70E. Learn incident energy calculations, PPE categories 1-4, arc flash boundary distances, equipment labeling requirements (NEC 110.16), risk assessment procedures, and how to reduce arc flash hazards.",
  keywords: [
    "arc flash hazard analysis",
    "NFPA 70E compliance",
    "arc flash PPE categories",
    "incident energy analysis",
    "arc flash boundary calculation",
    "arc flash labeling requirements",
    "NEC 110.16",
    "arc flash risk assessment",
    "IEEE 1584",
    "arc flash study"
  ],
  alternates: {
    canonical: "https://amporalabs.com/blog/arc-flash-hazard-analysis",
  },
  openGraph: {
    title: "Arc Flash Hazard Analysis: NFPA 70E Compliance Guide - Ampora",
    description: "Master arc flash hazard analysis with this comprehensive NFPA 70E compliance guide covering incident energy, PPE categories, labeling, and risk assessment.",
    url: "https://amporalabs.com/blog/arc-flash-hazard-analysis",
    type: "article",
    publishedTime: "2025-04-15",
  },
};

function HeroIllustration() {
  return (
    <svg viewBox="0 0 400 180" className="w-full h-40 md:h-48" aria-label="Arc flash warning label with PPE category symbols">
      {/* Background */}
      <rect x="10" y="10" width="380" height="160" rx="4" fill="#1f2937" stroke="#374151" strokeWidth="1"/>

      {/* Warning Label Background */}
      <rect x="30" y="20" width="200" height="140" rx="4" fill="#fbbf24" fillOpacity="0.15" stroke="#fbbf24" strokeWidth="2"/>

      {/* Warning Triangle */}
      <polygon points="130,30 150,62 110,62" fill="none" stroke="#fbbf24" strokeWidth="2.5"/>
      <text x="130" y="57" textAnchor="middle" fill="#fbbf24" fontSize="16" fontWeight="bold">!</text>

      {/* Warning Text */}
      <text x="130" y="78" textAnchor="middle" fill="#fbbf24" fontSize="8" fontWeight="bold">WARNING</text>
      <text x="130" y="88" textAnchor="middle" fill="#fbbf24" fontSize="6" fontWeight="bold">ARC FLASH HAZARD</text>

      {/* Label Fields */}
      <text x="42" y="102" fill="#9ca3af" fontSize="5">Incident Energy:</text>
      <text x="42" y="110" fill="#ef4444" fontSize="7" fontWeight="bold" fontFamily="monospace">12.4 cal/cm²</text>

      <text x="42" y="122" fill="#9ca3af" fontSize="5">Arc Flash Boundary:</text>
      <text x="42" y="130" fill="#ef4444" fontSize="7" fontWeight="bold" fontFamily="monospace">6 ft 2 in</text>

      <text x="140" y="102" fill="#9ca3af" fontSize="5">PPE Category:</text>
      <text x="140" y="110" fill="#ef4444" fontSize="7" fontWeight="bold" fontFamily="monospace">3</text>

      <text x="140" y="122" fill="#9ca3af" fontSize="5">Working Distance:</text>
      <text x="140" y="130" fill="#ef4444" fontSize="7" fontWeight="bold" fontFamily="monospace">18 inches</text>

      <text x="42" y="148" fill="#9ca3af" fontSize="5">Limited Approach:</text>
      <text x="110" y="148" fill="#f59e0b" fontSize="5" fontWeight="bold" fontFamily="monospace">3 ft 6 in</text>

      <text x="140" y="148" fill="#9ca3af" fontSize="5">Restricted Approach:</text>
      <text x="215" y="148" fill="#f59e0b" fontSize="5" fontWeight="bold" fontFamily="monospace">1 ft 0 in</text>

      {/* PPE Category Icons */}
      <g transform="translate(260, 22)">
        <text x="50" y="10" textAnchor="middle" fill="#22d3ee" fontSize="7" fontWeight="bold">PPE CATEGORIES</text>

        {/* Category 1 - Hard hat, safety glasses */}
        <g transform="translate(0, 18)">
          <rect x="0" y="0" width="100" height="26" rx="3" fill="#22c55e" fillOpacity="0.15" stroke="#22c55e" strokeWidth="1"/>
          <circle cx="14" cy="10" r="5" fill="none" stroke="#22c55e" strokeWidth="1.5"/>
          <path d="M9 10 L19 10" stroke="#22c55e" strokeWidth="1"/>
          <text x="26" y="10" fill="#22c55e" fontSize="6" fontWeight="bold">CAT 1</text>
          <text x="26" y="19" fill="#9ca3af" fontSize="4.5">4 cal/cm²</text>
          <text x="70" y="14" fill="#9ca3af" fontSize="4">AR Shirt</text>
        </g>

        {/* Category 2 - Face shield */}
        <g transform="translate(0, 50)">
          <rect x="0" y="0" width="100" height="26" rx="3" fill="#eab308" fillOpacity="0.15" stroke="#eab308" strokeWidth="1"/>
          <circle cx="14" cy="10" r="5" fill="none" stroke="#eab308" strokeWidth="1.5"/>
          <rect x="9" y="12" width="10" height="6" rx="1" fill="none" stroke="#eab308" strokeWidth="1"/>
          <text x="26" y="10" fill="#eab308" fontSize="6" fontWeight="bold">CAT 2</text>
          <text x="26" y="19" fill="#9ca3af" fontSize="4.5">8 cal/cm²</text>
          <text x="70" y="14" fill="#9ca3af" fontSize="4">+ Shield</text>
        </g>

        {/* Category 3 - Flash suit hood */}
        <g transform="translate(0, 82)">
          <rect x="0" y="0" width="100" height="26" rx="3" fill="#f97316" fillOpacity="0.15" stroke="#f97316" strokeWidth="1"/>
          <circle cx="14" cy="8" r="5" fill="none" stroke="#f97316" strokeWidth="1.5"/>
          <path d="M8 13 L8 20 L20 20 L20 13" stroke="#f97316" strokeWidth="1" fill="none"/>
          <text x="26" y="10" fill="#f97316" fontSize="6" fontWeight="bold">CAT 3</text>
          <text x="26" y="19" fill="#9ca3af" fontSize="4.5">25 cal/cm²</text>
          <text x="70" y="14" fill="#9ca3af" fontSize="4">Flash Suit</text>
        </g>

        {/* Category 4 - Full suit */}
        <g transform="translate(0, 114)">
          <rect x="0" y="0" width="100" height="26" rx="3" fill="#ef4444" fillOpacity="0.15" stroke="#ef4444" strokeWidth="1"/>
          <circle cx="14" cy="8" r="6" fill="none" stroke="#ef4444" strokeWidth="1.5"/>
          <rect x="8" y="14" width="12" height="10" rx="1" fill="none" stroke="#ef4444" strokeWidth="1.5"/>
          <text x="26" y="10" fill="#ef4444" fontSize="6" fontWeight="bold">CAT 4</text>
          <text x="26" y="19" fill="#9ca3af" fontSize="4.5">40 cal/cm²</text>
          <text x="70" y="14" fill="#9ca3af" fontSize="4">Full Suit</text>
        </g>
      </g>
    </svg>
  );
}

export default function ArcFlashHazardAnalysisPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navigation />
      <div className="pt-20">
        <BreadcrumbJsonLd
          items={[
            { name: "Home", url: "https://amporalabs.com" },
            { name: "Blog", url: "https://amporalabs.com/blog" },
            { name: "Arc Flash Hazard Analysis", url: "https://amporalabs.com/blog/arc-flash-hazard-analysis" },
          ]}
        />
        <BlogPostingJsonLd
          headline="Arc Flash Hazard Analysis: NFPA 70E Compliance Guide"
          description="Complete guide to arc flash hazard analysis per NFPA 70E covering incident energy calculations, PPE categories, labeling requirements, and risk assessment procedures."
          datePublished="2025-04-15"
          dateModified="2025-04-15"
          url="https://amporalabs.com/blog/arc-flash-hazard-analysis"
          wordCount={4200}
          keywords={["arc flash hazard analysis", "NFPA 70E", "incident energy", "PPE categories", "arc flash labeling"]}
        />

        <article className="max-w-4xl mx-auto px-6 py-12">
          {/* Breadcrumb */}
          <nav className="text-sm text-white/60 mb-8">
            <Link href="/" className="hover:text-white">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/blog" className="hover:text-white">Blog</Link>
            <span className="mx-2">/</span>
            <span className="text-white">Arc Flash Hazard Analysis</span>
          </nav>

          {/* Article Header */}
          <header className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <span className="px-3 py-1 bg-red-600/30 text-red-300 text-sm font-medium rounded-full">
                Safety
              </span>
              <span className="text-white/40 text-sm">15 min read</span>
              <span className="text-white/40 text-sm">April 15, 2025</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6 leading-tight">
              Arc Flash Hazard Analysis: NFPA 70E Compliance Guide
            </h1>
            <p className="text-xl text-white/70">
              Arc flash incidents cause severe burns, blast injuries, and fatalities every year. This guide covers the complete arc flash hazard analysis process per NFPA 70E, including incident energy calculations, PPE category selection, equipment labeling requirements, approach boundaries, and practical strategies for reducing arc flash hazards on the job.
            </p>
          </header>

          <div className="mb-12 bg-gradient-to-br from-red-900/20 to-cyan-900/20 rounded-2xl p-6 border border-white/10">
            <HeroIllustration />
          </div>

          {/* Safety Warning */}
          <div className="bg-red-900/40 border-2 border-red-500/50 rounded-2xl p-6 mb-12">
            <div className="flex items-start gap-4">
              <div className="text-3xl">&#9888;</div>
              <div>
                <h3 className="font-display font-bold text-lg mb-2 text-red-400">Critical Safety Information</h3>
                <p className="text-white/80 text-sm">
                  This article is for educational purposes only. Arc flash hazard analysis must be performed by qualified engineers using approved methods. Always follow your employer&apos;s electrical safety program, obtain proper training, and wear appropriate PPE. Arc flash incidents can cause death, severe burns, and permanent injury.
                </p>
              </div>
            </div>
          </div>

          {/* Table of Contents */}
          <div className="bg-white/5 rounded-2xl p-6 mb-12">
            <h2 className="font-display font-bold mb-4">In This Guide</h2>
            <ul className="space-y-2 text-white/70">
              <li><a href="#what-is-arc-flash" className="hover:text-purple-400">What Is Arc Flash and Why Is It Dangerous?</a></li>
              <li><a href="#nfpa-70e-overview" className="hover:text-purple-400">NFPA 70E Overview and Relationship to NEC</a></li>
              <li><a href="#incident-energy-analysis" className="hover:text-purple-400">Incident Energy Analysis Methods</a></li>
              <li><a href="#arc-flash-boundary" className="hover:text-purple-400">Arc Flash Boundary Calculations</a></li>
              <li><a href="#ppe-categories" className="hover:text-purple-400">PPE Categories (1-4) with Cal/cm&sup2; Ratings</a></li>
              <li><a href="#labeling-requirements" className="hover:text-purple-400">Arc Flash Labeling Requirements (NEC 110.16)</a></li>
              <li><a href="#risk-assessment" className="hover:text-purple-400">Risk Assessment Procedures</a></li>
              <li><a href="#table-vs-incident" className="hover:text-purple-400">Table Method vs Incident Energy Analysis</a></li>
              <li><a href="#arc-flash-study" className="hover:text-purple-400">Steps to Perform an Arc Flash Study</a></li>
              <li><a href="#approach-boundaries" className="hover:text-purple-400">Approach Boundaries: Limited, Restricted, Prohibited</a></li>
              <li><a href="#reducing-hazards" className="hover:text-purple-400">Reducing Arc Flash Hazards</a></li>
              <li><a href="#common-failures" className="hover:text-purple-400">Common Compliance Failures</a></li>
            </ul>
          </div>

          {/* Article Content */}
          <div className="prose prose-invert prose-lg max-w-none">

            <section id="what-is-arc-flash" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">What Is Arc Flash and Why Is It Dangerous?</h2>
              <p className="text-white/80 mb-4">
                An <strong>arc flash</strong> is a sudden, explosive release of electrical energy that occurs when current flows through ionized air between conductors or from a conductor to ground. Arc flash events generate extreme heat, blinding light, pressure waves, and toxic gases that can cause severe injury or death.
              </p>
              <p className="text-white/80 mb-4">
                The temperatures at the arc point can reach <strong>35,000&deg;F (19,400&deg;C)</strong> &mdash; roughly four times the temperature of the sun&apos;s surface. At these temperatures, copper conductors vaporize instantly, expanding to 67,000 times their solid volume and creating a violent pressure wave known as an <strong>arc blast</strong>.
              </p>

              <div className="grid md:grid-cols-2 gap-6 my-6">
                <div className="bg-red-900/30 rounded-xl p-6">
                  <h3 className="font-semibold text-red-400 mb-3">Arc Flash Effects</h3>
                  <ul className="text-white/60 text-sm space-y-1">
                    <li><strong>Thermal burns:</strong> Up to 35,000&deg;F at arc point</li>
                    <li><strong>Ignition:</strong> Non-FR clothing catches fire on the body</li>
                    <li><strong>UV radiation:</strong> Retinal damage and flash blindness</li>
                    <li><strong>Toxic gases:</strong> Vaporized copper and insulation fumes</li>
                    <li><strong>Molten metal:</strong> Shrapnel of molten copper droplets</li>
                  </ul>
                </div>
                <div className="bg-orange-900/30 rounded-xl p-6">
                  <h3 className="font-semibold text-orange-400 mb-3">Arc Blast Effects</h3>
                  <ul className="text-white/60 text-sm space-y-1">
                    <li><strong>Pressure wave:</strong> 1,000+ psi at the arc point</li>
                    <li><strong>Sound blast:</strong> 140+ dB causing permanent hearing loss</li>
                    <li><strong>Projectiles:</strong> Equipment fragments, bus bar sections</li>
                    <li><strong>Physical force:</strong> Workers thrown across rooms</li>
                    <li><strong>Concussive impact:</strong> Head injuries from falls and impacts</li>
                  </ul>
                </div>
              </div>

              <div className="bg-white/5 rounded-xl p-6 my-6">
                <h4 className="font-semibold text-cyan-400 mb-3">Arc Flash by the Numbers</h4>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                  <div>
                    <p className="text-2xl font-bold text-red-400">5-10</p>
                    <p className="text-white/60 text-sm">Arc flash incidents per day in the U.S.</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-orange-400">2,000+</p>
                    <p className="text-white/60 text-sm">Workers treated for arc flash burns annually</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-yellow-400">1.2</p>
                    <p className="text-white/60 text-sm">cal/cm&sup2; onset of second-degree burn</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-red-500">400+</p>
                    <p className="text-white/60 text-sm">Fatalities from electrical incidents per year</p>
                  </div>
                </div>
              </div>

              <p className="text-white/80 mb-4">
                Common causes of arc flash events include <strong>accidental contact</strong> with energized conductors, <strong>dropped tools</strong> bridging live parts, <strong>equipment failure</strong> from deteriorated insulation, <strong>contamination</strong> from dust or moisture, <strong>rodent or pest intrusion</strong>, and <strong>improper work practices</strong>. Any electrical equipment operating at 50 volts or more has the potential to produce a hazardous arc flash.
              </p>
            </section>

            <section id="nfpa-70e-overview" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">NFPA 70E Overview and Relationship to NEC</h2>
              <p className="text-white/80 mb-4">
                <strong>NFPA 70E, Standard for Electrical Safety in the Workplace</strong>, is the consensus standard that defines how to protect workers from electrical hazards including arc flash and shock. While the NEC (NFPA 70) governs electrical installation, NFPA 70E governs the work practices that keep people safe around electrical equipment after it is installed and energized.
              </p>

              <div className="grid md:grid-cols-2 gap-6 my-6">
                <div className="bg-white/5 rounded-xl p-6">
                  <h3 className="font-semibold text-cyan-400 mb-3">NEC (NFPA 70)</h3>
                  <ul className="text-white/70 text-sm space-y-1">
                    <li>Governs electrical <strong>installation</strong></li>
                    <li>Enforced by AHJ at time of installation</li>
                    <li>Requires arc flash labels (110.16)</li>
                    <li>Requires working space clearances (110.26)</li>
                    <li>Does not specify PPE or work practices</li>
                  </ul>
                </div>
                <div className="bg-white/5 rounded-xl p-6">
                  <h3 className="font-semibold text-red-400 mb-3">NFPA 70E</h3>
                  <ul className="text-white/70 text-sm space-y-1">
                    <li>Governs electrical <strong>work practices</strong></li>
                    <li>Enforced by employers (OSHA requirement)</li>
                    <li>Specifies PPE requirements and categories</li>
                    <li>Defines approach boundaries</li>
                    <li>Requires arc flash hazard analysis</li>
                  </ul>
                </div>
              </div>

              <p className="text-white/80 mb-4">
                OSHA does not adopt NFPA 70E directly, but references it as the recognized standard for achieving compliance with 29 CFR 1910 Subpart S (General Industry) and 29 CFR 1926 Subpart K (Construction). In practice, OSHA inspectors use NFPA 70E as the benchmark for evaluating employer compliance with electrical safety requirements.
              </p>

              <div className="bg-purple-900/30 rounded-xl p-6 my-6">
                <h4 className="font-semibold text-purple-400 mb-3">Key Standards Involved in Arc Flash</h4>
                <ul className="text-white/70 space-y-2 text-sm">
                  <li><strong>NFPA 70E:</strong> Worker protection requirements, PPE selection, work practices</li>
                  <li><strong>IEEE 1584:</strong> Calculation methods for arc flash incident energy and boundaries</li>
                  <li><strong>NEC 110.16:</strong> Equipment labeling requirements for arc flash hazards</li>
                  <li><strong>OSHA 29 CFR 1910.132-138:</strong> General PPE requirements for employers</li>
                  <li><strong>OSHA 29 CFR 1910.269:</strong> Electric power generation, transmission, and distribution</li>
                </ul>
              </div>
            </section>

            <section id="incident-energy-analysis" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Incident Energy Analysis Methods</h2>
              <p className="text-white/80 mb-4">
                <strong>Incident energy</strong> is the amount of thermal energy impressed on a surface at a given distance from an arc source, measured in <strong>calories per square centimeter (cal/cm&sup2;)</strong>. The incident energy value at the working distance determines the level of PPE protection required.
              </p>

              <h3 className="text-xl font-display font-semibold mb-3 text-cyan-400">IEEE 1584 Method</h3>
              <p className="text-white/80 mb-4">
                The <strong>IEEE 1584-2018, Guide for Performing Arc-Flash Hazard Calculations</strong>, is the most widely used method for calculating incident energy. It provides empirically derived equations based on extensive arc flash testing across a range of voltages, currents, and equipment configurations.
              </p>

              <div className="bg-white/5 rounded-xl p-6 my-6">
                <h4 className="font-semibold text-white mb-3">Key Input Parameters for IEEE 1584</h4>
                <ul className="space-y-2 text-white/70">
                  <li><strong>System voltage (V):</strong> Nominal voltage of the equipment (208V to 15,000V)</li>
                  <li><strong>Bolted fault current (kA):</strong> Maximum available short-circuit current at the equipment</li>
                  <li><strong>Arc clearing time (seconds):</strong> Time for the overcurrent protective device to clear the fault</li>
                  <li><strong>Working distance (inches):</strong> Distance from the arc source to the worker&apos;s face and chest</li>
                  <li><strong>Electrode configuration:</strong> VCB, VCBB, HCB, VOA, or HOA per IEEE 1584-2018</li>
                  <li><strong>Enclosure dimensions:</strong> Width, height, and depth of the equipment enclosure</li>
                  <li><strong>Gap between conductors (mm):</strong> Spacing between bus bars or conductors</li>
                </ul>
              </div>

              <h3 className="text-xl font-display font-semibold mb-3 text-cyan-400">Typical Working Distances</h3>
              <div className="overflow-x-auto my-6">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-white/20">
                      <th className="text-left py-3 px-4 text-white/60">Equipment Type</th>
                      <th className="text-left py-3 px-4 text-white/60">Typical Working Distance</th>
                    </tr>
                  </thead>
                  <tbody className="text-white/80">
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">Panelboards (240V and below)</td>
                      <td className="py-3 px-4 font-mono text-cyan-400">18 inches</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">MCC and switchgear (600V class)</td>
                      <td className="py-3 px-4 font-mono text-cyan-400">24 inches</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">Low-voltage switchgear</td>
                      <td className="py-3 px-4 font-mono text-cyan-400">24 inches</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">Medium-voltage switchgear (5-15kV)</td>
                      <td className="py-3 px-4 font-mono text-cyan-400">36 inches</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4">Cable junctions and splices</td>
                      <td className="py-3 px-4 font-mono text-cyan-400">18 inches</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h3 className="text-xl font-display font-semibold mb-3 text-cyan-400">Factors That Increase Incident Energy</h3>
              <div className="grid md:grid-cols-2 gap-4 my-6">
                <div className="bg-red-900/20 rounded-xl p-4 border border-red-500/20">
                  <p className="font-semibold text-red-400 mb-1">Higher Available Fault Current</p>
                  <p className="text-white/60 text-sm">Larger transformers and shorter conductor runs increase available fault current, which increases arc energy.</p>
                </div>
                <div className="bg-red-900/20 rounded-xl p-4 border border-red-500/20">
                  <p className="font-semibold text-red-400 mb-1">Longer Clearing Times</p>
                  <p className="text-white/60 text-sm">Slower protective devices allow the arc to persist longer, dramatically increasing total incident energy.</p>
                </div>
                <div className="bg-red-900/20 rounded-xl p-4 border border-red-500/20">
                  <p className="font-semibold text-red-400 mb-1">Closer Working Distance</p>
                  <p className="text-white/60 text-sm">Incident energy follows an inverse-distance relationship. Halving the distance roughly quadruples the energy.</p>
                </div>
                <div className="bg-red-900/20 rounded-xl p-4 border border-red-500/20">
                  <p className="font-semibold text-red-400 mb-1">Enclosed Equipment</p>
                  <p className="text-white/60 text-sm">Enclosures focus arc energy toward the opening, increasing incident energy at the working position.</p>
                </div>
              </div>
            </section>

            <section id="arc-flash-boundary" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Arc Flash Boundary Calculations</h2>
              <p className="text-white/80 mb-4">
                The <strong>arc flash boundary (AFB)</strong> is the distance from an arc source at which the incident energy equals <strong>1.2 cal/cm&sup2;</strong> &mdash; the threshold for onset of a second-degree burn on unprotected skin. Anyone crossing the arc flash boundary must wear arc-rated PPE appropriate for the incident energy level at their working distance.
              </p>

              <div className="bg-white/5 rounded-xl p-6 my-6">
                <h4 className="font-semibold text-white mb-3">Arc Flash Boundary Concept</h4>
                <p className="text-white/70 mb-4">
                  Think of the arc flash boundary as an invisible sphere around the potential arc source. The boundary distance varies for every piece of equipment based on:
                </p>
                <ul className="text-white/70 space-y-1">
                  <li>Available fault current at the equipment</li>
                  <li>Protective device clearing time</li>
                  <li>System voltage</li>
                  <li>Equipment configuration (enclosure type and electrode arrangement)</li>
                </ul>
              </div>

              <p className="text-white/80 mb-4">
                For the <strong>IEEE 1584 method</strong>, the arc flash boundary is calculated by solving the incident energy equation for the distance at which energy equals 1.2 cal/cm&sup2;. Software tools such as SKM Power Tools, ETAP, and EasyPower perform this calculation as part of a comprehensive arc flash study.
              </p>

              <div className="bg-orange-900/30 rounded-xl p-6 my-6">
                <h4 className="font-semibold text-orange-400 mb-3">Example Arc Flash Boundaries</h4>
                <p className="text-white/70 mb-3">These are illustrative examples only. Actual boundaries depend on site-specific conditions:</p>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-white/20">
                        <th className="text-left py-2 px-3 text-white/60">Equipment</th>
                        <th className="text-left py-2 px-3 text-white/60">Fault Current</th>
                        <th className="text-left py-2 px-3 text-white/60">Clearing Time</th>
                        <th className="text-left py-2 px-3 text-white/60">AFB</th>
                      </tr>
                    </thead>
                    <tbody className="text-white/80">
                      <tr className="border-b border-white/10">
                        <td className="py-2 px-3">208V Panel, 10kA</td>
                        <td className="py-2 px-3 font-mono">10 kA</td>
                        <td className="py-2 px-3 font-mono">0.03 sec</td>
                        <td className="py-2 px-3 font-mono text-green-400">1.5 ft</td>
                      </tr>
                      <tr className="border-b border-white/10">
                        <td className="py-2 px-3">480V MCC, 25kA</td>
                        <td className="py-2 px-3 font-mono">25 kA</td>
                        <td className="py-2 px-3 font-mono">0.05 sec</td>
                        <td className="py-2 px-3 font-mono text-yellow-400">4.2 ft</td>
                      </tr>
                      <tr className="border-b border-white/10">
                        <td className="py-2 px-3">480V Switchgear, 42kA</td>
                        <td className="py-2 px-3 font-mono">42 kA</td>
                        <td className="py-2 px-3 font-mono">0.10 sec</td>
                        <td className="py-2 px-3 font-mono text-orange-400">8.7 ft</td>
                      </tr>
                      <tr>
                        <td className="py-2 px-3">4160V Switchgear, 30kA</td>
                        <td className="py-2 px-3 font-mono">30 kA</td>
                        <td className="py-2 px-3 font-mono">0.08 sec</td>
                        <td className="py-2 px-3 font-mono text-red-400">18.3 ft</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </section>

            <section id="ppe-categories" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">PPE Categories (1-4) with Cal/cm&sup2; Ratings</h2>
              <p className="text-white/80 mb-4">
                NFPA 70E defines four <strong>PPE categories</strong> that specify the minimum arc rating and required protective equipment for workers exposed to arc flash hazards. The PPE category is determined either by the table method (NFPA 70E Table 130.7(C)(15)(a) and (b)) or by incident energy analysis.
              </p>

              <div className="overflow-x-auto my-6">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-white/20">
                      <th className="text-left py-3 px-4 text-white/60">PPE Category</th>
                      <th className="text-left py-3 px-4 text-white/60">Min Arc Rating</th>
                      <th className="text-left py-3 px-4 text-white/60">Required PPE</th>
                    </tr>
                  </thead>
                  <tbody className="text-white/80">
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-bold text-green-400">Category 1</td>
                      <td className="py-3 px-4 font-mono">4 cal/cm&sup2;</td>
                      <td className="py-3 px-4 text-white/60">Arc-rated long-sleeve shirt and pants, safety glasses or goggles, arc-rated face shield, hearing protection, heavy-duty leather gloves, leather work shoes</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-bold text-yellow-400">Category 2</td>
                      <td className="py-3 px-4 font-mono">8 cal/cm&sup2;</td>
                      <td className="py-3 px-4 text-white/60">Arc-rated long-sleeve shirt and pants, arc-rated face shield or arc flash hood, arc-rated hard hat liner, hearing protection, heavy-duty leather gloves, leather work shoes</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-bold text-orange-400">Category 3</td>
                      <td className="py-3 px-4 font-mono">25 cal/cm&sup2;</td>
                      <td className="py-3 px-4 text-white/60">Arc flash suit hood (with arc-rated hard hat and balaclava), arc-rated coveralls or jacket and pants, arc-rated gloves, hearing protection, heavy-duty leather work shoes</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-bold text-red-400">Category 4</td>
                      <td className="py-3 px-4 font-mono">40 cal/cm&sup2;</td>
                      <td className="py-3 px-4 text-white/60">Arc flash suit hood (with arc-rated hard hat and balaclava), multi-layer arc-rated coveralls or flash suit jacket and pants, arc-rated gloves, hearing protection, heavy-duty leather work shoes</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="bg-red-900/30 rounded-xl p-6 my-6">
                <h4 className="font-semibold text-red-400 mb-3">Above 40 cal/cm&sup2; &mdash; Do Not Work Energized</h4>
                <p className="text-white/70">
                  If the incident energy at the working distance exceeds <strong>40 cal/cm&sup2;</strong>, no PPE category is available. The equipment <strong>must be de-energized</strong> before work is performed. NFPA 70E does not permit energized work above this threshold. Some facilities set administrative limits even lower (e.g., 25 cal/cm&sup2;) to provide an additional safety margin.
                </p>
              </div>

              <h3 className="text-xl font-display font-semibold mb-3 text-cyan-400">PPE Selection Notes</h3>
              <ul className="list-disc list-inside text-white/70 space-y-2 mb-4">
                <li><strong>Arc rating vs. flame resistance:</strong> All arc-rated (AR) clothing is flame-resistant (FR), but not all FR clothing is arc-rated. PPE must have a specific arc rating in cal/cm&sup2;.</li>
                <li><strong>Layering:</strong> Multiple layers of AR clothing can be combined, but the total arc rating is <strong>not the sum</strong> of individual ratings. Layered systems must be tested together.</li>
                <li><strong>Prohibited materials:</strong> Clothing made from polyester, nylon, acetate, rayon, or polypropylene (unless specifically rated) must not be worn as outer layers. These materials can melt and adhere to skin, worsening burns.</li>
                <li><strong>Condition:</strong> PPE must be inspected before each use. Damaged, contaminated (with flammable substances), or excessively worn AR clothing must be replaced.</li>
                <li><strong>100% cotton:</strong> While untreated 100% cotton will not melt, it is <strong>not arc-rated</strong> and will ignite at relatively low incident energy levels. Do not rely on cotton as arc protection.</li>
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

            <section id="labeling-requirements" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Arc Flash Labeling Requirements (NEC 110.16)</h2>
              <p className="text-white/80 mb-4">
                <strong>NEC Section 110.16</strong> requires electrical equipment that is likely to require examination, adjustment, servicing, or maintenance while energized to be field-marked with a label warning of potential arc flash hazards.
              </p>

              <h3 className="text-xl font-display font-semibold mb-3 text-cyan-400">NEC 110.16(A) &mdash; General Warning Label</h3>
              <p className="text-white/80 mb-4">
                At minimum, equipment must be labeled to warn qualified persons of potential arc flash hazards. This general warning label is required on:
              </p>
              <ul className="list-disc list-inside text-white/70 space-y-2 mb-4">
                <li>Switchboards and panelboards</li>
                <li>Industrial control panels</li>
                <li>Meter socket enclosures</li>
                <li>Motor control centers</li>
                <li>Any equipment likely to be serviced or examined while energized</li>
              </ul>

              <h3 className="text-xl font-display font-semibold mb-3 text-cyan-400">NEC 110.16(B) &mdash; Service Equipment Label</h3>
              <p className="text-white/80 mb-4">
                Service equipment rated 1200A or more must be labeled with the <strong>maximum available fault current</strong> and the <strong>date the calculation was performed</strong>. When modifications to the electrical system affect the available fault current, the label must be updated.
              </p>

              <div className="bg-yellow-900/30 rounded-xl p-6 my-6 border border-yellow-500/50">
                <div className="text-center mb-4">
                  <span className="text-yellow-400 font-bold text-lg">&#9888; WARNING &mdash; ARC FLASH AND SHOCK HAZARD &#9888;</span>
                </div>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="text-white/60">Incident Energy at Working Distance:</p>
                    <p className="font-mono text-yellow-400">12.4 cal/cm&sup2; at 18 in</p>
                  </div>
                  <div>
                    <p className="text-white/60">Arc Flash Boundary:</p>
                    <p className="font-mono text-yellow-400">6 ft 2 in</p>
                  </div>
                  <div>
                    <p className="text-white/60">PPE Category:</p>
                    <p className="font-mono text-yellow-400">3</p>
                  </div>
                  <div>
                    <p className="text-white/60">Shock Hazard (Limited Approach):</p>
                    <p className="font-mono text-yellow-400">3 ft 6 in</p>
                  </div>
                  <div>
                    <p className="text-white/60">Available Fault Current:</p>
                    <p className="font-mono text-yellow-400">35,000 A</p>
                  </div>
                  <div>
                    <p className="text-white/60">Date of Study:</p>
                    <p className="font-mono text-yellow-400">04/15/2025</p>
                  </div>
                </div>
                <p className="text-center text-white/50 text-xs mt-4">Appropriate PPE Required Within Arc Flash Boundary</p>
              </div>

              <div className="bg-purple-900/30 rounded-xl p-6 my-6">
                <h4 className="font-semibold text-purple-400 mb-3">Label Best Practices</h4>
                <ul className="text-white/70 space-y-2 text-sm">
                  <li><strong>Placement:</strong> Labels must be clearly visible to qualified persons before they examine, adjust, service, or maintain the equipment</li>
                  <li><strong>Durability:</strong> Labels should withstand the environment (UV exposure, moisture, temperature) for the life of the equipment</li>
                  <li><strong>Color coding:</strong> ANSI Z535 color standards &mdash; orange for WARNING, red for DANGER</li>
                  <li><strong>Update frequency:</strong> Labels must be reviewed whenever the electrical system is modified (added transformers, changed protective devices, altered fault current path)</li>
                  <li><strong>Both sides:</strong> Equipment accessible from multiple directions should have labels visible from each approach</li>
                </ul>
              </div>
            </section>

            <section id="risk-assessment" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Risk Assessment Procedures</h2>
              <p className="text-white/80 mb-4">
                NFPA 70E requires an <strong>arc flash risk assessment</strong> before any worker approaches exposed energized electrical conductors or circuit parts. The risk assessment process identifies hazards, evaluates the risk, and determines the appropriate protective measures.
              </p>

              <div className="space-y-4 my-6">
                <div className="bg-white/5 rounded-xl p-4 flex items-start gap-4">
                  <span className="bg-cyan-600 text-white text-sm font-bold px-3 py-1 rounded-full">1</span>
                  <div>
                    <p className="font-semibold text-white">Identify Hazards</p>
                    <p className="text-white/60 text-sm">Determine if an arc flash hazard exists for the task. Consider the voltage, available fault current, and task being performed. Equipment operating at 50V or more is presumed to pose an arc flash hazard unless proven otherwise.</p>
                  </div>
                </div>
                <div className="bg-white/5 rounded-xl p-4 flex items-start gap-4">
                  <span className="bg-cyan-600 text-white text-sm font-bold px-3 py-1 rounded-full">2</span>
                  <div>
                    <p className="font-semibold text-white">Estimate Likelihood of Occurrence</p>
                    <p className="text-white/60 text-sm">Evaluate the probability that an arc flash event could occur during the specific task. Consider equipment condition, worker proximity, tools required, and task complexity.</p>
                  </div>
                </div>
                <div className="bg-white/5 rounded-xl p-4 flex items-start gap-4">
                  <span className="bg-cyan-600 text-white text-sm font-bold px-3 py-1 rounded-full">3</span>
                  <div>
                    <p className="font-semibold text-white">Determine Potential Severity</p>
                    <p className="text-white/60 text-sm">Calculate or estimate incident energy at the working distance using the incident energy analysis method or PPE category tables. Determine arc flash boundary distance.</p>
                  </div>
                </div>
                <div className="bg-white/5 rounded-xl p-4 flex items-start gap-4">
                  <span className="bg-cyan-600 text-white text-sm font-bold px-3 py-1 rounded-full">4</span>
                  <div>
                    <p className="font-semibold text-white">Select Protective Measures</p>
                    <p className="text-white/60 text-sm">Choose appropriate PPE based on incident energy level or PPE category. Implement engineering controls, administrative controls, and safe work practices to reduce risk.</p>
                  </div>
                </div>
                <div className="bg-white/5 rounded-xl p-4 flex items-start gap-4">
                  <span className="bg-cyan-600 text-white text-sm font-bold px-3 py-1 rounded-full">5</span>
                  <div>
                    <p className="font-semibold text-white">Document the Assessment</p>
                    <p className="text-white/60 text-sm">Record the hazard analysis results, selected PPE, work procedures, and any energized electrical work permit (EEWP) requirements.</p>
                  </div>
                </div>
              </div>

              <div className="bg-orange-900/30 rounded-xl p-6 my-6">
                <h4 className="font-semibold text-orange-400 mb-3">Hierarchy of Risk Controls</h4>
                <p className="text-white/70 mb-3">Apply controls in this order of preference per NFPA 70E 110.1(H):</p>
                <ol className="text-white/70 space-y-2 text-sm list-decimal list-inside">
                  <li><strong>Elimination:</strong> De-energize the equipment (preferred)</li>
                  <li><strong>Substitution:</strong> Use remote racking, remote operation</li>
                  <li><strong>Engineering controls:</strong> Arc-resistant switchgear, current-limiting devices</li>
                  <li><strong>Awareness:</strong> Arc flash labels, warning signs, barriers</li>
                  <li><strong>Administrative controls:</strong> Safe work practices, training, procedures</li>
                  <li><strong>PPE:</strong> Arc-rated clothing and equipment (last resort)</li>
                </ol>
              </div>
            </section>

            <section id="table-vs-incident" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Table Method vs Incident Energy Analysis</h2>
              <p className="text-white/80 mb-4">
                NFPA 70E provides two approaches for determining arc flash PPE requirements. Both are acceptable, but they have different applications, advantages, and limitations.
              </p>

              <div className="grid md:grid-cols-2 gap-6 my-6">
                <div className="bg-white/5 rounded-xl p-6 border border-cyan-500/20">
                  <h3 className="font-semibold text-cyan-400 mb-3">PPE Category Table Method</h3>
                  <p className="text-white/70 text-sm mb-3">NFPA 70E Table 130.7(C)(15)(a) and (b)</p>
                  <ul className="text-white/60 text-sm space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="text-green-400 mt-0.5">&#10003;</span>
                      <span>Simpler to use &mdash; no complex calculations</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-400 mt-0.5">&#10003;</span>
                      <span>Provides prescriptive PPE requirements</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-400 mt-0.5">&#10003;</span>
                      <span>Does not require engineering study</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-400 mt-0.5">&#10007;</span>
                      <span>Can only be used within table parameter limits</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-400 mt-0.5">&#10007;</span>
                      <span>Often results in higher PPE requirements (conservative)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-400 mt-0.5">&#10007;</span>
                      <span>Does not determine actual incident energy values</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-white/5 rounded-xl p-6 border border-purple-500/20">
                  <h3 className="font-semibold text-purple-400 mb-3">Incident Energy Analysis Method</h3>
                  <p className="text-white/70 text-sm mb-3">IEEE 1584 or other approved methods</p>
                  <ul className="text-white/60 text-sm space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="text-green-400 mt-0.5">&#10003;</span>
                      <span>Provides exact incident energy in cal/cm&sup2;</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-400 mt-0.5">&#10003;</span>
                      <span>Often allows lower PPE than table method</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-400 mt-0.5">&#10003;</span>
                      <span>Accurate arc flash boundary calculations</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-400 mt-0.5">&#10003;</span>
                      <span>Works for any equipment configuration</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-400 mt-0.5">&#10007;</span>
                      <span>Requires qualified engineering analysis</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-400 mt-0.5">&#10007;</span>
                      <span>Higher initial cost for study</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="bg-white/5 rounded-xl p-6 my-6">
                <h4 className="font-semibold text-white mb-3">Table Method Parameter Limits</h4>
                <p className="text-white/70 mb-3 text-sm">The PPE category table method can only be used when all of the following conditions are met:</p>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-white/20">
                        <th className="text-left py-2 px-3 text-white/60">Parameter</th>
                        <th className="text-left py-2 px-3 text-white/60">Requirement</th>
                      </tr>
                    </thead>
                    <tbody className="text-white/80">
                      <tr className="border-b border-white/10">
                        <td className="py-2 px-3">Available fault current</td>
                        <td className="py-2 px-3">Must not exceed the maximum listed in the table</td>
                      </tr>
                      <tr className="border-b border-white/10">
                        <td className="py-2 px-3">Fault clearing time</td>
                        <td className="py-2 px-3">Must not exceed the maximum listed in the table</td>
                      </tr>
                      <tr className="border-b border-white/10">
                        <td className="py-2 px-3">Working distance</td>
                        <td className="py-2 px-3">Must be equal to or greater than the distance specified</td>
                      </tr>
                      <tr>
                        <td className="py-2 px-3">Equipment type</td>
                        <td className="py-2 px-3">Must match a listed equipment type in the table</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="text-white/60 text-sm mt-3">If any parameter exceeds table limits, the incident energy analysis method must be used.</p>
              </div>
            </section>

            <section id="arc-flash-study" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Steps to Perform an Arc Flash Study</h2>
              <p className="text-white/80 mb-4">
                A comprehensive arc flash study is a systematic engineering analysis of an electrical system to determine arc flash hazard levels at each piece of equipment. The following steps outline the typical process:
              </p>

              <div className="space-y-4 my-6">
                <div className="bg-white/5 rounded-xl p-6 border-l-4 border-cyan-500">
                  <h4 className="font-semibold text-cyan-400 mb-2">Step 1: Data Collection</h4>
                  <p className="text-white/70 text-sm">
                    Gather complete electrical system data: single-line diagrams, equipment nameplate data, transformer impedances, cable lengths and sizes, protective device types and settings, utility fault current contribution, and equipment configurations. This is often the most time-consuming step.
                  </p>
                </div>

                <div className="bg-white/5 rounded-xl p-6 border-l-4 border-cyan-500">
                  <h4 className="font-semibold text-cyan-400 mb-2">Step 2: System Modeling</h4>
                  <p className="text-white/70 text-sm">
                    Build an electrical system model in analysis software (SKM Power Tools, ETAP, EasyPower, or similar). Input all equipment data, conductor characteristics, and protective device settings. Validate the model against actual system parameters.
                  </p>
                </div>

                <div className="bg-white/5 rounded-xl p-6 border-l-4 border-cyan-500">
                  <h4 className="font-semibold text-cyan-400 mb-2">Step 3: Short-Circuit Analysis</h4>
                  <p className="text-white/70 text-sm">
                    Calculate the available bolted fault current at each bus and equipment location in the system. This determines the maximum energy that could feed an arc fault at each point. Consider both maximum and minimum fault current scenarios.
                  </p>
                </div>

                <div className="bg-white/5 rounded-xl p-6 border-l-4 border-cyan-500">
                  <h4 className="font-semibold text-cyan-400 mb-2">Step 4: Protective Device Coordination</h4>
                  <p className="text-white/70 text-sm">
                    Analyze the time-current characteristics of all protective devices (circuit breakers, fuses, relays) to determine the arc clearing time at each location. The clearing time is the most significant variable affecting incident energy levels.
                  </p>
                </div>

                <div className="bg-white/5 rounded-xl p-6 border-l-4 border-cyan-500">
                  <h4 className="font-semibold text-cyan-400 mb-2">Step 5: Arc Flash Calculations</h4>
                  <p className="text-white/70 text-sm">
                    Calculate incident energy and arc flash boundary at each equipment location using IEEE 1584-2018 or other approved methods. Account for electrode configuration, enclosure size, and working distance specific to each piece of equipment.
                  </p>
                </div>

                <div className="bg-white/5 rounded-xl p-6 border-l-4 border-cyan-500">
                  <h4 className="font-semibold text-cyan-400 mb-2">Step 6: PPE Determination</h4>
                  <p className="text-white/70 text-sm">
                    Based on the calculated incident energy at each location, determine the required PPE category or specific arc rating. Identify any locations where incident energy exceeds 40 cal/cm&sup2; (no energized work permitted).
                  </p>
                </div>

                <div className="bg-white/5 rounded-xl p-6 border-l-4 border-cyan-500">
                  <h4 className="font-semibold text-cyan-400 mb-2">Step 7: Label Generation and Installation</h4>
                  <p className="text-white/70 text-sm">
                    Generate arc flash warning labels for every piece of equipment analyzed. Labels must include incident energy, arc flash boundary, required PPE, limited approach boundary, and restricted approach boundary. Install labels in clearly visible locations.
                  </p>
                </div>

                <div className="bg-white/5 rounded-xl p-6 border-l-4 border-cyan-500">
                  <h4 className="font-semibold text-cyan-400 mb-2">Step 8: Documentation and Training</h4>
                  <p className="text-white/70 text-sm">
                    Compile the complete study report with results, recommendations for hazard reduction, and updated one-line diagrams. Train all qualified workers on the study results, label interpretation, and required PPE for each equipment location.
                  </p>
                </div>
              </div>

              <div className="bg-orange-900/30 rounded-xl p-6 my-6">
                <h4 className="font-semibold text-orange-400 mb-3">When to Update the Arc Flash Study</h4>
                <ul className="text-white/70 space-y-2 text-sm">
                  <li><strong>System modifications:</strong> Added or removed transformers, generators, or large motors</li>
                  <li><strong>Protective device changes:</strong> Replaced breakers, changed fuse types, adjusted relay settings</li>
                  <li><strong>Utility changes:</strong> Utility has modified available fault current at the service entrance</li>
                  <li><strong>Configuration changes:</strong> Normal operating configuration has changed (tie breakers, bus coupler positions)</li>
                  <li><strong>Periodic review:</strong> NFPA 70E recommends reviewing the study at intervals not to exceed 5 years</li>
                </ul>
              </div>
            </section>

            <section id="approach-boundaries" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Approach Boundaries: Limited, Restricted, Prohibited</h2>
              <p className="text-white/80 mb-4">
                NFPA 70E defines three <strong>shock protection approach boundaries</strong> around exposed energized electrical conductors. These boundaries define zones that require increasing levels of training, protection, and authorization to enter.
              </p>

              <div className="space-y-4 my-6">
                <div className="bg-orange-900/30 rounded-xl p-6 border-l-4 border-orange-500">
                  <h3 className="font-semibold text-orange-400 mb-2">Limited Approach Boundary</h3>
                  <p className="text-white/70 text-sm mb-2">
                    The distance from exposed energized conductors within which a <strong>shock hazard exists</strong>. Only qualified persons may enter this boundary. Unqualified persons may enter only when continuously escorted by a qualified person who can ensure they stay outside the restricted approach boundary.
                  </p>
                  <p className="text-white/60 text-xs">Typical 480V: 3 ft 6 in (exposed movable conductors) / 3 ft 6 in (exposed fixed conductors)</p>
                </div>

                <div className="bg-yellow-900/30 rounded-xl p-6 border-l-4 border-yellow-500">
                  <h3 className="font-semibold text-yellow-400 mb-2">Restricted Approach Boundary</h3>
                  <p className="text-white/70 text-sm mb-2">
                    The distance from exposed energized conductors within which there is an <strong>increased risk of shock</strong>. Only qualified persons using shock protection equipment and techniques may work within this boundary. Workers must use insulated tools and control their movements to prevent inadvertent contact.
                  </p>
                  <p className="text-white/60 text-xs">Typical 480V: 1 ft 0 in</p>
                </div>

                <div className="bg-red-900/40 rounded-xl p-6 border-l-4 border-red-600">
                  <h3 className="font-semibold text-red-500 mb-2">Prohibited Approach Boundary</h3>
                  <p className="text-white/70 text-sm mb-2">
                    Crossing this boundary is considered the <strong>same as making direct contact</strong> with energized conductors. Work within this boundary requires the same protections as direct contact: insulated gloves and tools rated for the voltage, or the equipment must be placed in an electrically safe work condition.
                  </p>
                  <p className="text-white/60 text-xs">Typical 480V: 1 inch</p>
                </div>
              </div>

              <h3 className="text-xl font-display font-semibold mb-3 text-cyan-400">Approach Boundary Distances for AC Systems (Table 130.4(E)(a))</h3>
              <div className="overflow-x-auto my-6">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-white/20">
                      <th className="text-left py-3 px-4 text-white/60">Nominal Voltage</th>
                      <th className="text-left py-3 px-4 text-white/60">Limited (Exposed Movable)</th>
                      <th className="text-left py-3 px-4 text-white/60">Restricted</th>
                      <th className="text-left py-3 px-4 text-white/60">Prohibited</th>
                    </tr>
                  </thead>
                  <tbody className="text-white/80">
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">0-50V</td>
                      <td className="py-3 px-4 font-mono text-orange-400">Not specified</td>
                      <td className="py-3 px-4 font-mono text-yellow-400">Not specified</td>
                      <td className="py-3 px-4 font-mono text-red-400">Not specified</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">51-120V</td>
                      <td className="py-3 px-4 font-mono text-orange-400">10 ft 0 in</td>
                      <td className="py-3 px-4 font-mono text-yellow-400">Avoid contact</td>
                      <td className="py-3 px-4 font-mono text-red-400">Avoid contact</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">121-240V</td>
                      <td className="py-3 px-4 font-mono text-orange-400">10 ft 0 in</td>
                      <td className="py-3 px-4 font-mono text-yellow-400">1 ft 0 in</td>
                      <td className="py-3 px-4 font-mono text-red-400">Avoid contact</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">241-600V</td>
                      <td className="py-3 px-4 font-mono text-orange-400">10 ft 0 in</td>
                      <td className="py-3 px-4 font-mono text-yellow-400">1 ft 0 in</td>
                      <td className="py-3 px-4 font-mono text-red-400">1 in</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">601V-2500V</td>
                      <td className="py-3 px-4 font-mono text-orange-400">10 ft 0 in</td>
                      <td className="py-3 px-4 font-mono text-yellow-400">2 ft 2 in</td>
                      <td className="py-3 px-4 font-mono text-red-400">3 in</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4">2501V-15kV</td>
                      <td className="py-3 px-4 font-mono text-orange-400">10 ft 0 in</td>
                      <td className="py-3 px-4 font-mono text-yellow-400">2 ft 7 in</td>
                      <td className="py-3 px-4 font-mono text-red-400">7 in</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-white/60 text-sm">
                Note: These values are for exposed movable conductors. See NFPA 70E Table 130.4(E)(a) for exposed fixed-circuit part distances, which differ for some voltage ranges.
              </p>
            </section>

            <section id="reducing-hazards" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Reducing Arc Flash Hazards</h2>
              <p className="text-white/80 mb-4">
                The most effective strategy for arc flash safety is reducing the incident energy level at each piece of equipment. Lower incident energy means lower PPE requirements, improved worker comfort and dexterity, and a reduced overall risk of injury. Here are the primary methods for reducing arc flash hazards:
              </p>

              <div className="space-y-4 my-6">
                <div className="bg-green-900/20 rounded-xl p-6 border border-green-500/20">
                  <h3 className="font-semibold text-green-400 mb-2">1. Reduce Arc Clearing Time</h3>
                  <p className="text-white/70 text-sm mb-2">
                    Clearing time is the single most impactful variable in the incident energy equation. Strategies include:
                  </p>
                  <ul className="text-white/60 text-sm space-y-1">
                    <li><strong>Zone-selective interlocking (ZSI):</strong> Allows downstream devices to signal upstream devices for instantaneous tripping</li>
                    <li><strong>Maintenance mode settings:</strong> Temporarily lower trip settings on adjustable breakers during maintenance</li>
                    <li><strong>Current-limiting fuses:</strong> Clear faults in less than half a cycle (0.004 seconds)</li>
                    <li><strong>Arc flash relays:</strong> Detect arc light and trip the breaker in 1-3 milliseconds</li>
                    <li><strong>Bus differential protection:</strong> Detects internal faults and trips with no intentional delay</li>
                  </ul>
                </div>

                <div className="bg-green-900/20 rounded-xl p-6 border border-green-500/20">
                  <h3 className="font-semibold text-green-400 mb-2">2. Increase Working Distance</h3>
                  <p className="text-white/70 text-sm">
                    Incident energy decreases with distance. Using extension tools, remote racking devices, and remote operating mechanisms allows workers to perform tasks from a greater distance. Every additional foot of working distance significantly reduces incident energy exposure.
                  </p>
                </div>

                <div className="bg-green-900/20 rounded-xl p-6 border border-green-500/20">
                  <h3 className="font-semibold text-green-400 mb-2">3. Use Arc-Resistant Equipment</h3>
                  <p className="text-white/70 text-sm">
                    Arc-resistant switchgear (rated per IEEE C37.20.7) is designed to redirect arc energy away from the worker through venting panels on the top or rear. This can reduce the incident energy at the front of the equipment to less than 1.2 cal/cm&sup2; when doors are closed.
                  </p>
                </div>

                <div className="bg-green-900/20 rounded-xl p-6 border border-green-500/20">
                  <h3 className="font-semibold text-green-400 mb-2">4. Reduce Available Fault Current</h3>
                  <p className="text-white/70 text-sm">
                    While not always practical, reducing the available fault current reduces arc energy. Methods include using higher-impedance transformers, adding current-limiting reactors, or selecting smaller transformer sizes where appropriate.
                  </p>
                </div>

                <div className="bg-green-900/20 rounded-xl p-6 border border-green-500/20">
                  <h3 className="font-semibold text-green-400 mb-2">5. Implement Engineering Controls</h3>
                  <p className="text-white/70 text-sm mb-2">
                    Design the electrical system and work practices to minimize arc flash exposure:
                  </p>
                  <ul className="text-white/60 text-sm space-y-1">
                    <li><strong>Remote operation:</strong> Remote racking, remote switching, and SCADA controls</li>
                    <li><strong>Infrared windows:</strong> Allow thermal scanning without opening enclosures</li>
                    <li><strong>Permanent metering:</strong> Eliminate the need to take readings inside energized panels</li>
                    <li><strong>Finger-safe components:</strong> IP20 or better protection on bus work and terminations</li>
                  </ul>
                </div>
              </div>
            </section>

            <section id="common-failures" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Common Compliance Failures</h2>
              <p className="text-white/80 mb-4">
                OSHA citations related to arc flash and NFPA 70E compliance are among the most common electrical safety violations. Understanding these frequent failures helps you avoid them in your own facility or on the job site.
              </p>

              <div className="grid md:grid-cols-2 gap-4 my-6">
                <div className="bg-red-900/20 rounded-xl p-6 border border-red-500/20">
                  <h4 className="font-semibold text-red-400 mb-3">Missing or Outdated Labels</h4>
                  <p className="text-white/60 text-sm">
                    Equipment lacks arc flash warning labels entirely, or labels are based on an outdated study that no longer reflects current system conditions. Labels must be updated when the electrical system is modified.
                  </p>
                </div>
                <div className="bg-red-900/20 rounded-xl p-6 border border-red-500/20">
                  <h4 className="font-semibold text-red-400 mb-3">No Arc Flash Study Performed</h4>
                  <p className="text-white/60 text-sm">
                    The facility has never had an arc flash hazard analysis completed. Without a study, workers cannot know the actual incident energy levels or appropriate PPE requirements for each piece of equipment.
                  </p>
                </div>
                <div className="bg-red-900/20 rounded-xl p-6 border border-red-500/20">
                  <h4 className="font-semibold text-red-400 mb-3">Inadequate or Incorrect PPE</h4>
                  <p className="text-white/60 text-sm">
                    Workers wearing the wrong PPE category for the hazard level, wearing non-AR clothing under AR coveralls that could melt, or using damaged/contaminated AR clothing that has lost its protective properties.
                  </p>
                </div>
                <div className="bg-red-900/20 rounded-xl p-6 border border-red-500/20">
                  <h4 className="font-semibold text-red-400 mb-3">Unauthorized Energized Work</h4>
                  <p className="text-white/60 text-sm">
                    Workers performing energized work without proper justification, without an Energized Electrical Work Permit (EEWP), or without the required risk assessment documentation.
                  </p>
                </div>
                <div className="bg-red-900/20 rounded-xl p-6 border border-red-500/20">
                  <h4 className="font-semibold text-red-400 mb-3">Insufficient Training</h4>
                  <p className="text-white/60 text-sm">
                    Qualified persons have not received training on arc flash hazards, PPE selection and use, approach boundaries, or the specific results of the facility&apos;s arc flash study. Training must be documented and kept current.
                  </p>
                </div>
                <div className="bg-red-900/20 rounded-xl p-6 border border-red-500/20">
                  <h4 className="font-semibold text-red-400 mb-3">No Electrical Safety Program</h4>
                  <p className="text-white/60 text-sm">
                    The employer lacks a written electrical safety program as required by NFPA 70E Article 110. The program must include policies, procedures, risk assessment requirements, and training documentation.
                  </p>
                </div>
                <div className="bg-red-900/20 rounded-xl p-6 border border-red-500/20">
                  <h4 className="font-semibold text-red-400 mb-3">Ignoring Table Method Limitations</h4>
                  <p className="text-white/60 text-sm">
                    Using the PPE category table method for equipment where the available fault current or clearing time exceeds the table parameters. In these cases, incident energy analysis is required but is not being performed.
                  </p>
                </div>
                <div className="bg-red-900/20 rounded-xl p-6 border border-red-500/20">
                  <h4 className="font-semibold text-red-400 mb-3">Poor Approach Boundary Enforcement</h4>
                  <p className="text-white/60 text-sm">
                    Failing to establish and enforce approach boundaries around exposed energized conductors. Unqualified persons entering the limited approach boundary, or qualified persons working within restricted boundaries without proper protection.
                  </p>
                </div>
              </div>

              <div className="bg-cyan-900/30 rounded-xl p-6 my-6">
                <h4 className="font-semibold text-cyan-400 mb-3">Best Practice Checklist</h4>
                <ul className="text-white/70 space-y-2 text-sm">
                  <li>&#9744; Current arc flash study completed within the last 5 years</li>
                  <li>&#9744; All equipment properly labeled per NEC 110.16</li>
                  <li>&#9744; Written electrical safety program per NFPA 70E Article 110</li>
                  <li>&#9744; All qualified persons trained and documentation current</li>
                  <li>&#9744; Appropriate PPE available and properly maintained</li>
                  <li>&#9744; Energized electrical work permit process established</li>
                  <li>&#9744; Lockout/tagout procedures written for all equipment</li>
                  <li>&#9744; Approach boundaries known and enforced</li>
                  <li>&#9744; Annual safety program audit conducted</li>
                  <li>&#9744; Arc flash study updated when system modifications occur</li>
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
                <Link href="/blog/electrical-safety-nfpa-70e" className="bg-white/5 hover:bg-white/10 rounded-xl p-6 transition-colors">
                  <span className="text-red-400 text-sm">Safety</span>
                  <h3 className="font-semibold mt-2">NFPA 70E Electrical Safety: Arc Flash PPE & LOTO Guide</h3>
                </Link>
                <Link href="/blog/electrical-fault-current-calculations" className="bg-white/5 hover:bg-white/10 rounded-xl p-6 transition-colors">
                  <span className="text-blue-400 text-sm">Calculations</span>
                  <h3 className="font-semibold mt-2">Electrical Fault Current Calculations</h3>
                </Link>
                <Link href="/blog/electrical-panel-troubleshooting" className="bg-white/5 hover:bg-white/10 rounded-xl p-6 transition-colors">
                  <span className="text-cyan-400 text-sm">Troubleshooting</span>
                  <h3 className="font-semibold mt-2">Electrical Panel Troubleshooting</h3>
                </Link>
                <Link href="/blog/nec-article-240-overcurrent-protection" className="bg-white/5 hover:bg-white/10 rounded-xl p-6 transition-colors">
                  <span className="text-purple-400 text-sm">NEC Code</span>
                  <h3 className="font-semibold mt-2">NEC Article 240: Overcurrent Protection</h3>
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
