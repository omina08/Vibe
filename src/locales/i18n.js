import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        welcome: "Welcome to our site!",
        contact: "Get in Touch",
        message: "Leave your message and we'll get back to you shortly."
      }
    },
    ru: {
      translation: {
        welcome: "Добро пожаловать на наш сайт!",
        contact: "Свяжитесь с нами",
        message: "Оставьте сообщение, и мы свяжемся с вами в ближайшее время."
      }
    }
  },
  lng: "en", // boshlang‘ich til
  fallbackLng: "en",

  interpolation: {
    escapeValue: false
  }
});

export default i18n
