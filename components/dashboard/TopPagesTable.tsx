"use client";

import { Globe, TrendingUp, Clock } from "lucide-react";

interface PageData {
  path: string;
  title: string;
  pageViews: number;
  avgDuration: number;
  engagementRate: number;
}

interface TopPagesTableProps {
  pages: PageData[];
  loading?: boolean;
}

function formatDuration(seconds: number): string {
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return mins > 0 ? `${mins}m ${secs}s` : `${secs}s`;
}

export function TopPagesTable({ pages, loading }: TopPagesTableProps) {
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
      <h3 className="text-lg font-display font-semibold text-white mb-6">
        Top Pages
      </h3>

      {pages.length === 0 ? (
        <div className="text-center py-8 text-white/40">
          <Globe className="w-12 h-12 mx-auto mb-3 opacity-50" />
          <p>No page data available yet</p>
        </div>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="text-left text-white/50 text-sm border-b border-white/10">
                <th className="pb-3 font-medium">Page</th>
                <th className="pb-3 font-medium text-right">Views</th>
                <th className="pb-3 font-medium text-right hidden sm:table-cell">Avg. Time</th>
                <th className="pb-3 font-medium text-right hidden md:table-cell">Engagement</th>
              </tr>
            </thead>
            <tbody>
              {pages.map((page, index) => (
                <tr key={page.path} className="border-b border-white/5 last:border-0">
                  <td className="py-4">
                    <div className="flex items-center gap-3">
                      <span className="text-white/30 text-sm w-6">{index + 1}</span>
                      <div className="min-w-0">
                        <p className="text-white font-medium truncate max-w-[300px]">
                          {page.title.replace(/ \| .*$/, '').replace(/ - .*$/, '')}
                        </p>
                        <p className="text-white/40 text-xs truncate">{page.path}</p>
                      </div>
                    </div>
                  </td>
                  <td className="py-4 text-right">
                    <div className="flex items-center justify-end gap-1.5">
                      <TrendingUp className="w-3.5 h-3.5 text-ampora-400" />
                      <span className="text-white font-medium">{page.pageViews.toLocaleString()}</span>
                    </div>
                  </td>
                  <td className="py-4 text-right hidden sm:table-cell">
                    <div className="flex items-center justify-end gap-1.5 text-white/70">
                      <Clock className="w-3.5 h-3.5" />
                      <span>{formatDuration(page.avgDuration)}</span>
                    </div>
                  </td>
                  <td className="py-4 text-right hidden md:table-cell">
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-medium ${
                        page.engagementRate >= 0.6
                          ? "bg-emerald-500/20 text-emerald-400"
                          : page.engagementRate >= 0.4
                          ? "bg-amber-500/20 text-amber-400"
                          : "bg-white/10 text-white/60"
                      }`}
                    >
                      {(page.engagementRate * 100).toFixed(0)}%
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
