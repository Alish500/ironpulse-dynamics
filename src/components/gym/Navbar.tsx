import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Globe } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';

const navItems = ['home', 'about', 'services', 'trainers', 'pricing', 'testimonials', 'faq', 'contact'];

export default function Navbar() {
  const { t, toggleLang, lang, isRTL } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (id: string) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'glass-navbar shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <button onClick={() => scrollTo('home')} className="flex items-center gap-1 group">
          <span className="font-heading text-2xl md:text-3xl font-bold text-primary red-text-glow tracking-wider">
            IRON<span className="text-foreground">PULSE</span>
          </span>
          <span className="text-[10px] text-muted-foreground font-semibold tracking-[0.2em] uppercase mt-1 hidden md:block">
            GYM
          </span>
        </button>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-1">
          {navItems.map(item => (
            <button
              key={item}
              onClick={() => scrollTo(item)}
              className="relative px-3 py-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors duration-300 group"
            >
              {t(`nav.${item}`)}
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full rounded-full" />
            </button>
          ))}
        </div>

        {/* Right actions */}
        <div className="flex items-center gap-3">
          <button
            onClick={toggleLang}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-border hover:border-primary/50 text-sm text-muted-foreground hover:text-primary transition-all duration-300"
          >
            <Globe className="w-4 h-4" />
            {lang === 'en' ? 'عربي' : 'EN'}
          </button>
          <button
            onClick={() => scrollTo('pricing')}
            className="hidden md:block px-5 py-2.5 bg-primary text-primary-foreground font-semibold text-sm rounded-lg hover:bg-primary-hover red-glow-sm transition-all duration-300 hover:scale-105 active:scale-95"
          >
            {t('nav.joinNow')}
          </button>

          {/* Mobile menu toggle */}
          <button onClick={() => setOpen(!open)} className="lg:hidden text-foreground p-1">
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden glass-navbar border-t border-border overflow-hidden"
          >
            <div className="container mx-auto px-4 py-4 flex flex-col gap-2">
              {navItems.map(item => (
                <button
                  key={item}
                  onClick={() => scrollTo(item)}
                  className="text-left px-4 py-3 text-muted-foreground hover:text-primary hover:bg-secondary/50 rounded-lg transition-all duration-200"
                >
                  {t(`nav.${item}`)}
                </button>
              ))}
              <button
                onClick={() => scrollTo('pricing')}
                className="mt-2 px-5 py-3 bg-primary text-primary-foreground font-semibold rounded-lg text-center"
              >
                {t('nav.joinNow')}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
