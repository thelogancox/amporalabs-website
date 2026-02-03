import { Metadata } from "next";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import { BreadcrumbJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Electrical Formulas | Complete Reference for Electricians",
  description: "Complete electrical formulas reference for electricians. Ohm's law, power formulas, voltage drop, motor calculations, transformer formulas, and more. Free electrical engineering formulas.",
  keywords: [
    "electrical formulas",
    "electrician formulas",
    "ohms law formula",
    "power formula electrical",
    "voltage drop formula",
    "electrical engineering formulas",
    "electrical calculation formulas",
    "motor formula",
    "transformer formula",
    "three phase formulas",
    "electrical power formulas",
    "watts amps volts formula",
    "electrical math formulas",
    "electrician math",
    "electrical equations"
  ],
  alternates: {
    canonical: "https://amporalabs.com/electrical-formulas",
  },
  openGraph: {
    title: "Electrical Formulas | Complete Reference - Ampora",
    description: "Complete electrical formulas reference. Ohm's law, power, voltage drop, motor, and transformer formulas.",
    url: "https://amporalabs.com/electrical-formulas",
    type: "website",
  },
};

export default function ElectricalFormulasPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navigation />
      <div className="pt-20">
        <BreadcrumbJsonLd
          items={[
            { name: "Home", url: "https://amporalabs.com" },
            { name: "Electrical Formulas", url: "https://amporalabs.com/electrical-formulas" },
          ]}
        />

        <article className="max-w-4xl mx-auto px-6 py-12">
          {/* Breadcrumb */}
          <nav className="text-sm text-white/60 mb-8">
            <Link href="/" className="hover:text-white">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-white">Electrical Formulas</span>
          </nav>

          {/* Hero Section */}
          <header className="mb-12">
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">
              Electrical Formulas Reference
            </h1>
            <p className="text-xl text-white/70 mb-8">
              Complete collection of electrical formulas for electricians and engineers. From Ohm's law to three-phase calculations.
            </p>
            <a
              href="https://apps.apple.com/us/app/ampora/id6753693522"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-purple-600 text-white font-semibold rounded-full hover:bg-purple-500 transition-colors"
            >
              Get Formulas in App
            </a>
          </header>

          {/* Ohm's Law */}
          <section className="mb-12">
            <h2 className="text-2xl font-display font-bold mb-4">Ohm's Law</h2>
            <p className="text-white/70 mb-4">The fundamental relationship between voltage, current, and resistance.</p>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-purple-900/30 rounded-xl p-6 text-center">
                <div className="text-3xl font-mono font-bold text-purple-400 mb-2">E = I × R</div>
                <p className="text-white/60 text-sm">Voltage = Current × Resistance</p>
              </div>
              <div className="bg-purple-900/30 rounded-xl p-6 text-center">
                <div className="text-3xl font-mono font-bold text-purple-400 mb-2">I = E / R</div>
                <p className="text-white/60 text-sm">Current = Voltage / Resistance</p>
              </div>
              <div className="bg-purple-900/30 rounded-xl p-6 text-center">
                <div className="text-3xl font-mono font-bold text-purple-400 mb-2">R = E / I</div>
                <p className="text-white/60 text-sm">Resistance = Voltage / Current</p>
              </div>
            </div>
            <p className="text-white/60 text-sm mt-4">Where: E = Voltage (volts), I = Current (amps), R = Resistance (ohms)</p>
          </section>

          {/* Power Formulas */}
          <section className="mb-12">
            <h2 className="text-2xl font-display font-bold mb-4">Power Formulas</h2>
            <p className="text-white/70 mb-4">Calculate electrical power (watts) using different known values.</p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-cyan-900/30 rounded-xl p-6 text-center">
                <div className="text-3xl font-mono font-bold text-cyan-400 mb-2">P = E × I</div>
                <p className="text-white/60 text-sm">Power = Voltage × Current</p>
              </div>
              <div className="bg-cyan-900/30 rounded-xl p-6 text-center">
                <div className="text-3xl font-mono font-bold text-cyan-400 mb-2">P = I² × R</div>
                <p className="text-white/60 text-sm">Power = Current² × Resistance</p>
              </div>
              <div className="bg-cyan-900/30 rounded-xl p-6 text-center">
                <div className="text-3xl font-mono font-bold text-cyan-400 mb-2">P = E² / R</div>
                <p className="text-white/60 text-sm">Power = Voltage² / Resistance</p>
              </div>
              <div className="bg-cyan-900/30 rounded-xl p-6 text-center">
                <div className="text-3xl font-mono font-bold text-cyan-400 mb-2">I = P / E</div>
                <p className="text-white/60 text-sm">Current = Power / Voltage</p>
              </div>
            </div>
            <p className="text-white/60 text-sm mt-4">Where: P = Power (watts), E = Voltage (volts), I = Current (amps), R = Resistance (ohms)</p>
          </section>

          {/* Three-Phase Formulas */}
          <section className="mb-12">
            <h2 className="text-2xl font-display font-bold mb-4">Three-Phase Power Formulas</h2>
            <p className="text-white/70 mb-4">Formulas for three-phase AC circuits.</p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-green-900/30 rounded-xl p-6 text-center">
                <div className="text-2xl font-mono font-bold text-green-400 mb-2">P = √3 × E × I × PF</div>
                <p className="text-white/60 text-sm">Three-phase power (watts)</p>
              </div>
              <div className="bg-green-900/30 rounded-xl p-6 text-center">
                <div className="text-2xl font-mono font-bold text-green-400 mb-2">I = P / (√3 × E × PF)</div>
                <p className="text-white/60 text-sm">Three-phase current (amps)</p>
              </div>
              <div className="bg-green-900/30 rounded-xl p-6 text-center">
                <div className="text-2xl font-mono font-bold text-green-400 mb-2">kVA = √3 × E × I / 1000</div>
                <p className="text-white/60 text-sm">Three-phase apparent power</p>
              </div>
              <div className="bg-green-900/30 rounded-xl p-6 text-center">
                <div className="text-2xl font-mono font-bold text-green-400 mb-2">PF = kW / kVA</div>
                <p className="text-white/60 text-sm">Power factor calculation</p>
              </div>
            </div>
            <p className="text-white/60 text-sm mt-4">Where: √3 ≈ 1.732, E = Line voltage, I = Line current, PF = Power factor</p>
          </section>

          {/* Voltage Drop Formulas */}
          <section className="mb-12">
            <h2 className="text-2xl font-display font-bold mb-4">Voltage Drop Formulas</h2>
            <p className="text-white/70 mb-4">Calculate voltage drop in electrical conductors.</p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-orange-900/30 rounded-xl p-6">
                <h3 className="font-semibold text-orange-400 mb-2">Single-Phase</h3>
                <div className="text-2xl font-mono font-bold text-orange-400 mb-2">VD = (2 × K × I × D) / CM</div>
                <p className="text-white/60 text-sm">Two-wire voltage drop formula</p>
              </div>
              <div className="bg-orange-900/30 rounded-xl p-6">
                <h3 className="font-semibold text-orange-400 mb-2">Three-Phase</h3>
                <div className="text-2xl font-mono font-bold text-orange-400 mb-2">VD = (1.732 × K × I × D) / CM</div>
                <p className="text-white/60 text-sm">Three-phase voltage drop formula</p>
              </div>
            </div>
            <div className="bg-white/5 rounded-xl p-4 mt-4">
              <p className="text-white/70 text-sm">
                <strong>Where:</strong> VD = Voltage drop (volts), K = Resistivity constant (12.9 copper, 21.2 aluminum), I = Current (amps), D = One-way distance (feet), CM = Circular mils of conductor
              </p>
            </div>
            <div className="mt-4">
              <Link href="/calculators/voltage-drop" className="text-purple-400 hover:text-purple-300">
                → Use Voltage Drop Calculator
              </Link>
            </div>
          </section>

          {/* Motor Formulas */}
          <section className="mb-12">
            <h2 className="text-2xl font-display font-bold mb-4">Motor Formulas</h2>
            <p className="text-white/70 mb-4">Calculate motor power, current, and efficiency.</p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-blue-900/30 rounded-xl p-6">
                <h3 className="font-semibold text-blue-400 mb-2">Horsepower to Watts</h3>
                <div className="text-2xl font-mono font-bold text-blue-400">P = HP × 746</div>
              </div>
              <div className="bg-blue-900/30 rounded-xl p-6">
                <h3 className="font-semibold text-blue-400 mb-2">Motor Efficiency</h3>
                <div className="text-2xl font-mono font-bold text-blue-400">Eff = Output / Input</div>
              </div>
              <div className="bg-blue-900/30 rounded-xl p-6">
                <h3 className="font-semibold text-blue-400 mb-2">Synchronous Speed (RPM)</h3>
                <div className="text-2xl font-mono font-bold text-blue-400">N = (120 × f) / P</div>
                <p className="text-white/60 text-sm mt-2">f = frequency (Hz), P = poles</p>
              </div>
              <div className="bg-blue-900/30 rounded-xl p-6">
                <h3 className="font-semibold text-blue-400 mb-2">Slip Percentage</h3>
                <div className="text-2xl font-mono font-bold text-blue-400">Slip = (Ns - Nr) / Ns × 100</div>
                <p className="text-white/60 text-sm mt-2">Ns = sync speed, Nr = rotor speed</p>
              </div>
            </div>
            <div className="mt-4">
              <Link href="/calculators/motor-sizing" className="text-purple-400 hover:text-purple-300">
                → Use Motor Sizing Calculator
              </Link>
            </div>
          </section>

          {/* Transformer Formulas */}
          <section className="mb-12">
            <h2 className="text-2xl font-display font-bold mb-4">Transformer Formulas</h2>
            <p className="text-white/70 mb-4">Calculate transformer turns ratio, voltage, and current relationships.</p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-yellow-900/30 rounded-xl p-6">
                <h3 className="font-semibold text-yellow-400 mb-2">Turns Ratio</h3>
                <div className="text-2xl font-mono font-bold text-yellow-400">Ep / Es = Np / Ns</div>
                <p className="text-white/60 text-sm mt-2">Voltage ratio equals turns ratio</p>
              </div>
              <div className="bg-yellow-900/30 rounded-xl p-6">
                <h3 className="font-semibold text-yellow-400 mb-2">Current Ratio</h3>
                <div className="text-2xl font-mono font-bold text-yellow-400">Ep / Es = Is / Ip</div>
                <p className="text-white/60 text-sm mt-2">Voltage up = current down</p>
              </div>
              <div className="bg-yellow-900/30 rounded-xl p-6">
                <h3 className="font-semibold text-yellow-400 mb-2">Single-Phase kVA</h3>
                <div className="text-2xl font-mono font-bold text-yellow-400">kVA = (E × I) / 1000</div>
              </div>
              <div className="bg-yellow-900/30 rounded-xl p-6">
                <h3 className="font-semibold text-yellow-400 mb-2">Three-Phase kVA</h3>
                <div className="text-2xl font-mono font-bold text-yellow-400">kVA = (√3 × E × I) / 1000</div>
              </div>
            </div>
          </section>

          {/* Resistance Formulas */}
          <section className="mb-12">
            <h2 className="text-2xl font-display font-bold mb-4">Resistance Formulas</h2>
            <p className="text-white/70 mb-4">Calculate series, parallel, and conductor resistance.</p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-red-900/30 rounded-xl p-6">
                <h3 className="font-semibold text-red-400 mb-2">Series Resistance</h3>
                <div className="text-2xl font-mono font-bold text-red-400">Rt = R1 + R2 + R3...</div>
              </div>
              <div className="bg-red-900/30 rounded-xl p-6">
                <h3 className="font-semibold text-red-400 mb-2">Parallel Resistance</h3>
                <div className="text-xl font-mono font-bold text-red-400">1/Rt = 1/R1 + 1/R2 + 1/R3...</div>
              </div>
              <div className="bg-red-900/30 rounded-xl p-6">
                <h3 className="font-semibold text-red-400 mb-2">Two Parallel Resistors</h3>
                <div className="text-2xl font-mono font-bold text-red-400">Rt = (R1 × R2) / (R1 + R2)</div>
              </div>
              <div className="bg-red-900/30 rounded-xl p-6">
                <h3 className="font-semibold text-red-400 mb-2">Conductor Resistance</h3>
                <div className="text-2xl font-mono font-bold text-red-400">R = (K × L) / A</div>
                <p className="text-white/60 text-sm mt-2">K = resistivity, L = length, A = area</p>
              </div>
            </div>
          </section>

          {/* App CTA */}
          <section className="bg-gradient-to-r from-purple-900/30 to-cyan-900/30 rounded-2xl p-8 text-center">
            <h2 className="text-2xl font-display font-bold mb-4">
              All Formulas in Your Pocket
            </h2>
            <p className="text-white/70 mb-6">
              Get instant access to all electrical formulas plus calculators that do the math for you.
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
      </div>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-white/10">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <Link href="/" className="text-xl font-display font-bold">Ampora</Link>
          <nav className="flex flex-wrap justify-center gap-6 text-sm text-white/60">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <Link href="/features/ai-assistant" className="hover:text-white transition-colors">AI Assistant</Link>
            <Link href="/features/nec-code-reference" className="hover:text-white transition-colors">NEC Code</Link>
            <Link href="/calculators/voltage-drop" className="hover:text-white transition-colors">Calculators</Link>
          </nav>
          <p className="text-sm text-white/40">© 2024 Ampora Labs</p>
        </div>
      </footer>
    </main>
  );
}
