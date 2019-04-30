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
});