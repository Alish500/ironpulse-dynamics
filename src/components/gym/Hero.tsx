import { motion } from 'framer-motion';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';
import heroImg from '@/assets/hero-gym.jpg';

export default function Hero() {
  const { t } = useLanguage();

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <motion.img
          src={heroImg}
          alt="IronPulse Gym"
          className="w-full h-full object-cover"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: 'easeOut' }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/30" />
      </div>

      <div className="container mx-auto px-4 relative z-10 pt-20">
        <div className="max-w-3xl">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <span className="badge-accent animate-pulse-glow">{t('hero.badge')}</span>
          </motion.div>

          {/* Title */}
          <motion.h1
            className="mt-6 font-heading text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-[0.95] tracking-tight"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            {t('hero.title1')}{' '}
            <span className="text-gradient-red red-text-glow">{t('hero.titleAccent')}</span>{' '}
            {t('hero.title2')}
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            className="mt-6 text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            {t('hero.subtitle')}
          </motion.p>

          {/* CTAs */}
          <motion.div
            className="mt-8 flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            <button
              onClick={() => scrollTo('contact')}
              className="group px-8 py-4 bg-primary text-primary-foreground font-bold text-base rounded-lg red-glow hover:bg-primary-hover transition-all duration-300 hover:scale-105 active:scale-95 flex items-center gap-2"
            >
              {t('hero.cta')}
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </button>
            <button
              onClick={() => scrollTo('pricing')}
              className="px-8 py-4 border-2 border-primary text-primary font-bold text-base rounded-lg hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-105 active:scale-95"
            >
              {t('hero.ctaSecondary')}
            </button>
          </motion.div>

          {/* Stats mini */}
          <motion.div
            className="mt-12 flex items-center gap-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.6 }}
          >
            <div className="flex -space-x-3">
              {[1, 2, 3, 4].map(i => (
                <div key={i} className="w-10 h-10 rounded-full bg-secondary border-2 border-background flex items-center justify-center text-xs font-bold text-muted-foreground">
                  {i === 4 ? '+' : ''}
                </div>
              ))}
            </div>
            <div>
              <span className="text-primary font-heading text-xl font-bold">{t('hero.members')}</span>
              <p className="text-sm text-muted-foreground">{t('hero.membersLabel')}</p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        onClick={() => scrollTo('about')}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-primary transition-colors"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ChevronDown className="w-8 h-8" />
      </motion.button>
    </section>
  );
}
