$(document).on('ready', function(){

    $('.navigation-list a').click(function(){
        $('html, body').animate({
            scrollTop: $( $(this).attr('href') ).offset().top
        }, 500);
        return false;
    });

    $('.navigation-list a').click(function(){
    	$(this).parent().siblings().removeClass('is-active');
    	$(this).parent().addClass('is-active');
    });
    
});