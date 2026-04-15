import React, { useEffect, useState } from 'react';
import Lenis from 'lenis';
import { LazyMotion, domMax, m, AnimatePresence } from 'framer-motion';
import GrainOverlay from './components/GrainOverlay';
import Hero from './components/Hero';
import HorizontalGallery from './components/HorizontalGallery';
import TimelineCollage from './components/Timeline';
import LoveNote from './components/LoveNote';
import SunflowerBouquet from './components/SunflowerBouquet';
import DoodleLayer from './components/DoodleLayer';
import SVGFilters from './components/SVGFilters';

function App() {
  const [isRevealed, setIsRevealed] = useState(false);

  useEffect(() => {
    // Advanced Lenis config for that premium smooth scroll
    const lenis = new Lenis({
      duration: 1.5,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 1.1,
      lerp: 0.1,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <LazyMotion features={domMax}>
      <main className="min-h-screen bg-cream selection:bg-rose selection:text-white">
        <GrainOverlay />
        <SVGFilters />
        <DoodleLayer />
        
        <AnimatePresence>
          {!isRevealed && (
            <Hero onReveal={() => setIsRevealed(true)} />
          )}
        </AnimatePresence>

        <m.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isRevealed ? 1 : 0 }}
          transition={{ duration: 1.5, delay: 0.5 }}
        >
          <nav className="fixed top-0 left-0 w-full p-6 md:p-12 flex justify-between items-center z-50 mix-blend-difference text-white pointer-events-none">
            <div className="relative group flex items-center justify-center">
              <div className="text-xl md:text-3xl tracking-tighter font-serif font-bold italic relative z-10 px-6 py-4">
                S+I
              </div>
              <svg 
                className="absolute inset-0 w-full h-full text-rose -rotate-3 transition-transform duration-500 group-hover:scale-110" 
                viewBox="0 0 100 100" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="1.5"
              >
                <path 
                  d="M50,92 C50,92 5,72 5,35 C5,12 35,8 50,30 C65,8 95,12 95,35 C95,72 50,92 50,92" 
                  strokeLinecap="round"
                />
              </svg>
            </div>
            <div className="text-[10px] md:text-xs uppercase tracking-widest font-bold">A Sixty Day Story</div>
          </nav>

          {/* New Pinned Horizontal Section */}
          <HorizontalGallery />
          
          {/* New Collage Section */}
          <TimelineCollage />
          
          {/* Refined Love Note */}
          <LoveNote />

          {/* New Sunflower Bouquet */}
          <SunflowerBouquet />

          <footer className="py-20 md:py-40 text-center border-t border-charcoal/5 bg-cream relative overflow-hidden">
          <h2 className="text-5xl md:text-8xl lg:text-[12rem] text-charcoal/80 font-serif select-none pointer-events-none leading-none tracking-tighter">
            Forever Always
          </h2>
            <div className="mt-8 flex flex-col items-center relative z-10 px-4">
              <p className="font-hand text-2xl md:text-3xl text-rose mb-8 italic">You are the best gift I've ever received.</p>
              <div className="w-px h-24 bg-linear-to-b from-rose/40 to-transparent" />
              <p className="mt-12 text-charcoal/40 text-[10px] uppercase tracking-[0.3em] font-bold">
                Two Month Anniversary — April 15, 2026
              </p>
              <p className="mt-4 text-charcoal/20 text-[9px]">Hand-crafted for Sreeparna by Ishan</p>
            </div>

            {/* Background decorative doodles */}
            <div className="absolute top-1/2 left-1/4 -translate-y-1/2 opacity-5 pointer-events-none">
              <svg width="200" height="200" viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="40" stroke="currentColor" fill="none" strokeWidth="0.5" strokeDasharray="5 5" />
              </svg>
            </div>
          </footer>
        </m.div>
      </main>
    </LazyMotion>
  );
}

export default App;