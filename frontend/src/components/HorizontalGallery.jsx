import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const GALLERY_ITEMS = [
  { title: "Cozy Mirror", subtitle: "Our first of many mirror selfies.", image: "/photo1.jpeg", color: "#F9F7F2" },
  { title: "Cafe Kisses", subtitle: "Where coffee meets sweet moments.", image: "/photo2.jpeg", color: "#E8A5A5" },
  { title: "Elegance", subtitle: "In black and lilac, simply perfect.", image: "/photo3.jpeg", color: "#D1E8A5" },
  { title: "Sunny Shades", subtitle: "Rocking our traditional look.", image: "/photo4.jpeg", color: "#1A1A1A" },
  { title: "Step by Step", subtitle: "Building our story together.", image: "/photo5.jpeg", color: "#F9F7F2" },
  { title: "Leather & Leaves", subtitle: "Edgy vibes and green backgrounds.", image: "/photo6.jpeg", color: "#E8A5A5" },
  { title: "Silly Us", subtitle: "Life's better when we're goofy.", image: "/photo7.jpeg", color: "#D1E8A5" },
];

const HorizontalGallery = () => {
  const targetRef = useRef(null);
  const scrollRef = useRef(null);
  const [scrollDistance, setScrollDistance] = React.useState(0);

  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

    React.useLayoutEffect(() => {
    const updateDistance = () => {
      if (scrollRef.current) {
        // Calculate total width minus the viewport width to get the scroll distance
        const totalWidth = scrollRef.current.scrollWidth;
        const viewportWidth = window.innerWidth;
        const padding = viewportWidth < 768 ? 32 : 96; // 32px for px-8, 96px for px-24
        setScrollDistance(Math.max(0, totalWidth - viewportWidth + padding));
      }
    };

    updateDistance();
    window.addEventListener('resize', updateDistance);
    return () => window.removeEventListener('resize', updateDistance);
  }, []);

  const x = useTransform(scrollYProgress, [0, 1], [0, -scrollDistance]);

  return (
    <section ref={targetRef} className="relative h-[600vh] bg-cream">
      <div className="sticky top-0 h-screen flex items-center overflow-hidden">
        <motion.div 
          ref={scrollRef}
          style={{ x }} 
          className="flex gap-10 md:gap-20 px-8 md:px-24"
        >
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
                  className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-110 group-hover:contrast-[1.1]"
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

      {/* Scroll Hint */}
      <motion.div 
        style={{ opacity: useTransform(scrollYProgress, [0, 0.05], [1, 0]) }}
        className="fixed bottom-10 right-10 z-50 flex items-center gap-4 text-rose md:hidden"
      >
        <span className="text-xs uppercase tracking-[0.2em] font-bold">Scroll</span>
        <motion.div
          animate={{ x: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HorizontalGallery;
