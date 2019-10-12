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