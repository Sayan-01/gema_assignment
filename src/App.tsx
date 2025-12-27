import { Calendar, CheckCircle2, Globe, House, Languages, Mail, ThumbsUp } from "lucide-react";
import React, { useEffect, useState } from "react";
import { FeedbackSection } from "./_components/FeedbackSection";
import { HeroScore } from "./_components/HeroScore";
import { ScoreStats } from "./_components/ScoreStats";
import { TabNavigation } from "./_components/TabNavigation";
import { demoData, type Candidate } from "./data/demo";

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState("Speechace");
  const [data, setData] = useState<Candidate | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setData(demoData);
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    console.log(activeTab);
  }, [activeTab]);

  if (!data) {
    return (
      <div className="min-h-screen bg-[#050510] flex items-center justify-center w-full">
        <div className="flex flex-col items-center gap-4">
          <div className="w-12 h-12 border-4 border-purple-500/20 border-t-purple-500 rounded-full animate-spin" />
          <p className="text-slate-400 text-sm font-medium animate-pulse">Generating your report...</p>
        </div>
      </div>
    );
  }

  const testData = data.tests[activeTab];

  const scores = {
    overall: testData.scores.overall,
    pronunciation: testData.scores.pronunciation,
    fluency: testData.scores.fluency,
    vocabulary: testData.scores.vocabulary,
    grammar: testData.scores.grammar,
    max: testData.scale,
  };

  return (
    <div className="min-h-screen bg-[#050510] relative overflow-hidden text-slate-200 selection:bg-purple-500/30 pb-20 w-full">
      <div className="absolute top-0 left-0 w-full h-full bg-grid pointer-events-none opacity-40" />
      <div className="absolute -top-[10%] -left-[10%] w-[50%] h-[50%] bg-purple-900/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-[20%] -right-[10%] w-[40%] h-[40%] bg-blue-900/10 rounded-full blur-[100px] pointer-events-none" />

      {/* Navigation Bar */}
      <nav className="max-w-7xl mx-auto z-10 border-b border-white/10 glass px-8 py-4 flex items-center justify-between sticky top-0 backdrop-blur-xl">
        <div className="flex items-center gap-3 text-xl">Speechace Speaking Tests Report</div>
        <div className="hidden md:flex items-center text-sm font-medium text-slate-400">
          <div className="px-4 border-">
            <Languages size={18} />
          </div>
          <div className="px-4 border-l">
            <ThumbsUp size={18} />
          </div>
          <div className="px-4 border-l">
            <House size={18} />
          </div>
          <div className="px-4 border-l">
            <Mail size={18} />
          </div>
        </div>
      </nav>

      <main className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header Profile Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-4">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              Analysis Finalized
            </div>
            <h1 className="text-5xl font-black text-white mb-2 tracking-tight">{data.name}</h1>
            <div className="flex flex-wrap items-center gap-4 text-slate-400 text-sm">
              <div className="flex items-center gap-2">
                <Calendar
                  size={14}
                  className="text-purple-400"
                />
                <span>{data.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <Globe
                  size={14}
                  className="text-blue-400"
                />
                <span>{data.language}</span>
              </div>
              
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="glass-card px-6 py-4 rounded-2xl flex flex-col items-center justify-center min-w-[140px] border-emerald-500/20">
              <span className="text-xs text-slate-500 uppercase tracking-widest mb-1 font-bold">Status</span>
              <span className="text-lg font-bold text-emerald-400 flex items-center gap-2">
                <CheckCircle2 size={18} /> {data.status}
              </span>
            </div>
          </div>
        </div>

        {/* Dashboard Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Column: Hero & Skill Grid */}
          <div className="lg:col-span-8 space-y-8">
            <TabNavigation
              activeTab={activeTab}
              onTabChange={setActiveTab}
            />

            <HeroScore
              score={scores.overall}
              maxScore={scores.max}
              label="Overall Proficiency"
            />
            {/* Detailed Feedback Section */}
            <div className="mt-16">
              <FeedbackSection scores={scores} />
            </div>
          </div>

          {/* Right Column: Sidebar Metrics */}
          <div className="lg:col-span-4 space-y-8">
            <div className="grid grid-cols-1  gap-4">
              <ScoreStats
                title="Pronunciation"
                score={scores.pronunciation}
                max={scores.max}
                color="from-blue-500 to-indigo-500"
                description="Clarity of sounds and accent."
              />
              <ScoreStats
                title="Fluency"
                score={scores.fluency}
                max={scores.max}
                color="from-emerald-500 to-teal-500"
                description="Pacing  management."
              />
              <ScoreStats
                title="Vocabulary"
                score={scores.vocabulary}
                max={scores.max}
                color="from-orange-500 to-rose-500"
                description="Lexical appropriateness."
              />
              <ScoreStats
                title="Grammar"
                score={scores.grammar}
                max={scores.max}
                color="from-purple-500 to-fuchsia-500"
                description="Structural accuracy and variety."
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default App;
