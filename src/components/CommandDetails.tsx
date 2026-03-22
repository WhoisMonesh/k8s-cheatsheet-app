import { useState, useEffect } from "react";
import { K8sCommand } from "../types";
import {
  Copy,
  Check,
  Terminal,
  Flag,
  FileText,
  Play,
  AlertTriangle,
  HelpCircle,
  Settings,
  X,
  RefreshCw,
} from "lucide-react";

interface CommandDetailsProps {
  command: K8sCommand | null;
}

export function CommandDetails({ command }: CommandDetailsProps) {
  const [copiedCommand, setCopiedCommand] = useState(false);
  const [copiedExample, setCopiedExample] = useState(false);
  const [activeFlags, setActiveFlags] = useState<string[]>([]);
  const [showTerminal, setShowTerminal] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [displayedOutput, setDisplayedOutput] = useState("");

  useEffect(() => {
    setActiveFlags([]);
    setShowTerminal(false);
    setDisplayedOutput("");
    setIsTyping(false);
  }, [command]);

  if (!command) {
    return (
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700 p-12 text-center h-full flex flex-col items-center justify-center">
        <div className="bg-slate-100 dark:bg-slate-700 p-6 rounded-full mb-6">
          <Terminal className="w-16 h-16 text-slate-400" />
        </div>
        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
          Select a Command
        </h3>
        <p className="text-slate-500 dark:text-slate-400 max-w-md mx-auto">
          Choose a command from the list to view detailed information, examples,
          and usage scenarios.
        </p>
      </div>
    );
  }

  const copyToClipboard = (text: string, type: "command" | "example") => {
    navigator.clipboard.writeText(text);
    if (type === "command") {
      setCopiedCommand(true);
      setTimeout(() => setCopiedCommand(false), 2000);
    } else {
      setCopiedExample(true);
      setTimeout(() => setCopiedExample(false), 2000);
    }
  };

  const difficultyColors = {
    beginner:
      "bg-emerald-100 text-emerald-800 dark:bg-emerald-900/50 dark:text-emerald-300",
    intermediate:
      "bg-brand-100 text-brand-800 dark:bg-brand-900/50 dark:text-brand-300",
    advanced:
      "bg-amber-100 text-amber-800 dark:bg-amber-900/50 dark:text-amber-300",
    expert: "bg-rose-100 text-rose-800 dark:bg-rose-900/50 dark:text-rose-300",
  };

  const deriveWarning = (c: K8sCommand): string => {
    const cmd = c.command.toLowerCase();
    if (cmd.includes(" delete "))
      return "Deletes resources; ensure backups and correct target.";
    if (cmd.includes(" apply "))
      return "Changes cluster state; preview with dry-run or diff.";
    if (cmd.includes(" rollout restart") || cmd.includes(" rollout undo"))
      return "May disrupt traffic; validate health checks.";
    if (cmd.includes(" patch "))
      return "Patches are immediate; verify JSON/YAML paths carefully.";
    if (cmd.includes(" pvc") && cmd.includes(" delete"))
      return "Deleting PVC may cause data loss depending on reclaim policy.";
    if (cmd.includes(" pv") && cmd.includes(" release"))
      return "Released PV can be reclaimed; confirm binding before reuse.";
    if (cmd.includes(" helm upgrade") && c.flags?.includes("cleanup-on-fail"))
      return "Cleanup on fail removes created resources.";
    if (c.difficultyLevel === "advanced" || c.difficultyLevel === "expert")
      return "Requires caution; may impact workloads or nodes.";
    return "No special warning.";
  };

  const flagsList = command.flags
    ? command.flags
        .split(",")
        .map((f) => f.trim())
        .filter((f) => f.length > 0)
    : [];

  const builtCommand = `${command.command} ${activeFlags.join(" ")}`.trim();

  const runSimulation = () => {
    setShowTerminal(true);
    setIsTyping(true);
    setDisplayedOutput("");

    setTimeout(() => {
      setIsTyping(false);
      setDisplayedOutput(
        command.output ||
          "No specific output preview available for this command.",
      );
    }, 1000);
  };

  const toggleFlag = (flag: string) => {
    setActiveFlags((prev) =>
      prev.includes(flag) ? prev.filter((f) => f !== flag) : [...prev, flag],
    );
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700 overflow-hidden sticky top-24">
      <div className="p-6 bg-brand-600 text-white">
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-2">
            <span
              className={`px-3 py-1 rounded-md text-xs font-bold uppercase tracking-wider ${
                difficultyColors[command.difficultyLevel]
              }`}
            >
              {command.difficultyLevel}
            </span>
            <span className="px-3 py-1 rounded-md text-xs font-medium bg-white/20 text-white border border-white/20">
              Kubernetes v{command.versionIntroduced}+
            </span>
          </div>
        </div>
        <h2 className="text-2xl font-bold mb-1 tracking-tight">
          {command.subcategory}
        </h2>
        <p className="text-brand-100 font-medium">{command.category}</p>
      </div>

      <div className="p-6 space-y-8 max-h-[calc(100vh-20rem)] overflow-y-auto scrollbar-thin">
        {/* Description */}
        <div>
          <div className="flex items-center gap-2 mb-3">
            <FileText className="w-5 h-5 text-brand-600 dark:text-brand-400" />
            <h3 className="text-lg font-bold text-slate-900 dark:text-white">
              Description
            </h3>
          </div>
          <p className="text-slate-700 dark:text-slate-300 leading-relaxed text-sm">
            {command.description}
          </p>
        </div>

        {/* Command */}
        <div>
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <Terminal className="w-5 h-5 text-brand-600 dark:text-brand-400" />
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                Command
              </h3>
            </div>
            <button
              onClick={() => copyToClipboard(command.command, "command")}
              className="flex items-center gap-2 px-3 py-1.5 text-xs font-medium bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 rounded-md hover:bg-slate-200 dark:hover:bg-slate-600 transition-colors"
            >
              {copiedCommand ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-500" />
                  Copied
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  Copy
                </>
              )}
            </button>
          </div>
          <div className="bg-slate-900 rounded-lg p-4 group relative overflow-hidden">
            <div className="absolute top-0 left-0 w-1 h-full bg-brand-500"></div>
            <code className="block font-mono text-sm text-white break-all">
              {command.command}
            </code>
          </div>
        </div>

        {/* Command Builder */}
        {flagsList.length > 0 && (
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Settings className="w-5 h-5 text-brand-600 dark:text-brand-400" />
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                Command Builder
              </h3>
            </div>
            <div className="bg-slate-50 dark:bg-slate-800/50 rounded-lg p-4 border border-slate-200 dark:border-slate-700">
              <p className="text-sm text-slate-600 dark:text-slate-400 mb-3">
                Toggle flags to customize the command:
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {flagsList.map((flag) => (
                  <button
                    key={flag}
                    onClick={() => toggleFlag(flag)}
                    className={`px-3 py-1.5 rounded-md text-xs font-mono transition-colors border ${
                      activeFlags.includes(flag)
                        ? "bg-brand-100 text-brand-700 border-brand-200 dark:bg-brand-900/30 dark:text-brand-300 dark:border-brand-700"
                        : "bg-white text-slate-600 border-slate-200 hover:border-brand-300 dark:bg-slate-800 dark:text-slate-400 dark:border-slate-600 dark:hover:border-brand-500"
                    }`}
                  >
                    {flag}
                  </button>
                ))}
              </div>

              <div className="relative">
                <div className="bg-slate-900 rounded-lg p-4 pr-24">
                  <code className="block font-mono text-sm text-white break-all">
                    {builtCommand}
                  </code>
                </div>
                <div className="absolute right-2 top-2 flex gap-1">
                  <button
                    onClick={() => copyToClipboard(builtCommand, "command")}
                    className="p-2 text-slate-400 hover:text-white hover:bg-white/10 rounded-md transition-colors"
                    title="Copy Command"
                  >
                    {copiedCommand ? (
                      <Check className="w-4 h-4 text-emerald-500" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                  <button
                    onClick={runSimulation}
                    className="p-2 text-brand-400 hover:text-brand-300 hover:bg-white/10 rounded-md transition-colors"
                    title="Run in Simulator"
                  >
                    <Play className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Terminal Simulator */}
        {showTerminal && (
          <div className="animate-in fade-in slide-in-from-top-4 duration-300">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <Terminal className="w-5 h-5 text-brand-600 dark:text-brand-400" />
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                  Terminal Simulator
                </h3>
              </div>
              <button
                onClick={() => setShowTerminal(false)}
                className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            <div className="bg-slate-950 rounded-lg overflow-hidden border border-slate-800 shadow-xl font-mono text-sm">
              <div className="bg-slate-900 px-4 py-2 flex items-center gap-2 border-b border-slate-800">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
                <span className="ml-2 text-xs text-slate-500">
                  bash — 80x24
                </span>
              </div>
              <div className="p-4 text-slate-300 min-h-[160px]">
                <div className="flex gap-2 text-emerald-400 mb-2">
                  <span>➜</span>
                  <span className="text-blue-400">~</span>
                  <span className="text-slate-100">{builtCommand}</span>
                </div>
                {isTyping ? (
                  <div className="flex items-center gap-2 text-slate-500">
                    <RefreshCw className="w-4 h-4 animate-spin" />
                    <span>Executing...</span>
                  </div>
                ) : (
                  <div className="whitespace-pre-wrap font-fira animate-in fade-in duration-300">
                    {displayedOutput}
                  </div>
                )}
                {!isTyping && (
                  <div className="mt-2 flex gap-2 text-emerald-400">
                    <span>➜</span>
                    <span className="text-blue-400">~</span>
                    <span className="animate-pulse">_</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {/* Example */}
        <div>
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <Play className="w-5 h-5 text-brand-600 dark:text-brand-400" />
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                Example
              </h3>
            </div>
            <button
              onClick={() => copyToClipboard(command.example, "example")}
              className="flex items-center gap-2 px-3 py-1.5 text-xs font-medium bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 rounded-md hover:bg-slate-200 dark:hover:bg-slate-600 transition-colors"
            >
              {copiedExample ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-500" />
                  Copied
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  Copy
                </>
              )}
            </button>
          </div>
          <div className="bg-slate-100 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-lg p-4">
            <code className="block font-mono text-sm text-slate-800 dark:text-slate-200 break-all">
              {command.example}
            </code>
          </div>
        </div>

        {/* Output */}
        {command.output && (
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Terminal className="w-5 h-5 text-brand-600 dark:text-brand-400" />
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                Expected Output
              </h3>
            </div>
            <div className="bg-slate-900 rounded-lg p-4 group relative overflow-hidden">
              <code className="block font-mono text-xs text-slate-300 whitespace-pre-wrap font-fira">
                {command.output}
              </code>
            </div>
          </div>
        )}

        {/* Warning */}
        <div className="bg-amber-50 dark:bg-amber-900/10 border-l-4 border-amber-500 p-4 rounded-r-lg">
          <div className="flex items-start gap-3">
            <AlertTriangle className="w-5 h-5 text-amber-600 dark:text-amber-500 flex-shrink-0 mt-0.5" />
            <div>
              <h4 className="font-bold text-amber-900 dark:text-amber-100 text-sm mb-1">
                Warning
              </h4>
              <p className="text-sm text-amber-800 dark:text-amber-200">
                {deriveWarning(command)}
              </p>
            </div>
          </div>
        </div>

        {/* Help/Tips */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-slate-50 dark:bg-slate-800/50 p-4 rounded-lg border border-slate-200 dark:border-slate-700">
            <div className="flex items-center gap-2 mb-2">
              <Flag className="w-4 h-4 text-brand-500" />
              <h4 className="font-bold text-slate-900 dark:text-white text-sm">
                Flags
              </h4>
            </div>
            <p className="text-xs text-slate-600 dark:text-slate-400 font-mono">
              {command.flags || "No specific flags listed"}
            </p>
          </div>
          <div className="bg-slate-50 dark:bg-slate-800/50 p-4 rounded-lg border border-slate-200 dark:border-slate-700">
            <div className="flex items-center gap-2 mb-2">
              <HelpCircle className="w-4 h-4 text-brand-500" />
              <h4 className="font-bold text-slate-900 dark:text-white text-sm">
                Tags
              </h4>
            </div>
            <div className="flex flex-wrap gap-2">
              {command.tags.split(",").map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-0.5 bg-white dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded text-[10px] font-medium text-slate-600 dark:text-slate-300"
                >
                  {tag.trim()}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
