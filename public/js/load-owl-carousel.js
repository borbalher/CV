$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
    loop:true,
    center:true,
    nav: true,
    navText: [
       "<i class='fa fa-chevron-left'></i><div class='cf'></div>",
       "<i class='fa fa-chevron-right'></i><div class='cf'></div>"
    ],
    responsiveClass:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }
  });
  console.log("Owl carousel loaded");
});
