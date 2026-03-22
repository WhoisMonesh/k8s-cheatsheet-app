import { K8sCommand } from "../../types";

export const networkingCommandsData: Omit<K8sCommand, "id">[] = [
  // Services
  {
    category: "Networking",
    subcategory: "Services",
    command:
      "kubectl expose deployment my-dep --type=NodePort --port=80 --target-port=8080",
    description: "Expose deployment as NodePort service",
    example:
      "kubectl expose deployment my-dep --type=NodePort --port=80 --target-port=8080",
    versionIntroduced: "1.0",
    difficultyLevel: "beginner",
    tags: "service,expose,nodeport",
    flags: "--type --port --target-port",
    output: "service/my-dep exposed",
  },
  {
    category: "Networking",
    subcategory: "Services",
    command: "kubectl get svc --all-namespaces -o wide",
    description: "List all services with wide output",
    example: "kubectl get svc --all-namespaces -o wide",
    versionIntroduced: "1.0",
    difficultyLevel: "beginner",
    tags: "service,list,wide",
    flags: "--all-namespaces -o wide",
    output: `NAMESPACE     NAME         TYPE        CLUSTER-IP       EXTERNAL-IP   PORT(S)                  AGE   SELECTOR
default       kubernetes   ClusterIP   10.96.0.1        <none>        443/TCP                  30d   <none>
default       nginx-svc    NodePort    10.100.200.50    <none>        80:31234/TCP             5d    app=nginx
kube-system   kube-dns     ClusterIP   10.96.0.10       <none>        53/UDP,53/TCP,9153/TCP   30d   k8s-app=kube-dns`,
  },
  {
    category: "Networking",
    subcategory: "Services",
    command: "kubectl get svc -A",
    description: "List all services in all namespaces",
    example: "kubectl get svc -A",
    versionIntroduced: "1.0",
    difficultyLevel: "beginner",
    tags: "service,list,all-namespaces",
    flags: "-A",
    output: `NAMESPACE     NAME         TYPE        CLUSTER-IP       EXTERNAL-IP   PORT(S)                  AGE
default       kubernetes   ClusterIP   10.96.0.1        <none>        443/TCP                  30d
default       nginx-svc    NodePort    10.100.200.50    <none>        80:31234/TCP             5d
kube-system   kube-dns     ClusterIP   10.96.0.10       <none>        53/UDP,53/TCP,9153/TCP   30d`,
  },
  {
    category: "Networking",
    subcategory: "Services",
    command: "kubectl describe svc -A",
    description: "Describe all services in all namespaces",
    example: "kubectl describe svc -A",
    versionIntroduced: "1.0",
    difficultyLevel: "intermediate",
    tags: "service,describe,all-namespaces",
    flags: "-A",
    output: `Name:              kubernetes
Namespace:         default
...
Name:              nginx-svc
Namespace:         default
...`,
  },
  {
    category: "Networking",
    subcategory: "Services",
    command: "kubectl delete svc --all -A",
    description: "Delete all services in all namespaces (DANGEROUS)",
    example: "kubectl delete svc --all -A",
    versionIntroduced: "1.0",
    difficultyLevel: "expert",
    tags: "service,delete,all,all-namespaces",
    flags: "--all, -A",
    output: `service "nginx-svc" deleted
service "other-svc" deleted`,
  },
  {
    category: "Networking",
    subcategory: "Services",
    command:
      "kubectl run tmp-shell --rm -i --tty --image nicolaka/netshoot -- /bin/bash",
    description: "Run a temporary pod for network debugging (netshoot)",
    example:
      "kubectl run tmp-shell --rm -i --tty --image nicolaka/netshoot -- /bin/bash",
    versionIntroduced: "1.0",
    difficultyLevel: "intermediate",
    tags: "debug,network,netshoot",
    flags: "--rm -i --tty",
    output: `If you don't see a command prompt, try pressing enter.
bash-5.0# `,
  },

  // Ingress
  {
    category: "Networking",
    subcategory: "Ingress",
    command: "kubectl get ingress --all-namespaces",
    description: "List all ingress resources",
    example: "kubectl get ingress --all-namespaces",
    versionIntroduced: "1.1",
    difficultyLevel: "beginner",
    tags: "ingress,list",
    flags: "--all-namespaces",
    output: `NAMESPACE   NAME          CLASS   HOSTS              ADDRESS          PORTS     AGE
default     web-ingress   nginx   example.com        192.168.100.50   80, 443   5d
staging     api-ingress   nginx   api.staging.com    192.168.100.51   80        2d`,
  },
  {
    category: "Networking",
    subcategory: "Ingress",
    command: "kubectl get ingress -A",
    description: "List all ingress resources in all namespaces",
    example: "kubectl get ingress -A",
    versionIntroduced: "1.1",
    difficultyLevel: "beginner",
    tags: "ingress,list,all-namespaces",
    flags: "-A",
    output: `NAMESPACE   NAME          CLASS   HOSTS              ADDRESS          PORTS     AGE
default     web-ingress   nginx   example.com        192.168.100.50   80, 443   5d
staging     api-ingress   nginx   api.staging.com    192.168.100.51   80        2d`,
  },
  {
    category: "Networking",
    subcategory: "Ingress",
    command: "kubectl describe ingress -A",
    description: "Describe all ingress resources in all namespaces",
    example: "kubectl describe ingress -A",
    versionIntroduced: "1.1",
    difficultyLevel: "intermediate",
    tags: "ingress,describe,all-namespaces",
    flags: "-A",
    output: `Name:             web-ingress
Namespace:        default
...
Name:             api-ingress
Namespace:        staging
...`,
  },
  {
    category: "Networking",
    subcategory: "Ingress",
    command: "kubectl delete ingress --all -A",
    description: "Delete all ingress resources in all namespaces (DANGEROUS)",
    example: "kubectl delete ingress --all -A",
    versionIntroduced: "1.1",
    difficultyLevel: "expert",
    tags: "ingress,delete,all,all-namespaces",
    flags: "--all, -A",
    output: `ingress.networking.k8s.io "web-ingress" deleted
ingress.networking.k8s.io "api-ingress" deleted`,
  },
  {
    category: "Networking",
    subcategory: "Ingress",
    command:
      'kubectl create ingress simple --rule="foo.com/bar=svc1:8080,tls=my-cert"',
    description: "Create a simple ingress with TLS",
    example:
      'kubectl create ingress simple --rule="foo.com/bar=svc1:8080,tls=my-cert"',
    versionIntroduced: "1.19",
    difficultyLevel: "intermediate",
    tags: "ingress,create,tls",
    flags: "--rule",
    output: "ingress.networking.k8s.io/simple created",
  },

  // DNS Debugging
  {
    category: "Networking",
    subcategory: "DNS",
    command:
      "kubectl run -it --rm --restart=Never busybox --image=busybox:1.28 -- nslookup kubernetes.default",
    description: "Test DNS resolution from a pod",
    example:
      "kubectl run -it --rm --restart=Never busybox --image=busybox:1.28 -- nslookup kubernetes.default",
    versionIntroduced: "1.0",
    difficultyLevel: "intermediate",
    tags: "dns,debug,nslookup",
    flags: "--restart --image",
    output: `Server:    10.96.0.10
Address 1: 10.96.0.10 kube-dns.kube-system.svc.cluster.local

Name:      kubernetes.default
Address 1: 10.96.0.1 kubernetes.default.svc.cluster.local
pod "busybox" deleted`,
  },

  // Service Expose variations
  {
    category: "Networking",
    subcategory: "Services",
    command:
      "kubectl expose deployment my-dep --type=LoadBalancer --name=my-service",
    description: "Expose a deployment as a LoadBalancer service",
    example:
      "kubectl expose deployment my-dep --type=LoadBalancer --name=my-service",
    versionIntroduced: "1.0",
    difficultyLevel: "beginner",
    tags: "service,expose,loadbalancer",
    flags: "--type --name",
    output: "service/my-service exposed",
  },

  // Ingress Rules
  {
    category: "Networking",
    subcategory: "Ingress",
    command: 'kubectl create ingress my-ingress --rule="host.com/path=svc:80"',
    description: "Create an Ingress with a host and path rule",
    example: 'kubectl create ingress my-ingress --rule="host.com/path=svc:80"',
    versionIntroduced: "1.19",
    difficultyLevel: "intermediate",
    tags: "ingress,create,rule",
    flags: "--rule",
    output: "ingress.networking.k8s.io/my-ingress created",
  },

  // Endpoint Checks
  {
    category: "Networking",
    subcategory: "Endpoints",
    command: "kubectl get endpoints my-service",
    description: "Get endpoints for a specific service",
    example: "kubectl get endpoints my-service",
    versionIntroduced: "1.0",
    difficultyLevel: "beginner",
    tags: "endpoints,list",
    flags: "",
    output: `NAME         ENDPOINTS                               AGE
my-service   10.244.0.5:8080,10.244.1.6:8080         5d`,
  },

  // Network Policy Edits
  {
    category: "Networking",
    subcategory: "Network Policy",
    command: "kubectl get networkpolicy -n my-namespace",
    description: "List network policies in a namespace",
    example: "kubectl get networkpolicy -n my-namespace",
    versionIntroduced: "1.7",
    difficultyLevel: "intermediate",
    tags: "netpol,list",
    flags: "-n",
    output: `NAME             POD-SELECTOR   AGE
default-deny     <none>         5d
allow-frontend   app=frontend   2d`,
  },
  {
    category: "Networking",
    subcategory: "Services",
    command: "kubectl get svc",
    description: "List services in the current namespace",
    example: "kubectl get svc",
    versionIntroduced: "1.0",
    difficultyLevel: "beginner",
    tags: "service,list",
    output: `NAME         TYPE        CLUSTER-IP       EXTERNAL-IP   PORT(S)   AGE
kubernetes   ClusterIP   10.96.0.1        <none>        443/TCP   30d`,
  },
  {
    category: "Networking",
    subcategory: "Ingress",
    command: "kubectl get ingress",
    description: "List ingress resources in the current namespace",
    example: "kubectl get ingress",
    versionIntroduced: "1.1",
    difficultyLevel: "beginner",
    tags: "ingress,list",
    output: `NAME          CLASS   HOSTS         ADDRESS          PORTS     AGE
web-ingress   nginx   example.com   192.168.100.50   80, 443   5d`,
  },

  // --- Missing Variations ---
  {
    category: "Networking",
    subcategory: "Network Policy",
    command: "kubectl get networkpolicies",
    description: "List NetworkPolicies in the current namespace",
    example: "kubectl get networkpolicies",
    versionIntroduced: "1.7",
    difficultyLevel: "beginner",
    tags: "netpol,list",
    output: `NAME             POD-SELECTOR   AGE
default-deny     <none>         5d`,
  },
  {
    category: "Networking",
    subcategory: "Network Policy",
    command: "kubectl get networkpolicies --all-namespaces",
    description: "List NetworkPolicies across all namespaces",
    example: "kubectl get networkpolicies --all-namespaces",
    versionIntroduced: "1.7",
    difficultyLevel: "beginner",
    tags: "netpol,list,all-namespaces",
    flags: "--all-namespaces",
    output: `NAMESPACE   NAME             POD-SELECTOR   AGE
default     default-deny     <none>         5d`,
  },
  {
    category: "Networking",
    subcategory: "Network Policy",
    command: "kubectl get networkpolicies -A",
    description: "List NetworkPolicies in all namespaces",
    example: "kubectl get networkpolicies -A",
    versionIntroduced: "1.7",
    difficultyLevel: "beginner",
    tags: "netpol,list,all-namespaces",
    flags: "-A",
    output: `NAMESPACE   NAME             POD-SELECTOR   AGE
default     default-deny     <none>         5d`,
  },
  {
    category: "Networking",
    subcategory: "Network Policy",
    command: "kubectl describe networkpolicies -A",
    description: "Describe all network policies in all namespaces",
    example: "kubectl describe networkpolicies -A",
    versionIntroduced: "1.7",
    difficultyLevel: "intermediate",
    tags: "netpol,describe,all-namespaces",
    flags: "-A",
    output: `Name:         default-deny
Namespace:    default
...`,
  },
  {
    category: "Networking",
    subcategory: "Network Policy",
    command: "kubectl delete networkpolicies --all -A",
    description: "Delete all network policies in all namespaces (DANGEROUS)",
    example: "kubectl delete networkpolicies --all -A",
    versionIntroduced: "1.7",
    difficultyLevel: "expert",
    tags: "netpol,delete,all,all-namespaces",
    flags: "--all, -A",
    output: `networkpolicy.networking.k8s.io "default-deny" deleted`,
  },
  {
    category: "Networking",
    subcategory: "Endpoints",
    command: "kubectl get endpoints",
    description: "List Endpoints in the current namespace",
    example: "kubectl get endpoints",
    versionIntroduced: "1.0",
    difficultyLevel: "beginner",
    tags: "endpoints,list",
    output: `NAME         ENDPOINTS                               AGE
my-service   10.244.0.5:8080,10.244.1.6:8080         5d`,
  },
  {
    category: "Networking",
    subcategory: "Endpoints",
    command: "kubectl get endpoints --all-namespaces",
    description: "List Endpoints across all namespaces",
    example: "kubectl get endpoints --all-namespaces",
    versionIntroduced: "1.0",
    difficultyLevel: "beginner",
    tags: "endpoints,list,all-namespaces",
    flags: "--all-namespaces",
    output: `NAMESPACE     NAME         ENDPOINTS                               AGE
kube-system   kube-dns     10.244.0.3:53,10.244.0.4:53             30d`,
  },
  {
    category: "Networking",
    subcategory: "Endpoints",
    command: "kubectl get endpoints -A",
    description: "List Endpoints in all namespaces",
    example: "kubectl get endpoints -A",
    versionIntroduced: "1.0",
    difficultyLevel: "beginner",
    tags: "endpoints,list,all-namespaces",
    flags: "-A",
    output: `NAMESPACE     NAME         ENDPOINTS                               AGE
kube-system   kube-dns     10.244.0.3:53,10.244.0.4:53             30d`,
  },
  {
    category: "Networking",
    subcategory: "Endpoints",
    command: "kubectl describe endpoints -A",
    description: "Describe all endpoints in all namespaces",
    example: "kubectl describe endpoints -A",
    versionIntroduced: "1.0",
    difficultyLevel: "intermediate",
    tags: "endpoints,describe,all-namespaces",
    flags: "-A",
    output: `Name:         kube-dns
Namespace:    kube-system
...`,
  },
  {
    category: "Networking",
    subcategory: "Endpoints",
    command: "kubectl delete endpoints --all -A",
    description: "Delete all endpoints in all namespaces (DANGEROUS)",
    example: "kubectl delete endpoints --all -A",
    versionIntroduced: "1.0",
    difficultyLevel: "expert",
    tags: "endpoints,delete,all,all-namespaces",
    flags: "--all, -A",
    output: `endpoints "my-service" deleted
endpoints "kube-dns" deleted`,
  },

  // Modern Networking Resources
  {
    category: "Networking",
    subcategory: "Ingress",
    command: "kubectl get ingressclasses",
    description: "List Ingress Classes",
    example: "kubectl get ingressclasses",
    versionIntroduced: "1.18",
    difficultyLevel: "intermediate",
    tags: "ingress,ingressclass,list",
    output: `NAME    CONTROLLER             PARAMETERS   AGE
nginx   k8s.io/ingress-nginx   <none>       30d`,
  },
  {
    category: "Networking",
    subcategory: "Endpoints",
    command: "kubectl get endpointslices",
    description: "List EndpointSlices (scalable endpoints)",
    example: "kubectl get endpointslices",
    versionIntroduced: "1.16",
    difficultyLevel: "expert",
    tags: "endpointslice,list,networking",
    output: `NAME                 ADDRESSTYPE   PORTS   ENDPOINTS                            AGE
my-service-abcde     IPv4          8080    10.244.0.5,10.244.1.6                5d`,
  },
  {
    category: "Networking",
    subcategory: "Endpoints",
    command: "kubectl get endpointslices --all-namespaces",
    description: "List EndpointSlices across all namespaces",
    example: "kubectl get endpointslices --all-namespaces",
    versionIntroduced: "1.16",
    difficultyLevel: "expert",
    tags: "endpointslice,list,networking,all-namespaces",
    flags: "--all-namespaces",
    output: `NAMESPACE   NAME                 ADDRESSTYPE   PORTS   ENDPOINTS                            AGE
default     my-service-abcde     IPv4          8080    10.244.0.5,10.244.1.6                5d`,
  },
  {
    category: "Networking",
    subcategory: "Endpoints",
    command: "kubectl get endpointslices -A",
    description: "List EndpointSlices in all namespaces",
    example: "kubectl get endpointslices -A",
    versionIntroduced: "1.16",
    difficultyLevel: "expert",
    tags: "endpointslice,list,networking,all-namespaces",
    flags: "-A",
    output: `NAMESPACE   NAME                 ADDRESSTYPE   PORTS   ENDPOINTS                            AGE
default     my-service-abcde     IPv4          8080    10.244.0.5,10.244.1.6                5d`,
  },
  {
    category: "Networking",
    subcategory: "Endpoints",
    command: "kubectl describe endpointslices -A",
    description: "Describe all EndpointSlices in all namespaces",
    example: "kubectl describe endpointslices -A",
    versionIntroduced: "1.16",
    difficultyLevel: "expert",
    tags: "endpointslice,describe,networking,all-namespaces",
    flags: "-A",
    output: `Name:         my-service-abcde
Namespace:    default
...`,
  },
  {
    category: "Networking",
    subcategory: "Endpoints",
    command: "kubectl delete endpointslices --all -A",
    description: "Delete all endpoint slices in all namespaces (DANGEROUS)",
    example: "kubectl delete endpointslices --all -A",
    versionIntroduced: "1.16",
    difficultyLevel: "expert",
    tags: "endpointslice,delete,networking,all,all-namespaces",
    flags: "--all, -A",
    output: `endpointslice.discovery.k8s.io "my-service-abcde" deleted`,
  },

  // Service Creation
  {
    category: "Networking",
    subcategory: "Services",
    command: "kubectl create service clusterip my-cs --tcp=5678:8080",
    description: "Create a ClusterIP service",
    example: "kubectl create service clusterip my-cs --tcp=5678:8080",
    versionIntroduced: "1.0",
    difficultyLevel: "intermediate",
    tags: "service,create,clusterip",
    flags: "--tcp",
    output: "service/my-cs created",
  },
];
