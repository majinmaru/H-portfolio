$(document).ready(function(){
	function squareIcon(){
		$(".indicator-line").addClass('roll');
		setTimeout(function(){
			$(".indicator-line").addClass('line');
		}, 500);
		setTimeout(function(){
			$(".indicator-text").addClass('appear');
		}, 1000);
	}
	squareIcon();
	function jumboImg(){
		$(".jumbo-img").addClass('expand');
	}

	function scrollIcon(){
		$(".scroll-icon").addClass('active');
	}
	
	setTimeout(function(){
		jumboImg();
	}, 1000);
	setTimeout(function(){
		scrollIcon();
	}, 2000);
	/*
	AOS.init({
   		duration: 1000
   	});
	*/
   	$(".convenient-context__img").find("img").paroller({
   		factor: 0.1, 
   		type: 'foreground',     // background, foreground
        direction: 'vertical', // vertical, horizontal
        transition: 'transform 0.5s ease' // CSS transition, added on elements where type:'foreground'
   	});
});