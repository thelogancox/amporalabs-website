import { Metadata } from "next";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import { BreadcrumbJsonLd, BlogPostingJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Finding Intermittent Electrical Faults: Systematic Troubleshooting",
  description: "Master the art of finding intermittent electrical faults with systematic troubleshooting techniques. Learn data logging, thermal imaging, insulation testing, wiggle tests, and pattern analysis to diagnose elusive electrical problems.",
  keywords: [
    "intermittent electrical faults",
    "electrical troubleshooting techniques",
    "intermittent connection problems",
    "thermal imaging electrical",
    "megger insulation testing",
    "data logging electrical faults",
    "wiggle test electrical",
    "loose electrical connections",
    "AFCI nuisance tripping",
    "power quality analysis"
  ],
  alternates: {
    canonical: "https://amporalabs.com/blog/intermittent-electrical-faults-guide",
  },
  openGraph: {
    title: "Finding Intermittent Electrical Faults: Systematic Troubleshooting - Ampora",
    description: "Systematic approach to diagnosing intermittent electrical faults using data logging, thermal imaging, insulation testing, and pattern analysis.",
    url: "https://amporalabs.com/blog/intermittent-electrical-faults-guide",
    type: "article",
    publishedTime: "2025-05-08",
  },
};

function HeroIllustration() {
  return (
    <svg viewBox="0 0 400 180" className="w-full h-44 md:h-52" aria-label="Multimeter probing a circuit with intermittent signal wave and question mark">
      {/* Multimeter body */}
      <g transform="translate(30, 10)">
        <rect x="0" y="0" width="100" height="140" rx="8" fill="#1f2937" stroke="#6b7280" strokeWidth="2"/>
        {/* Screen */}
        <rect x="12" y="12" width="76" height="35" rx="4" fill="#111827" stroke="#374151" strokeWidth="1"/>
        <text x="80" y="32" textAnchor="end" fill="#22c55e" fontSize="14" fontWeight="bold" fontFamily="monospace">???</text>
        <text x="82" y="42" textAnchor="end" fill="#22c55e" fontSize="8">V AC</text>
        <text x="20" y="24" fill="#6b7280" fontSize="6">AUTO</text>

        {/* Rotary dial */}
        <circle cx="50" cy="80" r="22" fill="#374151" stroke="#6b7280" strokeWidth="1"/>
        <circle cx="50" cy="80" r="2.5" fill="#9ca3af"/>
        <line x1="50" y1="80" x2="50" y2="60" stroke="#ef4444" strokeWidth="2"/>
        <text x="50" y="57" textAnchor="middle" fill="#ef4444" fontSize="6" fontWeight="bold">V~</text>
        <text x="72" y="73" textAnchor="middle" fill="#3b82f6" fontSize="6">V=</text>
        <text x="74" y="90" textAnchor="middle" fill="#f59e0b" fontSize="6">&Omega;</text>
        <text x="28" y="90" textAnchor="middle" fill="#9ca3af" fontSize="6">OFF</text>

        {/* Input jacks */}
        <circle cx="30" cy="125" r="5" fill="#111827" stroke="#ef4444" strokeWidth="1.5"/>
        <text x="30" y="128" textAnchor="middle" fill="#ef4444" fontSize="5">V</text>
        <circle cx="70" cy="125" r="5" fill="#111827" stroke="#6b7280" strokeWidth="1.5"/>
        <text x="70" y="128" textAnchor="middle" fill="#9ca3af" fontSize="4">COM</text>
      </g>

      {/* Probe lines going to circuit */}
      <line x1="60" y1="150" x2="155" y2="110" stroke="#ef4444" strokeWidth="2" strokeDasharray="4,2"/>
      <line x1="100" y1="150" x2="175" y2="110" stroke="#374151" strokeWidth="2" strokeDasharray="4,2"/>

      {/* Circuit board / connection point */}
      <g transform="translate(140, 70)">
        <rect x="0" y="0" width="80" height="50" rx="4" fill="#1f2937" stroke="#6b7280" strokeWidth="1.5"/>
        {/* Traces */}
        <line x1="0" y1="20" x2="30" y2="20" stroke="#22c55e" strokeWidth="2"/>
        <line x1="50" y1="20" x2="80" y2="20" stroke="#22c55e" strokeWidth="2"/>
        {/* Loose connection gap with spark */}
        <line x1="32" y1="18" x2="36" y2="22" stroke="#f59e0b" strokeWidth="1.5"/>
        <line x1="36" y1="18" x2="32" y2="22" stroke="#f59e0b" strokeWidth="1.5"/>
        <line x1="42" y1="17" x2="46" y2="23" stroke="#f59e0b" strokeWidth="1.5"/>
        <line x1="46" y1="17" x2="42" y2="23" stroke="#f59e0b" strokeWidth="1.5"/>
        {/* Screw terminals */}
        <circle cx="25" cy="35" r="4" fill="#374151" stroke="#9ca3af" strokeWidth="1"/>
        <circle cx="55" cy="35" r="4" fill="#374151" stroke="#9ca3af" strokeWidth="1"/>
        {/* Probe tips */}
        <polygon points="13,38 17,38 15,45" fill="#ef4444"/>
        <polygon points="33,38 37,38 35,45" fill="#374151"/>
      </g>

      {/* Question mark */}
      <g transform="translate(245, 15)">
        <circle cx="25" cy="25" r="24" fill="#f59e0b" fillOpacity="0.15" stroke="#f59e0b" strokeWidth="2"/>
        <text x="25" y="33" textAnchor="middle" fill="#f59e0b" fontSize="28" fontWeight="bold">?</text>
      </g>

      {/* Intermittent signal wave */}
      <g transform="translate(295, 70)">
        <rect x="0" y="0" width="95" height="60" rx="4" fill="#111827" stroke="#374151" strokeWidth="1"/>
        <text x="48" y="12" textAnchor="middle" fill="#6b7280" fontSize="6">SIGNAL</text>
        {/* Intermittent waveform - normal, dropout, normal, dropout */}
        <polyline
          points="5,45 10,45 12,25 14,45 16,45 18,25 20,45 22,45 24,25 26,45 28,45 30,45 32,45 34,45 36,45 40,45 42,25 44,45 46,45 48,25 50,45 52,45 54,45 56,45 58,45 60,45 62,45 64,45 66,25 68,45 70,45 72,25 74,45 76,45 78,45 80,45 82,45 84,45 86,45 88,25 90,45"
          fill="none"
          stroke="#22c55e"
          strokeWidth="1.5"
        />
        {/* Dropout indicators */}
        <line x1="28" y1="50" x2="36" y2="50" stroke="#ef4444" strokeWidth="1"/>
        <line x1="52" y1="50" x2="64" y2="50" stroke="#ef4444" strokeWidth="1"/>
        <line x1="76" y1="50" x2="86" y2="50" stroke="#ef4444" strokeWidth="1"/>
        <text x="48" y="57" textAnchor="middle" fill="#ef4444" fontSize="5">DROPOUTS</text>
      </g>

      {/* Label */}
      <text x="200" y="175" textAnchor="middle" fill="#9ca3af" fontSize="7">Intermittent Fault Diagnosis</text>
    </svg>
  );
}

export default function IntermittentElectricalFaultsGuidePage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navigation />
      <div className="pt-20">
        <BreadcrumbJsonLd
          items={[
            { name: "Home", url: "https://amporalabs.com" },
            { name: "Blog", url: "https://amporalabs.com/blog" },
            { name: "Intermittent Electrical Faults Guide", url: "https://amporalabs.com/blog/intermittent-electrical-faults-guide" },
          ]}
        />
        <BlogPostingJsonLd
          headline="Finding Intermittent Electrical Faults: Systematic Troubleshooting"
          description="Systematic approach to diagnosing intermittent electrical faults using data logging, thermal imaging, insulation testing, and pattern analysis."
          datePublished="2025-05-08"
          dateModified="2025-05-08"
          url="https://amporalabs.com/blog/intermittent-electrical-faults-guide"
          wordCount={4200}
          keywords={["intermittent faults", "electrical troubleshooting", "thermal imaging", "data logging", "insulation testing", "loose connections"]}
        />

        <article className="max-w-4xl mx-auto px-6 py-12">
          {/* Breadcrumb */}
          <nav className="text-sm text-white/60 mb-8">
            <Link href="/" className="hover:text-white">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/blog" className="hover:text-white">Blog</Link>
            <span className="mx-2">/</span>
            <span className="text-white">Intermittent Electrical Faults Guide</span>
          </nav>

          {/* Article Header */}
          <header className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <span className="px-3 py-1 bg-emerald-600/30 text-emerald-300 text-sm font-medium rounded-full">
                Troubleshooting
              </span>
              <span className="text-white/40 text-sm">14 min read</span>
              <span className="text-white/40 text-sm">May 8, 2025</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6 leading-tight">
              Finding Intermittent Electrical Faults: Systematic Troubleshooting
            </h1>
            <p className="text-xl text-white/70">
              Intermittent faults are the most frustrating problems in electrical work. They come and go without warning, defy quick diagnosis, and can waste hours of labor. Here&apos;s a systematic approach to tracking them down.
            </p>
          </header>

          <div className="mb-12 bg-gradient-to-br from-emerald-900/20 to-cyan-900/20 rounded-2xl p-6 border border-white/10">
            <HeroIllustration />
          </div>

          {/* Safety Warning */}
          <div className="bg-red-900/30 border border-red-500/30 rounded-2xl p-6 mb-12">
            <h3 className="font-semibold text-red-400 mb-2">Safety First</h3>
            <p className="text-white/70 text-sm">
              Intermittent fault diagnosis often requires working near energized circuits to observe the fault condition. Follow NFPA 70E requirements for arc flash PPE, use properly rated test equipment (CAT III minimum for panel work), and never work alone when troubleshooting energized equipment. De-energize whenever possible.
            </p>
          </div>

          {/* Table of Contents */}
          <div className="bg-white/5 rounded-2xl p-6 mb-12">
            <h2 className="font-display font-bold mb-4">In This Guide</h2>
            <ul className="space-y-2 text-white/70">
              <li><a href="#why-difficult" className="hover:text-purple-400">&#8594; Why Intermittent Faults Are the Hardest to Find</a></li>
              <li><a href="#common-causes" className="hover:text-purple-400">&#8594; Common Causes: Thermal, Vibration, Moisture &amp; Corrosion</a></li>
              <li><a href="#systematic-approach" className="hover:text-purple-400">&#8594; Systematic Diagnostic Approach</a></li>
              <li><a href="#data-logging" className="hover:text-purple-400">&#8594; Using Data Logging to Capture Intermittent Events</a></li>
              <li><a href="#thermal-imaging" className="hover:text-purple-400">&#8594; Thermal Imaging for Hot Connections</a></li>
              <li><a href="#wiggle-tap-test" className="hover:text-purple-400">&#8594; Wiggle Test and Tap Test Techniques</a></li>
              <li><a href="#megger-testing" className="hover:text-purple-400">&#8594; Megger / Insulation Resistance Testing</a></li>
              <li><a href="#time-load-patterns" className="hover:text-purple-400">&#8594; Time-of-Day and Load-Related Patterns</a></li>
              <li><a href="#connection-integrity" className="hover:text-purple-400">&#8594; Connection Integrity Checks</a></li>
              <li><a href="#neutral-ground" className="hover:text-purple-400">&#8594; Neutral &amp; Ground Issues</a></li>
              <li><a href="#afci-diagnosis" className="hover:text-purple-400">&#8594; AFCI Nuisance Tripping Diagnosis</a></li>
              <li><a href="#documentation" className="hover:text-purple-400">&#8594; Documentation and Pattern Tracking</a></li>
              <li><a href="#advanced-tools" className="hover:text-purple-400">&#8594; Advanced Tools: Power Quality Analyzers &amp; Event Recorders</a></li>
              <li><a href="#case-studies" className="hover:text-purple-400">&#8594; Case Studies of Common Intermittent Faults</a></li>
              <li><a href="#replace-vs-repair" className="hover:text-purple-400">&#8594; When to Replace vs Repair</a></li>
            </ul>
          </div>

          {/* Article Content */}
          <div className="prose prose-invert prose-lg max-w-none">

            <section id="why-difficult" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Why Intermittent Faults Are the Hardest to Find</h2>
              <p className="text-white/80 mb-4">
                A dead circuit is straightforward: you test, you find the break, you fix it. An intermittent fault is different. It works fine when you&apos;re standing there with your meter, then fails again the moment you leave. This is not coincidence - it is a clue.
              </p>
              <p className="text-white/80 mb-4">
                Intermittent faults are difficult because they depend on conditions that change: temperature, vibration, humidity, load levels, time of day, and even the position of cables. The fault exists all the time, but its symptoms only appear when specific conditions align. Your job is to identify which conditions trigger the fault, then trace backward to the root cause.
              </p>
              <div className="bg-emerald-900/30 rounded-xl p-6 my-6">
                <h3 className="font-semibold text-emerald-400 mb-2">The Core Principle</h3>
                <p className="text-white/70">
                  Every intermittent fault is a permanent fault waiting to happen. The underlying defect - a loose connection, degraded insulation, corroded terminal - is always present. You are looking for a physical defect, not a ghost. Approach the problem with confidence that there is a findable, fixable cause.
                </p>
              </div>
              <p className="text-white/80 mb-4">
                The biggest mistake electricians make with intermittent faults is trying random fixes: replacing a breaker, swapping a receptacle, re-pulling a wire. Without understanding the root cause, these shotgun approaches waste time and money. A systematic method is faster, even though it feels slower at the start.
              </p>
            </section>

            <section id="common-causes" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Common Causes: Thermal Expansion, Vibration, Moisture &amp; Corrosion</h2>
              <p className="text-white/80 mb-4">
                Understanding why faults become intermittent helps you know where to look. The four major mechanisms are:
              </p>

              <div className="space-y-4 my-6">
                <div className="bg-white/5 rounded-xl p-4">
                  <h4 className="font-semibold text-white">1. Thermal Expansion and Contraction</h4>
                  <p className="text-white/60 text-sm mt-1">Conductors expand when they heat up under load and contract when they cool. A connection that is slightly loose will make good contact when cold (contracted) but open up as the conductor heats and expands. This is why faults that appear only under heavy load are often thermal in nature. Aluminum conductors are especially prone to this because aluminum has a higher coefficient of thermal expansion than copper and tends to creep under sustained pressure.</p>
                  <p className="text-emerald-400 text-sm mt-2"><strong>Clue:</strong> Fault appears after the circuit has been loaded for 30+ minutes and clears after cooling.</p>
                </div>
                <div className="bg-white/5 rounded-xl p-4">
                  <h4 className="font-semibold text-white">2. Vibration</h4>
                  <p className="text-white/60 text-sm mt-1">Mechanical vibration from motors, HVAC equipment, compressors, or even foot traffic can loosen connections over time and cause momentary interruptions. The fault appears when the vibration source is active and disappears when it stops. In industrial settings, vibration is one of the most common causes of intermittent faults in motor control circuits, terminal blocks, and contactor connections.</p>
                  <p className="text-emerald-400 text-sm mt-2"><strong>Clue:</strong> Fault correlates with operation of nearby mechanical equipment.</p>
                </div>
                <div className="bg-white/5 rounded-xl p-4">
                  <h4 className="font-semibold text-white">3. Moisture and Humidity</h4>
                  <p className="text-white/60 text-sm mt-1">Moisture on insulation surfaces creates leakage paths that can trip GFCI and AFCI devices or cause partial short circuits. As humidity rises, insulation resistance drops. Morning condensation in outdoor or unconditioned spaces can cause faults that clear by midday as surfaces dry. Underground cable with compromised jacket insulation may fault only during or after rain.</p>
                  <p className="text-emerald-400 text-sm mt-2"><strong>Clue:</strong> Fault correlates with rain, humidity, time of day, or seasonal changes.</p>
                </div>
                <div className="bg-white/5 rounded-xl p-4">
                  <h4 className="font-semibold text-white">4. Corrosion</h4>
                  <p className="text-white/60 text-sm mt-1">Oxidation on terminal surfaces creates a resistive layer that may conduct under normal conditions but fails under higher current demand. Dissimilar metal corrosion (galvanic corrosion) at copper-aluminum connections is a classic source. Salt air, chemical environments, and high humidity accelerate corrosion. The connection may test fine with a low-current ohm meter but fail at operating current.</p>
                  <p className="text-emerald-400 text-sm mt-2"><strong>Clue:</strong> Gradually worsening fault frequency; visible discoloration or green/white deposits on terminals.</p>
                </div>
              </div>
            </section>

            <section id="systematic-approach" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Systematic Diagnostic Approach</h2>
              <p className="text-white/80 mb-4">
                Before touching a single wire, gather information. The most powerful diagnostic tool for intermittent faults is the interview - talk to the person experiencing the problem.
              </p>

              <div className="bg-purple-900/30 rounded-xl p-6 my-6">
                <h3 className="font-semibold text-purple-400 mb-2">The Five Key Questions</h3>
                <ol className="list-decimal list-inside text-white/70 text-sm space-y-2">
                  <li><strong>When does it happen?</strong> Time of day, day of week, season. Morning only? Afternoon only? Does it correlate with weather?</li>
                  <li><strong>What is happening when it occurs?</strong> What equipment is running? What loads are on? Did someone just turn something on or off?</li>
                  <li><strong>How does it manifest?</strong> Lights flicker, breaker trips, equipment stops, outlet dead? Momentary or sustained?</li>
                  <li><strong>How often does it happen?</strong> Daily, weekly, random? Is the frequency increasing over time?</li>
                  <li><strong>What changed recently?</strong> New equipment, renovation, storm, work by another trade? Many intermittent faults start after physical disturbance of the wiring.</li>
                </ol>
              </div>

              <h3 className="text-xl font-semibold mt-6 mb-3">The Divide-and-Conquer Method</h3>
              <p className="text-white/80 mb-4">
                Once you have a hypothesis about the general area, use a systematic half-split approach:
              </p>
              <ul className="list-disc list-inside text-white/70 space-y-2 mb-4">
                <li><strong>Start at the panel.</strong> Is the voltage stable at the breaker terminals? If voltage drops or fluctuates at the panel, the fault is upstream (service, utility, main connections).</li>
                <li><strong>Move to the midpoint.</strong> Test voltage at the first junction box or device on the circuit. Stable here means the fault is downstream; unstable means it&apos;s between the panel and this point.</li>
                <li><strong>Continue halving the distance</strong> until you isolate the fault to a specific segment of the circuit.</li>
                <li><strong>Within that segment,</strong> check every connection point: wire nuts, terminal screws, splice devices, and the wire itself.</li>
              </ul>
              <p className="text-white/80">
                This method is far more efficient than starting at one end and checking every single connection sequentially. For a circuit with 20 connection points, a half-split approach finds the fault in about 5 tests instead of potentially 20.
              </p>
            </section>

            <section id="data-logging" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Using Data Logging to Capture Intermittent Events</h2>
              <p className="text-white/80 mb-4">
                When a fault is too infrequent to catch in real time, deploy a data logger. Modern logging meters and power quality recorders can monitor voltage, current, and frequency continuously for days or weeks, capturing events that last just milliseconds.
              </p>

              <div className="space-y-4 my-6">
                <div className="bg-white/5 rounded-xl p-4">
                  <h4 className="font-semibold text-white">Voltage Data Loggers</h4>
                  <p className="text-white/60 text-sm mt-1">Connect a min/max recording voltmeter at the panel and at the problem location simultaneously. When the fault occurs, compare the two readings. If voltage drops at both locations, the fault is upstream. If it drops only at the remote location, the fault is in the branch circuit. Many modern DMMs have built-in min/max recording that captures the lowest and highest voltage seen, along with a timestamp.</p>
                </div>
                <div className="bg-white/5 rounded-xl p-4">
                  <h4 className="font-semibold text-white">Current Logging</h4>
                  <p className="text-white/60 text-sm mt-1">A clamp-on current logger on the circuit conductor records the load profile over time. Sudden current spikes indicate short-circuit events. Gradual current increases that correlate with breaker trips indicate overloading. Current dropping to zero momentarily indicates an open connection. Deploy these on circuits experiencing intermittent breaker trips.</p>
                </div>
                <div className="bg-white/5 rounded-xl p-4">
                  <h4 className="font-semibold text-white">Event Threshold Recording</h4>
                  <p className="text-white/60 text-sm mt-1">Set up your logger to flag events outside normal parameters - for example, voltage below 108V or above 132V on a 120V circuit (outside the &plusmn;10% tolerance). This filters out the hours of normal data and highlights only the problem events, making analysis far more efficient.</p>
                </div>
              </div>

              <div className="bg-cyan-900/30 rounded-xl p-6 my-6">
                <h3 className="font-semibold text-cyan-400 mb-2">Budget Data Logging</h3>
                <p className="text-white/70">
                  You do not need expensive power quality analyzers for every job. A DMM with min/max recording (like the Fluke 87V) captures peak and valley readings. A plug-in voltage logger (like the Fluke VR1710) monitors a single receptacle circuit for weeks. Even a security camera aimed at an indicator light or equipment display can document when failures occur, providing the timestamp you need to correlate events.
                </p>
              </div>
            </section>

            <section id="thermal-imaging" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Thermal Imaging for Hot Connections</h2>
              <p className="text-white/80 mb-4">
                A thermal imaging camera (infrared camera) is one of the most valuable tools for finding intermittent faults caused by loose or corroded connections. High-resistance connections generate heat, and thermal imaging reveals temperature differences that are invisible to the eye.
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-3">Thermal Imaging Best Practices</h3>
              <ul className="list-disc list-inside text-white/70 space-y-2 mb-4">
                <li><strong>Scan under load.</strong> Connections must be carrying current to generate heat. Scan panels and connections while the circuit is loaded at or near its typical operating current. An unloaded connection will appear cool even if it has high resistance.</li>
                <li><strong>Compare similar connections.</strong> The key is differential temperature, not absolute temperature. A breaker at 140&deg;F may or may not be a problem - but if every other breaker in the panel is at 90&deg;F and one is at 140&deg;F, that one demands investigation.</li>
                <li><strong>Check both sides of connections.</strong> Scan wire terminations, bus bar contacts, breaker stabs, wire nuts behind cover plates, and splice devices. A hot connection will often show a temperature gradient - hottest at the point of high resistance, cooling as you move away.</li>
                <li><strong>Document with images.</strong> Save thermal images with the temperature scale visible. This provides baseline data for future comparisons and documentation for customers.</li>
                <li><strong>Account for emissivity.</strong> Shiny metallic surfaces (bus bars, bare copper) have low emissivity and can give inaccurate temperature readings. Apply electrical tape or use a known-emissivity reference marker on the surface for accurate measurement.</li>
              </ul>

              <div className="bg-orange-900/30 rounded-xl p-6 my-6">
                <h3 className="font-semibold text-orange-400 mb-2">Temperature Thresholds for Connections</h3>
                <ul className="text-white/70 text-sm space-y-1">
                  <li>&bull; <strong>1-10&deg;C above similar connections:</strong> Monitor - possible developing problem</li>
                  <li>&bull; <strong>11-20&deg;C above similar connections:</strong> Investigate - repair at next opportunity</li>
                  <li>&bull; <strong>21-40&deg;C above similar connections:</strong> Serious - schedule repair promptly</li>
                  <li>&bull; <strong>&gt;40&deg;C above similar connections:</strong> Critical - repair immediately</li>
                </ul>
              </div>
            </section>

            <section id="wiggle-tap-test" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Wiggle Test and Tap Test Techniques</h2>
              <p className="text-white/80 mb-4">
                Sometimes the most effective diagnostic technique is the simplest. The wiggle test and tap test physically disturb connections to reveal faults that are sensitive to movement.
              </p>

              <div className="space-y-4 my-6">
                <div className="bg-white/5 rounded-xl p-4">
                  <h4 className="font-semibold text-white">The Wiggle Test</h4>
                  <p className="text-white/60 text-sm mt-1">With the circuit energized and a voltmeter or test light connected at the load end, gently flex cables, wiggle connections, and push on devices one at a time. Watch the meter or light for any flicker or voltage change. Start at the most likely problem area (based on your investigation) and work outward. Use insulated tools and wear appropriate PPE - you are working near energized conductors.</p>
                  <p className="text-emerald-400 text-sm mt-2"><strong>Key point:</strong> Wiggle only one thing at a time. If you move three wires simultaneously and the fault appears, you do not know which one caused it.</p>
                </div>
                <div className="bg-white/5 rounded-xl p-4">
                  <h4 className="font-semibold text-white">The Tap Test</h4>
                  <p className="text-white/60 text-sm mt-1">Using an insulated handle (screwdriver handle, plastic rod), lightly tap on breakers, terminal blocks, junction boxes, and device covers while monitoring voltage at the load. A loose internal connection in a breaker, a cracked bus bar, or a broken wire inside insulation can be revealed by physical vibration that would not be detected by visual inspection alone.</p>
                  <p className="text-emerald-400 text-sm mt-2"><strong>Key point:</strong> Tap gently. You are trying to simulate normal vibration, not create damage. Excessive force can create new problems.</p>
                </div>
                <div className="bg-white/5 rounded-xl p-4">
                  <h4 className="font-semibold text-white">The Flex Test for Cables</h4>
                  <p className="text-white/60 text-sm mt-1">Broken conductors inside insulation (common in cords, NM cable at staple points, and UF cable) can be found by gently bending the cable along its length while monitoring continuity or voltage. The break makes and loses contact as the cable flexes. Concentrate on areas near staples, sharp bends, and where cable enters boxes - these are the highest-stress points.</p>
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

            <section id="megger-testing" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Megger / Insulation Resistance Testing</h2>
              <p className="text-white/80 mb-4">
                A standard ohm meter applies a very low test voltage (typically under 1V) and cannot detect insulation breakdown that only occurs at operating voltage. A megger (insulation resistance tester) applies 250V, 500V, or 1000V DC to stress the insulation and reveal weaknesses that a standard meter misses entirely.
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-3">When to Use a Megger</h3>
              <ul className="list-disc list-inside text-white/70 space-y-2 mb-4">
                <li><strong>GFCI or AFCI tripping with no obvious cause</strong> after checking all connections</li>
                <li><strong>Suspected moisture intrusion</strong> in conduit, underground cable, or wet locations</li>
                <li><strong>Old wiring</strong> with potentially degraded insulation (especially pre-1970s installations)</li>
                <li><strong>After a fire, flood, or physical damage</strong> to verify insulation integrity</li>
                <li><strong>Motor circuits</strong> where insulation breakdown under voltage is suspected</li>
              </ul>

              <div className="bg-white/5 rounded-xl p-6 my-6">
                <h3 className="font-semibold text-white mb-3">Megger Testing Procedure</h3>
                <ol className="list-decimal list-inside text-white/70 text-sm space-y-2">
                  <li><strong>De-energize the circuit completely.</strong> Lock out/tag out. Verify dead with a voltage test.</li>
                  <li><strong>Disconnect all loads and devices.</strong> Unplug everything, remove GFCI/AFCI receptacles, disconnect motor leads. Electronic devices can be damaged by the megger&apos;s test voltage.</li>
                  <li><strong>Test conductor to conductor.</strong> Apply test voltage between hot and neutral, hot and ground, neutral and ground. Record each reading.</li>
                  <li><strong>Interpret results.</strong> New wiring should read well above 1 M&Omega; (megohm). For existing wiring, the rule of thumb is 1 M&Omega; per 1000V of operating voltage plus 1 M&Omega;. For a 120V circuit, anything above 1.12 M&Omega; is acceptable, but higher is better. Readings below 1 M&Omega; indicate insulation degradation. Readings below 0.5 M&Omega; indicate a serious problem.</li>
                  <li><strong>Discharge the cable.</strong> After testing, short the conductors to ground to discharge any stored capacitive charge before reconnecting devices.</li>
                </ol>
              </div>

              <div className="bg-emerald-900/30 rounded-xl p-6 my-6">
                <h3 className="font-semibold text-emerald-400 mb-2">The Polarization Index (PI) Test</h3>
                <p className="text-white/70">
                  For motor windings and long cable runs, the Polarization Index test is particularly useful for finding intermittent insulation faults. Apply the megger for 10 minutes and record the reading at 1 minute and at 10 minutes. The PI ratio (10-minute reading divided by 1-minute reading) should be 2.0 or higher for good insulation. A ratio below 1.5 indicates deteriorating insulation. A ratio close to 1.0 means the insulation is saturated with moisture or severely degraded and will likely fail under operating conditions.
                </p>
              </div>
            </section>

            <section id="time-load-patterns" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Time-of-Day and Load-Related Patterns</h2>
              <p className="text-white/80 mb-4">
                Intermittent faults that follow a schedule are telling you exactly what is causing them. Recognizing these patterns shortens diagnosis dramatically.
              </p>

              <div className="overflow-x-auto my-6">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-white/20">
                      <th className="text-left py-3 px-4 text-white/60">Pattern</th>
                      <th className="text-left py-3 px-4 text-white/60">Likely Cause</th>
                      <th className="text-left py-3 px-4 text-white/60">Where to Look</th>
                    </tr>
                  </thead>
                  <tbody className="text-white/80">
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-semibold">Morning only (clears by noon)</td>
                      <td className="py-3 px-4">Condensation / moisture</td>
                      <td className="py-3 px-4">Outdoor boxes, unconditioned spaces, underground splices</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-semibold">Afternoon / heavy load periods</td>
                      <td className="py-3 px-4">Thermal expansion, overloading</td>
                      <td className="py-3 px-4">Loose connections, undersized wiring, overloaded circuits</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-semibold">When HVAC cycles on/off</td>
                      <td className="py-3 px-4">Voltage sag, vibration, EMI</td>
                      <td className="py-3 px-4">Shared circuits, loose connections near equipment, inadequate service</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-semibold">Windy days</td>
                      <td className="py-3 px-4">Loose service entrance, swaying cables</td>
                      <td className="py-3 px-4">Service mast, weatherhead, aerial connections, utility side</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-semibold">Rainy weather</td>
                      <td className="py-3 px-4">Water intrusion, insulation leakage</td>
                      <td className="py-3 px-4">Underground cable, outdoor junctions, roof penetrations</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-semibold">When specific equipment runs</td>
                      <td className="py-3 px-4">EMI, voltage sag, shared neutral, vibration</td>
                      <td className="py-3 px-4">Circuit sharing, neutral connections, equipment grounding</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="text-white/80">
                Ask the building occupant to keep a log of when the problem occurs and what they were doing at the time. Even a week of notes can reveal patterns that point directly to the cause. Compare the fault log against weather data, HVAC schedules, and production schedules for commercial/industrial sites.
              </p>
            </section>

            <section id="connection-integrity" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Connection Integrity Checks</h2>
              <p className="text-white/80 mb-4">
                The majority of intermittent electrical faults trace back to connections. A thorough connection integrity check is often the most productive use of your troubleshooting time.
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-3">What to Check at Every Connection Point</h3>
              <div className="space-y-4 my-6">
                <div className="bg-white/5 rounded-xl p-4">
                  <h4 className="font-semibold text-white">Wire Nuts (Twist-On Connectors)</h4>
                  <p className="text-white/60 text-sm mt-1">Tug each wire gently to verify it is captured. A wire that pulls out easily was never properly connected. Check for discoloration (heat damage), melted plastic, or blackened conductors inside the nut. Backstabbed (push-in) connections on receptacles and switches are notorious for loosening over time - consider converting them to screw terminal connections.</p>
                </div>
                <div className="bg-white/5 rounded-xl p-4">
                  <h4 className="font-semibold text-white">Screw Terminals</h4>
                  <p className="text-white/60 text-sm mt-1">Verify each screw is tight (typically 12-14 inch-pounds for device terminals, per manufacturer specifications). Check that the wire is wrapped clockwise around the screw so tightening pulls it in rather than pushing it out. Look for nicked conductors, stray strands (on stranded wire), and over-stripped insulation.</p>
                </div>
                <div className="bg-white/5 rounded-xl p-4">
                  <h4 className="font-semibold text-white">Breaker Connections</h4>
                  <p className="text-white/60 text-sm mt-1">Check the torque on breaker terminal screws using a calibrated torque screwdriver. Most residential breakers specify 20-25 inch-pounds. Check that the breaker is fully seated on the bus bar by pressing firmly. A breaker that has worked loose from the bus bar can make intermittent contact. Also check the stab connection (breaker clip to bus bar) for signs of arcing, pitting, or discoloration.</p>
                </div>
                <div className="bg-white/5 rounded-xl p-4">
                  <h4 className="font-semibold text-white">Neutral and Ground Bar Connections</h4>
                  <p className="text-white/60 text-sm mt-1">These are some of the most overlooked connections in a panel. Check that each neutral and ground wire is tight in its terminal. Look for double-tapped neutrals (two neutrals under one screw), which are prohibited by NEC 408.41 and are a common source of intermittent neutral problems. Each neutral must have its own terminal.</p>
                </div>
              </div>

              <div className="bg-purple-900/30 rounded-xl p-6 my-6">
                <h3 className="font-semibold text-purple-400 mb-2">The Milliohm Test</h3>
                <p className="text-white/70">
                  For critical connections, use a milliohm meter (or a 4-wire resistance measurement) to measure connection resistance directly. A good bolted connection should measure under 100 micro-ohms. A connection above 500 micro-ohms is developing high resistance and should be cleaned and re-torqued. This test catches problems that a visual inspection and a tug test miss, and it provides a quantitative baseline for future comparison.
                </p>
              </div>
            </section>

            <section id="neutral-ground" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Neutral and Ground Issues Causing Intermittent Problems</h2>
              <p className="text-white/80 mb-4">
                Neutral and grounding problems are some of the most confusing intermittent faults because they produce symptoms that seem to make no sense: lights that get brighter and dimmer simultaneously, voltage that fluctuates with load on other circuits, and equipment that works on some outlets but not others.
              </p>

              <div className="space-y-4 my-6">
                <div className="bg-white/5 rounded-xl p-4">
                  <h4 className="font-semibold text-white">Open Neutral (Lost Neutral)</h4>
                  <p className="text-white/60 text-sm mt-1">In a single-phase 240/120V system, the neutral carries the imbalance between the two legs. If the neutral opens (loose connection at the panel, meter base, or utility transformer), voltage between the two legs remains at 240V, but the voltage on each leg floats based on the load balance. The heavily loaded leg sees lower voltage while the lightly loaded leg sees higher voltage - potentially damaging sensitive electronics. This is why some lights get brighter while others dim.</p>
                  <p className="text-red-400 text-sm mt-2"><strong>Danger:</strong> An open neutral can cause voltages up to 240V on circuits designed for 120V. This damages equipment and creates a shock and fire hazard.</p>
                </div>
                <div className="bg-white/5 rounded-xl p-4">
                  <h4 className="font-semibold text-white">High-Resistance Neutral</h4>
                  <p className="text-white/60 text-sm mt-1">A partially open neutral (corroded connection, loose terminal) causes similar but less extreme symptoms. Voltage on each leg shifts slightly with load changes. Symptoms worsen when heavy loads like dryers, ranges, or water heaters cycle. Measure neutral-to-ground voltage at receptacles throughout the house. It should be near 0V. Readings above 2V suggest a neutral problem. Readings that change when loads are switched on and off confirm it.</p>
                </div>
                <div className="bg-white/5 rounded-xl p-4">
                  <h4 className="font-semibold text-white">Bootleg Ground (Neutral-Ground Bond Downstream)</h4>
                  <p className="text-white/60 text-sm mt-1">An improper neutral-to-ground connection downstream of the main bonding point causes current on the grounding conductor, GFCI tripping, and unreliable fault protection. This is sometimes installed intentionally (incorrectly) to make a two-wire circuit appear to have a ground when tested with a simple plug-in tester. Use a GFCI tester with a neutral-ground bond indicator to detect this condition.</p>
                </div>
                <div className="bg-white/5 rounded-xl p-4">
                  <h4 className="font-semibold text-white">Shared Neutral (MWBC) Problems</h4>
                  <p className="text-white/60 text-sm mt-1">Multiwire branch circuits share a neutral between two circuits on opposite legs. If the two hots end up on the same leg (due to an improperly installed breaker or a bus bar configuration mistake), the neutral carries the sum of the two circuit currents instead of the difference. This overloads the neutral and can cause AFCI trips, overheating, and intermittent operation. Verify that MWBC circuits use a two-pole breaker or handle-tied breakers on opposite legs.</p>
                </div>
              </div>
            </section>

            <section id="afci-diagnosis" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">AFCI Nuisance Tripping Diagnosis</h2>
              <p className="text-white/80 mb-4">
                AFCI (Arc-Fault Circuit Interrupter) breakers detect the unique electrical signature of arcing faults. However, they can also trip on electrical noise that resembles arcing but is not dangerous. Distinguishing nuisance tripping from legitimate arc detection requires a systematic approach.
              </p>

              <div className="bg-purple-900/30 rounded-xl p-6 my-6">
                <h3 className="font-semibold text-purple-400 mb-2">AFCI Diagnostic Steps</h3>
                <ol className="list-decimal list-inside text-white/70 text-sm space-y-2">
                  <li><strong>Check the trip indicator.</strong> Many modern AFCI breakers have LED indicators that distinguish between arc-fault trips, ground-fault trips, and overload trips. Check the manufacturer&apos;s documentation for your specific breaker model.</li>
                  <li><strong>Inspect all connections on the circuit.</strong> Loose connections cause actual arcing that the AFCI is correctly detecting. This is not nuisance tripping - it is the breaker doing its job. Tighten every connection before dismissing it as nuisance tripping.</li>
                  <li><strong>Check for shared neutrals.</strong> An AFCI breaker monitors both the hot and neutral conductors. If the neutral is shared with another circuit (improper MWBC), current returning on the wrong neutral will trip the AFCI. Each AFCI-protected circuit must have a dedicated, unshared neutral from the load back to the breaker pigtail.</li>
                  <li><strong>Identify the offending device.</strong> Unplug all devices on the circuit. If the AFCI holds, plug devices back in one at a time over several days. Common culprits: treadmills, sewing machines, certain LED dimmers, vacuum cleaners, and older fluorescent ballasts.</li>
                  <li><strong>Check for damaged cable.</strong> NM cable with a staple driven too tightly, cable damaged by screws or nails from other trades, or cable with insulation damage from being pulled too hard can create actual arc-fault conditions that only occur under load or vibration.</li>
                  <li><strong>Try a different manufacturer&apos;s AFCI breaker.</strong> Different manufacturers use different arc-detection algorithms. A device that trips one brand may not trip another. This is a legitimate last-resort solution after verifying all connections and wiring are sound.</li>
                </ol>
              </div>
            </section>

            <section id="documentation" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Documentation and Pattern Tracking</h2>
              <p className="text-white/80 mb-4">
                Documentation is not just paperwork - it is a diagnostic tool. Keeping records of intermittent faults transforms random events into recognizable patterns.
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-3">What to Record</h3>
              <ul className="list-disc list-inside text-white/70 space-y-2 mb-4">
                <li><strong>Date, time, and duration</strong> of each occurrence</li>
                <li><strong>Weather conditions</strong> (temperature, humidity, rain, wind)</li>
                <li><strong>Loads running</strong> at the time of the fault</li>
                <li><strong>Symptoms observed</strong> (flicker, trip, voltage reading, equipment behavior)</li>
                <li><strong>Actions taken</strong> and their results</li>
                <li><strong>Test measurements</strong> (voltage, current, resistance, insulation resistance) with locations noted</li>
                <li><strong>What was changed</strong> recently in the building (new equipment, construction, utility work)</li>
              </ul>
              <p className="text-white/80 mb-4">
                After collecting data from several occurrences, look for correlations. Plot fault times against temperature logs, equipment schedules, and weather patterns. The pattern will often point directly to the cause. For example, faults occurring at 3:15 PM daily might correlate with an AC compressor cycling on, indicating a voltage sag issue or a vibration-sensitive connection near the HVAC equipment.
              </p>
              <p className="text-white/80">
                Share your documentation with the customer. It demonstrates professionalism, justifies your troubleshooting time, and provides a record that prevents repeat service calls for the same issue.
              </p>
            </section>

            <section id="advanced-tools" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Advanced Tools: Power Quality Analyzers and Event Recorders</h2>
              <p className="text-white/80 mb-4">
                When basic tools are not capturing the fault, advanced power quality instruments provide the resolution and recording capability needed for the most elusive problems.
              </p>

              <div className="space-y-4 my-6">
                <div className="bg-white/5 rounded-xl p-4">
                  <h4 className="font-semibold text-white">Power Quality Analyzers</h4>
                  <p className="text-white/60 text-sm mt-1">Instruments like the Fluke 1760, Dranetz HDPQ, or Hioki PQ3198 simultaneously monitor voltage, current, frequency, harmonics, transients, sags, swells, and interruptions across all phases. They capture events down to microsecond resolution and provide detailed waveform data showing exactly what happened during a fault. This data can distinguish between a utility-side voltage sag and an internal fault, identify harmonic-rich loads causing problems, and document power quality issues for utility dispute resolution.</p>
                </div>
                <div className="bg-white/5 rounded-xl p-4">
                  <h4 className="font-semibold text-white">Event Recorders</h4>
                  <p className="text-white/60 text-sm mt-1">Event recorders (also called disturbance analyzers) monitor a circuit and trigger recording only when a parameter exceeds a set threshold. They can be deployed for weeks, capturing only the fault events and filtering out normal operation. This is invaluable when faults occur days or weeks apart. Some units include relay outputs that can trigger external indicators (like a buzzer or light) to alert the occupant when an event occurs.</p>
                </div>
                <div className="bg-white/5 rounded-xl p-4">
                  <h4 className="font-semibold text-white">Oscilloscopes with Power Analysis</h4>
                  <p className="text-white/60 text-sm mt-1">For high-frequency transients and noise issues that affect sensitive electronic equipment, a portable oscilloscope with current probe provides waveform detail that no power quality analyzer matches. You can see individual switching transients, high-frequency noise, and RF interference riding on the power waveform. This is the tool of choice for diagnosing problems in data centers, medical facilities, and industrial automation environments.</p>
                </div>
                <div className="bg-white/5 rounded-xl p-4">
                  <h4 className="font-semibold text-white">Time Domain Reflectometers (TDR)</h4>
                  <p className="text-white/60 text-sm mt-1">A TDR sends a pulse down a cable and measures reflections to locate faults, splices, and impedance changes. For intermittent cable faults (especially in underground or inaccessible runs), a TDR can pinpoint the fault location to within a few feet, eliminating the need to excavate or open up an entire cable run. Some advanced models include arc reflection capabilities for locating intermittent faults that only appear under voltage stress.</p>
                </div>
              </div>
            </section>

            <section id="case-studies" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Case Studies of Common Intermittent Faults</h2>
              <p className="text-white/80 mb-4">
                Real-world examples illustrate how systematic troubleshooting reveals root causes that would otherwise remain hidden.
              </p>

              <div className="space-y-6 my-6">
                <div className="bg-white/5 rounded-xl p-6">
                  <h4 className="font-semibold text-white text-lg mb-2">Case 1: Kitchen Lights Flicker When Refrigerator Runs</h4>
                  <p className="text-white/60 text-sm mb-3"><strong>Symptom:</strong> Recessed LED lights in the kitchen dim briefly every 15-20 minutes, lasting about 1 second.</p>
                  <p className="text-white/60 text-sm mb-3"><strong>Investigation:</strong> The flickering coincided perfectly with the refrigerator compressor cycling on. Voltage at the kitchen receptacle dropped from 121V to 112V during compressor start. The refrigerator was on its own 20A circuit per code, and the lights were on a separate circuit.</p>
                  <p className="text-white/60 text-sm mb-3"><strong>Root cause:</strong> Both circuits shared a neutral (MWBC), and the neutral connection was loose at the panel neutral bar. The high-resistance neutral connection caused voltage fluctuation on the lighting circuit whenever current changed on the refrigerator circuit.</p>
                  <p className="text-emerald-400 text-sm"><strong>Fix:</strong> Tightened the shared neutral connection at the panel. Verified the two circuits were on opposite legs (they were). Flickering stopped immediately.</p>
                </div>

                <div className="bg-white/5 rounded-xl p-6">
                  <h4 className="font-semibold text-white text-lg mb-2">Case 2: Bedroom AFCI Trips at 3 AM</h4>
                  <p className="text-white/60 text-sm mb-3"><strong>Symptom:</strong> Master bedroom AFCI breaker trips 2-3 times per week, always between 2 AM and 4 AM. Customer wakes up to a dead alarm clock.</p>
                  <p className="text-white/60 text-sm mb-3"><strong>Investigation:</strong> All connections on the circuit checked good. No suspect devices plugged in (only alarm clock and phone charger). Breaker replaced with new AFCI - same problem. Deployed a voltage event recorder on the circuit.</p>
                  <p className="text-white/60 text-sm mb-3"><strong>Root cause:</strong> The data logger showed a brief voltage disturbance at the time of each trip. Further investigation revealed that the HVAC system&apos;s auxiliary heat strips (on a separate circuit) energized during the coldest part of the night, and the NM cable for the bedroom circuit was stapled against the same stud as the HVAC circuit cable. A roofing nail had partially penetrated both cables&apos; jackets. When the high-current heat strip cable warmed up, thermal expansion brought the nail close enough to create a micro-arc between the two cables, triggering the AFCI.</p>
                  <p className="text-emerald-400 text-sm"><strong>Fix:</strong> Removed the roofing nail, repaired insulation damage on both cables with approved splice methods, re-routed cables with proper spacing.</p>
                </div>

                <div className="bg-white/5 rounded-xl p-6">
                  <h4 className="font-semibold text-white text-lg mb-2">Case 3: Outdoor Receptacle Works Sometimes</h4>
                  <p className="text-white/60 text-sm mb-3"><strong>Symptom:</strong> Exterior GFCI receptacle on a patio trips randomly. Sometimes works for days, sometimes trips within minutes. Replaced GFCI twice - same problem.</p>
                  <p className="text-white/60 text-sm mb-3"><strong>Investigation:</strong> Pattern analysis revealed trips occurred more frequently during and after rain. Megger testing of the UF cable feeding the receptacle showed 2.1 M&Omega; on a dry day but only 0.3 M&Omega; after rain.</p>
                  <p className="text-white/60 text-sm mb-3"><strong>Root cause:</strong> The underground UF cable had been nicked by a shovel during landscaping work two years earlier. Water was slowly infiltrating through the damaged jacket and degrading the insulation. On dry days, leakage current was below the GFCI&apos;s 5mA trip threshold. After rain saturated the soil around the damage, leakage increased above the threshold.</p>
                  <p className="text-emerald-400 text-sm"><strong>Fix:</strong> Excavated and replaced the damaged section of UF cable with a new continuous run. Installed cable in proper depth per NEC 300.5 and marked the route with underground cable warning tape.</p>
                </div>

                <div className="bg-white/5 rounded-xl p-6">
                  <h4 className="font-semibold text-white text-lg mb-2">Case 4: Lights Brighter on One Side of the House</h4>
                  <p className="text-white/60 text-sm mb-3"><strong>Symptom:</strong> Homeowner reports that some lights seem brighter than normal while others are dimmer. The problem comes and goes. One lightbulb burned out after only two weeks.</p>
                  <p className="text-white/60 text-sm mb-3"><strong>Investigation:</strong> Voltage measurements at the panel showed Leg A at 134V and Leg B at 106V (nominal is 120V each). The combined voltage was 240V across both legs. Voltage shifted when large loads were turned on and off.</p>
                  <p className="text-white/60 text-sm mb-3"><strong>Root cause:</strong> Classic open (high-resistance) neutral at the utility transformer connection. The neutral clamp on the overhead service drop had corroded, creating a high-resistance connection. As load balance shifted between the two legs, voltage floated unevenly.</p>
                  <p className="text-emerald-400 text-sm"><strong>Fix:</strong> Contacted the utility company. They replaced the corroded neutral clamp and service drop connection at the transformer. Voltage balanced immediately. Advised customer to check any electronics that were exposed to overvoltage.</p>
                </div>
              </div>
            </section>

            <section id="replace-vs-repair" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">When to Replace vs Repair</h2>
              <p className="text-white/80 mb-4">
                After finding the root cause of an intermittent fault, you need to decide whether to repair the existing component or replace it entirely. This decision affects reliability, safety, and cost.
              </p>

              <div className="space-y-4 my-6">
                <div className="bg-white/5 rounded-xl p-4">
                  <h4 className="font-semibold text-white">Replace When:</h4>
                  <ul className="text-white/60 text-sm mt-2 space-y-1">
                    <li>&bull; The breaker has heat damage, pitting, or discoloration on the stab contacts</li>
                    <li>&bull; Wire insulation is melted, cracked, or brittle due to overheating</li>
                    <li>&bull; Receptacles or switches have backstab connections that have failed (convert to screw terminals on new devices)</li>
                    <li>&bull; Underground cable has jacket damage (splice only if the damage is a single location and accessible; otherwise replace the run)</li>
                    <li>&bull; Aluminum wiring connections have failed (use CO/ALR rated devices and apply anti-oxidant compound, or remediate with approved copper pigtail methods per CPSC recommendations)</li>
                    <li>&bull; The component has failed more than once in the same way</li>
                  </ul>
                </div>
                <div className="bg-white/5 rounded-xl p-4">
                  <h4 className="font-semibold text-white">Repair When:</h4>
                  <ul className="text-white/60 text-sm mt-2 space-y-1">
                    <li>&bull; The connection simply needs to be tightened to manufacturer torque specifications</li>
                    <li>&bull; A wire nut needs to be re-applied with proper technique (strip length, number of twists, correct nut size)</li>
                    <li>&bull; Corrosion is surface-level and can be cleaned with appropriate contact cleaner or abrasive</li>
                    <li>&bull; The insulation damage is minor and in an accessible location (repair with approved split-bolt and tape or heat-shrink methods per NEC 110.14)</li>
                    <li>&bull; The issue is moisture intrusion that can be corrected by resealing the enclosure</li>
                  </ul>
                </div>
              </div>

              <div className="bg-emerald-900/30 rounded-xl p-6 my-6">
                <h3 className="font-semibold text-emerald-400 mb-2">The Golden Rule</h3>
                <p className="text-white/70">
                  If you are not confident the repair will last, replace the component. The cost of a callback and second troubleshooting visit always exceeds the cost of a new breaker, receptacle, or section of wire. Your reputation depends on fixing problems permanently, not temporarily.
                </p>
              </div>

              <p className="text-white/80 mb-4">
                After any repair or replacement, verify the fix by recreating the conditions that triggered the original fault. If the fault was load-related, apply the load. If it was temperature-related, let the system run through a full thermal cycle. If it was weather-related, schedule a follow-up after the next rain. Document the repair, test results, and follow-up plan for the customer.
              </p>
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
                <Link href="/blog/electrical-panel-troubleshooting" className="bg-white/5 hover:bg-white/10 rounded-xl p-6 transition-colors">
                  <span className="text-red-400 text-sm">Troubleshooting</span>
                  <h3 className="font-semibold mt-2">Electrical Panel Troubleshooting: Common Problems &amp; Solutions</h3>
                </Link>
                <Link href="/blog/multimeter-guide-electricians" className="bg-white/5 hover:bg-white/10 rounded-xl p-6 transition-colors">
                  <span className="text-cyan-400 text-sm">Technology</span>
                  <h3 className="font-semibold mt-2">Multimeter Guide for Electricians</h3>
                </Link>
                <Link href="/blog/electrical-grounding-vs-bonding" className="bg-white/5 hover:bg-white/10 rounded-xl p-6 transition-colors">
                  <span className="text-blue-400 text-sm">NEC Code</span>
                  <h3 className="font-semibold mt-2">Electrical Grounding vs Bonding Explained</h3>
                </Link>
                <Link href="/blog/gfci-vs-afci-requirements" className="bg-white/5 hover:bg-white/10 rounded-xl p-6 transition-colors">
                  <span className="text-purple-400 text-sm">NEC Code</span>
                  <h3 className="font-semibold mt-2">GFCI vs AFCI: Requirements &amp; Differences</h3>
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
