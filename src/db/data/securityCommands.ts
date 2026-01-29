import { K8sCommand } from '../../types';

export const securityCommandsData: Omit<K8sCommand, 'id'>[] = [
  // RBAC Analysis & Troubleshooting
  {
    category: 'Security & RBAC',
    subcategory: 'RBAC Analysis',
    command: 'kubectl auth can-i create pods --all-namespaces',
    description: 'Check if I can create pods in all namespaces',
    example: 'kubectl auth can-i create pods --all-namespaces',
    versionIntroduced: '1.6',
    difficultyLevel: 'beginner',
    tags: 'auth,rbac,security',
    flags: '--all-namespaces',
    output: 'yes'
  },
  {
    category: 'Security & RBAC',
    subcategory: 'RBAC Analysis',
    command: 'kubectl auth can-i delete deployments --as=system:serviceaccount:default:my-sa',
    description: 'Check if a specific service account can delete deployments',
    example: 'kubectl auth can-i delete deployments --as=system:serviceaccount:default:my-sa',
    versionIntroduced: '1.6',
    difficultyLevel: 'intermediate',
    tags: 'auth,rbac,impersonation',
    flags: '--as',
    output: 'no'
  },
  {
    category: 'Security & RBAC',
    subcategory: 'RBAC Analysis',
    command: 'kubectl get roles,rolebindings --all-namespaces',
    description: 'List all Roles and RoleBindings in all namespaces',
    example: 'kubectl get roles,rolebindings --all-namespaces',
    versionIntroduced: '1.8',
    difficultyLevel: 'beginner',
    tags: 'rbac,list',
    flags: '--all-namespaces',
    output: `NAMESPACE     NAME                                             CREATED AT
default       role.rbac.authorization.k8s.io/pod-reader        2024-01-20T10:00:00Z
kube-system   role.rbac.authorization.k8s.io/extension-apiserver-authentication-reader   2024-01-01T00:00:00Z

NAMESPACE     NAME                                             ROLE                                             AGE
default       rolebinding.rbac.authorization.k8s.io/read-pods  Role/pod-reader                                  5d
kube-system   rolebinding.rbac.authorization.k8s.io/system-controller:bootstrap-signer  Role/system:controller:bootstrap-signer  25d`
  },
  {
    category: 'Security & RBAC',
    subcategory: 'RBAC Analysis',
    command: 'kubectl get clusterroles,clusterrolebindings',
    description: 'List all ClusterRoles and ClusterRoleBindings',
    example: 'kubectl get clusterroles,clusterrolebindings',
    versionIntroduced: '1.8',
    difficultyLevel: 'beginner',
    tags: 'rbac,list,cluster-wide',
    flags: '',
    output: `NAME                                                                   CREATED AT
clusterrole.rbac.authorization.k8s.io/admin                            2024-01-01T00:00:00Z
clusterrole.rbac.authorization.k8s.io/cluster-admin                    2024-01-01T00:00:00Z
clusterrole.rbac.authorization.k8s.io/edit                             2024-01-01T00:00:00Z

NAME                                                                   ROLE                                                   AGE
clusterrolebinding.rbac.authorization.k8s.io/cluster-admin             ClusterRole/cluster-admin                              25d
clusterrolebinding.rbac.authorization.k8s.io/docker-registry           ClusterRole/system:controller:docker-registry          25d`
  },
  
  // Secrets Management
  {
    category: 'Security & RBAC',
    subcategory: 'Secrets Management',
    command: 'kubectl create secret generic my-secret --from-literal=password=s3cr3t',
    description: 'Create a generic secret from literal value',
    example: 'kubectl create secret generic my-secret --from-literal=password=s3cr3t',
    versionIntroduced: '1.0',
    difficultyLevel: 'beginner',
    tags: 'secret,create',
    flags: '--from-literal',
    output: 'secret/my-secret created'
  },
  {
    category: 'Security & RBAC',
    subcategory: 'Secrets Management',
    command: 'kubectl get secret my-secret -o jsonpath="{.data.password}" | base64 --decode',
    description: 'Decode a secret value',
    example: 'kubectl get secret my-secret -o jsonpath="{.data.password}" | base64 --decode',
    versionIntroduced: '1.0',
    difficultyLevel: 'intermediate',
    tags: 'secret,decode,base64',
    flags: '-o jsonpath',
    output: 's3cr3t'
  },

  // Service Accounts
  {
    category: 'Security & RBAC',
    subcategory: 'Service Accounts',
    command: 'kubectl create serviceaccount my-sa',
    description: 'Create a new service account',
    example: 'kubectl create serviceaccount my-sa',
    versionIntroduced: '1.0',
    difficultyLevel: 'beginner',
    tags: 'serviceaccount,create',
    flags: '',
    output: 'serviceaccount/my-sa created'
  },
  {
    category: 'Security & RBAC',
    subcategory: 'Service Accounts',
    command: 'kubectl get serviceaccount my-sa -o yaml',
    description: 'Get service account details in YAML',
    example: 'kubectl get serviceaccount my-sa -o yaml',
    versionIntroduced: '1.0',
    difficultyLevel: 'beginner',
    tags: 'serviceaccount,yaml',
    flags: '-o yaml',
    output: `apiVersion: v1
kind: ServiceAccount
metadata:
  creationTimestamp: "2024-01-25T10:00:00Z"
  name: my-sa
  namespace: default
  uid: a1b2c3d4-e5f6-7890-1234-567890abcdef
secrets:
- name: my-sa-token-abcde`
  },

  // Network Policies
  {
    category: 'Security & RBAC',
    subcategory: 'Network Security',
    command: 'kubectl get networkpolicies --all-namespaces',
    description: 'List all network policies in all namespaces',
    example: 'kubectl get networkpolicies --all-namespaces',
    versionIntroduced: '1.7',
    difficultyLevel: 'intermediate',
    tags: 'networkpolicy,security,netpol',
    flags: '--all-namespaces',
    output: `NAMESPACE   NAME             POD-SELECTOR   AGE
default     deny-all         <none>         5d
backend     allow-frontend   app=backend    2d`
  },

  // RBAC Checks
  {
    category: 'Security & RBAC',
    subcategory: 'RBAC Analysis',
    command: 'kubectl auth can-i list secrets --as=system:serviceaccount:kube-system:default',
    description: 'Check if a service account can list secrets',
    example: 'kubectl auth can-i list secrets --as=system:serviceaccount:kube-system:default',
    versionIntroduced: '1.6',
    difficultyLevel: 'intermediate',
    tags: 'auth,rbac,impersonation',
    flags: '--as',
    output: 'no'
  },

  // Secret Creation
  {
    category: 'Security & RBAC',
    subcategory: 'Secrets Management',
    command: 'kubectl create secret docker-registry my-registry --docker-server=DOCKER_REGISTRY_SERVER --docker-username=DOCKER_USER --docker-password=DOCKER_PASSWORD --docker-email=DOCKER_EMAIL',
    description: 'Create a docker-registry secret',
    example: 'kubectl create secret docker-registry my-registry --docker-server=https://index.docker.io/v1/ --docker-username=myuser --docker-password=mypassword --docker-email=myuser@example.com',
    versionIntroduced: '1.0',
    difficultyLevel: 'intermediate',
    tags: 'secret,create,docker',
    flags: '--docker-server --docker-username --docker-password',
    output: 'secret/my-registry created'
  },

  // Network Policy Describe
  {
    category: 'Security & RBAC',
    subcategory: 'Network Security',
    command: 'kubectl describe networkpolicy deny-all -n default',
    description: 'Describe a specific network policy',
    example: 'kubectl describe networkpolicy deny-all -n default',
    versionIntroduced: '1.7',
    difficultyLevel: 'intermediate',
    tags: 'networkpolicy,describe',
    flags: '-n',
    output: `Name:         deny-all
Namespace:    default
Created on:   2024-01-20 10:00:00 +0000 UTC
Labels:       <none>
Annotations:  <none>
Spec:
  PodSelector:     <none> (Allowing the specific traffic to all pods in this namespace)
  Allowing ingress traffic:
    <none> (Selected pods are isolated for ingress connectivity)
  Allowing egress traffic:
    <none> (Selected pods are isolated for egress connectivity)
  Policy Types: Ingress, Egress`
  },
  
  // Role Creation
  {
    category: 'Security & RBAC',
    subcategory: 'RBAC Management',
    command: 'kubectl create role pod-reader --verb=get --verb=list --verb=watch --resource=pods',
    description: 'Create a Role with read access to pods',
    example: 'kubectl create role pod-reader --verb=get --verb=list --verb=watch --resource=pods',
    versionIntroduced: '1.8',
    difficultyLevel: 'intermediate',
    tags: 'role,create,rbac',
    flags: '--verb --resource',
    output: 'role.rbac.authorization.k8s.io/pod-reader created'
  },

  // --- Missing Variations ---
  {
    category: 'Security & RBAC',
    subcategory: 'RBAC Analysis',
    command: 'kubectl get roles',
    description: 'List Roles in current namespace',
    example: 'kubectl get roles',
    versionIntroduced: '1.8',
    difficultyLevel: 'beginner',
    tags: 'rbac,list,role',
    output: `NAME         CREATED AT
pod-reader   2024-01-20T10:00:00Z`
  },
  {
    category: 'Security & RBAC',
    subcategory: 'RBAC Analysis',
    command: 'kubectl get rolebindings',
    description: 'List RoleBindings in current namespace',
    example: 'kubectl get rolebindings',
    versionIntroduced: '1.8',
    difficultyLevel: 'beginner',
    tags: 'rbac,list,rolebinding',
    output: `NAME        ROLE              AGE
read-pods   Role/pod-reader   5d`
  },
  {
    category: 'Security & RBAC',
    subcategory: 'RBAC Analysis',
    command: 'kubectl get clusterroles',
    description: 'List ClusterRoles',
    example: 'kubectl get clusterroles',
    versionIntroduced: '1.8',
    difficultyLevel: 'beginner',
    tags: 'rbac,list,clusterrole',
    output: `NAME          CREATED AT
cluster-admin 2024-01-01T00:00:00Z
edit          2024-01-01T00:00:00Z`
  },
  {
    category: 'Security & RBAC',
    subcategory: 'RBAC Analysis',
    command: 'kubectl get clusterrolebindings',
    description: 'List ClusterRoleBindings',
    example: 'kubectl get clusterrolebindings',
    versionIntroduced: '1.8',
    difficultyLevel: 'beginner',
    tags: 'rbac,list,clusterrolebinding',
    output: `NAME            ROLE                        AGE
cluster-admin   ClusterRole/cluster-admin   25d`
  },
  {
    category: 'Security & RBAC',
    subcategory: 'Network Security',
    command: 'kubectl get networkpolicies',
    description: 'List NetworkPolicies in current namespace',
    example: 'kubectl get networkpolicies',
    versionIntroduced: '1.7',
    difficultyLevel: 'beginner',
    tags: 'networkpolicy,list,netpol',
    output: `NAME       POD-SELECTOR   AGE
deny-all   <none>         5d`
  },
  {
    category: 'Security & RBAC',
    subcategory: 'Service Accounts',
    command: 'kubectl get serviceaccounts',
    description: 'List ServiceAccounts in current namespace',
    example: 'kubectl get serviceaccounts',
    versionIntroduced: '1.0',
    difficultyLevel: 'beginner',
    tags: 'serviceaccount,list',
    output: `NAME      SECRETS   AGE
default   1         30d
my-sa     1         5d`
  },
  {
    category: 'Security & RBAC',
    subcategory: 'Service Accounts',
    command: 'kubectl get serviceaccounts --all-namespaces',
    description: 'List ServiceAccounts across all namespaces',
    example: 'kubectl get serviceaccounts --all-namespaces',
    versionIntroduced: '1.0',
    difficultyLevel: 'beginner',
    tags: 'serviceaccount,list,all-namespaces',
    flags: '--all-namespaces',
    output: `NAMESPACE     NAME      SECRETS   AGE
kube-system   coredns   1         30d`
  },

  // Admission Controllers & Webhooks
  {
    category: 'Security & RBAC',
    subcategory: 'Admission Control',
    command: 'kubectl get mutatingwebhookconfigurations',
    description: 'List Mutating Webhook Configurations',
    example: 'kubectl get mutatingwebhookconfigurations',
    versionIntroduced: '1.9',
    difficultyLevel: 'expert',
    tags: 'webhook,mutating,admission,security',
    output: `NAME                     WEBHOOKS   AGE
cert-manager-webhook     1          30d
istio-sidecar-injector   2          15d`
  },
  {
    category: 'Security & RBAC',
    subcategory: 'Admission Control',
    command: 'kubectl get validatingwebhookconfigurations',
    description: 'List Validating Webhook Configurations',
    example: 'kubectl get validatingwebhookconfigurations',
    versionIntroduced: '1.9',
    difficultyLevel: 'expert',
    tags: 'webhook,validating,admission,security',
    output: `NAME                     WEBHOOKS   AGE
ingress-nginx-admission  1          30d
cert-manager-webhook     1          30d`
  },

  // Certificate Management
  {
    category: 'Security & RBAC',
    subcategory: 'Certificates',
    command: 'kubectl get csr',
    description: 'List Certificate Signing Requests',
    example: 'kubectl get csr',
    versionIntroduced: '1.6',
    difficultyLevel: 'intermediate',
    tags: 'csr,certificate,security',
    output: `NAME        AGE   SIGNERNAME                            REQUESTOR          REQUESTEDDURATION   CONDITION
csr-5b85d   10m   kubernetes.io/kube-apiserver-client   kubernetes-admin   <none>              Approved,Issued`
  },
  {
    category: 'Security & RBAC',
    subcategory: 'Certificates',
    command: 'kubectl certificate approve my-csr',
    description: 'Approve a Certificate Signing Request',
    example: 'kubectl certificate approve csr-5b85d',
    versionIntroduced: '1.6',
    difficultyLevel: 'intermediate',
    tags: 'csr,certificate,approve,security',
    output: 'certificatesigningrequest.certificates.k8s.io/csr-5b85d approved'
  }
];
