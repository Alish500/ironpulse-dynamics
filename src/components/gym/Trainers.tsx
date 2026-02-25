import { Instagram, Twitter } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';
import ScrollReveal from './ScrollReveal';
import trainer1 from '@/assets/trainer-1.jpg';
import trainer2 from '@/assets/trainer-2.jpg';
import trainer3 from '@/assets/trainer-3.jpg';

const trainers = [
  { key: 't1', img: trainer1 },
  { key: 't2', img: trainer2 },
  { key: 't3', img: trainer3 },
];

export default function Trainers() {
  const { t } = useLanguage();

  return (
    <section id="trainers" className="section-padding">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="badge-accent">{t('trainers.badge')}</span>
            <h2 className="mt-4 font-heading text-4xl md:text-5xl font-bold text-foreground">
              {t('trainers.title')}
            </h2>
            <div className="accent-line mt-4 mx-auto" />
            <p className="mt-6 text-muted-foreground text-lg">{t('trainers.subtitle')}</p>
          </div>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {trainers.map((tr, i) => (
            <ScrollReveal key={tr.key} delay={i * 0.15}>
              <div className="glass-card rounded-2xl overflow-hidden card-hover group">
                <div className="relative h-80 overflow-hidden">
                  <img
                    src={tr.img}
                    alt={t(`trainers.${tr.key}`)}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
                  {/* Social overlay */}
                  <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-3 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                    <span className="w-10 h-10 rounded-full bg-primary/90 flex items-center justify-center text-primary-foreground hover:bg-primary cursor-pointer">
                      <Instagram className="w-4 h-4" />
                    </span>
                    <span className="w-10 h-10 rounded-full bg-primary/90 flex items-center justify-center text-primary-foreground hover:bg-primary cursor-pointer">
                      <Twitter className="w-4 h-4" />
                    </span>
                  </div>
                </div>
                <div className="p-6 text-center">
                  <h3 className="font-heading text-xl font-bold text-foreground">{t(`trainers.${tr.key}`)}</h3>
                  <p className="mt-1 text-primary text-sm font-medium">{t(`trainers.${tr.key}role`)}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
