import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Problem from './components/Problem';
import About from './components/About'; // 1. Add this line to import your About section
import Team from './components/Team';
import Stars from './components/Stars';
import Footer from './components/Footer';

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
        <About /> {/* 2. Drop the About component right here between Problem and Team */}
        <Team />
      </main>

      <Footer />
    </div>
  );
}