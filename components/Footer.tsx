"use client";

import { useState } from "react";
import Image from "next/image";
import { Zap, ArrowRight, HelpCircle, ChevronDown, Mail, Building2, Send } from "lucide-react";

const faqs = [
  { q: "Is Ampora accurate for professional work?", a: "Yes! Our AI is trained on the NEC and provides code-backed answers with specific article references." },
  { q: "What NEC version does Ampora use?", a: "Ampora references the 2023 NEC. We update with each new code cycle." },
  { q: "Can I use Ampora offline?", a: "All 6 calculators work offline. AI and photo features require internet." },
  { q: "How does photo analysis work?", a: "Snap a photo, our AI identifies equipment, checks NEC compliance, and provides recommendations." },
  { q: "Can I cancel anytime?", a: "Yes, cancel through the App Store anytime during or after your trial." },
];

export default function Footer() {
  const [open, setOpen] = useState<number | null>(0);
  const [formData, setFormData] = useState({ name: "", email: "", company: "", message: "" });
  const [formStatus, setFormStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus("sending");

    // Create mailto link as fallback
    const subject = encodeURIComponent(`Ampora Inquiry from ${formData.name}${formData.company ? ` - ${formData.company}` : ""}`);
    const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\nCompany: ${formData.company || "N/A"}\n\nMessage:\n${formData.message}`);

    // Try to open mailto (works on all devices)
    window.location.href = `mailto:info@korvatech.com?subject=${subject}&body=${body}`;

    setFormStatus("sent");
    setTimeout(() => {
      setFormStatus("idle");
      setFormData({ name: "", email: "", company: "", message: "" });
    }, 3000);
  };

  return (
    <footer id="faq" className="relative">
      {/* Combined FAQ + CTA Section */}
      <div className="relative py-24">
        <div className="absolute inset-0 bg-gradient-to-t from-ampora-500/10 to-transparent pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Left - FAQ */}
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-ampora-500/10 border border-ampora-500/20 mb-6">
                <HelpCircle className="w-4 h-4 text-ampora-400" />
                <span className="text-sm text-ampora-300 font-medium">FAQ</span>
              </div>

              <h2 className="font-display text-3xl sm:text-4xl font-bold mb-8">
                <span className="gradient-text">Common Questions</span>
              </h2>

              {/* FAQ Items */}
              <div className="space-y-3">
                {faqs.map((faq, index) => (
                  <div key={index} className="bg-zinc-900/50 border border-white/5 rounded-xl overflow-hidden">
                    <button
                      onClick={() => setOpen(open === index ? null : index)}
                      className="w-full flex items-center justify-between p-4 text-left"
                    >
                      <span className="font-medium text-white pr-4 text-sm">{faq.q}</span>
                      <ChevronDown
                        className={`w-5 h-5 text-ampora-400 flex-shrink-0 transition-transform duration-200 ${
                          open === index ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    {open === index && (
                      <div className="px-4 pb-4">
                        <p className="text-sm text-white/50 leading-relaxed">{faq.a}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Right - CTA */}
            <div className="lg:sticky lg:top-32">
              <div className="bg-gradient-to-br from-ampora-500/10 to-ampora-700/5 border border-ampora-500/20 rounded-3xl p-8 sm:p-10 text-center">
                <img
                  src="/ampora-logo.png"
                  alt="Ampora"
                  className="w-16 h-16 rounded-2xl mx-auto mb-6 shadow-lg shadow-ampora-500/30"
                />

                <h2 className="font-display text-3xl sm:text-4xl font-bold mb-4">
                  <span className="text-white">Ready to Work</span>
                  <br />
                  <span className="gradient-text">Smarter?</span>
                </h2>

                <p className="text-white/50 mb-8 max-w-sm mx-auto">
                  Join thousands of electrical professionals using Ampora every day.
                </p>

                <a
                  href="https://apps.apple.com/us/app/ampora/id6753693522"
                 target="_blank"
                 rel="noopener noreferrer"
                                    className="inline-flex items-center gap-4 px-6 py-4 rounded-2xl bg-white text-black font-semibold text-lg group hover:bg-white/90 transition-all hover:scale-105"
                >
                  <img
                    src="/ampora-logo.png"
                    alt="Ampora"
                    className="w-12 h-12 rounded-xl"
                  />
                  <div className="text-left">
                    <div className="text-xs opacity-60">Download on the</div>
                    <div className="text-xl font-bold -mt-1">App Store</div>
                  </div>
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </a>

                <p className="text-sm text-white/30 mt-6">Free 7-day trial · iOS 15.0+</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Form Section */}
      <div id="contact" className="relative py-20 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left - Info */}
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-ampora-500/10 border border-ampora-500/20 mb-6">
                <Building2 className="w-4 h-4 text-ampora-400" />
                <span className="text-sm text-ampora-300 font-medium">Enterprise</span>
              </div>

              <h2 className="font-display text-3xl sm:text-4xl font-bold mb-4">
                <span className="text-white">Questions or</span>
                <br />
                <span className="gradient-text">Enterprise Solutions?</span>
              </h2>

              <p className="text-white/50 mb-8 leading-relaxed">
                Need custom solutions for your team? Have questions about Ampora?
                We&apos;d love to hear from you. Fill out the form and we&apos;ll get back to you shortly.
              </p>

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-ampora-500/10 flex items-center justify-center">
                    <Mail className="w-5 h-5 text-ampora-400" />
                  </div>
                  <div>
                    <div className="text-sm text-white/40">Email us directly</div>
                    <a href="mailto:info@korvatech.com" className="text-white hover:text-ampora-400 transition-colors">
                      info@korvatech.com
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Right - Form */}
            <div className="bg-zinc-900/50 border border-white/5 rounded-2xl p-6 sm:p-8">
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm text-white/60 mb-2">Name *</label>
                    <input
                      type="text"
                      id="name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/30 focus:border-ampora-500/50 focus:outline-none focus:ring-1 focus:ring-ampora-500/50 transition-colors"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm text-white/60 mb-2">Email *</label>
                    <input
                      type="email"
                      id="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/30 focus:border-ampora-500/50 focus:outline-none focus:ring-1 focus:ring-ampora-500/50 transition-colors"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm text-white/60 mb-2">Company (optional)</label>
                  <input
                    type="text"
                    id="company"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/30 focus:border-ampora-500/50 focus:outline-none focus:ring-1 focus:ring-ampora-500/50 transition-colors"
                    placeholder="Your company"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm text-white/60 mb-2">Message *</label>
                  <textarea
                    id="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/30 focus:border-ampora-500/50 focus:outline-none focus:ring-1 focus:ring-ampora-500/50 transition-colors resize-none"
                    placeholder="Tell us about your needs..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={formStatus === "sending"}
                  className="w-full flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-gradient-to-r from-ampora-500 to-ampora-600 text-white font-semibold hover:from-ampora-400 hover:to-ampora-500 transition-all disabled:opacity-50"
                >
                  {formStatus === "sending" ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Opening email client...
                    </>
                  ) : formStatus === "sent" ? (
                    <>
                      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M20 6L9 17l-5-5" />
                      </svg>
                      Email client opened!
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Send Message
                    </>
                  )}
                </button>

                <p className="text-xs text-white/30 text-center">
                  Clicking send will open your email client with pre-filled information
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-8">
          <div className="flex flex-col items-center gap-8">
            {/* App Store CTA with Ampora logo */}
            <a
              href="https://apps.apple.com/us/app/ampora/id6753693522"
             target="_blank"
             rel="noopener noreferrer"
                            className="inline-flex items-center gap-4 px-5 py-2.5 rounded-xl bg-white text-black font-semibold hover:bg-white/90 transition-all hover:scale-105"
            >
              <img
                src="/ampora-logo.png"
                alt="Ampora"
                className="w-10 h-10 rounded-xl"
              />
              <div className="text-left">
                <div className="text-[10px] opacity-60 leading-none">Download on the</div>
                <div className="text-base font-bold leading-tight">App Store</div>
              </div>
            </a>

            {/* KorvaTech branding */}
            <div className="flex flex-col items-center gap-2">
              <div className="flex items-center gap-3">
                <span className="text-sm text-white/50">Engineered by</span>
                <Image
                  src="/korva-k-logo.webp"
                  alt="KorvaTech"
                  width={100}
                  height={32}
                  className="h-8 w-auto opacity-90"
                />
              </div>
              <p className="text-xs text-white/40">© {new Date().getFullYear()} KorvaTech</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
