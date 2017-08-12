$(document).on('ready', function(){

    $('.equipment-item-box').click(function(){
        $(this).parent().siblings().removeClass('is-active');
        $(this).parent().addClass('is-active');
    });    
    
});

