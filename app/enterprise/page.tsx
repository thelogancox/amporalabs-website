import { Metadata } from "next";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import { BreadcrumbJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Ampora for Electrical Contractors | AI Tools for Teams",
  description: "Equip your electrical team with AI-powered tools. NEC code reference, professional calculators, photo documentation, and troubleshooting assistance. Improve productivity and reduce callbacks for electrical contractors.",
  keywords: [
    "electrical contractor software",
    "AI for electrical contractors",
    "electrical compliance software",
    "AI for electrical companies",
    "field service AI tools",
    "electrician team tools",
    "electrical contractor app",
    "trade automation software",
    "electrical workforce tools",
    "contractor productivity tools",
    "electrical business software",
    "electrician fleet management",
    "NEC compliance for contractors",
    "electrical estimating tools",
    "contractor field software"
  ],
  alternates: {
    canonical: "https://amporalabs.com/enterprise",
  },
  openGraph: {
    title: "Ampora for Electrical Contractors | AI Tools for Teams - Ampora",
    description: "AI-powered electrical tools for contractor teams. Improve productivity and code compliance.",
    url: "https://amporalabs.com/enterprise",
    type: "website",
  },
};

export default function EnterprisePage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navigation />
      <div className="pt-20">
        <BreadcrumbJsonLd
          items={[
            { name: "Home", url: "https://amporalabs.com" },
            { name: "For Contractors", url: "https://amporalabs.com/enterprise" },
          ]}
        />

        {/* Hero Section */}
        <section className="max-w-6xl mx-auto px-6 py-16 text-center">
          <span className="inline-block px-4 py-1.5 bg-purple-600/20 text-purple-300 text-sm font-medium rounded-full mb-6">
            For Electrical Contractors & Teams
          </span>
          <h1 className="text-4xl md:text-6xl font-display font-bold mb-6 leading-tight">
            AI-Powered Tools for Your
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400"> Electrical Team</span>
          </h1>
          <p className="text-xl text-white/70 mb-8 max-w-3xl mx-auto">
            Equip every electrician on your team with instant NEC code lookup, professional calculators, and AI troubleshooting assistance. Reduce callbacks, pass inspections, and improve productivity.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="mailto:enterprise@amporalabs.com?subject=Ampora Enterprise Inquiry"
              className="px-8 py-4 bg-purple-600 text-white font-semibold rounded-full hover:bg-purple-500 transition-colors"
            >
              Contact Sales
            </a>
            <a
              href="https://apps.apple.com/us/app/ampora/id6753693522"
              className="px-8 py-4 bg-white/10 text-white font-semibold rounded-full hover:bg-white/20 transition-colors"
            >
              Try Free First
            </a>
          </div>
        </section>

        {/* Problem Section */}
        <section className="max-w-6xl mx-auto px-6 py-16">
          <h2 className="text-3xl font-display font-bold text-center mb-12">
            Challenges Electrical Contractors Face
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-red-900/10 border border-red-500/20 rounded-2xl p-6">
              <div className="text-3xl mb-4">❌</div>
              <h3 className="font-semibold text-lg mb-2">Failed Inspections</h3>
              <p className="text-white/60 text-sm">
                Code violations delay projects, waste time on callbacks, and damage your reputation with GCs and homeowners.
              </p>
            </div>
            <div className="bg-red-900/10 border border-red-500/20 rounded-2xl p-6">
              <div className="text-3xl mb-4">❌</div>
              <h3 className="font-semibold text-lg mb-2">Knowledge Gaps</h3>
              <p className="text-white/60 text-sm">
                Junior electricians don't have the same code knowledge as veterans. Questions slow down work or lead to mistakes.
              </p>
            </div>
            <div className="bg-red-900/10 border border-red-500/20 rounded-2xl p-6">
              <div className="text-3xl mb-4">❌</div>
              <h3 className="font-semibold text-lg mb-2">Calculation Errors</h3>
              <p className="text-white/60 text-sm">
                Wrong wire sizes, missed voltage drop, incorrect conduit fill - calculation mistakes cost materials and labor.
              </p>
            </div>
          </div>
        </section>

        {/* Solution Section */}
        <section className="bg-white/5 py-16">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl font-display font-bold text-center mb-4">
              How Ampora Helps Your Team
            </h2>
            <p className="text-white/60 text-center mb-12 max-w-2xl mx-auto">
              Put the knowledge of your best electricians in everyone's pocket
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-black/30 rounded-2xl p-8">
                <div className="w-12 h-12 bg-purple-600/20 rounded-xl flex items-center justify-center text-2xl mb-4">
                  🤖
                </div>
                <h3 className="text-xl font-semibold mb-3">AI Code Assistant</h3>
                <p className="text-white/70 mb-4">
                  Every team member gets instant answers to NEC code questions. No more waiting to ask a senior electrician or flipping through code books.
                </p>
                <ul className="space-y-2 text-white/60 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-green-400 mt-1">✓</span>
                    <span>Natural language code queries</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400 mt-1">✓</span>
                    <span>Specific NEC article references</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400 mt-1">✓</span>
                    <span>Pre-inspection checklists</span>
                  </li>
                </ul>
              </div>

              <div className="bg-black/30 rounded-2xl p-8">
                <div className="w-12 h-12 bg-cyan-600/20 rounded-xl flex items-center justify-center text-2xl mb-4">
                  📱
                </div>
                <h3 className="text-xl font-semibold mb-3">Professional Calculators</h3>
                <p className="text-white/70 mb-4">
                  Six NEC-compliant calculators handle voltage drop, wire sizing, conduit fill, arc flash, load calculations, and motor sizing.
                </p>
                <ul className="space-y-2 text-white/60 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-green-400 mt-1">✓</span>
                    <span>Built-in NEC tables</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400 mt-1">✓</span>
                    <span>Automatic derating factors</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400 mt-1">✓</span>
                    <span>Save and share calculations</span>
                  </li>
                </ul>
              </div>

              <div className="bg-black/30 rounded-2xl p-8">
                <div className="w-12 h-12 bg-green-600/20 rounded-xl flex items-center justify-center text-2xl mb-4">
                  📷
                </div>
                <h3 className="text-xl font-semibold mb-3">Photo Analysis</h3>
                <p className="text-white/70 mb-4">
                  AI-powered photo analysis helps document job sites, identify components, and spot potential issues before inspections.
                </p>
                <ul className="space-y-2 text-white/60 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-green-400 mt-1">✓</span>
                    <span>Panel and wiring analysis</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400 mt-1">✓</span>
                    <span>Component identification</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400 mt-1">✓</span>
                    <span>Job documentation</span>
                  </li>
                </ul>
              </div>

              <div className="bg-black/30 rounded-2xl p-8">
                <div className="w-12 h-12 bg-orange-600/20 rounded-xl flex items-center justify-center text-2xl mb-4">
                  🔧
                </div>
                <h3 className="text-xl font-semibold mb-3">Troubleshooting Guide</h3>
                <p className="text-white/70 mb-4">
                  Interactive troubleshooting helps technicians diagnose problems systematically, reducing time on service calls.
                </p>
                <ul className="space-y-2 text-white/60 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-green-400 mt-1">✓</span>
                    <span>Symptom-based diagnosis</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400 mt-1">✓</span>
                    <span>Step-by-step procedures</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400 mt-1">✓</span>
                    <span>Common issue solutions</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="max-w-6xl mx-auto px-6 py-16">
          <h2 className="text-3xl font-display font-bold text-center mb-12">
            Results Contractors See
          </h2>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-4xl font-display font-bold text-purple-400 mb-2">↓</div>
              <div className="text-2xl font-bold mb-1">Fewer</div>
              <p className="text-white/60 text-sm">Inspection Failures</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-display font-bold text-cyan-400 mb-2">↓</div>
              <div className="text-2xl font-bold mb-1">Reduced</div>
              <p className="text-white/60 text-sm">Callback Rate</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-display font-bold text-green-400 mb-2">↑</div>
              <div className="text-2xl font-bold mb-1">Faster</div>
              <p className="text-white/60 text-sm">Code Lookup</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-display font-bold text-orange-400 mb-2">↑</div>
              <div className="text-2xl font-bold mb-1">Better</div>
              <p className="text-white/60 text-sm">Team Consistency</p>
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <section className="bg-white/5 py-16">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl font-display font-bold text-center mb-12">
              Who Uses Ampora
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-black/30 rounded-2xl p-6">
                <h3 className="font-semibold text-lg mb-3">Residential Contractors</h3>
                <p className="text-white/60 text-sm mb-4">
                  New construction, remodels, service work. Ensure every tech applies code correctly on every job.
                </p>
                <ul className="space-y-1 text-white/70 text-sm">
                  <li>• NEC 210.52 receptacle placement</li>
                  <li>• GFCI/AFCI requirements</li>
                  <li>• Service sizing calculations</li>
                </ul>
              </div>
              <div className="bg-black/30 rounded-2xl p-6">
                <h3 className="font-semibold text-lg mb-3">Commercial Contractors</h3>
                <p className="text-white/60 text-sm mb-4">
                  Larger projects with complex requirements. Keep crews aligned on code and calculations.
                </p>
                <ul className="space-y-1 text-white/70 text-sm">
                  <li>• Conduit fill calculations</li>
                  <li>• Motor circuit sizing</li>
                  <li>• Arc flash analysis</li>
                </ul>
              </div>
              <div className="bg-black/30 rounded-2xl p-6">
                <h3 className="font-semibold text-lg mb-3">Service Companies</h3>
                <p className="text-white/60 text-sm mb-4">
                  Troubleshooting and repair work. Diagnose problems faster and document with photos.
                </p>
                <ul className="space-y-1 text-white/70 text-sm">
                  <li>• AI troubleshooting guidance</li>
                  <li>• Photo documentation</li>
                  <li>• Quick code verification</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing/Contact Section */}
        <section className="max-w-4xl mx-auto px-6 py-16">
          <div className="bg-gradient-to-r from-purple-900/30 to-cyan-900/30 rounded-2xl p-8 md:p-12 text-center">
            <h2 className="text-3xl font-display font-bold mb-4">
              Ready to Equip Your Team?
            </h2>
            <p className="text-white/70 mb-8 max-w-2xl mx-auto">
              Contact us about team pricing, volume licensing, and enterprise features. We'll help you get Ampora into the hands of every electrician on your crew.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href="mailto:enterprise@amporalabs.com?subject=Ampora Enterprise Inquiry"
                className="px-8 py-4 bg-white text-black font-semibold rounded-full hover:bg-white/90 transition-colors"
              >
                Contact Sales
              </a>
              <a
                href="https://apps.apple.com/us/app/ampora/id6753693522"
                className="px-8 py-4 bg-white/10 text-white font-semibold rounded-full hover:bg-white/20 transition-colors"
              >
                Download Free Trial
              </a>
            </div>
            <p className="text-white/40 text-sm mt-6">
              Individual electricians: Download free from the App Store. No credit card required.
            </p>
          </div>
        </section>

        {/* FAQ for Enterprise */}
        <section className="max-w-4xl mx-auto px-6 py-16">
          <h2 className="text-2xl font-display font-bold text-center mb-8">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            <div className="bg-white/5 rounded-xl p-6">
              <h3 className="font-semibold mb-2">How does team licensing work?</h3>
              <p className="text-white/60 text-sm">
                Contact us for team pricing. We offer volume discounts for contractors with multiple electricians. Each team member gets their own account with full access to all features.
              </p>
            </div>
            <div className="bg-white/5 rounded-xl p-6">
              <h3 className="font-semibold mb-2">Is Ampora available on Android?</h3>
              <p className="text-white/60 text-sm">
                Currently Ampora is iOS only. Android version is in development - contact us to be notified when it launches.
              </p>
            </div>
            <div className="bg-white/5 rounded-xl p-6">
              <h3 className="font-semibold mb-2">How accurate is the NEC information?</h3>
              <p className="text-white/60 text-sm">
                Ampora's AI is trained on NEC code and provides specific article references. However, always verify critical code questions with official sources. Ampora is a tool to assist licensed electricians, not replace professional judgment.
              </p>
            </div>
            <div className="bg-white/5 rounded-xl p-6">
              <h3 className="font-semibold mb-2">Can we track usage across our team?</h3>
              <p className="text-white/60 text-sm">
                Enterprise features including team management and usage analytics are available for larger contractors. Contact sales to discuss your needs.
              </p>
            </div>
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-white/10">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <Link href="/" className="text-xl font-display font-bold">Ampora</Link>
          <nav className="flex flex-wrap justify-center gap-6 text-sm text-white/60">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <Link href="/calculators" className="hover:text-white transition-colors">Calculators</Link>
            <Link href="/features/ai-assistant" className="hover:text-white transition-colors">AI Assistant</Link>
            <Link href="/blog" className="hover:text-white transition-colors">Blog</Link>
            <Link href="/enterprise" className="hover:text-white transition-colors text-white">For Contractors</Link>
          </nav>
          <p className="text-sm text-white/40">© 2025 Ampora Labs</p>
        </div>
      </footer>
    </main>
  );
}
