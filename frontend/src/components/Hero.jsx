import React, { useState } from 'react';
import { motion, useMotionValue, useTransform, AnimatePresence } from 'framer-motion';

const Hero = ({ onReveal }) => {
  const [revealed, setRevealed] = useState(false);
  const dragX = useMotionValue(0);
  
  // Transform drag distance to opacity and scale
  const opacity = useTransform(dragX, [0, 200], [1, 0]);
  const scale = useTransform(dragX, [0, 200], [1, 1.1]);
  const overlayScale = useTransform(dragX, [0, 200], [1, 2]);

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
        staggerChildren: 0.1,
      },
    },
  };

  const letter = {
    hidden: { opacity: 0, y: 20, rotate: -10 },
    visible: { opacity: 1, y: 0, rotate: 0 },
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
        <div className="mb-6">
          <motion.span 
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, type: "spring" }}
            className="inline-block px-4 py-1 bg-rose/10 text-rose rounded-full text-sm font-bold uppercase tracking-widest border border-rose/20 mb-4"
          >
            Handmade with Love
          </motion.span>
        </div>
        
        <motion.h1 
          variants={sentence}
          initial="hidden"
          animate="visible"
          className="text-7xl md:text-[10rem] mb-6 tracking-tight text-charcoal flex justify-center flex-wrap font-hand font-bold"
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
          transition={{ delay: 1.8, duration: 1 }}
          className="font-hand text-3xl md:text-5xl text-rose mb-16"
        >
          Sixty days of us.
        </motion.p>
        
        <div className="relative inline-block mt-8">
          <motion.div
            drag="x"
            dragConstraints={{ left: 0, right: 300 }}
            style={{ x: dragX }}
            onDragEnd={handleDragEnd}
            className="w-24 h-24 bg-sunflower rounded-full flex items-center justify-center cursor-grab active:cursor-grabbing relative z-10 shadow-lg border-4 border-white"
          >
            <motion.div 
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="text-3xl"
            >
              🌻
            </motion.div>
          </motion.div>
          
          <div className="absolute top-1/2 left-0 w-80 h-1 bg-charcoal/5 -translate-y-1/2 pointer-events-none rounded-full" />
          <p className="absolute -bottom-14 left-0 w-full text-xs uppercase tracking-[0.4em] opacity-40 whitespace-nowrap font-bold">
            Slide the sunflower to open our story
          </p>
        </div>
      </motion.div>
      
      {/* Decorative Floating Elements */}
      <motion.div 
        animate={{ y: [-20, 20, -20], rotate: [0, 5, 0] }}
        transition={{ repeat: Infinity, duration: 5 }}
        className="absolute top-[10%] right-[10%] opacity-10"
      >
        <svg width="200" height="200" viewBox="0 0 100 100" fill="#FFD93D">
          <circle cx="50" cy="50" r="10" />
          {[...Array(8)].map((_, i) => (
            <path key={i} d="M50,10 L60,40 L40,40 Z" transform={`rotate(${i * 45} 50 50)`} />
          ))}
        </svg>
      </motion.div>

      <motion.div 
        animate={{ y: [20, -20, 20], rotate: [0, -10, 0] }}
        transition={{ repeat: Infinity, duration: 6 }}
        className="absolute bottom-[10%] left-[5%] opacity-5"
      >
        <svg width="300" height="300" viewBox="0 0 100 100" fill="#2D2D2D">
          <circle cx="50" cy="50" r="40" />
        </svg>
      </motion.div>
    </motion.div>
  );
};

export default Hero;
