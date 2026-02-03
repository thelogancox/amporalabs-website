import { Metadata } from "next";
import Link from "next/link";
import { CalculatorPageJsonLd, BreadcrumbJsonLd, HowToJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Wire Sizing Calculator | NEC Ampacity Tables & AWG Guide",
  description: "Free wire sizing calculator for electricians. Calculate proper wire gauge using NEC ampacity tables. Supports 60°C, 75°C, and 90°C temperature ratings with derating factors.",
  keywords: [
    "wire sizing calculator",
    "wire size calculator",
    "electrical wire sizing",
    "conductor sizing",
    "wire gauge calculator",
    "AWG calculator",
    "wire ampacity calculator",
    "NEC wire sizing",
    "wire ampacity chart",
    "conductor ampacity",
    "wire size chart",
    "electrical wire size",
    "NEC table 310.16",
    "wire ampacity table",
    "copper wire sizing",
    "aluminum wire sizing"
  ],
  alternates: {
    canonical: "https://amporalabs.com/calculators/wire-sizing",
  },
  openGraph: {
    title: "Wire Sizing Calculator | NEC Ampacity Tables - Ampora",
    description: "Calculate proper wire gauge using NEC ampacity tables. Supports all temperature ratings and conductor types.",
    url: "https://amporalabs.com/calculators/wire-sizing",
    type: "website",
  },
};

export default function WireSizingCalculator() {
  return (
    <>
      <CalculatorPageJsonLd
        name="Ampora Wire Sizing Calculator"
        description="Free wire sizing calculator based on NEC ampacity tables. Calculate proper conductor size for any electrical circuit."
        url="https://amporalabs.com/calculators/wire-sizing"
      />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "https://amporalabs.com" },
          { name: "Calculators", url: "https://amporalabs.com/calculators" },
          { name: "Wire Sizing Calculator", url: "https://amporalabs.com/calculators/wire-sizing" },
        ]}
      />
      <HowToJsonLd
        name="How to Size Electrical Wire"
        description="Step-by-step guide to selecting the correct wire gauge per NEC requirements"
        steps={[
          { name: "Determine Load Current", text: "Calculate the maximum current the circuit will carry in amperes" },
          { name: "Select Temperature Rating", text: "Choose 60°C, 75°C, or 90°C based on termination ratings" },
          { name: "Apply Ambient Temperature Correction", text: "Apply derating factors if ambient temperature exceeds 30°C" },
          { name: "Apply Conduit Fill Adjustment", text: "Apply adjustment factors for more than 3 current-carrying conductors" },
          { name: "Select Wire Size", text: "Choose conductor size from NEC Table 310.16 that meets adjusted ampacity" },
        ]}
      />

      <article className="max-w-4xl mx-auto px-6 py-12">
        {/* Breadcrumb */}
        <nav className="text-sm text-white/60 mb-8">
          <Link href="/" className="hover:text-white">Home</Link>
          <span className="mx-2">/</span>
          <Link href="/calculators/wire-sizing" className="hover:text-white">Calculators</Link>
          <span className="mx-2">/</span>
          <span className="text-white">Wire Sizing Calculator</span>
        </nav>

        {/* Hero Section */}
        <header className="mb-12">
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">
            Wire Sizing Calculator
          </h1>
          <p className="text-xl text-white/70 mb-8">
            Calculate the correct wire gauge for any electrical circuit using NEC ampacity tables. Supports copper and aluminum conductors with all temperature ratings.
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

        {/* What is Wire Sizing */}
        <section className="mb-12">
          <h2 className="text-2xl font-display font-bold mb-4">What is Wire Sizing?</h2>
          <p className="text-white/80 mb-4">
            <strong>Wire sizing</strong> is the process of selecting the correct conductor gauge (AWG) for an electrical circuit based on the load current, temperature rating, and installation conditions. Proper wire sizing is essential for safety and NEC code compliance.
          </p>
          <p className="text-white/80">
            Undersized wire can overheat, causing insulation damage, fire hazards, and equipment failure. Oversized wire wastes money and can make installation difficult. The NEC provides ampacity tables to help electricians select the right conductor size.
          </p>
        </section>

        {/* NEC Ampacity Table */}
        <section className="mb-12">
          <h2 className="text-2xl font-display font-bold mb-4">NEC Table 310.16 - Copper Conductor Ampacity</h2>
          <p className="text-white/70 mb-4">
            Allowable ampacities for insulated copper conductors rated 0 through 2000 volts, not more than 3 current-carrying conductors in raceway or cable, ambient temperature of 30°C (86°F).
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-white/20">
                  <th className="py-3 px-4 text-white/60 font-medium">Wire Size (AWG)</th>
                  <th className="py-3 px-4 text-white/60 font-medium">60°C (TW, UF)</th>
                  <th className="py-3 px-4 text-white/60 font-medium">75°C (THW, THWN)</th>
                  <th className="py-3 px-4 text-white/60 font-medium">90°C (THHN, XHHW)</th>
                </tr>
              </thead>
              <tbody className="text-white/80">
                <tr className="border-b border-white/10">
                  <td className="py-3 px-4">14 AWG</td>
                  <td className="py-3 px-4">15A</td>
                  <td className="py-3 px-4">15A</td>
                  <td className="py-3 px-4">15A*</td>
                </tr>
                <tr className="border-b border-white/10">
                  <td className="py-3 px-4">12 AWG</td>
                  <td className="py-3 px-4">20A</td>
                  <td className="py-3 px-4">20A</td>
                  <td className="py-3 px-4">20A*</td>
                </tr>
                <tr className="border-b border-white/10">
                  <td className="py-3 px-4">10 AWG</td>
                  <td className="py-3 px-4">30A</td>
                  <td className="py-3 px-4">35A</td>
                  <td className="py-3 px-4">40A</td>
                </tr>
                <tr className="border-b border-white/10">
                  <td className="py-3 px-4">8 AWG</td>
                  <td className="py-3 px-4">40A</td>
                  <td className="py-3 px-4">50A</td>
                  <td className="py-3 px-4">55A</td>
                </tr>
                <tr className="border-b border-white/10">
                  <td className="py-3 px-4">6 AWG</td>
                  <td className="py-3 px-4">55A</td>
                  <td className="py-3 px-4">65A</td>
                  <td className="py-3 px-4">75A</td>
                </tr>
                <tr className="border-b border-white/10">
                  <td className="py-3 px-4">4 AWG</td>
                  <td className="py-3 px-4">70A</td>
                  <td className="py-3 px-4">85A</td>
                  <td className="py-3 px-4">95A</td>
                </tr>
                <tr className="border-b border-white/10">
                  <td className="py-3 px-4">3 AWG</td>
                  <td className="py-3 px-4">85A</td>
                  <td className="py-3 px-4">100A</td>
                  <td className="py-3 px-4">115A</td>
                </tr>
                <tr className="border-b border-white/10">
                  <td className="py-3 px-4">2 AWG</td>
                  <td className="py-3 px-4">95A</td>
                  <td className="py-3 px-4">115A</td>
                  <td className="py-3 px-4">130A</td>
                </tr>
                <tr className="border-b border-white/10">
                  <td className="py-3 px-4">1 AWG</td>
                  <td className="py-3 px-4">110A</td>
                  <td className="py-3 px-4">130A</td>
                  <td className="py-3 px-4">145A</td>
                </tr>
                <tr className="border-b border-white/10">
                  <td className="py-3 px-4">1/0 AWG</td>
                  <td className="py-3 px-4">125A</td>
                  <td className="py-3 px-4">150A</td>
                  <td className="py-3 px-4">170A</td>
                </tr>
                <tr>
                  <td className="py-3 px-4">2/0 AWG</td>
                  <td className="py-3 px-4">145A</td>
                  <td className="py-3 px-4">175A</td>
                  <td className="py-3 px-4">195A</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-white/60 text-sm mt-4">
            *NEC 240.4(D) limits 14 AWG to 15A, 12 AWG to 20A, and 10 AWG to 30A regardless of ampacity.
          </p>
        </section>

        {/* Temperature Derating */}
        <section className="mb-12">
          <h2 className="text-2xl font-display font-bold mb-4">Ambient Temperature Correction Factors</h2>
          <p className="text-white/70 mb-4">
            When the ambient temperature exceeds 30°C (86°F), ampacity must be reduced using correction factors from NEC Table 310.15(B)(1).
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-white/20">
                  <th className="py-3 px-4 text-white/60 font-medium">Ambient Temp (°C)</th>
                  <th className="py-3 px-4 text-white/60 font-medium">60°C Wire</th>
                  <th className="py-3 px-4 text-white/60 font-medium">75°C Wire</th>
                  <th className="py-3 px-4 text-white/60 font-medium">90°C Wire</th>
                </tr>
              </thead>
              <tbody className="text-white/80">
                <tr className="border-b border-white/10">
                  <td className="py-3 px-4">31-35°C</td>
                  <td className="py-3 px-4">0.91</td>
                  <td className="py-3 px-4">0.94</td>
                  <td className="py-3 px-4">0.96</td>
                </tr>
                <tr className="border-b border-white/10">
                  <td className="py-3 px-4">36-40°C</td>
                  <td className="py-3 px-4">0.82</td>
                  <td className="py-3 px-4">0.88</td>
                  <td className="py-3 px-4">0.91</td>
                </tr>
                <tr className="border-b border-white/10">
                  <td className="py-3 px-4">41-45°C</td>
                  <td className="py-3 px-4">0.71</td>
                  <td className="py-3 px-4">0.82</td>
                  <td className="py-3 px-4">0.87</td>
                </tr>
                <tr>
                  <td className="py-3 px-4">46-50°C</td>
                  <td className="py-3 px-4">0.58</td>
                  <td className="py-3 px-4">0.75</td>
                  <td className="py-3 px-4">0.82</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Conduit Fill Adjustment */}
        <section className="mb-12">
          <h2 className="text-2xl font-display font-bold mb-4">Conduit Fill Adjustment Factors</h2>
          <p className="text-white/70 mb-4">
            When more than 3 current-carrying conductors are bundled together, ampacity must be reduced per NEC 310.15(C)(1).
          </p>
          <div className="bg-white/5 rounded-2xl p-6">
            <div className="grid grid-cols-2 gap-4 text-white/80">
              <div>4-6 conductors:</div><div className="font-semibold">80%</div>
              <div>7-9 conductors:</div><div className="font-semibold">70%</div>
              <div>10-20 conductors:</div><div className="font-semibold">50%</div>
              <div>21-30 conductors:</div><div className="font-semibold">45%</div>
              <div>31-40 conductors:</div><div className="font-semibold">40%</div>
              <div>41+ conductors:</div><div className="font-semibold">35%</div>
            </div>
          </div>
        </section>

        {/* Example Calculation */}
        <section className="mb-12">
          <h2 className="text-2xl font-display font-bold mb-4">Wire Sizing Example</h2>
          <div className="bg-white/5 rounded-2xl p-6">
            <h3 className="text-lg font-semibold mb-3">Problem:</h3>
            <p className="text-white/80 mb-4">
              Size the conductors for a 60A circuit using THHN copper wire in a conduit with 6 current-carrying conductors at an ambient temperature of 40°C.
            </p>

            <h3 className="text-lg font-semibold mb-3">Solution:</h3>
            <div className="text-white/80 space-y-2">
              <p>Required ampacity = 60A ÷ (0.91 × 0.80) = 60 ÷ 0.728 = <strong>82.4A</strong></p>
              <p>From Table 310.16 (90°C column): 4 AWG = 95A</p>
              <p className="text-purple-400 font-semibold">Use 4 AWG THHN copper conductors</p>
            </div>
          </div>
        </section>

        {/* App CTA */}
        <section className="bg-gradient-to-r from-purple-900/30 to-cyan-900/30 rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-display font-bold mb-4">
            Instant Wire Sizing with Ampora
          </h2>
          <p className="text-white/70 mb-6">
            Enter your load, temperature, and conditions - get the right wire size instantly. Includes all NEC tables and automatic derating calculations.
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
