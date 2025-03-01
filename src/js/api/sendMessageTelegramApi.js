import {API, CHAT_ID} from "./host.js";

export  const sendMessageTelegramApi = async (message) => {
    try {
        const response = await fetch(API, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                chat_id: CHAT_ID,
                parse_mode: 'HTML',
                text: message,
            })
        });

        if(!response.ok) {
            throw new Error(`Не удалось отправить данные. Статус: ${response.status}`)
        }
        console.log('Данные отправлены!');
        return true;
    }catch (error) {
        console.error(`Сообщение не отправлено: ${error.message}`);
        throw error;
    }
}