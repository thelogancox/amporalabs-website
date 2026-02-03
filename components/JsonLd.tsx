export function OrganizationJsonLd() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Ampora Labs",
    "alternateName": "Ampora",
    "url": "https://amporalabs.com",
    "logo": "https://amporalabs.com/ampora-logo.png",
    "description": "AI-powered electrical intelligence platform providing professional calculators, NEC code reference, and smart troubleshooting tools for electricians and electrical engineers.",
    "sameAs": [
      "https://apps.apple.com/us/app/ampora/id6753693522"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "email": "info@korvatech.com",
      "contactType": "customer service"
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
    />
  );
}

export function SoftwareApplicationJsonLd() {
  const appSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Ampora - Electrical AI Assistant",
    "applicationCategory": "UtilitiesApplication",
    "operatingSystem": "iOS",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "description": "AI-powered electrical calculator app with voltage drop calculator, wire sizing, conduit fill, arc flash analysis, load calculations, NEC code reference, and photo analysis for electricians.",
    "downloadUrl": "https://apps.apple.com/us/app/ampora/id6753693522",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5",
      "ratingCount": "100"
    },
    "featureList": [
      "AI-Powered Electrical Assistant",
      "Voltage Drop Calculator",
      "Wire Sizing Calculator",
      "Conduit Fill Calculator",
      "Arc Flash Calculator",
      "Load Calculation Tool",
      "Motor Sizing Calculator",
      "NEC Code Reference Database",
      "Photo Analysis for Electrical Panels",
      "Interactive Troubleshooting Guide"
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(appSchema) }}
    />
  );
}

export function WebsiteJsonLd() {
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Ampora - Electrical AI Calculator & NEC Code Reference",
    "alternateName": "Ampora Labs",
    "url": "https://amporalabs.com",
    "description": "Professional electrical calculator app with AI assistant, voltage drop, wire sizing, conduit fill, arc flash, and NEC code reference tools for electricians.",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://amporalabs.com/?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
    />
  );
}

export function FAQJsonLd() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is Ampora?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Ampora is an AI-powered electrical calculator and reference app designed for electricians and electrical engineers. It includes professional tools like voltage drop calculator, wire sizing calculator, conduit fill calculator, arc flash analyzer, load calculation tools, and a comprehensive NEC code reference database."
        }
      },
      {
        "@type": "Question",
        "name": "What electrical calculators does Ampora include?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Ampora includes six professional electrical calculators: Voltage Drop Calculator, Wire Sizing Calculator, Conduit Fill Calculator, Arc Flash Analyzer, Load Calculation Tool, and Motor Sizing Calculator. All calculations are NEC code-compliant."
        }
      },
      {
        "@type": "Question",
        "name": "Does Ampora have an AI assistant for electrical questions?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, Ampora features an advanced AI assistant trained on electrical engineering and NEC code. You can ask questions about electrical work, troubleshooting, code compliance, and get instant, accurate answers backed by NEC references."
        }
      },
      {
        "@type": "Question",
        "name": "Is Ampora compliant with NEC electrical codes?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, all Ampora calculators and references are based on NEC 2023 standards. The app includes a comprehensive NEC code database with search functionality and article references."
        }
      },
      {
        "@type": "Question",
        "name": "Can Ampora analyze photos of electrical panels?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, Ampora includes AI-powered photo analysis. Upload photos of electrical panels, wiring, and equipment to get intelligent analysis, safety recommendations, and troubleshooting guidance."
        }
      },
      {
        "@type": "Question",
        "name": "How do I calculate voltage drop for electrical circuits?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Use Ampora's Voltage Drop Calculator to calculate voltage drop for single-phase and three-phase circuits. Enter your circuit voltage, current, wire gauge, and distance to get accurate NEC-compliant voltage drop calculations. The app uses the standard formula VD = (2 × K × I × D) / CM for single-phase and VD = (1.732 × K × I × D) / CM for three-phase circuits."
        }
      },
      {
        "@type": "Question",
        "name": "What is the best app for electricians?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Ampora is designed specifically for electricians and electrical professionals. It combines AI assistance, professional calculators (voltage drop, wire sizing, conduit fill, arc flash), NEC code reference, photo analysis, and troubleshooting tools in one mobile app. It's free to download from the App Store."
        }
      },
      {
        "@type": "Question",
        "name": "How do I size electrical wire using NEC tables?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Wire sizing requires checking NEC Table 310.16 for conductor ampacity based on insulation temperature rating (60°C, 75°C, or 90°C). Apply temperature correction factors if ambient temperature exceeds 30°C, and conduit fill derating if more than 3 current-carrying conductors are in a raceway. Ampora's Wire Sizing Calculator handles all these factors automatically."
        }
      },
      {
        "@type": "Question",
        "name": "What is the NEC 3% voltage drop rule?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "NEC 210.19(A) Informational Note recommends maximum 3% voltage drop for branch circuits and 5% total voltage drop (feeder + branch circuit combined). While these are recommendations, not requirements, many inspectors enforce them. For a 120V circuit, 3% equals 3.6V maximum drop."
        }
      },
      {
        "@type": "Question",
        "name": "Where is GFCI protection required by NEC code?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Per NEC 210.8, GFCI protection is required for 125V-250V receptacles in bathrooms, kitchens (countertop and within 6 feet of sink), garages, outdoors, basements, crawl spaces, laundry areas, and within 6 feet of any sink. The NEC 2023 expanded requirements to include 250V receptacles in many locations."
        }
      },
      {
        "@type": "Question",
        "name": "What is AFCI protection and where is it required?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Arc-Fault Circuit Interrupter (AFCI) protection detects dangerous arcing conditions that could cause fires. Per NEC 210.12, AFCI protection is required for 120V, 15A and 20A branch circuits in dwelling unit bedrooms, living rooms, kitchens, dining rooms, family rooms, hallways, closets, and similar rooms."
        }
      },
      {
        "@type": "Question",
        "name": "How do I calculate conduit fill?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Conduit fill is calculated using NEC Chapter 9 tables. One conductor can fill 53% of conduit area, two conductors can fill 31%, and three or more can fill 40%. Use Ampora's Conduit Fill Calculator to automatically determine the correct conduit size based on conductor types, sizes, and quantities."
        }
      },
      {
        "@type": "Question",
        "name": "Is Ampora free to use?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, Ampora is free to download from the App Store. The app includes AI assistant, all six electrical calculators, NEC code reference, photo analysis, and troubleshooting tools. No credit card required to get started."
        }
      },
      {
        "@type": "Question",
        "name": "Can I use Ampora offline on job sites?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Ampora's electrical calculators and reference formulas work offline. The AI assistant and photo analysis features require an internet connection to process queries through our AI system."
        }
      },
      {
        "@type": "Question",
        "name": "What is arc flash analysis?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Arc flash analysis calculates incident energy levels and arc flash boundaries to determine required personal protective equipment (PPE) when working on energized electrical equipment. Ampora's Arc Flash Calculator follows IEEE 1584 and NFPA 70E standards to provide incident energy, working distance, and PPE category recommendations."
        }
      },
      {
        "@type": "Question",
        "name": "How do I calculate electrical load for a service?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Residential service load calculations follow NEC Article 220. Start with 3 VA per square foot for general lighting, add small appliance circuits (1500 VA each), laundry circuit (1500 VA), and individual appliance loads. Apply demand factors per NEC Table 220.42 and 220.54. Ampora's Load Calculation tool automates this process."
        }
      },
      {
        "@type": "Question",
        "name": "What are NEC receptacle spacing requirements?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Per NEC 210.52, no point along the floor line of any wall space can be more than 6 feet from a receptacle outlet. This means receptacles must be spaced no more than 12 feet apart. Any wall section 2 feet or wider requires a receptacle. Kitchen countertops require receptacles so no point is more than 24 inches from an outlet."
        }
      },
      {
        "@type": "Question",
        "name": "Does Ampora work for commercial electricians?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, Ampora is designed for both residential and commercial electricians. It includes commercial-focused tools like motor sizing calculator with full load current tables, three-phase voltage drop calculations, arc flash analysis, and NEC code reference covering commercial requirements."
        }
      },
      {
        "@type": "Question",
        "name": "How do I prepare for an electrical inspection?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Before calling for inspection: verify permits are posted, all work is complete for that phase, boxes are accessible, panels are open, and work area is clean. Use Ampora's AI assistant to verify code compliance on specific questions like GFCI locations, AFCI requirements, box fill, and receptacle spacing before the inspector arrives."
        }
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
    />
  );
}

export function BreadcrumbJsonLd({ items }: { items: { name: string; url: string }[] }) {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url
    }))
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
    />
  );
}

export function CalculatorPageJsonLd({
  name,
  description,
  url
}: {
  name: string;
  description: string;
  url: string;
}) {
  const calculatorSchema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": name,
    "description": description,
    "url": url,
    "applicationCategory": "UtilitiesApplication",
    "operatingSystem": "iOS, Web",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "creator": {
      "@type": "Organization",
      "name": "Ampora Labs",
      "url": "https://amporalabs.com"
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(calculatorSchema) }}
    />
  );
}

export function HowToJsonLd({
  name,
  description,
  steps
}: {
  name: string;
  description: string;
  steps: { name: string; text: string }[];
}) {
  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": name,
    "description": description,
    "step": steps.map((step, index) => ({
      "@type": "HowToStep",
      "position": index + 1,
      "name": step.name,
      "text": step.text
    }))
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
    />
  );
}

export function ArticleJsonLd({
  headline,
  description,
  image,
  datePublished,
  dateModified,
  authorName,
  url,
  keywords
}: {
  headline: string;
  description: string;
  image?: string;
  datePublished: string;
  dateModified?: string;
  authorName: string;
  url: string;
  keywords?: string[];
}) {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": headline,
    "description": description,
    "image": image || "https://amporalabs.com/opengraph-image",
    "datePublished": datePublished,
    "dateModified": dateModified || datePublished,
    "author": {
      "@type": "Organization",
      "name": authorName,
      "url": "https://amporalabs.com"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Ampora Labs",
      "logo": {
        "@type": "ImageObject",
        "url": "https://amporalabs.com/ampora-logo.png"
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": url
    },
    ...(keywords && { "keywords": keywords.join(", ") })
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
    />
  );
}

export function BlogPostingJsonLd({
  headline,
  description,
  image,
  datePublished,
  dateModified,
  url,
  articleBody,
  wordCount,
  keywords
}: {
  headline: string;
  description: string;
  image?: string;
  datePublished: string;
  dateModified?: string;
  url: string;
  articleBody?: string;
  wordCount?: number;
  keywords?: string[];
}) {
  const blogSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": headline,
    "description": description,
    "image": image || "https://amporalabs.com/opengraph-image",
    "datePublished": datePublished,
    "dateModified": dateModified || datePublished,
    "author": {
      "@type": "Organization",
      "name": "Ampora Labs",
      "url": "https://amporalabs.com"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Ampora Labs",
      "logo": {
        "@type": "ImageObject",
        "url": "https://amporalabs.com/ampora-logo.png"
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": url
    },
    ...(articleBody && { "articleBody": articleBody }),
    ...(wordCount && { "wordCount": wordCount }),
    ...(keywords && { "keywords": keywords.join(", ") })
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }}
    />
  );
}

export function CollectionPageJsonLd({
  name,
  description,
  url,
  items
}: {
  name: string;
  description: string;
  url: string;
  items: { name: string; url: string }[];
}) {
  const collectionSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": name,
    "description": description,
    "url": url,
    "mainEntity": {
      "@type": "ItemList",
      "itemListElement": items.map((item, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "name": item.name,
        "url": item.url
      }))
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }}
    />
  );
}
