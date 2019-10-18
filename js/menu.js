$(document).ready(function() {
    var altura = $('.header-nav').offset().top;

    $(window).on('scroll', function() {
        if ($(window).scrollTop() > altura) {
            $('.header-nav').addClass('menu-fixed');
        } else {
            $('.header-nav').removeClass('menu-fixed');
        }
    });
});

function cambiarClase() {
    let siteNav = document.getElementById('site-nav');
    siteNav.classList.toggle('site-nav-open');
    let menuOpen = document.getElementById('menu-toggle');
    menuOpen.classList.toggle('menu-open');

}