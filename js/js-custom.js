setTimeout(function() {
    $('.loader_bg').fadeToggle();
}, 1000);


$("#owl-client2").owlCarousel({
    pagination: false,
    center: true,
    loop: true,
    margin: 0,
    nav: false,
    autoplay: true,
    autoplayTimeout: 2000,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 3
        },
        1000: {
            items: 4
        }
    }
});


var testimonialItems = document.querySelectorAll(".item label");
var timer;

function cycleTestimonials(index) {
    timer = setTimeout(function() {
        var evt;
        if (document.createEvent) {
            //If browser = IE, then polyfill
            evt = document.createEvent('MouseEvent');
            evt.initMouseEvent('click', true, true, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
        } else {
            //If Browser = modern, then create new MouseEvent
            evt = new MouseEvent("click", {
                view: window,
                bubbles: true,
                cancelable: true,
                clientX: 20
            });
        }
        var ele = "." + testimonialItems[index].className;
        var ele2 = document.querySelector(ele)
        ele2.dispatchEvent(evt);
        index++; // Increment the index
        if (index >= testimonialItems.length) {
            index = 0; // Set it back to `0` when it reaches `3`
        }
        cycleTestimonials(index); // recursively call `cycleTestimonials()`
        document.querySelector(".testimonials").addEventListener("click", function() {
            clearTimeout(timer); //stop the carousel when someone clicks on the div
        });
    }, 2000); //adjust scroll speed in miliseconds
}
//run the function
cycleTestimonials(0);

jQuery(function($) {
    'use strict';

    // Start Menu JS
    $(window).on('scroll', function() {
        if ($(this).scrollTop() > 50) {
            $('.main-nav').addClass('menu-shrink');
        } else {
            $('.main-nav').removeClass('menu-shrink');
        }
    });

    // Mean Menu JS
    jQuery('.mean-menu').meanmenu({
        meanScreenWidth: '991'
    });

    // Search Box JS
    $('.search-toggle').addClass('closed');
    $('.search-toggle .search-icon').on('click', function(e) {
        if ($('.search-toggle').hasClass('closed')) {
            $('.search-toggle').removeClass('closed').addClass('opened');
            $('.search-toggle, .search-area').addClass('opened');
            $('#search-terms').focus();
        } else {
            $('.search-toggle').removeClass('opened').addClass('closed');
            $('.search-toggle, .search-area').removeClass('opened');
        }
    });
}(jQuery));



(function($) {
    'use strict';

    // Header Sticky
    $(window).on('scroll', function() {
        if ($(this).scrollTop() > 120) {
            $('.navbar-area').addClass("is-sticky");
        } else {
            $('.navbar-area').removeClass("is-sticky");
        }
    });

    // Search Menu JS
    $(".search-box i").on("click", function() {
        $(".search-overlay").toggleClass("search-overlay-active");
    });
    $(".search-overlay-close").on("click", function() {
        $(".search-overlay").removeClass("search-overlay-active");
    });

    // Hero slider
    $('.hero-slider').owlCarousel({
        items: 1,
        loop: true,
        margin: 0,
        nav: true,
        autoHeight: true,
        autoplay: true,
        autoplayHoverPause: true,
        dots: false,
        navText: [
            "<i class='bx bx-chevron-left'></i>",
            "<i class='bx bx-chevron-right'></i>"
        ]
    })







    // Popup Video
    $('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
        disableOn: 100,
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,
        fixedContentPos: false
    });



})(jQuery);