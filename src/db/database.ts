import initSqlJs, { Database } from 'sql.js';
import { k8sCommandsData } from './data/k8sCommands';
import { additionalK8sCommands } from './data/k8sCommandsExpanded';
import { comprehensiveK8sCommands } from './data/comprehensiveCommands';
import { modernK8sCommands } from './data/modernCommands';
import { advancedK8sCommands } from './data/advancedCommands';
import { expertK8sCommands } from './data/expertCommands';
import { kubectlSubcommandsData } from './data/kubectlSubcommands';
import { podOperationsData } from './data/podOperations';
import { advancedFilteringData } from './data/advancedFiltering';
import { rbacCommandsData } from './data/rbacCommands';
import { completeCatalogData } from './data/completeCatalog';
import { advancedOperationsData } from './data/advancedOperations';
import { containerOperationsData } from './data/containerOperations';
import { utilityCommandsData } from './data/utilityCommands';
import { awkCommandsData } from './data/awkCommands';
import { jqCommandsData } from './data/jqCommands';
import { textProcessingCommandsData } from './data/textProcessingCommands';
import { securityCommandsData } from './data/securityCommands';
import { storageCommandsData } from './data/storageCommands';
import { observabilityCommandsData } from './data/observabilityCommands';
import { advancedWorkloadsCommandsData } from './data/advancedWorkloadsCommands';
import { networkingCommandsData } from './data/networkingCommands';
import { clusterManagementCommandsData } from './data/clusterManagementCommands';
import { configurationCommandsData } from './data/configurationCommands';
import { helmCommandsData } from './data/helmCommands';
import { k8sVersionsData } from './data/k8sVersions';
import { categoriesData } from './data/categories';
import { yamlTemplatesData } from './data/yamlTemplates';
import { troubleshootingGuidesData } from './data/troubleshootingGuides';
import { bestPracticesData } from './data/bestPractices';
import { allKarpenterCommands } from './data/karpenterCommands';

let db: Database | null = null;
const CURRENT_DB_VERSION = 'k8s-cheatsheet-db-v21-networking-modern';

function clearOldDatabases() {
  const oldVersions = [
    'k8s-cheatsheet-db',
    'k8s-cheatsheet-db-v1',
    'k8s-cheatsheet-db-v2',
    'k8s-cheatsheet-db-v3',
    'k8s-cheatsheet-db-v4',
    'k8s-cheatsheet-db-v5',
    'k8s-cheatsheet-db-v6',
    'k8s-cheatsheet-db-v7',
    'k8s-cheatsheet-db-v8-full',
    'k8s-cheatsheet-db-v9-deduped',
    'k8s-cheatsheet-db-v10-full-expanded',
    'k8s-cheatsheet-db-v11-cleaned',
  ];
  oldVersions.forEach((version) => {
    if (localStorage.getItem(version)) {
      localStorage.removeItem(version);
    }
  });
}

function getCount(database: Database, table: string): number {
  try {
    const result = database.exec(`SELECT COUNT(*) as count FROM ${table}`);
    if (result.length === 0) return 0;
    const value = result[0].values[0][0];
    return typeof value === 'number' ? value : Number(value);
  } catch {
    return 0;
  }
}

function isDatabaseHealthy(database: Database): boolean {
  const requiredTables = [
    'k8s_commands',
    'categories',
    'k8s_versions',
    'yaml_templates',
    'troubleshooting_guides',
    'best_practices',
  ];
  return requiredTables.every((t) => getCount(database, t) > 0);
}

export async function initDatabase(): Promise<Database> {
  if (db) return db;

  clearOldDatabases();

  const SQL = await initSqlJs({
    locateFile: (file: string) => `https://sql.js.org/dist/${file}`,
  });

  const savedDb = localStorage.getItem(CURRENT_DB_VERSION);

  if (savedDb) {
    try {
      const uint8Array = new Uint8Array(JSON.parse(savedDb));
      db = new SQL.Database(uint8Array);

      // Verify database health across major tables
      if (!isDatabaseHealthy(db)) {
        // Remove unhealthy saved DB and rebuild fresh
        clearDatabase();
        db = new SQL.Database();
        createTables(db);
        populateDatabase(db);
        // Verify after populate; if still unhealthy, rebuild once more
        if (!isDatabaseHealthy(db)) {
          db.close();
          db = new SQL.Database();
          createTables(db);
          populateDatabase(db);
        }
        saveDatabase(db);
      }
    } catch (error) {
      console.error('Error loading saved database, creating new one:', error);
      db = new SQL.Database();
      createTables(db);
      populateDatabase(db);
      saveDatabase(db);
    }
  } else {
    db = new SQL.Database();
    createTables(db);
    populateDatabase(db);
    saveDatabase(db);
  }

  return db;
}

function createTables(database: Database) {
  database.run(`
    CREATE TABLE IF NOT EXISTS categories (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      icon TEXT NOT NULL,
      description TEXT NOT NULL,
      "order" INTEGER NOT NULL
    );
  `);

  database.run(`
    CREATE TABLE IF NOT EXISTS k8s_commands (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      category TEXT NOT NULL,
      subcategory TEXT NOT NULL,
      command TEXT NOT NULL,
      description TEXT NOT NULL,
      example TEXT NOT NULL,
      versionIntroduced TEXT NOT NULL,
      difficultyLevel TEXT NOT NULL,
      tags TEXT NOT NULL,
      flags TEXT,
      output TEXT
    );
  `);

  database.run(`
    CREATE TABLE IF NOT EXISTS k8s_versions (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      version TEXT NOT NULL,
      releaseDate TEXT NOT NULL,
      majorFeatures TEXT NOT NULL,
      deprecated TEXT,
      breaking TEXT,
      eolDate TEXT,
      cves TEXT,
      projected INTEGER,
      description TEXT
    );
  `);

  database.run(`
    CREATE TABLE IF NOT EXISTS user_favorites (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      commandId INTEGER NOT NULL,
      addedAt TEXT NOT NULL,
      FOREIGN KEY (commandId) REFERENCES k8s_commands(id)
    );
  `);

  database.run(`
    CREATE TABLE IF NOT EXISTS command_notes (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      commandId INTEGER NOT NULL,
      note TEXT NOT NULL,
      createdAt TEXT NOT NULL,
      FOREIGN KEY (commandId) REFERENCES k8s_commands(id)
    );
  `);

  database.run(`CREATE INDEX IF NOT EXISTS idx_category ON k8s_commands(category);`);
  database.run(`CREATE INDEX IF NOT EXISTS idx_difficulty ON k8s_commands(difficultyLevel);`);
  database.run(`CREATE INDEX IF NOT EXISTS idx_tags ON k8s_commands(tags);`);

  database.run(`
    CREATE TABLE IF NOT EXISTS yaml_templates (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      category TEXT NOT NULL,
      description TEXT NOT NULL,
      yaml TEXT NOT NULL
    );
  `);

  database.run(`
    CREATE TABLE IF NOT EXISTS troubleshooting_guides (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      issue TEXT NOT NULL,
      category TEXT NOT NULL,
      description TEXT NOT NULL,
      symptoms TEXT NOT NULL,
      causes TEXT NOT NULL,
      diagnosis TEXT NOT NULL,
      solutions TEXT NOT NULL
    );
  `);

  database.run(`
    CREATE TABLE IF NOT EXISTS best_practices (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      category TEXT NOT NULL,
      title TEXT NOT NULL,
      description TEXT NOT NULL,
      example TEXT NOT NULL,
      impact TEXT NOT NULL,
      tags TEXT NOT NULL
    );
  `);
}

function populateDatabase(database: Database) {
  categoriesData.forEach((cat) => {
    database.run(
      'INSERT INTO categories (name, icon, description, "order") VALUES (?, ?, ?, ?)',
      [cat.name, cat.icon, cat.description, cat.order]
    );
  });

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
    ...allKarpenterCommands
  ];

  const seenCommands = new Set<string>();
  const uniqueCommands = allCommands.filter((cmd: any) => {
    if (!cmd || !cmd.command) return false;
    const normalizedCmd = cmd.command.trim();
    if (seenCommands.has(normalizedCmd)) {
      return false;
    }
    seenCommands.add(normalizedCmd);
    return true;
  });

  uniqueCommands.forEach((cmd: any) => {
    if (!cmd) return;
    database.run(
      `INSERT INTO k8s_commands (category, subcategory, command, description, example, versionIntroduced, difficultyLevel, tags, flags, output)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        cmd.category || 'Uncategorized',
        cmd.subcategory || '',
        cmd.command || '',
        cmd.description || '',
        cmd.example || '',
        cmd.versionIntroduced || '',
        cmd.difficultyLevel || 'intermediate',
        cmd.tags || '',
        cmd.flags || '',
        cmd.output || '',
      ]
    );
  });

  k8sVersionsData.forEach((ver) => {
    database.run(
      'INSERT INTO k8s_versions (version, releaseDate, majorFeatures, deprecated, breaking, eolDate, cves, projected, description) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)',
      [
        ver.version,
        ver.releaseDate,
        ver.majorFeatures,
        ver.deprecated || '',
        ver.breaking || '',
        ver.eolDate || '',
        JSON.stringify(ver.cves || []),
        ver.projected ? 1 : 0,
        (ver as any).description || ''
      ]
    );
  });

  yamlTemplatesData.forEach((tpl) => {
    database.run(
      'INSERT INTO yaml_templates (name, category, description, yaml) VALUES (?, ?, ?, ?)',
      [tpl.name || '', tpl.category || '', tpl.description || '', tpl.yaml || '']
    );
  });

  troubleshootingGuidesData.forEach((guide) => {
    database.run(
      'INSERT INTO troubleshooting_guides (issue, category, description, symptoms, causes, diagnosis, solutions) VALUES (?, ?, ?, ?, ?, ?, ?)',
      [
        guide.issue || '',
        guide.category || '',
        guide.description || '',
        guide.symptoms || '',
        guide.causes || '',
        guide.diagnosis || '',
        guide.solutions || ''
      ]
    );
  });

  bestPracticesData.forEach((bp) => {
    database.run(
      'INSERT INTO best_practices (category, title, description, example, impact, tags) VALUES (?, ?, ?, ?, ?, ?)',
      [
        bp.category || '',
        bp.title || '',
        bp.description || '',
        bp.example || '',
        bp.impact || '',
        bp.tags || ''
      ]
    );
  });
}

export function saveDatabase(database: Database) {
  const data = database.export();
  const buffer = Array.from(data);
  localStorage.setItem(CURRENT_DB_VERSION, JSON.stringify(buffer));
}

export function getDatabase(): Database | null {
  return db;
}

export function clearDatabase() {
  localStorage.removeItem(CURRENT_DB_VERSION);
  db = null;
}

export function resetDatabase() {
  clearDatabase();
  clearOldDatabases();
  window.location.reload();
}
