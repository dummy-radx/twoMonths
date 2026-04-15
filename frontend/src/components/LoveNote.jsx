import React from 'react';
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

const LoveNote = () => {
  return (
    <section className="py-40 bg-cream flex items-center justify-center px-4 overflow-hidden relative">
      <motion.div 
        initial={{ rotate: -5, opacity: 0, y: 50 }}
        whileInView={{ rotate: -1, opacity: 1, y: 0 }}
        whileHover={{ rotate: 0, scale: 1.05 }}
        transition={{ duration: 1, ease: [0.77, 0, 0.175, 1] }}
        viewport={{ once: true }}
        className="max-w-3xl w-full p-12 md:p-24 shadow-[30px_30px_80px_rgba(0,0,0,0.1)] relative border border-charcoal/10 sandpaper-texture"
      >
        {/* Torn Edge Effect */}
        <div className="absolute top-0 left-0 w-full h-12 bg-cream -translate-y-1/2 torn-paper z-20" />
        
        {/* Cute Scrapbook elements */}
        <div className="absolute top-12 right-12 opacity-40">
          <svg width="80" height="80" viewBox="0 0 100 100">
            <path d="M20,20 Q50,0 80,20 T50,80 T20,20" fill="#FF8BA7" className="animate-float" />
          </svg>
        </div>

        {/* Oreo Silk Sticker */}
        <motion.div 
          initial={{ scale: 0, rotate: 0 }}
          whileInView={{ scale: 1, rotate: 15 }}
          className="absolute -top-10 -right-10 w-24 h-24 bg-[#4A2C2A] rounded-full border-4 border-white shadow-lg flex items-center justify-center text-white text-[10px] font-bold text-center p-2 leading-none uppercase tracking-tighter"
        >
          Oreo<br/>Silk<br/>Sweetness
        </motion.div>
        
        <header className="mb-16 relative z-10">
          <p className="font-hand text-3xl text-rose mb-4 tracking-widest">April 15, 2026</p>
          <h2 className="text-6xl md:text-8xl text-charcoal tracking-tighter font-hand">My Sweet Sreeparna,</h2>
        </header>

        <div className="space-y-8 text-2xl md:text-4xl font-hand text-charcoal/90 leading-relaxed text-balance relative z-10">
          <p>
            It's been two months of laughter, deep talks, and all our favorite things. 
            From the flowers I know you love—the sunflowers, the lilies, and the daisies—to 
            our shared sweet moments with Oreo Silk.
          </p>
          <p>
            You're cuter than any teddy bear, and I'm so grateful for every second 
            we spend together. You make my world feel as bright as a sunflower field.
          </p>
          <p className="text-rose font-bold">
            Happy 2-month anniversary, my love. 
          </p>
        </div>

        <footer className="mt-24 pt-12 border-t border-charcoal/10 relative z-10">
          <p className="font-hand text-4xl text-charcoal/60">With all my love,</p>
          <div className="relative inline-block">
            <p className="text-7xl md:text-9xl text-charcoal mt-6 tracking-tighter font-hand">Ishan</p>
            <motion.div 
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              transition={{ delay: 1, duration: 1 }}
              className="absolute bottom-4 left-0 h-2 bg-sunflower/60"
            />
          </div>
        </footer>
        
        {/* Washi Tape Effect */}
        <div className="absolute -top-6 left-[15%] w-40 h-12 bg-sage/30 -rotate-12 backdrop-blur-sm shadow-sm z-30 flex items-center justify-center text-[10px] uppercase font-bold text-charcoal/40">
          Handcrafted
        </div>
        <div className="absolute -bottom-6 right-[20%] w-32 h-10 bg-rose/20 rotate-15 backdrop-blur-sm shadow-sm z-30" />
      </motion.div>

      {/* Decorative Teddy in the corner */}
      <div className="absolute bottom-10 left-10 opacity-20 scale-150 rotate-12 pointer-events-none">
        <svg width="100" height="100" viewBox="0 0 100 100" fill="#8B5E3C">
          <circle cx="50" cy="55" r="35" />
          <circle cx="50" cy="25" r="22" />
          <circle cx="25" cy="15" r="12" />
          <circle cx="75" cy="15" r="12" />
        </svg>
      </div>
    </section>
  );
};

export default LoveNote;
