import { X, Keyboard } from "lucide-react";

interface KeyboardShortcutsProps {
  isOpen: boolean;
  onClose: () => void;
}

export function KeyboardShortcuts({ isOpen, onClose }: KeyboardShortcutsProps) {
  if (!isOpen) return null;

  const shortcuts = [
    { keys: ["Ctrl", "K"], description: "Focus search bar", mac: ["⌘", "K"] },
    { keys: ["Ctrl", "1"], description: "Go to Commands", mac: ["⌘", "1"] },
    { keys: ["Ctrl", "2"], description: "Go to Favorites", mac: ["⌘", "2"] },
    { keys: ["Ctrl", "3"], description: "Go to Templates", mac: ["⌘", "3"] },
    {
      keys: ["Ctrl", "4"],
      description: "Go to Troubleshooting",
      mac: ["⌘", "4"],
    },
    {
      keys: ["Ctrl", "5"],
      description: "Go to Best Practices",
      mac: ["⌘", "5"],
    },
    { keys: ["Ctrl", "6"], description: "Go to Versions", mac: ["⌘", "6"] },
    { keys: ["Ctrl", "D"], description: "Toggle dark mode", mac: ["⌘", "D"] },
  ];

  const isMac = navigator.platform.toUpperCase().indexOf("MAC") >= 0;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-2xl max-w-2xl w-full mx-4 max-h-[80vh] overflow-auto">
        <div className="p-6 border-b border-gray-200 dark:border-gray-700 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Keyboard className="w-6 h-6 text-blue-500" />
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
              Keyboard Shortcuts
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
          >
            <X className="w-5 h-5 text-gray-500 dark:text-gray-400" />
          </button>
        </div>

        <div className="p-6">
          <div className="space-y-3">
            {shortcuts.map((shortcut, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-900 rounded-lg"
              >
                <span className="text-gray-700 dark:text-gray-300">
                  {shortcut.description}
                </span>
                <div className="flex items-center gap-1">
                  {(isMac ? shortcut.mac : shortcut.keys).map(
                    (key, keyIndex) => (
                      <kbd
                        key={keyIndex}
                        className="px-3 py-1.5 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded shadow-sm text-sm font-semibold text-gray-800 dark:text-gray-200"
                      >
                        {key}
                      </kbd>
                    ),
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg">
            <p className="text-sm text-blue-800 dark:text-blue-300">
              <strong>Pro Tip:</strong> Press the shortcut keys while focused on
              any part of the application to quickly navigate between sections.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
