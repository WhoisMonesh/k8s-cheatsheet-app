export const k8sCommandsData = [
  {
    category: 'Cluster Management',
    subcategory: 'Cluster Info',
    command: 'kubectl cluster-info',
    description: 'Display cluster information including master and services',
    example: 'kubectl cluster-info',
    versionIntroduced: '1.0',
    difficultyLevel: 'beginner',
    tags: 'cluster,info,basic',
    output: 'Kubernetes control plane is running at https://...',
  },
  {
    category: 'Cluster Management',
    subcategory: 'Cluster Info',
    command: 'kubectl version',
    description: 'Show kubectl and Kubernetes server version',
    example: 'kubectl version --short',
    versionIntroduced: '1.0',
    difficultyLevel: 'beginner',
    tags: 'version,info,basic',
    flags: '--short, --client, --output',
    output: `Client Version: v1.29.0
Kustomize Version: v5.0.4-0.20230601165947-6ce0bf390ce3
Server Version: v1.28.2`,
  },
  {
    category: 'Cluster Management',
    subcategory: 'Cluster Info',
    command: 'kubectl get nodes',
    description: 'List all nodes in the cluster',
    example: 'kubectl get nodes -o wide',
    versionIntroduced: '1.0',
    difficultyLevel: 'beginner',
    tags: 'nodes,cluster,list',
    flags: '-o wide, --show-labels, --selector',
    output: `NAME           STATUS   ROLES           AGE   VERSION   INTERNAL-IP    EXTERNAL-IP   OS-IMAGE             KERNEL-VERSION      CONTAINER-RUNTIME
control-plane  Ready    control-plane   32d   v1.28.2   192.168.49.2   <none>        Ubuntu 22.04.3 LTS   5.15.0-86-generic   containerd://1.6.24
worker-node-1  Ready    <none>          32d   v1.28.2   192.168.49.3   <none>        Ubuntu 22.04.3 LTS   5.15.0-86-generic   containerd://1.6.24`,
  },
  {
    category: 'Cluster Management',
    subcategory: 'Cluster Info',
    command: 'kubectl describe node',
    description: 'Show detailed information about a specific node',
    example: 'kubectl describe node node-1',
    versionIntroduced: '1.0',
    difficultyLevel: 'beginner',
    tags: 'nodes,describe,info',
    output: `Name:               node-1
Roles:              <none>
Labels:             beta.kubernetes.io/arch=amd64
                    beta.kubernetes.io/os=linux
                    kubernetes.io/arch=amd64
                    kubernetes.io/hostname=node-1
                    kubernetes.io/os=linux
Conditions:
  Type                 Status  LastHeartbeatTime                 LastTransitionTime                Reason                       Message
  ----                 ------  -----------------                 ------------------                ------                       -------
  NetworkUnavailable   False   Fri, 26 Jan 2024 10:00:00 +0000   Fri, 26 Jan 2024 10:00:00 +0000   FlannelIsUp                  Flannel is running on this node
  MemoryPressure       False   Fri, 26 Jan 2024 10:05:00 +0000   Fri, 26 Jan 2024 09:00:00 +0000   KubeletHasSufficientMemory   kubelet has sufficient memory available
  DiskPressure         False   Fri, 26 Jan 2024 10:05:00 +0000   Fri, 26 Jan 2024 09:00:00 +0000   KubeletHasNoDiskPressure     kubelet has no disk pressure
  PIDPressure          False   Fri, 26 Jan 2024 10:05:00 +0000   Fri, 26 Jan 2024 09:00:00 +0000   KubeletHasSufficientPID      kubelet has sufficient PID available
  Ready                True    Fri, 26 Jan 2024 10:05:00 +0000   Fri, 26 Jan 2024 09:00:00 +0000   KubeletReady                 kubelet is posting ready status`,
  },
  {
    category: 'Cluster Management',
    subcategory: 'Cluster Info',
    command: 'kubectl top nodes',
    description: 'Display resource usage (CPU/Memory) of nodes',
    example: 'kubectl top nodes',
    versionIntroduced: '1.8',
    difficultyLevel: 'intermediate',
    tags: 'metrics,monitoring,resources',
    output: `NAME           CPU(cores)   CPU%   MEMORY(bytes)   MEMORY%
control-plane  250m         12%    1234Mi          15%
worker-node-1  450m         22%    2048Mi          25%`,
  },
  {
    category: 'Cluster Management',
    subcategory: 'Contexts',
    command: 'kubectl config get-contexts',
    description: 'List all available contexts',
    example: 'kubectl config get-contexts',
    versionIntroduced: '1.0',
    difficultyLevel: 'beginner',
    tags: 'context,config,cluster',
    output: `CURRENT   NAME                 CLUSTER                      AUTHINFO             NAMESPACE
*         minikube             minikube                     minikube             default
          kind-kind            kind-kind                    kind-kind            
          docker-desktop       docker-desktop               docker-desktop`,
  },
  {
    category: 'Cluster Management',
    subcategory: 'Contexts',
    command: 'kubectl config current-context',
    description: 'Display the current context',
    example: 'kubectl config current-context',
    versionIntroduced: '1.0',
    difficultyLevel: 'beginner',
    tags: 'context,config,current',
    output: `minikube`,
  },
  {
    category: 'Cluster Management',
    subcategory: 'Contexts',
    command: 'kubectl config use-context',
    description: 'Switch to a different context',
    example: 'kubectl config use-context prod-cluster',
    versionIntroduced: '1.0',
    difficultyLevel: 'beginner',
    tags: 'context,switch,config',
    output: `Switched to context "prod-cluster".`,
  },
  {
    category: 'Cluster Management',
    subcategory: 'Contexts',
    command: 'kubectl config set-context',
    description: 'Set a context entry in kubeconfig',
    example: 'kubectl config set-context dev --namespace=development --cluster=dev-cluster --user=dev-user',
    versionIntroduced: '1.0',
    difficultyLevel: 'intermediate',
    tags: 'context,config,set',
    flags: '--namespace, --cluster, --user',
    output: `Context "dev" created.`,
  },
  {
    category: 'Cluster Management',
    subcategory: 'Namespaces',
    command: 'kubectl get namespaces',
    description: 'List all namespaces in the cluster',
    example: 'kubectl get namespaces',
    versionIntroduced: '1.0',
    difficultyLevel: 'beginner',
    tags: 'namespace,list,basic',
    output: `NAME              STATUS   AGE
default           Active   32d
kube-node-lease   Active   32d
kube-public       Active   32d
kube-system       Active   32d
monitoring        Active   15d`,
  },
  {
    category: 'Cluster Management',
    subcategory: 'Namespaces',
    command: 'kubectl create namespace',
    description: 'Create a new namespace',
    example: 'kubectl create namespace production',
    versionIntroduced: '1.0',
    difficultyLevel: 'beginner',
    tags: 'namespace,create,basic',
    output: `namespace/production created`,
  },
  {
    category: 'Cluster Management',
    subcategory: 'Namespaces',
    command: 'kubectl delete namespace',
    description: 'Delete a namespace and all its resources',
    example: 'kubectl delete namespace staging',
    versionIntroduced: '1.0',
    difficultyLevel: 'intermediate',
    tags: 'namespace,delete,cleanup',
    output: `namespace "staging" deleted`,
  },
  {
    category: 'Pods',
    subcategory: 'Pod Management',
    command: 'kubectl get pods',
    description: 'List all pods in the current namespace',
    example: 'kubectl get pods -o wide --all-namespaces',
    versionIntroduced: '1.0',
    difficultyLevel: 'beginner',
    tags: 'pods,list,basic',
    flags: '-o wide, --all-namespaces, --show-labels, --field-selector, --selector',
    output: `NAMESPACE     NAME                               READY   STATUS    RESTARTS   AGE   IP             NODE            NOMINATED NODE   READINESS GATES
default       nginx-deployment-86dcfb45d-45678   1/1     Running   0          5m    10.244.1.45    worker-node-1   <none>           <none>
kube-system   coredns-787d4945fb-12345           1/1     Running   0          32d   10.244.0.12    control-plane   <none>           <none>`,
  },
  {
    category: 'Pods',
    subcategory: 'Pod Management',
    command: 'kubectl describe pod',
    description: 'Show detailed information about a pod',
    example: 'kubectl describe pod nginx-pod',
    versionIntroduced: '1.0',
    difficultyLevel: 'beginner',
    tags: 'pods,describe,info',
    output: `Name:             nginx-pod
Namespace:        default
Priority:         0
Service Account:  default
Node:             worker-node-1/192.168.49.3
Start Time:       Fri, 26 Jan 2024 10:30:00 +0000
Labels:           run=nginx
Status:           Running
IP:               10.244.1.45
Containers:
  nginx:
    Container ID:   containerd://...
    Image:          nginx:latest
    Image ID:       docker.io/library/nginx@sha256:...
    Port:           80/TCP
    State:          Running
      Started:      Fri, 26 Jan 2024 10:30:05 +0000
    Ready:          True
Events:
  Type    Reason     Age   From               Message
  ----    ------     ----  ----               -------
  Normal  Scheduled  5m    default-scheduler  Successfully assigned default/nginx-pod to worker-node-1
  Normal  Pulling    5m    kubelet            Pulling image "nginx:latest"
  Normal  Pulled     5m    kubelet            Successfully pulled image "nginx:latest" in 3.14s
  Normal  Created    5m    kubelet            Created container nginx
  Normal  Started    5m    kubelet            Started container nginx`,
  },
  {
    category: 'Pods',
    subcategory: 'Pod Management',
    command: 'kubectl run',
    description: 'Create and run a particular image in a pod',
    example: 'kubectl run nginx --image=nginx:latest --port=80',
    versionIntroduced: '1.0',
    difficultyLevel: 'beginner',
    tags: 'pods,create,run',
    flags: '--image, --port, --env, --command, --restart',
    output: `pod/nginx created`,
  },
  {
    category: 'Pods',
    subcategory: 'Pod Management',
    command: 'kubectl delete pod',
    description: 'Delete a pod',
    example: 'kubectl delete pod nginx-pod',
    versionIntroduced: '1.0',
    difficultyLevel: 'beginner',
    tags: 'pods,delete,remove',
    flags: '--force, --grace-period, --now',
    output: `pod "nginx-pod" deleted`,
  },
  {
    category: 'Pods',
    subcategory: 'Pod Management',
    command: 'kubectl get pods --watch',
    description: 'Watch pods for changes in real-time',
    example: 'kubectl get pods --watch',
    versionIntroduced: '1.0',
    difficultyLevel: 'beginner',
    tags: 'pods,watch,monitor',
    output: `NAME        READY   STATUS              RESTARTS   AGE
nginx-pod   0/1     ContainerCreating   0          2s
nginx-pod   1/1     Running             0          5s`,
  },
  {
    category: 'Pods',
    subcategory: 'Pod Management',
    command: 'kubectl get pod -o yaml',
    description: 'Get pod definition in YAML format',
    example: 'kubectl get pod nginx-pod -o yaml > pod-definition.yaml',
    versionIntroduced: '1.0',
    difficultyLevel: 'intermediate',
    tags: 'pods,yaml,export',
    output: `apiVersion: v1
kind: Pod
metadata:
  creationTimestamp: "2024-01-26T10:30:00Z"
  labels:
    run: nginx
  name: nginx-pod
  namespace: default
  resourceVersion: "12345"
  uid: a1b2c3d4-e5f6-7890-1234-567890abcdef
spec:
  containers:
  - image: nginx:latest
    imagePullPolicy: Always
    name: nginx
    resources: {}
    terminationMessagePath: /dev/termination-log
    terminationMessagePolicy: File
    volumeMounts:
    - mountPath: /var/run/secrets/kubernetes.io/serviceaccount
      name: kube-api-access-abcde
      readOnly: true
  dnsPolicy: ClusterFirst
  enableServiceLinks: true
  nodeName: worker-node-1
  preemptionPolicy: PreemptLowerPriority
  priority: 0
  restartPolicy: Always
  schedulerName: default-scheduler
  securityContext: {}
  serviceAccount: default
  serviceAccountName: default
  terminationGracePeriodSeconds: 30
  tolerations:
  - effect: NoExecute
    key: node.kubernetes.io/not-ready
    operator: Exists
    tolerationSeconds: 300
  - effect: NoExecute
    key: node.kubernetes.io/unreachable
    operator: Exists
    tolerationSeconds: 300
status:
  phase: Running
  qosClass: BestEffort`,
  },
  {
    category: 'Pods',
    subcategory: 'Pod Debugging',
    command: 'kubectl logs',
    description: 'Print logs from a container in a pod',
    example: 'kubectl logs nginx-pod --follow --tail=100',
    versionIntroduced: '1.0',
    difficultyLevel: 'beginner',
    tags: 'logs,debug,troubleshoot',
    flags: '--follow, --tail, --since, --timestamps, --previous, --container',
    output: `10.244.0.1 - - [26/Jan/2024:10:30:00 +0000] "GET / HTTP/1.1" 200 612 "-" "Mozilla/5.0" "-"
10.244.0.1 - - [26/Jan/2024:10:30:05 +0000] "GET /favicon.ico HTTP/1.1" 404 153 "-" "Mozilla/5.0" "-"
2024/01/26 10:30:10 [notice] 1#1: start worker process 29
2024/01/26 10:30:10 [notice] 1#1: start worker process 30`,
  },
  {
    category: 'Pods',
    subcategory: 'Pod Debugging',
    command: 'kubectl logs --previous',
    description: 'Print logs from previous container instance',
    example: 'kubectl logs nginx-pod --previous',
    versionIntroduced: '1.0',
    difficultyLevel: 'intermediate',
    tags: 'logs,debug,crashed',
    output: `Error: Nginx worker process 29 exited with code 1
2024/01/26 10:29:55 [emerg] 1#1: host not found in upstream "backend-service" in /etc/nginx/conf.d/default.conf:2
nginx: [emerg] host not found in upstream "backend-service" in /etc/nginx/conf.d/default.conf:2`,
  },
  {
    category: 'Pods',
    subcategory: 'Pod Debugging',
    command: 'kubectl exec',
    description: 'Execute a command in a container',
    example: 'kubectl exec -it nginx-pod -- /bin/bash',
    versionIntroduced: '1.0',
    difficultyLevel: 'beginner',
    tags: 'exec,shell,debug',
    flags: '-it, --container, --stdin, --tty',
    output: `root@nginx-pod:/# ls -la
total 64
drwxr-xr-x   1 root root 4096 Jan 26 10:30 .
drwxr-xr-x   1 root root 4096 Jan 26 10:30 ..
drwxr-xr-x   2 root root 4096 Jan 15 00:00 bin
drwxr-xr-x   2 root root 4096 Jan 15 00:00 boot
drwxr-xr-x   5 root root  360 Jan 26 10:30 dev
drwxr-xr-x   1 root root 4096 Jan 26 10:30 etc
drwxr-xr-x   2 root root 4096 Jan 15 00:00 home
drwxr-xr-x   1 root root 4096 Jan 15 00:00 lib`,
  },
  {
    category: 'Pods',
    subcategory: 'Pod Debugging',
    command: 'kubectl port-forward pod',
    description: 'Forward local port to a pod',
    example: 'kubectl port-forward nginx-pod 8080:80',
    versionIntroduced: '1.0',
    difficultyLevel: 'beginner',
    tags: 'port-forward,debug,access',
    output: `Forwarding from 127.0.0.1:8080 -> 80
Forwarding from [::1]:8080 -> 80
Handling connection for 8080
Handling connection for 8080`,
  },
  {
    category: 'Pods',
    subcategory: 'Pod Debugging',
    command: 'kubectl attach',
    description: 'Attach to a running container',
    example: 'kubectl attach nginx-pod -c nginx',
    versionIntroduced: '1.0',
    difficultyLevel: 'intermediate',
    tags: 'attach,debug,container',
    output: `Defaulting to main container: nginx
If you don't see a command prompt, try pressing enter.
# ls
bin  boot  dev  etc  home  lib  lib64  media  mnt  opt  proc  root  run  sbin  srv  sys  tmp  usr  var`,
  },
  {
    category: 'Pods',
    subcategory: 'Pod Debugging',
    command: 'kubectl cp',
    description: 'Copy files to/from containers',
    example: 'kubectl cp nginx-pod:/var/log/nginx/access.log ./access.log',
    versionIntroduced: '1.0',
    difficultyLevel: 'intermediate',
    tags: 'copy,files,debug',
    output: `tar: Removing leading '/' from member names`,
  },
  {
    category: 'Pods',
    subcategory: 'Pod Debugging',
    command: 'kubectl debug',
    description: 'Create debugging sessions for troubleshooting pods',
    example: 'kubectl debug nginx-pod -it --image=busybox --target=nginx',
    versionIntroduced: '1.18',
    difficultyLevel: 'advanced',
    tags: 'debug,troubleshoot,ephemeral',
    flags: '--image, --target, --container, --share-processes',
    output: `Targeting container "nginx". If you don't see processes from this container it may be because the container runtime doesn't support this feature.
Defaulting debug container name to debugger-8xz2l.
If you don't see a command prompt, try pressing enter.
/ # ps aux
PID   USER     TIME  COMMAND
    1 root      0:00 nginx: master process nginx -g daemon off;
   29 nginx     0:00 nginx: worker process
   30 nginx     0:00 nginx: worker process
   31 root      0:00 /bin/sh`,
  },
  {
    category: 'Pods',
    subcategory: 'Resource Monitoring',
    command: 'kubectl top pod',
    description: 'Display resource usage of pods',
    example: 'kubectl top pod --all-namespaces --sort-by=memory',
    versionIntroduced: '1.8',
    difficultyLevel: 'intermediate',
    tags: 'metrics,monitoring,resources',
    flags: '--all-namespaces, --sort-by, --containers',
    output: `NAMESPACE   NAME                        CPU(cores)   MEMORY(bytes)
default     nginx-deployment-86dcfb45d  2m           8Mi
kube-system coredns-787d4945fb-12345    3m           12Mi
monitoring  prometheus-server-0         150m         450Mi`,
  },
  {
    category: 'Deployments',
    subcategory: 'Deployment Management',
    command: 'kubectl get deployments',
    description: 'List all deployments',
    example: 'kubectl get deployments -o wide',
    versionIntroduced: '1.2',
    difficultyLevel: 'beginner',
    tags: 'deployment,list,basic',
    output: `NAME               READY   UP-TO-DATE   AVAILABLE   AGE   CONTAINERS   IMAGES         SELECTOR
nginx-deployment   3/3     3            3           25m   nginx        nginx:latest   app=nginx
backend-api        2/2     2            2           4h    api          api:v1.2       app=backend`,
  },
  {
    category: 'Deployments',
    subcategory: 'Deployment Management',
    command: 'kubectl create deployment',
    description: 'Create a new deployment',
    example: 'kubectl create deployment nginx --image=nginx:latest --replicas=3',
    versionIntroduced: '1.2',
    difficultyLevel: 'beginner',
    tags: 'deployment,create,basic',
    flags: '--image, --replicas, --port',
    output: `deployment.apps/nginx created`,
  },
  {
    category: 'Deployments',
    subcategory: 'Deployment Management',
    command: 'kubectl describe deployment',
    description: 'Show detailed information about a deployment',
    example: 'kubectl describe deployment nginx',
    versionIntroduced: '1.2',
    difficultyLevel: 'beginner',
    tags: 'deployment,describe,info',
    output: `Name:                   nginx
Namespace:              default
CreationTimestamp:      Fri, 26 Jan 2024 10:00:00 +0000
Labels:                 app=nginx
Annotations:            deployment.kubernetes.io/revision: 1
Selector:               app=nginx
Replicas:               3 desired | 3 updated | 3 total | 3 available | 0 unavailable
StrategyType:           RollingUpdate
MinReadySeconds:        0
RollingUpdateStrategy:  25% max unavailable, 25% max surge
Pod Template:
  Labels:  app=nginx
  Containers:
   nginx:
    Image:        nginx:latest
    Port:         80/TCP
    Host Port:    0/TCP
    Environment:  <none>
    Mounts:       <none>
  Volumes:        <none>
Conditions:
  Type           Status  Reason
  ----           ------  ------
  Available      True    MinimumReplicasAvailable
  Progressing    True    NewReplicaSetAvailable
OldReplicaSets:  <none>
NewReplicaSet:   nginx-5d59d67564 (3/3 replicas created)`,
  },
  {
    category: 'Deployments',
    subcategory: 'Deployment Management',
    command: 'kubectl delete deployment',
    description: 'Delete a deployment',
    example: 'kubectl delete deployment nginx',
    versionIntroduced: '1.2',
    difficultyLevel: 'beginner',
    tags: 'deployment,delete,remove',
    output: `deployment.apps "nginx" deleted`,
  },
  {
    category: 'Deployments',
    subcategory: 'Scaling',
    command: 'kubectl scale deployment',
    description: 'Scale a deployment to specified number of replicas',
    example: 'kubectl scale deployment nginx --replicas=5',
    versionIntroduced: '1.2',
    difficultyLevel: 'beginner',
    tags: 'scale,replicas,deployment',
    flags: '--replicas, --current-replicas, --resource-version',
    output: `deployment.apps/nginx scaled`,
  },
  {
    category: 'Deployments',
    subcategory: 'Scaling',
    command: 'kubectl autoscale deployment',
    description: 'Automatically scale a deployment based on CPU usage',
    example: 'kubectl autoscale deployment nginx --min=2 --max=10 --cpu-percent=80',
    versionIntroduced: '1.1',
    difficultyLevel: 'intermediate',
    tags: 'autoscale,hpa,scaling',
    flags: '--min, --max, --cpu-percent',
    output: `horizontalpodautoscaler.autoscaling/nginx autoscaled`,
  },
  {
    category: 'Deployments',
    subcategory: 'Rollouts',
    command: 'kubectl rollout status',
    description: 'Show the status of a rollout',
    example: 'kubectl rollout status deployment/nginx',
    versionIntroduced: '1.2',
    difficultyLevel: 'intermediate',
    tags: 'rollout,status,deployment',
    output: `Waiting for deployment "nginx" rollout to finish: 1 of 3 updated replicas are available...
deployment "nginx" successfully rolled out`,
  },
  {
    category: 'Deployments',
    subcategory: 'Rollouts',
    command: 'kubectl rollout history',
    description: 'View rollout history',
    example: 'kubectl rollout history deployment/nginx',
    versionIntroduced: '1.2',
    difficultyLevel: 'intermediate',
    tags: 'rollout,history,deployment',
    flags: '--revision',
    output: `deployment.apps/nginx 
REVISION  CHANGE-CAUSE
1         <none>
2         kubectl set image deployment/nginx nginx=nginx:1.19 --record=true
3         kubectl set image deployment/nginx nginx=nginx:1.20 --record=true`,
  },
  {
    category: 'Deployments',
    subcategory: 'Rollouts',
    command: 'kubectl rollout undo',
    description: 'Rollback to a previous deployment revision',
    example: 'kubectl rollout undo deployment/nginx --to-revision=2',
    versionIntroduced: '1.2',
    difficultyLevel: 'intermediate',
    tags: 'rollout,undo,rollback',
    flags: '--to-revision',
    output: `deployment.apps/nginx rolled back`,
  },
  {
    category: 'Deployments',
    subcategory: 'Rollouts',
    command: 'kubectl rollout restart',
    description: 'Restart a deployment',
    example: 'kubectl rollout restart deployment/nginx',
    versionIntroduced: '1.15',
    difficultyLevel: 'intermediate',
    tags: 'rollout,restart,deployment',
    output: `deployment.apps/nginx restarted`,
  },
  {
    category: 'Deployments',
    subcategory: 'Rollouts',
    command: 'kubectl rollout pause',
    description: 'Pause a deployment rollout',
    example: 'kubectl rollout pause deployment/nginx',
    versionIntroduced: '1.2',
    difficultyLevel: 'advanced',
    tags: 'rollout,pause,deployment',
    output: `deployment.apps/nginx paused`,
  },
  {
    category: 'Deployments',
    subcategory: 'Rollouts',
    command: 'kubectl rollout resume',
    description: 'Resume a paused deployment',
    example: 'kubectl rollout resume deployment/nginx',
    versionIntroduced: '1.2',
    difficultyLevel: 'advanced',
    tags: 'rollout,resume,deployment',
    output: `deployment.apps/nginx resumed`,
  },
  {
    category: 'Deployments',
    subcategory: 'Updates',
    command: 'kubectl set image',
    description: 'Update image of a deployment',
    example: 'kubectl set image deployment/nginx nginx=nginx:1.19',
    versionIntroduced: '1.2',
    difficultyLevel: 'intermediate',
    tags: 'update,image,deployment',
    flags: '--record, --all',
    output: `deployment.apps/nginx image updated`,
  },
  {
    category: 'Deployments',
    subcategory: 'Updates',
    command: 'kubectl set resources',
    description: 'Update resource requests/limits',
    example: 'kubectl set resources deployment nginx -c=nginx --limits=cpu=200m,memory=512Mi',
    versionIntroduced: '1.2',
    difficultyLevel: 'intermediate',
    tags: 'resources,limits,deployment',
    flags: '--limits, --requests, --containers',
    output: `deployment.apps/nginx resource requirements updated`,
  },
  {
    category: 'Services & Networking',
    subcategory: 'Services',
    command: 'kubectl get services',
    description: 'List all services',
    example: 'kubectl get services -o wide',
    versionIntroduced: '1.0',
    difficultyLevel: 'beginner',
    tags: 'service,list,networking',
    output: `NAME         TYPE        CLUSTER-IP      EXTERNAL-IP   PORT(S)        AGE
kubernetes   ClusterIP   10.96.0.1       <none>        443/TCP        2d4h
nginx        ClusterIP   10.96.124.218   <none>        80/TCP         4h
web-app      NodePort    10.96.234.12    <none>        80:30080/TCP   1h`,
  },
  {
    category: 'Services & Networking',
    subcategory: 'Services',
    command: 'kubectl describe service',
    description: 'Show detailed information about a service',
    example: 'kubectl describe service nginx',
    versionIntroduced: '1.0',
    difficultyLevel: 'beginner',
    tags: 'service,describe,info',
    output: `Name:              nginx
Namespace:         default
Labels:            app=nginx
Annotations:       <none>
Selector:          app=nginx
Type:              ClusterIP
IP Family Policy:  SingleStack
IP Families:       IPv4
IP:                10.96.124.218
IPs:               10.96.124.218
Port:              <unset>  80/TCP
TargetPort:        80/TCP
Endpoints:         10.244.1.4:80,10.244.2.3:80,10.244.2.4:80
Session Affinity:  None
Events:            <none>`,
  },
  {
    category: 'Services & Networking',
    subcategory: 'Services',
    command: 'kubectl expose deployment',
    description: 'Create a service for a deployment',
    example: 'kubectl expose deployment nginx --port=80 --target-port=8080 --type=LoadBalancer',
    versionIntroduced: '1.0',
    difficultyLevel: 'beginner',
    tags: 'service,expose,create',
    flags: '--port, --target-port, --type, --name, --protocol',
    output: `service/nginx exposed`,
  },
  {
    category: 'Services & Networking',
    subcategory: 'Services',
    command: 'kubectl delete service',
    description: 'Delete a service',
    example: 'kubectl delete service nginx',
    versionIntroduced: '1.0',
    difficultyLevel: 'beginner',
    tags: 'service,delete,remove',
    output: `service "nginx" deleted`,
  },
  {
    category: 'Services & Networking',
    subcategory: 'Services',
    command: 'kubectl port-forward service',
    description: 'Forward local port to a service',
    example: 'kubectl port-forward service/nginx 8080:80',
    versionIntroduced: '1.0',
    difficultyLevel: 'beginner',
    tags: 'port-forward,service,access',
    output: `Forwarding from 127.0.0.1:8080 -> 80
Forwarding from [::1]:8080 -> 80
Handling connection for 8080`,
  },
  {
    category: 'Services & Networking',
    subcategory: 'Ingress',
    command: 'kubectl get ingress',
    description: 'List all ingress resources',
    example: 'kubectl get ingress -o wide',
    versionIntroduced: '1.1',
    difficultyLevel: 'intermediate',
    tags: 'ingress,list,networking',
    output: `NAME           CLASS    HOSTS              ADDRESS          PORTS   AGE
nginx-ingress  nginx    nginx.example.com  192.168.100.10   80      5m
web-ingress    nginx    web.example.com    192.168.100.11   80, 443 2d`,
  },
  {
    category: 'Services & Networking',
    subcategory: 'Ingress',
    command: 'kubectl describe ingress',
    description: 'Show detailed information about an ingress',
    example: 'kubectl describe ingress nginx-ingress',
    versionIntroduced: '1.1',
    difficultyLevel: 'intermediate',
    tags: 'ingress,describe,info',
    output: `Name:             nginx-ingress
Namespace:        default
Address:          192.168.100.10
Default backend:  default-http-backend:80 (<error: endpoints "default-http-backend" not found>)
Rules:
  Host               Path  Backends
  ----               ----  --------
  nginx.example.com  
                     /   nginx-service:80 (10.244.0.15:80)
Annotations:         kubernetes.io/ingress.class: nginx
Events:
  Type    Reason  Age   From                      Message
  ----    ------  ----  ----                      -------
  Normal  Sync    1m    nginx-ingress-controller  Scheduled for sync`,
  },
  {
    category: 'Services & Networking',
    subcategory: 'Network Policies',
    command: 'kubectl get networkpolicies',
    description: 'List all network policies',
    example: 'kubectl get networkpolicies',
    versionIntroduced: '1.3',
    difficultyLevel: 'advanced',
    tags: 'networkpolicy,security,networking',
    output: `NAME             POD-SELECTOR   AGE
allow-frontend   app=frontend   10d
deny-all         <none>         10d`,
  },
  {
    category: 'Services & Networking',
    subcategory: 'Network Policies',
    command: 'kubectl describe networkpolicy',
    description: 'Show detailed information about a network policy',
    example: 'kubectl describe networkpolicy allow-frontend',
    versionIntroduced: '1.3',
    difficultyLevel: 'advanced',
    tags: 'networkpolicy,security,describe',
    output: `Name:         allow-frontend
Namespace:    default
Created on:   2024-01-26 10:00:00 +0000 UTC
Labels:       <none>
Annotations:  <none>
Spec:
  PodSelector:     app=frontend
  Allowing ingress traffic:
    To Port: <any> (traffic allowed to all ports)
    From:
      PodSelector: app=backend
  Not affecting egress traffic
  Policy Types: Ingress`,
  },
  {
    category: 'Services & Networking',
    subcategory: 'Endpoints',
    command: 'kubectl get endpoints',
    description: 'List all endpoints',
    example: 'kubectl get endpoints',
    versionIntroduced: '1.0',
    difficultyLevel: 'intermediate',
    tags: 'endpoints,networking,service',
    output: `NAME         ENDPOINTS                               AGE
kubernetes   192.168.49.2:8443                       2d4h
nginx        10.244.1.4:80,10.244.2.3:80             4h`,
  },
  {
    category: 'Configuration',
    subcategory: 'ConfigMaps',
    command: 'kubectl get configmaps',
    description: 'List all ConfigMaps',
    example: 'kubectl get configmaps',
    versionIntroduced: '1.2',
    difficultyLevel: 'beginner',
    tags: 'configmap,config,list',
    output: `NAME               DATA   AGE
app-config         2      5d
kube-root-ca.crt   1      30d`,
  },
  {
    category: 'Configuration',
    subcategory: 'ConfigMaps',
    command: 'kubectl create configmap',
    description: 'Create a ConfigMap from literal values or files',
    example: 'kubectl create configmap app-config --from-literal=key1=value1 --from-file=config.properties',
    versionIntroduced: '1.2',
    difficultyLevel: 'beginner',
    tags: 'configmap,create,config',
    flags: '--from-literal, --from-file, --from-env-file',
    output: `configmap/app-config created`,
  },
  {
    category: 'Configuration',
    subcategory: 'ConfigMaps',
    command: 'kubectl describe configmap',
    description: 'Show detailed information about a ConfigMap',
    example: 'kubectl describe configmap app-config',
    versionIntroduced: '1.2',
    difficultyLevel: 'beginner',
    tags: 'configmap,describe,info',
    output: `Name:         app-config
Namespace:    default
Labels:       <none>
Annotations:  <none>

Data
====
key1:
----
value1
config.properties:
----
color=blue
mode=production

BinaryData
====

Events:  <none>`,
  },
  {
    category: 'Configuration',
    subcategory: 'ConfigMaps',
    command: 'kubectl delete configmap',
    description: 'Delete a ConfigMap',
    example: 'kubectl delete configmap app-config',
    versionIntroduced: '1.2',
    difficultyLevel: 'beginner',
    tags: 'configmap,delete,remove',
    output: `configmap "app-config" deleted`,
  },
  {
    category: 'Configuration',
    subcategory: 'Secrets',
    command: 'kubectl get secrets',
    description: 'List all secrets',
    example: 'kubectl get secrets',
    versionIntroduced: '1.0',
    difficultyLevel: 'beginner',
    tags: 'secrets,security,list',
    output: `NAME                  TYPE                                  DATA   AGE
default-token-abc12   kubernetes.io/service-account-token   3      30d
db-secret             Opaque                                2      10d`,
  },
  {
    category: 'Configuration',
    subcategory: 'Secrets',
    command: 'kubectl create secret generic',
    description: 'Create a generic secret',
    example: 'kubectl create secret generic db-secret --from-literal=password=mypassword',
    versionIntroduced: '1.0',
    difficultyLevel: 'intermediate',
    tags: 'secrets,create,security',
    flags: '--from-literal, --from-file, --from-env-file',
    output: `secret/db-secret created`,
  },
  {
    category: 'Configuration',
    subcategory: 'Secrets',
    command: 'kubectl create secret docker-registry',
    description: 'Create a secret for Docker registry authentication',
    example: 'kubectl create secret docker-registry regcred --docker-server=registry.io --docker-username=user --docker-password=pass',
    versionIntroduced: '1.0',
    difficultyLevel: 'intermediate',
    tags: 'secrets,docker,registry',
    flags: '--docker-server, --docker-username, --docker-password, --docker-email',
    output: `secret/regcred created`,
  },
  {
    category: 'Configuration',
    subcategory: 'Secrets',
    command: 'kubectl create secret tls',
    description: 'Create a TLS secret',
    example: 'kubectl create secret tls tls-secret --cert=path/to/cert --key=path/to/key',
    versionIntroduced: '1.0',
    difficultyLevel: 'intermediate',
    tags: 'secrets,tls,security',
    flags: '--cert, --key',
    output: `secret/tls-secret created`,
  },
  {
    category: 'Configuration',
    subcategory: 'Secrets',
    command: 'kubectl describe secret',
    description: 'Show detailed information about a secret',
    example: 'kubectl describe secret db-secret',
    versionIntroduced: '1.0',
    difficultyLevel: 'intermediate',
    tags: 'secrets,describe,info',
    output: `Name:         db-secret
Namespace:    default
Labels:       <none>
Annotations:  <none>

Type:  Opaque

Data
====
password:  10 bytes
username:  5 bytes`,
  },
  {
    category: 'Configuration',
    subcategory: 'Resource Management',
    command: 'kubectl get resourcequotas',
    description: 'List all resource quotas',
    example: 'kubectl get resourcequotas',
    versionIntroduced: '1.0',
    difficultyLevel: 'intermediate',
    tags: 'quota,resources,limits',
    output: `NAME           AGE   REQUEST                                     LIMIT
compute-quota  10d   requests.cpu: 4/10, requests.memory: 2Gi/10Gi   limits.cpu: 8/20, limits.memory: 4Gi/20Gi`,
  },
  {
    category: 'Configuration',
    subcategory: 'Resource Management',
    command: 'kubectl get limitranges',
    description: 'List all limit ranges',
    example: 'kubectl get limitranges',
    versionIntroduced: '1.0',
    difficultyLevel: 'intermediate',
    tags: 'limitrange,resources,limits',
    output: `NAME         CREATED AT
mem-limit-range   2024-01-26T10:00:00Z`,
  },
  {
    category: 'Storage',
    subcategory: 'Persistent Volumes',
    command: 'kubectl get pv',
    description: 'List all persistent volumes',
    example: 'kubectl get pv',
    versionIntroduced: '1.0',
    difficultyLevel: 'intermediate',
    tags: 'pv,storage,list',
    output: `NAME       CAPACITY   ACCESS MODES   RECLAIM POLICY   STATUS   CLAIM            STORAGECLASS   REASON   AGE
pv-volume  10Gi       RWO            Retain           Bound    default/my-pvc   standard                10d`,
  },
  {
    category: 'Storage',
    subcategory: 'Persistent Volumes',
    command: 'kubectl describe pv',
    description: 'Show detailed information about a persistent volume',
    example: 'kubectl describe pv pv-volume',
    versionIntroduced: '1.0',
    difficultyLevel: 'intermediate',
    tags: 'pv,storage,describe',
    output: `Name:            pv-volume
Labels:          type=local
Annotations:     pv.kubernetes.io/bound-by-controller: yes
Finalizers:      [kubernetes.io/pv-protection]
StorageClass:    standard
Status:          Bound
Claim:           default/my-pvc
Reclaim Policy:  Retain
Access Modes:    RWO
Capacity:        10Gi
Node Affinity:   <none>
Message:         
Source:
    Type:          HostPath (bare host directory volume)
    Path:          /mnt/data
    HostPathType:  
Events:            <none>`,
  },
  {
    category: 'Storage',
    subcategory: 'Persistent Volume Claims',
    command: 'kubectl get pvc',
    description: 'List all persistent volume claims',
    example: 'kubectl get pvc',
    versionIntroduced: '1.0',
    difficultyLevel: 'intermediate',
    tags: 'pvc,storage,list',
    output: `NAME      STATUS   VOLUME      CAPACITY   ACCESS MODES   STORAGECLASS   AGE
my-pvc    Bound    pv-volume   10Gi       RWO            standard       10d`,
  },
  {
    category: 'Storage',
    subcategory: 'Persistent Volume Claims',
    command: 'kubectl describe pvc',
    description: 'Show detailed information about a PVC',
    example: 'kubectl describe pvc my-pvc',
    versionIntroduced: '1.0',
    difficultyLevel: 'intermediate',
    tags: 'pvc,storage,describe',
    output: `Name:          my-pvc
Namespace:     default
StorageClass:  standard
Status:        Bound
Volume:        pv-volume
Labels:        <none>
Annotations:   pv.kubernetes.io/bind-completed: yes
               pv.kubernetes.io/bound-by-controller: yes
Finalizers:    [kubernetes.io/pvc-protection]
Capacity:      10Gi
Access Modes:  RWO
VolumeMode:    Filesystem
Used By:       <none>
Events:        <none>`,
  },
  {
    category: 'Storage',
    subcategory: 'Storage Classes',
    command: 'kubectl get storageclass',
    description: 'List all storage classes',
    example: 'kubectl get storageclass',
    versionIntroduced: '1.2',
    difficultyLevel: 'intermediate',
    tags: 'storageclass,storage,list',
    output: `NAME                 PROVISIONER             RECLAIMPOLICY   VOLUMEBINDINGMODE      ALLOWVOLUMEEXPANSION   AGE
standard (default)   rancher.io/local-path   Delete          WaitForFirstConsumer   false                  10d`,
  },
  {
    category: 'Storage',
    subcategory: 'Storage Classes',
    command: 'kubectl describe storageclass',
    description: 'Show detailed information about a storage class',
    example: 'kubectl describe storageclass standard',
    versionIntroduced: '1.2',
    difficultyLevel: 'intermediate',
    tags: 'storageclass,storage,describe',
    output: `Name:                  standard
IsDefaultClass:        Yes
Annotations:           storageclass.kubernetes.io/is-default-class=true
Provisioner:           rancher.io/local-path
Parameters:            <none>
AllowVolumeExpansion:  False
MountOptions:          <none>
ReclaimPolicy:         Delete
VolumeBindingMode:     WaitForFirstConsumer
Events:                <none>`,
  },
  {
    category: 'Security & RBAC',
    subcategory: 'Service Accounts',
    command: 'kubectl get serviceaccounts',
    description: 'List all service accounts',
    example: 'kubectl get serviceaccounts',
    versionIntroduced: '1.0',
    difficultyLevel: 'intermediate',
    tags: 'serviceaccount,security,rbac',
    output: `NAME      SECRETS   AGE
default   1         30d
my-sa     1         5d`,
  },
  {
    category: 'Security & RBAC',
    subcategory: 'Service Accounts',
    command: 'kubectl create serviceaccount',
    description: 'Create a service account',
    example: 'kubectl create serviceaccount my-service-account',
    versionIntroduced: '1.0',
    difficultyLevel: 'intermediate',
    tags: 'serviceaccount,create,security',
    output: `serviceaccount/my-service-account created`,
  },
  {
    category: 'Security & RBAC',
    subcategory: 'Roles',
    command: 'kubectl get roles',
    description: 'List all roles in namespace',
    example: 'kubectl get roles',
    versionIntroduced: '1.6',
    difficultyLevel: 'advanced',
    tags: 'roles,rbac,security',
    output: `NAME          CREATED AT
pod-reader    2024-01-26T10:00:00Z
secret-admin  2024-01-25T15:30:00Z`,
  },
  {
    category: 'Security & RBAC',
    subcategory: 'Roles',
    command: 'kubectl get clusterroles',
    description: 'List all cluster roles',
    example: 'kubectl get clusterroles',
    versionIntroduced: '1.6',
    difficultyLevel: 'advanced',
    tags: 'clusterroles,rbac,security',
    output: `NAME             CREATED AT
admin            2023-12-25T00:00:00Z
cluster-admin    2023-12-25T00:00:00Z
edit             2023-12-25T00:00:00Z
view             2023-12-25T00:00:00Z`,
  },
  {
    category: 'Security & RBAC',
    subcategory: 'Role Bindings',
    command: 'kubectl get rolebindings',
    description: 'List all role bindings in namespace',
    example: 'kubectl get rolebindings',
    versionIntroduced: '1.6',
    difficultyLevel: 'advanced',
    tags: 'rolebindings,rbac,security',
    output: `NAME             ROLE                AGE
read-pods        Role/pod-reader     5d
admin-binding    ClusterRole/admin   2d`,
  },
  {
    category: 'Security & RBAC',
    subcategory: 'Role Bindings',
    command: 'kubectl get clusterrolebindings',
    description: 'List all cluster role bindings',
    example: 'kubectl get clusterrolebindings',
    versionIntroduced: '1.6',
    difficultyLevel: 'advanced',
    tags: 'clusterrolebindings,rbac,security',
    output: `NAME                                                   ROLE                                                                               AGE
cluster-admin                                          ClusterRole/cluster-admin                                                          30d
system:controller:attachdetach-controller              ClusterRole/system:controller:attachdetach-controller                              30d`,
  },
  {
    category: 'Security & RBAC',
    subcategory: 'Role Bindings',
    command: 'kubectl create rolebinding',
    description: 'Create a role binding',
    example: 'kubectl create rolebinding my-binding --role=my-role --serviceaccount=default:my-sa',
    versionIntroduced: '1.6',
    difficultyLevel: 'advanced',
    tags: 'rolebinding,create,rbac',
    flags: '--role, --clusterrole, --user, --serviceaccount, --group',
    output: `rolebinding.rbac.authorization.k8s.io/my-binding created`,
  },
  {
    category: 'Security & RBAC',
    subcategory: 'Authorization',
    command: 'kubectl auth can-i',
    description: 'Check if you can perform an action',
    example: 'kubectl auth can-i create pods --namespace=default',
    versionIntroduced: '1.8',
    difficultyLevel: 'advanced',
    tags: 'auth,rbac,permissions',
    flags: '--as, --as-group, --namespace',
    output: `yes`,
  },
  {
    category: 'Security & RBAC',
    subcategory: 'Authorization',
    command: 'kubectl auth can-i --list',
    description: 'List all allowed actions for current user',
    example: 'kubectl auth can-i --list',
    versionIntroduced: '1.8',
    difficultyLevel: 'advanced',
    tags: 'auth,rbac,permissions',
    output: `Resources                                       Non-Resource URLs   Resource Names   Verbs
selfsubjectaccessreviews.authorization.k8s.io   []                  []               [create]
selfsubjectrulesreviews.authorization.k8s.io    []                  []               [create]
pods                                            []                  []               [get list watch create delete]`,
  },
  {
    category: 'Security & RBAC',
    subcategory: 'Pod Security',
    command: 'kubectl get podsecuritypolicies',
    description: 'List all pod security policies (deprecated in 1.25)',
    example: 'kubectl get podsecuritypolicies',
    versionIntroduced: '1.3',
    difficultyLevel: 'expert',
    tags: 'psp,security,deprecated',
    output: `NAME         PRIV    CAPS   SELINUX    RUNASUSER   FSGROUP    SUPGROUP   READONLYROOTFS   VOLUMES
restricted   false          RunAsAny   MustRunAs   MustRunAs  MustRunAs  false            configMap,emptyDir,projected,secret,downwardAPI,persistentVolumeClaim`,
  },
  {
    category: 'Observability',
    subcategory: 'Events',
    command: 'kubectl get events',
    description: 'List all events in the namespace',
    example: 'kubectl get events --sort-by=.metadata.creationTimestamp',
    versionIntroduced: '1.0',
    difficultyLevel: 'beginner',
    tags: 'events,debug,monitoring',
    flags: '--sort-by, --watch, --all-namespaces',
    output: `LAST SEEN   TYPE      REASON      OBJECT              MESSAGE
12s         Normal    Scheduled   pod/nginx           Successfully assigned default/nginx to worker-node-1
10s         Normal    Pulling     pod/nginx           Pulling image "nginx:latest"
5s          Normal    Pulled      pod/nginx           Successfully pulled image "nginx:latest" in 4.5s
2s          Normal    Created     pod/nginx           Created container nginx`,
  },
  {
    category: 'Observability',
    subcategory: 'Events',
    command: 'kubectl get events --watch',
    description: 'Watch events in real-time',
    example: 'kubectl get events --watch --all-namespaces',
    versionIntroduced: '1.0',
    difficultyLevel: 'beginner',
    tags: 'events,watch,monitoring',
    output: `LAST SEEN   TYPE      REASON      OBJECT              MESSAGE
0s          Normal    Starting    pod/nginx           Starting container nginx
0s          Normal    Started     pod/nginx           Started container nginx`,
  },
  {
    category: 'Observability',
    subcategory: 'Resource Usage',
    command: 'kubectl top pod',
    description: 'Display pod resource usage',
    example: 'kubectl top pod --all-namespaces --sort-by=cpu',
    versionIntroduced: '1.8',
    difficultyLevel: 'intermediate',
    tags: 'metrics,resources,monitoring',
    flags: '--all-namespaces, --sort-by, --containers',
    output: `NAME        CPU(cores)   MEMORY(bytes)
nginx       100m         120Mi
web-app     250m         512Mi`,
  },
  {
    category: 'Observability',
    subcategory: 'Resource Usage',
    command: 'kubectl top node',
    description: 'Display node resource usage',
    example: 'kubectl top node',
    versionIntroduced: '1.8',
    difficultyLevel: 'intermediate',
    tags: 'metrics,resources,monitoring',
    output: `NAME            CPU(cores)   CPU%   MEMORY(bytes)   MEMORY%
control-plane   250m         12%    1200Mi          30%
worker-node-1   450m         22%    2500Mi          60%`,
  },
  {
    category: 'Observability',
    subcategory: 'API Resources',
    command: 'kubectl api-resources',
    description: 'List all available API resources',
    example: 'kubectl api-resources --namespaced=true',
    versionIntroduced: '1.8',
    difficultyLevel: 'intermediate',
    tags: 'api,resources,info',
    flags: '--namespaced, --api-group, --verbs',
    output: `NAME                              SHORTNAMES   APIGROUP                       NAMESPACED   KIND
pods                              po           v1                             true         Pod
services                          svc          v1                             true         Service
deployments                       deploy       apps                           true         Deployment`,
  },
  {
    category: 'Observability',
    subcategory: 'API Resources',
    command: 'kubectl api-versions',
    description: 'List all available API versions',
    example: 'kubectl api-versions',
    versionIntroduced: '1.0',
    difficultyLevel: 'intermediate',
    tags: 'api,versions,info',
    output: `admissionregistration.k8s.io/v1
apiextensions.k8s.io/v1
apps/v1
autoscaling/v2
batch/v1
v1`,
  },
  {
    category: 'Observability',
    subcategory: 'Component Status',
    command: 'kubectl get componentstatuses',
    description: 'List component statuses (deprecated in 1.19)',
    example: 'kubectl get componentstatuses',
    versionIntroduced: '1.0',
    difficultyLevel: 'intermediate',
    tags: 'components,status,deprecated',
    output: `NAME                 STATUS    MESSAGE             ERROR
scheduler            Healthy   ok
controller-manager   Healthy   ok
etcd-0               Healthy   {"health":"true"}`,
  },
  {
    category: 'Advanced Workloads',
    subcategory: 'StatefulSets',
    command: 'kubectl get statefulsets',
    description: 'List all StatefulSets',
    example: 'kubectl get statefulsets',
    versionIntroduced: '1.5',
    difficultyLevel: 'advanced',
    tags: 'statefulset,workload,list',
    output: `NAME      READY   AGE
mysql     3/3     5d
redis     3/3     10d`,
  },
  {
    category: 'Advanced Workloads',
    subcategory: 'StatefulSets',
    command: 'kubectl describe statefulset',
    description: 'Show detailed information about a StatefulSet',
    example: 'kubectl describe statefulset mysql',
    versionIntroduced: '1.5',
    difficultyLevel: 'advanced',
    tags: 'statefulset,describe,info',
    output: `Name:               mysql
Namespace:          default
CreationTimestamp:  Mon, 25 Jan 2024 10:00:00 +0000
Selector:           app=mysql
Labels:             app=mysql
Replicas:           3 desired | 3 total
Update Strategy:    RollingUpdate
Pods Status:        3 Running / 0 Waiting / 0 Succeeded / 0 Failed
Pod Template:
  Labels:  app=mysql
  Containers:
   mysql:
    Image:      mysql:5.7
    Port:       3306/TCP
Volume Claims:
  Name:          data
  StorageClass:  standard
Events:          <none>`,
  },
  {
    category: 'Advanced Workloads',
    subcategory: 'StatefulSets',
    command: 'kubectl scale statefulset',
    description: 'Scale a StatefulSet',
    example: 'kubectl scale statefulset mysql --replicas=5',
    versionIntroduced: '1.5',
    difficultyLevel: 'advanced',
    tags: 'statefulset,scale,workload',
    output: `statefulset.apps/mysql scaled`,
  },
  {
    category: 'Advanced Workloads',
    subcategory: 'DaemonSets',
    command: 'kubectl get daemonsets',
    description: 'List all DaemonSets',
    example: 'kubectl get daemonsets',
    versionIntroduced: '1.1',
    difficultyLevel: 'advanced',
    tags: 'daemonset,workload,list',
    output: `NAME             DESIRED   CURRENT   READY   UP-TO-DATE   AVAILABLE   NODE SELECTOR   AGE
fluentd          3         3         3       3            3           <none>          30d
kube-proxy       3         3         3       3            3           <none>          30d`,
  },
  {
    category: 'Advanced Workloads',
    subcategory: 'DaemonSets',
    command: 'kubectl describe daemonset',
    description: 'Show detailed information about a DaemonSet',
    example: 'kubectl describe daemonset fluentd',
    versionIntroduced: '1.1',
    difficultyLevel: 'advanced',
    tags: 'daemonset,describe,info',
    output: `Name:           fluentd
Selector:       name=fluentd
Node-Selector:  <none>
Labels:         name=fluentd
Desired Number of Nodes Scheduled: 3
Current Number of Nodes Scheduled: 3
Number of Nodes Scheduled with Up-to-date Pods: 3
Number of Nodes Scheduled with Available Pods: 3
Number of Nodes Misscheduled: 0
Pods Status:  3 Running / 0 Waiting / 0 Succeeded / 0 Failed
Events:       <none>`,
  },
  {
    category: 'Advanced Workloads',
    subcategory: 'Jobs',
    command: 'kubectl get jobs',
    description: 'List all jobs',
    example: 'kubectl get jobs',
    versionIntroduced: '1.1',
    difficultyLevel: 'intermediate',
    tags: 'job,workload,list',
    output: `NAME        COMPLETIONS   DURATION   AGE
batch-job   1/1           15s        2m
pi          1/1           5s         10m`,
  },
  {
    category: 'Advanced Workloads',
    subcategory: 'Jobs',
    command: 'kubectl describe job',
    description: 'Show detailed information about a job',
    example: 'kubectl describe job batch-job',
    versionIntroduced: '1.1',
    difficultyLevel: 'intermediate',
    tags: 'job,describe,info',
    output: `Name:             batch-job
Namespace:        default
Selector:         controller-uid=58c1b2-...,job-name=batch-job
Labels:           job-name=batch-job
Parallelism:      1
Completions:      1
Start Time:       Mon, 25 Jan 2024 10:00:00 +0000
Completed At:     Mon, 25 Jan 2024 10:00:15 +0000
Duration:         15s
Pods Statuses:    0 Active / 1 Succeeded / 0 Failed
Pod Template:
  Labels:       job-name=batch-job
  Containers:
   pi:
    Image:      perl
    Command:    perl -Mbignum=bpi -wle print bpi(2000)
Events:
  Type    Reason            Age   From            Message
  ----    ------            ----  ----            -------
  Normal  SuccessfulCreate  2m    job-controller  Created pod: batch-job-abcde
  Normal  Completed         2m    job-controller  Job completed`,
  },
  {
    category: 'Advanced Workloads',
    subcategory: 'Jobs',
    command: 'kubectl create job',
    description: 'Create a job',
    example: 'kubectl create job test-job --image=busybox -- echo "Hello World"',
    versionIntroduced: '1.1',
    difficultyLevel: 'intermediate',
    tags: 'job,create,workload',
    flags: '--image, --from',
    output: `job.batch/test-job created`,
  },
  {
    category: 'Advanced Workloads',
    subcategory: 'CronJobs',
    command: 'kubectl get cronjobs',
    description: 'List all CronJobs',
    example: 'kubectl get cronjobs',
    versionIntroduced: '1.5',
    difficultyLevel: 'intermediate',
    tags: 'cronjob,workload,list',
    output: `NAME      SCHEDULE      SUSPEND   ACTIVE   LAST SCHEDULE   AGE
backup    0 2 * * *     False     0        10h             30d
cleanup   0 0 * * 0     False     1        10s             5d`,
  },
  {
    category: 'Advanced Workloads',
    subcategory: 'CronJobs',
    command: 'kubectl describe cronjob',
    description: 'Show detailed information about a CronJob',
    example: 'kubectl describe cronjob backup-job',
    versionIntroduced: '1.5',
    difficultyLevel: 'intermediate',
    tags: 'cronjob,describe,info',
    output: `Name:                          backup-job
Namespace:                     default
Schedule:                      0 2 * * *
Concurrency Policy:            Allow
Suspend:                       False
Successful Job History Limit:  3
Failed Job History Limit:      1
Starting Deadline Seconds:     <unset>
Selector:                      <unset>
Parallelism:                   <unset>
Completions:                   <unset>
Pod Template:
  Labels:           job-name=backup-job
  Containers:
   backup:
    Image:      backup:latest
Last Schedule Time:            Mon, 25 Jan 2024 02:00:00 +0000
Active Jobs:                   <none>
Events:
  Type    Reason            Age   From                Message
  ----    ------            ----  ----                -------
  Normal  SuccessfulCreate  10h   cronjob-controller  Created job backup-job-12345`,
  },
  {
    category: 'Advanced Workloads',
    subcategory: 'CronJobs',
    command: 'kubectl create cronjob',
    description: 'Create a CronJob',
    example: 'kubectl create cronjob backup --image=backup:latest --schedule="0 2 * * *" -- /backup.sh',
    versionIntroduced: '1.5',
    difficultyLevel: 'intermediate',
    tags: 'cronjob,create,workload',
    flags: '--image, --schedule',
    output: `cronjob.batch/backup created`,
  },
  {
    category: 'Advanced Workloads',
    subcategory: 'ReplicaSets',
    command: 'kubectl get replicasets',
    description: 'List all ReplicaSets',
    example: 'kubectl get replicasets',
    versionIntroduced: '1.2',
    difficultyLevel: 'intermediate',
    tags: 'replicaset,workload,list',
    output: `NAME               DESIRED   CURRENT   READY   AGE
nginx-rs           3         3         3       5d
frontend-5f89      3         3         3       10d`,
  },
  {
    category: 'Advanced Workloads',
    subcategory: 'ReplicaSets',
    command: 'kubectl describe replicaset',
    description: 'Show detailed information about a ReplicaSet',
    example: 'kubectl describe replicaset nginx-rs',
    versionIntroduced: '1.2',
    difficultyLevel: 'intermediate',
    tags: 'replicaset,describe,info',
    output: `Name:           nginx-rs
Namespace:      default
Selector:       app=nginx,pod-template-hash=5f89...
Labels:         app=nginx
Replicas:       3 current / 3 desired
Pods Status:    3 Running / 0 Waiting / 0 Succeeded / 0 Failed
Pod Template:
  Labels:  app=nginx
  Containers:
   nginx:
    Image:      nginx:latest
Events:         <none>`,
  },
  {
    category: 'Troubleshooting',
    subcategory: 'Common Issues',
    command: 'kubectl get pods --field-selector',
    description: 'Filter pods by field selectors',
    example: 'kubectl get pods --field-selector=status.phase!=Running',
    versionIntroduced: '1.0',
    difficultyLevel: 'intermediate',
    tags: 'troubleshoot,filter,pods',
    flags: '--field-selector',
    output: `NAME             READY   STATUS    RESTARTS   AGE
crash-loop-pod   0/1     Error     5          10m
pending-pod      0/1     Pending   0          2m`,
  },
  {
    category: 'Troubleshooting',
    subcategory: 'Common Issues',
    command: 'kubectl get pods --show-labels',
    description: 'Show all labels on pods',
    example: 'kubectl get pods --show-labels',
    versionIntroduced: '1.0',
    difficultyLevel: 'beginner',
    tags: 'labels,pods,info',
    output: `NAME         READY   STATUS    RESTARTS   AGE   LABELS
nginx-pod    1/1     Running   0          5d    run=nginx,env=prod
web-pod      1/1     Running   0          2d    app=web,tier=frontend`,
  },
  {
    category: 'Troubleshooting',
    subcategory: 'Common Issues',
    command: 'kubectl label pods',
    description: 'Add or update labels on pods',
    example: 'kubectl label pods nginx-pod env=production',
    versionIntroduced: '1.0',
    difficultyLevel: 'intermediate',
    tags: 'labels,pods,update',
    flags: '--overwrite, --all',
    output: `pod/nginx-pod labeled`,
  },
  {
    category: 'Troubleshooting',
    subcategory: 'Common Issues',
    command: 'kubectl annotate pods',
    description: 'Add or update annotations on pods',
    example: 'kubectl annotate pods nginx-pod description="Web server"',
    versionIntroduced: '1.0',
    difficultyLevel: 'intermediate',
    tags: 'annotations,pods,update',
    flags: '--overwrite, --all',
    output: `pod/nginx-pod annotated`,
  },
  {
    category: 'Troubleshooting',
    subcategory: 'Diagnostics',
    command: 'kubectl get all',
    description: 'Get all resources in the namespace',
    example: 'kubectl get all --all-namespaces',
    versionIntroduced: '1.0',
    difficultyLevel: 'beginner',
    tags: 'list,all,resources',
    output: `NAME                           READY   STATUS    RESTARTS   AGE
pod/nginx-6b6c597d57-abcde     1/1     Running   0          5d
pod/web-7890123456-fghij       1/1     Running   0          2d

NAME                 TYPE        CLUSTER-IP   EXTERNAL-IP   PORT(S)   AGE
service/kubernetes   ClusterIP   10.96.0.1    <none>        443/TCP   30d
service/nginx        ClusterIP   10.96.0.2    <none>        80/TCP    5d

NAME                    READY   UP-TO-DATE   AVAILABLE   AGE
deployment.apps/nginx   1/1     1            1           5d
deployment.apps/web     1/1     1            1           2d

NAME                             DESIRED   CURRENT   READY   AGE
replicaset.apps/nginx-6b6c597d   1         1         1       5d
replicaset.apps/web-7890123456   1         1         1       2d`,
  },
  {
    category: 'Troubleshooting',
    subcategory: 'Diagnostics',
    command: 'kubectl explain',
    description: 'Get documentation for a resource',
    example: 'kubectl explain pods.spec.containers',
    versionIntroduced: '1.0',
    difficultyLevel: 'beginner',
    tags: 'documentation,help,info',
    flags: '--recursive',
    output: `KIND:     Pod
VERSION:  v1

RESOURCE: containers <[]Object>

DESCRIPTION:
     List of containers belonging to the pod. Containers cannot currently be
     added or removed. There must be at least one container in a Pod. Cannot
     be updated.

     A single application container that you want to run within a pod.

FIELDS:
   name	<string> -required-
     Name of the container specified as a DNS_LABEL. Each container in a pod
     must have a unique name (DNS_LABEL). Cannot be updated.

   image	<string>
     Docker image name. More info:
     https://kubernetes.io/docs/concepts/containers/images This field is
     optional to allow higher level config management to default or override
     container images in workload controllers like Deployments and
     StatefulSets.`,
  },
  {
    category: 'Troubleshooting',
    subcategory: 'Diagnostics',
    command: 'kubectl diff',
    description: 'Show differences between current and applied configuration',
    example: 'kubectl diff -f deployment.yaml',
    versionIntroduced: '1.13',
    difficultyLevel: 'intermediate',
    tags: 'diff,compare,config',
    output: `diff -u -N /tmp/LIVE/deployment.apps/nginx /tmp/MERGED/deployment.apps/nginx
--- /tmp/LIVE/deployment.apps/nginx	2024-01-25 10:00:00.000000000 +0000
+++ /tmp/MERGED/deployment.apps/nginx	2024-01-25 10:00:00.000000000 +0000
@@ -6,7 +6,7 @@
     app: nginx
 spec:
   replicas: 1
-  selector:
+  replicas: 3
+  selector:
     matchLabels:
       app: nginx`,
  },
  {
    category: 'Troubleshooting',
    subcategory: 'Resource Management',
    command: 'kubectl apply',
    description: 'Apply a configuration to a resource',
    example: 'kubectl apply -f deployment.yaml',
    versionIntroduced: '1.0',
    difficultyLevel: 'beginner',
    tags: 'apply,config,yaml',
    flags: '-f, --recursive, --dry-run, --force',
    output: `deployment.apps/nginx configured`,
  },
  {
    category: 'Troubleshooting',
    subcategory: 'Resource Management',
    command: 'kubectl apply --dry-run',
    description: 'Preview changes without applying them',
    example: 'kubectl apply -f deployment.yaml --dry-run=client',
    versionIntroduced: '1.0',
    difficultyLevel: 'intermediate',
    tags: 'apply,dry-run,preview',
    flags: '--dry-run=client, --dry-run=server',
    output: `deployment.apps/nginx configured (dry run)`,
  },
  {
    category: 'Troubleshooting',
    subcategory: 'Resource Management',
    command: 'kubectl delete',
    description: 'Delete resources',
    example: 'kubectl delete -f deployment.yaml',
    versionIntroduced: '1.0',
    difficultyLevel: 'beginner',
    tags: 'delete,remove,resource',
    flags: '-f, --all, --grace-period, --force, --cascade',
    output: `deployment.apps/nginx deleted`,
  },
  {
    category: 'Troubleshooting',
    subcategory: 'Resource Management',
    command: 'kubectl replace',
    description: 'Replace a resource',
    example: 'kubectl replace -f deployment.yaml',
    versionIntroduced: '1.0',
    difficultyLevel: 'intermediate',
    tags: 'replace,update,resource',
    flags: '-f, --force',
    output: `deployment.apps/nginx replaced`,
  },
  {
    category: 'Troubleshooting',
    subcategory: 'Resource Management',
    command: 'kubectl patch',
    description: 'Update fields of a resource using strategic merge patch',
    example: 'kubectl patch deployment nginx -p \'{"spec":{"replicas":3}}\'',
    versionIntroduced: '1.0',
    difficultyLevel: 'advanced',
    tags: 'patch,update,resource',
    flags: '--type, -p',
    output: `deployment.apps/nginx patched`,
  },
  {
    category: 'Troubleshooting',
    subcategory: 'Advanced Debugging',
    command: 'kubectl proxy',
    description: 'Create a proxy to the Kubernetes API server',
    example: 'kubectl proxy --port=8080',
    versionIntroduced: '1.0',
    difficultyLevel: 'advanced',
    tags: 'proxy,api,access',
    flags: '--port, --address',
    output: `Starting to serve on 127.0.0.1:8080`,
  },
  {
    category: 'Troubleshooting',
    subcategory: 'Advanced Debugging',
    command: 'kubectl drain',
    description: 'Drain a node for maintenance',
    example: 'kubectl drain node-1 --ignore-daemonsets --delete-emptydir-data',
    versionIntroduced: '1.0',
    difficultyLevel: 'expert',
    tags: 'drain,maintenance,node',
    flags: '--ignore-daemonsets, --force, --delete-emptydir-data, --grace-period',
    output: `node/node-1 cordoned
WARNING: ignoring DaemonSet-managed Pods: kube-system/kube-proxy-abcde, kube-system/weave-net-fghij
evicting pod default/nginx-6b6c597d57-abcde
evicting pod default/web-7890123456-fghij
pod/nginx-6b6c597d57-abcde evicted
pod/web-7890123456-fghij evicted
node/node-1 drained`,
  },
  {
    category: 'Troubleshooting',
    subcategory: 'Advanced Debugging',
    command: 'kubectl cordon',
    description: 'Mark node as unschedulable',
    example: 'kubectl cordon node-1',
    versionIntroduced: '1.0',
    difficultyLevel: 'advanced',
    tags: 'cordon,node,maintenance',
    output: `node/node-1 cordoned`,
  },
  {
    category: 'Troubleshooting',
    subcategory: 'Advanced Debugging',
    command: 'kubectl uncordon',
    description: 'Mark node as schedulable',
    example: 'kubectl uncordon node-1',
    versionIntroduced: '1.0',
    difficultyLevel: 'advanced',
    tags: 'uncordon,node,maintenance',
    output: `node/node-1 uncordoned`,
  },
  {
    category: 'Troubleshooting',
    subcategory: 'Advanced Debugging',
    command: 'kubectl taint',
    description: 'Update taints on nodes',
    example: 'kubectl taint nodes node-1 key=value:NoSchedule',
    versionIntroduced: '1.6',
    difficultyLevel: 'expert',
    tags: 'taint,node,scheduling',
    flags: '--overwrite',
    output: `node/node-1 tainted`,
  },
  {
    category: 'Configuration',
    subcategory: 'YAML Management',
    command: 'kubectl get -o yaml',
    description: 'Output resource in YAML format',
    example: 'kubectl get deployment nginx -o yaml',
    versionIntroduced: '1.0',
    difficultyLevel: 'beginner',
    tags: 'yaml,export,config',
    output: `apiVersion: apps/v1
kind: Deployment
metadata:
  name: nginx
  namespace: default
  uid: 5f89...
  resourceVersion: "12345"
spec:
  replicas: 3
  selector:
    matchLabels:
      app: nginx
  template:
    metadata:
      labels:
        app: nginx
    spec:
      containers:
      - image: nginx:latest
        name: nginx
        ports:
        - containerPort: 80
status:
  availableReplicas: 3
  readyReplicas: 3
  replicas: 3`,
  },
  {
    category: 'Configuration',
    subcategory: 'YAML Management',
    command: 'kubectl get -o json',
    description: 'Output resource in JSON format',
    example: 'kubectl get pod nginx -o json',
    versionIntroduced: '1.0',
    difficultyLevel: 'intermediate',
    tags: 'json,export,config',
    output: `{
    "apiVersion": "v1",
    "kind": "Pod",
    "metadata": {
        "name": "nginx",
        "namespace": "default",
        "labels": {
            "app": "nginx"
        }
    },
    "spec": {
        "containers": [
            {
                "image": "nginx:latest",
                "name": "nginx"
            }
        ]
    },
    "status": {
        "phase": "Running"
    }
}`,
  },
  {
    category: 'Configuration',
    subcategory: 'YAML Management',
    command: 'kubectl get -o jsonpath',
    description: 'Extract specific fields using JSONPath',
    example: 'kubectl get pods -o jsonpath=\'{.items[*].metadata.name}\'',
    versionIntroduced: '1.0',
    difficultyLevel: 'advanced',
    tags: 'jsonpath,query,extract',
    output: `nginx-6b6c597d57-abcde web-7890123456-fghij`,
  },
  {
    category: 'Configuration',
    subcategory: 'YAML Management',
    command: 'kubectl get -o custom-columns',
    description: 'Display output using custom columns',
    example: 'kubectl get pods -o custom-columns=NAME:.metadata.name,STATUS:.status.phase',
    versionIntroduced: '1.0',
    difficultyLevel: 'advanced',
    tags: 'custom-columns,format,output',
    output: `NAME                         STATUS
nginx-6b6c597d57-abcde       Running
web-7890123456-fghij         Running`,
  },
  {
    category: 'Advanced Workloads',
    subcategory: 'Horizontal Pod Autoscaler',
    command: 'kubectl get hpa',
    description: 'List all horizontal pod autoscalers',
    example: 'kubectl get hpa',
    versionIntroduced: '1.1',
    difficultyLevel: 'intermediate',
    tags: 'hpa,autoscale,scaling',
    output: `NAME         REFERENCE               TARGETS   MINPODS   MAXPODS   REPLICAS   AGE
php-apache   Deployment/php-apache   0%/50%    1         10        1          30d
nginx-hpa    Deployment/nginx        50%/80%   2         5         3          5d`,
  },
  {
    category: 'Advanced Workloads',
    subcategory: 'Horizontal Pod Autoscaler',
    command: 'kubectl describe hpa',
    description: 'Show detailed information about an HPA',
    example: 'kubectl describe hpa nginx-hpa',
    versionIntroduced: '1.1',
    difficultyLevel: 'intermediate',
    tags: 'hpa,autoscale,info',
    output: `Name:                                                  nginx-hpa
Namespace:                                             default
Labels:                                                <none>
Annotations:                                           <none>
CreationTimestamp:                                     Mon, 25 Jan 2024 10:00:00 +0000
Reference:                                             Deployment/nginx
Metrics:                                               ( current / target )
  resource cpu on pods  (as a percentage of request):  0% (1m) / 50%
Min replicas:                                          1
Max replicas:                                          10
Deployment pods:                                       1 current / 1 desired
Conditions:
  Type            Status  Reason              Message
  ----            ------  ------              -------
  AbleToScale     True    ScaleDownStabilized recent recommendations were higher than current one, applying the highest recent recommendation
  ScalingActive   True    ValidMetricFound    the HPA was able to successfully calculate a replica count from cpu resource utilization (percentage of request)
  ScalingLimited  False   DesiredWithinRange  the desired count is within the acceptable range
Events:
  Type    Reason             Age   From                       Message
  ----    ------             ----  ----                       -------
  Normal  SuccessfulRescale  5m    horizontal-pod-autoscaler  New size: 4; reason: cpu resource utilization (percentage of request) above target
  Normal  SuccessfulRescale  2m    horizontal-pod-autoscaler  New size: 1; reason: All metrics below target`,
  },
  {
    category: 'Advanced Workloads',
    subcategory: 'Custom Resources',
    command: 'kubectl get crd',
    description: 'List all custom resource definitions',
    example: 'kubectl get crd',
    versionIntroduced: '1.7',
    difficultyLevel: 'expert',
    tags: 'crd,custom,resources',
    output: `NAME                               CREATED AT
bgpconfigurations.crd.projectcalico.org   2024-01-25T10:00:00Z
bgppeers.crd.projectcalico.org            2024-01-25T10:00:00Z`,
  },
  {
    category: 'Advanced Workloads',
    subcategory: 'Custom Resources',
    command: 'kubectl describe crd',
    description: 'Show detailed information about a CRD',
    example: 'kubectl describe crd mycustomresource.example.com',
    versionIntroduced: '1.7',
    difficultyLevel: 'expert',
    tags: 'crd,custom,info',
    output: `Name:         mycustomresource.example.com
Namespace:    <none>
Group:        example.com
Version:      v1
Scope:        Namespaced
Kind:         MyCustomResource`,
  },
  {
    category: 'Security & RBAC',
    subcategory: 'Certificates',
    command: 'kubectl get certificatesigningrequests',
    description: 'List all certificate signing requests',
    example: 'kubectl get certificatesigningrequests',
    versionIntroduced: '1.4',
    difficultyLevel: 'expert',
    tags: 'certificates,security,csr',
    output: `NAME        AGE   SIGNERNAME                      REQUESTOR               REQUESTEDDURATION   CONDITION
csr-5b2n9   10m   kubernetes.io/kube-apiserver-client   kubernetes-admin        <none>              Approved,Issued`,
  },
  {
    category: 'Security & RBAC',
    subcategory: 'Certificates',
    command: 'kubectl certificate approve',
    description: 'Approve a certificate signing request',
    example: 'kubectl certificate approve my-csr',
    versionIntroduced: '1.4',
    difficultyLevel: 'expert',
    tags: 'certificates,approve,security',
    output: `certificatesigningrequest.certificates.k8s.io/my-csr approved`,
  },
  {
    category: 'Cluster Management',
    subcategory: 'Plugin Management',
    command: 'kubectl plugin list',
    description: 'List all available kubectl plugins',
    example: 'kubectl plugin list',
    versionIntroduced: '1.12',
    difficultyLevel: 'intermediate',
    tags: 'plugins,extensions,tools',
    output: `The following compatible plugins are available:
/usr/local/bin/kubectl-access_matrix
/usr/local/bin/kubectl-grep
/usr/local/bin/kubectl-krew
/usr/local/bin/kubectl-ns
/usr/local/bin/kubectl-ctx`,
  },
  {
    category: 'Configuration',
    subcategory: 'Kustomize',
    command: 'kubectl apply -k',
    description: 'Apply resources from a kustomization directory',
    example: 'kubectl apply -k ./kustomize/overlays/production',
    versionIntroduced: '1.14',
    difficultyLevel: 'advanced',
    tags: 'kustomize,apply,config',
    output: `deployment.apps/nginx configured`,
  },
  {
    category: 'Configuration',
    subcategory: 'Kustomize',
    command: 'kubectl kustomize',
    description: 'Build kustomization and print to stdout',
    example: 'kubectl kustomize ./kustomize/overlays/staging',
    versionIntroduced: '1.14',
    difficultyLevel: 'advanced',
    tags: 'kustomize,build,config',
    output: `apiVersion: apps/v1
kind: Deployment
metadata:
  name: nginx
spec:
  replicas: 3
  template:
    spec:
      containers:
      - image: nginx:1.14.2
        name: nginx`,
  },
  {
    category: 'Observability',
    subcategory: 'Wait Operations',
    command: 'kubectl wait',
    description: 'Wait for a condition on one or more resources',
    example: 'kubectl wait --for=condition=ready pod/nginx --timeout=60s',
    versionIntroduced: '1.11',
    difficultyLevel: 'intermediate',
    tags: 'wait,condition,sync',
    flags: '--for, --timeout',
    output: `pod/nginx condition met`,
  },
  {
    category: 'Advanced Workloads',
    subcategory: 'Priority Classes',
    command: 'kubectl get priorityclasses',
    description: 'List all priority classes',
    example: 'kubectl get priorityclasses',
    versionIntroduced: '1.8',
    difficultyLevel: 'expert',
    tags: 'priority,scheduling,workload',
    output: `NAME                      VALUE        GLOBAL-DEFAULT   AGE
system-cluster-critical   2000000000   false            30d
system-node-critical      2000001000   false            30d
high-priority             1000000      false            5d`,
  },
  {
    category: 'Services & Networking',
    subcategory: 'EndpointSlices',
    command: 'kubectl get endpointslices',
    description: 'List all endpoint slices',
    example: 'kubectl get endpointslices',
    versionIntroduced: '1.17',
    difficultyLevel: 'advanced',
    tags: 'endpointslices,networking,service',
    output: `NAME             ADDRESSTYPE   PORTS   ENDPOINTS                               AGE
kubernetes       IPv4          443     192.168.0.1                             30d
nginx-abcde      IPv4          80      10.244.0.5,10.244.0.6,10.244.0.7        5d`,
  },
  {
    category: 'Security & RBAC',
    subcategory: 'Certificate Management',
    command: 'kubectl certificate approve',
    description: 'Approve a certificate signing request',
    example: 'kubectl certificate approve my-csr',
    versionIntroduced: '1.4',
    difficultyLevel: 'expert',
    tags: 'certificates,approve,security',
    flags: '--signer-name',
    output: `certificatesigningrequest.certificates.k8s.io/my-csr approved`,
  },
  {
    category: 'Security & RBAC',
    subcategory: 'Certificate Management',
    command: 'kubectl certificate deny',
    description: 'Deny a certificate signing request',
    example: 'kubectl certificate deny my-csr',
    versionIntroduced: '1.4',
    difficultyLevel: 'expert',
    tags: 'certificates,deny,security',
    output: `certificatesigningrequest.certificates.k8s.io/my-csr denied`,
  },
  {
    category: 'Observability',
    subcategory: 'API Discovery',
    command: 'kubectl api-versions',
    description: 'List all available API versions',
    example: 'kubectl api-versions',
    versionIntroduced: '1.0',
    difficultyLevel: 'intermediate',
    tags: 'api,versions,discovery',
    output: `admissionregistration.k8s.io/v1
apps/v1
authentication.k8s.io/v1
authorization.k8s.io/v1
autoscaling/v1
autoscaling/v2
batch/v1
certificates.k8s.io/v1
coordination.k8s.io/v1
core/v1
discovery.k8s.io/v1
events.k8s.io/v1
extensions/v1beta1
flowcontrol.apiserver.k8s.io/v1beta2
networking.k8s.io/v1
node.k8s.io/v1
policy/v1
rbac.authorization.k8s.io/v1
scheduling.k8s.io/v1
storage.k8s.io/v1
v1`,
 },
  {
    category: 'Observability',
    subcategory: 'API Discovery',
    command: 'kubectl api-resources',
    description: 'List all available API resources',
    example: 'kubectl api-resources --namespaced=true',
    versionIntroduced: '1.8',
    difficultyLevel: 'intermediate',
    tags: 'api,resources,discovery',
    flags: '--namespaced, --api-group, --verbs',
    output: `NAME                              SHORTNAMES   APIGROUP                       NAMESPACED   KIND
bindings                                                                    true         Binding
componentstatuses                 cs                                        false        ComponentStatus
configmaps                        cm                                        true         ConfigMap
endpoints                         ep                                        true         Endpoints
events                            ev                                        true         Event
limitranges                       limits                                    true         LimitRange
namespaces                        ns                                        false        Namespace
nodes                             no                                        false        Node
persistentvolumeclaims            pvc                                       true         PersistentVolumeClaim
persistentvolumes                 pv                                        false        PersistentVolume
pods                              po                                        true         Pod
podtemplates                                                                true         PodTemplate
replicationcontrollers            rc                                        true         ReplicationController
resourcequotas                    quota                                     true         ResourceQuota
secrets                                                                     true         Secret
serviceaccounts                   sa                                        true         ServiceAccount
services                          svc                                       true         Service`,
  },
  {
    category: 'Configuration',
    subcategory: 'Shell Completion',
    command: 'kubectl completion bash',
    description: 'Generate bash completion script',
    example: 'kubectl completion bash > /etc/bash_completion.d/kubectl',
    versionIntroduced: '1.0',
    difficultyLevel: 'beginner',
    tags: 'completion,shell,bash',
    output: `# bash completion for kubectl                              -*- shell-script -*-

__kubectl_debug()
{
    if [[ -n \${BASH_COMP_DEBUG_FILE:-} ]]; then
        echo "$*" >> "\${BASH_COMP_DEBUG_FILE}"
    fi
}

# ... (truncated)`,
 },
  {
    category: 'Configuration',
    subcategory: 'Shell Completion',
    command: 'kubectl completion zsh',
    description: 'Generate zsh completion script',
    example: 'kubectl completion zsh > "\${fpath[1]}/_kubectl"',
    versionIntroduced: '1.0',
    difficultyLevel: 'beginner',
    tags: 'completion,shell,zsh',
    output: `#compdef kubectl

__kubectl_bash_source() {
    alias shopt=':'
    alias _expand=_bash_expand
    alias _complete=_bash_comp
    emulate -L sh
    setopt kshglob noshglob braceexpand

    source "$@"
}

# ... (truncated)`,
  },
  {
    category: 'Configuration',
    subcategory: 'Shell Completion',
    command: 'kubectl completion fish',
    description: 'Generate fish completion script',
    example: 'kubectl completion fish | source',
    versionIntroduced: '1.12',
    difficultyLevel: 'beginner',
    tags: 'completion,shell,fish',
    output: `# fish completion for kubectl

function __kubectl_debug
    set -l file "$BASH_COMP_DEBUG_FILE"
    if test -n "$file"
        echo "$argv" >> $file
    end
end

# ... (truncated)`,
  },
  {
    category: 'Configuration',
    subcategory: 'Shell Completion',
    command: 'kubectl completion powershell',
    description: 'Generate PowerShell completion script',
    example: 'kubectl completion powershell | Out-String | Invoke-Expression',
    versionIntroduced: '1.14',
    difficultyLevel: 'beginner',
    tags: 'completion,shell,powershell',
    output: `<#
.SYNOPSIS
PowerShell completion for kubectl

.DESCRIPTION
This script provides tab completion for the kubectl command line tool.
#>

using namespace System.Collections
using namespace System.Collections.Generic
using namespace System.Management.Automation
using namespace System.Management.Automation.Language

# ... (truncated)`,
  },
  {
    category: 'Configuration',
    subcategory: 'Plugin Management',
    command: 'kubectl plugin list',
    description: 'List all available kubectl plugins',
    example: 'kubectl plugin list',
    versionIntroduced: '1.12',
    difficultyLevel: 'intermediate',
    tags: 'plugins,extensions,tools',
    output: `The following compatible plugins are available:
/usr/local/bin/kubectl-access_matrix
/usr/local/bin/kubectl-grep
/usr/local/bin/kubectl-krew
/usr/local/bin/kubectl-ns
/usr/local/bin/kubectl-ctx`,
  },
  {
    category: 'Advanced Workloads',
    subcategory: 'Kustomize Build',
    command: 'kubectl kustomize build',
    description: 'Build kustomization with overlays and patches',
    example: 'kubectl kustomize build overlays/production --enable-helm',
    versionIntroduced: '1.14',
    difficultyLevel: 'advanced',
    tags: 'kustomize,build,overlay,patches',
    flags: '--enable-helm, --load-restrictor',
    output: `apiVersion: apps/v1
kind: Deployment
metadata:
  name: nginx
spec:
  replicas: 3
  template:
    spec:
      containers:
      - image: nginx:1.14.2
        name: nginx`,
  },
  {
    category: 'Observability',
    subcategory: 'Events',
    command: 'kubectl get events',
    description: 'List events in the current namespace',
    example: 'kubectl get events --sort-by=.metadata.creationTimestamp',
    versionIntroduced: '1.0',
    difficultyLevel: 'beginner',
    tags: 'events,monitoring,debugging',
    flags: '--sort-by, --field-selector, --watch',
    output: `LAST SEEN   TYPE      REASON              OBJECT                  MESSAGE
5m          Normal    Scheduled           pod/nginx-6b6c597d57    Successfully assigned default/nginx-6b6c597d57 to node-1
2m          Normal    Pulling             pod/nginx-6b6c597d57    Pulling image "nginx:latest"
2m          Normal    Pulled              pod/nginx-6b6c597d57    Successfully pulled image "nginx:latest"
2m          Normal    Created             pod/nginx-6b6c597d57    Created container nginx
2m          Normal    Started             pod/nginx-6b6c597d57    Started container nginx`,
  },
  {
    category: 'Troubleshooting',
    subcategory: 'Cluster Diagnostics',
    command: 'kubectl cluster-info dump',
    description: 'Dump lots of relevant info for debugging cluster',
    example: 'kubectl cluster-info dump --output-directory=/tmp/cluster-dump',
    versionIntroduced: '1.0',
    difficultyLevel: 'expert',
    tags: 'diagnostics,dump,debugging',
    flags: '--output-directory, --all-namespaces',
    output: `Cluster info dumped to /tmp/cluster-dump`,
  },
  {
    category: 'Cluster Management',
    subcategory: 'Node Management',
    command: 'kubectl cordon',
    description: 'Mark node as unschedulable',
    example: 'kubectl cordon node-1',
    versionIntroduced: '1.0',
    difficultyLevel: 'advanced',
    tags: 'cordon,node,maintenance',
    output: `node/node-1 cordoned`,
  },
  {
    category: 'Cluster Management',
    subcategory: 'Node Management',
    command: 'kubectl uncordon',
    description: 'Mark node as schedulable',
    example: 'kubectl uncordon node-1',
    versionIntroduced: '1.0',
    difficultyLevel: 'advanced',
    tags: 'uncordon,node,maintenance',
    output: `node/node-1 uncordoned`,
  },
  {
    category: 'Cluster Management',
    subcategory: 'Node Management',
    command: 'kubectl drain',
    description: 'Drain node in preparation for maintenance',
    example: 'kubectl drain node-1 --ignore-daemonsets --delete-emptydir-data',
    versionIntroduced: '1.0',
    difficultyLevel: 'expert',
    tags: 'drain,node,maintenance',
    flags: '--ignore-daemonsets, --delete-emptydir-data, --force, --timeout',
    output: `node/node-1 cordoned
WARNING: ignoring DaemonSet-managed Pods: kube-system/kube-proxy-abcde, kube-system/weave-net-fghij
evicting pod default/nginx-6b6c597d57-abcde
evicting pod default/web-7890123456-fghij
pod/nginx-6b6c597d57-abcde evicted
pod/web-7890123456-fghij evicted
node/node-1 drained`,
  },
  {
    category: 'Cluster Management',
    subcategory: 'Node Management',
    command: 'kubectl taint',
    description: 'Update taints on one or more nodes',
    example: 'kubectl taint nodes node-1 key=value:NoSchedule',
    versionIntroduced: '1.6',
    difficultyLevel: 'expert',
    tags: 'taint,node,scheduling',
    flags: '--overwrite',
    output: `node/node-1 tainted`,
  },
  {
    category: 'Cluster Management',
    subcategory: 'Node Management',
    command: 'kubectl untaint',
    description: 'Remove taints from one or more nodes',
    example: 'kubectl untaint nodes node-1 key-',
    versionIntroduced: '1.6',
    difficultyLevel: 'expert',
    tags: 'untaint,node,scheduling',
    output: `node/node-1 untainted`,
  },
  {
    category: 'Troubleshooting',
    subcategory: 'Debugging',
    command: 'kubectl debug',
    description: 'Create debugging sessions for troubleshooting pods',
    example: 'kubectl debug my-pod -it --image=busybox --target=my-container',
    versionIntroduced: '1.18',
    difficultyLevel: 'advanced',
    tags: 'debug,troubleshooting,ephemeral',
    flags: '--image, --target, --copy-to, --attach, --stdin, --tty',
    output: `Targeting container "my-container". If you don't see processes from this container it may be because the container runtime doesn't support this feature.
Defaulting debug container name to debugger-8xzrl.
/ #`,
  },
  {
    category: 'Troubleshooting',
    subcategory: 'Debugging',
    command: 'kubectl debug --copy-to',
    description: 'Create a copy of a pod for debugging',
    example: 'kubectl debug my-pod --copy-to=my-pod-debug --image=busybox',
    versionIntroduced: '1.20',
    difficultyLevel: 'advanced',
    tags: 'debug,copy,troubleshooting',
    flags: '--copy-to, --image',
    output: `pod/my-pod-debug created`,
  },
  {
    category: 'Troubleshooting',
    subcategory: 'Debugging',
    command: 'kubectl attach',
    description: 'Attach to a running container',
    example: 'kubectl attach my-pod -c my-container -i -t',
    versionIntroduced: '1.0',
    difficultyLevel: 'intermediate',
    tags: 'attach,debug,container',
    flags: '-i, -t, --container',
    output: `Defaulting container name to my-container.
Use 'kubectl describe pod/my-pod -n default' to see all of the containers in this pod.
/ # ls
bin   dev   etc   home  proc  root  sys   tmp   usr   var
/ #`,
  },
  {
    category: 'Troubleshooting',
    subcategory: 'Networking',
    command: 'kubectl port-forward',
    description: 'Forward one or more local ports to a pod',
    example: 'kubectl port-forward pod/my-pod 8080:80',
    versionIntroduced: '1.0',
    difficultyLevel: 'beginner',
    tags: 'port-forward,debug,networking',
    flags: '--address',
    output: `Forwarding from 127.0.0.1:8080 -> 80
Forwarding from [::1]:8080 -> 80
Handling connection for 8080`,
  },
  {
    category: 'Troubleshooting',
    subcategory: 'Networking',
    command: 'kubectl proxy',
    description: 'Run a proxy to the Kubernetes API server',
    example: 'kubectl proxy --port=8080',
    versionIntroduced: '1.0',
    difficultyLevel: 'advanced',
    tags: 'proxy,api,access',
    flags: '--port, --address, --accept-hosts',
    output: `Starting to serve on 127.0.0.1:8080`,
  },
  {
    category: 'Observability',
    subcategory: 'Metrics',
    command: 'kubectl top nodes',
    description: 'Display resource usage of nodes',
    example: 'kubectl top nodes --sort-by=cpu',
    versionIntroduced: '1.8',
    difficultyLevel: 'intermediate',
    tags: 'metrics,monitoring,nodes',
    flags: '--sort-by',
    output: `NAME      CPU(cores)   CPU%   MEMORY(bytes)   MEMORY%
node-1    150m         7%     1200Mi          30%
node-2    200m         10%    1500Mi          37%`,
  },
  {
    category: 'Observability',
    subcategory: 'Metrics',
    command: 'kubectl top pods',
    description: 'Display resource usage of pods',
    example: 'kubectl top pods --all-namespaces --containers',
    versionIntroduced: '1.8',
    difficultyLevel: 'intermediate',
    tags: 'metrics,monitoring,pods',
    flags: '--all-namespaces, --containers, --sort-by',
    output: `NAMESPACE   POD                       NAME           CPU(cores)   MEMORY(bytes)
default     nginx-6b6c597d57-abcde    nginx          5m           20Mi
default     web-7890123456-fghij      web            10m          45Mi
kube-system coredns-5644d7b6d9-klmn   coredns        3m           15Mi`,
  },
  {
    category: 'Observability',
    subcategory: 'Resource Description',
    command: 'kubectl describe',
    description: 'Show details of a specific resource',
    example: 'kubectl describe pod my-pod --field-selector=status.phase=Running',
    versionIntroduced: '1.0',
    difficultyLevel: 'beginner',
    tags: 'describe,debug,information',
    flags: '--field-selector, --show-events',
    output: `Name:         my-pod
Namespace:    default
Priority:     0
Node:         node-1/192.168.1.5
Start Time:   Mon, 01 Jan 2024 10:00:00 +0000
Labels:       run=my-pod
Status:       Running
IP:           10.244.0.5
Containers:
  my-container:
    Container ID:   containerd://...
    Image:          nginx
    Image ID:       docker.io/library/nginx@sha256:...
    State:          Running
      Started:      Mon, 01 Jan 2024 10:00:05 +0000
    Ready:          True
Events:
  Type    Reason     Age   From               Message
  ----    ------     ----  ----               -------
  Normal  Scheduled  5m    default-scheduler  Successfully assigned default/my-pod to node-1
  Normal  Pulling    5m    kubelet            Pulling image "nginx"
  Normal  Pulled     5m    kubelet            Successfully pulled image "nginx"
  Normal  Created    5m    kubelet            Created container my-container
  Normal  Started    5m    kubelet            Started container my-container`,
  },
 {
    category: 'Configuration',
    subcategory: 'Field Selection',
    command: 'kubectl get --field-selector',
    description: 'Filter resources using field selectors',
    example: 'kubectl get pods --field-selector status.phase=Running',
    versionIntroduced: '1.0',
    difficultyLevel: 'intermediate',
    tags: 'field-selector,filter,get',
    flags: '--field-selector',
    output: `NAME                     READY   STATUS    RESTARTS   AGE
nginx-6b6c597d57-abcde   1/1     Running   0          5d
web-7890123456-fghij     1/1     Running   0          2d`,
  },
  {
    category: 'Configuration',
    subcategory: 'Label Selection',
    command: 'kubectl get --selector',
    description: 'Filter resources using label selectors',
    example: 'kubectl get pods -l app=nginx,version=1.0',
    versionIntroduced: '1.0',
    difficultyLevel: 'beginner',
    tags: 'selector,filter,labels',
    flags: '-l, --selector',
    output: `NAME                     READY   STATUS    RESTARTS   AGE
nginx-6b6c597d57-abcde   1/1     Running   0          5d`,
  },
  {
    category: 'Configuration',
    subcategory: 'Output Formatting',
    command: 'kubectl get -o jsonpath',
    description: 'Custom output using JSONPath',
    example: 'kubectl get pods -o jsonpath=\'{.items[*].metadata.name}\'',
    versionIntroduced: '1.0',
    difficultyLevel: 'advanced',
    tags: 'jsonpath,output,format',
    flags: '-o',
    output: `nginx-6b6c597d57-abcde web-7890123456-fghij`,
  },
  {
    category: 'Configuration',
    subcategory: 'Output Formatting',
    command: 'kubectl get -o custom-columns',
    description: 'Custom tabular output',
    example: 'kubectl get pods -o custom-columns=NAME:.metadata.name,STATUS:.status.phase',
    versionIntroduced: '1.0',
    difficultyLevel: 'advanced',
    tags: 'custom-columns,output,format',
    flags: '-o',
    output: `NAME                     STATUS
nginx-6b6c597d57-abcde   Running
web-7890123456-fghij     Running`,
  },
  {
    category: 'Configuration',
    subcategory: 'Server-Side Apply',
    command: 'kubectl apply --server-side',
    description: 'Apply resources using server-side apply',
    example: 'kubectl apply --server-side -f my-resource.yaml',
    versionIntroduced: '1.16',
    difficultyLevel: 'advanced',
    tags: 'apply,server-side,managed-fields',
    flags: '--server-side, --field-manager',
    output: `deployment.apps/nginx serverside-applied`,
  },
  {
    category: 'Configuration',
    subcategory: 'Dry Run',
    command: 'kubectl apply --dry-run',
    description: 'Preview apply without making changes',
    example: 'kubectl apply --dry-run=server -f my-resource.yaml',
    versionIntroduced: '1.0',
    difficultyLevel: 'intermediate',
    tags: 'dry-run,preview,test',
    flags: '--dry-run=client, --dry-run=server',
    output: `deployment.apps/nginx configured (server dry run)`,
  },
  {
    category: 'Configuration',
    subcategory: 'Diff',
    command: 'kubectl diff',
    description: 'Diff file with live configuration',
    example: 'kubectl diff -f my-resource.yaml',
    versionIntroduced: '1.13',
    difficultyLevel: 'intermediate',
    tags: 'diff,compare,changes',
    output: `diff -u -N /tmp/LIVE-123456789 /tmp/MERGED-123456789
--- /tmp/LIVE-123456789 2024-01-01 10:00:00.000000000 +0000
+++ /tmp/MERGED-123456789       2024-01-01 10:00:00.000000000 +0000
@@ -6,7 +6,7 @@
     app: nginx
 spec:
   replicas: 1
-  replicas: 3
   selector:
     matchLabels:
       app: nginx`,
  },
  {
    category: 'Security & RBAC',
    subcategory: 'Authorization',
    command: 'kubectl auth can-i',
    description: 'Check permissions for current user',
    example: 'kubectl auth can-i create pods --namespace=default',
    versionIntroduced: '1.8',
    difficultyLevel: 'advanced',
    tags: 'auth,permissions,rbac',
    flags: '--list, --as, --as-group, --namespace',
    output: `yes`,
  },
  {
    category: 'Security & RBAC',
    subcategory: 'Authorization',
    command: 'kubectl auth reconcile',
    description: 'Reconcile manifests by creating or updating RBAC rules',
    example: 'kubectl auth reconcile -f rbac.yaml',
    versionIntroduced: '1.14',
    difficultyLevel: 'advanced',
    tags: 'auth,reconcile,rbac',
    output: `clusterrole.rbac.authorization.k8s.io/my-role reconciled
clusterrolebinding.rbac.authorization.k8s.io/my-binding reconciled`,
  },
  {
    category: 'Configuration',
    subcategory: 'Service Account Tokens',
    command: 'kubectl create serviceaccount token',
    description: 'Create a service account token',
    example: 'kubectl create serviceaccount my-sa-token --from-service-account=my-sa',
    versionIntroduced: '1.24',
    difficultyLevel: 'advanced',
    tags: 'serviceaccount,token,authentication',
    output: `serviceaccount/my-sa-token created`,
  },
  {
    category: 'Security & RBAC',
    subcategory: 'Role Creation',
    command: 'kubectl create clusterrole',
    description: 'Create a cluster role with aggregation rules',
    example: 'kubectl create clusterrole my-role --verb=get,list --resource=pods --aggregation-rule="rbac.example.com/aggregate-to-admin=true"',
    versionIntroduced: '1.8',
    difficultyLevel: 'advanced',
    tags: 'clusterrole,rbac,permissions',
    flags: '--verb, --resource, --aggregation-rule',
    output: `clusterrole.rbac.authorization.k8s.io/my-role created`,
  },
  {
    category: 'Security & RBAC',
    subcategory: 'Role Binding',
    command: 'kubectl create rolebinding',
    description: 'Create role binding with multiple subjects',
    example: 'kubectl create rolebinding my-binding --clusterrole=my-role --user=user1 --group=group1 --serviceaccount=default:sa1',
    versionIntroduced: '1.6',
    difficultyLevel: 'advanced',
    tags: 'rolebinding,rbac,permissions',
    flags: '--clusterrole, --user, --group, --serviceaccount',
    output: `rolebinding.rbac.authorization.k8s.io/my-binding created`,
  },
  {
    category: 'Storage',
    subcategory: 'Persistent Volumes',
    command: 'kubectl get pv',
    description: 'Get persistent volumes with capacity sorting',
    example: 'kubectl get pv --sort-by=.spec.capacity.storage',
    versionIntroduced: '1.0',
    difficultyLevel: 'intermediate',
    tags: 'pv,storage,capacity',
    flags: '--sort-by',
    output: `NAME      CAPACITY   ACCESS MODES   RECLAIM POLICY   STATUS   CLAIM             STORAGECLASS   REASON   AGE
pv0001    10Gi       RWO            Retain           Bound    default/my-pvc    standard                30d
pv0002    100Gi      RWX            Retain           Available                  nfs                     5d`,
  },
  {
    category: 'Storage',
    subcategory: 'Persistent Volume Claims',
    command: 'kubectl get pvc',
    description: 'Get PVCs with status filtering',
    example: 'kubectl get pvc --field-selector=status.phase=Bound',
    versionIntroduced: '1.0',
    difficultyLevel: 'intermediate',
    tags: 'pvc,storage,status',
    flags: '--field-selector',
    output: `NAME      STATUS   VOLUME   CAPACITY   ACCESS MODES   STORAGECLASS   AGE
my-pvc    Bound    pv0001   10Gi       RWO            standard       30d`,
  },
  {
    category: 'Storage',
    subcategory: 'Volume Snapshots',
    command: 'kubectl get volumesnapshot',
    description: 'List volume snapshots',
    example: 'kubectl get volumesnapshot -A',
    versionIntroduced: '1.17',
    difficultyLevel: 'advanced',
    tags: 'volumesnapshot,storage,backup',
    output: `NAMESPACE   NAME               READYTOUSE   SOURCEPVC   RESTORESIZE   SNAPSHOTCLASS    AGE
default     mysql-snapshot     true         mysql-pvc   100Gi         csi-hostpath-snapclass   5d`,
  },
  {
    category: 'Storage',
    subcategory: 'Storage Classes',
    command: 'kubectl get storageclass',
    description: 'List storage classes',
    example: 'kubectl get storageclass --show-labels',
    versionIntroduced: '1.6',
    difficultyLevel: 'intermediate',
    tags: 'storageclass,storage,provisioning',
    flags: '--show-labels',
    output: `NAME                 PROVISIONER             RECLAIMPOLICY   VOLUMEBINDINGMODE      ALLOWVOLUMEEXPANSION   AGE
standard (default)   k8s.io/minikube-hostpath   Delete          Immediate              false                  30d`,
  },
  {
    category: 'Storage',
    subcategory: 'Volume Expansion',
    command: 'kubectl patch pvc',
    description: 'Patch PVC to expand volume size',
    example: 'kubectl patch pvc my-pvc -p \'{"spec":{"resources":{"requests":{"storage":"10Gi"}}}}\'',
    versionIntroduced: '1.11',
    difficultyLevel: 'advanced',
    tags: 'pvc,expand,resize',
    output: `persistentvolumeclaim/my-pvc patched`,
  },
  {
    category: 'Services & Networking',
    subcategory: 'Network Policies',
    command: 'kubectl create networkpolicy',
    description: 'Create network policy with ingress/egress rules',
    example: 'kubectl create networkpolicy my-policy --allow-from-namespace=my-ns --allow-port=80',
    versionIntroduced: '1.7',
    difficultyLevel: 'advanced',
    tags: 'networkpolicy,networking,security',
    flags: '--allow-from-namespace, --allow-port',
    output: `networkpolicy.networking.k8s.io/my-policy created`,
  },
  {
    category: 'Services & Networking',
    subcategory: 'Ingress Class',
    command: 'kubectl get ingressclass',
    description: 'List ingress classes',
    example: 'kubectl get ingressclass',
    versionIntroduced: '1.18',
    difficultyLevel: 'advanced',
    tags: 'ingressclass,networking,loadbalancer',
    output: `NAME    CONTROLLER             PARAMETERS   AGE
nginx   k8s.io/ingress-nginx   <none>       30d`,
  },
  {
    category: 'Services & Networking',
    subcategory: 'Endpoint Slices',
    command: 'kubectl get endpointslices',
    description: 'Get endpoint slices with filtering',
    example: 'kubectl get endpointslices --field-selector=metadata.labels.endpointslice\\.kubernetes\\.io/managed-by=nginx-ingress-controller',
    versionIntroduced: '1.17',
    difficultyLevel: 'advanced',
    tags: 'endpointslices,networking,endpoints',
    flags: '--field-selector',
    output: `NAME             ADDRESSTYPE   PORTS   ENDPOINTS     AGE
nginx-abcde      IPv4          80      10.244.0.5    5d`,
  },
  {
    category: 'Deployments',
    subcategory: 'Rollout Management',
    command: 'kubectl rollout pause',
    description: 'Pause a deployment rollout',
    example: 'kubectl rollout pause deployment/my-app',
    versionIntroduced: '1.8',
    difficultyLevel: 'intermediate',
    tags: 'rollout,pause,deployment',
    output: `deployment.apps/my-app paused`,
  },
  {
    category: 'Deployments',
    subcategory: 'Rollout Management',
    command: 'kubectl rollout resume',
    description: 'Resume a paused deployment',
    example: 'kubectl rollout resume deployment/my-app',
    versionIntroduced: '1.8',
    difficultyLevel: 'intermediate',
    tags: 'rollout,resume,deployment',
    output: `deployment.apps/my-app resumed`,
  },
  {
    category: 'Deployments',
    subcategory: 'Rollout Management',
    command: 'kubectl rollout restart',
    description: 'Restart a deployment',
    example: 'kubectl rollout restart deployment/my-app',
    versionIntroduced: '1.15',
    difficultyLevel: 'intermediate',
    tags: 'rollout,restart,deployment',
    output: `deployment.apps/my-app restarted`,
  },
  {
    category: 'Deployments',
    subcategory: 'Environment Variables',
    command: 'kubectl set env',
    description: 'Update environment variables on objects',
    example: 'kubectl set env deployment/my-app ENV=production --from=configmap/my-config',
    versionIntroduced: '1.2',
    difficultyLevel: 'intermediate',
    tags: 'env,environment,deployment',
    flags: '--from, --prefix',
    output: `deployment.apps/my-app env updated`,
  },
  {
    category: 'Deployments',
    subcategory: 'Resource Management',
    command: 'kubectl set resources',
    description: 'Update resource requests/limits on objects',
    example: 'kubectl set resources deployment/my-app -c=my-container --limits=cpu=200m,memory=512Mi --requests=cpu=100m,memory=256Mi',
    versionIntroduced: '1.2',
    difficultyLevel: 'intermediate',
    tags: 'resources,limits,requests',
    flags: '--limits, --requests, -c',
    output: `deployment.apps/my-app resource requirements updated`,
  },
  {
    category: 'Deployments',
    subcategory: 'Autoscaling',
    command: 'kubectl autoscale',
    description: 'Auto-scale a deployment with custom metrics',
    example: 'kubectl autoscale deployment my-app --cpu-percent=50 --min=2 --max=10 --namespace=default',
    versionIntroduced: '1.2',
    difficultyLevel: 'advanced',
    tags: 'autoscale,hpa,scaling',
    flags: '--cpu-percent, --min, --max, --memory-percent',
    output: `horizontalpodautoscaler.autoscaling/my-app autoscaled`,
  },
  {
    category: 'Advanced Workloads',
    subcategory: 'Jobs',
    command: 'kubectl create job',
    description: 'Create a job with completion and parallelism',
    example: 'kubectl create job my-job --image=busybox -- echo "Hello World"',
    versionIntroduced: '1.2',
    difficultyLevel: 'intermediate',
    tags: 'job,workload,batch',
    flags: '--from, --dry-run',
    output: `job.batch/my-job created`,
  },
  {
    category: 'Advanced Workloads',
    subcategory: 'CronJobs',
    command: 'kubectl create cronjob',
    description: 'Create a cron job with schedule',
    example: 'kubectl create cronjob my-cronjob --image=busybox --schedule="0 */4 * * *" -- echo "Scheduled job"',
    versionIntroduced: '1.8',
    difficultyLevel: 'intermediate',
    tags: 'cronjob,scheduled,workload',
    flags: '--schedule, --restart-policy',
    output: `cronjob.batch/my-cronjob created`,
  },
  {
    category: 'Advanced Workloads',
    subcategory: 'CronJobs',
    command: 'kubectl patch cronjob',
    description: 'Suspend or resume a cron job',
    example: 'kubectl patch cronjob my-cronjob -p \'{"spec":{"suspend":true}}\'',
    versionIntroduced: '1.8',
    difficultyLevel: 'advanced',
    tags: 'cronjob,suspend,resume',
    output: `cronjob.batch/my-cronjob patched`,
  }
];
