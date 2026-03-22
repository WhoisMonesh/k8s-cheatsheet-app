import { K8sVersion } from "../types";
import {
  Calendar,
  GitBranch,
  AlertTriangle,
  XCircle,
  Search,
  TrendingUp,
  Package,
  Shield,
  Info,
  Clock,
} from "lucide-react";
import { useState, useMemo } from "react";

interface VersionHistoryProps {
  versions: K8sVersion[];
}

export function VersionHistory({ versions }: VersionHistoryProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterType, setFilterType] = useState<
    "all" | "breaking" | "deprecated"
  >("all");
  const [expandedVersions, setExpandedVersions] = useState<Set<number>>(
    new Set([0]),
  );

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const getVersionMajor = (version: string) => {
    const parts = version.split(".");
    return `${parts[0]}.${parts[1]}`;
  };

  const toggleVersion = (index: number) => {
    const newExpanded = new Set(expandedVersions);
    if (newExpanded.has(index)) {
      newExpanded.delete(index);
    } else {
      newExpanded.add(index);
    }
    setExpandedVersions(newExpanded);
  };

  const filteredVersions = useMemo(() => {
    return versions.filter((version) => {
      const matchesSearch =
        searchTerm === "" ||
        version.version.toLowerCase().includes(searchTerm.toLowerCase()) ||
        version.majorFeatures
          .toLowerCase()
          .includes(searchTerm.toLowerCase()) ||
        (version.deprecated &&
          version.deprecated
            .toLowerCase()
            .includes(searchTerm.toLowerCase())) ||
        (version.breaking &&
          version.breaking.toLowerCase().includes(searchTerm.toLowerCase()));

      const matchesFilter =
        filterType === "all" ||
        (filterType === "breaking" &&
          version.breaking &&
          version.breaking.trim() !== "") ||
        (filterType === "deprecated" &&
          version.deprecated &&
          version.deprecated.trim() !== "");

      return matchesSearch && matchesFilter;
    });
  }, [versions, searchTerm, filterType]);

  return (
    <div className="max-w-7xl mx-auto">
      <div className="mb-8">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
              Kubernetes Version History
            </h1>
            <p className="text-gray-600 dark:text-gray-400">
              Complete timeline of Kubernetes releases from v1.0 to v
              {versions[0]?.version || "1.35"} ({versions.length} releases)
            </p>
          </div>
          <div className="flex items-center gap-2">
            <Package className="w-12 h-12 text-blue-600 dark:text-blue-400" />
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 p-6 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-slate-800 dark:via-slate-900 dark:to-slate-800 rounded-xl shadow-lg mb-6">
          <div className="text-center p-3 bg-white dark:bg-slate-700 rounded-lg">
            <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">
              v{versions[0]?.version}
            </div>
            <div className="text-xs text-gray-600 dark:text-gray-400 mt-1">
              Latest Version
            </div>
          </div>
          <div className="text-center p-3 bg-white dark:bg-slate-700 rounded-lg">
            <div className="text-xl font-bold text-gray-900 dark:text-white">
              {formatDate(versions[0]?.releaseDate || "").split(" ")[0]}{" "}
              {formatDate(versions[0]?.releaseDate || "").split(" ")[2]}
            </div>
            <div className="text-xs text-gray-600 dark:text-gray-400 mt-1">
              Latest Release
            </div>
          </div>
          <div className="text-center p-3 bg-white dark:bg-slate-700 rounded-lg">
            <div className="text-3xl font-bold text-green-600 dark:text-green-400">
              {new Date().getFullYear() - 2015}
            </div>
            <div className="text-xs text-gray-600 dark:text-gray-400 mt-1">
              Years of K8s
            </div>
          </div>
          <div className="text-center p-3 bg-white dark:bg-slate-700 rounded-lg">
            <div className="text-3xl font-bold text-yellow-600 dark:text-yellow-400">
              {
                versions.filter(
                  (v) => v.deprecated && v.deprecated.trim() !== "",
                ).length
              }
            </div>
            <div className="text-xs text-gray-600 dark:text-gray-400 mt-1">
              Deprecations
            </div>
          </div>
          <div className="text-center p-3 bg-white dark:bg-slate-700 rounded-lg">
            <div className="text-3xl font-bold text-red-600 dark:text-red-400">
              {
                versions.filter((v) => v.breaking && v.breaking.trim() !== "")
                  .length
              }
            </div>
            <div className="text-xs text-gray-600 dark:text-gray-400 mt-1">
              Breaking Changes
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-4 mb-6">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search versions, features, deprecations..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 dark:text-white"
            />
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => setFilterType("all")}
              className={`px-4 py-3 rounded-lg font-medium transition-colors ${
                filterType === "all"
                  ? "bg-blue-600 text-white"
                  : "bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600"
              }`}
            >
              All ({versions.length})
            </button>
            <button
              onClick={() => setFilterType("breaking")}
              className={`px-4 py-3 rounded-lg font-medium transition-colors flex items-center gap-2 ${
                filterType === "breaking"
                  ? "bg-red-600 text-white"
                  : "bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600"
              }`}
            >
              <XCircle className="w-4 h-4" />
              Breaking (
              {
                versions.filter((v) => v.breaking && v.breaking.trim() !== "")
                  .length
              }
              )
            </button>
            <button
              onClick={() => setFilterType("deprecated")}
              className={`px-4 py-3 rounded-lg font-medium transition-colors flex items-center gap-2 ${
                filterType === "deprecated"
                  ? "bg-yellow-600 text-white"
                  : "bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600"
              }`}
            >
              <AlertTriangle className="w-4 h-4" />
              Deprecated (
              {
                versions.filter(
                  (v) => v.deprecated && v.deprecated.trim() !== "",
                ).length
              }
              )
            </button>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        {filteredVersions.map((version) => {
          const originalIndex = versions.indexOf(version);
          const isExpanded = expandedVersions.has(originalIndex);
          const isLatest = originalIndex === 0;
          const hasDeprecations =
            version.deprecated && version.deprecated.trim() !== "";
          const hasBreaking =
            version.breaking && version.breaking.trim() !== "";

          return (
            <div
              key={version.id}
              className={`bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden transition-all hover:shadow-xl ${
                isLatest
                  ? "ring-2 ring-blue-500 ring-offset-2 dark:ring-offset-gray-900"
                  : ""
              } ${isExpanded ? "border-l-4 border-blue-500" : ""}`}
            >
              <button
                onClick={() => toggleVersion(originalIndex)}
                className="w-full p-6 text-left hover:bg-gray-50 dark:hover:bg-gray-750 transition-colors"
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2 flex-wrap">
                      <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                        Kubernetes v{version.version}
                      </h2>
                      {isLatest && (
                        <span className="px-3 py-1 bg-gradient-to-r from-blue-500 to-blue-600 text-white text-xs font-semibold rounded-full shadow-lg flex items-center gap-1">
                          <TrendingUp className="w-3 h-3" />
                          LATEST
                        </span>
                      )}
                      {version.projected && (
                        <span className="px-3 py-1 bg-gradient-to-r from-purple-500 to-purple-600 text-white text-xs font-semibold rounded-full shadow-lg flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          PROJECTED
                        </span>
                      )}
                      {hasBreaking && (
                        <span className="px-2 py-1 bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400 text-xs font-semibold rounded-full">
                          Breaking
                        </span>
                      )}
                      {hasDeprecations && (
                        <span className="px-2 py-1 bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-400 text-xs font-semibold rounded-full">
                          Deprecations
                        </span>
                      )}
                    </div>
                    <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        <span>{formatDate(version.releaseDate)}</span>
                      </div>
                      {version.eolDate && (
                        <div className="flex items-center gap-2 text-red-600 dark:text-red-400 font-medium">
                          <Clock className="w-4 h-4" />
                          <span>EOL: {formatDate(version.eolDate)}</span>
                        </div>
                      )}
                      <div className="flex items-center gap-2">
                        <Package className="w-4 h-4" />
                        <span>Major {getVersionMajor(version.version)}</span>
                      </div>
                    </div>
                  </div>
                  <div className="text-right ml-4">
                    <div
                      className={`transform transition-transform ${isExpanded ? "rotate-180" : ""}`}
                    >
                      <svg
                        className="w-6 h-6 text-gray-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </button>

              {isExpanded && (
                <div className="px-6 pb-6 space-y-4 border-t border-gray-200 dark:border-gray-700 pt-4">
                  {version.description && (
                    <div className="flex items-start gap-3 bg-gray-50 dark:bg-gray-750 p-4 rounded-lg border border-gray-100 dark:border-gray-700">
                      <Info className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                      <p className="text-gray-700 dark:text-gray-300 italic leading-relaxed">
                        {version.description}
                      </p>
                    </div>
                  )}
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <GitBranch className="w-5 h-5 text-green-600 dark:text-green-400" />
                      <h3 className="font-semibold text-gray-900 dark:text-white text-lg">
                        Major Features
                      </h3>
                    </div>
                    <div className="ml-7">
                      <ul className="space-y-2">
                        {version.majorFeatures
                          .split(",")
                          .map((feature, idx) => (
                            <li
                              key={idx}
                              className="flex items-start gap-2 text-gray-700 dark:text-gray-300"
                            >
                              <span className="text-green-500 mt-1">●</span>
                              <span>{feature.trim()}</span>
                            </li>
                          ))}
                      </ul>
                    </div>
                  </div>

                  {hasDeprecations && (
                    <div className="bg-gradient-to-r from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20 border-l-4 border-yellow-500 rounded-r-lg p-4 shadow-md">
                      <div className="flex items-center gap-2 mb-2">
                        <AlertTriangle className="w-5 h-5 text-yellow-600 dark:text-yellow-400" />
                        <h3 className="font-semibold text-yellow-900 dark:text-yellow-300 text-lg">
                          Deprecations
                        </h3>
                      </div>
                      <p className="text-yellow-800 dark:text-yellow-200 ml-7 leading-relaxed">
                        {version.deprecated}
                      </p>
                    </div>
                  )}

                  {hasBreaking && (
                    <div className="bg-gradient-to-r from-red-50 to-pink-50 dark:from-red-900/20 dark:to-pink-900/20 border-l-4 border-red-500 rounded-r-lg p-4 shadow-md">
                      <div className="flex items-center gap-2 mb-2">
                        <XCircle className="w-5 h-5 text-red-600 dark:text-red-400" />
                        <h3 className="font-semibold text-red-900 dark:text-red-300 text-lg">
                          Breaking Changes
                        </h3>
                      </div>
                      <p className="text-red-800 dark:text-red-200 ml-7 leading-relaxed">
                        {version.breaking}
                      </p>
                    </div>
                  )}

                  {version.cves && version.cves.length > 0 && (
                    <div className="bg-gradient-to-r from-slate-50 to-gray-50 dark:from-slate-900/20 dark:to-gray-900/20 border-l-4 border-slate-500 rounded-r-lg p-4 shadow-md">
                      <div className="flex items-center gap-2 mb-2">
                        <Shield className="w-5 h-5 text-slate-600 dark:text-slate-400" />
                        <h3 className="font-semibold text-slate-900 dark:text-slate-300 text-lg">
                          Notable CVEs
                        </h3>
                      </div>
                      <div className="ml-7 flex flex-wrap gap-2">
                        {version.cves.map((cve, idx) => (
                          <span
                            key={idx}
                            className="px-2 py-1 bg-slate-200 dark:bg-slate-700 text-slate-800 dark:text-slate-200 rounded text-sm font-mono"
                          >
                            {cve}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>

      <div className="mt-8 space-y-4">
        <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-6">
          <h3 className="font-semibold text-blue-900 dark:text-blue-300 mb-3 flex items-center gap-2">
            <Calendar className="w-5 h-5" />
            Version Support Policy
          </h3>
          <div className="space-y-2 text-blue-800 dark:text-blue-200 text-sm">
            <p>
              <strong>Support Window:</strong> Kubernetes maintains support for
              the three most recent minor versions (approximately 14 months per
              version).
            </p>
            <p>
              <strong>Release Cadence:</strong> New minor versions are released
              approximately every 4 months (3 releases per year).
            </p>
            <p>
              <strong>Current Supported Versions:</strong> v1.35, v1.34, v1.33
              (as of {formatDate(versions[0]?.releaseDate || "")})
            </p>
            <p className="text-xs pt-2 border-t border-blue-300 dark:border-blue-700">
              Always verify current support status at the official Kubernetes
              documentation before planning upgrades.
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 border border-green-200 dark:border-green-800 rounded-lg p-6">
          <h3 className="font-semibold text-green-900 dark:text-green-300 mb-3 flex items-center gap-2">
            <GitBranch className="w-5 h-5" />
            Major Milestones in Kubernetes History
          </h3>
          <div className="grid md:grid-cols-2 gap-4 text-sm text-green-800 dark:text-green-200">
            <div>
              <strong>v1.0 (2015):</strong> Initial release
            </div>
            <div>
              <strong>v1.24 (2022):</strong> Dockershim removed
            </div>
            <div>
              <strong>v1.8 (2017):</strong> RBAC stable
            </div>
            <div>
              <strong>v1.25 (2022):</strong> PSP removed, PSA GA
            </div>
            <div>
              <strong>v1.14 (2019):</strong> Windows nodes GA
            </div>
            <div>
              <strong>v1.31 (2024):</strong> Sidecar containers GA
            </div>
            <div>
              <strong>v1.20 (2020):</strong> Dockershim deprecated
            </div>
            <div>
              <strong>v1.35 (2025):</strong> OpenTelemetry integration
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
