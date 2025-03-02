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

    let messageText = `📩 Новое сообщение с сайта:   <strong>https://brest-kayak.by/</strong>\n`;
    messageText += `👤 Отправитель:   <strong>${name}</strong>\n`;
    messageText += `📞 Телефон:   <strong>${phone}</strong>\n`;
    messageText += `✉️ Сообщение:   <strong>${message}</strong>\n`;

    // const formattedMessage = `
    //   <b>📩 Новое сообщение с сайта https://brest-kayak.by/:</b>\n
    //   <b>👤 Имя:</b> ${name}\n
    //   <b>📞 Телефон:</b> <a href="tel:${phone}">${phone}</a>\n
    //   <b>✉️ Сообщение:</b>\n${message}
    // `;


    try {
        // await sendMessageTelegramApi(messageText);
        // Показать пользователю сообщение об успешной доставке
        successMessage();
        form.reset();
    } catch (error) {
        console.error(error.message);
        // Показать пользователю ошибку
        errorMessage();
    }

}