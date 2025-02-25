export const burgerMenu = () => {
    const burgerMenuButton = document.querySelector('.burger-menu');
    const headerOverlay = document.querySelector('.header__overlay');
    const links = document.querySelectorAll('.header__menu-link');


    burgerMenuButton.addEventListener('click', () => {
        headerOverlay.classList.toggle('is-active');
        burgerMenuButton.classList.toggle('is-active');
        document.body.classList.toggle('no-scroll');
    });

    links.forEach(link => {
        link.addEventListener('click', () => {
            headerOverlay.classList.remove('is-active');
            burgerMenuButton.classList.remove('is-active');
            document.body.classList.toggle('no-scroll');
        })
    })

    // Закрытие меню при клике вне его области
    // document.addEventListener('click', (event) => {
    //
    //     // Проверяем, был ли клик вне меню и кнопки
    //     if (!headerOverlay.contains(event.target) && !burgerMenuButton.contains(event.target)) {
    //         headerOverlay.classList.remove('is-active');
    //         burgerMenuButton.classList.remove('is-active');
    //         document.body.classList.toggle('no-scroll');
    //     }
    // });
}