import { Metadata } from "next";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import { BreadcrumbJsonLd, BlogPostingJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Grounding Electrode Systems: Installation & Testing Guide",
  description: "Complete guide to grounding electrode system installation and testing per NEC 250.50-250.70. Learn about ground rods, Ufer grounds, water pipe bonds, GEC sizing, the 25-ohm rule, and ground resistance testing methods.",
  keywords: [
    "grounding electrode system",
    "ground rod installation",
    "Ufer ground",
    "concrete encased electrode",
    "NEC 250.50",
    "ground resistance testing",
    "grounding electrode conductor",
    "25 ohm rule",
    "water pipe grounding",
    "fall of potential test",
  ],
  alternates: {
    canonical: "https://amporalabs.com/blog/grounding-electrode-system-guide",
  },
  openGraph: {
    title: "Grounding Electrode Systems: Installation & Testing Guide - Ampora",
    description: "Complete guide to grounding electrode system installation and testing per NEC 250.50-250.70 for electricians.",
    url: "https://amporalabs.com/blog/grounding-electrode-system-guide",
    type: "article",
    publishedTime: "2025-06-10",
  },
};

function HeroIllustration() {
  return (
    <svg viewBox="0 0 400 200" className="w-full h-48 md:h-56" aria-label="Grounding electrode system showing ground rods, water pipe bond, and Ufer ground">
      {/* Title */}
      <text x="200" y="14" textAnchor="middle" fill="#f87171" fontSize="10" fontWeight="bold">Grounding Electrode System</text>

      {/* Service Panel */}
      <g transform="translate(160, 22)">
        <rect x="0" y="0" width="80" height="60" rx="4" fill="#1f2937" stroke="#f87171" strokeWidth="2"/>
        <rect x="8" y="8" width="64" height="44" fill="#111827"/>
        <rect x="14" y="14" width="22" height="8" rx="1" fill="#8b5cf6"/>
        <rect x="44" y="14" width="22" height="8" rx="1" fill="#8b5cf6"/>
        <rect x="14" y="26" width="22" height="8" rx="1" fill="#374151"/>
        <rect x="44" y="26" width="22" height="8" rx="1" fill="#374151"/>
        <text x="40" y="46" textAnchor="middle" fill="#f87171" fontSize="6">SERVICE PANEL</text>
      </g>

      {/* GEC line from panel down */}
      <line x1="200" y1="82" x2="200" y2="110" stroke="#f87171" strokeWidth="3"/>
      <text x="212" y="100" fill="#f87171" fontSize="7">GEC</text>

      {/* Horizontal bus connecting all electrodes */}
      <line x1="55" y1="110" x2="345" y2="110" stroke="#f87171" strokeWidth="2"/>

      {/* Ground Rod 1 */}
      <g transform="translate(40, 105)">
        <circle cx="15" cy="5" r="5" fill="none" stroke="#f87171" strokeWidth="1.5"/>
        <rect x="12" y="10" width="6" height="65" fill="#b87333" rx="1"/>
        <rect x="5" y="40" width="20" height="40" fill="#8b6914" opacity="0.3" rx="2"/>
        <text x="15" y="88" textAnchor="middle" fill="#9ca3af" fontSize="6">Ground</text>
        <text x="15" y="96" textAnchor="middle" fill="#9ca3af" fontSize="6">Rod #1</text>
      </g>

      {/* Ground Rod 2 */}
      <g transform="translate(100, 105)">
        <circle cx="15" cy="5" r="5" fill="none" stroke="#f87171" strokeWidth="1.5"/>
        <rect x="12" y="10" width="6" height="65" fill="#b87333" rx="1"/>
        <rect x="5" y="40" width="20" height="40" fill="#8b6914" opacity="0.3" rx="2"/>
        <text x="15" y="88" textAnchor="middle" fill="#9ca3af" fontSize="6">Ground</text>
        <text x="15" y="96" textAnchor="middle" fill="#9ca3af" fontSize="6">Rod #2</text>
      </g>

      {/* Spacing indicator between rods */}
      <line x1="55" y1="130" x2="115" y2="130" stroke="#9ca3af" strokeWidth="0.5" strokeDasharray="2,2"/>
      <text x="85" y="128" textAnchor="middle" fill="#9ca3af" fontSize="5">6 ft min</text>

      {/* Water Pipe Electrode */}
      <g transform="translate(160, 115)">
        <rect x="0" y="0" width="80" height="10" rx="5" fill="#6b7280"/>
        <rect x="15" y="2" width="50" height="6" rx="3" fill="#4b5563"/>
        {/* Clamp */}
        <rect x="30" y="-5" width="20" height="8" rx="2" fill="#f87171" opacity="0.6"/>
        <rect x="-10" y="5" width="100" height="25" fill="#8b6914" opacity="0.2" rx="2"/>
        <text x="40" y="42" textAnchor="middle" fill="#9ca3af" fontSize="6">Metal Water</text>
        <text x="40" y="50" textAnchor="middle" fill="#9ca3af" fontSize="6">Pipe (10 ft+)</text>
      </g>

      {/* Ufer / Concrete-Encased Electrode */}
      <g transform="translate(275, 115)">
        {/* Concrete footing */}
        <rect x="0" y="5" width="70" height="35" rx="3" fill="#6b7280" opacity="0.5"/>
        {/* Rebar inside concrete */}
        <line x1="10" y1="15" x2="60" y2="15" stroke="#b87333" strokeWidth="3"/>
        <line x1="10" y1="25" x2="60" y2="25" stroke="#b87333" strokeWidth="3"/>
        <line x1="15" y1="12" x2="15" y2="28" stroke="#b87333" strokeWidth="2"/>
        <line x1="55" y1="12" x2="55" y2="28" stroke="#b87333" strokeWidth="2"/>
        {/* Connection point */}
        <circle cx="35" cy="5" r="4" fill="none" stroke="#f87171" strokeWidth="1.5"/>
        <rect x="-5" y="30" width="80" height="20" fill="#8b6914" opacity="0.2" rx="2"/>
        <text x="35" y="58" textAnchor="middle" fill="#9ca3af" fontSize="6">Ufer Ground</text>
        <text x="35" y="66" textAnchor="middle" fill="#9ca3af" fontSize="6">(Concrete-Encased)</text>
      </g>

      {/* Earth symbols */}
      <g transform="translate(45, 185)">
        <line x1="-10" y1="0" x2="10" y2="0" stroke="#f87171" strokeWidth="1.5"/>
        <line x1="-6" y1="4" x2="6" y2="4" stroke="#f87171" strokeWidth="1.5"/>
        <line x1="-3" y1="8" x2="3" y2="8" stroke="#f87171" strokeWidth="1.5"/>
      </g>
      <g transform="translate(105, 185)">
        <line x1="-10" y1="0" x2="10" y2="0" stroke="#f87171" strokeWidth="1.5"/>
        <line x1="-6" y1="4" x2="6" y2="4" stroke="#f87171" strokeWidth="1.5"/>
        <line x1="-3" y1="8" x2="3" y2="8" stroke="#f87171" strokeWidth="1.5"/>
      </g>
    </svg>
  );
}

export default function GroundingElectrodeSystemGuidePage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navigation />
      <div className="pt-20">
        <BreadcrumbJsonLd
          items={[
            { name: "Home", url: "https://amporalabs.com" },
            { name: "Blog", url: "https://amporalabs.com/blog" },
            { name: "Grounding Electrode System Guide", url: "https://amporalabs.com/blog/grounding-electrode-system-guide" },
          ]}
        />
        <BlogPostingJsonLd
          headline="Grounding Electrode Systems: Installation & Testing Guide"
          description="Complete guide to grounding electrode system installation and testing per NEC 250.50-250.70 for electricians."
          datePublished="2025-06-10"
          dateModified="2025-06-10"
          url="https://amporalabs.com/blog/grounding-electrode-system-guide"
          wordCount={3400}
          keywords={["grounding electrode system", "ground rod installation", "Ufer ground", "NEC 250.50", "ground resistance testing"]}
        />

        <article className="max-w-4xl mx-auto px-6 py-12">
          {/* Breadcrumb */}
          <nav className="text-sm text-white/60 mb-8">
            <Link href="/" className="hover:text-white">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/blog" className="hover:text-white">Blog</Link>
            <span className="mx-2">/</span>
            <span className="text-white">Grounding Electrode System Guide</span>
          </nav>

          {/* Article Header */}
          <header className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <span className="px-3 py-1 bg-red-600/30 text-red-300 text-sm font-medium rounded-full">
                Safety
              </span>
              <span className="text-white/40 text-sm">14 min read</span>
              <span className="text-white/40 text-sm">June 10, 2025</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6 leading-tight">
              Grounding Electrode Systems: Installation & Testing Guide
            </h1>
            <p className="text-xl text-white/70">
              A properly installed grounding electrode system is the foundation of electrical safety. This guide covers every electrode type recognized by the NEC, how to size the grounding electrode conductor, and how to test ground resistance to meet code requirements.
            </p>
          </header>

          <div className="mb-12 bg-gradient-to-br from-red-900/20 to-cyan-900/20 rounded-2xl p-6 border border-white/10">
            <HeroIllustration />
          </div>

          {/* Table of Contents */}
          <div className="bg-white/5 rounded-2xl p-6 mb-12">
            <h2 className="font-display font-bold mb-4">In This Guide</h2>
            <ul className="space-y-2 text-white/70">
              <li><a href="#overview" className="hover:text-red-400">Overview: NEC 250.50-250.70</a></li>
              <li><a href="#electrode-types" className="hover:text-red-400">Types of Grounding Electrodes</a></li>
              <li><a href="#gec-sizing" className="hover:text-red-400">Grounding Electrode Conductor (GEC) Sizing</a></li>
              <li><a href="#supplemental" className="hover:text-red-400">Supplemental Electrode Requirements</a></li>
              <li><a href="#25-ohm-rule" className="hover:text-red-400">The 25-Ohm Rule for Ground Rods</a></li>
              <li><a href="#resistance-testing" className="hover:text-red-400">Ground Resistance Testing Methods</a></li>
              <li><a href="#bonding-jumpers" className="hover:text-red-400">Bonding Jumpers for Water Piping</a></li>
              <li><a href="#intersystem-bonding" className="hover:text-red-400">Intersystem Bonding Termination</a></li>
              <li><a href="#installation-practices" className="hover:text-red-400">Installation Best Practices</a></li>
              <li><a href="#common-mistakes" className="hover:text-red-400">Common Mistakes to Avoid</a></li>
            </ul>
          </div>

          {/* Article Content */}
          <div className="prose prose-invert prose-lg max-w-none">

            <section id="overview" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Overview: NEC 250.50-250.70</h2>
              <p className="text-white/80 mb-4">
                The grounding electrode system establishes a direct connection between the electrical system and the earth. While bonding provides the fault current path that trips breakers, the grounding electrode system serves equally important functions: stabilizing system voltage, providing a reference to earth, dissipating lightning and surge energy, and limiting voltage imposed by contact with higher-voltage lines.
              </p>
              <p className="text-white/80 mb-4">
                NEC Article 250, Part III (250.50 through 250.70) governs the grounding electrode system and grounding electrode conductor. The fundamental rule in 250.50 is straightforward: <strong>all grounding electrodes that are present at a building or structure shall be bonded together</strong> to form the grounding electrode system. You do not get to choose which electrodes to use -- if they exist, they must all be connected.
              </p>

              <div className="bg-red-900/20 border border-red-500/30 rounded-xl p-6 my-6">
                <h3 className="font-semibold text-red-400 mb-2">Key Code Sections</h3>
                <ul className="list-disc list-inside text-white/70 space-y-1">
                  <li><strong>250.50</strong> - Grounding electrode system (all present electrodes must be bonded together)</li>
                  <li><strong>250.52</strong> - Electrodes permitted for grounding (types and specifications)</li>
                  <li><strong>250.53</strong> - Installation requirements for grounding electrodes</li>
                  <li><strong>250.54</strong> - Auxiliary grounding electrodes (supplemental, not a substitute)</li>
                  <li><strong>250.56</strong> - Resistance of rod, pipe, and plate electrodes (25-ohm rule)</li>
                  <li><strong>250.62</strong> - Grounding electrode conductor material</li>
                  <li><strong>250.64</strong> - GEC installation requirements</li>
                  <li><strong>250.66</strong> - GEC sizing (Table 250.66)</li>
                  <li><strong>250.68</strong> - GEC connections and accessibility</li>
                  <li><strong>250.70</strong> - Methods of grounding conductor connection to electrodes</li>
                </ul>
              </div>
            </section>

            <section id="electrode-types" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Types of Grounding Electrodes</h2>
              <p className="text-white/80 mb-4">
                NEC 250.52(A) lists all electrodes that are permitted for grounding. These fall into two categories: electrodes that already exist at a building (and must be used if present), and &quot;made&quot; electrodes that are intentionally installed.
              </p>

              <h3 className="text-xl font-semibold mt-8 mb-3">1. Metal Underground Water Pipe -- 250.52(A)(1)</h3>
              <div className="bg-white/5 rounded-xl p-6 my-4">
                <p className="text-white/70 mb-3">
                  A metal underground water pipe in direct contact with the earth for <strong>10 feet or more</strong> is a grounding electrode. This has historically been one of the best electrodes because metal water mains in contact with moist earth provide excellent ground contact resistance.
                </p>
                <ul className="list-disc list-inside text-white/60 space-y-1 text-sm">
                  <li>Must have at least 10 feet of metal pipe in direct contact with earth</li>
                  <li>Interior metal water piping beyond 5 feet from building entry point cannot serve as a conductor for the GEC</li>
                  <li><strong>Must always be supplemented</strong> by an additional electrode per 250.53(D)(2)</li>
                  <li>Continuity across meters, dielectric unions, and plastic sections must be maintained with bonding jumpers</li>
                </ul>
              </div>

              <h3 className="text-xl font-semibold mt-8 mb-3">2. Metal Frame of Building or Structure -- 250.52(A)(2)</h3>
              <div className="bg-white/5 rounded-xl p-6 my-4">
                <p className="text-white/70 mb-3">
                  The metal frame of a building or structure qualifies as a grounding electrode when it is effectively grounded by any of these methods:
                </p>
                <ul className="list-disc list-inside text-white/60 space-y-1 text-sm">
                  <li>At least 10 feet of structural metal in direct contact with earth</li>
                  <li>Held in place by concrete-encased structural base anchors with direct earth contact</li>
                  <li>Bonded to one or more of the other recognized electrodes in 250.52(A)</li>
                </ul>
              </div>

              <h3 className="text-xl font-semibold mt-8 mb-3">3. Concrete-Encased Electrode (Ufer Ground) -- 250.52(A)(3)</h3>
              <div className="bg-cyan-900/20 border border-cyan-500/30 rounded-xl p-6 my-4">
                <h4 className="font-semibold text-cyan-400 mb-2">Why Electricians Call It a &quot;Ufer Ground&quot;</h4>
                <p className="text-white/70 text-sm mb-3">
                  Named after Herbert Ufer, who developed the concept during World War II to ground ammunition storage buildings in desert areas where traditional ground rods had extremely high resistance in the dry, sandy soil. He discovered that rebar encased in concrete in contact with the earth provided excellent grounding.
                </p>
              </div>
              <div className="bg-white/5 rounded-xl p-6 my-4">
                <p className="text-white/70 mb-3">
                  A concrete-encased electrode consists of at least <strong>20 feet</strong> of one or more of the following, encased within <strong>2 inches or more of concrete</strong> that is in direct contact with the earth:
                </p>
                <ul className="list-disc list-inside text-white/60 space-y-1 text-sm">
                  <li><strong>Bare copper conductor</strong> -- 4 AWG or larger</li>
                  <li><strong>Steel reinforcing bars (rebar)</strong> -- 1/2 inch diameter or larger</li>
                  <li>Must be located in the bottom of a foundation or footing in direct contact with earth</li>
                  <li>Multiple rebars or conductors can be bonded together to reach the 20-foot minimum</li>
                  <li>The GEC to a concrete-encased electrode never needs to be larger than 4 AWG copper</li>
                </ul>
                <p className="text-white/70 mt-3 text-sm">
                  The Ufer ground is considered one of the most effective grounding electrodes available because concrete absorbs moisture from the surrounding earth and maintains good conductivity. Typical resistance values for a Ufer ground range from 2 to 5 ohms -- far below the 25-ohm threshold required for rod electrodes.
                </p>
              </div>

              <h3 className="text-xl font-semibold mt-8 mb-3">4. Ground Ring -- 250.52(A)(4)</h3>
              <div className="bg-white/5 rounded-xl p-6 my-4">
                <p className="text-white/70 mb-3">
                  A ground ring encircles the building or structure and provides a very effective electrode with low resistance due to its large surface area in contact with the earth.
                </p>
                <ul className="list-disc list-inside text-white/60 space-y-1 text-sm">
                  <li><strong>2 AWG or larger</strong> bare copper conductor</li>
                  <li>Minimum length of <strong>20 feet</strong>, in direct contact with the earth</li>
                  <li>Must encircle the building or structure at a depth of at least <strong>30 inches (2.5 feet)</strong></li>
                  <li>The GEC to a ground ring is sized per Table 250.66 (no reduction permitted)</li>
                </ul>
              </div>

              <h3 className="text-xl font-semibold mt-8 mb-3">5. Rod and Pipe Electrodes -- 250.52(A)(5)</h3>
              <div className="bg-white/5 rounded-xl p-6 my-4">
                <p className="text-white/70 mb-3">
                  The most commonly installed &quot;made&quot; electrode. Ground rods are the standard go-to when other electrode types are not present.
                </p>
                <ul className="list-disc list-inside text-white/60 space-y-1 text-sm">
                  <li><strong>Rod electrodes:</strong> At least 8 feet long, minimum 5/8 inch diameter for steel/iron, 1/2 inch for listed copper or stainless steel</li>
                  <li><strong>Pipe electrodes:</strong> At least 8 feet long, minimum 3/4 inch trade size, galvanized or metal-coated for corrosion protection</li>
                  <li>Must be driven to a depth of at least 8 feet per 250.53(G)</li>
                  <li>If rock bottom prevents vertical driving, may be driven at an oblique angle (max 45 degrees) or buried in a trench at least 30 inches deep</li>
                  <li>Upper end must be flush with or below grade level, unless the aboveground end and the GEC attachment are protected from damage</li>
                </ul>
              </div>

              <h3 className="text-xl font-semibold mt-8 mb-3">6. Plate Electrodes -- 250.52(A)(7)</h3>
              <div className="bg-white/5 rounded-xl p-6 my-4">
                <p className="text-white/70 mb-3">
                  Plate electrodes are less common but can be effective in rocky soil where driving ground rods is impractical.
                </p>
                <ul className="list-disc list-inside text-white/60 space-y-1 text-sm">
                  <li>Minimum <strong>2 square feet</strong> of surface area exposed to the soil</li>
                  <li><strong>Iron or steel plates:</strong> at least 1/4 inch thick</li>
                  <li><strong>Nonferrous metal plates (copper):</strong> at least 0.06 inch thick</li>
                  <li>Must be buried at a depth of at least <strong>30 inches</strong> below grade</li>
                </ul>
              </div>

              <div className="bg-white/5 rounded-xl p-6 my-6">
                <h3 className="font-semibold mb-3">Other Recognized Electrodes</h3>
                <p className="text-white/70 text-sm">
                  NEC 250.52(A) also recognizes <strong>other listed electrodes</strong> (250.52(A)(6)) and <strong>other local metal underground systems or structures</strong> (250.52(A)(8)) such as underground metal piping systems, underground tanks, and well casings that are not bonded to a metal water pipe. Always check with the AHJ (Authority Having Jurisdiction) for local requirements.
                </p>
              </div>
            </section>

            <section id="gec-sizing" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Grounding Electrode Conductor (GEC) Sizing</h2>
              <p className="text-white/80 mb-4">
                The grounding electrode conductor (GEC) connects the grounding electrode system to the grounded conductor (neutral) and/or equipment grounding bus at the service equipment. GEC sizing is based on <strong>Table 250.66</strong>, which relates the size of the largest ungrounded (phase) service-entrance conductor to the required GEC size.
              </p>

              <div className="overflow-x-auto my-6">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-white/20">
                      <th className="text-left py-3 px-4 text-white/60">Largest Service Conductor (Copper)</th>
                      <th className="text-left py-3 px-4 text-white/60">Largest Service Conductor (Aluminum)</th>
                      <th className="text-left py-3 px-4 text-white/60">GEC - Copper</th>
                      <th className="text-left py-3 px-4 text-white/60">GEC - Aluminum</th>
                    </tr>
                  </thead>
                  <tbody className="text-white/80">
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">2 AWG or smaller</td>
                      <td className="py-3 px-4">1/0 AWG or smaller</td>
                      <td className="py-3 px-4 font-semibold">8 AWG</td>
                      <td className="py-3 px-4">6 AWG</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">1 AWG or 1/0 AWG</td>
                      <td className="py-3 px-4">2/0 or 3/0 AWG</td>
                      <td className="py-3 px-4 font-semibold">6 AWG</td>
                      <td className="py-3 px-4">4 AWG</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">2/0 or 3/0 AWG</td>
                      <td className="py-3 px-4">4/0 AWG or 250 kcmil</td>
                      <td className="py-3 px-4 font-semibold">4 AWG</td>
                      <td className="py-3 px-4">2 AWG</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">Over 3/0 through 350 kcmil</td>
                      <td className="py-3 px-4">Over 250 through 500 kcmil</td>
                      <td className="py-3 px-4 font-semibold">2 AWG</td>
                      <td className="py-3 px-4">1/0 AWG</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">Over 350 through 600 kcmil</td>
                      <td className="py-3 px-4">Over 500 through 900 kcmil</td>
                      <td className="py-3 px-4 font-semibold">1/0 AWG</td>
                      <td className="py-3 px-4">3/0 AWG</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4">Over 600 through 1100 kcmil</td>
                      <td className="py-3 px-4">Over 900 through 1750 kcmil</td>
                      <td className="py-3 px-4 font-semibold">2/0 AWG</td>
                      <td className="py-3 px-4">4/0 AWG</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="bg-red-900/20 border border-red-500/30 rounded-xl p-6 my-6">
                <h3 className="font-semibold text-red-400 mb-2">Important GEC Sizing Exceptions</h3>
                <ul className="list-disc list-inside text-white/70 space-y-2 text-sm">
                  <li><strong>GEC to rod, pipe, or plate electrodes</strong> -- never required to be larger than <strong>6 AWG copper</strong> or 4 AWG aluminum (250.66(A))</li>
                  <li><strong>GEC to concrete-encased electrode</strong> -- never required to be larger than <strong>4 AWG copper</strong> (250.66(B))</li>
                  <li><strong>GEC to ground ring</strong> -- never required to be larger than the conductor used for the ground ring itself (250.66(C))</li>
                </ul>
              </div>

              <h3 className="text-xl font-semibold mt-6 mb-3">GEC Installation Requirements (250.64)</h3>
              <ul className="list-disc list-inside text-white/70 space-y-2 mb-4">
                <li>Must be <strong>continuous</strong> without a splice, except irreversible compression connectors, exothermic welding, or connections to a bus bar</li>
                <li>Must be <strong>protected from physical damage</strong> -- if exposed, secure to the surface and install in rigid conduit, IMC, EMT, PVC, or cable armor</li>
                <li>Aluminum or copper-clad aluminum GEC must not be used where in direct contact with masonry, earth, or within 18 inches of earth</li>
                <li>Where run through metal enclosures (conduit), both ends must be bonded to the GEC to prevent inductive choking</li>
                <li>Can be run to any convenient grounding electrode in the system -- the GEC does not need to run directly from the panel to every electrode</li>
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
                  href="https://apps.apple.com/us/app/ampora/id6753693522"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-white text-black font-semibold rounded-full hover:bg-white/90 transition-colors text-sm whitespace-nowrap"
                >
                  <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/></svg>
                  Download Free
                </a>
              </div>
            </div>

            <section id="supplemental" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Supplemental Electrode Requirements</h2>
              <p className="text-white/80 mb-4">
                The NEC requires that certain electrodes be supplemented by at least one additional electrode. Understanding these requirements prevents failed inspections and ensures a robust grounding system.
              </p>

              <div className="bg-white/5 rounded-xl p-6 my-6">
                <h3 className="font-semibold mb-3">When a Supplemental Electrode is Required</h3>
                <div className="space-y-4 text-white/70 text-sm">
                  <div className="flex gap-3">
                    <span className="text-red-400 font-bold shrink-0">1.</span>
                    <p><strong>Metal underground water pipe electrode (250.53(D)(2)):</strong> A water pipe electrode must ALWAYS be supplemented by an additional electrode, regardless of its resistance value. This is because plastic repair sections or meter replacements could interrupt the ground path at any time.</p>
                  </div>
                  <div className="flex gap-3">
                    <span className="text-red-400 font-bold shrink-0">2.</span>
                    <p><strong>Rod, pipe, or plate electrodes (250.56):</strong> A single rod, pipe, or plate electrode that does not meet the 25-ohm resistance requirement must be supplemented by one additional electrode. With two electrodes installed, no further resistance testing is required.</p>
                  </div>
                </div>
              </div>

              <p className="text-white/80 mb-4">
                The supplemental electrode must be one of the electrode types recognized in 250.52(A) and must be spaced appropriately. For supplemental rod electrodes, NEC 250.53(A)(3) requires they be installed at least <strong>6 feet apart</strong> from any other rod, pipe, or plate electrode. In practice, spacing ground rods at least twice the length of the rod (16 feet for 8-foot rods) provides the best reduction in combined resistance.
              </p>
            </section>

            <section id="25-ohm-rule" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">The 25-Ohm Rule for Ground Rods</h2>
              <p className="text-white/80 mb-4">
                NEC 250.56 establishes the resistance threshold for rod, pipe, and plate electrodes:
              </p>

              <div className="bg-red-900/20 border border-red-500/30 rounded-xl p-6 my-6">
                <h3 className="font-semibold text-red-400 mb-2">NEC 250.56 -- Resistance of Rod, Pipe, and Plate Electrodes</h3>
                <p className="text-white/70 mb-3">
                  A single rod, pipe, or plate electrode shall have a resistance to ground of <strong>25 ohms or less</strong>. If the resistance is not 25 ohms or less, it shall be supplemented by one additional electrode of any type specified in 250.52(A)(2) through (A)(8). The additional electrode shall be permitted to be bonded to one of the following:
                </p>
                <ul className="list-disc list-inside text-white/60 space-y-1 text-sm">
                  <li>The rod, pipe, or plate electrode</li>
                  <li>The grounding electrode conductor</li>
                  <li>The grounded service conductor</li>
                  <li>The service equipment enclosure</li>
                  <li>Any grounding electrode of the grounding electrode system</li>
                </ul>
              </div>

              <div className="grid md:grid-cols-2 gap-6 my-6">
                <div className="bg-white/5 rounded-xl p-6">
                  <h3 className="font-semibold text-green-400 mb-3">Single Rod Meets 25 Ohms</h3>
                  <ul className="space-y-2 text-white/70 text-sm">
                    <li>&#8226; Test resistance with ground resistance tester</li>
                    <li>&#8226; Document the reading for the inspector</li>
                    <li>&#8226; No additional rod required</li>
                    <li>&#8226; Still must supplement water pipe electrode if present</li>
                  </ul>
                </div>
                <div className="bg-white/5 rounded-xl p-6">
                  <h3 className="font-semibold text-yellow-400 mb-3">Single Rod Exceeds 25 Ohms</h3>
                  <ul className="space-y-2 text-white/70 text-sm">
                    <li>&#8226; Install second ground rod at least 6 feet away</li>
                    <li>&#8226; No further resistance testing required</li>
                    <li>&#8226; Connect both rods to GEC or bond between them</li>
                    <li>&#8226; Most electricians default to two rods to avoid testing</li>
                  </ul>
                </div>
              </div>

              <div className="bg-cyan-900/20 border border-cyan-500/30 rounded-xl p-6 my-6">
                <h3 className="font-semibold text-cyan-400 mb-2">Pro Tip: When to Default to Two Rods</h3>
                <p className="text-white/70">
                  Many electricians routinely install two ground rods on every service because (1) the cost of a second rod is minimal, (2) it eliminates the need for ground resistance testing, and (3) two rods provide better grounding in all soil conditions. Some jurisdictions require two rods regardless. Check with your local AHJ.
                </p>
              </div>
            </section>

            <section id="resistance-testing" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Ground Resistance Testing Methods</h2>
              <p className="text-white/80 mb-4">
                When a single ground rod is installed, or when you need to verify the effectiveness of a grounding electrode system, ground resistance testing is essential. There are several accepted methods.
              </p>

              <h3 className="text-xl font-semibold mt-8 mb-3">Fall-of-Potential Method (3-Point Test)</h3>
              <div className="bg-white/5 rounded-xl p-6 my-4">
                <p className="text-white/70 mb-3">
                  The fall-of-potential method is the most accurate and widely accepted test for measuring ground electrode resistance. It requires a dedicated ground resistance tester (earth tester) and two auxiliary test stakes.
                </p>
                <h4 className="font-semibold text-white mb-2">Procedure:</h4>
                <ol className="list-decimal list-inside text-white/60 space-y-2 text-sm">
                  <li>Disconnect the GEC from the electrode under test (or use a clamp-on method if the system cannot be disconnected)</li>
                  <li>Drive a <strong>current stake (C)</strong> into the ground at a distance of at least <strong>10 times the rod length</strong> (80+ feet for an 8-foot rod) from the electrode under test</li>
                  <li>Drive a <strong>potential stake (P)</strong> at <strong>62% of the distance</strong> between the electrode and the current stake (approximately 50 feet for an 80-foot spacing)</li>
                  <li>The tester injects a known current between the electrode and the current stake</li>
                  <li>The tester measures the voltage drop at the potential stake</li>
                  <li>Resistance is calculated using Ohm&apos;s law: R = V/I</li>
                  <li>Move the potential stake to several positions (closer and farther) to verify the reading is stable -- a flat curve confirms an accurate measurement</li>
                </ol>
              </div>

              <h3 className="text-xl font-semibold mt-8 mb-3">3-Point Method (Simplified)</h3>
              <div className="bg-white/5 rounded-xl p-6 my-4">
                <p className="text-white/70 mb-3">
                  A simplified version of the fall-of-potential method. The 3-point test uses a ground resistance meter with three terminals (C1, P2, C2) connected to the electrode under test and two auxiliary stakes.
                </p>
                <ul className="list-disc list-inside text-white/60 space-y-1 text-sm">
                  <li>Less precise than the full fall-of-potential method but adequate for the NEC 25-ohm verification</li>
                  <li>Stakes should be placed in a straight line from the electrode, spaced at least 20 feet apart</li>
                  <li>Avoid placing stakes near other underground metal objects that could influence readings</li>
                </ul>
              </div>

              <h3 className="text-xl font-semibold mt-8 mb-3">Clamp-On Method</h3>
              <div className="bg-white/5 rounded-xl p-6 my-4">
                <p className="text-white/70 mb-3">
                  The clamp-on (stakeless) method allows testing without disconnecting the electrode and without driving auxiliary stakes. The tester clamps around the GEC and uses the parallel paths through the grounding electrode system to calculate individual electrode resistance.
                </p>
                <ul className="list-disc list-inside text-white/60 space-y-1 text-sm">
                  <li><strong>Best for:</strong> Testing individual electrodes in a multi-electrode system where disconnection is impractical</li>
                  <li><strong>Limitation:</strong> Requires a complete loop through multiple electrodes -- will not work on a single electrode system</li>
                  <li><strong>Accuracy:</strong> Less accurate than fall-of-potential but useful for ongoing maintenance checks</li>
                </ul>
              </div>

              <div className="overflow-x-auto my-6">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-white/20">
                      <th className="text-left py-3 px-4 text-white/60">Testing Method</th>
                      <th className="text-left py-3 px-4 text-white/60">Accuracy</th>
                      <th className="text-left py-3 px-4 text-white/60">Requires Disconnect</th>
                      <th className="text-left py-3 px-4 text-white/60">Auxiliary Stakes</th>
                      <th className="text-left py-3 px-4 text-white/60">Best Use Case</th>
                    </tr>
                  </thead>
                  <tbody className="text-white/80">
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">Fall-of-Potential</td>
                      <td className="py-3 px-4 text-green-400">High</td>
                      <td className="py-3 px-4">Yes (preferred)</td>
                      <td className="py-3 px-4">2 stakes</td>
                      <td className="py-3 px-4 text-white/60">New installations, engineering studies</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">3-Point Simplified</td>
                      <td className="py-3 px-4 text-yellow-400">Medium</td>
                      <td className="py-3 px-4">Preferred</td>
                      <td className="py-3 px-4">2 stakes</td>
                      <td className="py-3 px-4 text-white/60">25-ohm verification for inspections</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4">Clamp-On</td>
                      <td className="py-3 px-4 text-orange-400">Lower</td>
                      <td className="py-3 px-4">No</td>
                      <td className="py-3 px-4">None</td>
                      <td className="py-3 px-4 text-white/60">Maintenance, multi-electrode systems</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="bg-orange-900/30 rounded-xl p-6 my-6">
                <h3 className="font-semibold text-orange-400 mb-2">Factors That Affect Ground Resistance</h3>
                <ul className="list-disc list-inside text-white/70 space-y-1 text-sm">
                  <li><strong>Soil type:</strong> Clay has low resistivity (good), sand and gravel have high resistivity (poor)</li>
                  <li><strong>Soil moisture:</strong> Dry soil dramatically increases resistance -- test during dry conditions for worst-case readings</li>
                  <li><strong>Temperature:</strong> Frozen soil can have extremely high resistivity</li>
                  <li><strong>Rod depth:</strong> Deeper rods often reach moister soil layers with lower resistivity</li>
                  <li><strong>Chemical treatment:</strong> Ground enhancement materials (GEM) can lower resistance in poor soil conditions</li>
                </ul>
              </div>
            </section>

            <section id="bonding-jumpers" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Bonding Jumpers for Water Piping</h2>
              <p className="text-white/80 mb-4">
                NEC 250.104(A) requires that the interior metal water piping system be bonded to the service equipment enclosure, the grounded conductor at the service, the grounding electrode conductor (if of sufficient size), or one or more of the grounding electrodes. This ensures that metal water piping cannot become energized and pose a shock hazard.
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-3">Where Bonding Jumpers Are Required</h3>
              <ul className="list-disc list-inside text-white/70 space-y-2 mb-4">
                <li><strong>Water meters:</strong> Install a bonding jumper around the water meter to maintain continuity if the meter is removed</li>
                <li><strong>Dielectric unions:</strong> These intentionally break electrical continuity -- a bonding jumper must bridge across them when they interrupt the grounding path</li>
                <li><strong>Plastic pipe sections:</strong> Any plastic repair sections in an otherwise metallic water system require bonding jumpers across the plastic</li>
                <li><strong>Water heaters:</strong> Bond across dielectric nipples at the water heater to maintain piping system continuity</li>
              </ul>

              <div className="bg-white/5 rounded-xl p-6 my-6">
                <h3 className="font-semibold mb-3">Bonding Jumper Sizing (250.104(A))</h3>
                <p className="text-white/70 text-sm mb-3">
                  The bonding jumper for interior metal water piping is sized per Table 250.66, based on the size of the largest ungrounded service-entrance conductor. For individual equipment, the bonding jumper is sized per Table 250.122 based on the overcurrent device rating of the circuit that could energize the piping.
                </p>
              </div>
            </section>

            <section id="intersystem-bonding" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Intersystem Bonding Termination</h2>
              <p className="text-white/80 mb-4">
                NEC 250.94 requires an <strong>intersystem bonding termination</strong> at the service equipment or metering equipment enclosure. This provides a convenient connection point for bonding other systems -- telephone, CATV, satellite, and other communication systems -- to the building&apos;s grounding electrode system.
              </p>

              <div className="bg-white/5 rounded-xl p-6 my-4">
                <h3 className="font-semibold mb-2">Requirements for the Intersystem Bonding Termination</h3>
                <ul className="list-disc list-inside text-white/60 space-y-2 text-sm">
                  <li>Must be accessible for connection and inspection</li>
                  <li>Must have capacity for connection of at least <strong>3 intersystem bonding conductors</strong></li>
                  <li>Must not interfere with opening the service equipment enclosure</li>
                  <li>Must be securely mounted and electrically connected to the service equipment, meter enclosure, or grounding electrode conductor</li>
                  <li>Must accept connection of a minimum <strong>14 AWG</strong> to a maximum <strong>4 AWG</strong> copper conductor</li>
                </ul>
              </div>

              <p className="text-white/80 mt-4">
                The intersystem bonding termination ensures that all building communication systems are referenced to the same grounding electrode system, preventing differences in potential between systems that could damage equipment or create shock hazards.
              </p>
            </section>

            <section id="installation-practices" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Installation Best Practices</h2>

              <div className="space-y-4 my-6">
                <div className="bg-white/5 rounded-xl p-6">
                  <h3 className="font-semibold text-cyan-400 mb-2">Ground Rod Installation</h3>
                  <ul className="list-disc list-inside text-white/60 space-y-2 text-sm">
                    <li>Use a rotary hammer or driving tool designed for ground rods -- avoid mushrooming the top of the rod with a sledgehammer</li>
                    <li>Drive rods vertically whenever possible for maximum depth in moist soil</li>
                    <li>If rock is encountered, the rod may be driven at up to a 45-degree angle, or laid in a 30-inch deep trench</li>
                    <li>Use listed ground rod clamps -- avoid dissimilar metals that cause galvanic corrosion (e.g., copper clamp on steel rod)</li>
                    <li>Apply anti-oxidant compound on aluminum connections</li>
                    <li>For two-rod installations, maintain at least 6 feet of separation (16 feet preferred for maximum effectiveness)</li>
                  </ul>
                </div>

                <div className="bg-white/5 rounded-xl p-6">
                  <h3 className="font-semibold text-cyan-400 mb-2">Ufer Ground Installation</h3>
                  <ul className="list-disc list-inside text-white/60 space-y-2 text-sm">
                    <li>Coordinate with the concrete contractor -- the electrode must be in place before the pour</li>
                    <li>Ensure at least 20 feet of 4 AWG bare copper or 1/2-inch rebar is encased in a minimum of 2 inches of concrete</li>
                    <li>The concrete must be in direct contact with the earth (not elevated or on a vapor barrier at the electrode location)</li>
                    <li>Bring the GEC out of the concrete in a manner that protects it from damage and allows future connection</li>
                    <li>Use rebar tie wire to secure the conductor to the rebar cage -- do not rely on gravity alone</li>
                    <li>Mark the GEC exit point clearly so it is not buried or cut during backfill</li>
                  </ul>
                </div>

                <div className="bg-white/5 rounded-xl p-6">
                  <h3 className="font-semibold text-cyan-400 mb-2">GEC Connection Methods (250.70)</h3>
                  <ul className="list-disc list-inside text-white/60 space-y-2 text-sm">
                    <li><strong>Listed pressure connectors</strong> -- most common for ground rod connections (Acorn clamps, etc.)</li>
                    <li><strong>Exothermic welding (Cadweld)</strong> -- permanent, excellent conductivity, preferred for critical and buried connections</li>
                    <li><strong>Listed lugs</strong> -- for connection to bus bars or equipment</li>
                    <li>Connections must be accessible except where buried or encased in concrete (250.68(A))</li>
                    <li>Sheet metal screws are NOT permitted for grounding connections</li>
                  </ul>
                </div>

                <div className="bg-white/5 rounded-xl p-6">
                  <h3 className="font-semibold text-cyan-400 mb-2">Soil Improvement Techniques</h3>
                  <ul className="list-disc list-inside text-white/60 space-y-2 text-sm">
                    <li><strong>Ground enhancement material (GEM):</strong> A conductive compound placed around the electrode that retains moisture and lowers soil resistivity</li>
                    <li><strong>Chemical rods:</strong> Hollow ground rods filled with salts that slowly leach into the surrounding soil</li>
                    <li><strong>Longer rods:</strong> Deeper rods can reach water table or moister soil layers, significantly reducing resistance</li>
                    <li><strong>Multiple rods:</strong> Each additional rod (properly spaced) reduces the combined resistance</li>
                    <li>Avoid salt-based treatments that may corrode the electrode or contaminate groundwater</li>
                  </ul>
                </div>
              </div>
            </section>

            <section id="common-mistakes" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Common Mistakes to Avoid</h2>
              <div className="space-y-4 my-6">
                <div className="bg-red-900/20 border border-red-500/30 rounded-xl p-6">
                  <h3 className="font-semibold text-red-400 mb-2">Not Bonding All Present Electrodes Together</h3>
                  <p className="text-white/60 text-sm">NEC 250.50 requires that ALL grounding electrodes present at a building be bonded together. You cannot choose to use only the ground rods while ignoring the water pipe or Ufer ground. Every eligible electrode must be part of the system.</p>
                </div>

                <div className="bg-red-900/20 border border-red-500/30 rounded-xl p-6">
                  <h3 className="font-semibold text-red-400 mb-2">Failing to Supplement the Water Pipe Electrode</h3>
                  <p className="text-white/60 text-sm">A metal underground water pipe electrode must ALWAYS be supplemented by an additional electrode, regardless of its measured resistance. This is one of the most frequently missed requirements on inspections.</p>
                </div>

                <div className="bg-red-900/20 border border-red-500/30 rounded-xl p-6">
                  <h3 className="font-semibold text-red-400 mb-2">Single Ground Rod Without Testing or Second Rod</h3>
                  <p className="text-white/60 text-sm">Installing one ground rod without either testing for 25 ohms or less, or installing a second rod, violates NEC 250.56. Either test and document the resistance, or install two rods.</p>
                </div>

                <div className="bg-red-900/20 border border-red-500/30 rounded-xl p-6">
                  <h3 className="font-semibold text-red-400 mb-2">Oversizing the GEC to Rod or Concrete-Encased Electrodes</h3>
                  <p className="text-white/60 text-sm">While oversizing is not a code violation, it wastes material and money. The GEC to ground rods never needs to be larger than 6 AWG copper, and the GEC to a Ufer ground never needs to be larger than 4 AWG copper. Know the exceptions in 250.66(A) and (B).</p>
                </div>

                <div className="bg-red-900/20 border border-red-500/30 rounded-xl p-6">
                  <h3 className="font-semibold text-red-400 mb-2">Running GEC Through Metal Conduit Without Bonding Both Ends</h3>
                  <p className="text-white/60 text-sm">When a GEC is run through a metal raceway, NEC 250.64(E) requires that both ends of the raceway be bonded to the GEC. Failure to do this creates an inductive choke that can impede current flow through the GEC during a lightning strike or surge event.</p>
                </div>

                <div className="bg-red-900/20 border border-red-500/30 rounded-xl p-6">
                  <h3 className="font-semibold text-red-400 mb-2">Missing the Ufer Ground During New Construction</h3>
                  <p className="text-white/60 text-sm">The concrete-encased electrode must be installed before the concrete pour. Once the foundation is poured, you cannot go back and add a Ufer ground. Coordinate with the concrete contractor early in the project. If a Ufer ground was available but not installed, the inspector may require it.</p>
                </div>

                <div className="bg-red-900/20 border border-red-500/30 rounded-xl p-6">
                  <h3 className="font-semibold text-red-400 mb-2">Using Aluminum GEC in Contact with Earth or Concrete</h3>
                  <p className="text-white/60 text-sm">Aluminum and copper-clad aluminum GECs are not permitted where in direct contact with masonry or earth, or where subject to corrosive conditions. They must not be used within 18 inches of the earth. Use copper for all direct-burial and concrete-encased applications.</p>
                </div>

                <div className="bg-red-900/20 border border-red-500/30 rounded-xl p-6">
                  <h3 className="font-semibold text-red-400 mb-2">Not Providing Intersystem Bonding Termination</h3>
                  <p className="text-white/60 text-sm">NEC 250.94 requires an accessible intersystem bonding termination at the service. This is frequently forgotten but is required so that communication system installers (cable, telephone, satellite) can bond their grounding conductors to the building&apos;s grounding electrode system.</p>
                </div>
              </div>
            </section>

            {/* CTA Section */}
            <section className="bg-gradient-to-r from-purple-900/30 to-cyan-900/30 rounded-2xl p-8 md:p-12 my-12 border border-purple-500/20">
              <div className="text-center">
                <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-1.5 rounded-full mb-4">
                  <span className="text-sm text-white/80">&#9733; Free on the App Store</span>
                </div>
                <h2 className="text-2xl md:text-3xl font-display font-bold mb-4">
                  Your Electrical Reference, Powered by AI
                </h2>
                <p className="text-white/70 mb-8 max-w-2xl mx-auto">
                  Join thousands of electricians using Ampora for instant NEC code answers, electrical calculations, and AI-powered troubleshooting — right from your phone.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <a
                    href="https://apps.apple.com/us/app/ampora/id6753693522"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-black font-semibold rounded-full hover:bg-white/90 transition-colors"
                  >
                    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/></svg>
                    Download on App Store
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
                <Link href="/blog/nec-article-250-grounding-guide" className="bg-white/5 hover:bg-white/10 rounded-xl p-6 transition-colors">
                  <span className="text-purple-400 text-sm">NEC Code</span>
                  <h3 className="font-semibold mt-2">NEC Article 250: Complete Grounding & Bonding Guide</h3>
                </Link>
                <Link href="/blog/electrical-grounding-vs-bonding" className="bg-white/5 hover:bg-white/10 rounded-xl p-6 transition-colors">
                  <span className="text-purple-400 text-sm">NEC Code</span>
                  <h3 className="font-semibold mt-2">Grounding vs Bonding: The Critical Difference</h3>
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
