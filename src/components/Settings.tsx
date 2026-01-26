import { Trash2, RotateCcw, Shield, Database, Download, Check } from 'lucide-react';
import { useFavorites } from '../context/FavoritesContext';
import { useState } from 'react';

export function Settings() {
  const { favorites } = useFavorites();
  const [clearedFavorites, setClearedFavorites] = useState(false);
  const [clearedExam, setClearedExam] = useState(false);
  const [clearedAll, setClearedAll] = useState(false);

  const clearFavorites = () => {
    localStorage.removeItem('k8s-favorites');
    setClearedFavorites(true);
    setTimeout(() => {
      window.location.reload();
    }, 1000);
  };

  const exportFavorites = () => {
    const data = JSON.stringify(favorites, null, 2);
    const blob = new Blob([data], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'k8s-cheat-sheet-favorites.json';
    a.click();
    URL.revokeObjectURL(url);
  };

  const clearExamScore = () => {
    localStorage.removeItem('k8s-exam-high-score');
    setClearedExam(true);
    setTimeout(() => setClearedExam(false), 3000);
  };

  const resetAllData = () => {
    localStorage.clear();
    setClearedAll(true);
    setTimeout(() => {
      window.location.reload();
    }, 1000);
  };

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-8">
      <div>
        <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">Settings</h2>
        <p className="text-slate-600 dark:text-slate-400">
          Manage your local data and application preferences.
        </p>
      </div>

      <div className="bg-slate-800 rounded-lg p-6 border border-slate-700">
        <div className="flex items-center gap-3 mb-4">
          <Database className="w-6 h-6 text-blue-400" />
          <h3 className="text-xl font-semibold text-slate-100">Data Management</h3>
        </div>
        <div className="space-y-4">
          <div className="flex items-center justify-between p-4 bg-slate-900 rounded-lg border border-slate-700">
            <div>
              <h4 className="text-slate-200 font-medium">Export Favorites</h4>
              <p className="text-sm text-slate-400">Download your favorites as a JSON file</p>
            </div>
            <button
              onClick={exportFavorites}
              className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition-colors flex items-center gap-2"
            >
              <Download className="w-4 h-4" />
              Export
            </button>
          </div>

          <div className="flex items-center justify-between p-4 bg-slate-900 rounded-lg border border-slate-700">
            <div>
              <h4 className="text-slate-200 font-medium">Clear Favorites</h4>
              <p className="text-sm text-slate-400">Remove all saved favorites</p>
            </div>
            <button
              onClick={clearFavorites}
              disabled={clearedFavorites}
              className={`px-4 py-2 rounded-md transition-colors flex items-center gap-2 ${
                clearedFavorites 
                  ? 'bg-green-600/20 text-green-400 border border-green-600/50' 
                  : 'bg-slate-800 hover:bg-slate-700 text-slate-300 border border-slate-600'
              }`}
            >
              {clearedFavorites ? <Check className="w-4 h-4" /> : <Trash2 className="w-4 h-4" />}
              {clearedFavorites ? 'Cleared' : 'Clear'}
            </button>
          </div>

          <div className="flex items-center justify-between p-4 bg-slate-900 rounded-lg border border-slate-700">
            <div>
              <h4 className="text-slate-200 font-medium">Reset Exam History</h4>
              <p className="text-sm text-slate-400">Clear your high scores</p>
            </div>
            <button
              onClick={clearExamScore}
              disabled={clearedExam}
              className={`px-4 py-2 rounded-md transition-colors flex items-center gap-2 ${
                clearedExam 
                  ? 'bg-green-600/20 text-green-400 border border-green-600/50' 
                  : 'bg-slate-800 hover:bg-slate-700 text-slate-300 border border-slate-600'
              }`}
            >
              {clearedExam ? <Check className="w-4 h-4" /> : <RotateCcw className="w-4 h-4" />}
              {clearedExam ? 'Reset' : 'Reset'}
            </button>
          </div>
        </div>
      </div>

      <div className="bg-red-500/10 rounded-lg p-6 border border-red-500/20">
        <div className="flex items-center gap-3 mb-4">
          <Shield className="w-6 h-6 text-red-400" />
          <h3 className="text-xl font-semibold text-red-400">Danger Zone</h3>
        </div>
        <div className="flex items-center justify-between p-4 bg-red-500/5 rounded-lg border border-red-500/10">
          <div>
            <h4 className="text-red-200 font-medium">Factory Reset</h4>
            <p className="text-sm text-red-400/70">Clear all data and reset application</p>
          </div>
          <button
            onClick={resetAllData}
            disabled={clearedAll}
            className={`px-4 py-2 rounded-md transition-colors flex items-center gap-2 ${
              clearedAll
                ? 'bg-green-600/20 text-green-400 border border-green-600/50'
                : 'bg-red-500/10 hover:bg-red-500/20 text-red-400 border border-red-500/30'
            }`}
          >
            {clearedAll ? <Check className="w-4 h-4" /> : <Trash2 className="w-4 h-4" />}
            {clearedAll ? 'Resetting...' : 'Reset Everything'}
          </button>
        </div>
      </div>

      <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 overflow-hidden">
        <div className="p-6 border-b border-slate-200 dark:border-slate-700">
          <h3 className="text-lg font-bold text-slate-900 dark:text-white">About</h3>
        </div>
        <div className="p-6">
          <div className="flex items-center justify-between mb-4">
            <span className="text-slate-600 dark:text-slate-400">Version</span>
            <span className="font-mono font-bold text-slate-900 dark:text-white">v1.1.0</span>
          </div>
          <div className="flex items-center justify-between mb-4">
            <span className="text-slate-600 dark:text-slate-400">React</span>
            <span className="font-mono font-bold text-slate-900 dark:text-white">v18.3.1</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-slate-600 dark:text-slate-400">Kubernetes Version Target</span>
            <span className="font-mono font-bold text-slate-900 dark:text-white">v1.32</span>
          </div>
        </div>
      </div>
    </div>
  );
}
