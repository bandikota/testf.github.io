$('.owl-carousel.owl-main').owlCarousel({
    loop: true,
    margin: 24,
    nav: true,
    navContainer: '.slider-nav',
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 2
        },

    }
})
$('.owl-carousel.owl-second').owlCarousel({
    loop: true,
    margin: 50,
    nav: false,
    smartSpeed: 600,
    loop: true,

    responsive: {
        0: {

            items: 1
        },
        1200: {
            items: 1,
            nav: true,
            navContainer: '.slider-nav'
        }

    }
})