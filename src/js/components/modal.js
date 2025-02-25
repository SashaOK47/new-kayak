import { forms } from "./inits/init-forms.js";
import { errors } from "../utils/validateForm.js";
import { getScrollbarWidth } from "../utils/getScrollbarWidth.js";

export const modal = () => {
    const modals = [...document.querySelectorAll(".modal")];
    const modalCloseButtons = [...document.querySelectorAll('.modal__close')];

    const modalFeedback = document.querySelector('.modal--feedback');
    const modalTriggerFeedbackButtons = document.querySelectorAll('.js-feedback');

    const modalRules = document.querySelector('.modal--rules');
    const modalTriggerRulesButton = document.querySelector('.js-rules');

    const modalsBoat = [...document.querySelectorAll('.modal--boat')];
    const modalTriggerBoatButtons = [...document.querySelectorAll('.js-boat')];

    const modalPrivacy = document.querySelector('.modal--privacy');
    const modalTriggerPrivacyButtons = [...document.querySelectorAll('.js-privacy')];

    const modalAgreement = document.querySelector('.modal--agreement');
    const modalTriggerAgreementButton = document.querySelector('.js-agreement');

    const scrollbarWidth = getScrollbarWidth();

    modalTriggerFeedbackButtons.forEach((modalTriggerFeedbackButton) => {
        modalTriggerFeedbackButton.addEventListener('click', () => {
            modalFeedback.style.display = 'flex';
            modalFeedback.classList.add('modal-show');
            document.body.classList.add('no-scroll');
            document.body.style.paddingRight = `${scrollbarWidth}px`;
        })
    })

    modalTriggerPrivacyButtons.forEach((modalTriggerPrivacyButton) => {
        modalTriggerPrivacyButton.addEventListener('click', (e) => {
            e.preventDefault();
            modalPrivacy.style.display = 'flex';
            modalPrivacy.classList.add('modal-show');
            document.body.classList.add('no-scroll');
            document.body.style.paddingRight = `${scrollbarWidth}px`;
        })
    })

    modalTriggerAgreementButton.addEventListener('click', (e) => {
        e.preventDefault();
        modalAgreement.style.display = 'flex';
        modalAgreement.classList.add('modal-show');
        document.body.classList.add('no-scroll');
        document.body.style.paddingRight = `${scrollbarWidth}px`;
    })

    modalTriggerBoatButtons.forEach((modalTriggerBoatButton, modalTriggerBoatButtonIndex) => {
        modalTriggerBoatButton.addEventListener('click', (e) => {
            modalsBoat[modalTriggerBoatButtonIndex].style.display = 'flex';
            modalsBoat[modalTriggerBoatButtonIndex].classList.add('modal-show');
            document.body.classList.add('no-scroll');
            document.body.style.paddingRight = `${scrollbarWidth}px`;
        })
    })

    modalTriggerRulesButton.addEventListener('click', () => {
        modalRules.style.display = 'flex';
        modalRules.classList.add('modal-show');
        document.body.classList.add('no-scroll');
        document.body.style.paddingRight = `${scrollbarWidth}px`;
    })

    modals.forEach(modal => {
        modal.addEventListener('click', (e) => {
            if(e.target && e.target === modal) {
                modal.classList.add('modal-hide');

                setTimeout(() => {
                    modal.style.display = 'none';
                    modal.classList.remove('modal-show', 'modal-hide');
                    document.body.classList.remove('no-scroll');
                    document.body.style.paddingRight = '';
                    forms.forEach((form) => {
                        form.reset();
                        form.querySelector('button').setAttribute('disabled', 'disabled');
                    })
                    errors.forEach((error) => {
                        error.innerHTML = '';
                    })
                    if(checkIsShowModal()) {
                        document.body.classList.add('no-scroll');
                    }
                }, 200);
            }

        })
    })

    modalCloseButtons.forEach(modalCloseButton => {
        modalCloseButton.addEventListener('click', (event) => {
         const modal = event.target.closest('.modal');
            modal.classList.add('modal-hide');
            setTimeout(() => {
                modal.style.display = 'none';
                modal.classList.remove('modal-show', 'modal-hide');
                document.body.classList.remove('no-scroll');
                document.body.style.paddingRight = '';
                forms.forEach((form) => {
                    form.reset();
                    form.querySelector('button').setAttribute('disabled', 'disabled');
                })
                errors.forEach((error) => {
                    error.innerHTML = '';
                })
                if(checkIsShowModal()) {
                    document.body.classList.add('no-scroll');
                }
            }, 200);

        })
    })

    // Закрыть все модальные окна
    function closeAllModals() {
        modals.forEach(modal => {
            modal.classList.add('modal-hide');
            setTimeout(() => {
                modal.style.display = 'none';
                modal.classList.remove('modal-show', 'modal-hide');
                document.body.classList.remove('no-scroll');
            }, 200);
        })
    }

    function checkIsShowModal () {
        if(document.querySelector('.modal-show')) {
            return true;
        }
        return false;
    }
}