import React from 'react';

export default function About() {
  return (
    // Reduced padding-top to 16 and padding-bottom to 12 for better proximity control
    <section id="about" className="w-[90%] max-w-6xl mx-auto pt-16 pb-12 grid grid-cols-1 md:grid-cols-2 gap-16 relative z-10">

      {/* Left Column: Typography Headline Header */}
      <div>
        <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-white/30 mb-3">About Horizon</p>
        <h2 className="text-4xl md:text-[54px] font-bold tracking-[-0.04em] leading-[1.08] text-white">
          More than tracking — your travel story.
        </h2>
      </div>

      {/* Right Column: Narrative Body Copy */}
      <div className="flex items-center">
        {/* Fixed md:text-1xl syntax to a premium, standard md:text-lg size rule */}
        <p className="text-white/50 text-[16px] md:text-lg leading-[1.9] font-normal">
          Horizon is designed for travelers who want their flights, layovers, airports, and memories preserved in one place. It transforms ordinary trip data into a beautifully visualized personal journey archive.
        </p>
      </div>

    </section>
  );
}