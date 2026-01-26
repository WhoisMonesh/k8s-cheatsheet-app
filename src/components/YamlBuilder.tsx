import { useState, useEffect } from 'react';
import { Copy, Check, FileCode, Layers, Package, Globe, Database, Clock, HardDrive, Shield, Key, Plus, Trash2 } from 'lucide-react';

type ResourceType = 'pod' | 'deployment' | 'service' | 'configmap' | 'secret' | 'pvc' | 'ingress' | 'cronjob';

interface KeyValue {
  key: string;
  value: string;
}

interface ContainerPort {
  containerPort: number;
  name?: string;
  protocol: 'TCP' | 'UDP';
}

interface EnvVar {
  name: string;
  value: string;
}

interface VolumeMount {
  name: string;
  mountPath: string;
}

interface Volume {
  name: string;
  type: 'emptyDir' | 'hostPath' | 'configMap' | 'secret' | 'pvc';
  source: string; // Simplification: generic source string or specific field based on type
}

interface YamlFormState {
  name: string;
  namespace: string;
  labels: KeyValue[];
  annotations: KeyValue[];
  
  // Container Specs
  image: string;
  replicas: number;
  ports: ContainerPort[];
  env: EnvVar[];
  resources: {
    requests: { cpu: string; memory: string };
    limits: { cpu: string; memory: string };
  };
  volumeMounts: VolumeMount[];
  volumes: Volume[];
  
  // Service Specs
  serviceType: 'ClusterIP' | 'NodePort' | 'LoadBalancer' | 'ExternalName';
  servicePorts: { port: number; targetPort: number; nodePort?: number; protocol: 'TCP' | 'UDP' }[];
  
  // ConfigMap/Secret Specs
  data: KeyValue[];
  
  // PVC Specs
  accessModes: ('ReadWriteOnce' | 'ReadOnlyMany' | 'ReadWriteMany')[];
  storageSize: string;
  storageClass: string;
  
  // Ingress Specs
  ingressRules: { host: string; path: string; serviceName: string; servicePort: number }[];
  
  // CronJob Specs
  schedule: string;
}

const INITIAL_STATE: YamlFormState = {
  name: 'my-resource',
  namespace: 'default',
  labels: [{ key: 'app', value: 'my-app' }],
  annotations: [],
  image: 'nginx:latest',
  replicas: 1,
  ports: [{ containerPort: 80, protocol: 'TCP' }],
  env: [],
  resources: { requests: { cpu: '', memory: '' }, limits: { cpu: '', memory: '' } },
  volumeMounts: [],
  volumes: [],
  serviceType: 'ClusterIP',
  servicePorts: [{ port: 80, targetPort: 80, protocol: 'TCP' }],
  data: [{ key: 'key', value: 'value' }],
  accessModes: ['ReadWriteOnce'],
  storageSize: '1Gi',
  storageClass: 'standard',
  ingressRules: [{ host: 'example.com', path: '/', serviceName: 'my-service', servicePort: 80 }],
  schedule: '0 0 * * *'
};

export function YamlBuilder() {
  const [resourceType, setResourceType] = useState<ResourceType>('pod');
  const [form, setForm] = useState<YamlFormState>(INITIAL_STATE);
  const [activeTab, setActiveTab] = useState<'basic' | 'spec' | 'advanced'>('basic');
  const [generatedYaml, setGeneratedYaml] = useState('');
  const [copied, setCopied] = useState(false);

  const resourceTypes: { id: ResourceType; label: string; icon: any }[] = [
    { id: 'pod', label: 'Pod', icon: Package },
    { id: 'deployment', label: 'Deployment', icon: Layers },
    { id: 'service', label: 'Service', icon: Globe },
    { id: 'ingress', label: 'Ingress', icon: Shield }, // Using Shield as placeholder for Ingress
    { id: 'configmap', label: 'ConfigMap', icon: Database },
    { id: 'secret', label: 'Secret', icon: Key },
    { id: 'pvc', label: 'PVC', icon: HardDrive },
    { id: 'cronjob', label: 'CronJob', icon: Clock },
  ];

  useEffect(() => {
    generateYaml();
  }, [form, resourceType]);

  const updateForm = (key: keyof YamlFormState, value: any) => {
    setForm(prev => ({ ...prev, [key]: value }));
  };

  const updateNested = (parent: keyof YamlFormState, key: string, value: any) => {
    setForm(prev => ({
      ...prev,
      [parent]: { ...prev[parent] as any, [key]: value }
    }));
  };

  const addArrayItem = <T,>(key: keyof YamlFormState, initial: T) => {
    setForm(prev => ({
      ...prev,
      [key]: [...(prev[key] as any[]), initial]
    }));
  };

  const updateArrayItem = <T,>(key: keyof YamlFormState, index: number, field: keyof T, value: any) => {
    setForm(prev => {
      const arr = [...(prev[key] as any[])];
      arr[index] = { ...arr[index], [field]: value };
      return { ...prev, [key]: arr };
    });
  };

  const removeArrayItem = (key: keyof YamlFormState, index: number) => {
    setForm(prev => ({
      ...prev,
      [key]: (prev[key] as any[]).filter((_, i) => i !== index)
    }));
  };

  const generateYaml = () => {
    const {
      name, namespace, labels, annotations, image, replicas, ports, env, resources,
      serviceType, servicePorts, data, accessModes, storageSize, storageClass,
      ingressRules, schedule, volumes, volumeMounts
    } = form;

    const meta = `metadata:
  name: ${name}
  namespace: ${namespace}
  labels:
${labels.map(l => `    ${l.key}: ${l.value}`).join('\n') || `    app: ${name}`}
${annotations.length > 0 ? `  annotations:
${annotations.map(a => `    ${a.key}: "${a.value}"`).join('\n')}` : ''}`;

    let spec = '';

    // Helper for container spec
    const containerSpec = (indent: string) => `
${indent}- name: ${name}
${indent}  image: ${image}
${indent}  imagePullPolicy: IfNotPresent
${ports.length > 0 ? `${indent}  ports:
${ports.map(p => `${indent}  - containerPort: ${p.containerPort}
${indent}    protocol: ${p.protocol}${p.name ? `\n${indent}    name: ${p.name}` : ''}`).join('\n')}` : ''}
${env.length > 0 ? `${indent}  env:
${env.map(e => `${indent}  - name: ${e.name}
${indent}    value: "${e.value}"`).join('\n')}` : ''}
${(resources.requests.cpu || resources.requests.memory || resources.limits.cpu || resources.limits.memory) ? `${indent}  resources:
${(resources.requests.cpu || resources.requests.memory) ? `${indent}    requests:
${resources.requests.cpu ? `${indent}      cpu: ${resources.requests.cpu}` : ''}
${resources.requests.memory ? `${indent}      memory: ${resources.requests.memory}` : ''}` : ''}
${(resources.limits.cpu || resources.limits.memory) ? `${indent}    limits:
${resources.limits.cpu ? `${indent}      cpu: ${resources.limits.cpu}` : ''}
${resources.limits.memory ? `${indent}      memory: ${resources.limits.memory}` : ''}` : ''}` : ''}
${volumeMounts.length > 0 ? `${indent}  volumeMounts:
${volumeMounts.map(v => `${indent}  - name: ${v.name}
${indent}    mountPath: ${v.mountPath}`).join('\n')}` : ''}`;

    const volumesSpec = (indent: string) => volumes.length > 0 ? `
${indent}volumes:
${volumes.map(v => `${indent}- name: ${v.name}
${indent}  ${v.type}:
${indent}    ${v.type === 'emptyDir' ? '{}' : v.type === 'pvc' ? `claimName: ${v.source}` : `path: ${v.source}`}`).join('\n')}` : '';

    switch (resourceType) {
      case 'pod':
        spec = `apiVersion: v1
kind: Pod
${meta}
spec:
  containers:${containerSpec('  ')}
${volumesSpec('  ')}`;
        break;

      case 'deployment':
        spec = `apiVersion: apps/v1
kind: Deployment
${meta}
spec:
  replicas: ${replicas}
  selector:
    matchLabels:
${labels.map(l => `      ${l.key}: ${l.value}`).join('\n') || `      app: ${name}`}
  template:
    metadata:
      labels:
${labels.map(l => `        ${l.key}: ${l.value}`).join('\n') || `        app: ${name}`}
    spec:
      containers:${containerSpec('      ')}
${volumesSpec('      ')}`;
        break;

      case 'service':
        spec = `apiVersion: v1
kind: Service
${meta}
spec:
  type: ${serviceType}
  selector:
${labels.map(l => `    ${l.key}: ${l.value}`).join('\n') || `    app: ${name}`}
  ports:
${servicePorts.map(p => `  - port: ${p.port}
    targetPort: ${p.targetPort}
    protocol: ${p.protocol}
${p.nodePort && serviceType === 'NodePort' ? `    nodePort: ${p.nodePort}` : ''}`).join('\n')}`;
        break;

      case 'configmap':
        spec = `apiVersion: v1
kind: ConfigMap
${meta}
data:
${data.map(d => `  ${d.key}: |
    ${d.value.replace(/\n/g, '\n    ')}`).join('\n')}`;
        break;

      case 'secret':
        spec = `apiVersion: v1
kind: Secret
${meta}
type: Opaque
stringData:
${data.map(d => `  ${d.key}: "${d.value}"`).join('\n')}`;
        break;

      case 'pvc':
        spec = `apiVersion: v1
kind: PersistentVolumeClaim
${meta}
spec:
  accessModes:
${accessModes.map(m => `    - ${m}`).join('\n')}
  resources:
    requests:
      storage: ${storageSize}
  storageClassName: ${storageClass}`;
        break;
      
      case 'ingress':
        spec = `apiVersion: networking.k8s.io/v1
kind: Ingress
${meta}
spec:
  rules:
${ingressRules.map(r => `  - host: ${r.host}
    http:
      paths:
      - path: ${r.path}
        pathType: Prefix
        backend:
          service:
            name: ${r.serviceName}
            port:
              number: ${r.servicePort}`).join('\n')}`;
        break;

      case 'cronjob':
        spec = `apiVersion: batch/v1
kind: CronJob
${meta}
spec:
  schedule: "${schedule}"
  jobTemplate:
    spec:
      template:
        spec:
          containers:${containerSpec('          ')}
          restartPolicy: OnFailure
${volumesSpec('          ')}`;
        break;
    }

    setGeneratedYaml(spec.trim());
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(generatedYaml);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="flex h-[calc(100vh-100px)] gap-6 p-6">
      {/* Left Panel: Form */}
      <div className="w-1/2 flex flex-col gap-6 overflow-y-auto pr-2">
        <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-6 shadow-sm">
          <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2">
            <FileCode className="w-6 h-6 text-brand-500" />
            Resource Type
          </h2>
          <div className="grid grid-cols-4 gap-3">
            {resourceTypes.map(type => (
              <button
                key={type.id}
                onClick={() => setResourceType(type.id)}
                className={`flex flex-col items-center gap-2 p-3 rounded-xl border transition-all ${
                  resourceType === type.id
                    ? 'bg-brand-50 border-brand-500 text-brand-700 dark:bg-brand-900/20 dark:text-brand-300'
                    : 'bg-white border-slate-200 text-slate-600 hover:border-brand-300 dark:bg-slate-800 dark:border-slate-700 dark:text-slate-400'
                }`}
              >
                <type.icon className="w-6 h-6" />
                <span className="text-xs font-medium">{type.label}</span>
              </button>
            ))}
          </div>
        </div>

        <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-6 shadow-sm flex-1">
          <div className="flex gap-4 border-b border-slate-200 dark:border-slate-700 mb-6">
            <button
              onClick={() => setActiveTab('basic')}
              className={`pb-2 text-sm font-medium border-b-2 transition-colors ${
                activeTab === 'basic' ? 'border-brand-500 text-brand-600 dark:text-brand-400' : 'border-transparent text-slate-500 hover:text-slate-700'
              }`}
            >
              Metadata
            </button>
            <button
              onClick={() => setActiveTab('spec')}
              className={`pb-2 text-sm font-medium border-b-2 transition-colors ${
                activeTab === 'spec' ? 'border-brand-500 text-brand-600 dark:text-brand-400' : 'border-transparent text-slate-500 hover:text-slate-700'
              }`}
            >
              Spec
            </button>
            {['pod', 'deployment', 'cronjob'].includes(resourceType) && (
              <button
                onClick={() => setActiveTab('advanced')}
                className={`pb-2 text-sm font-medium border-b-2 transition-colors ${
                  activeTab === 'advanced' ? 'border-brand-500 text-brand-600 dark:text-brand-400' : 'border-transparent text-slate-500 hover:text-slate-700'
                }`}
              >
                Advanced
              </button>
            )}
          </div>

          <div className="space-y-6">
            {activeTab === 'basic' && (
              <>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Name</label>
                    <input
                      type="text"
                      value={form.name}
                      onChange={(e) => updateForm('name', e.target.value)}
                      className="w-full px-3 py-2 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Namespace</label>
                    <input
                      type="text"
                      value={form.namespace}
                      onChange={(e) => updateForm('namespace', e.target.value)}
                      className="w-full px-3 py-2 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg text-sm"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Labels</label>
                  {form.labels.map((label, idx) => (
                    <div key={idx} className="flex gap-2 mb-2">
                      <input
                        placeholder="Key"
                        value={label.key}
                        onChange={(e) => updateArrayItem('labels', idx, 'key', e.target.value)}
                        className="flex-1 px-3 py-2 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg text-sm"
                      />
                      <input
                        placeholder="Value"
                        value={label.value}
                        onChange={(e) => updateArrayItem('labels', idx, 'value', e.target.value)}
                        className="flex-1 px-3 py-2 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg text-sm"
                      />
                      <button onClick={() => removeArrayItem('labels', idx)} className="text-red-500 hover:text-red-700"><Trash2 className="w-4 h-4" /></button>
                    </div>
                  ))}
                  <button onClick={() => addArrayItem('labels', { key: '', value: '' })} className="text-sm text-brand-600 flex items-center gap-1 hover:underline">
                    <Plus className="w-3 h-3" /> Add Label
                  </button>
                </div>
              </>
            )}

            {activeTab === 'spec' && (
              <>
                {['pod', 'deployment', 'cronjob'].includes(resourceType) && (
                  <>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Image</label>
                        <input
                          value={form.image}
                          onChange={(e) => updateForm('image', e.target.value)}
                          className="w-full px-3 py-2 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg text-sm"
                        />
                      </div>
                      {resourceType === 'deployment' && (
                        <div>
                          <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Replicas</label>
                          <input
                            type="number"
                            value={form.replicas}
                            onChange={(e) => updateForm('replicas', parseInt(e.target.value))}
                            className="w-full px-3 py-2 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg text-sm"
                          />
                        </div>
                      )}
                      {resourceType === 'cronjob' && (
                        <div>
                          <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Schedule</label>
                          <input
                            value={form.schedule}
                            onChange={(e) => updateForm('schedule', e.target.value)}
                            className="w-full px-3 py-2 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg text-sm"
                            placeholder="*/5 * * * *"
                          />
                        </div>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Ports</label>
                      {form.ports.map((port, idx) => (
                        <div key={idx} className="flex gap-2 mb-2">
                          <input
                            type="number"
                            placeholder="Port"
                            value={port.containerPort}
                            onChange={(e) => updateArrayItem('ports', idx, 'containerPort', parseInt(e.target.value))}
                            className="w-24 px-3 py-2 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg text-sm"
                          />
                          <select
                            value={port.protocol}
                            onChange={(e) => updateArrayItem('ports', idx, 'protocol', e.target.value)}
                            className="w-24 px-3 py-2 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg text-sm"
                          >
                            <option value="TCP">TCP</option>
                            <option value="UDP">UDP</option>
                          </select>
                          <button onClick={() => removeArrayItem('ports', idx)} className="text-red-500 hover:text-red-700"><Trash2 className="w-4 h-4" /></button>
                        </div>
                      ))}
                      <button onClick={() => addArrayItem('ports', { containerPort: 80, protocol: 'TCP' })} className="text-sm text-brand-600 flex items-center gap-1 hover:underline">
                        <Plus className="w-3 h-3" /> Add Port
                      </button>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Environment Variables</label>
                      {form.env.map((env, idx) => (
                        <div key={idx} className="flex gap-2 mb-2">
                          <input
                            placeholder="Name"
                            value={env.name}
                            onChange={(e) => updateArrayItem('env', idx, 'name', e.target.value)}
                            className="flex-1 px-3 py-2 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg text-sm"
                          />
                          <input
                            placeholder="Value"
                            value={env.value}
                            onChange={(e) => updateArrayItem('env', idx, 'value', e.target.value)}
                            className="flex-1 px-3 py-2 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg text-sm"
                          />
                          <button onClick={() => removeArrayItem('env', idx)} className="text-red-500 hover:text-red-700"><Trash2 className="w-4 h-4" /></button>
                        </div>
                      ))}
                      <button onClick={() => addArrayItem('env', { name: '', value: '' })} className="text-sm text-brand-600 flex items-center gap-1 hover:underline">
                        <Plus className="w-3 h-3" /> Add Env Var
                      </button>
                    </div>
                  </>
                )}

                {resourceType === 'service' && (
                  <>
                    <div className="mb-4">
                      <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Type</label>
                      <select
                        value={form.serviceType}
                        onChange={(e) => updateForm('serviceType', e.target.value)}
                        className="w-full px-3 py-2 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg text-sm"
                      >
                        <option value="ClusterIP">ClusterIP</option>
                        <option value="NodePort">NodePort</option>
                        <option value="LoadBalancer">LoadBalancer</option>
                        <option value="ExternalName">ExternalName</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Service Ports</label>
                      {form.servicePorts.map((port, idx) => (
                        <div key={idx} className="flex gap-2 mb-2 items-center">
                          <input
                            type="number"
                            placeholder="Port"
                            value={port.port}
                            onChange={(e) => updateArrayItem('servicePorts', idx, 'port', parseInt(e.target.value))}
                            className="w-20 px-3 py-2 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg text-sm"
                          />
                          <span className="text-slate-400">→</span>
                          <input
                            type="number"
                            placeholder="Target"
                            value={port.targetPort}
                            onChange={(e) => updateArrayItem('servicePorts', idx, 'targetPort', parseInt(e.target.value))}
                            className="w-20 px-3 py-2 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg text-sm"
                          />
                          {form.serviceType === 'NodePort' && (
                            <input
                              type="number"
                              placeholder="NodePort"
                              value={port.nodePort || ''}
                              onChange={(e) => updateArrayItem('servicePorts', idx, 'nodePort', parseInt(e.target.value))}
                              className="w-24 px-3 py-2 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg text-sm"
                            />
                          )}
                          <button onClick={() => removeArrayItem('servicePorts', idx)} className="text-red-500 hover:text-red-700"><Trash2 className="w-4 h-4" /></button>
                        </div>
                      ))}
                      <button onClick={() => addArrayItem('servicePorts', { port: 80, targetPort: 80, protocol: 'TCP' })} className="text-sm text-brand-600 flex items-center gap-1 hover:underline">
                        <Plus className="w-3 h-3" /> Add Port
                      </button>
                    </div>
                  </>
                )}
                
                {(resourceType === 'configmap' || resourceType === 'secret') && (
                   <div>
                      <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Data (Key-Value)</label>
                      {form.data.map((item, idx) => (
                        <div key={idx} className="flex gap-2 mb-2">
                          <input
                            placeholder="Key"
                            value={item.key}
                            onChange={(e) => updateArrayItem('data', idx, 'key', e.target.value)}
                            className="flex-1 px-3 py-2 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg text-sm font-mono"
                          />
                          <textarea
                            placeholder="Value"
                            value={item.value}
                            onChange={(e) => updateArrayItem('data', idx, 'value', e.target.value)}
                            className="flex-1 px-3 py-2 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg text-sm font-mono h-10 min-h-[40px] resize-y"
                          />
                          <button onClick={() => removeArrayItem('data', idx)} className="text-red-500 hover:text-red-700"><Trash2 className="w-4 h-4" /></button>
                        </div>
                      ))}
                      <button onClick={() => addArrayItem('data', { key: '', value: '' })} className="text-sm text-brand-600 flex items-center gap-1 hover:underline">
                        <Plus className="w-3 h-3" /> Add Data
                      </button>
                    </div>
                )}
              </>
            )}

            {activeTab === 'advanced' && (
              <>
                <div className="mb-6">
                  <h3 className="text-sm font-bold text-slate-900 dark:text-white mb-3">Resources</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-slate-500 mb-1">CPU Request</label>
                      <input
                        placeholder="e.g. 100m"
                        value={form.resources.requests.cpu}
                        onChange={(e) => updateNested('resources', 'requests', { ...form.resources.requests, cpu: e.target.value })}
                        className="w-full px-3 py-2 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg text-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-slate-500 mb-1">Memory Request</label>
                      <input
                        placeholder="e.g. 128Mi"
                        value={form.resources.requests.memory}
                        onChange={(e) => updateNested('resources', 'requests', { ...form.resources.requests, memory: e.target.value })}
                        className="w-full px-3 py-2 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg text-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-slate-500 mb-1">CPU Limit</label>
                      <input
                        placeholder="e.g. 500m"
                        value={form.resources.limits.cpu}
                        onChange={(e) => updateNested('resources', 'limits', { ...form.resources.limits, cpu: e.target.value })}
                        className="w-full px-3 py-2 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg text-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-slate-500 mb-1">Memory Limit</label>
                      <input
                        placeholder="e.g. 512Mi"
                        value={form.resources.limits.memory}
                        onChange={(e) => updateNested('resources', 'limits', { ...form.resources.limits, memory: e.target.value })}
                        className="w-full px-3 py-2 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg text-sm"
                      />
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Right Panel: Output */}
      <div className="w-1/2 flex flex-col h-full">
        <div className="bg-slate-900 rounded-xl border border-slate-700 flex flex-col h-full overflow-hidden shadow-2xl">
          <div className="flex items-center justify-between p-4 border-b border-slate-800 bg-slate-900">
            <div className="flex items-center gap-2">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50" />
                <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50" />
              </div>
              <span className="text-sm font-mono text-slate-400 ml-2">{form.name}.yaml</span>
            </div>
            <button
              onClick={copyToClipboard}
              className="flex items-center gap-2 px-3 py-1.5 text-xs font-medium bg-brand-600 text-white rounded-md hover:bg-brand-500 transition-colors"
            >
              {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
              {copied ? 'Copied!' : 'Copy YAML'}
            </button>
          </div>
          <div className="flex-1 overflow-auto p-4 font-mono text-sm">
            <pre className="text-emerald-400 whitespace-pre font-medium leading-relaxed">
              {generatedYaml}
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
}
