export function AnimatedLogo() {
  return (
    <div className="logo-container w-10 h-10 flex items-center justify-center relative group">
      {/* Outer Glow */}
      <div className="absolute inset-0 bg-brand-500/20 rounded-xl blur-lg group-hover:bg-brand-500/40 transition-all duration-500"></div>
      
      <svg
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full relative z-10 transform group-hover:scale-110 transition-transform duration-500"
      >
        <defs>
          <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3b82f6" />
            <stop offset="100%" stopColor="#8b5cf6" />
          </linearGradient>
        </defs>
        
        {/* Kubernetes Heptagon */}
        <path
          d="M50 5 L85.2 21.9 L93.9 60 L69.5 90.5 L30.5 90.5 L6.1 60 L14.8 21.9 Z"
          fill="url(#logoGradient)"
          className="opacity-90"
        />
        
        {/* Inner Wheel - 7 Spokes */}
        <g transform="translate(50, 50)" fill="white" className="opacity-90">
          <circle r="8" />
          {[0, 1, 2, 3, 4, 5, 6].map((i) => (
            <g key={i} transform={`rotate(${i * (360 / 7)})`}>
              <rect x="-3" y="-28" width="6" height="16" rx="2" />
              <rect x="-6" y="-34" width="12" height="6" rx="2" />
            </g>
          ))}
        </g>
        
        {/* Orbiting Dot */}
        <circle r="3" fill="white" className="animate-spin-slow origin-center opacity-80">
          <animateMotion 
            dur="6s" 
            repeatCount="indefinite"
            path="M50 10 C 80 10, 90 30, 90 50 C 90 80, 70 95, 50 95 C 30 95, 10 80, 10 50 C 10 30, 20 10, 50 10 Z"
          />
        </circle>
      </svg>
    </div>
  );
}
