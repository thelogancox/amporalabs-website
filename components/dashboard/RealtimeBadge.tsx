"use client";

interface RealtimeBadgeProps {
  count: number;
  loading?: boolean;
}

export function RealtimeBadge({ count, loading }: RealtimeBadgeProps) {
  if (loading) {
    return (
      <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10">
        <div className="w-2 h-2 rounded-full bg-white/20 animate-pulse" />
        <div className="w-16 h-3 bg-white/10 rounded animate-pulse" />
      </div>
    );
  }

  return (
    <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20">
      <div className="relative w-2 h-2">
        <div className="absolute inset-0 rounded-full bg-emerald-400 animate-ping opacity-75" />
        <div className="relative w-2 h-2 rounded-full bg-emerald-400" />
      </div>
      <span className="text-xs font-medium text-emerald-300">
        {count} active now
      </span>
    </div>
  );
}
