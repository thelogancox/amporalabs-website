"use client";

import { FileText, TrendingUp, Clock } from "lucide-react";

interface BlogPost {
  path: string;
  title: string;
  pageViews: number;
  avgDuration: number;
  engagementRate: number;
}

interface BlogTableProps {
  posts: BlogPost[];
  loading?: boolean;
}

function formatDuration(seconds: number): string {
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return mins > 0 ? `${mins}m ${secs}s` : `${secs}s`;
}

function formatPath(path: string): string {
  // Remove /blog/ prefix and trailing slash
  return path.replace(/^\/blog\//, "").replace(/\/$/, "");
}

export function BlogTable({ posts, loading }: BlogTableProps) {
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
          Top Blog Posts
        </h3>
        <span className="text-white/40 text-sm">Last 30 days</span>
      </div>

      {posts.length === 0 ? (
        <div className="text-center py-8 text-white/40">
          <FileText className="w-12 h-12 mx-auto mb-3 opacity-50" />
          <p>No blog data available yet</p>
          <p className="text-sm mt-1">Data will appear once visitors read your posts</p>
        </div>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="text-left text-white/50 text-sm border-b border-white/10">
                <th className="pb-3 font-medium">Post</th>
                <th className="pb-3 font-medium text-right">Views</th>
                <th className="pb-3 font-medium text-right hidden sm:table-cell">
                  Avg. Time
                </th>
                <th className="pb-3 font-medium text-right hidden md:table-cell">
                  Engagement
                </th>
              </tr>
            </thead>
            <tbody>
              {posts.map((post, index) => (
                <tr
                  key={post.path}
                  className="border-b border-white/5 last:border-0"
                >
                  <td className="py-4">
                    <div className="flex items-center gap-3">
                      <span className="text-white/30 text-sm w-6">
                        {index + 1}
                      </span>
                      <div className="min-w-0">
                        <p className="text-white font-medium truncate max-w-[300px]">
                          {post.title.replace(" - Ampora", "").replace(" | Ampora", "")}
                        </p>
                        <p className="text-white/40 text-xs truncate">
                          /{formatPath(post.path)}
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="py-4 text-right">
                    <div className="flex items-center justify-end gap-1.5">
                      <TrendingUp className="w-3.5 h-3.5 text-ampora-400" />
                      <span className="text-white font-medium">
                        {post.pageViews.toLocaleString()}
                      </span>
                    </div>
                  </td>
                  <td className="py-4 text-right hidden sm:table-cell">
                    <div className="flex items-center justify-end gap-1.5 text-white/70">
                      <Clock className="w-3.5 h-3.5" />
                      <span>{formatDuration(post.avgDuration)}</span>
                    </div>
                  </td>
                  <td className="py-4 text-right hidden md:table-cell">
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-medium ${
                        post.engagementRate >= 0.6
                          ? "bg-emerald-500/20 text-emerald-400"
                          : post.engagementRate >= 0.4
                          ? "bg-amber-500/20 text-amber-400"
                          : "bg-white/10 text-white/60"
                      }`}
                    >
                      {(post.engagementRate * 100).toFixed(0)}%
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
