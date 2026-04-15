import React from 'react';
import { motion } from 'framer-motion';

const MEMORIES = [
  { 
    day: "Day 01", 
    text: "The first hello. You were wearing that pretty smile.", 
    img: "https://images.unsplash.com/photo-1518199266791-5375a83190b2?auto=format&fit=crop&w=600&q=80",
    tilt: -5,
    pos: "left",
    paper: "bg-white"
  },
  { 
    day: "Day 15", 
    text: "Late night walks and talks about everything.", 
    img: "https://images.unsplash.com/photo-1516589174184-c685266d4af4?auto=format&fit=crop&w=600&q=80",
    tilt: 3,
    pos: "right",
    paper: "bg-sage/10"
  },
  { 
    day: "Day 32", 
    text: "That rainy dinner... remember the lilies on the table?", 
    img: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=600&q=80",
    tilt: -2,
    pos: "center",
    paper: "bg-rose/5"
  },
  { 
    day: "Day 60", 
    text: "Happy Anniversary, Sweetheart. To a thousand more.", 
    img: "https://images.unsplash.com/photo-1518331647614-7a1f04cd34cf?auto=format&fit=crop&w=600&q=80",
    tilt: 5,
    pos: "right",
    paper: "bg-sunflower/5"
  }
];

const SmallSunflower = () => (
  <svg width="30" height="30" viewBox="0 0 100 100" fill="none">
    <circle cx="50" cy="50" r="15" fill="#3B2F2F" />
    <circle cx="50" cy="50" r="40" stroke="#FFD93D" strokeWidth="20" strokeDasharray="15 5" />
  </svg>
);

const TimelineCollage = () => {
  return (
    <section className="py-40 bg-cream relative overflow-hidden px-4">
      <div className="max-w-6xl mx-auto">
        <header className="mb-40 text-center">
          <h2 className="text-7xl md:text-9xl text-charcoal tracking-tighter mb-8 font-hand">Our Memory Book</h2>
          <p className="font-hand text-3xl text-rose">Every moment is a sticker in my heart.</p>
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
                {/* Image Mask Reveal with Paper Background */}
                <motion.div 
                  initial={{ clipPath: "circle(0% at 50% 50%)" }}
                  whileInView={{ clipPath: "circle(100% at 50% 50%)" }}
                  transition={{ duration: 1.5, ease: "easeInOut" }}
                  viewport={{ once: true }}
                  className={`w-full max-w-sm md:max-w-md aspect-square ${memory.paper} p-6 shadow-2xl rough-edge overflow-hidden relative border border-black/5`}
                >
                  <img 
                    src={memory.img} 
                    alt={memory.text}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 rounded-sm"
                  />
                  
                  {/* Decorative Flower Accent */}
                  <div className="absolute top-2 right-2 opacity-80 animate-wiggle">
                    <SmallSunflower />
                  </div>
                </motion.div>

                {/* Handwritten Note Overlay - Sticky Tape Style */}
                <div 
                  className={`absolute -bottom-10 ${index % 2 === 0 ? '-right-16' : '-left-16'} bg-white p-8 shadow-xl border border-charcoal/10 max-w-[240px] rough-edge z-20`}
                >
                  {/* Fake Washi Tape */}
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-20 h-6 bg-rose/20 rotate-[-5deg] backdrop-blur-sm" />
                  
                  <span className="block font-bold text-rose text-sm uppercase tracking-widest mb-4 font-sans">{memory.day}</span>
                  <p className="font-hand text-3xl text-charcoal/80 leading-tight">
                    {memory.text}
                  </p>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>

      {/* Background visual element - Grid paper effect */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-[0.03]">
        <svg width="100%" height="100%">
          <pattern id="gridPattern" x="0" y="0" width="30" height="30" patternUnits="userSpaceOnUse">
            <path d="M 30 0 L 0 0 0 30" fill="none" stroke="currentColor" strokeWidth="1" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#gridPattern)" />
        </svg>
      </div>
    </section>
  );
};

export default TimelineCollage;
