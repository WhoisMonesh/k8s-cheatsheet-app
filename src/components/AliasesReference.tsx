import { Copy, Check, Terminal, Zap, BookOpen, Command, Shield, Globe, Database, Cpu, Activity, Info } from 'lucide-react';
import { useState } from 'react';

interface Alias {
  alias: string;
  command: string;
  description: string;
  category: string;
  example?: string;
}

const aliases: Alias[] = [
  // Essential
  { alias: 'k', command: 'kubectl', description: 'Short form for kubectl', category: 'Essential', example: 'k get pods' },
  { alias: 'kgp', command: 'kubectl get pods', description: 'List pods quickly', category: 'Essential', example: 'kgp -n production' },
  { alias: 'kgpa', command: 'kubectl get pods -A', description: 'List all pods across namespaces', category: 'Essential', example: 'kgpa | grep Running' },
  { alias: 'kgd', command: 'kubectl get deploy', description: 'List deployments', category: 'Essential', example: 'kgd -n staging' },
  { alias: 'kgs', command: 'kubectl get svc', description: 'List services', category: 'Essential', example: 'kgs -n default' },
  { alias: 'kgn', command: 'kubectl get nodes -o wide', description: 'List nodes with details', category: 'Essential', example: 'kgn' },
  { alias: 'kgns', command: 'kubectl get ns', description: 'List namespaces', category: 'Essential', example: 'kgns' },
  { alias: 'kge', command: 'kubectl get events --sort-by=".lastTimestamp"', description: 'List events sorted by time', category: 'Essential', example: 'kge' },
  { alias: 'kgew', command: 'kubectl get events --field-selector type=Warning --sort-by=".lastTimestamp"', description: 'List warning events sorted by time', category: 'Essential', example: 'kgew' },

  // Resources (Get)
  { alias: 'kgcm', command: 'kubectl get configmaps', description: 'List ConfigMaps', category: 'Resources', example: 'kgcm' },
  { alias: 'kgsec', command: 'kubectl get secrets', description: 'List Secrets', category: 'Resources', example: 'kgsec' },
  { alias: 'kging', command: 'kubectl get ingress', description: 'List Ingresses', category: 'Resources', example: 'kging' },
  { alias: 'kgpvc', command: 'kubectl get pvc', description: 'List PVCs', category: 'Resources', example: 'kgpvc' },
  { alias: 'kgpv', command: 'kubectl get pv', description: 'List PVs', category: 'Resources', example: 'kgpv' },
  { alias: 'kgsa', command: 'kubectl get sa', description: 'List ServiceAccounts', category: 'Resources', example: 'kgsa' },
  { alias: 'kgrs', command: 'kubectl get rs', description: 'List ReplicaSets', category: 'Resources', example: 'kgrs' },
  { alias: 'kgss', command: 'kubectl get statefulsets', description: 'List StatefulSets', category: 'Resources', example: 'kgss' },
  { alias: 'kgds', command: 'kubectl get daemonsets', description: 'List DaemonSets', category: 'Resources', example: 'kgds' },
  { alias: 'kgj', command: 'kubectl get jobs', description: 'List Jobs', category: 'Resources', example: 'kgj' },
  { alias: 'kgcj', command: 'kubectl get cronjobs', description: 'List CronJobs', category: 'Resources', example: 'kgcj' },

  // Describe
  { alias: 'kdp', command: 'kubectl describe pod', description: 'Describe pod', category: 'Describe', example: 'kdp my-pod' },
  { alias: 'kdd', command: 'kubectl describe deploy', description: 'Describe deployment', category: 'Describe', example: 'kdd web' },
  { alias: 'kds', command: 'kubectl describe svc', description: 'Describe service', category: 'Describe', example: 'kds backend' },
  { alias: 'kdn', command: 'kubectl describe node', description: 'Describe node', category: 'Describe', example: 'kdn node-1' },
  { alias: 'kdcm', command: 'kubectl describe configmap', description: 'Describe ConfigMap', category: 'Describe', example: 'kdcm my-config' },
  { alias: 'kdsec', command: 'kubectl describe secret', description: 'Describe Secret', category: 'Describe', example: 'kdsec my-secret' },
  { alias: 'kding', command: 'kubectl describe ingress', description: 'Describe Ingress', category: 'Describe', example: 'kding my-ingress' },
  { alias: 'kdpvc', command: 'kubectl describe pvc', description: 'Describe PVC', category: 'Describe', example: 'kdpvc my-claim' },
  { alias: 'kdsa', command: 'kubectl describe sa', description: 'Describe ServiceAccount', category: 'Describe', example: 'kdsa default' },
  { alias: 'kexp', command: 'kubectl explain', description: 'Explain resource', category: 'Describe', example: 'kexp pod.spec' },

  // Logs & Debugging
  { alias: 'kl', command: 'kubectl logs -f', description: 'Stream logs', category: 'Logs & Debug', example: 'kl my-pod -c app' },
  { alias: 'klp', command: 'kubectl logs -f --previous', description: 'Stream previous logs', category: 'Logs & Debug', example: 'klp my-pod' },
  { alias: 'klt', command: 'kubectl logs -f --tail=100', description: 'Stream last 100 lines', category: 'Logs & Debug', example: 'klt my-pod' },
  { alias: 'klall', command: 'kubectl logs -f --all-containers=true', description: 'Stream logs from all containers', category: 'Logs & Debug', example: 'klall my-pod' },
  { alias: 'kpf', command: 'kubectl port-forward', description: 'Port forward', category: 'Logs & Debug', example: 'kpf my-pod 8080:80' },

  // Exec
  { alias: 'kex', command: 'kubectl exec -it', description: 'Execute into pod', category: 'Exec', example: 'kex my-pod -- /bin/sh' },
  { alias: 'kesh', command: 'kubectl exec -it $1 -- /bin/sh', description: 'Get shell in pod (requires function)', category: 'Exec', example: 'kesh my-pod' },
  { alias: 'kebash', command: 'kubectl exec -it $1 -- /bin/bash', description: 'Get bash in pod (requires function)', category: 'Exec', example: 'kebash my-pod' },

  // Apply & Delete
  { alias: 'kaf', command: 'kubectl apply -f', description: 'Apply from file', category: 'Operations', example: 'kaf deployment.yaml' },
  { alias: 'kafd', command: 'kubectl apply -f . --recursive', description: 'Apply all in directory', category: 'Operations', example: 'kafd' },
  { alias: 'kdel', command: 'kubectl delete', description: 'Delete resource', category: 'Operations', example: 'kdel pod my-pod' },
  { alias: 'kdelp', command: 'kubectl delete pod', description: 'Delete pod', category: 'Operations', example: 'kdelp my-pod' },
  { alias: 'kdelf', command: 'kubectl delete -f', description: 'Delete from file', category: 'Operations', example: 'kdelf deployment.yaml' },
  { alias: 'kdelcm', command: 'kubectl delete configmap', description: 'Delete ConfigMap', category: 'Operations', example: 'kdelcm my-config' },
  { alias: 'kdelsec', command: 'kubectl delete secret', description: 'Delete Secret', category: 'Operations', example: 'kdelsec my-secret' },
  { alias: 'kdeling', command: 'kubectl delete ingress', description: 'Delete Ingress', category: 'Operations', example: 'kdeling my-ingress' },
  { alias: 'kdelall', command: 'kubectl delete --all', description: 'Delete all resources of type', category: 'Operations', example: 'kdelall pods --namespace=dev' },
  { alias: 'kdiff', command: 'kubectl diff -f', description: 'Diff file against cluster', category: 'Operations', example: 'kdiff deployment.yaml' },
  { alias: 'kcp', command: 'kubectl cp', description: 'Copy files to/from container', category: 'Operations', example: 'kcp ./local-file my-pod:/tmp/remote-file' },

  // Context & Namespace
  { alias: 'kctx', command: 'kubectl config current-context', description: 'Show current context', category: 'Context', example: 'kctx' },
  { alias: 'kctxs', command: 'kubectl config get-contexts', description: 'List all contexts', category: 'Context', example: 'kctxs' },
  { alias: 'kctxu', command: 'kubectl config use-context', description: 'Switch context', category: 'Context', example: 'kctxu prod-context' },
  { alias: 'kns', command: 'kubectl config set-context --current --namespace', description: 'Switch namespace', category: 'Context', example: 'kns production' },

  // Advanced & Formats
  { alias: 'kgpw', command: 'kubectl get pods -o wide', description: 'List pods with details', category: 'Advanced', example: 'kgpw -n production' },
  { alias: 'kgpww', command: 'kubectl get pods -o wide --watch', description: 'Watch pods with details', category: 'Advanced', example: 'kgpww' },
  { alias: 'kgpoy', command: 'kubectl get pods -o yaml', description: 'Get pod YAML', category: 'Advanced', example: 'kgpoy my-pod' },
  { alias: 'kgpoj', command: 'kubectl get pods -o json', description: 'Get pod JSON', category: 'Advanced', example: 'kgpoj my-pod' },
  { alias: 'kgpon', command: 'kubectl get pods --no-headers', description: 'Get pods without headers (for scripts)', category: 'Advanced', example: 'kgpon' },
  { alias: 'ktop', command: 'kubectl top', description: 'Show resource usage', category: 'Advanced', example: 'ktop pods -A' },
  { alias: 'ktopp', command: 'kubectl top pods', description: 'Show pod resource usage', category: 'Advanced', example: 'ktopp -A --sort-by=cpu' },
  { alias: 'ktopn', command: 'kubectl top nodes', description: 'Show node resource usage', category: 'Advanced', example: 'ktopn' },

  // JSONPath & Filtering
  { alias: 'kip', command: 'kubectl get pods -o custom-columns=POD:.metadata.name,IP:.status.podIP --no-headers', description: 'Get Pod IPs', category: 'JSONPath & Filters', example: 'kip' },
  { alias: 'kimg', command: 'kubectl get pods -o custom-columns=POD:.metadata.name,IMAGE:.spec.containers[*].image', description: 'Get Pod Images', category: 'JSONPath & Filters', example: 'kimg' },
  { alias: 'kstatus', command: 'kubectl get pods -o custom-columns=POD:.metadata.name,STATUS:.status.phase', description: 'Get Pod Status', category: 'JSONPath & Filters', example: 'kstatus' },
  { alias: 'knodes', command: 'kubectl get nodes -o custom-columns=NODE:.metadata.name,IP:.status.addresses[?(@.type=="InternalIP")].address', description: 'Get Node IPs', category: 'JSONPath & Filters', example: 'knodes' },

  // Networking
  { alias: 'knet', command: 'kubectl get networkpolicies', description: 'List NetworkPolicies', category: 'Networking', example: 'knet' },
  { alias: 'kep', command: 'kubectl get endpoints', description: 'List Endpoints', category: 'Networking', example: 'kep' },
  { alias: 'kdnse', command: 'kubectl get pods -n kube-system -l k8s-app=kube-dns', description: 'Get DNS pods', category: 'Networking', example: 'kdnse' },

  // Security
  { alias: 'kcan', command: 'kubectl auth can-i', description: 'Check permissions', category: 'Security', example: 'kcan create pods --as=jane' },
  { alias: 'kroles', command: 'kubectl get roles,clusterroles', description: 'List Roles', category: 'Security', example: 'kroles' },
  { alias: 'kbinds', command: 'kubectl get rolebindings,clusterrolebindings', description: 'List Bindings', category: 'Security', example: 'kbinds' },

  // Rollout & Scaling
  { alias: 'kroll', command: 'kubectl rollout', description: 'Manage rollouts', category: 'Operations', example: 'kroll status deploy/web' },
  { alias: 'krollh', command: 'kubectl rollout history', description: 'Rollout history', category: 'Operations', example: 'krollh deploy/web' },
  { alias: 'krollu', command: 'kubectl rollout undo', description: 'Rollout undo', category: 'Operations', example: 'krollu deploy/web' },
  { alias: 'krollr', command: 'kubectl rollout restart', description: 'Rollout restart', category: 'Operations', example: 'krollr deploy/web' },
  { alias: 'ksc', command: 'kubectl scale', description: 'Scale resources', category: 'Operations', example: 'ksc deploy/web --replicas=3' },
  { alias: 'kaut', command: 'kubectl autoscale', description: 'Autoscale resources', category: 'Operations', example: 'kaut deploy/web --min=2 --max=10' },

  // Cluster Info
  { alias: 'kcl', command: 'kubectl cluster-info', description: 'Cluster info', category: 'Cluster', example: 'kcl' },
  { alias: 'kapi', command: 'kubectl api-resources', description: 'List API resources', category: 'Cluster', example: 'kapi' },
  { alias: 'kver', command: 'kubectl version --short', description: 'Kubernetes version', category: 'Cluster', example: 'kver' },
  { alias: 'kcord', command: 'kubectl cordon', description: 'Cordon node', category: 'Cluster', example: 'kcord node-1' },
  { alias: 'kuncord', command: 'kubectl uncordon', description: 'Uncordon node', category: 'Cluster', example: 'kuncord node-1' },
  { alias: 'kdrain', command: 'kubectl drain', description: 'Drain node', category: 'Cluster', example: 'kdrain node-1 --ignore-daemonsets' },
  { alias: 'ktaint', command: 'kubectl taint', description: 'Taint node', category: 'Cluster', example: 'ktaint nodes node1 key=value:NoSchedule' },
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
alias kgns='kubectl get ns'
alias kge='kubectl get events --sort-by=".lastTimestamp"'
alias kgew='kubectl get events --field-selector type=Warning --sort-by=".lastTimestamp"'

# Resources
alias kgcm='kubectl get configmaps'
alias kgsec='kubectl get secrets'
alias kging='kubectl get ingress'
alias kgpvc='kubectl get pvc'
alias kgpv='kubectl get pv'
alias kgsa='kubectl get sa'
alias kgrs='kubectl get rs'
alias kgss='kubectl get statefulsets'
alias kgds='kubectl get daemonsets'
alias kgj='kubectl get jobs'
alias kgcj='kubectl get cronjobs'

# Describe commands
alias kdp='kubectl describe pod'
alias kdd='kubectl describe deploy'
alias kds='kubectl describe svc'
alias kdn='kubectl describe node'
alias kding='kubectl describe ingress'
alias kdpvc='kubectl describe pvc'
alias kdsa='kubectl describe sa'
alias kdcm='kubectl describe configmap'
alias kdsec='kubectl describe secret'
alias kexp='kubectl explain'

# Logs
alias kl='kubectl logs -f'
alias klp='kubectl logs -f --previous'
alias klt='kubectl logs -f --tail=100'
alias klall='kubectl logs -f --all-containers=true'
alias kpf='kubectl port-forward'

# Exec
alias kex='kubectl exec -it'
# Function for shell access
kesh() {
    kubectl exec -it "$1" -- /bin/sh
}
kebash() {
    kubectl exec -it "$1" -- /bin/bash
}

# Apply/Delete
alias kaf='kubectl apply -f'
alias kdel='kubectl delete'
alias kdelf='kubectl delete -f'
alias kdelp='kubectl delete pod'
alias kdelall='kubectl delete --all'
alias kdiff='kubectl diff -f'
alias kcp='kubectl cp'

# Context/Namespace
alias kctx='kubectl config current-context'
alias kns='kubectl config set-context --current --namespace'
alias kctxs='kubectl config get-contexts'
alias kctxu='kubectl config use-context'

# Advanced Formats
alias kgpw='kubectl get pods -o wide'
alias kgpww='kubectl get pods -o wide --watch'
alias kgpoy='kubectl get pods -o yaml'
alias kgpoj='kubectl get pods -o json'
alias ktop='kubectl top'
alias ktopp='kubectl top pods'
alias ktopn='kubectl top nodes'

# JSONPath & Filtering
alias kip='kubectl get pods -o custom-columns=POD:.metadata.name,IP:.status.podIP --no-headers'
alias kimg='kubectl get pods -o custom-columns=POD:.metadata.name,IMAGE:.spec.containers[*].image'
alias kstatus='kubectl get pods -o custom-columns=POD:.metadata.name,STATUS:.status.phase'

# Networking
alias knet='kubectl get networkpolicies'
alias kep='kubectl get endpoints'

# Security
alias kcan='kubectl auth can-i'
alias kroles='kubectl get roles,clusterroles'
alias kbinds='kubectl get rolebindings,clusterrolebindings'

# Rollout
alias kroll='kubectl rollout'
alias krollh='kubectl rollout history'
alias krollu='kubectl rollout undo'
alias krollr='kubectl rollout restart'
alias ksc='kubectl scale'
alias kaut='kubectl autoscale'

# Cluster
alias kcl='kubectl cluster-info'
alias kapi='kubectl api-resources'
alias kver='kubectl version --short'
alias kcord='kubectl cordon'
alias kuncord='kubectl uncordon'
alias kdrain='kubectl drain --ignore-daemonsets'
alias ktaint='kubectl taint'
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

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Essential': return <Zap className="w-5 h-5 text-yellow-500" />;
      case 'Resources': return <Database className="w-5 h-5 text-blue-500" />;
      case 'Describe': return <Info className="w-5 h-5 text-cyan-500" />;
      case 'Logs & Debug': return <Activity className="w-5 h-5 text-orange-500" />;
      case 'Exec': return <Terminal className="w-5 h-5 text-purple-500" />;
      case 'Networking': return <Globe className="w-5 h-5 text-indigo-500" />;
      case 'Security': return <Shield className="w-5 h-5 text-red-500" />;
      case 'Cluster': return <Cpu className="w-5 h-5 text-slate-500" />;
      default: return <Command className="w-5 h-5 text-gray-500" />;
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-gradient-to-r from-indigo-50 to-blue-50 dark:from-slate-800 dark:to-slate-900 rounded-xl p-6 border border-indigo-200 dark:border-slate-700">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2 bg-indigo-500 rounded-lg">
            <Zap className="w-6 h-6 text-white" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Kubectl Aliases & Productivity</h2>
            <p className="text-sm text-gray-600 dark:text-gray-400">Boost your efficiency with these time-saving aliases and functions</p>
          </div>
        </div>

        {/* How to Use Guide */}
        <div className="bg-white dark:bg-slate-800 rounded-lg p-6 border border-gray-200 dark:border-slate-700 mb-6">
          <div className="flex items-center gap-2 mb-4">
            <BookOpen className="w-5 h-5 text-indigo-500" />
            <h3 className="font-semibold text-lg text-gray-900 dark:text-white">How to Use</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-indigo-600 dark:text-indigo-400 font-medium">
                <span className="flex items-center justify-center w-6 h-6 rounded-full bg-indigo-100 dark:bg-indigo-900/50 text-xs">1</span>
                Copy Configuration
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Click the "Copy All" button below to get the complete alias configuration script.
              </p>
            </div>
            
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-indigo-600 dark:text-indigo-400 font-medium">
                <span className="flex items-center justify-center w-6 h-6 rounded-full bg-indigo-100 dark:bg-indigo-900/50 text-xs">2</span>
                Update Shell Config
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Paste the content into your shell configuration file:
                <code className="block mt-1 bg-gray-100 dark:bg-slate-900 px-2 py-1 rounded text-xs font-mono">
                  ~/.bashrc (Bash) or ~/.zshrc (Zsh)
                </code>
              </p>
            </div>
            
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-indigo-600 dark:text-indigo-400 font-medium">
                <span className="flex items-center justify-center w-6 h-6 rounded-full bg-indigo-100 dark:bg-indigo-900/50 text-xs">3</span>
                Apply Changes
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Reload your shell configuration to start using the aliases:
                <code className="block mt-1 bg-gray-100 dark:bg-slate-900 px-2 py-1 rounded text-xs font-mono">
                  source ~/.bashrc
                </code>
              </p>
            </div>
          </div>
        </div>

        {/* Setup Code Block */}
        <div className="bg-gray-900 rounded-lg p-4 border border-gray-800">
          <div className="flex items-center justify-between mb-3">
            <span className="text-gray-400 text-sm font-mono">~/.bashrc or ~/.zshrc</span>
            <button
              onClick={copySetup}
              className="p-2 hover:bg-gray-800 rounded-md transition-colors flex items-center gap-2 text-gray-400 hover:text-white"
              title="Copy to clipboard"
            >
              {copiedSetup ? (
                <>
                  <Check className="w-4 h-4 text-green-400" />
                  <span className="text-sm text-green-400">Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4" />
                  <span className="text-sm">Copy All</span>
                </>
              )}
            </button>
          </div>
          <pre className="text-green-400 text-sm font-mono overflow-x-auto custom-scrollbar max-h-64">
            {bashSetup}
          </pre>
        </div>
      </div>

      {/* Categories Grid */}
      {categories.map((category) => (
        <div key={category} className="mb-6">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
            {getCategoryIcon(category)}
            {category} Aliases
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {aliases.filter(a => a.category === category).map((alias, index) => (
              <div
                key={index}
                className="bg-white dark:bg-slate-800 rounded-lg p-3 border border-gray-200 dark:border-slate-700 hover:border-indigo-400 dark:hover:border-indigo-500 hover:shadow-md transition-all group"
              >
                <div className="flex items-start justify-between mb-2">
                  <code className="text-sm font-bold text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-900/20 px-1.5 py-0.5 rounded">
                    {alias.alias}
                  </code>
                  <button
                    onClick={() => copyToClipboard(`alias ${alias.alias}='${alias.command}'`, index)}
                    className="p-1 hover:bg-gray-100 dark:hover:bg-slate-700 rounded transition-colors"
                    title="Copy alias definition"
                  >
                    {copiedIndex === index ? (
                      <Check className="w-3 h-3 text-green-600 dark:text-green-400" />
                    ) : (
                      <Copy className="w-3 h-3 text-gray-400 group-hover:text-indigo-600" />
                    )}
                  </button>
                </div>
                <code className="text-xs text-gray-600 dark:text-gray-400 block mb-2 font-mono break-all">
                  {alias.command}
                </code>
                <p className="text-xs text-gray-500 dark:text-gray-500 mb-2">
                  {alias.description}
                </p>
                {alias.example && (
                  <div className="mt-auto pt-2 border-t border-gray-100 dark:border-slate-700 flex items-center justify-between">
                    <code className="text-xs text-gray-700 dark:text-gray-300 font-mono truncate mr-2" title={alias.example}>
                      {alias.example}
                    </code>
                    <button
                      onClick={async () => {
                        await navigator.clipboard.writeText(alias.example || '');
                        setCopiedExampleIndex(index);
                        setTimeout(() => setCopiedExampleIndex(null), 2000);
                      }}
                      className="p-1 hover:bg-gray-100 dark:hover:bg-slate-700 rounded transition-colors flex-shrink-0"
                      title="Copy example"
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
  );
}
