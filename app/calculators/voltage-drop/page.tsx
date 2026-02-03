import { Metadata } from "next";
import Link from "next/link";
import { CalculatorPageJsonLd, BreadcrumbJsonLd, HowToJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Voltage Drop Calculator | Free NEC-Compliant Electrical Tool",
  description: "Free voltage drop calculator for electricians. Calculate voltage drop for single-phase and three-phase circuits with NEC compliance. Enter voltage, current, wire gauge, and distance for instant results.",
  keywords: [
    "voltage drop calculator",
    "voltage drop calculation",
    "voltage drop formula",
    "calculate voltage drop",
    "electrical voltage drop",
    "NEC voltage drop",
    "3% voltage drop rule",
    "5% voltage drop",
    "single phase voltage drop",
    "three phase voltage drop",
    "wire voltage drop",
    "circuit voltage drop",
    "voltage drop per foot",
    "voltage drop wire size",
    "VD calculator",
    "electrical voltage calculator"
  ],
  alternates: {
    canonical: "https://amporalabs.com/calculators/voltage-drop",
  },
  openGraph: {
    title: "Voltage Drop Calculator | Free NEC-Compliant Tool - Ampora",
    description: "Calculate voltage drop for electrical circuits instantly. NEC-compliant calculations for single-phase and three-phase systems.",
    url: "https://amporalabs.com/calculators/voltage-drop",
    type: "website",
  },
};

export default function VoltageDropCalculator() {
  return (
    <>
      <CalculatorPageJsonLd
        name="Ampora Voltage Drop Calculator"
        description="Free online voltage drop calculator for electricians. Calculate voltage drop for single-phase and three-phase circuits with NEC compliance."
        url="https://amporalabs.com/calculators/voltage-drop"
      />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "https://amporalabs.com" },
          { name: "Calculators", url: "https://amporalabs.com/calculators" },
          { name: "Voltage Drop Calculator", url: "https://amporalabs.com/calculators/voltage-drop" },
        ]}
      />
      <HowToJsonLd
        name="How to Calculate Voltage Drop"
        description="Step-by-step guide to calculating voltage drop in electrical circuits"
        steps={[
          { name: "Enter Circuit Voltage", text: "Input your source voltage (120V, 208V, 240V, 277V, 480V, etc.)" },
          { name: "Select Phase Type", text: "Choose single-phase or three-phase configuration" },
          { name: "Enter Load Current", text: "Input the load current in amperes" },
          { name: "Select Wire Gauge", text: "Choose the conductor size (AWG or MCM)" },
          { name: "Enter One-Way Distance", text: "Input the one-way wire run distance in feet" },
          { name: "Calculate Results", text: "Get voltage drop in volts and percentage, plus NEC compliance status" },
        ]}
      />

      <article className="max-w-4xl mx-auto px-6 py-12">
        {/* Breadcrumb */}
        <nav className="text-sm text-white/60 mb-8">
          <Link href="/" className="hover:text-white">Home</Link>
          <span className="mx-2">/</span>
          <Link href="/calculators/voltage-drop" className="hover:text-white">Calculators</Link>
          <span className="mx-2">/</span>
          <span className="text-white">Voltage Drop Calculator</span>
        </nav>

        {/* Hero Section */}
        <header className="mb-12">
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">
            Voltage Drop Calculator
          </h1>
          <p className="text-xl text-white/70 mb-8">
            Calculate voltage drop for electrical circuits instantly. NEC-compliant calculations for single-phase and three-phase systems with support for all common wire gauges.
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

        {/* What is Voltage Drop */}
        <section className="mb-12">
          <h2 className="text-2xl font-display font-bold mb-4">What is Voltage Drop?</h2>
          <p className="text-white/80 mb-4">
            <strong>Voltage drop</strong> is the reduction in voltage in an electrical circuit between the source and the load. It occurs due to the resistance of the conductors carrying current. Understanding and calculating voltage drop is critical for proper electrical system design and NEC code compliance.
          </p>
          <p className="text-white/80">
            Excessive voltage drop can cause equipment malfunction, reduced motor efficiency, dimming lights, and overheating conductors. The NEC recommends limiting voltage drop to <strong>3% for branch circuits</strong> and <strong>5% total for feeders and branch circuits combined</strong>.
          </p>
        </section>

        {/* Voltage Drop Formula */}
        <section className="mb-12">
          <h2 className="text-2xl font-display font-bold mb-4">Voltage Drop Formula</h2>

          <div className="bg-white/5 rounded-2xl p-6 mb-6">
            <h3 className="text-lg font-semibold mb-3">Single-Phase Voltage Drop Formula</h3>
            <code className="text-purple-400 text-lg block mb-2">
              VD = (2 × K × I × D) / CM
            </code>
            <p className="text-white/70 text-sm">
              Where: VD = Voltage Drop, K = Resistivity constant (12.9 for copper, 21.2 for aluminum), I = Current in amps, D = One-way distance in feet, CM = Circular mils of conductor
            </p>
          </div>

          <div className="bg-white/5 rounded-2xl p-6">
            <h3 className="text-lg font-semibold mb-3">Three-Phase Voltage Drop Formula</h3>
            <code className="text-purple-400 text-lg block mb-2">
              VD = (1.732 × K × I × D) / CM
            </code>
            <p className="text-white/70 text-sm">
              The three-phase formula uses 1.732 (√3) instead of 2, as three-phase circuits have a different current relationship.
            </p>
          </div>
        </section>

        {/* NEC Requirements */}
        <section className="mb-12">
          <h2 className="text-2xl font-display font-bold mb-4">NEC Voltage Drop Requirements</h2>
          <p className="text-white/80 mb-4">
            According to the <strong>National Electrical Code (NEC)</strong>, voltage drop recommendations are found in several informational notes:
          </p>
          <ul className="list-disc list-inside text-white/80 space-y-2 mb-4">
            <li><strong>NEC 210.19(A) Informational Note No. 4:</strong> Recommends 3% maximum voltage drop for branch circuits</li>
            <li><strong>NEC 215.2(A)(1) Informational Note No. 2:</strong> Recommends 3% maximum voltage drop for feeders</li>
            <li><strong>Combined Total:</strong> 5% maximum from service point to final outlet</li>
          </ul>
          <p className="text-white/80">
            While these are recommendations (not requirements), many electrical inspectors and engineers use them as standards for proper electrical design.
          </p>
        </section>

        {/* Wire Gauge Chart */}
        <section className="mb-12">
          <h2 className="text-2xl font-display font-bold mb-4">Common Wire Gauges for Voltage Drop</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-white/20">
                  <th className="py-3 px-4 text-white/60 font-medium">Wire Size</th>
                  <th className="py-3 px-4 text-white/60 font-medium">Circular Mils</th>
                  <th className="py-3 px-4 text-white/60 font-medium">Ampacity (75°C)</th>
                </tr>
              </thead>
              <tbody className="text-white/80">
                <tr className="border-b border-white/10">
                  <td className="py-3 px-4">14 AWG</td>
                  <td className="py-3 px-4">4,110</td>
                  <td className="py-3 px-4">20A</td>
                </tr>
                <tr className="border-b border-white/10">
                  <td className="py-3 px-4">12 AWG</td>
                  <td className="py-3 px-4">6,530</td>
                  <td className="py-3 px-4">25A</td>
                </tr>
                <tr className="border-b border-white/10">
                  <td className="py-3 px-4">10 AWG</td>
                  <td className="py-3 px-4">10,380</td>
                  <td className="py-3 px-4">35A</td>
                </tr>
                <tr className="border-b border-white/10">
                  <td className="py-3 px-4">8 AWG</td>
                  <td className="py-3 px-4">16,510</td>
                  <td className="py-3 px-4">50A</td>
                </tr>
                <tr className="border-b border-white/10">
                  <td className="py-3 px-4">6 AWG</td>
                  <td className="py-3 px-4">26,240</td>
                  <td className="py-3 px-4">65A</td>
                </tr>
                <tr className="border-b border-white/10">
                  <td className="py-3 px-4">4 AWG</td>
                  <td className="py-3 px-4">41,740</td>
                  <td className="py-3 px-4">85A</td>
                </tr>
                <tr className="border-b border-white/10">
                  <td className="py-3 px-4">2 AWG</td>
                  <td className="py-3 px-4">66,360</td>
                  <td className="py-3 px-4">115A</td>
                </tr>
                <tr>
                  <td className="py-3 px-4">1/0 AWG</td>
                  <td className="py-3 px-4">105,600</td>
                  <td className="py-3 px-4">150A</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Example Calculation */}
        <section className="mb-12">
          <h2 className="text-2xl font-display font-bold mb-4">Voltage Drop Calculation Example</h2>
          <div className="bg-white/5 rounded-2xl p-6">
            <h3 className="text-lg font-semibold mb-3">Problem:</h3>
            <p className="text-white/80 mb-4">
              Calculate the voltage drop for a 120V single-phase circuit with 20 amps load current, using 12 AWG copper wire over a 100-foot one-way distance.
            </p>

            <h3 className="text-lg font-semibold mb-3">Solution:</h3>
            <div className="text-white/80 space-y-2">
              <p>VD = (2 × K × I × D) / CM</p>
              <p>VD = (2 × 12.9 × 20 × 100) / 6,530</p>
              <p>VD = 51,600 / 6,530</p>
              <p className="text-purple-400 font-semibold">VD = 7.9 volts (6.58%)</p>
            </div>

            <p className="text-white/60 mt-4 text-sm">
              This exceeds the 3% recommendation. Consider using 10 AWG wire or reducing the circuit length.
            </p>
          </div>
        </section>

        {/* App CTA */}
        <section className="bg-gradient-to-r from-purple-900/30 to-cyan-900/30 rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-display font-bold mb-4">
            Skip the Math - Use Ampora
          </h2>
          <p className="text-white/70 mb-6">
            Get instant voltage drop calculations on your phone. Enter your values and get results in seconds, including NEC compliance status and wire sizing recommendations.
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
