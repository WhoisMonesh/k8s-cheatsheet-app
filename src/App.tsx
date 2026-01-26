import { useEffect, useState } from 'react';
import { initDatabase, getDatabase, saveDatabase, resetDatabase } from './db/database';
import { K8sCommand, K8sVersion, Category, YamlTemplate, TroubleshootingGuide, BestPractice, ViewMode } from './types';
import { Sidebar } from './components/Sidebar';
import { Header } from './components/Header';
import { CommandList } from './components/CommandList';
import { CommandDetails } from './components/CommandDetails';
import { VersionHistory } from './components/VersionHistory';
import { YamlTemplates } from './components/YamlTemplates';
import { TroubleshootingGuide as TroubleshootingGuideComponent } from './components/TroubleshootingGuide';
import { BestPractices } from './components/BestPractices';
import { QuickStats } from './components/QuickStats';
import { QuickReferenceCard } from './components/QuickReferenceCard';
import { AliasesReference } from './components/AliasesReference';
import { KeyboardShortcuts } from './components/KeyboardShortcuts';
import { Footer } from './components/Footer';
import { Scenarios } from './components/Scenarios';
import { QuizMode } from './components/QuizMode';
import { ConsolePractice } from './components/ConsolePractice';
import { YamlBuilder } from './components/YamlBuilder';
import { ExamMode } from './components/ExamMode';
import { About } from './components/About';
import { scenariosData } from './db/data/scenarios';
import { Loader2, AlertTriangle, Download, Upload } from 'lucide-react';
import { k8sCommandsData } from './db/data/k8sCommands';
import { additionalK8sCommands } from './db/data/k8sCommandsExpanded';
import { comprehensiveK8sCommands } from './db/data/comprehensiveCommands';
import { modernK8sCommands } from './db/data/modernCommands';
import { advancedK8sCommands } from './db/data/advancedCommands';
import { expertK8sCommands } from './db/data/expertCommands';
import { kubectlSubcommandsData } from './db/data/kubectlSubcommands';
import { podOperationsData } from './db/data/podOperations';
import { advancedFilteringData } from './db/data/advancedFiltering';
import { rbacCommandsData } from './db/data/rbacCommands';
import { completeCatalogData } from './db/data/completeCatalog';
import { advancedOperationsData } from './db/data/advancedOperations';
import { containerOperationsData } from './db/data/containerOperations';
import { utilityCommandsData } from './db/data/utilityCommands';
import { awkCommandsData } from './db/data/awkCommands';
import { jqCommandsData } from './db/data/jqCommands';
import { textProcessingCommandsData } from './db/data/textProcessingCommands';
import { securityCommandsData } from './db/data/securityCommands';
import { storageCommandsData } from './db/data/storageCommands';
import { observabilityCommandsData } from './db/data/observabilityCommands';
import { advancedWorkloadsCommandsData } from './db/data/advancedWorkloadsCommands';
import { networkingCommandsData } from './db/data/networkingCommands';
import { clusterManagementCommandsData } from './db/data/clusterManagementCommands';
import { configurationCommandsData } from './db/data/configurationCommands';
import { helmCommandsData } from './db/data/helmCommands';
import { ecosystemCommandsData } from './db/data/ecosystemCommands';
import { k8sVersionsData } from './db/data/k8sVersions';
import { categoriesData } from './db/data/categories';
import { yamlTemplatesData } from './db/data/yamlTemplates';
import { troubleshootingGuidesData } from './db/data/troubleshootingGuides';
import { bestPracticesData } from './db/data/bestPractices';

function App() {
  const [loading, setLoading] = useState(true);
  const [categories, setCategories] = useState<Category[]>([]);
  const [commands, setCommands] = useState<K8sCommand[]>([]);
  const [filteredCommands, setFilteredCommands] = useState<K8sCommand[]>([]);
  const [versions, setVersions] = useState<K8sVersion[]>([]);
  const [templates, setTemplates] = useState<YamlTemplate[]>([]);
  const [troubleshootingGuides, setTroubleshootingGuides] = useState<TroubleshootingGuide[]>([]);
  const [bestPractices, setBestPractices] = useState<BestPractice[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedCommand, setSelectedCommand] = useState<K8sCommand | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [debouncedSearchQuery, setDebouncedSearchQuery] = useState('');
  const [isSearching, setIsSearching] = useState(false);
  const [difficultyFilter, setDifficultyFilter] = useState<string>('all');
  const [favorites, setFavorites] = useState<number[]>([]);
  const [viewMode, setViewMode] = useState<ViewMode>('quick-ref');
  const [showShortcuts, setShowShortcuts] = useState(false);
  const [showStats, setShowStats] = useState(true);
  const [showQuickRef, setShowQuickRef] = useState(true);
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem('k8s-dark-mode');
    return saved ? JSON.parse(saved) : false;
  });

  const handleSearchChange = (query: string) => {
    setSearchQuery(query);
    if (query.trim() && !['quick-ref', 'commands', 'favorites'].includes(viewMode)) {
      setViewMode('quick-ref');
    }
  };

  const handleCategorySelect = (category: string) => {
    setSelectedCategory(category);
    
    // If selecting 'all' (usually via "All Commands" button), switch to main view
    if (category === 'all') {
      setViewMode('quick-ref');
      return;
    }

    if (!['quick-ref', 'commands', 'favorites'].includes(viewMode)) {
      setViewMode('quick-ref');
    }
  };

  const handleDifficultyChange = (difficulty: string) => {
    setDifficultyFilter(difficulty);
    if (!['quick-ref', 'commands', 'favorites'].includes(viewMode)) {
      setViewMode('quick-ref');
    }
  };

  useEffect(() => {
    async function init() {
      try {
        await initDatabase();
        loadData();
        loadFavorites();
      } catch (error) {
        console.error('Failed to initialize database:', error);
        loadDataFallback();
      } finally {
        setLoading(false);
      }
    }
    init();
  }, []);

  useEffect(() => {
    localStorage.setItem('k8s-dark-mode', JSON.stringify(darkMode));
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.ctrlKey || e.metaKey) {
        switch (e.key) {
          case 'k':
            e.preventDefault();
            document.querySelector<HTMLInputElement>('input[type="text"]')?.focus();
            break;
          case '1':
            e.preventDefault();
            setViewMode('commands');
            break;
          case '2':
            e.preventDefault();
            setViewMode('favorites');
            break;
          case '3':
            e.preventDefault();
            setViewMode('templates');
            break;
          case '4':
            e.preventDefault();
            setViewMode('troubleshooting');
            break;
          case '5':
            e.preventDefault();
            setViewMode('best-practices');
            break;
          case '6':
            e.preventDefault();
            setViewMode('versions');
            break;
          case 'd':
            e.preventDefault();
            setDarkMode(!darkMode);
            break;
        }
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [darkMode]);

  // Debounce search query
  useEffect(() => {
    setIsSearching(true);
    const handler = setTimeout(() => {
      setDebouncedSearchQuery(searchQuery);
    }, 500);

    return () => {
      clearTimeout(handler);
    };
  }, [searchQuery]);

  useEffect(() => {
    if (loading) return;
    
    // Small timeout to allow UI to show loading state before heavy filtering
    const timer = setTimeout(() => {
      filterCommands();
      setIsSearching(false);
    }, 10);
    
    return () => clearTimeout(timer);
  }, [
    commands,
    viewMode,
    selectedCategory,
    difficultyFilter,
    debouncedSearchQuery,
    favorites,
    loading,
    k8sVersionsData,
    yamlTemplatesData,
    troubleshootingGuidesData,
    bestPracticesData
  ]);

  function loadData() {
    const db = getDatabase();
    if (!db) return;

    const categoriesResult = db.exec('SELECT * FROM categories ORDER BY "order"');
    if (categoriesResult.length > 0) {
      const cats = categoriesResult[0].values.map((row) => ({
        id: row[0] as number,
        name: row[1] as string,
        icon: row[2] as string,
        description: row[3] as string,
        order: row[4] as number,
      }));
      setCategories(cats);
    }

    const commandsResult = db.exec('SELECT * FROM k8s_commands');
    if (commandsResult.length > 0) {
      const cmds = commandsResult[0].values.map((row) => ({
        id: row[0] as number,
        category: row[1] as string,
        subcategory: row[2] as string,
        command: row[3] as string,
        description: row[4] as string,
        example: row[5] as string,
        versionIntroduced: row[6] as string,
        difficultyLevel: row[7] as 'beginner' | 'intermediate' | 'advanced' | 'expert',
        tags: row[8] as string,
        flags: row[9] as string,
        output: row[10] as string,
      }));
      setCommands(cmds);
    }

    const versionsResult = db.exec('SELECT * FROM k8s_versions');
    if (versionsResult.length > 0) {
      const vers = versionsResult[0].values.map((row) => ({
        id: row[0] as number,
        version: row[1] as string,
        releaseDate: row[2] as string,
        majorFeatures: row[3] as string,
        deprecated: row[4] as string,
        breaking: row[5] as string,
        eolDate: row[6] as string,
        cves: JSON.parse(row[7] as string || '[]'),
        projected: Boolean(row[8]),
        description: row[9] as string,
      }));
      
      // Sort versions semantically (descending)
      vers.sort((a, b) => {
        const vA = a.version.split('.').map(Number);
        const vB = b.version.split('.').map(Number);
        
        if (vA[0] !== vB[0]) return vB[0] - vA[0];
        return vB[1] - vA[1];
      });
      
      setVersions(vers);
    }

    const templatesResult = db.exec('SELECT * FROM yaml_templates');
    if (templatesResult.length > 0) {
      const tmpls = templatesResult[0].values.map((row) => ({
        id: row[0] as number,
        name: row[1] as string,
        category: row[2] as string,
        description: row[3] as string,
        yaml: row[4] as string,
      }));
      setTemplates(tmpls);
    }

    const troubleshootingResult = db.exec('SELECT * FROM troubleshooting_guides');
    if (troubleshootingResult.length > 0) {
      const guides = troubleshootingResult[0].values.map((row) => ({
        id: row[0] as number,
        issue: row[1] as string,
        category: row[2] as string,
        description: row[3] as string,
        symptoms: row[4] as string,
        causes: row[5] as string,
        diagnosis: row[6] as string,
        solutions: row[7] as string,
      }));
      setTroubleshootingGuides(guides);
    }

    const bestPracticesResult = db.exec('SELECT * FROM best_practices');
    if (bestPracticesResult.length > 0) {
      const practices = bestPracticesResult[0].values.map((row) => ({
        id: row[0] as number,
        category: row[1] as string,
        title: row[2] as string,
        description: row[3] as string,
        example: row[4] as string,
        impact: row[5] as string,
        tags: row[6] as string,
      }));
      setBestPractices(practices);
    }

    // Fallback: if all major datasets are empty, reset and rebuild the database
    const isAllZero =
      (categoriesResult.length === 0 || categoriesResult[0].values.length === 0) &&
      (commandsResult.length === 0 || commandsResult[0].values.length === 0) &&
      (versionsResult.length === 0 || versionsResult[0].values.length === 0) &&
      (templatesResult.length === 0 || templatesResult[0].values.length === 0) &&
      (troubleshootingResult.length === 0 || troubleshootingResult[0].values.length === 0) &&
      (bestPracticesResult.length === 0 || bestPracticesResult[0].values.length === 0);

    if (isAllZero) {
      const resetFlag = sessionStorage.getItem('k8s-db-reset-done');
      if (!resetFlag) {
        sessionStorage.setItem('k8s-db-reset-done', 'true');
        resetDatabase();
        return;
      }
    }
  }

  function loadFavorites() {
    const db = getDatabase();
    if (!db) return;

    const result = db.exec('SELECT commandId FROM user_favorites');
    if (result.length > 0) {
      const favIds = result[0].values.map((row) => row[0] as number);
      setFavorites(favIds);
    }
  }

  function filterCommands() {
    let filtered = commands;

    if (viewMode === 'favorites') {
      filtered = filtered.filter((cmd) => favorites.includes(cmd.id));
    }

    if (selectedCategory !== 'all') {
      filtered = filtered.filter((cmd) => cmd.category === selectedCategory);
    }

    if (difficultyFilter !== 'all') {
      filtered = filtered.filter((cmd) => cmd.difficultyLevel === difficultyFilter);
    }

    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      const queryTokens = query.split(/\s+/).filter(t => t.length > 2); // Ignore short words
      
      // Smart Search: Check for intent keywords
      const intents: Record<string, string[]> = {
        'cpu': ['top', 'describe', 'resources', 'limit', 'request'],
        'memory': ['top', 'describe', 'resources', 'limit', 'request', 'oom'],
        'usage': ['top', 'metrics'],
        'crash': ['logs', 'describe', 'events', 'previous', 'restart'],
        'error': ['logs', 'describe', 'events', 'failure'],
        'debug': ['exec', 'logs', 'describe', 'debug', 'attach', 'events'],
        'log': ['logs', 'stdout', 'stderr'],
        'network': ['service', 'ingress', 'networkpolicy', 'endpoint', 'dns', 'ip'],
        'access': ['auth', 'rbac', 'config', 'user', 'role', 'token', 'account'],
        'permission': ['auth', 'rbac', 'role', 'clusterrole', 'binding'],
        'storage': ['pv', 'pvc', 'storageclass', 'volume', 'claim', 'mount'],
        'disk': ['pv', 'pvc', 'df', 'capacity'],
        'clean': ['delete', 'prune', 'remove'],
        'remove': ['delete', 'uninstall'],
        'list': ['get', 'all'],
        'show': ['get', 'describe', 'explain'],
        'change': ['edit', 'apply', 'patch', 'scale', 'set', 'update'],
        'deploy': ['deployment', 'create', 'apply', 'rollout', 'run'],
        'scale': ['replicas', 'autoscale', 'resize'],
        'monitor': ['top', 'events', 'describe', 'logs', 'watch'],
        'security': ['auth', 'rbac', 'secret', 'serviceaccount', 'policy', 'context'],
        'health': ['probe', 'ready', 'live', 'status', 'liveness', 'readiness'],
        'history': ['rollout', 'history', 'revision', 'undo'],
        'rollback': ['undo', 'rollout', 'revert'],
        'restart': ['rollout', 'restart'],
        'copy': ['cp', 'transfer'],
        'forward': ['port-forward', 'proxy', 'tunnel'],
        'connect': ['exec', 'attach', 'port-forward'],
        'user': ['config', 'auth', 'kubeconfig', 'context'],
        'context': ['config', 'ctx', 'namespace'],
        'kill': ['delete', 'force'],
        'stop': ['scale', 'delete'],
        'start': ['scale', 'apply'],
        'expose': ['service', 'ingress', 'expose', 'port'],
        'public': ['LoadBalancer', 'NodePort', 'Ingress']
      };

      // Find active intents based on query tokens
      const activeIntents = new Set<string>();
      queryTokens.forEach(token => {
        Object.entries(intents).forEach(([key, values]) => {
          if (key.includes(token) || token.includes(key)) {
            values.forEach(v => activeIntents.add(v));
          }
        });
      });

      // Calculate score for each command
      const scoredCommands = filtered.map(cmd => {
        let score = 0;
        const cmdStr = cmd.command.toLowerCase();
        const descStr = cmd.description.toLowerCase();
        const tagsStr = cmd.tags.toLowerCase();
        const exampleStr = cmd.example.toLowerCase();

        // Exact match boosts
        if (cmdStr.includes(query)) score += 20;
        if (descStr.includes(query)) score += 10;

        // Token matches
        queryTokens.forEach(token => {
          if (cmdStr.includes(token)) score += 5;
          if (descStr.includes(token)) score += 3;
          if (tagsStr.includes(token)) score += 3;
          if (exampleStr.includes(token)) score += 2;
        });

        // Intent matches
        activeIntents.forEach(intent => {
          if (cmdStr.includes(intent)) score += 4;
          if (tagsStr.includes(intent)) score += 2;
          if (descStr.includes(intent)) score += 1;
        });

        return { cmd, score };
      });

      // Filter and sort
      filtered = scoredCommands
        .filter(item => item.score > 0)
        .sort((a, b) => b.score - a.score)
        .map(item => item.cmd);
    }

    setFilteredCommands(filtered);
  }

  function toggleFavorite(commandId: number) {
    const db = getDatabase();
    if (!db) return;

    const isFavorite = favorites.includes(commandId);

    if (isFavorite) {
      db.run('DELETE FROM user_favorites WHERE commandId = ?', [commandId]);
      setFavorites(favorites.filter((id) => id !== commandId));
    } else {
      db.run('INSERT INTO user_favorites (commandId, addedAt) VALUES (?, ?)', [
        commandId,
        new Date().toISOString(),
      ]);
      setFavorites([...favorites, commandId]);
    }

    saveDatabase(db);
  }

  const exportFavorites = () => {
    const data = JSON.stringify(favorites);
    const blob = new Blob([data], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'k8s-cheat-sheet-favorites.json';
    a.click();
    URL.revokeObjectURL(url);
  };

  const importFavorites = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;
    
    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const ids = JSON.parse(e.target?.result as string);
        if (Array.isArray(ids)) {
          const db = getDatabase();
          if (!db) return;
          
          const newFavs = new Set(favorites);
          
          ids.forEach((id: number) => {
            if (!newFavs.has(id)) {
              newFavs.add(id);
              try {
                const res = db.exec(`SELECT 1 FROM user_favorites WHERE commandId = ${id}`);
                if (!res.length) {
                   db.run('INSERT INTO user_favorites (commandId, addedAt) VALUES (?, ?)', [id, new Date().toISOString()]);
                }
              } catch (err) { console.error(err); }
            }
          });
          
          setFavorites(Array.from(newFavs));
          saveDatabase(db);
        }
      } catch (err) {
        console.error('Failed to import favorites', err);
        alert('Failed to import favorites: Invalid file format');
      }
    };
    reader.readAsText(file);
  };

  function loadDataFallback() {
    setCategories(categoriesData.map((cat, idx) => ({
      id: idx + 1,
      name: cat.name,
      icon: cat.icon,
      description: cat.description,
      order: cat.order,
    })));

    const allCommands = [
      ...k8sCommandsData,
      ...additionalK8sCommands,
      ...comprehensiveK8sCommands,
      ...modernK8sCommands,
      ...advancedK8sCommands,
      ...expertK8sCommands,
      ...kubectlSubcommandsData,
      ...podOperationsData,
      ...advancedFilteringData,
      ...rbacCommandsData,
      ...completeCatalogData,
      ...advancedOperationsData,
      ...containerOperationsData,
      ...utilityCommandsData,
      ...awkCommandsData,
      ...jqCommandsData,
      ...textProcessingCommandsData,
      ...securityCommandsData,
      ...storageCommandsData,
      ...observabilityCommandsData,
      ...advancedWorkloadsCommandsData,
      ...networkingCommandsData,
      ...clusterManagementCommandsData,
      ...configurationCommandsData,
      ...helmCommandsData,
      ...ecosystemCommandsData,
    ];

    const seen = new Set<string>();
    const unique = allCommands.filter((c: any) => {
      if (!c || !c.command) return false;
      const cmd = c.command.trim();
      if (seen.has(cmd)) return false;
      seen.add(cmd);
      return true;
    }).map((c: any, idx) => ({
      id: idx + 1,
      category: c.category || 'Uncategorized',
      subcategory: c.subcategory || '',
      command: c.command,
      description: c.description,
      example: c.example,
      versionIntroduced: c.versionIntroduced,
      difficultyLevel: c.difficultyLevel as 'beginner' | 'intermediate' | 'advanced' | 'expert',
      tags: c.tags,
      flags: c.flags || '',
      output: c.output || '',
    }));

    setCommands(unique);

    const vers = k8sVersionsData.map((v, idx) => ({
      id: idx + 1,
      version: v.version,
      releaseDate: v.releaseDate,
      majorFeatures: v.majorFeatures,
      deprecated: (v as any).deprecated || '',
      breaking: (v as any).breaking || '',
    }));
    vers.sort((a, b) => {
      const vA = a.version.split('.').map(Number);
      const vB = b.version.split('.').map(Number);
      if (vA[0] !== vB[0]) return vB[0] - vA[0];
      return vB[1] - vA[1];
    });
    setVersions(vers);

    setTemplates(yamlTemplatesData.map((y, idx) => ({
      id: idx + 1,
      name: y.name,
      category: y.category,
      description: y.description,
      yaml: y.yaml,
    })));

    setTroubleshootingGuides(troubleshootingGuidesData.map((t, idx) => ({
      id: idx + 1,
      issue: t.issue,
      category: t.category,
      description: t.description,
      symptoms: t.symptoms,
      causes: t.causes,
      diagnosis: t.diagnosis,
      solutions: t.solutions,
    })));

    setBestPractices(bestPracticesData.map((b, idx) => ({
      id: idx + 1,
      category: b.category,
      title: b.title,
      description: b.description,
      example: b.example,
      impact: b.impact,
      tags: b.tags,
    })));
  }

  const isDataEmpty =
    commands.length === 0 &&
    templates.length === 0 &&
    troubleshootingGuides.length === 0 &&
    bestPractices.length === 0 &&
    versions.length === 0;

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-50 dark:bg-gray-900 flex items-center justify-center">
        <div className="text-center">
          <Loader2 className="w-12 h-12 animate-spin text-brand-500 mx-auto mb-4" />
          <p className="text-slate-600 dark:text-slate-400 font-medium">Loading Kubernetes Cheat Sheet...</p>
        </div>
      </div>
    );
  }

  return (
    <div className={`min-h-screen ${darkMode ? 'dark' : ''}`}>
      <div className="min-h-screen bg-slate-50 dark:bg-gray-900 transition-colors">
        <Header
          searchQuery={searchQuery}
          onSearchChange={handleSearchChange}
          difficultyFilter={difficultyFilter}
          onDifficultyChange={handleDifficultyChange}
          darkMode={darkMode}
          onDarkModeToggle={() => setDarkMode(!darkMode)}
          viewMode={viewMode}
          onViewModeChange={setViewMode}
          favoriteCount={favorites.length}
        />

        <div className="flex">
          <Sidebar
            categories={categories}
            selectedCategory={selectedCategory}
            onCategorySelect={handleCategorySelect}
            commandCounts={commands.reduce((acc, cmd) => {
              acc[cmd.category] = (acc[cmd.category] || 0) + 1;
              return acc;
            }, {} as Record<string, number>)}
            currentView={viewMode}
            onViewChange={setViewMode}
          />

          <main className="flex-1 ml-64 mt-16 p-8">
            {viewMode === 'quick-ref' && (
              <>
                {isDataEmpty && (
                  <div className="mb-4 p-4 rounded-lg border border-yellow-300 bg-yellow-50 dark:bg-yellow-900/20 dark:border-yellow-700 flex items-start justify-between">
                    <div className="flex items-start gap-3">
                      <AlertTriangle className="w-5 h-5 text-yellow-600 dark:text-yellow-300 mt-0.5" />
                      <div>
                        <div className="text-sm font-semibold text-yellow-800 dark:text-yellow-200">No data loaded</div>
                        <div className="text-xs text-yellow-700 dark:text-yellow-300">Rebuild the database or load offline data to populate the dashboard.</div>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <button
                        onClick={() => resetDatabase()}
                        className="px-3 py-1.5 text-sm rounded-md bg-yellow-600 text-white hover:bg-yellow-700"
                      >
                        Rebuild DB
                      </button>
                      <button
                        onClick={() => loadDataFallback()}
                        className="px-3 py-1.5 text-sm rounded-md bg-gray-800 text-white hover:bg-gray-900"
                      >
                        Load Offline Data
                      </button>
                    </div>
                  </div>
                )}
                
                <div className="flex justify-end gap-3 mb-4">
                  <button
                    onClick={() => setShowStats(!showStats)}
                    className="text-xs font-medium text-slate-500 hover:text-brand-600 dark:text-slate-400 dark:hover:text-brand-400 flex items-center gap-1 transition-colors"
                  >
                    {showStats ? 'Hide Stats' : 'Show Stats'}
                  </button>
                  <button
                    onClick={() => setShowQuickRef(!showQuickRef)}
                    className="text-xs font-medium text-slate-500 hover:text-brand-600 dark:text-slate-400 dark:hover:text-brand-400 flex items-center gap-1 transition-colors"
                  >
                    {showQuickRef ? 'Hide Quick Ref' : 'Show Quick Ref'}
                  </button>
                </div>

                {showStats && (
                  <QuickStats
                    commandCount={commands.length}
                    templateCount={templates.length}
                    guideCount={troubleshootingGuides.length}
                    practiceCount={bestPractices.length}
                    versionCount={versions.length}
                    favoriteCount={favorites.length}
                    scenarioCount={scenariosData.length}
                    onViewChange={setViewMode}
                  />
                )}
                
                {showQuickRef && (
                  <div className="mb-8">
                    <QuickReferenceCard />
                  </div>
                )}
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <CommandList
                    commands={filteredCommands}
                    selectedCommand={selectedCommand}
                    onSelectCommand={setSelectedCommand}
                    favorites={favorites}
                    onToggleFavorite={toggleFavorite}
                    loading={isSearching}
                  />
                  <CommandDetails command={selectedCommand} />
                </div>
              </>
            )}
            {viewMode === 'commands' && (
              <>
                <div className="flex justify-end gap-3 mb-4">
                  <button
                    onClick={() => setShowStats(!showStats)}
                    className="text-xs font-medium text-slate-500 hover:text-brand-600 dark:text-slate-400 dark:hover:text-brand-400 flex items-center gap-1 transition-colors"
                  >
                    {showStats ? 'Hide Stats' : 'Show Stats'}
                  </button>
                </div>

                {showStats && (
                  <QuickStats
                    commandCount={commands.length}
                    templateCount={templates.length}
                    guideCount={troubleshootingGuides.length}
                    practiceCount={bestPractices.length}
                    versionCount={versions.length}
                    favoriteCount={favorites.length}
                    scenarioCount={scenariosData.length}
                    onViewChange={setViewMode}
                  />
                )}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <CommandList
                    commands={filteredCommands}
                    selectedCommand={selectedCommand}
                    onSelectCommand={setSelectedCommand}
                    favorites={favorites}
                    onToggleFavorite={toggleFavorite}
                    loading={isSearching}
                  />
                  <CommandDetails command={selectedCommand} />
                </div>
              </>
            )}
            {viewMode === 'favorites' && (
              <>
                <div className="flex justify-end gap-2 mb-6">
                  <button onClick={exportFavorites} className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-gray-800 border border-slate-200 dark:border-slate-700 rounded-lg text-sm font-medium hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors text-slate-700 dark:text-slate-300 shadow-sm">
                    <Download className="w-4 h-4" /> Export Favorites
                  </button>
                  <label className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-gray-800 border border-slate-200 dark:border-slate-700 rounded-lg text-sm font-medium hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors cursor-pointer text-slate-700 dark:text-slate-300 shadow-sm">
                    <Upload className="w-4 h-4" /> Import Favorites
                    <input type="file" accept=".json" onChange={importFavorites} className="hidden" />
                  </label>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <CommandList
                    commands={filteredCommands}
                    selectedCommand={selectedCommand}
                    onSelectCommand={setSelectedCommand}
                    favorites={favorites}
                    onToggleFavorite={toggleFavorite}
                    loading={isSearching}
                  />
                  <CommandDetails command={selectedCommand} />
                </div>
              </>
            )}
            {viewMode === 'versions' && <VersionHistory versions={versions} />}
            {viewMode === 'templates' && <YamlTemplates templates={templates} />}
            {viewMode === 'troubleshooting' && <TroubleshootingGuideComponent guides={troubleshootingGuides} />}
            {viewMode === 'best-practices' && <BestPractices practices={bestPractices} />}
            {viewMode === 'aliases' && <AliasesReference />}
            {viewMode === 'scenarios' && <Scenarios />}
            {viewMode === 'quiz' && (
              <QuizMode 
                commands={commands} 
                guides={troubleshootingGuides} 
                practices={bestPractices} 
              />
            )}
            {viewMode === 'console-practice' && <ConsolePractice />}
            {viewMode === 'yaml-builder' && <YamlBuilder />}
            {viewMode === 'exam' && (
              <ExamMode 
                commands={commands} 
                guides={troubleshootingGuides} 
              />
            )}
            {viewMode === 'about' && <About />}
          </main>
          <Footer onShowShortcuts={() => setShowShortcuts(true)} />
        </div>
        <KeyboardShortcuts isOpen={showShortcuts} onClose={() => setShowShortcuts(false)} />
      </div>
    </div>
  );
}

export default App;
