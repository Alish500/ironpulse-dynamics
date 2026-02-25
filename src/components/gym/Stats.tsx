import { Users, Award, Calendar, Clock } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';
import CountUp from './CountUp';
import ScrollReveal from './ScrollReveal';

const stats = [
  { key: 'members', icon: Users, end: 2000, suffix: '+' },
  { key: 'trainers', icon: Award, end: 15, suffix: '+' },
  { key: 'classes', icon: Calendar, end: 50, suffix: '+' },
  { key: 'years', icon: Clock, end: 10, suffix: '+' },
];

export default function Stats() {
  const { t } = useLanguage();

  return (
    <section className="section-padding bg-secondary/30 border-y border-border">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((s, i) => (
            <ScrollReveal key={s.key} delay={i * 0.1}>
              <div className="text-center">
                <s.icon className="w-8 h-8 text-primary mx-auto mb-3" />
                <CountUp end={s.end} suffix={s.suffix} />
                <p className="mt-2 text-muted-foreground font-medium text-sm uppercase tracking-wider">
                  {t(`stats.${s.key}Label`)}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
