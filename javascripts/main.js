console.log('This would be the main JS file.');

$(document).ready(function() {
	console.log("ready");

	// $('.grid').on('click', function(e) {
	// 	console.log(e);
	// 	$('body').append("<div class='project'</div>");
	// });	


	// Featherlight 
	// ------------

	$('.grid').featherlightGallery();

	var featherlightConfig = function () {

		console.log("featherlight config");

		$.featherlight.defaults =
			{
		    selector:     '[data-featherlight]',  /* elements that trigger the lightbox */
		    context:      'body',                 /* context used to search for the lightbox content and triggers */
		    type: {                               /* manually set type of lightbox. Otherwise, it will check for the targetAttrs value. */
		        image: false,
		        ajax: false
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
		    },
		    close: function(event){                   /* closes the lightbox "this" contains $instance with the lightbox, and with the config */
		        $.proxy($.featherlight.methods.close, this, event)();
		    }
			};

		console.log($.featherlight.defaults);

	}();



});