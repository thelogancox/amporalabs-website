"use client";

import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from "recharts";

interface TrafficSource {
  source: string;
  sessions: number;
  percentage: number;
}

interface SourcesChartProps {
  data: TrafficSource[];
  loading?: boolean;
}

const COLORS = [
  "#8b5cf6", // ampora purple
  "#22d3ee", // cyan
  "#f59e0b", // amber
  "#10b981", // emerald
  "#ef4444", // red
  "#6366f1", // indigo
  "#ec4899", // pink
  "#14b8a6", // teal
];

export function SourcesChart({ data, loading }: SourcesChartProps) {
  if (loading) {
    return (
      <div className="glass rounded-2xl p-6 border border-white/5">
        <div className="h-6 w-40 bg-white/5 rounded animate-pulse mb-6" />
        <div className="h-[300px] bg-white/5 rounded animate-pulse" />
      </div>
    );
  }

  // Format source names for display
  const formattedData = data.map((d) => ({
    ...d,
    source: d.source === "(direct)" ? "Direct" : d.source,
  }));

  return (
    <div className="glass rounded-2xl p-6 border border-white/5">
      <h3 className="text-lg font-display font-semibold text-white mb-6">
        Traffic Sources
      </h3>
      <div className="h-[300px]">
        {data.length === 0 ? (
          <div className="h-full flex items-center justify-center text-white/40">
            No traffic data available
          </div>
        ) : (
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={formattedData}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={100}
                paddingAngle={2}
                dataKey="sessions"
                nameKey="source"
              >
                {formattedData.map((_, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
              <Tooltip
                contentStyle={{
                  backgroundColor: "rgba(0,0,0,0.9)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  borderRadius: "8px",
                  fontSize: "14px",
                }}
                formatter={(value) => [`${value} sessions`]}
              />
              <Legend
                layout="vertical"
                verticalAlign="middle"
                align="right"
                wrapperStyle={{ fontSize: "12px" }}
                formatter={(value) => (
                  <span style={{ color: "rgba(255,255,255,0.7)" }}>{value}</span>
                )}
              />
            </PieChart>
          </ResponsiveContainer>
        )}
      </div>
    </div>
  );
}
