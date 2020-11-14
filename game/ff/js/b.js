$(document).ready(function(){
	$("#onoffswitch").on('click', function(){
		clickSwitch()
	});
 
	var clickSwitch = function() {
		if ($("#onoffswitch").is(':checked')) {
			console.log("在ON的状态下");
			script.src="https://cdn.jsdelivr.net/gh/wallleap/cdn/js/sakura.js"
		} else {
			console.log("在OFF的状态下");
		}
	};
});
