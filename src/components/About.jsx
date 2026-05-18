import React from 'react';

export default function About() {
  return (
    <section id="about" className="w-[90%] max-w-6xl mx-auto py-32 grid grid-cols-1 md:grid-cols-2 gap-16">
      <div>
        <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-white/30 mb-3">About Horizon</p>
        <h2 className="text-4xl md:text-[54px] font-bold tracking-[-0.04em] leading-[1.08] text-white">
          More than tracking — your travel story.
        </h2>
      </div>
      <div className="flex items-center">
        <p className="text-white/50 text-[16px] md:text-1xl leading-[1.9] font-normal">
          Horizon is designed for travelers who want their flights, layovers, airports, and memories preserved in one place. It transforms ordinary trip data into a beautifully visualized personal journey archive.
        </p>
      </div>
    </section>
  );
}