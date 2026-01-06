import { motion } from 'framer-motion';
import { ArrowRight, Play } from 'lucide-react';
import { useState } from 'react';

export const HeroSection = () => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        {!isVideoPlaying ? (
          <div className="relative w-full h-full">
            {/* YouTube Thumbnail/Poster */}
            <img
              src="https://img.youtube.com/vi/x4QiDOa5_kw/maxresdefault.jpg"
              alt="T.R. Ward Campaign Video"
              className="w-full h-full object-cover"
            />
            <button
              onClick={() => setIsVideoPlaying(true)}
              className="absolute inset-0 flex items-center justify-center group cursor-pointer"
              aria-label="Play video"
            >
              <div className="w-24 h-24 rounded-full bg-accent/90 flex items-center justify-center transition-transform duration-300 group-hover:scale-110 animate-pulse-glow">
                <Play className="w-10 h-10 text-accent-foreground ml-1" fill="currentColor" />
              </div>
            </button>
          </div>
        ) : (
          <iframe
            src="https://www.youtube.com/embed/x4QiDOa5_kw?autoplay=1&mute=1&loop=1&playlist=x4QiDOa5_kw&controls=0&showinfo=0&rel=0"
            className="w-full h-full object-cover"
            style={{ transform: 'scale(1.2)' }}
            allow="autoplay; encrypted-media"
            allowFullScreen
            title="T.R. Ward Campaign Video"
          />
        )}
      </div>

      {/* Gradient Overlay */}
      <div 
        className="absolute inset-0 z-10"
        style={{
          background: 'linear-gradient(to bottom, hsla(203, 80%, 28%, 0.75) 0%, hsla(203, 80%, 28%, 0.55) 50%, hsla(203, 80%, 28%, 0.85) 100%)'
        }}
      />

      {/* Content */}
      <div className="relative z-20 container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.4, 0, 0.2, 1] }}
          className="max-w-4xl mx-auto"
        >
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="inline-block px-4 py-2 bg-accent/20 border border-accent/30 rounded-full text-accent font-medium text-sm mb-6"
          >
            2026 Campaign for District 8
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7, ease: [0.4, 0, 0.2, 1] }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-display font-bold text-primary-foreground leading-tight mb-4 sm:mb-6 px-2"
          >
            From District 8 to Every Road in{' '}
            <span className="text-accent">Sullivan County</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="text-base sm:text-lg md:text-xl text-primary-foreground/90 max-w-2xl mx-auto mb-8 sm:mb-10 px-4"
          >
            Fix what's broken, strengthen what works, and deliver results that reach the entire county. Real change. Real results.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a href="#why" className="btn-primary text-lg">
              Learn More
              <ArrowRight className="w-5 h-5" />
            </a>
            <a href="#contact" className="btn-secondary text-primary-foreground border-primary-foreground/50 hover:bg-primary-foreground/10 text-lg">
              Get Involved
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          className="w-6 h-10 rounded-full border-2 border-primary-foreground/40 flex justify-center pt-2"
        >
          <motion.div
            animate={{ y: [0, 8, 0], opacity: [1, 0.3, 1] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
            className="w-1.5 h-1.5 bg-primary-foreground rounded-full"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
