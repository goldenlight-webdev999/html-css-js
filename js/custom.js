
// Custom Codes
$(document).ready(function() {
	
	$('#header-main').append('<div class="overlay-menu"></div>');
	$('#container-main').append('<div class="overlay-search"></div>');
	$('.nav-offcanvas .nav-inn').prepend('<div class="close-btn"><div class="menu-bar"></div></div>');
	
	$('.search-btn .icon').click(function() {
		$('.search-btn').toggleClass('active');
		$('.overlay-search').toggleClass('active');
	});
	
	$('.menu-btn').click(function() {
		$('.menu-btn').toggleClass('active');
		$('.nav-offcanvas').toggleClass('active');
		$('.overlay-menu').toggleClass('active');
		$('.search-btn').removeClass('active');
		$('.overlay-search').removeClass('active');
		$('body').toggleClass('hiddenscroll');
	});		
	
	$('.close-btn, .overlay-menu, .overlay-search').click(function() {
		$('.menu-btn').removeClass('active');
		$('.nav-offcanvas').removeClass('active');
		$('.search-btn').removeClass('active');
		$('.overlay-menu').removeClass('active');
		$('.overlay-search').removeClass('active');
		$('body').removeClass('hiddenscroll');
	});
	
	$('.slider-in').prepend('<div class="close-modal"><em class="fal fa-times"></em></div>');
	
	$('.overlay-1').click(function() {
		$('#overlay-1').addClass('active');
		$('body').addClass('hiddenscroll');
	});
	$('.overlay-2').click(function() {
		$('#overlay-2').addClass('active');
		$('body').addClass('hiddenscroll');
	});
	$('.overlay-3').click(function() {
		$('#overlay-3').addClass('active');
		$('body').addClass('hiddenscroll');
	});
	$('.overlay-4').click(function() {
		$('#overlay-4').addClass('active');
		$('body').addClass('hiddenscroll');
	});
	$('.overlay-5').click(function() {
		$('#overlay-5').addClass('active');
		$('body').addClass('hiddenscroll');
	});
	$('.overlay-6').click(function() {
		$('#overlay-6').addClass('active');
		$('body').addClass('hiddenscroll');
	});
	$('.overlay-7').click(function() {
		$('#overlay-7').addClass('active');
		$('body').addClass('hiddenscroll');
	});
	$('.overlay-8').click(function() {
		$('#overlay-8').addClass('active');
		$('body').addClass('hiddenscroll');
	});
	$('.overlay-9').click(function() {
		$('#overlay-9').addClass('active');
		$('body').addClass('hiddenscroll');
	});
	$('.overlay-10').click(function() {
		$('#overlay-10').addClass('active');
		$('body').addClass('hiddenscroll');
	});
	$('.overlay-11').click(function() {
		$('#overlay-11').addClass('active');
		$('body').addClass('hiddenscroll');
	});
	$('.overlay-12').click(function() {
		$('#overlay-12').addClass('active');
		$('body').addClass('hiddenscroll');
	});
	$('.overlay-13').click(function() {
		$('#overlay-13').addClass('active');
		$('body').addClass('hiddenscroll');
	});
	
	$('.close-modal').click(function() {
		$('#overlay-1').removeClass('active');
		$('#overlay-2').removeClass('active');
		$('#overlay-3').removeClass('active');
		$('#overlay-4').removeClass('active');
		$('#overlay-5').removeClass('active');
		$('#overlay-6').removeClass('active');
		$('#overlay-7').removeClass('active');
		$('#overlay-8').removeClass('active');
		$('#overlay-9').removeClass('active');
		$('#overlay-10').removeClass('active');
		$('#overlay-11').removeClass('active');
		$('#overlay-12').removeClass('active');
		$('#overlay-13').removeClass('active');
		$('body').removeClass('hiddenscroll');
	});
	
	$('input,textarea').focus(function(){
		$(this).data('placeholder',$(this).attr('placeholder')).attr('placeholder','');
	}).blur(function(){
		$(this).attr('placeholder',$(this).data('placeholder'));
	});	
	
});


//Smooth Scroll
$(function() {
  $('a[href*="#scroll"]:not([href="#scroll"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});


//Owl Slider Control
$(document).ready(function() {
	
	$('#item-slider1').owlCarousel({
		items: 1,
		loop: true,
		nav: true, 
		dots: false,
		autoplay: true,
	});	
	
	$('#item-slider2').owlCarousel({
		items: 1,
		loop: true,
		nav: true, 
		dots: false,
		autoplay: true,
	});	
	
	$('#item-slider3').owlCarousel({
		items: 1,
		loop: true,
		nav: true, 
		dots: false,
		autoplay: true,
	});	
	
	$('#item-slider4').owlCarousel({
		items: 1,
		loop: true,
		nav: true, 
		dots: false,
		autoplay: true,
	});	
	
	$('#item-slider5').owlCarousel({
		items: 1,
		loop: true,
		nav: true, 
		dots: false,
		autoplay: true,
	});	
	
	$('#item-slider6').owlCarousel({
		items: 1,
		loop: true,
		nav: true, 
		dots: false,
		autoplay: true,
	});	
	
	$('#item-slider7').owlCarousel({
		items: 1,
		loop: true,
		nav: true, 
		dots: false,
		autoplay: true,
	});	
	
	$('#item-slider8').owlCarousel({
		items: 1,
		loop: true,
		nav: true, 
		dots: false,
		autoplay: true,
	});	
	
	$('#item-slider9').owlCarousel({
		items: 1,
		loop: true,
		nav: true, 
		dots: false,
		autoplay: true,
	});	
	
	$('#item-slider10').owlCarousel({
		items: 1,
		loop: true,
		nav: true, 
		dots: false,
		autoplay: true,
	});	
	
	$('#item-slider11').owlCarousel({
		items: 1,
		loop: true,
		nav: true, 
		dots: false,
		autoplay: true,
	});	
	
	$('#item-slider12').owlCarousel({
		items: 1,
		loop: true,
		nav: true, 
		dots: false,
		autoplay: true,
	});	
	
	$('#item-slider13').owlCarousel({
		items: 1,
		loop: true,
		nav: true, 
		dots: false,
		autoplay: true,
	});	
		
});



