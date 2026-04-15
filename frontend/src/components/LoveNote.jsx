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
        className="max-w-3xl w-full bg-white p-12 md:p-24 shadow-[30px_30px_80px_rgba(0,0,0,0.05)] relative rough-edge"
      >
        {/* Torn Edge Effect - CSS Pseudo-element style */}
        <div className="absolute top-0 left-0 w-full h-8 bg-cream -translate-y-1/2 torn-paper" />
        
        {/* Scrapbook elements */}
        <div className="absolute top-12 right-12 opacity-30">
          <svg width="60" height="60" viewBox="0 0 60 60">
            <path d="M10,10 Q30,0 50,10 T30,50 T10,10" fill="none" stroke="currentColor" className="text-rose" strokeWidth="1" />
          </svg>
        </div>
        
        <header className="mb-16">
          <p className="font-hand text-2xl text-rose mb-4 uppercase tracking-widest">April 15, 2026</p>
          <h2 className="text-5xl md:text-7xl text-charcoal tracking-tighter">My Dearest Sreeparna,</h2>
        </header>

        <div className="space-y-8 text-2xl md:text-3xl font-serif text-charcoal/80 leading-relaxed text-balance">
          <p>
            Sixty days might seem like a short time to the world, but to me, it's 
            been a lifetime of discovery. Discovery of your smile, your kindness, 
            and the way you make even the simplest moments feel extraordinary.
          </p>
          <p>
            Every photo in this book, every memory we've made, is a treasure I'll 
            carry with me. You are my favorite story, and I can't wait to see 
            what the next chapters hold for us.
          </p>
          <p className="italic font-bold text-rose">
            Happy 2-month anniversary. 
          </p>
        </div>

        <footer className="mt-20 pt-12 border-t border-charcoal/5">
          <p className="font-hand text-4xl text-charcoal">With all my love,</p>
          <div className="relative inline-block">
            <p className="text-6xl md:text-8xl text-charcoal mt-6 tracking-tighter">Ishan</p>
            <motion.div 
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              transition={{ delay: 1, duration: 1 }}
              className="absolute bottom-2 left-0 h-1 bg-rose/40"
            />
          </div>
        </footer>
        
        {/* Washi Tape Effect */}
        <div className="absolute -top-4 left-[10%] w-32 h-10 bg-sage/20 rotate-[-15deg] backdrop-blur-sm shadow-sm" />
        <div className="absolute -bottom-4 right-[15%] w-24 h-8 bg-rose/10 rotate-20 backdrop-blur-sm shadow-sm" />
      </motion.div>

      {/* Background visual element */}
      <div className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-rose/5 rounded-full blur-[100px] pointer-events-none" />
    </section>
  );
};

export default LoveNote;
