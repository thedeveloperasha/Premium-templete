
$(document).ready(function () {
    //Owl
    $('#hero-slider').owlCarousel({
        loop: true,
        margin: 0,
        items: 1,
        dots: false,
        navText: ['PREV', 'NEXT'],
        smartSpeed: 1000,
        autoplay: true,
        autoplayTimeout: 7000,
        responsive: {
            0: {
                nav: false,
            },
            768: {
                nav: true,
            }
        }
    })

    // $('#project-slider').owlCarousel({
    //     loop: true,
    //     margin: 0,
    //     nav:true,
    //     dots: false,
    //     navText: ['PREV', 'NEXT'],
    //     smartSpeed: 1000,
    //     margin:24,
    //     responsive: { 
    //         0: {
    //          item: 1,
    //          nav:false,
    //          margin:0,
    //         },
    //         768: {
    //           item:2,
    //         },
    //         1140: {
    //             items: 2,
    //             center: true,
    //         }
    //     }
    // })



    $('#project-slider').owlCarousel({
        loop: true,
        nav: false,
        items: 2,
        dots: true,
        smartSpeed: 600,
        center: true,
        autoplay: true,
        autoplayTimeout: 4000,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 2,
                margin: 8,
            }
        }
    })

    $('.owl-carousel').owlCarousel({
        loop: true,
        nav: false,
        dots: true,
        smartSpeed: 900,
        items: 1,
        margin: 24,
        autoplay: true,
        autoplayTimeout: 4000,
    })
});
