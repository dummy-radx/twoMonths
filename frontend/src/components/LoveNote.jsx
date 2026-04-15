import React from 'react';
import { m } from 'framer-motion';
import { Heart } from 'lucide-react';

const LoveNote = () => {
  return (
    <section className="py-20 md:py-40 bg-cream flex items-center justify-center px-4 overflow-hidden relative">
      <m.div 
        initial={{ rotate: -5, opacity: 0, y: 50 }}
        whileInView={{ rotate: -1, opacity: 1, y: 0 }}
        whileHover={{ rotate: 0, scale: 1.05 }}
        transition={{ duration: 1, ease: [0.77, 0, 0.175, 1] }}
        viewport={{ once: true }}
        className="max-w-3xl w-full p-6 md:p-24 shadow-[30px_30px_80px_rgba(0,0,0,0.1)] relative border border-charcoal/10 sandpaper-texture"
      >
        {/* Torn Edge Effect */}
        <div className="absolute top-0 left-0 w-full h-12 bg-cream -translate-y-1/2 torn-paper z-20" />
        
        {/* Cute Scrapbook elements - Sunflower Bouquet */}
        <div className="absolute top-6 left-6 md:top-24 md:left-24 w-16 h-16 md:w-32 md:h-32 opacity-80 z-20">
          <img src="/sunflower_bouquet.png" alt="Sunflower Bouquet" loading="lazy" className="w-full h-full object-contain animate-float" />
        </div>

        {/* Oreo Silk Sticker */}
        <m.div 
          initial={{ scale: 0, rotate: 0 }}
          whileInView={{ scale: 1, rotate: 15 }}
          className="absolute -top-6 -right-6 md:-top-10 md:-right-10 w-24 h-24 md:w-48 md:h-48 z-30"
        >
          <img src="/oreo_silk.png" alt="Oreo Silk" loading="lazy" className="w-full h-full object-contain drop-shadow-2xl" />
        </m.div>
        
        <header className="mb-12 md:mb-16 relative z-10">
          <p className="font-hand text-2xl md:text-3xl text-rose mb-3 md:mb-4 tracking-widest leading-none">April 15, 2026</p>
          <h2 className="text-4xl md:text-8xl text-charcoal tracking-tighter font-hand leading-tight">My Sweet Sreeparna,</h2>
        </header>

        <div className="space-y-6 md:space-y-8 text-xl md:text-4xl font-hand text-charcoal/90 leading-relaxed text-balance relative z-10">
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

        <footer className="mt-16 md:mt-24 pt-12 border-t border-charcoal/10 relative z-10">
          <p className="font-hand text-3xl md:text-4xl text-charcoal/60">With all my love,</p>
          <div className="relative inline-block">
            <p className="text-6xl md:text-9xl text-charcoal mt-4 md:mt-6 tracking-tighter font-hand">Ishan</p>
            <m.div 
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
      </m.div>

      {/* Decorative Teddy in the corner */}
      <div className="absolute bottom-4 left-4 md:bottom-10 md:left-10 opacity-20 md:opacity-30 scale-110 md:scale-150 rotate-12 pointer-events-none w-32 h-32 md:w-48 md:h-48">
        <img src="/plushie.png" alt="Cute Plushie" loading="lazy" className="w-full h-full object-contain" />
      </div>

      {/* Scrapbook Grid of All 15 Photos */}
      <div className="absolute -bottom-[150%] lg:-bottom-full left-0 w-full px-4 md:px-24 pointer-events-none pb-40">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-center gap-4 md:gap-8">
          {[
            { src: "/photo1.jpeg", rotate: -5 },
            { src: "/photo2.jpeg", rotate: 8 },
            { src: "/photo3.jpeg", rotate: -3 },
            { src: "/photo4.jpeg", rotate: 5 },
            { src: "/photo5.jpeg", rotate: -12 },
            { src: "/photo6.jpeg", rotate: 10 },
            { src: "/photo7.jpeg", rotate: -2 },
            { src: "/photo8.jpeg", rotate: 7 },
            { src: "/photo9.jpg", rotate: -9 },
            { src: "/photo10.jpeg", rotate: 4 },
            { src: "/photo11.jpeg", rotate: -6 },
            { src: "/photo12.jpg", rotate: 11 },
            { src: "/photo13.jpeg", rotate: -4 },
            { src: "/photo14.jpg", rotate: 6 },
            { src: "/photo15.jpg", rotate: -8 },
          ].map((photo, i) => (
            <m.div
              key={i}
              initial={{ opacity: 0, y: 100, scale: 0.8 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              whileHover={{ scale: 1.1, rotate: photo.rotate + (i % 2 === 0 ? 5 : -5), zIndex: 50, transition: { duration: 0.3 } }}
              transition={{ delay: i * 0.05, duration: 0.8 }}
              style={{ rotate: photo.rotate }}
              className="w-24 h-32 md:w-48 md:h-60 bg-white p-1 md:p-3 shadow-2xl border border-charcoal/5 pointer-events-auto transition-shadow duration-500 rough-edge shrink-0 cursor-pointer group"
            >
              <div className="w-full h-[85%] overflow-hidden bg-charcoal/5">
                <img src={photo.src} alt="" loading="lazy" className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110" />
              </div>
              <div className="h-[15%] flex items-center justify-center">
                <Heart className="w-3 h-3 md:w-4 md:h-4 text-rose fill-rose" />
              </div>
            </m.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LoveNote;
