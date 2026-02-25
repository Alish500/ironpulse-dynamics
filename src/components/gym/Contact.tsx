import { useState } from 'react';
import { MapPin, Mail, Phone, Send } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';
import ScrollReveal from './ScrollReveal';

export default function Contact() {
  const { t } = useLanguage();
  const [focused, setFocused] = useState('');

  return (
    <section id="contact" className="section-padding">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="badge-accent">{t('contact.badge')}</span>
            <h2 className="mt-4 font-heading text-4xl md:text-5xl font-bold text-foreground">
              {t('contact.title')}
            </h2>
            <div className="accent-line mt-4 mx-auto" />
            <p className="mt-6 text-muted-foreground text-lg">{t('contact.subtitle')}</p>
          </div>
        </ScrollReveal>

        <div className="grid lg:grid-cols-5 gap-10 max-w-5xl mx-auto">
          {/* Info */}
          <div className="lg:col-span-2 space-y-6">
            {[
              { icon: MapPin, text: t('contact.address') },
              { icon: Mail, text: t('contact.emailAddr') },
              { icon: Phone, text: t('contact.phoneNum') },
            ].map((item, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <p className="text-muted-foreground mt-2.5">{item.text}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* Form */}
          <ScrollReveal className="lg:col-span-3">
            <form className="glass-card rounded-2xl p-8 space-y-5" onSubmit={e => e.preventDefault()}>
              {[
                { name: 'name', type: 'text' },
                { name: 'email', type: 'email' },
                { name: 'phone', type: 'tel' },
              ].map(field => (
                <div key={field.name} className="relative">
                  <input
                    type={field.type}
                    placeholder={t(`contact.${field.name}`)}
                    onFocus={() => setFocused(field.name)}
                    onBlur={() => setFocused('')}
                    className={`w-full bg-secondary/50 border rounded-xl px-5 py-3.5 text-foreground placeholder:text-muted-foreground/60 outline-none transition-all duration-300 ${
                      focused === field.name
                        ? 'border-primary red-glow-sm'
                        : 'border-border hover:border-muted-foreground/30'
                    }`}
                  />
                </div>
              ))}
              <textarea
                placeholder={t('contact.message')}
                rows={4}
                onFocus={() => setFocused('message')}
                onBlur={() => setFocused('')}
                className={`w-full bg-secondary/50 border rounded-xl px-5 py-3.5 text-foreground placeholder:text-muted-foreground/60 outline-none transition-all duration-300 resize-none ${
                  focused === 'message'
                    ? 'border-primary red-glow-sm'
                    : 'border-border hover:border-muted-foreground/30'
                }`}
              />
              <button
                type="submit"
                className="w-full py-4 bg-primary text-primary-foreground font-bold rounded-xl red-glow hover:bg-primary-hover transition-all duration-300 hover:scale-[1.02] active:scale-95 flex items-center justify-center gap-2 group"
              >
                {t('contact.send')}
                <Send className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
            </form>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
