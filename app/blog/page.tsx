import { Metadata } from "next";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import { BreadcrumbJsonLd, CollectionPageJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Electrical Blog | NEC Code Guides, Calculators & AI Tips for Electricians",
  description: "Expert electrical guides for electricians. Learn NEC code, voltage drop calculations, wire sizing, electrical inspection tips, and how AI tools can help on the job site. Free educational resources from Ampora Labs.",
  keywords: [
    "electrical blog",
    "electrician blog",
    "NEC code guide",
    "electrical tips",
    "electrician resources",
    "electrical education",
    "NEC article explanations",
    "voltage drop guide",
    "wire sizing guide",
    "electrical inspection tips",
    "electrical troubleshooting guide",
    "AI for electricians guide",
    "electrical code explained",
    "electrician training resources",
    "electrical calculations guide"
  ],
  alternates: {
    canonical: "https://amporalabs.com/blog",
  },
  openGraph: {
    title: "Electrical Blog | Guides for Electricians - Ampora",
    description: "Expert electrical guides. NEC code explanations, calculation tutorials, inspection tips, and AI tools for electricians.",
    url: "https://amporalabs.com/blog",
    type: "website",
  },
};

// Blog post data - this would typically come from a CMS or database
export const blogPosts = [
  {
    slug: "nec-article-210-branch-circuits-guide",
    title: "NEC Article 210 Explained: Complete Guide to Branch Circuits",
    description: "Master NEC Article 210 branch circuit requirements. Learn about receptacle outlets, lighting loads, GFCI requirements, and conductor sizing for residential and commercial installations.",
    category: "NEC Code",
    date: "2025-01-15",
    readTime: "12 min read",
    featured: true,
  },
  {
    slug: "how-to-calculate-voltage-drop",
    title: "How to Calculate Voltage Drop: Step-by-Step Guide for Electricians",
    description: "Learn the complete voltage drop calculation process for single-phase and three-phase circuits. Includes NEC requirements, formulas, examples, and when to upsize conductors.",
    category: "Calculations",
    date: "2025-01-10",
    readTime: "10 min read",
    featured: true,
  },
  {
    slug: "electrical-inspection-checklist",
    title: "Electrical Inspection Checklist: Pass Your Inspection First Time",
    description: "Complete electrical inspection checklist covering residential and commercial work. Common code violations, what inspectors look for, and how to prepare for rough-in and final inspections.",
    category: "Inspections",
    date: "2025-01-05",
    readTime: "15 min read",
    featured: true,
  },
  {
    slug: "wire-sizing-guide-nec-ampacity-tables",
    title: "Wire Sizing Guide: How to Use NEC Ampacity Tables",
    description: "Complete guide to sizing conductors using NEC ampacity tables. Learn temperature correction, conduit fill derating, and how to select the right wire gauge for any application.",
    category: "Calculations",
    date: "2024-12-28",
    readTime: "11 min read",
    featured: false,
  },
  {
    slug: "ai-tools-for-electricians",
    title: "AI Tools for Electricians: How AI is Changing the Electrical Trade",
    description: "Discover how AI assistants help electricians with code lookup, calculations, troubleshooting, and photo analysis. Real-world examples of AI improving productivity on the job site.",
    category: "Technology",
    date: "2024-12-20",
    readTime: "8 min read",
    featured: false,
  },
  {
    slug: "nec-article-250-grounding-guide",
    title: "NEC Article 250 Explained: Complete Grounding and Bonding Guide",
    description: "Master NEC Article 250 grounding requirements. Learn about grounding electrode conductors, equipment grounding, bonding, and how to size GECs and EGCs correctly.",
    category: "NEC Code",
    date: "2025-01-20",
    readTime: "14 min read",
    featured: false,
  },
  {
    slug: "conduit-fill-calculation-guide",
    title: "Conduit Fill Calculation Guide: NEC Chapter 9 Tables Explained",
    description: "Learn how to calculate conduit fill using NEC Chapter 9 tables. Understand the 40% rule, jam ratio, and how to size conduit for any wire combination.",
    category: "Calculations",
    date: "2025-01-22",
    readTime: "11 min read",
    featured: false,
  },
  {
    slug: "thhn-vs-thwn-wire-differences",
    title: "THHN vs THWN Wire: What's the Difference and When to Use Each",
    description: "Understand the key differences between THHN and THWN wire types. Learn about wet location ratings, temperature limits, and NEC requirements for proper wire selection.",
    category: "NEC Code",
    date: "2025-01-25",
    readTime: "9 min read",
    featured: false,
  },
  {
    slug: "electrical-panel-troubleshooting",
    title: "Electrical Panel Troubleshooting: Common Problems and Solutions",
    description: "Diagnose and fix common electrical panel issues. Learn about tripping breakers, buzzing sounds, hot spots, and when to recommend a panel upgrade.",
    category: "Troubleshooting",
    date: "2025-01-28",
    readTime: "12 min read",
    featured: false,
  },
  {
    slug: "nec-service-entrance-requirements",
    title: "NEC Service Entrance Requirements: Complete Installation Guide",
    description: "Master NEC service entrance requirements including clearances, conductor sizing, grounding, and meter base installation. Essential guide for residential and commercial services.",
    category: "NEC Code",
    date: "2025-02-01",
    readTime: "13 min read",
    featured: false,
  },
];

export default function BlogPage() {
  const featuredPosts = blogPosts.filter(post => post.featured);
  const recentPosts = blogPosts.filter(post => !post.featured);

  return (
    <main className="min-h-screen bg-black text-white">
      <Navigation />
      <div className="pt-20">
        <BreadcrumbJsonLd
          items={[
            { name: "Home", url: "https://amporalabs.com" },
            { name: "Blog", url: "https://amporalabs.com/blog" },
          ]}
        />
        <CollectionPageJsonLd
          name="Ampora Electrical Blog"
          description="Expert electrical guides, NEC code explanations, and AI tools for electricians"
          url="https://amporalabs.com/blog"
          items={blogPosts.map(post => ({
            name: post.title,
            url: `https://amporalabs.com/blog/${post.slug}`
          }))}
        />

        <article className="max-w-6xl mx-auto px-6 py-12">
          {/* Breadcrumb */}
          <nav className="text-sm text-white/60 mb-8">
            <Link href="/" className="hover:text-white">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-white">Blog</span>
          </nav>

          {/* Hero Section */}
          <header className="mb-12 text-center">
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">
              Electrical Blog
            </h1>
            <p className="text-xl text-white/70 mb-8 max-w-3xl mx-auto">
              Expert guides on NEC code, electrical calculations, inspection tips, and how AI is transforming the electrical trade. Free resources for professional electricians.
            </p>
          </header>

          {/* Featured Posts */}
          <section className="mb-16">
            <h2 className="text-2xl font-display font-bold mb-6">Featured Articles</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {featuredPosts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group bg-white/5 hover:bg-white/10 rounded-2xl p-6 transition-all hover:scale-105"
                >
                  <div className="flex items-center gap-2 mb-4">
                    <span className="px-3 py-1 bg-purple-600/30 text-purple-300 text-xs font-medium rounded-full">
                      {post.category}
                    </span>
                    <span className="text-white/40 text-xs">{post.readTime}</span>
                  </div>
                  <h3 className="text-lg font-display font-bold mb-2 group-hover:text-purple-400 transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-white/60 text-sm line-clamp-3 mb-4">
                    {post.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-white/40 text-xs">{post.date}</span>
                    <span className="text-purple-400 text-sm font-medium">Read More →</span>
                  </div>
                </Link>
              ))}
            </div>
          </section>

          {/* Recent Posts */}
          {recentPosts.length > 0 && (
            <section className="mb-16">
              <h2 className="text-2xl font-display font-bold mb-6">More Articles</h2>
              <div className="space-y-4">
                {recentPosts.map((post) => (
                  <Link
                    key={post.slug}
                    href={`/blog/${post.slug}`}
                    className="group flex flex-col md:flex-row md:items-center justify-between p-6 bg-white/5 hover:bg-white/10 rounded-xl transition-all"
                  >
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="px-3 py-1 bg-cyan-600/30 text-cyan-300 text-xs font-medium rounded-full">
                          {post.category}
                        </span>
                        <span className="text-white/40 text-xs">{post.readTime}</span>
                      </div>
                      <h3 className="text-lg font-semibold group-hover:text-purple-400 transition-colors">
                        {post.title}
                      </h3>
                      <p className="text-white/60 text-sm mt-1 line-clamp-1 md:line-clamp-none">
                        {post.description}
                      </p>
                    </div>
                    <div className="flex items-center gap-4 mt-4 md:mt-0 md:ml-6">
                      <span className="text-white/40 text-sm">{post.date}</span>
                      <span className="text-purple-400 text-sm font-medium whitespace-nowrap">Read →</span>
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          )}

          {/* Categories */}
          <section className="mb-16">
            <h2 className="text-2xl font-display font-bold mb-6">Browse by Topic</h2>
            <div className="flex flex-wrap gap-3">
              {["NEC Code", "Calculations", "Inspections", "Technology", "Safety", "Troubleshooting"].map((category) => (
                <span
                  key={category}
                  className="px-5 py-2 bg-white/10 hover:bg-white/20 rounded-full text-sm font-medium cursor-pointer transition-colors"
                >
                  {category}
                </span>
              ))}
            </div>
          </section>

          {/* Newsletter / CTA */}
          <section className="bg-gradient-to-r from-purple-900/30 to-cyan-900/30 rounded-2xl p-8 text-center">
            <h2 className="text-2xl font-display font-bold mb-4">
              Get Electrical Guides in Your Pocket
            </h2>
            <p className="text-white/70 mb-6 max-w-2xl mx-auto">
              Download Ampora to access NEC code reference, AI-powered Q&A, electrical calculators, and more. Everything an electrician needs on the job site.
            </p>
            <a
              href="https://apps.apple.com/us/app/ampora/id6753693522"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-black font-semibold rounded-full hover:bg-white/90 transition-colors"
            >
              Download Free on App Store
            </a>
          </section>
        </article>
      </div>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-white/10">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <Link href="/" className="text-xl font-display font-bold">Ampora</Link>
          <nav className="flex flex-wrap justify-center gap-6 text-sm text-white/60">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <Link href="/calculators" className="hover:text-white transition-colors">Calculators</Link>
            <Link href="/features/ai-assistant" className="hover:text-white transition-colors">AI Assistant</Link>
            <Link href="/features/nec-code-reference" className="hover:text-white transition-colors">NEC Code</Link>
            <Link href="/blog" className="hover:text-white transition-colors">Blog</Link>
          </nav>
          <p className="text-sm text-white/40">© 2025 Ampora Labs</p>
        </div>
      </footer>
    </main>
  );
}
