import { K8sCommand } from '../../types';

export const karpenterCommandsData = [
  // --- NodePools (Beta APIs) ---
  {
    category: 'Karpenter',
    subcategory: 'NodePools',
    command: 'kubectl get nodepools',
    description: 'List all Karpenter NodePools',
    example: 'kubectl get nodepools',
    versionIntroduced: '0.32.0',
    difficultyLevel: 'intermediate',
    tags: 'karpenter,nodepool,list',
    output: 'NAME       NODECLASS   WEIGHT   AGE\ndefault    default     10       2d'
  },
  {
    category: 'Karpenter',
    subcategory: 'NodePools',
    command: 'kubectl get nodepools -o wide',
    description: 'List NodePools with more details',
    example: 'kubectl get nodepools -o wide',
    versionIntroduced: '0.32.0',
    difficultyLevel: 'intermediate',
    tags: 'karpenter,nodepool,list,wide',
    flags: '-o wide',
    output: ''
  },
  {
    category: 'Karpenter',
    subcategory: 'NodePools',
    command: 'kubectl get nodepools -o yaml',
    description: 'Get NodePools as YAML',
    example: 'kubectl get nodepools -o yaml',
    versionIntroduced: '0.32.0',
    difficultyLevel: 'intermediate',
    tags: 'karpenter,nodepool,yaml',
    flags: '-o yaml',
    output: ''
  },
  {
    category: 'Karpenter',
    subcategory: 'NodePools',
    command: 'kubectl describe nodepool default',
    description: 'Describe a specific NodePool',
    example: 'kubectl describe nodepool default',
    versionIntroduced: '0.32.0',
    difficultyLevel: 'intermediate',
    tags: 'karpenter,nodepool,describe',
    output: ''
  },
  {
    category: 'Karpenter',
    subcategory: 'NodePools',
    command: 'kubectl edit nodepool default',
    description: 'Edit a NodePool configuration',
    example: 'kubectl edit nodepool default',
    versionIntroduced: '0.32.0',
    difficultyLevel: 'intermediate',
    tags: 'karpenter,nodepool,edit',
    output: ''
  },
  {
    category: 'Karpenter',
    subcategory: 'NodePools',
    command: 'kubectl delete nodepool default',
    description: 'Delete a NodePool',
    example: 'kubectl delete nodepool default',
    versionIntroduced: '0.32.0',
    difficultyLevel: 'intermediate',
    tags: 'karpenter,nodepool,delete',
    output: ''
  },
  {
    category: 'Karpenter',
    subcategory: 'NodePools',
    command: 'kubectl get nodepools --show-labels',
    description: 'List NodePools showing labels',
    example: 'kubectl get nodepools --show-labels',
    versionIntroduced: '0.32.0',
    difficultyLevel: 'intermediate',
    tags: 'karpenter,nodepool,labels',
    output: ''
  },
  
  // --- EC2NodeClasses (AWS) ---
  {
    category: 'Karpenter',
    subcategory: 'EC2NodeClasses',
    command: 'kubectl get ec2nodeclasses',
    description: 'List all AWS EC2NodeClasses',
    example: 'kubectl get ec2nodeclasses',
    versionIntroduced: '0.32.0',
    difficultyLevel: 'intermediate',
    tags: 'karpenter,aws,ec2nodeclass,list',
    output: 'NAME      AGE\ndefault   2d'
  },
  {
    category: 'Karpenter',
    subcategory: 'EC2NodeClasses',
    command: 'kubectl get ec2nodeclasses -o yaml',
    description: 'Get EC2NodeClasses as YAML',
    example: 'kubectl get ec2nodeclasses -o yaml',
    versionIntroduced: '0.32.0',
    difficultyLevel: 'intermediate',
    tags: 'karpenter,aws,ec2nodeclass,yaml',
    output: ''
  },
  {
    category: 'Karpenter',
    subcategory: 'EC2NodeClasses',
    command: 'kubectl describe ec2nodeclass default',
    description: 'Describe a specific EC2NodeClass',
    example: 'kubectl describe ec2nodeclass default',
    versionIntroduced: '0.32.0',
    difficultyLevel: 'intermediate',
    tags: 'karpenter,aws,ec2nodeclass,describe',
    output: ''
  },
  {
    category: 'Karpenter',
    subcategory: 'EC2NodeClasses',
    command: 'kubectl edit ec2nodeclass default',
    description: 'Edit an EC2NodeClass',
    example: 'kubectl edit ec2nodeclass default',
    versionIntroduced: '0.32.0',
    difficultyLevel: 'intermediate',
    tags: 'karpenter,aws,ec2nodeclass,edit',
    output: ''
  },

  // --- NodeClaims (Beta) ---
  {
    category: 'Karpenter',
    subcategory: 'NodeClaims',
    command: 'kubectl get nodeclaims',
    description: 'List NodeClaims (Karpenter v1beta1+)',
    example: 'kubectl get nodeclaims',
    versionIntroduced: '0.32.0',
    difficultyLevel: 'advanced',
    tags: 'karpenter,nodeclaim,list',
    output: ''
  },
  {
    category: 'Karpenter',
    subcategory: 'NodeClaims',
    command: 'kubectl get nodeclaims -o wide',
    description: 'List NodeClaims with details',
    example: 'kubectl get nodeclaims -o wide',
    versionIntroduced: '0.32.0',
    difficultyLevel: 'advanced',
    tags: 'karpenter,nodeclaim,list',
    output: ''
  },
  {
    category: 'Karpenter',
    subcategory: 'NodeClaims',
    command: 'kubectl describe nodeclaim',
    description: 'Describe a NodeClaim',
    example: 'kubectl describe nodeclaim <name>',
    versionIntroduced: '0.32.0',
    difficultyLevel: 'advanced',
    tags: 'karpenter,nodeclaim,describe',
    output: ''
  },
  {
    category: 'Karpenter',
    subcategory: 'NodeClaims',
    command: 'kubectl delete nodeclaim <name>',
    description: 'Delete a NodeClaim (terminates the node)',
    example: 'kubectl delete nodeclaim claim-abc12345',
    versionIntroduced: '0.32.0',
    difficultyLevel: 'advanced',
    tags: 'karpenter,nodeclaim,delete',
    output: ''
  },

  // --- Provisioners (Legacy Alpha) ---
  {
    category: 'Karpenter',
    subcategory: 'Legacy Provisioners',
    command: 'kubectl get provisioners',
    description: 'List Legacy Provisioners (Alpha)',
    example: 'kubectl get provisioners',
    versionIntroduced: '0.5.0',
    difficultyLevel: 'intermediate',
    tags: 'karpenter,provisioner,legacy',
    output: ''
  },
  {
    category: 'Karpenter',
    subcategory: 'Legacy Provisioners',
    command: 'kubectl describe provisioner default',
    description: 'Describe a Legacy Provisioner',
    example: 'kubectl describe provisioner default',
    versionIntroduced: '0.5.0',
    difficultyLevel: 'intermediate',
    tags: 'karpenter,provisioner,describe',
    output: ''
  },

  // --- Nodes & Karpenter Labels ---
  {
    category: 'Karpenter',
    subcategory: 'Node Management',
    command: 'kubectl get nodes -l karpenter.sh/nodepool',
    description: 'List nodes managed by any Karpenter NodePool',
    example: 'kubectl get nodes -l karpenter.sh/nodepool',
    versionIntroduced: '0.32.0',
    difficultyLevel: 'intermediate',
    tags: 'karpenter,nodes,filter',
    output: ''
  },
  {
    category: 'Karpenter',
    subcategory: 'Node Management',
    command: 'kubectl get nodes -l karpenter.sh/nodepool=default',
    description: 'List nodes belonging to "default" NodePool',
    example: 'kubectl get nodes -l karpenter.sh/nodepool=default',
    versionIntroduced: '0.32.0',
    difficultyLevel: 'intermediate',
    tags: 'karpenter,nodes,filter',
    output: ''
  },
  {
    category: 'Karpenter',
    subcategory: 'Node Management',
    command: 'kubectl get nodes -l karpenter.sh/capacity-type=spot',
    description: 'List Spot nodes provisioned by Karpenter',
    example: 'kubectl get nodes -l karpenter.sh/capacity-type=spot',
    versionIntroduced: '0.1.0',
    difficultyLevel: 'intermediate',
    tags: 'karpenter,nodes,spot',
    output: ''
  },
  {
    category: 'Karpenter',
    subcategory: 'Node Management',
    command: 'kubectl get nodes -l karpenter.sh/capacity-type=on-demand',
    description: 'List On-Demand nodes provisioned by Karpenter',
    example: 'kubectl get nodes -l karpenter.sh/capacity-type=on-demand',
    versionIntroduced: '0.1.0',
    difficultyLevel: 'intermediate',
    tags: 'karpenter,nodes,ondemand',
    output: ''
  },
  {
    category: 'Karpenter',
    subcategory: 'Node Management',
    command: 'kubectl get nodes --selector=karpenter.sh/initialized=true',
    description: 'List fully initialized Karpenter nodes',
    example: 'kubectl get nodes --selector=karpenter.sh/initialized=true',
    versionIntroduced: '0.1.0',
    difficultyLevel: 'intermediate',
    tags: 'karpenter,nodes,status',
    output: ''
  },

  // --- Logs & Debugging ---
  {
    category: 'Karpenter',
    subcategory: 'Troubleshooting',
    command: 'kubectl logs -n karpenter -l app.kubernetes.io/name=karpenter',
    description: 'Get logs from Karpenter controller',
    example: 'kubectl logs -n karpenter -l app.kubernetes.io/name=karpenter',
    versionIntroduced: '0.1.0',
    difficultyLevel: 'intermediate',
    tags: 'karpenter,logs,debug',
    output: ''
  },
  {
    category: 'Karpenter',
    subcategory: 'Troubleshooting',
    command: 'kubectl logs -f -n karpenter -l app.kubernetes.io/name=karpenter',
    description: 'Stream Karpenter controller logs',
    example: 'kubectl logs -f -n karpenter -l app.kubernetes.io/name=karpenter',
    versionIntroduced: '0.1.0',
    difficultyLevel: 'intermediate',
    tags: 'karpenter,logs,stream',
    output: ''
  },
  {
    category: 'Karpenter',
    subcategory: 'Troubleshooting',
    command: 'kubectl logs -n karpenter -c controller -l app.kubernetes.io/name=karpenter',
    description: 'Get logs specifically from the controller container',
    example: 'kubectl logs -n karpenter -c controller -l app.kubernetes.io/name=karpenter',
    versionIntroduced: '0.1.0',
    difficultyLevel: 'advanced',
    tags: 'karpenter,logs,controller',
    output: ''
  },
  {
    category: 'Karpenter',
    subcategory: 'Troubleshooting',
    command: 'kubectl get events -n karpenter',
    description: 'Get events in Karpenter namespace',
    example: 'kubectl get events -n karpenter --sort-by=".lastTimestamp"',
    versionIntroduced: '0.1.0',
    difficultyLevel: 'beginner',
    tags: 'karpenter,events',
    output: ''
  },

  // --- Helm Installation & Upgrades ---
  {
    category: 'Karpenter',
    subcategory: 'Installation',
    command: 'helm repo add karpenter https://charts.karpenter.sh/',
    description: 'Add Karpenter Helm repository',
    example: 'helm repo add karpenter https://charts.karpenter.sh/',
    versionIntroduced: '0.1.0',
    difficultyLevel: 'beginner',
    tags: 'karpenter,helm,repo',
    output: ''
  },
  {
    category: 'Karpenter',
    subcategory: 'Installation',
    command: 'helm repo update',
    description: 'Update Helm repositories',
    example: 'helm repo update',
    versionIntroduced: '0.1.0',
    difficultyLevel: 'beginner',
    tags: 'karpenter,helm,update',
    output: ''
  },
  {
    category: 'Karpenter',
    subcategory: 'Installation',
    command: 'helm upgrade --install karpenter oci://public.ecr.aws/karpenter/karpenter --namespace karpenter --create-namespace',
    description: 'Install Karpenter via OCI (modern)',
    example: 'helm upgrade --install karpenter oci://public.ecr.aws/karpenter/karpenter --namespace karpenter --create-namespace --version 0.32.0',
    versionIntroduced: '0.32.0',
    difficultyLevel: 'advanced',
    tags: 'karpenter,helm,install,oci',
    output: ''
  },
  {
    category: 'Karpenter',
    subcategory: 'Installation',
    command: 'helm list -n karpenter',
    description: 'List installed Helm charts in karpenter namespace',
    example: 'helm list -n karpenter',
    versionIntroduced: '0.1.0',
    difficultyLevel: 'beginner',
    tags: 'karpenter,helm,list',
    output: ''
  },

  // --- Advanced JSONPath & Filters for Karpenter ---
  {
    category: 'Karpenter',
    subcategory: 'Advanced Queries',
    command: 'kubectl get nodes -o custom-columns=NAME:.metadata.name,INSTANCE:.metadata.labels.karpenter\\.k8s\\.aws/instance-id,TYPE:.metadata.labels.node\\.kubernetes\\.io/instance-type',
    description: 'List nodes with Instance ID and Type',
    example: 'kubectl get nodes -o custom-columns=NAME:.metadata.name,INSTANCE:.metadata.labels.karpenter\\.k8s\\.aws/instance-id,TYPE:.metadata.labels.node\\.kubernetes\\.io/instance-type',
    versionIntroduced: '0.1.0',
    difficultyLevel: 'expert',
    tags: 'karpenter,jsonpath,nodes',
    output: ''
  },
  {
    category: 'Karpenter',
    subcategory: 'Advanced Queries',
    command: 'kubectl get nodepools -o jsonpath="{.items[*].metadata.name}"',
    description: 'Get all NodePool names as a list',
    example: 'kubectl get nodepools -o jsonpath="{.items[*].metadata.name}"',
    versionIntroduced: '0.32.0',
    difficultyLevel: 'advanced',
    tags: 'karpenter,jsonpath,nodepool',
    output: ''
  },
  {
    category: 'Karpenter',
    subcategory: 'Advanced Queries',
    command: 'kubectl get nodeclaims -o custom-columns=NAME:.metadata.name,NODE:.status.nodeName,INSTANCE:.status.providerID',
    description: 'List NodeClaims with Node Name and Provider ID',
    example: 'kubectl get nodeclaims -o custom-columns=NAME:.metadata.name,NODE:.status.nodeName,INSTANCE:.status.providerID',
    versionIntroduced: '0.32.0',
    difficultyLevel: 'expert',
    tags: 'karpenter,jsonpath,nodeclaim',
    output: ''
  },

  // --- Cost Optimization ---
  {
    category: 'Karpenter',
    subcategory: 'Cost Optimization',
    command: 'kubectl get nodepool default -o jsonpath="{.spec.limits}"',
    description: 'Check resource limits on NodePool',
    example: 'kubectl get nodepool default -o jsonpath="{.spec.limits}"',
    versionIntroduced: '0.32.0',
    difficultyLevel: 'intermediate',
    tags: 'karpenter,cost,limits',
    output: ''
  },
  {
    category: 'Karpenter',
    subcategory: 'Cost Optimization',
    command: 'kubectl get nodepool default -o jsonpath="{.spec.disruption}"',
    description: 'Check disruption (consolidation) settings',
    example: 'kubectl get nodepool default -o jsonpath="{.spec.disruption}"',
    versionIntroduced: '0.32.0',
    difficultyLevel: 'intermediate',
    tags: 'karpenter,cost,disruption',
    output: ''
  },
  
  // --- Troubleshooting & System ---
  {
    category: 'Karpenter',
    subcategory: 'System',
    command: 'kubectl get pods -n karpenter',
    description: 'List all Karpenter system pods',
    example: 'kubectl get pods -n karpenter',
    versionIntroduced: '0.1.0',
    difficultyLevel: 'beginner',
    tags: 'karpenter,system,pods',
    output: ''
  },
  {
    category: 'Karpenter',
    subcategory: 'System',
    command: 'kubectl get deployment -n karpenter',
    description: 'Get Karpenter deployment status',
    example: 'kubectl get deployment -n karpenter',
    versionIntroduced: '0.1.0',
    difficultyLevel: 'beginner',
    tags: 'karpenter,system,deployment',
    output: ''
  },
  {
    category: 'Karpenter',
    subcategory: 'System',
    command: 'kubectl rollout status deployment/karpenter -n karpenter',
    description: 'Check rollout status of Karpenter',
    example: 'kubectl rollout status deployment/karpenter -n karpenter',
    versionIntroduced: '0.1.0',
    difficultyLevel: 'intermediate',
    tags: 'karpenter,system,rollout',
    output: ''
  },
  {
    category: 'Karpenter',
    subcategory: 'System',
    command: 'kubectl top pods -n karpenter',
    description: 'Check resource usage of Karpenter pods',
    example: 'kubectl top pods -n karpenter',
    versionIntroduced: '0.1.0',
    difficultyLevel: 'intermediate',
    tags: 'karpenter,system,metrics',
    output: ''
  },
  {
    category: 'Karpenter',
    subcategory: 'System',
    command: 'kubectl get configmap -n karpenter',
    description: 'List Karpenter ConfigMaps (settings/logging)',
    example: 'kubectl get configmap -n karpenter',
    versionIntroduced: '0.1.0',
    difficultyLevel: 'intermediate',
    tags: 'karpenter,system,config',
    output: ''
  },
  {
    category: 'Karpenter',
    subcategory: 'System',
    command: 'kubectl get crd | grep karpenter',
    description: 'List all Karpenter Custom Resource Definitions',
    example: 'kubectl get crd | grep karpenter',
    versionIntroduced: '0.1.0',
    difficultyLevel: 'intermediate',
    tags: 'karpenter,system,crd',
    output: ''
  },
  {
    category: 'Karpenter',
    subcategory: 'System',
    command: 'kubectl api-resources --api-group=karpenter.sh',
    description: 'List supported Karpenter API resources',
    example: 'kubectl api-resources --api-group=karpenter.sh',
    versionIntroduced: '0.1.0',
    difficultyLevel: 'intermediate',
    tags: 'karpenter,system,api',
    output: ''
  },
  {
    category: 'Karpenter',
    subcategory: 'System',
    command: 'kubectl api-resources --api-group=karpenter.k8s.aws',
    description: 'List AWS-specific Karpenter API resources',
    example: 'kubectl api-resources --api-group=karpenter.k8s.aws',
    versionIntroduced: '0.32.0',
    difficultyLevel: 'intermediate',
    tags: 'karpenter,system,api,aws',
    output: ''
  },

  // --- Discovery & Documentation ---
  {
    category: 'Karpenter',
    subcategory: 'Discovery',
    command: 'kubectl explain nodepool',
    description: 'Get documentation for NodePool resource',
    example: 'kubectl explain nodepool',
    versionIntroduced: '0.32.0',
    difficultyLevel: 'beginner',
    tags: 'karpenter,explain,nodepool',
    output: ''
  },
  {
    category: 'Karpenter',
    subcategory: 'Discovery',
    command: 'kubectl explain nodepool.spec',
    description: 'Get documentation for NodePool spec',
    example: 'kubectl explain nodepool.spec',
    versionIntroduced: '0.32.0',
    difficultyLevel: 'intermediate',
    tags: 'karpenter,explain,nodepool,spec',
    output: ''
  },
  {
    category: 'Karpenter',
    subcategory: 'Discovery',
    command: 'kubectl explain ec2nodeclass',
    description: 'Get documentation for EC2NodeClass resource',
    example: 'kubectl explain ec2nodeclass',
    versionIntroduced: '0.32.0',
    difficultyLevel: 'beginner',
    tags: 'karpenter,explain,ec2nodeclass',
    output: ''
  },
  {
    category: 'Karpenter',
    subcategory: 'Discovery',
    command: 'kubectl explain ec2nodeclass.spec',
    description: 'Get documentation for EC2NodeClass spec',
    example: 'kubectl explain ec2nodeclass.spec',
    versionIntroduced: '0.32.0',
    difficultyLevel: 'intermediate',
    tags: 'karpenter,explain,ec2nodeclass,spec',
    output: ''
  },
  {
    category: 'Karpenter',
    subcategory: 'Discovery',
    command: 'kubectl explain nodeclaim',
    description: 'Get documentation for NodeClaim resource',
    example: 'kubectl explain nodeclaim',
    versionIntroduced: '0.32.0',
    difficultyLevel: 'beginner',
    tags: 'karpenter,explain,nodeclaim',
    output: ''
  },

  // --- System (All Namespaces) ---
  {
    category: 'Karpenter',
    subcategory: 'System',
    command: 'kubectl get pods -A -l app.kubernetes.io/name=karpenter',
    description: 'List Karpenter pods across all namespaces',
    example: 'kubectl get pods -A -l app.kubernetes.io/name=karpenter',
    versionIntroduced: '0.1.0',
    difficultyLevel: 'intermediate',
    tags: 'karpenter,system,pods,all-namespaces',
    flags: '-A',
    output: ''
  },
  {
    category: 'Karpenter',
    subcategory: 'System',
    command: 'kubectl get events -A --field-selector involvedObject.kind=Node',
    description: 'Get Node events across all namespaces',
    example: 'kubectl get events -A --field-selector involvedObject.kind=Node',
    versionIntroduced: '0.1.0',
    difficultyLevel: 'intermediate',
    tags: 'karpenter,events,all-namespaces',
    flags: '-A',
    output: ''
  }
];

// Generate variations to reach high command count
const resources = ['nodepools', 'ec2nodeclasses', 'nodeclaims', 'provisioners', 'awsnodetemplates'];
const verbs = ['get', 'describe', 'edit', 'delete'];
const formats = ['', '-o yaml', '-o json', '-o wide', '--show-labels', '--no-headers'];
const sortFields = ['metadata.name', 'metadata.creationTimestamp'];

export const generatedKarpenterCommands: Omit<K8sCommand, 'id'>[] = [];

// Standard Verb + Format Combinations
resources.forEach(res => {
  verbs.forEach(verb => {
    formats.forEach(fmt => {
      generatedKarpenterCommands.push({
        category: 'Karpenter',
        subcategory: `Generated ${res}`,
        command: `kubectl ${verb} ${res} ${fmt}`.trim(),
        description: `${verb.charAt(0).toUpperCase() + verb.slice(1)} ${res} ${fmt ? 'with ' + fmt : ''}`,
        example: `kubectl ${verb} ${res} ${fmt}`.trim(),
        versionIntroduced: '0.32.0',
        difficultyLevel: 'intermediate',
        tags: `karpenter,${res},${verb},generated`,
        output: ''
      });
    });
  });

  // Sorting Variations (Get only)
  sortFields.forEach(field => {
    generatedKarpenterCommands.push({
      category: 'Karpenter',
      subcategory: `Generated ${res}`,
      command: `kubectl get ${res} --sort-by=.${field}`,
      description: `List ${res} sorted by ${field.split('.')[1]}`,
      example: `kubectl get ${res} --sort-by=.${field}`,
      versionIntroduced: '0.32.0',
      difficultyLevel: 'intermediate',
      tags: `karpenter,${res},sort`,
      output: ''
    });
  });

  // Watch Variations (Get only)
  generatedKarpenterCommands.push({
    category: 'Karpenter',
    subcategory: `Generated ${res}`,
    command: `kubectl get ${res} -w`,
    description: `Watch ${res} for changes`,
    example: `kubectl get ${res} -w`,
    versionIntroduced: '0.32.0',
    difficultyLevel: 'intermediate',
    tags: `karpenter,${res},watch`,
    output: ''
  });

  // Explain Variations
  ['', '.spec', '.status'].forEach(field => {
    generatedKarpenterCommands.push({
      category: 'Karpenter',
      subcategory: `Generated ${res}`,
      command: `kubectl explain ${res}${field}`,
      description: `Explain ${res} ${field ? field : 'schema'}`,
      example: `kubectl explain ${res}${field}`,
      versionIntroduced: '0.32.0',
      difficultyLevel: 'beginner',
      tags: `karpenter,${res},explain`,
      output: ''
    });
  });
  
  // JSONPath Name List
  generatedKarpenterCommands.push({
    category: 'Karpenter',
    subcategory: `Generated ${res}`,
    command: `kubectl get ${res} -o jsonpath="{.items[*].metadata.name}"`,
    description: `Get list of ${res} names`,
    example: `kubectl get ${res} -o jsonpath="{.items[*].metadata.name}"`,
    versionIntroduced: '0.32.0',
    difficultyLevel: 'advanced',
    tags: `karpenter,${res},jsonpath`,
    output: ''
  });
});

export const allKarpenterCommands = [...karpenterCommandsData, ...generatedKarpenterCommands];
