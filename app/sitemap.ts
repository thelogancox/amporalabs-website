import { MetadataRoute } from 'next'

// Blog post data for sitemap generation
const blogPosts = [
  { slug: 'nec-article-210-branch-circuits-guide', date: '2025-01-15' },
  { slug: 'how-to-calculate-voltage-drop', date: '2025-01-10' },
  { slug: 'electrical-inspection-checklist', date: '2025-01-05' },
  { slug: 'wire-sizing-guide-nec-ampacity-tables', date: '2024-12-28' },
  { slug: 'ai-tools-for-electricians', date: '2024-12-20' },
]

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://amporalabs.com'
  const currentDate = new Date().toISOString()

  // Generate blog post URLs
  const blogUrls: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: post.date,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  return [
    // Homepage
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 1,
    },
    // Calculators Hub
    {
      url: `${baseUrl}/calculators`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    // Calculator Pages
    {
      url: `${baseUrl}/calculators/voltage-drop`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/calculators/wire-sizing`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/calculators/conduit-fill`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/calculators/arc-flash`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/calculators/load-calculation`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/calculators/motor-sizing`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    // Feature Pages
    {
      url: `${baseUrl}/features/ai-assistant`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/features/nec-code-reference`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/features/photo-analysis`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/features/troubleshooting`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    // Blog Hub
    {
      url: `${baseUrl}/blog`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    // Blog Posts
    ...blogUrls,
    // Enterprise / B2B Page
    {
      url: `${baseUrl}/enterprise`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    // Resource Pages
    {
      url: `${baseUrl}/electrical-formulas`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
  ]
}
