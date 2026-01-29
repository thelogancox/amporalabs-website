"use client";

import { useState, useEffect } from "react";
import { Star, Users, MessageCircle, TrendingUp } from "lucide-react";

// Real App Store reviews
const testimonials = [
  {
    name: "Cartmaster29",
    role: "App Store Review",
    text: "I needed to wire a fountain on a golf course with a 3 phase input and 2 phase motor trying to get a balance load. After asking 3 electricians for help, this was the only source I found with the correct solution.",
  },
  {
    name: "colewilliams128",
    role: "App Store Review",
    text: "This is pretty advanced. I haven't seen anything like it and it saves me a crazy amount of time. Highly recommend.",
  },
  {
    name: "kghyrdf",
    role: "App Store Review",
    text: "One stop shop for all of my electrical needs. This app has it all-including formulas, wire sizing, calculators, troubleshooting and an accurate AI assistant.",
  },
  {
    name: "Ssaaaaammm",
    role: "App Store Review",
    text: "Great tool to have in the field. No longer need to waste valuable time searching through the code book, everything is in the app. The step-by-step troubleshooting guide is also a huge help.",
  },
  {
    name: "Scary stuff",
    role: "App Store Review",
    text: "Exactly what we have been looking for. So much easier than opening the code book and much more accurate than searching online. Very detailed and easy to use!",
  },
];

interface AnalyticsData {
  totalUsers: number;
  totalConversations: number;
  rating: number;
  totalRatings: number;
}

export default function Testimonials() {
  const [analytics, setAnalytics] = useState<AnalyticsData | null>(null);
  const [displayedReviews, setDisplayedReviews] = useState(testimonials.slice(0, 3));
  const [currentIndex, setCurrentIndex] = useState(0);

  // Fetch live analytics
  useEffect(() => {
    const fetchAnalytics = async () => {
      try {
        const response = await fetch("https://ampora-live-analytics.vercel.app/api/analytics");
        if (response.ok) {
          const data = await response.json();
          setAnalytics({
            totalUsers: data.totalUsers || 220,
            totalConversations: data.totalConversations || 5000,
            rating: 5.0,
            totalRatings: 7,
          });
        }
      } catch {
        // Fallback to default values
        setAnalytics({
          totalUsers: 220,
          totalConversations: 5000,
          rating: 5.0,
          totalRatings: 7,
        });
      }
    };

    fetchAnalytics();
    // Refresh every 60 seconds
    const interval = setInterval(fetchAnalytics, 60000);
    return () => clearInterval(interval);
  }, []);

  // Rotate testimonials
  useEffect(() => {
    if (testimonials.length <= 3) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => {
        const next = (prev + 1) % testimonials.length;
        const reviews = [];
        for (let i = 0; i < 3; i++) {
          reviews.push(testimonials[(next + i) % testimonials.length]);
        }
        setDisplayedReviews(reviews);
        return next;
      });
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-ampora-500/10 border border-ampora-500/20 mb-6">
            <Star className="w-4 h-4 text-ampora-400" fill="currentColor" />
            <span className="text-sm text-ampora-300 font-medium">App Store Reviews</span>
          </div>

          <h2 className="font-display text-4xl sm:text-5xl font-bold mb-6">
            <span className="text-white">Trusted by</span>
            <br />
            <span className="gradient-text">Real Electricians</span>
          </h2>

          {/* Rating Badge */}
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white/5 border border-white/10">
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-yellow-500" fill="currentColor" />
              ))}
            </div>
            <span className="text-white font-semibold">5.0</span>
            <span className="text-white/50 text-sm">on App Store</span>
          </div>
        </div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-3 gap-5">
          {displayedReviews.map((t, idx) => (
            <div
              key={`${t.name}-${idx}`}
              className="bg-[#0a0014] border border-white/5 rounded-2xl p-6 transition-all duration-500"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-500" fill="currentColor" />
                ))}
              </div>
              <p className="text-white/70 text-sm leading-relaxed mb-4 min-h-[80px]">
                &ldquo;{t.text}&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-ampora-500 to-ampora-700 flex items-center justify-center text-white text-sm font-bold">
                  {t.name.charAt(0).toUpperCase()}
                </div>
                <div>
                  <div className="text-sm font-semibold text-white">{t.name}</div>
                  <div className="text-xs text-white/40">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination dots */}
        {testimonials.length > 3 && (
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => {
                  setCurrentIndex(i);
                  const reviews = [];
                  for (let j = 0; j < 3; j++) {
                    reviews.push(testimonials[(i + j) % testimonials.length]);
                  }
                  setDisplayedReviews(reviews);
                }}
                className={`w-2 h-2 rounded-full transition-all ${
                  i === currentIndex ? "bg-ampora-500 w-6" : "bg-white/20 hover:bg-white/40"
                }`}
              />
            ))}
          </div>
        )}

        {/* Live Stats */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 p-6 rounded-2xl bg-ampora-500/5 border border-ampora-500/10">
          <div className="text-center">
            <div className="flex justify-center mb-2">
              <Star className="w-5 h-5 text-yellow-500" fill="currentColor" />
            </div>
            <div className="text-2xl font-display font-bold text-white">
              {analytics?.rating?.toFixed(1) || "5.0"}
            </div>
            <div className="text-xs text-white/40">App Rating</div>
          </div>

          <div className="text-center">
            <div className="flex justify-center mb-2">
              <Users className="w-5 h-5 text-ampora-400" />
            </div>
            <div className="text-2xl font-display font-bold text-white">
              {analytics?.totalUsers?.toLocaleString() || "220"}+
            </div>
            <div className="text-xs text-white/40">Active Users</div>
          </div>

          <div className="text-center">
            <div className="flex justify-center mb-2">
              <MessageCircle className="w-5 h-5 text-electric-cyan" />
            </div>
            <div className="text-2xl font-display font-bold text-white">
              {analytics?.totalConversations ? `${(analytics.totalConversations / 1000).toFixed(0)}K+` : "5K+"}
            </div>
            <div className="text-xs text-white/40">Questions Answered</div>
          </div>

          <div className="text-center">
            <div className="flex justify-center mb-2">
              <TrendingUp className="w-5 h-5 text-green-400" />
            </div>
            <div className="text-2xl font-display font-bold text-white">99.9%</div>
            <div className="text-xs text-white/40">Accuracy Rate</div>
          </div>
        </div>

        {/* View on App Store link */}
        <div className="text-center mt-8">
          <a
            href="https://apps.apple.com/us/app/ampora/id6753693522"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-ampora-400 hover:text-ampora-300 transition-colors underline underline-offset-4"
          >
            View all reviews on the App Store
          </a>
        </div>
      </div>
    </section>
  );
}
