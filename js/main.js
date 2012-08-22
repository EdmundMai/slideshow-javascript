$(document).ready(function(){

	
//code for short paragraph to appear when mouse hovers over picture 
//---------------------------------

	function mouseOn(){
		var height = $(this).find('#para').height() + 25;
		$(this).find('#para').animate({bottom: height}, 400);
	};

	function mouseOff(){
		$(this).find('#para').animate({bottom: 0}, 400);
	};

	$('.bottom img').hover(mouseOn, mouseOff);


	$('.pic:not(:first)').hide();
	$currentBox = $('.pic');

//---------------------------------


//code for slideshow to automatically slide after every few seconds, as well as navigating through the images through the slideshow buttons below the slideshow
//---------------------------------

	$('ul li:eq(0)').addClass('selected');
	
	$('ul li').click(function(){
		$('.image_frame img').fadeOut(300);
		$('ul li').removeClass('selected');
		$(this).addClass('selected');
		var listPos = $(this).index();
		$('.image_frame img').eq(listPos).fadeIn(300);
		if (listPos < imgChild.length - 1){
			current = listPos + 1;
		} else {
			current = 0;
		}
	});

	var hey = $('.image_frame img').size();
	var current = 1	
	var imgChild = $('.image_frame').children()


	function autoSlide(){
		$('.image_frame img').fadeOut(300);
		$('.image_frame img').eq(current).fadeIn(300);
		$('li').removeClass('selected');
		$('li').eq(current).addClass('selected');
		current += 1;
		if (current >= imgChild.length) {
			current = 0;
		};
		setTimeout(autoSlide, 10000);
	};

	setTimeout(autoSlide, 10000);

//---------------------------------

});
