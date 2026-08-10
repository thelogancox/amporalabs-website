import { Metadata } from "next";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import { BreadcrumbJsonLd, BlogPostingJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Wire Pulling Techniques: Tools, Methods & NEC Limits",
  description: "Complete guide to wire pulling techniques for electricians. Learn fish tape vs pull rope vs vacuum systems, pulling tension limits, sidewall bearing pressure, jam ratio prevention, NEC 300.14 free conductor length, pull box sizing per NEC 314.28, and how to avoid cable damage.",
  keywords: [
    "wire pulling techniques",
    "pulling tension limits",
    "fish tape vs pull rope",
    "wire pulling lubricant",
    "sidewall bearing pressure",
    "NEC 300.14",
    "NEC 314.28 pull box",
    "jam ratio conduit",
    "wire pulling tools",
    "conduit wire pulling"
  ],
  alternates: {
    canonical: "https://amporalabs.com/blog/wire-pulling-techniques-guide",
  },
  openGraph: {
    title: "Wire Pulling Techniques: Tools, Methods & NEC Limits - Ampora",
    description: "Complete guide to wire pulling techniques including tools, tension limits, lubricants, and NEC requirements for professional electricians.",
    url: "https://amporalabs.com/blog/wire-pulling-techniques-guide",
    type: "article",
    publishedTime: "2025-05-28",
  },
};

function HeroIllustration() {
  return (
    <svg viewBox="0 0 400 180" className="w-full h-44 md:h-52" aria-label="Conduit with wire being pulled through showing fish tape and pulling grip">
      {/* Conduit body - horizontal run */}
      <rect x="20" y="70" width="360" height="40" rx="6" fill="#1f2937" stroke="#6b7280" strokeWidth="2"/>
      {/* Conduit inner */}
      <rect x="24" y="74" width="352" height="32" rx="4" fill="#111827"/>

      {/* Wires being pulled through conduit */}
      <path d="M 30 85 Q 100 82 170 86 Q 240 90 310 85 Q 340 83 370 86" stroke="#b87333" strokeWidth="4" fill="none" strokeLinecap="round"/>
      <path d="M 30 90 Q 100 93 170 89 Q 240 85 310 91 Q 340 93 370 90" stroke="#ef4444" strokeWidth="4" fill="none" strokeLinecap="round"/>
      <path d="M 30 96 Q 100 99 170 95 Q 240 92 310 97 Q 340 99 370 95" stroke="#3b82f6" strokeWidth="4" fill="none" strokeLinecap="round"/>

      {/* Pulling grip on right end */}
      <g transform="translate(370, 90)">
        <path d="M 0 -8 L 15 -5 L 15 5 L 0 8" fill="#374151" stroke="#9ca3af" strokeWidth="1.5"/>
        <line x1="15" y1="0" x2="30" y2="0" stroke="#f59e0b" strokeWidth="3" strokeDasharray="4,2"/>
        <text x="20" y="-10" fill="#f59e0b" fontSize="7" fontWeight="bold">PULL</text>
      </g>

      {/* Arrow showing pull direction */}
      <path d="M 320 55 L 370 55" stroke="#22c55e" strokeWidth="2" markerEnd="url(#pullArrow)"/>
      <text x="345" y="50" textAnchor="middle" fill="#22c55e" fontSize="8">Direction</text>

      {/* Fish tape on left end */}
      <g transform="translate(10, 90)">
        <circle cx="-5" cy="0" r="12" fill="none" stroke="#f59e0b" strokeWidth="2"/>
        <circle cx="-5" cy="0" r="8" fill="none" stroke="#f59e0b" strokeWidth="1.5"/>
        <line x1="7" y1="0" x2="20" y2="0" stroke="#f59e0b" strokeWidth="2"/>
      </g>

      {/* Lubricant drops */}
      {[140, 200, 260].map((x, i) => (
        <g key={i}>
          <ellipse cx={x} cy="68" rx="4" ry="5" fill="#06b6d4" fillOpacity="0.6"/>
          <text x={x} y="62" textAnchor="middle" fill="#06b6d4" fontSize="6">lub</text>
        </g>
      ))}

      {/* Conduit label */}
      <text x="200" y="130" textAnchor="middle" fill="#9ca3af" fontSize="9">EMT Conduit Run</text>

      {/* Tension indicator */}
      <rect x="130" y="140" width="140" height="22" rx="4" fill="#22c55e" fillOpacity="0.15" stroke="#22c55e" strokeWidth="1"/>
      <text x="200" y="155" textAnchor="middle" fill="#22c55e" fontSize="9" fontWeight="bold">Max Tension: Check NEC Limits</text>

      {/* Top labels */}
      <text x="50" y="20" fill="#f59e0b" fontSize="9" fontWeight="bold">Fish Tape</text>
      <text x="200" y="20" textAnchor="middle" fill="#06b6d4" fontSize="9" fontWeight="bold">Lubricant Applied</text>
      <text x="370" y="20" textAnchor="end" fill="#22c55e" fontSize="9" fontWeight="bold">Pulling Grip</text>

      <defs>
        <marker id="pullArrow" markerWidth="8" markerHeight="8" refX="8" refY="4" orient="auto">
          <path d="M0,0 L0,8 L8,4 z" fill="#22c55e"/>
        </marker>
      </defs>
    </svg>
  );
}

export default function WirePullingTechniquesGuidePage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navigation />
      <div className="pt-20">
        <BreadcrumbJsonLd
          items={[
            { name: "Home", url: "https://amporalabs.com" },
            { name: "Blog", url: "https://amporalabs.com/blog" },
            { name: "Wire Pulling Techniques", url: "https://amporalabs.com/blog/wire-pulling-techniques-guide" },
          ]}
        />
        <BlogPostingJsonLd
          headline="Wire Pulling Techniques: Tools, Methods & NEC Limits"
          description="Complete guide to wire pulling techniques including tools, tension limits, lubricants, and NEC requirements for professional electricians."
          datePublished="2025-05-28"
          dateModified="2025-05-28"
          url="https://amporalabs.com/blog/wire-pulling-techniques-guide"
          wordCount={3400}
          keywords={["wire pulling techniques", "pulling tension", "fish tape", "pull rope", "NEC 300.14", "NEC 314.28", "wire lubricant"]}
        />

        <article className="max-w-4xl mx-auto px-6 py-12">
          {/* Breadcrumb */}
          <nav className="text-sm text-white/60 mb-8">
            <Link href="/" className="hover:text-white">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/blog" className="hover:text-white">Blog</Link>
            <span className="mx-2">/</span>
            <span className="text-white">Wire Pulling Techniques</span>
          </nav>

          {/* Article Header */}
          <header className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <span className="px-3 py-1 bg-green-600/30 text-green-300 text-sm font-medium rounded-full">
                Installation
              </span>
              <span className="text-white/40 text-sm">13 min read</span>
              <span className="text-white/40 text-sm">May 28, 2025</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6 leading-tight">
              Wire Pulling Techniques: Tools, Methods & NEC Limits
            </h1>
            <p className="text-xl text-white/70">
              Pulling wire through conduit is one of the most physically demanding and technically critical tasks in electrical work. Done wrong, you damage insulation, exceed tension limits, and create callbacks. This guide covers every aspect of proper wire pulling from tools to NEC requirements.
            </p>
          </header>

          <div className="mb-12 bg-gradient-to-br from-green-900/20 to-cyan-900/20 rounded-2xl p-6 border border-white/10">
            <HeroIllustration />
          </div>

          {/* Table of Contents */}
          <div className="bg-white/5 rounded-2xl p-6 mb-12">
            <h2 className="font-display font-bold mb-4">In This Guide</h2>
            <ul className="space-y-2 text-white/70">
              <li><a href="#pulling-tools" className="hover:text-purple-400">→ Fish Tape vs Pull Rope vs Vacuum/Blower Systems</a></li>
              <li><a href="#lubricants" className="hover:text-purple-400">→ Wire Pulling Lubricants & NEC Requirements</a></li>
              <li><a href="#tension-limits" className="hover:text-purple-400">→ Maximum Pulling Tension by Wire Size</a></li>
              <li><a href="#sidewall-pressure" className="hover:text-purple-400">→ Sidewall Bearing Pressure</a></li>
              <li><a href="#jam-ratio" className="hover:text-purple-400">→ Jam Ratio Prevention</a></li>
              <li><a href="#free-conductor" className="hover:text-purple-400">→ NEC 300.14: Free Conductor Length</a></li>
              <li><a href="#pull-boxes" className="hover:text-purple-400">→ Pull Boxes & Junction Boxes (NEC 314.28)</a></li>
              <li><a href="#calculating-tension" className="hover:text-purple-400">→ Calculating Pulling Tension</a></li>
              <li><a href="#long-runs" className="hover:text-purple-400">→ Long Run Techniques</a></li>
              <li><a href="#parallel-conductors" className="hover:text-purple-400">→ Paralleling Conductors</a></li>
              <li><a href="#tools-equipment" className="hover:text-purple-400">→ Wire Pulling Tools & Equipment</a></li>
              <li><a href="#common-mistakes" className="hover:text-purple-400">→ Common Mistakes & Cable Damage Prevention</a></li>
            </ul>
          </div>

          {/* Article Content */}
          <div className="prose prose-invert prose-lg max-w-none">

            <section id="pulling-tools" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Fish Tape vs Pull Rope vs Vacuum/Blower Systems</h2>
              <p className="text-white/80 mb-4">
                Choosing the right pulling method depends on the conduit size, run length, number of bends, and conductor weight. Each method has specific strengths and limitations that experienced electricians learn to match to the job.
              </p>

              <div className="grid md:grid-cols-3 gap-4 my-6">
                <div className="bg-white/5 rounded-xl p-6">
                  <h3 className="font-semibold text-yellow-400 mb-2">Fish Tape</h3>
                  <p className="text-white/60 text-sm mb-3">Best for short runs with small conductors</p>
                  <ul className="text-white/70 text-sm space-y-1">
                    <li>Steel: up to 200 ft, stiff and durable</li>
                    <li>Fiberglass: non-conductive, flexible</li>
                    <li>Nylon: for tight bends, very flexible</li>
                    <li>Ideal: 1/2" to 1" conduit, 1-2 bends</li>
                  </ul>
                </div>
                <div className="bg-white/5 rounded-xl p-6">
                  <h3 className="font-semibold text-blue-400 mb-2">Pull Rope / Mule Tape</h3>
                  <p className="text-white/60 text-sm mb-3">Standard for medium to large runs</p>
                  <ul className="text-white/70 text-sm space-y-1">
                    <li>Flat polyester mule tape: 1,800-2,500 lb</li>
                    <li>Sequential footage markings</li>
                    <li>Low coefficient of friction</li>
                    <li>Ideal: 1" and larger conduit, long runs</li>
                  </ul>
                </div>
                <div className="bg-white/5 rounded-xl p-6">
                  <h3 className="font-semibold text-cyan-400 mb-2">Vacuum / Blower System</h3>
                  <p className="text-white/60 text-sm mb-3">For threading pull line in empty conduit</p>
                  <ul className="text-white/70 text-sm space-y-1">
                    <li>Uses foam carrier (mouse) and air</li>
                    <li>Pulls lightweight line through conduit</li>
                    <li>Works through multiple bends easily</li>
                    <li>Ideal: complex runs, 3/4" to 4" conduit</li>
                  </ul>
                </div>
              </div>

              <div className="bg-green-900/20 border border-green-500/30 rounded-xl p-6 my-6">
                <h3 className="font-semibold text-green-400 mb-2">Pro Tip: The Two-Stage Pull</h3>
                <p className="text-white/70">
                  For most professional installations, use a two-stage approach: first thread a lightweight pull line through the conduit using fish tape or a vacuum system, then attach the pull line to your conductors with a proper pulling grip and use the line (or a tugger) to pull the wire. This prevents fish tape damage to conductors and allows you to measure the exact footage needed before cutting wire.
                </p>
              </div>
            </section>

            <section id="lubricants" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Wire Pulling Lubricants & NEC Requirements</h2>
              <p className="text-white/80 mb-4">
                Wire pulling lubricant reduces friction between conductors and the conduit wall, lowering pulling tension by 50% or more. The NEC addresses lubricant use in several places, and using the wrong lubricant can damage insulation or violate code.
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-3">NEC Requirements for Lubricant</h3>
              <ul className="list-disc list-inside text-white/70 space-y-2 mb-4">
                <li><strong>NEC 300.18</strong> - Raceways must be installed complete before conductors are pulled in. Lubricant can be applied to facilitate pulling.</li>
                <li><strong>NEC 310.14</strong> - Lubricants must be compatible with the conductor insulation. They must not damage or degrade the insulation over time.</li>
                <li><strong>UL Listed lubricants</strong> - Always use lubricants specifically designed for electrical wire pulling. General-purpose lubricants (dish soap, petroleum jelly, WD-40) can degrade insulation and are NEC violations.</li>
              </ul>

              <h3 className="text-xl font-semibold mt-6 mb-3">Types of Wire Pulling Lubricant</h3>
              <div className="overflow-x-auto my-6">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-white/20">
                      <th className="text-left py-3 px-4 text-white/60">Type</th>
                      <th className="text-left py-3 px-4 text-white/60">Best For</th>
                      <th className="text-left py-3 px-4 text-white/60">Notes</th>
                    </tr>
                  </thead>
                  <tbody className="text-white/80">
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">Wax-based</td>
                      <td className="py-3 px-4">General purpose, most pulls</td>
                      <td className="py-3 px-4">Good all-around, easy cleanup, widely available</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">Polymer gel</td>
                      <td className="py-3 px-4">Long runs, heavy pulls</td>
                      <td className="py-3 px-4">Highest friction reduction, stays on wire longer</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">Silicone-based</td>
                      <td className="py-3 px-4">High-temperature environments</td>
                      <td className="py-3 px-4">Excellent heat resistance, more expensive</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4">Water-based</td>
                      <td className="py-3 px-4">Short, easy pulls</td>
                      <td className="py-3 px-4">Lowest cost, dries out quickly on long pulls</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="bg-red-900/20 border border-red-500/30 rounded-xl p-6 my-6">
                <h3 className="font-semibold text-red-400 mb-2">Never Use These as Wire Lubricant</h3>
                <ul className="text-white/70 text-sm space-y-1">
                  <li>Dish soap or detergent (dries sticky, attracts dirt)</li>
                  <li>Petroleum jelly or Vaseline (degrades PVC and thermoplastic insulation)</li>
                  <li>WD-40 or penetrating oils (petroleum-based, attacks insulation)</li>
                  <li>Vegetable oil or cooking spray (promotes bacterial growth, dries gummy)</li>
                  <li>Motor oil or grease (petroleum-based, major NEC violation)</li>
                </ul>
              </div>
            </section>

            <section id="tension-limits" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Maximum Pulling Tension by Wire Size</h2>
              <p className="text-white/80 mb-4">
                Exceeding the maximum pulling tension stretches conductors, thins insulation, and can cause immediate or long-term failures. Tension limits depend on conductor material, size, and how the pulling force is applied.
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-3">Pulling Tension Limits for Copper Conductors</h3>
              <p className="text-white/70 mb-4">
                The maximum pulling tension for copper conductors is typically calculated as 0.008 pounds per circular mil (cmil) of conductor area. For multiple conductors pulled simultaneously, the tension is applied to the total cmil area.
              </p>

              <div className="overflow-x-auto my-6">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-white/20">
                      <th className="text-left py-3 px-4 text-white/60">Wire Size</th>
                      <th className="text-left py-3 px-4 text-white/60">Area (cmil)</th>
                      <th className="text-left py-3 px-4 text-white/60">Max Tension per Conductor (lbs)</th>
                      <th className="text-left py-3 px-4 text-white/60">Max Tension (3 conductors, lbs)</th>
                    </tr>
                  </thead>
                  <tbody className="text-white/80">
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">14 AWG</td>
                      <td className="py-3 px-4 font-mono">4,110</td>
                      <td className="py-3 px-4 font-mono">33</td>
                      <td className="py-3 px-4 font-mono">99</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">12 AWG</td>
                      <td className="py-3 px-4 font-mono">6,530</td>
                      <td className="py-3 px-4 font-mono">52</td>
                      <td className="py-3 px-4 font-mono">156</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">10 AWG</td>
                      <td className="py-3 px-4 font-mono">10,380</td>
                      <td className="py-3 px-4 font-mono">83</td>
                      <td className="py-3 px-4 font-mono">249</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">8 AWG</td>
                      <td className="py-3 px-4 font-mono">16,510</td>
                      <td className="py-3 px-4 font-mono">132</td>
                      <td className="py-3 px-4 font-mono">396</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">6 AWG</td>
                      <td className="py-3 px-4 font-mono">26,240</td>
                      <td className="py-3 px-4 font-mono">210</td>
                      <td className="py-3 px-4 font-mono">630</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">4 AWG</td>
                      <td className="py-3 px-4 font-mono">41,740</td>
                      <td className="py-3 px-4 font-mono">334</td>
                      <td className="py-3 px-4 font-mono">1,002</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">2 AWG</td>
                      <td className="py-3 px-4 font-mono">66,360</td>
                      <td className="py-3 px-4 font-mono">531</td>
                      <td className="py-3 px-4 font-mono">1,593</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">1/0 AWG</td>
                      <td className="py-3 px-4 font-mono">105,600</td>
                      <td className="py-3 px-4 font-mono">845</td>
                      <td className="py-3 px-4 font-mono">2,535</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">4/0 AWG</td>
                      <td className="py-3 px-4 font-mono">211,600</td>
                      <td className="py-3 px-4 font-mono">1,693</td>
                      <td className="py-3 px-4 font-mono">5,079</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4">500 kcmil</td>
                      <td className="py-3 px-4 font-mono">500,000</td>
                      <td className="py-3 px-4 font-mono">4,000</td>
                      <td className="py-3 px-4 font-mono">12,000</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-white/60 text-sm">
                Values based on 0.008 lbs/cmil for copper conductors pulled by the conductor. When using a pulling eye attached to the conductor, higher limits may apply per manufacturer specifications. Aluminum conductors use 0.006 lbs/cmil due to lower tensile strength.
              </p>
            </section>

            <section id="sidewall-pressure" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Sidewall Bearing Pressure</h2>
              <p className="text-white/80 mb-4">
                Sidewall bearing pressure (SWBP) is the crushing force applied to a conductor as it is pulled around a bend in a conduit. This is often the limiting factor in wire pulls, not the straight-line tension. When conductors are pulled around a bend, centripetal force pushes them against the outside wall of the conduit.
              </p>

              <div className="bg-white/5 rounded-xl p-6 my-6">
                <h3 className="font-semibold text-cyan-400 mb-3">SWBP Formula</h3>
                <p className="text-white/80 font-mono text-center text-lg mb-3">
                  SWBP = T / R
                </p>
                <p className="text-white/70 text-sm">
                  Where <strong>T</strong> = pulling tension at the bend (lbs) and <strong>R</strong> = inside radius of the bend (feet). The result is in lbs/ft of conductor.
                </p>
              </div>

              <h3 className="text-xl font-semibold mt-6 mb-3">Maximum SWBP Limits</h3>
              <div className="grid md:grid-cols-2 gap-4 my-6">
                <div className="bg-white/5 rounded-xl p-6">
                  <div className="text-3xl font-mono font-bold text-cyan-400 mb-2">300 lbs/ft</div>
                  <p className="text-white/70 text-sm">Single conductor cables (typical limit)</p>
                </div>
                <div className="bg-white/5 rounded-xl p-6">
                  <div className="text-3xl font-mono font-bold text-purple-400 mb-2">500 lbs/ft</div>
                  <p className="text-white/70 text-sm">Multiconductor cables (typical limit)</p>
                </div>
              </div>

              <p className="text-white/80 mb-4">
                These limits are industry guidelines established by cable manufacturers and pulling equipment standards such as those from the Electricians&apos; Pull Calculator references. Always consult the specific cable manufacturer&apos;s data for exact limits.
              </p>

              <div className="bg-orange-900/30 rounded-xl p-6 my-6">
                <h3 className="font-semibold text-orange-400 mb-2">Why Bends Are the Problem</h3>
                <p className="text-white/70">
                  A 90-degree bend with a 12-inch radius in a conduit run with 500 lbs of tension creates a SWBP of 500 lbs/ft. The same tension around a 6-inch radius bend doubles the SWBP to 1,000 lbs/ft, which would crush most conductor insulation. This is why larger radius bends and fewer bends per run are critical for large conductor pulls.
                </p>
              </div>
            </section>

            <section id="jam-ratio" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Jam Ratio Prevention</h2>
              <p className="text-white/80 mb-4">
                Jam ratio describes the relationship between the conduit inner diameter and the conductor outer diameter. When three or more identical conductors are pulled through a conduit, they can lock together in a triangular configuration that wedges inside the conduit, making it impossible to push or pull the wire further.
              </p>

              <div className="bg-white/5 rounded-xl p-6 my-6">
                <h3 className="font-semibold text-cyan-400 mb-3">Jam Ratio Formula</h3>
                <p className="text-white/80 font-mono text-center text-lg mb-3">
                  Jam Ratio = D / d
                </p>
                <p className="text-white/70 text-sm">
                  Where <strong>D</strong> = conduit inner diameter and <strong>d</strong> = conductor outer diameter (including insulation).
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-4 my-6">
                <div className="bg-green-900/30 rounded-xl p-6 text-center">
                  <div className="text-3xl font-mono font-bold text-green-400 mb-2">&lt; 2.5</div>
                  <p className="text-white/70 text-sm">Safe - conductors stack, cannot triangulate</p>
                </div>
                <div className="bg-red-900/30 rounded-xl p-6 text-center">
                  <div className="text-3xl font-mono font-bold text-red-400 mb-2">2.5 - 3.2</div>
                  <p className="text-white/70 text-sm">Danger zone - jamming likely on bends</p>
                </div>
                <div className="bg-green-900/30 rounded-xl p-6 text-center">
                  <div className="text-3xl font-mono font-bold text-green-400 mb-2">&gt; 3.2</div>
                  <p className="text-white/70 text-sm">Safe - conductors have room to pass</p>
                </div>
              </div>

              <p className="text-white/80 mb-4">
                When your jam ratio falls in the 2.5 to 3.2 danger zone, consider the following solutions:
              </p>
              <ul className="list-disc list-inside text-white/70 space-y-2 mb-4">
                <li><strong>Upsize the conduit</strong> - Move to the next trade size to push the ratio above 3.2</li>
                <li><strong>Use a pulling basket grip</strong> - Keeps conductors aligned during the pull</li>
                <li><strong>Pull conductors one at a time</strong> - Eliminates the triangulation problem entirely</li>
                <li><strong>Apply extra lubricant</strong> - Reduces friction that contributes to wedging</li>
                <li><strong>Reduce pull speed</strong> - Slower pulls give conductors time to self-arrange</li>
              </ul>
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
                  <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/></svg>
                  Download Free
                </a>
              </div>
            </div>

            <section id="free-conductor" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">NEC 300.14: Free Conductor Length</h2>
              <p className="text-white/80 mb-4">
                After pulling conductors, you must leave adequate free conductor length at each outlet, junction, and switch point. This is not optional and it is one of the most commonly cited violations during inspections.
              </p>

              <div className="bg-purple-900/30 rounded-xl p-6 my-6">
                <h3 className="font-semibold text-purple-400 mb-2">NEC 300.14(A) - Minimum Free Conductor</h3>
                <p className="text-white/70 mb-3">
                  At each outlet, junction point, and switch point, a minimum of <strong>6 inches (150 mm)</strong> of free conductor must be left, measured from the point where the conductor emerges from the raceway or cable sheath.
                </p>
                <p className="text-white/70">
                  Additionally, at least <strong>3 inches (75 mm)</strong> of conductor must extend outside the box opening. This ensures enough wire for making connections, replacing devices, and future maintenance.
                </p>
              </div>

              <h3 className="text-xl font-semibold mt-6 mb-3">Practical Implications for Wire Pulling</h3>
              <ul className="list-disc list-inside text-white/70 space-y-2 mb-4">
                <li><strong>Add 12-18 inches per box</strong> - Experienced electricians leave more than the minimum to make terminations easier and allow for mistakes.</li>
                <li><strong>Account for all boxes in your measurement</strong> - When calculating total wire length for a pull, add the free conductor length at every box and panel.</li>
                <li><strong>Longer for large conductors</strong> - Larger wire requires more length for proper bending and termination. NEC 300.14 is the minimum; good practice is more.</li>
                <li><strong>Don&apos;t cut short</strong> - It is far cheaper to waste a few feet of wire than to re-pull an entire run because you cut it too short.</li>
              </ul>
            </section>

            <section id="pull-boxes" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Pull Boxes & Junction Boxes (NEC 314.28)</h2>
              <p className="text-white/80 mb-4">
                Pull boxes are installed in conduit runs to reduce pulling tension, provide access points for future maintenance, and allow direction changes. NEC 314.28 specifies minimum sizing requirements based on the largest conduit entering the box and the type of pull.
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-3">Straight Pull Sizing (NEC 314.28(A)(1))</h3>
              <div className="bg-white/5 rounded-xl p-6 my-6">
                <p className="text-white/80 font-mono text-center text-lg mb-3">
                  Minimum Length = 8 x Largest Trade Size
                </p>
                <p className="text-white/70 text-sm">
                  The minimum distance between the entry and exit points of the conduit must be at least 8 times the trade diameter of the largest raceway. For example, a straight pull with 2" conduit requires a minimum box length of 16 inches.
                </p>
              </div>

              <h3 className="text-xl font-semibold mt-6 mb-3">Angle Pull / U-Pull Sizing (NEC 314.28(A)(2))</h3>
              <div className="bg-white/5 rounded-xl p-6 my-6">
                <p className="text-white/80 font-mono text-center text-lg mb-3">
                  Minimum Distance = 6 x Largest Trade Size + Sum of Others
                </p>
                <p className="text-white/70 text-sm">
                  The distance between each raceway entry inside the box and the opposite wall must be at least 6 times the trade diameter of the largest raceway entering that row, plus the sum of the trade sizes of all other raceways in the same row on the same wall.
                </p>
              </div>

              <h3 className="text-xl font-semibold mt-6 mb-3">Pull Box Sizing Example</h3>
              <div className="bg-white/5 rounded-xl p-6 my-6">
                <h4 className="font-semibold text-cyan-400 mb-3">Problem:</h4>
                <p className="text-white/80 mb-3">
                  An angle pull with two 3" conduits entering one wall and a 2" conduit entering the adjacent wall. What are the minimum box dimensions?
                </p>
                <h4 className="font-semibold text-green-400 mb-3">Solution:</h4>
                <p className="text-white/70 mb-2">
                  <strong>Wall with 3" and 3" conduits:</strong> (6 x 3") + 3" = 21 inches minimum
                </p>
                <p className="text-white/70 mb-2">
                  <strong>Wall with 2" conduit:</strong> (6 x 2") = 12 inches minimum
                </p>
                <p className="text-white/70">
                  <strong>Minimum box:</strong> 21" x 12" (interior dimensions)
                </p>
              </div>

              <div className="bg-orange-900/30 rounded-xl p-6 my-6">
                <h3 className="font-semibold text-orange-400 mb-2">When to Add Pull Boxes</h3>
                <p className="text-white/70">
                  The NEC limits conduit runs to a maximum of 360 degrees of total bends between pull points (NEC 344.26, 358.26, etc., depending on conduit type). In practice, most electricians add a pull box whenever a run has more than 270 degrees of bends, exceeds 100 feet, or when pulling tension calculations indicate the wire would be damaged. Planning pull box locations before installing conduit saves significant labor.
                </p>
              </div>
            </section>

            <section id="calculating-tension" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Calculating Pulling Tension</h2>
              <p className="text-white/80 mb-4">
                Pulling tension calculations help you determine whether a proposed conduit run can be safely pulled without exceeding conductor tension or sidewall bearing pressure limits. While software tools handle the complex calculations, understanding the fundamentals helps you plan better conduit routes.
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-3">Straight Section Tension</h3>
              <div className="bg-white/5 rounded-xl p-6 my-6">
                <p className="text-white/80 font-mono text-center text-lg mb-3">
                  T = L x w x f
                </p>
                <p className="text-white/70 text-sm">
                  Where <strong>T</strong> = tension (lbs), <strong>L</strong> = length of straight section (feet), <strong>w</strong> = weight of conductors (lbs/ft), and <strong>f</strong> = coefficient of friction (typically 0.35 with lubricant, 0.50 without).
                </p>
              </div>

              <h3 className="text-xl font-semibold mt-6 mb-3">Bend Multiplier</h3>
              <div className="bg-white/5 rounded-xl p-6 my-6">
                <p className="text-white/80 font-mono text-center text-lg mb-3">
                  T_out = T_in x e^(f x &theta;)
                </p>
                <p className="text-white/70 text-sm">
                  Where <strong>T_in</strong> = tension entering the bend, <strong>e</strong> = 2.718 (Euler&apos;s number), <strong>f</strong> = coefficient of friction, and <strong>&theta;</strong> = bend angle in radians (90&deg; = &pi;/2 = 1.571 radians).
                </p>
              </div>

              <h3 className="text-xl font-semibold mt-6 mb-3">Practical Multipliers per 90-Degree Bend</h3>
              <div className="overflow-x-auto my-6">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-white/20">
                      <th className="text-left py-3 px-4 text-white/60">Coefficient of Friction</th>
                      <th className="text-left py-3 px-4 text-white/60">Multiplier per 90&deg; Bend</th>
                      <th className="text-left py-3 px-4 text-white/60">Condition</th>
                    </tr>
                  </thead>
                  <tbody className="text-white/80">
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-mono">0.20</td>
                      <td className="py-3 px-4 font-mono">1.37</td>
                      <td className="py-3 px-4">Excellent lubricant, new conduit</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-mono">0.35</td>
                      <td className="py-3 px-4 font-mono">1.73</td>
                      <td className="py-3 px-4">Good lubricant (typical)</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-mono">0.50</td>
                      <td className="py-3 px-4 font-mono">2.19</td>
                      <td className="py-3 px-4">No lubricant, dry pull</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-mono">0.70</td>
                      <td className="py-3 px-4 font-mono">3.00</td>
                      <td className="py-3 px-4">Corroded or rough conduit</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="bg-green-900/20 border border-green-500/30 rounded-xl p-6 my-6">
                <h3 className="font-semibold text-green-400 mb-2">Worked Example: Tension Calculation</h3>
                <p className="text-white/70 mb-2">
                  <strong>Setup:</strong> 150 ft straight run, one 90-degree bend, then 50 ft straight to the end. Pulling 3 x #4/0 THHN copper (weight approximately 1.90 lbs/ft for 3 conductors). Coefficient of friction: 0.35 with lubricant.
                </p>
                <p className="text-white/70 mb-1">
                  <strong>Step 1:</strong> First straight section: T1 = 150 x 1.90 x 0.35 = 99.75 lbs
                </p>
                <p className="text-white/70 mb-1">
                  <strong>Step 2:</strong> After 90-degree bend: T2 = 99.75 x 1.73 = 172.6 lbs
                </p>
                <p className="text-white/70 mb-1">
                  <strong>Step 3:</strong> Final straight section: T3 = 172.6 + (50 x 1.90 x 0.35) = 172.6 + 33.25 = 205.85 lbs
                </p>
                <p className="text-white/70 mt-2">
                  <strong>Result:</strong> 205.85 lbs total pulling tension. Maximum allowed for 3 x 4/0 copper is 5,079 lbs. This pull is well within limits.
                </p>
              </div>
            </section>

            <section id="long-runs" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Long Run Techniques</h2>
              <p className="text-white/80 mb-4">
                Pulls exceeding 100 feet or involving multiple bends require extra planning and technique. The following strategies help ensure successful long-run pulls without damaging conductors.
              </p>

              <div className="space-y-4 my-6">
                <div className="bg-white/5 rounded-xl p-4">
                  <p className="text-green-400 font-semibold">Pull from the end with the most bends</p>
                  <p className="text-white/60 text-sm mt-1">Pulling through bends increases tension exponentially. By pulling from the far end (past the bends), the heavy pulling occurs on the straight sections, and the wire feeds through the bends under lower tension.</p>
                </div>
                <div className="bg-white/5 rounded-xl p-4">
                  <p className="text-green-400 font-semibold">Use a figure-8 layout for wire</p>
                  <p className="text-white/60 text-sm mt-1">When feeding wire off a reel or spool, lay it in a figure-8 pattern on the floor. This prevents kinks and twists that occur when pulling wire off a coil in a single direction.</p>
                </div>
                <div className="bg-white/5 rounded-xl p-4">
                  <p className="text-green-400 font-semibold">Station a helper at each bend</p>
                  <p className="text-white/60 text-sm mt-1">A helper feeding wire around bends reduces friction dramatically. They can push wire into the conduit as the puller pulls from the other end, distributing tension along the run.</p>
                </div>
                <div className="bg-white/5 rounded-xl p-4">
                  <p className="text-green-400 font-semibold">Use intermediate pull points</p>
                  <p className="text-white/60 text-sm mt-1">For extremely long runs, install pull boxes at strategic locations (before or after bends). Pull wire in segments, which keeps tension well below limits at each stage.</p>
                </div>
                <div className="bg-white/5 rounded-xl p-4">
                  <p className="text-green-400 font-semibold">Apply lubricant generously and continuously</p>
                  <p className="text-white/60 text-sm mt-1">Lubricant dries or gets wiped off during long pulls. Apply it continuously at the feed end and pre-lube the conduit if possible. More lubricant is always better.</p>
                </div>
                <div className="bg-white/5 rounded-xl p-4">
                  <p className="text-green-400 font-semibold">Pull at steady, moderate speed</p>
                  <p className="text-white/60 text-sm mt-1">Jerky, fast pulls create tension spikes that exceed steady-state limits. Use a consistent speed, typically 15-30 feet per minute for larger conductors.</p>
                </div>
              </div>
            </section>

            <section id="parallel-conductors" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Paralleling Conductors</h2>
              <p className="text-white/80 mb-4">
                When loads exceed the capacity of a single conductor, NEC 310.10(G) allows paralleling two or more conductors per phase. Wire pulling for parallel conductor installations requires careful planning to ensure balanced impedance and proper installation.
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-3">NEC Requirements for Parallel Conductors</h3>
              <ul className="list-disc list-inside text-white/70 space-y-2 mb-4">
                <li><strong>Minimum size: 1/0 AWG</strong> - Conductors smaller than 1/0 cannot be paralleled (with limited exceptions for grounding conductors).</li>
                <li><strong>Same length</strong> - All parallel conductors in each phase must be the same length to ensure equal impedance.</li>
                <li><strong>Same material</strong> - All conductors in parallel must be the same material (all copper or all aluminum).</li>
                <li><strong>Same size and insulation</strong> - Identical conductor size and insulation type for each set.</li>
                <li><strong>Same termination method</strong> - All conductors must be terminated the same way.</li>
              </ul>

              <div className="bg-purple-900/30 rounded-xl p-6 my-6">
                <h3 className="font-semibold text-purple-400 mb-2">Wire Pulling Tip for Parallel Runs</h3>
                <p className="text-white/70">
                  When pulling parallel conductors in separate conduits, cut all conductors from the same reel simultaneously. Mark each conductor&apos;s phase identification before pulling. Pull each conduit with one complete set of phases (A, B, C, N, G) rather than putting all A-phase conductors in one conduit. This ensures equal impedance between parallel paths and prevents overheating from inductive effects per NEC 300.3(B) and NEC 300.20.
                </p>
              </div>
            </section>

            <section id="tools-equipment" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Wire Pulling Tools & Equipment</h2>
              <p className="text-white/80 mb-4">
                Having the right tools makes wire pulling faster, safer, and less likely to damage conductors. Here is the essential equipment for professional wire pulling.
              </p>

              <div className="grid md:grid-cols-2 gap-4 my-6">
                <div className="bg-white/5 rounded-xl p-6">
                  <h3 className="font-semibold text-yellow-400 mb-2">Pulling Grips</h3>
                  <ul className="text-white/70 text-sm space-y-1">
                    <li>Basket grip (Kellems grip) - for multiple conductors</li>
                    <li>Single conductor pulling eye - for individual large wires</li>
                    <li>Swivel connector - prevents twisting during pull</li>
                    <li>Match grip size to conductor bundle diameter</li>
                  </ul>
                </div>
                <div className="bg-white/5 rounded-xl p-6">
                  <h3 className="font-semibold text-blue-400 mb-2">Tugger / Puller Machine</h3>
                  <ul className="text-white/70 text-sm space-y-1">
                    <li>Portable cable puller (up to 4,000 lbs)</li>
                    <li>Capstan winch (for continuous pulling)</li>
                    <li>Adjustable tension limiter built in</li>
                    <li>Variable speed control essential</li>
                  </ul>
                </div>
                <div className="bg-white/5 rounded-xl p-6">
                  <h3 className="font-semibold text-green-400 mb-2">Feed-End Equipment</h3>
                  <ul className="text-white/70 text-sm space-y-1">
                    <li>Wire reel stand / jack stand (keeps reels spinning freely)</li>
                    <li>Conduit feed guide / bushing (protects wire at entry)</li>
                    <li>Lubricant applicator (squeeze bottle or bucket)</li>
                    <li>Wire straightener (removes coil memory)</li>
                  </ul>
                </div>
                <div className="bg-white/5 rounded-xl p-6">
                  <h3 className="font-semibold text-cyan-400 mb-2">Communication & Safety</h3>
                  <ul className="text-white/70 text-sm space-y-1">
                    <li>Two-way radios (essential for long runs)</li>
                    <li>Tension dynamometer (measures pulling force live)</li>
                    <li>Leather gloves (protect hands from wire cuts)</li>
                    <li>Safety glasses (wire ends can snap back)</li>
                  </ul>
                </div>
              </div>

              <div className="bg-green-900/20 border border-green-500/30 rounded-xl p-6 my-6">
                <h3 className="font-semibold text-green-400 mb-2">The Professional Setup</h3>
                <p className="text-white/70">
                  A proper wire pull station includes: wire reels on a spinning jack stand, a feed guide at the conduit entry, lubricant being applied continuously, a tugger or manual team at the pull end with a Kellems grip and swivel, two-way radio communication between both ends, and a tension dynamometer on the pull rope. Every component reduces the chance of damaged wire and callbacks.
                </p>
              </div>
            </section>

            <section id="common-mistakes" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Common Mistakes & Cable Damage Prevention</h2>
              <p className="text-white/80 mb-4">
                Wire pulling mistakes are expensive. A damaged conductor hidden inside conduit can cause failures years later. These are the most common mistakes and how to avoid them.
              </p>

              <div className="space-y-4 my-6">
                <div className="bg-red-900/20 border border-red-500/30 rounded-xl p-6">
                  <h3 className="font-semibold text-red-400 mb-2">Pulling without lubricant</h3>
                  <p className="text-white/60 text-sm">Friction without lubricant can be 2-3 times higher, leading to insulation damage and stretched conductors. Lubricant is cheap; re-pulling wire is not. Use lubricant on every pull longer than 10 feet or with any bends.</p>
                </div>
                <div className="bg-red-900/20 border border-red-500/30 rounded-xl p-6">
                  <h3 className="font-semibold text-red-400 mb-2">Exceeding the 360-degree bend limit</h3>
                  <p className="text-white/60 text-sm">NEC limits total bends between pull points to 360 degrees. Four 90-degree bends is the maximum. Exceeding this makes pulling extremely difficult and risks conductor damage. Add a pull box before reaching the limit.</p>
                </div>
                <div className="bg-red-900/20 border border-red-500/30 rounded-xl p-6">
                  <h3 className="font-semibold text-red-400 mb-2">Using the wrong pulling grip</h3>
                  <p className="text-white/60 text-sm">Wrapping wire around a screwdriver or tying a knot concentrates all tension on a single point, damaging the conductor. Always use a proper pulling grip (Kellems basket or pulling eye) rated for the load.</p>
                </div>
                <div className="bg-red-900/20 border border-red-500/30 rounded-xl p-6">
                  <h3 className="font-semibold text-red-400 mb-2">Dragging wire across sharp edges</h3>
                  <p className="text-white/60 text-sm">Cut conduit ends, box edges, and burrs slice through insulation. Always deburr conduit ends and install bushings per NEC 300.4(G). Use feed guides at conduit entry points.</p>
                </div>
                <div className="bg-red-900/20 border border-red-500/30 rounded-xl p-6">
                  <h3 className="font-semibold text-red-400 mb-2">Jerking or yanking during pulls</h3>
                  <p className="text-white/60 text-sm">Sudden force spikes create peak tensions far above steady-state calculations. Pull at a steady, moderate speed. If the wire stops moving, stop pulling, communicate with the feed end, and troubleshoot before applying more force.</p>
                </div>
                <div className="bg-red-900/20 border border-red-500/30 rounded-xl p-6">
                  <h3 className="font-semibold text-red-400 mb-2">Not leaving enough free conductor</h3>
                  <p className="text-white/60 text-sm">Cutting wire too short at boxes violates NEC 300.14 and makes terminations difficult or impossible. Measure twice, add extra, and cut once. Leave at least 6 inches of free conductor at every box, more for larger wire.</p>
                </div>
                <div className="bg-red-900/20 border border-red-500/30 rounded-xl p-6">
                  <h3 className="font-semibold text-red-400 mb-2">Failing to pre-inspect the conduit</h3>
                  <p className="text-white/60 text-sm">Debris, construction dust, water, and conduit damage can all cause pulling failures. Run a mandrel (test plug) through the conduit before pulling expensive wire. A few minutes of inspection prevents hours of troubleshooting.</p>
                </div>
                <div className="bg-red-900/20 border border-red-500/30 rounded-xl p-6">
                  <h3 className="font-semibold text-red-400 mb-2">Ignoring jam ratio on same-size conductors</h3>
                  <p className="text-white/60 text-sm">Three same-size conductors in a conduit with a jam ratio between 2.5 and 3.2 will jam on bends. Check the ratio before pulling and upsize the conduit if needed. This is especially common with 3 x #10 THHN in 1/2" EMT.</p>
                </div>
              </div>

              <div className="bg-green-900/20 border border-green-500/30 rounded-xl p-6 my-6">
                <h3 className="font-semibold text-green-400 mb-2">Post-Pull Inspection Checklist</h3>
                <ul className="text-white/70 text-sm space-y-1">
                  <li>Visually inspect all conductors for insulation damage at entry/exit points</li>
                  <li>Verify free conductor length at every box meets NEC 300.14</li>
                  <li>Perform a megger (insulation resistance) test on large conductor pulls</li>
                  <li>Check continuity on each conductor end-to-end</li>
                  <li>Verify correct conductor identification and phase marking</li>
                  <li>Ensure all pulling equipment is removed from the conduit system</li>
                </ul>
              </div>
            </section>

            {/* CTA Section */}
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
                    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/></svg>
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
                <Link href="/blog/conduit-fill-calculation-guide" className="bg-white/5 hover:bg-white/10 rounded-xl p-6 transition-colors">
                  <span className="text-cyan-400 text-sm">Calculations</span>
                  <h3 className="font-semibold mt-2">Conduit Fill Calculation: NEC Chapter 9 Tables</h3>
                </Link>
                <Link href="/blog/electrical-conduit-types-guide" className="bg-white/5 hover:bg-white/10 rounded-xl p-6 transition-colors">
                  <span className="text-green-400 text-sm">Installation</span>
                  <h3 className="font-semibold mt-2">Electrical Conduit Types: Complete Guide</h3>
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
