import { useState } from 'react';
import { TroubleshootingGuide as TroubleshootingGuideType } from '../types';
import { AlertCircle, Search, ChevronDown, ChevronUp } from 'lucide-react';

interface TroubleshootingGuideProps {
  guides: TroubleshootingGuideType[];
}

export function TroubleshootingGuide({ guides }: TroubleshootingGuideProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const categories = ['all', ...Array.from(new Set(guides.map((g) => g.category)))];

  const filteredGuides = guides.filter((guide) => {
    const matchesSearch =
      guide.issue.toLowerCase().includes(searchQuery.toLowerCase()) ||
      guide.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      guide.symptoms.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || guide.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="max-w-7xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
          Troubleshooting Guide
        </h1>
        <p className="text-gray-600 dark:text-gray-400">
          Common Kubernetes issues, diagnosis steps, and solutions
        </p>
      </div>

      <div className="mb-6 flex gap-4">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search issues..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat === 'all' ? 'All Categories' : cat}
            </option>
          ))}
        </select>
      </div>

      <div className="space-y-4">
        {filteredGuides.map((guide) => {
          const isExpanded = expandedId === guide.id;

          return (
            <div
              key={guide.id}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden"
            >
              <button
                onClick={() => setExpandedId(isExpanded ? null : guide.id)}
                className="w-full p-6 text-left hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
              >
                <div className="flex items-start justify-between">
                  <div className="flex items-start gap-3 flex-1">
                    <AlertCircle className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                        {guide.issue}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400 mb-2">
                        {guide.description}
                      </p>
                      <span className="inline-block px-3 py-1 bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-300 text-xs font-semibold rounded-full">
                        {guide.category}
                      </span>
                    </div>
                  </div>
                  {isExpanded ? (
                    <ChevronUp className="w-6 h-6 text-gray-400 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-6 h-6 text-gray-400 flex-shrink-0" />
                  )}
                </div>
              </button>

              {isExpanded && (
                <div className="px-6 pb-6 space-y-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                      Symptoms
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400">{guide.symptoms}</p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                      Common Causes
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400">{guide.causes}</p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                      Diagnosis
                    </h4>
                    <div className="bg-gray-900 dark:bg-black rounded-lg p-4 overflow-x-auto">
                      <pre className="text-sm text-green-400 font-mono whitespace-pre-wrap">
                        {guide.diagnosis}
                      </pre>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                      Solutions
                    </h4>
                    <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
                      <p className="text-gray-700 dark:text-gray-300 whitespace-pre-line">
                        {guide.solutions}
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {filteredGuides.length === 0 && (
        <div className="text-center py-12">
          <AlertCircle className="w-16 h-16 text-gray-300 dark:text-gray-600 mx-auto mb-4" />
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
            No guides found
          </h3>
          <p className="text-gray-600 dark:text-gray-400">
            Try adjusting your search or filter
          </p>
        </div>
      )}
    </div>
  );
}
