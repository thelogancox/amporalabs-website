"use client";

import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Zap, Menu, X } from "lucide-react";
import { AppleIcon, GooglePlayIcon } from "./StoreIcons";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 50);
          ticking = false;
        });
        ticking = true;
      }
    };

    // Use passive listener for better scroll performance
    window.addEventListener("scroll", handleScroll, { passive: true });

    // Entrance slides only, never fades: the nav must never be invisible.
    // Skipped entirely if hydration landed late and it is already on screen.
    if (navRef.current && performance.now() < 1200) {
      gsap.from(navRef.current, {
        y: -80,
        duration: 0.6,
        ease: "power3.out",
      });
    }

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // Mobile menu animation
    if (menuRef.current) {
      if (isMobileMenuOpen) {
        gsap.fromTo(
          menuRef.current,
          { opacity: 0 },
          { opacity: 1, duration: 0.3, ease: "power2.out" }
        );
        gsap.fromTo(
          menuRef.current.querySelectorAll(".menu-item"),
          { opacity: 0, x: -20 },
          { opacity: 1, x: 0, duration: 0.4, stagger: 0.1, ease: "power3.out", delay: 0.1 }
        );
      }
    }
  }, [isMobileMenuOpen]);

  const navItems = [
    { label: "Calculators", href: "/calculators" },
    { label: "AI Assistant", href: "/features/ai-assistant" },
    { label: "NEC Code", href: "/features/nec-code-reference" },
    { label: "Blog", href: "/blog" },
    { label: "For Contractors", href: "/enterprise" },
  ];

  return (
    <>
      <nav
        ref={navRef}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-black/90 backdrop-blur-md border-b border-white/5"
            : "bg-transparent"
        }`}
        style={{ transform: 'translateZ(0)', willChange: 'background-color' }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <a href="/" className="flex items-center gap-3 group">
              <div className="relative w-10 h-10 flex items-center justify-center">
                <div className="absolute inset-0 bg-gradient-to-br from-ampora-500 to-ampora-700 rounded-xl opacity-0 group-hover:opacity-40 transition-opacity duration-300 blur-lg" />
                <div className="relative bg-gradient-to-br from-ampora-500 to-ampora-600 rounded-xl p-2 shadow-lg shadow-ampora-500/20 group-hover:shadow-ampora-500/40 transition-shadow duration-300">
                  <Zap className="w-5 h-5 text-white" fill="currentColor" />
                </div>
              </div>
              <span className="font-display text-xl font-bold tracking-tight bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
                Ampora
              </span>
            </a>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-1">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="relative px-4 py-2 text-sm text-white/60 hover:text-white transition-colors group"
                >
                  <span className="relative z-10">{item.label}</span>
                  <div className="absolute inset-0 bg-white/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-ampora-500 to-ampora-400 group-hover:w-1/2 transition-all duration-300 rounded-full" />
                </a>
              ))}
            </div>

            {/* CTA */}
            <div className="hidden md:flex items-center gap-4">
              <a
                href="/get"
               target="_blank"
               rel="noopener noreferrer"
                                className="group relative inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-ampora-500 to-ampora-600 text-white font-semibold text-sm overflow-hidden transition-all duration-300 hover:shadow-[0_0_30px_rgba(139,92,246,0.3)]"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-ampora-400 to-ampora-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <AppleIcon className="relative w-4 h-4" />
                <GooglePlayIcon className="relative w-4 h-4" />
                <span className="relative">Download</span>
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden relative w-10 h-10 flex items-center justify-center rounded-xl bg-white/5 border border-white/10 text-white/70 hover:text-white hover:bg-white/10 transition-all"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div
          ref={menuRef}
          className="fixed inset-0 z-40 md:hidden opacity-0"
        >
          <div
            className="absolute inset-0 bg-black/95 backdrop-blur-xl"
            onClick={() => setIsMobileMenuOpen(false)}
          />
          <div className="relative pt-24 px-6">
            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="menu-item text-2xl font-display font-semibold text-white/90 hover:text-ampora-400 transition-colors py-4 border-b border-white/5 flex items-center justify-between"
                >
                  {item.label}
                  <svg className="w-5 h-5 text-white/30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M9 18l6-6-6-6" />
                  </svg>
                </a>
              ))}
              <a
                href="/get"
               target="_blank"
               rel="noopener noreferrer"
                                className="menu-item mt-6 inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-ampora-500 to-ampora-600 text-white font-semibold text-lg"
              >
                <AppleIcon className="w-5 h-5" />
                <GooglePlayIcon className="w-5 h-5" />
                Download App
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
