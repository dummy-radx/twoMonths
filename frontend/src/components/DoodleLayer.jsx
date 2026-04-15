import React from 'react';
import { m, useScroll, useTransform } from 'framer-motion';

const Sunflower = () => (
  <svg width="60" height="60" viewBox="0 0 100 100" fill="none" className="animate-wiggle">
    <circle cx="50" cy="50" r="15" fill="#3B2F2F" />
    {[...Array(12)].map((_, i) => (
      <ellipse 
        key={i}
        cx="50" cy="20" rx="10" ry="20" 
        fill="#FFD93D" 
        transform={`rotate(${i * 30} 50 50)`} 
      />
    ))}
  </svg>
);

const Daisy = () => (
  <svg width="40" height="40" viewBox="0 0 100 100" fill="none" className="animate-float">
    <circle cx="50" cy="50" r="12" fill="#FFD93D" />
    {[...Array(8)].map((_, i) => (
      <ellipse 
        key={i}
        cx="50" cy="20" rx="8" ry="25" 
        fill="#FFFFFF" 
        transform={`rotate(${i * 45} 50 50)`} 
      />
    ))}
  </svg>
);

const Teddy = () => (
  <svg width="50" height="50" viewBox="0 0 100 100" fill="#8B5E3C" className="animate-wiggle">
    <circle cx="50" cy="55" r="35" /> {/* Body */}
    <circle cx="50" cy="25" r="22" /> {/* Head */}
    <circle cx="25" cy="15" r="12" /> {/* Left Ear */}
    <circle cx="75" cy="15" r="12" /> {/* Right Ear */}
    <circle cx="40" cy="22" r="3" fill="white" /> {/* Left Eye */}
    <circle cx="60" cy="22" r="3" fill="white" /> {/* Right Eye */}
    <path d="M45,35 Q50,40 55,35" stroke="white" strokeWidth="2" fill="none" /> {/* Mouth */}
  </svg>
);

const DoodleLayer = () => {
  const { scrollYProgress } = useScroll();
  
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -600]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, -1000]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 90]);

  return (
    <div className="fixed inset-0 pointer-events-none z-40 overflow-hidden">
      {/* Sunflowers */}
      <m.div style={{ y: y1, rotate }} className="absolute top-[10%] left-[5%] md:left-[5%] scale-75 md:scale-100">
        <Sunflower />
      </m.div>
      <m.div style={{ y: y2 }} className="absolute bottom-[20%] right-[2%] md:right-[5%] opacity-30 md:opacity-40 scale-50 md:scale-100">
        <Sunflower />
      </m.div>

      {/* Daisies */}
      <m.div style={{ y: y2, x: 20 }} className="absolute top-1/2 left-[5%] md:left-[10%] scale-75 md:scale-100">
        <Daisy />
      </m.div>
      <m.div style={{ y: y1 }} className="absolute top-[35%] right-[10%] md:top-[40%] md:right-[15%] scale-75 md:scale-100">
        <Daisy />
      </m.div>

      {/* Teddies */}
      <m.div 
        style={{ y: y3, rotate: -15 }} 
        className="absolute bottom-40 left-[8%] md:left-[15%] opacity-40 md:opacity-60 scale-75 md:scale-100 hidden sm:block"
      >
        <Teddy />
      </m.div>
      <m.div 
        style={{ y: y2, rotate: 15 }} 
        className="absolute top-[15%] right-[15%] md:right-[20%] opacity-20 md:opacity-30 scale-50 md:scale-75"
      >
        <Teddy />
      </m.div>

      {/* Scattered hearts from before, kept for cuteness */}
      <m.div style={{ y: y2 }} className="absolute top-[70%] left-[20%] md:left-[30%]">
        <svg width="20" height="20" viewBox="0 0 20 20" fill="#FF8BA7" className="animate-float">
          <path d="M10 18C10 18 18 13 18 8C18 3 13 3 10 7C7 3 2 3 2 8C2 13 10 18 10 18Z" />
        </svg>
      </m.div>
    </div>
  );
};

export default DoodleLayer;
