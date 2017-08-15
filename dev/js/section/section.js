$(window).on('load resize scroll',function(e){
    $('.section-title').each(function(index) {
      var titleHeight = parseInt($(this)[0].getBoundingClientRect().height);
      var viewHeight = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
      // This will return true as soon as the bottom of the heading crosses the bottom of the viewport
      if ($(this)[0].getBoundingClientRect().top < (viewHeight - titleHeight)) {
        $(this).parents().find('.section').eq(index).addClass('in-viewport');
      }
 	});
});