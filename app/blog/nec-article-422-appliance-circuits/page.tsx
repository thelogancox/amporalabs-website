import { Metadata } from "next";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import { BlogPostingJsonLd, BreadcrumbJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "NEC Article 422: Appliance Wiring & Circuit Requirements Guide",
  description: "Complete guide to NEC Article 422 appliance circuit requirements. Learn dedicated circuit rules for dishwashers, garbage disposals, ranges, and dryers. Covers cord-and-plug connections (422.16), appliance overcurrent protection, fixed vs portable appliance wiring, and common code violations.",
  keywords: [
    "nec article 422",
    "appliance circuits",
    "dedicated circuit requirements",
    "dishwasher wiring",
    "garbage disposal circuit",
    "appliance wiring",
    "cord and plug connection",
    "appliance overcurrent protection",
    "fixed appliance circuit",
    "kitchen appliance electrical"
  ],
  alternates: {
    canonical: "https://amporalabs.com/blog/nec-article-422-appliance-circuits",
  },
  openGraph: {
    title: "NEC Article 422: Appliance Wiring & Circuit Requirements Guide - Ampora",
    description: "Master NEC Article 422 appliance wiring requirements including dedicated circuits, cord-and-plug connections, overcurrent protection, and specific rules for kitchen and laundry appliances.",
    url: "https://amporalabs.com/blog/nec-article-422-appliance-circuits",
    type: "article",
    publishedTime: "2026-03-04",
  },
};

function HeroIllustration() {
  return (
    <svg viewBox="0 0 400 180" className="w-full h-40 md:h-48" aria-label="Kitchen appliance circuit diagram showing dedicated circuits for dishwasher, disposal, and range">
      {/* Background */}
      <rect x="10" y="10" width="380" height="160" rx="4" fill="#1f2937" stroke="#374151" strokeWidth="1"/>

      {/* Panel Box */}
      <rect x="25" y="25" width="60" height="130" rx="3" fill="#111827" stroke="#6b7280" strokeWidth="1.5"/>
      <text x="55" y="42" textAnchor="middle" fill="#a78bfa" fontSize="6" fontWeight="bold">PANEL</text>
      <text x="55" y="52" textAnchor="middle" fill="#a78bfa" fontSize="5">200A</text>

      {/* Breaker slots */}
      <rect x="32" y="58" width="20" height="8" rx="1" fill="#7c3aed" fillOpacity="0.3" stroke="#a78bfa" strokeWidth="0.8"/>
      <text x="42" y="64" textAnchor="middle" fill="#a78bfa" fontSize="4">20A</text>

      <rect x="32" y="70" width="20" height="8" rx="1" fill="#7c3aed" fillOpacity="0.3" stroke="#a78bfa" strokeWidth="0.8"/>
      <text x="42" y="76" textAnchor="middle" fill="#a78bfa" fontSize="4">20A</text>

      <rect x="32" y="82" width="20" height="8" rx="1" fill="#7c3aed" fillOpacity="0.3" stroke="#a78bfa" strokeWidth="0.8"/>
      <text x="42" y="88" textAnchor="middle" fill="#a78bfa" fontSize="4">20A</text>

      <rect x="32" y="94" width="20" height="8" rx="1" fill="#ef4444" fillOpacity="0.2" stroke="#ef4444" strokeWidth="0.8"/>
      <text x="42" y="100" textAnchor="middle" fill="#ef4444" fontSize="4">40A</text>

      <rect x="32" y="106" width="20" height="8" rx="1" fill="#f59e0b" fillOpacity="0.2" stroke="#f59e0b" strokeWidth="0.8"/>
      <text x="42" y="112" textAnchor="middle" fill="#f59e0b" fontSize="4">30A</text>

      {/* Circuit Lines */}
      <line x1="52" y1="62" x2="120" y2="40" stroke="#a78bfa" strokeWidth="1" strokeDasharray="3,2"/>
      <line x1="52" y1="74" x2="120" y2="80" stroke="#a78bfa" strokeWidth="1" strokeDasharray="3,2"/>
      <line x1="52" y1="86" x2="120" y2="120" stroke="#a78bfa" strokeWidth="1" strokeDasharray="3,2"/>
      <line x1="52" y1="98" x2="250" y2="62" stroke="#ef4444" strokeWidth="1" strokeDasharray="3,2"/>
      <line x1="52" y1="110" x2="250" y2="130" stroke="#f59e0b" strokeWidth="1" strokeDasharray="3,2"/>

      {/* Dishwasher */}
      <g transform="translate(110, 22)">
        <rect x="0" y="0" width="55" height="38" rx="3" fill="#22c55e" fillOpacity="0.1" stroke="#22c55e" strokeWidth="1"/>
        <rect x="8" y="6" width="38" height="18" rx="2" fill="none" stroke="#22c55e" strokeWidth="0.8"/>
        <line x1="18" y1="10" x2="18" y2="20" stroke="#22c55e" strokeWidth="0.5"/>
        <line x1="27" y1="10" x2="27" y2="20" stroke="#22c55e" strokeWidth="0.5"/>
        <line x1="36" y1="10" x2="36" y2="20" stroke="#22c55e" strokeWidth="0.5"/>
        <text x="27" y="33" textAnchor="middle" fill="#22c55e" fontSize="5" fontWeight="bold">DISHWASHER</text>
      </g>

      {/* Garbage Disposal */}
      <g transform="translate(110, 65)">
        <rect x="0" y="0" width="55" height="38" rx="3" fill="#06b6d4" fillOpacity="0.1" stroke="#06b6d4" strokeWidth="1"/>
        <circle cx="27" cy="16" r="10" fill="none" stroke="#06b6d4" strokeWidth="0.8"/>
        <line x1="21" y1="13" x2="33" y2="19" stroke="#06b6d4" strokeWidth="0.8"/>
        <line x1="21" y1="19" x2="33" y2="13" stroke="#06b6d4" strokeWidth="0.8"/>
        <text x="27" y="34" textAnchor="middle" fill="#06b6d4" fontSize="5" fontWeight="bold">DISPOSAL</text>
      </g>

      {/* Cord-and-Plug Symbol */}
      <g transform="translate(110, 108)">
        <rect x="0" y="0" width="55" height="38" rx="3" fill="#f59e0b" fillOpacity="0.1" stroke="#f59e0b" strokeWidth="1"/>
        <rect x="15" y="5" width="24" height="14" rx="2" fill="none" stroke="#f59e0b" strokeWidth="0.8"/>
        <circle cx="22" cy="12" r="2" fill="#f59e0b" fillOpacity="0.5"/>
        <circle cx="32" cy="12" r="2" fill="#f59e0b" fillOpacity="0.5"/>
        <line x1="27" y1="19" x2="27" y2="28" stroke="#f59e0b" strokeWidth="1"/>
        <text x="27" y="43" textAnchor="middle" fill="#f59e0b" fontSize="4.5" fontWeight="bold">CORD &amp; PLUG</text>
      </g>

      {/* Range / Oven */}
      <g transform="translate(230, 30)">
        <rect x="0" y="0" width="70" height="52" rx="3" fill="#ef4444" fillOpacity="0.1" stroke="#ef4444" strokeWidth="1"/>
        <rect x="8" y="6" width="54" height="28" rx="2" fill="none" stroke="#ef4444" strokeWidth="0.8"/>
        <circle cx="20" cy="40" r="4" fill="none" stroke="#ef4444" strokeWidth="0.8"/>
        <circle cx="35" cy="40" r="4" fill="none" stroke="#ef4444" strokeWidth="0.8"/>
        <circle cx="50" cy="40" r="4" fill="none" stroke="#ef4444" strokeWidth="0.8"/>
        <circle cx="20" cy="40" r="1.5" fill="#ef4444" fillOpacity="0.4"/>
        <circle cx="35" cy="40" r="1.5" fill="#ef4444" fillOpacity="0.4"/>
        <circle cx="50" cy="40" r="1.5" fill="#ef4444" fillOpacity="0.4"/>
        <text x="35" y="20" textAnchor="middle" fill="#ef4444" fontSize="6">RANGE</text>
        <text x="35" y="56" textAnchor="middle" fill="#ef4444" fontSize="5" fontWeight="bold">40A / 240V</text>
      </g>

      {/* Dryer */}
      <g transform="translate(230, 100)">
        <rect x="0" y="0" width="70" height="52" rx="3" fill="#f59e0b" fillOpacity="0.1" stroke="#f59e0b" strokeWidth="1"/>
        <circle cx="35" cy="22" r="14" fill="none" stroke="#f59e0b" strokeWidth="0.8"/>
        <circle cx="35" cy="22" r="8" fill="none" stroke="#f59e0b" strokeWidth="0.5" strokeDasharray="2,1"/>
        <text x="35" y="44" textAnchor="middle" fill="#f59e0b" fontSize="5" fontWeight="bold">DRYER</text>
        <text x="35" y="56" textAnchor="middle" fill="#f59e0b" fontSize="5" fontWeight="bold">30A / 240V</text>
      </g>

      {/* NEC 422 Label */}
      <g transform="translate(175, 140)">
        <rect x="0" y="0" width="50" height="16" rx="2" fill="#a78bfa" fillOpacity="0.2" stroke="#a78bfa" strokeWidth="1"/>
        <text x="25" y="11" textAnchor="middle" fill="#a78bfa" fontSize="6" fontWeight="bold">NEC 422</text>
      </g>
    </svg>
  );
}

export default function NECArticle422ApplianceCircuitsPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navigation />
      <div className="pt-20">
        <BreadcrumbJsonLd
          items={[
            { name: "Home", url: "https://amporalabs.com" },
            { name: "Blog", url: "https://amporalabs.com/blog" },
            { name: "NEC Article 422: Appliance Circuits", url: "https://amporalabs.com/blog/nec-article-422-appliance-circuits" },
          ]}
        />
        <BlogPostingJsonLd
          headline="NEC Article 422: Appliance Wiring & Circuit Requirements Guide"
          description="Complete guide to NEC Article 422 appliance circuit requirements covering dedicated circuits, cord-and-plug connections, overcurrent protection, and specific rules for kitchen and laundry appliances."
          datePublished="2026-03-04"
          dateModified="2026-03-04"
          url="https://amporalabs.com/blog/nec-article-422-appliance-circuits"
          wordCount={4500}
          keywords={["nec article 422", "appliance circuits", "dedicated circuit requirements", "dishwasher wiring", "garbage disposal circuit"]}
        />

        <article className="max-w-4xl mx-auto px-6 py-12">
          {/* Breadcrumb */}
          <nav className="text-sm text-white/60 mb-8">
            <Link href="/" className="hover:text-white">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/blog" className="hover:text-white">Blog</Link>
            <span className="mx-2">/</span>
            <span className="text-white">NEC Article 422: Appliance Circuits</span>
          </nav>

          {/* Article Header */}
          <header className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <span className="px-3 py-1 bg-purple-600/20 text-purple-300 text-sm font-medium rounded-full">
                NEC Code
              </span>
              <span className="text-white/40 text-sm">18 min read</span>
              <span className="text-white/40 text-sm">March 4, 2026</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6 leading-tight">
              NEC Article 422: Appliance Wiring &amp; Circuit Requirements Guide
            </h1>
            <p className="text-xl text-white/70">
              NEC Article 422 governs the wiring, overcurrent protection, and installation requirements for appliances in residential and commercial buildings. This guide covers dedicated circuit rules for dishwashers, garbage disposals, ranges, and dryers, cord-and-plug connection requirements under 422.16, fixed vs. portable appliance classifications, and the most common code violations inspectors find on appliance circuits.
            </p>
          </header>

          <div className="mb-12 bg-gradient-to-br from-purple-900/20 to-cyan-900/20 rounded-2xl p-6 border border-white/10">
            <HeroIllustration />
          </div>

          {/* Table of Contents */}
          <div className="bg-white/5 rounded-2xl p-6 mb-12">
            <h2 className="font-display font-bold mb-4">In This Guide</h2>
            <ul className="space-y-2 text-white/70">
              <li><a href="#scope-of-422" className="hover:text-purple-400">Scope of NEC Article 422</a></li>
              <li><a href="#fixed-vs-portable" className="hover:text-purple-400">Fixed vs. Portable Appliances</a></li>
              <li><a href="#dedicated-circuits" className="hover:text-purple-400">Dedicated Circuit Requirements</a></li>
              <li><a href="#cord-and-plug" className="hover:text-purple-400">Cord-and-Plug Connections (422.16)</a></li>
              <li><a href="#overcurrent-protection" className="hover:text-purple-400">Overcurrent Protection for Appliances</a></li>
              <li><a href="#specific-appliances" className="hover:text-purple-400">Specific Appliances: Dishwasher, Disposal, Range, Dryer</a></li>
              <li><a href="#common-violations" className="hover:text-purple-400">Common Code Violations</a></li>
              <li><a href="#faq" className="hover:text-purple-400">Frequently Asked Questions</a></li>
            </ul>
          </div>

          {/* Article Content */}
          <div className="prose prose-invert prose-lg max-w-none">

            <section id="scope-of-422" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Scope of NEC Article 422</h2>
              <p className="text-white/80 mb-4">
                <strong>NEC Article 422</strong> covers electric appliances used in any occupancy &mdash; residential, commercial, and industrial. The article applies to appliances that are factory-assembled, listed, and used to perform a specific function such as cooking, washing, heating, cooling, or food preparation. It does not cover industrial machinery or motor-driven equipment that falls under other NEC articles.
              </p>
              <p className="text-white/80 mb-4">
                Article 422 works in conjunction with several other NEC articles. Branch circuit requirements from <Link href="/blog/nec-article-210-branch-circuits-guide" className="text-purple-400 hover:text-purple-300">Article 210</Link> establish the general rules for circuits supplying appliances, while <Link href="/blog/nec-article-240-overcurrent-protection" className="text-purple-400 hover:text-purple-300">Article 240 overcurrent protection rules</Link> govern fuse and breaker sizing. Article 422 adds appliance-specific requirements on top of these general rules.
              </p>

              <div className="bg-white/5 rounded-xl p-6 my-6">
                <h4 className="font-semibold text-white mb-3">Key Parts of Article 422</h4>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-white/20">
                        <th className="text-left py-3 px-4 text-white/60">Part</th>
                        <th className="text-left py-3 px-4 text-white/60">Section</th>
                        <th className="text-left py-3 px-4 text-white/60">Coverage</th>
                      </tr>
                    </thead>
                    <tbody className="text-white/80">
                      <tr className="border-b border-white/10">
                        <td className="py-3 px-4 font-bold text-purple-400">Part I</td>
                        <td className="py-3 px-4 font-mono">422.1&ndash;422.5</td>
                        <td className="py-3 px-4">General provisions, definitions, and scope</td>
                      </tr>
                      <tr className="border-b border-white/10">
                        <td className="py-3 px-4 font-bold text-purple-400">Part II</td>
                        <td className="py-3 px-4 font-mono">422.10&ndash;422.12</td>
                        <td className="py-3 px-4">Branch circuit sizing and overcurrent protection</td>
                      </tr>
                      <tr className="border-b border-white/10">
                        <td className="py-3 px-4 font-bold text-purple-400">Part III</td>
                        <td className="py-3 px-4 font-mono">422.15&ndash;422.16</td>
                        <td className="py-3 px-4">Installation, cord-and-plug connections</td>
                      </tr>
                      <tr className="border-b border-white/10">
                        <td className="py-3 px-4 font-bold text-purple-400">Part IV</td>
                        <td className="py-3 px-4 font-mono">422.20&ndash;422.22</td>
                        <td className="py-3 px-4">Disconnecting means</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4 font-bold text-purple-400">Part V</td>
                        <td className="py-3 px-4 font-mono">422.30&ndash;422.35</td>
                        <td className="py-3 px-4">Grounding and marking</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="bg-purple-900/30 rounded-xl p-6 my-6">
                <h4 className="font-semibold text-purple-400 mb-3">What Counts as an &ldquo;Appliance&rdquo; Under NEC 422?</h4>
                <p className="text-white/70 mb-3">The NEC defines an appliance as utilization equipment, generally other than industrial, that is normally built in standardized sizes or types and is installed or connected as a unit to perform one or more functions. Common examples include:</p>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-2 text-white/60 text-sm">
                  <span>Dishwashers</span>
                  <span>Garbage disposals</span>
                  <span>Ranges &amp; ovens</span>
                  <span>Clothes dryers</span>
                  <span>Water heaters</span>
                  <span>Refrigerators</span>
                  <span>Microwave ovens</span>
                  <span>Trash compactors</span>
                  <span>Room air conditioners</span>
                  <span>Baseboard heaters</span>
                  <span>Wall-mounted ovens</span>
                  <span>Cooktops</span>
                </div>
              </div>
            </section>

            <section id="fixed-vs-portable" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Fixed vs. Portable Appliances</h2>
              <p className="text-white/80 mb-4">
                The NEC classifies appliances into categories that determine how they must be wired, connected, and protected. Understanding the distinction between <strong>fixed</strong>, <strong>stationary</strong>, and <strong>portable</strong> appliances is critical because different wiring methods and connection rules apply to each type.
              </p>

              <div className="grid md:grid-cols-3 gap-6 my-6">
                <div className="bg-purple-900/30 rounded-xl p-6">
                  <h3 className="font-semibold text-purple-400 mb-3">Fixed Appliances</h3>
                  <p className="text-white/60 text-sm mb-3">Permanently connected (hardwired) to the electrical system. Not intended to be moved after installation.</p>
                  <ul className="text-white/60 text-sm space-y-1">
                    <li>Built-in dishwashers</li>
                    <li>Hardwired water heaters</li>
                    <li>Built-in wall ovens</li>
                    <li>Central HVAC units</li>
                    <li>Baseboard heaters</li>
                  </ul>
                </div>
                <div className="bg-cyan-900/30 rounded-xl p-6">
                  <h3 className="font-semibold text-cyan-400 mb-3">Stationary Appliances</h3>
                  <p className="text-white/60 text-sm mb-3">Not easily moved from place to place during normal use but are not permanently wired. Typically cord-and-plug connected.</p>
                  <ul className="text-white/60 text-sm space-y-1">
                    <li>Freestanding ranges</li>
                    <li>Clothes dryers</li>
                    <li>Refrigerators</li>
                    <li>Freezers</li>
                    <li>Washing machines</li>
                  </ul>
                </div>
                <div className="bg-green-900/30 rounded-xl p-6">
                  <h3 className="font-semibold text-green-400 mb-3">Portable Appliances</h3>
                  <p className="text-white/60 text-sm mb-3">Intended to be moved easily from one place to another during normal use. Always cord-and-plug connected.</p>
                  <ul className="text-white/60 text-sm space-y-1">
                    <li>Toasters &amp; blenders</li>
                    <li>Countertop microwaves</li>
                    <li>Coffee makers</li>
                    <li>Portable heaters</li>
                    <li>Vacuum cleaners</li>
                  </ul>
                </div>
              </div>

              <div className="bg-white/5 rounded-xl p-6 my-6">
                <h4 className="font-semibold text-cyan-400 mb-3">Why the Classification Matters</h4>
                <ul className="text-white/70 space-y-2 text-sm">
                  <li><strong>Wiring method:</strong> Fixed appliances may be hardwired; portable and stationary appliances generally must have a cord-and-plug connection for servicing access.</li>
                  <li><strong>Disconnecting means:</strong> Fixed appliances need a readily accessible disconnect (NEC 422.31). Cord-and-plug connections can serve as the disconnect for some appliances.</li>
                  <li><strong>Branch circuit loading:</strong> Fixed appliances on multi-outlet branch circuits are calculated differently than portable appliance loads per <Link href="/blog/residential-load-calculations" className="text-purple-400 hover:text-purple-300">NEC load calculation rules</Link>.</li>
                  <li><strong>GFCI protection:</strong> Certain locations and appliance types require <Link href="/blog/gfci-vs-afci-requirements" className="text-purple-400 hover:text-purple-300">GFCI protection</Link> regardless of classification.</li>
                </ul>
              </div>
            </section>

            <section id="dedicated-circuits" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Dedicated Circuit Requirements</h2>
              <p className="text-white/80 mb-4">
                A <strong>dedicated circuit</strong> (also called an individual branch circuit) serves only one appliance or piece of equipment. The NEC requires dedicated circuits for certain appliances to ensure the appliance receives adequate power without overloading the circuit and to provide a reliable disconnecting means.
              </p>

              <div className="overflow-x-auto my-6">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-white/20">
                      <th className="text-left py-3 px-4 text-white/60">Appliance</th>
                      <th className="text-left py-3 px-4 text-white/60">Circuit Size</th>
                      <th className="text-left py-3 px-4 text-white/60">Voltage</th>
                      <th className="text-left py-3 px-4 text-white/60">NEC Basis</th>
                    </tr>
                  </thead>
                  <tbody className="text-white/80">
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">Dishwasher</td>
                      <td className="py-3 px-4 font-mono text-purple-400">20A</td>
                      <td className="py-3 px-4 font-mono">120V</td>
                      <td className="py-3 px-4">422.12, 210.23</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">Garbage disposal</td>
                      <td className="py-3 px-4 font-mono text-purple-400">20A</td>
                      <td className="py-3 px-4 font-mono">120V</td>
                      <td className="py-3 px-4">422.12, 210.23</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">Electric range / oven</td>
                      <td className="py-3 px-4 font-mono text-red-400">40A or 50A</td>
                      <td className="py-3 px-4 font-mono">240V</td>
                      <td className="py-3 px-4">210.19, 422.10</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">Clothes dryer (electric)</td>
                      <td className="py-3 px-4 font-mono text-orange-400">30A</td>
                      <td className="py-3 px-4 font-mono">240V</td>
                      <td className="py-3 px-4">210.19, 422.10</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">Electric water heater</td>
                      <td className="py-3 px-4 font-mono text-cyan-400">20A or 30A</td>
                      <td className="py-3 px-4 font-mono">240V</td>
                      <td className="py-3 px-4">422.11(E)</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">Built-in microwave</td>
                      <td className="py-3 px-4 font-mono text-purple-400">20A</td>
                      <td className="py-3 px-4 font-mono">120V</td>
                      <td className="py-3 px-4">210.23</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4">Trash compactor</td>
                      <td className="py-3 px-4 font-mono text-purple-400">15A or 20A</td>
                      <td className="py-3 px-4 font-mono">120V</td>
                      <td className="py-3 px-4">210.23</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="bg-orange-900/30 rounded-xl p-6 my-6 border border-orange-500/30">
                <h4 className="font-semibold text-orange-400 mb-3">The 50% Rule for Individual Branch Circuits</h4>
                <p className="text-white/70 mb-3">
                  Per NEC 210.23, an individual branch circuit can supply any load. However, when a branch circuit supplies a <strong>single non-motor-operated appliance</strong>, the appliance rating cannot exceed the branch circuit rating. For a <strong>single motor-operated appliance</strong> (like a disposal or dishwasher), the branch circuit rating must be at least 125% of the appliance&apos;s full-load rating if it runs continuously, or must not exceed the circuit rating marked on the appliance.
                </p>
                <p className="text-white/60 text-sm">
                  For multi-outlet circuits supplying fixed appliances, any single appliance cannot exceed 50% of the branch circuit rating. This is why large appliances require dedicated circuits.
                </p>
              </div>

              <div className="bg-white/5 rounded-xl p-6 my-6">
                <h4 className="font-semibold text-white mb-3">Conductor Sizing for Appliance Circuits</h4>
                <p className="text-white/70 mb-3">
                  When sizing conductors for appliance circuits, follow the <Link href="/blog/wire-sizing-guide-nec-ampacity-tables" className="text-purple-400 hover:text-purple-300">NEC ampacity tables</Link> and apply these Article 422 rules:
                </p>
                <ul className="text-white/70 space-y-2 text-sm">
                  <li><strong>Continuous loads:</strong> Branch circuit conductors must be sized at 125% of the continuous load (any load expected to run 3+ hours). Water heaters and baseboard heaters are typically continuous loads.</li>
                  <li><strong>Non-continuous loads:</strong> Conductors sized at 100% of the non-continuous load. Most kitchen appliances are non-continuous.</li>
                  <li><strong>Nameplate rating:</strong> The appliance nameplate ampere rating or marked branch circuit rating determines the minimum conductor and breaker size.</li>
                </ul>
              </div>
            </section>

            <section id="cord-and-plug" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Cord-and-Plug Connections (422.16)</h2>
              <p className="text-white/80 mb-4">
                <strong>NEC 422.16</strong> is one of the most important and frequently referenced sections within Article 422. It specifies which appliances are permitted (or required) to use a flexible cord-and-plug connection rather than hardwired connections. Understanding this section is critical because an improper connection method is a common code violation.
              </p>

              <h3 className="text-xl font-display font-semibold mb-3 text-cyan-400">422.16(A) &mdash; General Cord-and-Plug Requirements</h3>
              <p className="text-white/80 mb-4">
                Flexible cords are permitted for the connection of appliances to facilitate their removal or disconnection for maintenance, to permit interchange, and to prevent the transmission of noise or vibration. The cord must be:
              </p>
              <ul className="list-disc list-inside text-white/70 space-y-2 mb-4">
                <li>Listed and identified for the intended use</li>
                <li>Accessible for inspection along its entire length</li>
                <li>Not routed through walls, ceilings, floors, or similar openings</li>
                <li>Not concealed behind building finish materials</li>
                <li>Not more than the length specified in the appliance listing</li>
              </ul>

              <h3 className="text-xl font-display font-semibold mb-3 text-cyan-400">422.16(B) &mdash; Specific Appliances</h3>
              <div className="space-y-4 my-6">
                <div className="bg-white/5 rounded-xl p-6">
                  <h4 className="font-semibold text-green-400 mb-2">422.16(B)(1) &mdash; Dishwashers and Trash Compactors</h4>
                  <p className="text-white/70 text-sm mb-2">
                    Built-in dishwashers and trash compactors are specifically permitted to be cord-and-plug connected. The cord must be 3 to 4 feet (0.9 to 1.2 m) long, measured from the rear of the appliance. The receptacle must be in the space adjacent to the appliance and accessible.
                  </p>
                  <p className="text-white/60 text-xs">
                    Note: Many jurisdictions now require GFCI protection for dishwasher receptacles per NEC 210.8(D).
                  </p>
                </div>

                <div className="bg-white/5 rounded-xl p-6">
                  <h4 className="font-semibold text-cyan-400 mb-2">422.16(B)(2) &mdash; Range Hoods</h4>
                  <p className="text-white/70 text-sm">
                    Range hoods are permitted to be cord-and-plug connected with a flexible cord 18 to 36 inches long, terminated with a grounding-type attachment plug. The receptacle or junction box must be accessible within the installation space of the range hood.
                  </p>
                </div>

                <div className="bg-white/5 rounded-xl p-6">
                  <h4 className="font-semibold text-orange-400 mb-2">422.16(B)(3) &mdash; Wall-Mounted Ovens and Counter-Mounted Cooking Units</h4>
                  <p className="text-white/70 text-sm">
                    These appliances are permitted to be permanently connected (hardwired) or, where specifically listed for cord-and-plug connection, connected with a cord long enough to permit removal for servicing. The receptacle must be accessible.
                  </p>
                </div>

                <div className="bg-white/5 rounded-xl p-6">
                  <h4 className="font-semibold text-purple-400 mb-2">422.16(B)(4) &mdash; Garbage Disposals</h4>
                  <p className="text-white/70 text-sm mb-2">
                    Garbage disposals are specifically permitted to be cord-and-plug connected if the cord is 18 to 36 inches long, the receptacle is accessible, and the disposal is listed for cord connection. In practice, most disposals are sold with or designed for cord-and-plug connection.
                  </p>
                  <p className="text-white/60 text-xs">
                    The switch controlling a disposal is typically a wall switch, not the cord-and-plug. The receptacle itself may be switched or unswitched depending on local practice.
                  </p>
                </div>
              </div>

              <div className="bg-red-900/30 rounded-xl p-6 my-6 border border-red-500/30">
                <h4 className="font-semibold text-red-400 mb-3">Common Cord-and-Plug Violations</h4>
                <ul className="text-white/70 space-y-2 text-sm">
                  <li><strong>Cord too long or too short:</strong> Each appliance type has specific cord length limits in 422.16. A dishwasher cord that is 6 feet long violates the 3&ndash;4 foot requirement.</li>
                  <li><strong>Cord routed through cabinetry:</strong> Cords must not pass through holes in walls, floors, or cabinets. The cord must run in the open space adjacent to the appliance.</li>
                  <li><strong>Inaccessible receptacle:</strong> The receptacle for a cord-connected appliance must remain accessible for disconnection. A receptacle completely trapped behind a hardwired appliance is a violation.</li>
                  <li><strong>Using an extension cord:</strong> Extension cords are never an acceptable substitute for a properly installed receptacle and appliance cord.</li>
                </ul>
              </div>
            </section>

            {/* Mid-Article CTA */}
            <div className="not-prose my-12 bg-gradient-to-r from-purple-900/40 to-cyan-900/40 rounded-xl p-6 border border-purple-500/20">
              <div className="flex flex-col sm:flex-row items-center gap-4">
                <div className="flex-1 text-center sm:text-left">
                  <p className="font-display font-bold text-lg text-white mb-1">Ampora — The Electrician&apos;s AI Companion</p>
                  <p className="text-white/60 text-sm">Instant NEC code answers, electrical calculators, and AI troubleshooting. Free on iOS.</p>
                </div>
                <a
                  href="/get"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-white text-black font-semibold rounded-full hover:bg-white/90 transition-colors text-sm whitespace-nowrap"
                >
                  <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/></svg><svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor" aria-hidden="true"><path d="M3 20.5V3.5c0-.59.34-1.11.84-1.35L13.69 12 3.84 21.85c-.5-.25-.84-.76-.84-1.35zm13.81-5.38L6.05 21.34l8.49-8.49 2.27 2.27zm3.35-4.31c.34.27.59.69.59 1.19 0 .5-.22.9-.57 1.18l-2.29 1.32L15.39 12l2.5-2.5 2.27 1.31zM6.05 2.66L16.81 8.88l-2.27 2.27L6.05 2.66z"/></svg>
                  Download Free
                </a>
              </div>
            </div>

            <section id="overcurrent-protection" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Overcurrent Protection for Appliances</h2>
              <p className="text-white/80 mb-4">
                <strong>NEC 422.11</strong> establishes the overcurrent protection requirements for appliance circuits. These rules work alongside the general <Link href="/blog/nec-article-240-overcurrent-protection" className="text-purple-400 hover:text-purple-300">NEC overcurrent protection requirements in Article 240</Link> but add appliance-specific provisions that can override or supplement the general rules.
              </p>

              <h3 className="text-xl font-display font-semibold mb-3 text-cyan-400">422.11(A) &mdash; Branch Circuit Overcurrent Protection</h3>
              <p className="text-white/80 mb-4">
                Appliances must be protected by the branch circuit overcurrent device (fuse or circuit breaker) sized per the appliance&apos;s marked rating or in accordance with Part II of Article 422. If the appliance is marked with a maximum breaker size, you cannot install a larger breaker &mdash; even if the conductor could handle more current.
              </p>

              <h3 className="text-xl font-display font-semibold mb-3 text-cyan-400">422.11(E) &mdash; Storage-Type Water Heaters</h3>
              <div className="bg-cyan-900/30 rounded-xl p-6 my-6">
                <p className="text-white/70 mb-3">
                  Storage-type water heaters with a capacity of 120 gallons or less are considered <strong>continuous loads</strong>. The branch circuit rating must be at least <strong>125%</strong> of the nameplate rating. For example:
                </p>
                <div className="bg-white/5 rounded-xl p-4">
                  <p className="text-white/60 text-sm mb-2"><strong>Example:</strong> 4500W, 240V water heater</p>
                  <p className="font-mono text-cyan-400 text-sm">I = 4500W &divide; 240V = 18.75A</p>
                  <p className="font-mono text-cyan-400 text-sm">18.75A &times; 1.25 = 23.4A</p>
                  <p className="font-mono text-cyan-400 text-sm">Minimum breaker: 25A (next standard size up)</p>
                  <p className="font-mono text-cyan-400 text-sm">Common practice: 30A breaker with 10 AWG conductors</p>
                </div>
              </div>

              <h3 className="text-xl font-display font-semibold mb-3 text-cyan-400">422.11(F) &mdash; Infrared Lamp Heating Appliances</h3>
              <p className="text-white/80 mb-4">
                Infrared lamp industrial heating appliances must have overcurrent protection not exceeding 50 amperes. Individual lamps on a branch circuit cannot exceed the values specified for the lamp wattage and voltage.
              </p>

              <div className="bg-white/5 rounded-xl p-6 my-6">
                <h4 className="font-semibold text-white mb-3">Overcurrent Protection Summary</h4>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-white/20">
                        <th className="text-left py-3 px-4 text-white/60">Appliance Type</th>
                        <th className="text-left py-3 px-4 text-white/60">Max OCPD</th>
                        <th className="text-left py-3 px-4 text-white/60">Key Rule</th>
                      </tr>
                    </thead>
                    <tbody className="text-white/80">
                      <tr className="border-b border-white/10">
                        <td className="py-3 px-4">Appliance with marked OCPD</td>
                        <td className="py-3 px-4 font-mono text-purple-400">As marked</td>
                        <td className="py-3 px-4">Never exceed the marked maximum</td>
                      </tr>
                      <tr className="border-b border-white/10">
                        <td className="py-3 px-4">Motor-operated (no marking)</td>
                        <td className="py-3 px-4 font-mono text-purple-400">Per 430</td>
                        <td className="py-3 px-4">Motor OCPD rules apply (Article 430)</td>
                      </tr>
                      <tr className="border-b border-white/10">
                        <td className="py-3 px-4">Non-motor (no marking)</td>
                        <td className="py-3 px-4 font-mono text-purple-400">Per 240.4</td>
                        <td className="py-3 px-4">Standard conductor protection rules</td>
                      </tr>
                      <tr className="border-b border-white/10">
                        <td className="py-3 px-4">Water heater (&le;120 gal)</td>
                        <td className="py-3 px-4 font-mono text-cyan-400">125% of FLC</td>
                        <td className="py-3 px-4">Continuous load &mdash; 422.11(E)</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4">Infrared heating lamps</td>
                        <td className="py-3 px-4 font-mono text-orange-400">50A max</td>
                        <td className="py-3 px-4">422.11(F) limit</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </section>

            <section id="specific-appliances" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Specific Appliances: Dishwasher, Disposal, Range, Dryer</h2>
              <p className="text-white/80 mb-4">
                While Article 422 provides general rules, electricians most frequently encounter questions about a handful of specific residential appliances. Below is a detailed breakdown of the requirements for the most common appliance installations.
              </p>

              <div className="space-y-6 my-6">
                <div className="bg-green-900/20 rounded-xl p-6 border border-green-500/20">
                  <h3 className="font-semibold text-green-400 mb-3 text-lg">Dishwasher</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="text-white text-sm font-semibold mb-2">Circuit Requirements</h4>
                      <ul className="text-white/60 text-sm space-y-1">
                        <li><strong>Circuit:</strong> 20A, 120V dedicated</li>
                        <li><strong>Wire:</strong> 12 AWG minimum</li>
                        <li><strong>Connection:</strong> Hardwired or cord-and-plug</li>
                        <li><strong>Cord length:</strong> 3&ndash;4 ft per 422.16(B)(1)</li>
                        <li><strong>GFCI:</strong> Required per 210.8(D)</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-white text-sm font-semibold mb-2">Installation Notes</h4>
                      <ul className="text-white/60 text-sm space-y-1">
                        <li>Receptacle in adjacent cabinet space</li>
                        <li>Receptacle must be accessible</li>
                        <li>Junction box accessible if hardwired</li>
                        <li>Cannot share circuit with disposal (best practice)</li>
                        <li>GFCI may be at receptacle or breaker</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-cyan-900/20 rounded-xl p-6 border border-cyan-500/20">
                  <h3 className="font-semibold text-cyan-400 mb-3 text-lg">Garbage Disposal</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="text-white text-sm font-semibold mb-2">Circuit Requirements</h4>
                      <ul className="text-white/60 text-sm space-y-1">
                        <li><strong>Circuit:</strong> 20A or 15A, 120V</li>
                        <li><strong>Wire:</strong> 12 AWG (20A) or 14 AWG (15A)</li>
                        <li><strong>Connection:</strong> Cord-and-plug per 422.16(B)(4)</li>
                        <li><strong>Cord length:</strong> 18&ndash;36 inches</li>
                        <li><strong>Control:</strong> Wall switch or air switch</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-white text-sm font-semibold mb-2">Installation Notes</h4>
                      <ul className="text-white/60 text-sm space-y-1">
                        <li>Receptacle under the sink, accessible</li>
                        <li>Switch typically at countertop level</li>
                        <li>Can share a 20A circuit with dishwasher in some jurisdictions</li>
                        <li>GFCI protection now required under sink</li>
                        <li>Must be listed for cord connection</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-red-900/20 rounded-xl p-6 border border-red-500/20">
                  <h3 className="font-semibold text-red-400 mb-3 text-lg">Electric Range / Oven</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="text-white text-sm font-semibold mb-2">Circuit Requirements</h4>
                      <ul className="text-white/60 text-sm space-y-1">
                        <li><strong>Circuit:</strong> 40A or 50A, 240V</li>
                        <li><strong>Wire:</strong> 8 AWG (40A) or 6 AWG (50A)</li>
                        <li><strong>Receptacle:</strong> NEMA 14-50R (50A) or 14-30R (range)</li>
                        <li><strong>Connection:</strong> Cord-and-plug or hardwired</li>
                        <li><strong>Minimum branch circuit:</strong> 40A per 210.19(A)(3)</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-white text-sm font-semibold mb-2">Installation Notes</h4>
                      <ul className="text-white/60 text-sm space-y-1">
                        <li>NEC 210.19(A)(3) allows 8 AWG for ranges rated 8-3/4 kW or more</li>
                        <li>4-wire connection required (new installations)</li>
                        <li>3-wire allowed only for existing installations</li>
                        <li>Demand factors per Table 220.55 apply</li>
                        <li>Receptacle behind range or in adjacent cabinet</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-orange-900/20 rounded-xl p-6 border border-orange-500/20">
                  <h3 className="font-semibold text-orange-400 mb-3 text-lg">Electric Clothes Dryer</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="text-white text-sm font-semibold mb-2">Circuit Requirements</h4>
                      <ul className="text-white/60 text-sm space-y-1">
                        <li><strong>Circuit:</strong> 30A, 240V</li>
                        <li><strong>Wire:</strong> 10 AWG</li>
                        <li><strong>Receptacle:</strong> NEMA 14-30R (4-wire)</li>
                        <li><strong>Connection:</strong> Cord-and-plug</li>
                        <li><strong>Minimum load:</strong> 5000W or nameplate (whichever is greater)</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-white text-sm font-semibold mb-2">Installation Notes</h4>
                      <ul className="text-white/60 text-sm space-y-1">
                        <li>4-wire cord required for new installations</li>
                        <li>3-wire (NEMA 10-30R) allowed for existing installs only</li>
                        <li>Neutral must be insulated (not bonded at dryer)</li>
                        <li>Dryer vent must exhaust to exterior</li>
                        <li>Receptacle within 6 ft of dryer location</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-purple-900/30 rounded-xl p-6 my-6">
                <h4 className="font-semibold text-purple-400 mb-3">3-Wire vs. 4-Wire: Understanding the Change</h4>
                <p className="text-white/70 mb-3">
                  Since the 1996 NEC, new installations for ranges and dryers must use a <strong>4-wire connection</strong> (two hots, neutral, and equipment ground). The older 3-wire system (two hots and a combined neutral/ground) is only permitted for existing installations where:
                </p>
                <ul className="text-white/70 space-y-2 text-sm">
                  <li>The existing branch circuit has only 3 conductors (no separate equipment ground)</li>
                  <li>The installation was made before the adoption of the 4-wire requirement in the jurisdiction</li>
                  <li>A grounding means does not exist in the existing outlet box (NEC 250.140)</li>
                </ul>
                <p className="text-white/60 text-sm mt-3">
                  The 4-wire system is safer because it separates the neutral (current-carrying) conductor from the equipment grounding conductor, eliminating the risk of the appliance frame becoming energized if the neutral conductor opens.
                </p>
              </div>
            </section>

            <section id="common-violations" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Common Code Violations</h2>
              <p className="text-white/80 mb-4">
                Appliance circuit violations are among the most frequently cited issues during residential electrical inspections. Knowing what inspectors look for helps you avoid costly callbacks and failed inspections.
              </p>

              <div className="grid md:grid-cols-2 gap-4 my-6">
                <div className="bg-red-900/20 rounded-xl p-6 border border-red-500/20">
                  <h4 className="font-semibold text-red-400 mb-3">Oversized Breaker</h4>
                  <p className="text-white/60 text-sm">
                    Installing a breaker larger than the appliance&apos;s marked maximum overcurrent protection. If a dishwasher is marked &ldquo;maximum 15A,&rdquo; you cannot install it on a 20A circuit without changing the breaker to 15A.
                  </p>
                </div>
                <div className="bg-red-900/20 rounded-xl p-6 border border-red-500/20">
                  <h4 className="font-semibold text-red-400 mb-3">Improper Cord Length</h4>
                  <p className="text-white/60 text-sm">
                    Cord-and-plug connected appliances with cords that exceed the maximum length specified in 422.16. A dishwasher cord longer than 4 feet or a disposal cord longer than 36 inches will fail inspection.
                  </p>
                </div>
                <div className="bg-red-900/20 rounded-xl p-6 border border-red-500/20">
                  <h4 className="font-semibold text-red-400 mb-3">Missing GFCI Protection</h4>
                  <p className="text-white/60 text-sm">
                    Dishwashers now require GFCI protection per NEC 210.8(D). Many older installations lack this protection. Disposals under the sink also require GFCI per 210.8(A) for receptacles serving the kitchen countertop area.
                  </p>
                </div>
                <div className="bg-red-900/20 rounded-xl p-6 border border-red-500/20">
                  <h4 className="font-semibold text-red-400 mb-3">Inaccessible Junction Box</h4>
                  <p className="text-white/60 text-sm">
                    Hardwired appliance junction boxes that become buried behind cabinetry or drywall. All junction boxes must remain accessible per NEC 314.29. This is especially common with dishwashers and range hoods.
                  </p>
                </div>
                <div className="bg-red-900/20 rounded-xl p-6 border border-red-500/20">
                  <h4 className="font-semibold text-red-400 mb-3">Shared Circuits for Dedicated Loads</h4>
                  <p className="text-white/60 text-sm">
                    Placing a high-draw appliance on a shared branch circuit instead of a dedicated circuit. A range on a shared circuit or a water heater sharing a circuit with other loads are common violations.
                  </p>
                </div>
                <div className="bg-red-900/20 rounded-xl p-6 border border-red-500/20">
                  <h4 className="font-semibold text-red-400 mb-3">3-Wire Connection on New Install</h4>
                  <p className="text-white/60 text-sm">
                    Installing a 3-wire cord on a range or dryer in new construction or when a 4-wire receptacle is already present. Only existing 3-wire installations are grandfathered; new work requires 4-wire.
                  </p>
                </div>
                <div className="bg-red-900/20 rounded-xl p-6 border border-red-500/20">
                  <h4 className="font-semibold text-red-400 mb-3">No Disconnect for Fixed Appliance</h4>
                  <p className="text-white/60 text-sm">
                    Fixed appliances must have a disconnecting means that is within sight or lockable per NEC 422.31. A hardwired water heater in the attic with the breaker panel in the garage may require a local disconnect switch.
                  </p>
                </div>
                <div className="bg-red-900/20 rounded-xl p-6 border border-red-500/20">
                  <h4 className="font-semibold text-red-400 mb-3">Cord Through Wall or Cabinet</h4>
                  <p className="text-white/60 text-sm">
                    Routing an appliance flexible cord through a hole in a wall, floor, or cabinet panel. Per 400.12, flexible cords cannot be concealed by or run through walls, structural ceilings, or floors.
                  </p>
                </div>
              </div>

              <div className="bg-cyan-900/30 rounded-xl p-6 my-6">
                <h4 className="font-semibold text-cyan-400 mb-3">Appliance Circuit Inspection Checklist</h4>
                <ul className="text-white/70 space-y-2 text-sm">
                  <li>&#9744; Dedicated circuits provided for all required appliances</li>
                  <li>&#9744; Breaker size matches appliance marking (not oversized)</li>
                  <li>&#9744; Conductor size matches breaker amperage</li>
                  <li>&#9744; Cord-and-plug connections meet 422.16 length requirements</li>
                  <li>&#9744; Receptacles accessible for cord-connected appliances</li>
                  <li>&#9744; Junction boxes accessible for hardwired appliances</li>
                  <li>&#9744; GFCI protection where required (dishwasher, under-sink disposal)</li>
                  <li>&#9744; 4-wire connections for ranges and dryers (new installations)</li>
                  <li>&#9744; Disconnecting means within sight or lockable for fixed appliances</li>
                  <li>&#9744; Continuous loads (water heaters) sized at 125%</li>
                </ul>
              </div>
            </section>

            <section id="faq" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Frequently Asked Questions</h2>

              <div className="space-y-6 my-6">
                <div className="bg-white/5 rounded-xl p-6">
                  <h3 className="font-semibold text-white mb-2">Can a dishwasher and garbage disposal share the same circuit?</h3>
                  <p className="text-white/70 text-sm">
                    The NEC does not explicitly prohibit sharing a 20A circuit between a dishwasher and garbage disposal, as they do not typically run simultaneously. However, many local jurisdictions require separate dedicated circuits for each appliance. Check with your AHJ (Authority Having Jurisdiction). Best practice is to provide individual 20A circuits for each appliance for reliability and to avoid nuisance tripping.
                  </p>
                </div>

                <div className="bg-white/5 rounded-xl p-6">
                  <h3 className="font-semibold text-white mb-2">Is a dishwasher hardwired or cord-and-plug connected?</h3>
                  <p className="text-white/70 text-sm">
                    Both methods are permitted under NEC 422.16(B)(1). If cord-and-plug connected, the cord must be 3 to 4 feet long, and the receptacle must be accessible in the space adjacent to the dishwasher (typically in the cabinet next to it). Many electricians and manufacturers now prefer cord-and-plug connections because they make servicing easier and satisfy the disconnect requirement.
                  </p>
                </div>

                <div className="bg-white/5 rounded-xl p-6">
                  <h3 className="font-semibold text-white mb-2">What size breaker does an electric range need?</h3>
                  <p className="text-white/70 text-sm">
                    Most freestanding electric ranges require a 40A or 50A, 240V circuit. NEC 210.19(A)(3) permits a minimum 40A branch circuit for ranges rated 8-3/4 kW or more, using 8 AWG copper conductors. For a 50A circuit, use 6 AWG copper. Always check the range&apos;s nameplate for the specific amperage requirement and marked maximum overcurrent protection.
                  </p>
                </div>

                <div className="bg-white/5 rounded-xl p-6">
                  <h3 className="font-semibold text-white mb-2">Why did the NEC change from 3-wire to 4-wire for dryers and ranges?</h3>
                  <p className="text-white/70 text-sm">
                    The 3-wire system used the neutral conductor as both the return path for current and the equipment grounding conductor. If the neutral wire broke or became loose, the appliance frame could become energized at 120V &mdash; creating a shock or electrocution hazard. The 4-wire system separates these functions, with a dedicated equipment grounding conductor that keeps the frame at ground potential even if the neutral fails.
                  </p>
                </div>

                <div className="bg-white/5 rounded-xl p-6">
                  <h3 className="font-semibold text-white mb-2">Does a garbage disposal need GFCI protection?</h3>
                  <p className="text-white/70 text-sm">
                    Yes, in most cases. If the disposal is cord-and-plug connected to a receptacle under the sink, that receptacle requires GFCI protection per NEC 210.8(A) because it is within 6 feet of the kitchen sink (a water source). Some hardwired installations may not technically require GFCI per the letter of the code, but GFCI protection is strongly recommended for any appliance installed near water.
                  </p>
                </div>

                <div className="bg-white/5 rounded-xl p-6">
                  <h3 className="font-semibold text-white mb-2">Can I use a 15A circuit for a garbage disposal?</h3>
                  <p className="text-white/70 text-sm">
                    Yes, if the disposal&apos;s nameplate rating allows it. Many residential disposals draw less than 10 amps and are rated for 15A circuits. However, a 20A circuit is preferred and often required by local codes because it provides more headroom for motor starting current and is consistent with the <Link href="/blog/kitchen-electrical-requirements-nec" className="text-purple-400 hover:text-purple-300">kitchen electrical requirements</Link> that mandate 20A circuits for kitchen receptacles.
                  </p>
                </div>

                <div className="bg-white/5 rounded-xl p-6">
                  <h3 className="font-semibold text-white mb-2">What is the disconnecting means for a cord-and-plug connected appliance?</h3>
                  <p className="text-white/70 text-sm">
                    Per NEC 422.33(A), for cord-and-plug connected appliances, the plug and receptacle serve as the disconnecting means, provided the plug is accessible. This is one of the key advantages of cord-and-plug connections &mdash; the homeowner or service technician can simply unplug the appliance to disconnect power without going to the breaker panel.
                  </p>
                </div>

                <div className="bg-white/5 rounded-xl p-6">
                  <h3 className="font-semibold text-white mb-2">Do water heaters need a disconnect switch?</h3>
                  <p className="text-white/70 text-sm">
                    Electric water heaters that are hardwired (fixed appliances) need a disconnecting means per NEC 422.31. The disconnect must be within sight of the appliance, or if not within sight, the circuit breaker must be capable of being locked in the open position per 422.31(B). Many electricians install a dedicated disconnect switch near the water heater to meet this requirement.
                  </p>
                </div>
              </div>
            </section>

            {/* Footer CTA Section */}
            <section className="bg-gradient-to-r from-purple-900/30 to-cyan-900/30 rounded-2xl p-8 md:p-12 my-12 border border-purple-500/20">
              <div className="text-center">
                <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-1.5 rounded-full mb-4">
                  <span className="text-sm text-white/80">&#9733; Free on iOS &amp; Android</span>
                </div>
                <h2 className="text-2xl md:text-3xl font-display font-bold mb-4">
                  Your Electrical Reference, Powered by AI
                </h2>
                <p className="text-white/70 mb-8 max-w-2xl mx-auto">
                  Join thousands of electricians using Ampora for instant NEC code answers, electrical calculations, and AI-powered troubleshooting — right from your phone.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <a
                    href="/get"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-black font-semibold rounded-full hover:bg-white/90 transition-colors"
                  >
                    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/></svg><svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor" aria-hidden="true"><path d="M3 20.5V3.5c0-.59.34-1.11.84-1.35L13.69 12 3.84 21.85c-.5-.25-.84-.76-.84-1.35zm13.81-5.38L6.05 21.34l8.49-8.49 2.27 2.27zm3.35-4.31c.34.27.59.69.59 1.19 0 .5-.22.9-.57 1.18l-2.29 1.32L15.39 12l2.5-2.5 2.27 1.31zM6.05 2.66L16.81 8.88l-2.27 2.27L6.05 2.66z"/></svg>
                    Download Ampora Free
                  </a>
                  <Link
                    href="/features/nec-code-reference"
                    className="px-8 py-4 bg-white/10 text-white font-semibold rounded-full hover:bg-white/20 transition-colors text-center"
                  >
                    Explore Features
                  </Link>
                </div>
              </div>
            </section>

            {/* Related Articles */}
            <section className="mt-12">
              <h2 className="text-2xl font-display font-bold mb-6">Related Articles</h2>
              <div className="grid md:grid-cols-2 gap-4">
                <Link href="/blog/kitchen-electrical-requirements-nec" className="bg-white/5 hover:bg-white/10 rounded-xl p-6 transition-colors">
                  <span className="text-purple-400 text-sm">NEC Code</span>
                  <h3 className="font-semibold mt-2">Kitchen Electrical Requirements per NEC</h3>
                </Link>
                <Link href="/blog/nec-article-210-branch-circuits-guide" className="bg-white/5 hover:bg-white/10 rounded-xl p-6 transition-colors">
                  <span className="text-purple-400 text-sm">NEC Code</span>
                  <h3 className="font-semibold mt-2">NEC Article 210: Branch Circuits Guide</h3>
                </Link>
                <Link href="/blog/nec-article-240-overcurrent-protection" className="bg-white/5 hover:bg-white/10 rounded-xl p-6 transition-colors">
                  <span className="text-purple-400 text-sm">NEC Code</span>
                  <h3 className="font-semibold mt-2">NEC Article 240: Overcurrent Protection</h3>
                </Link>
                <Link href="/blog/residential-load-calculations" className="bg-white/5 hover:bg-white/10 rounded-xl p-6 transition-colors">
                  <span className="text-blue-400 text-sm">Calculations</span>
                  <h3 className="font-semibold mt-2">Residential Electrical Load Calculations</h3>
                </Link>
              </div>
            </section>

          </div>
        </article>
      </div>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-white/10">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <Link href="/" className="text-xl font-display font-bold">Ampora</Link>
          <nav className="flex flex-wrap justify-center gap-6 text-sm text-white/60">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <Link href="/calculators" className="hover:text-white transition-colors">Calculators</Link>
            <Link href="/features/nec-code-reference" className="hover:text-white transition-colors">NEC Code</Link>
            <Link href="/blog" className="hover:text-white transition-colors">Blog</Link>
          </nav>
          <p className="text-sm text-white/40">&copy; 2025 Ampora Labs</p>
        </div>
      </footer>
    </main>
  );
}
