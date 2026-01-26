import { Keyboard, Heart } from 'lucide-react';

interface FooterProps {
  onShowShortcuts: () => void;
}

export function Footer({ onShowShortcuts }: FooterProps) {
  return (
    <footer className="fixed bottom-0 left-64 right-0 bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 px-6 py-3 z-40">
      <div className="flex items-center justify-between text-sm">
        <div className="flex items-center gap-4">
          <button
            onClick={onShowShortcuts}
            className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
          >
            <Keyboard className="w-4 h-4" />
            Keyboard Shortcuts
          </button>
          <span className="text-gray-400 dark:text-gray-600">|</span>
          <span className="text-gray-600 dark:text-gray-400">
            Press <kbd className="px-2 py-0.5 bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded text-xs">Ctrl+K</kbd> to search
          </span>
        </div>
        <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
          <span>Made with</span>
          <Heart className="w-4 h-4 text-red-500 fill-current" />
          <span>for DevOps Engineers</span>
        </div>
      </div>
    </footer>
  );
}
