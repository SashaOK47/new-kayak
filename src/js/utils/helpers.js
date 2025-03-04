

export const successMessage = (form) => {
    const successModal = form.querySelector('.form__success');
    successModal.classList.add('show');
    closeSuccessModal(form);
}

const closeSuccessModal = (form) => {
    setTimeout(() => {
        const successModal = form.querySelector('.form__success');
        successModal.classList.remove('show');
    }, 3000);
}

export const errorMessage = () => {
    alert('Ошибка отправки данных!')
}