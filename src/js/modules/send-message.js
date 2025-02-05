import forms from "browser-sync/dist/lodash.custom.js";

const sendMessage = () => {
    const TELEGRAM_BOT_TOKEN = "6863783921:AAHPk_LzrqFgoFg3KoVlCMBHOsp9dEs80MA";
    const API = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`;
    // const TELEGRAM_CHAT_ID = "@BrestKayak";
    const CHAT_ID = "-1002172888714";
    const forms = document.querySelectorAll('form');


    forms.forEach(form => {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
        })
    })
}

export default sendMessage;