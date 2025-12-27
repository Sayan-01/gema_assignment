import React from "react";

interface ScoreStatsProps {
  title: string;
  score: number;
  max: number;
  color: string;
  description: string;
}

export const ScoreStats: React.FC<ScoreStatsProps> = ({ title, score, max, color, description }) => {
  const percentage = (score / max) * 100;

  return (
    <div className="glass-card p-8 rounded-3xl group border border-white/5 relative overflow-hidden">
      <div className="flex justify-between items-start mb-2">
        <div>
          <h4 className="text-white font-black text-xl mb-1 tracking-tight group-hover:text-purple-400 transition-colors">{title}</h4>
          <p className="text-xs text-slate-500 font-medium leading-relaxed max-w-[180px]">{description}</p>
        </div>
        <div className="flex flex-col items-end">
          <div className="flex items-baseline gap-1">
            <span className="text-3xl font-black text-white tracking-tighter">{score.toFixed(1)}</span>
            <span className="text-xs text-slate-600 font-bold">/ {max}</span>
          </div>
          <div className="mt-1 flex gap-0.5">
            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                className={`h-1 w-3 rounded-full ${i < Math.round(score / 1.8) ? "bg-white/40" : "bg-white/5"}`}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="relative w-full h-2 bg-white/5 rounded-full overflow-hidden mb-3">
        <div
          className={`absolute h-full rounded-full bg-gradient-to-r ${color} shadow-[0_0_15px_rgba(255,255,255,0.1)] transition-all duration-[1200ms] delay-100 ease-out`}
          style={{ width: `${percentage}%` }}
        />
      </div>

      <div className="flex justify-between text-[10px] uppercase font-black tracking-[0.2em] text-slate-600">
        <span>Elementary</span>
        <span>Advanced</span>
      </div>
    </div>
  );
};
