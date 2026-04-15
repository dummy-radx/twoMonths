import React, { useState } from 'react';
import { motion, useMotionValue, useTransform, AnimatePresence } from 'framer-motion';

const Hero = ({ onReveal }) => {
  const [revealed, setRevealed] = useState(false);
  const dragX = useMotionValue(0);
  
  // Transform drag distance to opacity and scale
  const opacity = useTransform(dragX, [0, 200], [1, 0]);
  const scale = useTransform(dragX, [0, 200], [1, 1.1]);
  const overlayScale = useTransform(dragX, [0, 200], [1, 1.5]);

  const handleDragEnd = () => {
    if (dragX.get() > 150) {
      setRevealed(true);
      if (onReveal) onReveal();
    }
  };

  const title = "Sreeparna & Ishan";
  const sentence = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.5,
        staggerChildren: 0.08,
      },
    },
  };

  const letter = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
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
        className="text-center px-4 relative z-10"
      >
        <motion.h1 
          variants={sentence}
          initial="hidden"
          animate="visible"
          className="text-6xl md:text-9xl mb-8 tracking-tighter text-charcoal flex justify-center flex-wrap"
        >
          {title.split("").map((char, index) => (
            <motion.span key={index} variants={letter}>
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="font-hand text-2xl md:text-4xl text-rose mb-12"
        >
          60 days, infinite memories.
        </motion.p>
        
        <div className="relative inline-block mt-8">
          <motion.div
            drag="x"
            dragConstraints={{ left: 0, right: 300 }}
            style={{ x: dragX }}
            onDragEnd={handleDragEnd}
            className="w-20 h-20 bg-charcoal rounded-full flex items-center justify-center cursor-grab active:cursor-grabbing relative z-10 border-4 border-white/20"
          >
            <motion.div 
              animate={{ x: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              className="w-2 h-2 bg-cream rounded-full" 
            />
          </motion.div>
          
          <div className="absolute top-1/2 left-0 w-80 h-[2px] bg-charcoal/5 -translate-y-1/2 pointer-events-none" />
          <p className="absolute -bottom-12 left-0 w-full text-xs uppercase tracking-[0.4em] opacity-40 whitespace-nowrap">
            Swipe to open the photo book
          </p>
        </div>
      </motion.div>
      
      {/* Decorative Circles that scale during drag */}
      <motion.div 
        style={{ scale: overlayScale }}
        className="absolute top-10 right-10 w-64 h-64 border-2 border-rose/10 rounded-full" 
      />
      <motion.div 
        style={{ scale: overlayScale }}
        className="absolute bottom-20 left-10 w-96 h-96 border-2 border-charcoal/5 rounded-full" 
      />
    </motion.div>
  );
};

export default Hero;
