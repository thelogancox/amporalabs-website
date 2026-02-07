import { Metadata } from "next";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import { BreadcrumbJsonLd, BlogPostingJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Commercial Kitchen Electrical Requirements: NEC Code Guide for Electricians",
  description: "Complete guide to commercial kitchen electrical installation. Learn NEC requirements for equipment circuits, hood ventilation wiring, cord-and-plug vs hardwired connections, and commercial cooking equipment power needs.",
  keywords: [
    "commercial kitchen electrical",
    "commercial kitchen NEC requirements",
    "restaurant electrical wiring",
    "commercial cooking equipment electrical",
    "kitchen hood ventilation wiring",
    "NEC 422 commercial kitchen",
    "commercial kitchen circuits",
    "hardwired vs cord and plug kitchen",
    "commercial kitchen electrical load",
    "restaurant electrical installation",
    "commercial exhaust hood wiring",
    "kitchen equipment branch circuits",
    "commercial kitchen GFCI requirements",
    "food service electrical code",
    "commercial cooking appliance circuits"
  ],
  alternates: {
    canonical: "https://amporalabs.com/blog/commercial-kitchen-electrical-requirements",
  },
  openGraph: {
    title: "Commercial Kitchen Electrical Requirements: NEC Code Guide - Ampora",
    description: "Complete NEC requirements for commercial kitchen electrical installation including equipment circuits, hood ventilation, and connection methods.",
    url: "https://amporalabs.com/blog/commercial-kitchen-electrical-requirements",
    type: "article",
  },
};

function HeroIllustration() {
  return (
    <svg viewBox="0 0 400 180" className="w-full h-40 md:h-48" aria-label="Commercial kitchen electrical layout illustration">
      {/* Kitchen Outline */}
      <rect x="20" y="20" width="360" height="140" rx="4" fill="#1f2937" stroke="#6b7280" strokeWidth="1"/>

      {/* Hood System */}
      <rect x="80" y="30" width="200" height="25" rx="2" fill="#374151" stroke="#22c55e" strokeWidth="2"/>
      <text x="180" y="47" textAnchor="middle" fill="#22c55e" fontSize="9" fontWeight="bold">EXHAUST HOOD - 480V 3PH</text>

      {/* Range/Cooking Equipment */}
      <rect x="80" y="70" width="60" height="50" rx="3" fill="#1f2937" stroke="#f59e0b" strokeWidth="2"/>
      <text x="110" y="90" textAnchor="middle" fill="#f59e0b" fontSize="8" fontWeight="bold">RANGE</text>
      <text x="110" y="102" textAnchor="middle" fill="#9ca3af" fontSize="7">208V 60A</text>

      {/* Fryer */}
      <rect x="150" y="70" width="45" height="50" rx="3" fill="#1f2937" stroke="#f59e0b" strokeWidth="2"/>
      <text x="172" y="90" textAnchor="middle" fill="#f59e0b" fontSize="8" fontWeight="bold">FRYER</text>
      <text x="172" y="102" textAnchor="middle" fill="#9ca3af" fontSize="7">208V 50A</text>

      {/* Griddle */}
      <rect x="205" y="70" width="55" height="50" rx="3" fill="#1f2937" stroke="#f59e0b" strokeWidth="2"/>
      <text x="232" y="90" textAnchor="middle" fill="#f59e0b" fontSize="8" fontWeight="bold">GRIDDLE</text>
      <text x="232" y="102" textAnchor="middle" fill="#9ca3af" fontSize="7">208V 40A</text>

      {/* Refrigeration */}
      <rect x="290" y="60" width="70" height="70" rx="3" fill="#1f2937" stroke="#3b82f6" strokeWidth="2"/>
      <text x="325" y="90" textAnchor="middle" fill="#3b82f6" fontSize="8" fontWeight="bold">WALK-IN</text>
      <text x="325" y="102" textAnchor="middle" fill="#9ca3af" fontSize="7">208V 30A</text>

      {/* Dishwasher */}
      <rect x="30" y="80" width="40" height="45" rx="3" fill="#1f2937" stroke="#8b5cf6" strokeWidth="2"/>
      <text x="50" y="100" textAnchor="middle" fill="#8b5cf6" fontSize="7" fontWeight="bold">DISH</text>
      <text x="50" y="112" textAnchor="middle" fill="#9ca3af" fontSize="6">208V 40A</text>

      {/* Panel */}
      <rect x="30" y="30" width="35" height="40" rx="2" fill="#374151" stroke="#22c55e" strokeWidth="2"/>
      <text x="47" y="47" textAnchor="middle" fill="#22c55e" fontSize="7" fontWeight="bold">PANEL</text>
      <text x="47" y="58" textAnchor="middle" fill="#9ca3af" fontSize="6">200A</text>

      {/* Circuit Lines */}
      <line x1="65" y1="50" x2="80" y2="42" stroke="#22c55e" strokeWidth="2" strokeDasharray="4,2"/>
      <line x1="65" y1="50" x2="80" y2="95" stroke="#f59e0b" strokeWidth="2" strokeDasharray="4,2"/>
      <line x1="47" y1="70" x2="47" y2="80" stroke="#8b5cf6" strokeWidth="2" strokeDasharray="4,2"/>

      {/* Legend */}
      <g transform="translate(90, 135)">
        <rect x="0" y="0" width="8" height="8" fill="#f59e0b"/>
        <text x="12" y="7" fill="#9ca3af" fontSize="7">Cooking</text>
        <rect x="55" y="0" width="8" height="8" fill="#3b82f6"/>
        <text x="67" y="7" fill="#9ca3af" fontSize="7">Refrigeration</text>
        <rect x="130" y="0" width="8" height="8" fill="#8b5cf6"/>
        <text x="142" y="7" fill="#9ca3af" fontSize="7">Sanitation</text>
        <rect x="195" y="0" width="8" height="8" fill="#22c55e"/>
        <text x="207" y="7" fill="#9ca3af" fontSize="7">Ventilation</text>
      </g>
    </svg>
  );
}

export default function CommercialKitchenElectricalPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navigation />
      <div className="pt-20">
        <BreadcrumbJsonLd
          items={[
            { name: "Home", url: "https://amporalabs.com" },
            { name: "Blog", url: "https://amporalabs.com/blog" },
            { name: "Commercial Kitchen Electrical Requirements", url: "https://amporalabs.com/blog/commercial-kitchen-electrical-requirements" },
          ]}
        />
        <BlogPostingJsonLd
          headline="Commercial Kitchen Electrical Requirements: NEC Code Guide for Electricians"
          description="Complete guide to commercial kitchen electrical installation including NEC requirements, equipment circuits, and connection methods."
          datePublished="2025-01-15"
          dateModified="2025-01-15"
          url="https://amporalabs.com/blog/commercial-kitchen-electrical-requirements"
          wordCount={3200}
          keywords={["commercial kitchen electrical", "NEC requirements", "restaurant electrical", "kitchen equipment wiring"]}
        />

        <article className="max-w-4xl mx-auto px-6 py-12">
          {/* Breadcrumb */}
          <nav className="text-sm text-white/60 mb-8">
            <Link href="/" className="hover:text-white">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/blog" className="hover:text-white">Blog</Link>
            <span className="mx-2">/</span>
            <span className="text-white">Commercial Kitchen Electrical Requirements</span>
          </nav>

          {/* Article Header */}
          <header className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <span className="px-3 py-1 bg-green-600/30 text-green-300 text-sm font-medium rounded-full">
                Installation
              </span>
              <span className="text-white/40 text-sm">13 min read</span>
              <span className="text-white/40 text-sm">January 15, 2025</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6 leading-tight">
              Commercial Kitchen Electrical Requirements: NEC Code Guide for Electricians
            </h1>
            <p className="text-xl text-white/70">
              Master commercial kitchen electrical installation with this comprehensive guide. From equipment circuits and hood ventilation to cord-and-plug vs hardwired connections, learn every NEC requirement for food service electrical work.
            </p>
          </header>

          <div className="mb-12 bg-gradient-to-br from-orange-900/20 to-green-900/20 rounded-2xl p-6 border border-white/10">
            <HeroIllustration />
          </div>

          {/* Quick Reference CTA */}
          <div className="bg-purple-900/30 border border-purple-500/30 rounded-2xl p-6 mb-12">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div>
                <h3 className="font-display font-bold text-lg mb-1">Calculate Kitchen Loads Instantly</h3>
                <p className="text-white/70 text-sm">Use Ampora's load calculator for accurate commercial kitchen demand calculations.</p>
              </div>
              <a
                href="https://apps.apple.com/us/app/ampora/id6753693522"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-purple-600 text-white font-semibold rounded-full hover:bg-purple-500 transition-colors whitespace-nowrap"
              >
                Download Free
              </a>
            </div>
          </div>

          {/* Table of Contents */}
          <div className="bg-white/5 rounded-2xl p-6 mb-12">
            <h2 className="font-display font-bold mb-4">In This Guide</h2>
            <ul className="space-y-2 text-white/70">
              <li><a href="#overview" className="hover:text-purple-400">Overview: Commercial Kitchen Electrical</a></li>
              <li><a href="#nec-articles" className="hover:text-purple-400">Applicable NEC Articles</a></li>
              <li><a href="#equipment-circuits" className="hover:text-purple-400">Equipment Circuit Requirements</a></li>
              <li><a href="#hood-ventilation" className="hover:text-purple-400">Hood Ventilation Wiring</a></li>
              <li><a href="#cord-vs-hardwired" className="hover:text-purple-400">Cord-and-Plug vs Hardwired Connections</a></li>
              <li><a href="#gfci-requirements" className="hover:text-purple-400">GFCI Requirements in Kitchens</a></li>
              <li><a href="#load-calculations" className="hover:text-purple-400">Commercial Kitchen Load Calculations</a></li>
              <li><a href="#common-equipment" className="hover:text-purple-400">Common Equipment Power Requirements</a></li>
              <li><a href="#installation-tips" className="hover:text-purple-400">Installation Best Practices</a></li>
            </ul>
          </div>

          {/* Article Content */}
          <div className="prose prose-invert prose-lg max-w-none">

            <section id="overview" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Overview: Commercial Kitchen Electrical</h2>
              <p className="text-white/80 mb-4">
                Commercial kitchen electrical installations are among the most demanding projects an electrician will encounter. These high-density electrical environments combine massive cooking loads, refrigeration systems, ventilation equipment, and sanitation appliances, often in tight spaces with moisture, grease, and extreme temperatures.
              </p>
              <p className="text-white/80 mb-4">
                A typical commercial kitchen may require:
              </p>
              <ul className="list-disc list-inside text-white/70 space-y-2 mb-4">
                <li><strong>400-800 amps</strong> of electrical service for a medium restaurant</li>
                <li><strong>Multiple voltage systems</strong> (120V, 208V, 240V, 480V)</li>
                <li><strong>Dedicated circuits</strong> for each major piece of cooking equipment</li>
                <li><strong>Interlocked ventilation systems</strong> tied to cooking equipment</li>
                <li><strong>Emergency shutoffs</strong> and fire suppression integration</li>
              </ul>
              <div className="bg-orange-900/30 rounded-xl p-6 my-6">
                <p className="text-white/90">
                  <strong>Important:</strong> Commercial kitchen electrical work requires coordination with the hood manufacturer, fire suppression contractor, equipment suppliers, and the AHJ. Get equipment cut sheets early in the project to avoid costly changes.
                </p>
              </div>
            </section>

            <section id="nec-articles" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Applicable NEC Articles</h2>
              <p className="text-white/80 mb-4">
                Commercial kitchen installations fall under multiple NEC articles. Understanding which apply to your installation is critical for code compliance:
              </p>
              <div className="overflow-x-auto my-6">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-white/20">
                      <th className="text-left py-3 px-4 text-white/60">NEC Article</th>
                      <th className="text-left py-3 px-4 text-white/60">Title</th>
                      <th className="text-left py-3 px-4 text-white/60">Application</th>
                    </tr>
                  </thead>
                  <tbody className="text-white/80">
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-mono">Article 210</td>
                      <td className="py-3 px-4">Branch Circuits</td>
                      <td className="py-3 px-4 text-white/60">General circuit requirements</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-mono">Article 220</td>
                      <td className="py-3 px-4">Branch-Circuit, Feeder, and Service Load Calculations</td>
                      <td className="py-3 px-4 text-white/60">Kitchen load calculations</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-mono">Article 400</td>
                      <td className="py-3 px-4">Flexible Cords and Flexible Cables</td>
                      <td className="py-3 px-4 text-white/60">Cord-connected equipment</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-mono">Article 409</td>
                      <td className="py-3 px-4">Industrial Control Panels</td>
                      <td className="py-3 px-4 text-white/60">Hood control systems</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-mono">Article 422</td>
                      <td className="py-3 px-4">Appliances</td>
                      <td className="py-3 px-4 text-white/60">Kitchen appliance connections</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-mono">Article 430</td>
                      <td className="py-3 px-4">Motors, Motor Circuits</td>
                      <td className="py-3 px-4 text-white/60">Exhaust fans, compressors</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-mono">Article 440</td>
                      <td className="py-3 px-4">Air-Conditioning and Refrigerating Equipment</td>
                      <td className="py-3 px-4 text-white/60">Walk-ins, reach-ins</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-mono">Article 645</td>
                      <td className="py-3 px-4">Information Technology Equipment</td>
                      <td className="py-3 px-4 text-white/60">POS systems, kitchen displays</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section id="equipment-circuits" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Equipment Circuit Requirements</h2>
              <p className="text-white/80 mb-4">
                Each piece of commercial cooking equipment typically requires a dedicated branch circuit. Per NEC 422.10, the branch circuit rating must be calculated based on the appliance's nameplate rating.
              </p>

              <h3 className="text-xl font-display font-semibold mb-3 text-cyan-400">Branch Circuit Sizing</h3>
              <p className="text-white/80 mb-4">
                For cord-and-plug connected appliances, NEC 422.10(A) requires:
              </p>
              <div className="bg-white/5 rounded-xl p-6 my-6">
                <ul className="space-y-2 text-white/70">
                  <li><strong>Single appliance circuits:</strong> Branch circuit rating shall not exceed 150% of the appliance rating</li>
                  <li><strong>Appliances rated 13.3A or less:</strong> May be supplied by 15A or 20A branch circuit</li>
                  <li><strong>Appliances rated over 13.3A:</strong> Branch circuit rating not less than appliance rating</li>
                </ul>
              </div>

              <h3 className="text-xl font-display font-semibold mb-3 text-cyan-400">Disconnect Requirements</h3>
              <p className="text-white/80 mb-4">
                Per NEC 422.31-35, disconnecting means must be provided:
              </p>
              <ul className="list-disc list-inside text-white/70 space-y-2 mb-4">
                <li><strong>Permanently connected appliances:</strong> Accessible disconnect within sight or lockable in off position</li>
                <li><strong>Cord-and-plug connected:</strong> Plug serves as the disconnect if accessible</li>
                <li><strong>Appliances over 300 VA:</strong> Disconnect must be rated to interrupt maximum load</li>
              </ul>

              <div className="bg-cyan-900/30 rounded-xl p-6 my-6">
                <h4 className="font-semibold text-cyan-400 mb-3">Common Equipment Circuit Requirements</h4>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm">
                  <div>
                    <p className="text-white/60">Commercial Range</p>
                    <p className="font-mono text-cyan-400">208V 3PH 60A</p>
                  </div>
                  <div>
                    <p className="text-white/60">Deep Fryer (Gas)</p>
                    <p className="font-mono text-cyan-400">120V 1PH 20A</p>
                  </div>
                  <div>
                    <p className="text-white/60">Deep Fryer (Electric)</p>
                    <p className="font-mono text-cyan-400">208V 3PH 50A</p>
                  </div>
                  <div>
                    <p className="text-white/60">Convection Oven</p>
                    <p className="font-mono text-cyan-400">208V 1PH 30A</p>
                  </div>
                  <div>
                    <p className="text-white/60">Griddle (36")</p>
                    <p className="font-mono text-cyan-400">208V 3PH 40A</p>
                  </div>
                  <div>
                    <p className="text-white/60">Salamander/Broiler</p>
                    <p className="font-mono text-cyan-400">208V 1PH 30A</p>
                  </div>
                </div>
              </div>
            </section>

            <section id="hood-ventilation" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Hood Ventilation Wiring</h2>
              <p className="text-white/80 mb-4">
                Commercial exhaust hood systems require careful electrical coordination. These systems include exhaust fans, makeup air units, fire suppression controls, and interlocking with cooking equipment.
              </p>

              <h3 className="text-xl font-display font-semibold mb-3 text-green-400">Hood System Components</h3>
              <ul className="list-disc list-inside text-white/70 space-y-2 mb-4">
                <li><strong>Exhaust fan(s):</strong> Typically 480V 3-phase, 2-10 HP depending on CFM</li>
                <li><strong>Makeup air unit (MAU):</strong> Supplies tempered replacement air, 480V 3-phase</li>
                <li><strong>Variable frequency drive (VFD):</strong> For demand ventilation control</li>
                <li><strong>Hood control panel:</strong> Interfaces with fire suppression and equipment</li>
                <li><strong>Fire suppression system:</strong> Typically low-voltage connection to shunt trip</li>
              </ul>

              <div className="bg-green-900/30 rounded-xl p-6 my-6">
                <h4 className="font-semibold text-green-400 mb-3">Interlock Requirements</h4>
                <p className="text-white/80 mb-3">
                  Per IMC 507.2.1 and many local codes, cooking equipment must be interlocked with the exhaust hood system:
                </p>
                <ul className="list-disc list-inside text-white/70 space-y-1">
                  <li>Cooking equipment cannot operate unless exhaust fan is running</li>
                  <li>Fire suppression activation must shut off all cooking equipment</li>
                  <li>Gas valves must close on fire suppression activation</li>
                  <li>Some AHJs require exhaust airflow proving before equipment energizes</li>
                </ul>
              </div>

              <h3 className="text-xl font-display font-semibold mb-3 text-green-400">Shunt Trip Requirements</h3>
              <p className="text-white/80 mb-4">
                Fire suppression systems in commercial kitchens typically require shunt trip breakers on all cooking equipment. When the fire suppression system activates:
              </p>
              <div className="bg-white/5 rounded-xl p-6 my-6">
                <ol className="list-decimal list-inside text-white/70 space-y-2">
                  <li>Fire suppression control panel sends 24V signal to shunt trip coil</li>
                  <li>Shunt trip breaker opens, de-energizing cooking equipment</li>
                  <li>Gas solenoid valves close (if gas equipment present)</li>
                  <li>Equipment remains off until manually reset after inspection</li>
                </ol>
              </div>
              <p className="text-white/80 mb-4">
                Wire the shunt trip circuit with 14 AWG minimum, protected by a 15A breaker. Verify shunt trip voltage matches the fire suppression panel output (typically 24VDC or 120VAC).
              </p>
            </section>

            <section id="cord-vs-hardwired" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Cord-and-Plug vs Hardwired Connections</h2>
              <p className="text-white/80 mb-4">
                The choice between cord-and-plug and hardwired connections depends on NEC requirements, equipment manufacturer specifications, and practical considerations for the kitchen layout.
              </p>

              <div className="grid md:grid-cols-2 gap-6 my-6">
                <div className="bg-purple-900/30 rounded-xl p-6">
                  <h3 className="font-semibold text-purple-400 mb-3">Cord-and-Plug Advantages</h3>
                  <ul className="list-disc list-inside text-white/70 space-y-2 text-sm">
                    <li>Easy equipment removal for cleaning</li>
                    <li>Plug serves as disconnect per NEC 422.33</li>
                    <li>Faster equipment replacement</li>
                    <li>No permit needed for equipment swap</li>
                    <li>Flexibility for layout changes</li>
                  </ul>
                </div>
                <div className="bg-cyan-900/30 rounded-xl p-6">
                  <h3 className="font-semibold text-cyan-400 mb-3">Hardwired Advantages</h3>
                  <ul className="list-disc list-inside text-white/70 space-y-2 text-sm">
                    <li>More secure connection</li>
                    <li>Required for some high-amperage equipment</li>
                    <li>No cord damage from grease/heat</li>
                    <li>Cleaner appearance</li>
                    <li>Some equipment requires it</li>
                  </ul>
                </div>
              </div>

              <h3 className="text-xl font-display font-semibold mb-3 text-cyan-400">NEC Requirements for Cord Connection</h3>
              <p className="text-white/80 mb-4">
                Per NEC 422.16, cord-and-plug connection is permitted for kitchen equipment when:
              </p>
              <div className="bg-white/5 rounded-xl p-6 my-6">
                <ul className="list-disc list-inside text-white/70 space-y-2">
                  <li><strong>Cord length:</strong> 3 feet minimum, 6 feet maximum (NEC 422.16(B)(2))</li>
                  <li><strong>Cord type:</strong> Type S, SO, ST, STO, SJO, or SJTO (grease and moisture resistant)</li>
                  <li><strong>Strain relief:</strong> Must be provided at equipment connection</li>
                  <li><strong>Receptacle location:</strong> Must not be behind equipment where inaccessible</li>
                  <li><strong>Receptacle rating:</strong> Must match or exceed equipment amperage</li>
                </ul>
              </div>

              <div className="bg-orange-900/30 rounded-xl p-6 my-6">
                <h4 className="font-semibold text-orange-400 mb-3">Equipment That Must Be Hardwired</h4>
                <p className="text-white/70 mb-2">Some equipment must be permanently connected:</p>
                <ul className="list-disc list-inside text-white/70 space-y-1 text-sm">
                  <li>Equipment with no cord provision from manufacturer</li>
                  <li>Equipment exceeding receptacle ratings (typically over 50A single-phase)</li>
                  <li>Exhaust hoods and makeup air units</li>
                  <li>Walk-in refrigerator/freezer compressors (usually)</li>
                  <li>Dishwashers with integral booster heaters</li>
                </ul>
              </div>
            </section>

            <section id="gfci-requirements" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">GFCI Requirements in Commercial Kitchens</h2>
              <p className="text-white/80 mb-4">
                NEC 210.8(B) requires GFCI protection for 125V through 250V receptacles in commercial kitchens. Understanding the specific requirements prevents both nuisance tripping and code violations.
              </p>

              <h3 className="text-xl font-display font-semibold mb-3 text-yellow-400">Required GFCI Locations</h3>
              <p className="text-white/80 mb-4">
                Per NEC 210.8(B)(2), GFCI protection is required for:
              </p>
              <ul className="list-disc list-inside text-white/70 space-y-2 mb-4">
                <li><strong>Kitchens:</strong> All 125V-250V, single-phase, 50A or less receptacles</li>
                <li><strong>Within 6 feet of sinks:</strong> All 125V-250V receptacles</li>
                <li><strong>Dishwasher locations:</strong> Receptacles serving cord-and-plug dishwashers</li>
                <li><strong>Three-phase exemption:</strong> 3-phase receptacles are exempt from 210.8(B)</li>
              </ul>

              <div className="bg-yellow-900/30 rounded-xl p-6 my-6">
                <h4 className="font-semibold text-yellow-400 mb-3">Nuisance Tripping Prevention</h4>
                <p className="text-white/80 mb-3">
                  Commercial kitchen GFCI circuits are prone to nuisance tripping. To minimize issues:
                </p>
                <ul className="list-disc list-inside text-white/70 space-y-1 text-sm">
                  <li>Use dedicated circuits for high-inrush equipment</li>
                  <li>Install GFCI breakers rather than receptacles in wet locations</li>
                  <li>Ensure proper grounding of all equipment</li>
                  <li>Keep receptacles away from direct water spray</li>
                  <li>Consider commercial-grade GFCI devices rated for harsh environments</li>
                </ul>
              </div>
            </section>

            <section id="load-calculations" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Commercial Kitchen Load Calculations</h2>
              <p className="text-white/80 mb-4">
                Commercial kitchen load calculations follow NEC Article 220. The key is obtaining accurate nameplate data from equipment specifications.
              </p>

              <h3 className="text-xl font-display font-semibold mb-3 text-cyan-400">Demand Factor Application</h3>
              <p className="text-white/80 mb-4">
                Per NEC 220.56, commercial kitchen equipment can use demand factors when calculating feeder and service loads:
              </p>
              <div className="overflow-x-auto my-6">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-white/20">
                      <th className="text-left py-3 px-4 text-white/60">Number of Units</th>
                      <th className="text-left py-3 px-4 text-white/60">Demand Factor</th>
                    </tr>
                  </thead>
                  <tbody className="text-white/80">
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">1-2</td>
                      <td className="py-3 px-4 font-mono">100%</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">3</td>
                      <td className="py-3 px-4 font-mono">90%</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">4</td>
                      <td className="py-3 px-4 font-mono">80%</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">5</td>
                      <td className="py-3 px-4 font-mono">70%</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4">6 or more</td>
                      <td className="py-3 px-4 font-mono">65%</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="bg-white/5 rounded-xl p-6 my-6">
                <h4 className="font-semibold mb-3">Sample Load Calculation</h4>
                <p className="text-white/70 mb-3">Small restaurant kitchen with 6 cooking appliances:</p>
                <div className="font-mono text-sm text-white/70 space-y-1">
                  <p>Range: 208V 3PH, 18kW = 18,000VA</p>
                  <p>Griddle: 208V 3PH, 12kW = 12,000VA</p>
                  <p>Fryer #1: 208V 3PH, 14kW = 14,000VA</p>
                  <p>Fryer #2: 208V 3PH, 14kW = 14,000VA</p>
                  <p>Convection Oven: 208V 1PH, 10kW = 10,000VA</p>
                  <p>Salamander: 208V 1PH, 6kW = 6,000VA</p>
                  <p className="pt-2 border-t border-white/20">Total Connected: 74,000VA</p>
                  <p>With 65% Demand Factor: <strong>48,100VA</strong></p>
                </div>
              </div>
            </section>

            <section id="common-equipment" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Common Equipment Power Requirements</h2>
              <p className="text-white/80 mb-4">
                Reference table for typical commercial kitchen equipment electrical requirements:
              </p>
              <div className="overflow-x-auto my-6">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-white/20">
                      <th className="text-left py-3 px-4 text-white/60">Equipment</th>
                      <th className="text-left py-3 px-4 text-white/60">Voltage</th>
                      <th className="text-left py-3 px-4 text-white/60">Typical Amps</th>
                      <th className="text-left py-3 px-4 text-white/60">Connection</th>
                    </tr>
                  </thead>
                  <tbody className="text-white/80">
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">6-Burner Range</td>
                      <td className="py-3 px-4">208V 3PH</td>
                      <td className="py-3 px-4 font-mono">50-60A</td>
                      <td className="py-3 px-4 text-white/60">Hardwired or Cord</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">Commercial Fryer</td>
                      <td className="py-3 px-4">208V 3PH</td>
                      <td className="py-3 px-4 font-mono">40-50A</td>
                      <td className="py-3 px-4 text-white/60">Cord Preferred</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">36" Griddle</td>
                      <td className="py-3 px-4">208V 3PH</td>
                      <td className="py-3 px-4 font-mono">35-45A</td>
                      <td className="py-3 px-4 text-white/60">Cord Preferred</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">Convection Oven</td>
                      <td className="py-3 px-4">208V 1PH</td>
                      <td className="py-3 px-4 font-mono">25-35A</td>
                      <td className="py-3 px-4 text-white/60">Cord Preferred</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">Combi Oven</td>
                      <td className="py-3 px-4">208V 3PH</td>
                      <td className="py-3 px-4 font-mono">45-80A</td>
                      <td className="py-3 px-4 text-white/60">Hardwired</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">Commercial Dishwasher</td>
                      <td className="py-3 px-4">208V 3PH</td>
                      <td className="py-3 px-4 font-mono">30-50A</td>
                      <td className="py-3 px-4 text-white/60">Hardwired</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">Walk-In Compressor</td>
                      <td className="py-3 px-4">208V 1PH/3PH</td>
                      <td className="py-3 px-4 font-mono">15-30A</td>
                      <td className="py-3 px-4 text-white/60">Hardwired</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">Reach-In Refrigerator</td>
                      <td className="py-3 px-4">120V 1PH</td>
                      <td className="py-3 px-4 font-mono">6-12A</td>
                      <td className="py-3 px-4 text-white/60">Cord</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">Ice Machine</td>
                      <td className="py-3 px-4">120V 1PH</td>
                      <td className="py-3 px-4 font-mono">8-15A</td>
                      <td className="py-3 px-4 text-white/60">Cord</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4">Exhaust Hood Fan</td>
                      <td className="py-3 px-4">480V 3PH</td>
                      <td className="py-3 px-4 font-mono">10-30A</td>
                      <td className="py-3 px-4 text-white/60">Hardwired</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section id="installation-tips" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Installation Best Practices</h2>

              <div className="space-y-6">
                <div className="bg-white/5 rounded-xl p-6">
                  <h3 className="font-semibold text-cyan-400 mb-3">1. Conduit and Wiring</h3>
                  <ul className="list-disc list-inside text-white/70 space-y-2 text-sm">
                    <li>Use EMT or rigid conduit - avoid flex in areas subject to physical damage</li>
                    <li>Install conduit at least 18 inches above floor for cleaning access</li>
                    <li>Seal all conduit penetrations to prevent grease migration</li>
                    <li>Use watertight fittings near wash-down areas</li>
                    <li>Consider liquidtight flexible conduit for final equipment connections</li>
                  </ul>
                </div>

                <div className="bg-white/5 rounded-xl p-6">
                  <h3 className="font-semibold text-green-400 mb-3">2. Receptacle Placement</h3>
                  <ul className="list-disc list-inside text-white/70 space-y-2 text-sm">
                    <li>Install receptacles at equipment height, not behind equipment</li>
                    <li>Use stainless steel covers in food prep areas</li>
                    <li>Maintain access to all receptacles for inspection</li>
                    <li>Install weatherproof covers in wash-down areas</li>
                    <li>Mark each receptacle with voltage, phase, and circuit number</li>
                  </ul>
                </div>

                <div className="bg-white/5 rounded-xl p-6">
                  <h3 className="font-semibold text-purple-400 mb-3">3. Panel Location and Access</h3>
                  <ul className="list-disc list-inside text-white/70 space-y-2 text-sm">
                    <li>Locate panels outside the kitchen if possible to prevent grease contamination</li>
                    <li>If inside kitchen, use NEMA 4X stainless steel enclosures</li>
                    <li>Maintain 36" clear working space per NEC 110.26</li>
                    <li>Install emergency disconnect at main exit per NEC 645.10</li>
                    <li>Clearly label all circuits with equipment served</li>
                  </ul>
                </div>

                <div className="bg-white/5 rounded-xl p-6">
                  <h3 className="font-semibold text-orange-400 mb-3">4. Coordination and Planning</h3>
                  <ul className="list-disc list-inside text-white/70 space-y-2 text-sm">
                    <li>Obtain equipment cut sheets before rough-in</li>
                    <li>Coordinate with plumber for equipment placement</li>
                    <li>Verify gas vs electric equipment selections early</li>
                    <li>Plan for future equipment changes with spare circuits</li>
                    <li>Document all underground conduit locations</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* CTA Section */}
            <section className="bg-gradient-to-r from-purple-900/30 to-cyan-900/30 rounded-2xl p-8 my-12">
              <h2 className="text-2xl font-display font-bold mb-4 text-center">
                Simplify Commercial Kitchen Calculations
              </h2>
              <p className="text-white/70 mb-6 text-center">
                Ampora provides instant load calculations, demand factors, and NEC code references for commercial kitchen projects.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <a
                  href="https://apps.apple.com/us/app/ampora/id6753693522"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-purple-600 text-white font-semibold rounded-full hover:bg-purple-500 transition-colors text-center"
                >
                  Download Ampora Free
                </a>
                <Link
                  href="/calculators"
                  className="px-6 py-3 bg-white text-black font-semibold rounded-full hover:bg-white/90 transition-colors text-center"
                >
                  Try Web Calculators
                </Link>
              </div>
            </section>

            {/* Related Articles */}
            <section className="mt-12">
              <h2 className="text-2xl font-display font-bold mb-6">Related Articles</h2>
              <div className="grid md:grid-cols-2 gap-4">
                <Link href="/blog/3-phase-power-calculations" className="bg-white/5 hover:bg-white/10 rounded-xl p-6 transition-colors">
                  <span className="text-cyan-400 text-sm">Calculations</span>
                  <h3 className="font-semibold mt-2">3-Phase Power Calculations Guide</h3>
                </Link>
                <Link href="/blog/nec-article-210-branch-circuits-guide" className="bg-white/5 hover:bg-white/10 rounded-xl p-6 transition-colors">
                  <span className="text-purple-400 text-sm">NEC Code</span>
                  <h3 className="font-semibold mt-2">NEC Article 210: Branch Circuits Guide</h3>
                </Link>
                <Link href="/blog/nec-article-240-overcurrent-protection" className="bg-white/5 hover:bg-white/10 rounded-xl p-6 transition-colors">
                  <span className="text-purple-400 text-sm">NEC Code</span>
                  <h3 className="font-semibold mt-2">NEC Article 240: Overcurrent Protection</h3>
                </Link>
                <Link href="/blog/electrical-safety-nfpa-70e" className="bg-white/5 hover:bg-white/10 rounded-xl p-6 transition-colors">
                  <span className="text-red-400 text-sm">Safety</span>
                  <h3 className="font-semibold mt-2">NFPA 70E Electrical Safety Requirements</h3>
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
          <p className="text-sm text-white/40">© 2025 Ampora Labs</p>
        </div>
      </footer>
    </main>
  );
}
