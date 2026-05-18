import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Problem from './components/Problem';
import Team from './components/Team';
import Stars from './components/Stars';
import Footer from './components/Footer'; // 1. Import the clean component

export default function App() {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <div className="ambient-glow" />
      <Stars />
      <Navbar />
      
      <main className="relative z-10">
        <Hero />
        <Features />
        <Problem />
        <Team />
      </main>

      <Footer /> {/* 2. Place it right here at the absolute end */}
    </div>
  );
}