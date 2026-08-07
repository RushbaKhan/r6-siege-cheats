import { createContext, useContext, type ReactNode } from 'react';

export interface Language {
  code: string;
  label: string;
  flag: string;
}

export const LANGUAGES: Language[] = [
  { code: 'en', label: 'English', flag: '🇺🇸' },
];

const translations: Record<string, Record<string, string>> = {
  en: {
    'nav.home': 'Home',
    'nav.blog': 'Blog',
    'nav.buy': 'BUY CHEATS',
    'hero.status': 'Operator ESP · BattlEye · PC 2026',
    'hero.subtitle': 'ESP, Aimbot & Wallhack',
    'hero.description': 'Rainbow Six Siege cheats with operator ESP, aimbot with recoil control, gadget ESP, and stream-proof mode.',
    'hero.cta': 'BUY CHEATS',
    'hero.features': 'See Features',
    'hero.trust': 'Windows 10 & 11 · Ubisoft Rainbow Six Siege · Stream-Proof · CLOUD-DMA Available',
    'meta.title': 'Rainbow Six Siege Cheats – ESP, Aimbot & Wallhack | R6SiegeCheats.com',
    'meta.description': 'Rainbow Six Siege cheats with operator ESP, aimbot, wallhack, gadget ESP, no recoil and objective features.',
  },
};

type I18nContextValue = {
  lang: string;
  t: (key: string) => string;
  setLang: (code: string) => void;
};

const I18nContext = createContext<I18nContextValue>({
  lang: 'en',
  t: (key) => translations.en[key] ?? key,
  setLang: () => undefined,
});

export function I18nProvider({ children }: { children: ReactNode }) {
  const t = (key: string) => translations.en[key] ?? key;
  return (
    <I18nContext.Provider value={{ lang: 'en', t, setLang: () => undefined }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  return useContext(I18nContext);
}
