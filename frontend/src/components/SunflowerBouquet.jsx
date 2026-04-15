import React from 'react';
import { m } from 'framer-motion';

const SunflowerBouquet = () => {
  return (
    <section className="py-20 md:py-40 bg-cream flex flex-col items-center justify-center px-4 overflow-hidden relative">
      <m.div
        initial={{ opacity: 0, scale: 0.8, y: 50 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ 
          duration: 1.2, 
          ease: [0.22, 1, 0.36, 1],
          delay: 0.2
        }}
        viewport={{ once: true }}
        className="relative w-full max-w-[80vw] h-[40vh] md:h-176 md:w-176 z-10"
      >
        {/* Glow effect behind */}
        <div className="absolute inset-0 bg-sunflower/20 blur-[100px] rounded-full scale-150 animate-pulse" />
        
        <img 
          src="/sunflower_newbouquet.png" 
          alt="New Sunflower Bouquet" 
          className="w-full h-full object-contain drop-shadow-[0_20px_50px_rgba(255,217,61,0.3)] animate-float"
          style={{ animationDuration: '4s' }}
        />
        
        {/* Floating particles/petals (simulated) */}
        {[...Array(6)].map((_, i) => (
          <m.div
            key={i}
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 0.6, scale: 1 }}
            animate={{ 
              y: [-10, 10, -10],
              x: [-5, 5, -5],
              rotate: [0, 20, 0]
            }}
            transition={{ 
              y: { duration: 3 + i, repeat: Infinity, ease: "easeInOut" },
              x: { duration: 2 + i, repeat: Infinity, ease: "easeInOut" },
              rotate: { duration: 4 + i, repeat: Infinity, ease: "easeInOut" },
              delay: i * 0.1
            }}
            className="absolute w-4 h-4 md:w-6 md:h-6 bg-sunflower/40 rounded-full blur-[2px]"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </m.div>

      <m.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.8 }}
        viewport={{ once: true }}
        className="mt-12 text-center z-20"
      >
        <span className="font-hand text-3xl md:text-5xl text-charcoal/80">Specifically for you.</span>
      </m.div>

      {/* Decorative background element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none opacity-[0.1] select-none flex items-center justify-center overflow-hidden">
        <div className="text-[clamp(5rem,20vw,15rem)] md:text-[clamp(10rem,18vw,35rem)] font-serif font-black uppercase leading-[0.7] text-charcoal flex flex-col items-center tracking-[0.05em] md:tracking-widest">
            <span>I LOVE</span>
            <span>YOU</span>
        </div>
      </div>
    </section>
  );
};

export default SunflowerBouquet;
