export const errors = document.querySelectorAll(".form__error");

let idInterval;

export const validateForm = (form) => {
    clearInterval(idInterval);
    clearErrors();

    const name = form.name;
    const phone = form.phone;
    const message = form.message;



    let isValid = true;

    // Валидация имени
    if(name.value.trim() === '') {
        showError(name, 'Поле "Имя" обязательно для заполнения.');
        isValid = false;
        clearErrorAndBorderTime(name);
    }else if (!/^[A-Za-zА-Яа-я\s]+$/.test(name.value)) {
        showError(name, "Имя должно содержать только буквы.");
        isValid = false;
        clearErrorAndBorderTime(name);
    }


    // Валидация телефона
    if (phone.value.trim() === "") {
        showError(phone,'Поле "Телефон" обязательно для заполнения.');
        isValid = false;
        clearErrorAndBorderTime(phone);
    } else if (phone.value.trim().length < 19) {
        showError(phone,"Введите корректный номер телефона");
        isValid = false;
        clearErrorAndBorderTime(phone);
    }

    // Валидация сообщения
    if (message.value.trim() === "") {
        showError(message,'Поле "Сообщение" обязательно для заполнения.');
        isValid = false;
        clearErrorAndBorderTime(message);
    }

    return isValid;
}

function showError(element, message) {
    const spanError = element.nextElementSibling;
    spanError.textContent = message;
}

function clearErrors() {
    errors.forEach((error) => {
        error.textContent = "";
    });
}

function clearErrorAndBorderTime (element) {
    idInterval = setTimeout(() => {
        element.nextElementSibling.textContent = "";
    }, 5000)
}