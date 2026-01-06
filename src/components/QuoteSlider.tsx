import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const quotes = [
  {
    text: "District 8 deserves a commissioner who listens first and acts with purpose. That's the leadership I'm committed to providing.",
    author: "T.R. Ward",
    title: "Candidate for District 8"
  },
  {
    text: "Our first responders and volunteer firefighters need real support, not just words. I'm ready to deliver funding and resources they deserve.",
    author: "T.R. Ward",
    title: "On Public Safety"
  },
  {
    text: "Every road in Sullivan County matters. From District 8 to every corner of our county, infrastructure investment means economic opportunity.",
    author: "T.R. Ward",
    title: "On Infrastructure"
  },
  {
    text: "Real change starts at the local level. When we strengthen District 8, we strengthen all of Sullivan County.",
    author: "T.R. Ward",
    title: "Campaign Vision"
  },
  {
    text: "I'm not running to hold a position. I'm running to make a difference for the families who call Sullivan County home.",
    author: "T.R. Ward",
    title: "Why I'm Running"
  },
];

export const QuoteSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prev) => (prev + 1) % quotes.length);
    }, 7000);
    return () => clearInterval(timer);
  }, []);

  const goTo = (index: number) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  const prev = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + quotes.length) % quotes.length);
  };

  const next = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % quotes.length);
  };

  const variants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 100 : -100,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (dir: number) => ({
      x: dir < 0 ? 100 : -100,
      opacity: 0,
    }),
  };

  return (
    <section className="section-padding bg-card">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto relative">
          {/* Quote Icon */}
          <Quote className="absolute -top-4 left-0 w-24 h-24 text-accent/10 -rotate-12" />
          
          {/* Slider Container */}
          <div className="relative min-h-[250px] sm:min-h-[300px] flex items-center justify-center py-8 sm:py-12 px-4 sm:px-8">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
                className="text-center"
              >
                <blockquote className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-display font-bold text-foreground leading-relaxed mb-6 sm:mb-8">
                  "{quotes[currentIndex].text}"
                </blockquote>
                <div className="flex flex-col items-center gap-1">
                  <p className="font-semibold text-primary text-base sm:text-lg">{quotes[currentIndex].author}</p>
                  <p className="text-muted-foreground text-sm sm:text-base">{quotes[currentIndex].title}</p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 sm:-translate-x-4 md:-translate-x-12 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors"
            aria-label="Previous quote"
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
          <button
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 sm:translate-x-4 md:translate-x-12 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors"
            aria-label="Next quote"
          >
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>

          {/* Progress Dots */}
          <div className="flex items-center justify-center gap-2 mt-8">
            {quotes.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  i === currentIndex ? 'w-8 bg-accent' : 'w-2 bg-muted-foreground/30 hover:bg-muted-foreground/50'
                }`}
                aria-label={`Go to quote ${i + 1}`}
              />
            ))}
          </div>

          {/* Progress Bar */}
          <div className="mt-6 h-0.5 bg-muted rounded-full overflow-hidden">
            <motion.div
              key={currentIndex}
              initial={{ width: '0%' }}
              animate={{ width: '100%' }}
              transition={{ duration: 7, ease: 'linear' }}
              className="h-full bg-accent/50"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuoteSlider;
