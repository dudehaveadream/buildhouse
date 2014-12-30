$(document).ready(function(){
	$('.sidebar > ul > li').addClass('empty closes')
	$('.sidebar .popup_open').click(function(e){
		$(this).next().slideToggle();
		$(this).parent().toggleClass('open');
		$(this).parent().toggleClass('closes');
		e.preventDefault();
		$(this).next().parents('.sidebar > ul > li').removeClass('empty');
	})
	$('.sidebar .sb_close').click(function(e){
		$('.sidebar').slideUp();
		e.preventDefault();
	})
	$('.sidebar_open').click(function(){
		$('.sidebar').slideDown();
	})
	if ($(window).width() < 1213) {
		$('.sidebar').hide();
	}
	$('.sidebar_right .info').find('h1:first').addClass('first')
	var sbula = $(".chose");
    sbula.click(function(e) {
        sbula.removeClass("active").not(sbula).add(this).toggleClass("active");
        e.preventDefault();
    });
});
$(window).resize(function(){
	if ($(window).width() > 1212) {
		$('.sidebar').show();
	}
})