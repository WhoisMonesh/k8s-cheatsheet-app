
export const staticQuizQuestions = [
  {
    type: 'concept',
    question: 'Which Kubernetes component is responsible for maintaining the desired state of the cluster?',
    correctAnswer: 'kube-controller-manager',
    options: ['kube-scheduler', 'kubelet', 'kube-controller-manager', 'etcd'],
    explanation: 'The kube-controller-manager runs controller processes (like ReplicaSet controller) that watch the state of the cluster and make changes to move the current state towards the desired state.'
  },
  {
    type: 'concept',
    question: 'What is the default restart policy for a Pod?',
    correctAnswer: 'Always',
    options: ['Never', 'OnFailure', 'Always', 'UnlessStopped'],
    explanation: 'The default RestartPolicy for a Pod is "Always", meaning the container will be restarted if it exits, regardless of the exit code.'
  },
  {
    type: 'concept',
    question: 'Which object is used to expose a Service externally using a cloud provider\'s load balancer?',
    correctAnswer: 'LoadBalancer',
    options: ['ClusterIP', 'NodePort', 'LoadBalancer', 'Ingress'],
    explanation: 'A Service of type LoadBalancer exposes the Service externally using a cloud provider\'s load balancer.'
  },
  {
    type: 'concept',
    question: 'Where does Kubernetes store its cluster data and configuration?',
    correctAnswer: 'etcd',
    options: ['PostgreSQL', 'etcd', 'Redis', 'MongoDB'],
    explanation: 'etcd is a consistent and highly-available key value store used as Kubernetes\' backing store for all cluster data.'
  },
  {
    type: 'concept',
    question: 'Which component runs on every node and ensures containers are running in a Pod?',
    correctAnswer: 'kubelet',
    options: ['kube-proxy', 'container-runtime', 'kubelet', 'coredns'],
    explanation: 'The kubelet is the primary "node agent" that runs on each node and ensures that containers are described in PodSpecs are running and healthy.'
  },
  {
    type: 'concept',
    question: 'What is the smallest deployable unit in Kubernetes?',
    correctAnswer: 'Pod',
    options: ['Container', 'Pod', 'Deployment', 'ReplicaSet'],
    explanation: 'A Pod is the smallest and simplest Kubernetes object. A Pod represents a set of running containers on your cluster.'
  },
  {
    type: 'concept',
    question: 'Which command is used to drain a node for maintenance?',
    correctAnswer: 'kubectl drain',
    options: ['kubectl cordon', 'kubectl delete node', 'kubectl drain', 'kubectl taint'],
    explanation: 'kubectl drain safely evicts all of your pods from a node before you perform maintenance on the node.'
  },
  {
    type: 'concept',
    question: 'What is the purpose of a Liveness Probe?',
    correctAnswer: 'To determine when to restart a container',
    options: ['To determine when a container is ready to accept traffic', 'To determine when to restart a container', 'To check if the node is alive', 'To measure CPU usage'],
    explanation: 'Liveness probes indicate whether the container is running. If the liveness probe fails, the kubelet kills the container, and the container is subjected to its restart policy.'
  },
  {
    type: 'concept',
    question: 'Which resource is best for running a database that requires persistent storage and stable network identity?',
    correctAnswer: 'StatefulSet',
    options: ['Deployment', 'DaemonSet', 'StatefulSet', 'Job'],
    explanation: 'StatefulSets manage the deployment and scaling of a set of Pods, and provides guarantees about the ordering and uniqueness of these Pods, which is ideal for databases.'
  },
  {
    type: 'concept',
    question: 'What does a Readiness Probe determine?',
    correctAnswer: 'When a container is ready to accept traffic',
    options: ['When the application has started', 'When a container is ready to accept traffic', 'When the container needs to be restarted', 'When the pod is scheduled'],
    explanation: 'Readiness probes indicate whether the container is ready to respond to requests. If the readiness probe fails, the endpoints controller removes the Pod\'s IP address from the endpoints of all Services that match the Pod.'
  }
];
