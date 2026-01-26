import { K8sCommand } from '../types';
import { CommandList } from './CommandList';
import { useFavorites } from '../context/FavoritesContext';
import { Star } from 'lucide-react';

interface FavoritesProps {
  allCommands: K8sCommand[];
  selectedCommand: K8sCommand | null;
  onSelectCommand: (command: K8sCommand) => void;
}

export function Favorites({ allCommands, selectedCommand, onSelectCommand }: FavoritesProps) {
  const { favorites, toggleFavorite } = useFavorites();

  const favoriteCommands = allCommands.filter((cmd) => favorites.includes(cmd.id));

  if (favoriteCommands.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center h-full p-8 text-center bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700">
        <div className="w-16 h-16 bg-slate-100 dark:bg-slate-700 rounded-full flex items-center justify-center mb-4">
          <Star className="w-8 h-8 text-slate-400" />
        </div>
        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">No Favorites Yet</h3>
        <p className="text-slate-600 dark:text-slate-400 max-w-md">
          Mark commands as favorites by clicking the star icon next to them. They will appear here for quick access.
        </p>
      </div>
    );
  }

  return (
    <div className="h-full flex flex-col">
      <div className="mb-4 flex items-center gap-3">
        <div className="p-2 bg-amber-100 dark:bg-amber-900/30 rounded-lg">
          <Star className="w-6 h-6 text-amber-600 dark:text-amber-400" />
        </div>
        <div>
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Favorites</h2>
          <p className="text-slate-600 dark:text-slate-400">
            Your collection of frequently used commands
          </p>
        </div>
      </div>
      
      <div className="flex-1 min-h-0">
        <CommandList
          commands={favoriteCommands}
          selectedCommand={selectedCommand}
          onSelectCommand={onSelectCommand}
          favorites={favorites}
          onToggleFavorite={toggleFavorite}
        />
      </div>
    </div>
  );
}
