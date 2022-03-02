function startSpin() {
	$(".phase--1").fadeOut(1000);
	$(".spinner").addClass("spinAround");

	setTimeout(function () {
	  setTimeout(function () {
		$(".phase--2").fadeIn(1000);
	  }, 200);
	}, 6800);
  }