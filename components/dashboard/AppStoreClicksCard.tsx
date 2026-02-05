"use client";

import { MousePointerClick } from "lucide-react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

interface AppStoreClicksCardProps {
  data: {
    totalClicks: number;
    dailyClicks: Array<{ date: string; clicks: number }>;
  } | null;
  loading?: boolean;
}

function formatDate(dateStr: string): string {
  if (dateStr.length === 8) {
    const month = dateStr.substring(4, 6);
    const day = dateStr.substring(6, 8);
    return `${month}/${day}`;
  }
  return dateStr;
}

export function AppStoreClicksCard({ data, loading }: AppStoreClicksCardProps) {
  if (loading) {
    return (
      <div className="glass rounded-2xl p-6 border border-white/5">
        <div className="h-6 w-40 bg-white/5 rounded animate-pulse mb-4" />
        <div className="h-[120px] bg-white/5 rounded animate-pulse" />
      </div>
    );
  }

  const formattedData = (data?.dailyClicks || []).map((d) => ({
    ...d,
    date: formatDate(d.date),
  }));

  return (
    <div className="glass rounded-2xl p-6 border border-white/5">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-display font-semibold text-white">
          App Store Clicks
        </h3>
        <div className="flex items-center gap-2">
          <MousePointerClick className="w-5 h-5 text-ampora-400" />
          <span className="text-2xl font-display font-bold text-white">
            {data?.totalClicks?.toLocaleString() || 0}
          </span>
          <span className="text-white/40 text-sm">total</span>
        </div>
      </div>

      {formattedData.length === 0 ? (
        <div className="text-center py-6 text-white/40">
          <p className="text-sm">No click data yet. Clicks will appear once visitors interact with App Store buttons.</p>
        </div>
      ) : (
        <div className="h-[120px]">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={formattedData}>
              <defs>
                <linearGradient id="clickGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#8b5cf6" stopOpacity={0.3} />
                  <stop offset="100%" stopColor="#8b5cf6" stopOpacity={0} />
                </linearGradient>
              </defs>
              <XAxis
                dataKey="date"
                stroke="rgba(255,255,255,0.3)"
                fontSize={11}
                tickLine={false}
                axisLine={false}
              />
              <YAxis hide />
              <Tooltip
                contentStyle={{
                  backgroundColor: "rgba(0,0,0,0.9)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  borderRadius: "8px",
                  fontSize: "13px",
                }}
                labelStyle={{ color: "rgba(255,255,255,0.7)" }}
                formatter={(value) => [`${value} clicks`]}
              />
              <Area
                type="monotone"
                dataKey="clicks"
                stroke="#8b5cf6"
                strokeWidth={2}
                fill="url(#clickGradient)"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      )}
    </div>
  );
}
