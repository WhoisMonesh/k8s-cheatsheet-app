export const troubleshootingGuidesData = [
  {
    issue: "CrashLoopBackOff",
    category: "Pod Errors",
    description: "Pod is repeatedly crashing and restarting",
    symptoms:
      "Pod status shows CrashLoopBackOff, container restarts frequently",
    causes:
      "Application error, misconfiguration, missing dependencies, resource constraints",
    diagnosis: `# Check pod events
kubectl describe pod <pod-name>

# Check container logs
kubectl logs <pod-name>
kubectl logs <pod-name> --previous

# Check resource usage
kubectl top pod <pod-name>`,
    solutions: `1. Review application logs for errors
2. Verify environment variables and config
3. Check resource requests/limits
4. Ensure dependencies are available
5. Validate health checks configuration`,
  },
  {
    issue: "ImagePullBackOff",
    category: "Pod Errors",
    description: "Unable to pull container image",
    symptoms: "Pod status shows ImagePullBackOff or ErrImagePull",
    causes:
      "Invalid image name, authentication issues, network problems, image does not exist",
    diagnosis: `# Check pod events
kubectl describe pod <pod-name>

# Verify image exists
docker pull <image-name>

# Check image pull secrets
kubectl get secrets
kubectl describe secret <secret-name>`,
    solutions: `1. Verify correct image name and tag
2. Check image registry is accessible
3. Ensure imagePullSecrets are configured
4. Validate registry credentials
5. Check network connectivity to registry`,
  },
  {
    issue: "Pending Pods",
    category: "Pod Scheduling",
    description: "Pod remains in Pending state",
    symptoms: "Pod status stuck at Pending, not getting scheduled",
    causes:
      "Insufficient resources, node selector mismatch, taints, affinity rules",
    diagnosis: `# Check pod events
kubectl describe pod <pod-name>

# Check node resources
kubectl top nodes
kubectl describe nodes

# Check pod resource requests
kubectl get pod <pod-name> -o yaml | grep -A 5 resources`,
    solutions: `1. Add more nodes or increase capacity
2. Reduce resource requests
3. Check node labels match selectors
4. Review taints and tolerations
5. Verify pod affinity/anti-affinity rules`,
  },
  {
    issue: "Service Not Accessible",
    category: "Networking",
    description: "Cannot access service endpoint",
    symptoms:
      "Connection timeout, refused connections, DNS resolution failures",
    causes:
      "Wrong service type, selector mismatch, network policy blocking, endpoints not ready",
    diagnosis: `# Check service details
kubectl describe service <service-name>

# Check endpoints
kubectl get endpoints <service-name>

# Test DNS resolution
kubectl run -it --rm debug --image=busybox --restart=Never -- nslookup <service-name>

# Check network policies
kubectl get networkpolicies`,
    solutions: `1. Verify service selector matches pod labels
2. Ensure pods are Running and Ready
3. Check network policies allow traffic
4. Validate service port configuration
5. Test connectivity from within cluster first`,
  },
  {
    issue: "DNS Resolution Failures",
    category: "Networking",
    description: "Pods cannot resolve service names",
    symptoms: "nslookup fails, connection errors with service names",
    causes: "CoreDNS issues, network policy blocking, wrong service name",
    diagnosis: `# Check CoreDNS pods
kubectl get pods -n kube-system -l k8s-app=kube-dns

# Test DNS from pod
kubectl run -it --rm debug --image=busybox --restart=Never -- nslookup kubernetes.default

# Check CoreDNS logs
kubectl logs -n kube-system -l k8s-app=kube-dns`,
    solutions: `1. Restart CoreDNS pods if unhealthy
2. Use fully qualified domain names (FQDN)
3. Check network policies
4. Verify service exists in correct namespace
5. Check pod's DNS configuration`,
  },
  {
    issue: "PersistentVolumeClaim Pending",
    category: "Storage",
    description: "PVC stuck in Pending state",
    symptoms: "PVC status shows Pending, not bound to PV",
    causes:
      "No matching PV, storage class issues, insufficient capacity, access mode mismatch",
    diagnosis: `# Check PVC status
kubectl describe pvc <pvc-name>

# Check available PVs
kubectl get pv

# Check storage class
kubectl get storageclass
kubectl describe storageclass <class-name>`,
    solutions: `1. Create PV with matching specifications
2. Verify storage class exists and is default
3. Check available storage capacity
4. Match access modes (RWO, RWX, ROX)
5. Review storage provisioner logs`,
  },
  {
    issue: "OOMKilled Pods",
    category: "Resource Management",
    description: "Pod killed due to out of memory",
    symptoms: "Pod status shows OOMKilled, frequent restarts",
    causes: "Memory limit too low, memory leak, unexpected load spike",
    diagnosis: `# Check pod events
kubectl describe pod <pod-name>

# Check memory usage
kubectl top pod <pod-name>

# Review resource limits
kubectl get pod <pod-name> -o jsonpath='{.spec.containers[*].resources}'`,
    solutions: `1. Increase memory limits
2. Investigate application memory usage
3. Fix memory leaks in application
4. Add memory requests for better scheduling
5. Consider horizontal scaling`,
  },
  {
    issue: "Unauthorized API Requests",
    category: "RBAC & Security",
    description: "Permission denied errors when accessing resources",
    symptoms: "Forbidden (403) errors, unauthorized access messages",
    causes:
      "Missing RBAC permissions, wrong service account, expired credentials",
    diagnosis: `# Check current permissions
kubectl auth can-i <verb> <resource>

# Check as specific user
kubectl auth can-i create pods --as=user@example.com

# List all permissions
kubectl auth can-i --list

# Check service account
kubectl describe serviceaccount <sa-name>`,
    solutions: `1. Create appropriate Role/ClusterRole
2. Bind role to user/serviceaccount
3. Verify RBAC is enabled
4. Check service account tokens
5. Review audit logs for details`,
  },
  {
    issue: "Node NotReady",
    category: "Node Issues",
    description: "Node marked as NotReady",
    symptoms: "kubectl get nodes shows NotReady status",
    causes:
      "Kubelet issues, disk pressure, network problems, insufficient resources",
    diagnosis: `# Check node status
kubectl describe node <node-name>

# Check node conditions
kubectl get node <node-name> -o jsonpath='{.status.conditions}'

# SSH to node and check kubelet
systemctl status kubelet
journalctl -u kubelet -f`,
    solutions: `1. Restart kubelet service
2. Free up disk space
3. Check network connectivity
4. Review kubelet logs
5. Verify node resources`,
  },
  {
    issue: "Deployment Rollout Stuck",
    category: "Deployments",
    description: "Deployment update not progressing",
    symptoms: "New pods not starting, old pods not terminating",
    causes: "Failed health checks, insufficient resources, image pull errors",
    diagnosis: `# Check rollout status
kubectl rollout status deployment/<deployment-name>

# Check rollout history
kubectl rollout history deployment/<deployment-name>

# Check deployment events
kubectl describe deployment <deployment-name>

# Check replica sets
kubectl get rs -l app=<app-label>`,
    solutions: `1. Fix health check configuration
2. Increase resource limits
3. Fix image pull issues
4. Adjust rollout strategy
5. Rollback if needed: kubectl rollout undo deployment/<name>`,
  },
  {
    issue: "ConfigMap/Secret Not Updating",
    category: "Configuration",
    description: "Pod not seeing updated ConfigMap or Secret",
    symptoms: "Application using old configuration values",
    causes: "Pod needs restart, mounted as subPath, using envFrom",
    diagnosis: `# Check ConfigMap/Secret updated
kubectl get configmap <name> -o yaml
kubectl describe pod <pod-name>

# Check mount type
kubectl get pod <pod-name> -o yaml | grep -A 10 volumeMounts`,
    solutions: `1. Restart pod to reload config
2. Use volume mounts instead of env vars for auto-reload
3. Implement config reload in application
4. Use rollout restart: kubectl rollout restart deployment/<name>
5. Avoid subPath mounts for configs that need updates`,
  },
  {
    issue: "High Latency/Slow Performance",
    category: "Performance",
    description: "Application experiencing high latency",
    symptoms: "Slow response times, timeouts, poor user experience",
    causes:
      "Resource constraints, inefficient code, network issues, database problems",
    diagnosis: `# Check resource usage
kubectl top pods
kubectl top nodes

# Check pod logs for errors
kubectl logs <pod-name>

# Check network latency
kubectl exec <pod-name> -- ping <service>

# Check for throttling
kubectl describe pod <pod-name> | grep -i throttl`,
    solutions: `1. Increase CPU/memory resources
2. Scale horizontally with HPA
3. Optimize application code
4. Add caching layers
5. Check database performance
6. Review network policies`,
  },
];
