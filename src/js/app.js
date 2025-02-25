import { switchTheme } from "./components/switch-theme.js";
import { burgerMenu } from "./components/burger-menu.js";
import { faq } from "./components/faq.js";
import { initForms } from "./components/inits/init-forms.js";
import { yaMap } from "./api/yaMap.js";
import { gallery } from "./components/gallery.js";
import { galleryLoadMore } from "./components/galleryLoadMore.js";
import { modal } from "./components/modal.js";

initForms();
switchTheme();
burgerMenu();
faq();
modal();
gallery()
galleryLoadMore();
yaMap();