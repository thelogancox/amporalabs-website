"use client";

import { LucideIcon } from "lucide-react";

interface MetricCardProps {
  title: string;
  value: string | number;
  change?: number;
  icon: LucideIcon;
  trend?: "up" | "down" | "neutral";
  loading?: boolean;
  subtitle?: string;
}

export function MetricCard({
  title,
  value,
  change,
  icon: Icon,
  trend,
  loading,
  subtitle,
}: MetricCardProps) {
  if (loading) {
    return (
      <div className="glass rounded-2xl p-6 border border-white/5">
        <div className="flex items-start justify-between mb-4">
          <div className="w-12 h-12 rounded-xl bg-white/5 animate-pulse" />
          <div className="w-12 h-4 bg-white/5 rounded animate-pulse" />
        </div>
        <div className="h-4 w-20 bg-white/5 rounded animate-pulse mb-2" />
        <div className="h-8 w-24 bg-white/5 rounded animate-pulse" />
      </div>
    );
  }

  return (
    <div className="glass rounded-2xl p-6 border border-white/5 hover:border-ampora-500/20 transition-all">
      <div className="flex items-start justify-between mb-4">
        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-ampora-500 to-ampora-700 flex items-center justify-center">
          <Icon className="w-6 h-6 text-white" />
        </div>
        {change !== undefined && (
          <span
            className={`text-sm font-medium ${
              trend === "up"
                ? "text-emerald-400"
                : trend === "down"
                ? "text-red-400"
                : "text-white/50"
            }`}
          >
            {trend === "up" ? "+" : ""}
            {change.toFixed(1)}%
          </span>
        )}
      </div>
      <h3 className="text-white/50 text-sm mb-1">{title}</h3>
      <p className="text-3xl font-display font-bold text-white">{value}</p>
      {subtitle && <p className="text-white/40 text-xs mt-1">{subtitle}</p>}
    </div>
  );
}
