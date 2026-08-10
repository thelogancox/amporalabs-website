import { Metadata } from "next";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import { BreadcrumbJsonLd, BlogPostingJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Knob and Tube Wiring: Identification, Hazards & Replacement Guide",
  description: "Complete guide to knob and tube wiring. Learn how to identify K&T wiring, understand the fire hazards, insulation interaction risks, insurance implications, and replacement options for older homes.",
  keywords: [
    "knob and tube wiring",
    "K&T wiring",
    "knob and tube identification",
    "knob and tube fire hazard",
    "knob and tube replacement",
    "knob and tube insurance",
    "old house wiring",
    "knob and tube insulation",
    "replace knob and tube",
    "knob and tube inspection",
    "vintage electrical wiring",
    "knob and tube dangers",
    "rewire old house",
    "knob and tube removal cost",
    "knob and tube and blown insulation"
  ],
  alternates: {
    canonical: "https://amporalabs.com/blog/knob-and-tube-wiring-guide",
  },
  openGraph: {
    title: "Knob and Tube Wiring: Identification, Hazards & Replacement Guide - Ampora",
    description: "Complete guide to identifying, understanding hazards, and replacing knob and tube wiring in older homes.",
    url: "https://amporalabs.com/blog/knob-and-tube-wiring-guide",
    type: "article",
  },
};

function HeroIllustration() {
  return (
    <svg viewBox="0 0 400 160" className="w-full h-40 md:h-48" aria-label="Knob and tube wiring identification illustration">
      {/* Knob illustration */}
      <g transform="translate(40, 30)">
        {/* Porcelain knob */}
        <ellipse cx="30" cy="20" rx="18" ry="10" fill="#d4a574" stroke="#a0845c" strokeWidth="1.5"/>
        <rect x="12" y="20" width="36" height="15" fill="#d4a574" stroke="#a0845c" strokeWidth="1.5"/>
        <ellipse cx="30" cy="35" rx="18" ry="10" fill="#c4956a" stroke="#a0845c" strokeWidth="1.5"/>
        <line x1="30" y1="35" x2="30" y2="60" stroke="#6b7280" strokeWidth="2"/>

        {/* Wire across knob */}
        <line x1="0" y1="17" x2="60" y2="17" stroke="#1f1f1f" strokeWidth="3"/>
        <line x1="0" y1="17" x2="60" y2="17" stroke="#f5f5dc" strokeWidth="2" strokeDasharray="2"/>

        <text x="30" y="80" textAnchor="middle" fill="#d4a574" fontSize="7" fontWeight="bold">KNOB</text>
      </g>

      {/* Tube illustration */}
      <g transform="translate(140, 30)">
        {/* Joists */}
        <rect x="0" y="0" width="20" height="60" fill="#8B6914" stroke="#6b5210"/>
        <rect x="60" y="0" width="20" height="60" fill="#8B6914" stroke="#6b5210"/>

        {/* Porcelain tube */}
        <ellipse cx="10" cy="30" rx="8" ry="12" fill="#d4a574" stroke="#a0845c" strokeWidth="1.5"/>
        <rect x="10" y="18" width="60" height="24" fill="#d4a574" stroke="#a0845c" strokeWidth="1.5"/>
        <ellipse cx="70" cy="30" rx="8" ry="12" fill="#c4956a" stroke="#a0845c" strokeWidth="1.5"/>

        {/* Wire through tube */}
        <line x1="-15" y1="30" x2="95" y2="30" stroke="#1f1f1f" strokeWidth="2.5"/>

        <text x="40" y="80" textAnchor="middle" fill="#d4a574" fontSize="7" fontWeight="bold">TUBE</text>
      </g>

      {/* Hazard warnings */}
      <g transform="translate(270, 10)">
        <rect x="0" y="0" width="120" height="140" rx="6" fill="#ef4444" fillOpacity="0.1" stroke="#ef4444" strokeDasharray="4"/>
        <text x="60" y="18" textAnchor="middle" fill="#ef4444" fontSize="7" fontWeight="bold">Hazards</text>

        <text x="8" y="38" fill="#9ca3af" fontSize="6">&#x26A0; No ground wire</text>
        <text x="8" y="54" fill="#9ca3af" fontSize="6">&#x26A0; Brittle insulation</text>
        <text x="8" y="70" fill="#9ca3af" fontSize="6">&#x26A0; Fire risk w/ blown</text>
        <text x="14" y="80" fill="#9ca3af" fontSize="6">insulation</text>
        <text x="8" y="96" fill="#9ca3af" fontSize="6">&#x26A0; Overloaded circuits</text>
        <text x="8" y="112" fill="#9ca3af" fontSize="6">&#x26A0; Insurance issues</text>
        <text x="8" y="128" fill="#9ca3af" fontSize="6">&#x26A0; Improper splices</text>
      </g>
    </svg>
  );
}

export default function KnobAndTubeWiringGuidePage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navigation />
      <div className="pt-20">
        <BreadcrumbJsonLd
          items={[
            { name: "Home", url: "https://amporalabs.com" },
            { name: "Blog", url: "https://amporalabs.com/blog" },
            { name: "Knob and Tube Wiring Guide", url: "https://amporalabs.com/blog/knob-and-tube-wiring-guide" },
          ]}
        />
        <BlogPostingJsonLd
          headline="Knob and Tube Wiring: Identification, Hazards & Replacement Guide"
          description="Complete guide to knob and tube wiring identification, hazards, insulation interaction, insurance implications, and replacement options."
          datePublished="2025-02-08"
          dateModified="2025-02-08"
          url="https://amporalabs.com/blog/knob-and-tube-wiring-guide"
          wordCount={2800}
          keywords={["knob and tube wiring", "K&T wiring", "old house wiring", "wiring replacement", "fire hazard"]}
        />

        <article className="max-w-4xl mx-auto px-6 py-12">
          {/* Breadcrumb */}
          <nav className="text-sm text-white/60 mb-8">
            <Link href="/" className="hover:text-white">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/blog" className="hover:text-white">Blog</Link>
            <span className="mx-2">/</span>
            <span className="text-white">Knob and Tube Wiring Guide</span>
          </nav>

          {/* Article Header */}
          <header className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <span className="px-3 py-1 bg-red-600/30 text-red-300 text-sm font-medium rounded-full">
                Troubleshooting
              </span>
              <span className="text-white/40 text-sm">11 min read</span>
              <span className="text-white/40 text-sm">February 8, 2025</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6 leading-tight">
              Knob and Tube Wiring: Identification, Hazards &amp; Replacement Guide
            </h1>
            <p className="text-xl text-white/70">
              A comprehensive guide for electricians and homeowners on understanding knob and tube wiring &mdash; how to identify it, why it&apos;s dangerous, how insulation creates fire hazards, and the best approaches to replacement.
            </p>
          </header>

          <div className="mb-12 bg-gradient-to-br from-red-900/20 to-orange-900/20 rounded-2xl p-6 border border-white/10">
            <HeroIllustration />
          </div>

          {/* Table of Contents */}
          <div className="bg-white/5 rounded-2xl p-6 mb-12">
            <h2 className="font-display font-bold mb-4">In This Guide</h2>
            <ul className="space-y-2 text-white/70">
              <li><a href="#what-is-kt" className="hover:text-purple-400">&#8594; What Is Knob and Tube Wiring?</a></li>
              <li><a href="#identification" className="hover:text-purple-400">&#8594; How to Identify K&amp;T Wiring</a></li>
              <li><a href="#common-locations" className="hover:text-purple-400">&#8594; Common Locations in Older Homes</a></li>
              <li><a href="#fire-hazards" className="hover:text-purple-400">&#8594; Fire Hazards &amp; Safety Concerns</a></li>
              <li><a href="#insulation-interaction" className="hover:text-purple-400">&#8594; Insulation Interaction &amp; Building Envelope</a></li>
              <li><a href="#insurance-implications" className="hover:text-purple-400">&#8594; Insurance &amp; Real Estate Implications</a></li>
              <li><a href="#replacement-options" className="hover:text-purple-400">&#8594; Replacement Options &amp; Methods</a></li>
              <li><a href="#cost-considerations" className="hover:text-purple-400">&#8594; Cost Considerations</a></li>
            </ul>
          </div>

          {/* Article Content */}
          <div className="prose prose-invert prose-lg max-w-none">

            <section id="what-is-kt" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">What Is Knob and Tube Wiring?</h2>
              <p className="text-white/80 mb-4">
                Knob and tube (K&amp;T) wiring was the standard electrical wiring method used in North American buildings from the 1880s through the 1940s. It gets its name from the two distinctive components used in its installation: porcelain <strong>knobs</strong> that support wires along their runs, and porcelain <strong>tubes</strong> that protect wires where they pass through framing members.
              </p>
              <p className="text-white/80 mb-4">
                Unlike modern wiring systems where hot and neutral conductors run together inside a single cable (like Romex), K&amp;T wiring routes the hot and neutral conductors separately, typically maintaining 4 to 6 inches of separation between them. The individual conductors are insulated with a rubberized cloth fabric.
              </p>

              <div className="bg-cyan-900/30 rounded-xl p-6 my-6">
                <h3 className="font-semibold text-cyan-400 mb-3">Key Characteristics of K&amp;T Wiring</h3>
                <ul className="space-y-2 text-white/70 text-sm">
                  <li>&#x2022; <strong>Two-wire system</strong> &mdash; Hot and neutral only; no equipment grounding conductor</li>
                  <li>&#x2022; <strong>Individual conductors</strong> &mdash; Hot and neutral routed separately, not in a cable</li>
                  <li>&#x2022; <strong>Porcelain insulators</strong> &mdash; Knobs nail to framing to support wires; tubes protect wires through holes in joists and studs</li>
                  <li>&#x2022; <strong>Rubberized cloth insulation</strong> &mdash; Wires wrapped in cloth-covered rubber insulation</li>
                  <li>&#x2022; <strong>Copper conductors</strong> &mdash; Typically 14 AWG solid copper</li>
                  <li>&#x2022; <strong>Soldered and taped splices</strong> &mdash; Connections made by soldering and wrapping with friction tape</li>
                  <li>&#x2022; <strong>No junction boxes at splices</strong> &mdash; Open splices in accessible attic and basement spaces were normal practice</li>
                </ul>
              </div>

              <p className="text-white/80 mb-4">
                When originally installed and in its original configuration, K&amp;T wiring is not inherently dangerous. The system was designed to dissipate heat through air circulation around the separated conductors. The problems arise from age, modifications, and changes to the building that interfere with its design assumptions.
              </p>
            </section>

            <section id="identification" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">How to Identify K&amp;T Wiring</h2>
              <p className="text-white/80 mb-4">
                Identifying knob and tube wiring is straightforward once you know what to look for. Here are the telltale signs:
              </p>

              <div className="grid md:grid-cols-2 gap-6 my-6">
                <div className="bg-white/5 rounded-xl p-6">
                  <h3 className="font-semibold text-orange-400 mb-3">Visual Indicators</h3>
                  <ul className="space-y-2 text-white/70 text-sm">
                    <li>&#x2022; White or brown porcelain knobs nailed to joists or studs</li>
                    <li>&#x2022; Porcelain tubes passing through holes in framing</li>
                    <li>&#x2022; Individual cloth-covered wires running separately</li>
                    <li>&#x2022; Black rubberized insulation that may be cracking or flaking</li>
                    <li>&#x2022; Soldered splices wrapped in black friction tape</li>
                    <li>&#x2022; Two-prong (ungrounded) receptacles throughout the house</li>
                  </ul>
                </div>
                <div className="bg-white/5 rounded-xl p-6">
                  <h3 className="font-semibold text-purple-400 mb-3">Where to Look</h3>
                  <ul className="space-y-2 text-white/70 text-sm">
                    <li>&#x2022; <strong>Attic</strong> &mdash; Most visible location; look on top of ceiling joists</li>
                    <li>&#x2022; <strong>Basement/Crawl space</strong> &mdash; Look underneath floor joists</li>
                    <li>&#x2022; <strong>Inside walls</strong> &mdash; Remove outlet covers and look for cloth wiring</li>
                    <li>&#x2022; <strong>Behind panels</strong> &mdash; Check the service panel for cloth-insulated wires</li>
                    <li>&#x2022; <strong>Closets and utility spaces</strong> &mdash; Less likely to have been covered</li>
                  </ul>
                </div>
              </div>

              <div className="bg-orange-900/30 rounded-xl p-6 my-6">
                <h3 className="font-semibold text-orange-400 mb-3">K&amp;T vs Other Vintage Wiring</h3>
                <p className="text-white/70 text-sm mb-3">
                  Don&apos;t confuse K&amp;T with other older wiring types:
                </p>
                <ul className="space-y-2 text-white/70 text-sm">
                  <li>&#x2022; <strong>BX/AC cable (armored cable)</strong> &mdash; Metal-sheathed flexible cable; appeared in the 1920s-1950s. Has a spiral metal armor around the conductors.</li>
                  <li>&#x2022; <strong>Early Romex</strong> &mdash; Non-metallic sheathed cable from the 1950s-1960s with cloth outer jacket. Conductors run together, unlike K&amp;T.</li>
                  <li>&#x2022; <strong>Conduit wiring</strong> &mdash; Wires run through metal or rigid conduit tubes. Professional installation in conduit is still code-compliant.</li>
                </ul>
              </div>
            </section>

            <section id="common-locations" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Common Locations in Older Homes</h2>
              <p className="text-white/80 mb-4">
                K&amp;T wiring is found in homes built roughly between 1880 and 1945, though some areas continued using it into the 1950s. Many of these homes have been partially rewired, creating a mix of old and new wiring that requires careful assessment.
              </p>

              <div className="overflow-x-auto my-6">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-white/20">
                      <th className="text-left py-3 px-4 text-white/60">Location</th>
                      <th className="text-left py-3 px-4 text-white/60">Likelihood of K&amp;T</th>
                      <th className="text-left py-3 px-4 text-white/60">Notes</th>
                    </tr>
                  </thead>
                  <tbody className="text-white/70">
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-semibold">Attic spaces</td>
                      <td className="py-3 px-4">Very high</td>
                      <td className="py-3 px-4">Often left in place even when lower floors rewired</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-semibold">Exterior walls</td>
                      <td className="py-3 px-4">High</td>
                      <td className="py-3 px-4">Difficult to access for replacement; often covered with insulation</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-semibold">Ceiling light fixtures</td>
                      <td className="py-3 px-4">High</td>
                      <td className="py-3 px-4">Original lighting circuits frequently retained</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-semibold">Interior walls (upper floors)</td>
                      <td className="py-3 px-4">Moderate</td>
                      <td className="py-3 px-4">May have been partially updated during renovations</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-semibold">Basement/Crawl space</td>
                      <td className="py-3 px-4">Moderate</td>
                      <td className="py-3 px-4">Often replaced first due to accessibility</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-semibold">Kitchen/Bathroom</td>
                      <td className="py-3 px-4">Lower</td>
                      <td className="py-3 px-4">Usually rewired during renovations for GFCI and additional circuits</td>
                    </tr>
                  </tbody>
                </table>
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

            <section id="fire-hazards" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Fire Hazards &amp; Safety Concerns</h2>
              <p className="text-white/80 mb-4">
                While K&amp;T wiring in its original, undisturbed state was a reasonable system for its era, several factors make it a significant fire and safety concern in modern homes:
              </p>

              <div className="space-y-4 my-6">
                <div className="bg-white/5 rounded-xl p-6">
                  <h3 className="font-semibold text-red-400 mb-2">Deteriorated Insulation</h3>
                  <p className="text-white/70 text-sm">
                    The rubberized cloth insulation on K&amp;T wiring becomes brittle and cracks over decades of exposure to heat cycling. Once the insulation fails, bare copper conductors are exposed, creating a direct shock and fire hazard. This is especially dangerous in attics where temperature extremes accelerate deterioration.
                  </p>
                </div>
                <div className="bg-white/5 rounded-xl p-6">
                  <h3 className="font-semibold text-red-400 mb-2">No Equipment Grounding</h3>
                  <p className="text-white/70 text-sm">
                    K&amp;T is a two-wire system with no equipment grounding conductor. This means there is no ground fault path for metal-bodied appliances, power tools, and other equipment that relies on grounding for safety. Installing three-prong receptacles on ungrounded K&amp;T circuits without GFCI protection is a code violation and safety hazard.
                  </p>
                </div>
                <div className="bg-white/5 rounded-xl p-6">
                  <h3 className="font-semibold text-red-400 mb-2">Circuit Overloading</h3>
                  <p className="text-white/70 text-sm">
                    K&amp;T circuits were designed for the modest electrical loads of the early 20th century &mdash; a few lights and maybe a radio. Modern homes draw far more power with air conditioning, computers, kitchen appliances, and entertainment systems. The original 14 AWG wires on 15A circuits are frequently overloaded.
                  </p>
                </div>
                <div className="bg-white/5 rounded-xl p-6">
                  <h3 className="font-semibold text-red-400 mb-2">Improper Modifications</h3>
                  <p className="text-white/70 text-sm">
                    Over decades, K&amp;T circuits are often improperly extended or spliced by homeowners or unqualified individuals. Common problems include wire nut connections to modern Romex without junction boxes, oversized fuses or breakers, and extension of circuits beyond their safe capacity.
                  </p>
                </div>
              </div>
            </section>

            <section id="insulation-interaction" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Insulation Interaction &amp; Building Envelope</h2>
              <p className="text-white/80 mb-4">
                The most dangerous scenario for K&amp;T wiring is contact with building insulation. This is a critical issue because many homeowners add insulation to older homes for energy efficiency without realizing the fire risk it creates.
              </p>

              <div className="bg-purple-900/30 rounded-xl p-6 my-6">
                <h3 className="font-semibold text-purple-400 mb-3">Why Insulation + K&amp;T = Fire Hazard</h3>
                <p className="text-white/70 text-sm mb-3">
                  K&amp;T wiring was designed to dissipate heat through air circulation around the separated conductors. When insulation is packed around or blown over K&amp;T wiring:
                </p>
                <ul className="space-y-2 text-white/70 text-sm">
                  <li>&#x2022; <strong>Heat cannot dissipate</strong> &mdash; The insulation traps heat generated by current flow in the conductors</li>
                  <li>&#x2022; <strong>Accelerated insulation breakdown</strong> &mdash; Higher temperatures cause the already-aging wire insulation to deteriorate faster</li>
                  <li>&#x2022; <strong>Lower ignition threshold</strong> &mdash; Cellulose and fiberglass insulation in direct contact with hot wires can eventually ignite</li>
                  <li>&#x2022; <strong>Concealed fire risk</strong> &mdash; A fire starting in insulation-covered wiring may smolder undetected before breaking through</li>
                </ul>
              </div>

              <div className="bg-green-900/30 rounded-xl p-6 my-6">
                <h3 className="font-semibold text-green-400 mb-3">NEC Position on Insulation Contact</h3>
                <p className="text-white/70 text-sm mb-3">
                  The NEC does not directly address existing K&amp;T wiring (the NEC is not retroactive), but building codes and energy codes in most jurisdictions prohibit:
                </p>
                <ul className="space-y-2 text-white/70 text-sm">
                  <li>&#x2022; Blown-in insulation over K&amp;T wiring without prior evaluation by a licensed electrician</li>
                  <li>&#x2022; Batt insulation in direct contact with K&amp;T conductors</li>
                  <li>&#x2022; Enclosing K&amp;T wiring in insulated wall or ceiling cavities during renovation</li>
                </ul>
                <p className="text-white/70 text-sm mt-3">
                  Many jurisdictions require that K&amp;T wiring be removed or decommissioned before insulation can be added. Some allow insulation if a licensed electrician certifies the K&amp;T wiring is in good condition and the circuits are not overloaded.
                </p>
              </div>
            </section>

            <section id="insurance-implications" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Insurance &amp; Real Estate Implications</h2>
              <p className="text-white/80 mb-4">
                Knob and tube wiring has significant financial implications beyond the cost of replacement. Insurance companies and real estate markets treat K&amp;T as a material deficiency.
              </p>

              <div className="grid md:grid-cols-2 gap-6 my-6">
                <div className="bg-orange-900/30 rounded-xl p-6">
                  <h3 className="font-semibold text-orange-400 mb-3">Insurance Challenges</h3>
                  <ul className="space-y-2 text-white/70 text-sm">
                    <li>&#x2022; Many insurance companies will not write new policies for homes with active K&amp;T wiring</li>
                    <li>&#x2022; Some insurers require a licensed electrician&apos;s inspection report before issuing a policy</li>
                    <li>&#x2022; Premiums may be 20-50% higher for homes with K&amp;T wiring</li>
                    <li>&#x2022; Some carriers offer limited coverage that excludes electrical fire claims</li>
                    <li>&#x2022; Renewal may be denied if K&amp;T is discovered during a claim investigation</li>
                  </ul>
                </div>
                <div className="bg-cyan-900/30 rounded-xl p-6">
                  <h3 className="font-semibold text-cyan-400 mb-3">Real Estate Impact</h3>
                  <ul className="space-y-2 text-white/70 text-sm">
                    <li>&#x2022; Home inspectors flag K&amp;T wiring as a major finding</li>
                    <li>&#x2022; Buyers may request price reductions of $8,000-$20,000+ for rewiring</li>
                    <li>&#x2022; FHA and VA loans may require K&amp;T remediation before closing</li>
                    <li>&#x2022; Disclosure is required in most states if K&amp;T is known to exist</li>
                    <li>&#x2022; Some buyers will walk away from homes with K&amp;T regardless of price</li>
                  </ul>
                </div>
              </div>
            </section>

            <section id="replacement-options" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Replacement Options &amp; Methods</h2>
              <p className="text-white/80 mb-4">
                Replacing K&amp;T wiring ranges from targeted partial replacement to a complete whole-house rewire. The right approach depends on the extent of remaining K&amp;T, the home&apos;s construction, budget, and the homeowner&apos;s goals.
              </p>

              <div className="space-y-4 my-6">
                <div className="bg-white/5 rounded-xl p-6">
                  <h3 className="font-semibold text-green-400 mb-2">Option 1: Complete Rewire</h3>
                  <p className="text-white/70 text-sm mb-3">
                    The most thorough approach. All K&amp;T wiring is removed and replaced with modern NM cable (Romex) or conduit wiring. Includes a new service panel and all new circuits.
                  </p>
                  <ul className="text-white/70 text-sm space-y-1">
                    <li>&#x2022; <strong>Cost:</strong> $8,000-$25,000+ depending on home size and access</li>
                    <li>&#x2022; <strong>Pros:</strong> Eliminates all K&amp;T, adds grounding, modern protection (GFCI/AFCI), solves insurance issues</li>
                    <li>&#x2022; <strong>Cons:</strong> Most expensive option, requires significant wall/ceiling access</li>
                    <li>&#x2022; <strong>Best for:</strong> Major renovations, homes where most wiring is K&amp;T</li>
                  </ul>
                </div>
                <div className="bg-white/5 rounded-xl p-6">
                  <h3 className="font-semibold text-cyan-400 mb-2">Option 2: Partial Rewire (Targeted Replacement)</h3>
                  <p className="text-white/70 text-sm mb-3">
                    Replace K&amp;T in the most critical areas while leaving inaccessible runs that are in good condition. Focus on high-use circuits, insulation contact areas, and deteriorated sections.
                  </p>
                  <ul className="text-white/70 text-sm space-y-1">
                    <li>&#x2022; <strong>Cost:</strong> $4,000-$12,000 depending on scope</li>
                    <li>&#x2022; <strong>Pros:</strong> Lower cost, less invasive, addresses worst hazards first</li>
                    <li>&#x2022; <strong>Cons:</strong> K&amp;T still present in some areas, may not satisfy all insurers</li>
                    <li>&#x2022; <strong>Best for:</strong> Budget-conscious homeowners, homes with limited K&amp;T remaining</li>
                  </ul>
                </div>
                <div className="bg-white/5 rounded-xl p-6">
                  <h3 className="font-semibold text-orange-400 mb-2">Option 3: Decommission &amp; Abandon in Place</h3>
                  <p className="text-white/70 text-sm mb-3">
                    New circuits are installed alongside the old K&amp;T wiring, and the K&amp;T circuits are disconnected from the panel and left in the walls. The old wires are rendered permanently dead.
                  </p>
                  <ul className="text-white/70 text-sm space-y-1">
                    <li>&#x2022; <strong>Cost:</strong> $6,000-$18,000 (new wiring still needed)</li>
                    <li>&#x2022; <strong>Pros:</strong> No need to remove old wiring from inaccessible locations</li>
                    <li>&#x2022; <strong>Cons:</strong> Old wiring remains in walls, some insurers still have concerns</li>
                    <li>&#x2022; <strong>Best for:</strong> Homes where physical removal is impractical</li>
                  </ul>
                </div>
              </div>
            </section>

            <section id="cost-considerations" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Cost Considerations</h2>
              <p className="text-white/80 mb-4">
                The cost of K&amp;T replacement varies widely based on several factors. Here&apos;s what drives the price:
              </p>

              <div className="overflow-x-auto my-6">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-white/20">
                      <th className="text-left py-3 px-4 text-white/60">Factor</th>
                      <th className="text-left py-3 px-4 text-white/60">Impact on Cost</th>
                      <th className="text-left py-3 px-4 text-white/60">Details</th>
                    </tr>
                  </thead>
                  <tbody className="text-white/70">
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-semibold">Home size</td>
                      <td className="py-3 px-4">Major</td>
                      <td className="py-3 px-4">Larger homes = more wire runs, more openings, more labor</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-semibold">Accessibility</td>
                      <td className="py-3 px-4">Major</td>
                      <td className="py-3 px-4">Open basements and accessible attics reduce costs significantly</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-semibold">Wall/ceiling finish</td>
                      <td className="py-3 px-4">Significant</td>
                      <td className="py-3 px-4">Plaster walls are harder and more expensive to fish wire through</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-semibold">Number of stories</td>
                      <td className="py-3 px-4">Moderate</td>
                      <td className="py-3 px-4">Multi-story homes require more vertical wire runs</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-semibold">Scope of upgrade</td>
                      <td className="py-3 px-4">Moderate</td>
                      <td className="py-3 px-4">Adding circuits beyond K&amp;T replacement increases cost</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-semibold">Permit &amp; inspection</td>
                      <td className="py-3 px-4">Minor</td>
                      <td className="py-3 px-4">Typically $200-$500 depending on jurisdiction</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="bg-green-900/30 rounded-xl p-6 my-6">
                <h3 className="font-semibold text-green-400 mb-3">Tips for Homeowners</h3>
                <ul className="space-y-2 text-white/70 text-sm">
                  <li>&#x2022; <strong>Get multiple bids</strong> &mdash; Rewiring costs vary significantly between contractors</li>
                  <li>&#x2022; <strong>Combine with renovations</strong> &mdash; If walls are already open for remodeling, add rewiring to the scope</li>
                  <li>&#x2022; <strong>Ask about phased approach</strong> &mdash; Some electricians will rewire in stages to spread the cost</li>
                  <li>&#x2022; <strong>Check for incentives</strong> &mdash; Some municipalities and utilities offer rebates for electrical upgrades</li>
                  <li>&#x2022; <strong>Factor in insurance savings</strong> &mdash; Lower premiums after rewiring can offset part of the cost over time</li>
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
                <Link href="/blog/whole-house-rewiring-guide" className="bg-white/5 hover:bg-white/10 rounded-xl p-6 transition-colors">
                  <span className="text-red-400 text-sm">Troubleshooting</span>
                  <h3 className="font-semibold mt-2">Whole-House Rewiring Guide</h3>
                </Link>
                <Link href="/blog/electrical-inspection-checklist" className="bg-white/5 hover:bg-white/10 rounded-xl p-6 transition-colors">
                  <span className="text-green-400 text-sm">Inspections</span>
                  <h3 className="font-semibold mt-2">Electrical Inspection Checklist</h3>
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
