import { Metadata } from "next";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import { BreadcrumbJsonLd, BlogPostingJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "NEC Article 334: Romex NM Cable Guide - Uses, Limitations & Installation",
  description: "Complete guide to NEC Article 334 covering NM-B (Romex) nonmetallic-sheathed cable. Learn where NM cable is permitted and not permitted, securing and support requirements, bending radius, through studs and joists, and temperature ratings.",
  keywords: [
    "NEC Article 334",
    "Romex cable",
    "NM-B cable",
    "nonmetallic sheathed cable",
    "Romex installation",
    "NM cable uses permitted",
    "NM cable not permitted",
    "securing NM cable",
    "Romex through studs",
    "Romex bending radius",
    "NM cable temperature rating",
    "Romex support requirements",
    "residential wiring cable",
    "NM cable limitations",
    "Romex in walls",
    "NM cable exposed"
  ],
  alternates: {
    canonical: "https://amporalabs.com/blog/nec-article-334-romex-nm-cable",
  },
  openGraph: {
    title: "NEC Article 334: Romex NM Cable Guide - Ampora",
    description: "Complete guide to NM-B cable installation per NEC Article 334 with uses, limitations, and code requirements.",
    url: "https://amporalabs.com/blog/nec-article-334-romex-nm-cable",
    type: "article",
  },
};

function HeroIllustration() {
  return (
    <svg viewBox="0 0 400 160" className="w-full h-40 md:h-48" aria-label="NM-B Romex cable cross-section and installation illustration">
      {/* Cable cross-section */}
      <g transform="translate(60, 30)">
        {/* Outer sheath */}
        <ellipse cx="50" cy="40" rx="50" ry="35" fill="#374151" stroke="#6b7280" strokeWidth="2"/>
        <text x="50" y="0" textAnchor="middle" fill="#9ca3af" fontSize="8">NM-B Cable Cross Section</text>

        {/* Individual conductors */}
        <circle cx="30" cy="32" r="10" fill="#111827" stroke="#3b82f6" strokeWidth="2"/>
        <circle cx="30" cy="32" r="5" fill="#b87333"/>
        <text x="30" y="58" textAnchor="middle" fill="#3b82f6" fontSize="6">Hot</text>

        <circle cx="70" cy="32" r="10" fill="#111827" stroke="#e5e7eb" strokeWidth="2"/>
        <circle cx="70" cy="32" r="5" fill="#b87333"/>
        <text x="70" y="58" textAnchor="middle" fill="#e5e7eb" fontSize="6">Neutral</text>

        <circle cx="50" cy="48" r="6" fill="none" stroke="#22c55e" strokeWidth="2"/>
        <circle cx="50" cy="48" r="3" fill="#b87333"/>
        <text x="50" y="72" textAnchor="middle" fill="#22c55e" fontSize="6">Ground</text>
      </g>

      {/* Stud installation */}
      <g transform="translate(200, 10)">
        {/* Studs */}
        <rect x="0" y="0" width="20" height="140" fill="#92400e" stroke="#78350f" strokeWidth="1"/>
        <rect x="120" y="0" width="20" height="140" fill="#92400e" stroke="#78350f" strokeWidth="1"/>

        {/* Cable running through */}
        <line x1="10" y1="50" x2="130" y2="50" stroke="#6b7280" strokeWidth="6"/>
        <line x1="10" y1="50" x2="130" y2="50" stroke="#374151" strokeWidth="4"/>

        {/* Nail plate */}
        <rect x="14" y="42" width="12" height="16" fill="#9ca3af" stroke="#6b7280" strokeWidth="1"/>
        <text x="20" y="75" textAnchor="middle" fill="#f59e0b" fontSize="6">Nail plate</text>

        {/* Hole through stud */}
        <circle cx="10" cy="50" r="6" fill="#1f2937"/>
        <circle cx="130" cy="50" r="6" fill="#1f2937"/>

        {/* Staple */}
        <path d="M 55 44 L 55 38 L 85 38 L 85 44" stroke="#9ca3af" strokeWidth="2" fill="none"/>
        <text x="70" y="34" textAnchor="middle" fill="#9ca3af" fontSize="6">Staple</text>

        {/* Dimensions */}
        <text x="70" y="105" textAnchor="middle" fill="#a78bfa" fontSize="7" fontWeight="bold">12&quot; from box</text>
        <text x="70" y="118" textAnchor="middle" fill="#a78bfa" fontSize="7" fontWeight="bold">4.5&apos; max spacing</text>

        <text x="70" y="138" textAnchor="middle" fill="#9ca3af" fontSize="7">Through Stud Installation</text>
      </g>
    </svg>
  );
}

export default function NECArticle334Page() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navigation />
      <div className="pt-20">
        <BreadcrumbJsonLd
          items={[
            { name: "Home", url: "https://amporalabs.com" },
            { name: "Blog", url: "https://amporalabs.com/blog" },
            { name: "NEC Article 334: Romex NM Cable", url: "https://amporalabs.com/blog/nec-article-334-romex-nm-cable" },
          ]}
        />
        <BlogPostingJsonLd
          headline="NEC Article 334: Romex NM Cable Guide - Uses, Limitations & Installation"
          description="Complete guide to NM-B nonmetallic-sheathed cable installation per NEC Article 334 including uses, limitations, securing, and temperature ratings."
          datePublished="2025-02-08"
          dateModified="2025-02-08"
          url="https://amporalabs.com/blog/nec-article-334-romex-nm-cable"
          wordCount={3000}
          keywords={["NEC Article 334", "Romex", "NM-B cable", "NM cable installation", "nonmetallic sheathed cable"]}
        />

        <article className="max-w-4xl mx-auto px-6 py-12">
          {/* Breadcrumb */}
          <nav className="text-sm text-white/60 mb-8">
            <Link href="/" className="hover:text-white">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/blog" className="hover:text-white">Blog</Link>
            <span className="mx-2">/</span>
            <span className="text-white">NEC Article 334: Romex NM Cable</span>
          </nav>

          {/* Article Header */}
          <header className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <span className="px-3 py-1 bg-purple-600/30 text-purple-300 text-sm font-medium rounded-full">
                NEC Code
              </span>
              <span className="text-white/40 text-sm">12 min read</span>
              <span className="text-white/40 text-sm">February 8, 2025</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6 leading-tight">
              NEC Article 334: Romex NM Cable Guide - Uses, Limitations &amp; Installation
            </h1>
            <p className="text-xl text-white/70">
              NM-B cable (commonly called Romex) is the most widely used wiring method in residential construction. Understanding NEC Article 334 is essential for every residential electrician.
            </p>
          </header>

          <div className="mb-12 bg-gradient-to-br from-purple-900/20 to-blue-900/20 rounded-2xl p-6 border border-white/10">
            <HeroIllustration />
          </div>

          {/* Table of Contents */}
          <div className="bg-white/5 rounded-2xl p-6 mb-12">
            <h2 className="font-display font-bold mb-4">In This Guide</h2>
            <ul className="space-y-2 text-white/70">
              <li><a href="#nm-types" className="hover:text-purple-400">&#8594; NM Cable Types &amp; Construction</a></li>
              <li><a href="#uses-permitted" className="hover:text-purple-400">&#8594; Where NM Cable Is Permitted (334.10)</a></li>
              <li><a href="#uses-not-permitted" className="hover:text-purple-400">&#8594; Where NM Cable Is NOT Permitted (334.12)</a></li>
              <li><a href="#securing-support" className="hover:text-purple-400">&#8594; Securing &amp; Support Requirements (334.30)</a></li>
              <li><a href="#bending-radius" className="hover:text-purple-400">&#8594; Bending Radius Requirements</a></li>
              <li><a href="#through-framing" className="hover:text-purple-400">&#8594; Through Studs, Joists &amp; Rafters (334.17)</a></li>
              <li><a href="#temperature-ratings" className="hover:text-purple-400">&#8594; Temperature Ratings &amp; Ampacity</a></li>
              <li><a href="#common-violations" className="hover:text-purple-400">&#8594; Common Code Violations</a></li>
            </ul>
          </div>

          {/* Article Content */}
          <div className="prose prose-invert prose-lg max-w-none">

            <section id="nm-types" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">NM Cable Types &amp; Construction</h2>
              <p className="text-white/80 mb-4">
                Nonmetallic-sheathed cable (NM) consists of two or more insulated conductors and an equipment grounding conductor enclosed within an overall nonmetallic jacket. The &quot;NM&quot; designation stands for nonmetallic, referring to the outer sheath material.
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-3">Cable Designations</h3>
              <div className="overflow-x-auto my-6">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-white/20">
                      <th className="text-left py-3 px-4 text-white/60">Type</th>
                      <th className="text-left py-3 px-4 text-white/60">Outer Jacket</th>
                      <th className="text-left py-3 px-4 text-white/60">Temperature Rating</th>
                      <th className="text-left py-3 px-4 text-white/60">Typical Use</th>
                    </tr>
                  </thead>
                  <tbody className="text-white/80">
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-semibold">NM-B</td>
                      <td className="py-3 px-4">PVC jacket, rated 90&deg;C conductors</td>
                      <td className="py-3 px-4">90&deg;C (but limited to 60&deg;C ampacity)</td>
                      <td className="py-3 px-4">Standard residential, dry locations</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-semibold">NMC-B</td>
                      <td className="py-3 px-4">Corrosion-resistant jacket</td>
                      <td className="py-3 px-4">90&deg;C (limited to 60&deg;C ampacity)</td>
                      <td className="py-3 px-4">Damp or corrosive locations</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-semibold">NMS</td>
                      <td className="py-3 px-4">Includes signal/data conductors</td>
                      <td className="py-3 px-4">90&deg;C (limited to 60&deg;C ampacity)</td>
                      <td className="py-3 px-4">Power + communications combined</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="bg-purple-900/30 rounded-xl p-6 my-6">
                <h3 className="font-semibold text-purple-400 mb-2">Understanding the &quot;-B&quot; Suffix</h3>
                <p className="text-white/70">
                  The &quot;-B&quot; in NM-B indicates the cable meets the 2002 NEC and later requirements for 90&deg;C rated conductors. Older &quot;NM&quot; cable without the B suffix used 60&deg;C insulation. All NM cable manufactured today is NM-B. Despite the 90&deg;C insulation rating on the individual conductors, NEC 334.80 limits the ampacity of NM cable to the 60&deg;C column of Table 310.16 unless the cable is subject to ambient temperatures above 30&deg;C, in which case the 90&deg;C rating is used only for temperature correction calculations.
                </p>
              </div>

              <h3 className="text-xl font-semibold mt-6 mb-3">Common NM-B Cable Sizes</h3>
              <div className="overflow-x-auto my-6">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-white/20">
                      <th className="text-left py-3 px-4 text-white/60">Cable</th>
                      <th className="text-left py-3 px-4 text-white/60">Conductors</th>
                      <th className="text-left py-3 px-4 text-white/60">Ampacity (60&deg;C)</th>
                      <th className="text-left py-3 px-4 text-white/60">Typical Use</th>
                    </tr>
                  </thead>
                  <tbody className="text-white/80">
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">14/2 NM-B</td>
                      <td className="py-3 px-4">2 #14 + ground</td>
                      <td className="py-3 px-4">15A</td>
                      <td className="py-3 px-4">General lighting</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">12/2 NM-B</td>
                      <td className="py-3 px-4">2 #12 + ground</td>
                      <td className="py-3 px-4">20A</td>
                      <td className="py-3 px-4">Receptacles, kitchen, bath</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">10/2 NM-B</td>
                      <td className="py-3 px-4">2 #10 + ground</td>
                      <td className="py-3 px-4">30A</td>
                      <td className="py-3 px-4">Dryer, water heater</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">10/3 NM-B</td>
                      <td className="py-3 px-4">3 #10 + ground</td>
                      <td className="py-3 px-4">30A</td>
                      <td className="py-3 px-4">Electric dryer (with neutral)</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4">6/3 NM-B</td>
                      <td className="py-3 px-4">3 #6 + ground</td>
                      <td className="py-3 px-4">55A</td>
                      <td className="py-3 px-4">Range, cooktop</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section id="uses-permitted" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Where NM Cable Is Permitted (334.10)</h2>
              <p className="text-white/80 mb-4">
                NEC 334.10 lists the locations and building types where NM cable may be used. The key provisions include:
              </p>
              <div className="bg-green-900/30 rounded-xl p-6 my-6">
                <h3 className="font-semibold text-green-400 mb-2">Permitted Uses</h3>
                <ul className="text-white/70 text-sm space-y-1">
                  <li>&bull; <strong>One- and two-family dwellings</strong> and their garages and accessory buildings</li>
                  <li>&bull; <strong>Multifamily dwellings</strong> permitted by the building code (typically Types III, IV, and V construction)</li>
                  <li>&bull; <strong>Other structures</strong> permitted by the building code (not exceeding three floors above grade)</li>
                  <li>&bull; Cable trays in structures where NM is permitted</li>
                  <li>&bull; Concealed or exposed installations in normally dry locations</li>
                  <li>&bull; To be fished in the air voids of masonry block or tile walls (dry locations)</li>
                </ul>
              </div>
            </section>

            <section id="uses-not-permitted" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Where NM Cable Is NOT Permitted (334.12)</h2>
              <p className="text-white/80 mb-4">
                NEC 334.12 strictly prohibits NM cable in several locations. These restrictions are among the most commonly tested on licensing exams and the most frequently violated in the field.
              </p>
              <div className="bg-orange-900/30 rounded-xl p-6 my-6">
                <h3 className="font-semibold text-orange-400 mb-2">Prohibited Uses - Do NOT Install NM Cable:</h3>
                <ul className="text-white/70 text-sm space-y-1">
                  <li>&bull; <strong>As service entrance cable</strong></li>
                  <li>&bull; <strong>In commercial garages</strong> with hazardous locations</li>
                  <li>&bull; <strong>In theaters, assembly halls,</strong> or similar locations (except as allowed in Article 518)</li>
                  <li>&bull; <strong>In motion picture studios</strong></li>
                  <li>&bull; <strong>In storage battery rooms</strong></li>
                  <li>&bull; <strong>In hoistways or on elevators</strong></li>
                  <li>&bull; <strong>Embedded in poured concrete or aggregate</strong></li>
                  <li>&bull; <strong>In wet or damp locations</strong> (use NMC or UF cable instead)</li>
                  <li>&bull; <strong>In any hazardous (classified) location</strong> per Articles 500-516</li>
                  <li>&bull; <strong>Exposed in dropped or suspended ceilings</strong> in other than one- and two-family and multifamily dwellings</li>
                </ul>
              </div>

              <div className="bg-cyan-900/30 rounded-xl p-6 my-6">
                <h3 className="font-semibold text-cyan-400 mb-2">Important Clarification: Exposed vs Concealed</h3>
                <p className="text-white/70">
                  NM cable can be installed exposed (visible) in normally dry locations, but it must be protected from physical damage. When run across the face of studs or joists in unfinished areas like basements, it should follow the building surface. When it would be subject to physical damage, it must be protected by a raceway, guard strip, or other approved means.
                </p>
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
                  <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/></svg>
                  Download Free
                </a>
              </div>
            </div>

            <section id="securing-support" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Securing &amp; Support Requirements (334.30)</h2>
              <p className="text-white/80 mb-4">
                NEC 334.30 establishes specific requirements for how NM cable must be secured and supported. These rules ensure the cable stays in place, maintains its integrity, and remains accessible for future maintenance.
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-3">Key Support Rules</h3>
              <div className="space-y-4 my-6">
                <div className="bg-white/5 rounded-xl p-4">
                  <h4 className="font-semibold text-white">Within 12 Inches of Every Box</h4>
                  <p className="text-white/60 text-sm mt-1">NM cable must be secured within 300mm (12 inches) of every outlet box, junction box, cabinet, or fitting. Measure from the point where the cable enters the box or connector.</p>
                </div>
                <div className="bg-white/5 rounded-xl p-4">
                  <h4 className="font-semibold text-white">Every 4.5 Feet Along Runs</h4>
                  <p className="text-white/60 text-sm mt-1">Support NM cable at intervals not exceeding 1.4m (4.5 feet) along the entire run. Use approved cable staples, straps, or other listed means.</p>
                </div>
                <div className="bg-white/5 rounded-xl p-4">
                  <h4 className="font-semibold text-white">Single Staple for Each Cable</h4>
                  <p className="text-white/60 text-sm mt-1">NM cable must not be stapled on edge. Use the correct size staple for the cable diameter. Do not over-drive staples - this can damage the outer jacket and the conductors inside.</p>
                </div>
                <div className="bg-white/5 rounded-xl p-4">
                  <h4 className="font-semibold text-white">Exception for Concealed Work</h4>
                  <p className="text-white/60 text-sm mt-1">Where NM cable is fished into finished walls, ceilings, or floors, it is not required to be secured. This exception applies to renovation and retrofit work where access to the framing is not available.</p>
                </div>
              </div>

              <div className="bg-purple-900/30 rounded-xl p-6 my-6">
                <h3 className="font-semibold text-purple-400 mb-2">Stacking Cables</h3>
                <p className="text-white/70">
                  When multiple NM cables run parallel through the same area, do not stack them on top of each other under a single staple unless using a stacker-type staple rated for multiple cables. Bundling cables together increases heat buildup and may require derating per NEC 310.15(C). Many inspectors look for this violation specifically.
                </p>
              </div>
            </section>

            <section id="bending-radius" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Bending Radius Requirements</h2>
              <p className="text-white/80 mb-4">
                NEC 334.24 references NEC 300.34 for bending requirements. For NM cable, the minimum bending radius is <strong>5 times the cable diameter</strong>. This means the inside edge of the bend must not be tighter than 5 times the overall cable diameter.
              </p>

              <div className="overflow-x-auto my-6">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-white/20">
                      <th className="text-left py-3 px-4 text-white/60">Cable Size</th>
                      <th className="text-left py-3 px-4 text-white/60">Approx. Diameter</th>
                      <th className="text-left py-3 px-4 text-white/60">Min. Bend Radius (5x)</th>
                    </tr>
                  </thead>
                  <tbody className="text-white/80">
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">14/2 NM-B</td>
                      <td className="py-3 px-4">0.44&quot;</td>
                      <td className="py-3 px-4">2.2&quot;</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">12/2 NM-B</td>
                      <td className="py-3 px-4">0.49&quot;</td>
                      <td className="py-3 px-4">2.45&quot;</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">10/2 NM-B</td>
                      <td className="py-3 px-4">0.55&quot;</td>
                      <td className="py-3 px-4">2.75&quot;</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4">6/3 NM-B</td>
                      <td className="py-3 px-4">0.98&quot;</td>
                      <td className="py-3 px-4">4.9&quot;</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-white/80">
                Sharp bends damage the conductors inside the cable and can crack the outer jacket. This is especially important around corners and where cable enters boxes. Take care to make gentle bends and avoid kinking.
              </p>
            </section>

            <section id="through-framing" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Through Studs, Joists &amp; Rafters (334.17)</h2>
              <p className="text-white/80 mb-4">
                When NM cable passes through wood framing members, it must be protected from physical damage (particularly from nails and screws driven during drywall and trim installation). NEC 300.4 provides the specific requirements.
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-3">Holes Through Studs</h3>
              <div className="bg-white/5 rounded-xl p-6 my-6">
                <ul className="text-white/70 text-sm space-y-2">
                  <li>&bull; <strong>1-1/4&quot; minimum clearance:</strong> The edge of the hole must be at least 1-1/4&quot; from the nearest edge of the stud (NEC 300.4(A)(1))</li>
                  <li>&bull; <strong>If less than 1-1/4&quot;:</strong> A steel nail plate at least 1/16&quot; thick must be installed to protect the cable</li>
                  <li>&bull; <strong>Hole size:</strong> Should not exceed 40% of the stud width to maintain structural integrity (per building code)</li>
                  <li>&bull; <strong>Centered is best:</strong> Drill holes in the center of the stud whenever possible</li>
                </ul>
              </div>

              <h3 className="text-xl font-semibold mt-6 mb-3">Notches in Studs</h3>
              <div className="bg-orange-900/30 rounded-xl p-6 my-6">
                <h3 className="font-semibold text-orange-400 mb-2">Avoid Notching When Possible</h3>
                <p className="text-white/70">
                  While the NEC allows cable in notches with a nail plate installed, notching weakens the stud structurally. Drilling holes is always preferred. When notching is unavoidable, use a 1/16&quot; steel nail plate and verify that notch depth does not exceed building code limits (typically 25% of stud depth for bearing walls, 40% for non-bearing walls).
                </p>
              </div>

              <h3 className="text-xl font-semibold mt-6 mb-3">Through Joists and Rafters</h3>
              <p className="text-white/80 mb-4">
                The same 1-1/4&quot; clearance rule applies when NM cable passes through joists and rafters. When running cable along the face of joists in an unfinished basement, NM cable may be attached directly to the bottom of the joists. When run at angles to the joists, the cable must be run through bored holes or on running boards.
              </p>
            </section>

            <section id="temperature-ratings" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Temperature Ratings &amp; Ampacity</h2>
              <p className="text-white/80 mb-4">
                The temperature rating of NM-B cable is one of the most commonly misunderstood aspects. While the individual conductors inside NM-B cable are rated at 90&deg;C, NEC 334.80 provides a critical limitation.
              </p>

              <div className="bg-cyan-900/30 rounded-xl p-6 my-6">
                <h3 className="font-semibold text-cyan-400 mb-2">NEC 334.80 - The 60&deg;C Rule</h3>
                <p className="text-white/70">
                  &quot;The ampacity of Types NM, NMC, and NMS cable shall be determined in accordance with 310.15. The allowable ampacity shall not exceed that of a 60&deg;C rated conductor.&quot; This means you must use the 60&deg;C column of Table 310.16 for NM cable ampacity, even though the wire inside is rated 90&deg;C. The 90&deg;C rating may only be used for applying ambient temperature correction factors.
                </p>
              </div>

              <h3 className="text-xl font-semibold mt-6 mb-3">Practical Impact</h3>
              <div className="overflow-x-auto my-6">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-white/20">
                      <th className="text-left py-3 px-4 text-white/60">Wire Size</th>
                      <th className="text-left py-3 px-4 text-white/60">60&deg;C Ampacity (NM cable limit)</th>
                      <th className="text-left py-3 px-4 text-white/60">90&deg;C Ampacity (conductor only)</th>
                    </tr>
                  </thead>
                  <tbody className="text-white/80">
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">#14</td>
                      <td className="py-3 px-4 text-green-400">15A</td>
                      <td className="py-3 px-4 text-white/40">25A</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">#12</td>
                      <td className="py-3 px-4 text-green-400">20A</td>
                      <td className="py-3 px-4 text-white/40">30A</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">#10</td>
                      <td className="py-3 px-4 text-green-400">30A</td>
                      <td className="py-3 px-4 text-white/40">40A</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4">#6</td>
                      <td className="py-3 px-4 text-green-400">55A</td>
                      <td className="py-3 px-4 text-white/40">75A</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-white/60 text-sm">
                The green values are the maximum ampacity you can use for NM cable in normal conditions.
              </p>
            </section>

            <section id="common-violations" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Common Code Violations</h2>
              <p className="text-white/80 mb-4">
                These are violations that inspectors frequently find on job sites. Avoid these to pass inspections and maintain safe installations.
              </p>
              <div className="space-y-4 my-6">
                <div className="bg-white/5 rounded-xl p-4">
                  <h4 className="font-semibold text-white">Missing nail plates</h4>
                  <p className="text-white/60 text-sm mt-1">Holes or notches within 1-1/4&quot; of the stud edge without a protective steel plate. This is the single most common NM cable violation found during rough-in inspections.</p>
                </div>
                <div className="bg-white/5 rounded-xl p-4">
                  <h4 className="font-semibold text-white">Cable not secured within 12&quot; of box</h4>
                  <p className="text-white/60 text-sm mt-1">NM cable must be stapled or otherwise secured within 12 inches of every outlet box, junction box, or fitting.</p>
                </div>
                <div className="bg-white/5 rounded-xl p-4">
                  <h4 className="font-semibold text-white">NM cable in wet or damp locations</h4>
                  <p className="text-white/60 text-sm mt-1">NM cable running through exterior walls, unfinished below-grade areas, or other damp locations. Use UF cable or run NM in a raceway.</p>
                </div>
                <div className="bg-white/5 rounded-xl p-4">
                  <h4 className="font-semibold text-white">Over-driven staples</h4>
                  <p className="text-white/60 text-sm mt-1">Staples driven too tight that crush the cable jacket. This damages insulation and can create a short circuit over time. The staple should be snug but not compress the cable.</p>
                </div>
                <div className="bg-white/5 rounded-xl p-4">
                  <h4 className="font-semibold text-white">Cable not protected from physical damage</h4>
                  <p className="text-white/60 text-sm mt-1">NM cable run exposed where it is subject to damage (across floor surfaces, through unprotected holes in metal framing, etc.) without adequate protection.</p>
                </div>
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
                <Link href="/blog/wire-sizing-guide-nec-ampacity-tables" className="bg-white/5 hover:bg-white/10 rounded-xl p-6 transition-colors">
                  <span className="text-amber-400 text-sm">Calculations</span>
                  <h3 className="font-semibold mt-2">Wire Sizing Guide: NEC Ampacity Tables</h3>
                </Link>
                <Link href="/blog/thhn-vs-thwn-wire-differences" className="bg-white/5 hover:bg-white/10 rounded-xl p-6 transition-colors">
                  <span className="text-orange-400 text-sm">Materials</span>
                  <h3 className="font-semibold mt-2">THHN vs THWN Wire: Key Differences Explained</h3>
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
