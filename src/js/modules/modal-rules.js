const modalRules = () => {
    const modalRulesButton = document.querySelector('.js-rules');
    const modalRulesPopup = document.querySelector('.modal-rules');
    const modalCloseButton = document.querySelector('.js-modal-close');

    modalRulesButton.addEventListener('click', () => {
        modalRulesPopup.style.display = 'block';
        document.documentElement.classList.add('no-scroll');
    })
    modalRulesPopup.addEventListener('click', (e) => {
        console.log(e.target)
        if(e.target && e.target === modalRulesPopup) {
            modalRulesPopup.style.display = 'none';
            document.documentElement.classList.remove('no-scroll');
        }
    })
    modalCloseButton.addEventListener('click', () => {
        modalRulesPopup.style.display = 'none';
        document.documentElement.classList.remove('no-scroll');
    })
}

export default modalRules;