"use client";

import { MapPin } from "lucide-react";

interface GeoData {
  country: string;
  sessions: number;
  users: number;
  percentage: number;
}

interface GeoTableProps {
  data: GeoData[];
  loading?: boolean;
}

export function GeoTable({ data, loading }: GeoTableProps) {
  if (loading) {
    return (
      <div className="glass rounded-2xl p-6 border border-white/5">
        <div className="h-6 w-40 bg-white/5 rounded animate-pulse mb-6" />
        <div className="space-y-4">
          {[1, 2, 3, 4, 5].map((i) => (
            <div key={i} className="h-8 bg-white/5 rounded animate-pulse" />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="glass rounded-2xl p-6 border border-white/5">
      <h3 className="text-lg font-display font-semibold text-white mb-6">
        Top Countries
      </h3>

      {data.length === 0 ? (
        <div className="text-center py-8 text-white/40">
          <MapPin className="w-12 h-12 mx-auto mb-3 opacity-50" />
          <p>No geographic data available</p>
        </div>
      ) : (
        <div className="space-y-4">
          {data.map((geo) => (
            <div key={geo.country}>
              <div className="flex items-center justify-between mb-1.5">
                <span className="text-white text-sm font-medium">{geo.country}</span>
                <div className="flex items-center gap-3">
                  <span className="text-white/50 text-xs">
                    {geo.users.toLocaleString()} users
                  </span>
                  <span className="text-white font-medium text-sm w-12 text-right">
                    {geo.percentage.toFixed(1)}%
                  </span>
                </div>
              </div>
              <div className="h-1.5 rounded-full bg-white/5 overflow-hidden">
                <div
                  className="h-full rounded-full bg-ampora-500 transition-all duration-500"
                  style={{ width: `${geo.percentage}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
