import { Metadata } from "next";
import Link from "next/link";
import { BreadcrumbJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Electrical Troubleshooting Guide | Step-by-Step Diagnosis Tool",
  description: "Interactive electrical troubleshooting guide for electricians. Step-by-step diagnosis for circuit problems, motor issues, lighting failures, and more. AI-assisted problem solving.",
  keywords: [
    "electrical troubleshooting",
    "electrical troubleshooting guide",
    "troubleshoot electrical problems",
    "electrical diagnosis",
    "circuit troubleshooting",
    "motor troubleshooting",
    "electrical fault finding",
    "troubleshoot no power",
    "GFCI troubleshooting",
    "breaker tripping troubleshoot",
    "electrical problem solver",
    "electrician troubleshooting",
    "electrical diagnostics",
    "electrical fault diagnosis"
  ],
  alternates: {
    canonical: "https://amporalabs.com/features/troubleshooting",
  },
  openGraph: {
    title: "Electrical Troubleshooting Guide | Diagnosis Tool - Ampora",
    description: "Step-by-step electrical troubleshooting with AI assistance. Diagnose circuit problems, motor issues, and more.",
    url: "https://amporalabs.com/features/troubleshooting",
    type: "website",
  },
};

export default function TroubleshootingPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "https://amporalabs.com" },
          { name: "Features", url: "https://amporalabs.com/features" },
          { name: "Troubleshooting", url: "https://amporalabs.com/features/troubleshooting" },
        ]}
      />

      <article className="max-w-4xl mx-auto px-6 py-12">
        {/* Breadcrumb */}
        <nav className="text-sm text-white/60 mb-8">
          <Link href="/" className="hover:text-white">Home</Link>
          <span className="mx-2">/</span>
          <span className="text-white">Troubleshooting</span>
        </nav>

        {/* Hero Section */}
        <header className="mb-12">
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">
            Electrical Troubleshooting Guide
          </h1>
          <p className="text-xl text-white/70 mb-8">
            Interactive step-by-step diagnosis for electrical problems. From dead circuits to motor failures, get systematic troubleshooting guidance with AI assistance.
          </p>
          <a
            href="https://apps.apple.com/us/app/ampora/id6753693522"
            className="inline-flex items-center gap-2 px-6 py-3 bg-purple-600 text-white font-semibold rounded-full hover:bg-purple-500 transition-colors"
          >
            Start Troubleshooting
          </a>
        </header>

        {/* Common Problems */}
        <section className="mb-12">
          <h2 className="text-2xl font-display font-bold mb-4">Common Electrical Problems</h2>
          <div className="space-y-4">
            <div className="bg-white/5 rounded-xl p-5">
              <h3 className="font-semibold text-red-400 mb-2 flex items-center gap-2">
                <span className="text-xl">⚡</span> No Power / Dead Circuit
              </h3>
              <p className="text-white/70 text-sm mb-3">Outlet, circuit, or entire panel has no power</p>
              <div className="text-white/60 text-xs space-y-1">
                <p>• Check breaker position (tripped breakers may appear ON)</p>
                <p>• Test outlet with known working device</p>
                <p>• Check upstream GFCI devices</p>
                <p>• Verify service entrance has power</p>
              </div>
            </div>

            <div className="bg-white/5 rounded-xl p-5">
              <h3 className="font-semibold text-yellow-400 mb-2 flex items-center gap-2">
                <span className="text-xl">🔄</span> Breaker Keeps Tripping
              </h3>
              <p className="text-white/70 text-sm mb-3">Circuit breaker trips repeatedly after reset</p>
              <div className="text-white/60 text-xs space-y-1">
                <p>• Identify if overload or short circuit</p>
                <p>• Disconnect loads and test circuit</p>
                <p>• Check for damaged wiring or connections</p>
                <p>• Verify breaker is properly sized</p>
              </div>
            </div>

            <div className="bg-white/5 rounded-xl p-5">
              <h3 className="font-semibold text-orange-400 mb-2 flex items-center gap-2">
                <span className="text-xl">🔌</span> GFCI Won't Reset
              </h3>
              <p className="text-white/70 text-sm mb-3">GFCI device trips immediately or won't stay reset</p>
              <div className="text-white/60 text-xs space-y-1">
                <p>• Disconnect all downstream loads</p>
                <p>• Test with no load connected</p>
                <p>• Check for ground faults in wiring</p>
                <p>• Verify line/load wiring is correct</p>
              </div>
            </div>

            <div className="bg-white/5 rounded-xl p-5">
              <h3 className="font-semibold text-purple-400 mb-2 flex items-center gap-2">
                <span className="text-xl">💡</span> Lights Flickering
              </h3>
              <p className="text-white/70 text-sm mb-3">Lights dim, flicker, or change brightness</p>
              <div className="text-white/60 text-xs space-y-1">
                <p>• Check for loose bulbs and connections</p>
                <p>• Identify if problem is one circuit or whole house</p>
                <p>• Check for high-draw appliances cycling</p>
                <p>• Inspect neutral connections</p>
              </div>
            </div>

            <div className="bg-white/5 rounded-xl p-5">
              <h3 className="font-semibold text-cyan-400 mb-2 flex items-center gap-2">
                <span className="text-xl">⚙️</span> Motor Won't Start
              </h3>
              <p className="text-white/70 text-sm mb-3">Motor hums, trips overload, or doesn't run</p>
              <div className="text-white/60 text-xs space-y-1">
                <p>• Check for voltage at motor terminals</p>
                <p>• Verify overload heater sizing</p>
                <p>• Check for mechanical binding</p>
                <p>• Test motor windings with megger</p>
              </div>
            </div>

            <div className="bg-white/5 rounded-xl p-5">
              <h3 className="font-semibold text-green-400 mb-2 flex items-center gap-2">
                <span className="text-xl">🔥</span> Burnt Smell / Hot Wires
              </h3>
              <p className="text-white/70 text-sm mb-3">Burning smell from outlet, panel, or equipment</p>
              <div className="text-white/60 text-xs space-y-1">
                <p>• DE-ENERGIZE IMMEDIATELY if safe to do so</p>
                <p>• Locate source of heat/smell</p>
                <p>• Check for loose connections (most common cause)</p>
                <p>• Inspect for undersized conductors</p>
              </div>
            </div>
          </div>
        </section>

        {/* Troubleshooting Methodology */}
        <section className="mb-12">
          <h2 className="text-2xl font-display font-bold mb-4">Systematic Troubleshooting Method</h2>
          <div className="space-y-4">
            <div className="flex gap-4 items-start">
              <div className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center font-bold shrink-0">1</div>
              <div>
                <h3 className="font-semibold mb-1">Gather Information</h3>
                <p className="text-white/70 text-sm">What happened? When did it start? What changed recently? Interview the customer.</p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <div className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center font-bold shrink-0">2</div>
              <div>
                <h3 className="font-semibold mb-1">Verify the Problem</h3>
                <p className="text-white/70 text-sm">Confirm the symptom yourself. Test with your own equipment.</p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <div className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center font-bold shrink-0">3</div>
              <div>
                <h3 className="font-semibold mb-1">Identify the Circuit</h3>
                <p className="text-white/70 text-sm">Which circuit? Which breaker? What other loads are on this circuit?</p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <div className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center font-bold shrink-0">4</div>
              <div>
                <h3 className="font-semibold mb-1">Divide and Conquer</h3>
                <p className="text-white/70 text-sm">Isolate sections. Disconnect loads. Find where the problem starts/stops.</p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <div className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center font-bold shrink-0">5</div>
              <div>
                <h3 className="font-semibold mb-1">Test Your Theory</h3>
                <p className="text-white/70 text-sm">Make one change at a time. Verify fix before moving on.</p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <div className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center font-bold shrink-0">6</div>
              <div>
                <h3 className="font-semibold mb-1">Repair and Verify</h3>
                <p className="text-white/70 text-sm">Make the repair. Test the circuit under load. Confirm the problem is resolved.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Essential Test Equipment */}
        <section className="mb-12">
          <h2 className="text-2xl font-display font-bold mb-4">Essential Test Equipment</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-white/5 rounded-xl p-4">
              <h3 className="font-semibold text-purple-400 mb-1">Digital Multimeter</h3>
              <p className="text-white/70 text-sm">Voltage, current, resistance, continuity testing</p>
            </div>
            <div className="bg-white/5 rounded-xl p-4">
              <h3 className="font-semibold text-purple-400 mb-1">Non-Contact Voltage Tester</h3>
              <p className="text-white/70 text-sm">Quick presence of voltage detection</p>
            </div>
            <div className="bg-white/5 rounded-xl p-4">
              <h3 className="font-semibold text-purple-400 mb-1">Circuit Tracer</h3>
              <p className="text-white/70 text-sm">Identify which breaker feeds which outlet</p>
            </div>
            <div className="bg-white/5 rounded-xl p-4">
              <h3 className="font-semibold text-purple-400 mb-1">Clamp Meter</h3>
              <p className="text-white/70 text-sm">Measure current without breaking the circuit</p>
            </div>
            <div className="bg-white/5 rounded-xl p-4">
              <h3 className="font-semibold text-purple-400 mb-1">Receptacle Tester</h3>
              <p className="text-white/70 text-sm">Quick check for common wiring faults</p>
            </div>
            <div className="bg-white/5 rounded-xl p-4">
              <h3 className="font-semibold text-purple-400 mb-1">Megohmmeter (Megger)</h3>
              <p className="text-white/70 text-sm">Insulation resistance testing for motors and cables</p>
            </div>
          </div>
        </section>

        {/* AI Assistance */}
        <section className="mb-12">
          <h2 className="text-2xl font-display font-bold mb-4">AI-Assisted Troubleshooting</h2>
          <p className="text-white/80 mb-4">
            Ampora combines structured troubleshooting guides with AI assistance. Describe your problem or take a photo, and get intelligent suggestions for your next diagnostic step.
          </p>
          <div className="bg-white/5 rounded-2xl p-6">
            <div className="flex gap-3 mb-4">
              <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center text-sm">You</div>
              <div className="flex-1">
                <p className="text-white/80">"GFCI in the bathroom won't reset. I disconnected everything but it still trips immediately."</p>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="w-8 h-8 bg-cyan-600 rounded-full flex items-center justify-center text-sm">AI</div>
              <div className="flex-1">
                <p className="text-white/80">"Since it trips with nothing connected, the fault is likely in the wiring or the GFCI itself. Try these steps: 1) Verify you disconnected the LOAD terminals, not just the devices - the wiring going to downstream outlets. 2) Check line/load wiring - reversed connections cause immediate trips. 3) Test with a known-good GFCI. 4) If it still trips, there may be a ground fault in the line-side wiring between the panel and the GFCI."</p>
              </div>
            </div>
          </div>
        </section>

        {/* App CTA */}
        <section className="bg-gradient-to-r from-purple-900/30 to-cyan-900/30 rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-display font-bold mb-4">
            Troubleshoot Smarter with Ampora
          </h2>
          <p className="text-white/70 mb-6">
            Interactive troubleshooting guides plus AI assistance. Solve problems faster and learn along the way.
          </p>
          <a
            href="https://apps.apple.com/us/app/ampora/id6753693522"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-black font-semibold rounded-full hover:bg-white/90 transition-colors"
          >
            Download Free on App Store
          </a>
        </section>
      </article>
    </>
  );
}
