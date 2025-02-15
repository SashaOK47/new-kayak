import { sendMessageTelegramApi } from "../../api/sendMessageTelegramApi.js";
import { successMessage, errorMessage } from "../../utils/helpers.js";
import { validateForm } from "../../utils/validateForm.js";

export const sendMessage = async (form) => {
    const name = form.name.value.trim();
    const phone = form.phone.value.trim();
    const message = form.message.value.trim();

    // validation
    const isValid = validateForm(form);

    if(!isValid) return;

    let messageText = `Сообщение с сайта:   <strong>https://sashaok47.github.io/new-kayak/</strong>\n`;
    messageText += `Отправитель:   <strong>${name}</strong>\n`;
    messageText += `Телефон:   <strong>${phone}</strong>\n`;
    messageText += `Сообщение:   <strong>${message}</strong>\n`;

    try {
        await sendMessageTelegramApi(messageText);
        // Показать пользователю сообщение об успешной доставке
        successMessage();
        form.reset();
    } catch (error) {
        console.error(error.message);
        // Показать пользователю ошибку
        errorMessage();
    }

}