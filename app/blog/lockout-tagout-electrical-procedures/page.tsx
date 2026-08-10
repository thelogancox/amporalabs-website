import { Metadata } from "next";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import { BreadcrumbJsonLd, BlogPostingJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Lockout/Tagout (LOTO) Procedures for Electrical Work",
  description: "Complete guide to lockout/tagout (LOTO) procedures for electrical work. Learn OSHA 29 CFR 1910.147 requirements, NFPA 70E compliance, the six steps of LOTO, energy source identification, group lockout procedures, verification testing, and common LOTO violations.",
  keywords: [
    "lockout tagout",
    "LOTO procedures",
    "lockout tagout electrical",
    "OSHA 1910.147",
    "NFPA 70E lockout",
    "energy isolation",
    "zero energy verification",
    "lockout devices",
    "group lockout procedures",
    "absence of voltage testing",
  ],
  alternates: {
    canonical: "https://amporalabs.com/blog/lockout-tagout-electrical-procedures",
  },
  openGraph: {
    title: "Lockout/Tagout (LOTO) Procedures for Electrical Work - Ampora",
    description: "Master LOTO procedures for electrical safety. OSHA and NFPA 70E requirements, six-step lockout process, verification testing, and compliance guidance.",
    url: "https://amporalabs.com/blog/lockout-tagout-electrical-procedures",
    type: "article",
    publishedTime: "2025-04-18",
  },
};

function HeroIllustration() {
  return (
    <svg viewBox="0 0 400 180" className="w-full h-40 md:h-48" aria-label="Breaker panel with padlock and danger tag illustration">
      {/* Background */}
      <rect x="10" y="10" width="380" height="160" rx="4" fill="#1f2937" stroke="#374151" strokeWidth="1"/>

      {/* Breaker Panel Body */}
      <rect x="120" y="20" width="160" height="140" rx="4" fill="#111827" stroke="#4b5563" strokeWidth="2"/>
      <rect x="130" y="28" width="140" height="124" fill="#0f172a" stroke="#374151" strokeWidth="1"/>

      {/* Panel Label */}
      <rect x="160" y="30" width="80" height="12" rx="1" fill="#1e293b"/>
      <text x="200" y="39" textAnchor="middle" fill="#9ca3af" fontSize="7" fontWeight="bold">PANEL A</text>

      {/* Breakers - Left Column */}
      <rect x="138" y="48" width="55" height="10" rx="1" fill="#374151" stroke="#4b5563" strokeWidth="0.5"/>
      <rect x="142" y="50" width="12" height="6" rx="1" fill="#22c55e"/>
      <text x="168" y="56" fill="#9ca3af" fontSize="5">20A</text>

      <rect x="138" y="62" width="55" height="10" rx="1" fill="#374151" stroke="#4b5563" strokeWidth="0.5"/>
      <rect x="142" y="64" width="12" height="6" rx="1" fill="#22c55e"/>
      <text x="168" y="70" fill="#9ca3af" fontSize="5">20A</text>

      <rect x="138" y="76" width="55" height="10" rx="1" fill="#374151" stroke="#4b5563" strokeWidth="0.5"/>
      <rect x="142" y="78" width="12" height="6" rx="1" fill="#ef4444"/>
      <text x="168" y="84" fill="#9ca3af" fontSize="5">30A</text>

      <rect x="138" y="90" width="55" height="10" rx="1" fill="#374151" stroke="#4b5563" strokeWidth="0.5"/>
      <rect x="142" y="92" width="12" height="6" rx="1" fill="#22c55e"/>
      <text x="168" y="98" fill="#9ca3af" fontSize="5">15A</text>

      <rect x="138" y="104" width="55" height="10" rx="1" fill="#374151" stroke="#4b5563" strokeWidth="0.5"/>
      <rect x="142" y="106" width="12" height="6" rx="1" fill="#22c55e"/>
      <text x="168" y="112" fill="#9ca3af" fontSize="5">20A</text>

      {/* Breakers - Right Column */}
      <rect x="207" y="48" width="55" height="10" rx="1" fill="#374151" stroke="#4b5563" strokeWidth="0.5"/>
      <rect x="246" y="50" width="12" height="6" rx="1" fill="#22c55e"/>
      <text x="225" y="56" fill="#9ca3af" fontSize="5">20A</text>

      <rect x="207" y="62" width="55" height="10" rx="1" fill="#374151" stroke="#4b5563" strokeWidth="0.5"/>
      <rect x="246" y="64" width="12" height="6" rx="1" fill="#22c55e"/>
      <text x="225" y="70" fill="#9ca3af" fontSize="5">15A</text>

      <rect x="207" y="76" width="55" height="10" rx="1" fill="#374151" stroke="#4b5563" strokeWidth="0.5"/>
      <rect x="246" y="78" width="12" height="6" rx="1" fill="#22c55e"/>
      <text x="225" y="84" fill="#9ca3af" fontSize="5">30A</text>

      <rect x="207" y="90" width="55" height="10" rx="1" fill="#374151" stroke="#4b5563" strokeWidth="0.5"/>
      <rect x="246" y="92" width="12" height="6" rx="1" fill="#22c55e"/>
      <text x="225" y="98" fill="#9ca3af" fontSize="5">20A</text>

      <rect x="207" y="104" width="55" height="10" rx="1" fill="#374151" stroke="#4b5563" strokeWidth="0.5"/>
      <rect x="246" y="106" width="12" height="6" rx="1" fill="#22c55e"/>
      <text x="225" y="112" fill="#9ca3af" fontSize="5">15A</text>

      {/* Main Breaker */}
      <rect x="170" y="120" width="60" height="14" rx="2" fill="#1e293b" stroke="#ef4444" strokeWidth="1.5"/>
      <rect x="174" y="123" width="16" height="8" rx="1" fill="#ef4444"/>
      <text x="205" y="130" fill="#ef4444" fontSize="6" fontWeight="bold">MAIN</text>

      {/* Padlock on panel */}
      <g transform="translate(280, 55)">
        {/* Lock shackle */}
        <path d="M 8 12 L 8 6 A 8 8 0 0 1 24 6 L 24 12" fill="none" stroke="#eab308" strokeWidth="3" strokeLinecap="round"/>
        {/* Lock body */}
        <rect x="4" y="12" width="24" height="18" rx="3" fill="#eab308"/>
        {/* Keyhole */}
        <circle cx="16" cy="20" r="3" fill="#92400e"/>
        <rect x="15" y="22" width="2" height="4" fill="#92400e"/>
        <text x="16" y="42" textAnchor="middle" fill="#eab308" fontSize="7" fontWeight="bold">LOCKED</text>
      </g>

      {/* Danger Tag */}
      <g transform="translate(30, 40)">
        {/* Tag body */}
        <polygon points="10,0 50,0 55,5 55,80 5,80 5,5" fill="#ef4444" stroke="#dc2626" strokeWidth="1"/>
        {/* Hole */}
        <circle cx="30" cy="8" r="3" fill="#1f2937"/>
        {/* String to panel */}
        <path d="M 30 5 C 40 -10, 90 -5, 115 30" fill="none" stroke="#9ca3af" strokeWidth="1" strokeDasharray="3,2"/>
        {/* Tag text */}
        <text x="30" y="24" textAnchor="middle" fill="white" fontSize="7" fontWeight="bold">DANGER</text>
        <line x1="12" y1="28" x2="48" y2="28" stroke="white" strokeWidth="0.5"/>
        <text x="30" y="37" textAnchor="middle" fill="white" fontSize="5">DO NOT</text>
        <text x="30" y="44" textAnchor="middle" fill="white" fontSize="5">OPERATE</text>
        <line x1="12" y1="48" x2="48" y2="48" stroke="white" strokeWidth="0.5"/>
        <text x="30" y="57" textAnchor="middle" fill="#fecaca" fontSize="4">LOCKED OUT BY:</text>
        <text x="30" y="64" textAnchor="middle" fill="white" fontSize="4">J. SMITH</text>
        <text x="30" y="71" textAnchor="middle" fill="#fecaca" fontSize="4">DATE: 04/18/25</text>
      </g>

      {/* Hasp illustration */}
      <g transform="translate(315, 110)">
        <rect x="0" y="0" width="30" height="6" rx="2" fill="#6b7280"/>
        <circle cx="6" cy="3" r="4" fill="none" stroke="#eab308" strokeWidth="2"/>
        <circle cx="16" cy="3" r="4" fill="none" stroke="#3b82f6" strokeWidth="2"/>
        <circle cx="26" cy="3" r="4" fill="none" stroke="#22c55e" strokeWidth="2"/>
        <text x="15" y="18" textAnchor="middle" fill="#9ca3af" fontSize="5">HASP</text>
      </g>

      {/* Legend */}
      <g transform="translate(310, 145)">
        <circle cx="4" cy="3" r="3" fill="#eab308"/>
        <text x="12" y="6" fill="#9ca3af" fontSize="5">Padlock</text>
        <rect x="1" y="10" width="6" height="6" fill="#ef4444"/>
        <text x="12" y="16" fill="#9ca3af" fontSize="5">Danger Tag</text>
      </g>
    </svg>
  );
}

export default function LockoutTagoutElectricalProceduresPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navigation />
      <div className="pt-20">
        <BreadcrumbJsonLd
          items={[
            { name: "Home", url: "https://amporalabs.com" },
            { name: "Blog", url: "https://amporalabs.com/blog" },
            { name: "Lockout/Tagout Electrical Procedures", url: "https://amporalabs.com/blog/lockout-tagout-electrical-procedures" },
          ]}
        />
        <BlogPostingJsonLd
          headline="Lockout/Tagout (LOTO) Procedures for Electrical Work"
          description="Complete guide to lockout/tagout (LOTO) procedures for electrical work covering OSHA and NFPA 70E requirements, the six-step LOTO process, verification testing, and compliance."
          datePublished="2025-04-18"
          dateModified="2025-04-18"
          url="https://amporalabs.com/blog/lockout-tagout-electrical-procedures"
          wordCount={4200}
          keywords={["lockout tagout", "LOTO", "OSHA 1910.147", "NFPA 70E", "energy isolation"]}
        />

        <article className="max-w-4xl mx-auto px-6 py-12">
          {/* Breadcrumb */}
          <nav className="text-sm text-white/60 mb-8">
            <Link href="/" className="hover:text-white">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/blog" className="hover:text-white">Blog</Link>
            <span className="mx-2">/</span>
            <span className="text-white">Lockout/Tagout Electrical Procedures</span>
          </nav>

          {/* Article Header */}
          <header className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <span className="px-3 py-1 bg-red-600/30 text-red-300 text-sm font-medium rounded-full">
                Safety
              </span>
              <span className="text-white/40 text-sm">12 min read</span>
              <span className="text-white/40 text-sm">April 18, 2025</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6 leading-tight">
              Lockout/Tagout (LOTO) Procedures for Electrical Work
            </h1>
            <p className="text-xl text-white/70">
              Lockout/tagout is the single most critical safety procedure for electrical workers. Every year, failure to properly control hazardous energy results in approximately 50,000 injuries and nearly 120 fatalities in the United States. This guide covers the complete LOTO process, from OSHA and NFPA 70E requirements to verification testing and common violations.
            </p>
          </header>

          <div className="mb-12 bg-gradient-to-br from-red-900/20 to-cyan-900/20 rounded-2xl p-6 border border-white/10">
            <HeroIllustration />
          </div>

          {/* Safety Warning */}
          <div className="bg-red-900/40 border-2 border-red-500/50 rounded-2xl p-6 mb-12">
            <div className="flex items-start gap-4">
              <div className="text-3xl">&#9888;</div>
              <div>
                <h3 className="font-display font-bold text-lg mb-2 text-red-400">Critical Safety Information</h3>
                <p className="text-white/80 text-sm">
                  This article is for educational purposes only. Lockout/tagout procedures are life-safety critical. Always follow your employer&apos;s specific energy control program, obtain proper training, and never take shortcuts with LOTO. Improper lockout can result in electrocution, arc flash, or death.
                </p>
              </div>
            </div>
          </div>

          {/* Table of Contents */}
          <div className="bg-white/5 rounded-2xl p-6 mb-12">
            <h2 className="font-display font-bold mb-4">In This Guide</h2>
            <ul className="space-y-2 text-white/70">
              <li><a href="#osha-standard" className="hover:text-purple-400">OSHA LOTO Standard (29 CFR 1910.147)</a></li>
              <li><a href="#nfpa-70e" className="hover:text-purple-400">NFPA 70E Requirements for LOTO</a></li>
              <li><a href="#six-steps" className="hover:text-purple-400">Six Steps of Lockout/Tagout</a></li>
              <li><a href="#energy-sources" className="hover:text-purple-400">Energy Source Identification</a></li>
              <li><a href="#lockout-devices" className="hover:text-purple-400">Lockout Devices and Hardware</a></li>
              <li><a href="#group-lockout" className="hover:text-purple-400">Group Lockout Procedures</a></li>
              <li><a href="#verification" className="hover:text-purple-400">Verification of Zero Energy State</a></li>
              <li><a href="#absence-of-voltage" className="hover:text-purple-400">Testing for Absence of Voltage</a></li>
              <li><a href="#complex-scenarios" className="hover:text-purple-400">Complex Lockout Scenarios</a></li>
              <li><a href="#training" className="hover:text-purple-400">LOTO Training Requirements</a></li>
              <li><a href="#annual-audit" className="hover:text-purple-400">Annual Audit Requirements</a></li>
              <li><a href="#penalties" className="hover:text-purple-400">Penalties for Non-Compliance</a></li>
              <li><a href="#common-violations" className="hover:text-purple-400">Common LOTO Violations and Mistakes</a></li>
            </ul>
          </div>

          {/* Article Content */}
          <div className="prose prose-invert prose-lg max-w-none">

            <section id="osha-standard" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">OSHA LOTO Standard (29 CFR 1910.147)</h2>
              <p className="text-white/80 mb-4">
                <strong>29 CFR 1910.147, The Control of Hazardous Energy (Lockout/Tagout)</strong>, is the primary OSHA standard governing lockout/tagout procedures. It establishes minimum performance requirements for the control of hazardous energy during servicing and maintenance of machines and equipment.
              </p>
              <p className="text-white/80 mb-4">
                The standard applies to the unexpected energization or startup of machines or equipment, or the release of stored energy, that could cause injury to employees. It covers all forms of hazardous energy including electrical, mechanical, hydraulic, pneumatic, chemical, thermal, and gravitational.
              </p>

              <div className="bg-white/5 rounded-xl p-6 my-6">
                <h3 className="font-semibold text-cyan-400 mb-3">Key Requirements of 1910.147</h3>
                <ul className="text-white/70 space-y-2">
                  <li><strong>Energy control program:</strong> Employers must establish a documented program with written procedures for each piece of equipment</li>
                  <li><strong>Energy control procedures:</strong> Written, step-by-step procedures for applying and removing lockout/tagout devices</li>
                  <li><strong>Employee training:</strong> Three categories of employees must be trained - authorized, affected, and other employees</li>
                  <li><strong>Periodic inspections:</strong> Annual inspections of each energy control procedure to verify continued effectiveness</li>
                  <li><strong>Lockout/tagout devices:</strong> Must be durable, standardized, substantial, and identifiable</li>
                </ul>
              </div>

              <div className="grid md:grid-cols-3 gap-4 my-6">
                <div className="bg-green-900/30 rounded-xl p-6">
                  <h4 className="font-semibold text-green-400 mb-2">Authorized Employees</h4>
                  <p className="text-white/60 text-sm">Employees who apply locks and tags to equipment. They perform the actual servicing or maintenance work and are trained in the specific energy control procedure.</p>
                </div>
                <div className="bg-cyan-900/30 rounded-xl p-6">
                  <h4 className="font-semibold text-cyan-400 mb-2">Affected Employees</h4>
                  <p className="text-white/60 text-sm">Employees whose jobs require them to operate or use machines that are being serviced under lockout. They must be notified before LOTO is applied or removed.</p>
                </div>
                <div className="bg-purple-900/30 rounded-xl p-6">
                  <h4 className="font-semibold text-purple-400 mb-2">Other Employees</h4>
                  <p className="text-white/60 text-sm">All other employees who work in the area where energy control procedures are used. They must understand the purpose of LOTO and never attempt to remove devices.</p>
                </div>
              </div>

              <div className="bg-orange-900/30 rounded-xl p-6 my-6">
                <h4 className="font-semibold text-orange-400 mb-3">When LOTO Is NOT Required by 1910.147</h4>
                <p className="text-white/70 mb-3">
                  The standard provides limited exceptions:
                </p>
                <ul className="text-white/60 text-sm space-y-1">
                  <li><strong>Minor servicing:</strong> Routine, repetitive, minor servicing performed during normal production, IF alternative protection is effective</li>
                  <li><strong>Cord and plug connected:</strong> When the employee performing the work controls the plug and is the only person exposed to the hazard</li>
                  <li><strong>Hot tap operations:</strong> On transmission and distribution systems, when specific conditions are met</li>
                </ul>
                <p className="text-white/70 mt-3 text-sm">
                  <strong>Important:</strong> Even when 1910.147 provides exceptions, NFPA 70E still requires establishing an electrically safe work condition for most electrical work.
                </p>
              </div>
            </section>

            <section id="nfpa-70e" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">NFPA 70E Requirements for LOTO</h2>
              <p className="text-white/80 mb-4">
                <strong>NFPA 70E Article 120</strong> establishes the requirements for establishing and verifying an electrically safe work condition. While OSHA 1910.147 provides general LOTO requirements for all forms of energy, NFPA 70E provides specific, detailed requirements for electrical energy control.
              </p>
              <p className="text-white/80 mb-4">
                NFPA 70E goes beyond the OSHA standard in several important ways for electrical work:
              </p>

              <div className="space-y-4 my-6">
                <div className="bg-white/5 rounded-xl p-6 border-l-4 border-red-500">
                  <h4 className="font-semibold text-red-400 mb-2">Absence of Voltage Testing</h4>
                  <p className="text-white/70 text-sm">
                    NFPA 70E explicitly requires testing for absence of voltage using an adequately rated voltage detector after lockout, before work begins. The tester must be verified on a known source before and after testing the circuit.
                  </p>
                </div>
                <div className="bg-white/5 rounded-xl p-6 border-l-4 border-orange-500">
                  <h4 className="font-semibold text-orange-400 mb-2">PPE During Verification</h4>
                  <p className="text-white/70 text-sm">
                    Workers must wear appropriate PPE (including arc-rated protection) while verifying absence of voltage, because the circuit is considered energized until proven otherwise.
                  </p>
                </div>
                <div className="bg-white/5 rounded-xl p-6 border-l-4 border-yellow-500">
                  <h4 className="font-semibold text-yellow-400 mb-2">Temporary Protective Grounding</h4>
                  <p className="text-white/70 text-sm">
                    For systems above 600V, or where induced voltage is a concern, temporary protective grounds must be applied after verifying zero voltage. Grounds must be sized for available fault current.
                  </p>
                </div>
                <div className="bg-white/5 rounded-xl p-6 border-l-4 border-cyan-500">
                  <h4 className="font-semibold text-cyan-400 mb-2">Electrically Safe Work Condition</h4>
                  <p className="text-white/70 text-sm">
                    NFPA 70E defines the complete process of achieving an electrically safe work condition (ESWC) as the standard for worker protection. LOTO alone is not sufficient -- verification of zero energy is essential.
                  </p>
                </div>
              </div>

              <div className="bg-red-900/30 rounded-xl p-6 my-6">
                <h4 className="font-semibold text-red-400 mb-3">NFPA 70E Article 120.5 - Process for Establishing ESWC</h4>
                <p className="text-white/70">
                  The process requires: (1) determine all possible sources, (2) interrupt the load, (3) visually verify disconnect position, (4) release stored energy, (5) apply lockout/tagout devices, (6) test for absence of voltage using the live-dead-live method, and (7) apply temporary protective grounds where required.
                </p>
              </div>
            </section>

            <section id="six-steps" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Six Steps of Lockout/Tagout</h2>
              <p className="text-white/80 mb-4">
                The following six steps form the core lockout/tagout procedure per OSHA 1910.147. Each step must be performed in order, and no step may be skipped.
              </p>

              <div className="space-y-4 my-6">
                <div className="bg-white/5 rounded-xl p-5 flex items-start gap-4">
                  <span className="bg-red-600 text-white text-sm font-bold px-3 py-1 rounded-full flex-shrink-0">1</span>
                  <div>
                    <p className="font-semibold text-white text-lg">Preparation</p>
                    <p className="text-white/70 mb-3">
                      Before any lockout/tagout activity, the authorized employee must identify:
                    </p>
                    <ul className="text-white/60 text-sm space-y-1">
                      <li>The type and magnitude of all energy sources supplying the equipment</li>
                      <li>The hazards associated with each energy source</li>
                      <li>The methods and means required to control those energies</li>
                      <li>All affected employees who need notification</li>
                    </ul>
                    <p className="text-white/60 text-sm mt-2">
                      Review the written energy control procedure specific to the equipment. If no equipment-specific procedure exists, one must be developed before proceeding.
                    </p>
                  </div>
                </div>

                <div className="bg-white/5 rounded-xl p-5 flex items-start gap-4">
                  <span className="bg-red-600 text-white text-sm font-bold px-3 py-1 rounded-full flex-shrink-0">2</span>
                  <div>
                    <p className="font-semibold text-white text-lg">Notification</p>
                    <p className="text-white/70 mb-3">
                      Notify all affected employees that a lockout/tagout procedure is about to be implemented:
                    </p>
                    <ul className="text-white/60 text-sm space-y-1">
                      <li>Identify the equipment being locked out</li>
                      <li>Explain the reason for the lockout</li>
                      <li>Provide the expected duration of the lockout</li>
                      <li>Identify the authorized employee performing the lockout</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-white/5 rounded-xl p-5 flex items-start gap-4">
                  <span className="bg-red-600 text-white text-sm font-bold px-3 py-1 rounded-full flex-shrink-0">3</span>
                  <div>
                    <p className="font-semibold text-white text-lg">Equipment Shutdown</p>
                    <p className="text-white/70 mb-3">
                      Shut down the equipment using the normal stopping procedure. This is critical for safety:
                    </p>
                    <ul className="text-white/60 text-sm space-y-1">
                      <li>Use the normal operating controls (stop buttons, switches) to shut down equipment</li>
                      <li>Never use the disconnect as the primary means of stopping equipment under load (unless designed for it)</li>
                      <li>Allow all moving parts to come to a complete stop</li>
                      <li>Ensure the shutdown does not create additional hazards</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-white/5 rounded-xl p-5 flex items-start gap-4">
                  <span className="bg-red-600 text-white text-sm font-bold px-3 py-1 rounded-full flex-shrink-0">4</span>
                  <div>
                    <p className="font-semibold text-white text-lg">Energy Isolation</p>
                    <p className="text-white/70 mb-3">
                      Operate all energy-isolating devices to disconnect the equipment from every energy source:
                    </p>
                    <ul className="text-white/60 text-sm space-y-1">
                      <li>Open circuit breakers, disconnect switches, and isolation valves</li>
                      <li>Visually verify that disconnect blades are fully open where possible</li>
                      <li>Isolate ALL energy sources, not just the primary electrical supply</li>
                      <li>Block or dissipate any stored energy (capacitors, springs, elevated loads)</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-white/5 rounded-xl p-5 flex items-start gap-4">
                  <span className="bg-red-600 text-white text-sm font-bold px-3 py-1 rounded-full flex-shrink-0">5</span>
                  <div>
                    <p className="font-semibold text-white text-lg">Lockout/Tagout Device Application</p>
                    <p className="text-white/70 mb-3">
                      Apply lockout and tagout devices to each energy-isolating device:
                    </p>
                    <ul className="text-white/60 text-sm space-y-1">
                      <li>Each authorized employee applies their own individual lock</li>
                      <li>Locks must physically prevent operation of the energy-isolating device</li>
                      <li>Tags must clearly identify the authorized employee, date, and reason</li>
                      <li>Use hasps when multiple workers need to lock out the same device</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-white/5 rounded-xl p-5 flex items-start gap-4">
                  <span className="bg-red-600 text-white text-sm font-bold px-3 py-1 rounded-full flex-shrink-0">6</span>
                  <div>
                    <p className="font-semibold text-white text-lg">Verification of Isolation</p>
                    <p className="text-white/70 mb-3">
                      Verify that the equipment is fully de-energized and isolated:
                    </p>
                    <ul className="text-white/60 text-sm space-y-1">
                      <li>Attempt to start the equipment using normal operating controls (push start button)</li>
                      <li>Return controls to the neutral or off position after testing</li>
                      <li>Use a properly rated voltage detector to test for absence of voltage</li>
                      <li>Test phase-to-phase and phase-to-ground at the point of work</li>
                      <li>Verify the tester works on a known live source before and after testing</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            <section id="energy-sources" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Energy Source Identification</h2>
              <p className="text-white/80 mb-4">
                Identifying all energy sources is the most critical preparation step. Failure to identify even one energy source can be fatal. For electrical work, the following energy sources must be considered:
              </p>

              <div className="grid md:grid-cols-2 gap-6 my-6">
                <div className="bg-yellow-900/30 rounded-xl p-6">
                  <h3 className="font-semibold text-yellow-400 mb-3">Primary Electrical Energy</h3>
                  <ul className="text-white/60 text-sm space-y-2">
                    <li><strong>Utility supply:</strong> Primary and secondary services</li>
                    <li><strong>Multiple feeds:</strong> Dual-fed switchgear, tie breakers</li>
                    <li><strong>Backup generators:</strong> Standby and emergency power systems</li>
                    <li><strong>UPS systems:</strong> Battery-backed uninterruptible power</li>
                    <li><strong>Solar PV:</strong> Cannot be de-energized during daylight - always energized on the DC side</li>
                    <li><strong>Backfeed potential:</strong> From VFDs, regenerative drives, or transformers</li>
                  </ul>
                </div>
                <div className="bg-red-900/30 rounded-xl p-6">
                  <h3 className="font-semibold text-red-400 mb-3">Stored Electrical Energy</h3>
                  <ul className="text-white/60 text-sm space-y-2">
                    <li><strong>Capacitors:</strong> Power factor correction capacitors can hold lethal charge for extended periods</li>
                    <li><strong>VFD DC bus:</strong> Variable frequency drive DC bus capacitors retain energy after shutdown</li>
                    <li><strong>Battery systems:</strong> UPS batteries, control power batteries, DC systems</li>
                    <li><strong>Inductive energy:</strong> Large transformers and motors store energy in magnetic fields</li>
                    <li><strong>Static charge:</strong> High-voltage cables and equipment can retain static charge</li>
                  </ul>
                </div>
              </div>

              <div className="bg-purple-900/30 rounded-xl p-6 my-6">
                <h4 className="font-semibold text-purple-400 mb-3">Capacitor Discharge Times</h4>
                <p className="text-white/70 mb-3">
                  Capacitors represent one of the most dangerous stored energy sources. NEC 460.6 requires that capacitors be discharged to 50V or less within specified times:
                </p>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-white/20">
                        <th className="text-left py-2 px-3 text-white/60">Voltage</th>
                        <th className="text-left py-2 px-3 text-white/60">Max Discharge Time</th>
                        <th className="text-left py-2 px-3 text-white/60">Discharge Method</th>
                      </tr>
                    </thead>
                    <tbody className="text-white/70">
                      <tr className="border-b border-white/10">
                        <td className="py-2 px-3">600V and below</td>
                        <td className="py-2 px-3 font-mono text-yellow-400">1 minute</td>
                        <td className="py-2 px-3">Automatic drain resistors</td>
                      </tr>
                      <tr>
                        <td className="py-2 px-3">Over 600V</td>
                        <td className="py-2 px-3 font-mono text-yellow-400">5 minutes</td>
                        <td className="py-2 px-3">Automatic drain or manual grounding</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="text-white/60 text-sm mt-3">
                  <strong>Always verify discharge with a voltage tester.</strong> Drain resistors can fail, leaving capacitors fully charged even after the specified time.
                </p>
              </div>

              <h3 className="text-xl font-display font-semibold mb-3 text-cyan-400">Other Energy Sources on Electrical Equipment</h3>
              <p className="text-white/80 mb-4">
                Electrical equipment often involves non-electrical energy sources that must also be controlled:
              </p>
              <ul className="list-disc list-inside text-white/70 space-y-2 mb-4">
                <li><strong>Mechanical:</strong> Spring-charged breaker mechanisms, motor-driven disconnects</li>
                <li><strong>Pneumatic:</strong> Air-operated breakers, pneumatic actuators</li>
                <li><strong>Hydraulic:</strong> Hydraulically operated switchgear</li>
                <li><strong>Gravitational:</strong> Overhead bus, elevated transformers, cable trays</li>
                <li><strong>Thermal:</strong> High-temperature equipment, recently operated conductors</li>
              </ul>
            </section>

            <section id="lockout-devices" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Lockout Devices and Hardware</h2>
              <p className="text-white/80 mb-4">
                OSHA requires that lockout devices be durable, standardized, substantial, and identifiable. For electrical work, several types of devices are commonly used:
              </p>

              <div className="space-y-4 my-6">
                <div className="bg-white/5 rounded-xl p-6">
                  <h4 className="font-semibold text-yellow-400 mb-2">Padlocks</h4>
                  <p className="text-white/70 text-sm mb-2">
                    The primary lockout device. Requirements include:
                  </p>
                  <ul className="text-white/60 text-sm space-y-1">
                    <li>Each authorized employee must have their own individually keyed lock</li>
                    <li>Locks must be uniquely identified (name, photo, employee number)</li>
                    <li>Only one key per lock (master keys defeat the purpose of LOTO)</li>
                    <li>Locks must be substantial enough to prevent removal without excessive force</li>
                    <li>Use safety padlocks (not commercial/hardware store locks)</li>
                  </ul>
                </div>

                <div className="bg-white/5 rounded-xl p-6">
                  <h4 className="font-semibold text-red-400 mb-2">Danger Tags</h4>
                  <p className="text-white/70 text-sm mb-2">
                    Tags supplement locks and provide critical information:
                  </p>
                  <ul className="text-white/60 text-sm space-y-1">
                    <li>Must include &quot;DANGER - DO NOT OPERATE&quot; or equivalent warning</li>
                    <li>Must identify the authorized employee who applied it</li>
                    <li>Must include date and time of application</li>
                    <li>Must be attached with a non-reusable, self-locking attachment (nylon cable tie)</li>
                    <li>Tags alone (tagout only) provide less protection than locks and require additional training</li>
                  </ul>
                </div>

                <div className="bg-white/5 rounded-xl p-6">
                  <h4 className="font-semibold text-cyan-400 mb-2">Hasps</h4>
                  <p className="text-white/70 text-sm">
                    Hasps allow multiple locks to be applied to a single energy-isolating device. Each worker places their individual lock on the hasp. The device cannot be re-energized until every lock is removed. Available in 4-hole, 6-hole, and 8-hole configurations.
                  </p>
                </div>

                <div className="bg-white/5 rounded-xl p-6">
                  <h4 className="font-semibold text-green-400 mb-2">Circuit Breaker Lockout Devices</h4>
                  <p className="text-white/70 text-sm">
                    Specialized devices designed to lock circuit breakers in the open (OFF) position. Available for various breaker sizes: single-pole toggles, multi-pole toggles, and large-frame molded case breakers. The device physically prevents the breaker handle from being moved to the ON position.
                  </p>
                </div>

                <div className="bg-white/5 rounded-xl p-6">
                  <h4 className="font-semibold text-purple-400 mb-2">Other Electrical Lockout Devices</h4>
                  <ul className="text-white/60 text-sm space-y-1">
                    <li><strong>Plug lockouts:</strong> Enclose the plug end of cord-connected equipment</li>
                    <li><strong>Wall switch lockouts:</strong> Cover toggle switches in the off position</li>
                    <li><strong>Fuse lockouts:</strong> Prevent fuse reinsertion after removal</li>
                    <li><strong>Valve lockouts:</strong> For pneumatic or hydraulic energy sources</li>
                    <li><strong>Lock boxes:</strong> Secure keys to group lockout boxes for complex procedures</li>
                  </ul>
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
                  <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/></svg>
                  Download Free
                </a>
              </div>
            </div>

            <section id="group-lockout" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Group Lockout Procedures</h2>
              <p className="text-white/80 mb-4">
                When multiple authorized employees must work on the same equipment simultaneously, group lockout procedures are required per OSHA 1910.147(f)(3). This is common in electrical work during shutdowns, large equipment maintenance, and multi-trade coordination.
              </p>

              <div className="bg-white/5 rounded-xl p-6 my-6">
                <h3 className="font-semibold text-cyan-400 mb-3">Group Lockout Requirements</h3>
                <ul className="text-white/70 space-y-2">
                  <li><strong>Primary authorized employee:</strong> One person is designated to coordinate the group lockout, apply and remove the primary lock, and ensure continuity of protection</li>
                  <li><strong>Individual employee control:</strong> Each authorized employee must still apply their own personal lock to the group lockout device (usually a lockbox)</li>
                  <li><strong>Lock box method:</strong> Equipment keys are placed in a lockbox after the primary employee locks out. Each worker places their personal lock on the lockbox</li>
                  <li><strong>Accountability:</strong> The primary authorized employee must account for all workers before removing the group lockout</li>
                </ul>
              </div>

              <div className="bg-orange-900/30 rounded-xl p-6 my-6">
                <h4 className="font-semibold text-orange-400 mb-3">Shift Change During Lockout</h4>
                <p className="text-white/70">
                  When lockout extends across shifts, orderly transfer of lockout protection is required. The incoming shift must apply their locks <strong>before</strong> the outgoing shift removes theirs. At no point should the equipment be unprotected. Document the transfer with names, times, and equipment status.
                </p>
              </div>
            </section>

            <section id="verification" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Verification of Zero Energy State</h2>
              <p className="text-white/80 mb-4">
                Verification is the step that confirms the lockout was successful. Skipping or improperly performing verification is one of the leading causes of LOTO-related fatalities.
              </p>

              <div className="space-y-4 my-6">
                <div className="bg-white/5 rounded-xl p-6">
                  <h4 className="font-semibold text-green-400 mb-2">Step 1: Attempt to Operate</h4>
                  <p className="text-white/70 text-sm">
                    After applying lockout devices, attempt to start the equipment using the normal operating controls. Press the start button, flip the switch, or activate the control. This verifies the energy-isolating devices are properly engaged. <strong>Always return controls to the neutral or off position</strong> after this test to prevent unexpected startup when energy is restored.
                  </p>
                </div>
                <div className="bg-white/5 rounded-xl p-6">
                  <h4 className="font-semibold text-yellow-400 mb-2">Step 2: Visual Verification</h4>
                  <p className="text-white/70 text-sm">
                    Where possible, visually verify that disconnect blades are fully open, breaker handles are in the OFF position, and all energy-isolating devices are in the safe position. Look through viewing windows, check indicator lights, and verify mechanical position indicators.
                  </p>
                </div>
                <div className="bg-white/5 rounded-xl p-6">
                  <h4 className="font-semibold text-red-400 mb-2">Step 3: Test for Absence of Voltage</h4>
                  <p className="text-white/70 text-sm">
                    Use a properly rated voltage detector or multimeter to verify the absence of voltage at the point of work. This is the definitive test -- the one that proves the circuit is truly de-energized. See the detailed procedure below.
                  </p>
                </div>
              </div>
            </section>

            <section id="absence-of-voltage" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Testing for Absence of Voltage</h2>
              <p className="text-white/80 mb-4">
                NFPA 70E requires the <strong>live-dead-live</strong> testing method to confirm absence of voltage. This three-step process ensures your test instrument is functioning correctly and the circuit is truly de-energized.
              </p>

              <div className="space-y-4 my-6">
                <div className="bg-green-900/30 rounded-xl p-5 border-l-4 border-green-500">
                  <h4 className="font-semibold text-green-400 mb-2">1. Test on Known Live Source (LIVE)</h4>
                  <p className="text-white/70 text-sm">
                    First, test your voltage detector on a known energized source of similar voltage. This confirms the tester is working properly and the batteries are adequate. Use a permanently installed proof-of-voltage indicator or a known live circuit.
                  </p>
                </div>
                <div className="bg-red-900/30 rounded-xl p-5 border-l-4 border-red-500">
                  <h4 className="font-semibold text-red-400 mb-2">2. Test the Locked Out Circuit (DEAD)</h4>
                  <p className="text-white/70 text-sm">
                    Test the circuit that has been locked out. Check phase-to-phase, phase-to-neutral, and phase-to-ground at the point of work. The tester should indicate zero voltage on all combinations. <strong>Wear appropriate PPE during this step</strong> -- the circuit is presumed energized until proven otherwise.
                  </p>
                </div>
                <div className="bg-green-900/30 rounded-xl p-5 border-l-4 border-green-500">
                  <h4 className="font-semibold text-green-400 mb-2">3. Test on Known Live Source Again (LIVE)</h4>
                  <p className="text-white/70 text-sm">
                    Return to the known live source and test again. This confirms the tester did not fail between the first and second tests. Only after this final verification can you conclude the locked-out circuit is truly de-energized.
                  </p>
                </div>
              </div>

              <div className="bg-white/5 rounded-xl p-6 my-6">
                <h3 className="font-semibold text-cyan-400 mb-3">Voltage Detector Requirements</h3>
                <ul className="text-white/70 space-y-2">
                  <li><strong>Voltage rating:</strong> Must be rated for the voltage of the circuit being tested (CAT III or CAT IV as appropriate)</li>
                  <li><strong>Contact type:</strong> Use contact-type voltage detectors for definitive testing. Non-contact voltage testers (tick tracers) are NOT adequate for establishing an ESWC</li>
                  <li><strong>Condition:</strong> Test leads must be in good condition with no damaged insulation</li>
                  <li><strong>Calibration:</strong> Follow manufacturer calibration and testing recommendations</li>
                </ul>
              </div>

              <div className="bg-red-900/30 rounded-xl p-6 my-6">
                <h4 className="font-semibold text-red-400 mb-3">Critical Warning: Non-Contact Testers</h4>
                <p className="text-white/70">
                  Non-contact voltage testers (NCVTs) or &quot;tick tracers&quot; are useful screening tools but are <strong>not acceptable as the sole means of verifying absence of voltage</strong> for establishing an electrically safe work condition. They can give false negatives due to shielded cables, low battery, or distance from the conductor. Always use a contact-type voltage tester for definitive verification.
                </p>
              </div>
            </section>

            <section id="complex-scenarios" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Complex Lockout Scenarios</h2>
              <p className="text-white/80 mb-4">
                Real-world electrical work often involves complex lockout situations that go beyond basic single-source, single-worker scenarios.
              </p>

              <h3 className="text-xl font-display font-semibold mb-3 text-yellow-400">Multiple Energy Sources</h3>
              <p className="text-white/80 mb-4">
                Equipment with multiple electrical feeds requires locking out every source. Common scenarios include:
              </p>
              <div className="space-y-3 my-6">
                <div className="bg-white/5 rounded-xl p-4">
                  <h4 className="font-semibold text-white">Dual-Fed Switchgear</h4>
                  <p className="text-white/60 text-sm">Both utility feeds and the tie breaker must be locked out. Verify absence of voltage on both sides of the bus. Consider backfeed through the tie breaker if it remains closed.</p>
                </div>
                <div className="bg-white/5 rounded-xl p-4">
                  <h4 className="font-semibold text-white">Generator Backup Systems</h4>
                  <p className="text-white/60 text-sm">Lock out the normal supply AND the generator disconnect or transfer switch. Ensure the generator cannot auto-start during the lockout. Consider removing generator fuses or disabling the auto-start function.</p>
                </div>
                <div className="bg-white/5 rounded-xl p-4">
                  <h4 className="font-semibold text-white">UPS Systems</h4>
                  <p className="text-white/60 text-sm">Lock out the input supply, the bypass switch, and the battery disconnect. UPS batteries can supply full output voltage even with the input disconnected. Verify the static bypass is also isolated.</p>
                </div>
                <div className="bg-white/5 rounded-xl p-4">
                  <h4 className="font-semibold text-white">Solar PV Systems</h4>
                  <p className="text-white/60 text-sm">PV arrays produce voltage whenever light is present and cannot be fully de-energized on the DC side during daylight. Lock out the DC disconnect, inverter, and AC disconnect. Cover panels with opaque material for DC-side work if required.</p>
                </div>
              </div>

              <h3 className="text-xl font-display font-semibold mb-3 text-yellow-400">Multiple Workers</h3>
              <p className="text-white/80 mb-4">
                When multiple electricians or trades must work on the same equipment:
              </p>
              <ul className="list-disc list-inside text-white/70 space-y-2 mb-4">
                <li>Use hasps to allow each worker to apply their personal lock to each disconnect point</li>
                <li>For large shutdowns with many workers, use the lock box procedure with a primary authorized employee</li>
                <li>Each worker must personally verify absence of voltage at their specific work location</li>
                <li>Never rely solely on another person&apos;s verification -- verify for yourself</li>
                <li>Coordinate with other trades to ensure all energy sources are identified and controlled</li>
              </ul>

              <h3 className="text-xl font-display font-semibold mb-3 text-yellow-400">Remote Disconnects</h3>
              <p className="text-white/80 mb-4">
                When the disconnect is located far from the work area, additional precautions are needed:
              </p>
              <ul className="list-disc list-inside text-white/70 space-y-2 mb-4">
                <li>Consider posting a guard at the disconnect location</li>
                <li>Use communication devices to coordinate lock application and removal</li>
                <li>Always verify absence of voltage at the point of work, not just at the disconnect</li>
                <li>Account for induced voltages in long cable runs near energized conductors</li>
              </ul>
            </section>

            <section id="training" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">LOTO Training Requirements</h2>
              <p className="text-white/80 mb-4">
                Both OSHA 1910.147 and NFPA 70E require training for employees involved in lockout/tagout. Training requirements differ based on the employee&apos;s role.
              </p>

              <div className="overflow-x-auto my-6">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-white/20">
                      <th className="text-left py-3 px-4 text-white/60">Employee Type</th>
                      <th className="text-left py-3 px-4 text-white/60">Training Required</th>
                      <th className="text-left py-3 px-4 text-white/60">Retraining Trigger</th>
                    </tr>
                  </thead>
                  <tbody className="text-white/80">
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-semibold text-green-400">Authorized</td>
                      <td className="py-3 px-4 text-white/60">Recognition of hazardous energy, type and magnitude of energy, methods and means of isolation, purpose and use of LOTO procedures</td>
                      <td className="py-3 px-4 text-white/60">Job change, new equipment, new procedures, inadequacy found in audit</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-semibold text-cyan-400">Affected</td>
                      <td className="py-3 px-4 text-white/60">Purpose and use of LOTO procedures, prohibition against removing devices or re-energizing equipment</td>
                      <td className="py-3 px-4 text-white/60">Job change, new procedures, inadequacy found in audit</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-semibold text-purple-400">Other</td>
                      <td className="py-3 px-4 text-white/60">Purpose of LOTO, prohibition against attempting to restart locked-out equipment or removing devices</td>
                      <td className="py-3 px-4 text-white/60">Inadequacy found in audit, change in workplace conditions</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="bg-cyan-900/30 rounded-xl p-6 my-6">
                <h4 className="font-semibold text-cyan-400 mb-3">NFPA 70E Additional Training Requirements</h4>
                <p className="text-white/70 mb-3">
                  For electrical-specific LOTO, NFPA 70E requires additional competencies:
                </p>
                <ul className="text-white/60 text-sm space-y-1">
                  <li>Understanding of electrical hazards (shock and arc flash)</li>
                  <li>Proper use of voltage testing equipment</li>
                  <li>Application of temporary protective grounds</li>
                  <li>Selection and use of appropriate PPE for verification testing</li>
                  <li>Emergency procedures and first aid for electrical incidents</li>
                </ul>
              </div>
            </section>

            <section id="annual-audit" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Annual Audit Requirements</h2>
              <p className="text-white/80 mb-4">
                OSHA 1910.147(c)(6) requires a periodic inspection of each energy control procedure at least annually. The audit ensures procedures remain effective and employees are following them correctly.
              </p>

              <div className="bg-white/5 rounded-xl p-6 my-6">
                <h3 className="font-semibold text-purple-400 mb-3">Audit Requirements</h3>
                <ul className="text-white/70 space-y-2">
                  <li><strong>Frequency:</strong> At least annually for each energy control procedure</li>
                  <li><strong>Inspector:</strong> Must be performed by an authorized employee other than the one using the procedure being audited</li>
                  <li><strong>Scope:</strong> Must include a review between the inspector and authorized/affected employees to verify understanding and correct application</li>
                  <li><strong>Documentation:</strong> Must be documented with the date, equipment audited, employees included, and name of the inspector</li>
                  <li><strong>Deficiencies:</strong> Any deviations or inadequacies must be corrected immediately</li>
                </ul>
              </div>

              <div className="bg-white/5 rounded-xl p-6 my-6">
                <h3 className="font-semibold text-green-400 mb-3">Audit Checklist Items</h3>
                <ul className="text-white/70 space-y-2">
                  <li>Written procedures are available and current for each piece of equipment</li>
                  <li>Employees can demonstrate proper LOTO application and removal</li>
                  <li>Lockout devices are in good condition and available</li>
                  <li>Employees understand when LOTO is required</li>
                  <li>Group lockout procedures are understood and followed</li>
                  <li>Verification testing is being performed correctly</li>
                  <li>Training records are current and complete</li>
                  <li>New equipment has been added to the energy control program</li>
                </ul>
              </div>
            </section>

            <section id="penalties" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Penalties for Non-Compliance</h2>
              <p className="text-white/80 mb-4">
                LOTO violations are consistently among OSHA&apos;s top 10 most frequently cited standards. Penalties can be severe, especially when violations result in injury or death.
              </p>

              <div className="overflow-x-auto my-6">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-white/20">
                      <th className="text-left py-3 px-4 text-white/60">Violation Type</th>
                      <th className="text-left py-3 px-4 text-white/60">Maximum Penalty per Violation</th>
                    </tr>
                  </thead>
                  <tbody className="text-white/80">
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">Serious</td>
                      <td className="py-3 px-4 font-mono text-yellow-400">$16,131</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">Other-Than-Serious</td>
                      <td className="py-3 px-4 font-mono text-yellow-400">$16,131</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">Willful or Repeated</td>
                      <td className="py-3 px-4 font-mono text-red-400">$161,323</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4">Failure to Abate</td>
                      <td className="py-3 px-4 font-mono text-red-400">$16,131 per day</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="text-white/70 text-sm mb-4">
                <strong>Note:</strong> Penalty amounts are adjusted annually for inflation. These figures are based on 2024 maximums. Each instance of a violation (each employee exposed, each piece of equipment) can be cited separately, meaning total penalties can multiply rapidly.
              </p>

              <div className="bg-red-900/30 rounded-xl p-6 my-6">
                <h4 className="font-semibold text-red-400 mb-3">Criminal Liability</h4>
                <p className="text-white/70">
                  Beyond civil penalties, OSHA violations that result in a worker&apos;s death can lead to criminal prosecution. A willful violation causing death can result in a fine of up to $250,000 for an individual (or $500,000 for a corporation) and up to 6 months in prison. Repeat offenders face doubled penalties. State plans may impose additional criminal penalties.
                </p>
              </div>
            </section>

            <section id="common-violations" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Common LOTO Violations and Mistakes</h2>
              <p className="text-white/80 mb-4">
                Understanding the most common violations helps electricians avoid potentially fatal errors. These are the mistakes that kill workers and generate OSHA citations year after year.
              </p>

              <div className="space-y-4 my-6">
                <div className="bg-red-900/20 border border-red-500/30 rounded-xl p-6">
                  <h3 className="font-semibold text-red-400 mb-2">1. Failure to Lock Out Entirely</h3>
                  <p className="text-white/60 text-sm">The most deadly violation. Workers begin work on equipment without performing any lockout -- relying on turning off a switch, asking someone not to touch it, or assuming the circuit is dead. Every circuit must be presumed energized until tested and verified.</p>
                </div>

                <div className="bg-red-900/20 border border-red-500/30 rounded-xl p-6">
                  <h3 className="font-semibold text-red-400 mb-2">2. Not Verifying Absence of Voltage</h3>
                  <p className="text-white/60 text-sm">Applying locks but skipping the voltage verification step. A locked-out breaker could be the wrong breaker, or an unknown backfeed could be present. Always test with a properly rated voltage detector using the live-dead-live method.</p>
                </div>

                <div className="bg-red-900/20 border border-red-500/30 rounded-xl p-6">
                  <h3 className="font-semibold text-red-400 mb-2">3. Using Another Worker&apos;s Lock</h3>
                  <p className="text-white/60 text-sm">Working under someone else&apos;s lockout without applying your own personal lock. If that person removes their lock thinking work is complete, you are exposed to energized equipment. Every worker must apply their own lock.</p>
                </div>

                <div className="bg-red-900/20 border border-red-500/30 rounded-xl p-6">
                  <h3 className="font-semibold text-red-400 mb-2">4. Locking Out the Wrong Disconnect</h3>
                  <p className="text-white/60 text-sm">Mislabeled panels, incorrect single-line diagrams, or simple human error can lead to locking out the wrong circuit. This is why voltage verification at the point of work is non-negotiable. Never trust labeling alone.</p>
                </div>

                <div className="bg-red-900/20 border border-red-500/30 rounded-xl p-6">
                  <h3 className="font-semibold text-red-400 mb-2">5. Missing Secondary Energy Sources</h3>
                  <p className="text-white/60 text-sm">Locking out the primary electrical feed but failing to identify and lock out backup generators, UPS systems, battery systems, capacitor banks, or feeds from other panels. A thorough energy source survey before starting is essential.</p>
                </div>

                <div className="bg-red-900/20 border border-red-500/30 rounded-xl p-6">
                  <h3 className="font-semibold text-red-400 mb-2">6. Removing Another Person&apos;s Lock</h3>
                  <p className="text-white/60 text-sm">Only the person who applied a lock should remove it. Removing another worker&apos;s lock without following the employer&apos;s documented absent-employee procedure puts that worker at risk of electrocution. Cutting locks should only be a last resort with management authorization.</p>
                </div>

                <div className="bg-red-900/20 border border-red-500/30 rounded-xl p-6">
                  <h3 className="font-semibold text-red-400 mb-2">7. No Written Procedures</h3>
                  <p className="text-white/60 text-sm">Relying on &quot;tribal knowledge&quot; instead of documented, equipment-specific energy control procedures. Written procedures ensure consistency, account for all energy sources, and provide a reference during complex lockouts.</p>
                </div>

                <div className="bg-red-900/20 border border-red-500/30 rounded-xl p-6">
                  <h3 className="font-semibold text-red-400 mb-2">8. Tagout Without Lockout</h3>
                  <p className="text-white/60 text-sm">Using tags alone when energy-isolating devices are capable of being locked out. OSHA requires lockout whenever possible. Tagout alone provides a false sense of security -- anyone can remove a tag and re-energize equipment.</p>
                </div>
              </div>

              <div className="bg-orange-900/30 rounded-xl p-6 my-6">
                <h4 className="font-semibold text-orange-400 mb-3">Removing Locks: Authorized Procedure for Absent Employees</h4>
                <p className="text-white/70 mb-3">
                  When a worker leaves without removing their lock (end of shift, emergency, etc.), the employer must follow a documented procedure that includes:
                </p>
                <ul className="text-white/60 text-sm space-y-1">
                  <li>Verification that the authorized employee is not at the facility</li>
                  <li>Reasonable efforts to contact the employee to inform them their lock is being removed</li>
                  <li>Ensuring the employee knows their lock was removed before they return to work</li>
                  <li>Authorization from management (typically in writing)</li>
                  <li>Verification that removal will not endanger any other worker</li>
                </ul>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">LOTO Removal Procedure</h2>
              <p className="text-white/80 mb-4">
                The procedure for removing lockout/tagout devices and restoring energy is just as important as the application procedure. Per OSHA 1910.147(e), the following steps must be followed:
              </p>

              <div className="space-y-4 my-6">
                <div className="bg-white/5 rounded-xl p-4 flex items-start gap-4">
                  <span className="bg-green-600 text-white text-sm font-bold px-3 py-1 rounded-full flex-shrink-0">1</span>
                  <div>
                    <p className="font-semibold text-white">Inspect Work Area</p>
                    <p className="text-white/60 text-sm">Ensure all tools, materials, and non-essential items have been removed from the equipment. Verify all guards and safety devices are reinstalled.</p>
                  </div>
                </div>
                <div className="bg-white/5 rounded-xl p-4 flex items-start gap-4">
                  <span className="bg-green-600 text-white text-sm font-bold px-3 py-1 rounded-full flex-shrink-0">2</span>
                  <div>
                    <p className="font-semibold text-white">Verify Personnel Clear</p>
                    <p className="text-white/60 text-sm">Confirm that all employees are safely positioned away from the equipment. Account for every worker who was involved in the lockout.</p>
                  </div>
                </div>
                <div className="bg-white/5 rounded-xl p-4 flex items-start gap-4">
                  <span className="bg-green-600 text-white text-sm font-bold px-3 py-1 rounded-full flex-shrink-0">3</span>
                  <div>
                    <p className="font-semibold text-white">Notify Affected Employees</p>
                    <p className="text-white/60 text-sm">Notify all affected employees that the lockout devices are about to be removed and the equipment will be re-energized.</p>
                  </div>
                </div>
                <div className="bg-white/5 rounded-xl p-4 flex items-start gap-4">
                  <span className="bg-green-600 text-white text-sm font-bold px-3 py-1 rounded-full flex-shrink-0">4</span>
                  <div>
                    <p className="font-semibold text-white">Remove Devices</p>
                    <p className="text-white/60 text-sm">Each authorized employee removes their own lock and tag. The person who applied the lock must be the one to remove it.</p>
                  </div>
                </div>
                <div className="bg-white/5 rounded-xl p-4 flex items-start gap-4">
                  <span className="bg-green-600 text-white text-sm font-bold px-3 py-1 rounded-full flex-shrink-0">5</span>
                  <div>
                    <p className="font-semibold text-white">Re-Energize</p>
                    <p className="text-white/60 text-sm">Close disconnects and re-energize the equipment following the normal startup procedure. Verify proper operation.</p>
                  </div>
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
                <Link href="/blog/electrical-safety-nfpa-70e" className="bg-white/5 hover:bg-white/10 rounded-xl p-6 transition-colors">
                  <span className="text-red-400 text-sm">Safety</span>
                  <h3 className="font-semibold mt-2">NFPA 70E Electrical Safety: Arc Flash PPE & LOTO Guide</h3>
                </Link>
                <Link href="/blog/electrical-inspection-checklist" className="bg-white/5 hover:bg-white/10 rounded-xl p-6 transition-colors">
                  <span className="text-green-400 text-sm">Inspections</span>
                  <h3 className="font-semibold mt-2">Electrical Inspection Checklist</h3>
                </Link>
                <Link href="/blog/electrical-panel-troubleshooting" className="bg-white/5 hover:bg-white/10 rounded-xl p-6 transition-colors">
                  <span className="text-cyan-400 text-sm">Troubleshooting</span>
                  <h3 className="font-semibold mt-2">Electrical Panel Troubleshooting</h3>
                </Link>
                <Link href="/blog/disconnect-switch-requirements-nec" className="bg-white/5 hover:bg-white/10 rounded-xl p-6 transition-colors">
                  <span className="text-purple-400 text-sm">NEC Code</span>
                  <h3 className="font-semibold mt-2">Disconnect Switch Requirements per NEC</h3>
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
