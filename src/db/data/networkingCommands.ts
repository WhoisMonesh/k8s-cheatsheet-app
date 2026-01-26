import { K8sCommand } from '../../types';

export const networkingCommandsData: Omit<K8sCommand, 'id'>[] = [
  // Services
  {
    category: 'Networking',
    subcategory: 'Services',
    command: 'kubectl expose deployment my-dep --type=NodePort --port=80 --target-port=8080',
    description: 'Expose deployment as NodePort service',
    example: 'kubectl expose deployment my-dep --type=NodePort --port=80 --target-port=8080',
    versionIntroduced: '1.0',
    difficultyLevel: 'beginner',
    tags: 'service,expose,nodeport',
    flags: '--type --port --target-port',
    output: 'service/my-dep exposed'
  },
  {
    category: 'Networking',
    subcategory: 'Services',
    command: 'kubectl get svc --all-namespaces -o wide',
    description: 'List all services with wide output',
    example: 'kubectl get svc --all-namespaces -o wide',
    versionIntroduced: '1.0',
    difficultyLevel: 'beginner',
    tags: 'service,list,wide',
    flags: '--all-namespaces -o wide',
    output: `NAMESPACE     NAME         TYPE        CLUSTER-IP       EXTERNAL-IP   PORT(S)                  AGE   SELECTOR
default       kubernetes   ClusterIP   10.96.0.1        <none>        443/TCP                  30d   <none>
default       nginx-svc    NodePort    10.100.200.50    <none>        80:31234/TCP             5d    app=nginx
kube-system   kube-dns     ClusterIP   10.96.0.10       <none>        53/UDP,53/TCP,9153/TCP   30d   k8s-app=kube-dns`
  },
  {
    category: 'Networking',
    subcategory: 'Services',
    command: 'kubectl run tmp-shell --rm -i --tty --image nicolaka/netshoot -- /bin/bash',
    description: 'Run a temporary pod for network debugging (netshoot)',
    example: 'kubectl run tmp-shell --rm -i --tty --image nicolaka/netshoot -- /bin/bash',
    versionIntroduced: '1.0',
    difficultyLevel: 'intermediate',
    tags: 'debug,network,netshoot',
    flags: '--rm -i --tty',
    output: `If you don't see a command prompt, try pressing enter.
bash-5.0# `
  },

  // Ingress
  {
    category: 'Networking',
    subcategory: 'Ingress',
    command: 'kubectl get ingress --all-namespaces',
    description: 'List all ingress resources',
    example: 'kubectl get ingress --all-namespaces',
    versionIntroduced: '1.1',
    difficultyLevel: 'beginner',
    tags: 'ingress,list',
    flags: '--all-namespaces',
    output: `NAMESPACE   NAME          CLASS   HOSTS              ADDRESS          PORTS     AGE
default     web-ingress   nginx   example.com        192.168.100.50   80, 443   5d
staging     api-ingress   nginx   api.staging.com    192.168.100.51   80        2d`
  },
  {
    category: 'Networking',
    subcategory: 'Ingress',
    command: 'kubectl create ingress simple --rule="foo.com/bar=svc1:8080,tls=my-cert"',
    description: 'Create a simple ingress with TLS',
    example: 'kubectl create ingress simple --rule="foo.com/bar=svc1:8080,tls=my-cert"',
    versionIntroduced: '1.19',
    difficultyLevel: 'intermediate',
    tags: 'ingress,create,tls',
    flags: '--rule',
    output: 'ingress.networking.k8s.io/simple created'
  },

  // DNS Debugging
  {
    category: 'Networking',
    subcategory: 'DNS',
    command: 'kubectl run -it --rm --restart=Never busybox --image=busybox:1.28 -- nslookup kubernetes.default',
    description: 'Test DNS resolution from a pod',
    example: 'kubectl run -it --rm --restart=Never busybox --image=busybox:1.28 -- nslookup kubernetes.default',
    versionIntroduced: '1.0',
    difficultyLevel: 'intermediate',
    tags: 'dns,debug,nslookup',
    flags: '--restart --image',
    output: `Server:    10.96.0.10
Address 1: 10.96.0.10 kube-dns.kube-system.svc.cluster.local

Name:      kubernetes.default
Address 1: 10.96.0.1 kubernetes.default.svc.cluster.local
pod "busybox" deleted`
  },

  // Service Expose variations
  {
    category: 'Networking',
    subcategory: 'Services',
    command: 'kubectl expose deployment my-dep --type=LoadBalancer --name=my-service',
    description: 'Expose a deployment as a LoadBalancer service',
    example: 'kubectl expose deployment my-dep --type=LoadBalancer --name=my-service',
    versionIntroduced: '1.0',
    difficultyLevel: 'beginner',
    tags: 'service,expose,loadbalancer',
    flags: '--type --name',
    output: 'service/my-service exposed'
  },

  // Ingress Rules
  {
    category: 'Networking',
    subcategory: 'Ingress',
    command: 'kubectl create ingress my-ingress --rule="host.com/path=svc:80"',
    description: 'Create an Ingress with a host and path rule',
    example: 'kubectl create ingress my-ingress --rule="host.com/path=svc:80"',
    versionIntroduced: '1.19',
    difficultyLevel: 'intermediate',
    tags: 'ingress,create,rule',
    flags: '--rule',
    output: 'ingress.networking.k8s.io/my-ingress created'
  },

  // Endpoint Checks
  {
    category: 'Networking',
    subcategory: 'Endpoints',
    command: 'kubectl get endpoints my-service',
    description: 'Get endpoints for a specific service',
    example: 'kubectl get endpoints my-service',
    versionIntroduced: '1.0',
    difficultyLevel: 'beginner',
    tags: 'endpoints,list',
    flags: '',
    output: `NAME         ENDPOINTS                               AGE
my-service   10.244.0.5:8080,10.244.1.6:8080         5d`
  },

  // Network Policy Edits
  {
    category: 'Networking',
    subcategory: 'Network Policy',
    command: 'kubectl get networkpolicy -n my-namespace',
    description: 'List network policies in a namespace',
    example: 'kubectl get networkpolicy -n my-namespace',
    versionIntroduced: '1.7',
    difficultyLevel: 'intermediate',
    tags: 'netpol,list',
    flags: '-n',
    output: `NAME             POD-SELECTOR   AGE
default-deny     <none>         5d
allow-frontend   app=frontend   2d`
  }
];
