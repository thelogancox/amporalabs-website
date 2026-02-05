import Script from 'next/script';

const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

export function GoogleAnalytics() {
  if (!GA_MEASUREMENT_ID) {
    return null;
  }

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        strategy="beforeInteractive"
      />
      <Script id="google-analytics" strategy="beforeInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_MEASUREMENT_ID}');
        `}
      </Script>
    </>
  );
}

// Event tracking helper functions
export function trackEvent(eventName: string, parameters?: Record<string, string | number | boolean>) {
  if (typeof window !== 'undefined' && 'gtag' in window) {
    (window as typeof window & { gtag: (...args: unknown[]) => void }).gtag('event', eventName, parameters);
  }
}

// Pre-defined events for common actions
export const analyticsEvents = {
  // App download events
  downloadClick: (source: string) => trackEvent('download_click', { source }),
  appStoreClick: () => trackEvent('app_store_click'),

  // Calculator usage events
  calculatorUsed: (calculatorType: string) => trackEvent('calculator_used', { calculator_type: calculatorType }),

  // Feature engagement events
  aiDemoInteraction: () => trackEvent('ai_demo_interaction'),
  photoAnalysisDemo: () => trackEvent('photo_analysis_demo'),
  necCodeSearch: (query: string) => trackEvent('nec_code_search', { search_query: query }),

  // Navigation events
  pageView: (pageName: string) => trackEvent('page_view', { page_name: pageName }),
  ctaClick: (ctaName: string, location: string) => trackEvent('cta_click', { cta_name: ctaName, location }),

  // Blog events
  blogPostRead: (postSlug: string) => trackEvent('blog_post_read', { post_slug: postSlug }),
  blogCategoryView: (category: string) => trackEvent('blog_category_view', { category }),

  // Conversion events
  signupIntent: (source: string) => trackEvent('signup_intent', { source }),
  enterpriseInquiry: () => trackEvent('enterprise_inquiry'),
};
