import Link from "next/link";
import Navigation from "@/components/Navigation";

export default function FeaturesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navigation />
      <div className="pt-20">
        {children}
      </div>

      {/* Features Navigation */}
      <section className="py-16 px-6 border-t border-white/10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-display font-bold mb-8 text-center">
            Explore All Ampora Features
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Link href="/features/ai-assistant" className="p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-colors text-center">
              <div className="text-2xl mb-2">🤖</div>
              <div className="text-sm font-medium">AI Assistant</div>
            </Link>
            <Link href="/features/nec-code-reference" className="p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-colors text-center">
              <div className="text-2xl mb-2">📖</div>
              <div className="text-sm font-medium">NEC Code</div>
            </Link>
            <Link href="/features/photo-analysis" className="p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-colors text-center">
              <div className="text-2xl mb-2">📸</div>
              <div className="text-sm font-medium">Photo Analysis</div>
            </Link>
            <Link href="/features/troubleshooting" className="p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-colors text-center">
              <div className="text-2xl mb-2">🔧</div>
              <div className="text-sm font-medium">Troubleshooting</div>
            </Link>
          </div>
        </div>
      </section>

      {/* Calculator Links */}
      <section className="py-8 px-6 bg-white/5">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-lg font-display font-semibold mb-4 text-center text-white/60">
            Professional Calculators
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            <Link href="/calculators/voltage-drop" className="px-4 py-2 bg-white/10 rounded-full text-sm hover:bg-white/20 transition-colors">
              Voltage Drop
            </Link>
            <Link href="/calculators/wire-sizing" className="px-4 py-2 bg-white/10 rounded-full text-sm hover:bg-white/20 transition-colors">
              Wire Sizing
            </Link>
            <Link href="/calculators/conduit-fill" className="px-4 py-2 bg-white/10 rounded-full text-sm hover:bg-white/20 transition-colors">
              Conduit Fill
            </Link>
            <Link href="/calculators/arc-flash" className="px-4 py-2 bg-white/10 rounded-full text-sm hover:bg-white/20 transition-colors">
              Arc Flash
            </Link>
            <Link href="/calculators/load-calculation" className="px-4 py-2 bg-white/10 rounded-full text-sm hover:bg-white/20 transition-colors">
              Load Calc
            </Link>
            <Link href="/calculators/motor-sizing" className="px-4 py-2 bg-white/10 rounded-full text-sm hover:bg-white/20 transition-colors">
              Motor Sizing
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6 bg-gradient-to-b from-purple-900/20 to-black">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            Get All Features in One App
          </h2>
          <p className="text-white/70 mb-8 max-w-2xl mx-auto">
            Download Ampora for instant access to AI assistant, all calculators, NEC code reference, photo analysis, and more. Free to try.
          </p>
          <a
            href="https://apps.apple.com/us/app/ampora/id6753693522"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-black font-semibold rounded-full hover:bg-white/90 transition-colors"
          >
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
            </svg>
            Download on App Store
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-white/10">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <Link href="/" className="text-xl font-display font-bold">Ampora</Link>
          <nav className="flex gap-6 text-sm text-white/60">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <Link href="/calculators/voltage-drop" className="hover:text-white transition-colors">Calculators</Link>
            <Link href="/electrical-formulas" className="hover:text-white transition-colors">Formulas</Link>
          </nav>
          <p className="text-sm text-white/40">© 2024 Ampora Labs</p>
        </div>
      </footer>
    </main>
  );
}
