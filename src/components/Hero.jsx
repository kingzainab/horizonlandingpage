import React from 'react';

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center px-6 pt-32 relative">
      {/* Dynamic Badge */}
      <div className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-white/40 text-[11px] font-semibold tracking-[0.25em] uppercase mb-10 shadow-inner">
        Personalized Flight Journal
      </div>

      {/* Headline - Resolved the clipping issue with py-4 and adjusted leading height */}
      <h1 className="max-w-[1150px] text-5xl md:text-7xl lg:text-[92px] font-bold tracking-[-0.05em] leading-[1.08] headline-gradient py-4 block">
        From where you’ve been <br />
        to where you’re going.
      </h1>

      <p className="max-w-3xl mt-8 text-lg md:text-xl lg:text-2xl leading-relaxed text-white/60 font-light tracking-wide">
        <span className="brand-gradient font-medium">horizon</span> brings flight tracking, airport insights, layovers, and personal travel history into one refined experience.
      </p>

    </section>
  );
}