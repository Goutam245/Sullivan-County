import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

export const Preloader = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Check if already shown this session
    if (sessionStorage.getItem('preloaderShown')) {
      setIsLoading(false);
      return;
    }

    // Progress animation
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + 2;
      });
    }, 50);

    // Hide preloader after animation
    const timer = setTimeout(() => {
      setIsLoading(false);
      sessionStorage.setItem('preloaderShown', 'true');
    }, 3000);

    return () => {
      clearTimeout(timer);
      clearInterval(progressInterval);
    };
  }, []);

  const words = ['SULLIVAN', 'COUNTY', 'FORWARD', '•', 'STARTING', 'IN', 'DISTRICT', '8', '•', '2026', '•'];

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
          className="fixed inset-0 z-[100] flex items-center justify-center"
          style={{
            background: 'linear-gradient(135deg, hsl(203, 80%, 28%) 0%, hsl(86, 52%, 49%) 100%)'
          }}
        >
          <div className="text-center">
            {/* Animated Text */}
            <div className="flex flex-wrap justify-center gap-2 mb-12 max-w-lg mx-auto px-6">
              {words.map((word, i) => (
                <motion.span
                  key={`${word}-${i}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                  className="text-primary-foreground font-display font-bold text-lg md:text-xl tracking-wider"
                >
                  {word}
                </motion.span>
              ))}
            </div>

            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 1.5 }}
              className="w-24 h-24 mx-auto mb-8 rounded-full bg-primary-foreground/10 backdrop-blur flex items-center justify-center"
            >
              <span className="text-primary-foreground font-display font-bold text-4xl">W</span>
            </motion.div>

            {/* Progress Bar */}
            <div className="w-48 mx-auto">
              <div className="h-1 bg-primary-foreground/20 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: '0%' }}
                  animate={{ width: `${progress}%` }}
                  className="h-full bg-primary-foreground rounded-full"
                />
              </div>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="mt-4 text-sm text-primary-foreground/80 font-medium"
              >
                Loading...
              </motion.p>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;
