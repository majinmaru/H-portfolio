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
	});

	function startPage(){
		$(".myworks-content__project").filter(".p-current").find(".project-img").addClass("appear");
	}
	startPage();

	$(".category-tab").click(function(e){
		e.preventDefault();
		var getIndex = $(this).index();
		$(".myworks-content").find(".myworks-content__project").removeClass('p-current');
		$(".myworks-content").find(".myworks-content__project .project-img").removeClass("appear");
		$(this).find(".category-tab__bar").addClass('current');
		$(this).siblings().find(".category-tab__bar").removeClass('current');
		$(".myworks-content").eq(getIndex).siblings().removeClass('c-current');
		$(".myworks-content").eq(getIndex).addClass('c-current');
		$(".myworks-content").eq(getIndex).find(".myworks-content__project").first().addClass('p-current');
		$(".myworks-content").eq(getIndex).find(".myworks-content__project").first().find(".project-img").addClass("appear");
		$(".myworks-num").find(".num-upper__text").removeClass('current');
		$(".myworks-num").eq(getIndex).addClass('n-current');
		$(".myworks-num").eq(getIndex).siblings().removeClass('n-current');
		$(".myworks-num").eq(getIndex).find(".num-upper__text").first().addClass('current');
	})

	function runProject(currentPIndex, currentP, currentNIndex, currentN){
		var nums = $(".myworks-num").filter(".n-current").find(".num-upper__text");
		var numH = nums.height();
		var numToShow = nums.eq(currentNIndex);
		var numToHide = currentN;
		var numToHideIndex = currentN.index();

		var projects = $(".myworks-content").filter(".c-current").find(".myworks-content__project");
		var h = projects.height();
		var toShow = projects.eq(currentPIndex);
		var toHide = currentP;
		var toHideIndex = currentP.index();

		if (currentPIndex > toHideIndex){
			toHide.animate({
				"top": "-" + h + "px"
			}, 500);
			toHide.removeClass("p-current");
			toHide.find(".project-img").removeClass("appear");
			toShow.css({
				"top": h + "px"
			}).addClass("p-current").animate({
				"top": 0
			}, 500);
			toShow.find(".project-img").addClass("appear");
			numToHide.animate({
				"top": "-" + h + "px"
			}, 500);
			numToHide.removeClass("current");
			numToShow.css({
				"top": h + "px"
			}).addClass("current").animate({
				"top": 0
			}, 500);		
		} else if (currentPIndex < toHideIndex){
			toHide.animate({
				"top": h + "px"
			}, 500);
			toHide.removeClass("p-current");
			toHide.find(".project-img").removeClass("appear");
			toShow.css({
				"top": "-" + h + "px"
			}).addClass("p-current").animate({
				"top": 0
			}, 500);
			toShow.find(".project-img").addClass("appear");
			numToHide.animate({
				"top": h + "px"
			}, 500);
			numToHide.removeClass("current");
			numToShow.css({
				"top": "-" + h + "px"
			}).addClass("current").animate({
				"top": 0
			}, 500);
		}
	}

	$(window).bind('mousewheel DOMMouseScroll', function (event) {
		var currentContent = $(".myworks-content").filter(".c-current");
		var projects = currentContent.find(".myworks-content__project");
		var currentProject = currentContent.find(".myworks-content__project").filter(".p-current");
		var currentProjectIndex = currentProject.index();
		var nextProjectIndex;

		var myworksNum = $(".myworks-num").filter(".n-current");
		var nums = myworksNum.find(".num-upper__text");
		var currentNum = myworksNum.find(".num-upper__text").filter(".current");
		var currentNumIndex = currentNum.index();
		var nextNumIndex;

    if (projects.filter(":animated").length > 0) { return; } //애니메이션 진행 중에 발생한 휠은 무시
		if (event.originalEvent.wheelDelta > 0 || event.originalEvent.detail < 0) {
			// scroll up
			nextProjectIndex = currentProject.prev().index();
			currentProjectIndex = nextProjectIndex >= 0 ? nextProjectIndex : projects.last().index();
			nextNumIndex = currentNum.prev().index();
			currentNumIndex = nextNumIndex >= 0 ? nextNumIndex : nums.last().index();
		} else {
			// scroll down
			nextProjectIndex = currentProject.next().index();
			currentProjectIndex = nextProjectIndex >= 0 ? nextProjectIndex : projects.first().index();
			nextNumIndex = currentNum.next().index();
			currentNumIndex = nextNumIndex >= 0 ? nextNumIndex : nums.first().index();
		}
		runProject(currentProjectIndex, currentProject, currentNumIndex, currentNum)
	});



});