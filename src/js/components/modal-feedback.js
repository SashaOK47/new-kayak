const modalFeedback = () => {
    const forms = document.querySelectorAll('form');
    const feedbackButtons = document.querySelectorAll('.js-feedback');
    const modalFeedbackPopup = document.querySelector('.modal-feedback');
    const modalCloseButtonFeedback = document.querySelector('.js-feedback-close');
    const errorMessages = document.querySelectorAll('.form__message');

    feedbackButtons.forEach((feedbackButton) => {
        feedbackButton.addEventListener('click', () => {
            modalFeedbackPopup.style.display = 'block';
            document.documentElement.classList.add('no-scroll');
        })
    })

    modalFeedbackPopup.addEventListener('click', (e) => {
        if(e.target && e.target === modalFeedbackPopup) {
            modalFeedbackPopup.style.display = 'none';
            document.documentElement.classList.remove('no-scroll');
            forms.forEach((form) => {
                form.reset();
                form.querySelector('button').setAttribute('disabled', 'disabled');
            })
        }

        errorMessages.forEach((errorMessage) => {
            errorMessage.innerHTML = '';
        })

    })
    modalCloseButtonFeedback.addEventListener('click', () => {
        modalFeedbackPopup.style.display = 'none';
        document.documentElement.classList.remove('no-scroll');
        forms.forEach((form) => {
            form.reset();
            form.querySelector('button').setAttribute('disabled', 'disabled');
        })
        errorMessages.forEach((errorMessage) => {
            errorMessage.innerHTML = '';
        })
    })
}

export default modalFeedback;