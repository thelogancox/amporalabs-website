"use client";

import { useState, useEffect, useCallback } from "react";
import { useSession } from "next-auth/react";
import { Eye, Users, Activity, Download, AlertCircle, BarChart3, UserPlus, Clock, MousePointerClick } from "lucide-react";
import { DashboardHeader } from "@/components/dashboard/DashboardHeader";
import { MetricCard } from "@/components/dashboard/MetricCard";
import { TrafficChart } from "@/components/dashboard/TrafficChart";
import { SourcesChart } from "@/components/dashboard/SourcesChart";
import { BlogTable } from "@/components/dashboard/BlogTable";
import { TopPagesTable } from "@/components/dashboard/TopPagesTable";
import { DeviceChart } from "@/components/dashboard/DeviceChart";
import { GeoTable } from "@/components/dashboard/GeoTable";
import { AppStoreClicksCard } from "@/components/dashboard/AppStoreClicksCard";

interface AnalyticsData {
  overview: {
    pageViews: number;
    visitors: number;
    sessions: number;
    bounceRate: number;
    avgSessionDuration: number;
    newUsers: number;
    previousPageViews: number;
    previousVisitors: number;
    previousSessions: number;
    previousBounceRate: number;
    previousAvgSessionDuration: number;
    previousNewUsers: number;
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
  devices: Array<{
    device: string;
    sessions: number;
    percentage: number;
  }>;
  geo: Array<{
    country: string;
    sessions: number;
    users: number;
    percentage: number;
  }>;
  realtimeUsers: number;
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

interface PagesData {
  pages: Array<{
    path: string;
    title: string;
    pageViews: number;
    avgDuration: number;
    engagementRate: number;
  }>;
}

interface ClicksData {
  totalClicks: number;
  dailyClicks: Array<{ date: string; clicks: number }>;
}

interface DownloadData {
  totalDownloads: number;
  lastUpdated: string;
  error?: string;
}

function computeChange(current: number, previous: number): { change: number; trend: "up" | "down" | "neutral" } {
  if (previous === 0) return { change: 0, trend: "neutral" };
  const change = ((current - previous) / previous) * 100;
  return {
    change: Math.abs(change),
    trend: change > 0 ? "up" : change < 0 ? "down" : "neutral",
  };
}

function formatDuration(seconds: number): string {
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return mins > 0 ? `${mins}m ${secs}s` : `${secs}s`;
}

export default function DashboardPage() {
  const { data: session } = useSession();
  const [period, setPeriod] = useState("7daysAgo");
  const [analytics, setAnalytics] = useState<AnalyticsData | null>(null);
  const [blog, setBlog] = useState<BlogData | null>(null);
  const [pages, setPages] = useState<PagesData | null>(null);
  const [clicks, setClicks] = useState<ClicksData | null>(null);
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
      const [analyticsRes, blogRes, downloadsRes, pagesRes, clicksRes] = await Promise.all([
        fetch(`/api/analytics?period=${period}`),
        fetch(`/api/analytics/blog?period=30daysAgo`),
        fetch(`/api/analytics/downloads`),
        fetch(`/api/analytics/pages?period=${period}`),
        fetch(`/api/analytics/clicks?period=${period}`),
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

      if (pagesRes.ok) {
        const data = await pagesRes.json();
        setPages(data);
      }

      if (clicksRes.ok) {
        const data = await clicksRes.json();
        setClicks(data);
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

  const o = analytics?.overview;

  const pvChange = o ? computeChange(o.pageViews, o.previousPageViews) : undefined;
  const visitorChange = o ? computeChange(o.visitors, o.previousVisitors) : undefined;
  const sessionChange = o ? computeChange(o.sessions, o.previousSessions) : undefined;
  const newUserChange = o ? computeChange(o.newUsers, o.previousNewUsers) : undefined;
  const bounceChange = o ? computeChange(o.bounceRate, o.previousBounceRate) : undefined;
  const durationChange = o ? computeChange(o.avgSessionDuration, o.previousAvgSessionDuration) : undefined;

  return (
    <main className="max-w-7xl mx-auto px-6 py-8">
      <DashboardHeader
        period={period}
        onPeriodChange={handlePeriodChange}
        onRefresh={handleRefresh}
        refreshing={refreshing}
        userEmail={session?.user?.email}
        realtimeUsers={analytics?.realtimeUsers}
        loading={loading}
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

      {/* Metric Cards - Row 1 */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
        <MetricCard
          title="Page Views"
          value={o ? formatNumber(o.pageViews) : "—"}
          icon={Eye}
          loading={loading}
          change={pvChange?.change}
          trend={pvChange?.trend}
        />
        <MetricCard
          title="Unique Visitors"
          value={o ? formatNumber(o.visitors) : "—"}
          icon={Users}
          loading={loading}
          change={visitorChange?.change}
          trend={visitorChange?.trend}
        />
        <MetricCard
          title="Sessions"
          value={o ? formatNumber(o.sessions) : "—"}
          icon={BarChart3}
          loading={loading}
          change={sessionChange?.change}
          trend={sessionChange?.trend}
        />
        <MetricCard
          title="New Users"
          value={o ? formatNumber(o.newUsers) : "—"}
          icon={UserPlus}
          loading={loading}
          change={newUserChange?.change}
          trend={newUserChange?.trend}
        />
      </div>

      {/* Metric Cards - Row 2 */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <MetricCard
          title="Bounce Rate"
          value={o ? formatBounceRate(o.bounceRate) : "—"}
          icon={Activity}
          loading={loading}
          change={bounceChange?.change}
          trend={bounceChange?.trend === "up" ? "down" : bounceChange?.trend === "down" ? "up" : bounceChange?.trend}
        />
        <MetricCard
          title="Avg. Duration"
          value={o ? formatDuration(o.avgSessionDuration) : "—"}
          icon={Clock}
          loading={loading}
          change={durationChange?.change}
          trend={durationChange?.trend}
        />
        <MetricCard
          title="App Store Clicks"
          value={clicks ? formatNumber(clicks.totalClicks) : "—"}
          icon={MousePointerClick}
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
      <div className="grid lg:grid-cols-2 gap-6 mb-6">
        <TrafficChart
          data={analytics?.overview.dailyData || []}
          loading={loading}
        />
        <SourcesChart data={analytics?.sources || []} loading={loading} />
      </div>

      {/* Breakdown Row */}
      <div className="grid lg:grid-cols-2 gap-6 mb-6">
        <DeviceChart data={analytics?.devices || []} loading={loading} />
        <GeoTable data={analytics?.geo || []} loading={loading} />
      </div>

      {/* App Store Clicks */}
      <div className="mb-6">
        <AppStoreClicksCard data={clicks} loading={loading} />
      </div>

      {/* Top Pages */}
      <div className="mb-6">
        <TopPagesTable pages={pages?.pages || []} loading={loading} />
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
