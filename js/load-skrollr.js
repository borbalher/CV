
var s = skrollr.init({forceHeight: true});
console.log("Skrollr loaded");

skrollr.menu.init(s, {
    complexLinks: false,
    updateUrl: false
});
console.log("Skrollr menu loaded");


$(window).resize(function() {
  s.refresh();
});

$(document).ready(function(){
  $(document).scrollTop(1); // removes the impression of animation
  $('html,body').animate({scrollTop:0},'fast','linear');
});
