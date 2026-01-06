import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const words = ['LISTEN', 'PLAN', 'FIX', 'BUILD', 'DELIVER', 'PROTECT', 'GROW', 'LEAD'];

export const CircularTextSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="commitment" className="section-padding bg-muted overflow-hidden" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-accent/10 text-accent font-semibold text-sm rounded-full mb-4">
            OUR COMMITMENT
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-4">
            A Continuous Cycle of{' '}
            <span className="text-gradient">Service & Results</span>
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto px-4">
            Leadership that listens, plans, and delivers every step of the way.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
          className="relative flex items-center justify-center"
        >
          {/* Circular Text Container */}
          <div className="relative w-[300px] h-[300px] md:w-[450px] md:h-[450px] lg:w-[500px] lg:h-[500px]">
            {/* Rotating SVG Text */}
            <svg
              viewBox="0 0 500 500"
              className="w-full h-full animate-rotate-slow"
              aria-label="Rotating text: Listen, Plan, Fix, Build, Deliver, Protect, Grow, Lead"
            >
              <defs>
                <path
                  id="circlePath"
                  d="M 250, 250 m -200, 0 a 200,200 0 1,1 400,0 a 200,200 0 1,1 -400,0"
                  fill="none"
                />
              </defs>
              <text
                className="font-display font-bold uppercase tracking-[0.3em]"
                style={{ fontSize: '28px' }}
              >
                <textPath href="#circlePath" startOffset="0%">
                  {words.map((word, i) => (
                    <tspan
                      key={word}
                      fill={i % 2 === 0 ? 'hsl(203, 80%, 28%)' : 'hsl(86, 52%, 49%)'}
                    >
                      {word} • {' '}
                    </tspan>
                  ))}
                </textPath>
              </text>
            </svg>

            {/* Center Content */}
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="w-32 h-32 md:w-44 md:h-44 rounded-full bg-card shadow-elegant flex items-center justify-center border border-border"
              >
                <div className="text-center">
                  <div className="w-16 h-16 md:w-20 md:h-20 mx-auto mb-2 rounded-full bg-primary flex items-center justify-center">
                    <span className="text-primary-foreground font-display font-bold text-2xl md:text-3xl">D8</span>
                  </div>
                  <p className="text-xs md:text-sm font-medium text-muted-foreground">District 8</p>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Values Grid */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.4, 0, 0.2, 1] }}
          className="mt-10 sm:mt-16 grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 max-w-4xl mx-auto"
        >
          {[
            { value: 'Listen', desc: 'To every voice in our community' },
            { value: 'Plan', desc: 'Strategic solutions that work' },
            { value: 'Deliver', desc: 'Results you can see and feel' },
            { value: 'Protect', desc: 'Our families, homes, and future' },
          ].map((item, i) => (
            <motion.div
              key={item.value}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.5 + i * 0.1 }}
              className="text-center p-4 sm:p-6 rounded-xl bg-card shadow-card card-hover"
            >
              <p className="font-display font-bold text-lg sm:text-xl text-primary mb-1 sm:mb-2">{item.value}</p>
              <p className="text-xs sm:text-sm text-muted-foreground">{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default CircularTextSection;
