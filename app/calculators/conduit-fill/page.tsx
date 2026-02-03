import { Metadata } from "next";
import Link from "next/link";
import { CalculatorPageJsonLd, BreadcrumbJsonLd, HowToJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Conduit Fill Calculator | NEC Chapter 9 Tables & Fill Percentages",
  description: "Free conduit fill calculator for electricians. Calculate NEC-compliant conduit sizing with 40%, 31%, and 53% fill rules. Supports EMT, RMC, IMC, PVC, and FMC conduit types.",
  keywords: [
    "conduit fill calculator",
    "conduit sizing calculator",
    "conduit fill calculation",
    "NEC conduit fill",
    "electrical conduit calculator",
    "conduit fill percentage",
    "40 percent conduit fill",
    "conduit fill chart",
    "EMT conduit fill",
    "PVC conduit fill",
    "NEC chapter 9",
    "conduit fill table",
    "raceway fill calculator",
    "wire fill calculator",
    "conduit capacity calculator"
  ],
  alternates: {
    canonical: "https://amporalabs.com/calculators/conduit-fill",
  },
  openGraph: {
    title: "Conduit Fill Calculator | NEC Chapter 9 Tables - Ampora",
    description: "Calculate NEC-compliant conduit sizing with proper fill percentages. Supports all conduit types.",
    url: "https://amporalabs.com/calculators/conduit-fill",
    type: "website",
  },
};

export default function ConduitFillCalculator() {
  return (
    <>
      <CalculatorPageJsonLd
        name="Ampora Conduit Fill Calculator"
        description="Free conduit fill calculator based on NEC Chapter 9 tables. Calculate proper conduit sizing for any wire combination."
        url="https://amporalabs.com/calculators/conduit-fill"
      />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "https://amporalabs.com" },
          { name: "Calculators", url: "https://amporalabs.com/calculators" },
          { name: "Conduit Fill Calculator", url: "https://amporalabs.com/calculators/conduit-fill" },
        ]}
      />
      <HowToJsonLd
        name="How to Calculate Conduit Fill"
        description="Step-by-step guide to calculating conduit fill per NEC requirements"
        steps={[
          { name: "Identify Conductors", text: "List all conductors that will be installed in the conduit with their sizes and insulation types" },
          { name: "Look Up Wire Areas", text: "Find each conductor cross-sectional area from NEC Chapter 9 Table 5" },
          { name: "Calculate Total Area", text: "Sum all conductor areas to get total wire fill in square inches" },
          { name: "Determine Fill Percentage", text: "Apply 53% for 1 wire, 31% for 2 wires, or 40% for 3+ wires" },
          { name: "Select Conduit Size", text: "Choose conduit size from NEC Chapter 9 Table 4 that provides adequate area" },
        ]}
      />

      <article className="max-w-4xl mx-auto px-6 py-12">
        {/* Breadcrumb */}
        <nav className="text-sm text-white/60 mb-8">
          <Link href="/" className="hover:text-white">Home</Link>
          <span className="mx-2">/</span>
          <Link href="/calculators/conduit-fill" className="hover:text-white">Calculators</Link>
          <span className="mx-2">/</span>
          <span className="text-white">Conduit Fill Calculator</span>
        </nav>

        {/* Hero Section */}
        <header className="mb-12">
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">
            Conduit Fill Calculator
          </h1>
          <p className="text-xl text-white/70 mb-8">
            Calculate NEC-compliant conduit sizing instantly. Supports EMT, RMC, IMC, PVC, and FMC with automatic fill percentage calculations.
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

        {/* What is Conduit Fill */}
        <section className="mb-12">
          <h2 className="text-2xl font-display font-bold mb-4">What is Conduit Fill?</h2>
          <p className="text-white/80 mb-4">
            <strong>Conduit fill</strong> refers to the maximum percentage of a conduit's internal area that can be occupied by electrical conductors. The NEC limits conduit fill to prevent overheating and allow for easy wire pulling during installation.
          </p>
          <p className="text-white/80">
            Proper conduit sizing ensures conductors can dissipate heat effectively and can be installed or replaced without damage to wire insulation.
          </p>
        </section>

        {/* NEC Fill Percentages */}
        <section className="mb-12">
          <h2 className="text-2xl font-display font-bold mb-4">NEC Conduit Fill Percentages</h2>
          <p className="text-white/70 mb-4">
            Per NEC Chapter 9, Table 1, the maximum conduit fill depends on the number of conductors:
          </p>

          <div className="grid md:grid-cols-3 gap-4 mb-6">
            <div className="bg-purple-900/30 rounded-2xl p-6 text-center">
              <div className="text-4xl font-bold text-purple-400 mb-2">53%</div>
              <div className="text-white font-semibold">1 Conductor</div>
              <p className="text-white/60 text-sm mt-2">Single conductor fill limit</p>
            </div>
            <div className="bg-cyan-900/30 rounded-2xl p-6 text-center">
              <div className="text-4xl font-bold text-cyan-400 mb-2">31%</div>
              <div className="text-white font-semibold">2 Conductors</div>
              <p className="text-white/60 text-sm mt-2">Two conductor fill limit</p>
            </div>
            <div className="bg-green-900/30 rounded-2xl p-6 text-center">
              <div className="text-4xl font-bold text-green-400 mb-2">40%</div>
              <div className="text-white font-semibold">3+ Conductors</div>
              <p className="text-white/60 text-sm mt-2">Three or more conductors</p>
            </div>
          </div>
        </section>

        {/* EMT Conduit Table */}
        <section className="mb-12">
          <h2 className="text-2xl font-display font-bold mb-4">EMT Conduit Fill Areas (Square Inches)</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-white/20">
                  <th className="py-3 px-4 text-white/60 font-medium">Trade Size</th>
                  <th className="py-3 px-4 text-white/60 font-medium">Total Area</th>
                  <th className="py-3 px-4 text-white/60 font-medium">1 Wire (53%)</th>
                  <th className="py-3 px-4 text-white/60 font-medium">2 Wires (31%)</th>
                  <th className="py-3 px-4 text-white/60 font-medium">3+ Wires (40%)</th>
                </tr>
              </thead>
              <tbody className="text-white/80">
                <tr className="border-b border-white/10">
                  <td className="py-3 px-4">1/2&quot;</td>
                  <td className="py-3 px-4">0.304</td>
                  <td className="py-3 px-4">0.161</td>
                  <td className="py-3 px-4">0.094</td>
                  <td className="py-3 px-4">0.122</td>
                </tr>
                <tr className="border-b border-white/10">
                  <td className="py-3 px-4">3/4&quot;</td>
                  <td className="py-3 px-4">0.533</td>
                  <td className="py-3 px-4">0.283</td>
                  <td className="py-3 px-4">0.165</td>
                  <td className="py-3 px-4">0.213</td>
                </tr>
                <tr className="border-b border-white/10">
                  <td className="py-3 px-4">1&quot;</td>
                  <td className="py-3 px-4">0.864</td>
                  <td className="py-3 px-4">0.458</td>
                  <td className="py-3 px-4">0.268</td>
                  <td className="py-3 px-4">0.346</td>
                </tr>
                <tr className="border-b border-white/10">
                  <td className="py-3 px-4">1-1/4&quot;</td>
                  <td className="py-3 px-4">1.496</td>
                  <td className="py-3 px-4">0.793</td>
                  <td className="py-3 px-4">0.464</td>
                  <td className="py-3 px-4">0.598</td>
                </tr>
                <tr className="border-b border-white/10">
                  <td className="py-3 px-4">1-1/2&quot;</td>
                  <td className="py-3 px-4">2.036</td>
                  <td className="py-3 px-4">1.079</td>
                  <td className="py-3 px-4">0.631</td>
                  <td className="py-3 px-4">0.814</td>
                </tr>
                <tr className="border-b border-white/10">
                  <td className="py-3 px-4">2&quot;</td>
                  <td className="py-3 px-4">3.356</td>
                  <td className="py-3 px-4">1.779</td>
                  <td className="py-3 px-4">1.040</td>
                  <td className="py-3 px-4">1.342</td>
                </tr>
                <tr className="border-b border-white/10">
                  <td className="py-3 px-4">2-1/2&quot;</td>
                  <td className="py-3 px-4">5.858</td>
                  <td className="py-3 px-4">3.105</td>
                  <td className="py-3 px-4">1.816</td>
                  <td className="py-3 px-4">2.343</td>
                </tr>
                <tr>
                  <td className="py-3 px-4">3&quot;</td>
                  <td className="py-3 px-4">8.846</td>
                  <td className="py-3 px-4">4.688</td>
                  <td className="py-3 px-4">2.742</td>
                  <td className="py-3 px-4">3.538</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* THHN Wire Areas */}
        <section className="mb-12">
          <h2 className="text-2xl font-display font-bold mb-4">THHN/THWN Wire Areas (NEC Chapter 9 Table 5)</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-white/20">
                  <th className="py-3 px-4 text-white/60 font-medium">Wire Size (AWG)</th>
                  <th className="py-3 px-4 text-white/60 font-medium">Area (sq. in.)</th>
                  <th className="py-3 px-4 text-white/60 font-medium">Wire Size</th>
                  <th className="py-3 px-4 text-white/60 font-medium">Area (sq. in.)</th>
                </tr>
              </thead>
              <tbody className="text-white/80">
                <tr className="border-b border-white/10">
                  <td className="py-3 px-4">14 AWG</td>
                  <td className="py-3 px-4">0.0097</td>
                  <td className="py-3 px-4">2 AWG</td>
                  <td className="py-3 px-4">0.1158</td>
                </tr>
                <tr className="border-b border-white/10">
                  <td className="py-3 px-4">12 AWG</td>
                  <td className="py-3 px-4">0.0133</td>
                  <td className="py-3 px-4">1 AWG</td>
                  <td className="py-3 px-4">0.1562</td>
                </tr>
                <tr className="border-b border-white/10">
                  <td className="py-3 px-4">10 AWG</td>
                  <td className="py-3 px-4">0.0211</td>
                  <td className="py-3 px-4">1/0 AWG</td>
                  <td className="py-3 px-4">0.1855</td>
                </tr>
                <tr className="border-b border-white/10">
                  <td className="py-3 px-4">8 AWG</td>
                  <td className="py-3 px-4">0.0366</td>
                  <td className="py-3 px-4">2/0 AWG</td>
                  <td className="py-3 px-4">0.2223</td>
                </tr>
                <tr className="border-b border-white/10">
                  <td className="py-3 px-4">6 AWG</td>
                  <td className="py-3 px-4">0.0507</td>
                  <td className="py-3 px-4">3/0 AWG</td>
                  <td className="py-3 px-4">0.2679</td>
                </tr>
                <tr>
                  <td className="py-3 px-4">4 AWG</td>
                  <td className="py-3 px-4">0.0824</td>
                  <td className="py-3 px-4">4/0 AWG</td>
                  <td className="py-3 px-4">0.3237</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Example Calculation */}
        <section className="mb-12">
          <h2 className="text-2xl font-display font-bold mb-4">Conduit Fill Example</h2>
          <div className="bg-white/5 rounded-2xl p-6">
            <h3 className="text-lg font-semibold mb-3">Problem:</h3>
            <p className="text-white/80 mb-4">
              What size EMT conduit is needed for 4 #12 AWG THHN conductors and 1 #12 AWG ground?
            </p>

            <h3 className="text-lg font-semibold mb-3">Solution:</h3>
            <div className="text-white/80 space-y-2">
              <p>Total conductors: 5 × #12 THHN = 5 × 0.0133 = 0.0665 sq. in.</p>
              <p>Fill allowed (3+ wires): 40%</p>
              <p>From EMT table: 1/2&quot; EMT allows 0.122 sq. in. at 40%</p>
              <p className="text-purple-400 font-semibold">Use 1/2&quot; EMT (0.0665 &lt; 0.122)</p>
            </div>
          </div>
        </section>

        {/* App CTA */}
        <section className="bg-gradient-to-r from-purple-900/30 to-cyan-900/30 rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-display font-bold mb-4">
            Instant Conduit Sizing with Ampora
          </h2>
          <p className="text-white/70 mb-6">
            Select your wires and conduit type - get the right size instantly. No table lookups required. All NEC Chapter 9 data built-in.
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
