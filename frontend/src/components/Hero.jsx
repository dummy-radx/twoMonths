import React, { useState } from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';

const Hero = ({ onReveal }) => {
  const [revealed, setRevealed] = useState(false);
  const dragX = useMotionValue(0);
  
  // Transform drag distance to opacity and scale
  const opacity = useTransform(dragX, [0, 200], [1, 0]);
  const scale = useTransform(dragX, [0, 200], [1, 1.1]);

  const handleDragEnd = () => {
    if (dragX.get() > 150) {
      setRevealed(true);
      if (onReveal) onReveal();
    }
  };

  if (revealed) return null;

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-100 flex items-center justify-center bg-cream overflow-hidden"
    >
      <motion.div 
        style={{ opacity, scale }}
        className="text-center px-4"
      >
        <h1 className="text-6xl md:text-8xl mb-8 tracking-tighter text-charcoal">
          Sreeparna & Ishan
        </h1>
        <p className="font-hand text-2xl md:text-3xl text-rose mb-12">
          Two months of magic, captured in a book.
        </p>
        
        <div className="relative inline-block">
          <motion.div
            drag="x"
            dragConstraints={{ left: 0, right: 300 }}
            style={{ x: dragX }}
            onDragEnd={handleDragEnd}
            className="w-16 h-16 bg-charcoal rounded-full flex items-center justify-center cursor-grab active:cursor-grabbing relative z-10"
          >
            <div className="w-2 h-2 bg-cream rounded-full" />
          </motion.div>
          
          <div className="absolute top-1/2 left-0 w-64 h-[2px] bg-charcoal/10 -translate-y-1/2 pointer-events-none" />
          <p className="absolute -bottom-10 left-0 w-full text-sm uppercase tracking-widest opacity-50 whitespace-nowrap">
            Drag to reveal our story
          </p>
        </div>
      </motion.div>
      
      {/* Background visual elements */}
      <div className="absolute top-10 right-10 w-32 h-32 border border-rose/30 rounded-full" />
      <div className="absolute bottom-20 left-10 w-64 h-64 border border-charcoal/5 rounded-full" />
    </motion.div>
  );
};

export default Hero;
