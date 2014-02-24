console.log('This would be the main JS file.');

$(document).ready(function() {
	console.log("ready");

	$('.grid').on('click', function(e) {
		console.log(e);
		$('body').append("<div class='project'</div>");
	});	

});