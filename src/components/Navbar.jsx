import React, { useState, useEffect } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Monitor scroll behavior to trigger the capsule compression effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Clean data structure mapping the exact layout from your reference image
  const projectMaterials = [
    { 
      name: 'Poster', 
      icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /> 
    },
    { 
      name: 'Brochure', 
      icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /> 
    },
    { 
      name: 'Abstract', 
      icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /> 
    },
    { 
      name: 'Presentation', 
      icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M7 4v16M17 4v16M3 8h18M3 16h18" /> 
    },
  ];

  const teamCVs = [
    { name: 'Zainab Asif' },
    { name: 'Ahmed Tasadduq' }
  ];

  // Global user SVG icon profile path
  const userIcon = <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />;

  return (
    // Dynamic top position padding transitions as you scroll down
    <div className={`fixed left-0 right-0 z-50 px-6 transition-all duration-500 ease-out ${scrolled ? 'top-4' : 'top-8'}`}>
      <nav 
        className={`mx-auto flex justify-between items-center transition-all duration-500 ease-out bg-none
          ${scrolled 
            ? 'max-w-5xl rounded-full px-6 py-3 bg-white/[0.14] border-white/20 shadow-2xl backdrop-blur-lg' 
            : 'max-w-6xl rounded-full px-8 py-4.5 bg-white/[0.08] border-white/15 shadow-lg backdrop-blur-2xl'
          }`}
      >
        {/* Brand Wordmark Link */}
        <div className="flex items-center cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <img 
            src="/wordmark.png" 
            alt="horizon" 
            className={`object-contain block transition-all duration-500 ease-out 
              ${scrolled ? 'h-6 md:h-6.5' : 'h-8 md:h-10'}`} 
          />
        </div>

        {/* Navigation Action Links */}
        <div className="flex items-center gap-8">
          <a href="#problem" className="text-sm font-medium text-white/70 hover:text-white transition-colors">Problem</a>
          <a href="#about" className="text-sm font-medium text-white/70 hover:text-white transition-colors">About</a>
          <a href="#team" className="text-sm font-medium text-white/70 hover:text-white transition-colors">Team</a>
          
          {/* Downloads Action Dropdown */}
          <div className="relative">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              onBlur={() => setTimeout(() => setIsOpen(false), 200)}
              className="flex items-center gap-1.5 text-sm font-medium text-white/70 hover:text-white bg-white/5 hover:bg-white/10 px-4 py-2 rounded-xl border border-white/10 transition-all focus:outline-none cursor-pointer"
            >
              Downloads
              <svg className={`w-3.5 h-3.5 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {isOpen && (
              <div className="absolute right-0 mt-3 w-64 p-4 rounded-3xl bg-[#12031c]/95 border border-white/10 backdrop-blur-3xl shadow-2xl animate-in fade-in slide-in-from-top-2 duration-200">
                
                {/* Section 1: Project Material */}
                <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-white/35 mb-3 px-1">Project Material</div>
                <div className="flex flex-col gap-1 mb-5">
                  {projectMaterials.map((item, index) => (
                    <a key={index} href="#" className="flex items-center gap-3.5 px-2.5 py-2.5 rounded-xl hover:bg-white/5 text-white/70 hover:text-white transition-colors group">
                      <svg className="w-5 h-5 text-white/50 group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        {item.icon}
                      </svg>
                      <span className="text-[15px] font-normal">{item.name}</span>
                    </a>
                  ))}
                </div>

                {/* Section 2: Team CVs */}
                <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-white/35 mb-3 px-1">Team CVs</div>
                <div className="flex flex-col gap-1">
                  {teamCVs.map((item, index) => (
                    <a key={index} href="#" className="flex items-center gap-3.5 px-2.5 py-2.5 rounded-xl hover:bg-white/5 text-white/70 hover:text-white transition-colors group">
                      <svg className="w-5 h-5 text-white/50 group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        {userIcon}
                      </svg>
                      <span className="text-[15px] font-normal">{item.name}</span>
                    </a>
                  ))}
                </div>

              </div>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
}