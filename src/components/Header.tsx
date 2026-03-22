import {
  Search,
  Moon,
  Sun,
  Star,
  Command,
  Zap,
  Terminal,
  Settings,
} from "lucide-react";
import { AnimatedLogo } from "./AnimatedLogo";
import { ViewMode } from "../types";

interface HeaderProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  difficultyFilter: string;
  onDifficultyChange: (difficulty: string) => void;
  darkMode: boolean;
  onDarkModeToggle: () => void;
  viewMode: ViewMode;
  onViewModeChange: (mode: ViewMode) => void;
  favoriteCount: number;
}

export function Header({
  searchQuery,
  onSearchChange,
  difficultyFilter,
  onDifficultyChange,
  darkMode,
  onDarkModeToggle,
  viewMode,
  onViewModeChange,
  favoriteCount,
}: HeaderProps) {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-slate-900 border-b border-slate-800 shadow-lg shadow-slate-900/20 drag-region">
      <div className="px-6 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-3">
              <AnimatedLogo />
              <div>
                <h1 className="text-xl font-bold text-white tracking-tight">
                  Kubernetes <span className="text-brand-400">Cheatsheet</span>
                </h1>
                <p className="text-xs text-slate-400 font-medium">
                  DevOps Reference Guide
                </p>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-4 no-drag">
            <div className="relative group">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-slate-400 group-focus-within:text-brand-400 transition-colors" />
              <input
                type="text"
                placeholder="Search commands..."
                value={searchQuery}
                onChange={(e) => onSearchChange(e.target.value)}
                className="pl-10 pr-4 py-2 w-64 lg:w-96 border border-slate-700 rounded-lg bg-slate-800 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-all"
              />
              <div className="absolute right-3 top-1/2 transform -translate-y-1/2 flex items-center gap-1">
                <kbd className="hidden sm:inline-block px-1.5 py-0.5 text-[10px] font-bold text-slate-400 bg-slate-700 rounded border border-slate-600">
                  Ctrl K
                </kbd>
              </div>
            </div>

            <select
              value={difficultyFilter}
              onChange={(e) => onDifficultyChange(e.target.value)}
              className="px-4 py-2 border border-slate-700 rounded-lg bg-slate-800 text-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-all cursor-pointer hover:bg-slate-750"
            >
              <option value="all">All Levels</option>
              <option value="beginner">Beginner</option>
              <option value="intermediate">Intermediate</option>
              <option value="advanced">Advanced</option>
              <option value="expert">Expert</option>
            </select>

            <div className="flex items-center gap-1 bg-slate-800 p-1 rounded-lg border border-slate-700">
              <button
                onClick={() => onViewModeChange("console-practice")}
                className={`px-3 py-1.5 rounded-md flex items-center gap-2 transition-all text-xs font-medium ${
                  viewMode === "console-practice"
                    ? "bg-brand-600 text-white shadow-sm"
                    : "text-slate-400 hover:text-white hover:bg-slate-700"
                }`}
              >
                <Terminal className="w-3.5 h-3.5" />
                Console
              </button>
              <button
                onClick={() => onViewModeChange("quick-ref")}
                className={`px-3 py-1.5 rounded-md flex items-center gap-2 transition-all text-xs font-medium ${
                  viewMode === "quick-ref"
                    ? "bg-brand-600 text-white shadow-sm"
                    : "text-slate-400 hover:text-white hover:bg-slate-700"
                }`}
              >
                <Zap className="w-3.5 h-3.5" />
                Quick Ref
              </button>
              <button
                onClick={() => onViewModeChange("commands")}
                className={`px-3 py-1.5 rounded-md flex items-center gap-2 transition-all text-xs font-medium ${
                  viewMode === "commands"
                    ? "bg-brand-600 text-white shadow-sm"
                    : "text-slate-400 hover:text-white hover:bg-slate-700"
                }`}
              >
                <Command className="w-3.5 h-3.5" />
                Commands
              </button>
              <button
                onClick={() => onViewModeChange("favorites")}
                className={`px-3 py-1.5 rounded-md flex items-center gap-2 transition-all text-xs font-medium ${
                  viewMode === "favorites"
                    ? "bg-brand-600 text-white shadow-sm"
                    : "text-slate-400 hover:text-white hover:bg-slate-700"
                }`}
              >
                <Star className="w-3.5 h-3.5" />
                <span className="bg-slate-900/30 px-1.5 rounded-full text-[10px]">
                  {favoriteCount}
                </span>
              </button>
            </div>

            <button
              onClick={() => onViewModeChange("settings")}
              className={`p-2 transition-colors rounded-lg ${
                viewMode === "settings"
                  ? "text-brand-400 bg-slate-800"
                  : "text-slate-400 hover:text-white hover:bg-slate-800"
              }`}
              title="Settings"
            >
              <Settings className="w-5 h-5" />
            </button>

            <button
              onClick={onDarkModeToggle}
              className="p-2 text-slate-400 hover:text-white transition-colors rounded-lg hover:bg-slate-800"
              title={darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
            >
              {darkMode ? (
                <Sun className="w-5 h-5" />
              ) : (
                <Moon className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
