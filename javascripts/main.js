$(document).ready(function() {

	console.log("-- Ready --\n");

	var setupSuperslides = function (element) {
		console.log("\n-- Setup Superslides --");

		$(element).superslides();	// TODO: figure out why images loading is delayed

		$('.next, .prev').click(function() {
		    var fn = this.className;
            console.log('Clicked ' + fn);
		    // $('.project').superslides.data('unslider')[fn]();
	  });
	}

	// -- Featherlight --

	console.log("\n-- Featherlight --")

	var featherlightConfig = function () {
		console.log("\n-- Featherlight Config --");
		$.featherlight.defaults =
			{
			selector:     '[data-featherlight]',  /* elements that trigger the lightbox */
			type: {                               /* manually set type of lightbox. Otherwise, it will check for the targetAttrs value. */
				image: false,
				ajax: true
			},
			targetAttr:   'data-featherlight',    /* attribute of the triggered element that contains the selector to the lightbox content */
			openSpeed:    0,                    /* duration of opening animation */
			closeSpeed:   0,                    /* duration of closing animation */
			namespace:    'featherlight',         /* name of the events and css class prefix */
			closeOnBg:    false,                   /* close lightbox on click on the background */
			closeIcon:    'x',             				/* close icon */
			};
	}();

	var featherlightOpen = $.featherlight.methods.open; 

	$.featherlight.methods.open = function() {
		featherlightOpen.apply(this, event); 
		setupSuperslides('.project');
	}

  $('#projects-link').click(function() {
    console.log("\nProjects!");
    $('body').scrollTo('#projects-wrapper', 200);
  });

});