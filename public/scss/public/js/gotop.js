$(document).ready(function() {
	
    $(window).scroll(function() {
        if($(this).scrollTop() > 100){
            $('#goTop').stop().animate({
                top: '50px'    
                }, 500);
        }
        else{
            $('#goTop').stop().animate({
               top: '-100px'    
            }, 500);
        }
    });
    $('#goTop').click(function() {
        $('html, body').stop().animate({
           scrollTop: 0
        }, 500, function() {
           $('#goTop').stop().animate({
               top: '-100px'    
           }, 500);
        });
    });

});


