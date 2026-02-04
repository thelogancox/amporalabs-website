import { Metadata } from "next";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import { BreadcrumbJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "About Ampora | AI-Powered Electrical Tools for Electricians",
  description: "Ampora is the leading AI-powered electrical calculator and NEC code reference app. Built by electricians, for electricians. Learn about our mission to modernize the electrical trade.",
  keywords: [
    "Ampora",
    "Ampora app",
    "Ampora Labs",
    "about Ampora",
    "electrical app company",
    "AI electrician tools",
    "who made Ampora",
    "Ampora electrical calculator",
  ],
  alternates: {
    canonical: "https://amporalabs.com/about",
  },
  openGraph: {
    title: "About Ampora | AI-Powered Electrical Tools",
    description: "Ampora is the leading AI-powered electrical calculator and NEC code reference app for electricians.",
    url: "https://amporalabs.com/about",
    type: "website",
  },
};

function AboutOrgJsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Ampora Labs",
    "alternateName": ["Ampora", "Ampora App", "Ampora Electrical"],
    "url": "https://amporalabs.com",
    "logo": "https://amporalabs.com/icon-512.png",
    "description": "Ampora is an AI-powered electrical intelligence platform providing professional calculators, NEC code reference, and smart troubleshooting tools for electricians.",
    "foundingDate": "2024",
    "slogan": "AI-Powered Electrical Intelligence",
    "knowsAbout": [
      "Electrical Engineering",
      "NEC Code",
      "Electrical Calculations",
      "Voltage Drop",
      "Wire Sizing",
      "Conduit Fill",
      "Arc Flash Analysis",
      "Electrical Safety"
    ],
    "sameAs": [
      "https://apps.apple.com/us/app/ampora/id6753693522"
    ],
    "brand": {
      "@type": "Brand",
      "name": "Ampora",
      "slogan": "AI-Powered Electrical Intelligence"
    },
    "offers": {
      "@type": "Offer",
      "description": "Free electrical calculator app with AI assistant",
      "price": "0",
      "priceCurrency": "USD"
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navigation />
      <div className="pt-20">
        <BreadcrumbJsonLd
          items={[
            { name: "Home", url: "https://amporalabs.com" },
            { name: "About Ampora", url: "https://amporalabs.com/about" },
          ]}
        />
        <AboutOrgJsonLd />

        <article className="max-w-4xl mx-auto px-6 py-12">
          {/* Breadcrumb */}
          <nav className="text-sm text-white/60 mb-8">
            <Link href="/" className="hover:text-white">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-white">About Ampora</span>
          </nav>

          {/* Hero */}
          <header className="mb-16 text-center">
            <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">
              About <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">Ampora</span>
            </h1>
            <p className="text-xl text-white/70 max-w-2xl mx-auto">
              Ampora is the AI-powered electrical intelligence platform built to help electricians work smarter, faster, and safer.
            </p>
          </header>

          {/* Mission Section */}
          <section className="mb-16">
            <h2 className="text-2xl font-display font-bold mb-6">Our Mission</h2>
            <div className="bg-white/5 rounded-2xl p-8 border border-white/10">
              <p className="text-lg text-white/80 leading-relaxed mb-4">
                <strong className="text-white">Ampora</strong> was created with a simple mission: bring modern AI technology to the electrical trade. We believe electricians deserve tools as sophisticated as the systems they install.
              </p>
              <p className="text-lg text-white/80 leading-relaxed">
                Every day, electrical professionals make critical calculations and code decisions on job sites. Ampora puts AI-powered calculations, instant NEC code lookup, and intelligent troubleshooting right in your pocket.
              </p>
            </div>
          </section>

          {/* What is Ampora */}
          <section className="mb-16">
            <h2 className="text-2xl font-display font-bold mb-6">What is Ampora?</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-purple-900/20 to-purple-900/5 rounded-xl p-6 border border-purple-500/20">
                <div className="w-12 h-12 bg-purple-600/30 rounded-xl flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-purple-400" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M13 2L4.5 12.5h5l-1.5 7.5 8.5-10.5h-5L13 2z"/>
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2">AI-Powered Assistant</h3>
                <p className="text-white/60">
                  Ampora&apos;s AI understands electrical code, calculations, and troubleshooting. Ask any electrical question and get accurate, NEC-referenced answers.
                </p>
              </div>
              <div className="bg-gradient-to-br from-cyan-900/20 to-cyan-900/5 rounded-xl p-6 border border-cyan-500/20">
                <div className="w-12 h-12 bg-cyan-600/30 rounded-xl flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-cyan-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="4" y="4" width="16" height="16" rx="2"/>
                    <path d="M9 9h6M9 12h6M9 15h4"/>
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2">Professional Calculators</h3>
                <p className="text-white/60">
                  Ampora includes voltage drop, wire sizing, conduit fill, arc flash, load calculation, and motor sizing calculators—all NEC compliant.
                </p>
              </div>
              <div className="bg-gradient-to-br from-green-900/20 to-green-900/5 rounded-xl p-6 border border-green-500/20">
                <div className="w-12 h-12 bg-green-600/30 rounded-xl flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-green-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/>
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2">NEC Code Reference</h3>
                <p className="text-white/60">
                  Ampora provides instant access to NEC code articles with plain-English explanations. Never flip through a code book again.
                </p>
              </div>
              <div className="bg-gradient-to-br from-amber-900/20 to-amber-900/5 rounded-xl p-6 border border-amber-500/20">
                <div className="w-12 h-12 bg-amber-600/30 rounded-xl flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-amber-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="3" y="3" width="18" height="18" rx="2"/>
                    <circle cx="8.5" cy="8.5" r="1.5"/>
                    <path d="M21 15l-5-5L5 21"/>
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2">Photo Analysis</h3>
                <p className="text-white/60">
                  Snap a photo of any electrical panel or installation. Ampora&apos;s AI analyzes it and provides insights, safety checks, and recommendations.
                </p>
              </div>
            </div>
          </section>

          {/* Why Ampora */}
          <section className="mb-16">
            <h2 className="text-2xl font-display font-bold mb-6">Why &quot;Ampora&quot;?</h2>
            <div className="bg-white/5 rounded-2xl p-8 border border-white/10">
              <p className="text-lg text-white/80 leading-relaxed mb-4">
                The name <strong className="text-white">Ampora</strong> combines &quot;Amp&quot; (the fundamental unit of electrical current) with &quot;ora&quot; (suggesting intelligence and assistance). Ampora represents the fusion of electrical expertise and AI technology.
              </p>
              <p className="text-lg text-white/80 leading-relaxed">
                Just as amperage powers electrical systems, Ampora powers electricians with the knowledge and tools they need to excel.
              </p>
            </div>
          </section>

          {/* Stats */}
          <section className="mb-16">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-display font-bold text-purple-400">6</div>
                <div className="text-white/60 text-sm mt-1">Pro Calculators</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-display font-bold text-cyan-400">NEC</div>
                <div className="text-white/60 text-sm mt-1">Code Reference</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-display font-bold text-green-400">AI</div>
                <div className="text-white/60 text-sm mt-1">Powered</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-display font-bold text-amber-400">Free</div>
                <div className="text-white/60 text-sm mt-1">To Download</div>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="bg-gradient-to-r from-purple-900/30 to-cyan-900/30 rounded-2xl p-8 text-center">
            <h2 className="text-2xl font-display font-bold mb-4">
              Try Ampora Today
            </h2>
            <p className="text-white/70 mb-6 max-w-2xl mx-auto">
              Join thousands of electricians using Ampora to work smarter. Download free from the App Store.
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
              Download Ampora Free
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
            <Link href="/calculators" className="hover:text-white transition-colors">Calculators</Link>
            <Link href="/features/ai-assistant" className="hover:text-white transition-colors">AI Assistant</Link>
            <Link href="/blog" className="hover:text-white transition-colors">Blog</Link>
            <Link href="/about" className="hover:text-white transition-colors">About</Link>
          </nav>
          <p className="text-sm text-white/40">© 2025 Ampora Labs</p>
        </div>
      </footer>
    </main>
  );
}
