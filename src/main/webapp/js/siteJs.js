	//  var myval;
	// function Mycall() {
	// 	myval = setTimeout(page, 300);
	// }
	// function page() {
	// 	$("#loader-wrapper").css("display", "none");
	// 	$("#games").css("display", "block");
	// }


	var slideIndex = 1;
	showSlides(slideIndex);
	
	// Next/previous controls
	function plusSlides(n) {  
	  showSlides(slideIndex += n);
	  if(n==1){
			var element = document.getElementById("list_"+parseInt(slideIndex));
			element.classList.add("myrightAni");
			element.classList.remove("myleftAni");
		}
		else{
			var element = document.getElementById("list_"+parseInt(slideIndex));
			element.classList.add("myleftAni");
			element.classList.remove("myrightAni");
		}
	}
	
	// Thumbnail image controls
	function currentSlide(n) {
	  showSlides(slideIndex = n);
	  if(n<1){
		var element = document.getElementById("list_"+parseInt(slideIndex));
		element.classList.add("myrightAni");
		element.classList.remove("myleftAni");
	}
	else{
		var element = document.getElementById("list_"+parseInt(slideIndex));
		element.classList.add("myleftAni");
		element.classList.remove("myrightAni");
	}

	}
	
	function showSlides(n) {  
	  var i;
	  var slides = document.getElementsByClassName("tab_content"); 
	  var dots = document.getElementsByClassName("dot");
	 
	 if (n > slides.length) {slideIndex = 1}
	 if (n < 1) {slideIndex = slides.length}
	  for (i = 0; i < slides.length; i++) {
		  slides[i].style.display = "none";
	  }
	  for (i = 0; i < dots.length; i++) {
		  dots[i].className = dots[i].className.replace("active", "");
		  slides[i].className = slides[i].className.replace("active", "");
	  }
	  slides[slideIndex-1].style.display = "block";
	  dots[slideIndex-1].className += " active";
	  slides[slideIndex-1].className += " active";
	}

	$('.morebtn').click(function(){
		$('.sliderBanners').addClass('fblur');
	});
	$(document).on('click',function(){ 
		if($('#slidesPop').hasClass('sliderBanners')){
			$('#slidesPop').removeClass('fblur'); 
		}
		else{
			if($('.sliderBanners').hasClass('sliderBanners')){
				$('#slidesPop').addClass('fblur'); 
			}
		}
	});
		$('.carousel').carousel({
		interval: 7000
	  });

