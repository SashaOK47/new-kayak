const modalPrivacy = () => {
    const modalPrivacyLinkButtons = document.querySelectorAll('.js-privacy');
    const modalPrivacyPopup = document.querySelector('.modal-privacy');
    const modalCloseButtonPrivacy = document.querySelector('.js-privacy-close');

    modalPrivacyLinkButtons.forEach((modalPrivacyLinkButton) => {
        modalPrivacyLinkButton.addEventListener('click', (e) => {
            e.preventDefault();
            modalPrivacyPopup.style.display = 'block';
            document.documentElement.classList.add('no-scroll');
        })
    })

    modalPrivacyPopup.addEventListener('click', (e) => {
        if(e.target && e.target === modalPrivacyPopup) {
            modalPrivacyPopup.style.display = 'none';
            document.documentElement.classList.remove('no-scroll');
        }
    })
    modalCloseButtonPrivacy.addEventListener('click', () => {
        modalPrivacyPopup.style.display = 'none';
        document.documentElement.classList.remove('no-scroll');
    })
}

export default modalPrivacy;