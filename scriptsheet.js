$(document).ready(function(){   

	var pageHeight = $(".page").height();
	var htmlBody = $('html, body')
	var currentScrollTop = htmlBody.scrollTop();


	function scrollChevDown(){
		currentScrollTop = $(window).scrollTop();
		console.log(currentScrollTop);
		$('html, body').animate({scrollTop: currentScrollTop + pageHeight}, 800);
		console.log($('html, body').scrollTop());
	}

	function scrollDownOne(){
		$('html, body').animate({scrollTop: $('#about-me').position().top - 50}, 800);
	}

	function scrollChevUp(){
		currentScrollTop = $(window).scrollTop();
		console.log(currentScrollTop);
		$('html, body').animate({ scrollTop: currentScrollTop - pageHeight}, 800);
		console.log($('html, body').scrollTop());
	}

	$(".down").click(scrollChevDown);
	$(".up").click(scrollChevUp);


	$("#top-left").click(scrollDownOne);
	$("#top-right").click(function(){
		$('html, body').animate({scrollTop: $("#hobbies").position().top - 50}, 800);
	});
	$("#bottom-left").click(function(){
		$('html, body').animate({scrollTop: $("#skills").position().top - 50}, 800);
	});
	$("#bottom-right").click(function(){
		$('html, body').animate({scrollTop: $("#experience").position().top - 50}, 800);
	});

	//Animation for the About Me page
	$(window).scroll(function(){

		var top = $(document).scrollTop();
		var aboutPage = $('#about-me');
		var aboutPosition = aboutPage.position();

		if(top >= (aboutPosition.top - 50)){
			$("#background-animated").animate({
			opacity: '1',
			width: '1332px',
			height: '98%',
			top: '0',
			left: '0'
			}, 800);
			$("#background-animated").css("width", "1332px");

			setTimeout(function(){$("#about-me-header").fadeIn()}, 800);
			setTimeout(function(){$("#about-me-info").fadeIn()}, 1000);
			setTimeout(function(){$("#img1").fadeIn()}, 2000);
			setTimeout(function(){$("#img2").fadeIn()}, 2800);
			setTimeout(function(){$("#img3").fadeIn()}, 3600);
		}
	});

	//Animation for the Hobbies page
	$(window).scroll(function(){
		var top = $(document).scrollTop();
		var hobbiesPosition = $("#hobbies").position();

		if(top >= (hobbiesPosition.top - 50)){
			$("#hobbies-box").animate({"left": "0"}, 1400);
			$("#hobbies-box").css("display", "inline-block");
		}

		setTimeout(function(){ $("#hobbies-title").fadeIn()}, 1800);
		setTimeout(function(){ $("#hobbies-content").fadeIn()}, 1800);

		setTimeout(function(){
						$("#hobby1").animate({"top":"70px", "opacity":"1"}, 500)
					}, 3000);
		setTimeout(function(){
						$("#hobby2").animate({"top":"70px", "opacity":"1"}, 500)
					}, 3500);
		setTimeout(function(){
						$("#hobby3").animate({"top":"70px", "opacity":"1"}, 500)
					}, 4000);
		setTimeout(function(){
						$("#hobby4").animate({"top":"70px", "opacity":"1"}, 500)
					}, 4500);

		$('html, body').css("overflow", "scroll");
	});


	//Animation for Skills page
	$(window).scroll(function(){
		var top = $(document).scrollTop();
		var skillsPosition = $("#skills").position();

		if(top >= (skillsPosition.top - 50)){
			$("#skills-box").animate({"width": "1332px"}, 1000);
			$("#skills-box").css("width", "1332px");
			setTimeout(function(){$("#skills-title").fadeIn()}, 1500);

			setTimeout(function(){
						$("#skill-java").animate({"margin-left":"20px", "opacity":"1"}, 500)
					}, 2500);
			setTimeout(function(){
						$("#skill-html-css").animate({"margin-left":"20px", "opacity":"1"}, 500)
					}, 3000);
			setTimeout(function(){
						$("#skill-swift").animate({"right":"20px", "opacity":"1"}, 500)
					}, 3500);
			setTimeout(function(){
						$("#skill-javascript").animate({"right":"20px", "opacity":"1"}, 500)
					}, 4000);
			setTimeout(function(){
						$("#skills-box").css("min-width", "1200px")
					}, 4100);
		}
	});

	//Animation for the About Me page
	$(window).scroll(function(){

		var top = $(document).scrollTop();
		var expPage = $('#experience');
		var expPosition = expPage.position();

		if(top >= (expPosition.top - 50)){
			$("#experience-box").fadeIn();
		}
	});

});
















