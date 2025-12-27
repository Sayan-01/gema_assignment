import React from "react";
import { Quote, Sparkles } from "lucide-react";
import { getSpecificFeedback, getFeedbackForScore } from "../utils/feedbackEngine";
import type { ScoreData } from "../data/demo";

interface FeedbackSectionProps {
  scores: ScoreData;
}

export const FeedbackSection: React.FC<FeedbackSectionProps> = ({ scores }) => {
  const feedbackItems = [
    {
      label: "Pronunciation",
      score: scores.pronunciation,
      ...getSpecificFeedback("Pronunciation", scores.pronunciation),
    },
    {
      label: "Fluency",
      score: scores.fluency,
      ...getSpecificFeedback("Fluency", scores.fluency),
    },
    {
      label: "Vocabulary",
      score: scores.vocabulary,
      ...getSpecificFeedback("vocabulary", scores.vocabulary),
    },
    {
      label: "Lexical & Grammatical",
      score: (scores.grammar),
      ...getSpecificFeedback("grammar", scores.grammar),
    },
  ];

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-3xl font-black text-white flex items-center gap-3 tracking-tight">
            <Sparkles
              className="text-yellow-400"
              size={28}
            />
            Descriptive Feedback
          </h3>
          <p className="text-slate-500 mt-1 font-medium">Detailed breakdown of your linguistic capabilities.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-1 gap-6">
        {feedbackItems.map((item, i) => (
          <div
            key={i}
            className="glass-card p-8 rounded-[2.5rem] relative border border-white/5 overflow-hidden group"
          >
            <div className={`absolute top-0 right-0 w-32 h-32 ${item.bg} blur-3xl opacity-20 -mr-16 -mt-16 group-hover:opacity-40 transition-opacity`} />
            <Quote className="absolute bottom-8 right-8 text-white/5 w-16 h-16 pointer-events-none" />

            <div className="flex items-center justify-between mb-6">
              <div className="flex flex-col">
                <h4 className="font-bold text-white/90 text-lg">{item.label}</h4>
                <div className={`h-1 w-8 rounded-full ${item.color.replace("text", "bg")} mt-1`} />
              </div>
              <div className="bg-white/5 px-3 py-1.5 rounded-2xl border border-white/10">
                <span className={`text-sm font-black ${item.color}`}>{item.score.toFixed(1)}</span>
              </div>
            </div>

            <p className="text-white/80 font-bold mb-3 leading-snug">{item.text}</p>
            <p className="text-sm leading-relaxed text-slate-400 font-medium italic">"{item.detail}"</p>
          </div>
        ))}
      </div>
    </div>
  );
};
