import { K8sVersion } from "../../types";

export const k8sVersionsData: K8sVersion[] = [
  {
    id: 3,
    version: "1.35",
    releaseDate: "2025-12-17",
    majorFeatures:
      "SidecarContainers v2, DRA GA, Structured Logging GA, CEL for Admission Control GA, OpenTelemetry integration",
    deprecated: "v1beta1 FlowSchema",
    breaking: "Removal of old iptables backend",
    eolDate: "2027-02-28",
    cves: [],
    projected: false,
    description:
      'The "World Tree" release. Focuses on stabilizing Dynamic Resource Allocation (DRA) for complex hardware. Enhances SidecarContainers with more flexible lifecycle hooks. Structured logging becomes the default, improving observability integration.',
  },
  {
    id: 4,
    version: "1.34",
    releaseDate: "2025-08-27",
    majorFeatures:
      "JobSet API GA, Multi-Cluster Services GA, User Namespaces GA",
    deprecated: "Legacy ServiceAccount tokens",
    breaking: "",
    eolDate: "2026-10-27",
    cves: [],
    projected: false,
    description:
      '"Of Wind & Will". Marks the General Availability of Multi-Cluster Services (MCS), simplifying cross-cluster connectivity. User Namespaces reach GA, offering significant security improvements by isolating container root users from the host.',
  },
  {
    id: 5,
    version: "1.33",
    releaseDate: "2025-04-23",
    majorFeatures:
      "MatchLabelKeys in PodAffinity GA, PeerPods support, VolumeAttributesClass GA",
    deprecated: "",
    breaking: "",
    eolDate: "2026-06-28",
    cves: [],
    projected: false,
    description:
      '"The Color of Magic". Introduces finer-grained control over pod scheduling with MatchLabelKeys. VolumeAttributesClass allows for dynamic modification of volume properties like IOPS and throughput without restarting pods.',
  },
  {
    id: 6,
    version: "1.32",
    releaseDate: "2024-12-11",
    majorFeatures:
      "DRA (Dynamic Resource Allocation) improvements, SidecarContainers GA, Job success policy, Structured Authentication Config",
    deprecated: "Wait for first consumer storage class policy",
    breaking: "Removed support for cgroups v1",
    eolDate: "2026-02-28",
    cves: [],
    projected: false,
    description:
      'The "SidecarContainers" feature finally reaches GA, solving long-standing issues with job completion and log shipping sidecars. Cgroups v1 support is officially removed, mandating cgroups v2 for all nodes.',
  },
  {
    id: 7,
    version: "1.31",
    releaseDate: "2024-08-13",
    majorFeatures:
      "AppArmor support GA, PersistentVolume last phase transition time, JobManagedBy GA, NFTables backend for Kube-proxy",
    deprecated: "In-tree cloud providers completely removed",
    breaking: "Removal of status.nodeInfo.kubeProxyVersion",
    eolDate: "2025-08-28",
    cves: [],
    projected: false,
    description:
      "Polishes security with AppArmor support GA. The NFTables backend for kube-proxy provides a modern, performant alternative to iptables. Marks the final removal of all legacy in-tree cloud provider code.",
  },
  {
    id: 8,
    version: "1.30",
    releaseDate: "2024-04-17",
    majorFeatures:
      "Structured Authorization Configuration GA, Node Memory Swap Support Beta, User Namespaces in Pods Beta, Container Resource Based Pod Autoscaling",
    deprecated: "SecurityContextDeny admission plugin",
    breaking: "Removal of v1beta1 FlowSchema and PriorityLevelConfiguration",
    eolDate: "2025-04-28",
    cves: [],
    projected: false,
    description:
      'Dubbed "Uwubernetes", this release stabilizes Structured Authorization Configuration. Node memory swap support enters Beta, allowing for more flexible memory management on nodes. Container Resource Based Pod Autoscaling improves scaling precision.',
  },
  {
    id: 9,
    version: "1.29",
    releaseDate: "2023-12-13",
    majorFeatures:
      "ReadWriteOncePod PV Access Mode GA, NFTables Kube-proxy Beta, SidecarContainers Beta, KMS v2 Encryption GA",
    deprecated: "iptables kube-proxy backend (future)",
    breaking: "Removal of v1beta1 CRA (Common Resource Application)",
    eolDate: "2025-02-28",
    cves: ["CVE-2023-5528"],
    projected: false,
    description:
      "Introduces ReadWriteOncePod access mode for PVs to ensure strictly single-pod access. KMS v2 encryption reaches GA, offering better performance and rotation capabilities for secrets encryption at rest.",
  },
  {
    id: 10,
    version: "1.28",
    releaseDate: "2023-08-15",
    majorFeatures:
      "Mixed Version Proxy, Sidecar Containers (Alpha), Recovery from Non-Graceful Node Shutdown GA, CephFS in-tree plugin removal",
    deprecated: "CephFS in-tree volume plugin",
    breaking: "Removal of CRD v1beta1",
    eolDate: "2024-08-28",
    cves: [],
    projected: false,
    description:
      "Planternetes. Introduces native sidecar container support as an alpha feature. Recovery from non-graceful node shutdown reaches GA, improving stateful workload resilience. Removes the CephFS in-tree volume plugin.",
  },
  {
    id: 11,
    version: "1.27",
    releaseDate: "2023-04-11",
    majorFeatures:
      "SeccompDefault GA, Mutable Pod Scheduling Directives, ReadWriteOncePod Beta, Vertical Pod Autoscaler improvements",
    deprecated: "k8s.gcr.io image registry (redirected)",
    breaking: "Removal of ipv6-only-mode",
    eolDate: "2024-04-28",
    cves: [],
    projected: false,
    description:
      'Chillernetes. Makes "SeccompDefault" stable, enhancing default pod security. The k8s.gcr.io registry is frozen, with all images moving to registry.k8s.io.',
  },
  {
    id: 12,
    version: "1.26",
    releaseDate: "2022-12-08",
    majorFeatures:
      "Device Plugins GA, Job Pod Failure Policy, CEL for Admission Control Alpha, Pod Scheduling Readiness",
    deprecated: "CRI v1alpha2 removed",
    breaking: "Removal of CRI v1alpha2",
    eolDate: "2024-02-28",
    cves: ["CVE-2023-2728"],
    projected: false,
    description:
      "Electrifying. Removes the v1alpha2 CRI API, completing the migration to the v1 container runtime interface. Introduces CEL for validation in admission control as an alpha feature.",
  },
  {
    id: 13,
    version: "1.25",
    releaseDate: "2022-08-23",
    majorFeatures:
      "PodSecurity Admission GA, Ephemeral Containers GA, cgroups v2 GA, KMS v2 Alpha",
    deprecated: "PodSecurityPolicy (Removed)",
    breaking: "Removal of PodSecurityPolicy",
    eolDate: "2023-10-28",
    cves: ["CVE-2023-5528"],
    projected: false,
    description:
      "Combiner. The major release where PodSecurityPolicy (PSP) is completely removed, replaced by the Pod Security Admission controller. Ephemeral containers reach GA for debugging.",
  },
  {
    id: 14,
    version: "1.24",
    releaseDate: "2022-05-03",
    majorFeatures:
      "Dockershim Removed, StatefulSet MinReadySeconds, Volume Expansion GA, Non-Preempting Priority",
    deprecated: "Dockershim (Removed)",
    breaking: "Removal of Dockershim",
    eolDate: "2023-07-28",
    cves: ["CVE-2023-3676", "CVE-2023-3955"],
    projected: false,
    description:
      "Stargazer. The historic removal of Dockershim, meaning Kubernetes no longer interfaces directly with Docker Engine; requires containerd or CRI-O. Volume expansion support becomes stable.",
  },
  {
    id: 15,
    version: "1.23",
    releaseDate: "2021-12-07",
    majorFeatures:
      "IPv4/IPv6 Dual-stack Networking GA, PodSecurity Admission Beta, Ephemeral Containers Beta, HPA v2 GA",
    deprecated: "FlexVolume (Deprecated)",
    breaking: "",
    eolDate: "2023-02-28",
    cves: [],
    projected: false,
    description:
      "The Next Frontier. IPv4/IPv6 dual-stack networking finally reaches GA. HorizontalPodAutoscaler v2 API becomes stable.",
  },
  {
    id: 16,
    version: "1.22",
    releaseDate: "2021-08-04",
    majorFeatures:
      "Server-side Apply GA, PodSecurity Admission Alpha, MemoryQoS Alpha, API Server Tracing Alpha",
    deprecated: "Many Beta APIs removed (Ingress, CRD, etc.)",
    breaking: "Removal of extensions/v1beta1 Ingress",
    eolDate: "2022-10-28",
    cves: [],
    projected: false,
    description:
      "Reaching New Peaks. A cleanup release that removed a large number of long-deprecated beta APIs (Ingress, CRD, CertificateSigningRequest). Server-side Apply reaches GA.",
  },
  {
    id: 17,
    version: "1.21",
    releaseDate: "2021-04-08",
    majorFeatures:
      "CronJobs GA, Immutable Secrets/ConfigMaps GA, IPv4/IPv6 Dual-stack Beta, Graceful Node Shutdown Beta",
    deprecated: "PodSecurityPolicy (Deprecated)",
    breaking: "",
    eolDate: "2022-06-28",
    cves: [],
    projected: false,
    description:
      "Power to the Community. CronJobs finally reach GA after years in beta. PodSecurityPolicy is officially deprecated, signaling the move towards Pod Security Admission.",
  },
  {
    id: 18,
    version: "1.20",
    releaseDate: "2020-12-08",
    majorFeatures:
      "Volume Snapshot Operations GA, Kubectl Debug Beta, PID Limits GA, Dockershim Deprecation",
    deprecated: "Dockershim (Deprecated)",
    breaking: "",
    eolDate: "2022-02-28",
    cves: [],
    projected: false,
    description:
      "The Raddest Release. Announced the deprecation of Dockershim, sparking the industry-wide shift to CRI-compliant runtimes. Volume Snapshots became stable.",
  },
  {
    id: 19,
    version: "1.19",
    releaseDate: "2020-08-26",
    majorFeatures:
      "Ingress GA, Seccomp GA, Structured Logging Alpha, Client-side Apply to Server-side Apply migration",
    deprecated: "Basic Auth",
    breaking: "Extended support window introduced (1 year)",
    eolDate: "2021-10-28",
    cves: [],
    projected: false,
    description:
      "Accentuate the Positive. Increased the support window for Kubernetes releases from 9 months to 1 year. Ingress resource finally graduated to GA.",
  },
  {
    id: 20,
    version: "1.18",
    releaseDate: "2020-03-24",
    majorFeatures:
      "Kubectl debug (Alpha), Topology Manager (Beta), Server-side Apply (Beta 2), IngressClass",
    deprecated: "kubectl run (generators removed)",
    breaking: "",
    eolDate: "2021-06-18",
    cves: [],
    projected: false,
    description:
      "Fit & Finish. Focused on refining existing features. Introduced the Topology Manager to beta for better NUMA alignment. kubectl run generators were deprecated/removed to simplify the command.",
  },
  {
    id: 21,
    version: "1.17",
    releaseDate: "2019-12-07",
    majorFeatures:
      "Cloud Provider Labels GA, Volume Snapshot Beta, CSI Migration Beta, IPv4/IPv6 Dual-Stack (Alpha)",
    deprecated: "",
    breaking: "",
    eolDate: "2021-01-13",
    cves: [],
    projected: false,
    description:
      "Stability. A smaller release focusing on stability and graduating features. Cloud Provider Labels reached GA, standardizing how nodes are labeled across clouds.",
  },
  {
    id: 22,
    version: "1.16",
    releaseDate: "2019-09-18",
    majorFeatures:
      "CRDs GA, Admission Webhooks GA, CSI Volume Resizing GA, Server-side Apply (Beta)",
    deprecated: "extensions/v1beta1 Deployment, DaemonSet, ReplicaSet",
    breaking: "Removal of deprecated APIs (extensions/v1beta1)",
    eolDate: "2020-09-02",
    cves: [],
    projected: false,
    description:
      "Custom Resources. A milestone release that brought Custom Resource Definitions (CRDs) to GA, enabling the operator pattern. Also removed significant deprecated APIs, requiring manifest updates.",
  },
  {
    id: 23,
    version: "1.15",
    releaseDate: "2019-06-19",
    majorFeatures:
      "Extensibility improvements, Cluster Lifecycle stability, CSI volume expansion, Taint Based Eviction (Beta)",
    deprecated:
      "extensions/v1beta1 Deployment, DaemonSet, ReplicaSet (continued)",
    breaking: "NodeLocal DNSCache promoted to Beta",
    eolDate: "2020-05-06",
    cves: [],
    projected: false,
    description:
      "Extensibility. Focused on interface extensibility and stability. CRD structural schemas and pruning reached Beta, improving custom resource validation.",
  },
  {
    id: 24,
    version: "1.14",
    releaseDate: "2019-03-25",
    majorFeatures:
      "Windows Node Support GA, Pod Priority and Preemption GA, PersistentLocalVolumes GA, PID Limiting Beta",
    deprecated: "Heapster (Retired)",
    breaking: "CoreDNS becomes default DNS provider",
    eolDate: "2019-12-11",
    cves: [],
    projected: false,
    description:
      "Production-Ready Windows. A huge milestone introducing production-level support for Windows nodes. Pod Priority and Preemption also reached GA.",
  },
  {
    id: 25,
    version: "1.13",
    releaseDate: "2018-12-03",
    majorFeatures:
      "Kubeadm GA, CSI GA, CoreDNS default, TaintBasedEvictions Beta, DryRun Beta",
    deprecated: "etcd2 backend support",
    breaking: "API server dry-run",
    eolDate: "2019-10-15",
    cves: [],
    projected: false,
    description:
      "Simplification. Kubeadm finally reached General Availability, simplifying cluster bootstrapping. The Container Storage Interface (CSI) also went GA.",
  },
  {
    id: 26,
    version: "1.12",
    releaseDate: "2018-09-27",
    majorFeatures:
      "Kubelet TLS Bootstrap GA, VM Scale Sets GA, Snapshot/Restore Alpha, RuntimeClass Alpha",
    deprecated: "Heapster (deprecated)",
    breaking: "Mount propagation GA",
    eolDate: "2019-07-08",
    cves: [],
    projected: false,
    description:
      "Security & Cloud. Kubelet TLS bootstrap hardening reached GA. Added support for Azure Virtual Machine Scale Sets and volume snapshots.",
  },
  {
    id: 27,
    version: "1.11",
    releaseDate: "2018-06-27",
    majorFeatures:
      "IPVS Load Balancing GA, CoreDNS GA, Dynamic Kubelet Config Beta, CRD Versioning Beta",
    deprecated: "In-tree cloud providers (deprecation started)",
    breaking: "Priority and Preemption Beta",
    eolDate: "2019-05-01",
    cves: [],
    projected: false,
    description:
      "Networking & DNS. IPVS-based in-cluster service load balancing reached GA for better scalability. CoreDNS was promoted to GA as an option.",
  },
  {
    id: 28,
    version: "1.10",
    releaseDate: "2018-03-26",
    majorFeatures:
      "CSI Beta, Local Persistent Storage Beta, CoreDNS Beta, DevicePlugins Beta",
    deprecated: "ThirdPartyResources (removed)",
    breaking: "Kubectl port-forward improvements",
    eolDate: "2019-02-13",
    cves: [],
    projected: false,
    description:
      "Storage & Standards. Key storage features like CSI and Local Persistent Storage moved to Beta. Marked the final removal of ThirdPartyResources.",
  },
];
