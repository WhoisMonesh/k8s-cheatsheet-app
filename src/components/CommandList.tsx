import { K8sCommand } from "../types";
import { Star, Terminal, Copy, Check } from "lucide-react";
import { useState } from "react";

interface CommandListProps {
  commands: K8sCommand[];
  selectedCommand: K8sCommand | null;
  onSelectCommand: (command: K8sCommand) => void;
  favorites: number[];
  onToggleFavorite: (commandId: number) => void;
  loading?: boolean;
}

const difficultyColors = {
  beginner:
    "bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-300 border-emerald-200 dark:border-emerald-800",
  intermediate:
    "bg-brand-100 text-brand-800 dark:bg-brand-900/30 dark:text-brand-300 border-brand-200 dark:border-brand-800",
  advanced:
    "bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-300 border-amber-200 dark:border-amber-800",
  expert:
    "bg-rose-100 text-rose-800 dark:bg-rose-900/30 dark:text-rose-300 border-rose-200 dark:border-rose-800",
};

export function CommandList({
  commands,
  selectedCommand,
  onSelectCommand,
  favorites,
  onToggleFavorite,
  loading = false,
}: CommandListProps) {
  const [copiedId, setCopiedId] = useState<number | null>(null);

  const handleCopy = (e: React.MouseEvent, command: K8sCommand) => {
    e.stopPropagation();
    navigator.clipboard.writeText(command.command);
    setCopiedId(command.id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  if (loading) {
    return (
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700 overflow-hidden flex flex-col h-full">
        <div className="p-4 bg-white dark:bg-gray-800 border-b border-slate-200 dark:border-slate-700 sticky top-0 z-10">
          <div className="h-7 w-48 bg-slate-200 dark:bg-slate-700 rounded animate-pulse" />
        </div>
        <div className="overflow-y-auto flex-1 p-3 space-y-3 scrollbar-thin">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div
              key={i}
              className="p-4 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-gray-800"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <div className="flex gap-2 mb-3">
                    <div className="h-5 w-16 bg-slate-200 dark:bg-slate-700 rounded animate-pulse" />
                    <div className="h-5 w-12 bg-slate-200 dark:bg-slate-700 rounded animate-pulse" />
                  </div>
                  <div className="h-5 w-3/4 bg-slate-200 dark:bg-slate-700 rounded animate-pulse mb-2" />
                  <div className="h-4 w-full bg-slate-200 dark:bg-slate-700 rounded animate-pulse" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (commands.length === 0) {
    return (
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700 p-12 text-center">
        <div className="w-16 h-16 bg-slate-100 dark:bg-slate-700 rounded-full flex items-center justify-center mx-auto mb-4">
          <Terminal className="w-8 h-8 text-slate-400" />
        </div>
        <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">
          No commands found
        </h3>
        <p className="text-slate-500 dark:text-slate-400">
          Try adjusting your search or filters to find what you need
        </p>
      </div>
    );
  }

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700 overflow-hidden flex flex-col h-full">
      <div className="p-4 bg-white dark:bg-gray-800 border-b border-slate-200 dark:border-slate-700 sticky top-0 z-10 backdrop-blur-md bg-white/90 dark:bg-gray-800/90">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
            Available Commands
            <span className="text-xs font-normal text-slate-500 bg-slate-100 dark:bg-slate-700 px-2 py-0.5 rounded-full">
              {commands.length.toLocaleString()}
            </span>
          </h2>
        </div>
      </div>
      <div className="overflow-y-auto flex-1 p-3 space-y-3 scrollbar-thin">
        {commands.map((command) => {
          const isFavorite = favorites.includes(command.id);
          const isSelected = selectedCommand?.id === command.id;

          return (
            <div
              key={command.id}
              className={`p-4 rounded-lg border transition-all duration-200 cursor-pointer group relative ${
                isSelected
                  ? "bg-brand-50 dark:bg-brand-900/10 border-brand-500 ring-1 ring-brand-500 shadow-md"
                  : "bg-white dark:bg-gray-800 border-slate-200 dark:border-slate-700 hover:border-brand-300 dark:hover:border-brand-700 hover:shadow-md"
              }`}
              onClick={() => onSelectCommand(command)}
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-3">
                    <span
                      className={`px-2 py-0.5 rounded-md text-[10px] font-bold uppercase tracking-wider border ${
                        difficultyColors[command.difficultyLevel]
                      }`}
                    >
                      {command.difficultyLevel}
                    </span>
                    <span className="px-2 py-0.5 rounded-md text-[10px] font-medium bg-slate-100 text-slate-600 dark:bg-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-600">
                      v{command.versionIntroduced}
                    </span>
                  </div>
                  <div className="font-mono text-sm text-brand-600 dark:text-brand-400 mb-2 break-all font-medium">
                    {command.command}
                  </div>
                  <p className="text-sm text-slate-600 dark:text-slate-300 line-clamp-2">
                    {command.description}
                  </p>
                </div>

                <div className="flex flex-col gap-2">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onToggleFavorite(command.id);
                    }}
                    className={`p-2 rounded-md transition-colors ${
                      isFavorite
                        ? "text-yellow-400 bg-yellow-50 dark:bg-yellow-900/20"
                        : "text-slate-300 hover:text-yellow-400 hover:bg-yellow-50 dark:hover:bg-slate-700"
                    }`}
                  >
                    <Star
                      className={`w-4 h-4 ${isFavorite ? "fill-current" : ""}`}
                    />
                  </button>
                  <button
                    onClick={(e) => handleCopy(e, command)}
                    className="p-2 rounded-md text-slate-400 hover:text-brand-500 hover:bg-brand-50 dark:hover:bg-slate-700 transition-colors"
                    title="Copy command"
                  >
                    {copiedId === command.id ? (
                      <Check className="w-4 h-4 text-emerald-500" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
