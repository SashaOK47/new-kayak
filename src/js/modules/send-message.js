import IMask from 'imask';

const sendMessage = () => {
    const maskOptions = {
        mask: '+{375}(00)000-00-00'
    };
    // const im = new Inputmask("+375 (99) 999-99-99");
    const TELEGRAM_BOT_TOKEN = "6863783921:AAHPk_LzrqFgoFg3KoVlCMBHOsp9dEs80MA";
    const API = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`;
    // const TELEGRAM_CHAT_ID = "@BrestKayak";
    const CHAT_ID = "-1002172888714";
    const forms = document.querySelectorAll('form');


    forms.forEach(form => {
        const checkbox = form.querySelector('input[type="checkbox"]');
        const button = form.querySelector('button');
        const inputName = form.querySelector('input[type="text"]');
        const inputPhone = form.querySelector('input[type="tel"]');
        const textArea = form.querySelector('textarea');
        const formMessage = form.querySelector('.form__message');

        const mask = IMask(inputPhone, maskOptions);

        checkbox.addEventListener('change', (e) => {
            if(checkbox.checked) {
                button.disabled = false;
            } else {
                button.disabled = true;
            }
        })

        form.addEventListener('submit', (e) => {
            e.preventDefault();
            if(inputName.value == '' || inputPhone.value == '' || textArea.value == '') {
                formMessage.innerHTML = 'Все поля обязательны к заполнению!';
                return;
            } else {
                send(form);
                formReset(form, checkbox, button);
            }
        })
    })

    function send(form) {
        let message = `Сообщение с сайта:   <strong>https://sashaok47.github.io/new-kayak/</strong>\n`;
        message += `Отправитель:   <strong>${form.name.value}</strong>\n`;
        message += `Телефон:   <strong>${form.phone.value}</strong>\n`;
        message += `Сообщение:   <strong>${form.message.value}</strong>\n`;
        try {
            fetch(API, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    chat_id: CHAT_ID,
                    parse_mode: 'html',
                    text: message,
                }),
            }).then((res) => {
                if (res.ok) {
                    console.log('Сообщение отправлено')
                    // resetForm();
                    // const success = successMessage();
                    // modalForm.insertAdjacentHTML("beforeend", success);
                    // setTimeout(() => {
                    //     document.querySelector(".modal__success").remove();
                    // }, 3000);
                } else {
                    console.log('Сообщение не отправлено')
                    // const error = errorMessage();
                    // modalForm.insertAdjacentHTML("beforeend", error);
                    // setTimeout(() => {
                    //     document.querySelector(".modal__error").remove();
                    // }, 3000);
                }
            });
        } catch (e) {
            console.log(e);
        }
    }
    function successMessage() {
        return `
          <div class="form__success">
            <p class="form__success-title">Спасибо, Ваше сообщение отправлено</p>
            <p class="form__success-text">Специалист свяжется с вами в ближайшее время</p>
          </div>
        `;
    }
    function errorMessage() {
        return `
          <div class="form__error">
            Ваше сообщение не отправлено. Повторите попытку позже
          </div>
        `;
    }
    function formReset(form, checkbox, button) {
        form.name.value = "";
        form.phone.value = "";
        form.message.value = "";
        checkbox.checked = false;
        button.disabled = true;
    }
}



export default sendMessage;