import React from 'react';
import { motion } from 'framer-motion';

const MEMORIES = [
  { 
    day: "Day 01", 
    text: "The first hello.", 
    img: "https://images.unsplash.com/photo-1518199266791-5375a83190b2?auto=format&fit=crop&w=600&q=80",
    tilt: -5,
    pos: "left"
  },
  { 
    day: "Day 15", 
    text: "Late night walks.", 
    img: "https://images.unsplash.com/photo-1516589174184-c685266d4af4?auto=format&fit=crop&w=600&q=80",
    tilt: 3,
    pos: "right"
  },
  { 
    day: "Day 32", 
    text: "That rainy dinner.", 
    img: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=600&q=80",
    tilt: -2,
    pos: "center"
  },
  { 
    day: "Day 60", 
    text: "Happy Anniversary, Love.", 
    img: "https://images.unsplash.com/photo-1518331647614-7a1f04cd34cf?auto=format&fit=crop&w=600&q=80",
    tilt: 5,
    pos: "right"
  }
];

const TimelineCollage = () => {
  return (
    <section className="py-40 bg-cream relative overflow-hidden px-4">
      <div className="max-w-6xl mx-auto">
        <header className="mb-40 text-center">
          <h2 className="text-6xl md:text-9xl text-charcoal tracking-tighter mb-8 italic">Snapshot Stories</h2>
          <div className="w-16 h-16 border border-rose/30 rounded-full mx-auto flex items-center justify-center animate-bounce">
            <span className="text-xl text-rose">↓</span>
          </div>
        </header>

        <div className="relative space-y-32 md:space-y-64">
          {MEMORIES.map((memory, index) => (
            <div 
              key={index}
              className={`flex flex-col md:flex-row items-center gap-12 ${
                memory.pos === 'right' ? 'md:justify-end' : 
                memory.pos === 'left' ? 'md:justify-start' : 'md:justify-center'
              }`}
            >
              <motion.div 
                style={{ rotate: memory.tilt }}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true, margin: "-100px" }}
                className="relative group group-hover:z-10"
              >
                {/* Image Mask Reveal */}
                <motion.div 
                  initial={{ clipPath: "circle(0% at 50% 50%)" }}
                  whileInView={{ clipPath: "circle(100% at 50% 50%)" }}
                  transition={{ duration: 1.5, ease: "easeInOut" }}
                  viewport={{ once: true }}
                  className="w-full max-w-sm md:max-w-md aspect-square bg-white p-4 shadow-2xl rough-edge overflow-hidden"
                >
                  <img 
                    src={memory.img} 
                    alt={memory.text}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                  />
                </motion.div>

                {/* Handwritten Note Overlay */}
                <div 
                  className={`absolute -bottom-8 ${index % 2 === 0 ? '-right-12' : '-left-12'} bg-white/90 backdrop-blur p-6 shadow-xl border border-charcoal/5 max-w-[200px] rough-edge`}
                >
                  <span className="block font-bold text-rose text-xs uppercase tracking-widest mb-2">{memory.day}</span>
                  <p className="font-hand text-2xl text-charcoal/80 leading-tight">
                    {memory.text}
                  </p>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>

      {/* Background visual element */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none opacity-[0.02]">
        <svg width="100%" height="100%">
          <pattern id="dotPattern" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="1" fill="currentColor" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#dotPattern)" />
        </svg>
      </div>
    </section>
  );
};

export default TimelineCollage;
