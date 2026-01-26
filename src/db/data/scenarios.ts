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
  }
];
