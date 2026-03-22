import { useState } from "react";
import { scenariosData } from "../db/data/scenarios";
import { ChevronDown, ChevronRight, CheckCircle } from "lucide-react";

export function Scenarios() {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
            Workflow Scenarios
          </h2>
          <p className="text-slate-600 dark:text-slate-400 mt-1">
            Step-by-step guides for common Kubernetes operations
          </p>
        </div>
      </div>

      <div className="grid gap-4">
        {scenariosData.map((scenario) => (
          <div
            key={scenario.id}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-slate-200 dark:border-slate-700 overflow-hidden transition-all duration-200 hover:shadow-md"
          >
            <button
              onClick={() =>
                setExpandedId(expandedId === scenario.id ? null : scenario.id)
              }
              className="w-full px-6 py-5 flex items-center justify-between hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors text-left"
            >
              <div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-1">
                  {scenario.title}
                </h3>
                <p className="text-sm text-slate-500 dark:text-slate-400">
                  {scenario.description}
                </p>
              </div>
              <div className="flex items-center gap-4">
                <span
                  className={`px-2.5 py-0.5 rounded-full text-xs font-bold uppercase tracking-wide ${
                    scenario.difficulty === "beginner"
                      ? "bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-400"
                      : scenario.difficulty === "intermediate"
                        ? "bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-400"
                        : "bg-rose-100 text-rose-800 dark:bg-rose-900/30 dark:text-rose-400"
                  }`}
                >
                  {scenario.difficulty}
                </span>
                {expandedId === scenario.id ? (
                  <ChevronDown className="w-5 h-5 text-slate-400" />
                ) : (
                  <ChevronRight className="w-5 h-5 text-slate-400" />
                )}
              </div>
            </button>

            {expandedId === scenario.id && (
              <div className="px-6 pb-8 pt-2 border-t border-slate-100 dark:border-slate-700/50 bg-slate-50/50 dark:bg-slate-800/50">
                <div className="max-w-3xl">
                  {scenario.steps.map((step, index) => (
                    <div key={index} className="relative pl-10 pb-8 last:pb-0">
                      {/* Connector Line */}
                      {index !== scenario.steps.length - 1 && (
                        <div className="absolute left-[15px] top-8 bottom-0 w-0.5 bg-slate-200 dark:bg-slate-700"></div>
                      )}

                      {/* Step Number Bubble */}
                      <div className="absolute left-0 top-0 w-8 h-8 rounded-full bg-brand-600 dark:bg-brand-500 text-white flex items-center justify-center font-bold text-sm shadow-sm ring-4 ring-slate-50 dark:ring-slate-800">
                        {step.order}
                      </div>

                      {/* Content */}
                      <div className="bg-white dark:bg-gray-900 rounded-xl p-5 border border-slate-200 dark:border-slate-700 shadow-sm">
                        <h4 className="font-bold text-slate-900 dark:text-white mb-3 text-lg">
                          {step.description}
                        </h4>

                        <div className="bg-slate-900 rounded-lg p-4 mb-3 group relative overflow-hidden">
                          <code className="block font-mono text-sm text-emerald-400 break-all font-medium">
                            {step.command}
                          </code>
                        </div>

                        <div className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-400 bg-blue-50 dark:bg-blue-900/20 p-3 rounded-lg">
                          <CheckCircle className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                          <p>{step.explanation}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
