(function($) {
    "use strict";

    // ______________Owl-carousel-icons2
    var owl = $('.owl-carousel-icons2');
    owl.owlCarousel({
        loop: true,
        rewind: false,
        margin: 25,
        animateIn: 'fadeInDowm',
        animateOut: 'fadeOutDown',
        autoplay: false,
        autoplayTimeout: 5000, // set value to change speed
        autoplayHoverPause: true,
        dots: false,
        nav: true,
        autoplay: true,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                nav: true
            },
            600: {
                items: 3,
                nav: true
            },
            1200: {
                items: 4,
                nav: true
            },
            1400: {
                items: 5,
                nav: true
            }
        }
    })

})(jQuery);