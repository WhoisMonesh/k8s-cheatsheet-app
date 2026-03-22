import { Copy, Check, Terminal, Info } from "lucide-react";
import { useState } from "react";

interface QuickCommand {
  title: string;
  command: string;
  description: string;
  category: string;
}

const quickCommands: QuickCommand[] = [
  {
    title: "List All Pods",
    command: "kubectl get po -A",
    description: "View all pods across namespaces",
    category: "Essential",
  },
  {
    title: "Pod Logs",
    command: "kubectl logs -f <pod>",
    description: "Stream pod logs in real-time",
    category: "Essential",
  },
  {
    title: "Describe Pod",
    command: "kubectl describe po <pod>",
    description: "Detailed pod information",
    category: "Essential",
  },
  {
    title: "Exec into Pod",
    command: "kubectl exec -it <pod> -- sh",
    description: "Open shell in container",
    category: "Essential",
  },
  {
    title: "List Deployments",
    command: "kubectl get deploy -A",
    description: "View all deployments",
    category: "Essential",
  },
  {
    title: "Scale Deployment",
    command: "kubectl scale deploy <name> --replicas=3",
    description: "Change replica count",
    category: "Essential",
  },
  {
    title: "Port Forward",
    command: "kubectl port-forward <pod> 8080:80",
    description: "Forward local port to pod",
    category: "Essential",
  },
  {
    title: "Apply Config",
    command: "kubectl apply -f <file>",
    description: "Create/update from YAML",
    category: "Essential",
  },
  {
    title: "Get Services",
    command: "kubectl get svc -A",
    description: "List all services",
    category: "Essential",
  },
  {
    title: "View Events",
    command: "kubectl get events --sort-by=.metadata.creationTimestamp",
    description: "Recent cluster events",
    category: "Essential",
  },
  {
    title: "Node Status",
    command: "kubectl get no -o wide",
    description: "View node information",
    category: "Essential",
  },
  {
    title: "Resource Usage",
    command: "kubectl top po",
    description: "Pod CPU/memory usage",
    category: "Essential",
  },
];

export function QuickReferenceCard() {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const copyToClipboard = async (text: string, index: number) => {
    await navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  return (
    <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-slate-800 dark:to-slate-900 rounded-xl p-6 border border-blue-200 dark:border-slate-700">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2 bg-blue-500 rounded-lg">
          <Terminal className="w-6 h-6 text-white" />
        </div>
        <div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            Quick Reference
          </h2>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Essential kubectl commands for daily use
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {quickCommands.map((cmd, index) => (
          <div
            key={index}
            className="group bg-white dark:bg-slate-800 rounded-lg p-4 border border-gray-200 dark:border-slate-700 hover:border-blue-400 dark:hover:border-blue-500 hover:shadow-lg transition-all duration-200 cursor-pointer"
          >
            <div className="flex items-start justify-between mb-2">
              <div className="flex-1">
                <h3 className="font-semibold text-gray-900 dark:text-white text-sm mb-1">
                  {cmd.title}
                </h3>
                <span className="inline-block px-2 py-0.5 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded text-xs">
                  {cmd.category}
                </span>
              </div>
              <button
                onClick={() => copyToClipboard(cmd.command, index)}
                className="p-2 hover:bg-gray-100 dark:hover:bg-slate-700 rounded-md transition-colors"
                title="Copy command"
              >
                {copiedIndex === index ? (
                  <Check className="w-4 h-4 text-green-600 dark:text-green-400" />
                ) : (
                  <Copy className="w-4 h-4 text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-400" />
                )}
              </button>
            </div>

            <div className="mb-3">
              <code className="text-xs bg-gray-100 dark:bg-slate-900 px-2 py-1 rounded font-mono text-gray-800 dark:text-gray-200 block overflow-x-auto">
                {cmd.command}
              </code>
            </div>

            <div className="flex items-start gap-2">
              <Info className="w-3 h-3 text-gray-400 mt-0.5 flex-shrink-0" />
              <p className="text-xs text-gray-600 dark:text-gray-400">
                {cmd.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 p-4 bg-blue-100 dark:bg-blue-900/20 rounded-lg border border-blue-300 dark:border-blue-700">
        <div className="flex items-start gap-3">
          <Info className="w-5 h-5 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5" />
          <div>
            <p className="text-sm text-blue-900 dark:text-blue-100 font-medium mb-1">
              Pro Tip:
            </p>
            <p className="text-sm text-blue-800 dark:text-blue-200">
              Use{" "}
              <code className="px-2 py-0.5 bg-blue-200 dark:bg-blue-900 rounded font-mono">
                -A
              </code>{" "}
              flag (introduced in v1.14) as modern shorthand for{" "}
              <code className="px-2 py-0.5 bg-blue-200 dark:bg-blue-900 rounded font-mono">
                --all-namespaces
              </code>
              . Click any command to copy it instantly!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
