var sickPrimary = {
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
$('.text-slider').slick(sickSecondary);