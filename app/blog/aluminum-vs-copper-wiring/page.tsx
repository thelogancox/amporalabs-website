import { Metadata } from "next";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import { BlogPostingJsonLd, BreadcrumbJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Aluminum vs Copper Wiring: Pros, Cons, and NEC Requirements",
  description: "Compare aluminum and copper conductors for electrical installations. Learn about ampacity differences, termination requirements, cost considerations, and when to use each type.",
  keywords: [
    "aluminum vs copper wiring",
    "aluminum wire",
    "copper wire",
    "conductor comparison",
    "aluminum wiring problems",
    "AL/CU rated",
    "wire ampacity",
    "aluminum terminations",
    "copper clad aluminum",
    "electrical conductor types"
  ],
  openGraph: {
    title: "Aluminum vs Copper Wiring Comparison",
    description: "Complete comparison of aluminum and copper conductors for electrical work.",
    type: "article",
    publishedTime: "2025-02-03",
  },
};

function HeroIllustration() {
  return (
    <svg viewBox="0 0 400 160" className="w-full h-40 md:h-48" aria-label="Copper and aluminum wire comparison">
      {/* Copper wire */}
      <g transform="translate(50, 30)">
        <rect x="0" y="20" width="120" height="60" rx="30" fill="#b87333" stroke="#8b5a2b" strokeWidth="3"/>
        <rect x="10" y="30" width="100" height="40" rx="20" fill="#d4956a"/>
        <text x="60" y="55" textAnchor="middle" fill="#3d2817" fontSize="12" fontWeight="bold">COPPER</text>
        <text x="60" y="105" textAnchor="middle" fill="#f59e0b" fontSize="10" fontWeight="bold">Cu</text>
        <text x="60" y="120" textAnchor="middle" fill="#9ca3af" fontSize="8">Better conductivity</text>
        <text x="60" y="132" textAnchor="middle" fill="#9ca3af" fontSize="8">Higher cost</text>
      </g>

      {/* Aluminum wire */}
      <g transform="translate(230, 30)">
        <rect x="0" y="20" width="120" height="60" rx="30" fill="#a8a8a8" stroke="#787878" strokeWidth="3"/>
        <rect x="10" y="30" width="100" height="40" rx="20" fill="#c4c4c4"/>
        <text x="60" y="55" textAnchor="middle" fill="#333" fontSize="12" fontWeight="bold">ALUMINUM</text>
        <text x="60" y="105" textAnchor="middle" fill="#8b5cf6" fontSize="10" fontWeight="bold">Al</text>
        <text x="60" y="120" textAnchor="middle" fill="#9ca3af" fontSize="8">Lower cost</text>
        <text x="60" y="132" textAnchor="middle" fill="#9ca3af" fontSize="8">Lighter weight</text>
      </g>

      {/* VS */}
      <text x="200" y="65" textAnchor="middle" fill="#6b7280" fontSize="18" fontWeight="bold">VS</text>
    </svg>
  );
}

function ComparisonChart() {
  return (
    <svg viewBox="0 0 400 200" className="w-full h-52" aria-label="Ampacity comparison between copper and aluminum">
      <rect x="10" y="10" width="380" height="180" rx="8" fill="#1f2937" stroke="#374151" strokeWidth="2"/>

      <text x="200" y="32" textAnchor="middle" fill="#fff" fontSize="11" fontWeight="bold">Ampacity Comparison (75°C, NEC 310.16)</text>

      {/* Headers */}
      <text x="70" y="55" textAnchor="middle" fill="#9ca3af" fontSize="9" fontWeight="bold">Wire Size</text>
      <text x="170" y="55" textAnchor="middle" fill="#f59e0b" fontSize="9" fontWeight="bold">Copper</text>
      <text x="270" y="55" textAnchor="middle" fill="#8b5cf6" fontSize="9" fontWeight="bold">Aluminum</text>
      <text x="360" y="55" textAnchor="middle" fill="#9ca3af" fontSize="9" fontWeight="bold">Ratio</text>

      <line x1="20" y1="62" x2="390" y2="62" stroke="#374151" strokeWidth="1"/>

      {[
        { size: "#6 AWG", cu: "65", al: "50", ratio: "77%" },
        { size: "#4 AWG", cu: "85", al: "65", ratio: "76%" },
        { size: "#2 AWG", cu: "115", al: "90", ratio: "78%" },
        { size: "#1/0 AWG", cu: "150", al: "120", ratio: "80%" },
        { size: "#4/0 AWG", cu: "230", al: "180", ratio: "78%" },
        { size: "250 kcmil", cu: "255", al: "205", ratio: "80%" },
        { size: "500 kcmil", cu: "380", al: "310", ratio: "82%" },
      ].map((row, i) => (
        <g key={i}>
          <text x="70" y={80 + i * 16} textAnchor="middle" fill="#e5e7eb" fontSize="9">{row.size}</text>
          <text x="170" y={80 + i * 16} textAnchor="middle" fill="#f59e0b" fontSize="9" fontWeight="bold">{row.cu}A</text>
          <text x="270" y={80 + i * 16} textAnchor="middle" fill="#8b5cf6" fontSize="9" fontWeight="bold">{row.al}A</text>
          <text x="360" y={80 + i * 16} textAnchor="middle" fill="#6b7280" fontSize="9">{row.ratio}</text>
        </g>
      ))}
    </svg>
  );
}

export default function BlogPost() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navigation />
      <div className="pt-20">
        <BreadcrumbJsonLd
          items={[
            { name: "Home", url: "https://amporalabs.com" },
            { name: "Blog", url: "https://amporalabs.com/blog" },
            { name: "Aluminum vs Copper", url: "https://amporalabs.com/blog/aluminum-vs-copper-wiring" },
          ]}
        />
        <BlogPostingJsonLd
          headline="Aluminum vs Copper Wiring: Pros, Cons, and NEC Requirements"
          description="Compare aluminum and copper conductors for electrical installations."
          datePublished="2025-02-03"
          url="https://amporalabs.com/blog/aluminum-vs-copper-wiring"
        />

        <article className="max-w-4xl mx-auto px-6 py-12">
          <nav className="text-sm text-white/60 mb-8">
            <Link href="/" className="hover:text-white">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/blog" className="hover:text-white">Blog</Link>
            <span className="mx-2">/</span>
            <span className="text-white">Aluminum vs Copper</span>
          </nav>

          <header className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <span className="px-3 py-1 bg-cyan-600/30 text-cyan-300 text-sm font-medium rounded-full">
                Materials
              </span>
              <span className="text-white/40 text-sm">February 3, 2025</span>
              <span className="text-white/40 text-sm">• 10 min read</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">
              Aluminum vs Copper Wiring: Pros, Cons, and NEC Requirements
            </h1>
            <p className="text-xl text-white/70">
              Both conductors have their place. Learn when to use each and how to avoid common aluminum wiring problems.
            </p>
          </header>

          <div className="mb-12 bg-gradient-to-br from-amber-900/20 to-purple-900/20 rounded-2xl p-6 border border-white/10">
            <HeroIllustration />
          </div>

          <div className="prose prose-invert prose-lg max-w-none">
            <h2>The Basics</h2>
            <p>
              Copper has been the gold standard for electrical wiring, but aluminum offers significant
              cost and weight advantages. Modern aluminum conductors and terminations have overcome
              many historical issues, making aluminum a viable choice for many applications.
            </p>

            <h2>Ampacity Comparison</h2>
            <p>
              Aluminum requires larger wire sizes to carry the same current as copper—typically about
              2 AWG sizes larger:
            </p>

            <div className="my-8">
              <ComparisonChart />
            </div>

            <h2>Copper Advantages</h2>
            <div className="bg-amber-500/10 border border-amber-500/30 rounded-xl p-6 my-6">
              <ul className="text-white/80 space-y-2">
                <li><strong>Higher conductivity:</strong> Smaller wire sizes for same ampacity</li>
                <li><strong>Better terminations:</strong> Works with all standard devices</li>
                <li><strong>Less expansion:</strong> Lower thermal expansion coefficient</li>
                <li><strong>More ductile:</strong> Bends without breaking</li>
                <li><strong>Preferred for branch circuits:</strong> Standard for 15-20A circuits</li>
              </ul>
            </div>

            <h2>Aluminum Advantages</h2>
            <div className="bg-purple-500/10 border border-purple-500/30 rounded-xl p-6 my-6">
              <ul className="text-white/80 space-y-2">
                <li><strong>Lower cost:</strong> 60-70% less expensive than copper</li>
                <li><strong>Lighter weight:</strong> Half the weight of equivalent copper</li>
                <li><strong>Easier to pull:</strong> Significant labor savings on long runs</li>
                <li><strong>Abundant:</strong> More stable pricing than copper</li>
                <li><strong>Common for feeders:</strong> Standard for services and large feeders</li>
              </ul>
            </div>

            <h2>Termination Requirements</h2>
            <p>
              The key to successful aluminum wiring is proper terminations. Check equipment labeling:
            </p>
            <ul>
              <li><strong>AL/CU:</strong> Rated for both aluminum and copper</li>
              <li><strong>CU only:</strong> Do NOT use with aluminum</li>
              <li><strong>AL-CU:</strong> Older marking, may have restrictions</li>
            </ul>

            <h3>Aluminum Termination Best Practices</h3>
            <div className="bg-white/5 rounded-xl p-6 my-6">
              <ol className="text-white/80 space-y-2">
                <li><strong>1.</strong> Use only AL/CU rated devices and lugs</li>
                <li><strong>2.</strong> Apply antioxidant compound (if required by manufacturer)</li>
                <li><strong>3.</strong> Torque to manufacturer specifications</li>
                <li><strong>4.</strong> Re-torque after 24 hours when possible</li>
                <li><strong>5.</strong> Never mix aluminum and copper in the same lug (unless rated)</li>
              </ol>
            </div>

            <h2>When to Use Each</h2>
            <div className="grid md:grid-cols-2 gap-6 my-6">
              <div className="bg-amber-500/10 border border-amber-500/30 rounded-xl p-4">
                <h4 className="text-amber-400 font-semibold mb-2">Use Copper For:</h4>
                <ul className="text-white/70 text-sm space-y-1">
                  <li>• 15-20A branch circuits</li>
                  <li>• Device connections</li>
                  <li>• Flexible applications</li>
                  <li>• Short runs</li>
                  <li>• Where space is limited</li>
                </ul>
              </div>
              <div className="bg-purple-500/10 border border-purple-500/30 rounded-xl p-4">
                <h4 className="text-purple-400 font-semibold mb-2">Use Aluminum For:</h4>
                <ul className="text-white/70 text-sm space-y-1">
                  <li>• Service entrance conductors</li>
                  <li>• Main feeders</li>
                  <li>• Large branch circuits (≥#6)</li>
                  <li>• Long runs where weight matters</li>
                  <li>• Budget-conscious projects</li>
                </ul>
              </div>
            </div>

            <h2>Historical Issues with Aluminum</h2>
            <p>
              In the 1960s-70s, small-gauge aluminum wiring (#10 and #12) in residential branch circuits
              caused fire hazards due to:
            </p>
            <ul>
              <li>Connections loosening from thermal expansion</li>
              <li>Oxidation at connections increasing resistance</li>
              <li>Incompatible devices not rated for aluminum</li>
            </ul>
            <p>
              <strong>Modern solution:</strong> The NEC now requires proper rated devices, and larger aluminum
              conductors (for feeders) don't share these problems when installed correctly.
            </p>
          </div>

          <div className="mt-12 bg-gradient-to-r from-amber-900/30 to-purple-900/30 rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-display font-bold mb-4">
              Wire Sizing Calculator
            </h3>
            <p className="text-white/70 mb-6">
              Download Ampora for conductor sizing, ampacity lookup, and NEC table reference.
            </p>
            <a
              href="https://apps.apple.com/us/app/ampora/id6753693522"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-black font-semibold rounded-full hover:bg-white/90 transition-colors"
            >
              Download Free on App Store
            </a>
          </div>
        </article>
      </div>
    </main>
  );
}
