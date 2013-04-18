var SlideSpeed = 1000;
var currentDiv = {};
var aboutMargin = 0;
var portfolioMargin = -1025;
var photosMargin = -2050;
var contactMargin = -3075;

function AboutSlide() {
	$('body,html').animate({
				scrollTop: 0
			}, 1);
	$("#slider-wrapper").animate({ marginLeft: aboutMargin }, 500, 'easeInOutCubic');
}
function PortfolioSlide() {
	$('body,html').animate({
				scrollTop: 0
			}, 1);
	$("#slider-wrapper").animate({ marginLeft: portfolioMargin }, 500, 'easeInOutCubic');
}
function TelevisionSlide() {
	$("#slider-wrapper").animate({ marginLeft: portfolioMargin }, 500, 'easeInOutCubic');
	$('html, body').animate({scrollTop: $("#television").offset().top}, 500);
}
function RadioSlide() {
	$("#slider-wrapper").animate({ marginLeft: portfolioMargin }, 500, 'easeInOutCubic');
	$('html, body').animate({scrollTop: $("#radio").offset().top}, 500);
}
function MagazineSlide() {
	$("#slider-wrapper").animate({ marginLeft: portfolioMargin }, 500, 'easeInOutCubic');
	$('html, body').animate({scrollTop: $("#magazine").offset().top}, 500);
}
function ContactSlide() {
	$('body,html').animate({
				scrollTop: 0
			}, 1);
	$("#slider-wrapper").animate({ marginLeft: contactMargin }, 500, 'easeInOutCubic');
}
function PhotosSlide() {

	$('body,html').animate({
				scrollTop: 0
			}, 1);
	//$(".html5gallery-car-1").css("height", "125px");
	//$(".html5gallery-tn-1 div ").css("height", "120px");
	//$(".html5gallery-tn-selected-1 img").css("border-color", "#9a9a9a").css("border-radius", "5px");
	//$(".html5gallery-car-mask-1").css("height", "120px");
	//$(".html5gallery-car-list-1").css("height", "120px");
	//$(".html5gallery-thumbs-1").css("height", "120px");
	//$(".html5gallery-thumbs-1 div").css("height", "120px").css("width", "120px");
	//$(".html5gallery-car-mask-1").css("height", "120px");
	//$(".html5gallery-car-1 img").css("height", "100px").css("width", "100px").css("border", "5px solid #686868").css("border-radius", "5px");
	$(".html5gallery-timer-1").css("background", "none");
	$("html5gallery-watermark-1").css("background-color", "#aaaaaa");
	$("html5gallery-title-1").css("overflow", "visible !important");
	$("html5gallery-title-1").css("width", "inherit !important");
	$("html5gallery-title-text-1").css("overflow", "visible !important");
	$("html5gallery-title-text-1").css("white-space", "");
	$(".html5gallery-box-1").css("top", "60px");
	$(".html5gallery-car-1").css("top", "0px");
	$("#slider-wrapper").animate({ marginLeft: photosMargin }, 500, 'easeInOutCubic');
}