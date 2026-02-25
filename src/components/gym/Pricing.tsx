import { Check, Star } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';
import ScrollReveal from './ScrollReveal';

const plans = [
  {
    key: 'p1',
    features: ['p1f1', 'p1f2', 'p1f3', 'p1f4'],
    popular: false,
  },
  {
    key: 'p2',
    features: ['p2f1', 'p2f2', 'p2f3', 'p2f4', 'p2f5'],
    popular: true,
  },
  {
    key: 'p3',
    features: ['p3f1', 'p3f2', 'p3f3', 'p3f4', 'p3f5', 'p3f6'],
    popular: false,
  },
];

export default function Pricing() {
  const { t } = useLanguage();

  return (
    <section id="pricing" className="section-padding bg-secondary/20">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="badge-accent">{t('pricing.badge')}</span>
            <h2 className="mt-4 font-heading text-4xl md:text-5xl font-bold text-foreground">
              {t('pricing.title')}
            </h2>
            <div className="accent-line mt-4 mx-auto" />
            <p className="mt-6 text-muted-foreground text-lg">{t('pricing.subtitle')}</p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {plans.map((plan, i) => (
            <ScrollReveal key={plan.key} delay={i * 0.15}>
              <div
                className={`glass-card rounded-2xl p-8 card-hover relative h-full flex flex-col ${
                  plan.popular ? 'border-primary/50 red-glow-sm' : ''
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="badge-accent flex items-center gap-1">
                      <Star className="w-3 h-3" />
                      {t('pricing.popular')}
                    </span>
                  </div>
                )}

                <h3 className="font-heading text-2xl font-bold text-foreground">{t(`pricing.${plan.key}`)}</h3>
                <div className="mt-4 flex items-baseline gap-1">
                  <span className="font-heading text-5xl font-bold text-gradient-red">
                    {t(`pricing.${plan.key}price`)}
                  </span>
                  <span className="text-muted-foreground text-sm">
                    {t('pricing.currency')} {t('pricing.perMonth')}
                  </span>
                </div>

                <ul className="mt-8 space-y-3 flex-1">
                  {plan.features.map(f => (
                    <li key={f} className="flex items-center gap-3 text-sm text-muted-foreground">
                      <Check className="w-4 h-4 text-primary flex-shrink-0" />
                      {t(`pricing.${f}`)}
                    </li>
                  ))}
                </ul>

                <button
                  className={`mt-8 w-full py-3.5 rounded-xl font-bold text-sm transition-all duration-300 hover:scale-105 active:scale-95 ${
                    plan.popular
                      ? 'bg-primary text-primary-foreground red-glow hover:bg-primary-hover'
                      : 'border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground'
                  }`}
                >
                  {t('pricing.getStarted')}
                </button>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
