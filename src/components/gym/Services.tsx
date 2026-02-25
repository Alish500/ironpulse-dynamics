import { Dumbbell, Zap, Flame, Users, Apple, RotateCcw } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';
import ScrollReveal from './ScrollReveal';
import strengthImg from '@/assets/strength.jpg';
import cardioImg from '@/assets/cardio.jpg';
import groupImg from '@/assets/group-class.jpg';
import trainerImg from '@/assets/trainer-1.jpg';
import nutritionImg from '@/assets/nutrition.jpg';
import transformImg from '@/assets/transformation.jpg';

const services = [
  { key: 's1', icon: Dumbbell, img: trainerImg },
  { key: 's2', icon: Zap, img: strengthImg },
  { key: 's3', icon: Flame, img: cardioImg },
  { key: 's4', icon: Users, img: groupImg },
  { key: 's5', icon: Apple, img: nutritionImg },
  { key: 's6', icon: RotateCcw, img: transformImg },
];

export default function Services() {
  const { t } = useLanguage();

  return (
    <section id="services" className="section-padding bg-secondary/20">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="badge-accent">{t('services.badge')}</span>
            <h2 className="mt-4 font-heading text-4xl md:text-5xl font-bold text-foreground">
              {t('services.title')}
            </h2>
            <div className="accent-line mt-4 mx-auto" />
            <p className="mt-6 text-muted-foreground text-lg">{t('services.subtitle')}</p>
          </div>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <ScrollReveal key={s.key} delay={i * 0.08}>
              <div className="glass-card rounded-2xl overflow-hidden card-hover group h-full">
                {s.img && (
                  <div className="h-48 overflow-hidden">
                    <img
                      src={s.img}
                      alt={t(`services.${s.key}`)}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>
                )}
                <div className="p-6">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 transition-all duration-300 group-hover:bg-primary/20 group-hover:red-glow-sm">
                    <s.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-heading text-xl font-bold text-foreground">{t(`services.${s.key}`)}</h3>
                  <p className="mt-2 text-muted-foreground text-sm leading-relaxed">{t(`services.${s.key}d`)}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
