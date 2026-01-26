export const storageCommandsData = [
  // Persistent Volumes
  {
    category: 'Storage',
    subcategory: 'Persistent Volumes',
    command: 'kubectl get pv --sort-by=.spec.capacity.storage',
    description: 'List PVs sorted by capacity',
    example: 'kubectl get pv --sort-by=.spec.capacity.storage',
    versionIntroduced: '1.0',
    difficultyLevel: 'beginner',
    tags: 'pv,storage,sort',
    flags: '--sort-by',
    output: `NAME      CAPACITY   ACCESS MODES   RECLAIM POLICY   STATUS   CLAIM             STORAGECLASS   REASON   AGE
pv-001    1Gi        RWO            Retain           Bound    default/pvc-001   standard                5d
pv-002    10Gi       RWO            Delete           Bound    default/pvc-002   standard                5d
pv-003    100Gi      RWX            Retain           Available                  nfs                     10d`
  },
  {
    category: 'Storage',
    subcategory: 'Persistent Volumes',
    command: 'kubectl get pv -o custom-columns=NAME:.metadata.name,CAPACITY:.spec.capacity.storage,STATUS:.status.phase',
    description: 'List PVs with custom columns',
    example: 'kubectl get pv -o custom-columns=NAME:.metadata.name,CAPACITY:.spec.capacity.storage,STATUS:.status.phase',
    versionIntroduced: '1.0',
    difficultyLevel: 'intermediate',
    tags: 'pv,storage,custom-columns',
    flags: '-o custom-columns',
    output: `NAME      CAPACITY   STATUS
pv-001    1Gi        Bound
pv-002    10Gi       Bound
pv-003    100Gi      Available`
  },

  // Persistent Volume Claims
  {
    category: 'Storage',
    subcategory: 'Persistent Volume Claims',
    command: 'kubectl get pvc --all-namespaces',
    description: 'List PVCs in all namespaces',
    example: 'kubectl get pvc --all-namespaces',
    versionIntroduced: '1.0',
    difficultyLevel: 'beginner',
    tags: 'pvc,storage,list',
    flags: '--all-namespaces',
    output: `NAMESPACE   NAME          STATUS   VOLUME   CAPACITY   ACCESS MODES   STORAGECLASS   AGE
default     data-pvc      Bound    pv-001   1Gi        RWO            standard       5d
monitoring  prom-storage  Bound    pv-002   10Gi       RWO            standard       10d`
  },
  {
    category: 'Storage',
    subcategory: 'Persistent Volume Claims',
    command: 'kubectl delete pvc --all',
    description: 'Delete all PVCs in current namespace',
    example: 'kubectl delete pvc --all',
    versionIntroduced: '1.0',
    difficultyLevel: 'dangerous',
    tags: 'pvc,delete,cleanup',
    flags: '--all',
    output: `persistentvolumeclaim "data-pvc" deleted
persistentvolumeclaim "web-content" deleted`
  },

  // Storage Classes
  {
    category: 'Storage',
    subcategory: 'Storage Classes',
    command: 'kubectl get sc',
    description: 'List all StorageClasses',
    example: 'kubectl get sc',
    versionIntroduced: '1.4',
    difficultyLevel: 'beginner',
    tags: 'storageclass,sc,list',
    flags: '',
    output: `NAME                 PROVISIONER                RECLAIMPOLICY   VOLUMEBINDINGMODE   ALLOWVOLUMEEXPANSION   AGE
standard (default)   k8s.io/minikube-hostpath   Delete          Immediate           false                  25d
nfs-client           k8s-sigs.io/nfs-subdir     Delete          Immediate           true                   10d`
  },
  {
    category: 'Storage',
    subcategory: 'Storage Classes',
    command: 'kubectl describe sc standard',
    description: 'Describe standard StorageClass',
    example: 'kubectl describe sc standard',
    versionIntroduced: '1.4',
    difficultyLevel: 'beginner',
    tags: 'storageclass,describe',
    flags: '',
    output: `Name:            standard
IsDefaultClass:  Yes
Annotations:     storageclass.kubernetes.io/is-default-class=true
Provisioner:     k8s.io/minikube-hostpath
Parameters:      <none>
ReclaimPolicy:   Delete
VolumeBindingMode: Immediate
Events:          <none>`
  },

  // Persistent Volume Operations
  {
    category: 'Storage',
    subcategory: 'Persistent Volumes',
    command: 'kubectl describe pv my-pv',
    description: 'Describe a Persistent Volume',
    example: 'kubectl describe pv pv-volume',
    versionIntroduced: '1.0',
    difficultyLevel: 'beginner',
    tags: 'pv,describe,storage',
    flags: '',
    output: `Name:            pv-volume
Labels:          type=local
Annotations:     pv.kubernetes.io/bound-by-controller=yes
Finalizers:      [kubernetes.io/pv-protection]
StorageClass:    manual
Status:          Bound
Claim:           default/pvc-claim
Reclaim Policy:  Retain
Access Modes:    RWO
Capacity:        10Gi
Node Affinity:   <none>
Message:         
Source:
    Type:          HostPath (bare host directory volume)
    Path:          /mnt/data
    HostPathType:  
Events:          <none>`
  },
  {
    category: 'Storage',
    subcategory: 'Persistent Volumes',
    command: 'kubectl patch pv my-pv -p \'{"spec":{"claimRef": null}}\'',
    description: 'Release a PV by clearing the claim reference (Warning: Can lead to data loss/inconsistency)',
    example: 'kubectl patch pv pv-volume -p \'{"spec":{"claimRef": null}}\'',
    versionIntroduced: '1.0',
    difficultyLevel: 'advanced',
    tags: 'pv,patch,release',
    flags: '-p',
    output: 'persistentvolume/pv-volume patched'
  },
  {
    category: 'Storage',
    subcategory: 'Persistent Volumes',
    command: 'kubectl get pv --sort-by=.spec.capacity.storage',
    description: 'List PVs sorted by capacity',
    example: 'kubectl get pv --sort-by=.spec.capacity.storage',
    versionIntroduced: '1.0',
    difficultyLevel: 'intermediate',
    tags: 'pv,list,sort,capacity',
    flags: '--sort-by',
    output: `NAME      CAPACITY   ACCESS MODES   RECLAIM POLICY   STATUS   CLAIM             STORAGECLASS   REASON   AGE
pv-001    1Gi        RWO            Retain           Bound    default/pvc-001   standard                5d
pv-002    10Gi       RWO            Delete           Bound    default/pvc-002   standard                5d
pv-003    100Gi      RWX            Retain           Available                  nfs                     10d`
  },

  // Persistent Volume Claim Operations
  {
    category: 'Storage',
    subcategory: 'Persistent Volume Claims',
    command: 'kubectl patch pvc my-claim -p \'{"spec":{"resources":{"requests":{"storage":"100Gi"}}}}\'',
    description: 'Resize a PVC (Note: Only increases are supported)',
    example: 'kubectl patch pvc data-claim -p \'{"spec":{"resources":{"requests":{"storage":"100Gi"}}}}\'',
    versionIntroduced: '1.11',
    difficultyLevel: 'intermediate',
    tags: 'pvc,resize,patch',
    flags: '-p',
    output: 'persistentvolumeclaim/data-claim patched'
  },
  {
    category: 'Storage',
    subcategory: 'Persistent Volume Claims',
    command: 'kubectl get pvc --field-selector status.phase=Bound',
    description: 'List all bound PVCs',
    example: 'kubectl get pvc --field-selector status.phase=Bound',
    versionIntroduced: '1.0',
    difficultyLevel: 'intermediate',
    tags: 'pvc,list,filter,bound',
    flags: '--field-selector',
    output: `NAME          STATUS   VOLUME   CAPACITY   ACCESS MODES   STORAGECLASS   AGE
data-pvc      Bound    pv-001   1Gi        RWO            standard       5d
prom-storage  Bound    pv-002   10Gi       RWO            standard       10d`
  },
  {
    category: 'Storage',
    subcategory: 'Persistent Volume Claims',
    command: 'kubectl delete pvc --all',
    description: 'Delete all PVCs in current namespace (Warning: This will delete all data volumes)',
    example: 'kubectl delete pvc --all',
    versionIntroduced: '1.0',
    difficultyLevel: 'advanced',
    tags: 'pvc,delete,all',
    flags: '--all',
    output: `persistentvolumeclaim "data-pvc" deleted
persistentvolumeclaim "web-content" deleted`
  },

  // Storage Class
  {
    category: 'Storage',
    subcategory: 'Storage Classes',
    command: 'kubectl get sc',
    description: 'List all Storage Classes',
    example: 'kubectl get sc',
    versionIntroduced: '1.4',
    difficultyLevel: 'beginner',
    tags: 'sc,list,storageclass',
    flags: '',
    output: `NAME                 PROVISIONER                RECLAIMPOLICY   VOLUMEBINDINGMODE   ALLOWVOLUMEEXPANSION   AGE
standard (default)   k8s.io/minikube-hostpath   Delete          Immediate           false                  25d
nfs-client           k8s-sigs.io/nfs-subdir     Delete          Immediate           true                   10d`
  },
  {
    category: 'Storage',
    subcategory: 'Storage Classes',
    command: 'kubectl patch storageclass standard -p \'{"metadata": {"annotations":{"storageclass.kubernetes.io/is-default-class":"true"}}}\'',
    description: 'Set a default StorageClass',
    example: 'kubectl patch storageclass gp2 -p \'{"metadata": {"annotations":{"storageclass.kubernetes.io/is-default-class":"true"}}}\'',
    versionIntroduced: '1.4',
    difficultyLevel: 'intermediate',
    tags: 'sc,patch,default',
    flags: '-p',
    output: 'storageclass.storage.k8s.io/gp2 patched'
  },
  // Volume Snapshots
  {
    category: 'Storage',
    subcategory: 'Volume Snapshots',
    command: 'kubectl get volumesnapshot',
    description: 'List all volume snapshots',
    example: 'kubectl get volumesnapshot',
    versionIntroduced: '1.17',
    difficultyLevel: 'intermediate',
    tags: 'snapshot,list,storage',
    flags: '',
    output: 'NAME          READYTOUSE   SOURCEPVC   RESTORESIZE   SNAPSHOTCLASS    AGE\nbackup-snap   true         data-pvc    1Gi           csi-snap-class   2m'
  },
  {
    category: 'Storage',
    subcategory: 'Volume Snapshots',
    command: 'kubectl describe volumesnapshot my-snapshot',
    description: 'Describe a volume snapshot',
    example: 'kubectl describe volumesnapshot backup-snap',
    versionIntroduced: '1.17',
    difficultyLevel: 'intermediate',
    tags: 'snapshot,describe,storage',
    flags: '',
    output: 'Name:         backup-snap\nNamespace:    default\nLabels:       <none>\nAnnotations:  <none>\nAPI Version:  snapshot.storage.k8s.io/v1\nKind:         VolumeSnapshot\nMetadata:\n  Creation Timestamp:  2024-01-26T10:00:00Z\nSpec:\n  Source:\n    Persistent Volume Claim Name:  data-pvc\n  Volume Snapshot Class Name:      csi-snap-class\nStatus:\n  Bound Volume Snapshot Content Name:  snapcontent-abcde\n  Creation Time:                       2024-01-26T10:00:05Z\n  Ready To Use:                        true\n  Restore Size:                        1Gi'
  },
  {
    category: 'Storage',
    subcategory: 'CSI',
    command: 'kubectl get csinodes',
    description: 'List all CSI nodes',
    example: 'kubectl get csinodes',
    versionIntroduced: '1.14',
    difficultyLevel: 'intermediate',
    tags: 'csi,node,list',
    flags: '',
    output: 'NAME       DRIVERS   AGE\nminikube   1         25d'
  },
  {
    category: 'Storage',
    subcategory: 'CSI',
    command: 'kubectl get csidrivers',
    description: 'List all registered CSI drivers',
    example: 'kubectl get csidrivers',
    versionIntroduced: '1.14',
    difficultyLevel: 'intermediate',
    tags: 'csi,driver,list',
    flags: '',
    output: 'NAME                 ATTACHREQUIRED   PODINFOONMOUNT   STORAGECAPACITY   TOKENREQUESTS   REQUIRESREPUBLISH   MODES        AGE\nk8s.io/minikube-hostpath   true             false            false             <unset>         false               Persistent   25d'
  }
];
