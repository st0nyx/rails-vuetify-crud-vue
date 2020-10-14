import Vue from "vue";
import VueI18n from "vue-i18n";

Vue.use(VueI18n);

const messages = {
  en: {
    welcomeMsg: "Welcome on our english App",
    guide: "The Modern Project Application",
    checkout: "check out the",
    plugins: "Installed CLI Plugins",
    links: "Essential Links",
    ecosystem: "Ecosystem"
  },
  de: {
    welcomeMsg: "Willkommen auf der deutschen Seite",
    guide: "Die moderne Projekt Applikation",
    checkout: "revisar la",
    plugins: "Plugins de CLI instalados",
    links: "Enlaces esenciales",
    ecosystem: "Ecosistema"
  }
};

const i18n = new VueI18n({
  locale: "de", // set locale
  fallbackLocale: "de", // set fallback locale
  messages // set locale messages
});

export default i18n;
