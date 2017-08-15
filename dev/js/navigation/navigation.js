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

    $('.header-hamburger').click(function(){
        $(this).parent().toggleClass('is-expanded');
        $('body').toggleClass('scroll-block');
    });

    var top1 = $('#hero').offset().top - 100;
    var top2 = $('#about').offset().top - 100;
    var top3 = $('#transport').offset().top - 100;
    var top4 = $('#works').offset().top - 100;
    var top5 = $('#equipment').offset().top - 100;
    var top6 = $('#contact').offset().top - 100;

    $(document).scroll(function() {
      var scrollPos = $(document).scrollTop();
      if (scrollPos >= top1 && scrollPos < top2) {
        $('.navigation-list li').removeClass('is-active');
        $('#nav-hero').addClass('is-active');
      } else if (scrollPos >= top2 && scrollPos < top3) {
        $('.navigation-list li').removeClass('is-active');
        $('#nav-about').addClass('is-active');
      } else if (scrollPos >= top3 && scrollPos < top4) {
        $('.navigation-list li').removeClass('is-active');
        $('#nav-transport').addClass('is-active');
      } else if (scrollPos >= top4 && scrollPos < top5) {
        $('.navigation-list li').removeClass('is-active');
        $('#nav-works').addClass('is-active');
      } else if (scrollPos >= top5 && scrollPos < top6) {
        $('.navigation-list li').removeClass('is-active');
        $('#nav-equipment').addClass('is-active');
      } else if (scrollPos >= top6) {
        $('.navigation-list li').removeClass('is-active');
        $('#nav-contact').addClass('is-active');
      }
    });

});

