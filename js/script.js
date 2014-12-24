$(document).ready(function(){
	$('.sidebar .popup_open').click(function(){
		$(this).next().slideToggle();
		$(this).parent().toggleClass('open');
		$(this).parent().toggleClass('closes')
	})
	$('.sidebar_right .info').find('h1:first').addClass('first')
});