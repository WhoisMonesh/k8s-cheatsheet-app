import { Copy, Check, Terminal, Zap } from 'lucide-react';
import { useState } from 'react';

interface Alias {
  alias: string;
  command: string;
  description: string;
  category: string;
  example?: string;
}

const aliases: Alias[] = [
  // Basic aliases
  { alias: 'k', command: 'kubectl', description: 'Short form for kubectl', category: 'Essential', example: 'k get pods' },
  { alias: 'kgp', command: 'kubectl get pods', description: 'List pods quickly', category: 'Essential', example: 'kgp -n production' },
  { alias: 'kgpa', command: 'kubectl get pods -A', description: 'List all pods across namespaces', category: 'Essential', example: 'kgpa | grep Running' },
  { alias: 'kgd', command: 'kubectl get deploy', description: 'List deployments', category: 'Essential', example: 'kgd -n staging' },
  { alias: 'kgs', command: 'kubectl get svc', description: 'List services', category: 'Essential', example: 'kgs -n default' },
  { alias: 'kgn', command: 'kubectl get nodes -o wide', description: 'List nodes with details', category: 'Essential', example: 'kgn' },

  // Describe aliases
  { alias: 'kdp', command: 'kubectl describe pod', description: 'Describe pod', category: 'Describe', example: 'kdp my-pod' },
  { alias: 'kdd', command: 'kubectl describe deploy', description: 'Describe deployment', category: 'Describe', example: 'kdd web' },
  { alias: 'kds', command: 'kubectl describe svc', description: 'Describe service', category: 'Describe', example: 'kds backend' },
  { alias: 'kdn', command: 'kubectl describe node', description: 'Describe node', category: 'Describe', example: 'kdn node-1' },

  // Logs aliases
  { alias: 'kl', command: 'kubectl logs -f', description: 'Stream logs', category: 'Logs', example: 'kl my-pod -c app' },
  { alias: 'klp', command: 'kubectl logs -f --previous', description: 'Stream previous logs', category: 'Logs', example: 'klp my-pod' },

  // Exec aliases
  { alias: 'kex', command: 'kubectl exec -it', description: 'Execute into pod', category: 'Exec', example: 'kex my-pod -- /bin/sh' },
  { alias: 'kesh', command: 'kubectl exec -it $1 -- /bin/sh', description: 'Get shell in pod', category: 'Exec', example: 'kesh my-pod' },
  { alias: 'kebash', command: 'kubectl exec -it $1 -- /bin/bash', description: 'Get bash in pod', category: 'Exec', example: 'kebash my-pod' },

  // Delete aliases
  { alias: 'kdel', command: 'kubectl delete', description: 'Delete resource', category: 'Delete', example: 'kdel pod my-pod' },
  { alias: 'kdelp', command: 'kubectl delete pod', description: 'Delete pod', category: 'Delete', example: 'kdelp my-pod' },
  { alias: 'kdelf', command: 'kubectl delete -f', description: 'Delete from file', category: 'Delete', example: 'kdelf deployment.yaml' },

  // Apply aliases
  { alias: 'kaf', command: 'kubectl apply -f', description: 'Apply from file', category: 'Apply', example: 'kaf deployment.yaml' },
  { alias: 'kafd', command: 'kubectl apply -f . --recursive', description: 'Apply all in directory', category: 'Apply', example: 'kafd' },

  // Context aliases
  { alias: 'kctx', command: 'kubectl config current-context', description: 'Show current context', category: 'Context', example: 'kctx' },
  { alias: 'kctxs', command: 'kubectl config get-contexts', description: 'List all contexts', category: 'Context', example: 'kctxs' },
  { alias: 'kctxu', command: 'kubectl config use-context', description: 'Switch context', category: 'Context', example: 'kctxu prod-context' },

  // Namespace aliases
  { alias: 'kns', command: 'kubectl config set-context --current --namespace', description: 'Switch namespace', category: 'Namespace', example: 'kns production' },
  { alias: 'kgns', command: 'kubectl get ns', description: 'List namespaces', category: 'Namespace', example: 'kgns' },

  // Advanced aliases
  { alias: 'kgpw', command: 'kubectl get pods -o wide', description: 'List pods with details', category: 'Advanced', example: 'kgpw -n production' },
  { alias: 'kgpww', command: 'kubectl get pods -o wide --watch', description: 'Watch pods with details', category: 'Advanced', example: 'kgpww' },
  { alias: 'kgpoy', command: 'kubectl get pods -o yaml', description: 'Get pod YAML', category: 'Advanced', example: 'kgpoy my-pod' },
  { alias: 'ktop', command: 'kubectl top', description: 'Show resource usage', category: 'Advanced', example: 'ktop pods -A' },
  { alias: 'ktopp', command: 'kubectl top pods', description: 'Show pod resource usage', category: 'Advanced', example: 'ktopp -A --sort-by=cpu' },
  { alias: 'ktopn', command: 'kubectl top nodes', description: 'Show node resource usage', category: 'Advanced', example: 'ktopn' },
];

const bashSetup = `# Add to ~/.bashrc or ~/.zshrc

# Basic kubectl alias
alias k='kubectl'

# Complete for kubectl alias
complete -F __start_kubectl k

# Get commands
alias kgp='kubectl get pods'
alias kgpa='kubectl get pods -A'
alias kgd='kubectl get deploy'
alias kgs='kubectl get svc'
alias kgn='kubectl get nodes -o wide'

# Describe commands
alias kdp='kubectl describe pod'
alias kdd='kubectl describe deploy'

# Logs
alias kl='kubectl logs -f'

# Exec
alias kex='kubectl exec -it'

# Apply/Delete
alias kaf='kubectl apply -f'
alias kdel='kubectl delete'

# Context/Namespace
alias kctx='kubectl config current-context'
alias kns='kubectl config set-context --current --namespace'
`;

export function AliasesReference() {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);
  const [copiedSetup, setCopiedSetup] = useState(false);
  const [copiedExampleIndex, setCopiedExampleIndex] = useState<number | null>(null);

  const copyToClipboard = async (text: string, index: number) => {
    await navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  const copySetup = async () => {
    await navigator.clipboard.writeText(bashSetup);
    setCopiedSetup(true);
    setTimeout(() => setCopiedSetup(false), 2000);
  };

  const categories = Array.from(new Set(aliases.map(a => a.category)));

  return (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-green-50 to-blue-50 dark:from-slate-800 dark:to-slate-900 rounded-xl p-6 border border-green-200 dark:border-slate-700">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2 bg-green-500 rounded-lg">
            <Zap className="w-6 h-6 text-white" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Kubectl Aliases & Productivity</h2>
            <p className="text-sm text-gray-600 dark:text-gray-400">Boost your efficiency with these time-saving aliases</p>
          </div>
        </div>

        <div className="bg-white dark:bg-slate-800 rounded-lg p-4 border border-gray-200 dark:border-slate-700 mb-6">
          <div className="flex items-start justify-between mb-3">
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Bash/Zsh Setup</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">Copy and paste this into your shell config file</p>
            </div>
            <button
              onClick={copySetup}
              className="p-2 hover:bg-gray-100 dark:hover:bg-slate-700 rounded-md transition-colors flex items-center gap-2"
            >
              {copiedSetup ? (
                <>
                  <Check className="w-4 h-4 text-green-600 dark:text-green-400" />
                  <span className="text-sm text-green-600 dark:text-green-400">Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4 text-gray-400" />
                  <span className="text-sm text-gray-600 dark:text-gray-400">Copy All</span>
                </>
              )}
            </button>
          </div>
          <pre className="bg-gray-900 text-green-400 p-4 rounded-lg overflow-x-auto text-sm font-mono">
            {bashSetup}
          </pre>
        </div>

        {categories.map((category) => (
          <div key={category} className="mb-6">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
              <Terminal className="w-5 h-5 text-blue-500" />
              {category} Aliases
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
              {aliases.filter(a => a.category === category).map((alias, index) => (
                <div
                  key={index}
                  className="bg-white dark:bg-slate-800 rounded-lg p-3 border border-gray-200 dark:border-slate-700 hover:border-green-400 dark:hover:border-green-500 hover:shadow-md transition-all group"
                >
                  <div className="flex items-start justify-between mb-2">
                    <code className="text-sm font-bold text-green-600 dark:text-green-400">
                      {alias.alias}
                    </code>
                    <button
                      onClick={() => copyToClipboard(`alias ${alias.alias}='${alias.command}'`, index)}
                      className="p-1 hover:bg-gray-100 dark:hover:bg-slate-700 rounded transition-colors"
                    >
                      {copiedIndex === index ? (
                        <Check className="w-3 h-3 text-green-600 dark:text-green-400" />
                      ) : (
                        <Copy className="w-3 h-3 text-gray-400 group-hover:text-green-600" />
                      )}
                    </button>
                  </div>
                  <code className="text-xs text-gray-600 dark:text-gray-400 block mb-2 font-mono">
                    {alias.command}
                  </code>
                  <p className="text-xs text-gray-500 dark:text-gray-500">
                    {alias.description}
                  </p>
                  {alias.example && (
                    <div className="mt-2 flex items-center justify-between">
                      <code className="text-xs text-gray-700 dark:text-gray-300 font-mono truncate">
                        {alias.example}
                      </code>
                      <button
                        onClick={async () => {
                          await navigator.clipboard.writeText(alias.example || '');
                          setCopiedExampleIndex(index);
                          setTimeout(() => setCopiedExampleIndex(null), 2000);
                        }}
                        className="p-1 hover:bg-gray-100 dark:hover:bg-slate-700 rounded transition-colors"
                      >
                        {copiedExampleIndex === index ? (
                          <Check className="w-3 h-3 text-green-600 dark:text-green-400" />
                        ) : (
                          <Copy className="w-3 h-3 text-gray-400" />
                        )}
                      </button>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
