"use client";

import { Check, Zap, Sparkles } from "lucide-react";

export default function Pricing() {
  return (
    <section id="pricing" className="relative py-24">
      <div className="max-w-3xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-ampora-500/10 border border-ampora-500/20 mb-6">
            <Sparkles className="w-4 h-4 text-ampora-400" />
            <span className="text-sm text-ampora-300 font-medium">Pricing</span>
          </div>

          <h2 className="font-display text-4xl sm:text-5xl font-bold mb-4">
            <span className="text-white">Start Your</span>
            <br />
            <span className="gradient-text">Free Trial</span>
          </h2>

          <p className="text-lg text-white/50">
            Try Ampora free for 7 days. Cancel anytime.
          </p>
        </div>

        {/* Pricing Card */}
        <div className="relative bg-gradient-to-b from-ampora-500/10 to-ampora-900/10 border-2 border-ampora-500/40 rounded-3xl p-8 sm:p-10">
          {/* Badge */}
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full bg-ampora-500 text-white text-sm font-medium">
            7-Day Free Trial
          </div>

          <div className="text-center mb-8">
            <div className="flex items-baseline justify-center gap-2 mb-2">
              <span className="text-5xl sm:text-6xl font-display font-bold text-white">$19.99</span>
              <span className="text-white/50">/month</span>
            </div>
            <p className="text-white/40">after trial ends</p>
          </div>

          {/* Features */}
          <div className="grid sm:grid-cols-2 gap-4 mb-8">
            {[
              "Unlimited AI questions",
              "All 6 professional calculators",
              "Photo analysis feature",
              "Full NEC code reference",
              "Troubleshooting guides",
              "Formula library",
              "Priority AI responses",
              "No ads, ever",
            ].map((feature) => (
              <div key={feature} className="flex items-center gap-3">
                <Check className="w-5 h-5 text-ampora-400 flex-shrink-0" />
                <span className="text-white/80">{feature}</span>
              </div>
            ))}
          </div>

          {/* CTA */}
          <a
            href="https://apps.apple.com/us/app/ampora/id6753693522"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center justify-center gap-2 py-4 rounded-xl bg-ampora-500 text-white font-semibold text-lg hover:bg-ampora-600 transition-colors"
          >
            <Zap className="w-5 h-5" />
            Start Free Trial
          </a>

          <p className="text-center text-sm text-white/40 mt-4">
            Cancel anytime during trial. No charge until trial ends.
          </p>
        </div>
      </div>
    </section>
  );
}
