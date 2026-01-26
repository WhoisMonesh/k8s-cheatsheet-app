export const advancedWorkloadsCommandsData = [
  // StatefulSets
  {
    category: 'Advanced Workloads',
    subcategory: 'StatefulSets',
    command: 'kubectl scale statefulset web --replicas=5',
    description: 'Scale a StatefulSet to 5 replicas',
    example: 'kubectl scale statefulset web --replicas=5',
    versionIntroduced: '1.5',
    difficultyLevel: 'intermediate',
    tags: 'statefulset,scale',
    flags: '--replicas',
    output: 'statefulset.apps/web scaled'
  },
  {
    category: 'Advanced Workloads',
    subcategory: 'StatefulSets',
    command: 'kubectl rollout status statefulset/web',
    description: 'Check rollout status of StatefulSet',
    example: 'kubectl rollout status statefulset/web',
    versionIntroduced: '1.7',
    difficultyLevel: 'intermediate',
    tags: 'statefulset,rollout',
    flags: '',
    output: `Waiting for 1 pods to be ready...
partitioned roll out complete: 1 new pods have been updated...`
  },

  // DaemonSets
  {
    category: 'Advanced Workloads',
    subcategory: 'DaemonSets',
    command: 'kubectl rollout restart daemonset/fluentd',
    description: 'Restart all pods in a DaemonSet',
    example: 'kubectl rollout restart daemonset/fluentd',
    versionIntroduced: '1.15',
    difficultyLevel: 'intermediate',
    tags: 'daemonset,restart',
    flags: '',
    output: 'daemonset.apps/fluentd restarted'
  },

  // Jobs & CronJobs
  {
    category: 'Advanced Workloads',
    subcategory: 'Jobs',
    command: 'kubectl create job --from=cronjob/my-cron-job manual-job',
    description: 'Manually create a job from a CronJob',
    example: 'kubectl create job --from=cronjob/my-cron-job manual-job',
    versionIntroduced: '1.8',
    difficultyLevel: 'intermediate',
    tags: 'job,cronjob,create',
    flags: '--from',
    output: 'job.batch/manual-job created'
  },
  {
    category: 'Advanced Workloads',
    subcategory: 'CronJobs',
    command: 'kubectl get cronjobs --all-namespaces',
    description: 'List all CronJobs',
    example: 'kubectl get cronjobs --all-namespaces',
    versionIntroduced: '1.8',
    difficultyLevel: 'beginner',
    tags: 'cronjob,list',
    flags: '--all-namespaces',
    output: `NAMESPACE   NAME      SCHEDULE      SUSPEND   ACTIVE   LAST SCHEDULE   AGE
default     backup    0 2 * * *     False     0        14h             5d
monitoring  check     */5 * * * *   False     1        2m              10d`
  },

  // HPA
  {
    category: 'Advanced Workloads',
    subcategory: 'HPA',
    command: 'kubectl get hpa',
    description: 'List HorizontalPodAutoscalers',
    example: 'kubectl get hpa',
    versionIntroduced: '1.1',
    difficultyLevel: 'beginner',
    tags: 'hpa,autoscaling',
    flags: '',
    output: `NAME         REFERENCE              TARGETS   MINPODS   MAXPODS   REPLICAS   AGE
php-apache   Deployment/php-apache  0%/50%    1         10        1          2d`
  },

  // StatefulSet Operations
  {
    category: 'Advanced Workloads',
    subcategory: 'StatefulSets',
    command: 'kubectl scale statefulset db --replicas=3',
    description: 'Scale a statefulset to 3 replicas (Caution: Ensure data consistency before scaling down)',
    example: 'kubectl scale statefulset mysql --replicas=3',
    versionIntroduced: '1.5',
    difficultyLevel: 'intermediate',
    tags: 'statefulset,scale',
    flags: '--replicas',
    output: 'statefulset.apps/mysql scaled'
  },
  {
    category: 'Advanced Workloads',
    subcategory: 'StatefulSets',
    command: 'kubectl delete statefulset my-set --cascade=orphan',
    description: 'Delete StatefulSet but keep pods (Warning: Pods will remain running and unmanaged)',
    example: 'kubectl delete statefulset my-set --cascade=orphan',
    versionIntroduced: '1.5',
    difficultyLevel: 'advanced',
    tags: 'statefulset,delete,orphan',
    flags: '--cascade',
    output: 'statefulset.apps/my-set deleted'
  },
  {
    category: 'Advanced Workloads',
    subcategory: 'StatefulSets',
    command: 'kubectl rollout status statefulset/web',
    description: 'Watch the status of a StatefulSet rollout',
    example: 'kubectl rollout status statefulset/web',
    versionIntroduced: '1.7',
    difficultyLevel: 'intermediate',
    tags: 'statefulset,rollout,status',
    flags: '',
    output: `Waiting for 1 pods to be ready...
statefulset rolling update complete 3 pods at revision web-5c65f5778`
  },

  // Job Operations
  {
    category: 'Advanced Workloads',
    subcategory: 'Jobs',
    command: 'kubectl create job my-job --image=busybox -- echo "Hello"',
    description: 'Create a job that runs a single command',
    example: 'kubectl create job my-job --image=busybox -- echo "Hello World"',
    versionIntroduced: '1.8',
    difficultyLevel: 'beginner',
    tags: 'job,create,one-off',
    flags: '--image',
    output: 'job.batch/my-job created'
  },
  {
    category: 'Advanced Workloads',
    subcategory: 'Jobs',
    command: 'kubectl get jobs --field-selector status.successful=1',
    description: 'List successfully completed jobs',
    example: 'kubectl get jobs --field-selector status.successful=1',
    versionIntroduced: '1.8',
    difficultyLevel: 'intermediate',
    tags: 'job,list,filter,success',
    flags: '--field-selector',
    output: `NAME           COMPLETIONS   DURATION   AGE
process-data   1/1           5s         2m
backup-db      1/1           45s        5h`
  },
  {
    category: 'Advanced Workloads',
    subcategory: 'Jobs',
    command: 'kubectl create job --from=cronjob/my-cron my-manual-job',
    description: 'Create a job from an existing CronJob (Manual Trigger)',
    example: 'kubectl create job --from=cronjob/backup manual-backup-job',
    versionIntroduced: '1.8',
    difficultyLevel: 'intermediate',
    tags: 'job,create,cronjob,manual',
    flags: '--from',
    output: 'job.batch/manual-backup-job created'
  },

  // CronJob Operations
  {
    category: 'Advanced Workloads',
    subcategory: 'CronJobs',
    command: 'kubectl patch cronjob my-cron --patch \'{"spec": {"suspend": true}}\'',
    description: 'Suspend a CronJob (Warning: Scheduled jobs will not run until unsuspended)',
    example: 'kubectl patch cronjob backup-cron --patch \'{"spec": {"suspend": true}}\'',
    versionIntroduced: '1.8',
    difficultyLevel: 'intermediate',
    tags: 'cronjob,patch,suspend',
    flags: '--patch',
    output: 'cronjob.batch/backup-cron patched'
  },
  {
    category: 'Advanced Workloads',
    subcategory: 'CronJobs',
    command: 'kubectl create job --from=cronjob/my-cron manual-trigger',
    description: 'Manually trigger a job from a CronJob',
    example: 'kubectl create job --from=cronjob/backup manual-backup',
    versionIntroduced: '1.8',
    difficultyLevel: 'intermediate',
    tags: 'cronjob,trigger,manual',
    flags: '--from',
    output: 'job.batch/manual-backup created'
  },

  // Autoscaling (HPA)
  {
    category: 'Advanced Workloads',
    subcategory: 'HPA',
    command: 'kubectl describe hpa my-hpa',
    description: 'Describe HPA details including current metrics',
    example: 'kubectl describe hpa web-scaler',
    versionIntroduced: '1.1',
    difficultyLevel: 'beginner',
    tags: 'hpa,describe,metrics',
    flags: '',
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
  ScalingLimited  False   DesiredWithinRange  the desired count is within the acceptable range`
  },
  {
    category: 'Advanced Workloads',
    subcategory: 'HPA',
    command: 'kubectl autoscale deployment my-dep --cpu-percent=80 --min=1 --max=10',
    description: 'Autoscale deployment based on CPU usage',
    example: 'kubectl autoscale deployment frontend --cpu-percent=80 --min=1 --max=10',
    versionIntroduced: '1.1',
    difficultyLevel: 'intermediate',
    tags: 'hpa,autoscale,cpu',
    flags: '--cpu-percent --min --max',
    output: 'horizontalpodautoscaler.autoscaling/frontend autoscaled'
  },
  {
    category: 'Advanced Workloads',
    subcategory: 'HPA',
    command: 'kubectl get hpa --all-namespaces',
    description: 'List HPA across all namespaces',
    example: 'kubectl get hpa --all-namespaces',
    versionIntroduced: '1.1',
    difficultyLevel: 'beginner',
    tags: 'hpa,list,all-namespaces',
    flags: '--all-namespaces',
    output: `NAMESPACE   NAME         REFERENCE              TARGETS   MINPODS   MAXPODS   REPLICAS   AGE
default     web-scaler   Deployment/frontend    0%/80%    1         10        1          5m
prod        api-scaler   Deployment/api-server  45%/70%   2         20        5          10d`
  }
];
