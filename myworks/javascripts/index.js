$(document).ready(function(){
	$(".project-img").tilt({
		maxTilt:        20,
		perspective:    800,   // Transform perspective, the lower the more extreme the tilt gets.
		easing:         "cubic-bezier(.03,.98,.52,.99)",    // Easing on enter/exit.
		scale:          1,      // 2 = 200%, 1.5 = 150%, etc..
		speed:          300,    // Speed of the enter/exit transition.
		transition:     true,   // Set a transition on enter/exit.
		disableAxis:    "X",   // What axis should be disabled. Can be X or Y.
		reset:          true,   // If the tilt effect has to be reset on exit.
		glare:          true,  // Enables glare effect
		maxGlare: .2
	});

	$(".project-img").hover(function(){
		$(this).find(".square-icon").addClass('active');
	}, function(){
		$(this).find(".square-icon").removeClass('active');
	})

	$(".myworks-content__project").filter(".p-current").find(".project-img").addClass("appear");


/*
	function runProject(currentProjectIndex, currentProject){
		$(".project-img").addClass('appear');
	}
	runProject();
*/
	var projects = $(".myworks-content__project");

	function runProject(currentPIndex, currentP, currentN){
		var h = projects.height();
		var toShow = projects.eq(currentPIndex);
		var toHide = currentP;
		var toHideIndex = currentP.index();
		var numToHide = currentN;
		var numToShow = $(".num-upper__text").eq(currentPIndex);
		if (currentPIndex > toHideIndex){
			toHide.animate({
				"top": "-" + h + "px"
			}, 500);
			toHide.removeClass("p-current");
			toHide.find(".project-img").removeClass("appear");
			toHide.hide();
			toShow.css({
				"top": h + "px"
			}).show().animate({
				"top": 0
			}, 500);
			toShow.addClass("p-current");
			toShow.find(".project-img").addClass("appear");
			numToHide.removeClass('current');
			numToShow.addClass('current');
		} else if (currentPIndex < toHideIndex){
			toHide.animate({
				"top": h + "px"
			}, 500);
			toHide.removeClass("p-current");
			toHide.find(".project-img").removeClass("appear");
			toHide.hide();
			toShow.css({
				"top": "-" + h + "px"
			}).show().animate({
				"top": 0
			}, 500);
			toShow.addClass("p-current");
			toShow.find(".project-img").addClass("appear");
			numToHide.removeClass('current');
			numToShow.addClass('current');
		}
	}

	$(window).bind('mousewheel DOMMouseScroll', function (event) {
		var currentProject = $(".myworks-content__project").filter(".p-current");
		var currentProjectIndex = $(".myworks-content__project").filter(".p-current").index();
		var nextProjectIndex;
		var currentNum = $(".num-upper__text").filter(".current");
    if (projects.filter(":animated").length > 0) { return; } //애니메이션 진행 중에 발생한 휠은 무시
		if (event.originalEvent.wheelDelta > 0 || event.originalEvent.detail < 0) {
			// scroll up
			nextProjectIndex = currentProject.prev().index();
			currentProjectIndex = nextProjectIndex >= 0 ? nextProjectIndex : projects.last().index();
		} else {
			// scroll down
			nextProjectIndex = currentProject.next().index();
			currentProjectIndex = nextProjectIndex >= 0 ? nextProjectIndex : projects.first().index();		
		}
		runProject(currentProjectIndex, currentProject, currentNum)
	});



});