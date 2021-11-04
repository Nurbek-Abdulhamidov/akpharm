import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
import XHR from "i18next-xhr-backend";
import languageEN from "./locate/en.json";
import languageRU from "./locate/ru.json";
import languageUZ from "./locate/uz.json";

i18n
  .use(XHR)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: languageEN,
      ru: languageRU,
      uz: languageUZ,
    },
    /* default language when load the website in browser */
    // lng: "ru",
    lng: window.localStorage.getItem("language") || "ru",
    /* When react i18next not finding any language to as default in borwser */
    // fallbackLng: 'uz',
    fallbackLng: "ru",
    /* debugger For Development environment */
    debug: true,
    ns: ["translations"],
    defaultNS: "translations",
    keySeparator: ".",
    interpolation: {
      escapeValue: false,
      formatSeparator: ",",
    },
    react: {
      wait: true,
      bindI18n: "languageChanged loaded",
      bindStore: "added removed",
      nsMode: "default",
    },
  });

export default i18n;
