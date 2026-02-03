import { Metadata } from "next";
import Link from "next/link";
import { CalculatorPageJsonLd, BreadcrumbJsonLd, HowToJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Load Calculation Calculator | NEC Demand Factors & Service Sizing",
  description: "Free electrical load calculation tool for electricians. Calculate service size, demand factors, and panel loads per NEC Article 220. Residential and commercial load calc.",
  keywords: [
    "load calculation",
    "load calc",
    "electrical load calculator",
    "service load calculation",
    "demand factor calculator",
    "panel load calculation",
    "NEC 220",
    "residential load calculation",
    "commercial load calculation",
    "service size calculator",
    "electrical service sizing",
    "load calculation worksheet",
    "NEC demand factors",
    "dwelling load calculation",
    "branch circuit load"
  ],
  alternates: {
    canonical: "https://amporalabs.com/calculators/load-calculation",
  },
  openGraph: {
    title: "Load Calculation Calculator | NEC Demand Factors - Ampora",
    description: "Calculate electrical service size and panel loads per NEC Article 220 demand factors.",
    url: "https://amporalabs.com/calculators/load-calculation",
    type: "website",
  },
};

export default function LoadCalculator() {
  return (
    <>
      <CalculatorPageJsonLd
        name="Ampora Load Calculation Calculator"
        description="Free electrical load calculation tool based on NEC Article 220 demand factors for residential and commercial applications."
        url="https://amporalabs.com/calculators/load-calculation"
      />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "https://amporalabs.com" },
          { name: "Calculators", url: "https://amporalabs.com/calculators" },
          { name: "Load Calculator", url: "https://amporalabs.com/calculators/load-calculation" },
        ]}
      />
      <HowToJsonLd
        name="How to Calculate Electrical Service Load"
        description="Step-by-step guide to calculating electrical loads per NEC"
        steps={[
          { name: "Calculate General Lighting Load", text: "Multiply square footage by 3 VA/sq ft for dwelling units" },
          { name: "Add Small Appliance Circuits", text: "Add 1,500 VA for each 20A small appliance circuit (minimum 2 required)" },
          { name: "Add Laundry Circuit", text: "Add 1,500 VA for each laundry circuit" },
          { name: "Apply Demand Factors", text: "Apply NEC Table 220.42 demand factors to general loads" },
          { name: "Add Fixed Appliances", text: "Add nameplate ratings for fixed appliances at 75% if 4+ appliances" },
          { name: "Add HVAC and Electric Heat", text: "Add larger of heating or cooling load (not both)" },
          { name: "Calculate Service Size", text: "Divide total VA by voltage to determine service amperage" },
        ]}
      />

      <article className="max-w-4xl mx-auto px-6 py-12">
        {/* Breadcrumb */}
        <nav className="text-sm text-white/60 mb-8">
          <Link href="/" className="hover:text-white">Home</Link>
          <span className="mx-2">/</span>
          <Link href="/calculators/load-calculation" className="hover:text-white">Calculators</Link>
          <span className="mx-2">/</span>
          <span className="text-white">Load Calculator</span>
        </nav>

        {/* Hero Section */}
        <header className="mb-12">
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">
            Electrical Load Calculator
          </h1>
          <p className="text-xl text-white/70 mb-8">
            Calculate electrical service size and panel loads using NEC Article 220 demand factors. Perfect for residential and commercial load calculations.
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

        {/* What is Load Calculation */}
        <section className="mb-12">
          <h2 className="text-2xl font-display font-bold mb-4">What is Load Calculation?</h2>
          <p className="text-white/80 mb-4">
            <strong>Load calculation</strong> is the process of determining the total electrical demand for a building or facility to properly size the electrical service, feeders, and branch circuits. The NEC provides specific methods in Article 220 for calculating loads.
          </p>
          <p className="text-white/80">
            Proper load calculation ensures the electrical system can safely handle all connected loads while meeting code requirements. Undersized services can cause nuisance tripping, overheating, and safety hazards.
          </p>
        </section>

        {/* NEC General Lighting Loads */}
        <section className="mb-12">
          <h2 className="text-2xl font-display font-bold mb-4">NEC General Lighting Loads (Table 220.12)</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-white/20">
                  <th className="py-3 px-4 text-white/60 font-medium">Occupancy Type</th>
                  <th className="py-3 px-4 text-white/60 font-medium">VA per Square Foot</th>
                </tr>
              </thead>
              <tbody className="text-white/80">
                <tr className="border-b border-white/10">
                  <td className="py-3 px-4">Dwelling Units</td>
                  <td className="py-3 px-4">3 VA/sq ft</td>
                </tr>
                <tr className="border-b border-white/10">
                  <td className="py-3 px-4">Hospitals</td>
                  <td className="py-3 px-4">2 VA/sq ft</td>
                </tr>
                <tr className="border-b border-white/10">
                  <td className="py-3 px-4">Hotels/Motels</td>
                  <td className="py-3 px-4">2 VA/sq ft</td>
                </tr>
                <tr className="border-b border-white/10">
                  <td className="py-3 px-4">Office Buildings</td>
                  <td className="py-3 px-4">3.5 VA/sq ft</td>
                </tr>
                <tr className="border-b border-white/10">
                  <td className="py-3 px-4">Restaurants</td>
                  <td className="py-3 px-4">2 VA/sq ft</td>
                </tr>
                <tr className="border-b border-white/10">
                  <td className="py-3 px-4">Schools</td>
                  <td className="py-3 px-4">3 VA/sq ft</td>
                </tr>
                <tr className="border-b border-white/10">
                  <td className="py-3 px-4">Retail Stores</td>
                  <td className="py-3 px-4">3 VA/sq ft</td>
                </tr>
                <tr>
                  <td className="py-3 px-4">Warehouses</td>
                  <td className="py-3 px-4">0.5 VA/sq ft</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Demand Factors */}
        <section className="mb-12">
          <h2 className="text-2xl font-display font-bold mb-4">Dwelling Unit Demand Factors (Table 220.42)</h2>
          <p className="text-white/70 mb-4">
            For dwelling units, apply these demand factors to the general lighting, small appliance, and laundry loads:
          </p>
          <div className="bg-white/5 rounded-2xl p-6">
            <div className="space-y-3 text-white/80">
              <div className="flex justify-between border-b border-white/10 pb-2">
                <span>First 3,000 VA</span>
                <span className="font-semibold">100%</span>
              </div>
              <div className="flex justify-between border-b border-white/10 pb-2">
                <span>3,001 VA to 120,000 VA</span>
                <span className="font-semibold">35%</span>
              </div>
              <div className="flex justify-between">
                <span>Over 120,000 VA</span>
                <span className="font-semibold">25%</span>
              </div>
            </div>
          </div>
        </section>

        {/* Residential Load Calc Steps */}
        <section className="mb-12">
          <h2 className="text-2xl font-display font-bold mb-4">Residential Load Calculation Steps</h2>
          <div className="space-y-4">
            <div className="bg-white/5 rounded-xl p-4">
              <h3 className="font-semibold text-purple-400 mb-2">Step 1: General Lighting Load</h3>
              <p className="text-white/70 text-sm">Square footage × 3 VA/sq ft</p>
            </div>
            <div className="bg-white/5 rounded-xl p-4">
              <h3 className="font-semibold text-purple-400 mb-2">Step 2: Small Appliance Circuits</h3>
              <p className="text-white/70 text-sm">Minimum 2 circuits × 1,500 VA = 3,000 VA</p>
            </div>
            <div className="bg-white/5 rounded-xl p-4">
              <h3 className="font-semibold text-purple-400 mb-2">Step 3: Laundry Circuit</h3>
              <p className="text-white/70 text-sm">1 circuit × 1,500 VA = 1,500 VA</p>
            </div>
            <div className="bg-white/5 rounded-xl p-4">
              <h3 className="font-semibold text-purple-400 mb-2">Step 4: Apply Demand Factors</h3>
              <p className="text-white/70 text-sm">First 3,000 VA at 100% + remainder at 35%</p>
            </div>
            <div className="bg-white/5 rounded-xl p-4">
              <h3 className="font-semibold text-purple-400 mb-2">Step 5: Fixed Appliances</h3>
              <p className="text-white/70 text-sm">Add nameplate VA (75% if 4+ appliances)</p>
            </div>
            <div className="bg-white/5 rounded-xl p-4">
              <h3 className="font-semibold text-purple-400 mb-2">Step 6: HVAC Load</h3>
              <p className="text-white/70 text-sm">Larger of heating or cooling (not both)</p>
            </div>
            <div className="bg-white/5 rounded-xl p-4">
              <h3 className="font-semibold text-purple-400 mb-2">Step 7: Calculate Service Size</h3>
              <p className="text-white/70 text-sm">Total VA ÷ 240V = Service Amperage</p>
            </div>
          </div>
        </section>

        {/* Example Calculation */}
        <section className="mb-12">
          <h2 className="text-2xl font-display font-bold mb-4">Load Calculation Example</h2>
          <div className="bg-white/5 rounded-2xl p-6">
            <h3 className="text-lg font-semibold mb-3">Problem:</h3>
            <p className="text-white/80 mb-4">
              Calculate the service load for a 2,000 sq ft dwelling with electric water heater (4,500W), electric dryer (5,000W), range (12,000W), and 5-ton AC (6,000W).
            </p>

            <h3 className="text-lg font-semibold mb-3">Solution:</h3>
            <div className="text-white/80 space-y-2 text-sm">
              <p><strong>General Lighting:</strong> 2,000 × 3 = 6,000 VA</p>
              <p><strong>Small Appliance:</strong> 2 × 1,500 = 3,000 VA</p>
              <p><strong>Laundry:</strong> 1,500 VA</p>
              <p><strong>Subtotal:</strong> 10,500 VA</p>
              <p><strong>Demand:</strong> 3,000 at 100% + 7,500 at 35% = 3,000 + 2,625 = 5,625 VA</p>
              <p><strong>Water Heater:</strong> 4,500 VA</p>
              <p><strong>Dryer:</strong> 5,000 VA</p>
              <p><strong>Range:</strong> 8,000 VA (from Table 220.55)</p>
              <p><strong>AC:</strong> 6,000 VA</p>
              <p><strong>Total:</strong> 5,625 + 4,500 + 5,000 + 8,000 + 6,000 = 29,125 VA</p>
              <p className="text-purple-400 font-semibold">Service Size: 29,125 ÷ 240 = 121A → Use 150A Service</p>
            </div>
          </div>
        </section>

        {/* App CTA */}
        <section className="bg-gradient-to-r from-purple-900/30 to-cyan-900/30 rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-display font-bold mb-4">
            Quick Load Calcs with Ampora
          </h2>
          <p className="text-white/70 mb-6">
            Enter your loads and get instant service sizing with automatic demand factor application. All NEC tables built-in.
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
