export const comprehensiveK8sCommands = [
  {
    category: "Comprehensive kubectl",
    subcategory: "Basic Operations",
    command: "kubectl get pods",
    description: "Get all pods in the current namespace",
    example: "kubectl get pods",
    versionIntroduced: "1.0",
    difficultyLevel: "Beginner",
    tags: "pods,basic,get",
    flags: "",
    output: `NAME         READY   STATUS    RESTARTS   AGE
nginx-pod    1/1     Running   0          5m
db-pod       1/1     Running   0          5m`,
  },
  {
    category: "Comprehensive kubectl",
    subcategory: "Basic Operations",
    command: "kubectl get pods -o wide",
    description: "Get pods with additional information",
    example: "kubectl get pods -o wide",
    versionIntroduced: "1.0",
    difficultyLevel: "Beginner",
    tags: "pods,basic,get,wide",
    flags: "-o wide",
    output: `NAME         READY   STATUS    RESTARTS   AGE   IP           NODE          NOMINATED NODE   READINESS GATES
nginx-pod    1/1     Running   0          5m    10.244.1.2   worker-node   <none>           <none>
db-pod       1/1     Running   0          5m    10.244.1.3   worker-node   <none>           <none>`,
  },
  {
    category: "Comprehensive kubectl",
    subcategory: "Basic Operations",
    command: "kubectl get pods --all-namespaces",
    description: "Get pods from all namespaces",
    example: "kubectl get pods --all-namespaces",
    versionIntroduced: "1.0",
    difficultyLevel: "Beginner",
    tags: "pods,basic,get,all-namespaces",
    flags: "--all-namespaces, -A",
    output: `NAMESPACE     NAME                       READY   STATUS    RESTARTS   AGE
default       nginx-pod                  1/1     Running   0          5m
kube-system   coredns-74ff55c5b-8qj9w    1/1     Running   0          2d
kube-system   etcd-minikube              1/1     Running   0          2d`,
  },
  {
    category: "Comprehensive kubectl",
    subcategory: "Basic Operations",
    command: "kubectl describe pod my-pod",
    description: "Get detailed information about a pod",
    example: "kubectl describe pod my-pod",
    versionIntroduced: "1.0",
    difficultyLevel: "Beginner",
    tags: "pods,basic,describe",
    flags: "",
    output: `Name:         my-pod
Namespace:    default
Priority:     0
Node:         worker-node/192.168.49.2
Start Time:   Mon, 01 Jan 2024 10:00:00 +0000
Labels:       run=my-pod
Status:       Running
IP:           10.244.0.3
...`,
  },
  {
    category: "Comprehensive kubectl",
    subcategory: "Basic Operations",
    command: "kubectl logs my-pod",
    description: "Get logs from a pod",
    example: "kubectl logs my-pod",
    versionIntroduced: "1.0",
    difficultyLevel: "Beginner",
    tags: "pods,basic,logs",
    flags: "",
    output: `2024/01/01 10:00:00 [notice] 1#1: using the "epoll" event method
2024/01/01 10:00:00 [notice] 1#1: nginx/1.25.3
2024/01/01 10:00:00 [notice] 1#1: OS: Linux 6.5.11-linuxkit
2024/01/01 10:00:00 [notice] 1#1: getrlimit(RLIMIT_NOFILE): 1048576:1048576`,
  },
  {
    category: "Comprehensive kubectl",
    subcategory: "Basic Operations",
    command: "kubectl logs my-pod -f",
    description: "Follow logs from a pod",
    example: "kubectl logs my-pod -f",
    versionIntroduced: "1.0",
    difficultyLevel: "Beginner",
    tags: "pods,basic,logs,follow",
    flags: "-f, --follow",
    output: `... (streaming logs)
2024/01/01 10:00:05 [notice] 1#1: start worker processes
2024/01/01 10:00:05 [notice] 1#1: start worker process 29`,
  },
  {
    category: "Comprehensive kubectl",
    subcategory: "Basic Operations",
    command: "kubectl exec -it my-pod -- /bin/bash",
    description: "Execute command in a pod",
    example: "kubectl exec -it my-pod -- /bin/bash",
    versionIntroduced: "1.0",
    difficultyLevel: "Beginner",
    tags: "pods,basic,exec,shell",
    flags: "-it",
    output: "root@my-pod:/# ",
  },
  {
    category: "Comprehensive kubectl",
    subcategory: "Basic Operations",
    command: "kubectl apply -f my-file.yaml",
    description: "Apply configuration from a file",
    example: "kubectl apply -f my-file.yaml",
    versionIntroduced: "1.0",
    difficultyLevel: "Beginner",
    tags: "basic,apply,configuration,yaml",
    flags: "-f",
    output: "pod/my-pod created",
  },
  {
    category: "Comprehensive kubectl",
    subcategory: "Basic Operations",
    command: "kubectl delete -f my-file.yaml",
    description: "Delete resources from a file",
    example: "kubectl delete -f my-file.yaml",
    versionIntroduced: "1.0",
    difficultyLevel: "Beginner",
    tags: "basic,delete,configuration,yaml",
    flags: "-f",
    output: "pod/my-pod deleted",
  },
  {
    category: "Comprehensive kubectl",
    subcategory: "Basic Operations",
    command: "kubectl create deployment my-app --image=nginx",
    description: "Create a deployment",
    example: "kubectl create deployment my-app --image=nginx",
    versionIntroduced: "1.0",
    difficultyLevel: "Beginner",
    tags: "basic,create,deployment,nginx",
    flags: "--image",
    output: "deployment.apps/my-app created",
  },
  {
    category: "Comprehensive kubectl",
    subcategory: "Basic Operations",
    command: "kubectl get deployments",
    description: "Get all deployments",
    example: "kubectl get deployments",
    versionIntroduced: "1.0",
    difficultyLevel: "Beginner",
    tags: "deployments,basic,get",
    flags: "",
    output: `NAME     READY   UP-TO-DATE   AVAILABLE   AGE
my-app   1/1     1            1           15s`,
  },
  {
    category: "Comprehensive kubectl",
    subcategory: "Basic Operations",
    command: "kubectl scale deployment my-app --replicas=3",
    description: "Scale a deployment",
    example: "kubectl scale deployment my-app --replicas=3",
    versionIntroduced: "1.0",
    difficultyLevel: "Beginner",
    tags: "deployments,basic,scale,replicas",
    flags: "--replicas",
    output: "deployment.apps/my-app scaled",
  },
  {
    category: "Comprehensive kubectl",
    subcategory: "Basic Operations",
    command: "kubectl get services",
    description: "Get all services",
    example: "kubectl get services",
    versionIntroduced: "1.0",
    difficultyLevel: "Beginner",
    tags: "services,basic,get",
    flags: "",
    output: `NAME         TYPE        CLUSTER-IP     EXTERNAL-IP   PORT(S)   AGE
kubernetes   ClusterIP   10.96.0.1      <none>        443/TCP   2d`,
  },
  {
    category: "Comprehensive kubectl",
    subcategory: "Basic Operations",
    command: "kubectl expose deployment my-app --port=80 --type=LoadBalancer",
    description: "Expose a deployment as a service",
    example: "kubectl expose deployment my-app --port=80 --type=LoadBalancer",
    versionIntroduced: "1.0",
    difficultyLevel: "Beginner",
    tags: "services,basic,expose,loadbalancer",
    flags: "--port, --type",
    output: "service/my-app exposed",
  },
  {
    category: "Comprehensive kubectl",
    subcategory: "Basic Operations",
    command: "kubectl get configmaps",
    description: "Get all configmaps",
    example: "kubectl get configmaps",
    versionIntroduced: "1.0",
    difficultyLevel: "Beginner",
    tags: "configmaps,basic,get",
    flags: "",
    output: `NAME               DATA   AGE
kube-root-ca.crt   1      2d`,
  },
  {
    category: "Comprehensive kubectl",
    subcategory: "Basic Operations",
    command: "kubectl get secrets",
    description: "Get all secrets",
    example: "kubectl get secrets",
    versionIntroduced: "1.0",
    difficultyLevel: "Beginner",
    tags: "secrets,basic,get",
    flags: "",
    output: `NAME                  TYPE                                  DATA   AGE
default-token-abcde   kubernetes.io/service-account-token   3      2d`,
  },
  {
    category: "Comprehensive kubectl",
    subcategory: "Basic Operations",
    command: "kubectl get nodes",
    description: "Get all nodes",
    example: "kubectl get nodes",
    versionIntroduced: "1.0",
    difficultyLevel: "Beginner",
    tags: "nodes,basic,get",
    flags: "",
    output: `NAME          STATUS   ROLES           AGE   VERSION
control-plane   Ready    control-plane   2d    v1.29.0
worker-node     Ready    <none>          2d    v1.29.0`,
  },
  {
    category: "Comprehensive kubectl",
    subcategory: "Basic Operations",
    command: "kubectl get namespaces",
    description: "Get all namespaces",
    example: "kubectl get namespaces",
    versionIntroduced: "1.0",
    difficultyLevel: "Beginner",
    tags: "namespaces,basic,get",
    flags: "",
    output: `NAME              STATUS   AGE
default           Active   2d
kube-node-lease   Active   2d
kube-public       Active   2d
kube-system       Active   2d`,
  },
  {
    category: "Comprehensive kubectl",
    subcategory: "Basic Operations",
    command: "kubectl config get-contexts",
    description: "Get all contexts",
    example: "kubectl config get-contexts",
    versionIntroduced: "1.0",
    difficultyLevel: "Beginner",
    tags: "config,basic,contexts",
    flags: "",
    output: `CURRENT   NAME       CLUSTER    AUTHINFO   NAMESPACE
*         minikube   minikube   minikube   default`,
  },
  {
    category: "Comprehensive kubectl",
    subcategory: "Basic Operations",
    command: "kubectl config current-context",
    description: "Get current context",
    example: "kubectl config current-context",
    versionIntroduced: "1.0",
    difficultyLevel: "Beginner",
    tags: "config,basic,context",
    flags: "",
    output: "minikube",
  },
  {
    category: "Comprehensive kubectl",
    subcategory: "Intermediate Operations",
    command: "kubectl get pods -l app=nginx",
    description: "Get pods with specific label",
    example: "kubectl get pods -l app=nginx",
    versionIntroduced: "1.0",
    difficultyLevel: "Intermediate",
    tags: "pods,intermediate,get,labels",
    flags: "-l, --selector",
    output: `NAME         READY   STATUS    RESTARTS   AGE
nginx-pod    1/1     Running   0          5m`,
  },
  {
    category: "Comprehensive kubectl",
    subcategory: "Intermediate Operations",
    command: "kubectl get pods --field-selector status.phase=Running",
    description: "Get pods by field selector",
    example: "kubectl get pods --field-selector status.phase=Running",
    versionIntroduced: "1.0",
    difficultyLevel: "Intermediate",
    tags: "pods,intermediate,get,field-selector",
    flags: "--field-selector",
    output: `NAME         READY   STATUS    RESTARTS   AGE
nginx-pod    1/1     Running   0          5m
db-pod       1/1     Running   0          5m`,
  },
  {
    category: "Comprehensive kubectl",
    subcategory: "Intermediate Operations",
    command: "kubectl logs my-pod --tail=100",
    description: "Get last 100 lines of logs",
    example: "kubectl logs my-pod --tail=100",
    versionIntroduced: "1.0",
    difficultyLevel: "Intermediate",
    tags: "pods,intermediate,logs,tail",
    flags: "--tail",
    output: `... (previous 98 lines)
2024/01/01 10:00:05 [notice] 1#1: start worker processes
2024/01/01 10:00:05 [notice] 1#1: start worker process 29`,
  },
  {
    category: "Comprehensive kubectl",
    subcategory: "Intermediate Operations",
    command: "kubectl exec my-pod -- cat /etc/hosts",
    description: "Execute command in pod without interactive mode",
    example: "kubectl exec my-pod -- cat /etc/hosts",
    versionIntroduced: "1.0",
    difficultyLevel: "Intermediate",
    tags: "pods,intermediate,exec,command",
    flags: "",
    output: `# Kubernetes-managed hosts file.
127.0.0.1	localhost
::1	localhost ip6-localhost ip6-loopback
fe00::0	ip6-localnet
fe00::0	ip6-mcastprefix
fe00::1	ip6-allnodes
fe00::2	ip6-allrouters
10.244.0.3	my-pod`,
  },
  {
    category: "Comprehensive kubectl",
    subcategory: "Intermediate Operations",
    command: "kubectl port-forward pod/my-pod 8080:80",
    description: "Forward local port to pod port",
    example: "kubectl port-forward pod/my-pod 8080:80",
    versionIntroduced: "1.0",
    difficultyLevel: "Intermediate",
    tags: "pods,intermediate,port-forward,debugging",
    flags: "",
    output: `Forwarding from 127.0.0.1:8080 -> 80
Forwarding from [::1]:8080 -> 80
Handling connection for 8080`,
  },
  {
    category: "Comprehensive kubectl",
    subcategory: "Intermediate Operations",
    command: "kubectl apply -f my-file.yaml --dry-run=client",
    description: "Preview apply without executing",
    example: "kubectl apply -f my-file.yaml --dry-run=client",
    versionIntroduced: "1.0",
    difficultyLevel: "Intermediate",
    tags: "intermediate,apply,dry-run,preview",
    flags: "--dry-run=client",
    output: "pod/my-pod created (dry run)",
  },
  {
    category: "Comprehensive kubectl",
    subcategory: "Intermediate Operations",
    command:
      'kubectl patch deployment my-deploy -p \'{"spec":{"replicas":5}}\'',
    description: "Partially update a deployment",
    example:
      'kubectl patch deployment my-deploy -p \'{"spec":{"replicas":5}}\'',
    versionIntroduced: "1.0",
    difficultyLevel: "Intermediate",
    tags: "deployments,intermediate,patch,update",
    flags: "-p",
    output: "deployment.apps/my-deploy patched",
  },
  {
    category: "Comprehensive kubectl",
    subcategory: "Intermediate Operations",
    command: "kubectl get pods -o json",
    description: "Get pods in JSON format",
    example: "kubectl get pods -o json",
    versionIntroduced: "1.0",
    difficultyLevel: "Intermediate",
    tags: "pods,intermediate,get,json,output",
    flags: "-o json",
    output: `{
    "apiVersion": "v1",
    "items": [
        {
            "apiVersion": "v1",
            "kind": "Pod",
            "metadata": {
                "name": "my-pod",
                "namespace": "default"
            },
            "status": {
                "phase": "Running"
            }
        }
    ],
    "kind": "List",
    "metadata": {
        "resourceVersion": "12345"
    }
}`,
  },
  {
    category: "Comprehensive kubectl",
    subcategory: "Intermediate Operations",
    command: "kubectl get pods -o yaml",
    description: "Get pods in YAML format",
    example: "kubectl get pods -o yaml",
    versionIntroduced: "1.0",
    difficultyLevel: "Intermediate",
    tags: "pods,intermediate,get,yaml,output",
    flags: "-o yaml",
    output: `apiVersion: v1
items:
- apiVersion: v1
  kind: Pod
  metadata:
    name: my-pod
    namespace: default
  status:
    phase: Running
kind: List
metadata:
  resourceVersion: "12345"`,
  },
  {
    category: "Comprehensive kubectl",
    subcategory: "Intermediate Operations",
    command: "kubectl label pods my-pod version=v1",
    description: "Add label to a pod",
    example: "kubectl label pods my-pod version=v1",
    versionIntroduced: "1.0",
    difficultyLevel: "Intermediate",
    tags: "pods,intermediate,labels,update",
    flags: "",
    output: "pod/my-pod labeled",
  },
  {
    category: "Comprehensive kubectl",
    subcategory: "Intermediate Operations",
    command: 'kubectl annotate pods my-pod description="My web server"',
    description: "Add annotation to a pod",
    example: 'kubectl annotate pods my-pod description="My web server"',
    versionIntroduced: "1.0",
    difficultyLevel: "Intermediate",
    tags: "pods,intermediate,annotations,update",
    flags: "",
    output: "pod/my-pod annotated",
  },
  {
    category: "Comprehensive kubectl",
    subcategory: "Intermediate Operations",
    command: "kubectl rollout status deployment/my-deploy",
    description: "Check rollout status of deployment",
    example: "kubectl rollout status deployment/my-deploy",
    versionIntroduced: "1.0",
    difficultyLevel: "Intermediate",
    tags: "deployments,intermediate,rollout,status",
    flags: "",
    output: 'deployment "my-deploy" successfully rolled out',
  },
  {
    category: "Comprehensive kubectl",
    subcategory: "Intermediate Operations",
    command: "kubectl rollout history deployment/my-deploy",
    description: "Check rollout history of deployment",
    example: "kubectl rollout history deployment/my-deploy",
    versionIntroduced: "1.0",
    difficultyLevel: "Intermediate",
    tags: "deployments,intermediate,rollout,history",
    flags: "",
    output: `deployment.apps/my-deploy 
REVISION  CHANGE-CAUSE
1         <none>
2         kubectl apply --filename=deployment.yaml --record=true`,
  },
  {
    category: "Comprehensive kubectl",
    subcategory: "Advanced Operations",
    command: "kubectl get pods -o jsonpath='{.items[*].metadata.name}'",
    description: "Get pod names using JSONPath",
    example: "kubectl get pods -o jsonpath='{.items[*].metadata.name}'",
    versionIntroduced: "1.0",
    difficultyLevel: "Advanced",
    tags: "pods,advanced,jsonpath,output",
    flags: "-o jsonpath",
    output: "nginx-pod db-pod",
  },
  {
    category: "Comprehensive kubectl",
    subcategory: "Advanced Operations",
    command:
      "kubectl get pods -o custom-columns=NAME:.metadata.name,STATUS:.status.phase",
    description: "Get pods with custom columns",
    example:
      "kubectl get pods -o custom-columns=NAME:.metadata.name,STATUS:.status.phase",
    versionIntroduced: "1.0",
    difficultyLevel: "Advanced",
    tags: "pods,advanced,custom-columns,output",
    flags: "-o custom-columns",
    output: `NAME         STATUS
nginx-pod    Running
db-pod       Running`,
  },
  {
    category: "Comprehensive kubectl",
    subcategory: "Advanced Operations",
    command: "kubectl exec my-pod -c my-container -- /bin/sh",
    description: "Execute command in specific container",
    example: "kubectl exec my-pod -c my-container -- /bin/sh",
    versionIntroduced: "1.0",
    difficultyLevel: "Advanced",
    tags: "pods,advanced,exec,container,shell",
    flags: "-c, --container",
    output: "sh-4.2# ",
  },
  {
    category: "Comprehensive kubectl",
    subcategory: "Advanced Operations",
    command: "kubectl logs my-pod -c my-container",
    description: "Get logs from specific container",
    example: "kubectl logs my-pod -c my-container",
    versionIntroduced: "1.0",
    difficultyLevel: "Advanced",
    tags: "pods,advanced,logs,container",
    flags: "-c, --container",
    output: `2024/01/01 10:00:00 [info] Starting my-container application...
2024/01/01 10:00:01 [info] Connected to database`,
  },
  {
    category: "Comprehensive kubectl",
    subcategory: "Advanced Operations",
    command: "kubectl debug my-pod -it --image=busybox",
    description: "Create debug container for pod",
    example: "kubectl debug my-pod -it --image=busybox",
    versionIntroduced: "1.18",
    difficultyLevel: "Advanced",
    tags: "pods,advanced,debug,ephemeral",
    flags: "--image",
    output: `Targeting pod/my-pod. If you don't see a command prompt, try pressing enter.
/ #`,
  },
  {
    category: "Comprehensive kubectl",
    subcategory: "Advanced Operations",
    command: "kubectl top nodes",
    description: "Show resource usage of nodes",
    example: "kubectl top nodes",
    versionIntroduced: "1.8",
    difficultyLevel: "Advanced",
    tags: "nodes,advanced,metrics,top",
    flags: "",
    output: `NAME            CPU(cores)   CPU%   MEMORY(bytes)   MEMORY%
control-plane   150m         7%     1200Mi          15%
worker-node     200m         10%    2500Mi          31%`,
  },
  {
    category: "Comprehensive kubectl",
    subcategory: "Advanced Operations",
    command: "kubectl top pods",
    description: "Show resource usage of pods",
    example: "kubectl top pods",
    versionIntroduced: "1.8",
    difficultyLevel: "Advanced",
    tags: "pods,advanced,metrics,top",
    flags: "",
    output: `NAME         CPU(cores)   MEMORY(bytes)
nginx-pod    10m          50Mi
db-pod       100m         256Mi`,
  },
  {
    category: "Comprehensive kubectl",
    subcategory: "Advanced Operations",
    command: "kubectl cordon my-node",
    description: "Mark node as unschedulable",
    example: "kubectl cordon my-node",
    versionIntroduced: "1.0",
    difficultyLevel: "Advanced",
    tags: "nodes,advanced,maintenance,cordon",
    flags: "",
    output: "node/my-node cordoned",
  },
  {
    category: "Comprehensive kubectl",
    subcategory: "Advanced Operations",
    command: "kubectl uncordon my-node",
    description: "Mark node as schedulable",
    example: "kubectl uncordon my-node",
    versionIntroduced: "1.0",
    difficultyLevel: "Advanced",
    tags: "nodes,advanced,maintenance,uncordon",
    flags: "",
    output: "node/my-node uncordoned",
  },
  {
    category: "Comprehensive kubectl",
    subcategory: "Advanced Operations",
    command: "kubectl drain my-node",
    description: "Drain node for maintenance",
    example: "kubectl drain my-node --ignore-daemonsets",
    versionIntroduced: "1.0",
    difficultyLevel: "Advanced",
    tags: "nodes,advanced,maintenance,drain",
    flags: "--ignore-daemonsets",
    output: `node/my-node already cordoned
evicting pod default/nginx-pod
pod/nginx-pod evicted
node/my-node drained`,
  },
  {
    category: "Comprehensive kubectl",
    subcategory: "Advanced Operations",
    command: "kubectl get events",
    description: "Get cluster events",
    example: "kubectl get events",
    versionIntroduced: "1.0",
    difficultyLevel: "Advanced",
    tags: "events,advanced,monitoring",
    flags: "",
    output: `LAST SEEN   TYPE      REASON              OBJECT              MESSAGE
2m          Normal    Scheduled           pod/nginx-pod       Successfully assigned default/nginx-pod to worker-node
1m          Normal    Pulling             pod/nginx-pod       Pulling image "nginx:latest"
1m          Normal    Pulled              pod/nginx-pod       Successfully pulled image "nginx:latest"
1m          Normal    Created             pod/nginx-pod       Created container nginx
1m          Normal    Started             pod/nginx-pod       Started container nginx`,
  },
  {
    category: "Comprehensive kubectl",
    subcategory: "Advanced Operations",
    command: "kubectl get events --field-selector involvedObject.name=my-pod",
    description: "Get events for specific object",
    example: "kubectl get events --field-selector involvedObject.name=my-pod",
    versionIntroduced: "1.0",
    difficultyLevel: "Advanced",
    tags: "events,advanced,monitoring,field-selector",
    flags: "--field-selector",
    output: `LAST SEEN   TYPE      REASON      OBJECT          MESSAGE
5m          Normal    Scheduled   pod/my-pod      Successfully assigned default/my-pod to worker-node`,
  },
  {
    category: "Comprehensive kubectl",
    subcategory: "Expert Operations",
    command:
      "kubectl get pods -o json | jq '.items[] | {name: .metadata.name, status: .status.phase}'",
    description: "Process pod information with jq",
    example:
      "kubectl get pods -o json | jq '.items[] | {name: .metadata.name, status: .status.phase}'",
    versionIntroduced: "1.0",
    difficultyLevel: "Expert",
    tags: "pods,expert,jq,json,processing",
    flags: "",
    output: `{
  "name": "nginx-pod",
  "status": "Running"
}
{
  "name": "db-pod",
  "status": "Running"
}`,
  },
  {
    category: "Comprehensive kubectl",
    subcategory: "Expert Operations",
    command:
      "kubectl get pods --all-namespaces -o json | jq '.items[] | select(.status.phase == \"Failed\") | .metadata.name'",
    description: "Find all failed pods across namespaces",
    example:
      "kubectl get pods --all-namespaces -o json | jq '.items[] | select(.status.phase == \"Failed\") | .metadata.name'",
    versionIntroduced: "1.0",
    difficultyLevel: "Expert",
    tags: "pods,expert,jq,json,filtering",
    flags: "-A",
    output: '"failed-job-abcde"\n"crashed-pod-12345"',
  },
  {
    category: "Comprehensive kubectl",
    subcategory: "Expert Operations",
    command: "kubectl proxy --port=8001",
    description: "Start proxy to Kubernetes API",
    example: "kubectl proxy --port=8001",
    versionIntroduced: "1.0",
    difficultyLevel: "Expert",
    tags: "api,expert,proxy,debugging",
    flags: "--port",
    output: "Starting to serve on 127.0.0.1:8001",
  },
  {
    category: "Comprehensive kubectl",
    subcategory: "Expert Operations",
    command: "kubectl cp my-pod:/path/to/file ./local-file",
    description: "Copy file from pod to local",
    example: "kubectl cp my-pod:/path/to/file ./local-file",
    versionIntroduced: "1.0",
    difficultyLevel: "Expert",
    tags: "pods,expert,copy,files",
    flags: "",
    output: "(No output on success)",
  },
  {
    category: "Comprehensive kubectl",
    subcategory: "Expert Operations",
    command:
      "kubectl get pods -o json | jq '.items[] | select(.spec.containers[].resources.requests.cpu) | {name: .metadata.name, cpu: .spec.containers[0].resources.requests.cpu}'",
    description: "Find pods with CPU requests",
    example:
      "kubectl get pods -o json | jq '.items[] | select(.spec.containers[].resources.requests.cpu) | {name: .metadata.name, cpu: .spec.containers[0].resources.requests.cpu}'",
    versionIntroduced: "1.0",
    difficultyLevel: "Expert",
    tags: "pods,expert,jq,json,resources",
    flags: "",
    output: `{
  "name": "nginx-pod",
  "cpu": "100m"
}
{
  "name": "db-pod",
  "cpu": "500m"
}`,
  },
  {
    category: "Comprehensive kubectl",
    subcategory: "Expert Operations",
    command: "kubectl get pods --sort-by=.metadata.creationTimestamp",
    description: "Sort pods by creation time",
    example: "kubectl get pods --sort-by=.metadata.creationTimestamp",
    versionIntroduced: "1.11",
    difficultyLevel: "Expert",
    tags: "pods,expert,sorting,timestamp",
    flags: "--sort-by",
    output: `NAME         READY   STATUS    RESTARTS   AGE
old-pod      1/1     Running   0          5d
new-pod      1/1     Running   0          5m`,
  },
  {
    category: "Comprehensive kubectl",
    subcategory: "Expert Operations",
    command:
      "kubectl get pods -o json | jq '.items[] | select(.status.containerStatuses[].restartCount > 5) | .metadata.name'",
    description: "Find pods with high restart count",
    example:
      "kubectl get pods -o json | jq '.items[] | select(.status.containerStatuses[].restartCount > 5) | .metadata.name'",
    versionIntroduced: "1.0",
    difficultyLevel: "Expert",
    tags: "pods,expert,jq,json,filtering,restarts",
    flags: "",
    output: '"unstable-app-pod"',
  },
  {
    category: "Comprehensive kubectl",
    subcategory: "Expert Operations",
    command: "kubectl auth can-i get pods",
    description: "Check if you can perform an action",
    example: "kubectl auth can-i get pods",
    versionIntroduced: "1.8",
    difficultyLevel: "Expert",
    tags: "rbac,expert,authorization,permissions",
    flags: "",
    output: "yes",
  },
  {
    category: "Comprehensive kubectl",
    subcategory: "Expert Operations",
    command:
      "kubectl auth can-i create pods --as=system:serviceaccount:default:my-sa",
    description: "Check permissions for specific service account",
    example:
      "kubectl auth can-i create pods --as=system:serviceaccount:default:my-sa",
    versionIntroduced: "1.8",
    difficultyLevel: "Expert",
    tags: "rbac,expert,authorization,permissions,service-account",
    flags: "--as",
    output: "no",
  },
  {
    category: "Comprehensive kubectl",
    subcategory: "Expert Operations",
    command:
      "kubectl get pods -o json | jq '.items[] | select(.spec.securityContext.runAsNonRoot == true) | .metadata.name'",
    description: "Find pods with non-root security context",
    example:
      "kubectl get pods -o json | jq '.items[] | select(.spec.securityContext.runAsNonRoot == true) | .metadata.name'",
    versionIntroduced: "1.0",
    difficultyLevel: "Expert",
    tags: "pods,expert,jq,json,security,non-root",
    flags: "",
    output: '"secure-pod"',
  },
  {
    category: "Comprehensive kubectl",
    subcategory: "Expert Operations",
    command:
      "kubectl get nodes -o json | jq '.items[] | {name: .metadata.name, os: .status.nodeInfo.osImage, kernel: .status.nodeInfo.kernelVersion}'",
    description: "Get node OS information",
    example:
      "kubectl get nodes -o json | jq '.items[] | {name: .metadata.name, os: .status.nodeInfo.osImage, kernel: .status.nodeInfo.kernelVersion}'",
    versionIntroduced: "1.0",
    difficultyLevel: "Expert",
    tags: "nodes,expert,jq,json,information",
    flags: "",
    output: `{
  "name": "worker-node",
  "os": "Ubuntu 22.04.3 LTS",
  "kernel": "5.15.0-91-generic"
}`,
  },
  {
    category: "Comprehensive kubectl",
    subcategory: "Expert Operations",
    command:
      "kubectl get pods -o json | jq '.items[] | select(.spec.containers[].securityContext.privileged == true) | {name: .metadata.name, namespace: .metadata.namespace}'",
    description: "Find privileged pods across all namespaces",
    example:
      "kubectl get pods -o json | jq '.items[] | select(.spec.containers[].securityContext.privileged == true) | {name: .metadata.name, namespace: .metadata.namespace}'",
    versionIntroduced: "1.0",
    difficultyLevel: "Expert",
    tags: "pods,expert,jq,json,security,privileged",
    flags: "",
    output: `{
  "name": "kube-proxy-abcde",
  "namespace": "kube-system"
}`,
  },
  {
    category: "Comprehensive kubectl",
    subcategory: "Expert Operations",
    command:
      'kubectl get storageclasses -o json | jq \'.items[] | select(.metadata.annotations.\"storageclass.kubernetes.io/is-default-class\" == \"true\")\'',
    description: "Find default storage class",
    example:
      'kubectl get storageclasses -o json | jq \'.items[] | select(.metadata.annotations.\"storageclass.kubernetes.io/is-default-class\" == \"true\")\'',
    versionIntroduced: "1.6",
    difficultyLevel: "Expert",
    tags: "storageclass,expert,jq,json,storage",
    flags: "",
    output: `{
  "apiVersion": "storage.k8s.io/v1",
  "kind": "StorageClass",
  "metadata": {
    "name": "standard",
    "annotations": {
      "storageclass.kubernetes.io/is-default-class": "true"
    }
  },
  "provisioner": "k8s.io/minikube-hostpath"
}`,
  },
  {
    category: "Comprehensive kubectl",
    subcategory: "Expert Operations",
    command:
      'kubectl get networkpolicies -o yaml | grep -A 10 -B 10 "ingress\\|egress"',
    description: "Find network policies with ingress/egress rules",
    example:
      'kubectl get networkpolicies -o yaml | grep -A 10 -B 10 "ingress\\|egress"',
    versionIntroduced: "1.3",
    difficultyLevel: "Expert",
    tags: "networkpolicy,expert,yaml,network,security",
    flags: "-A, -B",
    output: `  ingress:
  - from:
    - podSelector:
        matchLabels:
          role: frontend
    ports:
    - protocol: TCP
      port: 6379`,
  },
  {
    category: "Comprehensive kubectl",
    subcategory: "Expert Operations",
    command:
      "kubectl get pvc -o json | jq '.items[] | select(.status.phase == \"Bound\") | {name: .metadata.name, boundTo: .spec.volumeName, capacity: .status.capacity.storage}'",
    description: "Find bound PVCs with their underlying volumes",
    example:
      "kubectl get pvc -o json | jq '.items[] | select(.status.phase == \"Bound\") | {name: .metadata.name, boundTo: .spec.volumeName, capacity: .status.capacity.storage}'",
    versionIntroduced: "1.0",
    difficultyLevel: "Expert",
    tags: "pvc,expert,jq,json,storage,bound",
    flags: "",
    output: `{
  "name": "data-pvc",
  "boundTo": "pvc-1234-abcd",
  "capacity": "10Gi"
}`,
  },
  {
    category: "Comprehensive kubectl",
    subcategory: "Expert Operations",
    command:
      "kubectl get pv -o json | jq '.items[] | select(.spec.claimRef == null) | {name: .metadata.name, capacity: .spec.capacity.storage}'",
    description: "Find unbound persistent volumes",
    example:
      "kubectl get pv -o json | jq '.items[] | select(.spec.claimRef == null) | {name: .metadata.name, capacity: .spec.capacity.storage}'",
    versionIntroduced: "1.0",
    difficultyLevel: "Expert",
    tags: "pv,expert,jq,json,storage,unbound",
    flags: "",
    output: `{
  "name": "pv-001",
  "capacity": "100Gi"
}`,
  },
  {
    category: "Comprehensive kubectl",
    subcategory: "Expert Operations",
    command: "kubectl rollout restart deployment/my-app --dry-run=server",
    description: "Preview restart of deployment",
    example: "kubectl rollout restart deployment/my-app --dry-run=server",
    versionIntroduced: "1.15",
    difficultyLevel: "Expert",
    tags: "rollout,expert,restart,deployment,preview",
    flags: "--dry-run=server",
    output: "deployment.apps/my-app restarted (dry run)",
  },
  {
    category: "Comprehensive kubectl",
    subcategory: "Expert Operations",
    command:
      "kubectl set env deployment/my-app --from=configmap/my-config --dry-run=client -o yaml",
    description: "Set environment variables from ConfigMap with preview",
    example:
      "kubectl set env deployment/my-app --from=configmap/my-config --dry-run=client -o yaml",
    versionIntroduced: "1.2",
    difficultyLevel: "Expert",
    tags: "env,expert,configmap,deployment,preview",
    flags: "--from, --dry-run, -o yaml",
    output: `apiVersion: apps/v1
kind: Deployment
metadata:
  name: my-app
spec:
  template:
    spec:
      containers:
      - name: app
        envFrom:
        - configMapRef:
            name: my-config`,
  },
  {
    category: "Comprehensive kubectl",
    subcategory: "Expert Operations",
    command:
      "kubectl autoscale deployment/my-app --cpu-percent=70 --min=2 --max=10 --dry-run=client -o yaml",
    description: "Create HPA with preview",
    example:
      "kubectl autoscale deployment/my-app --cpu-percent=70 --min=2 --max=10 --dry-run=client -o yaml",
    versionIntroduced: "1.1",
    difficultyLevel: "Expert",
    tags: "autoscale,expert,hpa,scaling,preview",
    flags: "--cpu-percent, --min, --max, --dry-run, -o yaml",
    output: `apiVersion: autoscaling/v1
kind: HorizontalPodAutoscaler
metadata:
  name: my-app
spec:
  maxReplicas: 10
  minReplicas: 2
  scaleTargetRef:
    apiVersion: apps/v1
    kind: Deployment
    name: my-app
  targetCPUUtilizationPercentage: 70`,
  },
  {
    category: "Comprehensive kubectl",
    subcategory: "Expert Operations",
    command:
      "kubectl get pods --all-namespaces -o json | jq '.items[] | select(.spec.securityContext.runAsNonRoot == true) | .metadata.name'",
    description:
      "Find pods with non-root security context across all namespaces",
    example:
      "kubectl get pods --all-namespaces -o json | jq '.items[] | select(.spec.securityContext.runAsNonRoot == true) | .metadata.name'",
    versionIntroduced: "1.0",
    difficultyLevel: "Expert",
    tags: "pods,expert,jq,json,security,non-root,all-namespaces",
    flags: "-A",
    output: '"secure-pod-ns1"\n"secure-pod-ns2"',
  },
  {
    category: "Comprehensive kubectl",
    subcategory: "Expert Operations",
    command: "kubectl debug node/worker-1 -it --image=ubuntu --share-processes",
    description: "Debug a node by creating a privileged pod",
    example: "kubectl debug node/worker-1 -it --image=ubuntu --share-processes",
    versionIntroduced: "1.20",
    difficultyLevel: "Expert",
    tags: "debug,expert,node,privileged,host",
    flags: "--image, --share-processes",
    output:
      "Creating debugging pod node-debugger-worker-1-abcde with container debugger on node worker-1.\nIf you don't see a command prompt, try pressing enter.\nroot@worker-1:/# ",
  },
  {
    category: "Comprehensive kubectl",
    subcategory: "Expert Operations",
    command:
      'kubectl get endpointslices -o json | jq \'.items[] | select(.metadata.labels.\"endpointslice.kubernetes.io/managed-by\" | contains(\"nginx-ingress-controller\"))\'',
    description: "Find endpoint slices managed by specific controller",
    example:
      'kubectl get endpointslices -o json | jq \'.items[] | select(.metadata.labels.\"endpointslice.kubernetes.io/managed-by\" | contains(\"nginx-ingress-controller\"))\'',
    versionIntroduced: "1.17",
    difficultyLevel: "Expert",
    tags: "endpointslices,expert,networking,jq",
    flags: "",
    output: `{
  "addressType": "IPv4",
  "apiVersion": "discovery.k8s.io/v1",
  "endpoints": [
    {
      "addresses": ["10.244.0.5"],
      "conditions": {"ready": true}
    }
  ],
  "metadata": {
    "name": "ingress-nginx-controller-abcde",
    "labels": {
      "endpointslice.kubernetes.io/managed-by": "nginx-ingress-controller"
    }
  }
}`,
  },
  {
    category: "Comprehensive kubectl",
    subcategory: "Expert Operations",
    command:
      "kubectl get pods -o json | jq '.items[] | select(.status.containerStatuses[].ready == false) | {name: .metadata.name, notReadyReason: .status.containerStatuses[] | select(.ready == false) | .state.waiting.reason}'",
    description: "Find not-ready pods with their reasons",
    example:
      "kubectl get pods -o json | jq '.items[] | select(.status.containerStatuses[].ready == false) | {name: .metadata.name, notReadyReason: .status.containerStatuses[] | select(.ready == false) | .state.waiting.reason}'",
    versionIntroduced: "1.0",
    difficultyLevel: "Expert",
    tags: "pods,expert,jq,json,debugging,not-ready",
    flags: "",
    output: `{
  "name": "crash-loop-pod",
  "notReadyReason": "CrashLoopBackOff"
}
{
  "name": "pending-pod",
  "notReadyReason": "ContainerCreating"
}`,
  },
];
