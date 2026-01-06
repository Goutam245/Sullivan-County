import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Shield, ArrowRight, Users, Flame } from 'lucide-react';

export const PublicSafetySection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="safety" className="relative overflow-hidden bg-background" ref={ref}>
      <div className="grid lg:grid-cols-2 min-h-[700px]">
        {/* Image Side */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
          className="relative h-[400px] lg:h-auto order-2 lg:order-1"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent z-10" />
          <img
            src="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?auto=format&fit=crop&w=1200&q=80"
            alt="Community and public safety officers"
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Content Side */}
        <div className="section-padding flex items-center order-1 lg:order-2">
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
            className="max-w-xl mx-auto lg:mx-0"
          >
            <span className="inline-block px-4 py-2 bg-accent/10 text-accent font-semibold text-sm rounded-full mb-4 sm:mb-6">
              PRIORITY #1
            </span>

            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-4 sm:mb-6 leading-tight">
              Safety Isn't Political.{' '}
              <span className="text-primary">It's Personal.</span>
            </h2>

            <p className="text-base sm:text-lg text-muted-foreground mb-6 sm:mb-8 leading-relaxed">
              More support for public safety with stronger funding for the Sullivan County Sheriff's Department, deputy retention, and recruiting the next generation of volunteer firefighters for Warriors Path VFD and Sullivan West VFD.
            </p>

            {/* Feature Cards */}
            <div className="grid gap-3 sm:gap-4 mb-6 sm:mb-8">
              {[
                { icon: Shield, title: 'Sheriff Support', desc: 'Enhanced funding & resources' },
                { icon: Users, title: 'Deputy Retention', desc: 'Competitive pay & benefits' },
                { icon: Flame, title: 'Volunteer Fire', desc: 'Recruit & equip our heroes' },
              ].map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
                  className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 rounded-xl bg-muted/50 hover:bg-muted transition-colors"
                >
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <item.icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground text-sm sm:text-base">{item.title}</p>
                    <p className="text-xs sm:text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* CTA Card */}
            <motion.a
              href="#contact"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="block p-4 sm:p-6 rounded-2xl bg-card shadow-elegant card-hover group cursor-pointer"
            >
              <div className="flex items-center gap-3 sm:gap-4">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors shrink-0">
                  <Shield className="w-6 h-6 sm:w-7 sm:h-7 text-accent" />
                </div>
                <div className="flex-1">
                  <p className="font-display font-bold text-base sm:text-lg text-foreground">Public Safety First.</p>
                  <p className="text-muted-foreground text-sm sm:text-base">See the full plan</p>
                </div>
                <ArrowRight className="w-5 h-5 text-accent opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
              </div>
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PublicSafetySection;
