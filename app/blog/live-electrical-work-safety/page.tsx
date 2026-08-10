import { Metadata } from "next";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import { BlogPostingJsonLd, BreadcrumbJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Working on Live Electrical Equipment: NFPA 70E Safety Requirements",
  description: "Comprehensive guide to working on live electrical equipment per NFPA 70E. Learn energized work permit requirements, when live work is permitted, approach boundaries (limited, restricted, prohibited), PPE for energized electrical work, risk assessment procedures, and OSHA enforcement of energized work safety rules.",
  keywords: [
    "live electrical work",
    "energized work permit",
    "NFPA 70E live work",
    "working on energized equipment",
    "live work justification",
    "electrical work PPE",
    "approach boundaries NFPA",
    "energized electrical work",
    "hot work electrical",
    "live circuit work"
  ],
  alternates: {
    canonical: "https://amporalabs.com/blog/live-electrical-work-safety",
  },
  openGraph: {
    title: "Working on Live Electrical Equipment: NFPA 70E Safety Requirements - Ampora",
    description: "Master NFPA 70E energized work rules: when live work is permitted, energized work permits, approach boundaries, PPE requirements, and risk assessment procedures.",
    url: "https://amporalabs.com/blog/live-electrical-work-safety",
    type: "article",
    publishedTime: "2026-03-04",
  },
};

function HeroIllustration() {
  return (
    <svg viewBox="0 0 400 180" className="w-full h-40 md:h-48" aria-label="Approach boundaries and PPE zones diagram for energized electrical work">
      {/* Background */}
      <rect x="10" y="10" width="380" height="160" rx="4" fill="#1f2937" stroke="#374151" strokeWidth="1"/>

      {/* Equipment (center) */}
      <rect x="180" y="50" width="40" height="80" rx="2" fill="#374151" stroke="#6b7280" strokeWidth="1.5"/>
      <text x="200" y="85" textAnchor="middle" fill="#ef4444" fontSize="6" fontWeight="bold">ENERGIZED</text>
      <text x="200" y="95" textAnchor="middle" fill="#ef4444" fontSize="5">EQUIPMENT</text>
      {/* Lightning bolt on equipment */}
      <path d="M196 60 L192 72 L198 72 L194 84" fill="none" stroke="#fbbf24" strokeWidth="1.5"/>
      <path d="M204 60 L208 72 L202 72 L206 84" fill="none" stroke="#fbbf24" strokeWidth="1.5"/>

      {/* Prohibited Approach Boundary (innermost - red) */}
      <rect x="165" y="40" width="70" height="100" rx="4" fill="none" stroke="#ef4444" strokeWidth="1.5" strokeDasharray="3,2"/>
      <text x="200" y="148" textAnchor="middle" fill="#ef4444" fontSize="4.5" fontWeight="bold">PROHIBITED</text>

      {/* Restricted Approach Boundary (middle - yellow) */}
      <rect x="140" y="28" width="120" height="124" rx="6" fill="none" stroke="#eab308" strokeWidth="1.5" strokeDasharray="4,3"/>
      <text x="200" y="160" textAnchor="middle" fill="#eab308" fontSize="4.5" fontWeight="bold">RESTRICTED</text>

      {/* Limited Approach Boundary (outer - orange) */}
      <rect x="105" y="18" width="190" height="144" rx="8" fill="none" stroke="#f97316" strokeWidth="1.5" strokeDasharray="5,3"/>
      <text x="200" y="170" textAnchor="middle" fill="#f97316" fontSize="4.5" fontWeight="bold">LIMITED APPROACH</text>

      {/* Worker figure (left side) */}
      <g transform="translate(60, 55)">
        {/* Hard hat */}
        <ellipse cx="16" cy="6" rx="10" ry="5" fill="none" stroke="#22d3ee" strokeWidth="1.5"/>
        {/* Head */}
        <circle cx="16" cy="12" r="6" fill="none" stroke="#22d3ee" strokeWidth="1.2"/>
        {/* Face shield */}
        <path d="M10 10 L10 18 L22 18 L22 10" fill="#22d3ee" fillOpacity="0.15" stroke="#22d3ee" strokeWidth="0.8"/>
        {/* Body */}
        <rect x="10" y="18" width="12" height="20" rx="2" fill="none" stroke="#22d3ee" strokeWidth="1.2"/>
        {/* AR label */}
        <text x="16" y="30" textAnchor="middle" fill="#22d3ee" fontSize="4" fontWeight="bold">AR</text>
        {/* Legs */}
        <line x1="13" y1="38" x2="13" y2="50" stroke="#22d3ee" strokeWidth="1.2"/>
        <line x1="19" y1="38" x2="19" y2="50" stroke="#22d3ee" strokeWidth="1.2"/>
        {/* Gloves */}
        <rect x="4" y="26" width="5" height="7" rx="1" fill="none" stroke="#f59e0b" strokeWidth="0.8"/>
        <rect x="23" y="26" width="5" height="7" rx="1" fill="none" stroke="#f59e0b" strokeWidth="0.8"/>
        <text x="16" y="60" textAnchor="middle" fill="#22d3ee" fontSize="4.5">QUALIFIED</text>
        <text x="16" y="66" textAnchor="middle" fill="#22d3ee" fontSize="4.5">WORKER</text>
      </g>

      {/* PPE Requirements panel (right side) */}
      <g transform="translate(305, 22)">
        <text x="35" y="10" textAnchor="middle" fill="#22d3ee" fontSize="6" fontWeight="bold">PPE REQUIRED</text>

        <g transform="translate(0, 16)">
          <rect x="0" y="0" width="72" height="22" rx="3" fill="#22d3ee" fillOpacity="0.1" stroke="#22d3ee" strokeWidth="0.8"/>
          <circle cx="10" cy="11" r="4" fill="none" stroke="#22d3ee" strokeWidth="1"/>
          <text x="18" y="9" fill="#22d3ee" fontSize="4.5">Voltage-rated</text>
          <text x="18" y="16" fill="#22d3ee" fontSize="4.5">gloves &amp; tools</text>
        </g>

        <g transform="translate(0, 42)">
          <rect x="0" y="0" width="72" height="22" rx="3" fill="#f97316" fillOpacity="0.1" stroke="#f97316" strokeWidth="0.8"/>
          <circle cx="10" cy="8" r="4" fill="none" stroke="#f97316" strokeWidth="1"/>
          <rect x="6" y="12" width="8" height="5" rx="1" fill="none" stroke="#f97316" strokeWidth="0.8"/>
          <text x="18" y="9" fill="#f97316" fontSize="4.5">Arc-rated PPE</text>
          <text x="18" y="16" fill="#f97316" fontSize="4.5">per cal/cm&sup2;</text>
        </g>

        <g transform="translate(0, 68)">
          <rect x="0" y="0" width="72" height="22" rx="3" fill="#eab308" fillOpacity="0.1" stroke="#eab308" strokeWidth="0.8"/>
          <rect x="6" y="4" width="8" height="14" rx="1" fill="none" stroke="#eab308" strokeWidth="0.8"/>
          <text x="18" y="9" fill="#eab308" fontSize="4.5">Insulated tools</text>
          <text x="18" y="16" fill="#eab308" fontSize="4.5">1000V rated</text>
        </g>

        <g transform="translate(0, 94)">
          <rect x="0" y="0" width="72" height="22" rx="3" fill="#ef4444" fillOpacity="0.1" stroke="#ef4444" strokeWidth="0.8"/>
          <rect x="5" y="3" width="10" height="16" rx="1" fill="none" stroke="#ef4444" strokeWidth="0.8"/>
          <line x1="5" y1="8" x2="15" y2="8" stroke="#ef4444" strokeWidth="0.5"/>
          <text x="18" y="9" fill="#ef4444" fontSize="4.5">Energized Work</text>
          <text x="18" y="16" fill="#ef4444" fontSize="4.5">Permit (EEWP)</text>
        </g>

        <g transform="translate(0, 120)">
          <rect x="0" y="0" width="72" height="22" rx="3" fill="#a855f7" fillOpacity="0.1" stroke="#a855f7" strokeWidth="0.8"/>
          <text x="10" y="13" fill="#a855f7" fontSize="8" fontWeight="bold">!</text>
          <text x="18" y="9" fill="#a855f7" fontSize="4.5">Risk assessment</text>
          <text x="18" y="16" fill="#a855f7" fontSize="4.5">documented</text>
        </g>
      </g>
    </svg>
  );
}

export default function LiveElectricalWorkSafetyPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navigation />
      <div className="pt-20">
        <BreadcrumbJsonLd
          items={[
            { name: "Home", url: "https://amporalabs.com" },
            { name: "Blog", url: "https://amporalabs.com/blog" },
            { name: "Working on Live Electrical Equipment", url: "https://amporalabs.com/blog/live-electrical-work-safety" },
          ]}
        />
        <BlogPostingJsonLd
          headline="Working on Live Electrical Equipment: NFPA 70E Safety Requirements"
          description="Comprehensive guide to working on live electrical equipment per NFPA 70E covering energized work permits, approach boundaries, PPE requirements, and risk assessment procedures."
          datePublished="2026-03-04"
          dateModified="2026-03-04"
          url="https://amporalabs.com/blog/live-electrical-work-safety"
          wordCount={5200}
          keywords={["live electrical work", "energized work permit", "NFPA 70E", "approach boundaries", "PPE for energized work"]}
        />

        <article className="max-w-4xl mx-auto px-6 py-12">
          {/* Breadcrumb */}
          <nav className="text-sm text-white/60 mb-8">
            <Link href="/" className="hover:text-white">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/blog" className="hover:text-white">Blog</Link>
            <span className="mx-2">/</span>
            <span className="text-white">Working on Live Electrical Equipment</span>
          </nav>

          {/* Article Header */}
          <header className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <span className="px-3 py-1 bg-rose-600/20 text-rose-300 text-sm font-medium rounded-full">
                Safety
              </span>
              <span className="text-white/40 text-sm">18 min read</span>
              <span className="text-white/40 text-sm">March 4, 2026</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6 leading-tight">
              Working on Live Electrical Equipment: NFPA 70E Safety Requirements
            </h1>
            <p className="text-xl text-white/70">
              NFPA 70E is clear: de-energize first. But when live work is unavoidable, strict rules govern who can do it, how it must be justified, and what protection is required. This guide covers the complete framework for energized electrical work &mdash; from the hierarchy of controls and energized work permits to approach boundaries, PPE selection, risk assessments, voltage verification, and OSHA enforcement.
            </p>
          </header>

          <div className="mb-12 bg-gradient-to-br from-rose-900/20 to-cyan-900/20 rounded-2xl p-6 border border-white/10">
            <HeroIllustration />
          </div>

          {/* Safety Warning */}
          <div className="bg-red-900/40 border-2 border-red-500/50 rounded-2xl p-6 mb-12">
            <div className="flex items-start gap-4">
              <div className="text-3xl">&#9888;</div>
              <div>
                <h3 className="font-display font-bold text-lg mb-2 text-red-400">Critical Safety Warning</h3>
                <p className="text-white/80 text-sm">
                  This article is for educational purposes only. Working on energized electrical equipment is extremely dangerous and can result in death, severe burns, arc flash injuries, and electrocution. Always de-energize equipment when possible. Energized work must only be performed by qualified persons with proper authorization, training, PPE, and an approved energized electrical work permit. Follow your employer&apos;s electrical safety program at all times.
                </p>
              </div>
            </div>
          </div>

          {/* Table of Contents */}
          <div className="bg-white/5 rounded-2xl p-6 mb-12">
            <h2 className="font-display font-bold mb-4">In This Guide</h2>
            <ul className="space-y-2 text-white/70">
              <li><a href="#hierarchy-of-controls" className="hover:text-purple-400">NFPA 70E Hierarchy of Controls</a></li>
              <li><a href="#when-live-work-permitted" className="hover:text-purple-400">When Is Live Work Permitted?</a></li>
              <li><a href="#energized-work-permit" className="hover:text-purple-400">Energized Electrical Work Permit Requirements</a></li>
              <li><a href="#approach-boundaries" className="hover:text-purple-400">Approach Boundaries: Limited, Restricted, Prohibited</a></li>
              <li><a href="#ppe-requirements" className="hover:text-purple-400">PPE Requirements for Energized Work</a></li>
              <li><a href="#risk-assessment" className="hover:text-purple-400">Risk Assessment Procedures</a></li>
              <li><a href="#voltage-testing" className="hover:text-purple-400">Voltage Testing and Verification</a></li>
              <li><a href="#common-scenarios" className="hover:text-purple-400">Common Scenarios Requiring Live Work</a></li>
              <li><a href="#documentation" className="hover:text-purple-400">Documentation Requirements</a></li>
              <li><a href="#employer-responsibilities" className="hover:text-purple-400">Employer Responsibilities</a></li>
              <li><a href="#osha-enforcement" className="hover:text-purple-400">OSHA Enforcement and Citations</a></li>
              <li><a href="#faq" className="hover:text-purple-400">Frequently Asked Questions</a></li>
            </ul>
          </div>

          {/* Article Content */}
          <div className="prose prose-invert prose-lg max-w-none">

            <section id="hierarchy-of-controls" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">NFPA 70E Hierarchy of Controls</h2>
              <p className="text-white/80 mb-4">
                NFPA 70E Section 110.1(H) establishes a <strong>hierarchy of risk control methods</strong> that must be applied in order of preference when addressing electrical hazards. The fundamental principle is simple: <strong>eliminate the hazard first</strong>. Only when elimination is not feasible should lower-tier controls be considered, and PPE is always the last line of defense &mdash; never the first.
              </p>

              <div className="space-y-3 my-6">
                <div className="bg-green-900/30 rounded-xl p-5 border-l-4 border-green-500">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="bg-green-600 text-white text-sm font-bold px-3 py-1 rounded-full">1</span>
                    <h3 className="font-semibold text-green-400">Elimination (Most Effective)</h3>
                  </div>
                  <p className="text-white/70 text-sm">
                    <strong>De-energize the equipment</strong> and establish an electrically safe work condition per NFPA 70E Article 120. This is always the preferred approach. Lockout/tagout (<Link href="/blog/lockout-tagout-electrical-procedures" className="text-cyan-400 hover:text-cyan-300">LOTO</Link>) procedures must be followed to verify zero energy state.
                  </p>
                </div>
                <div className="bg-emerald-900/30 rounded-xl p-5 border-l-4 border-emerald-500">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="bg-emerald-600 text-white text-sm font-bold px-3 py-1 rounded-full">2</span>
                    <h3 className="font-semibold text-emerald-400">Substitution</h3>
                  </div>
                  <p className="text-white/70 text-sm">
                    Replace the hazardous task or equipment with something less hazardous. Examples include using remote racking devices to withdraw breakers from a safe distance, or installing infrared inspection windows to eliminate the need to open energized enclosures.
                  </p>
                </div>
                <div className="bg-yellow-900/30 rounded-xl p-5 border-l-4 border-yellow-500">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="bg-yellow-600 text-white text-sm font-bold px-3 py-1 rounded-full">3</span>
                    <h3 className="font-semibold text-yellow-400">Engineering Controls</h3>
                  </div>
                  <p className="text-white/70 text-sm">
                    Design the system to reduce hazard exposure. Arc-resistant switchgear, current-limiting protective devices, zone-selective interlocking (ZSI), and maintenance mode settings on breakers all reduce incident energy levels without relying on human behavior.
                  </p>
                </div>
                <div className="bg-orange-900/30 rounded-xl p-5 border-l-4 border-orange-500">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="bg-orange-600 text-white text-sm font-bold px-3 py-1 rounded-full">4</span>
                    <h3 className="font-semibold text-orange-400">Awareness</h3>
                  </div>
                  <p className="text-white/70 text-sm">
                    Provide warning signs, <Link href="/blog/arc-flash-hazard-analysis" className="text-cyan-400 hover:text-cyan-300">arc flash labels</Link>, barricades, and safety attendants to alert workers to the presence of hazards. Labels per NEC 110.16 inform qualified persons of incident energy levels and required PPE before they approach equipment.
                  </p>
                </div>
                <div className="bg-red-900/30 rounded-xl p-5 border-l-4 border-red-500">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="bg-red-600 text-white text-sm font-bold px-3 py-1 rounded-full">5</span>
                    <h3 className="font-semibold text-red-400">Administrative Controls</h3>
                  </div>
                  <p className="text-white/70 text-sm">
                    Written safe work practices, job safety planning, pre-task briefings, energized electrical work permits, training programs, and policies that limit who can perform energized work and under what conditions.
                  </p>
                </div>
                <div className="bg-red-950/30 rounded-xl p-5 border-l-4 border-red-700">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="bg-red-800 text-white text-sm font-bold px-3 py-1 rounded-full">6</span>
                    <h3 className="font-semibold text-red-500">PPE (Least Effective)</h3>
                  </div>
                  <p className="text-white/70 text-sm">
                    Personal protective equipment is the <strong>last line of defense</strong>, not a substitute for the controls above. PPE does not prevent an arc flash or shock event &mdash; it only reduces the severity of injury if an event occurs. Arc-rated clothing, voltage-rated gloves, face shields, and insulated tools are required but should never be the sole protective measure.
                  </p>
                </div>
              </div>

              <div className="bg-purple-900/30 rounded-xl p-6 my-6">
                <h4 className="font-semibold text-purple-400 mb-3">Key Principle</h4>
                <p className="text-white/70 text-sm">
                  The hierarchy is not a menu &mdash; it is a sequence. You must demonstrate that higher-tier controls are not feasible before relying on lower-tier controls. An employer who jumps straight to PPE without attempting elimination or engineering controls is not compliant with <Link href="/blog/electrical-safety-nfpa-70e" className="text-cyan-400 hover:text-cyan-300">NFPA 70E</Link>.
                </p>
              </div>
            </section>

            <section id="when-live-work-permitted" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">When Is Live Work Permitted?</h2>
              <p className="text-white/80 mb-4">
                NFPA 70E Section 130.2 establishes a clear default: <strong>energized electrical conductors and circuit parts shall be put into an electrically safe work condition before work is performed</strong>. Live work is the exception, not the rule, and is only permitted under two narrowly defined conditions.
              </p>

              <div className="grid md:grid-cols-2 gap-6 my-6">
                <div className="bg-orange-900/30 rounded-xl p-6 border border-orange-500/30">
                  <h3 className="font-semibold text-orange-400 mb-3">Condition 1: Infeasible to De-Energize</h3>
                  <p className="text-white/70 text-sm mb-3">
                    The employer must demonstrate that de-energizing introduces <strong>additional or increased hazards</strong>, or that the task is <strong>infeasible in a de-energized state</strong>.
                  </p>
                  <ul className="text-white/60 text-sm space-y-2">
                    <li><strong>Increased hazard examples:</strong> Interruption of life support systems, emergency ventilation, fire suppression pumps, or hazardous material monitoring that cannot be transferred to backup power</li>
                    <li><strong>Infeasibility examples:</strong> Voltage testing, troubleshooting to identify the source of a fault, diagnostic measurements that require the circuit to be energized to produce meaningful data</li>
                  </ul>
                </div>
                <div className="bg-red-900/30 rounded-xl p-6 border border-red-500/30">
                  <h3 className="font-semibold text-red-400 mb-3">Condition 2: Less Than 50 Volts</h3>
                  <p className="text-white/70 text-sm mb-3">
                    Equipment operating at less than 50 volts may be worked on energized <strong>only if</strong> the determination is made that the circuit is not capable of producing an arc flash hazard due to its energy capacity.
                  </p>
                  <p className="text-white/60 text-sm">
                    Note: Not all sub-50V circuits are safe. Large battery banks, welding circuits, and high-current low-voltage systems can still produce dangerous arc flash events even below 50V if sufficient fault current is available.
                  </p>
                </div>
              </div>

              <div className="bg-red-900/40 rounded-xl p-6 my-6 border border-red-500/30">
                <h4 className="font-semibold text-red-400 mb-3">What Is NOT a Valid Justification for Live Work</h4>
                <ul className="text-white/70 space-y-2 text-sm">
                  <li><strong>Convenience or speed:</strong> &ldquo;It would take too long to shut down&rdquo; is not a valid reason</li>
                  <li><strong>Production pressure:</strong> &ldquo;We can&apos;t afford the downtime&rdquo; does not justify energized work</li>
                  <li><strong>Cost savings:</strong> Avoiding overtime or scheduling costs is not an acceptable justification</li>
                  <li><strong>Customer requests:</strong> A customer&apos;s preference to keep equipment running does not override safety requirements</li>
                  <li><strong>Habit:</strong> &ldquo;We&apos;ve always done it this way&rdquo; is not a safety justification</li>
                  <li><strong>Lack of planning:</strong> Failure to schedule a shutdown does not create an emergency</li>
                </ul>
              </div>

              <p className="text-white/80 mb-4">
                The determination that energized work is necessary must be documented <strong>before</strong> the work begins. The qualified person performing the work and the responsible manager must both agree that de-energizing is infeasible or creates a greater hazard. This determination becomes part of the energized electrical work permit.
              </p>
            </section>

            <section id="energized-work-permit" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Energized Electrical Work Permit Requirements</h2>
              <p className="text-white/80 mb-4">
                When work on energized equipment is justified under NFPA 70E Section 130.2, an <strong>Energized Electrical Work Permit (EEWP)</strong> must be completed before work begins. The EEWP is a formal document that ensures all necessary safety precautions have been identified, planned, and communicated. It is required by NFPA 70E Section 130.2(B).
              </p>

              <div className="bg-white/5 rounded-xl p-6 my-6">
                <h4 className="font-semibold text-white mb-4">Required EEWP Elements (NFPA 70E 130.2(B))</h4>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <span className="bg-cyan-600 text-white text-xs font-bold px-2 py-0.5 rounded mt-0.5">1</span>
                    <div>
                      <p className="font-semibold text-white text-sm">Description of the Circuit and Equipment</p>
                      <p className="text-white/60 text-sm">Identify the specific circuit, equipment name/number, location, voltage, and available fault current.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="bg-cyan-600 text-white text-xs font-bold px-2 py-0.5 rounded mt-0.5">2</span>
                    <div>
                      <p className="font-semibold text-white text-sm">Justification for Energized Work</p>
                      <p className="text-white/60 text-sm">Document why de-energizing is infeasible or would create a greater hazard. Must meet NFPA 70E 130.2(A) criteria.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="bg-cyan-600 text-white text-xs font-bold px-2 py-0.5 rounded mt-0.5">3</span>
                    <div>
                      <p className="font-semibold text-white text-sm">Description of Safe Work Practices</p>
                      <p className="text-white/60 text-sm">Detailed work procedures, sequence of tasks, and specific safety measures to be employed during the work.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="bg-cyan-600 text-white text-xs font-bold px-2 py-0.5 rounded mt-0.5">4</span>
                    <div>
                      <p className="font-semibold text-white text-sm">Results of the Shock Risk Assessment</p>
                      <p className="text-white/60 text-sm">Voltage level, approach boundaries (limited, restricted, prohibited), and shock protection measures.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="bg-cyan-600 text-white text-xs font-bold px-2 py-0.5 rounded mt-0.5">5</span>
                    <div>
                      <p className="font-semibold text-white text-sm">Results of the Arc Flash Risk Assessment</p>
                      <p className="text-white/60 text-sm">Incident energy at the working distance, arc flash boundary, and applicable PPE category or specific arc rating.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="bg-cyan-600 text-white text-xs font-bold px-2 py-0.5 rounded mt-0.5">6</span>
                    <div>
                      <p className="font-semibold text-white text-sm">Determination of Shock and Arc Flash Protection Boundaries</p>
                      <p className="text-white/60 text-sm">Specific distances for limited, restricted, and prohibited approach boundaries and the arc flash boundary.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="bg-cyan-600 text-white text-xs font-bold px-2 py-0.5 rounded mt-0.5">7</span>
                    <div>
                      <p className="font-semibold text-white text-sm">Required PPE</p>
                      <p className="text-white/60 text-sm">Specific PPE items required: arc-rated clothing with minimum cal/cm&sup2; rating, voltage-rated gloves, face shield/hood, insulated tools, etc.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="bg-cyan-600 text-white text-xs font-bold px-2 py-0.5 rounded mt-0.5">8</span>
                    <div>
                      <p className="font-semibold text-white text-sm">Means to Restrict Access</p>
                      <p className="text-white/60 text-sm">Barriers, barricades, attendants, or other methods to prevent unqualified persons from entering the work area.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="bg-cyan-600 text-white text-xs font-bold px-2 py-0.5 rounded mt-0.5">9</span>
                    <div>
                      <p className="font-semibold text-white text-sm">Evidence of Job Briefing</p>
                      <p className="text-white/60 text-sm">Documentation that all workers involved received a job safety briefing covering the hazards, boundaries, PPE, and emergency procedures.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="bg-cyan-600 text-white text-xs font-bold px-2 py-0.5 rounded mt-0.5">10</span>
                    <div>
                      <p className="font-semibold text-white text-sm">Approval Signatures</p>
                      <p className="text-white/60 text-sm">Signed by the qualified person performing the work and approved by the responsible management (safety officer or equivalent).</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-orange-900/30 rounded-xl p-6 my-6">
                <h4 className="font-semibold text-orange-400 mb-3">EEWP Exceptions</h4>
                <p className="text-white/70 text-sm mb-3">
                  An EEWP is <strong>not required</strong> for the following tasks, though PPE and safe work practices are still mandatory:
                </p>
                <ul className="text-white/60 text-sm space-y-1">
                  <li><strong>Testing:</strong> Using test instruments to verify absence of voltage or measure circuit parameters</li>
                  <li><strong>Thermography:</strong> Non-contact infrared inspections that do not require opening enclosures or crossing the restricted approach boundary</li>
                  <li><strong>Visual inspections:</strong> Observing equipment condition from outside the restricted approach boundary with no physical interaction</li>
                  <li><strong>Normal operation:</strong> Operating a switch, circuit breaker, or other device using its designed operating mechanism (e.g., flipping a breaker handle)</li>
                </ul>
              </div>
            </section>

            <section id="approach-boundaries" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Approach Boundaries: Limited, Restricted, Prohibited</h2>
              <p className="text-white/80 mb-4">
                NFPA 70E defines three <strong>shock protection approach boundaries</strong> around exposed energized electrical conductors and circuit parts. These boundaries create concentric zones of increasing hazard, each with specific requirements for who may enter and what protection is required. Understanding and enforcing these boundaries is essential for energized work safety.
              </p>

              <div className="space-y-4 my-6">
                <div className="bg-orange-900/30 rounded-xl p-6 border-l-4 border-orange-500">
                  <h3 className="font-semibold text-orange-400 mb-2">Limited Approach Boundary</h3>
                  <p className="text-white/70 text-sm mb-2">
                    The outermost boundary &mdash; the distance from exposed energized conductors within which a <strong>shock hazard exists</strong>. Only <strong>qualified persons</strong> may enter this boundary. Unqualified persons may enter only when continuously escorted by a qualified person and only if they remain outside the restricted approach boundary.
                  </p>
                  <div className="bg-white/5 rounded-lg p-3 mt-3">
                    <p className="text-white/60 text-xs">
                      <strong>480V exposed fixed parts:</strong> 3 ft 6 in | <strong>480V exposed movable:</strong> 3 ft 6 in | <strong>240V:</strong> 3 ft 6 in
                    </p>
                  </div>
                </div>

                <div className="bg-yellow-900/30 rounded-xl p-6 border-l-4 border-yellow-500">
                  <h3 className="font-semibold text-yellow-400 mb-2">Restricted Approach Boundary</h3>
                  <p className="text-white/70 text-sm mb-2">
                    The middle boundary &mdash; the distance within which there is an <strong>increased risk of shock</strong> due to proximity to energized parts. Only qualified persons using <strong>shock protection equipment and techniques</strong> may work within this boundary. Workers must use insulated tools rated for the voltage and wear voltage-rated gloves.
                  </p>
                  <div className="bg-white/5 rounded-lg p-3 mt-3">
                    <p className="text-white/60 text-xs">
                      <strong>480V:</strong> 1 ft 0 in | <strong>240V:</strong> 1 ft 0 in | <strong>4160V:</strong> 2 ft 7 in
                    </p>
                  </div>
                </div>

                <div className="bg-red-900/40 rounded-xl p-6 border-l-4 border-red-600">
                  <h3 className="font-semibold text-red-500 mb-2">Prohibited Approach Boundary</h3>
                  <p className="text-white/70 text-sm mb-2">
                    The innermost boundary &mdash; crossing this boundary is considered <strong>equivalent to making direct contact</strong> with energized conductors. Work within this boundary requires the same protections as direct contact: voltage-rated gloves and tools rated for the system voltage, or the equipment must be placed in an electrically safe work condition.
                  </p>
                  <div className="bg-white/5 rounded-lg p-3 mt-3">
                    <p className="text-white/60 text-xs">
                      <strong>480V:</strong> 1 in | <strong>240V:</strong> Avoid contact | <strong>4160V:</strong> 7 in
                    </p>
                  </div>
                </div>
              </div>

              <h3 className="text-xl font-display font-semibold mb-3 text-cyan-400">Approach Boundary Distances for AC Systems (Table 130.4(E)(a))</h3>
              <div className="overflow-x-auto my-6">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-white/20">
                      <th className="text-left py-3 px-4 text-white/60">Nominal Voltage</th>
                      <th className="text-left py-3 px-4 text-white/60">Limited (Exposed Movable)</th>
                      <th className="text-left py-3 px-4 text-white/60">Restricted</th>
                      <th className="text-left py-3 px-4 text-white/60">Prohibited</th>
                    </tr>
                  </thead>
                  <tbody className="text-white/80">
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">0-50V</td>
                      <td className="py-3 px-4 font-mono text-orange-400">Not specified</td>
                      <td className="py-3 px-4 font-mono text-yellow-400">Not specified</td>
                      <td className="py-3 px-4 font-mono text-red-400">Not specified</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">51-120V</td>
                      <td className="py-3 px-4 font-mono text-orange-400">10 ft 0 in</td>
                      <td className="py-3 px-4 font-mono text-yellow-400">Avoid contact</td>
                      <td className="py-3 px-4 font-mono text-red-400">Avoid contact</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">121-240V</td>
                      <td className="py-3 px-4 font-mono text-orange-400">10 ft 0 in</td>
                      <td className="py-3 px-4 font-mono text-yellow-400">1 ft 0 in</td>
                      <td className="py-3 px-4 font-mono text-red-400">Avoid contact</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">241-600V</td>
                      <td className="py-3 px-4 font-mono text-orange-400">10 ft 0 in</td>
                      <td className="py-3 px-4 font-mono text-yellow-400">1 ft 0 in</td>
                      <td className="py-3 px-4 font-mono text-red-400">1 in</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">601V-2500V</td>
                      <td className="py-3 px-4 font-mono text-orange-400">10 ft 0 in</td>
                      <td className="py-3 px-4 font-mono text-yellow-400">2 ft 2 in</td>
                      <td className="py-3 px-4 font-mono text-red-400">3 in</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4">2501V-15kV</td>
                      <td className="py-3 px-4 font-mono text-orange-400">10 ft 0 in</td>
                      <td className="py-3 px-4 font-mono text-yellow-400">2 ft 7 in</td>
                      <td className="py-3 px-4 font-mono text-red-400">7 in</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-white/60 text-sm">
                Note: These values are for exposed movable conductors. NFPA 70E Table 130.4(E)(a) also provides distances for exposed fixed-circuit parts, which may differ for some voltage ranges.
              </p>

              <div className="bg-white/5 rounded-xl p-6 my-6">
                <h4 className="font-semibold text-white mb-3">Arc Flash Boundary vs Shock Boundaries</h4>
                <p className="text-white/70 text-sm mb-3">
                  In addition to the three shock protection boundaries above, NFPA 70E defines the <strong>arc flash boundary</strong> &mdash; the distance at which incident energy equals 1.2 cal/cm&sup2; (onset of second-degree burn). The arc flash boundary is <strong>independent</strong> of the shock boundaries and may be larger or smaller. Anyone crossing the arc flash boundary must wear arc-rated PPE. See our <Link href="/blog/arc-flash-hazard-analysis" className="text-cyan-400 hover:text-cyan-300">arc flash hazard analysis guide</Link> for detailed calculations.
                </p>
              </div>
            </section>

            <section id="ppe-requirements" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">PPE Requirements for Energized Work</h2>
              <p className="text-white/80 mb-4">
                Workers performing energized electrical work face both <strong>shock hazards</strong> and <strong>arc flash hazards</strong>. NFPA 70E requires PPE addressing both types of hazards simultaneously. The specific PPE depends on the voltage level, incident energy at the working distance, and the task being performed.
              </p>

              <h3 className="text-xl font-display font-semibold mb-3 text-cyan-400">Shock Protection PPE</h3>
              <div className="overflow-x-auto my-6">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-white/20">
                      <th className="text-left py-3 px-4 text-white/60">PPE Item</th>
                      <th className="text-left py-3 px-4 text-white/60">Standard</th>
                      <th className="text-left py-3 px-4 text-white/60">Application</th>
                    </tr>
                  </thead>
                  <tbody className="text-white/80">
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-semibold text-yellow-400">Voltage-Rated Gloves</td>
                      <td className="py-3 px-4 font-mono text-sm">ASTM D120</td>
                      <td className="py-3 px-4 text-white/60">Required when crossing the restricted approach boundary. Class 00 (500V) through Class 4 (36,000V). Must be tested every 6 months.</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-semibold text-yellow-400">Leather Protectors</td>
                      <td className="py-3 px-4 font-mono text-sm">ASTM F696</td>
                      <td className="py-3 px-4 text-white/60">Worn over rubber insulating gloves to protect against cuts, abrasion, and punctures. Required for Class 1 and above.</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-semibold text-yellow-400">Insulated Tools</td>
                      <td className="py-3 px-4 font-mono text-sm">ASTM F1505 / IEC 60900</td>
                      <td className="py-3 px-4 text-white/60">Required within the restricted approach boundary. Rated 1000V AC. Must have two layers of insulation (typically red/yellow).</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-semibold text-yellow-400">Insulated Blankets</td>
                      <td className="py-3 px-4 font-mono text-sm">ASTM D1048</td>
                      <td className="py-3 px-4 text-white/60">Used to cover exposed energized parts that are not being directly worked on. Prevents accidental contact.</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-semibold text-yellow-400">Voltage Detectors</td>
                      <td className="py-3 px-4 font-mono text-sm">NFPA 70E 110.6</td>
                      <td className="py-3 px-4 text-white/60">Non-contact and contact-type testers for voltage verification before and during work. Must be tested on a known live source before and after use.</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h3 className="text-xl font-display font-semibold mb-3 text-cyan-400">Arc Flash Protection PPE</h3>
              <div className="overflow-x-auto my-6">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-white/20">
                      <th className="text-left py-3 px-4 text-white/60">PPE Category</th>
                      <th className="text-left py-3 px-4 text-white/60">Min Arc Rating</th>
                      <th className="text-left py-3 px-4 text-white/60">Key Required Items</th>
                    </tr>
                  </thead>
                  <tbody className="text-white/80">
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-bold text-green-400">Category 1</td>
                      <td className="py-3 px-4 font-mono">4 cal/cm&sup2;</td>
                      <td className="py-3 px-4 text-white/60">AR long-sleeve shirt and pants, safety glasses, AR face shield, hearing protection, leather gloves</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-bold text-yellow-400">Category 2</td>
                      <td className="py-3 px-4 font-mono">8 cal/cm&sup2;</td>
                      <td className="py-3 px-4 text-white/60">AR shirt and pants, AR face shield or arc flash hood, AR hard hat liner, hearing protection, leather gloves</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-bold text-orange-400">Category 3</td>
                      <td className="py-3 px-4 font-mono">25 cal/cm&sup2;</td>
                      <td className="py-3 px-4 text-white/60">Arc flash suit with hood and balaclava, AR coveralls, AR gloves, hearing protection, leather work shoes</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-bold text-red-400">Category 4</td>
                      <td className="py-3 px-4 font-mono">40 cal/cm&sup2;</td>
                      <td className="py-3 px-4 text-white/60">Multi-layer arc flash suit with hood and balaclava, AR coveralls, AR gloves, hearing protection, leather work shoes</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="bg-red-900/30 rounded-xl p-6 my-6">
                <h4 className="font-semibold text-red-400 mb-3">Above 40 cal/cm&sup2; &mdash; No Energized Work Permitted</h4>
                <p className="text-white/70 text-sm">
                  If the calculated incident energy at the working distance exceeds <strong>40 cal/cm&sup2;</strong>, no PPE category provides adequate protection. The equipment <strong>must be de-energized</strong> before any work is performed. Some facilities set lower administrative limits (e.g., 25 cal/cm&sup2;) to provide an additional safety margin.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6 my-6">
                <div className="bg-white/5 rounded-xl p-6">
                  <h4 className="font-semibold text-cyan-400 mb-3">Voltage-Rated Glove Classes</h4>
                  <ul className="text-white/60 text-sm space-y-1">
                    <li><strong>Class 00:</strong> Max use 500V AC / 750V DC</li>
                    <li><strong>Class 0:</strong> Max use 1,000V AC / 1,500V DC</li>
                    <li><strong>Class 1:</strong> Max use 7,500V AC / 11,250V DC</li>
                    <li><strong>Class 2:</strong> Max use 17,000V AC / 25,500V DC</li>
                    <li><strong>Class 3:</strong> Max use 26,500V AC / 39,750V DC</li>
                    <li><strong>Class 4:</strong> Max use 36,000V AC / 54,000V DC</li>
                  </ul>
                </div>
                <div className="bg-white/5 rounded-xl p-6">
                  <h4 className="font-semibold text-orange-400 mb-3">Glove Inspection &amp; Testing</h4>
                  <ul className="text-white/60 text-sm space-y-1">
                    <li><strong>Visual inspection:</strong> Before every use &mdash; check for cuts, holes, ozone damage, embedded objects</li>
                    <li><strong>Air test:</strong> Before every use &mdash; inflate and check for air leaks</li>
                    <li><strong>Electrical test:</strong> Every 6 months per ASTM D120 by an accredited laboratory</li>
                    <li><strong>Storage:</strong> Store inflated or flat (not folded), away from UV light and sharp objects</li>
                    <li><strong>Shelf life:</strong> Must be tested within 12 months of being issued, even if unused</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Mid-Article CTA */}
            <div className="not-prose my-12 bg-gradient-to-r from-purple-900/40 to-cyan-900/40 rounded-xl p-6 border border-purple-500/20">
              <div className="flex flex-col sm:flex-row items-center gap-4">
                <div className="flex-1 text-center sm:text-left">
                  <p className="font-display font-bold text-lg text-white mb-1">Ampora &mdash; The Electrician&apos;s AI Companion</p>
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

            <section id="risk-assessment" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Risk Assessment Procedures</h2>
              <p className="text-white/80 mb-4">
                NFPA 70E requires both a <strong>shock risk assessment</strong> and an <strong>arc flash risk assessment</strong> before any worker approaches exposed energized electrical conductors or circuit parts. These assessments are separate but complementary analyses that together determine the full scope of protection needed.
              </p>

              <h3 className="text-xl font-display font-semibold mb-3 text-cyan-400">Shock Risk Assessment (NFPA 70E 130.4)</h3>
              <div className="space-y-4 my-6">
                <div className="bg-white/5 rounded-xl p-4 flex items-start gap-4">
                  <span className="bg-cyan-600 text-white text-sm font-bold px-3 py-1 rounded-full">1</span>
                  <div>
                    <p className="font-semibold text-white">Identify the Voltage</p>
                    <p className="text-white/60 text-sm">Determine the nominal system voltage of all exposed conductors and circuit parts that will be within reach during the task.</p>
                  </div>
                </div>
                <div className="bg-white/5 rounded-xl p-4 flex items-start gap-4">
                  <span className="bg-cyan-600 text-white text-sm font-bold px-3 py-1 rounded-full">2</span>
                  <div>
                    <p className="font-semibold text-white">Determine Approach Boundaries</p>
                    <p className="text-white/60 text-sm">Using NFPA 70E Table 130.4(E)(a), look up the limited, restricted, and prohibited approach boundaries for the identified voltage.</p>
                  </div>
                </div>
                <div className="bg-white/5 rounded-xl p-4 flex items-start gap-4">
                  <span className="bg-cyan-600 text-white text-sm font-bold px-3 py-1 rounded-full">3</span>
                  <div>
                    <p className="font-semibold text-white">Assess Worker Proximity</p>
                    <p className="text-white/60 text-sm">Determine which boundaries the worker will cross during the task. Will the worker be within the limited boundary only, or will work within the restricted or prohibited boundaries be required?</p>
                  </div>
                </div>
                <div className="bg-white/5 rounded-xl p-4 flex items-start gap-4">
                  <span className="bg-cyan-600 text-white text-sm font-bold px-3 py-1 rounded-full">4</span>
                  <div>
                    <p className="font-semibold text-white">Select Shock Protection</p>
                    <p className="text-white/60 text-sm">Choose appropriate voltage-rated gloves, insulated tools, insulating blankets, and other shock protection equipment based on the voltage level and the closest approach distance required by the task.</p>
                  </div>
                </div>
              </div>

              <h3 className="text-xl font-display font-semibold mb-3 text-cyan-400">Arc Flash Risk Assessment (NFPA 70E 130.5)</h3>
              <div className="space-y-4 my-6">
                <div className="bg-white/5 rounded-xl p-4 flex items-start gap-4">
                  <span className="bg-orange-600 text-white text-sm font-bold px-3 py-1 rounded-full">1</span>
                  <div>
                    <p className="font-semibold text-white">Determine if an Arc Flash Hazard Exists</p>
                    <p className="text-white/60 text-sm">An arc flash hazard is presumed to exist for any system operating at 50V or more, unless demonstrated otherwise by calculation or testing.</p>
                  </div>
                </div>
                <div className="bg-white/5 rounded-xl p-4 flex items-start gap-4">
                  <span className="bg-orange-600 text-white text-sm font-bold px-3 py-1 rounded-full">2</span>
                  <div>
                    <p className="font-semibold text-white">Determine Incident Energy or PPE Category</p>
                    <p className="text-white/60 text-sm">Use either the incident energy analysis method (IEEE 1584) or the PPE category table method (NFPA 70E Table 130.7(C)(15)(a)/(b)) to determine the hazard level.</p>
                  </div>
                </div>
                <div className="bg-white/5 rounded-xl p-4 flex items-start gap-4">
                  <span className="bg-orange-600 text-white text-sm font-bold px-3 py-1 rounded-full">3</span>
                  <div>
                    <p className="font-semibold text-white">Determine the Arc Flash Boundary</p>
                    <p className="text-white/60 text-sm">Calculate or look up the distance at which incident energy drops to 1.2 cal/cm&sup2;. Anyone within this boundary must wear arc-rated PPE.</p>
                  </div>
                </div>
                <div className="bg-white/5 rounded-xl p-4 flex items-start gap-4">
                  <span className="bg-orange-600 text-white text-sm font-bold px-3 py-1 rounded-full">4</span>
                  <div>
                    <p className="font-semibold text-white">Select Arc-Rated PPE</p>
                    <p className="text-white/60 text-sm">Choose PPE with an arc rating equal to or greater than the calculated incident energy at the working distance. Ensure all body parts within the arc flash boundary are protected.</p>
                  </div>
                </div>
              </div>

              <div className="bg-purple-900/30 rounded-xl p-6 my-6">
                <h4 className="font-semibold text-purple-400 mb-3">Job Safety Planning and Briefing</h4>
                <p className="text-white/70 text-sm mb-3">
                  Before beginning energized work, the responsible supervisor must conduct a <strong>job safety briefing</strong> that covers:
                </p>
                <ul className="text-white/60 text-sm space-y-1">
                  <li>Hazards associated with the specific task and equipment</li>
                  <li>Shock and arc flash approach boundary distances</li>
                  <li>Required PPE for shock and arc flash protection</li>
                  <li>Safe work practices to be employed</li>
                  <li>Emergency procedures, including rescue and first aid</li>
                  <li>Communication methods among crew members</li>
                  <li>Confirmation that all workers understand the plan</li>
                </ul>
              </div>
            </section>

            <section id="voltage-testing" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Voltage Testing and Verification</h2>
              <p className="text-white/80 mb-4">
                Voltage testing is one of the most common tasks performed on energized equipment. Whether verifying the absence of voltage before beginning de-energized work or taking diagnostic measurements during troubleshooting, proper testing procedures are critical for safety.
              </p>

              <h3 className="text-xl font-display font-semibold mb-3 text-cyan-400">Test Instrument Requirements</h3>
              <div className="grid md:grid-cols-2 gap-6 my-6">
                <div className="bg-white/5 rounded-xl p-6">
                  <h4 className="font-semibold text-white mb-3">CAT Ratings (IEC 61010)</h4>
                  <ul className="text-white/60 text-sm space-y-2">
                    <li><strong>CAT I:</strong> Electronic equipment, protected circuits</li>
                    <li><strong>CAT II:</strong> Single-phase receptacle-connected loads (appliance level)</li>
                    <li><strong>CAT III:</strong> Distribution-level equipment (panels, bus ducts, feeders)</li>
                    <li><strong>CAT IV:</strong> Origin of installation (service entrance, utility connection)</li>
                  </ul>
                  <p className="text-white/50 text-xs mt-3">Always use a meter rated for the measurement category and voltage of the equipment being tested.</p>
                </div>
                <div className="bg-white/5 rounded-xl p-6">
                  <h4 className="font-semibold text-white mb-3">Three-Step Verification</h4>
                  <ol className="text-white/60 text-sm space-y-2 list-decimal list-inside">
                    <li><strong>Test the tester:</strong> Verify the test instrument operates correctly on a known energized source</li>
                    <li><strong>Test the circuit:</strong> Test all phase-to-phase and phase-to-ground combinations at the point of work</li>
                    <li><strong>Re-test the tester:</strong> Verify the test instrument still operates correctly on a known energized source</li>
                  </ol>
                  <p className="text-white/50 text-xs mt-3">If the tester fails the re-test in step 3, the results from step 2 are invalid and must be repeated with a verified instrument.</p>
                </div>
              </div>

              <div className="bg-orange-900/30 rounded-xl p-6 my-6">
                <h4 className="font-semibold text-orange-400 mb-3">PPE for Voltage Testing</h4>
                <p className="text-white/70 text-sm mb-3">
                  Even when the sole purpose of the task is to verify absence of voltage, the worker must wear appropriate PPE <strong>until</strong> the absence of voltage is confirmed. This means:
                </p>
                <ul className="text-white/60 text-sm space-y-1">
                  <li>Voltage-rated gloves appropriate for the circuit voltage</li>
                  <li>Arc-rated PPE based on the arc flash label or risk assessment</li>
                  <li>Safety glasses or arc-rated face shield</li>
                  <li>Hearing protection if within the arc flash boundary</li>
                </ul>
                <p className="text-white/70 text-sm mt-3">
                  An EEWP is generally not required for voltage testing, as testing is one of the recognized exceptions under NFPA 70E 130.2(B)(3). However, all other safety requirements (PPE, qualified person, approach boundaries) still apply.
                </p>
              </div>
            </section>

            <section id="common-scenarios" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Common Scenarios Requiring Live Work</h2>
              <p className="text-white/80 mb-4">
                While the goal is always to de-energize, certain tasks legitimately require the equipment to be energized. Understanding these scenarios helps electricians prepare appropriate permits, PPE, and procedures.
              </p>

              <div className="grid md:grid-cols-2 gap-4 my-6">
                <div className="bg-white/5 rounded-xl p-6 border border-cyan-500/20">
                  <h4 className="font-semibold text-cyan-400 mb-3">Diagnostic &amp; Troubleshooting</h4>
                  <ul className="text-white/60 text-sm space-y-2">
                    <li><strong>Voltage measurements:</strong> Verifying proper voltages at equipment terminals</li>
                    <li><strong>Current measurements:</strong> Clamp-on ammeter readings to assess load conditions</li>
                    <li><strong>Power quality analysis:</strong> Harmonic measurements, power factor readings</li>
                    <li><strong>Fault tracing:</strong> Identifying the location and cause of intermittent faults</li>
                    <li><strong>Motor diagnostics:</strong> Measuring running amps, voltage imbalance, insulation resistance under load</li>
                  </ul>
                </div>
                <div className="bg-white/5 rounded-xl p-6 border border-orange-500/20">
                  <h4 className="font-semibold text-orange-400 mb-3">Process-Critical Equipment</h4>
                  <ul className="text-white/60 text-sm space-y-2">
                    <li><strong>Hospital life safety:</strong> Equipment serving critical care areas without redundant power</li>
                    <li><strong>Continuous processes:</strong> Chemical plants, steel mills, semiconductor fabs where shutdown causes equipment damage</li>
                    <li><strong>Data centers:</strong> Equipment serving Tier III/IV facilities with contractual uptime requirements</li>
                    <li><strong>Water/wastewater:</strong> Treatment plant equipment where shutdown creates public health risk</li>
                  </ul>
                </div>
                <div className="bg-white/5 rounded-xl p-6 border border-yellow-500/20">
                  <h4 className="font-semibold text-yellow-400 mb-3">Inspection &amp; Monitoring</h4>
                  <ul className="text-white/60 text-sm space-y-2">
                    <li><strong>Infrared thermography:</strong> Scanning for hot connections and overloaded conductors</li>
                    <li><strong>Ultrasonic inspection:</strong> Detecting corona discharge and tracking</li>
                    <li><strong>Partial discharge testing:</strong> Medium-voltage insulation analysis</li>
                    <li><strong>Load monitoring:</strong> Recording current and voltage profiles over time</li>
                  </ul>
                </div>
                <div className="bg-white/5 rounded-xl p-6 border border-red-500/20">
                  <h4 className="font-semibold text-red-400 mb-3">Emergency Situations</h4>
                  <ul className="text-white/60 text-sm space-y-2">
                    <li><strong>Imminent failure:</strong> Loose connections creating arcing that could start a fire if not addressed immediately</li>
                    <li><strong>Safety system failure:</strong> Fire alarm, emergency lighting, or fire pump circuits</li>
                    <li><strong>Weather-related damage:</strong> Storm damage requiring immediate assessment and restoration</li>
                    <li><strong>Utility coordination:</strong> Working with utility feeds that cannot be de-energized by the facility</li>
                  </ul>
                </div>
              </div>

              <div className="bg-red-900/30 rounded-xl p-6 my-6">
                <h4 className="font-semibold text-red-400 mb-3">Important Distinction</h4>
                <p className="text-white/70 text-sm">
                  Even in scenarios above, the employer must still document <strong>why de-energizing is infeasible or creates a greater hazard</strong> for each specific instance. A blanket policy of &ldquo;we never shut down this equipment&rdquo; is not compliant &mdash; each situation requires individual justification and, where applicable, an EEWP.
                </p>
              </div>
            </section>

            <section id="documentation" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Documentation Requirements</h2>
              <p className="text-white/80 mb-4">
                Proper documentation is both a regulatory requirement and a practical necessity for managing the risks of energized work. NFPA 70E and OSHA require employers to maintain records that demonstrate compliance with electrical safety requirements.
              </p>

              <div className="space-y-4 my-6">
                <div className="bg-white/5 rounded-xl p-6 border-l-4 border-cyan-500">
                  <h4 className="font-semibold text-cyan-400 mb-2">Energized Electrical Work Permits</h4>
                  <p className="text-white/70 text-sm">
                    All completed EEWPs must be retained as part of the employer&apos;s safety records. They provide evidence that proper justification, risk assessment, and protective measures were in place for each instance of energized work. Retain permits for at least the duration required by your company policy or jurisdictional requirements (typically 3-5 years minimum).
                  </p>
                </div>
                <div className="bg-white/5 rounded-xl p-6 border-l-4 border-cyan-500">
                  <h4 className="font-semibold text-cyan-400 mb-2">Risk Assessment Documentation</h4>
                  <p className="text-white/70 text-sm">
                    Both shock and arc flash risk assessments must be documented. This includes the identified hazards, calculated incident energy or PPE category, approach boundary distances, and selected protective measures. The documentation should be traceable to the specific equipment and task.
                  </p>
                </div>
                <div className="bg-white/5 rounded-xl p-6 border-l-4 border-cyan-500">
                  <h4 className="font-semibold text-cyan-400 mb-2">Training Records</h4>
                  <p className="text-white/70 text-sm">
                    Documented evidence that each qualified person has received training on: recognition of electrical hazards, safe work practices, proper use of PPE, emergency procedures, and the employer&apos;s electrical safety program. Training must be updated when job assignments change or when new equipment or procedures are introduced.
                  </p>
                </div>
                <div className="bg-white/5 rounded-xl p-6 border-l-4 border-cyan-500">
                  <h4 className="font-semibold text-cyan-400 mb-2">Job Safety Briefing Records</h4>
                  <p className="text-white/70 text-sm">
                    Pre-task briefings must be documented for energized work, including the hazards discussed, PPE requirements, approach boundaries, and the names of all personnel involved. A signed attendance sheet is recommended.
                  </p>
                </div>
                <div className="bg-white/5 rounded-xl p-6 border-l-4 border-cyan-500">
                  <h4 className="font-semibold text-cyan-400 mb-2">PPE Inspection and Testing Records</h4>
                  <p className="text-white/70 text-sm">
                    Records of voltage-rated glove testing (every 6 months per ASTM D120), insulated tool inspections, and arc-rated PPE condition assessments. Glove test dates and serial numbers must be traceable.
                  </p>
                </div>
                <div className="bg-white/5 rounded-xl p-6 border-l-4 border-cyan-500">
                  <h4 className="font-semibold text-cyan-400 mb-2">Arc Flash Study Reports</h4>
                  <p className="text-white/70 text-sm">
                    The complete arc flash study, including single-line diagrams, input data, calculation results, equipment labels, and recommendations. Must be reviewed and updated at intervals not exceeding 5 years or whenever the electrical system is modified.
                  </p>
                </div>
              </div>
            </section>

            <section id="employer-responsibilities" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Employer Responsibilities</h2>
              <p className="text-white/80 mb-4">
                NFPA 70E places the primary responsibility for electrical safety on the <strong>employer</strong>. The standard requires employers to implement a comprehensive electrical safety program and provide the resources, training, and oversight necessary to protect workers from electrical hazards.
              </p>

              <div className="grid md:grid-cols-2 gap-4 my-6">
                <div className="bg-white/5 rounded-xl p-6">
                  <h4 className="font-semibold text-cyan-400 mb-3">Written Electrical Safety Program</h4>
                  <p className="text-white/60 text-sm mb-2">
                    NFPA 70E Article 110 requires employers to implement and document a written electrical safety program that includes:
                  </p>
                  <ul className="text-white/60 text-sm space-y-1">
                    <li>Principles and controls for electrical hazards</li>
                    <li>Policies and procedures for energized work</li>
                    <li>Risk assessment procedures</li>
                    <li>Job briefing requirements</li>
                    <li>Lockout/tagout procedures</li>
                    <li>EEWP process and approval authority</li>
                    <li>Incident investigation procedures</li>
                    <li>Annual program audit requirements</li>
                  </ul>
                </div>
                <div className="bg-white/5 rounded-xl p-6">
                  <h4 className="font-semibold text-orange-400 mb-3">Training Requirements</h4>
                  <p className="text-white/60 text-sm mb-2">
                    Employers must ensure all employees who face a risk of electrical hazard are trained:
                  </p>
                  <ul className="text-white/60 text-sm space-y-1">
                    <li><strong>Qualified persons:</strong> Training on specific equipment construction and operation, work practices, approach boundaries, PPE use, emergency response, and the arc flash hazard analysis results</li>
                    <li><strong>Unqualified persons:</strong> Training to recognize electrical hazards and understand the importance of approach boundaries</li>
                    <li><strong>Retraining:</strong> Required when job duties change, new equipment is installed, or supervision determines that a worker is not complying with the safety program</li>
                    <li><strong>Frequency:</strong> At intervals not exceeding 3 years</li>
                  </ul>
                </div>
              </div>

              <div className="bg-white/5 rounded-xl p-6 my-6">
                <h4 className="font-semibold text-white mb-3">PPE Provision and Maintenance</h4>
                <p className="text-white/70 text-sm mb-3">
                  The employer is responsible for:
                </p>
                <ul className="text-white/60 text-sm space-y-1">
                  <li>Providing all required PPE at <strong>no cost to the employee</strong> (OSHA requirement)</li>
                  <li>Ensuring PPE is properly rated for the hazard</li>
                  <li>Maintaining PPE in safe, reliable condition</li>
                  <li>Arranging for periodic testing of voltage-rated PPE (gloves every 6 months)</li>
                  <li>Replacing damaged, worn, or failed PPE promptly</li>
                  <li>Training workers on proper use, care, and limitations of PPE</li>
                </ul>
              </div>
            </section>

            <section id="osha-enforcement" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">OSHA Enforcement and Citations</h2>
              <p className="text-white/80 mb-4">
                While OSHA does not directly adopt NFPA 70E as law, it uses NFPA 70E as the recognized consensus standard when evaluating employer compliance with 29 CFR 1910 Subpart S (General Industry) and 29 CFR 1926 Subpart K (Construction). OSHA inspectors routinely reference NFPA 70E requirements when issuing citations for electrical safety violations.
              </p>

              <div className="overflow-x-auto my-6">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-white/20">
                      <th className="text-left py-3 px-4 text-white/60">OSHA Standard</th>
                      <th className="text-left py-3 px-4 text-white/60">Requirement</th>
                      <th className="text-left py-3 px-4 text-white/60">NFPA 70E Connection</th>
                    </tr>
                  </thead>
                  <tbody className="text-white/80">
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-mono text-sm">29 CFR 1910.132</td>
                      <td className="py-3 px-4 text-white/60">General PPE requirements &mdash; hazard assessment and appropriate PPE selection</td>
                      <td className="py-3 px-4 text-white/60">NFPA 70E provides the specific methodology for electrical PPE selection</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-mono text-sm">29 CFR 1910.333</td>
                      <td className="py-3 px-4 text-white/60">Selection and use of work practices for electrical safety</td>
                      <td className="py-3 px-4 text-white/60">NFPA 70E Articles 120 and 130 provide detailed work practice requirements</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-mono text-sm">29 CFR 1910.335</td>
                      <td className="py-3 px-4 text-white/60">Safeguards for personnel protection (PPE and tools)</td>
                      <td className="py-3 px-4 text-white/60">NFPA 70E Table 130.7 provides PPE categories and specific equipment requirements</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-mono text-sm">5(a)(1) General Duty</td>
                      <td className="py-3 px-4 text-white/60">Employer must provide a workplace free from recognized hazards</td>
                      <td className="py-3 px-4 text-white/60">OSHA cites the General Duty Clause with NFPA 70E as the recognized standard of care</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="bg-red-900/30 rounded-xl p-6 my-6">
                <h4 className="font-semibold text-red-400 mb-3">OSHA Citation Penalties (2026)</h4>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-white/60 text-sm">Serious / Other-Than-Serious:</p>
                    <p className="font-mono text-red-400 text-lg font-bold">$16,550 per violation</p>
                  </div>
                  <div>
                    <p className="text-white/60 text-sm">Willful / Repeat:</p>
                    <p className="font-mono text-red-400 text-lg font-bold">$165,514 per violation</p>
                  </div>
                </div>
                <p className="text-white/60 text-sm mt-3">
                  Note: Penalties are adjusted annually for inflation. In fatality or serious injury cases, willful violations can also result in criminal prosecution. Multiple violations can be issued for the same inspection if multiple workers are exposed.
                </p>
              </div>

              <div className="bg-white/5 rounded-xl p-6 my-6">
                <h4 className="font-semibold text-white mb-3">Most Common Electrical Safety Citations</h4>
                <ol className="text-white/70 space-y-2 text-sm list-decimal list-inside">
                  <li>Failure to de-energize equipment before work (or failure to justify energized work)</li>
                  <li>Inadequate or missing PPE for the electrical hazard</li>
                  <li>No written electrical safety program</li>
                  <li>Insufficient worker training and documentation</li>
                  <li>Failure to use lockout/tagout procedures</li>
                  <li>Missing arc flash warning labels on equipment</li>
                  <li>No energized electrical work permit for energized tasks</li>
                  <li>Unqualified persons working on energized equipment</li>
                </ol>
              </div>
            </section>

            <section id="faq" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Frequently Asked Questions</h2>

              <div className="space-y-6 my-6">
                <div className="bg-white/5 rounded-xl p-6">
                  <h3 className="font-semibold text-white mb-2">Is it ever legal to work on live electrical equipment?</h3>
                  <p className="text-white/70 text-sm">
                    Yes, but only under the conditions specified by NFPA 70E Section 130.2. The employer must demonstrate that de-energizing would create an additional or increased hazard, or that the task is infeasible in a de-energized state. An energized electrical work permit is required (with limited exceptions for testing and visual inspections). The worker must be a qualified person with proper training and PPE.
                  </p>
                </div>

                <div className="bg-white/5 rounded-xl p-6">
                  <h3 className="font-semibold text-white mb-2">Who can authorize an Energized Electrical Work Permit?</h3>
                  <p className="text-white/70 text-sm">
                    The EEWP must be approved by a <strong>responsible management official</strong> &mdash; typically a safety manager, electrical supervisor, or facility manager with authority over the electrical safety program. The person approving the permit should be someone other than the worker performing the task, ensuring independent review of the justification and safety measures.
                  </p>
                </div>

                <div className="bg-white/5 rounded-xl p-6">
                  <h3 className="font-semibold text-white mb-2">What is the difference between a &ldquo;qualified person&rdquo; and an &ldquo;unqualified person&rdquo; under NFPA 70E?</h3>
                  <p className="text-white/70 text-sm">
                    A <strong>qualified person</strong> is one who has demonstrated skills and knowledge related to the construction and operation of electrical equipment and installations and has received <Link href="/blog/electrical-safety-nfpa-70e" className="text-cyan-400 hover:text-cyan-300">safety training</Link> to identify the hazards and reduce the associated risk. An <strong>unqualified person</strong> is anyone who does not meet these criteria. Only qualified persons may perform energized work or enter the limited approach boundary without continuous escort.
                  </p>
                </div>

                <div className="bg-white/5 rounded-xl p-6">
                  <h3 className="font-semibold text-white mb-2">Can I work live on a 120V residential circuit?</h3>
                  <p className="text-white/70 text-sm">
                    NFPA 70E applies the same framework to all voltages above 50V. Even 120V circuits can deliver lethal shock (the majority of electrical fatalities occur at 120-240V) and can produce arc flash injuries if sufficient fault current is available. De-energizing a 120V residential circuit is almost always feasible &mdash; simply turn off the breaker. The convenience of not shutting off a breaker is never a valid justification for live work.
                  </p>
                </div>

                <div className="bg-white/5 rounded-xl p-6">
                  <h3 className="font-semibold text-white mb-2">How often must voltage-rated gloves be tested?</h3>
                  <p className="text-white/70 text-sm">
                    Rubber insulating gloves must be electrically tested per ASTM D120 at intervals not exceeding <strong>6 months</strong>. Gloves that have not been tested within this interval must be removed from service. If gloves have been in storage (not issued to a worker), they must be tested before being issued if more than 12 months have passed since the last test.
                  </p>
                </div>

                <div className="bg-white/5 rounded-xl p-6">
                  <h3 className="font-semibold text-white mb-2">Does NFPA 70E apply to residential electricians?</h3>
                  <p className="text-white/70 text-sm">
                    Yes. NFPA 70E applies to all employees who work on or near exposed energized electrical conductors or circuit parts, regardless of the setting. While the arc flash hazard in residential work is generally lower than in commercial/industrial settings, the shock hazard at 120/240V is still lethal. Residential electricians must follow safe work practices, use appropriate PPE, and de-energize circuits before performing work.
                  </p>
                </div>

                <div className="bg-white/5 rounded-xl p-6">
                  <h3 className="font-semibold text-white mb-2">What happens if an OSHA inspector finds energized work being done without a permit?</h3>
                  <p className="text-white/70 text-sm">
                    The employer may receive a citation under 29 CFR 1910.333 (work practices) and/or a General Duty Clause citation referencing NFPA 70E as the recognized standard. Penalties can range from $16,550 per violation (serious) to $165,514 per violation (willful). If a worker is injured or killed, criminal prosecution is possible for willful violations.
                  </p>
                </div>

                <div className="bg-white/5 rounded-xl p-6">
                  <h3 className="font-semibold text-white mb-2">Can an electrician refuse to perform energized work?</h3>
                  <p className="text-white/70 text-sm">
                    Yes. Under OSHA regulations, workers have the right to refuse work that they reasonably believe poses an <strong>imminent danger</strong> of death or serious physical harm. Additionally, NFPA 70E Section 110.3 states that employees have the right to a safe working environment and employers must not assign tasks that expose employees to hazards beyond their training and qualification level. An employer who retaliates against a worker for refusing unsafe energized work may face additional OSHA penalties under whistleblower protections.
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
                  Join thousands of electricians using Ampora for instant NEC code answers, electrical calculations, and AI-powered troubleshooting &mdash; right from your phone.
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
                <Link href="/blog/electrical-safety-nfpa-70e" className="bg-white/5 hover:bg-white/10 rounded-xl p-6 transition-colors">
                  <span className="text-red-400 text-sm">Safety</span>
                  <h3 className="font-semibold mt-2">NFPA 70E Electrical Safety: Arc Flash PPE & LOTO Guide</h3>
                </Link>
                <Link href="/blog/arc-flash-hazard-analysis" className="bg-white/5 hover:bg-white/10 rounded-xl p-6 transition-colors">
                  <span className="text-red-400 text-sm">Safety</span>
                  <h3 className="font-semibold mt-2">Arc Flash Hazard Analysis: NFPA 70E Compliance Guide</h3>
                </Link>
                <Link href="/blog/lockout-tagout-electrical-procedures" className="bg-white/5 hover:bg-white/10 rounded-xl p-6 transition-colors">
                  <span className="text-red-400 text-sm">Safety</span>
                  <h3 className="font-semibold mt-2">Lockout/Tagout Electrical Procedures Guide</h3>
                </Link>
                <Link href="/blog/electrical-testing-equipment-guide" className="bg-white/5 hover:bg-white/10 rounded-xl p-6 transition-colors">
                  <span className="text-cyan-400 text-sm">Technology</span>
                  <h3 className="font-semibold mt-2">Electrical Testing Equipment Guide</h3>
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
