# ☸️ Kubernetes Cheatsheet & Toolkit

![Version](https://img.shields.io/github/v/release/WhoisMonesh/k8s-cheatsheet-app?style=flat-square)
![License](https://img.shields.io/badge/license-MIT-blue?style=flat-square)
![Platform](https://img.shields.io/badge/platform-Windows%20%7C%20macOS%20%7C%20Linux-lightgrey?style=flat-square)

A powerful, offline-first desktop application designed to be the ultimate companion for Kubernetes administrators, developers, and CKA/CKAD exam aspirants. Built with **Electron**, **React**, and **TypeScript**.

---

## 🚀 Features

### 📚 Comprehensive Command Library
*   **Searchable Database**: Instant access to thousands of `kubectl` commands.
*   **Categorized Views**: Organized by Pods, Deployments, Networking, Security, RBAC, and more.
*   **Ecosystem Integration**: Includes commands for **Helm**, **Kustomize**, **jq**, **yq**, and **openssl**.

### 🛠️ Interactive Tools
*   **YAML Builder**: Generate production-ready YAML manifests for Pods, Deployments, Services, and more with a GUI form.
*   **Command Builder**: Interactively toggle flags (e.g., `--dry-run`, `--namespace`) and see the command update in real-time.
*   **Terminal Simulator**: A safe "Try It" environment to practice command syntax without needing a live cluster.

### 🧠 Learning & Practice
*   **Quiz Mode**: Test your knowledge with flashcards and multiple-choice questions (CKA/CKAD style).
*   **Scenarios & Recipes**: Step-by-step guides for common tasks like "Debugging CrashLoopBackOff" or "Rolling Updates".
*   **Exam Mode**: Timed practice sessions to simulate the certification exam environment.

### ⚡ Productivity
*   **Offline First**: Works completely offline. No internet connection required.
*   **Favorites**: Star frequently used commands and export/import them as JSON.
*   **Quick Reference**: Handy cards for common aliases and shortcuts.
*   **Cross-Platform**: Native apps for Windows, macOS, and Linux.

---

## 📥 Download

Go to the [Releases Page](https://github.com/WhoisMonesh/k8s-cheatsheet-app/releases) to download the latest version for your operating system.

| OS | File Type |
|----|-----------|
| **Windows** | `.exe` (Installer) |
| **macOS** | `.dmg` |
| **Linux** | `.AppImage` |

---

## 🏗️ Development

To build the application locally, follow these steps:

### Prerequisites
*   Node.js (v18 or higher)
*   npm or yarn

### Installation

1.  **Clone the repository**
    ```bash
    git clone https://github.com/WhoisMonesh/k8s-cheatsheet-app.git
    cd k8s-cheatsheet-app
    ```

2.  **Install dependencies**
    ```bash
    npm install
    ```

3.  **Run in Development Mode**
    ```bash
    npm run electron:dev
    ```

### Building for Production

To create the executable files for your current OS:

```bash
npm run electron:build
```

The output files will be in the `dist_electron` directory.

---

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1.  Fork the project
2.  Create your feature branch (`git checkout -b feature/AmazingFeature`)
3.  Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4.  Push to the branch (`git push origin feature/AmazingFeature`)
5.  Open a Pull Request

---

## 👤 Author

**Monesh Ram**

*   Github: [@WhoisMonesh](https://github.com/WhoisMonesh)
*   Email: moneshram7@gmail.com

---

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.
