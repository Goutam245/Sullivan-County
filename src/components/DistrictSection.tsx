import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { MapPin, Users, Eye, Mountain, Building, Trees } from 'lucide-react';

export const DistrictSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const stats = [
    { number: '8', label: 'Districts', icon: MapPin },
    { number: '150K+', label: 'Residents', icon: Users },
    { number: '1', label: 'Vision', icon: Eye },
  ];

  const features = [
    { icon: Mountain, title: 'Natural Beauty', desc: 'Stunning East Tennessee landscapes' },
    { icon: Building, title: 'Strong Communities', desc: 'Tight-knit neighborhoods & towns' },
    { icon: Trees, title: 'Growing Economy', desc: 'Opportunity for every family' },
  ];

  return (
    <section id="district" ref={ref}>
      {/* Hero Banner */}
      <div className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=1920&q=80"
            alt="Sullivan County Tennessee landscape"
            className="w-full h-full object-cover"
          />
          <div 
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(135deg, hsla(203, 80%, 28%, 0.9) 0%, hsla(86, 52%, 49%, 0.7) 100%)'
            }}
          />
        </div>

        <div className="relative z-10 container mx-auto px-4 sm:px-6 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-display font-bold text-primary-foreground mb-4 sm:mb-6 leading-tight"
          >
            2026: District 8 Starts It.
            <br />
            <span className="text-accent">Sullivan County Feels It.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-base sm:text-lg md:text-xl text-primary-foreground/90 max-w-3xl mx-auto mb-8 sm:mb-12 px-4"
          >
            A movement powered by District 8, built for every family, every town, and every future in Sullivan County.
          </motion.p>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-wrap justify-center gap-6 sm:gap-8 md:gap-16"
          >
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.6 + i * 0.1 }}
                className="text-center"
              >
                <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-2 sm:mb-3 rounded-full bg-primary-foreground/10 backdrop-blur-sm flex items-center justify-center">
                  <stat.icon className="w-5 h-5 sm:w-7 sm:h-7 text-primary-foreground" />
                </div>
                <p className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-primary-foreground mb-1">{stat.number}</p>
                <p className="text-primary-foreground/80 font-medium text-sm sm:text-base">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Features Section */}
      <div className="section-padding bg-muted">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
            className="text-center mb-10 sm:mb-16"
          >
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary font-semibold text-sm rounded-full mb-4">
              DISCOVER
            </span>
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
              District 8: Where{' '}
              <span className="text-gradient">East Tennessee Shines</span>
            </h3>
            <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto px-4">
              From stunning natural landscapes to thriving communities, District 8 represents the heart of Sullivan County.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 max-w-5xl mx-auto">
            {features.map((feature, i) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="group p-6 sm:p-8 rounded-2xl bg-card shadow-card card-hover text-center"
              >
                <div className="w-14 h-14 sm:w-16 sm:h-16 mx-auto mb-4 sm:mb-6 rounded-xl bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                  <feature.icon className="w-7 h-7 sm:w-8 sm:h-8 text-accent" />
                </div>
                <h4 className="font-display font-bold text-lg sm:text-xl text-foreground mb-2">{feature.title}</h4>
                <p className="text-muted-foreground text-sm sm:text-base">{feature.desc}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center mt-12"
          >
            <a href="#" className="inline-flex items-center gap-2 text-primary font-semibold hover:text-accent transition-colors link-underline">
              Explore Features of District 8
              <motion.span
                animate={{ x: [0, 4, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                →
              </motion.span>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default DistrictSection;
