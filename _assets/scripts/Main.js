
var Main = {
	init: function () {
		var self = this;
		// console.log('Main.init');

		$.event.trigger('Main:initialized');


	}
};

$(function() {
	Main.init();
});
