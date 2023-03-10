$(function() {
	$("#accessToggle").click(function() {
		$("p").toggle("fast",afterCompletion)
	});
});
function afterCompletion() {
	console.log("animation finished");

}