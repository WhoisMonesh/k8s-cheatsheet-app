export const scenariosData = [
  {
    id: 1,
    title: 'Debug a CrashLoopBackOff Pod',
    description: 'Step-by-step guide to diagnosing why a pod is crashing repeatedly.',
    difficulty: 'beginner',
    category: 'Troubleshooting',
    steps: [
      {
        order: 1,
        command: 'kubectl get pods',
        description: 'Check the status of your pods.',
        explanation: 'Identify the pod that is in CrashLoopBackOff state.',
        output: 'NAME                     READY   STATUS             RESTARTS   AGE\nnginx-7cdbd8cdc9-j8f6d   0/1     CrashLoopBackOff   5          3m'
      },
      {
        order: 2,
        command: 'kubectl describe pod <pod-name>',
        description: 'Inspect pod events and status.',
        explanation: 'Look for "Events" at the bottom. Check "State" and "Last State" of containers.',
        output: 'Events:\n  Type     Reason     Age                  From               Message\n  ----     ------     ----                 ----               -------\n  Normal   Scheduled  3m                   default-scheduler  Successfully assigned default/nginx-7cdbd8cdc9-j8f6d to node-1\n  Warning  BackOff    10s (x12 over 3m)    kubelet            Back-off restarting failed container'
      },
      {
        order: 3,
        command: 'kubectl logs <pod-name>',
        description: 'Check current logs.',
        explanation: 'See if the application printed an error before crashing.',
        output: '/docker-entrypoint.sh: /docker-entrypoint.d/ is not empty\nnginx: [emerg] bind() to 0.0.0.0:80 failed (98: Address already in use)'
      },
      {
        order: 4,
        command: 'kubectl logs <pod-name> --previous',
        description: 'Check logs from the previous instance.',
        explanation: 'If the pod crashes immediately, the current logs might be empty. Previous logs show why it died last time.',
        output: 'nginx: [emerg] bind() to 0.0.0.0:80 failed (98: Address already in use)'
      }
    ]
  },
  {
    id: 2,
    title: 'Expose a Deployment as a Service',
    description: 'Create a Deployment and expose it to external traffic.',
    difficulty: 'beginner',
    category: 'Networking',
    steps: [
      {
        order: 1,
        command: 'kubectl create deployment nginx --image=nginx',
        description: 'Create a deployment.',
        explanation: 'This spins up the pods.',
        output: 'deployment.apps/nginx created'
      },
      {
        order: 2,
        command: 'kubectl expose deployment nginx --port=80 --type=LoadBalancer',
        description: 'Expose the deployment.',
        explanation: 'Creates a Service of type LoadBalancer to allow external access.',
        output: 'service/nginx exposed'
      },
      {
        order: 3,
        command: 'kubectl get services',
        description: 'Verify the service.',
        explanation: 'Wait for the EXTERNAL-IP to be assigned.',
        output: 'NAME         TYPE           CLUSTER-IP      EXTERNAL-IP     PORT(S)        AGE\nkubernetes   ClusterIP      10.96.0.1       <none>          443/TCP        4d\nnginx        LoadBalancer   10.96.120.211   192.168.1.100   80:31234/TCP   10s'
      }
    ]
  },
  {
    id: 3,
    title: 'Update and Rollback an App',
    description: 'Perform a rolling update and undo it if it fails.',
    difficulty: 'intermediate',
    category: 'Application Management',
    steps: [
      {
        order: 1,
        command: 'kubectl set image deployment/myapp myapp=nginx:1.16.1',
        description: 'Update the image.',
        explanation: 'Triggers a rolling update.',
        output: 'deployment.apps/myapp image updated'
      },
      {
        order: 2,
        command: 'kubectl rollout status deployment/myapp',
        description: 'Monitor the rollout.',
        explanation: 'Watch the progress of the update.',
        output: 'deployment "myapp" successfully rolled out'
      },
      {
        order: 3,
        command: 'kubectl rollout undo deployment/myapp',
        description: 'Rollback the update.',
        explanation: 'If something goes wrong, revert to the previous stable version.',
        output: 'deployment.apps/myapp rolled back'
      }
    ]
  },
  {
    id: 4,
    title: 'Configure Horizontal Pod Autoscaling',
    description: 'Automatically scale pods based on CPU utilization.',
    difficulty: 'intermediate',
    category: 'Scaling',
    steps: [
      {
        order: 1,
        command: 'kubectl autoscale deployment php-apache --cpu-percent=50 --min=1 --max=10',
        description: 'Create an HPA.',
        explanation: 'Sets up autoscaling to maintain 50% CPU usage across pods.',
        output: 'horizontalpodautoscaler.autoscaling/php-apache autoscaled'
      },
      {
        order: 2,
        command: 'kubectl get hpa',
        description: 'Check HPA status.',
        explanation: 'View current replicas and target utilization.',
        output: 'NAME         REFERENCE               TARGETS   MINPODS   MAXPODS   REPLICAS   AGE\nphp-apache   Deployment/php-apache   0%/50%    1         10        1          30s'
      },
      {
        order: 3,
        command: 'kubectl get hpa php-apache -o yaml',
        description: 'View HPA details.',
        explanation: 'Inspect the full configuration in YAML format.',
        output: 'apiVersion: autoscaling/v1\nkind: HorizontalPodAutoscaler\nmetadata:\n  name: php-apache\n...'
      }
    ]
  },
  {
    id: 5,
    title: 'Create & Mount ConfigMap',
    description: 'Inject configuration data into a pod using a ConfigMap.',
    difficulty: 'beginner',
    category: 'Configuration',
    steps: [
      {
        order: 1,
        command: 'kubectl create configmap app-config --from-literal=key1=value1 --from-literal=key2=value2',
        description: 'Create a ConfigMap.',
        explanation: 'Stores configuration data as key-value pairs.',
        output: 'configmap/app-config created'
      },
      {
        order: 2,
        command: 'kubectl get configmap app-config -o yaml',
        description: 'Verify ConfigMap content.',
        explanation: 'Check the data stored in the ConfigMap.',
        output: 'apiVersion: v1\ndata:\n  key1: value1\n  key2: value2\nkind: ConfigMap\nmetadata:\n  name: app-config'
      },
      {
        order: 3,
        command: 'kubectl set env deployment/nginx --from=configmap/app-config',
        description: 'Inject as Environment Variables.',
        explanation: 'Updates the deployment to use the ConfigMap data as env vars.',
        output: 'deployment.apps/nginx env updated'
      }
    ]
  },
  {
    id: 6,
    title: 'Implement Network Policy (Deny All)',
    description: 'Secure a namespace by denying all ingress traffic by default.',
    difficulty: 'advanced',
    category: 'Security',
    steps: [
      {
        order: 1,
        command: 'kubectl create namespace secure-app',
        description: 'Create a test namespace.',
        explanation: 'Isolate the testing environment.',
        output: 'namespace/secure-app created'
      },
      {
        order: 2,
        command: `cat <<EOF | kubectl apply -f -
apiVersion: networking.k8s.io/v1
kind: NetworkPolicy
metadata:
  name: default-deny-all
  namespace: secure-app
spec:
  podSelector: {}
  policyTypes:
  - Ingress
EOF`,
        description: 'Apply Deny-All Policy.',
        explanation: 'Creates a NetworkPolicy that selects all pods and blocks all incoming traffic.',
        output: 'networkpolicy.networking.k8s.io/default-deny-all created'
      },
      {
        order: 3,
        command: 'kubectl get networkpolicies -n secure-app',
        description: 'Verify the policy.',
        explanation: 'Ensure the policy is active in the namespace.',
        output: 'NAME               POD-SELECTOR   AGE\ndefault-deny-all   <none>         10s'
      }
    ]
  }
];
