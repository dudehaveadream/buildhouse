$(document).ready(function(){
	$('.sidebar .popup_open').click(function(){
		$(this).next().slideToggle();
		$(this).parent().toggleClass('open');
		$(this).parent().toggleClass('closes')
	})
});