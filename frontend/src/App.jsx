import React, { useEffect, useState } from 'react';
import Lenis from 'lenis';
import { motion, AnimatePresence } from 'framer-motion';
import GrainOverlay from './components/GrainOverlay';
import Hero from './components/Hero';
import Gallery from './components/Gallery';
import Timeline from './components/Timeline';
import LoveNote from './components/LoveNote';

function App() {
  const [isRevealed, setIsRevealed] = useState(false);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
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
    <main className="min-h-screen bg-cream selection:bg-rose selection:text-white">
      <GrainOverlay />
      
      <AnimatePresence>
        {!isRevealed && (
          <Hero onReveal={() => setIsRevealed(true)} />
        )}
      </AnimatePresence>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isRevealed ? 1 : 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <nav className="fixed top-0 left-0 w-full p-8 flex justify-between items-center z-50 mix-blend-difference text-white pointer-events-none">
          <div className="text-xl tracking-tighter font-serif">S + I</div>
          <div className="text-xs uppercase tracking-widest">Our Second Month</div>
        </nav>

        <Gallery />
        <Timeline />
        <LoveNote />

        <footer className="py-20 text-center border-t border-charcoal/5 bg-cream">
          <h2 className="text-8xl md:text-[12rem] text-charcoal/5 font-serif select-none pointer-events-none">
            I Love You
          </h2>
          <div className="mt-8 flex flex-col items-center">
            <p className="text-charcoal/40 text-sm uppercase tracking-widest mb-4">Forever & Always</p>
            <div className="w-1 h-12 bg-rose/20" />
            <p className="mt-8 text-charcoal/20 text-xs">Created with love by Ishan</p>
          </div>
        </footer>
      </motion.div>
    </main>
  );
}

export default App;