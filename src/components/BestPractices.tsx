import { useState } from "react";
import { BestPractice } from "../types";
import { Lightbulb, Search, Shield, AlertTriangle, Info } from "lucide-react";

interface BestPracticesProps {
  practices: BestPractice[];
}

export function BestPractices({ practices }: BestPracticesProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedImpact, setSelectedImpact] = useState("all");

  const categories = [
    "all",
    ...Array.from(new Set(practices.map((p) => p.category))),
  ];
  const impacts = ["all", "Critical", "High", "Medium"];

  const filteredPractices = practices.filter((practice) => {
    const matchesSearch =
      practice.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      practice.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      practice.tags.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory =
      selectedCategory === "all" || practice.category === selectedCategory;
    const matchesImpact =
      selectedImpact === "all" || practice.impact === selectedImpact;
    return matchesSearch && matchesCategory && matchesImpact;
  });

  const getImpactIcon = (impact: string) => {
    switch (impact) {
      case "Critical":
        return <Shield className="w-5 h-5 text-red-500" />;
      case "High":
        return <AlertTriangle className="w-5 h-5 text-orange-500" />;
      case "Medium":
        return <Info className="w-5 h-5 text-blue-500" />;
      default:
        return <Info className="w-5 h-5 text-gray-500" />;
    }
  };

  const getImpactColor = (impact: string) => {
    switch (impact) {
      case "Critical":
        return "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300";
      case "High":
        return "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-300";
      case "Medium":
        return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300";
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300";
    }
  };

  return (
    <div className="max-w-7xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
          Best Practices
        </h1>
        <p className="text-gray-600 dark:text-gray-400">
          Production-ready best practices for Kubernetes deployments
        </p>
      </div>

      <div className="mb-6 flex gap-4">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search best practices..."
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
              {cat === "all" ? "All Categories" : cat}
            </option>
          ))}
        </select>
        <select
          value={selectedImpact}
          onChange={(e) => setSelectedImpact(e.target.value)}
          className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          {impacts.map((impact) => (
            <option key={impact} value={impact}>
              {impact === "all" ? "All Impact Levels" : impact}
            </option>
          ))}
        </select>
      </div>

      <div className="grid gap-6">
        {filteredPractices.map((practice) => (
          <div
            key={practice.id}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden"
          >
            <div className="p-6">
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 bg-yellow-100 dark:bg-yellow-900/30 rounded-lg">
                  <Lightbulb className="w-6 h-6 text-yellow-600 dark:text-yellow-400" />
                </div>
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                      {practice.title}
                    </h3>
                    <div className="flex items-center gap-2">
                      {getImpactIcon(practice.impact)}
                      <span
                        className={`px-3 py-1 text-xs font-semibold rounded-full ${getImpactColor(practice.impact)}`}
                      >
                        {practice.impact} Impact
                      </span>
                    </div>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 mb-3">
                    {practice.description}
                  </p>
                  <span className="inline-block px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-300 text-xs font-semibold rounded-full">
                    {practice.category}
                  </span>
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                  Example
                </h4>
                <div className="bg-gray-900 dark:bg-black rounded-lg p-4 overflow-x-auto">
                  <pre className="text-sm text-gray-300 font-mono whitespace-pre-wrap">
                    {practice.example}
                  </pre>
                </div>
              </div>

              {practice.tags && (
                <div className="mt-4">
                  <div className="flex flex-wrap gap-2">
                    {practice.tags.split(",").map((tag, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded text-xs"
                      >
                        {tag.trim()}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {filteredPractices.length === 0 && (
        <div className="text-center py-12">
          <Lightbulb className="w-16 h-16 text-gray-300 dark:text-gray-600 mx-auto mb-4" />
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
            No practices found
          </h3>
          <p className="text-gray-600 dark:text-gray-400">
            Try adjusting your search or filters
          </p>
        </div>
      )}
    </div>
  );
}
