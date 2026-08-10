import { Metadata } from "next";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import { BlogPostingJsonLd, BreadcrumbJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Circuit Breaker Won't Reset: Diagnosis & Solutions Guide",
  description: "Complete troubleshooting guide when a circuit breaker won't reset. Learn how to diagnose tripped breakers, identify short circuits, ground faults, overloaded circuits, and bad breakers. Step-by-step reset procedures, AFCI vs GFCI trip indicators, and when to call an electrician.",
  keywords: [
    "circuit breaker wont reset",
    "breaker keeps tripping",
    "tripped breaker wont reset",
    "short circuit breaker",
    "ground fault breaker tripping",
    "overloaded circuit breaker",
    "bad circuit breaker",
    "breaker tripped and wont turn on",
    "how to reset circuit breaker",
    "breaker stuck in tripped position"
  ],
  alternates: {
    canonical: "https://amporalabs.com/blog/circuit-breaker-wont-reset",
  },
  openGraph: {
    title: "Circuit Breaker Won't Reset: Diagnosis & Solutions Guide - Ampora",
    description: "Troubleshoot a circuit breaker that won't reset with this systematic diagnosis guide covering overloads, short circuits, ground faults, and bad breakers.",
    url: "https://amporalabs.com/blog/circuit-breaker-wont-reset",
    type: "article",
    publishedTime: "2026-03-04",
  },
};

function HeroIllustration() {
  return (
    <svg viewBox="0 0 400 180" className="w-full h-40 md:h-48" aria-label="Circuit breaker states showing ON, OFF, and tripped positions with diagnostic flow">
      {/* Background */}
      <rect x="10" y="10" width="380" height="160" rx="4" fill="#1f2937" stroke="#374151" strokeWidth="1"/>

      {/* Breaker Panel Background */}
      <rect x="20" y="20" width="160" height="150" rx="3" fill="#111827" stroke="#4b5563" strokeWidth="1.5"/>
      <text x="100" y="36" textAnchor="middle" fill="#9ca3af" fontSize="6" fontWeight="bold">BREAKER PANEL</text>

      {/* Breaker 1 - ON position */}
      <g transform="translate(30, 44)">
        <rect x="0" y="0" width="40" height="55" rx="2" fill="#1f2937" stroke="#22c55e" strokeWidth="1.5"/>
        <text x="20" y="12" textAnchor="middle" fill="#22c55e" fontSize="6" fontWeight="bold">ON</text>
        {/* Toggle switch - UP */}
        <rect x="12" y="16" width="16" height="24" rx="2" fill="#374151" stroke="#6b7280" strokeWidth="1"/>
        <rect x="14" y="17" width="12" height="10" rx="1.5" fill="#22c55e"/>
        <text x="20" y="48" textAnchor="middle" fill="#9ca3af" fontSize="5">20A</text>
      </g>

      {/* Breaker 2 - TRIPPED position (middle) */}
      <g transform="translate(80, 44)">
        <rect x="0" y="0" width="40" height="55" rx="2" fill="#1f2937" stroke="#ef4444" strokeWidth="2"/>
        <text x="20" y="12" textAnchor="middle" fill="#ef4444" fontSize="6" fontWeight="bold">TRIP</text>
        {/* Toggle switch - MIDDLE */}
        <rect x="12" y="16" width="16" height="24" rx="2" fill="#374151" stroke="#6b7280" strokeWidth="1"/>
        <rect x="14" y="23" width="12" height="10" rx="1.5" fill="#ef4444"/>
        <text x="20" y="48" textAnchor="middle" fill="#9ca3af" fontSize="5">20A</text>
        {/* Alert indicator */}
        <circle cx="36" cy="4" r="3" fill="#ef4444" fillOpacity="0.8"/>
      </g>

      {/* Breaker 3 - OFF position */}
      <g transform="translate(130, 44)">
        <rect x="0" y="0" width="40" height="55" rx="2" fill="#1f2937" stroke="#6b7280" strokeWidth="1.5"/>
        <text x="20" y="12" textAnchor="middle" fill="#9ca3af" fontSize="6" fontWeight="bold">OFF</text>
        {/* Toggle switch - DOWN */}
        <rect x="12" y="16" width="16" height="24" rx="2" fill="#374151" stroke="#6b7280" strokeWidth="1"/>
        <rect x="14" y="29" width="12" height="10" rx="1.5" fill="#6b7280"/>
        <text x="20" y="48" textAnchor="middle" fill="#9ca3af" fontSize="5">20A</text>
      </g>

      {/* Labels under breakers */}
      <text x="50" y="112" textAnchor="middle" fill="#22c55e" fontSize="5.5" fontWeight="bold">NORMAL</text>
      <text x="100" y="112" textAnchor="middle" fill="#ef4444" fontSize="5.5" fontWeight="bold">TRIPPED</text>
      <text x="150" y="112" textAnchor="middle" fill="#9ca3af" fontSize="5.5" fontWeight="bold">OFF</text>

      {/* Reset Arrow Flow */}
      <g transform="translate(60, 120)">
        <text x="40" y="10" textAnchor="middle" fill="#fbbf24" fontSize="5" fontWeight="bold">RESET: TRIP &rarr; OFF &rarr; ON</text>
        <path d="M5 18 L75 18" stroke="#fbbf24" strokeWidth="1" strokeDasharray="3,2"/>
        <polygon points="75,15 80,18 75,21" fill="#fbbf24"/>
      </g>

      {/* Diagnostic Flow - Right side */}
      <g transform="translate(200, 22)">
        <text x="80" y="10" textAnchor="middle" fill="#22d3ee" fontSize="7" fontWeight="bold">DIAGNOSIS FLOW</text>

        {/* Step boxes */}
        <rect x="0" y="18" width="160" height="22" rx="3" fill="#ef4444" fillOpacity="0.15" stroke="#ef4444" strokeWidth="1"/>
        <text x="80" y="32" textAnchor="middle" fill="#ef4444" fontSize="6" fontWeight="bold">Breaker Won&apos;t Reset?</text>

        <line x1="80" y1="40" x2="80" y2="46" stroke="#6b7280" strokeWidth="1"/>
        <polygon points="77,46 80,50 83,46" fill="#6b7280"/>

        <rect x="0" y="50" width="160" height="22" rx="3" fill="#f59e0b" fillOpacity="0.15" stroke="#f59e0b" strokeWidth="1"/>
        <text x="80" y="64" textAnchor="middle" fill="#f59e0b" fontSize="5.5">Disconnect all loads on circuit</text>

        <line x1="80" y1="72" x2="80" y2="78" stroke="#6b7280" strokeWidth="1"/>
        <polygon points="77,78 80,82 83,78" fill="#6b7280"/>

        <rect x="0" y="82" width="75" height="22" rx="3" fill="#22c55e" fillOpacity="0.15" stroke="#22c55e" strokeWidth="1"/>
        <text x="37" y="92" textAnchor="middle" fill="#22c55e" fontSize="5">Resets OK?</text>
        <text x="37" y="100" textAnchor="middle" fill="#22c55e" fontSize="4.5">Overloaded Circuit</text>

        <rect x="85" y="82" width="75" height="22" rx="3" fill="#ef4444" fillOpacity="0.15" stroke="#ef4444" strokeWidth="1"/>
        <text x="122" y="92" textAnchor="middle" fill="#ef4444" fontSize="5">Still Trips?</text>
        <text x="122" y="100" textAnchor="middle" fill="#ef4444" fontSize="4.5">Short / Ground Fault</text>

        <line x1="122" y1="104" x2="122" y2="110" stroke="#6b7280" strokeWidth="1"/>
        <polygon points="119,110 122,114 125,110" fill="#6b7280"/>

        <rect x="45" y="114" width="115" height="22" rx="3" fill="#a855f7" fillOpacity="0.15" stroke="#a855f7" strokeWidth="1"/>
        <text x="102" y="124" textAnchor="middle" fill="#a855f7" fontSize="5">Test breaker on different circuit</text>
        <text x="102" y="132" textAnchor="middle" fill="#a855f7" fontSize="4.5">Bad breaker? Replace.</text>

        {/* Flow arrows from center */}
        <line x1="40" y1="72" x2="37" y2="82" stroke="#6b7280" strokeWidth="1"/>
        <line x1="120" y1="72" x2="122" y2="82" stroke="#6b7280" strokeWidth="1"/>
      </g>
    </svg>
  );
}

export default function CircuitBreakerWontResetPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navigation />
      <div className="pt-20">
        <BreadcrumbJsonLd
          items={[
            { name: "Home", url: "https://amporalabs.com" },
            { name: "Blog", url: "https://amporalabs.com/blog" },
            { name: "Circuit Breaker Won't Reset", url: "https://amporalabs.com/blog/circuit-breaker-wont-reset" },
          ]}
        />
        <BlogPostingJsonLd
          headline="Circuit Breaker Won't Reset: Diagnosis & Solutions Guide"
          description="Complete troubleshooting guide for circuit breakers that won't reset, covering overloads, short circuits, ground faults, bad breakers, and systematic diagnosis procedures."
          datePublished="2026-03-04"
          dateModified="2026-03-04"
          url="https://amporalabs.com/blog/circuit-breaker-wont-reset"
          wordCount={5200}
          keywords={["circuit breaker wont reset", "tripped breaker", "short circuit", "ground fault", "overloaded circuit"]}
        />

        <article className="max-w-4xl mx-auto px-6 py-12">
          {/* Breadcrumb */}
          <nav className="text-sm text-white/60 mb-8">
            <Link href="/" className="hover:text-white">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/blog" className="hover:text-white">Blog</Link>
            <span className="mx-2">/</span>
            <span className="text-white">Circuit Breaker Won&apos;t Reset</span>
          </nav>

          {/* Article Header */}
          <header className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <span className="px-3 py-1 bg-red-600/20 text-red-300 text-sm font-medium rounded-full">
                Troubleshooting
              </span>
              <span className="text-white/40 text-sm">18 min read</span>
              <span className="text-white/40 text-sm">March 4, 2026</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6 leading-tight">
              Circuit Breaker Won&apos;t Reset: Diagnosis &amp; Solutions Guide
            </h1>
            <p className="text-xl text-white/70">
              A circuit breaker that refuses to reset is telling you something is wrong on the circuit. This comprehensive guide walks you through the proper reset procedure, explains the four main reasons breakers trip, provides a systematic approach to diagnosing overloads, short circuits, ground faults, and bad breakers, and helps you determine when it&apos;s time to call a licensed electrician.
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
                <h3 className="font-display font-bold text-lg mb-2 text-red-400">Critical Safety Warning</h3>
                <p className="text-white/80 text-sm">
                  Working inside an electrical panel involves exposure to lethal voltages. The main breaker and incoming service conductors remain energized even when branch circuit breakers are off. Never remove panel covers or touch bus bars. If you are not a qualified person comfortable working around energized equipment, stop and call a licensed electrician. Follow all applicable <Link href="/blog/electrical-safety-nfpa-70e" className="text-red-400 underline hover:text-red-300">NFPA 70E electrical safety</Link> practices.
                </p>
              </div>
            </div>
          </div>

          {/* Table of Contents */}
          <div className="bg-white/5 rounded-2xl p-6 mb-12">
            <h2 className="font-display font-bold mb-4">In This Guide</h2>
            <ul className="space-y-2 text-white/70">
              <li><a href="#proper-reset" className="hover:text-purple-400">How to Properly Reset a Tripped Circuit Breaker</a></li>
              <li><a href="#why-breakers-trip" className="hover:text-purple-400">Why Circuit Breakers Trip: 4 Main Causes</a></li>
              <li><a href="#systematic-diagnosis" className="hover:text-purple-400">Systematic Diagnosis Approach</a></li>
              <li><a href="#overloaded-circuits" className="hover:text-purple-400">Identifying Overloaded Circuits</a></li>
              <li><a href="#short-circuits" className="hover:text-purple-400">Finding Short Circuits</a></li>
              <li><a href="#ground-faults" className="hover:text-purple-400">Locating Ground Faults</a></li>
              <li><a href="#afci-gfci-indicators" className="hover:text-purple-400">AFCI vs GFCI Trip Indicators</a></li>
              <li><a href="#bad-breaker-signs" className="hover:text-purple-400">Signs of a Bad Circuit Breaker</a></li>
              <li><a href="#replace-vs-repair" className="hover:text-purple-400">When to Replace vs Repair</a></li>
              <li><a href="#safety-precautions" className="hover:text-purple-400">Safety Precautions</a></li>
              <li><a href="#when-to-call" className="hover:text-purple-400">When to Call an Electrician</a></li>
              <li><a href="#faq" className="hover:text-purple-400">Frequently Asked Questions</a></li>
            </ul>
          </div>

          {/* Article Content */}
          <div className="prose prose-invert prose-lg max-w-none">

            <section id="proper-reset" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">How to Properly Reset a Tripped Circuit Breaker</h2>
              <p className="text-white/80 mb-4">
                Many people fail to reset a tripped breaker simply because they don&apos;t understand the three-position toggle mechanism. A <strong>tripped breaker</strong> does not sit fully in the ON or OFF position &mdash; it rests in a <strong>middle &ldquo;tripped&rdquo; position</strong>. You cannot push it directly from tripped to ON. You must first push the handle firmly to the full OFF position, then flip it back to ON.
              </p>

              <div className="space-y-4 my-6">
                <div className="bg-white/5 rounded-xl p-4 flex items-start gap-4">
                  <span className="bg-cyan-600 text-white text-sm font-bold px-3 py-1 rounded-full">1</span>
                  <div>
                    <p className="font-semibold text-white">Identify the Tripped Breaker</p>
                    <p className="text-white/60 text-sm">Open the panel cover and look for the breaker whose handle is in the <strong>middle position</strong> &mdash; not fully ON and not fully OFF. Some breakers show an orange or red trip indicator flag in a small window on the handle or body.</p>
                  </div>
                </div>
                <div className="bg-white/5 rounded-xl p-4 flex items-start gap-4">
                  <span className="bg-cyan-600 text-white text-sm font-bold px-3 py-1 rounded-full">2</span>
                  <div>
                    <p className="font-semibold text-white">Push Firmly to OFF</p>
                    <p className="text-white/60 text-sm">Push the breaker handle all the way to the <strong>OFF position</strong> until you feel it click. This resets the internal trip mechanism. If you skip this step and try to push directly to ON, the breaker will not engage.</p>
                  </div>
                </div>
                <div className="bg-white/5 rounded-xl p-4 flex items-start gap-4">
                  <span className="bg-cyan-600 text-white text-sm font-bold px-3 py-1 rounded-full">3</span>
                  <div>
                    <p className="font-semibold text-white">Flip to ON</p>
                    <p className="text-white/60 text-sm">With the handle now in the full OFF position, flip it firmly to <strong>ON</strong>. The breaker should stay in the ON position. If it immediately trips back to the middle position, there is an active fault on the circuit that must be diagnosed before resetting again.</p>
                  </div>
                </div>
                <div className="bg-white/5 rounded-xl p-4 flex items-start gap-4">
                  <span className="bg-cyan-600 text-white text-sm font-bold px-3 py-1 rounded-full">4</span>
                  <div>
                    <p className="font-semibold text-white">Observe for 30 Seconds</p>
                    <p className="text-white/60 text-sm">After resetting, stand at the panel and watch the breaker for at least 30 seconds. If the breaker holds, the trip may have been caused by a momentary overload. If it trips again within seconds or minutes, proceed with systematic diagnosis.</p>
                  </div>
                </div>
              </div>

              <div className="bg-yellow-900/30 rounded-xl p-6 my-6 border border-yellow-500/30">
                <h4 className="font-semibold text-yellow-400 mb-3">Common Mistake: Not Pushing to Full OFF First</h4>
                <p className="text-white/70 text-sm">
                  The number one reason people think a breaker &ldquo;won&apos;t reset&rdquo; is that they try to push the handle directly from the tripped (middle) position to ON without going through OFF first. The internal mechanism requires a full OFF-to-ON motion to re-engage the contacts. This is by design &mdash; it ensures you make a deliberate decision to re-energize the circuit.
                </p>
              </div>
            </section>

            <section id="why-breakers-trip" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Why Circuit Breakers Trip: 4 Main Causes</h2>
              <p className="text-white/80 mb-4">
                Circuit breakers are <Link href="/blog/nec-article-240-overcurrent-protection" className="text-cyan-400 underline hover:text-cyan-300">overcurrent protection devices</Link> designed to interrupt current flow when unsafe conditions are detected. Understanding why a breaker tripped is essential to fixing the problem. There are four main reasons a breaker will trip:
              </p>

              <div className="grid md:grid-cols-2 gap-6 my-6">
                <div className="bg-orange-900/30 rounded-xl p-6">
                  <h3 className="font-semibold text-orange-400 mb-3">1. Overloaded Circuit</h3>
                  <p className="text-white/60 text-sm mb-2">
                    The total current draw on the circuit exceeds the breaker&apos;s ampere rating for a sustained period. This is the <strong>most common cause</strong> of breaker trips.
                  </p>
                  <ul className="text-white/60 text-sm space-y-1">
                    <li>Too many devices on one circuit</li>
                    <li>High-draw appliances (space heaters, hair dryers)</li>
                    <li>Motor startup surges from compressors or pumps</li>
                    <li>Breaker trips after running for minutes to hours</li>
                  </ul>
                </div>
                <div className="bg-red-900/30 rounded-xl p-6">
                  <h3 className="font-semibold text-red-400 mb-3">2. Short Circuit</h3>
                  <p className="text-white/60 text-sm mb-2">
                    A hot conductor contacts a neutral conductor or another hot conductor, creating a <strong>low-resistance path</strong> that draws massive current instantaneously.
                  </p>
                  <ul className="text-white/60 text-sm space-y-1">
                    <li>Damaged wire insulation allowing conductors to touch</li>
                    <li>Faulty appliance or device with internal wiring failure</li>
                    <li>Loose connections creating conductor contact</li>
                    <li>Breaker trips <strong>instantly</strong> when turned on</li>
                  </ul>
                </div>
                <div className="bg-yellow-900/30 rounded-xl p-6">
                  <h3 className="font-semibold text-yellow-400 mb-3">3. Ground Fault</h3>
                  <p className="text-white/60 text-sm mb-2">
                    A hot conductor contacts a grounded surface (metal box, conduit, equipment frame) or the grounding conductor, allowing current to flow along an unintended path.
                  </p>
                  <ul className="text-white/60 text-sm space-y-1">
                    <li>Water intrusion into outlets or junction boxes</li>
                    <li>Damaged insulation contacting metal conduit</li>
                    <li>Defective appliance with hot-to-frame leakage</li>
                    <li>GFCI breakers detect as little as 4-6mA imbalance</li>
                  </ul>
                </div>
                <div className="bg-purple-900/30 rounded-xl p-6">
                  <h3 className="font-semibold text-purple-400 mb-3">4. Arc Fault</h3>
                  <p className="text-white/60 text-sm mb-2">
                    An unintended electrical arc occurs due to damaged, deteriorated, or improperly installed wiring, posing a <strong>fire hazard</strong>.
                  </p>
                  <ul className="text-white/60 text-sm space-y-1">
                    <li>Nails or screws through wiring in walls</li>
                    <li>Pinched or kinked cables behind furniture</li>
                    <li>Loose wire connections at terminals</li>
                    <li>AFCI breakers detect characteristic arc signatures</li>
                  </ul>
                </div>
              </div>

              <div className="bg-white/5 rounded-xl p-6 my-6">
                <h4 className="font-semibold text-cyan-400 mb-3">Trip Speed Tells You the Cause</h4>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                  <div>
                    <p className="text-2xl font-bold text-red-400">Instant</p>
                    <p className="text-white/60 text-sm">Short circuit: trips the moment you flip to ON</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-yellow-400">Seconds</p>
                    <p className="text-white/60 text-sm">Ground fault or heavy short: trips within 1-10 seconds</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-orange-400">Minutes</p>
                    <p className="text-white/60 text-sm">Overload: trips after several minutes of running</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-purple-400">Random</p>
                    <p className="text-white/60 text-sm">Arc fault or intermittent: trips at unpredictable intervals</p>
                  </div>
                </div>
              </div>
            </section>

            <section id="systematic-diagnosis" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Systematic Diagnosis Approach</h2>
              <p className="text-white/80 mb-4">
                When a circuit breaker won&apos;t stay reset, follow this systematic <Link href="/blog/electrical-troubleshooting-methodology" className="text-cyan-400 underline hover:text-cyan-300">troubleshooting methodology</Link> to isolate the cause. The key principle is <strong>divide and conquer</strong> &mdash; eliminate possible causes one at a time until you find the fault.
              </p>

              <div className="space-y-4 my-6">
                <div className="bg-white/5 rounded-xl p-6 border-l-4 border-cyan-500">
                  <h4 className="font-semibold text-cyan-400 mb-2">Step 1: Unplug Everything on the Circuit</h4>
                  <p className="text-white/70 text-sm">
                    Disconnect every device, appliance, lamp, and anything plugged into outlets on the affected circuit. Turn off all switches controlling hardwired loads (lights, fans, disposals). This isolates the wiring from the loads.
                  </p>
                </div>

                <div className="bg-white/5 rounded-xl p-6 border-l-4 border-cyan-500">
                  <h4 className="font-semibold text-cyan-400 mb-2">Step 2: Reset the Breaker (OFF, then ON)</h4>
                  <p className="text-white/70 text-sm">
                    With all loads disconnected, push the breaker to full OFF, then firmly to ON. If the breaker <strong>holds with no loads connected</strong>, the problem is one of your devices or an overloaded circuit. If the breaker <strong>trips immediately with nothing connected</strong>, the fault is in the wiring itself or the breaker is bad.
                  </p>
                </div>

                <div className="bg-white/5 rounded-xl p-6 border-l-4 border-cyan-500">
                  <h4 className="font-semibold text-cyan-400 mb-2">Step 3A: If Breaker Holds &mdash; Reconnect Loads One at a Time</h4>
                  <p className="text-white/70 text-sm">
                    Plug in devices one by one, waiting 30 seconds between each. When the breaker trips, the last device you connected is either faulty or is overloading the circuit. Test that device on a different circuit to confirm. If no single device trips the breaker but it trips when several are connected, the circuit is simply overloaded.
                  </p>
                </div>

                <div className="bg-white/5 rounded-xl p-6 border-l-4 border-cyan-500">
                  <h4 className="font-semibold text-cyan-400 mb-2">Step 3B: If Breaker Trips Immediately with No Loads</h4>
                  <p className="text-white/70 text-sm">
                    The fault is in the building wiring (a short circuit or ground fault in a cable, junction box, or device box) or the breaker itself is defective. Use a multimeter to check for shorts between the hot wire and neutral/ground at the breaker. If readings show a dead short (near 0 ohms), the wiring has a fault. If the wiring tests clean, the breaker is likely bad.
                  </p>
                </div>

                <div className="bg-white/5 rounded-xl p-6 border-l-4 border-cyan-500">
                  <h4 className="font-semibold text-cyan-400 mb-2">Step 4: Isolate the Wiring Section</h4>
                  <p className="text-white/70 text-sm">
                    If the wiring has a fault, disconnect the circuit wire from the breaker and check continuity between hot-to-neutral and hot-to-ground at each junction box, outlet, and switch along the circuit. This narrows the fault to a specific cable run or device box. Look for damaged insulation, burned connections, water damage, or rodent chew marks.
                  </p>
                </div>

                <div className="bg-white/5 rounded-xl p-6 border-l-4 border-cyan-500">
                  <h4 className="font-semibold text-cyan-400 mb-2">Step 5: Test the Breaker Itself</h4>
                  <p className="text-white/70 text-sm">
                    If the wiring checks out, swap a known-good breaker of the same type and amperage into the same panel slot. If the new breaker holds, the original breaker is defective and should be replaced. Always use the correct breaker type and brand for your panel &mdash; never use cross-brand breakers unless they are specifically classified for that panel.
                  </p>
                </div>
              </div>
            </section>

            <section id="overloaded-circuits" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Identifying Overloaded Circuits</h2>
              <p className="text-white/80 mb-4">
                An overloaded circuit draws more current than the breaker is rated to carry. The breaker&apos;s <strong>thermal trip mechanism</strong> (bimetallic strip) heats up under sustained overcurrent and eventually deflects enough to release the trip mechanism. This is a time-dependent process &mdash; higher overloads trip faster.
              </p>

              <div className="bg-white/5 rounded-xl p-6 my-6">
                <h4 className="font-semibold text-white mb-3">Typical Load vs Breaker Rating</h4>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-white/20">
                        <th className="text-left py-3 px-4 text-white/60">Breaker Rating</th>
                        <th className="text-left py-3 px-4 text-white/60">Max Continuous Load (80%)</th>
                        <th className="text-left py-3 px-4 text-white/60">Common Appliance Draws</th>
                      </tr>
                    </thead>
                    <tbody className="text-white/80">
                      <tr className="border-b border-white/10">
                        <td className="py-3 px-4 font-mono text-cyan-400">15A (120V)</td>
                        <td className="py-3 px-4 font-mono">12A / 1,440W</td>
                        <td className="py-3 px-4 text-white/60">Hair dryer (1,500W) can overload alone</td>
                      </tr>
                      <tr className="border-b border-white/10">
                        <td className="py-3 px-4 font-mono text-cyan-400">20A (120V)</td>
                        <td className="py-3 px-4 font-mono">16A / 1,920W</td>
                        <td className="py-3 px-4 text-white/60">Space heater (1,500W) + microwave (1,200W) = trip</td>
                      </tr>
                      <tr className="border-b border-white/10">
                        <td className="py-3 px-4 font-mono text-cyan-400">30A (240V)</td>
                        <td className="py-3 px-4 font-mono">24A / 5,760W</td>
                        <td className="py-3 px-4 text-white/60">Electric dryer (5,000W typical)</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4 font-mono text-cyan-400">50A (240V)</td>
                        <td className="py-3 px-4 font-mono">40A / 9,600W</td>
                        <td className="py-3 px-4 text-white/60">Electric range (8,000-12,000W)</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <h3 className="text-xl font-display font-semibold mb-3 text-cyan-400">Signs of an Overloaded Circuit</h3>
              <ul className="list-disc list-inside text-white/70 space-y-2 mb-4">
                <li>Breaker trips <strong>after running for several minutes</strong> (not instantly)</li>
                <li>Trips only when multiple high-draw appliances run simultaneously</li>
                <li>Outlets or switch plates feel <strong>warm to the touch</strong></li>
                <li>Lights dim momentarily when large appliances start (motors, compressors)</li>
                <li>Burning smell at outlets without visible damage (sign of overheated connections)</li>
              </ul>

              <div className="bg-green-900/20 rounded-xl p-6 my-6 border border-green-500/20">
                <h4 className="font-semibold text-green-400 mb-3">Solutions for Overloaded Circuits</h4>
                <ul className="text-white/70 space-y-2 text-sm">
                  <li><strong>Redistribute loads:</strong> Move high-draw appliances to different circuits</li>
                  <li><strong>Avoid daisy-chaining:</strong> Don&apos;t plug power strips into power strips</li>
                  <li><strong>Add a dedicated circuit:</strong> High-draw appliances (space heaters, window ACs, microwaves) should have their own circuit</li>
                  <li><strong>Upgrade the circuit:</strong> If the wiring supports it, a qualified electrician can upgrade from a 15A to 20A breaker with 12 AWG wire</li>
                  <li><strong>Never upsize a breaker without upsizing the wire</strong> &mdash; this creates a fire hazard as the wire can overheat before the breaker trips</li>
                </ul>
              </div>
            </section>

            <section id="short-circuits" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Finding Short Circuits</h2>
              <p className="text-white/80 mb-4">
                A <strong>short circuit</strong> creates an extremely low-resistance path that draws hundreds or thousands of amps instantaneously, tripping the breaker&apos;s <strong>magnetic trip mechanism</strong> within milliseconds. The telltale sign: the breaker trips the <strong>instant</strong> you flip it to ON, often with an audible &ldquo;pop&rdquo; or spark inside the panel.
              </p>

              <h3 className="text-xl font-display font-semibold mb-3 text-cyan-400">How to Locate a Short Circuit</h3>
              <div className="space-y-4 my-6">
                <div className="bg-white/5 rounded-xl p-4">
                  <p className="font-semibold text-white mb-1">1. Visual Inspection</p>
                  <p className="text-white/60 text-sm">Look for <strong>burn marks, melted insulation, or a burning smell</strong> at outlets, switches, junction boxes, and the breaker itself. Discoloration on outlet faces or charred wiring is a strong indicator of the fault location.</p>
                </div>
                <div className="bg-white/5 rounded-xl p-4">
                  <p className="font-semibold text-white mb-1">2. Disconnect the Wire from the Breaker</p>
                  <p className="text-white/60 text-sm">With the breaker OFF, disconnect the hot (black) wire from the breaker terminal. Using a multimeter set to resistance (ohms), measure between the disconnected hot wire and the neutral bus bar, then between the hot wire and the ground bus bar.</p>
                </div>
                <div className="bg-white/5 rounded-xl p-4">
                  <p className="font-semibold text-white mb-1">3. Interpret Readings</p>
                  <p className="text-white/60 text-sm"><strong>Near 0 ohms (hot to neutral):</strong> Short circuit between hot and neutral conductors. <strong>Near 0 ohms (hot to ground):</strong> Ground fault &mdash; hot conductor contacting grounded metal. <strong>High resistance / OL:</strong> No short detected from the panel end &mdash; the fault may be intermittent or in a specific device.</p>
                </div>
                <div className="bg-white/5 rounded-xl p-4">
                  <p className="font-semibold text-white mb-1">4. Segment the Circuit</p>
                  <p className="text-white/60 text-sm">If a short is confirmed, open junction boxes along the circuit and disconnect wire splices to isolate segments. Re-test each segment to narrow the fault to a specific cable run between two points. Check for nails/screws through cables, rodent damage, or water-damaged insulation.</p>
                </div>
              </div>

              <div className="bg-red-900/30 rounded-xl p-6 my-6">
                <h4 className="font-semibold text-red-400 mb-3">Common Short Circuit Locations</h4>
                <ul className="text-white/70 space-y-2 text-sm">
                  <li><strong>Outlet and switch boxes:</strong> Wires pushed too far back, insulation nicked by box edges or cut during stripping</li>
                  <li><strong>Behind walls:</strong> Nails or screws from hanging pictures, shelves, or trim penetrating cables</li>
                  <li><strong>Appliance cords:</strong> Damaged cords with exposed conductors, especially near the plug or where the cord enters the appliance</li>
                  <li><strong>Junction boxes:</strong> Failed wire nuts, loose splices, or cables entering without proper strain relief</li>
                  <li><strong>Attics and crawlspaces:</strong> Rodent damage to NM cable sheathing, insulation compressed against hot wires</li>
                </ul>
              </div>
            </section>

            <section id="ground-faults" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Locating Ground Faults</h2>
              <p className="text-white/80 mb-4">
                A <strong>ground fault</strong> occurs when current leaks from a hot conductor to a grounded surface. Standard breakers detect ground faults only when the leakage current is high enough to register as an overcurrent. <strong>GFCI breakers</strong>, however, detect current imbalances as small as 4-6 milliamps between the hot and neutral conductors, tripping to prevent electrocution.
              </p>

              <div className="grid md:grid-cols-2 gap-6 my-6">
                <div className="bg-white/5 rounded-xl p-6">
                  <h3 className="font-semibold text-cyan-400 mb-3">Standard Breaker Ground Fault</h3>
                  <ul className="text-white/60 text-sm space-y-2">
                    <li>Only trips if ground fault current is high (dead short to ground)</li>
                    <li>Hot conductor touches metal box, conduit, or equipment frame</li>
                    <li>Behaves similar to a short circuit &mdash; trips instantly</li>
                    <li>Measure hot-to-ground at panel: near 0 ohms indicates fault</li>
                    <li>Often found in metal-box wiring with damaged conductor insulation</li>
                  </ul>
                </div>
                <div className="bg-white/5 rounded-xl p-6">
                  <h3 className="font-semibold text-yellow-400 mb-3">GFCI Breaker Ground Fault</h3>
                  <ul className="text-white/60 text-sm space-y-2">
                    <li>Trips at <strong>4-6mA</strong> of current leakage &mdash; far below what a standard breaker can detect</li>
                    <li>Moisture in outlet boxes, wet appliance cords, damp crawlspace wiring</li>
                    <li>Shared neutrals between circuits cause false trips</li>
                    <li>Long cable runs can have enough natural leakage to trip GFCI</li>
                    <li>Multiple GFCI devices on the same circuit interfere with each other</li>
                  </ul>
                </div>
              </div>

              <h3 className="text-xl font-display font-semibold mb-3 text-cyan-400">Ground Fault Diagnosis Steps</h3>
              <ol className="list-decimal list-inside text-white/70 space-y-3 mb-4">
                <li><strong>Disconnect all loads</strong> on the circuit and attempt to reset. If the GFCI breaker now holds, reconnect loads one at a time to find the faulty device.</li>
                <li><strong>Check for moisture</strong> in outdoor outlets, bathroom boxes, kitchen outlets near sinks, basement/crawlspace boxes, and any underground wiring.</li>
                <li><strong>Verify neutral wiring</strong> &mdash; ensure the circuit&apos;s neutral wire connects only to the GFCI breaker&apos;s neutral pigtail, not directly to the neutral bus. A neutral wire from another circuit tied into this circuit&apos;s neutral will cause the GFCI to trip.</li>
                <li><strong>Use a megohmmeter (megger)</strong> to test insulation resistance between hot-to-ground. Healthy insulation should read above 1 megohm. Readings below 1M ohm suggest deteriorated insulation that may be leaking enough current to trip a GFCI breaker.</li>
                <li><strong>Inspect for bootleg grounds</strong> &mdash; outlets where the neutral and ground have been jumpered together. This is a code violation that will trip GFCI breakers.</li>
              </ol>
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
                  <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/></svg>
                  Download Free
                </a>
              </div>
            </div>

            <section id="afci-gfci-indicators" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">AFCI vs GFCI Trip Indicators</h2>
              <p className="text-white/80 mb-4">
                Modern <Link href="/blog/gfci-vs-afci-requirements" className="text-cyan-400 underline hover:text-cyan-300">AFCI and GFCI breakers</Link> include diagnostic indicators that help you determine why the breaker tripped. Understanding these indicators saves significant troubleshooting time.
              </p>

              <div className="overflow-x-auto my-6">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-white/20">
                      <th className="text-left py-3 px-4 text-white/60">Breaker Type</th>
                      <th className="text-left py-3 px-4 text-white/60">Trip Indicator</th>
                      <th className="text-left py-3 px-4 text-white/60">What It Means</th>
                    </tr>
                  </thead>
                  <tbody className="text-white/80">
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-bold text-purple-400">AFCI</td>
                      <td className="py-3 px-4">Trip indicator light (LED) ON</td>
                      <td className="py-3 px-4 text-white/60">Tripped due to detected <strong>arc fault</strong> &mdash; check for damaged wiring, loose connections</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-bold text-purple-400">AFCI</td>
                      <td className="py-3 px-4">Trip indicator light OFF</td>
                      <td className="py-3 px-4 text-white/60">Tripped due to <strong>overcurrent</strong> (overload or short) &mdash; not an arc fault</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-bold text-yellow-400">GFCI</td>
                      <td className="py-3 px-4">Trip indicator light ON</td>
                      <td className="py-3 px-4 text-white/60">Tripped due to <strong>ground fault</strong> current (4-6mA leakage detected)</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-bold text-yellow-400">GFCI</td>
                      <td className="py-3 px-4">Trip indicator light OFF</td>
                      <td className="py-3 px-4 text-white/60">Tripped due to <strong>overcurrent</strong> &mdash; not a ground fault</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-bold text-cyan-400">Dual Function (AFCI/GFCI)</td>
                      <td className="py-3 px-4">LED color or blink pattern</td>
                      <td className="py-3 px-4 text-white/60">Manufacturer-specific &mdash; check the label. Typically: one color for arc fault, different color for ground fault</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-bold text-gray-400">Standard Breaker</td>
                      <td className="py-3 px-4">Handle in middle position only</td>
                      <td className="py-3 px-4 text-white/60">No diagnostic indicator &mdash; tripped due to overcurrent (overload or short circuit)</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="bg-purple-900/30 rounded-xl p-6 my-6">
                <h4 className="font-semibold text-purple-400 mb-3">AFCI Breaker Test Button</h4>
                <p className="text-white/70 text-sm mb-2">
                  Every AFCI and GFCI breaker has a <strong>TEST button</strong> that should be pressed monthly to verify the trip mechanism is functioning. When you press TEST, the breaker should trip immediately. If it does not trip when the TEST button is pressed, the breaker is defective and must be replaced. This monthly test is required by the NEC for GFCI devices (210.8) and is recommended for AFCI devices.
                </p>
                <p className="text-white/70 text-sm">
                  <strong>Important:</strong> The TEST button simulates a fault internally within the breaker. It does not test the wiring. A breaker that passes the TEST button check can still experience nuisance tripping due to wiring issues.
                </p>
              </div>
            </section>

            <section id="bad-breaker-signs" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Signs of a Bad Circuit Breaker</h2>
              <p className="text-white/80 mb-4">
                Circuit breakers are mechanical devices with a limited lifespan. While they can last 25-40 years under normal conditions, breakers do fail. A bad breaker may refuse to reset, trip repeatedly without an identifiable circuit fault, or fail to trip when it should (the most dangerous scenario). Here are the key indicators:
              </p>

              <div className="grid md:grid-cols-2 gap-4 my-6">
                <div className="bg-red-900/20 rounded-xl p-6 border border-red-500/20">
                  <h4 className="font-semibold text-red-400 mb-3">Won&apos;t Stay in ON Position</h4>
                  <p className="text-white/60 text-sm">
                    You push the handle to ON and it immediately snaps back to the tripped or OFF position, even with the circuit wire disconnected from the breaker. The internal trip mechanism is worn or broken.
                  </p>
                </div>
                <div className="bg-red-900/20 rounded-xl p-6 border border-red-500/20">
                  <h4 className="font-semibold text-red-400 mb-3">Handle Feels Loose or Floppy</h4>
                  <p className="text-white/60 text-sm">
                    The toggle handle has no firm resistance when flipped, feels spongy, or does not click into position. The internal spring mechanism or toggle linkage has failed.
                  </p>
                </div>
                <div className="bg-red-900/20 rounded-xl p-6 border border-red-500/20">
                  <h4 className="font-semibold text-red-400 mb-3">Burning Smell or Discoloration</h4>
                  <p className="text-white/60 text-sm">
                    The breaker body shows <strong>browning, melting, or charring</strong>. A burnt smell near the breaker indicates arcing at the bus bar connection or internal contact failure. Replace immediately.
                  </p>
                </div>
                <div className="bg-red-900/20 rounded-xl p-6 border border-red-500/20">
                  <h4 className="font-semibold text-red-400 mb-3">Hot to the Touch</h4>
                  <p className="text-white/60 text-sm">
                    Breakers generate some heat under load, but a breaker that is noticeably hotter than adjacent breakers may have high-resistance internal contacts, a loose bus bar connection, or be operating above its rating.
                  </p>
                </div>
                <div className="bg-red-900/20 rounded-xl p-6 border border-red-500/20">
                  <h4 className="font-semibold text-red-400 mb-3">Trips with No Load or Light Load</h4>
                  <p className="text-white/60 text-sm">
                    The breaker trips with the wire disconnected, or trips under a load well below its rating. After verifying the wiring is fault-free, this points to a defective thermal or magnetic trip mechanism inside the breaker.
                  </p>
                </div>
                <div className="bg-red-900/20 rounded-xl p-6 border border-red-500/20">
                  <h4 className="font-semibold text-red-400 mb-3">Visible Damage to Bus Stab</h4>
                  <p className="text-white/60 text-sm">
                    When you remove the breaker, check the bus stab (clip) on the back. If it shows <strong>pitting, arcing marks, or deformation</strong>, the breaker is not making reliable contact with the panel bus bar. Both the breaker and bus bar should be inspected.
                  </p>
                </div>
              </div>

              <div className="bg-white/5 rounded-xl p-6 my-6">
                <h4 className="font-semibold text-cyan-400 mb-3">Breaker Lifespan Factors</h4>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                  <div>
                    <p className="text-2xl font-bold text-green-400">25-40</p>
                    <p className="text-white/60 text-sm">Years typical breaker lifespan under normal use</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-yellow-400">10-15</p>
                    <p className="text-white/60 text-sm">Years in high-trip-frequency applications</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-orange-400">3-5x</p>
                    <p className="text-white/60 text-sm">Faster wear from repeated overload trips</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-red-400">1,000+</p>
                    <p className="text-white/60 text-sm">Mechanical cycles rated for residential breakers</p>
                  </div>
                </div>
              </div>
            </section>

            <section id="replace-vs-repair" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">When to Replace vs Repair</h2>
              <p className="text-white/80 mb-4">
                Circuit breakers are not repairable in the field &mdash; they are sealed units. The decision is really between <strong>replacing the breaker</strong>, <strong>repairing the circuit wiring</strong>, or <strong>upgrading the circuit</strong>. Here is a decision guide:
              </p>

              <div className="space-y-4 my-6">
                <div className="bg-green-900/20 rounded-xl p-6 border border-green-500/20">
                  <h3 className="font-semibold text-green-400 mb-2">Replace the Breaker When:</h3>
                  <ul className="text-white/70 text-sm space-y-1">
                    <li>The breaker trips with wire disconnected (confirmed bad breaker)</li>
                    <li>Handle is loose, floppy, or won&apos;t click into position</li>
                    <li>Visible burn marks or melting on the breaker body</li>
                    <li>AFCI/GFCI breaker fails its TEST button check</li>
                    <li>Breaker is more than 25 years old and tripping frequently</li>
                    <li>Bus stab shows pitting or poor contact</li>
                  </ul>
                </div>

                <div className="bg-cyan-900/20 rounded-xl p-6 border border-cyan-500/20">
                  <h3 className="font-semibold text-cyan-400 mb-2">Repair the Wiring When:</h3>
                  <ul className="text-white/70 text-sm space-y-1">
                    <li>Multimeter confirms a short or ground fault on the circuit</li>
                    <li>Visual inspection reveals damaged insulation, burned connections, or water damage</li>
                    <li>A specific device or appliance is causing the trip (replace the device)</li>
                    <li>Loose connections at outlets, switches, or junction boxes</li>
                    <li>Rodent or pest damage to cable insulation</li>
                  </ul>
                </div>

                <div className="bg-purple-900/20 rounded-xl p-6 border border-purple-500/20">
                  <h3 className="font-semibold text-purple-400 mb-2">Upgrade the Circuit When:</h3>
                  <ul className="text-white/70 text-sm space-y-1">
                    <li>Chronic overloading with no single faulty device &mdash; the circuit needs to be split</li>
                    <li>High-draw appliance requires a dedicated circuit (microwave, window AC, space heater)</li>
                    <li>Older 15A circuit needs a 20A upgrade (requires 12 AWG wire throughout)</li>
                    <li>NEC code changes require AFCI or GFCI protection where it was not previously required</li>
                    <li>Panel is full and additional circuits are needed (consider a <Link href="/blog/electrical-panel-troubleshooting" className="text-purple-400 underline hover:text-purple-300">panel upgrade</Link>)</li>
                  </ul>
                </div>
              </div>

              <div className="bg-red-900/30 rounded-xl p-6 my-6">
                <h4 className="font-semibold text-red-400 mb-3">Never Upsize a Breaker Without Upsizing the Wire</h4>
                <p className="text-white/70 text-sm">
                  If a 15A breaker keeps tripping, <strong>never replace it with a 20A breaker</strong> unless the circuit wiring is 12 AWG or larger throughout its entire run. A 20A breaker on 14 AWG wire allows the wire to carry more current than it is rated for, causing the insulation to overheat. This is one of the most common causes of electrical fires and a serious NEC violation (NEC 240.4).
                </p>
              </div>
            </section>

            <section id="safety-precautions" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Safety Precautions</h2>
              <p className="text-white/80 mb-4">
                Working around an electrical panel involves exposure to lethal voltages. Even when a branch circuit breaker is off, the <strong>main breaker, main lugs, and bus bars remain energized</strong> at full service voltage (typically 120/240V residential). Follow these safety rules at all times:
              </p>

              <div className="grid md:grid-cols-2 gap-4 my-6">
                <div className="bg-white/5 rounded-xl p-4">
                  <p className="font-semibold text-yellow-400 mb-1">Stand on Dry Ground</p>
                  <p className="text-white/60 text-sm">Never stand in water or on a wet floor when working at an electrical panel. Use a rubber mat if the floor is damp (common in basements and garages).</p>
                </div>
                <div className="bg-white/5 rounded-xl p-4">
                  <p className="font-semibold text-yellow-400 mb-1">Use One Hand When Possible</p>
                  <p className="text-white/60 text-sm">When flipping breakers, use one hand only and keep the other hand at your side or behind your back. This prevents current from flowing hand-to-hand across the heart.</p>
                </div>
                <div className="bg-white/5 rounded-xl p-4">
                  <p className="font-semibold text-yellow-400 mb-1">Wear Safety Glasses</p>
                  <p className="text-white/60 text-sm">If a breaker trips due to a short circuit, there can be a brief arc flash. Safety glasses protect your eyes. This is especially important when resetting a breaker that has tripped multiple times.</p>
                </div>
                <div className="bg-white/5 rounded-xl p-4">
                  <p className="font-semibold text-yellow-400 mb-1">Use Insulated Tools</p>
                  <p className="text-white/60 text-sm">If you must use a screwdriver or other tool at the panel, use tools with insulated handles rated for electrical work. A standard screwdriver can slip and contact a live bus bar.</p>
                </div>
                <div className="bg-white/5 rounded-xl p-4">
                  <p className="font-semibold text-yellow-400 mb-1">Never Remove the Panel Cover</p>
                  <p className="text-white/60 text-sm">The dead front cover (inner panel cover) exposes bus bars and main lug connections. Removing it should only be done by a qualified electrician. The outer door can be opened to access breaker handles.</p>
                </div>
                <div className="bg-white/5 rounded-xl p-4">
                  <p className="font-semibold text-yellow-400 mb-1">Use a Flashlight</p>
                  <p className="text-white/60 text-sm">Panels are often in poorly lit areas. A headlamp or flashlight ensures you can clearly identify which breaker has tripped and read all labels before flipping anything.</p>
                </div>
              </div>

              <div className="bg-orange-900/30 rounded-xl p-6 my-6">
                <h4 className="font-semibold text-orange-400 mb-3">Verify De-Energized Before Touching Wires</h4>
                <p className="text-white/70 text-sm">
                  Before disconnecting any wire from a breaker terminal, use a <strong>non-contact voltage tester (NCVT)</strong> to confirm the wire is not energized. Test the tester on a known-live circuit first to verify it is working. Then test the target wire. Even after turning off a breaker, verify with a meter &mdash; breakers can fail in the closed position, or the wrong breaker may be labeled for that circuit.
                </p>
              </div>
            </section>

            <section id="when-to-call" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">When to Call an Electrician</h2>
              <p className="text-white/80 mb-4">
                While resetting a tripped breaker is a simple task any homeowner can do, diagnosing and repairing the underlying cause often requires a licensed electrician. Call a professional in these situations:
              </p>

              <div className="space-y-3 my-6">
                <div className="bg-red-900/20 rounded-xl p-4 border border-red-500/20 flex items-start gap-3">
                  <span className="text-red-400 text-lg mt-0.5">&#9888;</span>
                  <div>
                    <p className="font-semibold text-white">Burning smell or visible scorching</p>
                    <p className="text-white/60 text-sm">Any sign of burning at the panel, outlets, or switches indicates arcing or overheating that can lead to fire. Do not reset the breaker &mdash; call immediately.</p>
                  </div>
                </div>
                <div className="bg-red-900/20 rounded-xl p-4 border border-red-500/20 flex items-start gap-3">
                  <span className="text-red-400 text-lg mt-0.5">&#9888;</span>
                  <div>
                    <p className="font-semibold text-white">Breaker trips instantly with nothing plugged in</p>
                    <p className="text-white/60 text-sm">This indicates a wiring fault (short or ground fault) in the building wiring that requires opening walls, junction boxes, or the panel to locate and repair.</p>
                  </div>
                </div>
                <div className="bg-red-900/20 rounded-xl p-4 border border-red-500/20 flex items-start gap-3">
                  <span className="text-red-400 text-lg mt-0.5">&#9888;</span>
                  <div>
                    <p className="font-semibold text-white">Main breaker trips</p>
                    <p className="text-white/60 text-sm">If the main breaker trips, the entire service may be overloaded, or there is a fault in the main panel. This involves working around the service entrance conductors which are always live.</p>
                  </div>
                </div>
                <div className="bg-red-900/20 rounded-xl p-4 border border-red-500/20 flex items-start gap-3">
                  <span className="text-red-400 text-lg mt-0.5">&#9888;</span>
                  <div>
                    <p className="font-semibold text-white">Multiple breakers tripping simultaneously</p>
                    <p className="text-white/60 text-sm">Several circuits tripping at once can indicate a neutral failure, loose bus bar connection, or service-level problem that requires professional diagnosis.</p>
                  </div>
                </div>
                <div className="bg-red-900/20 rounded-xl p-4 border border-red-500/20 flex items-start gap-3">
                  <span className="text-red-400 text-lg mt-0.5">&#9888;</span>
                  <div>
                    <p className="font-semibold text-white">Water damage or flooding near the panel</p>
                    <p className="text-white/60 text-sm">Water and electricity are a lethal combination. If the panel or any part of the electrical system has been exposed to water, do not touch anything &mdash; call an electrician and potentially the utility company.</p>
                  </div>
                </div>
                <div className="bg-red-900/20 rounded-xl p-4 border border-red-500/20 flex items-start gap-3">
                  <span className="text-red-400 text-lg mt-0.5">&#9888;</span>
                  <div>
                    <p className="font-semibold text-white">Panel is a recalled brand (Federal Pacific, Zinsco)</p>
                    <p className="text-white/60 text-sm">If your panel is a <strong>Federal Pacific Electric (FPE) Stab-Lok</strong> or <strong>Zinsco/GTE-Sylvania</strong>, the breakers are known to fail to trip under fault conditions. Consider a full panel replacement regardless of the immediate issue.</p>
                  </div>
                </div>
                <div className="bg-red-900/20 rounded-xl p-4 border border-red-500/20 flex items-start gap-3">
                  <span className="text-red-400 text-lg mt-0.5">&#9888;</span>
                  <div>
                    <p className="font-semibold text-white">You are not comfortable or qualified</p>
                    <p className="text-white/60 text-sm">If at any point you feel uncertain about what you are doing, stop. Electrical work can be fatal. A licensed electrician has the training, tools, and experience to diagnose the problem safely.</p>
                  </div>
                </div>
              </div>
            </section>

            <section id="faq" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Frequently Asked Questions</h2>

              <div className="space-y-6 my-6">
                <div className="bg-white/5 rounded-xl p-6">
                  <h3 className="font-semibold text-white mb-2">Why does my breaker trip when I turn it ON but stays OFF fine?</h3>
                  <p className="text-white/70 text-sm">
                    When you turn a breaker ON, you&apos;re energizing the circuit. If there is a <strong>short circuit or ground fault</strong> on the wiring, current surges through the fault the instant the breaker closes, tripping it immediately. The breaker stays in the OFF position fine because no current flows when it&apos;s off. The fault is in the wiring or a connected device, not the breaker itself (usually).
                  </p>
                </div>

                <div className="bg-white/5 rounded-xl p-6">
                  <h3 className="font-semibold text-white mb-2">Can a breaker go bad without tripping?</h3>
                  <p className="text-white/70 text-sm">
                    Yes, and this is the most dangerous failure mode. A breaker can <strong>fail in the closed (ON) position</strong>, meaning it will not trip even during an overcurrent or short circuit. This allows wires to overheat and can cause fires. If you suspect a breaker is not tripping when it should (e.g., a circuit drawing well over its rated amperage without tripping), have it tested or replaced immediately. This is a known issue with Federal Pacific Stab-Lok breakers.
                  </p>
                </div>

                <div className="bg-white/5 rounded-xl p-6">
                  <h3 className="font-semibold text-white mb-2">Is it safe to keep resetting a breaker that keeps tripping?</h3>
                  <p className="text-white/70 text-sm">
                    <strong>No.</strong> Each time a breaker trips and is reset under fault conditions, it can arc internally, causing progressive damage. Repeatedly resetting a breaker that trips immediately can cause the breaker to fail, the bus bar connection to overheat, or in worst cases, an arc flash or fire inside the panel. Reset once. If it trips again, diagnose the problem before resetting again.
                  </p>
                </div>

                <div className="bg-white/5 rounded-xl p-6">
                  <h3 className="font-semibold text-white mb-2">My AFCI breaker trips when I plug in a vacuum or hair dryer. Is it defective?</h3>
                  <p className="text-white/70 text-sm">
                    Not necessarily. Motor-driven appliances like vacuums and some hair dryers with brushed motors produce electrical noise that AFCI breakers can interpret as an arc signature. This is called <strong>nuisance tripping</strong>. Try a different appliance on the same circuit &mdash; if only specific devices cause the trip, the issue is compatibility. Modern AFCI breakers (manufactured after 2017) have improved algorithms to reduce false trips. Upgrading to a newer AFCI breaker model may resolve the issue.
                  </p>
                </div>

                <div className="bg-white/5 rounded-xl p-6">
                  <h3 className="font-semibold text-white mb-2">Can I use a different brand of breaker in my panel?</h3>
                  <p className="text-white/70 text-sm">
                    <strong>Generally, no.</strong> NEC 110.3(B) requires equipment to be used in accordance with its listing. Most panels are listed and labeled for use with only the manufacturer&apos;s breakers (or specifically classified compatible breakers). Installing a non-listed breaker can result in poor bus bar contact, overheating, failure to trip, and voids the panel&apos;s UL listing. Always use the correct breaker type specified on the panel label.
                  </p>
                </div>

                <div className="bg-white/5 rounded-xl p-6">
                  <h3 className="font-semibold text-white mb-2">How do I know if my circuit is overloaded vs having a short circuit?</h3>
                  <p className="text-white/70 text-sm">
                    <strong>Timing is the key indicator.</strong> An overloaded circuit trips after running for <strong>minutes to hours</strong> &mdash; the thermal mechanism needs time to heat up. A short circuit trips <strong>instantly</strong> (within milliseconds) the moment the breaker is turned on, often with a spark or pop. If your breaker runs fine for a while then trips, start by reducing the load. If it trips the instant you flip it on, look for a short circuit or ground fault.
                  </p>
                </div>

                <div className="bg-white/5 rounded-xl p-6">
                  <h3 className="font-semibold text-white mb-2">The breaker handle is stuck and won&apos;t move at all. What do I do?</h3>
                  <p className="text-white/70 text-sm">
                    A breaker handle that is physically stuck (won&apos;t move in either direction) may have a <strong>seized mechanism</strong> due to corrosion, overheating damage, or internal component failure. Do not force it with pliers or tools &mdash; this can break the breaker or damage the bus bar. The breaker needs to be replaced. If you cannot move it to the OFF position, you may need to turn off the main breaker first, then have an electrician remove and replace the stuck breaker.
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
                <Link href="/blog/electrical-panel-troubleshooting" className="bg-white/5 hover:bg-white/10 rounded-xl p-6 transition-colors">
                  <span className="text-cyan-400 text-sm">Troubleshooting</span>
                  <h3 className="font-semibold mt-2">Electrical Panel Troubleshooting Guide</h3>
                </Link>
                <Link href="/blog/afci-breaker-nuisance-tripping" className="bg-white/5 hover:bg-white/10 rounded-xl p-6 transition-colors">
                  <span className="text-red-400 text-sm">Troubleshooting</span>
                  <h3 className="font-semibold mt-2">AFCI Breaker Nuisance Tripping: Causes &amp; Solutions</h3>
                </Link>
                <Link href="/blog/gfci-vs-afci-requirements" className="bg-white/5 hover:bg-white/10 rounded-xl p-6 transition-colors">
                  <span className="text-purple-400 text-sm">NEC Code</span>
                  <h3 className="font-semibold mt-2">GFCI vs AFCI: Protection Requirements Guide</h3>
                </Link>
                <Link href="/blog/electrical-troubleshooting-methodology" className="bg-white/5 hover:bg-white/10 rounded-xl p-6 transition-colors">
                  <span className="text-cyan-400 text-sm">Troubleshooting</span>
                  <h3 className="font-semibold mt-2">Electrical Troubleshooting Methodology</h3>
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
