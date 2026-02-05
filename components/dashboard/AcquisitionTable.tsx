"use client";

import { ArrowDownRight, ArrowUpRight, ExternalLink } from "lucide-react";

interface SourceMediumData {
  source: string;
  medium: string;
  sessions: number;
  users: number;
  newUsers: number;
  bounceRate: number;
  percentage: number;
}

interface AcquisitionTableProps {
  data: SourceMediumData[];
  loading?: boolean;
}

const MEDIUM_LABELS: Record<string, { label: string; color: string }> = {
  organic: { label: "Organic", color: "bg-emerald-500/20 text-emerald-400" },
  cpc: { label: "Paid", color: "bg-amber-500/20 text-amber-400" },
  paid: { label: "Paid", color: "bg-amber-500/20 text-amber-400" },
  social: { label: "Social", color: "bg-blue-500/20 text-blue-400" },
  email: { label: "Email", color: "bg-purple-500/20 text-purple-400" },
  referral: { label: "Referral", color: "bg-cyan-500/20 text-cyan-400" },
  "(none)": { label: "Direct", color: "bg-white/10 text-white/60" },
  display: { label: "Display", color: "bg-rose-500/20 text-rose-400" },
  video: { label: "Video", color: "bg-pink-500/20 text-pink-400" },
};

function getMediumBadge(medium: string) {
  const config = MEDIUM_LABELS[medium.toLowerCase()] || { label: medium, color: "bg-white/10 text-white/60" };
  return config;
}

function formatSource(source: string): string {
  if (source === "(direct)") return "Direct";
  return source.charAt(0).toUpperCase() + source.slice(1);
}

export function AcquisitionTable({ data, loading }: AcquisitionTableProps) {
  if (loading) {
    return (
      <div className="glass rounded-2xl p-6 border border-white/5">
        <div className="h-6 w-48 bg-white/5 rounded animate-pulse mb-6" />
        <div className="space-y-4">
          {[1, 2, 3, 4, 5].map((i) => (
            <div key={i} className="h-12 bg-white/5 rounded animate-pulse" />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="glass rounded-2xl p-6 border border-white/5">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-display font-semibold text-white">
          Traffic Acquisition
        </h3>
        <span className="text-white/40 text-sm">Source / Medium</span>
      </div>

      {data.length === 0 ? (
        <div className="text-center py-8 text-white/40">
          <ExternalLink className="w-12 h-12 mx-auto mb-3 opacity-50" />
          <p>No acquisition data available yet</p>
          <p className="text-sm mt-1">Use UTM links to track your campaigns</p>
        </div>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="text-left text-white/50 text-sm border-b border-white/10">
                <th className="pb-3 font-medium">Source</th>
                <th className="pb-3 font-medium">Medium</th>
                <th className="pb-3 font-medium text-right">Sessions</th>
                <th className="pb-3 font-medium text-right hidden sm:table-cell">Users</th>
                <th className="pb-3 font-medium text-right hidden md:table-cell">New</th>
                <th className="pb-3 font-medium text-right hidden lg:table-cell">Bounce</th>
                <th className="pb-3 font-medium text-right">Share</th>
              </tr>
            </thead>
            <tbody>
              {data.map((row, i) => {
                const badge = getMediumBadge(row.medium);
                return (
                  <tr key={`${row.source}-${row.medium}-${i}`} className="border-b border-white/5 last:border-0">
                    <td className="py-3">
                      <span className="text-white font-medium text-sm">
                        {formatSource(row.source)}
                      </span>
                    </td>
                    <td className="py-3">
                      <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${badge.color}`}>
                        {badge.label}
                      </span>
                    </td>
                    <td className="py-3 text-right text-white font-medium text-sm">
                      {row.sessions.toLocaleString()}
                    </td>
                    <td className="py-3 text-right text-white/70 text-sm hidden sm:table-cell">
                      {row.users.toLocaleString()}
                    </td>
                    <td className="py-3 text-right text-white/70 text-sm hidden md:table-cell">
                      {row.newUsers.toLocaleString()}
                    </td>
                    <td className="py-3 text-right hidden lg:table-cell">
                      <span className={`text-sm ${row.bounceRate > 0.6 ? "text-red-400" : row.bounceRate > 0.4 ? "text-amber-400" : "text-emerald-400"}`}>
                        {(row.bounceRate * 100).toFixed(1)}%
                      </span>
                    </td>
                    <td className="py-3 text-right">
                      <div className="flex items-center justify-end gap-1">
                        <div className="w-16 h-1.5 rounded-full bg-white/5 overflow-hidden hidden sm:block">
                          <div
                            className="h-full rounded-full bg-ampora-500"
                            style={{ width: `${row.percentage}%` }}
                          />
                        </div>
                        <span className="text-white/50 text-xs w-10 text-right">
                          {row.percentage.toFixed(1)}%
                        </span>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
