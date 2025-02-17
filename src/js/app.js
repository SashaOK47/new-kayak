import { switchTheme } from "./components/switch-theme.js";
import { burgerMenu } from "./components/burger-menu.js";
import { faq } from "./components/faq.js";
import modalRules from "./components/modal-rules.js";
import modalPrivacy from "./components/modal-privacy.js";
import modalFeedback from "./components/modal-feedback.js";
import { initForms } from "./components/inits/init-forms.js";
import { yaMap } from "./api/yaMap.js";
import { gallery } from "./components/gallery.js";
import {galleryLoadMore} from "./components/galleryLoadMore.js";

initForms();
switchTheme();
burgerMenu();
faq();
modalRules();
modalPrivacy();
modalFeedback();
yaMap();
gallery()
galleryLoadMore();