import React from 'react';

export default function Team() {
  // Clean data structure mapping your dynamic asset paths and links
  const architects = [
    { 
      name: 'Zainab Asif', 
      role: 'Software Engineer', 
      linkedin: 'https://www.linkedin.com/in/-zainab-asif/',
      cv: 'https://horizonfyp.blob.core.windows.net/openhouse/Zainab%20Asif%20-CV.pdf',
      image: '/zainab.jpeg' // Points directly to public/zainab.jpeg
    },
    { 
      name: 'Ahmed Tasadduq', 
      role: 'Software Engineer', 
      linkedin: 'https://www.linkedin.com/in/ahmed6123/',
      cv: 'https://horizonfyp.blob.core.windows.net/openhouse/Ahmed%20Tasadduq%20-%20CV.pdf',
      image: '/ahmed.jpeg' // Points directly to public/ahmed.jpeg
    }
  ];

  return (
    <section id="team" className="w-[90%] max-w-5xl mx-auto py-24 border-t border-white/5 relative z-10">
      
      {/* Section Title */}
      <div className="mb-12">
        <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-purple-400">Foundations</span>
        <h2 className="text-4xl font-bold tracking-tight text-white mt-1.5">The Team</h2>
      </div>

      {/* Team Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        
        {/* Core Software Engineers Loop */}
        {architects.map((member, i) => (
          <div key={i} className="premium-card p-6 rounded-2xl flex flex-col justify-between min-h-[220px] relative group overflow-hidden">
            {/* Ambient subtle glow trace on hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="flex items-center gap-4 relative z-10">
              {/* Profile Photo Wrapper with Luxury Glow Layer */}
              <div className="w-13 h-13 rounded-xl bg-white/[0.03] border border-white/10 overflow-hidden shrink-0 shadow-[0_0_15px_rgba(226,189,249,0.05)] flex items-center justify-center">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover opacity-60 group-hover:opacity-90 transition-opacity duration-300"
                />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white tracking-tight">{member.name}</h3>
                <p className="text-[10px] text-purple-300/80 font-bold tracking-wider mt-0.5 uppercase">{member.role}</p>
              </div>
            </div>
            
            {/* Action Interaction Row */}
            <div className="flex items-center gap-2.5 mt-8 relative z-10">
              {/* Premium Purple Button */}
              <a 
                href={member.linkedin} 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-purple-500/10 border border-purple-500/20 text-xs font-semibold text-[#E2BDF9] hover:bg-purple-500/20 transition-all shadow-[0_0_15px_rgba(123,70,156,0.15)] cursor-pointer"
              >
                LinkedIn
                <svg className="w-3 h-3 opacity-60" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
              <a 
                href={member.cv} 
                target="_blank"
                rel="noopener noreferrer"
                className="px-3.5 py-2 rounded-xl border border-white/5 hover:border-white/10 text-xs font-medium text-white/40 hover:text-white transition-all cursor-pointer"
              >
                Download CV
              </a>
            </div>
          </div>
        ))}

        {/* Academic Project Supervisor Card */}
        <div className="premium-card p-6 rounded-2xl flex flex-col justify-between min-h-[220px] relative overflow-hidden border-purple-500/10 bg-gradient-to-b from-purple-950/[0.05] to-transparent group">
          {/* Top border ambient highlight line */}
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-purple-500/20 to-transparent" />
          
          <div className="flex items-center gap-4 relative z-10">
            {/* Supervisor Photo Wrapper */}
            <div className="w-13 h-13 rounded-xl bg-white/[0.03] border border-white/10 overflow-hidden shrink-0 shadow-[0_0_15px_rgba(226,189,249,0.05)] flex items-center justify-center">
              <img 
                src="aamir.jpeg"
                alt="Engr. Aamir Sohail" 
                className="w-full h-full object-cover opacity-60 group-hover:opacity-90 transition-opacity duration-300"
              />
            </div>
            <div>
              <span className="text-[8px] font-bold uppercase tracking-[0.15em] text-purple-400 block mb-0.5">Academic Direction</span>
              <h3 className="text-xl font-bold text-white tracking-tight">Engr. Aamir Sohail</h3>
              <p className="text-[10px] text-white/40 font-bold tracking-wider uppercase">Project Supervisor</p>
            </div>
          </div>
          
          <div className="mt-8">
            {/* Replicated Purple Button matching the Dev layout */}
            <a 
              href="https://www.linkedin.com/in/aamir-sohail-0932b268/" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-purple-500/10 border border-purple-500/20 text-xs font-semibold text-[#E2BDF9] hover:bg-purple-500/20 transition-all shadow-[0_0_15px_rgba(123,70,156,0.15)] cursor-pointer"
            >
              LinkedIn
              <svg className="w-3 h-3 opacity-60" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}