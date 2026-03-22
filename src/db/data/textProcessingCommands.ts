export const textProcessingCommandsData = [
  // JSON Processing with jq
  {
    category: "JSON Processing",
    subcategory: "Pod Analysis",
    command: "kubectl get pods -o json | jq '.items[].metadata.name'",
    description: "Extract only pod names from all pods",
    example: "kubectl get pods -o json | jq '.items[].metadata.name'",
    versionIntroduced: "1.0",
    difficultyLevel: "intermediate",
    tags: "jq,json,pods,names",
    flags: "-o json",
    output: '"pod-1"\n"pod-2"',
  },
  {
    category: "JSON Processing",
    subcategory: "Pod Analysis",
    command: "kubectl get pods -A -o json | jq '.items[].metadata.name'",
    description: "Extract only pod names from all pods in all namespaces",
    example: "kubectl get pods -A -o json | jq '.items[].metadata.name'",
    versionIntroduced: "1.0",
    difficultyLevel: "intermediate",
    tags: "jq,json,pods,names,all-namespaces",
    flags: "-o json -A",
    output: '"pod-1"\n"pod-2"',
  },
  {
    category: "JSON Processing",
    subcategory: "Pod Analysis",
    command:
      "kubectl get pods -o json | jq '.items[] | select(.status.phase==\"Running\") | .metadata.name'",
    description: "List names of all running pods",
    example:
      "kubectl get pods -o json | jq '.items[] | select(.status.phase==\"Running\") | .metadata.name'",
    versionIntroduced: "1.0",
    difficultyLevel: "intermediate",
    tags: "jq,json,pods,running,filter",
    flags: "-o json",
    output: '"nginx-pod"\n"db-pod"',
  },
  {
    category: "JSON Processing",
    subcategory: "Pod Analysis",
    command:
      "kubectl get pods -A -o json | jq '.items[] | select(.status.phase==\"Running\") | .metadata.name'",
    description: "List names of all running pods in all namespaces",
    example:
      "kubectl get pods -A -o json | jq '.items[] | select(.status.phase==\"Running\") | .metadata.name'",
    versionIntroduced: "1.0",
    difficultyLevel: "intermediate",
    tags: "jq,json,pods,running,filter,all-namespaces",
    flags: "-o json -A",
    output: '"nginx-pod"\n"db-pod"',
  },
  {
    category: "JSON Processing",
    subcategory: "Pod Analysis",
    command:
      "kubectl get pods -o json | jq '.items[] | select(.spec.containers[].image | contains(\"nginx\")) | .metadata.name'",
    description: "Find pods running nginx images",
    example:
      "kubectl get pods -o json | jq '.items[] | select(.spec.containers[].image | contains(\"nginx\")) | .metadata.name'",
    versionIntroduced: "1.0",
    difficultyLevel: "intermediate",
    tags: "jq,json,pods,images,nginx",
    flags: "-o json",
    output: '"nginx-pod"\n"nginx-proxy"',
  },
  {
    category: "JSON Processing",
    subcategory: "Resource Usage",
    command:
      "kubectl get nodes -o json | jq '.items[] | {name: .metadata.name, cpu: .status.capacity.cpu}'",
    description: "Extract node CPU capacity",
    example:
      "kubectl get nodes -o json | jq '.items[] | {name: .metadata.name, cpu: .status.capacity.cpu}'",
    versionIntroduced: "1.0",
    difficultyLevel: "intermediate",
    tags: "jq,json,nodes,cpu,capacity",
    flags: "-o json",
    output:
      '{\n  "name": "worker-1",\n  "cpu": "4"\n}\n{\n  "name": "worker-2",\n  "cpu": "8"\n}',
  },
  {
    category: "JSON Processing",
    subcategory: "Events",
    command:
      "kubectl get events -o json | jq '.items[] | select(.type==\"Warning\") | {object: .involvedObject.name, message: .message}'",
    description: "List all warning events with object name and message",
    example:
      "kubectl get events -o json | jq '.items[] | select(.type==\"Warning\") | {object: .involvedObject.name, message: .message}'",
    versionIntroduced: "1.0",
    difficultyLevel: "intermediate",
    tags: "jq,json,events,warnings",
    flags: "-o json",
    output:
      '{\n  "object": "nginx-pod",\n  "message": "Failed to pull image"\n}\n{\n  "object": "db-pod",\n  "message": "Liveness probe failed"\n}',
  },
  // Text Processing with awk
  {
    category: "Text Processing",
    subcategory: "Filtering",
    command:
      'kubectl get pods --all-namespaces | awk \'$4 == "Error" || $4 == "CrashLoopBackOff" {print $1, $2}\'',
    description:
      "Find pods in Error or CrashLoopBackOff state across all namespaces",
    example:
      'kubectl get pods --all-namespaces | awk \'$4 == "Error" || $4 == "CrashLoopBackOff" {print $1, $2}\'',
    versionIntroduced: "1.0",
    difficultyLevel: "intermediate",
    tags: "awk,pods,error,crashloop",
    flags: "--all-namespaces",
    output: "nginx-pod-1 Error\nnginx-pod-2 CrashLoopBackOff",
  },
  {
    category: "Text Processing",
    subcategory: "Filtering",
    command:
      'kubectl get pods | awk \'$3 == "Error" || $3 == "CrashLoopBackOff" {print $1}\'',
    description:
      "Find pods in Error or CrashLoopBackOff state in default namespace",
    example:
      'kubectl get pods | awk \'$3 == "Error" || $3 == "CrashLoopBackOff" {print $1}\'',
    versionIntroduced: "1.0",
    difficultyLevel: "intermediate",
    tags: "awk,pods,error,crashloop",
    flags: "",
    output: "nginx-pod-1\nnginx-pod-2",
  },
  {
    category: "Text Processing",
    subcategory: "Filtering",
    command:
      'kubectl get pods -n default | awk \'$3 == "Error" || $3 == "CrashLoopBackOff" {print $1}\'',
    description:
      "Find pods in Error or CrashLoopBackOff state in default namespace explicitly",
    example:
      'kubectl get pods -n default | awk \'$3 == "Error" || $3 == "CrashLoopBackOff" {print $1}\'',
    versionIntroduced: "1.0",
    difficultyLevel: "intermediate",
    tags: "awk,pods,error,crashloop,default,namespace",
    flags: "-n default",
    output: "nginx-pod-1\nnginx-pod-2",
  },
  {
    category: "Text Processing",
    subcategory: "Filtering",
    command:
      'kubectl get pods -n <namespace> | awk \'$3 == "Error" || $3 == "CrashLoopBackOff" {print $1}\'',
    description:
      "Find pods in Error or CrashLoopBackOff state in custom namespace",
    example:
      'kubectl get pods -n <namespace> | awk \'$3 == "Error" || $3 == "CrashLoopBackOff" {print $1}\'',
    versionIntroduced: "1.0",
    difficultyLevel: "intermediate",
    tags: "awk,pods,error,crashloop,custom,namespace",
    flags: "-n <namespace>",
    output: "nginx-pod-1\nnginx-pod-2",
  },
  {
    category: "Text Processing",
    subcategory: "Filtering",
    command: "kubectl get nodes | awk 'NR>1 {print $1}'",
    description: "Print only node names (skip header)",
    example: "kubectl get nodes | awk 'NR>1 {print $1}'",
    versionIntroduced: "1.0",
    difficultyLevel: "beginner",
    tags: "awk,nodes,names",
    flags: "",
    output: "node-1\nnode-2\ncontrol-plane",
  },
  {
    category: "Text Processing",
    subcategory: "Stats",
    command:
      "kubectl top pods --all-namespaces | awk 'NR>1 {sum+=$3} END {print sum}'",
    description:
      "Calculate total CPU usage of all pods (approximate from top output)",
    example:
      "kubectl top pods --all-namespaces | awk 'NR>1 {sum+=$3} END {print sum}'",
    versionIntroduced: "1.8",
    difficultyLevel: "advanced",
    tags: "awk,top,cpu,sum",
    flags: "--all-namespaces",
    output: "1250",
  },
  {
    category: "Text Processing",
    subcategory: "Stats",
    command: "kubectl top pods | awk 'NR>1 {sum+=$3} END {print sum}'",
    description: "Calculate total CPU usage of pods in default namespace",
    example: "kubectl top pods | awk 'NR>1 {sum+=$3} END {print sum}'",
    versionIntroduced: "1.8",
    difficultyLevel: "advanced",
    tags: "awk,top,cpu,sum",
    flags: "",
    output: "450",
  },
  // Advanced jq/yq
  {
    category: "JSON Processing",
    subcategory: "Secrets",
    command:
      "kubectl get secret my-secret -o json | jq -r '.data | map_values(@base64d)'",
    description: "Decode all values in a secret",
    example:
      "kubectl get secret my-secret -o json | jq -r '.data | map_values(@base64d)'",
    versionIntroduced: "1.0",
    difficultyLevel: "advanced",
    tags: "jq,secrets,decode,base64",
    flags: "-o json",
    output: '{\n  "password": "my-secret-password",\n  "username": "admin"\n}',
  },
  {
    category: "Text Processing",
    subcategory: "Logs",
    command: 'kubectl logs -l app=nginx | grep "Error" | cut -d " " -f 1,2',
    description: "Extract timestamps of error logs from nginx pods",
    example: 'kubectl logs -l app=nginx | grep "Error" | cut -d " " -f 1,2',
    versionIntroduced: "1.0",
    difficultyLevel: "intermediate",
    tags: "grep,cut,logs,error",
    flags: "-l",
    output: "2024-01-26T10:00:01\n2024-01-26T10:00:05",
  },
  // More variations to increase count
  {
    category: "JSON Processing",
    subcategory: "ConfigMap Data",
    command: "kubectl get configmap my-config -o json | jq '.data'",
    description:
      "Extract and display the data section from a ConfigMap in JSON format",
    example: "kubectl get configmap my-config -o json | jq '.data'",
    versionIntroduced: "1.0",
    difficultyLevel: "intermediate",
    tags: "jq,configmap,json,data",
    flags: "-o json",
    output: '{\n  "db_host": "db.example.com",\n  "db_port": "5432"\n}',
  },
  {
    category: "Text Processing",
    subcategory: "Log Search",
    command: 'kubectl logs my-pod | grep "Exception"',
    description: 'Search for "Exception" string in the logs of a specific pod',
    example: 'kubectl logs my-pod | grep "Exception"',
    versionIntroduced: "1.0",
    difficultyLevel: "beginner",
    tags: "grep,logs,search,exception",
    flags: "",
    output:
      'java.lang.NullPointerException: ...\nException in thread "main" ...',
  },
  {
    category: "Text Processing",
    subcategory: "Log Search",
    command: 'kubectl logs -l app=nginx | grep "Error"',
    description:
      'Search for "Error" string in logs from all pods matching label app=nginx',
    example: 'kubectl logs -l app=nginx | grep "Error"',
    versionIntroduced: "1.0",
    difficultyLevel: "intermediate",
    tags: "grep,logs,label,search",
    flags: "-l",
    output: "[Error] Connection timed out\n[Error] Database unreachable",
  },
  {
    category: "Text Processing",
    subcategory: "Log Search",
    command: 'kubectl logs -l app=nginx --all-namespaces | grep "Error"',
    description:
      'Search for "Error" string in logs from all pods matching label app=nginx in all namespaces',
    example: 'kubectl logs -l app=nginx --all-namespaces | grep "Error"',
    versionIntroduced: "1.0",
    difficultyLevel: "intermediate",
    tags: "grep,logs,label,search,all-namespaces",
    flags: "-l --all-namespaces",
    output: "[Error] Connection timed out\n[Error] Database unreachable",
  },
  {
    category: "Text Processing",
    subcategory: "Log Search",
    command: 'kubectl logs my-pod | grep -i "error"',
    description: 'Case-insensitive search for "error" in pod logs',
    example: 'kubectl logs my-pod | grep -i "error"',
    versionIntroduced: "1.0",
    difficultyLevel: "beginner",
    tags: "grep,logs,case-insensitive",
    flags: "",
    output: "[Error] Connection timed out\n[error] database unreachable",
  },
  {
    category: "Text Processing",
    subcategory: "Log Search",
    command: 'kubectl logs my-pod | grep -v "Health"',
    description: 'Exclude lines containing "Health" from pod logs',
    example: 'kubectl logs my-pod | grep -v "Health"',
    versionIntroduced: "1.0",
    difficultyLevel: "intermediate",
    tags: "grep,logs,exclude,invert",
    flags: "",
    output: "[INFO] Starting application...\n[INFO] Connected to DB",
  },
  {
    category: "JSON Processing",
    subcategory: "Resource Quotas",
    command: "kubectl get resourcequota -o json | jq '.items[].status.hard'",
    description: "Display hard limits for all ResourceQuotas",
    example: "kubectl get resourcequota -o json | jq '.items[].status.hard'",
    versionIntroduced: "1.0",
    difficultyLevel: "intermediate",
    tags: "jq,resourcequota,limits",
    flags: "-o json",
    output: '{\n  "cpu": "20",\n  "memory": "100Gi",\n  "pods": "10"\n}',
  },
  {
    category: "JSON Processing",
    subcategory: "Service Accounts",
    command:
      "kubectl get serviceaccounts -o json | jq '.items[].metadata.name'",
    description: "List all ServiceAccount names",
    example:
      "kubectl get serviceaccounts -o json | jq '.items[].metadata.name'",
    versionIntroduced: "1.0",
    difficultyLevel: "beginner",
    tags: "jq,serviceaccounts,names",
    flags: "-o json",
    output: '"default-token-abcde"\n"builder-token-12345"',
  },
  {
    category: "JSON Processing",
    subcategory: "Nodes",
    command:
      'kubectl get nodes -o json | jq \'.items[] | select(.status.conditions[] | select(.type=="Ready" and .status=="True")) | .metadata.name\'',
    description: "List names of all Ready nodes",
    example:
      'kubectl get nodes -o json | jq \'.items[] | select(.status.conditions[] | select(.type=="Ready" and .status=="True")) | .metadata.name\'',
    versionIntroduced: "1.0",
    difficultyLevel: "advanced",
    tags: "jq,nodes,ready,filter",
    flags: "-o json",
    output: '"worker-1"\n"worker-2"\n"control-plane"',
  },
];
