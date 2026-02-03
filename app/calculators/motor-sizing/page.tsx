import { Metadata } from "next";
import Link from "next/link";
import { CalculatorPageJsonLd, BreadcrumbJsonLd, HowToJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Motor Sizing Calculator | FLC Tables, Protection & Starter Sizing",
  description: "Free motor sizing calculator for electricians. Calculate full load current, overcurrent protection, starter sizing, and conductor sizing per NEC Article 430.",
  keywords: [
    "motor sizing calculator",
    "motor FLC calculator",
    "motor full load current",
    "motor protection sizing",
    "motor HP calculator",
    "NEC motor tables",
    "motor amperage chart",
    "motor circuit calculator",
    "motor overload protection",
    "motor starter sizing",
    "NEC 430",
    "motor branch circuit",
    "motor FLA chart",
    "3 phase motor amps",
    "single phase motor amps"
  ],
  alternates: {
    canonical: "https://amporalabs.com/calculators/motor-sizing",
  },
  openGraph: {
    title: "Motor Sizing Calculator | NEC Motor Tables - Ampora",
    description: "Calculate motor FLC, protection, and conductor sizing per NEC Article 430.",
    url: "https://amporalabs.com/calculators/motor-sizing",
    type: "website",
  },
};

export default function MotorSizingCalculator() {
  return (
    <>
      <CalculatorPageJsonLd
        name="Ampora Motor Sizing Calculator"
        description="Free motor sizing calculator for full load current, protection, and conductor sizing per NEC Article 430."
        url="https://amporalabs.com/calculators/motor-sizing"
      />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "https://amporalabs.com" },
          { name: "Calculators", url: "https://amporalabs.com/calculators" },
          { name: "Motor Sizing Calculator", url: "https://amporalabs.com/calculators/motor-sizing" },
        ]}
      />
      <HowToJsonLd
        name="How to Size Motor Circuits"
        description="Step-by-step guide to sizing motor branch circuits per NEC Article 430"
        steps={[
          { name: "Determine Full Load Current", text: "Use NEC Tables 430.247-250 based on motor HP and voltage" },
          { name: "Size Conductors", text: "Conductors must be at least 125% of motor FLC per NEC 430.22" },
          { name: "Size Overload Protection", text: "Select overload device at 115-125% of motor nameplate FLA" },
          { name: "Size Short-Circuit Protection", text: "Size per NEC Table 430.52 based on motor type" },
          { name: "Select Starter", text: "Choose NEMA starter size based on motor HP and voltage" },
        ]}
      />

      <article className="max-w-4xl mx-auto px-6 py-12">
        {/* Breadcrumb */}
        <nav className="text-sm text-white/60 mb-8">
          <Link href="/" className="hover:text-white">Home</Link>
          <span className="mx-2">/</span>
          <Link href="/calculators/motor-sizing" className="hover:text-white">Calculators</Link>
          <span className="mx-2">/</span>
          <span className="text-white">Motor Sizing Calculator</span>
        </nav>

        {/* Hero Section */}
        <header className="mb-12">
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">
            Motor Sizing Calculator
          </h1>
          <p className="text-xl text-white/70 mb-8">
            Calculate motor full load current, overcurrent protection, conductor sizing, and starter selection per NEC Article 430.
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

        {/* What is Motor Sizing */}
        <section className="mb-12">
          <h2 className="text-2xl font-display font-bold mb-4">What is Motor Sizing?</h2>
          <p className="text-white/80 mb-4">
            <strong>Motor sizing</strong> involves properly selecting conductors, overcurrent protection, and controllers for motor branch circuits. The NEC Article 430 provides specific requirements that differ from standard branch circuit rules.
          </p>
          <p className="text-white/80">
            Motor circuits require special consideration due to high starting currents (typically 6-8× FLC) and the need for both overload protection (thermal) and short-circuit protection (magnetic).
          </p>
        </section>

        {/* Three-Phase Motor FLC Table */}
        <section className="mb-12">
          <h2 className="text-2xl font-display font-bold mb-4">Three-Phase Motor FLC (NEC Table 430.250)</h2>
          <p className="text-white/70 mb-4">
            Full-load currents for three-phase AC motors at various voltages:
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-white/20">
                  <th className="py-3 px-4 text-white/60 font-medium">HP</th>
                  <th className="py-3 px-4 text-white/60 font-medium">208V</th>
                  <th className="py-3 px-4 text-white/60 font-medium">230V</th>
                  <th className="py-3 px-4 text-white/60 font-medium">460V</th>
                  <th className="py-3 px-4 text-white/60 font-medium">575V</th>
                </tr>
              </thead>
              <tbody className="text-white/80">
                <tr className="border-b border-white/10">
                  <td className="py-3 px-4">1</td>
                  <td className="py-3 px-4">4.6A</td>
                  <td className="py-3 px-4">4.2A</td>
                  <td className="py-3 px-4">2.1A</td>
                  <td className="py-3 px-4">1.7A</td>
                </tr>
                <tr className="border-b border-white/10">
                  <td className="py-3 px-4">3</td>
                  <td className="py-3 px-4">11.0A</td>
                  <td className="py-3 px-4">9.6A</td>
                  <td className="py-3 px-4">4.8A</td>
                  <td className="py-3 px-4">3.9A</td>
                </tr>
                <tr className="border-b border-white/10">
                  <td className="py-3 px-4">5</td>
                  <td className="py-3 px-4">17.5A</td>
                  <td className="py-3 px-4">15.2A</td>
                  <td className="py-3 px-4">7.6A</td>
                  <td className="py-3 px-4">6.1A</td>
                </tr>
                <tr className="border-b border-white/10">
                  <td className="py-3 px-4">7.5</td>
                  <td className="py-3 px-4">25.3A</td>
                  <td className="py-3 px-4">22A</td>
                  <td className="py-3 px-4">11A</td>
                  <td className="py-3 px-4">9A</td>
                </tr>
                <tr className="border-b border-white/10">
                  <td className="py-3 px-4">10</td>
                  <td className="py-3 px-4">32.2A</td>
                  <td className="py-3 px-4">28A</td>
                  <td className="py-3 px-4">14A</td>
                  <td className="py-3 px-4">11A</td>
                </tr>
                <tr className="border-b border-white/10">
                  <td className="py-3 px-4">15</td>
                  <td className="py-3 px-4">48.3A</td>
                  <td className="py-3 px-4">42A</td>
                  <td className="py-3 px-4">21A</td>
                  <td className="py-3 px-4">17A</td>
                </tr>
                <tr className="border-b border-white/10">
                  <td className="py-3 px-4">20</td>
                  <td className="py-3 px-4">62.1A</td>
                  <td className="py-3 px-4">54A</td>
                  <td className="py-3 px-4">27A</td>
                  <td className="py-3 px-4">22A</td>
                </tr>
                <tr className="border-b border-white/10">
                  <td className="py-3 px-4">25</td>
                  <td className="py-3 px-4">78.2A</td>
                  <td className="py-3 px-4">68A</td>
                  <td className="py-3 px-4">34A</td>
                  <td className="py-3 px-4">27A</td>
                </tr>
                <tr className="border-b border-white/10">
                  <td className="py-3 px-4">30</td>
                  <td className="py-3 px-4">92A</td>
                  <td className="py-3 px-4">80A</td>
                  <td className="py-3 px-4">40A</td>
                  <td className="py-3 px-4">32A</td>
                </tr>
                <tr>
                  <td className="py-3 px-4">50</td>
                  <td className="py-3 px-4">143A</td>
                  <td className="py-3 px-4">130A</td>
                  <td className="py-3 px-4">65A</td>
                  <td className="py-3 px-4">52A</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Motor Circuit Protection */}
        <section className="mb-12">
          <h2 className="text-2xl font-display font-bold mb-4">Motor Circuit Protection (NEC 430.52)</h2>
          <p className="text-white/70 mb-4">
            Maximum short-circuit protection as a percentage of motor FLC:
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-white/20">
                  <th className="py-3 px-4 text-white/60 font-medium">Motor Type</th>
                  <th className="py-3 px-4 text-white/60 font-medium">Non-Time Delay Fuse</th>
                  <th className="py-3 px-4 text-white/60 font-medium">Dual Element Fuse</th>
                  <th className="py-3 px-4 text-white/60 font-medium">Inverse Time Breaker</th>
                </tr>
              </thead>
              <tbody className="text-white/80">
                <tr className="border-b border-white/10">
                  <td className="py-3 px-4">Single-Phase</td>
                  <td className="py-3 px-4">300%</td>
                  <td className="py-3 px-4">175%</td>
                  <td className="py-3 px-4">250%</td>
                </tr>
                <tr className="border-b border-white/10">
                  <td className="py-3 px-4">Squirrel Cage</td>
                  <td className="py-3 px-4">300%</td>
                  <td className="py-3 px-4">175%</td>
                  <td className="py-3 px-4">250%</td>
                </tr>
                <tr className="border-b border-white/10">
                  <td className="py-3 px-4">Wound Rotor</td>
                  <td className="py-3 px-4">150%</td>
                  <td className="py-3 px-4">150%</td>
                  <td className="py-3 px-4">150%</td>
                </tr>
                <tr>
                  <td className="py-3 px-4">Synchronous</td>
                  <td className="py-3 px-4">300%</td>
                  <td className="py-3 px-4">175%</td>
                  <td className="py-3 px-4">250%</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Key Motor Sizing Rules */}
        <section className="mb-12">
          <h2 className="text-2xl font-display font-bold mb-4">Key NEC Motor Sizing Rules</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-white/5 rounded-xl p-4">
              <h3 className="font-semibold text-purple-400 mb-2">Conductor Sizing (430.22)</h3>
              <p className="text-white/70 text-sm">Branch circuit conductors must be at least 125% of motor FLC from NEC tables.</p>
            </div>
            <div className="bg-white/5 rounded-xl p-4">
              <h3 className="font-semibold text-purple-400 mb-2">Overload Protection (430.32)</h3>
              <p className="text-white/70 text-sm">115% of nameplate FLA for service factor ≥1.15 or temp rise ≤40°C. 125% for all others.</p>
            </div>
            <div className="bg-white/5 rounded-xl p-4">
              <h3 className="font-semibold text-purple-400 mb-2">Short-Circuit Protection (430.52)</h3>
              <p className="text-white/70 text-sm">Size per Table 430.52. Round up to next standard size if calculated value doesn't correspond.</p>
            </div>
            <div className="bg-white/5 rounded-xl p-4">
              <h3 className="font-semibold text-purple-400 mb-2">Disconnect (430.110)</h3>
              <p className="text-white/70 text-sm">Motor disconnect must be rated at least 115% of motor FLC from NEC tables.</p>
            </div>
          </div>
        </section>

        {/* Example Calculation */}
        <section className="mb-12">
          <h2 className="text-2xl font-display font-bold mb-4">Motor Circuit Example</h2>
          <div className="bg-white/5 rounded-2xl p-6">
            <h3 className="text-lg font-semibold mb-3">Problem:</h3>
            <p className="text-white/80 mb-4">
              Size the branch circuit components for a 10 HP, 460V, 3-phase squirrel cage motor.
            </p>

            <h3 className="text-lg font-semibold mb-3">Solution:</h3>
            <div className="text-white/80 space-y-2 text-sm">
              <p><strong>FLC (Table 430.250):</strong> 14A</p>
              <p><strong>Conductor:</strong> 14 × 1.25 = 17.5A → 12 AWG (THHN = 25A)</p>
              <p><strong>Overload:</strong> 14 × 1.15 = 16.1A → 16A heater</p>
              <p><strong>Short-Circuit (Inverse Time):</strong> 14 × 2.5 = 35A → 35A breaker</p>
              <p><strong>Disconnect:</strong> 14 × 1.15 = 16.1A → 30A rated switch</p>
              <p className="text-purple-400 font-semibold mt-4">Use: 12 AWG THHN, 16A overload, 35A breaker, 30A disconnect</p>
            </div>
          </div>
        </section>

        {/* App CTA */}
        <section className="bg-gradient-to-r from-purple-900/30 to-cyan-900/30 rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-display font-bold mb-4">
            Instant Motor Sizing with Ampora
          </h2>
          <p className="text-white/70 mb-6">
            Enter motor HP and voltage - get complete circuit sizing instantly. All NEC Article 430 tables and calculations built-in.
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
