export const observabilityCommandsData = [
  // Metrics
  {
    category: 'Observability',
    subcategory: 'Metrics',
    command: 'kubectl top nodes',
    description: 'Show metrics for all nodes',
    example: 'kubectl top nodes',
    versionIntroduced: '1.8',
    difficultyLevel: 'beginner',
    tags: 'metrics,top,nodes',
    flags: '',
    output: `NAME           CPU(cores)   CPU%   MEMORY(bytes)   MEMORY%
control-plane  150m         7%     1200Mi          15%
worker-node-1  200m         10%    2500Mi          31%`
  },
  {
    category: 'Observability',
    subcategory: 'Metrics',
    command: 'kubectl top pods --all-namespaces',
    description: 'Show metrics for all pods in all namespaces',
    example: 'kubectl top pods --all-namespaces',
    versionIntroduced: '1.8',
    difficultyLevel: 'beginner',
    tags: 'metrics,top,pods',
    flags: '--all-namespaces',
    output: `NAMESPACE   NAME         CPU(cores)   MEMORY(bytes)
default     nginx-pod    10m          50Mi
kube-system coredns-123  5m           15Mi
monitoring  prometheus   500m         1024Mi`
  },
  {
    category: 'Observability',
    subcategory: 'Metrics',
    command: 'kubectl top pod my-pod --containers',
    description: 'Show metrics for containers in a pod',
    example: 'kubectl top pod my-pod --containers',
    versionIntroduced: '1.8',
    difficultyLevel: 'intermediate',
    tags: 'metrics,top,containers',
    flags: '--containers',
    output: `POD       NAME           CPU(cores)   MEMORY(bytes)
my-pod    main-app       100m         256Mi
my-pod    sidecar-proxy  20m          64Mi`
  },

  // Logs
  {
    category: 'Observability',
    subcategory: 'Logs',
    command: 'kubectl logs -f my-pod',
    description: 'Stream logs from my-pod',
    example: 'kubectl logs -f my-pod',
    versionIntroduced: '1.0',
    difficultyLevel: 'beginner',
    tags: 'logs,stream',
    flags: '-f',
    output: `[INFO] Starting application...
[INFO] Listening on port 8080
[INFO] Received request /healthz`
  },
  {
    category: 'Observability',
    subcategory: 'Logs',
    command: 'kubectl logs my-pod --since=1h',
    description: 'Show logs from the last hour',
    example: 'kubectl logs my-pod --since=1h',
    versionIntroduced: '1.0',
    difficultyLevel: 'beginner',
    tags: 'logs,since',
    flags: '--since',
    output: `[INFO] Scheduled task executed at 10:00
[WARN] High memory usage detected`
  },
  {
    category: 'Observability',
    subcategory: 'Logs',
    command: 'kubectl logs my-pod --tail=20',
    description: 'Show the last 20 lines of logs',
    example: 'kubectl logs my-pod --tail=20',
    versionIntroduced: '1.0',
    difficultyLevel: 'beginner',
    tags: 'logs,tail',
    flags: '--tail',
    output: `...
[INFO] Processing item 98
[INFO] Processing item 99
[INFO] Processing item 100`
  },
  {
    category: 'Observability',
    subcategory: 'Logs',
    command: 'kubectl logs my-pod -c my-container --previous',
    description: 'Show logs from the previous instance of a container',
    example: 'kubectl logs my-pod -c my-container --previous',
    versionIntroduced: '1.0',
    difficultyLevel: 'intermediate',
    tags: 'logs,previous,container',
    flags: '--previous -c',
    output: `[INFO] Application starting...
[FATAL] Unhandled exception: OutOfMemoryError
[INFO] Shutting down...`
  },

  // Events
  {
    category: 'Observability',
    subcategory: 'Events',
    command: 'kubectl get events --sort-by=.metadata.creationTimestamp',
    description: 'List events sorted by timestamp',
    example: 'kubectl get events --sort-by=.metadata.creationTimestamp',
    versionIntroduced: '1.0',
    difficultyLevel: 'beginner',
    tags: 'events,sort',
    flags: '--sort-by',
    output: `LAST SEEN   TYPE      REASON      OBJECT          MESSAGE
5m          Normal    Scheduled   pod/my-pod      Successfully assigned default/my-pod to worker-node-1
2m          Normal    Pulling     pod/my-pod      Pulling image "nginx:latest"
1m          Normal    Created     pod/my-pod      Created container nginx`
  },

  // Debugging
  {
    category: 'Observability',
    subcategory: 'Debugging',
    command: 'kubectl debug my-pod -it --image=busybox --target=my-container',
    description: 'Attach ephemeral debug container to a running pod',
    example: 'kubectl debug my-pod -it --image=busybox --target=my-container',
    versionIntroduced: '1.18',
    difficultyLevel: 'advanced',
    tags: 'debug,ephemeral',
    flags: '--image --target',
    output: `Targeting pod/my-pod. If you don't see a command prompt, try pressing enter.
/ #`
  },

  // Log Analysis
  {
    category: 'Observability',
    subcategory: 'Log Analysis',
    command: 'kubectl logs pod-name | grep "Error"',
    description: 'Search for "Error" in pod logs',
    example: 'kubectl logs my-app-pod | grep "Error"',
    versionIntroduced: '1.0',
    difficultyLevel: 'intermediate',
    tags: 'logs,grep,search,error',
    flags: '',
    output: `[ERROR] Connection refused: database:5432
[ERROR] Failed to process request ID 12345`
  },
  {
    category: 'Observability',
    subcategory: 'Log Analysis',
    command: 'kubectl logs pod-name | grep -C 5 "Exception"',
    description: 'Search for "Exception" with 5 lines of context',
    example: 'kubectl logs backend-pod | grep -C 5 "Exception"',
    versionIntroduced: '1.0',
    difficultyLevel: 'intermediate',
    tags: 'logs,grep,context,exception',
    flags: '',
    output: `    at com.example.MyClass.method(MyClass.java:123)
    at com.example.MyClass.main(MyClass.java:45)
[ERROR] Unhandled Exception: NullPointerException
    at com.example.AnotherClass.process(AnotherClass.java:67)
    at com.example.MyClass.method(MyClass.java:124)`
  },
  {
    category: 'Observability',
    subcategory: 'Log Analysis',
    command: 'kubectl logs -l app=nginx --tail=100 | grep "404"',
    description: 'Search for "404" errors in last 100 lines of all nginx pods',
    example: 'kubectl logs -l app=nginx --tail=100 | grep "404"',
    versionIntroduced: '1.0',
    difficultyLevel: 'intermediate',
    tags: 'logs,grep,label-selector,http-error',
    flags: '-l --tail',
    output: `192.168.1.10 - - [25/Jan/2024:10:00:00 +0000] "GET /favicon.ico HTTP/1.1" 404 153 "-" "Mozilla/5.0"
192.168.1.11 - - [25/Jan/2024:10:01:00 +0000] "GET /admin HTTP/1.1" 404 153 "-" "Mozilla/5.0"`
  },

  // Event Monitoring
  {
    category: 'Observability',
    subcategory: 'Event Monitoring',
    command: 'kubectl get events --field-selector type=Warning',
    description: 'List all warning events in the namespace',
    example: 'kubectl get events --field-selector type=Warning',
    versionIntroduced: '1.0',
    difficultyLevel: 'beginner',
    tags: 'events,warning,filter',
    flags: '--field-selector',
    output: `LAST SEEN   TYPE      REASON             OBJECT             MESSAGE
10m         Warning   FailedScheduling   pod/pending-pod    0/2 nodes are available: 2 Insufficient cpu
2m          Warning   BackOff            pod/crash-pod      Back-off restarting failed container`
  },
  {
    category: 'Observability',
    subcategory: 'Event Monitoring',
    command: 'kubectl get events --sort-by=.lastTimestamp',
    description: 'List events sorted by last occurrence',
    example: 'kubectl get events --sort-by=.lastTimestamp',
    versionIntroduced: '1.0',
    difficultyLevel: 'intermediate',
    tags: 'events,sort,timestamp',
    flags: '--sort-by',
    output: `LAST SEEN   TYPE      REASON      OBJECT          MESSAGE
5m          Normal    Scheduled   pod/my-pod      Successfully assigned default/my-pod to worker-node-1
1m          Normal    Started     pod/my-pod      Started container main`
  },
  {
    category: 'Observability',
    subcategory: 'Event Monitoring',
    command: 'kubectl get events --field-selector involvedObject.kind=Pod,involvedObject.name=my-pod',
    description: 'Get events related to a specific pod',
    example: 'kubectl get events --field-selector involvedObject.kind=Pod,involvedObject.name=my-pod',
    versionIntroduced: '1.0',
    difficultyLevel: 'intermediate',
    tags: 'events,pod,filter,specific',
    flags: '--field-selector',
    output: `LAST SEEN   TYPE      REASON      OBJECT       MESSAGE
10m         Normal    Scheduled   pod/my-pod   Successfully assigned default/my-pod to worker-node-1
2m          Normal    Pulled      pod/my-pod   Successfully pulled image "nginx:latest"`
  },

  // Port Forwarding
  {
    category: 'Observability',
    subcategory: 'Port Forwarding',
    command: 'kubectl port-forward svc/my-service 8080:80',
    description: 'Forward local port 8080 to service port 80',
    example: 'kubectl port-forward svc/my-service 8080:80',
    versionIntroduced: '1.0',
    difficultyLevel: 'beginner',
    tags: 'port-forward,service,network',
    flags: '',
    output: `Forwarding from 127.0.0.1:8080 -> 80
Forwarding from [::1]:8080 -> 80
Handling connection for 8080`
  },
  {
    category: 'Observability',
    subcategory: 'Port Forwarding',
    command: 'kubectl port-forward pod/my-pod 5432:5432',
    description: 'Forward local port to pod port (e.g. database)',
    example: 'kubectl port-forward pod/postgres-pod 5432:5432',
    versionIntroduced: '1.0',
    difficultyLevel: 'beginner',
    tags: 'port-forward,pod,database',
    flags: '',
    output: `Forwarding from 127.0.0.1:5432 -> 5432
Forwarding from [::1]:5432 -> 5432
Handling connection for 5432`
  },
  {
    category: 'Observability',
    subcategory: 'Port Forwarding',
    command: 'kubectl port-forward deployment/my-dep :80',
    description: 'Forward random local port to deployment port 80',
    example: 'kubectl port-forward deployment/frontend :80',
    versionIntroduced: '1.0',
    difficultyLevel: 'intermediate',
    tags: 'port-forward,deployment,random-port',
    flags: '',
    output: `Forwarding from 127.0.0.1:58432 -> 80
Forwarding from [::1]:58432 -> 80
Handling connection for 58432`
  },

  // Resource Usage (Top)
  {
    category: 'Observability',
    subcategory: 'Resource Usage',
    command: 'kubectl top pod --sort-by=cpu',
    description: 'List pods sorted by CPU usage',
    example: 'kubectl top pod --sort-by=cpu',
    versionIntroduced: '1.8',
    difficultyLevel: 'beginner',
    tags: 'top,metrics,cpu,sort',
    flags: '--sort-by',
    output: `NAME          CPU(cores)   MEMORY(bytes)
heavy-calc    800m         200Mi
web-server    100m         50Mi
sidecar       10m          20Mi`
  },
  {
    category: 'Observability',
    subcategory: 'Resource Usage',
    command: 'kubectl top pod --sort-by=memory',
    description: 'List pods sorted by memory usage',
    example: 'kubectl top pod --sort-by=memory',
    versionIntroduced: '1.8',
    difficultyLevel: 'beginner',
    tags: 'top,metrics,memory,sort',
    flags: '--sort-by',
    output: `NAME          CPU(cores)   MEMORY(bytes)
db-cache      200m         2048Mi
app-server    500m         1024Mi
monitor       50m          128Mi`
  },
  {
    category: 'Observability',
    subcategory: 'Resource Usage',
    command: 'kubectl top node --no-headers',
    description: 'Show node metrics without headers (useful for scripts)',
    example: 'kubectl top node --no-headers',
    versionIntroduced: '1.8',
    difficultyLevel: 'intermediate',
    tags: 'top,metrics,node,scripting',
    flags: '--no-headers',
    output: `worker-1      150m         8%     2000Mi          12%
worker-2      300m         15%    4000Mi          25%
control-1     200m         10%    1500Mi          18%`
  },

  // Debugging
  {
    category: 'Observability',
    subcategory: 'Debugging',
    command: 'kubectl debug node/my-node -it --image=busybox',
    description: 'Debug a node by creating a pod on it (Caution: Requires elevated privileges)',
    example: 'kubectl debug node/worker-1 -it --image=busybox',
    versionIntroduced: '1.18',
    difficultyLevel: 'advanced',
    tags: 'debug,node,maintenance',
    flags: '--image',
    output: `Creating debugging pod node-debugger-worker-1-xyz with container debugger on node worker-1.
If you don't see a command prompt, try pressing enter.
/ #`
  },
  {
    category: 'Observability',
    subcategory: 'Debugging',
    command: 'kubectl debug pod/my-pod -it --copy-to=my-debugger --image=busybox',
    description: 'Debug a pod by creating a copy with a debug container',
    example: 'kubectl debug pod/frontend-123 -it --copy-to=frontend-debug --image=busybox',
    versionIntroduced: '1.18',
    difficultyLevel: 'intermediate',
    tags: 'debug,pod,copy',
    flags: '--copy-to --image',
    output: `Targeting pod/frontend-123. If you don't see a command prompt, try pressing enter.
/ #`
  }
];
