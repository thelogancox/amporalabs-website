import { Metadata } from "next";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import { BlogPostingJsonLd, BreadcrumbJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Journeyman Electrician Exam Prep: Complete Study Guide",
  description: "Comprehensive journeyman electrician exam preparation guide. Master NEC code navigation, electrical theory, load calculations, grounding, motor calculations, and test-taking strategies to pass your licensing exam.",
  keywords: [
    "journeyman electrician exam",
    "journeyman exam prep",
    "electrician licensing exam",
    "NEC code study guide",
    "journeyman electrician test",
    "electrical exam practice questions",
    "electrician exam study tips",
    "NEC code navigation",
    "electrical theory review",
    "load calculation practice",
    "journeyman license requirements",
    "electrician exam formulas",
    "grounding and bonding exam",
    "motor calculation exam",
    "electrician test prep"
  ],
  alternates: {
    canonical: "https://amporalabs.com/blog/journeyman-electrician-exam-prep",
  },
  openGraph: {
    title: "Journeyman Electrician Exam Prep: Complete Study Guide - Ampora",
    description: "Master everything you need to pass the journeyman electrician licensing exam, from NEC code navigation to electrical theory and practice problems.",
    url: "https://amporalabs.com/blog/journeyman-electrician-exam-prep",
    type: "article",
    publishedTime: "2026-03-02",
  },
};

function HeroIllustration() {
  return (
    <svg viewBox="0 0 400 180" className="w-full h-44 md:h-52" aria-label="Journeyman electrician exam preparation illustration">
      <defs>
        <linearGradient id="bookGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#06b6d4"/>
          <stop offset="100%" stopColor="#8b5cf6"/>
        </linearGradient>
        <linearGradient id="checkGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#22c55e"/>
          <stop offset="100%" stopColor="#16a34a"/>
        </linearGradient>
      </defs>

      {/* NEC Code Book */}
      <g transform="translate(30, 20)">
        <rect x="0" y="10" width="75" height="100" rx="3" fill="#1e3a5f" stroke="#06b6d4" strokeWidth="2"/>
        <rect x="5" y="15" width="65" height="90" rx="2" fill="#0f2942"/>
        <text x="37" y="45" textAnchor="middle" fill="#06b6d4" fontSize="8" fontWeight="bold">NEC</text>
        <text x="37" y="58" textAnchor="middle" fill="#06b6d4" fontSize="6">2023</text>
        {/* Page lines */}
        <line x1="15" y1="70" x2="60" y2="70" stroke="#374151" strokeWidth="1"/>
        <line x1="15" y1="76" x2="55" y2="76" stroke="#374151" strokeWidth="1"/>
        <line x1="15" y1="82" x2="58" y2="82" stroke="#374151" strokeWidth="1"/>
        <line x1="15" y1="88" x2="50" y2="88" stroke="#374151" strokeWidth="1"/>
        {/* Bookmark tabs */}
        <rect x="65" y="30" width="15" height="6" rx="1" fill="#ef4444"/>
        <rect x="65" y="50" width="15" height="6" rx="1" fill="#22c55e"/>
        <rect x="65" y="70" width="15" height="6" rx="1" fill="#f59e0b"/>
      </g>

      {/* Checklist / Test Paper */}
      <g transform="translate(140, 15)">
        <rect x="0" y="0" width="90" height="115" rx="3" fill="#1f2937" stroke="#4b5563" strokeWidth="2"/>
        <rect x="10" y="8" width="70" height="10" rx="2" fill="#374151"/>
        <text x="45" y="16" textAnchor="middle" fill="#9ca3af" fontSize="6" fontWeight="bold">EXAM</text>

        {/* Checkboxes with checks */}
        <rect x="12" y="28" width="10" height="10" rx="1" fill="none" stroke="#22c55e" strokeWidth="1.5"/>
        <path d="M 14 33 L 17 36 L 22 29" stroke="#22c55e" strokeWidth="2" fill="none"/>
        <line x1="28" y1="33" x2="75" y2="33" stroke="#4b5563" strokeWidth="1"/>

        <rect x="12" y="44" width="10" height="10" rx="1" fill="none" stroke="#22c55e" strokeWidth="1.5"/>
        <path d="M 14 49 L 17 52 L 22 45" stroke="#22c55e" strokeWidth="2" fill="none"/>
        <line x1="28" y1="49" x2="70" y2="49" stroke="#4b5563" strokeWidth="1"/>

        <rect x="12" y="60" width="10" height="10" rx="1" fill="none" stroke="#22c55e" strokeWidth="1.5"/>
        <path d="M 14 65 L 17 68 L 22 61" stroke="#22c55e" strokeWidth="2" fill="none"/>
        <line x1="28" y1="65" x2="72" y2="65" stroke="#4b5563" strokeWidth="1"/>

        <rect x="12" y="76" width="10" height="10" rx="1" fill="none" stroke="#f59e0b" strokeWidth="1.5"/>
        <line x1="28" y1="81" x2="68" y2="81" stroke="#4b5563" strokeWidth="1"/>

        <rect x="12" y="92" width="10" height="10" rx="1" fill="none" stroke="#4b5563" strokeWidth="1.5"/>
        <line x1="28" y1="97" x2="65" y2="97" stroke="#4b5563" strokeWidth="1"/>
      </g>

      {/* Calculator */}
      <g transform="translate(260, 30)">
        <rect x="0" y="0" width="55" height="80" rx="4" fill="#1f2937" stroke="#8b5cf6" strokeWidth="2"/>
        <rect x="6" y="6" width="43" height="18" rx="2" fill="#111827" stroke="#374151"/>
        <text x="44" y="19" textAnchor="end" fill="#22c55e" fontSize="9" fontFamily="monospace">1.732</text>
        {/* Calculator buttons */}
        {[0, 1, 2].map((row) =>
          [0, 1, 2, 3].map((col) => (
            <rect key={`${row}-${col}`} x={8 + col * 11} y={30 + row * 14} width="9" height="10" rx="1" fill="#374151"/>
          ))
        )}
        <text x="12" y="38" fill="#9ca3af" fontSize="6">7</text>
        <text x="23" y="38" fill="#9ca3af" fontSize="6">8</text>
        <text x="34" y="38" fill="#9ca3af" fontSize="6">9</text>
        <text x="44" y="38" fill="#f59e0b" fontSize="6">/</text>
        <text x="12" y="52" fill="#9ca3af" fontSize="6">4</text>
        <text x="23" y="52" fill="#9ca3af" fontSize="6">5</text>
        <text x="34" y="52" fill="#9ca3af" fontSize="6">6</text>
        <text x="44" y="52" fill="#f59e0b" fontSize="6">x</text>
        <text x="12" y="66" fill="#9ca3af" fontSize="6">1</text>
        <text x="23" y="66" fill="#9ca3af" fontSize="6">2</text>
        <text x="34" y="66" fill="#9ca3af" fontSize="6">3</text>
        <text x="44" y="66" fill="#f59e0b" fontSize="6">-</text>
      </g>

      {/* Trophy / Pass indicator */}
      <g transform="translate(340, 20)">
        <circle cx="25" cy="50" r="30" fill="#22c55e" fillOpacity="0.1" stroke="#22c55e" strokeWidth="2" strokeDasharray="4"/>
        <text x="25" y="45" textAnchor="middle" fill="#22c55e" fontSize="18" fontWeight="bold">A+</text>
        <text x="25" y="60" textAnchor="middle" fill="#22c55e" fontSize="7">PASS</text>
      </g>

      {/* Connecting dots */}
      <circle cx="120" cy="75" r="3" fill="#06b6d4" fillOpacity="0.5"/>
      <circle cx="245" cy="70" r="3" fill="#8b5cf6" fillOpacity="0.5"/>
      <circle cx="327" cy="65" r="3" fill="#22c55e" fillOpacity="0.5"/>
      <line x1="120" y1="75" x2="245" y2="70" stroke="#4b5563" strokeWidth="1" strokeDasharray="4"/>
      <line x1="245" y1="70" x2="327" y2="65" stroke="#4b5563" strokeWidth="1" strokeDasharray="4"/>

      {/* Bottom label */}
      <text x="200" y="170" textAnchor="middle" fill="#9ca3af" fontSize="10">Study &rarr; Practice &rarr; Pass</text>
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
            { name: "Journeyman Electrician Exam Prep", url: "https://amporalabs.com/blog/journeyman-electrician-exam-prep" },
          ]}
        />
        <BlogPostingJsonLd
          headline="Journeyman Electrician Exam Prep: Complete Study Guide"
          description="Comprehensive study guide covering NEC code navigation, electrical theory, load calculations, grounding, motor calculations, and test-taking strategies for the journeyman electrician licensing exam."
          datePublished="2026-03-02"
          url="https://amporalabs.com/blog/journeyman-electrician-exam-prep"
        />

        <article className="max-w-4xl mx-auto px-6 py-12">
          {/* Breadcrumb */}
          <nav className="text-sm text-white/60 mb-8">
            <Link href="/" className="hover:text-white">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/blog" className="hover:text-white">Blog</Link>
            <span className="mx-2">/</span>
            <span className="text-white">Journeyman Exam Prep</span>
          </nav>

          {/* Hero */}
          <header className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <span className="px-3 py-1 bg-cyan-600/30 text-cyan-300 text-sm font-medium rounded-full">
                Technology
              </span>
              <span className="text-white/40 text-sm">March 2, 2026</span>
              <span className="text-white/40 text-sm">• 22 min read</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">
              Journeyman Electrician Exam Prep: Complete Study Guide
            </h1>
            <p className="text-xl text-white/70">
              Everything you need to know to pass the journeyman electrician licensing exam on your first attempt. Master NEC code navigation, electrical theory, calculations, and proven test-taking strategies.
            </p>
          </header>

          {/* Hero Illustration */}
          <div className="mb-12 bg-gradient-to-br from-cyan-900/20 to-purple-900/20 rounded-2xl p-6 border border-white/10">
            <HeroIllustration />
          </div>

          {/* Content */}
          <div className="prose prose-invert prose-lg max-w-none">

            <h2>What to Expect on the Journeyman Electrician Exam</h2>
            <p>
              The journeyman electrician licensing exam is the gateway to your career as a fully licensed
              electrician. While specific requirements vary by state and testing body, the exam format is
              remarkably consistent across most jurisdictions. Understanding the structure before you sit
              down is one of the most important steps in your preparation.
            </p>
            <p>
              Most states use exams administered by PSI, Prometric, or a state-specific testing agency.
              The two most common standardized exams are developed by PSI and based heavily on the
              National Electrical Code (NEC). Some states write their own exams, but the content areas
              remain fundamentally the same.
            </p>

            <h3>Exam Format Overview</h3>
            <div className="bg-white/5 rounded-xl p-6 my-6">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="py-2 text-white">Parameter</th>
                    <th className="py-2 text-white">Typical Value</th>
                  </tr>
                </thead>
                <tbody className="text-white/70">
                  <tr className="border-b border-white/5">
                    <td className="py-2">Number of Questions</td>
                    <td className="py-2">80 - 100 multiple choice</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-2">Time Allowed</td>
                    <td className="py-2">4 - 5 hours</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-2">Passing Score</td>
                    <td className="py-2">70% - 75% (varies by state)</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-2">Reference Allowed</td>
                    <td className="py-2">NEC code book (tabbed, no notes)</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-2">Calculator</td>
                    <td className="py-2">Non-programmable, basic scientific</td>
                  </tr>
                  <tr>
                    <td className="py-2">Primary Code Cycle</td>
                    <td className="py-2">NEC 2023 (check your state)</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3>Content Breakdown by Topic Area</h3>
            <p>
              While the exact weighting varies, here is a typical distribution of questions by topic
              on most journeyman exams:
            </p>
            <div className="bg-white/5 rounded-xl p-6 my-6">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="py-2 text-white">Topic Area</th>
                    <th className="py-2 text-white">Approx. % of Exam</th>
                    <th className="py-2 text-white">Key NEC Articles</th>
                  </tr>
                </thead>
                <tbody className="text-white/70">
                  <tr className="border-b border-white/5">
                    <td className="py-2">Grounding &amp; Bonding</td>
                    <td className="py-2">15 - 20%</td>
                    <td className="py-2">Article 250</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-2">Branch Circuits &amp; Feeders</td>
                    <td className="py-2">12 - 15%</td>
                    <td className="py-2">Articles 210, 215</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-2">Overcurrent Protection</td>
                    <td className="py-2">10 - 12%</td>
                    <td className="py-2">Article 240</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-2">Wiring Methods</td>
                    <td className="py-2">10 - 15%</td>
                    <td className="py-2">Articles 300-392</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-2">Motors &amp; Controllers</td>
                    <td className="py-2">8 - 12%</td>
                    <td className="py-2">Article 430</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-2">Services</td>
                    <td className="py-2">8 - 10%</td>
                    <td className="py-2">Article 230</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-2">Load Calculations</td>
                    <td className="py-2">8 - 10%</td>
                    <td className="py-2">Article 220</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-2">Boxes &amp; Fittings</td>
                    <td className="py-2">5 - 8%</td>
                    <td className="py-2">Articles 314, 370</td>
                  </tr>
                  <tr>
                    <td className="py-2">Electrical Theory</td>
                    <td className="py-2">5 - 10%</td>
                    <td className="py-2">General knowledge</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2>Key NEC Articles You Must Master</h2>
            <p>
              The NEC is a massive document, but the journeyman exam focuses heavily on a core set of
              articles. You should be able to navigate these articles quickly and accurately. Knowing
              where to find information is just as important as memorizing it, since you will have your
              code book available during the exam.
            </p>

            <h3>The &quot;Big Five&quot; Articles</h3>
            <p>
              These five articles collectively account for the majority of exam questions. Build your
              study plan around mastering these first.
            </p>

            <div className="bg-gradient-to-r from-cyan-900/30 to-purple-900/30 rounded-xl p-6 my-6">
              <div className="space-y-4">
                <div>
                  <p className="text-cyan-300 font-semibold">Article 250 - Grounding and Bonding</p>
                  <p className="text-white/70 text-sm">The single most tested article. Know sizing tables (250.66, 250.122), grounding electrode systems, bonding requirements, and equipment grounding conductor rules.</p>
                </div>
                <div>
                  <p className="text-cyan-300 font-semibold">Article 210 - Branch Circuits</p>
                  <p className="text-white/70 text-sm">GFCI/AFCI requirements, receptacle outlet spacing, circuit ratings, and permissible loads. Expect 8-12 questions on this article alone.</p>
                </div>
                <div>
                  <p className="text-cyan-300 font-semibold">Article 240 - Overcurrent Protection</p>
                  <p className="text-white/70 text-sm">Standard ampere ratings (240.6), next size up rule (240.4(B)), tap rules (240.21), and coordination with conductor sizing.</p>
                </div>
                <div>
                  <p className="text-cyan-300 font-semibold">Article 430 - Motors</p>
                  <p className="text-white/70 text-sm">Motor FLC tables (430.247-250), overload protection sizing, branch circuit protection, feeder sizing, and disconnecting means.</p>
                </div>
                <div>
                  <p className="text-cyan-300 font-semibold">Article 220 - Branch-Circuit, Feeder, and Service Load Calculations</p>
                  <p className="text-white/70 text-sm">Demand factors, general lighting loads (Table 220.12), appliance circuits, and optional calculation methods for dwellings.</p>
                </div>
              </div>
            </div>

            <h3>Critical Supporting Articles</h3>
            <ul>
              <li><strong>Article 110</strong> - Requirements for Electrical Installations (working space clearances 110.26, temperature ratings)</li>
              <li><strong>Article 230</strong> - Services (service entrance, disconnecting means, overcurrent protection)</li>
              <li><strong>Article 300</strong> - General Requirements for Wiring Methods and Materials</li>
              <li><strong>Article 310</strong> - Conductors for General Wiring (ampacity tables, derating)</li>
              <li><strong>Article 314</strong> - Outlet, Device, Pull, and Junction Boxes (box fill calculations)</li>
              <li><strong>Article 334</strong> - Nonmetallic-Sheathed Cable (NM/Romex rules)</li>
              <li><strong>Article 344-358</strong> - Raceway articles (EMT, RMC, IMC, PVC, FMC)</li>
              <li><strong>Article 408</strong> - Switchboards, Switchgear, and Panelboards</li>
              <li><strong>Article 422</strong> - Appliances</li>
              <li><strong>Article 480</strong> - Storage Batteries</li>
            </ul>

            <h2>Electrical Theory Review</h2>
            <p>
              While the exam is primarily code-based, you will encounter questions that test your
              understanding of fundamental electrical theory. These questions do not require code book
              lookups -- you either know the theory or you do not. That makes them both fast to answer
              and easy to lose points on if you are unprepared.
            </p>

            <h3>Essential Formulas Reference</h3>
            <div className="bg-gradient-to-r from-purple-900/30 to-cyan-900/30 rounded-xl p-6 my-6">
              <div className="space-y-4">
                <div>
                  <p className="text-white font-semibold">Ohm&apos;s Law:</p>
                  <p className="text-white font-mono text-lg">E = I x R &nbsp;&nbsp;|&nbsp;&nbsp; I = E / R &nbsp;&nbsp;|&nbsp;&nbsp; R = E / I</p>
                </div>
                <div>
                  <p className="text-white font-semibold">Power (DC &amp; Single-Phase AC):</p>
                  <p className="text-white font-mono text-lg">P = E x I &nbsp;&nbsp;|&nbsp;&nbsp; P = I<sup>2</sup> x R &nbsp;&nbsp;|&nbsp;&nbsp; P = E<sup>2</sup> / R</p>
                </div>
                <div>
                  <p className="text-white font-semibold">Power (3-Phase):</p>
                  <p className="text-white font-mono text-lg">P = E x I x 1.732 x PF</p>
                </div>
                <div>
                  <p className="text-white font-semibold">Voltage Drop:</p>
                  <p className="text-white font-mono text-lg">VD = (2 x K x I x D) / CM</p>
                  <p className="text-white/60 text-sm mt-1">K = 12.9 (copper) or 21.2 (aluminum) | D = distance in feet | CM = circular mils</p>
                </div>
                <div>
                  <p className="text-white font-semibold">Apparent Power (VA):</p>
                  <p className="text-white font-mono text-lg">VA = E x I &nbsp;&nbsp;|&nbsp;&nbsp; kVA = (E x I) / 1000</p>
                </div>
                <div>
                  <p className="text-white font-semibold">Power Factor:</p>
                  <p className="text-white font-mono text-lg">PF = True Power (W) / Apparent Power (VA)</p>
                </div>
                <div>
                  <p className="text-white font-semibold">Efficiency:</p>
                  <p className="text-white font-mono text-lg">Eff = (Power Out / Power In) x 100%</p>
                </div>
              </div>
            </div>

            <h3>Series vs Parallel Circuits</h3>
            <p>
              These fundamental circuit concepts appear regularly on the exam. You need to be comfortable
              calculating total resistance, current, and voltage in both configurations.
            </p>

            <div className="grid md:grid-cols-2 gap-4 my-6">
              <div className="bg-white/5 rounded-xl p-5">
                <h4 className="text-cyan-400 font-semibold mb-3">Series Circuit Rules</h4>
                <ul className="text-white/70 text-sm space-y-2 list-none pl-0">
                  <li>R<sub>total</sub> = R<sub>1</sub> + R<sub>2</sub> + R<sub>3</sub> ...</li>
                  <li>I<sub>total</sub> = I<sub>1</sub> = I<sub>2</sub> = I<sub>3</sub> (same everywhere)</li>
                  <li>E<sub>total</sub> = E<sub>1</sub> + E<sub>2</sub> + E<sub>3</sub> (voltage divides)</li>
                  <li>Total resistance increases</li>
                  <li>One open = entire circuit stops</li>
                </ul>
              </div>
              <div className="bg-white/5 rounded-xl p-5">
                <h4 className="text-purple-400 font-semibold mb-3">Parallel Circuit Rules</h4>
                <ul className="text-white/70 text-sm space-y-2 list-none pl-0">
                  <li>1/R<sub>t</sub> = 1/R<sub>1</sub> + 1/R<sub>2</sub> + 1/R<sub>3</sub> ...</li>
                  <li>E<sub>total</sub> = E<sub>1</sub> = E<sub>2</sub> = E<sub>3</sub> (same everywhere)</li>
                  <li>I<sub>total</sub> = I<sub>1</sub> + I<sub>2</sub> + I<sub>3</sub> (current divides)</li>
                  <li>Total resistance decreases</li>
                  <li>One open = other paths still work</li>
                </ul>
              </div>
            </div>

            <h3>Conductor Properties You Should Know</h3>
            <div className="bg-white/5 rounded-xl p-6 my-6">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="py-2 text-white">Property</th>
                    <th className="py-2 text-white">Copper</th>
                    <th className="py-2 text-white">Aluminum</th>
                  </tr>
                </thead>
                <tbody className="text-white/70">
                  <tr className="border-b border-white/5">
                    <td className="py-2">K Factor (resistivity)</td>
                    <td className="py-2">12.9</td>
                    <td className="py-2">21.2</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-2">Weight</td>
                    <td className="py-2">Heavier</td>
                    <td className="py-2">~30% weight of copper</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-2">Conductivity</td>
                    <td className="py-2">100% (reference)</td>
                    <td className="py-2">~61% of copper</td>
                  </tr>
                  <tr>
                    <td className="py-2">Typical Sizing Rule</td>
                    <td className="py-2">Reference size</td>
                    <td className="py-2">Two sizes larger than Cu</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2>NEC Code Navigation Tips</h2>
            <p>
              The exam is open-book, which means your ability to find information quickly is paramount.
              Electricians who tab and index their code book effectively can answer code-lookup questions
              in under 60 seconds. Those who do not may spend 5 minutes or more per question -- and with
              80+ questions in 4 hours, that math does not work in your favor.
            </p>

            <h3>Tabbing Strategy</h3>
            <p>
              Use pre-made NEC tabs or create your own. At minimum, tab every article you will reference
              frequently. Most exam veterans recommend the following tabbing approach:
            </p>

            <div className="bg-white/5 rounded-xl p-6 my-6">
              <h4 className="text-white font-semibold mb-3">Priority Tab Locations</h4>
              <div className="grid md:grid-cols-2 gap-3 text-white/70 text-sm">
                <div className="space-y-2">
                  <p><span className="text-cyan-400 font-mono">Tab 1:</span> Table of Contents</p>
                  <p><span className="text-cyan-400 font-mono">Tab 2:</span> Article 90 (scope)</p>
                  <p><span className="text-cyan-400 font-mono">Tab 3:</span> Article 100 (definitions)</p>
                  <p><span className="text-cyan-400 font-mono">Tab 4:</span> Article 110 (requirements)</p>
                  <p><span className="text-cyan-400 font-mono">Tab 5:</span> Table 110.26(A)(1)</p>
                  <p><span className="text-cyan-400 font-mono">Tab 6:</span> Article 200 (grounded conductors)</p>
                  <p><span className="text-cyan-400 font-mono">Tab 7:</span> Article 210 (branch circuits)</p>
                  <p><span className="text-cyan-400 font-mono">Tab 8:</span> Article 220 (load calcs)</p>
                  <p><span className="text-cyan-400 font-mono">Tab 9:</span> Article 230 (services)</p>
                  <p><span className="text-cyan-400 font-mono">Tab 10:</span> Article 240 (overcurrent)</p>
                </div>
                <div className="space-y-2">
                  <p><span className="text-cyan-400 font-mono">Tab 11:</span> Article 250 (grounding)</p>
                  <p><span className="text-cyan-400 font-mono">Tab 12:</span> Article 300 (wiring methods)</p>
                  <p><span className="text-cyan-400 font-mono">Tab 13:</span> Article 310 / Table 310.16</p>
                  <p><span className="text-cyan-400 font-mono">Tab 14:</span> Article 314 (boxes)</p>
                  <p><span className="text-cyan-400 font-mono">Tab 15:</span> Article 334 (NM cable)</p>
                  <p><span className="text-cyan-400 font-mono">Tab 16:</span> Article 430 (motors)</p>
                  <p><span className="text-cyan-400 font-mono">Tab 17:</span> Chapter 9 Tables</p>
                  <p><span className="text-cyan-400 font-mono">Tab 18:</span> Table 310.16 (ampacity)</p>
                  <p><span className="text-cyan-400 font-mono">Tab 19:</span> Annex D (examples)</p>
                  <p><span className="text-cyan-400 font-mono">Tab 20:</span> Index</p>
                </div>
              </div>
            </div>

            <h3>How to Read an NEC Reference Quickly</h3>
            <p>
              NEC section numbers follow a logical hierarchy. Understanding the numbering system speeds up
              your lookups dramatically:
            </p>
            <ul>
              <li><strong>Article</strong> - The main topic (e.g., Article 250 = Grounding)</li>
              <li><strong>Part</strong> - Roman numeral subdivisions within an article (Part I, Part II, etc.)</li>
              <li><strong>Section</strong> - Specific requirement (e.g., 250.122 = Size of EGCs)</li>
              <li><strong>Subsection</strong> - Letters in parentheses further break down rules (e.g., 250.122(B))</li>
              <li><strong>Exception</strong> - Conditions that modify the general rule</li>
            </ul>

            <h2>Load Calculation Practice</h2>
            <p>
              Load calculations are one of the most heavily tested areas on the journeyman exam. You
              need to be comfortable performing both standard and optional calculations for dwelling
              units, and understand commercial load calculation methods as well.
            </p>

            <h3>Residential Standard Calculation (Article 220)</h3>
            <div className="bg-white/5 rounded-xl p-6 my-6">
              <h4 className="text-white font-semibold mb-4">Step-by-Step: Standard Dwelling Load Calculation</h4>
              <div className="space-y-3 text-white/80">
                <p><strong>Step 1:</strong> General Lighting Load</p>
                <p className="font-mono ml-4">Floor area (sq ft) x 3 VA/sq ft [Table 220.12]</p>

                <p><strong>Step 2:</strong> Add Small Appliance Circuits</p>
                <p className="font-mono ml-4">Minimum 2 circuits x 1,500 VA = 3,000 VA [210.11(C)(1)]</p>

                <p><strong>Step 3:</strong> Add Laundry Circuit</p>
                <p className="font-mono ml-4">Minimum 1 circuit x 1,500 VA = 1,500 VA [210.11(C)(2)]</p>

                <p><strong>Step 4:</strong> Apply Demand Factors [Table 220.42]</p>
                <p className="font-mono ml-4">First 3,000 VA at 100%</p>
                <p className="font-mono ml-4">Remainder at 35%</p>

                <p><strong>Step 5:</strong> Add Fixed Appliances</p>
                <p className="font-mono ml-4">If 4 or more fixed appliances: apply 75% demand factor</p>

                <p><strong>Step 6:</strong> Add Largest Motor at 125%</p>
                <p className="font-mono ml-4">Per 220.18 and 430.22</p>

                <p><strong>Step 7:</strong> Add Dryer Load [Table 220.54]</p>
                <p className="font-mono ml-4">5,000 VA or nameplate rating, whichever is larger</p>

                <p><strong>Step 8:</strong> Add Cooking Equipment [Table 220.55]</p>
                <p className="font-mono ml-4">Apply column demand factors based on number of units</p>

                <p><strong>Step 9:</strong> Add HVAC (largest of heating or cooling)</p>
                <p className="font-mono ml-4">Per 220.60 - do not add both</p>
              </div>
            </div>

            <h3>Practice Problem: Dwelling Unit Load Calculation</h3>
            <div className="bg-white/5 rounded-xl p-6 my-6">
              <h4 className="text-white font-semibold mb-4">Given:</h4>
              <ul className="text-white/70 mb-4">
                <li>1,800 sq ft dwelling</li>
                <li>2 small appliance circuits + 1 laundry circuit</li>
                <li>Electric range: 12 kW</li>
                <li>Electric dryer: 5.5 kW</li>
                <li>Water heater: 4,500 watts</li>
                <li>Dishwasher: 1,500 watts</li>
                <li>Disposal: 900 watts</li>
                <li>A/C: 5,000 watts</li>
                <li>Electric heat: 4,000 watts</li>
                <li>240V, single-phase service</li>
              </ul>

              <h4 className="text-white font-semibold mb-4">Solution:</h4>
              <div className="space-y-3 text-white/80">
                <p><strong>General Lighting:</strong></p>
                <p className="font-mono ml-4">1,800 sq ft x 3 VA = 5,400 VA</p>

                <p><strong>Small Appliance + Laundry:</strong></p>
                <p className="font-mono ml-4">3,000 VA + 1,500 VA = 4,500 VA</p>

                <p><strong>Subtotal:</strong></p>
                <p className="font-mono ml-4">5,400 + 4,500 = 9,900 VA</p>

                <p><strong>Apply Table 220.42 Demand:</strong></p>
                <p className="font-mono ml-4">First 3,000 VA at 100% = 3,000 VA</p>
                <p className="font-mono ml-4">Remaining 6,900 VA at 35% = 2,415 VA</p>
                <p className="font-mono ml-4">Net general lighting = 5,415 VA</p>

                <p><strong>Range [Table 220.55, Column C]:</strong></p>
                <p className="font-mono ml-4">12 kW range, 1 unit = 8,000 VA demand</p>

                <p><strong>Dryer [Table 220.54]:</strong></p>
                <p className="font-mono ml-4">5,500 VA (nameplate &gt; 5,000 VA minimum)</p>

                <p><strong>Fixed Appliances (3 items - no 75% demand):</strong></p>
                <p className="font-mono ml-4">Water heater: 4,500 VA</p>
                <p className="font-mono ml-4">Dishwasher: 1,500 VA</p>
                <p className="font-mono ml-4">Disposal: 900 VA</p>
                <p className="font-mono ml-4">Subtotal: 6,900 VA</p>

                <p><strong>HVAC (larger of A/C or heat):</strong></p>
                <p className="font-mono ml-4">A/C: 5,000 VA (larger, use this)</p>

                <p><strong className="text-green-400">Total Calculated Load:</strong></p>
                <p className="font-mono ml-4 text-green-400">5,415 + 8,000 + 5,500 + 6,900 + 5,000 = 30,815 VA</p>

                <p><strong>Service Size:</strong></p>
                <p className="font-mono ml-4">I = 30,815 VA / 240V = 128.4 amps</p>
                <p className="font-mono ml-4 text-green-400">Minimum 150A service required</p>
              </div>
            </div>

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

            <h2>Grounding and Bonding Essentials</h2>
            <p>
              Article 250 is the most heavily tested article on the journeyman exam. You can expect
              15-20% of all questions to come from grounding and bonding topics. Understanding the
              distinction between grounding (connection to earth) and bonding (creating an effective
              fault current path) is fundamental.
            </p>

            <h3>Key Grounding Concepts</h3>
            <ul>
              <li><strong>Grounding Electrode System (250.50)</strong> - All electrodes present at a building must be bonded together to form the grounding electrode system</li>
              <li><strong>Grounding Electrode Conductor (GEC) sizing</strong> - Use Table 250.66, based on the size of the largest service-entrance conductor</li>
              <li><strong>Equipment Grounding Conductor (EGC) sizing</strong> - Use Table 250.122, based on the rating of the overcurrent device</li>
              <li><strong>Main bonding jumper (250.28)</strong> - Connects the grounded conductor (neutral) to the equipment grounding bus at the service</li>
              <li><strong>Bonding of service equipment (250.92)</strong> - Requires specific bonding methods; standard locknuts alone are insufficient</li>
            </ul>

            <h3>GEC Sizing Quick Reference</h3>
            <div className="bg-white/5 rounded-xl p-6 my-6">
              <h4 className="text-white font-semibold mb-3">Table 250.66 - Grounding Electrode Conductor (Copper)</h4>
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="py-2 text-white">Service Conductor Size (Cu)</th>
                    <th className="py-2 text-white">GEC Size (Cu)</th>
                  </tr>
                </thead>
                <tbody className="text-white/70">
                  <tr className="border-b border-white/5">
                    <td className="py-2">#2 AWG or smaller</td>
                    <td className="py-2">#8 AWG</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-2">#1 or 1/0 AWG</td>
                    <td className="py-2">#6 AWG</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-2">2/0 or 3/0 AWG</td>
                    <td className="py-2">#4 AWG</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-2">Over 3/0 through 350 kcmil</td>
                    <td className="py-2">#2 AWG</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-2">Over 350 through 600 kcmil</td>
                    <td className="py-2">#1/0 AWG</td>
                  </tr>
                  <tr>
                    <td className="py-2">Over 600 through 1100 kcmil</td>
                    <td className="py-2">#2/0 AWG</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3>Practice Problem: Grounding Conductor Sizing</h3>
            <div className="bg-white/5 rounded-xl p-6 my-6">
              <h4 className="text-white font-semibold mb-4">Question:</h4>
              <p className="text-white/70 mb-4">A 200-amp service uses 2/0 AWG copper service-entrance conductors. What is the minimum size copper grounding electrode conductor and the minimum size copper equipment grounding conductor for a 30-amp branch circuit?</p>

              <h4 className="text-white font-semibold mb-2">Answer:</h4>
              <div className="space-y-2 text-white/80">
                <p><strong>GEC:</strong> Per Table 250.66, for 2/0 AWG copper service conductors, the minimum GEC is <span className="text-green-400 font-semibold">#4 AWG copper</span>.</p>
                <p><strong>EGC:</strong> Per Table 250.122, for a 30-amp overcurrent device, the minimum EGC is <span className="text-green-400 font-semibold">#10 AWG copper</span>.</p>
              </div>
            </div>

            <h2>Motor Calculations</h2>
            <p>
              Motor calculations are a consistent exam topic because they involve multiple NEC sections
              working together. The key to motor questions is understanding that you must use the
              Full-Load Current (FLC) from NEC tables -- not the nameplate amperage -- for sizing
              branch circuit conductors and overcurrent protection.
            </p>

            <h3>Motor Calculation Steps</h3>
            <div className="bg-gradient-to-r from-cyan-900/30 to-purple-900/30 rounded-xl p-6 my-6">
              <div className="space-y-4">
                <div>
                  <p className="text-cyan-300 font-semibold">Step 1: Find FLC from NEC Tables</p>
                  <p className="text-white/70 text-sm">Table 430.247 (DC) | Table 430.248 (1-phase AC) | Table 430.249 (2-phase AC) | Table 430.250 (3-phase AC)</p>
                </div>
                <div>
                  <p className="text-cyan-300 font-semibold">Step 2: Size Branch Circuit Conductors (430.22)</p>
                  <p className="text-white/70 text-sm">Minimum conductor ampacity = FLC x 125%</p>
                </div>
                <div>
                  <p className="text-cyan-300 font-semibold">Step 3: Size Overload Protection (430.32)</p>
                  <p className="text-white/70 text-sm">Service factor 1.15+ or temp rise 40C: nameplate FLA x 125% | All others: nameplate FLA x 115%</p>
                </div>
                <div>
                  <p className="text-cyan-300 font-semibold">Step 4: Size Branch Circuit Protection (430.52)</p>
                  <p className="text-white/70 text-sm">Dual-element fuse: FLC x 175% | Inverse-time breaker: FLC x 250% | Instantaneous-trip breaker: FLC x 800%</p>
                </div>
                <div>
                  <p className="text-cyan-300 font-semibold">Step 5: Size Disconnect (430.110)</p>
                  <p className="text-white/70 text-sm">Minimum 115% of motor FLC</p>
                </div>
              </div>
            </div>

            <h3>Practice Problem: Motor Branch Circuit</h3>
            <div className="bg-white/5 rounded-xl p-6 my-6">
              <h4 className="text-white font-semibold mb-4">Question:</h4>
              <p className="text-white/70 mb-4">Size the branch circuit conductors, overcurrent protection (dual-element fuse), and disconnect for a 10 HP, 230V, 3-phase motor with a 1.15 service factor.</p>

              <h4 className="text-white font-semibold mb-2">Solution:</h4>
              <div className="space-y-3 text-white/80">
                <p><strong>Step 1:</strong> FLC from Table 430.250</p>
                <p className="font-mono ml-4">10 HP, 230V, 3-phase = 28 amps</p>

                <p><strong>Step 2:</strong> Conductor size (430.22)</p>
                <p className="font-mono ml-4">28A x 1.25 = 35 amps minimum</p>
                <p className="font-mono ml-4 text-green-400">#8 AWG copper THHN (50A @ 75C per Table 310.16)</p>

                <p><strong>Step 3:</strong> Overload protection (430.32)</p>
                <p className="font-mono ml-4">SF = 1.15, so: nameplate FLA x 125%</p>
                <p className="font-mono ml-4">28A x 1.25 = 35 amps</p>
                <p className="font-mono ml-4 text-green-400">35-amp overload relay</p>

                <p><strong>Step 4:</strong> Branch circuit fuse (430.52, dual-element)</p>
                <p className="font-mono ml-4">28A x 1.75 = 49 amps</p>
                <p className="font-mono ml-4 text-green-400">Next standard size: 50-amp dual-element fuse</p>

                <p><strong>Step 5:</strong> Disconnect (430.110)</p>
                <p className="font-mono ml-4">28A x 1.15 = 32.2 amps minimum</p>
                <p className="font-mono ml-4 text-green-400">Minimum 40-amp disconnect (next standard size)</p>
              </div>
            </div>

            <h2>Raceway and Conductor Sizing</h2>
            <p>
              Conduit fill calculations appear frequently on the exam. You need to know the maximum
              fill percentages and be able to use Chapter 9 tables to determine the correct conduit
              size for a given number of conductors.
            </p>

            <h3>Conduit Fill Percentages (Chapter 9, Table 1)</h3>
            <div className="bg-white/5 rounded-xl p-6 my-6">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="py-2 text-white">Number of Conductors</th>
                    <th className="py-2 text-white">Maximum Fill (%)</th>
                  </tr>
                </thead>
                <tbody className="text-white/70">
                  <tr className="border-b border-white/5">
                    <td className="py-2">1 conductor</td>
                    <td className="py-2">53%</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-2">2 conductors</td>
                    <td className="py-2">31%</td>
                  </tr>
                  <tr>
                    <td className="py-2">3 or more conductors</td>
                    <td className="py-2">40%</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3>Ampacity and Derating</h3>
            <p>
              Table 310.16 is the most referenced table in the NEC. You should be able to find ampacity
              values quickly and apply correction and adjustment factors.
            </p>
            <ul>
              <li><strong>Temperature correction (310.15(B))</strong> - Reduce ampacity when ambient temperature exceeds 30 degrees C</li>
              <li><strong>Conductor bundling adjustment (310.15(C)(1))</strong> - When more than 3 current-carrying conductors are in a raceway, apply adjustment factors from Table 310.15(C)(1)</li>
              <li><strong>Terminal temperature limits</strong> - Most equipment is rated for 75 degrees C. Use the 75 degrees C column of Table 310.16 unless all terminations are rated for higher temperature</li>
            </ul>

            <h3>Derating Quick Reference</h3>
            <div className="bg-white/5 rounded-xl p-6 my-6">
              <h4 className="text-white font-semibold mb-3">Table 310.15(C)(1) - Conductor Bundling Adjustment Factors</h4>
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="py-2 text-white">Current-Carrying Conductors</th>
                    <th className="py-2 text-white">Adjustment Factor</th>
                  </tr>
                </thead>
                <tbody className="text-white/70">
                  <tr className="border-b border-white/5">
                    <td className="py-2">4 - 6</td>
                    <td className="py-2">80%</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-2">7 - 9</td>
                    <td className="py-2">70%</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-2">10 - 20</td>
                    <td className="py-2">50%</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-2">21 - 30</td>
                    <td className="py-2">45%</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-2">31 - 40</td>
                    <td className="py-2">40%</td>
                  </tr>
                  <tr>
                    <td className="py-2">41 and above</td>
                    <td className="py-2">35%</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2>Box Fill Calculations</h2>
            <p>
              Box fill questions based on NEC 314.16 are common on the journeyman exam. The key is
              understanding how to count conductors and convert the count into required box volume.
            </p>

            <h3>Conductor Counting Rules (314.16(B))</h3>
            <div className="bg-white/5 rounded-xl p-6 my-6">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="py-2 text-white">Item in Box</th>
                    <th className="py-2 text-white">Conductor Equivalent</th>
                  </tr>
                </thead>
                <tbody className="text-white/70">
                  <tr className="border-b border-white/5">
                    <td className="py-2">Each conductor entering the box</td>
                    <td className="py-2">1 (based on conductor size)</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-2">All internal cable clamps (combined)</td>
                    <td className="py-2">1 (based on largest conductor)</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-2">All equipment grounding conductors (combined)</td>
                    <td className="py-2">1 (based on largest EGC)</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-2">Each yoke/strap (device)</td>
                    <td className="py-2">2 (based on largest conductor connected)</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-2">Conductors originating and ending in box</td>
                    <td className="py-2">1 (based on conductor size)</td>
                  </tr>
                  <tr>
                    <td className="py-2">Conductors passing through (unbroken)</td>
                    <td className="py-2">1 (based on conductor size)</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3>Volume per Conductor (Table 314.16(B))</h3>
            <div className="bg-white/5 rounded-xl p-6 my-6">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="py-2 text-white">Wire Size</th>
                    <th className="py-2 text-white">Volume (cu. in.)</th>
                  </tr>
                </thead>
                <tbody className="text-white/70">
                  <tr className="border-b border-white/5">
                    <td className="py-2">#14 AWG</td>
                    <td className="py-2">2.00</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-2">#12 AWG</td>
                    <td className="py-2">2.25</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-2">#10 AWG</td>
                    <td className="py-2">2.50</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-2">#8 AWG</td>
                    <td className="py-2">3.00</td>
                  </tr>
                  <tr>
                    <td className="py-2">#6 AWG</td>
                    <td className="py-2">5.00</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3>Practice Problem: Box Fill</h3>
            <div className="bg-white/5 rounded-xl p-6 my-6">
              <h4 className="text-white font-semibold mb-4">Question:</h4>
              <p className="text-white/70 mb-4">A device box contains: two 14/2 NM cables (4 insulated conductors + 2 grounds), one single-gang receptacle, and internal cable clamps. What is the minimum box volume?</p>

              <h4 className="text-white font-semibold mb-2">Solution:</h4>
              <div className="space-y-2 text-white/80">
                <p>4 insulated #14 conductors = <span className="font-mono">4 x 2.00 = 8.00 cu. in.</span></p>
                <p>All grounds (1 count) = <span className="font-mono">1 x 2.00 = 2.00 cu. in.</span></p>
                <p>All clamps (1 count) = <span className="font-mono">1 x 2.00 = 2.00 cu. in.</span></p>
                <p>1 device (2 counts) = <span className="font-mono">2 x 2.00 = 4.00 cu. in.</span></p>
                <p className="text-green-400 font-semibold mt-3">Total minimum volume = 16.00 cu. in.</p>
                <p className="text-white/60 text-sm">Use a single-gang 18 cu. in. device box (3 x 2 x 3-1/2 deep) or larger.</p>
              </div>
            </div>

            <h2>Study Strategies and Time Management</h2>
            <p>
              Passing the journeyman exam requires a structured study plan. Most successful candidates
              study for 3-6 months before the exam, dedicating at least 1-2 hours daily. Here is a
              proven approach to maximize your preparation time.
            </p>

            <h3>12-Week Study Plan</h3>
            <div className="bg-white/5 rounded-xl p-6 my-6">
              <div className="space-y-4">
                <div className="flex gap-4 items-start">
                  <span className="text-cyan-400 font-mono font-bold whitespace-nowrap">Weeks 1-2:</span>
                  <div>
                    <p className="text-white font-semibold">Code Book Familiarization</p>
                    <p className="text-white/60 text-sm">Tab your code book, learn the table of contents, practice finding articles by number. Read Article 90 and Article 100 completely.</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <span className="text-cyan-400 font-mono font-bold whitespace-nowrap">Weeks 3-4:</span>
                  <div>
                    <p className="text-white font-semibold">Electrical Theory Review</p>
                    <p className="text-white/60 text-sm">Ohm&apos;s law, power formulas, series/parallel circuits, transformer theory, and AC fundamentals. These questions do not require a code book.</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <span className="text-cyan-400 font-mono font-bold whitespace-nowrap">Weeks 5-6:</span>
                  <div>
                    <p className="text-white font-semibold">Grounding &amp; Bonding (Article 250)</p>
                    <p className="text-white/60 text-sm">The single most tested topic. Memorize Tables 250.66 and 250.122. Understand grounding electrode systems and main bonding jumper rules.</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <span className="text-cyan-400 font-mono font-bold whitespace-nowrap">Weeks 7-8:</span>
                  <div>
                    <p className="text-white font-semibold">Branch Circuits, Services, Overcurrent Protection</p>
                    <p className="text-white/60 text-sm">Articles 210, 215, 230, and 240. GFCI/AFCI requirements, service sizing, tap rules, and standard fuse/breaker ratings.</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <span className="text-cyan-400 font-mono font-bold whitespace-nowrap">Weeks 9-10:</span>
                  <div>
                    <p className="text-white font-semibold">Motors, Load Calculations, Wiring Methods</p>
                    <p className="text-white/60 text-sm">Motor FLC tables, overload and branch circuit protection sizing, dwelling unit load calculations, conduit fill, and box fill.</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <span className="text-cyan-400 font-mono font-bold whitespace-nowrap">Weeks 11-12:</span>
                  <div>
                    <p className="text-white font-semibold">Practice Exams &amp; Review</p>
                    <p className="text-white/60 text-sm">Take full-length timed practice exams. Review weak areas. Focus on speed and code book navigation efficiency.</p>
                  </div>
                </div>
              </div>
            </div>

            <h3>Study Checklist</h3>
            <div className="bg-gradient-to-r from-cyan-900/30 to-purple-900/30 rounded-xl p-6 my-6">
              <h4 className="text-white font-semibold mb-4">Pre-Exam Readiness Checklist</h4>
              <div className="grid md:grid-cols-2 gap-3 text-white/70 text-sm">
                <div className="space-y-2">
                  <p className="flex items-center gap-2"><span className="text-cyan-400">[&nbsp;]</span> NEC code book properly tabbed</p>
                  <p className="flex items-center gap-2"><span className="text-cyan-400">[&nbsp;]</span> Can navigate to any article in under 15 seconds</p>
                  <p className="flex items-center gap-2"><span className="text-cyan-400">[&nbsp;]</span> Memorized Ohm&apos;s law and power formulas</p>
                  <p className="flex items-center gap-2"><span className="text-cyan-400">[&nbsp;]</span> Comfortable with series/parallel circuits</p>
                  <p className="flex items-center gap-2"><span className="text-cyan-400">[&nbsp;]</span> Can perform dwelling load calculations</p>
                  <p className="flex items-center gap-2"><span className="text-cyan-400">[&nbsp;]</span> Know conductor bundling derating factors</p>
                  <p className="flex items-center gap-2"><span className="text-cyan-400">[&nbsp;]</span> Understand conduit fill percentages</p>
                </div>
                <div className="space-y-2">
                  <p className="flex items-center gap-2"><span className="text-cyan-400">[&nbsp;]</span> Can size GEC from Table 250.66</p>
                  <p className="flex items-center gap-2"><span className="text-cyan-400">[&nbsp;]</span> Can size EGC from Table 250.122</p>
                  <p className="flex items-center gap-2"><span className="text-cyan-400">[&nbsp;]</span> Motor branch circuit sizing mastered</p>
                  <p className="flex items-center gap-2"><span className="text-cyan-400">[&nbsp;]</span> Box fill calculations accurate</p>
                  <p className="flex items-center gap-2"><span className="text-cyan-400">[&nbsp;]</span> Passed 3+ practice exams at 80%+</p>
                  <p className="flex items-center gap-2"><span className="text-cyan-400">[&nbsp;]</span> Reviewed all missed practice questions</p>
                  <p className="flex items-center gap-2"><span className="text-cyan-400">[&nbsp;]</span> Calculator batteries fresh</p>
                </div>
              </div>
            </div>

            <h2>Practice Question Examples</h2>
            <p>
              The best way to prepare is to practice with questions in the same format you will see on
              the exam. Here are sample questions covering major topic areas. Try to answer each one
              before looking at the solution.
            </p>

            <h3>Question 1: Branch Circuits</h3>
            <div className="bg-white/5 rounded-xl p-6 my-6">
              <p className="text-white font-semibold mb-3">What is the maximum number of receptacle outlets permitted on a 20-amp, 120-volt general purpose branch circuit in a commercial occupancy?</p>
              <div className="mt-4 pt-4 border-t border-white/10">
                <p className="text-white/60 text-sm mb-2"><strong>Answer:</strong></p>
                <p className="text-white/80">13 receptacle outlets. Per NEC 210.21(B)(2) and 220.18, each receptacle is calculated at 180 VA. A 20A x 120V circuit = 2,400 VA. At 180 VA per receptacle: 2,400 / 180 = 13.3, rounded down to <span className="text-green-400 font-semibold">13 receptacles</span>.</p>
              </div>
            </div>

            <h3>Question 2: Grounding</h3>
            <div className="bg-white/5 rounded-xl p-6 my-6">
              <p className="text-white font-semibold mb-3">What is the minimum size copper equipment grounding conductor required for a circuit protected by a 60-amp overcurrent device?</p>
              <div className="mt-4 pt-4 border-t border-white/10">
                <p className="text-white/60 text-sm mb-2"><strong>Answer:</strong></p>
                <p className="text-white/80">Per Table 250.122, for a 60-amp overcurrent device, the minimum copper EGC is <span className="text-green-400 font-semibold">#10 AWG</span>.</p>
              </div>
            </div>

            <h3>Question 3: Overcurrent Protection</h3>
            <div className="bg-white/5 rounded-xl p-6 my-6">
              <p className="text-white font-semibold mb-3">What are the standard ampere ratings for fuses and inverse time circuit breakers as listed in the NEC?</p>
              <div className="mt-4 pt-4 border-t border-white/10">
                <p className="text-white/60 text-sm mb-2"><strong>Answer:</strong></p>
                <p className="text-white/80">Per 240.6(A): 15, 20, 25, 30, 35, 40, 45, 50, 60, 70, 80, 90, 100, 110, 125, 150, 175, 200, 225, 250, 300, 350, 400, 450, 500, 600, 700, 800, 1000, 1200, 1600, 2000, 2500, 3000, 4000, 5000, and 6000 amperes. <span className="text-green-400 font-semibold">Memorize at least the first 20 values</span> -- they appear in many calculation questions.</p>
              </div>
            </div>

            <h3>Question 4: Voltage Drop</h3>
            <div className="bg-white/5 rounded-xl p-6 my-6">
              <p className="text-white font-semibold mb-3">A 120V circuit uses #12 AWG copper conductors (6,530 CM) to supply a 16-amp load 100 feet from the panel. What is the voltage drop?</p>
              <div className="mt-4 pt-4 border-t border-white/10">
                <p className="text-white/60 text-sm mb-2"><strong>Answer:</strong></p>
                <div className="space-y-2 text-white/80">
                  <p className="font-mono">VD = (2 x K x I x D) / CM</p>
                  <p className="font-mono">VD = (2 x 12.9 x 16 x 100) / 6,530</p>
                  <p className="font-mono">VD = 41,280 / 6,530</p>
                  <p className="font-mono text-green-400">VD = 6.32 volts (5.27%)</p>
                  <p className="text-white/60 text-sm mt-2">This exceeds the NEC recommended 3% for branch circuits (210.19(A) Informational Note No. 4). Consider upsizing to #10 AWG.</p>
                </div>
              </div>
            </div>

            <h3>Question 5: Conduit Fill</h3>
            <div className="bg-white/5 rounded-xl p-6 my-6">
              <p className="text-white font-semibold mb-3">What is the maximum number of #12 AWG THHN conductors permitted in a 3/4-inch EMT conduit?</p>
              <div className="mt-4 pt-4 border-t border-white/10">
                <p className="text-white/60 text-sm mb-2"><strong>Answer:</strong></p>
                <p className="text-white/80">Per NEC Chapter 9, Table C.1 (for EMT with THHN conductors), a 3/4-inch EMT can hold a maximum of <span className="text-green-400 font-semibold">16 conductors</span> of #12 AWG THHN. You can also calculate this manually using Chapter 9 Tables 4 and 5, applying the 40% fill rule for 3+ conductors.</p>
              </div>
            </div>

            <h2>Test Day Tips</h2>
            <p>
              Your performance on exam day depends on more than just knowledge. Managing your time,
              energy, and strategy can make the difference between passing and failing.
            </p>

            <h3>Before the Exam</h3>
            <ul>
              <li><strong>Verify your code book</strong> - Make sure it has no handwritten notes, loose pages, or unauthorized materials. Some testing sites inspect your book before you enter.</li>
              <li><strong>Bring a backup calculator</strong> - If your calculator fails, you cannot leave to buy a new one. Non-programmable scientific calculators only.</li>
              <li><strong>Get a good night&apos;s sleep</strong> - A rested mind navigates code faster. Do not cram the night before.</li>
              <li><strong>Eat a solid meal</strong> - You may be sitting for 4+ hours. Bring water and a snack if allowed.</li>
              <li><strong>Arrive early</strong> - Allow time for check-in, ID verification, and settling in.</li>
            </ul>

            <h3>During the Exam</h3>
            <div className="bg-gradient-to-r from-cyan-900/30 to-purple-900/30 rounded-xl p-6 my-6">
              <div className="space-y-4">
                <div>
                  <p className="text-cyan-300 font-semibold">Strategy 1: Three-Pass Approach</p>
                  <p className="text-white/70 text-sm">First pass: Answer all questions you know immediately (theory, memorized facts). Second pass: Answer code-lookup questions. Third pass: Tackle calculation-heavy problems.</p>
                </div>
                <div>
                  <p className="text-cyan-300 font-semibold">Strategy 2: Time Budgeting</p>
                  <p className="text-white/70 text-sm">With 80 questions in 4 hours, you have 3 minutes per question. Theory questions should take under 1 minute, leaving more time for calculations. Never spend more than 5 minutes on any single question.</p>
                </div>
                <div>
                  <p className="text-cyan-300 font-semibold">Strategy 3: Eliminate and Guess</p>
                  <p className="text-white/70 text-sm">If you cannot find the answer, eliminate obviously wrong choices first. There is no penalty for guessing, so never leave a question blank.</p>
                </div>
                <div>
                  <p className="text-cyan-300 font-semibold">Strategy 4: Read the Question Carefully</p>
                  <p className="text-white/70 text-sm">Many exam questions are missed because of misread details -- copper vs aluminum, single-phase vs three-phase, minimum vs maximum. Circle key words in the question.</p>
                </div>
                <div>
                  <p className="text-cyan-300 font-semibold">Strategy 5: Trust Your Code Book</p>
                  <p className="text-white/70 text-sm">When in doubt, look it up. The answer is almost always in the NEC. Do not rely solely on memory for code-specific questions.</p>
                </div>
              </div>
            </div>

            <h3>Common Exam Mistakes to Avoid</h3>
            <div className="grid md:grid-cols-2 gap-4 my-6">
              <div className="bg-white/5 rounded-xl p-5">
                <h4 className="text-red-400 font-semibold mb-2">Using Nameplate Amps for Motors</h4>
                <p className="text-white/60 text-sm">Always use FLC from NEC tables for branch circuit and protection sizing. Nameplate is only for overload protection.</p>
              </div>
              <div className="bg-white/5 rounded-xl p-5">
                <h4 className="text-red-400 font-semibold mb-2">Wrong Temperature Column</h4>
                <p className="text-white/60 text-sm">Most terminations are rated 75 degrees C. Using the 90 degrees C column when terminations are 75 degrees C gives wrong answers.</p>
              </div>
              <div className="bg-white/5 rounded-xl p-5">
                <h4 className="text-red-400 font-semibold mb-2">Forgetting Demand Factors</h4>
                <p className="text-white/60 text-sm">Load calculations require demand factors from Tables 220.42, 220.54, and 220.55. Missing these inflates your calculated load.</p>
              </div>
              <div className="bg-white/5 rounded-xl p-5">
                <h4 className="text-red-400 font-semibold mb-2">Mixing Up GEC and EGC Tables</h4>
                <p className="text-white/60 text-sm">Table 250.66 sizes GECs based on service conductor size. Table 250.122 sizes EGCs based on overcurrent device rating. Do not confuse them.</p>
              </div>
            </div>

            <h2>Additional Resources for Exam Preparation</h2>
            <p>
              Beyond studying the NEC directly, these additional resources can reinforce your learning
              and fill knowledge gaps:
            </p>
            <ul>
              <li><strong>Mike Holt&apos;s Exam Preparation textbook</strong> - The industry standard study guide with detailed explanations and practice questions</li>
              <li><strong>Tom Henry&apos;s Key to the NEC</strong> - Excellent for learning code book navigation and understanding NEC structure</li>
              <li><strong>State-specific study guides</strong> - Some states have unique requirements beyond the NEC; check your state&apos;s licensing board</li>
              <li><strong>Practice exam software</strong> - Timed practice exams simulate real test conditions and identify weak areas</li>
              <li><strong>Study groups</strong> - Explaining concepts to others reinforces your own understanding</li>
              <li><strong>Ampora app</strong> - Use AI-powered NEC code lookups to verify your understanding and practice finding code references quickly</li>
            </ul>

            <h2>Use Ampora to Accelerate Your Exam Prep</h2>
            <p>
              Preparing for the journeyman exam means being able to find NEC code references quickly and
              perform calculations accurately under pressure. Ampora&apos;s AI-powered code lookup and built-in
              electrical calculators let you practice code navigation, verify your calculation work, and
              build the speed you need to pass with confidence. Download it free and start studying smarter
              today.
            </p>
          </div>

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

          {/* Related Posts */}
          <div className="mt-12 pt-8 border-t border-white/10">
            <h3 className="text-xl font-display font-bold mb-6">Related Articles</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <Link href="/blog/electrical-apprenticeship-career-guide" className="group bg-white/5 hover:bg-white/10 rounded-xl p-6 transition-all">
                <h4 className="font-semibold group-hover:text-purple-400 transition-colors">Electrical Apprenticeship Career Guide</h4>
                <p className="text-white/60 text-sm mt-2">Complete guide to becoming a licensed electrician through apprenticeship programs.</p>
              </Link>
              <Link href="/blog/nec-article-250-grounding-guide" className="group bg-white/5 hover:bg-white/10 rounded-xl p-6 transition-all">
                <h4 className="font-semibold group-hover:text-purple-400 transition-colors">NEC Article 250: Grounding Guide</h4>
                <p className="text-white/60 text-sm mt-2">Deep dive into grounding and bonding requirements per Article 250.</p>
              </Link>
            </div>
          </div>
        </article>
      </div>
    </main>
  );
}
