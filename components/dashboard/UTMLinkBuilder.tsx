"use client";

import { useState } from "react";
import { Link2, Copy, Check } from "lucide-react";

const PRESETS = [
  { label: "Facebook Ad", source: "facebook", medium: "cpc", campaign: "" },
  { label: "Instagram Ad", source: "instagram", medium: "cpc", campaign: "" },
  { label: "Google Ad", source: "google", medium: "cpc", campaign: "" },
  { label: "Email Outreach", source: "email", medium: "email", campaign: "" },
  { label: "Newsletter", source: "newsletter", medium: "email", campaign: "" },
  { label: "LinkedIn Post", source: "linkedin", medium: "social", campaign: "" },
  { label: "Twitter/X Post", source: "twitter", medium: "social", campaign: "" },
  { label: "TikTok", source: "tiktok", medium: "social", campaign: "" },
];

export function UTMLinkBuilder() {
  const [source, setSource] = useState("");
  const [medium, setMedium] = useState("");
  const [campaign, setCampaign] = useState("");
  const [url, setUrl] = useState("https://amporalabs.com");
  const [copied, setCopied] = useState(false);

  function applyPreset(preset: typeof PRESETS[0]) {
    setSource(preset.source);
    setMedium(preset.medium);
    if (preset.campaign) setCampaign(preset.campaign);
  }

  function getGeneratedUrl(): string {
    if (!source) return "";
    const params = new URLSearchParams();
    params.set("utm_source", source);
    if (medium) params.set("utm_medium", medium);
    if (campaign) params.set("utm_campaign", campaign);
    return `${url}?${params.toString()}`;
  }

  async function copyToClipboard() {
    const generated = getGeneratedUrl();
    if (!generated) return;
    try {
      await navigator.clipboard.writeText(generated);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback
      const textarea = document.createElement("textarea");
      textarea.value = generated;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand("copy");
      document.body.removeChild(textarea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  }

  const generatedUrl = getGeneratedUrl();

  return (
    <div className="glass rounded-2xl p-6 border border-white/5">
      <div className="flex items-center gap-2 mb-6">
        <Link2 className="w-5 h-5 text-ampora-400" />
        <h3 className="text-lg font-display font-semibold text-white">
          UTM Link Builder
        </h3>
      </div>

      <p className="text-white/40 text-sm mb-5">
        Generate tracked links for your ads, emails, and social posts. The UTM parameters let you see exactly where your traffic comes from in the dashboard above.
      </p>

      {/* Quick presets */}
      <div className="flex flex-wrap gap-2 mb-5">
        {PRESETS.map((preset) => (
          <button
            key={preset.label}
            onClick={() => applyPreset(preset)}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
              source === preset.source && medium === preset.medium
                ? "bg-ampora-500/30 text-ampora-300 border border-ampora-500/30"
                : "bg-white/5 text-white/60 border border-white/10 hover:border-white/20"
            }`}
          >
            {preset.label}
          </button>
        ))}
      </div>

      {/* Form */}
      <div className="grid sm:grid-cols-2 gap-3 mb-4">
        <div>
          <label className="block text-xs text-white/40 mb-1.5">Page URL</label>
          <input
            type="text"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            className="w-full px-3 py-2 rounded-lg bg-white/5 border border-white/10 text-white text-sm placeholder-white/30 focus:border-ampora-500/50 focus:outline-none"
            placeholder="https://amporalabs.com"
          />
        </div>
        <div>
          <label className="block text-xs text-white/40 mb-1.5">Campaign Name</label>
          <input
            type="text"
            value={campaign}
            onChange={(e) => setCampaign(e.target.value)}
            className="w-full px-3 py-2 rounded-lg bg-white/5 border border-white/10 text-white text-sm placeholder-white/30 focus:border-ampora-500/50 focus:outline-none"
            placeholder="e.g. feb-launch, spring-promo"
          />
        </div>
        <div>
          <label className="block text-xs text-white/40 mb-1.5">Source *</label>
          <input
            type="text"
            value={source}
            onChange={(e) => setSource(e.target.value)}
            className="w-full px-3 py-2 rounded-lg bg-white/5 border border-white/10 text-white text-sm placeholder-white/30 focus:border-ampora-500/50 focus:outline-none"
            placeholder="e.g. facebook, google, email"
          />
        </div>
        <div>
          <label className="block text-xs text-white/40 mb-1.5">Medium</label>
          <input
            type="text"
            value={medium}
            onChange={(e) => setMedium(e.target.value)}
            className="w-full px-3 py-2 rounded-lg bg-white/5 border border-white/10 text-white text-sm placeholder-white/30 focus:border-ampora-500/50 focus:outline-none"
            placeholder="e.g. cpc, email, social"
          />
        </div>
      </div>

      {/* Generated URL */}
      {generatedUrl && (
        <div className="mt-4">
          <label className="block text-xs text-white/40 mb-1.5">Generated Link</label>
          <div className="flex items-center gap-2">
            <div className="flex-1 px-3 py-2.5 rounded-lg bg-black/50 border border-white/10 text-ampora-300 text-sm font-mono break-all">
              {generatedUrl}
            </div>
            <button
              onClick={copyToClipboard}
              className="flex-shrink-0 p-2.5 rounded-lg bg-ampora-500/20 border border-ampora-500/30 hover:bg-ampora-500/30 transition-colors"
              title="Copy to clipboard"
            >
              {copied ? (
                <Check className="w-4 h-4 text-emerald-400" />
              ) : (
                <Copy className="w-4 h-4 text-ampora-300" />
              )}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
