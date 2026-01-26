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
        
        {/* Hexagon Shape */}
        <path
          d="M50 5L93.3 30V80L50 105L6.7 80V30L50 5Z"
          fill="url(#logoGradient)"
          className="opacity-90"
        />
        
        {/* Inner Detail - Helm Wheel Stylized */}
        <path
          d="M50 35V65M35 50H65M40 40L60 60M60 40L40 60"
          stroke="white"
          strokeWidth="6"
          strokeLinecap="round"
          className="opacity-90"
        />
        
        {/* Orbiting Dot */}
        <circle r="4" fill="white" className="animate-spin-slow origin-center opacity-80">
           <animateMotion 
             dur="4s" 
             repeatCount="indefinite"
             path="M50 15 C 70 15, 85 30, 85 50 C 85 70, 70 85, 50 85 C 30 85, 15 70, 15 50 C 15 30, 30 15, 50 15 Z"
           />
        </circle>
      </svg>
    </div>
  );
}
