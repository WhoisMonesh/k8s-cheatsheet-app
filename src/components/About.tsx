import { Github, Linkedin, Twitter, ExternalLink, Code, Server, Cloud, Terminal, Heart, Coffee, Shield, Zap, Database, Globe } from 'lucide-react';

export function About() {
  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-brand-600 to-blue-600 rounded-2xl p-8 text-white shadow-lg relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-black/10 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2"></div>
        
        <div className="relative z-10 flex flex-col md:flex-row items-center gap-8">
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-3xl font-bold mb-2">Kubernetes Cheatsheet</h1>
            <p className="text-blue-100 text-lg mb-6 max-w-2xl">
              The ultimate comprehensive interactive guide for DevOps engineers, SREs, and Kubernetes administrators. 
              Master the CLI, troubleshoot clusters, and deploy with confidence.
            </p>
            <div className="flex flex-wrap justify-center md:justify-start gap-4">
              <div className="flex items-center gap-2 bg-white/20 px-4 py-2 rounded-lg backdrop-blur-sm">
                <Shield className="w-5 h-5 text-emerald-300" />
                <span className="font-medium">Offline Capable</span>
              </div>
              <div className="flex items-center gap-2 bg-white/20 px-4 py-2 rounded-lg backdrop-blur-sm">
                <Zap className="w-5 h-5 text-amber-300" />
                <span className="font-medium">Interactive Learning</span>
              </div>
              <div className="flex items-center gap-2 bg-white/20 px-4 py-2 rounded-lg backdrop-blur-sm">
                <Database className="w-5 h-5 text-purple-300" />
                <span className="font-medium">Comprehensive DB</span>
              </div>
            </div>
          </div>
          
          <div className="bg-white/10 p-2 rounded-2xl backdrop-blur-md border border-white/20 transform rotate-3 hover:rotate-0 transition-transform duration-300">
             <div className="bg-gradient-to-br from-slate-900 to-slate-800 p-6 rounded-xl w-64 text-center">
               <Terminal className="w-16 h-16 text-brand-400 mx-auto mb-4" />
               <div className="text-2xl font-bold font-mono text-white mb-1">v2.0.0</div>
               <div className="text-xs text-slate-400 uppercase tracking-widest">Stable Release</div>
             </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Developer Profile Section */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700 overflow-hidden">
            <div className="p-6 border-b border-slate-200 dark:border-slate-700 flex items-center gap-3">
              <Code className="w-5 h-5 text-brand-500" />
              <h2 className="text-xl font-bold text-slate-900 dark:text-white">About the Developer</h2>
            </div>
            
            <div className="p-8">
              <div className="flex flex-col md:flex-row gap-8 items-start">
                <div className="w-full md:w-auto flex flex-col items-center">
                  <div className="w-32 h-32 rounded-full bg-gradient-to-br from-brand-400 to-blue-600 p-1 mb-4 shadow-lg">
                    <img 
                      src="https://github.com/WhoisMonesh.png" 
                      alt="Monesh Ram" 
                      className="w-full h-full rounded-full bg-white dark:bg-gray-900 object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">Monesh Ram</h3>
                  <p className="text-brand-600 dark:text-brand-400 font-medium text-sm">@WhoisMonesh</p>
                  
                  <div className="flex gap-2 mt-4">
                    <a href="https://github.com/WhoisMonesh" target="_blank" rel="noopener noreferrer" className="p-2 text-slate-600 dark:text-slate-400 hover:text-brand-600 dark:hover:text-brand-400 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-full transition-colors">
                      <Github className="w-5 h-5" />
                    </a>
                    <a href="#" className="p-2 text-slate-600 dark:text-slate-400 hover:text-brand-600 dark:hover:text-brand-400 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-full transition-colors">
                      <Linkedin className="w-5 h-5" />
                    </a>
                    <a href="#" className="p-2 text-slate-600 dark:text-slate-400 hover:text-brand-600 dark:hover:text-brand-400 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-full transition-colors">
                      <Globe className="w-5 h-5" />
                    </a>
                  </div>
                </div>
                
                <div className="flex-1 space-y-6">
                  <div>
                    <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-2 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                      DevOps Padawan | Cloud Nomad | Automation Artisan
                    </h4>
                    <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                      Passionate about building robust infrastructure and developer tools. 
                      Specializing in Cloud Native technologies, Kubernetes orchestration, and automating everything that moves.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-slate-50 dark:bg-slate-900/50 p-4 rounded-lg border border-slate-100 dark:border-slate-700/50">
                      <h5 className="font-bold text-slate-900 dark:text-white mb-3 flex items-center gap-2">
                        <Cloud className="w-4 h-4 text-sky-500" /> Cloud & Infrastructure
                      </h5>
                      <div className="flex flex-wrap gap-2">
                        {['AWS', 'Azure', 'Terraform', 'Ansible'].map(skill => (
                          <span key={skill} className="px-2 py-1 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded text-xs font-medium text-slate-600 dark:text-slate-300">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div className="bg-slate-50 dark:bg-slate-900/50 p-4 rounded-lg border border-slate-100 dark:border-slate-700/50">
                      <h5 className="font-bold text-slate-900 dark:text-white mb-3 flex items-center gap-2">
                        <Server className="w-4 h-4 text-indigo-500" /> Containers & Orchestration
                      </h5>
                      <div className="flex flex-wrap gap-2">
                        {['Docker', 'Podman', 'Kubernetes', 'Helm'].map(skill => (
                          <span key={skill} className="px-2 py-1 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded text-xs font-medium text-slate-600 dark:text-slate-300">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div>
                    <h5 className="font-bold text-slate-900 dark:text-white mb-3 text-sm uppercase tracking-wider text-opacity-80">Philosophy</h5>
                    <blockquote className="border-l-4 border-brand-500 pl-4 italic text-slate-600 dark:text-slate-400">
                      "Infrastructure as Poetry - Writing infrastructure code with elegance. 
                      Automation as Art - Transforming manual processes into symphonies of efficiency."
                    </blockquote>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Sidebar - Stats/Info */}
        <div className="space-y-6">
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700 overflow-hidden">
            <div className="p-6 border-b border-slate-200 dark:border-slate-700">
              <h3 className="font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <Heart className="w-4 h-4 text-rose-500 fill-rose-500" />
                Support the Project
              </h3>
            </div>
            <div className="p-6">
              <p className="text-slate-600 dark:text-slate-400 mb-6 text-sm">
                If you find this cheatsheet helpful, consider starring the repository or contributing to its development.
              </p>
              <a 
                href="https://github.com/WhoisMonesh" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 bg-slate-900 dark:bg-white text-white dark:text-slate-900 py-2.5 rounded-lg font-bold hover:bg-slate-800 dark:hover:bg-slate-100 transition-colors"
              >
                <Github className="w-4 h-4" />
                Star on GitHub
              </a>
            </div>
          </div>

          <div className="bg-gradient-to-br from-indigo-600 to-purple-700 rounded-xl shadow-lg p-6 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl transform translate-x-1/2 -translate-y-1/2"></div>
            
            <h3 className="font-bold text-lg mb-2 flex items-center gap-2">
              <Coffee className="w-5 h-5" />
              Daily Ritual
            </h3>
            <div className="space-y-3 font-mono text-xs bg-black/20 p-4 rounded-lg border border-white/10">
              <div className="flex gap-2">
                <span className="text-purple-300">06:00</span>
                <span>☕ Cloud Concepts Study</span>
              </div>
              <div className="flex gap-2">
                <span className="text-purple-300">07:30</span>
                <span>🛠️ Hands-on Lab Work</span>
              </div>
              <div className="flex gap-2">
                <span className="text-purple-300">19:00</span>
                <span>🌙 Community Learning</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
