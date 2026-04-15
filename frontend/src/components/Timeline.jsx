import React from 'react';
import { motion } from 'framer-motion';

const EVENTS = [
  { day: "Day 01", text: "The first hello that changed everything.", icon: "✨" },
  { day: "Day 15", text: "When we realized this was something special.", icon: "❤️" },
  { day: "Day 30", text: "One month of pure joy and discovery.", icon: "🌙" },
  { day: "Day 45", text: "Planning our future, one dream at a time.", icon: "☁️" },
  { day: "Day 60", text: "Happy 2 Month Anniversary, Sreeparna!", icon: "🎁" }
];

const Timeline = () => {
  return (
    <section className="py-24 bg-cream relative overflow-hidden">
      {/* Decorative SVG Doodles */}
      <div className="absolute top-20 right-[10%] opacity-20 pointer-events-none">
        <svg width="120" height="120" viewBox="0 0 100 100">
          <path d="M10,50 Q25,10 50,50 T90,50" fill="none" stroke="currentColor" strokeWidth="2" className="text-rose" />
        </svg>
      </div>

      <div className="max-w-4xl mx-auto px-4 relative">
        <div className="absolute left-1/2 top-0 bottom-0 w-px border-l border-dashed border-charcoal/30 -translate-x-1/2" />
        
        <header className="text-center mb-32 relative z-10">
          <h2 className="text-5xl md:text-7xl text-charcoal mb-6">60 Days of Us</h2>
          <p className="font-hand text-2xl text-rose">And a lifetime to go.</p>
        </header>

        <div className="space-y-40">
          {EVENTS.map((event, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              viewport={{ once: true, margin: "-100px" }}
              className={`relative flex items-center ${index % 2 === 0 ? 'flex-row-reverse' : ''}`}
            >
              {/* The Dot */}
              <div className="absolute left-1/2 w-4 h-4 bg-rose rounded-full -translate-x-1/2 z-20 shadow-sm border-4 border-cream" />
              
              <div className={`w-1/2 ${index % 2 === 0 ? 'pl-12' : 'pr-12'} text-center md:text-left`}>
                <span className="block text-rose font-bold tracking-widest uppercase text-xs mb-4">{event.day}</span>
                <div className="text-3xl md:text-5xl mb-6">{event.icon}</div>
                <h3 className="text-2xl md:text-4xl text-charcoal font-serif leading-tight">
                  {event.text}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;
