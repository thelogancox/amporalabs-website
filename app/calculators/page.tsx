import { Metadata } from "next";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import { BreadcrumbJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Electrical Calculators | Free NEC-Compliant Tools for Electricians",
  description: "Free electrical calculators for electricians. Voltage drop calculator, wire sizing calculator, conduit fill calculator, arc flash calculator, load calculation, and motor sizing. All NEC-compliant.",
  keywords: [
    "electrical calculators",
    "electrician calculators",
    "electrical calculator app",
    "NEC calculators",
    "free electrical calculators",
    "electrical engineering calculators",
    "electrician tools online",
    "voltage drop calculator",
    "wire sizing calculator",
    "conduit fill calculator",
    "arc flash calculator",
    "load calculation",
    "motor sizing calculator"
  ],
  alternates: {
    canonical: "https://amporalabs.com/calculators",
  },
  openGraph: {
    title: "Free Electrical Calculators | NEC-Compliant Tools - Ampora",
    description: "Professional electrical calculators for electricians. Voltage drop, wire sizing, conduit fill, arc flash, load calc & motor sizing.",
    url: "https://amporalabs.com/calculators",
    type: "website",
  },
};

const calculators = [
  {
    title: "Voltage Drop Calculator",
    description: "Calculate voltage drop for single-phase and three-phase circuits. NEC-compliant with 3% and 5% recommendations.",
    href: "/calculators/voltage-drop",
    icon: "⚡",
    color: "purple",
  },
  {
    title: "Wire Sizing Calculator",
    description: "Size conductors using NEC ampacity tables. Supports all temperature ratings and derating factors.",
    href: "/calculators/wire-sizing",
    icon: "🔌",
    color: "cyan",
  },
  {
    title: "Conduit Fill Calculator",
    description: "Calculate conduit fill per NEC Chapter 9. Supports EMT, RMC, IMC, PVC, and FMC.",
    href: "/calculators/conduit-fill",
    icon: "🔧",
    color: "green",
  },
  {
    title: "Arc Flash Calculator",
    description: "Calculate incident energy, arc flash boundary, and required PPE per NFPA 70E and IEEE 1584.",
    href: "/calculators/arc-flash",
    icon: "🔥",
    color: "orange",
  },
  {
    title: "Load Calculation",
    description: "Calculate service size and panel loads using NEC Article 220 demand factors.",
    href: "/calculators/load-calculation",
    icon: "📊",
    color: "blue",
  },
  {
    title: "Motor Sizing Calculator",
    description: "Size motor circuits including FLC, conductor, overload, and short-circuit protection per NEC 430.",
    href: "/calculators/motor-sizing",
    icon: "⚙️",
    color: "yellow",
  },
];

export default function CalculatorsPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navigation />
      <div className="pt-20">
        <BreadcrumbJsonLd
          items={[
            { name: "Home", url: "https://amporalabs.com" },
            { name: "Calculators", url: "https://amporalabs.com/calculators" },
          ]}
        />

        <article className="max-w-6xl mx-auto px-6 py-12">
          {/* Breadcrumb */}
          <nav className="text-sm text-white/60 mb-8">
            <Link href="/" className="hover:text-white">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-white">Calculators</span>
          </nav>

          {/* Hero Section */}
          <header className="mb-12 text-center">
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">
              Electrical Calculators
            </h1>
            <p className="text-xl text-white/70 mb-8 max-w-3xl mx-auto">
              Professional-grade electrical calculators for electricians. All calculations are NEC-compliant with built-in tables and formulas.
            </p>
            <a
              href="https://apps.apple.com/us/app/ampora/id6753693522"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-purple-600 text-white font-semibold rounded-full hover:bg-purple-500 transition-colors"
            >
              Get All Calculators in App
            </a>
          </header>

          {/* Calculator Grid */}
          <section className="mb-16">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {calculators.map((calc) => (
                <Link
                  key={calc.href}
                  href={calc.href}
                  className="group bg-white/5 hover:bg-white/10 rounded-2xl p-6 transition-all hover:scale-105"
                >
                  <div className="text-4xl mb-4">{calc.icon}</div>
                  <h2 className="text-xl font-display font-bold mb-2 group-hover:text-purple-400 transition-colors">
                    {calc.title}
                  </h2>
                  <p className="text-white/60 text-sm">
                    {calc.description}
                  </p>
                  <div className="mt-4 text-purple-400 text-sm font-medium">
                    Use Calculator →
                  </div>
                </Link>
              ))}
            </div>
          </section>

          {/* Why Use Ampora */}
          <section className="mb-16">
            <h2 className="text-2xl font-display font-bold mb-6 text-center">
              Why Use Ampora Calculators?
            </h2>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-600/20 rounded-2xl flex items-center justify-center text-2xl mx-auto mb-4">📱</div>
                <h3 className="font-semibold mb-2">Mobile-First</h3>
                <p className="text-white/60 text-sm">Designed for field use on your phone</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-600/20 rounded-2xl flex items-center justify-center text-2xl mx-auto mb-4">📖</div>
                <h3 className="font-semibold mb-2">NEC Built-In</h3>
                <p className="text-white/60 text-sm">All NEC tables and requirements included</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-600/20 rounded-2xl flex items-center justify-center text-2xl mx-auto mb-4">⚡</div>
                <h3 className="font-semibold mb-2">Instant Results</h3>
                <p className="text-white/60 text-sm">Get answers in seconds, not minutes</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-600/20 rounded-2xl flex items-center justify-center text-2xl mx-auto mb-4">🤖</div>
                <h3 className="font-semibold mb-2">AI-Powered</h3>
                <p className="text-white/60 text-sm">Ask questions about your calculations</p>
              </div>
            </div>
          </section>

          {/* Related Features */}
          <section className="mb-12">
            <h2 className="text-2xl font-display font-bold mb-6 text-center">
              More Ampora Features
            </h2>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/features/ai-assistant" className="px-6 py-3 bg-white/10 rounded-full hover:bg-white/20 transition-colors">
                AI Assistant
              </Link>
              <Link href="/features/nec-code-reference" className="px-6 py-3 bg-white/10 rounded-full hover:bg-white/20 transition-colors">
                NEC Code Reference
              </Link>
              <Link href="/features/photo-analysis" className="px-6 py-3 bg-white/10 rounded-full hover:bg-white/20 transition-colors">
                Photo Analysis
              </Link>
              <Link href="/electrical-formulas" className="px-6 py-3 bg-white/10 rounded-full hover:bg-white/20 transition-colors">
                Electrical Formulas
              </Link>
            </div>
          </section>

          {/* App CTA */}
          <section className="bg-gradient-to-r from-purple-900/30 to-cyan-900/30 rounded-2xl p-8 text-center">
            <h2 className="text-2xl font-display font-bold mb-4">
              All Calculators in One App
            </h2>
            <p className="text-white/70 mb-6">
              Download Ampora to get all 6 electrical calculators plus AI assistant, NEC code reference, and more. Free to try.
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
            <Link href="/electrical-formulas" className="hover:text-white transition-colors">Formulas</Link>
          </nav>
          <p className="text-sm text-white/40">© 2024 Ampora Labs</p>
        </div>
      </footer>
    </main>
  );
}
