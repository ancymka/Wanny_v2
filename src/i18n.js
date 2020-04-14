import i18n from "i18next";
import detector from "i18next-browser-languagedetector";
import backend from "i18next-xhr-backend";
import { reactI18nextModule } from "react-i18next";

/*import translationEN from './locales/en/translation.json';
import translationPL from './locales/pl/translation.json';

// the translations
const resources = {
    en: {
        translation: translationEN
    },
    pl: {
        translation: translationPL
    }
};
*/
i18n
    .use(detector)
    .use(backend)
    .use(reactI18nextModule) // passes i18n down to react-i18next
    .init({
        lng: "en",
        fallbackLng: "pl",

        keySeparator: false, // we do not use keys in form messages.welcome

        interpolation: {
            escapeValue: false // react already safes from xss
        }
    });

export default i18n;
