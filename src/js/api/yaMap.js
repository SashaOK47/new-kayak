// <iframe
//     src="https://yandex.by/map-widget/v1/?from=mapframe&l=sat%2Ctrf%2Ctrfe&ll=23.646574%2C52.147795&mode=usermaps&source=mapframe&um=constructor%3A27b3b08a6e91a2ad547667e3b957b29e46e184908634561e9684f60f94be7a0d&utm_source=mapframe&z=13"
//     width="100%" height="340" frameBorder="1" allowFullScreen="true" style="position:relative;"></iframe>

export function yaMap() {
    function loadYandexMap() {
        const iframe = document.createElement('iframe');
        iframe.src = 'https://yandex.by/map-widget/v1/?from=mapframe&l=sat%2Ctrf%2Ctrfe&ll=23.646574%2C52.147795&mode=usermaps&source=mapframe&um=constructor%3A27b3b08a6e91a2ad547667e3b957b29e46e184908634561e9684f60f94be7a0d&utm_source=mapframe&z=13';
        iframe.width = "100%"
        iframe.height = "340"
        iframe.allowFullScreen = true
        document.getElementById('mymap').appendChild(iframe);
    }

    // Ленивая загрузка карты
    window.addEventListener('load', function () {
        const observer = new IntersectionObserver(function (entries) {
            if (entries[0].isIntersecting) {
                loadYandexMap();
                observer.disconnect();
            }
        });
        observer.observe(document.getElementById('mymap'));
    });
}