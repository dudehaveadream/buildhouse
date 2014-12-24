$(document).ready(function(){
	$('.sidebar > li').addClass('empty closes')
	$('.sidebar .popup_open').click(function(e){
		$(this).next().slideToggle();
		$(this).parent().toggleClass('open');
		$(this).parent().toggleClass('closes');
		e.preventDefault();
		$(this).next().parents('.sidebar > li').removeClass('empty');
	})
	$('.sidebar_right .info').find('h1:first').addClass('first')
});