import React from 'react';

export default function Problem() {
  const points = [
    {
      problem: "Flight data gets lost in messy email threads and digital clutter.",
      solution: "Automated syncing organizes every past path into a refined, cinematic timeline."
    },
    {
      problem: "Standard flight trackers prioritize business logistics over personal travel stories.",
      solution: "Personalized analytics convert miles into visual passport stamps and country logs."
    },
    {
      problem: "Airport navigation and layovers remain disconnected, stressful friction points.",
      solution: "Real-time airport tracking gives context-aware terminal intelligence proactively."
    }
  ];

  return (
    <section id="problem" className="w-[90%] max-w-5xl mx-auto py-28 border-t border-white/5 relative z-10">
      <div className="text-center mb-20">
        <span className="text-purple-400 font-bold uppercase tracking-[0.2em] text-[11px]">The Paradigm Shift</span>
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mt-2">Why horizon?</h2>
      </div>

      <div className="flex flex-col gap-4">
        {points.map((item, idx) => (
          <div 
            key={idx} 
            className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6 rounded-2xl border border-white/5 bg-white/[0.01] hover:bg-white/[0.03] transition-colors group items-center"
          >
            {/* The Left Side: The Frustrating Reality */}
            <div className="flex items-start gap-4 pr-4">
              <div className="w-5 h-5 rounded-full bg-red-500/10 border border-red-500/20 flex items-center justify-center text-red-400 shrink-0 mt-0.5">
                <span className="text-xs font-bold font-sans">&times;</span>
              </div>
              <p className="text-white/40 text-[15px] font-normal leading-relaxed group-hover:text-white/50 transition-colors">
                {item.problem}
              </p>
            </div>

            {/* The Right Side: The Premium Solution */}
            <div className="flex items-start gap-4 pl-0 md:pl-6 border-t md:border-t-0 md:border-l border-white/5 pt-4 md:pt-0">
              <div className="w-5 h-5 rounded-full bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-[#E2BDF9] shrink-0 mt-0.5 shadow-[0_0_10px_rgba(123,70,156,0.3)]">
                <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <p className="text-white text-[15px] font-medium leading-relaxed tracking-wide">
                {item.solution}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}