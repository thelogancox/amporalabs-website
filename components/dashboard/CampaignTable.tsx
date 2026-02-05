"use client";

import { Megaphone } from "lucide-react";

interface CampaignData {
  source: string;
  medium: string;
  campaign: string;
  sessions: number;
  users: number;
  bounceRate: number;
  engagementRate: number;
}

interface CampaignTableProps {
  data: CampaignData[];
  loading?: boolean;
}

export function CampaignTable({ data, loading }: CampaignTableProps) {
  if (loading) {
    return (
      <div className="glass rounded-2xl p-6 border border-white/5">
        <div className="h-6 w-48 bg-white/5 rounded animate-pulse mb-6" />
        <div className="space-y-4">
          {[1, 2, 3].map((i) => (
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
          Campaign Performance
        </h3>
        <span className="text-white/40 text-sm">UTM campaigns</span>
      </div>

      {data.length === 0 ? (
        <div className="text-center py-8 text-white/40">
          <Megaphone className="w-12 h-12 mx-auto mb-3 opacity-50" />
          <p>No campaign data yet</p>
          <p className="text-sm mt-1 max-w-xs mx-auto">
            Use the UTM Link Builder below to create tracked links for your ads, emails, and social posts
          </p>
        </div>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="text-left text-white/50 text-sm border-b border-white/10">
                <th className="pb-3 font-medium">Campaign</th>
                <th className="pb-3 font-medium hidden sm:table-cell">Source / Medium</th>
                <th className="pb-3 font-medium text-right">Sessions</th>
                <th className="pb-3 font-medium text-right hidden md:table-cell">Users</th>
                <th className="pb-3 font-medium text-right hidden lg:table-cell">Engagement</th>
              </tr>
            </thead>
            <tbody>
              {data.map((row, i) => (
                <tr key={`${row.campaign}-${row.source}-${i}`} className="border-b border-white/5 last:border-0">
                  <td className="py-3">
                    <span className="text-white font-medium text-sm">{row.campaign}</span>
                  </td>
                  <td className="py-3 hidden sm:table-cell">
                    <span className="text-white/50 text-sm">
                      {row.source} / {row.medium}
                    </span>
                  </td>
                  <td className="py-3 text-right text-white font-medium text-sm">
                    {row.sessions.toLocaleString()}
                  </td>
                  <td className="py-3 text-right text-white/70 text-sm hidden md:table-cell">
                    {row.users.toLocaleString()}
                  </td>
                  <td className="py-3 text-right hidden lg:table-cell">
                    <span
                      className={`px-2 py-0.5 rounded-full text-xs font-medium ${
                        row.engagementRate >= 0.6
                          ? "bg-emerald-500/20 text-emerald-400"
                          : row.engagementRate >= 0.4
                          ? "bg-amber-500/20 text-amber-400"
                          : "bg-white/10 text-white/60"
                      }`}
                    >
                      {(row.engagementRate * 100).toFixed(0)}%
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
