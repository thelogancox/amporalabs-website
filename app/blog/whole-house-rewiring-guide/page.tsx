import { Metadata } from "next";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import { BreadcrumbJsonLd, BlogPostingJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Whole House Rewiring Guide: When to Rewire, Process & What to Expect",
  description: "Complete guide to whole house rewiring covering when a home needs rewiring, old wiring types to watch for, the rewiring process step by step, permits and inspections, living during a rewire, and typical circuit layouts for modern homes.",
  keywords: [
    "whole house rewiring",
    "house rewiring guide",
    "when to rewire house",
    "home rewiring process",
    "knob and tube wiring",
    "old house wiring",
    "rewiring cost",
    "rewiring permits",
    "electrical rewire steps",
    "rewire old home",
    "residential rewiring",
    "living during rewire",
    "modern circuit layout",
    "aluminum wiring replacement",
    "cloth wiring replacement",
    "home electrical upgrade"
  ],
  alternates: {
    canonical: "https://amporalabs.com/blog/whole-house-rewiring-guide",
  },
  openGraph: {
    title: "Whole House Rewiring Guide - Ampora",
    description: "Complete guide to whole house rewiring with process steps, old wiring identification, permits, and modern circuit requirements.",
    url: "https://amporalabs.com/blog/whole-house-rewiring-guide",
    type: "article",
  },
};

function HeroIllustration() {
  return (
    <svg viewBox="0 0 400 160" className="w-full h-40 md:h-48" aria-label="House rewiring illustration showing old wiring replaced with new">
      {/* House outline */}
      <g transform="translate(100, 5)">
        {/* Roof */}
        <polygon points="100,0 200,40 0,40" fill="#1f2937" stroke="#6b7280" strokeWidth="2"/>
        {/* Walls */}
        <rect x="10" y="40" width="180" height="110" fill="#1f2937" stroke="#6b7280" strokeWidth="2"/>
        {/* Door */}
        <rect x="80" y="90" width="40" height="60" fill="#374151" stroke="#6b7280"/>
        {/* Windows */}
        <rect x="25" y="60" width="35" height="30" fill="#1e3a5f" stroke="#3b82f6"/>
        <rect x="140" y="60" width="35" height="30" fill="#1e3a5f" stroke="#3b82f6"/>

        {/* Old wiring (left side - red/dangerous) */}
        <path d="M 30 55 Q 25 40 40 35 Q 55 30 50 55" stroke="#ef4444" strokeWidth="1.5" fill="none" strokeDasharray="3"/>
        <path d="M 35 95 L 35 55" stroke="#ef4444" strokeWidth="1.5" strokeDasharray="3"/>
        <text x="15" y="105" fill="#ef4444" fontSize="6">OLD</text>

        {/* New wiring (right side - green/safe) */}
        <path d="M 155 55 L 155 40 L 170 40 L 170 55" stroke="#22c55e" strokeWidth="2" fill="none"/>
        <path d="M 160 95 L 160 55" stroke="#22c55e" strokeWidth="2" fill="none"/>
        <text x="170" y="105" fill="#22c55e" fontSize="6">NEW</text>

        {/* Arrow showing replacement */}
        <line x1="70" y1="35" x2="130" y2="35" stroke="#f59e0b" strokeWidth="2" markerEnd="url(#arrowhead)"/>
        <text x="100" y="30" textAnchor="middle" fill="#f59e0b" fontSize="7" fontWeight="bold">REWIRE</text>
      </g>

      {/* Panel upgrade */}
      <g transform="translate(15, 30)">
        {/* Old panel */}
        <rect x="0" y="0" width="40" height="55" rx="3" fill="#374151" stroke="#ef4444" strokeWidth="1.5"/>
        <text x="20" y="15" textAnchor="middle" fill="#ef4444" fontSize="6">60A</text>
        {[0, 1, 2].map((i) => (
          <g key={`old-${i}`}>
            <rect x="8" y={22 + i * 12} width="24" height="8" rx="1" fill="#4b5563"/>
          </g>
        ))}
        <text x="20" y="70" textAnchor="middle" fill="#ef4444" fontSize="6">Old Panel</text>

        {/* Arrow */}
        <line x1="45" y1="28" x2="58" y2="28" stroke="#f59e0b" strokeWidth="2"/>
        <polygon points="58,24 58,32 64,28" fill="#f59e0b"/>
      </g>

      {/* New panel */}
      <g transform="translate(75, 30)">
        <rect x="0" y="0" width="40" height="55" rx="3" fill="#374151" stroke="#22c55e" strokeWidth="1.5"/>
        <text x="20" y="15" textAnchor="middle" fill="#22c55e" fontSize="6">200A</text>
        {[0, 1, 2, 3].map((i) => (
          <g key={`new-${i}`}>
            <rect x="5" y={22 + i * 8} width="12" height="5" rx="1" fill="#4b5563"/>
            <rect x="23" y={22 + i * 8} width="12" height="5" rx="1" fill="#4b5563"/>
          </g>
        ))}
        <text x="20" y="70" textAnchor="middle" fill="#22c55e" fontSize="6">New Panel</text>
      </g>

      {/* Process steps */}
      <g transform="translate(315, 15)">
        <text x="0" y="0" fill="#f59e0b" fontSize="8" fontWeight="bold">Process:</text>
        <text x="0" y="18" fill="#9ca3af" fontSize="7">1. Assessment</text>
        <text x="0" y="33" fill="#9ca3af" fontSize="7">2. Permits</text>
        <text x="0" y="48" fill="#9ca3af" fontSize="7">3. Panel upgrade</text>
        <text x="0" y="63" fill="#9ca3af" fontSize="7">4. Run new circuits</text>
        <text x="0" y="78" fill="#9ca3af" fontSize="7">5. Device install</text>
        <text x="0" y="93" fill="#9ca3af" fontSize="7">6. Inspection</text>
        <text x="0" y="108" fill="#9ca3af" fontSize="7">7. Patch &amp; finish</text>
      </g>

      {/* Arrow marker definition */}
      <defs>
        <marker id="arrowhead" markerWidth="8" markerHeight="8" refX="8" refY="4" orient="auto">
          <path d="M0,0 L0,8 L8,4 z" fill="#f59e0b"/>
        </marker>
      </defs>
    </svg>
  );
}

export default function WholeHouseRewiringPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navigation />
      <div className="pt-20">
        <BreadcrumbJsonLd
          items={[
            { name: "Home", url: "https://amporalabs.com" },
            { name: "Blog", url: "https://amporalabs.com/blog" },
            { name: "Whole House Rewiring Guide", url: "https://amporalabs.com/blog/whole-house-rewiring-guide" },
          ]}
        />
        <BlogPostingJsonLd
          headline="Whole House Rewiring Guide: When to Rewire, Process & What to Expect"
          description="Complete guide to whole house rewiring covering when to rewire, old wiring types, the process, permits, and modern circuit requirements."
          datePublished="2025-02-08"
          dateModified="2025-02-08"
          url="https://amporalabs.com/blog/whole-house-rewiring-guide"
          wordCount={3200}
          keywords={["whole house rewiring", "rewiring process", "old wiring types", "knob and tube", "rewiring permits", "modern circuits"]}
        />

        <article className="max-w-4xl mx-auto px-6 py-12">
          {/* Breadcrumb */}
          <nav className="text-sm text-white/60 mb-8">
            <Link href="/" className="hover:text-white">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/blog" className="hover:text-white">Blog</Link>
            <span className="mx-2">/</span>
            <span className="text-white">Whole House Rewiring Guide</span>
          </nav>

          {/* Article Header */}
          <header className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <span className="px-3 py-1 bg-emerald-600/30 text-emerald-300 text-sm font-medium rounded-full">
                Installation
              </span>
              <span className="text-white/40 text-sm">14 min read</span>
              <span className="text-white/40 text-sm">February 8, 2025</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6 leading-tight">
              Whole House Rewiring Guide: When to Rewire, Process &amp; What to Expect
            </h1>
            <p className="text-xl text-white/70">
              A whole house rewire is one of the largest residential electrical projects. Whether you&apos;re an electrician planning the job or a homeowner preparing for the process, this guide covers everything from assessment to final inspection.
            </p>
          </header>

          <div className="mb-12 bg-gradient-to-br from-emerald-900/20 to-blue-900/20 rounded-2xl p-6 border border-white/10">
            <HeroIllustration />
          </div>

          {/* Table of Contents */}
          <div className="bg-white/5 rounded-2xl p-6 mb-12">
            <h2 className="font-display font-bold mb-4">In This Guide</h2>
            <ul className="space-y-2 text-white/70">
              <li><a href="#signs-you-need" className="hover:text-purple-400">&#8594; Signs Your Home Needs Rewiring</a></li>
              <li><a href="#old-wiring-types" className="hover:text-purple-400">&#8594; Old Wiring Types &amp; Their Risks</a></li>
              <li><a href="#rewiring-process" className="hover:text-purple-400">&#8594; The Rewiring Process Step by Step</a></li>
              <li><a href="#permits-inspections" className="hover:text-purple-400">&#8594; Permits &amp; Inspections</a></li>
              <li><a href="#living-during-rewire" className="hover:text-purple-400">&#8594; Living in the Home During a Rewire</a></li>
              <li><a href="#typical-circuits" className="hover:text-purple-400">&#8594; Typical Circuit Layout for a Modern Home</a></li>
              <li><a href="#cost-factors" className="hover:text-purple-400">&#8594; Cost Factors &amp; Timeline</a></li>
              <li><a href="#code-upgrades" className="hover:text-purple-400">&#8594; Code Upgrades Required During Rewiring</a></li>
            </ul>
          </div>

          {/* Article Content */}
          <div className="prose prose-invert prose-lg max-w-none">

            <section id="signs-you-need" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Signs Your Home Needs Rewiring</h2>
              <p className="text-white/80 mb-4">
                Not every old home needs a complete rewire, but certain warning signs indicate that the existing wiring is unsafe or inadequate. Electricians should assess these factors during initial consultations.
              </p>

              <div className="space-y-4 my-6">
                <div className="bg-white/5 rounded-xl p-4">
                  <h4 className="font-semibold text-white">Frequent breaker trips or blown fuses</h4>
                  <p className="text-white/60 text-sm mt-1">Old wiring systems often have inadequate circuit counts. A 60A fuse panel serving an entire home with only 6-8 circuits cannot handle modern electrical demands. When circuits constantly overload, rewiring adds capacity.</p>
                </div>
                <div className="bg-white/5 rounded-xl p-4">
                  <h4 className="font-semibold text-white">Knob and tube, cloth-wrapped, or aluminum wiring</h4>
                  <p className="text-white/60 text-sm mt-1">These wiring types present specific safety concerns (detailed below). Insurance companies may require replacement for coverage, and many lenders will not finance homes with these wiring types.</p>
                </div>
                <div className="bg-white/5 rounded-xl p-4">
                  <h4 className="font-semibold text-white">Two-prong (ungrounded) outlets throughout</h4>
                  <p className="text-white/60 text-sm mt-1">Indicates the wiring system lacks an equipment grounding conductor. While individual outlets can be replaced with GFCI receptacles for some protection, a full rewire provides proper grounding throughout.</p>
                </div>
                <div className="bg-white/5 rounded-xl p-4">
                  <h4 className="font-semibold text-white">Discolored outlets, warm cover plates, or burning smells</h4>
                  <p className="text-white/60 text-sm mt-1">Active signs of overheating and potential fire hazards. These symptoms require immediate investigation and often indicate systemic wiring problems beyond a single repair.</p>
                </div>
                <div className="bg-white/5 rounded-xl p-4">
                  <h4 className="font-semibold text-white">Major renovation planned</h4>
                  <p className="text-white/60 text-sm mt-1">When walls are opened for a kitchen or bathroom remodel, it&apos;s the most cost-effective time to rewire. Most jurisdictions require bringing affected areas up to current code during renovations, and rewiring during open-wall construction avoids the cost of fishing wires later.</p>
                </div>
              </div>
            </section>

            <section id="old-wiring-types" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Old Wiring Types &amp; Their Risks</h2>
              <p className="text-white/80 mb-4">
                Identifying the existing wiring type is the first step in assessing a rewire job. Each type presents unique challenges and safety considerations.
              </p>

              <div className="overflow-x-auto my-6">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-white/20">
                      <th className="text-left py-3 px-4 text-white/60">Wiring Type</th>
                      <th className="text-left py-3 px-4 text-white/60">Era</th>
                      <th className="text-left py-3 px-4 text-white/60">Key Risks</th>
                      <th className="text-left py-3 px-4 text-white/60">Recommendation</th>
                    </tr>
                  </thead>
                  <tbody className="text-white/80">
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-semibold">Knob &amp; Tube</td>
                      <td className="py-3 px-4">1880s-1940s</td>
                      <td className="py-3 px-4">No ground, brittle insulation, cannot be covered with insulation, fire risk when buried</td>
                      <td className="py-3 px-4 text-red-400">Replace completely</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-semibold">Cloth-wrapped NM</td>
                      <td className="py-3 px-4">1940s-1960s</td>
                      <td className="py-3 px-4">Deteriorating fabric insulation, no ground in early versions, prone to crumbling</td>
                      <td className="py-3 px-4 text-red-400">Replace when accessible</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-semibold">Aluminum (small gauge)</td>
                      <td className="py-3 px-4">1965-1975</td>
                      <td className="py-3 px-4">Oxidation at connections, thermal expansion mismatch, loose connections cause fires</td>
                      <td className="py-3 px-4 text-amber-400">Replace or remediate (COPALUM/AlumiConn)</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-semibold">Early NM (no ground)</td>
                      <td className="py-3 px-4">1950s-1960s</td>
                      <td className="py-3 px-4">No equipment grounding conductor, limited circuit protection</td>
                      <td className="py-3 px-4 text-amber-400">Replace during renovation</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-semibold">NM-B (modern)</td>
                      <td className="py-3 px-4">1980s-present</td>
                      <td className="py-3 px-4">Generally safe if properly installed and not damaged</td>
                      <td className="py-3 px-4 text-green-400">Keep if in good condition</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="bg-orange-900/30 rounded-xl p-6 my-6">
                <h3 className="font-semibold text-orange-400 mb-2">Knob &amp; Tube: Special Concerns</h3>
                <p className="text-white/70">
                  Knob and tube wiring was designed to be air-cooled in open cavities. When blown-in insulation covers this wiring (common during energy efficiency upgrades), it traps heat and creates a serious fire hazard. Most insurance companies will not insure a home with active knob and tube wiring, and many municipalities now require its removal. During a rewire, all knob and tube must be removed or completely disconnected - not just abandoned in place.
                </p>
              </div>
            </section>

            <section id="rewiring-process" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">The Rewiring Process Step by Step</h2>
              <p className="text-white/80 mb-4">
                A whole-house rewire typically follows a structured sequence. Each phase builds on the previous one, and proper planning prevents costly rework.
              </p>

              <div className="space-y-4 my-6">
                <div className="bg-white/5 rounded-xl p-4">
                  <p className="text-emerald-400 font-semibold">Phase 1: Assessment &amp; Planning</p>
                  <p className="text-white/60 text-sm mt-1">Walk through the entire home. Document existing wiring type, panel capacity, circuit count, and outlet locations. Identify the new circuit layout based on the homeowner&apos;s needs and current NEC requirements. Create a detailed scope of work and estimate.</p>
                </div>
                <div className="bg-white/5 rounded-xl p-4">
                  <p className="text-emerald-400 font-semibold">Phase 2: Permits &amp; Utility Coordination</p>
                  <p className="text-white/60 text-sm mt-1">Pull the electrical permit. If a service upgrade is involved, coordinate with the utility company for a temporary disconnect and meter pull. Schedule rough-in and final inspections with the local authority having jurisdiction (AHJ).</p>
                </div>
                <div className="bg-white/5 rounded-xl p-4">
                  <p className="text-emerald-400 font-semibold">Phase 3: Service &amp; Panel Upgrade</p>
                  <p className="text-white/60 text-sm mt-1">Install the new service entrance, meter base, and main panel. Most rewires include an upgrade to a 200A service. Install a temporary power connection if the home will be occupied during the work. This phase requires a utility disconnect.</p>
                </div>
                <div className="bg-white/5 rounded-xl p-4">
                  <p className="text-emerald-400 font-semibold">Phase 4: Rough-In New Wiring</p>
                  <p className="text-white/60 text-sm mt-1">Run all new NM-B cable from the panel to each outlet, switch, and fixture location. Install new outlet and switch boxes. This is the most labor-intensive phase and may require opening walls, ceilings, and floors. Fishing cables through finished walls is a significant part of the skill involved.</p>
                </div>
                <div className="bg-white/5 rounded-xl p-4">
                  <p className="text-emerald-400 font-semibold">Phase 5: Rough-In Inspection</p>
                  <p className="text-white/60 text-sm mt-1">Schedule the rough-in inspection before closing walls. The inspector will verify proper wire sizing, box fill, securing and support, nail plates, GFCI/AFCI locations, and code compliance. Address any corrections before proceeding.</p>
                </div>
                <div className="bg-white/5 rounded-xl p-4">
                  <p className="text-emerald-400 font-semibold">Phase 6: Device Installation &amp; Terminations</p>
                  <p className="text-white/60 text-sm mt-1">Install all receptacles, switches, light fixtures, and cover plates. Make final connections in the panel. Label all circuits clearly in the panel directory. Test every circuit for proper operation, correct polarity, and ground continuity.</p>
                </div>
                <div className="bg-white/5 rounded-xl p-4">
                  <p className="text-emerald-400 font-semibold">Phase 7: Final Inspection &amp; Completion</p>
                  <p className="text-white/60 text-sm mt-1">Schedule the final inspection. The inspector will verify all devices are installed correctly, GFCI protection works, AFCI breakers are functioning, panel is properly labeled, and all code requirements are met. After passing, coordinate drywall patching and painting with the general contractor or homeowner.</p>
                </div>
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

            <section id="permits-inspections" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Permits &amp; Inspections</h2>
              <p className="text-white/80 mb-4">
                A whole house rewire always requires an electrical permit. Working without a permit exposes the electrician to liability, the homeowner to insurance issues, and creates problems when selling the property.
              </p>

              <div className="bg-purple-900/30 rounded-xl p-6 my-6">
                <h3 className="font-semibold text-purple-400 mb-2">What the Inspector Checks</h3>
                <ul className="text-white/70 text-sm space-y-1">
                  <li>&bull; <strong>Rough-in:</strong> Wire routing, securing/support, nail plates, box fill calculations, proper wire sizing, AFCI/GFCI circuit identification</li>
                  <li>&bull; <strong>Service:</strong> Proper grounding and bonding, service entrance conductor sizing, meter base installation, working space clearances</li>
                  <li>&bull; <strong>Final:</strong> Device installation, polarity, ground continuity, GFCI operation, AFCI operation, panel labeling, smoke detector interconnection</li>
                </ul>
              </div>

              <div className="bg-cyan-900/30 rounded-xl p-6 my-6">
                <h3 className="font-semibold text-cyan-400 mb-2">Permit Tips</h3>
                <p className="text-white/70">
                  Many jurisdictions allow a single permit for the entire rewire project, including the service upgrade. Some require separate permits for the service and the interior wiring. Check with your local AHJ before starting work. Provide a complete panel schedule, load calculation, and circuit layout with the permit application to expedite approval.
                </p>
              </div>
            </section>

            <section id="living-during-rewire" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Living in the Home During a Rewire</h2>
              <p className="text-white/80 mb-4">
                Many homeowners need to remain in the home during the rewiring process. This is possible with proper planning, but it requires flexibility from both the electrician and the homeowner.
              </p>

              <div className="bg-green-900/30 rounded-xl p-6 my-6">
                <h3 className="font-semibold text-green-400 mb-2">Making It Work</h3>
                <ul className="text-white/70 text-sm space-y-1">
                  <li>&bull; <strong>Work room by room:</strong> Complete one area before moving to the next, restoring power to each area as you go</li>
                  <li>&bull; <strong>Maintain essential circuits:</strong> Keep the kitchen (refrigerator), at least one bathroom, and one bedroom functional at all times</li>
                  <li>&bull; <strong>Provide temporary power:</strong> Extension cords from live circuits can provide temporary access to essential outlets</li>
                  <li>&bull; <strong>Communicate daily:</strong> Let the homeowner know which rooms will lose power and for how long each day</li>
                  <li>&bull; <strong>Protect the home:</strong> Use drop cloths, seal off work areas with plastic sheeting, and clean up daily</li>
                  <li>&bull; <strong>Plan utility disconnects:</strong> Schedule the service disconnect/reconnect for a single day if possible, ideally during mild weather</li>
                </ul>
              </div>
            </section>

            <section id="typical-circuits" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Typical Circuit Layout for a Modern Home</h2>
              <p className="text-white/80 mb-4">
                A modern rewire should include circuits that meet current NEC requirements and anticipate future electrical needs. Here is a typical circuit layout for a 3-bedroom, 2-bathroom home with a 200A service.
              </p>

              <div className="overflow-x-auto my-6">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-white/20">
                      <th className="text-left py-3 px-4 text-white/60">Circuit</th>
                      <th className="text-left py-3 px-4 text-white/60">Breaker</th>
                      <th className="text-left py-3 px-4 text-white/60">Wire</th>
                      <th className="text-left py-3 px-4 text-white/60">Protection</th>
                    </tr>
                  </thead>
                  <tbody className="text-white/80">
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">Kitchen receptacles (2 circuits)</td>
                      <td className="py-3 px-4">20A</td>
                      <td className="py-3 px-4">12/2 NM-B</td>
                      <td className="py-3 px-4">GFCI + AFCI</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">Dishwasher</td>
                      <td className="py-3 px-4">20A</td>
                      <td className="py-3 px-4">12/2 NM-B</td>
                      <td className="py-3 px-4">GFCI + AFCI</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">Refrigerator</td>
                      <td className="py-3 px-4">20A</td>
                      <td className="py-3 px-4">12/2 NM-B</td>
                      <td className="py-3 px-4">AFCI</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">Microwave/hood</td>
                      <td className="py-3 px-4">20A</td>
                      <td className="py-3 px-4">12/2 NM-B</td>
                      <td className="py-3 px-4">AFCI</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">Bathroom receptacles (each bath)</td>
                      <td className="py-3 px-4">20A</td>
                      <td className="py-3 px-4">12/2 NM-B</td>
                      <td className="py-3 px-4">GFCI + AFCI</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">Laundry receptacle</td>
                      <td className="py-3 px-4">20A</td>
                      <td className="py-3 px-4">12/2 NM-B</td>
                      <td className="py-3 px-4">GFCI + AFCI</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">Bedroom receptacles (each)</td>
                      <td className="py-3 px-4">15A</td>
                      <td className="py-3 px-4">14/2 NM-B</td>
                      <td className="py-3 px-4">AFCI</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">Living/family room receptacles</td>
                      <td className="py-3 px-4">15A</td>
                      <td className="py-3 px-4">14/2 NM-B</td>
                      <td className="py-3 px-4">AFCI</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">General lighting (2-3 circuits)</td>
                      <td className="py-3 px-4">15A</td>
                      <td className="py-3 px-4">14/2 NM-B</td>
                      <td className="py-3 px-4">AFCI</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">Outdoor/garage receptacles</td>
                      <td className="py-3 px-4">20A</td>
                      <td className="py-3 px-4">12/2 NM-B</td>
                      <td className="py-3 px-4">GFCI</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">Range/oven (240V)</td>
                      <td className="py-3 px-4">40-50A</td>
                      <td className="py-3 px-4">6/3 NM-B</td>
                      <td className="py-3 px-4">Standard</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">Dryer (240V)</td>
                      <td className="py-3 px-4">30A</td>
                      <td className="py-3 px-4">10/3 NM-B</td>
                      <td className="py-3 px-4">Standard</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">Water heater (240V)</td>
                      <td className="py-3 px-4">30A</td>
                      <td className="py-3 px-4">10/2 NM-B</td>
                      <td className="py-3 px-4">Standard</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">HVAC (240V)</td>
                      <td className="py-3 px-4">30-60A</td>
                      <td className="py-3 px-4">Per nameplate</td>
                      <td className="py-3 px-4">Standard</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4">Smoke/CO detectors</td>
                      <td className="py-3 px-4">15A</td>
                      <td className="py-3 px-4">14/2 NM-B</td>
                      <td className="py-3 px-4">AFCI</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-white/60 text-sm">
                This layout typically requires 25-35 circuit spaces. A 40-space panel is recommended to allow room for future expansion.
              </p>
            </section>

            <section id="cost-factors" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Cost Factors &amp; Timeline</h2>
              <p className="text-white/80 mb-4">
                The cost of a whole house rewire varies significantly based on the home&apos;s size, construction type, accessibility, and local labor rates. Here are the primary factors that influence pricing.
              </p>

              <div className="space-y-4 my-6">
                <div className="bg-white/5 rounded-xl p-4">
                  <h4 className="font-semibold text-white">Home size and number of circuits</h4>
                  <p className="text-white/60 text-sm mt-1">A larger home requires more cable, more circuits, and more labor. A 1,500 sq ft home typically needs 20-25 circuits; a 3,000 sq ft home may need 35-45 circuits.</p>
                </div>
                <div className="bg-white/5 rounded-xl p-4">
                  <h4 className="font-semibold text-white">Wall access and construction type</h4>
                  <p className="text-white/60 text-sm mt-1">Open-wall construction (during renovation) is significantly less expensive than fishing wires through finished walls. Plaster-and-lath walls are harder to work with than drywall. Multi-story homes require more labor to access upper floors.</p>
                </div>
                <div className="bg-white/5 rounded-xl p-4">
                  <h4 className="font-semibold text-white">Service upgrade</h4>
                  <p className="text-white/60 text-sm mt-1">Most rewires include upgrading from a 60A or 100A service to 200A. This adds material and labor costs plus utility coordination fees.</p>
                </div>
                <div className="bg-white/5 rounded-xl p-4">
                  <h4 className="font-semibold text-white">Patching and finish work</h4>
                  <p className="text-white/60 text-sm mt-1">Unless the rewire coincides with a renovation, drywall patching and painting are needed wherever walls were opened. Some electricians include this; others leave it for a drywall contractor.</p>
                </div>
              </div>

              <div className="bg-green-900/30 rounded-xl p-6 my-6">
                <h3 className="font-semibold text-green-400 mb-2">Typical Timeline</h3>
                <ul className="text-white/70 text-sm space-y-1">
                  <li>&bull; <strong>Small home (under 1,500 sq ft):</strong> 3-5 working days</li>
                  <li>&bull; <strong>Medium home (1,500-2,500 sq ft):</strong> 5-8 working days</li>
                  <li>&bull; <strong>Large home (over 2,500 sq ft):</strong> 8-14 working days</li>
                  <li>&bull; <strong>Add 1-2 days for service upgrade</strong></li>
                  <li>&bull; <strong>Add time for inspection scheduling</strong> (varies by jurisdiction)</li>
                </ul>
              </div>
            </section>

            <section id="code-upgrades" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Code Upgrades Required During Rewiring</h2>
              <p className="text-white/80 mb-4">
                When rewiring a home, the new installation must comply with the current NEC. This means many modern safety features that weren&apos;t required when the home was originally built must now be included.
              </p>

              <div className="bg-purple-900/30 rounded-xl p-6 my-6">
                <h3 className="font-semibold text-purple-400 mb-2">Required Modern Code Features</h3>
                <ul className="text-white/70 text-sm space-y-1">
                  <li>&bull; <strong>AFCI protection:</strong> Required for virtually all 120V 15A and 20A branch circuits in dwelling units (NEC 210.12)</li>
                  <li>&bull; <strong>GFCI protection:</strong> Required for bathrooms, kitchens, laundry, garages, outdoors, basements, and other locations per NEC 210.8</li>
                  <li>&bull; <strong>Tamper-resistant receptacles:</strong> Required in all dwelling unit locations (NEC 406.12)</li>
                  <li>&bull; <strong>Weather-resistant receptacles:</strong> Required for all outdoor locations (NEC 406.9)</li>
                  <li>&bull; <strong>Interconnected smoke alarms:</strong> Required in all bedrooms, outside sleeping areas, and on every level (per building code)</li>
                  <li>&bull; <strong>Dedicated circuits:</strong> Kitchen small appliance, laundry, bathroom, and individual appliance circuits per NEC 210.11</li>
                  <li>&bull; <strong>Equipment grounding:</strong> All circuits must include an equipment grounding conductor</li>
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
                <Link href="/blog/electrical-service-upgrade-200-amp" className="bg-white/5 hover:bg-white/10 rounded-xl p-6 transition-colors">
                  <span className="text-emerald-400 text-sm">Installation</span>
                  <h3 className="font-semibold mt-2">Electrical Service Upgrade to 200 Amp</h3>
                </Link>
                <Link href="/blog/electrical-inspection-checklist" className="bg-white/5 hover:bg-white/10 rounded-xl p-6 transition-colors">
                  <span className="text-green-400 text-sm">Safety</span>
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
