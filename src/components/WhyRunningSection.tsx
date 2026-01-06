import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Target, Heart, Lightbulb, ArrowRight } from 'lucide-react';

export const WhyRunningSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const reasons = [
    {
      icon: Heart,
      title: 'Deep Community Roots',
      description: 'Born and raised in Sullivan County, I understand the values, challenges, and dreams of our community firsthand.'
    },
    {
      icon: Target,
      title: 'Results-Driven Leadership',
      description: 'Not politics as usual—a focus on tangible outcomes that improve roads, safety, and opportunity for every resident.'
    },
    {
      icon: Lightbulb,
      title: 'Vision for Tomorrow',
      description: 'Preparing District 8 and Sullivan County for future growth while preserving what makes our community special.'
    }
  ];

  return (
    <section id="why" className="section-padding bg-background relative overflow-hidden" ref={ref}>
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary font-semibold text-sm rounded-full mb-4">
              MY STORY
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-4 sm:mb-6">
              Why I'm Running for{' '}
              <span className="text-gradient">District 8</span>
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
              This campaign isn't about me. It's about building a stronger future for every family in Sullivan County. Here's what drives me.
            </p>
          </motion.div>

          {/* Reasons Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-12 sm:mb-16">
            {reasons.map((reason, i) => (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + i * 0.1 }}
                className="group p-6 sm:p-8 rounded-2xl bg-card shadow-card card-hover"
              >
                <div className="w-12 h-12 sm:w-14 sm:h-14 mb-4 sm:mb-6 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center group-hover:from-primary/20 group-hover:to-accent/20 transition-colors">
                  <reason.icon className="w-6 h-6 sm:w-7 sm:h-7 text-primary" />
                </div>
                <h3 className="font-display font-bold text-lg sm:text-xl text-foreground mb-2 sm:mb-3">{reason.title}</h3>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">{reason.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Quote Block */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="relative p-6 sm:p-8 md:p-12 rounded-2xl sm:rounded-3xl bg-gradient-to-br from-primary to-primary/80 text-primary-foreground overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-accent/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            <div className="relative z-10 max-w-3xl">
              <blockquote className="text-xl sm:text-2xl md:text-3xl font-display font-bold leading-relaxed mb-4 sm:mb-6">
                "I'm not running to hold a position. I'm running to make a real difference for the families who call Sullivan County home."
              </blockquote>
              <div className="flex items-center gap-3 sm:gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary-foreground/20 flex items-center justify-center">
                  <span className="font-display font-bold text-base sm:text-lg">TW</span>
                </div>
                <div>
                  <p className="font-semibold text-sm sm:text-base">T.R. Ward</p>
                  <p className="text-xs sm:text-sm text-primary-foreground/80">Candidate for District 8</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="text-center mt-12"
          >
            <a href="#contact" className="inline-flex items-center gap-2 text-primary font-semibold text-lg hover:text-accent transition-colors group">
              Join the Movement
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyRunningSection;
