
type IconType = 
  | 'commands'
  | 'templates'
  | 'troubleshoot'
  | 'practices'
  | 'versions'
  | 'favorites'
  | 'scenarios'
  | 'quiz'
  | 'console'
  | 'builder'
  | 'exam';

interface FlatIconProps {
  type: IconType;
  className?: string;
}

export function FlatIcon({ type, className = "w-6 h-6" }: FlatIconProps) {
  const icons = {
    commands: (
      <svg viewBox="0 0 24 24" fill="none" className={className}>
        <rect x="2" y="4" width="20" height="16" rx="2" className="fill-current opacity-20" />
        <path d="M4 8h16M4 16h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path d="M8 12h8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
    templates: (
      <svg viewBox="0 0 24 24" fill="none" className={className}>
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" className="fill-current opacity-20" />
        <path d="M14 2v6h6" className="fill-current opacity-40" />
        <path d="M16 13H8M16 17H8M10 9H8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
    troubleshoot: (
      <svg viewBox="0 0 24 24" fill="none" className={className}>
        <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" className="fill-current opacity-20" />
        <path d="M12 8v4M12 16h.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
    practices: (
      <svg viewBox="0 0 24 24" fill="none" className={className}>
        <path d="M12 2a7 7 0 0 1 7 7c0 2.38-1.19 4.47-3 5.74V17a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2v-2.26C6.19 13.47 5 11.38 5 9a7 7 0 0 1 7-7z" className="fill-current opacity-20" />
        <path d="M9 21h6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
    versions: (
      <svg viewBox="0 0 24 24" fill="none" className={className}>
        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" className="fill-current opacity-20" />
      </svg>
    ),
    favorites: (
      <svg viewBox="0 0 24 24" fill="none" className={className}>
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" className="fill-current opacity-20" />
        <path d="M12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
      </svg>
    ),
    scenarios: (
      <svg viewBox="0 0 24 24" fill="none" className={className}>
        <rect x="3" y="3" width="18" height="18" rx="2" className="fill-current opacity-20" />
        <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M8 7h8M8 17h8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
    quiz: (
      <svg viewBox="0 0 24 24" fill="none" className={className}>
        <circle cx="12" cy="12" r="10" className="fill-current opacity-20" />
        <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path d="M12 17h.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
    console: (
      <svg viewBox="0 0 24 24" fill="none" className={className}>
        <rect x="2" y="4" width="20" height="16" rx="2" className="fill-current opacity-20" />
        <path d="M6 10l2 2-2 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M11 14h5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
    builder: (
      <svg viewBox="0 0 24 24" fill="none" className={className}>
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" className="fill-current opacity-20" />
        <path d="M12 18v-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path d="M9 15l3 3 3-3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M9 12h6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
    exam: (
      <svg viewBox="0 0 24 24" fill="none" className={className}>
        <circle cx="12" cy="12" r="10" className="fill-current opacity-20" />
        <path d="M12 8v4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path d="M12 16h.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    )
  };

  return icons[type] || null;
}
