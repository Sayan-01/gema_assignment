import React from "react";
import { getFeedbackForScore } from "../utils/feedbackEngine";

interface HeroScoreProps {
  score: number;
  maxScore: number;
  label: string;
}

export const HeroScore: React.FC<HeroScoreProps> = ({ score, maxScore, label }) => {
  const percentage = (score / maxScore) * 100;
  const feedback = getFeedbackForScore(score);

  return (
    <div className="relative group">
      <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-blue-600 rounded-[2rem] blur-2xl opacity-10 group-hover:opacity-20 transition duration-1000"></div>
      <div className="relative glass p-8 md:p-12 rounded-[2rem] flex flex-col md:flex-row items-center gap-12 border border-white/10">
        {/* Progress Circle Wrapper */}
        <div className="relative w-48 h-48 flex items-center justify-center">
          <svg className="w-full h-full transform -rotate-90 drop-shadow-[0_0_15px_rgba(139,92,246,0.3)]">
            <circle
              cx="96"
              cy="96"
              r="88"
              stroke="rgba(255,255,255,0.03)"
              strokeWidth="14"
              fill="transparent"
            />
            <circle
              cx="96"
              cy="96"
              r="88"
              stroke="url(#heroGradient)"
              strokeWidth="14"
              fill="transparent"
              strokeDasharray={553}
              strokeDashoffset={553 - (553 * percentage) / 100}
              strokeLinecap="round"
              className="transition-all duration-[1500ms] ease-out"
            />
            <defs>
              <linearGradient
                id="heroGradient"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="100%"
              >
                <stop
                  offset="0%"
                  stopColor="#8b5cf6"
                />
                <stop
                  offset="100%"
                  stopColor="#3b82f6"
                />
              </linearGradient>
            </defs>
          </svg>
          <div className="absolute flex flex-col items-center">
            <span className="text-6xl font-black text-white tracking-tighter">{score.toFixed(1)}</span>
            <span className="text-[10px] text-slate-500 font-black uppercase tracking-[0.2em]">MAX {maxScore}</span>
          </div>
        </div>

        <div className="flex-1 text-center md:text-left">
          <div className="inline-block px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-4">Performance Summary</div>
          <h2 className="text-4xl font-black text-white mb-4 tracking-tight">{label}</h2>
          <p className="text-slate-400 text-lg leading-relaxed max-w-xl">{feedback.detail}</p>

          <div className="mt-8 flex flex-wrap justify-center md:justify-start gap-3">
            <div className={`px-4 py-2 rounded-xl ${feedback.bg} border border-white/10 text-sm font-bold ${feedback.color} shadow-lg shadow-black/20`}>{feedback.text}</div>
            <div className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-sm font-bold text-white shadow-lg shadow-black/20">
              {score >= 7 ? "Advanced" : score >= 5 ? "Intermediate" : "Beginner"} Proficiency
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
