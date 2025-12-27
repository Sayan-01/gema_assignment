import React from "react";

interface TabNavigationProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const tabs = ["Speechace", "CEFR", "IELTS", "PTE", "TOEFL", "TOEIC"];

export const TabNavigation: React.FC<TabNavigationProps> = ({ activeTab, onTabChange }) => {
  return (
    <div className="flex items-center gap-2 p-1.5 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl w-full overflow-x-auto no-scrollbar">
      {tabs.map((tab) => {
        const isActive = activeTab === tab;
        return (
          <button
            key={tab}
            onClick={() => onTabChange(tab)}
            className={`
              flex-1 min-w-[100px] px-4 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200
              ${
                isActive
                  ? "bg-gradient-to-tr from-purple-600 to-blue-600 text-white shadow-lg shadow-purple-900/40 translate-y-[-1px]"
                  : "text-slate-300 hover:text-white hover:bg-white/5 bg-gradient-to-tr from-blue-500/20 to-blue-600/20"
              }
            `}
          >
            {tab}
          </button>
        );
      })}
    </div>
  );
};
