$(document).ready(function() {
	console.log("-- Ready --\n");

	// $('.grid').on('click', function(e) {
	// 	console.log(e);
	// 	$('body').append("<div class='project'</div>");
	// });	


	// Unslider
	// --------

	var setupUnslider = function (element) {

		$('.project').unslider({
			speed: 500,               //  The speed to animate each slide (in milliseconds)
			delay: 3000,              //  The delay between slide animations (in milliseconds)
			complete: function() {},  //  A function that gets called after every slide animation
			keys: true,               //  Enable keyboard (left, right) arrow shortcuts
			dots: true,               //  Display dot navigation
			fluid: true 							//  Support responsive design. May break non-responsive designs
		});

		var unslider = $(element).unslider();

		$('.next, .prev').click(function() {
        var fn = this.className;
				console.log('Clicked ' + fn);
        unslider.data('unslider')[fn]();
    });
	}

	// Featherlight 
	// ------------

	console.log("-- Featherlight --\n")


	var featherlightConfig = function () {
		$.featherlight.defaults =
			{
		    selector:     '[data-featherlight]',  /* elements that trigger the lightbox */
		    context:      'body',                 /* context used to search for the lightbox content and triggers */
		    type: {                               /* manually set type of lightbox. Otherwise, it will check for the targetAttrs value. */
		        image: false,
		        ajax: true 
		    },
		    targetAttr:   'data-featherlight',    /* attribute of the triggered element that contains the selector to the lightbox content */
		    openTrigger:  'click',                /* event that triggers the lightbox */
		    closeTrigger: 'click',                /* event that triggers the closing of the lightbox */
		    openSpeed:    250,                    /* duration of opening animation */
		    closeSpeed:   250,                    /* duration of closing animation */
		    namespace:    'featherlight',         /* name of the events and css class prefix */
		    resetCss:     false,                  /* reset all css */
		    variant:      null,                   /* class that will be added to change look of the lightbox */
		    closeOnBg:    true,                   /* close lightbox on click on the background */
		    closeOnEsc:   true,                   /* close lightbox when pressing esc */
		    closeIcon:    '&#10005;',             /* close icon */
		    background:   null,                   /* custom DOM for the background, wrapper and the closebutton */
		    autostart:    true,                   /* initialize all links with that match "selector" on document ready */
		    open: function(event){                /* opens the lightbox "this" contains $instance with the lightbox, and with the config */
		        $.proxy($.featherlight.methods.open, this, event)();
		        console.log("Hey!\n");
		    },
		    close: function(event){                   /* closes the lightbox "this" contains $instance with the lightbox, and with the config */
		        $.proxy($.featherlight.methods.close, this, event)();
		    }
			};
	}();

	var featherlightOpen = $.featherlight.methods.open; 

	$.featherlight.methods.open = function() {
		featherlightOpen.apply(this, event); 
		console.log("-- Unslider --\n");
		setupUnslider('.project');
	}


});