import { Instagram, Twitter, Youtube } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';

const navItems = ['home', 'about', 'services', 'trainers', 'pricing', 'contact'];

export default function Footer() {
  const { t } = useLanguage();

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-border bg-secondary/20 py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-1">
            <span className="font-heading text-2xl font-bold text-primary red-text-glow">
              IRON<span className="text-foreground">PULSE</span>
            </span>
            <p className="mt-4 text-sm text-muted-foreground leading-relaxed">{t('footer.desc')}</p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-heading text-lg font-bold text-foreground mb-4">{t('footer.quickLinks')}</h4>
            <ul className="space-y-2">
              {navItems.map(item => (
                <li key={item}>
                  <button
                    onClick={() => scrollTo(item)}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
                  >
                    {t(`nav.${item}`)}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="font-heading text-lg font-bold text-foreground mb-4">{t('footer.hours')}</h4>
            <p className="text-sm text-muted-foreground">{t('footer.everyday')}</p>
            <p className="text-sm text-muted-foreground mt-1">{t('footer.staffed')}</p>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-heading text-lg font-bold text-foreground mb-4">{t('footer.followUs')}</h4>
            <div className="flex gap-3">
              {[Instagram, Twitter, Youtube].map((Icon, i) => (
                <span
                  key={i}
                  className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 cursor-pointer transition-all duration-300 hover:scale-110"
                >
                  <Icon className="w-5 h-5" />
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border text-center">
          <p className="text-sm text-muted-foreground">{t('footer.rights')}</p>
        </div>
      </div>
    </footer>
  );
}
