"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

interface DailyData {
  date: string;
  pageViews: number;
  visitors: number;
}

interface TrafficChartProps {
  data: DailyData[];
  loading?: boolean;
}

function formatDate(dateStr: string): string {
  // Format: YYYYMMDD -> MM/DD
  if (dateStr.length === 8) {
    const month = dateStr.substring(4, 6);
    const day = dateStr.substring(6, 8);
    return `${month}/${day}`;
  }
  return dateStr;
}

export function TrafficChart({ data, loading }: TrafficChartProps) {
  if (loading) {
    return (
      <div className="glass rounded-2xl p-6 border border-white/5">
        <div className="h-6 w-40 bg-white/5 rounded animate-pulse mb-6" />
        <div className="h-[300px] bg-white/5 rounded animate-pulse" />
      </div>
    );
  }

  const formattedData = data.map((d) => ({
    ...d,
    date: formatDate(d.date),
  }));

  return (
    <div className="glass rounded-2xl p-6 border border-white/5">
      <h3 className="text-lg font-display font-semibold text-white mb-6">
        Traffic Over Time
      </h3>
      <div className="h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={formattedData}>
            <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
            <XAxis
              dataKey="date"
              stroke="rgba(255,255,255,0.5)"
              fontSize={12}
              tickLine={false}
            />
            <YAxis
              stroke="rgba(255,255,255,0.5)"
              fontSize={12}
              tickLine={false}
              axisLine={false}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: "rgba(0,0,0,0.9)",
                border: "1px solid rgba(255,255,255,0.1)",
                borderRadius: "8px",
                fontSize: "14px",
              }}
              labelStyle={{ color: "rgba(255,255,255,0.7)" }}
            />
            <Legend
              wrapperStyle={{ fontSize: "12px", color: "rgba(255,255,255,0.7)" }}
            />
            <Line
              type="monotone"
              dataKey="pageViews"
              name="Page Views"
              stroke="#8b5cf6"
              strokeWidth={2}
              dot={false}
              activeDot={{ r: 4, fill: "#8b5cf6" }}
            />
            <Line
              type="monotone"
              dataKey="visitors"
              name="Visitors"
              stroke="#22d3ee"
              strokeWidth={2}
              dot={false}
              activeDot={{ r: 4, fill: "#22d3ee" }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
