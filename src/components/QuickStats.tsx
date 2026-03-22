import { FlatIcon } from "./FlatIcon";
import { ViewMode } from "../types";

interface QuickStatsProps {
  commandCount: number;
  templateCount: number;
  guideCount: number;
  practiceCount: number;
  versionCount: number;
  favoriteCount: number;
  scenarioCount: number;
  onViewChange: (view: ViewMode) => void;
}

export function QuickStats({
  commandCount,
  templateCount,
  guideCount,
  practiceCount,
  versionCount,
  favoriteCount,
  scenarioCount,
  onViewChange,
}: QuickStatsProps) {
  const stats = [
    {
      label: "Commands",
      value: commandCount,
      type: "commands" as const,
      color: "text-brand-600 dark:text-brand-400",
      bg: "bg-brand-50 dark:bg-brand-900/20",
      border: "hover:border-brand-500",
      view: "commands" as ViewMode,
    },
    {
      label: "Templates",
      value: templateCount,
      type: "templates" as const,
      color: "text-emerald-600 dark:text-emerald-400",
      bg: "bg-emerald-50 dark:bg-emerald-900/20",
      border: "hover:border-emerald-500",
      view: "templates" as ViewMode,
    },
    {
      label: "Guides",
      value: guideCount,
      type: "troubleshoot" as const,
      color: "text-rose-600 dark:text-rose-400",
      bg: "bg-rose-50 dark:bg-rose-900/20",
      border: "hover:border-rose-500",
      view: "troubleshooting" as ViewMode,
    },
    {
      label: "Practices",
      value: practiceCount,
      type: "practices" as const,
      color: "text-amber-600 dark:text-amber-400",
      bg: "bg-amber-50 dark:bg-amber-900/20",
      border: "hover:border-amber-500",
      view: "best-practices" as ViewMode,
    },
    {
      label: "Versions",
      value: versionCount,
      type: "versions" as const,
      color: "text-purple-600 dark:text-purple-400",
      bg: "bg-purple-50 dark:bg-purple-900/20",
      border: "hover:border-purple-500",
      view: "versions" as ViewMode,
    },
    {
      label: "Favorites",
      value: favoriteCount,
      type: "favorites" as const,
      color: "text-orange-600 dark:text-orange-400",
      bg: "bg-orange-50 dark:bg-orange-900/20",
      border: "hover:border-orange-500",
      view: "favorites" as ViewMode,
    },
    {
      label: "Scenarios",
      value: scenarioCount,
      type: "scenarios" as const,
      color: "text-blue-600 dark:text-blue-400",
      bg: "bg-blue-50 dark:bg-blue-900/20",
      border: "hover:border-blue-500",
      view: "scenarios" as ViewMode,
    },
    {
      label: "Quiz Mode",
      value: "Start",
      type: "quiz" as const,
      color: "text-pink-600 dark:text-pink-400",
      bg: "bg-pink-50 dark:bg-pink-900/20",
      border: "hover:border-pink-500",
      view: "quiz" as ViewMode,
    },
    {
      label: "Console",
      value: "Practice",
      type: "console" as const,
      color: "text-slate-600 dark:text-slate-400",
      bg: "bg-slate-50 dark:bg-slate-900/20",
      border: "hover:border-slate-500",
      view: "console-practice" as ViewMode,
    },
    {
      label: "Builder",
      value: "YAML",
      type: "builder" as const,
      color: "text-indigo-600 dark:text-indigo-400",
      bg: "bg-indigo-50 dark:bg-indigo-900/20",
      border: "hover:border-indigo-500",
      view: "yaml-builder" as ViewMode,
    },
    {
      label: "Exam",
      value: "Sim",
      type: "exam" as const,
      color: "text-rose-600 dark:text-rose-400",
      bg: "bg-rose-50 dark:bg-rose-900/20",
      border: "hover:border-rose-500",
      view: "exam" as ViewMode,
    },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
      {stats.map((stat) => (
        <button
          key={stat.label}
          onClick={() => onViewChange(stat.view)}
          className={`bg-white dark:bg-gray-800 rounded-xl p-4 shadow-sm border border-slate-200 dark:border-slate-700 transition-all duration-200 hover:shadow-md hover:-translate-y-1 group ${stat.border}`}
        >
          <div
            className={`inline-flex p-3 rounded-lg ${stat.bg} ${stat.color} mb-3 transition-transform group-hover:scale-110`}
          >
            <FlatIcon type={stat.type} className="w-6 h-6" />
          </div>
          <div className="text-2xl font-bold text-slate-900 dark:text-white">
            {stat.value.toLocaleString()}
          </div>
          <div className="text-sm text-slate-500 dark:text-slate-400 font-medium">
            {stat.label}
          </div>
        </button>
      ))}
    </div>
  );
}
