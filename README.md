# ☸️ Kubernetes Cheatsheet & Toolkit

![Version](https://img.shields.io/github/v/release/WhoisMonesh/k8s-cheatsheet-app?style=flat-square)
![License](https://img.shields.io/badge/license-MIT-blue?style=flat-square)
![Platform](https://img.shields.io/badge/platform-Windows%20%7C%20macOS%20%7C%20Linux-lightgrey?style=flat-square)
![Build Status](https://img.shields.io/github/actions/workflow/status/WhoisMonesh/k8s-cheatsheet-app/release.yml?style=flat-square)

A powerful, offline-first desktop application designed to be the ultimate companion for Kubernetes administrators, developers, and CKA/CKAD exam aspirants. Built with **Electron**, **React**, and **TypeScript**.
<img width="1366" height="718" alt="{F4E0904D-8D16-4184-80EA-23A5456C89E5}" src="https://github.com/user-attachments/assets/7d490f21-5b36-466b-ac1b-3691cf32f6d9" />

---

## 🚀 Key Features

### 1. Comprehensive Command Library
Search through thousands of curated commands. No internet needed.
*   **Categories**:
    *   **Core Workloads**: Pods, Deployments, ReplicaSets, StatefulSets, DaemonSets, Jobs, CronJobs.
    *   **Networking**: Services, Ingress, NetworkPolicies, Endpoints.
    *   **Configuration**: ConfigMaps, Secrets, ResourceQuotas, Limits.
    *   **Storage**: PV, PVC, StorageClasses.
    *   **Security**: RBAC, ServiceAccounts, Roles, ClusterRoles.
    *   **Cluster Management**: Nodes, Namespaces, Events, API Resources.
    *   **Advanced**: JSONPath, Custom Columns, Sorting, Filtering.
*   **Ecosystem Integration**:
    *   **Helm**: Chart management, releases, repositories.
    *   **Kustomize**: Template building, overlays.
    *   **Tools**: `jq` (JSON processor), `yq` (YAML processor), `openssl` (Certificates).

### 2. Interactive Tools
Tools designed to speed up your workflow and learning.
*   **YAML Builder**:
    *   GUI-based manifest generator.
    *   Supports: Pods, Deployments, Services, ConfigMaps, Secrets, Ingress, PVCs, NetworkPolicies.
    *   Features: Add ports, env vars, labels, annotations dynamically.
*   **Command Builder**:
    *   Construct complex `kubectl` commands visually.
    *   Toggle common flags (`--dry-run=client`, `-o yaml`, `--all-namespaces`).
*   **Terminal Simulator**:
    *   A safe, sandboxed environment to type and "run" commands.
    *   See expected outputs without needing a live cluster.

### 3. Learning & Certification Prep
Perfect for CKA, CKAD, and CKS study.
*   **Quiz Mode**:
    *   Flashcards for quick recall.
    *   Multiple-choice questions covering all domains.
*   **Scenarios ("Recipes")**:
    *   Step-by-step guides for real-world tasks.
    *   Examples: "Fixing CrashLoopBackOff", "Rolling Updates", "Canary Deployments", "Backup & Restore".
*   **Exam Mode**:
    *   Timed sessions to simulate exam pressure.
    *   Randomized question sets.

### 4. Productivity Boosters
*   **Smart Search**: Instantly find commands using keywords (e.g., "cpu usage", "force delete").
*   **Favorites**: Star your most-used commands for one-click access.
*   **Export/Import**: Backup your favorite commands to JSON.
*   **Quick Reference**: Cheat sheet for aliases (`k`, `kgp`, `kgn`) and shortcuts.

---

## 📸 Application Structure

The application is organized into the following intuitive sections:

### **Sidebar Navigation**
*   **Quick Ref**: Dashboard with stats and quick links.
*   **Commands**: The main searchable database.
*   **Favorites**: Your personal collection of saved commands.
*   **YAML Builder**: The visual manifest generator.
*   **Templates**: Ready-to-use YAML snippets.
*   **Troubleshooting**: Diagnosis flowcharts and guides.
*   **Best Practices**: Security and performance tips.
*   **Scenarios**: Real-world operational recipes.
*   **Quiz / Exam**: Testing and practice areas.
*   **About**: App info and developer details.

---

## 📥 Download & Install

Download the latest version from the Releases page:
https://github.com/WhoisMonesh/k8s-cheatsheet-app/releases

| Platform | File | Direct Download |
|----------|------|-----------------|
| **Windows** | `K8s-Cheatsheet-Setup-1.3.0.exe` | [Download](https://github.com/WhoisMonesh/k8s-cheatsheet-app/releases/download/v1.3.0/K8s-Cheatsheet-Setup-1.3.0.exe) |
| **macOS** | `K8s-Cheatsheet-1.3.0.dmg` | [Download](https://github.com/WhoisMonesh/k8s-cheatsheet-app/releases/download/v1.3.0/K8s-Cheatsheet-1.3.0.dmg) |
| **Linux** | `K8s-Cheatsheet-1.3.0.AppImage` | [Download](https://github.com/WhoisMonesh/k8s-cheatsheet-app/releases/download/v1.3.0/K8s-Cheatsheet-1.3.0.AppImage) |
| **Windows (Dev)** | `K8s-Cheatsheet-Setup-1.4.0-dev.exe` | [Download](https://github.com/WhoisMonesh/k8s-cheatsheet-app/releases/download/v1.4.0-dev/K8s-Cheatsheet-Setup-1.4.0-dev.exe) |
| **macOS (Dev)** | `K8s-Cheatsheet-1.4.0-dev.dmg` | [Download](https://github.com/WhoisMonesh/k8s-cheatsheet-app/releases/download/v1.4.0-dev/K8s-Cheatsheet-1.4.0-dev.dmg) |
| **Linux (Dev)** | `K8s-Cheatsheet-1.4.0-dev.AppImage` | [Download](https://github.com/WhoisMonesh/k8s-cheatsheet-app/releases/download/v1.4.0-dev/K8s-Cheatsheet-1.4.0-dev.AppImage) |

---

## 🏗️ Development Guide

Want to contribute or build it yourself?

### Prerequisites
*   Node.js (v18+)
*   npm or yarn
*   Git

### Setup

1.  **Clone the repo**
    ```bash
    git clone https://github.com/WhoisMonesh/k8s-cheatsheet-app.git
    cd k8s-cheatsheet-app
    ```

2.  **Install dependencies**
    ```bash
    npm install
    ```

3.  **Start Development Server**
    ```bash
    npm run electron:dev
    ```
    *This will launch the Vite dev server and the Electron window.*

### Build

To build the executable for your current OS:

```bash
# Windows
npm run electron:build -- --win

# macOS (Run on Mac)
npm run electron:build -- --mac

# Linux (Run on Linux)
npm run electron:build -- --linux
```

---

## 🤝 Contributing

We love contributions!
1.  **Fork** the repo.
2.  **Create** a branch (`git checkout -b feature/new-command-category`).
3.  **Commit** your changes (`git commit -m 'Add Istio commands'`).
4.  **Push** to the branch (`git push origin feature/new-command-category`).
5.  **Open** a Pull Request.

---

## 👤 Author

**Monesh Ram**

*   **GitHub**: [@WhoisMonesh](https://github.com/WhoisMonesh)
*   **Email**: moneshram7@gmail.com

---

## 📄 License

This project is licensed under the **MIT License**.
