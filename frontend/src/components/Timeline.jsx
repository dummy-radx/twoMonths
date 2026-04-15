import React from 'react';
import { m } from 'framer-motion';

const MEMORIES = [
  { day: "Day 30", text: "Another sweet cafe date with my favorite person.", img: "/photo8.jpeg", tilt: 4, pos: "right", paper: "bg-sunflower/5" },
  { day: "Day 35", text: "Beach nights and infinite smiles under the stars.", img: "/photo9.jpg", tilt: -6, pos: "left", paper: "bg-white" },
  { day: "Day 40", text: "I'll always carry you through life, my love.", img: "/photo10.jpeg", tilt: 1, pos: "right", paper: "bg-sage/10" },
  { day: "Day 45", text: "Stealing kisses on a perfect night out.", img: "/photo11.jpeg", tilt: -2, pos: "center", paper: "bg-rose/5" },
  { day: "Day 50", text: "Even in the crowd, it's always just us.", img: "/photo12.jpg", tilt: 3, pos: "right", paper: "bg-sunflower/5" },
  { day: "Day 55", text: "Your squishy face is the cutest thing ever.", img: "/photo13.jpeg", tilt: -5, pos: "left", paper: "bg-white" },
  { day: "Day 58", text: "Wrapped in your arms, exactly where I belong.", img: "/photo14.jpg", tilt: 4, pos: "center", paper: "bg-sage/10" },
  { day: "Day 60", text: "Happy 2 months! Here's to us, always.", img: "/photo15.jpg", tilt: -2, pos: "right", paper: "bg-rose/5" }
];

const SmallSunflower = () => (
  <svg width="30" height="30" viewBox="0 0 100 100" fill="none">
    <circle cx="50" cy="50" r="15" fill="#3B2F2F" />
    <circle cx="50" cy="50" r="40" stroke="#FFD93D" strokeWidth="20" strokeDasharray="15 5" />
  </svg>
);

const TimelineCollage = () => {
  return (
    <section className="py-20 md:py-40 bg-cream relative overflow-hidden px-4">
      <div className="max-w-6xl mx-auto">
        <header className="mb-20 md:mb-40 text-center">
          <h2 className="text-5xl md:text-9xl text-charcoal tracking-tighter mb-8 font-hand">Our Memory Book</h2>
          <p className="font-hand text-2xl md:text-3xl text-rose">Every moment is a sticker in my heart.</p>
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
              <m.div 
                style={{ rotate: memory.tilt }}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                whileHover={{ y: -15, scale: 1.05, rotate: memory.tilt + 2, transition: { duration: 0.4 } }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true, margin: "-100px" }}
                className="relative group group-hover:z-10 cursor-pointer"
              >
                {/* Image Mask Reveal with Paper Background */}
                <m.div 
                  initial={{ clipPath: "circle(0% at 50% 50%)" }}
                  whileInView={{ clipPath: "circle(100% at 50% 50%)" }}
                  transition={{ duration: 1.5, ease: "easeInOut" }}
                  viewport={{ once: true }}
                  className={`w-full max-w-[280px] md:max-w-md aspect-square ${memory.paper} p-4 md:p-6 shadow-2xl rough-edge overflow-hidden relative border border-black/5`}
                >
                  <img 
                    src={memory.img} 
                    alt={memory.text}
                    loading="lazy"
                    className="w-full h-full object-cover transition-all duration-700 rounded-sm"
                  />
                  
                  {/* Decorative Flower Accent */}
                  <div className="absolute top-2 right-2 opacity-80 animate-wiggle">
                    <SmallSunflower />
                  </div>
                </m.div>

                {/* Handwritten Note Overlay - Sticky Tape Style */}
                <div 
                  className={`absolute -bottom-10 ${index % 2 === 0 ? '-right-4 md:-right-16' : '-left-4 md:-left-16'} bg-white p-6 md:p-8 shadow-xl border border-charcoal/10 max-w-[200px] md:max-w-[240px] rough-edge z-20`}
                >
                  {/* Fake Washi Tape */}
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-20 h-6 bg-rose/20 rotate-[-5deg] backdrop-blur-sm" />
                  
                  <span className="block font-bold text-rose text-[10px] md:text-sm uppercase tracking-widest mb-3 md:mb-4 font-sans">{memory.day}</span>
                  <p className="font-hand text-2xl md:text-3xl text-charcoal/80 leading-tight">
                    {memory.text}
                  </p>
                </div>
              </m.div>
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
