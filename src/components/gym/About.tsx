import { Dumbbell, Clock, Users, Heart } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';
import ScrollReveal from './ScrollReveal';
import aboutImg from '@/assets/about-gym.jpg';

const features = [
  { key: 'feature1', icon: Dumbbell },
  { key: 'feature2', icon: Clock },
  { key: 'feature3', icon: Users },
  { key: 'feature4', icon: Heart },
];

export default function About() {
  const { t } = useLanguage();

  return (
    <section id="about" className="section-padding">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <ScrollReveal direction="left">
            <div className="relative group">
              <div className="rounded-2xl overflow-hidden">
                <img
                  src={aboutImg}
                  alt="IronPulse Gym Interior"
                  className="w-full h-[400px] md:h-[500px] object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 border-2 border-primary/30 rounded-2xl" />
              <div className="absolute -top-4 -left-4 w-20 h-20 bg-primary/10 rounded-2xl" />
            </div>
          </ScrollReveal>

          {/* Content */}
          <div>
            <ScrollReveal>
              <span className="badge-accent">{t('about.badge')}</span>
              <h2 className="mt-4 font-heading text-4xl md:text-5xl font-bold text-foreground">
                {t('about.title')}
              </h2>
              <div className="accent-line mt-4" />
              <p className="mt-6 text-muted-foreground text-lg leading-relaxed">
                {t('about.subtitle')}
              </p>
            </ScrollReveal>

            <div className="mt-8 grid sm:grid-cols-2 gap-4">
              {features.map((f, i) => (
                <ScrollReveal key={f.key} delay={i * 0.1}>
                  <div className="glass-card p-5 rounded-xl card-hover group">
                    <f.icon className="w-8 h-8 text-primary mb-3 transition-transform duration-300 group-hover:scale-110" />
                    <h3 className="font-heading text-lg font-bold text-foreground">{t(`about.${f.key}`)}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{t(`about.${f.key}Desc`)}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
