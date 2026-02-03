"use client";

import { useRouter } from "next/navigation";
import { LogOut, RefreshCw } from "lucide-react";
import { DateRangePicker } from "./DateRangePicker";

interface DashboardHeaderProps {
  period: string;
  onPeriodChange: (period: string) => void;
  onRefresh: () => void;
  refreshing?: boolean;
}

export function DashboardHeader({
  period,
  onPeriodChange,
  onRefresh,
  refreshing,
}: DashboardHeaderProps) {
  const router = useRouter();

  async function handleLogout() {
    await fetch("/api/auth/logout", { method: "POST" });
    router.push("/dashboard/login");
    router.refresh();
  }

  return (
    <header className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
      <div>
        <h1 className="text-2xl font-display font-bold text-white">
          Ampora Dashboard
        </h1>
        <p className="text-white/50 text-sm mt-1">
          Analytics and performance metrics
        </p>
      </div>

      <div className="flex items-center gap-3">
        <button
          onClick={onRefresh}
          disabled={refreshing}
          className="p-2 rounded-lg bg-white/5 border border-white/10 hover:border-white/20 transition-colors disabled:opacity-50"
          title="Refresh data"
        >
          <RefreshCw
            className={`w-4 h-4 text-white/70 ${refreshing ? "animate-spin" : ""}`}
          />
        </button>

        <DateRangePicker value={period} onChange={onPeriodChange} />

        <button
          onClick={handleLogout}
          className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 border border-white/10 hover:border-red-500/30 hover:bg-red-500/10 transition-colors text-sm text-white/70 hover:text-red-400"
        >
          <LogOut className="w-4 h-4" />
          <span className="hidden sm:inline">Logout</span>
        </button>
      </div>
    </header>
  );
}
