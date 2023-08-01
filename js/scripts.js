// toggle visibility for css3 animations 
$(document).ready(function() {
	$('header').addClass('visibility');
	$('.carousel-iphone').addClass('visibility');
	$('.payoff h1').addClass('visibility');
	$('.features .col-md-4').addClass('visibility');
	$('.social .col-md-12').addClass('visibility');
});


//iphone carousel animation
$(window).load(function () {
	$('header').addClass("animated fadeIn");
	$('.carousel-iphone').addClass("animated fadeInLeft");
});

// Fixed navbar
$(window).scroll(function () {

var scrollTop = $(window).scrollTop();

	if (scrollTop > 200) {
		$('.navbar-default').css('display', 'block');
		$('.navbar-default').addClass('fixed-to-top');
			
	} else if (scrollTop == 0)   {
	
		$('.navbar-default').removeClass('fixed-to-top');
	}
	
	
//animations	
	$('.payoff h1').each(function(){
			
		var imagePos = $(this).offset().top;
		var topOfWindow = $(window).scrollTop();
			
			if (imagePos < topOfWindow+650) {
				$(this).addClass("animated fadeInLeft");
			}		
				
	});
	
	$('.purchase button.app-store').each(function(){
			
		var imagePos = $(this).offset().top;
		var topOfWindow = $(window).scrollTop();
			
			if (imagePos < topOfWindow+650) {
				$(this).addClass("animated pulse");
			}		
				
	});
	
	$('.features .col-md-4').each(function(){
			
		var imagePos = $(this).offset().top;
		var topOfWindow = $(window).scrollTop();
			
			if (imagePos < topOfWindow+650) {
				$(this).addClass("animated flipInX");
			}		
				
	});
	
	$('.social .col-md-12').each(function(){
			
		var imagePos = $(this).offset().top;
		var topOfWindow = $(window).scrollTop();
			
			if (imagePos < topOfWindow+1050) {
				$(this).addClass("animated fadeInLeft");
			}		
				
	});
	
	$('.get-it button.app-store').each(function(){
			
		var imagePos = $(this).offset().top;
		var topOfWindow = $(window).scrollTop();
			
			if (imagePos < topOfWindow+850) {
				$(this).addClass("animated pulse");
			}		
				
	});
	
	
});


// Parallax Content

function parallax() {

		// Turn parallax scrolling off for iOS devices
		   
		    var iOS = false,
		        p = navigator.platform;
		
		    if (p === 'iPad' || p === 'iPhone' || p === 'iPod') {
		        iOS = true;
		    }
	
		var scaleBg = -$(window).scrollTop() / 3;

        if (iOS === false) {
            $('.payoff').css('background-position-y', scaleBg - 150);
            $('.social').css('background-position-y', scaleBg + 200);
        }
   
}

function navbar() {

	if ($(window).scrollTop() > 1) {
	    $('#navigation').addClass('show-nav');
	} else {
	    $('#navigation').removeClass('show-nav');
	}
	
}

$(document).ready(function () {

	var browserWidth = $(window).width();
	
	if (browserWidth > 560){ 
	
		$(window).scroll(function() {
			parallax();
			navbar();
		});
	
	}

});	


$(window).resize(function () {

	var browserWidth = $(window).width();
	
	if (browserWidth > 560){ 
	
		$(window).scroll(function() {
			parallax();
			navbar();
		});
	
	}

});	


// iPhone Header Carousel
$('header .carousel').carousel({
  interval: 3000
})

// iPhone Features Carousel
$('.detail .carousel').carousel({
  interval: 4000
})





// 이전 스크립트를 수정한 내용
$(document).ready(function () {
  // Check if it's a touch-enabled device
  var isTouchDevice = 'ontouchstart' in document.documentElement;

  // If it's a touch-enabled device, use gyroscope effect; otherwise, use parallax effect
  if (isTouchDevice) {
    // Use gyroscope effect for touch devices
    // 해당 부분은 모바일에서 이미지를 고정시키는 역할을 합니다. 삭제하고 다음 스크립트로 대체합니다.
  } else {
    // Use parallax effect for non-touch devices
    $(window).scroll(function () {
      parallax();
    });
  }
});

// 모바일에서도 스크롤 이벤트를 감지하도록 수정한 내용
var lastScrollTop = 0;

$(window).scroll(function (event) {
  var st = $(this).scrollTop();
  if (st > lastScrollTop) {
    // 아래로 스크롤하는 경우
    $('.social').css('background-position-y', '-=1');
  } else {
    // 위로 스크롤하는 경우
    $('.social').css('background-position-y', '+=1');
  }
  lastScrollTop = st;
});





