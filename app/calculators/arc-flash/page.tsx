import { Metadata } from "next";
import Link from "next/link";
import { CalculatorPageJsonLd, BreadcrumbJsonLd, HowToJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Arc Flash Calculator | Incident Energy & PPE Category Analysis",
  description: "Free arc flash calculator for electricians and safety professionals. Calculate incident energy, arc flash boundary, and required PPE category per NFPA 70E and IEEE 1584 standards.",
  keywords: [
    "arc flash calculator",
    "arc flash analysis",
    "arc flash calculation",
    "incident energy calculator",
    "PPE calculator",
    "arc flash boundary",
    "NFPA 70E",
    "IEEE 1584",
    "arc flash PPE",
    "arc flash hazard",
    "arc flash energy",
    "cal/cm2 calculator",
    "arc flash study",
    "arc flash label",
    "working distance calculator",
    "arc flash boundary calculation"
  ],
  alternates: {
    canonical: "https://amporalabs.com/calculators/arc-flash",
  },
  openGraph: {
    title: "Arc Flash Calculator | Incident Energy Analysis - Ampora",
    description: "Calculate incident energy and PPE requirements per NFPA 70E and IEEE 1584 standards.",
    url: "https://amporalabs.com/calculators/arc-flash",
    type: "website",
  },
};

export default function ArcFlashCalculator() {
  return (
    <>
      <CalculatorPageJsonLd
        name="Ampora Arc Flash Calculator"
        description="Free arc flash calculator for incident energy and PPE category analysis per NFPA 70E and IEEE 1584."
        url="https://amporalabs.com/calculators/arc-flash"
      />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "https://amporalabs.com" },
          { name: "Calculators", url: "https://amporalabs.com/calculators" },
          { name: "Arc Flash Calculator", url: "https://amporalabs.com/calculators/arc-flash" },
        ]}
      />
      <HowToJsonLd
        name="How to Perform Arc Flash Analysis"
        description="Step-by-step guide to calculating arc flash hazards"
        steps={[
          { name: "Gather System Data", text: "Collect available fault current, working distance, and clearing time" },
          { name: "Determine Fault Current", text: "Calculate or measure the available short circuit current at the equipment" },
          { name: "Determine Clearing Time", text: "Find the overcurrent protective device clearing time" },
          { name: "Calculate Incident Energy", text: "Use IEEE 1584 equations to calculate incident energy in cal/cm²" },
          { name: "Determine PPE Category", text: "Select appropriate PPE based on calculated incident energy" },
          { name: "Calculate Arc Flash Boundary", text: "Calculate the distance at which incident energy equals 1.2 cal/cm²" },
        ]}
      />

      <article className="max-w-4xl mx-auto px-6 py-12">
        {/* Breadcrumb */}
        <nav className="text-sm text-white/60 mb-8">
          <Link href="/" className="hover:text-white">Home</Link>
          <span className="mx-2">/</span>
          <Link href="/calculators/arc-flash" className="hover:text-white">Calculators</Link>
          <span className="mx-2">/</span>
          <span className="text-white">Arc Flash Calculator</span>
        </nav>

        {/* Hero Section */}
        <header className="mb-12">
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">
            Arc Flash Calculator
          </h1>
          <p className="text-xl text-white/70 mb-8">
            Calculate incident energy, arc flash boundaries, and required PPE categories for electrical safety. Based on NFPA 70E and IEEE 1584 standards.
          </p>
          <a
            href="https://apps.apple.com/us/app/ampora/id6753693522"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-purple-600 text-white font-semibold rounded-full hover:bg-purple-500 transition-colors"
          >
            Use Calculator in App
          </a>
        </header>

        {/* What is Arc Flash */}
        <section className="mb-12">
          <h2 className="text-2xl font-display font-bold mb-4">What is Arc Flash?</h2>
          <p className="text-white/80 mb-4">
            <strong>Arc flash</strong> is a dangerous electrical explosion that occurs when current flows through air between conductors or from a conductor to ground. The resulting arc can produce temperatures up to 35,000°F (four times hotter than the sun's surface), along with intense light, sound pressure, and shrapnel.
          </p>
          <p className="text-white/80">
            Arc flash hazard analysis is required by OSHA and NFPA 70E to protect workers from these severe hazards. The analysis determines the incident energy at the working distance and the appropriate personal protective equipment (PPE) required.
          </p>
        </section>

        {/* PPE Categories */}
        <section className="mb-12">
          <h2 className="text-2xl font-display font-bold mb-4">NFPA 70E PPE Categories</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-white/20">
                  <th className="py-3 px-4 text-white/60 font-medium">PPE Category</th>
                  <th className="py-3 px-4 text-white/60 font-medium">Incident Energy Range</th>
                  <th className="py-3 px-4 text-white/60 font-medium">Min Arc Rating</th>
                  <th className="py-3 px-4 text-white/60 font-medium">Required PPE</th>
                </tr>
              </thead>
              <tbody className="text-white/80">
                <tr className="border-b border-white/10">
                  <td className="py-3 px-4 font-semibold text-green-400">Category 1</td>
                  <td className="py-3 px-4">1.2 - 4 cal/cm²</td>
                  <td className="py-3 px-4">4 cal/cm²</td>
                  <td className="py-3 px-4">Arc-rated shirt, pants, face shield</td>
                </tr>
                <tr className="border-b border-white/10">
                  <td className="py-3 px-4 font-semibold text-yellow-400">Category 2</td>
                  <td className="py-3 px-4">4 - 8 cal/cm²</td>
                  <td className="py-3 px-4">8 cal/cm²</td>
                  <td className="py-3 px-4">Arc-rated shirt, pants, flash suit hood</td>
                </tr>
                <tr className="border-b border-white/10">
                  <td className="py-3 px-4 font-semibold text-orange-400">Category 3</td>
                  <td className="py-3 px-4">8 - 25 cal/cm²</td>
                  <td className="py-3 px-4">25 cal/cm²</td>
                  <td className="py-3 px-4">Arc flash suit, hood, gloves</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-semibold text-red-400">Category 4</td>
                  <td className="py-3 px-4">25 - 40 cal/cm²</td>
                  <td className="py-3 px-4">40 cal/cm²</td>
                  <td className="py-3 px-4">Multi-layer flash suit, full PPE</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-red-400 text-sm mt-4 font-semibold">
            Work is NOT permitted where incident energy exceeds 40 cal/cm² without additional protection measures.
          </p>
        </section>

        {/* Arc Flash Boundary */}
        <section className="mb-12">
          <h2 className="text-2xl font-display font-bold mb-4">Arc Flash Boundary</h2>
          <p className="text-white/80 mb-4">
            The <strong>arc flash boundary</strong> is the distance from the arc source at which the incident energy equals 1.2 cal/cm² - the energy level that can cause a curable second-degree burn. All personnel within this boundary must wear appropriate PPE.
          </p>
          <div className="bg-white/5 rounded-2xl p-6">
            <h3 className="text-lg font-semibold mb-3">Approach Boundaries (NFPA 70E)</h3>
            <ul className="text-white/80 space-y-2">
              <li><strong>Arc Flash Boundary:</strong> Distance where incident energy = 1.2 cal/cm²</li>
              <li><strong>Limited Approach:</strong> Qualified persons only beyond this point</li>
              <li><strong>Restricted Approach:</strong> Shock hazard exists - PPE required</li>
              <li><strong>Prohibited Approach:</strong> Same as direct contact</li>
            </ul>
          </div>
        </section>

        {/* Key Variables */}
        <section className="mb-12">
          <h2 className="text-2xl font-display font-bold mb-4">Key Arc Flash Variables</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-white/5 rounded-xl p-4">
              <h3 className="font-semibold text-purple-400 mb-2">Available Fault Current</h3>
              <p className="text-white/70 text-sm">The maximum short-circuit current available at the equipment, measured in kA.</p>
            </div>
            <div className="bg-white/5 rounded-xl p-4">
              <h3 className="font-semibold text-purple-400 mb-2">Clearing Time</h3>
              <p className="text-white/70 text-sm">Time for protective device to clear the fault, in seconds or cycles.</p>
            </div>
            <div className="bg-white/5 rounded-xl p-4">
              <h3 className="font-semibold text-purple-400 mb-2">Working Distance</h3>
              <p className="text-white/70 text-sm">Distance from arc source to worker&apos;s face/body, typically 18&quot; for panels.</p>
            </div>
            <div className="bg-white/5 rounded-xl p-4">
              <h3 className="font-semibold text-purple-400 mb-2">System Voltage</h3>
              <p className="text-white/70 text-sm">Nominal system voltage affects arc energy and calculation method.</p>
            </div>
          </div>
        </section>

        {/* IEEE 1584 Formula */}
        <section className="mb-12">
          <h2 className="text-2xl font-display font-bold mb-4">IEEE 1584 Calculation Method</h2>
          <p className="text-white/70 mb-4">
            The IEEE 1584-2018 standard provides empirical equations for calculating incident energy based on extensive testing. The calculation involves:
          </p>
          <div className="bg-white/5 rounded-2xl p-6">
            <ol className="text-white/80 space-y-3 list-decimal list-inside">
              <li><strong>Arcing Current Calculation:</strong> Determine arc current based on available fault current</li>
              <li><strong>Incident Energy Calculation:</strong> Calculate energy at working distance</li>
              <li><strong>Arc Flash Boundary:</strong> Solve for distance where E = 1.2 cal/cm²</li>
            </ol>
            <p className="text-white/60 text-sm mt-4">
              IEEE 1584-2018 provides different equations for systems under 600V, 600V-15kV, and electrode configurations (VCB, VCBB, HCB, VOA, HOA).
            </p>
          </div>
        </section>

        {/* Common Equipment Values */}
        <section className="mb-12">
          <h2 className="text-2xl font-display font-bold mb-4">Typical Working Distances</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-white/20">
                  <th className="py-3 px-4 text-white/60 font-medium">Equipment Type</th>
                  <th className="py-3 px-4 text-white/60 font-medium">Working Distance</th>
                </tr>
              </thead>
              <tbody className="text-white/80">
                <tr className="border-b border-white/10">
                  <td className="py-3 px-4">Panelboards (LV)</td>
                  <td className="py-3 px-4">18 inches (455 mm)</td>
                </tr>
                <tr className="border-b border-white/10">
                  <td className="py-3 px-4">MCC / Switchgear (LV)</td>
                  <td className="py-3 px-4">24 inches (610 mm)</td>
                </tr>
                <tr className="border-b border-white/10">
                  <td className="py-3 px-4">Switchgear (MV)</td>
                  <td className="py-3 px-4">36 inches (914 mm)</td>
                </tr>
                <tr>
                  <td className="py-3 px-4">Cable terminations / splices</td>
                  <td className="py-3 px-4">18 inches (455 mm)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* App CTA */}
        <section className="bg-gradient-to-r from-red-900/30 to-orange-900/30 rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-display font-bold mb-4">
            Stay Safe with Ampora Arc Flash Calculator
          </h2>
          <p className="text-white/70 mb-6">
            Quick arc flash calculations on the job. Enter system parameters and get instant incident energy, PPE category, and arc flash boundary results.
          </p>
          <a
            href="https://apps.apple.com/us/app/ampora/id6753693522"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-black font-semibold rounded-full hover:bg-white/90 transition-colors"
          >
            Download Free on App Store
          </a>
        </section>
      </article>
    </>
  );
}
