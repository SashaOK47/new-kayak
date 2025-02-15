export const errors = document.querySelectorAll(".form__error");

export const validateForm = (form) => {
    clearErrors(form);

    const name = form.name;
    const phone = form.phone;
    const message = form.message;

    let isValid = true;

    // Валидация имени
    if(name.value.trim() === '') {
        showError(name, 'Поле "Имя" обязательно для заполнения.');
        isValid = false;
    }else if (!/^[A-Za-zА-Яа-я\s]+$/.test(name.value)) {
        showError(name, "Имя должно содержать только буквы.");
        isValid = false;
    } else {
        name.style.border = "1px solid green";
    }


    // Валидация телефона
    if (phone.value.trim() === "") {
        showError(phone,'Поле "Телефон" обязательно для заполнения.');
        isValid = false;
    } else if (phone.value.trim().length < 19) {
        showError(phone,"Введите корректный номер телефона");
        isValid = false;
    }else {
        phone.style.border = "1px solid green";
    }

    // Валидация сообщения
    if (message.value.trim() === "") {
        showError(message,'Поле "Сообщение" обязательно для заполнения.');
        isValid = false;
    }else {
        message.style.border = "1px solid green";
    }

    return isValid;
}

function showError(element, message) {
    const spanError = element.nextElementSibling;
    spanError.textContent = message;
    element.style.border = "1px solid red";
}

function clearErrors(form) {
    errors.forEach((error) => {
        error.textContent = "";
    });
}