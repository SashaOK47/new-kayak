import 'lazysizes';
// import a plugin
// import 'lazysizes/plugins/parent-fit/ls.parent-fit';

import { switchTheme } from "./components/switch-theme.js";
import { burgerMenu } from "./components/burger-menu.js";
import { faq } from "./components/faq.js";
import modalRules from "./components/modal-rules.js";
import modalPrivacy from "./components/modal-privacy.js";
import modalFeedback from "./components/modal-feedback.js";
import { initForms } from "./components/inits/init-forms.js";

export const initApp = () => {
    initForms();
    switchTheme();
    burgerMenu();
    faq();
    modalRules();
    modalPrivacy();
    modalFeedback();
}