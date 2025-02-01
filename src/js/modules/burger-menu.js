const burgerMenu = () => {
    const burgerButton = document.querySelector('.burger-menu');
    const headerOverlay = document.querySelector('.header__overlay');

    burgerButton.addEventListener('click', () => {
        headerOverlay.classList.toggle('is-active');
    });
}

export default burgerMenu;