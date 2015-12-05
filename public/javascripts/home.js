
$(document).ready(function() {
	$("a.nav-link.nav-link-about").click(function() {
		this.blur();
	    $('html,body').animate({
	        scrollTop: $("#info").offset().top},
	        'slow');
	});
	$("a.nav-link.nav-link-partners").click(function() {
		this.blur();
	    $('html,body').animate({
	        scrollTop: $(".partners").offset().top},
	        'slow');
	});

	$(window).on('scroll', function(){

		var divCopy = $('div.nav.nav-custom').clone();
		divCopy.addClass('fixed');
		divCopy.addClass('nav-copy');

	    if($(window).scrollTop() >= 400 && !$('div.nav-copy').length) {
	    	$('body').append(divCopy).show('slow');
	        //$('.nav').addClass('fixed'); 
	    }
	    else if($(window).scrollTop()<400 && $('div.nav-copy').length){
	      	$('div.nav-copy').remove().show('slow');
	       //$('.nav').removeClass('fixed') 
	    }
	});

	$(window).resize(function() {
		$('#info').css('height', window.innerHeight);
		$('.partners').css('height', window.innerHeight);
	});
});
