export const clusterManagementCommandsData = [
  // Node Management
  {
    category: "Cluster Management",
    subcategory: "Nodes",
    command: "kubectl cordon my-node",
    description: "Mark node as unschedulable",
    example: "kubectl cordon my-node",
    versionIntroduced: "1.0",
    difficultyLevel: "intermediate",
    tags: "node,cordon,maintenance",
    flags: "",
    output: "node/my-node cordoned",
  },
  {
    category: "Cluster Management",
    subcategory: "Nodes",
    command: "kubectl drain my-node --ignore-daemonsets --delete-emptydir-data",
    description: "Drain node for maintenance",
    example: "kubectl drain my-node --ignore-daemonsets --delete-emptydir-data",
    versionIntroduced: "1.0",
    difficultyLevel: "advanced",
    tags: "node,drain,maintenance",
    flags: "--ignore-daemonsets",
    output: `node/my-node cordoned
WARNING: ignoring DaemonSet-managed Pods: kube-system/kube-proxy-abcde, kube-system/weave-net-fghij
evicting pod default/nginx-pod-12345
evicting pod default/db-pod-67890
pod/nginx-pod-12345 evicted
pod/db-pod-67890 evicted
node/my-node drained`,
  },
  {
    category: "Cluster Management",
    subcategory: "Nodes",
    command: "kubectl taint nodes my-node key=value:NoSchedule",
    description: "Taint a node",
    example: "kubectl taint nodes my-node key=value:NoSchedule",
    versionIntroduced: "1.6",
    difficultyLevel: "intermediate",
    tags: "node,taint",
    flags: "",
    output: "node/my-node tainted",
  },

  // Cluster Info
  {
    category: "Cluster Management",
    subcategory: "Info",
    command: "kubectl cluster-info dump",
    description: "Dump relevant cluster info for debugging",
    example: "kubectl cluster-info dump",
    versionIntroduced: "1.0",
    difficultyLevel: "advanced",
    tags: "cluster-info,dump,debug",
    flags: "",
    output: `(Cluster info dump output is extensive, saving to a file is recommended)
Checking for 'admin' user...
User 'admin' found.
Dumping cluster info...`,
  },
  {
    category: "Cluster Management",
    subcategory: "Info",
    command: "kubectl api-resources --verbs=list,get",
    description: "List all resources that support list and get verbs",
    example: "kubectl api-resources --verbs=list,get",
    versionIntroduced: "1.11",
    difficultyLevel: "intermediate",
    tags: "api-resources,discovery",
    flags: "--verbs",
    output: `NAME                              SHORTNAMES   APIVERSION                             NAMESPACED   KIND
configmaps                        cm           v1                                     true         ConfigMap
endpoints                         ep           v1                                     true         Endpoints
events                            ev           v1                                     true         Event
namespaces                        ns           v1                                     false        Namespace
nodes                             no           v1                                     false        Node
pods                              po           v1                                     true         Pod
services                          svc          v1                                     true         Service
daemonsets                        ds           apps/v1                                true         DaemonSet
deployments                       deploy       apps/v1                                true         Deployment
replicasets                       rs           apps/v1                                true         ReplicaSet
statefulsets                      sts          apps/v1                                true         StatefulSet`,
  },

  // Certificates (kubeadm)
  {
    category: "Cluster Management",
    subcategory: "Certificates",
    command: "kubeadm certs check-expiration",
    description: "Check certificate expiration (kubeadm)",
    example: "kubeadm certs check-expiration",
    versionIntroduced: "1.15",
    difficultyLevel: "advanced",
    tags: "kubeadm,certs,expiration",
    flags: "",
    output: `CERTIFICATE                EXPIRES                  RESIDUAL TIME   CERTIFICATE AUTHORITY   EXTERNALLY MANAGED
admin.conf                 May 25, 2025 10:00 UTC   364d            ca                      no      
apiserver                  May 25, 2025 10:00 UTC   364d            ca                      no      
apiserver-kubelet-client   May 25, 2025 10:00 UTC   364d            ca                      no      
controller-manager.conf    May 25, 2025 10:00 UTC   364d            ca                      no      
front-proxy-client         May 25, 2025 10:00 UTC   364d            front-proxy-ca          no      
scheduler.conf             May 25, 2025 10:00 UTC   364d            ca                      no`,
  },
  {
    category: "Cluster Management",
    subcategory: "Certificates",
    command: "kubeadm certs renew all",
    description: "Renew all certificates (kubeadm)",
    example: "kubeadm certs renew all",
    versionIntroduced: "1.15",
    difficultyLevel: "expert",
    tags: "kubeadm,certs,renew",
    flags: "",
    output: `[renew] Reading configuration from the cluster...
[renew] FYI: You can look at this config file with 'kubectl -n kube-system get cm kubeadm-config -o yaml'

certificate embedded in the kubeconfig file for the admin to use and for kubeadm itself renewed
certificate for serving the Kubernetes API renewed
certificate the apiserver uses to access etcd renewed
certificate for the API server to connect to kubelet renewed
certificate embedded in the kubeconfig file for the controller manager to use renewed
certificate for the front proxy client renewed
certificate embedded in the kubeconfig file for the scheduler manager to use renewed

Done renewing certificates. You must restart the kube-apiserver, kube-controller-manager, kube-scheduler and etcd, so the certificate changes take effect.`,
  },

  // Generated Node Taints
  {
    category: "Cluster Management",
    subcategory: "Nodes",
    command: "kubectl taint nodes node1 key1=value1:NoSchedule",
    description: "Taint a node with key=value and NoSchedule effect",
    example: "kubectl taint nodes node1 key1=value1:NoSchedule",
    versionIntroduced: "1.6",
    difficultyLevel: "intermediate",
    tags: "node,taint,noschedule",
    flags: "",
    output: "node/node1 tainted",
  },
  {
    category: "Cluster Management",
    subcategory: "Nodes",
    command: "kubectl taint nodes node1 key1=value1:NoExecute",
    description: "Taint a node with NoExecute to evict existing pods",
    example: "kubectl taint nodes node1 key1=value1:NoExecute",
    versionIntroduced: "1.6",
    difficultyLevel: "advanced",
    tags: "node,taint,noexecute,eviction",
    flags: "",
    output: "node/node1 tainted",
  },
  {
    category: "Cluster Management",
    subcategory: "Nodes",
    command: "kubectl taint nodes node1 key1:NoSchedule-",
    description: "Remove a taint with key1 and NoSchedule effect from a node",
    example: "kubectl taint nodes node1 key1:NoSchedule-",
    versionIntroduced: "1.6",
    difficultyLevel: "intermediate",
    tags: "node,taint,remove",
    flags: "-",
    output: "node/node1 untainted",
  },
  {
    category: "Cluster Management",
    subcategory: "Nodes",
    command: "kubectl taint nodes node1 dedicated=special:PreferNoSchedule",
    description: "Taint a node to prefer not scheduling pods unless necessary",
    example: "kubectl taint nodes node1 dedicated=special:PreferNoSchedule",
    versionIntroduced: "1.6",
    difficultyLevel: "intermediate",
    tags: "node,taint,prefernoschedule",
    flags: "",
    output: "node/node1 tainted",
  },
  {
    category: "Cluster Management",
    subcategory: "Nodes",
    command: "kubectl label nodes node1 disktype=ssd",
    description: "Add a label to a node",
    example: "kubectl label nodes node1 disktype=ssd",
    versionIntroduced: "1.0",
    difficultyLevel: "beginner",
    tags: "node,label,add",
    flags: "",
    output: "node/node1 labeled",
  },
  {
    category: "Cluster Management",
    subcategory: "Nodes",
    command: "kubectl label nodes node1 disktype-",
    description: "Remove a label from a node",
    example: "kubectl label nodes node1 disktype-",
    versionIntroduced: "1.0",
    difficultyLevel: "beginner",
    tags: "node,label,remove",
    flags: "-",
    output: "node/node1 labeled",
  },
  {
    category: "Cluster Management",
    subcategory: "Nodes",
    command: "kubectl label nodes node1 env=prod --overwrite",
    description: "Overwrite an existing label on a node",
    example: "kubectl label nodes node1 env=prod --overwrite",
    versionIntroduced: "1.0",
    difficultyLevel: "intermediate",
    tags: "node,label,overwrite",
    flags: "--overwrite",
    output: "node/node1 labeled",
  },
  {
    category: "Cluster Management",
    subcategory: "Info",
    command: 'kubectl api-versions | grep "networking.k8s.io"',
    description: "Check if networking API group is available",
    example: 'kubectl api-versions | grep "networking.k8s.io"',
    versionIntroduced: "1.0",
    difficultyLevel: "intermediate",
    tags: "api,check,networking",
    flags: "",
    output: "networking.k8s.io/v1",
  },
  {
    category: "Cluster Management",
    subcategory: "Info",
    command: 'kubectl api-versions | grep "batch/v1"',
    description: "Check if Batch V1 API is available",
    example: 'kubectl api-versions | grep "batch/v1"',
    versionIntroduced: "1.0",
    difficultyLevel: "intermediate",
    tags: "api,check,batch",
    flags: "",
    output: "batch/v1",
  },
  {
    category: "Cluster Management",
    subcategory: "Certificates",
    command: "kubectl certificate approve my-csr",
    description: "Approve a Certificate Signing Request (CSR)",
    example: "kubectl certificate approve my-csr",
    versionIntroduced: "1.6",
    difficultyLevel: "advanced",
    tags: "csr,certificate,approve",
    flags: "",
    output: "certificatesigningrequest.certificates.k8s.io/my-csr approved",
  },
  {
    category: "Cluster Management",
    subcategory: "Certificates",
    command: "kubectl certificate deny my-csr",
    description: "Deny a Certificate Signing Request (CSR)",
    example: "kubectl certificate deny my-csr",
    versionIntroduced: "1.6",
    difficultyLevel: "advanced",
    tags: "csr,certificate,deny",
    flags: "",
    output: "certificatesigningrequest.certificates.k8s.io/my-csr denied",
  },
  {
    category: "Cluster Management",
    subcategory: "Certificates",
    command: "kubectl get csr",
    description: "List all Certificate Signing Requests",
    example: "kubectl get csr",
    versionIntroduced: "1.6",
    difficultyLevel: "intermediate",
    tags: "csr,list",
    flags: "",
    output: `NAME        AGE   SIGNERNAME                                    REQUESTOR               REQUESTEDDURATION   CONDITION
my-csr      10m   kubernetes.io/kube-apiserver-client           kubernetes-admin        <none>              Approved,Issued
node-csr    5m    kubernetes.io/kube-apiserver-client-kubelet   system:node:worker-1    <none>              Pending`,
  },

  // --- Missing Variations ---
  {
    category: "Cluster Management",
    subcategory: "Nodes",
    command: "kubectl get nodes -o wide",
    description: "List nodes with extended information (IP, OS, Kernel)",
    example: "kubectl get nodes -o wide",
    versionIntroduced: "1.0",
    difficultyLevel: "beginner",
    tags: "nodes,list,wide",
    flags: "-o wide",
    output: `NAME       STATUS   ROLES           AGE   VERSION   INTERNAL-IP    EXTERNAL-IP   OS-IMAGE             KERNEL-VERSION
node-1     Ready    control-plane   30d   v1.29.0   192.168.1.10   <none>        Ubuntu 22.04.3 LTS   5.15.0-91-generic`,
  },
  {
    category: "Cluster Management",
    subcategory: "Configuration",
    command: "kubectl config view",
    description: "Display the current kubeconfig",
    example: "kubectl config view",
    versionIntroduced: "1.0",
    difficultyLevel: "beginner",
    tags: "config,view",
    output: `apiVersion: v1
clusters:
- cluster:
    server: https://127.0.0.1:6443
  name: kubernetes
contexts:
- context:
    cluster: kubernetes
    user: kubernetes-admin
  name: kubernetes-admin@kubernetes
current-context: kubernetes-admin@kubernetes
kind: Config
preferences: {}
users:
- name: kubernetes-admin
  user:
    client-certificate-data: REDACTED
    client-key-data: REDACTED`,
  },
  {
    category: "Cluster Management",
    subcategory: "Configuration",
    command: "kubectl config get-contexts",
    description: "List available contexts",
    example: "kubectl config get-contexts",
    versionIntroduced: "1.0",
    difficultyLevel: "beginner",
    tags: "config,context,list",
    output: `CURRENT   NAME                          CLUSTER      AUTHINFO           NAMESPACE
*         kubernetes-admin@kubernetes   kubernetes   kubernetes-admin   default
          dev-context                   dev-cluster  dev-user           development`,
  },
  {
    category: "Cluster Management",
    subcategory: "Configuration",
    command: "kubectl config use-context",
    description: "Switch to a different context",
    example: "kubectl config use-context dev-context",
    versionIntroduced: "1.0",
    difficultyLevel: "beginner",
    tags: "config,context,switch",
    output: 'Switched to context "dev-context".',
  },
  {
    category: "Cluster Management",
    subcategory: "Configuration",
    command: "kubectl config set-context --current --namespace",
    description: "Set default namespace for current context",
    example: "kubectl config set-context --current --namespace=dev",
    versionIntroduced: "1.0",
    difficultyLevel: "intermediate",
    tags: "config,context,namespace",
    flags: "--current, --namespace",
    output: 'Context "kubernetes-admin@kubernetes" modified.',
  },
];
