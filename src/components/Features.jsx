import React from 'react';

export default function Features() {
  return (
    /* Changed to 'my-20' to equalize top/bottom margins, giving it elegant breathing room */
    <section className="w-[95%] max-w-5xl mx-auto my-20 grid grid-cols-1 md:grid-cols-3 gap-5 relative z-10">
      
      {/* Card 1: Track Flights */}
      {/* Upped padding slightly to 'p-6' and balanced min-height */}
      <div className="premium-card p-6 rounded-2xl md:col-span-2 flex flex-col justify-between overflow-hidden relative group min-h-[190px]">
        <div>
          <div className="flex items-center gap-3.5 mb-3.5">
            <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-purple-300 border border-white/5 shadow-inner">
              <svg className="w-4.5 h-4.5 filter drop-shadow-[0_0_8px_rgba(226,189,249,0.4)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-white tracking-tight">Track Flights</h3>
          </div>
          <p className="text-white/50 text-sm max-w-xl leading-relaxed">Search, save, and follow every journey with clarity.</p>
        </div>

        {/* Balanced Dashboard UI Line */}
        <div className="mt-5 pt-3.5 border-t border-white/5 flex items-center gap-4 text-xs text-white/40 font-mono">
          <div className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-white/70 font-medium">JFK &rarr; LHR</span>
          </div>
          <span className="text-white/10">|</span>
          <span>In Route — 42m Early</span>
        </div>
      </div>

      {/* Card 2: Explore Airports */}
      <div className="premium-card p-6 rounded-2xl flex flex-col justify-between min-h-[190px] group">
        <div>
          <div className="flex items-center gap-3.5 mb-3.5">
            <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-purple-300 border border-white/5 shadow-inner">
              <svg className="w-4.5 h-4.5 filter drop-shadow-[0_0_8px_rgba(226,189,249,0.4)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-white tracking-tight">Explore Airports</h3>
          </div>
          <p className="text-white/50 text-sm leading-relaxed">View airport insights, terminal amenities, and transit details.</p>
        </div>

        {/* Balanced Badge UI */}
        <div className="mt-5 flex gap-2">
          <span className="px-2.5 py-1 rounded-md bg-white/5 border border-white/5 text-[10px] font-medium text-purple-200">Terminal 4</span>
          <span className="px-2.5 py-1 rounded-md bg-white/5 border border-white/5 text-[10px] font-medium text-white/40">Gate B22</span>
        </div>
      </div>

      {/* Card 3: Visualize Travel */}
      <div className="premium-card p-6 rounded-2xl md:col-span-3 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 group">
        <div className="max-w-2xl">
          <div className="flex items-center gap-3.5 mb-3">
            <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-purple-300 border border-white/5 shadow-inner">
              <svg className="w-4.5 h-4.5 filter drop-shadow-[0_0_8px_rgba(226,189,249,0.4)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-white tracking-tight">Visualize Travel</h3>
          </div>
          <p className="text-white/50 text-sm leading-relaxed">Transform ordinary flight coordinates into meaningful personal analytics maps and country logs.</p>
        </div>

        {/* Balanced Stats Box Layout */}
        <div className="w-full sm:w-auto bg-white/[0.02] border border-white/5 px-4 py-2.5 rounded-xl flex items-center gap-6 text-center shrink-0 self-end sm:self-center">
          <div>
            <div className="text-[9px] uppercase font-bold tracking-wider text-white/30">Countries</div>
            <div className="text-xl font-bold text-white mt-0.5">24</div>
          </div>
          <div className="w-[1px] h-6 bg-white/10" />
          <div>
            <div className="text-[9px] uppercase font-bold tracking-wider text-white/30">Flights</div>
            <div className="text-xl font-bold text-[#E2BDF9] mt-0.5">148</div>
          </div>
        </div>
      </div>

    </section>
  );
}