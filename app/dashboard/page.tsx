"use client";

import { useState, useEffect, useCallback } from "react";
import { useSession } from "next-auth/react";
import { Eye, Users, Activity, Download, AlertCircle } from "lucide-react";
import { DashboardHeader } from "@/components/dashboard/DashboardHeader";
import { MetricCard } from "@/components/dashboard/MetricCard";
import { TrafficChart } from "@/components/dashboard/TrafficChart";
import { SourcesChart } from "@/components/dashboard/SourcesChart";
import { BlogTable } from "@/components/dashboard/BlogTable";

interface AnalyticsData {
  overview: {
    pageViews: number;
    visitors: number;
    sessions: number;
    bounceRate: number;
    avgSessionDuration: number;
    newUsers: number;
    dailyData: Array<{
      date: string;
      pageViews: number;
      visitors: number;
    }>;
  };
  sources: Array<{
    source: string;
    sessions: number;
    percentage: number;
  }>;
}

interface BlogData {
  posts: Array<{
    path: string;
    title: string;
    pageViews: number;
    avgDuration: number;
    engagementRate: number;
  }>;
}

interface DownloadData {
  totalDownloads: number;
  lastUpdated: string;
  error?: string;
}

export default function DashboardPage() {
  const { data: session } = useSession();
  const [period, setPeriod] = useState("7daysAgo");
  const [analytics, setAnalytics] = useState<AnalyticsData | null>(null);
  const [blog, setBlog] = useState<BlogData | null>(null);
  const [downloads, setDownloads] = useState<DownloadData | null>(null);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchData = useCallback(async (isRefresh = false) => {
    if (isRefresh) {
      setRefreshing(true);
    } else {
      setLoading(true);
    }
    setError(null);

    try {
      const [analyticsRes, blogRes, downloadsRes] = await Promise.all([
        fetch(`/api/analytics?period=${period}`),
        fetch(`/api/analytics/blog?period=30daysAgo`),
        fetch(`/api/analytics/downloads`),
      ]);

      if (analyticsRes.ok) {
        const data = await analyticsRes.json();
        setAnalytics(data);
      } else {
        const errData = await analyticsRes.json();
        setError(errData.error || "Failed to load analytics");
      }

      if (blogRes.ok) {
        const data = await blogRes.json();
        setBlog(data);
      }

      if (downloadsRes.ok) {
        const data = await downloadsRes.json();
        setDownloads(data);
      }
    } catch (err) {
      setError("Failed to connect to analytics service");
      console.error("Dashboard fetch error:", err);
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  }, [period]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  function handleRefresh() {
    fetchData(true);
  }

  function handlePeriodChange(newPeriod: string) {
    setPeriod(newPeriod);
  }

  function formatNumber(num: number): string {
    if (num >= 1000000) {
      return (num / 1000000).toFixed(1) + "M";
    }
    if (num >= 1000) {
      return (num / 1000).toFixed(1) + "K";
    }
    return num.toLocaleString();
  }

  function formatBounceRate(rate: number): string {
    return (rate * 100).toFixed(1) + "%";
  }

  return (
    <main className="max-w-7xl mx-auto px-6 py-8">
      <DashboardHeader
        period={period}
        onPeriodChange={handlePeriodChange}
        onRefresh={handleRefresh}
        refreshing={refreshing}
        userEmail={session?.user?.email}
      />

      {/* Error Banner */}
      {error && (
        <div className="mb-6 flex items-center gap-3 p-4 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400">
          <AlertCircle className="w-5 h-5 flex-shrink-0" />
          <div>
            <p className="font-medium">{error}</p>
            <p className="text-sm text-amber-400/70 mt-0.5">
              Make sure GA4 API credentials are configured in environment variables
            </p>
          </div>
        </div>
      )}

      {/* Metric Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <MetricCard
          title="Page Views"
          value={analytics ? formatNumber(analytics.overview.pageViews) : "—"}
          icon={Eye}
          loading={loading}
        />
        <MetricCard
          title="Unique Visitors"
          value={analytics ? formatNumber(analytics.overview.visitors) : "—"}
          icon={Users}
          loading={loading}
        />
        <MetricCard
          title="Bounce Rate"
          value={analytics ? formatBounceRate(analytics.overview.bounceRate) : "—"}
          icon={Activity}
          loading={loading}
        />
        <MetricCard
          title="App Downloads"
          value={downloads?.totalDownloads ? formatNumber(downloads.totalDownloads) : "—"}
          icon={Download}
          loading={loading}
          subtitle={downloads?.error ? "Not configured" : undefined}
        />
      </div>

      {/* Charts Row */}
      <div className="grid lg:grid-cols-2 gap-6 mb-8">
        <TrafficChart
          data={analytics?.overview.dailyData || []}
          loading={loading}
        />
        <SourcesChart data={analytics?.sources || []} loading={loading} />
      </div>

      {/* Blog Performance */}
      <BlogTable posts={blog?.posts || []} loading={loading} />

      {/* Footer */}
      <footer className="mt-12 pt-6 border-t border-white/10 text-center text-white/30 text-sm">
        <p>
          Data refreshes every 5 minutes.{" "}
          <a href="/" className="text-ampora-400 hover:underline">
            Back to Ampora
          </a>
        </p>
      </footer>
    </main>
  );
}
