"use client";

import { Monitor, Smartphone, Tablet } from "lucide-react";

interface DeviceData {
  device: string;
  sessions: number;
  percentage: number;
}

interface DeviceChartProps {
  data: DeviceData[];
  loading?: boolean;
}

const DEVICE_CONFIG: Record<string, { icon: typeof Monitor; color: string; bg: string }> = {
  desktop: { icon: Monitor, color: "text-purple-400", bg: "bg-purple-500" },
  mobile: { icon: Smartphone, color: "text-cyan-400", bg: "bg-cyan-500" },
  tablet: { icon: Tablet, color: "text-amber-400", bg: "bg-amber-500" },
};

export function DeviceChart({ data, loading }: DeviceChartProps) {
  if (loading) {
    return (
      <div className="glass rounded-2xl p-6 border border-white/5">
        <div className="h-6 w-40 bg-white/5 rounded animate-pulse mb-6" />
        <div className="space-y-6">
          {[1, 2, 3].map((i) => (
            <div key={i} className="h-8 bg-white/5 rounded animate-pulse" />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="glass rounded-2xl p-6 border border-white/5">
      <h3 className="text-lg font-display font-semibold text-white mb-6">
        Device Breakdown
      </h3>

      {data.length === 0 ? (
        <div className="text-center py-8 text-white/40">
          <Monitor className="w-12 h-12 mx-auto mb-3 opacity-50" />
          <p>No device data available</p>
        </div>
      ) : (
        <div className="space-y-5">
          {data.map((device) => {
            const config = DEVICE_CONFIG[device.device.toLowerCase()] || DEVICE_CONFIG.desktop;
            const Icon = config.icon;
            return (
              <div key={device.device}>
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2.5">
                    <Icon className={`w-4 h-4 ${config.color}`} />
                    <span className="text-white text-sm font-medium capitalize">
                      {device.device}
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-white/50 text-sm">
                      {device.sessions.toLocaleString()}
                    </span>
                    <span className="text-white font-medium text-sm w-12 text-right">
                      {device.percentage.toFixed(1)}%
                    </span>
                  </div>
                </div>
                <div className="h-2 rounded-full bg-white/5 overflow-hidden">
                  <div
                    className={`h-full rounded-full ${config.bg} transition-all duration-500`}
                    style={{ width: `${device.percentage}%` }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
