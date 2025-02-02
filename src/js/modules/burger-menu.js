const burgerMenu = () => {
    const burgerButton = document.querySelector('.burger-menu');
    const headerOverlay = document.querySelector('.header__overlay');
    const links = document.querySelectorAll('.header__menu-link');

    burgerButton.addEventListener('click', () => {
        headerOverlay.classList.toggle('is-active');
        document.documentElement.classList.toggle('no-scroll');
    });

    links.forEach(link => {
        link.addEventListener('click', () => {
            headerOverlay.classList.remove('is-active');
        })
    })
}

export default burgerMenu;