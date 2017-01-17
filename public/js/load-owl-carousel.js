$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
    loop:true,
    margin:20,
    nav: true,
    navText: [
       "<i class='fa fa-chevron-left'></i><div class='cf'></div>",
       "<i class='fa fa-chevron-right'></i><div class='cf'></div>"
    ]
  });
  console.log("Owl carousel loaded");
});
