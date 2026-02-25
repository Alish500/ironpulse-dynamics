import { Quote } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';
import ScrollReveal from './ScrollReveal';

const testimonials = ['t1', 't2', 't3'];

export default function Testimonials() {
  const { t } = useLanguage();

  return (
    <section id="testimonials" className="section-padding">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="badge-accent">{t('testimonials.badge')}</span>
            <h2 className="mt-4 font-heading text-4xl md:text-5xl font-bold text-foreground">
              {t('testimonials.title')}
            </h2>
            <div className="accent-line mt-4 mx-auto" />
            <p className="mt-6 text-muted-foreground text-lg">{t('testimonials.subtitle')}</p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {testimonials.map((tk, i) => (
            <ScrollReveal key={tk} delay={i * 0.15}>
              <div className="glass-card rounded-2xl p-8 card-hover relative h-full">
                <Quote className="w-8 h-8 text-primary/30 mb-4" />
                <p className="text-foreground text-base leading-relaxed italic">
                  {t(`testimonials.${tk}`)}
                </p>
                <div className="mt-6 pt-4 border-t border-border">
                  <p className="font-heading font-bold text-foreground">{t(`testimonials.${tk}name`)}</p>
                  <span className="badge-accent text-[11px] mt-2">{t(`testimonials.${tk}result`)}</span>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
