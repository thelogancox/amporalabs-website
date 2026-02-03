import { Metadata } from "next";
import Link from "next/link";
import { BreadcrumbJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "AI Electrical Assistant | Ask Any Electrical Question - NEC Backed",
  description: "Free AI assistant for electricians. Ask any electrical question and get instant, NEC code-backed answers. Trained on electrical engineering, NEC codes, and troubleshooting.",
  keywords: [
    "electrical AI",
    "AI electrician",
    "electrical AI assistant",
    "ask electrician AI",
    "electrical chatbot",
    "NEC AI",
    "electrician AI app",
    "electrical question AI",
    "smart electrical assistant",
    "AI electrical engineer",
    "electrical code AI",
    "electrician helper AI",
    "ChatGPT for electricians",
    "electrical AI tool",
    "electrician AI chat"
  ],
  alternates: {
    canonical: "https://amporalabs.com/features/ai-assistant",
  },
  openGraph: {
    title: "AI Electrical Assistant | NEC-Backed Answers - Ampora",
    description: "Ask any electrical question. Get instant, accurate answers backed by NEC code. The smartest AI for electricians.",
    url: "https://amporalabs.com/features/ai-assistant",
    type: "website",
  },
};

export default function AIAssistantPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "https://amporalabs.com" },
          { name: "Features", url: "https://amporalabs.com/features" },
          { name: "AI Assistant", url: "https://amporalabs.com/features/ai-assistant" },
        ]}
      />

      <article className="max-w-4xl mx-auto px-6 py-12">
        {/* Breadcrumb */}
        <nav className="text-sm text-white/60 mb-8">
          <Link href="/" className="hover:text-white">Home</Link>
          <span className="mx-2">/</span>
          <span className="text-white">AI Assistant</span>
        </nav>

        {/* Hero Section */}
        <header className="mb-12">
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">
            AI Electrical Assistant
          </h1>
          <p className="text-xl text-white/70 mb-8">
            Your personal electrician AI. Ask any electrical question and get instant, accurate answers backed by NEC code. Like having a master electrician in your pocket.
          </p>
          <a
            href="https://apps.apple.com/us/app/ampora/id6753693522"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-purple-600 text-white font-semibold rounded-full hover:bg-purple-500 transition-colors"
          >
            Try AI Assistant Free
          </a>
        </header>

        {/* What is AI Assistant */}
        <section className="mb-12">
          <h2 className="text-2xl font-display font-bold mb-4">What is Ampora AI?</h2>
          <p className="text-white/80 mb-4">
            Ampora's <strong>AI electrical assistant</strong> is a specialized artificial intelligence trained specifically for electrical work. Unlike general-purpose AI chatbots, Ampora understands electrical terminology, NEC code requirements, and real-world electrical installation practices.
          </p>
          <p className="text-white/80">
            Whether you're troubleshooting a problem on the job, need a quick NEC reference, or want to verify your calculations, Ampora AI provides instant, reliable answers that you can trust in the field.
          </p>
        </section>

        {/* What You Can Ask */}
        <section className="mb-12">
          <h2 className="text-2xl font-display font-bold mb-4">What Can You Ask?</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-white/5 rounded-xl p-4">
              <h3 className="font-semibold text-purple-400 mb-2">NEC Code Questions</h3>
              <p className="text-white/70 text-sm">"What size wire do I need for a 100 amp sub panel?"</p>
            </div>
            <div className="bg-white/5 rounded-xl p-4">
              <h3 className="font-semibold text-purple-400 mb-2">Troubleshooting Help</h3>
              <p className="text-white/70 text-sm">"Why does my GFCI keep tripping with no load?"</p>
            </div>
            <div className="bg-white/5 rounded-xl p-4">
              <h3 className="font-semibold text-purple-400 mb-2">Installation Questions</h3>
              <p className="text-white/70 text-sm">"How do I wire a 3-way switch with a dimmer?"</p>
            </div>
            <div className="bg-white/5 rounded-xl p-4">
              <h3 className="font-semibold text-purple-400 mb-2">Calculation Help</h3>
              <p className="text-white/70 text-sm">"What's the demand factor for 10 electric ranges?"</p>
            </div>
            <div className="bg-white/5 rounded-xl p-4">
              <h3 className="font-semibold text-purple-400 mb-2">Motor Questions</h3>
              <p className="text-white/70 text-sm">"What size breaker for a 5 HP 230V motor?"</p>
            </div>
            <div className="bg-white/5 rounded-xl p-4">
              <h3 className="font-semibold text-purple-400 mb-2">Safety Questions</h3>
              <p className="text-white/70 text-sm">"What PPE do I need for energized 480V work?"</p>
            </div>
          </div>
        </section>

        {/* Example Conversations */}
        <section className="mb-12">
          <h2 className="text-2xl font-display font-bold mb-4">Example Conversations</h2>

          <div className="bg-white/5 rounded-2xl p-6 mb-4">
            <div className="flex gap-3 mb-4">
              <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center text-sm">You</div>
              <div className="flex-1">
                <p className="text-white/80">"What size conduit for 4 #6 THHN and 1 #10 ground?"</p>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="w-8 h-8 bg-cyan-600 rounded-full flex items-center justify-center text-sm">AI</div>
              <div className="flex-1">
                <p className="text-white/80">"For 4 #6 THHN (0.0507 sq in each = 0.2028) plus 1 #10 THHN (0.0211 sq in), total wire fill is 0.2239 sq in. Using the 40% fill rule for 3+ conductors, you need a conduit with at least 0.56 sq in total area. <strong>Use 1" EMT</strong> (0.864 sq in total, 0.346 sq in at 40%) which provides adequate fill with room to spare per NEC Chapter 9."</p>
              </div>
            </div>
          </div>

          <div className="bg-white/5 rounded-2xl p-6">
            <div className="flex gap-3 mb-4">
              <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center text-sm">You</div>
              <div className="flex-1">
                <p className="text-white/80">"Can I use 14 AWG for a 20 amp circuit?"</p>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="w-8 h-8 bg-cyan-600 rounded-full flex items-center justify-center text-sm">AI</div>
              <div className="flex-1">
                <p className="text-white/80">"No. Per <strong>NEC 240.4(D)</strong>, 14 AWG conductors are limited to 15 amp overcurrent protection. For a 20 amp circuit, you must use at minimum <strong>12 AWG</strong> copper conductors. This is a safety requirement to prevent conductor overheating."</p>
              </div>
            </div>
          </div>
        </section>

        {/* AI Capabilities */}
        <section className="mb-12">
          <h2 className="text-2xl font-display font-bold mb-4">AI Capabilities</h2>
          <div className="space-y-4">
            <div className="flex gap-4 items-start">
              <div className="w-12 h-12 bg-purple-600/20 rounded-xl flex items-center justify-center text-2xl shrink-0">📚</div>
              <div>
                <h3 className="font-semibold mb-1">NEC Knowledge</h3>
                <p className="text-white/70 text-sm">Trained on complete NEC 2023 with references to specific articles and tables</p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <div className="w-12 h-12 bg-purple-600/20 rounded-xl flex items-center justify-center text-2xl shrink-0">⚡</div>
              <div>
                <h3 className="font-semibold mb-1">Electrical Engineering</h3>
                <p className="text-white/70 text-sm">Understands electrical theory, formulas, and practical applications</p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <div className="w-12 h-12 bg-purple-600/20 rounded-xl flex items-center justify-center text-2xl shrink-0">🔧</div>
              <div>
                <h3 className="font-semibold mb-1">Troubleshooting Logic</h3>
                <p className="text-white/70 text-sm">Step-by-step diagnostic reasoning for electrical problems</p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <div className="w-12 h-12 bg-purple-600/20 rounded-xl flex items-center justify-center text-2xl shrink-0">🏗️</div>
              <div>
                <h3 className="font-semibold mb-1">Installation Best Practices</h3>
                <p className="text-white/70 text-sm">Real-world installation methods and techniques</p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Ampora AI */}
        <section className="mb-12">
          <h2 className="text-2xl font-display font-bold mb-4">Why Use Ampora Instead of ChatGPT?</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-white/20">
                  <th className="py-3 px-4 text-white/60 font-medium">Feature</th>
                  <th className="py-3 px-4 text-white/60 font-medium">Ampora AI</th>
                  <th className="py-3 px-4 text-white/60 font-medium">General AI</th>
                </tr>
              </thead>
              <tbody className="text-white/80">
                <tr className="border-b border-white/10">
                  <td className="py-3 px-4">NEC Code Accuracy</td>
                  <td className="py-3 px-4 text-green-400">Specialized training</td>
                  <td className="py-3 px-4 text-white/40">Generic knowledge</td>
                </tr>
                <tr className="border-b border-white/10">
                  <td className="py-3 px-4">Article References</td>
                  <td className="py-3 px-4 text-green-400">Cites specific sections</td>
                  <td className="py-3 px-4 text-white/40">Often incorrect</td>
                </tr>
                <tr className="border-b border-white/10">
                  <td className="py-3 px-4">Field-Ready</td>
                  <td className="py-3 px-4 text-green-400">Mobile-optimized</td>
                  <td className="py-3 px-4 text-white/40">Desktop-focused</td>
                </tr>
                <tr className="border-b border-white/10">
                  <td className="py-3 px-4">Integrated Calculators</td>
                  <td className="py-3 px-4 text-green-400">Built-in tools</td>
                  <td className="py-3 px-4 text-white/40">Text only</td>
                </tr>
                <tr>
                  <td className="py-3 px-4">Electrical Focus</td>
                  <td className="py-3 px-4 text-green-400">100% electrical</td>
                  <td className="py-3 px-4 text-white/40">Generalist</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* App CTA */}
        <section className="bg-gradient-to-r from-purple-900/30 to-cyan-900/30 rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-display font-bold mb-4">
            Try Ampora AI Free
          </h2>
          <p className="text-white/70 mb-6">
            Get answers to your electrical questions instantly. No registration required - just download and ask.
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
