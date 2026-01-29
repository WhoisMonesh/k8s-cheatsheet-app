# Changelog

All notable changes to this project will be documented in this file.

## [1.4.0] - 2026-01-29
### Added
- **JSON & Text Processing Enhancements**: Added comprehensive namespace support for `jq`, `awk`, and `grep` commands.
- **Namespace Variants**: Included explicit default (`-n default`), custom namespace (`-n <namespace>`), and all-namespaces (`-A`) options for all processing commands.
- **Error Prevention**: Validated command syntax to ensure error-free operation on consoles and jumpservers.

## [1.3.0] - 2026-01-27
### Added
- **Karpenter Integration**: Added comprehensive support for Karpenter with 200+ new commands covering NodePools, EC2NodeClasses, NodeClaims, and legacy provisioners.
- **Troubleshooting & System**: Added 20+ new commands for Karpenter system diagnosis (logs, metrics, rollout status).
- **Advanced Filtering**: Added sorting and watch variations for all Karpenter resources.
- **Future Roadmap (Planned)**:
  1.  **Log Analysis Pro**: Advanced log filtering with regex highlighting and saved queries.
  2.  **Helm Chart Builder**: Visual tool for scaffolding and creating Helm charts.
 

## [1.2.0] - 2026-01-26
### Added
- **Kubectl Aliases & Productivity**: Added a comprehensive section for kubectl aliases to boost efficiency.
- **Expanded Alias Library**: Added 100+ aliases covering Essential, Resources, JSONPath, Networking, Security, and more.
- **Advanced Tools**: Included aliases for `kubectl explain` (kexp), `kubectl diff` (kdiff), and `kubectl cp` (kcp).
- **Usage Guide**: Added a step-by-step "How to Use" guide for setting up aliases in Bash and Zsh.
- **Shell Functions**: Added `kesh` and `kebash` functions for quick pod shell access.
- **Copy Functionality**: One-click copy for individual aliases and the full setup script.

## [1.1.0] - Planned 2026-01-26
### Added
- **Favorites System**: Users can now bookmark frequently used commands.
- **Exam Results**: Detailed breakdown of correct/incorrect answers after completing an exam.
- **New Scenarios**: Added "HPA", "ConfigMaps", and "Network Policies" walkthroughs.
- **Settings Page**: Added ability to manage application data and preferences.

### Changed
- **Exam Mode**: Questions are now weighted more heavily towards "Troubleshooting" (30%).
- **UI**: Improved sidebar navigation to include "Favorites" and "Settings".

### Fixed
- Fixed release download links in README (v1.0.0 issue).

## [1.0.1] - 2025-07-15
### Fixed
- Corrected typo in deployment yaml template.
- Updated dependency versions for security.

## [1.0.0] - 2025-07-01
### Added
- Initial release of K8s Cheatsheet App.
- Core features: Command List, Yaml Builder, Exam Mode, Scenarios.
