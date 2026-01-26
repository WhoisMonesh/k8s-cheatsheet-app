export const bestPracticesData = [
  {
    category: 'Resource Management',
    title: 'Always Set Resource Requests and Limits',
    description: 'Define CPU and memory requests/limits for all containers to ensure proper scheduling and prevent resource exhaustion',
    example: `resources:
  requests:
    memory: "256Mi"
    cpu: "250m"
  limits:
    memory: "512Mi"
    cpu: "500m"`,
    impact: 'High',
    tags: 'resources,scheduling,stability',
  },
  {
    category: 'Health Checks',
    title: 'Implement Readiness and Liveness Probes',
    description: 'Use health probes to ensure pods are ready to receive traffic and automatically restart unhealthy containers',
    example: `livenessProbe:
  httpGet:
    path: /healthz
    port: 8080
  initialDelaySeconds: 15
  periodSeconds: 20
readinessProbe:
  httpGet:
    path: /ready
    port: 8080
  initialDelaySeconds: 5
  periodSeconds: 10`,
    impact: 'High',
    tags: 'health,reliability,availability',
  },
  {
    category: 'Security',
    title: 'Run Containers as Non-Root',
    description: 'Always run containers with non-root users to minimize security risks',
    example: `securityContext:
  runAsNonRoot: true
  runAsUser: 1000
  fsGroup: 2000
  capabilities:
    drop:
      - ALL`,
    impact: 'Critical',
    tags: 'security,compliance,best-practice',
  },
  {
    category: 'Security',
    title: 'Use Network Policies',
    description: 'Implement network policies to control traffic between pods and enforce zero-trust networking',
    example: `apiVersion: networking.k8s.io/v1
kind: NetworkPolicy
metadata:
  name: api-allow
spec:
  podSelector:
    matchLabels:
      app: api
  policyTypes:
  - Ingress
  ingress:
  - from:
    - podSelector:
        matchLabels:
          app: frontend`,
    impact: 'High',
    tags: 'security,networking,isolation',
  },
  {
    category: 'Configuration',
    title: 'Use ConfigMaps and Secrets',
    description: 'Externalize configuration using ConfigMaps and sensitive data using Secrets instead of hardcoding values',
    example: `env:
- name: DATABASE_URL
  valueFrom:
    configMapKeyRef:
      name: app-config
      key: db_url
- name: DB_PASSWORD
  valueFrom:
    secretKeyRef:
      name: db-secret
      key: password`,
    impact: 'High',
    tags: 'configuration,security,12factor',
  },
  {
    category: 'Labels & Annotations',
    title: 'Use Consistent Labeling',
    description: 'Apply consistent labels to all resources for better organization and selection',
    example: `metadata:
  labels:
    app: myapp
    version: v1.2.3
    environment: production
    team: backend`,
    impact: 'Medium',
    tags: 'organization,management,selection',
  },
  {
    category: 'Deployments',
    title: 'Use Rolling Updates with Health Checks',
    description: 'Configure rolling updates with proper health checks to ensure zero-downtime deployments',
    example: `strategy:
  type: RollingUpdate
  rollingUpdate:
    maxSurge: 1
    maxUnavailable: 0
spec:
  minReadySeconds: 10
  progressDeadlineSeconds: 600`,
    impact: 'High',
    tags: 'deployment,availability,updates',
  },
  {
    category: 'Namespaces',
    title: 'Use Namespaces for Isolation',
    description: 'Separate environments and teams using namespaces with resource quotas',
    example: `# Create namespace
kubectl create namespace production

# Set resource quota
kubectl create quota prod-quota \\
  --hard=cpu=20,memory=40Gi,pods=50 \\
  -n production`,
    impact: 'Medium',
    tags: 'isolation,organization,multitenancy',
  },
  {
    category: 'Storage',
    title: 'Use StorageClasses for Dynamic Provisioning',
    description: 'Leverage storage classes for dynamic volume provisioning instead of manual PV creation',
    example: `apiVersion: v1
kind: PersistentVolumeClaim
metadata:
  name: app-storage
spec:
  accessModes:
    - ReadWriteOnce
  storageClassName: ssd
  resources:
    requests:
      storage: 10Gi`,
    impact: 'Medium',
    tags: 'storage,automation,provisioning',
  },
  {
    category: 'Monitoring',
    title: 'Enable Metrics and Logging',
    description: 'Implement comprehensive monitoring and centralized logging for observability',
    example: `# Check metrics server
kubectl top nodes
kubectl top pods

# Centralized logging
kubectl logs -f deployment/app --all-containers=true

# Use labels for log aggregation
metadata:
  labels:
    app: myapp
    log-level: info`,
    impact: 'High',
    tags: 'monitoring,observability,logging',
  },
  {
    category: 'High Availability',
    title: 'Run Multiple Replicas',
    description: 'Always run multiple replicas of critical applications across different nodes',
    example: `spec:
  replicas: 3
  affinity:
    podAntiAffinity:
      preferredDuringSchedulingIgnoredDuringExecution:
      - weight: 100
        podAffinityTerm:
          labelSelector:
            matchLabels:
              app: myapp
          topologyKey: kubernetes.io/hostname`,
    impact: 'Critical',
    tags: 'availability,reliability,redundancy',
  },
  {
    category: 'Autoscaling',
    title: 'Implement Horizontal Pod Autoscaling',
    description: 'Use HPA to automatically scale applications based on metrics',
    example: `apiVersion: autoscaling/v2
kind: HorizontalPodAutoscaler
metadata:
  name: app-hpa
spec:
  scaleTargetRef:
    apiVersion: apps/v1
    kind: Deployment
    name: app
  minReplicas: 2
  maxReplicas: 10
  metrics:
  - type: Resource
    resource:
      name: cpu
      target:
        type: Utilization
        averageUtilization: 70`,
    impact: 'High',
    tags: 'scaling,performance,cost-optimization',
  },
  {
    category: 'RBAC',
    title: 'Apply Principle of Least Privilege',
    description: 'Grant minimum required permissions using RBAC',
    example: `apiVersion: rbac.authorization.k8s.io/v1
kind: Role
metadata:
  name: pod-reader
rules:
- apiGroups: [""]
  resources: ["pods"]
  verbs: ["get", "list"]
# No write permissions`,
    impact: 'Critical',
    tags: 'security,rbac,permissions',
  },
  {
    category: 'Images',
    title: 'Use Specific Image Tags',
    description: 'Never use :latest tag; always specify exact version tags for reproducibility',
    example: `# Bad
image: nginx:latest

# Good
image: nginx:1.21.6-alpine`,
    impact: 'High',
    tags: 'images,versioning,reproducibility',
  },
  {
    category: 'Updates',
    title: 'Use kubectl apply Instead of create',
    description: 'Prefer declarative management with apply for better GitOps workflows',
    example: `# Use this
kubectl apply -f deployment.yaml

# Instead of
kubectl create -f deployment.yaml`,
    impact: 'Medium',
    tags: 'gitops,management,declarative',
  },
  {
    category: 'Resource Cleanup',
    title: 'Set TTL for Finished Jobs',
    description: 'Automatically clean up completed jobs to prevent resource accumulation',
    example: `apiVersion: batch/v1
kind: Job
metadata:
  name: cleanup-job
spec:
  ttlSecondsAfterFinished: 3600
  template:
    spec:
      containers:
      - name: cleanup
        image: cleanup:latest`,
    impact: 'Medium',
    tags: 'cleanup,maintenance,resources',
  },
  {
    category: 'Pod Disruption',
    title: 'Define Pod Disruption Budgets',
    description: 'Use PDBs to ensure availability during voluntary disruptions',
    example: `apiVersion: policy/v1
kind: PodDisruptionBudget
metadata:
  name: app-pdb
spec:
  minAvailable: 2
  selector:
    matchLabels:
      app: myapp`,
    impact: 'High',
    tags: 'availability,maintenance,disruption',
  },
  {
    category: 'Environment Parity',
    title: 'Maintain Environment Parity',
    description: 'Keep development, staging, and production environments as similar as possible',
    example: `# Use kustomize overlays
base/
  deployment.yaml
overlays/
  dev/
    kustomization.yaml
  staging/
    kustomization.yaml
  production/
    kustomization.yaml`,
    impact: 'High',
    tags: 'environments,consistency,deployment',
  },
  {
    category: 'Secrets Management',
    title: 'Encrypt Secrets at Rest',
    description: 'Enable encryption for secrets stored in etcd',
    example: `# Enable encryption provider
apiVersion: apiserver.config.k8s.io/v1
kind: EncryptionConfiguration
resources:
  - resources:
    - secrets
    providers:
    - aescbc:
        keys:
        - name: key1
          secret: <base64-encoded-secret>`,
    impact: 'Critical',
    tags: 'security,secrets,encryption',
  },
  {
    category: 'Startup Performance',
    title: 'Use Init Containers for Prerequisites',
    description: 'Separate initialization logic using init containers',
    example: `spec:
  initContainers:
  - name: init-db
    image: busybox
    command: ['sh', '-c', 'until nc -z db 5432; do sleep 1; done']
  containers:
  - name: app
    image: myapp:1.0`,
    impact: 'Medium',
    tags: 'initialization,dependencies,startup',
  },
];
