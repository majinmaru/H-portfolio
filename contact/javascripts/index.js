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
});