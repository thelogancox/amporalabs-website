import { Metadata } from "next";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import { BreadcrumbJsonLd, BlogPostingJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Electrical Apprenticeship Guide: How to Become a Licensed Electrician",
  description: "Complete guide to becoming a licensed electrician. Learn about apprenticeship programs, IBEW union vs non-union paths, pay progression, licensing requirements, and electrical specializations.",
  keywords: [
    "electrical apprenticeship",
    "how to become an electrician",
    "electrician career guide",
    "IBEW apprenticeship",
    "electrician pay scale",
    "journeyman electrician",
    "master electrician license",
    "electrician training program",
    "union electrician",
    "non-union electrician",
    "electrical trade career",
    "electrician salary progression",
    "electrician specializations",
    "apprenticeship requirements",
    "electrical license exam",
    "electrician career path"
  ],
  alternates: {
    canonical: "https://amporalabs.com/blog/electrical-apprenticeship-career-guide",
  },
  openGraph: {
    title: "Electrical Apprenticeship Guide: How to Become a Licensed Electrician - Ampora",
    description: "Complete guide to apprenticeship programs, licensing, pay progression, and career paths in the electrical trade.",
    url: "https://amporalabs.com/blog/electrical-apprenticeship-career-guide",
    type: "article",
  },
};

function HeroIllustration() {
  return (
    <svg viewBox="0 0 400 160" className="w-full h-40 md:h-48" aria-label="Electrical apprenticeship career progression illustration">
      {/* Career ladder */}
      <g transform="translate(50, 10)">
        {/* Steps */}
        <rect x="0" y="110" width="80" height="35" rx="4" fill="#374151" stroke="#06b6d4" strokeWidth="2"/>
        <text x="40" y="130" textAnchor="middle" fill="#06b6d4" fontSize="8" fontWeight="bold">Apprentice</text>

        <rect x="100" y="75" width="80" height="35" rx="4" fill="#374151" stroke="#22c55e" strokeWidth="2"/>
        <text x="140" y="95" textAnchor="middle" fill="#22c55e" fontSize="8" fontWeight="bold">Journeyman</text>

        <rect x="200" y="40" width="80" height="35" rx="4" fill="#374151" stroke="#a855f7" strokeWidth="2"/>
        <text x="240" y="60" textAnchor="middle" fill="#a855f7" fontSize="8" fontWeight="bold">Master</text>

        {/* Arrows */}
        <path d="M 80 120 L 100 100" stroke="#9ca3af" strokeWidth="2" fill="none" markerEnd="url(#arrowhead)"/>
        <path d="M 180 85 L 200 65" stroke="#9ca3af" strokeWidth="2" fill="none" markerEnd="url(#arrowhead)"/>

        {/* Year labels */}
        <text x="40" y="152" textAnchor="middle" fill="#9ca3af" fontSize="7">4-5 years</text>
        <text x="140" y="117" textAnchor="middle" fill="#9ca3af" fontSize="7">2-4 years</text>
        <text x="240" y="82" textAnchor="middle" fill="#9ca3af" fontSize="7">License</text>
      </g>

      {/* Pay indicator */}
      <g transform="translate(310, 20)">
        <rect x="0" y="0" width="80" height="120" rx="6" fill="#22c55e" fillOpacity="0.1" stroke="#22c55e" strokeDasharray="4"/>
        <text x="40" y="20" textAnchor="middle" fill="#22c55e" fontSize="8" fontWeight="bold">Avg Pay</text>
        <text x="40" y="42" textAnchor="middle" fill="#9ca3af" fontSize="7">Apprentice</text>
        <text x="40" y="55" textAnchor="middle" fill="#06b6d4" fontSize="9">$18-25/hr</text>
        <text x="40" y="72" textAnchor="middle" fill="#9ca3af" fontSize="7">Journeyman</text>
        <text x="40" y="85" textAnchor="middle" fill="#22c55e" fontSize="9">$28-45/hr</text>
        <text x="40" y="102" textAnchor="middle" fill="#9ca3af" fontSize="7">Master</text>
        <text x="40" y="115" textAnchor="middle" fill="#a855f7" fontSize="9">$40-65/hr</text>
      </g>

      <defs>
        <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="10" refY="3.5" orient="auto">
          <polygon points="0 0, 10 3.5, 0 7" fill="#9ca3af"/>
        </marker>
      </defs>
    </svg>
  );
}

export default function ElectricalApprenticeshipCareerGuidePage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navigation />
      <div className="pt-20">
        <BreadcrumbJsonLd
          items={[
            { name: "Home", url: "https://amporalabs.com" },
            { name: "Blog", url: "https://amporalabs.com/blog" },
            { name: "Electrical Apprenticeship Career Guide", url: "https://amporalabs.com/blog/electrical-apprenticeship-career-guide" },
          ]}
        />
        <BlogPostingJsonLd
          headline="Electrical Apprenticeship Guide: How to Become a Licensed Electrician"
          description="Complete guide to becoming a licensed electrician covering apprenticeships, licensing, pay, and specializations."
          datePublished="2025-02-08"
          dateModified="2025-02-08"
          url="https://amporalabs.com/blog/electrical-apprenticeship-career-guide"
          wordCount={3000}
          keywords={["electrical apprenticeship", "electrician career", "journeyman electrician", "master electrician", "IBEW"]}
        />

        <article className="max-w-4xl mx-auto px-6 py-12">
          {/* Breadcrumb */}
          <nav className="text-sm text-white/60 mb-8">
            <Link href="/" className="hover:text-white">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/blog" className="hover:text-white">Blog</Link>
            <span className="mx-2">/</span>
            <span className="text-white">Electrical Apprenticeship Career Guide</span>
          </nav>

          {/* Article Header */}
          <header className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <span className="px-3 py-1 bg-cyan-600/30 text-cyan-300 text-sm font-medium rounded-full">
                Technology
              </span>
              <span className="text-white/40 text-sm">12 min read</span>
              <span className="text-white/40 text-sm">February 8, 2025</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6 leading-tight">
              Electrical Apprenticeship Guide: How to Become a Licensed Electrician
            </h1>
            <p className="text-xl text-white/70">
              A step-by-step guide to entering the electrical trade, from choosing an apprenticeship program to earning your master electrician license and building a rewarding career.
            </p>
          </header>

          <div className="mb-12 bg-gradient-to-br from-cyan-900/20 to-purple-900/20 rounded-2xl p-6 border border-white/10">
            <HeroIllustration />
          </div>

          {/* Table of Contents */}
          <div className="bg-white/5 rounded-2xl p-6 mb-12">
            <h2 className="font-display font-bold mb-4">In This Guide</h2>
            <ul className="space-y-2 text-white/70">
              <li><a href="#career-overview" className="hover:text-purple-400">&#8594; Electrician Career Overview</a></li>
              <li><a href="#apprentice-vs-journeyman-vs-master" className="hover:text-purple-400">&#8594; Apprentice vs Journeyman vs Master</a></li>
              <li><a href="#union-vs-nonunion" className="hover:text-purple-400">&#8594; IBEW Union vs Non-Union Paths</a></li>
              <li><a href="#apprenticeship-programs" className="hover:text-purple-400">&#8594; Finding &amp; Applying to Apprenticeship Programs</a></li>
              <li><a href="#pay-progression" className="hover:text-purple-400">&#8594; Pay Progression &amp; Benefits</a></li>
              <li><a href="#licensing" className="hover:text-purple-400">&#8594; Licensing Requirements by Level</a></li>
              <li><a href="#specializations" className="hover:text-purple-400">&#8594; Electrical Specializations</a></li>
              <li><a href="#tools-technology" className="hover:text-purple-400">&#8594; Modern Tools &amp; Technology</a></li>
            </ul>
          </div>

          {/* Article Content */}
          <div className="prose prose-invert prose-lg max-w-none">

            <section id="career-overview" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Electrician Career Overview</h2>
              <p className="text-white/80 mb-4">
                The electrical trade is one of the most in-demand skilled professions in the United States. The Bureau of Labor Statistics projects a 6% growth in electrician jobs through 2032, with approximately 80,000 new positions opening each year due to retirements and industry expansion.
              </p>
              <p className="text-white/80 mb-4">
                Unlike many careers requiring expensive college degrees, becoming an electrician follows a <strong>structured apprenticeship model</strong> where you earn while you learn. Most apprentices start earning a paycheck from day one while gaining the hands-on experience and classroom education needed for licensure.
              </p>
              <div className="bg-cyan-900/30 rounded-xl p-6 my-6">
                <h3 className="font-semibold text-cyan-400 mb-3">Why Choose the Electrical Trade?</h3>
                <ul className="space-y-2 text-white/70 text-sm">
                  <li className="flex items-start gap-2"><span className="text-cyan-400">&#x2022;</span><span>No student loan debt &mdash; you earn while you learn</span></li>
                  <li className="flex items-start gap-2"><span className="text-cyan-400">&#x2022;</span><span>Strong job security with growing demand</span></li>
                  <li className="flex items-start gap-2"><span className="text-cyan-400">&#x2022;</span><span>Median annual salary of $60,240 (BLS 2023), with top earners exceeding $100,000</span></li>
                  <li className="flex items-start gap-2"><span className="text-cyan-400">&#x2022;</span><span>Multiple career paths: residential, commercial, industrial, specialty</span></li>
                  <li className="flex items-start gap-2"><span className="text-cyan-400">&#x2022;</span><span>Opportunity to own your own business</span></li>
                </ul>
              </div>
            </section>

            <section id="apprentice-vs-journeyman-vs-master" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Apprentice vs Journeyman vs Master Electrician</h2>
              <p className="text-white/80 mb-4">
                The electrical trade has a clear, well-defined career ladder. Each level builds on the previous one and comes with increased responsibilities, independence, and earning potential.
              </p>

              <div className="overflow-x-auto my-6">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-white/20">
                      <th className="text-left py-3 px-4 text-white/60">Criteria</th>
                      <th className="text-left py-3 px-4 text-white/60">Apprentice</th>
                      <th className="text-left py-3 px-4 text-white/60">Journeyman</th>
                      <th className="text-left py-3 px-4 text-white/60">Master</th>
                    </tr>
                  </thead>
                  <tbody className="text-white/70">
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-semibold">Duration</td>
                      <td className="py-3 px-4">4-5 years</td>
                      <td className="py-3 px-4">2-4 years experience</td>
                      <td className="py-3 px-4">Varies by state</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-semibold">OJT Hours</td>
                      <td className="py-3 px-4">8,000-10,000</td>
                      <td className="py-3 px-4">N/A (already completed)</td>
                      <td className="py-3 px-4">2,000-4,000 additional</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-semibold">Classroom Hours</td>
                      <td className="py-3 px-4">576-1,000</td>
                      <td className="py-3 px-4">Continuing education</td>
                      <td className="py-3 px-4">Continuing education</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-semibold">Can Work Independently?</td>
                      <td className="py-3 px-4">No &mdash; must have supervision</td>
                      <td className="py-3 px-4">Yes</td>
                      <td className="py-3 px-4">Yes + can supervise</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-semibold">Can Pull Permits?</td>
                      <td className="py-3 px-4">No</td>
                      <td className="py-3 px-4">Varies by state</td>
                      <td className="py-3 px-4">Yes</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-semibold">Avg Hourly Pay</td>
                      <td className="py-3 px-4">$18-25/hr</td>
                      <td className="py-3 px-4">$28-45/hr</td>
                      <td className="py-3 px-4">$40-65/hr</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-semibold">Can Own Business?</td>
                      <td className="py-3 px-4">No</td>
                      <td className="py-3 px-4">Some states</td>
                      <td className="py-3 px-4">Yes (most states)</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="bg-green-900/30 rounded-xl p-6 my-6">
                <h3 className="font-semibold text-green-400 mb-3">Apprentice Stage: Building Your Foundation</h3>
                <p className="text-white/70 text-sm mb-3">
                  As an apprentice, you work under the direct supervision of a journeyman or master electrician. Your time is split between on-the-job training (OJT) and classroom instruction. Most programs require:
                </p>
                <ul className="space-y-1 text-white/70 text-sm">
                  <li>&#x2022; 8,000 hours of supervised on-the-job training (approximately 4 years)</li>
                  <li>&#x2022; 576+ hours of related classroom instruction</li>
                  <li>&#x2022; Progressive skill development across all phases of electrical work</li>
                  <li>&#x2022; Pay increases at set intervals (typically every 6 months or 1,000 hours)</li>
                </ul>
              </div>

              <div className="bg-purple-900/30 rounded-xl p-6 my-6">
                <h3 className="font-semibold text-purple-400 mb-3">Journeyman Stage: Independent Work</h3>
                <p className="text-white/70 text-sm mb-3">
                  After completing your apprenticeship and passing the journeyman exam, you can work independently without direct supervision. Journeyman electricians can:
                </p>
                <ul className="space-y-1 text-white/70 text-sm">
                  <li>&#x2022; Perform all electrical work independently</li>
                  <li>&#x2022; Supervise apprentices</li>
                  <li>&#x2022; Specialize in specific areas of the trade</li>
                  <li>&#x2022; Begin accumulating hours toward a master license</li>
                </ul>
              </div>
            </section>

            <section id="union-vs-nonunion" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">IBEW Union vs Non-Union Paths</h2>
              <p className="text-white/80 mb-4">
                One of the biggest decisions new electricians face is whether to pursue a union or non-union career. Both paths lead to the same licenses, but the experience differs significantly.
              </p>

              <div className="grid md:grid-cols-2 gap-6 my-6">
                <div className="bg-cyan-900/30 rounded-xl p-6">
                  <h3 className="font-semibold text-cyan-400 mb-3">IBEW Union Apprenticeship</h3>
                  <p className="text-white/70 text-sm mb-3">
                    The International Brotherhood of Electrical Workers (IBEW) and the National Electrical Contractors Association (NECA) jointly sponsor apprenticeship programs through local Joint Apprenticeship Training Committees (JATCs).
                  </p>
                  <ul className="space-y-2 text-white/70 text-sm">
                    <li className="flex items-start gap-2"><span className="text-green-400">+</span><span>Structured 5-year program with excellent training</span></li>
                    <li className="flex items-start gap-2"><span className="text-green-400">+</span><span>Higher average wages and comprehensive benefits</span></li>
                    <li className="flex items-start gap-2"><span className="text-green-400">+</span><span>Pension and annuity contributions</span></li>
                    <li className="flex items-start gap-2"><span className="text-green-400">+</span><span>Health insurance from day one in many locals</span></li>
                    <li className="flex items-start gap-2"><span className="text-red-400">-</span><span>Competitive entry &mdash; aptitude test and interview required</span></li>
                    <li className="flex items-start gap-2"><span className="text-red-400">-</span><span>May have geographic or travel requirements</span></li>
                    <li className="flex items-start gap-2"><span className="text-red-400">-</span><span>Union dues and assessments</span></li>
                  </ul>
                </div>
                <div className="bg-orange-900/30 rounded-xl p-6">
                  <h3 className="font-semibold text-orange-400 mb-3">Non-Union (Open Shop) Path</h3>
                  <p className="text-white/70 text-sm mb-3">
                    Non-union apprenticeships are offered through the Associated Builders and Contractors (ABC), Independent Electrical Contractors (IEC), or individual employers.
                  </p>
                  <ul className="space-y-2 text-white/70 text-sm">
                    <li className="flex items-start gap-2"><span className="text-green-400">+</span><span>Easier entry &mdash; often just need to find an employer</span></li>
                    <li className="flex items-start gap-2"><span className="text-green-400">+</span><span>More flexibility in work location</span></li>
                    <li className="flex items-start gap-2"><span className="text-green-400">+</span><span>May advance faster based on individual merit</span></li>
                    <li className="flex items-start gap-2"><span className="text-green-400">+</span><span>No union dues</span></li>
                    <li className="flex items-start gap-2"><span className="text-red-400">-</span><span>Training quality varies by employer</span></li>
                    <li className="flex items-start gap-2"><span className="text-red-400">-</span><span>Lower average wages in most markets</span></li>
                    <li className="flex items-start gap-2"><span className="text-red-400">-</span><span>Benefits depend on employer</span></li>
                  </ul>
                </div>
              </div>

              <div className="bg-white/5 rounded-xl p-6 my-6">
                <h3 className="font-semibold text-white mb-3">IBEW Application Process</h3>
                <p className="text-white/70 text-sm mb-3">
                  Applying to an IBEW JATC typically involves these steps:
                </p>
                <ol className="space-y-2 text-white/70 text-sm list-decimal list-inside">
                  <li>Contact your local JATC (find yours at <strong>electriciantraining.org</strong>)</li>
                  <li>Submit application during open enrollment period</li>
                  <li>Take the aptitude test (math and reading comprehension)</li>
                  <li>Complete an oral interview with the committee</li>
                  <li>Provide transcripts, driver&apos;s license, and proof of age (18+)</li>
                  <li>Drug test and physical examination</li>
                  <li>Ranking and selection based on combined scores</li>
                </ol>
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

            <section id="apprenticeship-programs" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Finding &amp; Applying to Apprenticeship Programs</h2>
              <p className="text-white/80 mb-4">
                There are several paths into a formal apprenticeship program. The right choice depends on your location, financial situation, and career goals.
              </p>

              <div className="space-y-4 my-6">
                <div className="bg-white/5 rounded-xl p-6">
                  <h3 className="font-semibold text-white mb-2">JATC Programs (IBEW/NECA)</h3>
                  <p className="text-white/70 text-sm">
                    The gold standard of electrical apprenticeships. Five-year programs with structured classroom and on-the-job training. Tuition is typically paid by the program. Apply through your local JATC &mdash; most accept applications once or twice per year.
                  </p>
                </div>
                <div className="bg-white/5 rounded-xl p-6">
                  <h3 className="font-semibold text-white mb-2">ABC Apprenticeships</h3>
                  <p className="text-white/70 text-sm">
                    Associated Builders and Contractors offer apprenticeships through local chapters. Four-year programs combining classroom instruction with employer-sponsored on-the-job training. More accessible entry than JATC in many areas.
                  </p>
                </div>
                <div className="bg-white/5 rounded-xl p-6">
                  <h3 className="font-semibold text-white mb-2">IEC Programs</h3>
                  <p className="text-white/70 text-sm">
                    Independent Electrical Contractors offer four-year apprenticeship programs. IEC apprentices work for IEC member contractors and attend classes at IEC training centers. Programs are federally registered and meet Department of Labor standards.
                  </p>
                </div>
                <div className="bg-white/5 rounded-xl p-6">
                  <h3 className="font-semibold text-white mb-2">Community College &amp; Trade School</h3>
                  <p className="text-white/70 text-sm">
                    Many community colleges offer electrical technology programs that can count toward apprenticeship classroom hours. Some states allow trade school graduates to reduce their apprenticeship duration. This can be a good option if you want to start learning before securing a sponsor.
                  </p>
                </div>
              </div>

              <div className="bg-cyan-900/30 rounded-xl p-6 my-6">
                <h3 className="font-semibold text-cyan-400 mb-3">Prerequisites for Most Apprenticeships</h3>
                <ul className="space-y-2 text-white/70 text-sm">
                  <li>&#x2022; High school diploma or GED</li>
                  <li>&#x2022; At least 18 years old (some accept 17 with restrictions)</li>
                  <li>&#x2022; One year of high school algebra with a passing grade</li>
                  <li>&#x2022; Valid driver&apos;s license and reliable transportation</li>
                  <li>&#x2022; Physically able to perform the work (climbing, lifting, standing)</li>
                  <li>&#x2022; Pass drug screening</li>
                  <li>&#x2022; Legal right to work in the United States</li>
                </ul>
              </div>
            </section>

            <section id="pay-progression" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Pay Progression &amp; Benefits</h2>
              <p className="text-white/80 mb-4">
                One of the greatest advantages of an electrical apprenticeship is the structured pay progression. You start earning a percentage of the journeyman rate and receive regular raises throughout your training.
              </p>

              <div className="overflow-x-auto my-6">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-white/20">
                      <th className="text-left py-3 px-4 text-white/60">Period</th>
                      <th className="text-left py-3 px-4 text-white/60">% of Journeyman Rate</th>
                      <th className="text-left py-3 px-4 text-white/60">Approx. Hourly (Union)</th>
                      <th className="text-left py-3 px-4 text-white/60">Approx. Hourly (Non-Union)</th>
                    </tr>
                  </thead>
                  <tbody className="text-white/70">
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">1st Period (0-1,000 hrs)</td>
                      <td className="py-3 px-4">40-50%</td>
                      <td className="py-3 px-4">$18-22/hr</td>
                      <td className="py-3 px-4">$14-18/hr</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">2nd Period (1,000-2,000 hrs)</td>
                      <td className="py-3 px-4">50-55%</td>
                      <td className="py-3 px-4">$20-24/hr</td>
                      <td className="py-3 px-4">$16-20/hr</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">3rd Period (2,000-4,000 hrs)</td>
                      <td className="py-3 px-4">55-65%</td>
                      <td className="py-3 px-4">$24-28/hr</td>
                      <td className="py-3 px-4">$18-24/hr</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">4th Period (4,000-6,000 hrs)</td>
                      <td className="py-3 px-4">65-75%</td>
                      <td className="py-3 px-4">$28-34/hr</td>
                      <td className="py-3 px-4">$22-28/hr</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">5th Period (6,000-8,000 hrs)</td>
                      <td className="py-3 px-4">75-85%</td>
                      <td className="py-3 px-4">$32-38/hr</td>
                      <td className="py-3 px-4">$26-32/hr</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-semibold">Journeyman (topped out)</td>
                      <td className="py-3 px-4 font-semibold">100%</td>
                      <td className="py-3 px-4 font-semibold">$40-55/hr</td>
                      <td className="py-3 px-4 font-semibold">$28-40/hr</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="text-white/60 text-sm italic mb-4">
                Note: Rates vary significantly by region. Major metro areas and states with strong prevailing wage laws tend to offer higher compensation. Union rates include benefits package value.
              </p>

              <div className="bg-green-900/30 rounded-xl p-6 my-6">
                <h3 className="font-semibold text-green-400 mb-3">Total Compensation: Beyond Hourly Rate</h3>
                <p className="text-white/70 text-sm mb-3">
                  Especially in union shops, the total compensation package can be 30-50% higher than the hourly wage alone. A journeyman making $45/hr on the check may have a total package worth $65-70/hr when you include:
                </p>
                <ul className="space-y-1 text-white/70 text-sm">
                  <li>&#x2022; Health insurance (medical, dental, vision)</li>
                  <li>&#x2022; Pension contributions</li>
                  <li>&#x2022; Annuity/401(k) contributions</li>
                  <li>&#x2022; Paid vacation and holidays</li>
                  <li>&#x2022; Continuing education and training</li>
                </ul>
              </div>
            </section>

            <section id="licensing" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Licensing Requirements by Level</h2>
              <p className="text-white/80 mb-4">
                Licensing requirements vary by state, but most follow a similar framework. Here&apos;s what to expect at each level:
              </p>

              <div className="space-y-6 my-6">
                <div className="bg-white/5 rounded-xl p-6">
                  <h3 className="font-semibold text-cyan-400 mb-2">Journeyman License Exam</h3>
                  <p className="text-white/70 text-sm mb-3">
                    After completing your apprenticeship hours, you&apos;re eligible to sit for the journeyman exam. Most states use exams based on the current NEC:
                  </p>
                  <ul className="text-white/70 text-sm space-y-1">
                    <li>&#x2022; Typically 80-100 multiple choice questions</li>
                    <li>&#x2022; Open-book format (NEC code book allowed)</li>
                    <li>&#x2022; 4-hour time limit (varies by state)</li>
                    <li>&#x2022; Passing score usually 70-75%</li>
                    <li>&#x2022; Topics: NEC articles, calculations, safety, theory</li>
                    <li>&#x2022; Must tab and know your code book thoroughly</li>
                  </ul>
                </div>
                <div className="bg-white/5 rounded-xl p-6">
                  <h3 className="font-semibold text-purple-400 mb-2">Master Electrician License</h3>
                  <p className="text-white/70 text-sm mb-3">
                    The master license requires additional experience beyond the journeyman level and a more comprehensive exam:
                  </p>
                  <ul className="text-white/70 text-sm space-y-1">
                    <li>&#x2022; Typically requires 2-4 years as a licensed journeyman</li>
                    <li>&#x2022; More difficult exam with business and management topics</li>
                    <li>&#x2022; Allows you to pull permits, run jobs, and own a contracting business</li>
                    <li>&#x2022; Some states require a separate contractor license for business ownership</li>
                    <li>&#x2022; Continuing education required to maintain license</li>
                  </ul>
                </div>
              </div>

              <div className="bg-orange-900/30 rounded-xl p-6 my-6">
                <h3 className="font-semibold text-orange-400 mb-3">Exam Preparation Tips</h3>
                <ul className="space-y-2 text-white/70 text-sm">
                  <li>&#x2022; <strong>Tab your NEC code book</strong> &mdash; efficient navigation is critical on a timed exam</li>
                  <li>&#x2022; <strong>Take practice exams</strong> &mdash; timing and format familiarity matter</li>
                  <li>&#x2022; <strong>Focus on calculations</strong> &mdash; voltage drop, box fill, conduit fill, load calculations</li>
                  <li>&#x2022; <strong>Know the index</strong> &mdash; the NEC index is your best friend during the exam</li>
                  <li>&#x2022; <strong>Study Article 90</strong> &mdash; understanding the structure of the NEC helps you find answers faster</li>
                  <li>&#x2022; <strong>Use digital tools</strong> &mdash; apps like Ampora can help you practice code lookup speed</li>
                </ul>
              </div>
            </section>

            <section id="specializations" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Electrical Specializations</h2>
              <p className="text-white/80 mb-4">
                Once you have your journeyman license, you can specialize in areas that match your interests and market demand. Specialization often leads to higher pay and greater job satisfaction.
              </p>

              <div className="grid md:grid-cols-2 gap-4 my-6">
                <div className="bg-white/5 rounded-xl p-6">
                  <h3 className="font-semibold text-cyan-400 mb-2">Residential</h3>
                  <p className="text-white/70 text-sm">New construction, remodels, service upgrades, smart home integration. Great entry point and path to business ownership.</p>
                </div>
                <div className="bg-white/5 rounded-xl p-6">
                  <h3 className="font-semibold text-green-400 mb-2">Commercial</h3>
                  <p className="text-white/70 text-sm">Office buildings, retail, restaurants, healthcare facilities. Higher complexity and pay than residential.</p>
                </div>
                <div className="bg-white/5 rounded-xl p-6">
                  <h3 className="font-semibold text-purple-400 mb-2">Industrial</h3>
                  <p className="text-white/70 text-sm">Manufacturing plants, refineries, power generation. Involves motor controls, PLCs, and high-voltage systems. Highest pay tier.</p>
                </div>
                <div className="bg-white/5 rounded-xl p-6">
                  <h3 className="font-semibold text-orange-400 mb-2">Fire Alarm &amp; Life Safety</h3>
                  <p className="text-white/70 text-sm">Design, installation, and maintenance of fire alarm systems per NFPA 72. Requires specialized certifications (NICET).</p>
                </div>
                <div className="bg-white/5 rounded-xl p-6">
                  <h3 className="font-semibold text-rose-400 mb-2">Solar &amp; Renewable Energy</h3>
                  <p className="text-white/70 text-sm">Photovoltaic systems, battery storage, EV charging infrastructure. Rapidly growing field with strong incentives.</p>
                </div>
                <div className="bg-white/5 rounded-xl p-6">
                  <h3 className="font-semibold text-amber-400 mb-2">Data &amp; Communications</h3>
                  <p className="text-white/70 text-sm">Structured cabling, fiber optics, network infrastructure, data center power. High demand in technology sector.</p>
                </div>
              </div>
            </section>

            <section id="tools-technology" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Modern Tools &amp; Technology</h2>
              <p className="text-white/80 mb-4">
                Today&apos;s electricians use far more than hand tools and a code book. Technology is transforming how electrical professionals work, learn, and advance their careers.
              </p>

              <div className="bg-purple-900/30 rounded-xl p-6 my-6">
                <h3 className="font-semibold text-purple-400 mb-3">Digital Tools for the Modern Electrician</h3>
                <ul className="space-y-2 text-white/70 text-sm">
                  <li>&#x2022; <strong>AI-powered code reference apps</strong> &mdash; Instant NEC lookup without flipping through a 1,000+ page book</li>
                  <li>&#x2022; <strong>Electrical calculators</strong> &mdash; Voltage drop, conduit fill, box fill, and load calculations on your phone</li>
                  <li>&#x2022; <strong>Thermal imaging cameras</strong> &mdash; Identify hot spots and overloaded circuits non-invasively</li>
                  <li>&#x2022; <strong>Digital multimeters with Bluetooth</strong> &mdash; Log readings and share data remotely</li>
                  <li>&#x2022; <strong>3D modeling and BIM</strong> &mdash; Coordinate electrical systems with other trades before installation</li>
                  <li>&#x2022; <strong>Project management apps</strong> &mdash; Track hours, materials, and job progress digitally</li>
                </ul>
              </div>

              <p className="text-white/80 mb-4">
                Apprentices who embrace technology early have a significant advantage. Familiarity with digital tools, code reference apps, and calculation software makes you more productive and valuable to employers from the start.
              </p>
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
                <Link href="/blog/ai-tools-for-electricians" className="bg-white/5 hover:bg-white/10 rounded-xl p-6 transition-colors">
                  <span className="text-cyan-400 text-sm">Technology</span>
                  <h3 className="font-semibold mt-2">AI Tools for Electricians: How AI is Changing the Trade</h3>
                </Link>
                <Link href="/blog/electrical-symbols-blueprint-reading" className="bg-white/5 hover:bg-white/10 rounded-xl p-6 transition-colors">
                  <span className="text-cyan-400 text-sm">Technology</span>
                  <h3 className="font-semibold mt-2">Electrical Symbols &amp; Blueprint Reading Guide</h3>
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
