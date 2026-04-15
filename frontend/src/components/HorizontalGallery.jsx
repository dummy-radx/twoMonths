import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const GALLERY_ITEMS = [
  { title: "Perfect Moments", subtitle: "Where it all felt so right.", image: "/photo1.jpeg", color: "#F9F7F2" },
  { title: "Beautiful You", subtitle: "Every time I see you, I fall again.", image: "/photo2.jpeg", color: "#E8A5A5" },
  { title: "Our Quiet Space", subtitle: "Where we can just be us.", image: "/photo3.jpeg", color: "#D1E8A5" },
  { title: "Golden Hour", subtitle: "As bright as your presence in my life.", image: "/photo4.jpeg", color: "#1A1A1A" },
  { title: "First Hello", subtitle: "The start of something beautiful.", image: "/photo5.jpeg", color: "#F9F7F2" },
  { title: "Late Night Walks", subtitle: "Where silence spoke volumes.", image: "/photo6.jpeg", color: "#E8A5A5" },
  { title: "Rainy Days", subtitle: "Making our own sunshine together.", image: "/photo7.jpeg", color: "#D1E8A5" },
];

const HorizontalGallery = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-75%"]);

  return (
    <section ref={targetRef} className="relative h-[500vh] bg-cream">
      <div className="sticky top-0 h-screen flex items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-20 px-24">
          {GALLERY_ITEMS.map((item, index) => (
            <div 
              key={index} 
              className="group relative shrink-0 w-[85vw] md:w-[45vw] lg:w-[35vw]"
            >
              {/* Image with Mask Reveal */}
              <motion.div 
                initial={{ clipPath: "inset(100% 0 0 0)" }}
                whileInView={{ clipPath: "inset(0% 0 0 0)" }}
                transition={{ duration: 1.5, ease: [0.77, 0, 0.175, 1], delay: index * 0.2 }}
                viewport={{ once: true }}
                className="relative aspect-4/5 overflow-hidden bg-charcoal/5 rough-edge"
              >
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000 scale-110 group-hover:scale-100"
                />
              </motion.div>
              
              {/* Text Info */}
              <div className="mt-10">
                <p className="text-xs uppercase tracking-[0.3em] text-rose font-bold mb-4">Memory {index + 1}</p>
                <h3 className="text-4xl md:text-6xl text-charcoal tracking-tighter mb-4 leading-none">
                  {item.title}
                </h3>
                <p className="text-xl md:text-2xl text-charcoal/40 font-serif italic max-w-sm">
                  {item.subtitle}
                </p>
              </div>

              {/* Decorative Number */}
              <div className="absolute -bottom-10 -right-10 text-9xl font-serif text-charcoal/3 select-none pointer-events-none">
                0{index + 1}
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Progress Line */}
      <div className="absolute bottom-10 left-12 right-12 h-px bg-charcoal/10">
        <motion.div 
          style={{ scaleX: scrollYProgress }} 
          className="h-full bg-rose origin-left"
        />
      </div>
    </section>
  );
};

export default HorizontalGallery;
