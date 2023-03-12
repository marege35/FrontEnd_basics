$(function() {
	$('#btnOn').click(function(event) {
		updateEventDetails(event);
		$('p').toggle('font-size', '60px');
	});
	$("#btnOff").click(function(event) {
		updateEventDetails(event);
		$('p').removeAttr('style');
	});
});

function afterCompletion() {
	console.log("animation finished");
	}
