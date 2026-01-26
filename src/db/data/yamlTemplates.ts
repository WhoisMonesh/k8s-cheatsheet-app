export const yamlTemplatesData = [
  {
    name: 'Basic Pod',
    category: 'Pods',
    description: 'Simple pod with a single container',
    yaml: `apiVersion: v1
kind: Pod
metadata:
  name: nginx-pod
  labels:
    app: nginx
spec:
  containers:
  - name: nginx
    image: nginx:1.19
    ports:
    - containerPort: 80`,
  },
  {
    name: 'Pod with Multiple Containers',
    category: 'Pods',
    description: 'Pod with main container and sidecar',
    yaml: `apiVersion: v1
kind: Pod
metadata:
  name: multi-container-pod
spec:
  containers:
  - name: app
    image: myapp:1.0
    ports:
    - containerPort: 8080
  - name: sidecar
    image: logging-agent:latest
    volumeMounts:
    - name: shared-logs
      mountPath: /var/log
  volumes:
  - name: shared-logs
    emptyDir: {}`,
  },
  {
    name: 'Pod with Resources',
    category: 'Pods',
    description: 'Pod with resource requests and limits',
    yaml: `apiVersion: v1
kind: Pod
metadata:
  name: resource-pod
spec:
  containers:
  - name: app
    image: myapp:1.0
    resources:
      requests:
        memory: "256Mi"
        cpu: "250m"
      limits:
        memory: "512Mi"
        cpu: "500m"`,
  },
  {
    name: 'Basic Deployment',
    category: 'Deployments',
    description: 'Deployment with 3 replicas',
    yaml: `apiVersion: apps/v1
kind: Deployment
metadata:
  name: nginx-deployment
  labels:
    app: nginx
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
      - name: nginx
        image: nginx:1.19
        ports:
        - containerPort: 80`,
  },
  {
    name: 'Deployment with Rolling Update',
    category: 'Deployments',
    description: 'Deployment with controlled rolling update strategy',
    yaml: `apiVersion: apps/v1
kind: Deployment
metadata:
  name: app-deployment
spec:
  replicas: 5
  strategy:
    type: RollingUpdate
    rollingUpdate:
      maxSurge: 1
      maxUnavailable: 1
  selector:
    matchLabels:
      app: myapp
  template:
    metadata:
      labels:
        app: myapp
    spec:
      containers:
      - name: app
        image: myapp:2.0
        readinessProbe:
          httpGet:
            path: /health
            port: 8080
          initialDelaySeconds: 5
          periodSeconds: 10
        livenessProbe:
          httpGet:
            path: /health
            port: 8080
          initialDelaySeconds: 15
          periodSeconds: 20`,
  },
  {
    name: 'ClusterIP Service',
    category: 'Services',
    description: 'Internal service accessible within cluster',
    yaml: `apiVersion: v1
kind: Service
metadata:
  name: backend-service
spec:
  type: ClusterIP
  selector:
    app: backend
  ports:
  - protocol: TCP
    port: 80
    targetPort: 8080`,
  },
  {
    name: 'NodePort Service',
    category: 'Services',
    description: 'Service accessible from outside via node port',
    yaml: `apiVersion: v1
kind: Service
metadata:
  name: frontend-service
spec:
  type: NodePort
  selector:
    app: frontend
  ports:
  - protocol: TCP
    port: 80
    targetPort: 8080
    nodePort: 30080`,
  },
  {
    name: 'LoadBalancer Service',
    category: 'Services',
    description: 'Service with external load balancer',
    yaml: `apiVersion: v1
kind: Service
metadata:
  name: web-service
spec:
  type: LoadBalancer
  selector:
    app: web
  ports:
  - protocol: TCP
    port: 80
    targetPort: 8080`,
  },
  {
    name: 'Basic Ingress',
    category: 'Networking',
    description: 'Ingress for HTTP routing',
    yaml: `apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  name: app-ingress
  annotations:
    nginx.ingress.kubernetes.io/rewrite-target: /
spec:
  rules:
  - host: example.com
    http:
      paths:
      - path: /
        pathType: Prefix
        backend:
          service:
            name: frontend-service
            port:
              number: 80`,
  },
  {
    name: 'Ingress with TLS',
    category: 'Networking',
    description: 'Ingress with HTTPS/TLS configuration',
    yaml: `apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  name: secure-ingress
spec:
  tls:
  - hosts:
    - example.com
    secretName: tls-secret
  rules:
  - host: example.com
    http:
      paths:
      - path: /
        pathType: Prefix
        backend:
          service:
            name: web-service
            port:
              number: 443`,
  },
  {
    name: 'ConfigMap',
    category: 'Configuration',
    description: 'ConfigMap with application configuration',
    yaml: `apiVersion: v1
kind: ConfigMap
metadata:
  name: app-config
data:
  database_url: "postgresql://db:5432"
  log_level: "info"
  config.yaml: |
    server:
      port: 8080
      host: 0.0.0.0`,
  },
  {
    name: 'Secret',
    category: 'Configuration',
    description: 'Secret for sensitive data',
    yaml: `apiVersion: v1
kind: Secret
metadata:
  name: db-secret
type: Opaque
data:
  username: YWRtaW4=
  password: cGFzc3dvcmQxMjM=`,
  },
  {
    name: 'PersistentVolumeClaim',
    category: 'Storage',
    description: 'PVC for requesting storage',
    yaml: `apiVersion: v1
kind: PersistentVolumeClaim
metadata:
  name: my-pvc
spec:
  accessModes:
  - ReadWriteOnce
  resources:
    requests:
      storage: 10Gi
  storageClassName: standard`,
  },
  {
    name: 'StatefulSet',
    category: 'Workloads',
    description: 'StatefulSet for stateful applications',
    yaml: `apiVersion: apps/v1
kind: StatefulSet
metadata:
  name: mysql
spec:
  serviceName: mysql
  replicas: 3
  selector:
    matchLabels:
      app: mysql
  template:
    metadata:
      labels:
        app: mysql
    spec:
      containers:
      - name: mysql
        image: mysql:8.0
        ports:
        - containerPort: 3306
        volumeMounts:
        - name: data
          mountPath: /var/lib/mysql
  volumeClaimTemplates:
  - metadata:
      name: data
    spec:
      accessModes: [ "ReadWriteOnce" ]
      resources:
        requests:
          storage: 10Gi`,
  },
  {
    name: 'DaemonSet',
    category: 'Workloads',
    description: 'DaemonSet for running on all nodes',
    yaml: `apiVersion: apps/v1
kind: DaemonSet
metadata:
  name: fluentd
  namespace: kube-system
spec:
  selector:
    matchLabels:
      name: fluentd
  template:
    metadata:
      labels:
        name: fluentd
    spec:
      containers:
      - name: fluentd
        image: fluentd:latest
        volumeMounts:
        - name: varlog
          mountPath: /var/log
      volumes:
      - name: varlog
        hostPath:
          path: /var/log`,
  },
  {
    name: 'Job',
    category: 'Workloads',
    description: 'One-time job execution',
    yaml: `apiVersion: batch/v1
kind: Job
metadata:
  name: batch-job
spec:
  template:
    spec:
      containers:
      - name: worker
        image: busybox
        command: ["echo", "Hello Kubernetes"]
      restartPolicy: Never
  backoffLimit: 4`,
  },
  {
    name: 'CronJob',
    category: 'Workloads',
    description: 'Scheduled job execution',
    yaml: `apiVersion: batch/v1
kind: CronJob
metadata:
  name: backup-job
spec:
  schedule: "0 2 * * *"
  jobTemplate:
    spec:
      template:
        spec:
          containers:
          - name: backup
            image: backup-tool:latest
            command: ["/bin/sh", "-c", "backup.sh"]
          restartPolicy: OnFailure`,
  },
  {
    name: 'HorizontalPodAutoscaler',
    category: 'Autoscaling',
    description: 'HPA for automatic scaling based on metrics',
    yaml: `apiVersion: autoscaling/v2
kind: HorizontalPodAutoscaler
metadata:
  name: app-hpa
spec:
  scaleTargetRef:
    apiVersion: apps/v1
    kind: Deployment
    name: app-deployment
  minReplicas: 2
  maxReplicas: 10
  metrics:
  - type: Resource
    resource:
      name: cpu
      target:
        type: Utilization
        averageUtilization: 80`,
  },
  {
    name: 'NetworkPolicy - Deny All',
    category: 'Security',
    description: 'Deny all ingress and egress traffic',
    yaml: `apiVersion: networking.k8s.io/v1
kind: NetworkPolicy
metadata:
  name: deny-all
spec:
  podSelector: {}
  policyTypes:
  - Ingress
  - Egress`,
  },
  {
    name: 'NetworkPolicy - Allow Specific',
    category: 'Security',
    description: 'Allow traffic from specific pods',
    yaml: `apiVersion: networking.k8s.io/v1
kind: NetworkPolicy
metadata:
  name: allow-frontend
spec:
  podSelector:
    matchLabels:
      app: backend
  policyTypes:
  - Ingress
  ingress:
  - from:
    - podSelector:
        matchLabels:
          app: frontend
    ports:
    - protocol: TCP
      port: 8080`,
  },
  {
    name: 'ServiceAccount',
    category: 'Security',
    description: 'Service account for pod authentication',
    yaml: `apiVersion: v1
kind: ServiceAccount
metadata:
  name: app-sa
  namespace: production`,
  },
  {
    name: 'Role',
    category: 'RBAC',
    description: 'Role with specific permissions',
    yaml: `apiVersion: rbac.authorization.k8s.io/v1
kind: Role
metadata:
  name: pod-reader
  namespace: default
rules:
- apiGroups: [""]
  resources: ["pods"]
  verbs: ["get", "watch", "list"]`,
  },
  {
    name: 'RoleBinding',
    category: 'RBAC',
    description: 'Bind role to service account',
    yaml: `apiVersion: rbac.authorization.k8s.io/v1
kind: RoleBinding
metadata:
  name: read-pods
  namespace: default
subjects:
- kind: ServiceAccount
  name: app-sa
  namespace: default
roleRef:
  kind: Role
  name: pod-reader
  apiGroup: rbac.authorization.k8s.io`,
  },
  {
    name: 'ResourceQuota',
    category: 'Resource Management',
    description: 'Limit resources in a namespace',
    yaml: `apiVersion: v1
kind: ResourceQuota
metadata:
  name: compute-quota
  namespace: development
spec:
  hard:
    requests.cpu: "10"
    requests.memory: 20Gi
    limits.cpu: "20"
    limits.memory: 40Gi
    pods: "50"`,
  },
  {
    name: 'LimitRange',
    category: 'Resource Management',
    description: 'Default limits for containers',
    yaml: `apiVersion: v1
kind: LimitRange
metadata:
  name: limit-range
  namespace: development
spec:
  limits:
  - default:
      memory: 512Mi
      cpu: 500m
    defaultRequest:
      memory: 256Mi
      cpu: 250m
    type: Container`,
  },
];
