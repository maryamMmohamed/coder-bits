

(function($) {

	// Use strict start
    "use strict";


   /*--------------------------------------------------------------
    6.  Testimonial Slider - Slick.js
    --------------------------------------------------------------*/
    $testimonial_slider.slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 4000,
        adaptiveHeight: true,
        prevArrow: '<div class="slick-prev slick-nav-btn"><i class="fa fa-angle-left fa-2x"></i></div>',
        nextArrow: '<div class="slick-next slick-nav-btn"><i class="fa fa-angle-right fa-2x"></i></div>',
        // Responsive Breakpoints for Mobile & Tablets
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 2,
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
              }
            }
        ]
    });




})(jQuery); // Use strict end