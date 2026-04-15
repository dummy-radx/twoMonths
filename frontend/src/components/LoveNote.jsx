import React from 'react';
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

const LoveNote = () => {
  return (
    <section className="py-24 bg-cream flex items-center justify-center px-4 overflow-hidden">
      <motion.div 
        initial={{ rotate: -5, opacity: 0 }}
        whileInView={{ rotate: -2, opacity: 1 }}
        whileHover={{ rotate: 0, scale: 1.02 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-2xl w-full bg-white p-12 md:p-20 shadow-xl relative border border-charcoal/5"
      >
        {/* Scrapbook elements */}
        <div className="absolute -top-6 -right-6 w-24 h-24 bg-sage/20 rounded-full blur-2xl" />
        <div className="absolute top-10 right-10 flex space-x-2">
          <Heart className="text-rose w-6 h-6 fill-rose" />
          <Heart className="text-rose/40 w-4 h-4" />
        </div>
        
        <header className="mb-12">
          <p className="font-hand text-xl text-rose mb-2">April 15, 2026</p>
          <h2 className="text-4xl md:text-5xl text-charcoal">Dear Sreeparna,</h2>
        </header>

        <div className="space-y-6 text-xl md:text-2xl font-serif text-charcoal/80 leading-relaxed">
          <p>
            The last 60 days have been the most beautiful journey of my life. 
            Every laugh, every conversation, and every moment shared with you 
            is a memory I cherish deeply.
          </p>
          <p>
            You make my world so much brighter just by being in it. 
            This little website is a small token of my love for you, 
            a place where we can keep our memories forever.
          </p>
          <p>
            Happy 2-month anniversary. Here's to us, and to many, many more.
          </p>
        </div>

        <footer className="mt-16 pt-8 border-t border-charcoal/5">
          <p className="font-hand text-3xl text-charcoal">With all my love,</p>
          <p className="text-5xl text-charcoal mt-4 tracking-tighter">Ishan</p>
        </footer>
        
        {/* Tape effect */}
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-32 h-8 bg-black/5 rotate-2 backdrop-blur-sm" />
      </motion.div>
    </section>
  );
};

export default LoveNote;
