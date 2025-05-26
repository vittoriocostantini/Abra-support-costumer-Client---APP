import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import enCommon from './locales/en/common.json';
import esCommon from './locales/es/common.json';
import ptCommon from './locales/pt/common.json';
import enStatus from './locales/en/ticket-card/status.json';
import esStatus from './locales/es/ticket-card/status.json';
import ptStatus from './locales/pt/ticket-card/status.json';
import enTabs from './locales/en/ui/tabs.json';
import esTabs from './locales/es/ui/tabs.json';
import ptTabs from './locales/pt/ui/tabs.json';
import enFeedback from './locales/en/settings-page/feedback.json';
import esFeedback from './locales/es/settings-page/feedback.json';
import ptFeedback from './locales/pt/settings-page/feedback.json';
import enSubmit from './locales/en/submit-page/submit.json';
import esSubmit from './locales/es/submit-page/submit.json';
import ptSubmit from './locales/pt/submit-page/submit.json';
import enSettings from './locales/en/settings-page/settings.json';
import esSettings from './locales/es/settings-page/settings.json';
import ptSettings from './locales/pt/settings-page/settings.json';
import enPlatformScroll from './locales/en/submit-page/platform-scroll.json';
import esPlatformScroll from './locales/es/submit-page/platform-scroll.json';
import ptPlatformScroll from './locales/pt/submit-page/platform-scroll.json';
import enPrivacy from './locales/en/settings-page/privacy.json';
import esPrivacy from './locales/es/settings-page/privacy.json';
import ptPrivacy from './locales/pt/settings-page/privacy.json';
import enAbout from './locales/en/settings-page/about.json';
import esAbout from './locales/es/settings-page/about.json';
import ptAbout from './locales/pt/settings-page/about.json';
import enTicket from './locales/en/ticket-card/ticket.json';
import esTicket from './locales/es/ticket-card/ticket.json';
import ptTicket from './locales/pt/ticket-card/ticket.json';
import enLanguage from './locales/en/settings-page/language.json';
import esLanguage from './locales/es/settings-page/language.json';
import ptLanguage from './locales/pt/settings-page/language.json';
import enContact from './locales/en/contact-page/contact.json';
import esContact from './locales/es/contact-page/contact.json';
import ptContact from './locales/pt/contact-page/contact.json';
import enAgent from './locales/en/contact-page/agent.json';
import esAgent from './locales/es/contact-page/agent.json';
import ptAgent from './locales/pt/contact-page/agent.json';
import enTickets from './locales/en/ticket-list/tickets.json';
import esTickets from './locales/es/ticket-list/tickets.json';
import ptTickets from './locales/pt/ticket-list/tickets.json';
import enArchived from './locales/en/archived-page/archived.json';
import esArchived from './locales/es/archived-page/archived.json';
import ptArchived from './locales/pt/archived-page/archived.json';
import enLetter from './locales/en/support-chat/letter.json';
import esLetter from './locales/es/support-chat/letter.json';
import ptLetter from './locales/pt/support-chat/letter.json';
import enFilter from './locales/en/filter-option/filter.json';
import esFilter from './locales/es/filter-option/filter.json';
import ptFilter from './locales/pt/filter-option/filter.json';
import enFooter from './locales/en/ui/footer.json';
import esFooter from './locales/es/ui/footer.json';
import ptFooter from './locales/pt/ui/footer.json';

const resources = {
  en: {
    common: enCommon,
    status: enStatus, 
    tabs: enTabs,
    feedback: enFeedback,
    submit: enSubmit,
    settings: enSettings,
    platformScroll: enPlatformScroll,
    privacy: enPrivacy,
    about: enAbout,
    ticket: enTicket,
    language: enLanguage,
    contact: enContact,
    agent: enAgent,
    tickets: enTickets,
    archived: enArchived,
    letter: enLetter,
    filter: enFilter,
    footer: enFooter
  },
  es: {
    common: esCommon,
    status: esStatus,
    tabs: esTabs,
    feedback: esFeedback,
    submit: esSubmit,
    settings: esSettings,
    platformScroll: esPlatformScroll,
    privacy: esPrivacy,
    about: esAbout,
    ticket: esTicket,
    language: esLanguage,
    contact: esContact,
    agent: esAgent,
    tickets: esTickets,
    archived: esArchived,
    letter: esLetter,
    filter: esFilter,
    footer: esFooter
  },
  pt: {
    common: ptCommon,
    status: ptStatus,
    tabs: ptTabs,
    feedback: ptFeedback,
    submit: ptSubmit,
    settings: ptSettings,
    platformScroll: ptPlatformScroll,
    privacy: ptPrivacy,
    about: ptAbout,
    ticket: ptTicket,
    language: ptLanguage,
    contact: ptContact,
    agent: ptAgent,
    tickets: ptTickets,
    archived: ptArchived,
    letter: ptLetter,
    filter: ptFilter,
    footer: ptFooter
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'es',
    ns: ['common', 'status', 'tabs', 'feedback', 'submit', 'settings', 'platformScroll', 'privacy', 'about', 'ticket', 'language', 'contact', 'agent', 'tickets', 'archived', 'letter', 'filter', 'footer' ],
    defaultNS: 'common',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n; 