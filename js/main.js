$(document).ready(function(){
	
	"use strict";
	new WOW().init();

	$("a").click(
	function()
	{
	var e=$(this).attr('href'); 
	$("body").animate({
		scrollTop:$(e).offset().top
	},1000);
	}
	);
	


$('.counter').counterUp({
  delay: 10,
  time: 2000
});
$('.counter').addClass('animated fadeInDownBig');
$('h3').addClass('animated fadeIn');




 $(".filter-button").click(function(){
        var value = $(this).attr('data-filter');
        
        if(value == "all")
        {
            //$('.filter').removeClass('hidden');
            $('.filter').show('1000');
        }
        else
        {
//            $('.filter[filter-item="'+value+'"]').removeClass('hidden');
//            $(".filter").not('.filter[filter-item="'+value+'"]').addClass('hidden');
            $(".filter").not('.'+value).hide('3000');
            $('.filter').filter('.'+value).show('3000');
            
        }
    });
    
    if ($(".filter-button").removeClass("active")) {
$(this).removeClass("active");
}
$(this).addClass("active");



$('.owl-carousel').owlCarousel({
  loop: true,
  margin: 10,
  nav: true,
  navText: [
    "<i class='fa fa-angle-left'></i>",
    "<i class='fa fa-angle-right'></i>"
  ],
  autoplay: true,
  autoplayHoverPause: true,
  responsive: {
    0: {
      items: 1
    },
    600: {
      items: 2
    },
    1000: {
      items:2
    }
  }
})



	
});
