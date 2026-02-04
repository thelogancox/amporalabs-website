"use client";

import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import BubbleBackground from "@/components/BubbleBackground";
import SmoothScroll from "@/components/SmoothScroll";

// Dynamically import Preloader to avoid SSR issues
const Preloader = dynamic(() => import("@/components/Preloader"), {
  ssr: false,
});

// Lazy load below-the-fold components for better initial load performance
const AIDemo = dynamic(() => import("@/components/AIDemo"), {
  loading: () => <div className="min-h-[400px]" />,
});
const Calculators = dynamic(() => import("@/components/Calculators"), {
  loading: () => <div className="min-h-[400px]" />,
});
const PhotoAnalysis = dynamic(() => import("@/components/PhotoAnalysis"), {
  loading: () => <div className="min-h-[400px]" />,
});
const QuickReference = dynamic(() => import("@/components/QuickReference"), {
  loading: () => <div className="min-h-[300px]" />,
});
const Testimonials = dynamic(() => import("@/components/Testimonials"), {
  loading: () => <div className="min-h-[300px]" />,
});
const Footer = dynamic(() => import("@/components/Footer"), {
  loading: () => <div className="min-h-[200px]" />,
});

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    // Simulate loading and show preloader
    const timer = setTimeout(() => {
      setShowContent(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  const handlePreloaderComplete = () => {
    setIsLoading(false);
  };

  return (
    <>
      {/* Preloader */}
      {isLoading && showContent && <Preloader onComplete={handlePreloaderComplete} />}

      {/* Main Content */}
      <SmoothScroll>
        <main
          className={`relative min-h-screen bg-black overflow-hidden transition-opacity duration-500 ${
            isLoading ? "opacity-0" : "opacity-100"
          }`}
        >
          {/* Global Background Effects */}
          <BubbleBackground />

          {/* Navigation */}
          <Navigation />

          {/* Hero Section */}
          <Hero />

          {/* Section Divider */}
          <div className="section-divider" />

          {/* Features Grid */}
          <section data-animate="fade-up">
            <Features />
          </section>

          {/* AI Demo - Interactive */}
          <section data-animate="fade-up">
            <AIDemo />
          </section>

          {/* Section Divider */}
          <div className="section-divider" />

          {/* Calculator Showcase */}
          <section data-animate="fade-up">
            <Calculators />
          </section>

          {/* Photo Analysis Demo */}
          <section data-animate="fade-up">
            <PhotoAnalysis />
          </section>

          {/* Section Divider */}
          <div className="section-divider" />

          {/* Quick Reference */}
          <section data-animate="fade-up">
            <QuickReference />
          </section>

          {/* Testimonials */}
          <section data-animate="fade-up">
            <Testimonials />
          </section>

          {/* Footer with FAQ + CTA */}
          <Footer />
        </main>
      </SmoothScroll>
    </>
  );
}
