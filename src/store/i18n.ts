import { create } from "zustand";
import en from "../locales/en.json";
import es from "../locales/es.json";

type Locale = "en" | "es";

interface I18nState {
  locale: Locale;
  translations: Record<string, string>;
  setLocale: (locale: Locale) => void;
}

export const useI18nStore = create<I18nState>((set) => ({
  locale: "en",
  translations: en,
  setLocale: (locale) => {
    const dict = locale === "es" ? es : en;
    set({ locale, translations: dict });
  },
}));

export function useT() {
  const { translations } = useI18nStore();
  return (key: string) => translations[key] || key;
}
