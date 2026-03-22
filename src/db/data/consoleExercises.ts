export interface ConsoleExercise {
  id: string;
  title: string;
  description: string;
  difficulty: "beginner" | "intermediate" | "advanced";
  tasks: ConsoleTask[];
}

export interface ConsoleTask {
  id: string;
  text: string;
  hint: string;
  expectedCommandRegex: string; // Regex to match the command
  successMessage: string;
  output: string; // Simulated output to show in terminal
}

export const consoleExercises: ConsoleExercise[] = [
  {
    id: "basic-pod-management",
    title: "Basic Pod Management",
    description:
      "Learn how to create, list, and delete pods in a Kubernetes cluster.",
    difficulty: "beginner",
    tasks: [
      {
        id: "list-pods",
        text: "List all pods in the current namespace to see what is running.",
        hint: "Use the get command with pods",
        expectedCommandRegex: "^kubectl get pods$",
        successMessage: "Great! You can see the list of running pods.",
        output: `NAME          READY   STATUS    RESTARTS   AGE
nginx-pod     1/1     Running   0          5m
redis-cache   1/1     Running   0          2h`,
      },
      {
        id: "describe-pod",
        text: 'Get detailed information about the "nginx-pod".',
        hint: "Use kubectl describe pod <pod-name>",
        expectedCommandRegex: "^kubectl describe pod nginx-pod$",
        successMessage:
          "Excellent. Describe gives you events and status details.",
        output: `Name:         nginx-pod
Namespace:    default
Node:         worker-node-1/192.168.1.5
Start Time:   Tue, 26 Jan 2026 10:00:00 GMT
Labels:       run=nginx
Status:       Running
IP:           10.244.1.5
Containers:
  nginx:
    Image:          nginx:latest
    State:          Running`,
      },
      {
        id: "delete-pod",
        text: 'Delete the pod named "nginx-pod".',
        hint: "Use kubectl delete pod <pod-name>",
        expectedCommandRegex: "^kubectl delete pod nginx-pod$",
        successMessage: "Pod deleted successfully.",
        output: 'pod "nginx-pod" deleted',
      },
    ],
  },
  {
    id: "deployment-scaling",
    title: "Deployment Scaling",
    description: "Practice managing Deployments and scaling replicas.",
    difficulty: "intermediate",
    tasks: [
      {
        id: "create-deployment",
        text: 'Create a deployment named "web-app" using image "nginx:1.19" with 3 replicas.',
        hint: "Use kubectl create deployment or kubectl apply. For this exercise, try the imperative create command with --image and --replicas flags.",
        expectedCommandRegex:
          "^kubectl create deployment web-app --image=nginx:1.19 --replicas=3$",
        successMessage: "Deployment created with 3 replicas.",
        output: "deployment.apps/web-app created",
      },
      {
        id: "scale-deployment",
        text: 'Scale the "web-app" deployment to 5 replicas.',
        hint: "Use kubectl scale deployment <name> --replicas=5",
        expectedCommandRegex: "^kubectl scale deployment web-app --replicas=5$",
        successMessage: "Deployment successfully scaled up.",
        output: "deployment.apps/web-app scaled",
      },
      {
        id: "check-rollout",
        text: 'Check the rollout status of "web-app".',
        hint: "Use kubectl rollout status deployment/<name>",
        expectedCommandRegex: "^kubectl rollout status deployment/web-app$",
        successMessage: "Rollout check complete.",
        output: 'deployment "web-app" successfully rolled out',
      },
    ],
  },
  {
    id: "troubleshooting-logs",
    title: "Troubleshooting with Logs",
    description: "Diagnose issues by inspecting container logs.",
    difficulty: "intermediate",
    tasks: [
      {
        id: "get-logs",
        text: 'Retrieve logs for the pod "backend-api".',
        hint: "Use kubectl logs <pod-name>",
        expectedCommandRegex: "^kubectl logs backend-api$",
        successMessage: "Logs retrieved.",
        output: `[INFO] Starting server on port 8080
[INFO] Connected to database
[ERROR] Connection timeout: redis-cache:6379
[WARN] Retrying connection...`,
      },
      {
        id: "get-prev-logs",
        text: 'Retrieve logs from the *previous* instance of "backend-api" (crashed container).',
        hint: "Add the -p or --previous flag.",
        expectedCommandRegex: "^kubectl logs backend-api (-p|--previous)$",
        successMessage: "Previous logs retrieved.",
        output: `[CRITICAL] Unhandled exception: NullReferenceException
   at App.Main.ConnectDB()
   at App.Start()`,
      },
    ],
  },
  {
    id: "node-maintenance",
    title: "Node Maintenance",
    description: "Prepare nodes for maintenance by draining them.",
    difficulty: "advanced",
    tasks: [
      {
        id: "cordon-node",
        text: 'Mark "worker-1" as unschedulable (cordon).',
        hint: "Use kubectl cordon <node-name>",
        expectedCommandRegex: "^kubectl cordon worker-1$",
        successMessage: "Node cordoned.",
        output: "node/worker-1 cordoned",
      },
      {
        id: "drain-node",
        text: 'Drain "worker-1" safely, ignoring daemonsets.',
        hint: "Use kubectl drain <node-name> --ignore-daemonsets",
        expectedCommandRegex: "^kubectl drain worker-1 --ignore-daemonsets$",
        successMessage: "Node drained successfully.",
        output: `node/worker-1 already cordoned
evicting pod default/web-app-5c4b5
evicting pod default/redis-cache-2d1a
pod/web-app-5c4b5 evicted
pod/redis-cache-2d1a evicted
node/worker-1 drained`,
      },
      {
        id: "uncordon-node",
        text: 'Mark "worker-1" as schedulable again (uncordon).',
        hint: "Use kubectl uncordon <node-name>",
        expectedCommandRegex: "^kubectl uncordon worker-1$",
        successMessage: "Node uncordoned.",
        output: "node/worker-1 uncordoned",
      },
    ],
  },
  {
    id: "service-exposure",
    title: "Service Exposure",
    description: "Expose applications using Services.",
    difficulty: "intermediate",
    tasks: [
      {
        id: "expose-pod",
        text: 'Expose pod "nginx-pod" as a ClusterIP service named "nginx-svc" on port 80.',
        hint: "Use kubectl expose pod <name> --port=80 --name=<svc-name>",
        expectedCommandRegex:
          "^kubectl expose pod nginx-pod --port=80 --name=nginx-svc$",
        successMessage: "Service exposed.",
        output: "service/nginx-svc exposed",
      },
      {
        id: "get-svc",
        text: "Verify the service was created.",
        hint: "Use kubectl get svc or services",
        expectedCommandRegex: "^kubectl get (svc|services)$",
        successMessage: "Service list retrieved.",
        output: `NAME         TYPE        CLUSTER-IP      EXTERNAL-IP   PORT(S)   AGE
kubernetes   ClusterIP   10.96.0.1       <none>        443/TCP   10d
nginx-svc    ClusterIP   10.103.22.45    <none>        80/TCP    10s`,
      },
    ],
  },
];
