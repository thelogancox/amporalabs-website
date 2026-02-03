import Link from "next/link";
import { BreadcrumbJsonLd } from "./JsonLd";

interface BreadcrumbItem {
  label: string;
  href: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export function Breadcrumb({ items }: BreadcrumbProps) {
  // Convert items to JSON-LD format
  const jsonLdItems = items.map((item) => ({
    name: item.label,
    url: `https://amporalabs.com${item.href}`,
  }));

  return (
    <>
      <BreadcrumbJsonLd items={jsonLdItems} />
      <nav aria-label="Breadcrumb" className="text-sm text-white/60 mb-8">
        <ol className="flex flex-wrap items-center gap-1" itemScope itemType="https://schema.org/BreadcrumbList">
          {items.map((item, index) => {
            const isLast = index === items.length - 1;

            return (
              <li
                key={item.href}
                className="flex items-center"
                itemScope
                itemType="https://schema.org/ListItem"
                itemProp="itemListElement"
              >
                {index > 0 && <span className="mx-2 text-white/40">/</span>}
                {isLast ? (
                  <span className="text-white" itemProp="name">{item.label}</span>
                ) : (
                  <Link
                    href={item.href}
                    className="hover:text-white transition-colors"
                    itemProp="item"
                  >
                    <span itemProp="name">{item.label}</span>
                  </Link>
                )}
                <meta itemProp="position" content={String(index + 1)} />
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
}

// Pre-built breadcrumb configurations for common pages
export const breadcrumbs = {
  home: [{ label: "Home", href: "/" }],

  calculators: [
    { label: "Home", href: "/" },
    { label: "Calculators", href: "/calculators" },
  ],

  calculator: (name: string, slug: string) => [
    { label: "Home", href: "/" },
    { label: "Calculators", href: "/calculators" },
    { label: name, href: `/calculators/${slug}` },
  ],

  features: [
    { label: "Home", href: "/" },
    { label: "Features", href: "/features" },
  ],

  feature: (name: string, slug: string) => [
    { label: "Home", href: "/" },
    { label: "Features", href: "/features" },
    { label: name, href: `/features/${slug}` },
  ],

  blog: [
    { label: "Home", href: "/" },
    { label: "Blog", href: "/blog" },
  ],

  blogPost: (title: string, slug: string) => [
    { label: "Home", href: "/" },
    { label: "Blog", href: "/blog" },
    { label: title, href: `/blog/${slug}` },
  ],

  enterprise: [
    { label: "Home", href: "/" },
    { label: "For Contractors", href: "/enterprise" },
  ],

  formulas: [
    { label: "Home", href: "/" },
    { label: "Electrical Formulas", href: "/electrical-formulas" },
  ],
};
