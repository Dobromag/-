// SLIDER
function initSlider() {
    if ($(window).width() <= 768) {
        $('.slider').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 200,
            speed: 2000,
            easing: 'ease',
            draggable: false,
            swipe: true,
            touchThreshold: 10,
            touchMove: true
        });
    } else {
        // Если экран больше или равен 768px, отключаем слайдер
        if ($('.slider').hasClass('slick-initialized')) {
            $('.slider').slick('unslick');
        }
    }
}

$(document).ready(function () {
    initSlider(); // Инициализируем слайдер при загрузке страницы

    // Добавляем обработчик события изменения размера окна
    $(window).on('resize', function () {
        initSlider(); // Переинициализируем слайдер при изменении размера экрана
    });
});
// SLIDER