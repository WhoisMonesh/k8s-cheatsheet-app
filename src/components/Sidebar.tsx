import { Category, ViewMode } from '../types';
import * as Icons from 'lucide-react';
import { Terminal, FileCode, Award, Star, GitMerge, Brain, Info } from 'lucide-react';

interface SidebarProps {
  categories: Category[];
  selectedCategory: string;
  onCategorySelect: (category: string) => void;
  commandCounts: Record<string, number>;
  currentView: ViewMode;
  onViewChange: (mode: ViewMode) => void;
}

export function Sidebar({
  categories,
  selectedCategory,
  onCategorySelect,
  commandCounts,
  currentView,
  onViewChange,
}: SidebarProps) {
  const getIcon = (iconName: string) => {
    const Icon = (Icons as any)[iconName];
    return Icon ? <Icon className="w-5 h-5" /> : <Icons.Box className="w-5 h-5" />;
  };

  const totalCommands = Object.values(commandCounts).reduce((sum, count) => sum + count, 0);

  return (
    <aside className="fixed left-0 top-16 bottom-0 w-64 bg-slate-900 border-r border-slate-800 overflow-y-auto scrollbar-thin z-40">
      <div className="p-4 space-y-6">
        {/* Main Section */}
        <div>
          <button
            onClick={() => onCategorySelect('all')}
            className={`w-full flex items-center justify-between px-4 py-3 rounded-lg mb-2 transition-all duration-200 group ${
              selectedCategory === 'all' && currentView !== 'favorites'
                ? 'bg-brand-600 text-white shadow-lg shadow-brand-500/20'
                : 'text-slate-400 hover:bg-slate-800 hover:text-white'
            }`}
          >
            <div className="flex items-center gap-3 min-w-0">
              <Icons.Layers className={`w-5 h-5 flex-shrink-0 ${selectedCategory === 'all' && currentView !== 'favorites' ? 'text-white' : 'text-slate-400 group-hover:text-white'}`} />
              <span className="font-medium tracking-wide truncate">All Commands</span>
            </div>
            <span
              className={`px-2 py-0.5 rounded text-xs font-semibold flex-shrink-0 ${
                selectedCategory === 'all' && currentView !== 'favorites'
                  ? 'bg-white/20 text-white'
                  : 'bg-slate-800 text-slate-500 group-hover:bg-slate-700 group-hover:text-slate-300'
              }`}
            >
              {totalCommands}
            </span>
          </button>

          <button
            onClick={() => onViewChange('favorites')}
            className={`w-full flex items-center justify-between px-4 py-3 rounded-lg mb-2 transition-all duration-200 group ${
              currentView === 'favorites'
                ? 'bg-brand-600 text-white shadow-lg shadow-brand-500/20'
                : 'text-slate-400 hover:bg-slate-800 hover:text-white'
            }`}
          >
            <div className="flex items-center gap-3 min-w-0 flex-1 mr-2">
              <Star className={`w-5 h-5 flex-shrink-0 ${currentView === 'favorites' ? 'text-white' : 'text-slate-400 group-hover:text-white'}`} />
              <span className="font-medium tracking-wide truncate">Favorites</span>
            </div>
          </button>

          <button
            onClick={() => onViewChange('aliases')}
            className={`w-full flex items-center justify-between px-4 py-3 rounded-lg mb-2 transition-all duration-200 group ${
              currentView === 'aliases'
                ? 'bg-brand-600 text-white shadow-lg shadow-brand-500/20'
                : 'text-slate-400 hover:bg-slate-800 hover:text-white'
            }`}
          >
            <div className="flex items-center gap-3 min-w-0 flex-1 mr-2">
              <Icons.Zap className={`w-5 h-5 flex-shrink-0 ${currentView === 'aliases' ? 'text-white' : 'text-slate-400 group-hover:text-white'}`} />
              <span className="font-medium tracking-wide truncate">Aliases</span>
            </div>
          </button>
        </div>

        {/* Practice Section */}
        <div>
          <h2 className="px-4 mb-3 text-xs font-bold text-slate-500 uppercase tracking-widest">
            Practice & Learn
          </h2>
          <button
            onClick={() => onViewChange('scenarios')}
            className={`w-full flex items-center justify-between px-4 py-3 rounded-lg mb-2 transition-all duration-200 group ${
              currentView === 'scenarios'
                ? 'bg-brand-600 text-white shadow-lg shadow-brand-500/20'
                : 'text-slate-400 hover:bg-slate-800 hover:text-white'
            }`}
          >
            <div className="flex items-center gap-3 min-w-0 flex-1 mr-2">
              <GitMerge className={`w-5 h-5 flex-shrink-0 ${currentView === 'scenarios' ? 'text-white' : 'text-slate-400 group-hover:text-white'}`} />
              <span className="font-medium tracking-wide truncate">Scenarios</span>
            </div>
          </button>

          <button
            onClick={() => onViewChange('quiz')}
            className={`w-full flex items-center justify-between px-4 py-3 rounded-lg mb-2 transition-all duration-200 group ${
              currentView === 'quiz'
                ? 'bg-brand-600 text-white shadow-lg shadow-brand-500/20'
                : 'text-slate-400 hover:bg-slate-800 hover:text-white'
            }`}
          >
            <div className="flex items-center gap-3 min-w-0 flex-1 mr-2">
              <Brain className={`w-5 h-5 flex-shrink-0 ${currentView === 'quiz' ? 'text-white' : 'text-slate-400 group-hover:text-white'}`} />
              <span className="font-medium tracking-wide truncate">Quiz Mode</span>
            </div>
          </button>

          <button
            onClick={() => onViewChange('console-practice')}
            className={`w-full flex items-center justify-between px-4 py-3 rounded-lg mb-2 transition-all duration-200 group ${
              currentView === 'console-practice'
                ? 'bg-brand-600 text-white shadow-lg shadow-brand-500/20'
                : 'text-slate-400 hover:bg-slate-800 hover:text-white'
            }`}
          >
            <div className="flex items-center gap-3 min-w-0 flex-1 mr-2">
              <Terminal className={`w-5 h-5 flex-shrink-0 ${currentView === 'console-practice' ? 'text-white' : 'text-slate-400 group-hover:text-white'}`} />
              <span className="font-medium tracking-wide truncate">Console Practice</span>
            </div>
          </button>

          <button
            onClick={() => onViewChange('yaml-builder')}
            className={`w-full flex items-center justify-between px-4 py-3 rounded-lg mb-2 transition-all duration-200 group ${
              currentView === 'yaml-builder'
                ? 'bg-brand-600 text-white shadow-lg shadow-brand-500/20'
                : 'text-slate-400 hover:bg-slate-800 hover:text-white'
            }`}
          >
            <div className="flex items-center gap-3 min-w-0">
              <FileCode className={`w-5 h-5 flex-shrink-0 ${currentView === 'yaml-builder' ? 'text-white' : 'text-slate-400 group-hover:text-white'}`} />
              <span className="font-medium tracking-wide truncate">YAML Builder</span>
            </div>
          </button>

          <button
            onClick={() => onViewChange('exam')}
            className={`w-full flex items-center justify-between px-4 py-3 rounded-lg mb-2 transition-all duration-200 group ${
              currentView === 'exam'
                ? 'bg-brand-600 text-white shadow-lg shadow-brand-500/20'
                : 'text-slate-400 hover:bg-slate-800 hover:text-white'
            }`}
          >
            <div className="flex items-center gap-3 min-w-0 flex-1 mr-2">
              <Award className={`w-5 h-5 flex-shrink-0 ${currentView === 'exam' ? 'text-white' : 'text-slate-400 group-hover:text-white'}`} />
              <span className="font-medium tracking-wide truncate">Exam Simulator</span>
            </div>
          </button>
        </div>

        {/* Categories Section */}
        <div>
          <h2 className="px-4 mb-3 text-xs font-bold text-slate-500 uppercase tracking-widest">
            Categories
          </h2>
          <div className="space-y-1">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => onCategorySelect(category.name)}
                className={`w-full flex items-center justify-between px-4 py-2.5 rounded-md transition-all duration-200 group relative overflow-hidden ${
                  selectedCategory === category.name
                    ? 'bg-slate-800 text-brand-400'
                    : 'text-slate-400 hover:bg-slate-800/50 hover:text-slate-200'
                }`}
                title={category.description}
              >
                {/* Active Indicator Line */}
                {selectedCategory === category.name && (
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-brand-500 rounded-r-full" />
                )}

                <div className="flex items-center gap-3 pl-2 min-w-0 flex-1 mr-2">
                  <div className={`flex-shrink-0 ${selectedCategory === category.name ? 'text-brand-500' : 'text-slate-500 group-hover:text-slate-300'}`}>
                    {getIcon(category.icon)}
                  </div>
                  <span className="font-medium text-sm truncate">{category.name}</span>
                </div>
                
                <span
                  className={`px-2 py-0.5 rounded text-xs font-semibold transition-colors flex-shrink-0 ${
                    selectedCategory === category.name
                      ? 'bg-brand-500/10 text-brand-400'
                      : 'bg-slate-800 text-slate-600 group-hover:bg-slate-700 group-hover:text-slate-400'
                  }`}
                >
                  {commandCounts[category.name] || 0}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Info Section */}
        <div>
          <h2 className="px-4 mb-3 text-xs font-bold text-slate-500 uppercase tracking-widest">
            Info
          </h2>
          <button
            onClick={() => onViewChange('about')}
            className={`w-full flex items-center justify-between px-4 py-3 rounded-lg mb-2 transition-all duration-200 group ${
              currentView === 'about'
                ? 'bg-brand-600 text-white shadow-lg shadow-brand-500/20'
                : 'text-slate-400 hover:bg-slate-800 hover:text-white'
            }`}
          >
            <div className="flex items-center gap-3 min-w-0 flex-1 mr-2">
              <Info className={`w-5 h-5 flex-shrink-0 ${currentView === 'about' ? 'text-white' : 'text-slate-400 group-hover:text-white'}`} />
              <span className="font-medium tracking-wide truncate">About</span>
            </div>
          </button>
        </div>

        {/* Quick Tips Section */}
        <div className="mt-8 p-4 bg-slate-800/50 rounded-xl border border-slate-800/50 backdrop-blur-sm">
          <div className="flex items-center gap-2 mb-3 text-brand-400">
            <Icons.Lightbulb className="w-4 h-4" />
            <h3 className="font-semibold text-sm">Pro Tips</h3>
          </div>
          <ul className="text-xs text-slate-400 space-y-2 leading-relaxed">
            <li className="flex gap-2">
              <span className="w-1 h-1 rounded-full bg-brand-500 mt-1.5 flex-shrink-0" />
              <span>Click command cards to expand details</span>
            </li>
            <li className="flex gap-2">
              <span className="w-1 h-1 rounded-full bg-brand-500 mt-1.5 flex-shrink-0" />
              <span>Use <kbd className="font-mono bg-slate-700 px-1 rounded text-[10px]">Ctrl+K</kbd> to search instantly</span>
            </li>
            <li className="flex gap-2">
              <span className="w-1 h-1 rounded-full bg-brand-500 mt-1.5 flex-shrink-0" />
              <span>Star favorites for quick access</span>
            </li>
          </ul>
        </div>
      </div>
    </aside>
  );
}
