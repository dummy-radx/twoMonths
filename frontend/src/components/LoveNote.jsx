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
        
        {/* Cute Scrapbook elements - Sunflower Bouquet */}
        <div className="absolute top-12 right-12 md:top-24 md:right-24 w-16 h-16 md:w-32 md:h-32 opacity-80 z-20">
          <img src="/sunflower_bouquet.png" alt="Sunflower Bouquet" className="w-full h-full object-contain animate-float" />
        </div>

        {/* Oreo Silk Sticker */}
        <motion.div 
          initial={{ scale: 0, rotate: 0 }}
          whileInView={{ scale: 1, rotate: 15 }}
          className="absolute -top-10 -right-10 w-32 h-32 md:w-48 md:h-48 z-30"
        >
          <img src="/oreo_silk.png" alt="Oreo Silk" className="w-full h-full object-contain drop-shadow-2xl" />
        </motion.div>
        
        <header className="mb-16 relative z-10">
          <p className="font-hand text-3xl text-rose mb-4 tracking-widest leading-none">April 15, 2026</p>
          <h2 className="text-6xl md:text-8xl text-charcoal tracking-tighter font-hand leading-tight">My Sweet Sreeparna,</h2>
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
      <div className="absolute bottom-10 left-10 opacity-30 scale-150 rotate-12 pointer-events-none w-48 h-48">
        <img src="/plushie.png" alt="Cute Plushie" className="w-full h-full object-contain" />
      </div>

      {/* Scrapbook Grid of Remaining Photos */}
      <div className="absolute -bottom-[60%] lg:-bottom-[40%] left-0 w-full px-4 md:px-24 pointer-events-none">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-center gap-8 md:gap-16">
          {[
            { src: "/photo9.jpg", rotate: -5 },
            { src: "/photo10.jpeg", rotate: 8 },
            { src: "/photo11.jpeg", rotate: -3 },
            { src: "/photo12.jpg", rotate: 5 },
            { src: "/photo13.jpeg", rotate: -12 },
            { src: "/photo14.jpg", rotate: 10 },
            { src: "/photo15.jpg", rotate: -2 },
          ].map((photo, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.8 }}
              style={{ rotate: photo.rotate }}
              className="w-32 h-40 md:w-64 md:h-80 bg-white p-2 md:p-4 shadow-xl border border-charcoal/5 pointer-events-auto hover:z-50 hover:scale-110 transition-transform duration-500 rough-edge"
            >
              <div className="w-full h-[85%] overflow-hidden bg-charcoal/5">
                <img src={photo.src} alt="" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" />
              </div>
              <div className="h-[15%] flex items-center justify-center">
                <Heart className="w-4 h-4 text-rose fill-rose" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LoveNote;
