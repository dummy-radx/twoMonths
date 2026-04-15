import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const DoodleLayer = () => {
  const { scrollYProgress } = useScroll();
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -500]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 45]);

  return (
    <div className="fixed inset-0 pointer-events-none z-40 overflow-hidden">
      {/* Top Left Heart */}
      <motion.div 
        style={{ y: y1, rotate }}
        className="absolute top-20 left-[5%]"
      >
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" stroke="currentColor" className="text-rose/30">
          <path d="M20 35C20 35 35 25 35 15C35 5 25 5 20 12C15 5 5 5 5 15C5 25 20 35 20 35Z" strokeWidth="2" strokeLinecap="round" />
        </svg>
      </motion.div>

      {/* Scattered Stars */}
      <motion.div 
        style={{ y: y2 }}
        className="absolute bottom-40 right-[10%] "
      >
        <svg width="30" height="30" viewBox="0 0 30 30" fill="none" stroke="currentColor" className="text-sage/40 animate-wiggle">
          <path d="M15 2L18.5 11.5H28.5L20.5 17.5L23.5 27L15 21L6.5 27L9.5 17.5L1.5 11.5H11.5L15 2Z" strokeWidth="1.5" strokeLinejoin="round" />
        </svg>
      </motion.div>

      {/* Swirly Line */}
      <motion.div 
        style={{ y: y1, opacity: useTransform(scrollYProgress, [0.2, 0.4], [0, 1]) }}
        className="absolute top-1/2 left-10"
      >
        <svg width="60" height="100" viewBox="0 0 60 100" fill="none" stroke="currentColor" className="text-charcoal/10">
          <path d="M10,10 Q50,30 10,50 T50,90" strokeWidth="2" strokeLinecap="round" strokeDasharray="5 5" />
        </svg>
      </motion.div>

      {/* Hand-drawn Arrow */}
      <motion.div 
        style={{ x: useTransform(scrollYProgress, [0.4, 0.6], [-100, 0]), opacity: useTransform(scrollYProgress, [0.4, 0.5], [0, 1]) }}
        className="absolute bottom-1/4 left-[15%]"
      >
        <svg width="50" height="20" viewBox="0 0 50 20" fill="none" stroke="currentColor" className="text-rose/20">
          <path d="M5,10 L45,10 M35,5 L45,10 L35,15" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </motion.div>
    </div>
  );
};

export default DoodleLayer;
