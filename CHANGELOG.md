## [2026-03-15]
- fix: add git pull --rebase before push in auto-fix-bot to prevent rejected pushes (6e4184a)
- docs: update CHANGELOG.md [skip ci] (98bfae7)
- docs: update CHANGELOG.md [skip ci] (1c7d5ae)
- fix: rewrite ai-suggestions.yml with clean YAML syntax (b2e473f)
- fix: rewrite stability-rollback with clean YAML and safe shell commands (a144522)
- fix: make rollback branch creation non-fatal, use issue-based rollback (7f6cc0c)
- fix: make ESLint non-blocking in ci-test.yml (a262be9)
- fix: fix YAML syntax error in issue-to-code-bot.yml (9425c9c)
- fix: fix YAML syntax error in stability-rollback.yml (e416118)
- fix: fix YAML syntax error in rollback.yml (d87470e)
- fix: fix YAML syntax error in ai-suggestions.yml (b551f2f)
- Create stability-rollback.yml (06d583a)
- Create security.yml (64a7944)
- Update daily-scheduler.yml (40940aa)
- ci: add rollback bot (auto-revert on CI failure + /rollback command) (12317e7)
- ci: add dev-to-main promotion bot (3-day stability gate + auto-PR) (c044f39)
- ci: add daily scheduler (triggers all bots every day at 06:00 UTC) (9e8050b)
- ci: add issue-to-code bot (AI auto-implement filed issues via GPT-4o) (5d37634)
- ci: add performance bot (bundle analysis + anti-pattern detection) (40fc451)
- ci: add changelog bot (auto-generate CHANGELOG.md on push) (4d1ef08)
- ci: add evolution bot (AI codebase analysis + auto issue creation) (2efb839)
- ci: add CODEOWNERS for automatic review assignments (a562cee)
- ci: add AI code review bot (GPT-4o PR review + triage + /ai-review command) (c74df76)
- ci: add security scan bot (CodeQL + npm audit + dependency review) (8c0b677)
- ci: add Dependabot config (npm + GitHub Actions weekly updates) (e93d801)
- ci: add auto-fix bot (ESLint --fix + Prettier auto-commit) (ce425b8)
- ci: add code review bot (ESLint inline comments, TS review, bundle analysis) (202a541)
- ci: add auto-build bot (Linux/Windows/macOS on push) (0886f7f)
- ci: add CI test suite (ESLint, TypeScript, build, Vitest) (af1f79d)
- ci: add issue bot (auto-label, greet, stale, close) (c70dc67)
- ci: add PR bot workflow (auto-label, greet, review request) (b0a7849)
- ci: add auto-merge bot workflow (5d9debc)

## [2026-03-15]
- docs: update CHANGELOG.md [skip ci] (1c7d5ae)
- fix: rewrite ai-suggestions.yml with clean YAML syntax (b2e473f)
- fix: rewrite stability-rollback with clean YAML and safe shell commands (a144522)
- fix: make rollback branch creation non-fatal, use issue-based rollback (7f6cc0c)
- fix: make ESLint non-blocking in ci-test.yml (a262be9)
- fix: fix YAML syntax error in issue-to-code-bot.yml (9425c9c)
- fix: fix YAML syntax error in stability-rollback.yml (e416118)
- fix: fix YAML syntax error in rollback.yml (d87470e)
- fix: fix YAML syntax error in ai-suggestions.yml (b551f2f)
- Create stability-rollback.yml (06d583a)
- Create security.yml (64a7944)
- Update daily-scheduler.yml (40940aa)
- ci: add rollback bot (auto-revert on CI failure + /rollback command) (12317e7)
- ci: add dev-to-main promotion bot (3-day stability gate + auto-PR) (c044f39)
- ci: add daily scheduler (triggers all bots every day at 06:00 UTC) (9e8050b)
- ci: add issue-to-code bot (AI auto-implement filed issues via GPT-4o) (5d37634)
- ci: add performance bot (bundle analysis + anti-pattern detection) (40fc451)
- ci: add changelog bot (auto-generate CHANGELOG.md on push) (4d1ef08)
- ci: add evolution bot (AI codebase analysis + auto issue creation) (2efb839)
- ci: add CODEOWNERS for automatic review assignments (a562cee)
- ci: add AI code review bot (GPT-4o PR review + triage + /ai-review command) (c74df76)
- ci: add security scan bot (CodeQL + npm audit + dependency review) (8c0b677)
- ci: add Dependabot config (npm + GitHub Actions weekly updates) (e93d801)
- ci: add auto-fix bot (ESLint --fix + Prettier auto-commit) (ce425b8)
- ci: add code review bot (ESLint inline comments, TS review, bundle analysis) (202a541)
- ci: add auto-build bot (Linux/Windows/macOS on push) (0886f7f)
- ci: add CI test suite (ESLint, TypeScript, build, Vitest) (af1f79d)
- ci: add issue bot (auto-label, greet, stale, close) (c70dc67)
- ci: add PR bot workflow (auto-label, greet, review request) (b0a7849)
- ci: add auto-merge bot workflow (5d9debc)

# Changelog

All notable changes to this project will be documented in this file.

## [2026.03.15] - 2026-03-15

### Bug Fixes
- fix: rewrite ai-suggestions.yml with clean YAML syntax (b2e473f)
- fix: rewrite stability-rollback with clean YAML and safe shell commands (a144522)
- fix: make rollback branch creation non-fatal, use issue-based rollback (7f6cc0c)
- fix: make ESLint non-blocking in ci-test.yml (a262be9)
- fix: fix YAML syntax error in issue-to-code-bot.yml (9425c9c)
- fix: fix YAML syntax error in stability-rollback.yml (e416118)
- fix: fix YAML syntax error in rollback.yml (d87470e)
- fix: fix YAML syntax error in ai-suggestions.yml (b551f2f)

### CI/CD
- ci: add rollback bot (auto-revert on CI failure + /rollback command) (12317e7)
- ci: add dev-to-main promotion bot (3-day stability gate + auto-PR) (c044f39)
- ci: add daily scheduler (triggers all bots every day at 06:00 UTC) (9e8050b)
- ci: add issue-to-code bot (AI auto-implement filed issues via GPT-4o) (5d37634)
- ci: add performance bot (bundle analysis + anti-pattern detection) (40fc451)
- ci: add changelog bot (auto-generate CHANGELOG.md on push) (4d1ef08)
- ci: add evolution bot (AI codebase analysis + auto issue creation) (2efb839)
- ci: add CODEOWNERS for automatic review assignments (a562cee)
- ci: add AI code review bot (GPT-4o PR review + triage + /ai-review command) (c74df76)
- ci: add security scan bot (CodeQL + npm audit + dependency review) (8c0b677)
- ci: add Dependabot config (npm + GitHub Actions weekly updates) (e93d801)
- ci: add auto-fix bot (ESLint --fix + Prettier auto-commit) (ce425b8)
- ci: add code review bot (ESLint inline comments, TS review, bundle analysis) (202a541)
- ci: add auto-build bot (Linux/Windows/macOS on push) (0886f7f)
- ci: add CI test suite (ESLint, TypeScript, build, Vitest) (af1f79d)
- ci: add issue bot (auto-label, greet, stale, close) (c70dc67)
- ci: add PR bot workflow (auto-label, greet, review request) (b0a7849)
- ci: add auto-merge bot workflow (5d9debc)

### Other Changes
- Create stability-rollback.yml (06d583a)
- Create security.yml (64a7944)
- Update daily-scheduler.yml (40940aa)

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
