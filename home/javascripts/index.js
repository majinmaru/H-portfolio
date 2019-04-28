$(document).ready(function(){
/*
	$(".top-surf").find(".surf-img img").hover(function(){
		$(".surf-bubbletalk").css('display', 'block');
		setTimeout(function(){
			$(".surf-bubbletalk").find(".square-icon").addClass('active');
		}, 100);
	}, function(){
		$(".surf-bubbletalk").find(".square-icon").removeClass('active');
		$(".surf-bubbletalk").css('display', 'none');
	});
*/
//surf-img
	$(".top-surf").find(".surf-img img").mouseenter(function(){
		if(!$(".surf-bubbletalk").find(".square-icon").hasClass('active')){
			$(".surf-bubbletalk").css('display', 'block');
			setTimeout(function(){
				$(".surf-bubbletalk").find(".square-icon").addClass('active');
			}, 100);
		} else {
			return false;
		}
	});
	$(".top-surf").mouseleave(function(){
		if($(".surf-bubbletalk").find(".square-icon").hasClass('active')){
			$(".surf-bubbletalk").find(".square-icon").removeClass('active');
			$(".surf-bubbletalk").css('display', 'none');
		}
	});
	$(".surf-bubbletalk").mouseleave(function(){
		$(".surf-bubbletalk").find(".square-icon").removeClass('active');
		$(".surf-bubbletalk").css('display', 'none');
	});
//clock-img
	$(".top-clock").find(".clock-img img").mouseenter(function(){
		if(!$(".clock-bubbletalk").find(".square-icon").hasClass('active')){
			$(".clock-bubbletalk").css('display', 'block');
			setTimeout(function(){
				$(".clock-bubbletalk").find(".square-icon").addClass('active');
			}, 100);
		} else {
			return false;
		}
	});
	$(".top-clock").mouseleave(function(){
		if($(".clock-bubbletalk").find(".square-icon").hasClass('active')){
			$(".clock-bubbletalk").find(".square-icon").removeClass('active');
			$(".clock-bubbletalk").css('display', 'none');
		}
	});
	$(".clock-bubbletalk").mouseleave(function(){
		$(".clock-bubbletalk").find(".square-icon").removeClass('active');
		$(".clock-bubbletalk").css('display', 'none');
	});
//introduce-img
	$(".introduce-me").find(".introduce-me__img img").mouseenter(function(){
		if(!$(".introduce-me-bubbletalk").find(".square-icon").hasClass('active')){
			$(".introduce-me-bubbletalk").css('display', 'block');
			setTimeout(function(){
				$(".introduce-me-bubbletalk").find(".square-icon").addClass('active');
			}, 100);
		} else {
			return false;
		}
	});
	$(".introduce-me").mouseleave(function(){
		if($(".introduce-me-bubbletalk").find(".square-icon").hasClass('active')){
			$(".introduce-me-bubbletalk").find(".square-icon").removeClass('active');
			$(".introduce-me-bubbletalk").css('display', 'none');
		}
	});
	$(".introduce-me-bubbletalk").mouseleave(function(){
		$(".introduce-me-bubbletalk").find(".square-icon").removeClass('active');
		$(".introduce-me-bubbletalk").css('display', 'none');
	});
//interior-img
	$(".top-interior").find(".interior__img img").mouseenter(function(){
		if(!$(".interior-bubbletalk").find(".square-icon").hasClass('active')){
			$(".interior-bubbletalk").css('display', 'block');
			setTimeout(function(){
				$(".interior-bubbletalk").find(".square-icon").addClass('active');
			}, 100);
		} else {
			return false;
		}
	});
	$(".top-interior").mouseleave(function(){
		if($(".interior-bubbletalk").find(".square-icon").hasClass('active')){
			$(".interior-bubbletalk").find(".square-icon").removeClass('active');
			$(".interior-bubbletalk").css('display', 'none');
		}
	});
	$(".interior-bubbletalk").mouseleave(function(){
		$(".interior-bubbletalk").find(".square-icon").removeClass('active');
		$(".interior-bubbletalk").css('display', 'none');
	});
//main leave
	$(".main").mouseleave(function(){
		$(".clock-bubbletalk").find(".square-icon").removeClass('active');
		$(".clock-bubbletalk").css('display', 'none');
		$(".introduce-me-bubbletalk").find(".square-icon").removeClass('active');
		$(".introduce-me-bubbletalk").css('display', 'none');
		$(".interior-bubbletalk").find(".square-icon").removeClass('active');
		$(".interior-bubbletalk").css('display', 'none');
	});
});