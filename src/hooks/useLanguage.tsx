import { createContext, useContext, useState, ReactNode, useCallback } from 'react';
import { Lang, t as translate } from '@/lib/i18n';

interface LanguageContextType {
  lang: Lang;
  toggleLang: () => void;
  t: (path: string) => string;
  isRTL: boolean;
}

const LanguageContext = createContext<LanguageContextType | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>('en');

  const toggleLang = useCallback(() => {
    setLang(prev => prev === 'en' ? 'ar' : 'en');
  }, []);

  const t = useCallback((path: string) => translate(lang, path), [lang]);
  const isRTL = lang === 'ar';

  return (
    <LanguageContext.Provider value={{ lang, toggleLang, t, isRTL }}>
      <div dir={isRTL ? 'rtl' : 'ltr'} className={isRTL ? 'font-body' : ''}>
        {children}
      </div>
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLanguage must be used within LanguageProvider');
  return ctx;
}
