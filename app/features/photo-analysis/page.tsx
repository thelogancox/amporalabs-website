import { Metadata } from "next";
import Link from "next/link";
import { BreadcrumbJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Electrical Photo Analysis | AI Panel & Wiring Image Scanner",
  description: "Upload photos of electrical panels, wiring, and equipment for instant AI analysis. Get safety recommendations, identify issues, and receive troubleshooting guidance.",
  keywords: [
    "electrical photo analysis",
    "panel photo scanner",
    "electrical image analysis",
    "AI electrical panel",
    "wiring photo analysis",
    "electrical equipment scanner",
    "panel inspection AI",
    "electrical photo app",
    "analyze electrical panel",
    "electrical image recognition",
    "panel photo analyzer",
    "electrical visual inspection",
    "AI wiring analysis",
    "electrical photo tool"
  ],
  alternates: {
    canonical: "https://amporalabs.com/features/photo-analysis",
  },
  openGraph: {
    title: "Electrical Photo Analysis | AI Panel Scanner - Ampora",
    description: "Upload photos of electrical panels and wiring for instant AI analysis and safety recommendations.",
    url: "https://amporalabs.com/features/photo-analysis",
    type: "website",
  },
};

export default function PhotoAnalysisPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "https://amporalabs.com" },
          { name: "Features", url: "https://amporalabs.com/features" },
          { name: "Photo Analysis", url: "https://amporalabs.com/features/photo-analysis" },
        ]}
      />

      <article className="max-w-4xl mx-auto px-6 py-12">
        {/* Breadcrumb */}
        <nav className="text-sm text-white/60 mb-8">
          <Link href="/" className="hover:text-white">Home</Link>
          <span className="mx-2">/</span>
          <span className="text-white">Photo Analysis</span>
        </nav>

        {/* Hero Section */}
        <header className="mb-12">
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">
            Electrical Photo Analysis
          </h1>
          <p className="text-xl text-white/70 mb-8">
            Upload photos of electrical panels, wiring, and equipment. Get instant AI-powered analysis with safety recommendations and troubleshooting guidance.
          </p>
          <a
            href="https://apps.apple.com/us/app/ampora/id6753693522"
            className="inline-flex items-center gap-2 px-6 py-3 bg-purple-600 text-white font-semibold rounded-full hover:bg-purple-500 transition-colors"
          >
            Try Photo Analysis
          </a>
        </header>

        {/* How It Works */}
        <section className="mb-12">
          <h2 className="text-2xl font-display font-bold mb-4">How It Works</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-600/20 rounded-2xl flex items-center justify-center text-3xl mx-auto mb-4">📸</div>
              <h3 className="font-semibold mb-2">1. Take a Photo</h3>
              <p className="text-white/70 text-sm">Snap a photo of any electrical panel, wiring, or equipment</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-600/20 rounded-2xl flex items-center justify-center text-3xl mx-auto mb-4">🤖</div>
              <h3 className="font-semibold mb-2">2. AI Analysis</h3>
              <p className="text-white/70 text-sm">Our AI analyzes the image for components, issues, and safety concerns</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-600/20 rounded-2xl flex items-center justify-center text-3xl mx-auto mb-4">📋</div>
              <h3 className="font-semibold mb-2">3. Get Report</h3>
              <p className="text-white/70 text-sm">Receive detailed analysis with recommendations and next steps</p>
            </div>
          </div>
        </section>

        {/* What Can Be Analyzed */}
        <section className="mb-12">
          <h2 className="text-2xl font-display font-bold mb-4">What Can Be Analyzed?</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-white/5 rounded-xl p-4">
              <h3 className="font-semibold text-purple-400 mb-2">Electrical Panels</h3>
              <p className="text-white/70 text-sm">Breaker panels, load centers, panel schedules, service equipment</p>
            </div>
            <div className="bg-white/5 rounded-xl p-4">
              <h3 className="font-semibold text-purple-400 mb-2">Wiring & Connections</h3>
              <p className="text-white/70 text-sm">Wire terminations, splices, junction boxes, conduit runs</p>
            </div>
            <div className="bg-white/5 rounded-xl p-4">
              <h3 className="font-semibold text-purple-400 mb-2">Motors & Equipment</h3>
              <p className="text-white/70 text-sm">Motor nameplates, starters, disconnects, control panels</p>
            </div>
            <div className="bg-white/5 rounded-xl p-4">
              <h3 className="font-semibold text-purple-400 mb-2">Wiring Diagrams</h3>
              <p className="text-white/70 text-sm">Schematics, single-line diagrams, ladder logic</p>
            </div>
            <div className="bg-white/5 rounded-xl p-4">
              <h3 className="font-semibold text-purple-400 mb-2">Receptacles & Devices</h3>
              <p className="text-white/70 text-sm">Outlets, switches, dimmers, GFCI/AFCI devices</p>
            </div>
            <div className="bg-white/5 rounded-xl p-4">
              <h3 className="font-semibold text-purple-400 mb-2">Problem Areas</h3>
              <p className="text-white/70 text-sm">Burnt connections, code violations, safety hazards</p>
            </div>
          </div>
        </section>

        {/* Analysis Capabilities */}
        <section className="mb-12">
          <h2 className="text-2xl font-display font-bold mb-4">AI Analysis Capabilities</h2>
          <div className="space-y-4">
            <div className="flex gap-4 items-start">
              <div className="w-12 h-12 bg-green-600/20 rounded-xl flex items-center justify-center text-2xl shrink-0">✓</div>
              <div>
                <h3 className="font-semibold mb-1">Component Identification</h3>
                <p className="text-white/70 text-sm">Identifies breakers, wires, equipment, and components in the image</p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <div className="w-12 h-12 bg-yellow-600/20 rounded-xl flex items-center justify-center text-2xl shrink-0">⚠️</div>
              <div>
                <h3 className="font-semibold mb-1">Safety Hazard Detection</h3>
                <p className="text-white/70 text-sm">Spots potential safety issues like double-tapped breakers, burnt connections, or code violations</p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <div className="w-12 h-12 bg-blue-600/20 rounded-xl flex items-center justify-center text-2xl shrink-0">📊</div>
              <div>
                <h3 className="font-semibold mb-1">Nameplate Reading</h3>
                <p className="text-white/70 text-sm">Extracts data from motor nameplates, panel schedules, and equipment labels</p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <div className="w-12 h-12 bg-purple-600/20 rounded-xl flex items-center justify-center text-2xl shrink-0">🔧</div>
              <div>
                <h3 className="font-semibold mb-1">Troubleshooting Suggestions</h3>
                <p className="text-white/70 text-sm">Provides specific troubleshooting steps based on what it sees</p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <div className="w-12 h-12 bg-cyan-600/20 rounded-xl flex items-center justify-center text-2xl shrink-0">📖</div>
              <div>
                <h3 className="font-semibold mb-1">NEC References</h3>
                <p className="text-white/70 text-sm">Cites relevant NEC code sections for any issues identified</p>
              </div>
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <section className="mb-12">
          <h2 className="text-2xl font-display font-bold mb-4">Real-World Use Cases</h2>
          <div className="bg-white/5 rounded-2xl p-6 mb-4">
            <h3 className="font-semibold text-purple-400 mb-2">Service Call Documentation</h3>
            <p className="text-white/80 text-sm">Photo existing conditions before starting work. Get AI assessment to verify your diagnosis and document what you found.</p>
          </div>
          <div className="bg-white/5 rounded-2xl p-6 mb-4">
            <h3 className="font-semibold text-purple-400 mb-2">Training & Learning</h3>
            <p className="text-white/80 text-sm">Apprentices can photograph equipment they're unfamiliar with and get instant explanations of components and their function.</p>
          </div>
          <div className="bg-white/5 rounded-2xl p-6 mb-4">
            <h3 className="font-semibold text-purple-400 mb-2">Estimate Preparation</h3>
            <p className="text-white/80 text-sm">Snap photos during site visits and get AI analysis to help identify scope of work and potential issues.</p>
          </div>
          <div className="bg-white/5 rounded-2xl p-6">
            <h3 className="font-semibold text-purple-400 mb-2">Second Opinion</h3>
            <p className="text-white/80 text-sm">Not sure about something? Get an AI second opinion on what you're seeing before making a decision.</p>
          </div>
        </section>

        {/* App CTA */}
        <section className="bg-gradient-to-r from-purple-900/30 to-cyan-900/30 rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-display font-bold mb-4">
            Try Photo Analysis Now
          </h2>
          <p className="text-white/70 mb-6">
            Take a photo of any electrical equipment and get instant AI analysis. It's like having an expert looking over your shoulder.
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
