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
          "text": "Use Ampora's Voltage Drop Calculator to calculate voltage drop for single-phase and three-phase circuits. Enter your circuit voltage, current, wire gauge, and distance to get accurate NEC-compliant voltage drop calculations."
        }
      },
      {
        "@type": "Question",
        "name": "What is the best app for electricians?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Ampora is designed specifically for electricians and electrical professionals. It combines AI assistance, professional calculators (voltage drop, wire sizing, conduit fill, arc flash), NEC code reference, photo analysis, and troubleshooting tools in one mobile app."
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
