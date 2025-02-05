const burgerMenu = () => {
    const burgerMenuButton = document.querySelector('.burger-menu');
    const headerOverlay = document.querySelector('.header__overlay');
    const links = document.querySelectorAll('.header__menu-link');


    burgerMenuButton.addEventListener('click', () => {
        headerOverlay.classList.toggle('is-active');
        burgerMenuButton.classList.toggle('is-active');
        document.documentElement.classList.toggle('no-scroll');
    });

    links.forEach(link => {
        link.addEventListener('click', () => {
            headerOverlay.classList.remove('is-active');
            burgerMenuButton.classList.remove('is-active');
            document.documentElement.classList.remove('no-scroll');
        })
    })
}

export default burgerMenu;