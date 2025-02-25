import { sendMessage } from "../ui/sendMessage.js";
import { maskPhone } from "../../utils/maskPhone.js";

export const forms = document.querySelectorAll('form');

export const initForms = () => {
    forms.forEach(form => {
        const formCheckbox = form.querySelector('input[type="checkbox"]');
        const formButton = form.querySelector('button');

        formCheckbox.addEventListener('change', (e) => {
            if(formCheckbox.checked) {
                formButton.disabled = false;
            } else {
                formButton.disabled = true;
            }
        })

        // Маска телефона
        maskPhone(form.phone);


        form.addEventListener('submit', (event) => {
            event.preventDefault();
            sendMessage(form);
        });
    });
}