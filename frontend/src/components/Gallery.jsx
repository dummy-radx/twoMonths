import React from 'react';
import { motion } from 'framer-motion';

const GALLERY_ITEMS = [
  {
    title: "The Spark",
    subtitle: "Our first coffee date",
    image: "https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&w=800&q=80",
    date: "Day 01"
  },
  {
    title: "Late Night Talks",
    subtitle: "When hours felt like seconds",
    image: "https://images.unsplash.com/photo-1490730141103-6cac27aaab94?auto=format&fit=crop&w=800&q=80",
    date: "Day 14"
  },
  {
    title: "Quiet Moments",
    subtitle: "Just you and me",
    image: "https://images.unsplash.com/photo-1522673607200-164883eecd4c?auto=format&fit=crop&w=800&q=80",
    date: "Day 32"
  },
  {
    title: "Infinite Love",
    subtitle: "To many more months",
    image: "https://images.unsplash.com/photo-1474552226712-ac0f0961a954?auto=format&fit=crop&w=800&q=80",
    date: "Day 60"
  }
];

const Gallery = () => {
  return (
    <section className="py-24 px-4 md:px-12 bg-cream">
      <div className="max-w-7xl mx-auto">
        <header className="mb-20">
          <h2 className="text-4xl md:text-6xl text-charcoal mb-4">The Gallery</h2>
          <div className="w-24 h-1 bg-rose/30" />
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24">
          {GALLERY_ITEMS.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`relative ${index % 2 === 1 ? 'md:mt-24' : ''}`}
            >
              <div className="group overflow-hidden bg-charcoal/5 aspect-4/5 relative cursor-pointer">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
                />
                <div className="absolute top-6 left-6 mix-blend-difference text-white">
                  <span className="font-hand text-xl">{item.date}</span>
                </div>
              </div>
              
              <div className="mt-8 flex justify-between items-start">
                <div>
                  <h3 className="text-3xl text-charcoal mb-2 tracking-tight">{item.title}</h3>
                  <p className="text-charcoal/60 italic font-serif">{item.subtitle}</p>
                </div>
                <div className="text-xs uppercase tracking-widest text-rose font-bold">
                  Memories
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
