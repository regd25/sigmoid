/* var sickPrimary = {
    autoplay: true,
    autoplaySpeed: 1400,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 1800,
    asNavFor: '.text-slider',
    centerMode: true,
    prevArrow: $('.prev'),
    nextArrow: $('.next')
}
var sickSecondary = {
    autoplay: true,
    autoplaySpeed: 1400,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 1800,
    asNavFor: '.slider',
    prevArrow: $('.prev'),
    nextArrow: $('.next')
}
$('.slider').slick(sickPrimary);
$('.text-slider').slick(sickSecondary); */


var swiper = new Swiper('.swiper-container', {
    centeredSlides: true,
    effect: 'coverflow',
    coverflowEffect: {
        rotate: 50,
        stretch: 150,
        depth: 100,
        modifier: 4,
        slideShadows: false,
    },
    loop: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});