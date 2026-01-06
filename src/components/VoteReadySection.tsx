import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { CheckCircle, ExternalLink, Calendar, ClipboardCheck, MapPin } from 'lucide-react';

export const VoteReadySection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const steps = [
    { icon: ClipboardCheck, title: 'Verify Registration', desc: 'Check your voter status online' },
    { icon: Calendar, title: 'Know Your Dates', desc: 'Mark key election deadlines' },
    { icon: MapPin, title: 'Find Your Precinct', desc: 'Locate your polling place' },
  ];

  return (
    <section className="relative section-padding overflow-hidden" ref={ref}>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <pattern id="county-pattern" width="20" height="20" patternUnits="userSpaceOnUse">
            <path d="M0 10 L10 0 L20 10 L10 20 Z" fill="currentColor" className="text-primary" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#county-pattern)" />
        </svg>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
            className="text-center mb-12"
          >
            <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-accent/10 flex items-center justify-center">
              <CheckCircle className="w-10 h-10 text-accent" />
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-4 sm:mb-6">
              Be <span className="text-gradient">Vote-Ready</span> in Sullivan County
            </h2>

            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto mb-8 sm:mb-10 px-4">
              Be vote-ready in Sullivan County, TN: verify registration, register to vote, and stay current on important dates. For accuracy, always confirm current deadlines, polling details, and registration status with official election administrators.
            </p>
          </motion.div>

          {/* Steps Grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-10 sm:mb-12"
          >
            {steps.map((step, i) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
                className="p-5 sm:p-6 rounded-2xl bg-card shadow-card card-hover text-center"
              >
                <div className="w-12 h-12 sm:w-14 sm:h-14 mx-auto mb-3 sm:mb-4 rounded-xl bg-primary/10 flex items-center justify-center">
                  <step.icon className="w-6 h-6 sm:w-7 sm:h-7 text-primary" />
                </div>
                <h4 className="font-display font-bold text-base sm:text-lg text-foreground mb-2">{step.title}</h4>
                <p className="text-sm text-muted-foreground">{step.desc}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="text-center"
          >
            <a
              href="https://sos.tn.gov/elections"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-lg sm:text-xl py-4 sm:py-5 px-8 sm:px-10 inline-flex items-center gap-2 sm:gap-3"
            >
              Get Vote-Ready
              <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5" />
            </a>
            <p className="mt-4 text-sm text-muted-foreground">
              You'll be directed to Tennessee Secretary of State's website
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default VoteReadySection;
