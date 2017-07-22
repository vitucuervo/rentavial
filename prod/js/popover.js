$(document).on('ready', function(){

	$('.mm-icon-heart').on('click', function(){
		$('.favourite-tooltip').addClass('show-popover');
	});

	$('.favourite-tooltip .close').on('click', function(){
		$('.favourite-tooltip').removeClass('show-popover');
	});
	
});