export const advancedWorkloadsCommandsData = [
  // StatefulSets
  {
    category: "Advanced Workloads",
    subcategory: "StatefulSets",
    command: "kubectl scale statefulset web --replicas=5",
    description: "Scale a StatefulSet to 5 replicas",
    example:
      "kubectl scale statefulset web --replicas=5\nkubectl scale statefulset web --replicas=5 -n prod",
    versionIntroduced: "1.5",
    difficultyLevel: "intermediate",
    tags: "statefulset,scale",
    flags: "--replicas",
    output: "statefulset.apps/web scaled",
  },
  {
    category: "Advanced Workloads",
    subcategory: "StatefulSets",
    command: "kubectl rollout status statefulset/web",
    description: "Check rollout status of StatefulSet",
    example:
      "kubectl rollout status statefulset/web\nkubectl rollout status statefulset/web -n prod",
    versionIntroduced: "1.7",
    difficultyLevel: "intermediate",
    tags: "statefulset,rollout",
    flags: "",
    output: `Waiting for 1 pods to be ready...
partitioned roll out complete: 1 new pods have been updated...`,
  },

  // DaemonSets
  {
    category: "Advanced Workloads",
    subcategory: "DaemonSets",
    command: "kubectl rollout restart daemonset/fluentd",
    description: "Restart all pods in a DaemonSet",
    example:
      "kubectl rollout restart daemonset/fluentd\nkubectl rollout restart daemonset/fluentd -n prod",
    versionIntroduced: "1.15",
    difficultyLevel: "intermediate",
    tags: "daemonset,restart",
    flags: "",
    output: "daemonset.apps/fluentd restarted",
  },
  {
    category: "Advanced Workloads",
    subcategory: "DaemonSets",
    command: "kubectl rollout restart daemonset by label -A",
    description: "Restart all DaemonSets matching label in all namespaces",
    example: "kubectl rollout restart daemonset -l app=fluentd -A",
    versionIntroduced: "1.15",
    difficultyLevel: "intermediate",
    tags: "daemonset,restart,all-namespaces,label",
    flags: "-l, -A",
    output: "daemonset.apps/fluentd restarted",
  },

  // Jobs & CronJobs
  {
    category: "Advanced Workloads",
    subcategory: "Jobs",
    command: "kubectl create job --from=cronjob/my-cron-job manual-job",
    description: "Manually create a job from a CronJob",
    example:
      "kubectl create job --from=cronjob/my-cron-job manual-job\nkubectl create job --from=cronjob/my-cron-job manual-job -n prod",
    versionIntroduced: "1.8",
    difficultyLevel: "intermediate",
    tags: "job,cronjob,create",
    flags: "--from",
    output: "job.batch/manual-job created",
  },
  {
    category: "Advanced Workloads",
    subcategory: "CronJobs",
    command: "kubectl get cronjobs --all-namespaces",
    description: "List all CronJobs",
    example: "kubectl get cronjobs --all-namespaces",
    versionIntroduced: "1.8",
    difficultyLevel: "beginner",
    tags: "cronjob,list",
    flags: "--all-namespaces",
    output: `NAMESPACE   NAME      SCHEDULE      SUSPEND   ACTIVE   LAST SCHEDULE   AGE
default     backup    0 2 * * *     False     0        14h             5d
monitoring  check     */5 * * * *   False     1        2m              10d`,
  },
  {
    category: "Advanced Workloads",
    subcategory: "CronJobs",
    command: "kubectl get cronjobs -A",
    description: "List all CronJobs in all namespaces",
    example: "kubectl get cronjobs -A",
    versionIntroduced: "1.8",
    difficultyLevel: "beginner",
    tags: "cronjob,list,all-namespaces",
    flags: "-A",
    output: `NAMESPACE   NAME      SCHEDULE      SUSPEND   ACTIVE   LAST SCHEDULE   AGE
default     backup    0 2 * * *     False     0        14h             5d
monitoring  check     */5 * * * *   False     1        2m              10d`,
  },

  ,
  // --- Missing Variations ---
  {
    category: "Advanced Workloads",
    subcategory: "ReplicaSets",
    command: "kubectl get replicasets",
    description: "List ReplicaSets in current namespace",
    example: "kubectl get replicasets\nkubectl get replicasets -n prod",
    versionIntroduced: "1.0",
    difficultyLevel: "beginner",
    tags: "replicaset,list",
    output: `NAME              DESIRED   CURRENT   READY   AGE
frontend-6c5f7    3         3         3       2d`,
  },
  {
    category: "Advanced Workloads",
    subcategory: "ReplicaSets",
    command: "kubectl get replicasets -n my-namespace",
    description: "List ReplicaSets in a specific namespace",
    example: "kubectl get replicasets -n my-namespace",
    versionIntroduced: "1.0",
    difficultyLevel: "intermediate",
    tags: "replicaset,list,namespace",
    flags: "-n",
    output: `NAME              DESIRED   CURRENT   READY   AGE
frontend-6c5f7    3         3         3       2d`,
  },
  {
    category: "Advanced Workloads",
    subcategory: "ReplicaSets",
    command: "kubectl get replicasets --all-namespaces",
    description: "List ReplicaSets across all namespaces",
    example: "kubectl get replicasets --all-namespaces",
    versionIntroduced: "1.0",
    difficultyLevel: "beginner",
    tags: "replicaset,list,all-namespaces",
    flags: "--all-namespaces",
    output: `NAMESPACE   NAME              DESIRED   CURRENT   READY   AGE
default     frontend-6c5f7    3         3         3       2d
kube-system coredns-5d78c     2         2         2       30d`,
  },
  {
    category: "Advanced Workloads",
    subcategory: "ReplicaSets",
    command: "kubectl get replicasets -A",
    description: "List ReplicaSets in all namespaces",
    example: "kubectl get replicasets -A",
    versionIntroduced: "1.0",
    difficultyLevel: "beginner",
    tags: "replicaset,list,all-namespaces",
    flags: "-A",
    output: `NAMESPACE   NAME              DESIRED   CURRENT   READY   AGE
default     frontend-6c5f7    3         3         3       2d
kube-system coredns-5d78c     2         2         2       30d`,
  },
  ,
  {
    category: "Advanced Workloads",
    subcategory: "ReplicaSets",
    command: "kubectl describe replicaset",
    description: "Show detailed information about a ReplicaSet",
    example:
      "kubectl describe replicaset frontend-6c5f7\nkubectl describe replicaset frontend-6c5f7 -n prod",
    versionIntroduced: "1.0",
    difficultyLevel: "beginner",
    tags: "replicaset,describe",
    output: `Name:           frontend-6c5f7
Namespace:      default
Selector:       app=frontend,pod-template-hash=6c5f7
Labels:         app=frontend
                pod-template-hash=6c5f7
Replicas:       3 current / 3 desired
Pods Status:    3 Running / 0 Waiting / 0 Succeeded / 0 Failed`,
  },
  {
    category: "Advanced Workloads",
    subcategory: "ReplicaSets",
    command: "kubectl describe replicaset -n my-namespace",
    description: "Describe a ReplicaSet in a specific namespace",
    example: "kubectl describe replicaset frontend-6c5f7 -n my-namespace",
    versionIntroduced: "1.0",
    difficultyLevel: "intermediate",
    tags: "replicaset,describe,namespace",
    flags: "-n",
    output: `Name:           frontend-6c5f7
Namespace:      my-namespace
Selector:       app=frontend,pod-template-hash=6c5f7
Labels:         app=frontend
                pod-template-hash=6c5f7
Replicas:       3 current / 3 desired
Pods Status:    3 Running / 0 Waiting / 0 Succeeded / 0 Failed`,
  },
  {
    category: "Advanced Workloads",
    subcategory: "ReplicaSets",
    command: "kubectl describe replicaset -A",
    description:
      "Show detailed information about all ReplicaSets in all namespaces",
    example: "kubectl describe replicaset -A",
    versionIntroduced: "1.0",
    difficultyLevel: "intermediate",
    tags: "replicaset,describe,all-namespaces",
    flags: "-A",
    output: `Name:           frontend-6c5f7
Namespace:      default
...
Name:           coredns-5d78c
Namespace:      kube-system
...`,
  },
  {
    category: "Advanced Workloads",
    subcategory: "ReplicaSets",
    command: "kubectl scale replicaset",
    description: "Scale a ReplicaSet",
    example:
      "kubectl scale replicaset frontend-6c5f7 --replicas=5\nkubectl scale replicaset frontend-6c5f7 --replicas=5 -n prod",
    versionIntroduced: "1.0",
    difficultyLevel: "intermediate",
    tags: "replicaset,scale",
    flags: "--replicas",
    output: "replicaset.apps/frontend-6c5f7 scaled",
  },
  {
    category: "Advanced Workloads",
    subcategory: "ReplicaSets",
    command: "kubectl scale replicaset by label -A",
    description: "Scale all ReplicaSets matching label in all namespaces",
    example: "kubectl scale replicaset -l app=frontend --replicas=5 -A",
    versionIntroduced: "1.0",
    difficultyLevel: "advanced",
    tags: "replicaset,scale,all-namespaces,label",
    flags: "-l, --replicas, -A",
    output: "replicaset.apps/frontend-6c5f7 scaled",
  },

  // HPA
  {
    category: "Advanced Workloads",
    subcategory: "HPA",
    command: "kubectl get hpa",
    description: "List HorizontalPodAutoscalers",
    example: "kubectl get hpa\nkubectl get hpa -n prod",
    versionIntroduced: "1.1",
    difficultyLevel: "beginner",
    tags: "hpa,autoscaling",
    flags: "",
    output: `NAME         REFERENCE              TARGETS   MINPODS   MAXPODS   REPLICAS   AGE
php-apache   Deployment/php-apache  0%/50%    1         10        1          2d`,
  },
  {
    category: "Advanced Workloads",
    subcategory: "HPA",
    command: "kubectl get hpa -n my-namespace",
    description: "List HorizontalPodAutoscalers in a specific namespace",
    example: "kubectl get hpa -n my-namespace",
    versionIntroduced: "1.1",
    difficultyLevel: "intermediate",
    tags: "hpa,autoscaling,namespace",
    flags: "-n",
    output: `NAME         REFERENCE              TARGETS   MINPODS   MAXPODS   REPLICAS   AGE
php-apache   Deployment/php-apache  0%/50%    1         10        1          2d`,
  },
  // StatefulSet Operations
  {
    category: "Advanced Workloads",
    subcategory: "StatefulSets",
    command: "kubectl scale statefulset db --replicas=3",
    description:
      "Scale a statefulset to 3 replicas (Caution: Ensure data consistency before scaling down)",
    example:
      "kubectl scale statefulset mysql --replicas=3\nkubectl scale statefulset mysql --replicas=3 -n prod",
    versionIntroduced: "1.5",
    difficultyLevel: "intermediate",
    tags: "statefulset,scale",
    flags: "--replicas",
    output: "statefulset.apps/mysql scaled",
  },
  {
    category: "Advanced Workloads",
    subcategory: "StatefulSets",
    command: "kubectl scale statefulset by label -A",
    description: "Scale all StatefulSets matching label in all namespaces",
    example: "kubectl scale statefulset -l app=mysql --replicas=3 -A",
    versionIntroduced: "1.5",
    difficultyLevel: "advanced",
    tags: "statefulset,scale,all-namespaces,label",
    flags: "-l, --replicas, -A",
    output: "statefulset.apps/mysql scaled",
  },
  {
    category: "Advanced Workloads",
    subcategory: "StatefulSets",
    command: "kubectl delete statefulset my-set --cascade=orphan",
    description:
      "Delete StatefulSet but keep pods (Warning: Pods will remain running and unmanaged)",
    example:
      "kubectl delete statefulset my-set --cascade=orphan\nkubectl delete statefulset my-set --cascade=orphan -n prod",
    versionIntroduced: "1.5",
    difficultyLevel: "advanced",
    tags: "statefulset,delete,orphan",
    flags: "--cascade",
    output: "statefulset.apps/my-set deleted",
  },
  {
    category: "Advanced Workloads",
    subcategory: "StatefulSets",
    command: "kubectl delete statefulset by label -A",
    description: "Delete all StatefulSets matching label in all namespaces",
    example: "kubectl delete statefulset -l app=my-set -A",
    versionIntroduced: "1.5",
    difficultyLevel: "advanced",
    tags: "statefulset,delete,all-namespaces,label",
    flags: "-l, -A",
    output: "statefulset.apps/my-set deleted",
  },
  {
    category: "Advanced Workloads",
    subcategory: "StatefulSets",
    command: "kubectl rollout status statefulset/web",
    description: "Watch the status of a StatefulSet rollout",
    example:
      "kubectl rollout status statefulset/web\nkubectl rollout status statefulset/web -n prod",
    versionIntroduced: "1.7",
    difficultyLevel: "intermediate",
    tags: "statefulset,rollout,status",
    flags: "",
    output: `Waiting for 1 pods to be ready...
statefulset rolling update complete 3 pods at revision web-5c65f5778`,
  },

  // Job Operations
  {
    category: "Advanced Workloads",
    subcategory: "Jobs",
    command: 'kubectl create job my-job --image=busybox -- echo "Hello"',
    description: "Create a job that runs a single command",
    example:
      'kubectl create job my-job --image=busybox -- echo "Hello World"\nkubectl create job my-job --image=busybox -n prod -- echo "Hello World"',
    versionIntroduced: "1.8",
    difficultyLevel: "beginner",
    tags: "job,create,one-off",
    flags: "--image",
    output: "job.batch/my-job created",
  },
  {
    category: "Advanced Workloads",
    subcategory: "Jobs",
    command: "kubectl get jobs --field-selector status.successful=1",
    description: "List successfully completed jobs",
    example:
      "kubectl get jobs --field-selector status.successful=1\nkubectl get jobs --field-selector status.successful=1 -n prod",
    versionIntroduced: "1.8",
    difficultyLevel: "intermediate",
    tags: "job,list,filter,success",
    flags: "--field-selector",
    output: `NAME           COMPLETIONS   DURATION   AGE
process-data   1/1           5s         2m
backup-db      1/1           45s        5h`,
  },
  {
    category: "Advanced Workloads",
    subcategory: "Jobs",
    command: "kubectl get jobs --field-selector status.successful=1 -A",
    description: "List successfully completed jobs across all namespaces",
    example: "kubectl get jobs --field-selector status.successful=1 -A",
    versionIntroduced: "1.8",
    difficultyLevel: "intermediate",
    tags: "job,list,filter,success,all-namespaces",
    flags: "--field-selector, -A",
    output: `NAMESPACE   NAME           COMPLETIONS   DURATION   AGE
default     process-data   1/1           5s         2m
prod        backup-db      1/1           45s        5h`,
  },
  {
    category: "Advanced Workloads",
    subcategory: "Jobs",
    command: "kubectl create job --from=cronjob/my-cron my-manual-job",
    description: "Create a job from an existing CronJob (Manual Trigger)",
    example:
      "kubectl create job --from=cronjob/backup manual-backup-job\nkubectl create job --from=cronjob/backup manual-backup-job -n prod",
    versionIntroduced: "1.8",
    difficultyLevel: "intermediate",
    tags: "job,create,cronjob,manual",
    flags: "--from",
    output: "job.batch/manual-backup-job created",
  },

  // CronJob Operations
  {
    category: "Advanced Workloads",
    subcategory: "CronJobs",
    command:
      'kubectl patch cronjob my-cron --patch \'{"spec": {"suspend": true}}\'',
    description:
      "Suspend a CronJob (Warning: Scheduled jobs will not run until unsuspended)",
    example:
      'kubectl patch cronjob backup-cron --patch \'{"spec": {"suspend": true}}\'\nkubectl patch cronjob backup-cron --patch \'{"spec": {"suspend": true}}\' -n prod',
    versionIntroduced: "1.8",
    difficultyLevel: "intermediate",
    tags: "cronjob,patch,suspend",
    flags: "--patch",
    output: "cronjob.batch/backup-cron patched",
  },
  {
    category: "Advanced Workloads",
    subcategory: "CronJobs",
    command: "kubectl create job --from=cronjob/my-cron manual-trigger",
    description: "Manually trigger a job from a CronJob",
    example:
      "kubectl create job --from=cronjob/backup manual-backup\nkubectl create job --from=cronjob/backup manual-backup -n prod",
    versionIntroduced: "1.8",
    difficultyLevel: "intermediate",
    tags: "cronjob,trigger,manual",
    flags: "--from",
    output: "job.batch/manual-backup created",
  },

  // Autoscaling (HPA)
  {
    category: "Advanced Workloads",
    subcategory: "HPA",
    command: "kubectl describe hpa my-hpa",
    description: "Describe HPA details including current metrics",
    example:
      "kubectl describe hpa web-scaler\nkubectl describe hpa web-scaler -n prod",
    versionIntroduced: "1.1",
    difficultyLevel: "beginner",
    tags: "hpa,describe,metrics",
    flags: "",
    output: `Name:                                                  web-scaler
Namespace:                                             default
Labels:                                                <none>
Annotations:                                           <none>
CreationTimestamp:                                     Mon, 01 Jan 2024 10:00:00 +0000
Reference:                                             Deployment/frontend
Metrics:                                               ( current / target )
  resource cpu on pods  (as a percentage of request):  0% (0) / 80%
Min replicas:                                          1
Max replicas:                                          10
Deployment pods:                                       1 current / 1 desired
Conditions:
  Type            Status  Reason              Message
  ----            ------  ------              -------
  AbleToScale     True    ReadyForNewScale    recommended size matches current size
  ScalingActive   True    ValidMetricFound    the HPA was able to successfully calculate a replica count from cpu resource
  ScalingLimited  False   DesiredWithinRange  the desired count is within the acceptable range`,
  },
  {
    category: "Advanced Workloads",
    subcategory: "HPA",
    command: "kubectl describe hpa -n my-namespace",
    description: "Describe HPA details in a specific namespace",
    example: "kubectl describe hpa web-scaler -n my-namespace",
    versionIntroduced: "1.1",
    difficultyLevel: "intermediate",
    tags: "hpa,describe,metrics,namespace",
    flags: "-n",
    output: `Name:                                                  web-scaler
Namespace:                                             my-namespace
Labels:                                                <none>
Annotations:                                           <none>
CreationTimestamp:                                     Mon, 01 Jan 2024 10:00:00 +0000
Reference:                                             Deployment/frontend
Metrics:                                               ( current / target )
  resource cpu on pods  (as a percentage of request):  0% (0) / 80%
Min replicas:                                          1
Max replicas:                                          10
Deployment pods:                                       1 current / 1 desired
Conditions:
  Type            Status  Reason              Message
  ----            ------  ------              -------
  AbleToScale     True    ReadyForNewScale    recommended size matches current size
  ScalingActive   True    ValidMetricFound    the HPA was able to successfully calculate a replica count from cpu resource
  ScalingLimited  False   DesiredWithinRange  the desired count is within the acceptable range`,
  },
  {
    category: "Advanced Workloads",
    subcategory: "HPA",
    command: "kubectl describe hpa -A",
    description: "Describe all HPAs in all namespaces",
    example: "kubectl describe hpa -A",
    versionIntroduced: "1.1",
    difficultyLevel: "intermediate",
    tags: "hpa,describe,metrics,all-namespaces",
    flags: "-A",
    output: `Name:                                                  web-scaler
Namespace:                                             default
...
Name:                                                  api-scaler
Namespace:                                             prod
...`,
  },
  {
    category: "Advanced Workloads",
    subcategory: "HPA",
    command:
      "kubectl autoscale deployment my-dep --cpu-percent=80 --min=1 --max=10",
    description: "Autoscale deployment based on CPU usage",
    example:
      "kubectl autoscale deployment frontend --cpu-percent=80 --min=1 --max=10\nkubectl autoscale deployment frontend --cpu-percent=80 --min=1 --max=10 -n prod",
    versionIntroduced: "1.1",
    difficultyLevel: "intermediate",
    tags: "hpa,autoscale,cpu",
    flags: "--cpu-percent --min --max",
    output: "horizontalpodautoscaler.autoscaling/frontend autoscaled",
  },
  {
    category: "Advanced Workloads",
    subcategory: "HPA",
    command: "kubectl get hpa --all-namespaces",
    description: "List HPA across all namespaces",
    example: "kubectl get hpa --all-namespaces",
    versionIntroduced: "1.1",
    difficultyLevel: "beginner",
    tags: "hpa,list,all-namespaces",
    flags: "--all-namespaces",
    output: `NAMESPACE   NAME         REFERENCE              TARGETS   MINPODS   MAXPODS   REPLICAS   AGE
default     web-scaler   Deployment/frontend    0%/80%    1         10        1          5m
prod        api-scaler   Deployment/api-server  45%/70%   2         20        5          10d`,
  },

  // --- Missing Variations (Added for completeness) ---
  {
    category: "Advanced Workloads",
    subcategory: "CronJobs",
    command: "kubectl get cronjobs",
    description: "List CronJobs in current namespace",
    example: "kubectl get cronjobs\nkubectl get cronjobs -n prod",
    versionIntroduced: "1.8",
    difficultyLevel: "beginner",
    tags: "cronjob,list",
    output: `NAME      SCHEDULE      SUSPEND   ACTIVE   LAST SCHEDULE   AGE
backup    0 2 * * *     False     0        14h             5d`,
  },
  {
    category: "Advanced Workloads",
    subcategory: "CronJobs",
    command: "kubectl get cronjobs -n my-namespace",
    description: "List CronJobs in a specific namespace",
    example: "kubectl get cronjobs -n my-namespace",
    versionIntroduced: "1.8",
    difficultyLevel: "intermediate",
    tags: "cronjob,list,namespace",
    flags: "-n",
    output: `NAME      SCHEDULE      SUSPEND   ACTIVE   LAST SCHEDULE   AGE
backup    0 2 * * *     False     0        14h             5d`,
  },
  {
    category: "Advanced Workloads",
    subcategory: "CronJobs",
    command: "kubectl describe cronjob",
    description: "Describe a CronJob",
    example: "kubectl describe cronjob backup",
    versionIntroduced: "1.8",
    difficultyLevel: "intermediate",
    tags: "cronjob,describe",
    output: `Name:                          backup
Namespace:                     default
Schedule:                      0 2 * * *
Concurrency Policy:            Allow
Suspend:                       False
Successful Job History Limit:  3
Failed Job History Limit:      1
...`,
  },
  {
    category: "Advanced Workloads",
    subcategory: "CronJobs",
    command: "kubectl describe cronjob -n my-namespace",
    description: "Describe a CronJob in a specific namespace",
    example: "kubectl describe cronjob backup -n my-namespace",
    versionIntroduced: "1.8",
    difficultyLevel: "intermediate",
    tags: "cronjob,describe,namespace",
    flags: "-n",
    output: `Name:                          backup
Namespace:                     my-namespace
Schedule:                      0 2 * * *
Concurrency Policy:            Allow
Suspend:                       False
Successful Job History Limit:  3
Failed Job History Limit:      1
...`,
  },
  {
    category: "Advanced Workloads",
    subcategory: "CronJobs",
    command: "kubectl describe cronjob -A",
    description: "Describe all CronJobs in all namespaces",
    example: "kubectl describe cronjob -A",
    versionIntroduced: "1.8",
    difficultyLevel: "intermediate",
    tags: "cronjob,describe,all-namespaces",
    flags: "-A",
    output: `Name:                          backup
Namespace:                     default
...
Name:                          check
Namespace:                     monitoring
...`,
  },
  {
    category: "Advanced Workloads",
    subcategory: "Jobs",
    command: "kubectl get jobs",
    description: "List Jobs in current namespace",
    example: "kubectl get jobs",
    versionIntroduced: "1.8",
    difficultyLevel: "beginner",
    tags: "job,list",
    output: `NAME           COMPLETIONS   DURATION   AGE
process-data   1/1           5s         2m`,
  },
  {
    category: "Advanced Workloads",
    subcategory: "Jobs",
    command: "kubectl get jobs -n my-namespace",
    description: "List Jobs in a specific namespace",
    example: "kubectl get jobs -n my-namespace",
    versionIntroduced: "1.8",
    difficultyLevel: "intermediate",
    tags: "job,list,namespace",
    flags: "-n",
    output: `NAME           COMPLETIONS   DURATION   AGE
process-data   1/1           5s         2m`,
  },
  {
    category: "Advanced Workloads",
    subcategory: "Jobs",
    command: "kubectl get jobs --all-namespaces",
    description: "List Jobs across all namespaces",
    example: "kubectl get jobs --all-namespaces",
    versionIntroduced: "1.8",
    difficultyLevel: "beginner",
    tags: "job,list,all-namespaces",
    flags: "--all-namespaces",
    output: `NAMESPACE   NAME           COMPLETIONS   DURATION   AGE
default     process-data   1/1           5s         2m`,
  },
  {
    category: "Advanced Workloads",
    subcategory: "Jobs",
    command: "kubectl get jobs -A",
    description: "List Jobs in all namespaces",
    example: "kubectl get jobs -A",
    versionIntroduced: "1.8",
    difficultyLevel: "beginner",
    tags: "job,list,all-namespaces",
    flags: "-A",
    output: `NAMESPACE   NAME           COMPLETIONS   DURATION   AGE
default     process-data   1/1           5s         2m`,
  },
  ,
  {
    category: "Advanced Workloads",
    subcategory: "Jobs",
    command: "kubectl describe job",
    description: "Describe a Job",
    example: "kubectl describe job process-data",
    versionIntroduced: "1.8",
    difficultyLevel: "beginner",
    tags: "job,describe",
    output: `Name:           process-data
Namespace:      default
Selector:       controller-uid=...
Labels:         controller-uid=...
                job-name=process-data
Parallelism:    1
Completions:    1
Start Time:     Mon, 01 Jan 2024 10:00:00 +0000
Pods Statuses:  0 Running / 1 Succeeded / 0 Failed`,
  },
  {
    category: "Advanced Workloads",
    subcategory: "Jobs",
    command: "kubectl describe job -n my-namespace",
    description: "Describe a Job in a specific namespace",
    example: "kubectl describe job process-data -n my-namespace",
    versionIntroduced: "1.8",
    difficultyLevel: "intermediate",
    tags: "job,describe,namespace",
    flags: "-n",
    output: `Name:           process-data
Namespace:      my-namespace
Selector:       controller-uid=...
Labels:         controller-uid=...
                job-name=process-data
Parallelism:    1
Completions:    1
Start Time:     Mon, 01 Jan 2024 10:00:00 +0000
Pods Statuses:  0 Running / 1 Succeeded / 0 Failed`,
  },
  {
    category: "Advanced Workloads",
    subcategory: "Jobs",
    command: "kubectl describe job -A",
    description: "Describe all Jobs in all namespaces",
    example: "kubectl describe job -A",
    versionIntroduced: "1.8",
    difficultyLevel: "intermediate",
    tags: "job,describe,all-namespaces",
    flags: "-A",
    output: `Name:           process-data
Namespace:      default
...`,
  },
  {
    category: "Advanced Workloads",
    subcategory: "StatefulSets",
    command: "kubectl get statefulsets",
    description: "List StatefulSets in current namespace",
    example: "kubectl get statefulsets\nkubectl get statefulsets -n prod",
    versionIntroduced: "1.5",
    difficultyLevel: "beginner",
    tags: "statefulset,list",
    output: `NAME   READY   AGE
web    1/1     2d`,
  },
  {
    category: "Advanced Workloads",
    subcategory: "StatefulSets",
    command: "kubectl get statefulsets -n my-namespace",
    description: "List StatefulSets in a specific namespace",
    example: "kubectl get statefulsets -n my-namespace",
    versionIntroduced: "1.5",
    difficultyLevel: "intermediate",
    tags: "statefulset,list,namespace",
    flags: "-n",
    output: `NAME   READY   AGE
web    1/1     2d`,
  },
  {
    category: "Advanced Workloads",
    subcategory: "StatefulSets",
    command: "kubectl get statefulsets --all-namespaces",
    description: "List StatefulSets across all namespaces",
    example: "kubectl get statefulsets --all-namespaces",
    versionIntroduced: "1.5",
    difficultyLevel: "beginner",
    tags: "statefulset,list,all-namespaces",
    flags: "--all-namespaces",
    output: `NAMESPACE   NAME   READY   AGE
default     web    1/1     2d`,
  },
  {
    category: "Advanced Workloads",
    subcategory: "StatefulSets",
    command: "kubectl get statefulsets -A",
    description: "List StatefulSets in all namespaces",
    example: "kubectl get statefulsets -A",
    versionIntroduced: "1.5",
    difficultyLevel: "beginner",
    tags: "statefulset,list,all-namespaces",
    flags: "-A",
    output: `NAMESPACE   NAME   READY   AGE
default     web    1/1     2d`,
  },
  ,
  {
    category: "Advanced Workloads",
    subcategory: "StatefulSets",
    command: "kubectl describe statefulset",
    description: "Describe a StatefulSet",
    example: "kubectl describe statefulset web",
    versionIntroduced: "1.5",
    difficultyLevel: "beginner",
    tags: "statefulset,describe",
    output: `Name:           web
Namespace:      default
Selector:       app=nginx
Labels:         app=nginx
Replicas:       1 desired | 1 total
Update Strategy: RollingUpdate
Pods Status:    1 Running / 0 Waiting / 0 Succeeded / 0 Failed`,
  },
  {
    category: "Advanced Workloads",
    subcategory: "StatefulSets",
    command: "kubectl describe statefulset -n my-namespace",
    description: "Describe a StatefulSet in a specific namespace",
    example: "kubectl describe statefulset web -n my-namespace",
    versionIntroduced: "1.5",
    difficultyLevel: "intermediate",
    tags: "statefulset,describe,namespace",
    flags: "-n",
    output: `Name:           web
Namespace:      my-namespace
Selector:       app=nginx
Labels:         app=nginx
Replicas:       1 desired | 1 total
Update Strategy: RollingUpdate
Pods Status:    1 Running / 0 Waiting / 0 Succeeded / 0 Failed`,
  },
  {
    category: "Advanced Workloads",
    subcategory: "StatefulSets",
    command: "kubectl describe statefulset -A",
    description: "Describe all StatefulSets in all namespaces",
    example: "kubectl describe statefulset -A",
    versionIntroduced: "1.5",
    difficultyLevel: "intermediate",
    tags: "statefulset,describe,all-namespaces",
    flags: "-A",
    output: `Name:           web
Namespace:      default
...`,
  },
  {
    category: "Advanced Workloads",
    subcategory: "DaemonSets",
    command: "kubectl get daemonsets",
    description: "List DaemonSets in current namespace",
    example: "kubectl get daemonsets\nkubectl get daemonsets -n prod",
    versionIntroduced: "1.1",
    difficultyLevel: "beginner",
    tags: "daemonset,list",
    output: `NAME      DESIRED   CURRENT   READY   UP-TO-DATE   AVAILABLE   NODE SELECTOR   AGE
fluentd   3         3         3       3            3           <none>          5d`,
  },
  {
    category: "Advanced Workloads",
    subcategory: "DaemonSets",
    command: "kubectl get daemonsets -n my-namespace",
    description: "List DaemonSets in a specific namespace",
    example: "kubectl get daemonsets -n my-namespace",
    versionIntroduced: "1.1",
    difficultyLevel: "intermediate",
    tags: "daemonset,list,namespace",
    flags: "-n",
    output: `NAME      DESIRED   CURRENT   READY   UP-TO-DATE   AVAILABLE   NODE SELECTOR   AGE
fluentd   3         3         3       3            3           <none>          5d`,
  },
  {
    category: "Advanced Workloads",
    subcategory: "DaemonSets",
    command: "kubectl get daemonsets --all-namespaces",
    description: "List DaemonSets across all namespaces",
    example: "kubectl get daemonsets --all-namespaces",
    versionIntroduced: "1.1",
    difficultyLevel: "beginner",
    tags: "daemonset,list,all-namespaces",
    flags: "--all-namespaces",
    output: `NAMESPACE     NAME          DESIRED   CURRENT   READY   UP-TO-DATE   AVAILABLE   NODE SELECTOR   AGE
kube-system   kube-proxy    3         3         3       3            3           <none>          30d`,
  },
  {
    category: "Advanced Workloads",
    subcategory: "DaemonSets",
    command: "kubectl get daemonsets -A",
    description: "List DaemonSets in all namespaces",
    example: "kubectl get daemonsets -A",
    versionIntroduced: "1.1",
    difficultyLevel: "beginner",
    tags: "daemonset,list,all-namespaces",
    flags: "-A",
    output: `NAMESPACE     NAME          DESIRED   CURRENT   READY   UP-TO-DATE   AVAILABLE   NODE SELECTOR   AGE
kube-system   kube-proxy    3         3         3       3            3           <none>          30d`,
  },
  ,
  {
    category: "Advanced Workloads",
    subcategory: "DaemonSets",
    command: "kubectl describe daemonset",
    description: "Describe a DaemonSet",
    example: "kubectl describe daemonset fluentd",
    versionIntroduced: "1.1",
    difficultyLevel: "beginner",
    tags: "daemonset,describe",
    output: `Name:           fluentd
Namespace:      default
Selector:       name=fluentd
Labels:         name=fluentd
Desired Number of Nodes Scheduled: 3
Current Number of Nodes Scheduled: 3
Number of Nodes Scheduled with Up-to-date Pods: 3
Number of Nodes Scheduled with Available Pods: 3`,
  },
  {
    category: "Advanced Workloads",
    subcategory: "DaemonSets",
    command: "kubectl describe daemonset -n my-namespace",
    description: "Describe a DaemonSet in a specific namespace",
    example: "kubectl describe daemonset fluentd -n my-namespace",
    versionIntroduced: "1.1",
    difficultyLevel: "intermediate",
    tags: "daemonset,describe,namespace",
    flags: "-n",
    output: `Name:           fluentd
Namespace:      my-namespace
Selector:       name=fluentd
Labels:         name=fluentd
Desired Number of Nodes Scheduled: 3
Current Number of Nodes Scheduled: 3
Number of Nodes Scheduled with Up-to-date Pods: 3
Number of Nodes Scheduled with Available Pods: 3`,
  },
  {
    category: "Advanced Workloads",
    subcategory: "DaemonSets",
    command: "kubectl describe daemonset -A",
    description: "Describe all DaemonSets in all namespaces",
    example: "kubectl describe daemonset -A",
    versionIntroduced: "1.1",
    difficultyLevel: "intermediate",
    tags: "daemonset,describe,all-namespaces",
    flags: "-A",
    output: `Name:           fluentd
Namespace:      default
...
Name:           kube-proxy
Namespace:      kube-system
...`,
  },
];
