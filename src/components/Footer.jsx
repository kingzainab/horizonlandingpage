import React from 'react';

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-[#030005]/20 backdrop-blur-md relative z-10 mt-32">
      <div className="max-w-5xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
        
        {/* Left Column: Minimalistic Interactive Brand Logo Icon */}
        <div className="flex flex-col justify-start">
          <div 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="cursor-pointer text-white/40 hover:text-white transition-colors duration-300 w-fit"
          >
            {/* Custom structural vector star/airplane anchor icon matching the layout */}
            <svg className="w-5 h-5 filter drop-shadow-[0_0_8px_rgba(255,255,255,0.2)]" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2L14.85 9.15L22 12L14.85 14.85L12 22L9.15 14.85L2 12L9.15 9.15L12 2Z" />
            </svg>
          </div>
        </div>

        {/* Column 2: Product Navigation Grid */}
        <div>
          <h4 className="text-xs font-bold text-white tracking-wider mb-5">Product</h4>
          <div className="flex flex-col gap-3 text-xs font-medium text-white/40">
            <a href="#problem" className="hover:text-white transition-colors duration-200 w-fit">The Problem</a>
            <a href="#about" className="hover:text-white transition-colors duration-200 w-fit">Platform</a>
            <a href="#about" className="hover:text-white transition-colors duration-200 w-fit">Ticker</a>
            <a href="#about" className="hover:text-white transition-colors duration-200 w-fit">Industries</a>
            <a href="#team" className="hover:text-white transition-colors duration-200 w-fit">Team</a>
          </div>
        </div>

        {/* Column 3: Materials & Assets Download Links */}
        <div>
          <h4 className="text-xs font-bold text-white tracking-wider mb-5">Downloads</h4>
          <div className="flex flex-col gap-3 text-xs font-medium text-white/40">
            <a href="#" className="hover:text-white transition-colors duration-200 w-fit">Abstract</a>
            <a href="#" className="hover:text-white transition-colors duration-200 w-fit">Brochure</a>
            <a href="#" className="hover:text-white transition-colors duration-200 w-fit">Presentation</a>
            <a href="#" className="hover:text-white transition-colors duration-200 w-fit">CV — Zainab</a>
            <a href="#" className="hover:text-white transition-colors duration-200 w-fit">CV — Ahmed</a>
          </div>
        </div>

        {/* Column 4: Personal Links Grid */}
        <div>
          <h4 className="text-xs font-bold text-white tracking-wider mb-5">Connect</h4>
          <div className="flex flex-col gap-3 text-xs font-medium text-white/40">
            <a href="#" className="hover:text-[#E2BDF9] transition-colors duration-200 w-fit">Zainab Asif</a>
            <a href="#" className="hover:text-[#E2BDF9] transition-colors duration-200 w-fit">Ahmed Tasadduq</a>
            <a href="#" className="hover:text-white transition-colors duration-200 w-fit">Engr. Aamir Sohail</a>
          </div>
        </div>

      </div>
    </footer>
  );
}