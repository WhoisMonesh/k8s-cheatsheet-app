export const configurationCommandsData = [
  // Resource Quotas
  {
    category: 'Configuration',
    subcategory: 'Resource Quotas',
    command: 'kubectl create quota my-quota --hard=pods=10,requests.cpu=4,limits.memory=10Gi',
    description: 'Create a resource quota',
    example: 'kubectl create quota my-quota --hard=pods=10,requests.cpu=4,limits.memory=10Gi',
    versionIntroduced: '1.0',
    difficultyLevel: 'intermediate',
    tags: 'quota,create,resource',
    flags: '--hard',
    output: 'resourcequota/my-quota created'
  },
  {
    category: 'Configuration',
    subcategory: 'Resource Quotas',
    command: 'kubectl get resourcequota --all-namespaces',
    description: 'List all resource quotas',
    example: 'kubectl get resourcequota --all-namespaces',
    versionIntroduced: '1.0',
    difficultyLevel: 'beginner',
    tags: 'quota,list',
    flags: '--all-namespaces',
    output: `NAMESPACE   NAME       AGE   REQUEST                                           LIMIT
default     my-quota   5d    pods: 5/10, requests.cpu: 2/4                     limits.memory: 2Gi/10Gi
dev         dev-quota  2d    pods: 1/20, requests.cpu: 500m/2                  limits.memory: 1Gi/4Gi`
  },

  // Limit Ranges
  {
    category: 'Configuration',
    subcategory: 'Limit Ranges',
    command: 'kubectl describe limitrange my-limit-range',
    description: 'Describe a LimitRange',
    example: 'kubectl describe limitrange my-limit-range',
    versionIntroduced: '1.0',
    difficultyLevel: 'intermediate',
    tags: 'limitrange,describe',
    flags: '',
    output: `Name:       my-limit-range
Namespace:  default
Type        Resource  Min  Max  Default Request  Default Limit  Max Limit/Request Ratio
----        --------  ---  ---  ---------------  -------------  -----------------------
Container   cpu       -    -    100m             200m           -
Container   memory    -    -    256Mi            512Mi          -`
  },

  // Pod Disruption Budgets
  {
    category: 'Configuration',
    subcategory: 'PDB',
    command: 'kubectl create pdb my-pdb --selector=app=nginx --min-available=1',
    description: 'Create a Pod Disruption Budget',
    example: 'kubectl create pdb my-pdb --selector=app=nginx --min-available=1',
    versionIntroduced: '1.5',
    difficultyLevel: 'intermediate',
    tags: 'pdb,create,availability',
    flags: '--selector --min-available',
    output: 'poddisruptionbudget.policy/my-pdb created'
  },
  {
    category: 'Configuration',
    subcategory: 'PDB',
    command: 'kubectl get pdb --all-namespaces',
    description: 'List all PDBs',
    example: 'kubectl get pdb --all-namespaces',
    versionIntroduced: '1.5',
    difficultyLevel: 'beginner',
    tags: 'pdb,list',
    flags: '--all-namespaces',
    output: `NAMESPACE   NAME         MIN AVAILABLE   MAX UNAVAILABLE   ALLOWED DISRUPTIONS   AGE
default     my-pdb       1               N/A               2                     5d
prod        backend-pdb  80%             N/A               1                     10d`
  },

  // ConfigMaps & Secrets (Advanced)
  {
    category: 'Configuration',
    subcategory: 'ConfigMaps',
    command: 'kubectl create configmap my-config --from-env-file=config.env',
    description: 'Create ConfigMap from env file',
    example: 'kubectl create configmap my-config --from-env-file=config.env',
    versionIntroduced: '1.2',
    difficultyLevel: 'beginner',
    tags: 'configmap,create,env',
    flags: '--from-env-file',
    output: 'configmap/my-config created'
  },

  // Generated Quota Creations
  {
    category: 'Configuration',
    subcategory: 'Resource Quotas',
    command: 'kubectl create quota dev-quota --hard=pods=20,requests.cpu=2,limits.memory=4Gi -n dev',
    description: 'Create a resource quota for a development namespace',
    example: 'kubectl create quota dev-quota --hard=pods=20,requests.cpu=2,limits.memory=4Gi -n dev',
    versionIntroduced: '1.0',
    difficultyLevel: 'intermediate',
    tags: 'quota,create,namespace',
    flags: '--hard -n',
    output: 'resourcequota/dev-quota created'
  },
  {
    category: 'Configuration',
    subcategory: 'Resource Quotas',
    command: 'kubectl create quota compute-resources --hard=cpu=1,memory=1Gi,pods=2,services=3,replicationcontrollers=1,resourcequotas=1,secrets=5,persistentvolumeclaims=10',
    description: 'Create a comprehensive resource quota limiting multiple resource types',
    example: 'kubectl create quota compute-resources --hard=cpu=1,memory=1Gi,pods=2,services=3,replicationcontrollers=1,resourcequotas=1,secrets=5,persistentvolumeclaims=10',
    versionIntroduced: '1.0',
    difficultyLevel: 'advanced',
    tags: 'quota,create,comprehensive',
    flags: '--hard',
    output: 'resourcequota/compute-resources created'
  },
  {
    category: 'Configuration',
    subcategory: 'Resource Quotas',
    command: 'kubectl create quota object-counts --hard=configmaps=10,persistentvolumeclaims=4,pods=4,replicationcontrollers=20,secrets=10,services=10,services.loadbalancers=2',
    description: 'Create a quota limiting object counts',
    example: 'kubectl create quota object-counts --hard=configmaps=10,persistentvolumeclaims=4,pods=4,replicationcontrollers=20,secrets=10,services=10,services.loadbalancers=2',
    versionIntroduced: '1.0',
    difficultyLevel: 'intermediate',
    tags: 'quota,create,objects',
    flags: '--hard',
    output: 'resourcequota/object-counts created'
  },
  {
    category: 'Configuration',
    subcategory: 'Resource Quotas',
    command: 'kubectl describe quota --namespace=my-namespace',
    description: 'View details of all quotas in a namespace',
    example: 'kubectl describe quota --namespace=my-namespace',
    versionIntroduced: '1.0',
    difficultyLevel: 'beginner',
    tags: 'quota,describe',
    flags: '--namespace',
    output: `Name:            my-quota
Namespace:       my-namespace
Resource         Used  Hard
--------         ----  ----
limits.memory    2Gi   10Gi
pods             5     10
requests.cpu     2     4`
  },
  {
    category: 'Configuration',
    subcategory: 'PDB',
    command: 'kubectl create pdb frontend-pdb --selector=app=frontend --min-available=80%',
    description: 'Create a PDB ensuring 80% of frontend pods are available',
    example: 'kubectl create pdb frontend-pdb --selector=app=frontend --min-available=80%',
    versionIntroduced: '1.5',
    difficultyLevel: 'intermediate',
    tags: 'pdb,create,percentage',
    flags: '--selector --min-available',
    output: 'poddisruptionbudget.policy/frontend-pdb created'
  },
  {
    category: 'Configuration',
    subcategory: 'PDB',
    command: 'kubectl create pdb backend-pdb --selector=app=backend --max-unavailable=1',
    description: 'Create a PDB ensuring at most 1 backend pod is unavailable',
    example: 'kubectl create pdb backend-pdb --selector=app=backend --max-unavailable=1',
    versionIntroduced: '1.5',
    difficultyLevel: 'intermediate',
    tags: 'pdb,create,max-unavailable',
    flags: '--selector --max-unavailable',
    output: 'poddisruptionbudget.policy/backend-pdb created'
  },
  {
    category: 'Configuration',
    subcategory: 'Limit Ranges',
    command: 'kubectl create -f limit-range.yaml',
    description: 'Create a LimitRange from a file',
    example: 'kubectl create -f limit-range.yaml',
    versionIntroduced: '1.0',
    difficultyLevel: 'beginner',
    tags: 'limitrange,create,file',
    flags: '-f',
    output: 'limitrange/my-limits created'
  },
  {
    category: 'Configuration',
    subcategory: 'Limit Ranges',
    command: 'kubectl patch limitrange my-limits --type=merge -p \'{"spec":{"limits":[{"type":"Container","default":{"cpu":"200m","memory":"512Mi"},"defaultRequest":{"cpu":"100m","memory":"256Mi"}}]}}\'',
    description: 'Patch a LimitRange to update default CPU and memory limits/requests',
    example: 'kubectl patch limitrange my-limits --type=merge -p \'{"spec":{"limits":[{"type":"Container","default":{"cpu":"200m","memory":"512Mi"},"defaultRequest":{"cpu":"100m","memory":"256Mi"}}]}}\'',
    versionIntroduced: '1.0',
    difficultyLevel: 'advanced',
    tags: 'limitrange,patch,defaults',
    flags: '-p',
    output: 'limitrange/my-limits patched'
  },
  {
    category: 'Configuration',
    subcategory: 'ConfigMaps',
    command: 'kubectl create configmap app-config --from-literal=log_level=debug --from-literal=ui_color=blue',
    description: 'Create a ConfigMap with multiple literal values',
    example: 'kubectl create configmap app-config --from-literal=log_level=debug --from-literal=ui_color=blue',
    versionIntroduced: '1.2',
    difficultyLevel: 'beginner',
    tags: 'configmap,create,literals',
    flags: '--from-literal',
    output: 'configmap/app-config created'
  },
  {
    category: 'Configuration',
    subcategory: 'ConfigMaps',
    command: 'kubectl create configmap game-config --from-file=game.properties --from-file=ui.properties',
    description: 'Create a ConfigMap from multiple files',
    example: 'kubectl create configmap game-config --from-file=game.properties --from-file=ui.properties',
    versionIntroduced: '1.2',
    difficultyLevel: 'beginner',
    tags: 'configmap,create,files',
    flags: '--from-file',
    output: 'configmap/game-config created'
  },
  {
    category: 'Configuration',
    subcategory: 'ConfigMaps',
    command: 'kubectl create configmap special-config --from-literal=special.how=very --from-literal=special.type=charm',
    description: 'Create a ConfigMap with keys containing dots',
    example: 'kubectl create configmap special-config --from-literal=special.how=very --from-literal=special.type=charm',
    versionIntroduced: '1.2',
    difficultyLevel: 'intermediate',
    tags: 'configmap,create,keys',
    flags: '--from-literal',
    output: 'configmap/special-config created'
  }
];
